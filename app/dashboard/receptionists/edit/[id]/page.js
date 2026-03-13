"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useGetReceptionistsQuery, useUpdateReceptionistMutation } from "@/services/receptionistApi";

export default function EditReceptionistPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const { data: receptionistResponse, isLoading: isFetching } = useGetReceptionistsQuery({ id });
  const [updateReceptionist, { isLoading: isUpdating }] = useUpdateReceptionistMutation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    shift: ""
  });

  // Pre-fill form when data arrives
  useEffect(() => {
    if (receptionistResponse?.data && receptionistResponse.data.length > 0) {
      const receptionist = receptionistResponse.data[0];
      setFormData({
        name: receptionist.name || "",
        email: receptionist.email || "",
        password: "", // Usually keep password blank in edit unless changing
        phoneNumber: receptionist.phoneNumber || "",
        shift: receptionist.shift || ""
      });
    }
  }, [receptionistResponse]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData };
      // Remove password from payload if it's empty to avoid unintentional overrides
      if (!payload.password) delete payload.password;

      const res = await updateReceptionist({ id, receptionist: payload }).unwrap();
      if (res.status) {
        alert("Receptionist records updated successfully!");
        router.push("/dashboard/receptionists");
      }
    } catch (err) {
      console.error("Failed to update receptionist:", err);
      alert(err.data?.message || "Something went wrong while updating the records.");
    }
  };

  if (isFetching) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary font-normal">progress_activity</span>
          <p className="font-medium text-slate-500 italic">Reading administrative records...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Breadcrumbs & Title */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2 font-medium">
          <Link href="/dashboard/receptionists" className="hover:text-primary transition-colors flex items-center gap-1">
            <span className="material-symbols-outlined text-sm font-normal">arrow_back</span>
            Receptionists
          </Link>
          <span className="material-symbols-outlined text-xs font-normal text-slate-300">chevron_right</span>
          <span className="text-primary font-semibold">Edit {formData.name || 'Account'}</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Edit Receptionist</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic">Update administrative details and shift assignments.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-3xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 lg:p-12 space-y-12">
          
          <div className="space-y-8">
            <div className="flex items-center gap-3 pb-4 border-b border-slate-100 dark:border-slate-800">
              <span className="material-symbols-outlined text-primary font-normal">manage_accounts</span>
              <h3 className="text-base font-semibold text-slate-900 dark:text-white uppercase tracking-wider">Account Settings</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="md:col-span-2 space-y-2">
                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="name">Full Name</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">badge</span>
                  <input 
                    className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm text-slate-900 dark:text-white" 
                    id="name" 
                    placeholder="e.g. Sarah Jenkins" 
                    type="text" 
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="email">Email Address</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">mail</span>
                  <input 
                    className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm text-slate-900 dark:text-white" 
                    id="email" 
                    placeholder="sarah.j@healthcare.com" 
                    type="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="password">Change Password</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">lock_reset</span>
                  <input 
                    className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm text-slate-900 dark:text-white" 
                    id="password" 
                    placeholder="Leave blank to keep current" 
                    type="password" 
                    value={formData.password}
                    onChange={handleChange}
                  />
                </div>
                <p className="text-[10px] text-slate-400 italic mt-1 font-medium pl-1">Only fill this if you want to reset their login credentials.</p>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="phoneNumber">Phone Number</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">call</span>
                  <input 
                    className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm text-slate-900 dark:text-white" 
                    id="phoneNumber" 
                    placeholder="+1 (555) 000-0000" 
                    type="tel" 
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="shift">Shift Timing</label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">schedule</span>
                  <select 
                    id="shift"
                    value={formData.shift}
                    onChange={handleChange}
                    className="w-full pl-12 pr-10 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-2xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm text-slate-900 dark:text-white appearance-none cursor-pointer"
                    required
                  >
                    <option value="" disabled>Select a shift</option>
                    <option value="morning">Morning (8:00 AM - 4:00 PM)</option>
                    <option value="evening">Evening (4:00 PM - 12:00 AM)</option>
                    <option value="night">Night (12:00 AM - 8:00 AM)</option>
                  </select>
                  <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none font-normal">expand_more</span>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-4 pt-10 border-t border-slate-100 dark:border-slate-800 bg-slate-50/30 dark:bg-slate-800/30 -mx-8 -mb-12 p-8 mt-12">
            <Link href="/dashboard/receptionists" className="px-8 py-3.5 text-[11px] font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-2xl transition-all uppercase tracking-widest">
              Discard Changes
            </Link>
            <button 
              className="px-10 py-3.5 bg-primary text-white font-semibold text-[11px] rounded-2xl shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all uppercase tracking-[0.2em] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" 
              type="submit"
              disabled={isUpdating}
            >
              <span className={`material-symbols-outlined text-lg font-normal ${isUpdating ? 'animate-spin' : ''}`}>
                {isUpdating ? 'progress_activity' : 'save'}
              </span>
              {isUpdating ? 'Saving...' : 'Update Records'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
