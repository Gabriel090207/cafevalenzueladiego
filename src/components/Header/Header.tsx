import { useState } from "react";

import {
    ShoppingCart,
    X
} from "lucide-react";

import { GiCoffeeCup } from "react-icons/gi";



import "./Header.css";

const menuItems = [
    "Início",
    "O Café",
    "Benefícios",
    "Depoimentos",
    "Perguntas",
];

function Header() {

    const [menuOpen, setMenuOpen] = useState(false);

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

                        {menuItems.map((item, index) => (

                            <li key={item}>

                                <a
                                    href="#"
                                    className={index === 0 ? "active" : ""}
                                >

                                    {item}

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
                >

                    <X size={30} />

                </button>

                <ul>

                    {menuItems.map((item) => (

                        <li key={item}>

                            <a href="#">

                                {item}

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