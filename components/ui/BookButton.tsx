import { ArrowRight } from "lucide-react";
interface BookButtonProps {
  text : string;
  bgColor?: string;
  className? : string;
}
export default function BookButton({
  text,
  bgColor = "bg-pink-500",
  className = "",
}: BookButtonProps) {
  return (
    <button
      className={`w-full text-white py-2 rounded-lg text-sm flex items-center justify-center gap-2 ${bgColor} ${className}`}
    >
      {text}
      <ArrowRight size={14} />
    </button>
  );
}