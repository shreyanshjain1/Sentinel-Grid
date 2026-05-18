"use client";

import { motion } from "framer-motion";
import { ArrowRight, Bug, Crosshair, ShieldAlert, Sparkles } from "lucide-react";
import { tickerItems } from "@/data/security-data";

function VirusOrb({ className, label }: { className: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.72 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08, rotate: 4 }}
      className={`group absolute rounded-full border border-[#ffdf95]/25 bg-[radial-gradient(circle_at_30%_28%,#ffe7a4,rgba(226,70,55,.74)_42%,rgba(36,18,20,.7)_72%)] shadow-[0_28px_80px_rgba(226,70,55,.38)] ${className}`}
    >
      <span className="absolute -right-8 -top-7 hidden rounded-2xl bg-stone-50 px-3 py-2 text-xs font-black text-black shadow-xl group-hover:block">{label}</span>
      <span className="absolute left-1/2 top-1/2 h-[126%] w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2b84b]/35" />
      <span className="absolute left-1/2 top-1/2 h-1 w-[126%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2b84b]/35" />
      <span className="absolute left-1/2 top-1/2 h-[112%] w-1 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-[#ffe1a0]/25" />
      <span className="absolute left-1/2 top-1/2 h-[112%] w-1 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-[#ffe1a0]/25" />
    </motion.div>
  );
}

export function CommandHero() {
  return (
    <section className="noise relative overflow-hidden rounded-[2.4rem] border border-stone-100/10 bg-[#17130f] p-5 shadow-[0_40px_110px_rgba(0,0,0,.42)] md:p-8 xl:p-10">
      <div className="absolute -left-20 top-16 h-52 w-52 rounded-full bg-[#e24637]/25 blur-3xl" />
      <div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-[#f2b84b]/20 blur-3xl" />
      <div className="relative z-10 grid gap-8 xl:grid-cols-[1fr_500px] xl:items-center">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f2b84b]/25 bg-[#f2b84b]/10 px-4 py-2 text-sm font-bold text-[#ffe1a0]"
          >
            <Sparkles size={16} /> Portfolio visual system v2
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="max-w-4xl text-5xl font-black uppercase leading-[0.86] tracking-[-0.08em] text-stone-50 sm:text-6xl md:text-8xl"
          >
            Threats that pop. Interfaces that sell.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-7 text-stone-300 md:text-lg"
          >
            A design-first cybersecurity command center with sticky navigation, 3D decorative objects, hover labels, animated virus alerts, and screenshot-ready sections.
          </motion.p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f2b84b] px-5 py-3 font-black text-black shadow-[0_18px_50px_rgba(242,184,75,.25)] transition hover:-translate-y-1 hover:bg-[#ffd36b]">
              Explore showcase <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 font-bold text-stone-50 transition hover:-translate-y-1 hover:bg-white/[0.11]">
              <Bug size={18} /> Trigger visual alert
            </button>
          </div>
        </div>

        <div className="perspective-1000 relative min-h-[420px] overflow-hidden rounded-[2.2rem] border border-stone-100/10 bg-[#0d0d0c]/70 p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,184,75,.18),transparent_48%)]" />
          <div className="scan-line absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-transparent via-[#f2b84b]/18 to-transparent" />

          <VirusOrb className="float-slow left-8 top-12 h-24 w-24" label="Virus popup" />
          <VirusOrb className="float-delay right-10 top-24 h-16 w-16" label="Threat detected" />
          <VirusOrb className="float-slow bottom-12 right-20 h-28 w-28" label="Malware bubble" />

          <div className="cube absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2">
            <div className="cube-face [transform:translateZ(88px)]" />
            <div className="cube-face [transform:translateZ(-88px)]" />
            <div className="cube-face [transform:rotateY(90deg)_translateZ(88px)]" />
            <div className="cube-face [transform:rotateY(-90deg)_translateZ(88px)]" />
            <div className="cube-face [transform:rotateX(90deg)_translateZ(88px)]" />
            <div className="cube-face [transform:rotateX(-90deg)_translateZ(88px)]" />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#f2b84b]/35"
          />
          <div className="absolute bottom-5 left-5 right-5 rounded-[1.5rem] border border-white/10 bg-black/50 p-4 backdrop-blur-xl">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#f2b84b]">Detection theater</p>
                <p className="mt-1 text-lg font-black">3D cube shielding public edge</p>
              </div>
              <Crosshair className="text-[#e24637]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-7 overflow-hidden rounded-2xl border-y border-white/10 bg-black/30 py-3">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-sm font-black uppercase tracking-[0.28em] text-[#f2b84b]">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-3"><ShieldAlert size={16} /> {item}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
