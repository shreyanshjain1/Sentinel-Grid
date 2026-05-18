import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SentinelGrid | Cybersecurity Command Center",
  description: "A polished frontend-only cybersecurity monitoring dashboard built with Next.js, TypeScript, Tailwind CSS, and Framer Motion."
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-[#11110f] antialiased`}>{children}</body>
    </html>
  );
}
