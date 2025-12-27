const questions = [
    // Physics - Rotational Motion & Gravitation (1-20)
    {
        "num": 1,
        "question_en": "The moment of inertia of a solid sphere about its diameter is:",
        "question_hi": "एक ठोस गोले का उसके व्यास के परितः जड़त्व आघूर्ण है:",
        "options_en": ["(2/5)MR²", "(2/3)MR²", "(1/2)MR²", "MR²"],
        "options_hi": ["(2/5)MR²", "(2/3)MR²", "(1/2)MR²", "MR²"],
        "answer_en": "(2/5)MR²",
        "answer_hi": "(2/5)MR²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The acceleration due to gravity at height h above earth surface (where h << R) is given by:",
        "question_hi": "पृथ्वी की सतह से h ऊँचाई पर गुरुत्वीय त्वरण (जहाँ h << R) दिया जाता है:",
        "options_en": ["g(1 - 2h/R)", "g(1 - h/R)", "g(1 + 2h/R)", "g(1 + h/R)"],
        "options_hi": ["g(1 - 2h/R)", "g(1 - h/R)", "g(1 + 2h/R)", "g(1 + h/R)"],
        "answer_en": "g(1 - 2h/R)",
        "answer_hi": "g(1 - 2h/R)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A particle moves in a circle of radius R with constant speed v. Its angular speed is:",
        "question_hi": "एक कण R त्रिज्या के वृत्त में नियत चाल v से गति करता है। इसकी कोणीय चाल है:",
        "options_en": ["v/R", "vR", "v²/R", "v/R²"],
        "options_hi": ["v/R", "vR", "v²/R", "v/R²"],
        "answer_en": "v/R",
        "answer_hi": "v/R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The escape velocity from earth surface is:",
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
        "question_en": "The ratio of rotational kinetic energy to translational kinetic energy for a solid sphere rolling without slipping is:",
        "question_hi": "बिना फिसले लुढ़कने वाले ठोस गोले के लिए घूर्णन गतिज ऊर्जा से स्थानांतरीय गतिज ऊर्जा का अनुपात है:",
        "options_en": ["2:5", "2:7", "1:2", "2:3"],
        "options_hi": ["2:5", "2:7", "1:2", "2:3"],
        "answer_en": "2:5",
        "answer_hi": "2:5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The time period of a satellite in circular orbit very close to earth surface is:",
        "question_hi": "पृथ्वी की सतह के बहुत निकट वृत्ताकार कक्षा में उपग्रह का आवर्तकाल है:",
        "options_en": ["2π√(R/g)", "2π√(R³/GM)", "2π√(g/R)", "2πR/g"],
        "options_hi": ["2π√(R/g)", "2π√(R³/GM)", "2π√(g/R)", "2πR/g"],
        "answer_en": "2π√(R/g)",
        "answer_hi": "2π√(R/g)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The angular momentum of a particle in circular motion is conserved when:",
        "question_hi": "वृत्तीय गति में कण का कोणीय संवेग संरक्षित रहता है जब:",
        "options_en": ["Net torque is zero", "Net force is zero", "Speed is constant", "All of these"],
        "options_hi": ["कुल बल आघूर्ण शून्य है", "कुल बल शून्य है", "चाल नियत है", "उपरोक्त सभी"],
        "answer_en": "Net torque is zero",
        "answer_hi": "कुल बल आघूर्ण शून्य है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The radius of gyration of a thin rod of length L about an axis perpendicular to rod through its end is:",
        "question_hi": "L लंबाई की पतली छड़ का उसके सिरे से गुजरने वाली और छड़ के लंबवत अक्ष के परितः परिभ्रमण त्रिज्या है:",
        "options_en": ["L/√3", "L/2", "L/√12", "L/√2"],
        "options_hi": ["L/√3", "L/2", "L/√12", "L/√2"],
        "answer_en": "L/√3",
        "answer_hi": "L/√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The gravitational potential energy of two masses m₁ and m₂ separated by distance r is:",
        "question_hi": "दो द्रव्यमान m₁ और m₂ जो r दूरी से अलग हैं, की गुरुत्वीय स्थितिज ऊर्जा है:",
        "options_en": ["-Gm₁m₂/r", "Gm₁m₂/r", "-Gm₁m₂/r²", "Gm₁m₂/r²"],
        "options_hi": ["-Gm₁m₂/r", "Gm₁m₂/r", "-Gm₁m₂/r²", "Gm₁m₂/r²"],
        "answer_en": "-Gm₁m₂/r",
        "answer_hi": "-Gm₁m₂/r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "A solid cylinder rolls down an inclined plane without slipping. The ratio of rotational to total kinetic energy is:",
        "question_hi": "एक ठोस बेलन बिना फिसले एक आनत तल से नीचे लुढ़कता है। घूर्णन से कुल गतिज ऊर्जा का अनुपात है:",
        "options_en": ["1:2", "1:3", "2:3", "1:4"],
        "options_hi": ["1:2", "1:3", "2:3", "1:4"],
        "answer_en": "1:3",
        "answer_hi": "1:3",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Electrochemistry & Solutions (11-30)
    {
        "num": 11,
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
        "num": 12,
        "question_en": "The unit of specific conductivity is:",
        "question_hi": "विशिष्ट चालकता की इकाई है:",
        "options_en": ["ohm⁻¹ cm⁻¹", "ohm cm", "ohm⁻¹ cm", "ohm cm⁻¹"],
        "options_hi": ["ohm⁻¹ cm⁻¹", "ohm cm", "ohm⁻¹ cm", "ohm cm⁻¹"],
        "answer_en": "ohm⁻¹ cm⁻¹",
        "answer_hi": "ohm⁻¹ cm⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "During electrolysis of aqueous NaCl, the product at cathode is:",
        "question_hi": "जलीय NaCl के विद्युत् अपघटन के दौरान, कैथोड पर उत्पाद है:",
        "options_en": ["Cl₂", "H₂", "Na", "O₂"],
        "options_hi": ["Cl₂", "H₂", "Na", "O₂"],
        "answer_en": "H₂",
        "answer_hi": "H₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The relationship between molar conductivity and concentration for strong electrolyte is given by:",
        "question_hi": "प्रबल विद्युत् अपघट्य के लिए मोलर चालकता और सांद्रता के बीच संबंध दिया जाता है:",
        "options_en": ["Kohlrausch's law", "Ostwald's dilution law", "Faraday's law", "Nernst equation"],
        "options_hi": ["कोलराऊश का नियम", "ओस्टवाल्ड का तनुता नियम", "फैराडे का नियम", "नर्न्स्ट समीकरण"],
        "answer_en": "Kohlrausch's law",
        "answer_hi": "कोलराऊश का नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The EMF of a cell is given by:",
        "question_hi": "एक सेल का EMF दिया जाता है:",
        "options_en": ["E°cell - (RT/nF)lnQ", "E°cell + (RT/nF)lnQ", "(RT/nF)lnQ", "E°cell - (nF/RT)lnQ"],
        "options_hi": ["E°cell - (RT/nF)lnQ", "E°cell + (RT/nF)lnQ", "(RT/nF)lnQ", "E°cell - (nF/RT)lnQ"],
        "answer_en": "E°cell - (RT/nF)lnQ",
        "answer_hi": "E°cell - (RT/nF)lnQ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The van't Hoff factor for K₂SO₄ in aqueous solution is:",
        "question_hi": "जलीय विलयन में K₂SO₄ के लिए वांट हॉफ गुणक है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The boiling point elevation constant for water is:",
        "question_hi": "जल के लिए क्वथनांक उन्नयन स्थिरांक है:",
        "options_en": ["0.52 K kg mol⁻¹", "1.86 K kg mol⁻¹", "2.53 K kg mol⁻¹", "3.56 K kg mol⁻¹"],
        "options_hi": ["0.52 K kg mol⁻¹", "1.86 K kg mol⁻¹", "2.53 K kg mol⁻¹", "3.56 K kg mol⁻¹"],
        "answer_en": "0.52 K kg mol⁻¹",
        "answer_hi": "0.52 K kg mol⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "In a galvanic cell, oxidation occurs at:",
        "question_hi": "गैल्वेनिक सेल में, ऑक्सीकरण होता है:",
        "options_en": ["Anode", "Cathode", "Both electrodes", "Salt bridge"],
        "options_hi": ["एनोड", "कैथोड", "दोनों इलेक्ट्रोड", "लवण सेतु"],
        "answer_en": "Anode",
        "answer_hi": "एनोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The relationship between degree of dissociation and dissociation constant for weak electrolyte is given by:",
        "question_hi": "दुर्बल विद्युत् अपघट्य के लिए वियोजन की मात्रा और वियोजन स्थिरांक के बीच संबंध दिया जाता है:",
        "options_en": ["Ostwald's dilution law", "Kohlrausch's law", "Faraday's law", "Henry's law"],
        "options_hi": ["ओस्टवाल्ड का तनुता नियम", "कोलराऊश का नियम", "फैराडे का नियम", "हेनरी का नियम"],
        "answer_en": "Ostwald's dilution law",
        "answer_hi": "ओस्टवाल्ड का तनुता नियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The standard reduction potential of Zn²⁺/Zn is -0.76 V. This means:",
        "question_hi": "Zn²⁺/Zn का मानक अपचयन विभव -0.76 V है। इसका अर्थ है:",
        "options_en": ["Zn is stronger reducing agent than H₂", "Zn is weaker reducing agent than H₂", "Zn²⁺ is stronger oxidizing agent than H⁺", "None of these"],
        "options_hi": ["Zn, H₂ से प्रबलतर अपचायक है", "Zn, H₂ से दुर्बलतर अपचायक है", "Zn²⁺, H⁺ से प्रबलतर ऑक्सीकारक है", "इनमें से कोई नहीं"],
        "answer_en": "Zn is stronger reducing agent than H₂",
        "answer_hi": "Zn, H₂ से प्रबलतर अपचायक है",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Complex Numbers & Quadratic Equations (21-40)
    {
        "num": 21,
        "question_en": "The value of i¹⁰¹ + i¹⁰² + i¹⁰³ + i¹⁰⁴ is:",
        "question_hi": "i¹⁰¹ + i¹⁰² + i¹⁰³ + i¹⁰⁴ का मान है:",
        "options_en": ["0", "1", "i", "-i"],
        "options_hi": ["0", "1", "i", "-i"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "If the roots of x² - 5x + 6 = 0 are α and β, then α² + β² is:",
        "question_hi": "यदि x² - 5x + 6 = 0 के मूल α और β हैं, तो α² + β² है:",
        "options_en": ["13", "25", "10", "12"],
        "options_hi": ["13", "25", "10", "12"],
        "answer_en": "13",
        "answer_hi": "13",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The modulus of complex number 3 + 4i is:",
        "question_hi": "सम्मिश्र संख्या 3 + 4i का मापांक है:",
        "options_en": ["5", "7", "25", "1"],
        "options_hi": ["5", "7", "25", "1"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "If the equation x² + 2(k+2)x + 9k = 0 has equal roots, then k =",
        "question_hi": "यदि समीकरण x² + 2(k+2)x + 9k = 0 के समान मूल हैं, तो k =",
        "options_en": ["1", "4", "1 or 4", "2 or 3"],
        "options_hi": ["1", "4", "1 या 4", "2 या 3"],
        "answer_en": "1 or 4",
        "answer_hi": "1 या 4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The argument of complex number -1 - i is:",
        "question_hi": "सम्मिश्र संख्या -1 - i का कोणांक है:",
        "options_en": ["π/4", "-π/4", "-3π/4", "3π/4"],
        "options_hi": ["π/4", "-π/4", "-3π/4", "3π/4"],
        "answer_en": "-3π/4",
        "answer_hi": "-3π/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The sum of roots of equation 2x² - 3x + 5 = 0 is:",
        "question_hi": "समीकरण 2x² - 3x + 5 = 0 के मूलों का योग है:",
        "options_en": ["3/2", "-3/2", "5/2", "-5/2"],
        "options_hi": ["3/2", "-3/2", "5/2", "-5/2"],
        "answer_en": "3/2",
        "answer_hi": "3/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The complex conjugate of (2+3i)² is:",
        "question_hi": "(2+3i)² का सम्मिश्र संयुग्म है:",
        "options_en": ["(2-3i)²", "(3+2i)²", "(-5+12i)", "(-5-12i)"],
        "options_hi": ["(2-3i)²", "(3+2i)²", "(-5+12i)", "(-5-12i)"],
        "answer_en": "(-5-12i)",
        "answer_hi": "(-5-12i)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "If α and β are roots of x² + x + 1 = 0, then α² + β² =",
        "question_hi": "यदि α और β, x² + x + 1 = 0 के मूल हैं, तो α² + β² =",
        "options_en": ["1", "-1", "2", "0"],
        "options_hi": ["1", "-1", "2", "0"],
        "answer_en": "-1",
        "answer_hi": "-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The real part of (1+i)/(1-i) is:",
        "question_hi": "(1+i)/(1-i) का वास्तविक भाग है:",
        "options_en": ["0", "1", "2", "-1"],
        "options_hi": ["0", "1", "2", "-1"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The quadratic equation with roots 2+√3 and 2-√3 is:",
        "question_hi": "2+√3 और 2-√3 मूल वाला द्विघात समीकरण है:",
        "options_en": ["x² - 4x + 1 = 0", "x² + 4x + 1 = 0", "x² - 4x - 1 = 0", "x² + 4x - 1 = 0"],
        "options_hi": ["x² - 4x + 1 = 0", "x² + 4x + 1 = 0", "x² - 4x - 1 = 0", "x² + 4x - 1 = 0"],
        "answer_en": "x² - 4x + 1 = 0",
        "answer_hi": "x² - 4x + 1 = 0",
        "attempted": false,
        "selected": ""
    },

    // Biology - Cell Biology & Molecular Biology (31-50)
    {
        "num": 31,
        "question_en": "The power house of the cell is:",
        "question_hi": "कोशिका का शक्ति गृह है:",
        "options_en": ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
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
        "num": 33,
        "question_en": "The cell organelle involved in protein synthesis is:",
        "question_hi": "प्रोटीन संश्लेषण में शामिल कोशिका अंगक है:",
        "options_en": ["Mitochondria", "Ribosome", "Golgi apparatus", "Lysosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण", "लाइसोसोम"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The phase of cell division where chromosomes align at equator is:",
        "question_hi": "कोशिका विभाजन का वह चरण जहाँ गुणसूत्र भूमध्य रेखा पर संरेखित होते हैं:",
        "options_en": ["Prophase", "Metaphase", "Anaphase", "Telophase"],
        "options_hi": ["प्रोफेज", "मेटाफेज", "एनाफेज", "टीलोफेज"],
        "answer_en": "Metaphase",
        "answer_hi": "मेटाफेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The process by which glucose is broken down to release energy is:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा ग्लूकोज टूटकर ऊर्जा मुक्त करता है:",
        "options_en": ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "पाचन", "किण्वन"],
        "answer_en": "Respiration",
        "answer_hi": "श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The genetic material in prokaryotes is:",
        "question_hi": "प्रोकैरियोट्स में आनुवंशिक पदार्थ है:",
        "options_en": ["DNA only", "RNA only", "Both DNA and RNA", "Protein"],
        "options_hi": ["केवल DNA", "केवल RNA", "DNA और RNA दोनों", "प्रोटीन"],
        "answer_en": "DNA only",
        "answer_hi": "केवल DNA",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
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
        "num": 38,
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
        "num": 39,
        "question_en": "The process of cell division in somatic cells is called:",
        "question_hi": "दैहिक कोशिकाओं में कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Both", "None"],
        "options_hi": ["सूत्री विभाजन", "अर्धसूत्री विभाजन", "दोनों", "कोई नहीं"],
        "answer_en": "Mitosis",
        "answer_hi": "सूत्री विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The fluid mosaic model describes the structure of:",
        "question_hi": "द्रव मोज़ेक मॉडल वर्णन करता है:",
        "options_en": ["Cell wall", "Cell membrane", "Nucleus", "Mitochondria"],
        "options_hi": ["कोशिका भित्ति", "कोशिका झिल्ली", "केंद्रक", "माइटोकॉन्ड्रिया"],
        "answer_en": "Cell membrane",
        "answer_hi": "कोशिका झिल्ली",
        "attempted": false,
        "selected": ""
    },

    // English - Reading Comprehension & Vocabulary (51-70)
    {
        "num": 51,
        "question_en": "Choose the word closest in meaning to 'Benevolent':",
        "question_hi": "'Benevolent' के अर्थ के सबसे निकट शब्द चुनें:",
        "options_en": ["Cruel", "Kind", "Selfish", "Greedy"],
        "options_hi": ["क्रूर", "दयालु", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Choose the correct antonym of 'Ancient':",
        "question_hi": "'Ancient' का सही विलोम चुनें:",
        "options_en": ["Old", "Modern", "Historic", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The meaning of 'Ephemeral' is:",
        "question_hi": "'Ephemeral' का अर्थ है:",
        "options_en": ["Eternal", "Temporary", "Permanent", "Lasting"],
        "options_hi": ["शाश्वत", "अस्थायी", "स्थायी", "टिकाऊ"],
        "answer_en": "Temporary",
        "answer_hi": "अस्थायी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Choose the word that means 'One who loves mankind':",
        "question_hi": "वह शब्द चुनें जिसका अर्थ है 'जो मानवजाति से प्रेम करता है':",
        "options_en": ["Misanthrope", "Philanthropist", "Egoist", "Narcissist"],
        "options_hi": ["मानवद्वेषी", "मानवप्रेमी", "अहंवादी", "आत्ममुग्ध"],
        "answer_en": "Philanthropist",
        "answer_hi": "मानवप्रेमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The synonym of 'Magnanimous' is:",
        "question_hi": "'Magnanimous' का पर्यायवाची है:",
        "options_en": ["Selfish", "Generous", "Mean", "Stingy"],
        "options_hi": ["स्वार्थी", "उदार", "कंजूस", "रूखा"],
        "answer_en": "Generous",
        "answer_hi": "उदार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Choose the correct word: 'He has ___ unique ability to solve problems.'",
        "question_hi": "सही शब्द चुनें: 'He has ___ unique ability to solve problems.'",
        "options_en": ["a", "an", "the", "no article"],
        "options_hi": ["a", "an", "the", "कोई article नहीं"],
        "answer_en": "a",
        "answer_hi": "a",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The meaning of 'Voracious' is:",
        "question_hi": "'Voracious' का अर्थ है:",
        "options_en": ["Eating large amounts of food", "Very small appetite", "Selective eater", "Slow eater"],
        "options_hi": ["बड़ी मात्रा में भोजन करना", "बहुत छोटी भूख", "चयनात्मक भोजन करने वाला", "धीमा भोजन करने वाला"],
        "answer_en": "Eating large amounts of food",
        "answer_hi": "बड़ी मात्रा में भोजन करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "Choose the correct preposition: 'She is good ___ mathematics.'",
        "question_hi": "सही preposition चुनें: 'She is good ___ mathematics.'",
        "options_en": ["in", "at", "on", "for"],
        "options_hi": ["in", "at", "on", "for"],
        "answer_en": "at",
        "answer_hi": "at",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The antonym of 'Belligerent' is:",
        "question_hi": "'Belligerent' का विलोम है:",
        "options_en": ["Aggressive", "Peaceful", "Hostile", "Combative"],
        "options_hi": ["आक्रामक", "शांतिपूर्ण", "शत्रुतापूर्ण", "लड़ाकू"],
        "answer_en": "Peaceful",
        "answer_hi": "शांतिपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Choose the correctly spelled word:",
        "question_hi": "सही वर्तनी वाला शब्द चुनें:",
        "options_en": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "options_hi": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "answer_en": "Accommodate",
        "answer_hi": "Accommodate",
        "attempted": false,
        "selected": ""
    },

    // Hindi - काव्य एवं साहित्य (71-90)
    {
        "num": 71,
        "question_en": "'गीतांजलि' के रचयिता हैं:",
        "question_hi": "'गीतांजलि' के रचयिता हैं:",
        "options_en": ["महादेवी वर्मा", "रवींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी निराला"],
        "options_hi": ["महादेवी वर्मा", "रवींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी निराला"],
        "answer_en": "रवींद्रनाथ टैगोर",
        "answer_hi": "रवींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "'गोदान' उपन्यास के रचयिता हैं:",
        "question_hi": "'गोदान' उपन्यास के रचयिता हैं:",
        "options_en": ["प्रेमचंद", "जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी निराला", "महादेवी वर्मा"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी निराला", "महादेवी वर्मा"],
        "answer_en": "प्रेमचंद",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "'अशोक के फूल' किसकी रचना है?",
        "question_hi": "'अशोक के फूल' किसकी रचना है?",
        "options_en": ["हजारी प्रसाद द्विवेदी", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "options_hi": ["हजारी प्रसाद द्विवेदी", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "answer_en": "हजारी प्रसाद द्विवेदी",
        "answer_hi": "हजारी प्रसाद द्विवेदी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "'कामायनी' के रचयिता हैं:",
        "question_hi": "'कामायनी' के रचयिता हैं:",
        "options_en": ["जयशंकर प्रसाद", "मैथिलीशरण गुप्त", "सूर्यकांत त्रिपाठी निराला", "महादेवी वर्मा"],
        "options_hi": ["जयशंकर प्रसाद", "मैथिलीशरण गुप्त", "सूर्यकांत त्रिपाठी निराला", "महादेवी वर्मा"],
        "answer_en": "जयशंकर प्रसाद",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "'रश्मिरथी' के रचयिता हैं:",
        "question_hi": "'रश्मिरथी' के रचयिता हैं:",
        "options_en": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "options_hi": ["रामधारी सिंह दिनकर", "हरिवंश राय बच्चन", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "answer_en": "रामधारी सिंह दिनकर",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "'निराला' का वास्तविक नाम था:",
        "question_hi": "'निराला' का वास्तविक नाम था:",
        "options_en": ["सूर्यकांत त्रिपाठी निराला", "जयशंकर प्रसाद", "महादेवी वर्मा", "सुमित्रानंदन पंत"],
        "options_hi": ["सूर्यकांत त्रिपाठी निराला", "जयशंकर प्रसाद", "महादेवी वर्मा", "सुमित्रानंदन पंत"],
        "answer_en": "सूर्यकांत त्रिपाठी निराला",
        "answer_hi": "सूर्यकांत त्रिपाठी निराला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "'चंद्रगहना से लौटती बेर' कविता के रचयिता हैं:",
        "question_hi": "'चंद्रगहना से लौटती बेर' कविता के रचयिता हैं:",
        "options_en": ["केदारनाथ अग्रवाल", "नागार्जुन", "त्रिलोचन", "धूमिल"],
        "options_hi": ["केदारनाथ अग्रवाल", "नागार्जुन", "त्रिलोचन", "धूमिल"],
        "answer_en": "केदारनाथ अग्रवाल",
        "answer_hi": "केदारनाथ अग्रवाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "'गुनाहों का देवता' किसकी रचना है?",
        "question_hi": "'गुनाहों का देवता' किसकी रचना है?",
        "options_en": ["धर्मवीर भारती", "अमृतलाल नागर", "भीष्म साहनी", "कमलेश्वर"],
        "options_hi": ["धर्मवीर भारती", "अमृतलाल नागर", "भीष्म साहनी", "कमलेश्वर"],
        "answer_en": "धर्मवीर भारती",
        "answer_hi": "धर्मवीर भारती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "'मधुशाला' के रचयिता हैं:",
        "question_hi": "'मधुशाला' के रचयिता हैं:",
        "options_en": ["हरिवंश राय बच्चन", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "options_hi": ["हरिवंश राय बच्चन", "रामधारी सिंह दिनकर", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "answer_en": "हरिवंश राय बच्चन",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "'सूरसागर' के रचयिता हैं:",
        "question_hi": "'सूरसागर' के रचयिता हैं:",
        "options_en": ["सूरदास", "तुलसीदास", "कबीरदास", "मीराबाई"],
        "options_hi": ["सूरदास", "तुलसीदास", "कबीरदास", "मीराबाई"],
        "answer_en": "सूरदास",
        "answer_hi": "सूरदास",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Indian History & Geography (91-100)
    {
        "num": 91,
        "question_en": "The first Battle of Panipat was fought in:",
        "question_hi": "पानीपत का प्रथम युद्ध लड़ा गया था:",
        "options_en": ["1526", "1556", "1761", "1857"],
        "options_hi": ["1526", "1556", "1761", "1857"],
        "answer_en": "1526",
        "answer_hi": "1526",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The capital of Mauryan Empire was:",
        "question_hi": "मौर्य साम्राज्य की राजधानी थी:",
        "options_en": ["Pataliputra", "Taxila", "Ujjain", "Kalinga"],
        "options_hi": ["पाटलिपुत्र", "तक्षशिला", "उज्जैन", "कलिंग"],
        "answer_en": "Pataliputra",
        "answer_hi": "पाटलिपुत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The longest river in India is:",
        "question_hi": "भारत की सबसे लंबी नदी है:",
        "options_en": ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
        "options_hi": ["यमुना", "गंगा", "ब्रह्मपुत्र", "गोदावरी"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The first President of India was:",
        "question_hi": "भारत के प्रथम राष्ट्रपति थे:",
        "options_en": ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Dr. Zakir Hussain", "V.V. Giri"],
        "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "डॉ. जाकिर हुसैन", "वी.वी. गिरि"],
        "answer_en": "Dr. Rajendra Prasad",
        "answer_hi": "डॉ. राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The Indian National Congress was founded in:",
        "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना हुई थी:",
        "options_en": ["1885", "1905", "1920", "1947"],
        "options_hi": ["1885", "1905", "1920", "1947"],
        "answer_en": "1885",
        "answer_hi": "1885",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The highest mountain peak in India is:",
        "question_hi": "भारत में सबसे ऊँची पर्वत चोटी है:",
        "options_en": ["Kanchenjunga", "Nanda Devi", "Mount Everest", "K2"],
        "options_hi": ["कंचनजंगा", "नंदा देवी", "माउंट एवरेस्ट", "K2"],
        "answer_en": "Kanchenjunga",
        "answer_hi": "कंचनजंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The first woman Prime Minister of India was:",
        "question_hi": "भारत की प्रथम महिला प्रधानमंत्री थीं:",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The state with longest coastline in India is:",
        "question_hi": "भारत में सबसे लंबी तटरेखा वाला राज्य है:",
        "options_en": ["Gujarat", "Maharashtra", "Tamil Nadu", "Kerala"],
        "options_hi": ["गुजरात", "महाराष्ट्र", "तमिलनाडु", "केरल"],
        "answer_en": "Gujarat",
        "answer_hi": "गुजरात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The Quit India Movement was launched in:",
        "question_hi": "भारत छोड़ो आंदोलन शुरू किया गया था:",
        "options_en": ["1942", "1930", "1920", "1947"],
        "options_hi": ["1942", "1930", "1920", "1947"],
        "answer_en": "1942",
        "answer_hi": "1942",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The first satellite of India was:",
        "question_hi": "भारत का प्रथम उपग्रह था:",
        "options_en": ["Aryabhata", "Bhaskara", "Rohini", "INSAT"],
        "options_hi": ["आर्यभट्ट", "भास्कर", "रोहिणी", "इन्सैट"],
        "answer_en": "Aryabhata",
        "answer_hi": "आर्यभट्ट",
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