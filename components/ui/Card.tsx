import { ReactNode, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  padding?: string;
  hover?: boolean;
}

export default function Card({
  children,
  className = "",
  padding = "p-6",
  hover = false,
  ...props
}: CardProps) {
  return (
    <div
      className={`
        rounded-lg border border-gray-200
        ${padding}
        ${hover ? "hover:shadow-md transition-shadow duration-200" : ""}
        ${className}
      `}
      {...props}
    >
      {children}
    </div>
  );
}