import "./AboutQuality.css";

import useAnimateOnScroll from "../../../hooks/useAnimateOnScroll";

import { Check } from "lucide-react";

import qualityImage from "../../../assets/images/about/quality/about-quality.webp";

const qualityItems = [
    {
        title: "GRÃOS ESPECIAIS",
        description:
            "Selecionados entre as melhores regiões produtoras.",
    },
    {
        title: "AROMA INTENSO",
        description:
            "Perfume marcante que desperta os sentidos.",
    },
    {
        title: "BAIXA ACIDEZ",
        description:
            "Sabor suave e equilibrado, ideal para todos os paladares.",
    },
    {
        title: "TORRA MÉDIA EQUILIBRADA",
        description:
            "Realça o melhor do grão sem perder suas características.",
    },
    {
        title: "FRESCOR GARANTIDO",
        description:
            "Embalagem com válvula especial que preserva o aroma e o sabor.",
    },
];

function AboutQuality() {

    const section = useAnimateOnScroll<HTMLElement>();

    return (

        <section
            ref={section.ref}
            className={`about-quality ${section.animate ? "animate" : ""}`}
        >

            <div className="container">

                <div className="about-quality-content">

                    <div className="about-quality-text">

                        <span className="about-quality-subtitle">
                            O QUE TORNA NOSSO CAFÉ DIFERENTE
                        </span>

                        <div className="about-quality-list">

                            {qualityItems.map((item) => (

                                <div
                                    key={item.title}
                                    className="about-quality-item"
                                >

                                    <div className="about-quality-icon">

                                        <Check size={18} />

                                    </div>

                                    <div>

                                        <h3>
                                            {item.title}
                                        </h3>

                                        <p>
                                            {item.description}
                                        </p>

                                    </div>

                                </div>

                            ))}

                        </div>

                    </div>

                   <div className="about-quality-image">

    <div className="about-quality-image-wrapper">

        <img
            src={qualityImage}
            alt="Café Valenzuela"
        />

    </div>

</div>

                </div>

            </div>

        </section>

    );

}

export default AboutQuality;