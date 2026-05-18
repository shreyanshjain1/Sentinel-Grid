import { AlertTriangle, Bug, Cpu, Fingerprint, Flame, Ghost, Globe2, LockKeyhole, Radar, RadioTower, ShieldCheck, Siren, Skull, Sparkles, Zap } from "lucide-react";

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
  { name: "AI Triage", status: "Decorative", icon: Sparkles }
];
