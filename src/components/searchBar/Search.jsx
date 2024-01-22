import React, {useState} from 'react';
//import { gamesPc } from '../computer/Data';
import './search.css';

// eslint-disable-next-line react/prop-types
function Search({ onSearch }) {

  const [searchValue, setSearchValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };

  return ( 

    <form className="search__bar" onSubmit={handleSubmit}>
      <input 
        type="search"
        value={searchValue}
        placeholder="Buscar jogos"
        className="search__input"
        onChange={(e) => setSearchValue(e.target.value)}
        required />
       
      { searchValue }
      <button type="submit" className="search__button"> 
        <i className="bx bx-search-alt search__icon"></i></button> </form>
  );
}

export default Search;

