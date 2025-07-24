# Project Interactive Map 

- This interactive map shows important locations in the forestry industry on the coastal BC. 


## Purpose
- This suceeds the project from the 2024 summer at the BC Forest Discovery Centre.
- I hope someone else continues this project to update data in the long run.

___
___


# Template Tutorial
 - Double-click upload_template.sh or uploade_template.bat and follow the instruction to learn how to modify the codes.
 - shell file works fast and clean whereas batch file is slow and messy
   - Because I'm not familiar with batch file...
   - Let me improve the program
 

___
___


# Instructions for Staffs
 - There are basically two operations to publish
    1. [Update Contents](#update-contents)
    2. [Upload it to the Code](#upload-codes)
 - Useful Info
    - [Manual Uploading](#manual-uploading)
    - [Common Error and Debugging](#common-error-and-debugging)

## Publish 
 - Because excel file is still developing, I believe it should not be stored in public repository.
   - Everything is in the Heritage_Map_Project folder (S:\Curatorial\Writing\Heritage_Map_Project)
   - Below Heritage_Map_Project folder refers to S:\Curatorial\Writing\Heritage_Map_Project
### 1 Update Contents<a name="update-contents"></a>
 - All numbers and contents are in the excel file (at Heritage_Map_Project\HeritageMap.xlsx) and photos are in the HeritageMap folder ("Heritage_Map_Project\HeritageMap").
    - Please update path as changed
 - For the data management, we want to use a few integrated files.
 - Each row in the excel is assigned to hold all information about a site.
 - We want to edit the content in the "Sheet2" (click the bar at the bottom of the sheet).
    - Content in "Sheet3" is not editable. (Protection Passward: "Forest1234")
 - If you do not know, just leave the blank at the cells
 - **##IMPORTANT##**
   - When you use a single quotation mark (') in any of the fields, **PUT a backslash ('\\') behind it** so that the excel recognizes it as a single string.
     - Such as) Mann's Lumber Company --> Mann\\'s Lumber Company 
   - ** DO NOT INSERT A ROW**
    - <ins>Inserted Row would not turn into the Sheet3. </ins>
    - You have to add the site on a new row and sort the entire table.

 - Below, explanations of each colunm
   - **Title**
     - The name of the site.
     - This will be the title of the popup.
   - **Company**
     - The name of company.
     - This is very arbiturary, depending on the creater.
       - We may need some createria.  
   - **StartingYear, EndingYear**
     - The year of the operation (camp, sawmill)/existence (community)
       - StartingYear < EndginYear 
   - **Y-coordinate, X-coordinate**
     - The sufficiently precise location of the site.
       - Only need three decimals ??  
   - **Categories**
     - The type of the site
       - Select one from the list: **'camp', 'sawmill', 'p&p', 'community', and 'BCFS' (and blank)**
   - **Location**
     - The region of the site.
     - It may not be accurate...
       - Select from the followings as detailed as you know:
         - 'coastalBC', 'vancouverIsland', 'haidaGwaii', 'vancouver', 'capital, 'cowichanValley', 'nanaimoo', 'comoxValley', 'alberniClayoquot', 'victoria', 'viewRoyal', 'sooke', 'ladysmith', 'lakeCowichan', 'northCowichan', 'chemainus', 'cowichanBay', 'shawniganLake', 'ptRenfrew', 'nanaimo', 'courtenay', 'alberni', 'strathcona', 'campbell'


   - **List1 to List12**
     - Descriptions of the site
     - If you know the year, put year first (eg: yyyy: description)
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
         - Just have to be distinctive. 
     - <ins>Image1-5 have to be the ***exactly*** same name as the name of the photos ***without extension (.png)*** </ins>
       - ***Photos must be png right now*** due to the code in Excel
         - Just because publisher converted them to be...
       - If something else is better, modify excel column S-W in "Sheet3" 
       - a tool to convert.
         - [ImageMagick](https://imagemagick.org/index.php) 
   - **ImageText1 to ImageText5**
     - Explanations of the images1-5
   - **ImageLink1 to ImageLink5**
     - If there is link which you retrieve the image from, put here.
     - Otherwise, Leave it blank.
   - **AdditionalSources**
     - Additional Sources which are worth reading.
   - **AddSrcLink1 to AddSrcLink7**
     - If there is link for the additional sources, put here
   - **Publish**
     - If you think content has error/do not want publish due to any reason, put somwthing here.
     - Otherwise, Clear the cell.
    
 - **DO NOT FORGET TO SAVE WHEN YOU UPDATE THE FILE**
   

### 2 Upload Codes <a name="upload-codes"></a>
 - All info must be ready on the "Sheet3" of the Excel file at Heritage_Map_Project\HeritageMap.xlsx.
    - "Sheet3" is not editable.
    - Backup: S:\Curatorial\Writing\Research\Heritage Map\HeritageMap.xlsx
 - **Because excel file is still developing, I believe it should not be stored in public repository.**
   - Therefore, you have to upload data by yourself. 
 - Here, the step to copy and paste the data on "Sheet3" (the excel file) to the data.js of the program. 
   1. **Copy all the cells on the "Sheet3"** (Ctrl + A, then Ctrl + C)
   2. **Open "Heritage_Map_Project" and open "exp.txt" file**  ("\Heritage_Map_Project\exp.txt").
   3. **Replace all the lines with the content from the Excel file and Save.**
      - Delete all the lines in the "exp.txt" file and Paste what you copied in the step 1.
      - **DO NOT FORGET TO SAVE THE FILE** (Ctr + S)
   4. **Double-click "modify_codes.bat" file.**
      - Follow the Instruction on the console.
        - The console shows a bit of mess because I'm not familiar with batch file, so be aptient for a few seconds to follow the instruction.
        - Enter "Y" or "N" to select if you want the perfect map to publish or draft map to see all sites. 
        - This rewrites the codes in the folder "interactiveMap" from the github 
        - Then, it reads the content from the "exp.txt" file and pastes them in the proper position of "data.js"
      - If you have installed git bash, then you might use **download_and_modify_codes.sh**
        - A lot faster and easy.
        - Also it download the newest version of program.


### Manual Uploading <a name="manual-uploading"></a>
 - For someone wants to learn.
 - #### Pull Files
   1. Open git-bash program (probably have to type it in the search bar)
   2. Go to the "**interactiveMap**" folder in the "**Heritage_Map_Project**" 
   3. Type "git status" and "git restore" all files (at least ) to be add/restore
      - This will allow you to download those files from github. 
   5. Type "git pull"
      - **DO NOT** Push those files since they should not be public repo.
     
 - #### Edit the "data.js"
   1. Copy all the cells on the "Sheet3" in the Excel file at Heritage_Map_Project\HeritageMap.xlsx
   2. Open Heritage_Map_Project\interactiveMap\src\data.js
   3. Replace the line of "//Replace This Line (and Delete)" with what you copied in the step 1
      - ie. the point variable contains all the Excel data.
 


=======
### Common Error and Debugging <a name="common-error-and-debugging"></a>
 - With the steps above, if you face some problem, check those followings:
  - **Run update_template.sh and Follow the instruction**
    - This program will use data from template.txt, which has already an error.
    - You can check if the program runs without your data from the excel file. 
  - **Excel Data**
    - Is there any error in Excel file, especially "Sheet3"?
  - **export.txt File**
    - Are all the lines starting with "{" and ending with "}," (the ending can be "}") 

___
___


## Methods
 ### Map
  I will do (check if they are done):

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
  - [ ] When I open the map with narrow screen (for phone), the control section covers the popup sometimes, so want to open the popup a bit lower than now. 
- [ ] Controls
  - [x] Allow users to zoom up by the region
    - [ ] Show the regional district
    - [ ] Only the area to be shown 
  - [x] Allow users to filter points by the year
  - [x] Allow users to filter points by categories (sawmill, camp, pulp mill, town??)
- [x] Map Setting
  - [x] Show complete sites and draft sites (blue and orange respectively)
  - [x] Satelite imagery
  - [x] Topographic Map 
    - [ ] Attribution 
- [ ] Succession
  - [ ] Make instructions
  - [x] Shell to make it easier to update
  - [x] Need a batch file for windows
  - [x] Allow programmer to select if they want coplete map or draft map. 
        
## Distribution
 - All data should not be publicly available since those may include private information before revision. 
 - The repo and its codes are public.
