"use client";

import Link from "next/link";
import { useState } from "react";

export default function AddDoctorPage() {
  const [availability, setAvailability] = useState([
    { day: "Monday", startTime: "09:00", endTime: "17:00" }
  ]);

  const addDay = () => {
    setAvailability([...availability, { day: "Monday", startTime: "09:00", endTime: "17:00" }]);
  };

  const removeDay = (index) => {
    setAvailability(availability.filter((_, i) => i !== index));
  };

  const updateDay = (index, field, value) => {
    const updated = [...availability];
    updated[index][field] = value;
    setAvailability(updated);
  };

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Breadcrumbs & Title */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2 font-medium">
          <Link href="/dashboard/doctors" className="hover:text-primary transition-colors">Doctors</Link>
          <span className="material-symbols-outlined text-xs font-normal">chevron_right</span>
          <span className="text-primary font-semibold">Add New Doctor</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Register New Doctor</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic">Provide the professional details and schedule for the medical practitioner.</p>
      </div>

      {/* Form Container */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <form className="p-8 lg:p-10 space-y-12">
          
          {/* Profile Photo Section */}
          <div className="flex flex-col md:flex-row items-center gap-10">
            <div className="relative group">
              <div className="w-32 h-32 rounded-3xl bg-slate-50 dark:bg-slate-800 border-2 border-dashed border-slate-200 dark:border-slate-700 flex items-center justify-center overflow-hidden transition-all group-hover:border-primary/50">
                <span className="material-symbols-outlined text-4xl text-slate-300 group-hover:text-primary transition-colors">person_add</span>
              </div>
              <button className="absolute -bottom-2 -right-2 bg-primary text-white p-2.5 rounded-xl shadow-lg hover:brightness-110 active:scale-90 transition-all font-normal" type="button">
                <span className="material-symbols-outlined text-sm">photo_camera</span>
              </button>
            </div>
            <div className="flex-1 text-center md:text-left space-y-2">
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Doctor's Profile Photo</h3>
              <p className="text-slate-500 dark:text-slate-400 text-sm font-medium">JPG, PNG or WebP (Max 2MB). Recommended: 400x400px.</p>
              <button className="mt-2 px-5 py-2 bg-primary/10 text-primary font-semibold text-[10px] rounded-xl hover:bg-primary hover:text-white transition-all uppercase tracking-widest" type="button">
                Select from Files
              </button>
            </div>
          </div>

          {/* Basic Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="fullname">Full Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">person</span>
                <input className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" id="fullname" placeholder="e.g. Dr. Jane Smith" type="text" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="specialization">Specialization</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">stethoscope</span>
                <select className="w-full pl-12 pr-10 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm appearance-none cursor-pointer" id="specialization">
                  <option disabled selected value="">Select a specialty</option>
                  <option value="cardiology">Cardiology</option>
                  <option value="dermatology">Dermatology</option>
                  <option value="pediatrics">Pediatrics</option>
                  <option value="neurology">Neurology</option>
                  <option value="general">General Medicine</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none font-normal">expand_more</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">mail</span>
                <input className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" id="email" placeholder="jane.smith@clinic.com" type="email" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="phone">Phone Number</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">call</span>
                <input className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" id="phone" placeholder="+1 (555) 000-0000" type="tel" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="fee">Consultation Fee ($)</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">payments</span>
                <input className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" id="fee" placeholder="0.00" type="number" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="experience">Years of Experience</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">history_edu</span>
                <input className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" id="experience" placeholder="e.g. 10" type="number" />
              </div>
            </div>
          </div>

          {/* Availability Schedule */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-semibold flex items-center gap-3 text-slate-900 dark:text-white uppercase tracking-wider">
                <span className="material-symbols-outlined text-primary font-normal">calendar_month</span>
                Weekly Availability
              </h3>
              <button 
                type="button"
                onClick={addDay}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold text-[10px] rounded-xl hover:bg-primary hover:text-white transition-all uppercase tracking-widest"
              >
                <span className="material-symbols-outlined text-sm font-normal">add_circle</span>
                Add Day
              </button>
            </div>

            <div className="space-y-4">
              {availability.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-end gap-6 p-6 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 animate-in slide-in-from-right-2 duration-300">
                  <div className="w-full md:w-1/3 space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Select Day</label>
                    <div className="relative">
                      <select 
                        value={item.day}
                        onChange={(e) => updateDay(index, "day", e.target.value)}
                        className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                      >
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none font-normal">expand_more</span>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">{item.day.toLowerCase()} start:</label>
                      <input 
                        type="time" 
                        value={item.startTime}
                        onChange={(e) => updateDay(index, "startTime", e.target.value)}
                        className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">end:</label>
                      <input 
                        type="time" 
                        value={item.endTime}
                        onChange={(e) => updateDay(index, "endTime", e.target.value)}
                        className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <button 
                    type="button"
                    onClick={() => removeDay(index)}
                    className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all rounded-xl border border-transparent hover:border-red-100 disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={availability.length === 1}
                  >
                    <span className="material-symbols-outlined font-normal">delete</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-4 pt-10 border-t border-slate-100 dark:border-slate-800">
            <Link href="/dashboard/doctors" className="px-8 py-3.5 text-[10px] font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all uppercase tracking-widest">
              Discard Changes
            </Link>
            <button className="px-10 py-3.5 bg-primary text-white font-semibold text-[10px] rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all uppercase tracking-[0.2em] flex items-center gap-2" type="submit">
              <span className="material-symbols-outlined text-lg font-normal">save</span>
              Save Doctor
            </button>
          </div>
        </form>
      </div>

      {/* Guidelines Card */}
      <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10 flex items-start gap-4">
        <div className="p-2 bg-primary/10 rounded-xl">
          <span className="material-symbols-outlined text-primary text-2xl font-light">info</span>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-primary uppercase tracking-widest">Registration Guidelines</h4>
          <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 leading-relaxed font-medium">
            Ensure that the professional credentials provided match the official medical registry. Registered doctors will receive an automated invitation email to set up their clinical portal password once the profile is saved.
          </p>
        </div>
      </div>
    </div>
  );
}
