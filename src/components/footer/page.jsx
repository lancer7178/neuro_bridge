"use client";

import Link from "next/link";
import Image from "next/image";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  Mail,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-t from-[#E8F1F5] via-[#E8F1F5] to-[#E8F1F5] text-[#123034] overflow-hidden border-t border-outline/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10 border-b border-outline/60 pb-8 sm:pb-10">
          {/* Logo & Mission */}
          <div>
            <div className="mb-4 flex items-center gap-3">
              <Image
                src="/logo2.png"
                alt="Neuro Bridge"
                width={220}
                height={64}
                className="h-12 w-auto sm:h-16 md:h-20 lg:h-24"
                priority
              />
            </div>
            <p className="text-sm sm:text-base leading-relaxed text-[#3A5458]">
              منصتنا تدعم الطلاب ذوي الاحتياجات الخاصة عبر توفير موارد تعليمية
              سهلة الوصول، بيئة تعليمية شاملة، وأدوات تساعدهم على النجاح.
            </p>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-primary">
              الدعم والمساعدة
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                { name: "مركز المساعدة", href: "/help-center" },
                { name: "الأسئلة الشائعة", href: "/faq" },
                { name: "التواصل مع فريق الدعم", href: "/contact-support" },
                { name: "الإبلاغ عن مشكلة", href: "/report-problem" },
              ].map((link, i) => (
                <li key={i}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors focus:outline focus:ring-2 focus:ring-primary/40"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Learning Sections */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-primary">
              المحتوى التعليمي
            </h3>
            <ul className="space-y-2 text-sm sm:text-base">
              {[
                { name: "دروس ميسرة", href: "/lessons" },
                { name: "كتب صوتية", href: "/audiobooks" },
                {
                  name: "فيديوهات مترجمة بلغة الإشارة",
                  href: "/sign-language-videos",
                },
                { name: "مقالات توعوية", href: "/awareness-articles" },
              ].map((item, i) => (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-primary transition-colors focus:outline focus:ring-2 focus:ring-primary/40"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="text-base sm:text-lg font-semibold mb-4 text-primary">
              تواصل معنا
            </h3>
            <a
              href="mailto:support@neuro_bridge.com"
              className="flex items-center gap-2 mb-4 hover:text-primary focus:outline focus:ring-2 focus:ring-primary/40 text-sm sm:text-base"
            >
              <Mail size={18} /> support@neuro_bridge.com
            </a>
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {[
                { Icon: Facebook, label: "فيسبوك", href: "#" },
                { Icon: Twitter, label: "تويتر", href: "#" },
                { Icon: Instagram, label: "انستغرام", href: "#" },
                { Icon: Linkedin, label: "لينكدإن", href: "#" },
                { Icon: Youtube, label: "يوتيوب", href: "#" },
              ].map(({ Icon, label, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="flex items-center gap-2 sm:gap-3 bg-white/95 px-3 sm:px-4 py-2 rounded-lg border border-outline hover:border-primary hover:bg-primary/10 hover:text-primary transition-colors focus:outline focus:ring-2 focus:ring-primary/40 text-xs sm:text-sm"
                >
                  <Icon
                    size={16}
                    className="sm:w-[18px] sm:h-[18px] text-primary"
                  />
                  <span className="hidden sm:inline">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center text-xs sm:text-sm text-[#4B5B66] pt-6 gap-4">
          <p>© {new Date().getFullYear()} Neuro bridge. جميع الحقوق محفوظة.</p>
          <div className="flex gap-2 sm:gap-4 text-center sm:text-left">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              سياسة الخصوصية
            </Link>
            <Link
              href="/terms"
              className="hover:text-primary transition-colors"
            >
              الشروط والأحكام
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
