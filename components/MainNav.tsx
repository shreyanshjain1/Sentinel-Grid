"use client";

import { motion } from "framer-motion";
import { Bell, Menu, Radar, ShieldHalf } from "lucide-react";
import { sectionKeys, type SectionKey } from "@/lib/navigation";

type MainNavProps = {
  activeSection: SectionKey;
  onSectionChange: (section: SectionKey) => void;
};

export function MainNav({ activeSection, onSectionChange }: MainNavProps) {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-3 z-40 rounded-[1.5rem] border border-stone-100/10 bg-[#17130f]/80 px-3 py-3 shadow-[0_20px_70px_rgba(0,0,0,.35)] backdrop-blur-2xl sm:top-4 sm:rounded-[1.7rem] sm:px-4 md:px-5"
    >
      <div className="flex items-center justify-between gap-3">
        <div className="flex min-w-0 items-center gap-3 lg:hidden">
          <button className="rounded-2xl border border-white/10 bg-white/[0.06] p-2 text-stone-200">
            <Menu size={19} />
          </button>
          <div className="flex min-w-0 items-center gap-2 font-black">
            <ShieldHalf size={18} className="shrink-0 text-[#f2b84b]" />
            <span className="truncate">SentinelGrid</span>
          </div>
        </div>

        <div className="hidden min-w-0 lg:block">
          <p className="text-xs uppercase tracking-[0.34em] text-[#f2b84b]">Security operations platform</p>
          <h1 className="text-xl font-black tracking-tight text-stone-50">{activeSection} Command Center</h1>
        </div>

        <div className="ml-auto flex items-center gap-2 sm:gap-3">
          <div className="hidden items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-100 md:flex">
            <Radar size={16} /> Monitoring active
          </div>
          <button className="relative rounded-2xl border border-white/10 bg-white/[0.06] p-3 transition hover:-translate-y-0.5 hover:bg-white/[0.1]">
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#e24637] ring-4 ring-[#17130f]" />
          </button>
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-stone-50 text-sm font-black text-black sm:h-11 sm:w-11">SJ</div>
        </div>
      </div>

      <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4 lg:hidden">
        {sectionKeys.map((section) => {
          const selected = activeSection === section;
          return (
            <button
              key={section}
              type="button"
              onClick={() => onSectionChange(section)}
              className={`rounded-2xl px-3 py-2.5 text-xs font-black transition sm:text-sm ${
                selected
                  ? "bg-[#f2b84b] text-black"
                  : "bg-white/[0.06] text-stone-400 hover:bg-white/[0.1] hover:text-stone-50"
              }`}
            >
              {section}
            </button>
          );
        })}
      </div>
    </motion.header>
  );
}
