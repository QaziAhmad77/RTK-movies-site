import { Link } from 'react-router-dom';
import './MovieCard.scss';
import React from 'react';

const MovieCard = (props) => {
  const { data, color } = props;
  return (
    <div className={`card-item ${color ? 'color' : ''}`}>
      <Link to={`/movie/${data.imdbID}`}>
        <div className="card-inner">
          <div className="card-top">
            <img src={data.Poster} alt={data.Title} />
          </div>
          <div className="card-bottom">
            <div className="card-info">
              <h4>{data.Title}</h4>
              <p>{data.Year}</p>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default MovieCard;
