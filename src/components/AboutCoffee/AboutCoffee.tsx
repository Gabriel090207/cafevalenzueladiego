import "./AboutCoffee.css";

import aboutCoffee from "../../assets/images/about/about-coffee.png";

import fireIcon from "../../assets/images/about/icons/fire.png";
import balanceIcon from "../../assets/images/about/icons/balance.png";
import aromaIcon from "../../assets/images/about/icons/aroma.png";

const features = [
    {
        icon: fireIcon,
        title: "Torra",
        subtitle: "Artesanal",
    },
    {
        icon: balanceIcon,
        title: "Sabor",
        subtitle: "Equilibrado",
    },
    {
        icon: aromaIcon,
        title: "Aroma",
        subtitle: "Marcante",
    },
];

function AboutCoffee() {

    return (

        <section className="about-coffee">

            <div className="container">

                <div className="about-content">

                    <div className="about-image">

                        <img
                            src={aboutCoffee}
                            alt="Grãos de café"
                        />

                    </div>

                    <div className="about-text">

                        <span className="about-subtitle">
                            O Café Perfeito
                        </span>

                        <h2 className="about-title">
                           FEITO COM DEDICAÇÃO
                            <br />
                            EM CADA DETALHE
                        </h2>

                        <p className="about-description">
                            Selecionamos os melhores grãos, cultivados em regiões privilegiadas, e realizamos uma torra artesanal que ressalta aromas e sabores únicos. O resultado é um café equilibrado, encorpado e com finalização marcante.
                        </p>

                        <div className="about-features">

                            {features.map((feature) => (

                                <div
                                    key={feature.title}
                                    className="about-feature"
                                >

                                    <img
                                        src={feature.icon}
                                        alt={feature.title}
                                    />

                                    <h3>{feature.title}</h3>

                                    <span>{feature.subtitle}</span>

                                </div>

                            ))}

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default AboutCoffee;