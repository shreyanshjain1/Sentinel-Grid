"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
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
      "Impact summary, owner notes, containment evidence, and recommended next steps are ready for review.",
    icon: FileText
  },
  {
    key: "contain",
    label: "Stage control",
    title: "Containment lane",
    description:
      "Isolation, session checks, rollback planning, and response ownership are prepared for the active case.",
    icon: LockKeyhole
  },
  {
    key: "handoff",
    label: "Team handoff",
    title: "Response channel",
    description:
      "The case can be handed to the next operator with task context, timeline notes, and ownership preserved.",
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
    <section className="relative min-w-0 overflow-hidden rounded-[1.75rem] border border-white/10 bg-[#151513] p-4 shadow-[0_24px_90px_rgba(0,0,0,.38)] sm:p-5 md:p-6">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_8%,rgba(242,184,75,.16),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(226,70,55,.13),transparent_28%)]" />
      <div className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-[#f2b84b]/70 to-transparent" />

      <div className="relative z-10 space-y-5">
        <div className="flex min-w-0 flex-col gap-4">
          <div className="min-w-0">
            <div className="inline-flex max-w-full items-center gap-2 rounded-full border border-[#f2b84b]/20 bg-[#f2b84b]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#f2b84b]">
              <Sparkles size={14} />
              Active playbook
            </div>

            <h3 className="mt-3 text-2xl font-black leading-tight tracking-[-0.04em] text-stone-50 sm:text-3xl">
              Response board
            </h3>

            <p className="mt-2 max-w-3xl text-sm leading-6 text-stone-400">
              Track the active security case, confirm response tasks, and move
              the queue through the next operational step.
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
                  className={`min-w-0 rounded-2xl border px-3 py-3 text-left transition ${
                    selected
                      ? "border-[#f2b84b]/50 bg-[#f2b84b] text-black shadow-[0_16px_40px_rgba(242,184,75,.16)]"
                      : "border-white/10 bg-white/[0.045] text-stone-400 hover:border-white/20 hover:bg-white/[0.08] hover:text-stone-100"
                  }`}
                >
                  <div className="flex items-center justify-between gap-2">
                    <span className="truncate text-sm font-black">
                      {item.tab}
                    </span>
                    <span
                      className={`h-2 w-2 shrink-0 rounded-full ${
                        selected ? "bg-black" : "bg-stone-600"
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
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.24, ease: "easeOut" }}
          className="grid min-w-0 gap-4"
        >
          <article className="min-w-0 overflow-hidden rounded-[1.55rem] border border-white/10 bg-black/35">
            <div className="grid gap-4 border-b border-white/10 p-4 sm:p-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-start">
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#e24637]/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.16em] text-[#ffd4cf] ring-1 ring-[#e24637]/25">
                    <scenario.icon size={14} />
                    {scenario.badge}
                  </span>

                  <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-semibold text-stone-400">
                    <Clock3 size={14} />
                    Updated now
                  </span>
                </div>

                <h4 className="mt-5 max-w-4xl text-[clamp(1.85rem,4vw,3rem)] font-black leading-[1.02] tracking-[-0.05em] text-stone-50">
                  {scenario.title}
                </h4>

                <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-400 sm:text-base">
                  {scenario.subtitle}
                </p>
              </div>

              <div className="rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-4">
                <div className="flex items-center justify-between gap-3">
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f2b84b]">
                      Queue state
                    </p>
                    <p className="mt-2 text-2xl font-black tracking-[-0.04em] text-stone-50">
                      {queueStates[queueIndex]}
                    </p>
                  </div>

                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f2b84b] text-black">
                    <ShieldCheck size={22} />
                  </div>
                </div>

                <div className="mt-4">
                  <div className="mb-2 flex items-center justify-between gap-3">
                    <span className="text-xs font-bold text-stone-400">
                      Completion
                    </span>
                    <span className="text-xs font-black text-stone-100">
                      {completion}%
                    </span>
                  </div>

                  <div className="h-2.5 overflow-hidden rounded-full bg-white/[0.08]">
                    <motion.div
                      className="h-full rounded-full bg-[#f2b84b]"
                      initial={false}
                      animate={{ width: `${completion}%` }}
                      transition={{ duration: 0.28 }}
                    />
                  </div>
                </div>

                <div className="mt-4 grid grid-cols-2 gap-2">
                  <button
                    type="button"
                    onClick={advanceQueue}
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#f2b84b] px-3 py-2.5 text-xs font-black text-black transition hover:brightness-105"
                  >
                    Advance
                    <ArrowRight size={14} />
                  </button>

                  <button
                    type="button"
                    onClick={resetBoard}
                    className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3 py-2.5 text-xs font-bold text-stone-100 transition hover:bg-white/[0.08]"
                  >
                    Reset
                    <RotateCcw size={14} />
                  </button>
                </div>
              </div>
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

          <div className="grid min-w-0 gap-4 lg:grid-cols-[minmax(0,.9fr)_minmax(0,1.1fr)]">
            <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-white/[0.04]">
              <div className="border-b border-white/10 p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.2em] text-stone-500">
                  Available actions
                </p>
                <h5 className="mt-2 text-xl font-black tracking-[-0.035em] text-stone-50">
                  Operator controls
                </h5>
              </div>

              <div className="grid gap-2 p-3 sm:grid-cols-3 lg:grid-cols-1">
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
            </div>

            <div className="overflow-hidden rounded-[1.45rem] border border-white/10 bg-[#10100f]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeAction}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.2 }}
                  className="p-4 sm:p-5"
                >
                  <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#f2b84b] text-black">
                      <ActiveActionIcon size={20} />
                    </div>

                    <div className="min-w-0">
                      <p className="text-[11px] font-black uppercase tracking-[0.2em] text-[#f2b84b]">
                        Selected action
                      </p>
                      <h6 className="mt-2 text-2xl font-black tracking-[-0.04em] text-stone-50">
                        {activeActionMeta.title}
                      </h6>
                      <p className="mt-3 text-sm leading-6 text-stone-400">
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
          </div>
        </motion.div>
      </div>
    </section>
  );
}
