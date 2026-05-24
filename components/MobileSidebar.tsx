import { X } from "lucide-react";
import { SidebarControlProps } from "@/types/layout";
import Sidebar from "./Sidebar";

export default function MobileSidebar({
  open,
  setOpen,
}: SidebarControlProps) {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white z-50 transform transition-transform duration-300
        ${open ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
          >
            <X />
          </button>
        </div>

        <Sidebar />
      </div>
    </>
  );
}