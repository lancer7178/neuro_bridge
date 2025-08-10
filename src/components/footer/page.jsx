"use client";

import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background-dark text-textlight">
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-white/20 pb-10">
          
          {/* Logo & Mission */}
          <div>
            <h2 className="text-3xl font-extrabold mb-3">Neuro bridge</h2>
            <p className="text-base leading-relaxed">
              منصتنا تدعم الطلاب ذوي الاحتياجات الخاصة عبر توفير موارد تعليمية سهلة الوصول، 
              بيئة تعليمية شاملة، وأدوات تساعدهم على النجاح.
            </p>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">الدعم والمساعدة</h3>
            <ul className="space-y-2">
              {["مركز المساعدة", "الأسئلة الشائعة", "التواصل مع فريق الدعم", "الإبلاغ عن مشكلة"].map((link, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-accent transition-colors focus:outline focus:ring-2 focus:ring-accent"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Sections */}
          <div>
            <h3 className="text-lg font-semibold mb-4">المحتوى التعليمي</h3>
            <ul className="space-y-2">
              {["دروس ميسرة", "كتب صوتية", "فيديوهات مترجمة بلغة الإشارة", "مقالات توعوية"].map((item, i) => (
                <li key={i}>
                  <a
                    href="#"
                    className="hover:text-accent transition-colors focus:outline focus:ring-2 focus:ring-accent"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-lg font-semibold mb-4">تواصل معنا</h3>
            <a
              href="mailto:support@taallum.com"
              className="flex items-center gap-2 mb-4 hover:text-accent focus:outline focus:ring-2 focus:ring-accent"
            >
              <Mail size={18} /> support@neuro_bridge.com
            </a>
            <div className="flex flex-wrap gap-3">
              {[
                { Icon: Facebook, label: "فيسبوك" },
                { Icon: Twitter, label: "تويتر" },
                { Icon: Instagram, label: "انستغرام" },
                { Icon: Linkedin, label: "لينكدإن" },
                { Icon: Youtube, label: "يوتيوب" },
              ].map(({ Icon, label }, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex items-center gap-2 bg-white/10 px-3 py-2 rounded-lg hover:bg-accent hover:text-primary-dark transition-colors focus:outline focus:ring-2 focus:ring-accent"
                >
                  <Icon size={18} /> <span className="text-sm">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-white/80 pt-6">
          <p>© {new Date().getFullYear()} Neuro bridge. جميع الحقوق محفوظة.</p>
          <div className="mt-4 md:mt-0">
            <a href="#" className="hover:text-accent mx-2 transition-colors">سياسة الخصوصية</a>
            <a href="#" className="hover:text-accent mx-2 transition-colors">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
