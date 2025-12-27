const questions = [
    // Physics - Modern Physics & Electronics (1-20)
    {
        "num": 1,
        "question_en": "The photoelectric effect demonstrates the:",
        "question_hi": "प्रकाश विद्युत प्रभाव प्रदर्शित करता है:",
        "options_en": ["Wave nature of light", "Particle nature of light", "Dual nature of light", "None of these"],
        "options_hi": ["प्रकाश की तरंग प्रकृति", "प्रकाश की कण प्रकृति", "प्रकाश की द्वैत प्रकृति", "इनमें से कोई नहीं"],
        "answer_en": "Particle nature of light",
        "answer_hi": "प्रकाश की कण प्रकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "In a p-n junction diode, the forward bias condition is when:",
        "question_hi": "p-n संधि डायोड में, अग्र अभिनति स्थिति तब होती है जब:",
        "options_en": ["p-side is at higher potential", "n-side is at higher potential", "Both sides at same potential", "Depletion layer widens"],
        "options_hi": ["p-साइड उच्च विभव पर हो", "n-साइड उच्च विभव पर हो", "दोनों साइड समान विभव पर हों", "अवक्षय परत चौड़ी हो जाए"],
        "answer_en": "p-side is at higher potential",
        "answer_hi": "p-साइड उच्च विभव पर हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The de Broglie wavelength associated with an electron accelerated through V volts is:",
        "question_hi": "V वोल्ट से त्वरित इलेक्ट्रॉन से संबद्ध डी ब्रोगली तरंगदैर्ध्य है:",
        "options_en": ["λ = h/√(2meV)", "λ = h/√(meV)", "λ = h/(2meV)", "λ = √(h/2meV)"],
        "options_hi": ["λ = h/√(2meV)", "λ = h/√(meV)", "λ = h/(2meV)", "λ = √(h/2meV)"],
        "answer_en": "λ = h/√(2meV)",
        "answer_hi": "λ = h/√(2meV)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In a common emitter amplifier, the phase difference between input and output voltages is:",
        "question_hi": "उभयनिष्ठ उत्सर्जक प्रवर्धक में, निवेश और निर्गत वोल्टेज के बीच कलांतर है:",
        "options_en": ["0°", "90°", "180°", "270°"],
        "options_hi": ["0°", "90°", "180°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The half-life of a radioactive substance is 10 hours. What fraction remains undecayed after 30 hours?",
        "question_hi": "एक रेडियोधर्मी पदार्थ का अर्ध-जीवन 10 घंटे है। 30 घंटे के बाद कितना अंश अक्षय रहता है?",
        "options_en": ["1/2", "1/4", "1/8", "1/16"],
        "options_hi": ["1/2", "1/4", "1/8", "1/16"],
        "answer_en": "1/8",
        "answer_hi": "1/8",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Organic Chemistry & Biomolecules (6-40)
    {
        "num": 6,
        "question_en": "Which of the following is an example of nucleophilic substitution reaction?",
        "question_hi": "निम्नलिखित में से कौन सा नाभिकरागी प्रतिस्थापन अभिक्रिया का उदाहरण है?",
        "options_en": ["CH₄ + Cl₂ → CH₃Cl + HCl", "CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻", "C₂H₄ + H₂ → C₂H₆", "C₆H₆ + Cl₂ → C₆H₅Cl + HCl"],
        "options_hi": ["CH₄ + Cl₂ → CH₃Cl + HCl", "CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻", "C₂H₄ + H₂ → C₂H₆", "C₆H₆ + Cl₂ → C₆H₅Cl + HCl"],
        "answer_en": "CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻",
        "answer_hi": "CH₃CH₂Br + OH⁻ → CH₃CH₂OH + Br⁻",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Glucose and fructose are:",
        "question_hi": "ग्लूकोज और फ्रक्टोज हैं:",
        "options_en": ["Functional isomers", "Chain isomers", "Position isomers", "Optical isomers"],
        "options_hi": ["कार्यात्मक समावयवी", "श्रृंखला समावयवी", "स्थिति समावयवी", "प्रकाशिक समावयवी"],
        "answer_en": "Functional isomers",
        "answer_hi": "कार्यात्मक समावयवी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In DNA, the complementary base pairing is:",
        "question_hi": "DNA में, पूरक क्षारक युग्मन है:",
        "options_en": ["A-T and G-C", "A-G and T-C", "A-C and G-T", "A-U and G-C"],
        "options_hi": ["A-T और G-C", "A-G और T-C", "A-C और G-T", "A-U और G-C"],
        "answer_en": "A-T and G-C",
        "answer_hi": "A-T और G-C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The IUPAC name of CH₃-CH₂-CHO is:",
        "question_hi": "CH₃-CH₂-CHO का IUPAC नाम है:",
        "options_en": ["Propanal", "Propanone", "Ethanal", "Butanal"],
        "options_hi": ["प्रोपेनल", "प्रोपेनोन", "एथेनल", "ब्यूटेनल"],
        "answer_en": "Propanal",
        "answer_hi": "प्रोपेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which vitamin is fat-soluble?",
        "question_hi": "कौन सा विटामिन वसा-घुलनशील है?",
        "options_en": ["Vitamin B", "Vitamin C", "Vitamin D", "Vitamin B12"],
        "options_hi": ["विटामिन B", "विटामिन C", "विटामिन D", "विटामिन B12"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Calculus & Coordinate Geometry (11-60)
    {
        "num": 11,
        "question_en": "The derivative of ln(x) with respect to x is:",
        "question_hi": "ln(x) का x के सापेक्ष अवकलज है:",
        "options_en": ["1/x", "x", "e^x", "1"],
        "options_hi": ["1/x", "x", "e^x", "1"],
        "answer_en": "1/x",
        "answer_hi": "1/x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The equation of circle with center (2,3) and radius 4 is:",
        "question_hi": "केंद्र (2,3) और त्रिज्या 4 वाले वृत्त का समीकरण है:",
        "options_en": ["(x-2)² + (y-3)² = 16", "(x+2)² + (y+3)² = 16", "(x-2)² + (y-3)² = 4", "(x+2)² + (y+3)² = 4"],
        "options_hi": ["(x-2)² + (y-3)² = 16", "(x+2)² + (y+3)² = 16", "(x-2)² + (y-3)² = 4", "(x+2)² + (y+3)² = 4"],
        "answer_en": "(x-2)² + (y-3)² = 16",
        "answer_hi": "(x-2)² + (y-3)² = 16",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The value of ∫(e^x + sinx) dx is:",
        "question_hi": "∫(e^x + sinx) dx का मान है:",
        "options_en": ["e^x + cosx + C", "e^x - cosx + C", "e^x + sinx + C", "e^x - sinx + C"],
        "options_hi": ["e^x + cosx + C", "e^x - cosx + C", "e^x + sinx + C", "e^x - sinx + C"],
        "answer_en": "e^x - cosx + C",
        "answer_hi": "e^x - cosx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The focus of parabola y² = 4ax is:",
        "question_hi": "परवलय y² = 4ax का फोकस है:",
        "options_en": ["(a,0)", "(-a,0)", "(0,a)", "(0,-a)"],
        "options_hi": ["(a,0)", "(-a,0)", "(0,a)", "(0,-a)"],
        "answer_en": "(a,0)",
        "answer_hi": "(a,0)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "If A and B are two sets such that n(A) = 5, n(B) = 7 and n(A∩B) = 3, then n(A∪B) is:",
        "question_hi": "यदि A और B दो समुच्चय इस प्रकार हैं कि n(A) = 5, n(B) = 7 और n(A∩B) = 3, तो n(A∪B) है:",
        "options_en": ["9", "12", "15", "8"],
        "options_hi": ["9", "12", "15", "8"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics & Evolution (16-80)
    {
        "num": 16,
        "question_en": "The theory of natural selection was proposed by:",
        "question_hi": "प्राकृतिक वरण का सिद्धांत प्रस्तावित किया गया था:",
        "options_en": ["Gregor Mendel", "Charles Darwin", "Louis Pasteur", "James Watson"],
        "options_hi": ["ग्रेगर मेंडल", "चार्ल्स डार्विन", "लुई पाश्चर", "जेम्स वाटसन"],
        "answer_en": "Charles Darwin",
        "answer_hi": "चार्ल्स डार्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "In humans, males have which sex chromosomes?",
        "question_hi": "मनुष्यों में, नर में कौन से लिंग गुणसूत्र होते हैं?",
        "options_en": ["XX", "XY", "YY", "XO"],
        "options_hi": ["XX", "XY", "YY", "XO"],
        "answer_en": "XY",
        "answer_hi": "XY",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The process of copying DNA is called:",
        "question_hi": "DNA की प्रतिलिपि बनाने की प्रक्रिया कहलाती है:",
        "options_en": ["Transcription", "Translation", "Replication", "Mutation"],
        "options_hi": ["प्रतिलेखन", "अनुवाद", "प्रतिकृति", "उत्परिवर्तन"],
        "answer_en": "Replication",
        "answer_hi": "प्रतिकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which of the following is a vestigial organ in humans?",
        "question_hi": "निम्नलिखित में से कौन सा मनुष्य में अवशेषी अंग है?",
        "options_en": ["Appendix", "Heart", "Liver", "Lungs"],
        "options_hi": ["अपेंडिक्स", "हृदय", "यकृत", "फेफड़े"],
        "answer_en": "Appendix",
        "answer_hi": "अपेंडिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The process by which plants lose water is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे पानी खोते हैं, कहलाती है:",
        "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Digestion"],
        "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "पाचन"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },

    // English - Grammar & Vocabulary (21-85)
    {
        "num": 21,
        "question_en": "Choose the correct passive voice: 'They built this house in 1990.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'They built this house in 1990.'",
        "options_en": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built by them in 1990", "This house has been built in 1990"],
        "options_hi": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built by them in 1990", "This house has been built in 1990"],
        "answer_en": "This house was built in 1990 by them",
        "answer_hi": "This house was built in 1990 by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "Identify the type of sentence: 'What a beautiful painting!'",
        "question_hi": "वाक्य का प्रकार पहचानें: 'What a beautiful painting!'",
        "options_en": ["Declarative", "Interrogative", "Exclamatory", "Imperative"],
        "options_hi": ["विधानसूचक", "प्रश्नवाचक", "विस्मयसूचक", "आदेशसूचक"],
        "answer_en": "Exclamatory",
        "answer_hi": "विस्मयसूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Choose the correct preposition: 'He is good ___ Mathematics.'",
        "question_hi": "सही पूर्वसर्ग चुनें: 'He is good ___ Mathematics.'",
        "options_en": ["in", "at", "for", "with"],
        "options_hi": ["in", "at", "for", "with"],
        "answer_en": "at",
        "answer_hi": "at",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The plural of 'criterion' is:",
        "question_hi": "'criterion' का बहुवचन है:",
        "options_en": ["Criterions", "Criteria", "Criterium", "Criterias"],
        "options_hi": ["Criterions", "Criteria", "Criterium", "Criterias"],
        "answer_en": "Criteria",
        "answer_hi": "Criteria",
        "attempted": false,
        "selected": ""
    },

    // Hindi - व्याकरण और साहित्य (26-90)
    {
        "num": 26,
        "question_en": "'गद्य' का विलोम शब्द है:",
        "question_hi": "'गद्य' का विलोम शब्द है:",
        "options_en": ["पद्य", "काव्य", "गीत", "कविता"],
        "options_hi": ["पद्य", "काव्य", "गीत", "कविता"],
        "answer_en": "पद्य",
        "answer_hi": "पद्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'रामायण' के रचयिता हैं:",
        "question_hi": "'रामायण' के रचयिता हैं:",
        "options_en": ["वेद व्यास", "तुलसीदास", "वाल्मीकि", "कालिदास"],
        "options_hi": ["वेद व्यास", "तुलसीदास", "वाल्मीकि", "कालिदास"],
        "answer_en": "वाल्मीकि",
        "answer_hi": "वाल्मीकि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "'सूर्य' का पर्यायवाची शब्द नहीं है:",
        "question_hi": "'सूर्य' का पर्यायवाची शब्द नहीं है:",
        "options_en": ["दिनकर", "रवि", "चंद्र", "भास्कर"],
        "options_hi": ["दिनकर", "रवि", "चंद्र", "भास्कर"],
        "answer_en": "चंद्र",
        "answer_hi": "चंद्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'वह पुस्तक पढ़ रहा है।' इस वाक्य में कर्म है:",
        "question_hi": "'वह पुस्तक पढ़ रहा है।' इस वाक्य में कर्म है:",
        "options_en": ["वह", "पुस्तक", "पढ़ रहा है", "है"],
        "options_hi": ["वह", "पुस्तक", "पढ़ रहा है", "है"],
        "answer_en": "पुस्तक",
        "answer_hi": "पुस्तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "'अति' उपसर्ग से बना शब्द है:",
        "question_hi": "'अति' उपसर्ग से बना शब्द है:",
        "options_en": ["अतिथि", "अतिरिक्त", "अत्यंत", "अतिशय"],
        "options_hi": ["अतिथि", "अतिरिक्त", "अत्यंत", "अतिशय"],
        "answer_en": "अतिरिक्त",
        "answer_hi": "अतिरिक्त",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (31-100)
    {
        "num": 31,
        "question_en": "The first artificial satellite launched into space was:",
        "question_hi": "अंतरिक्ष में प्रक्षेपित पहला कृत्रिम उपग्रह था:",
        "options_en": ["Aryabhata", "Sputnik 1", "Explorer 1", "Hubble"],
        "options_hi": ["आर्यभट्ट", "स्पुतनिक 1", "एक्सप्लोरर 1", "हबल"],
        "answer_en": "Sputnik 1",
        "answer_hi": "स्पुतनिक 1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The device used to measure earthquake intensity is:",
        "question_hi": "भूकंप की तीव्रता मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Seismograph", "Barometer", "Thermometer", "Hygrometer"],
        "options_hi": ["सिस्मोग्राफ", "बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
        "answer_en": "Seismograph",
        "answer_hi": "सिस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The study of fossils is called:",
        "question_hi": "जीवाश्मों का अध्ययन कहलाता है:",
        "options_en": ["Paleontology", "Archaeology", "Geology", "Anthropology"],
        "options_hi": ["पुराजीवविज्ञान", "पुरातत्व", "भूविज्ञान", "मानवविज्ञान"],
        "answer_en": "Paleontology",
        "answer_hi": "पुराजीवविज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The SI unit of luminous intensity is:",
        "question_hi": "ज्योति तीव्रता की SI इकाई है:",
        "options_en": ["Lumen", "Candela", "Lux", "Watt"],
        "options_hi": ["लुमेन", "कैंडेला", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The programming language used for artificial intelligence is:",
        "question_hi": "कृत्रिम बुद्धिमत्ता के लिए प्रयुक्त प्रोग्रामिंग भाषा है:",
        "options_en": ["Python", "Java", "C++", "Pascal"],
        "options_hi": ["पायथन", "जावा", "C++", "पास्कल"],
        "answer_en": "Python",
        "answer_hi": "पायथन",
        "attempted": false,
        "selected": ""
    },

    // Additional Physics - Thermodynamics & Optics (36-45)
    {
        "num": 36,
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
        "num": 37,
        "question_en": "The critical angle for glass-air interface is 42°. What is the refractive index of glass?",
        "question_hi": "कांच-वायु अंतरापृष्ठ के लिए क्रांतिक कोण 42° है। कांच का अपवर्तनांक क्या है?",
        "options_en": ["1.5", "1.6", "1.7", "1.8"],
        "options_hi": ["1.5", "1.6", "1.7", "1.8"],
        "answer_en": "1.5",
        "answer_hi": "1.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "In isothermal process, the temperature of the system:",
        "question_hi": "समतापी प्रक्रम में, निकाय का तापमान:",
        "options_en": ["Increases", "Decreases", "Remains constant", "First increases then decreases"],
        "options_hi": ["बढ़ता है", "घटता है", "स्थिर रहता है", "पहले बढ़ता है फिर घटता है"],
        "answer_en": "Remains constant",
        "answer_hi": "स्थिर रहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The power of a lens is +2D. Its focal length is:",
        "question_hi": "एक लेंस की क्षमता +2D है। इसकी फोकस दूरी है:",
        "options_en": ["+0.5 m", "+2 m", "-0.5 m", "-2 m"],
        "options_hi": ["+0.5 m", "+2 m", "-0.5 m", "-2 m"],
        "answer_en": "+0.5 m",
        "answer_hi": "+0.5 m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "In Young's double slit experiment, if the slit separation is doubled, the fringe width:",
        "question_hi": "यंग के द्वि-छिद्र प्रयोग में, यदि छिद्र पृथक्करण दोगुना कर दिया जाए, तो फ्रिंज चौड़ाई:",
        "options_en": ["Doubles", "Halves", "Quadruples", "Remains same"],
        "options_hi": ["दोगुनी हो जाती है", "आधी हो जाती है", "चौगुनी हो जाती है", "समान रहती है"],
        "answer_en": "Halves",
        "answer_hi": "आधी हो जाती है",
        "attempted": false,
        "selected": ""
    },

    // Additional Chemistry - Electrochemistry & Solutions (41-50)
    {
        "num": 41,
        "question_en": "In electrochemical cells, oxidation occurs at:",
        "question_hi": "विद्युत रासायनिक सेलों में, ऑक्सीकरण होता है:",
        "options_en": ["Anode", "Cathode", "Both electrodes", "Salt bridge"],
        "options_hi": ["एनोड", "कैथोड", "दोनों इलेक्ट्रोड", "लवण सेतु"],
        "answer_en": "Anode",
        "answer_hi": "एनोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The boiling point elevation constant for water is:",
        "question_hi": "जल के लिए क्वथनांक उन्नयन स्थिरांक है:",
        "options_en": ["0.512 K kg mol⁻¹", "1.86 K kg mol⁻¹", "2.53 K kg mol⁻¹", "3.63 K kg mol⁻¹"],
        "options_hi": ["0.512 K kg mol⁻¹", "1.86 K kg mol⁻¹", "2.53 K kg mol⁻¹", "3.63 K kg mol⁻¹"],
        "answer_en": "0.512 K kg mol⁻¹",
        "answer_hi": "0.512 K kg mol⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The standard hydrogen electrode has a potential of:",
        "question_hi": "मानक हाइड्रोजन इलेक्ट्रोड का विभव है:",
        "options_en": ["0.00 V", "1.00 V", "-1.00 V", "2.00 V"],
        "options_hi": ["0.00 V", "1.00 V", "-1.00 V", "2.00 V"],
        "answer_en": "0.00 V",
        "answer_hi": "0.00 V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which of the following is a strong electrolyte?",
        "question_hi": "निम्नलिखित में से कौन सा प्रबल विद्युत अपघट्य है?",
        "options_en": ["Acetic acid", "Sodium chloride", "Ammonia", "Water"],
        "options_hi": ["एसिटिक अम्ल", "सोडियम क्लोराइड", "अमोनिया", "जल"],
        "answer_en": "Sodium chloride",
        "answer_hi": "सोडियम क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The pH of a solution with [H⁺] = 10⁻³ M is:",
        "question_hi": "[H⁺] = 10⁻³ M वाले विलयन का pH है:",
        "options_en": ["3", "7", "10", "11"],
        "options_hi": ["3", "7", "10", "11"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },

    // Additional Mathematics - Probability & Statistics (46-55)
    {
        "num": 46,
        "question_en": "The probability of getting a head in single toss of a fair coin is:",
        "question_hi": "एक निष्पक्ष सिक्के के एक उछाल में हेड आने की प्रायिकता है:",
        "options_en": ["0", "0.25", "0.5", "1"],
        "options_hi": ["0", "0.25", "0.5", "1"],
        "answer_en": "0.5",
        "answer_hi": "0.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The mean of first 10 natural numbers is:",
        "question_hi": "प्रथम 10 प्राकृतिक संख्याओं का माध्य है:",
        "options_en": ["5", "5.5", "6", "6.5"],
        "options_hi": ["5", "5.5", "6", "6.5"],
        "answer_en": "5.5",
        "answer_hi": "5.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "If P(A) = 0.3 and P(B) = 0.4, and A and B are independent, then P(A∩B) is:",
        "question_hi": "यदि P(A) = 0.3 और P(B) = 0.4, और A और B स्वतंत्र हैं, तो P(A∩B) है:",
        "options_en": ["0.12", "0.7", "0.1", "1.2"],
        "options_hi": ["0.12", "0.7", "0.1", "1.2"],
        "answer_en": "0.12",
        "answer_hi": "0.12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The variance of data set 2,4,6,8,10 is:",
        "question_hi": "डेटा सेट 2,4,6,8,10 का प्रसरण है:",
        "options_en": ["4", "6", "8", "10"],
        "options_hi": ["4", "6", "8", "10"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "If two dice are thrown, the probability of getting sum 7 is:",
        "question_hi": "यदि दो पासे फेंके जाते हैं, तो योग 7 प्राप्त होने की प्रायिकता है:",
        "options_en": ["1/6", "1/12", "1/18", "1/36"],
        "options_hi": ["1/6", "1/12", "1/18", "1/36"],
        "answer_en": "1/6",
        "answer_hi": "1/6",
        "attempted": false,
        "selected": ""
    },

    // Additional Biology - Human Physiology (51-60)
    {
        "num": 51,
        "question_en": "The enzyme pepsin is active in:",
        "question_hi": "एंजाइम पेप्सिन सक्रिय होता है:",
        "options_en": ["Mouth", "Stomach", "Small intestine", "Large intestine"],
        "options_hi": ["मुंह", "आमाशय", "छोटी आंत", "बड़ी आंत"],
        "answer_en": "Stomach",
        "answer_hi": "आमाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The normal blood pressure in humans is about:",
        "question_hi": "मनुष्यों में सामान्य रक्तचाप लगभग होता है:",
        "options_en": ["80/120 mmHg", "120/80 mmHg", "100/60 mmHg", "140/90 mmHg"],
        "options_hi": ["80/120 mmHg", "120/80 mmHg", "100/60 mmHg", "140/90 mmHg"],
        "answer_en": "120/80 mmHg",
        "answer_hi": "120/80 mmHg",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The hormone insulin is produced by:",
        "question_hi": "हार्मोन इंसुलिन उत्पन्न होता है:",
        "options_en": ["Pancreas", "Liver", "Kidney", "Thyroid"],
        "options_hi": ["अग्न्याशय", "यकृत", "गुर्दा", "थायरॉयड"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The functional unit of kidney is:",
        "question_hi": "गुर्दे की कार्यात्मक इकाई है:",
        "options_en": ["Neuron", "Nephron", "Alveoli", "Villi"],
        "options_hi": ["न्यूरॉन", "नेफ्रॉन", "वायुकोश", "अंकुर"],
        "answer_en": "Nephron",
        "answer_hi": "नेफ्रॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The process of breakdown of glucose to release energy is called:",
        "question_hi": "ग्लूकोज के टूटने से ऊर्जा मुक्त करने की प्रक्रिया कहलाती है:",
        "options_en": ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "पाचन", "वाष्पोत्सर्जन"],
        "answer_en": "Respiration",
        "answer_hi": "श्वसन",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (56-100)
    {
        "num": 56,
        "question_en": "The magnetic quantum number determines:",
        "question_hi": "चुंबकीय क्वांटम संख्या निर्धारित करती है:",
        "options_en": ["Shape of orbital", "Orientation of orbital", "Size of orbital", "Energy of orbital"],
        "options_hi": ["कक्षक का आकार", "कक्षक का अभिविन्यास", "कक्षक का आकार", "कक्षक की ऊर्जा"],
        "answer_en": "Orientation of orbital",
        "answer_hi": "कक्षक का अभिविन्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The compound [Co(NH₃)₆]Cl₃ is called:",
        "question_hi": "यौगिक [Co(NH₃)₆]Cl₃ कहलाता है:",
        "options_en": ["Hexaamminecobalt(III) chloride", "Cobalt hexaammine chloride", "Ammonium cobalt chloride", "Cobalt amine chloride"],
        "options_hi": ["हेक्साएमीनकोबाल्ट(III) क्लोराइड", "कोबाल्ट हेक्साएमीन क्लोराइड", "अमोनियम कोबाल्ट क्लोराइड", "कोबाल्ट एमीन क्लोराइड"],
        "answer_en": "Hexaamminecobalt(III) chloride",
        "answer_hi": "हेक्साएमीनकोबाल्ट(III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The value of lim(x→0) (sinx/x) is:",
        "question_hi": "lim(x→0) (sinx/x) का मान है:",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The process of DNA fingerprinting was developed by:",
        "question_hi": "DNA फिंगरप्रिंटिंग की प्रक्रिया विकसित की गई थी:",
        "options_en": ["James Watson", "Alec Jeffreys", "Gregor Mendel", "Francis Crick"],
        "options_hi": ["जेम्स वाटसन", "एलेक जेफ्रीस", "ग्रेगर मेंडल", "फ्रांसिस क्रिक"],
        "answer_en": "Alec Jeffreys",
        "answer_hi": "एलेक जेफ्रीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The device that converts AC to DC is called:",
        "question_hi": "वह उपकरण जो AC को DC में परिवर्तित करता है, कहलाता है:",
        "options_en": ["Transformer", "Rectifier", "Amplifier", "Oscillator"],
        "options_hi": ["ट्रांसफॉर्मर", "रेक्टिफायर", "एम्पलीफायर", "ऑसिलेटर"],
        "answer_en": "Rectifier",
        "answer_hi": "रेक्टिफायर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The coordination number in NaCl crystal is:",
        "question_hi": "NaCl क्रिस्टल में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The value of ∫(0 to π/2) cosx dx is:",
        "question_hi": "∫(0 से π/2) cosx dx का मान है:",
        "options_en": ["0", "1", "2", "π/2"],
        "options_hi": ["0", "1", "2", "π/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The hormone that regulates calcium metabolism is:",
        "question_hi": "वह हार्मोन जो कैल्शियम चयापचय को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Parathormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "पैराथॉर्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The SI unit of magnetic field strength is:",
        "question_hi": "चुंबकीय क्षेत्र सामर्थ्य की SI इकाई है:",
        "options_en": ["Weber", "Tesla", "Henry", "Gauss"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "गॉस"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The compound that shows geometrical isomerism is:",
        "question_hi": "वह यौगिक जो ज्यामितीय समावयवता दर्शाता है:",
        "options_en": ["CH₄", "C₂H₆", "C₂H₄", "C₂H₂Cl₂"],
        "options_hi": ["CH₄", "C₂H₆", "C₂H₄", "C₂H₂Cl₂"],
        "answer_en": "C₂H₂Cl₂",
        "answer_hi": "C₂H₂Cl₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The value of d/dx(e^(2x)) is:",
        "question_hi": "d/dx(e^(2x)) का मान है:",
        "options_en": ["e^(2x)", "2e^(2x)", "e^(x)", "2e^(x)"],
        "options_hi": ["e^(2x)", "2e^(2x)", "e^(x)", "2e^(x)"],
        "answer_en": "2e^(2x)",
        "answer_hi": "2e^(2x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The process of formation of gametes is called:",
        "question_hi": "युग्मकों के निर्माण की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Fertilization", "Budding"],
        "options_hi": ["माइटोसिस", "मियोसिस", "निषेचन", "कलिकायन"],
        "answer_en": "Meiosis",
        "answer_hi": "मियोसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The principle behind working of rocket is based on:",
        "question_hi": "रॉकेट के कार्य करने का सिद्धांत आधारित है:",
        "options_en": ["Bernoulli's principle", "Newton's first law", "Newton's third law", "Archimedes' principle"],
        "options_hi": ["बर्नौली का सिद्धांत", "न्यूटन का पहला नियम", "न्यूटन का तीसरा नियम", "आर्किमिडीज का सिद्धांत"],
        "answer_en": "Newton's third law",
        "answer_hi": "न्यूटन का तीसरा नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The IUPAC name of CH₃-O-CH₃ is:",
        "question_hi": "CH₃-O-CH₃ का IUPAC नाम है:",
        "options_en": ["Dimethyl ether", "Methoxymethane", "Ethoxyethane", "Methyl ether"],
        "options_hi": ["डाइमेथिल ईथर", "मेथॉक्सीमीथेन", "एथॉक्सीएथेन", "मेथिल ईथर"],
        "answer_en": "Methoxymethane",
        "answer_hi": "मेथॉक्सीमीथेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
        "question_en": "The site of photosynthesis in plant cell is:",
        "question_hi": "पादप कोशिका में प्रकाश संश्लेषण का स्थल है:",
        "options_en": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The force between two parallel current carrying conductors is:",
        "question_hi": "दो समानांतर धारावाही चालकों के बीच बल है:",
        "options_en": ["Inversely proportional to distance", "Directly proportional to distance", "Inversely proportional to square of distance", "Independent of distance"],
        "options_hi": ["दूरी के व्युत्क्रमानुपाती", "दूरी के समानुपाती", "दूरी के वर्ग के व्युत्क्रमानुपाती", "दूरी से स्वतंत्र"],
        "answer_en": "Inversely proportional to distance",
        "answer_hi": "दूरी के व्युत्क्रमानुपाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The compound that gives positive iodoform test is:",
        "question_hi": "वह यौगिक जो सकारात्मक आयोडोफॉर्म परीक्षण देता है:",
        "options_en": ["CH₃CH₂OH", "CH₃COOH", "HCHO", "C₆H₅OH"],
        "options_hi": ["CH₃CH₂OH", "CH₃COOH", "HCHO", "C₆H₅OH"],
        "answer_en": "CH₃CH₂OH",
        "answer_hi": "CH₃CH₂OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The value of ∫(1/(1+x²)) dx is:",
        "question_hi": "∫(1/(1+x²)) dx का मान है:",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "The unit of capacitance is:",
        "question_hi": "धारिता की इकाई है:",
        "options_en": ["Ohm", "Farad", "Henry", "Weber"],
        "options_hi": ["ओम", "फैराड", "हेनरी", "वेबर"],
        "answer_en": "Farad",
        "answer_hi": "फैराड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The number of structural isomers of butane is:",
        "question_hi": "ब्यूटेन के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "The enzyme that converts starch to maltose is:",
        "question_hi": "वह एंजाइम जो स्टार्च को माल्टोज में परिवर्तित करता है:",
        "options_en": ["Amylase", "Maltase", "Invertase", "Zymase"],
        "options_hi": ["एमाइलेज", "माल्टेज", "इन्वर्टेज", "जाइमेज"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The resistance of a wire is R. If its length is doubled and area halved, the new resistance is:",
        "question_hi": "एक तार का प्रतिरोध R है। यदि इसकी लंबाई दोगुनी और क्षेत्रफल आधा कर दिया जाए, तो नया प्रतिरोध है:",
        "options_en": ["R", "2R", "4R", "R/2"],
        "options_hi": ["R", "2R", "4R", "R/2"],
        "answer_en": "4R",
        "answer_hi": "4R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The compound that shows tautomerism is:",
        "question_hi": "वह यौगिक जो टॉटोमेरिज्म दर्शाता है:",
        "options_en": ["Acetone", "Acetaldehyde", "Both A and B", "None"],
        "options_hi": ["एसीटोन", "एसीटैल्डिहाइड", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The value of ∫(sinx dx) is:",
        "question_hi": "∫(sinx dx) का मान है:",
        "options_en": ["cosx + C", "-cosx + C", "sinx + C", "-sinx + C"],
        "options_hi": ["cosx + C", "-cosx + C", "sinx + C", "-sinx + C"],
        "answer_en": "-cosx + C",
        "answer_hi": "-cosx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The site of protein synthesis is:",
        "question_hi": "प्रोटीन संश्लेषण का स्थल है:",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The force between two charges is F. If the distance is doubled, the new force is:",
        "question_hi": "दो आवेशों के बीच बल F है। यदि दूरी दोगुनी कर दी जाए, तो नया बल है:",
        "options_en": ["F/2", "F/4", "2F", "4F"],
        "options_hi": ["F/2", "F/4", "2F", "4F"],
        "answer_en": "F/4",
        "answer_hi": "F/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The compound that gives positive Fehling's test is:",
        "question_hi": "वह यौगिक जो सकारात्मक फेहलिंग परीक्षण देता है:",
        "options_en": ["Formaldehyde", "Acetone", "Acetic acid", "Ethanol"],
        "options_hi": ["फॉर्मेल्डिहाइड", "एसीटोन", "एसिटिक अम्ल", "एथनॉल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The value of ∫(cosx dx) is:",
        "question_hi": "∫(cosx dx) का मान है:",
        "options_en": ["sinx + C", "-sinx + C", "cosx + C", "-cosx + C"],
        "options_hi": ["sinx + C", "-sinx + C", "cosx + C", "-cosx + C"],
        "answer_en": "sinx + C",
        "answer_hi": "sinx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
        "question_en": "The unit of magnetic field is:",
        "question_hi": "चुंबकीय क्षेत्र की इकाई है:",
        "options_en": ["Weber", "Tesla", "Henry", "Farad"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "फैराड"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
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
        "num": 91,
        "question_en": "The site of light reaction in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में प्रकाश अभिक्रिया का स्थल है:",
        "options_en": ["Stroma", "Grana", "Matrix", "Cristae"],
        "options_hi": ["स्ट्रोमा", "ग्रैना", "मैट्रिक्स", "क्रिस्टी"],
        "answer_en": "Grana",
        "answer_hi": "ग्रैना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The process of conversion of NO₂ to N₂ in nitrogen cycle is called:",
        "question_hi": "नाइट्रोजन चक्र में NO₂ के N₂ में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Denitrification",
        "answer_hi": "विनाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The magnetic field at the center of a circular coil of n turns carrying current I is:",
        "question_hi": "धारा I वाहक n फेरों वाली वृत्ताकार कुंडली के केंद्र पर चुंबकीय क्षेत्र है:",
        "options_en": ["μ₀nI/2r", "μ₀nI/2πr", "μ₀nI/r", "μ₀nI/πr"],
        "options_hi": ["μ₀nI/2r", "μ₀nI/2πr", "μ₀nI/r", "μ₀nI/πr"],
        "answer_en": "μ₀nI/2r",
        "answer_hi": "μ₀nI/2r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The compound that gives iodoform test is:",
        "question_hi": "वह यौगिक जो आयोडोफॉर्म परीक्षण देता है:",
        "options_en": ["CH₃CH₂OH", "CH₃COOH", "CH₃CHO", "Both A and C"],
        "options_hi": ["CH₃CH₂OH", "CH₃COOH", "CH₃CHO", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
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
        "num": 96,
        "question_en": "In human eye, the focusing is done by:",
        "question_hi": "मानव आंख में, फोकसिंग किसके द्वारा की जाती है:",
        "options_en": ["Cornea", "Lens", "Iris", "Retina"],
        "options_hi": ["कॉर्निया", "लेंस", "आइरिस", "रेटिना"],
        "answer_en": "Lens",
        "answer_hi": "लेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The dimensional formula of surface tension is:",
        "question_hi": "पृष्ठ तनाव का विमीय सूत्र है:",
        "options_en": ["MLT⁻²", "ML⁰T⁻²", "ML⁻¹T⁻²", "ML²T⁻²"],
        "options_hi": ["MLT⁻²", "ML⁰T⁻²", "ML⁻¹T⁻²", "ML²T⁻²"],
        "answer_en": "ML⁰T⁻²",
        "answer_hi": "ML⁰T⁻²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which of the following is a reducing sugar?",
        "question_hi": "निम्नलिखित में से कौन एक अपचायक शर्करा है?",
        "options_en": ["Sucrose", "Glucose", "Starch", "Cellulose"],
        "options_hi": ["सुक्रोज", "ग्लूकोज", "स्टार्च", "सेल्यूलोज"],
        "answer_en": "Glucose",
        "answer_hi": "ग्लूकोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The number of points of discontinuity of f(x) = [x] in (0,2) is:",
        "question_hi": "(0,2) में f(x) = [x] के असांतत्य बिंदुओं की संख्या है:",
        "options_en": ["0", "1", "2", "Infinite"],
        "options_hi": ["0", "1", "2", "अनंत"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The enzyme that fixes CO₂ in C4 plants is:",
        "question_hi": "C4 पौधों में CO₂ स्थिर करने वाला एंजाइम है:",
        "options_en": ["RuBisCO", "PEP carboxylase", "Catalase", "Amylase"],
        "options_hi": ["RuBisCO", "PEP कार्बोक्सिलेज", "कैटालेज", "एमाइलेज"],
        "answer_en": "PEP carboxylase",
        "answer_hi": "PEP कार्बोक्सिलेज",
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