const questions = [
    // Physics - Modern Physics & Optics (1-10)
    {
        "num": 1,
        "question_en": "The photoelectric effect demonstrates:",
        "question_hi": "प्रकाश विद्युत प्रभाव प्रदर्शित करता है:",
        "options_en": ["Wave nature of light", "Particle nature of light", "Both wave and particle nature", "Electromagnetic nature"],
        "options_hi": ["प्रकाश की तरंग प्रकृति", "प्रकाश की कण प्रकृति", "तरंग और कण दोनों प्रकृति", "विद्युत चुम्बकीय प्रकृति"],
        "answer_en": "Particle nature of light",
        "answer_hi": "प्रकाश की कण प्रकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The de Broglie wavelength of a particle is given by:",
        "question_hi": "किसी कण की डी ब्रोग्ली तरंगदैर्ध्य दी जाती है:",
        "options_en": ["λ = h/p", "λ = p/h", "λ = hc/E", "λ = E/h"],
        "options_hi": ["λ = h/p", "λ = p/h", "λ = hc/E", "λ = E/h"],
        "answer_en": "λ = h/p",
        "answer_hi": "λ = h/p",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "In Bohr's model of hydrogen atom, the radius of nth orbit is proportional to:",
        "question_hi": "हाइड्रोजन परमाणु के बोहर मॉडल में, nवीं कक्षा की त्रिज्या समानुपाती है:",
        "options_en": ["n", "n²", "1/n", "1/n²"],
        "options_hi": ["n", "n²", "1/n", "1/n²"],
        "answer_en": "n²",
        "answer_hi": "n²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The phenomenon of diffraction is most pronounced when:",
        "question_hi": "विवर्तन की घटना सबसे अधिक स्पष्ट होती है जब:",
        "options_en": ["Wavelength is much smaller than obstacle size", "Wavelength is comparable to obstacle size", "Wavelength is much larger than obstacle size", "Always equally pronounced"],
        "options_hi": ["तरंगदैर्ध्य अवरोध आकार से बहुत छोटी है", "तरंगदैर्ध्य अवरोध आकार के तुलनीय है", "तरंगदैर्ध्य अवरोध आकार से बहुत बड़ी है", "हमेशा समान रूप से स्पष्ट"],
        "answer_en": "Wavelength is comparable to obstacle size",
        "answer_hi": "तरंगदैर्ध्य अवरोध आकार के तुलनीय है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The half-life of a radioactive element is 10 days. What fraction remains after 30 days?",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-आयुकाल 10 दिन है। 30 दिनों के बाद कितना अंश शेष रहता है?",
        "options_en": ["1/2", "1/4", "1/8", "1/16"],
        "options_hi": ["1/2", "1/4", "1/8", "1/16"],
        "answer_en": "1/8",
        "answer_hi": "1/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In a p-n junction diode, the depletion region consists of:",
        "question_hi": "p-n संधि डायोड में, अवक्षय क्षेत्र में होते हैं:",
        "options_en": ["Only electrons", "Only holes", "Immobile ions", "Free charge carriers"],
        "options_hi": ["केवल इलेक्ट्रॉन", "केवल होल", "अचल आयन", "मुक्त आवेश वाहक"],
        "answer_en": "Immobile ions",
        "answer_hi": "अचल आयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The critical angle for total internal reflection depends on:",
        "question_hi": "पूर्ण आंतरिक परावर्तन के लिए क्रांतिक कोण निर्भर करता है:",
        "options_en": ["Wavelength of light", "Angle of incidence", "Refractive indices of media", "Both A and C"],
        "options_hi": ["प्रकाश की तरंगदैर्ध्य", "आपतन कोण", "माध्यमों के अपवर्तनांक", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In Young's double slit experiment, if the separation between slits is doubled, the fringe width:",
        "question_hi": "यंग के द्वि-स्लिट प्रयोग में, यदि स्लिटों के बीच की दूरी दोगुनी कर दी जाए, तो फ्रिंज चौड़ाई:",
        "options_en": ["Doubles", "Halves", "Quadruples", "Remains same"],
        "options_hi": ["दोगुनी हो जाती है", "आधी हो जाती है", "चौगुनी हो जाती है", "समान रहती है"],
        "answer_en": "Halves",
        "answer_hi": "आधी हो जाती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The energy of a photon is given by:",
        "question_hi": "एक फोटॉन की ऊर्जा दी जाती है:",
        "options_en": ["E = hν", "E = h/ν", "E = hλ", "E = hc/λ"],
        "options_hi": ["E = hν", "E = h/ν", "E = hλ", "E = hc/λ"],
        "answer_en": "E = hν",
        "answer_hi": "E = hν",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The principle of LASER involves:",
        "question_hi": "लेजर का सिद्धांत शामिल करता है:",
        "options_en": ["Stimulated absorption", "Spontaneous emission", "Stimulated emission", "Both B and C"],
        "options_hi": ["उत्तेजित अवशोषण", "सहज उत्सर्जन", "उत्तेजित उत्सर्जन", "B और C दोनों"],
        "answer_en": "Stimulated emission",
        "answer_hi": "उत्तेजित उत्सर्जन",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Thermodynamics & Equilibrium (11-20)
    {
        "num": 11,
        "question_en": "For a spontaneous process at constant temperature and pressure:",
        "question_hi": "स्थिर तापमान और दबाव पर एक स्वतःप्रवर्ती प्रक्रिया के लिए:",
        "options_en": ["ΔG > 0", "ΔG < 0", "ΔG = 0", "ΔH = 0"],
        "options_hi": ["ΔG > 0", "ΔG < 0", "ΔG = 0", "ΔH = 0"],
        "answer_en": "ΔG < 0",
        "answer_hi": "ΔG < 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The equilibrium constant Kp for the reaction N₂ + 3H₂ ⇌ 2NH₃ is given by:",
        "question_hi": "अभिक्रिया N₂ + 3H₂ ⇌ 2NH₃ के लिए साम्य स्थिरांक Kp दिया जाता है:",
        "options_en": ["P²NH₃/(P N₂ × P³H₂)", "P N₂ × P³H₂/P²NH₃", "2P NH₃/(P N₂ + 3P H₂)", "(P N₂ + P H₂)/P NH₃"],
        "options_hi": ["P²NH₃/(P N₂ × P³H₂)", "P N₂ × P³H₂/P²NH₃", "2P NH₃/(P N₂ + 3P H₂)", "(P N₂ + P H₂)/P NH₃"],
        "answer_en": "P²NH₃/(P N₂ × P³H₂)",
        "answer_hi": "P²NH₃/(P N₂ × P³H₂)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "According to Le Chatelier's principle, for an exothermic reaction, increase in temperature:",
        "question_hi": "ला शातेलिए सिद्धांत के अनुसार, एक ऊष्माक्षेपी अभिक्रिया के लिए, तापमान में वृद्धि:",
        "options_en": ["Favors forward reaction", "Favors backward reaction", "No effect", "Increases equilibrium constant"],
        "options_hi": ["अग्र अभिक्रिया को अनुकूल करती है", "पश्च अभिक्रिया को अनुकूल करती है", "कोई प्रभाव नहीं", "साम्य स्थिरांक बढ़ाती है"],
        "answer_en": "Favors backward reaction",
        "answer_hi": "पश्च अभिक्रिया को अनुकूल करती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The pH of a 0.01 M HCl solution is:",
        "question_hi": "0.01 M HCl विलयन का pH है:",
        "options_en": ["1", "2", "7", "12"],
        "options_hi": ["1", "2", "7", "12"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The solubility product of AgCl is 1.8 × 10⁻¹⁰. Its solubility in mol/L is:",
        "question_hi": "AgCl का विलेयता गुणनफल 1.8 × 10⁻¹⁰ है। mol/L में इसकी विलेयता है:",
        "options_en": ["1.8 × 10⁻¹⁰", "1.34 × 10⁻⁵", "3.6 × 10⁻¹⁰", "9.0 × 10⁻¹¹"],
        "options_hi": ["1.8 × 10⁻¹⁰", "1.34 × 10⁻⁵", "3.6 × 10⁻¹⁰", "9.0 × 10⁻¹¹"],
        "answer_en": "1.34 × 10⁻⁵",
        "answer_hi": "1.34 × 10⁻⁵",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The first law of thermodynamics is essentially the law of conservation of:",
        "question_hi": "ऊष्मागतिकी का प्रथम नियम अनिवार्य रूप से संरक्षण का नियम है:",
        "options_en": ["Mass", "Energy", "Momentum", "Charge"],
        "options_hi": ["द्रव्यमान", "ऊर्जा", "संवेग", "आवेश"],
        "answer_en": "Energy",
        "answer_hi": "ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "In a reversible adiabatic process for an ideal gas:",
        "question_hi": "एक आदर्श गैस के लिए उत्क्रमणीय रुद्धोष्म प्रक्रिया में:",
        "options_en": ["ΔU = 0", "ΔH = 0", "ΔS = 0", "ΔG = 0"],
        "options_hi": ["ΔU = 0", "ΔH = 0", "ΔS = 0", "ΔG = 0"],
        "answer_en": "ΔS = 0",
        "answer_hi": "ΔS = 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The common ion effect influences:",
        "question_hi": "सामान्य आयन प्रभाव प्रभावित करता है:",
        "options_en": ["Solubility", "pH", "Conductivity", "All of these"],
        "options_hi": ["विलेयता", "pH", "चालकता", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "For a reaction at equilibrium:",
        "question_hi": "साम्य पर एक अभिक्रिया के लिए:",
        "options_en": ["ΔG = 0", "ΔG° = 0", "K = 1", "Q = 0"],
        "options_hi": ["ΔG = 0", "ΔG° = 0", "K = 1", "Q = 0"],
        "answer_en": "ΔG = 0",
        "answer_hi": "ΔG = 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The relationship between ΔG° and equilibrium constant K is:",
        "question_hi": "ΔG° और साम्य स्थिरांक K के बीच संबंध है:",
        "options_en": ["ΔG° = -RT lnK", "ΔG° = RT lnK", "ΔG° = -RT/K", "ΔG° = RT/K"],
        "options_hi": ["ΔG° = -RT lnK", "ΔG° = RT lnK", "ΔG° = -RT/K", "ΔG° = RT/K"],
        "answer_en": "ΔG° = -RT lnK",
        "answer_hi": "ΔG° = -RT lnK",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Integration & Differential Equations (21-30)
    {
        "num": 21,
        "question_en": "∫(1/x) dx equals:",
        "question_hi": "∫(1/x) dx बराबर है:",
        "options_en": ["ln|x| + C", "x + C", "1/x² + C", "ln x + C"],
        "options_hi": ["ln|x| + C", "x + C", "1/x² + C", "ln x + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The order of the differential equation (d²y/dx²)³ + dy/dx = sinx is:",
        "question_hi": "अवकल समीकरण (d²y/dx²)³ + dy/dx = sinx की कोटि है:",
        "options_en": ["1", "2", "3", "0"],
        "options_hi": ["1", "2", "3", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "∫eˣ dx equals:",
        "question_hi": "∫eˣ dx बराबर है:",
        "options_en": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln(eˣ) + C"],
        "options_hi": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln(eˣ) + C"],
        "answer_en": "eˣ + C",
        "answer_hi": "eˣ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The solution of dy/dx = ky is:",
        "question_hi": "dy/dx = ky का हल है:",
        "options_en": ["y = Ce^kx", "y = Ckx", "y = kx + C", "y = C/x"],
        "options_hi": ["y = Ce^kx", "y = Ckx", "y = kx + C", "y = C/x"],
        "answer_en": "y = Ce^kx",
        "answer_hi": "y = Ce^kx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "∫sinx dx equals:",
        "question_hi": "∫sinx dx बराबर है:",
        "options_en": ["-cosx + C", "cosx + C", "-sinx + C", "sinx + C"],
        "options_hi": ["-cosx + C", "cosx + C", "-sinx + C", "sinx + C"],
        "answer_en": "-cosx + C",
        "answer_hi": "-cosx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The degree of the differential equation (d²y/dx²)² + (dy/dx)³ = 0 is:",
        "question_hi": "अवकल समीकरण (d²y/dx²)² + (dy/dx)³ = 0 की घात है:",
        "options_en": ["1", "2", "3", "Not defined"],
        "options_hi": ["1", "2", "3", "परिभाषित नहीं"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "∫(1/(1+x²)) dx equals:",
        "question_hi": "∫(1/(1+x²)) dx बराबर है:",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "ln(1+x²) + C", "2tan⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "ln(1+x²) + C", "2tan⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The integrating factor of dy/dx + Py = Q is:",
        "question_hi": "dy/dx + Py = Q का समाकलन गुणक है:",
        "options_en": ["e^∫P dx", "e^∫Q dx", "e^∫P dy", "e^∫Q dy"],
        "options_hi": ["e^∫P dx", "e^∫Q dx", "e^∫P dy", "e^∫Q dy"],
        "answer_en": "e^∫P dx",
        "answer_hi": "e^∫P dx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "∫sec²x dx equals:",
        "question_hi": "∫sec²x dx बराबर है:",
        "options_en": ["tanx + C", "secx + C", "cotx + C", "-tanx + C"],
        "options_hi": ["tanx + C", "secx + C", "cotx + C", "-tanx + C"],
        "answer_en": "tanx + C",
        "answer_hi": "tanx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The general solution of dy/dx = 2x is:",
        "question_hi": "dy/dx = 2x का व्यापक हल है:",
        "options_en": ["y = x² + C", "y = 2x + C", "y = x²", "y = 2x"],
        "options_hi": ["y = x² + C", "y = 2x + C", "y = x²", "y = 2x"],
        "answer_en": "y = x² + C",
        "answer_hi": "y = x² + C",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics & Evolution (31-40)
    {
        "num": 31,
        "question_en": "The father of genetics is:",
        "question_hi": "आनुवंशिकी के जनक हैं:",
        "options_en": ["Charles Darwin", "Gregor Mendel", "James Watson", "Francis Crick"],
        "options_hi": ["चार्ल्स डार्विन", "ग्रेगर मेंडल", "जेम्स वाटसन", "फ्रांसिस क्रिक"],
        "answer_en": "Gregor Mendel",
        "answer_hi": "ग्रेगर मेंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The theory of natural selection was proposed by:",
        "question_hi": "प्राकृतिक चयन का सिद्धांत प्रस्तावित किया गया था:",
        "options_en": ["Lamarck", "Darwin", "Mendel", "Haldane"],
        "options_hi": ["लैमार्क", "डार्विन", "मेंडल", "हाल्डेन"],
        "answer_en": "Darwin",
        "answer_hi": "डार्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "In DNA, adenine pairs with:",
        "question_hi": "DNA में, एडेनीन जोड़ी बनाता है:",
        "options_en": ["Guanine", "Cytosine", "Thymine", "Uracil"],
        "options_hi": ["ग्वानीन", "साइटोसीन", "थाइमीन", "यूरैसिल"],
        "answer_en": "Thymine",
        "answer_hi": "थाइमीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The process of mRNA synthesis from DNA is called:",
        "question_hi": "DNA से mRNA संश्लेषण की प्रक्रिया कहलाती है:",
        "options_en": ["Translation", "Transcription", "Replication", "Mutation"],
        "options_hi": ["अनुवाद", "प्रतिलिपिकरण", "प्रतिकृति", "उत्परिवर्तन"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलिपिकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The human genome contains approximately how many genes?",
        "question_hi": "मानव जीनोम में लगभग कितने जीन होते हैं?",
        "options_en": ["2,000-5,000", "20,000-25,000", "100,000-150,000", "1,000,000-2,000,000"],
        "options_hi": ["2,000-5,000", "20,000-25,000", "100,000-150,000", "1,000,000-2,000,000"],
        "answer_en": "20,000-25,000",
        "answer_hi": "20,000-25,000",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The phenomenon where both alleles express themselves in heterozygous condition is called:",
        "question_hi": "वह घटना जहां विषमयुग्मजी अवस्था में दोनों एलील स्वयं को व्यक्त करते हैं, कहलाती है:",
        "options_en": ["Dominance", "Recessiveness", "Codominance", "Incomplete dominance"],
        "options_hi": ["प्रभाविता", "अप्रभाविता", "सहप्रभाविता", "अपूर्ण प्रभाविता"],
        "answer_en": "Codominance",
        "answer_hi": "सहप्रभाविता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The ultimate source of genetic variation is:",
        "question_hi": "आनुवंशिक विविधता का अंतिम स्रोत है:",
        "options_en": ["Natural selection", "Mutation", "Genetic drift", "Gene flow"],
        "options_hi": ["प्राकृतिक चयन", "उत्परिवर्तन", "आनुवंशिक विसरण", "जीन प्रवाह"],
        "answer_en": "Mutation",
        "answer_hi": "उत्परिवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The sex chromosomes in human males are:",
        "question_hi": "मानव नर में लिंग गुणसूत्र हैं:",
        "options_en": ["XX", "XY", "YY", "XO"],
        "options_hi": ["XX", "XY", "YY", "XO"],
        "answer_en": "XY",
        "answer_hi": "XY",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The process of protein synthesis from mRNA is called:",
        "question_hi": "mRNA से प्रोटीन संश्लेषण की प्रक्रिया कहलाती है:",
        "options_en": ["Transcription", "Translation", "Replication", "Transformation"],
        "options_hi": ["प्रतिलिपिकरण", "अनुवाद", "प्रतिकृति", "रूपांतरण"],
        "answer_en": "Translation",
        "answer_hi": "अनुवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The theory of inheritance of acquired characters was proposed by:",
        "question_hi": "अर्जित लक्षणों की वंशागति का सिद्धांत प्रस्तावित किया गया था:",
        "options_en": ["Darwin", "Mendel", "Lamarck", "De Vries"],
        "options_hi": ["डार्विन", "मेंडल", "लैमार्क", "डी व्रीस"],
        "answer_en": "Lamarck",
        "answer_hi": "लैमार्क",
        "attempted": false,
        "selected": ""
    },

    // English - Grammar & Vocabulary (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["She don't like apples", "She doesn't like apples", "She doesn't likes apples", "She don't likes apples"],
        "options_hi": ["She don't like apples", "She doesn't like apples", "She doesn't likes apples", "She don't likes apples"],
        "answer_en": "She doesn't like apples",
        "answer_hi": "She doesn't like apples",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The synonym of 'Belligerent' is:",
        "question_hi": "'Belligerent' का समानार्थी है:",
        "options_en": ["Peaceful", "Aggressive", "Friendly", "Cooperative"],
        "options_hi": ["शांतिपूर्ण", "आक्रामक", "मित्रवत", "सहयोगी"],
        "answer_en": "Aggressive",
        "answer_hi": "आक्रामक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Identify the correct passive voice: 'They built this house in 1990.'",
        "question_hi": "सही कर्मवाच्य पहचानें: 'They built this house in 1990.'",
        "options_en": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built in 1990 by them", "This house has been built in 1990 by them"],
        "options_hi": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built in 1990 by them", "This house has been built in 1990 by them"],
        "answer_en": "This house was built in 1990 by them",
        "answer_hi": "This house was built in 1990 by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The antonym of 'Ephemeral' is:",
        "question_hi": "'Ephemeral' का विलोम है:",
        "options_en": ["Temporary", "Permanent", "Brief", "Short-lived"],
        "options_hi": ["अस्थायी", "स्थायी", "संक्षिप्त", "अल्पकालिक"],
        "answer_en": "Permanent",
        "answer_hi": "स्थायी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Choose the correct word: 'The data ___ been analyzed.'",
        "question_hi": "सही शब्द चुनें: 'The data ___ been analyzed.'",
        "options_en": ["has", "have", "is", "are"],
        "options_hi": ["has", "have", "is", "are"],
        "answer_en": "has",
        "answer_hi": "has",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The meaning of 'Ambiguous' is:",
        "question_hi": "'Ambiguous' का अर्थ है:",
        "options_en": ["Clear", "Unclear", "Definite", "Specific"],
        "options_hi": ["स्पष्ट", "अस्पष्ट", "निश्चित", "विशिष्ट"],
        "answer_en": "Unclear",
        "answer_hi": "अस्पष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Identify the type of clause: 'I know what you want.'",
        "question_hi": "उपवाक्य का प्रकार पहचानें: 'I know what you want.'",
        "options_en": ["Adjective clause", "Adverb clause", "Noun clause", "Main clause"],
        "options_hi": ["विशेषण उपवाक्य", "क्रिया विशेषण उपवाक्य", "संज्ञा उपवाक्य", "मुख्य उपवाक्य"],
        "answer_en": "Noun clause",
        "answer_hi": "संज्ञा उपवाक्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The correct plural of 'criterion' is:",
        "question_hi": "'criterion' का सही बहुवचन है:",
        "options_en": ["Criterions", "Criterias", "Criteria", "Criterion"],
        "options_hi": ["Criterions", "Criterias", "Criteria", "Criterion"],
        "answer_en": "Criteria",
        "answer_hi": "Criteria",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Choose the correctly spelled word:",
        "question_hi": "सही वर्तनी वाला शब्द चुनें:",
        "options_en": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "options_hi": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "answer_en": "Accommodate",
        "answer_hi": "Accommodate",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The meaning of 'Pragmatic' is:",
        "question_hi": "'Pragmatic' का अर्थ है:",
        "options_en": ["Theoretical", "Practical", "Idealistic", "Philosophical"],
        "options_hi": ["सैद्धांतिक", "व्यावहारिक", "आदर्शवादी", "दार्शनिक"],
        "answer_en": "Practical",
        "answer_hi": "व्यावहारिक",
        "attempted": false,
        "selected": ""
    },

    // Hindi - व्याकरण और साहित्य (51-60)
    {
        "num": 51,
        "question_en": "'आँसू' काव्य संग्रह के रचयिता हैं:",
        "question_hi": "'आँसू' काव्य संग्रह के रचयिता हैं:",
        "options_en": ["जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा", "हरिवंश राय बच्चन"],
        "options_hi": ["जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा", "हरिवंश राय बच्चन"],
        "answer_en": "जयशंकर प्रसाद",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "हिंदी व्याकरण में 'लिंग' के कितने भेद हैं?",
        "question_hi": "हिंदी व्याकरण में 'लिंग' के कितने भेद हैं?",
        "options_en": ["दो", "तीन", "चार", "पाँच"],
        "options_hi": ["दो", "तीन", "चार", "पाँच"],
        "answer_en": "दो",
        "answer_hi": "दो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'गुनाहों का देवता' के लेखक हैं:",
        "question_hi": "'गुनाहों का देवता' के लेखक हैं:",
        "options_en": ["धर्मवीर भारती", "मोहन राकेश", "कमलेश्वर", "राजेंद्र यादव"],
        "options_hi": ["धर्मवीर भारती", "मोहन राकेश", "कमलेश्वर", "राजेंद्र यादव"],
        "answer_en": "धर्मवीर भारती",
        "answer_hi": "धर्मवीर भारती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "'रस' की परिभाषा किसने दी?",
        "question_hi": "'रस' की परिभाषा किसने दी?",
        "options_en": ["भरतमुनि", "पाणिनि", "भामह", "दंडी"],
        "options_hi": ["भरतमुनि", "पाणिनि", "भामह", "दंडी"],
        "answer_en": "भरतमुनि",
        "answer_hi": "भरतमुनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'कामायनी' महाकाव्य में कितने सर्ग हैं?",
        "question_hi": "'कामायनी' महाकाव्य में कितने सर्ग हैं?",
        "options_en": ["10", "12", "15", "17"],
        "options_hi": ["10", "12", "15", "17"],
        "answer_en": "15",
        "answer_hi": "15",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "हिंदी में कारक के कितने भेद हैं?",
        "question_hi": "हिंदी में कारक के कितने भेद हैं?",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'मैला आँचल' उपन्यास के लेखक हैं:",
        "question_hi": "'मैला आँचल' उपन्यास के लेखक हैं:",
        "options_en": ["फणीश्वर नाथ रेणु", "नागार्जुन", "राही मासूम रजा", "भीष्म साहनी"],
        "options_hi": ["फणीश्वर नाथ रेणु", "नागार्जुन", "राही मासूम रजा", "भीष्म साहनी"],
        "answer_en": "फणीश्वर नाथ रेणु",
        "answer_hi": "फणीश्वर नाथ रेणु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'अशुद्धि का शुद्ध रूप चुनें: 'वह पुस्तक पढ़ रहा हैं।'",
        "question_hi": "'अशुद्धि का शुद्ध रूप चुनें: 'वह पुस्तक पढ़ रहा हैं।'",
        "options_en": ["वह पुस्तक पढ़ रहा है।", "वह पुस्तक पढ़ रहे हैं।", "वह पुस्तक पढ़ रही हैं।", "वह पुस्तक पढ़ रहे है।"],
        "options_hi": ["वह पुस्तक पढ़ रहा है।", "वह पुस्तक पढ़ रहे हैं।", "वह पुस्तक पढ़ रही हैं।", "वह पुस्तक पढ़ रहे है।"],
        "answer_en": "वह पुस्तक पढ़ रहा है।",
        "answer_hi": "वह पुस्तक पढ़ रहा है।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'तमस' उपन्यास के लेखक हैं:",
        "question_hi": "'तमस' उपन्यास के लेखक हैं:",
        "options_en": ["भीष्म साहनी", "कमलेश्वर", "मोहन राकेश", "यशपाल"],
        "options_hi": ["भीष्म साहनी", "कमलेश्वर", "मोहन राकेश", "यशपाल"],
        "answer_en": "भीष्म साहनी",
        "answer_hi": "भीष्म साहनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "हिंदी साहित्य में 'छायावाद' युग का समय है:",
        "question_hi": "हिंदी साहित्य में 'छायावाद' युग का समय है:",
        "options_en": ["1900-1920", "1918-1937", "1930-1945", "1940-1955"],
        "options_hi": ["1900-1920", "1918-1937", "1930-1945", "1940-1955"],
        "answer_en": "1918-1937",
        "answer_hi": "1918-1937",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (61-70)
    {
        "num": 61,
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
        "num": 62,
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
        "num": 63,
        "question_en": "The SI unit of pressure is:",
        "question_hi": "दाब की SI इकाई है:",
        "options_en": ["Newton", "Pascal", "Joule", "Watt"],
        "options_hi": ["न्यूटन", "पास्कल", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The chemical name of vitamin C is:",
        "question_hi": "विटामिन C का रासायनिक नाम है:",
        "options_en": ["Ascorbic acid", "Citric acid", "Folic acid", "Nicotinic acid"],
        "options_hi": ["एस्कॉर्बिक अम्ल", "साइट्रिक अम्ल", "फोलिक अम्ल", "निकोटिनिक अम्ल"],
        "answer_en": "Ascorbic acid",
        "answer_hi": "एस्कॉर्बिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
        "question_en": "The pH of pure water is:",
        "question_hi": "शुद्ध जल का pH है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The fastest land animal is:",
        "question_hi": "सबसे तेज स्थलीय जानवर है:",
        "options_en": ["Cheetah", "Lion", "Tiger", "Horse"],
        "options_hi": ["चीता", "शेर", "बाघ", "घोड़ा"],
        "answer_en": "Cheetah",
        "answer_hi": "चीता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The study of fossils is called:",
        "question_hi": "जीवाश्मों का अध्ययन कहलाता है:",
        "options_en": ["Paleontology", "Archaeology", "Geology", "Anthropology"],
        "options_hi": ["जीवाश्मिकी", "पुरातत्व", "भूविज्ञान", "मानवशास्त्र"],
        "answer_en": "Paleontology",
        "answer_hi": "जीवाश्मिकी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The gas used in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में प्रयुक्त गैस है:",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The first computer programmer was:",
        "question_hi": "पहली कंप्यूटर प्रोग्रामर थीं:",
        "options_en": ["Charles Babbage", "Ada Lovelace", "Alan Turing", "Bill Gates"],
        "options_hi": ["चार्ल्स बैबेज", "एडा लवलेस", "एलन ट्यूरिंग", "बिल गेट्स"],
        "answer_en": "Ada Lovelace",
        "answer_hi": "एडा लवलेस",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions - JEE Main Level (71-100)
    {
        "num": 71,
        "question_en": "The number of significant figures in 0.00200 is:",
        "question_hi": "0.00200 में सार्थक अंकों की संख्या है:",
        "options_en": ["1", "2", "3", "5"],
        "options_hi": ["1", "2", "3", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
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
        "num": 73,
        "question_en": "The value of ∫(0 to π/2) sinx dx is:",
        "question_hi": "∫(0 से π/2) sinx dx का मान है:",
        "options_en": ["0", "1", "π/2", "2"],
        "options_hi": ["0", "1", "π/2", "2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "In mitochondria, ATP synthesis occurs in:",
        "question_hi": "माइटोकॉन्ड्रिया में, ATP संश्लेषण होता है:",
        "options_en": ["Matrix", "Cristae", "Outer membrane", "Inner membrane"],
        "options_hi": ["मैट्रिक्स", "क्रिस्टी", "बाहरी झिल्ली", "आंतरिक झिल्ली"],
        "answer_en": "Inner membrane",
        "answer_hi": "आंतरिक झिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The dimension of Planck's constant is:",
        "question_hi": "प्लांक नियतांक की विमा है:",
        "options_en": ["ML²T⁻¹", "ML²T⁻²", "MLT⁻¹", "ML²T"],
        "options_hi": ["ML²T⁻¹", "ML²T⁻²", "MLT⁻¹", "ML²T"],
        "answer_en": "ML²T⁻¹",
        "answer_hi": "ML²T⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The coordination number in body centered cubic structure is:",
        "question_hi": "काय केंद्रित घन संरचना में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The general solution of dy/dx = y is:",
        "question_hi": "dy/dx = y का व्यापक हल है:",
        "options_en": ["y = Ce^x", "y = Cx", "y = C", "y = Ce^{-x}"],
        "options_hi": ["y = Ce^x", "y = Cx", "y = C", "y = Ce^{-x}"],
        "answer_en": "y = Ce^x",
        "answer_hi": "y = Ce^x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "In PCR, the enzyme used is:",
        "question_hi": "PCR में, प्रयुक्त एंजाइम है:",
        "options_en": ["DNA polymerase", "RNA polymerase", "Taq polymerase", "Reverse transcriptase"],
        "options_hi": ["DNA पॉलीमरेज़", "RNA पॉलीमरेज़", "Taq पॉलीमरेज़", "रिवर्स ट्रांसक्रिप्टेज"],
        "answer_en": "Taq polymerase",
        "answer_hi": "Taq पॉलीमरेज़",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The magnetic quantum number determines:",
        "question_hi": "चुंबकीय क्वांटम संख्या निर्धारित करती है:",
        "options_en": ["Energy of orbital", "Shape of orbital", "Orientation of orbital", "Size of orbital"],
        "options_hi": ["कक्षक की ऊर्जा", "कक्षक की आकृति", "कक्षक की अभिविन्यास", "कक्षक का आकार"],
        "answer_en": "Orientation of orbital",
        "answer_hi": "कक्षक की अभिविन्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The value of lim(x→0) (tanx/x) is:",
        "question_hi": "lim(x→0) (tanx/x) का मान है:",
        "options_en": ["0", "1", "∞", "Does not exist"],
        "options_hi": ["0", "1", "∞", "अस्तित्व में नहीं है"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The compound that shows geometrical isomerism is:",
        "question_hi": "वह यौगिक जो ज्यामितीय समावयवता दर्शाता है:",
        "options_en": ["Propene", "But-1-ene", "But-2-ene", "Ethene"],
        "options_hi": ["प्रोपीन", "ब्यूट-1-ईन", "ब्यूट-2-ईन", "ईथीन"],
        "answer_en": "But-2-ene",
        "answer_hi": "ब्यूट-2-ईन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The work done in isothermal reversible expansion of ideal gas is:",
        "question_hi": "आदर्श गैस के समतापीय उत्क्रमणीय प्रसार में किया गया कार्य है:",
        "options_en": ["Zero", "nRT ln(V₂/V₁)", "PΔV", "nRΔT"],
        "options_hi": ["शून्य", "nRT ln(V₂/V₁)", "PΔV", "nRΔT"],
        "answer_en": "nRT ln(V₂/V₁)",
        "answer_hi": "nRT ln(V₂/V₁)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
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
        "num": 84,
        "question_en": "The derivative of sin⁻¹x is:",
        "question_hi": "sin⁻¹x का अवकलज है:",
        "options_en": ["1/√(1-x²)", "1/√(1+x²)", "-1/√(1-x²)", "1/(1+x²)"],
        "options_hi": ["1/√(1-x²)", "1/√(1+x²)", "-1/√(1-x²)", "1/(1+x²)"],
        "answer_en": "1/√(1-x²)",
        "answer_hi": "1/√(1-x²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "In human eye, the image is formed on:",
        "question_hi": "मानव आँख में, प्रतिबिंब बनता है:",
        "options_en": ["Cornea", "Iris", "Retina", "Lens"],
        "options_hi": ["कॉर्निया", "परितारिका", "रेटिना", "लेंस"],
        "answer_en": "Retina",
        "answer_hi": "रेटिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
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
        "num": 87,
        "question_en": "The value of i⁴ is:",
        "question_hi": "i⁴ का मान है:",
        "options_en": ["i", "-i", "1", "-1"],
        "options_hi": ["i", "-i", "1", "-1"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The hormone that regulates blood sugar level is:",
        "question_hi": "वह हार्मोन जो रक्त शर्करा स्तर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"],
        "options_hi": ["इंसुलिन", "थायरॉक्सिन", "एड्रेनालाईन", "एस्ट्रोजन"],
        "answer_en": "Insulin",
        "answer_hi": "इंसुलिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The number of unpaired electrons in Fe²⁺ (Z=26) is:",
        "question_hi": "Fe²⁺ (Z=26) में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["4", "5", "6", "3"],
        "options_hi": ["4", "5", "6", "3"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The value of ∫(sec²x - 1) dx is:",
        "question_hi": "∫(sec²x - 1) dx का मान है:",
        "options_en": ["tanx - x + C", "tanx + x + C", "secx - x + C", "secx + x + C"],
        "options_hi": ["tanx - x + C", "tanx + x + C", "secx - x + C", "secx + x + C"],
        "answer_en": "tanx - x + C",
        "answer_hi": "tanx - x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "In Young's double slit experiment, the fringe width is:",
        "question_hi": "यंग के द्वि-स्लिट प्रयोग में, फ्रिंज चौड़ाई है:",
        "options_en": ["λD/d", "λd/D", "dD/λ", "λ/d"],
        "options_hi": ["λD/d", "λd/D", "dD/λ", "λ/d"],
        "answer_en": "λD/d",
        "answer_hi": "λD/d",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The IUPAC name of [Co(NH₃)₆]Cl₃ is:",
        "question_hi": "[Co(NH₃)₆]Cl₃ का IUPAC नाम है:",
        "options_en": ["Hexaaminecobalt(III) chloride", "Cobalt hexaamine chloride", "Hexaamminecobalt(III) chloride", "Cobalt(III) hexaammine chloride"],
        "options_hi": ["हेक्साएमीनकोबाल्ट(III) क्लोराइड", "कोबाल्ट हेक्साएमीन क्लोराइड", "हेक्साएम्मीनकोबाल्ट(III) क्लोराइड", "कोबाल्ट(III) हेक्साएम्मीन क्लोराइड"],
        "answer_en": "Hexaamminecobalt(III) chloride",
        "answer_hi": "हेक्साएम्मीनकोबाल्ट(III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The value of d/dx(eˣ sinx) is:",
        "question_hi": "d/dx(eˣ sinx) का मान है:",
        "options_en": ["eˣ cosx", "eˣ(sinx + cosx)", "eˣ(sinx - cosx)", "eˣ sinx cosx"],
        "options_hi": ["eˣ cosx", "eˣ(sinx + cosx)", "eˣ(sinx - cosx)", "eˣ sinx cosx"],
        "answer_en": "eˣ(sinx + cosx)",
        "answer_hi": "eˣ(sinx + cosx)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The enzyme that breaks down starch is:",
        "question_hi": "वह एंजाइम जो स्टार्च को तोड़ता है:",
        "options_en": ["Pepsin", "Amylase", "Lipase", "Trypsin"],
        "options_hi": ["पेप्सिन", "एमाइलेज", "लाइपेज", "ट्रिप्सिन"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The number of spectral lines when electron jumps from 4th to 1st orbit in hydrogen atom is:",
        "question_hi": "हाइड्रोजन परमाणु में इलेक्ट्रॉन के 4वीं से 1वीं कक्षा में कूदने पर वर्णक्रमीय रेखाओं की संख्या है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The value of ∫(1 to e) (1/x) dx is:",
        "question_hi": "∫(1 से e) (1/x) dx का मान है:",
        "options_en": ["0", "1", "e", "2"],
        "options_hi": ["0", "1", "e", "2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
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
        "num": 98,
        "question_en": "The value of lim(x→∞) (1 + 2/x)ˣ is:",
        "question_hi": "lim(x→∞) (1 + 2/x)ˣ का मान है:",
        "options_en": ["1", "e", "e²", "∞"],
        "options_hi": ["1", "e", "e²", "∞"],
        "answer_en": "e²",
        "answer_hi": "e²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The process of conversion of nitrate to nitrogen gas is called:",
        "question_hi": "नाइट्रेट के नाइट्रोजन गैस में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Denitrification",
        "answer_hi": "विनाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The value of ∫(0 to π) sin²x dx is:",
        "question_hi": "∫(0 से π) sin²x dx का मान है:",
        "options_en": ["0", "π/2", "π", "2π"],
        "options_hi": ["0", "π/2", "π", "2π"],
        "answer_en": "π/2",
        "answer_hi": "π/2",
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