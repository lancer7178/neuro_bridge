"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";

const stats = [
  { label: "طلاب يستفيدون الآن", value: "+1,200" },
  { label: "معدل الرضا", value: "98%" },
  { label: "جلسات مخصصة أسبوعياً", value: "320" },
  { label: "استجابة فريق الدعم", value: "24/7" },
];

const highlights = ["خطة تعلم تفاعلية لكل طالب", "متابعة نفسية وسلوكية مستمرة"];

export default function Hero() {
  return (
    <section
      className="relative isolate min-h-screen flex items-center bg-gradient-to-br from-[#E6F3F4] via-[#F7FBFF] to-[#E8F2F6] text-foreground overflow-hidden pt-16 sm:pt-20 lg:pt-24 -mt-16 sm:-mt-20 lg:-mt-24"
      dir="rtl"
    >
      <div
        className="absolute inset-0 opacity-60"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(47,93,98,0.08) 1px, transparent 0)",
          backgroundSize: "26px 26px",
        }}
      />

      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute top-8 -left-24 sm:-left-10 h-64 w-64 sm:h-80 sm:w-80 rounded-full bg-secondary/40 blur-3xl"
      />

      <motion.div
        animate={{ x: [0, 40, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="pointer-events-none absolute -bottom-20 -right-32 h-72 w-72 sm:h-96 sm:w-96 rounded-full bg-primary/15 blur-3xl"
      />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-12 lg:py-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
          <motion.div
            className="flex flex-col gap-8 text-center lg:text-right lg:pl-12 max-w-[900px] mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="flex justify-start lg:justify-start">
              <div className="inline-flex items-center gap-3 rounded-full border border-outline bg-white/70 px-5 py-2 text-sm font-medium text-primary shadow-sm">
                <Sparkles className="h-4 w-4 text-accent" />
                منصة معتمدة لدمج ذوي الإعاقة التعليمية
              </div>
            </div>

            <div className="space-y-4">
              <h1 className="text-3xl font-extrabold leading-tight text-[#1D2A32] sm:text-4xl lg:text-5xl">
                نبني جسراً رقمياً يُمكّن كل طالب من
                <span className="block text-primary mt-1">التعلّم بثقة</span>
              </h1>
              <p className="mx-auto lg:mx-0 max-w-2xl text-base leading-relaxed text-[#30414C] sm:text-lg">
                Neuro Bridge يجمع بين الخبرة الأكاديمية والدعم النفسي في مسارٍ
                واحد شخصي لكل طالب — جلسات مباشرة، أدوات تفاعلية، وتواصل دائم مع
                الأسرة.
              </p>
            </div>

            <div className="flex flex-col items-center gap-3 sm:flex-row-reverse sm:justify-end">
              <Button
                asChild
                size="lg"
                className="h-14 min-w-[180px] rounded-full bg-gradient-to-r from-primary to-secondary px-8 text-base font-semibold text-primary-foreground shadow-lg shadow-secondary/30 transform-gpu will-change-transform motion-safe:transition-all motion-safe:duration-300 hover:-translate-y-1 hover:scale-[1.03] hover:shadow-2xl"
                aria-label="ابدأ رحلتك الآن"
              >
                <Link href="/start">ابدأ رحلتك الآن</Link>
              </Button>

              <Button
                asChild
                size="lg"
                variant="outline"
                className="h-14 min-w-[180px] rounded-full border-outline bg-white/80 px-6 text-base text-primary shadow-sm transform-gpu will-change-transform motion-safe:transition-all motion-safe:duration-250 hover:-translate-y-0.5 hover:scale-[1.01] hover:bg-primary/12 hover:border-primary hover:shadow-md"
                aria-label="تعرّف على البرامج"
              >
                <Link href="/learn">تعرّف على البرامج</Link>
              </Button>
            </div>

            <div className="mt-2">
              <div className="flex flex-wrap gap-3 py-1 px-1 rtl:pl-1 rtl:pr-0 justify-center lg:justify-end">
                {highlights.map((item) => (
                  <div
                    key={item}
                    className="flex min-w-0 items-center gap-2 rounded-full border border-outline bg-white/80 px-3 py-2 text-sm text-[#30414C] max-w-full sm:max-w-[360px] leading-tight shadow-sm"
                  >
                    <CheckCircle2 className="h-4 w-4 flex-shrink-0 text-primary" />
                    <span className="truncate text-right">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          <motion.div
            className="relative mx-auto w-full max-w-md sm:max-w-lg lg:order-first lg:mt-20 lg:justify-self-center lg:w-[560px]"
            initial={{ opacity: 0, scale: 0.98, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.9, ease: "easeOut", delay: 0.05 }}
          >
            <div className="absolute inset-0 -z-10 rounded-[36px] bg-gradient-to-br from-white/30 to-white/0 blur-3xl" />
            <div className="relative overflow-visible rounded-[28px] border border-outline bg-white/80 p-2 backdrop-blur-md hover:scale-[1.01] transition-transform duration-500 shadow-xl shadow-secondary/20">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                <Image
                  src="https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg"
                  alt="جلسة دعم تعليمية"
                  width={640}
                  height={520}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
              <motion.div
                className="absolute left-4 bottom-4 md:top-3 md:bottom-auto z-30 flex items-center gap-3 rounded-full bg-primary/90 px-3 py-2 text-xs font-semibold text-white shadow-lg"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.42, delay: 0.28 }}
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent text-white text-[11px] shadow-sm">
                  مباشر
                </span>
                <div className="text-right leading-tight">
                  <div className="text-[11px] text-white/85">
                    جلسة علاج نطقي
                  </div>
                  <div className="text-sm font-bold text-white">
                    مستمرة الآن مع رنا
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute right-4 top-4 hidden md:flex z-30 w-64 rounded-3xl border border-outline bg-gradient-to-br from-primary to-secondary p-4 text-right text-white shadow-2xl"
                initial={{ opacity: 0, y: -12, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.55, delay: 0.52 }}
              >
                <div className="w-full">
                  <p className="text-base font-semibold">خطة الأسبوع</p>
                  <div className="mt-3 space-y-2 text-sm text-white/90">
                    <p>• تقوية القراءة التكيفية</p>
                    <p>• دعم مهارات التواصل</p>
                    <p>• تدريب ولي الأمر المنزلي</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute left-4 top-4 hidden md:flex z-30 w-48 rounded-2xl border border-outline bg-white/85 p-3 text-right text-primary backdrop-blur shadow-md"
                initial={{ opacity: 0, y: -12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.68 }}
              >
                <div className="w-full">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-primary/70">معدل التقدّم</p>
                    <span className="inline-flex text-xs bg-secondary/20 text-primary px-2 py-0.5 rounded">
                      مباشر
                    </span>
                  </div>
                  <p className="mt-2 text-2xl font-bold">86%</p>
                  <div className="mt-2 h-2 rounded-full bg-muted">
                    <div
                      className="h-full rounded-full bg-primary"
                      style={{ width: "86%" }}
                    />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="order-3 lg:col-span-2 rounded-3xl border border-outline bg-white/80 p-6 sm:p-8 text-right text-[#1D2A32] shadow-2xl shadow-secondary/20 backdrop-blur"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
          >
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.4em] text-primary/70">
                  NEURO BRIDGE IMPACT
                </p>
                <h2 className="mt-2 text-2xl font-bold text-[#1D2A32]">
                  أرقام تُلهمنا للاستمرار
                </h2>
              </div>
              <p className="text-sm text-[#30414C]">
                نتائج محدثة أسبوعياً بالتعاون مع المعلمين والأسر لضمان مسار واضح
                لكل طالب.
              </p>
            </div>

            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="rounded-2xl border border-outline bg-white/85 p-5 text-right shadow-lg shadow-secondary/20"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.15 * index }}
                >
                  <p className="text-3xl font-bold text-primary sm:text-4xl">
                    {stat.value}
                  </p>
                  <p className="mt-2 text-sm text-[#30414C]">{stat.label}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
