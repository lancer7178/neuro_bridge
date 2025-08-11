"use client";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-20 bg-gradient-to-br from-primary-dark via-primary to-accent-soft text-white"
    >
      {/* عناصر خلفية زخرفية */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-accent/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-6 lg:px-20">
        {/* العنوان */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed">
            نحن هنا لدعمك وتوفير المساعدة التي تحتاجها. يمكنك التواصل معنا عبر النموذج أو الطرق التالية.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* نموذج التواصل */}
          <form className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/10">
            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">الاسم الكامل</label>
              <input
                type="text"
                placeholder="اكتب اسمك"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">البريد الإلكتروني</label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-sm font-medium">الرسالة</label>
              <textarea
                rows="5"
                placeholder="اكتب رسالتك هنا"
                className="w-full px-4 py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-semibold px-8 py-4 rounded-lg shadow-lg hover:bg-accent-hover transition-transform transform  focus:outline-none focus:ring-4 focus:ring-accent/60"
            >
              إرسال الرسالة
            </button>
          </form>

          {/* بيانات التواصل + الخريطة */}
          <div className="space-y-8">
            {/* بيانات التواصل */}
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/10 space-y-6">
              <div className="flex items-center gap-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Mail className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">البريد الإلكتروني</h3>
                  <p className="text-white/80">support@example.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">رقم الهاتف</h3>
                  <p className="text-white/80">+20 123 456 7890</p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">العنوان</h3>
                  <p className="text-white/80">القاهرة، مصر</p>
                </div>
              </div>
            </div>

            {/* خريطة جوجل */}
            <div className="rounded-2xl overflow-hidden shadow-lg border border-white/10">
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110574.03326792828!2d31.165576373782883!3d30.05961847077902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584140f1a17a8f%3A0xd7486717e9c36f1!2z2KfZhNiv2YLYjCDYp9mE2LPYqti12YjYqQ!5e0!3m2!1sar!2seg!4v1695489419302!5m2!1sar!2seg"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
