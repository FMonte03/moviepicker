import React from 'react';
import { useLocation } from 'react-router-dom';

function MoviePage() {
 const location = useLocation();
 const selectedMovie =   location.state;
  console.log(selectedMovie); 
  
  return (
    <div className='MoviePage'>
      <h1>Your Recommended Movie:</h1>
      {selectedMovie ? (
        <div className='movieComp'>
          <img className='Poster' src={selectedMovie.primaryImage} alt={selectedMovie.Series_Title} />
          <div className="movieContainer">
            <h3 className='Title'>{selectedMovie.Series_Title}</h3>
            <p className='Genres'>{selectedMovie.Genre}</p>
            <p className='Rating'>{"Rating: "+ selectedMovie.IMDB_Rating}</p>
            
            <p className='Actors'>
              {selectedMovie.Star1+ ",\t" +selectedMovie.Star2+",\t" + selectedMovie.Star3+ ",\t"+   selectedMovie.Star4}
            </p>
            <p className='Desc'>{selectedMovie.Overview}</p>
            <a href={selectedMovie.IMDB_Link} target="_blank" rel="noopener noreferrer" className="imdbLink">
                    Visit IMDB Page
                  </a>
          </div>
 
        </div>
        
      ) : (
        <p>No movie selected</p>
      )}

      <div>
          <div className="trailer">
            <h4>Trailer:</h4>
            <video controls src={selectedMovie.Trailer} className="Trailer" />
          </div> 
        
    </div></div>
  );
}

export default MoviePage;