// app/not-found.js
import Link from "next/link";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-dark via-primary to-accent-soft flex items-center justify-center px-4">
      <div className="bg-white shadow-2xl rounded-3xl p-10 max-w-lg w-full text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">الصفحة غير موجودة</h2>
        <p className="text-gray-600 mt-2">
          يبدو أنك ضللت الطريق، الصفحة التي تبحث عنها غير متوفرة.
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition"
        >
          <Home size={20} />
          العودة للرئيسية
        </Link>
      </div>
    </div>
  );
}
