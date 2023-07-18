import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getTrendingMovies } from '../api/Api';
import styles from './Home.module.css';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    const fetchTrendingMovies = async () => {
      const movies = await getTrendingMovies();
      setTrendingMovies(movies);
    };

    fetchTrendingMovies();
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Popular Movies</h1>
      {trendingMovies.map((movie) => (
        <div key={movie.id} className={styles.movieItem}>
          <Link to={`/movies/${movie.id}`} className={styles.movieLink}>{movie.title}</Link>
        </div>
      ))}
    </div>
  );
}

export default Home;
