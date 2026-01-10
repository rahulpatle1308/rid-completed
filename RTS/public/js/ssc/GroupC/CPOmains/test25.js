const questions = [
  {
    "num":1,
    "question_en": "Which Indian state is the largest producer of rice?",
    "question_hi": "चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["West Bengal", "Andhra Pradesh", "Punjab", "Chhattisgarh"],
    "options_hi": ["पश्चिम बंगाल", "आंध्र प्रदेश", "पंजाब", "छत्तीसगढ़"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which organ stores bile?",
    "question_hi": "पित्त को संग्रहित करने वाला अंग कौन सा है?",
    "options_en": ["Liver", "Gall Bladder", "Pancreas", "Stomach"],
    "options_hi": ["यकृत", "पित्ताशय", "अग्न्याशय", "आमाशय"],
    "answer_en": "Gall Bladder",
    "answer_hi": "पित्ताशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which Indian city is known as the Steel City?",
    "question_hi": "'स्टील सिटी' किस शहर को कहा जाता है?",
    "options_en": ["Jamshedpur", "Durgapur", "Rourkela", "Bhilai"],
    "options_hi": ["जमशेदपुर", "दुर्गापुर", "राउरकेला", "भिलाई"],
    "answer_en": "Jamshedpur",
    "answer_hi": "जमशेदपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which vitamin deficiency causes night blindness?",
    "question_hi": "रातांधापन किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which instrument is used to measure earthquakes?",
    "question_hi": "भूकंप मापने वाला यंत्र कौन सा है?",
    "options_en": ["Barometer", "Seismograph", "Anemometer", "Thermometer"],
    "options_hi": ["बैरोमीटर", "सिस्मोग्राफ", "एनीमोमीटर", "थर्मामीटर"],
    "answer_en": "Seismograph",
    "answer_hi": "सिस्मोग्राफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which Indian river is called the Sorrow of Assam?",
    "question_hi": "असम का शोक किस नदी को कहा जाता है?",
    "options_en": ["Brahmaputra", "Barak", "Teesta", "Subansiri"],
    "options_hi": ["ब्रह्मपुत्र", "बराक", "तीस्ता", "सुबनसिरी"],
    "answer_en": "Brahmaputra",
    "answer_hi": "ब्रह्मपुत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which Indian monument is known as the Palace of Winds?",
    "question_hi": "'हवाओं का महल' किसे कहा जाता है?",
    "options_en": ["Hawa Mahal", "City Palace", "Amber Fort", "Jal Mahal"],
    "options_hi": ["हवा महल", "सिटी पैलेस", "आमेर किला", "जल महल"],
    "answer_en": "Hawa Mahal",
    "answer_hi": "हवा महल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which gas is most abundant in the atmosphere?",
    "question_hi": "वायुमंडल में सबसे अधिक कौन सी गैस पाई जाती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Argon"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
    "answer_en": "Nitrogen",
    "answer_hi": "नाइट्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian state is known as the Spice Garden of India?",
    "question_hi": "'भारत का मसाला बगीचा' किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which organ helps in pumping blood?",
    "question_hi": "रक्त को पंप करने वाला अंग कौन सा है?",
    "options_en": ["Brain", "Heart", "Liver", "Kidney"],
    "options_hi": ["मस्तिष्क", "हृदय", "यकृत", "गुर्दा"],
    "answer_en": "Heart",
    "answer_hi": "हृदय",
    "attempted": false,
    "selected": ""
  },

  {
    "num":11,
    "question_en": "Which Indian state is the largest producer of coffee?",
    "question_hi": "कॉफी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which vitamin is known as Tocopherol?",
    "question_hi": "टोकोफेरॉल किस विटामिन को कहा जाता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन E"],
    "answer_en": "Vitamin E",
    "answer_hi": "विटामिन E",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian city is known as the Gateway of India?",
    "question_hi": "'गेटवे ऑफ इंडिया' किस शहर में स्थित है?",
    "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which planet is known as the Morning Star?",
    "question_hi": "'सुबह का तारा' किस ग्रह को कहा जाता है?",
    "options_en": ["Mercury", "Venus", "Mars", "Jupiter"],
    "options_hi": ["बुध", "शुक्र", "मंगल", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which Indian river is the longest peninsular river?",
    "question_hi": "प्रायद्वीपीय भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Krishna", "Godavari", "Kaveri", "Narmada"],
    "options_hi": ["कृष्णा", "गोदावरी", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which Indian state is known as the Land of Festivals?",
    "question_hi": "'त्योहारों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Rajasthan", "West Bengal", "Odisha", "Assam"],
    "options_hi": ["राजस्थान", "पश्चिम बंगाल", "ओडिशा", "असम"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "अग्निशामक यंत्रों में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
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
    "num":19,
    "question_en": "Which organ is affected by jaundice?",
    "question_hi": "पीलिया किस अंग को प्रभावित करता है?",
    "options_en": ["Heart", "Liver", "Kidney", "Lungs"],
    "options_hi": ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which Indian state is famous for bamboo production?",
    "question_hi": "बांस उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Assam", "Mizoram", "Tripura", "Nagaland"],
    "options_hi": ["असम", "मिजोरम", "त्रिपुरा", "नागालैंड"],
    "answer_en": "Mizoram",
    "answer_hi": "मिजोरम",
    "attempted": false,
    "selected": ""
  },

  {
    "num":21,
    "question_en": "Which planet has the maximum number of moons?",
    "question_hi": "सबसे अधिक उपग्रह किस ग्रह के हैं?",
    "options_en": ["Jupiter", "Saturn", "Mars", "Earth"],
    "options_hi": ["बृहस्पति", "शनि", "मंगल", "पृथ्वी"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which Indian dam is the longest?",
    "question_hi": "भारत का सबसे लंबा बांध कौन सा है?",
    "options_en": ["Hirakud Dam", "Bhakra Nangal", "Tehri Dam", "Nagarjuna Sagar"],
    "options_hi": ["हीराकुंड बांध", "भाखड़ा नांगल", "टिहरी बांध", "नागार्जुन सागर"],
    "answer_en": "Hirakud Dam",
    "answer_hi": "हीराकुंड बांध",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which vitamin deficiency causes beriberi?",
    "question_hi": "बेरी-बेरी रोग किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin B1", "Vitamin B2", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन B1", "विटामिन B2", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin B1",
    "answer_hi": "विटामिन B1",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which Indian city is known as the City of Seven Islands?",
    "question_hi": "'सात द्वीपों का शहर' किसे कहा जाता है?",
    "options_en": ["Mumbai", "Kolkata", "Chennai", "Kochi"],
    "options_hi": ["मुंबई", "कोलकाता", "चेन्नई", "कोच्चि"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which gas is used in deep sea diving?",
    "question_hi": "गहरे समुद्र में गोताखोरी के लिए कौन सी गैस उपयोग होती है?",
    "options_en": ["Oxygen", "Helium", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "हीलियम", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which Indian state is known as the Powerhouse of India?",
    "question_hi": "'भारत का ऊर्जा गृह' किस राज्य को कहा जाता है?",
    "options_en": ["Jharkhand", "Chhattisgarh", "Odisha", "Madhya Pradesh"],
    "options_hi": ["झारखंड", "छत्तीसगढ़", "ओडिशा", "मध्य प्रदेश"],
    "answer_en": "Chhattisgarh",
    "answer_hi": "छत्तीसगढ़",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which organ produces insulin?",
    "question_hi": "इंसुलिन किस अंग द्वारा स्रावित होता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "आमाशय"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which Indian festival marks the harvest season in Punjab?",
    "question_hi": "पंजाब में फसल कटाई का त्योहार कौन सा है?",
    "options_en": ["Baisakhi", "Lohri", "Diwali", "Holi"],
    "options_hi": ["बैसाखी", "लोहड़ी", "दिवाली", "होली"],
    "answer_en": "Baisakhi",
    "answer_hi": "बैसाखी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian river is known as Dakshin Ganga?",
    "question_hi": "'दक्षिण गंगा' किस नदी को कहा जाता है?",
    "options_en": ["Krishna", "Godavari", "Kaveri", "Tungabhadra"],
    "options_hi": ["कृष्णा", "गोदावरी", "कावेरी", "तुंगभद्रा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which instrument is used to measure blood pressure?",
    "question_hi": "रक्तचाप मापने वाला यंत्र कौन सा है?",
    "options_en": ["Thermometer", "Sphygmomanometer", "Barometer", "Hygrometer"],
    "options_hi": ["थर्मामीटर", "स्फिग्मोमैनोमीटर", "बैरोमीटर", "हाइग्रोमीटर"],
    "answer_en": "Sphygmomanometer",
    "answer_hi": "स्फिग्मोमैनोमीटर",
    "attempted": false,
    "selected": ""
  },

  {
    "num":31,
    "question_en": "Which Indian state is the largest producer of iron ore?",
    "question_hi": "लौह अयस्क का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Odisha", "Jharkhand", "Chhattisgarh", "Karnataka"],
    "options_hi": ["ओडिशा", "झारखंड", "छत्तीसगढ़", "कर्नाटक"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which vitamin helps in wound healing?",
    "question_hi": "घाव भरने में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian city is known as the City of Lakes?",
    "question_hi": "'झीलों का शहर' किसे कहा जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
    "options_hi": ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which planet rotates from east to west?",
    "question_hi": "पूर्व से पश्चिम घूमने वाला ग्रह कौन सा है?",
    "options_en": ["Earth", "Mars", "Venus", "Jupiter"],
    "options_hi": ["पृथ्वी", "मंगल", "शुक्र", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which Indian state is famous for handloom industry?",
    "question_hi": "हथकरघा उद्योग के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["West Bengal", "Tamil Nadu", "Assam", "Odisha"],
    "options_hi": ["पश्चिम बंगाल", "तमिलनाडु", "असम", "ओडिशा"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which organ is responsible for hearing?",
    "question_hi": "श्रवण के लिए कौन सा अंग उत्तरदायी है?",
    "options_en": ["Eye", "Ear", "Nose", "Brain"],
    "options_hi": ["आंख", "कान", "नाक", "मस्तिष्क"],
    "answer_en": "Ear",
    "answer_hi": "कान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian river originates from Gangotri Glacier?",
    "question_hi": "गंगोत्री हिमनद से कौन सी नदी निकलती है?",
    "options_en": ["Yamuna", "Ganga", "Bhagirathi", "Alaknanda"],
    "options_hi": ["यमुना", "गंगा", "भागीरथी", "अलकनंदा"],
    "answer_en": "Bhagirathi",
    "answer_hi": "भागीरथी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which gas is responsible for acid rain?",
    "question_hi": "अम्ल वर्षा के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["Carbon Monoxide", "Sulphur Dioxide", "Oxygen", "Nitrogen"],
    "options_hi": ["कार्बन मोनोऑक्साइड", "सल्फर डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Sulphur Dioxide",
    "answer_hi": "सल्फर डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Indian city is known as the City of Gardens?",
    "question_hi": "'गार्डन सिटी' किसे कहा जाता है?",
    "options_en": ["Bengaluru", "Chandigarh", "Mysuru", "Pune"],
    "options_hi": ["बेंगलुरु", "चंडीगढ़", "मैसूर", "पुणे"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which vitamin deficiency causes pellagra?",
    "question_hi": "पेलाग्रा रोग किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin B3", "Vitamin B1", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन B3", "विटामिन B1", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin B3",
    "answer_hi": "विटामिन B3",
    "attempted": false,
    "selected": ""
  },

  {
    "num":41,
    "question_en": "Which Indian state is the largest producer of coal?",
    "question_hi": "कोयले का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Jharkhand", "Odisha", "Chhattisgarh", "West Bengal"],
    "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "पश्चिम बंगाल"],
    "answer_en": "Jharkhand",
    "answer_hi": "झारखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which part of the eye controls the amount of light?",
    "question_hi": "आंख का कौन सा भाग प्रकाश की मात्रा नियंत्रित करता है?",
    "options_en": ["Lens", "Retina", "Iris", "Cornea"],
    "options_hi": ["लेंस", "रेटिना", "आईरिस", "कॉर्निया"],
    "answer_en": "Iris",
    "answer_hi": "आईरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which Indian city is known as the Cultural Capital of India?",
    "question_hi": "'भारत की सांस्कृतिक राजधानी' किसे कहा जाता है?",
    "options_en": ["Kolkata", "Varanasi", "Chennai", "Thanjavur"],
    "options_hi": ["कोलकाता", "वाराणसी", "चेन्नई", "तंजावुर"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which planet has the fastest rotation?",
    "question_hi": "सबसे तेज घूर्णन किस ग्रह का है?",
    "options_en": ["Earth", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian state is famous for silk production?",
    "question_hi": "रेशम उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Karnataka", "West Bengal", "Assam", "Tamil Nadu"],
    "options_hi": ["कर्नाटक", "पश्चिम बंगाल", "असम", "तमिलनाडु"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which organ is responsible for taste?",
    "question_hi": "स्वाद के लिए कौन सा अंग उत्तरदायी है?",
    "options_en": ["Tongue", "Nose", "Brain", "Teeth"],
    "options_hi": ["जीभ", "नाक", "मस्तिष्क", "दांत"],
    "answer_en": "Tongue",
    "answer_hi": "जीभ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian river is known as the Lifeline of Madhya Pradesh?",
    "question_hi": "मध्य प्रदेश की जीवन रेखा किस नदी को कहा जाता है?",
    "options_en": ["Narmada", "Betwa", "Chambal", "Son"],
    "options_hi": ["नर्मदा", "बेतवा", "चंबल", "सोन"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which gas is used in making soda water?",
    "question_hi": "सोडा वाटर बनाने में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian city is known as the City of Temples?",
    "question_hi": "'मंदिरों का शहर' किसे कहा जाता है?",
    "options_en": ["Bhubaneswar", "Varanasi", "Madurai", "Puri"],
    "options_hi": ["भुवनेश्वर", "वाराणसी", "मदुरै", "पुरी"],
    "answer_en": "Bhubaneswar",
    "answer_hi": "भुवनेश्वर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which vitamin is essential for healthy bones?",
    "question_hi": "स्वस्थ हड्डियों के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
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