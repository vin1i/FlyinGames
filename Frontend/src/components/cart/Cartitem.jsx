import React, { useContext } from 'react';
import './CartItem.css';
import { ShopContext } from '../context/shop-context';
import PropTypes from 'prop-types';

export const CartItem = (props) => {
  const {id, title, price, genre, image } = props.data;
  const { cartItems, addToCart, removeFromCart, updateCartItemCount} = useContext(ShopContext);
  return (
    
    <section className="section__cart-item">
      <div className="card__container grid">
        <img src={image}
          alt="product" 
          className="card__image" />

        <div className="card__infos">
          <h2 className="card__name">{title}</h2>
          <h2 className="card__price">{price}</h2>
          <div className="countHandler">
            <button onClick={() => removeFromCart(id)} className="button__cart"> - </button>
            <input className= "input__cart" value={cartItems[id]} onChange={(e) => updateCartItemCount(Number(e.target.value), id) } />
            <button onClick={() => addToCart(id)} className="button__cart"> + </button>
          </div>
          <h3 className="card__genre">{genre}</h3>
        </div>
      </div>
    </section>
  );
};

CartItem.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};
