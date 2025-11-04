import GlassCard from "./GlassCard"
import { Smartphone } from "lucide-react"
export default function Showcase() {
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
  )
}
