import "./AboutHistory.css";

import useAnimateOnScroll from "../../../hooks/useAnimateOnScroll";

import historyImage from "../../../assets/images/about/history/about-history.webp";

const historyContent = {
    subtitle: "Nossa História",
    title: "NOSSA HISTÓRIA",
    paragraphs: [
        "O Café Valenzuela nasceu com um propósito simples: oferecer um café que realmente entregasse qualidade superior.",

        "Cada lote é escolhido com cuidado, respeitando o trabalho dos produtores e valorizando o processo artesanal de torra. O resultado é um café equilibrado, encorpado e marcante, pensado para transformar momentos simples em experiências especiais.",
    ],
};

function AboutHistory() {

    const section = useAnimateOnScroll<HTMLElement>();

    return (

        <section
            ref={section.ref}
            className={`about-history ${section.animate ? "animate" : ""}`}
        >

            <div className="container">

                <div className="about-history-content">

                    <div className="about-history-image">

                        <img
                            src={historyImage}
                            alt="Plantação de café"
                        />

                    </div>

                    <div className="about-history-text">

                        <span className="about-history-subtitle">
                            {historyContent.subtitle}
                        </span>

                        <h2 className="about-history-title">
                            {historyContent.title}
                        </h2>

                        {historyContent.paragraphs.map((paragraph, index) => (

                            <p
                                key={index}
                                className="about-history-description"
                            >
                                {paragraph}
                            </p>

                        ))}

                    </div>

                </div>

            </div>

        </section>

    );

}

export default AboutHistory;