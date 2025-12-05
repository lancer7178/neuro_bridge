"use client";

import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "@/lib/firebase/config";
import { doc, getDoc, getDocFromCache } from "firebase/firestore";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
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
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;

      // حفظ بيانات أساسية فوراً لتقليل زمن الإحساس بالاستجابة
      const minimalUser = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || null,
      };
      try {
        // small sync write so UI can read it immediately
        localStorage.setItem("userData", JSON.stringify(minimalUser));
        // notify any listeners (e.g., navbar) that user data changed
        try {
          window.dispatchEvent(new Event("userDataChanged"));
        } catch (e) {
          /* ignore: non-critical */
        }
      } catch (e) {
        console.warn("localStorage write failed (minimal):", e);
      }

      // حاول جلب مستند المستخدم من كاش Firestore بسرعة (إذا كان مُمكَّنًا)
      try {
        const cachedRef = doc(db, "users", user.uid);
        try {
          const cachedSnap = await getDocFromCache(cachedRef);
          if (cachedSnap && cachedSnap.exists()) {
            const fullCached = cachedSnap.data();
            const merged = {
              ...fullCached,
              email: user.email,
              role: (fullCached.role || "").toLowerCase(),
            };
            localStorage.setItem("userData", JSON.stringify(merged));
            try {
              window.dispatchEvent(new Event("userDataChanged"));
            } catch (e) {}
          }
        } catch (cacheErr) {
          // cache miss is normal; we'll fetch in background below
        }
      } catch (e) {
        console.warn("Quick cache read failed:", e);
      }

      // توجه فوراً للصفحة الرئيسية لإعطاء إحساس أسرع بالتجاوب
      router.push("/");

      // اجلب بيانات المستخدم الكاملة في الخلفية وحدث التخزين عند الوصول
      (async () => {
        try {
          const docRef = doc(db, "users", user.uid);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            const fullData = docSnap.data();
            // defer write to avoid blocking the UI thread
            setTimeout(() => {
              try {
                localStorage.setItem("userData", JSON.stringify(fullData));
                try {
                  window.dispatchEvent(new Event("userDataChanged"));
                } catch (e) {
                  /* ignore */
                }
              } catch (e) {
                console.warn("localStorage write failed (full):", e);
              }
            }, 0);
          } else {
            console.warn("User doc not found (background fetch).");
          }
        } catch (bgErr) {
          console.error("Background fetch user doc failed:", bgErr);
        }
      })();
    } catch (err) {
      console.error("Login error:", err);
      const code = err?.code || "";
      if (code === "auth/wrong-password" || code === "auth/user-not-found") {
        setError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      } else if (code === "auth/too-many-requests") {
        setError("تم حظر المحاولة مؤقتًا. حاول لاحقًا.");
      } else {
        setError("خطأ غير معروف أثناء تسجيل الدخول. حاول مرة أخرى.");
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#E6F3F4] via-[#F7FBFF] to-[#E8F2F6] px-3 sm:px-4 py-6">
      <div className="bg-white/95 backdrop-blur-xl rounded-xl sm:rounded-2xl shadow-2xl w-full max-w-sm p-6 sm:p-8 border border-outline">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#1D2A32] mb-2">
          تسجيل الدخول
        </h2>
        <p className="text-center text-[#4B5B66] mb-6 text-xs sm:text-sm">
          أهلاً بك! الرجاء تسجيل الدخول لمتابعة رحلتك التعليمية
        </p>

        <form onSubmit={handleLogin}>
          <div className="mb-5">
            <label className="block mb-2 text-xs sm:text-sm text-[#1D2A32]">
              البريد الإلكتروني
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@email.com"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-[#1D2A32] placeholder-[#8696A5] border border-outline focus:ring-2 focus:ring-primary outline-none text-sm"
              required
            />
          </div>

          <div className="mb-5 relative">
            <label className="block mb-2 text-xs sm:text-sm text-[#1D2A32]">
              كلمة المرور
            </label>
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg bg-white text-[#1D2A32] placeholder-[#8696A5] border border-outline focus:ring-2 focus:ring-primary outline-none text-sm"
              required
            />
            <button
              type="button"
              className="absolute top-9 sm:top-10 right-3 sm:right-4 text-[#7A8A99] hover:text-primary"
              onClick={() => setShowPassword(!showPassword)}
              aria-label={
                showPassword ? "إخفاء كلمة المرور" : "إظهار كلمة المرور"
              }
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {error && (
            <p className="text-red-500 text-xs sm:text-sm mb-3 text-center">
              {error}
            </p>
          )}

          <Button
            type="submit"
            disabled={loading}
            className="w-full flex items-center justify-center gap-2 text-sm sm:text-base"
            variant="default"
          >
            <LogIn size={18} />
            {loading ? "جاري تسجيل الدخول..." : "تسجيل الدخول"}
          </Button>
        </form>
      </div>
    </div>
  );
}
