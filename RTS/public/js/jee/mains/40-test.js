const questions = [
    // Physics - Modern Physics & Semiconductors (1-10)
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
        "question_en": "The de Broglie wavelength of an electron accelerated through potential V is:",
        "question_hi": "V विभव से त्वरित इलेक्ट्रॉन की डी ब्रोग्ली तरंगदैर्ध्य है:",
        "options_en": ["λ = h/√(2meV)", "λ = h/(2meV)", "λ = √(h/2meV)", "λ = h²/√(2meV)"],
        "options_hi": ["λ = h/√(2meV)", "λ = h/(2meV)", "λ = √(h/2meV)", "λ = h²/√(2meV)"],
        "answer_en": "λ = h/√(2meV)",
        "answer_hi": "λ = h/√(2meV)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "In a p-n junction diode, the depletion region consists of:",
        "question_hi": "p-n संधि डायोड में, अवक्षय क्षेत्र होता है:",
        "options_en": ["Only electrons", "Only holes", "Immobile ions", "Free charge carriers"],
        "options_hi": ["केवल इलेक्ट्रॉन", "केवल होल", "अचल आयन", "मुक्त आवेश वाहक"],
        "answer_en": "Immobile ions",
        "answer_hi": "अचल आयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The energy gap in semiconductors is typically of the order:",
        "question_hi": "अर्धचालकों में ऊर्जा अंतराल सामान्यतः कोटि का होता है:",
        "options_en": ["0.1-0.3 eV", "1-3 eV", "5-10 eV", "More than 10 eV"],
        "options_hi": ["0.1-0.3 eV", "1-3 eV", "5-10 eV", "10 eV से अधिक"],
        "answer_en": "1-3 eV",
        "answer_hi": "1-3 eV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "In Bohr's model, the radius of nth orbit is proportional to:",
        "question_hi": "बोहर मॉडल में, nवीं कक्षा की त्रिज्या समानुपाती होती है:",
        "options_en": ["n", "n²", "1/n", "1/n²"],
        "options_hi": ["n", "n²", "1/n", "1/n²"],
        "answer_en": "n²",
        "answer_hi": "n²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "A transistor amplifier works in:",
        "question_hi": "ट्रांजिस्टर प्रवर्धक कार्य करता है:",
        "options_en": ["Active region", "Cut-off region", "Saturation region", "Breakdown region"],
        "options_hi": ["सक्रिय क्षेत्र", "कट-ऑफ क्षेत्र", "संतृप्ति क्षेत्र", "भंजन क्षेत्र"],
        "answer_en": "Active region",
        "answer_hi": "सक्रिय क्षेत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The half-life of a radioactive element is 10 days. The mean life is approximately:",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-आयुकाल 10 दिन है। माध्य आयु लगभग है:",
        "options_en": ["6.93 days", "14.43 days", "20 days", "30 days"],
        "options_hi": ["6.93 दिन", "14.43 दिन", "20 दिन", "30 दिन"],
        "answer_en": "14.43 days",
        "answer_hi": "14.43 दिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In LASER, the process responsible for coherent light emission is:",
        "question_hi": "लेजर में, संसक्त प्रकाश उत्सर्जन के लिए उत्तरदायी प्रक्रिया है:",
        "options_en": ["Spontaneous emission", "Stimulated emission", "Absorption", "Scattering"],
        "options_hi": ["सहज उत्सर्जन", "उद्दीप्त उत्सर्जन", "अवशोषण", "प्रकीर्णन"],
        "answer_en": "Stimulated emission",
        "answer_hi": "उद्दीप्त उत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The truth table for NAND gate shows output 0 when:",
        "question_hi": "NAND गेट के सत्य सारणी में निर्गत 0 दिखाती है जब:",
        "options_en": ["All inputs are 0", "All inputs are 1", "Any input is 0", "Any input is 1"],
        "options_hi": ["सभी निवेश 0 हैं", "सभी निवेश 1 हैं", "कोई निवेश 0 है", "कोई निवेश 1 है"],
        "answer_en": "All inputs are 1",
        "answer_hi": "सभी निवेश 1 हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The mass defect in nuclear binding energy is due to:",
        "question_hi": "नाभिकीय बंधन ऊर्जा में द्रव्यमान क्षति होती है:",
        "options_en": ["Mass converted to energy", "Proton decay", "Neutron decay", "Electron capture"],
        "options_hi": ["ऊर्जा में परिवर्तित द्रव्यमान", "प्रोटॉन क्षय", "न्यूट्रॉन क्षय", "इलेक्ट्रॉन अभिग्रहण"],
        "answer_en": "Mass converted to energy",
        "answer_hi": "ऊर्जा में परिवर्तित द्रव्यमान",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Coordination Compounds & d-block (11-20)
    {
        "num": 11,
        "question_en": "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is:",
        "question_hi": "[Co(NH₃)₅Cl]Cl₂ का IUPAC नाम है:",
        "options_en": ["Pentaamminechlorocobalt(III) chloride", "Chloropentaamminecobalt(III) chloride", "Pentaamminecobalt(III) chloride", "Amminechlorocobalt(III) chloride"],
        "options_hi": ["पेंटाएमीनक्लोरोकोबाल्ट(III) क्लोराइड", "क्लोरोपेंटाएमीनकोबाल्ट(III) क्लोराइड", "पेंटाएमीनकोबाल्ट(III) क्लोराइड", "एमीनक्लोरोकोबाल्ट(III) क्लोराइड"],
        "answer_en": "Pentaamminechlorocobalt(III) chloride",
        "answer_hi": "पेंटाएमीनक्लोरोकोबाल्ट(III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The coordination number in Fe(CO)₅ is:",
        "question_hi": "Fe(CO)₅ में उपसहसंयोजन संख्या है:",
        "options_en": ["2", "4", "5", "6"],
        "options_hi": ["2", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which is a chelating ligand?",
        "question_hi": "कौन सा कीलेटिंग लिगेंड है?",
        "options_en": ["NH₃", "H₂O", "EDTA", "Cl⁻"],
        "options_hi": ["NH₃", "H₂O", "EDTA", "Cl⁻"],
        "answer_en": "EDTA",
        "answer_hi": "EDTA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The magnetic moment of [Fe(CN)₆]⁴⁻ indicates:",
        "question_hi": "[Fe(CN)₆]⁴⁻ का चुंबकीय आघूर्ण इंगित करता है:",
        "options_en": ["0 unpaired electrons", "1 unpaired electron", "4 unpaired electrons", "5 unpaired electrons"],
        "options_hi": ["0 अयुग्मित इलेक्ट्रॉन", "1 अयुग्मित इलेक्ट्रॉन", "4 अयुग्मित इलेक्ट्रॉन", "5 अयुग्मित इलेक्ट्रॉन"],
        "answer_en": "0 unpaired electrons",
        "answer_hi": "0 अयुग्मित इलेक्ट्रॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The geometry of [Ni(CN)₄]²⁻ is:",
        "question_hi": "[Ni(CN)₄]²⁻ की ज्यामिति है:",
        "options_en": ["Tetrahedral", "Square planar", "Octahedral", "Trigonal bipyramidal"],
        "options_hi": ["चतुष्फलकीय", "वर्ग समतलीय", "अष्टफलकीय", "त्रिकोणीय द्विपिरामिडी"],
        "answer_en": "Square planar",
        "answer_hi": "वर्ग समतलीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which metal shows highest oxidation state?",
        "question_hi": "कौन सी धातु उच्चतम ऑक्सीकरण अवस्था दर्शाती है?",
        "options_en": ["Sc", "Cr", "Mn", "Fe"],
        "options_hi": ["Sc", "Cr", "Mn", "Fe"],
        "answer_en": "Mn",
        "answer_hi": "Mn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The catalyst used in Haber's process is:",
        "question_hi": "हैबर प्रक्रम में प्रयुक्त उत्प्रेरक है:",
        "options_en": ["Pt", "Fe", "Ni", "V₂O₅"],
        "options_hi": ["Pt", "Fe", "Ni", "V₂O₅"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Lanthanoid contraction is due to:",
        "question_hi": "लैन्थेनाइड संकुचन होता है:",
        "options_en": ["Poor shielding of 4f electrons", "High nuclear charge", "Both A and B", "Small size of f-orbitals"],
        "options_hi": ["4f इलेक्ट्रॉनों का कम परिरक्षण", "उच्च नाभिकीय आवेश", "A और B दोनों", "f-कक्षकों का छोटा आकार"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The color of KMnO₄ is due to:",
        "question_hi": "KMnO₄ का रंग होता है:",
        "options_en": ["d-d transition", "Charge transfer", "Paramagnetism", "Crystal field splitting"],
        "options_hi": ["d-d संक्रमण", "आवेश स्थानांतरण", "अनुचुम्बकत्व", "क्रिस्टल क्षेत्र विपाटन"],
        "answer_en": "Charge transfer",
        "answer_hi": "आवेश स्थानांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which is not a transition element?",
        "question_hi": "कौन सा संक्रमण तत्व नहीं है?",
        "options_en": ["Cu", "Ag", "Zn", "Cr"],
        "options_hi": ["Cu", "Ag", "Zn", "Cr"],
        "answer_en": "Zn",
        "answer_hi": "Zn",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Integration & Differential Equations (21-30)
    {
        "num": 21,
        "question_en": "∫(1/x)dx equals:",
        "question_hi": "∫(1/x)dx बराबर है:",
        "options_en": ["ln|x| + C", "x²/2 + C", "1/x² + C", "ln x² + C"],
        "options_hi": ["ln|x| + C", "x²/2 + C", "1/x² + C", "ln x² + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The order of differential equation (d²y/dx²)³ + dy/dx = sinx is:",
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
        "question_en": "∫eˣdx equals:",
        "question_hi": "∫eˣdx बराबर है:",
        "options_en": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln eˣ + C"],
        "options_hi": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln eˣ + C"],
        "answer_en": "eˣ + C",
        "answer_hi": "eˣ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The solution of dy/dx = y is:",
        "question_hi": "dy/dx = y का हल है:",
        "options_en": ["y = Ceˣ", "y = Ce⁻ˣ", "y = Cx", "y = C"],
        "options_hi": ["y = Ceˣ", "y = Ce⁻ˣ", "y = Cx", "y = C"],
        "answer_en": "y = Ceˣ",
        "answer_hi": "y = Ceˣ",
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
        "question_en": "The degree of (d²y/dx²)² + dy/dx = y is:",
        "question_hi": "(d²y/dx²)² + dy/dx = y की घात है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "∫sec²x dx equals:",
        "question_hi": "∫sec²x dx बराबर है:",
        "options_en": ["tanx + C", "cotx + C", "secx + C", "-tanx + C"],
        "options_hi": ["tanx + C", "cotx + C", "secx + C", "-tanx + C"],
        "answer_en": "tanx + C",
        "answer_hi": "tanx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The integrating factor of dy/dx + Py = Q is:",
        "question_hi": "dy/dx + Py = Q का समाकलन गुणक है:",
        "options_en": ["e∫Pdx", "e∫Qdx", "e∫Pdy", "e∫Qdy"],
        "options_hi": ["e∫Pdx", "e∫Qdx", "e∫Pdy", "e∫Qdy"],
        "answer_en": "e∫Pdx",
        "answer_hi": "e∫Pdx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "∫dx/(1+x²) equals:",
        "question_hi": "∫dx/(1+x²) बराबर है:",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The area bounded by y = x², x=0, x=2 and x-axis is:",
        "question_hi": "y = x², x=0, x=2 और x-अक्ष से घिरा क्षेत्रफल है:",
        "options_en": ["8/3", "4/3", "2/3", "16/3"],
        "options_hi": ["8/3", "4/3", "2/3", "16/3"],
        "answer_en": "8/3",
        "answer_hi": "8/3",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics & Evolution (31-40)
    {
        "num": 31,
        "question_en": "The father of genetics is:",
        "question_hi": "आनुवंशिकी के जनक हैं:",
        "options_en": ["Gregor Mendel", "Charles Darwin", "Watson and Crick", "Hugo de Vries"],
        "options_hi": ["ग्रेगर मेंडल", "चार्ल्स डार्विन", "वाटसन और क्रिक", "ह्यूगो डी व्रीस"],
        "answer_en": "Gregor Mendel",
        "answer_hi": "ग्रेगर मेंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The structure of DNA was proposed by:",
        "question_hi": "DNA की संरचना प्रस्तावित की गई थी:",
        "options_en": ["Mendel", "Darwin", "Watson and Crick", "Morgan"],
        "options_hi": ["मेंडल", "डार्विन", "वाटसन और क्रिक", "मॉर्गन"],
        "answer_en": "Watson and Crick",
        "answer_hi": "वाटसन और क्रिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The number of chromosomes in human gametes is:",
        "question_hi": "मानव युग्मकों में गुणसूत्रों की संख्या है:",
        "options_en": ["23", "46", "44", "48"],
        "options_hi": ["23", "46", "44", "48"],
        "answer_en": "23",
        "answer_hi": "23",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Natural selection theory was proposed by:",
        "question_hi": "प्राकृतिक वरण सिद्धांत प्रस्तावित किया गया था:",
        "options_en": ["Lamarck", "Darwin", "Mendel", "de Vries"],
        "options_hi": ["लैमार्क", "डार्विन", "मेंडल", "डी व्रीस"],
        "answer_en": "Darwin",
        "answer_hi": "डार्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
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
        "num": 36,
        "question_en": "The sex chromosome combination for female in humans is:",
        "question_hi": "मानव में मादा के लिए लिंग गुणसूत्र संयोजन है:",
        "options_en": ["XX", "XY", "YY", "XO"],
        "options_hi": ["XX", "XY", "YY", "XO"],
        "answer_en": "XX",
        "answer_hi": "XX",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The book 'Origin of Species' was written by:",
        "question_hi": "'ओरिजिन ऑफ स्पीशीज' पुस्तक लिखी गई थी:",
        "options_en": ["Mendel", "Darwin", "Lamarck", "Morgan"],
        "options_hi": ["मेंडल", "डार्विन", "लैमार्क", "मॉर्गन"],
        "answer_en": "Darwin",
        "answer_hi": "डार्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
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
        "num": 39,
        "question_en": "The genetic disorder caused by extra chromosome 21 is:",
        "question_hi": "अतिरिक्त गुणसूत्र 21 के कारण आनुवंशिक विकार है:",
        "options_en": ["Turner syndrome", "Klinefelter syndrome", "Down syndrome", "Hemophilia"],
        "options_hi": ["टर्नर सिंड्रोम", "क्लाइनफेल्टर सिंड्रोम", "डाउन सिंड्रोम", "हीमोफिलिया"],
        "answer_en": "Down syndrome",
        "answer_hi": "डाउन सिंड्रोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The theory of inheritance of acquired characters was proposed by:",
        "question_hi": "अर्जित लक्षणों की वंशागति का सिद्धांत प्रस्तावित किया गया था:",
        "options_en": ["Darwin", "Mendel", "Lamarck", "de Vries"],
        "options_hi": ["डार्विन", "मेंडल", "लैमार्क", "डी व्रीस"],
        "answer_en": "Lamarck",
        "answer_hi": "लैमार्क",
        "attempted": false,
        "selected": ""
    },

    // English - Grammar & Vocabulary (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct passive voice: 'They built this house in 1990.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'They built this house in 1990.'",
        "options_en": ["This house was built in 1990.", "This house is built in 1990.", "This house built in 1990.", "This house has been built in 1990."],
        "options_hi": ["This house was built in 1990.", "This house is built in 1990.", "This house built in 1990.", "This house has been built in 1990."],
        "answer_en": "This house was built in 1990.",
        "answer_hi": "This house was built in 1990.",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The synonym of 'Benevolent' is:",
        "question_hi": "'Benevolent' का समानार्थी है:",
        "options_en": ["Malevolent", "Kind", "Selfish", "Greedy"],
        "options_hi": ["दुर्भावनापूर्ण", "दयालु", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
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
        "num": 44,
        "question_en": "The antonym of 'Courage' is:",
        "question_hi": "'Courage' का विलोम है:",
        "options_en": ["Bravery", "Fear", "Confidence", "Strength"],
        "options_hi": ["बहादुरी", "डर", "आत्मविश्वास", "शक्ति"],
        "answer_en": "Fear",
        "answer_hi": "डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Choose the correct word: 'The jury ___ divided in their opinion.'",
        "question_hi": "सही शब्द चुनें: 'The jury ___ divided in their opinion.'",
        "options_en": ["was", "were", "are", "have"],
        "options_hi": ["was", "were", "are", "have"],
        "answer_en": "were",
        "answer_hi": "were",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The meaning of 'Ubiquitous' is:",
        "question_hi": "'Ubiquitous' का अर्थ है:",
        "options_en": ["Rare", "Everywhere", "Hidden", "Temporary"],
        "options_hi": ["दुर्लभ", "सर्वव्यापी", "छिपा हुआ", "अस्थायी"],
        "answer_en": "Everywhere",
        "answer_hi": "सर्वव्यापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Identify the figure of speech: 'The stars danced playfully in the moonlit sky.'",
        "question_hi": "अलंकार पहचानें: 'The stars danced playfully in the moonlit sky.'",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Choose the correct tense: 'I ___ working here since 2010.'",
        "question_hi": "सही काल चुनें: 'I ___ working here since 2010.'",
        "options_en": ["am", "was", "have been", "had been"],
        "options_hi": ["am", "was", "have been", "had been"],
        "answer_en": "have been",
        "answer_hi": "have been",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The plural of 'Criterion' is:",
        "question_hi": "'Criterion' का बहुवचन है:",
        "options_en": ["Criterions", "Criterias", "Criteria", "Criterion"],
        "options_hi": ["Criterions", "Criterias", "Criteria", "Criterion"],
        "answer_en": "Criteria",
        "answer_hi": "Criteria",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Identify the type of sentence: 'Although it was raining, we went for a walk.'",
        "question_hi": "वाक्य का प्रकार पहचानें: 'Although it was raining, we went for a walk.'",
        "options_en": ["Simple", "Compound", "Complex", "Compound-complex"],
        "options_hi": ["सरल", "संयुक्त", "मिश्र", "संयुक्त-मिश्र"],
        "answer_en": "Complex",
        "answer_hi": "मिश्र",
        "attempted": false,
        "selected": ""
    },

    // Hindi - व्याकरण और साहित्य (51-60)
    {
        "num": 51,
        "question_en": "'अशुद्ध वर्तनी वाला शब्द चुनें:'",
        "question_hi": "'अशुद्ध वर्तनी वाला शब्द चुनें:'",
        "options_en": ["व्याकरण", "व्यवहार", "व्यवस्था", "व्यवसाय"],
        "options_hi": ["व्याकरण", "व्यवहार", "व्यवस्था", "व्यवसाय"],
        "answer_en": "व्यवसाय",
        "answer_hi": "व्यवसाय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'काव्यशास्त्र' के प्रणेता हैं:",
        "question_hi": "'काव्यशास्त्र' के प्रणेता हैं:",
        "options_en": ["भामह", "पाणिनि", "पतंजलि", "भर्तृहरि"],
        "options_hi": ["भामह", "पाणिनि", "पतंजलि", "भर्तृहरि"],
        "answer_en": "भामह",
        "answer_hi": "भामह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'अष्टछाप' के कवि थे:",
        "question_hi": "'अष्टछाप' के कवि थे:",
        "options_en": ["सूरदास", "तुलसीदास", "मीराबाई", "रहीम"],
        "options_hi": ["सूरदास", "तुलसीदास", "मीराबाई", "रहीम"],
        "answer_en": "सूरदास",
        "answer_hi": "सूरदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "'रचना के आधार पर वाक्य के भेद हैं:'",
        "question_hi": "'रचना के आधार पर वाक्य के भेद हैं:'",
        "options_en": ["3", "2", "4", "5"],
        "options_hi": ["3", "2", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'मैथिलीशरण गुप्त' की प्रसिद्ध रचना है:",
        "question_hi": "'मैथिलीशरण गुप्त' की प्रसिद्ध रचना है:",
        "options_en": ["साकेत", "कामायनी", "रश्मिरथी", "गोदान"],
        "options_hi": ["साकेत", "कामायनी", "रश्मिरथी", "गोदान"],
        "answer_en": "साकेत",
        "answer_hi": "साकेत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'अर्थ के आधार पर वाक्य के भेद हैं:'",
        "question_hi": "'अर्थ के आधार पर वाक्य के भेद हैं:'",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'भारतेंदु युग' का समय है:",
        "question_hi": "'भारतेंदु युग' का समय है:",
        "options_en": ["1850-1900", "1900-1920", "1920-1936", "1936-1947"],
        "options_hi": ["1850-1900", "1900-1920", "1920-1936", "1936-1947"],
        "answer_en": "1850-1900",
        "answer_hi": "1850-1900",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'छायावाद' के प्रमुख कवि हैं:",
        "question_hi": "'छायावाद' के प्रमुख कवि हैं:",
        "options_en": ["प्रेमचंद", "जयशंकर प्रसाद", "मुंशी प्रेमचंद", "भारतेंदु हरिश्चंद्र"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "मुंशी प्रेमचंद", "भारतेंदु हरिश्चंद्र"],
        "answer_en": "जयशंकर प्रसाद",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'वाक्य में संज्ञा का कार्य करने वाला शब्द है:'",
        "question_hi": "'वाक्य में संज्ञा का कार्य करने वाला शब्द है:'",
        "options_en": ["सर्वनाम", "विशेषण", "क्रिया", "क्रिया विशेषण"],
        "options_hi": ["सर्वनाम", "विशेषण", "क्रिया", "क्रिया विशेषण"],
        "answer_en": "सर्वनाम",
        "answer_hi": "सर्वनाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'हिंदी साहित्य का आदिकाल' माना जाता है:",
        "question_hi": "'हिंदी साहित्य का आदिकाल' माना जाता है:",
        "options_en": ["1050 से 1375 तक", "1375 से 1700 तक", "1700 से 1900 तक", "1900 से अब तक"],
        "options_hi": ["1050 से 1375 तक", "1375 से 1700 तक", "1700 से 1900 तक", "1900 से अब तक"],
        "answer_en": "1050 से 1375 तक",
        "answer_hi": "1050 से 1375 तक",
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
        "num": 63,
        "question_en": "The Indian space research organization is:",
        "question_hi": "भारतीय अंतरिक्ष अनुसंधान संगठन है:",
        "options_en": ["NASA", "ISRO", "ESA", "ROSCOSMOS"],
        "options_hi": ["नासा", "इसरो", "ईएसए", "रोस्कोसमोस"],
        "answer_en": "ISRO",
        "answer_hi": "इसरो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The first nuclear reactor in India is:",
        "question_hi": "भारत में पहला नाभिकीय रिएक्टर है:",
        "options_en": ["Apsara", "CIRUS", "Dhruva", "Kamini"],
        "options_hi": ["अप्सरा", "साइरस", "ध्रुव", "कामिनी"],
        "answer_en": "Apsara",
        "answer_hi": "अप्सरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The Indian missile program includes:",
        "question_hi": "भारतीय मिसाइल कार्यक्रम शामिल करता है:",
        "options_en": ["Agni", "Prithvi", "Akash", "All of these"],
        "options_hi": ["अग्नि", "पृथ्वी", "आकाश", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The first Indian woman in space was:",
        "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला थी:",
        "options_en": ["Kalpana Chawla", "Sunita Williams", "Ritu Karidhal", "Tessy Thomas"],
        "options_hi": ["कल्पना चावला", "सुनीता विलियम्स", "रितु करिधाल", "टेसी थॉमस"],
        "answer_en": "Kalpana Chawla",
        "answer_hi": "कल्पना चावला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The Indian lunar mission was:",
        "question_hi": "भारतीय चंद्र मिशन था:",
        "options_en": ["Chandrayaan-1", "Mangalyaan", "Gaganyaan", "Aditya-L1"],
        "options_hi": ["चंद्रयान-1", "मंगलयान", "गगनयान", "आदित्य-एल1"],
        "answer_en": "Chandrayaan-1",
        "answer_hi": "चंद्रयान-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The Indian Mars mission was:",
        "question_hi": "भारतीय मंगल मिशन था:",
        "options_en": ["Mangalyaan", "Chandrayaan", "Gaganyaan", "Aditya"],
        "options_hi": ["मंगलयान", "चंद्रयान", "गगनयान", "आदित्य"],
        "answer_en": "Mangalyaan",
        "answer_hi": "मंगलयान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The Indian human spaceflight program is:",
        "question_hi": "भारतीय मानव अंतरिक्ष उड़ान कार्यक्रम है:",
        "options_en": ["Gaganyaan", "Chandrayaan", "Mangalyaan", "Aditya"],
        "options_hi": ["गगनयान", "चंद्रयान", "मंगलयान", "आदित्य"],
        "answer_en": "Gaganyaan",
        "answer_hi": "गगनयान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The Indian solar mission is:",
        "question_hi": "भारतीय सौर मिशन है:",
        "options_en": ["Aditya-L1", "Chandrayaan", "Mangalyaan", "Gaganyaan"],
        "options_hi": ["आदित्य-एल1", "चंद्रयान", "मंगलयान", "गगनयान"],
        "answer_en": "Aditya-L1",
        "answer_hi": "आदित्य-एल1",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-100)
    {
        "num": 71,
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
        "num": 74,
        "question_en": "The process of conversion of sugar to alcohol is called:",
        "question_hi": "शर्करा के अल्कोहल में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Fermentation", "Distillation", "Evaporation", "Sublimation"],
        "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "उर्ध्वपातन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The atomic number of helium is:",
        "question_hi": "हीलियम की परमाणु संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The formula for circumference of circle is:",
        "question_hi": "वृत्त की परिधि का सूत्र है:",
        "options_en": ["2πr", "πr²", "πd", "Both A and C"],
        "options_hi": ["2πr", "πr²", "πd", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The metal used in making airplanes is:",
        "question_hi": "विमान बनाने में प्रयुक्त धातु है:",
        "options_en": ["Aluminum", "Iron", "Copper", "Silver"],
        "options_hi": ["एल्युमिनियम", "लोहा", "तांबा", "चांदी"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The chemical formula of common salt is:",
        "question_hi": "सामान्य नमक का रासायनिक सूत्र है:",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
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
        "num": 80,
        "question_en": "The vitamin that helps in blood clotting is:",
        "question_hi": "वह विटामिन जो रक्त के थक्के बनने में मदद करता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The unit of force is:",
        "question_hi": "बल की इकाई है:",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The chemical formula of hydrochloric acid is:",
        "question_hi": "हाइड्रोक्लोरिक अम्ल का रासायनिक सूत्र है:",
        "options_en": ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"],
        "options_hi": ["HCl", "H₂SO₄", "HNO₃", "CH₃COOH"],
        "answer_en": "HCl",
        "answer_hi": "HCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The value of tan60° is:",
        "question_hi": "tan60° का मान है:",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "√3",
        "answer_hi": "√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The process of conversion of vapor to liquid is called:",
        "question_hi": "वाष्प के द्रव में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Condensation", "Evaporation", "Freezing", "Sublimation"],
        "options_hi": ["संघनन", "वाष्पीकरण", "जमना", "उर्ध्वपातन"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
        "question_en": "The formula for area of triangle is:",
        "question_hi": "त्रिभुज के क्षेत्रफल का सूत्र है:",
        "options_en": ["½ × base × height", "base × height", "½ × base²", "½ × height²"],
        "options_hi": ["½ × आधार × ऊँचाई", "आधार × ऊँचाई", "½ × आधार²", "½ × ऊँचाई²"],
        "answer_en": "½ × base × height",
        "answer_hi": "½ × आधार × ऊँचाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The metal used in making electric batteries is:",
        "question_hi": "विद्युत बैटरी बनाने में प्रयुक्त धातु है:",
        "options_en": ["Zinc", "Iron", "Copper", "Aluminum"],
        "options_hi": ["जिंक", "लोहा", "तांबा", "एल्युमिनियम"],
        "answer_en": "Zinc",
        "answer_hi": "जिंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The chemical formula of baking soda is:",
        "question_hi": "बेकिंग सोडा का रासायनिक सूत्र है:",
        "options_en": ["NaHCO₃", "Na₂CO₃", "CaCO₃", "NaOH"],
        "options_hi": ["NaHCO₃", "Na₂CO₃", "CaCO₃", "NaOH"],
        "answer_en": "NaHCO₃",
        "answer_hi": "NaHCO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The value of sec0° is:",
        "question_hi": "sec0° का मान है:",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The vitamin that prevents beri-beri is:",
        "question_hi": "वह विटामिन जो बेरी-बेरी को रोकता है:",
        "options_en": ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B1", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B1",
        "answer_hi": "विटामिन B1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The unit of electric charge is:",
        "question_hi": "विद्युत आवेश की इकाई है:",
        "options_en": ["Ampere", "Volt", "Coulomb", "Ohm"],
        "options_hi": ["एम्पियर", "वोल्ट", "कूलॉम", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The chemical formula of lime water is:",
        "question_hi": "चूने के पानी का रासायनिक सूत्र है:",
        "options_en": ["Ca(OH)₂", "CaO", "CaCO₃", "CaCl₂"],
        "options_hi": ["Ca(OH)₂", "CaO", "CaCO₃", "CaCl₂"],
        "answer_en": "Ca(OH)₂",
        "answer_hi": "Ca(OH)₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The value of cot45° is:",
        "question_hi": "cot45° का मान है:",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The process of conversion of liquid to solid is called:",
        "question_hi": "द्रव के ठोस में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Freezing", "Melting", "Evaporation", "Sublimation"],
        "options_hi": ["जमना", "पिघलना", "वाष्पीकरण", "उर्ध्वपातन"],
        "answer_en": "Freezing",
        "answer_hi": "जमना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The atomic number of sodium is:",
        "question_hi": "सोडियम की परमाणु संख्या है:",
        "options_en": ["9", "10", "11", "12"],
        "options_hi": ["9", "10", "11", "12"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The formula for volume of cylinder is:",
        "question_hi": "बेलन के आयतन का सूत्र है:",
        "options_en": ["πr²h", "2πrh", "πr²", "2πr²h"],
        "options_hi": ["πr²h", "2πrh", "πr²", "2πr²h"],
        "answer_en": "πr²h",
        "answer_hi": "πr²h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The metal used in making mirrors is:",
        "question_hi": "दर्पण बनाने में प्रयुक्त धातु है:",
        "options_en": ["Silver", "Aluminum", "Copper", "Gold"],
        "options_hi": ["चांदी", "एल्युमिनियम", "तांबा", "सोना"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The chemical formula of washing soda is:",
        "question_hi": "धोने का सोडा का रासायनिक सूत्र है:",
        "options_en": ["Na₂CO₃", "NaHCO₃", "CaCO₃", "NaOH"],
        "options_hi": ["Na₂CO₃", "NaHCO₃", "CaCO₃", "NaOH"],
        "answer_en": "Na₂CO₃",
        "answer_hi": "Na₂CO₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The value of cosec90° is:",
        "question_hi": "cosec90° का मान है:",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The vitamin that prevents pellagra is:",
        "question_hi": "वह विटामिन जो पेलाग्रा को रोकता है:",
        "options_en": ["Vitamin A", "Vitamin B3", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B3", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin B3",
        "answer_hi": "विटामिन B3",
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