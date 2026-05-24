import { SquareCheckBig } from "lucide-react";
import LockedItem from "./LockedItem.jsx";
import MindGym from "./MindGym.jsx";

export default function BuildBasics() {
  return (
    <>
      <div className="border border-gray-200 rounded-lg p-4 bg-white">
        <div className="flex items-center gap-2 mb-6">
          <SquareCheckBig size={18} className="text-teal-700" />
          <h2 className="font-semibold text-gray-800">Build Basics</h2>
        </div>

        <div className="space-y-3 mb-4">
          <LockedItem
            title="Q&A’s"
            tag="Test"
            tagColor="purple"
            isDone={false}
            buttonText="Start"
          />
          <LockedItem
            title="Practice Algebra Problems Daily"
            tag="Maths"
            tagColor="red"
            isDone={false}
            buttonText="Start"
          />
          <LockedItem
            title="Study Motion and Energy Concepts"
            tag="Science"
            tagColor="gray"
            isLocked={false}
            buttonText="Continue"
            isDone={false}
          />

          <LockedItem
            title="Solve 20 Maths Question Daily"
            tag="Maths"
            tagColor="green"
            isLocked={false}
            isDone={true}
          />

          <LockedItem
            title="Watch a Science Concept Video"
            tag="Exploration"
            tagColor="green"
            isLocked={false}
          />
          <LockedItem
            title="Follow a Weekly Study Plan"
            tag="Habbit"
            tagColor="pink"
            isLocked={false}
          />
        </div>
      </div>
      <div className="mt-6">
        <MindGym />
      </div>
    </>
  );
}
