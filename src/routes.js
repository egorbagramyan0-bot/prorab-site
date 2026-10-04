import { CATEGORIES, categoryPath } from './data/categories'
import { HOME_FAQ, CATEGORY_FAQ } from './data/faq'

// Все индексируемые страницы сайта. Пререндер (scripts/prerender.mjs) создаёт по HTML-файлу на каждую.
export const ROUTES = [
    {
        path: '/',
        page: 'home',
        title: 'Салон отделочных материалов ПРОРАБ рядом с Ростовом-на-Дону',
        description: 'Керамогранит и плитка, ламинат и SPC, линолеум, двери и фурнитура в салоне в с. Крым. Образцы вживую, каталоги производителей, помощь в подборе и доставка.',
        faq: HOME_FAQ,
        priority: '1.0',
    },
    ...CATEGORIES.map((c) => ({
        path: categoryPath(c),
        page: 'category',
        categoryId: c.id,
        title: c.page.metaTitle,
        description: c.page.metaDescription,
        breadcrumb: c.name,
        faq: CATEGORY_FAQ[c.id],
        priority: '0.8',
    })),
    {
        path: '/privacy-policy/',
        page: 'privacy',
        title: 'Политика конфиденциальности — салон ПРОРАБ',
        description: 'Политика обработки персональных данных на сайте салона отделочных материалов ПРОРАБ.',
        priority: '0.2',
    },
    {
        path: '/soglasie-na-obrabotku-dannyh/',
        page: 'consent',
        title: 'Согласие на обработку персональных данных — салон ПРОРАБ',
        description: 'Согласие на обработку персональных данных с использованием файлов cookie и Яндекс Метрики на сайте салона ПРОРАБ.',
        noindex: true,
    },
]

export const NOT_FOUND = {
    path: '/404.html',
    page: 'notfound',
    title: 'Страница не найдена — салон ПРОРАБ',
    description: 'Страница не найдена. Перейдите на главную страницу салона отделочных материалов ПРОРАБ.',
    noindex: true,
}

export function resolveRoute(pathname) {
    let path = pathname.replace(/index\.html$/, '')
    if (!path.endsWith('/')) path += '/'
    return ROUTES.find((r) => r.path === path) ?? NOT_FOUND
}
