 
      //Icon to make them visibly identifiable
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
      const sawmill_icon2 = L.icon({
        iconUrl: './icon/saw.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      const camp_icon2 = L.icon({
        iconUrl: './icon/camp.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      const paper_icon2 = L.icon({
        iconUrl: './icon/paper.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      const community_icon2 = L.icon({
        iconUrl: './icon/community.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
        iconSize: [30, 30],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41]
      });
      const sawmill_icon = sawmill_icon1;
      const camp_icon = camp_icon1;
      const paper_icon = paper_icon1;
      const community_icon = community_icon1;


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

            /*
  ################################################
  ######     Functions for Control HTML     ######
  ################################################
  const region_categories = [          
        'coastalBC',          
        'vancouverIsland',         
        'haidaGwaii',         
        'vancouver', 
//        
        'capital',         
        'cowichanValley',         
        'nanaimoo',         
        'comoxValley',         
        'alberniClayoquot',         
//       
        'victoria',         
        'viewRoyal',         
        'sooke',         
        'ladysmith',         
        'lakeCowichan',         
        'northCowichan',         
        'chemainus',         
        'cowichanBay',         
        'shawniganLake',         
        'ptRenfrew',         
        'nanaimo',         
        'courtenay',         
        'alberni',         
        'strathcona',         
        'campbell',         
    ];        
    
  */


    
      function customControlhtml(count_area){
        //check the region
        
        
        if(count_area.hasOwnProperty('victoria')){count_area['capital'] = 1;}
        if(count_area.hasOwnProperty('viewRoyal')){count_area['capital'] = 1;}
        if(count_area.hasOwnProperty('sooke')){count_area['capital'] = 1;}
        if(count_area.hasOwnProperty('ladysmith')){count_area['cowichanValley'] = 1;}
        if(count_area.hasOwnProperty('lakeCowichan')){count_area['cowichanValley'] = 1;}
        if(count_area.hasOwnProperty('northCowichan')){count_area['cowichanValley'] = 1;}
        if(count_area.hasOwnProperty('chemainus')){count_area['cowichanValley'] = 1;}
        if(count_area.hasOwnProperty('cowichanBay')){count_area['cowichanValley'] = 1;}
        if(count_area.hasOwnProperty('shawniganLake')){count_area['cowichanValley'] = 1;}
        if(count_area.hasOwnProperty('ptRenfrew')){count_area['cowichanValley'] = 1;}
        if(count_area.hasOwnProperty('nanaimo')){count_area['nanaimoo'] = 1;}
        if(count_area.hasOwnProperty('courtenay')){count_area['comoxValley'] = 1;}
        if(count_area.hasOwnProperty('alberni')){count_area['alberniClayoquot'] = 1;}
        if(count_area.hasOwnProperty('campbell')){count_area['strathcona'] = 1;}
        if(count_area.hasOwnProperty('capital')){count_area['vancouverIsland'] = 1;}
        if(count_area.hasOwnProperty('cowichanValley')){count_area['vancouverIsland'] = 1;}
        if(count_area.hasOwnProperty('nanaimoo')){count_area['vancouverIsland'] = 1;}
        if(count_area.hasOwnProperty('comoxValley')){count_area['vancouverIsland'] = 1;}
        if(count_area.hasOwnProperty('alberniClayoquot')){count_area['vancouverIsland'] = 1;}
        if(count_area.hasOwnProperty('strathcona')){count_area['vancouverIsland'] = 1;}

        let container = `
          <div class = "custom-control-hover">
              <strong>Region Control  </strong><abbr class = 'question' id = 'regcon' title="Click Plus Sign to Zoom In"></abbr>
              <div class="custom-content">
                <button class = 'button-original-map' id = 'coastalBC'><i>Go Back to Coastal BC</i></button>`;
              if(count_area.hasOwnProperty('vancouverIsland')||count_area.hasOwnProperty('all')){
                container +=`
                <div class = 'control-button-wrapper'>
                    <button class="collapsible" >Vancouver Island</button>
                    <button class = 'button' id = 'vancouverIsland'></button>
                </div>
                <div class="content">`;
                if(count_area.hasOwnProperty('capital')||count_area.hasOwnProperty('all')){
                    container += `
                    <div class = 'control-button-wrapper'>
                        <button class="collapsible" >Capital Regional District</button>
                        <button class = 'button' id = 'capital'></button>
                    </div>
                    <div class="content">`;
                    if(count_area.hasOwnProperty('victoria')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Victoria</button>
                            <button class = 'button' id = 'victoria'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_victoria'></div>
                        </div>`;

                    }
                    if(count_area.hasOwnProperty('viewRoyal')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >View Royal</button>
                            <button class = 'button' id = 'viewRoyal'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_viewRoyal'></div>
                        </div>`;
                    }
                    if(count_area.hasOwnProperty('sooke')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Sooke</button>
                            <button class = 'button' id = 'sooke'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_sooke'></div>
                        </div>`;
                    }
                    container += `
                      <div id = 'list_capital'></div>
                    </div>`;
            }
            if(count_area.hasOwnProperty('cowichanValley')||count_area.hasOwnProperty('all')){
              container +=`
                    <div class = 'control-button-wrapper'>
                        <button class="collapsible" >Cowichan Valley Regional District</button>
                        <button class = 'button' id = 'cowichanValley'></button>
                    </div>
                    <div class="content">`;
                    if(count_area.hasOwnProperty('ladysmith')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Ladysmith</button>
                            <button class = 'button' id = 'ladysmith'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_ladysmith'></div>
                        </div>`;
                    }
                    if(count_area.hasOwnProperty('lakeCowichan')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Lake Cowichan</button>
                            <button class = 'button' id = 'lakeCowichan'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_lakeCowichan'></div>
                        </div>`;
                    }
                    if(count_area.hasOwnProperty('northCowichan')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >North Cowichan</button>
                            <button class = 'button' id = 'northCowichan'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_northCowichan'></div>
                        </div>
                      `;

                    }
                    if(count_area.hasOwnProperty('chemainus')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Chemainus</button>
                            <button class = 'button' id = 'chemainus'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_chemainus'></div>
                        </div>
                      `;
                    }
                    if(count_area.hasOwnProperty('cowichanBay')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Cowichan Bay</button>
                            <button class = 'button' id = 'cowichanBay'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_cowichanBay'></div>
                        </div>
                      `;
                    }
                    if(count_area.hasOwnProperty('shawniganLake')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Shawnigan Lake</button>
                            <button class = 'button'id = 'shawniganLake' ></button>
                        </div>
                        <div class="content">
                            <div id = 'list_shawniganLake'></div>
                        </div>
                      `;
                    }
                    if(count_area.hasOwnProperty('ptRenfrew')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Port Renfrew</button>
                            <button class = 'button' id = 'ptRenfrew'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_ptRenfrew'></div>
                        </div>
                      `;
                    }
                    container += `
                        <div id = 'list_cowichanValley'></div>
                    </div>
                    `;
            }
            if(count_area.hasOwnProperty('nanaimoo')||count_area.hasOwnProperty('all')){
              container +=`
                    <div class = 'control-button-wrapper'>
                        <button class="collapsible" >Regional District of Nanaimo</button>
                        <button class = 'button' id = 'nanaimoo'></button>
                    </div>
                    <div class="content">
              `;
                    if(count_area.hasOwnProperty('nanaimo')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Nanaimo</button>
                            <button class = 'button' id = 'nanaimo'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_nanaimo'></div>
                        </div>
                      `;
                    }
                    container += `
                        <div id = 'list_nanaimoo'></div>
                    </div>
                    `;
            }
            if(count_area.hasOwnProperty('comoxValley')||count_area.hasOwnProperty('all')){
              container += `
                    <div class = 'control-button-wrapper'>
                        <button class="collapsible" >Comox Valley Regional District</button>
                        <button class = 'button' id = 'comoxValley'></button>
                    </div>
                    <div class="content">
              `;
                    if(count_area.hasOwnProperty('courtenay')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Courtenay</button>
                            <button class = 'button' id = 'courtenay'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_courtenay'></div>
                        </div>
                      `;
                      }
                      container += `
                        <div id = 'list_comoxValley'></div>                      
                    </div>
                      `;
            }
            if(count_area.hasOwnProperty('alberniClayoquot')||count_area.hasOwnProperty('all')){
              container += `
                    <div class = 'control-button-wrapper'>
                        <button class="collapsible" >Regional District of Alberni-Clayoquot</button>
                        <button class = 'button' id = 'alberniClayoquot'></button>
                    </div>
                    <div class="content">
              `;
                    if(count_area.hasOwnProperty('alberni')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Port Alberni</button>
                            <button class = 'button' id = 'alberni'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_alberni'></div>
                        </div>
                      `;
                    }
                    container += `
                        <div id = 'list_alberniClayoquot'></div>                                            
                    </div>
                    `;
            }
            if(count_area.hasOwnProperty('strathcona')||count_area.hasOwnProperty('all')){
              container += `
                    <div class = 'control-button-wrapper'>
                        <button class="collapsible" >Strathcona Regional District</button>
                        <button class = 'button' id = 'strathcona'></button>
                    </div>
                    <div class="content">
              `;
                    if(count_area.hasOwnProperty('campbell')||count_area.hasOwnProperty('all')){
                      container += `
                        <div class = 'control-button-wrapper'>
                            <button class="collapsible" >Campbell</button>
                            <button class = 'button' id = 'campbell'></button>
                        </div>
                        <div class="content">
                            <div id = 'list_campbell'></div>
                        </div>
                      `;
                    }
                    container += `
                        <div id = 'list_strathcona'></div>
                    </div>
                    `;
            }
          container += `
                  <div id = 'list_vancouverIsland'></div>
                </div>`;
        }
        if(count_area.hasOwnProperty('haidaGwaii')||count_area.hasOwnProperty('all')){
          container += `
                <div class = 'control-button-wrapper'>
                    <button class="collapsible" >Haida Gwaii</button>
                    <button class = 'button' id = 'haidaGwaii'></button>
                </div>
                <div class="content">
                  <div id = 'list_haidaGwaii'></div>
                </div>`;
        }
        if(count_area.hasOwnProperty('vancouver')||count_area.hasOwnProperty('all')){
          container += `<div class = 'control-button-wrapper'>
                    <button class="collapsible" >Vancouver</button>
                    <button class = 'button' id = 'vancouver'></button>
                </div>
                <div class="content">
                    <div id = 'list_vancouver'></div>
                </div>`;
        }                
                container += `<div id = 'list_coastalBC'></div>
                <div class = 'rg-con-foot'>
                </div>
              </div>
          </div>
            `;
            return container;
      }

      function filterControlhtml(){
        return `
          <div class = "custom-control-hover">
            <strong>Filter  Control</strong> <button class = 'question' id = 'filcon'></button>
            <div class="filter-content"><div class="plain">
              <label><input type="checkbox" id="camp" checked>Show camps</label><br>
              <label><input type="checkbox" id="sawmill" checked>Show Sawmills</label><br>
              <label><input type="checkbox" id="p&p" checked>Show Paper and Pulp Mills</label><br>
              <label><input type="checkbox" id="community" checked>Show Comunities</label><br>
              <label><input type="checkbox" id="BCFS" checked>Show BCFS</label><br>
              <button id='allTime'>Show All Time</button><br>
              <input type = 'range' id = 'filterYear' min="1699" max="2025" value="2025"> <br>
              Year: <input type='text' id = 'showFilterYear' value = 'All Time' >
            </div></div>
          </div>
            `;
      }

      function layerControlhtml(){
//          <div class = "custom-control-hover">
//<div class="filter-content"><div class="plain">
        return `
          <div class = "plain">
            <strong>Layer  Control</strong> <button class = 'question' id = 'filcon'></button>
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
      function layerFunctions(map){

                  setTimeout(() => {
            document.getElementById('layer').addEventListener('change', function(){
              if (document.getElementById('layer').value == 'osm'){
                map.attributionControl.removeAttribution('&copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>');
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
              else if (document.getElementById('layer').value == 'esi'){
                map.attributionControl.removeAttribution('&copy; <a href="http://www.openstreetmap.org/copyright" target="_blank">OpenStreetMap</a> contributors');
                map.attributionControl.removeAttribution('&copy; <a href="https://carto.com/attribution" target="_blank">CARTO</a>');
                map.attributionControl.removeAttribution('Map data: &copy; <a href="http://opentopomap.org/" target="_blank"> OpenTopoMap</a> contributors, SRTM | Map style: &copy; OpenTopoMap (<a href="https://creativecommons.org/licenses/by-sa/3.0/"> CC-BY-SA</a>)');
                L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}', {
                  maxZoom: 20,
                  attribution: 'Tiles &copy; <a href="https://doc.arcgis.com/en/arcgis-online/reference/terms-of-use.htm" target="_blank">Esri</a> &mdash; Source: Esri, Maxar, Earthstar Geographics, and the GIS User Community'
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


            }); 
          }, 0);


      }

