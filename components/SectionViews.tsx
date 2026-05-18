"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Check,
  CheckCircle2,
  Circle,
  Database,
  Eye,
  Fingerprint,
  RadioTower,
  Search,
  ShieldCheck,
  Siren,
  Sparkles,
  Zap
} from "lucide-react";
import type { ReactNode } from "react";
import { useMemo, useState } from "react";
import {
  attackSources,
  controls,
  incidents,
  integrations,
  responsePlaybooks,
  scenarios,
  type Severity
} from "@/data/security-data";

const severityFilters = ["All", "Critical", "High", "Medium", "Low"] as const;
type SeverityFilter = (typeof severityFilters)[number];

const severityStyles: Record<Severity, string> = {
  Critical: "bg-[#e24637]/15 text-[#ffd0c9] ring-[#e24637]/25",
  High: "bg-[#f2b84b]/15 text-[#ffe2a7] ring-[#f2b84b]/25",
  Medium: "bg-blue-400/15 text-blue-200 ring-blue-300/25",
  Low: "bg-emerald-400/15 text-emerald-200 ring-emerald-300/25"
};

function SectionShell({
  eyebrow,
  title,
  description,
  children
}: {
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-[1420px] space-y-5 pt-4 sm:space-y-6 sm:pt-5 2xl:space-y-7">
      <section className="relative overflow-hidden rounded-[1.85rem] border border-white/10 bg-[#161614]/90 p-5 shadow-[0_28px_90px_rgba(0,0,0,.36)] sm:p-6 lg:p-7">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(242,184,75,.18),transparent_28%),radial-gradient(circle_at_86%_12%,rgba(226,70,55,.16),transparent_26%)]" />
        <div className="pointer-events-none absolute right-8 top-8 h-28 w-28 rounded-full border border-[#f2b84b]/20" />
        <div className="pointer-events-none absolute bottom-6 left-8 h-20 w-20 rounded-full bg-emerald-300/10 blur-2xl" />
        <div className="relative z-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_minmax(280px,360px)] lg:items-end">
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.32em] text-[#f2b84b] sm:text-xs">
              {eyebrow}
            </p>
            <h2 className="mt-3 max-w-4xl text-[clamp(2.25rem,5.6vw,4.8rem)] font-black leading-[0.94] tracking-[-0.065em] text-stone-50">
              {title}
            </h2>
            <p className="mt-5 max-w-2xl text-sm leading-6 text-stone-400 sm:text-base">
              {description}
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-white/10 bg-black/30 p-4 backdrop-blur-sm">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div>
                <p className="text-xs font-bold text-stone-500">Workspace state</p>
                <p className="mt-1 text-xl font-black text-stone-50">Operational</p>
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2b84b] text-black">
                <ShieldCheck size={22} />
              </div>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {["Live", "Static", "Ready"].map((item) => (
                <div key={item} className="rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-3 text-center transition hover:bg-white/[0.07]">
                  <p className="text-xs font-black text-stone-100">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {children}
    </div>
  );
}

function EmptyState({ title, description, onReset }: { title: string; description: string; onReset: () => void }) {
  return (
    <div className="rounded-[1.45rem] border border-dashed border-white/15 bg-white/[0.035] p-6 text-center">
      <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2b84b]/10 text-[#f2b84b] ring-1 ring-[#f2b84b]/20">
        <Search size={20} />
      </div>
      <h4 className="mt-4 text-xl font-black tracking-[-0.03em] text-stone-50">{title}</h4>
      <p className="mx-auto mt-2 max-w-md text-sm leading-6 text-stone-400">{description}</p>
      <button
        type="button"
        onClick={onReset}
        className="mt-5 rounded-2xl bg-[#f2b84b] px-5 py-3 text-sm font-black text-black transition hover:brightness-105"
      >
        Reset view
      </button>
    </div>
  );
}

export function ThreatsView() {
  const [filter, setFilter] = useState<SeverityFilter>("All");
  const [query, setQuery] = useState("");
  const [selectedIncident, setSelectedIncident] = useState(incidents[0]);

  const filteredIncidents = useMemo(() => {
    const normalized = query.trim().toLowerCase();

    return incidents.filter((incident) => {
      const matchesSeverity = filter === "All" || incident.severity === filter;
      const matchesQuery =
        !normalized ||
        incident.title.toLowerCase().includes(normalized) ||
        incident.asset.toLowerCase().includes(normalized) ||
        incident.owner.toLowerCase().includes(normalized) ||
        incident.id.toLowerCase().includes(normalized);

      return matchesSeverity && matchesQuery;
    });
  }, [filter, query]);

  return (
    <SectionShell
      eyebrow="Threat intelligence"
      title="Threats that need attention"
      description="A visual threat desk for reviewing the most important security events, filtering by severity, and opening the active case summary."
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(0,1.05fr)_minmax(340px,390px)]">
        <section className="portfolio-card rounded-[1.7rem] p-4 sm:p-5">
          <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <p className="text-[11px] font-black uppercase tracking-[0.26em] text-[#f2b84b]">Incident queue</p>
              <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-stone-50">Active detections</h3>
            </div>

            <div className="grid grid-cols-3 gap-2 sm:grid-cols-5">
              {severityFilters.map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`rounded-2xl px-3 py-2 text-xs font-black transition ${
                    filter === item
                      ? "bg-[#f2b84b] text-black"
                      : "bg-white/[0.06] text-stone-400 hover:bg-white/[0.1] hover:text-stone-50"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <label className="mb-4 flex items-center gap-3 rounded-2xl border border-white/10 bg-black/30 px-4 py-3 text-sm text-stone-400 transition focus-within:border-[#f2b84b]/40 focus-within:bg-black/40">
            <Search size={17} className="shrink-0 text-[#f2b84b]" />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search incident, owner, or asset..."
              className="w-full bg-transparent text-stone-100 outline-none placeholder:text-stone-600"
            />
          </label>

          {filteredIncidents.length === 0 ? (
            <EmptyState
              title="No incidents match this view"
              description="Try a different search term or reset the severity filter to bring the queue back into focus."
              onReset={() => {
                setFilter("All");
                setQuery("");
              }}
            />
          ) : (
            <div className="grid gap-3">
              {filteredIncidents.map((incident) => {
                const selected = selectedIncident.id === incident.id;
                return (
                  <button
                    key={incident.id}
                    type="button"
                    onClick={() => setSelectedIncident(incident)}
                    className={`group grid min-h-[112px] gap-4 rounded-[1.35rem] border p-4 text-left transition md:grid-cols-[110px_minmax(0,1fr)_120px] md:items-center ${
                      selected
                        ? "border-[#f2b84b]/45 bg-[#f2b84b]/10 shadow-[0_18px_60px_rgba(242,184,75,.08)]"
                        : "border-white/10 bg-black/25 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.055]"
                    }`}
                  >
                    <div className="flex items-center gap-3 md:block">
                      <p className="text-xs font-black text-stone-500">{incident.id}</p>
                      <span className={`mt-2 inline-flex rounded-full px-2.5 py-1 text-[11px] font-black ring-1 ${severityStyles[incident.severity]}`}>
                        {incident.severity}
                      </span>
                    </div>

                    <div className="min-w-0">
                      <p className="text-base font-black leading-5 text-stone-50">{incident.title}</p>
                      <p className="mt-2 truncate text-sm text-stone-400">{incident.asset}</p>
                    </div>

                    <div className="flex items-center justify-between gap-3 md:block md:text-right">
                      <p className="text-sm font-bold text-stone-200">{incident.status}</p>
                      <p className="mt-1 text-xs text-stone-500">{incident.time}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </section>

        <aside className="grid gap-5">
          <div className="portfolio-card rounded-[1.7rem] p-5">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#f2b84b]">Selected case</p>
                <h3 className="mt-3 text-2xl font-black leading-7 tracking-[-0.04em] text-stone-50">{selectedIncident.title}</h3>
              </div>
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-[#e24637]/15 text-[#ffd0c9] ring-1 ring-[#e24637]/25">
                <Siren size={22} />
              </div>
            </div>

            <div className="mt-5 grid gap-3">
              {[
                ["Owner", selectedIncident.owner],
                ["Asset", selectedIncident.asset],
                ["Confidence", `${selectedIncident.confidence}%`]
              ].map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.065]">
                  <p className="text-xs font-bold text-stone-500">{label}</p>
                  <p className="mt-1 break-words text-sm font-black text-stone-100">{value}</p>
                </div>
              ))}
            </div>

            <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-50 px-5 py-3 text-sm font-black text-black transition hover:bg-[#f2b84b]">
              Open case view
              <ArrowUpRight size={16} />
            </button>
          </div>

          <div className="portfolio-card rounded-[1.7rem] p-5">
            <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#f2b84b]">Source pressure</p>
            <div className="mt-4 space-y-4">
              {attackSources.map((source) => (
                <div key={source.country}>
                  <div className="mb-2 flex items-center justify-between text-sm">
                    <span className="font-bold text-stone-200">{source.country}</span>
                    <span className="text-stone-500">{source.value}%</span>
                  </div>
                  <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${source.value}%` }}
                      transition={{ duration: 0.45 }}
                      className="h-full rounded-full bg-[#f2b84b]"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </SectionShell>
  );
}

