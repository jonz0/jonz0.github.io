const snowflakes = {
  particles: {
    number: {
      value: 100,
    },
    shape: {
      type: "polygon",
    },
    size: {
      value: 10,
      random: true,
    },
    line_linked: {
      enable: false,
    },
    move: {
      enable: true,
      speed: 2,
      direction: "bottom",
      straight: false,
    },
  },
  interactivity: {},
};

particlesJS("particles-js", snowflakes);
