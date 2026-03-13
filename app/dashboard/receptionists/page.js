"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useGetReceptionistsQuery, useDeleteReceptionistMutation, useUpdateReceptionistMutation } from "@/services/receptionistApi";

export default function ReceptionistsPage() {
  const router = useRouter();
  
  const { data: receptionistResponse, isLoading, error } = useGetReceptionistsQuery();
  const [deleteReceptionist, { isLoading: isDeleting }] = useDeleteReceptionistMutation();
  const [updateReceptionist] = useUpdateReceptionistMutation();

  const receptionists = receptionistResponse?.data || [];

  const handleStatusToggle = async (id, currentStatus) => {
    try {
      await updateReceptionist({
        id,
        receptionist: { isActive: !currentStatus }
      }).unwrap();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };


  const handleDelete = async (id, name) => {
    if (window.confirm(`Are you sure you want to remove ${name} from the administrative staff?`)) {
      try {
        await deleteReceptionist(id).unwrap();
        alert("Receptionist removed successfully.");
      } catch (err) {
        console.error("Failed to delete receptionist:", err);
        alert(err.data?.message || "Failed to delete the receptionist.");
      }
    }
  };

  const getInitials = (name) => {
    return name
      ? name
          .split(" ")
          .map((n) => n[0])
          .join("")
          .toUpperCase()
          .slice(0, 2)
      : "RE";
  };



  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary font-normal">progress_activity</span>
          <p className="font-medium text-slate-500 italic">Accessing staff directory...</p>
        </div>
      </div>
    );
  }


  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Receptionists</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic">Manage and monitor the clinic's front-desk staff.</p>
        </div>
        <div className="flex gap-3">
          <Link href="/dashboard/receptionists/add" className="flex cursor-pointer items-center gap-2 px-6 py-3 text-xs font-semibold text-white bg-primary rounded-xl hover:brightness-110 transition-all shadow-lg shadow-primary/20">
            <span className="material-symbols-outlined text-lg font-normal">add</span>
            Add New Receptionist
          </Link>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Receptionist Name</th>
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Email Address</th>
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Phone Number</th>
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Shift</th>
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Status</th>
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {receptionists.length > 0 ? (
                receptionists.map((staff) => (
                  <tr key={staff._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-bold text-xs">
                          {getInitials(staff.name)}
                        </div>
                        <span className="text-sm font-semibold text-slate-900 dark:text-white">{staff.name}</span>
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 font-medium">{staff.email}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 font-medium">{staff.phoneNumber || "N/A"}</td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-slate-100 text-slate-600 dark:bg-slate-800 dark:text-slate-400 border border-slate-200 dark:border-slate-700">
                        {staff.shift}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${
                        staff.isActive !== false 
                          ? 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400' 
                          : 'bg-slate-50 text-slate-600 border-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400'
                      }`}>
                        <span className={`size-1.5 rounded-full ${staff.isActive !== false ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
                        {staff.isActive !== false ? 'Active' : 'Inactive'}
                      </span>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                      <div className="flex items-center justify-end gap-2">
                        <button 
                          onClick={() => handleStatusToggle(staff._id || staff.id, staff.isActive !== false)}
                          className={`p-2 rounded-xl transition-all ${
                            staff.isActive !== false
                              ? 'text-amber-600 hover:bg-amber-50 dark:hover:bg-amber-900/20'
                              : 'text-emerald-600 hover:bg-emerald-50 dark:hover:bg-emerald-900/20'
                          }`}
                          title={staff.isActive !== false ? "Deactivate Account" : "Activate Account"}
                        >
                          <span className="material-symbols-outlined text-xl font-normal">
                            {staff.isActive !== false ? 'do_not_disturb_on' : 'check_circle'}
                          </span>
                        </button>
                        <button 
                          onClick={() => router.push(`/dashboard/receptionists/edit/${staff._id || staff.id}`)}
                          className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all" 
                          title="Edit Profile"
                        >
                          <span className="material-symbols-outlined text-xl font-normal">edit</span>
                        </button>
                        <button 
                          onClick={() => handleDelete(staff._id || staff.id, staff.name)}
                          className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all" 
                          title="Remove User"
                        >
                          <span className="material-symbols-outlined text-xl font-normal">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-6 py-12 text-center">
                    <div className="flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined text-4xl text-slate-300 font-light">group_off</span>
                      <p className="text-slate-400 font-medium italic">No receptionists found in the directory.</p>
                      <Link href="/dashboard/receptionists/add" className="text-primary text-xs font-bold uppercase tracking-widest mt-2 hover:underline">Register first staff</Link>
                    </div>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
        
        {/* Pagination Placeholder */}
        <div className="px-6 py-5 bg-slate-50/30 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">
            {receptionists.length > 0 ? `Showing all ${receptionists.length} administrative staff members` : 'Registry currently empty'}
          </span>
          <div className="flex items-center gap-2">
            <button className="size-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 opacity-50 cursor-not-allowed">
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button className="size-9 flex items-center justify-center rounded-xl bg-primary text-white font-bold text-xs shadow-md shadow-primary/20">1</button>
            <button className="size-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 opacity-50 cursor-not-allowed">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
