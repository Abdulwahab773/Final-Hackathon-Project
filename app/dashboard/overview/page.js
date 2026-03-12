"use client";

import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';

const stats = [
  { name: "Total Doctors", value: "12", growth: "+2%", icon: "medical_information", color: "blue" },
  { name: "Total Patients", value: "1,240", growth: "+15%", icon: "personal_injury", color: "purple" },
  { name: "Total Appointments", value: "85", growth: "+8%", icon: "event_available", color: "orange" },
  { name: "Total Revenue", value: "$12,500", growth: "+12%", icon: "monetization_on", color: "emerald" },
];

const chartData = [
  { name: 'Mon', revenue: 4000, appointments: 24, fill: '#1975d2' },
  { name: 'Tue', revenue: 3000, appointments: 18, fill: '#6366f1' },
  { name: 'Wed', revenue: 2000, appointments: 22, fill: '#8b5cf6' },
  { name: 'Thu', revenue: 2780, appointments: 15, fill: '#d946ef' },
  { name: 'Fri', revenue: 1890, appointments: 20, fill: '#f43f5e' },
  { name: 'Sat', revenue: 2390, appointments: 25, fill: '#fb923c' },
  { name: 'Sun', revenue: 3490, appointments: 21, fill: '#10b981' },
];

const dailyInsights = [
  { title: "Peak Hours", value: "10:00 AM - 02:00 PM", description: "Busiest time expected today.", icon: "schedule", color: "text-blue-500" },
  { title: "Patient Flow", value: "Stable", description: "Average wait time: 15 mins.", icon: "flowsheet", color: "text-emerald-500" },
  { title: "Staff Status", value: "92% On-duty", description: "1 doctor on emergency leave.", icon: "badge", color: "text-orange-500" },
];

const recentAppointments = [
  { id: 1, patient: "John Miller", doctor: "Dr. Emily Stone", time: "09:30 AM", status: "Confirmed", initials: "JM" },
  { id: 2, patient: "Sarah Williams", doctor: "Dr. Michael Chen", time: "10:15 AM", status: "Pending", initials: "SW" },
  { id: 3, patient: "Alan Low", doctor: "Dr. Emily Stone", time: "11:00 AM", status: "Confirmed", initials: "AL" },
  { id: 4, patient: "David Kim", doctor: "Dr. Lisa Ray", time: "01:45 PM", status: "Confirmed", initials: "DK" },
];

