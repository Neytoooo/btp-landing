import { Building2, Github, Mail } from "lucide-react"
export default function Footer() {
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
  )
}
