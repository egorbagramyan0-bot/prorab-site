import { useEffect, useRef, useState } from 'react'

export default function About() {
    const sectionRef = useRef(null)
    const [currentPhoto, setCurrentPhoto] = useState(0)

    // Обновленные 6 фотографий салона
    const photos = [
        "/images/s1.webp",
        "/images/s2.webp",
        "/images/s3.webp",
        "/images/s4.webp",
        "/images/s5.webp",
        "/images/s6.webp"
    ]

    const nextPhoto = () => setCurrentPhoto(prev => (prev + 1) % photos.length)
    const prevPhoto = () => setCurrentPhoto(prev => (prev - 1 + photos.length) % photos.length)

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentPhoto(prev => (prev + 1) % photos.length)
        }, 3000)
        return () => clearInterval(timer)
    }, [photos.length])

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
            value: '25+',
            title: 'Брендов-партнёров',
            desc: 'Работаем напрямую с ведущими заводами-изготовителями',
        },
        {
            value: '3000+',
            title: 'Коллекций доступно к заказу',
            desc: 'Огромный выбор текстур, форматов и оттенков под любой проект',
        },
        {
            value: '7/7',
            title: 'Дней в неделю',
            desc: 'Мы открыты каждый день без перерывов с 9:00 до 20:00',
        },
        {
            value: 'PRO',
            title: 'Экспертная помощь',
            desc: 'Подберём материал под ваш проект, стиль и бюджет',
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
                                    loading={idx === 0 ? "eager" : "lazy"}
                                    fetchPriority={idx === 0 ? "high" : "auto"}
                                    className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${currentPhoto === idx ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 z-0'
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
                                {item.value ? (
                                    <div className="font-heading text-4xl sm:text-5xl font-bold text-gradient mb-4 drop-shadow-[0_0_12px_rgba(202,138,4,0.3)] group-hover:scale-105 transition-transform duration-500 origin-left">
                                        {item.value}
                                    </div>
                                ) : (
                                    <div className="w-12 h-12 bg-stone-900 rounded-xl flex items-center justify-center text-gold mb-5 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-gold-light group-hover:text-stone-900 transition-all duration-500 shadow-[0_0_15px_rgba(202,138,4,0.15)] group-hover:shadow-[0_0_20px_rgba(202,138,4,0.4)]">
                                        {item.icon}
                                    </div>
                                )}
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
