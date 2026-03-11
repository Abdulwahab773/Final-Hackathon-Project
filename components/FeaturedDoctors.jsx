import Link from "next/link";

export default function FeaturedDoctors() {
  const doctors = [
    {
      name: "Dr. Sarah Mitchell",
      specialty: "Cardiology",
      reviews: "120+",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCOHfMxL8wXTU28YysvBafZz24eBkTp81FlHISpormKD0Uxb3DUjnYsx8NYF0ot-RjNhDNSwM1zFQHbNksaaTUgDWN3zXWkf8MskRE14oyrf5Ii3hxxOP09j_Nu3YDq1phJuIo6ZPA5e8cf_fnEaDKTpYwT3Pp3OCE1842oHMxbXZ06lApxtyK2gQ84HYMRONsuz6XGV4PJXd9Y2O9A8w8wPfd-gDRrz-HL4ufJxoFfEz3VhQ91VpAf1YfHO9JV0Q2EnzlqYvz31O0"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Pediatrics",
      reviews: "95+",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuA6MHjkCoakYVu6qdrmTcIiog7sLP2rq7Yvx62bl-BeoBLJlm_bwjhHoT-KZq9GuNO4FqywCxLk1DhCQtbgwQN0FowqCtSCnRhVdYgvmWWq8LFY6cbsedrUQP_cdgtIsV1gv5wNLhtrGI2yJGKT5GnPXQ4JYbFax8GOniyrI-CHe9VpGiYUV8gfBvcGio04dkRRddPBO0mDMr3uSrBdaUziwDP2zP4LqkD2ZMeuwdEelOYQBC2U6WnLobYlPbAKIz49UNmyQq_mDDk"
    },
    {
      name: "Dr. Elena Rodriguez",
      specialty: "Neurology",
      reviews: "210+",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuD0AjVGEMSVIbP2opPdGnVNTigh1oPMFxhgtzF62m-7U9dQ2JCwqCQkXSx9jT7BiDkAdb8ClNnSwygu9C3006AIf_JX7727iEC5t-0ICEK7JxyILaehbm95KJ6i3NV9IEwl_998puADLdaPWdhJ1IjAG-l5MeMzB_FIlqNGJ6xE-FTSHJWRwJZlktAeQ0ok17ODnxUQ1Vp-ORTT8TS8fZ4eXipxlApFQ10z2qiI88f5CSnneDijL0VXpvlh_UlN6pAkJoqKIEnQdlY"
    }
  ];

  return (
    <section className="bg-slate-50 py-24 dark:bg-background-dark">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <h2 className="text-3xl font-black text-slate-900 dark:text-white">Our Top Specialists</h2>
            <p className="mt-4 text-slate-600 dark:text-slate-400 max-w-lg">Meet some of the industry-leading doctors available for consultation through our platform.</p>
          </div>
          <Link href="/doctors" className="text-primary font-bold flex items-center gap-2 hover:gap-3 transition-all">
            View All Doctors <span className="material-symbols-outlined">arrow_forward</span>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {doctors.map((doctor, index) => {
             const slug = doctor.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
             return (
              <div key={index} className="overflow-hidden rounded-2xl bg-white shadow-md dark:bg-slate-800 transition hover:shadow-xl">
                <Link href={`/doctors/${slug}`} className="block aspect-square bg-slate-200 dark:bg-slate-700 bg-cover bg-center" style={{ backgroundImage: `url('${doctor.img}')` }}></Link>
                <div className="p-6">
                  <p className="text-sm font-bold text-primary uppercase tracking-widest">{doctor.specialty}</p>
                  <Link href={`/doctors/${slug}`}>
                    <h3 className="mt-1 text-xl font-bold text-slate-900 dark:text-white hover:text-primary transition-colors">{doctor.name}</h3>
                  </Link>
                  <div className="mt-4 flex items-center gap-1 text-yellow-400">
                    <span className="material-symbols-outlined text-sm font-icon">star</span>
                    <span className="material-symbols-outlined text-sm font-icon">star</span>
                    <span className="material-symbols-outlined text-sm font-icon">star</span>
                    <span className="material-symbols-outlined text-sm font-icon">star</span>
                    <span className="material-symbols-outlined text-sm font-icon">star</span>
                    <span className="ml-2 text-sm font-medium text-slate-500">({doctor.reviews} reviews)</span>
                  </div>
                  <Link 
                    href={`/doctors/${slug}`}
                    className="mt-6 block text-center w-full rounded-xl border border-primary/20 bg-primary/5 py-3 font-bold text-primary transition hover:bg-primary hover:text-white"
                  >
                    Book Appointment
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
