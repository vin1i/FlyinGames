import React, {useState} from 'react';
import './search.css';

function Search() {

  const [searchValue, setSearchValue] = useState('');



  return ( 

    <form className="search__bar">
      <input 
        type="search"
        value={searchValue}
        placeholder="Buscar jogos"
        className="search__input"
        onChange={({target}) => setSearchValue(target.value)}
        required />
       
      { searchValue }
      <button type="submit" className="search__button"> 
        <i className="bx bx-search-alt search__icon"></i></button> </form>
  );
}

export default Search;

