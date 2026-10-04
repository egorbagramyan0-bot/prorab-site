import useReveal from '../hooks/useReveal'
import { SITE } from '../data/site'

const Arrow = ({ className, d = 'M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3' }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d={d} />
    </svg>
)

export default function Ceramic3D({ headingLevel = 'h2' }) {
    const sectionRef = useReveal(0.08)
    const Heading = headingLevel

    return (
        <section id="ceramic3d" ref={sectionRef} className="relative py-16 sm:py-24 lg:py-28 bg-stone-50 overflow-hidden">
            <div className="relative container-site">
                <div className="reveal relative rounded-[2rem] overflow-hidden bg-stone-900 noise px-6 py-12 sm:p-14 lg:p-16">
                    <div className="absolute inset-0 deco-grid opacity-30" />
                    <div className="absolute -top-24 -left-24 w-[420px] h-[420px] bg-gold/10 rounded-full blur-[140px]" />

                    <Heading className="font-heading relative z-10 text-[1.6rem] sm:text-4xl lg:text-[2.75rem] 2xl:text-5xl text-stone-50 leading-[1.12] mb-8 lg:mb-12">
                        3D-проект помещения
                        {' '}<br />
                        <span className="text-gradient">при&nbsp;визите в&nbsp;салон</span>
                    </Heading>
                    <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
                        {/* Text */}
                        <div>
                            <div className="flex flex-wrap gap-2 mb-6">
                                <span className="px-3.5 py-1.5 rounded-full bg-gold/15 border border-gold/30 font-body text-xs xl:text-sm font-semibold uppercase tracking-[0.12em] text-gold-light">Бесплатно</span>
                                <span className="px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 font-body text-xs xl:text-sm font-medium uppercase tracking-[0.12em] text-stone-300">Для&nbsp;плитки и&nbsp;керамогранита</span>
                            </div>
                            <p className="font-body text-stone-300 text-base sm:text-lg xl:text-xl leading-relaxed mb-8">
                                Поможем заранее увидеть, как&nbsp;плитка или&nbsp;керамогранит будут смотреться в&nbsp;интерьере.
                                Это удобно, если вы&nbsp;выбираете материалы для&nbsp;ванной, кухни, пола или&nbsp;стен и&nbsp;хотите
                                оценить сочетания до&nbsp;покупки.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                <a href={SITE.ceramic3dGallery} target="_blank" rel="noopener noreferrer" className="btn-primary !px-7 whitespace-nowrap text-xs sm:text-sm xl:text-[0.95rem] inline-flex items-center justify-center gap-2">
                                    Посмотреть проекты
                                    <Arrow className="w-4 h-4" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </a>
                                <a href="/#contacts" className="btn-secondary !px-7 whitespace-nowrap text-xs sm:text-sm xl:text-[0.95rem] inline-flex items-center justify-center gap-2">
                                    Приехать в&nbsp;салон
                                </a>
                            </div>
                        </div>

                        {/* Gallery preview card */}
                        <a
                            href={SITE.ceramic3dGallery}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block relative rounded-3xl overflow-hidden border border-white/10 bg-stone-950/60 hover:border-gold/40 transition-all duration-500"
                        >
                            <div className="relative h-[240px] sm:h-[320px] overflow-hidden">
                                <div className="absolute inset-0" style={{
                                    backgroundImage: 'linear-gradient(rgba(202,138,4,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(202,138,4,0.1) 1px, transparent 1px)',
                                    backgroundSize: '40px 40px',
                                }} />
                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <div className="w-24 h-24 sm:w-28 sm:h-28 mb-6 relative">
                                        <div className="absolute inset-0 bg-gradient-to-br from-gold/30 to-gold/5 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-700" />
                                        <div className="absolute inset-0 bg-stone-900 border border-gold/30 rounded-2xl flex items-center justify-center group-hover:-translate-y-1 transition-transform duration-500">
                                            <svg className="w-12 h-12 sm:w-14 sm:h-14 text-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1} aria-hidden="true">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 7.5l-9-5.25L3 7.5m18 0l-9 5.25m9-5.25v9l-9 5.25M3 7.5l9 5.25M3 7.5v9l9 5.25m0-9v9" />
                                            </svg>
                                        </div>
                                    </div>
                                    <p className="font-heading text-lg sm:text-xl text-stone-100 mb-1">Галерея проектов</p>
                                    <p className="font-body text-sm text-stone-500">Ceramic 3D</p>
                                </div>
                                <div className="absolute top-6 left-6 w-16 h-12 border border-gold/20 rounded-lg" />
                                <div className="absolute bottom-8 right-8 w-20 h-14 border border-gold/20 rounded-lg opacity-60" />
                            </div>
                            <div className="px-6 py-5 flex items-center justify-between border-t border-white/10">
                                <div>
                                    <p className="font-body text-sm xl:text-base font-semibold text-stone-100">Смотреть 3D-проекты</p>
                                    <p className="font-body text-xs xl:text-sm text-stone-400 mt-0.5">Реальные визуализации наших клиентов</p>
                                </div>
                                <div className="w-10 h-10 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-stone-900 transition-all duration-500">
                                    <Arrow className="w-5 h-5" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
