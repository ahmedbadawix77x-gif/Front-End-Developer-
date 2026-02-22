import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingIntro = ({ onComplete }: { onComplete: () => void }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 400);
    const t2 = setTimeout(() => setPhase(2), 1200);
    const t3 = setTimeout(() => setPhase(3), 2000);
    const t4 = setTimeout(() => onComplete(), 2600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {phase < 3 && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] bg-background flex items-center justify-center"
        >
          <div className="relative">
            {/* Line wipe */}
            <motion.div
              initial={{ scaleX: 0 }}
              animate={{ scaleX: phase >= 1 ? 1 : 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-px bg-foreground/30 origin-left"
            />

            {/* Name reveal */}
            <div className="overflow-hidden">
              <motion.h1
                initial={{ y: 80 }}
                animate={{ y: phase >= 1 ? 0 : 80 }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
                className="font-display text-4xl sm:text-6xl font-bold text-foreground tracking-tight"
              >
                Ahmed Badawy
              </motion.h1>
            </div>

            {/* Subtitle */}
            <div className="overflow-hidden mt-3">
              <motion.p
                initial={{ y: 40 }}
                animate={{ y: phase >= 2 ? 0 : 40 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground text-center"
              >
                Portfolio
              </motion.p>
            </div>

            {/* Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: phase >= 1 ? 1 : 0 }}
              className="absolute -bottom-12 left-1/2 -translate-x-1/2 font-body text-xs text-muted-foreground/40 tracking-widest"
            >
              {phase >= 2 ? "100" : phase >= 1 ? "047" : "000"}%
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingIntro;
