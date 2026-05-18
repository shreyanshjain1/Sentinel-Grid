import {
  Activity,
  AlertTriangle,
  Bot,
  Bug,
  CloudCog,
  Cpu,
  DatabaseZap,
  Eye,
  Fingerprint,
  Flame,
  Ghost,
  Globe2,
  LockKeyhole,
  Radar,
  RadioTower,
  ShieldAlert,
  ShieldCheck,
  Siren,
  Skull,
  Sparkles,
  Wifi,
  Zap
} from "lucide-react";

export type Severity = "Critical" | "High" | "Medium" | "Low";
export type IncidentStatus = "Open" | "Investigating" | "Contained" | "Resolved";

export const sidebarLinks = [
  { label: "Pulse", icon: Radar, active: true },
  { label: "Threats", icon: Bug, active: false },
  { label: "Assets", icon: Cpu, active: false },
  { label: "Playbooks", icon: Zap, active: false }
];

export const defenseCards = [
  { label: "Threats blocked", value: "18.9K", caption: "today", icon: ShieldCheck, color: "amber" },
  { label: "Virus popups", value: "42", caption: "simulated", icon: Bug, color: "red" },
  { label: "Endpoint shield", value: "97%", caption: "coverage", icon: LockKeyhole, color: "green" },
  { label: "Signal noise", value: "6.2M", caption: "events", icon: RadioTower, color: "blue" }
];

export const livePopups = [
  { title: "Threat detected", detail: "Malware signature popped from sales-tablet-18", icon: Siren, tone: "danger" },
  { title: "Virus bubble", detail: "Decorative worm alert expanded near gateway node", icon: Bug, tone: "warning" },
  { title: "Identity flare", detail: "Impossible travel marker needs visual attention", icon: Fingerprint, tone: "gold" },
  { title: "Ghost process", detail: "Unknown task appeared inside the endpoint lab", icon: Ghost, tone: "violet" }
];

export const scenarios = [
  {
    tab: "Breach",
    title: "Ransomware decoy breached the honey vault",
    subtitle: "The design highlights alert priority with oversized labels, animated chips, and floating evidence cards.",
    badge: "Critical",
    icon: Skull,
    points: ["Vault node isolated", "Suspicious DLL fingerprinted", "Auto-playbook preview staged"]
  },
  {
    tab: "Phish",
    title: "Credential lure campaign moving through inboxes",
    subtitle: "Hoverable cards, punchy colors, and pop-up labels make the interface feel alive in screenshots.",
    badge: "High",
    icon: AlertTriangle,
    points: ["29 emails clustered", "Domain confidence 91%", "Staff warning banner drafted"]
  },
  {
    tab: "Cloud",
    title: "Cloud token opened a risky admin route",
    subtitle: "This is a frontend showcase, so the panel is visual-first instead of backend-heavy.",
    badge: "Elevated",
    icon: Globe2,
    points: ["Token rotated", "Admin route flagged", "Session replay visualized"]
  },
  {
    tab: "Heat",
    title: "Attack heatwave pushing the public edge",
    subtitle: "Animated meters and 3D blocks create a stronger design language than plain dashboard boxes.",
    badge: "Live",
    icon: Flame,
    points: ["Edge traffic pulsing", "WAF rule preview", "Bot pressure reduced"]
  }
];

export const hoverNodes = [
  { label: "Gateway", value: "WAF pulse", x: "14%", y: "26%" },
  { label: "Tablet", value: "Virus popup", x: "62%", y: "18%" },
  { label: "Vault", value: "Locked", x: "74%", y: "66%" },
  { label: "Identity", value: "Risk marker", x: "28%", y: "72%" }
];

export const tickerItems = ["THREAT DETECTED", "VIRUS POPUP", "ZERO TRUST", "EDGE NODE HOT", "PLAYBOOK READY", "VISUAL MODE"];

export const integrations = [
  { name: "SentinelOne", status: "Armed", icon: ShieldCheck },
  { name: "Cloudflare", status: "Shielding", icon: Globe2 },
  { name: "Okta", status: "Watching", icon: Fingerprint },
  { name: "AI Triage", status: "Decorative", icon: Sparkles },
  { name: "AWS GuardDuty", status: "Healthy", icon: CloudCog },
  { name: "Slack Alerts", status: "Syncing", icon: RadioTower }
];

