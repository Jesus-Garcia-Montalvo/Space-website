import React from "react"; // rafce
import "../css/main.css";
import logo from "../img/logo.svg";
import facebook from "../img/icon-facebook.svg";
import twitter from "../img/icon-twitter.svg";
import pinterest from "../img/icon-pinterest.svg";
import instagram from "../img/icon-instagram.svg";

const Footer = () => {
  return (
    <>
      <footer class="footer">
        <div class="footer-columna1">
          <img class="logo" src={logo} alt="Logo" />

          <nav className="nav footer-nav-1">
            <li className="nav__item_1 footer-nav-item">
              <a href="#" className="nav__link">
                About
              </a>
              <span className="nav__bar_1 "></span>
            </li>
            <li className="nav__item_1 footer-nav-item">
              <a href="#" className="nav__link">
                Careers
              </a>
              <span className="nav__bar_1"></span>
            </li>
            <li className="nav__item_1 footer-nav-item">
              <a href="#" className="nav__link">
                Events
              </a>
              <span className="nav__bar_1"></span>
            </li>
            <li className="nav__item_1 footer-nav-item">
              <a href="#" className="nav__link">
                Products
              </a>
              <span className="nav__bar_1"></span>
            </li>
            <li className="nav__item_1">
              <a href="#" className="nav__link"></a>
              <span className="nav__bar_1"></span>
            </li>
          </nav>
        </div>

        <div class="footer-columna2">
          <nav className="nav footer-nav2">
            <li className="nav__item_2 footer-nav-item">
              <a href="#" className="nav__link">
                <img src={facebook} alt="Facebook" />
              </a>
              <span className="nav__bar_2"></span>
            </li>
            <li className="nav__item_2 footer-nav-item">
              <a href="#" className="nav__link">
                <img src={twitter} alt="Twitter" />
              </a>
              <span className="nav__bar_2"></span>
            </li>
            <li className="nav__item_2 footer-nav-item">
              <a href="#" className="nav__link">
                <img src={pinterest} alt="Pinterest" />
              </a>
              <span className="nav__bar_2"></span>
            </li>
            <li className="nav__item_2 ">
              <a href="#" className="nav__link">
                <img src={instagram} alt="Instagram" />
              </a>
              <span className="nav__bar_2"></span>
            </li>
            <li className="nav__item_2">
              <a href="#" className="nav__link"></a>
              <span className="nav__bar_2"></span>
            </li>
          </nav>
          <br />
          <p class="footer-rights">© 2021 Loopstudios. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
