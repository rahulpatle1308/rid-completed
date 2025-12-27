const questions = [
    // Physics - Electromagnetic Waves & Communication (1-20)
    {
        "num": 1,
        "question_en": "Which electromagnetic wave has the highest frequency?",
        "question_hi": "किस विद्युत चुम्बकीय तरंग की आवृत्ति सबसे अधिक होती है?",
        "options_en": ["Radio waves", "Microwaves", "Gamma rays", "X-rays"],
        "options_hi": ["रेडियो तरंगें", "माइक्रोवेव", "गामा किरणें", "एक्स-किरणें"],
        "answer_en": "Gamma rays",
        "answer_hi": "गामा किरणें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The phenomenon of bending of light around obstacles is called:",
        "question_hi": "बाधाओं के चारों ओर प्रकाश के मुड़ने की घटना कहलाती है:",
        "options_en": ["Reflection", "Refraction", "Diffraction", "Dispersion"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विवर्तन", "विक्षेपण"],
        "answer_en": "Diffraction",
        "answer_hi": "विवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "In amplitude modulation, the carrier wave's _____ is varied.",
        "question_hi": "आयाम मॉडुलन में, वाहक तरंग का _____ परिवर्तित किया जाता है।",
        "options_en": ["Frequency", "Amplitude", "Phase", "Wavelength"],
        "options_hi": ["आवृत्ति", "आयाम", "कला", "तरंगदैर्ध्य"],
        "answer_en": "Amplitude",
        "answer_hi": "आयाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The speed of electromagnetic waves in vacuum is:",
        "question_hi": "निर्वात में विद्युत चुम्बकीय तरंगों की गति है:",
        "options_en": ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"],
        "options_hi": ["3 × 10⁶ m/s", "3 × 10⁸ m/s", "3 × 10¹⁰ m/s", "3 × 10¹² m/s"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A transformer works on the principle of:",
        "question_hi": "ट्रांसफॉर्मर किस सिद्धांत पर कार्य करता है:",
        "options_en": ["Self induction", "Mutual induction", "Electromagnetic induction", "All of these"],
        "options_hi": ["स्वप्रेरण", "पारस्परिक प्रेरण", "विद्युत चुम्बकीय प्रेरण", "उपरोक्त सभी"],
        "answer_en": "Mutual induction",
        "answer_hi": "पारस्परिक प्रेरण",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Polymers & Chemistry in Everyday Life (6-40)
    {
        "num": 6,
        "question_en": "Which of the following is a natural polymer?",
        "question_hi": "निम्नलिखित में से कौन सा एक प्राकृतिक बहुलक है?",
        "options_en": ["Polythene", "Nylon", "Cellulose", "PVC"],
        "options_hi": ["पॉलिथीन", "नायलॉन", "सेल्यूलोज", "PVC"],
        "answer_en": "Cellulose",
        "answer_hi": "सेल्यूलोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Aspirin is chemically known as:",
        "question_hi": "एस्पिरिन रासायनिक रूप से जानी जाती है:",
        "options_en": ["Acetylsalicylic acid", "Salicylic acid", "Ascorbic acid", "Benzoic acid"],
        "options_hi": ["एसिटाइलसैलिसिलिक अम्ल", "सैलिसिलिक अम्ल", "एस्कॉर्बिक अम्ल", "बेंजोइक अम्ल"],
        "answer_en": "Acetylsalicylic acid",
        "answer_hi": "एसिटाइलसैलिसिलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The monomer of Teflon is:",
        "question_hi": "टेफ्लॉन का एकलक है:",
        "options_en": ["Ethylene", "Propylene", "Tetrafluoroethylene", "Vinyl chloride"],
        "options_hi": ["एथिलीन", "प्रोपिलीन", "टेट्राफ्लुओरोएथिलीन", "विनाइल क्लोराइड"],
        "answer_en": "Tetrafluoroethylene",
        "answer_hi": "टेट्राफ्लुओरोएथिलीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which of the following is an antiseptic?",
        "question_hi": "निम्नलिखित में से कौन सा एक रोगाणुरोधक है?",
        "options_en": ["Chloramphenicol", "Bithional", "Paracetamol", "Aspirin"],
        "options_hi": ["क्लोरैम्फेनिकॉल", "बाइथियोनॉल", "पैरासिटामोल", "एस्पिरिन"],
        "answer_en": "Bithional",
        "answer_hi": "बाइथियोनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Nylon-6 is obtained from:",
        "question_hi": "नायलॉन-6 प्राप्त किया जाता है:",
        "options_en": ["Adipic acid and hexamethylene diamine", "Caprolactam", "Terephthalic acid and ethylene glycol", "Phenol and formaldehyde"],
        "options_hi": ["एडिपिक अम्ल और हेक्सामेथिलीन डाइएमीन", "कैप्रोलैक्टम", "टेरेफ्थैलिक अम्ल और एथिलीन ग्लाइकॉल", "फीनॉल और फॉर्मेल्डिहाइड"],
        "answer_en": "Caprolactam",
        "answer_hi": "कैप्रोलैक्टम",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Vectors & 3D Geometry (11-60)
    {
        "num": 11,
        "question_en": "The magnitude of vector a = 3i + 4j is:",
        "question_hi": "सदिश a = 3i + 4j का परिमाण है:",
        "options_en": ["5", "7", "12", "25"],
        "options_hi": ["5", "7", "12", "25"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The direction cosines of x-axis are:",
        "question_hi": "x-अक्ष की दिक् कोसाइन हैं:",
        "options_en": ["(1,0,0)", "(0,1,0)", "(0,0,1)", "(1,1,1)"],
        "options_hi": ["(1,0,0)", "(0,1,0)", "(0,0,1)", "(1,1,1)"],
        "answer_en": "(1,0,0)",
        "answer_hi": "(1,0,0)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "If a = 2i + 3j and b = i - j, then a · b is:",
        "question_hi": "यदि a = 2i + 3j और b = i - j, तो a · b है:",
        "options_en": ["-1", "1", "5", "6"],
        "options_hi": ["-1", "1", "5", "6"],
        "answer_en": "-1",
        "answer_hi": "-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The distance between points (1,2,3) and (4,5,6) is:",
        "question_hi": "बिंदुओं (1,2,3) और (4,5,6) के बीच की दूरी है:",
        "options_en": ["3", "3√3", "√27", "9"],
        "options_hi": ["3", "3√3", "√27", "9"],
        "answer_en": "3√3",
        "answer_hi": "3√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The equation of plane parallel to xy-plane is:",
        "question_hi": "xy-तल के समानांतर समतल का समीकरण है:",
        "options_en": ["x = constant", "y = constant", "z = constant", "x + y = constant"],
        "options_hi": ["x = constant", "y = constant", "z = constant", "x + y = constant"],
        "answer_en": "z = constant",
        "answer_hi": "z = constant",
        "attempted": false,
        "selected": ""
    },

    // Biology - Ecology & Environment (16-80)
    {
        "num": 16,
        "question_en": "The ultimate source of energy for all ecosystems is:",
        "question_hi": "सभी पारिस्थितिकी तंत्रों के लिए ऊर्जा का अंतिम स्रोत है:",
        "options_en": ["Plants", "Sun", "Water", "Soil"],
        "options_hi": ["पौधे", "सूर्य", "जल", "मिट्टी"],
        "answer_en": "Sun",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Greenhouse effect is caused by:",
        "question_hi": "ग्रीनहाउस प्रभाव किसके कारण होता है:",
        "options_en": ["CO₂", "O₂", "N₂", "H₂"],
        "options_hi": ["CO₂", "O₂", "N₂", "H₂"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The first organisms to colonize a barren land are called:",
        "question_hi": "बंजर भूमि पर बसने वाले पहले जीव कहलाते हैं:",
        "options_en": ["Pioneer species", "Climax species", "Primary consumers", "Secondary consumers"],
        "options_hi": ["अग्रणी प्रजातियाँ", "चरम प्रजातियाँ", "प्राथमिक उपभोक्ता", "द्वितीयक उपभोक्ता"],
        "answer_en": "Pioneer species",
        "answer_hi": "अग्रणी प्रजातियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Ozone layer depletion is caused by:",
        "question_hi": "ओजोन परत का क्षरण किसके कारण होता है:",
        "options_en": ["CFCs", "CO₂", "SO₂", "NO₂"],
        "options_hi": ["CFCs", "CO₂", "SO₂", "NO₂"],
        "answer_en": "CFCs",
        "answer_hi": "CFCs",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The process of nutrient enrichment of water bodies is called:",
        "question_hi": "जल निकायों के पोषक तत्व संवर्धन की प्रक्रिया कहलाती है:",
        "options_en": ["Eutrophication", "Biomagnification", "Bioaccumulation", "Nitrogen fixation"],
        "options_hi": ["यूट्रोफिकेशन", "बायोमैग्निफिकेशन", "बायोएक्यूमुलेशन", "नाइट्रोजन स्थिरीकरण"],
        "answer_en": "Eutrophication",
        "answer_hi": "यूट्रोफिकेशन",
        "attempted": false,
        "selected": ""
    },

    // English - Comprehension & Writing Skills (21-85)
    {
        "num": 21,
        "question_en": "Choose the correct synonym of 'Meticulous':",
        "question_hi": "'Meticulous' का सही पर्यायवाची चुनें:",
        "options_en": ["Careless", "Detailed", "Quick", "Simple"],
        "options_hi": ["लापरवाह", "विस्तृत", "त्वरित", "सरल"],
        "answer_en": "Detailed",
        "answer_hi": "विस्तृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Identify the type of clause: 'What he said was true.'",
        "question_hi": "उपवाक्य का प्रकार पहचानें: 'What he said was true.'",
        "options_en": ["Adjective clause", "Adverb clause", "Noun clause", "Main clause"],
        "options_hi": ["विशेषण उपवाक्य", "क्रिया विशेषण उपवाक्य", "संज्ञा उपवाक्य", "मुख्य उपवाक्य"],
        "answer_en": "Noun clause",
        "answer_hi": "संज्ञा उपवाक्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["Neither of the boys are coming", "Neither of the boys is coming", "Neither of the boys were coming", "Neither of the boys have come"],
        "options_hi": ["Neither of the boys are coming", "Neither of the boys is coming", "Neither of the boys were coming", "Neither of the boys have come"],
        "answer_en": "Neither of the boys is coming",
        "answer_hi": "Neither of the boys is coming",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The antonym of 'Benevolent' is:",
        "question_hi": "'Benevolent' का विलोम है:",
        "options_en": ["Malevolent", "Kind", "Generous", "Helpful"],
        "options_hi": ["दुर्भावनापूर्ण", "दयालु", "उदार", "सहायक"],
        "answer_en": "Malevolent",
        "answer_hi": "दुर्भावनापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Identify the figure of speech: 'The stars danced playfully in the moonlit sky.'",
        "question_hi": "अलंकार पहचानें: 'The stars danced playfully in the moonlit sky.'",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },

    // Hindi - काव्य और अलंकार (26-90)
    {
        "num": 26,
        "question_en": "'चरण कमल बंदौ हरि राई' में कौन सा अलंकार है?",
        "question_hi": "'चरण कमल बंदौ हरि राई' में कौन सा अलंकार है?",
        "options_en": ["उपमा", "रूपक", "यमक", "अनुप्रास"],
        "options_hi": ["उपमा", "रूपक", "यमक", "अनुप्रास"],
        "answer_en": "रूपक",
        "answer_hi": "रूपक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'महादेवी वर्मा' किस युग की कवयित्री हैं?",
        "question_hi": "'महादेवी वर्मा' किस युग की कवयित्री हैं?",
        "options_en": ["भक्ति युग", "रीति युग", "छायावाद युग", "प्रगतिवाद युग"],
        "options_hi": ["भक्ति युग", "रीति युग", "छायावाद युग", "प्रगतिवाद युग"],
        "answer_en": "छायावाद युग",
        "answer_hi": "छायावाद युग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "'कनक-कनक ते सौ गुनी, मादकता अधिकाय' में कौन सा अलंकार है?",
        "question_hi": "'कनक-कनक ते सौ गुनी, मादकता अधिकाय' में कौन सा अलंकार है?",
        "options_en": ["यमक", "श्लेष", "अनुप्रास", "उपमा"],
        "options_hi": ["यमक", "श्लेष", "अनुप्रास", "उपमा"],
        "answer_en": "यमक",
        "answer_hi": "यमक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'प्रेमचंद' का मूल नाम था:",
        "question_hi": "'प्रेमचंद' का मूल नाम था:",
        "options_en": ["धनपत राय", "मुंशी प्रेमचंद", "नवाब राय", "धनपत राय श्रीवास्तव"],
        "options_hi": ["धनपत राय", "मुंशी प्रेमचंद", "नवाब राय", "धनपत राय श्रीवास्तव"],
        "answer_en": "धनपत राय श्रीवास्तव",
        "answer_hi": "धनपत राय श्रीवास्तव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "'रस' की परिभाषा किसने दी: 'आस्वाद्यविशेषः स रसः'?",
        "question_hi": "'रस' की परिभाषा किसने दी: 'आस्वाद्यविशेषः स रसः'?",
        "options_en": ["भरत मुनि", "विश्वनाथ", "पंडितराज जगन्नाथ", "भामह"],
        "options_hi": ["भरत मुनि", "विश्वनाथ", "पंडितराज जगन्नाथ", "भामह"],
        "answer_en": "विश्वनाथ",
        "answer_hi": "विश्वनाथ",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Indian Constitution & Politics (31-100)
    {
        "num": 31,
        "question_en": "The Constitution of India was adopted on:",
        "question_hi": "भारत का संविधान अपनाया गया था:",
        "options_en": ["26 January 1950", "26 November 1949", "15 August 1947", "26 January 1949"],
        "options_hi": ["26 जनवरी 1950", "26 नवंबर 1949", "15 अगस्त 1947", "26 जनवरी 1949"],
        "answer_en": "26 November 1949",
        "answer_hi": "26 नवंबर 1949",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The President of India is elected by:",
        "question_hi": "भारत के राष्ट्रपति का चुनाव किया जाता है:",
        "options_en": ["Direct election", "Parliament", "Electoral College", "State Legislatures"],
        "options_hi": ["प्रत्यक्ष चुनाव", "संसद", "निर्वाचक मंडल", "राज्य विधानसभाएं"],
        "answer_en": "Electoral College",
        "answer_hi": "निर्वाचक मंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The fundamental rights in Indian Constitution are inspired by:",
        "question_hi": "भारतीय संविधान में मौलिक अधिकार प्रेरित हैं:",
        "options_en": ["British Constitution", "US Constitution", "French Constitution", "Canadian Constitution"],
        "options_hi": ["ब्रिटिश संविधान", "अमेरिकी संविधान", "फ्रेंच संविधान", "कनाडाई संविधान"],
        "answer_en": "US Constitution",
        "answer_hi": "अमेरिकी संविधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The first woman Prime Minister of India was:",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री थीं:",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Vijaya Lakshmi Pandit", "Annie Besant"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "विजयलक्ष्मी पंडित", "एनी बेसेंट"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The number of schedules in Indian Constitution is:",
        "question_hi": "भारतीय संविधान में अनुसूचियों की संख्या है:",
        "options_en": ["8", "10", "12", "14"],
        "options_hi": ["8", "10", "12", "14"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },

    // Additional Physics - Semiconductor Devices (36-45)
    {
        "num": 36,
        "question_en": "In a p-n junction diode, the current flows easily in:",
        "question_hi": "p-n संधि डायोड में, धारा आसानी से प्रवाहित होती है:",
        "options_en": ["Forward bias", "Reverse bias", "Both directions", "No direction"],
        "options_hi": ["अग्र अभिनति", "पश्च अभिनति", "दोनों दिशाओं में", "कोई दिशा नहीं"],
        "answer_en": "Forward bias",
        "answer_hi": "अग्र अभिनति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The energy gap in silicon at room temperature is about:",
        "question_hi": "कमरे के तापमान पर सिलिकॉन में ऊर्जा अंतराल लगभग है:",
        "options_en": ["0.7 eV", "1.1 eV", "1.5 eV", "2.0 eV"],
        "options_hi": ["0.7 eV", "1.1 eV", "1.5 eV", "2.0 eV"],
        "answer_en": "1.1 eV",
        "answer_hi": "1.1 eV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "A transistor has:",
        "question_hi": "एक ट्रांजिस्टर में होते हैं:",
        "options_en": ["Two p-n junctions", "One p-n junction", "Three p-n junctions", "No p-n junction"],
        "options_hi": ["दो p-n संधियाँ", "एक p-n संधि", "तीन p-n संधियाँ", "कोई p-n संधि नहीं"],
        "answer_en": "Two p-n junctions",
        "answer_hi": "दो p-n संधियाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "In common emitter configuration, the input impedance is:",
        "question_hi": "उभयनिष्ठ उत्सर्जक विन्यास में, निवेश प्रतिबाधा है:",
        "options_en": ["Low", "High", "Very high", "Infinite"],
        "options_hi": ["कम", "उच्च", "बहुत उच्च", "अनंत"],
        "answer_en": "Low",
        "answer_hi": "कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "LED works on the principle of:",
        "question_hi": "LED किस सिद्धांत पर कार्य करता है:",
        "options_en": ["Electroluminescence", "Photoelectric effect", "Thermionic emission", "Radioactivity"],
        "options_hi": ["विद्युत्-प्रकाश", "प्रकाश विद्युत प्रभाव", "तापायनिक उत्सर्जन", "रेडियोधर्मिता"],
        "answer_en": "Electroluminescence",
        "answer_hi": "विद्युत्-प्रकाश",
        "attempted": false,
        "selected": ""
    },

    // Additional Chemistry - Surface Chemistry (41-50)
    {
        "num": 41,
        "question_en": "The process of attracting and retaining molecules on surface is called:",
        "question_hi": "सतह पर अणुओं को आकर्षित और बनाए रखने की प्रक्रिया कहलाती है:",
        "options_en": ["Absorption", "Adsorption", "Sorption", "Desorption"],
        "options_hi": ["अवशोषण", "अधिशोषण", "शोषण", "विशोषण"],
        "answer_en": "Adsorption",
        "answer_hi": "अधिशोषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which of the following is an example of positive catalyst?",
        "question_hi": "निम्नलिखित में से कौन सा धनात्मक उत्प्रेरक का उदाहरण है?",
        "options_en": ["Glycerol", "Lead tetraethyl", "Manganese dioxide", "Phosphoric acid"],
        "options_hi": ["ग्लिसरीन", "लेड टेट्राएथिल", "मैंगनीज डाइऑक्साइड", "फॉस्फोरिक अम्ल"],
        "answer_en": "Manganese dioxide",
        "answer_hi": "मैंगनीज डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Tyndall effect is shown by:",
        "question_hi": "टिंडल प्रभाव दिखाया जाता है:",
        "options_en": ["True solutions", "Colloidal solutions", "Suspensions", "Both B and C"],
        "options_hi": ["वास्तविक विलयन", "कोलॉइडी विलयन", "निलंबन", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The process of converting precipitate into colloidal solution is called:",
        "question_hi": "अवक्षेप को कोलॉइडी विलयन में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Peptization", "Coagulation", "Dialysis", "Electrophoresis"],
        "options_hi": ["पेप्टीकरण", "स्कंदन", "डायलिसिस", "इलेक्ट्रोफोरेसिस"],
        "answer_en": "Peptization",
        "answer_hi": "पेप्टीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Hardy-Schulze rule is related to:",
        "question_hi": "हार्डी-शुल्ज़ नियम संबंधित है:",
        "options_en": ["Electrolysis", "Coagulation", "Catalysis", "Adsorption"],
        "options_hi": ["विद्युत्-अपघटन", "स्कंदन", "उत्प्रेरण", "अधिशोषण"],
        "answer_en": "Coagulation",
        "answer_hi": "स्कंदन",
        "attempted": false,
        "selected": ""
    },

    // Additional Mathematics - Matrices & Determinants (46-55)
    {
        "num": 46,
        "question_en": "If A is a square matrix such that A² = A, then A is called:",
        "question_hi": "यदि A एक वर्ग आव्यूह इस प्रकार है कि A² = A, तो A कहलाता है:",
        "options_en": ["Idempotent matrix", "Involutory matrix", "Nilpotent matrix", "Orthogonal matrix"],
        "options_hi": ["वर्गसम आव्यूह", "व्युत्क्रमणीय आव्यूह", "शून्यांक आव्यूह", "लांबिक आव्यूह"],
        "answer_en": "Idempotent matrix",
        "answer_hi": "वर्गसम आव्यूह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The value of determinant |1 2; 3 4| is:",
        "question_hi": "सारणिक |1 2; 3 4| का मान है:",
        "options_en": ["-2", "2", "10", "-10"],
        "options_hi": ["-2", "2", "10", "-10"],
        "answer_en": "-2",
        "answer_hi": "-2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "If A is a symmetric matrix, then A' is equal to:",
        "question_hi": "यदि A एक सममित आव्यूह है, तो A' बराबर है:",
        "options_en": ["A", "-A", "A⁻¹", "I"],
        "options_hi": ["A", "-A", "A⁻¹", "I"],
        "answer_en": "A",
        "answer_hi": "A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The inverse of matrix A exists if:",
        "question_hi": "आव्यूह A का व्युत्क्रम मौजूद होता है यदि:",
        "options_en": ["|A| = 0", "|A| ≠ 0", "A is square", "Both B and C"],
        "options_hi": ["|A| = 0", "|A| ≠ 0", "A वर्गाकार है", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "If A and B are matrices such that AB = BA, then they are called:",
        "question_hi": "यदि A और B आव्यूह इस प्रकार हैं कि AB = BA, तो उन्हें कहा जाता है:",
        "options_en": ["Symmetric", "Commutative", "Associative", "Distributive"],
        "options_hi": ["सममित", "क्रमविनिमेय", "साहचर्य", "वितरणात्मक"],
        "answer_en": "Commutative",
        "answer_hi": "क्रमविनिमेय",
        "attempted": false,
        "selected": ""
    },

    // Additional Biology - Biotechnology (51-60)
    {
        "num": 51,
        "question_en": "The process of introducing DNA into host cells is called:",
        "question_hi": "मेजबान कोशिकाओं में DNA प्रवेश कराने की प्रक्रिया कहलाती है:",
        "options_en": ["Transformation", "Transduction", "Conjugation", "Transfection"],
        "options_hi": ["रूपांतरण", "ट्रांसडक्शन", "संयुग्मन", "ट्रांसफेक्शन"],
        "answer_en": "Transformation",
        "answer_hi": "रूपांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Restriction enzymes are used in:",
        "question_hi": "प्रतिबंधन एंजाइम प्रयुक्त होते हैं:",
        "options_en": ["DNA replication", "DNA cutting", "Protein synthesis", "RNA synthesis"],
        "options_hi": ["DNA प्रतिकृति", "DNA काटने", "प्रोटीन संश्लेषण", "RNA संश्लेषण"],
        "answer_en": "DNA cutting",
        "answer_hi": "DNA काटने",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The first transgenic plant was:",
        "question_hi": "पहला ट्रांसजेनिक पौधा था:",
        "options_en": ["Golden rice", "Flavr Savr tomato", "Bt cotton", "Tobacco"],
        "options_hi": ["गोल्डन राइस", "फ्लेवर सेवर टमाटर", "Bt कपास", "तंबाकू"],
        "answer_en": "Tobacco",
        "answer_hi": "तंबाकू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "PCR technique was invented by:",
        "question_hi": "PCR तकनीक का आविष्कार किया गया था:",
        "options_en": ["Kary Mullis", "James Watson", "Francis Crick", "Alec Jeffreys"],
        "options_hi": ["कैरी मुलिस", "जेम्स वाटसन", "फ्रांसिस क्रिक", "एलेक जेफ्रीस"],
        "answer_en": "Kary Mullis",
        "answer_hi": "कैरी मुलिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The vector used in human genome project was:",
        "question_hi": "मानव जीनोम परियोजना में प्रयुक्त वेक्टर था:",
        "options_en": ["Plasmid", "BAC", "YAC", "Both B and C"],
        "options_hi": ["प्लाज्मिड", "BAC", "YAC", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (56-100)
    {
        "num": 56,
        "question_en": "The SI unit of electric conductivity is:",
        "question_hi": "विद्युत चालकता की SI इकाई है:",
        "options_en": ["Siemens per meter", "Ohm meter", "Mho", "Siemens"],
        "options_hi": ["सीमेंस प्रति मीटर", "ओम मीटर", "महो", "सीमेंस"],
        "answer_en": "Siemens per meter",
        "answer_hi": "सीमेंस प्रति मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The compound used in anti-malarial drug is:",
        "question_hi": "एंटी-मलेरिया दवा में प्रयुक्त यौगिक है:",
        "options_en": ["Chloroquine", "Aspirin", "Paracetamol", "Penicillin"],
        "options_hi": ["क्लोरोक्वीन", "एस्पिरिन", "पैरासिटामोल", "पेनिसिलिन"],
        "answer_en": "Chloroquine",
        "answer_hi": "क्लोरोक्वीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The value of ∫(x² dx) from 0 to 2 is:",
        "question_hi": "0 से 2 तक ∫(x² dx) का मान है:",
        "options_en": ["2", "8/3", "4", "16/3"],
        "options_hi": ["2", "8/3", "4", "16/3"],
        "answer_en": "8/3",
        "answer_hi": "8/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The hormone that stimulates gastric secretion is:",
        "question_hi": "वह हार्मोन जो गैस्ट्रिक स्राव को उत्तेजित करता है:",
        "options_en": ["Gastrin", "Secretin", "Insulin", "Glucagon"],
        "options_hi": ["गैस्ट्रिन", "सेक्रेटिन", "इंसुलिन", "ग्लूकागन"],
        "answer_en": "Gastrin",
        "answer_hi": "गैस्ट्रिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The device used to measure potential difference is:",
        "question_hi": "विभवांतर मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Ammeter", "Voltmeter", "Galvanometer", "Ohmmeter"],
        "options_hi": ["एमीटर", "वोल्टमीटर", "गैल्वेनोमीटर", "ओममीटर"],
        "answer_en": "Voltmeter",
        "answer_hi": "वोल्टमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The coordination number in hexagonal close packing is:",
        "question_hi": "षट्कोणीय निविड संकुलन में उपसहसंयोजन संख्या है:",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The value of d/dx(sin²x) is:",
        "question_hi": "d/dx(sin²x) का मान है:",
        "options_en": ["2sinx", "2cosx", "sin2x", "cos2x"],
        "options_hi": ["2sinx", "2cosx", "sin2x", "cos2x"],
        "answer_en": "sin2x",
        "answer_hi": "sin2x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The process of formation of urine is called:",
        "question_hi": "मूत्र के निर्माण की प्रक्रिया कहलाती है:",
        "options_en": ["Filtration", "Secretion", "Excretion", "All of these"],
        "options_hi": ["छानना", "स्राव", "उत्सर्जन", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The SI unit of luminous flux is:",
        "question_hi": "ज्योति फ्लक्स की SI इकाई है:",
        "options_en": ["Lumen", "Candela", "Lux", "Watt"],
        "options_hi": ["लुमेन", "कैंडेला", "लक्स", "वाट"],
        "answer_en": "Lumen",
        "answer_hi": "लुमेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The compound that shows optical isomerism is:",
        "question_hi": "वह यौगिक जो प्रकाशिक समावयवता दर्शाता है:",
        "options_en": ["Lactic acid", "Acetic acid", "Formic acid", "Oxalic acid"],
        "options_hi": ["लैक्टिक अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल", "ऑक्सैलिक अम्ल"],
        "answer_en": "Lactic acid",
        "answer_hi": "लैक्टिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The value of ∫(e^(3x) dx) is:",
        "question_hi": "∫(e^(3x) dx) का मान है:",
        "options_en": ["e^(3x) + C", "3e^(3x) + C", "(1/3)e^(3x) + C", "e^(x) + C"],
        "options_hi": ["e^(3x) + C", "3e^(3x) + C", "(1/3)e^(3x) + C", "e^(x) + C"],
        "answer_en": "(1/3)e^(3x) + C",
        "answer_hi": "(1/3)e^(3x) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The process of cell division in bacteria is called:",
        "question_hi": "जीवाणुओं में कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
        "options_hi": ["माइटोसिस", "मियोसिस", "द्विखंडन", "कलिकायन"],
        "answer_en": "Binary fission",
        "answer_hi": "द्विखंडन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The principle behind working of refrigerator is based on:",
        "question_hi": "रेफ्रिजरेटर के कार्य करने का सिद्धांत आधारित है:",
        "options_en": ["Joule-Thomson effect", "Thermoelectric effect", "Vapor compression", "Adsorption"],
        "options_hi": ["जूल-थॉमसन प्रभाव", "तापविद्युत प्रभाव", "वाष्प संपीड़न", "अधिशोषण"],
        "answer_en": "Vapor compression",
        "answer_hi": "वाष्प संपीड़न",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The IUPAC name of CH₃CH₂NH₂ is:",
        "question_hi": "CH₃CH₂NH₂ का IUPAC नाम है:",
        "options_en": ["Ethanamine", "Methanamine", "Aminoethane", "Ethylamine"],
        "options_hi": ["एथेनामाइन", "मेथेनामाइन", "एमिनोएथेन", "एथिलएमीन"],
        "answer_en": "Ethanamine",
        "answer_hi": "एथेनामाइन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The value of ∫(1/(x lnx) dx) is:",
        "question_hi": "∫(1/(x lnx) dx) का मान है:",
        "options_en": ["ln(lnx) + C", "lnx + C", "1/(lnx) + C", "x lnx + C"],
        "options_hi": ["ln(lnx) + C", "lnx + C", "1/(lnx) + C", "x lnx + C"],
        "answer_en": "ln(lnx) + C",
        "answer_hi": "ln(lnx) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The site of aerobic respiration in cell is:",
        "question_hi": "कोशिका में ऑक्सी श्वसन का स्थल है:",
        "options_en": ["Cytoplasm", "Mitochondria", "Nucleus", "Ribosome"],
        "options_hi": ["कोशिका द्रव्य", "माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The force experienced by a charged particle in magnetic field is given by:",
        "question_hi": "चुंबकीय क्षेत्र में आवेशित कण द्वारा अनुभव किया गया बल दिया जाता है:",
        "options_en": ["F = qE", "F = q(v × B)", "F = ma", "F = G(m₁m₂/r²)"],
        "options_hi": ["F = qE", "F = q(v × B)", "F = ma", "F = G(m₁m₂/r²)"],
        "answer_en": "F = q(v × B)",
        "answer_hi": "F = q(v × B)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The compound that gives positive test with FeCl₃ is:",
        "question_hi": "वह यौगिक जो FeCl₃ के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Phenol", "Ethanol", "Acetone", "Acetic acid"],
        "options_hi": ["फीनॉल", "एथनॉल", "एसीटोन", "एसिटिक अम्ल"],
        "answer_en": "Phenol",
        "answer_hi": "फीनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The value of ∫(√x dx) is:",
        "question_hi": "∫(√x dx) का मान है:",
        "options_en": ["(2/3)x^(3/2) + C", "(1/2)x^(1/2) + C", "2√x + C", "(3/2)x^(3/2) + C"],
        "options_hi": ["(2/3)x^(3/2) + C", "(1/2)x^(1/2) + C", "2√x + C", "(3/2)x^(3/2) + C"],
        "answer_en": "(2/3)x^(3/2) + C",
        "answer_hi": "(2/3)x^(3/2) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The hormone that regulates water balance in body is:",
        "question_hi": "वह हार्मोन जो शरीर में जल संतुलन को नियंत्रित करता है:",
        "options_en": ["ADH", "ACTH", "TSH", "FSH"],
        "options_hi": ["ADH", "ACTH", "TSH", "FSH"],
        "answer_en": "ADH",
        "answer_hi": "ADH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The unit of inductance is:",
        "question_hi": "प्रेरकत्व की इकाई है:",
        "options_en": ["Weber", "Tesla", "Henry", "Farad"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "फैराड"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The number of π bonds in benzene is:",
        "question_hi": "बेंजीन में π बंधों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The value of ∫(cos²x dx) is:",
        "question_hi": "∫(cos²x dx) का मान है:",
        "options_en": ["(x/2) + (sin2x/4) + C", "(x/2) - (sin2x/4) + C", "sinx + C", "cosx + C"],
        "options_hi": ["(x/2) + (sin2x/4) + C", "(x/2) - (sin2x/4) + C", "sinx + C", "cosx + C"],
        "answer_en": "(x/2) + (sin2x/4) + C",
        "answer_hi": "(x/2) + (sin2x/4) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The enzyme that digests proteins in small intestine is:",
        "question_hi": "छोटी आंत में प्रोटीनों को पचाने वाला एंजाइम है:",
        "options_en": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
        "options_hi": ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेज"],
        "answer_en": "Trypsin",
        "answer_hi": "ट्रिप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The resistance of a conductor depends on:",
        "question_hi": "एक चालक का प्रतिरोध निर्भर करता है:",
        "options_en": ["Length", "Area", "Temperature", "All of these"],
        "options_hi": ["लंबाई", "क्षेत्रफल", "तापमान", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The compound that shows resonance is:",
        "question_hi": "वह यौगिक जो अनुनाद दर्शाता है:",
        "options_en": ["Benzene", "Ethane", "Methane", "Acetylene"],
        "options_hi": ["बेंजीन", "ईथेन", "मीथेन", "एसिटिलीन"],
        "answer_en": "Benzene",
        "answer_hi": "बेंजीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "The site of transcription in cell is:",
        "question_hi": "कोशिका में प्रतिलेखन का स्थल है:",
        "options_en": ["Nucleus", "Cytoplasm", "Ribosome", "Mitochondria"],
        "options_hi": ["केंद्रक", "कोशिका द्रव्य", "राइबोसोम", "माइटोकॉन्ड्रिया"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The force between two parallel wires carrying current is:",
        "question_hi": "धारावाही दो समानांतर तारों के बीच बल है:",
        "options_en": ["Attractive if currents are in same direction", "Repulsive if currents are in same direction", "Always attractive", "Always repulsive"],
        "options_hi": ["आकर्षक यदि धाराएं समान दिशा में हैं", "प्रतिकर्षक यदि धाराएं समान दिशा में हैं", "सदैव आकर्षक", "सदैव प्रतिकर्षक"],
        "answer_en": "Attractive if currents are in same direction",
        "answer_hi": "आकर्षक यदि धाराएं समान दिशा में हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The compound that gives positive test with Tollen's reagent is:",
        "question_hi": "वह यौगिक जो टोलेन अभिकर्मक के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Aldehyde", "Ketone", "Alcohol", "Acid"],
        "options_hi": ["एल्डिहाइड", "कीटोन", "अल्कोहल", "अम्ल"],
        "answer_en": "Aldehyde",
        "answer_hi": "एल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The value of ∫(secx tanx dx) is:",
        "question_hi": "∫(secx tanx dx) का मान है:",
        "options_en": ["secx + C", "tanx + C", "cosecx + C", "cotx + C"],
        "options_hi": ["secx + C", "tanx + C", "cosecx + C", "cotx + C"],
        "answer_en": "secx + C",
        "answer_hi": "secx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The hormone that stimulates milk production is:",
        "question_hi": "वह हार्मोन जो दूध उत्पादन को उत्तेजित करता है:",
        "options_en": ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
        "options_hi": ["ऑक्सीटोसिन", "प्रोलैक्टिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
        "answer_en": "Prolactin",
        "answer_hi": "प्रोलैक्टिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The unit of magnetic flux is:",
        "question_hi": "चुंबकीय फ्लक्स की इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
        "question_en": "The value of ∫(1/√(1 - x²) dx) is:",
        "question_hi": "∫(1/√(1 - x²) dx) का मान है:",
        "options_en": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "sec⁻¹x + C"],
        "options_hi": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "sec⁻¹x + C"],
        "answer_en": "sin⁻¹x + C",
        "answer_hi": "sin⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The site of dark reaction in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में अप्रकाशिक अभिक्रिया का स्थल है:",
        "options_en": ["Grana", "Stroma", "Thylakoid", "Cristae"],
        "options_hi": ["ग्रैना", "स्ट्रोमा", "थाइलाकोइड", "क्रिस्टी"],
        "answer_en": "Stroma",
        "answer_hi": "स्ट्रोमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The process of conversion of N₂ to NH₃ in nitrogen cycle is called:",
        "question_hi": "नाइट्रोजन चक्र में N₂ के NH₃ में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrogen fixation",
        "answer_hi": "नाइट्रोजन स्थिरीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The magnetic field inside a toroid is:",
        "question_hi": "टोरॉइड के अंदर चुंबकीय क्षेत्र है:",
        "options_en": ["Uniform", "Non-uniform", "Zero", "Radial"],
        "options_hi": ["एकसमान", "असमान", "शून्य", "रेडियल"],
        "answer_en": "Uniform",
        "answer_hi": "एकसमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The compound that gives positive test with Schiff's reagent is:",
        "question_hi": "वह यौगिक जो शिफ अभिकर्मक के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Aldehyde", "Ketone", "Alcohol", "Ester"],
        "options_hi": ["एल्डिहाइड", "कीटोन", "अल्कोहल", "एस्टर"],
        "answer_en": "Aldehyde",
        "answer_hi": "एल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The value of ∫(1/(x² + a²) dx) is:",
        "question_hi": "∫(1/(x² + a²) dx) का मान है:",
        "options_en": ["(1/a)tan⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "(1/a)sin⁻¹(x/a) + C", "sin⁻¹(x/a) + C"],
        "options_hi": ["(1/a)tan⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "(1/a)sin⁻¹(x/a) + C", "sin⁻¹(x/a) + C"],
        "answer_en": "(1/a)tan⁻¹(x/a) + C",
        "answer_hi": "(1/a)tan⁻¹(x/a) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "In human eye, the image is formed on:",
        "question_hi": "मानव आंख में, प्रतिबिंब बनता है:",
        "options_en": ["Cornea", "Lens", "Retina", "Iris"],
        "options_hi": ["कॉर्निया", "लेंस", "रेटिना", "आइरिस"],
        "answer_en": "Retina",
        "answer_hi": "रेटिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The dimensional formula of power is:",
        "question_hi": "शक्ति का विमीय सूत्र है:",
        "options_en": ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "MLT⁻³"],
        "options_hi": ["ML²T⁻³", "MLT⁻²", "ML²T⁻²", "MLT⁻³"],
        "answer_en": "ML²T⁻³",
        "answer_hi": "ML²T⁻³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which of the following is a non-reducing sugar?",
        "question_hi": "निम्नलिखित में से कौन एक अनापचायक शर्करा है?",
        "options_en": ["Glucose", "Fructose", "Sucrose", "Maltose"],
        "options_hi": ["ग्लूकोज", "फ्रक्टोज", "सुक्रोज", "माल्टोज"],
        "answer_en": "Sucrose",
        "answer_hi": "सुक्रोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The number of points where f(x) = |x| is not differentiable is:",
        "question_hi": "बिंदुओं की संख्या जहाँ f(x) = |x| अवकलनीय नहीं है:",
        "options_en": ["0", "1", "2", "Infinite"],
        "options_hi": ["0", "1", "2", "अनंत"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The enzyme that fixes CO₂ in C3 plants is:",
        "question_hi": "C3 पौधों में CO₂ स्थिर करने वाला एंजाइम है:",
        "options_en": ["PEP carboxylase", "RuBisCO", "Catalase", "Amylase"],
        "options_hi": ["PEP कार्बोक्सिलेज", "RuBisCO", "कैटालेज", "एमाइलेज"],
        "answer_en": "RuBisCO",
        "answer_hi": "RuBisCO",
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