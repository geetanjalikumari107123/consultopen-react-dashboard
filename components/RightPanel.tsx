import {
  Activity,
  TriangleAlert,
  FlaskConical,
  Calculator,
  LucideIcon,
} from "lucide-react";

import MoodBar from "../components/MoodBar";
import SectionHeader from "./ui/SectionHeader";
import ProgressBar from "./ui/ProgressBar";
import ExpertCard from "./ui/ExpertCard";
import Button from "./ui/Button";
import BookButton from "./ui/BookButton";
import { weeklyProgressData } from "../data/mockData";

interface SkillProgress {
  name: string;
  val: number;
  icon: LucideIcon;
  iconBg: string;
  iconColor: string;
}

export default function RightPanel() {
  const days: string[] = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

  const skills: SkillProgress[] = [
    {
      name: "Math Problem Solving",
      val: 80,
      icon: Calculator,
      iconBg: "bg-purple-100",
      iconColor: "text-purple-600",
    },
    {
      name: "Science Concepts",
      val: 70,
      icon: FlaskConical,
      iconBg: "bg-orange-100",
      iconColor: "text-orange-500",
    },
  ];

  return (
    <div className="space-y-6">
      <div className="border border-gray-300 rounded-md p-4 bg-white">
        <div className="flex items-center gap-2 mb-1">
          <Activity size={18} className="text-red-600" />
          <h2 className="font-semibold text-gray-800 mb-2">
            Mood & Activity Trends
          </h2>
        </div>

        <p className="text-gray-400 text-sm">
          Emotional wellbeing & platform engagement based on your daily
          check-ins.
        </p>

        <div className="flex items-end justify-between h-40 border-b border-gray-200 pb-2 mt-6">
          {weeklyProgressData.map((item, index) => (
            <div
              key={days[index]}
              className="flex flex-col items-center gap-2"
            >
              <MoodBar {...item} />
              <span className="text-xs text-gray-500">
                {days[index]}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-start gap-2">
          <TriangleAlert
            size={18}
            className="text-amber-500 mt-4"
          />
          <p className="text-sm text-gray-800 border-b border-gray-200 py-4">
            Your mood this week suggests increased stress related to your
            future.
          </p>
        </div>

        <div className="text-center p-4">
          <Button variant="primary" size="md">
            Based on mood log
          </Button>

          <h3 className="text-2xl font-semibold text-pink-500 my-2">
            Recommended for You
          </h3>

          <ExpertCard
            src="/images/mukund.png"
            alt="Mukund Tyagi"
            name="Mukund Tyagi"
            designation="Student Wellbeing Therapist"
            rating="4.9"
            sessions="120+ Sessions"
          />

          <BookButton
            text="Book a Therapy Session"
            bgColor="bg-pink-500"
            className="mt-8"
          />
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 bg-white">
        <SectionHeader
          className="mb-4"
          icon={Activity}
          iconClassName="text-teal-600"
          title="Skills Progress"
        />

        {skills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="flex items-start gap-3 mb-4"
            >
              <div
                className={`w-10 h-10 flex items-center justify-center rounded-lg ${skill.iconBg}`}
              >
                <Icon className={`w-5 h-5 ${skill.iconColor}`} />
              </div>

              <div className="flex-1">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-gray-800 font-medium text-sm">
                    {skill.name}
                  </span>

                  <span className="text-green-600 font-semibold text-sm">
                    {skill.val}%
                  </span>
                </div>

                <ProgressBar value={skill.val} color="bg-teal-600" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}