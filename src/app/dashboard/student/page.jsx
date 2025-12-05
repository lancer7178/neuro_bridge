"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";
import { Button } from "@/components/ui/button";

export default function StudentDashboard() {
  const router = useRouter();
  const { user, profile, loading, logout } = useAuth();

  useEffect(() => {
    if (!loading) {
      if (!user) {
        router.replace("/auth/login");
      } else if ((profile?.role || "student").toLowerCase() !== "student") {
        // not authorized for student dashboard
        router.replace("/");
      }
    }
  }, [user, profile, loading, router]);

  const handleLogout = async () => {
    await logout();
    router.replace("/auth/login");
  };

  if (
    loading ||
    !user ||
    (profile && profile.role && profile.role !== "student")
  ) {
    return (
      <div dir="rtl" className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <p className="text-lg text-[#4B5B66]">جارٍ التحقق من الحساب...</p>
        </div>
      </div>
    );
  }

  const userData =
    profile ||
    JSON.parse(
      typeof window !== "undefined"
        ? localStorage.getItem("userData") || "{}"
        : "{}"
    );

  return (
    <main dir="rtl" className="pt-24 pb-12 w-full max-w-7xl mx-auto px-6">
      <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
        {/* Sidebar */}
        <aside className="rounded-2xl border border-outline bg-white/75 p-6 shadow-lg">
          <div className="flex flex-col items-center gap-4">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white text-3xl font-bold">
              {userData.fullName
                ? userData.fullName.charAt(0).toUpperCase()
                : (user.email || "?").charAt(0).toUpperCase()}
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-[#0F1E35]">
                {userData.fullName || user.email}
              </div>
              <div className="text-sm text-[#4B5B66]">طالب</div>
            </div>
            <Button onClick={handleLogout} variant="ghost" className="mt-3">
              تسجيل خروج
            </Button>
          </div>
        </aside>

        {/* Main */}
        <section className="space-y-6">
          <div className="rounded-2xl border border-outline bg-white/80 p-6 shadow-lg">
            <h2 className="text-2xl font-bold text-[#0F1E35]">لوحة الطالب</h2>
            <p className="text-sm text-[#4B5B66] mt-1">
              نظرة سريعة على تقدمك و الدورات النشطة
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-xl border border-outline bg-white p-5 shadow-sm">
              <p className="text-sm text-[#4B5B66]">الدورات المسجلة</p>
              <p className="mt-2 text-3xl font-bold text-primary">3</p>
            </div>
            <div className="rounded-xl border border-outline bg-white p-5 shadow-sm">
              <p className="text-sm text-[#4B5B66]">الواجبات المكتملة</p>
              <p className="mt-2 text-3xl font-bold text-primary">12</p>
            </div>
            <div className="rounded-xl border border-outline bg-white p-5 shadow-sm">
              <p className="text-sm text-[#4B5B66]">جلسات مباشرة قادمة</p>
              <p className="mt-2 text-3xl font-bold text-primary">1</p>
            </div>
          </div>

          <div className="rounded-2xl border border-outline bg-white p-6 shadow-lg">
            <h3 className="text-xl font-semibold text-[#0F1E35] mb-4">
              دوراتك الحالية
            </h3>
            <div className="overflow-x-auto">
              <table dir="rtl" className="min-w-full">
                <thead>
                  <tr className="text-sm text-left text-[#0F1E35]">
                    <th className="py-3 px-4">اسم الدورة</th>
                    <th className="py-3 px-4">الحالة</th>
                    <th className="py-3 px-4">التقدم</th>
                  </tr>
                </thead>
                <tbody className="divide-y">
                  <tr>
                    <td className="py-3 px-4">كتب صوتية</td>
                    <td className="py-3 px-4 text-green-600 font-semibold">
                      نشطة
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-muted h-2 rounded-full">
                        <div
                          className="h-2 rounded-full bg-primary"
                          style={{ width: "80%" }}
                        />
                      </div>
                      <span className="text-sm text-[#4B5B66]">80%</span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4">فيديوهات مترجمة بلغة الإشارة</td>
                    <td className="py-3 px-4 text-yellow-600 font-semibold">
                      مجدولة
                    </td>
                    <td className="py-3 px-4">
                      <div className="w-full bg-muted h-2 rounded-full">
                        <div
                          className="h-2 rounded-full bg-secondary"
                          style={{ width: "25%" }}
                        />
                      </div>
                      <span className="text-sm text-[#4B5B66]">25%</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
