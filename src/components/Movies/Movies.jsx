
import React, { useState, useEffect } from 'react';
import { useLocation, Link, useNavigate } from 'react-router-dom';
import { searchMovies } from '../api/Api';
import styles from './Movies.module.css';

function Movies() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const [query, setQuery] = useState(queryParams.get('query') || '');
  const [movies, setMovies] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovies = async () => {
      const moviesData = await searchMovies(query);
      setMovies(moviesData);
    };

    fetchMovies();
  }, [query]);

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const searchParams = new URLSearchParams();
    searchParams.set('query', query);
    navigate(`/movies?${searchParams.toString()}`);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Search Movies</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={query} onChange={handleInputChange} className={styles.input} />
        <button type="submit" className={styles.button}>Search</button>
      </form>

      <h2 className={styles.results}>Results:</h2>
      {movies.length > 0 ? (
        <ul className={styles.list}>
          {movies.map((movie) => (
            <li key={movie.id} className={styles.item}>
              <Link to={`/movies/${movie.id}`} className={styles.movieLink}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className={styles.noResults}>No movies found.</p>
      )}
    </div>
  );
}

export default Movies;
