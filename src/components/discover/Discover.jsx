import React from 'react';
import { gamesPc } from '../../games';
import { Products } from '../products/Products';
import './discover.css';

function DiscoverCard() {
  return ( 
    <section className="discover__section">
      <div className="section__title-container">
        <h2 className="section__title">Descubra</h2>
        <span className="section__subtitle">Navegue pelos seus favoritos</span>
      </div>
      
      <div className="discover__card">
        {gamesPc.map((product) => (
          <Products key={product.id} data={product} />
        ))}
      </div>
    </section>
  );
}

export default DiscoverCard;
