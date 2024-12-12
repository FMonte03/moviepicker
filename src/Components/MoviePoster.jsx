import React from 'react';
import {Link} from 'react-router-dom'
import movieData from '../MoviesTrailers.json'
import MoviePage from '../Pages/MoviePage';


function MoviePoster({movie}) {
    
   

    return (
    
    <div className='moviePoster' key={movie.Series_Title}>
        <Link to={"../Movie"} state={movie} >  
    <img src={movie.primaryImage} alt="" />
    <h3>{movie.Series_Title}</h3></Link>
    </div>


    ); //movie object is passed to /Movie through the state, not prop. Location.State will then grab the object
}

export default MoviePoster;
