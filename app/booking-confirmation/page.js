"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function BookingConfirmationPage() {
  return (
    <div className="flex min-h-screen w-full flex-col font-display bg-background-light dark:bg-background-dark transition-colors duration-200">
      <Navbar />
      
      <main className="flex-1 flex flex-col items-center py-12 px-4 md:px-10">
        <div className="w-full max-w-[640px] flex flex-col gap-8">
          
          {/* Hero Success Section */}
          <div className="flex flex-col items-center text-center gap-4 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-green-500/10 text-green-500 shadow-sm border border-green-500/20">
              <span className="material-symbols-outlined !text-5xl font-icon-fill">check_circle</span>
            </div>
            <div className="space-y-2">
              <h1 className="text-3xl font-bold md:text-4xl text-slate-900 dark:text-white">Appointment Confirmed!</h1>
              <p className="text-slate-600 dark:text-slate-400">We've sent a confirmation email with all the details to your inbox.</p>
            </div>
          </div>

          {/* Status Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 animate-in fade-in slide-in-from-bottom-6 duration-700">
            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Booking ID</span>
              <span className="text-2xl font-black text-primary">#APT-98234</span>
            </div>
            <div className="flex flex-col gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 p-6 shadow-sm hover:shadow-md transition-shadow">
              <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">Status</span>
              <div className="flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.5)]"></span>
                </span>
                <span className="text-2xl font-black text-slate-900 dark:text-white">Pending</span>
              </div>
            </div>
          </div>

          {/* Appointment Details Card */}
          <div className="overflow-hidden rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 shadow-xl animate-in fade-in slide-in-from-bottom-8 duration-700">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/10">
              <h3 className="text-lg font-bold flex items-center gap-2">
                <span className="material-symbols-outlined text-primary font-icon">receipt_long</span>
                Appointment Details
              </h3>
            </div>
            <div className="p-8 space-y-8">
              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <span className="material-symbols-outlined font-icon">person</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Provider</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">Dr. Sarah Smith</span>
                  <span className="text-sm text-slate-500 font-medium">Senior Cardiologist</span>
                </div>
              </div>

              <div className="flex items-start gap-5">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary border border-primary/20">
                  <span className="material-symbols-outlined font-icon">calendar_today</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Date & Time</span>
                  <span className="text-lg font-bold text-slate-900 dark:text-white">Tuesday, Oct 24, 2023</span>
                  <span className="text-sm text-slate-500 font-medium">10:30 AM - 11:15 AM (45 min)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <Link 
              href="/"
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-4.5 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-primary/30 transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined font-icon">dashboard</span>
              Go to Dashboard
            </Link>
            <button 
              onClick={() => window.print()}
              className="flex-1 flex items-center justify-center gap-2 rounded-2xl border border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 py-4.5 text-sm font-bold text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-primary/30 transition-all shadow-sm active:scale-95"
            >
              <span className="material-symbols-outlined font-icon">print</span>
              Print Summary
            </button>
          </div>

          {/* Support Footer */}
          <div className="border-t border-slate-200 dark:border-slate-800 pt-8 text-center animate-in fade-in duration-1000">
            <p className="text-sm text-slate-500 dark:text-slate-400">
              Need to reschedule? You can manage your appointment in the <Link className="text-primary font-bold hover:underline" href="#">Patient Portal</Link> or call us at <span className="text-slate-900 dark:text-white font-bold">(555) 000-1234</span>
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
