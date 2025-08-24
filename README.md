# Project Interactive Map 

- This interactive map shows important locations in the forestry industry on the coastal BC. 


## Purpose
- This suceeds the project from the 2024 summer at the BC Forest Discovery Centre.
- I hope someone else continues this project to update data in a long run.

## Table of Content
 - [Resources](#resources)
 - [Updating Instrutions](#instructions)
 - [Methods](#method)
 - [Distribution](#distribution)
 - [Code Explanation](#code-explanation)



___
___

# Resources<a name="resources"></a>

## Branches
 - main
   - This branch includes the template txt, batch, and shell files, which is used for the tutorial below. 
   - [Download the main branch](https://github.com/Mufurun/interactiveMap/archive/refs/heads/main.zip)
 - student 
   - This branch DOES NOT include the template txt, batch, nor shell files, which is used for the tutorial below. 
   - [Download the student branch](https://github.com/Mufurun/interactiveMap/archive/refs/heads/student.zip)
 - netlify
   - This branch is used for deploying netlify app.
   - This is the web app: [Interactive Map Example (netlify)](https://interactivemaptemp.netlify.app/).
   - [Download the netlify branch](https://github.com/Mufurun/interactiveMap/archive/refs/heads/netlify.zip).
     - Run the program after extracting all the files.

## Tutorial Materials
### See What Template Program Looks Like.
- Click [Interactive Map Example (netlify)](https://interactivemaptemp.netlify.app/).

### Template Tutorial
 1. [Download the main branch](https://github.com/Mufurun/interactiveMap/archive/refs/heads/main.zip). 
 2. Double-click upload_template.sh (shell) or uploade_template.bat (batch) and follow the instruction to learn how to modify the data.js codes.
   - shell file works fast and clean whereas batch file is slow and messy
     - Because I'm not familiar with batch file...
 

___
___


# Instructions to Upload Data.<a name="instructions"></a>
 - Two operations to publish
    1. [Update Contents](#update-contents)
    2. [Upload it to the Code](#upload-codes)
    3. [Files and Folders](#file_folder)
 - Useful Info
    - [Common Error and Debugging](#common-error-and-debugging)

## Publish 
 - Because the Excel file is still developing, I believe it should not be stored in public repository.
   - Everything is in the Heritage_Map_Project folder (S:\Curatorial\Heritage_Map_Project)
   - Below, the Heritage_Map_Project folder refers to S:\Curatorial\Heritage_Map_Project
 - The program uses both the interactiveMap folder (contents) and the HeritageMap folder (photos)
## 1 Update Contents<a name="update-contents"></a>
 - All numbers and contents are in the excel file (at Heritage_Map_Project\HeritageMap.xlsx) and photos are in the HeritageMap folder ("Heritage_Map_Project\HeritageMap").
   - For the data management, we want to use a few files.
 - Each row in the excel is assigned to hold all information about a site.
 - We want to edit the content in the "Sheet2" (click the bar at the bottom of the sheet).
    - Content in "Sheet3" is not editable. (Protection Passward: "Forest1234")
 - If you do not know, just leave the blank at the cells
 - **##IMPORTANT##**
   - When you use a single quotation mark (') in any of those cells, **PUT a backslash ('\\') behind it** so that the excel recognizes it as a single string.
     - Such as) Mann's Lumber Company --> Mann\\'s Lumber Company 
   - ** DO NOT INSERT A ROW**
     - <ins>Inserted Row would not turn into the Sheet3. </ins>
     - You may add the site on a new row and sort the entire table.

 - Below, explanations of each colunm in the sheet:
   - **Title**
     - The name of the site.
     - This will be the title of the popup.
   - **Company**
     - The name of company.
     - This is very arbiturary, depending on the creater.
       - We may need some createria.  
   - **StartingYear, EndingYear**
     - The year of the operation (camp, sawmill)/ existence (community)
       - StartingYear < EndginYear 
   - **Y-coordinate, X-coordinate**
     - The sufficiently precise location of the site.
       - Only need three decimal places??  
   - **Categories**
     - The type of the site
       - Select one from the list: **'camp', 'sawmill', 'p&p', 'community', and 'BCFS' (and blank)**
   - **Location**
     - The region of the site.
     - It may not be accurate...
       - Select from those names of L column of sheet4 in the excel file:
         - Common ones: 
           - 'VancouverIsland/Coast',
             - 'RegionalDistrictofAlberni-Clayoquot', 'PortAlberni',
             - 'CapitalRegionalDistrict', 'CentralSaanich', 'Colwood', 'Esquimalt', 'Highlands', 'JordanRiver', 'Langford', 'Metchosin', 'NorthSaanich', 'OakBay', 'PortRenfrew', 'Saanich', 'SaltspringIsland', 'Sidney', 'Sooke', 'Victoria', 'ViewRoyal',
             - 'ComoxValleyRegionalDistrict', 'BaynesSound-Denman/HornbyIslands', 'Comox', 'Courtenay', 'Cumberland','Puntledge/BlackCreek',
             - 'CowichanValleyRegionalDistrict', 'Chemainus', 'CobbleHill', 'CowichanBay', 'CowichanStation', 'Duncan', 'Glenora', 'Ladysmith', 'LakeCowichan', 'Malahat', 'MillBay', 'NorthCowichan', 'Sahtlam', 'Saltair', 'ShawniganLake', 'SouthLlakeCowichan', 'Youbou',
             - 'RegionalDistrictofMountWaddington', 'AlertBay', 'PortAlice', 'PortHardy', 'PortMcNeill',
             - 'RegionalDistrictofNanaimo', 'Lantzville', 'Nanaimo', 'Parksville', 'Cassidy', 'QualicumBeach', '
             - qathetRegionalDistrict', 'PowellRiver',
             - 'StrathconaRegionalDistrict', 'CampbellRiver', 'Cortes', 'DiscoveryIslands/MainlandInlets', 'GoldRiver', 'Kyuquot/Nootka-Sayward', 'OysterBay/ButtleLake',
         - 'Mainland/Southwest',
           - 'MetroVancouverRegionalDistrict', 'Anmore', 'Belcarra', 'BowenIsland', 'Burnaby', 'Coquitlam', 'Delta', 'Langley', 'LionsBay', 'MapleRidge', 'NewWestminster', 'NorthVancouver', 'PittMeadows', 'PortCoquitlam', 'PortMoody', 'Richmond', 'Surrey', 'Vancouver', 'WestVancouver', 'WhiteRock',



   - **List1 to List12**
     - Descriptions of the site
     - If you know the year, put the year first (eg: yyyy: description)
     - **Follow the format for years**
       - *YYYY:* Start a sentence after a space.        eg) 2002: For specific year.
       - *YYY0s:* Start a sentence after a space.       eg) 2010s: In the 2010s.
       - *YYYY-YYYY:* Start a sentence after a space.   eg) 2002-2025: If the year has a range.
       - *YYY0s-YYYY:* Start a sentence after a space.  eg) 2000s-2011: If the year has a range but not sure the start.
       - *YYYY-YYY0s:* Start a sentence after a space.  eg) 2008-2020s: If the year has a range but not sure the end.
       - *YYY0s-YYY0s:* Start a sentence after a space. eg) 2010s-2030s: If the year has a range but not sure both the start and the end.
       - *-YYYY:* Start a sentence after a space.       eg) -2025: Until 2025.
       - *YYYY-:* Start a sentence after a space.       eg) 2009: Since 2009.
       - *-YYY0s:* Start a sentence after a space.      eg) -2010s: Until the 2010s.
       - *YYY0s-:* Start a sentence after a space.      eg) 2000s-: Since the 2000s.
       
       
     - Trying to add information below:
       - <ins>Significant events in the chronological order (ie. when it started, how it closed ...)</ins>
       - <ins>Some statistics, such as number of workers, productions etc.</ins>
       - <ins>Descriptions about those who worked. </ins>
   - **Image1 to Image5**
     - The file name of images of the site
     - Save up to five images in the "images" folder (at Heritage_Map_Project\images\)
       - Preferably, photos with people working.
       - Typically, name it as "TitleCompanyNumber.png" (eg. Camp1HillcrestLumber01.png).
         - Just have to ***be distinctive***. 
     - <ins>Image1-5 have to be the ***exactly*** same name as the name of the photos ***without extension (.png)*** </ins>
       - ***Photos must be png right now*** due to the code in Excel
         - Just because publisher converted them to be...
       - If something else is better, modify excel column S-W in "Sheet3" (Password: Forest1234)
       - a tool to convert photo.
         - [ImageMagick](https://imagemagick.org/index.php) 
   - **ImageText1 to ImageText5**
     - Explanations of the images1-5
     - Style: text, year (source)
   - **ImageLink1 to ImageLink5**
     - If there is link which you retrieve the image from, put here.
     - Otherwise, Leave it blank.
   - **AdditionalSources**
     - Additional Sources which are worth reading.
   - **AddSrcLink1 to AddSrcLink7**
     - If there is link for the additional sources, put here.
   - **Publish**
     - If you think content has error/do not want publish for any reason, put somwthing here.
     - Otherwise, Clear the cell.
    
 - **DO NOT FORGET TO SAVE WHEN YOU UPDATE THE FILE**


   

## 2 Upload Codes <a name="upload-codes"></a>
 - All info must be ready on the "Sheet3" of the Excel file at Heritage_Map_Project\HeritageMap.xlsx.
    - "Sheet3" is not editable.
    - Backup: S:\Curatorial\Heritage Map\HeritageMap.xlsx
 - **Because excel file is still developing, I believe it should not be stored in public repository.**
   - Therefore, you have to upload data by yourself. 
 - Here, the step to copy and paste the data on "Sheet3" (the excel file) to the data.js of the program. 
   1. **Copy all the cells on the "Sheet3"** (Ctrl + A -> then Ctrl + C)
   2. **Open "Heritage_Map_Project" and open "exp.txt" file**  ("\Heritage_Map_Project\exp.txt").
   3. **Replace all the lines with the content from the Excel file and Save.**
      - Delete all the lines in the "exp.txt" file and Paste what you copied in the step 1. (Ctrl + A -> Ctrl + V -> Ctrl + S)
      - **DO NOT FORGET TO SAVE THE FILE** (Ctr + S)
   4. **Double-click "modify_codes.bat" file.**
      - Follow the Instruction on the console.
        - Enter "Y" or "N" to make it update the map with data.
        - Then, it reads the content from the "exp.txt" file and pastes them at the proper position in "data.js".
        - Enter "Y" or "N" to select if you want the perfect map to publish or draft map to see all sites with errors. 
          - This rewrites the codes in the folder "interactiveMap" from the github 


## 3 Files and Folders for the Web <a name="file_folder"></a>
- Those below are the files to function the web app.
- It is the easiest to submit two folders (Heritage_Map and interactiveMap) although the interactiveMap folder includes something unneccessary for it.
-  See [Code Explanation](#code-explanation) for the farther information

   - Photos:            Heritage_Map_Project/Heritage_Map
   - Other Program:     Heritage_Map_Project/interactiveMap
     - HTML:            Heritage_Map_Project/interactiveMap/index.html
     - JavaScript:      Heritage_Map_Project/interactiveMap/data.js
     - JavaScript:      Heritage_Map_Project/interactiveMap/static_data.js
     - JavaScript:      Heritage_Map_Project/interactiveMap/function.js
     - CSS Style:       Heritage_Map_Project/interactiveMap/styles.css
     - CSS Style:       Heritage_Map_Project/interactiveMap/image_styles.css
     - CSS Style:       Heritage_Map_Project/interactiveMap/regcon.css
     - CSS Style:       Heritage_Map_Project/interactiveMap/filcon.css




===============================================================================

## Common Error and Debugging <a name="common-error-and-debugging"></a>
 - With the steps above, if you face some problem, check those followings:
  - **Run update_template.sh and Follow the instruction**
    - This program will use data from template.txt, which has already an error.
    - You can check if the program runs without your data from the excel file. 
  - **Excel Data**
    - Is there any error in Excel file, especially "Sheet3"?
  - **export.txt File**
    - Are all the lines starting with "{" and ending with "}," (the ending can be "}")
  - **Run the modify_codes.bat**
    - If there is crucial problem to run html program (backslash-before-quotation-mark problem), it will let you know which row to be checked. 
  - **Run the index.html**
    - If program does not read any data of sites, it will show "Seems you have not updated the data.js file."
      - Upload the data by [Upload it to the Code](#upload-codes).
    - If program breaks during reading data, it will show "Seems to have at least an error."
      - Check the excel file to find a problem (Cooked, since it's too hard to find single error...).

___
___


## Methods<a name="method"></a>
 ### Map
  I will do followings (check if they are done):

- [x] Data Management
  - [x] Organize the location
  - [x] Photos
  - [x] Texts
  - [x] Title
  - [x] Years (range)
  - [x] Descriptions
  - [x] Additional Sources
- [ ] Data Upload
  - [x] Title
  - [x] Location
  - [x] Year
  - [x] Images
    - [x] Explanation
    - [x] Link
    - [x] Easy swap
  - [x] Texts
  - [x] Additional Sources
    - [x] Link
  - [x] When I open the map with narrow screen (for phone), the control section covers the popup sometimes, so want to open the popup a bit lower than now. 
- [ ] Controls
  - [x] Allow users to zoom up by the region
    - [ ] Show the regional district
    - [x] fly to the regions
    - [x] Only the area to be shown 
  - [x] Allow users to filter points by the year
  - [x] Allow users to filter points by categories (sawmill, camp, pulp mill, town??)
- [x] Popup Styles
  - [x] Do not put behind the control sections
- [x] Map Setting
  - [x] Show complete sites and draft sites (blue and orange respectively)
  - [x] Satelite imagery
  - [x] Topographic Map 
    - [x] Attribution 
- [ ] Succession
  - [ ] Make instructions
  - [x] Shell to make it easier to update
  - [x] Need a batch file for windows
  - [x] Allow programmer to select if they want coplete map or draft map.
- [ ] Template
  - [x] [template website with netlify](https://interactivemaptemp.netlify.app/)
  - [x] template shell/batch
  - [ ] template data
    - [x] Written data
    - [ ] images
  - [x] the template instruction
        
## Distribution<a name="distribution"></a>
 - All data should not be publicly available since those may include private information before revision. 
 - The repo and its codes can be public.


___
___

# Codes Explanation<a name="code-explanation"></a>

## Dependancies
### Main Program
  - index.html
    - src/function.js
    - src/data.js
    - src/static_data.js
    - src/styles.css
    - src/image_styles.css
    - src/regcon_styles.css
    - src/filcon_styles.css
    - ../HeritageMap/
      - images
(For all_markers, additionally;)
    - terms-conditions/terms-conditions.js 
    - terms-conditions/terms-conditions.css 

### Uploading Program    
  - update_template.sh/update_template.bat/modify_codes.bat
    - src/data.js
    - var/all_markers.txt
    - var/publish.txt


