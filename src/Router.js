import './App.scss';
import { Route, Routes } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import Home from './components/Home/Home';
import MovieDetail from './components/MovieDetail/MovieDetail';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';
// const MovieDetail = lazy(() => import('./components/MovieDetail/MovieDetail'));
// const Header = lazy(() => import('./components/Header/Header'));
// const Footer = lazy(() => import('./components/Footer/Footer'));
// const Home = lazy(() => import('./components/Home/Home'));

const Router = () => {
  return (
    <>
      <Header />
      <div className="container">
        <Routes>
            <Route path="/" element={<Home />} />
          <Route path="/movie/:imdbID" element={<MovieDetail />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default Router;
