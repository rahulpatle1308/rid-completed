const questions = [
    // Physics - JEE Main Level (1-20)
    {
        "num": 1,
        "question_en": "A particle is projected with velocity u at angle θ with horizontal. What is the time of flight?",
        "question_hi": "एक कण को क्षैतिज से θ कोण पर वेग u से प्रक्षेपित किया जाता है। उड़ान का समय क्या है?",
        "options_en": ["2u sinθ/g", "u sinθ/g", "u² sin²θ/g", "2u cosθ/g"],
        "options_hi": ["2u sinθ/g", "u sinθ/g", "u² sin²θ/g", "2u cosθ/g"],
        "answer_en": "2u sinθ/g",
        "answer_hi": "2u sinθ/g",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The dimensional formula of Planck's constant is:",
        "question_hi": "प्लैंक नियतांक का विमीय सूत्र है:",
        "options_en": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "options_hi": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "answer_en": "ML²T⁻¹",
        "answer_hi": "ML²T⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A body of mass 2kg is moving with velocity 10m/s. Its kinetic energy is:",
        "question_hi": "2kg द्रव्यमान का एक पिंड 10m/s वेग से गतिमान है। इसकी गतिज ऊर्जा है:",
        "options_en": ["50J", "100J", "150J", "200J"],
        "options_hi": ["50J", "100J", "150J", "200J"],
        "answer_en": "100J",
        "answer_hi": "100J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The SI unit of electric flux is:",
        "question_hi": "विद्युत फ्लक्स की SI इकाई है:",
        "options_en": ["Volt-meter", "Weber", "Tesla", "Coulomb"],
        "options_hi": ["वोल्ट-मीटर", "वेबर", "टेस्ला", "कूलॉम"],
        "answer_en": "Volt-meter",
        "answer_hi": "वोल्ट-मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A convex lens has focal length 20cm. Its power is:",
        "question_hi": "एक उत्तल लेंस की फोकस दूरी 20cm है। इसकी क्षमता है:",
        "options_en": ["+5D", "-5D", "+0.2D", "-0.2D"],
        "options_hi": ["+5D", "-5D", "+0.2D", "-0.2D"],
        "answer_en": "+5D",
        "answer_hi": "+5D",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - JEE Main Level (6-40)
    {
        "num": 6,
        "question_en": "Which of the following is an example of aromatic compound?",
        "question_hi": "निम्नलिखित में से कौन सा ऐरोमैटिक यौगिक का उदाहरण है?",
        "options_en": ["Benzene", "Ethene", "Acetylene", "Methane"],
        "options_hi": ["बेंजीन", "ईथीन", "एसिटिलीन", "मीथेन"],
        "answer_en": "Benzene",
        "answer_hi": "बेंजीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The pH of 0.001M HCl solution is:",
        "question_hi": "0.001M HCl विलयन का pH है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which element has electronic configuration 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹?",
        "question_hi": "किस तत्व का इलेक्ट्रॉनिक विन्यास 1s² 2s² 2p⁶ 3s² 3p⁶ 4s¹ है?",
        "options_en": ["Potassium", "Calcium", "Scandium", "Argon"],
        "options_hi": ["पोटैशियम", "कैल्शियम", "स्कैंडियम", "आर्गन"],
        "answer_en": "Potassium",
        "answer_hi": "पोटैशियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The IUPAC name of CH₃COOH is:",
        "question_hi": "CH₃COOH का IUPAC नाम है:",
        "options_en": ["Ethanoic acid", "Methanoic acid", "Propanoic acid", "Butanoic acid"],
        "options_hi": ["एथेनोइक अम्ल", "मेथेनोइक अम्ल", "प्रोपेनोइक अम्ल", "ब्यूटेनोइक अम्ल"],
        "answer_en": "Ethanoic acid",
        "answer_hi": "एथेनोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The number of moles in 44g of CO₂ is:",
        "question_hi": "44g CO₂ में मोलों की संख्या है:",
        "options_en": ["0.5", "1", "1.5", "2"],
        "options_hi": ["0.5", "1", "1.5", "2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - JEE Main Level (11-60)
    {
        "num": 11,
        "question_en": "The value of sin(π/3) is:",
        "question_hi": "sin(π/3) का मान है:",
        "options_en": ["1/2", "√3/2", "1/√2", "√3"],
        "options_hi": ["1/2", "√3/2", "1/√2", "√3"],
        "answer_en": "√3/2",
        "answer_hi": "√3/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The derivative of x³ with respect to x is:",
        "question_hi": "x³ का x के सापेक्ष अवकलज है:",
        "options_en": ["3x²", "2x²", "3x", "x²"],
        "options_hi": ["3x²", "2x²", "3x", "x²"],
        "answer_en": "3x²",
        "answer_hi": "3x²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The value of ∫(2x dx) from 0 to 1 is:",
        "question_hi": "0 से 1 तक ∫(2x dx) का मान है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The number of diagonals in a pentagon is:",
        "question_hi": "एक पंचभुज में विकर्णों की संख्या है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "If A = {1,2,3} and B = {2,3,4}, then A∩B is:",
        "question_hi": "यदि A = {1,2,3} और B = {2,3,4}, तो A∩B है:",
        "options_en": ["{1,2}", "{2,3}", "{3,4}", "{1,4}"],
        "options_hi": ["{1,2}", "{2,3}", "{3,4}", "{1,4}"],
        "answer_en": "{2,3}",
        "answer_hi": "{2,3}",
        "attempted": false,
        "selected": ""
    },

    // Biology - JEE Main Level (16-80)
    {
        "num": 16,
        "question_en": "The powerhouse of the cell is:",
        "question_hi": "कोशिका का पावरहाउस है:",
        "options_en": ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Photosynthesis occurs in:",
        "question_hi": "प्रकाश संश्लेषण होता है:",
        "options_en": ["Chloroplast", "Mitochondria", "Nucleus", "Ribosome"],
        "options_hi": ["क्लोरोप्लास्ट", "माइटोकॉन्ड्रिया", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The basic unit of life is:",
        "question_hi": "जीवन की मूल इकाई है:",
        "options_en": ["Cell", "Tissue", "Organ", "Organ system"],
        "options_hi": ["कोशिका", "ऊतक", "अंग", "अंग प्रणाली"],
        "answer_en": "Cell",
        "answer_hi": "कोशिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "DNA is found in:",
        "question_hi": "DNA पाया जाता है:",
        "options_en": ["Nucleus", "Cytoplasm", "Cell membrane", "All of these"],
        "options_hi": ["केंद्रक", "कोशिका द्रव्य", "कोशिका झिल्ली", "उपरोक्त सभी"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Enzymes are made up of:",
        "question_hi": "एंजाइम बने होते हैं:",
        "options_en": ["Proteins", "Carbohydrates", "Lipids", "Nucleic acids"],
        "options_hi": ["प्रोटीन", "कार्बोहाइड्रेट", "लिपिड", "न्यूक्लिक अम्ल"],
        "answer_en": "Proteins",
        "answer_hi": "प्रोटीन",
        "attempted": false,
        "selected": ""
    },

    // English - General (21-85)
    {
        "num": 21,
        "question_en": "Choose the correct synonym of 'Benevolent':",
        "question_hi": "'Benevolent' का सही पर्यायवाची चुनें:",
        "options_en": ["Kind", "Cruel", "Selfish", "Greedy"],
        "options_hi": ["दयालु", "क्रूर", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Identify the correct sentence:",
        "question_hi": "सही वाक्य पहचानें:",
        "options_en": ["He go to school", "He goes to school", "He going to school", "He gone to school"],
        "options_hi": ["He go to school", "He goes to school", "He going to school", "He gone to school"],
        "answer_en": "He goes to school",
        "answer_hi": "He goes to school",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The past tense of 'run' is:",
        "question_hi": "'run' का भूतकाल है:",
        "options_en": ["Runned", "Ran", "Running", "Runs"],
        "options_hi": ["Runned", "Ran", "Running", "Runs"],
        "answer_en": "Ran",
        "answer_hi": "Ran",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Choose the correct article: '___ apple a day keeps the doctor away.'",
        "question_hi": "सही article चुनें: '___ apple a day keeps the doctor away.'",
        "options_en": ["A", "An", "The", "No article"],
        "options_hi": ["A", "An", "The", "कोई article नहीं"],
        "answer_en": "An",
        "answer_hi": "An",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is the plural of 'child'?",
        "question_hi": "'child' का बहुवचन क्या है?",
        "options_en": ["Childs", "Children", "Childes", "Childern"],
        "options_hi": ["Childs", "Children", "Childes", "Childern"],
        "answer_en": "Children",
        "answer_hi": "Children",
        "attempted": false,
        "selected": ""
    },

    // Hindi - General (26-90)
    {
        "num": 26,
        "question_en": "'पुस्तक' का पर्यायवाची शब्द है:",
        "question_hi": "'पुस्तक' का पर्यायवाची शब्द है:",
        "options_en": ["किताब", "कलम", "मेज", "कुर्सी"],
        "options_hi": ["किताब", "कलम", "मेज", "कुर्सी"],
        "answer_en": "किताब",
        "answer_hi": "किताब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'राम पढ़ता है।' इस वाक्य में क्रिया है:",
        "question_hi": "'राम पढ़ता है।' इस वाक्य में क्रिया है:",
        "options_en": ["राम", "पढ़ता", "है", "पढ़ता है"],
        "options_hi": ["राम", "पढ़ता", "है", "पढ़ता है"],
        "answer_en": "पढ़ता है",
        "answer_hi": "पढ़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "'सूरज' का तत्सम रूप है:",
        "question_hi": "'सूरज' का तत्सम रूप है:",
        "options_en": ["सूर्य", "सुरज", "सूरजा", "सुर्य"],
        "options_hi": ["सूर्य", "सुरज", "सूरजा", "सुर्य"],
        "answer_en": "सूर्य",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'गाय' का बहुवचन है:",
        "question_hi": "'गाय' का बहुवचन है:",
        "options_en": ["गायें", "गाएं", "गायों", "गाये"],
        "options_hi": ["गायें", "गाएं", "गायों", "गाये"],
        "answer_en": "गायें",
        "answer_hi": "गायें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "'महात्मा गांधी' में कौन सा समास है?",
        "question_hi": "'महात्मा गांधी' में कौन सा समास है?",
        "options_en": ["कर्मधारय", "तत्पुरुष", "बहुव्रीहि", "द्विगु"],
        "options_hi": ["कर्मधारय", "तत्पुरुष", "बहुव्रीहि", "द्विगु"],
        "answer_en": "कर्मधारय",
        "answer_hi": "कर्मधारय",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (31-100)
    {
        "num": 31,
        "question_en": "The capital of India is:",
        "question_hi": "भारत की राजधानी है:",
        "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
        "answer_en": "Delhi",
        "answer_hi": "दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who is known as the Father of the Nation in India?",
        "question_hi": "भारत में राष्ट्रपिता के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh", "Sardar Patel"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "भगत सिंह", "सरदार पटेल"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The largest planet in our solar system is:",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह है:",
        "options_en": ["Earth", "Jupiter", "Saturn", "Mars"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The chemical symbol of Gold is:",
        "question_hi": "सोने का रासायनिक प्रतीक है:",
        "options_en": ["Go", "Gd", "Au", "Ag"],
        "options_hi": ["Go", "Gd", "Au", "Ag"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The longest river in the world is:",
        "question_hi": "दुनिया की सबसे लंबी नदी है:",
        "options_en": ["Amazon", "Nile", "Ganga", "Yangtze"],
        "options_hi": ["अमेज़न", "नील", "गंगा", "यांग्त्ज़ी"],
        "answer_en": "Nile",
        "answer_hi": "नील",
        "attempted": false,
        "selected": ""
    },

    // Additional Physics Questions (36-45)
    {
        "num": 36,
        "question_en": "The unit of force in SI system is:",
        "question_hi": "SI प्रणाली में बल की इकाई है:",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Ohm's law states that:",
        "question_hi": "ओम का नियम कहता है कि:",
        "options_en": ["V = IR", "I = VR", "R = VI", "V = I/R"],
        "options_hi": ["V = IR", "I = VR", "R = VI", "V = I/R"],
        "answer_en": "V = IR",
        "answer_hi": "V = IR",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The speed of light in vacuum is:",
        "question_hi": "निर्वात में प्रकाश की गति है:",
        "options_en": ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"],
        "options_hi": ["3×10⁶ m/s", "3×10⁸ m/s", "3×10¹⁰ m/s", "3×10¹² m/s"],
        "answer_en": "3×10⁸ m/s",
        "answer_hi": "3×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The law of conservation of energy states that:",
        "question_hi": "ऊर्जा संरक्षण का नियम कहता है कि:",
        "options_en": ["Energy can be created", "Energy can be destroyed", "Energy cannot be created or destroyed", "Energy decreases with time"],
        "options_hi": ["ऊर्जा उत्पन्न की जा सकती है", "ऊर्जा नष्ट की जा सकती है", "ऊर्जा न तो उत्पन्न की जा सकती है न नष्ट", "ऊर्जा समय के साथ घटती है"],
        "answer_en": "Energy cannot be created or destroyed",
        "answer_hi": "ऊर्जा न तो उत्पन्न की जा सकती है न नष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The SI unit of pressure is:",
        "question_hi": "दाब की SI इकाई है:",
        "options_en": ["Newton", "Joule", "Pascal", "Watt"],
        "options_hi": ["न्यूटन", "जूल", "पास्कल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },

    // Additional Chemistry Questions (41-50)
    {
        "num": 41,
        "question_en": "The atomic number of Carbon is:",
        "question_hi": "कार्बन की परमाणु संख्या है:",
        "options_en": ["6", "12", "14", "16"],
        "options_hi": ["6", "12", "14", "16"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which gas is known as laughing gas?",
        "question_hi": "किस गैस को हंसाने वाली गैस कहा जाता है?",
        "options_en": ["Oxygen", "Nitrogen", "Nitrous oxide", "Carbon dioxide"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड"],
        "answer_en": "Nitrous oxide",
        "answer_hi": "नाइट्रस ऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The formula of common salt is:",
        "question_hi": "साधारण नमक का सूत्र है:",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The process of conversion of solid to gas is called:",
        "question_hi": "ठोस से गैस में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Sublimation", "Evaporation", "Condensation", "Fusion"],
        "options_hi": ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "संलयन"],
        "answer_en": "Sublimation",
        "answer_hi": "उर्ध्वपातन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The most abundant gas in atmosphere is:",
        "question_hi": "वायुमंडल में सबसे अधिक मात्रा में पाई जाने वाली गैस है:",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },

    // Additional Mathematics Questions (46-55)
    {
        "num": 46,
        "question_en": "The value of π is approximately:",
        "question_hi": "π का मान लगभग है:",
        "options_en": ["3.14", "2.71", "1.41", "1.73"],
        "options_hi": ["3.14", "2.71", "1.41", "1.73"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The area of a circle with radius r is:",
        "question_hi": "त्रिज्या r वाले वृत्त का क्षेत्रफल है:",
        "options_en": ["2πr", "πr²", "4πr²", "πr"],
        "options_hi": ["2πr", "πr²", "4πr²", "πr"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The sum of angles in a triangle is:",
        "question_hi": "एक त्रिभुज में कोणों का योग है:",
        "options_en": ["90°", "180°", "270°", "360°"],
        "options_hi": ["90°", "180°", "270°", "360°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The value of 5! (5 factorial) is:",
        "question_hi": "5! (5 फैक्टोरियल) का मान है:",
        "options_en": ["20", "60", "120", "240"],
        "options_hi": ["20", "60", "120", "240"],
        "answer_en": "120",
        "answer_hi": "120",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The Pythagorean theorem applies to:",
        "question_hi": "पाइथागोरस प्रमेय लागू होता है:",
        "options_en": ["All triangles", "Right triangles", "Equilateral triangles", "Isosceles triangles"],
        "options_hi": ["सभी त्रिभुजों", "समकोण त्रिभुजों", "समबाहु त्रिभुजों", "समद्विबाहु त्रिभुजों"],
        "answer_en": "Right triangles",
        "answer_hi": "समकोण त्रिभुजों",
        "attempted": false,
        "selected": ""
    },

    // Additional Biology Questions (56-65)
    {
        "num": 51,
        "question_en": "The process of cell division is called:",
        "question_hi": "कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Both A and B", "None of these"],
        "options_hi": ["माइटोसिस", "मियोसिस", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The red color of blood is due to:",
        "question_hi": "रक्त का लाल रंग किसके कारण होता है:",
        "options_en": ["Hemoglobin", "Plasma", "White blood cells", "Platelets"],
        "options_hi": ["हीमोग्लोबिन", "प्लाज्मा", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स"],
        "answer_en": "Hemoglobin",
        "answer_hi": "हीमोग्लोबिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
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
        "num": 54,
        "question_en": "Plants make their food through:",
        "question_hi": "पौधे अपना भोजन बनाते हैं:",
        "options_en": ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "पाचन", "वाष्पोत्सर्जन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The number of chromosomes in human beings is:",
        "question_hi": "मनुष्यों में गुणसूत्रों की संख्या है:",
        "options_en": ["23", "46", "48", "50"],
        "options_hi": ["23", "46", "48", "50"],
        "answer_en": "46",
        "answer_hi": "46",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (56-100)
    {
        "num": 56,
        "question_en": "The first law of thermodynamics is based on:",
        "question_hi": "ऊष्मागतिकी का प्रथम नियम आधारित है:",
        "options_en": ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Conservation of charge"],
        "options_hi": ["द्रव्यमान संरक्षण", "ऊर्जा संरक्षण", "संवेग संरक्षण", "आवेश संरक्षण"],
        "answer_en": "Conservation of energy",
        "answer_hi": "ऊर्जा संरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन सी उत्कृष्ट गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Helium", "Chlorine"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "हीलियम", "क्लोरीन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The value of log₁₀100 is:",
        "question_hi": "log₁₀100 का मान है:",
        "options_en": ["1", "2", "10", "100"],
        "options_hi": ["1", "2", "10", "100"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The human heart has ___ chambers.",
        "question_hi": "मानव हृदय में ___ कक्ष होते हैं।",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The chemical formula of water is:",
        "question_hi": "पानी का रासायनिक सूत्र है:",
        "options_en": ["H₂O", "HO₂", "H₂O₂", "HO"],
        "options_hi": ["H₂O", "HO₂", "H₂O₂", "HO"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
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
        "num": 62,
        "question_en": "The atomic mass of Hydrogen is approximately:",
        "question_hi": "हाइड्रोजन का परमाणु द्रव्यमान लगभग है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The value of (a+b)² is:",
        "question_hi": "(a+b)² का मान है:",
        "options_en": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b² - 2ab"],
        "options_hi": ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² + b² - 2ab"],
        "answer_en": "a² + 2ab + b²",
        "answer_hi": "a² + 2ab + b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The process of breathing in humans is called:",
        "question_hi": "मनुष्यों में सांस लेने की प्रक्रिया कहलाती है:",
        "options_en": ["Respiration", "Inspiration", "Expiration", "Both B and C"],
        "options_hi": ["श्वसन", "अन्तःश्वसन", "निःश्वसन", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The force of attraction between two masses is given by:",
        "question_hi": "दो द्रव्यमानों के बीच आकर्षण बल दिया जाता है:",
        "options_en": ["Newton's first law", "Newton's second law", "Newton's third law", "Newton's law of gravitation"],
        "options_hi": ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "न्यूटन का गुरुत्वाकर्षण नियम"],
        "answer_en": "Newton's law of gravitation",
        "answer_hi": "न्यूटन का गुरुत्वाकर्षण नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The element with symbol 'Fe' is:",
        "question_hi": "प्रतीक 'Fe' वाला तत्व है:",
        "options_en": ["Iron", "Fluorine", "Francium", "Fermium"],
        "options_hi": ["आयरन", "फ्लोरीन", "फ्रेंशियम", "फर्मियम"],
        "answer_en": "Iron",
        "answer_hi": "आयरन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
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
        "num": 68,
        "question_en": "The smallest bone in human body is in the:",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी है:",
        "options_en": ["Hand", "Foot", "Ear", "Nose"],
        "options_hi": ["हाथ", "पैर", "कान", "नाक"],
        "answer_en": "Ear",
        "answer_hi": "कान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
        "question_en": "The process of rusting of iron involves:",
        "question_hi": "लोहे के जंग लगने की प्रक्रिया में शामिल है:",
        "options_en": ["Reduction", "Oxidation", "Neutralization", "Sublimation"],
        "options_hi": ["अपचयन", "ऑक्सीकरण", "उदासीनीकरण", "उर्ध्वपातन"],
        "answer_en": "Oxidation",
        "answer_hi": "ऑक्सीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The sum of first n natural numbers is:",
        "question_hi": "प्रथम n प्राकृतिक संख्याओं का योग है:",
        "options_en": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "options_hi": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "answer_en": "n(n+1)/2",
        "answer_hi": "n(n+1)/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The vitamin responsible for blood clotting is:",
        "question_hi": "रक्त के थक्के जमने के लिए जिम्मेदार विटामिन है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The SI unit of frequency is:",
        "question_hi": "आवृत्ति की SI इकाई है:",
        "options_en": ["Hertz", "Decibel", "Watt", "Joule"],
        "options_hi": ["हर्ट्ज", "डेसीबल", "वाट", "जूल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The chemical used in photography is:",
        "question_hi": "फोटोग्राफी में प्रयुक्त रसायन है:",
        "options_en": ["Silver bromide", "Sodium chloride", "Potassium nitrate", "Calcium carbonate"],
        "options_hi": ["सिल्वर ब्रोमाइड", "सोडियम क्लोराइड", "पोटैशियम नाइट्रेट", "कैल्शियम कार्बोनेट"],
        "answer_en": "Silver bromide",
        "answer_hi": "सिल्वर ब्रोमाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The perimeter of a square with side 'a' is:",
        "question_hi": "भुजा 'a' वाले वर्ग का परिमाप है:",
        "options_en": ["a", "2a", "3a", "4a"],
        "options_hi": ["a", "2a", "3a", "4a"],
        "answer_en": "4a",
        "answer_hi": "4a",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The part of plant that conducts water is:",
        "question_hi": "पौधे का वह भाग जो जल का संवहन करता है:",
        "options_en": ["Xylem", "Phloem", "Root", "Leaf"],
        "options_hi": ["जाइलम", "फ्लोएम", "जड़", "पत्ती"],
        "answer_en": "Xylem",
        "answer_hi": "जाइलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The mirror used in vehicles to see the traffic behind is:",
        "question_hi": "वाहनों में पीछे के यातायात को देखने के लिए प्रयुक्त दर्पण है:",
        "options_en": ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
        "options_hi": ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
        "answer_en": "Convex mirror",
        "answer_hi": "उत्तल दर्पण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The gas released during photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण के दौरान मुक्त होने वाली गैस है:",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The value of 2³ × 3² is:",
        "question_hi": "2³ × 3² का मान है:",
        "options_en": ["12", "24", "36", "72"],
        "options_hi": ["12", "24", "36", "72"],
        "answer_en": "72",
        "answer_hi": "72",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The metal present in hemoglobin is:",
        "question_hi": "हीमोग्लोबिन में उपस्थित धातु है:",
        "options_en": ["Iron", "Copper", "Zinc", "Magnesium"],
        "options_hi": ["आयरन", "कॉपर", "जिंक", "मैग्नीशियम"],
        "answer_en": "Iron",
        "answer_hi": "आयरन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The unit of work is same as unit of:",
        "question_hi": "कार्य की इकाई समान है इकाई के:",
        "options_en": ["Force", "Energy", "Power", "Pressure"],
        "options_hi": ["बल", "ऊर्जा", "शक्ति", "दाब"],
        "answer_en": "Energy",
        "answer_hi": "ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The acid present in vinegar is:",
        "question_hi": "सिरका में उपस्थित अम्ल है:",
        "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"],
        "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The value of √144 is:",
        "question_hi": "√144 का मान है:",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The process of formation of urine is called:",
        "question_hi": "मूत्र के निर्माण की प्रक्रिया कहलाती है:",
        "options_en": ["Digestion", "Respiration", "Excretion", "Circulation"],
        "options_hi": ["पाचन", "श्वसन", "उत्सर्जन", "परिसंचरण"],
        "answer_en": "Excretion",
        "answer_hi": "उत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The lens used to correct myopia is:",
        "question_hi": "निकट दृष्टि दोष को सही करने के लिए प्रयुक्त लेंस है:",
        "options_en": ["Convex", "Concave", "Cylindrical", "Bifocal"],
        "options_hi": ["उत्तल", "अवतल", "बेलनाकार", "द्विफोकसी"],
        "answer_en": "Concave",
        "answer_hi": "अवतल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
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
        "num": 87,
        "question_en": "The value of (3⁴) is:",
        "question_hi": "(3⁴) का मान है:",
        "options_en": ["12", "27", "64", "81"],
        "options_hi": ["12", "27", "64", "81"],
        "answer_en": "81",
        "answer_hi": "81",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The organ that produces insulin is:",
        "question_hi": "वह अंग जो इंसुलिन उत्पन्न करता है:",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "आमाशय"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The device that converts mechanical energy to electrical energy is:",
        "question_hi": "वह उपकरण जो यांत्रिक ऊर्जा को विद्युत ऊर्जा में परिवर्तित करता है:",
        "options_en": ["Motor", "Generator", "Transformer", "Rectifier"],
        "options_hi": ["मोटर", "जनरेटर", "ट्रांसफॉर्मर", "रेक्टिफायर"],
        "answer_en": "Generator",
        "answer_hi": "जनरेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The pH of pure water is:",
        "question_hi": "शुद्ध जल का pH है:",
        "options_en": ["0", "7", "14", "1"],
        "options_hi": ["0", "7", "14", "1"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The sum of interior angles of a quadrilateral is:",
        "question_hi": "एक चतुर्भुज के आंतरिक कोणों का योग है:",
        "options_en": ["180°", "270°", "360°", "450°"],
        "options_hi": ["180°", "270°", "360°", "450°"],
        "answer_en": "360°",
        "answer_hi": "360°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The gas used in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में प्रयुक्त गैस है:",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The unit of electric charge is:",
        "question_hi": "विद्युत आवेश की इकाई है:",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलॉम", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The chemical name of baking soda is:",
        "question_hi": "बेकिंग सोडा का रासायनिक नाम है:",
        "options_en": ["Sodium carbonate", "Sodium bicarbonate", "Sodium hydroxide", "Sodium chloride"],
        "options_hi": ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The value of 0! (zero factorial) is:",
        "question_hi": "0! (शून्य फैक्टोरियल) का मान है:",
        "options_en": ["0", "1", "Undefined", "Infinity"],
        "options_hi": ["0", "1", "अपरिभाषित", "अनंत"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The process of conversion of sugar to alcohol is called:",
        "question_hi": "शर्करा को अल्कोहल में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Fermentation", "Distillation", "Evaporation", "Sublimation"],
        "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "उर्ध्वपातन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The SI unit of temperature is:",
        "question_hi": "तापमान की SI इकाई है:",
        "options_en": ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
        "options_hi": ["सेल्सियस", "फारेनहाइट", "केल्विन", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The element with atomic number 1 is:",
        "question_hi": "परमाणु संख्या 1 वाला तत्व है:",
        "options_en": ["Helium", "Hydrogen", "Lithium", "Oxygen"],
        "options_hi": ["हीलियम", "हाइड्रोजन", "लिथियम", "ऑक्सीजन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The area of a triangle with base b and height h is:",
        "question_hi": "आधार b और ऊंचाई h वाले त्रिभुज का क्षेत्रफल है:",
        "options_en": ["bh", "½bh", "2bh", "¼bh"],
        "options_hi": ["bh", "½bh", "2bh", "¼bh"],
        "answer_en": "½bh",
        "answer_hi": "½bh",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The blood vessels that carry blood away from heart are:",
        "question_hi": "वे रक्त वाहिकाएं जो हृदय से रक्त ले जाती हैं:",
        "options_en": ["Veins", "Arteries", "Capillaries", "All of these"],
        "options_hi": ["शिराएं", "धमनियां", "केशिकाएं", "उपरोक्त सभी"],
        "answer_en": "Arteries",
        "answer_hi": "धमनियां",
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