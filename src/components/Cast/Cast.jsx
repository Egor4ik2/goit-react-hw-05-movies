import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieCredits } from '../api/Api';
import styles from './Cast.module.css'

function Cast() {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);

  useEffect(() => {
    const fetchMovieCredits = async () => {
      const castData = await getMovieCredits(movieId);
      setCast(castData);
    };

    fetchMovieCredits();
  }, [movieId]);

  if (cast.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className={styles.title}>Cast</h2>
      <ul className={styles.list}>
        {cast.map((actor) => (
          <li key={actor.id} className={styles.item}>
            <img src={`https://image.tmdb.org/t/p/w500/${actor.profile_path}`} alt={actor.name} className={styles.image}/>
            <p className={styles.name}>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

Cast.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default Cast;
