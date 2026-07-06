import "./AboutProcess.css";

import useAnimateOnScroll from "../../../hooks/useAnimateOnScroll";

import { ChevronRight } from "lucide-react";

import process1 from "../../../assets/images/about/process/process-1.webp";
import process2 from "../../../assets/images/about/process/process-2.webp";
import process3 from "../../../assets/images/about/process/process-3.webp";
import process4 from "../../../assets/images/about/process/process-4.webp";
import process5 from "../../../assets/images/about/process/process-5.webp";

const processSteps = [
    {
        icon: process1,
        number: "1.",
        title: "SELEÇÃO DOS GRÃOS",
        description:
            "Escolhemos apenas os melhores grãos nas melhores origens.",
    },
    {
        icon: process2,
        number: "2.",
        title: "TORRA ARTESANAL",
        description:
            "Torramos em pequenos lotes para realçar o aroma e o sabor.",
    },
    {
        icon: process3,
        number: "3.",
        title: "CONTROLE DE QUALIDADE",
        description:
            "Analisamos cada lote para garantir padrão e excelência.",
    },
    {
        icon: process4,
        number: "4.",
        title: "EMBALAGEM FRESCA",
        description:
            "Embalamos logo após a torra para manter o máximo de frescor.",
    },
    {
        icon: process5,
        number: "5.",
        title: "ENTREGA PARA SUA CASA",
        description:
            "Levamos até você um café fresco, com qualidade e carinho.",
    },
];

function AboutProcess() {

    const section = useAnimateOnScroll<HTMLElement>();

    return (

        <section
            ref={section.ref}
            className={`about-process ${section.animate ? "animate" : ""}`}
        >

            <div className="container">

                <div className="about-process-header">

                    <span className="about-process-subtitle">
                        Nosso Processo
                    </span>

                    <h2 className="about-process-title">
                        DO CULTIVO ATÉ A SUA XÍCARA
                    </h2>

                </div>

                <div className="about-process-grid">

                    {processSteps.map((step, index) => (

                        <div
                            key={step.number}
                            className="about-process-item"
                        >

                            <img
    src={step.icon}
    alt={step.title}
    className="about-process-icon"
/>

                            <span className="about-process-number">
                                {step.number}
                            </span>

                            <h3>
                                {step.title}
                            </h3>

                            <p>
                                {step.description}
                            </p>

                            {index < processSteps.length - 1 && (

                                <div className="about-process-arrow">

                                    <ChevronRight size={40} />

                                </div>

                            )}

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default AboutProcess;