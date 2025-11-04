import GlassCard from "./GlassCard"
export default function KPI() {
  const items = [
    { value: "-32%", label: "de retard moyen sur tâches" },
    { value: "+21%", label: "de visibilité sur coûts" },
    { value: "~2x", label: "plus rapide pour documenter" },
  ]
  return (
    <section className="py-10 sm:py-16">
      <GlassCard>
        <div className="grid gap-6 text-center sm:grid-cols-3">
          {items.map((k) => (
            <div key={k.label}>
              <div className="text-3xl font-bold tracking-tight text-white">{k.value}</div>
              <div className="mt-1 text-sm text-slate-300">{k.label}</div>
            </div>
          ))}
        </div>
      </GlassCard>
    </section>
  )
}
