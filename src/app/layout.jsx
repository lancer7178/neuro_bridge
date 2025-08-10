import Footer from "@/components/footer/page";
import "./globals.css";
import Navbar from "@/components/navbar/page";


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
      >
<Navbar />
        {children}
<Footer />
      </body>
    </html>
  );
}
