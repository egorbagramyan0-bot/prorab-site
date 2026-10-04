import useReveal from '../hooks/useReveal'
import { CATEGORIES, categoryPath, getCategory } from '../data/categories'
import { SITE } from '../data/site'
import CategoryVisual, { CategoryIcon } from '../components/CategoryVisual'
import Brands from '../components/Brands'
import Ceramic3D from '../components/Ceramic3D'
import Contacts from '../components/Contacts'
import SectionHeader from '../components/SectionHeader'
import Faq from '../components/Faq'
import { CATEGORY_FAQ } from '../data/faq'

function CategoryHero({ category }) {
    return (
        <section className="relative bg-stone-950 noise overflow-hidden pt-28 sm:pt-36 lg:pt-44 pb-16 sm:pb-24">
            <div className="absolute inset-0 deco-grid opacity-20" />
            <div className="absolute -top-40 right-0 w-[600px] h-[600px] bg-gold/10 rounded-full blur-[160px]" />

            <div className="relative z-10 container-site grid lg:grid-cols-[1.7fr_1fr] xl:grid-cols-[1.45fr_1fr] gap-10 lg:gap-16 items-center">
                <div>
                    <nav aria-label="Хлебные крошки" className="mb-8 animate-slide-up">
                        <ol className="flex flex-wrap items-center gap-2 font-body text-sm text-stone-400">
                            <li><a href="/" className="hover:text-gold transition-colors">Главная</a></li>
                            <li aria-hidden="true">/</li>
                            <li className="text-stone-300" aria-current="page">{category.name}</li>
                        </ol>
                    </nav>

                    <h1 className="font-heading text-[1.8rem] sm:text-5xl lg:text-[2.6rem] xl:text-[3.1rem] text-stone-50 leading-[1.08] mb-6 animate-slide-up" style={{ animationDelay: '0.2s' }}>
                        {category.page.h1}
                    </h1>
                    <p className="font-body text-base sm:text-lg xl:text-xl text-stone-300/90 leading-relaxed max-w-xl mb-8 sm:mb-10 animate-slide-up" style={{ animationDelay: '0.3s' }}>
                        {category.page.lead}
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 animate-slide-up" style={{ animationDelay: '0.4s' }}>
                        <a href="#brands" className="btn-primary text-xs sm:text-sm xl:text-[0.95rem] text-center">Смотреть бренды</a>
                        <a href="#contacts" className="btn-secondary text-xs sm:text-sm xl:text-[0.95rem] text-center">Как добраться</a>
                    </div>
                </div>

                <div className="relative h-[260px] sm:h-[380px] lg:h-[460px] rounded-[2rem] overflow-hidden border border-white/10 animate-slide-up group" style={{ animationDelay: '0.3s' }}>
                    <CategoryVisual category={category} large />
                    <div className="absolute bottom-5 left-5 right-5 glass rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
                        <div>
                            <p className="font-body text-xs uppercase tracking-[0.16em] text-stone-400 mb-1">Образцы в&nbsp;салоне</p>
                            <p className="font-body text-sm sm:text-base font-semibold text-stone-100">{SITE.address.locality}, {SITE.address.street}</p>
                        </div>
                        <span className="hidden sm:block lg:hidden xl:block font-body text-sm text-gold whitespace-nowrap">{SITE.hours}</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

function Overview({ category }) {
    const ref = useReveal()

    return (
        <section ref={ref} className="relative py-16 sm:py-24 lg:py-28 bg-stone-50 overflow-hidden">
            <div className="relative container-site">
                <h2 className="reveal font-heading text-[1.6rem] sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl text-stone-900 leading-[1.12] mb-10 lg:mb-14">
                    {category.fullName}
                    {' '}<br />
                    <span className="text-gradient-dark">в&nbsp;салоне ПРОРАБ</span>
                </h2>
                <div className="grid lg:grid-cols-[1fr_1.1fr] gap-10 lg:gap-20">
                    <div className="reveal">
                        {category.page.intro.map((p) => (
                            <p key={p.slice(0, 24)} className="font-body text-base lg:text-lg text-stone-600 leading-relaxed mb-4 last:mb-0">{p}</p>
                        ))}
                    </div>

                    <div>
                        <h3 className="reveal font-body text-sm font-semibold uppercase tracking-[0.16em] text-stone-500 mb-5">Что можно подобрать</h3>
                        <ul className="grid sm:grid-cols-2 gap-4 reveal-stagger">
                            {category.page.topics.map((t) => (
                                <li key={t.title} className="reveal rounded-2xl bg-white border border-stone-200/80 p-6 hover:border-gold/30 hover:shadow-lg hover:shadow-stone-900/5 transition-all duration-500">
                                    <p className="font-heading text-base sm:text-lg text-stone-900 mb-2">{t.title}</p>
                                    <p className="font-body text-sm lg:text-base text-stone-500 leading-relaxed">{t.text}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    )
}

function OtherCategories({ current }) {
    const ref = useReveal()
    const others = CATEGORIES.filter((c) => c.id !== current.id)

    return (
        <section ref={ref} className="relative py-16 sm:py-24 bg-stone-50 overflow-hidden">
            <div className="relative container-site">
                <SectionHeader title="Другие категории" align="left" className="mb-10" />
                <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 reveal-stagger">
                    {others.map((c) => (
                        <li key={c.id} className="reveal">
                            <a href={categoryPath(c)} className="group flex items-center gap-4 h-full rounded-2xl bg-white border border-stone-200/80 p-5 hover:border-gold/40 hover:shadow-xl hover:shadow-stone-900/5 hover:-translate-y-0.5 transition-all duration-500">
                                <span className="w-12 h-12 rounded-xl bg-stone-900 text-gold flex items-center justify-center flex-shrink-0 group-hover:bg-gradient-to-br group-hover:from-gold group-hover:to-gold-light group-hover:text-stone-900 transition-all duration-500">
                                    <CategoryIcon id={c.id} className="w-6 h-6" />
                                </span>
                                <span className="font-body text-sm font-semibold text-stone-800 leading-snug">{c.fullName}</span>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default function CategoryPage({ categoryId }) {
    const category = getCategory(categoryId)

    return (
        <>
            <CategoryHero category={category} />
            <Overview category={category} />
            <Brands
                category={category.id}
                title="Бренды"
                accent={category.genitive}
                text="Нажмите на бренд, чтобы открыть официальный каталог производителя. Наличие конкретных коллекций и образцов уточняйте у консультанта салона."
            />
            {category.id === 'tile' && <Ceramic3D />}
            <Faq items={CATEGORY_FAQ[category.id]} />
            <OtherCategories current={category} />
            <Contacts text="Салон в с. Крым, рядом с Чалтырём — 10 минут от Ростова-на-Дону. Образцы удобно посмотреть вживую, а мы подскажем по брендам, наличию, срокам и доставке." />
        </>
    )
}
