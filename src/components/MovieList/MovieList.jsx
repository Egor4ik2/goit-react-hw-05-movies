import React from 'react';
import PropTypes from 'prop-types';
import styles from '../../pages/Movies/Movies.module.css';

function MovieList({ movies, handleMovieClick }) {
  return (
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
  );
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleMovieClick: PropTypes.func.isRequired,
};

export default MovieList;
