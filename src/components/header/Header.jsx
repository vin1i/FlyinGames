import React, { useState } from 'react';
import Logo1 from '../../assets/Logo/Flying.png';
import { Link } from 'react-router-dom'; 
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

     
        <a href="/">
          <img src={Logo1} alt="" className="logo1" />
         
        </a>



        <div className={Toggle ? 'nav__menu show-menu' : 'nav__menu'}>
          <ul className="nav__list grid">
            <li className="nav__item">
              <a href= "#stars" className="nav__link">
                <i className="uil uil-star nav__icon_star"></i>
                Destaques
              </a>
            </li>

            <li className="nav__item">
              <a href="#computer" className="nav__link">
                <i className="uil uil-desktop nav__icon"></i>
                Descobrir
              </a>
            </li>

            <li className="nav__item">
              <a href="#descobrir" className="nav__link">
                <i className="uil uil-compass nav__icon"></i>
                Navegar
              </a>
            </li>

            <li className="nav__item">
              <Link to="/login" className="nav__link active-link">
                <i className="uil uil-user nav__icon"></i>
                Login
              </Link>
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
