import { motion } from "framer-motion";
import { Sparkles, Users } from "lucide-react";
import { DEPARTMENTS } from "../constants";
import StaffCard from "./StaffCard";

export default function Leadership() {
  // Extract all department heads
  const leaders = DEPARTMENTS.map(dept => ({
    ...dept.headOfDept,
    deptTitle: dept.title
  }));

  return (
    <section id="leadership" className="py-32 bg-white relative overflow-hidden" dir="rtl">
      {/* Background Lighting */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-50/30 rounded-full blur-[120px] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 mb-4"
          >
            <Users className="text-blue-500 w-5 h-5" />
            <span className="text-blue-600 font-bold tracking-widest uppercase text-[10px] font-sans">Faculty Leadership</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black text-[#0A2540] mb-6 font-arabic"
          >
            قيادات <span className="text-blue-600">الأقسام</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-[#0A2540]/60 text-lg font-arabic max-w-2xl mx-auto"
          >
            نخبة من أفضل الكوادر الأكاديمية التي تقود مسيرة التميز والإبداع في كليتنا.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {leaders.map((leader, index) => (
            <StaffCard
              key={index}
              name={leader.name}
              role={leader.role}
              gender={leader.gender}
              image={leader.image}
              className="h-full"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
