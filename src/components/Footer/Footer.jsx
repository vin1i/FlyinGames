import React from 'react';
import './footer.css';

function Footer  () {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">LOGO</h1>

        <ul className="footer__list">
          <li>
            <a href="#" className="footer__link">
              Blog
            </a>
          </li>

          <li>
            <a href="#" className="footer__link">
              Sobre nós
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
          E-commerce &copy; 2024. Todos os direitos reservados.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
