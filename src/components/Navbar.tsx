import { Hammer } from "lucide-react"
export default function Navbar() {
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
            <a href="#demo" className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-4 py-2 font-medium backdrop-blur hover:bg-white/15">Voir la démo</a>
          </nav>
        </div>
      </div>
    </header>
  )
}
