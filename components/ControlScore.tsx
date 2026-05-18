import { controls, responsePlaybooks } from "@/data/security-data";
import { AnimatedCard } from "./AnimatedCard";

export function ControlScore() {
  return (
    <div className="grid gap-5">
      <AnimatedCard className="p-5 md:p-6">
        <div className="mb-5">
          <h3 className="text-lg font-bold text-white">Control health</h3>
          <p className="text-sm text-slate-400">Coverage quality across security layers</p>
        </div>
        <div className="space-y-4">
          {controls.map((control) => (
            <div key={control.name} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="mb-3 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="rounded-xl bg-cyan-300/10 p-2 text-cyan-200 ring-1 ring-cyan-300/20"><control.icon size={18} /></div>
                  <span className="text-sm font-semibold text-white">{control.name}</span>
                </div>
                <span className="text-sm text-slate-300">{control.score}%</span>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-gradient-to-r from-cyan-300 via-emerald-300 to-violet-400" style={{ width: `${control.score}%` }} />
              </div>
            </div>
          ))}
        </div>
      </AnimatedCard>

      <AnimatedCard className="p-5 md:p-6">
        <div className="mb-5">
          <h3 className="text-lg font-bold text-white">Response playbooks</h3>
          <p className="text-sm text-slate-400">Automated actions currently running</p>
        </div>
        <div className="space-y-4">
          {responsePlaybooks.map((item) => (
            <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.035] p-4">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-semibold text-white">{item.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{item.detail}</p>
                </div>
                <span className="rounded-full bg-violet-300/10 px-3 py-1 text-xs font-semibold text-violet-200 ring-1 ring-violet-300/20">{item.progress}%</span>
              </div>
              <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/5">
                <div className="h-full rounded-full bg-violet-300" style={{ width: `${item.progress}%` }} />
              </div>
            </div>
          ))}
        </div>
      </AnimatedCard>
    </div>
  );
}
