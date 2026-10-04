import { CATEGORIES, categoryPath } from '../data/categories'

export default function NotFoundPage() {
    return (
        <section className="relative min-h-[80vh] bg-stone-950 noise overflow-hidden flex items-center pt-28 pb-16">
            <div className="absolute inset-0 deco-grid opacity-20" />
            <div className="relative z-10 max-w-3xl mx-auto px-5 sm:px-8 text-center">
                <p className="font-heading text-7xl sm:text-9xl text-gradient mb-4">404</p>
                <h1 className="font-heading text-2xl sm:text-4xl text-stone-50 mb-4">Страница не найдена</h1>
                <p className="font-body text-base text-stone-400 mb-10">
                    Возможно, ссылка устарела. Начните с&nbsp;главной или&nbsp;выберите раздел ассортимента.
                </p>
                <a href="/" className="btn-primary text-xs sm:text-sm inline-block mb-10">На&nbsp;главную</a>
                <ul className="flex flex-wrap justify-center gap-2">
                    {CATEGORIES.map((c) => (
                        <li key={c.id}>
                            <a href={categoryPath(c)} className="inline-block px-4 py-2 rounded-full border border-white/10 font-body text-xs text-stone-300 hover:border-gold/40 hover:text-gold transition-colors">
                                {c.fullName}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
