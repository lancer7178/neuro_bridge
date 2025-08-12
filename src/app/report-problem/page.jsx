"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";

export default function ReportProblemPage() {
  return (
    <main dir="rtl" className="bg-background">
      <section className="py-24 bg-gradient-to-r from-destructive to-primary text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex items-center gap-4"
          >
            <AlertTriangle className="w-12 h-12" />
            <h1 className="text-4xl font-bold">الإبلاغ عن مشكلة</h1>
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
          <select className="p-4 border rounded-lg">
            <option>اختر نوع المشكلة</option>
            <option>مشكلة في تسجيل الدخول</option>
            <option>مشكلة في عرض المحتوى</option>
            <option>أخرى</option>
          </select>
          <textarea placeholder="صف المشكلة" rows={5} className="p-4 border rounded-lg"></textarea>
          <button className="bg-destructive hover:bg-destructive-hover text-white py-3 rounded-lg">
            إرسال البلاغ
          </button>
        </motion.form>
      </section>
    </main>
  );
}
