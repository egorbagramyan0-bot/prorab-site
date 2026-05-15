import { useEffect, useRef } from 'react'

export default function Contacts() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.08 }
        )
        const els = sectionRef.current?.querySelectorAll('.reveal')
        els?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const contactItems = [
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            title: 'Адрес',
            text: 'Ростовская область, Мясниковский район, с. Крым, ул. Большесальская, 20',
            link: 'https://yandex.ru/maps/?text=Ростовская+область,+Мясниковский+район,+с.+Крым,+ул.+Большесальская,+20',
            linkLabel: 'Построить маршрут',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
            ),
            title: 'Телефон',
            text: '+7 (989) 634-13-75',
            link: 'tel:+79896341375',
            linkLabel: 'Позвонить',
        },
        {
            icon: (
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                </svg>
            ),
            title: 'Telegram',
            text: '@prorab_salon',
            link: 'https://t.me/+79896341375',
            linkLabel: 'Написать',
        },
        {
            icon: (
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Режим работы',
            text: 'Ежедневно, без перерывов и выходных',
            extra: '9:00 — 20:00',
        },
    ]

    return (
        <section id="contacts" ref={sectionRef} className="relative py-16 sm:py-28 lg:py-36 bg-stone-900 noise overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 deco-grid opacity-15" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gold/3 rounded-full blur-[200px]" />

            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-16 reveal">
                    <div className="section-tag justify-center mb-6">Контакты</div>
                    <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-50 mb-4 sm:mb-5">
                        Как нас
                        <br />
                        <span className="text-gradient">найти</span>
                    </h2>
                    <p className="font-body text-base text-stone-500 max-w-xl mx-auto leading-relaxed font-light">
                        Приезжайте в наш салон — мы ждём вас каждый день!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
                    {/* Contact cards */}
                    <div className="space-y-4">
                        {contactItems.map((item, i) => (
                            <div
                                key={i}
                                className="reveal glass rounded-2xl p-6 hover:bg-white/10 hover:border-gold/20 transition-all duration-400 group cursor-pointer"
                                style={{ transitionDelay: `${i * 80}ms` }}
                            >
                                <div className="flex items-start gap-5">
                                    <div className="w-11 h-11 flex-shrink-0 bg-gradient-to-br from-gold to-gold-light rounded-xl flex items-center justify-center text-stone-900">
                                        {item.icon}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <h3 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-1.5">
                                            {item.title}
                                        </h3>
                                        <p className="font-body text-stone-100 text-base font-medium leading-relaxed">
                                            {item.text}
                                        </p>
                                        {item.extra && (
                                            <p className="font-heading text-3xl font-bold text-gradient mt-2">
                                                {item.extra}
                                            </p>
                                        )}
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target={item.link.startsWith('http') ? '_blank' : undefined}
                                                rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                                                className="inline-flex items-center gap-2 mt-3 font-body text-sm font-medium text-gold hover:text-gold-light transition-colors duration-300 cursor-pointer"
                                            >
                                                {item.linkLabel}
                                                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                                </svg>
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Map */}
                    <div className="reveal rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 h-[300px] sm:h-[420px] lg:h-full min-h-[300px] sm:min-h-[420px] shadow-2xl shadow-black/30">
                        <iframe
                            src="https://yandex.ru/map-widget/v1/?z=12&ol=biz&oid=18218279631"
                            width="100%"
                            height="100%"
                            frameBorder="0"
                            allowFullScreen
                            loading="lazy"
                            title="Расположение салона ПРОРАБ на Яндекс Картах"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
