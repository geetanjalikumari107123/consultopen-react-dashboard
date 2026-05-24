import { Map, Check, Lock, Target } from "lucide-react";

export default function CareerRoadmap() {
  return (
    <div className="border border-gray-200 rounded-md p-4 bg-white">

      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          <Map size={18} className="text-teal-600" />
          <h2 className="font-semibold text-gray-800">Career Roadmap</h2>
        </div>

        <button className="text-sm bg-teal-100 text-teal-600 px-3 py-1 rounded-full">
          View Full Roadmap
        </button>
      </div>

      <div className="relative mb-6">

        <div className="absolute top-3 left-0 w-full h-0.5 bg-gray-200"></div>

        <div className="absolute top-3 left-0 h-0.5 bg-teal-600 w-[25%]"></div>

        <div className="flex justify-between relative">
  
          <div className="flex flex-col items-center text-center w-1/4">
            <div className="w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white z-10">
              <Check size={14} />
            </div>
            <p className="text-sm mt-2 text-gray-700">Build Basics</p>
          </div>

          <div className="flex flex-col items-center text-center w-1/4">
            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white z-10">
              <Lock size={12} className="text-gray-400" />
            </div>
            <p className="text-sm mt-2 text-gray-500">Strengthen Concepts</p>
          </div>

          <div className="flex flex-col items-center text-center w-1/4">
            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white z-10">
              <Lock size={12} className="text-gray-400" />
            </div>
            <p className="text-sm mt-2 text-gray-500">Score in Boards</p>
          </div>

          <div className="flex flex-col items-center text-center w-1/4">
            <div className="w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white z-10">
              <Lock size={12} className="text-gray-400" />
            </div>
            <p className="text-sm mt-2 text-gray-500">PCM Stream</p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg">
        <div className="flex items-center gap-2 text-sm text-teal-600 font-medium">
          <Target size={16} className="text-teal-600"/>
          <span>Next Milestone: Strengthen Concepts</span>
        </div>

        <span className="text-sm font-semibold text-teal-600">65%</span>
      </div>
    </div>
  );
}
