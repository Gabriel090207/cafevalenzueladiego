import { useState } from "react";


import "./Faq.css";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";

import { ChevronDown } from "lucide-react";

import faqCoffee from "../../assets/images/faq/faq-coffee.png";


const questions = [
    {
        question: "Quais são as formas de pagamento?",
        answer:
            "Aceitamos Pix, cartão de crédito em até 12x sem juros e boleto bancário.",
    },
    {
        question: "Qual o prazo de entrega?",
        answer:
            "O prazo varia conforme a sua região, levando entre 3 e 10 dias úteis.",
    },
    {
        question: "O café é torrado e enviado fresco?",
        answer:
            "Sim. Trabalhamos com torra artesanal para garantir máximo aroma, sabor e frescor.",
    },
    {
        question: "Posso receber o café já moído?",
        answer:
            "Sim. Você pode escolher receber o café em grãos ou moído.",
    },
];

function Faq() {

const [openIndex, setOpenIndex] = useState<number | null>(null);


const section = useAnimateOnScroll<HTMLElement>();

    return (

        <section
    ref={section.ref}
    id="perguntas"
    className={`faq ${section.animate ? "animate" : ""}`}
>

            <div className="container">

                <h2 className="faq-title">

                    Perguntas Frequentes

                </h2>

                <div className="faq-content">

                   <div className="faq-questions">

    {questions.map((item, index) => (

      <div
    key={index}
    className="faq-box"
>

    <button
        className={`faq-item ${openIndex === index ? "active" : ""}`}
        onClick={() =>
            setOpenIndex(
                openIndex === index
                    ? null
                    : index
            )
        }
    >

        <span>{item.question}</span>

        <ChevronDown
    size={18}
    className={openIndex === index ? "rotate" : ""}
/>

    </button>

   <div
    className={`faq-answer ${
        openIndex === index ? "open" : ""
    }`}
>

    <p>

        {item.answer}

    </p>

</div>

</div>

    ))}

</div>

                    <div className="faq-image">

                        <img
                            src={faqCoffee}
                            alt="Café"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Faq;


