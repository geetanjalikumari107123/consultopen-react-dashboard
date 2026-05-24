"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Map,
  TimerReset,
  HeartPulse,
  Users,
  BotMessageSquare,
  FolderClosed,
  Wallet,
  Settings,
  LogOut,
  EllipsisVertical,
} from "lucide-react";

export default function Sidebar() {
  const pathname = usePathname();
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/" },
    { name: "Career Roadmap", icon: Map, path: "/career-roadmap" },
    { name: "Session", icon: TimerReset, path: "/session" },
    { name: "Mental Wellness", icon: HeartPulse, path: "/mental-wellness" },
    {
      name: "Consultant Marketplace",
      icon: Users,
      path: "/consultant-marketplace",
    },
    { name: "ConsulTOpen AI", icon: BotMessageSquare, path: "/consultopen-ai" },
    { name: "Subscription", icon: FolderClosed, path: "/subscription" },
    { name: "Wallet & Payments", icon: Wallet, path: "/wallet-and-payment" },
    { name: "Settings", icon: Settings, path: "/settings" },
    { name: "Logout", icon: LogOut, path: "/logout" },
  ];
  return (
    <div className="w-64 h-screen bg-white flex flex-col border-r border-gray-200">
      <div className="h-16 flex items-center justify-center border-b border-gray-200">
        <img
          src="/images/logo.png"
          alt="logo"
          className="h-8 w-auto object-contain"
        />
      </div>
      <div className="flex-1 flex flex-col justify-between p-4">
        <nav className="space-y-3">
          {menuItems.map((item, i) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;

            const isDividerAfterConsultAI = item.name === "ConsulTOpen AI";

            return (
              <div key={i}>
                <Link href={item.path}>
                  <div
                    className={`flex items-center gap-3 p-2 rounded-lg cursor-pointer transition ${
                      isActive
                        ? "bg-teal-600 text-white"
                        : "hover:bg-gray-100 text-gray-700"
                    }`}
                  >
                    <Icon size={18} />
                    <span className="text-sm">{item.name}</span>
                  </div>
                </Link>

                {isDividerAfterConsultAI && (
                  <hr className="my-3 border-gray-200" />
                )}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3 p-2 bg-gray-100 rounded-lg">
          <img
            src="/images/student-avatar.png"
            alt=""
            className="rounded-full h-10 w-10 object-cover"
          />
          <div className="flex flex-col">
            <p className="text-sm font-semibold">Alex Miller</p>
            <p className="text-xs uppercase text-orange-500">Elite</p>
          </div>
          <EllipsisVertical
            size={18}
            className="text-gray-400 ml-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}
