"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const [pressed, setPressed] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);
  const dotX = useMotionValue(-100);
  const dotY = useMotionValue(-100);

  const ringX = useSpring(mouseX, { stiffness: 240, damping: 24, mass: 0.4 });
  const ringY = useSpring(mouseY, { stiffness: 240, damping: 24, mass: 0.4 });
  const smallX = useSpring(dotX, { stiffness: 700, damping: 34, mass: 0.2 });
  const smallY = useSpring(dotY, { stiffness: 700, damping: 34, mass: 0.2 });

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    setEnabled(finePointer.matches);

    const updatePointer = () => setEnabled(finePointer.matches);
    finePointer.addEventListener("change", updatePointer);

    const move = (event: MouseEvent) => {
      mouseX.set(event.clientX - 22);
      mouseY.set(event.clientY - 22);
      dotX.set(event.clientX - 4);
      dotY.set(event.clientY - 4);
    };

    const down = () => setPressed(true);
    const up = () => setPressed(false);

    const over = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;
      setHovering(Boolean(target?.closest("button, a, input, textarea, select, [role='button']")));
    };

    window.addEventListener("mousemove", move);
    window.addEventListener("mousedown", down);
    window.addEventListener("mouseup", up);
    window.addEventListener("mouseover", over);

    return () => {
      finePointer.removeEventListener("change", updatePointer);
      window.removeEventListener("mousemove", move);
      window.removeEventListener("mousedown", down);
      window.removeEventListener("mouseup", up);
      window.removeEventListener("mouseover", over);
    };
  }, [dotX, dotY, mouseX, mouseY]);

  if (!enabled) return null;

  return (
    <>
      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[9999] h-11 w-11 rounded-full border border-[#f2b84b]/80 mix-blend-difference"
        style={{ x: ringX, y: ringY }}
        animate={{
          scale: pressed ? 0.72 : hovering ? 1.55 : 1,
          opacity: hovering ? 0.95 : 0.75
        }}
        transition={{ duration: 0.16 }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none fixed left-0 top-0 z-[10000] h-2 w-2 rounded-full bg-[#f2b84b] shadow-[0_0_22px_rgba(242,184,75,.85)]"
        style={{ x: smallX, y: smallY }}
        animate={{ scale: pressed ? 1.9 : hovering ? 1.35 : 1 }}
        transition={{ duration: 0.12 }}
      />
    </>
  );
}
