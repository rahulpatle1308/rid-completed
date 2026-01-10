const questions = [
    // Physics - Electrostatics & Current Electricity (1-15)
    {
        "num": 1,
        "question_en": "Two point charges +q and -q are placed at points A and B respectively. The electric field at the midpoint of AB is:",
        "question_hi": "दो बिंदु आवेश +q और -q क्रमशः बिंदु A और B पर रखे गए हैं। AB के मध्य बिंदु पर विद्युत क्षेत्र है:",
        "options_en": ["Zero", "Along AB", "Perpendicular to AB", "At 45° to AB"],
        "options_hi": ["शून्य", "AB के साथ", "AB के लंबवत", "AB से 45° पर"],
        "answer_en": "Along AB",
        "answer_hi": "AB के साथ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The equivalent resistance between points A and B in a Wheatstone bridge when balanced is:",
        "question_hi": "संतुलित व्हीटस्टोन ब्रिज में बिंदु A और B के बीच तुल्य प्रतिरोध है:",
        "options_en": ["R", "2R", "R/2", "Depends on bridge arms"],
        "options_hi": ["R", "2R", "R/2", "ब्रिज भुजाओं पर निर्भर"],
        "answer_en": "Depends on bridge arms",
        "answer_hi": "ब्रिज भुजाओं पर निर्भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The drift velocity of electrons in a conductor is of the order of:",
        "question_hi": "एक चालक में इलेक्ट्रॉनों का अपवाह वेग की कोटि है:",
        "options_en": ["10⁸ m/s", "10⁶ m/s", "10⁻³ m/s", "10⁻⁶ m/s"],
        "options_hi": ["10⁸ m/s", "10⁶ m/s", "10⁻³ m/s", "10⁻⁶ m/s"],
        "answer_en": "10⁻³ m/s",
        "answer_hi": "10⁻³ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "A capacitor of capacitance C is charged to potential V. The energy stored is:",
        "question_hi": "C धारिता का एक संधारित्र V विभव तक आवेशित किया जाता है। संचित ऊर्जा है:",
        "options_en": ["½CV²", "CV²", "½QV", "Both A and C"],
        "options_hi": ["½CV²", "CV²", "½QV", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The resistivity of a wire depends on:",
        "question_hi": "एक तार की प्रतिरोधकता निर्भर करती है:",
        "options_en": ["Length", "Area of cross-section", "Material", "Temperature"],
        "options_hi": ["लंबाई", "अनुप्रस्थ काट क्षेत्रफल", "पदार्थ", "तापमान"],
        "answer_en": "Material",
        "answer_hi": "पदार्थ",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - d & f Block Elements (16-30)
    {
        "num": 6,
        "question_en": "Which of the following is a lanthanoid?",
        "question_hi": "निम्नलिखित में से कौन सा लैन्थेनाइड है?",
        "options_en": ["Uranium", "Thorium", "Cerium", "Actinium"],
        "options_hi": ["यूरेनियम", "थोरियम", "सीरियम", "एक्टिनियम"],
        "answer_en": "Cerium",
        "answer_hi": "सीरियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The magnetic moment of Cr³⁺ ion is:",
        "question_hi": "Cr³⁺ आयन का चुंबकीय आघूर्ण है:",
        "options_en": ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
        "options_hi": ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
        "answer_en": "3.87 BM",
        "answer_hi": "3.87 BM",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which transition metal shows the highest oxidation state?",
        "question_hi": "कौन सा संक्रमण धातु उच्चतम ऑक्सीकरण अवस्था दर्शाता है?",
        "options_en": ["Scandium", "Manganese", "Iron", "Osmium"],
        "options_hi": ["स्कैंडियम", "मैंगनीज", "आयरन", "ओस्मियम"],
        "answer_en": "Osmium",
        "answer_hi": "ओस्मियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The color of KMnO₄ is due to:",
        "question_hi": "KMnO₄ का रंग किसके कारण है?",
        "options_en": ["d-d transition", "Charge transfer", "Paramagnetism", "Crystal field splitting"],
        "options_hi": ["d-d संक्रमण", "आवेश स्थानांतरण", "अनुचुंबकत्व", "क्रिस्टल क्षेत्र विपाटन"],
        "answer_en": "Charge transfer",
        "answer_hi": "आवेश स्थानांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which of the following is an actinoid?",
        "question_hi": "निम्नलिखित में से कौन सा एक्टिनाइड है?",
        "options_en": ["Lanthanum", "Cerium", "Uranium", "Yttrium"],
        "options_hi": ["लैन्थनम", "सीरियम", "यूरेनियम", "यट्रियम"],
        "answer_en": "Uranium",
        "answer_hi": "यूरेनियम",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Differential Equations (31-45)
    {
        "num": 11,
        "question_en": "The order of the differential equation (d²y/dx²)³ + dy/dx = sinx is:",
        "question_hi": "अवकल समीकरण (d²y/dx²)³ + dy/dx = sinx की कोटि है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The degree of the differential equation [1 + (dy/dx)²]^(3/2) = d²y/dx² is:",
        "question_hi": "अवकल समीकरण [1 + (dy/dx)²]^(3/2) = d²y/dx² की घात है:",
        "options_en": ["1", "2", "3", "Not defined"],
        "options_hi": ["1", "2", "3", "परिभाषित नहीं"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The solution of dy/dx = y/x is:",
        "question_hi": "dy/dx = y/x का हल है:",
        "options_en": ["y = kx", "y = k/x", "y = ke^x", "y = klogx"],
        "options_hi": ["y = kx", "y = k/x", "y = ke^x", "y = klogx"],
        "answer_en": "y = kx",
        "answer_hi": "y = kx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The integrating factor of dy/dx + Py = Q is:",
        "question_hi": "dy/dx + Py = Q का समाकलन गुणक है:",
        "options_en": ["e^∫Pdx", "e^∫Qdx", "e^∫(P+Q)dx", "e^∫(P-Q)dx"],
        "options_hi": ["e^∫Pdx", "e^∫Qdx", "e^∫(P+Q)dx", "e^∫(P-Q)dx"],
        "answer_en": "e^∫Pdx",
        "answer_hi": "e^∫Pdx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The solution of d²y/dx² + y = 0 is:",
        "question_hi": "d²y/dx² + y = 0 का हल है:",
        "options_en": ["y = Acosx + Bsinx", "y = Ae^x + Be^-x", "y = Ax + B", "y = Alogx + B"],
        "options_hi": ["y = Acosx + Bsinx", "y = Ae^x + Be^-x", "y = Ax + B", "y = Alogx + B"],
        "answer_en": "y = Acosx + Bsinx",
        "answer_hi": "y = Acosx + Bsinx",
        "attempted": false,
        "selected": ""
    },

    // Biology - Biotechnology & Its Applications (46-60)
    {
        "num": 16,
        "question_en": "The process of making multiple copies of a gene is called:",
        "question_hi": "एक जीन की एकाधिक प्रतियाँ बनाने की प्रक्रिया कहलाती है:",
        "options_en": ["Gene cloning", "DNA sequencing", "PCR", "Gel electrophoresis"],
        "options_hi": ["जीन क्लोनिंग", "DNA अनुक्रमण", "PCR", "जेल इलेक्ट्रोफोरेसिस"],
        "answer_en": "Gene cloning",
        "answer_hi": "जीन क्लोनिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The first transgenic crop was:",
        "question_hi": "पहली ट्रांसजेनिक फसल थी:",
        "options_en": ["Tomato", "Tobacco", "Cotton", "Rice"],
        "options_hi": ["टमाटर", "तंबाकू", "कपास", "चावल"],
        "answer_en": "Tobacco",
        "answer_hi": "तंबाकू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Bt cotton contains genes from:",
        "question_hi": "Bt कपास में जीन होते हैं:",
        "options_en": ["Bacteria", "Virus", "Fungus", "Insect"],
        "options_hi": ["जीवाणु", "वायरस", "कवक", "कीट"],
        "answer_en": "Bacteria",
        "answer_hi": "जीवाणु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The technique used to separate DNA fragments is:",
        "question_hi": "DNA खंडों को अलग करने के लिए प्रयुक्त तकनीक है:",
        "options_en": ["PCR", "Gel electrophoresis", "Centrifugation", "Chromatography"],
        "options_hi": ["PCR", "जेल इलेक्ट्रोफोरेसिस", "अपकेंद्रण", "क्रोमैटोग्राफी"],
        "answer_en": "Gel electrophoresis",
        "answer_hi": "जेल इलेक्ट्रोफोरेसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The enzyme used in PCR is:",
        "question_hi": "PCR में प्रयुक्त एंजाइम है:",
        "options_en": ["DNA polymerase", "RNA polymerase", "Restriction enzyme", "Ligase"],
        "options_hi": ["DNA पॉलीमरेज", "RNA पॉलीमरेज", "प्रतिबंधन एंजाइम", "लाइगेज"],
        "answer_en": "DNA polymerase",
        "answer_hi": "DNA पॉलीमरेज",
        "attempted": false,
        "selected": ""
    },

    // English - Cloze Test & Para Jumbles (61-75)
    {
        "num": 21,
        "question_en": "Choose the correct word: 'The students were ___ to submit their assignments on time.'",
        "question_hi": "सही शब्द चुनें: 'The students were ___ to submit their assignments on time.'",
        "options_en": ["expected", "expecting", "expect", "expects"],
        "options_hi": ["expected", "expecting", "expect", "expects"],
        "answer_en": "expected",
        "answer_hi": "expected",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Rearrange the words: 'P: quickly Q: the R: finished S: students'",
        "question_hi": "शब्दों को पुनर्व्यवस्थित करें: 'P: quickly Q: the R: finished S: students'",
        "options_en": ["S-Q-R-P", "Q-S-R-P", "R-P-S-Q", "P-R-Q-S"],
        "options_hi": ["S-Q-R-P", "Q-S-R-P", "R-P-S-Q", "P-R-Q-S"],
        "answer_en": "Q-S-R-P",
        "answer_hi": "Q-S-R-P",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Choose the appropriate word: 'The manager was ___ with the employee's performance.'",
        "question_hi": "उपयुक्त शब्द चुनें: 'The manager was ___ with the employee's performance.'",
        "options_en": ["satisfied", "satisfying", "satisfy", "satisfaction"],
        "options_hi": ["satisfied", "satisfying", "satisfy", "satisfaction"],
        "answer_en": "satisfied",
        "answer_hi": "satisfied",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Identify the correct sequence: '1. However 2. The results 3. Were disappointing 4. The experiment was well-designed'",
        "question_hi": "सही क्रम पहचानें: '1. However 2. The results 3. Were disappointing 4. The experiment was well-designed'",
        "options_en": ["4-1-2-3", "2-3-4-1", "1-4-2-3", "4-2-3-1"],
        "options_hi": ["4-1-2-3", "2-3-4-1", "1-4-2-3", "4-2-3-1"],
        "answer_en": "4-1-2-3",
        "answer_hi": "4-1-2-3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Choose the correct preposition: 'She is allergic ___ cats.'",
        "question_hi": "सही संबंधसूचक अव्यय चुनें: 'She is allergic ___ cats.'",
        "options_en": ["to", "for", "with", "by"],
        "options_hi": ["to", "for", "with", "by"],
        "answer_en": "to",
        "answer_hi": "to",
        "attempted": false,
        "selected": ""
    },

    // Hindi - समास और सम्बन्धबोधक (76-90)
    {
        "num": 26,
        "question_en": "'राजपुत्र' में कौन सा समास है?",
        "question_hi": "'राजपुत्र' में कौन सा समास है?",
        "options_en": ["तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"],
        "answer_en": "तत्पुरुष",
        "answer_hi": "तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'पीताम्बर' में कौन सा समास है?",
        "question_hi": "'पीताम्बर' में कौन सा समास है?",
        "options_en": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्वंद्व"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्वंद्व"],
        "answer_en": "बहुव्रीहि",
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "'दशानन' में कौन सा समास है?",
        "question_hi": "'दशानन' में कौन सा समास है?",
        "options_en": ["तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"],
        "answer_en": "बहुव्रीहि",
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'माता-पिता' में कौन सा समास है?",
        "question_hi": "'माता-पिता' में कौन सा समास है?",
        "options_en": ["द्वंद्व", "तत्पुरुष", "कर्मधारय", "अव्ययीभाव"],
        "options_hi": ["द्वंद्व", "तत्पुरुष", "कर्मधारय", "अव्ययीभाव"],
        "answer_en": "द्वंद्व",
        "answer_hi": "द्वंद्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "'यथाशक्ति' में कौन सा समास है?",
        "question_hi": "'यथाशक्ति' में कौन सा समास है?",
        "options_en": ["अव्ययीभाव", "तत्पुरुष", "कर्मधारय", "द्विगु"],
        "options_hi": ["अव्ययीभाव", "तत्पुरुष", "कर्मधारय", "द्विगु"],
        "answer_en": "अव्ययीभाव",
        "answer_hi": "अव्ययीभाव",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Geography & Resources (91-100)
    {
        "num": 31,
        "question_en": "The largest state in India by area is:",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य है:",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The longest river in India is:",
        "question_hi": "भारत की सबसे लंबी नदी है:",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The 'Silicon Valley of India' is:",
        "question_hi": "'भारत की सिलिकॉन वैली' है:",
        "options_en": ["Hyderabad", "Bangalore", "Pune", "Chennai"],
        "options_hi": ["हैदराबाद", "बैंगलोर", "पुणे", "चेन्नई"],
        "answer_en": "Bangalore",
        "answer_hi": "बैंगलोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The largest producer of tea in India is:",
        "question_hi": "भारत में चाय का सबसे बड़ा उत्पादक है:",
        "options_en": ["Kerala", "Tamil Nadu", "Assam", "West Bengal"],
        "options_hi": ["केरल", "तमिलनाडु", "असम", "पश्चिम बंगाल"],
        "answer_en": "Assam",
        "answer_hi": "असम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The 'Blue Revolution' is related to:",
        "question_hi": "'नीली क्रांति' संबंधित है:",
        "options_en": ["Milk production", "Fisheries", "Oil seeds", "Food grains"],
        "options_hi": ["दुग्ध उत्पादन", "मत्स्य पालन", "तिलहन", "खाद्यान्न"],
        "answer_en": "Fisheries",
        "answer_hi": "मत्स्य पालन",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (36-100)
    {
        "num": 36,
        "question_en": "The dimensional formula of impulse is:",
        "question_hi": "आवेग का विमीय सूत्र है:",
        "options_en": ["MLT⁻¹", "MLT⁻²", "ML²T⁻²", "ML²T⁻¹"],
        "options_hi": ["MLT⁻¹", "MLT⁻²", "ML²T⁻²", "ML²T⁻¹"],
        "answer_en": "MLT⁻¹",
        "answer_hi": "MLT⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The IUPAC name of CH₃-CH(OH)-CH₃ is:",
        "question_hi": "CH₃-CH(OH)-CH₃ का IUPAC नाम है:",
        "options_en": ["Propan-2-ol", "Propan-1-ol", "Butan-2-ol", "Butan-1-ol"],
        "options_hi": ["प्रोपेन-2-ओल", "प्रोपेन-1-ओल", "ब्यूटेन-2-ओल", "ब्यूटेन-1-ओल"],
        "answer_en": "Propan-2-ol",
        "answer_hi": "प्रोपेन-2-ओल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The value of ∫(1/(x² - a²)) dx is:",
        "question_hi": "∫(1/(x² - a²)) dx का मान है:",
        "options_en": ["(1/2a)log|(x-a)/(x+a)| + C", "(1/a)tan⁻¹(x/a) + C", "log|x² - a²| + C", "(1/2a)log|(x+a)/(x-a)| + C"],
        "options_hi": ["(1/2a)log|(x-a)/(x+a)| + C", "(1/a)tan⁻¹(x/a) + C", "log|x² - a²| + C", "(1/2a)log|(x+a)/(x-a)| + C"],
        "answer_en": "(1/2a)log|(x-a)/(x+a)| + C",
        "answer_hi": "(1/2a)log|(x-a)/(x+a)| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The enzyme that converts sucrose to glucose and fructose is:",
        "question_hi": "सुक्रोज को ग्लूकोज और फ्रक्टोज में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Invertase", "Maltase", "Amylase", "Zymase"],
        "options_hi": ["इन्वर्टेज", "माल्टेज", "एमाइलेज", "जाइमेज"],
        "answer_en": "Invertase",
        "answer_hi": "इन्वर्टेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Choose the correct antonym of 'Profound':",
        "question_hi": "'Profound' का सही विलोम चुनें:",
        "options_en": ["Deep", "Superficial", "Intense", "Serious"],
        "options_hi": ["गहरा", "सतही", "तीव्र", "गंभीर"],
        "answer_en": "Superficial",
        "answer_hi": "सतही",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "'चौराहा' में कौन सा समास है?",
        "question_hi": "'चौराहा' में कौन सा समास है?",
        "options_en": ["द्विगु", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"],
        "options_hi": ["द्विगु", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"],
        "answer_en": "द्विगु",
        "answer_hi": "द्विगु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The first Indian woman to win an Olympic medal was:",
        "question_hi": "ओलंपिक पदक जीतने वाली पहली भारतीय महिला थीं:",
        "options_en": ["P.T. Usha", "Karnam Malleswari", "Mary Kom", "Saina Nehwal"],
        "options_hi": ["पी.टी. उषा", "कर्णम मल्लेश्वरी", "मैरी कॉम", "साइना नेहवाल"],
        "answer_en": "Karnam Malleswari",
        "answer_hi": "कर्णम मल्लेश्वरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The force between two charges is F. If the distance is halved, the new force is:",
        "question_hi": "दो आवेशों के बीच बल F है। यदि दूरी आधी कर दी जाए, नया बल है:",
        "options_en": ["F/2", "F/4", "2F", "4F"],
        "options_hi": ["F/2", "F/4", "2F", "4F"],
        "answer_en": "4F",
        "answer_hi": "4F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The compound that gives positive test with Schiff's reagent is:",
        "question_hi": "वह यौगिक जो शिफ अभिकर्मक के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Formaldehyde", "Acetone", "Ethanol", "Acetic acid"],
        "options_hi": ["फॉर्मेल्डिहाइड", "एसीटोन", "एथनॉल", "एसिटिक अम्ल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The value of ∫(logx dx) is:",
        "question_hi": "∫(logx dx) का मान है:",
        "options_en": ["xlogx - x + C", "xlogx + x + C", "logx/x + C", "x/logx + C"],
        "options_hi": ["xlogx - x + C", "xlogx + x + C", "logx/x + C", "x/logx + C"],
        "answer_en": "xlogx - x + C",
        "answer_hi": "xlogx - x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The hormone that stimulates growth is:",
        "question_hi": "वह हार्मोन जो वृद्धि को उत्तेजित करता है:",
        "options_en": ["Growth hormone", "Thyroxine", "Insulin", "Adrenaline"],
        "options_hi": ["वृद्धि हार्मोन", "थायरोक्सिन", "इंसुलिन", "एड्रेनालाईन"],
        "answer_en": "Growth hormone",
        "answer_hi": "वृद्धि हार्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["The news are good", "The news is good", "The news were good", "The news have been good"],
        "options_hi": ["The news are good", "The news is good", "The news were good", "The news have been good"],
        "answer_en": "The news is good",
        "answer_hi": "The news is good",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "'मृगनयनी' में कौन सा समास है?",
        "question_hi": "'मृगनयनी' में कौन सा समास है?",
        "options_en": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्विगु"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्विगु"],
        "answer_en": "बहुव्रीहि",
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The first Indian to win Nobel Prize in Chemistry was:",
        "question_hi": "रसायन विज्ञान में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["C.V. Raman", "Venkatraman Ramakrishnan", "Har Gobind Khorana", "No Indian has won in Chemistry"],
        "options_hi": ["सी.वी. रमन", "वेंकटरमन रामकृष्णन", "हर गोबिंद खुराना", "रसायन विज्ञान में कोई भारतीय नहीं जीता"],
        "answer_en": "No Indian has won in Chemistry",
        "answer_hi": "रसायन विज्ञान में कोई भारतीय नहीं जीता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The magnetic field due to a straight current carrying conductor is:",
        "question_hi": "एक सीधे धारावाही चालक के कारण चुंबकीय क्षेत्र है:",
        "options_en": ["Parallel to the conductor", "Perpendicular to the conductor", "Circular around the conductor", "Radial"],
        "options_hi": ["चालक के समानांतर", "चालक के लंबवत", "चालक के चारों ओर वृत्ताकार", "रेडियल"],
        "answer_en": "Circular around the conductor",
        "answer_hi": "चालक के चारों ओर वृत्ताकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The IUPAC name of CH₃-CH₂-NH₂ is:",
        "question_hi": "CH₃-CH₂-NH₂ का IUPAC नाम है:",
        "options_en": ["Ethanamine", "Methanamine", "Aminoethane", "Methylamine"],
        "options_hi": ["एथेनामाइन", "मेथेनामाइन", "एमीनोएथेन", "मेथिलएमीन"],
        "answer_en": "Ethanamine",
        "answer_hi": "एथेनामाइन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The value of ∫(e^x sinx dx) is:",
        "question_hi": "∫(e^x sinx dx) का मान है:",
        "options_en": ["(e^x/2)(sinx - cosx) + C", "(e^x/2)(sinx + cosx) + C", "e^x(sinx - cosx) + C", "e^x(sinx + cosx) + C"],
        "options_hi": ["(e^x/2)(sinx - cosx) + C", "(e^x/2)(sinx + cosx) + C", "e^x(sinx - cosx) + C", "e^x(sinx + cosx) + C"],
        "answer_en": "(e^x/2)(sinx - cosx) + C",
        "answer_hi": "(e^x/2)(sinx - cosx) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The process of conversion of glucose to lactic acid is called:",
        "question_hi": "ग्लूकोज के लैक्टिक अम्ल में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Aerobic respiration", "Anaerobic respiration", "Fermentation", "Glycolysis"],
        "options_hi": ["वायवीय श्वसन", "अवायवीय श्वसन", "किण्वन", "ग्लाइकोलाइसिस"],
        "answer_en": "Anaerobic respiration",
        "answer_hi": "अवायवीय श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Choose the correct preposition: 'He is proud ___ his son's achievement.'",
        "question_hi": "सही संबंधसूचक अव्यय चुनें: 'He is proud ___ his son's achievement.'",
        "options_en": ["of", "for", "with", "by"],
        "options_hi": ["of", "for", "with", "by"],
        "answer_en": "of",
        "answer_hi": "of",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'तुलसीकृत' रामचरितमानस में कौन सा समास है?",
        "question_hi": "'तुलसीकृत' रामचरितमानस में कौन सा समास है?",
        "options_en": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "अव्ययीभाव"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "अव्ययीभाव"],
        "answer_en": "तत्पुरुष",
        "answer_hi": "तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The first Indian to win a Grand Slam title was:",
        "question_hi": "ग्रैंड स्लैम खिताब जीतने वाले पहले भारतीय थे:",
        "options_en": ["Leander Paes", "Mahesh Bhupathi", "Ramanathan Krishnan", "Vijay Amritraj"],
        "options_hi": ["लिएंडर पेस", "महेश भूपति", "रमणाथन कृष्णन", "विजय अमृतराज"],
        "answer_en": "Mahesh Bhupathi",
        "answer_hi": "महेश भूपति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The magnetic field at the center of a circular coil of n turns is:",
        "question_hi": "n फेरों वाली वृत्ताकार कुंडली के केंद्र पर चुंबकीय क्षेत्र है:",
        "options_en": ["μ₀nI/2r", "μ₀nI/2πr", "μ₀nI/r", "2μ₀nI/r"],
        "options_hi": ["μ₀nI/2r", "μ₀nI/2πr", "μ₀nI/r", "2μ₀nI/r"],
        "answer_en": "μ₀nI/2r",
        "answer_hi": "μ₀nI/2r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The compound that shows functional group isomerism with ethanol is:",
        "question_hi": "वह यौगिक जो एथनॉल के साथ क्रियात्मक समूह समावयवता दर्शाता है:",
        "options_en": ["Dimethyl ether", "Acetaldehyde", "Acetic acid", "Acetone"],
        "options_hi": ["डाइमेथिल ईथर", "एसीटैल्डिहाइड", "एसिटिक अम्ल", "एसीटोन"],
        "answer_en": "Dimethyl ether",
        "answer_hi": "डाइमेथिल ईथर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The value of ∫(1/√(a² - x²)) dx is:",
        "question_hi": "∫(1/√(a² - x²)) dx का मान है:",
        "options_en": ["sin⁻¹(x/a) + C", "cos⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "log|x + √(x² - a²)| + C"],
        "options_hi": ["sin⁻¹(x/a) + C", "cos⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "log|x + √(x² - a²)| + C"],
        "answer_en": "sin⁻¹(x/a) + C",
        "answer_hi": "sin⁻¹(x/a) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The hormone that regulates menstrual cycle is:",
        "question_hi": "वह हार्मोन जो मासिक धर्म चक्र को नियंत्रित करता है:",
        "options_en": ["Estrogen", "Progesterone", "Both A and B", "Testosterone"],
        "options_hi": ["एस्ट्रोजन", "प्रोजेस्टेरोन", "A और B दोनों", "टेस्टोस्टेरोन"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Identify the error: 'Each of the students have completed their project.'",
        "question_hi": "त्रुटि पहचानें: 'Each of the students have completed their project.'",
        "options_en": ["Each of", "the students", "have completed", "their project"],
        "options_hi": ["Each of", "the students", "have completed", "their project"],
        "answer_en": "have completed",
        "answer_hi": "have completed",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "'नीलकंठ' में कौन सा समास है?",
        "question_hi": "'नीलकंठ' में कौन सा समास है?",
        "options_en": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्विगु"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्विगु"],
        "answer_en": "बहुव्रीहि",
        "answer_hi": "बहुव्रीहि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The first Indian woman to win an Asian Games gold medal was:",
        "question_hi": "एशियाई खेलों में स्वर्ण पदक जीतने वाली पहली भारतीय महिला थीं:",
        "options_en": ["P.T. Usha", "Kamaljit Sandhu", "M.L. Valsamma", "Shiny Abraham"],
        "options_hi": ["पी.टी. उषा", "कमलजीत संधू", "एम.एल. वल्सम्मा", "शाइनी अब्राहम"],
        "answer_en": "Kamaljit Sandhu",
        "answer_hi": "कमलजीत संधू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The work done by a conservative force in a closed path is:",
        "question_hi": "एक संरक्षी बल द्वारा बंद पथ में किया गया कार्य है:",
        "options_en": ["Always zero", "Always positive", "Always negative", "May be positive or negative"],
        "options_hi": ["सदैव शून्य", "सदैव धनात्मक", "सदैव ऋणात्मक", "धनात्मक या ऋणात्मक हो सकता है"],
        "answer_en": "Always zero",
        "answer_hi": "सदैव शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The IUPAC name of CH₃-CH₂-COOH is:",
        "question_hi": "CH₃-CH₂-COOH का IUPAC नाम है:",
        "options_en": ["Propanoic acid", "Ethanoic acid", "Butanoic acid", "Methanoic acid"],
        "options_hi": ["प्रोपेनोइक अम्ल", "एथेनोइक अम्ल", "ब्यूटेनोइक अम्ल", "मेथेनोइक अम्ल"],
        "answer_en": "Propanoic acid",
        "answer_hi": "प्रोपेनोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The value of ∫(tanx dx) is:",
        "question_hi": "∫(tanx dx) का मान है:",
        "options_en": ["log|secx| + C", "log|cosx| + C", "log|sinx| + C", "log|cosecx| + C"],
        "options_hi": ["log|secx| + C", "log|cosx| + C", "log|sinx| + C", "log|cosecx| + C"],
        "answer_en": "log|secx| + C",
        "answer_hi": "log|secx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The enzyme that converts hydrogen peroxide to water and oxygen is:",
        "question_hi": "हाइड्रोजन पेरोक्साइड को पानी और ऑक्सीजन में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Catalase", "Peroxidase", "Oxidase", "Dehydrogenase"],
        "options_hi": ["कैटालेज", "पेरोक्सीडेज", "ऑक्सीडेज", "डिहाइड्रोजनेज"],
        "answer_en": "Catalase",
        "answer_hi": "कैटालेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Choose the correct synonym of 'Pragmatic':",
        "question_hi": "'Pragmatic' का सही पर्यायवाची चुनें:",
        "options_en": ["Idealistic", "Practical", "Theoretical", "Dreamy"],
        "options_hi": ["आदर्शवादी", "व्यावहारिक", "सैद्धांतिक", "स्वप्निल"],
        "answer_en": "Practical",
        "answer_hi": "व्यावहारिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "'प्रतिदिन' में कौन सा समास है?",
        "question_hi": "'प्रतिदिन' में कौन सा समास है?",
        "options_en": ["अव्ययीभाव", "तत्पुरुष", "कर्मधारय", "द्विगु"],
        "options_hi": ["अव्ययीभाव", "तत्पुरुष", "कर्मधारय", "द्विगु"],
        "answer_en": "अव्ययीभाव",
        "answer_hi": "अव्ययीभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The first Indian woman to win the Miss Universe title was:",
        "question_hi": "मिस यूनिवर्स खिताब जीतने वाली पहली भारतीय महिला थीं:",
        "options_en": ["Sushmita Sen", "Lara Dutta", "Priyanka Chopra", "Aishwarya Rai"],
        "options_hi": ["सुष्मिता सेन", "लारा दत्ता", "प्रियंका चोपड़ा", "ऐश्वर्या राय"],
        "answer_en": "Sushmita Sen",
        "answer_hi": "सुष्मिता सेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The force on a charged particle moving in a magnetic field is given by:",
        "question_hi": "चुंबकीय क्षेत्र में गतिमान आवेशित कण पर बल दिया जाता है:",
        "options_en": ["q(E + v×B)", "q(E - v×B)", "q(v×B)", "qB×v"],
        "options_hi": ["q(E + v×B)", "q(E - v×B)", "q(v×B)", "qB×v"],
        "answer_en": "q(v×B)",
        "answer_hi": "q(v×B)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The compound that gives positive test with sodium bicarbonate is:",
        "question_hi": "वह यौगिक जो सोडियम बाइकार्बोनेट के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Acetic acid", "Ethanol", "Acetone", "Ether"],
        "options_hi": ["एसिटिक अम्ल", "एथनॉल", "एसीटोन", "ईथर"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of ∫(cotx dx) is:",
        "question_hi": "∫(cotx dx) का मान है:",
        "options_en": ["log|sinx| + C", "log|cosx| + C", "log|secx| + C", "log|cosecx| + C"],
        "options_hi": ["log|sinx| + C", "log|cosx| + C", "log|secx| + C", "log|cosecx| + C"],
        "answer_en": "log|sinx| + C",
        "answer_hi": "log|sinx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The hormone that regulates urine production is:",
        "question_hi": "वह हार्मोन जो मूत्र उत्पादन को नियंत्रित करता है:",
        "options_en": ["ADH", "Insulin", "Thyroxine", "Adrenaline"],
        "options_hi": ["ADH", "इंसुलिन", "थायरोक्सिन", "एड्रेनालाईन"],
        "answer_en": "ADH",
        "answer_hi": "ADH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["The committee have decided", "The committee has decided", "The committee were decided", "The committee are decided"],
        "options_hi": ["The committee have decided", "The committee has decided", "The committee were decided", "The committee are decided"],
        "answer_en": "The committee has decided",
        "answer_hi": "The committee has decided",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "'महापुरुष' में कौन सा समास है?",
        "question_hi": "'महापुरुष' में कौन सा समास है?",
        "options_en": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्विगु"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "बहुव्रीहि", "द्विगु"],
        "answer_en": "कर्मधारय",
        "answer_hi": "कर्मधारय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The first Indian to win the Pulitzer Prize was:",
        "question_hi": "पुलित्जर पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Jhumpa Lahiri", "Vikram Seth", "Arundhati Roy", "Salman Rushdie"],
        "options_hi": ["झुम्पा लाहिड़ी", "विक्रम सेठ", "अरुंधति रॉय", "सलमान रश्दी"],
        "answer_en": "Jhumpa Lahiri",
        "answer_hi": "झुम्पा लाहिड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The magnetic field due to a current carrying solenoid is similar to:",
        "question_hi": "धारावाही परिनालिका के कारण चुंबकीय क्षेत्र समान होता है:",
        "options_en": ["Bar magnet", "Horseshoe magnet", "Circular coil", "Straight wire"],
        "options_hi": ["छड़ चुंबक", "घोड़े की नाल चुंबक", "वृत्ताकार कुंडली", "सीधे तार"],
        "answer_en": "Bar magnet",
        "answer_hi": "छड़ चुंबक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The compound that undergoes haloform reaction is:",
        "question_hi": "वह यौगिक जो हैलोफॉर्म अभिक्रिया से गुजरता है:",
        "options_en": ["Acetaldehyde", "Formaldehyde", "Benzaldehyde", "Acetone"],
        "options_hi": ["एसीटैल्डिहाइड", "फॉर्मेल्डिहाइड", "बेंजाल्डिहाइड", "एसीटोन"],
        "answer_en": "Acetone",
        "answer_hi": "एसीटोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The value of ∫(0 to 1) x² dx is:",
        "question_hi": "∫(0 से 1) x² dx का मान है:",
        "options_en": ["1/2", "1/3", "1/4", "1"],
        "options_hi": ["1/2", "1/3", "1/4", "1"],
        "answer_en": "1/3",
        "answer_hi": "1/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The site of DNA replication is:",
        "question_hi": "DNA प्रतिकृति का स्थल है:",
        "options_en": ["Nucleus", "Mitochondria", "Cytoplasm", "Ribosome"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "कोशिकाद्रव्य", "राइबोसोम"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "Choose the correct antonym of 'Candid':",
        "question_hi": "'Candid' का सही विलोम चुनें:",
        "options_en": ["Frank", "Honest", "Deceptive", "Sincere"],
        "options_hi": ["स्पष्टवादी", "ईमानदार", "भ्रामक", "ईमानदार"],
        "answer_en": "Deceptive",
        "answer_hi": "भ्रामक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "'आजीवन' में कौन सा समास है?",
        "question_hi": "'आजीवन' में कौन सा समास है?",
        "options_en": ["अव्ययीभाव", "तत्पुरुष", "कर्मधारय", "द्विगु"],
        "options_hi": ["अव्ययीभाव", "तत्पुरुष", "कर्मधारय", "द्विगु"],
        "answer_en": "अव्ययीभाव",
        "answer_hi": "अव्ययीभाव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The first Indian to win the Ramon Magsaysay Award was:",
        "question_hi": "रमन मैग्सेसे पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Mother Teresa", "Vinoba Bhave", "Jayaprakash Narayan", "Acharya Kripalani"],
        "options_hi": ["मदर टेरेसा", "विनोबा भावे", "जयप्रकाश नारायण", "आचार्य कृपलानी"],
        "answer_en": "Vinoba Bhave",
        "answer_hi": "विनोबा भावे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The force between two parallel current carrying wires is proportional to:",
        "question_hi": "दो समानांतर धारावाही तारों के बीच बल समानुपाती होता है:",
        "options_en": ["I₁I₂/d", "I₁I₂/d²", "I₁I₂", "d/I₁I₂"],
        "options_hi": ["I₁I₂/d", "I₁I₂/d²", "I₁I₂", "d/I₁I₂"],
        "answer_en": "I₁I₂/d",
        "answer_hi": "I₁I₂/d",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The compound that gives positive test with Lucas reagent is:",
        "question_hi": "वह यौगिक जो लुकास अभिकर्मक के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Primary alcohol", "Secondary alcohol", "Tertiary alcohol", "All of these"],
        "options_hi": ["प्राथमिक ऐल्कोहॉल", "द्वितीयक ऐल्कोहॉल", "तृतीयक ऐल्कोहॉल", "उपरोक्त सभी"],
        "answer_en": "Tertiary alcohol",
        "answer_hi": "तृतीयक ऐल्कोहॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The value of ∫(secx dx) is:",
        "question_hi": "∫(secx dx) का मान है:",
        "options_en": ["log|secx + tanx| + C", "log|secx - tanx| + C", "log|cosx| + C", "log|sinx| + C"],
        "options_hi": ["log|secx + tanx| + C", "log|secx - tanx| + C", "log|cosx| + C", "log|sinx| + C"],
        "answer_en": "log|secx + tanx| + C",
        "answer_hi": "log|secx + tanx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The hormone that regulates calcium level in blood is:",
        "question_hi": "वह हार्मोन जो रक्त में कैल्शियम स्तर को नियंत्रित करता है:",
        "options_en": ["Parathormone", "Thyroxine", "Insulin", "Adrenaline"],
        "options_hi": ["पैराथॉर्मोन", "थायरोक्सिन", "इंसुलिन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["The police is investigating", "The police are investigating", "The police was investigating", "The police were investigating"],
        "options_hi": ["The police is investigating", "The police are investigating", "The police was investigating", "The police were investigating"],
        "answer_en": "The police are investigating",
        "answer_hi": "The police are investigating",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "'सप्ताह' में कौन सा समास है?",
        "question_hi": "'सप्ताह' में कौन सा समास है?",
        "options_en": ["द्विगु", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"],
        "options_hi": ["द्विगु", "तत्पुरुष", "कर्मधारय", "बहुव्रीहि"],
        "answer_en": "द्विगु",
        "answer_hi": "द्विगु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The first Indian woman to win the Padma Shri award was:",
        "question_hi": "पद्म श्री पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
        "options_en": ["M.S. Subbulakshmi", "Lata Mangeshkar", "Sarojini Naidu", "Amrita Pritam"],
        "options_hi": ["एम.एस. सुब्बुलक्ष्मी", "लता मंगेशकर", "सरोजिनी नायडू", "अमृता प्रीतम"],
        "answer_en": "M.S. Subbulakshmi",
        "answer_hi": "एम.एस. सुब्बुलक्ष्मी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The unit of self-inductance is:",
        "question_hi": "स्व-प्रेरकत्व की इकाई है:",
        "options_en": ["Henry", "Weber", "Tesla", "Farad"],
        "options_hi": ["हेनरी", "वेबर", "टेस्ला", "फैराड"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The number of sigma bonds in ethane is:",
        "question_hi": "ईथेन में सिग्मा बंधों की संख्या है:",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The value of ∫(1/(x logx)) dx is:",
        "question_hi": "∫(1/(x logx)) dx का मान है:",
        "options_en": ["log|logx| + C", "log|x| + C", "1/(logx) + C", "log|x|/x + C"],
        "options_hi": ["log|logx| + C", "log|x| + C", "1/(logx) + C", "log|x|/x + C"],
        "answer_en": "log|logx| + C",
        "answer_hi": "log|logx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The site of transcription is:",
        "question_hi": "प्रतिलेखन का स्थल है:",
        "options_en": ["Nucleus", "Ribosome", "Cytoplasm", "Mitochondria"],
        "options_hi": ["केंद्रक", "राइबोसोम", "कोशिकाद्रव्य", "माइटोकॉन्ड्रिया"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Choose the correct synonym of 'Verbose':",
        "question_hi": "'Verbose' का सही पर्यायवाची चुनें:",
        "options_en": ["Concise", "Wordy", "Brief", "Short"],
        "options_hi": ["संक्षिप्त", "शब्दाडंबरपूर्ण", "संक्षेप", "छोटा"],
        "answer_en": "Wordy",
        "answer_hi": "शब्दाडंबरपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "'गंगाजल' में कौन सा समास है?",
        "question_hi": "'गंगाजल' में कौन सा समास है?",
        "options_en": ["तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"],
        "options_hi": ["तत्पुरुष", "कर्मधारय", "द्विगु", "बहुव्रीहि"],
        "answer_en": "तत्पुरुष",
        "answer_hi": "तत्पुरुष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The first Indian to win the Jnanpith Award was:",
        "question_hi": "ज्ञानपीठ पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["G. Sankara Kurup", "Sumitranandan Pant", "Mahadevi Verma", "Sachchidananda Vatsyayan"],
        "options_hi": ["जी. शंकर कुरुप", "सुमित्रानंदन पंत", "महादेवी वर्मा", "सच्चिदानंद वात्स्यायन"],
        "answer_en": "G. Sankara Kurup",
        "answer_hi": "जी. शंकर कुरुप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The force experienced by a current carrying conductor in magnetic field is maximum when:",
        "question_hi": "चुंबकीय क्षेत्र में धारावाही चालक द्वारा अनुभव किया गया बल अधिकतम होता है जब:",
        "options_en": ["Conductor is parallel to field", "Conductor is perpendicular to field", "Conductor is at 45° to field", "Always same"],
        "options_hi": ["चालक क्षेत्र के समानांतर है", "चालक क्षेत्र के लंबवत है", "चालक क्षेत्र से 45° पर है", "सदैव समान"],
        "answer_en": "Conductor is perpendicular to field",
        "answer_hi": "चालक क्षेत्र के लंबवत है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The number of structural isomers of C₄H₁₀O is:",
        "question_hi": "C₄H₁₀O के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    }
];
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