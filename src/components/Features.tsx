import { motion } from "framer-motion";
import { GraduationCap, Users, Briefcase, Zap, Sparkles } from "lucide-react";
import { FEATURES } from "../constants";

const ICON_MAP: Record<string, any> = {
  GraduationCap,
  Users,
  Briefcase,
  Zap,
};

export default function Features() {
  return (
    <section id="features" className="py-32 bg-[#F8FAFC] relative overflow-hidden" dir="rtl">
      {/* Background Accents */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-100 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-blue-50 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          {/* Left: Content */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <Sparkles className="text-blue-500 w-5 h-5" />
              <span className="text-blue-500 font-bold tracking-widest uppercase text-[10px] font-sans">Why Choose Us?</span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-6xl font-black text-[#0A2540] mb-8 font-arabic leading-tight"
            >
              بيئة تعليمية <br />
              <span className="text-blue-600">متطورة ومبتكرة</span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#0A2540]/60 text-lg mb-12 font-arabic font-medium leading-relaxed"
            >
              نسعى دائماً لتوفير أفضل الإمكانيات لطلابنا لضمان تجربة تعليمية فريدة تجمع بين المعرفة النظرية والتطبيق العملي المتميز.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {FEATURES.map((feature, i) => {
                const Icon = ICON_MAP[feature.icon];
                return (
                  <motion.div
                    key={feature.id}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="group p-8 bg-white rounded-[2rem] border border-gray-100 hover:border-blue-200 transition-all shadow-sm hover:shadow-xl hover:shadow-blue-500/5"
                  >
                    <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-blue-600 transition-all duration-500">
                      <Icon className="text-blue-600 group-hover:text-white w-7 h-7 transition-colors" />
                    </div>
                    <h3 className="text-xl font-bold text-[#0A2540] mb-3 font-arabic group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </h3>
                    <p className="text-[#0A2540]/50 text-sm font-arabic leading-relaxed">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Right: Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="absolute inset-0 bg-blue-200/30 blur-[120px] rounded-full" />
            <div className="relative z-10 rounded-[3.5rem] overflow-hidden border-8 border-white shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=1200"
                alt="Students Working"
                className="w-full h-full object-cover grayscale-[0.2]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 via-transparent to-transparent" />
              
              {/* Floating Stat */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute bottom-12 right-12 bg-white/90 backdrop-blur-xl p-10 rounded-[2.5rem] border border-white shadow-xl"
              >
                <h4 className="text-5xl font-black text-blue-600 mb-1 font-sans">25+</h4>
                <p className="text-[#0A2540]/60 text-[10px] font-bold uppercase tracking-widest font-sans">Years of Excellence</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
