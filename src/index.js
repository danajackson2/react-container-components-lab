import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';

ReactDOM.render(
  <div className="app">
    <h1>Searchable</h1>
    <SearchableMovieReviewsContainer />
    <h1>Latest</h1>
    <LatestMovieReviewsContainer />
  </div>,
  document.getElementById('root')
);