import requests
import pandas as pd 
import os
import json 


file_path = os.path.expanduser(r"~\Documents\MoviePicker\MovieSuggestion\newposters.json")

pictures =""
movies=""
with open(file_path, encoding="utf8") as file:
    pictures = json.load(file)
    

with open('src/MovieJson.json', encoding="utf8") as file: 
    movies = json.load(file)
    


with open('newestMovieJSON.json', 'w', encoding='utf8') as file: 
    data = [] 
    for i in pictures:
        for j in movies: 
            if(i.get("Title") == j.get("Series_Title")): 
                tempMap = j 
                tempMap.update({"primaryImage": i.get("Poster")}) 
                data.append(tempMap)
                print(tempMap)
                break
            else: 
                continue
 
  
      
       
    #    print(i)
     #   newObj = movies[i]
      #  newObj.update(pictures[i])
       ##print(newObj)
    json.dump(data, file, ensure_ascii=False, indent=4)
print("done")
#edit old json to add a new key to movie objects, take img key value pair from new posters and add it to corresponding object as primary img