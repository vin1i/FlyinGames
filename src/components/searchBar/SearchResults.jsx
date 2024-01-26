// searchResults.jsx
import React, { useState, useEffect } from 'react';
import Loading from '../loading/Loading';
import Header from '../header/Header';
import Footer from '../Footer/Footer';
import './searchresults.css';
import PropTypes from 'prop-types';
import { gamesPc } from '../../api/games';
import { useNavigate, useParams } from 'react-router-dom';
import { Products } from '../products/Products';

function SearchResults() {
  const { term } = useParams();
  const [searchResults, setSearchResults] = useState([]);
  const navigate = useNavigate();
  const [notFound, setNotFound] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Configura 'loading' como true ao iniciar a pesquisa

        const searchTerm = term.toLowerCase();
        console.log('Search term:', searchTerm);
        const results = gamesPc.filter((game) =>
          game.title.toLowerCase().includes(searchTerm)
        );

        if (results.length === 0) {
          setNotFound(true);
        } else {
          setSearchResults(results);
          setNotFound(false);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setNotFound(true);
      } finally {
        setLoading(false); // Define 'loading' como false após concluir a busca, mesmo em caso de erro
      }
    };

    fetchData();
  }, [term]);

  const goBack = () => {
    navigate('/home');
  };

  return (
    <>
      <Header />
      <div className="results__container">
        <button
          type="button"
          className="button__back-arrow"
          onClick={goBack}
        >
          <i className="bx bx-left-arrow-alt"></i>
        </button>
        {notFound ? (   <div className="container__title-notfound">
          <h2 className="section__title">Desculpe, mas esse jogo não consta na lista da FlyinGames🥲</h2></div>
        ) : (
          <div className="container__title">
            <h2 className="section__title">Resultados da Pesquisa</h2>
            <span className="section__subtitle">Encontrou seu jogo?</span>
            {loading && <Loading />}
            {!loading && (
              <div className="search-results">
                {searchResults.map((result) => (
                  <Products
                    key={result.id}
                    data={result}
                    className="search__result-item"
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}

SearchResults.propTypes = {
  params: PropTypes.shape({
    term: PropTypes.string.isRequired,
  }).isRequired,
};

export default SearchResults;
