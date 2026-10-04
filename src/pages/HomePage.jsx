import Hero from '../components/Hero'
import Categories from '../components/Categories'
import About from '../components/About'
import Ceramic3D from '../components/Ceramic3D'
import Brands from '../components/Brands'
import Contacts from '../components/Contacts'
import Faq from '../components/Faq'
import { HOME_FAQ } from '../data/faq'

export default function HomePage() {
    return (
        <>
            <Hero />
            <Categories />
            <About />
            <Ceramic3D />
            <Brands light />
            <Faq items={HOME_FAQ} tone="stone" />
            <Contacts />
        </>
    )
}
