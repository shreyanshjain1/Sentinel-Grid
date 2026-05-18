"use client";

import { AnimatePresence, motion } from "framer-motion";
import { AlertStream } from "@/components/AlertStream";
import { CommandHero } from "@/components/CommandHero";
import { CustomCursor } from "@/components/CustomCursor";
import { DefenseCards } from "@/components/DefenseCards";
import { HoverLab } from "@/components/HoverLab";
import { MainNav } from "@/components/MainNav";
import { ScenarioTabs } from "@/components/ScenarioTabs";
import { StickySidebar } from "@/components/StickySidebar";
import { AssetsView, PlaybooksView, ThreatsView } from "@/components/SectionViews";
import type { SectionKey } from "@/lib/navigation";
import { useState } from "react";

function PulseView() {
  return (
    <div className="mx-auto w-full max-w-[1420px] space-y-5 pt-4 sm:space-y-6 sm:pt-5 2xl:space-y-7">
      <CommandHero />
      <DefenseCards />
      <AlertStream />
      <div className="grid min-w-0 gap-5 2xl:grid-cols-[minmax(0,1.03fr)_minmax(410px,.97fr)] 2xl:gap-6">
        <ScenarioTabs />
        <HoverLab />
      </div>
    </div>
  );
}

export function DashboardShell() {
  const [activeSection, setActiveSection] = useState<SectionKey>("Pulse");

  const renderSection = () => {
    switch (activeSection) {
      case "Threats":
        return <ThreatsView />;
      case "Assets":
        return <AssetsView />;
      case "Playbooks":
        return <PlaybooksView />;
      case "Pulse":
      default:
        return <PulseView />;
    }
  };

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#11110f] text-stone-50">
      <CustomCursor />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_8%_8%,rgba(242,184,75,0.12),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(226,70,55,0.16),transparent_30%),radial-gradient(circle_at_70%_85%,rgba(65,120,105,0.10),transparent_32%),linear-gradient(135deg,#17130f_0%,#0f1117_46%,#11110f_100%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.1] [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:72px_72px]" />
      <div className="fixed inset-x-0 top-0 -z-10 h-52 bg-gradient-to-b from-black/70 to-transparent" />
      <div className="fixed bottom-0 left-1/2 -z-10 h-72 w-[80vw] -translate-x-1/2 rounded-full bg-[#f2b84b]/[0.055] blur-3xl" />

      <div className="mx-auto flex min-h-screen w-full max-w-[1680px]">
        <StickySidebar activeSection={activeSection} onSectionChange={setActiveSection} />

        <section className="relative min-w-0 flex-1 px-3 pb-12 pt-3 sm:px-4 md:px-5 lg:h-screen lg:overflow-y-auto lg:px-6 lg:pb-16 lg:pt-4 2xl:px-8">
          <MainNav activeSection={activeSection} onSectionChange={setActiveSection} />
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={{ opacity: 0, y: 20, scale: 0.992 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.992 }}
              transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </section>
      </div>
    </main>
  );
}
