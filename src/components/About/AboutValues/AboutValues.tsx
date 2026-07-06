import "./AboutValues.css";

import useAnimateOnScroll from "../../../hooks/useAnimateOnScroll";

import premiumIcon from "../../../assets/images/about/icons/premium.webp";
import originIcon from "../../../assets/images/about/icons/origin.webp";
import roastIcon from "../../../assets/images/about/icons/roast.webp";
import passionIcon from "../../../assets/images/about/icons/passion.webp";

const values = [
    {
        icon: premiumIcon,
        title: "QUALIDADE PREMIUM",
        description:
            "Selecionamos apenas grãos de alta qualidade para garantir o melhor sabor em cada xícara.",
    },
    {
        icon: originIcon,
        title: "ORIGEM SELECIONADA",
        description:
            "Trabalhamos com produtores comprometidos com a excelência e o cultivo sustentável.",
    },
    {
        icon: roastIcon,
        title: "TORRA ARTESANAL",
        description:
            "Pequenos lotes torrados com cuidado para preservar o aroma, o sabor e a qualidade dos grãos.",
    },
    {
        icon: passionIcon,
        title: "PAIXÃO PELO CAFÉ",
        description:
            "Cada pacote é preparado como se fosse para a nossa própria mesa.",
    },
];

function AboutValues() {

    const section = useAnimateOnScroll<HTMLElement>();

    return (

        <section
            ref={section.ref}
            className={`about-values ${section.animate ? "animate" : ""}`}
        >

            <div className="container">

                <div className="about-values-header">

    <h2 className="about-values-title">
        Nossos Valores
    </h2>

</div>

                <div className="about-values-grid">

                    {values.map((value) => (

                        <article
                            key={value.title}
                            className="about-value-card"
                        >

                            <img
                                src={value.icon}
                                alt={value.title}
                                className="about-value-icon"
                            />

                            <h3>
                                {value.title}
                            </h3>

                            <p>
                                {value.description}
                            </p>

                        </article>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default AboutValues;