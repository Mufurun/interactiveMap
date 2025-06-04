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
   function createPopupContent(point) {
  
    //div
        const container = document.createElement('div');
        container.className = 'popup-content';
  
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
          //each_image_button.onclick = () => image_popup(list_images[i]);

          each_image_button.onclick = () => image_popup(list_images[i]);

          const each_image = document.createElement('img');
          each_image.src= list_images[i].image;
          each_image.className = 'image';
          each_image_button.appendChild(each_image);




/*
          const each_link = document.createElement('a');
          each_link.target='_blank';
          each_link.href = list_images[i].image;
          const each_imageText = document.createElement('h6');
          each_imageText.textContent = list_images[i].imageText;


          each_image_div.appendChild(each_link);
          each_image_div.appendChild(each_imageText);
 */
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
          const each_description = document.createElement('li');
          each_description.textContent = list_description[i];
          description.appendChild(each_description);
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
        for (let i = 0; ((i<7)&&(list_addSrc[i] != '')); i++){
          const each_addSrc = document.createElement('li');
          each_addSrc.textContent = list_addSrc[i];
          additionalSource.appendChild(each_addSrc);
        }
        container.appendChild(additionalSource);

        return container;
      }


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
            section.className = 'popupSection';
            section.innerHTML = `
              <button onclick="closeSection()", class = 'large-image-close'>Close</button>
            `;
            const each_large_image = document.createElement('img');
            each_large_image.src = image_in_list.image;
            each_large_image.className = 'large-image'
            section.appendChild(each_large_image);

            const linked_text = document.createElement('a');
            linked_text.className = 'year';
            linked_text.target = '_blank';
            linked_text.href = image_in_list.imageLink;
            linked_text.textContent = image_in_list.imageText;
            section.appendChild(linked_text);

            // Append it to the map
            const mapContainer = document.getElementById('map');
            mapContainer.appendChild(section);
          };

          function closeSection() {
            const section = document.getElementById('popupSection');
            if (section) {
              section.remove();
            }
          }

      /*
  ######################################################
  ######     Functions for Inner HTML Control     ######
  ######################################################
  
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
        let parent = element.parentElement;
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
                  sibling.previousElementSibling.classList.toggle("active");
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
                  child.previousElementSibling.classList.toggle("active");
                  updateChildren(child);
              }
              child = child.nextElementSibling;
          }
      }
  
      