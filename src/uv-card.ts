import { LitElement, html, PropertyValues, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { cardStyles } from "./styles";
import {
  HomeAssistant,
  UVCardConfig,
  UVLevelInfo,
  getUVLevel,
} from "./types";
import "./uv-card-editor";

declare global {
  interface HTMLElementTagNameMap {
    "uv-card": UVCard;
  }
}

@customElement("uv-card")
export class UVCard extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: UVCardConfig;
  @state() private _displayedUV: number = 0;

  private _targetUV: number = 0;
  private _countUpRaf: number = 0;
  private _isFirstRender: boolean = true;
  private _lastColor: string = "";

  static styles = cardStyles;

  // Sections dashboard grid layout (HA 2023.10+)
  // Section width is divided into 12 columns (~30px each); rows are 56px tall.
  // Recommend multiples of 3 for columns.
  static getGridOptions() {
    return {
      grid_rows: 4,
      grid_columns: 6,      // half a section width by default
      grid_min_rows: 3,
      grid_max_rows: 8,
      grid_min_columns: 3,
      grid_max_columns: 12,
    };
  }

  static getConfigElement(): HTMLElement {
    return document.createElement("uv-card-editor");
  }

  static getStubConfig(hass: HomeAssistant): UVCardConfig {
    const uvEntity = Object.keys(hass.states).find(
      (id) =>
        id.startsWith("sensor.") &&
        (id.includes("uv_index") || id.includes("current_uv"))
    );
    return {
      type: "uv-card",
      uv_index_entity: uvEntity ?? "sensor.current_uv_index",
      show_sun_arc: true,
    };
  }

  setConfig(config: UVCardConfig): void {
    if (!config.uv_index_entity) {
      throw new Error("uv_index_entity is required");
    }
    this._config = { show_sun_arc: true, ...config };
  }

  disconnectedCallback(): void {
    super.disconnectedCallback();
    cancelAnimationFrame(this._countUpRaf);
  }

  protected updated(changedProperties: PropertyValues): void {
    super.updated(changedProperties);

    // Only update CSS variables when the UV color actually changes
    const color = getUVLevel(this._targetUV).color;
    if (color !== this._lastColor) {
      this._lastColor = color;
      const alphaHex = Math.round(0.28 * 255).toString(16).padStart(2, "0");
      this.style.setProperty("--uv-color", color);
      this.style.setProperty("--uv-color-alpha", color + alphaHex);
    }

    // Handle hass changes: check if UV value changed
    if (changedProperties.has("hass") && this._config) {
      const newUV = this._getUVFromHass();
      if (newUV !== this._targetUV) {
        const prevUV = this._targetUV;
        this._targetUV = newUV;

        if (this._isFirstRender) {
          // First render: run load-in animation
          this._isFirstRender = false;
          const orb = this.shadowRoot?.querySelector<HTMLElement>(".orb");
          if (orb) {
            orb.classList.add("orb-entering");
            orb.addEventListener(
              "animationend",
              () => orb.classList.remove("orb-entering"),
              { once: true }
            );
          }
          this._triggerCountUp(0, newUV, false);
        } else {
          // Subsequent changes: count up with brightness pulse
          this._triggerCountUp(prevUV, newUV, true);
        }
      }
    }
  }

  private _getUVFromHass(): number {
    if (!this.hass || !this._config?.uv_index_entity) return 0;
    const entityState = this.hass.states[this._config.uv_index_entity]?.state;
    const val = parseFloat(entityState ?? "0");
    return isNaN(val) ? 0 : val;
  }

  private _triggerCountUp(from: number, to: number, pulse: boolean): void {
    cancelAnimationFrame(this._countUpRaf);
    const duration = 700;
    const startTime = performance.now();
    const animate = (now: number) => {
      const t = Math.min((now - startTime) / duration, 1);
      // Cubic ease-out
      const eased = 1 - Math.pow(1 - t, 3);
      this._displayedUV = from + (to - from) * eased;
      if (t < 1) {
        this._countUpRaf = requestAnimationFrame(animate);
      } else {
        this._displayedUV = to;
        if (pulse) this._triggerBrightnessPulse();
      }
    };
    this._countUpRaf = requestAnimationFrame(animate);
  }

  private _triggerBrightnessPulse(): void {
    const orb = this.shadowRoot?.querySelector<HTMLElement>(".orb");
    if (!orb) return;
    orb.classList.remove("orb-pulsing");
    // Force reflow to restart the CSS animation
    void orb.offsetWidth;
    orb.classList.add("orb-pulsing");
    orb.addEventListener(
      "animationend",
      () => orb.classList.remove("orb-pulsing"),
      { once: true }
    );
  }

  private _renderSunArc(): TemplateResult | string {
    if (!this._config?.show_sun_arc) return "";
    const sunEntity = this.hass?.states["sun.sun"];
    if (!sunEntity) return "";

    let progress = 0.5;
    try {
      const isAboveHorizon = sunEntity.state === "above_horizon";
      const nextRising = new Date(sunEntity.attributes.next_rising as string);
      const nextSetting = new Date(sunEntity.attributes.next_setting as string);

      // next_rising is always future. If sun is above horizon, today's
      // sunrise was 24h before next_rising.
      const todaySunrise = isAboveHorizon
        ? new Date(nextRising.getTime() - 24 * 60 * 60 * 1000)
        : nextRising;
      const todaySunset = isAboveHorizon
        ? nextSetting
        : new Date(nextSetting.getTime() - 24 * 60 * 60 * 1000);

      const now = Date.now();
      const dayLength = todaySunset.getTime() - todaySunrise.getTime();
      const elapsed = now - todaySunrise.getTime();
      progress = Math.max(0, Math.min(1, elapsed / dayLength));
    } catch {
      // fallback to midday if parsing fails
    }

    // Semicircle: left anchor (14, 52), right anchor (186, 52), radius 86
    // Angle goes from PI (left/sunrise) → 0 (right/sunset)
    const cxSvg = 100;
    const cySvg = 52;
    const r = 86;
    const angle = Math.PI - progress * Math.PI;
    const dotX = (cxSvg + r * Math.cos(angle)).toFixed(2);
    const dotY = (cySvg - r * Math.sin(angle)).toFixed(2);

    return html`
      <div class="sun-arc-wrapper">
        <svg
          class="sun-arc"
          viewBox="0 0 200 58"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path class="sun-track" d="M 14 52 A 86 86 0 0 1 186 52" />
          <circle class="sun-dot" cx="${dotX}" cy="${dotY}" r="7" />
        </svg>
      </div>
    `;
  }

  private _deriveStats(): {
    maxUV: string;
    safeExposure: string;
    protWindow: string;
    uvLevel: UVLevelInfo;
  } {
    const hass = this.hass;
    const cfg = this._config;
    const uvLevel = getUVLevel(this._targetUV);

    const maxUV = cfg.max_uv_entity
      ? (hass?.states[cfg.max_uv_entity]?.state ?? "—")
      : "—";

    const safeExposure = cfg.safe_exposure_entity
      ? (hass?.states[cfg.safe_exposure_entity]?.state ?? "—")
      : "—";

    const protFrom = cfg.protection_from_entity
      ? (hass?.states[cfg.protection_from_entity]?.state ?? "")
      : "";
    const protTill = cfg.protection_till_entity
      ? (hass?.states[cfg.protection_till_entity]?.state ?? "")
      : "";

    const protWindow =
      protFrom && protTill
        ? `${protFrom} – ${protTill}`
        : protFrom || protTill || "—";

    return { maxUV, safeExposure, protWindow, uvLevel };
  }

  protected render(): TemplateResult {
    if (!this._config || !this.hass) {
      return html`<ha-card><div class="card-inner"></div></ha-card>`;
    }

    // Show error state if required entity is missing or unavailable
    const entity = this.hass.states[this._config.uv_index_entity];
    if (!entity) {
      return html`
        <ha-card>
          <div class="card-inner error-state">
            <span class="error-icon">⚠</span>
            <span class="error-title">Entity not found</span>
            <span class="error-body">${this._config.uv_index_entity}</span>
          </div>
        </ha-card>
      `;
    }
    if (entity.state === "unavailable" || entity.state === "unknown") {
      return html`
        <ha-card>
          <div class="card-inner error-state">
            <span class="error-icon">⚠</span>
            <span class="error-title">UV data unavailable</span>
            <span class="error-body">${entity.state}</span>
          </div>
        </ha-card>
      `;
    }

    const { maxUV, safeExposure, protWindow, uvLevel } = this._deriveStats();
    const displayNumber = this._displayedUV.toFixed(1);
    const cardName = this._config.name ?? "";

    return html`
      <ha-card>
        <div class="card-bg" aria-hidden="true"></div>
        <div class="card-inner">
          ${cardName ? html`<div class="card-name">${cardName}</div>` : ""}
          ${this._renderSunArc()}
          <div class="orb-container">
            <div class="ripple-ring"></div>
            <div class="ripple-ring"></div>
            <div class="ripple-ring"></div>
            <div
              class="orb"
              role="img"
              aria-label="UV index ${displayNumber}, ${uvLevel.label}"
            >
              <span class="uv-number">${displayNumber}</span>
              <span class="uv-label">${uvLevel.label}</span>
            </div>
          </div>
          <div class="stats-row">
            ${maxUV !== "—"
              ? html`
                  <div class="stat-chip">
                    <span class="stat-label">Max Today</span>
                    <span class="stat-value highlight">${maxUV}</span>
                  </div>
                `
              : ""}
            ${safeExposure !== "—"
              ? html`
                  <div class="stat-chip">
                    <span class="stat-label">Safe Time</span>
                    <span class="stat-value">${safeExposure} min</span>
                  </div>
                `
              : ""}
            ${protWindow !== "—"
              ? html`
                  <div class="stat-chip">
                    <span class="stat-label">Protection</span>
                    <span class="stat-value">${protWindow}</span>
                  </div>
                `
              : ""}
          </div>
        </div>
      </ha-card>
    `;
  }
}

// Register in HA card picker
type CustomWindow = Window & { customCards?: Array<Record<string, unknown>> };
(window as CustomWindow).customCards = (window as CustomWindow).customCards || [];
(window as CustomWindow).customCards!.push({
  type: "uv-card",
  name: "UV Card",
  description: "Neural Orb UV index card powered by OpenUV",
  preview: true,
  documentationURL: "https://github.com/strhwste/UV-Card",
});
