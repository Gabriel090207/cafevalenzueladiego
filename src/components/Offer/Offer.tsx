import "./Offer.css";
import useAnimateOnScroll from "../../hooks/useAnimateOnScroll";


import { ShoppingCart, Lock, Check } from "lucide-react";

import offerProduct from "../../assets/images/offer/offer-product.png";

function Offer() {

const section = useAnimateOnScroll<HTMLElement>();

    return (

        <section
    ref={section.ref}
    id="beneficios"
    className={`offer ${section.animate ? "animate" : ""}`}
>

            <div className="container">

                <div className="offer-content">

                    {/* Produto */}

                    <div className="offer-image">

                        <img
                            src={offerProduct}
                            alt="Café Valenzuela"
                        />

                    </div>

                    {/* Informações */}

                    <div className="offer-info">

                        <span className="offer-subtitle">
                            O Café Valenzuela
                        </span>

                        <h2 className="offer-title">
                            Café Premium Gourmet
                        </h2>

                        <ul className="offer-list">

                            <li>
                                <Check size={18} />
                                Grãos selecionados de alta qualidade
                            </li>

                            <li>
                                <Check size={18} />
                                Torrado artesanalmente em pequenos lotes
                            </li>

                            <li>
                                <Check size={18} />
                                Sabor intenso e aroma marcante
                            </li>

                            <li>
                                <Check size={18} />
                                Ideal para todos os momentos do seu dia
                            </li>

                        </ul>

                    </div>

                    {/* Card */}

                    <div className="offer-card">

                        <span className="offer-weight">
                            500g
                        </span>

                        <small>
                            Por apenas
                        </small>

                        <h3>
                            R$ 39,90
                        </h3>

                        <p>
                            ou 3x de R$ 13,30 sem juros
                        </p>

                        <button>

                            <ShoppingCart size={22} />

                            Comprar Agora

                        </button>

                        <div className="offer-security">

                            <Lock size={16} />

                            Compra 100% segura

                        </div>

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Offer;