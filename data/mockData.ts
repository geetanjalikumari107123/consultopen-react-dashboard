import { RoadmapTask } from "@/types/roadmap";
import { WeeklyProgress } from "@/types/progress";

export const roadmapTasks: RoadmapTask[] = [
  {
    id: 1,
    title: "Study Motion and Energy Concepts",
    tag: "Science",
    tagColor: "red",
    started: false,
    completed: false,
  },
  {
    id: 2,
    title: "Practice Algebra Problems Daily",
    tag: "Maths",
    tagColor: "green",
    started: true,
    completed: false,
  },
  {
    id: 3,
    title: "Solve 20 Maths Question Daily",
    tag: "Maths",
    tagColor: "green",
    started: true,
    completed: true,
  },
  {
    id: 4,
    title: "Watch a Science Concept Video",
    tag: "Video 10 min",
    tagColor: "gray",
    started: true,
    completed: true,
  },
  {
    id: 5,
    title: "Follow a Weekly Study Plan",
    tag: "Habit",
    tagColor: "pink",
    started: false,
    completed: false,
  },
];

export const weeklyProgressData: WeeklyProgress[] = [
  {
    value: 100,
    icon: "/images/mon.svg",
    from: "from-purple-400",
    to: "to-purple-600",
  },
  {
    value: 100,
    icon: "/images/tue.svg",
    from: "from-green-400",
    to: "to-green-600",
  },
  {
    value: 100,
    icon: "/images/wed.svg",
    from: "from-pink-400",
    to: "to-pink-600",
  },
  {
    value: 100,
    icon: "/images/thu.svg",
    from: "from-cyan-400",
    to: "to-cyan-600",
  },
  {
    value: 100,
    icon: "/images/fri.svg",
    from: "from-red-400",
    to: "to-red-600",
  },
  {
    value: 40,
    from: "from-gray-300",
    to: "to-gray-400",
  },
  {
    value: 0,
    from: "from-gray-200",
    to: "to-gray-300",
  },
];