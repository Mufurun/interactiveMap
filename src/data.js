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
{title: 'BCFDC',	company: 'Company Name',	year: "1963-2025",	coords: [48.802, -123.715],	category:"community",	area: 'northCowichan',	list1: "1963: discription 1", list2: "1963: discription 2", list3: "discription 3", list4: "discription 4", list5: "discription 5", list6: "discription 6",list7: "discription 7", list8: "discription 8", list9: "discription 9",list10: "discription 10", list11: "discription 11", list12: "discription 12",	image1: "./src/images/image1.webp", image2:"./src/images/image2.webp", image3: "./src/images/image3.webp", image4: "./src/images/image4.webp",	image5: null,	imageText1: 'text1',	imageText2: 'text2',	imageText3: 'text3',	imageText4: 'text4',	imageText5: '', imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '', addSrc1: 'src1',	addSrc2: 'src2',	addSrc3: 'src3',	addSrc4: 'src4',	addSrc5: 'src5',	addSrc6: 'src6',	addSrc7: 'src7',  addSrcLink1: 'src1',	addSrcLink2: 'src2',	addSrcLink3: 'src3',	addSrcLink4: 'src4',	addSrcLink5: 'src5',	addSrcLink6: 'src6',	addSrcLink7: 'src7',    error: null,	},{ 
title: 'Camp 1',	company: 'Company A',	year: '-',	coords: [49.232,-124.79],	category: 'camp',	area: 'alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: null,	image2: null,	image3: null,	image4: null,	image5: null,	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '', imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '',	addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',  addSrcLink1: '',	addSrcLink2: '',	addSrcLink3: '',	addSrcLink4: '',	addSrcLink5: '',	addSrcLink6: '',	addSrcLink7: '',	error: 'year',	},{ 
title: 'Camp 2',	company: 'Company B',	year: '-',	coords: [49.247,-124.738],	category: 'camp',	area: 'alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: null,	image2: null,	image3: null,	image4: null,	image5: null,	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '', imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '',	addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	addSrcLink1: '',	addSrcLink2: '',	addSrcLink3: '',	addSrcLink4: '',	addSrcLink5: '',	addSrcLink6: '',	addSrcLink7: '',    error: 'year',	},{ 
title: 'Camp 3',	company: 'Company A',	year: '1928-1934',	coords: [49.188,-124.71],	category: 'camp',	area: 'alberni',	list1: "discription 1", list2: "discription 2", list3: "discription 3", list4: "discription 4", list5: "discription 5", list6: "discription 6", list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/Camp.png',	image2: './img/Camp.png',	image3: './img/Camp.png',	image4: './img/Camp.png',	image5: null,	imageText1: 'text1',	imageText2: 'text2',	imageText3: 'Atext3',	imageText4: 'text4',	imageText5: '',	imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '', addSrc1: 'src1',	addSrc2: 'src2',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',addSrcLink1: '',	addSrcLink2: '',	addSrcLink3: '',	addSrcLink4: '',	addSrcLink5: '',	addSrcLink6: '',	addSrcLink7: '',	error: null,	},{ 
title: 'Sawmill 1',	company: 'Company C',	year: '1904-',	coords: [,],	category: 'sawmill',	area: 'alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/.png',	image2: './img/.png',	image3: './img/.png',	image4: './img/.png',	image5: './img/.png',	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '', imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '',	addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',    addSrcLink1: '',	addSrcLink2: '',	addSrcLink3: '',	addSrcLink4: '',	addSrcLink5: '',	addSrcLink6: '',	addSrcLink7: '',	error: 'coords',	},{ 
title: 'Sawmill 2',	company: 'Company B',	year: '1861-1864',	coords: [49.235,-124.815],	category: 'sawmill',	area: 'alberni',	list1: "discription 1", list2: "discription 2", list3: "discription 3", list4: "discription 4", list5: "discription 5", list6: "discription 6",	list7: 'description 7 ',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/mill.png',	image2: './img/mill.png',	image3: './img/aa.png',	image4: './img/mill.png',	image5: null,	imageText1: 'text1',	imageText2: 'text2',	imageText3: 'text3',	imageText4: 'text4',	imageText5: '', imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '',	addSrc1: 'src1.',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	addSrcLink1: '',	addSrcLink2: '',	addSrcLink3: '',	addSrcLink4: '',	addSrcLink5: '',	addSrcLink6: '',	addSrcLink7: '',    error: null,	},{ 
title: 'Community 3',	company: 'Company A',	year: '1917-1927',	coords: [49.328,-124.85],	category: 'community',	area: 'alberni',	list1: "discription 1", list2: "discription 2", list3: "discription 3", list4: "discription 4", list5: "discription 5", list6: "discription 6",	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: './img/com.png',	image2: './img/com.png',	image3: './img/community.png',	image4: './img/community.png',	image5: './img/com.png',	imageText1: 'text1',	imageText2: 'text2',	imageText3: 'text3',	imageText4: 'text4',	imageText5: 'image text 5', imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '',	addSrc1: 'source 1',	addSrc2: 'Source 2',	addSrc3: 'source 3',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	addSrcLink1: '',	addSrcLink2: '',	addSrcLink3: '',	addSrcLink4: '',	addSrcLink5: '',	addSrcLink6: '',	addSrcLink7: '',    error: null,	},{ 
title: '',	company: 'Company C ',	year: '-',	coords: [,],	category: 'p&p',	area: 'alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: null,	image2: null,	image3: null,	image4: null,	image5: null,	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '',	imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '', addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',    addSrcLink1: '',	addSrcLink2: '',	addSrcLink3: '',	addSrcLink4: '',	addSrcLink5: '',	addSrcLink6: '',	addSrcLink7: '',	error: 'coords',	},{ 
title: 'something\'s',	company: 'Company C ',	year: '-',	coords: [,],	category: 'p&p',	area: 'alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: null,	image2: null,	image3: null,	image4: null,	image5: null,	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '',	imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '', addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	addSrcLink1: '',	addSrcLink2: '',	addSrcLink3: '',	addSrcLink4: '',	addSrcLink5: '',	addSrcLink6: '',	addSrcLink7: '',    error: 'coords',	},{ 
title: 'something\'s',	company: 'Company^ C ',	year: '-',	coords: [,],	category: 'p&p',	area: 'alberni',	list1: '',	list2: '',	list3: '',	list4: '',	list5: '',	list6: '',	list7: '',	list8: '',	list9: '',	list10: '',	list11: '',	list12: '',	image1: null,	image2: null,	image3: null,	image4: null,	image5: null,	imageText1: '',	imageText2: '',	imageText3: '',	imageText4: '',	imageText5: '',	imageLink1: '', imageLink2: '', imageLink3: '', imageLink4: '',	imageLink5: '', addSrc1: '',	addSrc2: '',	addSrc3: '',	addSrc4: '',	addSrc5: '',	addSrc6: '',	addSrc7: '',	addSrcLink1: '',	addSrcLink2: '',	addSrcLink3: '',	addSrcLink4: '',	addSrcLink5: '',	addSrcLink6: '',	addSrcLink7: '',    error: 'coords',	} 
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
