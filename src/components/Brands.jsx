import { useEffect, useRef, useState } from 'react'

const brands = [
    { name: 'Alma Ceramica', url: 'https://almaceramica.ru', logo: '/images/brands-opt/alma.webp' },
    { name: 'Artkera', url: 'https://artkera.ru/?ysclid=mp5uood2u9366592724', logo: '/images/brands-opt/artkera.webp' },
    { name: 'Casati', url: 'https://casaticeramica.ru/?ysclid=mp5uwk3g5k782095352', logo: '/images/brands-opt/casati.webp' },
    { name: 'Cersanit', url: 'https://cersanit.ru/catalog/2d/', logo: '/images/brands-opt/cersanit.webp' },
    { name: 'Dako', url: 'https://dako.club/?ysclid=mp5uubragx437521517', logo: '/images/brands-opt/dako.webp' },
    { name: 'Delacora', url: 'https://artkera.ru/collections?brand=.delacora', logo: '/images/brands-opt/delacora.webp' },
    { name: 'Eurotile', url: 'https://eurotile.ru/', logo: '/images/brands-opt/eurotile.webp' },
    { name: 'Graniteya', url: 'https://www.uralgres.com/catalog/granitea/?ysclid=mp5uzeetyh794605150', logo: '/images/brands-opt/graniteya.webp' },
    { name: 'Idalgo', url: 'https://www.uralgres.com/?ysclid=mp5ummkjzk875710236', logo: '/images/brands-opt/idalgo.webp' },
    { name: 'Kerama Marazzi', url: 'https://kerama-marazzi.com', logo: '/images/brands-opt/kerama-marazzi.webp' },
    { name: 'Keramin', url: 'https://keramin.ru/?ysclid=mp5uwx5ff4815611066', logo: '/images/brands-opt/keramin.webp' },
    { name: 'LCM', url: 'https://artkera.ru/collections?brand=.lcm', logo: '/images/brands-opt/lcm.webp' },
    { name: 'Maimoon', url: 'https://maimoonceramica.ru/', logo: '/images/brands-opt/maimoon.webp' },
    { name: 'New Trend', url: 'https://artkera.ru/collections?brand=.new-trend', logo: '/images/brands-opt/newtrend.webp' },
    { name: 'Уральский Гранит', url: 'https://www.uralgres.com/?ysclid=mp5ummkjzk875710236', logo: '/images/brands-opt/ural.webp' },
]

const BrandSphere = () => {
    const [radius, setRadius] = useState(450)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) setRadius(250)
            else if (window.innerWidth < 1024) setRadius(350)
            else setRadius(500)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    return (
        <div className="sphere-container overflow-hidden pointer-events-none mt-4 sm:mt-8">
            {/* Ambient gradients to fade edges smoothly */}
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,#1c1917_70%)] pointer-events-none z-40" />

            {/* Central Stone Sphere */}
            <div className="stone-sphere">
                <img src="/images/sphere.png" alt="Сфера из гранита" />
            </div>

            {/* Center Single Orbit */}
            <div className="sphere-orbit-container" style={{ transform: 'rotateX(-8deg)' }}>
                <div className="sphere-orbit" style={{ animation: 'spin-y 40s linear infinite' }}>
                    {brands.map((brand, i) => {
                        const angle = (360 / brands.length) * i
                        const animDelay = -(40 * (angle / 360)) // sync with 40s spin-y

                        return (
                            <a
                                key={brand.name}
                                href={brand.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="sphere-card-wrapper"
                                style={{
                                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                                    '--anim-delay': `${animDelay}s`
                                }}
                                title={`Перейти на сайт ${brand.name}`}
                            >
                                <div className="sphere-card">
                                    <img src={brand.logo} alt={brand.name} loading="lazy" />
                                </div>
                            </a>
                        )
                    })}
                </div>
            </div>
        </div>
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

                {/* 3D Sphere Component */}
                <div className="reveal relative">
                    <BrandSphere />
                </div>

                {/* Static grid */}
                <div className="mt-8 sm:mt-12 max-w-6xl mx-auto px-4 sm:px-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2 sm:gap-3 relative z-30 transition-opacity duration-1000">
                    {brands.map((brand) => (
                        <a
                            key={brand.name}
                            href={brand.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-white border border-stone-200/60 rounded-lg sm:rounded-xl p-1 sm:p-1.5 flex items-center justify-center h-[60px] sm:h-[76px] hover:border-gold/40 transition-all duration-500 cursor-pointer"
                            title={`Перейти на сайт ${brand.name}`}
                        >
                            <img
                                src={brand.logo}
                                alt={brand.name}
                                loading="lazy"
                                className="w-full h-full object-contain"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    )
}
