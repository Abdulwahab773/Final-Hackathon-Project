"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

const navigation = [
  { name: "Dashboard", href: "/dashboard/overview", icon: "dashboard" },
  { name: "Doctors", href: "/dashboard/doctors", icon: "stethoscope" },
  { name: "Receptionists", href: "/dashboard/receptionists", icon: "person_pin" },
  { name: "Patients", href: "/dashboard/patients", icon: "person" },
  { name: "Appointments", href: "/dashboard/appointments", icon: "calendar_today" },
];

export default function Sidebar({ isOpen, setIsOpen }) {
  const pathname = usePathname();
  const router = useRouter();

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-slate-900/50 z-40 lg:hidden backdrop-blur-sm transition-opacity"
          onClick={() => setIsOpen(false)}
        ></div>
      )}

      {/* Sidebar Container */}
      <aside className={`fixed inset-y-0 left-0 w-64 bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 flex flex-col shrink-0 z-50 transition-transform duration-300 transform lg:translate-x-0 lg:static ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
        <div className="p-6 flex items-center justify-between border-b border-slate-200 dark:border-slate-800">
          <div className="flex items-center gap-3">
            <div className="size-10 bg-primary rounded-lg flex items-center justify-center text-white shadow-lg shadow-primary/20">
              <span className="material-symbols-outlined text-2xl">medical_services</span>
            </div>
            <div>
              <h1 className="font-semibold text-lg leading-none tracking-tight">MediFlow</h1>
              <p className="text-[10px] text-slate-500 dark:text-slate-400 mt-1 uppercase tracking-wider font-semibold">Clinic Admin</p>
            </div>
          </div>
          <button 
            className="lg:hidden p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
            onClick={() => setIsOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto p-4 space-y-1 custom-scrollbar">
          {navigation.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.name}
                href={item.href}
                className={`flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 group ${
                  isActive 
                    ? "bg-primary text-white shadow-md shadow-primary/20" 
                    : "text-slate-600 dark:text-slate-400 hover:bg-primary/5 hover:text-primary"
                }`}
              >
                <span className={`material-symbols-outlined ${isActive ? "" : "group-hover:scale-110 transition-transform"}`}>
                  {item.icon}
                </span>
                <span className="font-semibold text-sm">{item.name}</span>
              </Link>
            );
          })}
        </nav>

        <div className="p-4 border-t border-slate-200 dark:border-slate-800 space-y-1">
          <button 
            className="w-full flex cursor-pointer items-center gap-3 px-3 py-2.5 text-red-500 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-lg transition-colors group"
            onClick={() => {
              localStorage.removeItem("token");
              router.push("/login");
            }}
          >
            <span className="material-symbols-outlined group-hover:-translate-x-1 transition-transform">logout</span>
            <span className="font-semibold text-sm">Sign Out</span>
          </button>
        </div>
      </aside>
    </>
  );
}
