import React, { useEffect } from 'react';
import MovieListing from './../MovieListing/MovieListing';
import { fetchAsyncMovies,fetchAsyncShows } from '../../features/movies/movieSlice';
import { useDispatch } from 'react-redux';

const Home = () => {
  const dispatch = useDispatch();
  const movieText = "sports";
  const showText = "fighting"
  useEffect(() => {
    // const movieText = 'Harry';
    // const fetchMovies = async () => {
    //   const response = await movieApi
    //     .get(`?apikey=${APIKey}&s=${movieText}&type=movie`)
    //     .catch((err) => {
    //       console.log('Err: ', err);
    //     });
    //   dispatch(addMovies(response.data));
    // };
    // fetchMovies();
    dispatch(fetchAsyncMovies(movieText));
    dispatch(fetchAsyncShows(showText));
  }, [dispatch]);
  return (
    <div>
      <div className="banner-img">
      <MovieListing />
      </div>
    </div>
  );
};

export default Home;
