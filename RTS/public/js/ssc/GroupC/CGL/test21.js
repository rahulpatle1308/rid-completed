const questions = [
  {
    num:1,
    "question_en": "Which is the largest planet in the solar system?",
    "question_hi": "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Jupiter", "Saturn", "Earth", "Mars"],
    "options_hi": ["बृहस्पति", "शनि", "पृथ्वी", "मंगल"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    num:2,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लील्मो मार्कोनी"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    num:3,
    "question_en": "Which Indian state is known as the 'Land of Rising Sun'?",
    "question_hi": "कौन सा भारतीय राज्य 'सूर्योदय की भूमि' कहा जाता है?",
    "options_en": ["Arunachal Pradesh", "Sikkim", "Nagaland", "Manipur"],
    "options_hi": ["अरुणाचल प्रदेश", "सिक्किम", "नागालैंड", "मणिपुर"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:4,
    "question_en": "Which gas is used in refrigerators?",
    "question_hi": "फ्रिज में कौन सी गैस का उपयोग होता है?",
    "options_en": ["Ammonia", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["अमोनिया", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Ammonia",
    "answer_hi": "अमोनिया",
    "attempted": false,
    "selected": ""
  },
  {
    num:5,
    "question_en": "Which is the largest ocean in the world?",
    "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Pacific", "Atlantic", "Indian", "Arctic"],
    "options_hi": ["प्रशांत महासागर", "अटलांटिक महासागर", "भारतीय महासागर", "आर्कटिक महासागर"],
    "answer_en": "Pacific",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    num:6,
    "question_en": "Who wrote the book 'Indian Polity'?",
    "question_hi": "'इंडियन पॉलिटी' पुस्तक किसने लिखी?",
    "options_en": ["M. Laxmikanth", "Bipan Chandra", "R.C. Majumdar", "Kautilya"],
    "options_hi": ["एम. लक्ष्मीकांत", "बिपन चंद्र", "आर. सी. मजूमदार", "कौटिल्य"],
    "answer_en": "M. Laxmikanth",
    "answer_hi": "एम. लक्ष्मीकांत",
    "attempted": false,
    "selected": ""
  },
  {
    num:7,
    "question_en": "Which Indian state is called the 'Land of Spices'?",
    "question_hi": "'मसालों की धरती' किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Goa"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    num:8,
    "question_en": "Which is the fastest marine animal?",
    "question_hi": "सबसे तेज़ जलीय जीव कौन सा है?",
    "options_en": ["Sailfish", "Shark", "Dolphin", "Marlin"],
    "options_hi": ["सैलफ़िश", "शार्क", "डॉल्फिन", "मार्लिन"],
    "answer_en": "Sailfish",
    "answer_hi": "सैलफ़िश",
    "attempted": false,
    "selected": ""
  },
  {
    num:9,
    "question_en": "Which is the national fruit of India?",
    "question_hi": "भारत का राष्ट्रीय फल कौन सा है?",
    "options_en": ["Mango", "Banana", "Apple", "Orange"],
    "options_hi": ["आम", "केला", "सेब", "संतरा"],
    "answer_en": "Mango",
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    num:10,
    "question_en": "Which Indian city is called the 'Gateway of India'?",
    "question_hi": "कौन सा भारतीय शहर 'गेटवे ऑफ इंडिया' कहा जाता है?",
    "options_en": ["Mumbai", "Kolkata", "Chennai", "Delhi"],
    "options_hi": ["मुंबई", "कोलकाता", "चेन्नई", "दिल्ली"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    num:11,
    "question_en": "Which gas is essential for respiration?",
    "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    num:12,
    "question_en": "Who is known as the Iron Man of India?",
    "question_hi": "भारत का लौह पुरुष किसे कहा जाता है?",
    "options_en": ["Sardar Patel", "Subhash Chandra Bose", "Bhagat Singh", "Jawaharlal Nehru"],
    "options_hi": ["सरदार पटेल", "सुभाष चंद्र बोस", "भगत सिंह", "जवाहरलाल नेहरू"],
    "answer_en": "Sardar Patel",
    "answer_hi": "सरदार पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    num:13,
    "question_en": "Which is the largest bone in human body?",
    "question_hi": "मानव शरीर की सबसे बड़ी हड्डी कौन सी है?",
    "options_en": ["Femur", "Skull", "Humerus", "Tibia"],
    "options_hi": ["फीमर", "खोपड़ी", "ह्यूमरस", "टिबिया"],
    "answer_en": "Femur",
    "answer_hi": "फीमर",
    "attempted": false,
    "selected": ""
  },
  {
    num:14,
    "question_en": "Which planet is known as the Morning Star?",
    "question_hi": "कौन सा ग्रह 'प्रभात तारा' कहलाता है?",
    "options_en": ["Venus", "Mars", "Mercury", "Jupiter"],
    "options_hi": ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    num:15,
    "question_en": "Which Indian state is famous for tea gardens?",
    "question_hi": "चाय के बागानों के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Assam", "Kerala", "West Bengal", "Tamil Nadu"],
    "options_hi": ["असम", "केरल", "पश्चिम बंगाल", "तमिलनाडु"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    num:16,
    "question_en": "Which metal is used to make electric wires?",
    "question_hi": "विद्युत तार बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Copper", "Iron", "Aluminium", "Silver"],
    "options_hi": ["तांबा", "लोहा", "एल्युमिनियम", "चांदी"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    num:17,
    "question_en": "Which is the national flower of India?",
    "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Lotus", "Rose", "Lily", "Sunflower"],
    "options_hi": ["कमल", "गुलाब", "लिली", "सूरजमुखी"],
    "answer_en": "Lotus",
    "answer_hi": "कमल",
    "attempted": false,
    "selected": ""
  },
  {
    num:18,
    "question_en": "Who discovered zero?",
    "question_hi": "शून्य की खोज किसने की?",
    "options_en": ["Aryabhatta", "Bhaskara", "Brahmagupta", "Chanakya"],
    "options_hi": ["आर्यभट्ट", "भास्कर", "ब्रह्मगुप्त", "चाणक्य"],
    "answer_en": "Aryabhatta",
    "answer_hi": "आर्यभट्ट",
    "attempted": false,
    "selected": ""
  },
  {
    num:19,
    "question_en": "Which river flows through Egypt?",
    "question_hi": "मिस्र से होकर कौन सी नदी बहती है?",
    "options_en": ["Nile", "Amazon", "Yangtze", "Tigris"],
    "options_hi": ["नील", "अमेज़न", "यांग्त्ज़े", "टाइग्रिस"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    num:20,
    "question_en": "Which is the smallest prime number?",
    "question_hi": "सबसे छोटी अभाज्य संख्या कौन सी है?",
    "options_en": ["1", "2", "3", "5"],
    "options_hi": ["1", "2", "3", "5"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    num:21,
    "question_en": "Which Indian city is called the Silicon Valley of India?",
    "question_hi": "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    num:22,
    "question_en": "Which organ helps in digestion?",
    "question_hi": "पाचन में कौन सा अंग सहायक होता है?",
    "options_en": ["Stomach", "Heart", "Lungs", "Kidney"],
    "options_hi": ["पेट", "हृदय", "फेफड़े", "गुर्दा"],
    "answer_en": "Stomach",
    "answer_hi": "पेट",
    "attempted": false,
    "selected": ""
  },
  {
    num:23,
    "question_en": "Which country gifted the Statue of Liberty?",
    "question_hi": "स्टैच्यू ऑफ लिबर्टी किस देश ने भेंट की?",
    "options_en": ["France", "UK", "Germany", "Italy"],
    "options_hi": ["फ्रांस", "यूके", "जर्मनी", "इटली"],
    "answer_en": "France",
    "answer_hi": "फ्रांस",
    "attempted": false,
    "selected": ""
  },
  {
    num:24,
    "question_en": "Which vitamin helps in vision?",
    "question_hi": "दृष्टि के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    num:25,
    "question_en": "Who was the first Prime Minister of India?",
    "question_hi": "भारत के पहले प्रधानमंत्री कौन थे?",
    "options_en": ["Jawaharlal Nehru", "Rajendra Prasad", "Lal Bahadur Shastri", "Indira Gandhi"],
    "options_hi": ["जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "लाल बहादुर शास्त्री", "इंदिरा गांधी"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    num:26,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "अग्निशामक यंत्रों में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:27,
    "question_en": "Which is the hardest natural substance?",
    "question_hi": "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    "options_en": ["Diamond", "Gold", "Iron", "Granite"],
    "options_hi": ["हीरा", "सोना", "लोहा", "ग्रेनाइट"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    num:28,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "भारत में सबसे लंबा समुद्र तट किस राज्य का है?",
    "options_en": ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Maharashtra"],
    "options_hi": ["गुजरात", "तमिलनाडु", "आंध्र प्रदेश", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    num:29,
    "question_en": "Which gas is filled in LPG cylinder?",
    "question_hi": "एलपीजी सिलेंडर में कौन सी गैस भरी जाती है?",
    "options_en": ["Propane & Butane", "Methane", "Hydrogen", "Oxygen"],
    "options_hi": ["प्रोपेन व ब्यूटेन", "मीथेन", "हाइड्रोजन", "ऑक्सीजन"],
    "answer_en": "Propane & Butane",
    "answer_hi": "प्रोपेन व ब्यूटेन",
    "attempted": false,
    "selected": ""
  },
  {
    num:30,
    "question_en": "Which is the largest continent?",
    "question_hi": "सबसे बड़ा महाद्वीप कौन सा है?",
    "options_en": ["Asia", "Africa", "Europe", "Australia"],
    "options_hi": ["एशिया", "अफ्रीका", "यूरोप", "ऑस्ट्रेलिया"],
    "answer_en": "Asia",
    "answer_hi": "एशिया",
    "attempted": false,
    "selected": ""
  },
  {
    num:31,
    "question_en": "Which blood group is universal donor?",
    "question_hi": "सार्वभौमिक रक्तदाता कौन सा रक्त समूह है?",
    "options_en": ["O-", "O+", "AB+", "AB-"],
    "options_hi": ["O-", "O+", "AB+", "AB-"],
    "answer_en": "O-",
    "answer_hi": "O-",
    "attempted": false,
    "selected": ""
  },
  {
    num:32,
    "question_en": "Which Indian festival is called the festival of colors?",
    "question_hi": "रंगों का त्योहार किसे कहा जाता है?",
    "options_en": ["Holi", "Diwali", "Eid", "Pongal"],
    "options_hi": ["होली", "दिवाली", "ईद", "पोंगल"],
    "answer_en": "Holi",
    "answer_hi": "होली",
    "attempted": false,
    "selected": ""
  },
  {
    num:33,
    "question_en": "Which instrument measures temperature?",
    "question_hi": "तापमान मापने का यंत्र कौन सा है?",
    "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Thermometer",
    "answer_hi": "थर्मामीटर",
    "attempted": false,
    "selected": ""
  },
  {
    num:34,
    "question_en": "Which ocean is on the east coast of India?",
    "question_hi": "भारत के पूर्वी तट पर कौन सा महासागर है?",
    "options_en": ["Bay of Bengal", "Arabian Sea", "Indian Ocean", "Pacific Ocean"],
    "options_hi": ["बंगाल की खाड़ी", "अरब सागर", "हिंद महासागर", "प्रशांत महासागर"],
    "answer_en": "Bay of Bengal",
    "answer_hi": "बंगाल की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    num:35,
    "question_en": "Which is the national tree of India?",
    "question_hi": "भारत का राष्ट्रीय वृक्ष कौन सा है?",
    "options_en": ["Banyan", "Peepal", "Neem", "Mango"],
    "options_hi": ["बरगद", "पीपल", "नीम", "आम"],
    "answer_en": "Banyan",
    "answer_hi": "बरगद",
    "attempted": false,
    "selected": ""
  },
  {
    num:36,
    "question_en": "Which organ controls the nervous system?",
    "question_hi": "तंत्रिका तंत्र को कौन सा अंग नियंत्रित करता है?",
    "options_en": ["Brain", "Heart", "Spinal Cord", "Lungs"],
    "options_hi": ["मस्तिष्क", "हृदय", "रीढ़ की हड्डी", "फेफड़े"],
    "answer_en": "Brain",
    "answer_hi": "मस्तिष्क",
    "attempted": false,
    "selected": ""
  },
  {
    num:37,
    "question_en": "Which is the capital of Australia?",
    "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
    "options_en": ["Canberra", "Sydney", "Melbourne", "Perth"],
    "options_hi": ["कैनबरा", "सिडनी", "मेलबर्न", "पर्थ"],
    "answer_en": "Canberra",
    "answer_hi": "कैनबरा",
    "attempted": false,
    "selected": ""
  },
  {
    num:38,
    "question_en": "Which gas is released during photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    num:39,
    "question_en": "Which Indian freedom fighter is known as Netaji?",
    "question_hi": "नेताजी किस स्वतंत्रता सेनानी को कहा जाता है?",
    "options_en": ["Subhash Chandra Bose", "Bhagat Singh", "Sardar Patel", "Tilak"],
    "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "सरदार पटेल", "तिलक"],
    "answer_en": "Subhash Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },
  {
    num:40,
    "question_en": "Which is the largest mammal?",
    "question_hi": "सबसे बड़ा स्तनधारी जीव कौन सा है?",
    "options_en": ["Blue Whale", "Elephant", "Giraffe", "Hippopotamus"],
    "options_hi": ["नीली व्हेल", "हाथी", "जिराफ", "दरियाई घोड़ा"],
    "answer_en": "Blue Whale",
    "answer_hi": "नीली व्हेल",
    "attempted": false,
    "selected": ""
  },
  {
    num:41,
    "question_en": "Which vitamin is good for bones?",
    "question_hi": "हड्डियों के लिए कौन सा विटामिन अच्छा है?",
    "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
    "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    num:42,
    "question_en": "Which river is called the Ganga of the South?",
    "question_hi": "दक्षिण की गंगा किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Tungabhadra"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "तुंगभद्रा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    num:43,
    "question_en": "Which metal is rust-free?",
    "question_hi": "कौन सी धातु में जंग नहीं लगती?",
    "options_en": ["Gold", "Iron", "Copper", "Aluminium"],
    "options_hi": ["सोना", "लोहा", "तांबा", "एल्युमिनियम"],
    "answer_en": "Gold",
    "answer_hi": "सोना",
    "attempted": false,
    "selected": ""
  },
  {
    num:44,
    "question_en": "Which is the capital of Japan?",
    "question_hi": "जापान की राजधानी क्या है?",
    "options_en": ["Tokyo", "Osaka", "Kyoto", "Hiroshima"],
    "options_hi": ["टोक्यो", "ओसाका", "क्योटो", "हिरोशिमा"],
    "answer_en": "Tokyo",
    "answer_hi": "टोक्यो",
    "attempted": false,
    "selected": ""
  },
  {
    num:45,
    "question_en": "Which Indian state is famous for backwaters?",
    "question_hi": "बैकवाटर्स के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Kerala", "Goa", "Odisha", "West Bengal"],
    "options_hi": ["केरल", "गोवा", "ओडिशा", "पश्चिम बंगाल"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    num:46,
    "question_en": "Which is the smallest continent?",
    "question_hi": "सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Australia", "Europe", "Antarctica", "South America"],
    "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    num:47,
    "question_en": "Which gas is used in welding?",
    "question_hi": "वेल्डिंग में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "एसीटिलीन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Acetylene",
    "answer_hi": "एसीटिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    num:48,
    "question_en": "Which Indian monument is called the Symbol of Love?",
    "question_hi": "प्रेम का प्रतीक किस भारतीय स्मारक को कहा जाता है?",
    "options_en": ["Taj Mahal", "Qutub Minar", "Red Fort", "Hawa Mahal"],
    "options_hi": ["ताजमहल", "कुतुब मीनार", "लाल किला", "हवा महल"],
    "answer_en": "Taj Mahal",
    "answer_hi": "ताजमहल",
    "attempted": false,
    "selected": ""
  },
  {
    num:49,
    "question_en": "Which is the main source of energy for Earth?",
    "question_hi": "पृथ्वी के लिए ऊर्जा का मुख्य स्रोत क्या है?",
    "options_en": ["Sun", "Moon", "Coal", "Wind"],
    "options_hi": ["सूर्य", "चंद्रमा", "कोयला", "हवा"],
    "answer_en": "Sun",
    "answer_hi": "सूर्य",
    "attempted": false,
    "selected": ""
  },
  {
    num:50,
    "question_en": "Which part of the plant conducts photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    "options_en": ["Leaf", "Root", "Stem", "Flower"],
    "options_hi": ["पत्ती", "जड़", "तना", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
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