import data from './MovieJson.json' assert { type: 'json' };
 

let actors = []; 
for(let i of data){
let currentActors = [i.Star1, i.Star2,i.Star3, i.Star4]

for(let j of currentActors){
    if(!(actors.includes(j))){
        actors.push(j)

    }

    
}
}
let topActors = [] 

for(let i of actors){
    let count = 0; 
    for(let j of data){
        let actors = [j.Star1, j.Star2,j.Star3, j.Star4]
        if(actors.includes(i)){
            count++;
        }

    }
     
    if(count>7){topActors.push([i,count])}
}

topActors.forEach((x) => console.log(x))