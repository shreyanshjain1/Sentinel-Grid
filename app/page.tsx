import { AlertStream } from "@/components/AlertStream";
import { CommandHero } from "@/components/CommandHero";
import { DefenseCards } from "@/components/DefenseCards";
import { HoverLab } from "@/components/HoverLab";
import { MainNav } from "@/components/MainNav";
import { ScenarioTabs } from "@/components/ScenarioTabs";
import { StickySidebar } from "@/components/StickySidebar";

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#11110f] text-stone-50">
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_15%_15%,rgba(226,70,55,0.18),transparent_30%),radial-gradient(circle_at_82%_18%,rgba(235,179,64,0.14),transparent_26%),linear-gradient(135deg,#17130f_0%,#0f1117_46%,#11110f_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.12] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:64px_64px]" />
      <div className="fixed inset-x-0 top-0 -z-10 h-44 bg-gradient-to-b from-black/60 to-transparent" />

      <div className="mx-auto flex min-h-screen w-full max-w-[1600px]">
        <StickySidebar />

        <section className="relative min-w-0 flex-1 px-3 pb-10 pt-3 sm:px-4 md:px-5 lg:h-screen lg:overflow-y-auto lg:px-6 lg:pb-16 lg:pt-4 2xl:px-8">
          <MainNav />
          <div className="mx-auto w-full max-w-7xl space-y-4 pt-4 sm:space-y-5 sm:pt-5 2xl:space-y-6">
            <CommandHero />
            <AlertStream />
            <DefenseCards />
            <div className="grid min-w-0 gap-5 2xl:grid-cols-[minmax(0,1.04fr)_minmax(420px,.96fr)] 2xl:gap-6">
              <ScenarioTabs />
              <HoverLab />
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
