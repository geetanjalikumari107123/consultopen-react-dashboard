import { Star } from "lucide-react";
import Card from "./Card";
import Avatar from "./Avatar";

interface ExpertCardProps {
  src?: string;
  alt?: string;
  name: string;
  designation: string;
  rating: string | number;
  sessions?: string;
  className?: string;
}

export default function ExpertCard({
  src,
  alt,
  name,
  designation,
  rating,
  sessions,
  className = "",
}: ExpertCardProps) {
  return (
    <Card className={`bg-white p-4 text-center ${className}`}>
      <Avatar
        src={src}
        alt={alt}
        size="lg"
        className="mx-auto mt-3"
      />

      <h3 className="text-lg text-gray-800 font-semibold mt-2">
        {name}
      </h3>

      <p className="text-sm text-gray-600">
        ({designation})
      </p>

      <div className="flex items-center justify-center gap-2 mt-1">
        <Star
          size={14}
          className="text-orange-400 fill-orange-400"
        />

        <p className="text-xs text-gray-600">
          <span className="text-amber-500">{rating}</span>
          {sessions && ` (${sessions})`}
        </p>
      </div>
    </Card>
  );
}