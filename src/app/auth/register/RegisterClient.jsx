"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function RegisterClient() {
  const searchParams = useSearchParams();
  const roleFromUrlRaw = searchParams.get("role");
  const validRoles = ["student", "teacher"];
  const roleFromUrl = validRoles.includes(roleFromUrlRaw) ? roleFromUrlRaw : "student";

  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(roleFromUrl);

  useEffect(() => {
    if (role !== roleFromUrl) {
      setRole(roleFromUrl);
    }
  }, [roleFromUrl, role]);

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-primary-dark via-primary to-accent-soft px-4 py-24">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-2">إنشاء حساب</h2>
        <p className="text-center text-white/70 mb-6 text-sm">
          انضم إلينا وابدأ رحلتك التعليمية المميزة
        </p>

        {/* الاسم الكامل */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-white/80">الاسم الكامل</label>
          <input
            type="text"
            placeholder="اكتب اسمك"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-soft outline-none"
          />
        </div>

        {/* البريد الإلكتروني */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-white/80">البريد الإلكتروني</label>
          <input
            type="email"
            placeholder="example@email.com"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-soft outline-none"
          />
        </div>

        {/* كلمة المرور */}
        <div className="mb-5 relative">
          <label className="block mb-2 text-sm text-white/80">كلمة المرور</label>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="••••••••"
            className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-soft outline-none"
          />
          <button
            type="button"
            className="absolute top-9 right-4 text-white/60 hover:text-white"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeOff /> : <Eye />}
          </button>
        </div>

        {/* نوع الحساب - ثابت */}
        <div className="mb-5">
          <label className="block mb-2 text-sm text-white/80">نوع الحساب</label>
          <div className="flex gap-4">
            <span
              className="flex-1 py-3 rounded-lg border bg-accent-soft text-primary-dark border-accent-soft text-center font-semibold"
            >
              {role === "teacher" ? "معلم" : "طالب"}
            </span>
          </div>
        </div>

        {/* زر إنشاء الحساب */}
        <button className="w-full flex items-center justify-center gap-2 bg-accent-soft text-primary-dark font-semibold py-3 rounded-lg hover:brightness-110 transition-all">
          <UserPlus size={20} /> إنشاء الحساب
        </button>

        {/* رابط تسجيل الدخول */}
        <p className="mt-6 text-center text-white/80 text-sm">
          لديك حساب بالفعل؟
          <Link href="/auth/login" className="text-accent-soft hover:underline ml-1">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}
