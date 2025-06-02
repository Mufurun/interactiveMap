/* 
points stores all the datapoints on the map
    id: used for the firebase storage
    name: shown on the popup of the map
    coords: the point on the map
    group: group is based on my travel history
    url: give url if there is 
    image: pic of the location
*/
const points = [
    {coords: [48.802386566337056, -123.71534951534247], title: " Test ", company: "Company Name", image1: "./src/images/image1.webp", image2:"./src/images/image2.webp", image3: "./src/images/image3.webp", image4: "./src/images/image4.webp", year: "2002-2025", list1: "discription 1", list2: "discription 2", list3: "discription 3", area:"cowichan", category:"ex", error: null},
{
title: 'Camp 1',	company: 'Alberni Pacific Lumber',	year: '-',	coords: [49.232,-124.79],	category: 'camp',	area: 'Port Alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/.png',	image2: './img/.png',	image3: './img/.png',	image4: './img/.png',	image5: './img/.png',	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '',	addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	error: 'year',	},{
title: 'Camp 2',	company: 'Alberni Pacific Lumber',	year: '-',	coords: [49.247,-124.738],	category: 'camp',	area: 'Port Alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/.png',	image2: './img/.png',	image3: './img/.png',	image4: './img/.png',	image5: './img/.png',	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '',	addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	error: 'year',	},{
title: 'Camp 3',	company: 'Alberni Pacific Lumber',	year: '1928-1934',	coords: [49.188,-124.71],	category: 'camp',	area: 'Port Alberni',	list1: 'Weist Logging Co. logged in the area for the Canadian Pacific Lumber Co. between 1912 and 1916',	list2: 'Alberni Pacific Lumber Co. bought the Canadian Pacific Lumber Co. in 1916 and operated logging ',	list3: 'APL had 7 logging camps and a sawmill in Port Alberni',	list4: 'In 1934 the camp was closed',	list5: 'APL was bought by HR MacMillan Export Co. in 1936',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/Camp3AlberniPacificLumber01.png',	image2: './img/Camp3AlberniPacificLumber02.png',	image3: './img/Camp3AlberniPacificLumber03.png',	image4: './img/Camp3AlberniPacificLumber04.png',	image5: './img/.png',	imageText1: 'â€œSpeeder Joy ridingâ€ on the APL Camp 3 line in 1930sâ€”McKnight 3-30',	imageText2: 'Alberni Pacific Lumber Co. #3 Lima Shay #2945 (1919) at Camp 3 https://portalberni.pastperfectonline.com/photo/6605F272-53E8-466A-8855-212761295499',	imageText3: 'APL Camp 4 https://search-bcarchives.royalbcmuseum.bc.ca/alberni-pacific-lumber-mill-camp-no-4-port-alberni',	imageText4: 'Â Camp 4, Underwood Coverâ€” https://search-bcarchives.royalbcmuseum.bc.ca/camp-4-underwood-cover-alberni-canal-alberni-pacific-lumber-company',	imageText5: '',	addSrc1: 'McKnight, George. A. Sawlogs on Steel Rails. Seniorsâ€™ History Committee. 1995.',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	error: null,	},{
title: 'Barclay Sound Cedar Co. Sawmill',	company: 'Alberni Pacific Lumber',	year: '1904-',	coords: [,],	category: 'sawmill',	area: 'Port Alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/.png',	image2: './img/.png',	image3: './img/.png',	image4: './img/.png',	image5: './img/.png',	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '',	addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	error: 'coords',	},{
title: 'Anderson Sawmill',	company: 'Anderson & Anderson',	year: '1861-1864',	coords: [49.235,-124.815],	category: 'sawmill',	area: 'Port Alberni',	list1: 'Â Captain Edward Stamp started business with 17,000 acres of land from Governor James Douglas with the help of Gilbert Sproat in 1960',	list2: 'Company was financially supported by James Thomson & Co. (Anderson & Anderson Co.) and Thomas Bilbe & Co. in London',	list3: '1st major export mill in BC. ',	list4: 'Daily production was up to 50,000 ft',	list5: 'Closed in 1864 due to the lack of timbers ',	list6: 'Machinery was sold in 1868',	list7: 'The abandoned mill was destroyed by fire in 1879 although there were no people until 1880s. ',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/AndersonSawmillAnderson&Anderson01.png',	image2: './img/AndersonSawmillAnderson&Anderson02.png',	image3: './img/AndersonSawmillAnderson&Anderson03.png',	image4: './img/AndersonSawmillAnderson&Anderson04.png',	image5: './img/.png',	imageText1: 'Anderson Sawmill Â  Alberni District Historical Society Archives ',	imageText2: 'Ships leading lumber and spurs from Anderson Sawmill - Alberni District Historical Society Archives',	imageText3: 'Oxen Logging in 1864â€”Working in the Woods (p.29)',	imageText4: 'old millsite of the Anderson sawmill in Port Alberni - UBC Library https://open.library.ubc.ca/collections/macmillan/items/1.0351089',	imageText5: '',	addSrc1: 'Alberni District Historical Society Archives.',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	error: null,	},{
title: 'Bainbridge sawmill',	company: 'Bainbridge Lumber Co.',	year: '1917-1927',	coords: [49.328,-124.85],	category: 'community',	area: 'Port Alberni',	list1: 'Clarence and Sam Hoard opened the business with sawmill and logging operation in Port Alberni',	list2: 'The mill cut from 75,000 to 80,000 feet a day with 100 workers at most',	list3: '',	list4: 'a store and a one-room schoolhouse (1920-)',	list5: 'Due to several fatal accidents, Workersâ€™ Compensation Board ordered to close the mill in 1927',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/BainmbridgeSawmillBainbridgeLumber01.png',	image2: './img/BainmbridgeSawmillBainbridgeLumber02.png',	image3: './img/BainmbridgeSawmillBainbridgeLumber03.png',	image4: './img/BainmbridgeSawmillBainbridgeLumber04.png',	image5: './img/BainmbridgeSawmillBainbridgeLumber05.png',	imageText1: 'PN04682-Bainbridge Sawmill. C 1925â€”Alberni District Historical Society.',	imageText2: 'PN02687â€”Bainbridge settlement  Alberni District Historical Society.',	imageText3: 'PN04760â€”Timbers over 100 feet long being loaded on three rail cars at Bainbridge. Alberni District Historical Society.',	imageText4: 'PN 1408â€”May Queen celebrations were typical in both large cities and small communities alike. Here in front of Bainbridge School is the 1921 May Queen and her entourage. Back row, left to right are Lina Marks (later Dutton); Queen, Joyce Hopkins; Page, Jimmie Flaherty; Nellie Marks (later Volkman). Front row, left to right are Hazel MacKenzie, __ Flaherty; Meredith Fjarlie; Mona Fjarlie; ___ Hopkins.â€”Alberni District Historical Society.',	imageText5: 'Canadian Pacific train load of Bainbridge lumberÂ  - City of Vancouver Archives',	addSrc1: 'McKnight, George. A. Sawlogs on Steel Rails. Eniorsâ€™ History Committee. 1995.',	addSrc2: 'Alberni District Historical Society. https://www.facebook.com/100064373756763/posts/352221780050081/',	addSrc3: 'City of Vancouver Archives. https://searcharchives.vancouver.ca/canadian-pacific-train-load-of-bainbridge-lumber-b-c-toothpicks',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	error: null,	},{
title: '',	company: 'BC Paper Manufacturing ',	year: '-',	coords: [,],	category: 'p&p',	area: 'Port Alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/.png',	image2: './img/.png',	image3: './img/.png',	image4: './img/.png',	image5: './img/.png',	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '',	addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	error: 'coords',	}
    ];
    

    const category_list = [
        'camp',
        'sawmill',
        'comunity',
        'p&p',
        'ex'
    ];
    //List of groups above
    const region_categories = [ 
        'coastalBC', 
        'vancouverIsland',
        'capital',
        'cowichanValley',
        'alberniClayoquot',
        'alberni',
        'cowichan',
        'comox',
        'chemainus',
        'central',
        'ladysmith',
        'nanaimo',
        'ptAlberni',
        'ptRenfrew',
        'victoria',
        'haida',
        'vancouver',
    ];
    
    const regions = [
        {//Coastal BC
            id: 'coastalBC',
            zoom:[52, -127], 
            size:6
        },{//Vancouver Island
            id: 'vancouverIsland',
            zoom:[49.57, -125.58],
            size:7
        },{//Capital
            id:'capital',
            zoom:[48.53, -123.87],
            size:10
        },{//Cowichan Valley
            id:'cowichanValley',
            zoom:[48.78, -124.],
            size:10
        },{//Nanaimo
            id:'nanaimoo',
            zoom:[49.18, -124.],
            size:10
        },{//Comox Valley
            id:'comoxValley',
            zoom:[49.70, -125],
            size:10
        },{//Alberni Clayoquot
            id:'alberniClayoquot',
            zoom:[49.19, -125.30],
            size:10
        },{//Strathcona
            id:'strathcona',
            zoom:[50.33, -125.57],
            size:9
        },
        
        {//Victoria
            id: 'victoria',
            zoom:[48.42, -123.35],
            size:13
        },{//View Royal
            id: 'viewRoyal',
            zoom:[48.46, -123.44],
            size:13
        },{//Sooke
            id: 'sooke',
            zoom:[48.39, -123.68],
            size:12
        },{//Shawnigan Lake
            id: 'shawniganLake',
            zoom:[48.64, -123.600],
            size:13
        },{//North Cowichan
            id: 'northCowichan',
            zoom:[48.83, -123.72],
            size:13
        },{//Lake Cowichan
            id: 'lakeCowichan',
            zoom:[48.87, -124.26],
            size:11
        },{//Ladysmith
            id: 'ladysmith',
            zoom:[49.027, -123.82],
            size:12
        },{//Chemainus
            id: 'chemainus',
            zoom:[48.918, -123.731],
            size:13
        },{//Cowichan Bay
            id: 'cowichanBay',
            zoom:[48.75, -123.61],
            size:14
        },{//Nanaimo
            id:'nanaimo',
            zoom:[49.15, -123.90],
            size:12
        },{//Courtenay
            id:'courtenay',
            zoom:[49.70, -125],
            size:12
        },{//Port Alberni
            id:'ptAlberni',
            zoom:[49.22, -124.76],
            size:13
        },{//Alberni
            id:'alberni',
            zoom:[49.35, -124.87],
            size:12
        },{//Port Renfrew
            id:'ptRenfrew',
            zoom:[48.56, -124.32],
            size:12
        },{//Campbell
            id:'campbell',
            zoom:[50.05, -125.28],
            size:12
        },
        
        {//Haida
            id: 'haida',
            zoom:[53.07, -131.98],
            size:7
        },{//Vancouver
            id:'vancouver',
            zoom:[49.30, -123.09],
            size:11
        }
        
    ];
    
    

//export { points, region_categories, regions };