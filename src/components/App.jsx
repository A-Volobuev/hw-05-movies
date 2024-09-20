import { Route, Routes, Navigate } from 'react-router-dom';
import Layout from './Layout/Layout'
import Home from '../pages/Home/Home'
import Movies from 'pages/Movies/Movies';
import MovieDetails from 'pages/MovieDetails/MovieDetails';
import LayoutMovieDetails from 'pages/MovieDetails/LayoutMovieDetails/LayoutMovieDetails';
import MovieCast from 'pages/MovieDetails/MovieCast/MovieCast';
import MovieReview from 'pages/MovieDetails/MovieReviews/MovieReviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Navigate to="home" />} />
          <Route path="home" element={<Home/>}></Route>
          <Route path="movies" element={<Movies/>}></Route>
          <Route path="movies/:movieId" element={<MovieDetails/>}>
            <Route path="" element={<LayoutMovieDetails/>}>
              <Route index element={<Navigate to="cast" />} />
              <Route path="cast" element={<MovieCast/>}></Route>
              <Route path="reviews" element={<MovieReview/>}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};
