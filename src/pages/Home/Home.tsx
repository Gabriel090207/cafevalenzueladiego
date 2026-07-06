import { useEffect } from "react";

import Hero from "../../components/Home/Hero/Hero";
import AboutCoffee from "../../components/Home/AboutCoffee/AboutCoffee";
import Offer from "../../components/Home/Offer/Offer";
import Testimonials from "../../components/Home/Testimonials/Testimonials";
import Faq from "../../components/Home/Faq/Faq";
import FeaturesBar from "../../components/Home/FeaturesBar/FeaturesBar";

function Home() {

useEffect(() => {

    const sectionId = sessionStorage.getItem("scrollToSection");

    if (!sectionId) return;

   requestAnimationFrame(() => {

        const section = document.getElementById(sectionId);

        if (section) {

            section.scrollIntoView({
                behavior: "smooth",
                block: "start",
            });

        }

        sessionStorage.removeItem("scrollToSection");

    });

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