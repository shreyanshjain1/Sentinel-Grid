import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SentinelGrid | Cybersecurity Command Center",
  description: "A polished frontend-only cybersecurity monitoring dashboard built with Next.js, TypeScript, Tailwind CSS, and Framer Motion."
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} min-h-screen bg-background antialiased`}>{children}</body>
    </html>
  );
}
