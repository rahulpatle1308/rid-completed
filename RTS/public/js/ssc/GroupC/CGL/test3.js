const questions = [
  {
     num:1,
    "question_en": "Which Indian state has the highest population?",
    "question_hi": "भारत में सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:2,
    "question_en": "What is the chemical formula of common salt?",
    "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "Na2CO3", "KCl", "CaCl2"],
    "options_hi": ["NaCl", "Na2CO3", "KCl", "CaCl2"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
     num:3,
    "question_en": "Who was the founder of the Maurya Dynasty?",
    "question_hi": "मौर्य वंश का संस्थापक कौन था?",
    "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Bimbisara"],
    "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "बिम्बिसार"],
    "answer_en": "Chandragupta Maurya",
    "answer_hi": "चंद्रगुप्त मौर्य",
    "attempted": false,
    "selected": ""
  },
  {
     num:4,
    "question_en": "Which organ controls all activities of the body?",
    "question_hi": "शरीर की सभी गतिविधियों को कौन सा अंग नियंत्रित करता है?",
    "options_en": ["Brain", "Heart", "Liver", "Kidney"],
    "options_hi": ["मस्तिष्क", "हृदय", "यकृत", "गुर्दा"],
    "answer_en": "Brain",
    "answer_hi": "मस्तिष्क",
    "attempted": false,
    "selected": ""
  },
  {
     num:5,
    "question_en": "Which is the hardest natural substance?",
    "question_hi": "प्राकृतिक रूप से सबसे कठोर पदार्थ कौन सा है?",
    "options_en": ["Diamond", "Iron", "Gold", "Granite"],
    "options_hi": ["हीरा", "लोहा", "सोना", "ग्रेनाइट"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
     num:6,
    "question_en": "Which Indian city is known as the Financial Capital of India?",
    "question_hi": "भारत की वित्तीय राजधानी कौन सा शहर है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
     num:7,
    "question_en": "Which vitamin deficiency causes rickets?",
    "question_hi": "किस विटामिन की कमी से रिकेट्स रोग होता है?",
    "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
    "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
     num:8,
    "question_en": "Which Mughal emperor was known as Zinda Pir?",
    "question_hi": "'जिंदा पीर' किस मुगल शासक को कहा जाता था?",
    "options_en": ["Aurangzeb", "Akbar", "Babur", "Jahangir"],
    "options_hi": ["औरंगज़ेब", "अकबर", "बाबर", "जहाँगीर"],
    "answer_en": "Aurangzeb",
    "answer_hi": "औरंगज़ेब",
    "attempted": false,
    "selected": ""
  },
  {
     num:9,
    "question_en": "Which instrument is used to measure humidity?",
    "question_hi": "आर्द्रता मापने का यंत्र कौन सा है?",
    "options_en": ["Hygrometer", "Thermometer", "Barometer", "Anemometer"],
    "options_hi": ["हाइग्रोमीटर", "थर्मामीटर", "बैरोमीटर", "एनीमोमीटर"],
    "answer_en": "Hygrometer",
    "answer_hi": "हाइग्रोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
     num:10,
    "question_en": "Which river flows through London?",
    "question_hi": "लंदन शहर से कौन सी नदी बहती है?",
    "options_en": ["Thames", "Seine", "Danube", "Rhine"],
    "options_hi": ["थेम्स", "सीन", "डेन्यूब", "राइन"],
    "answer_en": "Thames",
    "answer_hi": "थेम्स",
    "attempted": false,
    "selected": ""
  },

  {
     num:11,
    "question_en": "Which metal is known as quicksilver?",
    "question_hi": "क्विकसिल्वर किस धातु को कहा जाता है?",
    "options_en": ["Mercury", "Silver", "Aluminium", "Tin"],
    "options_hi": ["पारा", "चांदी", "एल्युमिनियम", "टिन"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
     num:12,
    "question_en": "Who wrote 'Vande Mataram'?",
    "question_hi": "'वंदे मातरम्' किसने लिखा?",
    "options_en": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Iqbal", "Premchand"],
    "options_hi": ["बंकिम चंद्र चटर्जी", "रवींद्रनाथ टैगोर", "इक़बाल", "प्रेमचंद"],
    "answer_en": "Bankim Chandra Chatterjee",
    "answer_hi": "बंकिम चंद्र चटर्जी",
    "attempted": false,
    "selected": ""
  },
  {
     num:13,
    "question_en": "Which Indian state is known as the Spice Garden of India?",
    "question_hi": "भारत का मसालों का बगीचा किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Assam"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "असम"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
     num:14,
    "question_en": "What is the boiling point of water?",
    "question_hi": "पानी का क्वथनांक क्या है?",
    "options_en": ["100°C", "0°C", "50°C", "90°C"],
    "options_hi": ["100°C", "0°C", "50°C", "90°C"],
    "answer_en": "100°C",
    "answer_hi": "100°C",
    "attempted": false,
    "selected": ""
  },
  {
     num:15,
    "question_en": "Which planet has the maximum number of moons?",
    "question_hi": "किस ग्रह के सबसे अधिक उपग्रह हैं?",
    "options_en": ["Jupiter", "Saturn", "Mars", "Earth"],
    "options_hi": ["बृहस्पति", "शनि", "मंगल", "पृथ्वी"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
     num:16,
    "question_en": "Which Indian freedom movement started in 1942?",
    "question_hi": "1942 में कौन सा भारतीय स्वतंत्रता आंदोलन शुरू हुआ?",
    "options_en": ["Quit India Movement", "Non-Cooperation", "Civil Disobedience", "Swadeshi Movement"],
    "options_hi": ["भारत छोड़ो आंदोलन", "असहयोग आंदोलन", "सविनय अवज्ञा", "स्वदेशी आंदोलन"],
    "answer_en": "Quit India Movement",
    "answer_hi": "भारत छोड़ो आंदोलन",
    "attempted": false,
    "selected": ""
  },
  {
     num:17,
    "question_en": "Which gas is most abundant in the Earth's atmosphere?",
    "question_hi": "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
    "options_en": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
     num:18,
    "question_en": "Which Indian monument is also called the Victory Tower?",
    "question_hi": "किस भारतीय स्मारक को विजय स्तंभ भी कहा जाता है?",
    "options_en": ["Vijay Stambh, Chittorgarh", "Qutub Minar", "Charminar", "Gateway of India"],
    "options_hi": ["विजय स्तंभ, चित्तौड़गढ़", "कुतुब मीनार", "चारमीनार", "गेटवे ऑफ इंडिया"],
    "answer_en": "Vijay Stambh, Chittorgarh",
    "answer_hi": "विजय स्तंभ, चित्तौड़गढ़",
    "attempted": false,
    "selected": ""
  },
  {
     num:19,
    "question_en": "Which part of the plant absorbs water?",
    "question_hi": "पौधे का कौन सा भाग जल अवशोषित करता है?",
    "options_en": ["Root", "Leaf", "Stem", "Flower"],
    "options_hi": ["जड़", "पत्ती", "तना", "फूल"],
    "answer_en": "Root",
    "answer_hi": "जड़",
    "attempted": false,
    "selected": ""
  },
  {
     num:20,
    "question_en": "Which Indian state shares the longest international boundary?",
    "question_hi": "किस भारतीय राज्य की अंतरराष्ट्रीय सीमा सबसे लंबी है?",
    "options_en": ["West Bengal", "Rajasthan", "Assam", "Punjab"],
    "options_hi": ["पश्चिम बंगाल", "राजस्थान", "असम", "पंजाब"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },

  {
     num:21,
    "question_en": "Which disease is caused by deficiency of insulin?",
    "question_hi": "इंसुलिन की कमी से कौन सा रोग होता है?",
    "options_en": ["Diabetes", "Asthma", "Cancer", "Tuberculosis"],
    "options_hi": ["मधुमेह", "अस्थमा", "कैंसर", "क्षय रोग"],
    "answer_en": "Diabetes",
    "answer_hi": "मधुमेह",
    "attempted": false,
    "selected": ""
  },
  {
     num:22,
    "question_en": "Who was the first Indian woman President?",
    "question_hi": "भारत की पहली महिला राष्ट्रपति कौन थीं?",
    "options_en": ["Pratibha Patil", "Indira Gandhi", "Sonia Gandhi", "Sarojini Naidu"],
    "options_hi": ["प्रतिभा पाटिल", "इंदिरा गांधी", "सोनिया गांधी", "सरोजिनी नायडू"],
    "answer_en": "Pratibha Patil",
    "answer_hi": "प्रतिभा पाटिल",
    "attempted": false,
    "selected": ""
  },
  {
     num:23,
    "question_en": "Which soil is best suited for cotton cultivation?",
    "question_hi": "कपास की खेती के लिए कौन सी मिट्टी सबसे उपयुक्त है?",
    "options_en": ["Black Soil", "Red Soil", "Alluvial Soil", "Laterite Soil"],
    "options_hi": ["काली मिट्टी", "लाल मिट्टी", "जलोढ़ मिट्टी", "लेटराइट मिट्टी"],
    "answer_en": "Black Soil",
    "answer_hi": "काली मिट्टी",
    "attempted": false,
    "selected": ""
  },
  {
     num:24,
    "question_en": "Which Indian city is known as the City of Lakes?",
    "question_hi": "झीलों का शहर किस भारतीय शहर को कहा जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
    "options_hi": ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
     num:25,
    "question_en": "Which gas turns lime water milky?",
    "question_hi": "कौन सी गैस चूने के पानी को दूधिया बनाती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
     num:26,
    "question_en": "Which Indian state has the highest literacy rate?",
    "question_hi": "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
    "options_en": ["Kerala", "Goa", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["केरल", "गोवा", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
     num:27,
    "question_en": "Who is called the Nightingale of India?",
    "question_hi": "भारत की कोकिला किसे कहा जाता है?",
    "options_en": ["Sarojini Naidu", "Lata Mangeshkar", "Indira Gandhi", "Annie Besant"],
    "options_hi": ["सरोजिनी नायडू", "लता मंगेशकर", "इंदिरा गांधी", "एनी बेसेंट"],
    "answer_en": "Sarojini Naidu",
    "answer_hi": "सरोजिनी नायडू",
    "attempted": false,
    "selected": ""
  },
  {
     num:28,
    "question_en": "Which planet is known as the Evening Star?",
    "question_hi": "कौन सा ग्रह संध्या तारा कहलाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Mercury"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "बुध"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
     num:29,
    "question_en": "Which Indian state is the largest producer of tea?",
    "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
     num:30,
    "question_en": "What is the SI unit of electric current?",
    "question_hi": "विद्युत धारा की SI इकाई क्या है?",
    "options_en": ["Ampere", "Volt", "Ohm", "Watt"],
    "options_hi": ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पीयर",
    "attempted": false,
    "selected": ""
  },

  {
     num:31,
    "question_en": "Which Indian river is the longest?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Godavari", "Yamuna", "Narmada"],
    "options_hi": ["गंगा", "गोदावरी", "यमुना", "नर्मदा"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
     num:32,
    "question_en": "Which metal is used for galvanization?",
    "question_hi": "गैल्वनाइजेशन में कौन सी धातु उपयोग की जाती है?",
    "options_en": ["Zinc", "Copper", "Iron", "Aluminium"],
    "options_hi": ["जस्ता", "तांबा", "लोहा", "एल्युमिनियम"],
    "answer_en": "Zinc",
    "answer_hi": "जस्ता",
    "attempted": false,
    "selected": ""
  },
  {
     num:33,
    "question_en": "Who was the first Indian to win a Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    "options_en": ["Rabindranath Tagore", "C. V. Raman", "Mother Teresa", "Amartya Sen"],
    "options_hi": ["रवींद्रनाथ टैगोर", "सी. वी. रमन", "मदर टेरेसा", "अमर्त्य सेन"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
     num:34,
    "question_en": "Which Indian city is called the City of Nawabs?",
    "question_hi": "नवाबों का शहर किसे कहा जाता है?",
    "options_en": ["Lucknow", "Hyderabad", "Bhopal", "Delhi"],
    "options_hi": ["लखनऊ", "हैदराबाद", "भोपाल", "दिल्ली"],
    "answer_en": "Lucknow",
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
     num:35,
    "question_en": "Which vitamin is water soluble?",
    "question_hi": "कौन सा विटामिन जल में घुलनशील है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin E"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन E"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
     num:36,
    "question_en": "Which organ is affected by hepatitis?",
    "question_hi": "हेपेटाइटिस किस अंग को प्रभावित करता है?",
    "options_en": ["Liver", "Kidney", "Heart", "Lungs"],
    "options_hi": ["यकृत", "गुर्दा", "हृदय", "फेफड़े"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
     num:37,
    "question_en": "Which Indian state is called the Land of Rising Sun?",
    "question_hi": "भारत में 'उगते सूर्य की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Arunachal Pradesh", "Assam", "Nagaland", "Manipur"],
    "options_hi": ["अरुणाचल प्रदेश", "असम", "नागालैंड", "मणिपुर"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:38,
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
     num:39,
    "question_en": "Which Indian satellite was the first?",
    "question_hi": "भारत का पहला उपग्रह कौन सा था?",
    "options_en": ["Aryabhata", "INSAT", "Bhaskara", "Rohini"],
    "options_hi": ["आर्यभट्ट", "इनसैट", "भास्कर", "रोहिणी"],
    "answer_en": "Aryabhata",
    "answer_hi": "आर्यभट्ट",
    "attempted": false,
    "selected": ""
  },
  {
     num:40,
    "question_en": "Which part of the Constitution deals with Fundamental Rights?",
    "question_hi": "मौलिक अधिकार संविधान के किस भाग में हैं?",
    "options_en": ["Part III", "Part II", "Part IV", "Part V"],
    "options_hi": ["भाग III", "भाग II", "भाग IV", "भाग V"],
    "answer_en": "Part III",
    "answer_hi": "भाग III",
    "attempted": false,
    "selected": ""
  },

  {
     num:41,
    "question_en": "Which Indian state has the largest forest cover?",
    "question_hi": "भारत में सबसे अधिक वन क्षेत्र किस राज्य में है?",
    "options_en": ["Madhya Pradesh", "Arunachal Pradesh", "Odisha", "Chhattisgarh"],
    "options_hi": ["मध्य प्रदेश", "अरुणाचल प्रदेश", "ओडिशा", "छत्तीसगढ़"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:42,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "हँसाने वाली गैस किसे कहा जाता है?",
    "options_en": ["Nitrous Oxide", "Oxygen", "Methane", "Ammonia"],
    "options_hi": ["नाइट्रस ऑक्साइड", "ऑक्सीजन", "मीथेन", "अमोनिया"],
    "answer_en": "Nitrous Oxide",
    "answer_hi": "नाइट्रस ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
     num:43,
    "question_en": "Which Indian city is known as the City of Dreams?",
    "question_hi": "'सपनों का शहर' किसे कहा जाता है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
     num:44,
    "question_en": "Which vitamin helps in calcium absorption?",
    "question_hi": "कैल्शियम के अवशोषण में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin D", "Vitamin C", "Vitamin A", "Vitamin K"],
    "options_hi": ["विटामिन D", "विटामिन C", "विटामिन A", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
     num:45,
    "question_en": "Which Indian dam is the longest?",
    "question_hi": "भारत का सबसे लंबा बांध कौन सा है?",
    "options_en": ["Hirakud Dam", "Bhakra Nangal", "Tehri Dam", "Sardar Sarovar"],
    "options_hi": ["हीराकुंड बांध", "भाखड़ा नांगल", "टिहरी बांध", "सरदार सरोवर"],
    "answer_en": "Hirakud Dam",
    "answer_hi": "हीराकुंड बांध",
    "attempted": false,
    "selected": ""
  },
  {
     num:46,
    "question_en": "Which organ produces bile?",
    "question_hi": "पित्त का निर्माण कौन सा अंग करता है?",
    "options_en": ["Liver", "Pancreas", "Stomach", "Gall Bladder"],
    "options_hi": ["यकृत", "अग्न्याशय", "आमाशय", "पित्ताशय"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
     num:47,
    "question_en": "Which Indian state is the largest producer of sugarcane?",
    "question_hi": "गन्ने का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "कर्नाटक", "तमिलनाडु"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:48,
    "question_en": "Which instrument is used to measure wind speed?",
    "question_hi": "पवन की गति मापने का यंत्र कौन सा है?",
    "options_en": ["Anemometer", "Barometer", "Thermometer", "Hygrometer"],
    "options_hi": ["एनीमोमीटर", "बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
    "answer_en": "Anemometer",
    "answer_hi": "एनीमोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
     num:49,
    "question_en": "Who was the first Chief Justice of India?",
    "question_hi": "भारत के पहले मुख्य न्यायाधीश कौन थे?",
    "options_en": ["H. J. Kania", "B. R. Ambedkar", "S. Radhakrishnan", "Rajendra Prasad"],
    "options_hi": ["एच. जे. कनिया", "बी. आर. अंबेडकर", "एस. राधाकृष्णन", "राजेंद्र प्रसाद"],
    "answer_en": "H. J. Kania",
    "answer_hi": "एच. जे. कनिया",
    "attempted": false,
    "selected": ""
  },
  {
     num:50,
    "question_en": "Which planet is known as the Morning Star?",
    "question_hi": "कौन सा ग्रह प्रातः तारा कहलाता है?",
    "options_en": ["Venus", "Mercury", "Mars", "Jupiter"],
    "options_hi": ["शुक्र", "बुध", "मंगल", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
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