import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import AboutCoffee from "./components/AboutCoffee/AboutCoffee";
import Offer from "./components/Offer/Offer";
import Testimonials from "./components/Testimonials/Testimonials";
import Faq from "./components/Faq/Faq";
import FeaturesBar from "./components/FeaturesBar/FeaturesBar";
import Footer from "./components/Footer/Footer";

function App() {
    return (
        <>
            <Header />
            <Hero />
            <AboutCoffee />
            <Offer />
            <Testimonials />
            <Faq />
            <FeaturesBar />
            <Footer/>
        </>
    );
}

export default App;