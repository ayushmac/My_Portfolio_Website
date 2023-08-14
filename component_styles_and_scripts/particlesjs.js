particlesJS("particle-background", {
  particles: {
    number: { value: 50 },
    color: { value: "#000000" },
    shape: { type: "circle" },
    opacity: {
      value: 0.8,
      random: true,
    },
    size: {
      value: 4, // Adjust this value to make the circles smaller
      random: true,
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "none",
      random: true,
      straight: false,
      out_mode: "out",
      bounce: false,
    },
  },
  // ... more configuration options
});
