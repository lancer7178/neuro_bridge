"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function StartPage() {
  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-accent-soft via-primary to-primary-dark flex flex-col justify-center items-center px-6 text-primary-foreground"
    >
      {/* عنوان ترحيبي */}
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-8 text-center drop-shadow-lg"
      >
        أهلاً بك في بوابتنا التعليمية
      </motion.h1>

      {/* وصف مختصر */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-xl text-center text-lg mb-16 text-primary-foreground/90 leading-relaxed drop-shadow-md"
      >
        اختر كيف تريد البدء، سواء بإنشاء حساب جديد أو تسجيل الدخول للاستفادة من خدماتنا التعليمية والدعم الكامل.
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
            className="bg-accent text-accent-foreground font-semibold px-12 py-4 rounded-lg shadow-lg hover:bg-accent-hover transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/60"
            aria-label="إنشاء حساب جديد"
          >
            إنشاء حساب
          </a>
        </Link>

        {/* زر تسجيل دخول */}
        <Link href="auth/login" legacyBehavior>
          <a
            className="border-2 border-primary-foreground font-semibold px-12 py-4 rounded-lg hover:bg-primary-foreground hover:text-primary-dark transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary-foreground/70"
            aria-label="تسجيل الدخول"
          >
            تسجيل الدخول
          </a>
        </Link>
      </motion.div>
    </main>
  );
}
