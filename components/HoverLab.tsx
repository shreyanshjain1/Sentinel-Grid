import { integrations, hoverNodes } from "@/data/security-data";
import { MousePointer2 } from "lucide-react";

export function HoverLab() {
  return (
    <section className="min-w-0 space-y-5 sm:space-y-6">
      <div className="shell-card relative min-h-[390px] min-w-0 overflow-hidden rounded-[1.7rem] p-4 sm:rounded-[2rem] sm:p-5 md:min-h-[450px] md:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(242,184,75,.15),transparent_38%)]" />
        <div className="relative z-10 mb-5 flex min-w-0 items-center justify-between gap-4">
          <div className="min-w-0">
            <p className="text-[11px] font-black uppercase tracking-[0.28em] text-[#f2b84b] sm:text-xs">Asset graph</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">Exposure map</h3>
          </div>
          <MousePointer2 className="shrink-0 text-[#f2b84b]" />
        </div>

        <div className="relative z-10 h-[280px] min-w-0 overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0d0d0c] sm:h-[305px] sm:rounded-[1.8rem] md:h-[340px]">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f2b84b]/20 sm:h-52 sm:w-52" />
          <div className="absolute left-1/2 top-1/2 h-24 w-24 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e24637]/30 bg-[#e24637]/10 sm:h-28 sm:w-28" />
          {hoverNodes.map((node) => (
            <button
              key={node.label}
              className="group absolute flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#f2b84b] text-sm font-black text-black shadow-[0_20px_60px_rgba(242,184,75,.28)] transition hover:scale-110 sm:h-14 sm:w-14 sm:text-base"
              style={{ left: node.x, top: node.y }}
            >
              {node.label.slice(0, 2)}
              <span className="pointer-events-none absolute -top-16 left-1/2 w-max max-w-[180px] -translate-x-1/2 rounded-2xl bg-stone-50 px-4 py-2 text-xs font-black text-black opacity-0 shadow-2xl transition group-hover:opacity-100">
                {node.label}: {node.value}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid min-w-0 gap-3 sm:grid-cols-2">
        {integrations.map((item) => (
          <div key={item.name} className="group min-h-[96px] min-w-0 rounded-[1.35rem] border border-white/10 bg-white/[0.05] p-4 transition hover:-translate-y-1 hover:bg-white/[0.08] sm:rounded-[1.6rem]">
            <div className="flex min-w-0 items-center gap-3">
              <div className="shrink-0 rounded-2xl bg-[#f2b84b]/12 p-3 text-[#ffe1a0] ring-1 ring-[#f2b84b]/20">
                <item.icon size={19} />
              </div>
              <div className="min-w-0">
                <p className="truncate font-black text-stone-50">{item.name}</p>
                <p className="truncate text-sm text-stone-500">{item.status}</p>
              </div>
            </div>
            <p className="mt-3 hidden rounded-2xl bg-black/30 px-3 py-2 text-xs leading-5 text-stone-400 group-hover:block">{item.note}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
