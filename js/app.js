const bubbles = {
  particles: {
    number: {
      value: 165,
      density: {
        enable: false,
      },
    },
    size: {
      value: 5,
      random: true,
      anim: {
        speed: 4,
        size_min: 0.4,
      },
    },
    line_linked: {
      enable: false,
    },
    move: {
      random: true,
      speed: 1.5,
      direction: "top",
      out_mode: "out",
    },
  },
  interactivity: {
    events: {
      onhover: {
        enable: true,
        mode: "bubble",
      },
      onclick: {
        enable: true,
        mode: "repulse",
      },
    },
    modes: {
      bubble: {
        distance: 50,
        duration: 2,
        size: 0,
        opacity: 0,
      },
      repulse: {
        distance: 180,
        duration: 1.8,
      },
    },
  },
};

particlesJS("particles-js", bubbles);
