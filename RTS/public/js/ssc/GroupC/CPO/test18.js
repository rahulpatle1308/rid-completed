const questions = [
  {
    "num":1,
    "question_en": "Which Indian state is known as the Land of Temples?",
    "question_hi": "'मंदिरों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Tamil Nadu", "Odisha", "Karnataka", "Andhra Pradesh"],
    "options_hi": ["तमिलनाडु", "ओडिशा", "कर्नाटक", "आंध्र प्रदेश"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which metal is used in thermometers?",
    "question_hi": "थर्मामीटर में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Mercury", "Lead", "Copper", "Aluminium"],
    "options_hi": ["पारा", "सीसा", "तांबा", "एल्युमिनियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which Indian city is known as the City of Lakes?",
    "question_hi": "'झीलों का शहर' किसे कहा जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Nainital", "Bhimtal"],
    "options_hi": ["उदयपुर", "भोपाल", "नैनीताल", "भीमताल"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which planet is known as the Giant Planet?",
    "question_hi": "'विशाल ग्रह' किसे कहा जाता है?",
    "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian river is also called the Dakshin Ganga?",
    "question_hi": "'दक्षिण गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Kaveri", "Mahanadi"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
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
    "num":7,
    "question_en": "Which Indian city is known as the Garden City?",
    "question_hi": "'गार्डन सिटी' किसे कहा जाता है?",
    "options_en": ["Bengaluru", "Pune", "Chandigarh", "Hyderabad"],
    "options_hi": ["बेंगलुरु", "पुणे", "चंडीगढ़", "हैदराबाद"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which gas is used in making soft drinks fizzy?",
    "question_hi": "सॉफ्ट ड्रिंक में बुलबुले बनाने के लिए कौन सी गैस मिलाई जाती है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
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
    "num":10,
    "question_en": "Which organ helps in excretion of urine?",
    "question_hi": "मूत्र उत्सर्जन में कौन सा अंग सहायक है?",
    "options_en": ["Kidney", "Liver", "Pancreas", "Heart"],
    "options_hi": ["गुर्दा", "यकृत", "अग्न्याशय", "हृदय"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which Indian state is called the Land of Five Rivers?",
    "question_hi": "'पांच नदियों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Punjab", "Haryana", "Rajasthan", "Uttarakhand"],
    "options_hi": ["पंजाब", "हरियाणा", "राजस्थान", "उत्तराखंड"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which metal is used in electrical wiring?",
    "question_hi": "विद्युत तारों में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Copper", "Aluminium", "Iron", "Silver"],
    "options_hi": ["तांबा", "एल्युमिनियम", "लोहा", "चांदी"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian city is called the Blue City?",
    "question_hi": "'ब्लू सिटी' किसे कहा जाता है?",
    "options_en": ["Jodhpur", "Jaipur", "Udaipur", "Bikaner"],
    "options_hi": ["जोधपुर", "जयपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jodhpur",
    "answer_hi": "जोधपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which planet is called the Red Planet?",
    "question_hi": "'लाल ग्रह' किसे कहा जाता है?",
    "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which Indian river flows through Varanasi?",
    "question_hi": "वाराणसी से होकर कौन सी नदी बहती है?",
    "options_en": ["Ganga", "Yamuna", "Son", "Ghaghara"],
    "options_hi": ["गंगा", "यमुना", "सोन", "घाघरा"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which vitamin helps in wound healing?",
    "question_hi": "घाव भरने में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which Indian city is known as the Manchester of India?",
    "question_hi": "'भारत का मैनचेस्टर' किसे कहा जाता है?",
    "options_en": ["Ahmedabad", "Surat", "Kanpur", "Coimbatore"],
    "options_hi": ["अहमदाबाद", "सूरत", "कानपुर", "कोयंबटूर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which gas is filled in balloons?",
    "question_hi": "गुब्बारों में कौन सी गैस भरी जाती है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which Indian state is the largest producer of milk?",
    "question_hi": "दूध का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Rajasthan", "Punjab", "Haryana"],
    "options_hi": ["उत्तर प्रदेश", "राजस्थान", "पंजाब", "हरियाणा"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which organ stores bile?",
    "question_hi": "पित्त का संग्रह कौन सा अंग करता है?",
    "options_en": ["Gall Bladder", "Liver", "Pancreas", "Stomach"],
    "options_hi": ["पित्ताशय", "यकृत", "अग्न्याशय", "आमाशय"],
    "answer_en": "Gall Bladder",
    "answer_hi": "पित्ताशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which Indian state is known as the Spice Garden of India?",
    "question_hi": "'भारत का मसाले का बगीचा' किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Goa"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which metal is best conductor of electricity?",
    "question_hi": "विद्युत का सबसे अच्छा चालक कौन सी धातु है?",
    "options_en": ["Copper", "Aluminium", "Iron", "Gold"],
    "options_hi": ["तांबा", "एल्युमिनियम", "लोहा", "सोना"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which city is called the City of Pearls in India?",
    "question_hi": "'मोती का शहर' भारत में किसे कहा जाता है?",
    "options_en": ["Hyderabad", "Surat", "Kolkata", "Mumbai"],
    "options_hi": ["हैदराबाद", "सूरत", "कोलकाता", "मुंबई"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which planet is known for its rings?",
    "question_hi": "'अपनी अंगूठियों के लिए प्रसिद्ध ग्रह' कौन सा है?",
    "options_en": ["Saturn", "Jupiter", "Uranus", "Neptune"],
    "options_hi": ["शनि", "बृहस्पति", "अरुण", "वरुण"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which river is known as the Sorrow of Bihar?",
    "question_hi": "'बिहार का दुःख' किस नदी को कहा जाता है?",
    "options_en": ["Kosi", "Ganga", "Yamuna", "Ghaghara"],
    "options_hi": ["कोसी", "गंगा", "यमुना", "घाघरा"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which vitamin is produced in skin on exposure to sunlight?",
    "question_hi": "सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
    "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which Indian city is known as the Financial Capital of India?",
    "question_hi": "'भारत की वित्तीय राजधानी' किसे कहा जाता है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Bengaluru"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "बेंगलुरु"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which gas is used in greenhouses to keep them warm?",
    "question_hi": "ग्रीनहाउस को गर्म रखने के लिए कौन सी गैस इस्तेमाल होती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian state is the largest producer of rice?",
    "question_hi": "चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["West Bengal", "Punjab", "Uttar Pradesh", "Tamil Nadu"],
    "options_hi": ["पश्चिम बंगाल", "पंजाब", "उत्तर प्रदेश", "तमिलनाडु"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which organ produces insulin in the human body?",
    "question_hi": "मानव शरीर में इंसुलिन कौन सा अंग बनाता है?",
    "options_en": ["Pancreas", "Liver", "Kidney", "Heart"],
    "options_hi": ["अग्न्याशय", "यकृत", "गुर्दा", "हृदय"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which Indian state is called the Land of Rising Sun?",
    "question_hi": "'उगते सूर्य की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Arunachal Pradesh", "Assam", "Nagaland", "Sikkim"],
    "options_hi": ["अरुणाचल प्रदेश", "असम", "नागालैंड", "सिक्किम"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which is the largest planet in the solar system?",
    "question_hi": "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Jupiter", "Saturn", "Neptune", "Earth"],
    "options_hi": ["बृहस्पति", "शनि", "वरुण", "पृथ्वी"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian city is called the Oxford of the East?",
    "question_hi": "'पूर्व का ऑक्सफोर्ड' किसे कहा जाता है?",
    "options_en": ["Varanasi", "Pune", "Delhi", "Kolkata"],
    "options_hi": ["वाराणसी", "पुणे", "दिल्ली", "कोलकाता"],
    "answer_en": "Varanasi",
    "answer_hi": "वाराणसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which gas is essential for photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which river is called the Ganga of South India?",
    "question_hi": "'दक्षिण भारत की गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Periyar"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "पेरियार"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which vitamin is important for vision?",
    "question_hi": "दृष्टि के लिए कौन सा विटामिन महत्वपूर्ण है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian city is called the Steel City?",
    "question_hi": "'स्टील सिटी' किसे कहा जाता है?",
    "options_en": ["Jamshedpur", "Bhilai", "Rourkela", "Kolkata"],
    "options_hi": ["जमशेदपुर", "भिलाई", "राउरकेला", "कोलकाता"],
    "answer_en": "Jamshedpur",
    "answer_hi": "जमशेदपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which gas do humans inhale for respiration?",
    "question_hi": "श्वसन के लिए मनुष्य कौन सी गैस लेते हैं?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Indian state is known for its tea gardens?",
    "question_hi": "'चाय बागानों के लिए प्रसिद्ध' किस राज्य को कहा जाता है?",
    "options_en": ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    "options_hi": ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which organ in the human body filters blood?",
    "question_hi": "मानव शरीर में कौन सा अंग रक्त को फ़िल्टर करता है?",
    "options_en": ["Kidney", "Liver", "Heart", "Lungs"],
    "options_hi": ["गुर्दा", "यकृत", "हृदय", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which Indian state is called the Land of Dawn-lit Mountains?",
    "question_hi": "'उगते सूर्य से प्रकाशित पहाड़ों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Arunachal Pradesh", "Sikkim", "Nagaland", "Manipur"],
    "options_hi": ["अरुणाचल प्रदेश", "सिक्किम", "नागालैंड", "मणिपुर"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which river is known as the Lifeline of Madhya Pradesh?",
    "question_hi": "'मध्य प्रदेश की जीवन रेखा' किस नदी को कहा जाता है?",
    "options_en": ["Narmada", "Godavari", "Mahanadi", "Krishna"],
    "options_hi": ["नर्मदा", "गोदावरी", "महानदी", "कृष्णा"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which vitamin is essential for blood clotting?",
    "question_hi": "रक्त का थक्का जमाने के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin K", "Vitamin D", "Vitamin A", "Vitamin C"],
    "options_hi": ["विटामिन K", "विटामिन D", "विटामिन A", "विटामिन C"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which Indian city is called the Detroit of India?",
    "question_hi": "'भारत का डेट्रॉइट' किसे कहा जाता है?",
    "options_en": ["Chennai", "Pune", "Ahmedabad", "Delhi"],
    "options_hi": ["चेन्नई", "पुणे", "अहमदाबाद", "दिल्ली"],
    "answer_en": "Chennai",
    "answer_hi": "चेन्नई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which gas is essential for human survival?",
    "question_hi": "मानव जीवन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which Indian state is the top producer of cotton?",
    "question_hi": "कपास का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Maharashtra", "Gujarat", "Punjab", "Haryana"],
    "options_hi": ["महाराष्ट्र", "गुजरात", "पंजाब", "हरियाणा"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which organ produces bile in human body?",
    "question_hi": "मानव शरीर में पित्त किस अंग से बनता है?",
    "options_en": ["Liver", "Gall Bladder", "Pancreas", "Kidney"],
    "options_hi": ["यकृत", "पित्ताशय", "अग्न्याशय", "गुर्दा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which Indian city is known as the Silicon Valley of India?",
    "question_hi": "'भारत का सिलिकॉन वैली' किसे कहा जाता है?",
    "options_en": ["Bengaluru", "Pune", "Hyderabad", "Chennai"],
    "options_hi": ["बेंगलुरु", "पुणे", "हैदराबाद", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which gas is released during fermentation?",
    "question_hi": "किण्वन के दौरान कौन सी गैस निकलती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which organ is responsible for pumping blood in human body?",
    "question_hi": "मानव शरीर में रक्त पंप करने के लिए कौन सा अंग जिम्मेदार है?",
    "options_en": ["Heart", "Lungs", "Kidney", "Liver"],
    "options_hi": ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
    "answer_en": "Heart",
    "answer_hi": "हृदय",
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