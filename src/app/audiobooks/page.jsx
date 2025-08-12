"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";

export default function AudioBooksPage() {
  const books = [
    { title: "قصص قصيرة ملهمة", src: "/audio/story1.mp3" },
    { title: "رحلة في عالم العلوم", src: "/audio/science.mp3" },
  ];

  return (
    <main dir="rtl" className="bg-background">
      <section className="py-24 bg-gradient-to-r from-accent to-primary text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4">
            <Headphones className="w-12 h-12" />
            <h1 className="text-4xl font-bold">الكتب الصوتية</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 lg:px-20 space-y-8">
        {books.map((book, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white p-6 rounded-xl shadow-md border"
          >
            <h3 className="font-bold text-lg mb-3">{book.title}</h3>
            <audio controls className="w-full">
              <source src={book.src} type="audio/mpeg" />
              متصفحك لا يدعم تشغيل الصوت.
            </audio>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
