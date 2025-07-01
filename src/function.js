/*
  #####################################
  #####     Functions for Map     #####
  #####################################
  */
      


    /*
  **********************************************
  *******  FUNCTION createPopupContent()  ******
  **********************************************
  
  Create popup content and listeners
      
  
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
          imageLink: point.imageLink1
        }, {
          image: point.image2,
          imageText: point.imageText2,
          imageLink: point.imageLink2
        }, {
          image: point.image3,
          imageText: point.imageText3,
          imageLink: point.imageLink3
        }, {
          image: point.image4,
          imageText: point.imageText4,
          imageLink: point.imageLink4
        }, {
          image: point.image5,
          imageText: point.imageText5,
          imageLink: point.imageLink5
        }];

        for (let i = 0; ((i<5) && list_images[i].image); i++){
          const each_image_button = document.createElement('button');
          each_image_button.type = "button";
          each_image_button.className = "image-button"

          //Image Popup
          each_image_button.onclick = () => image_popup(list_images[i]);

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
          const regex = /^\d{3}/;
          if (regex.test(list_description[i].slice(0,4))){
            const each_description = document.createElement('h6');
            each_description.className = 'each_discrpt';
            each_description.textContent = list_description[i].slice(0,4) + ' - ' + list_description[i].slice(6)
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
****************************
*******  Image Popup  ******
****************************
*/
 
        function image_popup(image_in_list){
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
                <button onclick="closeSection()", class = 'large-image-close'><image src = './src/close.png' class ="large-image-close-icon"></button>
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
          //Image
            const each_large_image = document.createElement('img');
            each_large_image.src = image_in_list.image;
            each_large_image.className = 'large-image';

            large_image.appendChild(each_large_image);
            section_without_close2.appendChild(large_image);
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

          }

          
          function closeSection() {
            const section = document.getElementById('popupSection');
            if (section) {
              section.remove();
            }
          }


      /*
  ##################################################
  ######     Functions for Region Control     ######
  ##################################################
  
      To maintain the folded sections:
        updateParentHeight();
        updateSibling();
        updateChildren();
      For the button of the list in each region
        listMarkers()
  */
  
  /*
  *********************************************
  ******  Function updateParentHeight()  ******
  *********************************************
  
    Adjust the size of parent section of the folded content
      when you click, the parent section open and show the content without hiding by the other section
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
      This is necessary since the map will zoom up the region where you open the section with
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
      This is necessary since the map will zoom up the region where you open the section with
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
  
      