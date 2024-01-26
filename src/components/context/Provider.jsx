import React, { useState } from 'react';
import AppContext from './AppContext';
import propTypes from 'prop-types';

function Provider ({children}) {

  const [name, setName] = useState('Vini');

  const value = {
    name, 
    setName
  };





  return (  
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
}

export default Provider;


Provider.propTypes = {
  children: propTypes.any,
}.isRequired;