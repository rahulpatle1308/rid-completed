const questions = [
  {
    "num":1,
    question_en: "Which Indian state is known as the Spice Garden of India?",
    question_hi: "भारत का मसाला बगीचा किस राज्य को कहा जाता है?",
    options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Assam"],
    options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "असम"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    "num":2,
    question_en: "Which vitamin is produced in the skin by sunlight?",
    question_hi: "सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    "num":3,
    question_en: "Who was the first Chief Election Commissioner of India?",
    question_hi: "भारत के पहले मुख्य चुनाव आयुक्त कौन थे?",
    options_en: ["Sukumar Sen", "T. N. Seshan", "R. K. Trivedi", "M. S. Gill"],
    options_hi: ["सुकुमार सेन", "टी. एन. शेषन", "आर. के. त्रिवेदी", "एम. एस. गिल"],
    answer_en: "Sukumar Sen",
    answer_hi: "सुकुमार सेन",
    attempted: false,
    selected: ""
  },
  {
    "num":4,
    question_en: "Which instrument is used to measure earthquakes?",
    question_hi: "भूकंप मापने का यंत्र कौन सा है?",
    options_en: ["Barometer", "Seismograph", "Anemometer", "Thermometer"],
    options_hi: ["बैरोमीटर", "सीस्मोग्राफ", "एनीमोमीटर", "थर्मामीटर"],
    answer_en: "Seismograph",
    answer_hi: "सीस्मोग्राफ",
    attempted: false,
    selected: ""
  },
  {
    "num":5,
    question_en: "Which Indian city is known as the Pink City?",
    question_hi: "गुलाबी शहर किसे कहा जाता है?",
    options_en: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    "num":6,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कमरे के तापमान पर कौन सी धातु द्रव होती है?",
    options_en: ["Mercury", "Lead", "Zinc", "Tin"],
    options_hi: ["पारा", "सीसा", "जस्ता", "टिन"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },
  {
    "num":7,
    question_en: "Who wrote the book 'Discovery of India'?",
    question_hi: "'डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Bose", "Rajendra Prasad"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष बोस", "राजेंद्र प्रसाद"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
  },
  {
    "num":8,
    question_en: "Which Indian river is the longest peninsular river?",
    question_hi: "प्रायद्वीपीय भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Krishna", "Godavari", "Cauvery", "Narmada"],
    options_hi: ["कृष्णा", "गोदावरी", "कावेरी", "नर्मदा"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
  {
    "num":9,
    question_en: "What is the SI unit of power?",
    question_hi: "शक्ति की SI इकाई क्या है?",
    options_en: ["Joule", "Newton", "Watt", "Volt"],
    options_hi: ["जूल", "न्यूटन", "वाट", "वोल्ट"],
    answer_en: "Watt",
    answer_hi: "वाट",
    attempted: false,
    selected: ""
  },
  {
    "num":10,
    question_en: "Which Indian state is the largest producer of tea?",
    question_hi: "भारत में चाय का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["Assam", "West Bengal", "Kerala", "Tamil Nadu"],
    options_hi: ["असम", "पश्चिम बंगाल", "केरल", "तमिलनाडु"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
  },

  {
    "num":11,
    question_en: "Which part of the eye controls the amount of light entering?",
    question_hi: "आँख का कौन सा भाग प्रकाश की मात्रा नियंत्रित करता है?",
    options_en: ["Retina", "Cornea", "Iris", "Lens"],
    options_hi: ["रेटिना", "कॉर्निया", "आइरिस", "लेंस"],
    answer_en: "Iris",
    answer_hi: "आइरिस",
    attempted: false,
    selected: ""
  },
  {
    "num":12,
    question_en: "Which Indian city is known as the City of Joy?",
    question_hi: "आनंद का शहर किसे कहा जाता है?",
    options_en: ["Mumbai", "Kolkata", "Chennai", "Delhi"],
    options_hi: ["मुंबई", "कोलकाता", "चेन्नई", "दिल्ली"],
    answer_en: "Kolkata",
    answer_hi: "कोलकाता",
    attempted: false,
    selected: ""
  },
  {
    "num":13,
    question_en: "Which blood group is known as universal donor?",
    question_hi: "सार्वभौमिक दाता कौन सा रक्त समूह है?",
    options_en: ["A", "B", "AB", "O"],
    options_hi: ["A", "B", "AB", "O"],
    answer_en: "O",
    answer_hi: "O",
    attempted: false,
    selected: ""
  },
  {
    "num":14,
    question_en: "Which Indian missile is known as Fire Missile?",
    question_hi: "अग्नि मिसाइल किस नाम से जानी जाती है?",
    options_en: ["Prithvi", "Agni", "Akash", "Nag"],
    options_hi: ["पृथ्वी", "अग्नि", "आकाश", "नाग"],
    answer_en: "Agni",
    answer_hi: "अग्नि",
    attempted: false,
    selected: ""
  },
  {
    "num":15,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "अग्निशामक यंत्र में कौन सी गैस उपयोग होती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    "num":16,
    question_en: "Who was the first Mughal Emperor of India?",
    question_hi: "भारत का पहला मुगल सम्राट कौन था?",
    options_en: ["Akbar", "Babur", "Humayun", "Aurangzeb"],
    options_hi: ["अकबर", "बाबर", "हुमायूं", "औरंगजेब"],
    answer_en: "Babur",
    answer_hi: "बाबर",
    attempted: false,
    selected: ""
  },
  {
    "num":17,
    question_en: "Which Indian state has the lowest population?",
    question_hi: "भारत में सबसे कम जनसंख्या वाला राज्य कौन सा है?",
    options_en: ["Sikkim", "Goa", "Mizoram", "Arunachal Pradesh"],
    options_hi: ["सिक्किम", "गोवा", "मिजोरम", "अरुणाचल प्रदेश"],
    answer_en: "Sikkim",
    answer_hi: "सिक्किम",
    attempted: false,
    selected: ""
  },
  {
    "num":18,
    question_en: "What is the boiling point of water?",
    question_hi: "पानी का क्वथनांक कितना होता है?",
    options_en: ["90°C", "95°C", "100°C", "110°C"],
    options_hi: ["90°C", "95°C", "100°C", "110°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    "num":19,
    question_en: "Which Indian river flows through the rift valley?",
    question_hi: "दरार घाटी से बहने वाली भारतीय नदी कौन सी है?",
    options_en: ["Ganga", "Yamuna", "Narmada", "Godavari"],
    options_hi: ["गंगा", "यमुना", "नर्मदा", "गोदावरी"],
    answer_en: "Narmada",
    answer_hi: "नर्मदा",
    attempted: false,
    selected: ""
  },
  {
    "num":20,
    question_en: "Which gas is filled in balloons?",
    question_hi: "गुब्बारों में कौन सी गैस भरी जाती है?",
    options_en: ["Hydrogen", "Oxygen", "Helium", "Nitrogen"],
    options_hi: ["हाइड्रोजन", "ऑक्सीजन", "हीलियम", "नाइट्रोजन"],
    answer_en: "Helium",
    answer_hi: "हीलियम",
    attempted: false,
    selected: ""
  },

  {
    "num":21,
    question_en: "Which vitamin helps in blood clotting?",
    question_hi: "रक्त के थक्के जमाने में कौन सा विटामिन सहायक है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन K", "विटामिन D"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
  },
  {
    "num":22,
    question_en: "Which Indian city is known as the Steel City?",
    question_hi: "स्टील सिटी किसे कहा जाता है?",
    options_en: ["Bhilai", "Rourkela", "Jamshedpur", "Durgapur"],
    options_hi: ["भिलाई", "राउरकेला", "जमशेदपुर", "दुर्गापुर"],
    answer_en: "Jamshedpur",
    answer_hi: "जमशेदपुर",
    attempted: false,
    selected: ""
  },
  {
    "num":23,
    question_en: "Which element is essential for making steel?",
    question_hi: "स्टील बनाने के लिए कौन सा तत्व आवश्यक है?",
    options_en: ["Carbon", "Copper", "Aluminium", "Zinc"],
    options_hi: ["कार्बन", "तांबा", "एल्युमिनियम", "जस्ता"],
    answer_en: "Carbon",
    answer_hi: "कार्बन",
    attempted: false,
    selected: ""
  },
  {
    "num":24,
    question_en: "Who was the first Indian woman Governor?",
    question_hi: "भारत की पहली महिला राज्यपाल कौन थीं?",
    options_en: ["Sarojini Naidu", "Indira Gandhi", "Vijaya Lakshmi Pandit", "Pratibha Patil"],
    options_hi: ["सरोजिनी नायडू", "इंदिरा गांधी", "विजया लक्ष्मी पंडित", "प्रतिभा पाटिल"],
    answer_en: "Sarojini Naidu",
    answer_hi: "सरोजिनी नायडू",
    attempted: false,
    selected: ""
  },
  {
    "num":25,
    question_en: "Which Indian state is famous for Bihu dance?",
    question_hi: "बिहू नृत्य के लिए कौन सा राज्य प्रसिद्ध है?",
    options_en: ["Assam", "Manipur", "Nagaland", "Tripura"],
    options_hi: ["असम", "मणिपुर", "नागालैंड", "त्रिपुरा"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
  },
  {
    "num":26,
    question_en: "Which Indian river is the largest by water discharge?",
    question_hi: "जल प्रवाह के आधार पर भारत की सबसे बड़ी नदी कौन सी है?",
    options_en: ["Ganga", "Godavari", "Brahmaputra", "Indus"],
    options_hi: ["गंगा", "गोदावरी", "ब्रह्मपुत्र", "सिंधु"],
    answer_en: "Brahmaputra",
    answer_hi: "ब्रह्मपुत्र",
    attempted: false,
    selected: ""
  },
  {
    "num":27,
    question_en: "Which organ controls respiration in humans?",
    question_hi: "मानव में श्वसन को कौन नियंत्रित करता है?",
    options_en: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    options_hi: ["सेरिब्रम", "सेरिबेलम", "मेडुला", "हाइपोथैलेमस"],
    answer_en: "Medulla",
    answer_hi: "मेडुला",
    attempted: false,
    selected: ""
  },
  {
    "num":28,
    question_en: "Which Indian state is the largest producer of rice?",
    question_hi: "भारत में चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["West Bengal", "Uttar Pradesh", "Punjab", "Andhra Pradesh"],
    options_hi: ["पश्चिम बंगाल", "उत्तर प्रदेश", "पंजाब", "आंध्र प्रदेश"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: ""
  },
  {
    "num":29,
    question_en: "Which gas is used to ripen fruits artificially?",
    question_hi: "फलों को कृत्रिम रूप से पकाने के लिए कौन सी गैस उपयोग होती है?",
    options_en: ["Ethylene", "Methane", "Nitrogen", "Carbon Dioxide"],
    options_hi: ["एथिलीन", "मीथेन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Ethylene",
    answer_hi: "एथिलीन",
    attempted: false,
    selected: ""
  },
  {
    "num":30,
    question_en: "Which Indian city is known as the City of Seven Islands?",
    question_hi: "सात द्वीपों का शहर किसे कहा जाता है?",
    options_en: ["Mumbai", "Kolkata", "Chennai", "Kochi"],
    options_hi: ["मुंबई", "कोलकाता", "चेन्नई", "कोच्चि"],
    answer_en: "Mumbai",
    answer_hi: "मुंबई",
    attempted: false,
    selected: ""
  },

  {
    "num":31,
    question_en: "Which vitamin is known as anti-rickets vitamin?",
    question_hi: "एंटी-रिकेट्स विटामिन किसे कहा जाता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    "num":32,
    question_en: "Which Indian city is known as the City of Gardens?",
    question_hi: "गार्डन सिटी किसे कहा जाता है?",
    options_en: ["Bengaluru", "Pune", "Mysuru", "Chandigarh"],
    options_hi: ["बेंगलुरु", "पुणे", "मैसूर", "चंडीगढ़"],
    answer_en: "Bengaluru",
    answer_hi: "बेंगलुरु",
    attempted: false,
    selected: ""
  },
  {
    "num":33,
    question_en: "Which mineral is essential for nuclear power generation?",
    question_hi: "परमाणु ऊर्जा उत्पादन के लिए कौन सा खनिज आवश्यक है?",
    options_en: ["Iron", "Coal", "Uranium", "Bauxite"],
    options_hi: ["लोहा", "कोयला", "यूरेनियम", "बॉक्साइट"],
    answer_en: "Uranium",
    answer_hi: "यूरेनियम",
    attempted: false,
    selected: ""
  },
  {
    "num":34,
    question_en: "Who was the first Indian to go into space?",
    question_hi: "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
    options_en: ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Vikram Sarabhai"],
    options_hi: ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "विक्रम साराभाई"],
    answer_en: "Rakesh Sharma",
    answer_hi: "राकेश शर्मा",
    attempted: false,
    selected: ""
  },
  {
    "num":35,
    question_en: "Which Indian state is famous for Garba dance?",
    question_hi: "गरबा नृत्य के लिए कौन सा राज्य प्रसिद्ध है?",
    options_en: ["Rajasthan", "Gujarat", "Maharashtra", "Madhya Pradesh"],
    options_hi: ["राजस्थान", "गुजरात", "महाराष्ट्र", "मध्य प्रदेश"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    "num":36,
    question_en: "Which Indian river originates from Gangotri glacier?",
    question_hi: "गंगोत्री हिमनद से निकलने वाली नदी कौन सी है?",
    options_en: ["Yamuna", "Bhagirathi", "Alaknanda", "Mandakini"],
    options_hi: ["यमुना", "भागीरथी", "अलकनंदा", "मंदाकिनी"],
    answer_en: "Bhagirathi",
    answer_hi: "भागीरथी",
    attempted: false,
    selected: ""
  },
  {
    "num":37,
    question_en: "Which organ produces insulin?",
    question_hi: "इंसुलिन का उत्पादन कौन सा अंग करता है?",
    options_en: ["Liver", "Pancreas", "Kidney", "Stomach"],
    options_hi: ["यकृत", "अग्न्याशय", "गुर्दा", "आमाशय"],
    answer_en: "Pancreas",
    answer_hi: "अग्न्याशय",
    attempted: false,
    selected: ""
  },
  {
    "num":38,
    question_en: "Which Indian state is the largest producer of cotton?",
    question_hi: "भारत में कपास का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["Gujarat", "Maharashtra", "Punjab", "Haryana"],
    options_hi: ["गुजरात", "महाराष्ट्र", "पंजाब", "हरियाणा"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    "num":39,
    question_en: "Which gas is responsible for the greenhouse effect?",
    question_hi: "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    "num":40,
    question_en: "Which Indian city is known as the City of Temples?",
    question_hi: "मंदिरों का शहर किसे कहा जाता है?",
    options_en: ["Varanasi", "Madurai", "Bhubaneswar", "Tirupati"],
    options_hi: ["वाराणसी", "मदुरै", "भुवनेश्वर", "तिरुपति"],
    answer_en: "Bhubaneswar",
    answer_hi: "भुवनेश्वर",
    attempted: false,
    selected: ""
  },

  {
    "num":41,
    question_en: "Which vitamin is necessary for healthy skin?",
    question_hi: "स्वस्थ त्वचा के लिए कौन सा विटामिन आवश्यक है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin A",
    answer_hi: "विटामिन A",
    attempted: false,
    selected: ""
  },
  {
    "num":42,
    question_en: "Which Indian city is known as the City of Pearls?",
    question_hi: "मोती का शहर किसे कहा जाता है?",
    options_en: ["Hyderabad", "Kochi", "Surat", "Jaipur"],
    options_hi: ["हैदराबाद", "कोच्चि", "सूरत", "जयपुर"],
    answer_en: "Hyderabad",
    answer_hi: "हैदराबाद",
    attempted: false,
    selected: ""
  },
  {
    "num":43,
    question_en: "Which metal is used for galvanization?",
    question_hi: "गैल्वनाइजेशन में कौन सी धातु प्रयोग होती है?",
    options_en: ["Copper", "Zinc", "Aluminium", "Tin"],
    options_hi: ["तांबा", "जस्ता", "एल्युमिनियम", "टिन"],
    answer_en: "Zinc",
    answer_hi: "जस्ता",
    attempted: false,
    selected: ""
  },
  {
    "num":44,
    question_en: "Who was the first Indian woman Prime Minister?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    options_en: ["Indira Gandhi", "Pratibha Patil", "Sonia Gandhi", "Sarojini Naidu"],
    options_hi: ["इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी", "सरोजिनी नायडू"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    "num":45,
    question_en: "Which Indian state is famous for Lavani dance?",
    question_hi: "लावणी नृत्य के लिए कौन सा राज्य प्रसिद्ध है?",
    options_en: ["Maharashtra", "Gujarat", "Rajasthan", "Karnataka"],
    options_hi: ["महाराष्ट्र", "गुजरात", "राजस्थान", "कर्नाटक"],
    answer_en: "Maharashtra",
    answer_hi: "महाराष्ट्र",
    attempted: false,
    selected: ""
  },
  {
    "num":46,
    question_en: "Which Indian river is called Dakshin Ganga?",
    question_hi: "दक्षिण गंगा किस नदी को कहा जाता है?",
    options_en: ["Krishna", "Kaveri", "Godavari", "Tungabhadra"],
    options_hi: ["कृष्णा", "कावेरी", "गोदावरी", "तुंगभद्रा"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
  {
    "num":47,
    question_en: "Which part of the cell contains genetic material?",
    question_hi: "कोशिका का कौन सा भाग आनुवंशिक पदार्थ रखता है?",
    options_en: ["Nucleus", "Cytoplasm", "Mitochondria", "Ribosome"],
    options_hi: ["न्यूक्लियस", "साइटोप्लाज्म", "माइटोकॉन्ड्रिया", "राइबोसोम"],
    answer_en: "Nucleus",
    answer_hi: "न्यूक्लियस",
    attempted: false,
    selected: ""
  },
  {
    "num":48,
    question_en: "Which Indian state is the largest producer of pulses?",
    question_hi: "भारत में दलहन का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["Rajasthan", "Madhya Pradesh", "Uttar Pradesh", "Maharashtra"],
    options_hi: ["राजस्थान", "मध्य प्रदेश", "उत्तर प्रदेश", "महाराष्ट्र"],
    answer_en: "Madhya Pradesh",
    answer_hi: "मध्य प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    "num":49,
    question_en: "Which gas is also known as laughing gas?",
    question_hi: "हँसाने वाली गैस किसे कहा जाता है?",
    options_en: ["Nitrous Oxide", "Carbon Dioxide", "Methane", "Helium"],
    options_hi: ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "मीथेन", "हीलियम"],
    answer_en: "Nitrous Oxide",
    answer_hi: "नाइट्रस ऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    "num":50,
    question_en: "Which Indian city is known as the City of Lights?",
    question_hi: "रोशनी का शहर किसे कहा जाता है?",
    options_en: ["Delhi", "Jaipur", "Varanasi", "Mumbai"],
    options_hi: ["दिल्ली", "जयपुर", "वाराणसी", "मुंबई"],
    answer_en: "Varanasi",
    answer_hi: "वाराणसी",
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