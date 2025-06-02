# Project Interactive Map 

- This interactive map shows the important locations of forestry industry on the coastal BC. 



## Purpose
- This suceeds the project from 2024 summer. 
- Everything is attributed to the BC Forest Discovery Centre

___
___

## Instructions for Staffs
 - There are two steps to improve this project
  1. Update Contents
  2. Upload it to the Code
  3. Download the Code


### 1 Update Contents
 - All numbers and contents are in the excel file (at S:\Curatorial\Writing\Research\Heritage Map\HeritageMap.xlsx) and photos are in the HeritageMap folder ("S:\Curatorial\Writing\Research\Heritage Map\HeritageMap").
    - Please update as changed
 - For the data management, we want to use a few files.
 - Each row in the excel is assigned to hold all information about a site.
 - We want to edit the content in the "Sheet2" (click the bar at the bottom of the sheet).
    - Content in "Sheet3" is not editable. (Protection Passward: "Forest1234")
 - If you do not know, just blank the cells
 - Below, explanations of each colunm
  - ### Title
    - The name of the site.
    - This will be the title of the popup.
  - ### Company
    - The name of company. This is very arbiturary, depending on the creater.
      - We may need some createria here.  
  - ### StartingYear, EndingYear
    - The year of the operation/existence for community
      - StartingYear < EndginYear 
  - ### Y-coordinate, X-coordinate
    - The sufficiently precise location of the site.
      - Only need three decimals ??  
  - ### Categories
    - The type of the site
      - Select one from the list: **camp, sawmill, p&p, and community (and blank)**
  - ### Location
    - The region of the site.
    - It may not be accurate...
  - ### List1 to List12
    - Descriptions of the site
      - Trying to add information below:
        - write significant events in chronological order
        -  Some statistics, such as number of workers, productions etc.
  - ### Image1 to Image5
    - The file name of images of the site
    - <ins>***Those have to be the same as the name of the photos without extension (.png)***</ins>
      - <ins>***Photos must be png***</ins>; The scanner would usually generate png, but otherwise, convert.
      - Preferably, photos with people working.
  - ### ImageText1 to ImageText5
    - Explanations of the image
  - ### AdditionalSources
    - Additional Source that is worth reading.

## 2 Upload Codes
 - All info must be ready on the "Sheet3"
  - "Sheet3" is not editable.
 - Here, the step to copy and paste those to the data.js
   1. #### Copy all cells on the Sheet3
   2. #### Open "interactiveMap" and open "src" folder ("\Interactive_Map_Project\interactiveMap\src\").
   3. #### Right-click on the "data.js" file and select "Edit in Notepad"
   4. #### Delete the section inside "points"
     - Inside the [] of points
     - Marked by lines
   5. #### Paste the Excel content in the [] where you delete.
   6. #### Save the file.

   7. #### Copy the Photo Folder at "S:\Curatorial\Writing\Research\Heritage Map\HeritageMap"
   8. #### Open "interactiveMap" and open "src" folder.
   9. #### Right-click to paste the folder there ("\Interactive_Map_Project\interactiveMap\src\"). 

## 3 Download the Code
 - In case someone want to download the original codes.
 - Here is the step to pull the files
   1. Double-click the "download_original.sh" file.
      - This will overwrite the codes in the folder "interactiveMap"
   2. Now, you have to go through Step 2 Upload Codes to upload the data. 

___
___

## Methods
### Map
  I will do (check if they are done):
- [x] Data Management
  - [x] Organize the location
  - [x] Store some photos
  - [x] Store texts
  - [x] Tittle
  - [x] Years (range)
- [ ] Data Upload
  - [x] Tittle
  - [x] Location
  - [x] Year
  - [x] Images
  - [ ] Texts
  - [ ] Additional Sources 
- [ ] Controls
  - [x] Allow users to zoom up by the region
    - [ ] Show the regional district   
  - [ ] Allow users to filter points by the year
  - [x] Allow users to filter points by categories (sawmill, camp, pulp mill, town??)
- [ ] use something like satelite imagery later, but right now I am using just a normal map
  
## Distribution
 - All data should not be publicly available since those may include private information before revision. 
 - The repo and its codes are public.
