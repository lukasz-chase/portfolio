export const imageAnimation = {
  hidden: {
    opacity: 0,
    x: -300,
  },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 1,
    },
  },
  exit: {
    opacity: 0,
    x: -600,
    transition: {
      duration: 0.1,
      ease: "easeOut",
    },
  },
};

export const technologiesAnimation = {
  hidden: { y: 200 },
  show: {
    y: 0,
    transition: {
      duration: 0.75,
      ease: "easeOut",
    },
  },
};
export const waveAnim = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
  },
  show: {
    pathLength: 1,
    pathOffset: 0,
    transition: {
      duration: 1,
    },
  },
};
