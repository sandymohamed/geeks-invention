import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadPolygonMaskPlugin } from "tsparticles-plugin-polygon-mask";
import { useCallback } from "react";

export default function ParticleBackground({opacity}) {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
    await loadPolygonMaskPlugin(engine);
  }, []);

  const options = {
    name: "Polygon Mask",
    interactivity: {
      events: {
        onClick: {
          enable: false,
          mode: "push"
        },
        onDiv: {
          elementId: "repulse-div",
          enable: false,
          mode: "repulse"
        },
        onHover: {
          enable: true,
          mode: "repulse",
          parallax: {
            enable: false,
            force: 2,
            smooth: 10
          }
        }
      },
      modes: {
        bubble: {
          distance: 40,
          duration: 2,
          opacity: 8,
          size: 6
        },
        connect: {
          distance: 80,
          links: {
            opacity: 0.5
          },
          radius: 60
        },
        grab: {
          distance: 400,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        },
        remove: {
          quantity: 2
        },
        repulse: {
          distance: 200,
          duration: 0.4
        },
        slow: {
          active: false,
          radius: 0,
          factor: 1
        }
      }
    },
    particles: {
      color: {
        value: "#ff7903"
      },
     
      move: {
        enable: true,
        outModes: "bounce",
        speed: 1
      },
      number: {
        limit: 0,
        value: 400
      },
      opacity: {
        animation: {
          enable: true,
          speed: 2,
          sync: false
        },
        value: {
          min: 0.05,
          max: opacity
        }
      },
      shape: {
        type: "circle"
      },
      size: {
        value: 1
      }
    },

  };

  return (
    <div >
      <h2>EMBRACE THE FUTURE</h2>
      <p>Welcome to the Age of Action</p>
      <Particles id="tsparticles" options={options} init={particlesInit} />
    </div>
  );
}
