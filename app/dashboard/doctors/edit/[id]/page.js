"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { useGetDoctorsQuery, useUpdateDoctorMutation } from "@/services/doctorApi";

export default function EditDoctorPage() {
  const { id } = useParams();
  const router = useRouter();
  
  const { data: doctorResponse, isLoading: isFetching } = useGetDoctorsQuery({ id });
  const [updateDoctor, { isLoading: isUpdating }] = useUpdateDoctorMutation();
  
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    specialization: "",
    experience: "",
    consultationFee: "",
    qualification: "",
    description: ""
  });

  const [availability, setAvailability] = useState([]);

  useEffect(() => {
    if (doctorResponse?.data && doctorResponse.data.length > 0) {
      const doctor = doctorResponse.data[0];
      setFormData({
        name: doctor.name || "",
        email: doctor.email || "",
        specialization: doctor.specialization || "",
        experience: doctor.experience || "",
        consultationFee: doctor.consultationFee || "",
        qualification: doctor.qualification || "",
        description: doctor.description || ""
      });
      
      if (doctor.timings) {
        setAvailability(doctor.timings.map(t => ({
          day: t.day.charAt(0).toUpperCase() + t.day.slice(1),
          startTime: t.startTime,
          endTime: t.endTime
        })));
      }
    }
  }, [doctorResponse]);

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const addDay = () => {
    setAvailability([...availability, { day: "Monday", startTime: "09:00", endTime: "17:00" }]);
  };

  const removeDay = (index) => {
    setAvailability(availability.filter((_, i) => i !== index));
  };

  const updateDay = (index, field, value) => {
    const updated = [...availability];
    updated[index][field] = value;
    setAvailability(updated);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = {
        ...formData,
        experience: Number(formData.experience),
        consultationFee: Number(formData.consultationFee),
        timings: availability.map(item => ({
          day: item.day.toLowerCase(),
          startTime: item.startTime,
          endTime: item.endTime
        }))
      };

      const res = await updateDoctor({ id, doctor: payload }).unwrap();
      if (res.status) {
        alert("Doctor updated successfully!");
        router.push(`/dashboard/doctors/${id}`);
      }
    } catch (err) {
      console.error("Failed to update doctor:", err);
      alert(err.data?.message || "Something went wrong while updating the doctor.");
    }
  };

  if (isFetching) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <span className="material-symbols-outlined animate-spin text-4xl text-primary font-normal">progress_activity</span>
          <p className="font-medium text-slate-500 italic">Preparing professional details...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* Breadcrumbs & Title */}
      <div className="mb-10">
        <div className="flex items-center gap-2 text-sm text-slate-500 mb-2 font-medium">
          <Link href="/dashboard/doctors" className="hover:text-primary transition-colors">Doctors</Link>
          <span className="material-symbols-outlined text-xs font-normal">chevron_right</span>
          <Link href={`/dashboard/doctors/${id}`} className="hover:text-primary transition-colors">{formData.name}</Link>
          <span className="material-symbols-outlined text-xs font-normal">chevron_right</span>
          <span className="text-primary font-semibold">Edit Credentials</span>
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Edit Doctor Profile</h1>
        <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium italic">Update professional qualifications and availability schedule.</p>
      </div>

      <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-800 overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 lg:p-10 space-y-12">

          {/* Profile Section Info */}
          <div className="flex items-center gap-6 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-white shrink-0 shadow-lg">
              <span className="material-symbols-outlined text-3xl font-normal">manage_accounts</span>
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">Professional Identity</h3>
              <p className="text-slate-500 text-sm font-medium italic">Updating records for {formData.name}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="name">Full Name</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">person</span>
                <input 
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" 
                  id="name" 
                  placeholder="e.g. Dr. Jane Smith" 
                  type="text" 
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="specialization">Specialization</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">stethoscope</span>
                <select 
                  className="w-full pl-12 pr-10 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm appearance-none cursor-pointer" 
                  id="specialization"
                  value={formData.specialization}
                  onChange={handleChange}
                  required
                >
                  <option value="" disabled>Select a specialty</option>
                  <option value="Cardiology">Cardiology</option>
                  <option value="Dermatology">Dermatology</option>
                  <option value="Pediatrics">Pediatrics</option>
                  <option value="Neurology">Neurology</option>
                  <option value="General Medicine">General Medicine</option>
                  <option value="Orthopedics">Orthopedics</option>
                  <option value="Gynecology">Gynecology</option>
                  <option value="Psychiatry">Psychiatry</option>
                  <option value="Ophthalmology">Ophthalmology</option>
                  <option value="ENT">ENT (Ear, Nose, Throat)</option>
                  <option value="Urology">Urology</option>
                  <option value="Gastroenterology">Gastroenterology</option>
                  <option value="Endocrinology">Endocrinology</option>
                  <option value="Pulmonology">Pulmonology</option>
                  <option value="Oncology">Oncology</option>
                  <option value="Radiology">Radiology</option>
                  <option value="Nephrology">Nephrology</option>
                </select>
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none font-normal">expand_more</span>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="email">Email Address</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">mail</span>
                <input 
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" 
                  id="email" 
                  placeholder="jane.smith@clinic.com" 
                  type="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="consultationFee">Consultation Fee ($)</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">payments</span>
                <input 
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" 
                  id="consultationFee" 
                  placeholder="0.00" 
                  type="number" 
                  value={formData.consultationFee}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="experience">Years of Experience</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">history_edu</span>
                <input 
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" 
                  id="experience" 
                  placeholder="e.g. 10" 
                  type="number" 
                  value={formData.experience}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="qualification">Qualification</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 font-normal">school</span>
                <input 
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm" 
                  id="qualification" 
                  placeholder="e.g. MBBS, MD" 
                  type="text" 
                  value={formData.qualification}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="space-y-2 md:col-span-2">
              <label className="text-[10px] font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-widest pl-1" htmlFor="description">About / Bio</label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-5 text-slate-400 font-normal">description</span>
                <textarea 
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-50/50 dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-xl focus:ring-4 focus:ring-primary/10 focus:border-primary outline-none transition-all font-medium text-sm min-h-[120px] resize-none" 
                  id="description" 
                  placeholder="Doctor background details..." 
                  value={formData.description}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
            </div>
          </div>

          {/* Availability Schedule */}
          <div className="space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
              <h3 className="text-base font-semibold flex items-center gap-3 text-slate-900 dark:text-white uppercase tracking-wider">
                <span className="material-symbols-outlined text-primary font-normal">calendar_month</span>
                Modify Weekly Availability
              </h3>
              <button
                type="button"
                onClick={addDay}
                className="flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary font-semibold text-[10px] rounded-xl hover:bg-primary hover:text-white transition-all uppercase tracking-widest"
              >
                <span className="material-symbols-outlined text-sm font-normal">add_circle</span>
                Add Day
              </button>
            </div>

            <div className="space-y-4">
              {availability.map((item, index) => (
                <div key={index} className="flex flex-col md:flex-row items-end gap-6 p-6 bg-slate-50/50 dark:bg-slate-800/30 rounded-2xl border border-slate-100 dark:border-slate-800 animate-in slide-in-from-right-2 duration-300">
                  <div className="w-full md:w-1/3 space-y-2">
                    <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Select Day</label>
                    <div className="relative">
                      <select
                        value={item.day}
                        onChange={(e) => updateDay(index, "day", e.target.value)}
                        className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/20 appearance-none cursor-pointer"
                      >
                        {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"].map(day => (
                          <option key={day} value={day}>{day}</option>
                        ))}
                      </select>
                      <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none font-normal">expand_more</span>
                    </div>
                  </div>
                  <div className="w-full md:flex-1 grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">{item.day.toLowerCase()} start:</label>
                      <input
                        type="time"
                        value={item.startTime}
                        onChange={(e) => updateDay(index, "startTime", e.target.value)}
                        className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">end:</label>
                      <input
                        type="time"
                        value={item.endTime}
                        onChange={(e) => updateDay(index, "endTime", e.target.value)}
                        className="w-full p-3 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-700 rounded-xl text-sm font-semibold outline-none focus:ring-2 focus:ring-primary/20"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeDay(index)}
                    className="p-3 text-red-500 hover:bg-red-50 dark:hover:bg-red-900/10 transition-all rounded-xl border border-transparent hover:border-red-100 disabled:opacity-30 disabled:cursor-not-allowed"
                    disabled={availability.length === 1}
                  >
                    <span className="material-symbols-outlined font-normal">delete</span>
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Footer Actions */}
          <div className="flex items-center justify-end gap-4 pt-10 border-t border-slate-100 dark:border-slate-800">
            <Link href={`/dashboard/doctors/${id}`} className="px-8 py-3.5 text-[10px] font-semibold text-slate-500 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800 rounded-xl transition-all uppercase tracking-widest">
              Cancel
            </Link>
            <button 
              className="px-10 py-3.5 bg-primary text-white font-semibold text-[10px] rounded-xl shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all uppercase tracking-[0.2em] flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed" 
              type="submit"
              disabled={isUpdating}
            >
              <span className={`material-symbols-outlined text-lg font-normal ${isUpdating ? 'animate-spin' : ''}`}>
                {isUpdating ? 'progress_activity' : 'save'}
              </span>
              {isUpdating ? 'Updating Records...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
