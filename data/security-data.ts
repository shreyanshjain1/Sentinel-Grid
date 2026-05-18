import { Activity, Bot, CloudCog, DatabaseZap, Eye, Fingerprint, Globe2, LockKeyhole, RadioTower, ShieldAlert, ShieldCheck, Siren, Wifi } from "lucide-react";

export type Severity = "Critical" | "High" | "Medium" | "Low";
export type IncidentStatus = "Open" | "Investigating" | "Contained" | "Resolved";

export const stats = [
  { label: "Threats blocked", value: "12,482", delta: "+18.4%", trend: "up", icon: ShieldCheck, tone: "cyan" },
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

export const integrations = [
  { name: "Okta", status: "Healthy", icon: LockKeyhole },
  { name: "AWS GuardDuty", status: "Syncing", icon: CloudCog },
  { name: "SentinelOne", status: "Healthy", icon: ShieldCheck },
  { name: "Cloudflare", status: "Healthy", icon: Globe2 },
  { name: "Slack Alerts", status: "Delayed", icon: RadioTower },
  { name: "AI Triage", status: "Healthy", icon: Bot }
];

export const filterOptions = ["All", "Critical", "High", "Medium", "Low"] as const;

export const responsePlaybooks = [
  { title: "Lock risky sessions", detail: "Force re-authentication for high-risk accounts", progress: 82 },
  { title: "Quarantine endpoints", detail: "Move affected devices into isolated VLAN", progress: 64 },
  { title: "Patch exposed assets", detail: "Prioritize internet-facing services first", progress: 48 }
];
