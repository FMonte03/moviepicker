import data from './MoviesTrailers.json'




export class MovieSelector
{
    constructor(Question1, Question2, Question3)
    {   
        //what is your mood? 
        this.Question1 = Question1
        //how long should the movie be? 
        this.Question2 = Question2
        //does it matter when it was released? 
        this.Question3 = Question3
        this.genres = this.getGenres()
        this.currentPool = [] 
    }

    getGenres(){ 
            let genres = new Set()
            for(let i in data ){
                let movieGenre =  data[i]['Genre'].split(",")
                for(let j of movieGenre){
                    j = j.trim()
                    if(genres.has(j) ){        
                        }
                        else(
                            genres.add(j)
                        )
                }
            }
    }
   
 
    //set the object's movie pool to follow the constraints on q1 , Maybe update this so that if a movie has generes that are in other genre sets, it doesnt get added. 
    selectQ1(){
        let movies = data
        const happyGenres = new Set(["Comedy", "Family", "Fantasy", "Adventure", "Animation"]);
        const angryGenres = new Set(["Action", "Crime", "War", "Thriller"]);
        const sadGenres = new Set(["Drama", "Romance", "Biography", "History"]);
        const indifferentGenres = new Set(["Sci-Fi", "Western", "Animation"]);
        
        
        if(this.Question1 == "Happy"){
            for(let i in movies){  
                let movieGenre =  data[i]['Genre'].split(",")
                for(let j of movieGenre){
                     j = j.trim()
                     if(happyGenres.has(j) && !(this.currentPool.includes(movies[i]) )){ //to fix this. make a set of genres for current movie, and make sure they overlap with target genre. 
                                                                                        //Don't compare 1 by one with for loop. 10/4
                               
                        this.currentPool.push(movies[i])
                    }
                        
                }
                        }

        }

        else if(this.Question1 == "Sad"){
            for(let i in movies){
                let movieGenre =  data[i]['Genre'].split(",")
                for(let j of movieGenre){
                     j = j.trim()
                     if(sadGenres.has(j) && !(this.currentPool.includes(movies[i])) && !(happyGenres.has(j)) && !(angryGenres.has(j)) && !(indifferentGenres.has(j)) ){
                               
                        this.currentPool.push(movies[i])
                    }
                        
                }
                        }

            }
            if(this.Question1 == "Angry"){
                for(let i in movies){
                    let movieGenre =  data[i]['Genre'].split(",")
                    for(let j of movieGenre){
                         j = j.trim()
                         if(angryGenres.has(j) && !(this.currentPool.includes(movies[i])) && !(happyGenres.has(j)) && !(sadGenres.has(j)) && !(indifferentGenres.has(j))){
                               
                            this.currentPool.push(movies[i])
                        }
                            
                    }
                            }
    
            }
            else if(this.Question1 == "Indifferent"){
                for(let i in movies){
                    let movieGenre =  data[i]['Genre'].split(",")
                    for(let j of movieGenre){
                         j = j.trim()
                            if(indifferentGenres.has(j) && !(this.currentPool.includes(movies[i])) && !(happyGenres.has(j)) && !(angryGenres.has(j)) && !(angryGenres.has(j))){
                               
                                this.currentPool.push(movies[i])
                            }
                            
                    }
                            }
    
            }
        
    }
    //get the pool from q1 and filter it based on constraints from q2 and set that to the pool
    selectQ2(){ 
        let movies = this.currentPool; 
        let filteredPool = [] 
        for(let i of movies){ //for in returns indexes, for of returns elements, when dealing with arrays. 
            let cur = i['Runtime'].split(" ")  
            let length = parseInt(cur[0])
           
            if(this.Question2 == "Short" && 100 >= length){
                filteredPool.push(i)
            }
            else if(this.Question2 == "Medium" &&  length <130){
                filteredPool.push(i)
            }
            else if(this.Question2 == "Long" && length >= 130){
                filteredPool.push(i)
            }

        }
         if(this.Question2 == "Doesn't matter"){
                this.currentPool = movies
            }
            else{
                this.currentPool = filteredPool
            }

    }


    //get movie pool from q2 and filter it to match q3 
    //"Doesn't matter...", "Last 10 years", "Last 20 years", "Last 30 years", "Really old"
    selectQ3(){
        let movies = this.currentPool; 
        let q3Filter = [] 
        const currentYear = 2024
        for(let i of movies){
           
           
            let releaseYear = i["Released_Year"]
             
            
            if(this.Question3 == "Last 10 years" && (currentYear - releaseYear <= 10)){
                q3Filter.push(i)
               
            }
            else if(this.Question3 == "Last 20 years" && (currentYear - releaseYear <= 20)){
                q3Filter.push(i)
              
            }
            else if(this.Question3 == "Last 30 years" && (currentYear - releaseYear <= 30)){
                q3Filter.push(i)
            
            }
            else if(this.Question3 == "Really old" && (currentYear - releaseYear >= 30)){
                q3Filter.push(i)
                
            }
            else if(this.Question3 == "Doesn't matter"){
                q3Filter.push(i)
               
            }
        }
        this.currentPool = q3Filter
       
    }

    selectMovie(){
       
        this.selectQ1(); 
        this.selectQ2(); 
        this.selectQ3(); 
        

       let movie = this.currentPool[ Math.floor(Math.random() * this.currentPool.length)] 
      

        return movie; 
    }
} 

export default MovieSelector
const answers = [""]
const movieSelector = new MovieSelector(answers[0], answers[1],answers[2]);
const selectedMovie = movieSelector.selectMovie();


