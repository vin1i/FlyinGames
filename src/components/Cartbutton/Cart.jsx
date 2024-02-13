import React from 'react';
import './cart.css';
import { Link } from 'react-router-dom';

function Cart() {
  return ( 

    <Link to="/Cart"> <button type="button" className="cart__button">
      <i className="bx bx-cart nav__cart"></i>
      <span className="cart__status">1</span>
    </button></Link>
  );
} 

export default Cart ;