export default function Greetings({ name }) {
  const hour = new Date().getHours();

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

      <div className="bg-teal-100 p-4 rounded-lg border-l-4 border-teal-600">
        <p className="text-md text-gray-950 mb-1">
          "The future belongs to those who believe in the beauty of their dreams."
        </p>
        <p className="text-gray-600 text-sm font-semibold">
          — Eleanor Roosevelt
        </p>
      </div>
    </div>
  );
}