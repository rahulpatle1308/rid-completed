const questions = [
  
  {
    "num":1,
    "question_en": "Which Indian state is known as 'Land of Five Rivers'?",
    "question_hi": "'पांच नदियों की भूमि' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which Indian city is called the 'Silicon Valley of India'?",
    "question_hi": "'भारत का सिलिकॉन वैली' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Bangalore", "Hyderabad", "Pune", "Chennai"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    "answer_en": "Bangalore",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which vitamin is also called the 'Sunshine Vitamin'?",
    "question_hi": "'सूरज की किरणों का विटामिन' किस विटामिन के लिए प्रसिद्ध है?",
    "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B12"],
    "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B12"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which Indian river is called the 'Sorrow of Odisha'?",
    "question_hi": "'ओडिशा का दुःख' किस नदी को कहा जाता है?",
    "options_en": ["Mahanadi", "Godavari", "Brahmani", "Krishna"],
    "options_hi": ["महानदी", "गोदावरी", "ब्रह्मणी", "कृष्णा"],
    "answer_en": "Mahanadi",
    "answer_hi": "महानदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian monument is known as the 'Victory Tower'?",
    "question_hi": "'विजय स्तंभ' किस स्मारक के लिए प्रसिद्ध है?",
    "options_en": ["Qutub Minar", "Red Fort", "India Gate", "Charminar"],
    "options_hi": ["कुतुब मीनार", "लाल किला", "इंडिया गेट", "चारमीनार"],
    "answer_en": "Qutub Minar",
    "answer_hi": "कुतुब मीनार",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which Indian state is the largest producer of sugarcane?",
    "question_hi": "गन्ना का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Karnataka", "Bihar"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "कर्नाटक", "बिहार"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which Indian state is famous for Ajanta and Ellora caves?",
    "question_hi": "अजंता और एलोरा की गुफाओं के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Maharashtra", "Karnataka", "Gujarat", "Rajasthan"],
    "options_hi": ["महाराष्ट्र", "कर्नाटक", "गुजरात", "राजस्थान"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which Indian state has the largest number of tiger reserves?",
    "question_hi": "सबसे अधिक बाघ अभ्यारण्य किस राज्य में हैं?",
    "options_en": ["Madhya Pradesh", "Karnataka", "Rajasthan", "Uttar Pradesh"],
    "options_hi": ["मध्य प्रदेश", "कर्नाटक", "राजस्थान", "उत्तर प्रदेश"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian festival is celebrated as the 'Festival of Harvest'?",
    "question_hi": "'फसल त्यौहार' किस भारतीय त्योहार के लिए प्रसिद्ध है?",
    "options_en": ["Pongal", "Diwali", "Holi", "Makar Sankranti"],
    "options_hi": ["पोंगल", "दिवाली", "होली", "मकर संक्रांति"],
    "answer_en": "Makar Sankranti",
    "answer_hi": "मकर संक्रांति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which Indian city is called the 'City of Temples'?",
    "question_hi": "कौन सा भारतीय शहर 'मंदिरों का शहर' कहलाता है?",
    "options_en": ["Khajuraho", "Varanasi", "Madurai", "Puri"],
    "options_hi": ["खजुराहो", "वाराणसी", "मदुरै", "पुरी"],
    "answer_en": "Khajuraho",
    "answer_hi": "खजुराहो",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which Indian mountain range is known as the 'Backbone of India'?",
    "question_hi": "'भारत की रीढ़ की हड्डी' किस पर्वत श्रृंखला के लिए प्रसिद्ध है?",
    "options_en": ["Himalayas", "Aravalli", "Vindhya", "Satpura"],
    "options_hi": ["हिमालय", "अरावली", "विंध्य", "सतपुड़ा"],
    "answer_en": "Himalayas",
    "answer_hi": "हिमालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which Indian river is known as the 'Ganga of South India'?",
    "question_hi": "'दक्षिण भारत की गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Narmada"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian state is the largest producer of silk?",
    "question_hi": "रेशम का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Karnataka", "Assam", "Tamil Nadu", "Andhra Pradesh"],
    "options_hi": ["कर्नाटक", "असम", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which Indian state is called the 'Spice Land'?",
    "question_hi": "'मसाला भूमि' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which Indian state is called the 'Sugar Bowl of India'?",
    "question_hi": "'भारत का शुगर बाउल' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Punjab", "Bihar"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "पंजाब", "बिहार"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
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
    "num":17,
    "question_en": "Which Indian state is famous for Hornbill Festival?",
    "question_hi": "कौन सा राज्य हॉर्नबिल फेस्टिवल के लिए प्रसिद्ध है?",
    "options_en": ["Nagaland", "Assam", "Manipur", "Arunachal Pradesh"],
    "options_hi": ["नागालैंड", "असम", "मणिपुर", "अरुणाचल प्रदेश"],
    "answer_en": "Nagaland",
    "answer_hi": "नागालैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which Indian river forms the Chilika Lake?",
    "question_hi": "कौन सी नदी चिलिका झील बनाती है?",
    "options_en": ["Mahanadi", "Godavari", "Krishna", "Brahmani"],
    "options_hi": ["महानदी", "गोदावरी", "कृष्णा", "ब्रह्मणी"],
    "answer_en": "Mahanadi",
    "answer_hi": "महानदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which Indian city is known as the 'Textile City'?",
    "question_hi": "कौन सा भारतीय शहर 'टेक्सटाइल सिटी' के नाम से प्रसिद्ध है?",
    "options_en": ["Surat", "Ahmedabad", "Mumbai", "Coimbatore"],
    "options_hi": ["सूरत", "अहमदाबाद", "मुंबई", "कोयम्बटूर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which Indian state is the largest producer of cashew nuts?",
    "question_hi": "काजू का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    "options_hi": ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which Indian river is called the 'Dakshin Ganga'?",
    "question_hi": "'दक्षिण गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Narmada"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
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
    "num":23,
    "question_en": "Which Indian monument is a UNESCO World Heritage site in Delhi?",
    "question_hi": "दिल्ली में कौन सा स्मारक यूनेस्को विश्व धरोहर स्थल है?",
    "options_en": ["Qutub Minar", "Red Fort", "Humayun's Tomb", "Lotus Temple"],
    "options_hi": ["कुतुब मीनार", "लाल किला", "हुमायूँ का मकबरा", "लोटस टेम्पल"],
    "answer_en": "Qutub Minar",
    "answer_hi": "कुतुब मीनार",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which Indian city is known as 'Blue City'?",
    "question_hi": "कौन सा शहर 'ब्लू सिटी' के नाम से प्रसिद्ध है?",
    "options_en": ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"],
    "options_hi": ["जोधपुर", "जयपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jodhpur",
    "answer_hi": "जोधपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
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
    "num":26,
    "question_en": "Which Indian city is called the 'City of Nawabs'?",
    "question_hi": "'नवाबों का शहर' किस शहर के लिए प्रसिद्ध है?",
    "options_en": ["Lucknow", "Hyderabad", "Bhopal", "Patna"],
    "options_hi": ["लखनऊ", "हैदराबाद", "भोपाल", "पटना"],
    "answer_en": "Lucknow",
    "answer_hi": "लखनऊ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which Indian state is the largest producer of mango?",
    "question_hi": "आम का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which Indian river originates from the Western Ghats and flows into Arabian Sea?",
    "question_hi": "पश्चिम घाट से निकलने वाली और अरब सागर में मिलने वाली नदी कौन सी है?",
    "options_en": ["Godavari", "Periyar", "Narmada", "Krishna"],
    "options_hi": ["गोदावरी", "पेरियार", "नर्मदा", "कृष्णा"],
    "answer_en": "Periyar",
    "answer_hi": "पेरियार",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian monument is known as 'Black Taj'?",
    "question_hi": "'ब्लैक ताज' किस स्मारक के लिए प्रसिद्ध है?",
    "options_en": ["Gumbaz, Bijapur", "Tomb of Salim Chishti", "Humayun's Tomb", "Qutub Minar"],
    "options_hi": ["गुम्बज, बीजापुर", "सलीम चिश्ती का मकबरा", "हुमायूँ का मकबरा", "कुतुब मीनार"],
    "answer_en": "Gumbaz, Bijapur",
    "answer_hi": "गुम्बज, बीजापुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which Indian state is famous for the Desert Festival?",
    "question_hi": "कौन सा राज्य रेगिस्तान महोत्सव के लिए प्रसिद्ध है?",
    "options_en": ["Rajasthan", "Gujarat", "Haryana", "Madhya Pradesh"],
    "options_hi": ["राजस्थान", "गुजरात", "हरियाणा", "मध्य प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
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
    "num":32,
    "question_en": "Which Indian state is called the 'Rice Bowl of India'?",
    "question_hi": "'भारत का धान का कटोरा' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["West Bengal", "Punjab", "Tamil Nadu", "Assam"],
    "options_hi": ["पश्चिम बंगाल", "पंजाब", "तमिलनाडु", "असम"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian state is known for its Pink City?",
    "question_hi": "कौन सा भारतीय शहर 'पिंक सिटी' के लिए प्रसिद्ध है?",
    "options_en": ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    "options_hi": ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
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
    "num":35,
    "question_en": "Which Indian state is famous for its Kalaripayattu martial art?",
    "question_hi": "कौन सा राज्य कलारीपायट्टु मार्शल आर्ट के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Goa"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which Indian monument is known as the 'Gateway of India'?",
    "question_hi": "'गेटवे ऑफ इंडिया' किस स्मारक के लिए प्रसिद्ध है?",
    "options_en": ["Gateway of India, Mumbai", "India Gate, Delhi", "Charminar, Hyderabad", "Red Fort, Delhi"],
    "options_hi": ["गेटवे ऑफ इंडिया, मुंबई", "इंडिया गेट, दिल्ली", "चारमीनार, हैदराबाद", "लाल किला, दिल्ली"],
    "answer_en": "Gateway of India, Mumbai",
    "answer_hi": "गेटवे ऑफ इंडिया, मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian state is famous for its backwaters and houseboats?",
    "question_hi": "कौन सा राज्य अपने बैकवाटर्स और हाउसबोट्स के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    "options_hi": ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which Indian city is known as the 'City of Pearls'?",
    "question_hi": "कौन सा शहर 'सिटी ऑफ पर्ल्स' के नाम से प्रसिद्ध है?",
    "options_en": ["Hyderabad", "Kolkata", "Chennai", "Mumbai"],
    "options_hi": ["हैदराबाद", "कोलकाता", "चेन्नई", "मुंबई"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Indian river is known for the famous Sunderbans delta?",
    "question_hi": "कौन सी नदी प्रसिद्ध सुंदरबन डेल्टा बनाती है?",
    "options_en": ["Ganga", "Brahmaputra", "Godavari", "Yamuna"],
    "options_hi": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "यमुना"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which Indian state is famous for the Hornbill Festival?",
    "question_hi": "कौन सा राज्य हॉर्नबिल फेस्टिवल के लिए प्रसिद्ध है?",
    "options_en": ["Nagaland", "Assam", "Manipur", "Arunachal Pradesh"],
    "options_hi": ["नागालैंड", "असम", "मणिपुर", "अरुणाचल प्रदेश"],
    "answer_en": "Nagaland",
    "answer_hi": "नागालैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
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
    "num":42,
    "question_en": "Which Indian state is known as the 'Spice Garden of India'?",
    "question_hi": "'भारत का मसाला बगान' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which Indian river is the longest in the country?",
    "question_hi": "देश की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
    "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which Indian city is known as the 'Manchester of India'?",
    "question_hi": "कौन सा भारतीय शहर 'भारत का मैनचेस्टर' कहलाता है?",
    "options_en": ["Ahmedabad", "Mumbai", "Surat", "Coimbatore"],
    "options_hi": ["अहमदाबाद", "मुंबई", "सूरत", "कोयम्बटूर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
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
    "num":46,
    "question_en": "Which Indian state is famous for the Sun Temple at Konark?",
    "question_hi": "कौन सा राज्य कोणार्क सूर्य मंदिर के लिए प्रसिद्ध है?",
    "options_en": ["Odisha", "Rajasthan", "Tamil Nadu", "Karnataka"],
    "options_hi": ["ओडिशा", "राजस्थान", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian state is the largest producer of coffee?",
    "question_hi": "कॉफी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Karnataka", "Kerala", "Tamil Nadu", "Goa"],
    "options_hi": ["कर्नाटक", "केरल", "तमिलनाडु", "गोवा"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which Indian river is considered holy and has the city of Varanasi on its banks?",
    "question_hi": "कौन सी नदी पवित्र मानी जाती है और इसके किनारे वाराणसी शहर स्थित है?",
    "options_en": ["Ganga", "Yamuna", "Saraswati", "Godavari"],
    "options_hi": ["गंगा", "यमुना", "सरस्वती", "गोदावरी"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian state is famous for the Desert Festival at Jaisalmer?",
    "question_hi": "कौन सा राज्य जैसलमेर के रेगिस्तान महोत्सव के लिए प्रसिद्ध है?",
    "options_en": ["Rajasthan", "Gujarat", "Haryana", "Madhya Pradesh"],
    "options_hi": ["राजस्थान", "गुजरात", "हरियाणा", "मध्य प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which Indian city is known as the 'City of Joy'?",
    "question_hi": "कौन सा शहर 'सिटी ऑफ जॉय' के नाम से जाना जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Chennai", "Hyderabad"],
    "options_hi": ["कोलकाता", "मुंबई", "चेन्नई", "हैदराबाद"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
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