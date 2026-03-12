"use client";

import Link from "next/link";
import { useState } from "react";

export default function AppointmentDetailsPage({ params }) {
  const [status, setStatus] = useState("scheduled");

  return (
    <div className="  max-w-6xl mx-auto w-full animate-in fade-in duration-700">
      {/* Breadcrumb & Header Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4 mb-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
          <Link href="/dashboard" className="hover:text-primary transition-colors font-medium">Home</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <Link href="/dashboard/appointments" className="hover:text-primary transition-colors font-medium">Appointments</Link>
          <span className="material-symbols-outlined text-xs">chevron_right</span>
          <span className="text-primary font-semibold">APT-10245</span>
        </div>
        <div className="flex gap-3">
          <button className="flex items-center gap-2 px-5 py-2.5 border border-primary/20 text-primary text-xs font-semibold rounded-xl hover:bg-primary/5 transition-all">
            <span className="material-symbols-outlined text-lg">print</span> Print Receipt
          </button>
          <button className="px-6 py-2.5 bg-primary text-white text-xs font-semibold rounded-xl hover:bg-primary/90 shadow-lg shadow-primary/20 transition-all active:scale-95">
            Save Changes
          </button>
        </div>
      </div>

      {/* Header Banner - Cleanly aligned without image section */}
      <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-2xl p-8 mb-10 shadow-sm">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left space-y-3">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4">
              <h1 className="text-4xl font-semibold text-slate-900 dark:text-white tracking-tight">John Doe</h1>
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full text-[10px] font-semibold uppercase tracking-widest">Regular Patient</span>
            </div>
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 text-slate-500 dark:text-slate-400 font-medium text-sm">
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">cake</span> 32 Years</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">male</span> Male</span>
              <span className="flex items-center gap-2"><span className="material-symbols-outlined text-primary text-base">bloodtype</span> O+</span>
            </div>
          </div>
          <div className="flex flex-col gap-2 w-full md:w-auto">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest pl-1">Appointment Status</label>
            <div className="relative">
              <select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className="w-full md:w-56 appearance-none bg-slate-50 dark:bg-slate-800 border-2 border-slate-100 dark:border-slate-700 text-slate-900 dark:text-white text-xs font-semibold py-3.5 px-6 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none cursor-pointer tracking-wider uppercase transition-all"
              >
                <option value="scheduled">Scheduled</option>
                <option value="completed">Completed</option>
                <option value="cancelled">Cancelled</option>
              </select>
              <span className="material-symbols-outlined absolute right-5 top-1/2 -translate-y-1/2 text-primary pointer-events-none">expand_more</span>
            </div>
          </div>
        </div>
      </div>

      {/* Details Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mb-12">
        {/* Left Column: Info Cards */}
        <div className="lg:col-span-2 space-y-10">
          <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-3 uppercase tracking-wider">
              <span className="material-symbols-outlined text-primary">info</span> Visit Information
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
              <div className="space-y-4">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Assigned Doctor</p>
                <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">person</span>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">Dr. Sarah Smith</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Contact Details</p>
                <div className="flex items-center gap-4 p-3 bg-slate-50 dark:bg-slate-800/50 rounded-2xl">
                  <div className="h-10 w-10 rounded-xl bg-primary/10 flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">call</span>
                  </div>
                  <p className="text-slate-900 dark:text-slate-100 font-semibold">+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Appointment Date</p>
                <div className="flex items-center gap-3 px-1 text-slate-900 dark:text-slate-100 font-semibold">
                  <span className="material-symbols-outlined text-primary text-xl font-normal">event</span> Oct 25, 2023
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Time Slot</p>
                <div className="flex items-center gap-3 px-1 text-slate-900 dark:text-slate-100 font-semibold">
                  <span className="material-symbols-outlined text-primary text-xl font-normal">schedule</span> 10:30 AM
                </div>
              </div>
              <div className="space-y-4">
                <p className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest">Visit Type</p>
                <span className="inline-block px-4 py-2 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 rounded-xl text-xs font-semibold uppercase tracking-wider">General Check-up</span>
              </div>
            </div>
          </div>

          <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-8 flex items-center gap-3 uppercase tracking-wider">
              <span className="material-symbols-outlined text-primary">description</span> Symptoms & Notes
            </h3>
            <div className="space-y-8">
              <div className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border-l-4 border-primary">
                <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest mb-3">Patient Reported Symptoms</p>
                <p className="text-sm text-slate-700 dark:text-slate-300 font-medium leading-relaxed italic">
                  "Patient reports persistent mild headache for the last 3 days, accompanied by slight dizziness in the mornings. No history of recent injury or travel."
                </p>
              </div>
              <div className="space-y-3">
                <label className="text-[11px] font-semibold text-slate-400 uppercase tracking-widest pl-1">Doctor's Internal Remarks</label>
                <textarea
                  className="w-full h-40 p-5 bg-slate-50/50 dark:bg-slate-800/30 border-2 border-slate-100 dark:border-slate-700 rounded-2xl text-sm font-medium focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all resize-none"
                  placeholder="Add internal medical notes here..."
                ></textarea>
              </div>
            </div>
          </div>

          <div className="flex justify-end">
            <button className="flex items-center gap-2 px-6 py-3 border-2 border-red-100 text-red-500 text-xs font-semibold uppercase tracking-widest rounded-xl hover:bg-red-50 transition-all active:scale-95">
              <span className="material-symbols-outlined text-lg">cancel</span> Cancel Appointment
            </button>
          </div>
        </div>

        {/* Right Column: Timeline/Log & Billing */}
        <div className="space-y-10">
          <div className="bg-white dark:bg-slate-900 border border-primary/10 rounded-2xl p-8 shadow-sm">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white mb-10 flex items-center gap-3 uppercase tracking-wider">
              <span className="material-symbols-outlined text-primary">history</span> Activity Log
            </h3>
            <div className="relative space-y-12 before:content-[''] before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-[2px] before:bg-slate-100 dark:before:bg-slate-800">
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-primary/20 flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-sm z-10">
                  <div className="h-2 w-2 rounded-full bg-primary"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-tight">Status Update</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">Status changed from 'Scheduled' to 'Waiting'</p>
                  <p className="text-[10px] font-semibold text-primary mt-3 uppercase tracking-widest bg-primary/10 w-fit px-3 py-1 rounded-lg">Today, 10:25 AM</p>
                </div>
              </div>
              <div className="relative pl-12">
                <div className="absolute left-0 top-1.5 h-6 w-6 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-4 border-white dark:border-slate-800 shadow-sm z-10">
                  <div className="h-2 w-2 rounded-full bg-slate-400"></div>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-900 dark:text-white uppercase tracking-tight">SMS Sent</p>
                  <p className="text-[11px] text-slate-500 font-medium mt-1">Appointment reminder sent to patient</p>
                  <p className="text-[10px] font-semibold text-slate-400 mt-3 uppercase tracking-widest">Oct 24, 02:15 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-primary/5 dark:bg-primary/5 rounded-2xl p-8 border border-primary/10 shadow-sm">
            <div className="flex items-center gap-3 mb-8">
              <span className="material-symbols-outlined text-primary">payments</span>
              <h4 className="text-xs font-semibold text-primary uppercase tracking-[0.2em]">Billing Summary</h4>
            </div>
            <div className="space-y-6">
              <div className="flex justify-between text-sm font-medium">
                <span className="text-slate-500">Consultation Fee</span>
                <span className="text-slate-900 dark:text-white font-semibold">$85.00</span>
              </div>
              <div className="pt-6 border-t border-primary/10 flex justify-between items-end">
                <p className="font-semibold text-[10px] text-slate-500 uppercase tracking-widest">Total Payable</p>
                <p className="text-4xl font-semibold text-primary">$85.00</p>
              </div>
              <div className="mt-8 flex items-center gap-2 text-[10px] font-semibold text-green-600 bg-green-50 dark:bg-green-900/20 px-4 py-2 rounded-full w-fit uppercase tracking-widest border border-green-100">
                <span className="material-symbols-outlined text-sm font-normal">check_circle</span> Payment Verified
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
