export const fadeIn = () => {
  return {
    hidden: {
      y: 100,
      opacity: 0,
      x: 0,
      transition: {
        type: "tween",
        duration: 0.8,
        delay: 0.8,
        ease:"easeInOut"
      },
    },
    visible: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "tween",
        duration: 0.7,
        delay: 0.7,
        ease: "easeInOut",
      },
    },
  }
}