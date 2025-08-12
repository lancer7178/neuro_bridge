"use client";

import { motion } from "framer-motion";
import { FileText } from "lucide-react";

export default function AwarenessArticlesPage() {
  const articles = [
    { title: "أهمية التعلم المخصص", desc: "كيف يساعد التعلم المخصص الطلاب على التقدم.", date: "2025-08-10" },
    { title: "التكنولوجيا ودعم ذوي الاحتياجات", desc: "التقنيات التي تسهل التعليم.", date: "2025-07-22" },
  ];

  return (
    <main dir="rtl" className="bg-background">
      <section className="py-24 bg-gradient-to-r from-primary to-destructive text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4">
            <FileText className="w-12 h-12" />
            <h1 className="text-4xl font-bold">مقالات توعوية</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-8">
        {articles.map((article, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-lg border hover:shadow-xl hover:-translate-y-1 transition-all"
          >
            <p className="text-sm text-muted-foreground">{article.date}</p>
            <h3 className="text-xl font-bold text-primary mt-2 mb-2">{article.title}</h3>
            <p className="text-muted-foreground">{article.desc}</p>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
