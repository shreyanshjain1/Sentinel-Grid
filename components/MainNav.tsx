"use client";

import { motion } from "framer-motion";
import { Bell, Menu, Radar, ShieldHalf } from "lucide-react";

export function MainNav() {
  return (
    <motion.header
      initial={{ opacity: 0, y: -14 }}
      animate={{ opacity: 1, y: 0 }}
      className="sticky top-3 z-40 rounded-[1.5rem] border border-stone-100/10 bg-[#17130f]/80 px-3 py-3 shadow-2xl backdrop-blur-2xl sm:top-4 sm:rounded-[1.7rem] sm:px-4 md:px-5"
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

        <div className="hidden lg:block">
          <p className="text-xs uppercase tracking-[0.34em] text-[#f2b84b]">Security operations platform</p>
          <h1 className="text-xl font-black tracking-tight text-stone-50">Threat Command Center</h1>
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
    </motion.header>
  );
}
