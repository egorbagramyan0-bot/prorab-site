import { useEffect, useRef, useState } from 'react'

export default function WhyUs() {
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
            { threshold: 0.1 }
        )
        const els = sectionRef.current?.querySelectorAll('.reveal')
        els?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const stats = [
        { number: 14, suffix: '+', label: 'Брендов-партнёров' },
        { number: 1000, suffix: '+', label: 'Коллекций в наличии' },
        { number: 7, suffix: '/7', label: 'Дней в неделю открыты' },
    ]

    const advantages = [
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            ),
            title: 'Живая экспозиция',
            desc: 'Полноразмерные образцы керамогранита на стендах — оцените текстуру, цвет и масштаб собственными глазами.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
                </svg>
            ),
            title: 'Прямое партнёрство',
            desc: 'Работаем напрямую с ведущими заводами — Kerama Marazzi, Idalgo, Alma Ceramica и другими.',
        },
        {
            icon: (
                <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
            ),
            title: 'Удобное расположение',
            desc: 'Находимся на трассе в с. Крым, Мясниковский район — удобный подъезд и парковка для клиентов.',
        },
    ]

    return (
        <section id="why-us" ref={sectionRef} className="relative py-16 sm:py-28 lg:py-36 bg-stone-50 overflow-hidden">
            {/* Background decorations */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-gold/4 to-transparent rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-stone-200/40 to-transparent rounded-full blur-[100px]" />

            <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
                {/* Section Header */}
                <div className="text-center mb-12 sm:mb-20 reveal">
                    <div className="section-tag justify-center mb-6">Преимущества</div>
                    <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-4 sm:mb-5">
                        Почему выбирают
                        <br />
                        <span className="text-gradient">именно нас</span>
                    </h2>
                    <p className="font-body text-base text-stone-500 max-w-2xl mx-auto leading-relaxed font-light">
                        Мы не продаём онлайн — мы создаём пространство, где вы можете увидеть,
                        потрогать и почувствовать качество керамогранита вживую.
                    </p>
                </div>

                {/* Stats */}
                <div className="reveal grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-20">
                    {stats.map((stat, i) => (
                        <StatCounter key={i} stat={stat} delay={i * 200} />
                    ))}
                </div>

                {/* Advantages */}
                <div className="grid md:grid-cols-3 gap-4 sm:gap-6 reveal-stagger">
                    {advantages.map((item, i) => (
                        <div
                            key={i}
                            className="reveal group relative bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-10 border border-stone-200/80 hover:border-gold/30 shadow-sm hover:shadow-2xl hover:shadow-stone-900/8 transition-all duration-500 hover:-translate-y-2 cursor-pointer overflow-hidden"
                        >
                            {/* Hover gradient overlay */}
                            <div className="absolute inset-0 bg-gradient-to-br from-gold/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl" />

                            <div className="relative z-10">
                                <div className="w-14 h-14 bg-stone-900 rounded-2xl flex items-center justify-center text-gold mb-6 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-gold-light group-hover:text-stone-900 transition-all duration-500">
                                    {item.icon}
                                </div>
                                <h3 className="font-heading text-2xl font-bold text-stone-900 mb-3">
                                    {item.title}
                                </h3>
                                <p className="font-body text-stone-500 leading-relaxed font-light text-sm">
                                    {item.desc}
                                </p>
                            </div>

                            {/* Bottom accent line */}
                            <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-gold to-gold-light scale-x-0 group-hover:scale-x-100 transition-transform duration-600 origin-left" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

function StatCounter({ stat, delay }) {
    const [count, setCount] = useState(0)
    const ref = useRef(null)
    const animated = useRef(false)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !animated.current) {
                    animated.current = true
                    const duration = 2000
                    const steps = 60
                    const increment = stat.number / steps
                    let current = 0

                    setTimeout(() => {
                        const interval = setInterval(() => {
                            current += increment
                            if (current >= stat.number) {
                                setCount(stat.number)
                                clearInterval(interval)
                            } else {
                                setCount(Math.floor(current))
                            }
                        }, duration / steps)
                    }, delay)
                }
            },
            { threshold: 0.5 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [stat.number, delay])

    return (
        <div ref={ref} className="text-center py-8 group">
            <div className="font-heading text-5xl sm:text-6xl lg:text-7xl font-bold text-gradient mb-2 sm:mb-3 tracking-tight">
                {count}{stat.suffix}
            </div>
            <div className="font-body text-stone-500 text-sm uppercase tracking-[0.15em] font-medium">{stat.label}</div>
        </div>
    )
}
