import { useState, useMemo, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useGetProfileQuery } from "@/services/authApi";
import { useCreateAppointmentMutation } from "@/services/appointmentApi";

export default function BookingModal({ isOpen, onClose, doctor }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [selectedTime, setSelectedTime] = useState("");
  const [currentMonth, setCurrentMonth] = useState(new Date());          
  const [errorMsg, setErrorMsg] = useState("");
  const [successMsg, setSuccessMsg] = useState("");
  
  const { data: profileResponse } = useGetProfileQuery();
  const profileData = profileResponse?.data || profileResponse;
  const [createAppointment, { isLoading: isBooking }] = useCreateAppointmentMutation();

  const doctorId = doctor?._id;

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: ""
  });

  const availableDays = useMemo(() => {
    if (!doctor?.timings) return [];
    return doctor.timings.map(t => t.day.toLowerCase());
  }, [doctor]);

  const timeSlots = useMemo(() => {
    if (!doctor?.timings || !selectedDate) return [];
    
    const dayOfWeek = selectedDate.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
    const availability = doctor.timings.find(t => t.day.toLowerCase() === dayOfWeek);
    
    if (!availability) return [];

    const slots = [];
    const createTimeDate = (timeStr) => {
        const [time, modifier] = timeStr.trim().split(/\s+/);
        let [hours, minutes] = time.split(":");
        hours = parseInt(hours, 10);
        if (modifier?.toUpperCase() === "PM" && hours < 12) hours += 12;
        if (modifier?.toUpperCase() === "AM" && hours === 12) hours = 0;
        
        const d = new Date(selectedDate);
        d.setHours(hours, parseInt(minutes, 10), 0, 0);
        return d;
    };

    try {
        let start = createTimeDate(availability.startTime);
        const end = createTimeDate(availability.endTime);

        while (start < end) {
            let hours = start.getHours();
            let minutes = start.getMinutes();
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; 
            minutes = minutes < 10 ? '0' + minutes : minutes;
            slots.push(`${hours}:${minutes} ${ampm}`);
            
            start.setMinutes(start.getMinutes() + 20); // 20 min slots
        }
    } catch (e) {
        console.error("Error generating slots", e);
    }
    
    return slots;
  }, [selectedDate, doctor]);

  useEffect(() => {
      if (timeSlots.length > 0 && !timeSlots.includes(selectedTime)) {
          setSelectedTime(timeSlots[0]);
      } else if (timeSlots.length === 0) {
          setSelectedTime("");
      }
  }, [timeSlots]);

  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, current: false });
    }
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, current: true });
    }
    return days;
  }, [currentMonth]);

  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
      <div className="relative w-full max-w-[800px] max-h-[95vh] bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col overflow-hidden animate-in zoom-in-95 duration-300">
        
        {/* Close Button - Floating since header was removed */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex items-center justify-center rounded-full size-10 bg-slate-100/80 dark:bg-slate-800/80 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors shadow-sm"
        >
          <span className="material-symbols-outlined font-icon">close</span>
        </button>

        {/* Progress Section */}
        <div className="flex flex-col gap-4 p-5 sm:p-6 border-b border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20 shrink-0">
          <div className="flex justify-between items-end">
            <div>
              <p className="text-primary font-bold text-[10px] sm:text-xs uppercase tracking-wider">Step {step} of 2</p>
              <h1 className="text-xl sm:text-2xl font-bold mt-1">
                {step === 1 ? "Select Date & Time" : "Patient Information"}
              </h1>
            </div>
            <p className="text-slate-500 dark:text-slate-400 text-xs sm:text-sm font-medium">{step === 1 ? "50%" : "100%"} Complete</p>
          </div>
          <div className="w-full bg-slate-200 dark:bg-slate-700 h-2 rounded-full overflow-hidden">
            <div 
              className="bg-primary h-full transition-all duration-500" 
              style={{ width: step === 1 ? "50%" : "100%" }}
            ></div>
          </div>
        </div>

        {/* Scrollable Content Area */}
        <div className="flex-1 overflow-y-auto custom-scrollbar p-5 sm:p-8">
          {errorMsg && (
            <div className="mb-4 p-3 bg-red-50 text-red-600 border border-red-200 rounded-xl text-sm font-medium">
              {errorMsg}
            </div>
          )}
          {successMsg && (
            <div className="mb-4 p-3 bg-emerald-50 text-emerald-600 border border-emerald-200 rounded-xl text-sm font-medium">
              {successMsg}
            </div>
          )}
          {step === 1 ? (
            <div className="space-y-8">
              {/* Calendar Section */}
              <div className="flex flex-col gap-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary font-icon">event</span>
                    Choose a Date
                  </h3>
                  <div className="flex items-center gap-2 bg-slate-100 dark:bg-slate-800 p-1 rounded-xl w-fit">
                    <button onClick={prevMonth} className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all shadow-sm">
                      <span className="material-symbols-outlined text-xl font-icon text-slate-600 dark:text-slate-300">chevron_left</span>
                    </button>
                    <span className="px-3 font-bold text-sm min-w-[120px] text-center text-slate-700 dark:text-slate-200">{monthName}</span>
                    <button onClick={nextMonth} className="p-1.5 hover:bg-white dark:hover:bg-slate-700 rounded-lg transition-all shadow-sm">
                      <span className="material-symbols-outlined text-xl font-icon text-slate-600 dark:text-slate-300">chevron_right</span>
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 md:gap-2">
                  {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(day => (
                    <div key={day} className="text-slate-400 text-[10px] sm:text-[11px] font-bold uppercase tracking-widest text-center py-2">{day}</div>
                  ))}
                  {calendarDays.map((d, i) => {
                    const cellDate = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d.day);
                    const cellDayName = cellDate.toLocaleDateString("en-US", { weekday: "long" }).toLowerCase();
                    const isAvailableDay = availableDays.includes(cellDayName);
                    
                    return (
                    <button 
                      key={i}
                      disabled={!d.current || !isAvailableDay}
                      onClick={() => setSelectedDate(cellDate)}
                      className={`h-10 sm:h-14 rounded-xl transition-all border border-transparent flex items-center justify-center ${
                        !d.current || !isAvailableDay ? "text-slate-300 dark:text-slate-700 pointer-events-none opacity-50" : 
                        selectedDate.getDate() === d.day && selectedDate.getMonth() === currentMonth.getMonth() ? 
                        "bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-primary/10 font-bold scale-105 z-10" : 
                        "hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/20 text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      <span className="text-sm sm:text-base">{d.day}</span>
                    </button>
                    );
                  })}
                </div>
              </div>

              {/* Time Slots Section */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary font-icon">schedule</span>
                    Time Slots
                  </h3>
                  <span className="text-[10px] font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase">20 min</span>
                </div>
                {timeSlots.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {timeSlots.map(time => (
                      <button 
                        key={time}
                        onClick={() => setSelectedTime(time)}
                        className={`flex items-center justify-center py-3 rounded-xl border transition-all ${
                          selectedTime === time ? 
                          "bg-primary text-white border-primary shadow-lg ring-4 ring-primary/10" : 
                          "bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-slate-100 border-transparent hover:border-primary/30 hover:bg-primary/10"
                        }`}
                      >
                        <p className={`text-sm ${selectedTime === time ? "font-bold" : "font-semibold"}`}>{time}</p>
                      </button>
                    ))}
                  </div>
                ) : (
                  <p className="text-slate-500 text-sm p-4 bg-slate-50 dark:bg-slate-800 rounded-xl text-center">No available slots for the selected date.</p>
                )}
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <p className="text-slate-500 dark:text-slate-400 text-sm bg-slate-100/50 dark:bg-slate-800/30 p-4 rounded-xl border border-slate-100 dark:border-slate-800">
                Please provide the details of the person attending the appointment.
              </p>
              
              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Full Name</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl font-icon transition-colors group-focus-within:text-primary">person</span>
                  <input 
                    value={formData.fullName}
                    onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 py-3.5 pl-12 pr-4 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                    placeholder="e.g. John Doe" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Email Address</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl font-icon transition-colors group-focus-within:text-primary">mail</span>
                    <input 
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 py-3.5 pl-12 pr-4 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                      placeholder="john@example.com" 
                      type="email" 
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Phone Number</label>
                  <div className="relative group">
                    <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 text-xl font-icon transition-colors group-focus-within:text-primary">call</span>
                    <input 
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 py-3.5 pl-12 pr-4 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none" 
                      placeholder="+1 (555) 000-0000" 
                      type="tel" 
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-slate-700 dark:text-slate-300 text-sm font-semibold ml-1">Reason for Visit</label>
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-4 text-slate-400 text-xl font-icon transition-colors group-focus-within:text-primary">description</span>
                  <textarea 
                    value={formData.reason}
                    onChange={(e) => setFormData({...formData, reason: e.target.value})}
                    className="w-full rounded-xl border border-slate-300 dark:border-slate-700 bg-white dark:bg-slate-800 py-3.5 pl-12 pr-4 text-slate-900 dark:text-slate-100 focus:border-primary focus:ring-4 focus:ring-primary/10 transition-all outline-none resize-none min-h-[120px]" 
                    placeholder="Briefly describe your symptoms..." 
                  ></textarea>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Action Footer */}
        <div className="shrink-0 flex items-center justify-between p-5 sm:p-6 border-t border-slate-100 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-800/20">
          <button 
            disabled={isBooking}
            onClick={step === 1 ? onClose : () => { setErrorMsg(""); setStep(1); }}
            className={`px-5 sm:px-6 py-2.5 rounded-xl font-semibold text-slate-600 dark:text-slate-400 ${isBooking ? "pointer-events-none opacity-50" : "hover:bg-slate-200/50 dark:hover:bg-slate-700"} transition-colors`}
          >
            {step === 1 ? "Cancel" : "Back"}
          </button>
          <button 
            disabled={isBooking || (step === 1 && !selectedTime)}
            onClick={async () => {
              if (step === 1) {
                  if (!selectedTime) {
                      setErrorMsg("Please select a time slot.");
                      return;
                  }
                  setErrorMsg("");
                  setStep(2);
              } else {
                try {
                    setErrorMsg("");
                    const patientId = profileData?._id; 
                    
                    if (!patientId) {
                        setErrorMsg("Please log in to book an appointment.");
                        return;
                    }
                    if (!doctorId) {
                        setErrorMsg("Doctor information is missing.");
                        return;
                    }

                    const payload = {
                        doctorId,
                        patientId,
                        appointmentDate: selectedDate.toISOString(),
                        appointmentTime: selectedTime,
                    };
                    
                    const res = await createAppointment(payload).unwrap();
                    setSuccessMsg("Appointment booked successfully!");
                    setTimeout(() => {
                        onClose();
                        setSuccessMsg("");
                        setStep(1);
                        setFormData({ fullName: "", email: "", phone: "", reason: "" });
                    }, 2000);
                    
                } catch (err) {
                    setErrorMsg(err?.data?.message || err?.message || "Failed to book appointment. Please try again.");
                }
              }
            }}
            className={`flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-3.5 ${isBooking || (step === 1 && !selectedTime) ? "bg-slate-400 cursor-not-allowed" : "bg-primary hover:brightness-110 active:scale-95"} text-white rounded-xl font-bold shadow-lg shadow-primary/20 transition-all`}
          >
            <span>{isBooking ? "Booking..." : step === 1 ? "Continue" : "Confirm Booking"}</span>
            {!isBooking && <span className="material-symbols-outlined text-xl font-icon">arrow_forward</span>}
          </button>
        </div>

        {/* Trust Messaging */}
        <div className="hidden sm:flex shrink-0 bg-white dark:bg-slate-900 border-t border-slate-100 dark:border-slate-800 p-4 justify-center gap-8 text-[10px] text-slate-400 uppercase tracking-widest font-bold">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm font-icon">verified</span>
            <span>Verified</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm font-icon">lock</span>
            <span>Secure</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-sm font-icon">info</span>
            <span>Flexible</span>
          </div>
        </div>
      </div>
    </div>

  );
}
