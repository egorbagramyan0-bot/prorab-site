import { useState, useEffect } from 'react'
import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Ceramic3D from './components/Ceramic3D'
import Brands from './components/Brands'
import Contacts from './components/Contacts'
import Footer from './components/Footer'
import PrivacyPolicy from './components/PrivacyPolicy'

export default function App() {
    const [currentPath, setCurrentPath] = useState(
        typeof window !== 'undefined' ? window.location.pathname : '/'
    )

    useEffect(() => {
        const handlePopState = () => {
            setCurrentPath(window.location.pathname)
        }
        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [])

    const isPrivacy = currentPath === '/privacy' || currentPath === '/privacy-policy'

    if (isPrivacy) {
        return (
            <div className="min-h-screen bg-stone-950 overflow-x-hidden">
                <PrivacyPolicy />
                <Footer compact />
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-stone-50 overflow-x-hidden">
            <Preloader />
            <Header />
            <main>
                <Hero />
                <About />
                <Ceramic3D />
                <Brands />
                <Contacts />
            </main>
            <Footer />
        </div>
    )
}
