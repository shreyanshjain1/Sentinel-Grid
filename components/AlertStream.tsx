"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, BellRing, Check, Clock3, Route, ShieldCheck } from "lucide-react";
import { livePopups } from "@/data/security-data";
import { useEffect, useMemo, useState } from "react";

const toneClass = {
  danger: {
    badge: "bg-red-500/12 text-red-200 ring-red-400/20",
    glow: "from-red-500/20 via-orange-500/10 to-transparent",
    line: "bg-red-400"
  },
  warning: {
    badge: "bg-amber-500/12 text-amber-200 ring-amber-400/20",
    glow: "from-amber-500/20 via-orange-500/10 to-transparent",
    line: "bg-amber-300"
  },
  gold: {
    badge: "bg-[#f2b84b]/15 text-[#ffe1a0] ring-[#f2b84b]/25",
    glow: "from-[#f2b84b]/20 via-yellow-500/10 to-transparent",
    line: "bg-[#f2b84b]"
  },
  violet: {
    badge: "bg-violet-500/12 text-violet-100 ring-violet-300/20",
    glow: "from-violet-500/20 via-fuchsia-500/10 to-transparent",
    line: "bg-violet-300"
  }
};

export function AlertStream() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [acknowledged, setAcknowledged] = useState<number[]>([]);
  const [escalated, setEscalated] = useState<number[]>([]);

  useEffect(() => {
    if (paused) return;

    const timer = window.setInterval(() => {
      setActive((current) => (current + 1) % livePopups.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, [paused]);

  const popup = livePopups[active];
  const tone = toneClass[popup.tone as keyof typeof toneClass] ?? toneClass.warning;
  const PopupIcon = popup.icon;

  const acknowledgedCurrent = acknowledged.includes(active);
  const escalatedCurrent = escalated.includes(active);

  const statusText = useMemo(() => {
    if (escalatedCurrent) return "Escalated";
    if (acknowledgedCurrent) return "Acknowledged";
    return "New signal";
  }, [acknowledgedCurrent, escalatedCurrent]);

  const move = (direction: "previous" | "next") => {
    setActive((current) => {
      if (direction === "previous") {
        return current === 0 ? livePopups.length - 1 : current - 1;
      }

      return (current + 1) % livePopups.length;
    });
  };

  const acknowledge = () => {
    setAcknowledged((current) => (current.includes(active) ? current : [...current, active]));
  };

  const escalate = () => {
    setAcknowledged((current) => (current.includes(active) ? current : [...current, active]));
    setEscalated((current) => (current.includes(active) ? current : [...current, active]));
  };

  return (
    <section className="grid min-w-0 gap-4 xl:grid-cols-[minmax(340px,.72fr)_minmax(0,1.28fr)]">
      <div className="poster-card relative min-w-0 overflow-hidden rounded-[1.7rem] p-4 sm:rounded-[2rem] sm:p-5">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#f2b84b]/18 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-28 w-28 rounded-full bg-[#e24637]/14 blur-3xl" />

        <div className="relative z-10">
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-black/30 text-[#f2b84b]">
            <BellRing size={21} />
          </div>
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f2b84b] sm:text-xs">
            Signal intake
          </p>
          <h3 className="mt-3 max-w-xl text-2xl font-black tracking-tight sm:text-3xl">
            Priority events stay above the noise.
          </h3>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">
            The stream surfaces the current security event, response state, and next available action without turning the dashboard into raw log clutter.
          </p>

          <div className="mt-6 grid grid-cols-3 gap-2">
            <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
              <p className="text-xl font-black text-stone-50">{livePopups.length}</p>
              <p className="mt-1 text-xs font-semibold text-stone-500">Signals</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
              <p className="text-xl font-black text-stone-50">{acknowledged.length}</p>
              <p className="mt-1 text-xs font-semibold text-stone-500">Acked</p>
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/25 p-3">
              <p className="text-xl font-black text-stone-50">{escalated.length}</p>
              <p className="mt-1 text-xs font-semibold text-stone-500">Escalated</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative min-w-0 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#11110f]/75 p-4 shadow-[0_22px_70px_rgba(0,0,0,.35)] sm:rounded-[2rem] sm:p-5">
        <div className={`absolute inset-0 bg-gradient-to-br ${tone.glow}`} />
        <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,.28)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.28)_1px,transparent_1px)] [background-size:28px_28px]" />

        <div className="relative z-10 grid min-w-0 gap-4 lg:grid-cols-[minmax(0,1fr)_240px]">
          <div className="min-w-0 overflow-hidden rounded-[1.45rem] border border-white/10 bg-black/35 p-4 backdrop-blur-xl sm:p-5">
            <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
              <div className="flex min-w-0 items-center gap-3">
                <div className="relative flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                  <span className="absolute inset-0 rounded-2xl bg-white/10 blur-md" />
                  <PopupIcon size={21} className="relative text-stone-100" />
                </div>
                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.24em] text-stone-500">Live event</p>
                  <p className="mt-1 truncate text-sm font-bold text-stone-200">{statusText}</p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => setPaused((current) => !current)}
                className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-2 text-xs font-bold text-stone-200 transition hover:bg-white/[0.08]"
              >
                {paused ? "Resume" : "Pause"}
              </button>
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={popup.title}
                initial={{ opacity: 0, y: 16, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -12, filter: "blur(8px)" }}
                transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-full px-3 py-1 text-xs font-black uppercase tracking-[0.18em] ring-1 ${tone.badge}`}>
                    {popup.tone === "danger" ? "Critical" : popup.tone === "violet" ? "Endpoint" : "Priority"}
                  </span>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-stone-400">
                    <Clock3 size={13} /> just now
                  </span>
                </div>

                <h3 className="mt-4 max-w-3xl text-2xl font-black leading-[1.02] tracking-[-0.04em] text-stone-50 sm:text-3xl lg:text-4xl">
                  {popup.title}
                </h3>
                <p className="mt-3 max-w-3xl text-sm leading-6 text-stone-400 sm:text-base">
                  {popup.detail}
                </p>

                <div className="mt-5 flex flex-wrap gap-2">
                  {popup.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-xs font-bold text-stone-300">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  <button
                    type="button"
                    onClick={acknowledge}
                    className={`inline-flex items-center justify-center gap-2 rounded-2xl px-4 py-3 text-sm font-black transition ${
                      acknowledgedCurrent
                        ? "border border-emerald-400/20 bg-emerald-400/10 text-emerald-200"
                        : "bg-[#f2b84b] text-black hover:brightness-105"
                    }`}
                  >
                    {acknowledgedCurrent ? "Acknowledged" : "Acknowledge"}
                    <Check size={16} />
                  </button>

                  <button
                    type="button"
                    onClick={escalate}
                    className={`inline-flex items-center justify-center gap-2 rounded-2xl border px-4 py-3 text-sm font-black transition ${
                      escalatedCurrent
                        ? "border-red-400/25 bg-red-400/10 text-red-200"
                        : "border-white/10 bg-white/[0.05] text-stone-100 hover:bg-white/[0.09]"
                    }`}
                  >
                    {escalatedCurrent ? "Escalated" : "Escalate"}
                    <Route size={16} />
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="grid min-w-0 gap-3">
            <div className="rounded-[1.45rem] border border-white/10 bg-black/30 p-4">
              <div className="mb-4 flex items-center justify-between gap-3">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-stone-500">Queue</p>
                <button
                  type="button"
                  onClick={() => move("next")}
                  className="rounded-full border border-white/10 bg-white/[0.05] p-2 text-stone-200 transition hover:bg-white/[0.1]"
                  aria-label="Next signal"
                >
                  <ArrowRight size={16} />
                </button>
              </div>

              <div className="space-y-2">
                {livePopups.map((item, index) => {
                  const Icon = item.icon;
                  const selected = active === index;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActive(index)}
                      className={`group flex w-full min-w-0 items-center gap-3 rounded-2xl border p-3 text-left transition ${
                        selected
                          ? "border-[#f2b84b]/35 bg-[#f2b84b]/10"
                          : "border-white/10 bg-white/[0.03] hover:bg-white/[0.06]"
                      }`}
                    >
                      <span className={`h-2 w-2 shrink-0 rounded-full ${toneClass[item.tone as keyof typeof toneClass]?.line ?? "bg-stone-500"}`} />
                      <Icon size={16} className="shrink-0 text-stone-400 group-hover:text-stone-100" />
                      <span className="min-w-0 truncate text-xs font-bold text-stone-300 group-hover:text-stone-100">
                        {item.title}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => move("previous")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-stone-100 transition hover:bg-white/[0.08]"
              >
                <ArrowLeft size={16} /> Prev
              </button>
              <button
                type="button"
                onClick={() => move("next")}
                className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-stone-100 transition hover:bg-white/[0.08]"
              >
                Next <ArrowRight size={16} />
              </button>
            </div>

            <div className="rounded-[1.45rem] border border-white/10 bg-white/[0.04] p-4">
              <div className="mb-3 flex items-center gap-2 text-emerald-300">
                <ShieldCheck size={17} />
                <p className="text-sm font-black">Triage engine online</p>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  key={active}
                  initial={{ width: "12%" }}
                  animate={{ width: `${72 + active * 6}%` }}
                  transition={{ duration: 0.45 }}
                  className="h-full rounded-full bg-[#f2b84b]"
                />
              </div>
              <p className="mt-3 text-xs leading-5 text-stone-500">
                Event confidence is recalculated as signals move through the queue.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
