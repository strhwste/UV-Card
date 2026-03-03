import { css } from "lit";

export const cardStyles = css`
  :host {
    display: block;
    transition: transform 0.2s ease;
  }

  :host(:hover) {
    transform: translateY(-2px);
  }

  ha-card {
    overflow: hidden;
    position: relative;
    padding: 0;
    background: var(--card-background-color);
  }

  /* Animated mesh gradient background layer */
  .card-bg {
    position: absolute;
    inset: 0;
    z-index: 0;
    background: radial-gradient(
      ellipse at 20% 30%,
      color-mix(in srgb, var(--uv-color, #4caf50) 18%, transparent),
      transparent 60%
    ),
    radial-gradient(
      ellipse at 80% 70%,
      color-mix(in srgb, var(--uv-color, #4caf50) 10%, transparent),
      transparent 50%
    );
    animation: meshShift 12s ease-in-out infinite alternate;
    pointer-events: none;
  }

  @keyframes meshShift {
    0% {
      filter: hue-rotate(0deg) brightness(1.0);
      opacity: 0.7;
    }
    33% {
      filter: hue-rotate(12deg) brightness(1.04);
      opacity: 0.9;
    }
    66% {
      filter: hue-rotate(-8deg) brightness(0.96);
      opacity: 0.75;
    }
    100% {
      filter: hue-rotate(0deg) brightness(1.0);
      opacity: 0.7;
    }
  }

  /* Card inner layout */
  .card-inner {
    position: relative;
    z-index: 1;
    padding: 16px 20px 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 4px;
  }

  /* Sun arc header */
  .sun-arc-wrapper {
    width: 100%;
    max-width: 280px;
    margin-bottom: 4px;
  }

  .sun-arc {
    width: 100%;
    overflow: visible;
  }

  .sun-track {
    stroke: rgba(255, 255, 255, 0.15);
    stroke-width: 1.5;
    fill: none;
    stroke-linecap: round;
  }

  .sun-dot {
    fill: #FFC107;
    filter: drop-shadow(0 0 4px #FFC107) drop-shadow(0 0 8px rgba(255, 193, 7, 0.5));
    animation: sunFloat 3s ease-in-out infinite;
  }

  @keyframes sunFloat {
    0%, 100% { transform: translateY(0); }
    50% { transform: translateY(-2px); }
  }

  /* Card name */
  .card-name {
    font-size: 0.75rem;
    font-weight: 500;
    letter-spacing: 0.08em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    margin-bottom: 8px;
    align-self: flex-start;
    width: 100%;
    text-align: center;
  }

  /* Orb container (holds ripple rings + orb) */
  .orb-container {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 180px;
    height: 180px;
    margin: 8px 0 16px;
  }

  /* Ripple rings */
  .ripple-ring {
    position: absolute;
    border-radius: 50%;
    border: 2px solid var(--uv-color-alpha, rgba(76, 175, 80, 0.3));
    width: 100%;
    height: 100%;
    animation: rippleOut 3s ease-out infinite;
    pointer-events: none;
  }

  .ripple-ring:nth-child(1) {
    animation-delay: 0s;
  }

  .ripple-ring:nth-child(2) {
    animation-delay: 1s;
  }

  .ripple-ring:nth-child(3) {
    animation-delay: 2s;
  }

  @keyframes rippleOut {
    0% {
      transform: scale(0.85);
      opacity: 0.7;
    }
    100% {
      transform: scale(2.0);
      opacity: 0;
    }
  }

  /* The orb itself */
  .orb {
    position: relative;
    width: 160px;
    height: 160px;
    border-radius: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2px;
    background: radial-gradient(
      circle at 38% 35%,
      color-mix(in srgb, var(--uv-color, #4caf50) 40%, white 60%),
      color-mix(in srgb, var(--uv-color, #4caf50) 85%, black 15%)
    );
    box-shadow:
      0 0 0 2px color-mix(in srgb, var(--uv-color, #4caf50) 60%, transparent 40%),
      0 0 24px 6px var(--uv-color-alpha, rgba(76, 175, 80, 0.35)),
      inset 0 1px 0 rgba(255, 255, 255, 0.25);
    animation: glowPulse 4s ease-in-out infinite;
    z-index: 1;
    cursor: default;
    user-select: none;
  }

  .orb.orb-entering {
    animation: orbScaleIn 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards, glowPulse 4s ease-in-out 0.6s infinite;
  }

  .orb.orb-pulsing {
    animation: brightnessPulse 0.5s ease-out forwards, glowPulse 4s ease-in-out infinite;
  }

  @keyframes glowPulse {
    0%, 100% {
      box-shadow:
        0 0 0 2px color-mix(in srgb, var(--uv-color, #4caf50) 60%, transparent 40%),
        0 0 24px 6px var(--uv-color-alpha, rgba(76, 175, 80, 0.35)),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
    50% {
      box-shadow:
        0 0 0 2px color-mix(in srgb, var(--uv-color, #4caf50) 60%, transparent 40%),
        0 0 48px 16px var(--uv-color-alpha, rgba(76, 175, 80, 0.35)),
        inset 0 1px 0 rgba(255, 255, 255, 0.25);
    }
  }

  @keyframes orbScaleIn {
    from {
      transform: scale(0.6);
      opacity: 0;
    }
    to {
      transform: scale(1.0);
      opacity: 1;
    }
  }

  @keyframes brightnessPulse {
    0% { filter: brightness(1); }
    30% { filter: brightness(1.5); }
    100% { filter: brightness(1); }
  }

  /* UV number inside orb */
  .uv-number {
    font-size: 3.2rem;
    font-weight: 800;
    line-height: 1;
    color: #ffffff;
    text-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
    font-variant-numeric: tabular-nums;
    letter-spacing: -0.02em;
  }

  .uv-label {
    font-size: 0.75rem;
    font-weight: 600;
    letter-spacing: 0.06em;
    text-transform: uppercase;
    color: rgba(255, 255, 255, 0.85);
    text-shadow: 0 1px 4px rgba(0, 0, 0, 0.3);
  }

  /* Stats row */
  .stats-row {
    display: flex;
    gap: 8px;
    width: 100%;
    justify-content: center;
    flex-wrap: wrap;
  }

  .stat-chip {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2px;
    padding: 8px 14px;
    border-radius: 999px;
    background: rgba(255, 255, 255, 0.08);
    backdrop-filter: blur(12px);
    -webkit-backdrop-filter: blur(12px);
    border: 1px solid rgba(255, 255, 255, 0.12);
    min-width: 72px;
    flex: 1;
    max-width: 120px;
  }

  .stat-label {
    font-size: 0.62rem;
    font-weight: 600;
    letter-spacing: 0.07em;
    text-transform: uppercase;
    color: var(--secondary-text-color);
    white-space: nowrap;
  }

  .stat-value {
    font-size: 0.9rem;
    font-weight: 700;
    color: var(--primary-text-color);
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }

  .stat-value.highlight {
    color: var(--uv-color, var(--primary-color));
  }

  /* Error state */
  .error-state {
    justify-content: center;
    padding: 24px 20px;
    gap: 6px;
    min-height: 120px;
  }

  .error-icon {
    font-size: 1.8rem;
    color: var(--error-color, #f44336);
    line-height: 1;
  }

  .error-title {
    font-size: 0.9rem;
    font-weight: 600;
    color: var(--primary-text-color);
  }

  .error-body {
    font-size: 0.75rem;
    color: var(--secondary-text-color);
    font-family: monospace;
  }
`;
