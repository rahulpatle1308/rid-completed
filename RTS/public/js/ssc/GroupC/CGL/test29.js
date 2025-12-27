const questions = [
  {
    "num": 1,
    "question_en": "Which of these is the highest mountain peak in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Mount Everest", "Kanchenjunga", "Nanda Devi", "K2"],
    "options_hi": ["माउंट एवरेस्ट", "कंचनजंघा", "नंदा देवी", "K2"],
    "answer_en": "K2",
    "answer_hi": "K2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The 'First Indian to win the Fields Medal' was:",
    "question_hi": "फील्ड्स मेडल जीतने वाले पहले भारतीय थे:",
    "options_en": ["Manjul Bhargava", "Akshay Venkatesh", "C.R. Rao", "Harish-Chandra"],
    "options_hi": ["मंजुल भार्गव", "अक्षय वेंकटेश", "सी.आर. राव", "हरीश-चंद्र"],
    "answer_en": "Manjul Bhargava",
    "answer_hi": "मंजुल भार्गव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of these is NOT a type of chemical reaction?",
    "question_hi": "निम्नलिखित में से कौन सी रासायनिक अभिक्रिया का प्रकार नहीं है?",
    "options_en": ["Combination", "Decomposition", "Displacement", "Evaporation"],
    "options_hi": ["संयोजन", "वियोजन", "विस्थापन", "वाष्पीकरण"],
    "answer_en": "Evaporation",
    "answer_hi": "वाष्पीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The 'First Indian woman to win the Fields Medal' was:",
    "question_hi": "फील्ड्स मेडल जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Maryam Mirzakhani", "Karen Uhlenbeck", "Shafi Goldwasser"],
    "options_hi": ["कोई नहीं", "मरयम मिर्जाखानी", "करेन उहलेनबेक", "शफी गोल्डवासर"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of these is the highest mountain peak in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Mount Everest", "K2", "Kanchenjunga", "Lhotse"],
    "options_hi": ["माउंट एवरेस्ट", "K2", "कंचनजंघा", "ल्होत्से"],
    "answer_en": "Mount Everest",
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The 'First Indian to win the Turing Award' was:",
    "question_hi": "ट्यूरिंग पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Raj Reddy", "Manindra Agrawal", "Narendra Karmarkar", "Vinod Dham"],
    "options_hi": ["राज रेड्डी", "मनींद्र अग्रवाल", "नरेंद्र करमरकर", "विनोद धाम"],
    "answer_en": "Raj Reddy",
    "answer_hi": "राज रेड्डी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of these is NOT a type of electromagnetic wave?",
    "question_hi": "निम्नलिखित में से कौन सा विद्युत चुम्बकीय तरंग का प्रकार नहीं है?",
    "options_en": ["Radio waves", "Microwaves", "Sound waves", "X-rays"],
    "options_hi": ["रेडियो तरंगें", "माइक्रोवेव", "ध्वनि तरंगें", "एक्स-किरणें"],
    "answer_en": "Sound waves",
    "answer_hi": "ध्वनि तरंगें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The 'First Indian woman to win the Turing Award' was:",
    "question_hi": "ट्यूरिंग पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Shafi Goldwasser", "Barbara Liskov", "Frances Allen"],
    "options_hi": ["कोई नहीं", "शफी गोल्डवासर", "बारबरा लिस्कोव", "फ्रांसिस एलेन"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of these is the highest mountain peak in Africa?",
    "question_hi": "निम्नलिखित में से कौन सा अफ्रीका का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Mount Kilimanjaro", "Mount Kenya", "Mount Stanley", "Mount Meru"],
    "options_hi": ["माउंट किलिमंजारो", "माउंट केन्या", "माउंट स्टैनली", "माउंट मेरु"],
    "answer_en": "Mount Kilimanjaro",
    "answer_hi": "माउंट किलिमंजारो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The 'First Indian to win the Abel Prize' was:",
    "question_hi": "एबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["None", "Manjul Bhargava", "Akshay Venkatesh", "S.R. Srinivasa Varadhan"],
    "options_hi": ["कोई नहीं", "मंजुल भार्गव", "अक्षय वेंकटेश", "एस.आर. श्रीनिवास वरदन"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of these is NOT a type of force in physics?",
    "question_hi": "निम्नलिखित में से कौन सा भौतिकी में बल का प्रकार नहीं है?",
    "options_en": ["Gravitational", "Electromagnetic", "Strong nuclear", "Weak nuclear"],
    "options_hi": ["गुरुत्वाकर्षण", "विद्युत चुम्बकीय", "प्रबल नाभिकीय", "दुर्बल नाभिकीय"],
    "answer_en": "Weak nuclear",
    "answer_hi": "दुर्बल नाभिकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The 'First Indian woman to win the Abel Prize' was:",
    "question_hi": "एबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Karen Uhlenbeck", "Maryam Mirzakhani", "Shafi Goldwasser"],
    "options_hi": ["कोई नहीं", "करेन उहलेनबेक", "मरयम मिर्जाखानी", "शफी गोल्डवासर"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of these is the highest mountain peak in Europe?",
    "question_hi": "निम्नलिखित में से कौन सा यूरोप का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Mount Elbrus", "Mont Blanc", "Mount Etna", "Matterhorn"],
    "options_hi": ["माउंट एल्ब्रस", "मोंट ब्लां", "माउंट एटना", "मैटरहॉर्न"],
    "answer_en": "Mount Elbrus",
    "answer_hi": "माउंट एल्ब्रस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The 'First Indian to win the Wolf Prize' was:",
    "question_hi": "वुल्फ पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.N.R. Rao", "A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha"],
    "options_hi": ["सी.एन.आर. राव", "ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा"],
    "answer_en": "C.N.R. Rao",
    "answer_hi": "सी.एन.आर. राव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of these is NOT a type of lens defect?",
    "question_hi": "निम्नलिखित में से कौन सा लेंस दोष का प्रकार नहीं है?",
    "options_en": ["Spherical aberration", "Chromatic aberration", "Astigmatism", "Diffraction"],
    "options_hi": ["गोलीय विपथन", "वर्ण विपथन", "दृष्टिवैषम्य", "विवर्तन"],
    "answer_en": "Diffraction",
    "answer_hi": "विवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The 'First Indian woman to win the Wolf Prize' was:",
    "question_hi": "वुल्फ पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla"],
    "options_hi": ["कोई नहीं", "असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of these is the highest mountain peak in North America?",
    "question_hi": "निम्नलिखित में से कौन सा उत्तरी अमेरिका का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Denali", "Mount Logan", "Pico de Orizaba", "Mount Saint Elias"],
    "options_hi": ["डेनाली", "माउंट लोगन", "पिको डी ओरिज़ाबा", "माउंट सेंट एलियास"],
    "answer_en": "Denali",
    "answer_hi": "डेनाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The 'First Indian to win the Kyoto Prize' was:",
    "question_hi": "क्योटो पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["A.P.J. Abdul Kalam", "C.V. Raman", "Satyajit Ray", "Ravi Shankar"],
    "options_hi": ["ए.पी.जे. अब्दुल कलाम", "सी.वी. रमन", "सत्यजित रे", "रवि शंकर"],
    "answer_en": "A.P.J. Abdul Kalam",
    "answer_hi": "ए.पी.जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of these is NOT a type of mirror?",
    "question_hi": "निम्नलिखित में से कौन सा दर्पण का प्रकार नहीं है?",
    "options_en": ["Plane", "Concave", "Convex", "Circular"],
    "options_hi": ["समतल", "अवतल", "उत्तल", "वृत्ताकार"],
    "answer_en": "Circular",
    "answer_hi": "वृत्ताकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The 'First Indian woman to win the Kyoto Prize' was:",
    "question_hi": "क्योटो पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Mother Teresa", "Amartya Sen", "V.S. Naipaul"],
    "options_hi": ["कोई नहीं", "मदर टेरेसा", "अमर्त्य सेन", "वी.एस. नायपॉल"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of these is the highest mountain peak in South America?",
    "question_hi": "निम्नलिखित में से कौन सा दक्षिण अमेरिका का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Aconcagua", "Ojos del Salado", "Monte Pissis", "Huascarán"],
    "options_hi": ["अकोंकागुआ", "ओजोस डेल सलाडो", "मोंटे पिसिस", "हुआस्करान"],
    "answer_en": "Aconcagua",
    "answer_hi": "अकोंकागुआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The 'First Indian to win the Lasker Award' was:",
    "question_hi": "लास्कर पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["None", "Har Gobind Khorana", "Venkatraman Ramakrishnan", "C.V. Raman"],
    "options_hi": ["कोई नहीं", "हर गोबिंद खुराना", "वेंकटरमण रामकृष्णन", "सी.वी. रमन"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of these is NOT a type of motion?",
    "question_hi": "निम्नलिखित में से कौन सा गति का प्रकार नहीं है?",
    "options_en": ["Linear", "Circular", "Rotational", "Static"],
    "options_hi": ["रेखीय", "वृत्ताकार", "घूर्णन", "स्थिर"],
    "answer_en": "Static",
    "answer_hi": "स्थिर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The 'First Indian woman to win the Lasker Award' was:",
    "question_hi": "लास्कर पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla"],
    "options_hi": ["कोई नहीं", "असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of these is the highest mountain peak in Antarctica?",
    "question_hi": "निम्नलिखित में से कौन सा अंटार्कटिका का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Vinson Massif", "Mount Tyree", "Mount Shinn", "Mount Gardner"],
    "options_hi": ["विन्सन मासिफ", "माउंट टायरी", "माउंट शिन", "माउंट गार्डनर"],
    "answer_en": "Vinson Massif",
    "answer_hi": "विन्सन मासिफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The 'First Indian to win the Shaw Prize' was:",
    "question_hi": "शॉ पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["None", "Manjul Bhargava", "Akshay Venkatesh", "S.R. Srinivasa Varadhan"],
    "options_hi": ["कोई नहीं", "मंजुल भार्गव", "अक्षय वेंकटेश", "एस.आर. श्रीनिवास वरदन"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of these is NOT a type of simple machine?",
    "question_hi": "निम्नलिखित में से कौन सा सरल मशीन का प्रकार नहीं है?",
    "options_en": ["Lever", "Pulley", "Inclined plane", "Engine"],
    "options_hi": ["उत्तोलक", "चरखी", "झुका हुआ तल", "इंजन"],
    "answer_en": "Engine",
    "answer_hi": "इंजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The 'First Indian woman to win the Shaw Prize' was:",
    "question_hi": "शॉ पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Karen Uhlenbeck", "Maryam Mirzakhani", "Shafi Goldwasser"],
    "options_hi": ["कोई नहीं", "करेन उहलेनबेक", "मरयम मिर्जाखानी", "शफी गोल्डवासर"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which of these is the highest mountain peak in Australia?",
    "question_hi": "निम्नलिखित में से कौन सा ऑस्ट्रेलिया का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Mount Kosciuszko", "Mount Townsend", "Mount Twynam", "Mount Jagungal"],
    "options_hi": ["माउंट कोसियस्को", "माउंट टाउनसेंड", "माउंट ट्वायनम", "माउंट जगुंगल"],
    "answer_en": "Mount Kosciuszko",
    "answer_hi": "माउंट कोसियस्को",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The 'First Indian to win the Breakthrough Prize' was:",
    "question_hi": "ब्रेकथ्रू पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Ashoke Sen", "Manjul Bhargava", "Akshay Venkatesh", "S.R. Srinivasa Varadhan"],
    "options_hi": ["अशोक सेन", "मंजुल भार्गव", "अक्षय वेंकटेश", "एस.आर. श्रीनिवास वरदन"],
    "answer_en": "Ashoke Sen",
    "answer_hi": "अशोक सेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which of these is NOT a type of energy resource?",
    "question_hi": "निम्नलिखित में से कौन सा ऊर्जा संसाधन का प्रकार नहीं है?",
    "options_en": ["Renewable", "Non-renewable", "Conventional", "Unconventional"],
    "options_hi": ["नवीकरणीय", "गैर-नवीकरणीय", "परंपरागत", "अपरंपरागत"],
    "answer_en": "Unconventional",
    "answer_hi": "अपरंपरागत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The 'First Indian woman to win the Breakthrough Prize' was:",
    "question_hi": "ब्रेकथ्रू पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Karen Uhlenbeck", "Maryam Mirzakhani", "Shafi Goldwasser"],
    "options_hi": ["कोई नहीं", "करेन उहलेनबेक", "मरयम मिर्जाखानी", "शफी गोल्डवासर"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of these is the highest mountain peak in the Himalayas?",
    "question_hi": "निम्नलिखित में से कौन सा हिमालय का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Mount Everest", "K2", "Kanchenjunga", "Lhotse"],
    "options_hi": ["माउंट एवरेस्ट", "K2", "कंचनजंघा", "ल्होत्से"],
    "answer_en": "Mount Everest",
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The 'First Indian to win the Crafoord Prize' was:",
    "question_hi": "क्रैफोर्ड पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["None", "Manjul Bhargava", "Akshay Venkatesh", "S.R. Srinivasa Varadhan"],
    "options_hi": ["कोई नहीं", "मंजुल भार्गव", "अक्षय वेंकटेश", "एस.आर. श्रीनिवास वरदन"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of these is NOT a type of semiconductor?",
    "question_hi": "निम्नलिखित में से कौन सा अर्धचालक का प्रकार नहीं है?",
    "options_en": ["Silicon", "Germanium", "Gallium arsenide", "Copper"],
    "options_hi": ["सिलिकॉन", "जर्मेनियम", "गैलियम आर्सेनाइड", "तांबा"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The 'First Indian woman to win the Crafoord Prize' was:",
    "question_hi": "क्रैफोर्ड पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Karen Uhlenbeck", "Maryam Mirzakhani", "Shafi Goldwasser"],
    "options_hi": ["कोई नहीं", "करेन उहलेनबेक", "मरयम मिर्जाखानी", "शफी गोल्डवासर"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which of these is the highest mountain peak in the Andes?",
    "question_hi": "निम्नलिखित में से कौन सा एंडीज का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Aconcagua", "Ojos del Salado", "Monte Pissis", "Huascarán"],
    "options_hi": ["अकोंकागुआ", "ओजोस डेल सलाडो", "मोंटे पिसिस", "हुआस्करान"],
    "answer_en": "Aconcagua",
    "answer_hi": "अकोंकागुआ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The 'First Indian to win the Boltzmann Medal' was:",
    "question_hi": "बोल्ट्जमैन मेडल जीतने वाले पहले भारतीय थे:",
    "options_en": ["None", "S. Chandrasekhar", "C.V. Raman", "Homi Bhabha"],
    "options_hi": ["कोई नहीं", "एस. चंद्रशेखर", "सी.वी. रमन", "होमी भाभा"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of these is NOT a type of magnetic material?",
    "question_hi": "निम्नलिखित में से कौन सा चुंबकीय पदार्थ का प्रकार नहीं है?",
    "options_en": ["Ferromagnetic", "Paramagnetic", "Diamagnetic", "Electromagnetic"],
    "options_hi": ["लौहचुंबकीय", "अनुचुंबकीय", "प्रतिचुंबकीय", "विद्युत चुम्बकीय"],
    "answer_en": "Electromagnetic",
    "answer_hi": "विद्युत चुम्बकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The 'First Indian woman to win the Boltzmann Medal' was:",
    "question_hi": "बोल्ट्जमैन मेडल जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Karen Uhlenbeck", "Maryam Mirzakhani", "Shafi Goldwasser"],
    "options_hi": ["कोई नहीं", "करेन उहलेनबेक", "मरयम मिर्जाखानी", "शफी गोल्डवासर"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of these is the highest mountain peak in the Alps?",
    "question_hi": "निम्नलिखित में से कौन सा आल्प्स का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Mont Blanc", "Matterhorn", "Eiger", "Jungfrau"],
    "options_hi": ["मोंट ब्लां", "मैटरहॉर्न", "आइगर", "युंगफ्राउ"],
    "answer_en": "Mont Blanc",
    "answer_hi": "मोंट ब्लां",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The 'First Indian to win the Dirac Medal' was:",
    "question_hi": "डिराक मेडल जीतने वाले पहले भारतीय थे:",
    "options_en": ["Ashoke Sen", "Manjul Bhargava", "Akshay Venkatesh", "S.R. Srinivasa Varadhan"],
    "options_hi": ["अशोक सेन", "मंजुल भार्गव", "अक्षय वेंकटेश", "एस.आर. श्रीनिवास वरदन"],
    "answer_en": "Ashoke Sen",
    "answer_hi": "अशोक सेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of these is NOT a type of optical instrument?",
    "question_hi": "निम्नलिखित में से कौन सा प्रकाशीय यंत्र का प्रकार नहीं है?",
    "options_en": ["Microscope", "Telescope", "Periscope", "Gyroscope"],
    "options_hi": ["माइक्रोस्कोप", "टेलीस्कोप", "पेरिस्कोप", "जायरोस्कोप"],
    "answer_en": "Gyroscope",
    "answer_hi": "जायरोस्कोप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The 'First Indian woman to win the Dirac Medal' was:",
    "question_hi": "डिराक मेडल जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Karen Uhlenbeck", "Maryam Mirzakhani", "Shafi Goldwasser"],
    "options_hi": ["कोई नहीं", "करेन उहलेनबेक", "मरयम मिर्जाखानी", "शफी गोल्डवासर"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which of these is the highest mountain peak in the Rockies?",
    "question_hi": "निम्नलिखित में से कौन सा रॉकी पर्वत का सबसे ऊँचा शिखर है?",
    "options_en": ["Mount Elbert", "Mount Massive", "Mount Harvard", "Mount Rainier"],
    "options_hi": ["माउंट एल्बर्ट", "माउंट मैसिव", "माउंट हार्वर्ड", "माउंट रेनियर"],
    "answer_en": "Mount Elbert",
    "answer_hi": "माउंट एल्बर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The 'First Indian to win the Ramanujan Prize' was:",
    "question_hi": "रामानुजन पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Manjul Bhargava", "Akshay Venkatesh", "S.R. Srinivasa Varadhan", "Ashoke Sen"],
    "options_hi": ["मंजुल भार्गव", "अक्षय वेंकटेश", "एस.आर. श्रीनिवास वरदन", "अशोक सेन"],
    "answer_en": "Manjul Bhargava",
    "answer_hi": "मंजुल भार्गव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which of these is NOT a type of electrical circuit?",
    "question_hi": "निम्नलिखित में से कौन सा विद्युत परिपथ का प्रकार नहीं है?",
    "options_en": ["Series", "Parallel", "Complex", "Simple"],
    "options_hi": ["श्रृंखला", "समानांतर", "जटिल", "सरल"],
    "answer_en": "Complex",
    "answer_hi": "जटिल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The 'First Indian woman to win the Ramanujan Prize' was:",
    "question_hi": "रामानुजन पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Maryam Mirzakhani", "Karen Uhlenbeck", "Shafi Goldwasser"],
    "options_hi": ["कोई नहीं", "मरयम मिर्जाखानी", "करेन उहलेनबेक", "शफी गोल्डवासर"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of these is the highest mountain peak in the Caucasus?",
    "question_hi": "निम्नलिखित में से कौन सा काकेशस का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["Mount Elbrus", "Mount Kazbek", "Mount Shkhara", "Mount Dykh-Tau"],
    "options_hi": ["माउंट एल्ब्रस", "माउंट काज़बेक", "माउंट शखरा", "माउंट डाइख-ताऊ"],
    "answer_en": "Mount Elbrus",
    "answer_hi": "माउंट एल्ब्रस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The 'First Indian to win the INSA Medal' was:",
    "question_hi": "इंसा मेडल जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose"],
    "options_hi": ["सी.वी. रमन", "होमी भाभा", "विक्रम साराभाई", "सत्येंद्र नाथ बोस"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
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