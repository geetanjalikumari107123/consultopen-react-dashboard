import Greetings from "@/components/Greetings";
import AIChatbox from "@/components/AIChatbox";
import Focus from "@/components/Focus";
import CareerRoadmap from "@/components/CareerRoadmap";
import BuildBasics from "@/components/BuildBasics";
import RightPanel from "@/components/RightPanel";

export default function Page() {
  return (
    <div className="space-y-6">
      <Greetings name="Alex!" />
      <AIChatbox />
      <Focus />
      <CareerRoadmap />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <BuildBasics />
        </div>
        <RightPanel />
      </div>
    </div>
  );
}