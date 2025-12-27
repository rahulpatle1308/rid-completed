const questions = [
  {
    "num":1,
    "question_en": "Which Indian state is known as the Spice Garden of India?",
    "question_hi": "भारत का मसाला उद्यान किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Assam"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "असम"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which metal is used in making coins?",
    "question_hi": "सिक्के बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Copper", "Nickel", "Aluminium", "Alloy"],
    "options_hi": ["तांबा", "निकेल", "एल्युमिनियम", "मिश्र धातु"],
    "answer_en": "Alloy",
    "answer_hi": "मिश्र धातु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which Indian city is known as the City of Nawabs?",
    "question_hi": "'नवाबों का शहर' किसे कहा जाता है?",
    "options_en": ["Lucknow", "Hyderabad", "Bhopal", "Delhi"],
    "options_hi": ["लखनऊ", "हैदराबाद", "भोपाल", "दिल्ली"],
    "answer_en": "Lucknow",
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which planet is known as the Morning Star?",
    "question_hi": "'भोर का तारा' किस ग्रह को कहा जाता है?",
    "options_en": ["Mercury", "Venus", "Mars", "Jupiter"],
    "options_hi": ["बुध", "शुक्र", "मंगल", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian river originates from Amarkantak?",
    "question_hi": "कौन सी नदी अमरकंटक से निकलती है?",
    "options_en": ["Narmada", "Son", "Mahanadi", "All of these"],
    "options_hi": ["नर्मदा", "सोन", "महानदी", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which vitamin is essential for healthy eyesight?",
    "question_hi": "अच्छी दृष्टि के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which Indian city is known as the City of Seven Islands?",
    "question_hi": "'सात द्वीपों का शहर' किसे कहा जाता है?",
    "options_en": ["Mumbai", "Chennai", "Kolkata", "Kochi"],
    "options_hi": ["मुंबई", "चेन्नई", "कोलकाता", "कोच्चि"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "अग्निशामक यंत्रों में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian state is the largest producer of rice?",
    "question_hi": "चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["West Bengal", "Punjab", "Andhra Pradesh", "Uttar Pradesh"],
    "options_hi": ["पश्चिम बंगाल", "पंजाब", "आंध्र प्रदेश", "उत्तर प्रदेश"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which organ pumps blood in the human body?",
    "question_hi": "मानव शरीर में रक्त पंप करने वाला अंग कौन सा है?",
    "options_en": ["Brain", "Heart", "Lungs", "Kidney"],
    "options_hi": ["मस्तिष्क", "हृदय", "फेफड़े", "गुर्दा"],
    "answer_en": "Heart",
    "answer_hi": "हृदय",
    "attempted": false,
    "selected": ""
  },

  {
    "num":11,
    "question_en": "Which Indian state is known as the Land of Festivals?",
    "question_hi": "'त्योहारों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Rajasthan", "Odisha", "West Bengal", "Assam"],
    "options_hi": ["राजस्थान", "ओडिशा", "पश्चिम बंगाल", "असम"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which metal is used to make aircraft bodies?",
    "question_hi": "विमान के ढांचे बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Iron", "Copper", "Aluminium", "Steel"],
    "options_hi": ["लोहा", "तांबा", "एल्युमिनियम", "स्टील"],
    "answer_en": "Aluminium",
    "answer_hi": "एल्युमिनियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian city is known as the City of Weavers?",
    "question_hi": "'बुनकरों का शहर' किसे कहा जाता है?",
    "options_en": ["Varanasi", "Surat", "Panipat", "Bhiwandi"],
    "options_hi": ["वाराणसी", "सूरत", "पानीपत", "भिवंडी"],
    "answer_en": "Panipat",
    "answer_hi": "पानीपत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which planet has the maximum number of moons?",
    "question_hi": "सबसे अधिक चंद्रमा किस ग्रह के हैं?",
    "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which Indian river flows into the Arabian Sea?",
    "question_hi": "कौन सी नदी अरब सागर में गिरती है?",
    "options_en": ["Godavari", "Krishna", "Narmada", "Mahanadi"],
    "options_hi": ["गोदावरी", "कृष्णा", "नर्मदा", "महानदी"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which vitamin is known as anti-hemorrhagic vitamin?",
    "question_hi": "एंटी-हैमरेजिक विटामिन किसे कहा जाता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which Indian city is known as the Gateway of South India?",
    "question_hi": "'दक्षिण भारत का प्रवेश द्वार' किसे कहा जाता है?",
    "options_en": ["Chennai", "Madurai", "Kanyakumari", "Bengaluru"],
    "options_hi": ["चेन्नई", "मदुरै", "कन्याकुमारी", "बेंगलुरु"],
    "answer_en": "Chennai",
    "answer_hi": "चेन्नई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which gas is essential for combustion?",
    "question_hi": "दहन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which Indian state is the largest producer of rubber?",
    "question_hi": "रबर का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Tamil Nadu", "Kerala", "Karnataka", "Assam"],
    "options_hi": ["तमिलनाडु", "केरल", "कर्नाटक", "असम"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which organ helps in excretion?",
    "question_hi": "उत्सर्जन में सहायक अंग कौन सा है?",
    "options_en": ["Lungs", "Kidney", "Liver", "Heart"],
    "options_hi": ["फेफड़े", "गुर्दा", "यकृत", "हृदय"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },

  {
    "num":21,
    "question_en": "Which Indian state is known as the Sugar Bowl of India?",
    "question_hi": "'भारत का चीनी कटोरा' किस राज्य को कहा जाता है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Tamil Nadu", "Karnataka"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which metal is used to make utensils?",
    "question_hi": "बर्तन बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Iron", "Copper", "Aluminium", "All of these"],
    "options_hi": ["लोहा", "तांबा", "एल्युमिनियम", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which Indian city is known as the City of Temples?",
    "question_hi": "'मंदिरों का शहर' किसे कहा जाता है?",
    "options_en": ["Varanasi", "Madurai", "Bhubaneswar", "All of these"],
    "options_hi": ["वाराणसी", "मदुरै", "भुवनेश्वर", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which planet is known as the Blue Planet?",
    "question_hi": "'नीला ग्रह' किसे कहा जाता है?",
    "options_en": ["Mars", "Earth", "Neptune", "Uranus"],
    "options_hi": ["मंगल", "पृथ्वी", "वरुण", "अरुण"],
    "answer_en": "Earth",
    "answer_hi": "पृथ्वी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which Indian river is known as Dakshin Ganga?",
    "question_hi": "'दक्षिण गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Kaveri", "Krishna", "Godavari", "Tungabhadra"],
    "options_hi": ["कावेरी", "कृष्णा", "गोदावरी", "तुंगभद्रा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which vitamin deficiency causes night blindness?",
    "question_hi": "रतौंधी रोग किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which Indian city is known as the Steel City of India?",
    "question_hi": "'भारत का स्टील सिटी' किसे कहा जाता है?",
    "options_en": ["Bhilai", "Rourkela", "Jamshedpur", "Durgapur"],
    "options_hi": ["भिलाई", "राउरकेला", "जमशेदपुर", "दुर्गापुर"],
    "answer_en": "Jamshedpur",
    "answer_hi": "जमशेदपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which gas is used in refrigeration?",
    "question_hi": "रेफ्रिजरेशन में कौन सी गैस उपयोग होती है?",
    "options_en": ["Ammonia", "Chlorine", "Oxygen", "Hydrogen"],
    "options_hi": ["अमोनिया", "क्लोरीन", "ऑक्सीजन", "हाइड्रोजन"],
    "answer_en": "Ammonia",
    "answer_hi": "अमोनिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian state is the largest producer of jute?",
    "question_hi": "जूट का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Bihar", "Assam", "West Bengal", "Odisha"],
    "options_hi": ["बिहार", "असम", "पश्चिम बंगाल", "ओडिशा"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which organ controls balance of the body?",
    "question_hi": "शरीर का संतुलन कौन सा अंग नियंत्रित करता है?",
    "options_en": ["Brain", "Cerebellum", "Spinal Cord", "Inner Ear"],
    "options_hi": ["मस्तिष्क", "सेरिबैलम", "रीढ़ की हड्डी", "आंतरिक कान"],
    "answer_en": "Cerebellum",
    "answer_hi": "सेरिबैलम",
    "attempted": false,
    "selected": ""
  },

  {
    "num":31,
    "question_en": "Which Indian state is known as the Land of Clouds?",
    "question_hi": "'मेघों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Assam", "Meghalaya", "Sikkim", "Arunachal Pradesh"],
    "options_hi": ["असम", "मेघालय", "सिक्किम", "अरुणाचल प्रदेश"],
    "answer_en": "Meghalaya",
    "answer_hi": "मेघालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which metal is used in making batteries?",
    "question_hi": "बैटरी बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Zinc", "Lead", "Lithium", "All of these"],
    "options_hi": ["जस्ता", "सीसा", "लिथियम", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian city is known as the Cleanest City of India?",
    "question_hi": "'भारत का सबसे स्वच्छ शहर' किसे कहा जाता है?",
    "options_en": ["Surat", "Indore", "Bhopal", "Raipur"],
    "options_hi": ["सूरत", "इंदौर", "भोपाल", "रायपुर"],
    "answer_en": "Indore",
    "answer_hi": "इंदौर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which planet has the strongest gravity?",
    "question_hi": "सबसे अधिक गुरुत्वाकर्षण किस ग्रह का है?",
    "options_en": ["Earth", "Saturn", "Jupiter", "Neptune"],
    "options_hi": ["पृथ्वी", "शनि", "बृहस्पति", "वरुण"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which Indian river is the longest river of South India?",
    "question_hi": "दक्षिण भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Kaveri", "Krishna", "Godavari", "Periyar"],
    "options_hi": ["कावेरी", "कृष्णा", "गोदावरी", "पेरियार"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which vitamin is essential for bone growth?",
    "question_hi": "हड्डियों की वृद्धि के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन E"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian city is known as the City of Bridges?",
    "question_hi": "'पुलों का शहर' किसे कहा जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Chennai", "Patna"],
    "options_hi": ["कोलकाता", "मुंबई", "चेन्नई", "पटना"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which gas is used in water purification?",
    "question_hi": "जल शुद्धिकरण में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Oxygen", "Chlorine", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "क्लोरीन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Chlorine",
    "answer_hi": "क्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Indian state is the largest producer of spices?",
    "question_hi": "मसालों का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which organ produces insulin?",
    "question_hi": "इंसुलिन का निर्माण कौन सा अंग करता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "आमाशय"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },

  {
    "num":41,
    "question_en": "Which Indian state is known as the Tea Garden of India?",
    "question_hi": "'भारत का चाय उद्यान' किस राज्य को कहा जाता है?",
    "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which metal is used in making jewellery?",
    "question_hi": "आभूषण बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Gold", "Silver", "Platinum", "All of these"],
    "options_hi": ["सोना", "चांदी", "प्लैटिनम", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which Indian city is known as the City of Learning?",
    "question_hi": "'शिक्षा नगरी' किसे कहा जाता है?",
    "options_en": ["Nalanda", "Varanasi", "Pune", "Kolkata"],
    "options_hi": ["नालंदा", "वाराणसी", "पुणे", "कोलकाता"],
    "answer_en": "Nalanda",
    "answer_hi": "नालंदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which planet has the coldest temperature?",
    "question_hi": "सबसे ठंडा ग्रह कौन सा है?",
    "options_en": ["Neptune", "Uranus", "Saturn", "Mars"],
    "options_hi": ["वरुण", "अरुण", "शनि", "मंगल"],
    "answer_en": "Uranus",
    "answer_hi": "अरुण",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian river is called the Lifeline of Madhya Pradesh?",
    "question_hi": "मध्य प्रदेश की जीवन रेखा किस नदी को कहा जाता है?",
    "options_en": ["Narmada", "Tapi", "Chambal", "Betwa"],
    "options_hi": ["नर्मदा", "ताप्ती", "चंबल", "बेतवा"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which vitamin deficiency causes rickets?",
    "question_hi": "रिकेट्स रोग किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian city is known as the Electronic City of India?",
    "question_hi": "'भारत का इलेक्ट्रॉनिक सिटी' किसे कहा जाता है?",
    "options_en": ["Bengaluru", "Hyderabad", "Chennai", "Noida"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "चेन्नई", "नोएडा"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which gas is used in soda water?",
    "question_hi": "सोडा वाटर में कौन सी गैस मिलाई जाती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian state is the largest producer of coffee?",
    "question_hi": "कॉफी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which organ controls hormones in the body?",
    "question_hi": "शरीर में हार्मोन को नियंत्रित करने वाला अंग कौन सा है?",
    "options_en": ["Brain", "Pituitary Gland", "Thyroid", "Pancreas"],
    "options_hi": ["मस्तिष्क", "पिट्यूटरी ग्रंथि", "थायरॉयड", "अग्न्याशय"],
    "answer_en": "Pituitary Gland",
    "answer_hi": "पिट्यूटरी ग्रंथि",
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