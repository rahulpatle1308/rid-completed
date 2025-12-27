const questions = [
  {
    "num": 1,
    "question_en": "Which of these is the highest civilian award in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सर्वोच्च नागरिक पुरस्कार है?",
    "options_en": ["Padma Shri", "Padma Bhushan", "Padma Vibhushan", "Bharat Ratna"],
    "options_hi": ["पद्म श्री", "पद्म भूषण", "पद्म विभूषण", "भारत रत्न"],
    "answer_en": "Bharat Ratna",
    "answer_hi": "भारत रत्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The 'First Indian to win the Nobel Prize in Literature' was:",
    "question_hi": "साहित्य में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Rabindranath Tagore", "V.S. Naipaul", "Amartya Sen", "Mother Teresa"],
    "options_hi": ["रबींद्रनाथ टैगोर", "वी.एस. नायपॉल", "अमर्त्य सेन", "मदर टेरेसा"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रबींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of these is NOT a greenhouse gas?",
    "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
    "options_en": ["Carbon Dioxide", "Methane", "Nitrous Oxide", "Oxygen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "नाइट्रस ऑक्साइड", "ऑक्सीजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The 'First Indian to win the Nobel Prize in Physics' was:",
    "question_hi": "भौतिकी में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "S. Chandrasekhar", "Hargobind Khorana", "Subrahmanyan Chandrasekhar"],
    "options_hi": ["सी.वी. रमन", "एस. चंद्रशेखर", "हरगोविंद खुराना", "सुब्रह्मण्यन चंद्रशेखर"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of these is the smallest ocean in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे छोटा महासागर है?",
    "options_en": ["Arctic Ocean", "Indian Ocean", "Atlantic Ocean", "Southern Ocean"],
    "options_hi": ["आर्कटिक महासागर", "हिंद महासागर", "अटलांटिक महासागर", "दक्षिणी महासागर"],
    "answer_en": "Arctic Ocean",
    "answer_hi": "आर्कटिक महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The 'First Indian to win the Nobel Prize in Chemistry' was:",
    "question_hi": "रसायन विज्ञान में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Venkatraman Ramakrishnan", "Har Gobind Khorana", "C.V. Raman", "None of these"],
    "options_hi": ["वेंकटरमण रामकृष्णन", "हर गोबिंद खुराना", "सी.वी. रमन", "इनमें से कोई नहीं"],
    "answer_en": "Venkatraman Ramakrishnan",
    "answer_hi": "वेंकटरमण रामकृष्णन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of these is NOT a type of wave?",
    "question_hi": "निम्नलिखित में से कौन सा तरंग का प्रकार नहीं है?",
    "options_en": ["Transverse", "Longitudinal", "Surface", "Circular"],
    "options_hi": ["अनुप्रस्थ", "अनुदैर्ध्य", "सतह", "वृत्ताकार"],
    "answer_en": "Circular",
    "answer_hi": "वृत्ताकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The 'First Indian to win the Nobel Prize in Medicine' was:",
    "question_hi": "चिकित्सा में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Har Gobind Khorana", "Venkatraman Ramakrishnan", "C.V. Raman", "Amartya Sen"],
    "options_hi": ["हर गोबिंद खुराना", "वेंकटरमण रामकृष्णन", "सी.वी. रमन", "अमर्त्य सेन"],
    "answer_en": "Har Gobind Khorana",
    "answer_hi": "हर गोबिंद खुराना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of these is the largest desert in Africa?",
    "question_hi": "निम्नलिखित में से कौन सा अफ्रीका का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Sahara", "Kalahari", "Namib", "Libyan"],
    "options_hi": ["सहारा", "कालाहारी", "नामिब", "लीबियाई"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The 'First Indian to win the Nobel Prize in Economics' was:",
    "question_hi": "अर्थशास्त्र में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Amartya Sen", "Abhijit Banerjee", "C.V. Raman", "Har Gobind Khorana"],
    "options_hi": ["अमर्त्य सेन", "अभिजीत बनर्जी", "सी.वी. रमन", "हर गोबिंद खुराना"],
    "answer_en": "Amartya Sen",
    "answer_hi": "अमर्त्य सेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of these is NOT a type of energy?",
    "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का प्रकार नहीं है?",
    "options_en": ["Kinetic", "Potential", "Thermal", "Atomic"],
    "options_hi": ["गतिज", "स्थितिज", "तापीय", "परमाणु"],
    "answer_en": "Atomic",
    "answer_hi": "परमाणु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The 'First Indian to win the Nobel Peace Prize' was:",
    "question_hi": "नोबेल शांति पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Mother Teresa", "Kailash Satyarthi", "Dalai Lama", "Mahatma Gandhi"],
    "options_hi": ["मदर टेरेसा", "कैलाश सत्यार्थी", "दलाई लामा", "महात्मा गांधी"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of these is the largest island in the Mediterranean Sea?",
    "question_hi": "निम्नलिखित में से कौन सा भूमध्य सागर का सबसे बड़ा द्वीप है?",
    "options_en": ["Sicily", "Sardinia", "Cyprus", "Crete"],
    "options_hi": ["सिसिली", "सार्डिनिया", "साइप्रस", "क्रेते"],
    "answer_en": "Sicily",
    "answer_hi": "सिसिली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The 'First Indian woman to win the Nobel Prize' was:",
    "question_hi": "नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mother Teresa", "Amartya Sen", "V.S. Naipaul", "Rabindranath Tagore"],
    "options_hi": ["मदर टेरेसा", "अमर्त्य सेन", "वी.एस. नायपॉल", "रबींद्रनाथ टैगोर"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of these is NOT a type of soil?",
    "question_hi": "निम्नलिखित में से कौन सा मिट्टी का प्रकार नहीं है?",
    "options_en": ["Sandy", "Clayey", "Loamy", "Rocky"],
    "options_hi": ["बलुई", "चिकनी", "दोमट", "चट्टानी"],
    "answer_en": "Rocky",
    "answer_hi": "चट्टानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The 'First Indian woman to win the Nobel Prize in Literature' was:",
    "question_hi": "साहित्य में नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Amrita Pritam", "Mahasweta Devi", "Arundhati Roy"],
    "options_hi": ["कोई नहीं", "अमृता प्रीतम", "महाश्वेता देवी", "अरुंधति रॉय"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of these is the largest river in Europe?",
    "question_hi": "निम्नलिखित में से कौन सी यूरोप की सबसे बड़ी नदी है?",
    "options_en": ["Volga", "Danube", "Rhine", "Thames"],
    "options_hi": ["वोल्गा", "डेन्यूब", "राइन", "टेम्स"],
    "answer_en": "Volga",
    "answer_hi": "वोल्गा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The 'First Indian woman to win the Nobel Prize in Physics' was:",
    "question_hi": "भौतिकी में नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Kalpana Chawla", "Asima Chatterjee", "Janaki Ammal"],
    "options_hi": ["कोई नहीं", "कल्पना चावला", "असीमा चटर्जी", "जानकी अम्मल"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of these is NOT a type of climate?",
    "question_hi": "निम्नलिखित में से कौन सा जलवायु का प्रकार नहीं है?",
    "options_en": ["Tropical", "Temperate", "Polar", "Oceanic"],
    "options_hi": ["उष्णकटिबंधीय", "समशीतोष्ण", "ध्रुवीय", "महासागरीय"],
    "answer_en": "Oceanic",
    "answer_hi": "महासागरीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The 'First Indian woman to win the Nobel Prize in Chemistry' was:",
    "question_hi": "रसायन विज्ञान में नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla"],
    "options_hi": ["कोई नहीं", "असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of these is the largest river in South America?",
    "question_hi": "निम्नलिखित में से कौन सी दक्षिण अमेरिका की सबसे बड़ी नदी है?",
    "options_en": ["Amazon", "Paraná", "Orinoco", "São Francisco"],
    "options_hi": ["अमेज़न", "पराना", "ओरिनोको", "साओ फ्रांसिस्को"],
    "answer_en": "Amazon",
    "answer_hi": "अमेज़न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The 'First Indian woman to win the Nobel Prize in Medicine' was:",
    "question_hi": "चिकित्सा में नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla"],
    "options_hi": ["कोई नहीं", "असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of these is NOT a type of rock formation?",
    "question_hi": "निम्नलिखित में से कौन सा चट्टान निर्माण का प्रकार नहीं है?",
    "options_en": ["Folds", "Faults", "Joints", "Cracks"],
    "options_hi": ["वलन", "भ्रंश", "संधियाँ", "दरारें"],
    "answer_en": "Cracks",
    "answer_hi": "दरारें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The 'First Indian woman to win the Nobel Prize in Economics' was:",
    "question_hi": "अर्थशास्त्र में नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Amartya Sen", "Abhijit Banerjee", "Esther Duflo"],
    "options_hi": ["कोई नहीं", "अमर्त्य सेन", "अभिजीत बनर्जी", "एस्थर डुफ्लो"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of these is the largest river in Asia?",
    "question_hi": "निम्नलिखित में से कौन सी एशिया की सबसे बड़ी नदी है?",
    "options_en": ["Yangtze", "Yellow River", "Mekong", "Ganges"],
    "options_hi": ["यांग्त्ज़ी", "पीली नदी", "मेकांग", "गंगा"],
    "answer_en": "Yangtze",
    "answer_hi": "यांग्त्ज़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The 'First Indian woman to win the Nobel Peace Prize' was:",
    "question_hi": "नोबेल शांति पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mother Teresa", "Kailash Satyarthi", "Dalai Lama", "Mahatma Gandhi"],
    "options_hi": ["मदर टेरेसा", "कैलाश सत्यार्थी", "दलाई लामा", "महात्मा गांधी"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of these is NOT a type of precipitation?",
    "question_hi": "निम्नलिखित में से कौन सा वर्षण का प्रकार नहीं है?",
    "options_en": ["Rain", "Snow", "Sleet", "Fog"],
    "options_hi": ["बारिश", "बर्फ", "ओला", "कोहरा"],
    "answer_en": "Fog",
    "answer_hi": "कोहरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Community Leadership' was:",
    "question_hi": "सामुदायिक नेतृत्व के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mother Teresa", "Kiran Bedi", "Aruna Roy", "Mahasweta Devi"],
    "options_hi": ["मदर टेरेसा", "किरण बेदी", "अरुणा रॉय", "महाश्वेता देवी"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which of these is the largest river in North America?",
    "question_hi": "निम्नलिखित में से कौन सी उत्तरी अमेरिका की सबसे बड़ी नदी है?",
    "options_en": ["Mississippi", "Missouri", "Yukon", "Rio Grande"],
    "options_hi": ["मिसिसिपी", "मिसौरी", "युकॉन", "रियो ग्रांडे"],
    "answer_en": "Mississippi",
    "answer_hi": "मिसिसिपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Government Service' was:",
    "question_hi": "सरकारी सेवा के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Kiran Bedi", "Mother Teresa", "Aruna Roy", "Mahasweta Devi"],
    "options_hi": ["किरण बेदी", "मदर टेरेसा", "अरुणा रॉय", "महाश्वेता देवी"],
    "answer_en": "Kiran Bedi",
    "answer_hi": "किरण बेदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which of these is NOT a type of wind?",
    "question_hi": "निम्नलिखित में से कौन सा हवा का प्रकार नहीं है?",
    "options_en": ["Trade winds", "Westerlies", "Polar winds", "Oceanic winds"],
    "options_hi": ["व्यापारिक हवाएं", "पश्चिमी हवाएं", "ध्रुवीय हवाएं", "महासागरीय हवाएं"],
    "answer_en": "Oceanic winds",
    "answer_hi": "महासागरीय हवाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Journalism' was:",
    "question_hi": "पत्रकारिता के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["P. Sainath", "Kiran Bedi", "Aruna Roy", "Mahasweta Devi"],
    "options_hi": ["पी. साईनाथ", "किरण बेदी", "अरुणा रॉय", "महाश्वेता देवी"],
    "answer_en": "P. Sainath",
    "answer_hi": "पी. साईनाथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of these is the largest river in Australia?",
    "question_hi": "निम्नलिखित में से कौन सी ऑस्ट्रेलिया की सबसे बड़ी नदी है?",
    "options_en": ["Murray", "Darling", "Murrumbidgee", "Lachlan"],
    "options_hi": ["मरे", "डार्लिंग", "मर्रम्बिजी", "लैकलैन"],
    "answer_en": "Murray",
    "answer_hi": "मरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Public Service' was:",
    "question_hi": "सार्वजनिक सेवा के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Aruna Roy", "Kiran Bedi", "Mother Teresa", "Mahasweta Devi"],
    "options_hi": ["अरुणा रॉय", "किरण बेदी", "मदर टेरेसा", "महाश्वेता देवी"],
    "answer_en": "Aruna Roy",
    "answer_hi": "अरुणा रॉय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of these is NOT a type of cloud?",
    "question_hi": "निम्नलिखित में से कौन सा बादल का प्रकार नहीं है?",
    "options_en": ["Cumulus", "Stratus", "Cirrus", "Nimbus"],
    "options_hi": ["क्यूम्यलस", "स्ट्रेटस", "सिरस", "निंबस"],
    "answer_en": "Nimbus",
    "answer_hi": "निंबस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Emergent Leadership' was:",
    "question_hi": "उभरते नेतृत्व के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mahasweta Devi", "Kiran Bedi", "Aruna Roy", "Mother Teresa"],
    "options_hi": ["महाश्वेता देवी", "किरण बेदी", "अरुणा रॉय", "मदर टेरेसा"],
    "answer_en": "Mahasweta Devi",
    "answer_hi": "महाश्वेता देवी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which of these is the largest river in Antarctica?",
    "question_hi": "निम्नलिखित में से कौन सी अंटार्कटिका की सबसे बड़ी नदी है?",
    "options_en": ["None", "Onyx River", "Amazon", "Nile"],
    "options_hi": ["कोई नहीं", "ओनिक्स नदी", "अमेज़न", "नाइल"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for International Understanding' was:",
    "question_hi": "अंतर्राष्ट्रीय समझ के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mother Teresa", "Kiran Bedi", "Aruna Roy", "Mahasweta Devi"],
    "options_hi": ["मदर टेरेसा", "किरण बेदी", "अरुणा रॉय", "महाश्वेता देवी"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of these is NOT a type of biome?",
    "question_hi": "निम्नलिखित में से कौन सा बायोम का प्रकार नहीं है?",
    "options_en": ["Tundra", "Taiga", "Desert", "Ocean"],
    "options_hi": ["टुंड्रा", "टैगा", "रेगिस्तान", "महासागर"],
    "answer_en": "Ocean",
    "answer_hi": "महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Peace and International Understanding' was:",
    "question_hi": "शांति और अंतर्राष्ट्रीय समझ के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mother Teresa", "Kiran Bedi", "Aruna Roy", "Mahasweta Devi"],
    "options_hi": ["मदर टेरेसा", "किरण बेदी", "अरुणा रॉय", "महाश्वेता देवी"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of these is the largest river in the world by discharge?",
    "question_hi": "निर्वहन के हिसाब से निम्नलिखित में से कौन सी दुनिया की सबसे बड़ी नदी है?",
    "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "options_hi": ["अमेज़न", "नाइल", "यांग्त्ज़ी", "मिसिसिपी"],
    "answer_en": "Amazon",
    "answer_hi": "अमेज़न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Community Leadership in India' was:",
    "question_hi": "भारत में सामुदायिक नेतृत्व के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mother Teresa", "Kiran Bedi", "Aruna Roy", "Mahasweta Devi"],
    "options_hi": ["मदर टेरेसा", "किरण बेदी", "अरुणा रॉय", "महाश्वेता देवी"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of these is NOT a type of ecosystem?",
    "question_hi": "निम्नलिखित में से कौन सा पारिस्थितिकी तंत्र का प्रकार नहीं है?",
    "options_en": ["Forest", "Grassland", "Aquatic", "Urban"],
    "options_hi": ["वन", "घास का मैदान", "जलीय", "शहरी"],
    "answer_en": "Urban",
    "answer_hi": "शहरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Government Service in India' was:",
    "question_hi": "भारत में सरकारी सेवा के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Kiran Bedi", "Mother Teresa", "Aruna Roy", "Mahasweta Devi"],
    "options_hi": ["किरण बेदी", "मदर टेरेसा", "अरुणा रॉय", "महाश्वेता देवी"],
    "answer_en": "Kiran Bedi",
    "answer_hi": "किरण बेदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which of these is the largest river in the world by length?",
    "question_hi": "लंबाई के हिसाब से निम्नलिखित में से कौन सी दुनिया की सबसे बड़ी नदी है?",
    "options_en": ["Nile", "Amazon", "Yangtze", "Mississippi"],
    "options_hi": ["नाइल", "अमेज़न", "यांग्त्ज़ी", "मिसिसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Journalism in India' was:",
    "question_hi": "भारत में पत्रकारिता के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["P. Sainath", "Kiran Bedi", "Aruna Roy", "Mahasweta Devi"],
    "options_hi": ["पी. साईनाथ", "किरण बेदी", "अरुणा रॉय", "महाश्वेता देवी"],
    "answer_en": "P. Sainath",
    "answer_hi": "पी. साईनाथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which of these is NOT a type of pollution?",
    "question_hi": "निम्नलिखित में से कौन सा प्रदूषण का प्रकार नहीं है?",
    "options_en": ["Air", "Water", "Soil", "Sound"],
    "options_hi": ["वायु", "जल", "मिट्टी", "ध्वनि"],
    "answer_en": "Sound",
    "answer_hi": "ध्वनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Public Service in India' was:",
    "question_hi": "भारत में सार्वजनिक सेवा के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Aruna Roy", "Kiran Bedi", "Mother Teresa", "Mahasweta Devi"],
    "options_hi": ["अरुणा रॉय", "किरण बेदी", "मदर टेरेसा", "महाश्वेता देवी"],
    "answer_en": "Aruna Roy",
    "answer_hi": "अरुणा रॉय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of these is the largest river in the world by volume?",
    "question_hi": "आयतन के हिसाब से निम्नलिखित में से कौन सी दुनिया की सबसे बड़ी नदी है?",
    "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "options_hi": ["अमेज़न", "नाइल", "यांग्त्ज़ी", "मिसिसिपी"],
    "answer_en": "Amazon",
    "answer_hi": "अमेज़न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award for Emergent Leadership in India' was:",
    "question_hi": "भारत में उभरते नेतृत्व के लिए रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mahasweta Devi", "Kiran Bedi", "Aruna Roy", "Mother Teresa"],
    "options_hi": ["महाश्वेता देवी", "किरण बेदी", "अरुणा रॉय", "मदर टेरेसा"],
    "answer_en": "Mahasweta Devi",
    "answer_hi": "महाश्वेता देवी",
    "attempted": false,
    "selected": ""
  }
]

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