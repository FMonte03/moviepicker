import data from './MoviesTrailers.json' 

export class MovieSearchActor{
    constructor(Actor){
        this.Actor = Actor; 
        this.Movies = data

    }
    
    getMovies() {

        let selectedMovies = []
       

        for(let i of this.Movies){
            let movieActors = [i.Star1, i.Star2, i.Star3, i.Star4]
            
            if(movieActors.includes(this.Actor)){
                selectedMovies.push(i)
            }
        }
 console.log(selectedMovies)
        function getRandomValues(movies){
            let randomValues = new Set([])
            while(randomValues.size<movies.length && randomValues.size < 12){
            let val = Math.floor(Math.random() * movies.length);
                randomValues.add(selectedMovies[val])
            }
            return randomValues; 
        }


        let randomValues = getRandomValues(selectedMovies)
        console.log(randomValues)


       
        return randomValues
    }

}



export default MovieSearchActor