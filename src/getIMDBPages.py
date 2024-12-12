import requests
import pandas as pd 
import os
import json 
from bs4 import BeautifulSoup
from selenium import webdriver
from selenium.webdriver.chrome.service import Service
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

 
chrome_driver_path = r"C:/Users/Filippo/Documents/chromedriver-win64/chromedriver.exe"   
service = Service(chrome_driver_path)
options = webdriver.ChromeOptions()

 
driver = webdriver.Chrome(service=service, options=options)
driver.implicitly_wait(1)


headers = {
    "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/58.0.3029.110 Safari/537.3"
}#multiword ex Taylor Swift 
#https://www.imdb.com/find/?q=Taylor%20swift&ref_=nv_sr_sm
#pirates of the caribbean 
#https://www.imdb.com/find/?q=Pirates%20of%20the%20Caribbean&ref_=nv_sr_sm
#one word ex er
# https://www.imdb.com/find/?q=er&ref_=nv_sr_sm 
baseURL="https://www.imdb.com/find/?q=Taylor%20swift&ref_=nv_sr_sm"
item = "Taylor swift"
r = requests.get(baseURL, headers=headers)
soup = BeautifulSoup(r.content, 'html5lib')
html = soup.find_all('a', attrs={"class": "ipc-metadata-list-summary-item__t"})
testTitles = ["The Incredibles", "Big Fish", "Pirates of the Caribbean: The Curse of the Black Pearl", "Cinderella Man"]
#getMovieLink(item, baseURL): 
#case of two words or space in title 
baseURL = "https://www.imdb.com/find/?q=&ref_=nv_sr_sm"
title = "Pirates of The Caribean"

#getMovieLinks(movies, baseURL)
#getSearch URL 
def getSearchURL(title):  
    if(" " in title): 
        words = title.split(" ")
        fURL = baseURL[:29]+words[0]
        for i in range(len(words)-1): 
            fURL+= "%20"+words[i+1]
         
        return fURL+baseURL[29:]
    else: 
         
        return baseURL[:29]+title+baseURL[29:]


 
#item is title 
def getMovieLink(item, html): 
    for i in html: 
        
        if(item.lower() in str(i).lower() and ("/title/" in str(i).lower())): 
            aTagArr =  str(i).split(" ")
            
            mvHref = f"https://www.imdb.com{aTagArr[3][6:len(aTagArr[3])-1]}"
            
            return mvHref

def getTrailer(URL): 
    video_src = ""
    try:
  
         
        driver.get(URL)

  
        wait = WebDriverWait(driver, 1)   
        video_element = wait.until(EC.presence_of_element_located((By.CSS_SELECTOR, "video.jw-video")))

        
        video_src = video_element.get_attribute("src")
        
        

    except Exception as e:
        print("An error occurred:", e)
        return "error"
    finally:
         
        return video_src

def getMovieLinks(titles): 
    movieTitles = titles
    movieLinks = [] 
    for i in movieTitles: 
        URL = getSearchURL(i)
        r = requests.get(URL, headers=headers)
        soup = BeautifulSoup(r.content, 'html5lib')
        html = soup.find_all('a', attrs={"class": "ipc-metadata-list-summary-item__t"})
        mURL = getMovieLink(i, html)
        trailer = getTrailer(mURL)
        print(i, mURL, trailer, "\n")
        movieLinks.append([i, mURL, trailer])
        
    print(movieLinks)
    return movieLinks
 
 
 
    


def createJSON( ): 
    original = {}
    jsonPATH =  os.path.expanduser(r"~\Documents\MoviePicker\MovieSuggestion\newestMovieJSON.json")
    with open(jsonPATH, 'r' ,encoding='utf8') as file: 
        original= json.load(file)

    with open('MoviesTrailersPosters.json', 'w' , encoding='utf8') as file: 
        titles = [] 
        data = [] 
        for i in range(len(original)): 
            movieObj = original[i]
            titles.append(movieObj.get("Series_Title"))
        print(titles)
        links = getMovieLinks(titles=titles)
        j=0
        for i in links: 
            data.append(original[j])
            data[j]["IMDB_Link"] = i[1]
            data[j]["Trailer"] = i[2]
            j+=1 
        print(data)

createJSON()

        #json.dump(data, file, indent=4)
#jsonPATH =  os.path.expanduser(r"~\Documents\MoviePicker\MovieSuggestion\MoviesTrailers.json")
#with open(jsonPATH, 'r', encoding='utf8') as file: 
  #  file = json.load(file)
  #  j = 0 
  #  for i in file: 
      #  if i.get('Trailer') == "": 
      #      print(j, i.get('Series_Title'))
       # j +=1 
 
#createJSON()
def setMovies(): 
     
    input_file =jsonPATH
    output_file = "MoviesTrailers.json"

    
    with open(input_file, "r", encoding="utf-8") as file:
        movies = json.load(file)

    
    movies_with_trailers = [movie for movie in movies if "Trailer" in movie and movie["Trailer"]]

  
    with open(output_file, "w", encoding="utf-8") as file:
        json.dump(movies_with_trailers, file, indent=4)

  
 


