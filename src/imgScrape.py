import requests
import pandas as pd 
import os
import json 


df = pd.read_csv('~\Documents\MoviePicker\MovieSuggestion\src\MovieData.csv')



headers = {'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_11_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/50.0.2661.102 Safari/537.36'}
url = 'https://www.omdbapi.com/?t='
apiKey = '&apikey=ebc63de1'
#r = requests.get(url=url, headers=headers)  The+Dark+Knight


movieList = [x for x in df['Series_Title']]
i = "The Shawshank Redemption"
movieList = movieList[968:]
posterList = [] 

for i in movieList: 
    formated = i.replace(' ', '+')
    fixUrl= f"{url}{formated}{apiKey}"
    #print(fixUrl)
    r = requests.get(url=fixUrl, headers=headers)
    data  = r.json()
    if data.get("Response") == "True":
        movieObject = {} 
        movieObject["Title"] = data.get("Title")
        movieObject['Poster'] = data.get("Poster")
        posterList.append(movieObject)
        print(f"Title: {data.get("Title") }, Poster: {data.get("Poster") }")
    else:
        print(f"Movie '{i}' not found in OMDb.")



with open('newposters.json', 'w', encoding='utf-8') as f:
    json.dump(posterList, f, ensure_ascii=False, indent=4)