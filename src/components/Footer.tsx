import { motion } from "framer-motion";
import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white py-24 border-t border-gray-100" dir="rtl">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
          {/* Brand */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-600/20">
                <span className="text-white font-bold text-2xl">B</span>
              </div>
              <div>
                <h2 className="text-[#0A2540] font-bold text-xl font-arabic">تربية نوعية</h2>
                <p className="text-blue-500 text-[10px] uppercase tracking-widest font-sans font-bold">Benha University</p>
              </div>
            </div>
            <p className="text-[#0A2540]/50 text-sm font-arabic leading-relaxed">
              صرح تعليمي متميز يهدف إلى إعداد كوادر متخصصة في المجالات النوعية المختلفة وفقاً لأحدث المعايير العالمية.
            </p>
            <div className="flex items-center gap-4">
              {[Facebook, Twitter, Instagram, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-10 h-10 bg-blue-50 hover:bg-blue-600 text-blue-600 hover:text-white rounded-xl flex items-center justify-center transition-all border border-transparent hover:border-blue-500 shadow-sm"
                >
                  <Icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-[#0A2540] font-bold mb-8 font-arabic">روابط سريعة</h4>
            <ul className="space-y-4">
              {["عن الكلية", "الأقسام العلمية", "شئون الطلاب", "الدراسات العليا", "المكتبة الرقمية"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#0A2540]/50 hover:text-blue-600 transition-colors text-sm font-arabic font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#0A2540] font-bold mb-8 font-arabic">خدمات إلكترونية</h4>
            <ul className="space-y-4">
              {["منصة التعلم", "نتائج الطلاب", "البريد الجامعي", "بوابة الموظفين", "المجلة العلمية"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-[#0A2540]/50 hover:text-blue-600 transition-colors text-sm font-arabic font-medium">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[#0A2540] font-bold mb-8 font-arabic">النشرة الإخبارية</h4>
            <p className="text-[#0A2540]/50 text-sm font-arabic mb-6 leading-relaxed">
              اشترك معنا ليصلك كل جديد عن أخبار وفعاليات الكلية.
            </p>
            <div className="relative">
              <input
                type="email"
                placeholder="بريدك الإلكتروني..."
                className="w-full bg-gray-50 border border-gray-100 rounded-2xl px-6 py-4 text-[#0A2540] focus:border-blue-500 focus:outline-none transition-all font-arabic shadow-sm"
              />
              <button className="absolute left-2 top-2 bottom-2 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-xl transition-all font-arabic text-sm font-bold">
                اشترك
              </button>
            </div>
          </div>
        </div>

        <div className="pt-12 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-8">
          <p className="text-[#0A2540]/30 text-[10px] font-sans font-bold uppercase tracking-widest">
            © 2026 Faculty of Specific Education - Benha University. All rights reserved.
          </p>
          <div className="flex items-center gap-8">
            <a href="#" className="text-[#0A2540]/30 hover:text-blue-600 transition-colors text-[10px] font-arabic font-bold uppercase tracking-widest">سياسة الخصوصية</a>
            <a href="#" className="text-[#0A2540]/30 hover:text-blue-600 transition-colors text-[10px] font-arabic font-bold uppercase tracking-widest">شروط الاستخدام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
