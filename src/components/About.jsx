import { useEffect, useRef, useState } from 'react'

export default function About() {
    const sectionRef = useRef(null)
    const [currentPhoto, setCurrentPhoto] = useState(0)

    // Если у вас есть другие фото салона, просто добавьте их пути в этот массив
    const photos = [
        "/images/salon.png",
        "/images/salon2.png",
        "/images/salon3.png"
    ]

    const nextPhoto = () => setCurrentPhoto(prev => (prev + 1) % photos.length)
    const prevPhoto = () => setCurrentPhoto(prev => (prev - 1 + photos.length) % photos.length)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )

        const elements = sectionRef.current?.querySelectorAll('.reveal')
        elements?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const features = [
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819" />
                </svg>
            ),
            title: 'Живой шоурум',
            desc: 'Полноразмерные образцы керамогранита — оцените текстуру и масштаб вживую',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
            ),
            title: 'Гарантия качества',
            desc: 'Работаем только с проверенными брендами и заводами-изготовителями',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>
            ),
            title: 'Экспертная помощь',
            desc: 'Подберём материал под ваш проект, стиль и бюджет',
        },
        {
            icon: (
                <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            ),
            title: 'Без выходных',
            desc: 'Работаем каждый день без перерывов с 9:00 до 20:00',
        },
    ]

    return (
        <section id="about" ref={sectionRef} className="relative py-16 sm:py-28 lg:py-36 bg-stone-50 overflow-hidden">
            {/* Subtle decorative elements */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/3 rounded-full blur-[150px]" />
            <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-stone-300/20 rounded-full blur-[100px]" />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-20 reveal">
                    <div className="section-tag justify-center mb-6">О салоне</div>
                    <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 sm:mb-5">
                        Место, где рождаются
                        <br />
                        <span className="text-gradient">идеальные интерьеры</span>
                    </h2>
                    <p className="font-body text-base text-stone-500 max-w-2xl mx-auto leading-relaxed font-light">
                        Специализированный салон, где вы можете увидеть и потрогать образцы
                        от ведущих производителей, получить экспертную консультацию и выбрать
                        идеальное покрытие для вашего пространства.
                    </p>
                </div>

                {/* Content grid */}
                <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
                    {/* Carousel */}
                    <div className="reveal relative group">
                        <div className="relative rounded-3xl overflow-hidden h-[280px] sm:h-[400px] lg:h-[450px]">
                            {photos.map((src, idx) => (
                                <img
                                    key={idx}
                                    src={src}
                                    alt={`Интерьер салона керамогранита ПРОРАБ ${idx + 1}`}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${currentPhoto === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
                                        }`}
                                />
                            ))}
                            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 via-transparent to-transparent pointer-events-none z-20" />

                            {/* Controls */}
                            <div className="absolute top-1/2 -translate-y-1/2 left-0 right-0 px-4 flex justify-between z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <button onClick={prevPhoto} className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                </button>
                                <button onClick={nextPhoto} className="w-10 h-10 rounded-full glass border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-colors cursor-pointer">
                                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                </button>
                            </div>

                            {/* Dots */}
                            <div className="absolute bottom-6 right-6 flex gap-2 z-30">
                                {photos.map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => setCurrentPhoto(idx)}
                                        className={`h-2 rounded-full transition-all duration-300 cursor-pointer ${currentPhoto === idx ? 'bg-gold w-6' : 'bg-white/60 w-2 hover:bg-white'
                                            }`}
                                        aria-label={`Перейти к фото ${idx + 1}`}
                                    />
                                ))}
                            </div>

                            {/* Floating badge */}
                            <div className="absolute bottom-6 left-6 glass border border-white/20 rounded-xl px-4 py-2.5 z-30 pointer-events-none">
                                <p className="font-body text-[10px] uppercase tracking-[0.15em] text-stone-300 mb-0.5">Ростовская область</p>
                                <p className="font-heading text-base font-semibold text-white">с. Крым</p>
                            </div>
                        </div>

                        {/* Decorative frame */}
                        <div className="absolute -bottom-4 -right-4 w-full h-full rounded-3xl border border-gold/20 -z-10" />
                    </div>

                    {/* Features grid */}
                    <div className="grid sm:grid-cols-2 gap-5 reveal-stagger">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="reveal group glass-light rounded-2xl p-7 hover:shadow-xl hover:shadow-stone-900/8 transition-all duration-500 hover:-translate-y-1 cursor-pointer"
                            >
                                <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center text-gold mb-5 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-gold-light group-hover:text-stone-900 transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="font-heading text-xl font-bold text-stone-900 mb-2">
                                    {item.title}
                                </h3>
                                <p className="font-body text-sm text-stone-500 leading-relaxed font-light">
                                    {item.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
