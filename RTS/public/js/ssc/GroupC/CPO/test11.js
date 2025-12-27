const questions = [
   {
    num: 1,
    question_en: "Which element is essential for respiration?",
    question_hi: "श्वसन के लिए कौन सा तत्व आवश्यक है?",
    options_en: ["Nitrogen", "Oxygen", "Hydrogen", "Carbon"],
    options_hi: ["नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "कार्बन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Who was the first President of India?",
    question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
    options_en: ["Dr. Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "Jawaharlal Nehru"],
    options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. राधाकृष्णन", "जाकिर हुसैन", "जवाहरलाल नेहरू"],
    answer_en: "Dr. Rajendra Prasad",
    answer_hi: "डॉ. राजेंद्र प्रसाद",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which river is the longest in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
    options_hi: ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is the SI unit of force?",
    question_hi: "बल की SI इकाई क्या है?",
    options_en: ["Joule", "Newton", "Watt", "Pascal"],
    options_hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
    answer_en: "Newton",
    answer_hi: "न्यूटन",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which Indian state shares border with Pakistan?",
    question_hi: "कौन सा भारतीय राज्य पाकिस्तान से सीमा साझा करता है?",
    options_en: ["Punjab", "Haryana", "Rajasthan", "Both Punjab and Rajasthan"],
    options_hi: ["पंजाब", "हरियाणा", "राजस्थान", "पंजाब और राजस्थान दोनों"],
    answer_en: "Both Punjab and Rajasthan",
    answer_hi: "पंजाब और राजस्थान दोनों",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which gas is filled in electric bulbs?",
    question_hi: "बिजली के बल्ब में कौन सी गैस भरी जाती है?",
    options_en: ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हाइड्रोजन"],
    answer_en: "Argon",
    answer_hi: "आर्गन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Who is known as the Father of the Indian Constitution?",
    question_hi: "भारतीय संविधान के जनक किसे कहा जाता है?",
    options_en: ["Jawaharlal Nehru", "B. R. Ambedkar", "Mahatma Gandhi", "Rajendra Prasad"],
    options_hi: ["जवाहरलाल नेहरू", "बी. आर. अंबेडकर", "महात्मा गांधी", "राजेंद्र प्रसाद"],
    answer_en: "B. R. Ambedkar",
    answer_hi: "बी. आर. अंबेडकर",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
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
    num: 9,
    question_en: "Which city is known as the Silicon Valley of India?",
    question_hi: "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?",
    options_en: ["Hyderabad", "Pune", "Bengaluru", "Chennai"],
    options_hi: ["हैदराबाद", "पुणे", "बेंगलुरु", "चेन्नई"],
    answer_en: "Bengaluru",
    answer_hi: "बेंगलुरु",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which vitamin helps in blood clotting?",
    question_hi: "रक्त का थक्का जमाने में कौन सा विटामिन सहायक है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which planet is known as the Red Planet?",
    question_hi: "लाल ग्रह के नाम से कौन सा ग्रह जाना जाता है?",
    options_en: ["Mars", "Venus", "Jupiter", "Mercury"],
    options_hi: ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
    answer_en: "Mars",
    answer_hi: "मंगल",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Who wrote the National Anthem of India?",
    question_hi: "भारत का राष्ट्रगान किसने लिखा?",
    options_en: ["Bankim Chandra", "Rabindranath Tagore", "Subhash Bose", "Sarojini Naidu"],
    options_hi: ["बंकिम चंद्र", "रवींद्रनाथ टैगोर", "सुभाष बोस", "सरोजिनी नायडू"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कमरे के तापमान पर कौन सी धातु द्रव होती है?",
    options_en: ["Iron", "Mercury", "Lead", "Zinc"],
    options_hi: ["लोहा", "पारा", "सीसा", "जस्ता"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which Indian state has the longest coastline?",
    question_hi: "भारत में सबसे लंबा समुद्र तट किस राज्य का है?",
    options_en: ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    options_hi: ["तमिलनाडु", "आंध्र प्रदेश", "गुजरात", "महाराष्ट्र"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the currency of Japan?",
    question_hi: "जापान की मुद्रा क्या है?",
    options_en: ["Dollar", "Won", "Yen", "Peso"],
    options_hi: ["डॉलर", "वॉन", "येन", "पेसो"],
    answer_en: "Yen",
    answer_hi: "येन",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which day is celebrated as World Environment Day?",
    question_hi: "विश्व पर्यावरण दिवस कब मनाया जाता है?",
    options_en: ["5 June", "22 April", "1 May", "16 October"],
    options_hi: ["5 जून", "22 अप्रैल", "1 मई", "16 अक्टूबर"],
    answer_en: "5 June",
    answer_hi: "5 जून",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which organ controls the human nervous system?",
    question_hi: "मानव तंत्रिका तंत्र को कौन सा अंग नियंत्रित करता है?",
    options_en: ["Heart", "Brain", "Spinal Cord", "Lungs"],
    options_hi: ["हृदय", "मस्तिष्क", "मेरुरज्जु", "फेफड़े"],
    answer_en: "Brain",
    answer_hi: "मस्तिष्क",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which is the smallest state of India by area?",
    question_hi: "क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन सा है?",
    options_en: ["Goa", "Sikkim", "Tripura", "Manipur"],
    options_hi: ["गोवा", "सिक्किम", "त्रिपुरा", "मणिपुर"],
    answer_en: "Goa",
    answer_hi: "गोवा",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "अग्निशामक यंत्र में कौन सी गैस प्रयोग होती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Who founded the Maurya Empire?",
    question_hi: "मौर्य साम्राज्य की स्थापना किसने की?",
    options_en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
    options_hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "बिंबिसार"],
    answer_en: "Chandragupta Maurya",
    answer_hi: "चंद्रगुप्त मौर्य",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which blood group is universal donor?",
    question_hi: "सार्वभौमिक दाता कौन सा रक्त समूह है?",
    options_en: ["A", "B", "AB", "O"],
    options_hi: ["A", "B", "AB", "O"],
    answer_en: "O",
    answer_hi: "O",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which Indian freedom fighter is known as Netaji?",
    question_hi: "नेताजी के नाम से किस स्वतंत्रता सेनानी को जाना जाता है?",
    options_en: ["Bhagat Singh", "Subhash Chandra Bose", "Lala Lajpat Rai", "Bal Gangadhar Tilak"],
    options_hi: ["भगत सिंह", "सुभाष चंद्र बोस", "लाला लाजपत राय", "बाल गंगाधर तिलक"],
    answer_en: "Subhash Chandra Bose",
    answer_hi: "सुभाष चंद्र बोस",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which part of the plant prepares food?",
    question_hi: "पौधे का कौन सा भाग भोजन बनाता है?",
    options_en: ["Root", "Stem", "Leaf", "Flower"],
    options_hi: ["जड़", "तना", "पत्ता", "फूल"],
    answer_en: "Leaf",
    answer_hi: "पत्ता",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which ocean is the largest in the world?",
    question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Atlantic", "Indian", "Pacific", "Arctic"],
    options_hi: ["अटलांटिक", "हिंद", "प्रशांत", "आर्कटिक"],
    answer_en: "Pacific",
    answer_hi: "प्रशांत",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Who was the first Prime Minister of India?",
    question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
    options_en: ["Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel", "Lal Bahadur Shastri"],
    options_hi: ["जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "सरदार पटेल", "लाल बहादुर शास्त्री"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
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
    num: 27,
    question_en: "Which Indian state is famous for backwaters?",
    question_hi: "बैकवॉटर के लिए प्रसिद्ध भारतीय राज्य कौन सा है?",
    options_en: ["Kerala", "Goa", "Assam", "Odisha"],
    options_hi: ["केरल", "गोवा", "असम", "ओडिशा"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which gas is essential for photosynthesis?",
    question_hi: "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Thomas Edison", "Alexander Graham Bell", "Newton", "Marconi"],
    options_hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "न्यूटन", "मार्कोनी"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्जेंडर ग्राहम बेल",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which river is known as the Sorrow of Bihar?",
    question_hi: "बिहार का शोक किस नदी को कहा जाता है?",
    options_en: ["Ganga", "Kosi", "Son", "Gandak"],
    options_hi: ["गंगा", "कोसी", "सोन", "गंडक"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which Indian city is called the Pink City?",
    question_hi: "पिंक सिटी किस भारतीय शहर को कहा जाता है?",
    options_en: ["Udaipur", "Jaipur", "Jodhpur", "Bikaner"],
    options_hi: ["उदयपुर", "जयपुर", "जोधपुर", "बीकानेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which metal is used to galvanize iron?",
    question_hi: "लोहे को जंग से बचाने के लिए किस धातु की परत चढ़ाई जाती है?",
    options_en: ["Copper", "Zinc", "Tin", "Aluminium"],
    options_hi: ["तांबा", "जस्ता", "टिन", "एल्युमिनियम"],
    answer_en: "Zinc",
    answer_hi: "जस्ता",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which movement was started in 1942?",
    question_hi: "1942 में कौन सा आंदोलन शुरू हुआ?",
    options_en: ["Non-Cooperation", "Quit India", "Civil Disobedience", "Swadeshi"],
    options_hi: ["असहयोग", "भारत छोड़ो", "सविनय अवज्ञा", "स्वदेशी"],
    answer_en: "Quit India",
    answer_hi: "भारत छोड़ो",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which organ helps in breathing?",
    question_hi: "श्वसन में कौन सा अंग सहायक है?",
    options_en: ["Heart", "Lungs", "Kidney", "Liver"],
    options_hi: ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
    answer_en: "Lungs",
    answer_hi: "फेफड़े",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which Indian state is known as the Land of Five Rivers?",
    question_hi: "पांच नदियों की भूमि किस राज्य को कहा जाता है?",
    options_en: ["Punjab", "Haryana", "Uttar Pradesh", "Bihar"],
    options_hi: ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "बिहार"],
    answer_en: "Punjab",
    answer_hi: "पंजाब",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "What is the boiling point of water?",
    question_hi: "पानी का क्वथनांक कितना होता है?",
    options_en: ["90°C", "100°C", "80°C", "120°C"],
    options_hi: ["90°C", "100°C", "80°C", "120°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which Indian festival is known as the Festival of Lights?",
    question_hi: "प्रकाश का त्योहार किसे कहा जाता है?",
    options_en: ["Holi", "Diwali", "Eid", "Christmas"],
    options_hi: ["होली", "दीपावली", "ईद", "क्रिसमस"],
    answer_en: "Diwali",
    answer_hi: "दीपावली",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which country is known as the Land of Rising Sun?",
    question_hi: "उगते सूर्य की भूमि किस देश को कहा जाता है?",
    options_en: ["China", "Japan", "Korea", "Thailand"],
    options_hi: ["चीन", "जापान", "कोरिया", "थाईलैंड"],
    answer_en: "Japan",
    answer_hi: "जापान",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which Indian state has the highest literacy rate?",
    question_hi: "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
    options_en: ["Kerala", "Tamil Nadu", "Goa", "Mizoram"],
    options_hi: ["केरल", "तमिलनाडु", "गोवा", "मिजोरम"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Who invented the electric bulb?",
    question_hi: "बिजली के बल्ब का आविष्कार किसने किया?",
    options_en: ["Newton", "Edison", "Bell", "Faraday"],
    options_hi: ["न्यूटन", "एडिसन", "बेल", "फैराडे"],
    answer_en: "Edison",
    answer_hi: "एडिसन",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which Indian river flows through Delhi?",
    question_hi: "दिल्ली से होकर कौन सी नदी बहती है?",
    options_en: ["Ganga", "Yamuna", "Sutlej", "Ghaggar"],
    options_hi: ["गंगा", "यमुना", "सतलुज", "घग्गर"],
    answer_en: "Yamuna",
    answer_hi: "यमुना",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which vitamin is also known as Ascorbic Acid?",
    question_hi: "एस्कॉर्बिक अम्ल किस विटामिन को कहा जाता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin C",
    answer_hi: "विटामिन C",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which Indian monument is also known as the symbol of love?",
    question_hi: "प्रेम का प्रतीक कौन सा भारतीय स्मारक है?",
    options_en: ["Qutub Minar", "Red Fort", "Taj Mahal", "India Gate"],
    options_hi: ["कुतुब मीनार", "लाल किला", "ताजमहल", "इंडिया गेट"],
    answer_en: "Taj Mahal",
    answer_hi: "ताजमहल",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which gas causes global warming?",
    question_hi: "वैश्विक ऊष्मीकरण के लिए कौन सी गैस जिम्मेदार है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which Indian state is known as the Tea Garden of India?",
    question_hi: "भारत का चाय बागान राज्य किसे कहा जाता है?",
    options_en: ["Assam", "Kerala", "West Bengal", "Tamil Nadu"],
    options_hi: ["असम", "केरल", "पश्चिम बंगाल", "तमिलनाडु"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which part of the Constitution deals with Fundamental Rights?",
    question_hi: "मौलिक अधिकार संविधान के किस भाग में हैं?",
    options_en: ["Part II", "Part III", "Part IV", "Part V"],
    options_hi: ["भाग II", "भाग III", "भाग IV", "भाग V"],
    answer_en: "Part III",
    answer_hi: "भाग III",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which Indian sportsperson is known as the Flying Sikh?",
    question_hi: "फ्लाइंग सिख के नाम से कौन प्रसिद्ध है?",
    options_en: ["Milkha Singh", "P. T. Usha", "Sachin Tendulkar", "Neeraj Chopra"],
    options_hi: ["मिल्खा सिंह", "पी. टी. उषा", "सचिन तेंदुलकर", "नीरज चोपड़ा"],
    answer_en: "Milkha Singh",
    answer_hi: "मिल्खा सिंह",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which soil is most suitable for rice cultivation?",
    question_hi: "धान की खेती के लिए कौन सी मिट्टी उपयुक्त है?",
    options_en: ["Black soil", "Alluvial soil", "Red soil", "Laterite soil"],
    options_hi: ["काली मिट्टी", "जलोढ़ मिट्टी", "लाल मिट्टी", "लेटराइट मिट्टी"],
    answer_en: "Alluvial soil",
    answer_hi: "जलोढ़ मिट्टी",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which Indian state has the highest number of Lok Sabha seats?",
    question_hi: "लोकसभा में सबसे अधिक सीटें किस राज्य की हैं?",
    options_en: ["Maharashtra", "Bihar", "Uttar Pradesh", "West Bengal"],
    options_hi: ["महाराष्ट्र", "बिहार", "उत्तर प्रदेश", "पश्चिम बंगाल"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which device converts AC to DC?",
    question_hi: "AC को DC में बदलने वाला उपकरण कौन सा है?",
    options_en: ["Transformer", "Rectifier", "Generator", "Alternator"],
    options_hi: ["ट्रांसफार्मर", "रेक्टिफायर", "जनरेटर", "अल्टरनेटर"],
    answer_en: "Rectifier",
    answer_hi: "रेक्टिफायर",
    attempted: false,
    selected: ""
  }
];


/// --------------------------- GLOBAL VARS -----------------------------
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