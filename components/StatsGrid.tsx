import { stats } from "@/data/security-data";
import { AnimatedCard } from "./AnimatedCard";

const toneMap = {
  cyan: "bg-cyan-300/10 text-cyan-200 ring-cyan-300/20",
  rose: "bg-rose-300/10 text-rose-200 ring-rose-300/20",
  emerald: "bg-emerald-300/10 text-emerald-200 ring-emerald-300/20",
  violet: "bg-violet-300/10 text-violet-200 ring-violet-300/20"
};

export function StatsGrid() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat, index) => (
        <AnimatedCard key={stat.label} delay={index * 0.06} className="p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <p className="text-sm text-slate-400">{stat.label}</p>
              <p className="mt-3 text-3xl font-black tracking-tight text-white">{stat.value}</p>
            </div>
            <div className={`rounded-2xl p-3 ring-1 ${toneMap[stat.tone as keyof typeof toneMap]}`}>
              <stat.icon size={22} />
            </div>
          </div>
          <div className="mt-5 flex items-center justify-between text-sm">
            <span className={stat.trend === "down" ? "text-emerald-300" : "text-cyan-300"}>{stat.delta}</span>
            <span className="text-slate-500">last 24h</span>
          </div>
        </AnimatedCard>
      ))}
    </section>
  );
}
