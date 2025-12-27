const questions = [
 {
    "num":1,
    question_en: "Which Indian state is known as the Land of Temples?",
    question_hi: "मंदिरों की भूमि किस भारतीय राज्य को कहा जाता है?",
    options_en: ["Tamil Nadu", "Odisha", "Karnataka", "Uttar Pradesh"],
    options_hi: ["तमिलनाडु", "ओडिशा", "कर्नाटक", "उत्तर प्रदेश"],
    answer_en: "Tamil Nadu",
    answer_hi: "तमिलनाडु",
    attempted: false,
    selected: ""
  },
  {
    "num":2,
    question_en: "Which vitamin deficiency causes scurvy?",
    question_hi: "स्कर्वी रोग किस विटामिन की कमी से होता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin C",
    answer_hi: "विटामिन C",
    attempted: false,
    selected: ""
  },
  {
    "num":3,
    question_en: "Who was the first Governor-General of independent India?",
    question_hi: "स्वतंत्र भारत के पहले गवर्नर जनरल कौन थे?",
    options_en: ["Lord Mountbatten", "C. Rajagopalachari", "Jawaharlal Nehru", "Rajendra Prasad"],
    options_hi: ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
    answer_en: "Lord Mountbatten",
    answer_hi: "लॉर्ड माउंटबेटन",
    attempted: false,
    selected: ""
  },
  {
    "num":4,
    question_en: "Which gas is essential for combustion?",
    question_hi: "दहन के लिए कौन सी गैस आवश्यक है?",
    options_en: ["Nitrogen", "Hydrogen", "Oxygen", "Carbon Dioxide"],
    options_hi: ["नाइट्रोजन", "हाइड्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    "num":5,
    question_en: "Which Indian city is known as the City of Lakes?",
    question_hi: "झीलों का शहर किस भारतीय नगर को कहा जाता है?",
    options_en: ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
    options_hi: ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
    answer_en: "Udaipur",
    answer_hi: "उदयपुर",
    attempted: false,
    selected: ""
  },
  {
    "num":6,
    question_en: "Which metal expands most on heating?",
    question_hi: "गर्म करने पर कौन सी धातु सबसे अधिक फैलती है?",
    options_en: ["Iron", "Aluminium", "Copper", "Zinc"],
    options_hi: ["लोहा", "एल्युमिनियम", "तांबा", "जस्ता"],
    answer_en: "Aluminium",
    answer_hi: "एल्युमिनियम",
    attempted: false,
    selected: ""
  },
  {
    "num":7,
    question_en: "Who is the author of the book 'Gitanjali'?",
    question_hi: "'गीतांजलि' पुस्तक के लेखक कौन हैं?",
    options_en: ["Rabindranath Tagore", "Premchand", "Bankim Chandra", "Sarojini Naidu"],
    options_hi: ["रवींद्रनाथ टैगोर", "प्रेमचंद", "बंकिम चंद्र", "सरोजिनी नायडू"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    "num":8,
    question_en: "Which Indian river originates from Amarkantak?",
    question_hi: "अमरकंटक से निकलने वाली नदी कौन सी है?",
    options_en: ["Narmada", "Tapi", "Mahanadi", "Godavari"],
    options_hi: ["नर्मदा", "ताप्ती", "महानदी", "गोदावरी"],
    answer_en: "Narmada",
    answer_hi: "नर्मदा",
    attempted: false,
    selected: ""
  },
  {
    "num":9,
    question_en: "What is the SI unit of work?",
    question_hi: "कार्य की SI इकाई क्या है?",
    options_en: ["Newton", "Watt", "Joule", "Pascal"],
    options_hi: ["न्यूटन", "वाट", "जूल", "पास्कल"],
    answer_en: "Joule",
    answer_hi: "जूल",
    attempted: false,
    selected: ""
  },
  {
    "num":10,
    question_en: "Which Indian state is the largest producer of sugarcane?",
    question_hi: "भारत में गन्ने का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["Maharashtra", "Uttar Pradesh", "Karnataka", "Tamil Nadu"],
    options_hi: ["महाराष्ट्र", "उत्तर प्रदेश", "कर्नाटक", "तमिलनाडु"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },

  {
    "num":11,
    question_en: "Which part of the brain controls balance?",
    question_hi: "मस्तिष्क का कौन सा भाग संतुलन नियंत्रित करता है?",
    options_en: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    options_hi: ["सेरिब्रम", "सेरिबेलम", "मेडुला", "हाइपोथैलेमस"],
    answer_en: "Cerebellum",
    answer_hi: "सेरिबेलम",
    attempted: false,
    selected: ""
  },
  {
    "num":12,
    question_en: "Which Indian city is known as the Manchester of India?",
    question_hi: "भारत का मैनचेस्टर किस शहर को कहा जाता है?",
    options_en: ["Mumbai", "Ahmedabad", "Kanpur", "Surat"],
    options_hi: ["मुंबई", "अहमदाबाद", "कानपुर", "सूरत"],
    answer_en: "Ahmedabad",
    answer_hi: "अहमदाबाद",
    attempted: false,
    selected: ""
  },
  {
    "num":13,
    question_en: "Which blood cells help in clotting?",
    question_hi: "रक्त का थक्का जमाने में कौन सी कोशिकाएँ सहायक होती हैं?",
    options_en: ["RBC", "WBC", "Platelets", "Plasma"],
    options_hi: ["RBC", "WBC", "प्लेटलेट्स", "प्लाज्मा"],
    answer_en: "Platelets",
    answer_hi: "प्लेटलेट्स",
    attempted: false,
    selected: ""
  },
  {
    "num":14,
    question_en: "Which Indian satellite was the first to reach Mars?",
    question_hi: "मंगल ग्रह तक पहुँचने वाला भारत का पहला उपग्रह कौन सा था?",
    options_en: ["INSAT", "Aryabhata", "Mangalyaan", "Chandrayaan"],
    options_hi: ["इनसैट", "आर्यभट्ट", "मंगलयान", "चंद्रयान"],
    answer_en: "Mangalyaan",
    answer_hi: "मंगलयान",
    attempted: false,
    selected: ""
  },
  {
    "num":15,
    question_en: "Which gas is released during respiration?",
    question_hi: "श्वसन के दौरान कौन सी गैस बाहर निकलती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    "num":16,
    question_en: "Who was the founder of the Gupta Empire?",
    question_hi: "गुप्त साम्राज्य की स्थापना किसने की?",
    options_en: ["Chandragupta I", "Samudragupta", "Skandagupta", "Bimbisara"],
    options_hi: ["चंद्रगुप्त प्रथम", "समुद्रगुप्त", "स्कंदगुप्त", "बिंबिसार"],
    answer_en: "Chandragupta I",
    answer_hi: "चंद्रगुप्त प्रथम",
    attempted: false,
    selected: ""
  },
  {
    "num":17,
    question_en: "Which Indian state has the highest population?",
    question_hi: "भारत में सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    options_en: ["Maharashtra", "Bihar", "Uttar Pradesh", "West Bengal"],
    options_hi: ["महाराष्ट्र", "बिहार", "उत्तर प्रदेश", "पश्चिम बंगाल"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    "num":18,
    question_en: "What is the main source of energy for Earth?",
    question_hi: "पृथ्वी के लिए ऊर्जा का मुख्य स्रोत क्या है?",
    options_en: ["Moon", "Sun", "Wind", "Coal"],
    options_hi: ["चंद्रमा", "सूर्य", "पवन", "कोयला"],
    answer_en: "Sun",
    answer_hi: "सूर्य",
    attempted: false,
    selected: ""
  },
  {
    "num":19,
    question_en: "Which Indian river is known as the Sorrow of Bihar?",
    question_hi: "बिहार का शोक किस नदी को कहा जाता है?",
    options_en: ["Ganga", "Ghaghara", "Kosi", "Son"],
    options_hi: ["गंगा", "घाघरा", "कोसी", "सोन"],
    answer_en: "Kosi",
    answer_hi: "कोसी",
    attempted: false,
    selected: ""
  },
  {
    "num":20,
    question_en: "Which gas is used for welding?",
    question_hi: "वेल्डिंग में किस गैस का प्रयोग होता है?",
    options_en: ["Oxygen", "Acetylene", "Nitrogen", "Helium"],
    options_hi: ["ऑक्सीजन", "एसीटिलीन", "नाइट्रोजन", "हीलियम"],
    answer_en: "Acetylene",
    answer_hi: "एसीटिलीन",
    attempted: false,
    selected: ""
  },

  {
    "num":21,
    question_en: "Which Indian city is known as the City of Nawabs?",
    question_hi: "नवाबों का शहर किसे कहा जाता है?",
    options_en: ["Lucknow", "Delhi", "Hyderabad", "Bhopal"],
    options_hi: ["लखनऊ", "दिल्ली", "हैदराबाद", "भोपाल"],
    answer_en: "Lucknow",
    answer_hi: "लखनऊ",
    attempted: false,
    selected: ""
  },
  {
    "num":22,
    question_en: "Which vitamin helps in calcium absorption?",
    question_hi: "कैल्शियम के अवशोषण में कौन सा विटामिन सहायक है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    "num":23,
    question_en: "Which Indian port is known as Deendayal Port?",
    question_hi: "दीनदयाल बंदरगाह किस नाम से जाना जाता है?",
    options_en: ["Mumbai Port", "Kandla Port", "Chennai Port", "Visakhapatnam Port"],
    options_hi: ["मुंबई बंदरगाह", "कांडला बंदरगाह", "चेन्नई बंदरगाह", "विशाखापत्तनम बंदरगाह"],
    answer_en: "Kandla Port",
    answer_hi: "कांडला बंदरगाह",
    attempted: false,
    selected: ""
  },
  {
    "num":24,
    question_en: "Which Indian scientist discovered Raman Effect?",
    question_hi: "रमन प्रभाव की खोज किस भारतीय वैज्ञानिक ने की?",
    options_en: ["C. V. Raman", "Homi Bhabha", "S. N. Bose", "Vikram Sarabhai"],
    options_hi: ["सी. वी. रमन", "होमी भाभा", "एस. एन. बोस", "विक्रम साराभाई"],
    answer_en: "C. V. Raman",
    answer_hi: "सी. वी. रमन",
    attempted: false,
    selected: ""
  },
  {
    "num":25,
    question_en: "Which Indian state is famous for Sunderbans?",
    question_hi: "सुंदरबन के लिए कौन सा भारतीय राज्य प्रसिद्ध है?",
    options_en: ["Odisha", "West Bengal", "Assam", "Bihar"],
    options_hi: ["ओडिशा", "पश्चिम बंगाल", "असम", "बिहार"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: ""
  },
  {
    "num":26,
    question_en: "Which gas is used in refrigerators?",
    question_hi: "रेफ्रिजरेटर में किस गैस का उपयोग होता है?",
    options_en: ["Ammonia", "Chlorine", "Oxygen", "Nitrogen"],
    options_hi: ["अमोनिया", "क्लोरीन", "ऑक्सीजन", "नाइट्रोजन"],
    answer_en: "Ammonia",
    answer_hi: "अमोनिया",
    attempted: false,
    selected: ""
  },
  {
    "num":27,
    question_en: "Who was the first Indian woman President?",
    question_hi: "भारत की पहली महिला राष्ट्रपति कौन थीं?",
    options_en: ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "Sarojini Naidu"],
    options_hi: ["इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी", "सरोजिनी नायडू"],
    answer_en: "Pratibha Patil",
    answer_hi: "प्रतिभा पाटिल",
    attempted: false,
    selected: ""
  },
  {
    "num":28,
    question_en: "Which Indian river flows westward?",
    question_hi: "पश्चिम की ओर बहने वाली भारतीय नदी कौन सी है?",
    options_en: ["Godavari", "Krishna", "Narmada", "Ganga"],
    options_hi: ["गोदावरी", "कृष्णा", "नर्मदा", "गंगा"],
    answer_en: "Narmada",
    answer_hi: "नर्मदा",
    attempted: false,
    selected: ""
  },
  {
    "num":29,
    question_en: "What is the main constituent of natural gas?",
    question_hi: "प्राकृतिक गैस का मुख्य घटक क्या है?",
    options_en: ["Ethane", "Propane", "Methane", "Butane"],
    options_hi: ["एथेन", "प्रोपेन", "मीथेन", "ब्यूटेन"],
    answer_en: "Methane",
    answer_hi: "मीथेन",
    attempted: false,
    selected: ""
  },
  {
    "num":30,
    question_en: "Which Indian city is known as the City of Dreams?",
    question_hi: "सपनों का शहर किस भारतीय नगर को कहा जाता है?",
    options_en: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    options_hi: ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    answer_en: "Mumbai",
    answer_hi: "मुंबई",
    attempted: false,
    selected: ""
  },

  {
    "num":31,
    question_en: "Which vitamin deficiency causes night blindness?",
    question_hi: "रतौंधी किस विटामिन की कमी से होती है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin A",
    answer_hi: "विटामिन A",
    attempted: false,
    selected: ""
  },
  {
    "num":32,
    question_en: "Which Indian dam is the highest?",
    question_hi: "भारत का सबसे ऊँचा बाँध कौन सा है?",
    options_en: ["Bhakra Nangal", "Hirakud", "Tehri Dam", "Sardar Sarovar"],
    options_hi: ["भाखड़ा नांगल", "हीराकुंड", "टिहरी बाँध", "सरदार सरोवर"],
    answer_en: "Tehri Dam",
    answer_hi: "टिहरी बाँध",
    attempted: false,
    selected: ""
  },
  {
    "num":33,
    question_en: "Which Indian state has the longest coastline?",
    question_hi: "भारत में सबसे लंबा समुद्री तट किस राज्य का है?",
    options_en: ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    options_hi: ["तमिलनाडु", "आंध्र प्रदेश", "गुजरात", "महाराष्ट्र"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    "num":34,
    question_en: "Which instrument is used to measure atmospheric pressure?",
    question_hi: "वायुमंडलीय दाब मापने का यंत्र कौन सा है?",
    options_en: ["Barometer", "Thermometer", "Hygrometer", "Altimeter"],
    options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "अल्टीमीटर"],
    answer_en: "Barometer",
    answer_hi: "बैरोमीटर",
    attempted: false,
    selected: ""
  },
  {
    "num":35,
    question_en: "Who was the first Indian to win a Nobel Prize?",
    question_hi: "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    options_en: ["C. V. Raman", "Rabindranath Tagore", "Mother Teresa", "Amartya Sen"],
    options_hi: ["सी. वी. रमन", "रवींद्रनाथ टैगोर", "मदर टेरेसा", "अमर्त्य सेन"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    "num":36,
    question_en: "Which Indian state is famous for bamboo dance?",
    question_hi: "बांस नृत्य के लिए कौन सा भारतीय राज्य प्रसिद्ध है?",
    options_en: ["Nagaland", "Mizoram", "Assam", "Tripura"],
    options_hi: ["नागालैंड", "मिजोरम", "असम", "त्रिपुरा"],
    answer_en: "Mizoram",
    answer_hi: "मिजोरम",
    attempted: false,
    selected: ""
  },
  {
    "num":37,
    question_en: "Which part of the plant absorbs water?",
    question_hi: "पौधे का कौन सा भाग पानी अवशोषित करता है?",
    options_en: ["Stem", "Leaf", "Root", "Flower"],
    options_hi: ["तना", "पत्ता", "जड़", "फूल"],
    answer_en: "Root",
    answer_hi: "जड़",
    attempted: false,
    selected: ""
  },
  {
    "num":38,
    question_en: "Which Indian freedom fighter gave the slogan 'Give me blood and I will give you freedom'?",
    question_hi: "'तुम मुझे खून दो, मैं तुम्हें आज़ादी दूँगा' नारा किसने दिया?",
    options_en: ["Bhagat Singh", "Subhash Chandra Bose", "Jawaharlal Nehru", "Lala Lajpat Rai"],
    options_hi: ["भगत सिंह", "सुभाष चंद्र बोस", "जवाहरलाल नेहरू", "लाला लाजपत राय"],
    answer_en: "Subhash Chandra Bose",
    answer_hi: "सुभाष चंद्र बोस",
    attempted: false,
    selected: ""
  },
  {
    "num":39,
    question_en: "Which metal is the best conductor of electricity?",
    question_hi: "विद्युत का सबसे अच्छा चालक कौन सी धातु है?",
    options_en: ["Copper", "Silver", "Aluminium", "Gold"],
    options_hi: ["तांबा", "चांदी", "एल्युमिनियम", "सोना"],
    answer_en: "Silver",
    answer_hi: "चांदी",
    attempted: false,
    selected: ""
  },
  {
    "num":40,
    question_en: "Which Indian state is known as the Land of Clouds?",
    question_hi: "बादलों की भूमि किस राज्य को कहा जाता है?",
    options_en: ["Sikkim", "Meghalaya", "Arunachal Pradesh", "Manipur"],
    options_hi: ["सिक्किम", "मेघालय", "अरुणाचल प्रदेश", "मणिपुर"],
    answer_en: "Meghalaya",
    answer_hi: "मेघालय",
    attempted: false,
    selected: ""
  },

  {
    "num":41,
    question_en: "Which vitamin is known as anti-sterility vitamin?",
    question_hi: "एंटी-स्टेरिलिटी विटामिन किसे कहा जाता है?",
    options_en: ["Vitamin A", "Vitamin E", "Vitamin K", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन E", "विटामिन K", "विटामिन D"],
    answer_en: "Vitamin E",
    answer_hi: "विटामिन E",
    attempted: false,
    selected: ""
  },
  {
    "num":42,
    question_en: "Which Indian city is known as the City of Palaces?",
    question_hi: "महलों का शहर किसे कहा जाता है?",
    options_en: ["Mysuru", "Jaipur", "Udaipur", "Gwalior"],
    options_hi: ["मैसूर", "जयपुर", "उदयपुर", "ग्वालियर"],
    answer_en: "Mysuru",
    answer_hi: "मैसूर",
    attempted: false,
    selected: ""
  },
  {
    "num":43,
    question_en: "Which gas is used in making fertilizers?",
    question_hi: "उर्वरक बनाने में किस गैस का प्रयोग होता है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    "num":44,
    question_en: "Who was the first Indian Air Force Chief?",
    question_hi: "भारतीय वायुसेना के पहले प्रमुख कौन थे?",
    options_en: ["Arjan Singh", "Subroto Mukerjee", "Pratap Chandra Lal", "Hari Chand Dewan"],
    options_hi: ["अर्जन सिंह", "सुब्रोतो मुखर्जी", "प्रताप चंद्र लाल", "हरी चंद दीवान"],
    answer_en: "Subroto Mukerjee",
    answer_hi: "सुब्रोतो मुखर्जी",
    attempted: false,
    selected: ""
  },
  {
    "num":45,
    question_en: "Which Indian state is famous for Kathakali dance?",
    question_hi: "कथकली नृत्य के लिए कौन सा राज्य प्रसिद्ध है?",
    options_en: ["Kerala", "Tamil Nadu", "Odisha", "Karnataka"],
    options_hi: ["केरल", "तमिलनाडु", "ओडिशा", "कर्नाटक"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    "num":46,
    question_en: "Which Indian river is the longest?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Yamuna", "Ganga", "Godavari", "Brahmaputra"],
    options_hi: ["यमुना", "गंगा", "गोदावरी", "ब्रह्मपुत्र"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
  },
  {
    "num":47,
    question_en: "Which organ is known as the powerhouse of the cell?",
    question_hi: "कोशिका का पावरहाउस किसे कहा जाता है?",
    options_en: ["Nucleus", "Ribosome", "Mitochondria", "Golgi body"],
    options_hi: ["न्यूक्लियस", "राइबोसोम", "माइटोकॉन्ड्रिया", "गोल्जी बॉडी"],
    answer_en: "Mitochondria",
    answer_hi: "माइटोकॉन्ड्रिया",
    attempted: false,
    selected: ""
  },
  {
    "num":48,
    question_en: "Which Indian state is the largest producer of wheat?",
    question_hi: "भारत में गेहूं का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "मध्य प्रदेश"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    "num":49,
    question_en: "Which gas is used to preserve food packets?",
    question_hi: "फूड पैकेट सुरक्षित रखने के लिए कौन सी गैस प्रयोग होती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    "num":50,
    question_en: "Which Indian city is known as the City of Education?",
    question_hi: "शिक्षा का शहर किस भारतीय नगर को कहा जाता है?",
    options_en: ["Pune", "Delhi", "Chennai", "Aligarh"],
    options_hi: ["पुणे", "दिल्ली", "चेन्नई", "अलीगढ़"],
    answer_en: "Pune",
    answer_hi: "पुणे",
    attempted: false,
    selected: ""
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