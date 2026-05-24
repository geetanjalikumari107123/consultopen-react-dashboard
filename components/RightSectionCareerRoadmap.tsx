import {
  Sparkles,
  BookOpen,
  SquareArrowOutUpRight,
  Download,
  Target,
} from "lucide-react";
import Card from "./ui/Card";
import BookButton from "./ui/BookButton";
import ExpertCard from "./ui/ExpertCard";
import SectionHeader from "./ui/SectionHeader";
import { RightSectionCareerRoadmapProps } from "@/types/roadmap";
export default function RightSectionCareerRoadmap({
  progress,
  completedTasks,
  tasks,
}: RightSectionCareerRoadmapProps) {
  const percentage: number = progress;
const size: number = 96;
const stroke: number = 8;

const radius: number = (size - stroke) / 2;
const circumference: number = 2 * Math.PI * radius;
const offset: number =
  circumference - (percentage / 100) * circumference;

  return (
    <div className="space-y-6">
      <Card className="bg-white p-4">
        <SectionHeader
          icon={Target}
          iconClassName="text-orange-500"
          title="Journey Progress"
          className="flex items-center justify-center mb-4"
        ></SectionHeader>

        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <svg
              width={size}
              height={size}
              style={{ transform: "rotate(-90deg)" }}
            >
              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#e5e7eb"
                strokeWidth={stroke}
                fill="none"
              />

              <circle
                cx={size / 2}
                cy={size / 2}
                r={radius}
                stroke="#f97316"
                strokeWidth={stroke}
                fill="none"
                strokeLinecap="round"
                strokeDasharray={circumference}
                strokeDashoffset={offset}
                className="transition-all duration-700"
              />
            </svg>

            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-semibold text-orange-500">
                {percentage}%
              </span>
              <span className="text-[10px] text-gray-400">Completed</span>
            </div>
          </div>

          <div className="w-full h-px bg-gray-200 my-4"></div>

          <div className="flex w-full justify-between text-sm text-gray-600">
            <div className="flex-1 text-center">
              <p className="font-semibold">{completedTasks}</p>
              <p className="text-xs text-gray-400">Tasks Done</p>
            </div>

            <div className="w-px bg-gray-200"></div>

            <div className="flex-1 text-center">
              <p className="font-semibold">{tasks.length}</p>
              <p className="text-xs text-gray-400">Milestones</p>
            </div>
          </div>
        </div>
      </Card>

      <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center">
        <SectionHeader
          icon={Sparkles}
          iconClassName="text-green-600"
          title="Special Recommendation"
          titleClassName="text-green-600"
          className="flex items-center justify-center mb-4"
        ></SectionHeader>

        <h5 className="text-md text-gray-800 font-semibold mb-2">
          Need Help Planning?
        </h5>

        <p className="text-sm text-gray-500 mb-4">
          Discuss your current progress and board preparation strategy.
        </p>

        <ExpertCard
          src="/images/mukund.png"
          alt="Mukund Tyagi"
          name="Mukund Tyagi"
          designation="Academic Planner & Counsellor"
          rating="4.2"
          className="mb-4"
        />

        <BookButton text="Book a Session" bgColor="bg-green-500" />
      </div>

      <Card className="bg-white p-4">
        <SectionHeader
          icon={BookOpen}
          iconClassName="text-orange-500"
          title="Quick Learning Resources"
          className="mb-4"
        ></SectionHeader>

        <div className="space-y-3">
          <div className="flex items-center gap-3 border border-gray-100 rounded-lg p-2">
            <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
              <img src="/images/youtube.svg" alt="youtube-icon" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">
                Motion & Energy Explained in 10 Minutes
              </p>
              <p className="text-xs text-gray-400">Channel: Khan Academy</p>
            </div>
            <SquareArrowOutUpRight size={16} className="text-teal-600" />
          </div>

          <div className="flex items-center gap-3 border border-gray-100 rounded-lg p-2">
            <div className="w-8 h-8 bg-red-50 rounded flex items-center justify-center">
              <img src="/images/pdf.svg" alt="PDF Icon" />
            </div>
            <div className="flex-1">
              <p className="text-sm text-gray-800">Motion & Energy PDF</p>
              <p className="text-xs text-gray-400">NCERT</p>
            </div>
            <Download size={16} className="text-orange-500" />
          </div>
        </div>
      </Card>
    </div>
  );
}
