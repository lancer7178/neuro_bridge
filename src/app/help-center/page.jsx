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
    <main dir="rtl" className="bg-gray-50 min-h-screen font-sans">
      {/* Hero */}
      <section className="py-24 bg-gradient-to-r from-primary to-accent text-white shadow-lg">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4 mb-8"
          >
            <LifeBuoy className="w-14 h-14" />
            <h1 className="text-5xl font-extrabold tracking-tight">مركز المساعدة</h1>
          </motion.div>
      <div className="relative max-w-lg mx-auto">
  <input
    type="text"
    placeholder="ابحث عن سؤال..."
    value={query}
    onChange={(e) => setQuery(e.target.value)}
    className="
      w-full p-4 pl-12 rounded-xl
      text-gray-900 placeholder-gray-400
      shadow-md
      focus:outline-none focus:ring-4 focus:ring-accent focus:ring-opacity-50
      transition
    "
  />
  <Search className="absolute top-1/2 left-5 -translate-y-1/2 text-gray-500" />
</div>

        </div>
      </section>

      {/* FAQ List */}
      <section className="py-20 container mx-auto px-6 lg:px-20 grid gap-8 max-w-4xl">
        {faqs
          .filter(f => f.q.includes(query) || f.a.includes(query))
          .map((faq, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="
                p-6
                bg-white
                rounded-2xl
                shadow-lg
                border border-gray-200
                cursor-pointer
                hover:shadow-xl
                transition-shadow
              "
            >
              <h3 className="font-semibold text-xl mb-3 text-primary">{faq.q}</h3>
              <p className="text-gray-600 leading-relaxed">{faq.a}</p>
            </motion.div>
          ))}
        {faqs.filter(f => f.q.includes(query) || f.a.includes(query)).length === 0 && (
          <p className="text-center text-gray-500 text-lg">لا توجد نتائج مطابقة.</p>
        )}
      </section>
    </main>
  );
}
