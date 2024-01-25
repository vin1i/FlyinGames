import React from 'react';
import PropTypes from 'prop-types';
import './products.css';


export const Products = (props) => {
  
  
  return (<section className="section__card" id="descobrir">
    
    <div className="card__container grid">
      <img src={props.data.image} 
        alt="product"
        className="card__image"  />

      <div className="card__infos">
        <h2 className="card__name">{props.data.title}</h2>

        <h2 className="card__price">{props.data.price}</h2>
      </div>
    </div>
    <button type="button" className="button__add-cart">
      <i className="bx bx-cart"></i>
    </button>
  </section>);
};

Products.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
  }).isRequired,
};
