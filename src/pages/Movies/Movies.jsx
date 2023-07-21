import React, { useState, useEffect, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchMovies } from '../../components/api/Api';
import styles from './Movies.module.css';
import MovieList from '../../components/MovieList/MovieList';

function Movies() {
  const location = useLocation();
  const queryParams = useMemo(() => new URLSearchParams(location.search), [location.search]);
  const initialQuery = queryParams.get('query') || '';
  const [query, setQuery] = useState(initialQuery);
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const newQuery = event.target.value;
    setQuery(newQuery);
  };

  const handleSearchSubmit = async (event) => {
    event.preventDefault();
    try {
      const moviesData = await searchMovies(query);
      setMovies(moviesData);

      queryParams.set('query', query);
      navigate({ search: queryParams.toString() });
    } catch (error) {
      console.error('Error fetching movies:', error);
    }
  };

  const handleMovieClick = (movieId) => {
    navigate(`/movies/${movieId}`, { state: { from: location } });
  };

  useEffect(() => {
    const handleSearchSubmitOnMount = async () => {
      if (movies.length === 0 && initialQuery) {
        try {
          const moviesData = await searchMovies(initialQuery);
          setMovies(moviesData);
        } catch (error) {
          console.error('Error fetching movies:', error);
        }
      }
    };

    handleSearchSubmitOnMount();
  }, [movies, initialQuery]);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Find film</h1>
      <form onSubmit={handleSearchSubmit}>
        <input type="text" value={query} onChange={handleInputChange} className={styles.input} />
        <button type="submit" className={styles.button}>
          Поиск
        </button>
      </form>

      {movies.length > 0 && <MovieList movies={movies} handleMovieClick={handleMovieClick} />}

      {movies.length === 0 && query && <p className={styles.noResults}>Films not found!</p>}
    </div>
  );
}

Movies.propTypes = {
  location: PropTypes.object
};

export default Movies;
