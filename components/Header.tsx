"use client";

import { motion } from "framer-motion";
import { Bell, Menu, Sparkles } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-background/70 px-4 py-4 backdrop-blur-2xl md:px-8">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4">
        <div className="flex items-center gap-3 lg:hidden">
          <button className="rounded-2xl border border-white/10 bg-white/[0.04] p-2 text-slate-200">
            <Menu size={20} />
          </button>
          <span className="font-bold">SentinelGrid</span>
        </div>
        <div className="hidden lg:block">
          <p className="text-sm text-slate-400">Monday, May 18 · Live security posture</p>
          <h1 className="text-2xl font-bold tracking-tight text-white">Cyber Defense Overview</h1>
        </div>
        <div className="flex items-center gap-3">
          <motion.div
            initial={{ opacity: 0, x: 12 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-4 py-2 text-sm text-emerald-100 md:flex"
          >
            <Sparkles size={16} />
            98.7% uptime
          </motion.div>
          <button className="relative rounded-2xl border border-white/10 bg-white/[0.04] p-3 text-slate-200 transition hover:bg-white/[0.08]">
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-rose-400" />
          </button>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-300 to-violet-400 text-sm font-black text-slate-950">SJ</div>
        </div>
      </div>
    </header>
  );
}
