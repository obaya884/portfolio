import React from "react";
import styled from "styled-components";
import { Particles, ParticlesProvider } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

// ParticlesProvider throws if this callback is not referentially stable,
// so it lives at module scope rather than inside render.
const initParticlesEngine = (engine) => loadSlim(engine);

// These values restate the particles.js defaults that react-particles-js
// used to supply implicitly; tsparticles ships different ones.
const PARTICLE_OPTIONS = {
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
      speed: 6,
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

class Top extends React.Component {
  render() {
    return (
      <TopContainer id="top">
        <ParticlesProvider init={initParticlesEngine}>
          <Particles id="tsparticles" options={PARTICLE_OPTIONS} />
        </ParticlesProvider>
        <h1>Takumi Obayashi</h1>
        <h2>portfolio</h2>
        <ScrollButton>
          <a href="#about">
            <span></span>
            <span></span>
            <span></span>
            Scroll
          </a>
        </ScrollButton>
      </TopContainer>
    );
  }
}

const TopContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100vw;
  background-color: #2fb37e;
  font-family: Futura, sans-serif;
  h1 {
    margin-top: 250px;
    margin-bottom: 12px;
    font-size: 108px;
    font-weight: 500;
    z-index: 2;
  }
  h2 {
    margin: 0;
    font-size: 76px;
    font-weight: 500;
    z-index: 2;
  }

  div#tsparticles {
    position: absolute;
    z-index: 1;
    height: 100vh;
    width: 100vw;
  }
`;

const ScrollButton = styled.div`
  a {
    padding-top: 70px;
    position: absolute;
    left: 50%;
    bottom: 20px;
    text-decoration: none;
    z-index: 2;
    color: #fff;
    font-size: 1.3em;
    font-weight: 400;
    -webkit-transform: translate(0, -50%);
    transform: translate(0, -50%);
  }
  span {
    position: absolute;
    top: 0;
    left: 50%;
    width: 24px;
    height: 24px;
    margin-left: -12px;
    border-left: 1px solid #fff;
    border-bottom: 1px solid #fff;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
    -webkit-animation: sdb 2s infinite;
    animation: sdb 2s infinite;
    opacity: 0;
    box-sizing: border-box;

    :nth-of-type(1) {
      -webkit-animation-delay: 0s;
      animation-delay: 0s;
    }
    :nth-of-type(2) {
      top: 16px;
      -webkit-animation-delay: 0.15s;
      animation-delay: 0.15s;
    }
    :nth-of-type(3) {
      top: 32px;
      -webkit-animation-delay: 0.3s;
      animation-delay: 0.3s;
    }
  }
  @-webkit-keyframes sdb {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
  @keyframes sdb {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0;
    }
  }
`;

export default Top;
