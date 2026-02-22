import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import RevealText from "./RevealText";

interface TimelineItem {
  period: string;
  title: string;
  subtitle: string;
  description: string[];
  type: "work" | "education";
}

const timeline: TimelineItem[] = [
  {
    period: "2024 – Present",
    title: "Freelance UI/UX Designer & Web Developer",
    subtitle: "Self-Employed",
    description: [
      "Developed responsive web applications using React.js and TypeScript.",
      "Managed SQL/PostgreSQL databases for client projects.",
      "Integrated automation tools like n8n for workflow optimization.",
      "Delivered complete projects from requirements gathering to deployment.",
    ],
    type: "work",
  },
  {
    period: "2024 – 2028 (Expected)",
    title: "B.Sc. Computer Science",
    subtitle: "Banha University — Faculty of Specific Education",
    description: [
      "GPA: 3.3 / 4.0",
      "Focus on software engineering and web development.",
    ],
    type: "education",
  },
];

const Experience = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.8], ["0%", "100%"]);

  return (
    <section id="experience" className="py-32 bg-background relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="mb-20">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body"
          >
            Journey
          </motion.p>
          <RevealText className="font-display text-5xl sm:text-6xl font-bold text-gradient">
            Experience
          </RevealText>
        </div>

        <div className="relative max-w-3xl mx-auto">
          {/* Animated vertical line */}
          <div className="absolute left-4 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-px bg-border">
            <motion.div
              style={{ height: lineHeight }}
              className="w-full bg-gradient-to-b from-foreground/60 to-foreground/10"
            />
          </div>

          {timeline.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40, y: 20 }}
              animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
              transition={{ duration: 0.7, delay: i * 0.3 + 0.3, ease: [0.22, 1, 0.36, 1] }}
              className={`relative pl-12 md:pl-0 mb-16 last:mb-0 md:w-1/2 ${
                i % 2 === 0 ? "md:pr-12 md:text-right" : "md:ml-auto md:pl-12"
              }`}
            >
              {/* Dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={inView ? { scale: 1 } : {}}
                transition={{ duration: 0.4, delay: i * 0.3 + 0.5 }}
                className={`absolute top-1 w-3 h-3 rounded-full border-2 border-foreground bg-background left-[10px] md:left-auto ${
                  i % 2 === 0 ? "md:right-[-6px]" : "md:left-[-6px]"
                }`}
              />

              <span className="font-body text-xs tracking-[0.2em] uppercase text-muted-foreground block mb-2">
                {item.period}
              </span>
              <h3 className="font-display text-xl font-semibold text-foreground mb-1">
                {item.title}
              </h3>
              <p className="font-body text-sm text-muted-foreground mb-4">
                {item.subtitle}
              </p>
              <ul className={`space-y-2 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                {item.description.map((d, di) => (
                  <li key={di} className="font-body text-sm text-muted-foreground leading-relaxed">
                    {d}
                  </li>
                ))}
              </ul>

              {/* Type badge */}
              <span className="mt-4 inline-block text-[10px] tracking-[0.15em] uppercase font-body px-3 py-1 rounded-full glass-panel text-muted-foreground">
                {item.type}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
