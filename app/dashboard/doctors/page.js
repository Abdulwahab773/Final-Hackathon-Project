"use client";

import { useState } from "react";
import Link from "next/link";

const doctorsData = [
  {
    id: "DOC-2045",
    name: "Dr. Michael Chen",
    specialization: "Cardiologist",
    email: "m.chen@clinic.com",
    phone: "+1 (555) 012-3456",
    status: "Active",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuAjOQXQ6wYwF5OP6w9gGGJft-rhvHxZgZuMAbASj3kIn8Gu_a47xZWla7xorIvP-vexKCaKPz2S5lygCOCiyjvr1pBWhZG4Rson7fFz7fxwMyFFB1Y9xCqJbnM6TeY5M9a15bktYXBfz6w_NTeaKMtT6c64vsBD60JJzbDJhsvI1gSY1c45Nf9B5wkKXJDoyVHM0plm35IQT6Mza1rTvTtIFs1sqh1v9klSV6R3w9g0Ug_8XnsDEPeutEpCj-hbTvdR-RksR9UjSrY"
  },
  {
    id: "DOC-1892",
    name: "Dr. Sarah Williams",
    specialization: "Pediatrician",
    email: "s.williams@clinic.com",
    phone: "+1 (555) 789-0123",
    status: "Active",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuCJv2yPYVME__xsZ6K0jxg_EzFMUHTOOmQehSx4-W4FeFTzFv5pDdA6LEB9CovWUOzp3GhUMUxPvtEeEJgB3y7Sb41P82k_kyX02tD-NLjxhzKRB4NY1jRpQjtOhAMPxKfQ0bNPcTqpjMZcaoWxBFszgGS3JPKkmfowhIvqsiypVIMzn0Zp2iVnoD6nD1aqJvaSWMhGohdjCi7Md74m4jd_5xU8VV1HzFpl9taQ7BpAkPE11Y1wDKO-GalqBPTeicBOBckxLgF6_Ko"
  },
  {
    id: "DOC-2311",
    name: "Dr. James Wilson",
    specialization: "Neurologist",
    email: "j.wilson@clinic.com",
    phone: "+1 (555) 456-7890",
    status: "Inactive",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQKs9Oj5N5JYtlEFkEWn6EakKpnaSmnhMZFu_Z0Sz-F17M_HxsfxVPcPNUKTU1HCXGFiYA8x618LHCXKEvxf7CHZF4RVBDxeY9dMrDVr61VguT_jfL6v9HzlA14aWQZUqKU6p8a7FwPFiHa2ftGMS0TJ0ftTRG6SqlM9OOJDI6O81yavabiHuMRPEt_LG-wRq0T02EUiZYpJBhDo3J5PjiJAXD_18HHrCdniPbywBSnr5B8s3DX6UDa-7i-Q9dtRynuf-tXNaw_7o"
  },
  {
    id: "DOC-3012",
    name: "Dr. Elena Rodriguez",
    specialization: "Orthopedic",
    email: "e.rodriguez@clinic.com",
    phone: "+1 (555) 234-5678",
    status: "Active",
    avatar: "https://lh3.googleusercontent.com/aida-public/AB6AXuDNx_MPGDmF2z8sv3swQz78dwKBf27vkkkluhsKBtedNPtsR_GKBT6193wEmHRtZmMFpWuSc9jmbv3oJNWhe3fg3hCEQplSSZLc4t3EoEbwKpw5iPMgWawTAqRvLPpgzVk2qNST5nO1V6WvwW-aNddsXTWdTJnTigHZTPO6z4Hxb_F5jRFShH93tUGqlCPh-NXBsVI9zAL3dl1lzaX5I6tRaWe_sPboz877reQK4oJfWfh8Lmkj8gOKp_4AOYz8JI0ZmeCbRwjgeFs"
  }
];

export default function DoctorsPage() {
  const [searchTerm, setSearchTerm] = useState("");

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
              {doctorsData.map((doc) => (
                <tr key={doc.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <img className="size-11 rounded-full object-cover ring-2 ring-primary/10" src={doc.avatar} alt={doc.name} />
                        <span className={`absolute bottom-0 right-0 size-3 border-2 border-white dark:border-slate-900 rounded-full ${doc.status === 'Active' ? 'bg-emerald-500' : 'bg-slate-400'}`}></span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 dark:text-white">{doc.name}</p>
                        <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{doc.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium">
                    <span 
                      className={`px-3 py-1 rounded-full text-[11px] font-semibold uppercase tracking-wider border ${
                        doc.specialization === 'Cardiologist' ? 'bg-blue-50 text-blue-600 border-blue-100 dark:bg-blue-900/20 dark:border-blue-800' :
                        doc.specialization === 'Pediatrician' ? 'bg-purple-50 text-purple-600 border-purple-100 dark:bg-purple-900/20 dark:border-purple-800' :
                        doc.specialization === 'Neurologist' ? 'bg-amber-50 text-amber-600 border-amber-100 dark:bg-amber-900/20 dark:border-amber-800' :
                        'bg-rose-50 text-rose-600 border-rose-100 dark:bg-rose-900/20 dark:border-rose-800'
                      }`}
                    >
                      {doc.specialization}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="text-[13px]">
                      <p className="text-slate-700 dark:text-slate-300 font-semibold">{doc.email}</p>
                      <p className="text-slate-400 font-medium mt-0.5">{doc.phone}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <div className={`flex items-center gap-1.5 font-semibold text-[11px] uppercase tracking-wider ${doc.status === 'Active' ? 'text-emerald-600 dark:text-emerald-400' : 'text-slate-400'}`}>
                      <span className={`size-1.5 rounded-full ${doc.status === 'Active' ? 'bg-emerald-500 animate-pulse' : 'bg-slate-400'}`}></span>
                      {doc.status}
                    </div>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button className="p-2 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-400 hover:text-primary rounded-xl transition-all" title="Edit Profile">
                        <span className="material-symbols-outlined text-xl">edit</span>
                      </button>
                      <button className="p-2 hover:bg-red-50 dark:hover:bg-red-900/20 text-slate-400 hover:text-red-500 rounded-xl transition-all" title="Remove Doctor">
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
        <div className="px-6 py-5 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/30 dark:bg-slate-800/30">
          <p className="text-sm text-slate-500 font-medium">Showing <span className="font-semibold text-slate-900 dark:text-white">4</span> of <span className="font-semibold text-slate-900 dark:text-white">24</span> doctors</p>
          <div className="flex gap-2">
            <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors disabled:opacity-50 disabled:cursor-not-allowed">Previous</button>
            <button className="px-4 py-2 text-xs font-semibold uppercase tracking-wider bg-primary text-white rounded-xl hover:brightness-110 transition-all shadow-md shadow-primary/20">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
