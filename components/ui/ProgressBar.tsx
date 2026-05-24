interface ProgressBarProps {
  value?: number;
  color?: string;
  height?: string;
  showPercentage?: boolean;
  className?: string;
}

export default function ProgressBar({
  value = 0,
  color = "bg-teal-500",
  height = "h-2",
  showPercentage = false,
  className = "",
}: ProgressBarProps) {
  return (
    <div className={className}>
      {showPercentage && (
        <div className="flex justify-end mb-1">
          <span className="text-xs font-medium text-gray-600">
            {value}%
          </span>
        </div>
      )}

      <div className={`${height} bg-gray-200 rounded-full overflow-hidden`}>
        <div
          className={`${height} ${color} rounded-full transition-all duration-500`}
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}