"use client";

import { useState } from "react";

const receptionistData = [
  { id: "RE-101", name: "Sarah Jenkins", email: "sarah.j@clinic.com", phone: "(555) 123-4567", status: "Active", initials: "SJ" },
  { id: "RE-102", name: "Mark Thompson", email: "m.thompson@clinic.com", phone: "(555) 987-6543", status: "Active", initials: "MT" },
  { id: "RE-103", name: "Elena Rodriguez", email: "elena.r@clinic.com", phone: "(555) 456-7890", status: "Active", initials: "ER" },
  { id: "RE-104", name: "David Chen", email: "d.chen@clinic.com", phone: "(555) 222-3333", status: "Inactive", initials: "DC" },
];

export default function ReceptionistsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Receptionists</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic">Manage and monitor the clinic's front-desk staff.</p>
        </div>
        <div className="flex gap-3">
          <button className="flex cursor-pointer items-center gap-2 px-4 py-2.5 text-xs font-semibold text-white dark:text-slate-400 bg-primary dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 hover:text-primary transition-all shadow-sm">
            <span className="material-symbols-outlined text-lg">add</span>
            Add New Receptionist
          </button>
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
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500">Status</th>
                <th className="px-6 py-4 text-[10px] font-semibold uppercase tracking-widest text-slate-500 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {receptionistData.map((staff) => (
                <tr key={staff.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className="size-9 rounded-full bg-primary/10 text-primary flex items-center justify-center font-semibold text-sm">
                        {staff.initials}
                      </div>
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{staff.name}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 font-medium">{staff.email}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 font-medium">{staff.phone}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${
                      staff.status === 'Active' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400' 
                        : 'bg-slate-50 text-slate-600 border-slate-100 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-400'
                    }`}>
                      <span className={`size-1.5 rounded-full ${staff.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
                      {staff.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 text-slate-400 hover:text-primary hover:bg-primary/5 rounded-xl transition-all" title="Edit Profile">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button className="p-2 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all" title="Remove User">
                        <span className="material-symbols-outlined text-xl">delete</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-5 bg-slate-50/30 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500 dark:text-slate-400">Showing 1 to 4 of 24 results</span>
          <div className="flex items-center gap-2">
            <button className="size-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 disabled:opacity-50 transition-colors" disabled>
              <span className="material-symbols-outlined text-lg">chevron_left</span>
            </button>
            <button className="size-9 flex items-center justify-center rounded-xl bg-slate-900 dark:bg-white dark:text-slate-900 text-white font-semibold text-xs shadow-md">1</button>
            <button className="size-9 flex items-center justify-center rounded-xl border border-transparent text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800 font-semibold text-xs transition-all">2</button>
            <button className="size-9 flex items-center justify-center rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
              <span className="material-symbols-outlined text-lg">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-lg transition-all duration-300">
          <div className="size-12 rounded-2xl bg-blue-50 dark:bg-blue-900/20 text-blue-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">group</span>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Total Staff</p>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white">24</h4>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-lg transition-all duration-300">
          <div className="size-12 rounded-2xl bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">how_to_reg</span>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">Active Now</p>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white">18</h4>
          </div>
        </div>
        <div className="p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-lg transition-all duration-300">
          <div className="size-12 rounded-2xl bg-purple-50 dark:bg-purple-900/20 text-purple-600 flex items-center justify-center">
            <span className="material-symbols-outlined text-2xl">pending_actions</span>
          </div>
          <div>
            <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">On Leave</p>
            <h4 className="text-2xl font-black text-slate-900 dark:text-white">6</h4>
          </div>
        </div>
      </div>
    </div>
  );
}
