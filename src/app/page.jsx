import AboutUs from "@/components/home/about/page";
import ContactSection from "@/components/home/contact/page";
import Hero from "@/components/home/Hero/page";
import Services from "@/components/home/services/page";

export const metadata = {
  title: "Neuro Bridge | الصفحة الرئيسية",
  description: "Neuro Bridge - موقع لمساعدة الطلبة ذوي الاحتياجات الخاصة.",
};

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <AboutUs />
      <ContactSection />
    </>
  );
}
