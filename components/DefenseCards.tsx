import { defenseCards } from "@/data/security-data";
import { AnimatedCard } from "./AnimatedCard";

const toneMap = {
  amber: "from-[#f2b84b]/28 to-[#f2b84b]/6 text-[#ffe1a0]",
  red: "from-[#e24637]/28 to-[#e24637]/6 text-[#ffd4cf]",
  green: "from-emerald-400/22 to-emerald-400/6 text-emerald-100",
  blue: "from-sky-400/22 to-sky-400/6 text-sky-100"
};

const progressMap = [88, 71, 94, 79];

export function DefenseCards() {
  return (
    <section className="grid min-w-0 gap-4 sm:grid-cols-2 xl:grid-cols-4">
      {defenseCards.map((card, index) => (
        <AnimatedCard
          key={card.label}
          delay={index * 0.05}
          className="group relative min-h-[170px] min-w-0 overflow-hidden p-4 transition duration-300 hover:shadow-[0_30px_90px_rgba(0,0,0,.42)] sm:min-h-[188px] sm:p-5"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${toneMap[card.color as keyof typeof toneMap]} opacity-90`} />
          <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/10 blur-2xl transition duration-500 group-hover:scale-150" />
          <div className="absolute inset-x-5 top-0 h-px bg-gradient-to-r from-transparent via-white/25 to-transparent" />

          <div className="relative z-10 flex h-full min-w-0 flex-col justify-between gap-5">
            <div className="flex min-w-0 items-start justify-between gap-3">
              <div className="min-w-0">
                <p className="break-words text-sm font-bold text-stone-300">{card.label}</p>
                <p className="mt-3 break-words text-3xl font-black tracking-[-0.055em] text-stone-50 sm:text-4xl">
                  {card.value}
                </p>
              </div>
              <div className="shrink-0 rounded-2xl bg-black/25 p-3 ring-1 ring-white/10 transition group-hover:-translate-y-1 group-hover:bg-black/35">
                <card.icon size={22} />
              </div>
            </div>

            <div>
              <div className="mb-2 flex items-center justify-between gap-3">
                <p className="break-words text-[11px] font-black uppercase tracking-[0.22em] text-stone-500 sm:text-xs">
                  {card.caption}
                </p>
                <p className="text-xs font-black text-stone-400">{progressMap[index]}%</p>
              </div>
              <div className="h-2 overflow-hidden rounded-full bg-black/25">
                <div
                  className="h-full rounded-full bg-stone-50/85 transition-all duration-500 group-hover:bg-[#f2b84b]"
                  style={{ width: `${progressMap[index]}%` }}
                />
              </div>
            </div>
          </div>
        </AnimatedCard>
      ))}
    </section>
  );
}
