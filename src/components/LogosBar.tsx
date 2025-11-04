export default function LogosBar() {
  return (
    <section className="pb-8">
      <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 opacity-70">
        {["React", "TypeScript", "Tailwind", "SQLite", "Supabase"].map((logo) => (
          <span key={logo} className="text-xs uppercase tracking-widest text-slate-400">{logo}</span>
        ))}
      </div>
    </section>
  )
}
