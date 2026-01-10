const questions = [
  {
    "num":1,
    "question_en": "Which is the largest ocean in the world?",
    "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    "options_hi": ["अटलांटिक महासागर", "भारतीय महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which gas do humans exhale?",
    "question_hi": "मनुष्य कौन सी गैस छोड़ता है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which Indian city is known as 'City of Joy'?",
    "question_hi": "कौन सा भारतीय शहर 'सिटी ऑफ़ जॉय' के नाम से जाना जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Chennai", "Hyderabad"],
    "options_hi": ["कोलकाता", "मुंबई", "चेन्नई", "हैदराबाद"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which planet is known as the 'Morning Star'?",
    "question_hi": "'मॉर्निंग स्टार' के रूप में कौन सा ग्रह जाना जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Mercury"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "पारा"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which is the smallest state in India by area?",
    "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
    "options_en": ["Goa", "Sikkim", "Tripura", "Manipur"],
    "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा", "मणिपुर"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which Indian state is famous for the Sunderbans?",
    "question_hi": "कौन सा भारतीय राज्य सुंदरबन के लिए प्रसिद्ध है?",
    "options_en": ["West Bengal", "Odisha", "Assam", "Andhra Pradesh"],
    "options_hi": ["पश्चिम बंगाल", "ओडिशा", "असम", "आंध्र प्रदेश"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which gas is used in electric bulbs?",
    "question_hi": "बिजली के बल्ब में किस गैस का उपयोग होता है?",
    "options_en": ["Nitrogen", "Argon", "Oxygen", "Hydrogen"],
    "options_hi": ["नाइट्रोजन", "आर्गन", "ऑक्सीजन", "हाइड्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Who is known as the 'Father of the Nation' in India?",
    "question_hi": "भारत में 'राष्ट्रपिता' के रूप में किसे जाना जाता है?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Sardar Patel", "Subhas Chandra Bose"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सरदार पटेल", "सुभाष चंद्र बोस"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which is the national flower of India?",
    "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Lotus", "Rose", "Marigold", "Jasmine"],
    "options_hi": ["कमल", "गुलाब", "गेंदा", "जैस्मीन"],
    "answer_en": "Lotus",
    "answer_hi": "कमल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which planet is known as the 'Evening Star'?",
    "question_hi": "'ईवनिंग स्टार' के रूप में कौन सा ग्रह जाना जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Mercury"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "पारा"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
    {
    "num":11,
    "question_en": "Which Indian river is called 'Dakshin Ganga'?",
    "question_hi": "'दक्षिण गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Narmada"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which Indian state is known as the 'Land of Five Rivers'?",
    "question_hi": "'पाँच नदियों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Punjab", "Haryana", "Rajasthan", "Uttar Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "राजस्थान", "उत्तर प्रदेश"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which is the largest desert in India?",
    "question_hi": "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Thar", "Sahara", "Gobi", "Kalahari"],
    "options_hi": ["थार", "सहारा", "गोबी", "कलाहारी"],
    "answer_en": "Thar",
    "answer_hi": "थार",
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
    "question_en": "Which organ produces insulin in human body?",
    "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन बनाता है?",
    "options_en": ["Pancreas", "Liver", "Kidney", "Heart"],
    "options_hi": ["अग्न्याशय", "जिगर", "किडनी", "हृदय"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Who is known as the 'Missile Man of India'?",
    "question_hi": "भारत के 'मिसाइल मैन' के नाम से किसे जाना जाता है?",
    "options_en": ["A. P. J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C. V. Raman"],
    "options_hi": ["ए. पी. जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सी. वी. रमन"],
    "answer_en": "A. P. J. Abdul Kalam",
    "answer_hi": "ए. पी. जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which is the national reptile of India?",
    "question_hi": "भारत का राष्ट्रीय सरीसृप कौन सा है?",
    "options_en": ["King Cobra", "Crocodile", "Monitor Lizard", "Python"],
    "options_hi": ["किंग कोबरा", "मगरमच्छ", "मॉनिटर छिपकली", "अजगर"],
    "answer_en": "King Cobra",
    "answer_hi": "किंग कोबरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which Indian river is the longest?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
    "options_hi": ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which Indian festival is called the 'Festival of Lights'?",
    "question_hi": "'दीयों का त्यौहार' किस भारतीय त्यौहार के लिए प्रसिद्ध है?",
    "options_en": ["Diwali", "Holi", "Eid", "Raksha Bandhan"],
    "options_hi": ["दिवाली", "होली", "ईद", "रक्षा बंधन"],
    "answer_en": "Diwali",
    "answer_hi": "दिवाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which Indian monument is called the 'Symbol of Love'?",
    "question_hi": "'प्रेम का प्रतीक' किस स्मारक के लिए प्रसिद्ध है?",
    "options_en": ["Taj Mahal", "Red Fort", "India Gate", "Qutub Minar"],
    "options_hi": ["ताज महल", "लाल किला", "इंडिया गेट", "कुतुब मीनार"],
    "answer_en": "Taj Mahal",
    "answer_hi": "ताज महल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which Indian state is known as 'Scotland of India'?",
    "question_hi": "भारत का 'स्कॉटलैंड' किस राज्य को कहा जाता है?",
    "options_en": ["Meghalaya", "Kerala", "Himachal Pradesh", "Goa"],
    "options_hi": ["मेघालय", "केरल", "हिमाचल प्रदेश", "गोवा"],
    "answer_en": "Meghalaya",
    "answer_hi": "मेघालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which gas is used in balloons to make them float?",
    "question_hi": "गुब्बारे उड़ाने के लिए किस गैस का उपयोग किया जाता है?",
    "options_en": ["Helium", "Oxygen", "Hydrogen", "Nitrogen"],
    "options_hi": ["हीलियम", "ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which organ in human body is responsible for filtering blood?",
    "question_hi": "मानव शरीर में रक्त को छानने के लिए कौन सा अंग जिम्मेदार है?",
    "options_en": ["Kidney", "Liver", "Heart", "Lungs"],
    "options_hi": ["किडनी", "जिगर", "हृदय", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "किडनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which Indian state is known as 'Land of Rising Sun'?",
    "question_hi": "'सूर्योदय की भूमि' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Arunachal Pradesh", "Assam", "Nagaland", "Manipur"],
    "options_hi": ["अरुणाचल प्रदेश", "असम", "नागालैंड", "मणिपुर"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which vitamin is necessary for blood clotting?",
    "question_hi": "कौन सा विटामिन रक्त जमने के लिए आवश्यक है?",
    "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin B12"],
    "options_hi": ["विटामिन K", "विटामिन C", "विटामिन D", "विटामिन B12"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  
  {
    "num": 126,
    "question_en": "Which is the national fish of India?",
    "question_hi": "भारत का राष्ट्रीय मछली कौन सी है?",
    "options_en": ["Hilsa", "Catla", "Rohu", "Sardine"],
    "options_hi": ["हिल्सा", "कातला", "रोहू", "सार्डिन"],
    "answer_en": "Hilsa",
    "answer_hi": "हिल्सा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 127,
    "question_en": "Which is the highest civilian award in India?",
    "question_hi": "भारत का सर्वोच्च नागरिक सम्मान कौन सा है?",
    "options_en": ["Padma Shri", "Padma Bhushan", "Bharat Ratna", "Padma Vibhushan"],
    "options_hi": ["पद्म श्री", "पद्म भूषण", "भारत रत्न", "पद्म विभूषण"],
    "answer_en": "Bharat Ratna",
    "answer_hi": "भारत रत्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 128,
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
    "num": 129,
    "question_en": "Which Indian city is called 'Steel City'?",
    "question_hi": "कौन सा भारतीय शहर 'स्टील सिटी' के नाम से जाना जाता है?",
    "options_en": ["Jamshedpur", "Bhilai", "Rourkela", "Durgapur"],
    "options_hi": ["जमशेदपुर", "भिलाई", "राउरकेला", "दुर्गापुर"],
    "answer_en": "Jamshedpur",
    "answer_hi": "जमशेदपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which vitamin is known as ascorbic acid?",
    "question_hi": "कौन सा विटामिन 'एस्कॉर्बिक एसिड' के नाम से जाना जाता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which Indian city is called 'Pink City'?",
    "question_hi": "कौन सा भारतीय शहर 'पिंक सिटी' के नाम से जाना जाता है?",
    "options_en": ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    "options_hi": ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which is the largest bay in the world?",
    "question_hi": "विश्व की सबसे बड़ी खाड़ी कौन सी है?",
    "options_en": ["Bay of Bengal", "Hudson Bay", "Gulf of Mexico", "Persian Gulf"],
    "options_hi": ["बंगाल की खाड़ी", "हडसन बे", "मैक्सिको की खाड़ी", "फारसी की खाड़ी"],
    "answer_en": "Bay of Bengal",
    "answer_hi": "बंगाल की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Who founded the Indian National Army?",
    "question_hi": "भारतीय राष्ट्रीय सेना की स्थापना किसने की?",
    "options_en": ["Subhas Chandra Bose", "Mahatma Gandhi", "Bhagat Singh", "Bal Gangadhar Tilak"],
    "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "भगत सिंह", "बाल गंगाधर तिलक"],
    "answer_en": "Subhas Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which is the national game of India?",
    "question_hi": "भारत का राष्ट्रीय खेल कौन सा है?",
    "options_en": ["Hockey", "Cricket", "Football", "Kabaddi"],
    "options_hi": ["हॉकी", "क्रिकेट", "फुटबॉल", "कबड्डी"],
    "answer_en": "Hockey",
    "answer_hi": "हॉकी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
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
    "num":36,
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
    "num":37,
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
    "num":38,
    "question_en": "Which Indian state is known as 'Spice Garden of India'?",
    "question_hi": "'भारत का मसाला बगान' किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Indian city is known as 'City of Lakes'?",
    "question_hi": "कौन सा शहर 'लेक सिटी' के नाम से जाना जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Jaipur", "Ahmedabad"],
    "options_hi": ["उदयपुर", "भोपाल", "जयपुर", "अहमदाबाद"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which Indian state is famous for Konark Sun Temple?",
    "question_hi": "कौन सा राज्य कोणार्क सूर्य मंदिर के लिए प्रसिद्ध है?",
    "options_en": ["Odisha", "Tamil Nadu", "Rajasthan", "Karnataka"],
    "options_hi": ["ओडिशा", "तमिलनाडु", "राजस्थान", "कर्नाटक"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which is the highest mountain peak in India?",
    "question_hi": "भारत का सबसे ऊँचा पर्वत कौन सा है?",
    "options_en": ["Kangchenjunga", "Nanda Devi", "Kamet", "Annapurna"],
    "options_hi": ["कंचनजंगा", "नंदा देवी", "कामेत", "अन्नपूर्णा"],
    "answer_en": "Kangchenjunga",
    "answer_hi": "कंचनजंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which Indian state is called the 'Spice Bowl of India'?",
    "question_hi": "'भारत का मसाला कटोरा' किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which metal is obtained from bauxite?",
    "question_hi": "बॉक्साइट से कौन सी धातु प्राप्त होती है?",
    "options_en": ["Aluminium", "Iron", "Copper", "Zinc"],
    "options_hi": ["एल्यूमिनियम", "लोहा", "तांबा", "जिंक"],
    "answer_en": "Aluminium",
    "answer_hi": "एल्यूमिनियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which Indian state has the largest forest cover?",
    "question_hi": "कौन सा राज्य सबसे अधिक वन क्षेत्र के लिए जाना जाता है?",
    "options_en": ["Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh", "Maharashtra"],
    "options_hi": ["मध्य प्रदेश", "अरुणाचल प्रदेश", "छत्तीसगढ़", "महाराष्ट्र"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian river flows into the Bay of Bengal?",
    "question_hi": "कौन सी भारतीय नदी बंगाल की खाड़ी में मिलती है?",
    "options_en": ["Ganga", "Yamuna", "Narmada", "Godavari"],
    "options_hi": ["गंगा", "यमुना", "नर्मदा", "गोदावरी"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which Indian freedom fighter is called 'Netaji'?",
    "question_hi": "किस स्वतंत्रता सेनानी को 'नेताजी' कहा जाता है?",
    "options_en": ["Subhas Chandra Bose", "Mahatma Gandhi", "Jawaharlal Nehru", "Bhagat Singh"],
    "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "जवाहरलाल नेहरू", "भगत सिंह"],
    "answer_en": "Subhas Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian state is the largest by area?",
    "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    "options_en": ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which is the national animal of India?",
    "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Tiger", "Lion", "Elephant", "Peacock"],
    "options_hi": ["बाघ", "सिंह", "हाथी", "मोर"],
    "answer_en": "Tiger",
    "answer_hi": "बाघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian river originates from the Amarkantak plateau?",
    "question_hi": "कौन सी नदी अमरकंटक पठार से निकलती है?",
    "options_en": ["Narmada", "Ganga", "Yamuna", "Godavari"],
    "options_hi": ["नर्मदा", "गंगा", "यमुना", "गोदावरी"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which Indian city is known as 'City of Joy'?",
    "question_hi": "कौन सा शहर 'सिटी ऑफ जॉय' के नाम से जाना जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Chennai", "Hyderabad"],
    "options_hi": ["कोलकाता", "मुंबई", "चेन्नई", "हैदराबाद"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
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