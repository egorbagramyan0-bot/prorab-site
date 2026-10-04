import { useEffect, useState } from 'react'
import useReveal from '../hooks/useReveal'
import { SITE } from '../data/site'
import { reachGoal } from '../lib/metrika'

const PHOTO_ALTS = [
    'Шоурум салона ПРОРАБ: зона консультации и стенды с образцами керамогранита',
    'Стенды с крупноформатным керамогранитом в салоне ПРОРАБ',
    'Образцы керамогранита Alma Ceramica в салоне отделочных материалов ПРОРАБ',
    'Стенды Alma Ceramica и Artkera с образцами плитки в салоне ПРОРАБ',
    'Экспозиция керамогранита Laparet в салоне ПРОРАБ, с. Крым',
    'Образцы керамогранита под дерево и стенд Artkera в салоне ПРОРАБ',
]

const PHOTOS = PHOTO_ALTS.map((alt, i) => ({
    src: `/images/salon-bg/s${i + 1}.webp`,
    srcSet: `/images/s${i + 1}.webp 1200w, /images/salon-bg/s${i + 1}.webp 2000w`,
    alt,
}))

const SLIDE_MS = 6000

const FACTS = [
    { label: 'Адрес', value: `${SITE.address.locality}, ${SITE.address.street}`, note: `${SITE.address.district}, ${SITE.address.region}` },
    { label: 'Дорога', value: SITE.fromRostov, note: 'Удобный подъезд к салону' },
    { label: 'Режим работы', value: SITE.hours, note: 'Без выходных' },
    { label: 'Доставка', value: 'Доставим выбранные материалы', note: 'Сроки и условия уточняйте у консультанта' },
]

const Arrow = ({ d }) => (
    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
)

