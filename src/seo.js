import { SITE } from './data/site'

const OG_IMAGE = '/images/og.jpg'

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;')
const jsonLd = (data) => `<script type="application/ld+json">${JSON.stringify(data).replace(/</g, '\\u003c')}</script>`

const business = {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': `${SITE.url}/#business`,
    name: 'ПРОРАБ — салон отделочных материалов',
    description: 'Салон отделочных материалов: керамогранит и плитка, ламинат и SPC, линолеум, межкомнатные и входные двери, дверная фурнитура. Образцы в салоне, консультация, доставка.',
    url: `${SITE.url}/`,
    telephone: '+7-989-634-13-75',
    email: SITE.email,
    image: `${SITE.url}${OG_IMAGE}`,
    logo: `${SITE.url}/icon-512.png`,
    address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: SITE.address.locality,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: 'RU',
    },
    geo: {
        '@type': 'GeoCoordinates',
        latitude: SITE.geo.lat,
        longitude: SITE.geo.lon,
    },
    hasMap: SITE.mapOrgUrl,
    areaServed: ['Ростовская область', 'Ростов-на-Дону', 'Мясниковский район'],
    openingHoursSpecification: [{
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '09:00',
        closes: '20:00',
    }],
    sameAs: [SITE.mapOrgUrl, SITE.twoGisUrl, SITE.telegram],
}

// Теги <head> для страницы: title, description, canonical, Open Graph, Schema.org.
export function renderHead(route) {
    const url = `${SITE.url}${route.path}`
    const tags = [
        `<title>${esc(route.title)}</title>`,
        `<meta name="description" content="${esc(route.description)}" />`,
    ]

    if (route.noindex) {
        tags.push('<meta name="robots" content="noindex, follow" />')
        return tags.join('\n    ')
    }

    tags.push(
        `<link rel="canonical" href="${url}" />`,
        '<meta property="og:type" content="website" />',
        '<meta property="og:locale" content="ru_RU" />',
        '<meta property="og:site_name" content="ПРОРАБ — салон отделочных материалов" />',
        `<meta property="og:title" content="${esc(route.title)}" />`,
        `<meta property="og:description" content="${esc(route.description)}" />`,
        `<meta property="og:url" content="${url}" />`,
        `<meta property="og:image" content="${SITE.url}${OG_IMAGE}" />`,
        '<meta property="og:image:width" content="1200" />',
        '<meta property="og:image:height" content="630" />',
        '<meta name="twitter:card" content="summary_large_image" />',
        jsonLd(business),
    )

    if (route.faq?.length) {
        tags.push(jsonLd({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: route.faq.map((f) => ({
                '@type': 'Question',
                name: f.q,
                acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
        }))
    }

    if (route.breadcrumb) {
        tags.push(jsonLd({
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE.url}/` },
                { '@type': 'ListItem', position: 2, name: route.breadcrumb, item: url },
            ],
        }))
    }

    return tags.join('\n    ')
}
