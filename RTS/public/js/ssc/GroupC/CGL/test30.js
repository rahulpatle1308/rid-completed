const questions = [
  {
   "num": 1,
    "question_en": "Which of these is the deepest ocean trench in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया की सबसे गहरी समुद्री खाई है?",
    "options_en": ["Mariana Trench", "Tonga Trench", "Philippine Trench", "Kermadec Trench"],
    "options_hi": ["मरियाना ट्रेंच", "टोंगा ट्रेंच", "फिलीपीन ट्रेंच", "करमाडेक ट्रेंच"],
    "answer_en": "Mariana Trench",
    "answer_hi": "मरियाना ट्रेंच",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "The 'First Indian woman to win the INSA Medal' was:",
    "question_hi": "इंसा मेडल जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla", "None"],
    "options_hi": ["असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला", "कोई नहीं"],
    "answer_en": "Asima Chatterjee",
    "answer_hi": "असीमा चटर्जी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Which of these is NOT a type of chemical element?",
    "question_hi": "निम्नलिखित में से कौन सा रासायनिक तत्व का प्रकार नहीं है?",
    "options_en": ["Metal", "Non-metal", "Metalloid", "Compound"],
    "options_hi": ["धातु", "अधातु", "उपधातु", "यौगिक"],
    "answer_en": "Compound",
    "answer_hi": "यौगिक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "The 'First Indian to win the Shanti Swarup Bhatnagar Prize' was:",
    "question_hi": "शांति स्वरूप भटनागर पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["K.S. Krishnan", "S.S. Bhatnagar", "C.V. Raman", "Homi Bhabha"],
    "options_hi": ["के.एस. कृष्णन", "एस.एस. भटनागर", "सी.वी. रमन", "होमी भाभा"],
    "answer_en": "K.S. Krishnan",
    "answer_hi": "के.एस. कृष्णन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Which of these is the largest hot desert in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा गर्म रेगिस्तान है?",
    "options_en": ["Sahara", "Arabian", "Gobi", "Kalahari"],
    "options_hi": ["सहारा", "अरबी", "गोबी", "कालाहारी"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 6,
    "question_en": "The 'First Indian woman to win the Shanti Swarup Bhatnagar Prize' was:",
    "question_hi": "शांति स्वरूप भटनागर पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla", "None"],
    "options_hi": ["असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला", "कोई नहीं"],
    "answer_en": "Asima Chatterjee",
    "answer_hi": "असीमा चटर्जी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 7,
    "question_en": "Which of these is NOT a type of chemical compound?",
    "question_hi": "निम्नलिखित में से कौन सा रासायनिक यौगिक का प्रकार नहीं है?",
    "options_en": ["Acid", "Base", "Salt", "Element"],
    "options_hi": ["अम्ल", "क्षार", "लवण", "तत्व"],
    "answer_en": "Element",
    "answer_hi": "तत्व",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 8,
    "question_en": "The 'First Indian to win the J.C. Bose Fellowship' was:",
    "question_hi": "जे.सी. बोस फेलोशिप जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "Satyendra Nath Bose", "Jagadish Chandra Bose", "Homi Bhabha"],
    "options_hi": ["सी.वी. रमन", "सत्येंद्र नाथ बोस", "जगदीश चंद्र बोस", "होमी भाभा"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 9,
    "question_en": "Which of these is the largest cold desert in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा ठंडा रेगिस्तान है?",
    "options_en": ["Antarctic Desert", "Arctic Desert", "Gobi Desert", "Patagonian Desert"],
    "options_hi": ["अंटार्कटिक रेगिस्तान", "आर्कटिक रेगिस्तान", "गोबी रेगिस्तान", "पैटागोनियन रेगिस्तान"],
    "answer_en": "Antarctic Desert",
    "answer_hi": "अंटार्कटिक रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 10,
    "question_en": "The 'First Indian woman to win the J.C. Bose Fellowship' was:",
    "question_hi": "जे.सी. बोस फेलोशिप जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla", "None"],
    "options_hi": ["असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला", "कोई नहीं"],
    "answer_en": "Asima Chatterjee",
    "answer_hi": "असीमा चटर्जी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "Which of these is NOT a type of organic compound?",
    "question_hi": "निम्नलिखित में से कौन सा कार्बनिक यौगिक का प्रकार नहीं है?",
    "options_en": ["Hydrocarbon", "Alcohol", "Aldehyde", "Oxide"],
    "options_hi": ["हाइड्रोकार्बन", "एल्कोहॉल", "एल्डिहाइड", "ऑक्साइड"],
    "answer_en": "Oxide",
    "answer_hi": "ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "The 'First Indian to win the Swarna Jayanti Fellowship' was:",
    "question_hi": "स्वर्ण जयंती फेलोशिप जीतने वाले पहले भारतीय थे:",
    "options_en": ["Various scientists", "C.V. Raman", "Homi Bhabha", "Vikram Sarabhai"],
    "options_hi": ["विभिन्न वैज्ञानिक", "सी.वी. रमन", "होमी भाभा", "विक्रम साराभाई"],
    "answer_en": "Various scientists",
    "answer_hi": "विभिन्न वैज्ञानिक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
    "question_en": "Which of these is the largest salt desert in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा नमक रेगिस्तान है?",
    "options_en": ["Salar de Uyuni", "Great Salt Lake Desert", "Dasht-e Kavir", "Atacama Desert"],
    "options_hi": ["सालार डी उयूनी", "ग्रेट साल्ट लेक डेजर्ट", "दश्त-ए कवीर", "अटाकामा रेगिस्तान"],
    "answer_en": "Salar de Uyuni",
    "answer_hi": "सालार डी उयूनी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 14,
    "question_en": "The 'First Indian woman to win the Swarna Jayanti Fellowship' was:",
    "question_hi": "स्वर्ण जयंती फेलोशिप जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Various women scientists", "Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla"],
    "options_hi": ["विभिन्न महिला वैज्ञानिक", "असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला"],
    "answer_en": "Various women scientists",
    "answer_hi": "विभिन्न महिला वैज्ञानिक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "Which of these is NOT a type of inorganic compound?",
    "question_hi": "निम्नलिखित में से कौन सा अकार्बनिक यौगिक का प्रकार नहीं है?",
    "options_en": ["Oxide", "Acid", "Base", "Hydrocarbon"],
    "options_hi": ["ऑक्साइड", "अम्ल", "क्षार", "हाइड्रोकार्बन"],
    "answer_en": "Hydrocarbon",
    "answer_hi": "हाइड्रोकार्बन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "The 'First Indian to win the National Science Award' was:",
    "question_hi": "राष्ट्रीय विज्ञान पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose"],
    "options_hi": ["सी.वी. रमन", "होमी भाभा", "विक्रम साराभाई", "सत्येंद्र नाथ बोस"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 17,
    "question_en": "Which of these is the largest sand desert in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा रेत रेगिस्तान है?",
    "options_en": ["Arabian Desert", "Sahara Desert", "Gobi Desert", "Kalahari Desert"],
    "options_hi": ["अरबी रेगिस्तान", "सहारा रेगिस्तान", "गोबी रेगिस्तान", "कालाहारी रेगिस्तान"],
    "answer_en": "Arabian Desert",
    "answer_hi": "अरबी रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 18,
    "question_en": "The 'First Indian woman to win the National Science Award' was:",
    "question_hi": "राष्ट्रीय विज्ञान पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla", "None"],
    "options_hi": ["असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला", "कोई नहीं"],
    "answer_en": "Asima Chatterjee",
    "answer_hi": "असीमा चटर्जी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 19,
    "question_en": "Which of these is NOT a type of chemical bond?",
    "question_hi": "निम्नलिखित में से कौन सा रासायनिक बंधन का प्रकार नहीं है?",
    "options_en": ["Ionic", "Covalent", "Metallic", "Nuclear"],
    "options_hi": ["आयनिक", "सहसंयोजक", "धात्विक", "नाभिकीय"],
    "answer_en": "Nuclear",
    "answer_hi": "नाभिकीय",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "The 'First Indian to win the Padma Shri in Science' was:",
    "question_hi": "विज्ञान में पद्म श्री जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose"],
    "options_hi": ["सी.वी. रमन", "होमी भाभा", "विक्रम साराभाई", "सत्येंद्र नाथ बोस"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Which of these is the largest desert in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Thar Desert", "Cold Desert of Ladakh", "Rann of Kutch", "Deccan Plateau"],
    "options_hi": ["थार रेगिस्तान", "लद्दाख का ठंडा रेगिस्तान", "कच्छ का रण", "दक्कन का पठार"],
    "answer_en": "Thar Desert",
    "answer_hi": "थार रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "The 'First Indian woman to win the Padma Shri in Science' was:",
    "question_hi": "विज्ञान में पद्म श्री जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla", "None"],
    "options_hi": ["असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला", "कोई नहीं"],
    "answer_en": "Asima Chatterjee",
    "answer_hi": "असीमा चटर्जी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 23,
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
   "num": 24,
    "question_en": "The 'First Indian to win the Padma Bhushan in Science' was:",
    "question_hi": "विज्ञान में पद्म भूषण जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose"],
    "options_hi": ["सी.वी. रमन", "होमी भाभा", "विक्रम साराभाई", "सत्येंद्र नाथ बोस"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 25,
    "question_en": "Which of these is the largest desert in Asia?",
    "question_hi": "निम्नलिखित में से कौन सा एशिया का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Gobi Desert", "Thar Desert", "Arabian Desert", "Karakum Desert"],
    "options_hi": ["गोबी रेगिस्तान", "थार रेगिस्तान", "अरबी रेगिस्तान", "कराकुम रेगिस्तान"],
    "answer_en": "Gobi Desert",
    "answer_hi": "गोबी रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "The 'First Indian woman to win the Padma Bhushan in Science' was:",
    "question_hi": "विज्ञान में पद्म भूषण जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla", "None"],
    "options_hi": ["असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला", "कोई नहीं"],
    "answer_en": "Asima Chatterjee",
    "answer_hi": "असीमा चटर्जी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Which of these is NOT a type of acid?",
    "question_hi": "निम्नलिखित में से कौन सा अम्ल का प्रकार नहीं है?",
    "options_en": ["Strong acid", "Weak acid", "Concentrated acid", "Basic acid"],
    "options_hi": ["प्रबल अम्ल", "दुर्बल अम्ल", "सांद्र अम्ल", "मूल अम्ल"],
    "answer_en": "Basic acid",
    "answer_hi": "मूल अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 28,
    "question_en": "The 'First Indian to win the Padma Vibhushan in Science' was:",
    "question_hi": "विज्ञान में पद्म विभूषण जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose"],
    "options_hi": ["सी.वी. रमन", "होमी भाभा", "विक्रम साराभाई", "सत्येंद्र नाथ बोस"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 29,
    "question_en": "Which of these is the largest desert in Australia?",
    "question_hi": "निम्नलिखित में से कौन सा ऑस्ट्रेलिया का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Great Victoria Desert", "Great Sandy Desert", "Tanami Desert", "Simpson Desert"],
    "options_hi": ["ग्रेट विक्टोरिया रेगिस्तान", "ग्रेट सैंडी रेगिस्तान", "तनामी रेगिस्तान", "सिम्पसन रेगिस्तान"],
    "answer_en": "Great Victoria Desert",
    "answer_hi": "ग्रेट विक्टोरिया रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 30,
    "question_en": "The 'First Indian woman to win the Padma Vibhushan in Science' was:",
    "question_hi": "विज्ञान में पद्म विभूषण जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla", "None"],
    "options_hi": ["असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला", "कोई नहीं"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "Which of these is NOT a type of base?",
    "question_hi": "निम्नलिखित में से कौन सा क्षार का प्रकार नहीं है?",
    "options_en": ["Strong base", "Weak base", "Concentrated base", "Acidic base"],
    "options_hi": ["प्रबल क्षार", "दुर्बल क्षार", "सांद्र क्षार", "अम्लीय क्षार"],
    "answer_en": "Acidic base",
    "answer_hi": "अम्लीय क्षार",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
    "question_en": "The 'First Indian to win the Bharat Ratna in Science' was:",
    "question_hi": "विज्ञान में भारत रत्न जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose"],
    "options_hi": ["सी.वी. रमन", "होमी भाभा", "विक्रम साराभाई", "सत्येंद्र नाथ बोस"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 33,
    "question_en": "Which of these is the largest desert in South America?",
    "question_hi": "निम्नलिखित में से कौन सा दक्षिण अमेरिका का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Atacama Desert", "Patagonian Desert", "Monte Desert", "Sechura Desert"],
    "options_hi": ["अटाकामा रेगिस्तान", "पैटागोनियन रेगिस्तान", "मोंटे रेगिस्तान", "सेचुरा रेगिस्तान"],
    "answer_en": "Atacama Desert",
    "answer_hi": "अटाकामा रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 34,
    "question_en": "The 'First Indian woman to win the Bharat Ratna in Science' was:",
    "question_hi": "विज्ञान में भारत रत्न जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla"],
    "options_hi": ["कोई नहीं", "असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
  "num": 35,
    "question_en": "Which of these is NOT a type of salt?",
    "question_hi": "निम्नलिखित में से कौन सा लवण का प्रकार नहीं है?",
    "options_en": ["Normal salt", "Acid salt", "Basic salt", "Neutral salt"],
    "options_hi": ["सामान्य लवण", "अम्लीय लवण", "क्षारीय लवण", "तटस्थ लवण"],
    "answer_en": "Neutral salt",
    "answer_hi": "तटस्थ लवण",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "The 'First Indian to win the Nobel Prize in Science' was:",
    "question_hi": "विज्ञान में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "Homi Bhabha", "Vikram Sarabhai", "Satyendra Nath Bose"],
    "options_hi": ["सी.वी. रमन", "होमी भाभा", "विक्रम साराभाई", "सत्येंद्र नाथ बोस"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Which of these is the largest desert in North America?",
    "question_hi": "निम्नलिखित में से कौन सा उत्तरी अमेरिका का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Great Basin Desert", "Mojave Desert", "Sonoran Desert", "Chihuahuan Desert"],
    "options_hi": ["ग्रेट बेसिन रेगिस्तान", "मोजावे रेगिस्तान", "सोनोरन रेगिस्तान", "चिहुआहुआन रेगिस्तान"],
    "answer_en": "Great Basin Desert",
    "answer_hi": "ग्रेट बेसिन रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "The 'First Indian woman to win the Nobel Prize in Science' was:",
    "question_hi": "विज्ञान में नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla"],
    "options_hi": ["कोई नहीं", "असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 39,
    "question_en": "Which of these is NOT a type of indicator?",
    "question_hi": "निम्नलिखित में से कौन सा सूचक का प्रकार नहीं है?",
    "options_en": ["Natural indicator", "Synthetic indicator", "Universal indicator", "Chemical indicator"],
    "options_hi": ["प्राकृतिक सूचक", "संश्लेषित सूचक", "सार्वत्रिक सूचक", "रासायनिक सूचक"],
    "answer_en": "Chemical indicator",
    "answer_hi": "रासायनिक सूचक",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 40,
    "question_en": "The 'First Indian to win the Nobel Prize in Physics' was:",
    "question_hi": "भौतिकी में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["C.V. Raman", "S. Chandrasekhar", "Homi Bhabha", "Vikram Sarabhai"],
    "options_hi": ["सी.वी. रमन", "एस. चंद्रशेखर", "होमी भाभा", "विक्रम साराभाई"],
    "answer_en": "C.V. Raman",
    "answer_hi": "सी.वी. रमन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Which of these is the largest desert in Europe?",
    "question_hi": "निम्नलिखित में से कौन सा यूरोप का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Oleshky Sands", "Błędów Desert", "Deliblato Sands", "Tabernas Desert"],
    "options_hi": ["ओलेश्की रेत", "ब्लेंडोव रेगिस्तान", "डेलिब्लाटो रेत", "ताबेर्नास रेगिस्तान"],
    "answer_en": "Oleshky Sands",
    "answer_hi": "ओलेश्की रेत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "The 'First Indian woman to win the Nobel Prize in Physics' was:",
    "question_hi": "भौतिकी में नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla"],
    "options_hi": ["कोई नहीं", "असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "Which of these is NOT a type of chemical change?",
    "question_hi": "निम्नलिखित में से कौन सा रासायनिक परिवर्तन का प्रकार नहीं है?",
    "options_en": ["Combustion", "Oxidation", "Reduction", "Melting"],
    "options_hi": ["दहन", "ऑक्सीकरण", "अपचयन", "पिघलना"],
    "answer_en": "Melting",
    "answer_hi": "पिघलना",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "The 'First Indian to win the Nobel Prize in Chemistry' was:",
    "question_hi": "रसायन विज्ञान में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Venkatraman Ramakrishnan", "Har Gobind Khorana", "C.V. Raman", "None"],
    "options_hi": ["वेंकटरमण रामकृष्णन", "हर गोबिंद खुराना", "सी.वी. रमन", "कोई नहीं"],
    "answer_en": "Venkatraman Ramakrishnan",
    "answer_hi": "वेंकटरमण रामकृष्णन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "Which of these is the largest desert in Antarctica?",
    "question_hi": "निम्नलिखित में से कौन सा अंटार्कटिका का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Antarctic Desert", "McMurdo Dry Valleys", "South Pole", "None"],
    "options_hi": ["अंटार्कटिक रेगिस्तान", "मैकमुर्डो शुष्क घाटियाँ", "दक्षिण ध्रुव", "कोई नहीं"],
    "answer_en": "Antarctic Desert",
    "answer_hi": "अंटार्कटिक रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
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
   "num": 47,
    "question_en": "Which of these is NOT a type of physical change?",
    "question_hi": "निम्नलिखित में से कौन सा भौतिक परिवर्तन का प्रकार नहीं है?",
    "options_en": ["Melting", "Freezing", "Evaporation", "Combustion"],
    "options_hi": ["पिघलना", "जमना", "वाष्पीकरण", "दहन"],
    "answer_en": "Combustion",
    "answer_hi": "दहन",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 48,
    "question_en": "The 'First Indian to win the Nobel Prize in Medicine' was:",
    "question_hi": "चिकित्सा में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Har Gobind Khorana", "Venkatraman Ramakrishnan", "C.V. Raman", "None"],
    "options_hi": ["हर गोबिंद खुराना", "वेंकटरमण रामकृष्णन", "सी.वी. रमन", "कोई नहीं"],
    "answer_en": "Har Gobind Khorana",
    "answer_hi": "हर गोबिंद खुराना",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Which of these is the largest desert in the world by area?",
    "question_hi": "क्षेत्रफल के हिसाब से निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Antarctic Desert", "Sahara Desert", "Arabian Desert", "Gobi Desert"],
    "options_hi": ["अंटार्कटिक रेगिस्तान", "सहारा रेगिस्तान", "अरबी रेगिस्तान", "गोबी रेगिस्तान"],
    "answer_en": "Antarctic Desert",
    "answer_hi": "अंटार्कटिक रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 50,
    "question_en": "The 'First Indian woman to win the Nobel Prize in Medicine' was:",
    "question_hi": "चिकित्सा में नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Asima Chatterjee", "Janaki Ammal", "Kalpana Chawla"],
    "options_hi": ["कोई नहीं", "असीमा चटर्जी", "जानकी अम्मल", "कल्पना चावला"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
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