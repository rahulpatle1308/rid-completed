const questions = [
   {
    num: 1,
    question_en: "Which blood group is known as universal donor?",
    question_hi: "कौन सा रक्त समूह सार्वभौमिक दाता कहलाता है?",
    options_en: ["A", "B", "AB", "O"],
    options_hi: ["A", "B", "AB", "O"],
    answer_en: "O",
    answer_hi: "O",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which organ purifies blood in human body?",
    question_hi: "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?",
    options_en: ["Heart", "Liver", "Kidney", "Lungs"],
    options_hi: ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
    answer_en: "Kidney",
    answer_hi: "गुर्दा",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Who is the head of the State in India?",
    question_hi: "भारत में राज्य का प्रमुख कौन होता है?",
    options_en: ["Prime Minister", "Chief Justice", "President", "Vice President"],
    options_hi: ["प्रधानमंत्री", "मुख्य न्यायाधीश", "राष्ट्रपति", "उपराष्ट्रपति"],
    answer_en: "President",
    answer_hi: "राष्ट्रपति",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which gas is filled in electric bulbs?",
    question_hi: "बिजली के बल्ब में कौन सी गैस भरी जाती है?",
    options_en: ["Nitrogen", "Oxygen", "Hydrogen", "Carbon dioxide"],
    options_hi: ["नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
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
    num: 6,
    question_en: "Which part of plant prepares food?",
    question_hi: "पौधे का कौन सा भाग भोजन बनाता है?",
    options_en: ["Root", "Stem", "Leaf", "Flower"],
    options_hi: ["जड़", "तना", "पत्ता", "फूल"],
    answer_en: "Leaf",
    answer_hi: "पत्ता",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
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
    num: 8,
    question_en: "Which vitamin is essential for blood clotting?",
    question_hi: "रक्त का थक्का जमाने के लिए कौन सा विटामिन आवश्यक है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन K", "विटामिन D"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which river is the longest in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Yamuna", "Godavari", "Ganga", "Brahmaputra"],
    options_hi: ["यमुना", "गोदावरी", "गंगा", "ब्रह्मपुत्र"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कमरे के तापमान पर द्रव रहने वाली धातु कौन सी है?",
    options_en: ["Iron", "Mercury", "Copper", "Silver"],
    options_hi: ["लोहा", "पारा", "तांबा", "चांदी"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },
    {
    num: 11,
    question_en: "Which gas is essential for respiration?",
    question_hi: "श्वसन के लिए कौन सी गैस आवश्यक है?",
    options_en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Which country gifted the Statue of Liberty to USA?",
    question_hi: "स्टैच्यू ऑफ लिबर्टी अमेरिका को किस देश ने भेंट की?",
    options_en: ["France", "Britain", "Germany", "Canada"],
    options_hi: ["फ्रांस", "ब्रिटेन", "जर्मनी", "कनाडा"],
    answer_en: "France",
    answer_hi: "फ्रांस",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Who is known as the Father of Indian Constitution?",
    question_hi: "भारतीय संविधान के जनक किसे कहा जाता है?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Rajendra Prasad"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी. आर. अंबेडकर", "राजेंद्र प्रसाद"],
    answer_en: "B. R. Ambedkar",
    answer_hi: "बी. आर. अंबेडकर",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
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
    num: 15,
    question_en: "Which vitamin is also known as ascorbic acid?",
    question_hi: "एस्कॉर्बिक अम्ल किस विटामिन को कहा जाता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin C",
    answer_hi: "विटामिन C",
    attempted: false,
    selected: ""
  },
  {
    num: 16,
    question_en: "Which Indian state has the longest coastline?",
    question_hi: "भारत में सबसे लंबा समुद्र तट किस राज्य का है?",
    options_en: ["Tamil Nadu", "Kerala", "Andhra Pradesh", "Gujarat"],
    options_hi: ["तमिलनाडु", "केरल", "आंध्र प्रदेश", "गुजरात"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which metal is known as quicksilver?",
    question_hi: "क्विकसिल्वर किस धातु को कहा जाता है?",
    options_en: ["Silver", "Mercury", "Aluminium", "Lead"],
    options_hi: ["चांदी", "पारा", "एल्युमिनियम", "सीसा"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Who wrote the Indian National Anthem?",
    question_hi: "भारतीय राष्ट्रगान किसने लिखा?",
    options_en: ["Bankim Chandra", "Rabindranath Tagore", "Sarojini Naidu", "Subhash Bose"],
    options_hi: ["बंकिम चंद्र", "रवींद्रनाथ टैगोर", "सरोजिनी नायडू", "सुभाष बोस"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "लाल ग्रह किसे कहा जाता है?",
    options_en: ["Venus", "Mars", "Jupiter", "Saturn"],
    options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which organ controls the human body?",
    question_hi: "मानव शरीर को नियंत्रित करने वाला अंग कौन सा है?",
    options_en: ["Heart", "Brain", "Liver", "Kidney"],
    options_hi: ["हृदय", "मस्तिष्क", "यकृत", "गुर्दा"],
    answer_en: "Brain",
    answer_hi: "मस्तिष्क",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which river is called the Sorrow of Bihar?",
    question_hi: "बिहार का शोक किस नदी को कहा जाता है?",
    options_en: ["Ganga", "Kosi", "Son", "Gandak"],
    options_hi: ["गंगा", "कोसी", "सोन", "गंडक"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "अग्निशामक यंत्रों में कौन सी गैस प्रयोग होती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
    options_en: ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "Nehru"],
    options_hi: ["राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "नेहरू"],
    answer_en: "Rajendra Prasad",
    answer_hi: "राजेंद्र प्रसाद",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which device is used to measure temperature?",
    question_hi: "तापमान मापने का यंत्र कौन सा है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    answer_en: "Thermometer",
    answer_hi: "थर्मामीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which Indian city is called Pink City?",
    question_hi: "गुलाबी नगरी किस शहर को कहा जाता है?",
    options_en: ["Udaipur", "Jodhpur", "Jaipur", "Ajmer"],
    options_hi: ["उदयपुर", "जोधपुर", "जयपुर", "अजमेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which metal is the lightest?",
    question_hi: "सबसे हल्की धातु कौन सी है?",
    options_en: ["Iron", "Lithium", "Copper", "Aluminium"],
    options_hi: ["लोहा", "लिथियम", "तांबा", "एल्युमिनियम"],
    answer_en: "Lithium",
    answer_hi: "लिथियम",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Who founded the Mughal Empire in India?",
    question_hi: "भारत में मुगल साम्राज्य की स्थापना किसने की?",
    options_en: ["Akbar", "Babur", "Humayun", "Shah Jahan"],
    options_hi: ["अकबर", "बाबर", "हुमायूं", "शाहजहां"],
    answer_en: "Babur",
    answer_hi: "बाबर",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which planet has rings around it?",
    question_hi: "किस ग्रह के चारों ओर वलय (रिंग्स) होते हैं?",
    options_en: ["Mars", "Venus", "Saturn", "Mercury"],
    options_hi: ["मंगल", "शुक्र", "शनि", "बुध"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which amendment added Fundamental Duties?",
    question_hi: "मौलिक कर्तव्यों को किस संशोधन द्वारा जोड़ा गया?",
    options_en: ["42nd", "44th", "52nd", "61st"],
    options_hi: ["42वां", "44वां", "52वां", "61वां"],
    answer_en: "42nd",
    answer_hi: "42वां",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which Indian state is the largest by area?",
    question_hi: "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Uttar Pradesh"],
    options_hi: ["मध्य प्रदेश", "राजस्थान", "महाराष्ट्र", "उत्तर प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which gas is released during photosynthesis?",
    question_hi: "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
    options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Who was known as Netaji?",
    question_hi: "नेताजी किसे कहा जाता था?",
    options_en: ["Bhagat Singh", "Subhash Chandra Bose", "Gandhi", "Patel"],
    options_hi: ["भगत सिंह", "सुभाष चंद्र बोस", "गांधी", "पटेल"],
    answer_en: "Subhash Chandra Bose",
    answer_hi: "सुभाष चंद्र बोस",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which Indian festival is called the Festival of Lights?",
    question_hi: "प्रकाश पर्व किस त्यौहार को कहा जाता है?",
    options_en: ["Holi", "Diwali", "Eid", "Baisakhi"],
    options_hi: ["होली", "दीवाली", "ईद", "बैसाखी"],
    answer_en: "Diwali",
    answer_hi: "दीवाली",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which instrument measures wind speed?",
    question_hi: "पवन की गति मापने का यंत्र कौन सा है?",
    options_en: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
    options_hi: ["बैरोमीटर", "थर्मामीटर", "एनीमोमीटर", "हाइग्रोमीटर"],
    answer_en: "Anemometer",
    answer_hi: "एनीमोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which state is known as the Sugar Bowl of India?",
    question_hi: "भारत का चीनी कटोरा किस राज्य को कहा जाता है?",
    options_en: ["Uttar Pradesh", "Maharashtra", "Bihar", "Punjab"],
    options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पंजाब"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which element is essential for making steel?",
    question_hi: "इस्पात बनाने के लिए कौन सा तत्व आवश्यक है?",
    options_en: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["कार्बन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon",
    answer_hi: "कार्बन",
    attempted: false,
    selected: ""
  },
    {
    num: 37,
    question_en: "Who built the Taj Mahal?",
    question_hi: "ताजमहल का निर्माण किसने करवाया?",
    options_en: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
    options_hi: ["अकबर", "शाहजहाँ", "औरंगजेब", "बाबर"],
    answer_en: "Shah Jahan",
    answer_hi: "शाहजहाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which planet is nearest to the Sun?",
    question_hi: "सूर्य के सबसे नज़दीक कौन सा ग्रह है?",
    options_en: ["Mercury", "Venus", "Earth", "Mars"],
    options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which gas is used in neon sign boards?",
    question_hi: "नियोन साइन् बोर्ड में कौन सी गैस प्रयोग होती है?",
    options_en: ["Neon", "Helium", "Nitrogen", "Oxygen"],
    options_hi: ["नियोन", "हीलियम", "नाइट्रोजन", "ऑक्सीजन"],
    answer_en: "Neon",
    answer_hi: "नियोन",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which organ produces insulin?",
    question_hi: "इंसुलिन किस अंग से बनता है?",
    options_en: ["Liver", "Pancreas", "Kidney", "Heart"],
    options_hi: ["यकृत", "अग्न्याशय", "गुर्दा", "हृदय"],
    answer_en: "Pancreas",
    answer_hi: "अग्न्याशय",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which Indian city is called Silicon Valley of India?",
    question_hi: "भारत का सिलिकॉन वैली किस शहर को कहा जाता है?",
    options_en: ["Delhi", "Bengaluru", "Hyderabad", "Pune"],
    options_hi: ["दिल्ली", "बेंगलुरु", "हैदराबाद", "पुणे"],
    answer_en: "Bengaluru",
    answer_hi: "बेंगलुरु",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which river flows through the Grand Canyon?",
    question_hi: "ग्रैंड कैन्यन के माध्यम से कौन सी नदी बहती है?",
    options_en: ["Mississippi", "Colorado", "Amazon", "Nile"],
    options_hi: ["मिसिसिपी", "कोलोराडो", "अमेज़न", "नाइल"],
    answer_en: "Colorado",
    answer_hi: "कोलोराडो",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which vitamin is synthesized in human skin by sunlight?",
    question_hi: "मानव त्वचा में कौन सा विटामिन सूर्य की रोशनी से बनता है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन E"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Who is known as the Missile Man of India?",
    question_hi: "भारत का मिसाइल मैन किसे कहा जाता है?",
    options_en: ["Homi Bhabha", "Vikram Sarabhai", "A. P. J. Abdul Kalam", "Rakesh Sharma"],
    options_hi: ["होमी भाभा", "विक्रम साराभाई", "ए. पी. जे. अब्दुल कलाम", "राकेश शर्मा"],
    answer_en: "A. P. J. Abdul Kalam",
    answer_hi: "ए. पी. जे. अब्दुल कलाम",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which is the largest gland in human body?",
    question_hi: "मानव शरीर में सबसे बड़ा ग्रंथि कौन सा है?",
    options_en: ["Pancreas", "Liver", "Thyroid", "Pituitary"],
    options_hi: ["अग्न्याशय", "यकृत", "थायरॉइड", "पिट्यूटरी"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Which state is called the Land of Five Rivers?",
    question_hi: "पांच नदियों की भूमि किस राज्य को कहा जाता है?",
    options_en: ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which is the smallest bone in human body?",
    question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
    options_en: ["Femur", "Stapes", "Tibia", "Ulna"],
    options_hi: ["जांघ की हड्डी", "स्ट्रेप्स", "टिबिया", "अल्ना"],
    answer_en: "Stapes",
    answer_hi: "स्ट्रेप्स",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which is the national aquatic animal of India?",
    question_hi: "भारत का राष्ट्रीय जलीय पशु कौन सा है?",
    options_en: ["Dolphin", "Crocodile", "Turtle", "Shark"],
    options_hi: ["डॉल्फिन", "मगरमच्छ", "कछुआ", "शार्क"],
    answer_en: "Dolphin",
    answer_hi: "डॉल्फिन",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which instrument measures atmospheric pressure?",
    question_hi: "वायुमंडलीय दबाव मापने का यंत्र कौन सा है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    answer_en: "Barometer",
    answer_hi: "बैरोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which Indian state is called the Spice Garden of India?",
    question_hi: "भारत का मसाले का बगीचा किस राज्य को कहा जाता है?",
    options_en: ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    options_hi: ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
    answer_en: "Kerala",
    answer_hi: "केरल",
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