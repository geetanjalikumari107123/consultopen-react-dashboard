import {
  HeartPulse,
  Wind,
  Zap,
  Dumbbell,
  Brain,
  Clock,
  ChevronRight,
  LucideIcon,
} from "lucide-react";
import SectionHeader from "./ui/SectionHeader";

interface MindGymCard {
  title: string;
  desc: string;
  time: string;
  Icon: LucideIcon;
  bg: string;
}

export default function MindGym() {
  const cards: MindGymCard[] = [
    {
      title: "Breathing Exercises",
      desc: "Calm and relax",
      time: "3-5 minutes",
      Icon: Wind,
      bg: "bg-gradient-to-br from-blue-100 to-blue-200",
    },
    {
      title: "Focus Exercises",
      desc: "Boost concentration",
      time: "5-10 minutes",
      Icon: Zap,
      bg: "bg-gradient-to-br from-yellow-100 to-yellow-200",
    },
    {
      title: "Muscle Relaxation",
      desc: "Release body tension",
      time: "25-30 minutes",
      Icon: Dumbbell,
      bg: "bg-gradient-to-br from-purple-100 to-purple-200",
    },
    {
      title: "Study Focus Reset",
      desc: "Sharpen your mind",
      time: "3 minutes",
      Icon: Brain,
      bg: "bg-gradient-to-br from-pink-100 to-pink-200",
    },
  ];

  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white">
      <div className="flex items-start gap-3 mb-6">
        <div className="p-2 bg-amber-100 rounded-lg">
          <HeartPulse className="text-amber-600 w-5 h-5" />
        </div>

        <SectionHeader
          title="Mind Gym"
          subtitle="Suggests mindfulness and focus activities to keep your mind sharp and calm."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {cards.map(({ title, desc, time, Icon, bg }) => (
          <div
            key={title}
            className={`p-4 rounded-xl ${bg} flex flex-col justify-between`}
          >
            <div className="flex items-start gap-3">
              <div className="p-2 bg-white/70 rounded-lg">
                <Icon className="w-5 h-5 text-gray-700" />
              </div>

              <div>
                <h4 className="font-semibold text-gray-800">{title}</h4>
                <p className="text-sm text-gray-600">{desc}</p>
              </div>
            </div>

            <div className="flex items-center justify-between mt-6 bg-white/40 rounded-lg px-3 py-2">
              <div className="flex items-center gap-2 text-sm text-gray-700">
                <Clock size={14} />
                {time}
              </div>

              <button
                type="button"
                className="flex items-center gap-1 text-sm bg-white px-3 py-1.5 rounded-full shadow-sm"
              >
                Start <ChevronRight size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}