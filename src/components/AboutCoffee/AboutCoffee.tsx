import "./AboutCoffee.css";

import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

import aboutCoffee from "../../assets/images/about/about-coffee.webp";

import fireIcon from "../../assets/images/about/icons/fire.webp";
import balanceIcon from "../../assets/images/about/icons/balance.webp";
import aromaIcon from "../../assets/images/about/icons/aroma.webp";

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

const section = useAnimateOnScroll<HTMLElement>();



    return (

       <section
    ref={section.ref}
    id="cafe"
    className={`about-coffee ${section.animate ? "animate" : ""}`}
>

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