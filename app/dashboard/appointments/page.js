"use client";

import Link from "next/link";

const appointmentData = [
  { id: 1, patient: "John Doe", doctor: "Dr. Sarah Smith", date: "Oct 25, 2023", time: "09:00 AM", status: "Scheduled", initials: "JD" },
  { id: 2, patient: "Jane Smith", doctor: "Dr. James Adams", date: "Oct 25, 2023", time: "10:30 AM", status: "Completed", initials: "JS" },
  { id: 3, patient: "Robert Brown", doctor: "Dr. Sarah Smith", date: "Oct 25, 2023", time: "01:00 PM", status: "Cancelled", initials: "RB" },
  { id: 4, patient: "Emily White", doctor: "Dr. Emily White", date: "Oct 26, 2023", time: "11:15 AM", status: "Scheduled", initials: "EW" },
];

export default function AppointmentsPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Page Header & Action */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Appointment Management</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic italic">Efficiently coordinate patient visits and doctor schedules.</p>
        </div>
        <button className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl text-sm font-semibold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all">
          <span className="material-symbols-outlined text-lg">add</span>
          Add Appointment
        </button>
      </div>

      {/* Filters & Controls */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col gap-6">
        <div className="flex flex-wrap gap-2">
          {["Today", "Tomorrow", "This Week"].map((filter, index) => (
            <button key={filter} className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
              index === 0 ? 'bg-primary text-white shadow-md' : 'bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-100'
            }`}>
              {filter}
            </button>
          ))}
          <div className="h-8 w-px bg-slate-100 dark:bg-slate-800 mx-2 hidden sm:block"></div>
          <button className="flex items-center gap-2 px-5 py-2 bg-slate-50 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl text-xs font-semibold hover:bg-slate-100 transition-all">
            <span className="material-symbols-outlined text-sm">calendar_today</span>
            Pick Date
          </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="space-y-1.5">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest pl-1">Filter by Doctor</label>
            <select className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer appearance-none">
              <option>All Doctors</option>
              <option>Dr. Sarah Smith</option>
              <option>Dr. James Adams</option>
            </select>
          </div>
          <div className="space-y-1.5">
            <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest pl-1">Status</label>
            <select className="w-full bg-slate-50/50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700 rounded-xl px-4 py-2.5 text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/10 transition-all cursor-pointer appearance-none">
              <option>All Statuses</option>
              <option>Scheduled</option>
              <option>Completed</option>
              <option>Cancelled</option>
            </select>
          </div>
        </div>
      </div>

      {/* Appointments Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-800">
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Patient Name</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Doctor Assigned</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Date & Time</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {appointmentData.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-slate-900 dark:text-white">{app.patient}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{app.doctor}</td>
                  <td className="px-6 py-4">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-slate-900 dark:text-slate-200">{app.date}</span>
                      <span className="text-[11px] text-slate-500 font-medium">{app.time}</span>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-wider border ${
                      app.status === 'Completed' ? 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20' :
                      app.status === 'Scheduled' ? 'bg-blue-50 text-blue-700 border-blue-100 dark:bg-blue-900/20' :
                      'bg-red-50 text-red-700 border-red-100 dark:bg-red-900/20'
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full mr-2 ${
                        app.status === 'Completed' ? 'bg-emerald-500' :
                        app.status === 'Scheduled' ? 'bg-blue-500 animate-pulse' :
                        'bg-red-500'
                      }`}></span>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <Link 
                      href={`/dashboard/appointments/APT-10245`}
                      className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/10 text-primary hover:bg-primary hover:text-white rounded-lg text-xs font-semibold transition-all"
                    >
                      <span className="material-symbols-outlined text-base">visibility</span>
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-5 bg-slate-50/30 dark:bg-slate-800/30 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
          <span className="text-xs font-semibold text-slate-500">Showing 1 to 4 of 24 appointments</span>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 disabled:opacity-50 transition-all" disabled>Previous</button>
            <button className="px-4 py-2 text-xs font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:bg-white dark:hover:bg-slate-800 transition-all">Next</button>
          </div>
        </div>
      </div>

      {/* Summary Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { label: "Today's Total", value: "18", icon: "event_available", color: "text-primary", bg: "bg-primary/5 dark:bg-primary/10" },
          { label: "Completed", value: "12", icon: "check_circle", color: "text-emerald-500", bg: "bg-emerald-50 dark:bg-emerald-900/10" },
          { label: "Pending", value: "6", icon: "update", color: "text-blue-500", bg: "bg-blue-50 dark:bg-blue-900/10" },
        ].map((stat) => (
          <div key={stat.label} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex items-center gap-4 hover:shadow-lg transition-all duration-300 group">
            <div className={`size-12 rounded-2xl flex items-center justify-center ${stat.bg} ${stat.color} transition-transform group-hover:scale-110`}>
              <span className="material-symbols-outlined text-2xl">{stat.icon}</span>
            </div>
            <div>
              <p className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest">{stat.label}</p>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white mt-1">{stat.value}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
