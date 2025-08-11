"use client";

import { motion } from "framer-motion";
import { FileCheck } from "lucide-react";

export default function TermsPage() {
  return (
    <main  dir="rtl"  className="bg-background">
      <section className="py-24 bg-gradient-to-r from-secondary to-primary text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4">
            <FileCheck className="w-12 h-12" />
            <h1 className="text-4xl font-bold">الشروط والأحكام</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 lg:px-20 space-y-4 text-muted-foreground leading-relaxed">
        <ul className="list-disc pl-6 space-y-2">
          <li>يجب على المستخدمين الالتزام بالقوانين المحلية.</li>
          <li>لا يجوز إعادة نشر المحتوى بدون إذن.</li>
        </ul>
      </section>
    </main>
  );
}