export default function About() {
    const sectionRef = useReveal()
    const [current, setCurrent] = useState(0)
    // Грузим только уже показанные фото и следующее — не тянем все 6 сразу
    const [loadedUpTo, setLoadedUpTo] = useState(1)

    const goTo = (idx) => {
        const next = (idx + PHOTOS.length) % PHOTOS.length
        setCurrent(next)
        setLoadedUpTo((prev) => Math.max(prev, Math.min(next + 1, PHOTOS.length - 1)))
    }

    // Пауза при наведении/фокусе; при «уменьшить движение» фото не листаются сами.
    // Фото меняется по окончании анимации полоски прогресса — пауза останавливает и то, и другое.
    const [paused, setPaused] = useState(false)
    const [reducedMotion, setReducedMotion] = useState(false)

    useEffect(() => {
        setReducedMotion(window.matchMedia('(prefers-reduced-motion: reduce)').matches)
    }, [])

    return (
        <section
            id="about"
            ref={sectionRef}
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocus={() => setPaused(true)}
            onBlur={(e) => {
                if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false)
            }}
            className="relative isolate overflow-hidden bg-stone-950 min-h-screen-safe flex flex-col justify-end">
            {/* Фото салона — фон блока */}
            <div className="absolute inset-0 -z-10">
                {PHOTOS.map((p, idx) =>
                    idx <= loadedUpTo || idx === current ? (
                        <img
                            key={p.src}
                            src={p.src}
                            srcSet={p.srcSet}
                            sizes="100vw"
                            alt={p.alt}
                            loading="lazy"
                            className="absolute inset-0 w-full h-full object-cover"
                            style={{
                                opacity: current === idx ? 1 : 0,
                                transform: current === idx ? 'scale(1.08)' : 'scale(1)',
                                transition: 'opacity 1.4s ease, transform 7s linear',
                            }}
                        />
                    ) : null
                )}
                <div aria-hidden="true" className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-stone-950/60 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-950/45 to-stone-950/10" />
                <div className="absolute inset-0 bg-gradient-to-r from-stone-950/75 via-stone-950/15 to-transparent" />
            </div>

            <div className="about-photo-gap relative container-site sm:pt-28 pb-8 sm:pb-14">
                <h2 className="reveal font-heading text-[1.75rem] sm:text-4xl lg:text-[2.9rem] 2xl:text-[3.25rem] text-stone-50 leading-[1.1] mb-8 lg:mb-10 drop-shadow-[0_2px_24px_rgba(0,0,0,0.45)]">
                    Место, где материалы
                    {' '}<br />
                    <span className="text-gradient">можно увидеть вживую</span>
                </h2>
                <div className="grid lg:grid-cols-[1.05fr_1fr] gap-10 lg:gap-16 items-start">
                    {/* Текст */}
                    <div className="reveal">
                        <p className="font-body text-base sm:text-lg xl:text-xl text-stone-200 leading-relaxed mb-8 max-w-xl">
                            В&nbsp;салоне ПРОРАБ можно посмотреть образцы отделочных материалов, сравнить фактуры, оттенки и&nbsp;форматы,
                            а&nbsp;также получить консультацию по&nbsp;подбору плитки, напольных покрытий, дверей и&nbsp;фурнитуры.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <a
                                href={SITE.routeUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => reachGoal('build_route')}
                                className="btn-primary !px-8 whitespace-nowrap text-xs sm:text-sm inline-flex items-center justify-center gap-2"
                            >
                                Построить маршрут
                                <Arrow d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </a>
                            <a href={SITE.phoneHref} className="btn-secondary !px-8 whitespace-nowrap text-xs sm:text-sm text-center">
                                {SITE.phone}
                            </a>
                        </div>

                        {/* Рейтинг — официальный бейдж Яндекса, цифры обновляются сами */}
                        <div className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                            <iframe
                                src={`https://yandex.ru/sprav/widget/rating-badge/${SITE.yandexOrgId}?type=rating`}
                                width="150"
                                height="50"
                                frameBorder="0"
                                loading="lazy"
                                title="Рейтинг салона ПРОРАБ на Яндекс Картах"
                                className="rounded-lg bg-white flex-shrink-0"
                            />
                            <a
                                href={SITE.reviewsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 font-body text-sm xl:text-base font-semibold text-stone-200 hover:text-gold transition-colors"
                            >
                                Отзывы клиентов на&nbsp;Яндекс Картах
                                <Arrow d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </a>
                        </div>
                    </div>

                    {/* Факты на стекле */}
                    <dl className="reveal grid grid-cols-2 rounded-3xl overflow-hidden border border-white/10 bg-stone-950/45 backdrop-blur-xl">
                        {FACTS.map((f, i) => (
                            <div
                                key={f.label}
                                className={`p-4 sm:p-6 border-white/10 ${i > 1 ? 'border-t' : ''} ${i % 2 === 1 ? 'border-l' : ''}`}
                            >
                                <dt className="font-body text-xs xl:text-sm font-semibold uppercase tracking-[0.16em] text-gold mb-2">{f.label}</dt>
                                <dd>
                                    <p className="font-body text-[0.8125rem] sm:text-base xl:text-lg font-medium text-stone-50 leading-snug">{f.value}</p>
                                    <p className="font-body text-[0.6875rem] sm:text-sm text-stone-400 mt-1">{f.note}</p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Управление слайдами */}
                <div className="mt-8 sm:mt-14 pt-5 sm:pt-6 border-t border-white/10 flex items-center justify-between gap-6">
                    <p className="hidden sm:block font-body text-xs uppercase tracking-[0.2em] text-stone-400">
                        Салон ПРОРАБ · {SITE.address.locality}
                    </p>
                    <div className="flex items-center gap-4 sm:gap-6 w-full sm:w-auto">
                        <div className="flex gap-1.5 flex-1 sm:flex-none">
                            {PHOTOS.map((p, idx) => (
                                <button
                                    key={p.src}
                                    type="button"
                                    onClick={() => goTo(idx)}
                                    aria-label={`Фото салона ${idx + 1}`}
                                    aria-current={current === idx}
                                    className="relative h-11 flex-1 sm:flex-none sm:w-10 cursor-pointer group"
                                >
                                    <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[2px] rounded-full bg-white/20 group-hover:bg-white/40 overflow-hidden">
                                        {current === idx && (
                                            <span
                                                key={current}
                                                className="absolute inset-0 bg-gold origin-left animate-progress"
                                                style={{
                                                    animationDuration: `${SLIDE_MS}ms`,
                                                    animationTimingFunction: 'linear',
                                                    animationPlayState: paused ? 'paused' : 'running',
                                                }}
                                                onAnimationEnd={() => !reducedMotion && goTo(current + 1)}
                                            />
                                        )}
                                        {idx < current && <span className="absolute inset-0 bg-white/50" />}
                                    </span>
                                </button>
                            ))}
                        </div>
                        <div className="flex gap-2">
                            <button type="button" onClick={() => goTo(current - 1)} aria-label="Предыдущее фото" className="w-11 h-11 rounded-full border border-white/20 text-stone-200 flex items-center justify-center hover:border-gold hover:text-gold transition-colors cursor-pointer">
                                <Arrow d="M15.75 19.5L8.25 12l7.5-7.5" />
                            </button>
                            <button type="button" onClick={() => goTo(current + 1)} aria-label="Следующее фото" className="w-11 h-11 rounded-full border border-white/20 text-stone-200 flex items-center justify-center hover:border-gold hover:text-gold transition-colors cursor-pointer">
                                <Arrow d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
