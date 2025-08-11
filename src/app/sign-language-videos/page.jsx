"use client";

import { motion } from "framer-motion";
import { Video } from "lucide-react";

export default function SignLanguageVideosPage() {
  const videos = [
    { title: "مقدمة عن الألوان", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
    { title: "تعلم الحروف", src: "https://www.w3schools.com/html/mov_bbb.mp4" },
  ];

  return (
    <main className="bg-background">
      <section className="py-24 bg-gradient-to-r from-secondary to-accent text-white">
        <div className="container mx-auto px-6 lg:px-20">
          <motion.div initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="flex items-center gap-4">
            <Video className="w-12 h-12" />
            <h1 className="text-4xl font-bold">فيديوهات بلغة الإشارة</h1>
          </motion.div>
        </div>
      </section>

      <section className="py-20 container mx-auto px-6 lg:px-20 grid md:grid-cols-2 gap-8">
        {videos.map((video, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            className="bg-white p-4 rounded-xl shadow-lg border"
          >
            <video controls className="w-full rounded-lg">
              <source src={video.src} type="video/mp4" />
              متصفحك لا يدعم الفيديو.
            </video>
            <h3 className="mt-3 font-bold">{video.title}</h3>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
