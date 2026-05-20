import { useEffect, useRef } from 'react'

const GALLERY_URL = 'https://business.ceramic3d.com/organization/dca1b078-7549-4d73-9a39-ef9f2554466b/project-gallery'

export default function Ceramic3D() {
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

    return (
        <section
            id="ceramic3d"
            ref={sectionRef}
            className="relative py-16 sm:py-28 lg:py-36 bg-stone-50 overflow-hidden"
        >
            {/* Background accents */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-stone-300/20 rounded-full blur-[120px]" />

            {/* Blueprint grid pattern */}
            <div className="absolute inset-0 opacity-[0.03]" style={{
                backgroundImage: `
                    linear-gradient(rgba(202,138,4,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(202,138,4,0.3) 1px, transparent 1px)
                `,
                backgroundSize: '60px 60px',
            }} />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-20 reveal">
                    <div className="section-tag justify-center mb-6">Ceramic 3D</div>
                    <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 sm:mb-5">
                        Бесплатный 3D-дизайн
                        <br />
                        <span className="text-gradient">помещения</span>
                    </h2>
                    <p className="font-body text-base text-stone-500 max-w-2xl mx-auto leading-relaxed font-light">
                        Поможем увидеть будущий интерьер до покупки керамогранита
                    </p>
                </div>

                {/* Main content: text + visual */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    {/* Left: description + CTA */}
                    <div className="reveal">
                        <p className="font-body text-stone-600 text-base sm:text-lg leading-relaxed font-light mb-8">
                            При визите в наш салон мы можем бесплатно подготовить 3D-визуализацию
                            вашего помещения в Ceramic&nbsp;3D. Вы увидите, как выбранная плитка или
                            керамогранит будут смотреться в реальном интерьере, сможете сравнить
                            разные коллекции и подобрать лучшее решение под ваш стиль, бюджет и задачу.
                        </p>
                        <a
                            href={GALLERY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary text-xs sm:text-sm cursor-pointer inline-flex items-center gap-2"
                        >
                            Посмотреть проекты
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                        </a>
                    </div>

                    {/* Right: Gallery preview card */}
                    <div className="reveal">
                        <a
                            href={GALLERY_URL}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block relative rounded-3xl overflow-hidden border border-stone-200/80 bg-white shadow-lg hover:shadow-2xl hover:shadow-stone-900/10 hover:border-gold/30 transition-all duration-500 cursor-pointer"
                        >
                            {/* Decorative "screen" frame */}
                            <div className="relative h-[280px] sm:h-[340px] bg-gradient-to-br from-stone-100 to-stone-200 overflow-hidden">
                                {/* Blueprint/interior planning motif */}
                                <div className="absolute inset-0" style={{
                                    backgroundImage: `
                                        linear-gradient(rgba(202,138,4,0.06) 1px, transparent 1px),
                                        linear-gradient(90deg, rgba(202,138,4,0.06) 1px, transparent 1px)
                                    `,
                                    backgroundSize: '40px 40px',
                                }} />

                                {/* Central 3D icon/visual */}
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    {/* 3D Cube icon */}
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold/20 to-gold/5 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-white border border-stone-200 rounded-2xl shadow-lg flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-500">
                                            <svg className="w-12 h-12 sm:w-14 sm:h-14 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1}>
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                            </svg>
                                        </div>
                                    </div>

                                    <p className="font-heading text-xl sm:text-2xl font-bold text-stone-800 mb-2">
                                        Галерея проектов
                                    </p>
                                    <p className="font-body text-sm text-stone-500 font-light">
                                        Ceramic 3D
                                    </p>
                                </div>

                                {/* Floating room outline decorations */}
                                <div className="absolute top-6 left-6 w-16 h-12 border border-gold/15 rounded-lg opacity-60" />
                                <div className="absolute bottom-8 right-8 w-20 h-14 border border-gold/15 rounded-lg opacity-40" />
                                <div className="absolute top-1/4 right-12 w-10 h-10 border border-stone-300/40 rounded-md opacity-30 rotate-12" />
                            </div>

                            {/* Bottom bar */}
                            <div className="px-6 py-5 flex items-center justify-between bg-white border-t border-stone-100">
                                <div>
                                    <p className="font-body text-sm font-semibold text-stone-800">
                                        Смотреть 3D-проекты
                                    </p>
                                    <p className="font-body text-xs text-stone-400 font-light mt-0.5">
                                        Реальные визуализации наших клиентов
                                    </p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-stone-900 flex items-center justify-center text-gold group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-gold-light group-hover:text-stone-900 transition-all duration-500">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </div>
                            </div>

                            {/* Hover accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
