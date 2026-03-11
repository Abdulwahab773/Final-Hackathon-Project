export default function Services() {
  const services = [
    {
      icon: "video_chat",
      title: "24/7 Virtual Care",
      desc: "Access board-certified doctors anytime, anywhere via high-quality video consultations."
    },
    {
      icon: "psychology",
      title: "AI Symptom Checker",
      desc: "Our advanced neural networks provide instant diagnostic possibilities with high accuracy."
    },
    {
      icon: "calendar_month",
      title: "Smart Scheduling",
      desc: "Effortless appointment booking with automated reminders and waitlist management."
    },
    {
      icon: "folder_managed",
      title: "Health Records",
      desc: "Secure, encrypted, and unified patient data accessible whenever and wherever you need it."
    }
  ];

  return (
    <section className="bg-white py-24 dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-base font-bold uppercase tracking-wider text-primary">Premium Services</h2>
        <p className="mt-2 text-4xl font-black text-slate-900 dark:text-white">Healthcare, Reimagined</p>
        <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <div key={index} className="group rounded-2xl border border-slate-100 bg-white p-8 text-left shadow-sm transition hover:border-primary/20 hover:shadow-xl dark:bg-slate-800 dark:border-slate-700">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-white transition">
                <span className="material-symbols-outlined font-icon">{service.icon}</span>
              </div>
              <h3 className="mt-6 text-xl font-bold text-slate-900 dark:text-white">{service.title}</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-400">{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
