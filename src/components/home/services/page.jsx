"use client";

import { motion } from "framer-motion";
import { BookOpen, HeartHandshake, Users, GraduationCap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <BookOpen size={40} className="text-primary" />,
      title: "دروس تعليمية مخصصة",
      desc: "نوفر خطط تعليمية فردية تناسب احتياجات كل طالب لتحقيق أقصى استفادة.",
    },
    {
      icon: <HeartHandshake size={40} className="text-secondary" />,
      title: "دعم نفسي واجتماعي",
      desc: "مساندة الطلاب لبناء الثقة بالنفس وتحقيق التوازن النفسي والاجتماعي.",
    },
    {
      icon: <Users size={40} className="text-secondary" />,
      title: "ورش عمل للأهل والمعلمين",
      desc: "تمكين الأهل والمعلمين بالأدوات والأساليب المناسبة لدعم الطلاب.",
    },
    {
      icon: <GraduationCap size={40} className="text-primary-dark" />,
      title: "إرشاد أكاديمي ومهني",
      desc: "توجيه الطلاب نحو المسارات الأكاديمية والمهنية المناسبة لقدراتهم.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-12 sm:py-20 overflow-hidden bg-gradient-to-b from-[#F7FBFF] via-[#F4F7FA] to-[#EEF3F2]"
    >
      {/* زخرفة خلفية مع حركة */}
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-20 -left-32 sm:-left-20 w-64 sm:w-96 h-64 sm:h-96 bg-primary/15 rounded-full blur-3xl"
      ></motion.div>
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -right-32 sm:-right-20 w-64 sm:w-96 h-64 sm:h-96 bg-secondary/15 rounded-full blur-3xl"
      ></motion.div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-20 text-center relative z-10">
        <motion.h2
          className="text-4xl font-bold mb-6 text-[#1D2A32]"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          خدماتنا
        </motion.h2>
        <motion.p
          className="text-lg text-[#4B5B66] max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          نقدم مجموعة من الخدمات المصممة خصيصًا لدعم الطلاب ذوي الاحتياجات
          الخاصة على المستوى الأكاديمي والنفسي والاجتماعي.
        </motion.p>

        {/* بطاقات الخدمات مع انيميشن متتالية */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-outline hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-opacity-95"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <motion.div
                className="mb-4 flex justify-center"
                whileHover={{
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.6 },
                }}
              >
                {service.icon}
              </motion.div>
              <h3 className="text-xl font-semibold mb-3 text-primary">
                {service.title}
              </h3>
              <p className="text-[#4B5B66] leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
