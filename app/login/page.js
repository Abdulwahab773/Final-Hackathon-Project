"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState, useEffect, Suspense } from "react";
import { useLoginMutation } from "@/services/authApi";
import { useRouter, useSearchParams } from "next/navigation";

function LoginContent() {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [login, { isLoading }] = useLoginMutation();
  const router = useRouter();
  const searchParams = useSearchParams();

  useEffect(() => {
    const message = searchParams.get("message");
    if (message) {
      setSuccessMessage(message);
    }
  }, [searchParams]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const res = await login(formData).unwrap();
      localStorage.setItem("token", res?.token);
      localStorage.setItem("user", JSON.stringify(res?.data));
      router.push("/dashboard");

    } catch (err) {
      setError(err?.data?.message || "Invalid email or password.");
    }
  };




  return (
    <div className="w-full max-w-[480px] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 p-8 lg:p-10 animate-in fade-in zoom-in-95 duration-700">
      <div className="mb-10 text-center">
        <h1 className="text-3xl font-black text-slate-900 dark:text-white leading-tight tracking-tight mb-3">Welcome Back</h1>
        <p className="text-slate-500 dark:text-slate-400 text-base font-medium">Access your medical portal and patient records.</p>
      </div>

      {successMessage && (
        <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/10 border border-green-100 dark:border-green-900/30 rounded-xl text-green-600 dark:text-green-400 text-sm font-bold flex items-center gap-2">
          <span className="material-symbols-outlined font-icon">check_circle</span>
          {successMessage}
        </div>
      )}

      {error && (
        <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/10 border border-red-100 dark:border-red-900/30 rounded-xl text-red-600 dark:text-red-400 text-sm font-bold flex items-center gap-2">
          <span className="material-symbols-outlined font-icon">error</span>
          {error}
        </div>
      )}

      <form className="space-y-6" onSubmit={handleSubmit}>
        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Email Address</label>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl font-icon group-focus-within:text-primary transition-colors">mail</span>
            <input 
              className="w-full pl-12 pr-4 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 dark:text-white" 
              placeholder="name@clinic.com" 
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-sm font-bold text-slate-700 dark:text-slate-300 ml-1">Password</label>
          <div className="relative group">
            <span className="absolute left-4 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 text-xl font-icon group-focus-within:text-primary transition-colors">lock</span>
            <input 
              className="w-full pl-12 pr-12 py-3.5 bg-slate-50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary transition-all outline-none text-slate-900 dark:text-white" 
              placeholder="Enter your password" 
              type={showPassword ? "text" : "password"}
              name="password"
              required
              value={formData.password}
              onChange={handleChange}
            />
            <button 
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors"
            >
              <span className="material-symbols-outlined text-xl font-icon">
                {showPassword ? "visibility_off" : "visibility"}
              </span>
            </button>
          </div>
        </div>

        <div className="flex items-center justify-between py-1">
          <label className="flex items-center gap-2 cursor-pointer group">
            <input className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" type="checkbox"/>
            <span className="text-slate-600 dark:text-slate-400 text-sm font-bold group-hover:text-slate-900 dark:group-hover:text-white transition-colors">Remember Me</span>
          </label>
          <Link className="text-sm font-bold text-primary hover:underline" href="#">Forgot Password?</Link>
        </div>

        <button 
          className={`w-full bg-primary hover:brightness-110 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/20 transition-all active:scale-95 ${isLoading ? "opacity-70 cursor-not-allowed" : ""}`} 
          type="submit"
          disabled={isLoading}
        >
          {isLoading ? (
            <div className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin mx-auto"></div>
          ) : (
            "Sign In"
          )}
        </button>
      </form>

      <div className="relative my-10">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-slate-200 dark:border-slate-800"></div>
        </div>
        <div className="relative flex justify-center">
          <span className="px-4 bg-white dark:bg-slate-900 text-[10px] text-slate-400 uppercase tracking-[0.2em] font-bold">Or continue with</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <button className="flex items-center justify-center gap-2 h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-primary/30 transition-all font-bold active:scale-95">
          <svg className="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
          </svg>
          <span>Google</span>
        </button>
        <button className="flex items-center justify-center gap-2 h-12 px-4 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-700 dark:text-slate-200 hover:bg-slate-50 dark:hover:bg-slate-800 hover:border-primary/30 transition-all font-bold active:scale-95">
          <svg className="w-5 h-5 fill-[#1877F2]" viewBox="0 0 24 24">
            <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z"></path>
          </svg>
          <span>Facebook</span>
        </button>
      </div>

      <p className="mt-8 text-center text-sm text-slate-500 dark:text-slate-400 font-medium">
        Don't have an account? <Link className="font-black text-primary hover:underline" href="/signup">Create Account</Link>
      </p>
    </div>
  );
}

export default function LoginPage() {
  return (
    <div className="font-display bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 min-h-screen flex flex-col transition-colors duration-200">
      <Navbar />
      
      <main className="flex-1 flex items-center justify-center p-6 lg:p-12">
        <Suspense fallback={<div className="h-96 w-full flex items-center justify-center"><div className="h-8 w-8 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div></div>}>
          <LoginContent />
        </Suspense>
      </main>

      <Footer />
    </div>
  );
}
