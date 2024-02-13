import React, { useContext } from 'react';
import './CartPage.css';
import { gamesPc } from '../../api/games';
import { ShopContext } from '../context/shop-context';
import { CartItem } from './Cartitem';
import {useNavigate} from 'react-router-dom';
import Header from '../header/Header';
import Footer from '../Footer/Footer';

const CartPage = () => {
  const { cartItems, getTotalCartAmount  } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  return (
    <><Header />
      <section className="section__cart">
        <h2 className="section__title">Seu Carrinho</h2>
        <span className="section__subtitle">Suas escolhas até agora </span>
        <div className="cartPage__container ">  

          <div className="cartItems ">
            {gamesPc.map((product) => {
              if (cartItems[product.id] !== 0)
                return <CartItem key={product.id} data={product} />;
            })}
          </div>
          {totalAmount > 0 ? (
            <div className="container__checkout">
       
              <h2 className="section__title">Subtotal: R${totalAmount}</h2>
              <button  onClick={() => navigate('/')} className="btn__cart-page">Continue Comprando</button>
              <button className="btn__cart-page">Checkout</button>
            </div>) : ( 
            <div className="section__cart-empty container grid">
              <div className="div__cart-empty grid"></div>
              <h1 className="cart-empty">Seu carrinho está vazio🥲</h1>
              <button  onClick={() => navigate('/')}  className="btn__cart-back ">Voltar a loja</button></div>
          ) }</div>
      
      </section> 
      <Footer /></>
  );
};

export default CartPage;
