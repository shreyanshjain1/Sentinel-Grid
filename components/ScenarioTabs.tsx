"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Play } from "lucide-react";
import { scenarios } from "@/data/security-data";
import { useState } from "react";

export function ScenarioTabs() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];

  return (
    <section className="shell-card min-w-0 overflow-hidden rounded-[1.7rem] p-4 sm:rounded-[2rem] sm:p-5 md:p-6">
      <div className="mb-5 flex min-w-0 flex-col justify-between gap-4 lg:flex-row lg:items-end">
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f2b84b] sm:text-xs">Response areas</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Operational focus</h3>
        </div>
        <div className="grid w-full grid-cols-2 gap-2 sm:w-auto sm:grid-cols-4">
          {scenarios.map((item, index) => (
            <button
              key={item.tab}
              onClick={() => setActive(index)}
              className={`rounded-2xl px-3 py-2 text-sm font-black transition sm:px-4 ${
                active === index ? "bg-[#f2b84b] text-black" : "bg-white/[0.06] text-stone-400 hover:bg-white/[0.1] hover:text-stone-50"
              }`}
            >
              {item.tab}
            </button>
          ))}
        </div>
      </div>

      <motion.div
        key={scenario.title}
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative min-w-0 overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#0d0d0c] p-4 sm:rounded-[1.7rem] sm:p-5 md:p-7"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e24637]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-[#f2b84b]/15 blur-3xl" />
        <div className="relative z-10 grid min-w-0 gap-5 2xl:grid-cols-[minmax(0,1fr)_230px] 2xl:items-end">
          <div className="min-w-0">
            <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#e24637]/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#ffd4cf] ring-1 ring-[#e24637]/25 sm:text-xs">
              <scenario.icon size={15} /> {scenario.badge}
            </div>
            <h4 className="max-w-3xl break-words text-[clamp(2.25rem,7vw,4.25rem)] font-black leading-[0.95] tracking-[-0.055em] text-stone-50 2xl:text-[3.15rem]">
              {scenario.title}
            </h4>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-400 sm:text-base">{scenario.subtitle}</p>
            <div className="mt-6 grid min-w-0 gap-3 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3">
              {scenario.points.map((point) => (
                <div key={point} className="min-w-0 rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                  <CheckCircle2 size={18} className="mb-2 text-[#f2b84b]" />
                  <p className="break-words text-sm font-semibold leading-5 text-stone-200">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative min-h-[205px] min-w-0 overflow-hidden rounded-[1.45rem] bg-[#f2b84b] p-4 text-black shadow-[0_26px_80px_rgba(242,184,75,.18)] sm:min-h-[230px] 2xl:min-h-[255px]">
            <div className="absolute inset-x-6 top-5 h-20 rounded-full bg-white/35 blur-2xl" />
            <div className="relative z-10 flex h-full min-w-0 flex-col justify-between gap-5">
              <div className="min-w-0">
                <p className="text-[11px] font-black uppercase tracking-[0.25em] sm:text-xs">Current queue</p>
                <p className="mt-2 break-words text-3xl font-black tracking-[-0.08em] sm:text-4xl">{scenario.tab}</p>
              </div>
              <div className="rounded-2xl bg-black p-4 text-stone-50 transition group-hover:-translate-y-1 sm:group-hover:-translate-y-2">
                <Play size={18} className="mb-3 text-[#f2b84b]" />
                <p className="text-sm font-bold leading-5">{scenario.action}</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
