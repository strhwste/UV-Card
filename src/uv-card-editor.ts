import { LitElement, html, css, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, UVCardConfig } from "./types";

declare global {
  interface HTMLElementTagNameMap {
    "uv-card-editor": UVCardEditor;
    "ha-entity-picker": HTMLElement & {
      hass: HomeAssistant;
      value: string;
      includeDomains: string[];
    };
    "ha-textfield": HTMLElement & { value: string };
    "ha-formfield": HTMLElement;
    "ha-switch": HTMLElement & { checked: boolean };
  }
}

function fireEvent(
  node: EventTarget,
  type: string,
  detail?: unknown
): void {
  node.dispatchEvent(
    new CustomEvent(type, {
      bubbles: true,
      composed: true,
      detail,
    })
  );
}

@customElement("uv-card-editor")
export class UVCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: UVCardConfig;

  static styles = css`
    .editor-row {
      display: flex;
      flex-direction: column;
      gap: 12px;
      padding: 8px 0;
    }

    .section-title {
      font-size: 0.75rem;
      font-weight: 600;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      color: var(--secondary-text-color);
      margin: 8px 0 4px;
    }

    ha-entity-picker,
    ha-textfield {
      width: 100%;
    }

    ha-formfield {
      display: flex;
      align-items: center;
      margin-top: 8px;
    }
  `;

  setConfig(config: UVCardConfig): void {
    this._config = config;
  }

  // ha-entity-picker and ha-textfield fire value-changed with detail.value
  private _entityChanged(ev: CustomEvent, field: keyof UVCardConfig): void {
    if (!this._config) return;
    const value = (ev.detail as { value: string }).value;
    fireEvent(this, "config-changed", {
      config: { ...this._config, [field]: value || undefined },
    });
  }

  // ha-switch fires change; target.checked holds the new state
  private _toggleChanged(ev: Event, field: keyof UVCardConfig): void {
    if (!this._config) return;
    const checked = (ev.target as EventTarget & { checked: boolean }).checked;
    fireEvent(this, "config-changed", {
      config: { ...this._config, [field]: checked },
    });
  }

  private _nameChanged(ev: CustomEvent): void {
    if (!this._config) return;
    const value = (ev.detail as { value: string }).value;
    fireEvent(this, "config-changed", {
      config: { ...this._config, name: value || undefined },
    });
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;

    const cfg = this._config;

    return html`
      <div class="editor-row">
        <div class="section-title">Required</div>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${cfg.uv_index_entity ?? ""}"
          .includeDomains="${["sensor"]}"
          label="UV Index Entity"
          @value-changed="${(e: CustomEvent) =>
            this._entityChanged(e, "uv_index_entity")}"
        ></ha-entity-picker>

        <div class="section-title">Optional Stats</div>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${cfg.max_uv_entity ?? ""}"
          .includeDomains="${["sensor"]}"
          label="Max UV Today Entity"
          @value-changed="${(e: CustomEvent) =>
            this._entityChanged(e, "max_uv_entity")}"
        ></ha-entity-picker>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${cfg.safe_exposure_entity ?? ""}"
          .includeDomains="${["sensor"]}"
          label="Safe Exposure Time Entity"
          @value-changed="${(e: CustomEvent) =>
            this._entityChanged(e, "safe_exposure_entity")}"
        ></ha-entity-picker>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${cfg.protection_from_entity ?? ""}"
          .includeDomains="${["sensor"]}"
          label="Protection From Entity"
          @value-changed="${(e: CustomEvent) =>
            this._entityChanged(e, "protection_from_entity")}"
        ></ha-entity-picker>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${cfg.protection_till_entity ?? ""}"
          .includeDomains="${["sensor"]}"
          label="Protection Till Entity"
          @value-changed="${(e: CustomEvent) =>
            this._entityChanged(e, "protection_till_entity")}"
        ></ha-entity-picker>

        <div class="section-title">Display</div>

        <ha-entity-picker
          .hass="${this.hass}"
          .value="${cfg.uv_level_entity ?? ""}"
          .includeDomains="${["sensor"]}"
          label="UV Level Label Entity (optional)"
          @value-changed="${(e: CustomEvent) =>
            this._entityChanged(e, "uv_level_entity")}"
        ></ha-entity-picker>

        <ha-textfield
          label="Card Name (optional)"
          .value="${cfg.name ?? ""}"
          @value-changed="${this._nameChanged}"
        ></ha-textfield>

        <ha-formfield label="Show Sun Arc">
          <ha-switch
            .checked="${cfg.show_sun_arc !== false}"
            @change="${(e: Event) => this._toggleChanged(e, "show_sun_arc")}"
          ></ha-switch>
        </ha-formfield>
      </div>
    `;
  }
}
