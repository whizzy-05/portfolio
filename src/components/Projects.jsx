import { ArrowUpRight } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const PROJECTS = [
  {
    title: 'School Management System',
    status: 'in development',
    statusColor: 'text-amber',
    description:
      'A web-based platform designed to help schools manage student information, attendance, fees, examinations, and communication.',
    tags: ['React', 'JavaScript'],
  },
  {
    title: 'Personal Portfolio Website',
    status: 'live',
    statusColor: 'text-emerald dark:text-emerald-bright',
    description:
      'A responsive website showcasing my skills, projects, and professional experience — the one you\'re looking at right now.',
    tags: ['React', 'Tailwind CSS', 'Vite'],
  },
  {
    title: 'Website Concepts for Schools',
    status: 'concept',
    statusColor: 'text-slate',
    description:
      'Design concepts and mockups built for schools looking to establish a clean, professional web presence.',
    tags: ['HTML', 'CSS', 'Design'],
  },
]

export default function Projects() {
  const ref = useReveal()

  return (
    <section id="projects" ref={ref} className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-4xl">
        <p className="reveal font-mono text-xs uppercase tracking-widest text-emerald dark:text-emerald-bright mb-4">
          03 — Projects
        </p>
        <h2 className="reveal font-display text-3xl md:text-4xl font-semibold text-ink dark:text-paper mb-10">
          Things I've built
        </h2>

        <div className="grid gap-5">
          {PROJECTS.map((project) => (
            <div
              key={project.title}
              className="reveal group border border-slate/25 rounded-lg p-6 hover:border-emerald dark:hover:border-emerald-bright transition-colors duration-200 bg-paper-dim/30 dark:bg-ink-soft/10"
            >
              <div className="flex items-start justify-between gap-4 mb-3">
                <h3 className="font-display text-xl font-semibold text-ink dark:text-paper">
                  {project.title}
                </h3>
                <span className={`font-mono text-[11px] uppercase tracking-wide whitespace-nowrap mt-1 ${project.statusColor}`}>
                  {project.status}
                </span>
              </div>
              <p className="text-sm md:text-base text-ink-soft dark:text-paper/75 leading-relaxed mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span key={tag} className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-slate/25 text-slate">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
