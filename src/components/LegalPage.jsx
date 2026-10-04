import { LEGAL_EDITION } from '../data/legal'

const LINKS = {
    privacy: { href: '/privacy-policy/', label: 'Политика конфиденциальности' },
    consent: { href: '/soglasie-na-obrabotku-dannyh/', label: 'Согласие на обработку персональных данных' },
}

// Юридический документ (политика, согласие): тексты — в src/data/legal.js
export default function LegalPage({ doc, related }) {
    const link = LINKS[related]

    return (
        <section className="relative min-h-screen bg-stone-950 noise pt-28 pb-16 sm:pt-36 sm:pb-24 overflow-hidden">
            <div className="absolute inset-0 deco-grid opacity-15" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gold/5 rounded-full blur-[200px] pointer-events-none" />

            <div className="relative z-10 max-w-4xl mx-auto px-5 sm:px-8">
                <div className="mb-10 sm:mb-16">
                    <a
                        href="/"
                        className="inline-flex items-center gap-2 py-2 font-body text-sm font-medium text-stone-400 hover:text-gold transition-colors duration-300 cursor-pointer group"
                    >
                        <svg className="w-4 h-4 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
                        </svg>
                        Вернуться на&nbsp;главную
                    </a>
                </div>

                <article className="glass rounded-3xl p-6 sm:p-10 lg:p-14 shadow-2xl shadow-black/40 font-body text-sm sm:text-base leading-relaxed space-y-10 border border-white/5">
                    <header className="border-b border-white/10 pb-8">
                        <h1 className="font-heading text-2xl sm:text-4xl text-stone-50 mb-3">{doc.title}</h1>
                        {doc.subtitle && <p className="font-body text-base sm:text-lg text-stone-300 mb-3">{doc.subtitle}</p>}
                        <p className="text-stone-400 text-sm">{LEGAL_EDITION}</p>
                    </header>

                    {doc.sections.map((s, i) => (
                        <div key={s.title ?? i}>
                            {s.title && <h2 className="font-heading text-base sm:text-lg text-stone-100 mb-4">{s.title}</h2>}
                            {s.paragraphs?.map((p) => (
                                <p key={p.slice(0, 30)} className="mb-4 last:mb-0 text-stone-300">{p}</p>
                            ))}
                            {s.list && (
                                <ul className={`list-disc list-inside space-y-1.5 text-stone-300 marker:text-gold/60 ${s.after ? 'mb-4' : ''} ${s.paragraphs ? 'mt-3' : ''}`}>
                                    {s.list.map((li) => <li key={li.slice(0, 30)} className="pl-1">{li}</li>)}
                                </ul>
                            )}
                            {s.after?.map((p) => (
                                <p key={p.slice(0, 30)} className="mb-4 last:mb-0 text-stone-300">{p}</p>
                            ))}
                        </div>
                    ))}

                    {link && (
                        <p className="pt-6 border-t border-white/10 text-stone-400">
                            См. также:{' '}
                            <a href={link.href} className="text-gold hover:text-gold-light underline underline-offset-4 decoration-gold/30 transition-colors">
                                {link.label}
                            </a>
                        </p>
                    )}
                </article>
            </div>
        </section>
    )
}
