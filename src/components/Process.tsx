import GlassCard from "./GlassCard"
export default function Process() {
  const steps = [
    { title: "Découverte", desc: "Objectifs chantier, acteurs, contraintes." },
    { title: "Maquettes", desc: "Parcours, écrans clés, tests rapides." },
    { title: "Dév. MVP", desc: "Itérations courtes, retour terrain." },
    { title: "Déploiement", desc: "Qualité, sécurité, documentation." },
  ]
  return (
    <section className="py-10 sm:py-16">
      <h2 className="text-2xl font-semibold">Processus</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {steps.map((s, i) => (
          <GlassCard key={s.title}>
            <div className="flex items-start gap-3">
              <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10">
                <span className="text-sm font-semibold text-sky-200">{i + 1}</span>
              </div>
              <div><h3 className="font-medium">{s.title}</h3><p className="mt-1 text-sm text-slate-300">{s.desc}</p></div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  )
}
