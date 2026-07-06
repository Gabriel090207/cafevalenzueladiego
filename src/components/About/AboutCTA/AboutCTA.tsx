import "./AboutCTA.css";

import useAnimateOnScroll from "../../../hooks/useAnimateOnScroll";

import { ShoppingCart } from "lucide-react";

import ctaLeft from "../../../assets/images/about/cta/cta-left.webp";
import ctaRight from "../../../assets/images/about/cta/cta-right.webp";

function AboutCTA() {

    const section = useAnimateOnScroll<HTMLElement>();

    return (

        <section
            ref={section.ref}
            className={`about-cta ${section.animate ? "animate" : ""}`}
        >

            <div className="about-cta-content">

                <div className="about-cta-left">

                    <div className="about-cta-left-wrapper">

                        <img
                            src={ctaLeft}
                            alt="Xícara de café"
                            className="about-cta-left-image"
                        />

                    </div>

                </div>

                <div className="about-cta-center">

                    <h2 className="about-cta-title">

                        EXPERIMENTE O SABOR
                        <br />
                        <span>DO CAFÉ VALENZUELA</span>

                    </h2>

                    <p className="about-cta-description">

                        Descubra por que nossos clientes escolhem
                        qualidade todos os dias.

                    </p>

                    <button className="about-cta-button">

                        <ShoppingCart size={18} />

                        Comprar Agora

                    </button>

                </div>

                <div className="about-cta-right">

                    <div className="about-cta-right-wrapper">

                        <img
                            src={ctaRight}
                            alt="Grãos de café"
                            className="about-cta-right-image"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default AboutCTA;