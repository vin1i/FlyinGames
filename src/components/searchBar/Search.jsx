// Search.jsx

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './search.css';

function Search() {
  const [searchValue, setSearchValue] = useState('');
  const navigate = useNavigate();

  const handleSearch = async (event) => {
    event.preventDefault();

    // Redirecione para a página de resultados da pesquisa com base no termo
    navigate(`/search/${searchValue.toLowerCase()}`);
  };

  return (
    <form className="search__bar" onSubmit={handleSearch}>
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar jogos"
        className="search__input"
        onChange={(e) => setSearchValue(e.target.value)}
        required
      />

      <button type="submit" className="search__button">
        <i className="bx bx-search-alt search__icon"></i>
      </button>
    </form>
  );
}

export default Search;
