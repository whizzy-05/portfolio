import useReveal from '../hooks/useReveal'

const OFFERINGS = [
  {
    tag: 'build',
    title: 'Website Development',
    detail: 'Responsive, well-structured websites — from concept to deployment.',
  },
  {
    tag: 'support',
    title: 'Administrative Support',
    detail: 'Calendar, inbox, and document management that keeps things moving.',
  },
  {
    tag: 'assist',
    title: 'Customer Service',
    detail: 'Clear, patient communication with clients, parents, and teams.',
  },
  {
    tag: 'schools',
    title: 'Digital Solutions for Schools',
    detail: 'Practical tools that help schools manage students, staff, and records.',
  },
]

export default function Home() {
  const ref = useReveal()

  return (
    <section
      id="home"
      ref={ref}
      className="min-h-screen flex flex-col justify-center px-6 md:px-16 pt-24 md:pt-0 pb-16"
    >
      <p className="reveal font-mono text-xs md:text-sm text-emerald dark:text-emerald-bright tracking-widest uppercase mb-6">
        // status: open to work — Nairobi, Kenya
      </p>

      <h1 className="reveal font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.05] max-w-3xl text-ink dark:text-paper">
        Hi, I'm Pendo Amani.
      </h1>

      <p className="reveal mt-6 md:mt-8 max-w-2xl text-base md:text-lg text-ink-soft dark:text-paper/80 leading-relaxed">
        I'm an aspiring{' '}
        <span className="text-emerald dark:text-emerald-bright font-medium">Software Developer</span>{' '}
        and{' '}
        <span className="text-emerald dark:text-emerald-bright font-medium">Executive Assistant</span>{' '}
        with a passion for creating efficient digital solutions and helping businesses stay
        organized. I enjoy combining technical skills with strong communication and
        administrative support to solve real-world problems.
      </p>

      <div className="reveal mt-10">
        <p className="font-mono text-xs uppercase tracking-widest text-slate mb-4">What I do</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-3xl">
          {OFFERINGS.map((item) => (
            <div
              key={item.tag}
              className="group border border-slate/25 rounded-lg p-4 hover:border-emerald dark:hover:border-emerald-bright transition-colors duration-200 bg-paper-dim/40 dark:bg-ink-soft/10"
            >
              <p className="font-mono text-[11px] text-emerald dark:text-emerald-bright mb-1">
                #{item.tag}
              </p>
              <p className="font-semibold text-ink dark:text-paper text-sm mb-1">{item.title}</p>
              <p className="text-sm text-ink-soft dark:text-paper/70 leading-snug">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
