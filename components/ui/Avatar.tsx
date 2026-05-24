"use client";

import { useState } from "react";

type AvatarSize = "sm" | "md" | "lg" | "xl";

interface AvatarProps {
  src?: string;
  alt?: string;
  initials?: string;
  size?: AvatarSize;
  className?: string;
}

export default function Avatar({
  src,
  alt = "Avatar",
  initials = "U",
  size = "md",
  className = "",
}: AvatarProps) {
  const [error, setError] = useState<boolean>(false);

  const sizes: Record<AvatarSize, string> = {
    sm: "w-8 h-8",
    md: "w-12 h-12",
    lg: "w-16 h-16",
    xl: "w-20 h-20",
  };

  if (error || !src) {
    return (
      <div
        className={`
          ${sizes[size]}
          rounded-full
          bg-gray-200
          flex items-center justify-center
          font-medium text-gray-600
          ${className}
        `}
      >
        {initials}
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      onError={() => setError(true)}
      className={`
        rounded-full
        object-cover
        ${sizes[size]}
        ${className}
      `}
    />
  );
}