import { useEffect, useRef, useState } from 'react'
import { CATEGORIES, categoryPath } from '../data/categories'
import { SITE } from '../data/site'

export default function Hero() {
    const videoContainerRef = useRef(null)
    const videoRef = useRef(null)
    const [videoReady, setVideoReady] = useState(false)
    const [videoError, setVideoError] = useState(false)
    // null — ещё не знаем (пререндер и первый кадр): видео не монтируем, чтобы не грузить его на мобильных
    const [isMobile, setIsMobile] = useState(null)

    // Handle resize to properly toggle video vs image when window is resized
    useEffect(() => {
        const handleResize = () => {
            // Без видео: на мобильных и при системной настройке «уменьшить движение»
            setIsMobile(window.innerWidth < 768 || window.matchMedia('(prefers-reduced-motion: reduce)').matches)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Parallax effect (desktop only)
    useEffect(() => {
        if (isMobile !== false) {
            if (videoContainerRef.current) {
                videoContainerRef.current.style.transform = 'none'
            }
            return
        }

        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (mq.matches) return

        const handleScroll = () => {
            if (videoContainerRef.current) {
                const offset = window.scrollY * 0.35
                videoContainerRef.current.style.transform = `translateY(${offset}px) scale(1.05)`
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [isMobile])

    // Attempt to play video on mount (Safari/iOS needs programmatic play)
    useEffect(() => {
        if (isMobile !== false) return

        const vid = videoRef.current
        if (!vid) return

        const tryPlay = () => {
            vid.play().catch(() => {
                // Autoplay blocked — keep poster visible
                setVideoError(true)
            })
        }

        // If video is already ready (cached), trigger immediately
        if (vid.readyState >= 3) {
            setVideoReady(true)
            tryPlay()
        } else {
            vid.addEventListener('canplay', tryPlay, { once: true })
            return () => vid.removeEventListener('canplay', tryPlay)
        }
    }, [isMobile])

    const handleCanPlay = () => {
        setVideoReady(true)
    }

    const handleError = () => {
        setVideoError(true)
    }

    const videoSrc = '/videos/hero.mp4'

    return (
        <section className="relative min-h-screen-safe overflow-hidden flex items-center pb-16 lg:pb-24">
            {/* === Layer 0: Fallback poster image (always behind video) === */}
            <div
                ref={videoContainerRef}
                className="absolute inset-0 z-0"
                style={{ willChange: isMobile === false ? 'transform' : 'auto' }}
            >
                <img
                    src="/images/hero2.webp"
                    alt=""
                    aria-hidden="true"
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                        zIndex: 0,
                    }}
                />

                {/* === Layer 1: Video (fades in when ready, desktop only) === */}
                {isMobile === false && !videoError && (
                    <video
                        ref={videoRef}
                        autoPlay
                        muted
                        loop
                        playsInline
                        preload="metadata"
                        poster="/images/hero2.webp"
                        onCanPlay={handleCanPlay}
                        onError={handleError}
                        style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            objectFit: 'cover',
                            objectPosition: 'center',
                            zIndex: 1,
                            opacity: videoReady ? 1 : 0,
                            transition: 'opacity 0.8s ease-in-out',
                        }}
                    >
                        <source src={videoSrc} type="video/mp4" />
                    </video>
                )}
            </div>

            {/* === Layer 2: Cinematic overlays === */}
            <div className="absolute inset-0 z-[1] bg-gradient-to-b from-stone-900/60 via-stone-900/30 to-stone-900" />
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-stone-900/70 via-transparent to-transparent" />

            {/* Subtle grid pattern */}
            <div className="absolute inset-0 z-[1] deco-grid opacity-15" />

            {/* Ambient glow */}
            <div className="absolute bottom-0 left-1/4 z-[1] w-[600px] h-[400px] bg-gold/5 rounded-full blur-[120px] animate-glow-pulse" />

            {/* === Layer 3: Content === */}
            <div className="hero-content relative z-[2] container-site pt-20 md:pt-28">
                <div className="max-w-[90rem]">
                    <h1 className="hero-title font-heading text-[1.85rem] sm:text-5xl lg:text-[3.5rem] 2xl:text-[4rem] text-stone-50 leading-[1.1] mb-9 sm:mb-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        Салон отделочных материалов
                        {' '}<br />
                        <span className="text-gradient">для&nbsp;вашего интерьера</span>
                    </h1>

                    <p className="hero-lead hidden sm:block font-body text-base md:text-lg xl:text-xl text-stone-300/90 max-w-2xl xl:max-w-3xl mb-8 sm:mb-10 leading-relaxed animate-slide-up" style={{ animationDelay: '0.6s' }}>
                        Керамогранит и&nbsp;плитка, ламинат и&nbsp;SPC, линолеум, межкомнатные и&nbsp;входные двери, фурнитура в&nbsp;одном месте.
                        Посмотрите образцы вживую, выберите производителя и&nbsp;получите консультацию в&nbsp;салоне ПРОРАБ.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                        <a href="#brands" className="btn-primary text-xs sm:text-sm xl:text-[0.95rem] cursor-pointer text-center">
                            Смотреть бренды
                        </a>
                        <a href="#contacts" className="btn-secondary text-xs sm:text-sm xl:text-[0.95rem] cursor-pointer text-center">
                            Как добраться
                        </a>
                    </div>

                    <ul className="mt-8 sm:mt-10 flex flex-wrap gap-x-6 gap-y-2 font-body text-sm xl:text-base text-stone-300/80 animate-slide-up" style={{ animationDelay: '1s' }}>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold" />{SITE.fromRostov}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold" />{SITE.hours}</li>
                        <li className="flex items-center gap-2"><span className="w-1 h-1 rounded-full bg-gold" />Доставка материалов</li>
                    </ul>
                </div>
            </div>

            {/* Категории — быстрые ссылки внизу первого экрана (десктоп) */}
            <nav className="absolute bottom-0 left-0 right-0 z-[2] hidden lg:block border-t border-white/10 bg-stone-950/30 backdrop-blur-md animate-slide-up" style={{ animationDelay: '1.1s' }} aria-label="Категории ассортимента">
                <ul className="container-site grid grid-cols-6 divide-x divide-white/10">
                    {CATEGORIES.map((c) => (
                        <li key={c.id}>
                            <a href={categoryPath(c)} className="group flex items-center justify-between gap-3 px-5 py-5 font-body text-[0.8rem] xl:text-[0.875rem] uppercase tracking-[0.12em] text-stone-300 hover:text-gold hover:bg-white/[0.03] transition-colors duration-300">
                                <span>{c.name}</span>
                                <svg className="w-4 h-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    )
}
