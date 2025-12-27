const questions = [
  {
    "num": 1,
    "question_en": "Which planet is known as the 'Morning Star'?",
    "question_hi": "किस ग्रह को 'सुबह का तारा' कहा जाता है?",
    "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The 'Chipko Movement' was started to protect:",
    "question_hi": "'चिपको आंदोलन' किसकी सुरक्षा के लिए शुरू किया गया था?",
    "options_en": ["Wildlife", "Forests", "Water", "Soil"],
    "options_hi": ["वन्यजीव", "वन", "जल", "मिट्टी"],
    "answer_en": "Forests",
    "answer_hi": "वन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which is the longest river in the world?",
    "question_hi": "दुनिया की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "options_hi": ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "Sarojini Naidu"],
    "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी", "सरोजिनी नायडू"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which gas is most abundant in the Sun?",
    "question_hi": "सूर्य में कौन सी गैस सबसे अधिक मात्रा में होती है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The 'Red Fort' is located in which city?",
    "question_hi": "'लाल किला' किस शहर में स्थित है?",
    "options_en": ["Delhi", "Agra", "Jaipur", "Mumbai"],
    "options_hi": ["दिल्ली", "आगरा", "जयपुर", "मुंबई"],
    "answer_en": "Delhi",
    "answer_hi": "दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which vitamin is essential for blood clotting?",
    "question_hi": "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन K", "विटामिन D"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The 'Great Barrier Reef' is located in which country?",
    "question_hi": "'ग्रेट बैरियर रीफ' किस देश में स्थित है?",
    "options_en": ["Australia", "USA", "Brazil", "South Africa"],
    "options_hi": ["ऑस्ट्रेलिया", "यूएसए", "ब्राजील", "दक्षिण अफ्रीका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Thomas Edison", "Alexander Graham Bell", "Guglielmo Marconi", "Nikola Tesla"],
    "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "गुग्लील्मो मार्कोनी", "निकोला टेस्ला"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which is the smallest continent by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Europe", "Australia", "Antarctica", "South America"],
    "options_hi": ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The currency of Japan is:",
    "question_hi": "जापान की मुद्रा है:",
    "options_en": ["Yuan", "Yen", "Won", "Ringgit"],
    "options_hi": ["युआन", "येन", "वॉन", "रिंग्गिट"],
    "answer_en": "Yen",
    "answer_hi": "येन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which gland in the human body is called the 'master gland'?",
    "question_hi": "मानव शरीर में किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
    "options_en": ["Thyroid", "Pituitary", "Pancreas", "Adrenal"],
    "options_hi": ["थायरॉयड", "पिट्यूटरी", "अग्न्याशय", "अधिवृक्क"],
    "answer_en": "Pituitary",
    "answer_hi": "पिट्यूटरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "The 'Taj Mahal' was built by which Mughal emperor?",
    "question_hi": "'ताज महल' किस मुगल सम्राट ने बनवाया था?",
    "options_en": ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
    "options_hi": ["अकबर", "शाहजहाँ", "औरंगजेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which metal is the best conductor of electricity?",
    "question_hi": "कौन सी धातु विद्युत की सबसे अच्छी सुचालक है?",
    "options_en": ["Copper", "Silver", "Gold", "Aluminum"],
    "options_hi": ["तांबा", "चांदी", "सोना", "एल्यूमीनियम"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "The 'Statue of Liberty' was gifted to the USA by which country?",
    "question_hi": "'स्टैच्यू ऑफ लिबर्टी' यूएसए को किस देश ने उपहार में दी थी?",
    "options_en": ["France", "UK", "Italy", "Spain"],
    "options_hi": ["फ्रांस", "यूके", "इटली", "स्पेन"],
    "answer_en": "France",
    "answer_hi": "फ्रांस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which vitamin is also known as Ascorbic Acid?",
    "question_hi": "किस विटामिन को एस्कॉर्बिक अम्ल के नाम से भी जाना जाता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which country is known as the 'Land of the Rising Sun'?",
    "question_hi": "किस देश को 'उगते सूरज की भूमि' कहा जाता है?",
    "options_en": ["China", "Japan", "Thailand", "South Korea"],
    "options_hi": ["चीन", "जापान", "थाईलैंड", "दक्षिण कोरिया"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The process of converting sugar into alcohol is called:",
    "question_hi": "शर्करा को अल्कोहल में बदलने की प्रक्रिया कहलाती है:",
    "options_en": ["Fermentation", "Distillation", "Evaporation", "Oxidation"],
    "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "ऑक्सीकरण"],
    "answer_en": "Fermentation",
    "answer_hi": "किण्वन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Who wrote the Indian National Anthem?",
    "question_hi": "भारतीय राष्ट्रगान किसने लिखा?",
    "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
    "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "सरोजिनी नायडू", "महात्मा गांधी"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रबींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which planet has the most moons?",
    "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
    "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "options_hi": ["बृहस्पति", "शनि", "यूरेनस", "नेप्च्यून"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "The 'Sunderbans' is famous for which animal?",
    "question_hi": "'सुंदरबन' किस जानवर के लिए प्रसिद्ध है?",
    "options_en": ["Elephant", "Tiger", "Lion", "Rhinoceros"],
    "options_hi": ["हाथी", "बाघ", "शेर", "गैंडा"],
    "answer_en": "Tiger",
    "answer_hi": "बाघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which instrument is used to measure atmospheric pressure?",
    "question_hi": "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
    "options_en": ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
    "options_hi": ["आर्द्रतामापी", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The 'City of Joy' is the nickname of which Indian city?",
    "question_hi": "'आनंद का शहर' किस भारतीय शहर का उपनाम है?",
    "options_en": ["Mumbai", "Kolkata", "Delhi", "Chennai"],
    "options_hi": ["मुंबई", "कोलकाता", "दिल्ली", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which vitamin deficiency causes Rickets?",
    "question_hi": "किस विटामिन की कमी से रिकेट्स रोग होता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which is the largest desert in the world?",
    "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Sahara", "Arabian", "Gobi", "Kalahari"],
    "options_hi": ["सहारा", "अरबी", "गोबी", "कालाहारी"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Who is known as the 'Father of the Indian Space Program'?",
    "question_hi": "'भारतीय अंतरिक्ष कार्यक्रम के जनक' के रूप में किसे जाना जाता है?",
    "options_en": ["Homi J. Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "Satish Dhawan"],
    "options_hi": ["होमी जे. भाभा", "विक्रम साराभाई", "ए.पी.जे. अब्दुल कलाम", "सतीश धवन"],
    "answer_en": "Vikram Sarabhai",
    "answer_hi": "विक्रम साराभाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which metal is used in making mirrors?",
    "question_hi": "दर्पण बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Silver", "Aluminum", "Mercury", "Copper"],
    "options_hi": ["चांदी", "एल्यूमीनियम", "पारा", "तांबा"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The 'Gateway of India' is located in:",
    "question_hi": "'गेटवे ऑफ इंडिया' कहाँ स्थित है?",
    "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which gas is used in filling electric bulbs?",
    "question_hi": "इलेक्ट्रिक बल्ब भरने में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Oxygen", "Hydrogen", "Argon", "Nitrogen"],
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "आर्गन", "नाइट्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "V.V. Giri"],
    "options_hi": ["राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "वी.वी. गिरि"],
    "answer_en": "Rajendra Prasad",
    "answer_hi": "राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which is the largest planet in our solar system?",
    "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Earth", "Jupiter", "Saturn", "Neptune"],
    "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "नेप्च्यून"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The 'White Revolution' in India is associated with:",
    "question_hi": "भारत में 'श्वेत क्रांति' किससे जुड़ी है?",
    "options_en": ["Milk production", "Cotton production", "Rice production", "Fish production"],
    "options_hi": ["दुग्ध उत्पादन", "कपास उत्पादन", "चावल उत्पादन", "मछली उत्पादन"],
    "answer_en": "Milk production",
    "answer_hi": "दुग्ध उत्पादन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which part of the computer is called the 'brain' of the computer?",
    "question_hi": "कंप्यूटर के किस भाग को कंप्यूटर का 'मस्तिष्क' कहा जाता है?",
    "options_en": ["Monitor", "CPU", "Keyboard", "Hard Disk"],
    "options_hi": ["मॉनिटर", "सीपीयू", "कीबोर्ड", "हार्ड डिस्क"],
    "answer_en": "CPU",
    "answer_hi": "सीपीयू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The 'Kumbh Mela' is held after how many years?",
    "question_hi": "'कुंभ मेला' कितने वर्षों बाद आयोजित किया जाता है?",
    "options_en": ["6 years", "12 years", "3 years", "Every year"],
    "options_hi": ["6 वर्ष", "12 वर्ष", "3 वर्ष", "प्रतिवर्ष"],
    "answer_en": "12 years",
    "answer_hi": "12 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which vitamin is also known as Thiamine?",
    "question_hi": "किस विटामिन को थायमिन के नाम से भी जाना जाता है?",
    "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
    "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन B6", "विटामिन B12"],
    "answer_en": "Vitamin B1",
    "answer_hi": "विटामिन B1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which is the highest mountain peak in the world?",
    "question_hi": "दुनिया की सबसे ऊँची पर्वत चोटी कौन सी है?",
    "options_en": ["K2", "Kanchenjunga", "Mount Everest", "Makalu"],
    "options_hi": ["K2", "कंचनजंगा", "माउंट एवरेस्ट", "मकालू"],
    "answer_en": "Mount Everest",
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Who discovered penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Marie Curie"],
    "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "मैरी क्यूरी"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The 'Silicon Valley' is located in which country?",
    "question_hi": "'सिलिकॉन वैली' किस देश में स्थित है?",
    "options_en": ["Japan", "USA", "China", "India"],
    "options_hi": ["जापान", "यूएसए", "चीन", "भारत"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which acid is present in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Citric acid", "Acetic acid", "Tartaric acid", "Oxalic acid"],
    "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "टार्टरिक अम्ल", "ऑक्सैलिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "सिट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The 'Seven Wonders of the World' list was created by:",
    "question_hi": "'विश्व के सात आश्चर्यों' की सूची किसने बनाई?",
    "options_en": ["UNESCO", "New7Wonders Foundation", "National Geographic", "Time Magazine"],
    "options_hi": ["यूनेस्को", "न्यू7वंडर्स फाउंडेशन", "नेशनल ज्योग्राफिक", "टाइम मैगज़ीन"],
    "answer_en": "New7Wonders Foundation",
    "answer_hi": "न्यू7वंडर्स फाउंडेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which gas is responsible for the blue color of the sky?",
    "question_hi": "आकाश के नीले रंग के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Scattering of light"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "प्रकाश का प्रकीर्णन"],
    "answer_en": "Scattering of light",
    "answer_hi": "प्रकाश का प्रकीर्णन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Who was the first woman to win a Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाली पहली महिला कौन थीं?",
    "options_en": ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Jane Addams"],
    "options_hi": ["मैरी क्यूरी", "मदर टेरेसा", "रोजालिंड फ्रैंकलिन", "जेन एडम्स"],
    "answer_en": "Marie Curie",
    "answer_hi": "मैरी क्यूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which is the fastest land animal?",
    "question_hi": "सबसे तेज भूमि जानवर कौन सा है?",
    "options_en": ["Cheetah", "Lion", "Leopard", "Horse"],
    "options_hi": ["चीता", "शेर", "तेंदुआ", "घोड़ा"],
    "answer_en": "Cheetah",
    "answer_hi": "चीता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The 'International Yoga Day' is celebrated on:",
    "question_hi": "'अंतर्राष्ट्रीय योग दिवस' कब मनाया जाता है?",
    "options_en": ["21 June", "15 August", "2 October", "26 January"],
    "options_hi": ["21 जून", "15 अगस्त", "2 अक्टूबर", "26 जनवरी"],
    "answer_en": "21 June",
    "answer_hi": "21 जून",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which vitamin deficiency causes Night Blindness?",
    "question_hi": "किस विटामिन की कमी से रतौंधी होती है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The 'Big Ben' is located in which city?",
    "question_hi": "'बिग बेन' किस शहर में स्थित है?",
    "options_en": ["Paris", "London", "New York", "Tokyo"],
    "options_hi": ["पेरिस", "लंदन", "न्यूयॉर्क", "टोक्यो"],
    "answer_en": "London",
    "answer_hi": "लंदन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which is the national animal of India?",
    "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Lion", "Tiger", "Elephant", "Peacock"],
    "options_hi": ["शेर", "बाघ", "हाथी", "मोर"],
    "answer_en": "Tiger",
    "answer_hi": "बाघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Who is known as the 'Missile Man of India'?",
    "question_hi": "'भारत के मिसाइल मैन' के रूप में किसे जाना जाता है?",
    "options_en": ["Homi Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "C.V. Raman"],
    "options_hi": ["होमी भाभा", "विक्रम साराभाई", "ए.पी.जे. अब्दुल कलाम", "सी.वी. रमन"],
    "answer_en": "A.P.J. Abdul Kalam",
    "answer_hi": "ए.पी.जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is the largest ocean in the world?",
    "question_hi": "दुनिया का सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
    "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The 'Green Revolution' in India was led by:",
    "question_hi": "भारत में 'हरित क्रांति' का नेतृत्व किसने किया?",
    "options_en": ["M.S. Swaminathan", "Norman Borlaug", "C. Subramaniam", "All of the above"],
    "options_hi": ["एम.एस. स्वामीनाथन", "नॉर्मन बोरलॉग", "सी. सुब्रह्मण्यम", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  }
];
// --------------------------- GLOBAL VARS -----------------------------
// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; //  undefined error fix

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach(option => {
        const isSelected = q.selected === option;

        const div = document.createElement("div");
        div.className = "option-box";

        div.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        div.innerHTML = `
            <input type="radio" name="option" value="${option}" 
            ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        div.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(div);
    });

    updateNavigation();
}

// ----------------- Attempt Mark -----------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// ----------------- Next / Previous -----------------
function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        loadQuestion(currentQuestion);
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        loadQuestion(currentQuestion);
    }
}

function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// ----------------- Final Submit -----------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    let attempted = 0;
    let notAttempted = 0;
    let score = 0;
    const results = [];

    questions.forEach(q => {
        if (q.attempted) {
            attempted++;

            if (q.selected === q.answer_en || q.selected === q.answer_hi) {
                score++;
            }
        } else {
            notAttempted++;
        }

        results.push({
            question: language === "en" ? q.question_en : q.question_hi,
            selected: q.selected || "Not Answered",
            correct: language === "en" ? q.answer_en : q.answer_hi
        });
    });

    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    let viewResult = confirm("Test submitted! Do you want to view result?");
    if (viewResult) {
        window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
    }
}

// ----------------- Navigation Circles -----------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        nav.innerHTML += `
            <div class="circle" style="background:${color};"
            onclick="jumpToQuestion(${i})">${i + 1}</div>
        `;
    });
}

function jumpToQuestion(index) {
    currentQuestion = index;
    loadQuestion(index);
}

// ----------------- Timer -----------------
function startTimer() {
    const timerElement = document.getElementById("timer");

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = String(Math.floor(timeLeft / 3600)).padStart(2, "0");
            const minutes = String(Math.floor((timeLeft % 3600) / 60)).padStart(2, "0");
            const seconds = String(timeLeft % 60).padStart(2, "0");

            timerElement.textContent = `Time Left: ${hours}:${minutes}:${seconds}`;
            timeLeft--;
        }
    }, 1000);
}

// ----------------- Camera & Movement Detection -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style = `
        position:fixed; top:10px; left:10px; width:130px; height:130px;
        border-radius:50%; overflow:hidden; border:3px solid red; z-index:9999;
    `;

    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsinline = true;
    video.style = "width:100%; height:100%; object-fit:cover;";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(() => alert("Camera access denied!"));
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;

    let lastData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, 160, 160);
        const data = ctx.getImageData(0, 0, 160, 160);

        if (lastData) {
            let diff = 0;
            for (let i = 0; i < data.data.length; i += 4) {
                diff += Math.abs(data.data[i] - lastData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;

                if (movementCount === 1) alert("⚠ Alert 1: No movement detected!");
                if (movementCount === 2) alert("⚠ Alert 2: Head not moving!");
                if (movementCount === 3) {
                    alert("⚠ Alert 3: Restarting test...");
                    restartTest();
                }
            }
        }
        lastData = data;

    }, 2000);
}

function restartTest() {
    if (videoStream) videoStream.getTracks().forEach(t => t.stop());

    const cam = document.getElementById("camera-container");
    if (cam) cam.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 60 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(0);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};