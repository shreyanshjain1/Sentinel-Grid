import { integrations, hoverNodes } from "@/data/security-data";
import { MousePointer2 } from "lucide-react";

export function HoverLab() {
  return (
    <section className="space-y-6">
      <div className="shell-card relative min-h-[430px] overflow-hidden rounded-[2.2rem] p-5 md:p-6">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_42%,rgba(242,184,75,.15),transparent_38%)]" />
        <div className="relative z-10 mb-5 flex items-center justify-between gap-4">
          <div>
            <p className="text-xs font-black uppercase tracking-[0.3em] text-[#f2b84b]">Hover lab</p>
            <h3 className="mt-2 text-2xl font-black tracking-tight">Pop-up node map</h3>
          </div>
          <MousePointer2 className="text-[#f2b84b]" />
        </div>

        <div className="relative z-10 h-[320px] overflow-hidden rounded-[1.8rem] border border-white/10 bg-[#0d0d0c]">
          <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle,rgba(255,255,255,.25)_1px,transparent_1px)] [background-size:22px_22px]" />
          <div className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#f2b84b]/20" />
          <div className="absolute left-1/2 top-1/2 h-28 w-28 -translate-x-1/2 -translate-y-1/2 rounded-full border border-[#e24637]/30 bg-[#e24637]/10" />
          {hoverNodes.map((node) => (
            <button
              key={node.label}
              className="group absolute flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl bg-[#f2b84b] font-black text-black shadow-[0_20px_60px_rgba(242,184,75,.28)] transition hover:scale-110"
              style={{ left: node.x, top: node.y }}
            >
              {node.label.slice(0, 2)}
              <span className="pointer-events-none absolute -top-16 left-1/2 w-max -translate-x-1/2 rounded-2xl bg-stone-50 px-4 py-2 text-xs font-black text-black opacity-0 shadow-2xl transition group-hover:opacity-100">
                {node.label}: {node.value}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        {integrations.map((item) => (
          <div key={item.name} className="group rounded-[1.6rem] border border-white/10 bg-white/[0.05] p-4 transition hover:-translate-y-1 hover:bg-white/[0.08]">
            <div className="flex items-center gap-3">
              <div className="rounded-2xl bg-[#f2b84b]/12 p-3 text-[#ffe1a0] ring-1 ring-[#f2b84b]/20">
                <item.icon size={19} />
              </div>
              <div>
                <p className="font-black text-stone-50">{item.name}</p>
                <p className="text-sm text-stone-500">{item.status}</p>
              </div>
            </div>
            <p className="mt-3 hidden rounded-2xl bg-black/30 px-3 py-2 text-xs text-stone-400 group-hover:block">Decorative tooltip panel for richer UI screenshots.</p>
          </div>
        ))}
      </div>
    </section>
  );
}
