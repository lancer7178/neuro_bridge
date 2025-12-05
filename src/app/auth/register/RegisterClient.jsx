"use client";

import { useState, useEffect } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase/config";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAuth } from "@/lib/AuthContext";

export default function RegisterClient() {
  const searchParams = useSearchParams();

  const validRoles = ["student", "teacher"];
  const roleFromUrlRaw = searchParams.get("role");
  const roleFromUrl = validRoles.includes(roleFromUrlRaw)
    ? roleFromUrlRaw
    : "student";

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState(roleFromUrl);
  const [showPassword, setShowPassword] = useState(false);

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const router = useRouter();
  const { user: authUser, profile: authProfile } = useAuth();

  useEffect(() => {
    // If user is already authenticated, redirect them away from registration
    if (authUser) {
      const roleVal = (authProfile?.role || "student").toLowerCase();
      const dest =
        roleVal === "teacher" ? "/dashboard/teacher" : "/dashboard/student";
      router.replace(dest);
    }
  }, [authUser, authProfile, router]);

  useEffect(() => {
    if (role !== roleFromUrl) {
      setRole(roleFromUrl);
    }
  }, [roleFromUrl, role]);

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!fullName || !email || !password) {
      setError("يرجى تعبئة جميع الحقول");
      return;
    }

    setLoading(true);
    try {
      console.log("بدأ إنشاء المستخدم...");
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("تم إنشاء المستخدم:", user.uid);

      const userInfo = {
        fullName,
        email,
        role,
        profilePic: `https://ui-avatars.com/api/?name=${encodeURIComponent(
          fullName
        )}&background=random&color=fff`,
        createdAt: serverTimestamp(),
      };

      await setDoc(doc(db, "users", user.uid), userInfo);
      console.log("تم حفظ بيانات المستخدم في Firestore");

      const userInfoForStorage = { ...userInfo };
      delete userInfoForStorage.createdAt;
      localStorage.setItem("userData", JSON.stringify(userInfoForStorage));

      setSuccessMessage("تم إنشاء الحساب بنجاح!");
      setFullName("");
      setEmail("");
      setPassword("");
    } catch (err) {
      console.error("خطأ أثناء إنشاء الحساب:", err);
      setError(err.message || "حدث خطأ أثناء إنشاء الحساب");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-[#E6F3F4] via-[#F7FBFF] to-[#E8F2F6] px-4 pt-24">
      <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md p-8 border border-outline">
        <h2 className="text-3xl font-bold text-center text-[#1D2A32] mb-2">
          إنشاء حساب
        </h2>
        <p className="text-center text-[#4B5B66] mb-6 text-sm">
          انضم إلينا وابدأ رحلتك التعليمية المميزة
        </p>

        <form onSubmit={handleRegister}>
          <div className="mb-5">
            <label className="block mb-2 text-sm text-[#1D2A32]">
              الاسم الكامل
            </label>
            <input
              type="text"
              placeholder="اكتب اسمك"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-[#1D2A32] placeholder-[#8696A5] border border-outline focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm text-[#1D2A32]">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-[#1D2A32] placeholder-[#8696A5] border border-outline focus:ring-2 focus:ring-primary outline-none"
            />
          </div>

          <div className="mb-5 relative">
            <label className="block mb-2 text-sm text-[#1D2A32]">
              كلمة المرور
            </label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white text-[#1D2A32] placeholder-[#8696A5] border border-outline focus:ring-2 focus:ring-primary outline-none"
            />
            <button
              type="button"
              className="absolute top-9 right-4 text-[#7A8A99] hover:text-primary"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={
                showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
              }
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm text-[#1D2A32]">
              نوع الحساب
            </label>
            <div className="flex gap-4">
              <span className="flex-1 py-3 rounded-lg border bg-secondary/20 text-[#1D2A32] border-outline text-center font-semibold">
                {role === "teacher" ? "معلم" : "طالب"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-primary text-primary-foreground font-semibold py-3 rounded-lg hover:bg-primary-hover transition-all disabled:opacity-50"
          >
            <UserPlus size={20} />
            {loading ? "جارٍ الإنشاء..." : "إنشاء الحساب"}
          </button>
        </form>

        {error && (
          <p className="mt-4 text-center text-red-500 text-sm">{error}</p>
        )}
        {successMessage && (
          <p className="mt-4 text-center text-green-600 text-sm">
            {successMessage}
          </p>
        )}

        <p className="mt-6 text-center text-white/80 text-sm">
          لديك حساب بالفعل؟
          <a href="/auth/login" className="text-primary hover:underline ml-1">
            تسجيل الدخول
          </a>
        </p>
      </div>
    </div>
  );
}
