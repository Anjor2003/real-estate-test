import { useEffect, useRef } from "react";
import { TransitionProps } from "./Transition.types";
import { useAnimation, useInView } from "framer-motion";
import { motion } from "framer-motion";
import { fadeIn } from "./TransitionFramer";


export function Transition(props: TransitionProps) {
  const { children, className } = props;
  const ref = useRef(null);

  const isInView = useInView(ref, { once: false });
  const minControls = useAnimation();
  const slideControls = useAnimation();

  useEffect(() => {
    if (isInView) {
      minControls.start("visible");
      slideControls.start("visible");
    }
  }, [ minControls, slideControls, isInView ]);

  return (
    <div ref={ref}>
      <motion.div
        variants={fadeIn()}
        initial="hidden"
        animate={minControls}
        exit="hidden"
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
}
