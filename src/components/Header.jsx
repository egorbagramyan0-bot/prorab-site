import { useState, useEffect } from 'react'

export default function Header() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { href: '#about', label: 'О салоне' },
        { href: '#brands', label: 'Бренды' },
        { href: '#why-us', label: 'Преимущества' },
        { href: '#contacts', label: 'Контакты' },
    ]

    return (
        <header
            id="header"
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ${scrolled
                ? 'py-3 bg-stone-900/90 backdrop-blur-xl shadow-2xl shadow-black/20 border-b border-white/5'
                : 'py-5 bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="flex items-center gap-3 group cursor-pointer">
                    <img
                        src="/images/logo2.png"
                        alt="ПРОРАБ"
                        className="h-[108px] sm:h-[132px] transition-all duration-500 group-hover:brightness-110"
                    />
                </a>

                {/* Desktop Nav */}
                <nav className="hidden md:flex items-center gap-10">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="accent-border font-body text-[0.8rem] font-medium uppercase tracking-[0.15em] text-stone-300 hover:text-gold transition-colors duration-400 pb-1 cursor-pointer"
                        >
                            {link.label}
                        </a>
                    ))}
                </nav>

                {/* Phone & CTA */}
                <div className="hidden md:flex items-center gap-6">
                    <a
                        href="tel:+79896341375"
                        className="font-body text-sm font-medium text-stone-300 hover:text-gold transition-colors duration-300 flex items-center gap-2 cursor-pointer"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                        </svg>
                        +7 (989) 634-13-75
                    </a>
                    <a
                        href="#contacts"
                        className="btn-primary text-xs px-6 py-2.5 cursor-pointer"
                    >
                        Связаться
                    </a>
                </div>

                {/* Mobile menu button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden text-stone-200 p-2 cursor-pointer"
                    aria-label="Открыть меню навигации"
                >
                    <div className="w-6 flex flex-col gap-1.5">
                        <span className={`block h-[1.5px] bg-current transition-all duration-400 origin-center ${menuOpen ? 'rotate-45 translate-y-[7.5px]' : ''}`} />
                        <span className={`block h-[1.5px] bg-current transition-all duration-300 ${menuOpen ? 'opacity-0 scale-x-0' : ''}`} />
                        <span className={`block h-[1.5px] bg-current transition-all duration-400 origin-center ${menuOpen ? '-rotate-45 -translate-y-[7.5px]' : ''}`} />
                    </div>
                </button>
            </div>

            {/* Mobile Menu */}
            <div
                className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${menuOpen ? 'max-h-[400px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="glass border-t border-white/5 px-6 py-8 flex flex-col gap-5">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setMenuOpen(false)}
                            className="font-body text-base font-medium uppercase tracking-[0.12em] text-stone-300 hover:text-gold transition-colors duration-300 cursor-pointer"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="border-t border-white/10 pt-5 mt-2">
                        <a
                            href="tel:+79896341375"
                            className="font-body text-lg font-semibold text-gold flex items-center gap-3 cursor-pointer"
                        >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                            </svg>
                            +7 (989) 634-13-75
                        </a>
                    </div>
                </div>
            </div>
        </header>
    )
}
