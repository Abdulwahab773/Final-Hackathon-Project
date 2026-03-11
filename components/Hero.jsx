import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 text-sm font-semibold text-primary mb-6">
              <span className="material-symbols-outlined text-sm font-icon">verified</span>
              Trusted by 500+ Clinics Worldwide
            </div>
            <h1 className="text-5xl font-black tracking-tight text-slate-900 dark:text-white sm:text-7xl">
              Next-Generation Clinic Management & <span className="text-primary">AI Diagnostics</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600 dark:text-slate-400">
              Experience seamless healthcare with our premium clinic management system. Consult top doctors or use our AI health checker for instant symptom analysis and clinical-grade insights.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/doctors" className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-lg font-bold text-white shadow-xl shadow-primary/25 transition hover:scale-105">
                <span className="material-symbols-outlined font-icon">person_search</span>
                Find a Doctor
              </Link>
              <Link href="/ai-health-checker" className="flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-bold text-slate-900 border border-slate-200 shadow-sm transition hover:bg-slate-50 dark:bg-slate-800 dark:text-white dark:border-slate-700">
                <span className="material-symbols-outlined font-icon">bolt</span>
                Check Symptoms with AI
              </Link>
            </div>
          </div>
          <div className="relative mt-16 lg:col-span-5 lg:mt-0">
            <div className="aspect-4/5 rounded-3xl bg-slate-200 dark:bg-slate-800 bg-cover bg-center shadow-2xl overflow-hidden" style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5uBbdjliKFX-pzIR2OAUEJXeNHCrdpRs1Pmo2RfdWSo6jCsUSX7gGBQKvfgv-jx4-SeH7KIvLcRNkjtIp0GHW_dUl9rX-_fgV_TzHSzG7QTNoxkIOyLjjw_hPq6NnKMlMvDCn5QwKO18y3Ox5DQjmQ3SKDlS4lJQ130_jRGLEqrNzg8wGXCq99jDTfRSKaDo0I1TdjxtcV_7dTB4ixasjiWEGM2N5OE7FwpFcDmsCKXWZI1AjwhJdDrpySd_nFHtfnsZtC4YtdFg')" }}>
              <div className="absolute bottom-6 left-6 right-6 rounded-2xl bg-white/90 p-4 backdrop-blur dark:bg-slate-900/90 border border-white/20">
                <div className="flex items-center gap-4">
                  <div className="h-12 w-12 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">medical_services</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900 dark:text-white">Live AI Analysis</p>
                    <p className="text-xs text-slate-500">Processing real-time health data...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
