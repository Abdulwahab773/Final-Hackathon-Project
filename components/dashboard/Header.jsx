"use client";

import Image from "next/image";

export default function DashboardHeader({ setIsSidebarOpen }) {
  return (
    <header className="h-16 bg-white dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between px-4 lg:px-8 shrink-0 sticky top-0 z-30">
      <div className="flex items-center gap-4">
        <button 
          className="lg:hidden p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
          onClick={() => setIsSidebarOpen(true)}
        >
          <span className="material-symbols-outlined">menu</span>
        </button>
        <div className="hidden md:flex items-center gap-2">
          <span className="text-slate-500 dark:text-slate-400 text-sm font-medium">Management</span>
          <span className="text-slate-300 dark:text-slate-600">/</span>
          <span className="font-semibold text-slate-900 dark:text-slate-100 text-sm">Overview</span>
        </div>
      </div>

      <div className="flex items-center gap-2 lg:gap-4">
        {/* Search - Visible on larger screens */}
        <div className="hidden sm:block relative mr-2">
          <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xl font-icon">search</span>
          <input 
            type="text" 
            placeholder="Search..." 
            className="pl-10 pr-4 py-2 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg text-sm focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all w-48 lg:w-64"
          />
        </div>

        <button className="relative p-2 text-slate-500 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors group">
          <span className="material-symbols-outlined group-hover:shake">notifications</span>
          <span className="absolute top-2.5 right-2.5 size-2 bg-red-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
        </button>

        <div className="flex items-center gap-3 ml-2 pl-4 border-l border-slate-200 dark:border-slate-700">
          <div className="hidden lg:text-right lg:block">
            <p className="text-sm font-semibold leading-none text-slate-900 dark:text-white">Sarah Jenkins</p>
            <p className="text-[10px] uppercase font-semibold text-slate-500 dark:text-slate-400 mt-1">Administrator</p>
          </div>
          <div className="relative size-10 flex-shrink-0">
            <img 
              className="size-full rounded-full object-cover ring-2 ring-primary/10" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuC111060_OW-ysTbn7GbkJWCoGuNRuCcr6fSifAdc0l63fqeO0g3HHgjfPGmMbPnNgUUVe6cZcGLy02GOAGFUtDrS9vjH7O8c4uHU2FRYsboXqtHnK5gOGzIwT7i3tH-TQ-AIop5UBbJAXBZchCxzTsZH8DvOjxGBX4-mJUMSGA8fNcIw56bQYoYrtfb-voix6swi4ZUW5YeEE-sGhhZLWJcunRCW2YCFQqAjUAwWjRtPqfiQQ5sg0FTB6d53b6OkX5ticMdEMzop8"
              alt="Admin Profile"
            />
            <span className="absolute bottom-0 right-0 size-3 bg-emerald-500 border-2 border-white dark:border-slate-900 rounded-full"></span>
          </div>
        </div>
      </div>
    </header>
  );
}
