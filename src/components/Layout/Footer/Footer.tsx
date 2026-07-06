import "./Footer.css";

import logo from "../../../assets/images/hero/logo.webp";

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

                            <p>Café Valenzuela © {new Date().getFullYear()}</p>

                            <span>Todos os direitos reservados.</span>

                        </div>

                    </div>

                    {/* ================= Pagamentos ================= */}

                    <div className="footer-center">

                        <h3>FORMAS DE PAGAMENTO</h3>

                        <div className="payment-icons">

    <FaCcVisa
        aria-label="Visa"
        title="Visa"
    />

    <FaCcMastercard
        aria-label="Mastercard"
        title="Mastercard"
    />

    <SiPix
        aria-label="Pix"
        title="Pix"
    />

    <BsReceipt
        aria-label="Boleto Bancário"
        title="Boleto Bancário"
    />

</div>

                    </div>

                    {/* ================= Redes ================= */}

                    <div className="footer-right">

                        <h3>SIGA-NOS</h3>

                        <div className="social-icons">

    <a
        href="#"
        aria-label="Instagram do Café Valenzuela"
    >
        <FaInstagram />
    </a>

    <a
        href="#"
        aria-label="Facebook do Café Valenzuela"
    >
        <FaFacebookF />
    </a>

    <a
        href="#"
        aria-label="WhatsApp do Café Valenzuela"
    >
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