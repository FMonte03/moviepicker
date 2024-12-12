import json
import os

# Use os.path.expanduser to expand the '~' to the full home directory path
file_path = os.path.expanduser(r"~\Documents\MoviePicker\MovieSuggestion\src\currentposter.txt")

 
     
with open(file_path, "r") as fi:
        data = []
        
        for x in fi:
            print(x)
           
            if ( ("www.omdbapi.com" in x) or ("N/A" in x) or  ("not found" in x) or (x == "\t")):
                
                continue
            
            
            
            x = x.strip().split(",", 1)   
            print(x)
           
            
           
            item1 = x[0].split(":")
            item2 = x[1].split(":")
            print(item2)
             
            curObject = {
                    item1[0].strip(): item1[1].strip(),
                    item2[0].strip(): item2[2].strip()
                }
            data.append(curObject)

  
print(len(data))
with open('posters.json', 'w', encoding='utf-8') as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
print("Data successfully written to posters.json.")

 