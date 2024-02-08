import React from 'react';
import SearchResults from '../../searchBar/SearchResults';
import Provider from '../../context/Provider';

function SearchPage() {
  return (  
    <>
      <Provider>
        < SearchResults/>
      </Provider></>
  );
}

export default SearchPage;
