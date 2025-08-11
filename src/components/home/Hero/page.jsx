"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-accent-soft via-primary to-primary-dark text-primary-foreground overflow-hidden"
      dir="rtl"
    >
      {/* زخارف الخلفية مع حركة مستمرة */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 left-0 w-72 h-72 bg-accent/30 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light/30 rounded-full blur-3xl"
      ></motion.div>

      {/* المحتوى */}
      <div className="relative container max-w-7xl mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-20 py-20">
        
        {/* الصورة */}
        <motion.div
          className="flex-1 flex justify-center"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="backdrop-blur-lg bg-white/10 p-4 rounded-3xl shadow-xl border border-white/20 transition-transform duration-500 hover:scale-105 max-w-3xl w-full">
            <Image
              src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg"
              alt="دعم التعليم"
              width={600}
              height={480}
              className="rounded-2xl object-cover"
              priority
            />
          </div>
        </motion.div>

        {/* النص */}
        <motion.div
          className="flex-1 text-center lg:text-right max-w-lg mx-auto lg:mx-0 px-4 lg:px-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className="text-4xl lg:text-6xl font-extrabold leading-tight mb-10 drop-shadow-md">
            مستقبل أفضل يبدأ بـ
            <span className="text-accent">{` تعليم شامل`}</span>
          </h1>
          <p className="text-lg text-primary-foreground/90 mb-12 leading-relaxed drop-shadow-sm">
            نقدم الدعم الأكاديمي والنفسي لطلاب ذوي الاحتياجات الخاصة، لنفتح لهم أبواب
            النجاح ونمكّنهم من تحقيق أحلامهم.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <a
              href="#start"
              className="bg-accent text-accent-foreground font-semibold px-10 py-4 rounded-lg shadow-lg hover:bg-accent-hover transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent/60"
            >
              ابدأ الآن
            </a>
            <a
              href="#learn"
              className="border-2 border-primary-foreground font-semibold px-10 py-4 rounded-lg hover:bg-primary-foreground hover:text-primary-dark transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-foreground/70"
            >
              تعرف أكثر
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
