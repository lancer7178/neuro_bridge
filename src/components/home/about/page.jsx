"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function AboutUs() {
  return (
    <section
      id="about"
      className="relative py-12 sm:py-20 bg-gradient-to-b from-[#FDFDFB] via-[#F4F7FA] to-[#EEF3F2] overflow-hidden"
    >
      {/* زخرفة خلفية مع حركة */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-32 -left-32 sm:-left-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/12 rounded-full blur-3xl"
      ></motion.div>

      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -right-32 sm:-right-20 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/15 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center">
          {/* صورة */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.9, y: 50 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            <img
              src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
              alt="طلاب يتعاونون"
              className="rounded-2xl shadow-xl border border-outline"
            />
            {/* إطار زخرفي حول الصورة */}
            <div className="absolute -top-4 -left-4 w-full h-full border-4 border-secondary rounded-2xl -z-10"></div>
          </motion.div>

          {/* النص */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-[#1D2A32] mb-4 sm:mb-6">
              من نحن
            </h2>
            <p className="text-base sm:text-lg text-[#4B5B66] mb-4 sm:mb-6 leading-relaxed">
              نحن منصة متخصصة في تقديم الدعم التعليمي والنفسي والاجتماعي للطلاب
              ذوي الاحتياجات الخاصة. نعمل على تمكينهم من تحقيق إمكاناتهم الكاملة
              من خلال بيئة تعليمية مرنة، ودعم فردي مصمم خصيصًا لكل طالب.
            </p>
            <p className="text-base sm:text-lg text-[#4B5B66] mb-6 sm:mb-8 leading-relaxed">
              رسالتنا هي أن يكون لكل طالب فرصة متساوية للتعلم والنمو، بغض النظر
              عن التحديات التي يواجهها.
            </p>
            <Link href="/about_page">
              <button className="px-4 sm:px-6 py-2 sm:py-3 bg-primary text-primary-foreground rounded-lg shadow-lg hover:bg-primary-hover transition-all hover:scale-105 text-sm sm:text-base">
                تعرف أكثر
              </button>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
