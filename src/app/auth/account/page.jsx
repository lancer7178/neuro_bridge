"use client";

import { useEffect, useState } from "react";
import { auth, db } from "@/lib/firebase/config";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { useRouter } from "next/navigation";

export default function AccountPage() {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
        setLoading(false);
      } else {
        router.push("/auth/login");
      }
    });

    return () => unsubscribe();
  }, [router]);

  if (loading)
    return (
      <p className="text-center mt-20 text-lg text-gray-300 animate-pulse">
        جاري التحميل...
      </p>
    );

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-700 px-6 py-20">
      <div className="bg-white bg-opacity-10 backdrop-blur-md rounded-3xl shadow-2xl max-w-md w-full p-10 border border-white/30 text-white text-center">
        <h2 className="text-4xl font-extrabold mb-6 tracking-wide">
          صفحة حسابي
        </h2>
        <p className="text-xl mb-3 font-semibold">
          مرحباً،{" "}
          <span className="text-yellow-400">
            {userData?.fullName || "مستخدم"}
          </span>
          !
        </p>
        <div className="space-y-3 mt-6 text-left">
          <p>
            <span className="font-semibold text-yellow-300">البريد الإلكتروني:</span>{" "}
            {userData?.email}
          </p>
          <p>
            <span className="font-semibold text-yellow-300">نوع الحساب:</span>{" "}
            {userData?.role === "teacher" ? "معلم" : "طالب"}
          </p>
          <p>
            <span className="font-semibold text-yellow-300">تم إنشاء الحساب في:</span>{" "}
            {userData?.createdAt?.toDate
              ? userData.createdAt.toDate().toLocaleDateString()
              : userData?.createdAt
              ? new Date(userData.createdAt).toLocaleDateString()
              : "-"}
          </p>
        </div>
      </div>
    </div>
  );
}
