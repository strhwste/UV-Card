# UV Card

[![hacs_badge](https://img.shields.io/badge/HACS-Custom-orange.svg)](https://github.com/hacs/integration)
[![GitHub release](https://img.shields.io/github/release/strhwste/UV-Card.svg)](https://github.com/strhwste/UV-Card/releases)

A beautiful **Neural Orb** UV index card for Home Assistant, powered by the [OpenUV](https://www.home-assistant.io/integrations/openuv/) integration.

Features a glowing animated orb with ripple rings, a sun position arc, and frosted-glass stat chips — all using your active HA theme variables.

---

## Features

- **Animated orb** — glowing circle color-shifts between green → amber → orange → red → violet based on UV level
- **Ripple rings** — 3 staggered rings continuously radiate outward
- **Sun arc header** — thin SVG arc with an animated sun dot showing solar position
- **Load animation** — orb scales in and the UV number counts up from 0
- **Frosted stat chips** — Max UV, Safe Exposure, and Protection Window
- **Full HA theme support** — uses CSS variables for correct dark/light/custom theme rendering
- **Visual editor** — configure all entities without touching YAML

---

## Installation via HACS

1. Open HACS in Home Assistant
2. Go to **Frontend**
3. Click the three-dot menu → **Custom repositories**
4. Add `https://github.com/strhwste/UV-Card` with category **Lovelace**
5. Click **Install**
6. Refresh your browser

HACS automatically registers the resource — no manual `configuration.yaml` changes needed.

---

## Manual Installation

1. Download `uv-card.js` from the [latest release](https://github.com/strhwste/UV-Card/releases)
2. Copy it to `<config>/www/uv-card/uv-card.js`
3. Add the resource:

```yaml
resources:
  - url: /local/uv-card/uv-card.js
    type: module
```

---

## Configuration

Add via the UI card picker (search "UV Card") or use YAML:

```yaml
type: custom:uv-card
uv_index_entity: sensor.current_uv_index
uv_level_entity: sensor.current_uv_level          # optional
max_uv_entity: sensor.max_uv_index                # optional
safe_exposure_entity: sensor.safe_exposure_time_skin_type_3  # optional
protection_from_entity: sensor.protection_from_str           # optional
protection_till_entity: sensor.protection_till_str           # optional
show_sun_arc: true                                # optional, default: true
name: "UV Index"                                  # optional card title
```

### Options

| Option | Type | Required | Description |
|--------|------|----------|-------------|
| `uv_index_entity` | entity | **Yes** | Current UV index sensor |
| `uv_level_entity` | entity | No | UV level label sensor (falls back to calculated label) |
| `max_uv_entity` | entity | No | Max UV today sensor |
| `safe_exposure_entity` | entity | No | Safe exposure time sensor (minutes) |
| `protection_from_entity` | entity | No | Time when UV protection starts |
| `protection_till_entity` | entity | No | Time when UV protection ends |
| `show_sun_arc` | boolean | No | Show sun position arc (default: `true`) |
| `name` | string | No | Custom card title |

---

## UV Level Colors

| Level | UV Index | Color |
|-------|----------|-------|
| Low | 0–2 | Green |
| Moderate | 3–5 | Amber |
| High | 6–7 | Orange |
| Very High | 8–10 | Red |
| Extreme | 11+ | Purple |

---

## OpenUV Entity Names

Standard entity names created by the OpenUV integration:

| Entity | Description |
|--------|-------------|
| `sensor.current_uv_index` | Current UV index |
| `sensor.current_uv_level` | UV level label |
| `sensor.max_uv_index` | Today's peak UV |
| `sensor.safe_exposure_time_skin_type_1` to `_6` | Safe exposure per skin type |
| `sensor.protection_from_str` | Protection window start |
| `sensor.protection_till_str` | Protection window end |

---

## Development

```bash
npm install
npm run build    # Build once
npm run watch    # Build on file changes
```

Output: `dist/uv-card.js`

---

## License

MIT © strhwste
