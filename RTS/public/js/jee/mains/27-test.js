const questions = [
    // Physics - Rotational Motion & Gravitation (1-10)
    {
        "num": 1,
        "question_en": "The moment of inertia of a solid cylinder about its natural axis is:",
        "question_hi": "एक ठोस बेलन का इसकी प्राकृतिक अक्ष के परितः जड़त्व आघूर्ण है:",
        "options_en": ["MR²/2", "MR²", "2MR²/3", "2MR²/5"],
        "options_hi": ["MR²/2", "MR²", "2MR²/3", "2MR²/5"],
        "answer_en": "MR²/2",
        "answer_hi": "MR²/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The acceleration due to gravity at height h above earth surface (h << R) is:",
        "question_hi": "पृथ्वी की सतह से h ऊँचाई पर गुरुत्वीय त्वरण (h << R) है:",
        "options_en": ["g(1 - 2h/R)", "g(1 - h/R)", "g(1 + 2h/R)", "g(1 + h/R)"],
        "options_hi": ["g(1 - 2h/R)", "g(1 - h/R)", "g(1 + 2h/R)", "g(1 + h/R)"],
        "answer_en": "g(1 - 2h/R)",
        "answer_hi": "g(1 - 2h/R)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The angular momentum of a particle is conserved when:",
        "question_hi": "एक कण का कोणीय संवेग संरक्षित रहता है जब:",
        "options_en": ["Net force is zero", "Net torque is zero", "Velocity is constant", "Acceleration is zero"],
        "options_hi": ["निवल बल शून्य है", "निवल बल आघूर्ण शून्य है", "वेग स्थिर है", "त्वरण शून्य है"],
        "answer_en": "Net torque is zero",
        "answer_hi": "निवल बल आघूर्ण शून्य है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The escape velocity from earth's surface is:",
        "question_hi": "पृथ्वी की सतह से पलायन वेग है:",
        "options_en": ["√(gR)", "√(2gR)", "2√(gR)", "gR"],
        "options_hi": ["√(gR)", "√(2gR)", "2√(gR)", "gR"],
        "answer_en": "√(2gR)",
        "answer_hi": "√(2gR)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The radius of gyration of a solid sphere about its diameter is:",
        "question_hi": "एक ठोस गोले का इसके व्यास के परितः परिभ्रमण त्रिज्या है:",
        "options_en": ["R/√2", "R√(2/5)", "R√(2/3)", "R/2"],
        "options_hi": ["R/√2", "R√(2/5)", "R√(2/3)", "R/2"],
        "answer_en": "R√(2/5)",
        "answer_hi": "R√(2/5)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Kepler's second law is based on:",
        "question_hi": "केप्लर का दूसरा नियम आधारित है:",
        "options_en": ["Conservation of energy", "Conservation of angular momentum", "Conservation of linear momentum", "Conservation of mass"],
        "options_hi": ["ऊर्जा संरक्षण", "कोणीय संवेग संरक्षण", "रैखिक संवेग संरक्षण", "द्रव्यमान संरक्षण"],
        "answer_en": "Conservation of angular momentum",
        "answer_hi": "कोणीय संवेग संरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The work done in rotating a body from angular position θ₁ to θ₂ is:",
        "question_hi": "एक पिंड को कोणीय स्थिति θ₁ से θ₂ तक घुमाने में किया गया कार्य है:",
        "options_en": ["∫τdθ", "∫θdτ", "τ(θ₂ - θ₁)", "½I(ω₂² - ω₁²)"],
        "options_hi": ["∫τdθ", "∫θdτ", "τ(θ₂ - θ₁)", "½I(ω₂² - ω₁²)"],
        "answer_en": "∫τdθ",
        "answer_hi": "∫τdθ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The time period of a satellite in circular orbit very close to earth is:",
        "question_hi": "पृथ्वी के बहुत निकट वृत्तीय कक्षा में उपग्रह का आवर्तकाल है:",
        "options_en": ["2π√(R/g)", "2π√(R³/GM)", "2π√(g/R)", "2πR/√g"],
        "options_hi": ["2π√(R/g)", "2π√(R³/GM)", "2π√(g/R)", "2πR/√g"],
        "answer_en": "2π√(R/g)",
        "answer_hi": "2π√(R/g)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The parallel axis theorem relates:",
        "question_hi": "समान्तर अक्ष प्रमेय संबंधित करती है:",
        "options_en": ["I = I_cm + Md²", "I = I_cm - Md²", "I = I_cm + ½Md²", "I = 2I_cm + Md²"],
        "options_hi": ["I = I_cm + Md²", "I = I_cm - Md²", "I = I_cm + ½Md²", "I = 2I_cm + Md²"],
        "answer_en": "I = I_cm + Md²",
        "answer_hi": "I = I_cm + Md²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The gravitational potential energy of two masses m₁ and m₂ separated by distance r is:",
        "question_hi": "दो द्रव्यमान m₁ और m₂ की r दूरी से पृथक होने पर गुरुत्वीय स्थितिज ऊर्जा है:",
        "options_en": ["-Gm₁m₂/r", "Gm₁m₂/r", "-Gm₁m₂/r²", "Gm₁m₂/r²"],
        "options_hi": ["-Gm₁m₂/r", "Gm₁m₂/r", "-Gm₁m₂/r²", "Gm₁m₂/r²"],
        "answer_en": "-Gm₁m₂/r",
        "answer_hi": "-Gm₁m₂/r",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - d & f Block Elements (11-20)
    {
        "num": 11,
        "question_en": "Which of the following is not a transition element?",
        "question_hi": "निम्नलिखित में से कौन सा संक्रमण तत्व नहीं है?",
        "options_en": ["Copper", "Zinc", "Iron", "Silver"],
        "options_hi": ["कॉपर", "जिंक", "आयरन", "सिल्वर"],
        "answer_en": "Zinc",
        "answer_hi": "जिंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The magnetic moment of Cr³⁺ ion is:",
        "question_hi": "Cr³⁺ आयन का चुंबकीय आघूर्ण है:",
        "options_en": ["√15 BM", "√24 BM", "√35 BM", "√8 BM"],
        "options_hi": ["√15 BM", "√24 BM", "√35 BM", "√8 BM"],
        "answer_en": "√15 BM",
        "answer_hi": "√15 BM",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Lanthanoid contraction is due to:",
        "question_hi": "लैन्थेनाइड संकुचन के कारण है:",
        "options_en": ["Poor shielding of 4f electrons", "Poor shielding of 5d electrons", "Good shielding of 4f electrons", "Good shielding of 5d electrons"],
        "options_hi": ["4f इलेक्ट्रॉनों का खराब परिरक्षण", "5d इलेक्ट्रॉनों का खराब परिरक्षण", "4f इलेक्ट्रॉनों का अच्छा परिरक्षण", "5d इलेक्ट्रॉनों का अच्छा परिरक्षण"],
        "answer_en": "Poor shielding of 4f electrons",
        "answer_hi": "4f इलेक्ट्रॉनों का खराब परिरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following shows maximum number of oxidation states?",
        "question_hi": "निम्नलिखित में से कौन अधिकतम ऑक्सीकरण अवस्थाएँ दर्शाता है?",
        "options_en": ["Sc", "Ti", "V", "Cr"],
        "options_hi": ["Sc", "Ti", "V", "Cr"],
        "answer_en": "Mn",
        "answer_hi": "Mn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The color of K₂Cr₂O₇ is due to:",
        "question_hi": "K₂Cr₂O₇ का रंग किसके कारण है?",
        "options_en": ["d-d transition", "Charge transfer", "Both A and B", "None of these"],
        "options_hi": ["d-d संक्रमण", "आवेश स्थानांतरण", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Charge transfer",
        "answer_hi": "आवेश स्थानांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which lanthanoid is radioactive?",
        "question_hi": "कौन सा लैन्थेनाइड रेडियोधर्मी है?",
        "options_en": ["Cerium", "Promethium", "Neodymium", "Samarium"],
        "options_hi": ["सीरियम", "प्रोमेथियम", "नियोडिमियम", "सैमेरियम"],
        "answer_en": "Promethium",
        "answer_hi": "प्रोमेथियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The catalyst used in Wilkinson's catalyst is:",
        "question_hi": "विल्किंसन उत्प्रेरक में प्रयुक्त उत्प्रेरक है:",
        "options_en": ["RhCl(PPh₃)₃", "Ni(CO)₄", "Fe(CO)₅", "V₂O₅"],
        "options_hi": ["RhCl(PPh₃)₃", "Ni(CO)₄", "Fe(CO)₅", "V₂O₅"],
        "answer_en": "RhCl(PPh₃)₃",
        "answer_hi": "RhCl(PPh₃)₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The magnetic nature of O₂ is:",
        "question_hi": "O₂ की चुंबकीय प्रकृति है:",
        "options_en": ["Diamagnetic", "Paramagnetic", "Ferromagnetic", "Antiferromagnetic"],
        "options_hi": ["प्रतिचुंबकीय", "अनुचुंबकीय", "लौहचुंबकीय", "प्रतिलौहचुंबकीय"],
        "answer_en": "Paramagnetic",
        "answer_hi": "अनुचुंबकीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The compound used in photography is:",
        "question_hi": "फोटोग्राफी में प्रयुक्त यौगिक है:",
        "options_en": ["AgCl", "AgBr", "AgI", "AgF"],
        "options_hi": ["AgCl", "AgBr", "AgI", "AgF"],
        "answer_en": "AgBr",
        "answer_hi": "AgBr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The oxidation state of iron in Fe(CO)₅ is:",
        "question_hi": "Fe(CO)₅ में आयरन की ऑक्सीकरण अवस्था है:",
        "options_en": ["0", "+2", "+3", "+6"],
        "options_hi": ["0", "+2", "+3", "+6"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Matrices & Determinants (21-30)
    {
        "num": 21,
        "question_en": "If A is a square matrix of order 3 and |A| = 5, then |adj A| is:",
        "question_hi": "यदि A कोटि 3 का एक वर्ग आव्यूह है और |A| = 5, तो |adj A| है:",
        "options_en": ["5", "25", "125", "625"],
        "options_hi": ["5", "25", "125", "625"],
        "answer_en": "25",
        "answer_hi": "25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The system of equations x + y = 2, 2x + 2y = 4 has:",
        "question_hi": "समीकरणों के निकाय x + y = 2, 2x + 2y = 4 के हैं:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "If A² = A, then A is called:",
        "question_hi": "यदि A² = A, तो A कहलाता है:",
        "options_en": ["Idempotent matrix", "Involutory matrix", "Nilpotent matrix", "Orthogonal matrix"],
        "options_hi": ["वर्गसम आव्यूह", "व्युत्क्रमणीय आव्यूह", "शून्यघाती आव्यूह", "लांबिक आव्यूह"],
        "answer_en": "Idempotent matrix",
        "answer_hi": "वर्गसम आव्यूह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The value of determinant |1 2 3; 4 5 6; 7 8 9| is:",
        "question_hi": "सारणिक |1 2 3; 4 5 6; 7 8 9| का मान है:",
        "options_en": ["0", "1", "-1", "2"],
        "options_hi": ["0", "1", "-1", "2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "If A is symmetric matrix, then A' is:",
        "question_hi": "यदि A सममित आव्यूह है, तो A' है:",
        "options_en": ["A", "-A", "A⁻¹", "I"],
        "options_hi": ["A", "-A", "A⁻¹", "I"],
        "answer_en": "A",
        "answer_hi": "A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The inverse of matrix |2 3; 1 2| is:",
        "question_hi": "आव्यूह |2 3; 1 2| का व्युत्क्रम है:",
        "options_en": ["|2 -3; -1 2|", "|2 -3; 1 2|", "|-2 3; 1 -2|", "|2 3; -1 -2|"],
        "options_hi": ["|2 -3; -1 2|", "|2 -3; 1 2|", "|-2 3; 1 -2|", "|2 3; -1 -2|"],
        "answer_en": "|2 -3; -1 2|",
        "answer_hi": "|2 -3; -1 2|",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "If A and B are square matrices of same order, then (AB)' is:",
        "question_hi": "यदि A और B समान कोटि के वर्ग आव्यूह हैं, तो (AB)' है:",
        "options_en": ["A'B'", "B'A'", "AB", "BA"],
        "options_hi": ["A'B'", "B'A'", "AB", "BA"],
        "answer_en": "B'A'",
        "answer_hi": "B'A'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The system of equations x + 2y = 3, 4x + 8y = 12 has:",
        "question_hi": "समीकरणों के निकाय x + 2y = 3, 4x + 8y = 12 के हैं:",
        "options_en": ["Unique solution", "No solution", "Infinite solutions", "Two solutions"],
        "options_hi": ["अद्वितीय हल", "कोई हल नहीं", "अनंत हल", "दो हल"],
        "answer_en": "Infinite solutions",
        "answer_hi": "अनंत हल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "If A is a matrix such that A² = I, then A is called:",
        "question_hi": "यदि A एक आव्यूह है जैसे कि A² = I, तो A कहलाता है:",
        "options_en": ["Idempotent", "Involutory", "Nilpotent", "Orthogonal"],
        "options_hi": ["वर्गसम", "व्युत्क्रमणीय", "शून्यघाती", "लांबिक"],
        "answer_en": "Involutory",
        "answer_hi": "व्युत्क्रमणीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The determinant of identity matrix of order 3 is:",
        "question_hi": "कोटि 3 के तत्समक आव्यूह का सारणिक है:",
        "options_en": ["0", "1", "3", "9"],
        "options_hi": ["0", "1", "3", "9"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },

    // Biology - Human Health & Diseases (31-40)
    {
        "num": 31,
        "question_en": "The disease caused by deficiency of vitamin C is:",
        "question_hi": "विटामिन C की कमी से होने वाला रोग है:",
        "options_en": ["Scurvy", "Rickets", "Beri-beri", "Night blindness"],
        "options_hi": ["स्कर्वी", "रिकेट्स", "बेरी-बेरी", "रतौंधी"],
        "answer_en": "Scurvy",
        "answer_hi": "स्कर्वी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The vector for malaria is:",
        "question_hi": "मलेरिया का वेक्टर है:",
        "options_en": ["Female Anopheles mosquito", "Male Anopheles mosquito", "Culex mosquito", "Aedes mosquito"],
        "options_hi": ["मादा एनोफिलीज मच्छर", "नर एनोफिलीज मच्छर", "क्यूलेक्स मच्छर", "एडीज मच्छर"],
        "answer_en": "Female Anopheles mosquito",
        "answer_hi": "मादा एनोफिलीज मच्छर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The disease caused by Mycobacterium tuberculosis is:",
        "question_hi": "माइकोबैक्टीरियम ट्यूबरकुलोसिस के कारण होने वाला रोग है:",
        "options_en": ["Tuberculosis", "Pneumonia", "Typhoid", "Cholera"],
        "options_hi": ["तपेदिक", "निमोनिया", "टाइफाइड", "हैजा"],
        "answer_en": "Tuberculosis",
        "answer_hi": "तपेदिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The antibody responsible for allergic reactions is:",
        "question_hi": "एलर्जिक प्रतिक्रियाओं के लिए जिम्मेदार एंटीबॉडी है:",
        "options_en": ["IgE", "IgG", "IgM", "IgA"],
        "options_hi": ["IgE", "IgG", "IgM", "IgA"],
        "answer_en": "IgE",
        "answer_hi": "IgE",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The disease caused by Treponema pallidum is:",
        "question_hi": "ट्रेपोनेमा पैलिडम के कारण होने वाला रोग है:",
        "options_en": ["Syphilis", "Gonorrhea", "AIDS", "Hepatitis"],
        "options_hi": ["सिफिलिस", "गोनोरिया", "एड्स", "हेपेटाइटिस"],
        "answer_en": "Syphilis",
        "answer_hi": "सिफिलिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The cancer of lymph nodes is called:",
        "question_hi": "लसीका ग्रंथियों का कैंसर कहलाता है:",
        "options_en": ["Leukemia", "Lymphoma", "Melanoma", "Sarcoma"],
        "options_hi": ["ल्यूकेमिया", "लिंफोमा", "मेलेनोमा", "सारकोमा"],
        "answer_en": "Lymphoma",
        "answer_hi": "लिंफोमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The disease caused by deficiency of iodine is:",
        "question_hi": "आयोडीन की कमी से होने वाला रोग है:",
        "options_en": ["Goiter", "Cretinism", "Both A and B", "None of these"],
        "options_hi": ["गोइटर", "क्रेटिनिज्म", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The virus that causes AIDS is:",
        "question_hi": "एड्स पैदा करने वाला वायरस है:",
        "options_en": ["HIV", "HPV", "HBV", "HCV"],
        "options_hi": ["HIV", "HPV", "HBV", "HCV"],
        "answer_en": "HIV",
        "answer_hi": "HIV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The disease caused by Plasmodium is:",
        "question_hi": "प्लाज्मोडियम के कारण होने वाला रोग है:",
        "options_en": ["Malaria", "Amoebiasis", "Kala-azar", "Sleeping sickness"],
        "options_hi": ["मलेरिया", "अमीबियासिस", "काला-अज़ार", "स्लीपिंग सिकनेस"],
        "answer_en": "Malaria",
        "answer_hi": "मलेरिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The drug used for cancer treatment is:",
        "question_hi": "कैंसर उपचार के लिए प्रयुक्त दवा है:",
        "options_en": ["Cisplatin", "Penicillin", "Streptomycin", "Chloroquine"],
        "options_hi": ["सिस्प्लैटिन", "पेनिसिलिन", "स्ट्रेप्टोमाइसिन", "क्लोरोक्वीन"],
        "answer_en": "Cisplatin",
        "answer_hi": "सिस्प्लैटिन",
        "attempted": false,
        "selected": ""
    },

    // English - Advanced Grammar & Vocabulary (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct meaning of 'Ephemeral':",
        "question_hi": "'Ephemeral' का सही अर्थ चुनें:",
        "options_en": ["Permanent", "Temporary", "Eternal", "Lasting"],
        "options_hi": ["स्थायी", "अस्थायी", "शाश्वत", "टिकाऊ"],
        "answer_en": "Temporary",
        "answer_hi": "अस्थायी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Identify the type of clause: 'What he said was true.'",
        "question_hi": "उपवाक्य का प्रकार पहचानें: 'What he said was true.'",
        "options_en": ["Noun clause", "Adjective clause", "Adverb clause", "Main clause"],
        "options_hi": ["संज्ञा उपवाक्य", "विशेषण उपवाक्य", "क्रिया विशेषण उपवाक्य", "मुख्य उपवाक्य"],
        "answer_en": "Noun clause",
        "answer_hi": "संज्ञा उपवाक्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
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
        "num": 44,
        "question_en": "The antonym of 'Benevolent' is:",
        "question_hi": "'Benevolent' का विलोम है:",
        "options_en": ["Kind", "Malevolent", "Generous", "Philanthropic"],
        "options_hi": ["दयालु", "दुर्भावनापूर्ण", "उदार", "परोपकारी"],
        "answer_en": "Malevolent",
        "answer_hi": "दुर्भावनापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Identify the figure of speech: 'The stars winked at me.'",
        "question_hi": "अलंकार पहचानें: 'The stars winked at me.'",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Choose the correct word: 'The data ___ analyzed carefully.'",
        "question_hi": "सही शब्द चुनें: 'The data ___ analyzed carefully.'",
        "options_en": ["was", "were", "are", "have"],
        "options_hi": ["was", "were", "are", "have"],
        "answer_en": "was",
        "answer_hi": "was",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The synonym of 'Meticulous' is:",
        "question_hi": "'Meticulous' का समानार्थी है:",
        "options_en": ["Careless", "Careful", "Hasty", "Slow"],
        "options_hi": ["लापरवाह", "सावधान", "जल्दबाज", "धीमा"],
        "answer_en": "Careful",
        "answer_hi": "सावधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Identify the tense: 'I have been waiting for two hours.'",
        "question_hi": "काल पहचानें: 'I have been waiting for two hours.'",
        "options_en": ["Present perfect", "Present continuous", "Present perfect continuous", "Simple present"],
        "options_hi": ["वर्तमान पूर्ण", "वर्तमान अपूर्ण", "वर्तमान पूर्ण अपूर्ण", "सामान्य वर्तमान"],
        "answer_en": "Present perfect continuous",
        "answer_hi": "वर्तमान पूर्ण अपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Choose the correctly spelled word:",
        "question_hi": "सही वर्तनी वाला शब्द चुनें:",
        "options_en": ["Conscious", "Concious", "Conscous", "Consious"],
        "options_hi": ["Conscious", "Concious", "Conscous", "Consious"],
        "answer_en": "Conscious",
        "answer_hi": "Conscious",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The meaning of 'Pragmatic' is:",
        "question_hi": "'Pragmatic' का अर्थ है:",
        "options_en": ["Idealistic", "Practical", "Theoretical", "Philosophical"],
        "options_hi": ["आदर्शवादी", "व्यावहारिक", "सैद्धांतिक", "दार्शनिक"],
        "answer_en": "Practical",
        "answer_hi": "व्यावहारिक",
        "attempted": false,
        "selected": ""
    },

    // Hindi - व्याकरण और रचना (51-60)
    {
        "num": 51,
        "question_en": "'अनेक' शब्द का विलोम है:",
        "question_hi": "'अनेक' शब्द का विलोम है:",
        "options_en": ["बहुत", "कई", "एक", "थोड़ा"],
        "options_hi": ["बहुत", "कई", "एक", "थोड़ा"],
        "answer_en": "एक",
        "answer_hi": "एक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "कौन सा शब्द तत्सम है?",
        "question_hi": "कौन सा शब्द तत्सम है?",
        "options_en": ["आँख", "नेत्र", "अक्षि", "चक्षु"],
        "options_hi": ["आँख", "नेत्र", "अक्षि", "चक्षु"],
        "answer_en": "चक्षु",
        "answer_hi": "चक्षु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'गाय' का बहुवचन रूप है:",
        "question_hi": "'गाय' का बहुवचन रूप है:",
        "options_en": ["गायें", "गायों", "गाएं", "गाये"],
        "options_hi": ["गायें", "गायों", "गाएं", "गाये"],
        "answer_en": "गायें",
        "answer_hi": "गायें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "कौन सा वाक्य शुद्ध है?",
        "question_hi": "कौन सा वाक्य शुद्ध है?",
        "options_en": ["मैंने उसे देखा।", "मैंने उसको देखा।", "मैं उसे देखा।", "मैं उसको देखा।"],
        "options_hi": ["मैंने उसे देखा।", "मैंने उसको देखा।", "मैं उसे देखा।", "मैं उसको देखा।"],
        "answer_en": "मैंने उसे देखा।",
        "answer_hi": "मैंने उसे देखा।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'सूर्य' का पर्यायवाची शब्द है:",
        "question_hi": "'सूर्य' का पर्यायवाची शब्द है:",
        "options_en": ["चंद्रमा", "दिनकर", "तारा", "पृथ्वी"],
        "options_hi": ["चंद्रमा", "दिनकर", "तारा", "पृथ्वी"],
        "answer_en": "दिनकर",
        "answer_hi": "दिनकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "कौन सा शब्द संज्ञा है?",
        "question_hi": "कौन सा शब्द संज्ञा है?",
        "options_en": ["खेलना", "सुंदर", "किताब", "तेज"],
        "options_hi": ["खेलना", "सुंदर", "किताब", "तेज"],
        "answer_en": "किताब",
        "answer_hi": "किताब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'राम ने रोटी खाई' वाक्य में कर्म है:",
        "question_hi": "'राम ने रोटी खाई' वाक्य में कर्म है:",
        "options_en": ["राम", "ने", "रोटी", "खाई"],
        "options_hi": ["राम", "ने", "रोटी", "खाई"],
        "answer_en": "रोटी",
        "answer_hi": "रोटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "कौन सा शब्द स्त्रीलिंग है?",
        "question_hi": "कौन सा शब्द स्त्रीलिंग है?",
        "options_en": ["लड़का", "किताब", "घर", "मेज"],
        "options_hi": ["लड़का", "किताब", "घर", "मेज"],
        "answer_en": "किताब",
        "answer_hi": "किताब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'सुबह' का विलोम शब्द है:",
        "question_hi": "'सुबह' का विलोम शब्द है:",
        "options_en": ["दोपहर", "शाम", "रात", "संध्या"],
        "options_hi": ["दोपहर", "शाम", "रात", "संध्या"],
        "answer_en": "रात",
        "answer_hi": "रात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "कौन सा वाक्य अशुद्ध है?",
        "question_hi": "कौन सा वाक्य अशुद्ध है?",
        "options_en": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ने है।"],
        "options_hi": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ने है।"],
        "answer_en": "वह पढ़ने है।",
        "answer_hi": "वह पढ़ने है।",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (61-70)
    {
        "num": 61,
        "question_en": "The device used to measure electric current is:",
        "question_hi": "विद्युत धारा मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The chemical name of baking soda is:",
        "question_hi": "बेकिंग सोडा का रासायनिक नाम है:",
        "options_en": ["Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide", "Sodium chloride"],
        "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The largest gland in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
        "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "options_hi": ["अग्न्याशय", "यकृत", "थायरॉयड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The SI unit of force is:",
        "question_hi": "बल की SI इकाई है:",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The planet known as the Red Planet is:",
        "question_hi": "लाल ग्रह के नाम से जाना जाने वाला ग्रह है:",
        "options_en": ["Mars", "Jupiter", "Venus", "Mercury"],
        "options_hi": ["मंगल", "बृहस्पति", "शुक्र", "बुध"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The process of conversion of vapor to liquid is called:",
        "question_hi": "वाष्प के द्रव में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
        "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "जमना"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The metal used in making electric wires is:",
        "question_hi": "विद्युत तार बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Iron", "Aluminum", "Silver"],
        "options_hi": ["तांबा", "लोहा", "एल्युमिनियम", "चांदी"],
        "answer_en": "Copper",
        "answer_hi": "तांबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The chemical formula of water is:",
        "question_hi": "जल का रासायनिक सूत्र है:",
        "options_en": ["H₂O", "CO₂", "NaCl", "CH₄"],
        "options_hi": ["H₂O", "CO₂", "NaCl", "CH₄"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The speed of light in vacuum is:",
        "question_hi": "निर्वात में प्रकाश की गति है:",
        "options_en": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "options_hi": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The vitamin that prevents scurvy is:",
        "question_hi": "वह विटामिन जो स्कर्वी को रोकता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-100)
    {
        "num": 71,
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
        "num": 72,
        "question_en": "The chemical formula of methane is:",
        "question_hi": "मीथेन का रासायनिक सूत्र है:",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of sin90° is:",
        "question_hi": "sin90° का मान है:",
        "options_en": ["0", "1/2", "√3/2", "1"],
        "options_hi": ["0", "1/2", "√3/2", "1"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The process of conversion of sugar to alcohol is called:",
        "question_hi": "चीनी के अल्कोहल में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Fermentation", "Distillation", "Evaporation", "Sublimation"],
        "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "उर्ध्वपातन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The atomic number of nitrogen is:",
        "question_hi": "नाइट्रोजन की परमाणु संख्या है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The formula for area of rectangle is:",
        "question_hi": "आयत के क्षेत्रफल का सूत्र है:",
        "options_en": ["length × breadth", "2(length + breadth)", "length²", "breadth²"],
        "options_hi": ["लंबाई × चौड़ाई", "2(लंबाई + चौड़ाई)", "लंबाई²", "चौड़ाई²"],
        "answer_en": "length × breadth",
        "answer_hi": "लंबाई × चौड़ाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The metal used in making airplanes is:",
        "question_hi": "विमान बनाने में प्रयुक्त धातु है:",
        "options_en": ["Iron", "Aluminum", "Copper", "Gold"],
        "options_hi": ["लोहा", "एल्युमिनियम", "तांबा", "सोना"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The chemical formula of common salt is:",
        "question_hi": "साधारण नमक का रासायनिक सूत्र है:",
        "options_en": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "options_hi": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The value of cos60° is:",
        "question_hi": "cos60° का मान है:",
        "options_en": ["0", "1/2", "√3/2", "1"],
        "options_hi": ["0", "1/2", "√3/2", "1"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The vitamin that helps in blood clotting is:",
        "question_hi": "वह विटामिन जो रक्त के थक्के जमने में मदद करता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The unit of electric current is:",
        "question_hi": "विद्युत धारा की इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The chemical formula of carbon dioxide is:",
        "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र है:",
        "options_en": ["CO", "CO₂", "C₂O", "CO₃"],
        "options_hi": ["CO", "CO₂", "C₂O", "CO₃"],
        "answer_en": "CO₂",
        "answer_hi": "CO₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The value of tan45° is:",
        "question_hi": "tan45° का मान है:",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The process of conversion of solid to liquid is called:",
        "question_hi": "ठोस के द्रव में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Melting", "Freezing", "Evaporation", "Sublimation"],
        "options_hi": ["पिघलना", "जमना", "वाष्पीकरण", "उर्ध्वपातन"],
        "answer_en": "Melting",
        "answer_hi": "पिघलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The atomic number of oxygen is:",
        "question_hi": "ऑक्सीजन की परमाणु संख्या है:",
        "options_en": ["6", "8", "16", "32"],
        "options_hi": ["6", "8", "16", "32"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The formula for perimeter of square is:",
        "question_hi": "वर्ग की परिधि का सूत्र है:",
        "options_en": ["4 × side", "side²", "2 × side", "3 × side"],
        "options_hi": ["4 × भुजा", "भुजा²", "2 × भुजा", "3 × भुजा"],
        "answer_en": "4 × side",
        "answer_hi": "4 × भुजा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The metal used in making electric bulbs is:",
        "question_hi": "विद्युत बल्ब बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Aluminum", "Tungsten", "Silver"],
        "options_hi": ["तांबा", "एल्युमिनियम", "टंगस्टन", "चांदी"],
        "answer_en": "Tungsten",
        "answer_hi": "टंगस्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The chemical formula of glucose is:",
        "question_hi": "ग्लूकोज का रासायनिक सूत्र है:",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "CH₄", "CO₂"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "CH₄", "CO₂"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The value of sin²θ + cos²θ is:",
        "question_hi": "sin²θ + cos²θ का मान है:",
        "options_en": ["0", "1", "2", "sin2θ"],
        "options_hi": ["0", "1", "2", "sin2θ"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The vitamin that prevents rickets is:",
        "question_hi": "वह विटामिन जो रिकेट्स को रोकता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The unit of power is:",
        "question_hi": "शक्ति की इकाई है:",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The chemical formula of ammonia is:",
        "question_hi": "अमोनिया का रासायनिक सूत्र है:",
        "options_en": ["NH₃", "NH₄", "N₂H₄", "HNO₃"],
        "options_hi": ["NH₃", "NH₄", "N₂H₄", "HNO₃"],
        "answer_en": "NH₃",
        "answer_hi": "NH₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The value of cos90° is:",
        "question_hi": "cos90° का मान है:",
        "options_en": ["0", "1/2", "√3/2", "1"],
        "options_hi": ["0", "1/2", "√3/2", "1"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The process of conversion of liquid to vapor is called:",
        "question_hi": "द्रव के वाष्प में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Evaporation", "Condensation", "Freezing", "Sublimation"],
        "options_hi": ["वाष्पीकरण", "संघनन", "जमना", "उर्ध्वपातन"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The atomic number of carbon is:",
        "question_hi": "कार्बन की परमाणु संख्या है:",
        "options_en": ["6", "12", "14", "16"],
        "options_hi": ["6", "12", "14", "16"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The formula for volume of cube is:",
        "question_hi": "घन के आयतन का सूत्र है:",
        "options_en": ["a³", "a²", "2a", "3a"],
        "options_hi": ["a³", "a²", "2a", "3a"],
        "answer_en": "a³",
        "answer_hi": "a³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The metal used in making jewelry is:",
        "question_hi": "आभूषण बनाने में प्रयुक्त धातु है:",
        "options_en": ["Iron", "Aluminum", "Gold", "Copper"],
        "options_hi": ["लोहा", "एल्युमिनियम", "सोना", "तांबा"],
        "answer_en": "Gold",
        "answer_hi": "सोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The chemical formula of sulfuric acid is:",
        "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"],
        "options_hi": ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"],
        "answer_en": "H₂SO₄",
        "answer_hi": "H₂SO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The value of tan90° is:",
        "question_hi": "tan90° का मान है:",
        "options_en": ["0", "1", "∞", "1/√3"],
        "options_hi": ["0", "1", "∞", "1/√3"],
        "answer_en": "∞",
        "answer_hi": "∞",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The vitamin that helps in night vision is:",
        "question_hi": "वह विटामिन जो रात्रि दृष्टि में मदद करता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
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