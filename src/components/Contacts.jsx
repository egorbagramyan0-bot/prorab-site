import useReveal from '../hooks/useReveal'
import { reachGoal } from '../lib/metrika'
import { SITE } from '../data/site'
import SectionHeader from './SectionHeader'

const DEFAULT_TEXT = 'Посмотрите образцы плитки, керамогранита, напольных покрытий, дверей и фурнитуры вживую. Подскажем по брендам, каталогам, наличию и срокам заказа.'

const CONTACT_ITEMS = [
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
        ),
        title: 'Адрес',
        text: SITE.address.full,
        link: SITE.routeUrl,
        linkLabel: 'Построить маршрут',
        goal: 'build_route',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
            </svg>
        ),
        title: 'Телефон',
        text: SITE.phone,
        extra: SITE.hours,
        link: SITE.phoneHref,
        linkLabel: 'Позвонить',
    },
    {
        icon: (
            <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        ),
        title: 'Telegram',
        text: SITE.telegramLabel,
        link: SITE.telegram,
        linkLabel: 'Написать',
    },
    {
        icon: <span className="font-body text-xl font-extrabold leading-none tracking-tight">M</span>,
        title: 'MAX',
        text: SITE.maxLabel,
        link: SITE.max,
        linkLabel: 'Написать',
    },
    {
        icon: (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.909A2.25 2.25 0 012.25 6.993V6.75" />
            </svg>
        ),
        title: 'Email',
        text: SITE.email,
        link: `mailto:${SITE.email}`,
        linkLabel: 'Написать',
    },
]

const isExternal = (link) => link.startsWith('http')

export default function Contacts({ title = 'Приезжайте', accent = 'в салон ПРОРАБ', text = DEFAULT_TEXT }) {
    const sectionRef = useReveal(0.08)

    return (
        <section id="contacts" ref={sectionRef} className="relative py-16 sm:py-28 lg:py-32 bg-stone-900 noise overflow-hidden">
            <div className="absolute inset-0 deco-grid opacity-15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[200px]" />

            <div className="relative z-10 container-site">
                <SectionHeader dark title={title} accent={accent} text={text} className="mb-10 sm:mb-16" />

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div className="space-y-4">
                        {CONTACT_ITEMS.map((item, i) => (
                            <div
                                key={item.title}
                                className="reveal glass rounded-2xl p-6 hover:bg-white/10 hover:border-gold/20 transition-all duration-400 group cursor-pointer"
                                style={{ transitionDelay: `${i * 80}ms` }}
                                onClick={(e) => {
                                    if (e.target.closest('a')) return
                                    if (item.goal) reachGoal(item.goal)
                                    if (isExternal(item.link)) window.open(item.link, '_blank', 'noopener,noreferrer')
                                    else window.location.href = item.link
                                }}
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-11 h-11 flex-shrink-0 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center text-stone-900">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="font-body text-xs xl:text-sm font-semibold uppercase tracking-[0.16em] text-stone-400 mb-1.5">{item.title}</p>
                                        <p className="font-body text-stone-100 text-base xl:text-lg font-medium leading-relaxed break-words">{item.text}</p>
                                        {item.extra && <p className="font-body text-sm text-stone-400 mt-1">{item.extra}</p>}
                                        <a
                                            href={item.link}
                                            target={isExternal(item.link) ? '_blank' : undefined}
                                            rel={isExternal(item.link) ? 'noopener noreferrer' : undefined}
                                            onClick={() => item.goal && reachGoal(item.goal)}
                                            className="inline-flex items-center gap-2 mt-3 font-body text-sm xl:text-base font-semibold text-gold hover:text-gold-light transition-colors duration-300 cursor-pointer"
                                        >
                                            {item.linkLabel}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="reveal rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 h-[300px] sm:h-[420px] lg:h-full min-h-[300px] sm:min-h-[420px] shadow-2xl shadow-black/30">
                        <iframe
                            src={SITE.mapWidget}
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                            loading="lazy"
                            title="Салон ПРОРАБ на Яндекс Картах"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
