import styled from "styled-components";
import backgroundImage from "../img/desktop/image-hero.jpg"; // Importa la imagen correctamente
import backgroundMobileImage from "../img/mobile/image-hero.jpg";
import { useState } from "react";

import "../css/main.css";


const Background = styled.div`
  font-size: 1.5em;
  color: #bf4f74;
  background-image: url(${backgroundImage});
  background-size: cover;
  height: 100vh; /* 100% de la altura de la ventana gráfica */
  width: 100%; /* 100% del ancho de la ventana gráfica */
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 768px) {
    /* Cambia la imagen de fondo en pantallas más pequeñas (menos de 768px de ancho) */
    background-image: url(${backgroundMobileImage});
  }
`;

function Nav() {
  const [active, setActive] = useState("nav__menu");
  const [icon, setIcon] = useState("nav__toggler");
  const navToggle = () => {
    if (active === "nav__menu") {
      setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
      setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
  };
  return (
    <Background>
      <nav className="nav">
        <a href="#" className="nav__brand">
          loopstudios
        </a>
        <ul className={active}>
          <li className="nav__item">
            <a href="#" className="nav__link">
              About
            </a>
            <span className="nav__bar"></span>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Careers
            </a>
            <span className="nav__bar"></span>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Events
            </a>
            <span className="nav__bar"></span>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              Products
            </a>
            <span className="nav__bar"></span>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link"></a>
            <span className="nav__bar"></span>
          </li>
        </ul>
        <div onClick={navToggle} className={icon}>
          <div className="line1"></div>
          <div className="line2"></div>
          <div className="line3"></div>
        </div>
      </nav>
      <div className="container">
        <div className="container__content">
          <h1 className="container__title">IMMERSIVE</h1>
          <h1 className="container__title">EXPERIENCES</h1>
          <h1 className="container__title container__title--highlighted">
            THAT DELIVER
          </h1>
        </div>
      </div>
    </Background>
  );
}

export default Nav;
