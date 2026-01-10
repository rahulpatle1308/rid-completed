const questions = [
    // Physics - Optics & Wave Optics (1-15)
    {
        "num": 1,
        "question_en": "In a single slit diffraction experiment, the width of the slit is doubled. The width of the central maximum becomes:",
        "question_hi": "एकल स्लिट विवर्तन प्रयोग में, स्लिट की चौड़ाई दोगुनी कर दी जाती है। केंद्रीय उच्चिष्ट की चौड़ाई हो जाती है:",
        "options_en": ["Double", "Half", "Same", "Four times"],
        "options_hi": ["दोगुनी", "आधी", "समान", "चार गुनी"],
        "answer_en": "Half",
        "answer_hi": "आधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The resolving power of a telescope depends on:",
        "question_hi": "दूरबीन की विभेदन क्षमता निर्भर करती है:",
        "options_en": ["The focal length of objective", "The focal length of eyepiece", "The diameter of objective", "The diameter of eyepiece"],
        "options_hi": ["अभिदृश्यक की फोकस दूरी", "नेत्रिका की फोकस दूरी", "अभिदृश्यक का व्यास", "नेत्रिका का व्यास"],
        "answer_en": "The diameter of objective",
        "answer_hi": "अभिदृश्यक का व्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "When light travels from air to glass, which of the following does not change?",
        "question_hi": "जब प्रकाश वायु से कांच में जाता है, तो निम्नलिखित में से कौन सा नहीं बदलता?",
        "options_en": ["Wavelength", "Frequency", "Velocity", "Amplitude"],
        "options_hi": ["तरंगदैर्ध्य", "आवृत्ति", "वेग", "आयाम"],
        "answer_en": "Frequency",
        "answer_hi": "आवृत्ति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In Young's double slit experiment, if the separation between slits is halved, the fringe width becomes:",
        "question_hi": "यंग के द्वि-स्लिट प्रयोग में, यदि स्लिटों के बीच की दूरी आधी कर दी जाए, तो फ्रिंज चौड़ाई हो जाती है:",
        "options_en": ["Half", "Double", "Same", "Four times"],
        "options_hi": ["आधी", "दोगुनी", "समान", "चार गुनी"],
        "answer_en": "Double",
        "answer_hi": "दोगुनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The phenomenon of polarization demonstrates the:",
        "question_hi": "ध्रुवण की घटना प्रदर्शित करती है:",
        "options_en": ["Particle nature of light", "Wave nature of light", "Transverse nature of light", "Longitudinal nature of light"],
        "options_hi": ["प्रकाश की कण प्रकृति", "प्रकाश की तरंग प्रकृति", "प्रकाश की अनुप्रस्थ प्रकृति", "प्रकाश की अनुदैर्ध्य प्रकृति"],
        "answer_en": "Transverse nature of light",
        "answer_hi": "प्रकाश की अनुप्रस्थ प्रकृति",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - p-Block Elements (16-30)
    {
        "num": 6,
        "question_en": "Which of the following is not a greenhouse gas?",
        "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
        "options_en": ["CO₂", "CH₄", "O₂", "N₂O"],
        "options_hi": ["CO₂", "CH₄", "O₂", "N₂O"],
        "answer_en": "O₂",
        "answer_hi": "O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The most abundant element in the earth's crust is:",
        "question_hi": "पृथ्वी की पपड़ी में सबसे प्रचुर तत्व है:",
        "options_en": ["Oxygen", "Silicon", "Aluminum", "Iron"],
        "options_hi": ["ऑक्सीजन", "सिलिकॉन", "एल्युमिनियम", "आयरन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which of the following is known as 'inert pair effect'?",
        "question_hi": "निम्नलिखित में से किसे 'निष्क्रिय युग्म प्रभाव' के रूप में जाना जाता है?",
        "options_en": ["Reluctance of s-electrons to participate in bonding", "Reluctance of p-electrons to participate in bonding", "Reluctance of d-electrons to participate in bonding", "Reluctance of f-electrons to participate in bonding"],
        "options_hi": ["आबंधन में भाग लेने के लिए s-इलेक्ट्रॉनों की अनिच्छा", "आबंधन में भाग लेने के लिए p-इलेक्ट्रॉनों की अनिच्छा", "आबंधन में भाग लेने के लिए d-इलेक्ट्रॉनों की अनिच्छा", "आबंधन में भाग लेने के लिए f-इलेक्ट्रॉनों की अनिच्छा"],
        "answer_en": "Reluctance of s-electrons to participate in bonding",
        "answer_hi": "आबंधन में भाग लेने के लिए s-इलेक्ट्रॉनों की अनिच्छा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The compound used in smoke screens is:",
        "question_hi": "धूम्र पर्दे में प्रयुक्त यौगिक है:",
        "options_en": ["PCl₃", "PCl₅", "PH₃", "P₄O₁₀"],
        "options_hi": ["PCl₃", "PCl₅", "PH₃", "P₄O₁₀"],
        "answer_en": "PCl₅",
        "answer_hi": "PCl₅",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which noble gas is used in filling balloons for meteorological observations?",
        "question_hi": "मौसम विज्ञान अवलोकन के लिए गुब्बारे भरने में किस नोबल गैस का उपयोग किया जाता है?",
        "options_en": ["Helium", "Neon", "Argon", "Krypton"],
        "options_hi": ["हीलियम", "नियॉन", "आर्गन", "क्रिप्टॉन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Three Dimensional Geometry (31-45)
    {
        "num": 11,
        "question_en": "The distance between the points (1, 2, 3) and (4, 5, 6) is:",
        "question_hi": "बिंदुओं (1, 2, 3) और (4, 5, 6) के बीच की दूरी है:",
        "options_en": ["3√2", "3√3", "3", "√27"],
        "options_hi": ["3√2", "3√3", "3", "√27"],
        "answer_en": "3√3",
        "answer_hi": "3√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The direction ratios of the line joining (1, 2, 3) and (4, 5, 6) are:",
        "question_hi": "(1, 2, 3) और (4, 5, 6) को मिलाने वाली रेखा के दिक् अनुपात हैं:",
        "options_en": ["1, 2, 3", "4, 5, 6", "3, 3, 3", "1, 1, 1"],
        "options_hi": ["1, 2, 3", "4, 5, 6", "3, 3, 3", "1, 1, 1"],
        "answer_en": "3, 3, 3",
        "answer_hi": "3, 3, 3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The angle between the lines with direction ratios (1, 2, 3) and (4, 5, 6) is:",
        "question_hi": "दिक् अनुपात (1, 2, 3) और (4, 5, 6) वाली रेखाओं के बीच का कोण है:",
        "options_en": ["0°", "30°", "45°", "60°"],
        "options_hi": ["0°", "30°", "45°", "60°"],
        "answer_en": "45°",
        "answer_hi": "45°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The equation of the plane passing through (1, 2, 3) and perpendicular to the line with direction ratios (2, 3, 4) is:",
        "question_hi": "(1, 2, 3) से गुजरने वाले और दिक् अनुपात (2, 3, 4) वाली रेखा के लंबवत समतल का समीकरण है:",
        "options_en": ["2x + 3y + 4z = 20", "2x + 3y + 4z = 10", "x + y + z = 6", "2x + 3y + 4z = 0"],
        "options_hi": ["2x + 3y + 4z = 20", "2x + 3y + 4z = 10", "x + y + z = 6", "2x + 3y + 4z = 0"],
        "answer_en": "2x + 3y + 4z = 20",
        "answer_hi": "2x + 3y + 4z = 20",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The distance of the point (1, 2, 3) from the plane 2x + 2y + z = 5 is:",
        "question_hi": "बिंदु (1, 2, 3) से समतल 2x + 2y + z = 5 की दूरी है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },

    // Biology - Ecology & Environment (46-60)
    {
        "num": 16,
        "question_en": "The maximum concentration of DDT in a food chain is found in:",
        "question_hi": "खाद्य श्रृंखला में DDT की अधिकतम सांद्रता पाई जाती है:",
        "options_en": ["Producers", "Primary consumers", "Secondary consumers", "Tertiary consumers"],
        "options_hi": ["उत्पादक", "प्राथमिक उपभोक्ता", "द्वितीयक उपभोक्ता", "तृतीयक उपभोक्ता"],
        "answer_en": "Tertiary consumers",
        "answer_hi": "तृतीयक उपभोक्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The phenomenon of increase in concentration of harmful substances at successive trophic levels is called:",
        "question_hi": "क्रमिक पोषी स्तरों पर हानिकारक पदार्थों की सांद्रता बढ़ने की घटना कहलाती है:",
        "options_en": ["Eutrophication", "Biomagnification", "Bioaccumulation", "Biodegradation"],
        "options_hi": ["यूट्रोफिकेशन", "बायोमैग्निफिकेशन", "बायोएक्यूमुलेशन", "बायोडिग्रेडेशन"],
        "answer_en": "Biomagnification",
        "answer_hi": "बायोमैग्निफिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The Montreal Protocol is associated with:",
        "question_hi": "मॉन्ट्रियल प्रोटोकॉल संबंधित है:",
        "options_en": ["Greenhouse gases", "Ozone depletion", "Biodiversity", "Desertification"],
        "options_hi": ["ग्रीनहाउस गैसें", "ओजोन क्षरण", "जैव विविधता", "मरुस्थलीकरण"],
        "answer_en": "Ozone depletion",
        "answer_hi": "ओजोन क्षरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The primary source of energy in an ecosystem is:",
        "question_hi": "एक पारिस्थितिकी तंत्र में ऊर्जा का प्राथमिक स्रोत है:",
        "options_en": ["ATP", "Glucose", "Sunlight", "Heat"],
        "options_hi": ["ATP", "ग्लूकोज", "सूर्य का प्रकाश", "ऊष्मा"],
        "answer_en": "Sunlight",
        "answer_hi": "सूर्य का प्रकाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The process of nitrogen fixation is carried out by:",
        "question_hi": "नाइट्रोजन स्थिरीकरण की प्रक्रिया किसके द्वारा की जाती है:",
        "options_en": ["Plants", "Animals", "Bacteria", "Fungi"],
        "options_hi": ["पौधे", "जानवर", "जीवाणु", "कवक"],
        "answer_en": "Bacteria",
        "answer_hi": "जीवाणु",
        "attempted": false,
        "selected": ""
    },

    // English - Reading Comprehension & Vocabulary (61-75)
    {
        "num": 21,
        "question_en": "Choose the word that is closest in meaning to 'Ubiquitous':",
        "question_hi": "'Ubiquitous' के अर्थ के सबसे करीब शब्द चुनें:",
        "options_en": ["Rare", "Everywhere", "Nowhere", "Unique"],
        "options_hi": ["दुर्लभ", "सर्वव्यापी", "कहीं नहीं", "अद्वितीय"],
        "answer_en": "Everywhere",
        "answer_hi": "सर्वव्यापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Identify the correct meaning of 'Philanthropist':",
        "question_hi": "'Philanthropist' के सही अर्थ की पहचान करें:",
        "options_en": ["One who hates mankind", "One who loves mankind", "One who fears mankind", "One who ignores mankind"],
        "options_hi": ["जो मानव जाति से घृणा करता है", "जो मानव जाति से प्रेम करता है", "जो मानव जाति से डरता है", "जो मानव जाति को अनदेखा करता है"],
        "answer_en": "One who loves mankind",
        "answer_hi": "जो मानव जाति से प्रेम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Choose the appropriate word: 'His ___ remarks offended everyone in the audience.'",
        "question_hi": "उपयुक्त शब्द चुनें: 'His ___ remarks offended everyone in the audience.'",
        "options_en": ["Complimentary", "Derogatory", "Praising", "Appreciative"],
        "options_hi": ["प्रशंसात्मक", "अपमानजनक", "प्रशंसा करने वाला", "सराहनात्मक"],
        "answer_en": "Derogatory",
        "answer_hi": "अपमानजनक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Identify the synonym of 'Benevolent':",
        "question_hi": "'Benevolent' का पर्यायवाची पहचानें:",
        "options_en": ["Malevolent", "Kind", "Cruel", "Selfish"],
        "options_hi": ["दुर्भावनापूर्ण", "दयालु", "क्रूर", "स्वार्थी"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Choose the antonym of 'Ephemeral':",
        "question_hi": "'Ephemeral' का विलोम चुनें:",
        "options_en": ["Temporary", "Transient", "Permanent", "Brief"],
        "options_hi": ["अस्थायी", "क्षणिक", "स्थायी", "संक्षिप्त"],
        "answer_en": "Permanent",
        "answer_hi": "स्थायी",
        "attempted": false,
        "selected": ""
    },

    // Hindi - काव्यांग और अलंकार (76-90)
    {
        "num": 26,
        "question_en": "'अनुप्रास अलंकार' का उदाहरण है:",
        "question_hi": "'अनुप्रास अलंकार' का उदाहरण है:",
        "options_en": ["चारु चंद्र की चंचल किरणें", "रघुपति राघव राजा राम", "कहत कबीर सुनो भाई साधो", "मैया मैं तो चंद्र खिलौना लैहों"],
        "options_hi": ["चारु चंद्र की चंचल किरणें", "रघुपति राघव राजा राम", "कहत कबीर सुनो भाई साधो", "मैया मैं तो चंद्र खिलौना लैहों"],
        "answer_en": "चारु चंद्र की चंचल किरणें",
        "answer_hi": "चारु चंद्र की चंचल किरणें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'यमक अलंकार' का उदाहरण है:",
        "question_hi": "'यमक अलंकार' का उदाहरण है:",
        "options_en": ["कनक कनक ते सौ गुनी, मादकता अधिकाय", "चारु चंद्र की चंचल किरणें", "रघुपति राघव राजा राम", "मैया मैं तो चंद्र खिलौना लैहों"],
        "options_hi": ["कनक कनक ते सौ गुनी, मादकता अधिकाय", "चारु चंद्र की चंचल किरणें", "रघुपति राघव राजा राम", "मैया मैं तो चंद्र खिलौना लैहों"],
        "answer_en": "कनक कनक ते सौ गुनी, मादकता अधिकाय",
        "answer_hi": "कनक कनक ते सौ गुनी, मादकता अधिकाय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "'रूपक अलंकार' का उदाहरण है:",
        "question_hi": "'रूपक अलंकार' का उदाहरण है:",
        "options_en": ["चरण सरोज पखारन लगा", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "रघुपति राघव राजा राम"],
        "options_hi": ["चरण सरोज पखारन लगा", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "रघुपति राघव राजा राम"],
        "answer_en": "चरण सरोज पखारन लगा",
        "answer_hi": "चरण सरोज पखारन लगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'उत्प्रेक्षा अलंकार' का उदाहरण है:",
        "question_hi": "'उत्प्रेक्षा अलंकार' का उदाहरण है:",
        "options_en": ["मुख मानो चंद्रमा है", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "रघुपति राघव राजा राम"],
        "options_hi": ["मुख मानो चंद्रमा है", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "रघुपति राघव राजा राम"],
        "answer_en": "मुख मानो चंद्रमा है",
        "answer_hi": "मुख मानो चंद्रमा है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "'श्लेष अलंकार' का उदाहरण है:",
        "question_hi": "'श्लेष अलंकार' का उदाहरण है:",
        "options_en": ["रहिमन पानी राखिए, बिन पानी सब सून", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख मानो चंद्रमा है"],
        "options_hi": ["रहिमन पानी राखिए, बिन पानी सब सून", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख मानो चंद्रमा है"],
        "answer_en": "रहिमन पानी राखिए, बिन पानी सब सून",
        "answer_hi": "रहिमन पानी राखिए, बिन पानी सब सून",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Indian History & Culture (91-100)
    {
        "num": 31,
        "question_en": "The first Battle of Panipat was fought in:",
        "question_hi": "पानीपत की पहली लड़ाई लड़ी गई थी:",
        "options_en": ["1526", "1556", "1761", "1857"],
        "options_hi": ["1526", "1556", "1761", "1857"],
        "answer_en": "1526",
        "answer_hi": "1526",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The founder of the Mauryan Empire was:",
        "question_hi": "मौर्य साम्राज्य के संस्थापक थे:",
        "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samudragupta"],
        "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "समुद्रगुप्त"],
        "answer_en": "Chandragupta Maurya",
        "answer_hi": "चंद्रगुप्त मौर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The Indian National Congress was founded in:",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना हुई थी:",
        "options_en": ["1885", "1905", "1920", "1947"],
        "options_hi": ["1885", "1905", "1920", "1947"],
        "answer_en": "1885",
        "answer_hi": "1885",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The first President of India was:",
        "question_hi": "भारत के पहले राष्ट्रपति थे:",
        "options_en": ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "V.V. Giri"],
        "options_hi": ["राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "वी.वी. गिरि"],
        "answer_en": "Rajendra Prasad",
        "answer_hi": "राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The 'Dandi March' was associated with:",
        "question_hi": "'दांडी मार्च' संबंधित था:",
        "options_en": ["Civil Disobedience Movement", "Non-Cooperation Movement", "Quit India Movement", "Swadeshi Movement"],
        "options_hi": ["सविनय अवज्ञा आंदोलन", "असहयोग आंदोलन", "भारत छोड़ो आंदोलन", "स्वदेशी आंदोलन"],
        "answer_en": "Civil Disobedience Movement",
        "answer_hi": "सविनय अवज्ञा आंदोलन",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (36-100)
    {
        "num": 36,
        "question_en": "The dimensional formula of angular momentum is:",
        "question_hi": "कोणीय संवेग का विमीय सूत्र है:",
        "options_en": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "options_hi": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "answer_en": "ML²T⁻¹",
        "answer_hi": "ML²T⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The IUPAC name of CH₃-CH₂-CH₂-CHO is:",
        "question_hi": "CH₃-CH₂-CH₂-CHO का IUPAC नाम है:",
        "options_en": ["Propanal", "Butanal", "Pentanal", "Butanone"],
        "options_hi": ["प्रोपेनल", "ब्यूटेनल", "पेंटेनल", "ब्यूटेनोन"],
        "answer_en": "Butanal",
        "answer_hi": "ब्यूटेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The value of ∫(x² dx) is:",
        "question_hi": "∫(x² dx) का मान है:",
        "options_en": ["x³/3 + C", "x²/2 + C", "x³ + C", "2x + C"],
        "options_hi": ["x³/3 + C", "x²/2 + C", "x³ + C", "2x + C"],
        "answer_en": "x³/3 + C",
        "answer_hi": "x³/3 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The enzyme that converts maltose to glucose is:",
        "question_hi": "माल्टोज को ग्लूकोज में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Maltase", "Amylase", "Invertase", "Zymase"],
        "options_hi": ["माल्टेज", "एमाइलेज", "इन्वर्टेज", "जाइमेज"],
        "answer_en": "Maltase",
        "answer_hi": "माल्टेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Choose the correct antonym of 'Magnanimous':",
        "question_hi": "'Magnanimous' का सही विलोम चुनें:",
        "options_en": ["Generous", "Selfish", "Kind", "Benevolent"],
        "options_hi": ["उदार", "स्वार्थी", "दयालु", "परोपकारी"],
        "answer_en": "Selfish",
        "answer_hi": "स्वार्थी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "'उपमा अलंकार' का उदाहरण है:",
        "question_hi": "'उपमा अलंकार' का उदाहरण है:",
        "options_en": ["मुख चंद्रमा सा सुंदर है", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "रघुपति राघव राजा राम"],
        "options_hi": ["मुख चंद्रमा सा सुंदर है", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "रघुपति राघव राजा राम"],
        "answer_en": "मुख चंद्रमा सा सुंदर है",
        "answer_hi": "मुख चंद्रमा सा सुंदर है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The first woman Prime Minister of India was:",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री थीं:",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The critical angle for water-air interface is:",
        "question_hi": "जल-वायु अंतरापृष्ठ के लिए क्रांतिक कोण है:",
        "options_en": ["42°", "48.75°", "90°", "30°"],
        "options_hi": ["42°", "48.75°", "90°", "30°"],
        "answer_en": "48.75°",
        "answer_hi": "48.75°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The compound that gives positive test with Fehling's solution is:",
        "question_hi": "वह यौगिक जो फेहलिंग विलयन के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Formaldehyde", "Acetone", "Ethanol", "Acetic acid"],
        "options_hi": ["फॉर्मेल्डिहाइड", "एसीटोन", "एथनॉल", "एसिटिक अम्ल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The value of ∫(e^x dx) is:",
        "question_hi": "∫(e^x dx) का मान है:",
        "options_en": ["e^x + C", "xe^x + C", "e^x/x + C", "log|e^x| + C"],
        "options_hi": ["e^x + C", "xe^x + C", "e^x/x + C", "log|e^x| + C"],
        "answer_en": "e^x + C",
        "answer_hi": "e^x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The hormone that stimulates ovulation is:",
        "question_hi": "वह हार्मोन जो ओव्यूलेशन को उत्तेजित करता है:",
        "options_en": ["LH", "FSH", "Estrogen", "Progesterone"],
        "options_hi": ["LH", "FSH", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
        "answer_en": "LH",
        "answer_hi": "LH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["The team are playing well", "The team is playing well", "The team were playing well", "The team have playing well"],
        "options_hi": ["The team are playing well", "The team is playing well", "The team were playing well", "The team have playing well"],
        "answer_en": "The team is playing well",
        "answer_hi": "The team is playing well",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "'अतिशयोक्ति अलंकार' का उदाहरण है:",
        "question_hi": "'अतिशयोक्ति अलंकार' का उदाहरण है:",
        "options_en": ["हनुमान की पूँछ में लंकिनी जल जाती", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "options_hi": ["हनुमान की पूँछ में लंकिनी जल जाती", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "answer_en": "हनुमान की पूँछ में लंकिनी जल जाती",
        "answer_hi": "हनुमान की पूँछ में लंकिनी जल जाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The first Indian to win Nobel Prize in Physics was:",
        "question_hi": "भौतिकी में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["C.V. Raman", "S. Chandrasekhar", "H.J. Bhabha", "S.N. Bose"],
        "options_hi": ["सी.वी. रमन", "एस. चंद्रशेखर", "एच.जे. भाभा", "एस.एन. बोस"],
        "answer_en": "C.V. Raman",
        "answer_hi": "सी.वी. रमन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The force between two parallel wires carrying currents in the same direction is:",
        "question_hi": "समान दिशा में धारा वहन करने वाले दो समानांतर तारों के बीच बल है:",
        "options_en": ["Attractive", "Repulsive", "Zero", "Infinite"],
        "options_hi": ["आकर्षक", "प्रतिकर्षी", "शून्य", "अनंत"],
        "answer_en": "Attractive",
        "answer_hi": "आकर्षक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The IUPAC name of [Co(NH₃)₆]Cl₃ is:",
        "question_hi": "[Co(NH₃)₆]Cl₃ का IUPAC नाम है:",
        "options_en": ["Hexaamminecobalt(III) chloride", "Cobalt hexaammine chloride", "Amminecobalt chloride", "Cobalt(III) hexaammine chloride"],
        "options_hi": ["हेक्साएमीनकोबाल्ट(III) क्लोराइड", "कोबाल्ट हेक्साएमीन क्लोराइड", "एमीनकोबाल्ट क्लोराइड", "कोबाल्ट(III) हेक्साएमीन क्लोराइड"],
        "answer_en": "Hexaamminecobalt(III) chloride",
        "answer_hi": "हेक्साएमीनकोबाल्ट(III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The value of ∫(cos²x dx) is:",
        "question_hi": "∫(cos²x dx) का मान है:",
        "options_en": ["(x/2) + (sin2x/4) + C", "(x/2) - (sin2x/4) + C", "x + (sin2x/2) + C", "(x/2) + (sinx/2) + C"],
        "options_hi": ["(x/2) + (sin2x/4) + C", "(x/2) - (sin2x/4) + C", "x + (sin2x/2) + C", "(x/2) + (sinx/2) + C"],
        "answer_en": "(x/2) + (sin2x/4) + C",
        "answer_hi": "(x/2) + (sin2x/4) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The process of conversion of glucose to pyruvate is called:",
        "question_hi": "ग्लूकोज के पाइरुवेट में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Glycolysis", "Krebs cycle", "Electron transport", "Fermentation"],
        "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन", "किण्वन"],
        "answer_en": "Glycolysis",
        "answer_hi": "ग्लाइकोलाइसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Choose the correct preposition: 'He is good ___ mathematics.'",
        "question_hi": "सही संबंधसूचक अव्यय चुनें: 'He is good ___ mathematics.'",
        "options_en": ["at", "in", "on", "for"],
        "options_hi": ["at", "in", "on", "for"],
        "answer_en": "at",
        "answer_hi": "at",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'वक्रोक्ति अलंकार' का उदाहरण है:",
        "question_hi": "'वक्रोक्ति अलंकार' का उदाहरण है:",
        "options_en": ["तुम कहो तो विश्वास करें", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "options_hi": ["तुम कहो तो विश्वास करें", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "answer_en": "तुम कहो तो विश्वास करें",
        "answer_hi": "तुम कहो तो विश्वास करें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The first Indian to win Olympic individual gold medal was:",
        "question_hi": "ओलंपिक व्यक्तिगत स्वर्ण पदक जीतने वाले पहले भारतीय थे:",
        "options_en": ["Abhinav Bindra", "K.D. Jadhav", "Milkha Singh", "P.T. Usha"],
        "options_hi": ["अभिनव बिंद्रा", "के.डी. जाधव", "मिल्खा सिंह", "पी.टी. उषा"],
        "answer_en": "Abhinav Bindra",
        "answer_hi": "अभिनव बिंद्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The magnetic field at the center of a circular coil is:",
        "question_hi": "एक वृत्ताकार कुंडली के केंद्र पर चुंबकीय क्षेत्र है:",
        "options_en": ["μ₀I/2r", "μ₀I/2πr", "μ₀I/r", "2μ₀I/r"],
        "options_hi": ["μ₀I/2r", "μ₀I/2πr", "μ₀I/r", "2μ₀I/r"],
        "answer_en": "μ₀I/2r",
        "answer_hi": "μ₀I/2r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The compound that shows optical isomerism is:",
        "question_hi": "वह यौगिक जो प्रकाशीय समावयवता दर्शाता है:",
        "options_en": ["Lactic acid", "Acetic acid", "Formic acid", "Oxalic acid"],
        "options_hi": ["लैक्टिक अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल", "ऑक्सैलिक अम्ल"],
        "answer_en": "Lactic acid",
        "answer_hi": "लैक्टिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The value of ∫(sec²x dx) is:",
        "question_hi": "∫(sec²x dx) का मान है:",
        "options_en": ["tanx + C", "secx + C", "cotx + C", "cosecx + C"],
        "options_hi": ["tanx + C", "secx + C", "cotx + C", "cosecx + C"],
        "answer_en": "tanx + C",
        "answer_hi": "tanx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The hormone that regulates calcium metabolism is:",
        "question_hi": "वह हार्मोन जो कैल्शियम चयापचय को नियंत्रित करता है:",
        "options_en": ["Parathormone", "Thyroxine", "Insulin", "Adrenaline"],
        "options_hi": ["पैराथॉर्मोन", "थायरोक्सिन", "इंसुलिन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Identify the error: 'One of the boy is absent today.'",
        "question_hi": "त्रुटि पहचानें: 'One of the boy is absent today.'",
        "options_en": ["One of", "the boy", "is absent", "today"],
        "options_hi": ["One of", "the boy", "is absent", "today"],
        "answer_en": "the boy",
        "answer_hi": "the boy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "'संदेह अलंकार' का उदाहरण है:",
        "question_hi": "'संदेह अलंकार' का उदाहरण है:",
        "options_en": ["यह चंद्र है या चंद्रमुख", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "options_hi": ["यह चंद्र है या चंद्रमुख", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "answer_en": "यह चंद्र है या चंद्रमुख",
        "answer_hi": "यह चंद्र है या चंद्रमुख",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The first Indian satellite was:",
        "question_hi": "पहला भारतीय उपग्रह था:",
        "options_en": ["Aryabhata", "Bhaskara", "Rohini", "INSAT"],
        "options_hi": ["आर्यभट्ट", "भास्कर", "रोहिणी", "इन्सैट"],
        "answer_en": "Aryabhata",
        "answer_hi": "आर्यभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The work done in cyclic process is:",
        "question_hi": "चक्रीय प्रक्रिया में किया गया कार्य है:",
        "options_en": ["Always zero", "Always positive", "Always negative", "May be positive or negative"],
        "options_hi": ["सदैव शून्य", "सदैव धनात्मक", "सदैव ऋणात्मक", "धनात्मक या ऋणात्मक हो सकता है"],
        "answer_en": "May be positive or negative",
        "answer_hi": "धनात्मक या ऋणात्मक हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The IUPAC name of CH₃-CO-CH₂-CH₃ is:",
        "question_hi": "CH₃-CO-CH₂-CH₃ का IUPAC नाम है:",
        "options_en": ["Butanone", "Pentanone", "Butanal", "Pentanal"],
        "options_hi": ["ब्यूटेनोन", "पेंटेनोन", "ब्यूटेनल", "पेंटेनल"],
        "answer_en": "Butanone",
        "answer_hi": "ब्यूटेनोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The value of ∫(1/x dx) is:",
        "question_hi": "∫(1/x dx) का मान है:",
        "options_en": ["log|x| + C", "x + C", "1/x² + C", "log|x²| + C"],
        "options_hi": ["log|x| + C", "x + C", "1/x² + C", "log|x²| + C"],
        "answer_en": "log|x| + C",
        "answer_hi": "log|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The enzyme that converts proteins to peptides is:",
        "question_hi": "प्रोटीन को पेप्टाइड्स में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Pepsin", "Amylase", "Lipase", "Maltase"],
        "options_hi": ["पेप्सिन", "एमाइलेज", "लाइपेज", "माल्टेज"],
        "answer_en": "Pepsin",
        "answer_hi": "पेप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Choose the correct synonym of 'Voracious':",
        "question_hi": "'Voracious' का सही पर्यायवाची चुनें:",
        "options_en": ["Hungry", "Full", "Satisfied", "Tired"],
        "options_hi": ["भूखा", "पूर्ण", "संतुष्ट", "थका हुआ"],
        "answer_en": "Hungry",
        "answer_hi": "भूखा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "'विरोधाभास अलंकार' का उदाहरण है:",
        "question_hi": "'विरोधाभास अलंकार' का उदाहरण है:",
        "options_en": ["बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "options_hi": ["बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "answer_en": "बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर",
        "answer_hi": "बड़ा हुआ तो क्या हुआ, जैसे पेड़ खजूर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The first Indian woman to climb Mount Everest was:",
        "question_hi": "माउंट एवरेस्ट पर चढ़ने वाली पहली भारतीय महिला थीं:",
        "options_en": ["Bachendri Pal", "Santosh Yadav", "Arunima Sinha", "Premlata Agarwal"],
        "options_hi": ["बचेंद्री पाल", "संतोष यादव", "अरुणिमा सिन्हा", "प्रेमलता अग्रवाल"],
        "answer_en": "Bachendri Pal",
        "answer_hi": "बचेंद्री पाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The force on a charged particle in magnetic field is zero when:",
        "question_hi": "चुंबकीय क्षेत्र में आवेशित कण पर बल शून्य होता है जब:",
        "options_en": ["v is parallel to B", "v is perpendicular to B", "v is at 45° to B", "Always zero"],
        "options_hi": ["v, B के समानांतर है", "v, B के लंबवत है", "v, B से 45° पर है", "सदैव शून्य"],
        "answer_en": "v is parallel to B",
        "answer_hi": "v, B के समानांतर है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The compound that gives positive test with Tollen's reagent is:",
        "question_hi": "वह यौगिक जो टोलेन अभिकर्मक के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Formaldehyde", "Acetone", "Ethanol", "Acetic acid"],
        "options_hi": ["फॉर्मेल्डिहाइड", "एसीटोन", "एथनॉल", "एसिटिक अम्ल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of ∫(sinx dx) is:",
        "question_hi": "∫(sinx dx) का मान है:",
        "options_en": ["-cosx + C", "cosx + C", "sinx + C", "-sinx + C"],
        "options_hi": ["-cosx + C", "cosx + C", "sinx + C", "-sinx + C"],
        "answer_en": "-cosx + C",
        "answer_hi": "-cosx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The hormone that regulates sleep-wake cycle is:",
        "question_hi": "वह हार्मोन जो नींद-जागने के चक्र को नियंत्रित करता है:",
        "options_en": ["Melatonin", "Insulin", "Thyroxine", "Adrenaline"],
        "options_hi": ["मेलाटोनिन", "इंसुलिन", "थायरोक्सिन", "एड्रेनालाईन"],
        "answer_en": "Melatonin",
        "answer_hi": "मेलाटोनिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["The data is correct", "The data are correct", "The datas are correct", "The datas is correct"],
        "options_hi": ["The data is correct", "The data are correct", "The datas are correct", "The datas is correct"],
        "answer_en": "The data is correct",
        "answer_hi": "The data is correct",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "'दृष्टान्त अलंकार' का उदाहरण है:",
        "question_hi": "'दृष्टान्त अलंकार' का उदाहरण है:",
        "options_en": ["जैसे तिल में तेल है, जैसे चकमक में आग", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "options_hi": ["जैसे तिल में तेल है, जैसे चकमक में आग", "चारु चंद्र की चंचल किरणें", "कनक कनक ते सौ गुनी", "मुख चंद्रमा सा सुंदर है"],
        "answer_en": "जैसे तिल में तेल है, जैसे चकमक में आग",
        "answer_hi": "जैसे तिल में तेल है, जैसे चकमक में आग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The first Indian to win Booker Prize was:",
        "question_hi": "बुकर पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Arundhati Roy", "Salman Rushdie", "V.S. Naipaul", "Kiran Desai"],
        "options_hi": ["अरुंधति रॉय", "सलमान रश्दी", "वी.एस. नायपॉल", "किरण देसाई"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The magnetic field inside a solenoid is:",
        "question_hi": "एक परिनालिका के अंदर चुंबकीय क्षेत्र है:",
        "options_en": ["Uniform", "Non-uniform", "Zero", "Radial"],
        "options_hi": ["एकसमान", "असमान", "शून्य", "रेडियल"],
        "answer_en": "Uniform",
        "answer_hi": "एकसमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The compound that undergoes Cannizzaro reaction is:",
        "question_hi": "वह यौगिक जो कैनिज़ारो अभिक्रिया से गुजरता है:",
        "options_en": ["Formaldehyde", "Acetaldehyde", "Acetone", "Benzaldehyde"],
        "options_hi": ["फॉर्मेल्डिहाइड", "एसीटैल्डिहाइड", "एसीटोन", "बेंजाल्डिहाइड"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The value of ∫(0 to π/2) sinx dx is:",
        "question_hi": "∫(0 से π/2) sinx dx का मान है:",
        "options_en": ["0", "1", "2", "π/2"],
        "options_hi": ["0", "1", "2", "π/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The site of photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण का स्थल है:",
        "options_en": ["Chloroplast", "Mitochondria", "Nucleus", "Ribosome"],
        "options_hi": ["क्लोरोप्लास्ट", "माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "'महाकाव्य' का उदाहरण है:",
        "question_hi": "'महाकाव्य' का उदाहरण है:",
        "options_en": ["रामचरितमानस", "साकेत", "कामायनी", "उपरोक्त सभी"],
        "options_hi": ["रामचरितमानस", "साकेत", "कामायनी", "उपरोक्त सभी"],
        "answer_en": "उपरोक्त सभी",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "The force between two charges is F. If both charges are doubled, new force is:",
        "question_hi": "दो आवेशों के बीच बल F है। यदि दोनों आवेश दोगुने कर दिए जाएं, नया बल है:",
        "options_en": ["F", "2F", "4F", "8F"],
        "options_hi": ["F", "2F", "4F", "8F"],
        "answer_en": "4F",
        "answer_hi": "4F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
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
        "num": 87,
        "question_en": "The value of ∫(a^x dx) is:",
        "question_hi": "∫(a^x dx) का मान है:",
        "options_en": ["a^x + C", "a^x/loga + C", "xa^x + C", "a^x/x + C"],
        "options_hi": ["a^x + C", "a^x/loga + C", "xa^x + C", "a^x/x + C"],
        "answer_en": "a^x/loga + C",
        "answer_hi": "a^x/loga + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The hormone that regulates blood sugar level is:",
        "question_hi": "वह हार्मोन जो रक्त शर्करा स्तर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "एड्रेनालाईन", "एस्ट्रोजन"],
        "answer_en": "Insulin",
        "answer_hi": "इंसुलिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["Neither Ram nor Shyam have come", "Neither Ram nor Shyam has come", "Neither Ram or Shyam has come", "Neither Ram or Shyam have come"],
        "options_hi": ["Neither Ram nor Shyam have come", "Neither Ram nor Shyam has come", "Neither Ram or Shyam has come", "Neither Ram or Shyam have come"],
        "answer_en": "Neither Ram nor Shyam has come",
        "answer_hi": "Neither Ram nor Shyam has come",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "'खंडकाव्य' का उदाहरण है:",
        "question_hi": "'खंडकाव्य' का उदाहरण है:",
        "options_en": ["साकेत", "रश्मिरथी", "कामायनी", "उपरोक्त सभी"],
        "options_hi": ["साकेत", "रश्मिरथी", "कामायनी", "उपरोक्त सभी"],
        "answer_en": "रश्मिरथी",
        "answer_hi": "रश्मिरथी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The first Indian woman to win Miss World title was:",
        "question_hi": "मिस वर्ल्ड खिताब जीतने वाली पहली भारतीय महिला थीं:",
        "options_en": ["Reita Faria", "Aishwarya Rai", "Sushmita Sen", "Priyanka Chopra"],
        "options_hi": ["रीता फारिया", "ऐश्वर्या राय", "सुष्मिता सेन", "प्रियंका चोपड़ा"],
        "answer_en": "Reita Faria",
        "answer_hi": "रीता फारिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The unit of electric potential is:",
        "question_hi": "विद्युत विभव की इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The number of π bonds in acetylene is:",
        "question_hi": "एसिटिलीन में π बंधों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The value of ∫(1/(1 + x²) dx) is:",
        "question_hi": "∫(1/(1 + x²) dx) का मान है:",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The site of protein synthesis is:",
        "question_hi": "प्रोटीन संश्लेषण का स्थल है:",
        "options_en": ["Ribosome", "Mitochondria", "Nucleus", "Golgi apparatus"],
        "options_hi": ["राइबोसोम", "माइटोकॉन्ड्रिया", "केंद्रक", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "Choose the correct synonym of 'Ubiquitous':",
        "question_hi": "'Ubiquitous' का सही पर्यायवाची चुनें:",
        "options_en": ["Everywhere", "Nowhere", "Rare", "Unique"],
        "options_hi": ["सर्वव्यापी", "कहीं नहीं", "दुर्लभ", "अद्वितीय"],
        "answer_en": "Everywhere",
        "answer_hi": "सर्वव्यापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "'गीतिकाव्य' का उदाहरण है:",
        "question_hi": "'गीतिकाव्य' का उदाहरण है:",
        "options_en": ["आँसू", "यामा", "लहर", "उपरोक्त सभी"],
        "options_hi": ["आँसू", "यामा", "लहर", "उपरोक्त सभी"],
        "answer_en": "उपरोक्त सभी",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The first Indian to win Nobel Prize in Literature was:",
        "question_hi": "साहित्य में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Rabindranath Tagore", "Rudyard Kipling", "V.S. Naipaul", "Pearl S. Buck"],
        "options_hi": ["रबींद्रनाथ टैगोर", "रुडयार्ड किपलिंग", "वी.एस. नायपॉल", "पर्ल एस. बक"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The critical angle for diamond-air interface is:",
        "question_hi": "हीरा-वायु अंतरापृष्ठ के लिए क्रांतिक कोण है:",
        "options_en": ["24.4°", "42°", "48.75°", "90°"],
        "options_hi": ["24.4°", "42°", "48.75°", "90°"],
        "answer_en": "24.4°",
        "answer_hi": "24.4°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The number of structural isomers of butane is:",
        "question_hi": "ब्यूटेन के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
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