import { useEffect, useState, useCallback } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

const CustomCursor = () => {
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const springConfig = { damping: 25, stiffness: 400 };
  const x = useSpring(cursorX, springConfig);
  const y = useSpring(cursorY, springConfig);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    cursorX.set(e.clientX);
    cursorY.set(e.clientY);
    if (!visible) setVisible(true);
  }, [cursorX, cursorY, visible]);

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    
    const handleOver = () => setHovering(true);
    const handleOut = () => setHovering(false);

    const interactiveElements = document.querySelectorAll("a, button, [data-magnetic]");
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleOver);
      el.addEventListener("mouseleave", handleOut);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleOver);
        el.removeEventListener("mouseleave", handleOut);
      });
    };
  }, [handleMouseMove]);

  // Re-attach on DOM changes
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const handleOver = () => setHovering(true);
      const handleOut = () => setHovering(false);
      document.querySelectorAll("a, button, [data-magnetic]").forEach((el) => {
        el.addEventListener("mouseenter", handleOver);
        el.addEventListener("mouseleave", handleOut);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        style={{ x, y }}
      >
        <motion.div
          animate={{
            width: hovering ? 60 : 32,
            height: hovering ? 60 : 32,
            opacity: visible ? 1 : 0,
          }}
          transition={{ duration: 0.2 }}
          className="rounded-full border border-foreground/50 -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
      {/* Inner dot */}
      <motion.div
        className="fixed top-0 left-0 pointer-events-none z-[9998] mix-blend-difference hidden md:block"
        style={{ x: cursorX, y: cursorY }}
      >
        <motion.div
          animate={{
            width: hovering ? 8 : 4,
            height: hovering ? 8 : 4,
            opacity: visible ? 1 : 0,
          }}
          className="rounded-full bg-foreground -translate-x-1/2 -translate-y-1/2"
        />
      </motion.div>
    </>
  );
};

export default CustomCursor;