/*
  Backward-compatible exports below keep Vercel builds clean when older v1
  components still exist in the repository after copying the redesigned files.
  The active v2 page does not rely on these sections, but TypeScript still
  checks every imported file in the project.
*/
export const stats = [
  { label: "Threats blocked", value: "18,942", delta: "+18.4%", trend: "up", icon: ShieldCheck, tone: "cyan" },
  { label: "Active incidents", value: "23", delta: "-7.2%", trend: "down", icon: Siren, tone: "rose" },
  { label: "Protected endpoints", value: "1,842", delta: "+92", trend: "up", icon: DatabaseZap, tone: "emerald" },
  { label: "Risk score", value: "31/100", delta: "Low risk", trend: "flat", icon: Activity, tone: "violet" }
];

export const attackSources = [
  { country: "Russia", value: 32, code: "RU" },
  { country: "China", value: 25, code: "CN" },
  { country: "Brazil", value: 17, code: "BR" },
  { country: "India", value: 14, code: "IN" },
  { country: "Unknown", value: 12, code: "??" }
];

export const timeline = [
  { time: "09:44", label: "Credential stuffing burst blocked", count: 128, severity: "High" as Severity },
  { time: "10:18", label: "Suspicious PowerShell chain isolated", count: 8, severity: "Critical" as Severity },
  { time: "11:05", label: "Cloud access policy tightened", count: 3, severity: "Medium" as Severity },
  { time: "12:27", label: "Phishing kit domain added to denylist", count: 41, severity: "High" as Severity },
  { time: "13:12", label: "Endpoint patch verification completed", count: 627, severity: "Low" as Severity }
];

export const incidents = [
  { id: "INC-2481", title: "Impossible travel login pattern", asset: "finance-admin.pharmacloud.app", owner: "Identity Guard", severity: "Critical" as Severity, status: "Investigating" as IncidentStatus, time: "4 min ago", confidence: 94 },
  { id: "INC-2479", title: "Suspicious archive exfil attempt", asset: "warehouse-nas-02", owner: "Data Loss Shield", severity: "High" as Severity, status: "Contained" as IncidentStatus, time: "22 min ago", confidence: 88 },
  { id: "INC-2475", title: "Malicious browser extension detected", asset: "sales-tablet-18", owner: "Endpoint Sensor", severity: "Medium" as Severity, status: "Open" as IncidentStatus, time: "48 min ago", confidence: 76 },
  { id: "INC-2469", title: "Unusual API token usage", asset: "partner-api-gateway", owner: "Cloud SIEM", severity: "High" as Severity, status: "Investigating" as IncidentStatus, time: "1 hr ago", confidence: 83 },
  { id: "INC-2461", title: "Legacy TLS endpoint discovered", asset: "diagnostics-portal-v1", owner: "Attack Surface", severity: "Low" as Severity, status: "Resolved" as IncidentStatus, time: "3 hrs ago", confidence: 61 },
  { id: "INC-2458", title: "Repeated failed privileged elevation", asset: "ops-laptop-07", owner: "Behavior AI", severity: "Medium" as Severity, status: "Contained" as IncidentStatus, time: "5 hrs ago", confidence: 79 }
];

export const controls = [
  { name: "Endpoint Detection", score: 96, icon: ShieldAlert },
  { name: "Identity Protection", score: 88, icon: Fingerprint },
  { name: "Cloud Posture", score: 81, icon: CloudCog },
  { name: "Network Defense", score: 74, icon: Wifi },
  { name: "Dark Web Watch", score: 69, icon: Eye }
];

export const filterOptions = ["All", "Critical", "High", "Medium", "Low"] as const;

export const responsePlaybooks = [
  { title: "Lock risky sessions", detail: "Force re-authentication for high-risk accounts", progress: 82 },
  { title: "Quarantine endpoints", detail: "Move affected devices into isolated VLAN", progress: 64 },
  { title: "Patch exposed assets", detail: "Prioritize internet-facing services first", progress: 48 }
];

export const legacyIntegrations = [
  { name: "Okta", status: "Healthy", icon: LockKeyhole },
  { name: "AWS GuardDuty", status: "Syncing", icon: CloudCog },
  { name: "SentinelOne", status: "Healthy", icon: ShieldCheck },
  { name: "Cloudflare", status: "Healthy", icon: Globe2 },
  { name: "Slack Alerts", status: "Delayed", icon: RadioTower },
  { name: "AI Triage", status: "Healthy", icon: Bot }
];
