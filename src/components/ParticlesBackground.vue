<template>
  <vue-particles
        id="tsparticles"
        @particles-loaded="onParticlesLoaded"
        :options="{
                    background: {
                        color: {
                            value: '#332a21'
                        }
                    },
                    fpsLimit: 120,
                    interactivity: {
                        events: {
                            onClick: {
                                enable: true,
                                mode: 'repulse'
                            },
                            onHover: {
                                enable: true,
                                mode: 'grab'
                            },
                        },
                        modes: {
                            bubble: {
                                distance: 400,
                                duration: 2,
                                opacity: 0.8,
                                size: 40
                            },
                            push: {
                                quantity: 4
                            },
                            repulse: {
                                distance: 200,
                                duration: 0.4
                            },
                            grab: {
                              distance: 200,
                              line_linked: {
                                opacity: 1,
                              },
                            }
                        }
                    },
                    particles: {
                        color: {
                            value: '#bcbcbc'
                        },
                        links: {
                            color: '#bcbcbc',
                            distance: 150,
                            enable: true,
                            opacity: 0.7,
                            width: 1
                        },
                        move: {
                            direction: 'none',
                            enable: true,
                            outModes: 'bounce',
                            random: true,
                            speed: 2,
                            straight: false
                        },
                        number: {
                            density: {
                                enable: true,
                            },
                            value: 200
                        },
                        opacity: {
                            value: 0.7
                        },
                        shape: {
                            type: 'circle',
                        },
                        size: {
                            value: { min: 1, max: 5 }
                        }
                    },
                    detectRetina: true
                }"
    />
</template>

<script>

export default {
  name: "ParticlesBackground",
  methods: {
    onParticlesLoaded(container) {
      console.log("Particles loaded!", container);
    },
  },
};
</script>

<style>
#tsparticles {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: -1;
}
</style>

