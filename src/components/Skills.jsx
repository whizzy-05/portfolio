import useReveal from '../hooks/useReveal'

const TECHNICAL = ['HTML', 'CSS', 'JavaScript', 'React', 'Python', 'Git & GitHub', 'Microsoft Office', 'Google Workspace']
const ADMIN = ['Calendar Management', 'Email Management', 'Customer Support', 'Data Entry', 'Internet Research', 'Document Preparation', 'Communication']

function SkillGroup({ title, items }) {
  return (
    <div className="flex-1 min-w-[240px]">
      <p className="font-mono text-[11px] text-slate uppercase tracking-widest mb-3">{title}</p>
      <div className="flex flex-wrap gap-2">
        {items.map((skill) => (
          <span
            key={skill}
            className="font-mono text-xs px-3 py-1.5 rounded-full border border-slate/30 text-ink-soft dark:text-paper/80 hover:border-emerald dark:hover:border-emerald-bright hover:text-emerald dark:hover:text-emerald-bright transition-colors duration-150"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useReveal()

  return (
    <section id="skills" ref={ref} className="px-6 md:px-16 py-24 md:py-32 bg-paper-dim/40 dark:bg-ink-soft/5">
      <div className="max-w-4xl">
        <p className="reveal font-mono text-xs uppercase tracking-widest text-emerald dark:text-emerald-bright mb-4">
          02 — Skills
        </p>
        <h2 className="reveal font-display text-3xl md:text-4xl font-semibold text-ink dark:text-paper mb-10">
          What I bring to the table
        </h2>

        <div className="reveal rounded-lg border border-slate/25 bg-paper dark:bg-navy-deep overflow-hidden">
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-slate/20 bg-paper-dim/60 dark:bg-ink-soft/20">
            <span className="w-2.5 h-2.5 rounded-full bg-slate/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate/40" />
            <span className="w-2.5 h-2.5 rounded-full bg-slate/40" />
            <span className="font-mono text-[11px] text-slate ml-2">skills.json</span>
          </div>
          <div className="p-6 md:p-8 flex flex-col sm:flex-row gap-8">
            <SkillGroup title="Technical" items={TECHNICAL} />
            <SkillGroup title="Administrative" items={ADMIN} />
          </div>
        </div>
      </div>
    </section>
  )
}
