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
      Title:
      Image: with a url if I have
      "Comment"
      comments:
      input box:
      post button: link to firebase 
        data management
  
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
        if(point.image1){
          const image1 = document.createElement('img');
          image1.src= point.image1;
          image1.className = 'image1';
          imageSection.appendChild(image1)
          if(point.image2){
            const image2 = document.createElement('img');
            image2.src= point.image2;
            image2.className = 'image2';
            imageSection.appendChild(image2)
            if(point.image3){
              const image3 = document.createElement('img');
              image3.src= point.image3;
              image3.className = 'image3';
              imageSection.appendChild(image3)
              if(point.image4){
                const image4 = document.createElement('img');
                image4.src= point.image4;
                image4.className = 'image4';
                imageSection.appendChild(image4)
                if(point.image5){
                  const image5 = document.createElement('img');
                  image5.src= point.image5;
                  image5.className = 'image5';
                  imageSection.appendChild(image5)
                }
              }
            }
          }
        }

        container.appendChild(imageSection);
        
    //Year
        const year = document.createElement('i');
        year.textContent = point.year;
        year.className = 'year';
        container.appendChild(year);
  
    //Discription
        const discription = document.createElement('ul');
        discription.className = 'discription';
      //List
        const list1 = document.createElement('li');
        list1.className = 'list1';      
        list1.textContent = point.list1;      
        discription.appendChild(list1);
        const list2 = document.createElement('li');
        list2.className = 'list2';      
        list2.textContent = point.list2;      
        discription.appendChild(list2);
        const list3 = document.createElement('li');
        list3.className = 'list3';      
        list3.textContent = point.list3;      
        discription.appendChild(list3);

        container.appendChild(discription);
          return container;
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
  
      