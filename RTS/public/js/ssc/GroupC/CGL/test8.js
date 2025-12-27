const questions = [
  {
     num:1,
    "question_en": "Which gas is used to fill electric bulbs?",
    "question_hi": "इलेक्ट्रिक बल्बों में कौन सी गैस भरी जाती है?",
    "options_en": ["Nitrogen", "Oxygen", "Hydrogen", "Carbon Dioxide"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
     num:2,
    "question_en": "Who was the first Indian woman to win a Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला कौन थीं?",
    "options_en": ["Mother Teresa", "Indira Gandhi", "Sarojini Naidu", "Kalpana Chawla"],
    "options_hi": ["मदर टेरेसा", "इंदिरा गांधी", "सरोजिनी नायडू", "कल्पना चावला"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },
  {
     num:3,
    "question_en": "Which Indian state has the longest coastline including UTs?",
    "question_hi": "केंद्र शासित प्रदेशों सहित सबसे लंबा समुद्र तट किस राज्य का है?",
    "options_en": ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Odisha"],
    "options_hi": ["गुजरात", "तमिलनाडु", "आंध्र प्रदेश", "ओडिशा"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
     num:4,
    "question_en": "Which vitamin is essential for blood clotting?",
    "question_hi": "रक्त का थक्का जमाने के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin C"],
    "options_hi": ["विटामिन A", "विटामिन D", "विटामिन K", "विटामिन C"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
     num:5,
    "question_en": "Which Mughal emperor introduced Mansabdari system?",
    "question_hi": "मनसबदारी प्रणाली किस मुगल शासक ने शुरू की?",
    "options_en": ["Babur", "Humayun", "Akbar", "Aurangzeb"],
    "options_hi": ["बाबर", "हुमायूँ", "अकबर", "औरंगज़ेब"],
    "answer_en": "Akbar",
    "answer_hi": "अकबर",
    "attempted": false,
    "selected": ""
  },
  {
     num:6,
    "question_en": "Which organ produces insulin in the human body?",
    "question_hi": "मानव शरीर में इंसुलिन कौन सा अंग बनाता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Heart"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "हृदय"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
     num:7,
    "question_en": "Which country is called the Land of White Elephant?",
    "question_hi": "श्वेत हाथी की भूमि किस देश को कहा जाता है?",
    "options_en": ["Thailand", "Myanmar", "Cambodia", "Sri Lanka"],
    "options_hi": ["थाईलैंड", "म्यांमार", "कंबोडिया", "श्रीलंका"],
    "answer_en": "Thailand",
    "answer_hi": "थाईलैंड",
    "attempted": false,
    "selected": ""
  },
  {
     num:8,
    "question_en": "Which Indian movement is associated with Dandi March?",
    "question_hi": "दांडी मार्च किस आंदोलन से संबंधित है?",
    "options_en": ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience Movement", "Khilafat Movement"],
    "options_hi": ["असहयोग आंदोलन", "भारत छोड़ो आंदोलन", "सविनय अवज्ञा आंदोलन", "खिलाफत आंदोलन"],
    "answer_en": "Civil Disobedience Movement",
    "answer_hi": "सविनय अवज्ञा आंदोलन",
    "attempted": false,
    "selected": ""
  },
  {
     num:9,
    "question_en": "Which metal is also known as quicksilver?",
    "question_hi": "क्विकसिल्वर किस धातु को कहा जाता है?",
    "options_en": ["Silver", "Mercury", "Aluminium", "Lead"],
    "options_hi": ["चांदी", "पारा", "एल्युमिनियम", "सीसा"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
     num:10,
    "question_en": "Which Indian city is known as the City of Seven Islands?",
    "question_hi": "सात द्वीपों का शहर किसे कहा जाता है?",
    "options_en": ["Chennai", "Mumbai", "Kolkata", "Kochi"],
    "options_hi": ["चेन्नई", "मुंबई", "कोलकाता", "कोच्चि"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },

  {
     num:11,
    "question_en": "What is the hardest natural substance?",
    "question_hi": "प्राकृतिक रूप से पाया जाने वाला सबसे कठोर पदार्थ कौन सा है?",
    "options_en": ["Gold", "Iron", "Diamond", "Granite"],
    "options_hi": ["सोना", "लोहा", "हीरा", "ग्रेनाइट"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
     num:12,
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
     num:13,
    "question_en": "Who gave the slogan 'Inquilab Zindabad'?",
    "question_hi": "'इंकलाब जिंदाबाद' का नारा किसने दिया?",
    "options_en": ["Bhagat Singh", "Subhash Chandra Bose", "Lala Lajpat Rai", "Bal Gangadhar Tilak"],
    "options_hi": ["भगत सिंह", "सुभाष चंद्र बोस", "लाला लाजपत राय", "बाल गंगाधर तिलक"],
    "answer_en": "Bhagat Singh",
    "answer_hi": "भगत सिंह",
    "attempted": false,
    "selected": ""
  },
  {
     num:14,
    "question_en": "Which part of the plant conducts photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    "options_en": ["Root", "Stem", "Leaf", "Flower"],
    "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },
  {
     num:15,
    "question_en": "Which Indian river is called the 'Dakshin Ganga'?",
    "question_hi": "'दक्षिण गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Krishna", "Godavari", "Cauvery", "Tapi"],
    "options_hi": ["कृष्णा", "गोदावरी", "कावेरी", "तापी"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
     num:16,
    "question_en": "Which gas is mainly responsible for global warming?",
    "question_hi": "वैश्विक ऊष्मीकरण के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
     num:17,
    "question_en": "Who was the first Indian to go to space?",
    "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
    "options_en": ["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Vikram Sarabhai"],
    "options_hi": ["कल्पना चावला", "सुनीता विलियम्स", "राकेश शर्मा", "विक्रम साराभाई"],
    "answer_en": "Rakesh Sharma",
    "answer_hi": "राकेश शर्मा",
    "attempted": false,
    "selected": ""
  },
  {
     num:18,
    "question_en": "Which soil is most suitable for cotton cultivation?",
    "question_hi": "कपास की खेती के लिए सबसे उपयुक्त मिट्टी कौन सी है?",
    "options_en": ["Alluvial soil", "Red soil", "Black soil", "Laterite soil"],
    "options_hi": ["जलोढ़ मिट्टी", "लाल मिट्टी", "काली मिट्टी", "लेटराइट मिट्टी"],
    "answer_en": "Black soil",
    "answer_hi": "काली मिट्टी",
    "attempted": false,
    "selected": ""
  },
  {
     num:19,
    "question_en": "Which day is celebrated as International Women's Day?",
    "question_hi": "अंतरराष्ट्रीय महिला दिवस कब मनाया जाता है?",
    "options_en": ["8 March", "5 June", "14 November", "1 May"],
    "options_hi": ["8 मार्च", "5 जून", "14 नवंबर", "1 मई"],
    "answer_en": "8 March",
    "answer_hi": "8 मार्च",
    "attempted": false,
    "selected": ""
  },
  {
     num:20,
    "question_en": "Which Indian city is famous for Diamond industry?",
    "question_hi": "हीरा उद्योग के लिए प्रसिद्ध भारतीय शहर कौन सा है?",
    "options_en": ["Mumbai", "Jaipur", "Surat", "Kolkata"],
    "options_hi": ["मुंबई", "जयपुर", "सूरत", "कोलकाता"],
    "answer_en": "Surat",
    "answer_hi": "सूरत",
    "attempted": false,
    "selected": ""
  },

  {
     num:21,
    "question_en": "Which gas is released when limestone is heated?",
    "question_hi": "चूना पत्थर को गर्म करने पर कौन सी गैस निकलती है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
     num:22,
    "question_en": "Who is known as the Missile Man of India?",
    "question_hi": "भारत के मिसाइल मैन किसे कहा जाता है?",
    "options_en": ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "Satish Dhawan"],
    "options_hi": ["ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सतीश धवन"],
    "answer_en": "A.P.J. Abdul Kalam",
    "answer_hi": "ए.पी.जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
     num:23,
    "question_en": "Which Indian state is the largest producer of tea?",
    "question_hi": "चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
     num:24,
    "question_en": "Which organ is called the powerhouse of the cell?",
    "question_hi": "कोशिका का पावरहाउस किसे कहा जाता है?",
    "options_en": ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
    "options_hi": ["न्यूक्लियस", "राइबोसोम", "माइटोकॉन्ड्रिया", "गोल्जी बॉडी"],
    "answer_en": "Mitochondria",
    "answer_hi": "माइटोकॉन्ड्रिया",
    "attempted": false,
    "selected": ""
  },
  {
     num:25,
    "question_en": "Which country gifted the Statue of Liberty to USA?",
    "question_hi": "स्टैच्यू ऑफ लिबर्टी अमेरिका को किस देश ने भेंट की?",
    "options_en": ["France", "UK", "Germany", "Canada"],
    "options_hi": ["फ्रांस", "यूके", "जर्मनी", "कनाडा"],
    "answer_en": "France",
    "answer_hi": "फ्रांस",
    "attempted": false,
    "selected": ""
  },

  {
     num:26,
    "question_en": "Which Indian festival is known as the festival of lights?",
    "question_hi": "रोशनी का त्योहार किसे कहा जाता है?",
    "options_en": ["Holi", "Diwali", "Dussehra", "Raksha Bandhan"],
    "options_hi": ["होली", "दीवाली", "दशहरा", "रक्षा बंधन"],
    "answer_en": "Diwali",
    "answer_hi": "दीवाली",
    "attempted": false,
    "selected": ""
  },
  {
     num:27,
    "question_en": "Which instrument measures earthquakes?",
    "question_hi": "भूकंप मापने वाला यंत्र कौन सा है?",
    "options_en": ["Barometer", "Seismograph", "Thermometer", "Hygrometer"],
    "options_hi": ["बैरोमीटर", "सिस्मोग्राफ", "थर्मामीटर", "हाइग्रोमीटर"],
    "answer_en": "Seismograph",
    "answer_hi": "सिस्मोग्राफ",
    "attempted": false,
    "selected": ""
  },
  {
     num:28,
    "question_en": "Which Indian state is famous for Bhangra dance?",
    "question_hi": "भांगड़ा नृत्य किस राज्य से संबंधित है?",
    "options_en": ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
     num:29,
    "question_en": "Which gas is essential for combustion?",
    "question_hi": "दहन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
     num:30,
    "question_en": "Who was the first Governor-General of independent India?",
    "question_hi": "स्वतंत्र भारत के पहले गवर्नर जनरल कौन थे?",
    "options_en": ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
    "options_hi": ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
    "answer_en": "Lord Mountbatten",
    "answer_hi": "लॉर्ड माउंटबेटन",
    "attempted": false,
    "selected": ""
  },

  {
     num:31,
    "question_en": "Which vitamin deficiency causes scurvy?",
    "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
     num:32,
    "question_en": "Which river is the longest river in the world?",
    "question_hi": "विश्व की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "options_hi": ["अमेज़न", "नील", "यांग्त्से", "मिसिसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
     num:33,
    "question_en": "Which Indian state has the largest forest area?",
    "question_hi": "भारत में सबसे अधिक वन क्षेत्र किस राज्य में है?",
    "options_en": ["Madhya Pradesh", "Chhattisgarh", "Odisha", "Maharashtra"],
    "options_hi": ["मध्य प्रदेश", "छत्तीसगढ़", "ओडिशा", "महाराष्ट्र"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:34,
    "question_en": "Which gas is used in making soda water?",
    "question_hi": "सोडा वाटर बनाने में कौन सी गैस उपयोग होती है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
     num:35,
    "question_en": "Which Indian city is known as the Manchester of India?",
    "question_hi": "भारत का मैनचेस्टर किस शहर को कहा जाता है?",
    "options_en": ["Ahmedabad", "Mumbai", "Kanpur", "Coimbatore"],
    "options_hi": ["अहमदाबाद", "मुंबई", "कानपुर", "कोयंबटूर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },

  {
     num:36,
    "question_en": "Which element is essential for making nuclear weapons?",
    "question_hi": "परमाणु हथियार बनाने के लिए कौन सा तत्व आवश्यक है?",
    "options_en": ["Uranium", "Iron", "Copper", "Aluminium"],
    "options_hi": ["यूरेनियम", "लोहा", "तांबा", "एल्युमिनियम"],
    "answer_en": "Uranium",
    "answer_hi": "यूरेनियम",
    "attempted": false,
    "selected": ""
  },
  {
     num:37,
    "question_en": "Which Indian river flows through Delhi?",
    "question_hi": "दिल्ली से होकर कौन सी नदी बहती है?",
    "options_en": ["Ganga", "Yamuna", "Saraswati", "Ghaghara"],
    "options_hi": ["गंगा", "यमुना", "सरस्वती", "घाघरा"],
    "answer_en": "Yamuna",
    "answer_hi": "यमुना",
    "attempted": false,
    "selected": ""
  },
  {
     num:38,
    "question_en": "Who is the author of 'Arthashastra'?",
    "question_hi": "'अर्थशास्त्र' के लेखक कौन हैं?",
    "options_en": ["Kalidasa", "Kautilya", "Panini", "Valmiki"],
    "options_hi": ["कालिदास", "कौटिल्य", "पाणिनी", "वाल्मीकि"],
    "answer_en": "Kautilya",
    "answer_hi": "कौटिल्य",
    "attempted": false,
    "selected": ""
  },
  {
     num:39,
    "question_en": "Which Indian state is the largest producer of pulses?",
    "question_hi": "दालों का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Maharashtra"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "महाराष्ट्र"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:40,
    "question_en": "Which vitamin is known as anti-sterility vitamin?",
    "question_hi": "एंटी-स्टेरिलिटी विटामिन किसे कहा जाता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin E", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन E", "विटामिन K"],
    "answer_en": "Vitamin E",
    "answer_hi": "विटामिन E",
    "attempted": false,
    "selected": ""
  },

  {
     num:41,
    "question_en": "Which Indian city is known as the City of Nawabs?",
    "question_hi": "नवाबों का शहर किसे कहा जाता है?",
    "options_en": ["Hyderabad", "Lucknow", "Bhopal", "Delhi"],
    "options_hi": ["हैदराबाद", "लखनऊ", "भोपाल", "दिल्ली"],
    "answer_en": "Lucknow",
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
     num:42,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में कौन सी गैस भरी जाती है?",
    "options_en": ["Hydrogen", "Oxygen", "Helium", "Nitrogen"],
    "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "हीलियम", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
     num:43,
    "question_en": "Which Indian freedom fighter founded the Ghadar Party?",
    "question_hi": "गदर पार्टी की स्थापना किसने की?",
    "options_en": ["Lala Hardayal", "Bhagat Singh", "Subhash Chandra Bose", "Bal Gangadhar Tilak"],
    "options_hi": ["लाला हरदयाल", "भगत सिंह", "सुभाष चंद्र बोस", "बाल गंगाधर तिलक"],
    "answer_en": "Lala Hardayal",
    "answer_hi": "लाला हरदयाल",
    "attempted": false,
    "selected": ""
  },
  {
     num:44,
    "question_en": "Which river is known as the 'River of Sorrow' in Bihar?",
    "question_hi": "बिहार की 'शोक नदी' किसे कहा जाता है?",
    "options_en": ["Gandak", "Kosi", "Son", "Bagmati"],
    "options_hi": ["गंडक", "कोसी", "सोन", "बागमती"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
     num:45,
    "question_en": "Which Indian state is famous for Kathakali dance?",
    "question_hi": "कथकली नृत्य किस राज्य से संबंधित है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Odisha"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "ओडिशा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },

  {
     num:46,
    "question_en": "Which instrument measures atmospheric pressure?",
    "question_hi": "वायुमंडलीय दाब मापने वाला यंत्र कौन सा है?",
    "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
     num:47,
    "question_en": "Which Indian state has the highest number of Lok Sabha seats?",
    "question_hi": "लोकसभा की सबसे अधिक सीटें किस राज्य की हैं?",
    "options_en": ["Maharashtra", "Bihar", "Uttar Pradesh", "West Bengal"],
    "options_hi": ["महाराष्ट्र", "बिहार", "उत्तर प्रदेश", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:48,
    "question_en": "Which gas is used for artificial ripening of fruits?",
    "question_hi": "फलों को कृत्रिम रूप से पकाने के लिए कौन सी गैस उपयोग होती है?",
    "options_en": ["Ethylene", "Methane", "Propane", "Butane"],
    "options_hi": ["एथिलीन", "मीथेन", "प्रोपेन", "ब्यूटेन"],
    "answer_en": "Ethylene",
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },
  {
     num:49,
    "question_en": "Which Indian city is known as the Steel City?",
    "question_hi": "स्टील सिटी किस भारतीय शहर को कहा जाता है?",
    "options_en": ["Durgapur", "Jamshedpur", "Bhilai", "Rourkela"],
    "options_hi": ["दुर्गापुर", "जमशेदपुर", "भिलाई", "राउरकेला"],
    "answer_en": "Jamshedpur",
    "answer_hi": "जमशेदपुर",
    "attempted": false,
    "selected": ""
  },
  {
     num:50,
    "question_en": "Which day is celebrated as National Youth Day in India?",
    "question_hi": "भारत में राष्ट्रीय युवा दिवस कब मनाया जाता है?",
    "options_en": ["12 January", "23 January", "5 June", "15 August"],
    "options_hi": ["12 जनवरी", "23 जनवरी", "5 जून", "15 अगस्त"],
    "answer_en": "12 January",
    "answer_hi": "12 जनवरी",
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