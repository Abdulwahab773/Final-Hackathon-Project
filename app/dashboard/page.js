"use client";

import { redirect } from "next/navigation";
import { useEffect } from "react";

export default function DashboardPage() {
  useEffect(() => {
    redirect("/dashboard/overview");
  }, []);

  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <div className="flex flex-col items-center gap-4">
        <div className="size-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin"></div>
        <p className="font-bold text-slate-500 animate-pulse">Loading Dashboard...</p>
      </div>
    </div>
  );
}
