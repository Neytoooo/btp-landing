import { useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion"
import { HardHat, ClipboardList, CalendarCheck2, FileSpreadsheet, Layers3, ShieldCheck, ArrowRight, CheckCircle2, Hammer, Building2, Smartphone, Github, Mail, Camera, ClipboardCheck, Bell, Users2, Ruler } from "lucide-react";

function GlassCard({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={"relative overflow-hidden rounded-2xl border border-white/15 bg-white/5 p-6 shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl " + className}>
      <div className="pointer-events-none absolute inset-px rounded-[0.95rem] bg-gradient-to-br from-white/8 via-white/2 to-transparent" />
      {children}
    </div>
  );
}

function Navbar() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-slate-950/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="grid h-9 w-9 place-items-center rounded-xl border border-white/20 bg-white/10 backdrop-blur">
              <Hammer className="h-5 w-5" />
            </div>
            <span className="font-semibold tracking-wide">BTP App</span>
          </a>
          <nav className="hidden items-center gap-6 text-sm/none sm:flex">
            <a href="#features" className="opacity-80 hover:opacity-100">Fonctionnalités</a>
            <a href="#showcase" className="opacity-80 hover:opacity-100">Aperçu</a>
            <a href="#tech" className="opacity-80 hover:opacity-100">Stack</a>
            <a href="#contact" className="opacity-80 hover:opacity-100">Contact</a>
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-medium backdrop-blur hover:bg-white/15">
              Voir la démo <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section className="py-16 sm:py-24">
      <div className="grid items-center gap-10 lg:grid-cols-2">
        <div>
          <motion.h1 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-4xl font-bold tracking-tight sm:text-5xl">
            La gestion de chantier, <span className="text-sky-300">plus claire</span> que jamais
          </motion.h1>
          <p className="mt-5 max-w-xl text-slate-300">
            BTP App est une application web et mobile conçue pour les professionnels du bâtiment, et plus particulièrement pour les métreurs, conducteurs de travaux et bureaux d’études.
Elle centralise tout le cycle d’un projet, du plan au chiffrage, puis du suivi de chantier à la facturation, dans une interface moderne, rapide et intuitive.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-sky-300/40 bg-sky-300/10 px-5 py-3 font-semibold text-sky-200 backdrop-blur hover:bg-sky-300/20">
              Lancer la démo <ArrowRight className="h-4 w-4" />
            </a>
            <a href="#code" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/5 px-5 py-3 font-medium backdrop-blur hover:bg-white/10">
              Voir le code <Github className="h-4 w-4" />
            </a>
          </div>

          <ul className="mt-6 grid max-w-xl grid-cols-1 gap-3 text-sm text-slate-300 sm:grid-cols-2">
            {[
              "Mode hors-ligne & synchronisation",
              "Tableaux Kanban & Gantt simple",
              "Suivi des non-conformités",
              "Budgets et coûts engagés",
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-emerald-300" />
                {item}
              </li>
            ))}
          </ul>
        </div>

        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <GlassCard className="p-0">
            <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
              <div className="absolute inset-0 bg-gradient-to-br from-slate-800/60 via-slate-800/20 to-slate-900/60" />
              <div className="absolute inset-0 grid place-items-center">
                <div className="rounded-xl border border-white/20 bg-white/10 px-4 py-2 text-xs text-white/90 backdrop-blur">
                  Placeholder capture d'écran (remplace par image réelle)
                </div>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}

function LogosBar() {
  return (
    <section className="pb-8">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
        {["React", "TypeScript", "Tailwind", "SQLite", "Supabase"].map((logo) => (
          <span key={logo} className="text-xs uppercase tracking-widest text-slate-400">
            {logo}
          </span>
        ))}
      </div>
    </section>
  );
}

