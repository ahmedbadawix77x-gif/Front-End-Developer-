import { useEffect, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const MouseLight = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { damping: 30, stiffness: 200 });
  const springY = useSpring(mouseY, { damping: 30, stiffness: 200 });

  const handleMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [handleMove]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[1] hidden md:block"
      style={{
        background: `radial-gradient(600px circle at var(--mx) var(--my), hsl(0 0% 100% / 0.03), transparent 60%)`,
      }}
    >
      <motion.div
        className="absolute w-0 h-0"
        style={{ left: springX, top: springY }}
        onUpdate={() => {
          const el = document.querySelector("[data-mouse-light]") as HTMLElement;
          if (el) {
            el.style.setProperty("--mx", `${springX.get()}px`);
            el.style.setProperty("--my", `${springY.get()}px`);
          }
        }}
      />
      <div
        data-mouse-light
        className="absolute inset-0"
        style={{
          background: `radial-gradient(600px circle at var(--mx, 50%) var(--my, 50%), hsl(0 0% 100% / 0.035), transparent 60%)`,
        }}
      />
    </motion.div>
  );
};

export default MouseLight;
