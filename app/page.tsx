import { AlertStream } from "@/components/AlertStream";
import { CommandHero } from "@/components/CommandHero";
import { DefenseCards } from "@/components/DefenseCards";
import { HoverLab } from "@/components/HoverLab";
import { MainNav } from "@/components/MainNav";
import { ScenarioTabs } from "@/components/ScenarioTabs";
import { StickySidebar } from "@/components/StickySidebar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#11110f] text-stone-50">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(226,70,55,0.2),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(235,179,64,0.16),transparent_26%),linear-gradient(135deg,#17130f_0%,#0f1117_46%,#11110f_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.16] [background-image:linear-gradient(rgba(255,255,255,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.18)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="fixed inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="mx-auto flex min-h-screen w-full max-w-[1600px]">
        <StickySidebar />

        <section className="relative min-w-0 flex-1 px-4 pb-12 pt-4 md:px-6 lg:ml-0 lg:h-screen lg:overflow-y-auto lg:px-8 lg:pb-16">
          <MainNav />
          <div className="mx-auto max-w-7xl space-y-6 pt-5">
            <CommandHero />
            <AlertStream />
            <DefenseCards />
            <div className="grid gap-6 xl:grid-cols-[1.06fr_.94fr]">
              <ScenarioTabs />
              <HoverLab />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
