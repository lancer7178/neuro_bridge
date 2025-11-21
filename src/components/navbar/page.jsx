"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Menu,
  X,
  ChevronDown,
  UserCheck,
  GraduationCap,
  LogOut,
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
    <nav className="bg-background-dark text-primary-foreground shadow-lg fixed w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl sm:text-2xl font-bold tracking-wide whitespace-nowrap"
        >
          Neuro bridge
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6 items-center font-medium">
          <li>
            <Link href="/" className="hover:text-secondary">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-secondary">
              الخدمات
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-secondary">
              من نحن
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-secondary">
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
              <li className="flex items-center gap-2 px-4 py-2 rounded-lg font-semibold">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-secondary to-accent text-white flex items-center justify-center font-bold shadow-md">
                  {userData.fullName
                    ? userData.fullName.charAt(0).toUpperCase()
                    : userData.email.charAt(0).toUpperCase()}
                </div>
                <span className="hidden md:inline-block">
                  {userData.fullName || userData.email}
                </span>
              </li>

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
        <ul className="md:hidden bg-primary text-primary-foreground px-4 sm:px-6 py-4 space-y-2 font-medium shadow-lg max-h-[calc(100vh-60px)] overflow-y-auto">
          <li>
            <Link
              href="/"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-primary-light/20"
            >
              الرئيسية
            </Link>
          </li>
          <li>
            <Link
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-primary-light/20"
            >
              الخدمات
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-primary-light/20"
            >
              من نحن
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="block px-4 py-3 rounded-lg hover:bg-primary-light/20"
            >
              تواصل معنا
            </Link>
          </li>

          {!userData && (
            <>
              <li>
                <Link
                  href="/auth/login"
                  className="block px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80"
                  onClick={() => setMenuOpen(false)}
                >
                  تسجيل الدخول
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/register?role=teacher"
                  className="block px-4 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80"
                  onClick={() => setMenuOpen(false)}
                >
                  إنشاء حساب معلم
                </Link>
              </li>
              <li>
                <Link
                  href="/auth/register?role=student"
                  className="block px-4 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80"
                  onClick={() => setMenuOpen(false)}
                >
                  إنشاء حساب طالب
                </Link>
              </li>
            </>
          )}

          {userData && (
            <>
              <li className="flex items-center gap-2 px-4 py-3 bg-accent text-primary-dark rounded-lg font-semibold">
                <div className="w-8 h-8 rounded-full bg-secondary text-white flex items-center justify-center font-bold text-sm">
                  {userData.fullName
                    ? userData.fullName.charAt(0).toUpperCase()
                    : userData.email.charAt(0).toUpperCase()}
                </div>
                <span className="truncate text-sm sm:text-base">
                  {userData.fullName || userData.email}
                </span>
              </li>

              {userData.role === "teacher" && (
                <li>
                  <Link
                    href="/dashboard/teacher"
                    className="block px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/80"
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
                    className="block px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    لوحة الطالب
                  </Link>
                </li>
              )}

              <li>
                <button
                  onClick={handleLogout}
                  className="w-full flex items-center justify-start gap-2 px-4 py-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80"
                >
                  تسجيل خروج <LogOut size={16} />
                </button>
              </li>
            </>
          )}
        </ul>
      )}
    </nav>
  );
}
