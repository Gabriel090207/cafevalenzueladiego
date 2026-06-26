import "./FeaturesBar.css";

import {
    Truck,
    BadgeDollarSign,
    ShieldCheck,
    Award,
} from "lucide-react";

const features = [
    {
        icon: <Truck size={34} />,
        title: "Frete Grátis",
        subtitle: "Acima de R$199,00",
    },
    {
        icon: <BadgeDollarSign size={34} />,
        title: "Envio Rápido",
        subtitle: "Para todo o Brasil",
    },
    {
        icon: <ShieldCheck size={34} />,
        title: "Compra Segura",
        subtitle: "Ambiente 100% seguro",
    },
    {
        icon: <Award size={34} />,
        title: "Satisfação Garantida",
        subtitle: "Ou seu dinheiro de volta",
    },
];

function FeaturesBar() {

    return (

        <section className="features-bar">

            <div className="container">

                <div className="features-grid">

                    {features.map((item) => (

                        <div
                            className="feature-item"
                            key={item.title}
                        >

                            <div className="feature-icon">

                                {item.icon}

                            </div>

                            <div>

                                <h3>

                                    {item.title}

                                </h3>

                                <span>

                                    {item.subtitle}

                                </span>

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>

    );

}

export default FeaturesBar;