/*
#####################
####    Icons    ####
#####################

      Icons to make them visibly identifiable
        greenIcon: error
        sawmill_icon
        camp_icon
        paper_icon
        community_icon


      I don't know how but it would be great if it change the colour accordingly to the layer change

    */
      
      const greenIcon = L.icon({
        iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-orange.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });

      const sawmill_icon1 = L.icon({
        iconUrl: './icon/saw.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      const camp_icon1 = L.icon({
        iconUrl: './icon/camp.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      const paper_icon1 = L.icon({
        iconUrl: './icon/paper.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      const community_icon1 = L.icon({
        iconUrl: './icon/community.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      var sawmill_icon = sawmill_icon1;
      var camp_icon = camp_icon1;
      var paper_icon = paper_icon1;
      var community_icon = community_icon1;



/*
  #####################################
  #####     Functions for Map     #####
  #####################################


      createPopupContent(point, rowNum = 0);
      image_popup(image_in_list, next);
      closeSection()
      Change_image()
      updateParentHeight(element);
      updateSibling(element);
      updateChildren(element);
      customControlhtml(count_area);
      size_for_phone(map);
      filterMarker(map, markers, allTime = false, allSite = false);
      listMarkers(map, markers, region);

  */
      


/*
#######################################################
######     Functions for  createPopupContent     ######
#######################################################


   createPopupContent()
      image_popup(image_in_list, next)
        closeSection()
        Change_image()
      


  **********************************************
  *******  FUNCTION createPopupContent()  ******
  **********************************************
  
    Create popup content and listeners with rowNum if all_markers
    HTML: 
      container: div (popup-content)
          (row: h6 (year))
          title: strong (title)
          company: strong (company)
          imageSection: span 
              each_image_button: button (image-button) *1
                  each_image: img (image)
          year: h6 (year)
          description: ul (description)
              each_description: li (each_descript) for lines begging with yeas as *2, or 
              each_description: li (each_descript_li) for other lines
          addSrc: H6 (year)
          additionalSource: ul (description)
              each_addSrc: li (each_discrpt_li) *3
             
        *1: 
            Up to five photos right now:
            This runs image_popup(image_in_list, next)
              next is 
                0 if the image is the first one
                1, 2, or 3 if the image is middle
                4 if the image is the last one

        *2: 
            The list of  examples:
                  YYYY: 
                  YYYY-:
                  -YYYY:
                  YYY0s: 
                  YYY0s-:
                  -YYY0s:
                  YYYY-YYYY: 
                  YYY0s-YYYY:
                  YYYY-YYY0s:
                  YYY0s-YYY0s:

        *3:
            The list can have a url link if it is supplied.
      
  
  */
   function createPopupContent(point, rowNum = 0) {
  
    //div
        const container = document.createElement('div');
        container.className = 'popup-content';
    
    //Row Number
        if (rowNum>0){
          const row = document.createElement('h6');
          row.textContent = "#"+ rowNum + " in the data.js/the data file";
          row.className = 'year';
          container.appendChild(row);
        }
  
    //title
        const title = document.createElement('strong');
        title.textContent = point.title;
        title.className = 'title';
        container.appendChild(title);
    //company
        const company = document.createElement('strong');
        company.textContent = point.company;
        company.className = 'company';
        container.appendChild(company);
  
    //image 
        const imageSection = document.createElement('span');
        const list_images = [{
          image: point.image1,
          imageText: point.imageText1,
          imageLink: point.imageLink1,
          imageId:'img1'
        }, {
          image: point.image2,
          imageText: point.imageText2,
          imageLink: point.imageLink2,
          imageId:'img2'
        }, {
          image: point.image3,
          imageText: point.imageText3,
          imageLink: point.imageLink3,
          imageId:'img3'
        }, {
          image: point.image4,
          imageText: point.imageText4,
          imageLink: point.imageLink4,
          imageId:'img4'
        }, {
          image: point.image5,
          imageText: point.imageText5,
          imageLink: point.imageLink5,
          imageId:'img5'
        }];

        for (let i = 0; ((i<5) && list_images[i].image); i++){
          const each_image_button = document.createElement('button');
          each_image_button.type = "button";
          each_image_button.className = "image-button";
          each_image_button.id = list_images[i].imageId;
          let next = i;
          if ((i<4)&&(!list_images[i+1].image)){
            next = 4;
          }

          //Image Popup
          each_image_button.onclick = () => image_popup(list_images[i], next);

          const each_image = document.createElement('img');
          each_image.src= list_images[i].image;
//Is this really???
          each_image.className = 'image';
          each_image_button.appendChild(each_image);
          imageSection.appendChild(each_image_button);
        }
        container.appendChild(imageSection);
        
    //Year
        const year = document.createElement('h6');
        year.textContent = point.year;
        year.className = 'year';
        container.appendChild(year);
  
    //Discription
        const description = document.createElement('ul');
        description.className = 'description';
      //List of Description
        const list_description = [point.list1, point.list2, point.list3, point.list4, point.list5, point.list6, point.list7, point.list8, point.list9, point.list10, point.list11, point.list12];
        
        for (let i = 0; ((i < 12) && (list_description[i] != '')); i++) {
          const regex = /^\d{4}/;
          const regexWithS = /^\d{4}s/;
          const regexSince = /^\d{4}-/;
          const regexUntil = /^-\d{4}/;
          const regexSinceS = /^\d{4}s-/;
          const regexUntilS = /^-\d{4}s/;
          if ((regex.test(list_description[i].slice(0,4)))&&(regexWithS.test(list_description[i].slice(5,10)))){
    //YYYY-YYYYs
            const each_description = document.createElement('li');
            each_description.className = 'each_discrpt';
            each_description.textContent = list_description[i].slice(0,4) + '   - ' + list_description[i].slice(5,9) + 's  ' + list_description[i].slice(11);
            description.appendChild(each_description);
          }else if ((regexWithS.test(list_description[i].slice(0,5)))&&(regexWithS.test(list_description[i].slice(6,11)))){
    //YYYYs-YYYYs
            const each_description = document.createElement('li');
            each_description.className = 'each_discrpt';
            each_description.textContent = list_description[i].slice(0,4) + 's - ' + list_description[i].slice(6,10) + 's  ' + list_description[i].slice(12);
            description.appendChild(each_description);
          }else if ((regexWithS.test(list_description[i].slice(0,5)))&&(regex.test(list_description[i].slice(6,10)))){
    //YYYYs-YYYY
            const each_description = document.createElement('li');
            each_description.className = 'each_discrpt';
            each_description.textContent = list_description[i].slice(0,4) + 's - ' + list_description[i].slice(6,10) + '    ' + list_description[i].slice(11);
            description.appendChild(each_description);
          }else if ((regex.test(list_description[i].slice(0,4)))&&(regex.test(list_description[i].slice(5,9)))){
    //YYYY-YYYY
            const each_description = document.createElement('li');
            each_description.className = 'each_discrpt';
            each_description.textContent = list_description[i].slice(0,4) + '   - ' + list_description[i].slice(5,9) + '    ' + list_description[i].slice(11);
            description.appendChild(each_description);
          }else if (regexUntilS.test(list_description[i].slice(0,6))) {
    //-YYYYs
            const each_description = document.createElement('li');
            each_description.className = 'each_discrpt';
            each_description.textContent = '       -' + list_description[i].slice(1,5) + 's        ' + list_description[i].slice(8);
            description.appendChild(each_description);
          }else if (regexSinceS.test(list_description[i].slice(0,6))) {
    //YYYYs-
            const each_description = document.createElement('li');
            each_description.className = 'each_discrpt';
            each_description.textContent = '         ' + list_description[i].slice(1,5) + 's-      ' + list_description[i].slice(8);
            description.appendChild(each_description);
          }else if (regexUntil.test(list_description[i].slice(0,5))) {
    //-YYYY
            const each_description = document.createElement('li');
            each_description.className = 'each_discrpt';
            each_description.textContent = '       -' + list_description[i].slice(1,5) + '         ' + list_description[i].slice(7);
            description.appendChild(each_description);
          }else if (regexSince.test(list_description[i].slice(0,5))) {
    //YYYY-
            const each_description = document.createElement('li');
            each_description.className = 'each_discrpt';
            each_description.textContent = '        ' + list_description[i].slice(0,4) + '-        ' + list_description[i].slice(7);
            description.appendChild(each_description);
          }else if (regexWithS.test(list_description[i].slice(0,5))) {
    //YYYYs
            const each_description = document.createElement('li');
            each_description.className = 'each_discrpt';
            each_description.textContent = '        ' + list_description[i].slice(0,4) + 's        ' + list_description[i].slice(7);
            description.appendChild(each_description);
          }else if (regex.test(list_description[i].slice(0,4))){
    //YYYY
              const each_description = document.createElement('li');
              each_description.className = 'each_discrpt';
              each_description.textContent = '        ' + list_description[i].slice(0,4) + '         ' + list_description[i].slice(6);
              description.appendChild(each_description);
          }else{
            const each_description = document.createElement('li');
            each_description.textContent = list_description[i];
            each_description.className = 'each_discrpt_li';
            description.appendChild(each_description);
          }
        }
        container.appendChild(description);

    //Additional Sources
        const addSrc = document.createElement('h6');
        addSrc.className = 'year'//Reuse
        addSrc.textContent = 'Additional Sources';
        container.appendChild(addSrc);

        const additionalSource = document.createElement('ul');
        additionalSource.className = 'description';
        const list_addSrc = [point.addSrc1, point.addSrc2, point.addSrc3, point.addSrc4, point.addSrc5, point.addSrc6, point.addSrc7];
        const list_addSrcLink = [point.addSrcLink1, point.addSrcLink2, point.addSrcLink3, point.addSrcLink4, point.addSrcLink5, point.addSrcLink6, point.addSrcLink7];
        for (let i = 0; ((i<7)&&(list_addSrc[i] != '')); i++){
          const each_addSrc = document.createElement('li');
          each_addSrc.className = 'each_discrpt_li';

          if(list_addSrcLink[i]==''){
            each_addSrc.textContent = list_addSrc[i];

          }else{
            const linked_text = document.createElement('a');
            linked_text.target = '_blank';
            linked_text.href = list_addSrcLink[i];
            linked_text.textContent = list_addSrc[i];
            each_addSrc.appendChild(linked_text);
          }
          additionalSource.appendChild(each_addSrc);
        }
        container.appendChild(additionalSource);

        return container;
      }

  


/*


  
***************************************
*******  FUNCTION image_popup()  ******
***************************************

      HTML:
        section: div (popupSection)
            div (image-popup-close)
                button (large-image-close) *1
                    image (large-image-close-icon)
            section_without_close: div (section-wo-close)
                section_without_close2: div (section-wo-close2)
                    change_img_left:button (image_left) *2
                    large_image: div (large-image-div)
                        each_large_image: img (large-image)
                    change_img_right:button (image_right) *2
                text_for_image: p (year), or
                linked_text: a (year)
        
        Then run Change_image() *3

        *1: 
            runs closeSection(). 
              close the image popup
        *2:
            If there is lower sibling (next>0) >>> show the left button
            If there is upper sibling (next<4) >>> show the right button
        *3:
            Change the image as the user click the right/left image button.

*/
 
        function image_popup(image_in_list, next){
        // Check if the section already exists
        let existing = document.getElementById('popupSection');
        if (existing) {
          existing.style.display = 'block';
          return;
        }
          // Create the section
            const section = document.createElement('div');
            section.id = 'popupSection';
          //Section for Close Button
            section.innerHTML = `
              <div class = 'image-popup-close'>
                <button onclick="closeSection()", class = 'large-image-close'><image src = './icon/close.png' class ="large-image-close-icon"></button>
              </div>
            `;
          //Section without Close Button
            const section_without_close = document.createElement('div');
            section_without_close.className = 'section-wo-close';
          //Div for the image and text alignment
            const section_without_close2 = document.createElement('div');
            section_without_close2.className = 'section-wo-close2';
          //Div for the image alignment
            const large_image = document.createElement("div");
            large_image.className = 'large-image-div';
            if (next > 0){
          //Image < 
            const change_img_left = document.createElement('button');
            change_img_left.className = 'image_left';
            change_img_left.id = 'image_left';
            change_img_left.textContent = '<';
            section_without_close2.appendChild(change_img_left);
            } 


          //Image
            const each_large_image = document.createElement('img');
            each_large_image.src = image_in_list.image;
            each_large_image.className = 'large-image';

            large_image.appendChild(each_large_image);
            section_without_close2.appendChild(large_image);
            if(next < 4){
           //Image < 
            const change_img_right = document.createElement('button');
            change_img_right.className = 'image_right';
            change_img_right.id = 'image_right';
            change_img_right.textContent = '>';
            section_without_close2.appendChild(change_img_right);
            }
            section_without_close.appendChild(section_without_close2);


          //Text with/without link
            if (image_in_list.imageLink == ''){
              const text_for_image = document.createElement('p');
              text_for_image.textContent = image_in_list.imageText;
              text_for_image.className = 'year'//reuse
              section_without_close.appendChild(text_for_image);
            }
            else{
              const linked_text = document.createElement('a');
              linked_text.className = 'year';
              linked_text.target = '_blank';
              linked_text.href = image_in_list.imageLink;
              linked_text.textContent = image_in_list.imageText;
              section_without_close.appendChild(linked_text);

            }
            section.appendChild(section_without_close);

            // Append it to the map
            const mapContainer = document.getElementById('map');
            mapContainer.appendChild(section);
            L.DomEvent.disableClickPropagation(section);
            L.DomEvent.disableScrollPropagation(section);
            change_image(image_in_list);
          }

/*
  ****************************************
  ******  Function closeSection()  ******
  ****************************************
  
        close the image popup when the user click the button
  */
          function closeSection() {
            const section = document.getElementById('popupSection');
            if (section) {
              section.remove();
            }
          }

/*
  ****************************************
  ******  Function change_image()  ******
  ****************************************
  
          Change the image as the user click right/left image button
  */
          function change_image(image_in_list){
            setTimeout(()=>{
            const imageleft = document.getElementById('image_left');
            if(imageleft){
              imageleft.addEventListener('click', () => {
                const image_button = document.getElementById(image_in_list.imageId);              
                imageleft.parentElement.parentElement.parentElement.remove();
                image_button.previousElementSibling.onclick();
              });

            }

            const imageright = document.getElementById('image_right');
            if(!imageright){
              return;
            }
            imageright.addEventListener('click', () => {
              const image_button = document.getElementById(image_in_list.imageId);              
              imageright.parentElement.parentElement.parentElement.remove();
              image_button.nextElementSibling.onclick();
            });
          },0);
            }

          



/*
  ##################################################
  ######     Functions for Region Control     ######
  ##################################################
  
      To maintain the folded sections:
          updateParentHeight()
                Adjust the parent element size to show the current element besides the parent element
          updateSibling()
                Close all the sibling elements
                Close all the child elements of the siblings 
                    >> run updateChildren() as long as it has a child.
          updateChildren()
                Close all the child elements
                Close the children of the child elements
                    >> run updateChildren() as long as it has a child.
            
      For the button of the list in each region
          customControlhtml(count_area)
                Style the HTML
          listMarkers()
                Enable list buttons



  *********************************************
  ******  Function updateParentHeight()  ******
  *********************************************

    Adjust the size of parent section of the folded content
      when you click, the parent section open and show the content without hiding by the section you clicked
  */
  
      function updateParentHeight(element) {
        let parent = element.parentElement.parentElement;
        while (parent) {
          if (parent.classList.contains('content') && parent.style.maxHeight) {
          parent.style.maxHeight = parent.scrollHeight  +" px";
          }
          parent = parent.parentElement;
        }
      }
  
  /*
  ****************************************
  ******  Function updateSibling()  ******
  ****************************************
  
    Unfold the other sibling sections
  */

      function updateSibling(element) {
          let sibling = element.parentElement.firstElementChild;
          while (sibling) {
              if (sibling !== element && sibling.classList.contains("content") && sibling.style.maxHeight) {
                  sibling.style.maxHeight = null;
                  sibling.previousElementSibling.firstElementChild.classList.toggle("active");
                  updateChildren(sibling);
              }
              sibling = sibling.nextElementSibling;
          }
      }
  /*
  *****************************************
  ******  Function updateChildren()  ******
  *****************************************
  
    Unfold the children sections
  */

      function updateChildren(element) {
          let child = element.firstElementChild;
          while (child) {
              if (child.classList.contains("content") && child.style.maxHeight) {
                  child.style.maxHeight = null;
                  child.previousElementSibling.firstElementChild.classList.toggle("active");
                  updateChildren(child);
              }
              child = child.nextElementSibling;
          }
      }

/*
  ##################################################
  ######     Functions for Region Control     ######
  ##################################################

      Show the area categories that is coded at the area in the point in the data.js file, including upper categories. 
        For example, if it has Victoria, this program includes the CapitalRegionalDistrict and the VancouverIsland. 


        customControlhtml()
            The count_area dictionary is used to store the area category in the index.html. 
            The section of a number of if-statements adds the upper categories if the lower area is chosen. 
                >> Change here if you update area category
            HTML
                container: div (custom-control-hover)
                    strong 
                    abbr (question) *1
                    div (custom-content)
                        div (scrollll)
                        button (button-original-map)
                // Depending on the count_area dictionary 
                  >> Change here if you update area category
                        div (control-button-wrapper)
                            button (collapsible) button (button)
                        div (content)
                            div (control-button-wrapper)
                                button (collapsible) button (button)
                            div (content)
                                div (control-button-wrapper)
                                    button (collapsible) button (button)
                                div (content)
                                div (list_<<NAME_OF_AREA>>) *2
                            div (list_<<NAME_OF_AREA>>) *2
                        div (list_<<NAME_OF_AREA>>) *2

              *1: 
                  Button to show how to use this control

              *2: 
                  For example: list_Victoria
        
              For the area categories, please refer to the region_categories in the solid_data.js file.

      listMarkers()
          Add list of sites in the region to the div, IDed as list_<<REGION>> (<<REGION>> is the name of region in the category)
          The list contains markers.name in the index.html
              point.title + '(' + point.company + ')'
          This list is the button, directing to the site to open the popup. 


  ***************************************
  ******  Function customControlhtml()  ******
  ***************************************

        Style the HTML.
    
  */

    
      function customControlhtml(count_area){
        //check the region
        
if(!count_area.hasOwnProperty('all')){
/*
(((((((((((  UPDATE BELOW  )))))))))))
*/
    if(count_area.hasOwnProperty('TumblerRidge')){count_area['PeaceRiverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Taylor')){count_area['PeaceRiverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('HudsonsHope')){count_area['PeaceRiverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('FortStJohn')){count_area['PeaceRiverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Chetwynd')){count_area['PeaceRiverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('DawsonCreek')){count_area['PeaceRiverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('PeaceRiverRegionalDistrict')){count_area['Northeast'] = 1;}
    if(count_area.hasOwnProperty('NorthernRockiesRegionalMunicipality')){count_area['Northeast'] = 1;}

    if(count_area.hasOwnProperty('StikineRegion(Unincorporated)')){count_area['Nechako'] = 1;}
    if(count_area.hasOwnProperty('Vanderhoof')){count_area['RegionalDistrictofBulkley-Nechako'] = 1;}
    if(count_area.hasOwnProperty('Telkwa')){count_area['RegionalDistrictofBulkley-Nechako'] = 1;}
    if(count_area.hasOwnProperty('Smithers')){count_area['RegionalDistrictofBulkley-Nechako'] = 1;}
    if(count_area.hasOwnProperty('Houston')){count_area['RegionalDistrictofBulkley-Nechako'] = 1;}
    if(count_area.hasOwnProperty('Granisle')){count_area['RegionalDistrictofBulkley-Nechako'] = 1;}
    if(count_area.hasOwnProperty('FraserLake')){count_area['RegionalDistrictofBulkley-Nechako'] = 1;}
    if(count_area.hasOwnProperty('FortStJames')){count_area['RegionalDistrictofBulkley-Nechako'] = 1;}
    if(count_area.hasOwnProperty('BurnsLake')){count_area['RegionalDistrictofBulkley-Nechako'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofBulkley-Nechako')){count_area['Nechako'] = 1;}

    if(count_area.hasOwnProperty('PrinceRupert')){count_area['NorthCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('PortEdward')){count_area['NorthCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('PortClements')){count_area['NorthCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Masset')){count_area['NorthCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('DaajingGiids')){count_area['NorthCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('NorthCoastRegionalDistrict')){count_area['NorthCoast'] = 1;}
    if(count_area.hasOwnProperty('Terrace')){count_area['RegionalDistrictofKitimat-Stikine'] = 1;}
    if(count_area.hasOwnProperty('Kitimat')){count_area['RegionalDistrictofKitimat-Stikine'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofKitimat-Stikine')){count_area['NorthCoast'] = 1;}

    if(count_area.hasOwnProperty('Valemount')){count_area['RegionalDistrictofFraser-FortGeorge'] = 1;}
    if(count_area.hasOwnProperty('PrinceGeorge')){count_area['RegionalDistrictofFraser-FortGeorge'] = 1;}
    if(count_area.hasOwnProperty('McBride')){count_area['RegionalDistrictofFraser-FortGeorge'] = 1;}
    if(count_area.hasOwnProperty('Mackenzie')){count_area['RegionalDistrictofFraser-FortGeorge'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofFraser-FortGeorge')){count_area['Cariboo'] = 1;}
    if(count_area.hasOwnProperty('WilliamsLake')){count_area['CaribooRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Wells')){count_area['CaribooRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Quesnel')){count_area['CaribooRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('100MileHouse')){count_area['CaribooRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CaribooRegionalDistrict')){count_area['Cariboo'] = 1;}

    if(count_area.hasOwnProperty('WestBoundary')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('Warfield')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('Trail')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('RuralGrandForks')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('Rossland')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('Montrose')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('Midway')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('LowerColumbia/OldGlory')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('Greenwood')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('GrandForks')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('Fruitvale')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('ChristinaLake')){count_area['RegionalDistrictofKootenayBoundary'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofKootenayBoundary')){count_area['Kootenay'] = 1;}
    if(count_area.hasOwnProperty('Sparwood')){count_area['RegionalDistrictofEastKootenay'] = 1;}
    if(count_area.hasOwnProperty('RadiumHotSprings')){count_area['RegionalDistrictofEastKootenay'] = 1;}
    if(count_area.hasOwnProperty('Kimberley')){count_area['RegionalDistrictofEastKootenay'] = 1;}
    if(count_area.hasOwnProperty('Invermere')){count_area['RegionalDistrictofEastKootenay'] = 1;}
    if(count_area.hasOwnProperty('Fernie')){count_area['RegionalDistrictofEastKootenay'] = 1;}
    if(count_area.hasOwnProperty('Elkford')){count_area['RegionalDistrictofEastKootenay'] = 1;}
    if(count_area.hasOwnProperty('Cranbrook')){count_area['RegionalDistrictofEastKootenay'] = 1;}
    if(count_area.hasOwnProperty('CanalFlats')){count_area['RegionalDistrictofEastKootenay'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofEastKootenay')){count_area['Kootenay'] = 1;}
    if(count_area.hasOwnProperty('Wynndel/EastShoreKootenayLake')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('TheSlocanValley')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('TheArrowLakes')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('Silverton')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('Salmo')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('NewDenver')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('Nelson')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('Nakusp')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('LowerArrow/Columbia')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('Kaslo')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('Creston')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('Castlegar')){count_area['RegionalDistrictofCentralKootenay'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofCentralKootenay')){count_area['Kootenay'] = 1;}

    if(count_area.hasOwnProperty('WellsGrayCountry')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('ThompsonHeadwaters')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('SunPeaksMountainResort')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('RiversandthePeaks')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Merritt')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Lytton')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('LowerNorthThompson')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('LoganLake')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Kamloops')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Grasslands')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CopperDesertCountry')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Clinton')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Clearwater')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Chase')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CacheCreek')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('BonapartePlateau')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('BlueSkyCountry')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('BeautifulNicolaValley-South')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('BeautifulNicolaValley-North')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Barriere')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Ashcroft')){count_area['Thompson-NicolaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Thompson-NicolaRegionalDistrict')){count_area['Thompson-Okanagan'] = 1;}
    if(count_area.hasOwnProperty('Summerland')){count_area['RegionalDistrictofOkanagan-Similkameen'] = 1;}
    if(count_area.hasOwnProperty('Princeton')){count_area['RegionalDistrictofOkanagan-Similkameen'] = 1;}
    if(count_area.hasOwnProperty('Penticton')){count_area['RegionalDistrictofOkanagan-Similkameen'] = 1;}
    if(count_area.hasOwnProperty('Osoyoos')){count_area['RegionalDistrictofOkanagan-Similkameen'] = 1;}
    if(count_area.hasOwnProperty('Oliver')){count_area['RegionalDistrictofOkanagan-Similkameen'] = 1;}
    if(count_area.hasOwnProperty('Keremeos')){count_area['RegionalDistrictofOkanagan-Similkameen'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofOkanagan-Similkameen')){count_area['Thompson-Okanagan'] = 1;}
    if(count_area.hasOwnProperty('Vernon')){count_area['RegionalDistrictofNorthOkanagan'] = 1;}
    if(count_area.hasOwnProperty('Spallumcheen')){count_area['RegionalDistrictofNorthOkanagan'] = 1;}
    if(count_area.hasOwnProperty('Lumby')){count_area['RegionalDistrictofNorthOkanagan'] = 1;}
    if(count_area.hasOwnProperty('Enderby')){count_area['RegionalDistrictofNorthOkanagan'] = 1;}
    if(count_area.hasOwnProperty('Coldstream')){count_area['RegionalDistrictofNorthOkanagan'] = 1;}
    if(count_area.hasOwnProperty('Armstrong')){count_area['RegionalDistrictofNorthOkanagan'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofNorthOkanagan')){count_area['Thompson-Okanagan'] = 1;}
    if(count_area.hasOwnProperty('Sicamous')){count_area['ColumbiaShuswapRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('SalmonArm')){count_area['ColumbiaShuswapRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Revelstoke')){count_area['ColumbiaShuswapRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Golden')){count_area['ColumbiaShuswapRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('ColumbiaShuswapRegionalDistrict')){count_area['Thompson-Okanagan'] = 1;}
    if(count_area.hasOwnProperty('WestKelowna')){count_area['RegionalDistrictofCentralOkanagan'] = 1;}
    if(count_area.hasOwnProperty('Peachland')){count_area['RegionalDistrictofCentralOkanagan'] = 1;}
    if(count_area.hasOwnProperty('LakeCountry')){count_area['RegionalDistrictofCentralOkanagan'] = 1;}
    if(count_area.hasOwnProperty('Kelowna')){count_area['RegionalDistrictofCentralOkanagan'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofCentralOkanagan')){count_area['Thompson-Okanagan'] = 1;}

    if(count_area.hasOwnProperty('WestHoweSound')){count_area['SunshineCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Sechelt')){count_area['SunshineCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('RobertsCreek')){count_area['SunshineCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('HalfmoonBay')){count_area['SunshineCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Gibsons')){count_area['SunshineCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Elphinstone')){count_area['SunshineCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Egmont/PenderHarbour')){count_area['SunshineCoastRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('SunshineCoastRegionalDistrict')){count_area['Mainland/Southwest'] = 1;}
    if(count_area.hasOwnProperty('Whistler')){count_area['Squamish-LillooetRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Squamish')){count_area['Squamish-LillooetRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Pemberton')){count_area['Squamish-LillooetRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Lillooet')){count_area['Squamish-LillooetRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Squamish-LillooetRegionalDistrict')){count_area['Mainland/Southwest'] = 1;}
    if(count_area.hasOwnProperty('WhiteRock')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('WestVancouver')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Vancouver')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Surrey')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Richmond')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('PortMoody')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('PortCoquitlam')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('PittMeadows')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('NorthVancouver')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('NewWestminster')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('MapleRidge')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('LionsBay')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Langley')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Delta')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Coquitlam')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Burnaby')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('BowenIsland')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Belcarra')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Anmore')){count_area['MetroVancouverRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('MetroVancouverRegionalDistrict')){count_area['Mainland/Southwest'] = 1;}
    if(count_area.hasOwnProperty('Mission')){count_area['FraserValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Kent')){count_area['FraserValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Hope')){count_area['FraserValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('HarrisonHotSprings')){count_area['FraserValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Chilliwack')){count_area['FraserValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Abbotsford')){count_area['FraserValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('FraserValleyRegionalDistrict')){count_area['Mainland/Southwest'] = 1;}

    if(count_area.hasOwnProperty('OysterBay/ButtleLake')){count_area['StrathconaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Kyuquot/Nootka-Sayward')){count_area['StrathconaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('GoldRiver')){count_area['StrathconaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('DiscoveryIslands/MainlandInlets')){count_area['StrathconaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Cortes')){count_area['StrathconaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CampbellRiver')){count_area['StrathconaRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('StrathconaRegionalDistrict')){count_area['VancouverIsland/Coast'] = 1;}
    if(count_area.hasOwnProperty('PowellRiver')){count_area['qathetRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('qathetRegionalDistrict')){count_area['VancouverIsland/Coast'] = 1;}
    if(count_area.hasOwnProperty('QualicumBeach')){count_area['RegionalDistrictofNanaimo'] = 1;}
    if(count_area.hasOwnProperty('Cassidy')){count_area['RegionalDistrictofNanaimo'] = 1;}
    if(count_area.hasOwnProperty('Parksville')){count_area['RegionalDistrictofNanaimo'] = 1;}
    if(count_area.hasOwnProperty('Nanaimo')){count_area['RegionalDistrictofNanaimo'] = 1;}
    if(count_area.hasOwnProperty('Lantzville')){count_area['RegionalDistrictofNanaimo'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofNanaimo')){count_area['VancouverIsland/Coast'] = 1;}
    if(count_area.hasOwnProperty('PortMcNeill')){count_area['RegionalDistrictofMountWaddington'] = 1;}
    if(count_area.hasOwnProperty('PortHardy')){count_area['RegionalDistrictofMountWaddington'] = 1;}
    if(count_area.hasOwnProperty('PortAlice')){count_area['RegionalDistrictofMountWaddington'] = 1;}
    if(count_area.hasOwnProperty('AlertBay')){count_area['RegionalDistrictofMountWaddington'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofMountWaddington')){count_area['VancouverIsland/Coast'] = 1;}
    if(count_area.hasOwnProperty('Youbou')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('SouthLlakeCowichan')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('ShawniganLake')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Saltair')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Sahtlam')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('NorthCowichan')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('MillBay')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Malahat')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('LakeCowichan')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Ladysmith')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Glenora')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Duncan')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CowichanStation')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CowichanBay')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CobbleHill')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Chemainus')){count_area['CowichanValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CowichanValleyRegionalDistrict')){count_area['VancouverIsland/Coast'] = 1;}
    if(count_area.hasOwnProperty('Puntledge/BlackCreek')){count_area['ComoxValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Cumberland')){count_area['ComoxValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Courtenay')){count_area['ComoxValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Comox')){count_area['ComoxValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('BaynesSound-Denman/HornbyIslands')){count_area['ComoxValleyRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('ComoxValleyRegionalDistrict')){count_area['VancouverIsland/Coast'] = 1;}
    if(count_area.hasOwnProperty('CentralCoastRegionalDistrict')){count_area['VancouverIsland/Coast'] = 1;}
    if(count_area.hasOwnProperty('ViewRoyal')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Victoria')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Sooke')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Sidney')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('SaltspringIsland')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Saanich')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('PortRenfrew')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('OakBay')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('NorthSaanich')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Metchosin')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Langford')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('JordanRiver')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Highlands')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Esquimalt')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('Colwood')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CentralSaanich')){count_area['CapitalRegionalDistrict'] = 1;}
    if(count_area.hasOwnProperty('CapitalRegionalDistrict')){count_area['VancouverIsland/Coast'] = 1;}
    if(count_area.hasOwnProperty('PortAlberni')){count_area['RegionalDistrictofAlberni-Clayoquot'] = 1;}
    if(count_area.hasOwnProperty('RegionalDistrictofAlberni-Clayoquot')){count_area['VancouverIsland/Coast'] = 1;}
/*
(((((((((((  UPDATE ABOVE  )))))))))))
*/
}


        let container = `
          <div class = "custom-control-hover">
              <strong>Regions</strong><abbr class = 'question' id = 'regcon' title="Click Plus Sign to Zoom In"></abbr>
              <div class="custom-content">
                <div class="scrollll">
                <button class = 'button-original-map' id = 'coastalBC'><i>Go Back to Coastal BC</i></button>`;
/*
(((((((((((  UPDATE BELOW  )))))))))))
*/
    if(count_area.hasOwnProperty('VancouverIsland/Coast')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Vancouver Island/Coast</button><button class = 'button' id = 'VancouverIsland/Coast'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('RegionalDistrictofAlberni-Clayoquot')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Alberni-Clayoquot</button><button class = 'button' id = 'RegionalDistrictofAlberni-Clayoquot'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('PortAlberni')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Port Alberni</button><button class = 'button' id = 'PortAlberni'></button></div><div class='content'>`;container += `<div id = 'list_PortAlberni' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofAlberni-Clayoquot' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('CapitalRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Capital Regional District</button><button class = 'button' id = 'CapitalRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('CentralSaanich')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Central Saanich</button><button class = 'button' id = 'CentralSaanich'></button></div><div class='content'>`;container += `<div id = 'list_CentralSaanich' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Colwood')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Colwood</button><button class = 'button' id = 'Colwood'></button></div><div class='content'>`;container += `<div id = 'list_Colwood' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Esquimalt')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Esquimalt</button><button class = 'button' id = 'Esquimalt'></button></div><div class='content'>`;container += `<div id = 'list_Esquimalt' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Highlands')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Highlands</button><button class = 'button' id = 'Highlands'></button></div><div class='content'>`;container += `<div id = 'list_Highlands' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('JordanRiver')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Jordan River</button><button class = 'button' id = 'JordanRiver'></button></div><div class='content'>`;container += `<div id = 'list_JordanRiver' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Langford')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Langford</button><button class = 'button' id = 'Langford'></button></div><div class='content'>`;container += `<div id = 'list_Langford' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Metchosin')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Metchosin</button><button class = 'button' id = 'Metchosin'></button></div><div class='content'>`;container += `<div id = 'list_Metchosin' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('NorthSaanich')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >North Saanich</button><button class = 'button' id = 'NorthSaanich'></button></div><div class='content'>`;container += `<div id = 'list_NorthSaanich' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('OakBay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Oak Bay</button><button class = 'button' id = 'OakBay'></button></div><div class='content'>`;container += `<div id = 'list_OakBay' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PortRenfrew')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Port Renfrew</button><button class = 'button' id = 'PortRenfrew'></button></div><div class='content'>`;container += `<div id = 'list_PortRenfrew' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Saanich')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Saanich</button><button class = 'button' id = 'Saanich'></button></div><div class='content'>`;container += `<div id = 'list_Saanich' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('SaltspringIsland')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Saltspring Island</button><button class = 'button' id = 'SaltspringIsland'></button></div><div class='content'>`;container += `<div id = 'list_SaltspringIsland' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Sidney')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Sidney</button><button class = 'button' id = 'Sidney'></button></div><div class='content'>`;container += `<div id = 'list_Sidney' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Sooke')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Sooke</button><button class = 'button' id = 'Sooke'></button></div><div class='content'>`;container += `<div id = 'list_Sooke' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Victoria')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Victoria</button><button class = 'button' id = 'Victoria'></button></div><div class='content'>`;container += `<div id = 'list_Victoria' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('ViewRoyal')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >View Royal</button><button class = 'button' id = 'ViewRoyal'></button></div><div class='content'>`;container += `<div id = 'list_ViewRoyal' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_CapitalRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('CentralCoastRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Central Coast Regional District</button><button class = 'button' id = 'CentralCoastRegionalDistrict'></button></div><div class='content'>`;
    container += `<div id = 'list_CentralCoastRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('ComoxValleyRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Comox Valley Regional District</button><button class = 'button' id = 'ComoxValleyRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('BaynesSound-Denman/HornbyIslands')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Baynes Sound - Denman/Hornby Islands</button><button class = 'button' id = 'BaynesSound-Denman/HornbyIslands'></button></div><div class='content'>`;container += `<div id = 'list_BaynesSound-Denman/HornbyIslands' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Comox')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Comox</button><button class = 'button' id = 'Comox'></button></div><div class='content'>`;container += `<div id = 'list_Comox' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Courtenay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Courtenay</button><button class = 'button' id = 'Courtenay'></button></div><div class='content'>`;container += `<div id = 'list_Courtenay' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Cumberland')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cumberland</button><button class = 'button' id = 'Cumberland'></button></div><div class='content'>`;container += `<div id = 'list_Cumberland' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Puntledge/BlackCreek')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Puntledge / Black Creek</button><button class = 'button' id = 'Puntledge/BlackCreek'></button></div><div class='content'>`;container += `<div id = 'list_Puntledge/BlackCreek' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_ComoxValleyRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('CowichanValleyRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cowichan Valley Regional District</button><button class = 'button' id = 'CowichanValleyRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Chemainus')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Chemainus</button><button class = 'button' id = 'Chemainus'></button></div><div class='content'>`;container += `<div id = 'list_Chemainus' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('CobbleHill')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cobble Hill</button><button class = 'button' id = 'CobbleHill'></button></div><div class='content'>`;container += `<div id = 'list_CobbleHill' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('CowichanBay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cowichan Bay</button><button class = 'button' id = 'CowichanBay'></button></div><div class='content'>`;container += `<div id = 'list_CowichanBay' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('CowichanStation')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cowichan Station</button><button class = 'button' id = 'CowichanStation'></button></div><div class='content'>`;container += `<div id = 'list_CowichanStation' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Duncan')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Duncan</button><button class = 'button' id = 'Duncan'></button></div><div class='content'>`;container += `<div id = 'list_Duncan' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Glenora')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Glenora</button><button class = 'button' id = 'Glenora'></button></div><div class='content'>`;container += `<div id = 'list_Glenora' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Ladysmith')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Ladysmith</button><button class = 'button' id = 'Ladysmith'></button></div><div class='content'>`;container += `<div id = 'list_Ladysmith' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('LakeCowichan')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lake Cowichan</button><button class = 'button' id = 'LakeCowichan'></button></div><div class='content'>`;container += `<div id = 'list_LakeCowichan' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Malahat')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Malahat</button><button class = 'button' id = 'Malahat'></button></div><div class='content'>`;container += `<div id = 'list_Malahat' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('MillBay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Mill Bay</button><button class = 'button' id = 'MillBay'></button></div><div class='content'>`;container += `<div id = 'list_MillBay' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('NorthCowichan')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >North Cowichan</button><button class = 'button' id = 'NorthCowichan'></button></div><div class='content'>`;container += `<div id = 'list_NorthCowichan' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Sahtlam')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Sahtlam</button><button class = 'button' id = 'Sahtlam'></button></div><div class='content'>`;container += `<div id = 'list_Sahtlam' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Saltair')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Saltair</button><button class = 'button' id = 'Saltair'></button></div><div class='content'>`;container += `<div id = 'list_Saltair' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('ShawniganLake')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Shawnigan Lake</button><button class = 'button' id = 'ShawniganLake'></button></div><div class='content'>`;container += `<div id = 'list_ShawniganLake' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('SouthLlakeCowichan')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >South Llake Cowichan</button><button class = 'button' id = 'SouthLlakeCowichan'></button></div><div class='content'>`;container += `<div id = 'list_SouthLlakeCowichan' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Youbou')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Youbou</button><button class = 'button' id = 'Youbou'></button></div><div class='content'>`;container += `<div id = 'list_Youbou' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_CowichanValleyRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('RegionalDistrictofMountWaddington')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Mount Waddington</button><button class = 'button' id = 'RegionalDistrictofMountWaddington'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('AlertBay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Alert Bay</button><button class = 'button' id = 'AlertBay'></button></div><div class='content'>`;container += `<div id = 'list_AlertBay' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PortAlice')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Port Alice</button><button class = 'button' id = 'PortAlice'></button></div><div class='content'>`;container += `<div id = 'list_PortAlice' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PortHardy')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Port Hardy</button><button class = 'button' id = 'PortHardy'></button></div><div class='content'>`;container += `<div id = 'list_PortHardy' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PortMcNeill')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Port McNeill</button><button class = 'button' id = 'PortMcNeill'></button></div><div class='content'>`;container += `<div id = 'list_PortMcNeill' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofMountWaddington' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('RegionalDistrictofNanaimo')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Nanaimo</button><button class = 'button' id = 'RegionalDistrictofNanaimo'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Lantzville')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lantzville</button><button class = 'button' id = 'Lantzville'></button></div><div class='content'>`;container += `<div id = 'list_Lantzville' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Nanaimo')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Nanaimo</button><button class = 'button' id = 'Nanaimo'></button></div><div class='content'>`;container += `<div id = 'list_Nanaimo' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Parksville')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Parksville</button><button class = 'button' id = 'Parksville'></button></div><div class='content'>`;container += `<div id = 'list_Parksville' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Cassidy')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cassidy</button><button class = 'button' id = 'Cassidy'></button></div><div class='content'>`;container += `<div id = 'list_Cassidy' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('QualicumBeach')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Qualicum Beach</button><button class = 'button' id = 'QualicumBeach'></button></div><div class='content'>`;container += `<div id = 'list_QualicumBeach' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofNanaimo' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('qathetRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >qathet Regional District</button><button class = 'button' id = 'qathetRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('PowellRiver')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Powell River</button><button class = 'button' id = 'PowellRiver'></button></div><div class='content'>`;container += `<div id = 'list_PowellRiver' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_qathetRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('StrathconaRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Strathcona Regional District</button><button class = 'button' id = 'StrathconaRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('CampbellRiver')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Campbell River</button><button class = 'button' id = 'CampbellRiver'></button></div><div class='content'>`;container += `<div id = 'list_CampbellRiver' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Cortes')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cortes</button><button class = 'button' id = 'Cortes'></button></div><div class='content'>`;container += `<div id = 'list_Cortes' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('DiscoveryIslands/MainlandInlets')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Discovery Islands / Mainland Inlets</button><button class = 'button' id = 'DiscoveryIslands/MainlandInlets'></button></div><div class='content'>`;container += `<div id = 'list_DiscoveryIslands/MainlandInlets' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('GoldRiver')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Gold River</button><button class = 'button' id = 'GoldRiver'></button></div><div class='content'>`;container += `<div id = 'list_GoldRiver' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Kyuquot/Nootka-Sayward')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Kyuquot / Nootka-Sayward</button><button class = 'button' id = 'Kyuquot/Nootka-Sayward'></button></div><div class='content'>`;container += `<div id = 'list_Kyuquot/Nootka-Sayward' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('OysterBay/ButtleLake')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Oyster Bay / Buttle Lake</button><button class = 'button' id = 'OysterBay/ButtleLake'></button></div><div class='content'>`;container += `<div id = 'list_OysterBay/ButtleLake' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_StrathconaRegionalDistrict' class = 'list-region'></div></div>`;}container += `<div id = 'list_VancouverIsland/Coast' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('Mainland/Southwest')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Mainland/Southwest</button><button class = 'button' id = 'Mainland/Southwest'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('FraserValleyRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Fraser Valley Regional District</button><button class = 'button' id = 'FraserValleyRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Abbotsford')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Abbotsford</button><button class = 'button' id = 'Abbotsford'></button></div><div class='content'>`;container += `<div id = 'list_Abbotsford' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Chilliwack')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Chilliwack</button><button class = 'button' id = 'Chilliwack'></button></div><div class='content'>`;container += `<div id = 'list_Chilliwack' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('HarrisonHotSprings')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Harrison Hot Springs</button><button class = 'button' id = 'HarrisonHotSprings'></button></div><div class='content'>`;container += `<div id = 'list_HarrisonHotSprings' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Hope')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Hope</button><button class = 'button' id = 'Hope'></button></div><div class='content'>`;container += `<div id = 'list_Hope' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Kent')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Kent</button><button class = 'button' id = 'Kent'></button></div><div class='content'>`;container += `<div id = 'list_Kent' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Mission')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Mission</button><button class = 'button' id = 'Mission'></button></div><div class='content'>`;container += `<div id = 'list_Mission' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_FraserValleyRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('MetroVancouverRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Metro Vancouver Regional District</button><button class = 'button' id = 'MetroVancouverRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Anmore')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Anmore</button><button class = 'button' id = 'Anmore'></button></div><div class='content'>`;container += `<div id = 'list_Anmore' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Belcarra')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Belcarra</button><button class = 'button' id = 'Belcarra'></button></div><div class='content'>`;container += `<div id = 'list_Belcarra' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('BowenIsland')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Bowen Island</button><button class = 'button' id = 'BowenIsland'></button></div><div class='content'>`;container += `<div id = 'list_BowenIsland' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Burnaby')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Burnaby</button><button class = 'button' id = 'Burnaby'></button></div><div class='content'>`;container += `<div id = 'list_Burnaby' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Coquitlam')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Coquitlam</button><button class = 'button' id = 'Coquitlam'></button></div><div class='content'>`;container += `<div id = 'list_Coquitlam' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Delta')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Delta</button><button class = 'button' id = 'Delta'></button></div><div class='content'>`;container += `<div id = 'list_Delta' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Langley')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Langley</button><button class = 'button' id = 'Langley'></button></div><div class='content'>`;container += `<div id = 'list_Langley' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('LionsBay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lions Bay</button><button class = 'button' id = 'LionsBay'></button></div><div class='content'>`;container += `<div id = 'list_LionsBay' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('MapleRidge')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Maple Ridge</button><button class = 'button' id = 'MapleRidge'></button></div><div class='content'>`;container += `<div id = 'list_MapleRidge' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('NewWestminster')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >New Westminster</button><button class = 'button' id = 'NewWestminster'></button></div><div class='content'>`;container += `<div id = 'list_NewWestminster' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('NorthVancouver')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >North Vancouver</button><button class = 'button' id = 'NorthVancouver'></button></div><div class='content'>`;container += `<div id = 'list_NorthVancouver' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PittMeadows')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Pitt Meadows</button><button class = 'button' id = 'PittMeadows'></button></div><div class='content'>`;container += `<div id = 'list_PittMeadows' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PortCoquitlam')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Port Coquitlam</button><button class = 'button' id = 'PortCoquitlam'></button></div><div class='content'>`;container += `<div id = 'list_PortCoquitlam' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PortMoody')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Port Moody</button><button class = 'button' id = 'PortMoody'></button></div><div class='content'>`;container += `<div id = 'list_PortMoody' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Richmond')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Richmond</button><button class = 'button' id = 'Richmond'></button></div><div class='content'>`;container += `<div id = 'list_Richmond' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Surrey')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Surrey</button><button class = 'button' id = 'Surrey'></button></div><div class='content'>`;container += `<div id = 'list_Surrey' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Vancouver')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Vancouver</button><button class = 'button' id = 'Vancouver'></button></div><div class='content'>`;container += `<div id = 'list_Vancouver' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('WestVancouver')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >West Vancouver</button><button class = 'button' id = 'WestVancouver'></button></div><div class='content'>`;container += `<div id = 'list_WestVancouver' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('WhiteRock')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >White Rock</button><button class = 'button' id = 'WhiteRock'></button></div><div class='content'>`;container += `<div id = 'list_WhiteRock' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_MetroVancouverRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('Squamish-LillooetRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Squamish-Lillooet Regional District</button><button class = 'button' id = 'Squamish-LillooetRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Lillooet')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lillooet</button><button class = 'button' id = 'Lillooet'></button></div><div class='content'>`;container += `<div id = 'list_Lillooet' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Pemberton')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Pemberton</button><button class = 'button' id = 'Pemberton'></button></div><div class='content'>`;container += `<div id = 'list_Pemberton' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Squamish')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Squamish</button><button class = 'button' id = 'Squamish'></button></div><div class='content'>`;container += `<div id = 'list_Squamish' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Whistler')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Whistler</button><button class = 'button' id = 'Whistler'></button></div><div class='content'>`;container += `<div id = 'list_Whistler' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_Squamish-LillooetRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('SunshineCoastRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Sunshine Coast Regional District</button><button class = 'button' id = 'SunshineCoastRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Egmont/PenderHarbour')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Egmont / Pender Harbour</button><button class = 'button' id = 'Egmont/PenderHarbour'></button></div><div class='content'>`;container += `<div id = 'list_Egmont/PenderHarbour' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Elphinstone')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Elphinstone</button><button class = 'button' id = 'Elphinstone'></button></div><div class='content'>`;container += `<div id = 'list_Elphinstone' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Gibsons')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Gibsons</button><button class = 'button' id = 'Gibsons'></button></div><div class='content'>`;container += `<div id = 'list_Gibsons' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('HalfmoonBay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Halfmoon Bay</button><button class = 'button' id = 'HalfmoonBay'></button></div><div class='content'>`;container += `<div id = 'list_HalfmoonBay' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('RobertsCreek')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Roberts Creek</button><button class = 'button' id = 'RobertsCreek'></button></div><div class='content'>`;container += `<div id = 'list_RobertsCreek' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Sechelt')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Sechelt</button><button class = 'button' id = 'Sechelt'></button></div><div class='content'>`;container += `<div id = 'list_Sechelt' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('WestHoweSound')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >West Howe Sound</button><button class = 'button' id = 'WestHoweSound'></button></div><div class='content'>`;container += `<div id = 'list_WestHoweSound' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_SunshineCoastRegionalDistrict' class = 'list-region'></div></div>`;}container += `<div id = 'list_Mainland/Southwest' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('Thompson-Okanagan')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Thompson-Okanagan</button><button class = 'button' id = 'Thompson-Okanagan'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('RegionalDistrictofCentralOkanagan')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Central Okanagan</button><button class = 'button' id = 'RegionalDistrictofCentralOkanagan'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Kelowna')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Kelowna</button><button class = 'button' id = 'Kelowna'></button></div><div class='content'>`;container += `<div id = 'list_Kelowna' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('LakeCountry')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lake Country</button><button class = 'button' id = 'LakeCountry'></button></div><div class='content'>`;container += `<div id = 'list_LakeCountry' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Peachland')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Peachland</button><button class = 'button' id = 'Peachland'></button></div><div class='content'>`;container += `<div id = 'list_Peachland' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('WestKelowna')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >West Kelowna</button><button class = 'button' id = 'WestKelowna'></button></div><div class='content'>`;container += `<div id = 'list_WestKelowna' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofCentralOkanagan' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('ColumbiaShuswapRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Columbia Shuswap Regional District</button><button class = 'button' id = 'ColumbiaShuswapRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Golden')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Golden</button><button class = 'button' id = 'Golden'></button></div><div class='content'>`;container += `<div id = 'list_Golden' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Revelstoke')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Revelstoke</button><button class = 'button' id = 'Revelstoke'></button></div><div class='content'>`;container += `<div id = 'list_Revelstoke' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('SalmonArm')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Salmon Arm</button><button class = 'button' id = 'SalmonArm'></button></div><div class='content'>`;container += `<div id = 'list_SalmonArm' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Sicamous')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Sicamous</button><button class = 'button' id = 'Sicamous'></button></div><div class='content'>`;container += `<div id = 'list_Sicamous' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_ColumbiaShuswapRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('RegionalDistrictofNorthOkanagan')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of North Okanagan</button><button class = 'button' id = 'RegionalDistrictofNorthOkanagan'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Armstrong')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Armstrong</button><button class = 'button' id = 'Armstrong'></button></div><div class='content'>`;container += `<div id = 'list_Armstrong' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Coldstream')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Coldstream</button><button class = 'button' id = 'Coldstream'></button></div><div class='content'>`;container += `<div id = 'list_Coldstream' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Enderby')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Enderby</button><button class = 'button' id = 'Enderby'></button></div><div class='content'>`;container += `<div id = 'list_Enderby' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Lumby')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lumby</button><button class = 'button' id = 'Lumby'></button></div><div class='content'>`;container += `<div id = 'list_Lumby' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Spallumcheen')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Spallumcheen</button><button class = 'button' id = 'Spallumcheen'></button></div><div class='content'>`;container += `<div id = 'list_Spallumcheen' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Vernon')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Vernon</button><button class = 'button' id = 'Vernon'></button></div><div class='content'>`;container += `<div id = 'list_Vernon' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofNorthOkanagan' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('RegionalDistrictofOkanagan-Similkameen')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Okanagan-Similkameen</button><button class = 'button' id = 'RegionalDistrictofOkanagan-Similkameen'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Keremeos')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Keremeos</button><button class = 'button' id = 'Keremeos'></button></div><div class='content'>`;container += `<div id = 'list_Keremeos' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Oliver')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Oliver</button><button class = 'button' id = 'Oliver'></button></div><div class='content'>`;container += `<div id = 'list_Oliver' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Osoyoos')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Osoyoos</button><button class = 'button' id = 'Osoyoos'></button></div><div class='content'>`;container += `<div id = 'list_Osoyoos' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Penticton')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Penticton</button><button class = 'button' id = 'Penticton'></button></div><div class='content'>`;container += `<div id = 'list_Penticton' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Princeton')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Princeton</button><button class = 'button' id = 'Princeton'></button></div><div class='content'>`;container += `<div id = 'list_Princeton' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Summerland')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Summerland</button><button class = 'button' id = 'Summerland'></button></div><div class='content'>`;container += `<div id = 'list_Summerland' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofOkanagan-Similkameen' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('Thompson-NicolaRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Thompson-Nicola Regional District</button><button class = 'button' id = 'Thompson-NicolaRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Ashcroft')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Ashcroft</button><button class = 'button' id = 'Ashcroft'></button></div><div class='content'>`;container += `<div id = 'list_Ashcroft' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Barriere')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Barriere</button><button class = 'button' id = 'Barriere'></button></div><div class='content'>`;container += `<div id = 'list_Barriere' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('BeautifulNicolaValley-North')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Beautiful Nicola Valley - North</button><button class = 'button' id = 'BeautifulNicolaValley-North'></button></div><div class='content'>`;container += `<div id = 'list_BeautifulNicolaValley-North' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('BeautifulNicolaValley-South')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Beautiful Nicola Valley - South</button><button class = 'button' id = 'BeautifulNicolaValley-South'></button></div><div class='content'>`;container += `<div id = 'list_BeautifulNicolaValley-South' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('BlueSkyCountry')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Blue Sky Country</button><button class = 'button' id = 'BlueSkyCountry'></button></div><div class='content'>`;container += `<div id = 'list_BlueSkyCountry' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('BonapartePlateau')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Bonaparte Plateau</button><button class = 'button' id = 'BonapartePlateau'></button></div><div class='content'>`;container += `<div id = 'list_BonapartePlateau' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('CacheCreek')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cache Creek</button><button class = 'button' id = 'CacheCreek'></button></div><div class='content'>`;container += `<div id = 'list_CacheCreek' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Chase')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Chase</button><button class = 'button' id = 'Chase'></button></div><div class='content'>`;container += `<div id = 'list_Chase' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Clearwater')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Clearwater</button><button class = 'button' id = 'Clearwater'></button></div><div class='content'>`;container += `<div id = 'list_Clearwater' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Clinton')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Clinton</button><button class = 'button' id = 'Clinton'></button></div><div class='content'>`;container += `<div id = 'list_Clinton' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('CopperDesertCountry')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Copper Desert Country</button><button class = 'button' id = 'CopperDesertCountry'></button></div><div class='content'>`;container += `<div id = 'list_CopperDesertCountry' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Grasslands')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Grasslands</button><button class = 'button' id = 'Grasslands'></button></div><div class='content'>`;container += `<div id = 'list_Grasslands' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Kamloops')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Kamloops</button><button class = 'button' id = 'Kamloops'></button></div><div class='content'>`;container += `<div id = 'list_Kamloops' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('LoganLake')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Logan Lake</button><button class = 'button' id = 'LoganLake'></button></div><div class='content'>`;container += `<div id = 'list_LoganLake' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('LowerNorthThompson')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lower North Thompson</button><button class = 'button' id = 'LowerNorthThompson'></button></div><div class='content'>`;container += `<div id = 'list_LowerNorthThompson' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Lytton')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lytton</button><button class = 'button' id = 'Lytton'></button></div><div class='content'>`;container += `<div id = 'list_Lytton' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Merritt')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Merritt</button><button class = 'button' id = 'Merritt'></button></div><div class='content'>`;container += `<div id = 'list_Merritt' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('RiversandthePeaks')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Rivers and the Peaks</button><button class = 'button' id = 'RiversandthePeaks'></button></div><div class='content'>`;container += `<div id = 'list_RiversandthePeaks' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('SunPeaksMountainResort')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Sun Peaks Mountain Resort</button><button class = 'button' id = 'SunPeaksMountainResort'></button></div><div class='content'>`;container += `<div id = 'list_SunPeaksMountainResort' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('ThompsonHeadwaters')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Thompson Headwaters</button><button class = 'button' id = 'ThompsonHeadwaters'></button></div><div class='content'>`;container += `<div id = 'list_ThompsonHeadwaters' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('WellsGrayCountry')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Wells Gray Country</button><button class = 'button' id = 'WellsGrayCountry'></button></div><div class='content'>`;container += `<div id = 'list_WellsGrayCountry' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_Thompson-NicolaRegionalDistrict' class = 'list-region'></div></div>`;}container += `<div id = 'list_Thompson-Okanagan' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('Kootenay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Kootenay</button><button class = 'button' id = 'Kootenay'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('RegionalDistrictofCentralKootenay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Central Kootenay</button><button class = 'button' id = 'RegionalDistrictofCentralKootenay'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Castlegar')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Castlegar</button><button class = 'button' id = 'Castlegar'></button></div><div class='content'>`;container += `<div id = 'list_Castlegar' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Creston')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Creston</button><button class = 'button' id = 'Creston'></button></div><div class='content'>`;container += `<div id = 'list_Creston' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Kaslo')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Kaslo</button><button class = 'button' id = 'Kaslo'></button></div><div class='content'>`;container += `<div id = 'list_Kaslo' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('LowerArrow/Columbia')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lower Arrow / Columbia</button><button class = 'button' id = 'LowerArrow/Columbia'></button></div><div class='content'>`;container += `<div id = 'list_LowerArrow/Columbia' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Nakusp')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Nakusp</button><button class = 'button' id = 'Nakusp'></button></div><div class='content'>`;container += `<div id = 'list_Nakusp' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Nelson')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Nelson</button><button class = 'button' id = 'Nelson'></button></div><div class='content'>`;container += `<div id = 'list_Nelson' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('NewDenver')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >New Denver</button><button class = 'button' id = 'NewDenver'></button></div><div class='content'>`;container += `<div id = 'list_NewDenver' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Salmo')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Salmo</button><button class = 'button' id = 'Salmo'></button></div><div class='content'>`;container += `<div id = 'list_Salmo' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Silverton')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Silverton</button><button class = 'button' id = 'Silverton'></button></div><div class='content'>`;container += `<div id = 'list_Silverton' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('TheArrowLakes')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >The Arrow Lakes</button><button class = 'button' id = 'TheArrowLakes'></button></div><div class='content'>`;container += `<div id = 'list_TheArrowLakes' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('TheSlocanValley')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >The Slocan Valley</button><button class = 'button' id = 'TheSlocanValley'></button></div><div class='content'>`;container += `<div id = 'list_TheSlocanValley' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Wynndel/EastShoreKootenayLake')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Wynndel / East Shore Kootenay Lake</button><button class = 'button' id = 'Wynndel/EastShoreKootenayLake'></button></div><div class='content'>`;container += `<div id = 'list_Wynndel/EastShoreKootenayLake' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofCentralKootenay' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('RegionalDistrictofEastKootenay')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of East Kootenay</button><button class = 'button' id = 'RegionalDistrictofEastKootenay'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('CanalFlats')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Canal Flats</button><button class = 'button' id = 'CanalFlats'></button></div><div class='content'>`;container += `<div id = 'list_CanalFlats' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Cranbrook')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cranbrook</button><button class = 'button' id = 'Cranbrook'></button></div><div class='content'>`;container += `<div id = 'list_Cranbrook' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Elkford')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Elkford</button><button class = 'button' id = 'Elkford'></button></div><div class='content'>`;container += `<div id = 'list_Elkford' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Fernie')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Fernie</button><button class = 'button' id = 'Fernie'></button></div><div class='content'>`;container += `<div id = 'list_Fernie' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Invermere')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Invermere</button><button class = 'button' id = 'Invermere'></button></div><div class='content'>`;container += `<div id = 'list_Invermere' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Kimberley')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Kimberley</button><button class = 'button' id = 'Kimberley'></button></div><div class='content'>`;container += `<div id = 'list_Kimberley' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('RadiumHotSprings')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Radium Hot Springs</button><button class = 'button' id = 'RadiumHotSprings'></button></div><div class='content'>`;container += `<div id = 'list_RadiumHotSprings' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Sparwood')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Sparwood</button><button class = 'button' id = 'Sparwood'></button></div><div class='content'>`;container += `<div id = 'list_Sparwood' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofEastKootenay' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('RegionalDistrictofKootenayBoundary')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Kootenay Boundary</button><button class = 'button' id = 'RegionalDistrictofKootenayBoundary'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('ChristinaLake')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Christina Lake</button><button class = 'button' id = 'ChristinaLake'></button></div><div class='content'>`;container += `<div id = 'list_ChristinaLake' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Fruitvale')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Fruitvale</button><button class = 'button' id = 'Fruitvale'></button></div><div class='content'>`;container += `<div id = 'list_Fruitvale' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('GrandForks')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Grand Forks</button><button class = 'button' id = 'GrandForks'></button></div><div class='content'>`;container += `<div id = 'list_GrandForks' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Greenwood')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Greenwood</button><button class = 'button' id = 'Greenwood'></button></div><div class='content'>`;container += `<div id = 'list_Greenwood' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('LowerColumbia/OldGlory')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Lower Columbia / Old Glory</button><button class = 'button' id = 'LowerColumbia/OldGlory'></button></div><div class='content'>`;container += `<div id = 'list_LowerColumbia/OldGlory' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Midway')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Midway</button><button class = 'button' id = 'Midway'></button></div><div class='content'>`;container += `<div id = 'list_Midway' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Montrose')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Montrose</button><button class = 'button' id = 'Montrose'></button></div><div class='content'>`;container += `<div id = 'list_Montrose' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Rossland')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Rossland</button><button class = 'button' id = 'Rossland'></button></div><div class='content'>`;container += `<div id = 'list_Rossland' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('RuralGrandForks')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Rural Grand Forks</button><button class = 'button' id = 'RuralGrandForks'></button></div><div class='content'>`;container += `<div id = 'list_RuralGrandForks' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Trail')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Trail</button><button class = 'button' id = 'Trail'></button></div><div class='content'>`;container += `<div id = 'list_Trail' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Warfield')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Warfield</button><button class = 'button' id = 'Warfield'></button></div><div class='content'>`;container += `<div id = 'list_Warfield' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('WestBoundary')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >West Boundary</button><button class = 'button' id = 'WestBoundary'></button></div><div class='content'>`;container += `<div id = 'list_WestBoundary' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofKootenayBoundary' class = 'list-region'></div></div>`;}container += `<div id = 'list_Kootenay' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('Cariboo')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cariboo</button><button class = 'button' id = 'Cariboo'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('CaribooRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Cariboo Regional District</button><button class = 'button' id = 'CaribooRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('100MileHouse')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >100 Mile House</button><button class = 'button' id = '100MileHouse'></button></div><div class='content'>`;container += `<div id = 'list_100MileHouse' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Quesnel')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Quesnel</button><button class = 'button' id = 'Quesnel'></button></div><div class='content'>`;container += `<div id = 'list_Quesnel' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Wells')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Wells</button><button class = 'button' id = 'Wells'></button></div><div class='content'>`;container += `<div id = 'list_Wells' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('WilliamsLake')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Williams Lake</button><button class = 'button' id = 'WilliamsLake'></button></div><div class='content'>`;container += `<div id = 'list_WilliamsLake' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_CaribooRegionalDistrict' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('RegionalDistrictofFraser-FortGeorge')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Fraser-Fort George</button><button class = 'button' id = 'RegionalDistrictofFraser-FortGeorge'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Mackenzie')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Mackenzie</button><button class = 'button' id = 'Mackenzie'></button></div><div class='content'>`;container += `<div id = 'list_Mackenzie' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('McBride')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >McBride</button><button class = 'button' id = 'McBride'></button></div><div class='content'>`;container += `<div id = 'list_McBride' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PrinceGeorge')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Prince George</button><button class = 'button' id = 'PrinceGeorge'></button></div><div class='content'>`;container += `<div id = 'list_PrinceGeorge' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Valemount')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Valemount</button><button class = 'button' id = 'Valemount'></button></div><div class='content'>`;container += `<div id = 'list_Valemount' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofFraser-FortGeorge' class = 'list-region'></div></div>`;}container += `<div id = 'list_Cariboo' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('NorthCoast')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >North Coast</button><button class = 'button' id = 'NorthCoast'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('RegionalDistrictofKitimat-Stikine')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Kitimat-Stikine</button><button class = 'button' id = 'RegionalDistrictofKitimat-Stikine'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('Kitimat')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Kitimat</button><button class = 'button' id = 'Kitimat'></button></div><div class='content'>`;container += `<div id = 'list_Kitimat' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Terrace')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Terrace</button><button class = 'button' id = 'Terrace'></button></div><div class='content'>`;container += `<div id = 'list_Terrace' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofKitimat-Stikine' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('NorthCoastRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >North Coast Regional District</button><button class = 'button' id = 'NorthCoastRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('DaajingGiids')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Daajing Giids</button><button class = 'button' id = 'DaajingGiids'></button></div><div class='content'>`;container += `<div id = 'list_DaajingGiids' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Masset')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Masset</button><button class = 'button' id = 'Masset'></button></div><div class='content'>`;container += `<div id = 'list_Masset' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PortClements')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Port Clements</button><button class = 'button' id = 'PortClements'></button></div><div class='content'>`;container += `<div id = 'list_PortClements' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PortEdward')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Port Edward</button><button class = 'button' id = 'PortEdward'></button></div><div class='content'>`;container += `<div id = 'list_PortEdward' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('PrinceRupert')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Prince Rupert</button><button class = 'button' id = 'PrinceRupert'></button></div><div class='content'>`;container += `<div id = 'list_PrinceRupert' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_NorthCoastRegionalDistrict' class = 'list-region'></div></div>`;}container += `<div id = 'list_NorthCoast' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('Nechako')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Nechako </button><button class = 'button' id = 'Nechako'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('RegionalDistrictofBulkley-Nechako')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Regional District of Bulkley-Nechako</button><button class = 'button' id = 'RegionalDistrictofBulkley-Nechako'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('BurnsLake')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Burns Lake</button><button class = 'button' id = 'BurnsLake'></button></div><div class='content'>`;container += `<div id = 'list_BurnsLake' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('FortStJames')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Fort St James</button><button class = 'button' id = 'FortStJames'></button></div><div class='content'>`;container += `<div id = 'list_FortStJames' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('FraserLake')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Fraser Lake</button><button class = 'button' id = 'FraserLake'></button></div><div class='content'>`;container += `<div id = 'list_FraserLake' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Granisle')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Granisle</button><button class = 'button' id = 'Granisle'></button></div><div class='content'>`;container += `<div id = 'list_Granisle' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Houston')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Houston</button><button class = 'button' id = 'Houston'></button></div><div class='content'>`;container += `<div id = 'list_Houston' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Smithers')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Smithers</button><button class = 'button' id = 'Smithers'></button></div><div class='content'>`;container += `<div id = 'list_Smithers' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Telkwa')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Telkwa</button><button class = 'button' id = 'Telkwa'></button></div><div class='content'>`;container += `<div id = 'list_Telkwa' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Vanderhoof')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Vanderhoof</button><button class = 'button' id = 'Vanderhoof'></button></div><div class='content'>`;container += `<div id = 'list_Vanderhoof' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_RegionalDistrictofBulkley-Nechako' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('StikineRegion(Unincorporated)')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Stikine Region (Unincorporated)</button><button class = 'button' id = 'StikineRegion(Unincorporated)'></button></div><div class='content'>`;
    container += `<div id = 'list_StikineRegion(Unincorporated)' class = 'list-region'></div></div>`;}container += `<div id = 'list_Nechako' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('Northeast')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Northeast</button><button class = 'button' id = 'Northeast'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('NorthernRockiesRegionalMunicipality')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Northern Rockies Regional Municipality</button><button class = 'button' id = 'NorthernRockiesRegionalMunicipality'></button></div><div class='content'>`;
    container += `<div id = 'list_NorthernRockiesRegionalMunicipality' class = 'list-region'></div></div>`;}if(count_area.hasOwnProperty('PeaceRiverRegionalDistrict')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Peace River Regional District</button><button class = 'button' id = 'PeaceRiverRegionalDistrict'></button></div><div class='content'>`;
    if(count_area.hasOwnProperty('DawsonCreek')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Dawson Creek</button><button class = 'button' id = 'DawsonCreek'></button></div><div class='content'>`;container += `<div id = 'list_DawsonCreek' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Chetwynd')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Chetwynd</button><button class = 'button' id = 'Chetwynd'></button></div><div class='content'>`;container += `<div id = 'list_Chetwynd' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('FortStJohn')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Fort St John</button><button class = 'button' id = 'FortStJohn'></button></div><div class='content'>`;container += `<div id = 'list_FortStJohn' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('HudsonsHope')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Hudsons Hope</button><button class = 'button' id = 'HudsonsHope'></button></div><div class='content'>`;container += `<div id = 'list_HudsonsHope' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('Taylor')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Taylor</button><button class = 'button' id = 'Taylor'></button></div><div class='content'>`;container += `<div id = 'list_Taylor' class = 'list-region'></div></div>`;}
    if(count_area.hasOwnProperty('TumblerRidge')||count_area.hasOwnProperty('all')){ container +=`<div class = 'control-button-wrapper'> <button class='collapsible' >Tumbler Ridge</button><button class = 'button' id = 'TumblerRidge'></button></div><div class='content'>`;container += `<div id = 'list_TumblerRidge' class = 'list-region'></div></div>`;}
    container += `<div id = 'list_PeaceRiverRegionalDistrict' class = 'list-region'></div></div>`;}container += `<div id = 'list_Northeast' class = 'list-region'></div></div>`;}
/*
(((((((((((  UPDATE ABOVE  )))))))))))
*/
                container += `<div id = 'list_coastalBC'></div>
                </div>
              </div>
          </div>
            `;
            return container;
      }


/*
  *************************************
  ******  Function listMarkers()  ******
  *************************************
  
      Make the list of sites shown on the region control
      Create button to direct the location
    
  */


      function listMarkers(map, markers, region){
        const list = document.getElementById("list_"+region);
        if(list){
          let counter = 0;
          const buttons = document.createElement('div');
          markers.forEach(p =>{  
            if(p.area == region){
              const title = document.createElement('button');
              title.textContent = p.name;
              title.classList = 'list-button';
              title.onclick = () => {
                map.flyTo([p.marker.getLatLng().lat+0.005,p.marker.getLatLng().lng], 13);
                filterMarker(map, markers, true, true);
                document.getElementById('showFilterYear').value = 'All Time';
                p.marker.openPopup();
              }
              buttons.appendChild(title);
              buttons.appendChild(document.createElement('br'));
              counter++;
            }
          });
        if(counter){
          if(region == 'coastalBC'){
            list.innerHTML = "List of Other Sites on Coastal BC";
          }
/*
(((((((((((  UPDATE BELOW  )))))))))))
*/
else if(region =='VancouverIsland/Coast'){list.innerHTML = 'List of Other Sites in Vancouver Island/Coast';}
else if(region =='RegionalDistrictofAlberni-Clayoquot'){list.innerHTML = 'List of Other Sites in Regional District of Alberni-Clayoquot';}
else if(region =='PortAlberni'){list.innerHTML = 'List of Sites in Port Alberni';}
else if(region =='CapitalRegionalDistrict'){list.innerHTML = 'List of Other Sites in Capital Regional District';}
else if(region =='CentralSaanich'){list.innerHTML = 'List of Sites in Central Saanich';}
else if(region =='Colwood'){list.innerHTML = 'List of Sites in Colwood';}
else if(region =='Esquimalt'){list.innerHTML = 'List of Sites in Esquimalt';}
else if(region =='Highlands'){list.innerHTML = 'List of Sites in Highlands';}
else if(region =='JordanRiver'){list.innerHTML = 'List of Sites in Jordan River';}
else if(region =='Langford'){list.innerHTML = 'List of Sites in Langford';}
else if(region =='Metchosin'){list.innerHTML = 'List of Sites in Metchosin';}
else if(region =='NorthSaanich'){list.innerHTML = 'List of Sites in North Saanich';}
else if(region =='OakBay'){list.innerHTML = 'List of Sites in Oak Bay';}
else if(region =='PortRenfrew'){list.innerHTML = 'List of Sites in Port Renfrew';}
else if(region =='Saanich'){list.innerHTML = 'List of Sites in Saanich';}
else if(region =='SaltspringIsland'){list.innerHTML = 'List of Sites in Saltspring Island';}
else if(region =='Sidney'){list.innerHTML = 'List of Sites in Sidney';}
else if(region =='Sooke'){list.innerHTML = 'List of Sites in Sooke';}
else if(region =='Victoria'){list.innerHTML = 'List of Sites in Victoria';}
else if(region =='ViewRoyal'){list.innerHTML = 'List of Sites in View Royal';}
else if(region =='CentralCoastRegionalDistrict'){list.innerHTML = 'List of Other Sites in Central Coast Regional District';}
else if(region =='ComoxValleyRegionalDistrict'){list.innerHTML = 'List of Other Sites in Comox Valley Regional District';}
else if(region =='BaynesSound-Denman/HornbyIslands'){list.innerHTML = 'List of Sites in Baynes Sound - Denman/Hornby Islands';}
else if(region =='Comox'){list.innerHTML = 'List of Sites in Comox';}
else if(region =='Courtenay'){list.innerHTML = 'List of Sites in Courtenay';}
else if(region =='Cumberland'){list.innerHTML = 'List of Sites in Cumberland';}
else if(region =='Puntledge/BlackCreek'){list.innerHTML = 'List of Sites in Puntledge / Black Creek';}
else if(region =='CowichanValleyRegionalDistrict'){list.innerHTML = 'List of Other Sites in Cowichan Valley Regional District';}
else if(region =='Chemainus'){list.innerHTML = 'List of Sites in Chemainus';}
else if(region =='CobbleHill'){list.innerHTML = 'List of Sites in Cobble Hill';}
else if(region =='CowichanBay'){list.innerHTML = 'List of Sites in Cowichan Bay';}
else if(region =='CowichanStation'){list.innerHTML = 'List of Sites in Cowichan Station';}
else if(region =='Duncan'){list.innerHTML = 'List of Sites in Duncan';}
else if(region =='Glenora'){list.innerHTML = 'List of Sites in Glenora';}
else if(region =='Ladysmith'){list.innerHTML = 'List of Sites in Ladysmith';}
else if(region =='LakeCowichan'){list.innerHTML = 'List of Sites in Lake Cowichan';}
else if(region =='Malahat'){list.innerHTML = 'List of Sites in Malahat';}
else if(region =='MillBay'){list.innerHTML = 'List of Sites in Mill Bay';}
else if(region =='NorthCowichan'){list.innerHTML = 'List of Sites in North Cowichan';}
else if(region =='Sahtlam'){list.innerHTML = 'List of Sites in Sahtlam';}
else if(region =='Saltair'){list.innerHTML = 'List of Sites in Saltair';}
else if(region =='ShawniganLake'){list.innerHTML = 'List of Sites in Shawnigan Lake';}
else if(region =='SouthLlakeCowichan'){list.innerHTML = 'List of Sites in South Llake Cowichan';}
else if(region =='Youbou'){list.innerHTML = 'List of Sites in Youbou';}
else if(region =='RegionalDistrictofMountWaddington'){list.innerHTML = 'List of Other Sites in Regional District of Mount Waddington';}
else if(region =='AlertBay'){list.innerHTML = 'List of Sites in Alert Bay';}
else if(region =='PortAlice'){list.innerHTML = 'List of Sites in Port Alice';}
else if(region =='PortHardy'){list.innerHTML = 'List of Sites in Port Hardy';}
else if(region =='PortMcNeill'){list.innerHTML = 'List of Sites in Port McNeill';}
else if(region =='RegionalDistrictofNanaimo'){list.innerHTML = 'List of Other Sites in Regional District of Nanaimo';}
else if(region =='Lantzville'){list.innerHTML = 'List of Sites in Lantzville';}
else if(region =='Nanaimo'){list.innerHTML = 'List of Sites in Nanaimo';}
else if(region =='Parksville'){list.innerHTML = 'List of Sites in Parksville';}
else if(region =='Cassidy'){list.innerHTML = 'List of Sites in Cassidy';}
else if(region =='QualicumBeach'){list.innerHTML = 'List of Sites in Qualicum Beach';}
else if(region =='qathetRegionalDistrict'){list.innerHTML = 'List of Other Sites in qathet Regional District';}
else if(region =='PowellRiver'){list.innerHTML = 'List of Sites in Powell River';}
else if(region =='StrathconaRegionalDistrict'){list.innerHTML = 'List of Other Sites in Strathcona Regional District';}
else if(region =='CampbellRiver'){list.innerHTML = 'List of Sites in Campbell River';}
else if(region =='Cortes'){list.innerHTML = 'List of Sites in Cortes';}
else if(region =='DiscoveryIslands/MainlandInlets'){list.innerHTML = 'List of Sites in Discovery Islands / Mainland Inlets';}
else if(region =='GoldRiver'){list.innerHTML = 'List of Sites in Gold River';}
else if(region =='Kyuquot/Nootka-Sayward'){list.innerHTML = 'List of Sites in Kyuquot / Nootka-Sayward';}
else if(region =='OysterBay/ButtleLake'){list.innerHTML = 'List of Sites in Oyster Bay / Buttle Lake';}
else if(region =='StrathconaRegionalDistrict'){list.innerHTML = 'List of Other Sites in Mainland/Southwest';}
else if(region =='FraserValleyRegionalDistrict'){list.innerHTML = 'List of Other Sites in Fraser Valley Regional District';}
else if(region =='Abbotsford'){list.innerHTML = 'List of Sites in Abbotsford';}
else if(region =='Chilliwack'){list.innerHTML = 'List of Sites in Chilliwack';}
else if(region =='HarrisonHotSprings'){list.innerHTML = 'List of Sites in Harrison Hot Springs';}
else if(region =='Hope'){list.innerHTML = 'List of Sites in Hope';}
else if(region =='Kent'){list.innerHTML = 'List of Sites in Kent';}
else if(region =='Mission'){list.innerHTML = 'List of Sites in Mission';}
else if(region =='MetroVancouverRegionalDistrict'){list.innerHTML = 'List of Other Sites in Metro Vancouver Regional District';}
else if(region =='Anmore'){list.innerHTML = 'List of Sites in Anmore';}
else if(region =='Belcarra'){list.innerHTML = 'List of Sites in Belcarra';}
else if(region =='BowenIsland'){list.innerHTML = 'List of Sites in Bowen Island';}
else if(region =='Burnaby'){list.innerHTML = 'List of Sites in Burnaby';}
else if(region =='Coquitlam'){list.innerHTML = 'List of Sites in Coquitlam';}
else if(region =='Delta'){list.innerHTML = 'List of Sites in Delta';}
else if(region =='Langley'){list.innerHTML = 'List of Sites in Langley';}
else if(region =='LionsBay'){list.innerHTML = 'List of Sites in Lions Bay';}
else if(region =='MapleRidge'){list.innerHTML = 'List of Sites in Maple Ridge';}
else if(region =='NewWestminster'){list.innerHTML = 'List of Sites in New Westminster';}
else if(region =='NorthVancouver'){list.innerHTML = 'List of Sites in North Vancouver';}
else if(region =='PittMeadows'){list.innerHTML = 'List of Sites in Pitt Meadows';}
else if(region =='PortCoquitlam'){list.innerHTML = 'List of Sites in Port Coquitlam';}
else if(region =='PortMoody'){list.innerHTML = 'List of Sites in Port Moody';}
else if(region =='Richmond'){list.innerHTML = 'List of Sites in Richmond';}
else if(region =='Surrey'){list.innerHTML = 'List of Sites in Surrey';}
else if(region =='Vancouver'){list.innerHTML = 'List of Sites in Vancouver';}
else if(region =='WestVancouver'){list.innerHTML = 'List of Sites in West Vancouver';}
else if(region =='WhiteRock'){list.innerHTML = 'List of Sites in White Rock';}
else if(region =='Squamish-LillooetRegionalDistrict'){list.innerHTML = 'List of Other Sites in Squamish-Lillooet Regional District';}
else if(region =='Lillooet'){list.innerHTML = 'List of Sites in Lillooet';}
else if(region =='Pemberton'){list.innerHTML = 'List of Sites in Pemberton';}
else if(region =='Squamish'){list.innerHTML = 'List of Sites in Squamish';}
else if(region =='Whistler'){list.innerHTML = 'List of Sites in Whistler';}
else if(region =='SunshineCoastRegionalDistrict'){list.innerHTML = 'List of Other Sites in Sunshine Coast Regional District';}
else if(region =='Egmont/PenderHarbour'){list.innerHTML = 'List of Sites in Egmont / Pender Harbour';}
else if(region =='Elphinstone'){list.innerHTML = 'List of Sites in Elphinstone';}
else if(region =='Gibsons'){list.innerHTML = 'List of Sites in Gibsons';}
else if(region =='HalfmoonBay'){list.innerHTML = 'List of Sites in Halfmoon Bay';}
else if(region =='RobertsCreek'){list.innerHTML = 'List of Sites in Roberts Creek';}
else if(region =='Sechelt'){list.innerHTML = 'List of Sites in Sechelt';}
else if(region =='WestHoweSound'){list.innerHTML = 'List of Sites in West Howe Sound';}
else if(region =='SunshineCoastRegionalDistrict'){list.innerHTML = 'List of Other Sites in Thompson-Okanagan';}
else if(region =='RegionalDistrictofCentralOkanagan'){list.innerHTML = 'List of Other Sites in Regional District of Central Okanagan';}
else if(region =='Kelowna'){list.innerHTML = 'List of Sites in Kelowna';}
else if(region =='LakeCountry'){list.innerHTML = 'List of Sites in Lake Country';}
else if(region =='Peachland'){list.innerHTML = 'List of Sites in Peachland';}
else if(region =='WestKelowna'){list.innerHTML = 'List of Sites in West Kelowna';}
else if(region =='ColumbiaShuswapRegionalDistrict'){list.innerHTML = 'List of Other Sites in Columbia Shuswap Regional District';}
else if(region =='Golden'){list.innerHTML = 'List of Sites in Golden';}
else if(region =='Revelstoke'){list.innerHTML = 'List of Sites in Revelstoke';}
else if(region =='SalmonArm'){list.innerHTML = 'List of Sites in Salmon Arm';}
else if(region =='Sicamous'){list.innerHTML = 'List of Sites in Sicamous';}
else if(region =='RegionalDistrictofNorthOkanagan'){list.innerHTML = 'List of Other Sites in Regional District of North Okanagan';}
else if(region =='Armstrong'){list.innerHTML = 'List of Sites in Armstrong';}
else if(region =='Coldstream'){list.innerHTML = 'List of Sites in Coldstream';}
else if(region =='Enderby'){list.innerHTML = 'List of Sites in Enderby';}
else if(region =='Lumby'){list.innerHTML = 'List of Sites in Lumby';}
else if(region =='Spallumcheen'){list.innerHTML = 'List of Sites in Spallumcheen';}
else if(region =='Vernon'){list.innerHTML = 'List of Sites in Vernon';}
else if(region =='RegionalDistrictofOkanagan-Similkameen'){list.innerHTML = 'List of Other Sites in Regional District of Okanagan-Similkameen';}
else if(region =='Keremeos'){list.innerHTML = 'List of Sites in Keremeos';}
else if(region =='Oliver'){list.innerHTML = 'List of Sites in Oliver';}
else if(region =='Osoyoos'){list.innerHTML = 'List of Sites in Osoyoos';}
else if(region =='Penticton'){list.innerHTML = 'List of Sites in Penticton';}
else if(region =='Princeton'){list.innerHTML = 'List of Sites in Princeton';}
else if(region =='Summerland'){list.innerHTML = 'List of Sites in Summerland';}
else if(region =='Thompson-NicolaRegionalDistrict'){list.innerHTML = 'List of Other Sites in Thompson-Nicola Regional District';}
else if(region =='Ashcroft'){list.innerHTML = 'List of Sites in Ashcroft';}
else if(region =='Barriere'){list.innerHTML = 'List of Sites in Barriere';}
else if(region =='BeautifulNicolaValley-North'){list.innerHTML = 'List of Sites in Beautiful Nicola Valley - North';}
else if(region =='BeautifulNicolaValley-South'){list.innerHTML = 'List of Sites in Beautiful Nicola Valley - South';}
else if(region =='BlueSkyCountry'){list.innerHTML = 'List of Sites in Blue Sky Country';}
else if(region =='BonapartePlateau'){list.innerHTML = 'List of Sites in Bonaparte Plateau';}
else if(region =='CacheCreek'){list.innerHTML = 'List of Sites in Cache Creek';}
else if(region =='Chase'){list.innerHTML = 'List of Sites in Chase';}
else if(region =='Clearwater'){list.innerHTML = 'List of Sites in Clearwater';}
else if(region =='Clinton'){list.innerHTML = 'List of Sites in Clinton';}
else if(region =='CopperDesertCountry'){list.innerHTML = 'List of Sites in Copper Desert Country';}
else if(region =='Grasslands'){list.innerHTML = 'List of Sites in Grasslands';}
else if(region =='Kamloops'){list.innerHTML = 'List of Sites in Kamloops';}
else if(region =='LoganLake'){list.innerHTML = 'List of Sites in Logan Lake';}
else if(region =='LowerNorthThompson'){list.innerHTML = 'List of Sites in Lower North Thompson';}
else if(region =='Lytton'){list.innerHTML = 'List of Sites in Lytton';}
else if(region =='Merritt'){list.innerHTML = 'List of Sites in Merritt';}
else if(region =='RiversandthePeaks'){list.innerHTML = 'List of Sites in Rivers and the Peaks';}
else if(region =='SunPeaksMountainResort'){list.innerHTML = 'List of Sites in Sun Peaks Mountain Resort';}
else if(region =='ThompsonHeadwaters'){list.innerHTML = 'List of Sites in Thompson Headwaters';}
else if(region =='WellsGrayCountry'){list.innerHTML = 'List of Sites in Wells Gray Country';}
else if(region =='Thompson-NicolaRegionalDistrict'){list.innerHTML = 'List of Other Sites in Kootenay';}
else if(region =='RegionalDistrictofCentralKootenay'){list.innerHTML = 'List of Other Sites in Regional District of Central Kootenay';}
else if(region =='Castlegar'){list.innerHTML = 'List of Sites in Castlegar';}
else if(region =='Creston'){list.innerHTML = 'List of Sites in Creston';}
else if(region =='Kaslo'){list.innerHTML = 'List of Sites in Kaslo';}
else if(region =='LowerArrow/Columbia'){list.innerHTML = 'List of Sites in Lower Arrow / Columbia';}
else if(region =='Nakusp'){list.innerHTML = 'List of Sites in Nakusp';}
else if(region =='Nelson'){list.innerHTML = 'List of Sites in Nelson';}
else if(region =='NewDenver'){list.innerHTML = 'List of Sites in New Denver';}
else if(region =='Salmo'){list.innerHTML = 'List of Sites in Salmo';}
else if(region =='Silverton'){list.innerHTML = 'List of Sites in Silverton';}
else if(region =='TheArrowLakes'){list.innerHTML = 'List of Sites in The Arrow Lakes';}
else if(region =='TheSlocanValley'){list.innerHTML = 'List of Sites in The Slocan Valley';}
else if(region =='Wynndel/EastShoreKootenayLake'){list.innerHTML = 'List of Sites in Wynndel / East Shore Kootenay Lake';}
else if(region =='RegionalDistrictofEastKootenay'){list.innerHTML = 'List of Other Sites in Regional District of East Kootenay';}
else if(region =='CanalFlats'){list.innerHTML = 'List of Sites in Canal Flats';}
else if(region =='Cranbrook'){list.innerHTML = 'List of Sites in Cranbrook';}
else if(region =='Elkford'){list.innerHTML = 'List of Sites in Elkford';}
else if(region =='Fernie'){list.innerHTML = 'List of Sites in Fernie';}
else if(region =='Invermere'){list.innerHTML = 'List of Sites in Invermere';}
else if(region =='Kimberley'){list.innerHTML = 'List of Sites in Kimberley';}
else if(region =='RadiumHotSprings'){list.innerHTML = 'List of Sites in Radium Hot Springs';}
else if(region =='Sparwood'){list.innerHTML = 'List of Sites in Sparwood';}
else if(region =='RegionalDistrictofKootenayBoundary'){list.innerHTML = 'List of Other Sites in Regional District of Kootenay Boundary';}
else if(region =='ChristinaLake'){list.innerHTML = 'List of Sites in Christina Lake';}
else if(region =='Fruitvale'){list.innerHTML = 'List of Sites in Fruitvale';}
else if(region =='GrandForks'){list.innerHTML = 'List of Sites in Grand Forks';}
else if(region =='Greenwood'){list.innerHTML = 'List of Sites in Greenwood';}
else if(region =='LowerColumbia/OldGlory'){list.innerHTML = 'List of Sites in Lower Columbia / Old Glory';}
else if(region =='Midway'){list.innerHTML = 'List of Sites in Midway';}
else if(region =='Montrose'){list.innerHTML = 'List of Sites in Montrose';}
else if(region =='Rossland'){list.innerHTML = 'List of Sites in Rossland';}
else if(region =='RuralGrandForks'){list.innerHTML = 'List of Sites in Rural Grand Forks';}
else if(region =='Trail'){list.innerHTML = 'List of Sites in Trail';}
else if(region =='Warfield'){list.innerHTML = 'List of Sites in Warfield';}
else if(region =='WestBoundary'){list.innerHTML = 'List of Sites in West Boundary';}
else if(region =='RegionalDistrictofKootenayBoundary'){list.innerHTML = 'List of Other Sites in Cariboo';}
else if(region =='CaribooRegionalDistrict'){list.innerHTML = 'List of Other Sites in Cariboo Regional District';}
else if(region =='100MileHouse'){list.innerHTML = 'List of Sites in 100 Mile House';}
else if(region =='Quesnel'){list.innerHTML = 'List of Sites in Quesnel';}
else if(region =='Wells'){list.innerHTML = 'List of Sites in Wells';}
else if(region =='WilliamsLake'){list.innerHTML = 'List of Sites in Williams Lake';}
else if(region =='RegionalDistrictofFraser-FortGeorge'){list.innerHTML = 'List of Other Sites in Regional District of Fraser-Fort George';}
else if(region =='Mackenzie'){list.innerHTML = 'List of Sites in Mackenzie';}
else if(region =='McBride'){list.innerHTML = 'List of Sites in McBride';}
else if(region =='PrinceGeorge'){list.innerHTML = 'List of Sites in Prince George';}
else if(region =='Valemount'){list.innerHTML = 'List of Sites in Valemount';}
else if(region =='RegionalDistrictofFraser-FortGeorge'){list.innerHTML = 'List of Other Sites in North Coast';}
else if(region =='RegionalDistrictofKitimat-Stikine'){list.innerHTML = 'List of Other Sites in Regional District of Kitimat-Stikine';}
else if(region =='Kitimat'){list.innerHTML = 'List of Sites in Kitimat';}
else if(region =='Terrace'){list.innerHTML = 'List of Sites in Terrace';}
else if(region =='NorthCoastRegionalDistrict'){list.innerHTML = 'List of Other Sites in North Coast Regional District';}
else if(region =='DaajingGiids'){list.innerHTML = 'List of Sites in Daajing Giids';}
else if(region =='Masset'){list.innerHTML = 'List of Sites in Masset';}
else if(region =='PortClements'){list.innerHTML = 'List of Sites in Port Clements';}
else if(region =='PortEdward'){list.innerHTML = 'List of Sites in Port Edward';}
else if(region =='PrinceRupert'){list.innerHTML = 'List of Sites in Prince Rupert';}
else if(region =='NorthCoastRegionalDistrict'){list.innerHTML = 'List of Other Sites in Nechako ';}
else if(region =='RegionalDistrictofBulkley-Nechako'){list.innerHTML = 'List of Other Sites in Regional District of Bulkley-Nechako';}
else if(region =='BurnsLake'){list.innerHTML = 'List of Sites in Burns Lake';}
else if(region =='FortStJames'){list.innerHTML = 'List of Sites in Fort St James';}
else if(region =='FraserLake'){list.innerHTML = 'List of Sites in Fraser Lake';}
else if(region =='Granisle'){list.innerHTML = 'List of Sites in Granisle';}
else if(region =='Houston'){list.innerHTML = 'List of Sites in Houston';}
else if(region =='Smithers'){list.innerHTML = 'List of Sites in Smithers';}
else if(region =='Telkwa'){list.innerHTML = 'List of Sites in Telkwa';}
else if(region =='Vanderhoof'){list.innerHTML = 'List of Sites in Vanderhoof';}
else if(region =='StikineRegion(Unincorporated)'){list.innerHTML = 'List of Other Sites in Stikine Region (Unincorporated)';}
else if(region =='StikineRegion(Unincorporated)'){list.innerHTML = 'List of Other Sites in Northeast';}
else if(region =='NorthernRockiesRegionalMunicipality'){list.innerHTML = 'List of Other Sites in Northern Rockies Regional Municipality';}
else if(region =='PeaceRiverRegionalDistrict'){list.innerHTML = 'List of Other Sites in Peace River Regional District';}
else if(region =='DawsonCreek'){list.innerHTML = 'List of Sites in Dawson Creek';}
else if(region =='Chetwynd'){list.innerHTML = 'List of Sites in Chetwynd';}
else if(region =='FortStJohn'){list.innerHTML = 'List of Sites in Fort St John';}
else if(region =='HudsonsHope'){list.innerHTML = 'List of Sites in Hudsons Hope';}
else if(region =='Taylor'){list.innerHTML = 'List of Sites in Taylor';}
else if(region =='TumblerRidge'){list.innerHTML = 'List of Sites in Tumbler Ridge';}
/*
(((((((((((  UPDATE ABOVE  )))))))))))
*/
//Just in case something else is in the region
          else{
            list.innerHTML = "List of Sites in " + region[0].toUpperCase()+ region.slice(1);
          }
          list.appendChild(buttons);

        }
        }
      }





/*
  ##################################################
  ######     Functions for Filter Control     ######
  ##################################################
  
      filterControlhtml()
          Style the HTML
            div (custom-control-hover)
              strong 
              abbr (question)
              div (filter-content)
                  div (plain)
                      label
                          input (: camp) *1
                      label
                          input (: sawmill) *1
                      label
                          input (: p&p) *1
                      label
                          input (: community) *1
                      label
                          input (: BCFS) *1
                      button (: allTime) *2
                      input (: filterYear) *3
                      input (: showFilterYear) *4
        *1:
            checkbox (default is checked)
        *2:
            button to show all markers
        *3:
            range 
        *4: 
            text (numerical value or 'All Time')



      filterMaker()
          Remove all the markers
          Add the markers, that meet the filter




  
  ***************************************
  ******  Function filterMarker()  ******
  ***************************************

        Style the HTML.

*/

      function filterControlhtml(){
        return `
          <div class = "custom-control-hover">
            <strong>Filters</strong><abbr class = 'question' id = 'filcon' title="Select categories and the year to filter the sites"></abbr>
            <div class="filter-content"><div class="plain">
              <label><input type="checkbox" id="camp" checked>Show camps</label><br>
              <label><input type="checkbox" id="sawmill" checked>Show Sawmills</label><br>
              <label><input type="checkbox" id="p&p" checked>Show Paper and Pulp Mills</label><br>
              <label><input type="checkbox" id="community" checked>Show Comunities</label><br>
              <label><input type="checkbox" id="BCFS" checked>Show BCFS</label><br>
              <button id='allTime'>Show All Time</button><br>
              <input type = 'range' id = 'filterYear' min="1848" max="2025" value="2025"> <br>
              Year: <input type='text' id = 'showFilterYear' value = 'All Time' >
            </div></div>
          </div>
            `;
      }
/*
  ***************************************
  ******  Function filterMarker()  ******
  ***************************************
  
      Remove all the markers
      Add the markers, that meet the filter
    
  */

      function filterMarker(map, markers, allTime = false, allSite = false){
        markers.forEach(obj =>{
          map.removeLayer(obj.marker);
          let boolCategory = false;
          category_list.forEach(cate_obj => {
            if(document.getElementById(cate_obj).checked && (obj.category == cate_obj)){boolCategory = true;}
          });
          if(allSite){boolCategory = true;}
          
          const year = +document.getElementById('filterYear').value;
          let boolYear = obj.yearStart <= year && year <= obj.yearEnd;
         if (allTime){boolYear = true;}

          if(boolCategory && boolYear){
            obj.marker.addTo(map);
          }
        })
      }

/*
  #################################################
  ######     Functions for layer Control     ######
  #################################################
  
      layerControlhtml()
          Style the HTML
            div (layconContent)
              strong 
              abbr (question)
              div (plain)
                  select (layer)
                      option <Street View 1>
                      option <Street View 2>
                      option <Topographic View>
                      option <Satellite>



      layerFunctions()
          Change the tile
          Remove the tile attribution
          Add the tile attribution


  
  *******************************************
  ******  Function layerControlhtml()  ******
  *******************************************

        Style the HTML.

*/

      function layerControlhtml(){
        return `
          <div class = "layconContent">
            <strong>Background Map</strong><abbr class = 'question' id = 'laycon' title="Select the background map type"></abbr>
            <div class="plain">
              <select id="layer">
                <option value="osm">Street View 1</option>
                <option value="cv">Street View 2</option>
                <option value="otm">Topographic View</option>
                <option value="esi">Satellite Imagery</option>
              </select>
            </div></div>
          </div>
            `;
      }

/*
  *****************************************
  ******  Function layerFunctions()  ******
  *****************************************
  
      Change the tile and attribution as selected

      osm:
            OpenStreetMap
            http://www.openstreetmap.org/copyright
            Street View
      cv:
            CARTO
            https://carto.com/attribution
            Street View
      otm:
            OpenTopoMap
            http://opentopomap.org/
            Topographic Map
      esi:
            Esri
            https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm
            Satellite Map


  */

      function layerFunctions(map){

                  setTimeout(() => {
            document.getElementById('layer').addEventListener('change', function(){
              if (document.getElementById('layer').value == 'osm'){
                map.attributionControl.removeAttribution('&copy; <a href="https://carto.com/attribution" target="_blank" class = ".leaflet-control-attribution">CARTO</a>');
                map.attributionControl.removeAttribution('Tiles &copy; <a href="https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm" target="_blank">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community');
                map.attributionControl.removeAttribution('Map data: &copy; <a href="http://opentopomap.org/" target="_blank"> OpenTopoMap</a> contributors, SRTM | Map style: &copy; OpenTopoMap (<a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC-BY-SA</a>)');
                L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                  maxZoom: 20,
                  attribution: '&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors'
                }).addTo(map);
              }
              else if (document.getElementById('layer').value == 'cv'){
                map.attributionControl.removeAttribution('&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors');
                map.attributionControl.removeAttribution('Tiles &copy; <a href="https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm" target="_blank">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community');
                map.attributionControl.removeAttribution('Map data: &copy; <a href="http://opentopomap.org/" target="_blank"> OpenTopoMap</a> contributors, SRTM | Map style: &copy; OpenTopoMap (<a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC-BY-SA</a>)');
                L.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png', {
                  maxZoom: 20,
                  attribution: '&copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>'
                }).addTo(map);
              }
              else if (document.getElementById('layer').value == 'otm'){
                map.attributionControl.removeAttribution('&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors');
                map.attributionControl.removeAttribution('&copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>');
                map.attributionControl.removeAttribution('Tiles &copy; <a href="https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm" target="_blank">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community');
                L.tileLayer('https://tile.opentopomap.org/{z}/{x}/{y}.png', {
                  maxZoom: 20,
                  attribution: 'Map data: &copy; <a href="http://opentopomap.org/" target="_blank"> OpenTopoMap</a> contributors, SRTM | Map style: &copy; OpenTopoMap (<a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC-BY-SA</a>)'
                }).addTo(map);
              }
              else if (document.getElementById('layer').value == 'esi'){
                map.attributionControl.removeAttribution('&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors');
                map.attributionControl.removeAttribution('&copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>');
                map.attributionControl.removeAttribution('Map data: &copy; <a href="http://opentopomap.org/" target="_blank"> OpenTopoMap</a> contributors, SRTM | Map style: &copy; OpenTopoMap (<a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC-BY-SA</a>)');
                L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                  maxZoom: 20,
                  attribution: 'Tiles &copy; <a href="https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm" target="_blank">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
                }).addTo(map);
              }


            }); 
          }, 0);


      }


/*
  #############################################
  ######     Size for Mobile Devices     ######
  #############################################

      Show the marker popup even the small screen. ie. controls do not cover the popup
      
      Variables
          Tm: px between the base and the top of Map.
          Tp: px between the base and the top of Popup.
          Hp: height of Popup.
          Hm: height of Map.
          HpMax: maximum Hieght of popup. 
          Lp: px between the base and the left of popup
          Lm: px between the base and the left of map
          Rp: px between the base and right of maximum-wide popup
          Rm: px between the base and right of map
          Wp: width of popup
          Wm: width of map
          Lf: px between the base and left of filter control
          Br: px between the base and bottom of region control
          Rl: px between the base and Right of layer control
          w: screen width
          h: screen height

      Change how to open the marker popup, depending on...:

          Size 
              The popup width is 45vw (45% of screen width) when the screen width or height is smaller than 726 *1
                  if (w or h<726), Rp is Lp + half of screen size + a bit of padding of popup
                     >> Rp = Lp+w/2+Wp/10
              The popup height is 60vh (60% of screen height) when the screen width or height is smaller than 726 *1
                  if (h<726), HpMax is Tm + Hp.
                     >> HpMax = Tm+Hp
              
          Landscape (w>h)
              Open the marker popup the center between the controls
              
              if bottom of popup < bottom of max-height popup (+ padding) (Tp+Hp < HpMax +Hm/25)
                  move vertically 
                  >> moveY=Tp+Hp-HpMax - Hm/25;

              if left of popup < right of layer control (Lp<Lm+Rl)
                  move horizontally
                  >> moveX=Lp-Lm-Rl

              if left of filter control < right of popup (Lm+Lf<Rp)
                  move horizontally
                  >> moveX=Rp-Lm-Lf

                  if this move make the layer control cover the popup (Lp-moveX<Lm+Rl)
                      move horizontally back a bit
                      >> moveX=Lp-moveX-Lm-Rl+moveX

          Portrait (w<h)
              Open the marker popup below the controls

              if bottom of popup < bottom of max-height popup from the bottom of the region control (Tp+Hp < HpMax+Br+Hm/25)
                  move versically
                  >> moveY=Tp+Hp-HpMax - Hm/25 - Br
              if left of popup < left of map (Lp<Lm)
                  move horizontally 
                  >> moveX=Lp-Lm
              if right of map < right of popup (Rm<Rp)
                  move horizontally 
                  >> moveX=Rp-Rm


          *1: 
              See styles.css

*/
    function size_for_phone(map){
      setTimeout(()=>{
          map.on('popupopen', function(e) {
        const popupEl = e.popup.getElement();
        const mapEl = map.getContainer();

        if (!popupEl || !mapEl) return;

      const popupRect = popupEl.getBoundingClientRect();
        const mapRect = mapEl.getBoundingClientRect();      
        const Tm = mapRect.top;
        const Tp = popupRect.top;
        const Hm = mapRect.height;
        const Hp = popupRect.height;
        let HpMax = 425;
        const Lp = popupRect.left;
        const Lm = mapRect.left;
        let Rp = Lp+400;
        const Rm = mapRect.right;
        const Wp = popupRect.width;
        const Wm = mapRect.width;
        const filcon = document.querySelector('.filter-control');
        const Bfilcon = filcon.getBoundingClientRect();
        const Lf = Bfilcon.left;
        const regcon = document.querySelector('.custom-control');
        const Bregcon = regcon.getBoundingClientRect();
        const Br = Bregcon.bottom
        const laycon = document.querySelector('.layconContent');
        const Blaycon = laycon.getBoundingClientRect();
        const Rl = Blaycon.right;

        let moveX=0;
        let moveY=0;

      //Phone/Tablet or PC Screen
        var ratio = window.devicePixelRatio || 1;
        let w = screen.width * ratio;
        let h = screen.height * ratio;
        if (typeof window !== 'undefined') {
          w=window.innerWidth
          h=window.innerHeight
        }
        if((w<768)||(h<768)){
          HpMax = Tm+Hp;
          Rp = Lp+w/2+Wp/10;
        }
      
      //landscape
        if (w>h){
          if (Tp+Hp < HpMax +Hm/25) {
            moveY=Tp+Hp-HpMax - Hm/25;
          }
          if(Lp<Lm+Rl){
            moveX=Lp-Lm-Rl;
          }
          if(Lm+Lf<Rp){
            moveX=Rp-Lm-Lf;
            if(Lp-moveX<Lm+Rl){
              moveX=Lp-moveX-Lm-Rl+moveX;
            }
          }
      //portrait
        }else{
          if (Tp+Hp < HpMax+Br+Hm/25) {
            moveY=Tp+Hp-HpMax - Hm/25 - Br;
          }
          if(Lp<Lm){
            moveX=Lp-Lm;
          }
          if(Rm<Rp){
            moveX=Rp-Rm;
          }
        }
//        console.log(Wp);
        map.panBy([moveX, moveY], { animate: true });
      });
      },0);

      }


