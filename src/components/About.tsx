import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import RevealText from "./RevealText";

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.5], ["0%", "100%"]);

  return (
    <section id="about" className="py-32 bg-gradient-subtle relative" ref={ref}>
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-[0.02]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-6 font-body"
          >
            About
          </motion.p>

          <RevealText className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-gradient">
            Crafting Digital Experiences
          </RevealText>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="font-body text-lg leading-relaxed text-muted-foreground mb-6 mt-8"
          >
            Motivated Front End Developer specializing in React.js and TypeScript with a passion for building
            responsive, performant web applications. Experienced in managing databases and delivering
            full-cycle freelance projects from concept to deployment.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="font-body text-lg leading-relaxed text-muted-foreground"
          >
            Based in Giza, Egypt — currently pursuing Computer Science at Banha University
            with a 3.3 GPA. Focused on clean UI, modern user experience, and writing code that scales.
          </motion.p>
        </div>

        {/* Line divider */}
        <div className="mt-16 mb-16 flex justify-center">
          <motion.div style={{ width: lineWidth }} className="h-px bg-gradient-to-r from-transparent via-muted-foreground/30 to-transparent" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          {[
            { label: "Years Exp.", value: "1+" },
            { label: "Projects", value: "10+" },
            { label: "GPA", value: "3.3" },
            { label: "Technologies", value: "15+" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              className="text-center"
            >
              <p className="font-display text-4xl sm:text-5xl font-bold text-foreground mb-1">
                {stat.value}
              </p>
              <p className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
