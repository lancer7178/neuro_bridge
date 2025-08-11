"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase/config";
import { doc, getDoc } from "firebase/firestore";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginClient() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(e) {
    e.preventDefault();
    setError("");
    if (!email || !password) {
      setError("يرجى تعبئة البريد الإلكتروني وكلمة المرور");
      return;
    }

    setLoading(true);

    try {
      // تسجيل الدخول
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      // جلب بيانات المستخدم من Firestore
      const docRef = doc(db, "users", user.uid);
      const docSnap = await getDoc(docRef);

      if (!docSnap.exists()) {
        setError("بيانات المستخدم غير موجودة.");
        setLoading(false);
        return;
      }

      // تخزين بيانات المستخدم محلياً (localStorage)
      const userData = docSnap.data();
      localStorage.setItem("userData", JSON.stringify(userData));

      // إعادة التوجيه للصفحة الرئيسية
      router.push("/");
    } catch (err) {
      console.error("Login error:", err);
      if (err.code === "auth/wrong-password" || err.code === "auth/user-not-found") {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      } else if (err.code === "auth/too-many-requests") {
        setError("تم حظر المحاولة مؤقتًا. حاول لاحقًا.");
      } else {
        setError("خطأ غير معروف أثناء تسجيل الدخول. حاول مرة أخرى.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-dark via-primary to-accent-soft px-4">
      <div className="bg-white/10 backdrop-blur-xl rounded-2xl shadow-2xl w-full max-w-md p-8 border border-white/20">
        <h2 className="text-3xl font-bold text-center text-white mb-2">تسجيل الدخول</h2>
        <p className="text-center text-white/70 mb-6 text-sm">
          أهلاً بك! الرجاء تسجيل الدخول لمتابعة رحلتك التعليمية
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label className="block mb-2 text-sm text-white/80">البريد الإلكتروني</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-soft outline-none"
              required
            />
          </div>

          <div className="mb-5 relative">
            <label className="block mb-2 text-sm text-white/80">كلمة المرور</label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:ring-2 focus:ring-accent-soft outline-none"
              required
            />
            <button
              type="button"
              className="absolute top-9 right-4 text-white/60 hover:text-white"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"}
            >
              {showPassword ? <EyeOff /> : <Eye />}
            </button>
          </div>

          {error && <p className="text-red-400 text-sm mb-3 text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 bg-accent-soft text-primary-dark font-semibold py-3 rounded-lg hover:brightness-110 transition-all disabled:opacity-50"
          >
            <LogIn size={20} />
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </button>
        </form>
      </div>
    </div>
  );
}
