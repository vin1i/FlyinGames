import React from 'react';
import Logo from '../../assets/Logo/Flying.png';
import './footer.css';

function Footer  () {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <img src={Logo} alt="" className="logo__img"/>

        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
            Vini.dev
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              Sobre mim
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              Suporte
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.linkedin.com/in/mvini21/" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-linkedin"></i>
          </a>

          <a href="https://github.com/vin1i" className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bxl-github"></i>
          </a>

          <a href="mailto:marcosvinijobs342@outlook.com"  className="footer__social-icon" target="_blank" rel="noreferrer">
            <i className="bx bx-envelope"></i>
          </a>
        </div>

        <span className="footer__copy">
        &#169;2024 All Rights Reserved. Made with 💜 by Vini Matos
        </span>
      </div>
    </footer>
  );
}

export default Footer;
