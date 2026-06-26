import "./Footer.css";

import logo from "../../assets/images/hero/logo.png";

import {
    FaInstagram,
    FaFacebookF,
    FaWhatsapp,
    FaCcVisa,
    FaCcMastercard,
} from "react-icons/fa";

import { SiPix } from "react-icons/si";

import { BsReceipt } from "react-icons/bs";

function Footer() {

    return (

        <footer className="footer">

            <div className="container">

                <div className="footer-content">

                    {/* ================= Logo ================= */}

                    <div className="footer-left">

                        <img
                            src={logo}
                            alt="Café Valenzuela"
                        />

                        <div className="footer-copy">

                            <p>Café Valenzuela © 2026</p>

                            <span>Todos os direitos reservados.</span>

                        </div>

                    </div>

                    {/* ================= Pagamentos ================= */}

                    <div className="footer-center">

                        <h3>FORMAS DE PAGAMENTO</h3>

                        <div className="payment-icons">

                            <FaCcVisa />

                            <FaCcMastercard />

                            <SiPix />

                            <BsReceipt />

                        </div>

                    </div>

                    {/* ================= Redes ================= */}

                    <div className="footer-right">

                        <h3>SIGA-NOS</h3>

                        <div className="social-icons">

                            <a href="#">

                                <FaInstagram />

                            </a>

                            <a href="#">

                                <FaFacebookF />

                            </a>

                            <a href="#">

                                <FaWhatsapp />

                            </a>

                        </div>

                    </div>

                </div>

            </div>

        </footer>

    );

}

export default Footer;