"use client"


import Link from "next/link";
import { useState } from "react";
import BookingModal from "./BookingModal";

export default function DoctorCard({ doctor }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const slug = doctor.name.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

  return (
    <>
      <div className="flex flex-col bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-md transition-shadow group">
        <Link href={`/doctors/${slug}`} className="relative w-full aspect-4/3 bg-slate-100 dark:bg-slate-800 overflow-hidden">
          <div 
            className="absolute inset-0 bg-center bg-cover transition-transform duration-500 group-hover:scale-105" 
            style={{ backgroundImage: `url("${doctor.img}")` }}
          ></div>
          <div className="absolute top-4 right-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
            <span className="material-symbols-outlined text-yellow-500 text-sm font-icon-fill">star</span>
            <span className="text-slate-900 dark:text-white text-sm font-bold">{doctor.rating}</span>
            <span className="text-slate-500 text-xs font-normal">({doctor.reviews})</span>
          </div>
        </Link>
        <div className="p-5 flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2">
              <span className="text-primary text-xs font-bold uppercase tracking-wider">{doctor.specialty}</span>
            </div>
            <Link href={`/doctors/${slug}`}>
              <h3 className="text-slate-900 dark:text-white text-xl font-bold hover:text-primary transition-colors">{doctor.name}</h3>
            </Link>
            <p className="text-slate-500 dark:text-slate-400 text-sm">{doctor.experience} years experience • {doctor.title}</p>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-slate-100 dark:border-slate-800">
            <div className="flex flex-col">
              <span className="text-slate-400 text-xs">Consultation starts at</span>
              <span className="text-slate-900 dark:text-white font-bold">${doctor.price}</span>
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
