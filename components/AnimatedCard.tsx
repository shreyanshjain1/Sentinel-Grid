"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function AnimatedCard({ children, className, delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      whileHover={{ y: -4 }}
      className={cn("glass-panel rounded-3xl", className)}
    >
      {children}
    </motion.div>
  );
}
