"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";
import { useParams } from "next/navigation";
import { useGetDoctorsQuery } from "@/services/doctorApi";

export default function DoctorDetailPage() {
  const { id } = useParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const { data: doctorResponse, isLoading, error } = useGetDoctorsQuery({ id });
  const doctor = doctorResponse?.data?.[0];

  const initials = doctor?.name
    ? doctor.name
        .replace(/dr\.?\s*/i, '')
        .split(" ")
        .map((n) => n[0])
        .join("")
        .toUpperCase()
        .slice(0, 2)
    : "DR";

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col font-display">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center py-20">
           <span className="material-symbols-outlined animate-spin text-5xl text-primary font-light">progress_activity</span>
           <p className="mt-4 text-slate-500 font-medium">Loading specialist profile...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !doctor || doctor.isActive === false) {
    return (
      <div className="flex min-h-screen flex-col font-display">
        <Navbar />
        <main className="flex-1 flex flex-col items-center justify-center p-20 text-center">
          <div className="w-24 h-24 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-5xl text-slate-400 font-light">search_off</span>
          </div>
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-3">Specialist Not Found</h2>
          <p className="text-slate-500 max-w-md mx-auto mb-8">This doctor profile is currently unavailable or doesn't exist.</p>
          <Link href="/doctors" className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 transition-colors">
            Back to Directory
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col font-display">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1400px] mx-auto px-4 md:px-10 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Doctor Profile & Bio */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

              <div className="flex flex-col md:flex-row gap-8 items-center md:items-start relative z-10">
                <div className="relative shrink-0">
                  <div className="w-40 h-40 rounded-2xl bg-slate-50 dark:bg-slate-800 overflow-hidden shadow-lg border-4 border-white dark:border-slate-800 flex items-center justify-center relative">
                     <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent"></div>
                     <span className="relative z-10 text-6xl font-black text-primary tracking-tighter">{initials}</span>
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-emerald-500 border-4 border-white dark:border-slate-900 size-6 rounded-full" title="Available"></div>
                </div>
                <div className="flex-1 text-center md:text-left w-full">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{doctor.name}</h1>
                      <p className="text-primary font-semibold text-lg">{doctor.specialization} • {doctor.qualification}</p>
                    </div>
                    <div className="flex gap-2 justify-center">
                      <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined font-icon">share</span>
                      </button>
                      <button className="p-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-600 hover:text-primary transition-colors">
                        <span className="material-symbols-outlined font-icon">favorite</span>
                      </button>
                    </div>
                  </div>
                  <div className="mt-6 flex flex-wrap justify-center md:justify-start gap-4 border-t border-slate-100 dark:border-slate-800/50 pt-6">
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <span className="material-symbols-outlined text-primary text-lg font-icon">work</span>
                      <span>{doctor.experience} Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 bg-slate-50 dark:bg-slate-800/50 px-3 py-1.5 rounded-lg text-slate-700 dark:text-slate-300 text-sm font-medium">
                      <span className="material-symbols-outlined text-yellow-500 text-lg font-icon-fill">star</span>
                      <span><strong className="text-slate-900 dark:text-white">4.9</strong> (120+ reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Statistics Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { label: "Patients", value: "2,000+" },
                { label: "Reviews", value: "1.2k" },
                { label: "Papers", value: "45+" },
                { label: "Awards", value: "12" }
              ].map((stat, i) => (
                <div key={i} className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                  <p className="text-slate-500 dark:text-slate-400 text-xs uppercase font-bold tracking-wider">{stat.label}</p>
                  <p className="text-2xl font-bold text-primary">{stat.value}</p>
                </div>
              ))}
            </div>

            {/* About Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">description</span>
                Clinical Biography
              </h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6 text-lg">
                {doctor.description || "No professional biography provided."}
              </p>
              
              <div className="pt-6 border-t border-slate-100 dark:border-slate-800">
                <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3 flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary">verified</span>
                  Clinical Focus
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="px-4 py-2 bg-primary/10 text-primary rounded-xl text-sm font-bold tracking-wide">{doctor.specialization}</span>
                </div>
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-8 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold">Patient Reviews</h3>
                <button className="text-primary font-semibold text-sm hover:underline">View All</button>
              </div>
              <div className="space-y-6">
                {[
                  {
                    name: "Emily Johnson",
                    time: "2 days ago",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuClb2s5Y7kHSwDei9YkS869ADFs_190hr2lxIVCgn4g7x15rmhT4oZx00NqKF0MnbEpjsPaYdvMGszLJVUN5y8gueGX-NMYbiKCcyQor-a5E7Ll7R9x2JJrbD0XRv771uGE8g4Hfg6vU73RPhLTqLsjNkvZadvScacNgP5ZWftM3mvJB5Q9tCEGFa57HLWFBaxRSFe-XiDJWZWyoebnVz_mdghFbBNFtqKFvONlf8sFk--KB136S-mw_o31SOTZgcSSL4LttvE870o",
                    content: "Dr. Smith was incredibly thorough and patient. She explained my condition in a way that I could easily understand and made me feel very comfortable during the entire visit."
                  },
                  {
                    name: "Michael Chen",
                    time: "1 week ago",
                    img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCZ-xiaRoCtQOvxDLXz6eeNLoo0rLbM8amvYCc-bUwILNBBMVHKKzltpNxySNVV9mc0R8OY6SYyVX4ethqROQDXdSwV53yHdm2odIrxcgRe2DbZhnBEZMYB9zIs53GgIPU_pNtfDCJORQ44oFO4vA8U1wu3uaQZXca88jtedApiQes5Rv1SgTyjOSFigHK18c_hQLwVCvb30kz48i-ShMzX2Bvj3HGTYPiCscsXq_C3t55gMJNIU3et6q9T_0hZXjtKw16d-qq4tOg",
                    content: "Very professional environment. The wait time was minimal and the staff were very friendly. Highly recommend Dr. Sarah for anyone seeking cardiac care."
                  }
                ].map((review, i) => (
                  <div key={i} className={i === 0 ? "border-b border-slate-100 dark:border-slate-800 pb-6" : ""}>
                    <div className="flex items-center gap-3 mb-2">
                      <div className="size-10 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                        <img className="w-full h-full object-cover" alt="Patient review avatar" src={review.img} />
                      </div>
                      <div>
                        <p className="font-bold text-sm">{review.name}</p>
                        <div className="flex text-yellow-500 scale-75 origin-left">
                          {[...Array(5)].map((_, j) => (
                            <span key={j} className="material-symbols-outlined font-icon-fill">star</span>
                          ))}
                        </div>
                      </div>
                      <span className="ml-auto text-xs text-slate-400">{review.time}</span>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                      "{review.content}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-xl border border-slate-200 dark:border-slate-800">
                <h3 className="text-xl font-bold mb-4">Book Appointment</h3>
                
                {/* Time Slots Selection */}
                <div className="mb-6">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 block">Weekly Schedule</label>
                  <div className="flex flex-col gap-2">
                    {doctor.timings && doctor.timings.length > 0 ? (
                      doctor.timings.map((time, idx) => (
                        <div key={idx} className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-800">
                          <span className="font-bold text-slate-700 dark:text-slate-300 capitalize">{time.day}</span>
                          <span className="text-xs font-bold bg-white dark:bg-slate-900 px-2 py-1 rounded-lg text-primary shadow-sm border border-slate-100 dark:border-slate-800">
                            {time.startTime} - {time.endTime}
                          </span>
                        </div>
                      ))
                    ) : (
                      <p className="text-sm text-slate-500 italic p-4 text-center bg-slate-50 dark:bg-slate-800/50 rounded-xl">Schedule not available</p>
                    )}
                  </div>
                </div>
                <div className="flex justify-between items-center mb-6 py-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400 font-medium">Consultation Fee</span>
                  <span className="text-2xl font-black text-slate-900 dark:text-white">${doctor.consultationFee || doctor.price || 'N/A'}</span>
                </div>
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-primary/30 transition-all flex items-center justify-center gap-2"
                >
                  <span className="material-symbols-outlined font-icon">event_available</span>
                  Book Appointment
                </button>
                <p className="text-center text-xs text-slate-400 mt-4">Free cancellation up to 24 hours before</p>
              </div>
              {/* Clinic Location Preview */}
              <div className="bg-white dark:bg-slate-900 rounded-xl p-4 shadow-sm border border-slate-200 dark:border-slate-800">
                <h4 className="font-bold text-sm mb-3">Clinic Location</h4>
                <div className="h-32 rounded-lg bg-slate-200 dark:bg-slate-800 mb-3 overflow-hidden relative">
                  <img className="w-full h-full object-cover opacity-80" alt="Simplified map view of clinic location" src="https://lh3.googleusercontent.com/aida-public/AB6AXuANP-hP3rvCDLUoCnAznao3Y4jV-cNAmbEgotxv9ZGvDEAbLs3YmouVyzCR7PyQRZvdPItK7oyv8HGmZ5_JOnEJValxZudBjSk0w8nwqA2dtNw1AdsbUOWM5GeEnhZ_j8Jluab_4u3uSxcXCgDwCDuJ-NR9v9vdbS7UOHHdxmyvM0n8DLx1AeX7R1OXP4LLsZQhwm2SWMAdYon4Sag_N6Yu_TFlICd3hm7gRpkhrRxJM98UXo9JQiVdD97aR-bsS5tYDIK11ChxL_A" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="material-symbols-outlined text-primary text-4xl font-icon">location_on</span>
                  </div>
                </div>
                <p className="text-xs font-bold text-slate-800 dark:text-slate-200">Metropolitan Heart Institute</p>
                <p className="text-[10px] text-slate-500">123 Medical Plaza, Suite 400, NY 10001</p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
      <BookingModal 
        isOpen={isModalOpen} 
        onClose={() => setIsModalOpen(false)} 
        doctor={doctor} 
      />
    </div>
  );
}
