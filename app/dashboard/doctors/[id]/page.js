"use client";

import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import {useGetDoctorsQuery, useUpdateDoctorMutation, useDeleteDoctorMutation } from "@/services/doctorApi";

export default function DoctorDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const { data: doctorResponse, isLoading, error } = useGetDoctorsQuery({ id });
  const [updateDoctor, { isLoading: isUpdating }] = useUpdateDoctorMutation();
  const [deleteDoctor, { isLoading: isDeleting }] = useDeleteDoctorMutation();

  const doctor = doctorResponse?.data[0];


  if (isLoading) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary">progress_activity</span>
          <p className="font-medium text-slate-500">Loading doctor details...</p>
        </div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center text-center p-8">
        <div className="max-w-md space-y-4">
          <span className="material-symbols-outlined text-6xl text-slate-300">error</span>
          <h2 className="text-xl font-bold text-slate-900 dark:text-white">Doctor Not Found</h2>
          <p className="text-slate-500">The medical professional you're looking for could not be found or an error occurred.</p>
          <Link href="/dashboard/doctors" className="inline-block px-6 py-2 bg-primary text-white rounded-xl font-semibold shadow-lg shadow-primary/20 hover:scale-105 transition-all">
            Back to Directory
          </Link>
        </div>
      </div>
    );
  }

  const handleStatusToggle = async () => {
    try {
      await updateDoctor({
        id,
        doctor: { isActive: !doctor.isActive }
      }).unwrap();
    } catch (err) {
      console.error("Failed to update status:", err);
    }
  };

  const handleDelete = async () => {
    if (window.confirm("Are you sure you want to remove this doctor from the registry? This action cannot be undone.")) {
      try {
        await deleteDoctor(id).unwrap();
        alert("Doctor removed successfully.");
        router.push("/dashboard/doctors");
      } catch (err) {
        console.error("Failed to delete doctor:", err);
        alert(err.data?.message || "Failed to delete the doctor profile.");
      }
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      {/* Header / Breadcrumbs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-slate-500">
          <Link href="/dashboard/doctors" className="text-sm hover:text-primary transition-colors">Doctors</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-sm font-semibold text-primary">{doctor.name}</span>
        </div>
        <button className="bg-primary text-white px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 shadow-lg shadow-primary/20 hover:brightness-110 transition-all">
          <span className="material-symbols-outlined text-lg">add</span>
          New Appointment
        </button>
      </div>

      {/* Doctor Profile Card */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col md:flex-row gap-8 items-start relative overflow-hidden">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl pointer-events-none"></div>

        <div className="flex-1 space-y-6 relative z-10 w-full">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-4">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">{doctor.name}</h2>
                <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${doctor.isActive ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-900/20 dark:text-emerald-400' : 'bg-slate-100 text-slate-500'}`}>
                  {doctor.isActive ? 'Active' : 'Inactive'}
                </span>
              </div>
              <p className="text-primary font-semibold text-lg">{doctor.specialization} • <span className="text-slate-500 dark:text-slate-400 font-medium">{doctor.qualification || 'MBBS, MD'}</span></p>
            </div>

            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => router.push(`/dashboard/doctors/edit/${id}`)}
                className="px-5 py-2.5 bg-slate-50 dark:bg-slate-800 text-slate-700 dark:text-slate-200 rounded-xl text-sm font-semibold hover:bg-slate-100 dark:hover:bg-slate-700 transition-all border border-slate-200 dark:border-slate-700 flex items-center gap-2"
              >
                <span className="material-symbols-outlined text-lg font-normal">edit</span>
                Edit Profile
              </button>
              
              <button
                onClick={handleStatusToggle}
                disabled={isUpdating}
                className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-2 border ${doctor.isActive
                  ? 'bg-emerald-50 text-emerald-600 border-emerald-100 hover:bg-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-800'
                  : 'bg-slate-100 text-slate-500 border-slate-200 dark:bg-slate-800/20'
                  }`}
              >
                <span className="material-symbols-outlined text-lg font-normal">
                  {doctor.isActive ? 'check_circle' : 'do_not_disturb_on'}
                </span>
                {isUpdating ? 'Updating...' : (doctor.isActive ? 'Active' : 'Inactive')}
              </button>

              <button
                onClick={handleDelete}
                disabled={isDeleting}
                className="px-5 py-2.5 bg-rose-50 text-rose-600 border border-rose-100 rounded-xl text-sm font-semibold hover:bg-rose-100 dark:bg-rose-900/20 dark:border-rose-800 transition-all flex items-center gap-2"
              >
                <span className={`material-symbols-outlined text-lg font-normal ${isDeleting ? 'animate-spin' : ''}`}>
                  {isDeleting ? 'progress_activity' : 'delete'}
                </span>
                {isDeleting ? 'Removing...' : 'Delete Doctor'}
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
            <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="material-symbols-outlined text-primary text-xl">mail</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Email Address</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{doctor.email}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="material-symbols-outlined text-primary text-xl">payments</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Consultation Fee</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">${doctor.consultationFee}</p>
              </div>
            </div>
            <div className="flex items-start gap-3 bg-slate-50 dark:bg-slate-800/40 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
              <span className="material-symbols-outlined text-primary text-xl">work_history</span>
              <div>
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Experience</p>
                <p className="text-sm font-semibold text-slate-700 dark:text-slate-300">{doctor.experience} Years Professional</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* About & Professional Details */}
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">description</span>
                About & Professional Bio
              </h3>
            </div>
            <div className="p-8 space-y-8">
              <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-lg italic">
                {doctor.description || "No professional biography provided yet."}
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-slate-100 dark:border-slate-800">
                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-primary text-lg">school</span>
                    Qualifications
                  </h4>
                  <div className="p-4 bg-slate-50 dark:bg-slate-800/50 rounded-xl border border-slate-100 dark:border-slate-800">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 leading-relaxed">
                      {doctor.qualification || "Credentials pending verification."}
                    </p>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="font-bold text-slate-900 dark:text-white flex items-center gap-2 text-sm uppercase tracking-wider">
                    <span className="material-symbols-outlined text-primary text-lg">verified</span>
                    Clinical Focus
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1.5 bg-primary/5 text-primary text-xs font-bold rounded-lg border border-primary/10">{doctor.specialization}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activity / Placeholder */}
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white">Recent Consultation History</h3>
            </div>
            <div className="p-12 text-center space-y-4">
              <span className="material-symbols-outlined text-6xl text-slate-200">history</span>
              <p className="text-slate-400 font-medium">No recent appointments recorded for this doctor.</p>
            </div>
          </div>
        </div>

        {/* Sidebar: Availability & Department */}
        <div className="space-y-8">
          <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
            <div className="p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/50">
              <h3 className="font-bold text-lg text-slate-900 dark:text-white flex items-center gap-2">
                <span className="material-symbols-outlined text-primary">schedule</span>
                Weekly Schedule
              </h3>
            </div>
            <div className="p-6">
              <div className="space-y-1">
                {doctor.timings && doctor.timings.length > 0 ? doctor.timings.map((time, idx) => (
                  <div key={idx} className="flex items-center justify-between p-3 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-colors group">
                    <span className="text-sm font-bold text-slate-500 uppercase tracking-widest w-12 group-hover:text-primary transition-colors">{time.day.slice(0, 3)}</span>
                    <div className="flex-1 bg-primary/5 h-1.5 rounded-full mx-4 overflow-hidden">
                      <div className="bg-primary h-full w-2/3 rounded-full opacity-60"></div>
                    </div>
                    <span className="text-xs font-bold text-slate-900 dark:text-white whitespace-nowrap bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded-lg">
                      {time.startTime} - {time.endTime}
                    </span>
                  </div>
                )) : (
                  <p className="text-center text-slate-400 py-8 text-sm">No schedule defined</p>
                )}
              </div>
              <button
                onClick={() => router.push(`/dashboard/doctors/edit/${id}`)}
                className="w-full mt-6 py-3.5 bg-primary/10 text-primary rounded-xl text-xs font-bold uppercase tracking-widest hover:bg-primary hover:text-white transition-all shadow-sm"
              >
                Modify Shifts
              </button>
            </div>
          </div>

          <div className="bg-primary rounded-2xl p-8 text-white relative overflow-hidden shadow-xl shadow-primary/20">
            <div className="relative z-10">
              <h3 className="font-bold text-xl mb-3">Department Leadership</h3>
              <p className="text-white/80 text-sm leading-relaxed mb-6 font-medium">
                {doctor.name} leads the {doctor.specialization} department, overseeing clinical excellence and patient safety protocols.
              </p>
              <div className="flex items-center gap-3">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <div key={i} className="w-10 h-10 rounded-full border-2 border-primary bg-white/20 flex items-center justify-center text-[10px] font-bold shadow-md">
                      MD
                    </div>
                  ))}
                </div>
                <span className="text-xs font-bold text-white/90">+12 Staff Members</span>
              </div>
            </div>
            {/* Background Icon */}
            <span className="material-symbols-outlined absolute -bottom-8 -right-8 text-[180px] text-white/10 rotate-12 select-none pointer-events-none">
              health_and_safety
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
