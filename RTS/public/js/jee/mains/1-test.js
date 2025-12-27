const questions = [
    // Physics - JEE Main Level (1-25)
    {
        "num": 1,
        "question_en": "A particle moves in a straight line with velocity v = 3t² - 2t + 1 m/s. What is the acceleration at t = 2s?",
        "question_hi": "एक कण v = 3t² - 2t + 1 m/s वेग से सीधी रेखा में चलता है। t = 2s पर त्वरण क्या है?",
        "options_en": ["8 m/s²", "10 m/s²", "12 m/s²", "14 m/s²"],
        "options_hi": ["8 m/s²", "10 m/s²", "12 m/s²", "14 m/s²"],
        "answer_en": "10 m/s²",
        "answer_hi": "10 m/s²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The work function of a metal is 2.5 eV. What is the maximum wavelength of light that can eject photoelectrons?",
        "question_hi": "एक धातु का कार्य फलन 2.5 eV है। प्रकाश की अधिकतम तरंगदैर्ध्य क्या है जो फोटोइलेक्ट्रॉन उत्सर्जित कर सकती है?",
        "options_en": ["496 nm", "620 nm", "750 nm", "850 nm"],
        "options_hi": ["496 nm", "620 nm", "750 nm", "850 nm"],
        "answer_en": "496 nm",
        "answer_hi": "496 nm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A capacitor of 4μF is charged to 100V and then connected to an uncharged capacitor of 6μF. What is the common potential?",
        "question_hi": "4μF का एक संधारित्र 100V तक आवेशित किया जाता है और फिर 6μF के एक अनावेशित संधारित्र से जोड़ा जाता है। सामान्य विभव क्या है?",
        "options_en": ["40V", "50V", "60V", "80V"],
        "options_hi": ["40V", "50V", "60V", "80V"],
        "answer_en": "40V",
        "answer_hi": "40V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In Young's double slit experiment, the slit separation is 0.5 mm and screen distance is 1m. If wavelength is 6000Å, what is fringe width?",
        "question_hi": "यंग के द्वि-छिद्र प्रयोग में, छिद्र पृथक्करण 0.5 mm और पर्दे की दूरी 1m है। यदि तरंगदैर्ध्य 6000Å है, तो फ्रिंज चौड़ाई क्या है?",
        "options_en": ["0.8 mm", "1.0 mm", "1.2 mm", "1.5 mm"],
        "options_hi": ["0.8 mm", "1.0 mm", "1.2 mm", "1.5 mm"],
        "answer_en": "1.2 mm",
        "answer_hi": "1.2 mm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A particle executes SHM with amplitude A and time period T. What is the time taken to go from x = A/2 to x = A?",
        "question_hi": "एक कण A आयाम और T आवर्तकाल के साथ सरल आवर्त गति करता है। x = A/2 से x = A तक जाने में कितना समय लगता है?",
        "options_en": ["T/12", "T/6", "T/4", "T/3"],
        "options_hi": ["T/12", "T/6", "T/4", "T/3"],
        "answer_en": "T/6",
        "answer_hi": "T/6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The de Broglie wavelength of an electron accelerated through 100V potential difference is:",
        "question_hi": "100V विभवांतर से त्वरित इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य है:",
        "options_en": ["1.23 Å", "2.46 Å", "3.87 Å", "4.92 Å"],
        "options_hi": ["1.23 Å", "2.46 Å", "3.87 Å", "4.92 Å"],
        "answer_en": "1.23 Å",
        "answer_hi": "1.23 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "A wire of resistance 4Ω is stretched to double its length. What is its new resistance?",
        "question_hi": "4Ω प्रतिरोध वाले एक तार को उसकी लंबाई से दोगुना खींचा जाता है। इसका नया प्रतिरोध क्या है?",
        "options_en": ["8Ω", "12Ω", "16Ω", "32Ω"],
        "options_hi": ["8Ω", "12Ω", "16Ω", "32Ω"],
        "answer_en": "16Ω",
        "answer_hi": "16Ω",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "A convex lens of focal length 20cm is placed in contact with a concave lens of focal length 30cm. What is the power of combination?",
        "question_hi": "20cm फोकस दूरी के उत्तल लेंस को 30cm फोकस दूरी के अवतल लेंस के संपर्क में रखा जाता है। संयोजन की क्षमता क्या है?",
        "options_en": ["+1.67 D", "-1.67 D", "+0.83 D", "-0.83 D"],
        "options_hi": ["+1.67 D", "-1.67 D", "+0.83 D", "-0.83 D"],
        "answer_en": "+1.67 D",
        "answer_hi": "+1.67 D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The half-life of a radioactive element is 10 days. What percentage will remain after 30 days?",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-जीवन 10 दिन है। 30 दिनों के बाद कितना प्रतिशत शेष रहेगा?",
        "options_en": ["6.25%", "12.5%", "25%", "50%"],
        "options_hi": ["6.25%", "12.5%", "25%", "50%"],
        "answer_en": "12.5%",
        "answer_hi": "12.5%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "A Carnot engine operates between 400K and 300K. What is its efficiency?",
        "question_hi": "एक कार्नोट इंजन 400K और 300K के बीच कार्य करता है। इसकी दक्षता क्या है?",
        "options_en": ["20%", "25%", "30%", "35%"],
        "options_hi": ["20%", "25%", "30%", "35%"],
        "answer_en": "25%",
        "answer_hi": "25%",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - JEE Main Level (11-35)
    {
        "num": 11,
        "question_en": "Which of the following has the highest bond order?",
        "question_hi": "निम्नलिखित में से किसमें सबसे अधिक बंध क्रम है?",
        "options_en": ["O₂", "O₂⁺", "O₂⁻", "O₂²⁻"],
        "options_hi": ["O₂", "O₂⁺", "O₂⁻", "O₂²⁻"],
        "answer_en": "O₂⁺",
        "answer_hi": "O₂⁺",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The IUPAC name of CH₃-CH₂-C(CH₃)=CH-CH₃ is:",
        "question_hi": "CH₃-CH₂-C(CH₃)=CH-CH₃ का IUPAC नाम है:",
        "options_en": ["3-Methylpent-2-ene", "2-Ethylbut-2-ene", "3-Methylpent-3-ene", "2-Methylpent-2-ene"],
        "options_hi": ["3-मेथिलपेंट-2-ईन", "2-एथिलब्यूट-2-ईन", "3-मेथिलपेंट-3-ईन", "2-मेथिलपेंट-2-ईन"],
        "answer_en": "3-Methylpent-2-ene",
        "answer_hi": "3-मेथिलपेंट-2-ईन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The hybridization of central atom in XeF₄ is:",
        "question_hi": "XeF₄ में केंद्रीय परमाणु का संकरण है:",
        "options_en": ["sp³", "sp³d", "sp³d²", "dsp²"],
        "options_hi": ["sp³", "sp³d", "sp³d²", "dsp²"],
        "answer_en": "sp³d²",
        "answer_hi": "sp³d²",
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
        "question_en": "The rate constant of a first order reaction is 2.3 × 10⁻³ s⁻¹. What is its half-life?",
        "question_hi": "एक प्रथम कोटि अभिक्रिया का दर स्थिरांक 2.3 × 10⁻³ s⁻¹ है। इसका अर्ध-जीवन क्या है?",
        "options_en": ["200 s", "300 s", "400 s", "500 s"],
        "options_hi": ["200 s", "300 s", "400 s", "500 s"],
        "answer_en": "300 s",
        "answer_hi": "300 s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "In face-centered cubic lattice, the coordination number is:",
        "question_hi": "फलक-केंद्रित घनीय जालक में, उपसहसंयोजन संख्या है:",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is a diamagnetic species?",
        "question_hi": "निम्नलिखित में से कौन एक प्रतिचुंबकीय स्पीशीज है?",
        "options_en": ["O₂", "O₂⁺", "N₂", "B₂"],
        "options_hi": ["O₂", "O₂⁺", "N₂", "B₂"],
        "answer_en": "N₂",
        "answer_hi": "N₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
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
        "num": 19,
        "question_en": "Which of the following has the highest boiling point?",
        "question_hi": "निम्नलिखित में से किसका क्वथनांक सबसे अधिक है?",
        "options_en": ["n-pentane", "iso-pentane", "neo-pentane", "All have same"],
        "options_hi": ["n-पेंटेन", "आइसो-पेंटेन", "नियो-पेंटेन", "सभी समान हैं"],
        "answer_en": "n-pentane",
        "answer_hi": "n-पेंटेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The pH of 0.01M NaOH solution is:",
        "question_hi": "0.01M NaOH विलयन का pH है:",
        "options_en": ["2", "7", "12", "13"],
        "options_hi": ["2", "7", "12", "13"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - JEE Main Level (21-45)
    {
        "num": 21,
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
        "num": 22,
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
        "question_en": "If |z - 1| = |z + 1|, then z lies on:",
        "question_hi": "यदि |z - 1| = |z + 1|, तो z स्थित है:",
        "options_en": ["Real axis", "Imaginary axis", "Circle", "Line x = y"],
        "options_hi": ["वास्तविक अक्ष", "काल्पनिक अक्ष", "वृत्त", "रेखा x = y"],
        "answer_en": "Imaginary axis",
        "answer_hi": "काल्पनिक अक्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The probability of getting at least one head in 3 tosses of a fair coin is:",
        "question_hi": "एक निष्पक्ष सिक्के के 3 उछालों में कम से कम एक हेड आने की प्रायिकता है:",
        "options_en": ["1/8", "3/8", "7/8", "5/8"],
        "options_hi": ["1/8", "3/8", "7/8", "5/8"],
        "answer_en": "7/8",
        "answer_hi": "7/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
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

    // Biology - JEE Main Level (31-45)
    {
        "num": 31,
        "question_en": "Which enzyme is responsible for the conversion of glucose-6-phosphate to fructose-6-phosphate?",
        "question_hi": "ग्लूकोज-6-फॉस्फेट को फ्रक्टोज-6-फॉस्फेट में परिवर्तित करने के लिए कौन सा एंजाइम जिम्मेदार है?",
        "options_en": ["Hexokinase", "Phosphoglucose isomerase", "Phosphofructokinase", "Aldolase"],
        "options_hi": ["हेक्सोकाइनेज", "फॉस्फोग्लूकोज आइसोमरेज", "फॉस्फोफ्रक्टोकाइनेज", "एल्डोलेज"],
        "answer_en": "Phosphoglucose isomerase",
        "answer_hi": "फॉस्फोग्लूकोज आइसोमरेज",
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
        "question_en": "Which plant hormone promotes cell division?",
        "question_hi": "कौन सा पादप हार्मोन कोशिका विभाजन को बढ़ावा देता है?",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
        "answer_en": "Cytokinin",
        "answer_hi": "साइटोकाइनिन",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (36-100)
    {
        "num": 36,
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
        "num": 37,
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
        "num": 38,
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
        "num": 39,
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
        "num": 40,
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
        "num": 41,
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
        "num": 42,
        "question_en": "The number of significant figures in 0.00250 is:",
        "question_hi": "0.00250 में सार्थक अंकों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
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
        "num": 44,
        "question_en": "In PCR, the step involving heating to 95°C is for:",
        "question_hi": "PCR में, 95°C तक गर्म करने वाला चरण है:",
        "options_en": ["Denaturation", "Annealing", "Extension", "All of these"],
        "options_hi": ["विकृतीकरण", "ऐनीलिंग", "विस्तार", "उपरोक्त सभी"],
        "answer_en": "Denaturation",
        "answer_hi": "विकृतीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The SI unit of magnetic flux is:",
        "question_hi": "चुंबकीय फ्लक्स की SI इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Which of the following is paramagnetic?",
        "question_hi": "निम्नलिखित में से कौन अनुचुंबकीय है?",
        "options_en": ["O₂", "N₂", "H₂", "He₂"],
        "options_hi": ["O₂", "N₂", "H₂", "He₂"],
        "answer_en": "O₂",
        "answer_hi": "O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The value of sin(75°) is:",
        "question_hi": "sin(75°) का मान है:",
        "options_en": ["(√6 - √2)/4", "(√6 + √2)/4", "(√3 + 1)/2√2", "(√3 - 1)/2√2"],
        "options_hi": ["(√6 - √2)/4", "(√6 + √2)/4", "(√3 + 1)/2√2", "(√3 - 1)/2√2"],
        "answer_en": "(√6 + √2)/4",
        "answer_hi": "(√6 + √2)/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
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
        "num": 49,
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
        "num": 50,
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
        "num": 51,
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
        "num": 52,
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
        "num": 53,
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
        "num": 54,
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
        "num": 55,
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
        "num": 56,
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
        "num": 57,
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
        "num": 58,
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
        "num": 59,
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
        "num": 60,
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
        "num": 61,
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
        "num": 62,
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
        "num": 65,
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
        "num": 66,
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
        "num": 67,
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
        "num": 68,
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
        "num": 69,
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
        "num": 70,
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
        "num": 71,
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
        "num": 72,
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
        "num": 73,
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
        "num": 74,
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
        "num": 75,
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
        "num": 76,
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
        "num": 77,
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
        "num": 78,
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
        "num": 79,
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
        "num": 80,
        "question_en": "The site of cellular respiration is:",
        "question_hi": "कोशिकीय श्वसन का स्थल है:",
        "options_en": ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The force on a charged particle moving in a magnetic field is maximum when the angle between velocity and field is:",
        "question_hi": "चुंबकीय क्षेत्र में गतिमान आवेशित कण पर बल अधिकतम होता है जब वेग और क्षेत्र के बीच कोण है:",
        "options_en": ["0°", "45°", "90°", "180°"],
        "options_hi": ["0°", "45°", "90°", "180°"],
        "answer_en": "90°",
        "answer_hi": "90°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The compound that gives effervescence with NaHCO₃ is:",
        "question_hi": "वह यौगिक जो NaHCO₃ के साथ बुदबुदाहट देता है:",
        "options_en": ["Phenol", "Ethanol", "Acetic acid", "Ether"],
        "options_hi": ["फीनॉल", "एथनॉल", "एसिटिक अम्ल", "ईथर"],
        "answer_en": "Acetic acid",
        "answer_hi": "एसिटिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
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
        "num": 84,
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
        "num": 85,
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
        "num": 86,
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
        "num": 87,
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
        "num": 88,
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
        "num": 89,
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
        "num": 90,
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
        "num": 91,
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
        "num": 92,
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
        "num": 93,
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
        "num": 94,
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
        "num": 95,
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
        "num": 96,
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
        "num": 97,
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
        "num": 98,
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
        "num": 99,
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
// Add more questions here...
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