"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { UserPlus, Eye, EyeOff } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";

import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";
import { auth, db } from "@/lib/firebase/config";

export default function RegisterClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const roleFromUrlRaw = searchParams.get("role");
  const validRoles = ["student", "teacher"];
  const roleFromUrl = validRoles.includes(roleFromUrlRaw) ? roleFromUrlRaw : "student";

  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState(roleFromUrl);

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [redirect, setRedirect] = useState(false); // New state for redirect control

  useEffect(() => {
    if (role !== roleFromUrl) {
      setRole(roleFromUrl);
    }
  }, [roleFromUrl, role]);

  useEffect(() => {
    // Trigger redirect after success message is set
    if (successMessage && !redirect) {
      const timer = setTimeout(() => {
        setRedirect(true);
        router.push("/account");
      }, 1500); // 1500ms delay to show success message
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [successMessage, redirect, router]);

  async function handleRegister(e) {
    e.preventDefault();
    setError("");
    setSuccessMessage("");
    setLoading(true);

    if (!fullName || !email || !password) {
      setError("يرجى تعبئة جميع الحقول");
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        fullName,
        email,
        role,
        createdAt: serverTimestamp(),
      });

      setSuccessMessage("تم إنشاء الحساب بنجاح!");
      setLoading(false); // Reset loading state
      setRedirect(false); // Reset redirect state
    } catch (err) {
      setLoading(false);
      setError(err.message || "حدث خطأ أثناء إنشاء الحساب");
    }
  }

  return (
    <div className="min-h-screen flex items-start justify-center bg-gradient-to-br from-primary-dark via-primary to-accent-soft px-4 pt-24">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-2">إنشاء حساب</h2>
        <p className="text-center text-white/70 mb-6 text-sm">
          انضم إلينا وابدأ رحلتك التعليمية المميزة
        </p>

        <form onSubmit={handleRegister}>
          <div className="mb-5">
            <label className="block mb-2 text-sm text-white/80">الاسم الكامل</label>
            <input
              type="text"
              placeholder="اكتب اسمك"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-soft outline-none"
            />
          </div>

          <div className="mb-5">
            <label className="block mb-2 text-sm text-white/80">البريد الإلكتروني</label>
            <input
              type="email"
              placeholder="example@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-soft outline-none"
            />
          </div>

          <div className="mb-5 relative">
            <label className="block mb-2 text-sm text-white/80">كلمة المرور</label>
            <input
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
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

          <div className="mb-5">
            <label className="block mb-2 text-sm text-white/80">نوع الحساب</label>
            <div className="flex gap-4">
              <span className="flex-1 py-3 rounded-lg border bg-accent-soft text-primary-dark border-accent-soft text-center font-semibold">
                {role === "teacher" ? "معلم" : "طالب"}
              </span>
            </div>
          </div>

          <button
            type="submit"
            disabled={loading || successMessage !== ""}
            className={`w-full flex items-center justify-center gap-2 bg-accent-soft text-primary-dark font-semibold py-3 rounded-lg hover:brightness-110 transition-all ${
              loading || successMessage !== "" ? "opacity-60 cursor-not-allowed" : ""
            }`}
          >
            <UserPlus size={20} />
            {loading ? "جارٍ الإنشاء..." : successMessage ? "تم الإنشاء!" : "إنشاء الحساب"}
          </button>
        </form>

        {error && <p className="mt-4 text-center text-red-500 text-sm">{error}</p>}
        {successMessage && <p className="mt-4 text-center text-green-500 text-sm">{successMessage}</p>}

        <p className="mt-6 text-center text-white/80 text-sm">
          لديك حساب بالفعل?
          <Link href="/auth/login" className="text-accent-soft hover:underline ml-1">
            تسجيل الدخول
          </Link>
        </p>
      </div>
    </div>
  );
}