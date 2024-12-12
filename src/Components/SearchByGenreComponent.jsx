import React from 'react';
import movieData from '../MoviesTrailers.json'
import { MovieSearchGenre } from '../MovieSearchGenre';
import { useState } from 'react';
import { useEffect } from 'react';
import MoviePoster from './MoviePoster';


function SearchByGenreComponent() {

  
    const [selectedGenre, setGenre ] = useState("Select Genre")
    const [selectedMovies, setMovies] = useState([]);
  
  
     
 

    useEffect(() => {
    
          if(selectedGenre !== "Select Genre"){
            const movieSearch = new MovieSearchGenre(selectedGenre); 
            setMovies(movieSearch.getMovies());
             
          }
          
  }, [selectedGenre]); 


    return (
    
      <div className='Survey'>
        <div className="genreComponent">
        <div className="dropdown">
          <button className="dropbtn">{selectedGenre} 
            <i className="fa fa-caret-down"></i>
          </button>
          <div className="dropdown-content">
            <a onClick={(e) => setGenre(e.target.textContent)}>Horror</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Action</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Comedy</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Drama</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Animation</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Adventure</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>History</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Biography</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Sci-Fi</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Western</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Romace</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>War</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Crime</a>
            <a onClick={(e) => setGenre(e.target.textContent)}>Fantasy</a>
          </div>
        </div> 
      
        <div className="Mcontainer">
          <div className="movieCat">
            
          {selectedMovies.map((movie, index) => (
                    <MoviePoster key={index} movie={movie}  />
                ))}
          </div>
        </div>
      </div>
      </div>
    );
}

export default SearchByGenreComponent;