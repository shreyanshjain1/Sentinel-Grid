"use client";

import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { livePopups } from "@/data/security-data";
import { useEffect, useState } from "react";

const toneClass = {
  danger: "border-[#e24637]/35 bg-[#351514]/90 text-[#ffd4cf]",
  warning: "border-[#f2b84b]/35 bg-[#332713]/90 text-[#ffe1a0]",
  gold: "border-[#f2b84b]/35 bg-[#2b2111]/90 text-[#ffe1a0]",
  violet: "border-violet-300/30 bg-violet-950/70 text-violet-100"
};

export function AlertStream() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % livePopups.length);
    }, 3200);

    return () => window.clearInterval(timer);
  }, []);

  const popup = livePopups[active];

  return (
    <section className="grid gap-4 md:grid-cols-[1fr_1.1fr]">
      <div className="poster-card relative overflow-hidden rounded-[2rem] p-5">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#e24637]/25 blur-3xl" />
        <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f2b84b]">Random popup simulator</p>
        <h3 className="mt-3 text-2xl font-black tracking-tight">Decorative alerts appear like product UI moments.</h3>
        <p className="mt-3 text-sm leading-6 text-stone-400">These are intentionally visual and front-end focused. They do not need a backend because the goal is to show motion, hierarchy, and polish.</p>
      </div>

      <div className="relative min-h-[178px] overflow-hidden rounded-[2rem] border border-white/10 bg-black/30 p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(226,70,55,.2),transparent_35%)]" />
        <AnimatePresence mode="wait">
          <motion.div
            key={popup.title}
            initial={{ opacity: 0, x: 32, scale: 0.94 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -24, scale: 0.96 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`relative ml-auto max-w-lg rounded-[1.7rem] border p-4 shadow-2xl backdrop-blur-2xl ${toneClass[popup.tone as keyof typeof toneClass]}`}
          >
            <div className="flex items-start gap-4">
              <div className="rounded-2xl bg-white/10 p-3"><popup.icon size={22} /></div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between gap-3">
                  <p className="font-black uppercase tracking-tight">{popup.title}</p>
                  <X size={16} className="opacity-60" />
                </div>
                <p className="mt-2 text-sm leading-6 opacity-80">{popup.detail}</p>
                <div className="mt-4 flex gap-2">
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">hover ready</span>
                  <span className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">screenshot UI</span>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
