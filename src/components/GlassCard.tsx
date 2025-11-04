import type { ReactNode } from "react"
export default function GlassCard({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={"relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl " + className}>
      <div className="pointer-events-none absolute inset-px rounded-[0.95rem] bg-gradient-to-br from-white/8 via-white/2 to-transparent" />
      {children}
    </div>
  )
}
