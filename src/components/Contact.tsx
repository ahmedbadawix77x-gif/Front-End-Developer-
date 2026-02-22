import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import RevealText from "./RevealText";
import MagneticButton from "./MagneticButton";

const socials = [
  { label: "LinkedIn", url: "https://linkedin.com/in/ahmedbadawy" },
  { label: "GitHub", url: "https://github.com/ahmedbadawyx77x" },
  { label: "Email", url: "mailto:ahmedbadawix77x@gmail.com" },
];

const Contact = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const fields = [
    { name: "Name", type: "text" },
    { name: "Email", type: "email" },
    { name: "Subject", type: "text" },
  ];

  return (
    <section id="contact" className="py-32 bg-gradient-subtle relative" ref={ref}>
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left */}
          <div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              className="text-sm tracking-[0.3em] uppercase text-muted-foreground mb-4 font-body"
            >
              Get in Touch
            </motion.p>
            <RevealText className="font-display text-5xl sm:text-6xl font-bold text-gradient mb-8">
              Contact
            </RevealText>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="font-body text-muted-foreground leading-relaxed mb-10"
            >
              Have a project in mind or want to collaborate? I'd love to hear from you.
              Let's create something remarkable together.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="space-y-4 mb-10"
            >
              <p className="font-body text-sm text-muted-foreground">
                <span className="text-foreground">Location:</span> Giza, Egypt
              </p>
              <p className="font-body text-sm text-muted-foreground">
                <span className="text-foreground">Email:</span>{" "}
                <a href="mailto:ahmedbadawix77x@gmail.com" className="hover:text-foreground transition-colors">
                  ahmedbadawix77x@gmail.com
                </a>
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex gap-4"
            >
              {socials.map((s) => (
                <MagneticButton
                  key={s.label}
                  as="a"
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-2.5 text-[10px] tracking-[0.2em] uppercase font-body glass-panel text-muted-foreground hover:text-background hover:bg-foreground transition-all duration-300 rounded-sm inline-block"
                >
                  {s.label}
                </MagneticButton>
              ))}
            </motion.div>
          </div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="glass-panel rounded-sm p-8 space-y-6 relative overflow-hidden"
          >
            {/* Subtle glow on focused state */}
            <motion.div
              animate={{ opacity: focusedField ? 0.5 : 0 }}
              className="absolute inset-0 pointer-events-none"
              style={{
                background: "radial-gradient(circle at 50% 50%, hsl(0 0% 100% / 0.03), transparent 70%)",
              }}
            />

            {fields.map((field, i) => (
              <motion.div
                key={field.name}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="relative"
              >
                <input
                  type={field.type}
                  required
                  placeholder={field.name}
                  onFocus={() => setFocusedField(field.name)}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full bg-transparent border-b py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-all duration-500 ${
                    focusedField === field.name ? "border-foreground" : "border-border"
                  }`}
                />
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: focusedField === field.name ? 1 : 0 }}
                  className="absolute bottom-0 left-0 right-0 h-px bg-foreground origin-left"
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="relative"
            >
              <textarea
                required
                rows={4}
                placeholder="Message"
                onFocus={() => setFocusedField("Message")}
                onBlur={() => setFocusedField(null)}
                className={`w-full bg-transparent border-b py-3 text-sm font-body text-foreground placeholder:text-muted-foreground/40 focus:outline-none transition-all duration-500 resize-none ${
                  focusedField === "Message" ? "border-foreground" : "border-border"
                }`}
              />
            </motion.div>

            <MagneticButton
              type="submit"
              className="w-full py-4 text-xs tracking-[0.2em] uppercase font-body bg-foreground text-background hover:bg-foreground/90 transition-all duration-300 rounded-sm relative overflow-hidden"
            >
              <span className="relative z-10">
                {submitted ? "Message Sent ✓" : "Send Message"}
              </span>
            </MagneticButton>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
