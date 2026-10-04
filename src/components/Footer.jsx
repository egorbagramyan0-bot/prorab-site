import { CATEGORIES, categoryPath } from '../data/categories'
import { SITE } from '../data/site'
import { openCookieSettings } from './CookieConsent'

const SALON_LINKS = [
    { href: '/#about', label: 'О салоне' },
    { href: '/#ceramic3d', label: '3D проект' },
    { href: '/#brands', label: 'Бренды' },
    { href: '/#contacts', label: 'Контакты' },
]

const linkClass = 'inline-block py-1.5 font-body text-sm xl:text-base text-stone-400 hover:text-gold transition-colors duration-300 cursor-pointer'
const legalLinkClass = 'inline-block py-3 font-body text-xs text-stone-400 hover:text-gold transition-colors duration-300 underline underline-offset-4 decoration-white/10 hover:decoration-gold/50'
const headingClass = 'font-body text-xs xl:text-sm font-semibold uppercase tracking-[0.18em] text-stone-300 mb-5'

export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-stone-950 border-t border-white/5">
            <div className="container-site py-14 sm:py-16">
                <div className="grid sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.2fr] gap-10 lg:gap-12 items-start">
                    <div>
                        <a href="/" aria-label="ПРОРАБ — на главную">
                            <img src="/images/logo-pill.webp" alt="ПРОРАБ" width="483" height="160" loading="lazy" className="h-12 w-auto mb-6 opacity-90" />
                        </a>
                        <p className="font-body text-sm text-stone-400 leading-relaxed max-w-xs">
                            ПРОРАБ&nbsp;— салон отделочных материалов в&nbsp;с.&nbsp;Крым, Ростовская область. {SITE.fromRostov}.
                        </p>
                    </div>

                    <nav aria-label="Ассортимент">
                        <p className={headingClass}>Ассортимент</p>
                        <ul className="flex flex-col gap-1">
                            {CATEGORIES.map((c) => (
                                <li key={c.id}><a href={categoryPath(c)} className={linkClass}>{c.fullName}</a></li>
                            ))}
                        </ul>
                    </nav>

                    <nav aria-label="Салон">
                        <p className={headingClass}>Салон</p>
                        <ul className="flex flex-col gap-1">
                            {SALON_LINKS.map((l) => (
                                <li key={l.href}><a href={l.href} className={linkClass}>{l.label}</a></li>
                            ))}
                        </ul>
                    </nav>

                    <div>
                        <p className={headingClass}>Контакты</p>
                        <div className="space-y-3">
                            <a href={SITE.phoneHref} className="block py-2 font-body text-xl font-semibold text-stone-200 hover:text-gold transition-colors duration-300">
                                {SITE.phone}
                            </a>
                            <p className="font-body text-sm text-stone-400">{SITE.hours}</p>
                            <p className="font-body text-sm text-stone-400 leading-relaxed">
                                {SITE.address.region}, {SITE.address.district},
                                {' '}<br />
                                {SITE.address.locality}, {SITE.address.street}
                            </p>
                            <div className="flex gap-2 -ml-2">
                                <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-11 px-2 font-body text-sm font-medium text-gold hover:text-gold-light transition-colors">Telegram</a>
                                <a href={SITE.max} target="_blank" rel="noopener noreferrer" className="inline-flex items-center min-h-11 px-2 font-body text-sm font-medium text-gold hover:text-gold-light transition-colors">MAX</a>
                                <a href={`mailto:${SITE.email}`} className="inline-flex items-center min-h-11 px-2 font-body text-sm font-medium text-gold hover:text-gold-light transition-colors">Email</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-14 pt-8 border-t border-white/5 flex flex-col lg:flex-row items-center lg:items-end justify-between gap-6 lg:gap-4">
                    <div className="flex flex-col items-center lg:items-start gap-3">
                        <p className="font-body text-xs text-stone-400 text-center lg:text-left">
                            © {currentYear} ПРОРАБ — салон отделочных материалов. Информация на&nbsp;сайте не&nbsp;является публичной офертой.
                        </p>
                        <div className="font-body text-[0.6875rem] sm:text-xs text-stone-400 flex flex-col sm:flex-row items-center gap-2 sm:gap-3">
                            <span>{SITE.legal.owner}</span>
                            <span className="hidden sm:inline text-stone-800">•</span>
                            <span>ОГРНИП {SITE.legal.ogrnip}</span>
                            <span className="hidden sm:inline text-stone-800">•</span>
                            <span>ИНН {SITE.legal.inn}</span>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row items-center gap-x-5">
                        <a href="/privacy-policy/" className={legalLinkClass}>Политика конфиденциальности</a>
                        <a href="/soglasie-na-obrabotku-dannyh/" className={legalLinkClass}>Согласие на&nbsp;обработку данных</a>
                        <button type="button" onClick={openCookieSettings} className={`${legalLinkClass} cursor-pointer`}>
                            Настройки cookies
                        </button>
                    </div>
                </div>
            </div>
        </footer>
    )
}
