import { integrations } from "@/data/security-data";
import { AnimatedCard } from "./AnimatedCard";

function statusClass(status: string) {
  if (status === "Healthy") return "bg-emerald-300/10 text-emerald-200 ring-emerald-300/20";
  if (status === "Syncing") return "bg-cyan-300/10 text-cyan-200 ring-cyan-300/20";
  return "bg-amber-300/10 text-amber-200 ring-amber-300/20";
}

export function Integrations() {
  return (
    <AnimatedCard className="p-5 md:p-6">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-white">Connected defense stack</h3>
          <p className="text-sm text-slate-400">Mock integrations with polished status cards</p>
        </div>
      </div>
      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
        {integrations.map((item) => (
          <div key={item.name} className="group rounded-2xl border border-white/10 bg-white/[0.035] p-4 transition hover:-translate-y-1 hover:bg-white/[0.06]">
            <div className="mb-4 flex items-center justify-between gap-3">
              <div className="rounded-2xl bg-white/[0.05] p-3 text-slate-200 ring-1 ring-white/10 transition group-hover:text-cyan-200">
                <item.icon size={20} />
              </div>
              <span className={`rounded-full px-3 py-1 text-xs font-semibold ring-1 ${statusClass(item.status)}`}>{item.status}</span>
            </div>
            <p className="font-semibold text-white">{item.name}</p>
            <p className="mt-1 text-sm text-slate-500">Telemetry connector</p>
          </div>
        ))}
      </div>
    </AnimatedCard>
  );
}
