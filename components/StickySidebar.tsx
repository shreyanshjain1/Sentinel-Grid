import { Activity, Bell, Search, ShieldHalf } from "lucide-react";
import { sidebarLinks } from "@/data/security-data";
import { isSectionKey, type SectionKey } from "@/lib/navigation";

type StickySidebarProps = {
  activeSection: SectionKey;
  onSectionChange: (section: SectionKey) => void;
};

export function StickySidebar({ activeSection, onSectionChange }: StickySidebarProps) {
  return (
    <aside className="sticky top-0 hidden h-screen w-[292px] shrink-0 border-r border-stone-100/10 bg-black/20 p-5 backdrop-blur-3xl lg:block">
      <div className="flex h-full flex-col">
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#f2b84b] text-black shadow-[0_18px_50px_rgba(242,184,75,.3)]">
            <ShieldHalf size={25} />
          </div>
          <div>
            <p className="text-lg font-black tracking-tight">SentinelGrid</p>
            <p className="text-xs uppercase tracking-[0.32em] text-stone-400">Security Ops</p>
          </div>
        </div>

        <div className="mb-6 flex items-center gap-2 rounded-2xl border border-stone-100/10 bg-stone-950/40 px-3 py-3 text-sm text-stone-400">
          <Search size={16} />
          <span>Search assets...</span>
        </div>

        <nav className="space-y-2">
          {sidebarLinks.map((item) => {
            const selected = activeSection === item.label;

            return (
              <button
                key={item.label}
                type="button"
                onClick={() => {
                  if (isSectionKey(item.label)) onSectionChange(item.label);
                }}
                className={`group relative flex w-full items-center gap-3 overflow-hidden rounded-2xl px-4 py-3 text-left text-sm font-semibold transition ${
                  selected
                    ? "bg-[#f2b84b] text-black shadow-[0_18px_50px_rgba(242,184,75,.22)]"
                    : "text-stone-400 hover:bg-white/[0.06] hover:text-stone-50"
                }`}
              >
                <item.icon size={18} />
                {item.label}
                {!selected && <span className="ml-auto h-2 w-2 rounded-full bg-stone-700 transition group-hover:bg-[#f2b84b]" />}
              </button>
            );
          })}
        </nav>

        <div className="mt-7 rounded-[1.8rem] border border-[#f2b84b]/20 bg-[#f2b84b]/10 p-4">
          <div className="mb-3 flex items-center gap-2 text-[#ffe1a0]">
            <Bell size={18} />
            <p className="text-sm font-black">Live escalation</p>
          </div>
          <p className="text-xs leading-5 text-stone-300">Critical detections are grouped by asset owner, severity, and containment status.</p>
        </div>

        <div className="mt-auto rounded-[1.8rem] bg-stone-950/60 p-4 ring-1 ring-white/10">
          <div className="mb-3 flex items-center gap-2 text-stone-200">
            <Activity size={17} className="text-[#f2b84b]" />
            <span className="text-sm font-bold">Coverage health</span>
          </div>
          <div className="h-2 overflow-hidden rounded-full bg-white/10">
            <div className="h-full w-[84%] rounded-full bg-gradient-to-r from-[#f2b84b] to-[#e24637]" />
          </div>
          <p className="mt-3 text-xs text-stone-500">84% monitored estate</p>
        </div>
      </div>
    </aside>
  );
}
