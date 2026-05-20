import { useEffect, useRef, useState } from 'react'

export default function Hero() {
    const videoContainerRef = useRef(null)
    const videoRef = useRef(null)
    const [videoReady, setVideoReady] = useState(false)
    const [videoError, setVideoError] = useState(false)
    const [isMobile, setIsMobile] = useState(false)

    // Detect mobile on mount (before first render matters for source selection)
    useEffect(() => {
        setIsMobile(window.innerWidth < 768)
    }, [])

    // Parallax effect (desktop only)
    useEffect(() => {
        const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
        if (mq.matches) return

        const handleScroll = () => {
            if (window.innerWidth < 768) return
            if (videoContainerRef.current) {
                const offset = window.scrollY * 0.35
                videoContainerRef.current.style.transform = `translateY(${offset}px) scale(1.05)`
            }
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    // Attempt to play video on mount (Safari/iOS needs programmatic play)
    useEffect(() => {
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

    const videoSrc = isMobile ? '/videos/hero-mobile.mp4' : '/videos/hero.mp4'

    return (
        <section className="relative h-screen min-h-[600px] overflow-hidden flex items-center" role="banner">
            {/* === Layer 0: Fallback poster image (always behind video) === */}
            <div
                ref={videoContainerRef}
                className="absolute inset-0 z-0"
                style={{ willChange: 'transform' }}
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

                {/* === Layer 1: Video (fades in when ready) === */}
                {!videoError && (
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
            <div className="relative z-[2] max-w-7xl mx-auto px-5 sm:px-8 w-full">
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
