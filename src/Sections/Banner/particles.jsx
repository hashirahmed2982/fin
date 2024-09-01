
import Particles from "react-tsparticles";

export default function Stars() {
  
  return (
    <Particles
       
        
        options={{
          fpsLimit: 120,

          fullScreen: {
            enable: false,
          },
          interactivity: {
            events: {
              
              onHover: {
                enable: true,
                mode: "repulse"
              },
              resize: true
            },
            modes: {
              push: {
                quantity: 4
              },
              repulse: {
                distance: 100,
                duration: 0.4
              }
            }
          },
          particles: {
            color: {
              value: "#ffffff"
            },
            links: {
              color: "#ffffff",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: "none",
              enable: true,
              
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                area: 800
              },
              value: 40
            },
            opacity: {
              value: 0.3
            },
            shape: {
              type: "circle"
            },
            size: {
              value: { min: 1, max: 3 }
            },
            fullScreen: {
              enable: false,
            }
          },
          detectRetina: true
        }}
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
      />
  );
}
