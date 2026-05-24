import {
  Star,
  ArrowRight,
  Sparkles,
  BookOpen,
  SquareArrowOutUpRight,
  Download,
  Target,
} from "lucide-react";
export default function RightSectionCareerRoadmap() {
  const percentage = 35;
  const size = 96; // 24 * 4 (w-24)
  const stroke = 8;

  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (percentage / 100) * circumference;

  return (
    <div className="space-y-6">
      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex items-center justify-center gap-2 mb-4">
          <Target size={18} className="text-orange-500" />
          <h4 className="font-semibold text-gray-800 text-md">
            Journey Progress
          </h4>
        </div>

        <div className="flex flex-col items-center">
          <div className="relative w-24 h-24">
            <svg width={size} height={size} className="rotate-120">
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
              <p className="font-semibold">3</p>
              <p className="text-xs text-gray-400">Tasks Done</p>
            </div>

            <div className="w-px bg-gray-200"></div>

            <div className="flex-1 text-center">
              <p className="font-semibold">1</p>
              <p className="text-xs text-gray-400">Milestones</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-green-50 border border-green-100 rounded-xl p-6 text-center">
        <div className="flex justify-center gap-2 mb-6">
          <Sparkles size={18} className="text-green-600" />
          <h4 className="text-green-600 font-semibold text-sm mb-2">
            Special Recommendation
          </h4>
        </div>

        <h5 className="text-md text-gray-800 font-semibold mb-2">
          Need Help Planning?
        </h5>

        <p className="text-sm text-gray-500 mb-4">
          Discuss your current progress and board preparation strategy.
        </p>

        <div className="bg-white border border-gray-200 rounded-xl p-4 mb-4">
          <img
            src="/images/mukund.png"
            className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
          />

          <p className="text-lg font-semibold text-gray-800">Mukund Tyagi</p>

          <p className="text-sm text-gray-700">
            (Academic Planner & Counsellor)
          </p>

          <div className="flex items-center justify-center gap-1 mt-1">
            <span className="text-xs text-gray-600 pr-2">Rating</span>
            <Star size={12} className="text-orange-400 fill-orange-400" />
            <span className="text-orange-500 text-xs">4.2</span>
          </div>
        </div>

        <button className="w-full bg-green-500 text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2">
          Book a Session
          <ArrowRight size={14} />
        </button>
      </div>

      <div className="bg-white border border-gray-200 rounded-xl p-4">
        <div className="flex gap-2 ">
          <BookOpen size={18} className="text-orange-500" />
          <h4 className="text-sm font-semibold text-gray-800 mb-4">
            Quick Learning Resources
          </h4>
        </div>

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
      </div>
    </div>
  );
}
