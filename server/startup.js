// On startup this file will execute on the server 

/* The idea of this file is to check if there is any data in the collection on the
startup, if there isn't any then put  it in the collection. */

var array_cuisines =   [
              {
               Continent: "blah blah blah ! ",
               Countries:[
               {
	               Country: "Blahahhahahahaha",
	               img_src: "central_africa.jpg",
	               About: "This is the Indian cuisine, probably the most eclectic in the world! ",
	               Dishes: [{text:'Baingan Bharta, Urad Dal'}]
           	   },
           	   {   Country : "wrnrngn3go42g24 go2gb0hg0",
           	       img_src: "central_africa.jpg",
	               About : "Chinese cuisine, It has more variety than you think.",
	               Dishes : "Chowmein, Pork Chops, Wonton! "

           	   }]
              },

              {
               Continent: "Asiana",
               Countries:[
               {
	               Country: "Northern India",
	               Cuisine_name: "North Indian",
	               img_src_1: "https://upload.wikimedia.org/wikipedia/commons/0/0c/North_India_Zonal_Map_14July2013.png",
	               img_src_2: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg",
	               About: " Indian cuisine is characterized by its sophisticated and subtle use of many Indian spices and vegetables, herbs, and fruits grown across India.There is also the widespread practice of vegetarianism across its society. Considered by some to be one of the world's most diverse cuisines, each family of this cuisine is characterized by a wide assortment of dishes and cooking techniques. As a consequence, Indian cuisine varies from region to region, reflecting the varied demographics of the ethnically diverse Indian subcontinent. India's religious beliefs and culture has played an influential role in the evolution of its cuisine. However, cuisine across India has also evolved with the subcontinent's cross-cultural interactions with the neighboring Middle East, Southeast Asia, East Asia, and Central Asia, as well as the Mediterranean, making it a unique blend of various cuisines across Asia. The colonial period introduced European cooking styles to India adding to its flexibility and diversity.Indian cuisine has also influenced cuisines across the world, especially those from Southeast Asia. In particular, curry has been widely adopted in cuisines around the world. ",
	               Dishes_veg: [{text:'Chole Bhature, Baingan Bharta (Smoked Eggplant), Daal Baati Churma, Malai ki Kheer'}],
	               Dishes_non_veg: [{text:'Rogan Josh, Butter Chicken, Chicken Biryani'}]
           	   },
           	   {   Country : "China-Cantonese",
           	   	   Cuisine_name: "Cantonese",
           	       img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/China_in_Asia_(%2Bclaims)_(-mini_map_-rivers).svg/864px-China_in_Asia_(%2Bclaims)_(-mini_map_-rivers).svg.png",
           	       img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People's_Republic_of_China.svg/2000px-Flag_of_the_People's_Republic_of_China.svg.png ",
           	       About : "Chinese cuisine includes styles originating from the diverse regions of China, as well as from Chinese people in other parts of the world including most Asia nations. The history of Chinese cuisine in China stretches back for thousands of years and has changed from period to period and in each region according to climate, imperial fashions, and local preferences. Over time, techniques and ingredients from the cuisines of other cultures were integrated into the cuisine of the Chinese people due both to imperial expansion and from the trade with nearby regions in pre-modern times, and from Europe and the New World in the modern period. In addition, dairy is rarely—if ever—used in any recipes in the style.<br>The Eight Culinary Cuisines of China are Anhui, Cantonese, Fujian, Hunan, Jiangsu, Shandong, Sichuan, and Zhejiang cuisines. The staple foods of Chinese cooking include rice, noodles, vegetables, and sauces and seasonings.",
	               Dishes_veg: [{text:'Cantonese fried rice, Pan fried noodles, Wonton dishes!'}],
	               Dishes_non_veg: [{text:'Sweet and Sour pork, Pan fried noodles'}]

           	   },
           	   {
           	   	   Country : "South-India",
           	   	   Cuisine_name: "South Indian",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/64/India_South_India_Locator_Map.svg/2000px-India_South_India_Locator_Map.svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg ",
	               About : " This is the Indian cuisine, probably the most eclectic in the world ! ",
	               Dishes_veg : [{text:'Masala Dosa, Uttapam!'}],
	               Dishes_non_veg : [{text:'Masala Dosa, Uttapam!'}],
	           },
	           {
	           	 Country : "Afghanistan",
	           	 Cuisine_name: "Afghan",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Afghanistan_(orthographic_projection).svg/2000px-Afghanistan_(orthographic_projection).svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Afghanistan.svg/2000px-Flag_of_Afghanistan.svg.png",
	               About : "Afghan cuisine is largely based upon the nation's chief crops, such as wheat, maize, barley and rice. Accompanying these staples are native fruits and vegetables as well as dairy products such as milk, yogurt and whey. Kabuli Palaw is the national dish of Afghanistan. The nation's culinary specialties reflect its ethnic and geographic diversity.Afghanistan is known for its high quality pomegranates, grapes and sweet football-shaped melons.",
	               Dishes_veg : [{text:'Maash Palaw - a sweet and sour pulao baked with mung beans, apricots, and bulgur wheat. Exclusively vegetarian.'}],
	               Dishes_non_veg :[{text:'Korma Alou-Bokhara wa Dalnakhod - onion-based, with sour plums, lentils, and cardamom. Veal or chicken.'},{text:'Kabuli Pulao - a national dish. Meat and stock is added, and topped with fried raisins, slivered carrots, and pistachios'} ]

	           },
	           {
	           	   Country : "Japan",
	           	   Cuisine_name: "Japanese",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Japan_(orthographic_projection).svg/536px-Japan_(orthographic_projection).svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/1280px-Flag_of_Japan.svg.png",
	               About : "Japanese Cuisine known for its emphasis on seasonality of food (旬, shun), quality of ingredients and presentation. Japanese regional cuisine includes a vast array of regional specialities known as kyōdo ryōri in Japanese, many of them originating from dishes prepared using local ingredients and traditional recipes. Sushi and sashimi are both part of the cuisine of the island nation. The Michelin Guide has awarded Japanese cities by far the most Michelin stars of any country in the world (for example, Tokyo alone has more Michelin stars than Paris, Hong Kong, New York, LA and London combined).	Traditional cooking methods eschew the use of oils and fats, with a focus on featuring the delicate flavors of the natural ingredients. Due to an abundant seafood supply, the traditional Japanese diet featured minimal use of meat; however, modern Japanese cuisine includes an extensive variety of popular meat dishes. Japanese cuisine offers a vast array of regional specialties that use traditional recipes and local ingredients. ",
	               Dishes_veg : [{text:'Sweet Potato'},{text:'Nato-(Soybean based food!)'}],
	               Dishes_non_veg : [{text:'Lots of Seafood'}],

	           },{
	           	   Country : "Burma (Myanmar)",
	           	   Cuisine_name: "Burmese",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/LocationMyanmar.svg/2000px-LocationMyanmar.svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Flag_of_Myanmar.svg/2000px-Flag_of_Myanmar.svg.png ",
	               About : " Burmese cuisine is characterised by extensive use of fish products like fish sauce and ngapi (fermented seafood). Owing to the geographic location of Myanmar, Burmese cuisine has been influenced by Chinese cuisine, Indian cuisine and Thai cuisine.Burmese cuisine also includes a variety of salads (a thoke), centred on one major ingredient, ranging from starches like rice, wheat and rice noodles, glass noodles and vermicelli, to potato, ginger, tomato, kaffir lime, long bean, lahpet (pickled tea leaves), and ngapi (fish paste). These salads have always been popular as fast foods in Burmese cities.",
	               Dishes_veg : [{text:'Puri-Potato'}],
	               Dishes_non_veg : [{text:'Mohinga- The national dish'}], 

	           },{
	           	   Country : "Cambodia",
	           	   Cuisine_name: "Cambodian",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Location_Cambodia_ASEAN.svg/2000px-Location_Cambodia_ASEAN.svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_Cambodia.svg/2000px-Flag_of_Cambodia.svg.png ",
	               About : " Khmer cuisine  or, more generally, Cambodian cuisine, is the traditional cuisine of the people of Cambodia. Average meals typically consists of more than one dish and ideally contrasts flavours, textures and temperatures within the meal using plenty of herbs, leaves, pickled vegetables, dipping sauces, edible flowers and other garnishes and condiments.The staple food for Cambodians is rice. Today rice is consumed by most Cambodians daily and with all meals, using a great number of cooking styles and techniques. There are hundreds of varieties of indigenous Khmer rice, from the fragrant jasmine-scented malis rice to countless types of wild, brown and sticky rice. Sticky rice is most often consumed as a dessert, often with slices of tropical fruit like mango or durian and coconut milk.",
	               Dishes_veg : [{text:''}],
	               Dishes_non_veg : [{text:'Amok-trey - (The Fish fillets) '},{text:'Ansom Chek - cylindrical rice cake wrapped in banana leaves and filled with bananas (sweet)'}] 

	           },
	           {
	           	   Country : "Vietnam",
	           	   Cuisine_name: "Vietnamese",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Location0fVietnam.svg/2000px-Location0fVietnam.svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Flag_of_Vietnam.svg/1280px-Flag_of_Vietnam.svg.png ",
	               About : " Vietnamese cuisine is a style of cooking derived from Vietnam. Fish sauce, soy sauce, rice, fresh herbs, fruits and vegetables are commonly used. Vietnamese recipes utilize a diverse range of herbs, including lemongrass, mint, Vietnamese mint, long coriander and Thai basil leaves.",
	               Dishes_veg : [{text:'Pho-pho'}],
	               Dishes_non_veg : [{text:'Lots of animals'}]

	           },{

	           	   Country : "Thailand",
	           	   Cuisine_name: "Thai",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/Location_Thailand_ASEAN.svg/2000px-Location_Thailand_ASEAN.svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Flag_of_Thailand.svg/2000px-Flag_of_Thailand.svg.png ",
	               About : "Thai cooking places emphasis on lightly prepared dishes with strong aromatic components and a spicy edge. It is known for its complex interplay of at least three and up to four or five fundamental taste senses in each dish or the overall meal: sour, sweet, salty, bitter, and spicy.",
	               Dishes_veg : [{text:'Lots of curries, Rice, Pad Thai, Woohoo!'}],
	               Dishes_non_veg : [{text:'Lots of animals'}]

	           },
	           {
	           	   Country : "Turkey",
	           	   Cuisine_name: "Turkish",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Turkey_(orthographic_projection).svg/553px-Turkey_(orthographic_projection).svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Flag_of_Turkey.svg/2000px-Flag_of_Turkey.svg.png ",
	               About : "Turkish cuisine is largely the continuation of Ottoman cuisine, which in turn borrowed many elements from Greek, Central Asian, Caucasian, Sephardi Jewish cuisine, Middle Eastern, and Balkan cuisines. Turkish cuisine has in turn influenced those and other neighbouring cuisines, including those of Central and Western Europe. The Ottomans fused various culinary traditions of their realm with influences from Levantine cuisines, along with traditional Turkic elements from Central Asia (such as yogurt and mantı), creating a vast array of specialities—many with strong regional associations.",
	               Dishes_veg : [{text:'Mercimek Kofte, Dolma, Pilaf'},{text:'Turkish Coffee'}],
	               Dishes_non_veg : [{text:'And the remaining ! '}]
	           },{
	           	   Country : "Iran (Persia)",
	           	   Cuisine_name: "Persian",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Iran_(orthographic_projection).svg/553px-Iran_(orthographic_projection).svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/Flag_of_Iran.svg/2000px-Flag_of_Iran.svg.png",
	               About : "Situated in West Asia (also known as the Middle East) with a diverse population, the Iranian culinary style is unique to Iran, though has historically both influenced and has been influenced by Iran's neighboring and conquered regions at various stages throughout its history. Specifically, these have been mutual culinary influences to and from Turkish cuisine, Azerbaijani cuisine, Kurdish cuisine, Caucasian cuisine, Mesopotamian cuisine, Levantine cuisine, Greek cuisine, Central Asian cuisine, and minor aspects from Russian cuisine.",
	               Dishes_veg : [{text:'Mercimek Kofte, Dolma, Pilaf'}],
	               Dishes_non_veg : [{text:'And the remaining ! '}]
	           },
	           {
	           	   Country : "Lebanon",
	           	   Cuisine_name: "Lebanese",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/LocationLebanon.svg/2000px-LocationLebanon.svg.png",
           	   	   img_src_2: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Flag_of_Lebanon.svg/2000px-Flag_of_Lebanon.svg.png",
	               About : "Lebanese Cuisine includes an abundance of starches, whole grain, fruits, vegetables, fresh fish and seafood; animal fats are consumed sparingly. Poultry is eaten more often than red meat. When red meat is eaten it is usually lamb on the coast, and goat meat in the mountain regions. It also includes copious amounts of garlic and olive oil, often seasoned by lemon juice. Olive oil, herbs, garlic and lemon are typical flavors found in the Lebanese diet.The traditional alcoholic Arak, an anise-flavored liqueur, which is the Lebanese national drink and is usually served with a traditional convivial Lebanese meal. Another historic and traditional drink in Lebanon is the wine .However, in Lebanon some desserts are specifically prepared on special occasions: the meghli, for instance that is served to celebrate a newborn baby in the family.",
	               Dishes_veg : [{text:'Baba Ghaouj, Falafel, Batata harra'}],
	               Dishes_non_veg : [{text:'Chicken Shawarma'}]

	           }]
	         },

			 {
			   Continent: "Europe",
               Countries:[ 
               {
	               Country : "United Kingdom",
	               Cuisine_name: "British",
	               img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/EU-United_Kingdom.svg/2045px-EU-United_Kingdom.svg.png",
	               img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Union_flag_1606_(Kings_Colors).svg/2000px-Union_flag_1606_(Kings_Colors).svg.png",
	               About : "British cuisine is the specific set of cooking traditions and practices associated with the United Kingdom. British cuisine has been described as unfussy dishes made with quality local ingredients, matched with simple sauces to accentuate flavour, rather than disguise it. However, British cuisine has absorbed the cultural influence of those who have settled in Britain, producing many hybrid dishes, such as the Anglo-Indian chicken tikka masala.",
	               Dishes_veg : [{text:'Tea my friend !'}],
	               Dishes_non_veg : [{text:'Fish and Chips, Chicken Tikka Masala '}]
           	   },
           	   {
           	   		Country: "Austria",
           	   	    Cuisine_name: "British",
	               img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d1/EU-United_Kingdom.svg/2045px-EU-United_Kingdom.svg.png",
	               img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/17/Union_flag_1606_(Kings_Colors).svg/2000px-Union_flag_1606_(Kings_Colors).svg.png",
	               About : "British cuisine is the specific set of cooking traditions and practices associated with the United Kingdom. British cuisine has been described as unfussy dishes made with quality local ingredients, matched with simple sauces to accentuate flavour, rather than disguise it. However, British cuisine has absorbed the cultural influence of those who have settled in Britain, producing many hybrid dishes, such as the Anglo-Indian chicken tikka masala.",
	               Dishes_veg : [{text:'Tea my friend !'}],
	               Dishes_non_veg : [{text:'Fish and Chips, Chicken Tikka Masala '}]

           	   },
           	   {
           	   	   Country : "Spain",
           	   	   Cuisine_name: "Spanish",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/en/thumb/9/9a/Flag_of_Spain.svg/1280px-Flag_of_Spain.svg.png",
           	   	   img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/EU-Spain.svg/250px-EU-Spain.svg.png",
	               About : "Just Drink and Party !",
	               Dishes_veg : [{text:'Soups from Andalusia'}],
	               Dishes_non_veg : [{text:'Seafood, Spanish Wine, Tapas'}]
	           },
	           {
	           	   Country : "Czech Republic",
           	   	   Cuisine_name: "Czech",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_Czech_Republic.svg/2000px-Flag_of_the_Czech_Republic.svg.png",
           	   	   img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/EU-Czech_Republic.svg/2045px-EU-Czech_Republic.svg.png",
           	   	   About : "Lot of cakes and pastries. Strong emphasis on meats !",
	               Dishes_veg : [{text:'Cakes, Pastries, Soups (polévka), Wine if you drink some !'}],
	               Dishes_non_veg : [{text:'Pork lovers!, say Yeah ! also Kudos for Beef and Chicken'}]
	           },
	           {
	           	   Country : "Germany",
           	   	   Cuisine_name: "German",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/Flag_of_Germany_(3-2_aspect_ratio).svg/2000px-Flag_of_Germany_(3-2_aspect_ratio).svg.png",
           	   	   img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/9/94/East_Germany_1956-1990.svg/2000px-East_Germany_1956-1990.svg.png",
           	   	   About : "Lot of cakes and pastries. Strong emphasis on meats !",
	               Dishes_veg : [{text:'Vegetable soups, Asparagus, German fries!, Pretzels'}],
	               Dishes_non_veg : [{text:'Fried potatoes, often with diced bacon and/or onions'}]          
	           },
	           {
	           	   Country : "Russia",
           	   	   Cuisine_name: "Russian",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/c/c9/Original_version_of_Flag_of_russia.svg",
           	   	   img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/CIS_(orthographic_projection).svg/2000px-CIS_(orthographic_projection).svg.png",
           	   	   About : "Wine, vodka, beer, desserts",
	               Dishes_veg : [{text:'Beet soups, potatoes (other root vegetables) green veggies, soups'}],
	               Dishes_non_veg : [{text:'Smoked meats, Pelmeni'}]

	           },
	           {
	           	   Country : "Sweden",
           	   	   Cuisine_name: "Swedish",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Flag_of_Sweden.svg/1600px-Flag_of_Sweden.svg.png",
           	   	   img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/EU-Sweden.svg/2045px-EU-Sweden.svg.png",
           	   	   About : "Due to Sweden's large North–South expanse, there are regional differences between the cuisine of the North Sweden and the South.Historically, in the far North, meats such as reindeer, and other game dishes were eaten, some of which have their roots in the Sami culture, while fresh vegetables have played a larger role in the South. Many traditional dishes employ simple, contrasting flavours, such as the traditional dish of meatballs and brown cream sauce with tart, pungent lingonberry jam (slightly similar in taste to cranberry sauce).",
	               Dishes_veg : [{text:'Lot of dairy, Swedish Pancakes, Lingonberry jam, Mashed Potatoes'}],
	               Dishes_non_veg : [{text:'Sausages, bacons, meatballs, fishballs'}]

	           }]
	         },
	          {
			   Continent: "North-America",
               Countries:[ 
               {
	               Country : "United States (Philadelphia)",
	               Cuisine_name: "Philly",
	               img_src_1: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
	               img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/b/bf/Map_of_USA_PA.svg/2000px-Map_of_USA_PA.svg.png",
	               About : "Rocky Balboa, Upenn ",
	               Dishes_veg : [{text:'Hahaha...just Soda, Soft Pretzels'}],
	               Dishes_non_veg:[{text:'Cheesesteaks, Cheeseburgers, Hot dogs'}]
           	   },
           	   {
           	   	   Country : "Canada",
           	   	   Cuisine_name: "Canadian",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Canada.svg",
	               img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Canada_(orthographic_projection).svg/541px-Canada_(orthographic_projection).svg.png",
	               About : "Cuisine influenced by English, Scottish and French roots.",
	               Dishes_veg : [{text:'Pancakes, Maple Syrup, Pea Soup, Baked beans'}],
	               Dishes_non_veg:[{text:'Canadian bacon, Fish and brewis'}]

           	   },
           	   {
           	   	   Country : "Mexico",
           	   	   Cuisine_name:"Mexican",
           	   	   img_src_1:"https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Mexico_(reverse).png",
           	   	   img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Mexico_(orthographic_projection).svg/550px-Mexico_(orthographic_projection).svg.png",
	               About : "There's more than burritos, tacos and tequila!",
	               Dishes_veg : [{text:'Tamales, Enchiladas, Sope'}],
	               Dishes_non_veg:[{text:'Pupasa, Carne asada'}]
	           }]
	         },
	         {
			   Continent: "South-America",
               Countries:[ 
               {
	               Country : "Chile",
	               Cuisine_name: "Chilean",
	               img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Flag_of_Chile.svg/1500px-Flag_of_Chile.svg.png",
	               img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Chile_(orthographic_projection).svg/550px-Chile_(orthographic_projection).svg.png",
	               About : "The Sea bass, Spanish influences, Largest ",
	               Dishes_veg : [{text:'Avocados, Quinoa, Maize products '}],
	               Dishes_non_veg:[{text:'Fish, Seafood, Shrimp'}]
           	   },
           	   {
           	   	   Country : "Peru",
           	   	   Cuisine_name: "Peruvian",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Flag_of_Peru_(state).svg/2000px-Flag_of_Peru_(state).svg.png",
	               img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Peru_(orthographic_projection).svg/549px-Peru_(orthographic_projection).svg.png",
	               About : "Cuisine refelcts local practices, influences from Europe, Asia and West Africa. Four staple foods are Corn, Potatoes, Quinoa and Legumes.Chifa, is another term for Peruvian-Chinese cuisine.",
	               Dishes_veg : [{text:'Huancayo-style potatoes'}],
	               Dishes_non_veg:[{text:'Pollo a la Brasa Rotiseserie Chicken, Lots of regional dishes with vegetables and meat!'}]

           	   },
           	   {
           	   	   Country : "Brazil",
           	   	   Cuisine_name:"Brazilian",
           	   	   img_src_1:"https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/1280px-Flag_of_Brazil.svg.png",
           	   	   img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Brazil_(orthographic_projection).svg/541px-Brazil_(orthographic_projection).svg.png",
	               About : 'Coffee, Root vegetables (Cassava, Yams), Fruits like Mango, Papaya',
	               Dishes_veg : [{text:'RIce and beans, churrasco (potato/ carrot salad)'}],
	               Dishes_non_veg:[{text:'Caruru, Seafood'}]
	           }]
	         },
	         {
	           Continent: "Africana",
               Countries:[ 
               {
	               Country : "Ghana",
	               Cuisine_name:"Ghanian",
           	   	   img_src_1:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/19/Flag_of_Ghana.svg/1280px-Flag_of_Ghana.svg.png",
           	   	   img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/LocationGhana.svg/2000px-LocationGhana.svg.png",
	               About :  " I don't know, a lot of Non Profits here! ",
	               Dishes_veg : [{text:'Vegetable stew, peanut butter, Millets, Sweet potatoes, Yam, Plantains'}],
	               Dishes_non_veg:[{text:'Pupasa, Carne asada'}]
           	   },
           	   {
           	   	   Country : "Morocco",
           	   	   img_src: "Africa/Kenya/Kenya-map.png", 
	               About :  " Mediterranean tinge!  ",
	               Dishes : [{text:'Spinach stew cooked with tomato, peppers, chillis, onions, and peanut butter'}]

           	   },
           	   {
           	   	   Country : "South Africa ",
           	   	   img_src: "Africa/Kenya/Kenya-map.png", 
	               About : " Another British Colony ",
	               Dishes : [{text:'Spinach stew cooked with tomato, peppers, chillis, onions, and peanut butter'}]
	           },
	           {
	           	   Country : "Central Africa ",
	           	   img_src: "Africa/Central_Africa/central_africa.jpg", 
	               About : "The cuisine of Central Africa remains largely traditional because of the remote nature of the region, which remained relatively isolated until the 19th century.Some foods, such as cassava (a food staple in Central Africa), groundnuts (peanuts) and chili peppers were imported from the New World. Plantains are also common in Central African cuisine.Meats, such as crocodile, antelope, monkey and warthog, are sometimes hunted in the forests. Bambra is a porridge made from cooked rice, peanut butter and sugar. A jomba is the bundling of foods in fresh green plantain leaves and then cooking them over hot coals or fire. Cameroonian cuisine is one of the most varied in Africa due to its location on the crossroads between the north, west, and center of the continent; added to this is the profound influence of French food, a legacy of the colonial era. â€¢	Congolese cuisine (Democratic Republic of the Congo) cuisine varies widely, representing the food of indigenous people. Cassava is generally the staple food usually eaten with other side dishes.Central african cuisine in the Central African Republic includes Middle Eastern and French influences",
	          
	               Dishes : [{text:'Spinach stew cooked with tomato, peppers, chillis, onions, and peanut butter'},
				    {text:'Bambara, a porridge of rice, peanut butter and sugar' },
				    {text:'Groundnut(peanut) stew, containing chicken, okra, ginger, and other spices'}]
	
	           },
	           {
	           	   Country : "Kenya",
	           	   img_src: "Africa/Kenya/Kenya-map.png", 
	               About : "central_africa.txt",
	               Dishes : [{text:'Spinach stew cooked with tomato, peppers, chillis, onions, and peanut butter'}]
	           }]

	         },
        	  {
			   Continent: "Oceania",
               Countries:[ 
               {
	               Country : "New Zealand",
	               Cuisine_name: "New Zealand cuisine",
	               img_src_1: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Flag_of_New_Zealand.svg/2000px-Flag_of_New_Zealand.svg.png",
	               img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/NZL_orthographic_NaturalEarth.svg/512px-NZL_orthographic_NaturalEarth.svg.png",
	               About : "The Sea bass, Spanish influences, Largest ",
	               Dishes_veg : [{text:'Kumara (traditional sweet potato), Kiwifruit, Pavlova (dessert),ANZAC cookies'}],
	               Dishes_non_veg:[{text:'Fish and Chips, Seafood'}]
           	   },
           	   {
           	   	   Country : "United States (Hawaii)",
           	   	   Cuisine_name: "Hawaiian",
           	   	   img_src_1: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
	               img_src_2:"https://upload.wikimedia.org/wikipedia/commons/4/48/Hawaii_in_United_States_(zoom)_(US50)_(-grid).svg",
	               About : "Surfing, Cocktails !",
	               Dishes_veg : [{text:'Pineapples, Malasada(Portuguese donut coated with Sugar),Poi - Mashed Taro root'}],
	               Dishes_non_veg:[{text:'Lau Lau ( steamed fish and pork), Spam musubi (fusion of Sushi)'}]

           	   },
           	   {
           	   	   Country : "Australia",
           	   	   Cuisine_name:"Australian",
           	   	   img_src_1:"https://upload.wikimedia.org/wikipedia/commons/8/88/Flag_of_Australia_(converted).svg",
           	   	   img_src_2:"https://upload.wikimedia.org/wikipedia/commons/thumb/d/da/Australia_with_AAT_(orthographic_projection).svg/2000px-Australia_with_AAT_(orthographic_projection).svg.png",
	               About : 'Wine,Sheep meat and beer !',
	               Dishes_veg : [{text:'Hmmm..not much, some breakfast options'}],
	               Dishes_non_veg:[{text:'Seafood, Lamb meat and Kangaroo meat, how can I forget that !'}]
	           },
	           ]
	         },

	         {
               Continent: "blah blah blah ! ",
               Countries:[
               {
	               Country: "Blahahhahahahaha",
	               img_src: "central_africa.jpg",
	               About: "This is the Indian cuisine, probably the most eclectic in the world! ",
	               Dishes: " Baingan Bharta, Urad Dal"
           	   },
           	   {   Country : "wrnrngn3go42g24 go2gb0hg0",
           	       img_src: "central_africa.jpg",
	               About : "Chinese cuisine, It has more variety than you think.",
	               Dishes : "Chowmein, Pork Chops, Wonton! "

           	   }]
              },
	    	];

Meteor.startup(function(){
     if(Cuisines.find().count() == 0){

     	// To insert mulitple documents(objects) in Meteor at once use _.each or a loop
     	var arrayLength = array_cuisines.length;
     	for (var i = 0; i < arrayLength;i++) {
     		Cuisines.insert(array_cuisines[i]);
     	}
     	/*
		_.each(array_cuisines, function(doc){
     		Cuisines.insert(doc);

     	})
		*/
	}

});