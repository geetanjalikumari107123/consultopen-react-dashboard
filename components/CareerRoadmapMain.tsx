"use client";

import { useState } from "react";
import { Check, Lock, Map } from "lucide-react";

import LockedItem from "./LockedItem";
import RightSectionCareerRoadmap from "./RightSectionCareerRoadmap";

import Button from "./ui/Button";
import ProgressBar from "./ui/ProgressBar";
import SectionHeader from "./ui/SectionHeader";
import Card from "./ui/Card";

import { roadmapTasks } from "@/data/mockData";
import {
  calculateProgress,
  getCompletedTasks,
  isTaskLocked,
} from "@/utils/roadMapHelper";

import { RoadmapTask } from "@/types/roadmap";

export default function CareerRoadmapMain() {
  const [tasks, setTasks] = useState<RoadmapTask[]>(roadmapTasks);

  const completedTasks = getCompletedTasks(tasks);
  const progress = calculateProgress(tasks);

  const handleTaskAction = (id: number) => {
    setTasks((prev: RoadmapTask[]) =>
      prev.map((task: RoadmapTask) => {
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
    <div className="flex-1 bg-gray-50">
      <SectionHeader
        icon={Map}
        iconClassName="text-teal-600"
        title="Sessions"
        titleClassName="text-xl"
        subtitle="Track your learning milestones and prepare for the PCM stream selection."
        className="mb-4"
        iconSize={22}
      />

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

                <Card className="border-2 border-teal-500 bg-white p-5">
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-semibold text-gray-800">
                      Build Basics
                    </h3>

                    <Button variant="success" size="sm">
                      In Progress
                    </Button>
                  </div>

                  <p className="text-sm text-gray-500 mb-3">
                    You'll build a strong foundation in foundational math and
                    science principles.
                  </p>

                  <div className="flex justify-between text-xs text-gray-500 mb-1">
                    <span>
                      {completedTasks} of {tasks.length} tasks completed
                    </span>

                    <span className="text-teal-600 font-medium">
                      {progress}%
                    </span>
                  </div>

                  <ProgressBar value={progress} className="mb-4" />

                  <div className="space-y-3">
                    {tasks.map((task: RoadmapTask, index: number) => {
                      const locked = isTaskLocked(tasks, index);

                      return (
                        <LockedItem
                          key={task.id}
                          title={task.title}
                          tag={task.tag}
                          tagColor={task.tagColor}
                          isLocked={locked}
                          isDone={task.completed}
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
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="absolute -left-9 top-4 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white z-10">
                  <Lock size={12} className="text-gray-400" />
                </div>

                <Card className="w-full bg-gray-50 p-5">
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
                </Card>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="absolute -left-9 top-4 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white z-10">
                  <Lock size={12} className="text-gray-400" />
                </div>

                <Card className="w-full bg-gray-50 border-gray-200 p-5">
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
                </Card>
              </div>

              <div className="flex items-start gap-4 relative">
                <div className="absolute -left-9 top-4 w-6 h-6 flex items-center justify-center rounded-full border border-gray-300 bg-white z-10">
                  <Lock size={12} className="text-gray-400" />
                </div>

                <Card className="w-full bg-gray-50 border-gray-200 p-5">
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
                </Card>
              </div>
            </div>
          </div>
        </div>

        <RightSectionCareerRoadmap
          progress={progress}
          completedTasks={completedTasks}
          tasks={tasks}
        />
      </div>
    </div>
  );
}