import { useEffect, useState } from 'react'
import React from 'react'
import './App.css'
import Movies from './components/Movies'
import SearchBar from './components/SearchBar'
import movieData from './utils/movies'

function App() {
  const [search, setSearch] = useState('');
  const [movies, setMovies] = useState([]);
  const [maxLength, setMaxLength] = useState(0);
  const [ascdesc, setascdesc] = useState(' ');
  const [moviesCur, SetMoviesSort] = useState([]);

  useEffect(() => {
    const moviesSorted = [...movieData];
    const changedMovies = moviesSorted.filter(movie =>{
      return (movie.title.toUpperCase().includes(search.toUpperCase())) &&
       ( [NaN,0].includes(parseInt(maxLength,10)) || parseInt(maxLength,10) <= movie.length);
    })
    setMovies(changedMovies);
  },[search, maxLength, ascdesc, moviesCur]);


  return (
    <div className="App">
      <SearchBar search = {search} 
      setSearch = {setSearch} 
      maxLength = {maxLength} 
      setMaxLength = {setMaxLength} 
      ascdesc = {ascdesc} 
      setascdesc = {setascdesc} 
      moviesCur = {movieData} 
      SetMoviesSort = {SetMoviesSort} />
      <Movies movies = {movies}/>
    </div>
  )
}

export default App