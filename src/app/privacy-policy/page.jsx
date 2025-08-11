"use client";

import { motion } from "framer-motion";
import { Shield } from "lucide-react";

export default function PrivacyPolicyPage() {
  return (
    <main dir="rtl" className="bg-background">
      <section className="py-24 bg-gradient-to-r from-accent to-secondary text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4">
            <Shield className="w-12 h-12" />
            <h1 className="text-4xl font-bold">سياسة الخصوصية</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 lg:px-20 space-y-6 text-muted-foreground leading-relaxed">
        <p>نحن نلتزم بحماية خصوصيتك وحفظ بياناتك الشخصية...</p>
        <h2 className="text-primary font-bold">المعلومات التي نجمعها</h2>
        <p>نقوم بجمع المعلومات التي تقدمها مباشرة...</p>
      </section>
    </main>
  );
}
