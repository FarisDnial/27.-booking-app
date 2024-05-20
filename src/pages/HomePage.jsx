import Header from '../components/HomePage/Header';
import TeamSection from '../components/HomePage/TeamSection';
// import Contact from '../components/HomePage/Contact';
import About from '../components/HomePage/About';
import FaqAccordian from '../components/HomePage/FaqAccordion';
import Navbar from "../components/HomePage/Navbar";
import Footer from "../components/Layout/Footer";

export default function HomePage() {
    return (
        <>
            <Navbar />
            <Header />
            <About />
            <TeamSection as="#c" />
            <FaqAccordian />
            {/* <Contact /> */}
            <Footer />

        </>
    );
}