export type TagColor =
  | "purple"
  | "red"
  | "gray"
  | "green"
  | "pink";

export interface RoadmapTask {
  id: number;
  title: string;
  tag: string;
  tagColor: TagColor;
  started: boolean;
  completed: boolean;
}

export interface RightSectionCareerRoadmapProps {
  progress: number;
  completedTasks: number;
  tasks: RoadmapTask[];
}