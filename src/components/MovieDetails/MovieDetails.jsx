import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../api/Api';
import Cast from '../Cast/Cast';
import Reviews from '../Reviews/Reviews';
import styles from './MoviesDetails.module.css';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x700';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [castData, setCastData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieData = await getMovieDetails(movieId);
        setMovie(movieData);
      } catch (error) {
        console.error('Error fetching movie details:', error);
      }
    };

    fetchMovieDetails();
  }, [movieId]);

  const handleShowCast = async (event) => {
    event.preventDefault();

    if (reviews.length > 0) {
      setReviews([]);
    }

    if (castData.length === 0) {
      try {
        const cast = await getMovieCredits(movieId);
        setCastData(cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    }

    window.history.pushState(null, null, `/movies/${movieId}/cast`);
  };

  const handleShowReviews = async (event) => {
    event.preventDefault();

    if (castData.length > 0) {
      setCastData([]);
    }

    if (reviews.length === 0) {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    }

    window.history.pushState(null, null, `/movies/${movieId}/reviews`);
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

 
  const backLink = location.state?.from ?? '/';


  const handleGoBack = () => {
    navigate(backLink);
  };

  return (
    <div className={styles.container}>
      <button onClick={handleGoBack} className={styles.goBackButton}>Go back</button>
      <h2 className={styles.title}>{movie.title}</h2>
      <img
        src={movie.poster_path ? `https://image.tmdb.org/t/p/w500/${movie.poster_path}` : defaultImg}
        alt={movie.title}
        onLoad={handleImageLoad}
        className={styles.poster}
        style={{ display: isImageLoaded ? 'block' : 'none' }}
      />

      <div
        className={styles.placeholderPoster}
        style={{
          width: '250px',
          height: '375px',
          backgroundColor: '#ccc',
          display: isImageLoaded ? 'none' : 'block',
        }}
      ></div>

      <p className={styles.userScore}>User Score: {movie.vote_average}</p>
      <p className={styles.overview}>Overview: {movie.overview}</p>

      <h3 className={styles.genresTitle}>Genres:</h3>
      <ul className={styles.genresList}>
        {movie.genres.map((genre) => (
          <li key={genre.id} className={styles.genre}>{genre.name}</li>
        ))}
      </ul>

      <h3 className={styles.additionalInfoTitle}>Additional Information:</h3>
      <ul className={styles.additionalInfoList}>
        <li>
          <Link to="#" onClick={handleShowCast} className={styles.additionalInfoLink}>
            Show Cast
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleShowReviews} className={styles.additionalInfoLink}>
            Show Reviews
          </Link>
        </li>
      </ul>

      {castData.length > 0 && !location.pathname.endsWith('/reviews') && (
        <div className={styles.castContainer}>
          <Cast cast={castData} movieId={movieId} defaultImg={defaultImg} />
        </div>
      )}

      {reviews.length > 0 && !location.pathname.endsWith('/cast') && (
        <div className={styles.reviewsContainer}>
          <Reviews reviews={reviews} />
        </div>
      )}

      {location.pathname.endsWith('/reviews') && reviews.length === 0 && (
        <p className={styles.noReviews}>We don't have reviews for this movie.</p>
      )}
    </div>
  );
}

MovieDetails.propTypes = {
  movieId: PropTypes.string.isRequired,
};

export default MovieDetails;
