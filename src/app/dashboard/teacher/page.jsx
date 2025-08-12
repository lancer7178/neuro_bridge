"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function TeacherDashboard() {
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
          if (parsedUser.role === "teacher") {
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
      <div className="flex justify-center items-center min-h-screen">
        <p className="text-lg text-gray-500">جارٍ التحميل...</p>
      </div>
    );
  }

  return (
    <main
      dir="rtl"
      className="pt-24 max-w-5xl mx-auto p-8 bg-white rounded-lg shadow-lg "
    >
      {" "}
      <header className="flex items-center gap-6 mb-8">
        {/* صورة أو أول حرف الاسم */}
        <div className="w-24 h-24 rounded-full bg-green-600 flex items-center justify-center text-white text-4xl font-bold select-none">
          {userData.fullName
            ? userData.fullName.charAt(0).toUpperCase()
            : userData.email.charAt(0).toUpperCase()}
        </div>
        <div>
          <h1 className="text-3xl font-bold text-gray-800">
            مرحباً، {userData.fullName || "المعلم"}
          </h1>
          <p className="text-gray-600 mt-1">لوحة تحكم المعلم</p>
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
        {/* بطاقة معلومات الحساب */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-700">
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

        {/* بطاقة الإحصائيات (كمثال) */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-700">
            إحصائياتك
          </h2>
          <ul className="space-y-4">
            <li>
              <p className="text-gray-700">عدد الدورات التي تشرف عليها</p>
              <p className="text-3xl font-bold text-green-600">5</p>
            </li>
            <li>
              <p className="text-gray-700">عدد الطلاب المسجلين</p>
              <p className="text-3xl font-bold text-green-600">150</p>
            </li>
          </ul>
        </div>

        {/* قسم الإعلانات أو التنبيهات */}
        <div className="bg-green-50 p-6 rounded-lg shadow-sm">
          <h2 className="text-xl font-semibold mb-4 text-green-700">
            الإعلانات والتنبيهات
          </h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>تم تحديث جدول الحصص الأسبوع المقبل.</li>
            <li>الرجاء مراجعة الواجبات قبل يوم الجمعة.</li>
            <li>ندوة تعليمية يوم السبت الساعة 10 صباحاً.</li>
          </ul>
        </div>
      </section>
      {/* مثال على محتوى إضافي: جدول أو قائمة دورات */}
      <section>
        <h2 className="text-2xl font-bold mb-4 text-gray-800">
          الدورات التي تشرف عليها
        </h2>
        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-green-100 text-green-700">
              <tr>
                <th className="py-3 px-4 text-left">اسم الدورة</th>
                <th className="py-3 px-4 text-left">عدد الطلاب</th>
                <th className="py-3 px-4 text-left">الحالة</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4">دروس ميسرة </td>
                <td className="py-3 px-4">40</td>
                <td className="py-3 px-4 text-green-600 font-semibold">نشطة</td>
              </tr>
              <tr className="border-t border-gray-200 bg-green-50">
                <td className="py-3 px-4"> فيديوهات مترجمة بلغة الإشارة </td>
                <td className="py-3 px-4">35</td>
                <td className="py-3 px-4 text-yellow-600 font-semibold">
                  مجدولة
                </td>
              </tr>
              <tr className="border-t border-gray-200">
                <td className="py-3 px-4"> دروس ميسرة </td>
                <td className="py-3 px-4">25</td>
                <td className="py-3 px-4 text-red-600 font-semibold">مغلقة</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
}
