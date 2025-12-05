"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  CheckCircle2,
  LogIn,
  UserPlus,
  LayoutDashboard,
  MessageSquare,
} from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/lib/AuthContext";

export default function StartPage() {
  const { user, profile, loading } = useAuth();

  const name = profile?.fullName || user?.email || "ضيف";
  const role = profile?.role || "student";
  const dashboardHref =
    role === "teacher"
      ? "/dashboard/teacher"
      : role === "student"
      ? "/dashboard/student"
      : "/dashboard/student";

  const isLoggedIn = Boolean(user);

  return (
    <main
      dir="rtl"
      className="min-h-screen bg-gradient-to-br from-[#F8FBFF] via-[#FBF8FF] to-[#F7FFFD] py-16"
    >
      <div className="container mx-auto px-4">
        <div className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden">
          {/* Decorative blobs */}
          <div className="pointer-events-none absolute -left-16 -top-24 h-72 w-72 rounded-full bg-gradient-to-br from-primary/20 to-secondary/20 blur-3xl" />
          <div className="pointer-events-none absolute -right-10 -bottom-24 h-56 w-56 rounded-full bg-accent/20 blur-3xl" />

          <div className="relative z-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr] items-center bg-white/70 backdrop-blur-md border border-outline p-8 sm:p-12">
            {/* Hero */}
            <section aria-labelledby="start-hero" className="space-y-6">
              <div className="flex items-center gap-4">
                <Image
                  src="/logo.png"
                  alt="Neuro Bridge"
                  width={72}
                  height={72}
                  className="h-16 w-auto"
                />
                <div>
                  <h2
                    id="start-hero"
                    className="text-2xl sm:text-3xl font-extrabold text-[#0F1E35]"
                  >
                    منصة Neuro Bridge
                  </h2>
                  <p className="text-sm text-[#4B5B66]">
                    حلول تعليمية مخصصة لكل طالب — بسيطة، آمنة، ومؤثرة.
                  </p>
                </div>
              </div>

              <h1 className="text-3xl sm:text-4xl font-bold leading-tight text-[#0F1E35]">
                نحو تعلم أكثر ثقة ووضوح
              </h1>

              <p className="text-lg text-[#2F3F55] max-w-2xl">
                انضم إلى آلاف الطلاب الذين يحققون تقدماً يومياً عبر دورات مخصصة،
                متابعة مستمرة، وأدوات تفاعلية تدعم كل خطوة.
              </p>

              <div className="flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm text-[#0D3A4F]">
                  أدوات تفاعلية
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm text-[#0D3A4F]">
                  دعم أسري مستمر
                </span>
                <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-sm text-[#0D3A4F]">
                  جلسات مباشرة
                </span>
              </div>

              <div className="mt-4 flex flex-wrap gap-3">
                <Button
                  asChild
                  size="lg"
                  className="rounded-full px-6 h-12 bg-gradient-to-r from-primary to-secondary text-white shadow-md"
                >
                  <Link href="/lessons">استكشف الدروس</Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="lg"
                  className="rounded-full px-6 h-12 border-primary/60 text-primary hover:bg-primary/8"
                >
                  <Link href="/about">تعرف علينا</Link>
                </Button>
              </div>
            </section>

            {/* Auth/Card */}
            <aside className="rounded-2xl border border-outline bg-white p-6 shadow-lg">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="rounded-md bg-accent/10 p-2">
                    <MessageSquare className="h-5 w-5 text-accent" />
                  </div>
                  <div>
                    <p className="text-sm text-[#4B5B66]">مرحباً</p>
                    <p className="font-semibold text-[#0F1E35]">
                      {isLoggedIn ? name : "زائر"}
                    </p>
                  </div>
                </div>
                <div>
                  {loading ? (
                    <span className="text-sm text-[#8696A5]">
                      جارٍ التحقق...
                    </span>
                  ) : isLoggedIn ? (
                    <Button asChild size="sm" className="rounded-full h-9 px-3">
                      <Link href={dashboardHref}>لوحتي</Link>
                    </Button>
                  ) : (
                    <div className="flex gap-2">
                      <Button
                        asChild
                        size="sm"
                        className="rounded-full h-9 px-3"
                      >
                        <Link href="/auth/register">تسجيل</Link>
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="rounded-full h-9 px-3"
                      >
                        <Link href="/auth/login">دخول</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-2 text-sm text-[#4B5B66]">
                <p>ابدأ بخطوة صغيرة—نحن هنا لدعم كل طالب.</p>
              </div>

              <div className="mt-6 border-t border-outline/50 pt-4">
                <p className="text-xs text-[#7A8A99]">
                  لمساعدتك بشكل أسرع، ألق نظرة على البرامج الموصى بها أو تواصل
                  مع فريق الدعم.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </main>
  );
}
