"use client";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="relative min-h-screen flex items-center py-12 sm:py-20 bg-gradient-to-br from-primary-dark via-primary to-accent-soft text-white overflow-hidden"
    >
      {/* عناصر خلفية زخرفية مع حركة */}
      <motion.div
        animate={{ x: [0, 30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-0 -left-32 sm:-left-20 w-64 sm:w-72 h-64 sm:h-72 bg-blue-500/20 rounded-full blur-3xl"
      />
      <motion.div
        animate={{ y: [0, -30, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-0 -right-32 sm:-right-20 w-64 sm:w-80 h-64 sm:h-80 bg-accent/20 rounded-full blur-3xl"
      />

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-20">
        {/* العنوان */}
        <motion.div
          className="text-center mb-8 sm:mb-16"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">تواصل معنا</h2>
          <p className="text-white/90 max-w-2xl mx-auto leading-relaxed text-sm sm:text-base">
            نحن هنا لدعمك وتوفير المساعدة التي تحتاجها. يمكنك التواصل معنا عبر
            النموذج أو الطرق التالية.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* نموذج التواصل */}
          <motion.form
            className="bg-white/10 backdrop-blur-lg p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-xl border border-white/10"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <label className="block mb-2 text-xs sm:text-sm font-medium">
                الاسم الكامل
              </label>
              <input
                type="text"
                placeholder="اكتب اسمك"
                className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-xs sm:text-sm font-medium">
                البريد الإلكتروني
              </label>
              <input
                type="email"
                placeholder="example@email.com"
                className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
              />
            </div>

            <div className="mb-6">
              <label className="block mb-2 text-xs sm:text-sm font-medium">
                الرسالة
              </label>
              <textarea
                rows="5"
                placeholder="اكتب رسالتك هنا"
                className="w-full px-4 py-2 sm:py-3 rounded-lg bg-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-accent transition-all text-sm"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-accent text-accent-foreground font-semibold px-8 py-3 sm:py-4 rounded-lg shadow-lg hover:bg-accent-hover transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-accent/60 text-sm sm:text-base"
            >
              إرسال الرسالة
            </button>
          </motion.form>

          {/* بيانات التواصل + الخريطة */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            {/* بيانات التواصل */}
            <div className="bg-white/10 p-6 rounded-2xl shadow-lg border border-white/10 space-y-6">
              {[
                {
                  Icon: Mail,
                  title: "البريد الإلكتروني",
                  value: "support@example.com",
                },
                { Icon: Phone, title: "رقم الهاتف", value: "+20 123 456 7890" },
                { Icon: MapPin, title: "العنوان", value: "القاهرة، مصر" },
              ].map(({ Icon, title, value }, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-4"
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-accent/20 p-3 rounded-full">
                    <Icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-white/80">{value}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* خريطة جوجل */}
            <motion.div
              className="rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-white/10"
              whileHover={{ scale: 1.02 }}
            >
              <iframe
                title="Google Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110574.03326792828!2d31.165576373782883!3d30.05961847077902!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14584140f1a17a8f%3A0xd7486717e9c36f1!2z2KfZhNiv2YLYjCDYp9mE2LPYqti12YjYqQ!5e0!3m2!1sar!2seg!4v1695489419302!5m2!1sar!2seg"
                width="100%"
                height="200"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
