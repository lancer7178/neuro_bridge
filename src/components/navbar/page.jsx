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
import { auth } from "@/lib/firebase/config";
import { onAuthStateChanged, signOut } from "firebase/auth";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    await signOut(auth);
    // ممكن توجه المستخدم بعدها للصفحة الرئيسية أو تسجيل الدخول
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
          <li>
            <Link href="/" className="hover:text-secondary transition">
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="#services" className="hover:text-secondary transition">
              الخدمات
            </Link>
          </li>
          <li>
            <Link href="#about" className="hover:text-secondary transition">
              من نحن
            </Link>
          </li>
          <li>
            <Link href="#contact" className="hover:text-secondary transition">
              تواصل معنا
            </Link>
          </li>

          {!user && (
            <>
              <li>
                <Link
                  href="/auth/login"
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition"
                >
                  تسجيل الدخول
                </Link>
              </li>

              {/* Dropdown */}
              <li className="relative">
                <button
                  onClick={() => setDropdownOpen(!dropdownOpen)}
                  className="px-4 py-2 bg-accent text-accent-foreground rounded-lg flex items-center gap-1 hover:bg-accent/90 transition"
                >
                  إنشاء حساب <ChevronDown size={18} />
                </button>
                {dropdownOpen && (
                  <ul className="absolute right-0 mt-2 w-48 bg-white text-black rounded-lg shadow-lg overflow-hidden z-50">
                    <li>
                      <Link
                        href="/auth/register?role=teacher"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                      >
                        <UserCheck size={16} /> معلم
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/auth/register?role=student"
                        className="flex items-center gap-2 px-4 py-2 hover:bg-gray-100 transition"
                      >
                        <GraduationCap size={16} /> طالب
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </>
          )}

          {user && (
            <>
              {" "}
                <li className="px-4 py-2 bg-accent text-accent-foreground rounded-lg font-semibold">
                  مرحباً، {user.email}
                </li>
              <li>
                <button
                  onClick={handleLogout}
                  className="flex items-center gap-1 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition"
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
          <li>
            <Link href="/" onClick={() => setMenuOpen(false)}>
              الرئيسية
            </Link>
          </li>
          <li>
            <Link href="#services" onClick={() => setMenuOpen(false)}>
              الخدمات
            </Link>
          </li>
          <li>
            <Link href="#about" onClick={() => setMenuOpen(false)}>
              من نحن
            </Link>
          </li>
          <li>
            <Link href="#contact" onClick={() => setMenuOpen(false)}>
              تواصل معنا
            </Link>
          </li>

          {!user && (
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

          {user && (
            <>
                <li className="px-4 py-2 bg-accent text-primary-dark rounded-lg font-semibold">
                  مرحباً، {user.email}
                </li>
              <li>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
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
