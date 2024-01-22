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
          <a href="#" className="footer__social-icon">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="#" className="footer__social-icon">
            <i className="bx bxl-whatsapp"></i>
          </a>

          <a href="#" className="footer__social-icon">
            <i className="bx bxl-facebook"></i>
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
