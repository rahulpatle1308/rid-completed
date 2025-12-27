const questions = [
    // Physics - Modern Physics & Nuclear Physics (1-20)
    {
        "num": 1,
        "question_en": "The phenomenon of photoelectric effect was explained by:",
        "question_hi": "प्रकाश विद्युत प्रभाव की घटना को समझाया गया था:",
        "options_en": ["Max Planck", "Albert Einstein", "Niels Bohr", "Erwin Schrödinger"],
        "options_hi": ["मैक्स प्लैंक", "अल्बर्ट आइंस्टीन", "नील्स बोहर", "अर्विन श्रोडिंगर"],
        "answer_en": "Albert Einstein",
        "answer_hi": "अल्बर्ट आइंस्टीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "In nuclear fission, the mass defect is converted into:",
        "question_hi": "नाभिकीय विखंडन में, द्रव्यमान क्षति परिवर्तित होती है:",
        "options_en": ["Electrical energy", "Chemical energy", "Nuclear energy", "Kinetic energy"],
        "options_hi": ["विद्युत ऊर्जा", "रासायनिक ऊर्जा", "नाभिकीय ऊर्जा", "गतिज ऊर्जा"],
        "answer_en": "Nuclear energy",
        "answer_hi": "नाभिकीय ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The half-life of a radioactive element is 5 years. After 15 years, what fraction remains undecayed?",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-जीवन 5 वर्ष है। 15 वर्ष बाद, कितना अंश अक्षय रहता है?",
        "options_en": ["1/2", "1/4", "1/8", "1/16"],
        "options_hi": ["1/2", "1/4", "1/8", "1/16"],
        "answer_en": "1/8",
        "answer_hi": "1/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The de Broglie wavelength of a particle is inversely proportional to its:",
        "question_hi": "किसी कण की डी ब्रोगली तरंगदैर्ध्य उसके व्युत्क्रमानुपाती होती है:",
        "options_en": ["Mass", "Velocity", "Momentum", "Energy"],
        "options_hi": ["द्रव्यमान", "वेग", "संवेग", "ऊर्जा"],
        "answer_en": "Momentum",
        "answer_hi": "संवेग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "In a hydrogen atom, the transition that emits maximum energy is:",
        "question_hi": "हाइड्रोजन परमाणु में, वह संक्रमण जो अधिकतम ऊर्जा उत्सर्जित करता है:",
        "options_en": ["n=2 to n=1", "n=3 to n=2", "n=4 to n=3", "n=5 to n=4"],
        "options_hi": ["n=2 से n=1", "n=3 से n=2", "n=4 से n=3", "n=5 से n=4"],
        "answer_en": "n=2 to n=1",
        "answer_hi": "n=2 से n=1",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Coordination Compounds (6-40)
    {
        "num": 6,
        "question_en": "The coordination number in [Fe(CN)₆]⁴⁻ is:",
        "question_hi": "[Fe(CN)₆]⁴⁻ में उपसहसंयोजन संख्या है:",
        "options_en": ["2", "4", "6", "8"],
        "options_hi": ["2", "4", "6", "8"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which of the following is a bidentate ligand?",
        "question_hi": "निम्नलिखित में से कौन सा द्विदंतुक लिगैंड है?",
        "options_en": ["NH₃", "H₂O", "en", "CN⁻"],
        "options_hi": ["NH₃", "H₂O", "en", "CN⁻"],
        "answer_en": "en",
        "answer_hi": "en",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is:",
        "question_hi": "[Co(NH₃)₅Cl]Cl₂ का IUPAC नाम है:",
        "options_en": ["Pentaamminechlorocobalt(III) chloride", "Chloropentaamminecobalt(III) chloride", "Pentaamminecobalt(III) chloride", "Chloropentaamminecobalt chloride"],
        "options_hi": ["पेंटाएमीनक्लोरोकोबाल्ट(III) क्लोराइड", "क्लोरोपेंटाएमीनकोबाल्ट(III) क्लोराइड", "पेंटाएमीनकोबाल्ट(III) क्लोराइड", "क्लोरोपेंटाएमीनकोबाल्ट क्लोराइड"],
        "answer_en": "Pentaamminechlorocobalt(III) chloride",
        "answer_hi": "पेंटाएमीनक्लोरोकोबाल्ट(III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The magnetic moment of [Fe(CN)₆]⁴⁻ indicates that it has:",
        "question_hi": "[Fe(CN)₆]⁴⁻ का चुंबकीय आघूर्ण इंगित करता है कि इसमें है:",
        "options_en": ["0 unpaired electrons", "1 unpaired electron", "4 unpaired electrons", "5 unpaired electrons"],
        "options_hi": ["0 अयुग्मित इलेक्ट्रॉन", "1 अयुग्मित इलेक्ट्रॉन", "4 अयुग्मित इलेक्ट्रॉन", "5 अयुग्मित इलेक्ट्रॉन"],
        "answer_en": "0 unpaired electrons",
        "answer_hi": "0 अयुग्मित इलेक्ट्रॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Werner's theory explains:",
        "question_hi": "वर्नर का सिद्धांत समझाता है:",
        "options_en": ["Ionization of complexes", "Geometry of complexes", "Color of complexes", "All of these"],
        "options_hi": ["संकुलों का आयनन", "संकुलों की ज्यामिति", "संकुलों का रंग", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Complex Numbers & Quadratic Equations (11-60)
    {
        "num": 11,
        "question_en": "The value of i¹⁹ is:",
        "question_hi": "i¹⁹ का मान है:",
        "options_en": ["1", "-1", "i", "-i"],
        "options_hi": ["1", "-1", "i", "-i"],
        "answer_en": "-i",
        "answer_hi": "-i",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The modulus of complex number 3 + 4i is:",
        "question_hi": "सम्मिश्र संख्या 3 + 4i का मापांक है:",
        "options_en": ["5", "7", "12", "25"],
        "options_hi": ["5", "7", "12", "25"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "If the roots of x² + px + q = 0 are equal, then:",
        "question_hi": "यदि x² + px + q = 0 के मूल समान हैं, तो:",
        "options_en": ["p² = 4q", "p² = q", "p = 4q", "p = q"],
        "options_hi": ["p² = 4q", "p² = q", "p = 4q", "p = q"],
        "answer_en": "p² = 4q",
        "answer_hi": "p² = 4q",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The conjugate of complex number (2 + 3i)/(1 - i) is:",
        "question_hi": "सम्मिश्र संख्या (2 + 3i)/(1 - i) का संयुग्म है:",
        "options_en": ["(-1 + 5i)/2", "(-1 - 5i)/2", "(1 + 5i)/2", "(1 - 5i)/2"],
        "options_hi": ["(-1 + 5i)/2", "(-1 - 5i)/2", "(1 + 5i)/2", "(1 - 5i)/2"],
        "answer_en": "(-1 - 5i)/2",
        "answer_hi": "(-1 - 5i)/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The quadratic equation whose roots are 2 and 3 is:",
        "question_hi": "वह द्विघात समीकरण जिसके मूल 2 और 3 हैं:",
        "options_en": ["x² - 5x + 6 = 0", "x² + 5x + 6 = 0", "x² - x + 6 = 0", "x² + x - 6 = 0"],
        "options_hi": ["x² - 5x + 6 = 0", "x² + 5x + 6 = 0", "x² - x + 6 = 0", "x² + x - 6 = 0"],
        "answer_en": "x² - 5x + 6 = 0",
        "answer_hi": "x² - 5x + 6 = 0",
        "attempted": false,
        "selected": ""
    },

    // Biology - Plant Physiology (16-80)
    {
        "num": 16,
        "question_en": "The process of water movement through plants is called:",
        "question_hi": "पौधों के माध्यम से जल के संचलन की प्रक्रिया कहलाती है:",
        "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Translocation"],
        "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "स्थानांतरण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The opening and closing of stomata is regulated by:",
        "question_hi": "रंध्रों का खुलना और बंद होना नियंत्रित होता है:",
        "options_en": ["Oxygen", "Carbon dioxide", "Potassium ions", "Calcium ions"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "पोटैशियम आयन", "कैल्शियम आयन"],
        "answer_en": "Potassium ions",
        "answer_hi": "पोटैशियम आयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The pigment responsible for photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण के लिए जिम्मेदार वर्णक है:",
        "options_en": ["Chlorophyll", "Hemoglobin", "Melanin", "Carotene"],
        "options_hi": ["क्लोरोफिल", "हीमोग्लोबिन", "मेलेनिन", "कैरोटीन"],
        "answer_en": "Chlorophyll",
        "answer_hi": "क्लोरोफिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The process of conversion of light energy to chemical energy occurs in:",
        "question_hi": "प्रकाश ऊर्जा के रासायनिक ऊर्जा में परिवर्तन की प्रक्रिया होती है:",
        "options_en": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Gibberellins are plant hormones that promote:",
        "question_hi": "जिबरेलिन पादप हार्मोन हैं जो बढ़ावा देते हैं:",
        "options_en": ["Cell division", "Cell elongation", "Fruit ripening", "Leaf fall"],
        "options_hi": ["कोशिका विभाजन", "कोशिका दीर्घीकरण", "फल पकना", "पत्ती गिरना"],
        "answer_en": "Cell elongation",
        "answer_hi": "कोशिका दीर्घीकरण",
        "attempted": false,
        "selected": ""
    },

    // English - Advanced Grammar & Vocabulary (21-85)
    {
        "num": 21,
        "question_en": "Choose the correct meaning of 'Ephemeral':",
        "question_hi": "'Ephemeral' का सही अर्थ चुनें:",
        "options_en": ["Lasting for a short time", "Everlasting", "Beautiful", "Dangerous"],
        "options_hi": ["थोड़े समय के लिए टिकने वाला", "शाश्वत", "सुंदर", "खतरनाक"],
        "answer_en": "Lasting for a short time",
        "answer_hi": "थोड़े समय के लिए टिकने वाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Identify the correct passive form: 'Someone has stolen my purse.'",
        "question_hi": "सही कर्मवाच्य रूप पहचानें: 'Someone has stolen my purse.'",
        "options_en": ["My purse has been stolen by someone", "My purse was stolen by someone", "My purse is stolen by someone", "My purse had been stolen by someone"],
        "options_hi": ["My purse has been stolen by someone", "My purse was stolen by someone", "My purse is stolen by someone", "My purse had been stolen by someone"],
        "answer_en": "My purse has been stolen by someone",
        "answer_hi": "My purse has been stolen by someone",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["Neither of the students have completed their homework", "Neither of the students has completed their homework", "Neither of the students are completing their homework", "Neither of the students were completing their homework"],
        "options_hi": ["Neither of the students have completed their homework", "Neither of the students has completed their homework", "Neither of the students are completing their homework", "Neither of the students were completing their homework"],
        "answer_en": "Neither of the students has completed their homework",
        "answer_hi": "Neither of the students has completed their homework",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The antonym of 'Magnanimous' is:",
        "question_hi": "'Magnanimous' का विलोम है:",
        "options_en": ["Generous", "Selfish", "Brave", "Kind"],
        "options_hi": ["उदार", "स्वार्थी", "बहादुर", "दयालु"],
        "answer_en": "Selfish",
        "answer_hi": "स्वार्थी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Identify the type of sentence: 'Although it was raining, we decided to go for a walk.'",
        "question_hi": "वाक्य का प्रकार पहचानें: 'Although it was raining, we decided to go for a walk.'",
        "options_en": ["Simple", "Compound", "Complex", "Compound-complex"],
        "options_hi": ["सरल", "संयुक्त", "मिश्र", "संयुक्त-मिश्र"],
        "answer_en": "Complex",
        "answer_hi": "मिश्र",
        "attempted": false,
        "selected": ""
    },

    // Hindi - छंद और अलंकार (26-90)
    {
        "num": 26,
        "question_en": "'दोहा' छंद में कुल कितने मात्रा होते हैं?",
        "question_hi": "'दोहा' छंद में कुल कितने मात्रा होते हैं?",
        "options_en": ["24", "26", "28", "30"],
        "options_hi": ["24", "26", "28", "30"],
        "answer_en": "24",
        "answer_hi": "24",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'चंदन है विष बैरिन, और विष बैरिन की ज्वाला' में कौन सा अलंकार है?",
        "question_hi": "'चंदन है विष बैरिन, और विष बैरिन की ज्वाला' में कौन सा अलंकार है?",
        "options_en": ["उत्प्रेक्षा", "विरोधाभास", "अनुप्रास", "यमक"],
        "options_hi": ["उत्प्रेक्षा", "विरोधाभास", "अनुप्रास", "यमक"],
        "answer_en": "विरोधाभास",
        "answer_hi": "विरोधाभास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "'सोरठा' छंद के प्रथम और तृतीय चरण में कितने-कितने मात्रा होते हैं?",
        "question_hi": "'सोरठा' छंद के प्रथम और तृतीय चरण में कितने-कितने मात्रा होते हैं?",
        "options_en": ["11-11", "12-12", "11-13", "13-11"],
        "options_hi": ["11-11", "12-12", "11-13", "13-11"],
        "answer_en": "11-13",
        "answer_hi": "11-13",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'महाकाव्य' की रचना किस भाषा में हुई?",
        "question_hi": "'महाकाव्य' की रचना किस भाषा में हुई?",
        "options_en": ["संस्कृत", "हिंदी", "प्राकृत", "अपभ्रंश"],
        "options_hi": ["संस्कृत", "हिंदी", "प्राकृत", "अपभ्रंश"],
        "answer_en": "संस्कृत",
        "answer_hi": "संस्कृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "'रामचरितमानस' किस छंद में लिखा गया है?",
        "question_hi": "'रामचरितमानस' किस छंद में लिखा गया है?",
        "options_en": ["दोहा-चौपाई", "सोरठा", "छप्पय", "कवित्त"],
        "options_hi": ["दोहा-चौपाई", "सोरठा", "छप्पय", "कवित्त"],
        "answer_en": "दोहा-चौपाई",
        "answer_hi": "दोहा-चौपाई",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Indian Economy (31-100)
    {
        "num": 31,
        "question_en": "The currency of Japan is:",
        "question_hi": "जापान की मुद्रा है:",
        "options_en": ["Yuan", "Yen", "Won", "Ringgit"],
        "options_hi": ["युआन", "येन", "वॉन", "रिंगित"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The first Five Year Plan of India was launched in:",
        "question_hi": "भारत की पहली पंचवर्षीय योजना शुरू की गई थी:",
        "options_en": ["1947", "1950", "1951", "1952"],
        "options_hi": ["1947", "1950", "1951", "1952"],
        "answer_en": "1951",
        "answer_hi": "1951",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The Reserve Bank of India was established in:",
        "question_hi": "भारतीय रिजर्व बैंक की स्थापना हुई थी:",
        "options_en": ["1935", "1947", "1950", "1951"],
        "options_hi": ["1935", "1947", "1950", "1951"],
        "answer_en": "1935",
        "answer_hi": "1935",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The Green Revolution in India was related to:",
        "question_hi": "भारत में हरित क्रांति संबंधित थी:",
        "options_en": ["Industrial production", "Agricultural production", "IT revolution", "Space research"],
        "options_hi": ["औद्योगिक उत्पादन", "कृषि उत्पादन", "आईटी क्रांति", "अंतरिक्ष अनुसंधान"],
        "answer_en": "Agricultural production",
        "answer_hi": "कृषि उत्पादन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The current Governor of RBI is:",
        "question_hi": "RBI के वर्तमान गवर्नर हैं:",
        "options_en": ["Urjit Patel", "Raghuram Rajan", "Shaktikanta Das", "Duvvuri Subbarao"],
        "options_hi": ["उर्जित पटेल", "रघुराम राजन", "शक्तिकांत दास", "डुव्वूरी सुब्बाराव"],
        "answer_en": "Shaktikanta Das",
        "answer_hi": "शक्तिकांत दास",
        "attempted": false,
        "selected": ""
    },

    // Additional Physics - Wave Optics (36-45)
    {
        "num": 36,
        "question_en": "In Young's double slit experiment, the fringe width is:",
        "question_hi": "यंग के द्वि-छिद्र प्रयोग में, फ्रिंज चौड़ाई है:",
        "options_en": ["λD/d", "λd/D", "D/λd", "d/λD"],
        "options_hi": ["λD/d", "λd/D", "D/λd", "d/λD"],
        "answer_en": "λD/d",
        "answer_hi": "λD/d",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The phenomenon of polarization demonstrates the:",
        "question_hi": "ध्रुवण की घटना प्रदर्शित करती है:",
        "options_en": ["Particle nature of light", "Wave nature of light", "Dual nature of light", "Quantum nature of light"],
        "options_hi": ["प्रकाश की कण प्रकृति", "प्रकाश की तरंग प्रकृति", "प्रकाश की द्वैत प्रकृति", "प्रकाश की क्वांटम प्रकृति"],
        "answer_en": "Wave nature of light",
        "answer_hi": "प्रकाश की तरंग प्रकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The resolving power of a telescope increases with:",
        "question_hi": "दूरबीन की विभेदन क्षमता बढ़ती है:",
        "options_en": ["Decrease in wavelength", "Increase in wavelength", "Decrease in aperture", "Increase in focal length"],
        "options_hi": ["तरंगदैर्ध्य में कमी", "तरंगदैर्ध्य में वृद्धि", "द्वारक में कमी", "फोकस दूरी में वृद्धि"],
        "answer_en": "Decrease in wavelength",
        "answer_hi": "तरंगदैर्ध्य में कमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "In diffraction pattern, the central maximum is:",
        "question_hi": "विवर्तन पैटर्न में, केंद्रीय उच्चिष्ठ है:",
        "options_en": ["Twice as wide as others", "Same width as others", "Half as wide as others", "Three times as wide as others"],
        "options_hi": ["दूसरों से दोगुना चौड़ा", "दूसरों के समान चौड़ा", "दूसरों से आधा चौड़ा", "दूसरों से तीन गुना चौड़ा"],
        "answer_en": "Twice as wide as others",
        "answer_hi": "दूसरों से दोगुना चौड़ा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Brewster's law relates:",
        "question_hi": "ब्रूस्टर का नियम संबंधित करता है:",
        "options_en": ["Angle of incidence and refractive index", "Wavelength and frequency", "Velocity and acceleration", "Force and mass"],
        "options_hi": ["आपतन कोण और अपवर्तनांक", "तरंगदैर्ध्य और आवृत्ति", "वेग और त्वरण", "बल और द्रव्यमान"],
        "answer_en": "Angle of incidence and refractive index",
        "answer_hi": "आपतन कोण और अपवर्तनांक",
        "attempted": false,
        "selected": ""
    },

    // Additional Chemistry - Chemical Kinetics (41-50)
    {
        "num": 41,
        "question_en": "The unit of rate constant for first order reaction is:",
        "question_hi": "प्रथम कोटि अभिक्रिया के लिए दर स्थिरांक की इकाई है:",
        "options_en": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "options_hi": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "answer_en": "s⁻¹",
        "answer_hi": "s⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The half-life of a first order reaction is:",
        "question_hi": "प्रथम कोटि अभिक्रिया का अर्ध-जीवन है:",
        "options_en": ["Independent of concentration", "Directly proportional to concentration", "Inversely proportional to concentration", "Proportional to square of concentration"],
        "options_hi": ["सांद्रता से स्वतंत्र", "सांद्रता के समानुपाती", "सांद्रता के व्युत्क्रमानुपाती", "सांद्रता के वर्ग के समानुपाती"],
        "answer_en": "Independent of concentration",
        "answer_hi": "सांद्रता से स्वतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The Arrhenius equation is:",
        "question_hi": "आरहेनियस समीकरण है:",
        "options_en": ["k = Ae^(-Ea/RT)", "k = Ae^(Ea/RT)", "k = A/T", "k = A√T"],
        "options_hi": ["k = Ae^(-Ea/RT)", "k = Ae^(Ea/RT)", "k = A/T", "k = A√T"],
        "answer_en": "k = Ae^(-Ea/RT)",
        "answer_hi": "k = Ae^(-Ea/RT)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "For a zero order reaction, the rate is:",
        "question_hi": "शून्य कोटि अभिक्रिया के लिए, दर है:",
        "options_en": ["Proportional to concentration", "Independent of concentration", "Inversely proportional to concentration", "Proportional to square of concentration"],
        "options_hi": ["सांद्रता के समानुपाती", "सांद्रता से स्वतंत्र", "सांद्रता के व्युत्क्रमानुपाती", "सांद्रता के वर्ग के समानुपाती"],
        "answer_en": "Independent of concentration",
        "answer_hi": "सांद्रता से स्वतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The molecularity of a reaction can be:",
        "question_hi": "अभिक्रिया की आणविकता हो सकती है:",
        "options_en": ["Zero", "Fractional", "Negative", "Positive integer"],
        "options_hi": ["शून्य", "भिन्नात्मक", "ऋणात्मक", "धनात्मक पूर्णांक"],
        "answer_en": "Positive integer",
        "answer_hi": "धनात्मक पूर्णांक",
        "attempted": false,
        "selected": ""
    },

    // Additional Mathematics - Permutations & Combinations (46-55)
    {
        "num": 46,
        "question_en": "The number of ways to arrange 5 different books on a shelf is:",
        "question_hi": "एक शेल्फ पर 5 विभिन्न पुस्तकों को व्यवस्थित करने के तरीकों की संख्या है:",
        "options_en": ["5", "25", "120", "625"],
        "options_hi": ["5", "25", "120", "625"],
        "answer_en": "120",
        "answer_hi": "120",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "⁵C₂ is equal to:",
        "question_hi": "⁵C₂ बराबर है:",
        "options_en": ["5", "10", "20", "25"],
        "options_hi": ["5", "10", "20", "25"],
        "answer_en": "10",
        "answer_hi": "10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The number of diagonals in a hexagon is:",
        "question_hi": "एक षट्भुज में विकर्णों की संख्या है:",
        "options_en": ["6", "9", "12", "15"],
        "options_hi": ["6", "9", "12", "15"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "If ⁿP₃ = 60, then n is:",
        "question_hi": "यदि ⁿP₃ = 60, तो n है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The number of ways to select 2 boys and 3 girls from 5 boys and 4 girls is:",
        "question_hi": "5 लड़कों और 4 लड़कियों में से 2 लड़के और 3 लड़कियों को चुनने के तरीकों की संख्या है:",
        "options_en": ["⁵C₂ × ⁴C₃", "⁵C₃ × ⁴C₂", "⁵P₂ × ⁴P₃", "9C5"],
        "options_hi": ["⁵C₂ × ⁴C₃", "⁵C₃ × ⁴C₂", "⁵P₂ × ⁴P₃", "9C5"],
        "answer_en": "⁵C₂ × ⁴C₃",
        "answer_hi": "⁵C₂ × ⁴C₃",
        "attempted": false,
        "selected": ""
    },

    // Additional Biology - Human Reproduction (51-60)
    {
        "num": 51,
        "question_en": "The male gamete in humans is produced in:",
        "question_hi": "मनुष्यों में नर युग्मक उत्पन्न होता है:",
        "options_en": ["Testes", "Ovaries", "Uterus", "Vagina"],
        "options_hi": ["वृषण", "अंडाशय", "गर्भाशय", "योनि"],
        "answer_en": "Testes",
        "answer_hi": "वृषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Fertilization in humans occurs in:",
        "question_hi": "मनुष्यों में निषेचन होता है:",
        "options_en": ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
        "options_hi": ["गर्भाशय", "अंडाशय", "फैलोपियन ट्यूब", "योनि"],
        "answer_en": "Fallopian tube",
        "answer_hi": "फैलोपियन ट्यूब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The hormone responsible for maintenance of pregnancy is:",
        "question_hi": "गर्भावस्था के रखरखाव के लिए जिम्मेदार हार्मोन है:",
        "options_en": ["Estrogen", "Progesterone", "Testosterone", "Insulin"],
        "options_hi": ["एस्ट्रोजन", "प्रोजेस्टेरोन", "टेस्टोस्टेरोन", "इंसुलिन"],
        "answer_en": "Progesterone",
        "answer_hi": "प्रोजेस्टेरोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The process of release of egg from ovary is called:",
        "question_hi": "अंडाशय से अंडे के मुक्त होने की प्रक्रिया कहलाती है:",
        "options_en": ["Ovulation", "Fertilization", "Implantation", "Gestation"],
        "options_hi": ["ओव्यूलेशन", "निषेचन", "आरोपण", "गर्भावस्था"],
        "answer_en": "Ovulation",
        "answer_hi": "ओव्यूलेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The duration of human pregnancy is approximately:",
        "question_hi": "मानव गर्भावस्था की अवधि लगभग है:",
        "options_en": ["36 weeks", "38 weeks", "40 weeks", "42 weeks"],
        "options_hi": ["36 सप्ताह", "38 सप्ताह", "40 सप्ताह", "42 सप्ताह"],
        "answer_en": "40 weeks",
        "answer_hi": "40 सप्ताह",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (56-100)
    {
        "num": 56,
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
        "num": 57,
        "question_en": "The compound used as an antacid is:",
        "question_hi": "एंटासिड के रूप में प्रयुक्त यौगिक है:",
        "options_en": ["NaHCO₃", "Na₂CO₃", "NaOH", "KOH"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "NaOH", "KOH"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The value of ∫(1/(1 + x²)) dx is:",
        "question_hi": "∫(1/(1 + x²)) dx का मान है:",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The hormone that regulates blood calcium level is:",
        "question_hi": "वह हार्मोन जो रक्त कैल्शियम स्तर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Parathormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "पैराथॉर्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The device used to measure electric current is:",
        "question_hi": "विद्युत धारा मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Voltmeter", "Ammeter", "Galvanometer", "Ohmmeter"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "गैल्वेनोमीटर", "ओममीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The coordination number in body-centered cubic structure is:",
        "question_hi": "अंत:केंद्रित घनीय संरचना में उपसहसंयोजन संख्या है:",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The value of d/dx(sin⁻¹x) is:",
        "question_hi": "d/dx(sin⁻¹x) का मान है:",
        "options_en": ["1/√(1 - x²)", "1/√(1 + x²)", "1/(1 + x²)", "1/(1 - x²)"],
        "options_hi": ["1/√(1 - x²)", "1/√(1 + x²)", "1/(1 + x²)", "1/(1 - x²)"],
        "answer_en": "1/√(1 - x²)",
        "answer_hi": "1/√(1 - x²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The process of formation of blood cells is called:",
        "question_hi": "रक्त कोशिकाओं के निर्माण की प्रक्रिया कहलाती है:",
        "options_en": ["Hemolysis", "Hemopoiesis", "Phagocytosis", "Pinocytosis"],
        "options_hi": ["हीमोलाइसिस", "हेमोपोइएसिस", "भक्षणोदरता", "पिनोसाइटोसिस"],
        "answer_en": "Hemopoiesis",
        "answer_hi": "हेमोपोइएसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The SI unit of electric charge is:",
        "question_hi": "विद्युत आवेश की SI इकाई है:",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलॉम", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
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
        "question_en": "The value of ∫(e^(2x) dx) is:",
        "question_hi": "∫(e^(2x) dx) का मान है:",
        "options_en": ["e^(2x) + C", "2e^(2x) + C", "(1/2)e^(2x) + C", "e^(x) + C"],
        "options_hi": ["e^(2x) + C", "2e^(2x) + C", "(1/2)e^(2x) + C", "e^(x) + C"],
        "answer_en": "(1/2)e^(2x) + C",
        "answer_hi": "(1/2)e^(2x) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The process of cell division in reproductive cells is called:",
        "question_hi": "प्रजनन कोशिकाओं में कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
        "options_hi": ["माइटोसिस", "मियोसिस", "द्विखंडन", "कलिकायन"],
        "answer_en": "Meiosis",
        "answer_hi": "मियोसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The principle behind working of electric motor is:",
        "question_hi": "विद्युत मोटर के कार्य करने का सिद्धांत है:",
        "options_en": ["Faraday's law", "Lenz's law", "Fleming's left hand rule", "Fleming's right hand rule"],
        "options_hi": ["फैराडे का नियम", "लेंज का नियम", "फ्लेमिंग का बाएं हाथ का नियम", "फ्लेमिंग का दाएं हाथ का नियम"],
        "answer_en": "Fleming's left hand rule",
        "answer_hi": "फ्लेमिंग का बाएं हाथ का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The IUPAC name of CH₃CH₂COOH is:",
        "question_hi": "CH₃CH₂COOH का IUPAC नाम है:",
        "options_en": ["Ethanoic acid", "Propanoic acid", "Butanoic acid", "Methanoic acid"],
        "options_hi": ["एथेनोइक अम्ल", "प्रोपेनोइक अम्ल", "ब्यूटेनोइक अम्ल", "मेथेनोइक अम्ल"],
        "answer_en": "Propanoic acid",
        "answer_hi": "प्रोपेनोइक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
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
        "num": 71,
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
        "num": 72,
        "question_en": "The force between two charges is F. If the distance is halved, the new force is:",
        "question_hi": "दो आवेशों के बीच बल F है। यदि दूरी आधी कर दी जाए, तो नया बल है:",
        "options_en": ["F/2", "F/4", "2F", "4F"],
        "options_hi": ["F/2", "F/4", "2F", "4F"],
        "answer_en": "4F",
        "answer_hi": "4F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The compound that gives positive test with Fehling's solution is:",
        "question_hi": "वह यौगिक जो फेहलिंग विलयन के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Aldehyde", "Ketone", "Alcohol", "Acid"],
        "options_hi": ["एल्डिहाइड", "कीटोन", "अल्कोहल", "अम्ल"],
        "answer_en": "Aldehyde",
        "answer_hi": "एल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
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
        "num": 75,
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
        "question_en": "The number of structural isomers of pentane is:",
        "question_hi": "पेंटेन के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "The enzyme that converts starch to glucose is:",
        "question_hi": "वह एंजाइम जो स्टार्च को ग्लूकोज में परिवर्तित करता है:",
        "options_en": ["Amylase", "Maltase", "Invertase", "Zymase"],
        "options_hi": ["एमाइलेज", "माल्टेज", "इन्वर्टेज", "जाइमेज"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The resistance of a wire is R. If its length is doubled, the new resistance is:",
        "question_hi": "एक तार का प्रतिरोध R है। यदि इसकी लंबाई दोगुनी कर दी जाए, तो नया प्रतिरोध है:",
        "options_en": ["R", "2R", "4R", "R/2"],
        "options_hi": ["R", "2R", "4R", "R/2"],
        "answer_en": "2R",
        "answer_hi": "2R",
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
        "num": 83,
        "question_en": "The site of DNA replication is:",
        "question_hi": "DNA प्रतिकृति का स्थल है:",
        "options_en": ["Nucleus", "Cytoplasm", "Ribosome", "Mitochondria"],
        "options_hi": ["केंद्रक", "कोशिका द्रव्य", "राइबोसोम", "माइटोकॉन्ड्रिया"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The force on a charged particle in electric field is given by:",
        "question_hi": "विद्युत क्षेत्र में आवेशित कण पर बल दिया जाता है:",
        "options_en": ["F = qE", "F = q(v × B)", "F = ma", "F = G(m₁m₂/r²)"],
        "options_hi": ["F = qE", "F = q(v × B)", "F = ma", "F = G(m₁m₂/r²)"],
        "answer_en": "F = qE",
        "answer_hi": "F = qE",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The compound that gives positive test with Tollens' reagent is:",
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
        "num": 87,
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
        "question_en": "The number of π bonds in ethylene is:",
        "question_hi": "एथिलीन में π बंधों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
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
        "question_en": "The site of Calvin cycle in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में केल्विन चक्र का स्थल है:",
        "options_en": ["Grana", "Stroma", "Thylakoid", "Cristae"],
        "options_hi": ["ग्रैना", "स्ट्रोमा", "थाइलाकोइड", "क्रिस्टी"],
        "answer_en": "Stroma",
        "answer_hi": "स्ट्रोमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The process of conversion of NH₃ to NO₂ in nitrogen cycle is called:",
        "question_hi": "नाइट्रोजन चक्र में NH₃ के NO₂ में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrification",
        "answer_hi": "नाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The magnetic field inside a solenoid is:",
        "question_hi": "परिनालिका के अंदर चुंबकीय क्षेत्र है:",
        "options_en": ["Uniform", "Non-uniform", "Zero", "Radial"],
        "options_hi": ["एकसमान", "असमान", "शून्य", "रेडियल"],
        "answer_en": "Uniform",
        "answer_hi": "एकसमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
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
        "num": 95,
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
        "num": 96,
        "question_en": "In human eye, the light sensitive cells are located in:",
        "question_hi": "मानव आंख में, प्रकाश संवेदी कोशिकाएं स्थित होती हैं:",
        "options_en": ["Cornea", "Lens", "Retina", "Iris"],
        "options_hi": ["कॉर्निया", "लेंस", "रेटिना", "आइरिस"],
        "answer_en": "Retina",
        "answer_hi": "रेटिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The dimensional formula of force is:",
        "question_hi": "बल का विमीय सूत्र है:",
        "options_en": ["MLT⁻²", "ML²T⁻²", "MLT⁻¹", "ML²T⁻¹"],
        "options_hi": ["MLT⁻²", "ML²T⁻²", "MLT⁻¹", "ML²T⁻¹"],
        "answer_en": "MLT⁻²",
        "answer_hi": "MLT⁻²",
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
        "question_en": "The number of points where f(x) = |x| is continuous is:",
        "question_hi": "बिंदुओं की संख्या जहाँ f(x) = |x| संतत है:",
        "options_en": ["0", "1", "All real numbers", "No real numbers"],
        "options_hi": ["0", "1", "सभी वास्तविक संख्याएं", "कोई वास्तविक संख्या नहीं"],
        "answer_en": "All real numbers",
        "answer_hi": "सभी वास्तविक संख्याएं",
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