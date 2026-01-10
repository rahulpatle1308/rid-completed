const questions = [
  {
    "num":1,
    "question_en": "Which state government launched the 'Mukhyamantri Free Laptop Yojana' in 2025?",
    "question_hi": "2025 में किस राज्य सरकार ने 'मुख्यमंत्री फ्री लैपटॉप योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Rajasthan", "Uttar Pradesh", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "राजस्थान", "उत्तर प्रदेश", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which Indian city hosted the 2025 International Film Festival in November?",
    "question_hi": "नवंबर 2025 में अंतरराष्ट्रीय फिल्म महोत्सव की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Goa", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["गोवा", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Who won the 2025 Nobel Peace Prize?",
    "question_hi": "2025 का नोबेल शांति पुरस्कार किसे मिला?",
    "options_en": ["Malala Yousafzai", "Abiy Ahmed", "Filippo Grandi", "Greta Thunberg"],
    "options_hi": ["मलाला यूसफजई", "अबिय अहमद", "फिलिप्पो ग्रांदी", "ग्रेटा थनबर्ग"],
    "answer_en": "Greta Thunberg",
    "answer_hi": "ग्रेटा थनबर्ग",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which Indian cricketer became the fastest to reach 15,000 international runs in 2025?",
    "question_hi": "2025 में कौन से भारतीय क्रिकेटर ने सबसे तेजी से 15,000 अंतरराष्ट्रीय रन बनाए?",
    "options_en": ["Virat Kohli", "Rohit Sharma", "Shikhar Dhawan", "KL Rahul"],
    "options_hi": ["विराट कोहली", "रोहित शर्मा", "शिखर धवन", "केएल राहुल"],
    "answer_en": "Virat Kohli",
    "answer_hi": "विराट कोहली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian city was declared as the cleanest in Swachh Survekshan 2025?",
    "question_hi": "स्वच्छ सर्वेक्षण 2025 में भारत का सबसे स्वच्छ शहर कौन सा घोषित हुआ?",
    "options_en": ["Indore", "Pune", "Ahmedabad", "Surat"],
    "options_hi": ["इंदौर", "पुणे", "अहमदाबाद", "सूरत"],
    "answer_en": "Indore",
    "answer_hi": "इंदौर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which country did India sign a defense pact with in 2025 to enhance maritime security?",
    "question_hi": "2025 में समुद्री सुरक्षा बढ़ाने के लिए भारत ने किस देश के साथ रक्षा समझौता किया?",
    "options_en": ["Australia", "USA", "Japan", "France"],
    "options_hi": ["ऑस्ट्रेलिया", "यूएसए", "जापान", "फ्रांस"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which Indian state government announced 'Digital Health ID' rollout in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य सरकार ने 'डिजिटल हेल्थ आईडी' की शुरुआत की घोषणा की?",
    "options_en": ["Kerala", "Maharashtra", "Telangana", "Karnataka"],
    "options_hi": ["केरल", "महाराष्ट्र", "तेलंगाना", "कर्नाटक"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which country hosted the 2025 G20 Summit?",
    "question_hi": "2025 में G20 शिखर सम्मेलन की मेजबानी किस देश ने की?",
    "options_en": ["Brazil", "India", "Italy", "South Korea"],
    "options_hi": ["ब्राजील", "भारत", "इटली", "दक्षिण कोरिया"],
    "answer_en": "Brazil",
    "answer_hi": "ब्राजील",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian state declared a ban on single-use plastics in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने सिंगल-यूज़ प्लास्टिक पर प्रतिबंध घोषित किया?",
    "options_en": ["Maharashtra", "Tamil Nadu", "Kerala", "Rajasthan"],
    "options_hi": ["महाराष्ट्र", "तमिलनाडु", "केरल", "राजस्थान"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which Indian company became the first to cross ₹20 trillion market capitalization in 2025?",
    "question_hi": "2025 में कौन सी भारतीय कंपनी ₹20 ट्रिलियन मार्केट कैपिटलाइज़ेशन पार करने वाली पहली कंपनी बनी?",
    "options_en": ["Reliance Industries", "Tata Consultancy Services", "Infosys", "HDFC Bank"],
    "options_hi": ["रिलायंस इंडस्ट्रीज", "टाटा कंसल्टेंसी सर्विसेज", "इंफोसिस", "एचडीएफसी बैंक"],
    "answer_en": "Reliance Industries",
    "answer_hi": "रिलायंस इंडस्ट्रीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which Indian city hosted the 2025 International Yoga Day celebrations?",
    "question_hi": "2025 में अंतरराष्ट्रीय योग दिवस की समारोह की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Rishikesh", "Mysuru", "Pune"],
    "options_hi": ["नई दिल्ली", "ऋषिकेश", "मैसूर", "पुणे"],
    "answer_en": "Rishikesh",
    "answer_hi": "ऋषिकेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which Indian sportsperson won the Laureus World Sports Award 2025?",
    "question_hi": "2025 में कौन से भारतीय खिलाड़ी को लॉरियस वर्ल्ड स्पोर्ट्स अवार्ड मिला?",
    "options_en": ["PV Sindhu", "Neeraj Chopra", "Virat Kohli", "Manika Batra"],
    "options_hi": ["पीवी सिंधु", "नीरज चोपड़ा", "विराट कोहली", "मानिका बत्रा"],
    "answer_en": "Neeraj Chopra",
    "answer_hi": "नीरज चोपड़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which country hosted the 2025 UN Climate Change Conference?",
    "question_hi": "2025 में संयुक्त राष्ट्र जलवायु परिवर्तन सम्मेलन की मेजबानी किस देश ने की?",
    "options_en": ["Germany", "Canada", "UK", "France"],
    "options_hi": ["जर्मनी", "कनाडा", "यूके", "फ्रांस"],
    "answer_en": "Germany",
    "answer_hi": "जर्मनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which Indian state launched the 'Solar City Mission' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'सोलर सिटी मिशन' शुरू किया?",
    "options_en": ["Gujarat", "Rajasthan", "Maharashtra", "Karnataka"],
    "options_hi": ["गुजरात", "राजस्थान", "महाराष्ट्र", "कर्नाटक"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Who became the first female Chief Justice of India in 2025?",
    "question_hi": "2025 में भारत की पहली महिला मुख्य न्यायाधीश कौन बनी?",
    "options_en": ["Justice Indira Banerjee", "Justice Ranjana Desai", "Justice Gita Mittal", "Justice Bela Trivedi"],
    "options_hi": ["जस्टिस इंदिरा बनर्जी", "जस्टिस रंजना देसाई", "जस्टिस गीता मित्तल", "जस्टिस बेला त्रिवेदी"],
    "answer_en": "Justice Indira Banerjee",
    "answer_hi": "जस्टिस इंदिरा बनर्जी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which Indian institute launched its first AI Research Center in 2025?",
    "question_hi": "2025 में किस भारतीय संस्थान ने अपना पहला AI रिसर्च सेंटर लॉन्च किया?",
    "options_en": ["IIT Hyderabad", "IIT Delhi", "IIT Bombay", "IISc Bangalore"],
    "options_hi": ["आईआईटी हैदराबाद", "आईआईटी दिल्ली", "आईआईटी बॉम्बे", "आईआईएससी बैंगलोर"],
    "answer_en": "IIT Hyderabad",
    "answer_hi": "आईआईटी हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which country did India conduct its first joint naval exercise 'Samudra Shakti' in 2025?",
    "question_hi": "2025 में भारत ने अपना पहला संयुक्त नौसैनिक अभ्यास 'समुद्र शक्ति' किस देश के साथ किया?",
    "options_en": ["Japan", "USA", "Australia", "France"],
    "options_hi": ["जापान", "यूएसए", "ऑस्ट्रेलिया", "फ्रांस"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which Indian state became the first to implement 5G in government offices in 2025?",
    "question_hi": "2025 में कौन सा भारतीय राज्य पहला था जिसने सरकारी कार्यालयों में 5G लागू किया?",
    "options_en": ["Telangana", "Karnataka", "Maharashtra", "Delhi"],
    "options_hi": ["तेलंगाना", "कर्नाटक", "महाराष्ट्र", "दिल्ली"],
    "answer_en": "Telangana",
    "answer_hi": "तेलंगाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which Indian university ranked first in NIRF 2025 for engineering?",
    "question_hi": "2025 में इंजीनियरिंग के लिए NIRF में कौन सा भारतीय विश्वविद्यालय पहले स्थान पर रहा?",
    "options_en": ["IIT Madras", "IIT Delhi", "IIT Bombay", "IIT Kharagpur"],
    "options_hi": ["आईआईटी मद्रास", "आईआईटी दिल्ली", "आईआईटी बॉम्बे", "आईआईटी खड़गपुर"],
    "answer_en": "IIT Madras",
    "answer_hi": "आईआईटी मद्रास",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which Indian railway zone launched 'Bharat Gaurav Tourist Train' in 2025?",
    "question_hi": "2025 में किस भारतीय रेलवे जोन ने 'भारत गौरव टूरिस्ट ट्रेन' शुरू की?",
    "options_en": ["Western Railway", "Northern Railway", "Southern Railway", "Eastern Railway"],
    "options_hi": ["पश्चिमी रेलवे", "उत्तरी रेलवे", "दक्षिणी रेलवे", "पूर्वी रेलवे"],
    "answer_en": "Western Railway",
    "answer_hi": "पश्चिमी रेलवे",
    "attempted": false,
    "selected": ""
  },
    {
    "num":21,
    "question_en": "Which Indian city hosted the 2025 BRICS Business Forum?",
    "question_hi": "2025 में BRICS बिजनेस फोरम की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Mumbai", "Bengaluru", "Hyderabad"],
    "options_hi": ["नई दिल्ली", "मुंबई", "बैंगलोर", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which Indian company became the first unicorn in the AI sector in 2025?",
    "question_hi": "2025 में किस भारतीय कंपनी ने AI सेक्टर में पहला यूनिकॉर्न बनने का गौरव हासिल किया?",
    "options_en": ["InnoAI", "Haptik", "Cognizant AI", "Infosys AI Labs"],
    "options_hi": ["इन्नोएआई", "हैप्टिक", "कॉग्निजेंट AI", "इंफोसिस AI लैब्स"],
    "answer_en": "InnoAI",
    "answer_hi": "इन्नोएआई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which Indian state launched the 'Green Urban Mission' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'ग्रीन अर्बन मिशन' शुरू किया?",
    "options_en": ["Maharashtra", "Rajasthan", "Kerala", "Tamil Nadu"],
    "options_hi": ["महाराष्ट्र", "राजस्थान", "केरल", "तमिलनाडु"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which Indian city hosted the 2025 International Science Congress?",
    "question_hi": "2025 में अंतरराष्ट्रीय विज्ञान कांग्रेस की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Bengaluru", "New Delhi", "Hyderabad", "Pune"],
    "options_hi": ["बैंगलोर", "नई दिल्ली", "हैदराबाद", "पुणे"],
    "answer_en": "Bengaluru",
    "answer_hi": "बैंगलोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which Indian cricketer became the fastest to score 10,000 T20 international runs in 2025?",
    "question_hi": "2025 में किस भारतीय क्रिकेटर ने सबसे तेजी से 10,000 T20 अंतरराष्ट्रीय रन बनाए?",
    "options_en": ["Rohit Sharma", "Virat Kohli", "KL Rahul", "Shikhar Dhawan"],
    "options_hi": ["रोहित शर्मा", "विराट कोहली", "केएल राहुल", "शिखर धवन"],
    "answer_en": "Rohit Sharma",
    "answer_hi": "रोहित शर्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which Indian tech startup launched India's first quantum computing service in 2025?",
    "question_hi": "2025 में किस भारतीय टेक स्टार्टअप ने भारत की पहली क्वांटम कंप्यूटिंग सेवा लॉन्च की?",
    "options_en": ["QNu Labs", "InnoQuantum", "Tata Quantum", "Infosys QTech"],
    "options_hi": ["क्यूनू लैब्स", "इन्नोक्वांटम", "टाटा क्वांटम", "इंफोसिस QTech"],
    "answer_en": "QNu Labs",
    "answer_hi": "क्यूनू लैब्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which Indian state became the first to implement 100% renewable energy in government buildings in 2025?",
    "question_hi": "2025 में कौन सा भारतीय राज्य सरकारी भवनों में 100% नवीकरणीय ऊर्जा लागू करने वाला पहला राज्य बना?",
    "options_en": ["Himachal Pradesh", "Karnataka", "Gujarat", "Kerala"],
    "options_hi": ["हिमाचल प्रदेश", "कर्नाटक", "गुजरात", "केरल"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which country did India conduct its first joint space experiment in 2025?",
    "question_hi": "2025 में भारत ने अपना पहला संयुक्त अंतरिक्ष प्रयोग किस देश के साथ किया?",
    "options_en": ["USA", "France", "Japan", "Russia"],
    "options_hi": ["यूएसए", "फ्रांस", "जापान", "रूस"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian city became the first 'Digital Health City' in 2025?",
    "question_hi": "2025 में कौन सा भारतीय शहर पहला 'डिजिटल हेल्थ सिटी' बना?",
    "options_en": ["Hyderabad", "Bengaluru", "Pune", "Ahmedabad"],
    "options_hi": ["हैदराबाद", "बैंगलोर", "पुणे", "अहमदाबाद"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which Indian institution launched a National AI Policy in 2025?",
    "question_hi": "2025 में किस भारतीय संस्थान ने राष्ट्रीय AI नीति लॉन्च की?",
    "options_en": ["NITI Aayog", "ISRO", "IIT Delhi", "DST"],
    "options_hi": ["नीति आयोग", "इसरो", "आईआईटी दिल्ली", "डीएसटी"],
    "answer_en": "NITI Aayog",
    "answer_hi": "नीति आयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which Indian state hosted the 2025 International Tourism Expo?",
    "question_hi": "2025 में अंतरराष्ट्रीय पर्यटन एक्सपो की मेजबानी किस भारतीय राज्य ने की?",
    "options_en": ["Rajasthan", "Goa", "Kerala", "Maharashtra"],
    "options_hi": ["राजस्थान", "गोवा", "केरल", "महाराष्ट्र"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which Indian railway introduced AI-based predictive maintenance in 2025?",
    "question_hi": "2025 में किस भारतीय रेलवे ने AI आधारित प्रेडिक्टिव मेंटेनेंस शुरू की?",
    "options_en": ["Northern Railway", "Western Railway", "Eastern Railway", "Southern Railway"],
    "options_hi": ["उत्तरी रेलवे", "पश्चिमी रेलवे", "पूर्वी रेलवे", "दक्षिणी रेलवे"],
    "answer_en": "Western Railway",
    "answer_hi": "पश्चिमी रेलवे",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian city hosted the 2025 Smart Cities Conference?",
    "question_hi": "2025 में स्मार्ट सिटीज़ कॉन्फ्रेंस की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Bengaluru", "Ahmedabad", "Pune"],
    "options_hi": ["नई दिल्ली", "बैंगलोर", "अहमदाबाद", "पुणे"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which Indian bank launched 'Green Bonds' in 2025 to fund sustainable projects?",
    "question_hi": "2025 में किस भारतीय बैंक ने सतत परियोजनाओं के लिए 'ग्रीन बॉन्ड्स' लॉन्च किए?",
    "options_en": ["State Bank of India", "HDFC Bank", "ICICI Bank", "Punjab National Bank"],
    "options_hi": ["स्टेट बैंक ऑफ इंडिया", "एचडीएफसी बैंक", "आईसीआईसीआई बैंक", "पंजाब नेशनल बैंक"],
    "answer_en": "State Bank of India",
    "answer_hi": "स्टेट बैंक ऑफ इंडिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which Indian city became the first 5G-enabled smart city in 2025?",
    "question_hi": "2025 में कौन सा भारतीय शहर पहला 5G-सक्षम स्मार्ट सिटी बना?",
    "options_en": ["Hyderabad", "Pune", "Bengaluru", "Ahmedabad"],
    "options_hi": ["हैदराबाद", "पुणे", "बैंगलोर", "अहमदाबाद"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which Indian IT company launched a blockchain platform for farmers in 2025?",
    "question_hi": "2025 में किस भारतीय IT कंपनी ने किसानों के लिए ब्लॉकचेन प्लेटफ़ॉर्म लॉन्च किया?",
    "options_en": ["TCS", "Infosys", "Wipro", "Tech Mahindra"],
    "options_hi": ["टाटा कंसल्टेंसी सर्विसेज", "इंफोसिस", "विप्रो", "टेक महिंद्रा"],
    "answer_en": "TCS",
    "answer_hi": "टाटा कंसल्टेंसी सर्विसेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian space mission launched the 'Chandrayaan 4' lunar probe in 2025?",
    "question_hi": "2025 में किस भारतीय अंतरिक्ष मिशन ने 'चंद्रयान 4' लूनर प्रोब लॉन्च किया?",
    "options_en": ["ISRO", "DRDO", "NASA", "CNSA"],
    "options_hi": ["इसरो", "डीआरडीओ", "नासा", "सीएनएसए"],
    "answer_en": "ISRO",
    "answer_hi": "इसरो",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which Indian state implemented 100% electric public buses in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 100% इलेक्ट्रिक सार्वजनिक बसें लागू कीं?",
    "options_en": ["Karnataka", "Maharashtra", "Tamil Nadu", "Delhi"],
    "options_hi": ["कर्नाटक", "महाराष्ट्र", "तमिलनाडु", "दिल्ली"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Indian institute launched a Center for Quantum AI in 2025?",
    "question_hi": "2025 में किस भारतीय संस्थान ने क्वांटम AI सेंटर लॉन्च किया?",
    "options_en": ["IISc Bangalore", "IIT Bombay", "IIT Delhi", "IIT Madras"],
    "options_hi": ["आईआईएससी बैंगलोर", "आईआईटी बॉम्बे", "आईआईटी दिल्ली", "आईआईटी मद्रास"],
    "answer_en": "IISc Bangalore",
    "answer_hi": "आईआईएससी बैंगलोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which Indian state was awarded for highest solar energy generation in 2025?",
    "question_hi": "2025 में सबसे अधिक सौर ऊर्जा उत्पादन के लिए किस भारतीय राज्य को पुरस्कार दिया गया?",
    "options_en": ["Rajasthan", "Gujarat", "Maharashtra", "Karnataka"],
    "options_hi": ["राजस्थान", "गुजरात", "महाराष्ट्र", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which Indian athlete won gold at the 2025 World Athletics Championship?",
    "question_hi": "2025 में विश्व एथलेटिक्स चैंपियनशिप में कौन सा भारतीय एथलीट स्वर्ण पदक जीता?",
    "options_en": ["Neeraj Chopra", "Murali Sreeshankar", "Dutee Chand", "Hima Das"],
    "options_hi": ["नीरज चोपड़ा", "मुरली श्रीशंकर", "दुती चंद", "हिमा दास"],
    "answer_en": "Neeraj Chopra",
    "answer_hi": "नीरज चोपड़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which country did India launch a joint defense exercise 'Vajra Prahar' with in 2025?",
    "question_hi": "2025 में भारत ने किस देश के साथ संयुक्त रक्षा अभ्यास 'वज्र प्रहार' शुरू किया?",
    "options_en": ["USA", "Australia", "Japan", "France"],
    "options_hi": ["यूएसए", "ऑस्ट्रेलिया", "जापान", "फ्रांस"],
    "answer_en": "USA",
    "answer_hi": "यूएसए",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which Indian state hosted the first 'International Yoga Festival' in 2025?",
    "question_hi": "2025 में पहला 'अंतरराष्ट्रीय योग महोत्सव' किस भारतीय राज्य में आयोजित किया गया?",
    "options_en": ["Rishikesh", "Kerala", "Maharashtra", "Himachal Pradesh"],
    "options_hi": ["ऋषिकेश", "केरल", "महाराष्ट्र", "हिमाचल प्रदेश"],
    "answer_en": "Rishikesh",
    "answer_hi": "ऋषिकेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which Indian company launched its first EV scooter in 2025?",
    "question_hi": "2025 में किस भारतीय कंपनी ने अपनी पहली EV स्कूटर लॉन्च की?",
    "options_en": ["Ola Electric", "Hero Electric", "Ather Energy", "Bajaj Auto"],
    "options_hi": ["ओला इलेक्ट्रिक", "हीरो इलेक्ट्रिक", "एथर एनर्जी", "बजाज ऑटो"],
    "answer_en": "Ola Electric",
    "answer_hi": "ओला इलेक्ट्रिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian festival was added to UNESCO's Intangible Cultural Heritage list in 2025?",
    "question_hi": "2025 में किस भारतीय त्योहार को यूनेस्को की अमूर्त सांस्कृतिक विरासत सूची में शामिल किया गया?",
    "options_en": ["Diwali", "Holi", "Navratri", "Durga Puja"],
    "options_hi": ["दीवाली", "होली", "नवरात्रि", "दुर्गा पूजा"],
    "answer_en": "Diwali",
    "answer_hi": "दीवाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which Indian state government launched 'Women Tech Startups Initiative' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य सरकार ने 'Women Tech Startups Initiative' लॉन्च किया?",
    "options_en": ["Telangana", "Maharashtra", "Kerala", "Karnataka"],
    "options_hi": ["तेलंगाना", "महाराष्ट्र", "केरल", "कर्नाटक"],
    "answer_en": "Telangana",
    "answer_hi": "तेलंगाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian city became first to implement blockchain-based land records in 2025?",
    "question_hi": "2025 में किस भारतीय शहर ने ब्लॉकचेन आधारित भू-अभिलेख लागू करने वाला पहला शहर बना?",
    "options_en": ["Ahmedabad", "Bengaluru", "Hyderabad", "Chennai"],
    "options_hi": ["अहमदाबाद", "बैंगलोर", "हैदराबाद", "चेन्नई"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which Indian university hosted 'Global AI Conference 2025'?",
    "question_hi": "2025 में 'Global AI Conference' की मेजबानी किस भारतीय विश्वविद्यालय ने की?",
    "options_en": ["IIT Delhi", "IIT Bombay", "IISc Bangalore", "IIT Madras"],
    "options_hi": ["आईआईटी दिल्ली", "आईआईटी बॉम्बे", "आईआईएससी बैंगलोर", "आईआईटी मद्रास"],
    "answer_en": "IIT Delhi",
    "answer_hi": "आईआईटी दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian state launched a 'Green Hydrogen Policy' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'ग्रीन हाइड्रोजन पॉलिसी' लॉन्च की?",
    "options_en": ["Gujarat", "Maharashtra", "Rajasthan", "Karnataka"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "राजस्थान", "कर्नाटक"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which Indian city was declared the 'Best City for Startups' in 2025?",
    "question_hi": "2025 में किस भारतीय शहर को 'स्टार्टअप्स के लिए सर्वश्रेष्ठ शहर' घोषित किया गया?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Gurgaon"],
    "options_hi": ["बैंगलोर", "हैदराबाद", "पुणे", "गुरुग्राम"],
    "answer_en": "Bengaluru",
    "answer_hi": "बैंगलोर",
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