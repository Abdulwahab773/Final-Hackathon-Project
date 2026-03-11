"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";
import BookingModal from "@/components/BookingModal";

export default function DoctorDetailPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex min-h-screen w-full flex-col font-display">
      <Navbar />
      
      <main className="flex-1 w-full max-w-[1200px] mx-auto px-4 md:px-10 lg:px-20 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column: Doctor Profile & Bio */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            {/* Profile Header Card */}
            <div className="bg-white dark:bg-slate-900 rounded-xl p-6 shadow-sm border border-slate-200 dark:border-slate-800">
              <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
                <div className="relative">
                  <div className="size-40 rounded-xl overflow-hidden shadow-lg border-4 border-white dark:border-slate-800">
                    <img className="w-full h-full object-cover" alt="Professional portrait of a female doctor" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCaiivelBxamj3wCLCxa7oIRz97BcRwhfJP1xw2220fLRdzFEvv0CdhV42KIk24rZ1TGrlCsKFq4O3vm4P1_bt9Oy-JJL772hFN8Im4z-an2QkJfTP-dOFevu1RwWd5gl2hRxc4f4JzTN-5F9j6iU-W1UGAtot1iU9bimtgkCcqyvMJnSk9oaH7U_YL-cwjIfqghKiFf-AOmdzXgQLu2dLt8HZZNtSsQdRhnIfYuYzBcMky8s5to7kfwDEc2CRFC6V6NzkU0oKU0o" />
                  </div>
                  <div className="absolute -bottom-2 -right-2 bg-green-500 border-4 border-white dark:border-slate-900 size-6 rounded-full"></div>
                </div>
                <div className="flex-1 text-center md:text-left">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">Dr. Sarah Smith</h1>
                      <p className="text-primary font-semibold text-lg">Senior Cardiologist</p>
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
                  <div className="mt-4 flex flex-wrap justify-center md:justify-start gap-4">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm font-icon">work</span>
                      <span>15+ Years Experience</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <span className="material-symbols-outlined text-primary text-sm font-icon">location_on</span>
                      <span>Metropolitan Heart Institute</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 text-sm">
                      <span className="material-symbols-outlined text-yellow-500 text-sm font-icon">star</span>
                      <span className="font-bold">4.9</span>
                      <span>(1,200 reviews)</span>
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
              <h3 className="text-xl font-bold mb-4">About Doctor</h3>
              <p className="text-slate-600 dark:text-slate-300 leading-relaxed mb-6">
                Dr. Sarah Smith is a board-certified cardiologist with over 15 years of experience in non-invasive cardiology and preventative heart care. She completed her medical degree at Stanford University and her fellowship at Johns Hopkins University. Her research focuses on heart failure management and advanced imaging techniques.
              </p>
              <h4 className="font-bold text-slate-800 dark:text-slate-200 mb-3">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {["Interventional Cardiology", "Heart Failure", "Diagnostic Imaging", "Preventative Medicine"].map((spec, i) => (
                  <span key={i} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">{spec}</span>
                ))}
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
                {/* Date Selection */}
                <div className="mb-6">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 block">Select Date</label>
                  <div className="flex gap-2 overflow-x-auto pb-2 no-scrollbar">
                    {[
                      { day: "MON", date: "14", active: true },
                      { day: "TUE", date: "15" },
                      { day: "WED", date: "16" },
                      { day: "THU", date: "17" },
                      { day: "FRI", date: "18" }
                    ].map((d, i) => (
                      <button key={i} className={`flex-shrink-0 w-14 h-20 rounded-xl border-2 flex flex-col items-center justify-center transition-all ${d.active ? "border-primary bg-primary/5" : "border-slate-100 dark:border-slate-800 hover:border-primary"}`}>
                        <span className={`text-xs font-bold ${d.active ? "text-primary" : "text-slate-400"}`}>{d.day}</span>
                        <span className={`text-lg font-bold ${d.active ? "text-primary" : ""}`}>{d.date}</span>
                      </button>
                    ))}
                  </div>
                </div>
                {/* Time Slots Selection */}
                <div className="mb-8">
                  <label className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider mb-3 block">Available Slots</label>
                  <div className="grid grid-cols-3 gap-2">
                    {["09:00 AM", "10:30 AM", "11:00 AM", "01:30 PM", "02:00 PM", "04:30 PM"].map((time, i) => (
                      <button key={i} className={`py-2 px-1 text-xs font-bold rounded-lg border transition-all ${time === "10:30 AM" ? "bg-primary text-white border-primary" : "border-slate-200 dark:border-slate-700 hover:border-primary hover:text-primary"}`}>
                        {time}
                      </button>
                    ))}
                  </div>
                </div>
                {/* Booking Fee */}
                <div className="flex justify-between items-center mb-6 py-4 border-t border-slate-100 dark:border-slate-800">
                  <span className="text-slate-600 dark:text-slate-400">Consultation Fee</span>
                  <span className="text-xl font-bold text-slate-900 dark:text-slate-100">$120.00</span>
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
        doctorName="Dr. Sarah Smith" 
      />
    </div>
  );
}
