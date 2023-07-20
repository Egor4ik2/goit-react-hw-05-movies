import React, { useState, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchMovies } from '../api/Api';
import styles from './Movies.module.css';

function Movies() {
  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialQuery = queryParams.get('query') || '';
  const [query, setQuery] = useState(initialQuery);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const updateQuery = (newQuery) => {
    setQuery(newQuery);
    const searchParams = new URLSearchParams(location.search);
    searchParams.set('query', newQuery);
    navigate({ search: searchParams.toString() });
  };

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    updateQuery(newQuery);
  };

  const handleSearchClick = async (event) => {
    event.preventDefault();
    try {
      const moviesData = await searchMovies(query);
      setMovies(moviesData);
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`, { state: { from: location } });
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find film</h1>
      <form onSubmit={handleSearchClick}>
        <input type="text" value={query} onChange={handleInputChange} className={styles.input} />
        <button type="submit" className={styles.button}>Поиск</button>
      </form>

      {movies.length > 0 && ( 
        <>
          <h2 className={styles.results}>Results:</h2>
          <ul className={styles.list}>
            {movies.map((movie) => (
              <li key={movie.id} className={styles.item}>
                <button onClick={() => handleMovieClick(movie.id)} className={styles.button}>
                  {movie.title}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}

      {movies.length === 0 && query && <p className={styles.noResults}>Films not found!</p>}
    </div>
  );
}

Movies.propTypes = {
  location: PropTypes.object.isRequired,
};

export default Movies;
