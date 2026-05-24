import { RoadmapTask } from "@/types/roadmap";

export const calculateProgress = (
  tasks: RoadmapTask[]
): number => {
  const completedTasks = tasks.filter(
    (task) => task.completed
  ).length;

  return Math.round(
    (completedTasks / tasks.length) * 100
  );
};

export const getCompletedTasks = (
  tasks: RoadmapTask[]
): number => {
  return tasks.filter(
    (task) => task.completed
  ).length;
};

export const isTaskLocked = (
  tasks: RoadmapTask[],
  index: number
): boolean => {
  return (
    index !== 0 &&
    !tasks[index - 1].completed
  );
};