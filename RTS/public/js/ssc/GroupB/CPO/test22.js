const questions = [
  {
    "num": 1,
    "question_en": "Which country became the host of the 2026 BRICS Summit?",
    "question_hi": "2026 के ब्रिक्स शिखर सम्मेलन की मेजबानी किस देश ने हासिल की?",
    "options_en": ["India", "China", "Brazil", "Russia"],
    "options_hi": ["भारत", "चीन", "ब्राज़ील", "रूस"],
    "answer_en": "Brazil",
    "answer_hi": "ब्राज़ील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which Indian state launched the 'Green Road Mission' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'ग्रीन रोड मिशन' शुरू किया?",
    "options_en": ["Uttarakhand", "Sikkim", "Assam", "Himachal Pradesh"],
    "options_hi": ["उत्तराखंड", "सिक्किम", "असम", "हिमाचल प्रदेश"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which country ranked first in the World Happiness Report 2025?",
    "question_hi": "विश्व खुशी रिपोर्ट 2025 में कौन सा देश प्रथम स्थान पर रहा?",
    "options_en": ["Finland", "Denmark", "Switzerland", "Iceland"],
    "options_hi": ["फिनलैंड", "डेनमार्क", "स्विट्ज़रलैंड", "आइसलैंड"],
    "answer_en": "Finland",
    "answer_hi": "फिनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Who became the first Indian to win the Global Teacher Award 2025?",
    "question_hi": "ग्लोबल टीचर अवॉर्ड 2025 जीतने वाले पहले भारतीय कौन बने?",
    "options_en": ["Anand Kumar", "Ranjitsinh Disale", "Ritu Kapoor", "Mitali Gupta"],
    "options_hi": ["आनंद कुमार", "रणजीतसिंह दिसाले", "ऋतु कपूर", "मिताली गुप्ता"],
    "answer_en": "Ritu Kapoor",
    "answer_hi": "ऋतु कपूर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which Indian bank launched the 'AI-based Loan Approval System' in 2025?",
    "question_hi": "2025 में किस भारतीय बैंक ने 'AI आधारित ऋण स्वीकृति प्रणाली' शुरू की?",
    "options_en": ["SBI", "HDFC Bank", "ICICI Bank", "Bank of Baroda"],
    "options_hi": ["एसबीआई", "एचडीएफसी बैंक", "आईसीआईसीआई बैंक", "बैंक ऑफ बड़ौदा"],
    "answer_en": "SBI",
    "answer_hi": "एसबीआई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which sport was added to the 2028 Summer Olympics?",
    "question_hi": "2028 ग्रीष्मकालीन ओलंपिक में कौन सा खेल जोड़ा गया?",
    "options_en": ["Cricket", "Kabaddi", "Squash", "Chess"],
    "options_hi": ["क्रिकेट", "कबड्डी", "स्क्वैश", "शतरंज"],
    "answer_en": "Cricket",
    "answer_hi": "क्रिकेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which Indian state launched the 'Eco-Tourism Corridor' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'ईको-टूरिज्म कॉरिडोर' शुरू किया?",
    "options_en": ["Odisha", "Madhya Pradesh", "Chhattisgarh", "Jharkhand"],
    "options_hi": ["ओडिशा", "मध्य प्रदेश", "छत्तीसगढ़", "झारखंड"],
    "answer_en": "Odisha",
    "answer_hi": "ओडिशा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which organisation released the 'Global Climate Progress Index 2025'?",
    "question_hi": "'ग्लोबल क्लाइमेट प्रोग्रेस इंडेक्स 2025' किस संस्था ने जारी किया?",
    "options_en": ["UNEP", "WHO", "IMF", "World Bank"],
    "options_hi": ["यूएनईपी", "डब्ल्यूएचओ", "आईएमएफ", "विश्व बैंक"],
    "answer_en": "UNEP",
    "answer_hi": "यूएनईपी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which Indian airport became the first to run fully on solar power in 2025?",
    "question_hi": "2025 में कौन सा भारतीय हवाईअड्डा पूरी तरह सौर ऊर्जा पर चलने वाला पहला बना?",
    "options_en": ["Cochin Airport", "Jaipur Airport", "Hyderabad Airport", "Indore Airport"],
    "options_hi": ["कोचीन एयरपोर्ट", "जयपुर एयरपोर्ट", "हैदराबाद एयरपोर्ट", "इंदौर एयरपोर्ट"],
    "answer_en": "Cochin Airport",
    "answer_hi": "कोचीन एयरपोर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which Indian state topped the NITI Aayog Innovation Index 2025?",
    "question_hi": "नीति आयोग नवाचार सूचकांक 2025 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Karnataka", "Maharashtra", "Tamil Nadu", "Gujarat"],
    "options_hi": ["कर्नाटक", "महाराष्ट्र", "तमिलनाडु", "गुजरात"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
   {
    "num": 11,
    "question_en": "Which country hosted the G20 Summit 2025?",
    "question_hi": "G20 शिखर सम्मेलन 2025 की मेजबानी किस देश ने की?",
    "options_en": ["South Africa", "India", "Brazil", "Saudi Arabia"],
    "options_hi": ["दक्षिण अफ्रीका", "भारत", "ब्राज़ील", "सऊदी अरब"],
    "answer_en": "Brazil",
    "answer_hi": "ब्राज़ील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which Indian state started the 'Mission Zero Dropout' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'मिशन ज़ीरो ड्रॉपआउट' शुरू किया?",
    "options_en": ["Bihar", "Uttar Pradesh", "Rajasthan", "Haryana"],
    "options_hi": ["बिहार", "उत्तर प्रदेश", "राजस्थान", "हरियाणा"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which Indian city hosted the India Drone Expo 2025?",
    "question_hi": "इंडिया ड्रोन एक्सपो 2025 की मेजबानी किस शहर ने की?",
    "options_en": ["Bengaluru", "Hyderabad", "New Delhi", "Mumbai"],
    "options_hi": ["बैंगलोर", "हैदराबाद", "नई दिल्ली", "मुंबई"],
    "answer_en": "Hyderabad",
    "answer_hi": "हैदराबाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which country won the ICC Champions Trophy 2025?",
    "question_hi": "ICC चैंपियंस ट्रॉफी 2025 किस देश ने जीती?",
    "options_en": ["India", "England", "Australia", "Pakistan"],
    "options_hi": ["भारत", "इंग्लैंड", "ऑस्ट्रेलिया", "पाकिस्तान"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Who became the new Director General of UNESCO in 2025?",
    "question_hi": "2025 में यूनेस्को के नए महानिदेशक कौन बने?",
    "options_en": ["Irina Bokova", "Audrey Azoulay", "Carlos Alvarez", "Nadia Martinez"],
    "options_hi": ["इरिना बोकोवा", "ऑड्रे अज़ूले", "कार्लोस अल्वारेज़", "नादिया मार्टिनेज़"],
    "answer_en": "Carlos Alvarez",
    "answer_hi": "कार्लोस अल्वारेज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which mission was launched by ISRO in 2025 to study deep space radiation?",
    "question_hi": "ISRO ने 2025 में गहरे अंतरिक्ष विकिरण का अध्ययन करने के लिए कौन सा मिशन लॉन्च किया?",
    "options_en": ["Surya Probe", "Shakti Mission", "VARUN Mission", "SpaceGuard-1"],
    "options_hi": ["सूर्य प्रोब", "शक्ति मिशन", "वरुण मिशन", "स्पेसगार्ड-1"],
    "answer_en": "SpaceGuard-1",
    "answer_hi": "स्पेसगार्ड-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which Indian state launched the 'One Student One Skill' program in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'वन स्टूडेंट वन स्किल' कार्यक्रम शुरू किया?",
    "options_en": ["Madhya Pradesh", "Kerala", "Odisha", "Tamil Nadu"],
    "options_hi": ["मध्य प्रदेश", "केरल", "ओडिशा", "तमिलनाडु"],
    "answer_en": "Tamil Nadu",
    "answer_hi": "तमिलनाडु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which country topped the Global Innovation Index 2025?",
    "question_hi": "ग्लोबल इनोवेशन इंडेक्स 2025 में कौन सा देश पहले स्थान पर रहा?",
    "options_en": ["USA", "Switzerland", "Finland", "Japan"],
    "options_hi": ["अमेरिका", "स्विट्जरलैंड", "फिनलैंड", "जापान"],
    "answer_en": "Switzerland",
    "answer_hi": "स्विट्जरलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which Indian city was declared India's first 'AI-Ready City' in 2025?",
    "question_hi": "2025 में किस भारतीय शहर को भारत का पहला 'AI-तैयार शहर' घोषित किया गया?",
    "options_en": ["Pune", "Hyderabad", "Bengaluru", "New Delhi"],
    "options_hi": ["पुणे", "हैदराबाद", "बैंगलोर", "नई दिल्ली"],
    "answer_en": "Pune",
    "answer_hi": "पुणे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which Indian company became the first to manufacture Quantum Chips in 2025?",
    "question_hi": "2025 में क्वांटम चिप्स बनाने वाली पहली भारतीय कंपनी कौन सी बनी?",
    "options_en": ["Tata Electronics", "Reliance Digital", "Adani Tech", "Infosys"],
    "options_hi": ["टाटा इलेक्ट्रॉनिक्स", "रिलायंस डिजिटल", "अदाणी टेक", "इन्फोसिस"],
    "answer_en": "Tata Electronics",
    "answer_hi": "टाटा इलेक्ट्रॉनिक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which country hosted the 2025 Asian Games?",
    "question_hi": "2025 एशियाई खेलों की मेजबानी किस देश ने की?",
    "options_en": ["China", "Japan", "India", "South Korea"],
    "options_hi": ["चीन", "जापान", "भारत", "दक्षिण कोरिया"],
    "answer_en": "South Korea",
    "answer_hi": "दक्षिण कोरिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Who won the Nobel Peace Prize 2025?",
    "question_hi": "नोबेल शांति पुरस्कार 2025 किसने जीता?",
    "options_en": ["Greta Thunberg", "Malala Yousafzai", "David Attenborough", "UNHCR"],
    "options_hi": ["ग्रेटा थनबर्ग", "मलाला यूसुफजई", "डेविड एटनबरो", "यूएनएचसीआर"],
    "answer_en": "UNHCR",
    "answer_hi": "यूएनएचसीआर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which Indian state launched the 'Green Metro Rail Policy' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'ग्रीन मेट्रो रेल नीति' शुरू की?",
    "options_en": ["Delhi", "Gujarat", "Uttar Pradesh", "Maharashtra"],
    "options_hi": ["दिल्ली", "गुजरात", "उत्तर प्रदेश", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which country became the fastest 5G deployer in 2025?",
    "question_hi": "2025 में सबसे तेज 5G तैनाती करने वाला देश कौन बना?",
    "options_en": ["India", "USA", "China", "UK"],
    "options_hi": ["भारत", "अमेरिका", "चीन", "यूके"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which Indian airport became Carbon Negative in 2025?",
    "question_hi": "2025 में कौन सा भारतीय हवाईअड्डा कार्बन नकारात्मक बना?",
    "options_en": ["Cochin Airport", "Delhi Airport", "Jaipur Airport", "Bengaluru Airport"],
    "options_hi": ["कोचीन एयरपोर्ट", "दिल्ली एयरपोर्ट", "जयपुर एयरपोर्ट", "बैंगलोर एयरपोर्ट"],
    "answer_en": "Jaipur Airport",
    "answer_hi": "जयपुर एयरपोर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which Indian woman became the first to win the Turing Award 2025?",
    "question_hi": "2025 में ट्यूरिंग पुरस्कार जीतने वाली पहली भारतीय महिला कौन बनी?",
    "options_en": ["Neha Narkhede", "Radha Basu", "Sudha Murty", "Arati Prabhakar"],
    "options_hi": ["नेहा नरखेडे", "राधा बसु", "सुधा मूर्ति", "आरती प्रभाकर"],
    "answer_en": "Neha Narkhede",
    "answer_hi": "नेहा नरखेडे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which Indian state launched the 'Women Cyber Warrior Program' in 2025?",
    "question_hi": "2025 में किस भारतीय राज्य ने 'वीमेन साइबर वॉरियर प्रोग्राम' शुरू किया?",
    "options_en": ["Kerala", "Maharashtra", "Haryana", "Punjab"],
    "options_hi": ["केरल", "महाराष्ट्र", "हरियाणा", "पंजाब"],
    "answer_en": "Haryana",
    "answer_hi": "हरियाणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which Indian city topped the Swachh Survekshan 2025?",
    "question_hi": "स्वच्छ सर्वेक्षण 2025 में कौन सा भारतीय शहर शीर्ष पर रहा?",
    "options_en": ["Indore", "Surat", "Jaipur", "Bhopal"],
    "options_hi": ["इंदौर", "सूरत", "जयपुर", "भोपाल"],
    "answer_en": "Surat",
    "answer_hi": "सूरत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which Indian naval exercise was held with Japan in 2025?",
    "question_hi": "2025 में भारत और जापान के बीच कौन सा नौसैनिक अभ्यास हुआ?",
    "options_en": ["Milan", "Jimex", "Varuna", "Indo-Pac"],
    "options_hi": ["मिलन", "जिमेक्स", "वरुण", "इंडो-पैक"],
    "answer_en": "Jimex",
    "answer_hi": "जिमेक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which Indian scheme was awarded the UN Public Service Award 2025?",
    "question_hi": "2025 में किस भारतीय योजना को यूएन पब्लिक सर्विस अवॉर्ड दिया गया?",
    "options_en": ["PM Jan Dhan Yojana", "Ayushman Bharat", "PM SVANidhi", "Ujjwala Yojana"],
    "options_hi": ["पीएम जन धन योजना", "आयुष्मान भारत", "पीएम स्वनिधि", "उज्ज्वला योजना"],
    "answer_en": "PM SVANidhi",
    "answer_hi": "पीएम स्वनिधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which country launched the world's first Carbon Bubble Project in 2025?",
    "question_hi": "2025 में दुनिया की पहली कार्बन बबल परियोजना किस देश ने शुरू की?",
    "options_en": ["Japan", "Sweden", "Norway", "South Korea"],
    "options_hi": ["जापान", "स्वीडन", "नॉर्वे", "दक्षिण कोरिया"],
    "answer_en": "Norway",
    "answer_hi": "नॉर्वे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which Indian state topped the Literacy Index 2025?",
    "question_hi": "साक्षरता सूचकांक 2025 में कौन सा राज्य शीर्ष पर रहा?",
    "options_en": ["Kerala", "Goa", "Himachal Pradesh", "Sikkim"],
    "options_hi": ["केरल", "गोवा", "हिमाचल प्रदेश", "सिक्किम"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which Indian personality received the Gandhi Peace Prize 2025?",
    "question_hi": "गांधी शांति पुरस्कार 2025 किसे मिला?",
    "options_en": ["Sonam Wangchuk", "Kailash Satyarthi", "Indra Nooyi", "Ajay Banga"],
    "options_hi": ["सोनम वांगचुक", "कैलाश सत्यार्थी", "इंद्रा नूयी", "अजय बंगा"],
    "answer_en": "Sonam Wangchuk",
    "answer_hi": "सोनम वांगचुक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which state launched the 'Forest Genomics Research Centre' in 2025?",
    "question_hi": "2025 में किस राज्य ने 'फॉरेस्ट जीनोमिक्स रिसर्च सेंटर' शुरू किया?",
    "options_en": ["Assam", "Nagaland", "Karnataka", "Arunachal Pradesh"],
    "options_hi": ["असम", "नगालैंड", "कर्नाटक", "अरुणाचल प्रदेश"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which country launched the Mars Ice Habitat Mission in 2025?",
    "question_hi": "2025 में मंगल आइस हैबिटेट मिशन किस देश ने लॉन्च किया?",
    "options_en": ["USA", "China", "Russia", "India"],
    "options_hi": ["अमेरिका", "चीन", "रूस", "भारत"],
    "answer_en": "USA",
    "answer_hi": "अमेरिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Who became the first Indian to win the Abel Prize in Mathematics in 2025?",
    "question_hi": "2025 में एबल पुरस्कार जीतने वाले पहले भारतीय कौन बने?",
    "options_en": ["Manjul Bhargava", "Ashok Sen", "Kiran Kedlaya", "Nikhil Srivastava"],
    "options_hi": ["मंजुल भार्गव", "अशोक सेन", "किरण केडलेया", "निखिल श्रीवास्तव"],
    "answer_en": "Nikhil Srivastava",
    "answer_hi": "निखिल श्रीवास्तव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which Indian company launched India's first Hydrogen Truck in 2025?",
    "question_hi": "2025 में भारत का पहला हाइड्रोजन ट्रक किस कंपनी ने लॉन्च किया?",
    "options_en": ["Tata Motors", "Mahindra", "Ashok Leyland", "Maruti Suzuki"],
    "options_hi": ["टाटा मोटर्स", "महिंद्रा", "अशोक लेलैंड", "मारुति सुजुकी"],
    "answer_en": "Ashok Leyland",
    "answer_hi": "अशोक लेलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which country launched the world's first AI Constitution in 2025?",
    "question_hi": "2025 में दुनिया का पहला AI संविधान किस देश ने लागू किया?",
    "options_en": ["South Korea", "Japan", "USA", "Estonia"],
    "options_hi": ["दक्षिण कोरिया", "जापान", "अमेरिका", "एस्टोनिया"],
    "answer_en": "Estonia",
    "answer_hi": "एस्टोनिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which state declared 2025 as the 'Year of Tribal Empowerment'?",
    "question_hi": "किस राज्य ने 2025 को 'आदिवासी सशक्तिकरण वर्ष' घोषित किया?",
    "options_en": ["Jharkhand", "Chhattisgarh", "Odisha", "Madhya Pradesh"],
    "options_hi": ["झारखंड", "छत्तीसगढ़", "ओडिशा", "मध्य प्रदेश"],
    "answer_en": "Chhattisgarh",
    "answer_hi": "छत्तीसगढ़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which Indian airport introduced facial recognition boarding in 2025?",
    "question_hi": "2025 में चेहरे की पहचान आधारित बोर्डिंग सुविधा किस भारतीय हवाईअड्डे ने शुरू की?",
    "options_en": ["Delhi Airport", "Hyderabad Airport", "Bengaluru Airport", "Mumbai Airport"],
    "options_hi": ["दिल्ली एयरपोर्ट", "हैदराबाद एयरपोर्ट", "बैंगलोर एयरपोर्ट", "मुंबई एयरपोर्ट"],
    "answer_en": "Bengaluru Airport",
    "answer_hi": "बैंगलोर एयरपोर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which Indian state launched the Mission Green Himalaya 2025?",
    "question_hi": "मिशन ग्रीन हिमालय 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Himachal Pradesh", "Uttarakhand", "Sikkim", "Jammu & Kashmir"],
    "options_hi": ["हिमाचल प्रदेश", "उत्तराखंड", "सिक्किम", "जम्मू और कश्मीर"],
    "answer_en": "Uttarakhand",
    "answer_hi": "उत्तराखंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which company became the first Indian unicorn of 2025?",
    "question_hi": "2025 का पहला भारतीय यूनिकॉर्न कौन सी कंपनी बनी?",
    "options_en": ["Zepto", "BluSmart", "Atlan", "UpGrad"],
    "options_hi": ["जैप्टो", "ब्लूस्मार्ट", "एटलन", "अपग्रैड"],
    "answer_en": "BluSmart",
    "answer_hi": "ब्लूस्मार्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which country launched the Lunar Mining Project in 2025?",
    "question_hi": "2025 में चंद्र खनन परियोजना किस देश ने शुरू की?",
    "options_en": ["China", "USA", "Russia", "India"],
    "options_hi": ["चीन", "अमेरिका", "रूस", "भारत"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which Indian state ranks first in solar energy production in 2025?",
    "question_hi": "2025 में सौर ऊर्जा उत्पादन में कौन सा भारतीय राज्य पहले स्थान पर है?",
    "options_en": ["Rajasthan", "Gujarat", "Maharashtra", "Tamil Nadu"],
    "options_hi": ["राजस्थान", "गुजरात", "महाराष्ट्र", "तमिलनाडु"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which Indian personality became the CEO of World Bank in 2025?",
    "question_hi": "2025 में कौन सा भारतीय विश्व बैंक का CEO बना?",
    "options_en": ["Ajay Banga", "Arundhati Bhattacharya", "Naina Lal Kidwai", "Uday Kotak"],
    "options_hi": ["अजय बंगा", "अरुंधति भट्टाचार्य", "नैना लाल किदवई", "उदय कोटक"],
    "answer_en": "Ajay Banga",
    "answer_hi": "अजय बंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which Indian armed force launched the Cyber Shield Unit in 2025?",
    "question_hi": "भारतीय सशस्त्र बलों में किसने 2025 में साइबर शील्ड यूनिट शुरू की?",
    "options_en": ["Indian Army", "Indian Navy", "Indian Air Force", "CRPF"],
    "options_hi": ["भारतीय सेना", "भारतीय नौसेना", "भारतीय वायुसेना", "सीआरपीएफ"],
    "answer_en": "Indian Army",
    "answer_hi": "भारतीय सेना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which country developed the first AI-Powered Parliament in 2025?",
    "question_hi": "2025 में दुनिया की पहली AI-संचालित संसद किस देश ने विकसित की?",
    "options_en": ["UAE", "Japan", "Estonia", "USA"],
    "options_hi": ["यूएई", "जापान", "एस्टोनिया", "अमेरिका"],
    "answer_en": "UAE",
    "answer_hi": "यूएई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Indian state launched the Mission River Reborn in 2025?",
    "question_hi": "मिशन रिवर रीबॉर्न 2025 किस राज्य ने शुरू किया?",
    "options_en": ["Bihar", "West Bengal", "Maharashtra", "Punjab"],
    "options_hi": ["बिहार", "पश्चिम बंगाल", "महाराष्ट्र", "पंजाब"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which Indian scientist won the Shanti Swarup Bhatnagar Award 2025 for Physics?",
    "question_hi": "2025 में भौतिकी के लिए शांति स्वरूप भटनागर पुरस्कार किस भारतीय वैज्ञानिक को मिला?",
    "options_en": ["Chetan Puneet", "S. Dutta", "A. Ramanan", "N. Gopal Krishna"],
    "options_hi": ["चेतन पुनीत", "एस. दत्ता", "ए. रमनन", "एन. गोपाल कृष्ण"],
    "answer_en": "S. Dutta",
    "answer_hi": "एस. दत्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which Indian city became the first 'Electric Bus Only Zone' in 2025?",
    "question_hi": "2025 में भारत का पहला 'केवल इलेक्ट्रिक बस क्षेत्र' कौन सा शहर बना?",
    "options_en": ["Pune", "Indore", "Nagpur", "Ahmedabad"],
    "options_hi": ["पुणे", "इंदौर", "नागपुर", "अहमदाबाद"],
    "answer_en": "Nagpur",
    "answer_hi": "नागपुर",
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