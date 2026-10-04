import { useState, useEffect } from 'react';
import { initYandexMetrika, removeYandexMetrikaCookies } from '../lib/metrika';

// Событие для повторного открытия баннера (ссылка «Настройки cookies» в футере)
export const OPEN_COOKIE_SETTINGS = 'open-cookie-settings';

export function openCookieSettings() {
    window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS));
}

const linkClass = 'text-gold hover:text-gold-light underline underline-offset-4 decoration-gold/20 hover:decoration-gold/60 transition-colors font-medium cursor-pointer';

export default function CookieConsent() {
    const [showBanner, setShowBanner] = useState(false);
    const [animateIn, setAnimateIn] = useState(false);

    const open = () => {
        setShowBanner(true);
        // Small timeout to allow transition after mount
        setTimeout(() => setAnimateIn(true), 100);
    };

    useEffect(() => {
        const consent = localStorage.getItem('cookieConsent');
        if (consent === 'accepted') {
            initYandexMetrika();
        } else if (!consent) {
            open();
        }
        window.addEventListener(OPEN_COOKIE_SETTINGS, open);
        return () => window.removeEventListener(OPEN_COOKIE_SETTINGS, open);
    }, []);

    const close = () => {
        setAnimateIn(false);
        setTimeout(() => setShowBanner(false), 500); // Wait for transition
    };

    const handleAccept = () => {
        localStorage.setItem('cookieConsent', 'accepted');
        initYandexMetrika();
        close();
    };

    const handleDecline = () => {
        const wasAccepted = localStorage.getItem('cookieConsent') === 'accepted';
        localStorage.setItem('cookieConsent', 'declined');
        if (wasAccepted) {
            // Отзыв согласия: удаляем cookie Метрики и перезагружаем страницу, чтобы счётчик остановился
            removeYandexMetrikaCookies();
            window.location.reload();
            return;
        }
        close();
    };

    if (!showBanner) return null;

    return (
        <div
            role="dialog"
            aria-label="Согласие на использование cookie"
            className={`fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6 pb-6 md:pb-8 pointer-events-none transition-all duration-500 ease-out transform ${
                animateIn
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
            }`}
        >
            <div className="max-w-4xl mx-auto glass rounded-2xl md:rounded-3xl p-5 md:p-6 bg-stone-950/95 border border-white/10 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-5 md:gap-8 pointer-events-auto relative overflow-hidden">
                {/* Subtle gold gradient glow on background */}
                <div className="absolute -top-12 -left-12 w-24 h-24 bg-gold/5 rounded-full blur-2xl pointer-events-none" />

                <p className="font-body text-xs sm:text-sm text-stone-300 leading-relaxed text-center md:text-left relative z-10">
                    Мы&nbsp;используем файлы cookie и&nbsp;Яндекс&nbsp;Метрику для&nbsp;анализа посещаемости сайта.
                    Нажимая «Принять», вы&nbsp;даёте{' '}
                    <a href="/soglasie-na-obrabotku-dannyh/" className={linkClass}>согласие на&nbsp;обработку персональных данных</a>{' '}
                    в&nbsp;соответствии с&nbsp;<a href="/privacy-policy/" className={linkClass}>Политикой конфиденциальности</a>.
                    Без согласия сайт работает полностью, но&nbsp;без&nbsp;аналитики.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto shrink-0 relative z-10">
                    <button
                        onClick={handleDecline}
                        className="px-5 py-2.5 rounded-xl border border-stone-800 hover:border-gold/30 hover:text-gold text-stone-400 hover:text-stone-300 text-xs font-semibold uppercase tracking-wider transition-all duration-300 cursor-pointer w-full sm:w-auto text-center order-2 sm:order-1 active:scale-98"
                    >
                        Продолжить без аналитики
                    </button>
                    <button
                        onClick={handleAccept}
                        className="px-5 py-2.5 rounded-xl bg-gradient-to-br from-gold to-gold-light hover:brightness-110 text-stone-950 text-xs font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer w-full sm:w-auto text-center order-1 sm:order-2 shadow-lg shadow-gold/10 hover:shadow-gold/25 active:scale-98"
                    >
                        Принять
                    </button>
                </div>
            </div>
        </div>
    );
}
