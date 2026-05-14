import { useEffect, useRef } from 'react'

const brands = [
    { name: 'Alma Ceramica', url: 'https://almaceramica.ru', logo: '/images/brands correct/alma.png' },
    { name: 'Artkera', url: 'https://artkera.ru/?ysclid=mp5uood2u9366592724', logo: '/images/brands correct/ARTkera.png' },
    { name: 'Casati', url: 'https://casaticeramica.ru/?ysclid=mp5uwk3g5k782095352', logo: '/images/brands correct/casati.png' },
    { name: 'Cersanit', url: 'https://cersanit.ru/catalog/2d/', logo: '/images/brands correct/Cersanit.png' },
    { name: 'Dako', url: 'https://dako.club/?ysclid=mp5uubragx437521517', logo: '/images/brands correct/dako.png' },
    { name: 'Delacora', url: 'https://artkera.ru/collections?brand=.delacora', logo: '/images/brands correct/Delacora.png' },
    { name: 'Eurotile', url: 'https://eurotile.ru/', logo: '/images/brands correct/eurotile.png' },
    { name: 'Graniteya', url: 'https://www.uralgres.com/catalog/granitea/?ysclid=mp5uzeetyh794605150', logo: '/images/brands correct/graniteya.png' },
    { name: 'Idalgo', url: 'https://www.uralgres.com/?ysclid=mp5ummkjzk875710236', logo: '/images/brands correct/idalgo.png' },
    { name: 'Kerama Marazzi', url: 'https://kerama-marazzi.com', logo: '/images/brands correct/kerama marazzi.png' },
    { name: 'Keramin', url: 'https://keramin.ru/?ysclid=mp5uwx5ff4815611066', logo: '/images/brands correct/keramin.png' },
    { name: 'LCM', url: 'https://artkera.ru/collections?brand=.lcm', logo: '/images/brands correct/lcm.png' },
    { name: 'Maimoon', url: 'https://maimoonceramica.ru/', logo: '/images/brands correct/maimoon.png' },
    { name: 'New Trend', url: 'https://artkera.ru/collections?brand=.new-trend', logo: '/images/brands correct/newtrend.png' },
    { name: 'Уральский Гранит', url: 'https://www.uralgres.com/?ysclid=mp5ummkjzk875710236', logo: '/images/brands correct/ural.png' },
]

function BrandCard({ brand }) {
    return (
        <a
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="brand-logo flex-shrink-0 flex items-center justify-center w-[150px] sm:w-[200px] h-[70px] sm:h-[90px] bg-white rounded-xl sm:rounded-2xl border border-stone-200/80 p-1.5 sm:p-2 group hover:border-gold/40 transition-all duration-500 cursor-pointer"
            title={`Перейти на сайт ${brand.name}`}
        >
            <img
                src={brand.logo}
                alt={brand.name}
                className="w-full h-full object-contain"
            />
        </a>
    )
}

export default function Brands() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.1 }
        )
        const els = sectionRef.current?.querySelectorAll('.reveal')
        els?.forEach((el) => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const duplicatedBrands = [...brands, ...brands, ...brands, ...brands]

    return (
        <section
            id="brands"
            ref={sectionRef}
            className="relative py-16 sm:py-28 lg:py-36 bg-stone-900 noise overflow-hidden"
        >
            {/* Ambient lights */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[400px] h-[600px] bg-gold/5 rounded-full blur-[150px]" />
            <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[400px] h-[600px] bg-gold/3 rounded-full blur-[150px]" />

            <div className="relative z-10">
                {/* Section Header */}
                <div className="text-center mb-10 sm:mb-16 reveal max-w-7xl mx-auto px-4 sm:px-8">
                    <div className="section-tag justify-center mb-6">Наши партнёры</div>
                    <h2 className="font-heading text-3xl sm:text-5xl lg:text-6xl font-bold text-stone-50 mb-4 sm:mb-5">
                        Бренды, которым
                        <br />
                        <span className="text-gradient">мы доверяем</span>
                    </h2>
                    <p className="font-body text-base text-stone-500 max-w-xl mx-auto leading-relaxed font-light">
                        Сотрудничаем напрямую с лучшими производителями.
                        Нажмите на логотип, чтобы перейти на сайт бренда.
                    </p>
                </div>

                {/* Marquee carousel */}
                <div className="reveal relative">
                    {/* Gradient masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-stone-900 to-transparent z-10 pointer-events-none" />
                    <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-stone-900 to-transparent z-10 pointer-events-none" />

                    {/* Track */}
                    <div className="overflow-hidden">
                        <div className="marquee-track">
                            {duplicatedBrands.map((brand, i) => (
                                <BrandCard key={`${brand.name}-${i}`} brand={brand} />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Static grid */}
                <div className="reveal mt-12 sm:mt-20 max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 sm:gap-4">
                    {brands.map((brand) => (
                        <a
                            key={brand.name}
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="brand-logo bg-white border border-stone-200/60 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 flex items-center justify-center h-[70px] sm:h-[90px] hover:border-gold/40 transition-all duration-500 cursor-pointer"
                            title={`Перейти на сайт ${brand.name}`}
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                className="w-full h-full object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
