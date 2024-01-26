import React, { useEffect, useState } from 'react';
import { gamesPc } from '../../api/games';
import { Products } from '../products/Products';
import './discover.css';
import Loading from '../loading/Loading';

function DiscoverCard() {

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(false);
  });

  return ( 

    <section className="discover__section"  id="descobrir">
      
      <div className="section__title-container">
        <h2 className="section__title">Navegar</h2>
        <span className="section__subtitle">Descubra seus favoritos</span>
      </div>
      
      {loading ? <Loading/>: <div className="discover__card">
        
        {gamesPc.map((product) => (
          <Products key={product.id} data={product} />
        ))}
       
      </div> };

     
    </section>
  );
}

export default DiscoverCard;
