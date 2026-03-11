export default function HowItWorks() {
  const steps = [
    { number: "01", title: "Create Profile", desc: "Sign up and securely enter your medical history and preferences." },
    { number: "02", title: "Check Symptoms", desc: "Use our AI tool or browse through our network of specialists." },
    { number: "03", title: "Get Treated", desc: "Schedule a visit, receive your plan, and track your recovery journey." }
  ];

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-black text-slate-900 dark:text-white">Getting Started is Simple</h2>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Follow these three easy steps to better health.</p>
        </div>
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-12 relative">
          <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-100 dark:bg-slate-800 -z-10"></div>
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center text-center">
              <div className="flex h-24 w-24 items-center justify-center rounded-full bg-white border-4 border-primary text-primary shadow-xl dark:bg-slate-900 mb-8">
                <span className="text-2xl font-black italic">{step.number}</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white">{step.title}</h3>
              <p className="mt-4 text-slate-600 dark:text-slate-400">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
