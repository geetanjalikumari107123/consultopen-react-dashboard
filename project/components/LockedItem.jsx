import { LockKeyhole, Check } from "lucide-react";

export default function LockedItem({
  title,
  tag,
  tagColor = "purple",
  buttonText,
  isLocked = true,
  isDone = true,
}) {
  return (
    <div className="relative">
      <div className="flex items-center justify-between border border-gray-300 rounded-md px-4 py-3">
        <div className="flex gap-3 items-start">
          <div className={`w-4 h-4 flex items-center justify-center rounded ${isDone ? "bg-teal-600" : "border border-gray-400"}`}
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
                ${tagColor === "gray" && "bg-gray-50 text-gray-600"}
                ${tagColor === "green" && "bg-green-100 text-green-600"}
                ${tagColor === "pink" && "bg-pink-100 text-pink-700"}
              `}
            >
              {tag}
            </span>
          </div>
        </div>

        {buttonText && (
          <button className="text-md px-4 text-teal-600 border border-teal-500 rounded-full hover:bg-teal-50 transition">
            {buttonText}
          </button>
        )}
      </div>

      {isLocked && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-white/20 backdrop-blur-[1px] rounded-md">
          <LockKeyhole size={16} className="text-gray-400" />
          <span className="text-xs mt-1 text-gray-400">Locked</span>
        </div>
      )}
    </div>
  );
}
