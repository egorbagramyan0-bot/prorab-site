import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Brands from './components/Brands'
import WhyUs from './components/WhyUs'
import Contacts from './components/Contacts'
import Footer from './components/Footer'

export default function App() {
    return (
        <div className="min-h-screen bg-stone-50 overflow-x-hidden">
            <Header />
            <main>
                <Hero />
                <About />
                <Brands />
                <WhyUs />
                <Contacts />
            </main>
            <Footer />
        </div>
    )
}
