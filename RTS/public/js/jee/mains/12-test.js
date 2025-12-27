const questions = [
    // Physics - Optics & Waves (1-10)
    {
        "num": 1,
        "question_en": "The phenomenon of interference is shown by:",
        "question_hi": "व्यतिकरण की घटना दर्शाई जाती है:",
        "options_en": ["Only transverse waves", "Only longitudinal waves", "Both transverse and longitudinal waves", "Neither transverse nor longitudinal waves"],
        "options_hi": ["केवल अनुप्रस्थ तरंगें", "केवल अनुदैर्ध्य तरंगें", "अनुप्रस्थ और अनुदैर्ध्य दोनों तरंगें", "न तो अनुप्रस्थ और न ही अनुदैर्ध्य तरंगें"],
        "answer_en": "Both transverse and longitudinal waves",
        "answer_hi": "अनुप्रस्थ और अनुदैर्ध्य दोनों तरंगें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "In a concave mirror, if the object is placed at focus, the image is formed at:",
        "question_hi": "अवतल दर्पण में, यदि वस्तु को फोकस पर रखा जाता है, तो प्रतिबिंब बनता है:",
        "options_en": ["Focus", "Center of curvature", "Infinity", "Between focus and pole"],
        "options_hi": ["फोकस", "वक्रता केंद्र", "अनंत", "फोकस और ध्रुव के बीच"],
        "answer_en": "Infinity",
        "answer_hi": "अनंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The refractive index of water is 1.33. What is the speed of light in water?",
        "question_hi": "पानी का अपवर्तनांक 1.33 है। पानी में प्रकाश की गति क्या है?",
        "options_en": ["2.25 × 10⁸ m/s", "3.0 × 10⁸ m/s", "2.0 × 10⁸ m/s", "1.33 × 10⁸ m/s"],
        "options_hi": ["2.25 × 10⁸ m/s", "3.0 × 10⁸ m/s", "2.0 × 10⁸ m/s", "1.33 × 10⁸ m/s"],
        "answer_en": "2.25 × 10⁸ m/s",
        "answer_hi": "2.25 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The dispersive power of a prism depends on:",
        "question_hi": "प्रिज्म की वर्ण विक्षेपण क्षमता निर्भर करती है:",
        "options_en": ["The material of prism", "Angle of prism", "Both material and angle", "Neither material nor angle"],
        "options_hi": ["प्रिज्म के पदार्थ पर", "प्रिज्म के कोण पर", "पदार्थ और कोण दोनों पर", "न तो पदार्थ और न ही कोण पर"],
        "answer_en": "The material of prism",
        "answer_hi": "प्रिज्म के पदार्थ पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "In Young's double slit experiment, if the distance between slits is doubled, the fringe width:",
        "question_hi": "यंग के द्वि-छिद्र प्रयोग में, यदि छिद्रों के बीच की दूरी दोगुनी कर दी जाए, तो फ्रिंज चौड़ाई:",
        "options_en": ["Becomes half", "Becomes double", "Remains same", "Becomes four times"],
        "options_hi": ["आधी हो जाती है", "दोगुनी हो जाती है", "समान रहती है", "चार गुनी हो जाती है"],
        "answer_en": "Becomes half",
        "answer_hi": "आधी हो जाती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "A convex lens of focal length 20cm is cut into two equal halves. The focal length of each half is:",
        "question_hi": "20cm फोकस दूरी के उत्तल लेंस को दो बराबर हिस्सों में काटा जाता है। प्रत्येक भाग की फोकस दूरी है:",
        "options_en": ["10cm", "20cm", "40cm", "5cm"],
        "options_hi": ["10cm", "20cm", "40cm", "5cm"],
        "answer_en": "20cm",
        "answer_hi": "20cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The phenomenon of total internal reflection occurs when:",
        "question_hi": "पूर्ण आंतरिक परावर्तन की घटना तब होती है जब:",
        "options_en": ["Light travels from rarer to denser medium", "Light travels from denser to rarer medium", "Angle of incidence is less than critical angle", "Angle of incidence is greater than critical angle"],
        "options_hi": ["प्रकाश विरल से सघन माध्यम में यात्रा करता है", "प्रकाश सघन से विरल माध्यम में यात्रा करता है", "आपतन कोण क्रांतिक कोण से कम है", "आपतन कोण क्रांतिक कोण से अधिक है"],
        "answer_en": "Angle of incidence is greater than critical angle",
        "answer_hi": "आपतन कोण क्रांतिक कोण से अधिक है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The resolving power of a telescope increases with:",
        "question_hi": "दूरबीन की विभेदन क्षमता बढ़ती है:",
        "options_en": ["Decrease in wavelength of light", "Increase in wavelength of light", "Decrease in diameter of objective", "Increase in focal length of eyepiece"],
        "options_hi": ["प्रकाश की तरंगदैर्ध्य में कमी", "प्रकाश की तरंगदैर्ध्य में वृद्धि", "अभिदृश्यक के व्यास में कमी", "नेत्रिका की फोकस दूरी में वृद्धि"],
        "answer_en": "Decrease in wavelength of light",
        "answer_hi": "प्रकाश की तरंगदैर्ध्य में कमी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "In a diffraction pattern, the width of central maximum is:",
        "question_hi": "विवर्तन पैटर्न में, केंद्रीय उच्चिष्ट की चौड़ाई है:",
        "options_en": ["Directly proportional to wavelength", "Inversely proportional to wavelength", "Independent of wavelength", "Proportional to square of wavelength"],
        "options_hi": ["तरंगदैर्ध्य के समानुपाती", "तरंगदैर्ध्य के व्युत्क्रमानुपाती", "तरंगदैर्ध्य से स्वतंत्र", "तरंगदैर्ध्य के वर्ग के समानुपाती"],
        "answer_en": "Directly proportional to wavelength",
        "answer_hi": "तरंगदैर्ध्य के समानुपाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The polarization of light shows that light waves are:",
        "question_hi": "प्रकाश का ध्रुवण दर्शाता है कि प्रकाश तरंगें हैं:",
        "options_en": ["Longitudinal", "Transverse", "Both longitudinal and transverse", "Neither longitudinal nor transverse"],
        "options_hi": ["अनुदैर्ध्य", "अनुप्रस्थ", "अनुदैर्ध्य और अनुप्रस्थ दोनों", "न तो अनुदैर्ध्य और न ही अनुप्रस्थ"],
        "answer_en": "Transverse",
        "answer_hi": "अनुप्रस्थ",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Inorganic Chemistry (11-20)
    {
        "num": 11,
        "question_en": "Which of the following is not a transition element?",
        "question_hi": "निम्नलिखित में से कौन सा संक्रमण तत्व नहीं है?",
        "options_en": ["Copper", "Zinc", "Iron", "Silver"],
        "options_hi": ["कॉपर", "जिंक", "आयरन", "सिल्वर"],
        "answer_en": "Zinc",
        "answer_hi": "जिंक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The lanthanide contraction is due to:",
        "question_hi": "लैन्थेनाइड संकुचन के कारण है:",
        "options_en": ["Poor shielding of 4f electrons", "Poor shielding of 5d electrons", "Good shielding of 4f electrons", "Good shielding of 5d electrons"],
        "options_hi": ["4f इलेक्ट्रॉनों का खराब परिरक्षण", "5d इलेक्ट्रॉनों का खराब परिरक्षण", "4f इलेक्ट्रॉनों का अच्छा परिरक्षण", "5d इलेक्ट्रॉनों का अच्छा परिरक्षण"],
        "answer_en": "Poor shielding of 4f electrons",
        "answer_hi": "4f इलेक्ट्रॉनों का खराब परिरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which of the following is an interstitial compound?",
        "question_hi": "निम्नलिखित में से कौन सा अंतराकाशी यौगिक है?",
        "options_en": ["NaCl", "Fe₃C", "CaC₂", "Mg₂C₃"],
        "options_hi": ["NaCl", "Fe₃C", "CaC₂", "Mg₂C₃"],
        "answer_en": "Fe₃C",
        "answer_hi": "Fe₃C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The compound used in photography is:",
        "question_hi": "फोटोग्राफी में प्रयुक्त यौगिक है:",
        "options_en": ["AgCl", "AgBr", "AgI", "AgF"],
        "options_hi": ["AgCl", "AgBr", "AgI", "AgF"],
        "answer_en": "AgBr",
        "answer_hi": "AgBr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which of the following is not an ore of aluminum?",
        "question_hi": "निम्नलिखित में से कौन सा एल्युमिनियम का अयस्क नहीं है?",
        "options_en": ["Bauxite", "Cryolite", "Kyanite", "Galena"],
        "options_hi": ["बॉक्साइट", "क्रायोलाइट", "कायनाइट", "गैलेना"],
        "answer_en": "Galena",
        "answer_hi": "गैलेना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The coordination number in body centered cubic structure is:",
        "question_hi": "अंत:केंद्रित घनीय संरचना में उपसहसंयोजन संख्या है:",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which of the following is a basic oxide?",
        "question_hi": "निम्नलिखित में से कौन सा क्षारीय ऑक्साइड है?",
        "options_en": ["CO₂", "SO₂", "CaO", "P₂O₅"],
        "options_hi": ["CO₂", "SO₂", "CaO", "P₂O₅"],
        "answer_en": "CaO",
        "answer_hi": "CaO",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The compound that does not exist is:",
        "question_hi": "वह यौगिक जो अस्तित्व में नहीं है:",
        "options_en": ["PbCl₄", "PbI₄", "SnCl₄", "SnI₄"],
        "options_hi": ["PbCl₄", "PbI₄", "SnCl₄", "SnI₄"],
        "answer_en": "PbI₄",
        "answer_hi": "PbI₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The most abundant metal in earth's crust is:",
        "question_hi": "पृथ्वी की पपड़ी में सबसे प्रचुर धातु है:",
        "options_en": ["Iron", "Aluminum", "Calcium", "Sodium"],
        "options_hi": ["लोहा", "एल्युमिनियम", "कैल्शियम", "सोडियम"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The oxidation state of iron in Fe₃O₄ is:",
        "question_hi": "Fe₃O₄ में आयरन की ऑक्सीकरण अवस्था है:",
        "options_en": ["+2 only", "+3 only", "+2 and +3", "+4"],
        "options_hi": ["केवल +2", "केवल +3", "+2 और +3", "+4"],
        "answer_en": "+2 and +3",
        "answer_hi": "+2 और +3",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Coordinate Geometry (21-30)
    {
        "num": 21,
        "question_en": "The distance between points (2,3) and (5,7) is:",
        "question_hi": "बिंदुओं (2,3) और (5,7) के बीच की दूरी है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The slope of line perpendicular to 3x + 4y = 7 is:",
        "question_hi": "3x + 4y = 7 के लंबवत रेखा की ढलान है:",
        "options_en": ["-3/4", "3/4", "4/3", "-4/3"],
        "options_hi": ["-3/4", "3/4", "4/3", "-4/3"],
        "answer_en": "4/3",
        "answer_hi": "4/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The center of circle x² + y² - 4x + 6y - 3 = 0 is:",
        "question_hi": "वृत्त x² + y² - 4x + 6y - 3 = 0 का केंद्र है:",
        "options_en": ["(2,-3)", "(-2,3)", "(2,3)", "(-2,-3)"],
        "options_hi": ["(2,-3)", "(-2,3)", "(2,3)", "(-2,-3)"],
        "answer_en": "(2,-3)",
        "answer_hi": "(2,-3)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The eccentricity of ellipse x²/16 + y²/9 = 1 is:",
        "question_hi": "दीर्घवृत्त x²/16 + y²/9 = 1 की उत्केंद्रता है:",
        "options_en": ["√7/4", "√5/4", "√3/4", "1/4"],
        "options_hi": ["√7/4", "√5/4", "√3/4", "1/4"],
        "answer_en": "√7/4",
        "answer_hi": "√7/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The distance between parallel lines 3x + 4y = 8 and 3x + 4y = 15 is:",
        "question_hi": "समानांतर रेखाओं 3x + 4y = 8 और 3x + 4y = 15 के बीच की दूरी है:",
        "options_en": ["7/5", "5/7", "7/25", "25/7"],
        "options_hi": ["7/5", "5/7", "7/25", "25/7"],
        "answer_en": "7/5",
        "answer_hi": "7/5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The vertex of parabola y² = 4ax is:",
        "question_hi": "परवलय y² = 4ax का शीर्ष है:",
        "options_en": ["(0,0)", "(a,0)", "(0,a)", "(a,a)"],
        "options_hi": ["(0,0)", "(a,0)", "(0,a)", "(a,a)"],
        "answer_en": "(0,0)",
        "answer_hi": "(0,0)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The angle between lines with slopes m₁ and m₂ is given by:",
        "question_hi": "ढलान m₁ और m₂ वाली रेखाओं के बीच का कोण दिया जाता है:",
        "options_en": ["tanθ = |(m₁ - m₂)/(1 + m₁m₂)|", "tanθ = |(m₁ + m₂)/(1 - m₁m₂)|", "tanθ = |(m₁ - m₂)/(1 - m₁m₂)|", "tanθ = |(m₁ + m₂)/(1 + m₁m₂)|"],
        "options_hi": ["tanθ = |(m₁ - m₂)/(1 + m₁m₂)|", "tanθ = |(m₁ + m₂)/(1 - m₁m₂)|", "tanθ = |(m₁ - m₂)/(1 - m₁m₂)|", "tanθ = |(m₁ + m₂)/(1 + m₁m₂)|"],
        "answer_en": "tanθ = |(m₁ - m₂)/(1 + m₁m₂)|",
        "answer_hi": "tanθ = |(m₁ - m₂)/(1 + m₁m₂)|",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The equation of x-axis is:",
        "question_hi": "x-अक्ष का समीकरण है:",
        "options_en": ["x = 0", "y = 0", "x = y", "x + y = 0"],
        "options_hi": ["x = 0", "y = 0", "x = y", "x + y = 0"],
        "answer_en": "y = 0",
        "answer_hi": "y = 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The distance of point (3,4) from origin is:",
        "question_hi": "मूल बिंदु से बिंदु (3,4) की दूरी है:",
        "options_en": ["3", "4", "5", "7"],
        "options_hi": ["3", "4", "5", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The area of triangle with vertices (0,0), (4,0), (0,3) is:",
        "question_hi": "शीर्षों (0,0), (4,0), (0,3) वाले त्रिभुज का क्षेत्रफल है:",
        "options_en": ["6", "12", "24", "36"],
        "options_hi": ["6", "12", "24", "36"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },

    // Biology - Ecology & Environment (31-40)
    {
        "num": 31,
        "question_en": "The ultimate source of energy for all ecosystems is:",
        "question_hi": "सभी पारिस्थितिकी तंत्रों के लिए ऊर्जा का अंतिम स्रोत है:",
        "options_en": ["Sun", "Water", "Soil", "Air"],
        "options_hi": ["सूर्य", "जल", "मिट्टी", "वायु"],
        "answer_en": "Sun",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The process of nitrogen fixation is carried out by:",
        "question_hi": "नाइट्रोजन स्थिरीकरण की प्रक्रिया संपन्न की जाती है:",
        "options_en": ["Bacteria", "Fungi", "Viruses", "Algae"],
        "options_hi": ["जीवाणु", "कवक", "वायरस", "शैवाल"],
        "answer_en": "Bacteria",
        "answer_hi": "जीवाणु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The greenhouse gas with the highest global warming potential is:",
        "question_hi": "उच्चतम ग्लोबल वार्मिंग क्षमता वाली ग्रीनहाउस गैस है:",
        "options_en": ["CO₂", "CH₄", "N₂O", "CFC"],
        "options_hi": ["CO₂", "CH₄", "N₂O", "CFC"],
        "answer_en": "CFC",
        "answer_hi": "CFC",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The first organisms to colonize a barren rock are:",
        "question_hi": "बंजर चट्टान पर बसने वाले पहले जीव हैं:",
        "options_en": ["Lichens", "Mosses", "Ferns", "Grasses"],
        "options_hi": ["लाइकेन", "मॉस", "फर्न", "घास"],
        "answer_en": "Lichens",
        "answer_hi": "लाइकेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The phenomenon where one organism is benefited and the other is unaffected is called:",
        "question_hi": "वह घटना जहां एक जीव को लाभ होता है और दूसरा अप्रभावित रहता है, कहलाती है:",
        "options_en": ["Mutualism", "Commensalism", "Parasitism", "Competition"],
        "options_hi": ["सहजीवन", "सहभोजिता", "परजीविता", "प्रतिस्पर्धा"],
        "answer_en": "Commensalism",
        "answer_hi": "सहभोजिता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The ozone layer is present in:",
        "question_hi": "ओजोन परत मौजूद है:",
        "options_en": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
        "options_hi": ["क्षोभमंडल", "समताप मंडल", "मध्यमंडल", "तापमंडल"],
        "answer_en": "Stratosphere",
        "answer_hi": "समताप मंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The most abundant gas in atmosphere is:",
        "question_hi": "वायुमंडल में सबसे प्रचुर गैस है:",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The process of water cycle is driven by:",
        "question_hi": "जल चक्र की प्रक्रिया संचालित होती है:",
        "options_en": ["Solar energy", "Wind energy", "Geothermal energy", "Tidal energy"],
        "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "भूतापीय ऊर्जा", "ज्वारीय ऊर्जा"],
        "answer_en": "Solar energy",
        "answer_hi": "सौर ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The pyramid of energy is always:",
        "question_hi": "ऊर्जा का पिरामिड हमेशा होता है:",
        "options_en": ["Upright", "Inverted", "Spindle shaped", "Variable"],
        "options_hi": ["सीधा", "उल्टा", "धुरी के आकार का", "परिवर्तनशील"],
        "answer_en": "Upright",
        "answer_hi": "सीधा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The main cause of acid rain is:",
        "question_hi": "अम्ल वर्षा का मुख्य कारण है:",
        "options_en": ["CO₂", "SO₂ and NO₂", "CH₄", "O₃"],
        "options_hi": ["CO₂", "SO₂ और NO₂", "CH₄", "O₃"],
        "answer_en": "SO₂ and NO₂",
        "answer_hi": "SO₂ और NO₂",
        "attempted": false,
        "selected": ""
    },

    // English - Comprehension & Literature (41-50)
    {
        "num": 41,
        "question_en": "Who wrote 'Pride and Prejudice'?",
        "question_hi": "'Pride and Prejudice' किसने लिखी?",
        "options_en": ["Jane Austen", "Charlotte Bronte", "Emily Bronte", "Charles Dickens"],
        "options_hi": ["जेन ऑस्टेन", "शार्लोट ब्रोंटे", "एमिली ब्रोंटे", "चार्ल्स डिकेंस"],
        "answer_en": "Jane Austen",
        "answer_hi": "जेन ऑस्टेन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The figure of speech in 'The stars danced playfully in the moonlit sky' is:",
        "question_hi": "'The stars danced playfully in the moonlit sky' में अलंकार है:",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Choose the correct meaning of 'Benevolent':",
        "question_hi": "'Benevolent' का सही अर्थ चुनें:",
        "options_en": ["Cruel", "Kind", "Selfish", "Greedy"],
        "options_hi": ["क्रूर", "दयालु", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The antonym of 'Ancient' is:",
        "question_hi": "'Ancient' का विलोम है:",
        "options_en": ["Old", "Modern", "Historic", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Who is known as the 'Bard of Avon'?",
        "question_hi": "'बार्ड ऑफ एवन' के रूप में किसे जाना जाता है?",
        "options_en": ["William Wordsworth", "William Shakespeare", "John Milton", "Geoffrey Chaucer"],
        "options_hi": ["विलियम वर्ड्सवर्थ", "विलियम शेक्सपियर", "जॉन मिल्टन", "जेफ्री चॉसर"],
        "answer_en": "William Shakespeare",
        "answer_hi": "विलियम शेक्सपियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The poetic device used in 'The pen is mightier than the sword' is:",
        "question_hi": "'The pen is mightier than the sword' में प्रयुक्त काव्यात्मक उपकरण है:",
        "options_en": ["Simile", "Metaphor", "Alliteration", "Irony"],
        "options_hi": ["उपमा", "रूपक", "अनुप्रास", "विडंबना"],
        "answer_en": "Metaphor",
        "answer_hi": "रूपक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
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
        "num": 48,
        "question_en": "The novel '1984' was written by:",
        "question_hi": "उपन्यास '1984' लिखा गया था:",
        "options_en": ["George Orwell", "Aldous Huxley", "H.G. Wells", "Jules Verne"],
        "options_hi": ["जॉर्ज ऑरवेल", "एल्डस हक्सले", "एच.जी. वेल्स", "जूल्स वर्न"],
        "answer_en": "George Orwell",
        "answer_hi": "जॉर्ज ऑरवेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The figure of speech in 'She sells seashells by the seashore' is:",
        "question_hi": "'She sells seashells by the seashore' में अलंकार है:",
        "options_en": ["Simile", "Metaphor", "Alliteration", "Personification"],
        "options_hi": ["उपमा", "रूपक", "अनुप्रास", "मानवीकरण"],
        "answer_en": "Alliteration",
        "answer_hi": "अनुप्रास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who wrote 'To Kill a Mockingbird'?",
        "question_hi": "'To Kill a Mockingbird' किसने लिखी?",
        "options_en": ["Harper Lee", "Mark Twain", "John Steinbeck", "F. Scott Fitzgerald"],
        "options_hi": ["हार्पर ली", "मार्क ट्वेन", "जॉन स्टीनबेक", "एफ. स्कॉट फिट्जराल्ड"],
        "answer_en": "Harper Lee",
        "answer_hi": "हार्पर ली",
        "attempted": false,
        "selected": ""
    },

    // Hindi - काव्य और गद्य (51-60)
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
        "num": 56,
        "question_en": "भारतेंदु हरिश्चंद्र किस युग के कवि हैं?",
        "question_hi": "भारतेंदु हरिश्चंद्र किस युग के कवि हैं?",
        "options_en": ["भक्ति युग", "रीति युग", "आधुनिक युग", "आदि युग"],
        "options_hi": ["भक्ति युग", "रीति युग", "आधुनिक युग", "आदि युग"],
        "answer_en": "आधुनिक युग",
        "answer_hi": "आधुनिक युग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'गुनाहों का देवता' के रचयिता हैं:",
        "question_hi": "'गुनाहों का देवता' के रचयिता हैं:",
        "options_en": ["धर्मवीर भारती", "अमृतलाल नागर", "यशपाल", "जैनेन्द्र कुमार"],
        "options_hi": ["धर्मवीर भारती", "अमृतलाल नागर", "यशपाल", "जैनेन्द्र कुमार"],
        "answer_en": "धर्मवीर भारती",
        "answer_hi": "धर्मवीर भारती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "मीराबाई किस भाषा में काव्य रचना करती थीं?",
        "question_hi": "मीराबाई किस भाषा में काव्य रचना करती थीं?",
        "options_en": ["ब्रजभाषा", "अवधी", "मैथिली", "राजस्थानी"],
        "options_hi": ["ब्रजभाषा", "अवधी", "मैथिली", "राजस्थानी"],
        "answer_en": "ब्रजभाषा",
        "answer_hi": "ब्रजभाषा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
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
        "num": 60,
        "question_en": "कबीरदास की भाषा है:",
        "question_hi": "कबीरदास की भाषा है:",
        "options_en": ["सधुक्कड़ी", "ब्रजभाषा", "अवधी", "मैथिली"],
        "options_hi": ["सधुक्कड़ी", "ब्रजभाषा", "अवधी", "मैथिली"],
        "answer_en": "सधुक्कड़ी",
        "answer_hi": "सधुक्कड़ी",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - India & World (61-70)
    {
        "num": 61,
        "question_en": "The first woman Prime Minister of India was:",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री थीं:",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Vijaya Lakshmi Pandit", "Annie Besant"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "विजयलक्ष्मी पंडित", "एनी बेसेंट"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The longest river in the world is:",
        "question_hi": "विश्व की सबसे लंबी नदी है:",
        "options_en": ["Nile", "Amazon", "Yangtze", "Mississippi"],
        "options_hi": ["नील", "अमेज़न", "यांग्त्ज़ी", "मिसिसिपी"],
        "answer_en": "Nile",
        "answer_hi": "नील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The first President of India was:",
        "question_hi": "भारत के प्रथम राष्ट्रपति थे:",
        "options_en": ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "V.V. Giri"],
        "options_hi": ["राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "वी.वी. गिरि"],
        "answer_en": "Rajendra Prasad",
        "answer_hi": "राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The largest desert in the world is:",
        "question_hi": "विश्व का सबसे बड़ा रेगिस्तान है:",
        "options_en": ["Sahara", "Gobi", "Arabian", "Kalahari"],
        "options_hi": ["सहारा", "गोबी", "अरबी", "कालाहारी"],
        "answer_en": "Sahara",
        "answer_hi": "सहारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "question_en": "The largest planet in our solar system is:",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह है:",
        "options_en": ["Earth", "Jupiter", "Saturn", "Neptune"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The first woman to win Nobel Prize was:",
        "question_hi": "नोबेल पुरस्कार जीतने वाली पहली महिला थीं:",
        "options_en": ["Marie Curie", "Mother Teresa", "Pearl S. Buck", "Bertha von Suttner"],
        "options_hi": ["मैरी क्यूरी", "मदर टेरेसा", "पर्ल एस. बक", "बर्था वॉन सटनर"],
        "answer_en": "Marie Curie",
        "answer_hi": "मैरी क्यूरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
        "question_en": "The largest ocean in the world is:",
        "question_hi": "विश्व का सबसे बड़ा महासागर है:",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-100)
    {
        "num": 71,
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
        "question_en": "The process of conversion of sugar to alcohol is called:",
        "question_hi": "चीनी के अल्कोहल में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Fermentation", "Distillation", "Evaporation", "Sublimation"],
        "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "उर्ध्वपातन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "The formula for area of rectangle is:",
        "question_hi": "आयत के क्षेत्रफल का सूत्र है:",
        "options_en": ["length × breadth", "2(length + breadth)", "length²", "breadth²"],
        "options_hi": ["लंबाई × चौड़ाई", "2(लंबाई + चौड़ाई)", "लंबाई²", "चौड़ाई²"],
        "answer_en": "length × breadth",
        "answer_hi": "लंबाई × चौड़ाई",
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
        "question_en": "The chemical formula of common salt is:",
        "question_hi": "साधारण नमक का रासायनिक सूत्र है:",
        "options_en": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "options_hi": ["NaCl", "KCl", "CaCO₃", "NaOH"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
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
        "question_en": "The process of conversion of vapor to liquid is called:",
        "question_hi": "वाष्प के द्रव में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
        "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "जमना"],
        "answer_en": "Condensation",
        "answer_hi": "संघनन",
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
        "num": 89,
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
        "num": 90,
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
        "num": 93,
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
        "num": 94,
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
        "question_en": "The metal used in making electric bulbs is:",
        "question_hi": "विद्युत बल्ब बनाने में प्रयुक्त धातु है:",
        "options_en": ["Copper", "Aluminum", "Tungsten", "Silver"],
        "options_hi": ["तांबा", "एल्युमिनियम", "टंगस्टन", "चांदी"],
        "answer_en": "Tungsten",
        "answer_hi": "टंगस्टन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
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
        "num": 99,
        "question_en": "The value of tan90° is:",
        "question_hi": "tan90° का मान है:",
        "options_en": ["0", "1", "∞", "1/√3"],
        "options_hi": ["0", "1", "∞", "1/√3"],
        "answer_en": "∞",
        "answer_hi": "∞",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The vitamin that prevents rickets is:",
        "question_hi": "वह विटामिन जो रिकेट्स को रोकता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
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