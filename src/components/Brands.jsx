import { useState } from 'react'
import useReveal from '../hooks/useReveal'
import { BRANDS, brandsByCategory } from '../data/brands'
import { CATEGORIES, getCategory } from '../data/categories'
import { SITE } from '../data/site'
import SectionHeader from './SectionHeader'

const ExternalIcon = ({ className }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
    </svg>
)

// Две темы секции: тёмная (страницы категорий) и светлая (главная, чтобы не сливаться с тёмными контактами).
const THEMES = {
    dark: {
        section: 'bg-stone-900 noise',
        card: 'bg-stone-800/40 border-white/10 hover:shadow-black/40',
        logo: 'bg-white',
        name: 'text-stone-100',
        label: 'text-stone-400',
        cta: 'text-gold group-hover:text-gold-light',
        chip: 'bg-white/[0.03] text-stone-300 border-white/10 hover:border-gold/40 hover:text-gold',
        empty: 'border-white/15 bg-white/[0.02]',
        emptyTitle: 'text-stone-100',
        emptyText: 'text-stone-400',
        secondaryBtn: 'btn-secondary',
        note: 'text-stone-400',
    },
    light: {
        section: 'bg-white',
        card: 'bg-stone-50 border-stone-200/80 hover:shadow-stone-900/10',
        logo: 'bg-white border-b border-stone-200/70',
        name: 'text-stone-900',
        label: 'text-stone-500',
        cta: 'text-gold-dark group-hover:text-gold',
        chip: 'bg-white text-stone-600 border-stone-200 hover:border-gold/50 hover:text-gold-dark',
        empty: 'border-stone-300 bg-stone-50',
        emptyTitle: 'text-stone-900',
        emptyText: 'text-stone-500',
        secondaryBtn: 'btn-secondary !text-stone-800 !border-stone-300 hover:!text-gold-dark hover:!border-gold',
        note: 'text-stone-500',
    },
}

