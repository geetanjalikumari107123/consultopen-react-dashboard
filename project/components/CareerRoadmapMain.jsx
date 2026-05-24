import { Check, Lock, Map } from "lucide-react";
import LockedItem from "./LockedItem";
import RightSectionCareerRoadmap from "./RightSectionCareerRoadmap.jsx";

export default function CareerRoadmapMain() {
  return (
    <div className="flex-1 bg-gray-50 p-4 sm:p-6">
      <div className="flex items-center gap-2">
        <Map size={22} className="text-teal-600" />
        <h1 className="text-xl font-semibold text-gray-800">Sessions</h1>
      </div>
      <p className="text-sm text-gray-500 mb-6">
        Track your learning milestones and prepare for the PCM stream selection.
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 relative space-y-6">
          <div className="relative pl-10">
            <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gray-200"></div>

            <div className="absolute left-4 top-0 h-[25%] w-0.5 bg-teal-600"></div>

            <div className="flex flex-col gap-6">
              <div className="relative">
                <div className="absolute -left-9 top-0 w-6 h-6 flex items-center justify-center rounded-full bg-teal-600 text-white z-10">
                  <Check size={14} />
                </div>

                <div className="border-2 border-teal-500 rounded-xl p-5 bg-white">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-800">
                      Build Basics
                    </h3>
                    <span className="text-xs bg-teal-100 text-teal-600 px-2 py-1 rounded-full">
                      In Progress
                    </span>
                  </div>

                  <p className="text-sm text-gray-500 mb-3">
                    You'll build a strong foundation in foundational math and
                    science principles.
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>3 of 6 tasks completed</span>
                    <span className="text-teal-600 font-medium">60%</span>
                  </div>

                  <div className="h-2 bg-gray-200 rounded-full mb-4">
                    <div className="h-2 bg-teal-500 rounded-full w-[60%]"></div>
                  </div>

                  <div className="space-y-3">
                    <LockedItem
                      title="Study Motion and Energy Concepts"
                      tag="Science"
                      tagColor="red"
                      isDone={false}
                      buttonText="Start"
                    />

                    <LockedItem
                      title="Study Motion and Energy Concepts"
                      tag="Science"
                      tagColor="red"
                      isDone={false}
                      buttonText="Start"
                    />

                    <LockedItem
                      title="Study Motion and Energy Concepts"
                      tag="Science"
                      tagColor="gray"
                      isLocked={false}
                      isDone={false}
                      buttonText="Continue"
                    />
                    <LockedItem
                      title="Solve 20 Maths Question Daily"
                      tag="Maths"
                      tagColor="green"
                      isLocked={false}
                      isDone={true}
                      buttonText="Continue"
                    />
                    <LockedItem
                      title="Watch a Science Concept Video"
                      tag="Video 10 min"
                      tagColor="red"
                      isLocked={false}
                      isDone={true}
                      buttonText="Completed"
                    />
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="absolute -left-9 top-4 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white z-10">
                  <Lock size={12} className="text-gray-400" />
                </div>

                <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="text-gray-700 text-md font-semibold">
                      Strengthen Concepts
                    </h5>

                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Lock size={12} />
                      Locked
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Dive deeper into advanced topics to prepare for your board
                    exams.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="absolute -left-9 top-4 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white z-10">
                  <Lock size={12} className="text-gray-400" />
                </div>

                <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="text-gray-700 text-md font-semibold">
                      Score in Boards
                    </h5>

                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Lock size={12} />
                      Locked
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Achieve target scores in preliminary and final board
                    examinations.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="absolute -left-9 top-4 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white z-10">
                  <Lock size={12} className="text-gray-400" />
                </div>

                <div className="w-full bg-gray-50 border border-gray-200 rounded-xl p-5">
                  <div className="flex justify-between items-center mb-1">
                    <h5 className="text-gray-700 text-md font-semibold">
                      PCM Stream Selection
                    </h5>

                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Lock size={12} />
                      Locked
                    </span>
                  </div>

                  <p className="text-gray-500 text-sm">
                    Finalize stream choice based on aptitude and board results.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <RightSectionCareerRoadmap />
      </div>
    </div>
  );
}
