"use client";

import { motion } from "framer-motion";

export default function LearnPage() {
  return (
    <main
      dir="rtl"
      className=" pt-24  p-8 min-h-screen bg-gradient-to-tr from-accent-soft via-primary to-primary-dark flex flex-col items-center px-8 py-16 text-primary-foreground"
    >
      {/* العنوان الرئيسي */}
      <motion.h1
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl font-extrabold mb-12 max-w-5xl text-center drop-shadow-lg"
      >
        اكتشف قوة الدعم الشامل لطلاب ذوي الاحتياجات الخاصة
      </motion.h1>

      {/* فقرة مقدمة */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="max-w-4xl text-lg mb-12 text-primary-foreground/90 leading-relaxed text-center drop-shadow-md"
      >
        نحن نقدم بيئة تعليمية متكاملة تدعم الجانب الأكاديمي والنفسي والاجتماعي للطلاب، 
        من خلال برامج مبتكرة وورش عمل تفاعلية تساهم في تنمية مهاراتهم وبناء ثقتهم بأنفسهم.
      </motion.p>

      {/* قائمة الخدمات مع انيميشن مختلف لكل عنصر */}
      <motion.ul
        className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-10 mb-16"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.3,
            },
          },
        }}
      >
        {[
          {
            icon: "📚",
            title: "دروس أكاديمية متخصصة",
            description:
              "برامج تعليمية فردية وجماعية تناسب احتياجات كل طالب.",
          },
          {
            icon: "🧠",
            title: "دعم نفسي متكامل",
            description:
              "جلسات مع متخصصين لدعم الصحة النفسية وتعزيز التوازن العاطفي.",
          },
          {
            icon: "🤝",
            title: "توجيه مهني ومجتمعي",
            description:
              "ورش عمل لتطوير المهارات الحياتية والاستعداد لسوق العمل.",
          },
          {
            icon: "📝",
            title: "متابعة وتقييم دوري",
            description:
              "تحليل مستمر لتقدم الطلاب لضمان تحقيق أهدافهم التعليمية.",
          },
        ].map(({ icon, title, description }, i) => (
          <motion.li
            key={i}
            className="bg-white/10 rounded-xl p-6 shadow-lg backdrop-blur-md border border-white/30 flex flex-col items-center text-center"
            variants={{
              hidden: { opacity: 0, y: 30 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="text-5xl mb-4">{icon}</div>
            <h3 className="text-xl font-semibold mb-2">{title}</h3>
            <p className="text-primary-foreground/80">{description}</p>
          </motion.li>
        ))}
      </motion.ul>

      {/* قسم إحصائيات توضيحية */}
      <motion.div
        className="max-w-4xl w-full grid grid-cols-2 md:grid-cols-4 gap-6 mb-20"
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.15 } },
        }}
      >
        {[
          { number: "150+", label: "طالب مستفيد" },
          { number: "25", label: "متخصصين ودعم" },
          { number: "10", label: "ورش عمل سنوية" },
          { number: "95%", label: "نسبة رضا الطلاب" },
        ].map(({ number, label }, i) => (
          <motion.div
            key={i}
            className="bg-a rounded-lg p-6 text-center shadow-md"
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="text-3xl font-bold ">{number}</p>
            <p className="mt-2 text-primary-foreground/90">{label}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* زر CTA جميل مع انيميشن */}
      <motion.a
        href="#contact"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        whileHover={{ scale: 1.1, boxShadow: "0 0 20px rgba(164, 212, 187, 0.7)" }}
        whileTap={{ scale: 0.95 }}
        className="bg-primary rounded-full px-16 py-5 text-white font-extrabold cursor-pointer shadow-lg transition-colors hover:bg-primary-hover"
        aria-label="ابدأ رحلتك التعليمية معنا"
      >
        ابدأ رحلتك التعليمية الآن
      </motion.a>
    </main>
  );
}
