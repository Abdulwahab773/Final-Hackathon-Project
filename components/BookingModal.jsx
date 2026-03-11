import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

export default function BookingModal({ isOpen, onClose, doctorName }) {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(new Date()); 
  const [selectedTime, setSelectedTime] = useState("11:00 AM");
  const [currentMonth, setCurrentMonth] = useState(new Date());          
  
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    reason: ""
  });

  // Calendar logic
  const calendarDays = useMemo(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    const days = [];
    // Previous month padding
    const prevMonthLastDay = new Date(year, month, 0).getDate();
    for (let i = firstDay - 1; i >= 0; i--) {
      days.push({ day: prevMonthLastDay - i, current: false });
    }
    // Current month days
    for (let i = 1; i <= daysInMonth; i++) {
      days.push({ day: i, current: true });
    }
    return days;
  }, [currentMonth]);

  const monthName = currentMonth.toLocaleString('default', { month: 'long', year: 'numeric' });

  const nextMonth = () => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  const prevMonth = () => setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));

  const timeSlots = ["09:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "02:00 PM", "03:00 PM", "04:00 PM", "05:00 PM"];

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
                  {calendarDays.map((d, i) => (
                    <button 
                      key={i}
                      disabled={!d.current}
                      onClick={() => setSelectedDate(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), d.day))}
                      className={`h-10 sm:h-14 rounded-xl transition-all border border-transparent flex items-center justify-center ${
                        !d.current ? "text-slate-300 dark:text-slate-700 pointer-events-none" : 
                        selectedDate.getDate() === d.day && selectedDate.getMonth() === currentMonth.getMonth() ? 
                        "bg-primary text-white shadow-lg shadow-primary/30 ring-4 ring-primary/10 font-bold scale-105 z-10" : 
                        "hover:bg-primary/5 dark:hover:bg-primary/10 hover:border-primary/20 text-slate-700 dark:text-slate-200"
                      }`}
                    >
                      <span className="text-sm sm:text-base">{d.day}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Time Slots Section */}
              <div className="flex flex-col gap-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-semibold flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary font-icon">schedule</span>
                    Time Slots
                  </h3>
                  <span className="text-[10px] font-medium px-2 py-1 rounded bg-slate-100 dark:bg-slate-800 text-slate-500 uppercase">45 min</span>
                </div>
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
            onClick={step === 1 ? onClose : () => setStep(1)}
            className="px-5 sm:px-6 py-2.5 rounded-xl font-semibold text-slate-600 dark:text-slate-400 hover:bg-slate-200/50 dark:hover:bg-slate-700 transition-colors"
          >
            {step === 1 ? "Cancel" : "Back"}
          </button>
          <button 
            onClick={() => {
              if (step === 1) setStep(2);
              else {
                // In a real app, you'd submit the form here
                router.push("/booking-confirmation");
                onClose();
              }
            }}
            className="flex items-center gap-2 px-6 sm:px-10 py-3 sm:py-3.5 bg-primary text-white rounded-xl font-bold shadow-lg shadow-primary/20 hover:brightness-110 active:scale-95 transition-all"
          >
            <span>{step === 1 ? "Continue" : "Confirm Booking"}</span>
            <span className="material-symbols-outlined text-xl font-icon">arrow_forward</span>
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
