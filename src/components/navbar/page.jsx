"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Menu,
  X,
  ChevronDown,
  UserCheck,
  GraduationCap,
  LogOut,
} from "lucide-react";
import { auth, db } from "@/lib/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  // جلب البيانات من localStorage عند أول تحميل
  useEffect(() => {
    const storedUser = localStorage.getItem("userData");
    if (storedUser) {
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  // متابعة حالة تسجيل الدخول
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      if (currentUser) {
        try {
          const docRef = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(docRef);

          let userInfo;
          if (docSnap.exists()) {
            userInfo = { ...docSnap.data(), email: currentUser.email };
          } else {
            userInfo = { email: currentUser.email, fullName: "", role: "student" };
          }

          // حفظ البيانات في state و localStorage
          setUserData(userInfo);
          localStorage.setItem("userData", JSON.stringify(userInfo));
        } catch (error) {
          console.error("Error fetching user data:", error);
        }
      } else {
        setUserData(null);
        localStorage.removeItem("userData");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    setMenuOpen(false);
    setUserData(null);
    localStorage.removeItem("userData");
  };

  return (
    <nav className="bg-background-dark text-primary-foreground shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold tracking-wide">
          Neuro bridge
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-medium">
          <li><Link href="/" className="hover:text-secondary">الرئيسية</Link></li>
          <li><Link href="#services" className="hover:text-secondary">الخدمات</Link></li>
          <li><Link href="#about" className="hover:text-secondary">من نحن</Link></li>
          <li><Link href="#contact" className="hover:text-secondary">تواصل معنا</Link></li>

          {!userData && (
            <>
              <li>
                <Link
                  href="/auth/login"
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80"
                >
                  تسجيل الدخول
                </Link>
              </li>
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg flex items-center gap-1 hover:bg-accent/90"
                >
                  إنشاء حساب <ChevronDown size={18} />
                </button>
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                    <li>
                      <Link
                        href="/auth/register?role=teacher"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <UserCheck size={16} /> معلم
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/auth/register?role=student"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100"
                      >
                        <GraduationCap size={16} /> طالب
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}

          {userData && (
            <>
              <li className="flex items-center gap-2 px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                  {userData.fullName
                    ? userData.fullName.charAt(0).toUpperCase()
                    : userData.email.charAt(0).toUpperCase()}
                </div>
                {userData.fullName || userData.email}
              </li>

              {/* رابط مختلف حسب نوع الحساب */}
              {userData.role === "teacher" && (
                <li>
                  <Link
                    href="/dashboard/teacher"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover"
                  >
                    لوحة المعلم
                  </Link>
                </li>
              )}
              {userData.role === "student" && (
                <li>
                  <Link
                    href="/dashboard/student"
                    className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-hover"
                  >
                    لوحة الطالب
                  </Link>
                </li>
              )}

              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80"
                >
                  تسجيل خروج <LogOut size={16} />
                </button>
              </li>
            </>
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden bg-primary text-primary-foreground px-6 py-4 space-y-3 font-medium shadow-lg">
          <li><Link href="/" onClick={() => setMenuOpen(false)}>الرئيسية</Link></li>
          <li><Link href="#services" onClick={() => setMenuOpen(false)}>الخدمات</Link></li>
          <li><Link href="#about" onClick={() => setMenuOpen(false)}>من نحن</Link></li>
          <li><Link href="#contact" onClick={() => setMenuOpen(false)}>تواصل معنا</Link></li>

          {!userData && (
            <>
              <li>
                <Link
                  href="/auth/login"
                  className="block px-4 py-2 bg-secondary text-secondary-foreground rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  تسجيل الدخول
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/register?role=teacher"
                  className="block px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  إنشاء حساب معلم
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/register?role=student"
                  className="block px-4 py-2 bg-accent text-accent-foreground rounded-lg"
                  onClick={() => setMenuOpen(false)}
                >
                  إنشاء حساب طالب
                </Link>
              </li>
            </>
          )}

          {userData && (
            <>
              <li className="flex items-center gap-2 px-4 py-2 bg-accent text-primary-dark rounded-lg font-semibold">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold">
                  {userData.fullName
                    ? userData.fullName.charAt(0).toUpperCase()
                    : userData.email.charAt(0).toUpperCase()}
                </div>
                {userData.fullName || userData.email}
              </li>

              {userData.role === "teacher" && (
                <li>
                  <Link
                    href="/dashboard/teacher"
                    className="block px-4 py-2 bg-primary text-white rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    لوحة المعلم
                  </Link>
                </li>
              )}
              {userData.role === "student" && (
                <li>
                  <Link
                    href="/dashboard/student"
                    className="block px-4 py-2 bg-primary text-white rounded-lg"
                    onClick={() => setMenuOpen(false)}
                  >
                    لوحة الطالب
                  </Link>
                </li>
              )}

              <li>
                <button
                  onClick={handleLogout}
                  className="block w-full text-left px-4 py-2 bg-secondary text-secondary-foreground rounded-lg"
                >
                  تسجيل خروج
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
