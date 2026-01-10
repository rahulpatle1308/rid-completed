const questions =[
    {
        "num": 1,
        "question_en": "The electromagnetic waves used in satellite communication are:",
        "question_hi": "उपग्रह संचार में प्रयुक्त विद्युत चुम्बकीय तरंगें हैं:",
        "options_en": ["Radio waves", "Microwaves", "Infrared waves", "Ultraviolet waves"],
        "options_hi": ["रेडियो तरंगें", "माइक्रोवेव", "अवरक्त तरंगें", "पराबैंगनी तरंगें"],
        "answer_en": "Microwaves",
        "answer_hi": "माइक्रोवेव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The ratio of amplitudes of electric field and magnetic field in electromagnetic wave is:",
        "question_hi": "विद्युत चुम्बकीय तरंग में विद्युत क्षेत्र और चुंबकीय क्षेत्र के आयामों का अनुपात है:",
        "options_en": ["c", "1/c", "c²", "1/c²"],
        "options_hi": ["c", "1/c", "c²", "1/c²"],
        "answer_en": "c",
        "answer_hi": "c",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The frequency range of visible light is:",
        "question_hi": "दृश्य प्रकाश की आवृत्ति सीमा है:",
        "options_en": ["4×10¹⁴ to 8×10¹⁴ Hz", "10⁸ to 10¹¹ Hz", "10¹⁵ to 10¹⁷ Hz", "10¹⁸ to 10²⁰ Hz"],
        "options_hi": ["4×10¹⁴ से 8×10¹⁴ Hz", "10⁸ से 10¹¹ Hz", "10¹⁵ से 10¹⁷ Hz", "10¹⁸ से 10²⁰ Hz"],
        "answer_en": "4×10¹⁴ to 8×10¹⁴ Hz",
        "answer_hi": "4×10¹⁴ से 8×10¹⁴ Hz",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In amplitude modulation, the bandwidth is:",
        "question_hi": "आयाम मॉडुलन में, बैंडविड्थ है:",
        "options_en": ["Equal to carrier frequency", "Twice the modulating frequency", "Equal to modulating frequency", "Half the carrier frequency"],
        "options_hi": ["वाहक आवृत्ति के बराबर", "मॉड्यूलेटिंग आवृत्ति से दोगुना", "मॉड्यूलेटिंग आवृत्ति के बराबर", "वाहक आवृत्ति की आधी"],
        "answer_en": "Twice the modulating frequency",
        "answer_hi": "मॉड्यूलेटिंग आवृत्ति से दोगुना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The waves used in medical diagnosis are:",
        "question_hi": "चिकित्सा निदान में प्रयुक्त तरंगें हैं:",
        "options_en": ["X-rays", "Gamma rays", "Ultraviolet rays", "Infrared rays"],
        "options_hi": ["X-किरणें", "गामा किरणें", "पराबैंगनी किरणें", "अवरक्त किरणें"],
        "answer_en": "X-rays",
        "answer_hi": "X-किरणें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Nylon-6 is obtained from:",
        "question_hi": "नायलॉन-6 प्राप्त किया जाता है:",
        "options_en": ["Caprolactam", "Adipic acid", "Terephthalic acid", "Ethylene glycol"],
        "options_hi": ["कैप्रोलैक्टम", "एडिपिक अम्ल", "टेरेफ्थैलिक अम्ल", "एथिलीन ग्लाइकॉल"],
        "answer_en": "Caprolactam",
        "answer_hi": "कैप्रोलैक्टम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The monomer of natural rubber is:",
        "question_hi": "प्राकृतिक रबर का मोनोमर है:",
        "options_en": ["Isoprene", "Butadiene", "Chloroprene", "Styrene"],
        "options_hi": ["आइसोप्रीन", "ब्यूटाडाइन", "क्लोरोप्रीन", "स्टाइरीन"],
        "answer_en": "Isoprene",
        "answer_hi": "आइसोप्रीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which of the following is a disaccharide?",
        "question_hi": "निम्नलिखित में से कौन सा एक डाइसैकेराइड है?",
        "options_en": ["Glucose", "Fructose", "Sucrose", "Starch"],
        "options_hi": ["ग्लूकोज", "फ्रक्टोज", "सुक्रोज", "स्टार्च"],
        "answer_en": "Sucrose",
        "answer_hi": "सुक्रोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The vitamin that is a hormone is:",
        "question_hi": "वह विटामिन जो एक हार्मोन है:",
        "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The enzyme that hydrolyzes starch is:",
        "question_hi": "स्टार्च को जल-अपघटित करने वाला एंजाइम है:",
        "options_en": ["Amylase", "Pepsin", "Trypsin", "Lipase"],
        "options_hi": ["एमाइलेज", "पेप्सिन", "ट्रिप्सिन", "लाइपेज"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "If A is a square matrix such that A² = A, then (I + A)³ - 7A is equal to:",
        "question_hi": "यदि A एक वर्ग आव्यूह इस प्रकार है कि A² = A, तो (I + A)³ - 7A बराबर है:",
        "options_en": ["A", "I", "I - A", "I + A"],
        "options_hi": ["A", "I", "I - A", "I + A"],
        "answer_en": "I",
        "answer_hi": "I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "If A and B are square matrices of same order, then (AB)' is equal to:",
        "question_hi": "यदि A और B समान कोटि के वर्ग आव्यूह हैं, तो (AB)' बराबर है:",
        "options_en": ["A'B'", "B'A'", "AB", "BA"],
        "options_hi": ["A'B'", "B'A'", "AB", "BA"],
        "answer_en": "B'A'",
        "answer_hi": "B'A'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The value of the determinant |1 ω ω²| |ω ω² 1| |ω² 1 ω| is:",
        "question_hi": "सारणिक |1 ω ω²| |ω ω² 1| |ω² 1 ω| का मान है:",
        "options_en": ["0", "1", "ω", "ω²"],
        "options_hi": ["0", "1", "ω", "ω²"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "If A is a 3×3 matrix and |A| = 2, then |adj A| is:",
        "question_hi": "यदि A एक 3×3 आव्यूह है और |A| = 2, तो |adj A| है:",
        "options_en": ["2", "4", "8", "16"],
        "options_hi": ["2", "4", "8", "16"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The system of equations x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = 12 has no solution when λ is:",
        "question_hi": "समीकरणों का निकाय x + y + z = 6, x + 2y + 3z = 10, x + 2y + λz = 12 का कोई हल नहीं है जब λ है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The process of fusion of male and female gametes is called:",
        "question_hi": "नर और मादा युग्मकों के संलयन की प्रक्रिया कहलाती है:",
        "options_en": ["Fertilization", "Implantation", "Gestation", "Ovulation"],
        "options_hi": ["निषेचन", "आरोपण", "गर्भावस्था", "ओव्यूलेशन"],
        "answer_en": "Fertilization",
        "answer_hi": "निषेचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "In humans, the sex of the child is determined by:",
        "question_hi": "मनुष्यों में, बच्चे का लिंग निर्धारित होता है:",
        "options_en": ["Mother", "Father", "Both parents", "Environment"],
        "options_hi": ["माँ", "पिता", "दोनों माता-पिता", "पर्यावरण"],
        "answer_en": "Father",
        "answer_hi": "पिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The hormone that maintains pregnancy is:",
        "question_hi": "वह हार्मोन जो गर्भावस्था को बनाए रखता है:",
        "options_en": ["Estrogen", "Progesterone", "Testosterone", "Oxytocin"],
        "options_hi": ["एस्ट्रोजन", "प्रोजेस्टेरोन", "टेस्टोस्टेरोन", "ऑक्सीटोसिन"],
        "answer_en": "Progesterone",
        "answer_hi": "प्रोजेस्टेरोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The process of formation of gametes is called:",
        "question_hi": "युग्मकों के निर्माण की प्रक्रिया कहलाती है:",
        "options_en": ["Gametogenesis", "Spermatogenesis", "Oogenesis", "Embryogenesis"],
        "options_hi": ["युग्मकजनन", "शुक्राणुजनन", "अंडजनन", "भ्रूणजनन"],
        "answer_en": "Gametogenesis",
        "answer_hi": "युग्मकजनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The site of fertilization in humans is:",
        "question_hi": "मनुष्यों में निषेचन का स्थल है:",
        "options_en": ["Ovary", "Uterus", "Fallopian tube", "Vagina"],
        "options_hi": ["अंडाशय", "गर्भाशय", "अंडवाहिनी नली", "योनि"],
        "answer_en": "Fallopian tube",
        "answer_hi": "अंडवाहिनी नली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Choose the one word substitution: 'A person who believes in God'",
        "question_hi": "एक शब्द प्रतिस्थापन चुनें: 'वह व्यक्ति जो भगवान में विश्वास करता है'",
        "options_en": ["Atheist", "Theist", "Agnostic", "Rationalist"],
        "options_hi": ["नास्तिक", "आस्तिक", "अज्ञेयवादी", "तर्कवादी"],
        "answer_en": "Theist",
        "answer_hi": "आस्तिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Choose the correct meaning of idiom: 'Break the ice'",
        "question_hi": "मुहावरे का सही अर्थ चुनें: 'Break the ice'",
        "options_en": ["To fall through ice", "To start a conversation", "To be cold", "To be angry"],
        "options_hi": ["बर्फ में गिरना", "बातचीत शुरू करना", "ठंडा होना", "गुस्सा होना"],
        "answer_en": "To start a conversation",
        "answer_hi": "बातचीत शुरू करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "One word for: 'A person who loves mankind'",
        "question_hi": "एक शब्द में: 'वह व्यक्ति जो मानव जाति से प्रेम करता है'",
        "options_en": ["Philanthropist", "Misanthrope", "Optimist", "Pessimist"],
        "options_hi": ["मानवतावादी", "मानवद्वेषी", "आशावादी", "निराशावादी"],
        "answer_en": "Philanthropist",
        "answer_hi": "मानवतावादी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Meaning of: 'Bite the bullet'",
        "question_hi": "अर्थ चुनें: 'Bite the bullet'",
        "options_en": ["To be brave", "To face a difficult situation", "To eat something hard", "To be angry"],
        "options_hi": ["बहादुर होना", "कठिन स्थिति का सामना करना", "कुछ कठिन खाना", "गुस्सा होना"],
        "answer_en": "To face a difficult situation",
        "answer_hi": "कठिन स्थिति का सामना करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "One word for: 'A person who cannot read or write'",
        "question_hi": "एक शब्द में: 'वह व्यक्ति जो पढ़-लिख नहीं सकता'",
        "options_en": ["Illiterate", "Literate", "Educated", "Scholar"],
        "options_hi": ["अनपढ़", "साक्षर", "शिक्षित", "विद्वान"],
        "answer_en": "Illiterate",
        "answer_hi": "अनपढ़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "'दोहा' छंद में कुल कितनी मात्राएँ होती हैं?",
        "question_hi": "'दोहा' छंद में कुल कितनी मात्राएँ होती हैं?",
        "options_en": ["24", "26", "28", "30"],
        "options_hi": ["24", "26", "28", "30"],
        "answer_en": "24",
        "answer_hi": "24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'श्रृंगार रस' का स्थायी भाव है:",
        "question_hi": "'श्रृंगार रस' का स्थायी भाव है:",
        "options_en": ["रति", "शोक", "क्रोध", "हास"],
        "options_hi": ["रति", "शोक", "क्रोध", "हास"],
        "answer_en": "रति",
        "answer_hi": "रति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "'चौपाई' छंद में कितने अक्षर होते हैं?",
        "question_hi": "'चौपाई' छंद में कितने अक्षर होते हैं?",
        "options_en": ["16", "20", "24", "28"],
        "options_hi": ["16", "20", "24", "28"],
        "answer_en": "16",
        "answer_hi": "16",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'वीर रस' का स्थायी भाव है:",
        "question_hi": "'वीर रस' का स्थायी भाव है:",
        "options_en": ["उत्साह", "क्रोध", "भय", "जुगुप्सा"],
        "options_hi": ["उत्साह", "क्रोध", "भय", "जुगुप्सा"],
        "answer_en": "उत्साह",
        "answer_hi": "उत्साह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "'सोरठा' छंद में कुल मात्राएँ होती हैं:",
        "question_hi": "'सोरठा' छंद में कुल मात्राएँ होती हैं:",
        "options_en": ["22", "24", "26", "28"],
        "options_hi": ["22", "24", "26", "28"],
        "answer_en": "24",
        "answer_hi": "24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "The first Indian satellite was launched in:",
        "question_hi": "पहला भारतीय उपग्रह लॉन्च किया गया था:",
        "options_en": ["1975", "1980", "1985", "1990"],
        "options_hi": ["1975", "1980", "1985", "1990"],
        "answer_en": "1975",
        "answer_hi": "1975",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The first Indian nuclear test was conducted in:",
        "question_hi": "पहला भारतीय परमाणु परीक्षण आयोजित किया गया था:",
        "options_en": ["1974", "1980", "1998", "2002"],
        "options_hi": ["1974", "1980", "1998", "2002"],
        "answer_en": "1974",
        "answer_hi": "1974",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The first Indian in space was:",
        "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय थे:",
        "options_en": ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Ravish Malhotra"],
        "options_hi": ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "रविश मल्होत्रा"],
        "answer_en": "Rakesh Sharma",
        "answer_hi": "राकेश शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The first Indian woman in space was:",
        "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला थीं:",
        "options_en": ["Kalpana Chawla", "Sunita Williams", "Both were Indian origin", "None of these"],
        "options_hi": ["कल्पना चावला", "सुनीता विलियम्स", "दोनों भारतीय मूल की थीं", "इनमें से कोई नहीं"],
        "answer_en": "Both were Indian origin",
        "answer_hi": "दोनों भारतीय मूल की थीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The first Indian to win Nobel Prize was:",
        "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Hargobind Khorana"],
        "options_hi": ["रबींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "हरगोबिंद खुराना"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The dimensional formula of power is:",
        "question_hi": "शक्ति का विमीय सूत्र है:",
        "options_en": ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "options_hi": ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "answer_en": "ML²T⁻³",
        "answer_hi": "ML²T⁻³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The IUPAC name of CH₃-CH₂-NH-CH₃ is:",
        "question_hi": "CH₃-CH₂-NH-CH₃ का IUPAC नाम है:",
        "options_en": ["N-Methylethanamine", "N-Ethylmethanamine", "Dimethylamine", "Diethylamine"],
        "options_hi": ["N-मेथिलएथेनामाइन", "N-एथिलमेथेनामाइन", "डाइमेथिलएमीन", "डाइएथिलएमीन"],
        "answer_en": "N-Methylethanamine",
        "answer_hi": "N-मेथिलएथेनामाइन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The value of ∫(e^x (sinx + cosx) dx) is:",
        "question_hi": "∫(e^x (sinx + cosx) dx) का मान है:",
        "options_en": ["e^x sinx + C", "e^x cosx + C", "e^x (sinx + cosx) + C", "e^x + C"],
        "options_hi": ["e^x sinx + C", "e^x cosx + C", "e^x (sinx + cosx) + C", "e^x + C"],
        "answer_en": "e^x sinx + C",
        "answer_hi": "e^x sinx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The enzyme that converts glucose to glucose-6-phosphate is:",
        "question_hi": "ग्लूकोज को ग्लूकोज-6-फॉस्फेट में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Hexokinase", "Phosphofructokinase", "Pyruvate kinase", "Aldolase"],
        "options_hi": ["हेक्सोकाइनेज", "फॉस्फोफ्रक्टोकाइनेज", "पाइरुवेट काइनेज", "एल्डोलेज"],
        "answer_en": "Hexokinase",
        "answer_hi": "हेक्सोकाइनेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Choose the correct antonym of 'Benevolent':",
        "question_hi": "'Benevolent' का सही विलोम चुनें:",
        "options_en": ["Malevolent", "Kind", "Generous", "Charitable"],
        "options_hi": ["दुर्भावनापूर्ण", "दयालु", "उदार", "दानशील"],
        "answer_en": "Malevolent",
        "answer_hi": "दुर्भावनापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "'करुण रस' का स्थायी भाव है:",
        "question_hi": "'करुण रस' का स्थायी भाव है:",
        "options_en": ["शोक", "रति", "क्रोध", "हास"],
        "options_hi": ["शोक", "रति", "क्रोध", "हास"],
        "answer_en": "शोक",
        "answer_hi": "शोक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The first Indian to win an individual Olympic gold medal was:",
        "question_hi": "व्यक्तिगत ओलंपिक स्वर्ण पदक जीतने वाले पहले भारतीय थे:",
        "options_en": ["Abhinav Bindra", "K.D. Jadhav", "Milkha Singh", "P.T. Usha"],
        "options_hi": ["अभिनव बिंद्रा", "के.डी. जाधव", "मिल्खा सिंह", "पी.टी. उषा"],
        "answer_en": "Abhinav Bindra",
        "answer_hi": "अभिनव बिंद्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The force between two parallel wires carrying currents in opposite directions is:",
        "question_hi": "विपरीत दिशाओं में धारा वहन करने वाले दो समानांतर तारों के बीच बल है:",
        "options_en": ["Attractive", "Repulsive", "Zero", "Infinite"],
        "options_hi": ["आकर्षक", "प्रतिकर्षी", "शून्य", "अनंत"],
        "answer_en": "Repulsive",
        "answer_hi": "प्रतिकर्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The compound that gives positive iodoform test is:",
        "question_hi": "वह यौगिक जो सकारात्मक आयोडोफॉर्म परीक्षण देता है:",
        "options_en": ["CH₃CH₂OH", "CH₃COOH", "CH₃OCH₃", "C₆H₅OH"],
        "options_hi": ["CH₃CH₂OH", "CH₃COOH", "CH₃OCH₃", "C₆H₅OH"],
        "answer_en": "CH₃CH₂OH",
        "answer_hi": "CH₃CH₂OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The value of ∫(1/(1 + e^x)) dx is:",
        "question_hi": "∫(1/(1 + e^x)) dx का मान है:",
        "options_en": ["x - log(1 + e^x) + C", "log(1 + e^x) + C", "x + log(1 + e^x) + C", "log(e^x/(1 + e^x)) + C"],
        "options_hi": ["x - log(1 + e^x) + C", "log(1 + e^x) + C", "x + log(1 + e^x) + C", "log(e^x/(1 + e^x)) + C"],
        "answer_en": "x - log(1 + e^x) + C",
        "answer_hi": "x - log(1 + e^x) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The hormone that stimulates milk production is:",
        "question_hi": "वह हार्मोन जो दूध उत्पादन को उत्तेजित करता है:",
        "options_en": ["Prolactin", "Oxytocin", "Estrogen", "Progesterone"],
        "options_hi": ["प्रोलैक्टिन", "ऑक्सीटोसिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
        "answer_en": "Prolactin",
        "answer_hi": "प्रोलैक्टिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
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
        "num": 48,
        "question_en": "'हास्य रस' का स्थायी भाव है:",
        "question_hi": "'हास्य रस' का स्थायी भाव है:",
        "options_en": ["हास", "रति", "क्रोध", "शोक"],
        "options_hi": ["हास", "रति", "क्रोध", "शोक"],
        "answer_en": "हास",
        "answer_hi": "हास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The first Indian to win the Fields Medal was:",
        "question_hi": "फील्ड्स मेडल जीतने वाले पहले भारतीय थे:",
        "options_en": ["C.R. Rao", "S.R. Srinivasa Varadhan", "Manjul Bhargava", "No Indian has won"],
        "options_hi": ["सी.आर. राव", "एस.आर. श्रीनिवास वरदन", "मंजुल भार्गव", "कोई भारतीय नहीं जीता"],
        "answer_en": "Manjul Bhargava",
        "answer_hi": "मंजुल भार्गव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The magnetic field inside a long solenoid is:",
        "question_hi": "एक लंबी परिनालिका के अंदर चुंबकीय क्षेत्र है:",
        "options_en": ["Uniform", "Non-uniform", "Zero", "Radial"],
        "options_hi": ["एकसमान", "असमान", "शून्य", "रेडियल"],
        "answer_en": "Uniform",
        "answer_hi": "एकसमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The SI unit of electric flux is:",
        "question_hi": "विद्युत फ्लक्स की SI इकाई है:",
        "options_en": ["Weber", "Tesla", "Volt", "Newton per coulomb"],
        "options_hi": ["वेबर", "टेस्ला", "वोल्ट", "न्यूटन प्रति कूलम्ब"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which of the following is not a colligative property?",
        "question_hi": "निम्नलिखित में से कौन सा अणुसंख्य गुणधर्म नहीं है?",
        "options_en": ["Osmotic pressure", "Lowering of vapor pressure", "Elevation in boiling point", "Viscosity"],
        "options_hi": ["परासरण दबाव", "वाष्प दबाव में कमी", "क्वथनांक में उन्नयन", "श्यानता"],
        "answer_en": "Viscosity",
        "answer_hi": "श्यानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The number of tangents that can be drawn from a point on a circle is:",
        "question_hi": "एक वृत्त पर एक बिंदु से खींची जा सकने वाली स्पर्श रेखाओं की संख्या है:",
        "options_en": ["0", "1", "2", "Infinite"],
        "options_hi": ["0", "1", "2", "अनंत"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The process of conversion of NO₂ to N₂ is called:",
        "question_hi": "NO₂ से N₂ में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Denitrification", "Ammonification", "Nitrification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "विनाइट्रीकरण", "अमोनीकरण", "नाइट्रीकरण"],
        "answer_en": "Denitrification",
        "answer_hi": "विनाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Choose the correct synonym of 'Ubiquitous':",
        "question_hi": "'Ubiquitous' का सही समानार्थी चुनें:",
        "options_en": ["Rare", "Everywhere", "Nowhere", "Unique"],
        "options_hi": ["दुर्लभ", "सर्वव्यापी", "कहीं नहीं", "अनोखा"],
        "answer_en": "Everywhere",
        "answer_hi": "सर्वव्यापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'रौद्र रस' का स्थायी भाव है:",
        "question_hi": "'रौद्र रस' का स्थायी भाव है:",
        "options_en": ["क्रोध", "रति", "शोक", "हास"],
        "options_hi": ["क्रोध", "रति", "शोक", "हास"],
        "answer_en": "क्रोध",
        "answer_hi": "क्रोध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The first Indian state to be formed on linguistic basis was:",
        "question_hi": "भाषाई आधार पर गठित होने वाला पहला भारतीय राज्य था:",
        "options_en": ["Kerala", "Andhra Pradesh", "Tamil Nadu", "Karnataka"],
        "options_hi": ["केरल", "आंध्र प्रदेश", "तमिलनाडु", "कर्नाटक"],
        "answer_en": "Andhra Pradesh",
        "answer_hi": "आंध्र प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The work function of a metal is 2 eV. The threshold wavelength is:",
        "question_hi": "एक धातु का कार्य फलन 2 eV है। दहलीज तरंगदैर्ध्य है:",
        "options_en": ["620 nm", "6200 Å", "620 Å", "6200 nm"],
        "options_hi": ["620 nm", "6200 Å", "620 Å", "6200 nm"],
        "answer_en": "620 nm",
        "answer_hi": "620 nm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "In the reaction 2A + B → products, if concentration of A is doubled and B is halved, the rate becomes 4 times. The order with respect to A is:",
        "question_hi": "अभिक्रिया 2A + B → उत्पादों में, यदि A की सांद्रता दोगुनी और B की आधी की जाती है, तो दर 4 गुना हो जाती है। A के सापेक्ष कोटि है:",
        "options_en": ["1", "2", "0", "1/2"],
        "options_hi": ["1", "2", "0", "1/2"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The area bounded by the curve y = x³, the x-axis and the lines x = -1 and x = 1 is:",
        "question_hi": "वक्र y = x³, x-अक्ष और रेखाओं x = -1 और x = 1 से घिरा क्षेत्रफल है:",
        "options_en": ["0", "1", "1/2", "1/4"],
        "options_hi": ["0", "1", "1/2", "1/4"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The process of DNA replication is:",
        "question_hi": "DNA प्रतिकृति की प्रक्रिया है:",
        "options_en": ["Conservative", "Semi-conservative", "Dispersive", "Random"],
        "options_hi": ["संरक्षी", "अर्ध-संरक्षी", "विकीर्ण", "यादृच्छिक"],
        "answer_en": "Semi-conservative",
        "answer_hi": "अर्ध-संरक्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Choose the correctly spelt word:",
        "question_hi": "सही वर्तनी वाला शब्द चुनें:",
        "options_en": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "options_hi": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "answer_en": "Accommodate",
        "answer_hi": "Accommodate",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "'भयानक रस' का स्थायी भाव है:",
        "question_hi": "'भयानक रस' का स्थायी भाव है:",
        "options_en": ["भय", "रति", "क्रोध", "शोक"],
        "options_hi": ["भय", "रति", "क्रोध", "शोक"],
        "answer_en": "भय",
        "answer_hi": "भय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The first Indian to receive Bharat Ratna was:",
        "question_hi": "भारत रत्न प्राप्त करने वाले पहले भारतीय थे:",
        "options_en": ["C. Rajagopalachari", "S. Radhakrishnan", "C.V. Raman", "Jawaharlal Nehru"],
        "options_hi": ["सी. राजगोपालाचारी", "एस. राधाकृष्णन", "सी.वी. रमन", "जवाहरलाल नेहरू"],
        "answer_en": "C. Rajagopalachari",
        "answer_hi": "सी. राजगोपालाचारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "A particle moves in a circle of radius R with constant speed v. Its acceleration is:",
        "question_hi": "एक कण R त्रिज्या के वृत्त में नियत चाल v से गति करता है। इसका त्वरण है:",
        "options_en": ["v²/R towards center", "v²/R away from center", "Zero", "v/R along tangent"],
        "options_hi": ["v²/R केंद्र की ओर", "v²/R केंद्र से दूर", "शून्य", "v/R स्पर्शरेखा के अनुदिश"],
        "answer_en": "v²/R towards center",
        "answer_hi": "v²/R केंद्र की ओर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which of the following is most acidic?",
        "question_hi": "निम्नलिखित में से कौन सबसे अधिक अम्लीय है?",
        "options_en": ["Phenol", "o-Nitrophenol", "m-Nitrophenol", "p-Nitrophenol"],
        "options_hi": ["फीनॉल", "o-नाइट्रोफीनॉल", "m-नाइट्रोफीनॉल", "p-नाइट्रोफीनॉल"],
        "answer_en": "p-Nitrophenol",
        "answer_hi": "p-नाइट्रोफीनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The distance between the lines 3x + 4y = 9 and 6x + 8y = 15 is:",
        "question_hi": "रेखाओं 3x + 4y = 9 और 6x + 8y = 15 के बीच की दूरी है:",
        "options_en": ["3/10", "3/5", "6/5", "9/10"],
        "options_hi": ["3/10", "3/5", "6/5", "9/10"],
        "answer_en": "3/10",
        "answer_hi": "3/10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The process of release of eggs from ovary is called:",
        "question_hi": "अंडाशय से अंडों के मुक्त होने की प्रक्रिया कहलाती है:",
        "options_en": ["Ovulation", "Fertilization", "Implantation", "Gestation"],
        "options_hi": ["ओव्यूलेशन", "निषेचन", "आरोपण", "गर्भावस्था"],
        "answer_en": "Ovulation",
        "answer_hi": "ओव्यूलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Choose the correct meaning of 'To beat around the bush':",
        "question_hi": "'To beat around the bush' का सही अर्थ चुनें:",
        "options_en": ["To avoid the main topic", "To hit bushes", "To be direct", "To be confused"],
        "options_hi": ["मुख्य विषय से बचना", "झाड़ियों को मारना", "सीधा होना", "उलझन में होना"],
        "answer_en": "To avoid the main topic",
        "answer_hi": "मुख्य विषय से बचना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "'विभत्स रस' का स्थायी भाव है:",
        "question_hi": "'विभत्स रस' का स्थायी भाव है:",
        "options_en": ["जुगुप्सा", "रति", "क्रोध", "शोक"],
        "options_hi": ["जुगुप्सा", "रति", "क्रोध", "शोक"],
        "answer_en": "जुगुप्सा",
        "answer_hi": "जुगुप्सा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The first Indian city to have metro rail was:",
        "question_hi": "मेट्रो रेल वाला पहला भारतीय शहर था:",
        "options_en": ["Kolkata", "Delhi", "Mumbai", "Chennai"],
        "options_hi": ["कोलकाता", "दिल्ली", "मुंबई", "चेन्नई"],
        "answer_en": "Kolkata",
        "answer_hi": "कोलकाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "A convex lens of focal length f is cut into two equal parts. The focal length of each part is:",
        "question_hi": "f फोकस दूरी के एक उत्तल लेंस को दो बराबर भागों में काटा जाता है। प्रत्येक भाग की फोकस दूरी है:",
        "options_en": ["f", "2f", "f/2", "Infinite"],
        "options_hi": ["f", "2f", "f/2", "अनंत"],
        "answer_en": "2f",
        "answer_hi": "2f",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "In the periodic table, the element with atomic number 57 belongs to:",
        "question_hi": "आवर्त सारणी में, परमाणु संख्या 57 वाला तत्व संबंधित है:",
        "options_en": ["s-block", "p-block", "d-block", "f-block"],
        "options_hi": ["s-ब्लॉक", "p-ब्लॉक", "d-ब्लॉक", "f-ब्लॉक"],
        "answer_en": "f-block",
        "answer_hi": "f-ब्लॉक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The number of common tangents to two circles that touch externally is:",
        "question_hi": "दो वृत्तों जो बाह्य रूप से स्पर्श करते हैं, की उभयनिष्ठ स्पर्श रेखाओं की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The hormone that regulates blood calcium level is:",
        "question_hi": "वह हार्मोन जो रक्त कैल्शियम स्तर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Parathormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरॉक्सिन", "पैराथॉर्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Choose the correct passive voice: 'They are building a house.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'They are building a house.'",
        "options_en": ["A house is built by them", "A house is being built by them", "A house was built by them", "A house has been built by them"],
        "options_hi": ["A house is built by them", "A house is being built by them", "A house was built by them", "A house has been built by them"],
        "answer_en": "A house is being built by them",
        "answer_hi": "A house is being built by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "'अद्भुत रस' का स्थायी भाव है:",
        "question_hi": "'अद्भुत रस' का स्थायी भाव है:",
        "options_en": ["विस्मय", "रति", "क्रोध", "शोक"],
        "options_hi": ["विस्मय", "रति", "क्रोध", "शोक"],
        "answer_en": "विस्मय",
        "answer_hi": "विस्मय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The first Indian to climb Mount Everest was:",
        "question_hi": "माउंट एवरेस्ट पर चढ़ने वाले पहले भारतीय थे:",
        "options_en": ["Tenzing Norgay", "Bachendri Pal", "Avtar Singh Cheema", "None of these"],
        "options_hi": ["तेंजिंग नोर्गे", "बचेंद्री पाल", "अवतार सिंह चीमा", "इनमें से कोई नहीं"],
        "answer_en": "Tenzing Norgay",
        "answer_hi": "तेंजिंग नोर्गे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "A Carnot engine works between 27°C and 127°C. Its efficiency is:",
        "question_hi": "एक कार्नोट इंजन 27°C और 127°C के बीच कार्य करता है। इसकी दक्षता है:",
        "options_en": ["25%", "50%", "75%", "100%"],
        "options_hi": ["25%", "50%", "75%", "100%"],
        "answer_en": "25%",
        "answer_hi": "25%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The compound that does not undergo cannizzaro reaction is:",
        "question_hi": "वह यौगिक जो कैनिज़ारो अभिक्रिया से नहीं गुजरता है:",
        "options_en": ["Formaldehyde", "Benzaldehyde", "Acetaldehyde", "None of these"],
        "options_hi": ["फॉर्मेल्डिहाइड", "बेंजाल्डिहाइड", "एसीटैल्डिहाइड", "इनमें से कोई नहीं"],
        "answer_en": "Acetaldehyde",
        "answer_hi": "एसीटैल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The equation of the normal to the curve y = x² at (1,1) is:",
        "question_hi": "वक्र y = x² के (1,1) पर अभिलंब का समीकरण है:",
        "options_en": ["x + 2y = 3", "2x + y = 3", "x - 2y = -1", "2x - y = 1"],
        "options_hi": ["x + 2y = 3", "2x + y = 3", "x - 2y = -1", "2x - y = 1"],
        "answer_en": "x + 2y = 3",
        "answer_hi": "x + 2y = 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The process of conversion of glucose to pyruvate is called:",
        "question_hi": "ग्लूकोज से पाइरुवेट में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Glycolysis", "Krebs cycle", "Electron transport", "Fermentation"],
        "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन", "किण्वन"],
        "answer_en": "Glycolysis",
        "answer_hi": "ग्लाइकोलाइसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Choose the correct antonym of 'Courageous':",
        "question_hi": "'Courageous' का सही विलोम चुनें:",
        "options_en": ["Brave", "Fearless", "Cowardly", "Bold"],
        "options_hi": ["बहादुर", "निडर", "कायर", "साहसी"],
        "answer_en": "Cowardly",
        "answer_hi": "कायर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "'शांत रस' का स्थायी भाव है:",
        "question_hi": "'शांत रस' का स्थायी भाव है:",
        "options_en": ["शम", "रति", "क्रोध", "शोक"],
        "options_hi": ["शम", "रति", "क्रोध", "शोक"],
        "answer_en": "शम",
        "answer_hi": "शम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The first Indian to win an Oscar was:",
        "question_hi": "ऑस्कर जीतने वाले पहले भारतीय थे:",
        "options_en": ["Satyajit Ray", "Bhanu Athaiya", "A.R. Rahman", "Gulzar"],
        "options_hi": ["सत्यजित राय", "भानु अथैया", "ए.आर. रहमान", "गुलज़ार"],
        "answer_en": "Bhanu Athaiya",
        "answer_hi": "भानु अथैया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The de Broglie wavelength of an electron accelerated through 100 V is:",
        "question_hi": "100 V से त्वरित इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य है:",
        "options_en": ["1.227 Å", "12.27 Å", "0.1227 Å", "122.7 Å"],
        "options_hi": ["1.227 Å", "12.27 Å", "0.1227 Å", "122.7 Å"],
        "answer_en": "1.227 Å",
        "answer_hi": "1.227 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The compound that gives red color in Lassaigne's test for nitrogen is:",
        "question_hi": "वह यौगिक जो नाइट्रोजन के लिए लासेंज परीक्षण में लाल रंग देता है:",
        "options_en": ["Fe₄[Fe(CN)₆]₃", "Na₂[Fe(CN)₅NO]", "Fe(SCN)₃", "None of these"],
        "options_hi": ["Fe₄[Fe(CN)₆]₃", "Na₂[Fe(CN)₅NO]", "Fe(SCN)₃", "इनमें से कोई नहीं"],
        "answer_en": "Fe₄[Fe(CN)₆]₃",
        "answer_hi": "Fe₄[Fe(CN)₆]₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The angle between the lines x - √3y + 1 = 0 and √3x - y + 2 = 0 is:",
        "question_hi": "रेखाओं x - √3y + 1 = 0 और √3x - y + 2 = 0 के बीच का कोण है:",
        "options_en": ["30°", "45°", "60°", "90°"],
        "options_hi": ["30°", "45°", "60°", "90°"],
        "answer_en": "30°",
        "answer_hi": "30°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The hormone that controls the sleep-wake cycle is:",
        "question_hi": "वह हार्मोन जो सोने-जागने के चक्र को नियंत्रित करता है:",
        "options_en": ["Melatonin", "Serotonin", "Dopamine", "Adrenaline"],
        "options_hi": ["मेलाटोनिन", "सेरोटोनिन", "डोपामाइन", "एड्रेनालाईन"],
        "answer_en": "Melatonin",
        "answer_hi": "मेलाटोनिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "Choose the correct indirect speech: 'He said, \"I am happy.\"'",
        "question_hi": "सही अप्रत्यक्ष कथन चुनें: 'He said, \"I am happy.\"'",
        "options_en": ["He said that he is happy", "He said that he was happy", "He said that I am happy", "He said that I was happy"],
        "options_hi": ["He said that he is happy", "He said that he was happy", "He said that I am happy", "He said that I was happy"],
        "answer_en": "He said that he was happy",
        "answer_hi": "He said that he was happy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "'वात्सल्य रस' का स्थायी भाव है:",
        "question_hi": "'वात्सल्य रस' का स्थायी भाव है:",
        "options_en": ["वात्सल्य", "रति", "क्रोध", "शोक"],
        "options_hi": ["वात्सल्य", "रति", "क्रोध", "शोक"],
        "answer_en": "वात्सल्य",
        "answer_hi": "वात्सल्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The first Indian to win the Miss World title was:",
        "question_hi": "मिस वर्ल्ड खिताब जीतने वाली पहली भारतीय थीं:",
        "options_en": ["Aishwarya Rai", "Sushmita Sen", "Priyanka Chopra", "Reita Faria"],
        "options_hi": ["ऐश्वर्या राय", "सुष्मिता सेन", "प्रियंका चोपड़ा", "रीता फारिया"],
        "answer_en": "Reita Faria",
        "answer_hi": "रीता फारिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The energy stored in a capacitor of capacitance C charged to potential V is:",
        "question_hi": "धारिता C के संधारित्र में संचित ऊर्जा जो विभव V तक आवेशित है:",
        "options_en": ["½CV²", "CV²", "½CV", "CV"],
        "options_hi": ["½CV²", "CV²", "½CV", "CV"],
        "answer_en": "½CV²",
        "answer_hi": "½CV²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The compound that shows geometrical isomerism is:",
        "question_hi": "वह यौगिक जो ज्यामितीय समावयवता दर्शाता है:",
        "options_en": ["Propene", "1-Butene", "2-Butene", "Ethene"],
        "options_hi": ["प्रोपीन", "1-ब्यूटीन", "2-ब्यूटीन", "ईथीन"],
        "answer_en": "2-Butene",
        "answer_hi": "2-ब्यूटीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The distance between the points (1,2,3) and (4,5,6) is:",
        "question_hi": "बिंदुओं (1,2,3) और (4,5,6) के बीच की दूरी है:",
        "options_en": ["3√3", "3√2", "3", "√27"],
        "options_hi": ["3√3", "3√2", "3", "√27"],
        "answer_en": "3√3",
        "answer_hi": "3√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The process of conversion of ammonia to nitrite is called:",
        "question_hi": "अमोनिया को नाइट्राइट में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrification", "Denitrification", "Ammonification", "Nitrogen fixation"],
        "options_hi": ["नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण", "नाइट्रोजन स्थिरीकरण"],
        "answer_en": "Nitrification",
        "answer_hi": "नाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Choose the correct meaning of 'To burn the midnight oil':",
        "question_hi": "'To burn the midnight oil' का सही अर्थ चुनें:",
        "options_en": ["To work late at night", "To burn oil", "To be angry", "To be tired"],
        "options_hi": ["रात में देर तक काम करना", "तेल जलाना", "गुस्सा होना", "थका हुआ होना"],
        "answer_en": "To work late at night",
        "answer_hi": "रात में देर तक काम करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "'भक्ति रस' का स्थायी भाव है:",
        "question_hi": "'भक्ति रस' का स्थायी भाव है:",
        "options_en": ["भक्ति", "रति", "क्रोध", "शोक"],
        "options_hi": ["भक्ति", "रति", "क्रोध", "शोक"],
        "answer_en": "भक्ति",
        "answer_hi": "भक्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The first Indian to win the Booker Prize was:",
        "question_hi": "बुकर पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Arundhati Roy", "Salman Rushdie", "V.S. Naipaul", "Kiran Desai"],
        "options_hi": ["अरुंधति रॉय", "सलमान रश्दी", "वी.एस. नायपॉल", "किरण देसाई"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The half-life of a radioactive substance is 10 days. The time taken for 7/8th of the sample to decay is:",
        "question_hi": "एक रेडियोधर्मी पदार्थ का अर्ध-जीवन 10 दिन है। नमूने के 7/8 भाग के क्षय होने में लगा समय है:",
        "options_en": ["20 days", "30 days", "40 days", "50 days"],
        "options_hi": ["20 दिन", "30 दिन", "40 दिन", "50 दिन"],
        "answer_en": "30 days",
        "answer_hi": "30 दिन",
        "attempted": false,
        "selected": ""
    }
]
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