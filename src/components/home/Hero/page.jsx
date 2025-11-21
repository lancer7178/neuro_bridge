"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center bg-gradient-to-br from-accent-soft via-primary to-primary-dark text-primary-foreground overflow-hidden pt-16 sm:pt-20 lg:pt-24 -mt-16 sm:-mt-20 lg:-mt-24"
      dir="rtl"
    >
      {/* زخارف الخلفية مع حركة */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-36 sm:-left-20 w-64 sm:w-72 h-64 sm:h-72 bg-accent/30 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -right-36 sm:-right-20 w-80 sm:w-96 h-80 sm:h-96 bg-primary-light/30 rounded-full blur-3xl"
      ></motion.div>

      {/* المحتوى */}
      <div className="relative container max-w-7xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col-reverse lg:flex-row-reverse items-center justify-center gap-8 sm:gap-12 lg:gap-20 py-10 sm:py-16 lg:py-20">
        {/* الصورة */}
        <motion.div
          className="flex-1 flex justify-center w-full"
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <div className="backdrop-blur-lg bg-white/10 p-3 sm:p-4 rounded-2xl sm:rounded-3xl shadow-xl border border-white/20 transition-transform duration-500 hover:scale-105 w-full max-w-xs sm:max-w-sm lg:max-w-3xl">
            <Image
              src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg"
              alt="دعم التعليم"
              width={600}
              height={480}
              className="rounded-lg sm:rounded-2xl object-cover w-full h-auto"
              priority
            />
          </div>
        </motion.div>

        {/* النص */}
        <motion.div
          className="flex-1 text-center lg:text-right w-full px-4 sm:px-0 lg:px-0"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-6xl font-extrabold leading-tight mb-6 sm:mb-10 drop-shadow-md">
            مستقبل أفضل يبدأ بـ
            <span className="text-accent">{` تعليم شامل`}</span>
          </h1>
          <p className="text-base sm:text-lg lg:text-lg text-primary-foreground/90 mb-8 sm:mb-12 leading-relaxed drop-shadow-sm">
            نقدم الدعم الأكاديمي والنفسي لطلاب ذوي الاحتياجات الخاصة، لنفتح لهم
            أبواب النجاح ونمكّنهم من تحقيق أحلامهم.
          </p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center lg:justify-start flex-wrap"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.6 }}
          >
            <a
              href="/start"
              className="bg-accent text-accent-foreground font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-accent-hover transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-accent/60 text-center"
            >
              ابدأ الآن
            </a>
            <a
              href="/learn"
              className="border-2 border-primary-foreground font-semibold px-6 sm:px-10 py-3 sm:py-4 rounded-lg hover:bg-primary-foreground hover:text-primary-dark transition-transform transform hover:scale-110 focus:outline-none focus:ring-4 focus:ring-primary-foreground/70 text-center"
            >
              تعرف أكثر
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
