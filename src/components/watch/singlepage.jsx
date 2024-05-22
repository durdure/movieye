import React, { useState, useEffect } from 'react';

const SinglePage = () => {
  const [movielist, setMovielist] = useState([]);

  const getMovie = () => {
    fetch('https://api.themoviedb.org/3/discover/movie?api_key=3759bb1167a63588fbcc9f1d18db83ae')
      .then(response => response.json())
      .then(data => setMovielist(data.results))
      .catch(error => console.error('Error fetching data:', error));
  };

  useEffect(() => {
    getMovie();
  }, []);

  console.log(movielist);

  return (
    <div>
      {movielist.map(movie => (
        <img
          key={movie.id}
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={movie.title}
        />
      ))}
    </div>
  );
};

export default SinglePage;
