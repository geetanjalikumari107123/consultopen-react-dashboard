import { LucideIcon } from "lucide-react";

interface SectionHeaderProps {
  icon?: LucideIcon;
  title: string;
  subtitle?: string;
  iconClassName?: string;
  titleClassName?: string;
  className?: string;
  iconSize?: number;
}

export default function SectionHeader({
  icon: Icon,
  title,
  subtitle,
  iconClassName = "text-pink-500",
  titleClassName = "text-gray-800",
  className = "",
  iconSize = 18,
}: SectionHeaderProps) {
  return (
    <div className={className}>
      <div className="flex items-center gap-2">
        {Icon && (
          <Icon
            size={iconSize}
            strokeWidth={2}
            className={iconClassName}
          />
        )}

        <span className={`text-md font-semibold ${titleClassName}`}>
          {title}
        </span>
      </div>

      {subtitle && (
        <p className="text-sm text-gray-500 mt-1">
          {subtitle}
        </p>
      )}
    </div>
  );
}