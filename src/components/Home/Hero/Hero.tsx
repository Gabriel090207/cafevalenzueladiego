import "./Hero.css";

import logo from "../../../assets/images/hero/logo.webp";
import heroProduct from "../../../assets/images/hero/hero-product.webp";

const heroContent = {
    title: "SABOR QUE ENCANTA,\nQUALIDADE QUE VOCÊ SENTE.",
    description:
        "Grãos selecionados e torra artesanal para proporcionar a experiência perfeita em cada xícara.",
};

import coffeeBean from "../../../assets/images/icons/coffee-bean.webp";
import leaf from "../../../assets/images/icons/leaf.webp";
import coffeeCup from "../../../assets/images/icons/coffee-cup.webp";
import mountain from "../../../assets/images/icons/mountain.webp";

const heroFeatures = [
    {
        icon: coffeeBean,
        title: "Grãos",
        subtitle: "Selecionados",
    },
    {
        icon: leaf,
        title: "Aroma",
        subtitle: "Intenso",
    },
    {
        icon: coffeeCup,
        title: "Experiência",
        subtitle: "Premium",
    },
    {
        icon: mountain,
        title: "Qualidade",
        subtitle: "Superior",
    },
];


function Hero() {
    return (
        <section  id="inicio" className="hero">

            <div className="container">

                <div className="hero-content">

                    <div className="hero-left">

                        <img
                            src={logo}
                            alt="Logo Café Valenzuela"
                            className="hero-logo"
                        />

                        <h1 className="hero-title">
                            {heroContent.title}
                        </h1>

                        <p className="hero-description">
                            {heroContent.description}
                        </p>

                    </div>

                    <div className="hero-right">

                        <img
                            src={heroProduct}
                            alt="Café Valenzuela"
                            className="hero-product"
                        />

                    </div>

                </div>

                <div className="hero-features">

    {heroFeatures.map((feature) => (

        <div
            key={feature.title}
            className="hero-feature"
        >

            <img
                src={feature.icon}
                alt={feature.title}
                className="hero-feature-icon"
            />

            <h3>{feature.title}</h3>

            <span>{feature.subtitle}</span>

        </div>

    ))}

</div>

            </div>

        </section>
    );
}

export default Hero;