export function AssetsView() {
  const [selectedAsset, setSelectedAsset] = useState(integrations[0]);

  return (
    <SectionShell
      eyebrow="Asset coverage"
      title="Protected systems and service health"
      description="A polished asset operations page with security controls, integration cards, and endpoint coverage status."
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(340px,390px)_minmax(0,1fr)]">
        <section className="portfolio-card rounded-[1.7rem] p-5">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#f2b84b]">Control posture</p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-stone-50">Coverage score</h3>
          <p className="mt-2 text-sm leading-6 text-stone-500">Controls are grouped for quick, readable status checks.</p>

          <div className="mt-5 space-y-4">
            {controls.map((control) => (
              <div key={control.name} className="rounded-2xl border border-white/10 bg-black/25 p-4 transition hover:-translate-y-0.5 hover:bg-white/[0.055]">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="flex min-w-0 items-center gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-2xl bg-white/[0.06] text-[#f2b84b]">
                      <control.icon size={18} />
                    </div>
                    <p className="truncate text-sm font-black text-stone-100">{control.name}</p>
                  </div>
                  <p className="text-sm font-black text-stone-50">{control.score}%</p>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/[0.08]">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${control.score}%` }}
                    transition={{ duration: 0.45 }}
                    className="h-full rounded-full bg-gradient-to-r from-[#f2b84b] to-emerald-300"
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="grid gap-5">
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {integrations.map((asset) => {
              const selected = selectedAsset.name === asset.name;
              return (
                <button
                  key={asset.name}
                  type="button"
                  onClick={() => setSelectedAsset(asset)}
                  className={`min-h-[210px] min-w-0 rounded-[1.45rem] border p-4 text-left transition ${
                    selected
                      ? "border-[#f2b84b]/45 bg-[#f2b84b]/10 shadow-[0_18px_60px_rgba(242,184,75,.08)]"
                      : "border-white/10 bg-white/[0.04] hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/30 text-[#f2b84b] ring-1 ring-white/10">
                      <asset.icon size={21} />
                    </div>
                    {selected && <Check size={18} className="text-[#f2b84b]" />}
                  </div>
                  <p className="text-lg font-black tracking-[-0.03em] text-stone-50">{asset.name}</p>
                  <p className="mt-1 text-sm font-semibold text-stone-400">{asset.status}</p>
                  <p className="mt-3 text-sm leading-6 text-stone-500">{asset.note}</p>
                </button>
              );
            })}
          </div>

          <div className="relative overflow-hidden rounded-[1.7rem] border border-white/10 bg-[#10100f] p-5">
            <div className="absolute right-6 top-6 h-24 w-24 rounded-full border border-[#f2b84b]/20" />
            <div className="absolute -bottom-10 -left-10 h-36 w-36 rounded-full bg-[#f2b84b]/10 blur-3xl" />
            <div className="relative z-10 grid gap-5 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-center">
              <div>
                <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#f2b84b]">Selected asset</p>
                <h3 className="mt-2 text-3xl font-black tracking-[-0.05em] text-stone-50">{selectedAsset.name}</h3>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-stone-400">{selectedAsset.note}</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <p className="text-xs font-bold text-stone-500">Health state</p>
                <p className="mt-2 text-2xl font-black text-emerald-300">{selectedAsset.status}</p>
                <button className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-[#f2b84b] px-4 py-3 text-sm font-black text-black transition hover:brightness-105">
                  Inspect asset
                  <Eye size={16} />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </SectionShell>
  );
}

export function PlaybooksView() {
  const [selectedPlaybook, setSelectedPlaybook] = useState(0);
  const [stepsDone, setStepsDone] = useState<number[]>([0]);
  const playbook = responsePlaybooks[selectedPlaybook];
  const scenario = scenarios[selectedPlaybook % scenarios.length];

  const completion = Math.round((stepsDone.length / 3) * 100);

  const toggleStep = (index: number) => {
    setStepsDone((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index]
    );
  };

  const selectPlaybook = (index: number) => {
    setSelectedPlaybook(index);
    setStepsDone(index === 0 ? [0] : []);
  };

  return (
    <SectionShell
      eyebrow="Response playbooks"
      title="Guided actions for repeatable incidents"
      description="A static but interactive playbook command panel for containment, identity lockdown, and exposed asset response."
    >
      <div className="grid gap-5 xl:grid-cols-[minmax(340px,420px)_minmax(0,1fr)]">
        <section className="portfolio-card rounded-[1.7rem] p-5">
          <p className="text-[11px] font-black uppercase tracking-[0.24em] text-[#f2b84b]">Playbook library</p>
          <h3 className="mt-2 text-2xl font-black tracking-[-0.04em] text-stone-50">Runbooks</h3>
          <p className="mt-2 text-sm leading-6 text-stone-500">Select a workflow to preview the response path.</p>

          <div className="mt-5 grid gap-3">
            {responsePlaybooks.map((item, index) => {
              const selected = selectedPlaybook === index;
              return (
                <button
                  key={item.title}
                  type="button"
                  onClick={() => selectPlaybook(index)}
                  className={`min-h-[96px] rounded-[1.3rem] border p-4 text-left transition ${
                    selected
                      ? "border-[#f2b84b]/45 bg-[#f2b84b]/10"
                      : "border-white/10 bg-black/25 hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.06]"
                  }`}
                >
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl ${selected ? "bg-[#f2b84b] text-black" : "bg-white/[0.06] text-stone-300"}`}>
                        <Zap size={18} />
                      </div>
                      <div className="min-w-0">
                        <p className="truncate text-sm font-black text-stone-100">{item.title}</p>
                        <p className="mt-1 truncate text-xs text-stone-500">{item.detail}</p>
                      </div>
                    </div>
                    <span className="text-xs font-black text-stone-500">{item.progress}%</span>
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        <section className="rounded-[1.7rem] border border-white/10 bg-[#10100f] p-5 shadow-[0_26px_80px_rgba(0,0,0,.28)] sm:p-6">
          <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_300px] lg:items-start">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#f2b84b]/10 px-3 py-1 text-[11px] font-black uppercase tracking-[0.2em] text-[#f2b84b] ring-1 ring-[#f2b84b]/25">
                <Sparkles size={14} /> Ready to run
              </div>
              <h3 className="mt-4 text-[clamp(2rem,4.8vw,3.8rem)] font-black leading-[0.98] tracking-[-0.06em] text-stone-50">
                {playbook.title}
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-6 text-stone-400">{playbook.detail}</p>
            </div>

            <div className="rounded-[1.35rem] border border-white/10 bg-white/[0.04] p-4">
              <p className="text-xs font-bold text-stone-500">Execution state</p>
              <p className="mt-2 text-2xl font-black text-stone-50">{completion}% complete</p>
              <div className="mt-4 h-2.5 overflow-hidden rounded-full bg-white/[0.08]">
                <motion.div
                  initial={false}
                  animate={{ width: `${completion}%` }}
                  className="h-full rounded-full bg-[#f2b84b]"
                />
              </div>
              <button className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-stone-50 px-5 py-3 text-sm font-black text-black transition hover:bg-[#f2b84b]">
                <Zap size={16} />
                Start playbook
              </button>
            </div>
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {scenario.points.map((point, index) => {
              const done = stepsDone.includes(index);
              return (
                <button
                  key={point}
                  type="button"
                  onClick={() => toggleStep(index)}
                  className={`min-h-[142px] rounded-2xl border p-4 text-left transition ${
                    done
                      ? "border-[#f2b84b]/45 bg-[#f2b84b]/10"
                      : "border-white/10 bg-white/[0.04] hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/[0.07]"
                  }`}
                >
                  <div className="mb-4 flex items-center justify-between gap-3">
                    {done ? <CheckCircle2 size={18} className="text-[#f2b84b]" /> : <Circle size={18} className="text-stone-500" />}
                    <span className="text-[11px] font-black uppercase tracking-[0.18em] text-stone-500">Step {index + 1}</span>
                  </div>
                  <p className="text-sm font-bold leading-5 text-stone-100">{point}</p>
                </button>
              );
            })}
          </div>

          <div className="mt-6 grid gap-3 md:grid-cols-3">
            {[
              { label: "Evidence", value: "Attached", icon: Database },
              { label: "Owner", value: "SOC Lead", icon: Fingerprint },
              { label: "Channel", value: "Ready", icon: RadioTower }
            ].map((item) => (
              <div key={item.label} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition hover:bg-white/[0.07]">
                <item.icon size={18} className="mb-3 text-[#f2b84b]" />
                <p className="text-xs font-bold text-stone-500">{item.label}</p>
                <p className="mt-1 text-lg font-black text-stone-50">{item.value}</p>
              </div>
            ))}
          </div>
        </section>
      </div>
    </SectionShell>
  );
}
