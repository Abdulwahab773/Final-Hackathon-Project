import Link from "next/link";

export default function AIPromo() {
  return (
    <section className="relative py-24 bg-linear-to-br from-primary to-blue-700 overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <svg className="h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
          <path d="M0 100 C 20 0 50 0 100 100" fill="none" stroke="white" strokeWidth="0.1"></path>
        </svg>
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="flex-1 text-white z-10 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-blue-100 mb-6 border border-white/20 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-300"></span>
              </span>
              Systems Active: Online
            </div>
            <h2 className="text-4xl font-black lg:text-6xl leading-[1.1] mb-6 tracking-tight italic">
              Our AI never sleeps, <span className="text-blue-200 block sm:inline">so you can rest easy.</span>
            </h2>
            <p className="text-lg text-blue-100 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Experience the power of a world-class diagnostic engine. Trained on millions of clinical records to deliver professional-grade insights in under 120 seconds.
            </p>
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-8 text-left max-w-lg mx-auto lg:mx-0">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 border border-white/20">
                  <span className="material-symbols-outlined text-2xl font-icon">verified_user</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">HIPAA Compliant</h4>
                  <p className="text-xs text-blue-200">Enterprise-grade encryption</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-white/10 border border-white/20">
                  <span className="material-symbols-outlined text-2xl font-icon">speed</span>
                </div>
                <div>
                  <h4 className="font-bold text-white">Instant Analysis</h4>
                  <p className="text-xs text-blue-200">Results in &lt; 2 minutes</p>
                </div>
              </div>
            </div>
            <div className="mt-12 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start">
              <Link href="/ai-health-checker" className="group relative inline-flex items-center justify-center rounded-xl bg-white px-10 py-5 text-lg font-black text-primary transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.4)] hover:scale-105 active:scale-95">
                Try AI Checker Now
              </Link>
              <Link className="text-sm font-bold text-blue-100 hover:text-white flex items-center gap-2 group transition-all" href="#">
                Learn about the tech <span className="material-symbols-outlined font-icon transition-transform group-hover:translate-x-1">east</span>
              </Link>
            </div>
          </div>
          <div className="flex-1 w-full max-w-2xl">
            <div className="relative">
              <div className="relative rounded-[2.5rem] bg-slate-900 p-3 shadow-2xl border border-white/10 overflow-hidden">
                <div className="absolute inset-0 bg-linear-to-tr from-primary/20 to-transparent"></div>
                <div className="relative rounded-4xl bg-[#0c141d] p-6 lg:p-8 min-h-[450px] overflow-hidden border border-white/5">
                  <div className="flex items-center justify-between mb-8 pb-4 border-b border-white/10">
                    <div className="flex items-center gap-3">
                      <div className="h-3 w-3 rounded-full bg-red-500 animate-pulse"></div>
                      <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Live Diagnostic Engine</span>
                    </div>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                      <div className="h-1.5 w-1.5 rounded-full bg-slate-700"></div>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                      <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-[10px] font-bold text-blue-400 uppercase tracking-tighter">Vital Sign Feed</span>
                          <span className="text-[10px] text-slate-500 font-mono">BPM: 72</span>
                        </div>
                        <div className="h-16 flex items-end gap-0.5 overflow-hidden">
                          <div className="flex-1 bg-primary/40 h-4 rounded-t-sm animate-bounce"></div>
                          <div className="flex-1 bg-primary/40 h-8 rounded-t-sm animate-bounce"></div>
                          <div className="flex-1 bg-primary h-12 rounded-t-sm animate-bounce"></div>
                          <div className="flex-1 bg-primary/40 h-6 rounded-t-sm animate-bounce"></div>
                          <div className="flex-1 bg-primary/20 h-4 rounded-t-sm animate-bounce"></div>
                          <div className="flex-1 bg-primary/40 h-10 rounded-t-sm animate-bounce"></div>
                          <div className="flex-1 bg-primary h-5 rounded-t-sm animate-bounce"></div>
                          <div className="flex-1 bg-primary/40 h-9 rounded-t-sm animate-bounce"></div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-white/5 p-4 border border-white/10">
                        <h5 className="text-[10px] font-bold text-slate-400 uppercase mb-3">Processing Insights</h5>
                        <div className="space-y-3">
                          <div className="flex items-center gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-green-500"></div>
                            <div className="h-2 bg-slate-700 w-full rounded-full overflow-hidden">
                              <div className="h-full bg-green-500 w-[85%] animate-pulse"></div>
                            </div>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-500"></div>
                            <div className="h-2 bg-slate-700 w-full rounded-full overflow-hidden">
                              <div className="h-full bg-blue-500 w-[42%] animate-pulse"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="p-3 rounded-lg bg-primary/10 border border-primary/20 flex items-center gap-3 animate-pulse">
                        <span className="material-symbols-outlined text-primary text-sm font-icon">analytics</span>
                        <span className="text-[11px] text-blue-100 font-medium">Cross-referencing symptoms...</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                        <span className="material-symbols-outlined text-green-400 text-sm font-icon">check_circle</span>
                        <span className="text-[11px] text-slate-300">Genetic markers verified</span>
                      </div>
                      <div className="p-3 rounded-lg bg-white/5 border border-white/10 flex items-center gap-3">
                        <span className="material-symbols-outlined text-slate-400 text-sm font-icon">hourglass_empty</span>
                        <span className="text-[11px] text-slate-300">Predicting risk factors...</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute inset-0 pointer-events-none">
                    <div className="h-full w-full bg-linear-to-b from-transparent via-primary/5 to-transparent -top-full animate-scan opacity-50"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 h-24 w-24 rounded-2xl bg-primary/20 backdrop-blur-3xl -z-10 animate-bounce"></div>
              <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-blue-400/10 backdrop-blur-3xl -z-10 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