function Features() {
  const reduce = useReducedMotion();

  // Variantes d'animation
  const heading = {
    hidden: { opacity: 0, y: 12, filter: "blur(6px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: reduce ? { duration: 0 } : { duration: 0.45, ease: "easeOut" }
    }
  };
  const container = (delay = 0) => ({
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: reduce ? { duration: 0 } : { delay, staggerChildren: 0.08, delayChildren: 0.06 }
    }
  });
  const item = {
    hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
    show: {
      opacity: 1, y: 0, filter: "blur(0px)",
      transition: reduce ? { duration: 0 } : { type: "spring", stiffness: 90, damping: 16, mass: 0.5 }
    }
  };

  const webFeatures = [
    { icon: <Layers3 className="h-5 w-5" />, title: "Projets & Plans", desc: "Création de projets, import de plans (PDF, DWG, images) et définition d’échelles précises." },
    { icon: <Ruler className="h-5 w-5" />, title: "Mesures & Annotation", desc: "Mesurez directement sur le plan, annotez, dessinez et comparez différentes versions." },
    { icon: <FileSpreadsheet className="h-5 w-5" />, title: "Chiffrage & Devis", desc: "Chiffrage automatique avec base d’ouvrages, calculs de coûts, marges et exports PDF/Excel." },
    { icon: <CalendarCheck2 className="h-5 w-5" />, title: "Suivi de chantier", desc: "Graphiques Gantt, % d’avancement, alertes budget et rapports automatiques." },
    { icon: <Users2 className="h-5 w-5" />, title: "Utilisateurs & Rôles", desc: "Accès par profil, validations, journal d’activité et notifications en temps réel." },
  ];

  const mobileFeatures = [
    { icon: <Smartphone className="h-5 w-5" />, title: "Accès hors-ligne", desc: "Consultez vos projets et plans sans connexion, synchronisation automatique au retour réseau." },
    { icon: <Camera className="h-5 w-5" />, title: "Mesures terrain", desc: "Mesurez via photo ou réalité augmentée, ajoutez commentaires et marquages." },
    { icon: <HardHat className="h-5 w-5" />, title: "Signalement & Anomalies", desc: "Signalez les défauts avec photo et description, suivi du statut (ouvert/en cours/résolu)." },
    { icon: <ClipboardCheck className="h-5 w-5" />, title: "Avancement chantier", desc: "Saisissez le % d’avancement par zone et comparez avec le métré théorique." },
    { icon: <Bell className="h-5 w-5" />, title: "Notifications push", desc: "Alertes en temps réel pour validations, anomalies ou rappels de saisie." },
  ];

  return (
    <section id="features" className="py-16">
      <motion.h2
        variants={heading}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="text-2xl font-semibold text-center"
      >
        Fonctionnalités clés
      </motion.h2>

      {/* -------- CÔTÉ BUREAU -------- */}
      <motion.h3
        variants={heading}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mt-10 text-xl font-semibold text-sky-300 text-center"
      >
        💻 Côté Bureau
      </motion.h3>

      <motion.div
        variants={container(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {webFeatures.map((f, i) => (
          <motion.div key={i} variants={item}>
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
      </motion.div>

      {/* -------- CÔTÉ TERRAIN -------- */}
      <motion.h3
        variants={heading}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mt-16 text-xl font-semibold text-sky-300 text-center"
      >
        📱 Côté Terrain
      </motion.h3>

      <motion.div
        variants={container(0.05)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-10% 0px" }}
        className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto"
      >
        {mobileFeatures.map((f, i) => (
          <motion.div key={i} variants={item}>
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
      </motion.div>
    </section>
  );
}



function Showcase() {
  return (
    <section id="showcase" className="py-10 sm:py-16">
      <div className="grid items-stretch gap-4 lg:grid-cols-2">
        <GlassCard className="p-0">
          <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-sky-400/10 via-white/5 to-transparent" />
            <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">Aperçu Desktop</div>
            <div className="absolute inset-0 grid place-items-center">
              <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs">Place une capture</span>
            </div>
          </div>
        </GlassCard>
        <GlassCard className="p-0">
          <div className="relative aspect-[9/16] w-full overflow-hidden rounded-2xl">
            <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/10 via-white/5 to-transparent" />
            <div className="absolute left-4 top-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs text-white/80">
              <Smartphone className="h-3.5 w-3.5" /> Mobile
            </div>
            <div className="absolute inset-0 grid place-items-center">
              <span className="rounded-md border border-white/20 bg-white/10 px-3 py-1 text-xs">Place une capture</span>
            </div>
          </div>
        </GlassCard>
      </div>
    </section>
  );
}

function KPI() {
  const items = [
    { value: "-32%", label: "de retard moyen sur tâches" },
    { value: "+21%", label: "de visibilité sur coûts" },
    { value: "~2x", label: "plus rapide pour documenter" },
  ];
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
  );
}

function Process() {
  const steps = [
    { title: "Découverte", desc: "Objectifs chantier, acteurs, contraintes." },
    { title: "Maquettes", desc: "Parcours, écrans clés, tests rapides." },
    { title: "Dév. MVP", desc: "Itérations courtes, retour terrain." },
    { title: "Déploiement", desc: "Qualité, sécurité, documentation." },
  ];
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
              <div>
                <h3 className="font-medium">{s.title}</h3>
                <p className="mt-1 text-sm text-slate-300">{s.desc}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
}

function TechStack() {
  const stacks = ["React", "TypeScript", "Vite", "Tailwind", "shadcn/ui", "Lucide", "Framer Motion", "SQLite / Supabase"];
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
          Auth, stockage et synchro peuvent s'appuyer sur Supabase/SQLite. UI basée sur des composants accessibles.
        </p>
      </GlassCard>
    </section>
  );
}

function CTA() {
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
  );
}

function Footer() {
  return (
    <footer id="contact" className="border-t border-white/10 bg-slate-950/60 py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <div className="flex items-center gap-2">
              <Building2 className="h-5 w-5" />
              <span className="font-semibold">BTP App</span>
            </div>
            <p className="mt-3 max-w-sm text-sm text-slate-400">
              Application de gestion de chantier  vitrine pour portfolio. Remplace ce texte par ton pitch et tes infos.
            </p>
          </div>
          <div>
            <h4 className="font-medium">Liens</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li><a href="#features" className="hover:underline">Fonctionnalités</a></li>
              <li><a href="#showcase" className="hover:underline">Aperçu</a></li>
              <li><a href="#tech" className="hover:underline">Stack</a></li>
              <li><a href="#demo" className="hover:underline">Démo</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium">Contact</h4>
            <div className="mt-3 space-y-2 text-sm text-slate-300">
              <a className="inline-flex items-center gap-2" href="mailto:contact@example.com"><Mail className="h-4 w-4" /> contact@example.com</a>
              <a className="inline-flex items-center gap-2" href="#"><Github className="h-4 w-4" /> github.com/ton-profil</a>
            </div>
          </div>
        </div>
        <p className="mt-8 text-center text-xs text-slate-500"> {new Date().getFullYear()} BTP App  Tous droits réservés.</p>
      </div>
    </footer>
  );
}

export default function LandingBTP() {
  useEffect(() => { document.title = "BTP  Application de gestion de chantier"; }, []);
  return (
    <div className="min-h-screen bg-[radial-gradient(80rem_80rem_at_10%_-10%,#1e3a8a33,transparent),radial-gradient(80rem_80rem_at_110%_10%,#0ea5e94d,transparent)] bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 -z-10">
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(59,130,246,0.12),rgba(14,165,233,0.10)40%,rgba(2,6,23,0.6))]" />
      </div>
      <Navbar />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <LogosBar />
        <Features />
        <Showcase />
        <KPI />
        <Process />
        <TechStack />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
