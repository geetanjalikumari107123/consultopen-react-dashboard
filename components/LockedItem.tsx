import { Check, LockKeyhole } from "lucide-react";
import Button from "./ui/Button";

type TagColor =
  | "purple"
  | "red"
  | "gray"
  | "green"
  | "pink";

interface LockedItemsProps {
  title: string;
  tag: string;
  tagColor?: TagColor;
  buttonText: string;
  isDone?: boolean;
  isLocked?: boolean;
  onAction?: () => void;
}

export default function LockedItems({
  title,
  tag,
  tagColor = "purple",
  buttonText,
  isDone = false,
  isLocked = true,
  onAction,
}: LockedItemsProps) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between rounded-md border border-gray-400 px-4 py-3">
        <div className="flex gap-3 items-start">
          <div
            className={`w-4 h-4 flex items-center justify-center rounded ${
              isDone ? "bg-teal-600" : "border border-gray-400"
            }`}
          >
            {isDone && <Check size={14} className="text-white" />}
          </div>

          <div>
            <p
              className={`text-sm font-medium ${
                isDone ? "line-through text-gray-600" : ""
              }`}
            >
              {title}
            </p>

            <span
              className={`text-xs px-2 py-1 rounded-md mt-1 inline-block
                ${tagColor === "purple" && "bg-purple-100 text-purple-600"}
                ${tagColor === "red" && "bg-red-100 text-red-600"}
                ${tagColor === "gray" && "bg-gray-100 text-gray-600"}
                ${tagColor === "green" && "bg-green-100 text-green-600"}
                ${tagColor === "pink" && "bg-pink-100 text-pink-600"}
              `}
            >
              {tag}
            </span>
          </div>
        </div>

        <Button
          onClick={onAction}
          disabled={isLocked || isDone}
          size="sm"
          variant={
            isDone
              ? "success"
              : isLocked
              ? "locked"
              : "action"
          }
        >
          {buttonText}
        </Button>
      </div>

      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/60 backdrop-blur-[1px] rounded-md">
          <LockKeyhole
            size={16}
            className="text-gray-400"
          />
          <span className="text-xs mt-1 text-gray-400">
            Locked
          </span>
        </div>
      )}
    </div>
  );
}