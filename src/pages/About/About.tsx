import HeroAbout from "../../components/About/HeroAbout/HeroAbout";
import AboutHistory from "../../components/About/AboutHistory/AboutHistory";
import AboutValues from "../../components/About/AboutValues/AboutValues";
import AboutProcess from "../../components/About/AboutProcess/AboutProcess";
import AboutQuality from "../../components/About/AboutQuality/AboutQuality";
import AboutStats from "../../components/About/AboutStats/AboutStats";
import AboutCTA from "../../components/About/AboutCTA/AboutCTA";

function About() {
    return (
        <main>

            <HeroAbout />

            <AboutHistory />

            <AboutValues />

            <AboutProcess />

            <AboutQuality />

            <AboutStats />

            <AboutCTA />

        </main>
    );
}

export default About;