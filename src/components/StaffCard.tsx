import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";
import { getStaffAvatar } from "../lib/utils";

interface StaffCardProps {
  name: string;
  role: string;
  gender: "male" | "female";
  image?: string;
  className?: string;
  key?: any;
}

export default function StaffCard({ name, role, gender, image, className = "" }: StaffCardProps) {
  const avatarUrl = getStaffAvatar(image, gender, name);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      className={`bg-white p-8 rounded-[2.5rem] shadow-sm border border-gray-100 text-center group hover:shadow-2xl hover:shadow-blue-500/5 transition-all duration-500 ${className}`}
    >
      <div className="relative w-32 h-32 mx-auto mb-6">
        {/* Animated Background Glow */}
        <div className="absolute inset-0 bg-blue-500/10 rounded-full blur-2xl group-hover:bg-blue-500/20 transition-all duration-500" />
        
        {/* Avatar Image */}
        <div className="relative w-full h-full rounded-full border-4 border-white shadow-xl overflow-hidden">
          <img
            src={avatarUrl}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>

        {/* Verified Badge */}
        <motion.div 
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="absolute -bottom-1 -right-1 bg-white p-2 rounded-full shadow-lg border border-gray-50"
        >
          <ShieldCheck className="w-4 h-4 text-blue-600" />
        </motion.div>
      </div>

      {/* Staff Info */}
      <h4 className="text-xl font-bold text-[#0A2540] font-arabic mb-2 group-hover:text-blue-600 transition-colors">
        {name}
      </h4>
      <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-blue-50 text-blue-600 text-xs font-bold font-arabic">
        {role}
      </div>
    </motion.div>
  );
}
