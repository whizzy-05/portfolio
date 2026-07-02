import useReveal from '../hooks/useReveal'

const FACTS = [
  'Based in Nairobi, Kenya',
  'Computer Science student',
  'Interested in software development, executive assistance, and technology',
  'Passionate about using technology to improve education and business operations',
]

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" ref={ref} className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="reveal font-mono text-xs uppercase tracking-widest text-emerald dark:text-emerald-bright mb-4">
          01 — About
        </p>
        <h2 className="reveal font-display text-3xl md:text-4xl font-semibold text-ink dark:text-paper mb-8">
          A little about me
        </h2>

        <div className="reveal rounded-lg border border-slate/25 bg-paper-dim/40 dark:bg-ink-soft/10 overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate/20 bg-paper-dim/60 dark:bg-ink-soft/20">
            <span className="w-2.5 h-2.5 rounded-full bg-slate/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate/40" />
            <span className="font-mono text-[11px] text-slate ml-2">about.md</span>
          </div>
          <ul className="p-6 space-y-3">
            {FACTS.map((fact) => (
              <li key={fact} className="flex gap-3 text-sm md:text-base text-ink-soft dark:text-paper/80">
                <span className="text-emerald dark:text-emerald-bright font-mono">-</span>
                <span>{fact}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
