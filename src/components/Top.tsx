import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import styles from "./Top.module.css";

// ParticlesProvider throws if this callback is not referentially stable,
// so it lives at module scope rather than inside render.
const initParticlesEngine = (engine: Engine) => loadSlim(engine);

// These values restate the particles.js defaults that react-particles-js
// used to supply implicitly; tsparticles ships different ones.
const PARTICLE_OPTIONS: ISourceOptions = {
  fpsLimit: 60,
  detectRetina: true,
  // tsparticles defaults to a fixed, viewport-covering canvas. The old
  // react-particles-js canvas lived inside its container, so the effect stayed
  // clipped to the Top section instead of bleeding over the ones below it.
  fullScreen: { enable: false },
  particles: {
    number: { value: 60, density: { enable: true, width: 800, height: 800 } },
    color: { value: "#ffffff" },
    shape: { type: "circle" },
    opacity: { value: 0.5 },
    size: { value: { min: 1, max: 3 } },
    links: {
      enable: true,
      distance: 150,
      color: "#ffffff",
      opacity: 0.4,
      width: 1,
    },
    move: {
      enable: true,
      // particles.js defaulted to 6; halved for a calmer drift.
      speed: 3,
      direction: "none",
      random: false,
      straight: false,
      outModes: { default: "out" },
    },
  },
  interactivity: {
    events: {
      onHover: { enable: true, mode: "connect" },
      onClick: { enable: true, mode: "repulse" },
    },
    modes: {
      connect: { distance: 80, links: { opacity: 0.5 }, radius: 60 },
      repulse: { distance: 200, duration: 0.4 },
    },
  },
};

function Top() {
  return (
    <div id="top" className={styles.top}>
      <ParticlesProvider init={initParticlesEngine}>
        <Particles className={styles.particles} options={PARTICLE_OPTIONS} />
      </ParticlesProvider>
      <h1 className={styles.title}>Takumi Obayashi</h1>
      <h2 className={styles.subtitle}>portfolio</h2>
      <div className={styles.scrollButton}>
        <a href="#about">
          <span></span>
          <span></span>
          <span></span>
          Scroll
        </a>
      </div>
    </div>
  );
}

export default Top;
