import React from 'react'
import { useEffect ,useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import MovieCard from '../components/MovieCard';

const searchURL = import.meta.VITE_SEARCH;
const apiKey = import.meta.VITE_API;

import './styles/MovieGrid.css'

const Search = () => {
  const [searchParams] = useSearchParams();

  const [movies, setMovies] = useState([]);
  const query = searchParams.get("q");

  return (
    <div className="container">
      <h2 className="title">
        Resultados para: <span className='query-text'>{query}</span>
        </h2>
      <div className="movies-container">
        {movies.length === 0 && <p>Carregando...</p>}
        {
          movies.length > 0 && movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)
        }
      </div>
    </div>
  )
}

export default Search