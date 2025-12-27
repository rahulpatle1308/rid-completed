const questions = [
   {
    num: 1,
    question_en: "What is the national bird of India?",
    question_hi: "भारत का राष्ट्रीय पक्षी कौन सा है?",
    options_en: ["Peacock", "Eagle", "Parrot", "Sparrow"],
    options_hi: ["मोर", "गरुड़", "तोता", "गौरैया"],
    answer_en: "Peacock",
    answer_hi: "मोर",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "What is the chemical symbol for water?",
    question_hi: "पानी का रासायनिक सूत्र क्या है?",
    options_en: ["H2O", "CO2", "NaCl", "O2"],
    options_hi: ["H2O", "CO2", "NaCl", "O2"],
    answer_en: "H2O",
    answer_hi: "H2O",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Who is known as the Father of the Indian Constitution?",
    question_hi: "भारतीय संविधान के जनक किसे कहा जाता है?",
    options_en: ["Mahatma Gandhi", "Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel"],
    options_hi: ["महात्मा गांधी", "डॉ. बी. आर. अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल"],
    answer_en: "Dr. B. R. Ambedkar",
    answer_hi: "डॉ. बी. आर. अंबेडकर",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "लाल ग्रह के नाम से कौन सा ग्रह जाना जाता है?",
    options_en: ["Earth", "Venus", "Mars", "Jupiter"],
    options_hi: ["पृथ्वी", "शुक्र", "मंगल", "बृहस्पति"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "How many states are there in India?",
    question_hi: "भारत में कितने राज्य हैं?",
    options_en: ["26", "27", "28", "29"],
    options_hi: ["26", "27", "28", "29"],
    answer_en: "28",
    answer_hi: "28",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which gas is essential for respiration?",
    question_hi: "श्वसन के लिए कौन सी गैस आवश्यक है?",
    options_en: ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
    options_hi: ["नाइट्रोजन", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के प्रथम राष्ट्रपति कौन थे?",
    options_en: ["Dr. Rajendra Prasad", "Dr. Radhakrishnan", "Jawaharlal Nehru", "Sardar Patel"],
    options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. राधाकृष्णन", "जवाहरलाल नेहरू", "सरदार पटेल"],
    answer_en: "Dr. Rajendra Prasad",
    answer_hi: "डॉ. राजेंद्र प्रसाद",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "What is the capital of Rajasthan?",
    question_hi: "राजस्थान की राजधानी क्या है?",
    options_en: ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"],
    options_hi: ["जोधपुर", "जयपुर", "उदयपुर", "बीकानेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which organ purifies blood in the human body?",
    question_hi: "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?",
    options_en: ["Heart", "Liver", "Kidney", "Lungs"],
    options_hi: ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
    answer_en: "Kidney",
    answer_hi: "गुर्दा",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which is the largest continent in the world?",
    question_hi: "विश्व का सबसे बड़ा महाद्वीप कौन सा है?",
    options_en: ["Africa", "Europe", "Asia", "Australia"],
    options_hi: ["अफ्रीका", "यूरोप", "एशिया", "ऑस्ट्रेलिया"],
    answer_en: "Asia",
    answer_hi: "एशिया",
    attempted: false,
    selected: ""
  },
    {
    num: 11,
    question_en: "Which river is the longest in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"],
    options_hi: ["यमुना", "गंगा", "गोदावरी", "ब्रह्मपुत्र"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "What is the capital of India?",
    question_hi: "भारत की राजधानी क्या है?",
    options_en: ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
    options_hi: ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
    answer_en: "New Delhi",
    answer_hi: "नई दिल्ली",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which vitamin is produced in the human body by sunlight?",
    question_hi: "सूर्य के प्रकाश से शरीर में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Who wrote the national anthem of India?",
    question_hi: "भारत का राष्ट्रगान किसने लिखा?",
    options_en: ["Bankim Chandra", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Chandra Bose"],
    options_hi: ["बंकिम चंद्र", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "सुभाष चंद्र बोस"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कमरे के तापमान पर कौन सी धातु तरल होती है?",
    options_en: ["Iron", "Mercury", "Copper", "Aluminium"],
    options_hi: ["लोहा", "पारा", "तांबा", "एल्युमिनियम"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "How many bones are there in an adult human body?",
    question_hi: "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
    options_en: ["204", "205", "206", "207"],
    options_hi: ["204", "205", "206", "207"],
    answer_en: "206",
    answer_hi: "206",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which country is known as the Land of the Rising Sun?",
    question_hi: "उगते सूर्य की भूमि किस देश को कहा जाता है?",
    options_en: ["China", "Japan", "Korea", "Thailand"],
    options_hi: ["चीन", "जापान", "कोरिया", "थाईलैंड"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "What is the full form of CPU?",
    question_hi: "CPU का पूरा नाम क्या है?",
    options_en: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"],
    options_hi: ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंट्रोल प्रोसेसिंग यूनिट"],
    answer_en: "Central Processing Unit",
    answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Who was the first Prime Minister of India?",
    question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
    options_en: ["Sardar Patel", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Rajendra Prasad"],
    options_hi: ["सरदार पटेल", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "राजेंद्र प्रसाद"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which is the largest ocean in the world?",
    question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    options_hi: ["हिंद महासागर", "अटलांटिक महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which gas is responsible for global warming?",
    question_hi: "ग्लोबल वार्मिंग के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "What is the national flower of India?",
    question_hi: "भारत का राष्ट्रीय फूल कौन सा है?",
    options_en: ["Rose", "Lotus", "Sunflower", "Lily"],
    options_hi: ["गुलाब", "कमल", "सूरजमुखी", "लिली"],
    answer_en: "Lotus",
    answer_hi: "कमल",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which instrument is used to measure temperature?",
    question_hi: "तापमान मापने के लिए किस यंत्र का प्रयोग होता है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which is the smallest prime number?",
    question_hi: "सबसे छोटी अभाज्य संख्या कौन सी है?",
    options_en: ["1", "2", "3", "5"],
    options_hi: ["1", "2", "3", "5"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which Mughal emperor built the Taj Mahal?",
    question_hi: "ताजमहल का निर्माण किस मुगल शासक ने करवाया?",
    options_en: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    options_hi: ["अकबर", "जहांगीर", "शाहजहाँ", "औरंगज़ेब"],
    answer_en: "Shah Jahan",
    answer_hi: "शाहजहाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Which blood group is known as the universal donor?",
    question_hi: "सार्वत्रिक दाता किस रक्त समूह को कहा जाता है?",
    options_en: ["A", "B", "AB", "O"],
    options_hi: ["A", "B", "AB", "O"],
    answer_en: "O",
    answer_hi: "O",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which state is known as the Land of Five Rivers?",
    question_hi: "पांच नदियों की भूमि किस राज्य को कहा जाता है?",
    options_en: ["Haryana", "Punjab", "Uttar Pradesh", "Bihar"],
    options_hi: ["हरियाणा", "पंजाब", "उत्तर प्रदेश", "बिहार"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "What is the SI unit of force?",
    question_hi: "बल की SI इकाई क्या है?",
    options_en: ["Joule", "Newton", "Pascal", "Watt"],
    options_hi: ["जूल", "न्यूटन", "पास्कल", "वाट"],
    answer_en: "Newton",
    answer_hi: "न्यूटन",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which festival is known as the festival of lights?",
    question_hi: "रोशनी का त्योहार किसे कहा जाता है?",
    options_en: ["Holi", "Diwali", "Eid", "Christmas"],
    options_hi: ["होली", "दीवाली", "ईद", "क्रिसमस"],
    answer_en: "Diwali",
    answer_hi: "दीवाली",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which is the hardest natural substance?",
    question_hi: "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    options_en: ["Gold", "Iron", "Diamond", "Silver"],
    options_hi: ["सोना", "लोहा", "हीरा", "चांदी"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which organ controls the human nervous system?",
    question_hi: "मानव तंत्रिका तंत्र को कौन सा अंग नियंत्रित करता है?",
    options_en: ["Heart", "Brain", "Lungs", "Kidney"],
    options_hi: ["हृदय", "मस्तिष्क", "फेफड़े", "गुर्दा"],
    answer_en: "Brain",
    answer_hi: "मस्तिष्क",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "What is the national animal of India?",
    question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
    options_en: ["Lion", "Elephant", "Tiger", "Leopard"],
    options_hi: ["शेर", "हाथी", "बाघ", "तेंदुआ"],
    answer_en: "Tiger",
    answer_hi: "बाघ",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which planet is the largest in the solar system?",
    question_hi: "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    options_en: ["Earth", "Mars", "Jupiter", "Saturn"],
    options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"],
    answer_en: "Jupiter",
    answer_hi: "बृहस्पति",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Thomas Edison", "Alexander Graham Bell", "Newton", "Einstein"],
    options_hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "न्यूटन", "आइंस्टीन"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्जेंडर ग्राहम बेल",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which day is celebrated as Independence Day in India?",
    question_hi: "भारत में स्वतंत्रता दिवस कब मनाया जाता है?",
    options_en: ["26 January", "15 August", "2 October", "14 November"],
    options_hi: ["26 जनवरी", "15 अगस्त", "2 अक्टूबर", "14 नवंबर"],
    answer_en: "15 August",
    answer_hi: "15 अगस्त",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which device is used to measure blood pressure?",
    question_hi: "रक्तचाप मापने के लिए किस यंत्र का उपयोग होता है?",
    options_en: ["Thermometer", "Barometer", "Sphygmomanometer", "Hygrometer"],
    options_hi: ["थर्मामीटर", "बैरोमीटर", "स्फिग्मोमैनोमीटर", "हाइग्रोमीटर"],
    answer_en: "Sphygmomanometer",
    answer_hi: "स्फिग्मोमैनोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which is the largest desert in the world?",
    question_hi: "विश्व का सबसे बड़ा मरुस्थल कौन सा है?",
    options_en: ["Thar", "Sahara", "Gobi", "Kalahari"],
    options_hi: ["थार", "सहारा", "गोबी", "कालाहारी"],
    answer_en: "Sahara",
    answer_hi: "सहारा",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which metal is used to make electric wires?",
    question_hi: "बिजली के तार बनाने में किस धातु का प्रयोग होता है?",
    options_en: ["Iron", "Copper", "Gold", "Silver"],
    options_hi: ["लोहा", "तांबा", "सोना", "चांदी"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which Indian city is called the Pink City?",
    question_hi: "किस भारतीय शहर को गुलाबी नगर कहा जाता है?",
    options_en: ["Udaipur", "Jaipur", "Jodhpur", "Bikaner"],
    options_hi: ["उदयपुर", "जयपुर", "जोधपुर", "बीकानेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "What is the freezing point of water?",
    question_hi: "पानी का हिमांक बिंदु कितना होता है?",
    options_en: ["0°C", "10°C", "50°C", "100°C"],
    options_hi: ["0°C", "10°C", "50°C", "100°C"],
    answer_en: "0°C",
    answer_hi: "0°C",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "अग्निशामक यंत्रों में किस गैस का उपयोग होता है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which is the smallest continent?",
    question_hi: "सबसे छोटा महाद्वीप कौन सा है?",
    options_en: ["Europe", "Australia", "Antarctica", "South America"],
    options_hi: ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"],
    answer_en: "Australia",
    answer_hi: "ऑस्ट्रेलिया",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Who is known as the Iron Man of India?",
    question_hi: "भारत का लौह पुरुष किसे कहा जाता है?",
    options_en: ["Subhash Chandra Bose", "Bhagat Singh", "Sardar Patel", "Jawaharlal Nehru"],
    options_hi: ["सुभाष चंद्र बोस", "भगत सिंह", "सरदार पटेल", "जवाहरलाल नेहरू"],
    answer_en: "Sardar Patel",
    answer_hi: "सरदार पटेल",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which instrument is used to measure earthquakes?",
    question_hi: "भूकंप मापने के लिए किस यंत्र का प्रयोग होता है?",
    options_en: ["Barometer", "Seismograph", "Thermometer", "Altimeter"],
    options_hi: ["बैरोमीटर", "सीस्मोग्राफ", "थर्मामीटर", "अल्टीमीटर"],
    answer_en: "Seismograph",
    answer_hi: "सीस्मोग्राफ",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which state has the longest coastline in India?",
    question_hi: "भारत में सबसे लंबा समुद्री तट किस राज्य का है?",
    options_en: ["Maharashtra", "Tamil Nadu", "Gujarat", "Andhra Pradesh"],
    options_hi: ["महाराष्ट्र", "तमिलनाडु", "गुजरात", "आंध्र प्रदेश"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "What is the national tree of India?",
    question_hi: "भारत का राष्ट्रीय वृक्ष कौन सा है?",
    options_en: ["Neem", "Peepal", "Banyan", "Mango"],
    options_hi: ["नीम", "पीपल", "बरगद", "आम"],
    answer_en: "Banyan",
    answer_hi: "बरगद",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which vitamin helps in blood clotting?",
    question_hi: "रक्त के थक्के जमाने में कौन सा विटामिन सहायक है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which Indian state is famous for tea gardens?",
    question_hi: "चाय के बागानों के लिए कौन सा राज्य प्रसिद्ध है?",
    options_en: ["Kerala", "Assam", "Punjab", "Rajasthan"],
    options_hi: ["केरल", "असम", "पंजाब", "राजस्थान"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "What is the currency of Japan?",
    question_hi: "जापान की मुद्रा क्या है?",
    options_en: ["Dollar", "Yen", "Won", "Peso"],
    options_hi: ["डॉलर", "येन", "वॉन", "पेसो"],
    answer_en: "Yen",
    answer_hi: "येन",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which part of the plant prepares food?",
    question_hi: "पौधे का कौन सा भाग भोजन बनाता है?",
    options_en: ["Root", "Stem", "Leaf", "Flower"],
    options_hi: ["जड़", "तना", "पत्ता", "फूल"],
    answer_en: "Leaf",
    answer_hi: "पत्ता",
    attempted: false,
    selected: ""
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