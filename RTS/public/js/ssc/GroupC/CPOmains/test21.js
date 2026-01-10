const questions = [
  
  {
    "num":1,
    "question_en": "Which Indian state is the largest producer of rice?",
    "question_hi": "चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["West Bengal", "Punjab", "Uttar Pradesh", "Odisha"],
    "options_hi": ["पश्चिम बंगाल", "पंजाब", "उत्तर प्रदेश", "ओडिशा"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which organ controls all activities of the human body?",
    "question_hi": "मानव शरीर की सभी क्रियाओं को कौन नियंत्रित करता है?",
    "options_en": ["Heart", "Brain", "Liver", "Kidney"],
    "options_hi": ["हृदय", "मस्तिष्क", "यकृत", "गुर्दा"],
    "answer_en": "Brain",
    "answer_hi": "मस्तिष्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which Indian city is known as the Steel City?",
    "question_hi": "'स्टील सिटी' किस शहर को कहा जाता है?",
    "options_en": ["Jamshedpur", "Bhilai", "Rourkela", "Durgapur"],
    "options_hi": ["जमशेदपुर", "भिलाई", "राउरकेला", "दुर्गापुर"],
    "answer_en": "Jamshedpur",
    "answer_hi": "जमशेदपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which vitamin is also known as Ascorbic Acid?",
    "question_hi": "एस्कॉर्बिक एसिड किस विटामिन को कहा जाता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which gas is released during respiration?",
    "question_hi": "श्वसन के दौरान कौन सी गैस निकलती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },

  {
    "num":6,
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
    "num":7,
    "question_en": "Which planet has the maximum number of moons?",
    "question_hi": "सबसे अधिक उपग्रह किस ग्रह के हैं?",
    "options_en": ["Jupiter", "Saturn", "Mars", "Neptune"],
    "options_hi": ["बृहस्पति", "शनि", "मंगल", "नेपच्यून"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which Indian river is called the Ganga of the South?",
    "question_hi": "दक्षिण की गंगा किस नदी को कहा जाता है?",
    "options_en": ["Krishna", "Godavari", "Cauvery", "Tungabhadra"],
    "options_hi": ["कृष्णा", "गोदावरी", "कावेरी", "तुंगभद्रा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which instrument measures atmospheric pressure?",
    "question_hi": "वायुमंडलीय दाब मापने वाला यंत्र कौन सा है?",
    "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
    "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सुषमा स्वराज"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },

  {
    "num":11,
    "question_en": "Which Indian monument is called the Symbol of Love?",
    "question_hi": "'प्रेम का प्रतीक' किस स्मारक को कहा जाता है?",
    "options_en": ["Qutub Minar", "Taj Mahal", "Red Fort", "India Gate"],
    "options_hi": ["कुतुब मीनार", "ताजमहल", "लाल किला", "इंडिया गेट"],
    "answer_en": "Taj Mahal",
    "answer_hi": "ताजमहल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which metal is used to make electric wires?",
    "question_hi": "बिजली के तार बनाने में किस धातु का उपयोग होता है?",
    "options_en": ["Iron", "Copper", "Silver", "Gold"],
    "options_hi": ["लोहा", "तांबा", "चांदी", "सोना"],
    "answer_en": "Copper",
    "answer_hi": "तांबा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian state has the largest forest area?",
    "question_hi": "सबसे अधिक वन क्षेत्र किस राज्य में है?",
    "options_en": ["Madhya Pradesh", "Assam", "Odisha", "Chhattisgarh"],
    "options_hi": ["मध्य प्रदेश", "असम", "ओडिशा", "छत्तीसगढ़"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which vitamin deficiency causes night blindness?",
    "question_hi": "रातांधता किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
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
    "num":16,
    "question_en": "Which gas is filled in electric bulbs?",
    "question_hi": "बिजली के बल्बों में कौन सी गैस भरी जाती है?",
    "options_en": ["Oxygen", "Nitrogen", "Argon", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "हाइड्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which Indian freedom movement started in 1942?",
    "question_hi": "1942 में कौन सा आंदोलन शुरू हुआ?",
    "options_en": ["Non-Cooperation", "Civil Disobedience", "Quit India", "Khilafat"],
    "options_hi": ["असहयोग", "सविनय अवज्ञा", "भारत छोड़ो", "खिलाफत"],
    "answer_en": "Quit India",
    "answer_hi": "भारत छोड़ो",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which planet is known as the Morning Star?",
    "question_hi": "भोर का तारा किस ग्रह को कहा जाता है?",
    "options_en": ["Mars", "Venus", "Mercury", "Jupiter"],
    "options_hi": ["मंगल", "शुक्र", "बुध", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which Indian river is the longest west-flowing river?",
    "question_hi": "सबसे लंबी पश्चिम की ओर बहने वाली नदी कौन सी है?",
    "options_en": ["Narmada", "Tapti", "Periyar", "Mahi"],
    "options_hi": ["नर्मदा", "ताप्ती", "पेरियार", "माही"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which Indian state is known as the Land of Five Rivers?",
    "question_hi": "'पांच नदियों की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Punjab", "Haryana", "Uttarakhand", "Bihar"],
    "options_hi": ["पंजाब", "हरियाणा", "उत्तराखंड", "बिहार"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },

  {
    "num":21,
    "question_en": "Which device converts AC to DC?",
    "question_hi": "AC को DC में बदलने वाला उपकरण कौन सा है?",
    "options_en": ["Transformer", "Rectifier", "Generator", "Motor"],
    "options_hi": ["ट्रांसफॉर्मर", "रेक्टिफायर", "जनरेटर", "मोटर"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which Indian state is famous for saffron production?",
    "question_hi": "केसर उत्पादन के लिए प्रसिद्ध राज्य कौन सा है?",
    "options_en": ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir", "Punjab"],
    "options_hi": ["हिमाचल प्रदेश", "उत्तराखंड", "जम्मू और कश्मीर", "पंजाब"],
    "answer_en": "Jammu & Kashmir",
    "answer_hi": "जम्मू और कश्मीर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which Indian city is known as the Manchester of India?",
    "question_hi": "'भारत का मैनचेस्टर' किस शहर को कहा जाता है?",
    "options_en": ["Ahmedabad", "Mumbai", "Surat", "Kanpur"],
    "options_hi": ["अहमदाबाद", "मुंबई", "सूरत", "कानपुर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which blood cells help in blood clotting?",
    "question_hi": "रक्त का थक्का जमाने में कौन सी कोशिकाएँ सहायक होती हैं?",
    "options_en": ["RBC", "WBC", "Platelets", "Plasma"],
    "options_hi": ["आरबीसी", "डब्ल्यूबीसी", "प्लेटलेट्स", "प्लाज्मा"],
    "answer_en": "Platelets",
    "answer_hi": "प्लेटलेट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which Indian festival is known as the Festival of Lights?",
    "question_hi": "'दीपों का त्योहार' किसे कहा जाता है?",
    "options_en": ["Holi", "Diwali", "Dussehra", "Raksha Bandhan"],
    "options_hi": ["होली", "दिवाली", "दशहरा", "रक्षा बंधन"],
    "answer_en": "Diwali",
    "answer_hi": "दिवाली",
    "attempted": false,
    "selected": ""
  },
    {
    "num":26,
    "question_en": "Which Indian river originates from Amarkantak?",
    "question_hi": "अमरकंटक से कौन सी नदी निकलती है?",
    "options_en": ["Narmada", "Tapti", "Mahanadi", "Son"],
    "options_hi": ["नर्मदा", "ताप्ती", "महानदी", "सोन"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which organ helps in breathing?",
    "question_hi": "श्वसन में कौन सा अंग सहायता करता है?",
    "options_en": ["Heart", "Lungs", "Kidney", "Liver"],
    "options_hi": ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
    "answer_en": "Lungs",
    "answer_hi": "फेफड़े",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which Indian city is known as the City of Palaces?",
    "question_hi": "'महलों का शहर' किसे कहा जाता है?",
    "options_en": ["Mysuru", "Jaipur", "Udaipur", "Jodhpur"],
    "options_hi": ["मैसूर", "जयपुर", "उदयपुर", "जोधपुर"],
    "answer_en": "Mysuru",
    "answer_hi": "मैसूर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which vitamin deficiency causes rickets?",
    "question_hi": "रिकेट्स किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which gas is essential for photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which Indian state is known as the Land of Rising Sun?",
    "question_hi": "'उगते सूर्य की भूमि' किस राज्य को कहा जाता है?",
    "options_en": ["Arunachal Pradesh", "Assam", "Nagaland", "Manipur"],
    "options_hi": ["अरुणाचल प्रदेश", "असम", "नागालैंड", "मणिपुर"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which instrument is used to measure wind speed?",
    "question_hi": "हवा की गति मापने वाला यंत्र कौन सा है?",
    "options_en": ["Barometer", "Anemometer", "Thermometer", "Hygrometer"],
    "options_hi": ["बैरोमीटर", "एनीमोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
    "answer_en": "Anemometer",
    "answer_hi": "एनीमोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian monument is called the Victory Tower?",
    "question_hi": "'विजय स्तंभ' किसे कहा जाता है?",
    "options_en": ["Qutub Minar", "Vijay Stambh", "Charminar", "Hawa Mahal"],
    "options_hi": ["कुतुब मीनार", "विजय स्तंभ", "चारमीनार", "हवा महल"],
    "answer_en": "Vijay Stambh",
    "answer_hi": "विजय स्तंभ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which planet is known as Earth's Twin?",
    "question_hi": "पृथ्वी का जुड़वां ग्रह किसे कहा जाता है?",
    "options_en": ["Mars", "Venus", "Mercury", "Jupiter"],
    "options_hi": ["मंगल", "शुक्र", "बुध", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which Indian freedom fighter is known as Iron Man of India?",
    "question_hi": "'भारत का लौह पुरुष' किसे कहा जाता है?",
    "options_en": ["Jawaharlal Nehru", "Sardar Patel", "Subhash Bose", "Bhagat Singh"],
    "options_hi": ["जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष बोस", "भगत सिंह"],
    "answer_en": "Sardar Patel",
    "answer_hi": "सरदार पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which metal is used for galvanization?",
    "question_hi": "गैल्वनाइजेशन में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Copper", "Zinc", "Aluminium", "Iron"],
    "options_hi": ["तांबा", "जिंक", "एल्युमिनियम", "लोहा"],
    "answer_en": "Zinc",
    "answer_hi": "जिंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "भारत में सबसे लंबा समुद्र तट किस राज्य का है?",
    "options_en": ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Kerala"],
    "options_hi": ["तमिलनाडु", "आंध्र प्रदेश", "गुजरात", "केरल"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which Indian river is known as the Sorrow of Bengal?",
    "question_hi": "बंगाल का शोक किस नदी को कहा जाता है?",
    "options_en": ["Damodar", "Hooghly", "Teesta", "Mahananda"],
    "options_hi": ["दामोदर", "हुगली", "तीस्ता", "महानंदा"],
    "answer_en": "Damodar",
    "answer_hi": "दामोदर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which device is used to measure electric current?",
    "question_hi": "विद्युत धारा मापने वाला यंत्र कौन सा है?",
    "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
    "options_hi": ["वोल्टमीटर", "एमीटर", "ओह्मीटर", "गैल्वेनोमीटर"],
    "answer_en": "Ammeter",
    "answer_hi": "एमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which Indian city is known as the City of Pearls?",
    "question_hi": "'मोती शहर' किसे कहा जाता है?",
    "options_en": ["Hyderabad", "Chennai", "Kochi", "Mumbai"],
    "options_hi": ["हैदराबाद", "चेन्नई", "कोच्चि", "मुंबई"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which gas is used in welding?",
    "question_hi": "वेल्डिंग में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Oxygen", "Acetylene", "Nitrogen", "Argon"],
    "options_hi": ["ऑक्सीजन", "एसीटिलीन", "नाइट्रोजन", "आर्गन"],
    "answer_en": "Acetylene",
    "answer_hi": "एसीटिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which Indian state is famous for rubber production?",
    "question_hi": "रबर उत्पादन के लिए प्रसिद्ध राज्य कौन सा है?",
    "options_en": ["Kerala", "Tamil Nadu", "Assam", "Tripura"],
    "options_hi": ["केरल", "तमिलनाडु", "असम", "त्रिपुरा"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which planet has the longest day?",
    "question_hi": "सबसे लंबा दिन किस ग्रह पर होता है?",
    "options_en": ["Mercury", "Venus", "Earth", "Mars"],
    "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Who composed the National Song of India?",
    "question_hi": "भारत का राष्ट्रगीत किसने लिखा?",
    "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Subhash Bose"],
    "options_hi": ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "सुभाष बोस"],
    "answer_en": "Bankim Chandra Chatterjee",
    "answer_hi": "बंकिम चंद्र चट्टोपाध्याय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian river flows through Kolkata?",
    "question_hi": "कोलकाता से होकर कौन सी नदी बहती है?",
    "options_en": ["Ganga", "Hooghly", "Damodar", "Teesta"],
    "options_hi": ["गंगा", "हुगली", "दामोदर", "तीस्ता"],
    "answer_en": "Hooghly",
    "answer_hi": "हुगली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which vitamin is essential for healthy eyesight?",
    "question_hi": "स्वस्थ दृष्टि के लिए कौन सा विटामिन आवश्यक है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian state is known as the Fruit Bowl of India?",
    "question_hi": "'भारत का फल कटोरा' किस राज्य को कहा जाता है?",
    "options_en": ["Jammu & Kashmir", "Himachal Pradesh", "Uttarakhand", "Arunachal Pradesh"],
    "options_hi": ["जम्मू और कश्मीर", "हिमाचल प्रदेश", "उत्तराखंड", "अरुणाचल प्रदेश"],
    "answer_en": "Jammu & Kashmir",
    "answer_hi": "जम्मू और कश्मीर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which instrument measures humidity?",
    "question_hi": "आर्द्रता मापने वाला यंत्र कौन सा है?",
    "options_en": ["Hygrometer", "Barometer", "Anemometer", "Thermometer"],
    "options_hi": ["हाइग्रोमीटर", "बैरोमीटर", "एनीमोमीटर", "थर्मामीटर"],
    "answer_en": "Hygrometer",
    "answer_hi": "हाइग्रोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian city is known as the Golden City?",
    "question_hi": "'स्वर्ण नगरी' किसे कहा जाता है?",
    "options_en": ["Jaisalmer", "Jaipur", "Udaipur", "Bikaner"],
    "options_hi": ["जैसलमेर", "जयपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jaisalmer",
    "answer_hi": "जैसलमेर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which gas is used in refrigerator cooling?",
    "question_hi": "रेफ्रिजरेटर में शीतलन के लिए कौन सी गैस उपयोग होती है?",
    "options_en": ["Oxygen", "Ammonia", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "अमोनिया", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Ammonia",
    "answer_hi": "अमोनिया",
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