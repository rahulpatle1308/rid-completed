const questions = [

  {
    "num":1,
    "question_en": "Which planet is known as the 'Giant Planet'?",
    "question_hi": "'जाइंट प्लैनेट' के नाम से कौन सा ग्रह जाना जाता है?",
    "options_en": ["Jupiter", "Saturn", "Neptune", "Mars"],
    "options_hi": ["बृहस्पति", "शनि", "नेप्च्यून", "मंगल"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which Indian river is the source of the famous Bhagirathi river?",
    "question_hi": "कौन सी नदी प्रसिद्ध भागीरथी नदी की स्रोत है?",
    "options_en": ["Ganga", "Yamuna", "Alaknanda", "Godavari"],
    "options_hi": ["गंगा", "यमुना", "अलकनंदा", "गोदावरी"],
    "answer_en": "Alaknanda",
    "answer_hi": "अलकनंदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which Indian festival is celebrated with kite flying?",
    "question_hi": "कौन सा भारतीय त्योहार पतंग उड़ाने के साथ मनाया जाता है?",
    "options_en": ["Makar Sankranti", "Diwali", "Holi", "Raksha Bandhan"],
    "options_hi": ["मकर संक्रांति", "दिवाली", "होली", "रक्षा बंधन"],
    "answer_en": "Makar Sankranti",
    "answer_hi": "मकर संक्रांति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which Indian city is known as the 'Financial Capital of India'?",
    "question_hi": "'भारत की वित्तीय राजधानी' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Mumbai", "Delhi", "Bengaluru", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "बेंगलुरु", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian monument is the residence of the President of India?",
    "question_hi": "कौन सा भारतीय स्मारक भारत के राष्ट्रपति का निवास है?",
    "options_en": ["Rashtrapati Bhavan", "Red Fort", "Parliament House", "India Gate"],
    "options_hi": ["राष्ट्रपति भवन", "लाल किला", "संसद भवन", "इंडिया गेट"],
    "answer_en": "Rashtrapati Bhavan",
    "answer_hi": "राष्ट्रपति भवन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which Indian city is known as the 'Garden City of India'?",
    "question_hi": "'भारत का गार्डन सिटी' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which Indian state is the largest producer of coffee?",
    "question_hi": "कॉफ़ी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Karnataka", "Kerala", "Tamil Nadu", "Goa"],
    "options_hi": ["कर्नाटक", "केरल", "तमिलनाडु", "गोवा"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which Indian city is known as the 'City of Nawabs'?",
    "question_hi": "'नवाबों का शहर' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Lucknow", "Hyderabad", "Patna", "Bhopal"],
    "options_hi": ["लखनऊ", "हैदराबाद", "पटना", "भोपाल"],
    "answer_en": "Lucknow",
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian river is the longest west-flowing river?",
    "question_hi": "सबसे लंबी पश्चिम दिशा में बहने वाली भारतीय नदी कौन सी है?",
    "options_en": ["Narmada", "Godavari", "Krishna", "Cauvery"],
    "options_hi": ["नर्मदा", "गोदावरी", "कृष्णा", "कावेरी"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which Indian state is called the 'Land of Rising Sun'?",
    "question_hi": "'सूर्योदय की भूमि' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Arunachal Pradesh", "Sikkim", "Nagaland", "Manipur"],
    "options_hi": ["अरुणाचल प्रदेश", "सिक्किम", "नागालैंड", "मणिपुर"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which Indian city is known as the 'Silicon Valley of India'?",
    "question_hi": "'भारत की सिलिकॉन वैली' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which Indian festival is called the 'Festival of Harvest'?",
    "question_hi": "'फसल का त्योहार' किस त्योहार के लिए प्रसिद्ध है?",
    "options_en": ["Pongal", "Diwali", "Holi", "Baisakhi"],
    "options_hi": ["पोंगल", "दिवाली", "होली", "बैसाखी"],
    "answer_en": "Pongal",
    "answer_hi": "पोंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian river originates from the Amarkantak Plateau?",
    "question_hi": "कौन सी नदी अमरकंटक पठार से निकलती है?",
    "options_en": ["Narmada", "Godavari", "Krishna", "Cauvery"],
    "options_hi": ["नर्मदा", "गोदावरी", "कृष्णा", "कावेरी"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which Indian state is famous for its backwaters?",
    "question_hi": "कौन सा राज्य अपने बैकवाटर्स के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    "options_hi": ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which Indian city is known as the 'City of Temples'?",
    "question_hi": "'मंदिरों का शहर' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Bhubaneswar", "Varanasi", "Madurai", "Puri"],
    "options_hi": ["भुवनेश्वर", "वाराणसी", "मदुरै", "पुरी"],
    "answer_en": "Bhubaneswar",
    "answer_hi": "भुवनेश्वर",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num":16,
    "question_en": "Which Indian state is called the 'Land of the Five Rivers'?",
    "question_hi": "'पांच नदियों की भूमि' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Punjab", "Haryana", "Uttar Pradesh", "Rajasthan"],
    "options_hi": ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "राजस्थान"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which river is called the 'Sorrow of Bihar'?",
    "question_hi": "'बिहार का दुःख' किस नदी के लिए प्रसिद्ध है?",
    "options_en": ["Kosi", "Ganga", "Yamuna", "Ghaghara"],
    "options_hi": ["कोसी", "गंगा", "यमुना", "घाघरा"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which Indian state is famous for Chhath Puja?",
    "question_hi": "कौन सा राज्य छठ पूजा के लिए प्रसिद्ध है?",
    "options_en": ["Bihar", "Uttar Pradesh", "Jharkhand", "Odisha"],
    "options_hi": ["बिहार", "उत्तर प्रदेश", "झारखंड", "ओडिशा"],
    "answer_en": "Bihar",
    "answer_hi": "बिहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which Indian river is known as the 'Dakshina Ganga'?",
    "question_hi": "'दक्षिण गंगा' किस नदी के लिए प्रसिद्ध है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Narmada"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which Indian state is famous for its tea gardens in Darjeeling?",
    "question_hi": "कौन सा राज्य दार्जिलिंग में चाय बागानों के लिए प्रसिद्ध है?",
    "options_en": ["West Bengal", "Assam", "Kerala", "Tamil Nadu"],
    "options_hi": ["पश्चिम बंगाल", "असम", "केरल", "तमिलनाडु"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which Indian monument is known as the 'Symbol of National Pride'?",
    "question_hi": "'राष्ट्रीय गर्व का प्रतीक' किस स्मारक के लिए प्रसिद्ध है?",
    "options_en": ["India Gate", "Red Fort", "Taj Mahal", "Gateway of India"],
    "options_hi": ["इंडिया गेट", "लाल किला", "ताज महल", "गेटवे ऑफ इंडिया"],
    "answer_en": "India Gate",
    "answer_hi": "इंडिया गेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which Indian city is called the 'Steel City of India'?",
    "question_hi": "'भारत का स्टील सिटी' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Jamshedpur", "Bhilai", "Rourkela", "Durgapur"],
    "options_hi": ["जमशेदपुर", "भिलाई", "राउरकेला", "दुर्गापुर"],
    "answer_en": "Jamshedpur",
    "answer_hi": "जमशेदपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which Indian state is known as the 'Rice Bowl of India'?",
    "question_hi": "'भारत का धान का कटोरा' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["West Bengal", "Punjab", "Tamil Nadu", "Assam"],
    "options_hi": ["पश्चिम बंगाल", "पंजाब", "तमिलनाडु", "असम"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which Indian river is known for the Sunderbans delta?",
    "question_hi": "कौन सी नदी सुंदरबन डेल्टा बनाती है?",
    "options_en": ["Ganga", "Brahmaputra", "Godavari", "Yamuna"],
    "options_hi": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "यमुना"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which Indian city is called the 'City of Lakes'?",
    "question_hi": "कौन सा शहर 'लेक सिटी' के नाम से जाना जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Jaipur", "Ahmedabad"],
    "options_hi": ["उदयपुर", "भोपाल", "जयपुर", "अहमदाबाद"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which Indian city is known as the 'Blue City'?",
    "question_hi": "कौन सा शहर 'ब्लू सिटी' के नाम से प्रसिद्ध है?",
    "options_en": ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"],
    "options_hi": ["जोधपुर", "जयपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jodhpur",
    "answer_hi": "जोधपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which Indian state is famous for Kalaripayattu martial art?",
    "question_hi": "कौन सा राज्य कलारीपायट्टु मार्शल आर्ट के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Goa"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which Indian river flows through the city of Allahabad?",
    "question_hi": "कौन सी नदी इलाहाबाद शहर से बहती है?",
    "options_en": ["Ganga", "Yamuna", "Saraswati", "Both Ganga & Yamuna"],
    "options_hi": ["गंगा", "यमुना", "सरस्वती", "गंगा और यमुना दोनों"],
    "answer_en": "Both Ganga & Yamuna",
    "answer_hi": "गंगा और यमुना दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian city is known as the 'City of Joy'?",
    "question_hi": "'सिटी ऑफ जॉय' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Kolkata", "Mumbai", "Chennai", "Bengaluru"],
    "options_hi": ["कोलकाता", "मुंबई", "चेन्नई", "बेंगलुरु"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which Indian state is called the 'Land of Thunder Dragon'?",
    "question_hi": "'थंडर ड्रैगन की भूमि' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Sikkim", "Arunachal Pradesh", "Nagaland", "Manipur"],
    "options_hi": ["सिक्किम", "अरुणाचल प्रदेश", "नागालैंड", "मणिपुर"],
    "answer_en": "Sikkim",
    "answer_hi": "सिक्किम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which Indian river flows through Kolkata?",
    "question_hi": "कौन सी नदी कोलकाता शहर से बहती है?",
    "options_en": ["Hooghly", "Ganga", "Yamuna", "Brahmaputra"],
    "options_hi": ["हुगली", "गंगा", "यमुना", "ब्रह्मपुत्र"],
    "answer_en": "Hooghly",
    "answer_hi": "हुगली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
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
    "num":33,
    "question_en": "Which Indian city is known as the 'City of Nawabs'?",
    "question_hi": "'नवाबों का शहर' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Lucknow", "Hyderabad", "Bhopal", "Patna"],
    "options_hi": ["लखनऊ", "हैदराबाद", "भोपाल", "पटना"],
    "answer_en": "Lucknow",
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which Indian monument is called the 'Black Taj'?",
    "question_hi": "'ब्लैक ताज' किस स्मारक के लिए प्रसिद्ध है?",
    "options_en": ["Gumbaz, Bijapur", "Tomb of Salim Chishti", "Humayun's Tomb", "Qutub Minar"],
    "options_hi": ["गुम्बज, बीजापुर", "सलीम चिश्ती का मकबरा", "हुमायूँ का मकबरा", "कुतुब मीनार"],
    "answer_en": "Gumbaz, Bijapur",
    "answer_hi": "गुम्बज, बीजापुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which Indian festival is called the 'Festival of Lights'?",
    "question_hi": "'दीपों का त्योहार' किसका नाम है?",
    "options_en": ["Diwali", "Holi", "Makar Sankranti", "Raksha Bandhan"],
    "options_hi": ["दिवाली", "होली", "मकर संक्रांति", "रक्षा बंधन"],
    "answer_en": "Diwali",
    "answer_hi": "दिवाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which Indian state is the largest producer of wheat?",
    "question_hi": "गेहूँ का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Punjab", "Haryana", "Madhya Pradesh"],
    "options_hi": ["उत्तर प्रदेश", "पंजाब", "हरियाणा", "मध्य प्रदेश"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian river originates from Yamunotri?",
    "question_hi": "कौन सी नदी यमुनोत्री से निकलती है?",
    "options_en": ["Yamuna", "Ganga", "Saraswati", "Bhagirathi"],
    "options_hi": ["यमुना", "गंगा", "सरस्वती", "भागीरथी"],
    "answer_en": "Yamuna",
    "answer_hi": "यमुना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which Indian city is known as the 'Pink City'?",
    "question_hi": "कौन सा भारतीय शहर 'पिंक सिटी' के लिए प्रसिद्ध है?",
    "options_en": ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    "options_hi": ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Indian festival marks the harvest of Rabi crops?",
    "question_hi": "कौन सा भारतीय त्योहार रबी फसलों की कटाई के लिए मनाया जाता है?",
    "options_en": ["Baisakhi", "Pongal", "Makar Sankranti", "Diwali"],
    "options_hi": ["बैसाखी", "पोंगल", "मकर संक्रांति", "दिवाली"],
    "answer_en": "Baisakhi",
    "answer_hi": "बैसाखी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which Indian river is considered sacred and called 'Triveni Sangam'?",
    "question_hi": "कौन सी नदी पवित्र मानी जाती है और 'त्रिवेणी संगम' कहलाती है?",
    "options_en": ["Ganga, Yamuna, Saraswati", "Ganga, Godavari, Yamuna", "Yamuna, Godavari, Narmada", "Ganga, Krishna, Godavari"],
    "options_hi": ["गंगा, यमुना, सरस्वती", "गंगा, गोदावरी, यमुना", "यमुना, गोदावरी, नर्मदा", "गंगा, कृष्णा, गोदावरी"],
    "answer_en": "Ganga, Yamuna, Saraswati",
    "answer_hi": "गंगा, यमुना, सरस्वती",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which Indian state is famous for Tawang Monastery?",
    "question_hi": "कौन सा राज्य तवांग मठ के लिए प्रसिद्ध है?",
    "options_en": ["Arunachal Pradesh", "Sikkim", "Himachal Pradesh", "Nagaland"],
    "options_hi": ["अरुणाचल प्रदेश", "सिक्किम", "हिमाचल प्रदेश", "नागालैंड"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which Indian city is known as the 'Gateway of India'?",
    "question_hi": "'गेटवे ऑफ इंडिया' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Mumbai", "Delhi", "Chennai", "Kolkata"],
    "options_hi": ["मुंबई", "दिल्ली", "चेन्नई", "कोलकाता"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which Indian state is the largest producer of rubber?",
    "question_hi": "रबर का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Goa"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which Indian city is known as the 'City of Steel'?",
    "question_hi": "'स्टील सिटी' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Jamshedpur", "Bhilai", "Rourkela", "Durgapur"],
    "options_hi": ["जमशेदपुर", "भिलाई", "राउरकेला", "दुर्गापुर"],
    "answer_en": "Jamshedpur",
    "answer_hi": "जमशेदपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian city is called the 'City of Pearls'?",
    "question_hi": "'सिटी ऑफ पर्ल्स' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Hyderabad", "Mumbai", "Chennai", "Kolkata"],
    "options_hi": ["हैदराबाद", "मुंबई", "चेन्नई", "कोलकाता"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which Indian river is known as 'Dakshin Ganga'?",
    "question_hi": "'दक्षिण गंगा' किस नदी के लिए प्रसिद्ध है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Narmada"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian state is known as the 'Spice Garden of India'?",
    "question_hi": "'भारत का मसाला बगीचा' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which Indian city is known as the 'City of Lakes'?",
    "question_hi": "'लेक सिटी' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Udaipur", "Bhopal", "Jaipur", "Ahmedabad"],
    "options_hi": ["उदयपुर", "भोपाल", "जयपुर", "अहमदाबाद"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian festival is called the 'Festival of Colors'?",
    "question_hi": "'रंगों का त्योहार' किसका नाम है?",
    "options_en": ["Holi", "Diwali", "Makar Sankranti", "Baisakhi"],
    "options_hi": ["होली", "दिवाली", "मकर संक्रांति", "बैसाखी"],
    "answer_en": "Holi",
    "answer_hi": "होली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which Indian state is the largest producer of sugarcane?",
    "question_hi": "गन्ने का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Karnataka", "Tamil Nadu"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "कर्नाटक", "तमिलनाडु"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
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