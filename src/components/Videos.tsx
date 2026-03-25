import { motion } from "framer-motion";
import { Play, Sparkles, Clock, PlayCircle, Eye, Video } from "lucide-react";
import { VIDEOS } from "../constants";

export default function Videos() {
  return (
    <section id="videos" className="py-32 bg-white relative overflow-hidden" dir="rtl">
      {/* Advanced Background Lighting & Shapes */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Main Gradient Mesh */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_-20%,rgba(59,130,246,0.1),transparent_70%)]" />
        
        {/* Floating Glows */}
        <div className="absolute top-1/4 -left-20 w-[500px] h-[500px] bg-blue-400/10 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-[500px] h-[500px] bg-indigo-400/10 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '2s' }} />
        
        {/* Abstract Geometric Shapes */}
        <svg className="absolute top-20 right-10 w-64 h-64 text-blue-500/5 rotate-12" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M40 100C40 66.8629 66.8629 40 100 40C133.137 40 160 66.8629 160 100C160 133.137 133.137 160 100 160C66.8629 160 40 133.137 40 100Z" stroke="currentColor" strokeWidth="1" strokeDasharray="4 4" />
          <circle cx="100" cy="100" r="80" stroke="currentColor" strokeWidth="0.5" />
        </svg>
        
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.02] mix-blend-overlay" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-6 py-2 rounded-full bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 mb-8 shadow-sm"
          >
            <Video className="text-blue-600 w-4 h-4" />
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent font-bold tracking-widest uppercase text-[11px] font-sans">
              Multimedia Experience
            </span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black mb-8 font-arabic leading-tight"
          >
            <span className="text-[#0A2540]">جولة بصرية في</span>
            <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 bg-clip-text text-transparent">رحاب كليتنا</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#0A2540]/60 text-xl font-arabic max-w-2xl mx-auto leading-relaxed"
          >
            استكشف بيئة تعليمية ملهمة تجمع بين الأصالة والابتكار التكنولوجي من خلال مكتبتنا المرئية المتميزة.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {VIDEOS.map((video, i) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.05)] hover:shadow-[0_30px_60px_rgba(59,130,246,0.15)] transition-all duration-700 hover:-translate-y-3 border border-gray-100/50"
            >
              {/* Thumbnail Container */}
              <div className="relative aspect-[16/10] overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                
                {/* Dynamic Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent opacity-40 group-hover:opacity-20 transition-opacity duration-500" />
                <div className="absolute inset-0 bg-blue-600/10 mix-blend-overlay group-hover:bg-transparent transition-all duration-500" />
                
                {/* Play Button with Glow */}
                <div className="absolute inset-0 flex items-center justify-center z-20">
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-blue-500 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    <div className="relative w-20 h-20 bg-white/90 backdrop-blur-md rounded-full flex items-center justify-center shadow-2xl transition-all group-hover:bg-blue-600 group-hover:text-white text-blue-600">
                      <Play className="w-7 h-7 fill-current ml-1" />
                    </div>
                  </motion.div>
                </div>

                {/* Duration Badge (Glassmorphism) */}
                <div className="absolute bottom-5 right-5 z-20 px-4 py-1.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white text-[11px] font-sans font-bold shadow-lg">
                  04:20
                </div>
              </div>

              {/* Content Section */}
              <div className="p-10 relative">
                {/* Decorative Accent */}
                <div className="absolute top-0 right-10 w-12 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full -translate-y-1/2" />
                
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                    <span className="text-blue-600 text-[11px] font-bold uppercase tracking-widest font-sans">
                      {video.role}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 text-gray-400 text-[11px] font-sans">
                    <Eye className="w-4 h-4" />
                    <span>1,240</span>
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-[#0A2540] font-arabic leading-tight mb-6 group-hover:text-blue-600 transition-colors">
                  {video.title}
                </h3>

                <div className="flex items-center justify-between pt-6 border-t border-gray-50">
                  <button className="flex items-center gap-2 text-blue-600 font-bold text-sm font-arabic group/btn">
                    <span className="relative">
                      شاهد الآن
                      <span className="absolute bottom-0 right-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                    <PlayCircle className="w-5 h-5 transition-transform group-hover/btn:translate-x-[-5px]" />
                  </button>
                  
                  <div className="flex -space-x-2 rtl:space-x-reverse">
                    {[1, 2, 3].map((_, i) => (
                      <div key={i} className="w-7 h-7 rounded-full border-2 border-white bg-gray-100 overflow-hidden shadow-sm">
                        <img src={`https://avatar.iran.liara.run/public/job?username=${i + video.id}`} alt="user" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom Glowing Line */}
              <div className="absolute bottom-0 left-0 h-1.5 w-full bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
