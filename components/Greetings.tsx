"use client";

import { useEffect, useState } from "react";

interface GreetingsProps {
  name: string;
}

export default function Greetings({
  name,
}: GreetingsProps) {
  const [hour, setHour] = useState<number>(0);

  useEffect(() => {
    setHour(new Date().getHours());
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold text-teal-600 mb-4">
        {hour < 12
          ? "Good Morning"
          : hour < 18
          ? "Good Afternoon"
          : "Good Evening"}
        , {name} 👋
      </h1>
    </div>
  );
}