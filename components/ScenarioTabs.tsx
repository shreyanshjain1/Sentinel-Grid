"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Circle,
  Clock3,
  FileText,
  ShieldCheck,
  Sparkles,
  UserPlus2
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { scenarios } from "@/data/security-data";

type ActionKey = "brief" | "assign" | "contain";

const actionMap: Record<
  ActionKey,
  {
    label: string;
    icon: typeof FileText;
    title: string;
    description: string;
  }
> = {
  brief: {
    label: "Open brief",
    icon: FileText,
    title: "Containment brief ready",
    description:
      "A structured incident summary is prepared for review, including the initial event chain, affected node, clustered indicators, and recommended next steps."
  },
  assign: {
    label: "Assign owner",
    icon: UserPlus2,
    title: "Incident owner assigned",
    description:
      "The response owner has been assigned and follow-up tasks are now visible in the operational queue for this incident."
  },
  contain: {
    label: "Run containment",
    icon: ShieldCheck,
    title: "Containment workflow staged",
    description:
      "The containment workflow has been staged. Isolation, session review, and recovery preparation are ready for the next confirmation step."
  }
};

export function ScenarioTabs() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedAction, setSelectedAction] = useState<ActionKey>("brief");
  const [completedPoints, setCompletedPoints] = useState<number[]>([0]);

  const scenario = scenarios[activeTab];

  useEffect(() => {
    setSelectedAction("brief");
    setCompletedPoints([0]);
  }, [activeTab]);

  const completion = useMemo(() => {
    return Math.round((completedPoints.length / scenario.points.length) * 100);
  }, [completedPoints, scenario.points.length]);

  const togglePoint = (index: number) => {
    setCompletedPoints((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index]
    );
  };

  const selectedActionCard = actionMap[selectedAction];
  const SelectedIcon = selectedActionCard.icon;

  return (
    <section className="shell-card min-w-0 overflow-hidden rounded-[1.7rem] p-4 sm:rounded-[2rem] sm:p-5 md:p-6">
      <div className="mb-5 flex min-w-0 flex-col gap-4 xl:flex-row xl:items-end xl:justify-between">
        <div className="min-w-0">
          <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f2b84b] sm:text-xs">
            Response areas
          </p>
          <h3 className="mt-2 text-2xl font-black tracking-tight text-stone-50 sm:text-3xl">
            Incident response workspace
          </h3>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-stone-400 sm:text-base">
            Review the active case, track immediate tasks, and trigger the next
            response step from one place.
          </p>
        </div>

        <div className="grid w-full grid-cols-2 gap-2 sm:grid-cols-4 xl:w-auto">
          {scenarios.map((item, index) => (
            <button
              key={item.tab}
              type="button"
              onClick={() => setActiveTab(index)}
              className={`rounded-2xl px-4 py-3 text-sm font-black transition ${
                activeTab === index
                  ? "bg-[#f2b84b] text-black shadow-[0_10px_30px_rgba(242,184,75,.18)]"
                  : "bg-white/[0.06] text-stone-400 hover:bg-white/[0.1] hover:text-stone-50"
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
        transition={{ duration: 0.28, ease: "easeOut" }}
        className="relative overflow-hidden rounded-[1.6rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,.04),rgba(255,255,255,.02))] p-4 sm:p-5 md:p-6"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(226,70,55,.18),transparent_24%),radial-gradient(circle_at_bottom_left,rgba(242,184,75,.08),transparent_28%)]" />
        <div className="relative z-10 grid gap-4 xl:grid-cols-[minmax(0,1.2fr)_minmax(320px,.8fr)]">
          <div className="min-w-0 rounded-[1.5rem] border border-white/10 bg-black/40 p-4 sm:p-5 md:p-6">
            <div className="flex flex-wrap items-center gap-2">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#e24637]/15 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#ffd4cf] ring-1 ring-[#e24637]/25 sm:text-xs">
                <scenario.icon size={15} />
                {scenario.badge}
              </div>

              <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-stone-300 sm:text-xs">
                <Clock3 size={14} />
                Updated 2 min ago
              </div>
            </div>

            <h4 className="mt-5 max-w-4xl text-[clamp(2rem,5vw,4rem)] font-black leading-[0.95] tracking-[-0.05em] text-stone-50">
              {scenario.title}
            </h4>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-400 sm:text-base">
              {scenario.subtitle}
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-stone-400">
                  Priority
                </p>
                <p className="mt-3 text-lg font-bold text-stone-100">
                  {scenario.badge}
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-stone-400">
                  Checklist
                </p>
                <p className="mt-3 text-lg font-bold text-stone-100">
                  {completedPoints.length}/{scenario.points.length} complete
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-[11px] font-black uppercase tracking-[0.22em] text-stone-400">
                  Progress
                </p>
                <p className="mt-3 text-lg font-bold text-stone-100">
                  {completion}%
                </p>
              </div>
            </div>

            <div className="mt-6">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="text-sm font-bold text-stone-200">
                  Response checklist
                </p>
                <p className="text-xs font-medium text-stone-500">
                  Tap items to update
                </p>
              </div>

              <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                {scenario.points.map((point, index) => {
                  const done = completedPoints.includes(index);

                  return (
                    <button
                      key={point}
                      type="button"
                      onClick={() => togglePoint(index)}
                      className={`min-w-0 rounded-2xl border p-4 text-left transition ${
                        done
                          ? "border-[#f2b84b]/40 bg-[#f2b84b]/10"
                          : "border-white/10 bg-white/[0.04] hover:border-white/20 hover:bg-white/[0.07]"
                      }`}
                    >
                      <div className="mb-3 flex items-center gap-2">
                        {done ? (
                          <CheckCircle2 size={18} className="text-[#f2b84b]" />
                        ) : (
                          <Circle size={18} className="text-stone-500" />
                        )}
                        <span className="text-[11px] font-black uppercase tracking-[0.18em] text-stone-500">
                          Task {index + 1}
                        </span>
                      </div>

                      <p className="break-words text-sm font-semibold leading-5 text-stone-100">
                        {point}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="grid gap-4">
            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div className="min-w-0">
                  <p className="text-[11px] font-black uppercase tracking-[0.22em] text-stone-400">
                    Action center
                  </p>
                  <h5 className="mt-2 text-2xl font-black tracking-tight text-stone-50">
                    Next response step
                  </h5>
                </div>

                <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/25 bg-emerald-500/10 px-3 py-1 text-xs font-semibold text-emerald-300">
                  <Sparkles size={14} />
                  Ready
                </div>
              </div>

              <div className="mt-5 grid gap-3">
                {(Object.keys(actionMap) as ActionKey[]).map((key) => {
                  const item = actionMap[key];
                  const Icon = item.icon;
                  const active = selectedAction === key;

                  return (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setSelectedAction(key)}
                      className={`flex items-center justify-between gap-3 rounded-2xl border px-4 py-4 text-left transition ${
                        active
                          ? "border-[#f2b84b]/40 bg-[#f2b84b]/12"
                          : "border-white/10 bg-white/[0.03] hover:border-white/20 hover:bg-white/[0.06]"
                      }`}
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <div
                          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${
                            active
                              ? "bg-[#f2b84b] text-black"
                              : "bg-white/[0.06] text-stone-200"
                          }`}
                        >
                          <Icon size={18} />
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-bold text-stone-100">
                            {item.label}
                          </p>
                          <p className="mt-1 text-xs text-stone-400">
                            {item.title}
                          </p>
                        </div>
                      </div>

                      <ArrowRight
                        size={18}
                        className={active ? "text-[#f2b84b]" : "text-stone-500"}
                      />
                    </button>
                  );
                })}
              </div>

              <div className="mt-5 overflow-hidden rounded-[1.35rem] border border-white/10 bg-[#0a0a0a]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={selectedAction}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.22 }}
                    className="p-5"
                  >
                    <div className="flex items-start gap-3">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#f2b84b] text-black">
                        <SelectedIcon size={18} />
                      </div>
                      <div className="min-w-0">
                        <h6 className="text-lg font-black text-stone-50">
                          {selectedActionCard.title}
                        </h6>
                        <p className="mt-2 text-sm leading-6 text-stone-400">
                          {selectedActionCard.description}
                        </p>
                      </div>
                    </div>

                    <div className="mt-5 flex flex-col gap-3 sm:flex-row">
                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl bg-[#f2b84b] px-5 py-3 text-sm font-black text-black transition hover:brightness-105"
                      >
                        Confirm action
                        <Check size={16} />
                      </button>

                      <button
                        type="button"
                        className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-bold text-stone-100 transition hover:bg-white/[0.08]"
                      >
                        View details
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-4 sm:p-5">
              <p className="text-[11px] font-black uppercase tracking-[0.22em] text-stone-400">
                Queue summary
              </p>
              <div className="mt-4 grid gap-3 sm:grid-cols-3 xl:grid-cols-1 2xl:grid-cols-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-semibold text-stone-400">
                    Active track
                  </p>
                  <p className="mt-2 text-xl font-black text-stone-50">
                    {scenario.tab}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-semibold text-stone-400">
                    Suggested move
                  </p>
                  <p className="mt-2 text-sm font-bold leading-5 text-stone-100">
                    {scenario.action}
                  </p>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                  <p className="text-xs font-semibold text-stone-400">
                    Workflow state
                  </p>
                  <p className="mt-2 text-sm font-bold leading-5 text-emerald-300">
                    Ready for review
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
