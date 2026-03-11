export default function Testimonials() {
  const testimonials = [
    {
      text: "The AI health checker was incredibly accurate. It helped me identify an issue that I wouldn't have noticed otherwise. Truly a lifesaver.",
      author: "Marcus Sterling",
      info: "Patient since 2022",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuB7PBEf7WG7xMu9CVPbooh5ylTRywyhFRtVeOw36LBWY6y17jkVQUfElJ3SBHTG5bHzXoC611J8fS166liImc2VdCM8xrCFEpaxpZv08L9W2hhHc0nLpZh1YMnc0kkWqfjwbp3jFjtNiB2A24sqCOEHKfFc5NnXhuB7x97sc5jUPyX-rbIhKsX0Rn62UhsB0XxJ3bG4y6UYuIwbAraG4Qes0yR9SWHpt4dWzgyLnvsEJ_LeaDtuJGOZtBJNTzyqWLj7kct18IcWi4w"
    },
    {
      text: "As a clinic owner, the management system has revolutionized how we operate. Everything is streamlined and our patients love the portal.",
      author: "Dr. Amanda Chen",
      info: "Clinic Director",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAh-G0jLvMOvSR58A4b53exbj1mkCrMvDP1qNQdW5uXfq_MeTAdhTYtZqIspgV02DDg0phny3BvwfezYjkPpzohDpPD1a4pAdKUdfFMlemGZ2KHqlLVa7znKbE9KFM5xzZ0_jEJNyAgaDkRKVFs2_NkrLgUOp7hkS_XD4daOgthbn4_TzF1yzTbc_smnsRnXsUnI7VAU6pjKgRh4SlsNQJXmmq9lYwa5xAUUCzU8ZFDUGJbWfCdsOtZChamp4qmqutVCWYDBXanG8Q"
    },
    {
      text: "Booking an appointment used to take forever. Now I can do it in seconds on my phone. The reminders are really helpful too!",
      author: "Sarah Jenkins",
      info: "Patient since 2023",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOol2TXXzan7oQDtiNsRckI3kvaSEhrPebE4N2D7sDBd-kopaSnw9tuZgx9lgP3G7k3Bbd6gag7jTdPLjouglGi38skVqAJsoNnGDz85pBL5yV53bV-eFDQpWoj8bRFSHjLKTCq1KDM_T5i3MTGgCkLmMkIU1DNkHmge6C4XuSlJtvm0mztAopKmyx3RqNtSyNI3QzuFNmaMEEc_ivakvsrA14ARpbGq0y0N9S_tpV8AbrGWFtkJQ8G6jSzxV-15Poi-y_vTbvqb4"
    }
  ];

  return (
    <section className="py-24 bg-white dark:bg-slate-900/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Trusted by Patients</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <div key={i} className="rounded-2xl bg-slate-50 p-8 dark:bg-slate-800">
              <div className="flex gap-1 text-primary mb-4">
                <span className="material-symbols-outlined font-icon-fill">star</span>
                <span className="material-symbols-outlined font-icon-fill">star</span>
                <span className="material-symbols-outlined font-icon-fill">star</span>
                <span className="material-symbols-outlined font-icon-fill">star</span>
                <span className="material-symbols-outlined font-icon-fill">star</span>
              </div>
              <p className="text-lg italic text-slate-700 dark:text-slate-300">"{t.text}"</p>
              <div className="mt-8 flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-slate-300 bg-cover" style={{ backgroundImage: `url('${t.img}')` }}></div>
                <div>
                  <p className="font-bold text-slate-900 dark:text-white">{t.author}</p>
                  <p className="text-sm text-slate-500">{t.info}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
