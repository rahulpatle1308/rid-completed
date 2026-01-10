const questions = [
  {
    "num":1,
    "question_en": "Which Indian state is called 'God’s Own Country'?",
    "question_hi": "'गॉड्स ओन कंट्री' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Goa", "Karnataka", "Tamil Nadu"],
    "options_hi": ["केरल", "गोवा", "कर्नाटक", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which is the largest river in India by discharge?",
    "question_hi": "भारत की सबसे बड़ी नदी (जल निकासी के हिसाब से) कौन सी है?",
    "options_en": ["Ganga", "Brahmaputra", "Godavari", "Yamuna"],
    "options_hi": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "यमुना"],
    "answer_en": "Brahmaputra",
    "answer_hi": "ब्रह्मपुत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which Indian monument is called the 'Symbol of Victory'?",
    "question_hi": "'विजय का प्रतीक' किस स्मारक के लिए प्रसिद्ध है?",
    "options_en": ["India Gate", "Red Fort", "Qutub Minar", "Gateway of India"],
    "options_hi": ["इंडिया गेट", "लाल किला", "कुतुब मीनार", "गेटवे ऑफ इंडिया"],
    "answer_en": "India Gate",
    "answer_hi": "इंडिया गेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which is the highest waterfall in India?",
    "question_hi": "भारत का सबसे ऊँचा झरना कौन सा है?",
    "options_en": ["Kunchikal Falls", "Jog Falls", "Dudhsagar Falls", "Nohkalikai Falls"],
    "options_hi": ["कुंचिकल फॉल्स", "जोग फॉल्स", "दूधसागर फॉल्स", "नोह्कालिकाई फॉल्स"],
    "answer_en": "Kunchikal Falls",
    "answer_hi": "कुंचिकल फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian state is called the 'Rice Bowl of India'?",
    "question_hi": "'भारत का चावल कटोरा' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["West Bengal", "Punjab", "Odisha", "Bihar"],
    "options_hi": ["पश्चिम बंगाल", "पंजाब", "ओडिशा", "बिहार"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which is the national gemstone of India?",
    "question_hi": "भारत का राष्ट्रीय रत्न कौन सा है?",
    "options_en": ["Ruby", "Diamond", "Emerald", "Sapphire"],
    "options_hi": ["रूबी", "हीरा", "पन्ना", "नीलम"],
    "answer_en": "Diamond",
    "answer_hi": "हीरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which Indian state has the largest coastline?",
    "question_hi": "कौन सा राज्य सबसे लंबी समुद्र तट रेखा वाला है?",
    "options_en": ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Kerala"],
    "options_hi": ["गुजरात", "तमिलनाडु", "आंध्र प्रदेश", "केरल"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
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
    "num":9,
    "question_en": "Which is the first satellite launched by India?",
    "question_hi": "भारत का पहला उपग्रह कौन सा था?",
    "options_en": ["Aryabhata", "Rohini", "INSAT-1A", "Bhaskara"],
    "options_hi": ["आर्यभट्ट", "रोहिणी", "इंसाट-1ए", "भास्कर"],
    "answer_en": "Aryabhata",
    "answer_hi": "आर्यभट्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which is the longest river in South India?",
    "question_hi": "दक्षिण भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Periyar"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "पेरियार"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which Indian city is called the 'Manchester of India'?",
    "question_hi": "कौन सा भारतीय शहर 'भारत का मैनचेस्टर' कहलाता है?",
    "options_en": ["Ahmedabad", "Mumbai", "Surat", "Coimbatore"],
    "options_hi": ["अहमदाबाद", "मुंबई", "सूरत", "कोयम्बटूर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which is the national aquatic animal of India?",
    "question_hi": "भारत का राष्ट्रीय जलीय पशु कौन सा है?",
    "options_en": ["Ganges River Dolphin", "Crocodile", "Shark", "Whale"],
    "options_hi": ["गंगा डॉल्फिन", "मगरमच्छ", "शार्क", "व्हेल"],
    "answer_en": "Ganges River Dolphin",
    "answer_hi": "गंगा डॉल्फिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian state has the largest population?",
    "question_hi": "कौन सा भारतीय राज्य सबसे अधिक जनसंख्या वाला है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which Indian river originates from the Amarkantak plateau?",
    "question_hi": "कौन सी नदी अमरकंटक पठार से निकलती है?",
    "options_en": ["Narmada", "Son", "Godavari", "Mahanadi"],
    "options_hi": ["नर्मदा", "सोन", "गोदावरी", "महानदी"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which Indian festival is known as the 'Festival of Colours'?",
    "question_hi": "'रंगों का त्यौहार' किस त्योहार के लिए प्रसिद्ध है?",
    "options_en": ["Holi", "Diwali", "Eid", "Raksha Bandhan"],
    "options_hi": ["होली", "दिवाली", "ईद", "रक्षा बंधन"],
    "answer_en": "Holi",
    "answer_hi": "होली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which Indian state is called the 'Spice Garden of India'?",
    "question_hi": "'भारत का मसाला बगान' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which planet is called the 'Red Planet'?",
    "question_hi": "'लाल ग्रह' किस ग्रह को कहा जाता है?",
    "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "पारा"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which is the largest state in India by area?",
    "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य कौन सा है?",
    "options_en": ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which river is called the 'Sorrow of Bihar'?",
    "question_hi": "'बिहार का दुःख' किस नदी को कहा जाता है?",
    "options_en": ["Kosi", "Ganga", "Yamuna", "Son"],
    "options_hi": ["कोसी", "गंगा", "यमुना", "सोन"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
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
    "num":22,
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
    "num":23,
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
    "num":24,
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
    "num":25,
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
    "num":26,
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
    "num":27,
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
    "num":28,
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
    "num":29,
    "question_en": "Which Indian state is the largest producer of rice?",
    "question_hi": "चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["West Bengal", "Punjab", "Uttar Pradesh", "Bihar"],
    "options_hi": ["पश्चिम बंगाल", "पंजाब", "उत्तर प्रदेश", "बिहार"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which is the highest peak in the Western Ghats?",
    "question_hi": "पश्चिम घाट की सबसे ऊँची चोटी कौन सी है?",
    "options_en": ["Anamudi", "Kalsubai", "Doddabetta", "Agasthyarkoodam"],
    "options_hi": ["अनमुडि", "कलसुबाई", "डोड्डाबेट्टा", "अगस्थ्यकूटम"],
    "answer_en": "Anamudi",
    "answer_hi": "अनमुडि",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
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
    "num":32,
    "question_en": "Which is the largest bay in India?",
    "question_hi": "भारत की सबसे बड़ी खाड़ी कौन सी है?",
    "options_en": ["Bay of Bengal", "Arabian Sea", "Laccadive Sea", "Palk Bay"],
    "options_hi": ["बंगाल की खाड़ी", "अरब सागर", "लक्षद्वीप सागर", "पाल्क खाड़ी"],
    "answer_en": "Bay of Bengal",
    "answer_hi": "बंगाल की खाड़ी",
    "attempted": false,
    "selected": ""
  },
    {
    "num":33,
    "question_en": "Which Indian state is called the 'Land of Rising Sun'?",
    "question_hi": "'सूर्योदय की भूमि' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Arunachal Pradesh", "Assam", "Nagaland", "Manipur"],
    "options_hi": ["अरुणाचल प्रदेश", "असम", "नागालैंड", "मणिपुर"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
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
    "num":35,
    "question_en": "Which Indian city is called the 'Electronic City of India'?",
    "question_hi": "कौन सा भारतीय शहर 'भारत का इलेक्ट्रॉनिक सिटी' कहलाता है?",
    "options_en": ["Bangalore", "Hyderabad", "Pune", "Noida"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "नोएडा"],
    "answer_en": "Bangalore",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which Indian river is the longest in South India?",
    "question_hi": "दक्षिण भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Periyar"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "पेरियार"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
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
    "num":38,
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
    "num":39,
    "question_en": "Which Indian monument is a UNESCO World Heritage Site in Agra?",
    "question_hi": "आगरा में कौन सा स्मारक यूनेस्को विश्व धरोहर स्थल है?",
    "options_en": ["Taj Mahal", "Red Fort", "Fatehpur Sikri", "Itmad-ud-Daulah"],
    "options_hi": ["ताज महल", "लाल किला", "फतेहपुर सीकरी", "इत्माद-उद-दौला"],
    "answer_en": "Taj Mahal",
    "answer_hi": "ताज महल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which Indian river is called the 'Ganga of South India'?",
    "question_hi": "'दक्षिण भारत की गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Narmada"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
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
    "num":42,
    "question_en": "Which Indian state is called the 'Spice Bowl of India'?",
    "question_hi": "'भारत का मसाला कटोरा' किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
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
    "num":44,
    "question_en": "Which Indian river forms the famous Sunderbans delta?",
    "question_hi": "कौन सी नदी प्रसिद्ध सुंदरबन डेल्टा बनाती है?",
    "options_en": ["Ganga", "Brahmaputra", "Godavari", "Yamuna"],
    "options_hi": ["गंगा", "ब्रह्मपुत्र", "गोदावरी", "यमुना"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
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
    "num":46,
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
    "num":47,
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
    "num":48,
    "question_en": "Which Indian city is known as the 'City of Joy'?",
    "question_hi": "कौन सा शहर 'सिटी ऑफ जॉय' के नाम से जाना जाता है?",
    "options_en": ["Kolkata", "Mumbai", "Chennai", "Hyderabad"],
    "options_hi": ["कोलकाता", "मुंबई", "चेन्नई", "हैदराबाद"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian river is sacred in Hinduism?",
    "question_hi": "कौन सी भारतीय नदी हिन्दू धर्म में पवित्र मानी जाती है?",
    "options_en": ["Ganga", "Yamuna", "Saraswati", "Godavari"],
    "options_hi": ["गंगा", "यमुना", "सरस्वती", "गोदावरी"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which Indian state is the largest producer of wheat?",
    "question_hi": "गेहूँ का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "मध्य प्रदेश"],
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