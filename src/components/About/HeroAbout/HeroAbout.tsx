import "./HeroAbout.css";

import heroImage from "../../../assets/images/about/hero/about-hero.webp";
import logo from "../../../assets/images/hero/logo.webp";

const heroContent = {
    title: "MAIS DO QUE CAFÉ. UMA EXPERIÊNCIA EM CADA XÍCARA.",
    description:
        "No Café Valenzuela, acreditamos que um bom café começa muito antes da primeira xícara. Ele nasce na escolha dos melhores grãos, passa por uma torra cuidadosa e chega até você carregando aroma, sabor e dedicação.",
};

function HeroAbout() {
    return (
        <section className="hero-about">

            <div className="container">

                <div className="hero-about-content">

                    <div className="hero-about-left">

    <img
        src={logo}
        alt="Logo Café Valenzuela"
        className="hero-about-logo"
    />

    <h1 className="hero-about-title">
                            {heroContent.title}
                        </h1>

                        <p className="hero-about-description">
                            {heroContent.description}
                        </p>

                    </div>

                    <div className="hero-about-right">

                        <div className="hero-about-image-wrapper">

                            <img
                                src={heroImage}
                                alt="Café Valenzuela"
                                className="hero-about-image"
                            />

                        </div>

                    </div>

                </div>

            </div>

        </section>
    );
}

export default HeroAbout;