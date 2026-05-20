import Preloader from './components/Preloader'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Ceramic3D from './components/Ceramic3D'
import Brands from './components/Brands'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
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
