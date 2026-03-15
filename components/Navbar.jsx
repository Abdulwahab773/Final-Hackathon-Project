"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function Navbar() {
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    // Listen to storage changes to update navbar synchronously if needed (optional best practice)
    const checkUser = () => {
      const storedUser = localStorage.getItem("user");
      if (storedUser) {
        setUser(JSON.parse(storedUser));
      } else {
        setUser(null);
      }
    };
    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  const handleProfileClick = () => {
    if (user?.role === "patient") {
      router.push("/");
    } else {
      router.push("/dashboard");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-primary/10 bg-white/80 dark:bg-background-dark/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-white">
            <span className="material-symbols-outlined">clinical_notes</span>
          </div>
          <h1 className="text-xl font-bold tracking-tight text-slate-900 dark:text-white">MediCare AI</h1>
        </div>
        <nav className="hidden space-x-8 lg:flex">
          <Link className="text-sm font-semibold text-slate-700 hover:text-primary dark:text-slate-300" href="/">Home</Link>
          <Link className="text-sm font-semibold text-slate-700 hover:text-primary dark:text-slate-300" href="/doctors">Doctors</Link>
          <Link className="text-sm font-semibold text-slate-700 hover:text-primary dark:text-slate-300" href="/ai-health-checker">AI Health Checker</Link>
          <Link className="text-sm font-semibold text-slate-700 hover:text-primary dark:text-slate-300" href="#">About</Link>
          <Link className="text-sm font-semibold text-slate-700 hover:text-primary dark:text-slate-300" href="#">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          {user ? (
            <button 
              onClick={handleProfileClick}
              className="flex items-center gap-2 rounded-lg bg-slate-100 py-1.5 pl-1.5 pr-4 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 transition"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary text-white font-bold text-sm">
                {user.name ? user.name.charAt(0).toUpperCase() : "U"}
              </div>
              <span className="hidden text-sm font-semibold text-slate-700 dark:text-slate-200 sm:block">
                Profile
              </span>
            </button>
          ) : (
            <>
              <Link 
                href="/login" 
                className="hidden rounded-lg px-4 py-2 text-sm font-bold text-slate-700 transition hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-slate-800 sm:block"
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="rounded-lg bg-primary px-5 py-2 text-sm font-bold text-white shadow-lg shadow-primary/20 transition hover:bg-primary/90"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
}
