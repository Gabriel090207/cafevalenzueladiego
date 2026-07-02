import "./Faq.css";

import { ChevronDown } from "lucide-react";

import faqCoffee from "../../assets/images/faq/faq-coffee.png";

const questions = [
    "Quais são as formas de pagamento?",
    "Qual o prazo de entrega?",
    "O café é torrado e enviado fresco?",
    "Posso moer o café antes do envio?",
];

function Faq() {

    return (

        <section  id="perguntas" className="faq">

            <div className="container">

                <h2 className="faq-title">

                    Perguntas Frequentes

                </h2>

                <div className="faq-content">

                    <div className="faq-questions">

                        <button className="faq-item">

                            <span>{questions[0]}</span>

                            <ChevronDown size={18} />

                        </button>

                        <button className="faq-item">

                            <span>{questions[1]}</span>

                            <ChevronDown size={18} />

                        </button>

                        <button className="faq-item">

                            <span>{questions[2]}</span>

                            <ChevronDown size={18} />

                        </button>

                        <button className="faq-item">

                            <span>{questions[3]}</span>

                            <ChevronDown size={18} />

                        </button>

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