import { useState, useEffect } from 'react'
import { CATEGORIES, categoryPath } from '../data/categories'
import { SITE } from '../data/site'
import { CategoryIcon } from './CategoryVisual'

const NAV_LINKS = [
    { href: '/#about', label: 'О салоне' },
    { href: '/#assortment', label: 'Ассортимент', dropdown: true },
    { href: '/#ceramic3d', label: '3D проект' },
    { href: '/#brands', label: 'Бренды' },
    { href: '/#contacts', label: 'Контакты' },
]

const PhoneIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
    </svg>
)

const Chevron = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
)

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const [assortmentOpen, setAssortmentOpen] = useState(false)
    // Esc закрывает выпадающее «Ассортимент» (оно открывается по наведению/фокусу через CSS)
    const [ddDismissed, setDdDismissed] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 80)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const closeMenu = () => {
        setMenuOpen(false)
        setAssortmentOpen(false)
    }

    return (
        <header
            id="header"
            className={`fixed z-50 transition-all duration-700
                top-2 md:top-0
                left-1/2 md:left-0
                -translate-x-1/2 md:translate-x-0
                md:w-full md:max-w-none
                rounded-2xl md:rounded-none
                ${scrolled || menuOpen
                    ? 'w-[calc(100%-24px)] max-w-[420px] py-2.5 md:py-3 bg-stone-900/90 backdrop-blur-xl shadow-2xl shadow-black/20 border border-white/5 md:border-x-0 md:border-t-0'
                    : 'w-[calc(100%-32px)] py-2.5 md:py-6 bg-transparent'
                }`}
        >
            <div className="container-site max-sm:!px-3 flex items-center justify-between">
                {/* Logo */}
                <a href="/" className="flex items-center flex-shrink-0 gap-3 group cursor-pointer" aria-label="ПРОРАБ — на главную">
                    <img
                        src="/images/logo-pill.webp"
                        alt="ПРОРАБ — салон отделочных материалов"
                        width="483"
                        height="160"
                        className={`w-auto object-contain block transition-all duration-500 group-hover:brightness-110 h-9 ${scrolled ? 'md:h-10' : 'md:h-12 lg:h-14'}`}
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8 xl:gap-10" aria-label="Основное меню">
                    {NAV_LINKS.map((link) =>
                        link.dropdown ? (
                            <div
                                key={link.href}
                                className="relative group/dd"
                                onKeyDown={(e) => {
                                    if (e.key === 'Escape') {
                                        setDdDismissed(true)
                                        e.currentTarget.querySelector('a')?.focus()
                                    }
                                }}
                                onMouseLeave={() => setDdDismissed(false)}
                                onBlur={(e) => {
                                    if (!e.currentTarget.contains(e.relatedTarget)) setDdDismissed(false)
                                }}
                            >
                                <a
                                    href={link.href}
                                    className="accent-border font-body text-[0.8rem] xl:text-[0.875rem] font-medium uppercase tracking-[0.15em] text-stone-300 hover:text-gold transition-colors duration-300 pb-1 cursor-pointer inline-flex items-center gap-1.5"
                                    aria-haspopup="true"
                                >
                                    {link.label}
                                    <Chevron className="w-3 h-3 transition-transform duration-300 group-hover/dd:rotate-180" />
                                </a>
                                <div className={`absolute left-1/2 -translate-x-1/2 top-full pt-5 opacity-0 invisible translate-y-2 ${ddDismissed ? '!opacity-0 !invisible' : ''} group-hover/dd:opacity-100 group-hover/dd:visible group-hover/dd:translate-y-0 group-focus-within/dd:opacity-100 group-focus-within/dd:visible group-focus-within/dd:translate-y-0 transition-all duration-300`}>
                                    <div className="w-[320px] rounded-2xl bg-stone-900/95 backdrop-blur-xl border border-white/10 shadow-2xl shadow-black/40 p-2">
                                        {CATEGORIES.map((c) => (
                                            <a
                                                key={c.id}
                                                href={categoryPath(c)}
                                                className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-stone-300 hover:text-stone-50 hover:bg-white/5 transition-colors duration-200 group/item"
                                            >
                                                <span className="w-9 h-9 rounded-lg border border-gold/20 flex items-center justify-center text-gold flex-shrink-0 group-hover/item:bg-gold/10 transition-colors">
                                                    <CategoryIcon id={c.id} className="w-5 h-5" />
                                                </span>
                                                <span className="font-body text-sm xl:text-base">{c.fullName}</span>
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <a
                                key={link.href}
                                href={link.href}
                                className="accent-border font-body text-[0.8rem] xl:text-[0.875rem] font-medium uppercase tracking-[0.15em] text-stone-300 hover:text-gold transition-colors duration-300 pb-1 cursor-pointer"
                            >
                                {link.label}
                            </a>
                        )
                    )}
                </nav>

                {/* Phone & CTA */}
                <div className="hidden lg:flex items-center gap-6">
                    <a
                        href={SITE.phoneHref}
                        className="font-body text-sm xl:text-base font-medium text-stone-300 hover:text-gold transition-colors duration-300 flex items-center gap-2 cursor-pointer whitespace-nowrap"
                    >
                        <PhoneIcon className="w-4 h-4" />
                        {SITE.phone}
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="lg:hidden text-stone-200 w-11 h-11 -mr-1 flex items-center justify-center cursor-pointer"
                    aria-label={menuOpen ? 'Закрыть меню' : 'Открыть меню'}
                    aria-expanded={menuOpen}
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden overflow-hidden transition-all duration-500 ease-out ${menuOpen ? 'max-h-[640px] opacity-100' : 'max-h-0 opacity-0'}`}>
                <nav className="border-t border-white/5 px-4 py-5 flex flex-col gap-1" aria-label="Мобильное меню">
                    {NAV_LINKS.map((link) =>
                        link.dropdown ? (
                            <div key={link.href}>
                                <button
                                    type="button"
                                    onClick={() => setAssortmentOpen(!assortmentOpen)}
                                    aria-expanded={assortmentOpen}
                                    className="w-full flex items-center justify-between py-3 font-body text-sm font-medium uppercase tracking-[0.12em] text-stone-300 hover:text-gold transition-colors cursor-pointer"
                                >
                                    {link.label}
                                    <Chevron className={`w-4 h-4 transition-transform duration-300 ${assortmentOpen ? 'rotate-180 text-gold' : ''}`} />
                                </button>
                                <div className={`overflow-hidden transition-all duration-400 ${assortmentOpen ? 'max-h-[320px]' : 'max-h-0'}`}>
                                    <div className="pl-3 pb-2 flex flex-col border-l border-gold/20 ml-1">
                                        {CATEGORIES.map((c) => (
                                            <a
                                                key={c.id}
                                                href={categoryPath(c)}
                                                onClick={closeMenu}
                                                className="flex items-center gap-3 py-2.5 font-body text-sm text-stone-400 hover:text-gold transition-colors"
                                            >
                                                <CategoryIcon id={c.id} className="w-4 h-4 text-gold/80" />
                                                {c.fullName}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <a
                                key={link.href}
                                href={link.href}
                                onClick={closeMenu}
                                className="py-3 font-body text-sm font-medium uppercase tracking-[0.12em] text-stone-300 hover:text-gold transition-colors duration-300 cursor-pointer"
                            >
                                {link.label}
                            </a>
                        )
                    )}
                    <div className="border-t border-white/10 pt-4 mt-3">
                        <a href={SITE.phoneHref} className="font-body text-base font-semibold text-gold flex items-center gap-2 cursor-pointer">
                            <PhoneIcon className="w-5 h-5" />
                            {SITE.phone}
                        </a>
                        <p className="font-body text-xs text-stone-500 mt-2">{SITE.hours}</p>
                    </div>
                </nav>
            </div>
        </header>
    )
}
