const questions = [
  {
    "num":1,
    "question_en": "Which Indian state launched 'Digital Skill Development Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'डिजिटल स्किल डेवलपमेंट प्रोग्राम' शुरू किया?",
    "options_en": ["Kerala", "Telangana", "Maharashtra", "Karnataka"],
    "options_hi": ["केरल", "तेलंगाना", "महाराष्ट्र", "कर्नाटक"],
    "answer_en": "Telangana",
    "answer_hi": "तेलंगाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Which Indian city hosted the 2025 International Smart Governance Summit?",
    "question_hi": "2025 में अंतरराष्ट्रीय स्मार्ट गवर्नेंस समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Hyderabad"],
    "options_hi": ["नई दिल्ली", "बैंगलोर", "मुंबई", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which Indian athlete won gold at the 2025 World Shooting Championship in Women’s 10m Air Rifle?",
    "question_hi": "2025 में विश्व शूटिंग चैंपियनशिप में महिलाओं की 10 मीटर एयर राइफल में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Apurvi Chandela", "Elavenil Valarivan", "Rahi Sarnobat", "Saurabh Chaudhary"],
    "options_hi": ["अपुर्वी चंदेला", "एलेवेनिल वालारिवन", "राही सरनोबत", "सौरभ चौधरी"],
    "answer_en": "Apurvi Chandela",
    "answer_hi": "अपुर्वी चंदेला",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Which Indian state launched 'Smart Agriculture Technology Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'स्मार्ट एग्रीकल्चर टेक्नोलॉजी प्रोग्राम' शुरू किया?",
    "options_en": ["Punjab", "Haryana", "Maharashtra", "Karnataka"],
    "options_hi": ["पंजाब", "हरियाणा", "महाराष्ट्र", "कर्नाटक"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian city hosted the 2025 International Renewable Energy Expo?",
    "question_hi": "2025 में अंतरराष्ट्रीय नवीकरणीय ऊर्जा एक्सपो की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Ahmedabad", "Bengaluru", "Mumbai"],
    "options_hi": ["नई दिल्ली", "अहमदाबाद", "बैंगलोर", "मुंबई"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Which Indian athlete won gold at the 2025 World Boxing Championship in 54kg category?",
    "question_hi": "2025 में विश्व बॉक्सिंग चैंपियनशिप में 54 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Amit Panghal", "Vijender Singh", "Lovlina Borgohain", "Bachendri Pal"],
    "options_hi": ["अमित पंघल", "विजेंदर सिंह", "लवलीना बोरगोहैन", "बचेंद्री पाल"],
    "answer_en": "Amit Panghal",
    "answer_hi": "अमित पंघल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which Indian state launched 'Smart Water Management Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'स्मार्ट वाटर मैनेजमेंट प्रोग्राम' शुरू किया?",
    "options_en": ["Rajasthan", "Maharashtra", "Gujarat", "Karnataka"],
    "options_hi": ["राजस्थान", "महाराष्ट्र", "गुजरात", "कर्नाटक"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Which Indian city hosted the 2025 Global Digital Health Summit?",
    "question_hi": "2025 में ग्लोबल डिजिटल हेल्थ समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Bengaluru", "New Delhi", "Mumbai", "Hyderabad"],
    "options_hi": ["बैंगलोर", "नई दिल्ली", "मुंबई", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian athlete won gold at the 2025 World Judo Championship in Women’s 52kg category?",
    "question_hi": "2025 में विश्व जूडो चैंपियनशिप में महिलाओं के 52 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Sanjita Chanu", "Avni Bhatnagar", "Linoy Varghese", "Shushila Devi"],
    "options_hi": ["संजिता चानू", "अवनी भटनागर", "लिनॉय वर्गीस", "शुशीला देवी"],
    "answer_en": "Sanjita Chanu",
    "answer_hi": "संजिता चानू",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Which Indian state launched 'Electric Vehicle Promotion Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'इलेक्ट्रिक व्हीकल प्रमोशन प्रोग्राम' शुरू किया?",
    "options_en": ["Karnataka", "Maharashtra", "Gujarat", "Tamil Nadu"],
    "options_hi": ["कर्नाटक", "महाराष्ट्र", "गुजरात", "तमिलनाडु"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which Indian city hosted the 2025 International AI & Robotics Summit?",
    "question_hi": "2025 में अंतरराष्ट्रीय AI और रोबोटिक्स समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Bengaluru", "Hyderabad", "Mumbai", "New Delhi"],
    "options_hi": ["बैंगलोर", "हैदराबाद", "मुंबई", "नई दिल्ली"],
    "answer_en": "Bengaluru",
    "answer_hi": "बैंगलोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Which Indian athlete won gold at the 2025 World Karate Championship in Women’s -55kg category?",
    "question_hi": "2025 में विश्व कराटे चैंपियनशिप में महिलाओं के -55 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Riya Sharma", "Priya Gurjar", "Ankita Choudhary", "Siddhant Singh"],
    "options_hi": ["रिया शर्मा", "प्रिया गुर्जर", "अंकिता चौधरी", "सिद्धांत सिंह"],
    "answer_en": "Riya Sharma",
    "answer_hi": "रिया शर्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian state launched 'Smart Health Villages Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'स्मार्ट हेल्थ विलेजेज प्रोग्राम' शुरू किया?",
    "options_en": ["Kerala", "Telangana", "Maharashtra", "Gujarat"],
    "options_hi": ["केरल", "तेलंगाना", "महाराष्ट्र", "गुजरात"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Which Indian city hosted the 2025 International Green Energy Conference?",
    "question_hi": "2025 में अंतरराष्ट्रीय ग्रीन एनर्जी कॉन्फ्रेंस की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Ahmedabad", "Bengaluru", "Mumbai"],
    "options_hi": ["नई दिल्ली", "अहमदाबाद", "बैंगलोर", "मुंबई"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which Indian athlete won gold at the 2025 World Archery Championship in Women’s Compound?",
    "question_hi": "2025 में विश्व तीरंदाजी चैंपियनशिप में महिलाओं के कंपाउंड वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Jyothi Surekha Vennam", "Deepika Kumari", "Atanu Das", "Pravin Jadhav"],
    "options_hi": ["ज्योति सुरेखा वेन्नम", "दीपिका कुमारी", "अतनु दास", "प्रवीन जाधव"],
    "answer_en": "Jyothi Surekha Vennam",
    "answer_hi": "ज्योति सुरेखा वेन्नम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Which Indian state launched 'Smart Agriculture Technology Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'स्मार्ट एग्रीकल्चर टेक्नोलॉजी प्रोग्राम' शुरू किया?",
    "options_en": ["Punjab", "Haryana", "Karnataka", "Maharashtra"],
    "options_hi": ["पंजाब", "हरियाणा", "कर्नाटक", "महाराष्ट्र"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which Indian city hosted the 2025 Global AI and Blockchain Summit?",
    "question_hi": "2025 में ग्लोबल AI और ब्लॉकचेन समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Bengaluru", "Hyderabad", "Mumbai", "New Delhi"],
    "options_hi": ["बैंगलोर", "हैदराबाद", "मुंबई", "नई दिल्ली"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Which Indian athlete won gold at the 2025 World Boxing Championship in 60kg category?",
    "question_hi": "2025 में विश्व बॉक्सिंग चैंपियनशिप में 60 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Amit Panghal", "Vijender Singh", "Lovlina Borgohain", "Bachendri Pal"],
    "options_hi": ["अमित पंघल", "विजेंदर सिंह", "लवलीना बोरगोहैन", "बचेंद्री पाल"],
    "answer_en": "Amit Panghal",
    "answer_hi": "अमित पंघल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which Indian state launched 'Digital Tourism Promotion Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'डिजिटल टूरिज्म प्रमोशन प्रोग्राम' शुरू किया?",
    "options_en": ["Rajasthan", "Karnataka", "Maharashtra", "Gujarat"],
    "options_hi": ["राजस्थान", "कर्नाटक", "महाराष्ट्र", "गुजरात"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Which Indian city hosted the 2025 International Smart Governance Summit?",
    "question_hi": "2025 में अंतरराष्ट्रीय स्मार्ट गवर्नेंस समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Hyderabad"],
    "options_hi": ["नई दिल्ली", "बैंगलोर", "मुंबई", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which Indian athlete won gold at the 2025 World Weightlifting Championship in Men’s 96kg category?",
    "question_hi": "2025 में विश्व भारोत्तोलन चैंपियनशिप में पुरुषों के 96 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Vikas Thakur", "Sukhen Dey", "Sandeep Singh", "Mirabai Chanu"],
    "options_hi": ["विकास ठाकुर", "सुखेन देय", "संदीप सिंह", "मीराबाई चानू"],
    "answer_en": "Vikas Thakur",
    "answer_hi": "विकास ठाकुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Which Indian state launched 'AI-based Digital Education Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'AI-आधारित डिजिटल एजुकेशन प्रोग्राम' शुरू किया?",
    "options_en": ["Telangana", "Kerala", "Maharashtra", "Gujarat"],
    "options_hi": ["तेलंगाना", "केरल", "महाराष्ट्र", "गुजरात"],
    "answer_en": "Telangana",
    "answer_hi": "तेलंगाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which Indian city hosted the 2025 International Smart Health Summit?",
    "question_hi": "2025 में अंतरराष्ट्रीय स्मार्ट हेल्थ समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Hyderabad"],
    "options_hi": ["नई दिल्ली", "बैंगलोर", "मुंबई", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Which Indian athlete won gold at the 2025 World Archery Championship in Men’s Compound?",
    "question_hi": "2025 में विश्व तीरंदाजी चैंपियनशिप में पुरुषों के कंपाउंड वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Pravin Jadhav", "Atanu Das", "Tarundeep Rai", "Deepika Kumari"],
    "options_hi": ["प्रवीन जाधव", "अतनु दास", "तरुंदीप राय", "दीपिका कुमारी"],
    "answer_en": "Pravin Jadhav",
    "answer_hi": "प्रवीन जाधव",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which Indian state launched 'Smart Transport for Rural Areas' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'ग्रामीण क्षेत्रों के लिए स्मार्ट ट्रांसपोर्ट' शुरू किया?",
    "options_en": ["Maharashtra", "Karnataka", "Gujarat", "Tamil Nadu"],
    "options_hi": ["महाराष्ट्र", "कर्नाटक", "गुजरात", "तमिलनाडु"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Which Indian city hosted the 2025 International Renewable Energy Conference?",
    "question_hi": "2025 में अंतरराष्ट्रीय नवीकरणीय ऊर्जा सम्मेलन की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Ahmedabad", "Bengaluru", "Mumbai"],
    "options_hi": ["नई दिल्ली", "अहमदाबाद", "बैंगलोर", "मुंबई"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
    {
    "num":27,
    "question_en": "Which Indian athlete won gold at the 2025 World Wrestling Championship in 65kg category?",
    "question_hi": "2025 में विश्व कुश्ती चैंपियनशिप में 65 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Bajrang Punia", "Vinesh Phogat", "Deepak Punia", "Sakshi Malik"],
    "options_hi": ["बजरंग पुनिया", "विनेश फोगाट", "दीपक पुनिया", "साक्षी मलिक"],
    "answer_en": "Bajrang Punia",
    "answer_hi": "बजरंग पुनिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Which Indian state launched 'Clean Energy Villages Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'क्लीन एनर्जी विलेजेज प्रोग्राम' शुरू किया?",
    "options_en": ["Gujarat", "Maharashtra", "Karnataka", "Tamil Nadu"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "कर्नाटक", "तमिलनाडु"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian city hosted the 2025 Global Smart Education Summit?",
    "question_hi": "2025 में ग्लोबल स्मार्ट एजुकेशन समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "New Delhi"],
    "options_hi": ["बैंगलोर", "हैदराबाद", "पुणे", "नई दिल्ली"],
    "answer_en": "Bengaluru",
    "answer_hi": "बैंगलोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Which Indian athlete won gold at the 2025 World Shooting Championship in Men’s 50m Rifle 3 Positions?",
    "question_hi": "2025 में विश्व शूटिंग चैंपियनशिप में पुरुषों के 50 मीटर राइफल 3 पोजिशन्स में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Saurabh Chaudhary", "Divyansh Singh Panwar", "Abhishek Verma", "Apurvi Chandela"],
    "options_hi": ["सौरभ चौधरी", "दिव्यांश सिंह पंवार", "अभिषेक वर्मा", "अपुर्वी चंदेला"],
    "answer_en": "Divyansh Singh Panwar",
    "answer_hi": "दिव्यांश सिंह पंवार",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which Indian state launched 'AI-enabled Smart Governance Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'AI-सक्षम स्मार्ट गवर्नेंस प्रोग्राम' शुरू किया?",
    "options_en": ["Telangana", "Kerala", "Maharashtra", "Gujarat"],
    "options_hi": ["तेलंगाना", "केरल", "महाराष्ट्र", "गुजरात"],
    "answer_en": "Telangana",
    "answer_hi": "तेलंगाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Which Indian city hosted the 2025 International Renewable Energy Expo?",
    "question_hi": "2025 में अंतरराष्ट्रीय नवीकरणीय ऊर्जा एक्सपो की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Ahmedabad", "Bengaluru", "Mumbai"],
    "options_hi": ["नई दिल्ली", "अहमदाबाद", "बैंगलोर", "मुंबई"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian athlete won gold at the 2025 World Karate Championship in Men’s -75kg category?",
    "question_hi": "2025 में विश्व कराटे चैंपियनशिप में पुरुषों के -75 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Aniket Singh", "Rohit Kumar", "Siddhant Singh", "Vikas Choudhary"],
    "options_hi": ["अनिकेत सिंह", "रोहित कुमार", "सिद्धांत सिंह", "विकास चौधरी"],
    "answer_en": "Aniket Singh",
    "answer_hi": "अनिकेत सिंह",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Which Indian state launched 'Digital Tourism Initiative' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'डिजिटल टूरिज्म इनिशिएटिव' शुरू किया?",
    "options_en": ["Rajasthan", "Karnataka", "Maharashtra", "Gujarat"],
    "options_hi": ["राजस्थान", "कर्नाटक", "महाराष्ट्र", "गुजरात"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which Indian city hosted the 2025 Global AI & Blockchain Summit?",
    "question_hi": "2025 में ग्लोबल AI और ब्लॉकचेन समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Hyderabad", "Bengaluru", "Mumbai", "New Delhi"],
    "options_hi": ["हैदराबाद", "बैंगलोर", "मुंबई", "नई दिल्ली"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Which Indian athlete won gold at the 2025 World Weightlifting Championship in Women’s 59kg category?",
    "question_hi": "2025 में विश्व भारोत्तोलन चैंपियनशिप में महिलाओं के 59 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Mirabai Chanu", "Sukhen Dey", "Vikas Thakur", "Sandeep Singh"],
    "options_hi": ["मीराबाई चानू", "सुखेन देय", "विकास ठाकुर", "संदीप सिंह"],
    "answer_en": "Mirabai Chanu",
    "answer_hi": "मीराबाई चानू",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian state launched 'Green Energy Cities Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'ग्रीन एनर्जी सिटीज प्रोग्राम' शुरू किया?",
    "options_en": ["Gujarat", "Maharashtra", "Rajasthan", "Karnataka"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "राजस्थान", "कर्नाटक"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Which Indian city hosted the 2025 International Smart Education Summit?",
    "question_hi": "2025 में अंतरराष्ट्रीय स्मार्ट एजुकेशन समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Ahmedabad"],
    "options_hi": ["बैंगलोर", "हैदराबाद", "पुणे", "अहमदाबाद"],
    "answer_en": "Bengaluru",
    "answer_hi": "बैंगलोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which Indian athlete won gold at the 2025 World Archery Championship in Women’s Recurve?",
    "question_hi": "2025 में विश्व तीरंदाजी चैंपियनशिप में महिलाओं के रिक्रूव वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Deepika Kumari", "Jyothi Surekha Vennam", "Pravin Jadhav", "Atanu Das"],
    "options_hi": ["दीपिका कुमारी", "ज्योति सुरेखा वेन्नम", "प्रवीन जाधव", "अतनु दास"],
    "answer_en": "Deepika Kumari",
    "answer_hi": "दीपिका कुमारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Which Indian state launched 'Smart Transport Initiative' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'स्मार्ट ट्रांसपोर्ट इनिशिएटिव' शुरू किया?",
    "options_en": ["Maharashtra", "Karnataka", "Gujarat", "Tamil Nadu"],
    "options_hi": ["महाराष्ट्र", "कर्नाटक", "गुजरात", "तमिलनाडु"],
    "answer_en": "Maharashtra",
    "answer_hi": "महाराष्ट्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which Indian city hosted the 2025 International Smart Governance Conference?",
    "question_hi": "2025 में अंतरराष्ट्रीय स्मार्ट गवर्नेंस कॉन्फ्रेंस की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Hyderabad"],
    "options_hi": ["नई दिल्ली", "बैंगलोर", "मुंबई", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Which Indian athlete won gold at the 2025 World Judo Championship in Men’s 73kg category?",
    "question_hi": "2025 में विश्व जूडो चैंपियनशिप में पुरुषों के 73 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Sushil Kumar", "Avtar Singh", "Shushila Devi", "Sandeep Kumar"],
    "options_hi": ["सुशील कुमार", "अवतार सिंह", "शुशीला देवी", "संदीप कुमार"],
    "answer_en": "Sushil Kumar",
    "answer_hi": "सुशील कुमार",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which Indian state launched 'AI-powered Digital Governance Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'AI-संचालित डिजिटल गवर्नेंस प्रोग्राम' शुरू किया?",
    "options_en": ["Telangana", "Kerala", "Maharashtra", "Gujarat"],
    "options_hi": ["तेलंगाना", "केरल", "महाराष्ट्र", "गुजरात"],
    "answer_en": "Telangana",
    "answer_hi": "तेलंगाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Which Indian city hosted the 2025 Global Digital Health Conference?",
    "question_hi": "2025 में ग्लोबल डिजिटल हेल्थ कॉन्फ्रेंस की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Hyderabad"],
    "options_hi": ["नई दिल्ली", "बैंगलोर", "मुंबई", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian athlete won gold at the 2025 World Weightlifting Championship in Men’s 81kg category?",
    "question_hi": "2025 में विश्व भारोत्तोलन चैंपियनशिप में पुरुषों के 81 किग्रा वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Vikas Thakur", "Sukhen Dey", "Mirabai Chanu", "Sandeep Singh"],
    "options_hi": ["विकास ठाकुर", "सुखेन देय", "मीराबाई चानू", "संदीप सिंह"],
    "answer_en": "Vikas Thakur",
    "answer_hi": "विकास ठाकुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Which Indian state launched 'Smart Energy Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'स्मार्ट एनर्जी प्रोग्राम' शुरू किया?",
    "options_en": ["Gujarat", "Maharashtra", "Karnataka", "Rajasthan"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "कर्नाटक", "राजस्थान"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which Indian city hosted the 2025 International Smart Health Expo?",
    "question_hi": "2025 में अंतरराष्ट्रीय स्मार्ट हेल्थ एक्सपो की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Hyderabad"],
    "options_hi": ["नई दिल्ली", "बैंगलोर", "मुंबई", "हैदराबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Which Indian athlete won gold at the 2025 World Archery Championship in Men’s Recurve?",
    "question_hi": "2025 में विश्व तीरंदाजी चैंपियनशिप में पुरुषों के रिक्रूव वर्ग में स्वर्ण पदक किस भारतीय एथलीट ने जीता?",
    "options_en": ["Atanu Das", "Pravin Jadhav", "Tarundeep Rai", "Deepika Kumari"],
    "options_hi": ["अतनु दास", "प्रवीन जाधव", "तरुंदीप राय", "दीपिका कुमारी"],
    "answer_en": "Atanu Das",
    "answer_hi": "अतनु दास",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian state launched 'Digital Skill Training Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'डिजिटल स्किल ट्रेनिंग प्रोग्राम' शुरू किया?",
    "options_en": ["Kerala", "Telangana", "Maharashtra", "Karnataka"],
    "options_hi": ["केरल", "तेलंगाना", "महाराष्ट्र", "कर्नाटक"],
    "answer_en": "Telangana",
    "answer_hi": "तेलंगाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Which Indian city hosted the 2025 International Green Energy Summit?",
    "question_hi": "2025 में अंतरराष्ट्रीय ग्रीन एनर्जी समिट की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["New Delhi", "Bengaluru", "Mumbai", "Ahmedabad"],
    "options_hi": ["नई दिल्ली", "बैंगलोर", "मुंबई", "अहमदाबाद"],
    "answer_en": "New Delhi",
    "answer_hi": "नई दिल्ली",
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