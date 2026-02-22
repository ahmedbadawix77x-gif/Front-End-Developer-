import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import RevealText from "./RevealText";

interface SkillGroup {
  title: string;
  skills: { name: string; level: number }[];
}

const skillGroups: SkillGroup[] = [
  {
    title: "Frontend",
    skills: [
      { name: "HTML5", level: 95 },
      { name: "CSS3", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React.js", level: 92 },
      { name: "TypeScript", level: 85 },
    ],
  },
  {
    title: "Backend & Database",
    skills: [
      { name: "PHP (Basics)", level: 50 },
      { name: "WordPress", level: 70 },
      { name: "MySQL", level: 72 },
      { name: "PostgreSQL", level: 68 },
      { name: "Node.js (Basics)", level: 55 },
    ],
  },
  {
    title: "Tools & Design",
    skills: [
      { name: "Figma", level: 80 },
      { name: "Photoshop", level: 75 },
      { name: "Git", level: 85 },
      { name: "Notion", level: 78 },
      { name: "Microsoft Office", level: 90 },
    ],
  },
];

// Top skills for circular meters
const topSkills = [
  { name: "React.js", level: 92 },
  { name: "TypeScript", level: 85 },
  { name: "CSS3", level: 90 },
  { name: "Git", level: 85 },
];

const CircularMeter = ({ name, level, delay, inView }: { name: string; level: number; delay: number; inView: boolean }) => {
  const circumference = 2 * Math.PI * 42;
  const offset = circumference - (level / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.6, delay }}
      className="flex flex-col items-center gap-3"
    >
      <div className="relative w-24 h-24 sm:w-28 sm:h-28">
        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
          <circle cx="50" cy="50" r="42" fill="none" stroke="hsl(0 0% 15%)" strokeWidth="2" />
          <motion.circle
            cx="50" cy="50" r="42"
            fill="none"
            stroke="hsl(0 0% 80%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            animate={inView ? { strokeDashoffset: offset } : {}}
            transition={{ duration: 1.5, delay: delay + 0.2, ease: [0.22, 1, 0.36, 1] }}
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="font-display text-lg font-bold text-foreground">{level}%</span>
        </div>
      </div>
      <span className="font-body text-xs tracking-[0.15em] uppercase text-muted-foreground">{name}</span>
    </motion.div>
  );
};

const Skills = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineWidth = useTransform(scrollYProgress, [0.1, 0.4], ["0%", "100%"]);

  return (
    <section id="skills" className="py-32 bg-gradient-subtle relative" ref={ref}>
      {/* Grid background */}
      <div className="absolute inset-0 opacity-[0.015]" style={{
        backgroundImage: "linear-gradient(hsl(0 0% 100%) 1px, transparent 1px), linear-gradient(90deg, hsl(0 0% 100%) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }} />

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body"
          >
            Expertise
          </motion.p>
          <RevealText className="font-display text-5xl sm:text-6xl font-bold text-gradient">
            Skills
          </RevealText>
        </div>

        {/* Circular meters */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20 max-w-2xl mx-auto">
          {topSkills.map((skill, i) => (
            <CircularMeter key={skill.name} {...skill} delay={i * 0.15} inView={inView} />
          ))}
        </div>

        {/* Line divider */}
        <div className="mb-16 flex justify-center">
          <motion.div style={{ width: lineWidth }} className="h-px bg-gradient-to-r from-transparent via-muted-foreground/20 to-transparent" />
        </div>

        {/* Progress bars */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillGroups.map((group, gi) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: gi * 0.15 + 0.4 }}
              className="glass-panel-hover rounded-sm p-8"
            >
              <h3 className="font-display text-xl font-semibold text-foreground mb-8">
                {group.title}
              </h3>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="font-body text-sm text-foreground">{skill.name}</span>
                      <span className="font-body text-xs text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-[2px] bg-secondary rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={inView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1.2, delay: gi * 0.15 + si * 0.08 + 0.6, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full bg-gradient-to-r from-muted-foreground to-foreground rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Floating skill tags */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1.2 }}
          className="mt-16 flex flex-wrap justify-center gap-3"
        >
          {["React", "TypeScript", "JavaScript", "CSS3", "HTML5", "Figma", "Git", "Node.js", "PostgreSQL", "WordPress"].map((tag, i) => (
            <motion.span
              key={tag}
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 3, delay: i * 0.3, repeat: Infinity, ease: "easeInOut" }}
              className="px-4 py-2 text-[10px] tracking-[0.15em] uppercase font-body glass-panel text-muted-foreground rounded-full"
            >
              {tag}
            </motion.span>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
