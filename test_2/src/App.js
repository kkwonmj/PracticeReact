import React, {useEffect, useState} from "react";
import Movie from "./component/Movie";
import Navbar from "./component/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
 

function App(){
  const [movieTitle, setMovieTitle] = useState('')
  const [movieYear, setMovieYear] = useState('')
  const [movies, setMovies] = useState([
    { title: 'movie 1', year: 2001},
    { title: 'movie 2', year: 2002},
    { title: 'movie 3', year: 2003},
  ]);

  useEffect(() => {
    console.log('render');
  });

  const renderMovies = movies.map(movie => {
    return (
      <Movie movie = {movie}  key={movie.title}/>
    );
  });
  
  const addMovie = (event) => {
    event.preventDefault();
    setMovies([
      ...movies,
      { 
          title: movieTitle,
          year: movieYear,
      }])
        setMovieTitle('');
        setMovieYear('');
  };

  return (
    <Router>
      <div className = "App">
        <Navbar />
        
        <h1>Movie list</h1>
        
        <form onSubmit ={addMovie}>
          <input
            type = "text"
            value = {movieTitle}
            placeholder = "영화제목"
            onChange = {e => setMovieTitle(e.target.value)} /> <br />

          <input
            type = "text"
            value = {movieYear}
            placeholder = "개봉연도"
            onChange = {e => setMovieYear(e.target.value)} /> <br />
            <button type = "submit">영화 추가</button>
        </form>
        {renderMovies}
      </div>
    </Router>
  )
}

export default App;
