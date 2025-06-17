# Project Interactive Map 

- This interactive map shows important locations in the forestry industry on the coastal BC. 


## Purpose
- This suceeds the project from the 2024 summer at the BC Forest Discovery Centre.
- I hope someone else continues this project to update data in the long run.

___
___


## Instructions for Staffs
 - There are basically two operations to publish + two useful info.
    1. [Update Contents](#update-contents)
    2. [Upload it to the Code](#upload-codes)
    3. [Manual Uploading](#manual-uploading)
    4. [Common Error and Debugging](#common-error-and-debugging)

### 1 Update Contents<a name="update-contents"></a>
 - All numbers and contents are in the excel file (at S:\Curatorial\Writing\Research\Heritage Map\HeritageMap.xlsx) and photos are in the HeritageMap folder ("S:\Curatorial\Writing\Research\Heritage Map\HeritageMap").
    - Please update path as changed
 - For the data management, we want to use a few files.
 - Each row in the excel is assigned to hold all information about a site.
 - We want to edit the content in the "Sheet2" (click the bar at the bottom of the sheet).
    - Content in "Sheet3" is not editable. (Protection Passward: "Forest1234")
 - If you do not know, just blank the cells
 - **##IMPORTANT##**
   - When you use a quotation mark (') in any of the fields, **PUT a backslash ('\') behind it** so that the program recognize it as a string.
     - Such as) Mann's Lumber Company --> Mann\'s Lumber Company 

 - Below, explanations of each colunm
   - **Title**
     - The name of the site.
     - This will be the title of the popup.
   - **Company**
     - The name of company.
     - This is very arbiturary, depending on the creater.
       - We may need some createria here.  
   - **StartingYear, EndingYear**
     - The year of the operation/existence for community
       - StartingYear < EndginYear 
   - **Y-coordinate, X-coordinate**
     - The sufficiently precise location of the site.
       - Only need three decimals ??  
   - **Categories**
     - The type of the site
       - Select one from the list: **camp, sawmill, p&p, and community (and blank)**
   - **Location**
     - The region of the site.
     - It may not be accurate...
   - **List1 to List12**
     - Descriptions of the site
       - Trying to add information below:
         - <ins>Significant events in the chronological order (ie. when it started, how it closed ...)</ins>
         - <ins>Some statistics, such as number of workers, productions etc.</ins>
         - <ins>Descriptions about those who worked. </ins>
   - **Image1 to Image5**
     - The file name of images of the site
     - Save up to five images in the "images" folder (at S:\Curatorial\Writing\Research\Heritage Map\images\)
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
     - Otherwise, ignore.
   - **AdditionalSources**
     - Additional Sources which are worth reading.
   

### 2 Upload Codes <a name="upload-codes"></a>
 - All info must be ready on the "Sheet3" of the Excel file at S:\Curatorial\Writing\Research\Heritage Map\HeritageMap.xlsx.
    - "Sheet3" is not editable.
 - **Because excel file is still developing, I believe it should not be store in public repository.**
   - Therefore, you have to upload data by yourself. 
 - Here, the step to copy and paste the data on "Sheet3" (the excel file) to the data.js
   1. **Copy all the cells on the "Sheet3"** (Ctrl + A, then Ctrl + C)
   2. **Open "Heritage_Map_Project" and open "exp.txt" txt file**  ("\Heritage_Map_Project\exp.txt").
   3. **Replace all the lines with the content from the Excel file.**
      - Delete all the lines in the "exp.txt" file and Paste what you copied in the step 1
      - Check the first line starting with "{" and the last line ending with "}"
   4. **Double-click "download_and_modify_codes.sh" file.**
      - Enter "Y" or press Enter to select what files to be updated. 
        - Typically, you only need data.js to be updated, but if you have not editted other files, enter "Y" for all.
      - This will overwrite the codes in the folder "interactiveMap" from the github 
      - Then, it will write the content from the "exp.txt" file in the proper position of "data.js"

### 3 Manual Uploading <a name="manual-uploading"></a>
 - For someone wants to learn.
 - #### Pull Files
   1. Open git-bash program (probably have to type it in the search bar)
   2. Go to the "**interactiveMap**" folder in the "**Heritage_Map_Project**" 
   3. Type "git status" and "git restore" all files to be add/restore
      - **DO NOT** Push those files since they should not be published
   5. Type "git pull"
     
 - #### Edit the "data.js"
   1. Copy all the cells on the "Sheet3" in the Excel at S:\Curatorial\Writing\Research\Heritage Map\HeritageMap.xlsx
   2. Open interactiveMap/src/data.js
   3. Replace the line of "//Replace This Line (and Delete)" with what you copied in the step 1
      - ie. the point variable contains the Excel data. 


=======
### 4 Common Error and Debugging <a name="common-error-and-debugging"></a>
 - With the steps above, if you face some problem, check those followings:
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
  - [x] Texts
  - [x] Additional Sources
    - [ ] Link 
- [ ] Controls
  - [x] Allow users to zoom up by the region
    - [ ] Show the regional district   
  - [x] Allow users to filter points by the year
  - [x] Allow users to filter points by categories (sawmill, camp, pulp mill, town??)
- [ ] Map Setting
  - [ ] Satelite imagery
  - [ ] Topographic Map 
- [ ] Succession
  - [ ] Make instruction
  - [x] Shell to make it easier to update
  
## Distribution
 - All data should not be publicly available since those may include private information before revision. 
 - The repo and its codes are public.
