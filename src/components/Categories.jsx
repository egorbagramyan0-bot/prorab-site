import useReveal from '../hooks/useReveal'
import { CATEGORIES, categoryPath } from '../data/categories'
import CategoryVisual from './CategoryVisual'
import SectionHeader from './SectionHeader'

export default function Categories() {
    const sectionRef = useReveal()

    return (
        <section id="assortment" ref={sectionRef} className="relative py-16 sm:py-28 lg:py-32 bg-stone-50 overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-gold/5 rounded-full blur-[150px]" />

            <div className="relative container-site">
                <SectionHeader
                    title="Что представлено"
                    accent="в салоне"
                    className="mb-12 sm:mb-16"
                />

                <ul className="grid sm:grid-cols-2 lg:grid-cols-12 gap-4 sm:gap-5 reveal-stagger">
                    {CATEGORIES.map((c, i) => (
                        <li
                            key={c.id}
                            className={`reveal ${i < 2 ? 'lg:col-span-6' : 'lg:col-span-6 xl:col-span-3'}`}
                        >
                            <a
                                href={categoryPath(c)}
                                className="group flex flex-col h-full rounded-3xl overflow-hidden bg-white border border-stone-200/70 hover:border-gold/40 hover:shadow-2xl hover:shadow-stone-900/10 hover:-translate-y-1 transition-all duration-500"
                            >
                                <div className={`relative ${i < 2 ? 'h-52 sm:h-64 xl:h-72 2xl:h-80' : 'h-44 sm:h-52 xl:h-60 2xl:h-64'}`}>
                                    <CategoryVisual category={c} />
                                    <span className="absolute top-4 left-5 font-heading text-lg text-stone-400/80">
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>
                                <div className="flex flex-col flex-1 p-6 sm:p-7">
                                    <h3 className="font-heading text-lg sm:text-xl xl:text-[1.35rem] text-stone-900 leading-snug mb-3">
                                        {c.fullName}
                                    </h3>
                                    <p className="font-body text-sm lg:text-base text-stone-500 leading-relaxed mb-5">
                                        {c.card}
                                    </p>
                                    <span className="mt-auto inline-flex items-center gap-2 font-body text-xs xl:text-sm font-semibold uppercase tracking-[0.15em] text-gold-dark group-hover:text-gold transition-colors">
                                        Подробнее
                                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </span>
                                </div>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}
