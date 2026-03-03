export interface UVCardConfig {
  type: string;
  name?: string;
  uv_index_entity: string;
  uv_level_entity?: string;
  max_uv_entity?: string;
  safe_exposure_entity?: string;
  protection_from_entity?: string;
  protection_till_entity?: string;
  show_sun_arc?: boolean;
}

export interface HassEntity {
  entity_id: string;
  state: string;
  attributes: Record<string, unknown>;
  last_changed: string;
  last_updated: string;
}

export interface HomeAssistant {
  states: Record<string, HassEntity>;
  themes: Record<string, unknown>;
  locale: Record<string, unknown>;
}

export interface UVLevelInfo {
  label: string;
  min: number;
  max: number;
  color: string;
}

export const UV_LEVELS: Record<string, UVLevelInfo> = {
  LOW: { label: "Low", min: 0, max: 2, color: "#4CAF50" },
  MODERATE: { label: "Moderate", min: 3, max: 5, color: "#FFC107" },
  HIGH: { label: "High", min: 6, max: 7, color: "#FF9800" },
  VERY_HIGH: { label: "Very High", min: 8, max: 10, color: "#F44336" },
  EXTREME: { label: "Extreme", min: 11, max: Infinity, color: "#9C27B0" },
};

export function getUVLevel(index: number): UVLevelInfo {
  const uv = Math.max(0, index);
  if (uv <= 2) return UV_LEVELS.LOW;
  if (uv <= 5) return UV_LEVELS.MODERATE;
  if (uv <= 7) return UV_LEVELS.HIGH;
  if (uv <= 10) return UV_LEVELS.VERY_HIGH;
  return UV_LEVELS.EXTREME;
}
