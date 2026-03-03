import { LitElement, html, TemplateResult } from "lit";
import { customElement, property, state } from "lit/decorators.js";
import { HomeAssistant, UVCardConfig } from "./types";

declare global {
  interface HTMLElementTagNameMap {
    "uv-card-editor": UVCardEditor;
  }
}

const LABELS: Record<string, string> = {
  uv_index_entity: "UV Index Entity",
  name: "Card Name",
  max_uv_entity: "Max UV Today",
  safe_exposure_entity: "Safe Exposure Time",
  protection_from_entity: "Protection Start",
  protection_till_entity: "Protection End",
  uv_level_entity: "UV Level Label Entity",
  show_sun_arc: "Show Sun Arc",
};

const SCHEMA = [
  {
    name: "uv_index_entity",
    required: true,
    selector: { entity: { domain: "sensor" } },
  },
  {
    name: "name",
    selector: { text: {} },
  },
  {
    type: "grid" as const,
    name: "",
    schema: [
      {
        name: "max_uv_entity",
        selector: { entity: { domain: "sensor" } },
      },
      {
        name: "safe_exposure_entity",
        selector: { entity: { domain: "sensor" } },
      },
      {
        name: "protection_from_entity",
        selector: { entity: { domain: "sensor" } },
      },
      {
        name: "protection_till_entity",
        selector: { entity: { domain: "sensor" } },
      },
    ],
  },
  {
    name: "uv_level_entity",
    selector: { entity: { domain: "sensor" } },
  },
  {
    name: "show_sun_arc",
    selector: { boolean: {} },
  },
];

@customElement("uv-card-editor")
export class UVCardEditor extends LitElement {
  @property({ attribute: false }) public hass!: HomeAssistant;
  @state() private _config!: UVCardConfig;

  setConfig(config: UVCardConfig): void {
    this._config = config;
  }

  private _computeLabel = (entry: { name: string }): string =>
    LABELS[entry.name] ?? entry.name;

  private _valueChanged(ev: CustomEvent): void {
    const config = ev.detail.value as UVCardConfig;
    this.dispatchEvent(
      new CustomEvent("config-changed", {
        bubbles: true,
        composed: true,
        detail: { config },
      })
    );
  }

  protected render(): TemplateResult {
    if (!this.hass || !this._config) return html``;

    return html`
      <ha-form
        .hass=${this.hass}
        .data=${this._config}
        .schema=${SCHEMA}
        .computeLabel=${this._computeLabel}
        @value-changed=${this._valueChanged}
      ></ha-form>
    `;
  }
}
