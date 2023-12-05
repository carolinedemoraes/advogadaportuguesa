import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Title() {
  return (
    <>
      <div className="title-content">
        <h1 className="title">CIDADANIA LUSO-BRASILEIRA</h1>
        <h2 className="subtitle">ANDRÉIA SANT'ANNA</h2>
        <h2 className="undertitle">Advogada luso-brasileira</h2>
        <h2 className="undertitle">
          Especialista em cidadania portuguesa e assuntos jurídicos portugueses
        </h2>

        <a
          href="https://www.instagram.com/cidadanialusitana/"
          className="social-network"
        >
          <FaInstagram />
        </a>
        <a
          href="https://api.whatsapp.com/send?phone=5553999652013 "
          className="social-network"
        >
          <FaWhatsapp />
        </a>
        <a href="mailto:andreia-66927p@adv.oa.pt" className="social-network">
          <FaEnvelope />
        </a>

        <p className="slogan">
          Eu posso te ajudar a realizar o sonho português 🇵🇹
        </p>
      </div>
    </>
  );
}

export default Title;
