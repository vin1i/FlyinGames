import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import { gamesPc } from '../../api/games';

export const ShopContext = createContext(null); 
const getDefaultCart = () => {
  let cart = {};
  for (let i =1 ; i <gamesPc.length + 1; i++) {
    cart[i] = 0;
  }

  return cart;
};
  




export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState(getDefaultCart());
  
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0){
        let itemInfo = gamesPc.find((product) => product.id === Number(item));

        if(itemInfo)
        { 
          totalAmount += cartItems[item] * parseFloat( itemInfo.price.replace('R$', '').trim());
        }
      }
    }  console.log(totalAmount);
    return totalAmount.toFixed(2);
    
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] + 1}));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: prev[itemId] - 1}));
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({...prev, [itemId]: newAmount}));
  };


  const contextValue = {
    cartItems,
    addToCart,
    removeFromCart, 
    updateCartItemCount, 
    getTotalCartAmount};
    

  return (<ShopContext.Provider value={contextValue}>{props.children}</ShopContext.Provider>
  );
};

ShopContextProvider.propTypes = {
  children: PropTypes.node.isRequired, 
};
