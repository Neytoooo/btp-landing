import GlassCard from "./GlassCard"
export default function TechStack() {
  const stacks = ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Lucide", "Framer Motion", "SQLite / Supabase"]
  return (
    <section id="tech" className="py-10 sm:py-16">
      <h2 className="text-2xl font-semibold">Stack technique</h2>
      <GlassCard className="mt-6">
        <div className="flex flex-wrap gap-2">
          {stacks.map((s) => (
            <span key={s} className="rounded-lg border border-white/15 bg-white/10 px-3 py-1 text-sm text-white/90">{s}</span>
          ))}
        </div>
        <p className="mt-4 text-sm text-slate-300">
          Auth, stockage et synchro peuvent s&apos;appuyer sur Supabase/SQLite. UI basée sur des composants accessibles.
        </p>
      </GlassCard>
    </section>
  )
}
