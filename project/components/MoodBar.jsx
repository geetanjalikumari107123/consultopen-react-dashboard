function MoodBar({
  value = 60, // percentage (0–100)
  from = "from-pink-400",
  to = "to-teal-400",
  icon,
}) {
  return (
    <div className="flex flex-col items-center gap-2">
     
      {icon ? (
        <img src={icon} alt="mood" className="w-6 h-6" />
      ) : (
        <div className="w-6 h-6" />
      )}

      <div className="relative w-8 h-28 bg-gray-200 rounded-md overflow-hidden">
  
        <div
          className={`absolute bottom-0 w-full bg-linear-to-t ${from} ${to} transition-all duration-500`}
          style={{ height: `${value}%` }}
        ></div>
      </div>
    </div>
  );
}

export default MoodBar;
