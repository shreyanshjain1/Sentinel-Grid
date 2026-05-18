"use client";

import { motion } from "framer-motion";
import { ArrowRight, Lock, PlayCircle, ShieldCheck } from "lucide-react";

export function HeroPanel() {
  return (
    <section className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-gradient-to-br from-cyan-400/15 via-slate-950 to-violet-500/20 p-6 shadow-card md:p-8">
      <div className="absolute inset-0 grid-mask opacity-70" />
      <div className="relative z-10 grid gap-8 lg:grid-cols-[1.35fr_.65fr] lg:items-center">
        <div>
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100">
            <ShieldCheck size={16} />
            Zero-trust protection is active
          </div>
          <h2 className="max-w-3xl text-4xl font-black tracking-tight text-white md:text-6xl">
            AI-powered security visibility for modern teams.
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-7 text-slate-300 md:text-lg">
            Monitor threats, assets, integrations, and response playbooks from one polished command center built as a frontend portfolio showcase.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-cyan-300 px-5 py-3 font-semibold text-slate-950 transition hover:bg-cyan-200">
              Review incidents <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 font-semibold text-white transition hover:bg-white/[0.08]">
              <PlayCircle size={18} /> Watch live demo
            </button>
          </div>
        </div>
        <motion.div
          initial={{ opacity: 0, rotate: -8, scale: 0.9 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mx-auto flex aspect-square w-full max-w-sm items-center justify-center rounded-full border border-cyan-300/20 bg-slate-950/70 shadow-glow"
        >
          <div className="flex h-56 w-56 items-center justify-center rounded-full border border-violet-300/20 bg-violet-300/10">
            <div className="flex h-36 w-36 items-center justify-center rounded-full border border-emerald-300/30 bg-emerald-300/10 text-emerald-200">
              <Lock size={54} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
