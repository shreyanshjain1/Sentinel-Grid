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
    <section className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,.85fr)_minmax(0,1.15fr)]">
      <div className="poster-card relative min-w-0 overflow-hidden rounded-[1.7rem] p-4 sm:rounded-[2rem] sm:p-5">
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#e24637]/25 blur-3xl" />
        <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f2b84b] sm:text-xs">Incident queue</p>
        <h3 className="mt-3 max-w-xl text-2xl font-black tracking-tight sm:text-3xl">High-signal alerts are promoted before noise.</h3>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
          The queue highlights what changed, which asset is affected, and the next response step without forcing analysts to dig through raw logs.
        </p>
      </div>

      <div className="relative min-h-[190px] min-w-0 overflow-hidden rounded-[1.7rem] border border-white/10 bg-black/30 p-4 sm:rounded-[2rem] sm:p-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(226,70,55,.2),transparent_35%)]" />
        <AnimatePresence mode="wait">
          <motion.div
            key={popup.title}
            initial={{ opacity: 0, x: 24, scale: 0.96 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: -18, scale: 0.98 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className={`relative w-full rounded-[1.45rem] border p-4 shadow-2xl backdrop-blur-2xl md:ml-auto md:max-w-xl ${toneClass[popup.tone as keyof typeof toneClass]}`}
          >
            <div className="flex min-w-0 items-start gap-3 sm:gap-4">
              <div className="shrink-0 rounded-2xl bg-white/10 p-3"><popup.icon size={22} /></div>
              <div className="min-w-0 flex-1">
                <div className="flex min-w-0 items-start justify-between gap-3">
                  <p className="min-w-0 break-words text-sm font-black uppercase tracking-tight sm:text-base">{popup.title}</p>
                  <X size={16} className="shrink-0 opacity-60" />
                </div>
                <p className="mt-2 break-words text-sm leading-6 opacity-80">{popup.detail}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {popup.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-white/10 px-3 py-1 text-xs font-bold">{tag}</span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
