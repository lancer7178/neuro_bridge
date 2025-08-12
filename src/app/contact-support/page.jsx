"use client";

import { motion } from "framer-motion";
import { Headphones } from "lucide-react";

export default function ContactSupportPage() {
  return (
    <main dir="rtl" className="bg-background">
      <section className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <Headphones className="w-12 h-12" />
            <h1 className="text-4xl font-bold">التواصل مع الدعم</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 lg:px-20">
        <motion.form
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-lg shadow-lg p-8 grid gap-6"
        >
          <input type="text" placeholder="الاسم" className="p-4 border rounded-lg" />
          <input type="email" placeholder="البريد الإلكتروني" className="p-4 border rounded-lg" />
          <textarea placeholder="رسالتك" rows={5} className="p-4 border rounded-lg"></textarea>
          <button className="bg-primary hover:bg-primary-hover text-white py-3 rounded-lg">إرسال</button>
        </motion.form>
      </section>
    </main>
  );
}
