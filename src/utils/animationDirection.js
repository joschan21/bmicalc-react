export default function getStepAnimationProps({ motionDirection }) {
    return {
      animate: 'enter',
      initial: 'initial',
      exit: 'exit',
      variants: {
        initial: {
          opacity: 0,
          x: motionDirection.current * 50,
        },
        enter: {
          opacity: 1,
          x: 0,
        },
        exit: {
          opacity: 0,
          x: motionDirection.current * -50,
        },
      },
    }
  }