import { ReactNode, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface RevealTextProps {
  children: ReactNode;
  className?: string;
  delay?: number;
}

const RevealText = ({ children, className = "", delay = 0 }: RevealTextProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="overflow-hidden">
      <motion.div
        initial={{ y: "100%" }}
        animate={inView ? { y: 0 } : {}}
        transition={{
          duration: 0.8,
          ease: [0.22, 1, 0.36, 1],
          delay,
        }}
        className={className}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default RevealText;
