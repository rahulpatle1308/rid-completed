const questions = [
    // Physics - Modern Physics & Electronics (1-15)
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
        "question_en": "In a common emitter amplifier, the phase difference between input and output voltages is:",
        "question_hi": "कॉमन एमीटर एम्पलीफायर में, इनपुट और आउटपुट वोल्टेज के बीच कलांतर है:",
        "options_en": ["0°", "90°", "180°", "270°"],
        "options_hi": ["0°", "90°", "180°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The de Broglie wavelength associated with an electron accelerated through 100V is approximately:",
        "question_hi": "100V से त्वरित इलेक्ट्रॉन से संबद्ध डी ब्रोगली तरंगदैर्ध्य लगभग है:",
        "options_en": ["1.23 Å", "2.46 Å", "3.87 Å", "4.92 Å"],
        "options_hi": ["1.23 Å", "2.46 Å", "3.87 Å", "4.92 Å"],
        "answer_en": "1.23 Å",
        "answer_hi": "1.23 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In a p-n junction diode, the width of depletion layer:",
        "question_hi": "p-n जंक्शन डायोड में, अवक्षय परत की चौड़ाई:",
        "options_en": ["Increases with forward bias", "Decreases with reverse bias", "Increases with reverse bias", "Remains constant"],
        "options_hi": ["अग्र अभिनति के साथ बढ़ती है", "उत्क्रम अभिनति के साथ घटती है", "उत्क्रम अभिनति के साथ बढ़ती है", "स्थिर रहती है"],
        "answer_en": "Increases with reverse bias",
        "answer_hi": "उत्क्रम अभिनति के साथ बढ़ती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The half-life of a radioactive element is 10 days. The time taken for 87.5% decay is:",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-जीवन 10 दिन है। 87.5% क्षय के लिए लगा समय है:",
        "options_en": ["20 days", "30 days", "40 days", "50 days"],
        "options_hi": ["20 दिन", "30 दिन", "40 दिन", "50 दिन"],
        "answer_en": "30 days",
        "answer_hi": "30 दिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In Bohr's model of hydrogen atom, the radius of first orbit is proportional to:",
        "question_hi": "हाइड्रोजन परमाणु के बोहर मॉडल में, प्रथम कक्षा की त्रिज्या समानुपाती है:",
        "options_en": ["1/n²", "n²", "1/n", "n"],
        "options_hi": ["1/n²", "n²", "1/n", "n"],
        "answer_en": "n²",
        "answer_hi": "n²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The truth table for NAND gate shows that output is 0 when:",
        "question_hi": "NAND गेट के सत्य सारणी से पता चलता है कि आउटपुट 0 है जब:",
        "options_en": ["All inputs are 0", "All inputs are 1", "Any input is 0", "Any input is 1"],
        "options_hi": ["सभी इनपुट 0 हैं", "सभी इनपुट 1 हैं", "कोई इनपुट 0 है", "कोई इनपुट 1 है"],
        "answer_en": "All inputs are 1",
        "answer_hi": "सभी इनपुट 1 हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The energy gap between valence band and conduction band in an insulator is typically:",
        "question_hi": "एक कुचालक में संयोजकता बैंड और चालन बैंड के बीच ऊर्जा अंतर आमतौर पर है:",
        "options_en": ["0.1 - 1 eV", "1 - 3 eV", "3 - 6 eV", "> 6 eV"],
        "options_hi": ["0.1 - 1 eV", "1 - 3 eV", "3 - 6 eV", "> 6 eV"],
        "answer_en": "> 6 eV",
        "answer_hi": "> 6 eV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "In a transistor, the relation between α and β is:",
        "question_hi": "ट्रांजिस्टर में, α और β के बीच संबंध है:",
        "options_en": ["β = α/(1-α)", "α = β/(1+β)", "β = α/(1+α)", "α = β/(1-β)"],
        "options_hi": ["β = α/(1-α)", "α = β/(1+β)", "β = α/(1+α)", "α = β/(1-β)"],
        "answer_en": "β = α/(1-α)",
        "answer_hi": "β = α/(1-α)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The nuclear force between two protons is:",
        "question_hi": "दो प्रोटॉनों के बीच नाभिकीय बल है:",
        "options_en": ["Always repulsive", "Always attractive", "Attractive at large distances", "Attractive at short distances"],
        "options_hi": ["सदैव प्रतिकर्षी", "सदैव आकर्षी", "लंबी दूरी पर आकर्षी", "छोटी दूरी पर आकर्षी"],
        "answer_en": "Attractive at short distances",
        "answer_hi": "छोटी दूरी पर आकर्षी",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Organic Chemistry & Coordination (11-25)
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
        "question_en": "The IUPAC name of CH₃-CH₂-CO-CH₃ is:",
        "question_hi": "CH₃-CH₂-CO-CH₃ का IUPAC नाम है:",
        "options_en": ["Butanone", "Butanal", "Pentanone", "Pentanal"],
        "options_hi": ["ब्यूटेनोन", "ब्यूटेनल", "पेंटेनोन", "पेंटेनल"],
        "answer_en": "Butanone",
        "answer_hi": "ब्यूटेनोन",
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
        "num": 15,
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
        "num": 16,
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
        "num": 17,
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
        "num": 18,
        "question_en": "The coordination number in face-centered cubic structure is:",
        "question_hi": "फलक-केंद्रित घनीय संरचना में उपसहसंयोजन संख्या है:",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is:",
        "question_hi": "[Co(NH₃)₅Cl]Cl₂ का IUPAC नाम है:",
        "options_en": ["Pentaaminechlorocobalt(III) chloride", "Chloropentaaminecobalt(III) chloride", "Pentaaminecobalt(III) chloride", "Pentaaminechlorocobalt(II) chloride"],
        "options_hi": ["पेंटाएमीनक्लोरोकोबाल्ट(III) क्लोराइड", "क्लोरोपेंटाएमीनकोबाल्ट(III) क्लोराइड", "पेंटाएमीनकोबाल्ट(III) क्लोराइड", "पेंटाएमीनक्लोरोकोबाल्ट(II) क्लोराइड"],
        "answer_en": "Pentaaminechlorocobalt(III) chloride",
        "answer_hi": "पेंटाएमीनक्लोरोकोबाल्ट(III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The number of π bonds in benzene is:",
        "question_hi": "बेंजीन में π बंधों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Calculus & Algebra (21-35)
    {
        "num": 21,
        "question_en": "The value of ∫(0 to π/2) sin³x dx is:",
        "question_hi": "∫(0 से π/2) sin³x dx का मान है:",
        "options_en": ["1/3", "2/3", "1/2", "3/4"],
        "options_hi": ["1/3", "2/3", "1/2", "3/4"],
        "answer_en": "2/3",
        "answer_hi": "2/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "If A = [[1,2],[3,4]] and B = [[2,1],[1,2]], then AB is:",
        "question_hi": "यदि A = [[1,2],[3,4]] और B = [[2,1],[1,2]], तो AB है:",
        "options_en": ["[[4,5],[10,11]]", "[[5,4],[11,10]]", "[[4,5],[11,10]]", "[[5,4],[10,11]]"],
        "options_hi": ["[[4,5],[10,11]]", "[[5,4],[11,10]]", "[[4,5],[11,10]]", "[[5,4],[10,11]]"],
        "answer_en": "[[4,5],[10,11]]",
        "answer_hi": "[[4,5],[10,11]]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
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
        "num": 24,
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
        "num": 25,
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
        "num": 26,
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
        "num": 27,
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
        "num": 28,
        "question_en": "The number of diagonals in a decagon is:",
        "question_hi": "एक दशभुज में विकर्णों की संख्या है:",
        "options_en": ["25", "30", "35", "40"],
        "options_hi": ["25", "30", "35", "40"],
        "answer_en": "35",
        "answer_hi": "35",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
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
        "num": 30,
        "question_en": "The function f(x) = |x - 1| + |x - 2| is:",
        "question_hi": "फलन f(x) = |x - 1| + |x - 2| है:",
        "options_en": ["Continuous but not differentiable at x=1,2", "Differentiable everywhere", "Discontinuous at x=1,2", "None of these"],
        "options_hi": ["x=1,2 पर संतत लेकिन अवकलनीय नहीं", "सर्वत्र अवकलनीय", "x=1,2 पर असतत", "इनमें से कोई नहीं"],
        "answer_en": "Continuous but not differentiable at x=1,2",
        "answer_hi": "x=1,2 पर संतत लेकिन अवकलनीय नहीं",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics & Biotechnology (31-45)
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
        "question_en": "In DNA, the ratio A+T/G+C is constant for:",
        "question_hi": "DNA में, अनुपात A+T/G+C स्थिर है:",
        "options_en": ["Same species", "Different species", "All organisms", "None of these"],
        "options_hi": ["समान प्रजाति के लिए", "विभिन्न प्रजातियों के लिए", "सभी जीवों के लिए", "इनमें से कोई नहीं"],
        "answer_en": "Same species",
        "answer_hi": "समान प्रजाति के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
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
        "num": 34,
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
        "num": 35,
        "question_en": "The vector used in human genome project is:",
        "question_hi": "मानव जीनोम परियोजना में प्रयुक्त वेक्टर है:",
        "options_en": ["Plasmid", "BAC", "YAC", "Both BAC and YAC"],
        "options_hi": ["प्लाज्मिड", "BAC", "YAC", "BAC और YAC दोनों"],
        "answer_en": "Both BAC and YAC",
        "answer_hi": "BAC और YAC दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The process of RNA synthesis from DNA is called:",
        "question_hi": "DNA से RNA संश्लेषण की प्रक्रिया कहलाती है:",
        "options_en": ["Replication", "Transcription", "Translation", "Transformation"],
        "options_hi": ["प्रतिकृति", "प्रतिलेखन", "अनुवाद", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The enzyme that joins DNA fragments is:",
        "question_hi": "DNA खंडों को जोड़ने वाला एंजाइम है:",
        "options_en": ["DNA polymerase", "DNA ligase", "Restriction enzyme", "Helicase"],
        "options_hi": ["DNA पॉलीमरेज", "DNA लाइगेज", "प्रतिबंधन एंजाइम", "हेलिकेज"],
        "answer_en": "DNA ligase",
        "answer_hi": "DNA लाइगेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
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
        "num": 39,
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
        "num": 40,
        "question_en": "The start codon in protein synthesis is:",
        "question_hi": "प्रोटीन संश्लेषण में प्रारंभ कोडन है:",
        "options_en": ["UAA", "UAG", "UGA", "AUG"],
        "options_hi": ["UAA", "UAG", "UGA", "AUG"],
        "answer_en": "AUG",
        "answer_hi": "AUG",
        "attempted": false,
        "selected": ""
    },

    // English - Advanced Grammar (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["One of the boys are missing", "One of the boys is missing", "One of the boy are missing", "One of the boy is missing"],
        "options_hi": ["One of the boys are missing", "One of the boys is missing", "One of the boy are missing", "One of the boy is missing"],
        "answer_en": "One of the boys is missing",
        "answer_hi": "One of the boys is missing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Identify the correct passive voice: 'They have completed the work.'",
        "question_hi": "सही कर्मवाच्य पहचानें: 'They have completed the work.'",
        "options_en": ["The work has completed by them", "The work has been completed by them", "The work was completed by them", "The work is completed by them"],
        "options_hi": ["The work has completed by them", "The work has been completed by them", "The work was completed by them", "The work is completed by them"],
        "answer_en": "The work has been completed by them",
        "answer_hi": "The work has been completed by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which sentence is in present perfect tense?",
        "question_hi": "कौन सा वाक्य वर्तमान पूर्ण काल में है?",
        "options_en": ["I write a letter", "I wrote a letter", "I have written a letter", "I had written a letter"],
        "options_hi": ["I write a letter", "I wrote a letter", "I have written a letter", "I had written a letter"],
        "answer_en": "I have written a letter",
        "answer_hi": "I have written a letter",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Choose the correct indirect speech: She said, 'I will come tomorrow.'",
        "question_hi": "सही अप्रत्यक्ष कथन चुनें: She said, 'I will come tomorrow.'",
        "options_en": ["She said that she will come tomorrow", "She said that she would come tomorrow", "She said that she will come the next day", "She said that she would come the next day"],
        "options_hi": ["She said that she will come tomorrow", "She said that she would come tomorrow", "She said that she will come the next day", "She said that she would come the next day"],
        "answer_en": "She said that she would come the next day",
        "answer_hi": "She said that she would come the next day",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Identify the adjective in the sentence: 'The beautiful sunset amazed everyone.'",
        "question_hi": "वाक्य में विशेषण पहचानें: 'The beautiful sunset amazed everyone.'",
        "options_en": ["sunset", "beautiful", "amazed", "everyone"],
        "options_hi": ["sunset", "beautiful", "amazed", "everyone"],
        "answer_en": "beautiful",
        "answer_hi": "beautiful",
        "attempted": false,
        "selected": ""
    },

    // Hindi - Advanced Grammar (46-55)
    {
        "num": 46,
        "question_en": "'जो दूसरों का भला चाहे' के लिए एक शब्द है:",
        "question_hi": "'जो दूसरों का भला चाहे' के लिए एक शब्द है:",
        "options_en": ["परोपकारी", "दयालु", "उदार", "सज्जन"],
        "options_hi": ["परोपकारी", "दयालु", "उदार", "सज्जन"],
        "answer_en": "परोपकारी",
        "answer_hi": "परोपकारी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "'राम ने फल खाया' वाक्य में कारक है:",
        "question_hi": "'राम ने फल खाया' वाक्य में कारक है:",
        "options_en": ["कर्ता", "कर्म", "करण", "अपादान"],
        "options_hi": ["कर्ता", "कर्म", "करण", "अपादान"],
        "answer_en": "कर्म",
        "answer_hi": "कर्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "'सदा + एव' का सही संधि रूप है:",
        "question_hi": "'सदा + एव' का सही संधि रूप है:",
        "options_en": ["सदैव", "सदाएव", "सदायेव", "सदेव"],
        "options_hi": ["सदैव", "सदाएव", "सदायेव", "सदेव"],
        "answer_en": "सदैव",
        "answer_hi": "सदैव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "'गुरु' का विलोम शब्द है:",
        "question_hi": "'गुरु' का विलोम शब्द है:",
        "options_en": ["शिष्य", "अध्यापक", "चेला", "अंध"],
        "options_hi": ["शिष्य", "अध्यापक", "चेला", "अंध"],
        "answer_en": "शिष्य",
        "answer_hi": "शिष्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "'वह पुस्तक पढ़ रहा है' वाक्य में क्रिया का काल है:",
        "question_hi": "'वह पुस्तक पढ़ रहा है' वाक्य में क्रिया का काल है:",
        "options_en": ["वर्तमान", "भूत", "भविष्य", "अनिश्चित"],
        "options_hi": ["वर्तमान", "भूत", "भविष्य", "अनिश्चित"],
        "answer_en": "वर्तमान",
        "answer_hi": "वर्तमान",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (51-65)
    {
        "num": 51,
        "question_en": "The first Indian satellite was:",
        "question_hi": "पहला भारतीय उपग्रह था:",
        "options_en": ["Bhaskara", "Aryabhata", "Rohini", "INSAT"],
        "options_hi": ["भास्कर", "आर्यभट्ट", "रोहिणी", "इनसैट"],
        "answer_en": "Aryabhata",
        "answer_hi": "आर्यभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
        "question_en": "The largest gland in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
        "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "options_hi": ["अग्न्याशय", "यकृत", "थायराइड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
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
        "num": 55,
        "question_en": "The SI unit of electric current is:",
        "question_hi": "विद्युत धारा की SI इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The process of converting sugar into alcohol is called:",
        "question_hi": "शर्करा को अल्कोहल में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Fermentation", "Distillation", "Evaporation", "Sublimation"],
        "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "उर्ध्वपातन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The metal used in making mirrors is:",
        "question_hi": "दर्पण बनाने में प्रयुक्त धातु है:",
        "options_en": ["Aluminium", "Silver", "Mercury", "Copper"],
        "options_hi": ["एल्युमीनियम", "चांदी", "पारा", "तांबा"],
        "answer_en": "Silver",
        "answer_hi": "चांदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The study of fossils is called:",
        "question_hi": "जीवाश्मों का अध्ययन कहलाता है:",
        "options_en": ["Paleontology", "Archaeology", "Geology", "Anthropology"],
        "options_hi": ["जीवाश्म विज्ञान", "पुरातत्व", "भूविज्ञान", "मानव विज्ञान"],
        "answer_en": "Paleontology",
        "answer_hi": "जीवाश्म विज्ञान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
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
        "num": 60,
        "question_en": "The instrument used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दबाव मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (61-80)
    {
        "num": 61,
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
        "num": 62,
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
        "num": 63,
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
        "num": 64,
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
        "num": 65,
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
        "num": 66,
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
        "num": 67,
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
        "num": 68,
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
        "num": 69,
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
        "num": 70,
        "question_en": "The number of optical isomers of [Co(en)₃]³⁺ is:",
        "question_hi": "[Co(en)₃]³⁺ के प्रकाशीय समावयवियों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },

    // Final Advanced Questions (71-90)
    {
        "num": 71,
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
        "num": 72,
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
        "num": 73,
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
        "num": 74,
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
        "num": 75,
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
        "num": 76,
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
        "num": 77,
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
        "num": 78,
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
        "num": 79,
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
        "num": 80,
        "question_en": "The enzyme that fixes CO₂ in C4 plants is:",
        "question_hi": "C4 पौधों में CO₂ स्थिर करने वाला एंजाइम है:",
        "options_en": ["RuBisCO", "PEP carboxylase", "Catalase", "Amylase"],
        "options_hi": ["RuBisCO", "PEP कार्बोक्सिलेज", "कैटालेज", "एमाइलेज"],
        "answer_en": "PEP carboxylase",
        "answer_hi": "PEP कार्बोक्सिलेज",
        "attempted": false,
        "selected": ""
    },

    // Ultimate Questions (81-100)
    {
        "num": 81,
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
        "num": 82,
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
        "num": 85,
        "question_en": "The unit of electric flux is:",
        "question_hi": "विद्युत फ्लक्स की इकाई है:",
        "options_en": ["N/C", "N·m²/C", "V/m", "J/C"],
        "options_hi": ["N/C", "N·m²/C", "V/m", "J/C"],
        "answer_en": "N·m²/C",
        "answer_hi": "N·m²/C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
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
        "num": 87,
        "question_en": "The solution of the differential equation dy/dx = ky is:",
        "question_hi": "अवकल समीकरण dy/dx = ky का हल है:",
        "options_en": ["y = kx + C", "y = Ce^kx", "y = Cx^k", "y = klogx + C"],
        "options_hi": ["y = kx + C", "y = Ce^kx", "y = Cx^k", "y = klogx + C"],
        "answer_en": "y = Ce^kx",
        "answer_hi": "y = Ce^kx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The site of photosynthesis in plant cells is:",
        "question_hi": "पादप कोशिकाओं में प्रकाश संश्लेषण का स्थल है:",
        "options_en": ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम", "केंद्रक"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
        "question_en": "The compound that gives positive Tollens' test is:",
        "question_hi": "वह यौगिक जो सकारात्मक टोलेन परीक्षण देता है:",
        "options_en": ["Acetone", "Formaldehyde", "Acetic acid", "Ethanol"],
        "options_hi": ["एसीटोन", "फॉर्मेल्डिहाइड", "एसिटिक अम्ल", "एथनॉल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The value of ∫(1/√(1 - x²)) dx is:",
        "question_hi": "∫(1/√(1 - x²)) dx का मान है:",
        "options_en": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "log|1 - x²| + C"],
        "options_hi": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "log|1 - x²| + C"],
        "answer_en": "sin⁻¹x + C",
        "answer_hi": "sin⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The enzyme that digests proteins in stomach is:",
        "question_hi": "आमाशय में प्रोटीनों को पचाने वाला एंजाइम है:",
        "options_en": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
        "options_hi": ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेज"],
        "answer_en": "Pepsin",
        "answer_hi": "पेप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The SI unit of inductance is:",
        "question_hi": "प्रेरकत्व की SI इकाई है:",
        "options_en": ["Weber", "Tesla", "Henry", "Farad"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "फैराड"],
        "answer_en": "Henry",
        "answer_hi": "हेनरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The number of π electrons in benzene is:",
        "question_hi": "बेंजीन में π इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["3", "6", "9", "12"],
        "options_hi": ["3", "6", "9", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The value of lim(x→0) (1 - cosx)/x² is:",
        "question_hi": "lim(x→0) (1 - cosx)/x² का मान है:",
        "options_en": ["0", "1/2", "1", "2"],
        "options_hi": ["0", "1/2", "1", "2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
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
        "num": 98,
        "question_en": "The compound that shows geometrical isomerism is:",
        "question_hi": "वह यौगिक जो ज्यामितीय समावयवता दर्शाता है:",
        "options_en": ["Propene", "2-Butene", "Ethene", "Methane"],
        "options_hi": ["प्रोपीन", "2-ब्यूटीन", "ईथीन", "मीथेन"],
        "answer_en": "2-Butene",
        "answer_hi": "2-ब्यूटीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
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
        "num": 100,
        "question_en": "The site of cellular respiration is:",
        "question_hi": "कोशिकीय श्वसन का स्थल है:",
        "options_en": ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
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