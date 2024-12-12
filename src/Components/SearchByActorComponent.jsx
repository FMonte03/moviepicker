import React, { useEffect, useState } from 'react';
import movieData from '../MoviesTrailers.json';
import MoviePoster from './MoviePoster.jsx';
import MovieSearchActor from '../MovieSearchActor.js';

const actorList = ["Al Pacino", "Christian Bale", "Tom Hanks", "Robert De Niro", "Brad Pitt", "Clint Eastwood", "Matt Damon", "Leonardo DiCaprio","Scarlett Johansson", "Johnny Depp", "Denzel Washington"];

function SearchByActorComponent() {
    const [currentActor, setActor] = useState("Select Actor");
    const [selectedMovies, setMovies] = useState([]);

    useEffect(() => {
        if (currentActor !== "Select Actor") {
            const movieSearch = new MovieSearchActor(currentActor);
        
            setMovies(Array.from(movieSearch.getMovies()));
        }
    }, [currentActor]); 

    return (
        <div className='ActorComp'>
            <div className="dropdown">
                <button className="dropbtn">{currentActor}
                    <i className="fa fa-caret-down"></i>
                </button>
                <div className="dropdown-content">
                    {actorList.map((actor, index) => (
                        <a key={index} onClick={() => setActor(actor)}>{actor}</a>
                    ))}
                </div>
            </div>

            <div className="movieCat">
                {selectedMovies.map((movie, index) => (
                    <MoviePoster key={index} movie={movie} />
                ))}
            </div>
        </div>
    );
}

export default SearchByActorComponent;
