import { css } from "lit";

export const cardStyles = css`
  :host {
    display: block;
  }

  ha-card {
    position: relative;
    padding: 0;
    background: var(--card-background-color);
    overflow: visible;
  }

  /* Subtle UV-tinted ambient glow at top of card */
  .card-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    border-radius: var(--ha-card-border-radius, 12px);
    overflow: hidden;
    background: radial-gradient(
      ellipse at 50% 30%,
      color-mix(in srgb, var(--uv-color, #4caf50) 12%, transparent),
      transparent 70%
    );
    pointer-events: none;
  }

  /* Card inner layout */
  .card-inner {
    position: relative;
    z-index: 1;
    padding: 16px 16px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
  }

  /* ── Sun arc ── */
  .sun-arc-wrapper {
    width: 100%;
    max-width: 200px;
  }

  .sun-arc {
    width: 100%;
    overflow: visible;
  }

  .sun-track {
    stroke: var(--divider-color, rgba(255, 255, 255, 0.12));
    stroke-width: 1;
    fill: none;
    stroke-dasharray: 3 3;
    stroke-linecap: round;
  }

  .sun-dot {
    fill: #FFC107;
    filter: drop-shadow(0 0 4px rgba(255, 193, 7, 0.7))
            drop-shadow(0 0 8px rgba(255, 193, 7, 0.3));
  }

  .sun-shadow {
    fill: rgba(0, 0, 0, 0.15);
  }

  /* Card name */
  .card-name {
    font-size: 0.7rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    text-align: center;
  }

  /* ── Orb container (holds glow + shadow + orb) ── */
  .orb-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 160px;
    height: 150px;
    margin: 0 0 4px;
  }

  /* Soft colored glow behind the orb */
  .orb-glow {
    position: absolute;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: var(--uv-color, #4caf50);
    opacity: 0.2;
    filter: blur(36px);
    z-index: 0;
    pointer-events: none;
    transition: opacity 0.6s ease;
  }

  /* Sun-driven shadow beneath the orb */
  .orb-shadow {
    position: absolute;
    bottom: 4px;
    width: 70px;
    height: 14px;
    border-radius: 50%;
    background: radial-gradient(
      ellipse,
      rgba(0, 0, 0, 0.35),
      transparent 70%
    );
    transform:
      translateX(var(--shadow-x, 0px))
      translateY(var(--shadow-y, 0px))
      scaleX(var(--shadow-scale-x, 1));
    opacity: var(--shadow-opacity, 0.15);
    z-index: 0;
    pointer-events: none;
    transition: transform 2s ease, opacity 2s ease;
  }

  /* ── The orb ── */
  .orb {
    position: relative;
    width: 110px;
    height: 110px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    /* Two-layer gradient: specular highlight + sphere shading */
    background:
      radial-gradient(
        circle at 34% 28%,
        rgba(255, 255, 255, 0.35),
        transparent 40%
      ),
      radial-gradient(
        circle at 50% 50%,
        color-mix(in srgb, var(--uv-color, #4caf50) 50%, white 50%),
        color-mix(in srgb, var(--uv-color, #4caf50) 95%, black 5%)
      );
    box-shadow:
      0 4px 20px color-mix(in srgb, var(--uv-color, #4caf50) 35%, transparent),
      0 0 0 1px color-mix(in srgb, var(--uv-color, #4caf50) 12%, transparent),
      inset 0 -2px 6px rgba(0, 0, 0, 0.08),
      inset 0 2px 0 rgba(255, 255, 255, 0.12);
    z-index: 1;
    cursor: default;
    user-select: none;
    transition: box-shadow 0.6s ease, background 0.6s ease;
  }

  .orb.orb-entering {
    animation: orbIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
  }

  .orb.orb-pulsing {
    animation: pulse 0.4s ease-out;
  }

  @keyframes orbIn {
    from {
      transform: scale(0.6);
      opacity: 0;
    }
    to {
      transform: scale(1);
      opacity: 1;
    }
  }

  @keyframes pulse {
    0% { filter: brightness(1); }
    30% { filter: brightness(1.25); }
    100% { filter: brightness(1); }
  }

  /* UV number inside orb */
  .uv-number {
    font-size: 2.4rem;
    font-weight: 700;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.18);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }

  .uv-label {
    font-size: 0.6rem;
    font-weight: 600;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.9);
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.18);
  }

  /* ── Stats row ── */
  .stats-row {
    display: flex;
    gap: 16px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .stat-item {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    min-width: 60px;
  }

  .stat-label {
    font-size: 0.58rem;
    font-weight: 500;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  .stat-value {
    font-size: 0.82rem;
    font-weight: 600;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .stat-value.highlight {
    color: var(--uv-color, var(--primary-color));
  }

  /* ── Error state ── */
  .error-state {
    justify-content: center;
    padding: 24px 16px;
    gap: 6px;
    min-height: 100px;
  }

  .error-icon {
    font-size: 1.5rem;
    color: var(--error-color, #f44336);
    line-height: 1;
  }

  .error-title {
    font-size: 0.85rem;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .error-body {
    font-size: 0.7rem;
    color: var(--secondary-text-color);
    font-family: monospace;
  }
`;
