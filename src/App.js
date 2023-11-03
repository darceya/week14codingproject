import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js';
import MovieData from './components/MovieList';
import movieListData from './components/Movie';




function App() {
  const movieList = movieListData.map(movie => {
    return (
      <MovieData
        key={movie.id}
        movie={movie}
      />
    )
  })
  return (
    <div className="App">
      <div className="container">
        <h2>LensLaugh: Comedy Movie Reviews </h2>
        <section className="card-container">{movieList}</section>
      </div>
    </div>
  );
}

export default App;
