import { BookOpen, HeartHandshake, Users, GraduationCap } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <BookOpen size={40} className="text-primary" />,
      title: "دروس تعليمية مخصصة",
      desc: "نوفر خطط تعليمية فردية تناسب احتياجات كل طالب لتحقيق أقصى استفادة.",
    },
    {
      icon: <HeartHandshake size={40} className="text-accent" />,
      title: "دعم نفسي واجتماعي",
      desc: "مساندة الطلاب لبناء الثقة بالنفس وتحقيق التوازن النفسي والاجتماعي.",
    },
    {
      icon: <Users size={40} className="text-secondary" />,
      title: "ورش عمل للأهل والمعلمين",
      desc: "تمكين الأهل والمعلمين بالأدوات والأساليب المناسبة لدعم الطلاب.",
    },
    {
      icon: <GraduationCap size={40} className="text-primary-dark" />,
      title: "إرشاد أكاديمي ومهني",
      desc: "توجيه الطلاب نحو المسارات الأكاديمية والمهنية المناسبة لقدراتهم.",
    },
  ];

  return (
    <section id="services" className="relative py-20 overflow-hidden bg-gradient-to-b from-background-light via-white to-background-light">
      {/* عناصر زخرفية في الخلفية */}
      <div className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>

      <div className="container mx-auto px-6 lg:px-20 text-center relative z-10">
        <h2 className="text-4xl font-bold mb-6 text-primary-dark">خدماتنا</h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          نقدم مجموعة من الخدمات المصممة خصيصًا لدعم الطلاب ذوي الاحتياجات الخاصة على المستوى الأكاديمي والنفسي والاجتماعي.
        </p>

        {/* بطاقات الخدمات */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg border border-muted hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 backdrop-blur-sm bg-opacity-90"
            >
              <div className="mb-4 flex justify-center">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-muted-foreground">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
