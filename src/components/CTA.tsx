import GlassCard from "./GlassCard"
export default function CTA() {
  return (
    <section id="demo" className="py-16">
      <GlassCard className="text-center">
        <h3 className="text-2xl font-semibold">Prêt à voir plus ?</h3>
        <p className="mx-auto mt-2 max-w-2xl text-slate-300">
          Découvrez le prototype interactif et les écrans détaillés : chantiers, tâches, planning et budget.
        </p>
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <a href="#" className="rounded-xl border border-sky-300/40 bg-sky-300/10 px-5 py-3 font-semibold text-sky-200 backdrop-blur hover:bg-sky-300/20">Ouvrir le prototype</a>
          <a href="#contact" className="rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium backdrop-blur hover:bg-white/10">Me contacter</a>
        </div>
      </GlassCard>
    </section>
  )
}
