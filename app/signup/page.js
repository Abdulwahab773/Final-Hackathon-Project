"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function SignupPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-200">
      <Navbar />

      <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl overflow-hidden border border-slate-200 dark:border-slate-800 animate-in fade-in zoom-in-95 duration-700">

          {/* Left Side: Benefits (Visible on Desktop) */}
          <div className="hidden lg:flex flex-col justify-center p-12 bg-primary/5 relative overflow-hidden">
            <div className="z-10">
              <h1 className="text-4xl font-black text-slate-900 dark:text-white mb-6 leading-tight">Start Your Journey to Better Health.</h1>
              <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 font-medium">Join thousands of patients managing their health records, appointments, and prescriptions in one secure place.</p>
              <ul className="space-y-4">
                {[
                  "Secure HIPAA-compliant messaging",
                  "Instant appointment scheduling",
                  "Access to digital medical records"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <span className="material-symbols-outlined text-primary bg-primary/10 p-1 rounded-full text-lg font-icon">check</span>
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Background Decoration */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 opacity-10 pointer-events-none translate-y-1/4">
              <svg className="w-full h-full" viewBox="0 0 400 400" xmlns="http://www.w3.org/2000/svg">
                <circle className="text-primary" cx="200" cy="400" fill="currentColor" r="200"></circle>
              </svg>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="p-4 flex flex-col justify-center">
            <div className="mb-8">
              <h2 className="text-3xl font-black text-slate-900 dark:text-white">Create Account</h2>
              <p className="text-slate-500 dark:text-slate-400 mt-2 font-medium">Enter your details to register for a new account.</p>
            </div>

            <form action="#" className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Full Name</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl font-icon group-focus-within:text-primary transition-colors">person</span>
                  <input
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
                    placeholder="John Doe"
                    type="text"
                  />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
                <div className="relative group">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl font-icon group-focus-within:text-primary transition-colors">mail</span>
                  <input
                    className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
                    placeholder="name@company.com"
                    type="email"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Password</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl font-icon group-focus-within:text-primary transition-colors">lock</span>
                    <input
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Confirm Password</label>
                  <div className="relative group">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl font-icon group-focus-within:text-primary transition-colors">verified_user</span>
                    <input
                      className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 dark:text-white"
                      placeholder="••••••••"
                      type="password"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-3 py-2">
                <input className="mt-1 h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" id="terms" type="checkbox" />
                <label className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed" htmlFor="terms">
                  I agree to the <Link className="text-primary font-bold hover:underline" href="#">Terms of Service</Link> and <Link className="text-primary font-bold hover:underline" href="#">Privacy Policy</Link>, including the processing of my healthcare data.
                </label>
              </div>

              <button className="w-full bg-primary hover:brightness-110 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 active:scale-95" type="submit">
                <span>Create Account</span>
                <span className="material-symbols-outlined font-icon">arrow_forward</span>
              </button>

            </form>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
