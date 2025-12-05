"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StartPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-[#E6F3F4] via-[#F7FBFF] to-[#E8F2F6] flex flex-col justify-center items-center px-6 text-[#1D2A32]"
    >
      {/* عنوان ترحيبي */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-8 text-center drop-shadow-sm"
      >
        أهلاً بك في بوابتنا التعليمية
      </motion.h1>

      {/* وصف مختصر */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-xl text-center text-lg mb-16 text-[#30414C] leading-relaxed"
      >
        اختر كيف تريد البدء، سواء بإنشاء حساب جديد أو تسجيل الدخول للاستفادة من
        خدماتنا التعليمية والدعم الكامل.
      </motion.p>

      {/* أزرار الإجراء */}
      <motion.div
        className="flex flex-col sm:flex-row gap-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
      >
        {/* زر إنشاء حساب */}
        <Link href="auth/register" legacyBehavior>
          <a
            className="bg-primary text-primary-foreground font-semibold px-12 py-4 rounded-lg shadow-lg hover:bg-primary-hover transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30"
            aria-label="إنشاء حساب جديد"
          >
            إنشاء حساب
          </a>
        </Link>

        {/* زر تسجيل دخول */}
        <Link href="auth/login" legacyBehavior>
          <a
            className="border-2 border-primary font-semibold px-12 py-4 rounded-lg hover:bg-primary hover:text-primary-foreground transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/30"
            aria-label="تسجيل الدخول"
          >
            تسجيل الدخول
          </a>
        </Link>
      </motion.div>
    </main>
  );
}
