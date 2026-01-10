const questions = [
    // Physics - Thermodynamics & Kinetic Theory (1-15)
    {
        "num": 1,
        "question_en": "The efficiency of a Carnot engine operating between 27°C and 327°C is:",
        "question_hi": "27°C और 327°C के बीच कार्य करने वाले कार्नोट इंजन की दक्षता है:",
        "options_en": ["25%", "50%", "75%", "100%"],
        "options_hi": ["25%", "50%", "75%", "100%"],
        "answer_en": "50%",
        "answer_hi": "50%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The mean free path of gas molecules depends on:",
        "question_hi": "गैस अणुओं का माध्य मुक्त पथ निर्भर करता है:",
        "options_en": ["Temperature only", "Pressure only", "Both temperature and pressure", "Density only"],
        "options_hi": ["केवल तापमान", "केवल दाब", "तापमान और दाब दोनों", "केवल घनत्व"],
        "answer_en": "Both temperature and pressure",
        "answer_hi": "तापमान और दाब दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "During adiabatic process, the pressure of a gas is proportional to:",
        "question_hi": "रुद्धोष्म प्रक्रिया के दौरान, गैस का दाब समानुपाती होता है:",
        "options_en": ["T", "T²", "T^γ", "T^(γ/γ-1)"],
        "options_hi": ["T", "T²", "T^γ", "T^(γ/γ-1)"],
        "answer_en": "T^γ",
        "answer_hi": "T^γ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The rms speed of oxygen molecules at 27°C is v. The rms speed at 127°C will be:",
        "question_hi": "27°C पर ऑक्सीजन अणुओं की वर्ग माध्य मूल गति v है। 127°C पर वर्ग माध्य मूल गति होगी:",
        "options_en": ["v/2", "v", "2v/√3", "4v/3"],
        "options_hi": ["v/2", "v", "2v/√3", "4v/3"],
        "answer_en": "2v/√3",
        "answer_hi": "2v/√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "For a monatomic gas, the ratio of specific heats (Cp/Cv) is:",
        "question_hi": "एक परमाणुक गैस के लिए, विशिष्ट ऊष्माओं का अनुपात (Cp/Cv) है:",
        "options_en": ["1.33", "1.40", "1.67", "1.50"],
        "options_hi": ["1.33", "1.40", "1.67", "1.50"],
        "answer_en": "1.67",
        "answer_hi": "1.67",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Chemical Kinetics & Surface Chemistry (16-30)
    {
        "num": 6,
        "question_en": "The half-life of a first order reaction is 10 minutes. The time taken for 99% completion is:",
        "question_hi": "एक प्रथम कोटि अभिक्रिया का अर्ध-जीवन 10 मिनट है। 99% पूर्णता के लिए लिया गया समय है:",
        "options_en": ["20 minutes", "40 minutes", "66.4 minutes", "100 minutes"],
        "options_hi": ["20 मिनट", "40 मिनट", "66.4 मिनट", "100 मिनट"],
        "answer_en": "66.4 minutes",
        "answer_hi": "66.4 मिनट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which of the following is an example of heterogeneous catalysis?",
        "question_hi": "निम्नलिखित में से कौन विषमांगी उत्प्रेरण का उदाहरण है?",
        "options_en": ["Hydrolysis of sucrose", "Decomposition of H₂O₂", "Haber's process", "Oxidation of SO₂ to SO₃"],
        "options_hi": ["सुक्रोज का जल-अपघटन", "H₂O₂ का विघटन", "हैबर प्रक्रम", "SO₂ का SO₃ में ऑक्सीकरण"],
        "answer_en": "Haber's process",
        "answer_hi": "हैबर प्रक्रम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The activation energy of a reaction can be determined from:",
        "question_hi": "एक अभिक्रिया की सक्रियण ऊर्जा निर्धारित की जा सकती है:",
        "options_en": ["Rate constant at one temperature", "Rate constants at two temperatures", "Equilibrium constant", "Half-life"],
        "options_hi": ["एक तापमान पर दर स्थिरांक", "दो तापमानों पर दर स्थिरांक", "साम्य स्थिरांक", "अर्ध-जीवन"],
        "answer_en": "Rate constants at two temperatures",
        "answer_hi": "दो तापमानों पर दर स्थिरांक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Tyndall effect is observed in:",
        "question_hi": "टिंडल प्रभाव प्रेक्षित किया जाता है:",
        "options_en": ["True solutions", "Colloidal solutions", "Suspensions", "Both colloidal solutions and suspensions"],
        "options_hi": ["वास्तविक विलयन", "कोलॉइडी विलयन", "निलंबन", "कोलॉइडी विलयन और निलंबन दोनों"],
        "answer_en": "Colloidal solutions",
        "answer_hi": "कोलॉइडी विलयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "For a zero order reaction, the half-life is:",
        "question_hi": "शून्य कोटि अभिक्रिया के लिए, अर्ध-जीवन है:",
        "options_en": ["Independent of initial concentration", "Directly proportional to initial concentration", "Inversely proportional to initial concentration", "Proportional to square of initial concentration"],
        "options_hi": ["प्रारंभिक सांद्रता से स्वतंत्र", "प्रारंभिक सांद्रता के समानुपाती", "प्रारंभिक सांद्रता के व्युत्क्रमानुपाती", "प्रारंभिक सांद्रता के वर्ग के समानुपाती"],
        "answer_en": "Directly proportional to initial concentration",
        "answer_hi": "प्रारंभिक सांद्रता के समानुपाती",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Complex Numbers & Vectors (31-45)
    {
        "num": 11,
        "question_en": "The amplitude of (1 + i) is:",
        "question_hi": "(1 + i) का कोणांक है:",
        "options_en": ["π/2", "π/4", "π/3", "π/6"],
        "options_hi": ["π/2", "π/4", "π/3", "π/6"],
        "answer_en": "π/4",
        "answer_hi": "π/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "The scalar product of vectors i + 2j + 3k and 3i - 2j + k is:",
        "question_hi": "सदिश i + 2j + 3k और 3i - 2j + k का अदिश गुणनफल है:",
        "options_en": ["0", "2", "4", "6"],
        "options_hi": ["0", "2", "4", "6"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The argument of the complex number -1 - i is:",
        "question_hi": "सम्मिश्र संख्या -1 - i का कोणांक है:",
        "options_en": ["π/4", "3π/4", "-3π/4", "-π/4"],
        "options_hi": ["π/4", "3π/4", "-3π/4", "-π/4"],
        "answer_en": "-3π/4",
        "answer_hi": "-3π/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The area of parallelogram with adjacent sides i + j + k and i + j - k is:",
        "question_hi": "आसन्न भुजाओं i + j + k और i + j - k वाले समांतर चतुर्भुज का क्षेत्रफल है:",
        "options_en": ["√2", "2", "2√2", "4"],
        "options_hi": ["√2", "2", "2√2", "4"],
        "answer_en": "2√2",
        "answer_hi": "2√2",
        "attempted": false,
        "selected": ""
    },

    // Biology - Human Physiology & Health (46-60)
    {
        "num": 16,
        "question_en": "The enzyme present in pancreatic juice that digests proteins is:",
        "question_hi": "अग्न्याशय रस में उपस्थित एंजाइम जो प्रोटीन को पचाता है:",
        "options_en": ["Amylase", "Trypsin", "Lipase", "Maltase"],
        "options_hi": ["एमाइलेज", "ट्रिप्सिन", "लाइपेज", "माल्टेज"],
        "answer_en": "Trypsin",
        "answer_hi": "ट्रिप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The hormone that stimulates gastric juice secretion is:",
        "question_hi": "वह हार्मोन जो गैस्ट्रिक रस स्राव को उत्तेजित करता है:",
        "options_en": ["Gastrin", "Secretin", "CCK", "Insulin"],
        "options_hi": ["गैस्ट्रिन", "सेक्रेटिन", "CCK", "इंसुलिन"],
        "answer_en": "Gastrin",
        "answer_hi": "गैस्ट्रिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The pacemaker of human heart is:",
        "question_hi": "मानव हृदय का पेसमेकर है:",
        "options_en": ["AV node", "SA node", "Bundle of His", "Purkinje fibers"],
        "options_hi": ["AV नोड", "SA नोड", "हिस बंडल", "पर्किंजे तंतु"],
        "answer_en": "SA node",
        "answer_hi": "SA नोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The vitamin that helps in blood clotting is:",
        "question_hi": "वह विटामिन जो रक्त के थक्के जमने में मदद करता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The disease caused by deficiency of vitamin D is:",
        "question_hi": "विटामिन D की कमी से होने वाला रोग है:",
        "options_en": ["Scurvy", "Rickets", "Beri-beri", "Night blindness"],
        "options_hi": ["स्कर्वी", "रिकेट्स", "बेरी-बेरी", "रतौंधी"],
        "answer_en": "Rickets",
        "answer_hi": "रिकेट्स",
        "attempted": false,
        "selected": ""
    },

    // English - Error Detection & Sentence Improvement (61-75)
    {
        "num": 21,
        "question_en": "Identify the error: 'One of the boys are coming to the party.'",
        "question_hi": "त्रुटि पहचानें: 'One of the boys are coming to the party.'",
        "options_en": ["One of", "the boys", "are coming", "to the party"],
        "options_hi": ["One of", "the boys", "are coming", "to the party"],
        "answer_en": "are coming",
        "answer_hi": "are coming",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["He is taller than me", "He is taller than I", "He is more taller than me", "He is tallest than me"],
        "options_hi": ["He is taller than me", "He is taller than I", "He is more taller than me", "He is tallest than me"],
        "answer_en": "He is taller than I",
        "answer_hi": "He is taller than I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Identify the incorrect part: 'Neither Ram nor Shyam have completed their work.'",
        "question_hi": "गलत भाग पहचानें: 'Neither Ram nor Shyam have completed their work.'",
        "options_en": ["Neither Ram nor", "Shyam have", "completed their", "work"],
        "options_hi": ["Neither Ram nor", "Shyam have", "completed their", "work"],
        "answer_en": "Shyam have",
        "answer_hi": "Shyam have",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Choose the correct option: 'The committee ___ divided in their opinion.'",
        "question_hi": "सही विकल्प चुनें: 'The committee ___ divided in their opinion.'",
        "options_en": ["is", "are", "were", "have"],
        "options_hi": ["is", "are", "were", "have"],
        "answer_en": "is",
        "answer_hi": "is",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Identify the error: 'Each of the students have submitted their assignments.'",
        "question_hi": "त्रुटि पहचानें: 'Each of the students have submitted their assignments.'",
        "options_en": ["Each of", "the students", "have submitted", "their assignments"],
        "options_hi": ["Each of", "the students", "have submitted", "their assignments"],
        "answer_en": "have submitted",
        "answer_hi": "have submitted",
        "attempted": false,
        "selected": ""
    },

    // Hindi - मुहावरे और लोकोक्तियाँ (76-90)
    {
        "num": 26,
        "question_en": "'आँख का तारा' मुहावरे का सही अर्थ है:",
        "question_hi": "'आँख का तारा' मुहावरे का सही अर्थ है:",
        "options_en": ["बहुत प्यारा", "आँख में दर्द", "तारे देखना", "रोशनी"],
        "options_hi": ["बहुत प्यारा", "आँख में दर्द", "तारे देखना", "रोशनी"],
        "answer_en": "बहुत प्यारा",
        "answer_hi": "बहुत प्यारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'ऊँट के मुँह में जीरा' मुहावरे का अर्थ है:",
        "question_hi": "'ऊँट के मुँह में जीरा' मुहावरे का अर्थ है:",
        "options_en": ["बहुत कम मात्रा", "ऊँट का भोजन", "मसालेदार भोजन", "बड़ी वस्तु"],
        "options_hi": ["बहुत कम मात्रा", "ऊँट का भोजन", "मसालेदार भोजन", "बड़ी वस्तु"],
        "answer_en": "बहुत कम मात्रा",
        "answer_hi": "बहुत कम मात्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "'अंधों में काना राजा' लोकोक्ति का सही अर्थ है:",
        "question_hi": "'अंधों में काना राजा' लोकोक्ति का सही अर्थ है:",
        "options_en": ["अंधे लोगों का राजा", "मूर्खों में कम बुद्धिमान", "सभी अंधे हैं", "राजा अंधा है"],
        "options_hi": ["अंधे लोगों का राजा", "मूर्खों में कम बुद्धिमान", "सभी अंधे हैं", "राजा अंधा है"],
        "answer_en": "मूर्खों में कम बुद्धिमान",
        "answer_hi": "मूर्खों में कम बुद्धिमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'नौ दो ग्यारह होना' मुहावरे का अर्थ है:",
        "question_hi": "'नौ दो ग्यारह होना' मुहावरे का अर्थ है:",
        "options_en": ["भाग जाना", "गिनती करना", "मुश्किल काम", "आसान काम"],
        "options_hi": ["भाग जाना", "गिनती करना", "मुश्किल काम", "आसान काम"],
        "answer_en": "भाग जाना",
        "answer_hi": "भाग जाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "'दाल में काला होना' मुहावरे का सही अर्थ है:",
        "question_hi": "'दाल में काला होना' मुहावरे का सही अर्थ है:",
        "options_en": ["दाल जल गई", "कुछ गड़बड़ होना", "खाना बनाना", "काली दाल"],
        "options_hi": ["दाल जल गई", "कुछ गड़बड़ होना", "खाना बनाना", "काली दाल"],
        "answer_en": "कुछ गड़बड़ होना",
        "answer_hi": "कुछ गड़बड़ होना",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Indian Polity & Economy (91-100)
    {
        "num": 31,
        "question_en": "The minimum age for becoming a member of Rajya Sabha is:",
        "question_hi": "राज्यसभा का सदस्य बनने के लिए न्यूनतम आयु है:",
        "options_en": ["25 years", "30 years", "35 years", "40 years"],
        "options_hi": ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"],
        "answer_en": "30 years",
        "answer_hi": "30 वर्ष",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The Planning Commission of India was replaced by:",
        "question_hi": "भारत की योजना आयोग का स्थान लिया गया:",
        "options_en": ["Finance Commission", "NITI Aayog", "Economic Advisory Council", "National Development Council"],
        "options_hi": ["वित्त आयोग", "नीति आयोग", "आर्थिक सलाहकार परिषद", "राष्ट्रीय विकास परिषद"],
        "answer_en": "NITI Aayog",
        "answer_hi": "नीति आयोग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The first woman Chief Minister of an Indian state was:",
        "question_hi": "भारतीय राज्य की पहली महिला मुख्यमंत्री थीं:",
        "options_en": ["Indira Gandhi", "Sucheta Kripalani", "Mamata Banerjee", "Jayalalithaa"],
        "options_hi": ["इंदिरा गांधी", "सुचेता कृपलानी", "ममता बनर्जी", "जयललिता"],
        "answer_en": "Sucheta Kripalani",
        "answer_hi": "सुचेता कृपलानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The Goods and Services Tax (GST) was implemented in India in:",
        "question_hi": "भारत में वस्तु एवं सेवा कर (GST) लागू किया गया:",
        "options_en": ["2015", "2016", "2017", "2018"],
        "options_hi": ["2015", "2016", "2017", "2018"],
        "answer_en": "2017",
        "answer_hi": "2017",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The number of fundamental duties in the Indian Constitution is:",
        "question_hi": "भारतीय संविधान में मूल कर्तव्यों की संख्या है:",
        "options_en": ["8", "10", "11", "12"],
        "options_hi": ["8", "10", "11", "12"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (36-100)
    {
        "num": 36,
        "question_en": "The dimensional formula of universal gravitational constant is:",
        "question_hi": "सार्वत्रिक गुरुत्वाकर्षण नियतांक का विमीय सूत्र है:",
        "options_en": ["M⁻¹L³T⁻²", "ML²T⁻²", "MLT⁻²", "M⁻¹L²T⁻²"],
        "options_hi": ["M⁻¹L³T⁻²", "ML²T⁻²", "MLT⁻²", "M⁻¹L²T⁻²"],
        "answer_en": "M⁻¹L³T⁻²",
        "answer_hi": "M⁻¹L³T⁻²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The IUPAC name of CH₃-CH₂-CO-CH₃ is:",
        "question_hi": "CH₃-CH₂-CO-CH₃ का IUPAC नाम है:",
        "options_en": ["Propanone", "Butanone", "Pentanone", "Butanal"],
        "options_hi": ["प्रोपेनोन", "ब्यूटेनोन", "पेंटेनोन", "ब्यूटेनल"],
        "answer_en": "Butanone",
        "answer_hi": "ब्यूटेनोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The value of ∫(1/(x logx)) dx is:",
        "question_hi": "∫(1/(x logx)) dx का मान है:",
        "options_en": ["log|logx| + C", "log|x| + C", "1/(logx) + C", "log|x|/x + C"],
        "options_hi": ["log|logx| + C", "log|x| + C", "1/(logx) + C", "log|x|/x + C"],
        "answer_en": "log|logx| + C",
        "answer_hi": "log|logx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The enzyme that converts glucose to ethanol in fermentation is:",
        "question_hi": "किण्वन में ग्लूकोज को एथनॉल में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Zymase", "Invertase", "Maltase", "Diastase"],
        "options_hi": ["जाइमेज", "इन्वर्टेज", "माल्टेज", "डायस्टेज"],
        "answer_en": "Zymase",
        "answer_hi": "जाइमेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Choose the correct antonym of 'Benevolent':",
        "question_hi": "'Benevolent' का सही विलोम चुनें:",
        "options_en": ["Kind", "Malevolent", "Generous", "Charitable"],
        "options_hi": ["दयालु", "दुर्भावनापूर्ण", "उदार", "दानशील"],
        "answer_en": "Malevolent",
        "answer_hi": "दुर्भावनापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "'कागज की नाव' मुहावरे का सही अर्थ है:",
        "question_hi": "'कागज की नाव' मुहावरे का सही अर्थ है:",
        "options_en": ["टिकाऊ काम", "नाशवान वस्तु", "कागज का जहाज", "मजबूत नाव"],
        "options_hi": ["टिकाऊ काम", "नाशवान वस्तु", "कागज का जहाज", "मजबूत नाव"],
        "answer_en": "नाशवान वस्तु",
        "answer_hi": "नाशवान वस्तु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The first Indian state to implement Panchayati Raj was:",
        "question_hi": "पंचायती राज लागू करने वाला पहला भारतीय राज्य था:",
        "options_en": ["Uttar Pradesh", "Rajasthan", "Maharashtra", "Gujarat"],
        "options_hi": ["उत्तर प्रदेश", "राजस्थान", "महाराष्ट्र", "गुजरात"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The critical temperature of water is:",
        "question_hi": "जल का क्रांतिक तापमान है:",
        "options_en": ["100°C", "274°C", "374°C", "500°C"],
        "options_hi": ["100°C", "274°C", "374°C", "500°C"],
        "answer_en": "374°C",
        "answer_hi": "374°C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The compound that gives positive iodoform test is:",
        "question_hi": "वह यौगिक जो सकारात्मक आयोडोफॉर्म परीक्षण देता है:",
        "options_en": ["CH₃CH₂OH", "CH₃COOH", "CH₃OCH₃", "C₆H₅OH"],
        "options_hi": ["CH₃CH₂OH", "CH₃COOH", "CH₃OCH₃", "C₆H₅OH"],
        "answer_en": "CH₃CH₂OH",
        "answer_hi": "CH₃CH₂OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The value of ∫(e^x (1 + x) dx) is:",
        "question_hi": "∫(e^x (1 + x) dx) का मान है:",
        "options_en": ["xe^x + C", "e^x + C", "(1 + x)e^x + C", "x²e^x + C"],
        "options_hi": ["xe^x + C", "e^x + C", "(1 + x)e^x + C", "x²e^x + C"],
        "answer_en": "xe^x + C",
        "answer_hi": "xe^x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The hormone that controls metamorphosis in insects is:",
        "question_hi": "वह हार्मोन जो कीटों में कायापलट को नियंत्रित करता है:",
        "options_en": ["Juvenile hormone", "Ecdysone", "Thyroxine", "Insulin"],
        "options_hi": ["किशोर हार्मोन", "एक्डिसोन", "थायरोक्सिन", "इंसुलिन"],
        "answer_en": "Ecdysone",
        "answer_hi": "एक्डिसोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["The data is correct", "The data are correct", "The datas are correct", "The datas is correct"],
        "options_hi": ["The data is correct", "The data are correct", "The datas are correct", "The datas is correct"],
        "answer_en": "The data is correct",
        "answer_hi": "The data is correct",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "'छठी का दूध याद आना' मुहावरे का अर्थ है:",
        "question_hi": "'छठी का दूध याद आना' मुहावरे का अर्थ है:",
        "options_en": ["बचपन याद आना", "मुश्किल काम", "पुरानी बातें याद आना", "बचपन का डर"],
        "options_hi": ["बचपन याद आना", "मुश्किल काम", "पुरानी बातें याद आना", "बचपन का डर"],
        "answer_en": "मुश्किल काम",
        "answer_hi": "मुश्किल काम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The first Indian to win Nobel Prize in Literature was:",
        "question_hi": "साहित्य में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Rabindranath Tagore", "Rudyard Kipling", "V.S. Naipaul", "Pearl S. Buck"],
        "options_hi": ["रबींद्रनाथ टैगोर", "रुडयार्ड किपलिंग", "वी.एस. नायपॉल", "पर्ल एस. बक"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The force between two parallel wires carrying currents in opposite directions is:",
        "question_hi": "विपरीत दिशाओं में धारा वहन करने वाले दो समानांतर तारों के बीच बल है:",
        "options_en": ["Attractive", "Repulsive", "Zero", "Infinite"],
        "options_hi": ["आकर्षक", "प्रतिकर्षी", "शून्य", "अनंत"],
        "answer_en": "Repulsive",
        "answer_hi": "प्रतिकर्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The IUPAC name of [Co(NH₃)₅NO₂]Cl₂ is:",
        "question_hi": "[Co(NH₃)₅NO₂]Cl₂ का IUPAC नाम है:",
        "options_en": ["Pentaamminenitrocobalt(III) chloride", "Pentaamminenitritocobalt(III) chloride", "Nitropentaamminecobalt(III) chloride", "Amminecobalt nitrite chloride"],
        "options_hi": ["पेंटाएमीननाइट्रोकोबाल्ट(III) क्लोराइड", "पेंटाएमीननाइट्राइटोकोबाल्ट(III) क्लोराइड", "नाइट्रोपेंटाएमीनकोबाल्ट(III) क्लोराइड", "एमीनकोबाल्ट नाइट्राइट क्लोराइड"],
        "answer_en": "Pentaamminenitrocobalt(III) chloride",
        "answer_hi": "पेंटाएमीननाइट्रोकोबाल्ट(III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The value of ∫(sin³x dx) is:",
        "question_hi": "∫(sin³x dx) का मान है:",
        "options_en": ["-cosx + (cos³x)/3 + C", "-cosx + (sin³x)/3 + C", "cosx - (cos³x)/3 + C", "-sinx + (sin³x)/3 + C"],
        "options_hi": ["-cosx + (cos³x)/3 + C", "-cosx + (sin³x)/3 + C", "cosx - (cos³x)/3 + C", "-sinx + (sin³x)/3 + C"],
        "answer_en": "-cosx + (cos³x)/3 + C",
        "answer_hi": "-cosx + (cos³x)/3 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The process of conversion of ammonia to urea occurs in:",
        "question_hi": "अमोनिया के यूरिया में परिवर्तन की प्रक्रिया होती है:",
        "options_en": ["Liver", "Kidney", "Pancreas", "Intestine"],
        "options_hi": ["यकृत", "वृक्क", "अग्न्याशय", "आंत"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Choose the correct preposition: 'He is accused ___ theft.'",
        "question_hi": "सही संबंधसूचक अव्यय चुनें: 'He is accused ___ theft.'",
        "options_en": ["of", "for", "with", "by"],
        "options_hi": ["of", "for", "with", "by"],
        "answer_en": "of",
        "answer_hi": "of",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'नाच न जाने आँगन टेढ़ा' लोकोक्ति का अर्थ है:",
        "question_hi": "'नाच न जाने आँगन टेढ़ा' लोकोक्ति का अर्थ है:",
        "options_en": ["नाचना सीखना", "अपनी कमी दूसरे पर थोपना", "आँगन टेढ़ा है", "नाच नहीं आता"],
        "options_hi": ["नाचना सीखना", "अपनी कमी दूसरे पर थोपना", "आँगन टेढ़ा है", "नाच नहीं आता"],
        "answer_en": "अपनी कमी दूसरे पर थोपना",
        "answer_hi": "अपनी कमी दूसरे पर थोपना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "The first Indian to win Olympic gold medal was:",
        "question_hi": "ओलंपिक स्वर्ण पदक जीतने वाले पहले भारतीय थे:",
        "options_en": ["Milkha Singh", "P.T. Usha", "Abhinav Bindra", "K.D. Jadhav"],
        "options_hi": ["मिल्खा सिंह", "पी.टी. उषा", "अभिनव बिंद्रा", "के.डी. जाधव"],
        "answer_en": "Abhinav Bindra",
        "answer_hi": "अभिनव बिंद्रा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The magnetic field at a point on the axis of a circular coil is:",
        "question_hi": "एक वृत्ताकार कुंडली के अक्ष पर एक बिंदु पर चुंबकीय क्षेत्र है:",
        "options_en": ["Parallel to the axis", "Perpendicular to the axis", "At 45° to the axis", "Zero"],
        "options_hi": ["अक्ष के समानांतर", "अक्ष के लंबवत", "अक्ष से 45° पर", "शून्य"],
        "answer_en": "Parallel to the axis",
        "answer_hi": "अक्ष के समानांतर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The compound that shows tautomerism is:",
        "question_hi": "वह यौगिक जो टॉटोमेरिज्म दर्शाता है:",
        "options_en": ["Acetone", "Acetaldehyde", "Both A and B", "Ethanol"],
        "options_hi": ["एसीटोन", "एसीटैल्डिहाइड", "A और B दोनों", "एथनॉल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The value of ∫(dx/√(a² - x²)) is:",
        "question_hi": "∫(dx/√(a² - x²)) का मान है:",
        "options_en": ["sin⁻¹(x/a) + C", "cos⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "log|a + √(a² - x²)| + C"],
        "options_hi": ["sin⁻¹(x/a) + C", "cos⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "log|a + √(a² - x²)| + C"],
        "answer_en": "sin⁻¹(x/a) + C",
        "answer_hi": "sin⁻¹(x/a) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The hormone that regulates basal metabolic rate is:",
        "question_hi": "वह हार्मोन जो बेसल मेटाबोलिक दर को नियंत्रित करता है:",
        "options_en": ["Thyroxine", "Insulin", "Adrenaline", "Cortisol"],
        "options_hi": ["थायरोक्सिन", "इंसुलिन", "एड्रेनालाईन", "कोर्टिसोल"],
        "answer_en": "Thyroxine",
        "answer_hi": "थायरोक्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Identify the error: 'The number of students are increasing every year.'",
        "question_hi": "त्रुटि पहचानें: 'The number of students are increasing every year.'",
        "options_en": ["The number", "of students", "are increasing", "every year"],
        "options_hi": ["The number", "of students", "are increasing", "every year"],
        "answer_en": "are increasing",
        "answer_hi": "are increasing",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "'हाथों हाथ बिकना' मुहावरे का अर्थ है:",
        "question_hi": "'हाथों हाथ बिकना' मुहावरे का अर्थ है:",
        "options_en": ["तेजी से बिकना", "हाथ से बेचना", "महंगा बिकना", "बिकना नहीं"],
        "options_hi": ["तेजी से बिकना", "हाथ से बेचना", "महंगा बिकना", "बिकना नहीं"],
        "answer_en": "तेजी से बिकना",
        "answer_hi": "तेजी से बिकना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The first Indian satellite launched by Indian rocket was:",
        "question_hi": "भारतीय रॉकेट द्वारा प्रक्षेपित पहला भारतीय उपग्रह था:",
        "options_en": ["Aryabhata", "Bhaskara", "Rohini", "INSAT-1A"],
        "options_hi": ["आर्यभट्ट", "भास्कर", "रोहिणी", "इन्सैट-1A"],
        "answer_en": "Rohini",
        "answer_hi": "रोहिणी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The work done in isothermal expansion of ideal gas depends on:",
        "question_hi": "आदर्श गैस के समतापी प्रसार में किया गया कार्य निर्भर करता है:",
        "options_en": ["Temperature only", "Pressure only", "Volume only", "Both temperature and volume"],
        "options_hi": ["केवल तापमान", "केवल दाब", "केवल आयतन", "तापमान और आयतन दोनों"],
        "answer_en": "Both temperature and volume",
        "answer_hi": "तापमान और आयतन दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The IUPAC name of CH₃-CH=CH-CHO is:",
        "question_hi": "CH₃-CH=CH-CHO का IUPAC नाम है:",
        "options_en": ["But-2-enal", "But-3-enal", "But-2-en-1-al", "But-3-en-1-al"],
        "options_hi": ["ब्यूट-2-ईनल", "ब्यूट-3-ईनल", "ब्यूट-2-ईन-1-ल", "ब्यूट-3-ईन-1-ल"],
        "answer_en": "But-2-enal",
        "answer_hi": "ब्यूट-2-ईनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The value of ∫(x sinx dx) is:",
        "question_hi": "∫(x sinx dx) का मान है:",
        "options_en": ["-x cosx + sinx + C", "x cosx - sinx + C", "-x cosx - sinx + C", "x cosx + sinx + C"],
        "options_hi": ["-x cosx + sinx + C", "x cosx - sinx + C", "-x cosx - sinx + C", "x cosx + sinx + C"],
        "answer_en": "-x cosx + sinx + C",
        "answer_hi": "-x cosx + sinx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The enzyme that converts glucose to glucose-6-phosphate is:",
        "question_hi": "ग्लूकोज को ग्लूकोज-6-फॉस्फेट में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Hexokinase", "Phosphofructokinase", "Pyruvate kinase", "Aldolase"],
        "options_hi": ["हेक्सोकाइनेज", "फॉस्फोफ्रक्टोकाइनेज", "पाइरुवेट काइनेज", "एल्डोलेज"],
        "answer_en": "Hexokinase",
        "answer_hi": "हेक्सोकाइनेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Choose the correct synonym of 'Ephemeral':",
        "question_hi": "'Ephemeral' का सही पर्यायवाची चुनें:",
        "options_en": ["Permanent", "Temporary", "Eternal", "Lasting"],
        "options_hi": ["स्थायी", "अस्थायी", "शाश्वत", "टिकाऊ"],
        "answer_en": "Temporary",
        "answer_hi": "अस्थायी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "'अपना उल्लू सीधा करना' मुहावरे का अर्थ है:",
        "question_hi": "'अपना उल्लू सीधा करना' मुहावरे का अर्थ है:",
        "options_en": ["उल्लू पकड़ना", "अपना स्वार्थ सिद्ध करना", "उल्लू सीधा करना", "कुछ नहीं"],
        "options_hi": ["उल्लू पकड़ना", "अपना स्वार्थ सिद्ध करना", "उल्लू सीधा करना", "कुछ नहीं"],
        "answer_en": "अपना स्वार्थ सिद्ध करना",
        "answer_hi": "अपना स्वार्थ सिद्ध करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The first Indian woman to climb Mount Everest was:",
        "question_hi": "माउंट एवरेस्ट पर चढ़ने वाली पहली भारतीय महिला थीं:",
        "options_en": ["Bachendri Pal", "Santosh Yadav", "Arunima Sinha", "Premlata Agarwal"],
        "options_hi": ["बचेंद्री पाल", "संतोष यादव", "अरुणिमा सिन्हा", "प्रेमलता अग्रवाल"],
        "answer_en": "Bachendri Pal",
        "answer_hi": "बचेंद्री पाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The force experienced by a charged particle in electric field is:",
        "question_hi": "विद्युत क्षेत्र में आवेशित कण द्वारा अनुभव किया गया बल है:",
        "options_en": ["qE", "q/B", "Bqv", "qv"],
        "options_hi": ["qE", "q/B", "Bqv", "qv"],
        "answer_en": "qE",
        "answer_hi": "qE",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The compound that gives positive test with Fehling's solution is:",
        "question_hi": "वह यौगिक जो फेहलिंग विलयन के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Formaldehyde", "Acetone", "Ethanol", "Acetic acid"],
        "options_hi": ["फॉर्मेल्डिहाइड", "एसीटोन", "एथनॉल", "एसिटिक अम्ल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of ∫(dx/(1 + e^x)) is:",
        "question_hi": "∫(dx/(1 + e^x)) का मान है:",
        "options_en": ["x - log(1 + e^x) + C", "log(1 + e^x) + C", "x + log(1 + e^x) + C", "log(e^x/(1 + e^x)) + C"],
        "options_hi": ["x - log(1 + e^x) + C", "log(1 + e^x) + C", "x + log(1 + e^x) + C", "log(e^x/(1 + e^x)) + C"],
        "answer_en": "x - log(1 + e^x) + C",
        "answer_hi": "x - log(1 + e^x) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The hormone that regulates water balance in body is:",
        "question_hi": "वह हार्मोन जो शरीर में जल संतुलन को नियंत्रित करता है:",
        "options_en": ["ADH", "Insulin", "Thyroxine", "Adrenaline"],
        "options_hi": ["ADH", "इंसुलिन", "थायरोक्सिन", "एड्रेनालाईन"],
        "answer_en": "ADH",
        "answer_hi": "ADH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["One of my friend is a doctor", "One of my friends is a doctor", "One of my friends are a doctor", "One of my friend are a doctor"],
        "options_hi": ["One of my friend is a doctor", "One of my friends is a doctor", "One of my friends are a doctor", "One of my friend are a doctor"],
        "answer_en": "One of my friends is a doctor",
        "answer_hi": "One of my friends is a doctor",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "'दीवार के भी कान होते हैं' लोकोक्ति का अर्थ है:",
        "question_hi": "'दीवार के भी कान होते हैं' लोकोक्ति का अर्थ है:",
        "options_en": ["दीवार सुन सकती है", "गुप्त बातें छिपी नहीं रहतीं", "दीवार के कान हैं", "कान बड़े हैं"],
        "options_hi": ["दीवार सुन सकती है", "गुप्त बातें छिपी नहीं रहतीं", "दीवार के कान हैं", "कान बड़े हैं"],
        "answer_en": "गुप्त बातें छिपी नहीं रहतीं",
        "answer_hi": "गुप्त बातें छिपी नहीं रहतीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The first Indian to win Booker Prize was:",
        "question_hi": "बुकर पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Arundhati Roy", "Salman Rushdie", "V.S. Naipaul", "Kiran Desai"],
        "options_hi": ["अरुंधति रॉय", "सलमान रश्दी", "वी.एस. नायपॉल", "किरण देसाई"],
        "answer_en": "Arundhati Roy",
        "answer_hi": "अरुंधति रॉय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
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
        "num": 80,
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
        "num": 81,
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
        "num": 82,
        "question_en": "Choose the correct antonym of 'Courageous':",
        "question_hi": "'Courageous' का सही विलोम चुनें:",
        "options_en": ["Brave", "Fearful", "Bold", "Daring"],
        "options_hi": ["बहादुर", "डरपोक", "साहसी", "दिलेर"],
        "answer_en": "Fearful",
        "answer_hi": "डरपोक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "'महाभारत' के रचयिता हैं:",
        "question_hi": "'महाभारत' के रचयिता हैं:",
        "options_en": ["वाल्मीकि", "वेदव्यास", "तुलसीदास", "कालिदास"],
        "options_hi": ["वाल्मीकि", "वेदव्यास", "तुलसीदास", "कालिदास"],
        "answer_en": "वेदव्यास",
        "answer_hi": "वेदव्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "The force between two charges is F. If distance is doubled, new force is:",
        "question_hi": "दो आवेशों के बीच बल F है। यदि दूरी दोगुनी कर दी जाए, नया बल है:",
        "options_en": ["F/2", "F/4", "2F", "4F"],
        "options_hi": ["F/2", "F/4", "2F", "4F"],
        "answer_en": "F/4",
        "answer_hi": "F/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The compound that gives positive test with Tollen's reagent is:",
        "question_hi": "वह यौगिक जो टोलेन अभिकर्मक के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Formaldehyde", "Acetone", "Ethanol", "Acetic acid"],
        "options_hi": ["फॉर्मेल्डिहाइड", "एसीटोन", "एथनॉल", "एसिटिक अम्ल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
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
        "num": 89,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["The team are playing well", "The team is playing well", "The team were playing well", "The team have playing well"],
        "options_hi": ["The team are playing well", "The team is playing well", "The team were playing well", "The team have playing well"],
        "answer_en": "The team is playing well",
        "answer_hi": "The team is playing well",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "'अभिज्ञानशाकुंतलम्' के रचयिता हैं:",
        "question_hi": "'अभिज्ञानशाकुंतलम्' के रचयिता हैं:",
        "options_en": ["कालिदास", "भास", "भवभूति", "सूरदास"],
        "options_hi": ["कालिदास", "भास", "भवभूति", "सूरदास"],
        "answer_en": "कालिदास",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The first Indian woman to win Miss World title was:",
        "question_hi": "मिस वर्ल्ड खिताब जीतने वाली पहली भारतीय महिला थीं:",
        "options_en": ["Aishwarya Rai", "Sushmita Sen", "Priyanka Chopra", "Reita Faria"],
        "options_hi": ["ऐश्वर्या राय", "सुष्मिता सेन", "प्रियंका चोपड़ा", "रीता फारिया"],
        "answer_en": "Reita Faria",
        "answer_hi": "रीता फारिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The unit of magnetic flux is:",
        "question_hi": "चुंबकीय फ्लक्स की इकाई है:",
        "options_en": ["Tesla", "Weber", "Henry", "Gauss"],
        "options_hi": ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
        "answer_en": "Weber",
        "answer_hi": "वेबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
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
        "num": 94,
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
        "num": 95,
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
        "num": 96,
        "question_en": "Choose the correct synonym of 'Magnanimous':",
        "question_hi": "'Magnanimous' का सही पर्यायवाची चुनें:",
        "options_en": ["Selfish", "Generous", "Mean", "Stingy"],
        "options_hi": ["स्वार्थी", "उदार", "कंजूस", "रूखा"],
        "answer_en": "Generous",
        "answer_hi": "उदार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "'रामचरितमानस' के रचयिता हैं:",
        "question_hi": "'रामचरितमानस' के रचयिता हैं:",
        "options_en": ["तुलसीदास", "सूरदास", "कबीर", "मीराबाई"],
        "options_hi": ["तुलसीदास", "सूरदास", "कबीर", "मीराबाई"],
        "answer_en": "तुलसीदास",
        "answer_hi": "तुलसीदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The first Indian to win Nobel Prize in Economics was:",
        "question_hi": "अर्थशास्त्र में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["Amartya Sen", "C.V. Raman", "Hargobind Khorana", "Mother Teresa"],
        "options_hi": ["अमर्त्य सेन", "सी.वी. रमन", "हरगोबिंद खुराना", "मदर टेरेसा"],
        "answer_en": "Amartya Sen",
        "answer_hi": "अमर्त्य सेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The critical angle for glass-air interface is 42°. The refractive index is:",
        "question_hi": "कांच-वायु अंतरापृष्ठ के लिए क्रांतिक कोण 42° है। अपवर्तनांक है:",
        "options_en": ["1.5", "1.6", "1.7", "1.8"],
        "options_hi": ["1.5", "1.6", "1.7", "1.8"],
        "answer_en": "1.5",
        "answer_hi": "1.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The number of structural isomers of pentane is:",
        "question_hi": "पेंटेन के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
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