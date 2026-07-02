import { Download } from 'lucide-react'
import useReveal from '../hooks/useReveal'

export default function Resume() {
  const ref = useReveal()

  return (
    <section id="resume" ref={ref} className="px-6 md:px-16 py-24 md:py-32 bg-paper-dim/40 dark:bg-ink-soft/5">
      <div className="max-w-3xl">
        <p className="reveal font-mono text-xs uppercase tracking-widest text-emerald dark:text-emerald-bright mb-4">
          04 — Resume
        </p>
        <h2 className="reveal font-display text-3xl md:text-4xl font-semibold text-ink dark:text-paper mb-6">
          Want the full picture?
        </h2>
        <p className="reveal text-base text-ink-soft dark:text-paper/80 leading-relaxed mb-8 max-w-xl">
          Download the CV that matches the role you're looking to fill.
        </p>

        <div className="reveal flex flex-col sm:flex-row gap-4">
          <a
            href="/resume-developer.pdf"
            download
            className="inline-flex items-center justify-center gap-2 font-mono text-sm px-6 py-3.5 rounded-lg bg-navy dark:bg-emerald text-paper hover:bg-navy-deep dark:hover:bg-emerald-bright transition-colors duration-200"
          >
            <Download size={16} />
            CV — Software Developer
          </a>

          <a
            href="/resume-ea.pdf"
            download
            className="inline-flex items-center justify-center gap-2 font-mono text-sm px-6 py-3.5 rounded-lg border border-emerald text-emerald dark:text-emerald-bright dark:border-emerald-bright hover:bg-emerald hover:text-paper dark:hover:bg-emerald-bright dark:hover:text-navy-deep transition-colors duration-200"
          >
            <Download size={16} />
            CV — Executive Assistant
          </a>
        </div>
      </div>
    </section>
  )
}
