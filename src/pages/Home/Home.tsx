import { useEffect } from "react";

import Hero from "../../components/Hero/Hero";
import AboutCoffee from "../../components/AboutCoffee/AboutCoffee";
import Offer from "../../components/Offer/Offer";
import Testimonials from "../../components/Testimonials/Testimonials";
import Faq from "../../components/Faq/Faq";
import FeaturesBar from "../../components/FeaturesBar/FeaturesBar";

function Home() {

useEffect(() => {

    const sectionId = sessionStorage.getItem("scrollToSection");

    if (!sectionId) return;

    const timer = setTimeout(() => {

        const section = document.getElementById(sectionId);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

        }

        sessionStorage.removeItem("scrollToSection");

    }, 150);

    return () => clearTimeout(timer);

}, []);

    return (
        <>
            <Hero />
            <AboutCoffee />
            <Offer />
            <Testimonials />
            <Faq />
            <FeaturesBar />
        </>
    );
}

export default Home;