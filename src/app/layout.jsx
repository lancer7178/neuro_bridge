import Footer from "@/components/footer/page";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import { AuthProvider } from "@/lib/AuthContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-background overflow-x-hidden">
        <AuthProvider>
          <Navbar />
          <main className="pt-16 sm:pt-20 lg:pt-24">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  );
}
