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
  Wifi,
  Zap
} from "lucide-react";

export type Severity = "Critical" | "High" | "Medium" | "Low";
export type IncidentStatus = "Open" | "Investigating" | "Contained" | "Resolved";

export const sidebarLinks = [
  { label: "Pulse", icon: Radar, active: true },
  { label: "Threats", icon: AlertTriangle, active: false },
  { label: "Assets", icon: Cpu, active: false },
  { label: "Playbooks", icon: Zap, active: false }
];

export const defenseCards = [
  { label: "Threats blocked", value: "18.9K", caption: "today", icon: ShieldCheck, color: "amber" },
  { label: "Active cases", value: "42", caption: "triaged", icon: AlertTriangle, color: "red" },
  { label: "Endpoint shield", value: "97%", caption: "coverage", icon: LockKeyhole, color: "green" },
  { label: "Signal noise", value: "6.2M", caption: "events", icon: RadioTower, color: "blue" }
];

export const livePopups = [
  { title: "Critical endpoint isolated", detail: "sales-tablet-18 was moved into containment after a signed payload mismatch.", icon: Siren, tone: "danger", tags: ["endpoint", "contained"] },
  { title: "Gateway rule tightened", detail: "Cloudflare rate controls were elevated for a burst against the public login route.", icon: ShieldAlert, tone: "warning", tags: ["edge", "rate limit"] },
  { title: "Identity risk confirmed", detail: "Impossible travel was verified for a finance administrator and sessions were revoked.", icon: Fingerprint, tone: "gold", tags: ["identity", "revoked"] },
  { title: "Unknown process held", detail: "A low-reputation process was blocked while the device policy was refreshed.", icon: Ghost, tone: "violet", tags: ["device", "policy"] }
];

export const scenarios = [
  {
    tab: "Breach",
    title: "Ransomware activity contained before lateral movement",
    subtitle: "The affected vault node was isolated, related hashes were clustered, and the response queue is ready for review.",
    badge: "Critical",
    icon: Skull,
    points: ["Vault node isolated", "Suspicious DLL fingerprinted", "Recovery owner assigned"],
    action: "Open containment brief"
  },
  {
    tab: "Phish",
    title: "Credential lure campaign flagged across mailboxes",
    subtitle: "The campaign was grouped by sender pattern, destination domain, and recipient risk so the team can respond quickly.",
    badge: "High",
    icon: AlertTriangle,
    points: ["29 emails clustered", "Domain confidence 91%", "Staff banner queued"],
    action: "Review sender cluster"
  },
  {
    tab: "Cloud",
    title: "Cloud token attempted a privileged admin route",
    subtitle: "Risky sessions were revoked, the access policy was tightened, and the cloud owner has a clean action summary.",
    badge: "Elevated",
    icon: Globe2,
    points: ["Token rotated", "Admin route flagged", "Session audit ready"],
    action: "View cloud exposure"
  },
  {
    tab: "Heat",
    title: "Public edge traffic is above baseline",
    subtitle: "Edge activity is being watched against normal login volume, bot pressure, and WAF challenge performance.",
    badge: "Live",
    icon: Flame,
    points: ["Edge traffic pulsing", "WAF rule promoted", "Bot pressure reduced"],
    action: "Inspect edge trend"
  }
];

export const hoverNodes = [
  { label: "Gateway", value: "WAF pulse", x: "14%", y: "26%" },
  { label: "Tablet", value: "Contained", x: "62%", y: "18%" },
  { label: "Vault", value: "Locked", x: "74%", y: "66%" },
  { label: "Identity", value: "Risk marker", x: "28%", y: "72%" }
];

export const tickerItems = ["CRITICAL CASE OPEN", "SESSION REVOKED", "ZERO TRUST", "EDGE NODE HOT", "PLAYBOOK READY", "MONITORING ACTIVE"];

export const integrations = [
  { name: "SentinelOne", status: "Armed", icon: ShieldCheck, note: "Endpoint telemetry is flowing normally." },
  { name: "Cloudflare", status: "Shielding", icon: Globe2, note: "Edge rules are active for public routes." },
  { name: "Okta", status: "Watching", icon: Fingerprint, note: "Identity risk scoring is enabled." },
  { name: "Triage Core", status: "Prioritizing", icon: Bot, note: "Cases are grouped by severity and owner." },
  { name: "AWS GuardDuty", status: "Healthy", icon: CloudCog, note: "Cloud findings are synced into the queue." },
  { name: "Slack Alerts", status: "Syncing", icon: RadioTower, note: "Response updates are ready for team channels." }
];


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
