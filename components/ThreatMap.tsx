import { attackSources, timeline } from "@/data/security-data";
import { AnimatedCard } from "./AnimatedCard";

function severityClass(severity: string) {
  const map: Record<string, string> = {
    Critical: "bg-rose-400/15 text-rose-200",
    High: "bg-orange-400/15 text-orange-200",
    Medium: "bg-amber-400/15 text-amber-200",
    Low: "bg-emerald-400/15 text-emerald-200"
  };
  return map[severity] ?? "bg-slate-400/15 text-slate-200";
}

export function ThreatMap() {
  return (
    <AnimatedCard className="p-5 md:p-6">
      <div className="mb-6 flex items-center justify-between gap-4">
        <div>
          <h3 className="text-lg font-bold text-white">Global attack pressure</h3>
          <p className="text-sm text-slate-400">Top sources and latest telemetry events</p>
        </div>
        <span className="rounded-full bg-rose-400/10 px-3 py-1 text-xs font-semibold text-rose-200 ring-1 ring-rose-300/20">Live</span>
      </div>

      <div className="grid gap-6 xl:grid-cols-[.9fr_1.1fr]">
        <div className="relative min-h-72 overflow-hidden rounded-3xl border border-white/10 bg-slate-950/70 p-5">
          <div className="absolute inset-0 grid-mask opacity-60" />
          <div className="relative z-10 flex h-full flex-col justify-between">
            <div className="space-y-3">
              {attackSources.map((source) => (
                <div key={source.country} className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-300/10 text-xs font-black text-cyan-100 ring-1 ring-cyan-300/20">
                    {source.code}
                  </div>
                  <div className="min-w-0 flex-1">
                    <div className="flex justify-between text-sm">
                      <span className="truncate text-slate-200">{source.country}</span>
                      <span className="text-slate-400">{source.value}%</span>
                    </div>
                    <div className="mt-2 h-2 overflow-hidden rounded-full bg-white/5">
                      <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 to-violet-400" style={{ width: `${source.value * 2.4}%` }} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 rounded-2xl bg-white/[0.04] p-4">
              <p className="text-3xl font-black text-white">4.8M</p>
              <p className="text-sm text-slate-400">network events processed today</p>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          {timeline.map((event) => (
            <div key={`${event.time}-${event.label}`} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:bg-white/[0.06]">
              <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-semibold text-white">{event.label}</p>
                  <p className="mt-1 text-xs text-slate-500">{event.time} · {event.count} correlated events</p>
                </div>
                <span className={`w-fit rounded-full px-3 py-1 text-xs font-semibold ${severityClass(event.severity)}`}>{event.severity}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedCard>
  );
}
