import { ControlScore } from "@/components/ControlScore";
import { Header } from "@/components/Header";
import { HeroPanel } from "@/components/HeroPanel";
import { IncidentTable } from "@/components/IncidentTable";
import { Integrations } from "@/components/Integrations";
import { Sidebar } from "@/components/Sidebar";
import { StatsGrid } from "@/components/StatsGrid";
import { ThreatMap } from "@/components/ThreatMap";

export default function Home() {
  return (
    <main className="min-h-screen bg-radial-grid text-white">
      <div className="flex">
        <Sidebar />
        <div className="min-w-0 flex-1">
          <Header />
          <div className="mx-auto max-w-7xl space-y-5 px-4 py-5 md:px-8 md:py-8">
            <HeroPanel />
            <StatsGrid />
            <div className="grid gap-5 2xl:grid-cols-[1.35fr_.65fr]">
              <div className="space-y-5">
                <ThreatMap />
                <IncidentTable />
              </div>
              <div className="space-y-5">
                <ControlScore />
                <Integrations />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
