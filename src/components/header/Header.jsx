import React, { useState } from 'react';
import Search from '../searchBar/Search';
import Cart from '../Cartbutton/Cart';
import './header.css';

function Header (){
  /*-------------------------------------------Toggle Menu-----------------------------------------*/
  const [Toggle, showMenu] = useState(false);
  /*-------------------------------------------Toggle Menu-----------------------------------------*/

  return (
    <header className="header">
      <nav className="nav container">

      

        <a href="index.html" className="nav__logo">
          Logo
        </a>



        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href="#stars" className="nav__link">
                <i className="bx bx-star nav__icon_star"></i>
                Destaques
              </a>
            </li>

            <li className="nav__item">
              <a href="#computer" className="nav__link">
                <i className="bx bx-desktop nav__icon"></i>
                Computador
              </a>
            </li>

            <li className="nav__item">
              <a href="#consoles" className="nav__link">
                <i className="bx bx-joystick nav__icon"></i>
                Consoles
              </a>
            </li>

            <li className="nav__item">
              <a href="login" className="nav__link active-link">
                <i className="bx bx-user nav__icon"></i>
                Login
              </a>
            </li>
          </ul>

        

          <i
            className="uil uil-times nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i className="uil uil-apps"></i>
        </div>

        <Search/>
        <Cart/>
       
      </nav>
      
    </header>
  );
}

export default Header;
