import React from 'react';
import PropTypes from 'prop-types';
import styles from './Cast.module.css';

function Cast({ cast, movieId, defaultImg }) {
  return (
    <ul className={styles.castList}>
      {cast.map((actor) => (
        <li key={actor.id} className={styles.castItem}>
          <img
            src={actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : defaultImg}
            alt={actor.name}
            width={200}
          />
          <p className={styles.actorName}>{actor.name}</p>
          <p className={styles.characterName}>as {actor.character}</p>
        </li>
      ))}
    </ul>
  );
}

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
      profile_path: PropTypes.string,
    })
  ).isRequired,
  movieId: PropTypes.string.isRequired,
  defaultImg: PropTypes.string.isRequired,
};

export default Cast;
