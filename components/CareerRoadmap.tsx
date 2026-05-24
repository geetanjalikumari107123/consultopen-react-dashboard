import { Map, Check, Lock, Target } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";
import Button from "./ui/Button";

export default function CareerRoadmap() {
  return (
    <Card padding="p-4" className="bg-white">
      <div className="flex items-center justify-between mb-6">
        <SectionHeader
          icon={Map}
          iconClassName="text-teal-600"
          title="Career Roadmap"
        />

        <Button variant="success" size="sm">
          View Full Roadmap
        </Button>
      </div>

      <div className="relative mb-6">
        <div className="absolute top-3 left-0 w-full h-0.5 bg-gray-200"></div>
        <div className="absolute top-3 left-0 h-0.5 bg-teal-600 w-[25%]"></div>

        <div className="flex justify-between relative">
          {["Build Basics", "Strengthen Concepts", "Score in Boards", "PCM Stream"].map(
            (item, index) => {
              const isCompleted = index === 0;

              return (
                <div
                  key={item}
                  className="flex flex-col items-center text-center w-1/4"
                >
                  <div
                    className={`w-6 h-6 flex items-center justify-center rounded-full z-10 ${
                      isCompleted
                        ? "bg-teal-600 text-white"
                        : "border border-gray-300 bg-white"
                    }`}
                  >
                    {isCompleted ? (
                      <Check size={14} />
                    ) : (
                      <Lock size={12} className="text-gray-400" />
                    )}
                  </div>

                  <p
                    className={`text-sm mt-2 ${
                      isCompleted ? "text-gray-700" : "text-gray-500"
                    }`}
                  >
                    {item}
                  </p>
                </div>
              );
            }
          )}
        </div>
      </div>

      <div className="flex items-center justify-between bg-gray-100 px-4 py-3 rounded-lg">
        <div className="flex items-center gap-2 text-sm text-teal-600 font-medium">
          <Target size={16} className="text-teal-600" />
          <span>Next Milestone: Strengthen Concepts</span>
        </div>

        <span className="text-sm font-semibold text-teal-600">65%</span>
      </div>
    </Card>
  );
}