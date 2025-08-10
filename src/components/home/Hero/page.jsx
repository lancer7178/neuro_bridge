import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-dark via-primary to-accent-soft text-white">
      {/* زخارف الخلفية */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-accent rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary-light rounded-full opacity-20 blur-3xl"></div>

      {/* المحتوى */}
      <div className="relative container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-16">
        
        {/* النص */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-6xl font-bold leading-tight mb-6">
            مستقبل أفضل يبدأ بـ
            <span className="text-accent"> تعليم شامل</span>
          </h1>
          <p className="text-lg text-white/90 mb-8 max-w-lg mx-auto lg:mx-0">
            نقدم الدعم الأكاديمي والنفسي لطلاب ذوي الاحتياجات الخاصة، لنفتح لهم أبواب
            النجاح ونمكّنهم من تحقيق أحلامهم.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <a
              href="#start"
              className="bg-accent text-primary-dark font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-yellow-400 transition-transform transform hover:scale-105"
            >
              ابدأ الآن
            </a>
            <a
              href="#learn"
              className="border-2 border-white font-semibold px-6 py-3 rounded-lg hover:bg-white hover:text-primary-dark transition-transform transform hover:scale-105"
            >
              تعرف أكثر
            </a>
          </div>
        </div>

        {/* الصورة */}
        <div className="flex-1 flex justify-center">
          <div className="backdrop-blur-lg bg-white/10 p-4 rounded-3xl shadow-xl border border-white/20">
            <Image
              src="https://images.unsplash.com/photo-1584697964154-0c8e1a6fc9f5?auto=format&fit=crop&w=800&q=80"
              alt="دعم التعليم"
              width={500}
              height={400}
              className="rounded-2xl object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}
