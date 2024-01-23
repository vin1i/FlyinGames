import React from 'react';
//import { gamesPc } from '../computer/Data';
import './search.css';



/* ----------------Form com Lógica de Busca em Andamento-------------------*/
function Search(/*{onSearch}*/) {

  /* const [searchValue, setSearchValue] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(searchValue);
  };*/

  return ( 
    <form className="search__bar" >
      <input 
        type="search"
        placeholder="Buscar jogos"
        className="search__input"
        required />
     
      
      <button type="submit" className="search__button"> 
        <i className="bx bx-search-alt search__icon"></i></button> </form>
  /* --------------Form com Lógica de Busca em Andamento-----------------
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
        <i className="bx bx-search-alt search__icon"></i></button> </form>*/
  );
}

export default Search;

