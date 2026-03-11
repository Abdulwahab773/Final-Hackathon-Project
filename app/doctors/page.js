import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import DoctorCard from "@/components/DoctorCard";

export default function DoctorsPage() {
  const doctors = [
    {
      name: "Dr. Sarah Jenkins",
      specialty: "Cardiology",
      rating: "4.9",
      reviews: "120",
      experience: "12",
      title: "Heart Specialist",
      price: "120",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuAA8PKAUVxejb61-Oin08Jc3KYAiChuC2HDouuN8B6PUQ7zxUdd9P8cJaAxcdngVEjl0vV4OeFaggjyYGscXSe4gA5hRJ_JEZxgoXkv6kPjAuPbZR1c504NNzNumSbXs5E5UYIYqNASdjjbEG7LMEf9kSzCMkklME491RQm_Rh3wp8J9vK71mnFH49Gz30TcaOFzJSflAoc3KkztbWvDfTIf1Q9MzqoUg2m9Dnh4EAZttk6H4x_f6LPi0Ts4rxeJ0WjykY-e_3CkGg"
    },
    {
      name: "Dr. Michael Chen",
      specialty: "Neurology",
      rating: "4.8",
      reviews: "85",
      experience: "15",
      title: "Neurosurgeon",
      price: "150",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCi7XA3XbhEFJErMU8s19PbaldxeJmVFRbocJF7p-jr39o9vy0RRMBBC_G-01OQJQXBGvV5CMkVnNt19cfrV7kMeBpTLxsKXL4RkJdJWPxUdxK-DF-Wy51Pp9OnLMI0yWR6y55a_2MwxmZ4OQKtzr5alSXd1m0bWYQXmPYtehIpEDNEyx_5YQoPhh2yFDbsSrmOlcR7MZX-t3_FTZ0NRETpMcCLH0cR33beRtFxNUUYukJGkTz1bLhU5JQB6JNGyg5VS4mhosiOJBQ"
    },
    {
      name: "Dr. Elena Rodriguez",
      specialty: "Pediatrics",
      rating: "5.0",
      reviews: "210",
      experience: "8",
      title: "Child Specialist",
      price: "95",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuBieJ_az4YR7yAnc1yySiHrHY8G-UhbTLPxKpYGy0yAk3aXKCqZE2Jkk8m2icavCshk2l4QCBzM7MgoErY_p9xL5VA9-g-C1BLACubuHU54R8JptFFOHkMAPnquEoLD55gNNPvREcBG8_AZCOBA6wSeYB_LAi4N3j7v3d6iAiSlGzABSGZSDZv3of5KwPZqeH_bI2HpE_QC6tE0dDKXFNGLaGIIXtsJC0S01tY7jRp-cNb4cLYKbkNC1VC8K1ZyEc8nFQzpEjZ6TX8"
    },
    {
      name: "Dr. James Wilson",
      specialty: "Orthopedics",
      rating: "4.7",
      reviews: "54",
      experience: "20",
      title: "Bone & Joint Expert",
      price: "180",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCe-xyiGgVq1qszUf_OQbDRx-eIe-uOVIDL7HTaIsKekxoWYkImAzzjF3IDe0ZRTzbZHTGoDNBwZ3JbSxj_K5d6pjrYkdUPCHyLQagmvYXCZ5nIweBTiwxi7E8yk7Y1tv76ulL5T4DzwflO0M6wL8J7HLx1VU_fgybKcaw5fwUGTL85S6ftk7BaP3vUiQB__9CXlw38RX4Ps-GXjQGANxodT1RTelyUIHsdTWUmY-lpz2NOTd1bGayPMRCiF6tQ8SbNxK-em40ILvA"
    },
    {
      name: "Dr. Maya Patel",
      specialty: "Dermatology",
      rating: "4.9",
      reviews: "142",
      experience: "10",
      title: "Skin & Laser Specialist",
      price: "110",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuCBNa-tY9lpCE9pdEGk7nfgfpAgsONldlqry4blcgPGd2eKt-X-mhzYDC-WN7bakq_nYDoSm0G1b1nYF6IHHrWEPh00cS_5u6slPworhQiLDUubQ2Ifb2_9rVCTCSrv2c7eqh9sHDpH-0OCHe5ueR4tlEbzzIH_7xba1kpaSv-gDBbSSG9VbwLhPdyKmgGH0Nq2oTrUULaNG5p9vOv-cCFRgzRePG3sb6hXiFegqXTPQgDDNaxZG65GIm56Kd1iAhKTjFT-dH0GRZQ"
    },
    {
      name: "Dr. Robert Vance",
      specialty: "Psychiatry",
      rating: "4.6",
      reviews: "42",
      experience: "18",
      title: "Mental Health Expert",
      price: "140",
      img: "https://lh3.googleusercontent.com/aida-public/AB6AXuDbCaSolmhLFWgS249750YXDi5h5hEb6eALZXOdK5X89l373aitjF-xXaRpgcOLYt7fMlon2niOTPECXOPY5Nd_tq3mhacrzhXNnvLVclZ1BFlshG8DXixhCfjTw7ikWt_h-pxUkBMPBYg2YoH8QEIeJXl7sGQmco8ySRKGGx2YGIVgazQ6Bxgm1U6KOtYVtOG0uSNqblENKsPA7D0xGK4x43V6t99cCeNzy6JBE7bpMUf8oI-xamgfRumkfxeV31s-qx8tcL2MdOQ"
    }
  ];

  const specialties = ["All Specializations", "Cardiology", "Dermatology", "Pediatrics", "Neurology", "Orthopedics"];

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex flex-col flex-1 max-w-7xl mx-auto w-full px-6 md:px-20 py-10 text-slate-900 dark:text-slate-100">
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
          {doctors.map((doctor, index) => (
            <DoctorCard key={index} doctor={doctor} />
          ))}
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
