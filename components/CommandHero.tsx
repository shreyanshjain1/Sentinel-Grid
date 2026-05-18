"use client";

import { motion } from "framer-motion";
import { ArrowRight, Crosshair, LockKeyhole, ShieldAlert, Zap } from "lucide-react";
import { tickerItems } from "@/data/security-data";

function SignalOrb({ className, label }: { className: string; label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.72 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.08, rotate: 4 }}
      className={`group absolute rounded-full border border-[#ffdf95]/25 bg-[radial-gradient(circle_at_30%_28%,#ffe7a4,rgba(226,70,55,.74)_42%,rgba(36,18,20,.7)_72%)] shadow-[0_28px_80px_rgba(226,70,55,.38)] ${className}`}
    >
      <span className="pointer-events-none absolute -right-8 -top-7 z-20 hidden rounded-2xl bg-stone-50 px-3 py-2 text-xs font-black text-black shadow-xl group-hover:block">
        {label}
      </span>
      <span className="absolute left-1/2 top-1/2 h-[126%] w-1 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2b84b]/35" />
      <span className="absolute left-1/2 top-1/2 h-1 w-[126%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2b84b]/35" />
      <span className="absolute left-1/2 top-1/2 h-[112%] w-1 -translate-x-1/2 -translate-y-1/2 rotate-45 rounded-full bg-[#ffe1a0]/25" />
      <span className="absolute left-1/2 top-1/2 h-[112%] w-1 -translate-x-1/2 -translate-y-1/2 -rotate-45 rounded-full bg-[#ffe1a0]/25" />
    </motion.div>
  );
}

export function CommandHero() {
  return (
    <section className="noise relative min-w-0 overflow-hidden rounded-[1.7rem] border border-stone-100/10 bg-[#17130f] p-4 shadow-[0_40px_110px_rgba(0,0,0,.42)] sm:rounded-[2.2rem] sm:p-5 md:p-7 2xl:p-10">
      <div className="absolute -left-20 top-16 h-52 w-52 rounded-full bg-[#e24637]/25 blur-3xl" />
      <div className="absolute -right-20 -top-16 h-72 w-72 rounded-full bg-[#f2b84b]/20 blur-3xl" />

      <div className="relative z-10 grid min-w-0 gap-6 lg:gap-8 2xl:grid-cols-[minmax(0,1fr)_500px] 2xl:items-center">
        <div className="min-w-0">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-5 inline-flex items-center gap-2 rounded-full border border-[#f2b84b]/25 bg-[#f2b84b]/10 px-4 py-2 text-xs font-bold text-[#ffe1a0] sm:text-sm"
          >
            <LockKeyhole size={16} /> Autonomous security workspace
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="max-w-4xl break-words text-[clamp(2.7rem,11vw,6rem)] font-black uppercase leading-[0.9] tracking-[-0.065em] text-stone-50 md:text-[clamp(4.6rem,8vw,7rem)] 2xl:text-8xl"
          >
            Real-time protection for high-risk teams.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-7 text-stone-300 md:text-lg"
          >
            SentinelGrid gives operators a clear view of identity risk, endpoint activity, cloud exposure, and response priority from one calm command surface.
          </motion.p>

          <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <button className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f2b84b] px-5 py-3 font-black text-black shadow-[0_18px_50px_rgba(242,184,75,.25)] transition hover:-translate-y-1 hover:bg-[#ffd36b]">
              Review command center <ArrowRight className="transition group-hover:translate-x-1" size={18} />
            </button>
            <button className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.06] px-5 py-3 font-bold text-stone-50 transition hover:-translate-y-1 hover:bg-white/[0.11]">
              <Zap size={18} /> Run containment preview
            </button>
          </div>
        </div>

        <div className="perspective-1000 relative min-h-[320px] min-w-0 overflow-hidden rounded-[1.7rem] border border-stone-100/10 bg-[#0d0d0c]/70 p-4 sm:min-h-[390px] sm:rounded-[2rem] sm:p-5 md:min-h-[420px] md:p-6">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(242,184,75,.18),transparent_48%)]" />
          <div className="scan-line absolute left-0 top-0 h-32 w-full bg-gradient-to-b from-transparent via-[#f2b84b]/18 to-transparent" />

          <SignalOrb className="float-slow left-8 top-12 h-20 w-20 sm:h-24 sm:w-24" label="Endpoint isolated" />
          <SignalOrb className="float-delay right-8 top-24 h-14 w-14 sm:right-10 sm:h-16 sm:w-16" label="Token revoked" />
          <SignalOrb className="float-slow bottom-14 right-16 h-24 w-24 sm:bottom-12 sm:right-20 sm:h-28 sm:w-28" label="Payload contained" />

          <div className="cube absolute left-1/2 top-1/2 h-36 w-36 -translate-x-1/2 -translate-y-1/2 sm:h-44 sm:w-44">
            <div className="cube-face [transform:translateZ(72px)] sm:[transform:translateZ(88px)]" />
            <div className="cube-face [transform:translateZ(-72px)] sm:[transform:translateZ(-88px)]" />
            <div className="cube-face [transform:rotateY(90deg)_translateZ(72px)] sm:[transform:rotateY(90deg)_translateZ(88px)]" />
            <div className="cube-face [transform:rotateY(-90deg)_translateZ(72px)] sm:[transform:rotateY(-90deg)_translateZ(88px)]" />
            <div className="cube-face [transform:rotateX(90deg)_translateZ(72px)] sm:[transform:rotateX(90deg)_translateZ(88px)]" />
            <div className="cube-face [transform:rotateX(-90deg)_translateZ(72px)] sm:[transform:rotateX(-90deg)_translateZ(88px)]" />
          </div>

          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
            className="absolute left-1/2 top-1/2 h-60 w-60 -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-[#f2b84b]/35 sm:h-72 sm:w-72"
          />

          <div className="absolute bottom-4 left-4 right-4 rounded-[1.5rem] border border-white/10 bg-black/55 p-4 backdrop-blur-xl sm:bottom-5 sm:left-5 sm:right-5">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-xs uppercase tracking-[0.28em] text-[#f2b84b]">Edge protection</p>
                <p className="mt-1 text-base font-black sm:text-lg">Public gateway shield is active</p>
              </div>
              <Crosshair className="shrink-0 text-[#e24637]" />
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 mt-6 overflow-hidden rounded-2xl border-y border-white/10 bg-black/30 py-3 sm:mt-7">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap text-xs font-black uppercase tracking-[0.28em] text-[#f2b84b] sm:text-sm">
          {[...tickerItems, ...tickerItems, ...tickerItems].map((item, index) => (
            <span key={`${item}-${index}`} className="inline-flex items-center gap-3">
              <ShieldAlert size={16} /> {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
