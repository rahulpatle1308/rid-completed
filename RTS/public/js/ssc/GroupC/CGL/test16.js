const questions = [
  {
   "num":1,
    "question_en": "Which gas do humans exhale?",
    "question_hi": "मनुष्य किस गैस को बाहर छोड़ता है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
   "num":2,
    "question_en": "Who is known as the 'Father of Indian Space Program'?",
    "question_hi": "भारतीय अंतरिक्ष कार्यक्रम के पिता के रूप में किसे जाना जाता है?",
    "options_en": ["Vikram Sarabhai", "APJ Abdul Kalam", "Homi Bhabha", "ISRO Chairman"],
    "options_hi": ["विक्रम साराभाई", "ए.पी.जे. अब्दुल कलाम", "होमी भाभा", "इसरो अध्यक्ष"],
    "answer_en": "Vikram Sarabhai",
    "answer_hi": "विक्रम साराभाई",
    "attempted": false,
    "selected": ""
  },
  {
   "num":3,
    "question_en": "Which is the smallest planet in our solar system?",
    "question_hi": "हमारे सौर मंडल का सबसे छोटा ग्रह कौन सा है?",
    "options_en": ["Mercury", "Mars", "Venus", "Earth"],
    "options_hi": ["पारा", "मंगल", "शुक्र", "पृथ्वी"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
   "num":4,
    "question_en": "Which Indian state is famous for its silk?",
    "question_hi": "कौन सा भारतीय राज्य अपनी रेशमी कपड़ों के लिए प्रसिद्ध है?",
    "options_en": ["Karnataka", "Maharashtra", "Tamil Nadu", "Gujarat"],
    "options_hi": ["कर्नाटक", "महाराष्ट्र", "तमिलनाडु", "गुजरात"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
   "num":5,
    "question_en": "Which is the highest mountain in the world?",
    "question_hi": "विश्व का सबसे ऊँचा पर्वत कौन सा है?",
    "options_en": ["K2", "Everest", "Kangchenjunga", "Lhotse"],
    "options_hi": ["के2", "एवरेस्ट", "कंचनजंगा", "ल्होत्से"],
    "answer_en": "Everest",
    "answer_hi": "एवरेस्ट",
    "attempted": false,
    "selected": ""
  },
  {
   "num":6,
    "question_en": "Who discovered gravity?",
    "question_hi": "गुरुत्वाकर्षण की खोज किसने की?",
    "options_en": ["Albert Einstein", "Isaac Newton", "Galileo", "Archimedes"],
    "options_hi": ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो", "आर्किमीडीज़"],
    "answer_en": "Isaac Newton",
    "answer_hi": "आइजैक न्यूटन",
    "attempted": false,
    "selected": ""
  },
  {
   "num":7,
    "question_en": "Which organ purifies blood in the human body?",
    "question_hi": "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
    "options_en": ["Liver", "Kidney", "Heart", "Lungs"],
    "options_hi": ["यकृत", "गुर्दा", "हृदय", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
   "num":8,
    "question_en": "Which is the largest island in the world?",
    "question_hi": "विश्व का सबसे बड़ा द्वीप कौन सा है?",
    "options_en": ["Greenland", "Australia", "Borneo", "Madagascar"],
    "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "बोर्नियो", "मेडागास्कर"],
    "answer_en": "Greenland",
    "answer_hi": "ग्रीनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
   "num":9,
    "question_en": "Which Indian leader gave the slogan 'Jai Jawan Jai Kisan'?",
    "question_hi": "किस भारतीय नेता ने नारा दिया 'जय जवान जय किसान'?",
    "options_en": ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Rajendra Prasad"],
    "options_hi": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
    "answer_en": "Lal Bahadur Shastri",
    "answer_hi": "लाल बहादुर शास्त्री",
    "attempted": false,
    "selected": ""
  },
  {
   "num":10,
    "question_en": "Which gas is used in scuba diving tanks?",
    "question_hi": "स्कूबा डाइविंग टैंक में कौन सी गैस का उपयोग होता है?",
    "options_en": ["Oxygen", "Nitrogen", "Helium", "Carbon Dioxide"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "कार्बन डाइऑक्साइड"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
   "num":11,
    "question_en": "Which Indian river is known as the 'Ganga of South India'?",
    "question_hi": "दक्षिण भारत की 'गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Mahanadi"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
   "num":12,
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
   "num":13,
    "question_en": "Which is the national fruit of India?",
    "question_hi": "भारत का राष्ट्रीय फल कौन सा है?",
    "options_en": ["Mango", "Apple", "Banana", "Orange"],
    "options_hi": ["आम", "सेब", "केला", "संतरा"],
    "answer_en": "Mango",
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
   "num":14,
    "question_en": "Which Indian state is known as the 'Land of Festivals'?",
    "question_hi": "भारत का 'त्योहारों की धरती' किस राज्य को कहा जाता है?",
    "options_en": ["West Bengal", "Rajasthan", "Punjab", "Kerala"],
    "options_hi": ["पश्चिम बंगाल", "राजस्थान", "पंजाब", "केरल"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
   "num":15,
    "question_en": "Which is the largest continent by area?",
    "question_hi": "क्षेत्रफल के अनुसार सबसे बड़ा महाद्वीप कौन सा है?",
    "options_en": ["Asia", "Africa", "Europe", "North America"],
    "options_hi": ["एशिया", "अफ्रीका", "यूरोप", "उत्तरी अमेरिका"],
    "answer_en": "Asia",
    "answer_hi": "एशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is the largest mammal in the world?",
    "question_hi": "विश्व का सबसे बड़ा स्तनपायी कौन सा है?",
    "options_en": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
    "options_hi": ["हाथी", "नीला व्हेल", "जिराफ़", "हिपोपोटेमस"],
    "answer_en": "Blue Whale",
    "answer_hi": "नीला व्हेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Who invented the light bulb?",
    "question_hi": "लाइट बल्ब का आविष्कार किसने किया?",
    "options_en": ["Thomas Edison", "Nikola Tesla", "Alexander Graham Bell", "Michael Faraday"],
    "options_hi": ["थॉमस एडिसन", "निकोला टेस्ला", "अलेक्जेंडर ग्राहम बेल", "माइकल फैराडे"],
    "answer_en": "Thomas Edison",
    "answer_hi": "थॉमस एडिसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which planet is known as the Earth's twin?",
    "question_hi": "कौन सा ग्रह पृथ्वी का जुड़वाँ कहा जाता है?",
    "options_en": ["Mars", "Venus", "Mercury", "Jupiter"],
    "options_hi": ["मंगल", "शुक्र", "पारा", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which is the smallest continent?",
    "question_hi": "सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Europe", "Australia", "Antarctica", "South America"],
    "options_hi": ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which organ purifies blood in humans?",
    "question_hi": "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
    "options_en": ["Kidney", "Liver", "Heart", "Lungs"],
    "options_hi": ["गुर्दा", "यकृत", "हृदय", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Who is the author of 'Ramcharitmanas'?",
    "question_hi": "'रामचरितमानस' के लेखक कौन हैं?",
    "options_en": ["Tulsidas", "Valmiki", "Kabir", "Surdas"],
    "options_hi": ["तुलसीदास", "वाल्मीकि", "कबीर", "सूरदास"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which is the national bird of India?",
    "question_hi": "भारत का राष्ट्रीय पक्षी कौन सा है?",
    "options_en": ["Peacock", "Eagle", "Parrot", "Sparrow"],
    "options_hi": ["मोर", "गरुड़", "तोता", "गौरैया"],
    "answer_en": "Peacock",
    "answer_hi": "मोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
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
    "num": 24,
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
    "num": 25,
    "question_en": "Which element is used in pencils?",
    "question_hi": "पेंसिल में किस तत्व का उपयोग होता है?",
    "options_en": ["Graphite", "Lead", "Carbon", "Iron"],
    "options_hi": ["ग्रेफाइट", "सीसा", "कार्बन", "लोहा"],
    "answer_en": "Graphite",
    "answer_hi": "ग्रेफाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which Indian state is called the 'Land of Five Rivers'?",
    "question_hi": "'पाँच नदियों की धरती' किस राज्य को कहा जाता है?",
    "options_en": ["Punjab", "Haryana", "Rajasthan", "Himachal Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "राजस्थान", "हिमाचल प्रदेश"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Who is known as the 'Missile Man of India'?",
    "question_hi": "भारत के 'मिसाइल मैन' के रूप में किसे जाना जाता है?",
    "options_en": ["APJ Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C.V. Raman"],
    "options_hi": ["ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सी.वी. रमन"],
    "answer_en": "APJ Abdul Kalam",
    "answer_hi": "ए.पी.जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Indian festival is known as the Festival of Lights?",
    "question_hi": "कौन सा भारतीय त्योहार 'दीयों का त्योहार' कहा जाता है?",
    "options_en": ["Diwali", "Holi", "Raksha Bandhan", "Pongal"],
    "options_hi": ["दिवाली", "होली", "रक्षाबंधन", "पोंगल"],
    "answer_en": "Diwali",
    "answer_hi": "दिवाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Indian city is called the 'Pink City'?",
    "question_hi": "'गुलाबी शहर' के रूप में किस शहर को जाना जाता है?",
    "options_en": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
    "options_hi": ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
   "num":30,
    "question_en": "Which gas do plants absorb during photosynthesis?",
    "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस अवशोषित करते हैं?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
   "num":31,
    "question_en": "Which planet is called the Red Planet?",
    "question_hi": "कौन सा ग्रह 'लाल ग्रह' कहा जाता है?",
    "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "पारा"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the largest internal organ in human body?",
    "question_hi": "मानव शरीर का सबसे बड़ा आंतरिक अंग कौन सा है?",
    "options_en": ["Liver", "Heart", "Lungs", "Kidney"],
    "options_hi": ["यकृत", "हृदय", "फेफड़े", "गुर्दा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
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
    "num": 34,
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
    "num": 35,
    "question_en": "Which organ of the body controls hormones?",
    "question_hi": "शरीर का कौन सा अंग हार्मोन नियंत्रित करता है?",
    "options_en": ["Brain", "Pancreas", "Thyroid", "Heart"],
    "options_hi": ["मस्तिष्क", "अग्न्याशय", "थायरॉइड", "हृदय"],
    "answer_en": "Thyroid",
    "answer_hi": "थायरॉइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Who is known as the 'Iron Man of India'?",
    "question_hi": "भारत का 'लौह पुरुष' किसे कहा जाता है?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Vallabhbhai Patel", "Subhash Chandra Bose"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस"],
    "answer_en": "Sardar Vallabhbhai Patel",
    "answer_hi": "सरदार वल्लभभाई पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Indian state is known as the 'Spice Garden of India'?",
    "question_hi": "भारत का 'मसालों की धरती' किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Karnataka", "Goa", "Tamil Nadu"],
    "options_hi": ["केरल", "कर्नाटक", "गोवा", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which Indian leader gave the slogan 'Jai Jawan Jai Kisan'?",
    "question_hi": "किस भारतीय नेता ने नारा दिया 'जय जवान जय किसान'?",
    "options_en": ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Rajendra Prasad"],
    "options_hi": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
    "answer_en": "Lal Bahadur Shastri",
    "answer_hi": "लाल बहादुर शास्त्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which river is known as the 'Sorrow of Bihar'?",
    "question_hi": "'बिहार का दुःख' किस नदी को कहा जाता है?",
    "options_en": ["Kosi", "Ganga", "Yamuna", "Son"],
    "options_hi": ["कोसी", "गंगा", "यमुना", "सोन"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
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
    "num": 41,
    "question_en": "Which is the fastest bird in the world?",
    "question_hi": "विश्व का सबसे तेज़ पक्षी कौन सा है?",
    "options_en": ["Eagle", "Peregrine Falcon", "Sparrow", "Hawk"],
    "options_hi": ["गरुड़", "परेग्रिन फाल्कन", "चिड़िया", "बाज़"],
    "answer_en": "Peregrine Falcon",
    "answer_hi": "परेग्रिन फाल्कन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which organ produces insulin in humans?",
    "question_hi": "मानव शरीर में इंसुलिन कौन सा अंग बनाता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Heart"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "हृदय"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
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
    "num": 44,
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
    "num": 45,
    "question_en": "Who was the first Indian woman in space?",
    "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला कौन थीं?",
    "options_en": ["Sunita Williams", "Kalpana Chawla", "Ritu Karidhal", "Tessy Thomas"],
    "options_hi": ["सुनीता विलियम्स", "कल्पना चावला", "रितु करिढ़ाल", "टैसी थॉमस"],
    "answer_en": "Kalpana Chawla",
    "answer_hi": "कल्पना चावला",
    "attempted": false,
    "selected": ""
  },
    {
    "num": 46,
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
    "num": 47,
    "question_en": "Which Indian city is known as the 'City of Lakes'?",
    "question_hi": "कौन सा भारतीय शहर 'झीलों का शहर' कहा जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Hyderabad", "Jaipur"],
    "options_hi": ["उदयपुर", "भोपाल", "हैदराबाद", "जयपुर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which gas is used in the production of fertilizers?",
    "question_hi": "उर्वरक के उत्पादन में कौन सी गैस का उपयोग होता है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Who wrote the book 'Discovery of India'?",
    "question_hi": "'डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "S. Radhakrishnan", "B. R. Ambedkar"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "एस. राधाकृष्णन", "बी. आर. आंबेडकर"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सा धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Mercury", "Lead", "Silver", "Aluminium"],
    "options_hi": ["पारा", "सीसा", "चांदी", "एल्युमिनियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
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