import { Activity, Bell, Blocks, Gauge, LayoutDashboard, Radar, Search, Settings, Shield } from "lucide-react";

const links = [
  { label: "Overview", icon: LayoutDashboard, active: true },
  { label: "Incidents", icon: Radar },
  { label: "Assets", icon: Blocks },
  { label: "Telemetry", icon: Activity },
  { label: "Automation", icon: Gauge },
  { label: "Settings", icon: Settings }
];

export function Sidebar() {
  return (
    <aside className="hidden min-h-screen w-72 shrink-0 border-r border-white/10 bg-slate-950/70 px-5 py-6 backdrop-blur-xl lg:block">
      <div className="mb-8 flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300 shadow-glow">
          <Shield size={24} />
        </div>
        <div>
          <p className="text-lg font-bold tracking-tight">SentinelGrid</p>
          <p className="text-xs text-slate-400">Security Command Center</p>
        </div>
      </div>

      <div className="mb-6 flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-slate-400">
        <Search size={16} />
        <span>Search incidents...</span>
      </div>

      <nav className="space-y-2">
        {links.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 rounded-2xl px-4 py-3 text-sm transition ${
              item.active ? "bg-cyan-400/15 text-cyan-100 ring-1 ring-cyan-300/20" : "text-slate-400 hover:bg-white/[0.05] hover:text-white"
            }`}
          >
            <item.icon size={18} />
            {item.label}
          </a>
        ))}
      </nav>

      <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-4">
        <div className="mb-3 flex items-center gap-2 text-cyan-100">
          <Bell size={18} />
          <p className="text-sm font-semibold">AI triage active</p>
        </div>
        <p className="text-xs leading-5 text-cyan-100/70">Automated playbooks are grouping noisy alerts and prioritizing risky assets.</p>
      </div>
    </aside>
  );
}
