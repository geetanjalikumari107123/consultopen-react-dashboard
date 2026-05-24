"use client";

import { useState } from "react";
import Sidebar from "@/components/Sidebar";
import Navbar from "@/components/Navbar";
import MobileSidebar from "@/components/MobileSidebar";

export default function ClientLayout({ children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex h-screen overflow-hidden">
      
      <div className="hidden lg:block">
        <Sidebar />
      </div>

      <MobileSidebar open={open} setOpen={setOpen} />

      <div className="flex-1 flex flex-col">
        <Navbar setOpen={setOpen} />

        <div className="flex-1 overflow-y-auto bg-gray-50 p-4 sm:p-6">
          {children}
        </div>
      </div>
    </div>
  );
}