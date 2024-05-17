import Header from '../components/HomePage/Header';
import TeamSection from '../components/HomePage/TeamSection';
import Contact from '../components/HomePage/Contact';
import About from '../components/HomePage/About';
import FaqAccordian from '../components/HomePage/FaqAccordion';
// import NavbarNew from "../components/HomePage/NavbarNew";
import Navbar from "../components/HomePage/Navbar";

export default function HomePage() {
    return (
        <>
            <Navbar />
            {/* <NavbarNew /> */}
            <Header />
            <About />
            <TeamSection />
            <FaqAccordian />
            <Contact />

        </>
    );
}