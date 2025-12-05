"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  UserCheck,
  GraduationCap,
  LogOut,
  Home,
  Layers,
  Info,
  PhoneCall,
} from "lucide-react";
import { useAuth } from "@/lib/AuthContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userData, setUserData] = useState(null);

  // Use centralized Auth context
  const {
    user: currentUser,
    profile: authProfile,
    loading,
    logout,
  } = useAuth();

  // Keep local derived state for any small UI interactions
  useEffect(() => {
    setUserData(authProfile || null);
  }, [authProfile]);

  const handleLogout = async () => {
    await logout();
    setMenuOpen(false);
    setUserData(null);
  };

  return (
    <nav className="bg-[#FEFEFE] text-[#1D2A32] shadow-lg fixed w-full z-50 backdrop-blur-xl border-b border-outline">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4 gap-3">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-3 whitespace-nowrap"
          aria-label="Neuro Bridge home"
        >
          <Image
            src="/logo.png"
            alt="Neuro Bridge"
            width={200}
            height={64}
            className="h-10 w-auto sm:h-20 md:h-16 lg:h-16 xl:h-16"
            priority
          />
          <span className="sr-only">Neuro Bridge</span>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex items-center font-medium rounded-full border border-outline bg-white/70 px-4 py-1 gap-4 lg:gap-6 shadow-sm">
          <li>
            <Link href="/" className="transition hover:text-primary">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="#services" className="transition hover:text-primary">
              الخدمات
            </Link>
          </li>
          <li>
            <Link href="#about" className="transition hover:text-primary">
              من نحن
            </Link>
          </li>
          <li>
            <Link href="#contact" className="transition hover:text-primary">
              تواصل معنا
            </Link>
          </li>

          {!userData && (
            <>
              <li>
                <Link href="/auth/login">
                  <Button
                    variant="secondary"
                    size="default"
                    className="px-4 py-2"
                  >
                    تسجيل الدخول
                  </Button>
                </Link>
              </li>
              <li className="relative">
                <Button
                  variant="ghost"
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                >
                  إنشاء حساب <ChevronDown size={18} />
                </Button>
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
              <li className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary text-white flex items-center justify-center font-bold shadow-md text-sm">
                  {userData.fullName
                    ? userData.fullName.charAt(0).toUpperCase()
                    : userData.email.charAt(0).toUpperCase()}
                </div>
                <div className="hidden lg:flex flex-col leading-tight">
                  <span className="text-sm font-semibold">
                    {userData.fullName || userData.email}
                  </span>
                  <span className="text-xs text-[#4B5B66]">
                    {userData.role === "teacher"
                      ? "معلم"
                      : userData.role === "student"
                      ? "طالب"
                      : "عضو"}
                  </span>
                </div>
              </li>

              {userData.role === "teacher" && (
                <li>
                  <Link
                    href="/dashboard/teacher"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover"
                  >
                    لوحة المعلم
                  </Link>
                </li>
              )}
              {userData.role === "student" && (
                <li>
                  <Link
                    href="/dashboard/student"
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary-hover"
                  >
                    لوحة الطالب
                  </Link>
                </li>
              )}

              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-2 px-4 py-2 rounded-full border border-outline bg-white/70 hover:bg-white transition"
                >
                  <LogOut size={16} /> تسجيل خروج
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
        <>
          <div
            className="fixed inset-0 bg-overlay backdrop-blur-sm md:hidden"
            onClick={() => setMenuOpen(false)}
          ></div>
          <div className="md:hidden absolute top-full left-0 w-full">
            <div className="bg-white/95 border-t border-outline rounded-b-3xl shadow-2xl px-5 py-6 space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-[#4B5B66]">القائمة السريعة</p>
                  <p className="text-lg font-semibold text-[#1D2A32]">
                    استكشف المنصة
                  </p>
                </div>
                <button
                  className="rounded-full border border-outline p-2"
                  onClick={() => setMenuOpen(false)}
                  aria-label="إغلاق القائمة"
                >
                  <X size={18} />
                </button>
              </div>

              <div className="grid gap-3">
                {[
                  { href: "/", label: "الرئيسية", Icon: Home },
                  { href: "#services", label: "الخدمات", Icon: Layers },
                  { href: "#about", label: "من نحن", Icon: Info },
                  { href: "#contact", label: "تواصل معنا", Icon: PhoneCall },
                ].map(({ href, label, Icon }) => (
                  <Link
                    key={label}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center gap-3 rounded-2xl border border-outline bg-white px-4 py-3 transition hover:border-secondary/60 hover:shadow-md"
                  >
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary/15 text-primary">
                      <Icon size={18} />
                    </span>
                    <span className="text-base font-medium text-[#1D2A32]">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>

              {!userData && (
                <div className="grid gap-3">
                  <Link
                    href="/auth/login"
                    onClick={() => setMenuOpen(false)}
                    className="flex items-center justify-center rounded-2xl bg-primary text-primary-foreground py-3 font-semibold shadow-lg shadow-primary/20"
                  >
                    تسجيل الدخول
                  </Link>
                  <div className="grid grid-cols-2 gap-3 text-sm">
                    <Link
                      href="/auth/register?role=teacher"
                      onClick={() => setMenuOpen(false)}
                      className="rounded-2xl border border-outline bg-white py-3 text-center hover:border-secondary/60 hover:shadow"
                    >
                      معلم
                    </Link>
                    <Link
                      href="/auth/register?role=student"
                      onClick={() => setMenuOpen(false)}
                      className="rounded-2xl border border-outline bg-white py-3 text-center hover:border-secondary/60 hover:shadow"
                    >
                      طالب
                    </Link>
                  </div>
                </div>
              )}

              {userData && (
                <div className="space-y-4">
                  <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-accent/10 px-4 py-3">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {userData.fullName
                        ? userData.fullName.charAt(0).toUpperCase()
                        : userData.email.charAt(0).toUpperCase()}
                    </div>
                    <div>
                      <p className="text-sm text-[#4B5B66]">مرحباً</p>
                      <p className="font-semibold text-[#1D2A32]">
                        {userData.fullName || userData.email}
                      </p>
                    </div>
                  </div>

                  {userData.role === "teacher" && (
                    <Link
                      href="/dashboard/teacher"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-2xl bg-primary text-primary-foreground px-4 py-3 text-center font-semibold hover:bg-primary-hover"
                    >
                      لوحة المعلم
                    </Link>
                  )}
                  {userData.role === "student" && (
                    <Link
                      href="/dashboard/student"
                      onClick={() => setMenuOpen(false)}
                      className="block rounded-2xl bg-primary text-primary-foreground px-4 py-3 text-center font-semibold hover:bg-primary-hover"
                    >
                      لوحة الطالب
                    </Link>
                  )}

                  <button
                    onClick={handleLogout}
                    className="w-full rounded-2xl border border-outline bg-white px-4 py-3 font-medium flex items-center justify-center gap-2 hover:border-secondary/60 hover:shadow"
                  >
                    <LogOut size={16} /> تسجيل خروج
                  </button>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </nav>
  );
}
