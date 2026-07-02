import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

import {
    ShoppingCart,
    X
} from "lucide-react";

import { GiCoffeeCup } from "react-icons/gi";



import "./Header.css";

const menuItems = [
    {
        label: "Início",
        id: "inicio",
    },
    {
        label: "O Café",
        id: "cafe",
    },
    {
        label: "Benefícios",
        id: "beneficios",
    },
    {
        label: "Depoimentos",
        id: "depoimentos",
    },
    {
        label: "Perguntas",
        id: "perguntas",
    },
    {
        label: "Sobre",
        id: "sobre",
    },
];

function Header() {

const navigate = useNavigate();
const location = useLocation();

const [menuOpen, setMenuOpen] = useState(false);
const [activeSection, setActiveSection] = useState("inicio");

const handleScrollToSection = (id: string) => {

    // Página Sobre
    if (id === "sobre") {
        navigate("/sobre");
        setMenuOpen(false);
        return;
    }

    // Página Inicial
    if (id === "inicio") {

        if (location.pathname !== "/") {
            navigate("/");
        } else {

            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });

        }

        setMenuOpen(false);
        return;
    }

    // Se estiver na página Sobre,
    // volta para Home antes de rolar.
    if (location.pathname !== "/") {

    sessionStorage.setItem("scrollToSection", id);

    navigate("/");

    return;

}

    const section = document.getElementById(id);

    if (!section) return;

    section.scrollIntoView({
        behavior: "smooth",
        block: "start",
    });

    setMenuOpen(false);

};

useEffect(() => {
    const handleScroll = () => {

        const sections = document.querySelectorAll<HTMLElement>("section[id]");

        const trigger = window.innerHeight * 0.4;

        let current = "inicio";

        sections.forEach((section) => {

            const rect = section.getBoundingClientRect();

            if (
                rect.top <= trigger &&
                rect.bottom >= trigger
            ) {
                current = section.id;
            }

        });

        setActiveSection(current);

    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
        window.removeEventListener("scroll", handleScroll);
    };

}, []);

    return (

        <header className="header">

            <div className="header-container">

                <nav className="header-content">

                    {/* Botão Mobile */}

                    <button
                        className="header-mobile"
                        onClick={() => setMenuOpen(true)}
                    >

                        <GiCoffeeCup size={38} />


                    </button>

                    {/* Desktop */}

                    <ul className="header-menu">

                        {menuItems.map((item) => (

    <li key={item.id}>

       <a
    href={`#${item.id}`}
    className={activeSection === item.id ? "active" : ""}
    onClick={(event) => {
        event.preventDefault();
        handleScrollToSection(item.id);
    }}
>
    {item.label}
</a>

    </li>

))}

                    </ul>

                    <button className="header-button">

                        <ShoppingCart size={18} />

                        Comprar Agora

                    </button>

                </nav>

            </div>

            {/* Sidebar */}

            <aside className={`mobile-sidebar ${menuOpen ? "open" : ""}`}>

                <button
    className="sidebar-close"
    onClick={() => setMenuOpen(false)}
    aria-label="Fechar menu"
>

                    <X size={30} />

                </button>

                <ul>

                    {menuItems.map((item) => (

    <li key={item.id}>

       <a
    href={`#${item.id}`}
    className={activeSection === item.id ? "active" : ""}
    onClick={(event) => {
        event.preventDefault();
        handleScrollToSection(item.id);
    }}
>
    {item.label}
</a>

    </li>

))}

                </ul>

            </aside>

            {menuOpen && (

                <div
                    className="sidebar-overlay"
                    onClick={() => setMenuOpen(false)}
                />

            )}

        </header>

    );

}

export default Header;