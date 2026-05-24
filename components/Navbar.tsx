"use client";

import { Search, Bell, MessageSquare, Menu } from "lucide-react";
import { useState, Dispatch, SetStateAction } from "react";

interface NavbarProps {
  setOpen: Dispatch<SetStateAction<boolean>>;
}

export default function Navbar({
  setOpen,
}: NavbarProps) {
  const [searchText, setSearchText] = useState<string>("");

  return (
    <div className="h-16 flex items-center justify-between bg-white px-4 sm:px-6 border-b border-gray-200">
      <div className="flex items-center gap-3">
        <button
          type="button"
          aria-label="Open menu"
          className="lg:hidden"
          onClick={() => setOpen(true)}
        >
          <Menu size={22} />
        </button>

        <div className="hidden sm:flex items-center bg-gray-100 px-3 h-10 rounded-lg w-55 md:w-[320px]">
          <Search size={16} className="text-gray-500" />

          <input
            type="text"
            placeholder="Search..."
            aria-label="Search"
            name="search"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
            className="ml-2 w-full bg-transparent outline-none text-sm"
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <div className="relative p-2 rounded-full border border-gray-200">
          <Bell size={18} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full"></span>
        </div>

        <div className="p-2 rounded-full border border-gray-200">
          <MessageSquare size={18} />
        </div>

        <button
          type="button"
          className="bg-black text-white px-3 sm:px-4 py-2 rounded-lg text-sm"
        >
          Upgrade
        </button>
      </div>
    </div>
  );
}