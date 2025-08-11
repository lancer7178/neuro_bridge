"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Heart, Lightbulb, ShieldCheck, Users, RefreshCw } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="bg-background">
      {/* Hero Section */}
      <section className="relative py-28 bg-gradient-to-b from-primary-light via-white to-background overflow-hidden">
        {/* أشكال زخرفية */}
        <div className="absolute -top-40 -left-40 w-[28rem] h-[28rem] bg-primary/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 -right-40 w-[28rem] h-[28rem] bg-secondary/20 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 lg:px-20 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            {/* صورة */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Image
                src="https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=800&q=80"
                alt="طلاب يتعاونون"
                width={800}
                height={600}
                className="rounded-2xl shadow-xl border border-muted-darker"
              />
              <div className="absolute -top-4 -left-4 w-full h-full border-4 border-accent rounded-2xl -z-10"></div>
            </motion.div>

            {/* النص */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h1 className="text-5xl font-bold text-secondary mb-8">من نحن</h1>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                نحن منصة تعليمية متخصصة في دعم الطلاب ذوي الاحتياجات الخاصة، نقدم حلولاً
                تعليمية مبتكرة تراعي الفروقات الفردية وتستخدم أحدث التقنيات التفاعلية.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                هدفنا تمكين الطلاب من التعلم بطريقة مرنة تناسب قدراتهم، مع توفير بيئة
                آمنة ومحفزة على الإبداع.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-28 container mx-auto px-6 lg:px-20">
        <div className="grid md:grid-cols-2 gap-16">
          {[
            {
              icon: Eye,
              title: "رؤيتنا",
              desc: "نسعى لأن يكون لكل طالب فرصة متساوية للتعلم والنمو، بغض النظر عن التحديات التي يواجهها، من خلال بيئة تعليمية متكاملة تعتمد على الإبداع والتكنولوجيا.",
              gradient: "from-primary-light to-primary/10",
            },
            {
              icon: Heart,
              title: "رسالتنا",
              desc: "تقديم الدعم الأكاديمي والنفسي والاجتماعي للطلاب ذوي الاحتياجات الخاصة عبر حلول تعليمية مخصصة تراعي الفروق الفردية وتحقق التقدم المستدام.",
              gradient: "from-secondary-light to-secondary/10",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${item.gradient} rounded-2xl p-10 shadow-lg border border-muted hover:shadow-xl hover:-translate-y-1 transition-all`}
            >
              <div className="flex items-center gap-3 mb-4">
                <item.icon className="w-8 h-8 text-primary" />
                <h2 className="text-2xl font-bold text-primary">{item.title}</h2>
              </div>
              <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gradient-to-br from-accent-soft via-primary to-primary-dark text-primary-foreground py-28">
        <div className="container mx-auto px-6 lg:px-20 text-center">
          <motion.h2
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-white mb-14"
          >
            🌟 قيمنا
          </motion.h2>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-12">
            {[
              { icon: Lightbulb, title: "الإبداع", desc: "تشجيع التفكير المبتكر في جميع أنشطتنا." },
              { icon: ShieldCheck, title: "التمكين", desc: "دعم الطلاب لتحقيق إمكاناتهم الكاملة." },
              { icon: Users, title: "التعاون", desc: "العمل مع الأسر والمعلمين لتحقيق أهداف مشتركة." },
              { icon: RefreshCw, title: "الشفافية", desc: "تقديم تجربة تعليمية واضحة ومفتوحة." },
            ].map((value, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="bg-white p-8 rounded-2xl shadow-md border border-muted hover:shadow-lg hover:-translate-y-1 transition-all text-left"
              >
                <value.icon className="w-10 h-10 text-secondary mb-4" />
                <h3 className="text-xl font-semibold text-secondary mb-3">{value.title}</h3>
                <p className="text-muted-foreground text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
