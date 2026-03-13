"use client";

import { useState } from "react";
import Link from "next/link";
import { useGetDoctorsQuery } from "@/services/doctorApi";
import { useRouter } from "next/navigation";



export default function DoctorsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const {data : doctorsResponse , isLoading, error} = useGetDoctorsQuery();
  const doctorsList = doctorsResponse?.data || [];

  
  return (
    <div className="space-y-6">
      {/* Page Summary & Actions */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Medical Staff Directory</h2>
          <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Add, update and manage clinic's healthcare professionals.</p>
        </div>
        <Link href="/dashboard/doctors/add" className="flex items-center gap-2 bg-primary hover:brightness-110 text-white px-5 py-3 rounded-xl font-semibold transition-all shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95">
          <span className="material-symbols-outlined text-xl">add</span>
          <span>Add New Doctor</span>
        </Link>
      </div>

      {/* Filters Section */}
      <div className="bg-white dark:bg-slate-900 p-4 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-4 items-center">
        <div className="relative flex-1 w-full">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 font-icon text-xl">search</span>
          <input 
            className="w-full pl-10 pr-4 py-2.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:ring-4 focus:ring-primary/10 transition-all outline-none text-slate-900 dark:text-white" 
            placeholder="Search by name, email or ID..." 
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <select className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-sm rounded-xl py-2.5 pl-3 pr-8 focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer min-w-[140px] appearance-none outline-none font-semibold">
            <option value="">All Specializations</option>
            <option value="cardiology">Cardiology</option>
            <option value="pediatrics">Pediatrics</option>
            <option value="neurology">Neurology</option>
          </select>
          <select className="bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 text-sm rounded-xl py-2.5 pl-3 pr-8 focus:ring-4 focus:ring-primary/10 transition-all cursor-pointer min-w-[120px] appearance-none outline-none font-semibold">
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
          <button className="flex items-center justify-center p-2.5 bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 rounded-xl hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors">
            <span className="material-symbols-outlined">tune</span>
          </button>
        </div>
      </div>

      {/* Doctors Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm overflow-hidden">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left">
            <thead className="bg-slate-50/50 dark:bg-slate-800/50 border-b border-slate-200 dark:border-slate-800">
              <tr>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Doctor Name</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Specialization</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Contact Info</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest">Status</th>
                <th className="px-6 py-4 text-[10px] font-semibold text-slate-500 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {isLoading ? (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-slate-500">
                    <div className="flex flex-col items-center gap-2">
                      <span className="material-symbols-outlined animate-spin text-3xl text-primary">progress_activity</span>
                      <p className="font-medium">Loading medical staff...</p>
                    </div>
                  </td>
                </tr>
              ) : doctorsList.length === 0 ? (
                <tr>
                  <td colSpan="5" className="px-6 py-10 text-center text-slate-500">
                    <p className="font-medium">No doctors found in the directory.</p>
                  </td>
                </tr>
              ) : doctorsList.map((doc) => (
                <tr key={doc._id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <div className="size-11 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm ring-2 ring-primary/5">
                          {doc.name.split(' ').map(n => n[0]).join('').toUpperCase()}
                        </div>
                        <span className={`absolute bottom-0 right-0 size-3 border-2 border-white dark:border-slate-900 rounded-full ${doc.isActive ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{doc.name}</p>
                        <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{doc._id.slice(-8).toUpperCase()}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <span 
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${
                        doc.specialization?.toLowerCase().includes('cardio') ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800' :
                        doc.specialization?.toLowerCase().includes('pediatr') ? 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:border-purple-800' :
                        doc.specialization?.toLowerCase().includes('neuro') ? 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800' :
                        'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-900/20 dark:border-rose-800'
                      }`}
                    >
                      {doc.specialization || 'General'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[13px]">
                      <p className="text-slate-700 dark:text-slate-300 font-semibold">{doc.email}</p>
                      <p className="text-slate-400 font-medium mt-0.5">{doc.experience > 0 ? `${doc.experience} Years Exp.` : 'New Physician'}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-1.5 font-semibold text-[11px] uppercase tracking-wider ${doc.isActive ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                      <span className={`size-1.5 rounded-full ${doc.isActive ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
                      {doc.isActive ? 'Active' : 'Inactive'}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end">
                      <button onClick={() => router.push(`/dashboard/doctors/${doc._id}`)} className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-primary rounded-xl" title="Edit Profile">
                        <span className="material-symbols-outlined text-xl">visibility</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* Pagination */}
        <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/30 dark:bg-slate-800/30">
          <p className="text-sm text-slate-500 font-medium">Showing <span className="font-semibold text-slate-900 dark:text-white">{doctorsList.length}</span> of <span className="font-semibold text-slate-900 dark:text-white">{doctorsList.length}</span> doctors</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
            <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-primary text-white rounded-xl hover:brightness-110 transition-all shadow-md shadow-primary/20">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
