import { defenseCards } from "@/data/security-data";
import { AnimatedCard } from "./AnimatedCard";

const toneMap = {
  amber: "from-[#f2b84b]/25 to-[#f2b84b]/5 text-[#ffe1a0]",
  red: "from-[#e24637]/25 to-[#e24637]/5 text-[#ffd4cf]",
  green: "from-emerald-400/20 to-emerald-400/5 text-emerald-100",
  blue: "from-sky-400/20 to-sky-400/5 text-sky-100"
};

export function DefenseCards() {
  return (
    <section className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {defenseCards.map((card, index) => (
        <AnimatedCard key={card.label} delay={index * 0.05} className="group relative overflow-hidden p-5">
          <div className={`absolute inset-0 bg-gradient-to-br ${toneMap[card.color as keyof typeof toneMap]} opacity-80`} />
          <div className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-white/10 blur-2xl transition group-hover:scale-150" />
          <div className="relative z-10 flex items-start justify-between gap-4">
            <div>
              <p className="text-sm font-bold text-stone-300">{card.label}</p>
              <p className="mt-3 text-4xl font-black tracking-[-0.05em] text-stone-50">{card.value}</p>
              <p className="mt-2 text-xs font-black uppercase tracking-[0.24em] text-stone-500">{card.caption}</p>
            </div>
            <div className="rounded-2xl bg-black/25 p-3 ring-1 ring-white/10">
              <card.icon size={24} />
            </div>
          </div>
          <div className="relative z-10 mt-5 h-2 overflow-hidden rounded-full bg-black/25">
            <div className="h-full w-[72%] rounded-full bg-stone-50/80 transition-all duration-500 group-hover:w-[94%]" />
          </div>
        </AnimatedCard>
      ))}
    </section>
  );
}
