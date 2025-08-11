"use client";

import { motion } from "framer-motion";
import { BookOpen } from "lucide-react";

export default function EasyLessonsPage() {
  const lessons = [
    { title: "الرياضيات للمبتدئين", desc: "شرح مبسط لأساسيات الرياضيات." },
    { title: "مبادئ القراءة", desc: "دروس لتقوية مهارات القراءة." },
    { title: "أساسيات الكمبيوتر", desc: "تعلم تشغيل الكمبيوتر والبرامج." },
  ];

  return (
    <main className="bg-background">
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4">
            <BookOpen className="w-12 h-12" />
            <h1 className="text-4xl font-bold">الدروس الميسرة</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 lg:px-20 grid md:grid-cols-3 gap-8">
        {lessons.map((lesson, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <h3 className="text-xl font-bold text-primary mb-2">{lesson.title}</h3>
            <p className="text-muted-foreground">{lesson.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
