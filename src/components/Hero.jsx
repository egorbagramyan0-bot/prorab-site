import { useEffect, useRef } from 'react'

export default function Hero() {
    const heroRef = useRef(null)

    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (mq.matches) return

        const handleScroll = () => {
            if (heroRef.current) {
                const offset = window.scrollY * 0.35
                heroRef.current.style.transform = `translateY(${offset}px) scale(1.05)`
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center" role="banner">
            {/* Parallax background */}
            <div
                ref={heroRef}
                className="absolute inset-0"
                style={{ willChange: 'transform' }}
            >
                <img
                    src="/images/hero2.png"
                    alt=""
                    className="w-full h-full object-cover object-center"
                    style={{ imageRendering: 'auto' }}
                />
            </div>

            {/* Cinematic overlays */}
            <div className="absolute inset-0 bg-gradient-to-b from-stone-900/60 via-stone-900/30 to-stone-900" />
            <div className="absolute inset-0 bg-gradient-to-r from-stone-900/70 via-transparent to-transparent" />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 deco-grid opacity-15" />

            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px] animate-glow-pulse" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full">
                <div className="max-w-3xl">
                    {/* Section tag */}
                    <div className="section-tag mb-8 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        Салон керамогранита
                    </div>

                    <h1 className="font-heading text-4xl sm:text-6xl lg:text-8xl font-bold text-stone-50 leading-[0.95] mb-6 sm:mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        Интерьеры
                        <br />
                        <span className="text-gradient">
                            начинаются
                        </span>
                        <br />
                        <span className="text-stone-300">здесь</span>
                    </h1>

                    <p className="font-body text-sm sm:text-base md:text-lg text-stone-400 max-w-lg mb-8 sm:mb-12 leading-relaxed animate-slide-up font-light" style={{ animationDelay: '0.6s' }}>
                        Ведущие производители керамогранита в одном месте.
                        Увидьте, прикоснитесь, выберите идеальный материал для вашего интерьера.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                        <a href="#brands" className="btn-primary text-xs sm:text-sm cursor-pointer text-center">
                            Наши бренды
                        </a>
                        <a href="#contacts" className="btn-secondary text-xs sm:text-sm cursor-pointer text-center">
                            Как добраться
                        </a>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-10 left-1/2 -translate-x-1/2 hidden sm:flex flex-col items-center gap-3">
                    <span className="font-body text-[10px] uppercase tracking-[0.3em] text-stone-500">Листайте</span>
                    <div className="w-[1px] h-10 bg-gradient-to-b from-gold/60 to-transparent animate-float" />
                </div>
            </div>
        </section>
    )
}
