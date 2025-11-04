import GlassCard from "./GlassCard"
import { motion } from "framer-motion"
import {
  FileSpreadsheet,
  HardHat,
  Ruler,
  Layers3,
  CalendarCheck2,
  Users2,
  Smartphone,
  Camera,
  ClipboardCheck,
  Bell,
} from "lucide-react"

export default function Features() {
  const webFeatures = [
    {
      icon: <Layers3 className="h-5 w-5" />,
      title: "Projets & Plans",
      desc: "Création de projets, import de plans (PDF, DWG, images) et définition d’échelles précises.",
    },
    {
      icon: <Ruler className="h-5 w-5" />,
      title: "Mesures & Annotation",
      desc: "Mesurez directement sur le plan, annotez, dessinez et comparez différentes versions.",
    },
    {
      icon: <FileSpreadsheet className="h-5 w-5" />,
      title: "Chiffrage & Devis",
      desc: "Chiffrage automatique avec base d’ouvrages, calculs de coûts, marges et exports PDF/Excel.",
    },
    {
      icon: <CalendarCheck2 className="h-5 w-5" />,
      title: "Suivi de chantier",
      desc: "Graphiques Gantt, % d’avancement, alertes budget et rapports automatiques.",
    },
    {
      icon: <Users2 className="h-5 w-5" />,
      title: "Utilisateurs & Rôles",
      desc: "Accès par profil, validations, journal d’activité et notifications en temps réel.",
    },
  ]

  const mobileFeatures = [
    {
      icon: <Smartphone className="h-5 w-5" />,
      title: "Accès hors-ligne",
      desc: "Consultez vos projets et plans sans connexion, synchronisation automatique au retour réseau.",
    },
    {
      icon: <Camera className="h-5 w-5" />,
      title: "Mesures terrain",
      desc: "Mesurez via photo ou réalité augmentée, ajoutez commentaires et marquages.",
    },
    {
      icon: <HardHat className="h-5 w-5" />,
      title: "Signalement & Anomalies",
      desc: "Signalez les défauts avec photo et description, suivi du statut (ouvert/en cours/résolu).",
    },
    {
      icon: <ClipboardCheck className="h-5 w-5" />,
      title: "Avancement chantier",
      desc: "Saisissez le % d’avancement par zone et comparez avec le métré théorique.",
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Notifications push",
      desc: "Alertes en temps réel pour validations, anomalies ou rappels de saisie.",
    },
  ]

  return (
    <section id="features" className="py-16">
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-2xl font-semibold text-center"
      >
        Fonctionnalités clés
      </motion.h2>

      {/* -------- CÔTÉ BUREAU -------- */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-10 text-xl font-semibold text-sky-300 text-center"
      >
        💻 Côté Bureau
      </motion.h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {webFeatures.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
          >
            <GlassCard>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-sky-200">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-medium">{f.title}</h4>
                  <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>

      {/* -------- CÔTÉ TERRAIN -------- */}
      <motion.h3
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-16 text-xl font-semibold text-sky-300 text-center"
      >
        📱 Côté Terrain
      </motion.h3>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {mobileFeatures.map((f, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.03 }}
          >
            <GlassCard>
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 place-items-center rounded-xl border border-white/15 bg-white/10 text-sky-200">
                  {f.icon}
                </div>
                <div>
                  <h4 className="font-medium">{f.title}</h4>
                  <p className="mt-1 text-sm text-slate-300">{f.desc}</p>
                </div>
              </div>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
