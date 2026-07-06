import "./AboutStats.css";

import {
    Coffee,
    Package,
    Star,
} from "lucide-react";

import { FaUsers } from "react-icons/fa6";

const stats = [
    {
        icon: <FaUsers size={34} />,
        title: "+5.000",
        subtitle: "CLIENTES SATISFEITOS",
    },
    {
        icon: <Coffee size={34} />,
        title: "100%",
        subtitle: "CAFÉ TORRADO EM\nPEQUENOS LOTES",
    },
    {
        icon: <Package size={34} />,
        title: "500g",
        subtitle: "EMBALAGEM IDEAL PARA\nQUEM APRECIA QUALIDADE",
    },
    {
        icon: <Star size={34} fill="currentColor" />,
        title: "★★★★★",
        subtitle: "AVALIAÇÕES POSITIVAS\nDE NOSSOS CLIENTES",
    },
];

function AboutStats() {

    return (

        <section className="about-stats">

            <div className="container">

                <div className="about-stats-grid">

                    {stats.map((item) => (

                        <div
                            className="about-stat-item"
                            key={item.title}
                        >

                            <div className="about-stat-icon">

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

export default AboutStats;