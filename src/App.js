import React, { useState } from 'react';

import MoviesList from './components/MoviesList';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);

  function fectchMovieHandler() {
    fetch('https://swapi.dev/api/films')
      .then((response) => response.json())
      .then((data) => {
        const transformData = data.results.map((movies) => {
          return {
            id: movies.episode_id,
            title: movies.title,
            openingText: movies.opening_crawl,
            releaseDate: movies.release_date,
          };
        });
        setMovies(transformData);
      });
  }

  return (
    <React.Fragment>
      <section>
        <button onClick={fectchMovieHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </React.Fragment>
  );
}

export default App;
