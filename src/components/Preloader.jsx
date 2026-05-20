import { useEffect, useState } from 'react'

export default function Preloader() {
    const [isVisible, setIsVisible] = useState(true)
    const [isFading, setIsFading] = useState(false)

    useEffect(() => {
        // Проверяем, заходил ли пользователь
        const hasVisited = sessionStorage.getItem('hasVisitedSalon')

        // Время показа прелоадера (3 секунды если впервые, иначе пропускаем)
        const delay = hasVisited ? 0 : 3000

        if (delay === 0) {
            setIsVisible(false)
            return
        }

        // Блокируем скролл во время загрузки
        document.body.style.overflow = 'hidden'

        const fadeOutTimer = setTimeout(() => {
            setIsFading(true)
            sessionStorage.setItem('hasVisitedSalon', 'true')
        }, delay)

        const hideTimer = setTimeout(() => {
            setIsVisible(false)
            document.body.style.overflow = 'unset'
        }, delay + 800) // 800ms fadeOut transition

        return () => {
            document.body.style.overflow = 'unset'
            clearTimeout(fadeOutTimer)
            clearTimeout(hideTimer)
        }
    }, [])

    if (!isVisible) return null

    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-stone-950 transition-all duration-700 ease-out ${isFading ? 'opacity-0 scale-105 pointer-events-none' : 'opacity-100 scale-100'
                }`}
        >
            {/* Dark premium stone/gradient background */}
            <div className="absolute inset-0 noise mix-blend-overlay opacity-30 pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-gold/5 rounded-full blur-[100px] pointer-events-none animate-glow-pulse" />

            <div className="relative z-10 flex flex-col items-center">
                {/* Логотип */}
                <div className="mb-8 w-40 sm:w-56 animate-fade-in-up">
                    <img
                        src="/images/logo2.webp"
                        alt="Логотип"
                        className="w-full h-auto drop-shadow-[0_0_20px_rgba(202,138,4,0.2)]"
                    />
                </div>

                {/* Подпись */}
                <div className="text-center mb-12 overflow-hidden">
                    <p className="font-body text-xs sm:text-sm font-light text-stone-400 uppercase tracking-[0.3em] animate-fade-in-up" style={{ animationDelay: '200ms' }}>
                        салон керамогранита
                    </p>
                </div>

                {/* Индикатор загрузки */}
                <div className="w-56 sm:w-72 h-[1px] bg-stone-800 rounded-full overflow-hidden animate-fade-in-up" style={{ animationDelay: '400ms' }}>
                    <div className="h-full bg-gradient-to-r from-gold-dark via-gold to-gold-light w-full origin-left animate-progress" />
                </div>
            </div>
        </div>
    )
}
