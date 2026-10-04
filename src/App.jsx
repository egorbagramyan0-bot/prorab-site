import Header from './components/Header'
import Footer from './components/Footer'
import CookieConsent from './components/CookieConsent'
import LegalPage from './components/LegalPage'
import { PRIVACY_POLICY, COOKIE_CONSENT } from './data/legal'
import HomePage from './pages/HomePage'
import CategoryPage from './pages/CategoryPage'
import NotFoundPage from './pages/NotFoundPage'

function Page({ route }) {
    switch (route.page) {
        case 'home':
            return <HomePage />
        case 'category':
            return <CategoryPage categoryId={route.categoryId} />
        case 'privacy':
            return <LegalPage doc={PRIVACY_POLICY} related="consent" />
        case 'consent':
            return <LegalPage doc={COOKIE_CONSENT} related="privacy" />
        default:
            return <NotFoundPage />
    }
}

export default function App({ route }) {
    return (
        <div className="min-h-screen bg-stone-950 overflow-x-hidden">
            <a
                href="#main"
                className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-5 focus:py-3 focus:rounded-full focus:bg-gold focus:text-stone-900 focus:font-body focus:font-semibold focus:text-sm"
            >
                Перейти к содержимому
            </a>
            <Header />
            <main id="main" tabIndex={-1} className="focus:outline-none focus:shadow-none">
                <Page route={route} />
            </main>
            <Footer />
            <CookieConsent />
        </div>
    )
}
