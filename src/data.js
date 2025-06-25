/*      
points stores all the datapoints on the map     
    title: Site Name     
    company: arbiturary name of the company     
    year: operation year     
    coords: the point on the map     
    category: either camp, sawmill, p&p, community     
    area: not precise location     
    list1-12: descriptions      
    image1-5: pic of the location     
    image_text1-5: explanations of image     
    addsrc: related literature     
/   
####  IMPORTANT  ####   
    There must not be empty line in this file.   
    You have to fill something if you make it look better   
*/     
const points = [     
/*     
####################################     
####   CHANGE THE LINES BELOW   ####     
*************************************/
//
//Replace This Line (and Delete)
//
/************************************
####   CHANGE THE LINES ABOVE    ####     
#####################################     
*/     
];     
//   
    const category_list = [     
        'camp',     
        'sawmill',     
        'p&p',     
        'community',     
        'BCFS'     
    ]     
    //List of groups above     
    const region_categories = [      
        'coastalBC',      
        'vancouverIsland',     
        'haidaGwaii',     
        'vancouver',     
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
//   
    const regions = [     
        {//Coastal BC     
            id: 'coastalBC',     
            zoom:[51.5, -127],      
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
//   
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
        },{//Alberni     
            id:'alberni',     
            zoom:[49.22, -124.76],     
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
//   
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
