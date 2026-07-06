import "./Testimonials.css";
import useAnimateOnScroll from "../../../hooks/useAnimateOnScroll";


import { Star } from "lucide-react";

const testimonials = [
    {
        name: "Carlos M.",
        text: "O melhor café que já provei! Sabor incomparável.",
    },
    {
        name: "Juliana P.",
        text: "Aroma incrível e qualidade que dá pra sentir.",
    },
    {
        name: "Roberto S.",
        text: "Já virou o café oficial da nossa casa!",
    },
];

function Testimonials() {
const section = useAnimateOnScroll<HTMLElement>();

    return (

       <section
    ref={section.ref}
    id="depoimentos"
    className={`testimonials ${section.animate ? "animate" : ""}`}
>

            <div className="container">

                <h2 className="testimonials-title">

                    O Que Nossos Clientes Dizem

                </h2>

                <div className="testimonials-grid">

                    {testimonials.map((item) => (

                        <div
                            key={item.name}
                            className="testimonial-card"
                        >

                            <div className="testimonial-stars">

                                {[...Array(5)].map((_, index) => (

                                    <Star
                                        key={index}
                                        size={16}
                                        fill="currentColor"
                                    />

                                ))}

                            </div>

                            <p className="testimonial-text">

                                "{item.text}"

                            </p>

                            <span className="testimonial-name">

                                {item.name}

                            </span>

                        </div>

                    ))}

                </div>

                <div className="testimonial-dots">

                    <span className="active"></span>

                    <span></span>

                    <span></span>

                    <span></span>

                </div>

            </div>

        </section>

    );

}

export default Testimonials;