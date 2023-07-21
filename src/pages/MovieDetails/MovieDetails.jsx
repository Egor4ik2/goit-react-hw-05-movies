// MovieDetails.jsx
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieDetails, getMovieCredits, getMovieReviews } from '../../components/api/Api';
import Cast from '../../components/Cast/Cast';
import Reviews from '../../components/Reviews/Reviews';
import styles from './MoviesDetails.module.css';

const defaultImg = 'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=500x700';

function MovieDetails() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const [castData, setCastData] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [isImageLoaded, setIsImageLoaded] = useState(false);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
  
    if (!movieId) {
      return;
    }

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

    setShowReviews(false);
    setShowCast(!showCast);

    if (!showCast && castData.length === 0) {
      try {
        const cast = await getMovieCredits(movieId);
        setCastData(cast);
      } catch (error) {
        console.error('Error fetching movie credits:', error);
      }
    }
  };

  const handleShowReviews = async (event) => {
    event.preventDefault();

    setShowCast(false);
    setShowReviews(!showReviews);

    if (!showReviews && reviews.length === 0) {
      try {
        const movieReviews = await getMovieReviews(movieId);
        setReviews(movieReviews);
      } catch (error) {
        console.error('Error fetching movie reviews:', error);
      }
    }
  };

  const handleImageLoad = () => {
    setIsImageLoaded(true);
  };

  const backLink = location.state?.from ?? '/';

  const handleGoBack = () => {
    navigate(backLink);
  };

  if (!movie) {
    return <div>Loading...</div>;
  }

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

      <h3 className={styles.additionalInfoTitle}>Info:</h3>
      <ul className={styles.additionalInfoList}>
        <li>
          <Link to="#" onClick={handleShowCast} className={styles.additionalInfoLink}>
           Show cast
          </Link>
        </li>
        <li>
          <Link to="#" onClick={handleShowReviews} className={styles.additionalInfoLink}>
            Show review
          </Link>
        </li>
      </ul>

      <div className={styles.castContainer}>
    
        {showCast && castData.length > 0 && <Cast cast={castData} defaultImg={defaultImg} />}
       
        {showCast && castData.length === 0 && (
          <p className={styles.noCast}>no cast.</p>
        )}
      </div>

      <div className={styles.reviewsContainer}>
    
        {showReviews && reviews.length > 0 && <Reviews reviews={reviews} />}
     
        {showReviews && reviews.length === 0 && (
          <p className={styles.noReviews}>no review.</p>
        )}
      </div>
    </div>
  );
}


MovieDetails.propTypes = {
  movieId: PropTypes.string,
};

export default MovieDetails;
