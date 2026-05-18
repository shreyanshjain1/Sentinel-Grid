"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Play } from "lucide-react";
import { scenarios } from "@/data/security-data";
import { useState } from "react";

export function ScenarioTabs() {
  const [active, setActive] = useState(0);
  const scenario = scenarios[active];

  return (
    <section className="shell-card overflow-hidden rounded-[2rem] p-5 sm:rounded-[2.2rem] md:p-6">
      <div className="mb-5 flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f2b84b]">Response areas</p>
          <h3 className="mt-2 text-2xl font-black tracking-tight">Operational focus</h3>
        </div>
        <div className="grid grid-cols-2 gap-2 sm:flex">
          {scenarios.map((item, index) => (
            <button
              key={item.tab}
              onClick={() => setActive(index)}
              className={`rounded-2xl px-4 py-2 text-sm font-black transition ${
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
        className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#0d0d0c] p-5 sm:rounded-[1.9rem] md:p-7"
      >
        <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-[#e24637]/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-44 w-44 rounded-full bg-[#f2b84b]/15 blur-3xl" />
        <div className="relative z-10 grid gap-6 xl:grid-cols-[minmax(0,1fr)_240px] xl:items-end">
          <div className="min-w-0">
            <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-[#e24637]/15 px-3 py-1 text-xs font-black uppercase tracking-[0.22em] text-[#ffd4cf] ring-1 ring-[#e24637]/25">
              <scenario.icon size={15} /> {scenario.badge}
            </div>
            <h4 className="max-w-2xl text-3xl font-black leading-[0.98] tracking-[-0.04em] md:text-4xl 2xl:text-5xl">{scenario.title}</h4>
            <p className="mt-4 max-w-xl text-sm leading-6 text-stone-400 md:text-base">{scenario.subtitle}</p>
            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              {scenario.points.map((point) => (
                <div key={point} className="rounded-2xl border border-white/10 bg-white/[0.05] p-3">
                  <CheckCircle2 size={18} className="mb-2 text-[#f2b84b]" />
                  <p className="text-sm font-semibold text-stone-200">{point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="group relative min-h-56 overflow-hidden rounded-[1.6rem] bg-[#f2b84b] p-4 text-black shadow-[0_26px_80px_rgba(242,184,75,.2)] sm:min-h-64">
            <div className="absolute inset-x-6 top-5 h-20 rounded-full bg-white/35 blur-2xl" />
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div>
                <p className="text-xs font-black uppercase tracking-[0.25em]">Current queue</p>
                <p className="mt-2 text-4xl font-black tracking-[-0.08em]">{scenario.tab}</p>
              </div>
              <div className="rounded-2xl bg-black p-4 text-stone-50 transition group-hover:-translate-y-2">
                <Play size={18} className="mb-3 text-[#f2b84b]" />
                <p className="text-sm font-bold">{scenario.action}</p>
              </div>
            </div>
            <span className="absolute right-4 top-4 rounded-full bg-black px-3 py-1 text-xs font-black text-[#f2b84b] opacity-0 transition group-hover:opacity-100">
              priority note
            </span>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
