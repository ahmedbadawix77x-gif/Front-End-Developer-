import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, Play } from "lucide-react";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden flex items-center justify-center bg-[#F8FAFC]"
      dir="rtl"
    >
      {/* Background Media */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-[#F8FAFC] z-10" />
        <img
          src="https://images.unsplash.com/photo-1541339907198-e08756ebafe1?auto=format&fit=crop&q=80&w=1920"
          alt="University Campus"
          className="w-full h-full object-cover opacity-30"
        />
      </motion.div>

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="inline-block px-4 py-1.5 bg-blue-50 text-blue-600 rounded-full text-[10px] font-bold tracking-widest uppercase mb-6 border border-blue-100 font-sans"
          >
            Welcome to the Future of Education
          </motion.span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-black text-[#0A2540] leading-[1.1] mb-8 font-arabic">
            ابدأ مستقبلك مع <br />
            <span className="bg-gradient-to-r from-blue-600 via-blue-400 to-blue-700 bg-clip-text text-transparent">
              كلية التربية النوعية
            </span>
          </h1>
          
          <p className="text-[#0A2540]/60 text-lg md:text-xl max-w-2xl mx-auto mb-12 font-arabic font-medium leading-relaxed">
            جامعة بنها - حيث يلتقي الإبداع بالتعليم لإعداد جيل متميز من المتخصصين في المجالات النوعية المختلفة.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <motion.a
              href="#departments"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-bold text-lg transition-all shadow-xl shadow-blue-600/10 font-arabic"
            >
              استكشف الأقسام
            </motion.a>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-4 bg-white hover:bg-gray-50 text-[#0A2540] border border-gray-200 rounded-full font-bold text-lg transition-all flex items-center justify-center gap-3 font-arabic shadow-sm"
            >
              <Play className="w-5 h-5 fill-blue-600 text-blue-600" />
              شاهد الفيديو
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        style={{ opacity }}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
      >
        <span className="text-blue-400/50 text-[10px] uppercase tracking-[0.3em] font-sans font-bold">Scroll</span>
        <ChevronDown className="text-blue-400 w-5 h-5" />
      </motion.div>

      {/* Soft Gradients */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-60" />
      </div>
    </section>
  );
}
