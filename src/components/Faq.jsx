import useReveal from '../hooks/useReveal'
import { SITE } from '../data/site'

// Частые вопросы: нативный <details> — ответы есть в HTML (видны Яндексу), работает без JS и с клавиатуры.
export default function Faq({ items, tone = 'white' }) {
    const sectionRef = useReveal()

    return (
        <section id="faq" ref={sectionRef} className={`relative py-16 sm:py-24 lg:py-28 overflow-hidden ${tone === 'stone' ? 'bg-stone-50' : 'bg-white'}`}>
            <div className="relative container-site grid lg:grid-cols-[minmax(0,5fr)_minmax(0,8fr)] gap-10 lg:gap-20">
                <div className="reveal lg:sticky lg:top-32 self-start">
                    <h2 className="font-heading text-[1.6rem] sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl text-stone-900 leading-[1.12] mb-5">
                        Частые{' '}<br className="hidden lg:block" />
                        <span className="text-gradient-dark">вопросы</span>
                    </h2>
                    <p className="font-body text-base lg:text-lg text-stone-500 leading-relaxed max-w-md mb-6">
                        Не нашли ответ? Позвоните или напишите&nbsp;— консультант подскажет по&nbsp;наличию, срокам и&nbsp;доставке.
                    </p>
                    <a href={SITE.phoneHref} className="inline-flex items-center gap-2 py-2 font-body text-base xl:text-lg font-semibold text-stone-900 hover:text-gold-dark transition-colors">
                        {SITE.phone}
                    </a>
                </div>

                <div className="reveal border-t border-stone-200">
                    {items.map((item) => (
                        <details key={item.q} className="group border-b border-stone-200">
                            <summary className="flex items-start justify-between gap-6 py-5 sm:py-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                                <h3 className="font-body text-base sm:text-lg xl:text-xl font-semibold text-stone-900 leading-snug group-hover:text-gold-dark transition-colors">
                                    {item.q}
                                </h3>
                                <span className="relative flex-shrink-0 w-8 h-8 mt-0.5 rounded-full border border-stone-300 group-open:border-gold group-open:bg-gold transition-colors" aria-hidden="true">
                                    <span className="absolute left-1/2 top-1/2 w-3 h-[1.5px] -translate-x-1/2 -translate-y-1/2 bg-stone-700 group-open:bg-stone-900" />
                                    <span className="absolute left-1/2 top-1/2 w-[1.5px] h-3 -translate-x-1/2 -translate-y-1/2 bg-stone-700 transition-transform duration-300 group-open:scale-y-0" />
                                </span>
                            </summary>
                            <p className="font-body text-base lg:text-lg text-stone-600 leading-relaxed pb-6 sm:pr-14 max-w-3xl">
                                {item.a}
                            </p>
                        </details>
                    ))}
                </div>
            </div>
        </section>
    )
}
