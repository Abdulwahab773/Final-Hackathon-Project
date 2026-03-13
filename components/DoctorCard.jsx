"use client"


import Link from "next/link";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function DoctorCard({ doctor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const doctorId = doctor._id || doctor.id;
  
  const initials = doctor.name
    ? doctor.name
        .replace(/dr\.?\s*/i, '') 
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "DR";


    
  return (
    <>
      <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
        <Link href={`/doctors/${doctorId}`} className="relative w-full aspect-4/3 bg-primary/5 dark:bg-primary/10 overflow-hidden flex items-center justify-center">
          {/* Decorative Background Elements */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
          <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
          
          {/* Premium Initials Display */}
          <div className="relative z-10 w-24 h-24 rounded-full bg-white dark:bg-slate-800 shadow-xl border-4 border-white/50 dark:border-slate-700/50 flex items-center justify-center transition-transform duration-500 group-hover:scale-110">
            <span className="text-3xl font-black text-primary tracking-tighter">{initials}</span>
          </div>

          <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-yellow-500 text-sm font-icon-fill">star</span>
            <span className="text-slate-900 dark:text-white text-sm font-bold">{doctor.rating || '4.9'}</span>
            <span className="text-slate-500 text-xs font-normal">({doctor.reviews || '120'})</span>
          </div>
        </Link>
        <div className="p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">{doctor.specialization || doctor.specialty}</span>
            </div>
            <Link href={`/doctors/${doctorId}`}>
              <h3 className="text-slate-900 dark:text-white text-xl font-bold hover:text-primary transition-colors">{doctor.name}</h3>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{doctor.experience} years experience • {doctor.qualification || doctor.title || 'Specialist'}</p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">Consultation begins</span>
              <span className="text-slate-900 dark:text-white font-bold">${doctor.consultationFee || doctor.price}</span>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="flex items-center justify-center rounded-xl bg-primary text-white text-sm font-bold px-5 py-2.5 hover:bg-primary/90 transition-all shadow-lg shadow-primary/20 active:scale-95"
            >
              Book Now
            </button>
          </div>
        </div>
      </div>
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        doctorName={doctor.name} 
      />
    </>
  );
}
