export type SectionKey = "Pulse" | "Threats" | "Assets" | "Playbooks";

export const sectionKeys: SectionKey[] = ["Pulse", "Threats", "Assets", "Playbooks"];

export function isSectionKey(value: string): value is SectionKey {
  return sectionKeys.includes(value as SectionKey);
}
