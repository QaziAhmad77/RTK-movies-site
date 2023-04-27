import React from 'react';
import { useSelector } from 'react-redux';
import { STATUSES } from '../../features/movies/movieSlice';
import Slider from 'react-slick';
import {
  getAllMovies,
  getAllShows,
  getLoading,
} from '../../features/movies/movieSlice';
import MovieCard from './../MovieCard/MovieCard';
import './MovieListing.scss';
import { Settings } from '../../common/settings';

const MovieListing = () => {
  const movies = useSelector(getAllMovies);
  const shows = useSelector(getAllShows);
  const loading = useSelector(getLoading);

  if (loading === STATUSES.LOADING) {
    return <h2 style={{ color: 'white' }}>Loading....</h2>;
  }

  if (loading === STATUSES.ERROR) {
    return <h2 style={{ color: 'white' }}>Something went wrong!</h2>;
  }

  let renderMovies, renderShows = '';
  renderMovies =
    movies.Response === 'True' ? (
      movies.Search.map((movie, index) => {
        return <MovieCard key={index} data={movie} />;
      })
    ) : (
      <div className="movies-error">
        <h3>{movies.Error}</h3>
      </div>
    );

  renderShows =
    shows.Response === 'True' ? (
      shows.Search.map((show, index) => {
        return <MovieCard key={index} data={show} />;
      })
    ) : (
      <div className="shows-error">
        <h3>{movies.Error}</h3>
      </div>
    );
  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider {...Settings}>{renderMovies}</Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <Slider {...Settings}>{renderShows}</Slider>
      </div>
    </div>
  );
};

export default MovieListing;
