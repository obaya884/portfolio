import type { Engine, ISourceOptions } from "@tsparticles/engine";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

import styles from "./Top.module.css";

// ParticlesProvider はこのコールバックの参照が変わると例外を投げるため、
// render の内側ではなくモジュールスコープに置く
const initParticlesEngine = (engine: Engine) => loadSlim(engine);

// tsparticles の既定値に任せると見た目が大きく変わるので明示的に指定している。
// どれか一つでも削ると Top の印象が変わる
const PARTICLE_OPTIONS: ISourceOptions = {
  fpsLimit: 60,
  detectRetina: true,
  // 必ず false にすること。有効だと tsparticles がキャンバスを
  // position:fixed でビューポートに固定し、粒子が下のセクションにはみ出す
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
