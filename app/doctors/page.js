"use client"


import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";
import { useGetDoctorsQuery } from "@/services/doctorApi";

export default function DoctorsPage() {
  const { data: doctorResponse, isLoading } = useGetDoctorsQuery();
  
  const activeDoctors = doctorResponse?.data?.filter(doc => doc.isActive !== false) || [];

  const specialties = ["All Specializations", "Cardiology", "Dermatology", "Pediatrics", "Neurology", "Orthopedics", "General Medicine", "Psychiatry"];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-col flex-1 max-w-8xl mx-auto w-full px-6 md:px-20 py-10 text-slate-900 dark:text-slate-100">
        <div className="flex flex-col gap-6 mb-10">
          <div className="flex flex-col gap-2">
            <h1 className="text-slate-900 dark:text-white text-4xl md:text-5xl font-black leading-tight tracking-tight">Find a Specialist</h1>
            <p className="text-slate-500 dark:text-slate-400 text-lg max-w-2xl">Connect with world-class healthcare professionals tailored to your specific medical needs.</p>
          </div>
          <div className="w-full">
            <div className="flex w-full flex-1 items-stretch rounded-xl bg-white dark:bg-slate-800 shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden focus-within:ring-2 focus-within:ring-primary/50 transition-all h-14">
              <div className="text-slate-400 flex items-center justify-center pl-4">
                <span className="material-symbols-outlined font-icon">search</span>
              </div>
              <input className="flex w-full min-w-0 flex-1 border-none bg-transparent focus:ring-0 text-slate-900 dark:text-white placeholder:text-slate-400 px-4 text-base font-normal leading-normal" placeholder="Search by doctor name, specialty, or clinic location..." />
              <div className="flex items-center pr-2">
                <button className="bg-primary text-white px-6 py-2 rounded-lg font-semibold hover:bg-primary/90 transition-colors">Search</button>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 pb-8 overflow-x-auto no-scrollbar">
          {specialties.map((s, i) => (
            <button key={i} className={`flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full px-5 text-sm font-medium transition-all ${i === 0 ? "bg-primary text-white font-semibold" : "bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 hover:border-primary/50"}`}>
              <span>{s}</span>
              {i !== 0 && <span className="material-symbols-outlined text-sm font-icon">keyboard_arrow_down</span>}
            </button>
          ))}
          <button className="flex h-10 shrink-0 items-center justify-center gap-x-2 rounded-full bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 px-5 text-sm font-medium hover:border-primary/50 transition-all">
            <span className="material-symbols-outlined text-[20px] font-icon">tune</span>
            <span>More Filters</span>
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            <div className="col-span-full py-20 flex flex-col items-center justify-center gap-4">
              <span className="material-symbols-outlined animate-spin text-5xl text-primary font-light">progress_activity</span>
              <p className="text-slate-500 font-medium">Loading specialist directory...</p>
            </div>
          ) : activeDoctors.length > 0 ? (
            activeDoctors.map((doctor) => (
              <DoctorCard key={doctor._id || doctor.id} doctor={doctor} />
            ))
          ) : (
            <div className="col-span-full py-20 flex flex-col items-center justify-center gap-4 text-center">
              <div className="w-20 h-20 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center">
                <span className="material-symbols-outlined text-4xl text-slate-400 font-light">group_off</span>
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-2">No Specialists Found</h3>
              <p className="text-slate-500 max-w-md">We couldn't find any active doctors at the moment. Please check back later or modify your search criteria.</p>
            </div>
          )}
        </div>

        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined font-icon">chevron_left</span>
          </button>
          <button className="size-10 flex items-center justify-center rounded-lg bg-primary text-white font-bold">1</button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary/10 transition-colors">2</button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary/10 transition-colors">3</button>
          <div className="px-2 text-slate-400">...</div>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary/10 transition-colors">12</button>
          <button className="size-10 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-700 hover:bg-primary/10 transition-colors">
            <span className="material-symbols-outlined font-icon">chevron_right</span>
          </button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
