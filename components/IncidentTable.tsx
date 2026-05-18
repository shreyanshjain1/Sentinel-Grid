"use client";

import { useMemo, useState } from "react";
import { Search, SlidersHorizontal } from "lucide-react";
import { filterOptions, incidents } from "@/data/security-data";
import { AnimatedCard } from "./AnimatedCard";

type Filter = (typeof filterOptions)[number];

function severityClass(severity: string) {
  const map: Record<string, string> = {
    Critical: "bg-rose-400/15 text-rose-200 ring-rose-300/20",
    High: "bg-orange-400/15 text-orange-200 ring-orange-300/20",
    Medium: "bg-amber-400/15 text-amber-200 ring-amber-300/20",
    Low: "bg-emerald-400/15 text-emerald-200 ring-emerald-300/20"
  };
  return map[severity] ?? "bg-slate-400/15 text-slate-200 ring-slate-300/20";
}

function statusClass(status: string) {
  const map: Record<string, string> = {
    Open: "text-rose-200",
    Investigating: "text-cyan-200",
    Contained: "text-violet-200",
    Resolved: "text-emerald-200"
  };
  return map[status] ?? "text-slate-200";
}

export function IncidentTable() {
  const [filter, setFilter] = useState<Filter>("All");
  const [query, setQuery] = useState("");

  const filteredIncidents = useMemo(() => {
    return incidents.filter((incident) => {
      const matchesFilter = filter === "All" || incident.severity === filter;
      const q = query.toLowerCase();
      const matchesQuery = !q || incident.title.toLowerCase().includes(q) || incident.asset.toLowerCase().includes(q) || incident.id.toLowerCase().includes(q);
      return matchesFilter && matchesQuery;
    });
  }, [filter, query]);

  return (
    <AnimatedCard className="p-5 md:p-6">
      <div className="mb-5 flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Incident queue</h3>
          <p className="text-sm text-slate-400">Filterable security events with responsive table/card layout</p>
        </div>
        <div className="flex flex-col gap-3 sm:flex-row">
          <div className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.04] px-3 py-2 text-sm text-slate-300">
            <Search size={16} />
            <input
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search incidents"
              className="w-full bg-transparent outline-none placeholder:text-slate-500 sm:w-48"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto scrollbar-none">
            {filterOptions.map((option) => (
              <button
                key={option}
                onClick={() => setFilter(option)}
                className={`rounded-2xl px-3 py-2 text-sm font-semibold transition ${
                  filter === option ? "bg-cyan-300 text-slate-950" : "border border-white/10 bg-white/[0.04] text-slate-300 hover:bg-white/[0.08]"
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {filteredIncidents.length === 0 ? (
        <div className="rounded-3xl border border-dashed border-white/15 bg-white/[0.03] p-10 text-center">
          <SlidersHorizontal className="mx-auto mb-3 text-slate-400" />
          <p className="font-semibold text-white">No incidents match this view</p>
          <p className="mt-1 text-sm text-slate-400">Try clearing the search or switching severity filters.</p>
        </div>
      ) : (
        <div className="overflow-hidden rounded-3xl border border-white/10">
          <div className="hidden grid-cols-[1.1fr_.9fr_.7fr_.7fr_.5fr] gap-4 bg-white/[0.04] px-4 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500 md:grid">
            <span>Incident</span><span>Asset</span><span>Severity</span><span>Status</span><span>Confidence</span>
          </div>
          <div className="divide-y divide-white/10">
            {filteredIncidents.map((incident) => (
              <div key={incident.id} className="grid gap-3 px-4 py-4 transition hover:bg-white/[0.035] md:grid-cols-[1.1fr_.9fr_.7fr_.7fr_.5fr] md:items-center md:gap-4">
                <div>
                  <p className="font-semibold text-white">{incident.title}</p>
                  <p className="mt-1 text-xs text-slate-500">{incident.id} · {incident.time}</p>
                </div>
                <p className="break-words text-sm text-slate-300">{incident.asset}</p>
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ring-1 ${severityClass(incident.severity)}`}>{incident.severity}</span>
                <p className={`text-sm font-semibold ${statusClass(incident.status)}`}>{incident.status}</p>
                <div>
                  <p className="text-sm font-semibold text-white">{incident.confidence}%</p>
                  <div className="mt-2 h-1.5 rounded-full bg-white/5">
                    <div className="h-full rounded-full bg-cyan-300" style={{ width: `${incident.confidence}%` }} />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </AnimatedCard>
  );
}
