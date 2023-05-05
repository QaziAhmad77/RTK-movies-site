import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import user from '../../images/user.png';
import './Header.scss';
import { useDispatch } from 'react-redux';
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from '../../features/movies/movieSlice';

const Header = (props) => {
  const { color, setColor } = props;
  const [term, setTerm] = useState('');
  const dispatch = useDispatch();
  const submitHandler = (e) => {
    e.preventDefault();
    if (term === '') return alert('Please enter search term');
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm('');
  };
  return (
    <div className="header">
      <div className="logo">
        <Link to="/">App By </Link>
      </div>
      <div className="search-bar">
        <form action="" onSubmit={submitHandler}>
          <input
            type="text"
            value={term}
            placeholder="Search Movies or Shows"
            onChange={(e) => setTerm(e.target.value)}
          />
          <button type="submit">
            <i className="fa fa-search"></i>
          </button>
        </form>
      </div>
      <div className="user-image">
        <i
          class="fa-solid fa-circle-user"
          style={{ color: 'white', fontSize: '40px' }}
        ></i>
      </div>
      <div className="moon-image">
        <i
          class="fa-solid fa-moon"
          style={{
            color: 'white',
            fontSize: '30px',
            fontWeight: 100,
            cursor: 'pointer',
            textAlign: 'center',
          }}
          onClick={() => setColor(!color)}
        ></i>
      </div>
    </div>
  );
};

export default Header;
