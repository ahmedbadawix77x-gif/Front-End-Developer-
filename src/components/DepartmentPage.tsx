import { motion } from "framer-motion";
import { ArrowLeft, Clock, Book, Briefcase, Play, Sparkles, Target, Eye, User, Image as ImageIcon } from "lucide-react";
import { Department } from "../types";
import { getStaffAvatar } from "../lib/utils";
import StaffCard from "./StaffCard";

interface DepartmentPageProps {
  dept: Department;
  onBack: () => void;
}

export default function DepartmentPage({ dept, onBack }: DepartmentPageProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-[#F8FAFC] pb-20"
      dir="rtl"
    >
      {/* Header */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src={dept.image}
          alt={dept.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A2540]/60 via-[#0A2540]/40 to-[#F8FAFC] z-10" />
        
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center px-6">
          <motion.button
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            onClick={onBack}
            className="absolute top-32 right-8 flex items-center gap-2 text-white hover:text-blue-200 transition-colors font-arabic font-bold"
          >
            <ArrowLeft className="w-5 h-5" />
            العودة للرئيسية
          </motion.button>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-7xl font-black text-white mb-6 font-arabic"
          >
            {dept.title}
          </motion.h1>
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="flex items-center gap-4 text-blue-100"
          >
            <div className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-6 py-2 rounded-full border border-white/20">
              <Clock className="w-4 h-4" />
              <span className="text-sm font-bold font-sans">{dept.duration}</span>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 -mt-20 relative z-30">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {/* Overview */}
            <section className="bg-white p-10 md:p-12 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-8 font-arabic flex items-center gap-3">
                <Sparkles className="text-blue-500 w-6 h-6" />
                نبذة عن القسم
              </h3>
              <p className="text-[#0A2540]/70 text-lg leading-relaxed font-arabic font-medium">
                {dept.overview}
              </p>
            </section>

            {/* Vision & Mission */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0A2540] mb-6 font-arabic flex items-center gap-3">
                  <Eye className="text-blue-500 w-5 h-5" />
                  الرؤية
                </h3>
                <p className="text-[#0A2540]/70 font-arabic leading-relaxed">
                  {dept.vision}
                </p>
              </section>
              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0A2540] mb-6 font-arabic flex items-center gap-3">
                  <Target className="text-blue-500 w-5 h-5" />
                  الرسالة
                </h3>
                <p className="text-[#0A2540]/70 font-arabic leading-relaxed">
                  {dept.mission}
                </p>
              </section>
            </div>

            {/* Subjects & Careers */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0A2540] mb-8 font-arabic flex items-center gap-3">
                  <Book className="text-blue-500 w-5 h-5" />
                  المواد الدراسية
                </h3>
                <ul className="space-y-4">
                  {dept.subjects.map((subject, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#0A2540]/60 font-arabic">
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full" />
                      {subject}
                    </li>
                  ))}
                </ul>
              </section>
              <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-[#0A2540] mb-8 font-arabic flex items-center gap-3">
                  <Briefcase className="text-blue-500 w-5 h-5" />
                  مجالات العمل
                </h3>
                <ul className="space-y-4">
                  {dept.careers.map((career, i) => (
                    <li key={i} className="flex items-center gap-3 text-[#0A2540]/60 font-arabic">
                      <div className="w-1.5 h-1.5 bg-blue-400 rounded-full" />
                      {career}
                    </li>
                  ))}
                </ul>
              </section>
            </div>

            {/* Gallery */}
            <section className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-2xl font-bold text-[#0A2540] mb-8 font-arabic flex items-center gap-3">
                <ImageIcon className="text-blue-500 w-6 h-6" />
                معرض الأنشطة
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {dept.gallery.map((img, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ scale: 1.05 }}
                    className="aspect-square rounded-2xl overflow-hidden border border-gray-100"
                  >
                    <img src={img} alt="Activity" className="w-full h-full object-cover" />
                  </motion.div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Head of Dept */}
            <StaffCard 
              name={dept.headOfDept.name}
              role={dept.headOfDept.role}
              gender={dept.headOfDept.gender}
              image={dept.headOfDept.image}
            />

            {/* Video Section */}
            <section className="bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100">
              <h3 className="text-lg font-bold text-[#0A2540] mb-6 font-arabic flex items-center gap-2">
                <Play className="text-blue-500 w-5 h-5" />
                فيديو تعريفي
              </h3>
              <div className="relative aspect-video rounded-2xl overflow-hidden group cursor-pointer">
                <img src={dept.image} className="w-full h-full object-cover grayscale-[0.5]" />
                <div className="absolute inset-0 bg-blue-900/20 flex items-center justify-center group-hover:bg-blue-900/40 transition-all">
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg">
                    <Play className="w-5 h-5 fill-blue-600 text-blue-600 ml-1" />
                  </div>
                </div>
              </div>
            </section>

            {/* Apply CTA */}
            <section className="bg-gradient-to-br from-blue-600 to-blue-800 p-10 rounded-[2.5rem] text-white text-center shadow-xl shadow-blue-600/20">
              <h3 className="text-2xl font-bold font-arabic mb-4">هل أنت مستعد؟</h3>
              <p className="text-blue-100 text-sm font-arabic mb-8">
                انضم إلينا الآن وابدأ رحلتك التعليمية المتميزة في هذا القسم.
              </p>
              <button className="w-full py-4 bg-white text-blue-600 rounded-2xl font-bold transition-all hover:scale-105 active:scale-95 font-arabic">
                قدّم الآن
              </button>
            </section>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
