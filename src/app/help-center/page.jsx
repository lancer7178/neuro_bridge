"use client";

import { motion } from "framer-motion";
import { Search, LifeBuoy } from "lucide-react";
import { useState } from "react";

export default function HelpCenterPage() {
  const [query, setQuery] = useState("");
  const faqs = [
    { q: "كيف أسجل في المنصة؟", a: "يمكنك التسجيل عبر النقر على زر التسجيل وإدخال بياناتك." },
    { q: "كيف أغير كلمة المرور؟", a: "من الإعدادات، اختر تغيير كلمة المرور." },
    { q: "هل المنصة مجانية؟", a: "المنصة تقدم محتوى مجاني مع بعض الميزات المدفوعة." },
  ];

  return (
    <main className="bg-background">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-6"
          >
            <LifeBuoy className="w-12 h-12" />
            <h1 className="text-4xl font-bold">مركز المساعدة</h1>
          </motion.div>
          <div className="relative max-w-lg">
            <input
              type="text"
              placeholder="ابحث عن سؤال..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full p-4 rounded-lg text-black"
            />
            <Search className="absolute top-1/2 right-4 -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 container mx-auto px-6 lg:px-20 grid gap-6">
        {faqs
          .filter(f => f.q.includes(query) || f.a.includes(query))
          .map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-6 bg-white rounded-xl shadow-md border"
            >
              <h3 className="font-bold text-lg mb-2 text-primary">{faq.q}</h3>
              <p className="text-muted-foreground">{faq.a}</p>
            </motion.div>
          ))}
      </section>
    </main>
  );
}
