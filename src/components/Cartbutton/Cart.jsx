import React from 'react';
import './cart.css';

function Cart() {
  return ( 

    <button type="button"  className="cart__button">
      <i className="bx bx-cart nav__cart"></i>
      <span className="cart__status">1</span>
    </button>
  );
}

export default Cart ;