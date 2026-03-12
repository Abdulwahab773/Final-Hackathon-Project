"use client";

import { useState } from "react";

const patientData = [
  { id: "PT-8821", name: "Johnathan Doe", email: "j.doe@example.com", gender: "Male", age: 45, lastVisit: "Oct 12, 2023", status: "Stable", initials: "JD" },
  { id: "PT-8822", name: "Jane Smith", email: "jane.s@example.com", gender: "Female", age: 32, lastVisit: "Oct 14, 2023", status: "Critical", initials: "JS" },
  { id: "PT-8823", name: "Robert Brown", email: "r.brown@example.com", gender: "Male", age: 28, lastVisit: "Oct 10, 2023", status: "Recovering", initials: "RB" },
  { id: "PT-8824", name: "Emily White", email: "e.white@example.com", gender: "Female", age: 60, lastVisit: "Oct 15, 2023", status: "Stable", initials: "EW" },
];

export default function PatientsPage() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">All Patients</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic">Manage and monitor 1,248 total patient records.</p>
        </div>
        <div className="flex items-center gap-2">
          <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined text-sm">filter_list</span>
            Filter
          </button>
          <button className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 px-4 py-2.5 rounded-xl text-xs font-semibold flex items-center gap-2 text-slate-700 dark:text-slate-300 hover:bg-slate-50 transition-all">
            <span className="material-symbols-outlined text-sm">download</span>
            Export CSV
          </button>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
        <button className="px-5 py-2 bg-primary/10 text-primary border border-primary/20 rounded-full text-xs font-semibold whitespace-nowrap">All Patients</button>
        {["Stable", "Critical", "Recovering", "Discharged"].map((tab) => (
          <button key={tab} className="px-5 py-2 bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-400 border border-slate-200 dark:border-slate-800 rounded-full text-xs font-semibold whitespace-nowrap hover:bg-slate-50 transition-all">
            {tab}
          </button>
        ))}
      </div>

      {/* Patients Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50">
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Patient Name</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Patient ID</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Gender/Age</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Last Visit</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {patientData.map((patient) => (
                <tr key={patient.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center gap-3">
                      <div className={`size-9 rounded-full flex items-center justify-center font-semibold text-sm ${
                        patient.status === 'Critical' ? 'bg-red-50 text-red-600' : 'bg-primary/10 text-primary'
                      }`}>
                        {patient.initials}
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{patient.name}</p>
                        <p className="text-[11px] text-slate-500 font-medium">{patient.email}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 font-medium">{patient.id}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 font-medium">{patient.gender}, {patient.age}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-slate-600 dark:text-slate-400 font-medium">{patient.lastVisit}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${
                      patient.status === 'Stable' ? 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400' :
                      patient.status === 'Critical' ? 'bg-red-50 text-red-700 border-red-100 dark:bg-red-900/20 dark:border-red-800 dark:text-red-400' :
                      'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800 dark:text-blue-400'
                    }`}>
                      {patient.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm">
                    <div className="flex items-center justify-end gap-3">
                      <button className="text-primary hover:text-primary/80 font-semibold transition-colors">View History</button>
                      <button className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors">
                        <span className="material-symbols-outlined text-lg">edit</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/30 dark:bg-slate-800/30">
          <p className="text-xs font-semibold text-slate-500">Showing 1 to 10 of 1,248 patients</p>
          <div className="flex items-center gap-2">
            <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-white dark:hover:bg-slate-800 text-slate-400 disabled:opacity-50 transition-all" disabled>
              <span className="material-symbols-outlined">chevron_left</span>
            </button>
            <button className="size-9 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-xl text-xs font-semibold shadow-md">1</button>
            <button className="size-9 hover:bg-white dark:hover:bg-slate-800 rounded-xl text-xs font-semibold border border-transparent hover:border-slate-200 transition-all">2</button>
            <button className="size-9 hover:bg-white dark:hover:bg-slate-800 rounded-xl text-xs font-semibold border border-transparent hover:border-slate-200 transition-all">3</button>
            <span className="px-2 text-slate-400 text-xs">...</span>
            <button className="size-9 hover:bg-white dark:hover:bg-slate-800 rounded-xl text-xs font-semibold border border-transparent hover:border-slate-200 transition-all">125</button>
            <button className="p-2 border border-slate-200 dark:border-slate-800 rounded-xl hover:bg-white dark:hover:bg-slate-800 text-slate-400 transition-all">
              <span className="material-symbols-outlined">chevron_right</span>
            </button>
          </div>
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Stable Patients", value: "842", icon: "check_circle", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/20" },
          { label: "Critical Cases", value: "12", icon: "warning", color: "text-red-500", bg: "bg-red-50 dark:bg-red-900/20" },
          { label: "In Recovery", value: "394", icon: "healing", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/20" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 flex items-center gap-4 hover:shadow-lg transition-all duration-300 group">
            <div className={`size-12 ${stat.bg} ${stat.color} rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110`}>
              <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h4 className="text-2xl font-black text-slate-900 dark:text-white mt-1">{stat.value}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
