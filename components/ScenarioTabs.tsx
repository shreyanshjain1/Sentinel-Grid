"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  ChevronRight,
  Circle,
  Clock3,
  FileText,
  LockKeyhole,
  MessageSquareText,
  Play,
  RotateCcw,
  ShieldCheck,
  Sparkles
} from "lucide-react";
import { useMemo, useState } from "react";
import { scenarios } from "@/data/security-data";

const queueStates = ["Queued", "Reviewing", "Ready"] as const;

const responseActions = [
  {
    key: "brief",
    label: "Open brief",
    title: "Executive packet",
    description:
      "Impact summary, owner notes, and containment evidence are ready for review.",
    icon: FileText
  },
  {
    key: "contain",
    label: "Stage control",
    title: "Containment lane",
    description:
      "Isolation, session checks, and rollback actions are prepared as a controlled workflow.",
    icon: LockKeyhole
  },
  {
    key: "handoff",
    label: "Team handoff",
    title: "Response channel",
    description:
      "The active case can be handed to the next operator with context and task ownership intact.",
    icon: MessageSquareText
  }
] as const;

type ResponseActionKey = (typeof responseActions)[number]["key"];

export function ScenarioTabs() {
  const [activeScenario, setActiveScenario] = useState(0);
  const [activeAction, setActiveAction] =
    useState<ResponseActionKey>("brief");
  const [completed, setCompleted] = useState<number[]>([0, 1]);
  const [queueIndex, setQueueIndex] = useState(1);

  const scenario = scenarios[activeScenario];

  const activeActionMeta =
    responseActions.find((item) => item.key === activeAction) ??
    responseActions[0];

  const ActiveActionIcon = activeActionMeta.icon;

  const completion = useMemo(() => {
    return Math.round((completed.length / scenario.points.length) * 100);
  }, [completed.length, scenario.points.length]);

  const switchScenario = (index: number) => {
    setActiveScenario(index);
    setActiveAction("brief");
    setCompleted(index === 0 ? [0, 1] : [0]);
    setQueueIndex(index % queueStates.length);
  };

  const togglePoint = (index: number) => {
    setCompleted((current) =>
      current.includes(index)
        ? current.filter((item) => item !== index)
        : [...current, index]
    );
  };

  const advanceQueue = () => {
    setQueueIndex((current) => (current + 1) % queueStates.length);
  };

  const resetBoard = () => {
    setCompleted([]);
    setActiveAction("brief");
    setQueueIndex(0);
  };

  return (
    <section className="relative min-w-0 overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#161614] p-4 shadow-[0_24px_90px_rgba(0,0,0,.35)] sm:rounded-[2rem] sm:p-5 md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(242,184,75,.16),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(226,70,55,.14),transparent_26%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#f2b84b]/70 to-transparent" />

      <div className="relative z-10 mb-5 grid gap-4 xl:grid-cols-[minmax(0,.85fr)_minmax(320px,1.15fr)] xl:items-end">
        <div className="min-w-0">
          <div className="inline-flex items-center gap-2 rounded-full border border-[#f2b84b]/20 bg-[#f2b84b]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.22em] text-[#f2b84b]">
            <Sparkles size={14} />
            Active playbook
          </div>

          <h3 className="mt-3 max-w-xl text-2xl font-black leading-tight tracking-[-0.035em] text-stone-50 sm:text-3xl md:text-4xl">
            Response board
          </h3>

          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-400">
            Follow the case path, confirm response tasks, and move the queue
            through the next security action.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          {scenarios.map((item, index) => {
            const selected = activeScenario === index;

            return (
              <button
                key={item.tab}
                type="button"
                onClick={() => switchScenario(index)}
                className={`group min-w-0 rounded-2xl border px-3 py-3 text-left transition sm:px-4 ${
                  selected
                    ? "border-[#f2b84b]/50 bg-[#f2b84b] text-black shadow-[0_16px_40px_rgba(242,184,75,.18)]"
                    : "border-white/10 bg-white/[0.045] text-stone-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-stone-100"
                }`}
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="truncate text-sm font-black">
                    {item.tab}
                  </span>
                  <ChevronRight
                    size={15}
                    className={`shrink-0 transition group-hover:translate-x-0.5 ${
                      selected ? "text-black" : "text-stone-600"
                    }`}
                  />
                </div>

                <p
                  className={`mt-1 truncate text-[11px] font-semibold ${
                    selected ? "text-black/60" : "text-stone-500"
                  }`}
                >
                  {item.badge} lane
                </p>
              </button>
            );
          })}
        </div>
      </div>

      <motion.div
        key={scenario.title}
        initial={{ opacity: 0, y: 16, scale: 0.985 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative z-10 grid min-w-0 gap-4 xl:grid-cols-[minmax(0,1.05fr)_minmax(340px,.95fr)]"
      >
        <article className="min-w-0 overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/35">
          <div className="border-b border-white/10 p-4 sm:p-5">
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-2 rounded-full bg-[#e24637]/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.18em] text-[#ffd4cf] ring-1 ring-[#e24637]/25">
                <scenario.icon size={14} />
                {scenario.badge}
              </span>

              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-stone-400">
                <Clock3 size={14} />
                Updated now
              </span>
            </div>

            <h4 className="mt-5 max-w-3xl text-[clamp(2rem,4.4vw,3.7rem)] font-black leading-[0.98] tracking-[-0.055em] text-stone-50">
              {scenario.title}
            </h4>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-400 sm:text-base">
              {scenario.subtitle}
            </p>
          </div>

          <div className="grid gap-3 p-4 sm:grid-cols-3 sm:p-5">
            {scenario.points.map((point, index) => {
              const done = completed.includes(index);

              return (
                <button
                  key={point}
                  type="button"
                  onClick={() => togglePoint(index)}
                  className={`min-w-0 rounded-2xl border p-4 text-left transition ${
                    done
                      ? "border-[#f2b84b]/45 bg-[#f2b84b]/10"
                      : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.075]"
                  }`}
                >
                  <div className="mb-3 flex items-center justify-between gap-3">
                    {done ? (
                      <CheckCircle2 size={18} className="text-[#f2b84b]" />
                    ) : (
                      <Circle size={18} className="text-stone-500" />
                    )}

                    <span className="rounded-full bg-black/30 px-2 py-1 text-[10px] font-black uppercase tracking-[0.16em] text-stone-500">
                      0{index + 1}
                    </span>
                  </div>

                  <p className="break-words text-sm font-bold leading-5 text-stone-100">
                    {point}
                  </p>
                </button>
              );
            })}
          </div>
        </article>

        <aside className="grid min-w-0 gap-4">
          <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-[#10100f]">
            <div className="flex items-start justify-between gap-4 border-b border-white/10 p-4 sm:p-5">
              <div className="min-w-0">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-[#f2b84b]">
                  Queue state
                </p>
                <h5 className="mt-2 text-2xl font-black tracking-[-0.04em] text-stone-50">
                  {queueStates[queueIndex]}
                </h5>
              </div>

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#f2b84b] text-black shadow-[0_20px_45px_rgba(242,184,75,.18)]">
                <ShieldCheck size={24} />
              </div>
            </div>

            <div className="p-4 sm:p-5">
              <div className="mb-4 flex items-center justify-between gap-3">
                <span className="text-sm font-bold text-stone-300">
                  Completion
                </span>
                <span className="text-sm font-black text-stone-50">
                  {completion}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/[0.07]">
                <motion.div
                  className="h-full rounded-full bg-[#f2b84b]"
                  initial={false}
                  animate={{ width: `${completion}%` }}
                  transition={{ duration: 0.28 }}
                />
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={advanceQueue}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f2b84b] px-4 py-3 text-sm font-black text-black transition hover:brightness-105"
                >
                  Advance
                  <ArrowUpRight size={16} />
                </button>

                <button
                  type="button"
                  onClick={resetBoard}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm font-bold text-stone-100 transition hover:bg-white/[0.08]"
                >
                  Reset
                  <RotateCcw size={16} />
                </button>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[1.55rem] border border-white/10 bg-white/[0.04]">
            <div className="border-b border-white/10 p-4 sm:p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-stone-500">
                Available actions
              </p>
              <h5 className="mt-2 text-xl font-black tracking-[-0.035em] text-stone-50">
                Operator controls
              </h5>
            </div>

            <div className="grid gap-2 p-3 sm:p-4">
              {responseActions.map((action) => {
                const Icon = action.icon;
                const selected = activeAction === action.key;

                return (
                  <button
                    key={action.key}
                    type="button"
                    onClick={() => setActiveAction(action.key)}
                    className={`group flex min-w-0 items-center gap-3 rounded-2xl border p-3 text-left transition ${
                      selected
                        ? "border-[#f2b84b]/45 bg-[#f2b84b]/10"
                        : "border-white/10 bg-black/20 hover:border-white/20 hover:bg-white/[0.065]"
                    }`}
                  >
                    <div
                      className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                        selected
                          ? "bg-[#f2b84b] text-black"
                          : "bg-white/[0.06] text-stone-300"
                      }`}
                    >
                      <Icon size={18} />
                    </div>

                    <div className="min-w-0 flex-1">
                      <p className="truncate text-sm font-black text-stone-100">
                        {action.label}
                      </p>
                      <p className="mt-1 truncate text-xs text-stone-500">
                        {action.title}
                      </p>
                    </div>

                    {selected && (
                      <Check size={17} className="shrink-0 text-[#f2b84b]" />
                    )}
                  </button>
                );
              })}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeAction}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="border-t border-white/10 bg-black/25 p-4 sm:p-5"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f2b84b] text-black">
                    <ActiveActionIcon size={18} />
                  </div>

                  <div className="min-w-0">
                    <h6 className="text-lg font-black text-stone-50">
                      {activeActionMeta.title}
                    </h6>
                    <p className="mt-2 text-sm leading-6 text-stone-400">
                      {activeActionMeta.description}
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={advanceQueue}
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-50 px-5 py-3 text-sm font-black text-black transition hover:bg-[#f2b84b]"
                >
                  <Play size={16} />
                  Confirm selected action
                </button>
              </motion.div>
            </AnimatePresence>
          </div>
        </aside>
      </motion.div>
    </section>
  );
}