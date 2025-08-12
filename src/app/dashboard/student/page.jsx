"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function StudentDashboard() {
  const router = useRouter();
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        router.push("/auth/login");
      } else {
        const storedUser = localStorage.getItem("userData");
        if (storedUser) {
          const parsedUser = JSON.parse(storedUser);
          if (parsedUser.role === "student") {
            setUserData(parsedUser);
            setLoading(false);
          } else {
            router.push("/");
          }
        } else {
          router.push("/");
        }
      }
    });

    return () => unsubscribe();
  }, [router]);

  const handleLogout = async () => {
    await signOut(auth);
    localStorage.removeItem("userData");
    router.push("/auth/login");
  };

  if (loading) {
    return (
      <div dir="rtl" className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">جارٍ التحميل...</p>
      </div>
    );
  }

  return (
    <main dir="rtl" className="pt-24 max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg ">
      {" "}
      <header className="flex items-center gap-6 mb-8">
        <div className="w-24 h-24 rounded-full bg-blue-600 flex items-center justify-center text-white text-4xl font-bold select-none">
          {userData.fullName
            ? userData.fullName.charAt(0).toUpperCase()
            : userData.email.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            أهلاً، {userData.fullName || "الطالب"}
          </h1>
          <p className="text-gray-600 mt-1">لوحة تحكم الطالب</p>
        </div>
        <button
          onClick={handleLogout}
          className="mr-auto px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
          aria-label="تسجيل خروج"
        >
          تسجيل خروج
        </button>
      </header>
      <section className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            معلومات الحساب
          </h2>
          <ul className="space-y-2 text-gray-700">
            <li>
              <strong>الاسم الكامل:</strong> {userData.fullName || "غير متوفر"}
            </li>
            <li>
              <strong>البريد الإلكتروني:</strong> {userData.email}
            </li>
            <li>
              <strong>الدور:</strong> {userData.role}
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            إحصائياتك
          </h2>
          <ul className="space-y-4">
            <li>
              <p className="text-gray-700">عدد الدورات المسجلة بها</p>
              <p className="text-3xl font-bold text-blue-600">3</p>
            </li>
            <li>
              <p className="text-gray-700">عدد الواجبات المكتملة</p>
              <p className="text-3xl font-bold text-blue-600">12</p>
            </li>
          </ul>
        </div>

        <div className="bg-blue-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-blue-700">
            الإعلانات والتنبيهات
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>تبدأ الدورة الجديدة يوم الأحد المقبل.</li>
            <li>لا تنسَ تسليم الواجب الأسبوعي.</li>
            <li>محاضرة مباشرة يوم الخميس الساعة 6 مساءً.</li>
          </ul>
        </div>
      </section>
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          دوراتك الحالية
        </h2>
   <div className="overflow-x-auto">
  <table
    dir="rtl"
    className="min-w-full border border-gray-200 rounded-lg overflow-hidden shadow-md"
  >
    <thead className="bg-blue-600 text-white">
      <tr>
        <th className="py-3 px-4 text-right font-semibold">اسم الدورة</th>
        <th className="py-3 px-4 text-right font-semibold">الحالة</th>
        <th className="py-3 px-4 text-right font-semibold">التقدم</th>
      </tr>
    </thead>
    <tbody className="divide-y divide-gray-200">
      {/* الصف الأول */}
      <tr className="hover:bg-blue-50 transition-colors duration-200">
        <td className="py-3 px-4">كتب صوتية</td>
        <td className="py-3 px-4 text-green-600 font-semibold">نشطة</td>
        <td className="py-3 px-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-green-500 h-3 rounded-full" style={{ width: "80%" }}></div>
          </div>
          <span className="text-sm text-gray-600">80%</span>
        </td>
      </tr>

      {/* الصف الثاني */}
      <tr className="bg-blue-50 hover:bg-blue-100 transition-colors duration-200">
        <td className="py-3 px-4">فيديوهات مترجمة بلغة الإشارة</td>
        <td className="py-3 px-4 text-yellow-600 font-semibold">مجدولة</td>
        <td className="py-3 px-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-yellow-500 h-3 rounded-full" style={{ width: "25%" }}></div>
          </div>
          <span className="text-sm text-gray-600">25%</span>
        </td>
      </tr>

      {/* الصف الثالث */}
      <tr className="hover:bg-blue-50 transition-colors duration-200">
        <td className="py-3 px-4">دروس ميسرة</td>
        <td className="py-3 px-4 text-red-600 font-semibold">مغلقة</td>
        <td className="py-3 px-4">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div className="bg-red-500 h-3 rounded-full" style={{ width: "100%" }}></div>
          </div>
          <span className="text-sm text-gray-600">100%</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

      </section>
    </main>
  );
}
