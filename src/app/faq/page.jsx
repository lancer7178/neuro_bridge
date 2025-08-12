"use client";

import { motion } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
  const data = [
    { q: "هل يوجد دعم فني 24/7؟", a: "نعم، فريقنا متواجد لمساعدتك في أي وقت." },
    { q: "هل أحتاج اتصال دائم بالإنترنت؟", a: "بعض الدروس يمكن تحميلها للعمل بدون إنترنت." },
  ];
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <main dir="rtl" className="bg-background">
      <section className="py-24 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <HelpCircle className="w-12 h-12" />
            <h1 className="text-4xl font-bold">الأسئلة الشائعة</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 lg:px-20 space-y-4">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-white rounded-lg shadow p-4 border"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="flex justify-between w-full items-center font-semibold text-primary"
            >
              {item.q}
              <ChevronDown className={`transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
            </button>
            {openIndex === i && <p className="mt-2 text-muted-foreground">{item.a}</p>}
          </motion.div>
        ))}
      </section>
    </main>
  );
}
