
import { CircleArrowRight, Clock4, Target } from "lucide-react";

export default function Focus() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">

      <div className="md:col-span-8 border border-gray-200 rounded-md p-4">
        
        <div className="flex items-center gap-2 mb-3">
          <Target size={18} className="text-pink-500" />
          <span className="text-md font-semibold">Today's Focus!</span>
        </div>

        <div className="border-2 border-gray-200 p-4 rounded-lg">
          <h4 className="text-xl font-semibold mb-2">
            Study Motion and Energy Concepts
          </h4>

          <ul>
            <li className="flex gap-2 items-center py-2">
              <CircleArrowRight size={16} className="text-teal-600" />
              Understand speed, velocity, and acceleration
            </li>

            <li className="flex gap-2 items-center py-2">
              <Clock4 size={16} className="text-gray-600" />
              Solve 5–10 basic numerical problems
            </li>
          </ul>
        </div>
      </div>

      <div className="md:col-span-4">
        <img
          src="/images/focus-right.svg"
          alt=""
          className="h-60 w-full object-cover rounded-md md:h-auto"
        />
      </div>

    </div>
  );
}