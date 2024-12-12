import data from './MovieJson.json' assert { type: 'json' };
 

let genreSet = new Set([])
for(let i of data){
    let genres = i.Genre 
    genres = genres.split(',')
    genres = genres.map((x) => x.trim())
    
    for(let j of genres){
        if(!(genreSet.has(j))){
            genreSet.add(j)
        }
    }
    

}
genreSet.forEach((x) => console.log(x))

let genresArr = Array.from(genreSet)
genresArr.forEach((x) => {
    let count = 0 
    for(let i of data){
        if(i.Genre.includes(x))
            count++; 
    }

    console.log(x, count);
    
})