export default function OverviewPage() {
  return (
    <div className="space-y-8 animate-in fade-in duration-700">
      <div>
        <h2 className="text-2xl lg:text-3xl font-semibold tracking-tight text-slate-900 dark:text-white">Dashboard Overview</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-1 font-medium">Welcome back! Here's what's happening with clinic today.</p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 hover:shadow-lg hover:shadow-slate-200/50 dark:hover:shadow-none transition-all duration-300 group">
            <div className="flex justify-between items-start">
              <div className={`p-2.5 rounded-xl transition-colors ${
                stat.color === 'blue' ? 'bg-blue-50 dark:bg-blue-900/20 text-blue-600' :
                stat.color === 'purple' ? 'bg-purple-50 dark:bg-purple-900/20 text-purple-600' :
                stat.color === 'orange' ? 'bg-orange-50 dark:bg-orange-900/20 text-orange-600' :
                'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-600'
              }`}>
                <span className="material-symbols-outlined text-2xl group-hover:scale-110 transition-transform">
                  {stat.icon}
                </span>
              </div>
              <span className="text-emerald-500 text-xs font-black bg-emerald-50 dark:bg-emerald-900/20 px-2.5 py-1 rounded-full">{stat.growth}</span>
            </div>
            <h3 className="text-slate-500 dark:text-slate-400 text-sm font-semibold mt-4">{stat.name}</h3>
            <p className="text-2xl font-black text-slate-900 dark:text-white mt-1">{stat.value}</p>
          </div>
        ))}
      </div>

      {/* Main Layout Grid: Chart and Daily Insights */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Revenue Bar Chart */}
        <div className="lg:col-span-2 bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Revenue & Appointments</h3>
              <p className="text-xs text-slate-400 font-medium mt-0.5">Weekly performance analysis</p>
            </div>
            <select className="bg-slate-50 dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-xl text-[11px] font-black uppercase tracking-wider focus:ring-4 focus:ring-primary/10 px-3 py-2 outline-none cursor-pointer">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
            </select>
          </div>
          
          <div className="h-72 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={chartData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" opacity={0.5} />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 10, fontWeight: 700, fill: '#94a3b8' }} 
                />
                <Tooltip 
                  cursor={{ fill: 'transparent' }}
                  contentStyle={{ 
                    borderRadius: '12px', 
                    border: 'none', 
                    boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
                    fontSize: '12px',
                    fontWeight: 600,
                    backgroundColor: '#1e293b',
                    color: '#fff'
                  }}
                  itemStyle={{ color: '#fff' }}
                />
                <Bar 
                  dataKey="revenue" 
                  radius={[6, 6, 0, 0]} 
                  barSize={32}
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.fill} fillOpacity={0.8} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Side Card: Daily Insights */}
        <div className="bg-white dark:bg-slate-900 p-6 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm flex flex-col">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Daily Insights</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Clinic operational status</p>
          </div>
          
          <div className="space-y-5 flex-1">
            {dailyInsights.map((insight) => (
              <div key={insight.title} className="p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border border-slate-100 dark:border-slate-700/50 hover:border-primary/20 transition-colors">
                <div className="flex items-center gap-3 mb-2">
                  <span className={`material-symbols-outlined text-xl ${insight.color}`}>
                    {insight.icon}
                  </span>
                  <span className="text-[11px] font-black uppercase tracking-wider text-slate-400">{insight.title}</span>
                </div>
                <p className="text-sm font-bold text-slate-900 dark:text-white">{insight.value}</p>
                <p className="text-[11px] text-slate-500 mt-0.5 font-medium">{insight.description}</p>
              </div>
            ))}
          </div>

          <button className="mt-6 w-full py-3 bg-slate-900 dark:bg-white dark:text-slate-900 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:brightness-125 transition-all shadow-lg active:scale-95">
            Optimize Schedule
          </button>
        </div>
      </div>

      {/* Recent Appointments Table */}
      <div className="bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden shadow-sm">
        <div className="px-6 py-5 border-b border-slate-200 dark:border-slate-800 flex justify-between items-center bg-slate-50/50 dark:bg-slate-800/50">
          <div>
            <h3 className="text-lg font-semibold text-slate-900 dark:text-white">Recent Appointments</h3>
            <p className="text-xs text-slate-400 font-medium mt-0.5">Latest 4 visitor bookings</p>
          </div>
          <button className="text-primary text-xs font-black uppercase tracking-wider hover:underline underline-offset-4 decoration-2">View All</button>
        </div>
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full text-left">
            <thead className="bg-slate-50/30 dark:bg-slate-800/30 text-slate-500 text-[10px] font-black uppercase tracking-widest">
              <tr>
                <th className="px-6 py-4">Patient</th>
                <th className="px-6 py-4">Doctor</th>
                <th className="px-6 py-4">Date & Time</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
              {recentAppointments.map((app) => (
                <tr key={app.id} className="hover:bg-slate-50/50 dark:hover:bg-slate-800/30 transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-full flex items-center justify-center text-[10px] font-black tracking-tighter ${
                        app.id % 2 === 0 ? 'bg-indigo-50 text-indigo-600 dark:bg-indigo-900/30' : 'bg-slate-100 text-slate-700 dark:bg-slate-700 dark:text-slate-300'
                      }`}>
                        {app.initials}
                      </div>
                      <p className="text-sm font-semibold text-slate-900 dark:text-white">{app.patient}</p>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-slate-600 dark:text-slate-400">{app.doctor}</td>
                  <td className="px-6 py-4 text-[12px] font-semibold text-slate-500 dark:text-slate-500">Oct 24, 2023 · {app.time}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border ${
                      app.status === 'Confirmed' 
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-100 dark:bg-emerald-900/20 dark:border-emerald-800 dark:text-emerald-400' 
                        : 'bg-orange-50 text-orange-700 border-orange-100 dark:bg-orange-900/20 dark:border-orange-800 dark:text-orange-400'
                    }`}>
                      {app.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="p-2 text-slate-300 hover:text-primary transition-colors hover:bg-slate-100 dark:hover:bg-slate-800 rounded-xl">
                      <span className="material-symbols-outlined text-xl">more_horiz</span>
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
