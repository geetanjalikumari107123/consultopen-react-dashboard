"use client";

import { useState } from "react";
import { SquareCheckBig } from "lucide-react";

import LockedItems from "./LockedItem";
import MindGym from "./MindGym";
import Card from "./ui/Card";
import SectionHeader from "./ui/SectionHeader";

import { roadmapTasks } from "@/data/mockData";
import { isTaskLocked } from "@/utils/roadMapHelper";

interface RoadmapTask {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  started: boolean;
  completed: boolean;
}

export default function BuildBasics() {
  const [tasks, setTasks] = useState<RoadmapTask[]>(roadmapTasks);

  const handleTaskAction = (id: number) => {
    setTasks((prev) =>
      prev.map((task) => {
        if (task.id === id) {
          if (!task.started) {
            return {
              ...task,
              started: true,
            };
          }

          if (task.started && !task.completed) {
            return {
              ...task,
              completed: true,
            };
          }
        }

        return task;
      })
    );
  };

  return (
    <>
      <Card className="bg-white">
        <SectionHeader
          icon={SquareCheckBig}
          iconClassName="text-teal-700"
          title="Build Basics"
          className="mb-4"
        />

        <div className="space-y-3 mb-4">
          {tasks.map((task, index) => {
            const isLocked = isTaskLocked(tasks, index);

            return (
              <LockedItems
                key={task.id}
                title={task.title}
                tag={task.tag}
                tagColor={task.tagColor}
                isDone={task.completed}
                isLocked={isLocked}
                buttonText={
                  task.completed
                    ? "Completed"
                    : task.started
                    ? "Continue"
                    : "Start"
                }
                onAction={() => handleTaskAction(task.id)}
              />
            );
          })}
        </div>
      </Card>

      <div className="mt-6">
        <MindGym />
      </div>
    </>
  );
}