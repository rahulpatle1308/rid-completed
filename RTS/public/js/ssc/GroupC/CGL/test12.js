const questions = [
  {
    "num": 1,
    "question_en": "Which is the largest planet in our solar system?",
    "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Earth", "Jupiter", "Saturn", "Mars"],
    "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Who is known as the 'Missile Man of India'?",
    "question_hi": "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
    "options_en": ["Vikram Sarabhai", "APJ Abdul Kalam", "Homi Bhabha", "C.V. Raman"],
    "options_hi": ["विक्रम साराभाई", "ए.पी.जे. अब्दुल कलाम", "होमी भाभा", "सी.वी. रमन"],
    "answer_en": "APJ Abdul Kalam",
    "answer_hi": "ए.पी.जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which is the smallest continent by area?",
    "question_hi": "क्षेत्रफल के अनुसार सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Europe", "Australia", "South America", "Antarctica"],
    "options_hi": ["यूरोप", "ऑस्ट्रेलिया", "दक्षिण अमेरिका", "अंटार्कटिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Who was the first Indian woman to go to space?",
    "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थीं?",
    "options_en": ["Sunita Williams", "Kalpana Chawla", "Ritu Karidhal", "Tessy Thomas"],
    "options_hi": ["सुनीता विलियम्स", "कल्पना चावला", "रितु करिढ़ाल", "टैसी थॉमस"],
    "answer_en": "Kalpana Chawla",
    "answer_hi": "कल्पना चावला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Indian state has the highest forest cover?",
    "question_hi": "भारत में सबसे अधिक वन क्षेत्र किस राज्य का है?",
    "options_en": ["Madhya Pradesh", "Arunachal Pradesh", "Maharashtra", "Chhattisgarh"],
    "options_hi": ["मध्य प्रदेश", "अरुणाचल प्रदेश", "महाराष्ट्र", "छत्तीसगढ़"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which Indian classical dance is from Odisha?",
    "question_hi": "उड़ीसा की शास्त्रीय नृत्य शैली कौन सी है?",
    "options_en": ["Bharatanatyam", "Kathak", "Odissi", "Kathakali"],
    "options_hi": ["भरतनाट्यम", "कथक", "ओडिसी", "कथकली"],
    "answer_en": "Odissi",
    "answer_hi": "ओडिसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which organ of the human body produces insulin?",
    "question_hi": "मानव शरीर का कौन सा अंग इंसुलिन बनाता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Heart"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "हृदय"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is the longest river in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
    "options_hi": ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Who was the first Prime Minister of India?",
    "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
    "options_en": ["Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad", "Indira Gandhi"],
    "options_hi": ["जवाहरलाल नेहरू", "सरदार पटेल", "राजेंद्र प्रसाद", "इंदिरा गांधी"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which planet is closest to the sun?",
    "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
    "options_en": ["Mercury", "Venus", "Earth", "Mars"],
    "options_hi": ["पारा", "शुक्र", "पृथ्वी", "मंगल"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Who wrote 'Ramcharitmanas'?",
    "question_hi": "'रामचरितमानस' किसने लिखा?",
    "options_en": ["Tulsidas", "Valmiki", "Kabir", "Surdas"],
    "options_hi": ["तुलसीदास", "वाल्मीकि", "कबीर", "सूरदास"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Indian city is the financial capital of India?",
    "question_hi": "भारत की वित्तीय राजधानी कौन सा शहर है?",
    "options_en": ["New Delhi", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["नई दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which is the largest desert in the world?",
    "question_hi": "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Sahara", "Gobi", "Kalahari", "Arabian"],
    "options_hi": ["सहारा", "गोबी", "कालाहारी", "अरब"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Who founded the city of Ahmedabad?",
    "question_hi": "अहमदाबाद शहर की स्थापना किसने की?",
    "options_en": ["Ahmed Shah", "Akbar", "Aurangzeb", "Gujarat King"],
    "options_hi": ["अहमद शाह", "अकबर", "औरंगज़ेब", "गुजरात का राजा"],
    "answer_en": "Ahmed Shah",
    "answer_hi": "अहमद शाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which instrument measures atmospheric pressure?",
    "question_hi": "वायुमंडलीय दबाव मापने का यंत्र कौन सा है?",
    "options_en": ["Thermometer", "Barometer", "Anemometer", "Hygrometer"],
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "एनीमोमीटर", "हाइग्रोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which Indian festival is known as the Festival of Lights?",
    "question_hi": "कौन सा भारतीय त्योहार 'दीयों का त्योहार' कहा जाता है?",
    "options_en": ["Holi", "Diwali", "Raksha Bandhan", "Pongal"],
    "options_hi": ["होली", "दिवाली", "रक्षाबंधन", "पोंगल"],
    "answer_en": "Diwali",
    "answer_hi": "दिवाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Indian state is famous for tea gardens?",
    "question_hi": "चाय बागानों के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Who discovered the theory of relativity?",
    "question_hi": "सापेक्षता का सिद्धांत किसने खोजा?",
    "options_en": ["Isaac Newton", "Albert Einstein", "Galileo", "Nikola Tesla"],
    "options_hi": ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो", "निकोला टेस्ला"],
    "answer_en": "Albert Einstein",
    "answer_hi": "अल्बर्ट आइंस्टीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Indian state is known as the 'Land of Five Rivers'?",
    "question_hi": "'पाँच नदियों की धरती' किस राज्य को कहा जाता है?",
    "options_en": ["Punjab", "Haryana", "Rajasthan", "Himachal Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "राजस्थान", "हिमाचल प्रदेश"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which metal is used in making coins?",
    "question_hi": "सिक्कों में किस धातु का उपयोग होता है?",
    "options_en": ["Copper", "Gold", "Silver", "Aluminium"],
    "options_hi": ["तांबा", "सोना", "चांदी", "एल्युमिनियम"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which planet is called the Morning Star?",
    "question_hi": "कौन सा ग्रह 'मॉर्निंग स्टार' कहा जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Mercury"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "पारा"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which gas is most abundant in Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक कौन सी गैस है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which element is used in balloons to make them float?",
    "question_hi": "गुब्बारों को तैरने के लिए कौन सा तत्व प्रयोग होता है?",
    "options_en": ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Who is the author of 'Gitanjali'?",
    "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
    "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Kavi Pradeep"],
    "options_hi": ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "कवि प्रदीप"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which state in India is called 'God’s Own Country'?",
    "question_hi": "भारत का कौन सा राज्य 'गॉड्स ओन कंट्री' कहा जाता है?",
    "options_en": ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    "options_hi": ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 26,
    "question_en": "Which is the fastest land animal?",
    "question_hi": "सबसे तेज़ भूमि जीव कौन सा है?",
    "options_en": ["Lion", "Cheetah", "Tiger", "Leopard"],
    "options_hi": ["शेर", "चीता", "बाघ", "तेंदुआ"],
    "answer_en": "Cheetah",
    "answer_hi": "चीता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Rajendra Prasad", "Zakir Hussain", "V.V. Giri", "S. Radhakrishnan"],
    "options_hi": ["राजेंद्र प्रसाद", "जाकिर हुसैन", "वी.वी. गिरी", "एस. राधाकृष्णन"],
    "answer_en": "Rajendra Prasad",
    "answer_hi": "राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is the largest ocean in the world?",
    "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Atlantic", "Indian", "Pacific", "Arctic"],
    "options_hi": ["अटलांटिक", "भारतीय", "प्रशांत", "आर्कटिक"],
    "answer_en": "Pacific",
    "answer_hi": "प्रशांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Indian state is known as the 'Land of Rising Sun'?",
    "question_hi": "भारत में 'सूर्योदय की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Arunachal Pradesh", "Assam", "Manipur", "Nagaland"],
    "options_hi": ["अरुणाचल प्रदेश", "असम", "मणिपुर", "नागालैंड"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
    "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "पारा"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Who is the father of the Indian Constitution?",
    "question_hi": "भारतीय संविधान के पिता कौन हैं?",
    "options_en": ["B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
    "options_hi": ["बी.आर. आंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल", "राजेंद्र प्रसाद"],
    "answer_en": "B.R. Ambedkar",
    "answer_hi": "बी.आर. आंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the longest river in the world?",
    "question_hi": "विश्व की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
    "options_hi": ["अमेज़न", "नील", "यांग्त्ज़े", "मिसिसिप्पी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which element is needed for the formation of bones?",
    "question_hi": "हड्डियों के निर्माण के लिए कौन सा तत्व आवश्यक है?",
    "options_en": ["Calcium", "Iron", "Potassium", "Magnesium"],
    "options_hi": ["कैल्शियम", "लोहा", "पोटैशियम", "मैग्नीशियम"],
    "answer_en": "Calcium",
    "answer_hi": "कैल्शियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Indian state is famous for backwaters?",
    "question_hi": "कौन सा भारतीय राज्य अपने बैकवाटर्स के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Goa", "West Bengal", "Tamil Nadu"],
    "options_hi": ["केरल", "गोवा", "पश्चिम बंगाल", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुइल्मो मार्कोनी"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which gas is essential for respiration?",
    "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which is the smallest prime number?",
    "question_hi": "सबसे छोटा अभाज्य संख्या कौन सा है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is the national aquatic animal of India?",
    "question_hi": "भारत का राष्ट्रीय जलीय प्राणी कौन सा है?",
    "options_en": ["River Dolphin", "Crocodile", "Shark", "Whale"],
    "options_hi": ["नदी डॉल्फ़िन", "मगरमच्छ", "शार्क", "व्हेल"],
    "answer_en": "River Dolphin",
    "answer_hi": "नदी डॉल्फ़िन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which Indian state has the largest population?",
    "question_hi": "सबसे अधिक जनसंख्या वाला भारतीय राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which vitamin is produced when skin is exposed to sunlight?",
    "question_hi": "सूर्य की रोशनी में त्वचा के संपर्क में आने पर कौन सा विटामिन बनता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which Indian river is called the 'Sorrow of Bihar'?",
    "question_hi": "'बिहार का दुःख' किस नदी को कहा जाता है?",
    "options_en": ["Kosi", "Ganga", "Yamuna", "Son"],
    "options_hi": ["कोसी", "गंगा", "यमुना", "सोन"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which gas is used in electric bulbs?",
    "question_hi": "इलेक्ट्रिक बल्ब में कौन सी गैस का उपयोग होता है?",
    "options_en": ["Oxygen", "Nitrogen", "Argon", "Carbon Dioxide"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "कार्बन डाइऑक्साइड"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Who is called the 'Iron Man of India'?",
    "question_hi": "भारत का 'लौह पुरुष' किसे कहा जाता है?",
    "options_en": ["Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Mahatma Gandhi", "Subhash Chandra Bose"],
    "options_hi": ["जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "महात्मा गांधी", "सुभाष चंद्र बोस"],
    "answer_en": "Sardar Vallabhbhai Patel",
    "answer_hi": "सरदार वल्लभभाई पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Indian state is called the 'Spice Garden of India'?",
    "question_hi": "भारत का 'मसालों की धरती' किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Karnataka", "Goa", "Tamil Nadu"],
    "options_hi": ["केरल", "कर्नाटक", "गोवा", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which country is known as the 'Land of the Rising Sun'?",
    "question_hi": "'सूर्योदय का देश' किस देश के लिए कहा जाता है?",
    "options_en": ["China", "Japan", "Thailand", "South Korea"],
    "options_hi": ["चीन", "जापान", "थाईलैंड", "दक्षिण कोरिया"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is the largest mammal on Earth?",
    "question_hi": "पृथ्वी का सबसे बड़ा स्तनपायी कौन सा है?",
    "options_en": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    "options_hi": ["हाथी", "नीला व्हेल", "जिराफ़", "हिपोपोटेमस"],
    "answer_en": "Blue Whale",
    "answer_hi": "नीला व्हेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which Indian festival marks the harvest season in Punjab?",
    "question_hi": "पंजाब में फसल कटाई के मौसम का कौन सा त्योहार है?",
    "options_en": ["Diwali", "Baisakhi", "Holi", "Makar Sankranti"],
    "options_hi": ["दिवाली", "बैसाखी", "होली", "मकर संक्रांति"],
    "answer_en": "Baisakhi",
    "answer_hi": "बैसाखी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which is the largest internal organ of the human body?",
    "question_hi": "मानव शरीर का सबसे बड़ा आंतरिक अंग कौन सा है?",
    "options_en": ["Liver", "Heart", "Lungs", "Kidney"],
    "options_hi": ["यकृत", "हृदय", "फेफड़े", "गुर्दा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Indian city is known as the 'Pink City'?",
    "question_hi": "'गुलाबी शहर' के रूप में किस भारतीय शहर को जाना जाता है?",
    "options_en": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
    "options_hi": ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is the fastest bird in the world?",
    "question_hi": "विश्व का सबसे तेज़ पक्षी कौन सा है?",
    "options_en": ["Eagle", "Peregrine Falcon", "Sparrow", "Hawk"],
    "options_hi": ["गरुड़", "परेग्रिन फाल्कन", "चिड़िया", "बाज़"],
    "answer_en": "Peregrine Falcon",
    "answer_hi": "परेग्रिन फाल्कन",
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