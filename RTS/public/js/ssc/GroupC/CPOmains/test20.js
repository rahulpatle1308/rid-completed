const questions = [
  {
    "num":1,
    "question_en": "Who is known as the Father of the Indian Constitution?",
    "question_hi": "भारतीय संविधान के जनक किसे कहा जाता है?",
    "options_en": ["B. R. Ambedkar", "Mahatma Gandhi", "Jawaharlal Nehru", "Rajendra Prasad"],
    "options_hi": ["बी. आर. अंबेडकर", "महात्मा गांधी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
    "answer_en": "B. R. Ambedkar",
    "answer_hi": "बी. आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which organ purifies blood in the human body?",
    "question_hi": "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?",
    "options_en": ["Liver", "Heart", "Kidney", "Lungs"],
    "options_hi": ["यकृत", "हृदय", "गुर्दा", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which vitamin is produced in the human body in sunlight?",
    "question_hi": "सूर्य के प्रकाश में मानव शरीर में कौन सा विटामिन बनता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "What is the capital of Australia?",
    "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
    "options_en": ["Sydney", "Melbourne", "Canberra", "Perth"],
    "options_hi": ["सिडनी", "मेलबर्न", "कैनबरा", "पर्थ"],
    "answer_en": "Canberra",
    "answer_hi": "कैनबरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which gas is essential for respiration?",
    "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Nitrogen", "Carbon Dioxide", "Oxygen", "Hydrogen"],
    "options_hi": ["नाइट्रोजन", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },

  {
    "num":6,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "भारत में सबसे लंबा समुद्र तट किस राज्य का है?",
    "options_en": ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Kerala"],
    "options_hi": ["तमिलनाडु", "आंध्र प्रदेश", "गुजरात", "केरल"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Alexander Graham Bell", "Thomas Edison", "Newton", "Marconi"],
    "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "न्यूटन", "मार्कोनी"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कमरे के तापमान पर द्रव रहने वाली धातु कौन सी है?",
    "options_en": ["Iron", "Mercury", "Aluminium", "Copper"],
    "options_hi": ["लोहा", "पारा", "एल्युमिनियम", "तांबा"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which country is known as the Land of the Rising Sun?",
    "question_hi": "'उगते सूरज की भूमि' किस देश को कहा जाता है?",
    "options_en": ["China", "Japan", "Thailand", "Korea"],
    "options_hi": ["चीन", "जापान", "थाईलैंड", "कोरिया"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "What is the SI unit of force?",
    "question_hi": "बल की SI इकाई क्या है?",
    "options_en": ["Joule", "Newton", "Watt", "Pascal"],
    "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
    "answer_en": "Newton",
    "answer_hi": "न्यूटन",
    "attempted": false,
    "selected": ""
  },

  {
    "num":11,
    "question_en": "Which Indian freedom fighter gave the slogan 'Inquilab Zindabad'?",
    "question_hi": "'इंकलाब जिंदाबाद' का नारा किसने दिया?",
    "options_en": ["Bhagat Singh", "Subhash Chandra Bose", "Gandhi", "Tilak"],
    "options_hi": ["भगत सिंह", "सुभाष चंद्र बोस", "गांधी", "तिलक"],
    "answer_en": "Bhagat Singh",
    "answer_hi": "भगत सिंह",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which planet is called the Red Planet?",
    "question_hi": "लाल ग्रह किसे कहा जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian river is the longest?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Yamuna", "Godavari", "Narmada"],
    "options_hi": ["गंगा", "यमुना", "गोदावरी", "नर्मदा"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which is the largest desert in the world?",
    "question_hi": "विश्व का सबसे बड़ा मरुस्थल कौन सा है?",
    "options_en": ["Sahara", "Gobi", "Kalahari", "Thar"],
    "options_hi": ["सहारा", "गोबी", "कालाहारी", "थार"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Rajendra Prasad", "Nehru", "Ambedkar", "Radhakrishnan"],
    "options_hi": ["राजेंद्र प्रसाद", "नेहरू", "अंबेडकर", "राधाकृष्णन"],
    "answer_en": "Rajendra Prasad",
    "answer_hi": "राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which Indian state is the largest producer of wheat?",
    "question_hi": "गेहूं का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "मध्य प्रदेश"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which blood group is known as the universal donor?",
    "question_hi": "सार्वभौमिक दाता किस रक्त समूह को कहा जाता है?",
    "options_en": ["A", "B", "AB", "O negative"],
    "options_hi": ["A", "B", "AB", "O नेगेटिव"],
    "answer_en": "O negative",
    "answer_hi": "O नेगेटिव",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which part of the plant conducts photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    "options_en": ["Root", "Stem", "Leaf", "Flower"],
    "options_hi": ["जड़", "तना", "पत्ता", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which country gifted the Statue of Liberty to the USA?",
    "question_hi": "स्टैच्यू ऑफ लिबर्टी अमेरिका को किस देश ने उपहार में दी?",
    "options_en": ["France", "UK", "Germany", "Italy"],
    "options_hi": ["फ्रांस", "यूके", "जर्मनी", "इटली"],
    "answer_en": "France",
    "answer_hi": "फ्रांस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "What is the chemical symbol of Gold?",
    "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ag", "Au", "Fe", "Cu"],
    "options_hi": ["Ag", "Au", "Fe", "Cu"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which Indian city is known as the Pink City?",
    "question_hi": "'पिंक सिटी' किस शहर को कहा जाता है?",
    "options_en": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
    "options_hi": ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which instrument is used to measure temperature?",
    "question_hi": "तापमान मापने के लिए किस यंत्र का उपयोग किया जाता है?",
    "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Thermometer",
    "answer_hi": "थर्मामीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which Mughal emperor built the Taj Mahal?",
    "question_hi": "ताजमहल का निर्माण किस मुगल शासक ने कराया?",
    "options_en": ["Akbar", "Jahangir", "Shah Jahan", "Babur"],
    "options_hi": ["अकबर", "जहांगीर", "शाहजहां", "बाबर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहां",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which planet is the largest in the solar system?",
    "question_hi": "सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Earth", "Saturn", "Jupiter", "Neptune"],
    "options_hi": ["पृथ्वी", "शनि", "बृहस्पति", "नेपच्यून"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "अग्निशामक यंत्रों में कौन सी गैस उपयोग होती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which Indian state has the highest population?",
    "question_hi": "भारत में सर्वाधिक जनसंख्या वाला राज्य कौन सा है?",
    "options_en": ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"],
    "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which vitamin helps in blood clotting?",
    "question_hi": "रक्त का थक्का जमाने में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which river is known as the Sorrow of Bihar?",
    "question_hi": "बिहार का शोक किस नदी को कहा जाता है?",
    "options_en": ["Ganga", "Kosi", "Son", "Gandak"],
    "options_hi": ["गंगा", "कोसी", "सोन", "गंडक"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Who wrote the National Anthem of India?",
    "question_hi": "भारत का राष्ट्रगान किसने लिखा?",
    "options_en": ["Bankim Chandra", "Rabindranath Tagore", "Subhash Bose", "Sarojini Naidu"],
    "options_hi": ["बंकिम चंद्र", "रवींद्रनाथ टैगोर", "सुभाष बोस", "सरोजिनी नायडू"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which device is used to measure blood pressure?",
    "question_hi": "रक्तचाप मापने के लिए किस यंत्र का उपयोग किया जाता है?",
    "options_en": ["Thermometer", "Barometer", "Sphygmomanometer", "Hygrometer"],
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "स्फिग्मोमैनोमीटर", "हाइग्रोमीटर"],
    "answer_en": "Sphygmomanometer",
    "answer_hi": "स्फिग्मोमैनोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which Indian state is known as the Land of Five Rivers?",
    "question_hi": "'पांच नदियों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Punjab", "Haryana", "Rajasthan", "Uttarakhand"],
    "options_hi": ["पंजाब", "हरियाणा", "राजस्थान", "उत्तराखंड"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which planet has rings around it?",
    "question_hi": "किस ग्रह के चारों ओर छल्ले होते हैं?",
    "options_en": ["Mars", "Earth", "Saturn", "Venus"],
    "options_hi": ["मंगल", "पृथ्वी", "शनि", "शुक्र"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "What is the currency of Japan?",
    "question_hi": "जापान की मुद्रा क्या है?",
    "options_en": ["Dollar", "Won", "Yen", "Peso"],
    "options_hi": ["डॉलर", "वॉन", "येन", "पेसो"],
    "answer_en": "Yen",
    "answer_hi": "येन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which Indian freedom fighter is known as Netaji?",
    "question_hi": "नेताजी के नाम से कौन प्रसिद्ध थे?",
    "options_en": ["Bhagat Singh", "Subhash Chandra Bose", "Tilak", "Nehru"],
    "options_hi": ["भगत सिंह", "सुभाष चंद्र बोस", "तिलक", "नेहरू"],
    "answer_en": "Subhash Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which metal is the best conductor of electricity?",
    "question_hi": "विद्युत का सबसे अच्छा चालक कौन सी धातु है?",
    "options_en": ["Copper", "Silver", "Gold", "Aluminium"],
    "options_hi": ["तांबा", "चांदी", "सोना", "एल्युमिनियम"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which Indian city is known as the City of Joy?",
    "question_hi": "'सिटी ऑफ जॉय' किस शहर को कहा जाता है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which gas is most abundant in the atmosphere?",
    "question_hi": "वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which Indian river flows through Delhi?",
    "question_hi": "दिल्ली से होकर कौन सी नदी बहती है?",
    "options_en": ["Ganga", "Yamuna", "Sutlej", "Ghaghara"],
    "options_hi": ["गंगा", "यमुना", "सतलुज", "घाघरा"],
    "answer_en": "Yamuna",
    "answer_hi": "यमुना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Who was the first Prime Minister of India?",
    "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
    "options_en": ["Sardar Patel", "Jawaharlal Nehru", "Gandhi", "Rajendra Prasad"],
    "options_hi": ["सरदार पटेल", "जवाहरलाल नेहरू", "गांधी", "राजेंद्र प्रसाद"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which Indian state is famous for tea gardens?",
    "question_hi": "चाय बागानों के लिए प्रसिद्ध राज्य कौन सा है?",
    "options_en": ["Assam", "Kerala", "Punjab", "Bihar"],
    "options_hi": ["असम", "केरल", "पंजाब", "बिहार"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which instrument measures earthquakes?",
    "question_hi": "भूकंप मापने वाला यंत्र कौन सा है?",
    "options_en": ["Thermometer", "Seismograph", "Barometer", "Anemometer"],
    "options_hi": ["थर्मामीटर", "सीस्मोग्राफ", "बैरोमीटर", "एनीमोमीटर"],
    "answer_en": "Seismograph",
    "answer_hi": "सीस्मोग्राफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which Indian monument is also called the Red Fort?",
    "question_hi": "किस भारतीय स्मारक को लाल किला कहा जाता है?",
    "options_en": ["Agra Fort", "Red Fort Delhi", "Fatehpur Sikri", "Golconda Fort"],
    "options_hi": ["आगरा किला", "दिल्ली का लाल किला", "फतेहपुर सीकरी", "गोलकुंडा किला"],
    "answer_en": "Red Fort Delhi",
    "answer_hi": "दिल्ली का लाल किला",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which Indian river is called the Lifeline of Madhya Pradesh?",
    "question_hi": "मध्य प्रदेश की जीवन रेखा किस नदी को कहा जाता है?",
    "options_en": ["Narmada", "Tapti", "Betwa", "Son"],
    "options_hi": ["नर्मदा", "ताप्ती", "बेतवा", "सोन"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which planet is closest to the Sun?",
    "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
    "options_en": ["Venus", "Mercury", "Earth", "Mars"],
    "options_hi": ["शुक्र", "बुध", "पृथ्वी", "मंगल"],
    "answer_en": "Mercury",
    "answer_hi": "बुध",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian state is known as Dev Bhoomi?",
    "question_hi": "'देवभूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Himachal Pradesh", "Uttarakhand", "Sikkim", "Arunachal Pradesh"],
    "options_hi": ["हिमाचल प्रदेश", "उत्तराखंड", "सिक्किम", "अरुणाचल प्रदेश"],
    "answer_en": "Uttarakhand",
    "answer_hi": "उत्तराखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which gas causes global warming?",
    "question_hi": "वैश्विक ऊष्मीकरण के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian city is known as the Blue City?",
    "question_hi": "'ब्लू सिटी' किस शहर को कहा जाता है?",
    "options_en": ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"],
    "options_hi": ["जोधपुर", "जयपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jodhpur",
    "answer_hi": "जोधपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which vitamin deficiency causes scurvy?",
    "question_hi": "स्कर्वी किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian river is the longest west flowing river?",
    "question_hi": "सबसे लंबी पश्चिम की ओर बहने वाली नदी कौन सी है?",
    "options_en": ["Narmada", "Tapti", "Mahi", "Periyar"],
    "options_hi": ["नर्मदा", "ताप्ती", "माही", "पेरियार"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which country is known as the Land of Thousand Lakes?",
    "question_hi": "'हजार झीलों की भूमि' किस देश को कहा जाता है?",
    "options_en": ["Finland", "Norway", "Sweden", "Canada"],
    "options_hi": ["फिनलैंड", "नॉर्वे", "स्वीडन", "कनाडा"],
    "answer_en": "Finland",
    "answer_hi": "फिनलैंड",
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