const questions = [
    // Physics - Modern Physics (1-10)
    {
        "num": 1,
        "question_en": "The photoelectric effect demonstrates that light has:",
        "question_hi": "प्रकाश विद्युत प्रभाव प्रदर्शित करता है कि प्रकाश में है:",
        "options_en": ["Wave nature only", "Particle nature only", "Dual nature", "None of these"],
        "options_hi": ["केवल तरंग प्रकृति", "केवल कण प्रकृति", "द्वैत प्रकृति", "इनमें से कोई नहीं"],
        "answer_en": "Dual nature",
        "answer_hi": "द्वैत प्रकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The de Broglie wavelength of an electron accelerated through potential V is proportional to:",
        "question_hi": "विभव V से त्वरित इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य समानुपाती है:",
        "options_en": ["V", "V²", "1/√V", "1/V"],
        "options_hi": ["V", "V²", "1/√V", "1/V"],
        "answer_en": "1/√V",
        "answer_hi": "1/√V",
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
        "question_en": "The half-life of a radioactive element is 10 days. The fraction that remains after 30 days is:",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-जीवन 10 दिन है। 30 दिनों के बाद शेष भाग है:",
        "options_en": ["1/2", "1/4", "1/8", "1/16"],
        "options_hi": ["1/2", "1/4", "1/8", "1/16"],
        "answer_en": "1/8",
        "answer_hi": "1/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "In a p-n junction diode, the reverse saturation current depends on:",
        "question_hi": "p-n जंक्शन डायोड में, विपरीत संतृप्ति धारा निर्भर करती है:",
        "options_en": ["Temperature only", "Applied voltage only", "Both temperature and voltage", "None of these"],
        "options_hi": ["केवल तापमान", "केवल लागू वोल्टेज", "तापमान और वोल्टेज दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Temperature only",
        "answer_hi": "केवल तापमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The truth table for NAND gate shows output is 0 when:",
        "question_hi": "NAND गेट के सत्य सारणी से पता चलता है कि आउटपुट 0 है जब:",
        "options_en": ["All inputs are 0", "All inputs are 1", "Any input is 0", "Any input is 1"],
        "options_hi": ["सभी इनपुट 0 हैं", "सभी इनपुट 1 हैं", "कोई इनपुट 0 है", "कोई इनपुट 1 है"],
        "answer_en": "All inputs are 1",
        "answer_hi": "सभी इनपुट 1 हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "In a common emitter amplifier, the voltage gain is:",
        "question_hi": "कॉमन एमीटर एम्पलीफायर में, वोल्टेज लाभ है:",
        "options_en": ["High", "Low", "Zero", "Unity"],
        "options_hi": ["उच्च", "निम्न", "शून्य", "एकल"],
        "answer_en": "High",
        "answer_hi": "उच्च",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The mass defect in nuclear binding energy is due to:",
        "question_hi": "नाभिकीय बंधन ऊर्जा में द्रव्यमान क्षति किसके कारण होती है:",
        "options_en": ["Mass of protons", "Mass of neutrons", "Mass converted to energy", "Electron mass"],
        "options_hi": ["प्रोटॉनों का द्रव्यमान", "न्यूट्रॉनों का द्रव्यमान", "ऊर्जा में परिवर्तित द्रव्यमान", "इलेक्ट्रॉन द्रव्यमान"],
        "answer_en": "Mass converted to energy",
        "answer_hi": "ऊर्जा में परिवर्तित द्रव्यमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The critical frequency for sky wave propagation is given by:",
        "question_hi": "आकाश तरंग संचरण के लिए क्रांतिक आवृत्ति दी जाती है:",
        "options_en": ["fc = 9√(Nmax)", "fc = 9(Nmax)²", "fc = 9/Nmax", "fc = √(9Nmax)"],
        "options_hi": ["fc = 9√(Nmax)", "fc = 9(Nmax)²", "fc = 9/Nmax", "fc = √(9Nmax)"],
        "answer_en": "fc = 9√(Nmax)",
        "answer_hi": "fc = 9√(Nmax)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In LASER, the process that produces coherent light is:",
        "question_hi": "लेजर में, वह प्रक्रिया जो कला-संबद्ध प्रकाश उत्पन्न करती है:",
        "options_en": ["Spontaneous emission", "Stimulated emission", "Absorption", "Scattering"],
        "options_hi": ["सहज उत्सर्जन", "उद्दीप्त उत्सर्जन", "अवशोषण", "प्रकीर्णन"],
        "answer_en": "Stimulated emission",
        "answer_hi": "उद्दीप्त उत्सर्जन",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Organic Chemistry (11-20)
    {
        "num": 11,
        "question_en": "Which of the following shows geometrical isomerism?",
        "question_hi": "निम्नलिखित में से कौन ज्यामितीय समावयवता दर्शाता है?",
        "options_en": ["1-Butene", "2-Butene", "Propene", "Ethene"],
        "options_hi": ["1-ब्यूटीन", "2-ब्यूटीन", "प्रोपीन", "ईथीन"],
        "answer_en": "2-Butene",
        "answer_hi": "2-ब्यूटीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "In the reaction CH₃CHO + HCN → CH₃CH(OH)CN, the mechanism is:",
        "question_hi": "अभिक्रिया CH₃CHO + HCN → CH₃CH(OH)CN में, क्रियाविधि है:",
        "options_en": ["Electrophilic addition", "Nucleophilic addition", "Free radical addition", "Electrophilic substitution"],
        "options_hi": ["इलेक्ट्रोफिलिक योग", "न्यूक्लियोफिलिक योग", "मुक्त मूलक योग", "इलेक्ट्रोफिलिक प्रतिस्थापन"],
        "answer_en": "Nucleophilic addition",
        "answer_hi": "न्यूक्लियोफिलिक योग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is most acidic?",
        "question_hi": "निम्नलिखित में से कौन सबसे अधिक अम्लीय है?",
        "options_en": ["p-Nitrophenol", "p-Cresol", "Phenol", "m-Nitrophenol"],
        "options_hi": ["p-नाइट्रोफीनॉल", "p-क्रेसोल", "फीनॉल", "m-नाइट्रोफीनॉल"],
        "answer_en": "p-Nitrophenol",
        "answer_hi": "p-नाइट्रोफीनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The number of structural isomers of C₄H₁₀O is:",
        "question_hi": "C₄H₁₀O के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "In Cannizzaro reaction, the compounds that react are:",
        "question_hi": "कैनिज़ारो अभिक्रिया में, जो यौगिक अभिक्रिया करते हैं वे हैं:",
        "options_en": ["Aldehydes without α-hydrogen", "Aldehydes with α-hydrogen", "Ketones", "Carboxylic acids"],
        "options_hi": ["α-हाइड्रोजन रहित एल्डिहाइड", "α-हाइड्रोजन युक्त एल्डिहाइड", "कीटोन", "कार्बोक्सिलिक अम्ल"],
        "answer_en": "Aldehydes without α-hydrogen",
        "answer_hi": "α-हाइड्रोजन रहित एल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
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
        "num": 18,
        "question_en": "The hybridization of carbon in HCN is:",
        "question_hi": "HCN में कार्बन का संकरण है:",
        "options_en": ["sp", "sp²", "sp³", "dsp²"],
        "options_hi": ["sp", "sp²", "sp³", "dsp²"],
        "answer_en": "sp",
        "answer_hi": "sp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
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
        "num": 20,
        "question_en": "Which of the following is a reducing sugar?",
        "question_hi": "निम्नलिखित में से कौन एक अपचायक शर्करा है?",
        "options_en": ["Sucrose", "Glucose", "Starch", "Cellulose"],
        "options_hi": ["सुक्रोज", "ग्लूकोज", "स्टार्च", "सेल्यूलोज"],
        "answer_en": "Glucose",
        "answer_hi": "ग्लूकोज",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Calculus (21-30)
    {
        "num": 21,
        "question_en": "The value of ∫(0 to π/2) sin²x dx is:",
        "question_hi": "∫(0 से π/2) sin²x dx का मान है:",
        "options_en": ["π/2", "π/4", "π/8", "π/16"],
        "options_hi": ["π/2", "π/4", "π/8", "π/16"],
        "answer_en": "π/4",
        "answer_hi": "π/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "If y = sin⁻¹(2x/(1+x²)), then dy/dx is:",
        "question_hi": "यदि y = sin⁻¹(2x/(1+x²)), तो dy/dx है:",
        "options_en": ["2/(1+x²)", "1/(1+x²)", "2x/(1+x²)", "1/(1-x²)"],
        "options_hi": ["2/(1+x²)", "1/(1+x²)", "2x/(1+x²)", "1/(1-x²)"],
        "answer_en": "2/(1+x²)",
        "answer_hi": "2/(1+x²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The value of lim(x→0) (tanx - sinx)/x³ is:",
        "question_hi": "lim(x→0) (tanx - sinx)/x³ का मान है:",
        "options_en": ["0", "1/2", "1", "2"],
        "options_hi": ["0", "1/2", "1", "2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The area bounded by y = x² and y = 2x is:",
        "question_hi": "y = x² और y = 2x से घिरा क्षेत्रफल है:",
        "options_en": ["1/3", "2/3", "4/3", "8/3"],
        "options_hi": ["1/3", "2/3", "4/3", "8/3"],
        "answer_en": "4/3",
        "answer_hi": "4/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The value of ∫e^x(sinx + cosx)dx is:",
        "question_hi": "∫e^x(sinx + cosx)dx का मान है:",
        "options_en": ["e^x sinx + C", "e^x cosx + C", "e^x (sinx + cosx) + C", "e^x + C"],
        "options_hi": ["e^x sinx + C", "e^x cosx + C", "e^x (sinx + cosx) + C", "e^x + C"],
        "answer_en": "e^x sinx + C",
        "answer_hi": "e^x sinx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "If A = [[1,2],[3,4]] and B = [[2,1],[1,2]], then determinant of AB is:",
        "question_hi": "यदि A = [[1,2],[3,4]] और B = [[2,1],[1,2]], तो AB का सारणिक है:",
        "options_en": ["-10", "-5", "5", "10"],
        "options_hi": ["-10", "-5", "5", "10"],
        "answer_en": "-10",
        "answer_hi": "-10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The number of terms in the expansion of (1 + x + x²)¹⁰ is:",
        "question_hi": "(1 + x + x²)¹⁰ के विस्तार में पदों की संख्या है:",
        "options_en": ["10", "11", "20", "21"],
        "options_hi": ["10", "11", "20", "21"],
        "answer_en": "21",
        "answer_hi": "21",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The function f(x) = |x - 1| + |x - 2| is:",
        "question_hi": "फलन f(x) = |x - 1| + |x - 2| है:",
        "options_en": ["Continuous but not differentiable at x=1,2", "Differentiable everywhere", "Discontinuous at x=1,2", "None of these"],
        "options_hi": ["x=1,2 पर संतत लेकिन अवकलनीय नहीं", "सर्वत्र अवकलनीय", "x=1,2 पर असतत", "इनमें से कोई नहीं"],
        "answer_en": "Continuous but not differentiable at x=1,2",
        "answer_hi": "x=1,2 पर संतत लेकिन अवकलनीय नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "If the roots of x² - bx + c = 0 are two consecutive integers, then b² - 4c is:",
        "question_hi": "यदि x² - bx + c = 0 के मूल दो क्रमागत पूर्णांक हैं, तो b² - 4c है:",
        "options_en": ["-2", "-1", "0", "1"],
        "options_hi": ["-2", "-1", "0", "1"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The number of diagonals in a decagon is:",
        "question_hi": "एक दशभुज में विकर्णों की संख्या है:",
        "options_en": ["25", "30", "35", "40"],
        "options_hi": ["25", "30", "35", "40"],
        "answer_en": "35",
        "answer_hi": "35",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics (31-40)
    {
        "num": 31,
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
        "num": 32,
        "question_en": "In DNA, the hydrogen bonds between adenine and thymine are:",
        "question_hi": "DNA में, एडेनीन और थाइमीन के बीच हाइड्रोजन बंध हैं:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which of the following is a stop codon?",
        "question_hi": "निम्नलिखित में से कौन सा स्टॉप कोडन है?",
        "options_en": ["AUG", "UAA", "UAC", "UGC"],
        "options_hi": ["AUG", "UAA", "UAC", "UGC"],
        "answer_en": "UAA",
        "answer_hi": "UAA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The process by which RNA is synthesized from DNA is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा DNA से RNA संश्लेषित होता है, कहलाती है:",
        "options_en": ["Replication", "Transcription", "Translation", "Transformation"],
        "options_hi": ["प्रतिकृति", "प्रतिलेखन", "अनुवाद", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The enzyme used in PCR for DNA synthesis is:",
        "question_hi": "PCR में DNA संश्लेषण के लिए प्रयुक्त एंजाइम है:",
        "options_en": ["DNA polymerase", "RNA polymerase", "Taq polymerase", "DNA ligase"],
        "options_hi": ["DNA पॉलीमरेज", "RNA पॉलीमरेज", "Taq पॉलीमरेज", "DNA लाइगेज"],
        "answer_en": "Taq polymerase",
        "answer_hi": "Taq पॉलीमरेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The process of making multiple copies of a gene is called:",
        "question_hi": "जीन की एकाधिक प्रतियाँ बनाने की प्रक्रिया कहलाती है:",
        "options_en": ["Gene cloning", "Gene splicing", "Gene mapping", "Gene therapy"],
        "options_hi": ["जीन क्लोनिंग", "जीन स्प्लाइसिंग", "जीन मैपिंग", "जीन थेरेपी"],
        "answer_en": "Gene cloning",
        "answer_hi": "जीन क्लोनिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The technique used to separate DNA fragments is:",
        "question_hi": "DNA खंडों को अलग करने के लिए प्रयुक्त तकनीक है:",
        "options_en": ["Centrifugation", "Electrophoresis", "Chromatography", "Spectroscopy"],
        "options_hi": ["अपकेंद्रण", "इलेक्ट्रोफोरेसिस", "क्रोमैटोग्राफी", "स्पेक्ट्रोस्कोपी"],
        "answer_en": "Electrophoresis",
        "answer_hi": "इलेक्ट्रोफोरेसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The process of protein synthesis from mRNA is called:",
        "question_hi": "mRNA से प्रोटीन संश्लेषण की प्रक्रिया कहलाती है:",
        "options_en": ["Replication", "Transcription", "Translation", "Transformation"],
        "options_hi": ["प्रतिकृति", "प्रतिलेखन", "अनुवाद", "रूपांतरण"],
        "answer_en": "Translation",
        "answer_hi": "अनुवाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The start codon in protein synthesis is:",
        "question_hi": "प्रोटीन संश्लेषण में प्रारंभ कोडन है:",
        "options_en": ["UAA", "UAG", "UGA", "AUG"],
        "options_hi": ["UAA", "UAG", "UGA", "AUG"],
        "answer_en": "AUG",
        "answer_hi": "AUG",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The enzyme that joins DNA fragments is:",
        "question_hi": "DNA खंडों को जोड़ने वाला एंजाइम है:",
        "options_en": ["DNA polymerase", "DNA ligase", "Restriction enzyme", "Helicase"],
        "options_hi": ["DNA पॉलीमरेज", "DNA लाइगेज", "प्रतिबंधन एंजाइम", "हेलिकेज"],
        "answer_en": "DNA ligase",
        "answer_hi": "DNA लाइगेज",
        "attempted": false,
        "selected": ""
    },

    // English Grammar (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["He go to school", "He goes to school", "He going to school", "He gone to school"],
        "options_hi": ["He go to school", "He goes to school", "He going to school", "He gone to school"],
        "answer_en": "He goes to school",
        "answer_hi": "He goes to school",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which is a noun?",
        "question_hi": "कौन सा संज्ञा है?",
        "options_en": ["Run", "Beautiful", "School", "Quickly"],
        "options_hi": ["Run", "Beautiful", "School", "Quickly"],
        "answer_en": "School",
        "answer_hi": "School",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The past tense of 'go' is:",
        "question_hi": "'go' का भूतकाल है:",
        "options_en": ["Goed", "Went", "Gone", "Going"],
        "options_hi": ["Goed", "Went", "Gone", "Going"],
        "answer_en": "Went",
        "answer_hi": "Went",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Choose the correct plural form:",
        "question_hi": "सही बहुवचन रूप चुनें:",
        "options_en": ["Childs", "Children", "Childes", "Childern"],
        "options_hi": ["Childs", "Children", "Childes", "Childern"],
        "answer_en": "Children",
        "answer_hi": "Children",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which word is an adjective?",
        "question_hi": "कौन सा शब्द विशेषण है?",
        "options_en": ["Happiness", "Happy", "Happily", "Happen"],
        "options_hi": ["Happiness", "Happy", "Happily", "Happen"],
        "answer_en": "Happy",
        "answer_hi": "Happy",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Identify the correct passive form: 'They are building a new bridge.'",
        "question_hi": "सही कर्मवाच्य रूप पहचानें: 'They are building a new bridge.'",
        "options_en": ["A new bridge is built by them", "A new bridge was built by them", "A new bridge is being built by them", "A new bridge has been built by them"],
        "options_hi": ["A new bridge is built by them", "A new bridge was built by them", "A new bridge is being built by them", "A new bridge has been built by them"],
        "answer_en": "A new bridge is being built by them",
        "answer_hi": "A new bridge is being built by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which sentence is in present perfect continuous tense?",
        "question_hi": "कौन सा वाक्य वर्तमान पूर्ण निरंतर काल में है?",
        "options_en": ["I have written a letter", "I have been writing a letter", "I wrote a letter", "I was writing a letter"],
        "options_hi": ["I have written a letter", "I have been writing a letter", "I wrote a letter", "I was writing a letter"],
        "answer_en": "I have been writing a letter",
        "answer_hi": "I have been writing a letter",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Choose the correct indirect speech: He said, 'I am going to the market.'",
        "question_hi": "सही अप्रत्यक्ष कथन चुनें: He said, 'I am going to the market.'",
        "options_en": ["He said that he is going to the market", "He said that he was going to the market", "He said that he will go to the market", "He said that he would go to the market"],
        "options_hi": ["He said that he is going to the market", "He said that he was going to the market", "He said that he will go to the market", "He said that he would go to the market"],
        "answer_en": "He said that he was going to the market",
        "answer_hi": "He said that he was going to the market",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Identify the adverb in the sentence: 'She sings beautifully.'",
        "question_hi": "वाक्य में क्रिया विशेषण पहचानें: 'She sings beautifully.'",
        "options_en": ["She", "sings", "beautifully", "None of these"],
        "options_hi": ["She", "sings", "beautifully", "इनमें से कोई नहीं"],
        "answer_en": "beautifully",
        "answer_hi": "beautifully",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Choose the correct synonym of 'Benevolent':",
        "question_hi": "'Benevolent' का सही पर्यायवाची चुनें:",
        "options_en": ["Kind", "Cruel", "Selfish", "Greedy"],
        "options_hi": ["दयालु", "क्रूर", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },

    // Hindi Grammar (51-60)
    {
        "num": 51,
        "question_en": "'विद्यालय' का पर्यायवाची शब्द है:",
        "question_hi": "'विद्यालय' का पर्यायवाची शब्द है:",
        "options_en": ["पाठशाला", "अस्पताल", "कार्यालय", "प्रयोगशाला"],
        "options_hi": ["पाठशाला", "अस्पताल", "कार्यालय", "प्रयोगशाला"],
        "answer_en": "पाठशाला",
        "answer_hi": "पाठशाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'राम पुस्तक पढ़ता है' में क्रिया है:",
        "question_hi": "'राम पुस्तक पढ़ता है' में क्रिया है:",
        "options_en": ["राम", "पुस्तक", "पढ़ता", "है"],
        "options_hi": ["राम", "पुस्तक", "पढ़ता", "है"],
        "answer_en": "पढ़ता",
        "answer_hi": "पढ़ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "हिंदी वर्णमाला में स्वरों की संख्या है:",
        "question_hi": "हिंदी वर्णमाला में स्वरों की संख्या है:",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "'सुन्दर' का विलोम शब्द है:",
        "question_hi": "'सुन्दर' का विलोम शब्द है:",
        "options_en": ["असुन्दर", "कुरूप", "बदसूरत", "अच्छा"],
        "options_hi": ["असुन्दर", "कुरूप", "बदसूरत", "अच्छा"],
        "answer_en": "कुरूप",
        "answer_hi": "कुरूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "हिंदी में कारकों की संख्या है:",
        "question_hi": "हिंदी में कारकों की संख्या है:",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'जो दूसरों के दुख से दुखी होता है' के लिए एक शब्द है:",
        "question_hi": "'जो दूसरों के दुख से दुखी होता है' के लिए एक शब्द है:",
        "options_en": ["दयालु", "परदुखकातर", "सहनशील", "उदार"],
        "options_hi": ["दयालु", "परदुखकातर", "सहनशील", "उदार"],
        "answer_en": "परदुखकातर",
        "answer_hi": "परदुखकातर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'राम ने रावण को मारा' वाक्य में कौन-सा कारक है?",
        "question_hi": "'राम ने रावण को मारा' वाक्य में कौन-सा कारक है?",
        "options_en": ["कर्ता", "कर्म", "करण", "अपादान"],
        "options_hi": ["कर्ता", "कर्म", "करण", "अपादान"],
        "answer_en": "कर्म",
        "answer_hi": "कर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'गाय घास खाती है' वाक्य में क्रिया का काल है:",
        "question_hi": "'गाय घास खाती है' वाक्य में क्रिया का काल है:",
        "options_en": ["वर्तमान", "भूत", "भविष्य", "अनिश्चित"],
        "options_hi": ["वर्तमान", "भूत", "भविष्य", "अनिश्चित"],
        "answer_en": "वर्तमान",
        "answer_hi": "वर्तमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'प्रति + दिन' का सही संधि-विच्छेद है:",
        "question_hi": "'प्रति + दिन' का सही संधि-विच्छेद है:",
        "options_en": ["प्रतिदिन", "प्रतिडिन", "प्रतिदीन", "प्रतिदिन"],
        "options_hi": ["प्रतिदिन", "प्रतिडिन", "प्रतिदीन", "प्रतिदिन"],
        "answer_en": "प्रतिदिन",
        "answer_hi": "प्रतिदिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'सिंह' का बहुवचन रूप है:",
        "question_hi": "'सिंह' का बहुवचन रूप है:",
        "options_en": ["सिंह", "सिंहों", "सिंहों", "सिंहे"],
        "options_hi": ["सिंह", "सिंहों", "सिंहों", "सिंहे"],
        "answer_en": "सिंह",
        "answer_hi": "सिंह",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (61-80)
    {
        "num": 61,
        "question_en": "The capital of India is:",
        "question_hi": "भारत की राजधानी है:",
        "options_en": ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        "options_hi": ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
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
        "num": 63,
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
        "num": 64,
        "question_en": "The chemical symbol for gold is:",
        "question_hi": "सोने का रासायनिक प्रतीक है:",
        "options_en": ["Ag", "Au", "Fe", "Cu"],
        "options_hi": ["Ag", "Au", "Fe", "Cu"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "How many continents are there on Earth?",
        "question_hi": "पृथ्वी पर कितने महाद्वीप हैं?",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The first satellite launched by India was:",
        "question_hi": "भारत द्वारा प्रक्षेपित पहला उपग्रह था:",
        "options_en": ["Bhaskara", "Aryabhata", "Rohini", "INSAT"],
        "options_hi": ["भास्कर", "आर्यभट्ट", "रोहिणी", "इनसैट"],
        "answer_en": "Aryabhata",
        "answer_hi": "आर्यभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The first Indian to win Nobel Prize was:",
        "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Hargobind Khorana"],
        "options_hi": ["सी.वी. रमन", "रबींद्रनाथ टैगोर", "मदर टेरेसा", "हरगोबिंद खुराना"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
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
        "num": 69,
        "question_en": "The first woman Prime Minister of India was:",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री थीं:",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The chemical name of vitamin C is:",
        "question_hi": "विटामिन C का रासायनिक नाम है:",
        "options_en": ["Ascorbic acid", "Citric acid", "Folic acid", "Nicotinic acid"],
        "options_hi": ["एस्कॉर्बिक अम्ल", "सिट्रिक अम्ल", "फोलिक अम्ल", "निकोटिनिक अम्ल"],
        "answer_en": "Ascorbic acid",
        "answer_hi": "एस्कॉर्बिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The first computer virus was called:",
        "question_hi": "पहला कंप्यूटर वायरस कहलाता था:",
        "options_en": ["ILOVEYOU", "Brain", "Melissa", "Code Red"],
        "options_hi": ["ILOVEYOU", "ब्रेन", "मेलिसा", "कोड रेड"],
        "answer_en": "Brain",
        "answer_hi": "ब्रेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The first Indian in space was:",
        "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय थे:",
        "options_en": ["Kalpana Chawla", "Rakesh Sharma", "Sunita Williams", "Ravish Malhotra"],
        "options_hi": ["कल्पना चावला", "राकेश शर्मा", "सुनीता विलियम्स", "रविश मल्होत्रा"],
        "answer_en": "Rakesh Sharma",
        "answer_hi": "राकेश शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The national animal of India is:",
        "question_hi": "भारत का राष्ट्रीय पशु है:",
        "options_en": ["Lion", "Elephant", "Tiger", "Peacock"],
        "options_hi": ["शेर", "हाथी", "बाघ", "मोर"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The first Indian who won the Booker Prize was:",
        "question_hi": "बुकर पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Arundhati Roy", "Salman Rushdie", "V.S. Naipaul", "Kiran Desai"],
        "options_hi": ["अरुंधति रॉय", "सलमान रुश्दी", "वी.एस. नायपॉल", "किरण देसाई"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The largest ocean in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा महासागर है:",
        "options_en": ["Atlantic", "Indian", "Pacific", "Arctic"],
        "options_hi": ["अटलांटिक", "हिंद", "प्रशांत", "आर्कटिक"],
        "answer_en": "Pacific",
        "answer_hi": "प्रशांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The first President of India was:",
        "question_hi": "भारत के प्रथम राष्ट्रपति थे:",
        "options_en": ["Jawaharlal Nehru", "Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain"],
        "options_hi": ["जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन"],
        "answer_en": "Rajendra Prasad",
        "answer_hi": "राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The longest river in the world is:",
        "question_hi": "दुनिया की सबसे लंबी नदी है:",
        "options_en": ["Amazon", "Nile", "Ganga", "Yangtze"],
        "options_hi": ["अमेज़न", "नील", "गंगा", "यांग्त्ज़ी"],
        "answer_en": "Nile",
        "answer_hi": "नील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The capital of Australia is:",
        "question_hi": "ऑस्ट्रेलिया की राजधानी है:",
        "options_en": ["Sydney", "Melbourne", "Canberra", "Perth"],
        "options_hi": ["सिडनी", "मेलबोर्न", "कैनबरा", "पर्थ"],
        "answer_en": "Canberra",
        "answer_hi": "कैनबरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
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
        "num": 80,
        "question_en": "The first computer programmer was:",
        "question_hi": "पहली कंप्यूटर प्रोग्रामर थीं:",
        "options_en": ["Ada Lovelace", "Charles Babbage", "Alan Turing", "Bill Gates"],
        "options_hi": ["एडा लवलेस", "चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स"],
        "answer_en": "Ada Lovelace",
        "answer_hi": "एडा लवलेस",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (81-100)
    {
        "num": 81,
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
        "num": 82,
        "question_en": "Which of the following is most reactive towards nucleophilic substitution?",
        "question_hi": "निम्नलिखित में से कौन नाभिकरागी प्रतिस्थापन के प्रति सबसे अधिक अभिक्रियाशील है?",
        "options_en": ["Chlorobenzene", "Benzyl chloride", "Ethyl chloride", "Vinyl chloride"],
        "options_hi": ["क्लोरोबेंजीन", "बेंजिल क्लोराइड", "एथिल क्लोराइड", "विनाइल क्लोराइड"],
        "answer_en": "Benzyl chloride",
        "answer_hi": "बेंजिल क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The value of ∫(0 to π) x sinx dx is:",
        "question_hi": "∫(0 से π) x sinx dx का मान है:",
        "options_en": ["π", "2π", "π/2", "1"],
        "options_hi": ["π", "2π", "π/2", "1"],
        "answer_en": "π",
        "answer_hi": "π",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "The magnetic moment of a current loop is:",
        "question_hi": "धारा लूप का चुंबकीय आघूर्ण है:",
        "options_en": ["IA", "I²A", "I/A", "A/I"],
        "options_hi": ["IA", "I²A", "I/A", "A/I"],
        "answer_en": "IA",
        "answer_hi": "IA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "Which of the following is an intensive property?",
        "question_hi": "निम्नलिखित में से कौन सा गहन गुण है?",
        "options_en": ["Mass", "Volume", "Density", "Energy"],
        "options_hi": ["द्रव्यमान", "आयतन", "घनत्व", "ऊर्जा"],
        "answer_en": "Density",
        "answer_hi": "घनत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The enzyme that converts glucose to glucose-6-phosphate in glycolysis is:",
        "question_hi": "ग्लाइकोलाइसिस में ग्लूकोज को ग्लूकोज-6-फॉस्फेट में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Hexokinase", "Phosphofructokinase", "Pyruvate kinase", "Aldolase"],
        "options_hi": ["हेक्सोकाइनेज", "फॉस्फोफ्रक्टोकाइनेज", "पाइरुवेट काइनेज", "एल्डोलेज"],
        "answer_en": "Hexokinase",
        "answer_hi": "हेक्सोकाइनेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The work done in moving a charge of 2C from point A to B in an electric field is 10J. The potential difference between A and B is:",
        "question_hi": "विद्युत क्षेत्र में बिंदु A से B तक 2C आवेश को ले जाने में किया गया कार्य 10J है। A और B के बीच विभवांतर है:",
        "options_en": ["5V", "10V", "20V", "40V"],
        "options_hi": ["5V", "10V", "20V", "40V"],
        "answer_en": "5V",
        "answer_hi": "5V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The number of optical isomers of [Co(en)₃]³⁺ is:",
        "question_hi": "[Co(en)₃]³⁺ के प्रकाशीय समावयवियों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
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
        "num": 91,
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
        "num": 92,
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
        "num": 93,
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
        "num": 94,
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
        "num": 95,
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
        "num": 96,
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
        "num": 97,
        "question_en": "The enzyme that fixes CO₂ in C4 plants is:",
        "question_hi": "C4 पौधों में CO₂ स्थिर करने वाला एंजाइम है:",
        "options_en": ["RuBisCO", "PEP carboxylase", "Catalase", "Amylase"],
        "options_hi": ["RuBisCO", "PEP कार्बोक्सिलेज", "कैटालेज", "एमाइलेज"],
        "answer_en": "PEP carboxylase",
        "answer_hi": "PEP कार्बोक्सिलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
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
        "num": 99,
        "question_en": "The compound that does not undergo aldol condensation is:",
        "question_hi": "वह यौगिक जो एल्डोल संघनन से नहीं गुजरता है:",
        "options_en": ["Acetaldehyde", "Formaldehyde", "Acetone", "Benzaldehyde"],
        "options_hi": ["एसीटैल्डिहाइड", "फॉर्मेल्डिहाइड", "एसीटोन", "बेंजाल्डिहाइड"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The site of light reaction in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में प्रकाश अभिक्रिया का स्थल है:",
        "options_en": ["Stroma", "Grana", "Matrix", "Cristae"],
        "options_hi": ["स्ट्रोमा", "ग्रैना", "मैट्रिक्स", "क्रिस्टी"],
        "answer_en": "Grana",
        "answer_hi": "ग्रैना",
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