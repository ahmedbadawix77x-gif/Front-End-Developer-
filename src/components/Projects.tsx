import { useState, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import project1 from "@/assets/project-1.jpg";
import project2 from "@/assets/project-2.jpg";
import project3 from "@/assets/project-3.jpg";
import TiltCard from "./TiltCard";
import RevealText from "./RevealText";
import MagneticButton from "./MagneticButton";

type Category = "All" | "Frontend" | "Backend" | "Full Stack";

interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  category: Category[];
  liveUrl: string;
  githubUrl: string;
  caseStudy: string;
}

const projects: Project[] = [
  {
    title: "Analytics Dashboard",
    description: "Real-time data visualization platform with dynamic charts and performance metrics.",
    image: project1,
    tech: ["React", "TypeScript", "Recharts", "Tailwind"],
    category: ["Frontend", "Full Stack"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: "Built a comprehensive analytics dashboard featuring real-time data updates, interactive charts, and responsive design. Focused on performance optimization with lazy loading and memoization strategies.",
  },
  {
    title: "E-Commerce Platform",
    description: "Modern storefront with seamless checkout and inventory management.",
    image: project2,
    tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
    category: ["Full Stack"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: "Developed a full-stack e-commerce solution with product catalog, cart management, and Stripe payment integration. Implemented server-side rendering for SEO and optimized database queries for performance.",
  },
  {
    title: "Task Management App",
    description: "Minimalist productivity tool with drag-and-drop and real-time collaboration.",
    image: project3,
    tech: ["React", "TypeScript", "MySQL", "n8n"],
    category: ["Frontend", "Full Stack"],
    liveUrl: "#",
    githubUrl: "#",
    caseStudy: "Created a task management application with intuitive drag-and-drop interface, real-time sync, and automation workflows using n8n. Designed mobile-first responsive layouts.",
  },
];

const categories: Category[] = ["All", "Frontend", "Backend", "Full Stack"];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const filtered = activeCategory === "All"
    ? projects
    : projects.filter((p) => p.category.includes(activeCategory));

  return (
    <section id="projects" className="py-32 bg-background relative" ref={ref}>
      {/* Animated background lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ x: "-100%" }}
            animate={inView ? { x: "200%" } : {}}
            transition={{ duration: 8, delay: i * 1.5, repeat: Infinity, ease: "linear" }}
            className="absolute h-px bg-gradient-to-r from-transparent via-foreground/5 to-transparent"
            style={{ top: `${20 + i * 15}%`, width: "50%" }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6 }}
            className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body"
          >
            Selected Work
          </motion.p>
          <RevealText className="font-display text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient">
            Projects
          </RevealText>
        </div>

        {/* Filter tabs with animated underline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap gap-1 mb-14 relative"
        >
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-5 py-2.5 text-xs tracking-[0.2em] uppercase font-body transition-all duration-300 rounded-sm ${
                activeCategory === cat
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {cat}
              {activeCategory === cat && (
                <motion.div
                  layoutId="projectFilter"
                  className="absolute inset-0 bg-foreground/10 rounded-sm"
                  transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Project Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                <TiltCard
                  onClick={() => setSelectedProject(project)}
                  className="group glass-panel-hover rounded-sm overflow-hidden cursor-pointer"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <motion.img
                      src={project.image}
                      alt={project.title}
                      loading="lazy"
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-background/50 group-hover:bg-background/20 transition-all duration-500" />
                    {/* Border glow on hover */}
                    <div className="absolute inset-0 border border-transparent group-hover:border-foreground/20 transition-colors duration-500 rounded-t-sm" />
                  </div>

                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2 group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    <p className="font-body text-sm text-muted-foreground mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="text-[10px] tracking-[0.15em] uppercase font-body px-3 py-1 rounded-sm bg-secondary text-secondary-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </TiltCard>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Fullscreen Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-background/90 backdrop-blur-2xl"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 40 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="glass-panel rounded-sm max-w-3xl w-full max-h-[85vh] overflow-y-auto p-8 sm:p-10"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-start mb-8">
                <div>
                  <p className="text-xs tracking-[0.2em] uppercase text-muted-foreground font-body mb-2">Case Study</p>
                  <h3 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
                    {selectedProject.title}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="text-muted-foreground hover:text-foreground transition-colors w-10 h-10 flex items-center justify-center rounded-full glass-panel"
                >
                  ✕
                </button>
              </div>

              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full rounded-sm mb-8"
              />

              <p className="font-body text-muted-foreground leading-relaxed mb-8 text-base">
                {selectedProject.caseStudy}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {selectedProject.tech.map((t) => (
                  <span
                    key={t}
                    className="text-[10px] tracking-[0.15em] uppercase font-body px-3 py-1 rounded-sm bg-secondary text-secondary-foreground"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <MagneticButton
                  as="a"
                  href={selectedProject.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-body bg-foreground text-background hover:bg-foreground/90 transition-colors rounded-sm inline-block"
                >
                  Live Demo
                </MagneticButton>
                <MagneticButton
                  as="a"
                  href={selectedProject.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 text-xs tracking-[0.2em] uppercase font-body glass-panel text-foreground hover-glow transition-colors rounded-sm inline-block"
                >
                  GitHub
                </MagneticButton>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
