const questions = [
   {
    "num":1,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "भारत में सबसे लंबी तटरेखा किस राज्य की है?",
    "options_en": ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Maharashtra"],
    "options_hi": ["गुजरात", "तमिलनाडु", "आंध्र प्रदेश", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which blood group is known as the universal donor?",
    "question_hi": "सार्वभौमिक रक्तदाता किस रक्त समूह को कहते हैं?",
    "options_en": ["A", "B", "AB", "O"],
    "options_hi": ["A", "B", "AB", "O"],
    "answer_en": "O",
    "answer_hi": "O",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which Indian city is known as the Pink City?",
    "question_hi": "'गुलाबी शहर' किसे कहा जाता है?",
    "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "लाल ग्रह किसे कहा जाता है?",
    "options_en": ["Mars", "Jupiter", "Venus", "Mercury"],
    "options_hi": ["मंगल", "बृहस्पति", "शुक्र", "बुध"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian river flows through the rift valley?",
    "question_hi": "कौन सी नदी भ्रंश घाटी से होकर बहती है?",
    "options_en": ["Narmada", "Ganga", "Yamuna", "Godavari"],
    "options_hi": ["नर्मदा", "गंगा", "यमुना", "गोदावरी"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which vitamin is called anti-sterility vitamin?",
    "question_hi": "एंटी-स्टेरिलिटी विटामिन किसे कहा जाता है?",
    "options_en": ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन D", "विटामिन E", "विटामिन K"],
    "answer_en": "Vitamin E",
    "answer_hi": "विटामिन E",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which Indian city is known as the Silicon Valley of India?",
    "question_hi": "'भारत की सिलिकॉन वैली' किसे कहा जाता है?",
    "options_en": ["Hyderabad", "Bengaluru", "Pune", "Chennai"],
    "options_hi": ["हैदराबाद", "बेंगलुरु", "पुणे", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which gas is used to ripen fruits artificially?",
    "question_hi": "फलों को कृत्रिम रूप से पकाने में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Ethylene", "Oxygen", "Nitrogen", "Carbon Dioxide"],
    "options_hi": ["एथिलीन", "ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    "answer_en": "Ethylene",
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian state is the largest producer of wheat?",
    "question_hi": "गेहूं का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "मध्य प्रदेश"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which organ purifies blood in the human body?",
    "question_hi": "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?",
    "options_en": ["Heart", "Kidney", "Liver", "Lungs"],
    "options_hi": ["हृदय", "गुर्दा", "यकृत", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },

  {
    "num":11,
    "question_en": "Which Indian state is known as the Land of Rising Sun?",
    "question_hi": "'उगते सूरज की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Assam", "Arunachal Pradesh", "Nagaland", "Manipur"],
    "options_hi": ["असम", "अरुणाचल प्रदेश", "नागालैंड", "मणिपुर"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कमरे के तापमान पर द्रव रहने वाली धातु कौन सी है?",
    "options_en": ["Iron", "Mercury", "Lead", "Zinc"],
    "options_hi": ["लोहा", "पारा", "सीसा", "जस्ता"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian city is known as the City of Joy?",
    "question_hi": "'सिटी ऑफ जॉय' किसे कहा जाता है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which planet has rings around it?",
    "question_hi": "छल्लों वाला ग्रह कौन सा है?",
    "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which Indian river is called the River of Sorrow of Bihar?",
    "question_hi": "बिहार का शोक किस नदी को कहा जाता है?",
    "options_en": ["Kosi", "Gandak", "Son", "Bagmati"],
    "options_hi": ["कोसी", "गंडक", "सोन", "बागमती"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which vitamin is essential for blood clotting?",
    "question_hi": "रक्त के थक्के जमने के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन K", "विटामिन D"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which Indian city is known as the City of Pearls?",
    "question_hi": "'मोती नगरी' किसे कहा जाता है?",
    "options_en": ["Surat", "Hyderabad", "Kochi", "Mumbai"],
    "options_hi": ["सूरत", "हैदराबाद", "कोच्चि", "मुंबई"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which gas is used in welding?",
    "question_hi": "वेल्डिंग में कौन सी गैस उपयोग होती है?",
    "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "एसीटिलीन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Acetylene",
    "answer_hi": "एसीटिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which Indian state is the largest producer of tea?",
    "question_hi": "चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Assam", "West Bengal", "Tamil Nadu", "Kerala"],
    "options_hi": ["असम", "पश्चिम बंगाल", "तमिलनाडु", "केरल"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which organ controls the nervous system?",
    "question_hi": "तंत्रिका तंत्र को नियंत्रित करने वाला अंग कौन सा है?",
    "options_en": ["Heart", "Brain", "Spinal Cord", "Liver"],
    "options_hi": ["हृदय", "मस्तिष्क", "रीढ़ की हड्डी", "यकृत"],
    "answer_en": "Brain",
    "answer_hi": "मस्तिष्क",
    "attempted": false,
    "selected": ""
  },

  {
    "num":21,
    "question_en": "Which Indian state is known as the Land of Five Rivers?",
    "question_hi": "'पांच नदियों की भूमि' किसे कहा जाता है?",
    "options_en": ["Haryana", "Punjab", "Uttar Pradesh", "Rajasthan"],
    "options_hi": ["हरियाणा", "पंजाब", "उत्तर प्रदेश", "राजस्थान"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which metal is used in making electric wires?",
    "question_hi": "विद्युत तार बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Iron", "Aluminium", "Copper", "Silver"],
    "options_hi": ["लोहा", "एल्युमिनियम", "तांबा", "चांदी"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which Indian city is known as the Manchester of India?",
    "question_hi": "'भारत का मैनचेस्टर' किसे कहा जाता है?",
    "options_en": ["Ahmedabad", "Mumbai", "Surat", "Kanpur"],
    "options_hi": ["अहमदाबाद", "मुंबई", "सूरत", "कानपुर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which planet is the smallest in the solar system?",
    "question_hi": "सौरमंडल का सबसे छोटा ग्रह कौन सा है?",
    "options_en": ["Mercury", "Mars", "Venus", "Neptune"],
    "options_hi": ["बुध", "मंगल", "शुक्र", "वरुण"],
    "answer_en": "Mercury",
    "answer_hi": "बुध",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which Indian river is the longest in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
    "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which vitamin is produced in the skin by sunlight?",
    "question_hi": "सूर्य प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which Indian city is known as the City of Forts?",
    "question_hi": "'किलों का शहर' किसे कहा जाता है?",
    "options_en": ["Jodhpur", "Jaipur", "Gwalior", "Delhi"],
    "options_hi": ["जोधपुर", "जयपुर", "ग्वालियर", "दिल्ली"],
    "answer_en": "Jodhpur",
    "answer_hi": "जोधपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which gas is essential for respiration?",
    "question_hi": "श्वसन के लिए आवश्यक गैस कौन सी है?",
    "options_en": ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian state is the largest producer of sugarcane?",
    "question_hi": "गन्ने का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu"],
    "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "कर्नाटक", "तमिलनाडु"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which organ helps in breathing?",
    "question_hi": "श्वसन में सहायक अंग कौन सा है?",
    "options_en": ["Heart", "Liver", "Lungs", "Kidney"],
    "options_hi": ["हृदय", "यकृत", "फेफड़े", "गुर्दा"],
    "answer_en": "Lungs",
    "answer_hi": "फेफड़े",
    "attempted": false,
    "selected": ""
  },

  {
    "num":31,
    "question_en": "Which Indian state is known as the Apple State?",
    "question_hi": "'सेब राज्य' किसे कहा जाता है?",
    "options_en": ["Jammu & Kashmir", "Himachal Pradesh", "Uttarakhand", "Arunachal Pradesh"],
    "options_hi": ["जम्मू और कश्मीर", "हिमाचल प्रदेश", "उत्तराखंड", "अरुणाचल प्रदेश"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which metal is the lightest?",
    "question_hi": "सबसे हल्की धातु कौन सी है?",
    "options_en": ["Lithium", "Aluminium", "Sodium", "Magnesium"],
    "options_hi": ["लिथियम", "एल्युमिनियम", "सोडियम", "मैग्नीशियम"],
    "answer_en": "Lithium",
    "answer_hi": "लिथियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian city is known as the Tea City of India?",
    "question_hi": "'भारत की चाय नगरी' किसे कहा जाता है?",
    "options_en": ["Dibrugarh", "Darjeeling", "Jorhat", "Guwahati"],
    "options_hi": ["डिब्रूगढ़", "दार्जिलिंग", "जोरहाट", "गुवाहाटी"],
    "answer_en": "Dibrugarh",
    "answer_hi": "डिब्रूगढ़",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which planet is known as the Evening Star?",
    "question_hi": "'सांझ का तारा' किस ग्रह को कहा जाता है?",
    "options_en": ["Mars", "Venus", "Mercury", "Jupiter"],
    "options_hi": ["मंगल", "शुक्र", "बुध", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which Indian river flows westward?",
    "question_hi": "पश्चिम की ओर बहने वाली नदी कौन सी है?",
    "options_en": ["Godavari", "Krishna", "Narmada", "Ganga"],
    "options_hi": ["गोदावरी", "कृष्णा", "नर्मदा", "गंगा"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which vitamin prevents scurvy?",
    "question_hi": "स्कर्वी रोग से बचाव कौन सा विटामिन करता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian city is known as the City of Golden Temple?",
    "question_hi": "'स्वर्ण मंदिर का शहर' किसे कहा जाता है?",
    "options_en": ["Amritsar", "Ludhiana", "Patiala", "Jalandhar"],
    "options_hi": ["अमृतसर", "लुधियाना", "पटियाला", "जालंधर"],
    "answer_en": "Amritsar",
    "answer_hi": "अमृतसर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which gas is used in balloons?",
    "question_hi": "गुब्बारों में कौन सी गैस भरी जाती है?",
    "options_en": ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Indian state is the largest producer of cotton?",
    "question_hi": "कपास का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Maharashtra", "Gujarat", "Telangana", "Punjab"],
    "options_hi": ["महाराष्ट्र", "गुजरात", "तेलंगाना", "पंजाब"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which organ stores urine?",
    "question_hi": "मूत्र को संग्रहित करने वाला अंग कौन सा है?",
    "options_en": ["Kidney", "Ureter", "Urinary Bladder", "Urethra"],
    "options_hi": ["गुर्दा", "मूत्रवाहिनी", "मूत्राशय", "मूत्रमार्ग"],
    "answer_en": "Urinary Bladder",
    "answer_hi": "मूत्राशय",
    "attempted": false,
    "selected": ""
  },

  {
    "num":41,
    "question_en": "Which Indian state is known as the Land of Hills?",
    "question_hi": "'पहाड़ों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Uttarakhand", "Himachal Pradesh", "Sikkim", "Meghalaya"],
    "options_hi": ["उत्तराखंड", "हिमाचल प्रदेश", "सिक्किम", "मेघालय"],
    "answer_en": "Uttarakhand",
    "answer_hi": "उत्तराखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which metal is used to galvanize iron?",
    "question_hi": "लोहे को गैल्वनाइज करने के लिए कौन सी धातु प्रयोग होती है?",
    "options_en": ["Copper", "Zinc", "Tin", "Aluminium"],
    "options_hi": ["तांबा", "जस्ता", "टिन", "एल्युमिनियम"],
    "answer_en": "Zinc",
    "answer_hi": "जस्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which Indian city is known as the City of Palaces?",
    "question_hi": "'महलों का शहर' किसे कहा जाता है?",
    "options_en": ["Udaipur", "Mysuru", "Jaipur", "Jodhpur"],
    "options_hi": ["उदयपुर", "मैसूर", "जयपुर", "जोधपुर"],
    "answer_en": "Mysuru",
    "answer_hi": "मैसूर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which planet has the longest day?",
    "question_hi": "सबसे लंबा दिन किस ग्रह का होता है?",
    "options_en": ["Earth", "Mercury", "Venus", "Mars"],
    "options_hi": ["पृथ्वी", "बुध", "शुक्र", "मंगल"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian river is called the Ganga of the South?",
    "question_hi": "'दक्षिण की गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Kaveri", "Krishna", "Godavari", "Periyar"],
    "options_hi": ["कावेरी", "कृष्णा", "गोदावरी", "पेरियार"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which vitamin helps in calcium absorption?",
    "question_hi": "कैल्शियम के अवशोषण में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian city is known as the City of Lakes and Palaces?",
    "question_hi": "'झीलों और महलों का शहर' किसे कहा जाता है?",
    "options_en": ["Udaipur", "Jaipur", "Mysuru", "Bhopal"],
    "options_hi": ["उदयपुर", "जयपुर", "मैसूर", "भोपाल"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which gas is released during photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
    "options_en": ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian state is famous for backwaters?",
    "question_hi": "बैकवाटर्स के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Goa", "Kerala", "Tamil Nadu", "Karnataka"],
    "options_hi": ["गोवा", "केरल", "तमिलनाडु", "कर्नाटक"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which organ produces bile?",
    "question_hi": "पित्त का निर्माण कौन सा अंग करता है?",
    "options_en": ["Gall Bladder", "Liver", "Pancreas", "Stomach"],
    "options_hi": ["पित्ताशय", "यकृत", "अग्न्याशय", "आमाशय"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
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