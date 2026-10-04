// Бренды и производители. categories — id из src/data/categories.js (бренд может быть в нескольких).
// logo — необязателен: без него карточка покажет название бренда.
// url — официальный сайт или каталог производителя.
export const BRANDS = [
    { name: 'Alma Ceramica', url: 'https://almaceramica.ru', logo: '/images/brands-opt/alma.webp', categories: ['tile'] },
    { name: 'Altacera', url: 'https://artkera.ru/collections?brand=.altacera', logo: '/images/brands-opt/altacera.webp', categories: ['tile'] },
    { name: 'Artkera', url: 'https://artkera.ru/', logo: '/images/brands-opt/artkera.webp', categories: ['tile'] },
    { name: 'Casati', url: 'https://casaticeramica.ru/', logo: '/images/brands-opt/casati.webp', categories: ['tile'] },
    { name: 'Cersanit', url: 'https://cersanit.ru/catalog/2d/', logo: '/images/brands-opt/cersanit.webp', categories: ['tile'] },
    { name: 'Dako', url: 'https://dako-plitka.ru/', logo: '/images/brands-opt/dako.webp', categories: ['tile'] },
    { name: 'Delacora', url: 'https://artkera.ru/collections?brand=.delacora', logo: '/images/brands-opt/delacora.webp', categories: ['tile'] },
    { name: 'Eurotile', url: 'https://eurotile.ru/', logo: '/images/brands-opt/eurotile.webp', categories: ['tile'] },
    { name: 'Gracia Ceramica', url: 'https://graciaceramica.com/collections/', logo: '/images/brands-opt/gracia.webp', categories: ['tile'] },
    { name: 'Graniteya', url: 'https://www.uralgres.com/catalog/granitea/', logo: '/images/brands-opt/graniteya.webp', categories: ['tile'] },
    { name: 'Idalgo', url: 'https://www.uralgres.com/', logo: '/images/brands-opt/idalgo.webp', categories: ['tile'] },
    { name: 'Kerama Marazzi', url: 'https://kerama-marazzi.com', logo: '/images/brands-opt/kerama-marazzi.webp', categories: ['tile'] },
    { name: 'Keramin', url: 'https://keramin.ru/', logo: '/images/brands-opt/keramin.webp', categories: ['tile'] },
    { name: 'Laparet', url: 'https://laparet.ru/collection/keramogranit/', logo: '/images/brands-opt/laparet.webp', categories: ['tile'] },
    { name: 'LCM', url: 'https://artkera.ru/collections?brand=.lcm', logo: '/images/brands-opt/lcm.webp', categories: ['tile'] },
    { name: 'Maimoon', url: 'https://maimoonceramica.ru/', logo: '/images/brands-opt/maimoon.webp', categories: ['tile'] },
    { name: 'New Trend', url: 'https://artkera.ru/collections?brand=.new-trend', logo: '/images/brands-opt/newtrend.webp', categories: ['tile'] },
    { name: 'Protile', url: 'https://protiles.uz/ru/tipovye-resheniya/', logo: '/images/brands-opt/protile.webp', categories: ['tile'] },
    { name: 'Vitra', url: 'https://www.vitra-russia.ru/catalog/tiles/', logo: '/images/brands-opt/vitra.webp', categories: ['tile'] },
    { name: 'Уральский Гранит', url: 'https://www.uralgres.com/', logo: '/images/brands-opt/ural.webp', categories: ['tile'] },
]

export const brandsByCategory = (categoryId) =>
    categoryId ? BRANDS.filter((b) => b.categories.includes(categoryId)) : BRANDS
