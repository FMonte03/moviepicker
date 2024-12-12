import data from './MoviesTrailers.json' 

export class MovieSearchGenre{
    constructor(genre){
        this.genre = genre; 
        this.Movies = data
      
    }
    
    getMovies() {
        const selectedMovies = []
        for(let i of this.Movies){
            let genres = i.Genre
          
            genres = genres.split(",")
            genres = genres.map((x) => x.trim())
            if(genres.includes(this.genre)){
                selectedMovies.push(i)
            }
    
           
        } //12 movies look good on page 
        //function is currently repeating movies, fix: check if random value has been picked before. 
        let randomValues = new Set([])
        function getRandomValue(){
            let val = Math.floor(Math.random() * selectedMovies.length);
            return val; 
        }
        let filteredMovies = [] 
    
        while (randomValues.size<12){
        
            randomValues.add(getRandomValue()) 
        }

        for(let i of randomValues){
             
            filteredMovies.push(selectedMovies[i])
        }
        

        
       
        return filteredMovies
    }

}

const genre = new MovieSearchGenre('Sport')
genre.getMovies()



export default MovieSearchGenre