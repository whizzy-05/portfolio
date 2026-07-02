import { Mail, Link2, FolderGit2, Phone } from 'lucide-react'
import useReveal from '../hooks/useReveal'

const CONTACTS = [
  { icon: Mail, label: 'Email', value: 'pendoamani05@gmail.com', href: 'mailto:pendoamani05@gmail.com' },
  { icon: Link2, label: 'LinkedIn', value: 'https://www.linkedin.com/in/pendo-amani-504974371?utm_source=share_via&utm_content=profile&utm_medium=member_android', href: 'https://www.linkedin.com/in/pendo-amani-504974371' },
  { icon: FolderGit2, label: 'GitHub', value: 'https://github.com/whizzy-05', href: 'https://github.com/whizzy-05' },
  { icon: Phone, label: 'Phone', value: '+254 710 269 931', href: 'tel:+254710269931' },
]

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" ref={ref} className="px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-3xl">
        <p className="reveal font-mono text-xs uppercase tracking-widest text-emerald dark:text-emerald-bright mb-4">
          05 — Contact
        </p>
        <h2 className="reveal font-display text-3xl md:text-4xl font-semibold text-ink dark:text-paper mb-4">
          Let's work together
        </h2>
        <p className="reveal text-base text-ink-soft dark:text-paper/80 leading-relaxed mb-10 max-w-xl">
          Whether it's a role, a project, or just a conversation — reach me here.
        </p>

        <div className="reveal rounded-lg border border-slate/25 overflow-hidden">
          {CONTACTS.map(({ icon: Icon, label, value, href }, i) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel={href.startsWith('http') ? 'noreferrer' : undefined}
              className={`flex items-center gap-4 px-5 py-4 hover:bg-paper-dim/50 dark:hover:bg-ink-soft/10 transition-colors duration-150 ${
                i !== CONTACTS.length - 1 ? 'border-b border-slate/20' : ''
              }`}
            >
              <Icon size={18} className="text-emerald dark:text-emerald-bright shrink-0" />
              <span className="font-mono text-xs text-slate w-20 shrink-0">{label}</span>
              <span className="text-sm text-ink dark:text-paper">{value}</span>
            </a>
          ))}
        </div>

        <footer className="mt-16 font-mono text-[11px] text-slate">
          © {new Date().getFullYear()} Pendo Amani. Built with React & Tailwind CSS.
        </footer>
      </div>
    </section>
  )
}