function BrandCard({ brand, t }) {
    const labels = brand.categories.map((id) => getCategory(id)?.filterLabel).filter(Boolean)

    return (
        <a
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${brand.name} — открыть официальный каталог производителя в новой вкладке`}
            className={`group flex flex-col h-full rounded-2xl overflow-hidden border hover:border-gold/40 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500 ${t.card}`}
        >
            <div className={`h-24 sm:h-28 xl:h-32 px-5 py-4 flex items-center justify-center ${t.logo}`}>
                {brand.logo ? (
                    <img src={brand.logo} alt={`Логотип ${brand.name}`} loading="lazy" className="max-h-full max-w-full object-contain transition-transform duration-500 group-hover:scale-105" />
                ) : (
                    <span className="font-body text-xl font-extrabold text-stone-800 text-center leading-tight">{brand.name}</span>
                )}
            </div>
            <div className="flex flex-col flex-1 p-4 sm:p-5 xl:p-6">
                <h3 className={`font-body text-base xl:text-lg font-semibold ${t.name}`}>{brand.name}</h3>
                <p className={`font-body text-xs sm:text-sm mt-1 ${t.label}`}>{labels.join(' · ')}</p>
                <span className={`mt-auto pt-4 xl:pt-5 font-body text-sm xl:text-[0.95rem] font-semibold leading-snug transition-colors ${t.cta}`}>
                    Открыть каталог производителя
                    <ExternalIcon className="inline-block w-3.5 h-3.5 ml-1 -mt-0.5 align-middle transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
            </div>
        </a>
    )
}

function EmptyState({ category, t }) {
    return (
        <div className={`col-span-full rounded-3xl border border-dashed px-6 py-12 sm:py-16 text-center ${t.empty}`}>
            <p className={`font-heading text-xl sm:text-2xl leading-snug mb-4 ${t.emptyTitle}`}>
                Бренды {category ? <>в&nbsp;категории «{category.name}»</> : null} скоро появятся на&nbsp;сайте
            </p>
            <p className={`font-body text-sm sm:text-base max-w-xl mx-auto mb-8 ${t.emptyText}`}>
                Мы&nbsp;готовим список производителей. Актуальный ассортимент, образцы и&nbsp;наличие уточняйте у&nbsp;консультанта салона.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href={SITE.phoneHref} className="btn-primary text-xs sm:text-sm xl:text-[0.95rem]">Позвонить</a>
                <a href={SITE.telegram} target="_blank" rel="noopener noreferrer" className={`${t.secondaryBtn} text-xs sm:text-sm xl:text-[0.95rem]`}>Написать в&nbsp;Telegram</a>
            </div>
        </div>
    )
}

// category — фиксированная категория (страница категории), без неё — все бренды с фильтрами.
export default function Brands({ category = null, title, accent, text, headingLevel = 'h2', light = false }) {
    const t = light ? THEMES.light : THEMES.dark
    const sectionRef = useReveal()
    const [filter, setFilter] = useState('all')

    const fixedCategory = category ? getCategory(category) : null
    const activeId = fixedCategory ? fixedCategory.id : filter === 'all' ? null : filter
    const brands = activeId ? brandsByCategory(activeId) : BRANDS
    const activeCategory = activeId ? getCategory(activeId) : null

    const filters = [{ id: 'all', label: 'Все' }, ...CATEGORIES.map((c) => ({ id: c.id, label: c.filterLabel }))]

    return (
        <section id="brands" ref={sectionRef} className={`relative py-16 sm:py-28 lg:py-32 overflow-hidden ${t.section}`}>
            {!light && (
                <>
                    <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gold/5 rounded-full blur-[150px]" />
                </>
            )}

            <div className="relative z-10 container-site">
                <SectionHeader
                    dark={!light}
                    as={headingLevel}
                    title={title ?? 'Бренды'}
                    accent={accent ?? 'отделочных материалов'}
                    text={text ?? 'Мы работаем с производителями плитки, керамогранита, напольных покрытий, дверей и фурнитуры. Нажмите на бренд, чтобы перейти в официальный каталог производителя.'}
                    className="mb-10 sm:mb-12"
                />

                {!fixedCategory && (
                    <div className="reveal -mx-5 sm:mx-0 mb-8 sm:mb-10">
                        <div className="flex sm:flex-wrap sm:justify-center gap-2 overflow-x-auto no-scrollbar px-5 sm:px-0" role="group" aria-label="Фильтр брендов по категориям">
                            {filters.map((f) => {
                                const active = filter === f.id
                                return (
                                    <button
                                        key={f.id}
                                        type="button"
                                        onClick={() => setFilter(f.id)}
                                        aria-pressed={active}
                                        className={`whitespace-nowrap px-4 sm:px-6 py-2.5 sm:py-3 rounded-full font-body text-sm xl:text-base font-medium border transition-all duration-300 cursor-pointer ${active
                                            ? 'bg-gradient-to-br from-gold to-gold-light text-stone-900 border-transparent shadow-lg shadow-gold/20'
                                            : t.chip
                                            }`}
                                    >
                                        {f.label}
                                    </button>
                                )
                            })}
                        </div>
                    </div>
                )}

                <div key={activeId ?? 'all'} className="grid grid-cols-1 min-[360px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 2xl:gap-5 animate-fade-in-up">
                    {brands.length > 0
                        ? brands.map((b) => <BrandCard key={b.name} brand={b} t={t} />)
                        : <EmptyState category={activeCategory} t={t} />}
                </div>

                <div className="reveal mt-10 sm:mt-14 max-w-3xl mx-auto flex items-start gap-4 rounded-2xl border border-gold/20 bg-gold/[0.04] px-5 py-4 sm:px-6 sm:py-5">
                    <svg className="w-5 h-5 text-gold flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M11.25 11.25l.041-.02a.75.75 0 011.063.852l-.708 2.836a.75.75 0 001.063.853l.041-.021M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9-3.75h.008v.008H12V8.25z" />
                    </svg>
                    <p className={`font-body text-sm xl:text-base leading-relaxed ${t.note}`}>
                        На&nbsp;сайте представлены производители, с&nbsp;которыми можно ознакомиться. Ссылки ведут на&nbsp;официальные
                        сайты брендов. Наличие конкретных коллекций и&nbsp;образцов уточняйте у&nbsp;консультанта салона. Товарные знаки и&nbsp;логотипы принадлежат их&nbsp;правообладателям.
                    </p>
                </div>
            </div>
        </section>
    )
}
