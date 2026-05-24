import {
  Activity,
  icons,
  TriangleAlert,
  ArrowRight,
  Star,
  FlaskConical,
  Calculator,
} from "lucide-react";
import MoodBar from "../components/MoodBar.jsx";
export default function RightPanel() {
  const data = [
    { value: 100, icon: "/images/mon.svg", from: "from-purple-400", to: "to-purple-600" },
    { value: 100, icon: "/images/tue.svg", from: "from-green-400", to: "to-green-600" },
    { value: 100, icon: "/images/wed.svg", from: "from-pink-400", to: "to-pink-600" },
    { value: 100, icon: "/images/thu.svg", from: "from-cyan-400", to: "to-cyan-600" },
    { value: 100, icon: "/images/fri.svg", from: "from-red-400", to: "to-red-600" },
    { value: 40, from: "from-gray-300", to: "to-gray-400" },
    { value: 0, from: "from-gray-200", to: "to-gray-300" },
  ];

  const days = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
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
          {data.map((item, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <MoodBar {...item} />
              <span className="text-xs text-gray-500">{days[i]}</span>
            </div>
          ))}
        </div>
        <div className="flex items-start gap-2">
          <TriangleAlert size={18} className="text-amber-500 mt-4" />
          <p className="text-sm text-gray-800 border-b border-gray-200 py-4">
            Your mood this week suggests increased stress related to your
            future.
          </p>
        </div>
        <div className="text-center p-4">
          <p className="bg-pink-200 text-pink-500 p-2 rounded-4xl text-md w-50 mx-auto">
            Based on mood log
          </p>
          <h3 className="text-2xl font-semibold text-pink-500 my-2">
            Recommended for You
          </h3>

          <img
            src="/images/mukund.png"
            className="mx-auto rounded-full w-16 h-16 object-cover mt-3"
          />

          <h3 className="text-lg text-gray-800 font-semibold">Mukund Tyagi</h3>
          <p className="text-sm text-gray-600">(Student Wellbeing Therapist)</p>
          <div className="flex items-center gap-2 justify-center mt-1">
            <Star size={14} className="text-orange-400 fill-orange-400" />
            <p className="text-xs text-gray-600">
              <span className="text-amber-500">4.9</span> (120+ Sessions)
            </p>
          </div>
          <button className="mt-8 w-full bg-pink-500 text-white px-4 py-2 rounded-lg text-sm">
            Book a Therapy Session{" "}
            <ArrowRight size={16} className="inline-block" />
          </button>
        </div>
      </div>

      <div className="border border-gray-300 rounded-lg p-4 bg-white">
        <div className="flex items-center gap-2 mb-4">
          <Activity size={18} className="text-teal-600" />
          <h2 className="font-semibold text-gray-800 text-lg">Skills Progress</h2>
        </div>
        {[
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
        ].map((skill, i) => {
          const Icon = skill.icon; // ✅ important

          return (
            <div key={i} className="flex items-start gap-3 mb-4">
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

                <div className="h-2.5 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-teal-600 rounded-full"
                    style={{ width: `${skill.val}%` }}
                  ></div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
