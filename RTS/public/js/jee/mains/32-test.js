const questions = [
    // Physics - Electrostatics & Current Electricity (1-10)
    {
        "num": 1,
        "question_en": "The SI unit of electric flux is:",
        "question_hi": "विद्युत फ्लक्स की SI इकाई है:",
        "options_en": ["Volt-meter", "Newton/Coulomb", "Joule/Coulomb", "Weber"],
        "options_hi": ["वोल्ट-मीटर", "न्यूटन/कूलॉम", "जूल/कूलॉम", "वेबर"],
        "answer_en": "Volt-meter",
        "answer_hi": "वोल्ट-मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The equivalent resistance between points A and B in a Wheatstone bridge in balanced condition is:",
        "question_hi": "संतुलित अवस्था में व्हीटस्टोन ब्रिज में बिंदु A और B के बीच तुल्य प्रतिरोध है:",
        "options_en": ["R", "2R", "R/2", "Depends on bridge arms"],
        "options_hi": ["R", "2R", "R/2", "ब्रिज भुजाओं पर निर्भर"],
        "answer_en": "Depends on bridge arms",
        "answer_hi": "ब्रिज भुजाओं पर निर्भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The electric field inside a charged spherical shell is:",
        "question_hi": "आवेशित गोलाकार कोश के अंदर विद्युत क्षेत्र है:",
        "options_en": ["Zero", "Constant", "Varies as 1/r", "Varies as 1/r²"],
        "options_hi": ["शून्य", "स्थिर", "1/r के अनुसार परिवर्तित", "1/r² के अनुसार परिवर्तित"],
        "answer_en": "Zero",
        "answer_hi": "शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Kirchhoff's current law is based on conservation of:",
        "question_hi": "किरचॉफ का धारा नियम संरक्षण पर आधारित है:",
        "options_en": ["Energy", "Charge", "Momentum", "Mass"],
        "options_hi": ["ऊर्जा", "आवेश", "संवेग", "द्रव्यमान"],
        "answer_en": "Charge",
        "answer_hi": "आवेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The capacitance of a parallel plate capacitor increases when:",
        "question_hi": "समानांतर प्लेट संधारित्र की धारिता बढ़ती है जब:",
        "options_en": ["Distance between plates increases", "Area of plates decreases", "Dielectric constant increases", "Charge decreases"],
        "options_hi": ["प्लेटों के बीच की दूरी बढ़ती है", "प्लेटों का क्षेत्रफल घटता है", "परावैद्युतांक बढ़ता है", "आवेश घटता है"],
        "answer_en": "Dielectric constant increases",
        "answer_hi": "परावैद्युतांक बढ़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The drift velocity of electrons in a conductor is of the order of:",
        "question_hi": "एक चालक में इलेक्ट्रॉनों का अपवाह वेग कोटि का है:",
        "options_en": ["10⁸ m/s", "10⁶ m/s", "10⁻³ m/s", "10⁻⁶ m/s"],
        "options_hi": ["10⁸ m/s", "10⁶ m/s", "10⁻³ m/s", "10⁻⁶ m/s"],
        "answer_en": "10⁻³ m/s",
        "answer_hi": "10⁻³ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Gauss's law is applicable for:",
        "question_hi": "गॉस का नियम लागू होता है:",
        "options_en": ["Any closed surface", "Only spherical surfaces", "Only symmetrical charge distributions", "Both A and C"],
        "options_hi": ["किसी भी बंद सतह", "केवल गोलाकार सतह", "केवल सममित आवेश वितरण", "A और C दोनों"],
        "answer_en": "Any closed surface",
        "answer_hi": "किसी भी बंद सतह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The potential difference across a conductor carrying constant current is directly proportional to:",
        "question_hi": "स्थिर धारा वाहक चालक के सिरों पर विभवांतर समानुपाती होता है:",
        "options_en": ["Current", "Resistance", "Both A and B", "Charge"],
        "options_hi": ["धारा", "प्रतिरोध", "A और B दोनों", "आवेश"],
        "answer_en": "Current",
        "answer_hi": "धारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The energy stored in a capacitor is given by:",
        "question_hi": "संधारित्र में संचित ऊर्जा दी जाती है:",
        "options_en": ["½CV²", "½QV", "½Q²/C", "All of these"],
        "options_hi": ["½CV²", "½QV", "½Q²/C", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The resistivity of a conductor depends on:",
        "question_hi": "चालक की प्रतिरोधकता निर्भर करती है:",
        "options_en": ["Length", "Area of cross-section", "Material and temperature", "All of these"],
        "options_hi": ["लंबाई", "अनुप्रस्थ काट का क्षेत्रफल", "पदार्थ और तापमान", "उपरोक्त सभी"],
        "answer_en": "Material and temperature",
        "answer_hi": "पदार्थ और तापमान",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Chemical Bonding & Molecular Structure (11-20)
    {
        "num": 11,
        "question_en": "The bond angle in water molecule is approximately:",
        "question_hi": "जल अणु में बंध कोण लगभग है:",
        "options_en": ["90°", "104.5°", "109.5°", "120°"],
        "options_hi": ["90°", "104.5°", "109.5°", "120°"],
        "answer_en": "104.5°",
        "answer_hi": "104.5°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The hybridization in SF₆ is:",
        "question_hi": "SF₆ में संकरण है:",
        "options_en": ["sp³", "sp³d", "sp³d²", "d²sp³"],
        "options_hi": ["sp³", "sp³d", "sp³d²", "d²sp³"],
        "answer_en": "sp³d²",
        "answer_hi": "sp³d²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which molecule has zero dipole moment?",
        "question_hi": "किस अणु का द्विध्रुव आघूर्ण शून्य है?",
        "options_en": ["H₂O", "NH₃", "BF₃", "NF₃"],
        "options_hi": ["H₂O", "NH₃", "BF₃", "NF₃"],
        "answer_en": "BF₃",
        "answer_hi": "BF₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The bond order in O₂ molecule is:",
        "question_hi": "O₂ अणु में बंध क्रम है:",
        "options_en": ["1", "1.5", "2", "2.5"],
        "options_hi": ["1", "1.5", "2", "2.5"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The shape of XeF₄ molecule is:",
        "question_hi": "XeF₄ अणु की आकृति है:",
        "options_en": ["Tetrahedral", "Square planar", "Trigonal bipyramidal", "Octahedral"],
        "options_hi": ["चतुष्फलकीय", "वर्ग समतलीय", "त्रिकोणीय द्विपिरामिडी", "अष्टफलकीय"],
        "answer_en": "Square planar",
        "answer_hi": "वर्ग समतलीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The compound with highest boiling point is:",
        "question_hi": "उच्चतम क्वथनांक वाला यौगिक है:",
        "options_en": ["CH₄", "SiH₄", "GeH₄", "SnH₄"],
        "options_hi": ["CH₄", "SiH₄", "GeH₄", "SnH₄"],
        "answer_en": "SnH₄",
        "answer_hi": "SnH₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The number of sigma bonds in benzene is:",
        "question_hi": "बेंजीन में सिग्मा बंधों की संख्या है:",
        "options_en": ["6", "9", "12", "15"],
        "options_hi": ["6", "9", "12", "15"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The bond length in C₂ molecule indicates:",
        "question_hi": "C₂ अणु में बंध लंबाई इंगित करती है:",
        "options_en": ["Single bond", "Double bond", "Triple bond", "No bond"],
        "options_hi": ["एकल बंध", "द्वि बंध", "त्रि बंध", "कोई बंध नहीं"],
        "answer_en": "Double bond",
        "answer_hi": "द्वि बंध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The compound that shows hydrogen bonding is:",
        "question_hi": "वह यौगिक जो हाइड्रोजन बंधन दर्शाता है:",
        "options_en": ["H₂S", "HCl", "HF", "HI"],
        "options_hi": ["H₂S", "HCl", "HF", "HI"],
        "answer_en": "HF",
        "answer_hi": "HF",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The VSEPR theory is used to predict:",
        "question_hi": "VSEPR सिद्धांत का उपयोग भविष्यवाणी के लिए किया जाता है:",
        "options_en": ["Bond energy", "Bond length", "Molecular geometry", "Bond order"],
        "options_hi": ["बंध ऊर्जा", "बंध लंबाई", "आणविक ज्यामिति", "बंध क्रम"],
        "answer_en": "Molecular geometry",
        "answer_hi": "आणविक ज्यामिति",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Limits, Continuity & Differentiability (21-30)
    {
        "num": 21,
        "question_en": "lim(x→0) (sinx/x) is equal to:",
        "question_hi": "lim(x→0) (sinx/x) बराबर है:",
        "options_en": ["0", "1", "∞", "Does not exist"],
        "options_hi": ["0", "1", "∞", "अस्तित्व में नहीं है"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The function f(x) = |x| is differentiable at:",
        "question_hi": "फलन f(x) = |x| अवकलनीय है:",
        "options_en": ["x = 0 only", "All real numbers", "All x except 0", "Nowhere"],
        "options_hi": ["केवल x = 0", "सभी वास्तविक संख्याओं पर", "0 को छोड़कर सभी x पर", "कहीं नहीं"],
        "answer_en": "All x except 0",
        "answer_hi": "0 को छोड़कर सभी x पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "lim(x→∞) (1 + 1/x)ˣ is equal to:",
        "question_hi": "lim(x→∞) (1 + 1/x)ˣ बराबर है:",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "e",
        "answer_hi": "e",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The derivative of sin²x with respect to x is:",
        "question_hi": "x के सापेक्ष sin²x का अवकलज है:",
        "options_en": ["2sinx", "2cosx", "sin2x", "cos2x"],
        "options_hi": ["2sinx", "2cosx", "sin2x", "cos2x"],
        "answer_en": "sin2x",
        "answer_hi": "sin2x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "A function f(x) is continuous at x = a if:",
        "question_hi": "एक फलन f(x), x = a पर संतत है यदि:",
        "options_en": ["lim(x→a) f(x) exists", "f(a) exists", "lim(x→a) f(x) = f(a)", "All of these"],
        "options_hi": ["lim(x→a) f(x) का अस्तित्व है", "f(a) का अस्तित्व है", "lim(x→a) f(x) = f(a)", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The derivative of log|x| is:",
        "question_hi": "log|x| का अवकलज है:",
        "options_en": ["1/x", "1/|x|", "-1/x", "x"],
        "options_hi": ["1/x", "1/|x|", "-1/x", "x"],
        "answer_en": "1/x",
        "answer_hi": "1/x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "lim(x→0) (1 - cosx)/x² is equal to:",
        "question_hi": "lim(x→0) (1 - cosx)/x² बराबर है:",
        "options_en": ["0", "1/2", "1", "2"],
        "options_hi": ["0", "1/2", "1", "2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "If y = xⁿ, then dy/dx is:",
        "question_hi": "यदि y = xⁿ, तो dy/dx है:",
        "options_en": ["nxⁿ⁻¹", "xⁿ⁻¹", "nxⁿ", "xⁿ"],
        "options_hi": ["nxⁿ⁻¹", "xⁿ⁻¹", "nxⁿ", "xⁿ"],
        "answer_en": "nxⁿ⁻¹",
        "answer_hi": "nxⁿ⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The function f(x) = 1/(x-1) is discontinuous at:",
        "question_hi": "फलन f(x) = 1/(x-1) असतत है:",
        "options_en": ["x = 0", "x = 1", "x = 2", "All real numbers"],
        "options_hi": ["x = 0", "x = 1", "x = 2", "सभी वास्तविक संख्याओं पर"],
        "answer_en": "x = 1",
        "answer_hi": "x = 1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The derivative of constant function is:",
        "question_hi": "अचर फलन का अवकलज है:",
        "options_en": ["0", "1", "The constant itself", "Undefined"],
        "options_hi": ["0", "1", "अचर स्वयं", "अपरिभाषित"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },

    // Biology - Reproduction in Organisms (31-40)
    {
        "num": 31,
        "question_en": "Binary fission is a method of asexual reproduction in:",
        "question_hi": "द्विखंडन अलैंगिक प्रजनन की एक विधि है:",
        "options_en": ["Amoeba", "Hydra", "Planaria", "Yeast"],
        "options_hi": ["अमीबा", "हाइड्रा", "प्लैनेरिया", "यीस्ट"],
        "answer_en": "Amoeba",
        "answer_hi": "अमीबा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The male gamete in plants is produced in:",
        "question_hi": "पौधों में नर युग्मक उत्पन्न होता है:",
        "options_en": ["Anther", "Ovary", "Stigma", "Style"],
        "options_hi": ["परागकोष", "अंडाशय", "वर्तिकाग्र", "वर्तिका"],
        "answer_en": "Anther",
        "answer_hi": "परागकोष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The process of fusion of male and female gametes is called:",
        "question_hi": "नर और मादा युग्मकों के संलयन की प्रक्रिया कहलाती है:",
        "options_en": ["Fertilization", "Pollination", "Germination", "Implantation"],
        "options_hi": ["निषेचन", "परागण", "अंकुरण", "आरोपण"],
        "answer_en": "Fertilization",
        "answer_hi": "निषेचन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Vegetative propagation in potato occurs through:",
        "question_hi": "आलू में कायिक प्रवर्धन होता है:",
        "options_en": ["Tubers", "Bulbs", "Rhizomes", "Corms"],
        "options_hi": ["कंद", "शल्ककंद", "प्रकंद", "घनकंद"],
        "answer_en": "Tubers",
        "answer_hi": "कंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The number of chromosomes in gametes is:",
        "question_hi": "युग्मकों में गुणसूत्रों की संख्या है:",
        "options_en": ["Same as somatic cells", "Half of somatic cells", "Double of somatic cells", "Variable"],
        "options_hi": ["दैहिक कोशिकाओं के समान", "दैहिक कोशिकाओं की आधी", "दैहिक कोशिकाओं से दोगुनी", "परिवर्तनशील"],
        "answer_en": "Half of somatic cells",
        "answer_hi": "दैहिक कोशिकाओं की आधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "External fertilization occurs in:",
        "question_hi": "बाह्य निषेचन होता है:",
        "options_en": ["Mammals", "Birds", "Fishes", "Reptiles"],
        "options_hi": ["स्तनधारी", "पक्षी", "मछली", "सरीसृप"],
        "answer_en": "Fishes",
        "answer_hi": "मछली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The process of formation of gametes is called:",
        "question_hi": "युग्मकों के निर्माण की प्रक्रिया कहलाती है:",
        "options_en": ["Gametogenesis", "Spermatogenesis", "Oogenesis", "Embryogenesis"],
        "options_hi": ["युग्मकजनन", "शुक्राणुजनन", "अंडजनन", "भ्रूणजनन"],
        "answer_en": "Gametogenesis",
        "answer_hi": "युग्मकजनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Parthenogenesis is a type of:",
        "question_hi": "अनिषेकजनन एक प्रकार है:",
        "options_en": ["Sexual reproduction", "Asexual reproduction", "Vegetative propagation", "Both A and B"],
        "options_hi": ["लैंगिक प्रजनन", "अलैंगिक प्रजनन", "कायिक प्रवर्धन", "A और B दोनों"],
        "answer_en": "Asexual reproduction",
        "answer_hi": "अलैंगिक प्रजनन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The male reproductive part of flower is:",
        "question_hi": "फूल का नर जनन भाग है:",
        "options_en": ["Pistil", "Stamen", "Petals", "Sepals"],
        "options_hi": ["पुंकेसर", "स्तमक", "पंखुड़ियाँ", "बाह्यदल"],
        "answer_en": "Stamen",
        "answer_hi": "स्तमक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The zygote develops into:",
        "question_hi": "युग्मनज विकसित होता है:",
        "options_en": ["Embryo", "Gamete", "Spore", "Seed"],
        "options_hi": ["भ्रूण", "युग्मक", "बीजाणु", "बीज"],
        "answer_en": "Embryo",
        "answer_hi": "भ्रूण",
        "attempted": false,
        "selected": ""
    },

    // English - Reading Comprehension & Writing Skills (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct meaning of 'Ubiquitous':",
        "question_hi": "'Ubiquitous' का सही अर्थ चुनें:",
        "options_en": ["Rare", "Everywhere", "Hidden", "Temporary"],
        "options_hi": ["दुर्लभ", "सर्वव्यापी", "छिपा हुआ", "अस्थायी"],
        "answer_en": "Everywhere",
        "answer_hi": "सर्वव्यापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Identify the type of sentence: 'She not only sings well but also dances beautifully.'",
        "question_hi": "वाक्य का प्रकार पहचानें: 'She not only sings well but also dances beautifully.'",
        "options_en": ["Simple", "Compound", "Complex", "Compound-complex"],
        "options_hi": ["सरल", "संयुक्त", "मिश्र", "संयुक्त-मिश्र"],
        "answer_en": "Compound",
        "answer_hi": "संयुक्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Choose the correct word: 'The committee ___ unanimous in their decision.'",
        "question_hi": "सही शब्द चुनें: 'The committee ___ unanimous in their decision.'",
        "options_en": ["was", "were", "are", "have"],
        "options_hi": ["was", "were", "are", "have"],
        "answer_en": "was",
        "answer_hi": "was",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The antonym of 'Magnanimous' is:",
        "question_hi": "'Magnanimous' का विलोम है:",
        "options_en": ["Generous", "Selfish", "Kind", "Noble"],
        "options_hi": ["उदार", "स्वार्थी", "दयालु", "महान"],
        "answer_en": "Selfish",
        "answer_hi": "स्वार्थी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Identify the figure of speech: 'The city slept peacefully through the night.'",
        "question_hi": "अलंकार पहचानें: 'The city slept peacefully through the night.'",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Choose the correct word: 'Neither the teacher nor the students ___ present.'",
        "question_hi": "सही शब्द चुनें: 'Neither the teacher nor the students ___ present.'",
        "options_en": ["was", "were", "is", "are"],
        "options_hi": ["was", "were", "is", "are"],
        "answer_en": "were",
        "answer_hi": "were",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The synonym of 'Benevolent' is:",
        "question_hi": "'Benevolent' का समानार्थी है:",
        "options_en": ["Cruel", "Kind", "Selfish", "Greedy"],
        "options_hi": ["क्रूर", "दयालु", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Identify the tense: 'I will have completed my work by tomorrow.'",
        "question_hi": "काल पहचानें: 'I will have completed my work by tomorrow.'",
        "options_en": ["Future perfect", "Future continuous", "Simple future", "Present perfect"],
        "options_hi": ["भविष्य पूर्ण", "भविष्य अपूर्ण", "सामान्य भविष्य", "वर्तमान पूर्ण"],
        "answer_en": "Future perfect",
        "answer_hi": "भविष्य पूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Choose the correctly spelled word:",
        "question_hi": "सही वर्तनी वाला शब्द चुनें:",
        "options_en": ["Occurrence", "Occurence", "Ocurrence", "Occurense"],
        "options_hi": ["Occurrence", "Occurence", "Ocurrence", "Occurense"],
        "answer_en": "Occurrence",
        "answer_hi": "Occurrence",
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

    // Hindi - साहित्य और काव्य (51-60)
    {
        "num": 51,
        "question_en": "'गोदान' के रचयिता हैं:",
        "question_hi": "'गोदान' के रचयिता हैं:",
        "options_en": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "प्रेमचंद",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'कामायनी' के रचयिता हैं:",
        "question_hi": "'कामायनी' के रचयिता हैं:",
        "options_en": ["जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी", "सुमित्रानंदन पंत"],
        "options_hi": ["जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी", "सुमित्रानंदन पंत"],
        "answer_en": "जयशंकर प्रसाद",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'रश्मिरथी' के रचयिता हैं:",
        "question_hi": "'रश्मिरथी' के रचयिता हैं:",
        "options_en": ["रामधारी सिंह दिनकर", "मैथिलीशरण गुप्त", "सूर्यकांत त्रिपाठी", "हरिवंश राय बच्चन"],
        "options_hi": ["रामधारी सिंह दिनकर", "मैथिलीशरण गुप्त", "सूर्यकांत त्रिपाठी", "हरिवंश राय बच्चन"],
        "answer_en": "रामधारी सिंह दिनकर",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "कौन सी रचना तुलसीदास की है?",
        "question_hi": "कौन सी रचना तुलसीदास की है?",
        "options_en": ["रामचरितमानस", "सूरसागर", "पद्मावत", "बिहारी सतसई"],
        "options_hi": ["रामचरितमानस", "सूरसागर", "पद्मावत", "बिहारी सतसई"],
        "answer_en": "रामचरितमानस",
        "answer_hi": "रामचरितमानस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'गीतांजलि' के रचयिता हैं:",
        "question_hi": "'गीतांजलि' के रचयिता हैं:",
        "options_en": ["रवींद्रनाट टैगोर", "महादेवी वर्मा", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["रवींद्रनाथ टैगोर", "महादेवी वर्मा", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी"],
        "answer_en": "रवींद्रनाथ टैगोर",
        "answer_hi": "रवींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'साकेत' के रचयिता हैं:",
        "question_hi": "'साकेत' के रचयिता हैं:",
        "options_en": ["मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "options_hi": ["मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "answer_en": "मैथिलीशरण गुप्त",
        "answer_hi": "मैथिलीशरण गुप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'निर्मला' के रचयिता हैं:",
        "question_hi": "'निर्मला' के रचयिता हैं:",
        "options_en": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "प्रेमचंद",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'अश्क' किसकी रचना है?",
        "question_hi": "'अश्क' किसकी रचना है?",
        "options_en": ["उपेंद्रनाथ अश्क", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["उपेंद्रनाथ अश्क", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "उपेंद्रनाथ अश्क",
        "answer_hi": "उपेंद्रनाथ अश्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'चंद्रगहना से लौटती बेर' कविता के रचयिता हैं:",
        "question_hi": "'चंद्रगहना से लौटती बेर' कविता के रचयिता हैं:",
        "options_en": ["केदारनाथ अग्रवाल", "सुमित्रानंदन पंत", "हरिवंश राय बच्चन", "महादेवी वर्मा"],
        "options_hi": ["केदारनाथ अग्रवाल", "सुमित्रानंदन पंत", "हरिवंश राय बच्चन", "महादेवी वर्मा"],
        "answer_en": "केदारनाथ अग्रवाल",
        "answer_hi": "केदारनाथ अग्रवाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'मधुशाला' के रचयिता हैं:",
        "question_hi": "'मधुशाला' के रचयिता हैं:",
        "options_en": ["हरिवंश राय बच्चन", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["हरिवंश राय बच्चन", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "हरिवंश राय बच्चन",
        "answer_hi": "हरिवंश राय बच्चन",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - India & World (61-70)
    {
        "num": 61,
        "question_en": "The current President of India is:",
        "question_hi": "भारत के वर्तमान राष्ट्रपति हैं:",
        "options_en": ["Ram Nath Kovind", "Droupadi Murmu", "Pratibha Patil", "APJ Abdul Kalam"],
        "options_hi": ["राम नाथ कोविंद", "द्रौपदी मुर्मू", "प्रतिभा पाटिल", "एपीजे अब्दुल कलाम"],
        "answer_en": "Droupadi Murmu",
        "answer_hi": "द्रौपदी मुर्मू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
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
        "num": 63,
        "question_en": "The capital of Uttarakhand is:",
        "question_hi": "उत्तराखंड की राजधानी है:",
        "options_en": ["Dehradun", "Nainital", "Haridwar", "Rishikesh"],
        "options_hi": ["देहरादून", "नैनीताल", "हरिद्वार", "ऋषिकेश"],
        "answer_en": "Dehradun",
        "answer_hi": "देहरादून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The currency of Japan is:",
        "question_hi": "जापान की मुद्रा है:",
        "options_en": ["Yen", "Won", "Yuan", "Ringgit"],
        "options_hi": ["येन", "वॉन", "युआन", "रिंगित"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The largest state in India by area is:",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य है:",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The national animal of India is:",
        "question_hi": "भारत का राष्ट्रीय पशु है:",
        "options_en": ["Lion", "Tiger", "Elephant", "Peacock"],
        "options_hi": ["शेर", "बाघ", "हाथी", "मोर"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The first Prime Minister of India was:",
        "question_hi": "भारत के प्रथम प्रधानमंत्री थे:",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The largest ocean in the world is:",
        "question_hi": "विश्व का सबसे बड़ा महासागर है:",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
        "question_en": "The device used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दबाव मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Thermometer", "Barometer", "Hygrometer", "Ammeter"],
        "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-100)
    {
        "num": 71,
        "question_en": "The value of ∫(0 to 1) x dx is:",
        "question_hi": "∫(0 से 1) x dx का मान है:",
        "options_en": ["0", "1/2", "1", "2"],
        "options_hi": ["0", "1/2", "1", "2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The chemical formula of ozone is:",
        "question_hi": "ओजोन का रासायनिक सूत्र है:",
        "options_en": ["O₂", "O₃", "O₄", "HO"],
        "options_hi": ["O₂", "O₃", "O₄", "HO"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of sin30° is:",
        "question_hi": "sin30° का मान है:",
        "options_en": ["0", "1/2", "√3/2", "1"],
        "options_hi": ["0", "1/2", "√3/2", "1"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The process of conversion of nitrogen to ammonia is called:",
        "question_hi": "नाइट्रोजन के अमोनिया में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrogen fixation",
        "answer_hi": "नाइट्रोजन स्थिरीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The atomic number of hydrogen is:",
        "question_hi": "हाइड्रोजन की परमाणु संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The formula for area of circle is:",
        "question_hi": "वृत्त के क्षेत्रफल का सूत्र है:",
        "options_en": ["πr²", "2πr", "πd", "2πr²"],
        "options_hi": ["πr²", "2πr", "πd", "2πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
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
        "num": 78,
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
        "num": 79,
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
        "num": 80,
        "question_en": "The vitamin that prevents scurvy is:",
        "question_hi": "वह विटामिन जो स्कर्वी को रोकता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
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
        "question_en": "The value of cos0° is:",
        "question_hi": "cos0° का मान है:",
        "options_en": ["0", "1/2", "√3/2", "1"],
        "options_hi": ["0", "1/2", "√3/2", "1"],
        "answer_en": "1",
        "answer_hi": "1",
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
        "question_en": "The value of tan0° is:",
        "question_hi": "tan0° का मान है:",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "0",
        "answer_hi": "0",
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