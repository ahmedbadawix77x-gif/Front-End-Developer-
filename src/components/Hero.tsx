import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroPortrait from "@/assets/hero-portrait.jpg";
import FloatingShapes from "./FloatingShapes";
import MagneticButton from "./MagneticButton";
import RevealText from "./RevealText";

const Hero = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const nameChars = "Ahmed Badawy".split("");

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-hero">
      <FloatingShapes />

      <motion.div style={{ y: parallaxY, opacity }} className="container mx-auto px-6 lg:px-12 py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.5, duration: 0.6 }}
            >
              <p className="font-body text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6">
                Front End Developer · Giza, Egypt
              </p>
            </motion.div>

            {/* Animated name reveal */}
            <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl xl:text-9xl font-bold leading-[0.9] tracking-tight mb-4">
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 2.6 }}
                  className="block text-gradient"
                >
                  Ahmed
                </motion.span>
              </span>
              <span className="block overflow-hidden">
                <motion.span
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 2.75 }}
                  className="block text-foreground"
                >
                  Badawy
                </motion.span>
              </span>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.1 }}
              className="font-body text-base sm:text-lg text-muted-foreground max-w-md leading-relaxed mb-10"
            >
              React & TypeScript Specialist crafting performant, modern web experiences with obsessive attention to detail.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 3.3 }}
              className="flex flex-wrap gap-4"
            >
              <MagneticButton
                as="a"
                href="#projects"
                className="glass-panel px-8 py-4 text-sm font-body font-medium tracking-widest uppercase text-foreground hover-glow transition-all duration-300 hover:bg-foreground hover:text-background inline-block"
              >
                Explore My Projects
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#contact"
                className="px-8 py-4 text-sm font-body font-light tracking-widest uppercase text-muted-foreground hover:text-foreground transition-colors duration-300 inline-block"
              >
                Get in Touch
              </MagneticButton>
            </motion.div>
          </div>

          {/* Portrait with rotating border */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 2.8, ease: [0.22, 1, 0.36, 1] }}
            className="order-1 lg:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="animate-float">
                {/* Rotating dashed border */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 -m-3 rounded-full"
                  style={{
                    border: "1px dashed hsl(0 0% 100% / 0.12)",
                  }}
                />
                {/* Glow */}
                <div className="absolute inset-0 -m-1 rounded-full bg-gradient-to-br from-foreground/5 to-transparent blur-xl" />
                
                <div className="w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden glass-panel p-[2px] relative">
                  <img
                    src={heroPortrait}
                    alt="Ahmed Badawy"
                    className="w-full h-full object-cover rounded-full"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-background/30 to-transparent" />
                </div>
              </div>

              {/* Decorative rings */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-8 rounded-full border border-foreground/[0.04]"
              />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 -m-16 rounded-full border border-foreground/[0.02]"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
      >
        <span className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ height: [0, 48, 48, 0], y: [0, 0, 0, 48] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-px bg-muted-foreground/50"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
