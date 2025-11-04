import GlassCard from "./GlassCard"
import { HardHat, ClipboardList, CalendarCheck2, FileSpreadsheet, Layers3, ShieldCheck } from "lucide-react"
import { motion } from "framer-motion"
export default function Features() {
  const data = [
    { icon: <HardHat className="h-5 w-5" />, title: "Chantiers", desc: "Vue globale, statuts, responsables et progrès %." },
    { icon: <ClipboardList className="h-5 w-5" />, title: "Tâches & lots", desc: "Kanban, priorités, checklists et pièces jointes." },
    { icon: <CalendarCheck2 className="h-5 w-5" />, title: "Planning", desc: "Jalons, dépendances simples, vue Gantt légère." },
    { icon: <FileSpreadsheet className="h-5 w-5" />, title: "Budget", desc: "Prévu vs engagé, alertes de dépassement." },
    { icon: <Layers3 className="h-5 w-5" />, title: "Documents", desc: "Plans, DOE, versions et tags métier." },
    { icon: <ShieldCheck className="h-5 w-5" />, title: "Qualité & Sécurité", desc: "NC, incidents, actions, SLA visibles." },
  ]
  return (
    <section id="features" className="py-10 sm:py-16">
      <motion.h2 initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-2xl font-semibold">Fonctionnalités clés</motion.h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {data.map((f, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.03 }}>
            <GlassCard>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-sky-200">{f.icon}</div>
                <div><h3 className="font-medium">{f.title}</h3><p className="mt-1 text-sm text-slate-300">{f.desc}</p></div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
