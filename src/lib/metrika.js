import { SITE } from '../data/site';

export function initYandexMetrika() {
    if (typeof window === 'undefined') return;
    
    // Prevents duplicate script tags or initializations
    if (window.ym) return;

    (function(m,e,t,r,i,k,a){
        m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
        m[i].l=1*new Date();
        for (var j = 0; j < document.scripts.length; j++) {
            if (document.scripts[j].src === r) { return; }
        }
        k=e.createElement(t);
        a=e.getElementsByTagName(t)[0];
        k.async=1;
        k.src=r;
        a.parentNode.insertBefore(k,a);
    })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=' + SITE.metrikaId, 'ym');

    // original settings maintained exactly
    window.ym(SITE.metrikaId, 'init', {
        ssr: true,
        webvisor: true,
        clickmap: true,
        ecommerce: "dataLayer",
        referrer: document.referrer,
        url: location.href,
        accurateTrackBounce: true,
        trackLinks: true
    });
}

export function reachGoal(goal) {
    if (typeof window !== 'undefined' && typeof window.ym === 'function') {
        window.ym(SITE.metrikaId, 'reachGoal', goal);
    }
}

// Отзыв согласия: удаляем cookie Яндекс Метрики (_ym_*) для текущего домена и родительских доменов
export function removeYandexMetrikaCookies() {
    if (typeof document === 'undefined') return;
    const names = document.cookie.split(';').map((c) => c.trim().split('=')[0]).filter((n) => n.startsWith('_ym'));
    const parts = location.hostname.split('.');
    const domains = [''];
    for (let i = 0; i < parts.length - 1; i++) domains.push('; domain=.' + parts.slice(i).join('.'));
    for (const name of names) {
        for (const domain of domains) {
            document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
        }
    }
}
