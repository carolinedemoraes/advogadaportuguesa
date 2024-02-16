import React from "react";
import "../styles/Components/social-network.sass";

import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function SocialNetwork() {
  return (
    <>
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
      </a>{" "}
    </>
  );
}

export default SocialNetwork;
