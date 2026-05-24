import { CircleArrowRight, Clock4, Target } from "lucide-react";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";

export default function Focus() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <Card className="md:col-span-8 p-4">
        <SectionHeader
          icon={Target}
          title="Today's Focus!"
          className="mb-4"
        />

        <Card className="border-2 p-4">
          <h4 className="text-xl font-semibold mb-2">
            Study Motion and Energy Concepts
          </h4>

          <ul>
            <li className="flex gap-2 items-center py-2">
              <CircleArrowRight
                size={16}
                className="text-teal-600"
              />
              Understand speed, velocity, and acceleration
            </li>

            <li className="flex gap-2 items-center py-2">
              <Clock4
                size={16}
                className="text-gray-600"
              />
              Solve 5–10 basic numerical problems
            </li>
          </ul>
        </Card>
      </Card>

      <div className="md:col-span-4">
        <img
          src="/images/focus-right.svg"
          alt="Focus Illustration"
          className="h-60 w-full object-cover rounded-md md:h-auto"
        />
      </div>
    </div>
  );
}