export default function Footer() {
    const currentYear = new Date().getFullYear()

    return (
        <footer className="bg-stone-950 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-5 sm:px-8 py-16">
                <div className="grid md:grid-cols-3 gap-12 items-start">
                    {/* Logo & desc */}
                    <div>
                        <img
                            src="/images/logo2.png"
                            alt="ПРОРАБ"
                            className="h-[120px] mb-5 opacity-80"
                        />
                        <p className="font-body text-sm text-stone-600 leading-relaxed max-w-xs font-light">
                            Салон керамогранита ПРОРАБ — ваш проводник в мире качественных отделочных материалов.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div>
                        <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-5">
                            Навигация
                        </h4>
                        <nav className="flex flex-col gap-3">
                            {[
                                { href: '#about', label: 'О салоне' },
                                { href: '#brands', label: 'Бренды' },
                                { href: '#why-us', label: 'Преимущества' },
                                { href: '#contacts', label: 'Контакты' },
                            ].map((link) => (
                                <a
                                    key={link.href}
                                    href={link.href}
                                    className="font-body text-sm text-stone-600 hover:text-gold transition-colors duration-300 cursor-pointer"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Contact summary */}
                    <div>
                        <h4 className="font-body text-xs font-semibold uppercase tracking-[0.2em] text-stone-500 mb-5">
                            Контакты
                        </h4>
                        <div className="space-y-4">
                            <a
                                href="tel:+79896341375"
                                className="block font-heading text-2xl font-bold text-stone-200 hover:text-gold transition-colors duration-300 cursor-pointer"
                            >
                                +7 (989) 634-13-75
                            </a>
                            <p className="font-body text-sm text-stone-600 font-light">
                                Ежедневно 9:00–20:00
                            </p>
                            <p className="font-body text-sm text-stone-600 leading-relaxed font-light">
                                Ростовская обл., Мясниковский р-н,
                                <br />
                                с. Крым, ул. Большесальская, 20
                            </p>
                            <a
                                href="https://t.me/+79896341375"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2.5 font-body text-sm font-medium text-gold hover:text-gold-light transition-colors duration-300 mt-1 cursor-pointer"
                            >
                                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
                                </svg>
                                Telegram
                            </a>
                        </div>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="mt-16 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="font-body text-xs text-stone-700 font-light">
                        © {currentYear} Салон керамогранита ПРОРАБ. Все права защищены.
                    </p>
                    <p className="font-body text-xs text-stone-800 font-light">
                        Ростовская область, с. Крым
                    </p>
                </div>
            </div>
        </footer>
    )
}
