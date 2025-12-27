const questions = [
    // Physics - Class 12 Level (1-20)
    {
        "num": 1,
        "question_en": "A particle is projected with velocity u at angle θ with horizontal. What is the maximum height reached?",
        "question_hi": "एक कण को क्षैतिज से θ कोण पर वेग u से प्रक्षेपित किया जाता है। अधिकतम ऊंचाई क्या है?",
        "options_en": ["u²sin²θ/2g", "u²cos²θ/2g", "u²sin2θ/g", "u²cos2θ/g"],
        "options_hi": ["u²sin²θ/2g", "u²cos²θ/2g", "u²sin2θ/g", "u²cos2θ/g"],
        "answer_en": "u²sin²θ/2g",
        "answer_hi": "u²sin²θ/2g",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The dimensional formula of Planck's constant is:",
        "question_hi": "प्लैंक नियतांक का विमीय सूत्र है:",
        "options_en": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "options_hi": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "answer_en": "ML²T⁻¹",
        "answer_hi": "ML²T⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A body of mass 2kg is moving with velocity 3m/s. Its kinetic energy is:",
        "question_hi": "2kg द्रव्यमान का एक पिंड 3m/s वेग से गतिमान है। इसकी गतिज ऊर्जा है:",
        "options_en": ["6J", "9J", "12J", "18J"],
        "options_hi": ["6J", "9J", "12J", "18J"],
        "answer_en": "9J",
        "answer_hi": "9J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The SI unit of electric potential is:",
        "question_hi": "विद्युत विभव की SI इकाई है:",
        "options_en": ["Joule", "Volt", "Ohm", "Ampere"],
        "options_hi": ["जूल", "वोल्ट", "ओम", "एम्पियर"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "According to Newton's second law of motion:",
        "question_hi": "न्यूटन की गति के द्वितीय नियम के अनुसार:",
        "options_en": ["F = ma", "F = mv", "F = m/a", "F = m²a"],
        "options_hi": ["F = ma", "F = mv", "F = m/a", "F = m²a"],
        "answer_en": "F = ma",
        "answer_hi": "F = ma",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The refractive index of water is 1.33. What is the speed of light in water?",
        "question_hi": "जल का अपवर्तनांक 1.33 है। जल में प्रकाश की चाल क्या है?",
        "options_en": ["2.25 × 10⁸ m/s", "2.5 × 10⁸ m/s", "3 × 10⁸ m/s", "1.33 × 10⁸ m/s"],
        "options_hi": ["2.25 × 10⁸ m/s", "2.5 × 10⁸ m/s", "3 × 10⁸ m/s", "1.33 × 10⁸ m/s"],
        "answer_en": "2.25 × 10⁸ m/s",
        "answer_hi": "2.25 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The law of conservation of energy states that:",
        "question_hi": "ऊर्जा संरक्षण का नियम कहता है कि:",
        "options_en": ["Energy can be created", "Energy can be destroyed", "Energy cannot be created or destroyed", "Energy decreases with time"],
        "options_hi": ["ऊर्जा उत्पन्न की जा सकती है", "ऊर्जा नष्ट की जा सकती है", "ऊर्जा न तो उत्पन्न की जा सकती है न नष्ट", "ऊर्जा समय के साथ घटती है"],
        "answer_en": "Energy cannot be created or destroyed",
        "answer_hi": "ऊर्जा न तो उत्पन्न की जा सकती है न नष्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "A convex mirror always forms:",
        "question_hi": "उत्तल दर्पण सदैव बनाता है:",
        "options_en": ["Real and inverted image", "Virtual and erect image", "Real and erect image", "Virtual and inverted image"],
        "options_hi": ["वास्तविक और उल्टा प्रतिबिंब", "आभासी और सीधा प्रतिबिंब", "वास्तविक और सीधा प्रतिबिंब", "आभासी और उल्टा प्रतिबिंब"],
        "answer_en": "Virtual and erect image",
        "answer_hi": "आभासी और सीधा प्रतिबिंब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The unit of frequency is:",
        "question_hi": "आवृत्ति की इकाई है:",
        "options_en": ["Hertz", "Watt", "Newton", "Pascal"],
        "options_hi": ["हर्ट्ज", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Ohm's law states that:",
        "question_hi": "ओम का नियम कहता है कि:",
        "options_en": ["V = I/R", "V = IR", "I = V/R", "Both B and C"],
        "options_hi": ["V = I/R", "V = IR", "I = V/R", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Class 12 Level (11-30)
    {
        "num": 11,
        "question_en": "The atomic number of carbon is:",
        "question_hi": "कार्बन का परमाणु क्रमांक है:",
        "options_en": ["6", "12", "14", "16"],
        "options_hi": ["6", "12", "14", "16"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन एक उत्कृष्ट गैस है?",
        "options_en": ["Oxygen", "Nitrogen", "Argon", "Chlorine"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "क्लोरीन"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The pH of pure water at 25°C is:",
        "question_hi": "25°C पर शुद्ध जल का pH है:",
        "options_en": ["0", "7", "14", "10"],
        "options_hi": ["0", "7", "14", "10"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
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
        "num": 15,
        "question_en": "Which element has the electronic configuration 2,8,7?",
        "question_hi": "किस तत्व का इलेक्ट्रॉनिक विन्यास 2,8,7 है?",
        "options_en": ["Fluorine", "Chlorine", "Bromine", "Iodine"],
        "options_hi": ["फ्लोरीन", "क्लोरीन", "ब्रोमीन", "आयोडीन"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The process of conversion of solid to gas directly is called:",
        "question_hi": "ठोस का सीधे गैस में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Sublimation", "Evaporation", "Condensation", "Fusion"],
        "options_hi": ["उर्ध्वपातन", "वाष्पीकरण", "संघनन", "संलयन"],
        "answer_en": "Sublimation",
        "answer_hi": "उर्ध्वपातन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Rusting of iron is an example of:",
        "question_hi": "लोहे में जंग लगना एक उदाहरण है:",
        "options_en": ["Oxidation", "Reduction", "Neutralization", "Combination"],
        "options_hi": ["ऑक्सीकरण", "अपचयन", "उदासीनीकरण", "संयोजन"],
        "answer_en": "Oxidation",
        "answer_hi": "ऑक्सीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The molecular formula of glucose is:",
        "question_hi": "ग्लूकोज का आणविक सूत्र है:",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
        "answer_en": "C₆H₁₂O₆",
        "answer_hi": "C₆H₁₂O₆",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which gas is used in photosynthesis?",
        "question_hi": "प्रकाश संश्लेषण में कौन सी गैस प्रयुक्त होती है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The chemical name of baking soda is:",
        "question_hi": "बेकिंग सोडा का रासायनिक नाम है:",
        "options_en": ["Sodium bicarbonate", "Sodium carbonate", "Calcium carbonate", "Sodium chloride"],
        "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "सोडियम क्लोराइड"],
        "answer_en": "Sodium bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Class 10 Level (21-40)
    {
        "num": 21,
        "question_en": "The value of π is approximately:",
        "question_hi": "π का मान लगभग है:",
        "options_en": ["3.14", "2.71", "1.41", "1.73"],
        "options_hi": ["3.14", "2.71", "1.41", "1.73"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The area of a circle with radius r is:",
        "question_hi": "त्रिज्या r वाले वृत्त का क्षेत्रफल है:",
        "options_en": ["πr²", "2πr", "πr", "2πr²"],
        "options_hi": ["πr²", "2πr", "πr", "2πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is the value of 2 + 2 × 2?",
        "question_hi": "2 + 2 × 2 का मान क्या है?",
        "options_en": ["6", "8", "4", "2"],
        "options_hi": ["6", "8", "4", "2"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The sum of angles in a triangle is:",
        "question_hi": "त्रिभुज में कोणों का योग है:",
        "options_en": ["90°", "180°", "270°", "360°"],
        "options_hi": ["90°", "180°", "270°", "360°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "If x + 5 = 12, what is the value of x?",
        "question_hi": "यदि x + 5 = 12, तो x का मान क्या है?",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The square root of 144 is:",
        "question_hi": "144 का वर्गमूल है:",
        "options_en": ["11", "12", "13", "14"],
        "options_hi": ["11", "12", "13", "14"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is 25% of 200?",
        "question_hi": "200 का 25% क्या है?",
        "options_en": ["25", "50", "75", "100"],
        "options_hi": ["25", "50", "75", "100"],
        "answer_en": "50",
        "answer_hi": "50",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The perimeter of a square with side 5cm is:",
        "question_hi": "5cm भुजा वाले वर्ग का परिमाप है:",
        "options_en": ["10cm", "15cm", "20cm", "25cm"],
        "options_hi": ["10cm", "15cm", "20cm", "25cm"],
        "answer_en": "20cm",
        "answer_hi": "20cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "2³ is equal to:",
        "question_hi": "2³ बराबर है:",
        "options_en": ["4", "6", "8", "10"],
        "options_hi": ["4", "6", "8", "10"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The value of sin 90° is:",
        "question_hi": "sin 90° का मान है:",
        "options_en": ["0", "0.5", "1", "√3/2"],
        "options_hi": ["0", "0.5", "1", "√3/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },

    // Biology - Class 10 Level (31-50)
    {
        "num": 31,
        "question_en": "The basic unit of life is:",
        "question_hi": "जीवन की मूल इकाई है:",
        "options_en": ["Cell", "Tissue", "Organ", "Organism"],
        "options_hi": ["कोशिका", "ऊतक", "अंग", "जीव"],
        "answer_en": "Cell",
        "answer_hi": "कोशिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Photosynthesis occurs in:",
        "question_hi": "प्रकाश संश्लेषण होता है:",
        "options_en": ["Roots", "Stems", "Leaves", "Flowers"],
        "options_hi": ["जड़ों में", "तनों में", "पत्तियों में", "फूलों में"],
        "answer_en": "Leaves",
        "answer_hi": "पत्तियों में",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The largest gland in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
        "options_en": ["Pancreas", "Liver", "Kidney", "Lung"],
        "options_hi": ["अग्न्याशय", "यकृत", "गुर्दा", "फेफड़ा"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which blood group is universal donor?",
        "question_hi": "कौन सा रक्त समूह सार्वत्रिक दाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The process of cell division is called:",
        "question_hi": "कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Mitosis", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "सूत्री विभाजन", "पाचन"],
        "answer_en": "Mitosis",
        "answer_hi": "सूत्री विभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Plants release which gas during photosynthesis?",
        "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस छोड़ते हैं?",
        "options_en": ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
        "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The brain is protected by:",
        "question_hi": "मस्तिष्क सुरक्षित रहता है:",
        "options_en": ["Skull", "Rib cage", "Spine", "Pelvis"],
        "options_hi": ["खोपड़ी", "पसली पिंजर", "रीढ़", "श्रोणि"],
        "answer_en": "Skull",
        "answer_hi": "खोपड़ी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Which organ pumps blood in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
        "options_en": ["Lungs", "Heart", "Liver", "Kidney"],
        "options_hi": ["फेफड़े", "हृदय", "यकृत", "गुर्दा"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "DNA is found in:",
        "question_hi": "DNA पाया जाता है:",
        "options_en": ["Nucleus", "Cytoplasm", "Cell membrane", "Mitochondria"],
        "options_hi": ["केंद्रक", "कोशिका द्रव्य", "कोशिका झिल्ली", "माइटोकॉन्ड्रिया"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The process of making food by plants is called:",
        "question_hi": "पौधों द्वारा भोजन बनाने की प्रक्रिया कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "पाचन", "वाष्पोत्सर्जन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },

    // English Grammar (41-60)
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
        "question_en": "Which word is a noun?",
        "question_hi": "कौन सा शब्द संज्ञा है?",
        "options_en": ["Run", "Beautiful", "School", "Quickly"],
        "options_hi": ["Run", "Beautiful", "School", "Quickly"],
        "answer_en": "School",
        "answer_hi": "School",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The plural of 'child' is:",
        "question_hi": "'child' का बहुवचन है:",
        "options_en": ["Childs", "Children", "Childes", "Childern"],
        "options_hi": ["Childs", "Children", "Childes", "Childern"],
        "answer_en": "Children",
        "answer_hi": "Children",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Choose the correct verb form: I ___ to the market yesterday.",
        "question_hi": "सही क्रिया रूप चुनें: I ___ to the market yesterday.",
        "options_en": ["go", "went", "gone", "going"],
        "options_hi": ["go", "went", "gone", "going"],
        "answer_en": "went",
        "answer_hi": "went",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which sentence is in present continuous tense?",
        "question_hi": "कौन सा वाक्य वर्तमान continuous काल में है?",
        "options_en": ["I eat food", "I ate food", "I am eating food", "I have eaten food"],
        "options_hi": ["I eat food", "I ate food", "I am eating food", "I have eaten food"],
        "answer_en": "I am eating food",
        "answer_hi": "I am eating food",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The opposite of 'hot' is:",
        "question_hi": "'hot' का विलोम है:",
        "options_en": ["Cold", "Warm", "Cool", "Freezing"],
        "options_hi": ["Cold", "Warm", "Cool", "Freezing"],
        "answer_en": "Cold",
        "answer_hi": "Cold",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the correct article: ___ apple a day keeps the doctor away.",
        "question_hi": "सही article चुनें: ___ apple a day keeps the doctor away.",
        "options_en": ["A", "An", "The", "No article"],
        "options_hi": ["A", "An", "The", "No article"],
        "answer_en": "An",
        "answer_hi": "An",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
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
        "num": 49,
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
        "num": 50,
        "question_en": "Choose the correct preposition: The book is ___ the table.",
        "question_hi": "सही preposition चुनें: The book is ___ the table.",
        "options_en": ["in", "on", "at", "under"],
        "options_hi": ["in", "on", "at", "under"],
        "answer_en": "on",
        "answer_hi": "on",
        "attempted": false,
        "selected": ""
    },

    // Hindi Grammar (51-70)
    {
        "num": 51,
        "question_en": "'विद्यालय' का पर्यायवाची शब्द है:",
        "question_hi": "'विद्यालय' का पर्यायवाची शब्द है:",
        "options_en": ["घर", "स्कूल", "मंदिर", "बगीचा"],
        "options_hi": ["घर", "स्कूल", "मंदिर", "बगीचा"],
        "answer_en": "स्कूल",
        "answer_hi": "स्कूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'सूरज' का विलोम शब्द है:",
        "question_hi": "'सूरज' का विलोम शब्द है:",
        "options_en": ["चाँद", "तारा", "रात", "धूप"],
        "options_hi": ["चाँद", "तारा", "रात", "धूप"],
        "answer_en": "चाँद",
        "answer_hi": "चाँद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "कौन सा शब्द संज्ञा है?",
        "question_hi": "कौन सा शब्द संज्ञा है?",
        "options_en": ["पढ़ना", "सुंदर", "लड़का", "तेज"],
        "options_hi": ["पढ़ना", "सुंदर", "लड़का", "तेज"],
        "answer_en": "लड़का",
        "answer_hi": "लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "'राम पुस्तक पढ़ता है' - इसमें क्रिया है:",
        "question_hi": "'राम पुस्तक पढ़ता है' - इसमें क्रिया है:",
        "options_en": ["राम", "पुस्तक", "पढ़ता", "है"],
        "options_hi": ["राम", "पुस्तक", "पढ़ता", "है"],
        "answer_en": "पढ़ता",
        "answer_hi": "पढ़ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "कौन सा वाक्य शुद्ध है?",
        "question_hi": "कौन सा वाक्य शुद्ध है?",
        "options_en": ["मैं स्कूल जाता हूँ", "मैं स्कूल जाती हूँ", "मैं स्कूल जाते हूँ", "मैं स्कूल जाता है"],
        "options_hi": ["मैं स्कूल जाता हूँ", "मैं स्कूल जाती हूँ", "मैं स्कूल जाते हूँ", "मैं स्कूल जाता है"],
        "answer_en": "मैं स्कूल जाता हूँ",
        "answer_hi": "मैं स्कूल जाता हूँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'गाय' का बहुवचन है:",
        "question_hi": "'गाय' का बहुवचन है:",
        "options_en": ["गायें", "गायों", "गाये", "गायाएँ"],
        "options_hi": ["गायें", "गायों", "गाये", "गायाएँ"],
        "answer_en": "गायें",
        "answer_hi": "गायें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "कौन सा शब्द सर्वनाम है?",
        "question_hi": "कौन सा शब्द सर्वनाम है?",
        "options_en": ["लड़का", "वह", "पढ़ना", "सुंदर"],
        "options_hi": ["लड़का", "वह", "पढ़ना", "सुंदर"],
        "answer_en": "वह",
        "answer_hi": "वह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'प्रकाश' का विलोम है:",
        "question_hi": "'प्रकाश' का विलोम है:",
        "options_en": ["चमक", "रोशनी", "अंधकार", "दीपक"],
        "options_hi": ["चमक", "रोशनी", "अंधकार", "दीपक"],
        "answer_en": "अंधकार",
        "answer_hi": "अंधकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "कौन सा शब्द विशेषण है?",
        "question_hi": "कौन सा शब्द विशेषण है?",
        "options_en": ["तेज", "दौड़ना", "लड़का", "किताब"],
        "options_hi": ["तेज", "दौड़ना", "लड़का", "किताब"],
        "answer_en": "तेज",
        "answer_hi": "तेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'मोहन खेल रहा है' - यह वाक्य किस काल में है?",
        "question_hi": "'मोहन खेल रहा है' - यह वाक्य किस काल में है?",
        "options_en": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "संदिग्ध भूत"],
        "options_hi": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "संदिग्ध भूत"],
        "answer_en": "वर्तमान काल",
        "answer_hi": "वर्तमान काल",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (61-80)
    {
        "num": 61,
        "question_en": "The capital of India is:",
        "question_hi": "भारत की राजधानी है:",
        "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
        "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
        "answer_en": "Delhi",
        "answer_hi": "दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "How many states are there in India?",
        "question_hi": "भारत में कितने राज्य हैं?",
        "options_en": ["25", "28", "29", "30"],
        "options_hi": ["25", "28", "29", "30"],
        "answer_en": "28",
        "answer_hi": "28",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
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
        "num": 64,
        "question_en": "Who is known as the Father of the Nation in India?",
        "question_hi": "भारत में राष्ट्रपिता के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh", "Subhash Chandra Bose"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "भगत सिंह", "सुभाष चंद्र बोस"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
        "question_en": "How many continents are there in the world?",
        "question_hi": "दुनिया में कितने महाद्वीप हैं?",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The currency of Japan is:",
        "question_hi": "जापान की मुद्रा है:",
        "options_en": ["Dollar", "Yen", "Euro", "Pound"],
        "options_hi": ["डॉलर", "येन", "यूरो", "पाउंड"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारत के राष्ट्रगान के रचयिता कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
        "question_en": "How many players are there in a cricket team?",
        "question_hi": "क्रिकेट टीम में कितने खिलाड़ी होते हैं?",
        "options_en": ["9", "10", "11", "12"],
        "options_hi": ["9", "10", "11", "12"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-100)
    {
        "num": 71,
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
        "num": 72,
        "question_en": "The value of gravitational constant G is:",
        "question_hi": "गुरुत्वाकर्षण नियतांक G का मान है:",
        "options_en": ["6.67 × 10⁻¹¹ Nm²/kg²", "9.8 m/s²", "3 × 10⁸ m/s", "1.6 × 10⁻¹⁹ C"],
        "options_hi": ["6.67 × 10⁻¹¹ Nm²/kg²", "9.8 m/s²", "3 × 10⁸ m/s", "1.6 × 10⁻¹⁹ C"],
        "answer_en": "6.67 × 10⁻¹¹ Nm²/kg²",
        "answer_hi": "6.67 × 10⁻¹¹ Nm²/kg²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The process of water turning into vapor is called:",
        "question_hi": "पानी के वाष्प में बदलने की प्रक्रिया कहलाती है:",
        "options_en": ["Condensation", "Evaporation", "Sublimation", "Freezing"],
        "options_hi": ["संघनन", "वाष्पीकरण", "उर्ध्वपातन", "जमना"],
        "answer_en": "Evaporation",
        "answer_hi": "वाष्पीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The largest ocean in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा महासागर है:",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The formula for area of triangle is:",
        "question_hi": "त्रिभुज के क्षेत्रफल का सूत्र है:",
        "options_en": ["½ × base × height", "length × breadth", "πr²", "side²"],
        "options_hi": ["½ × आधार × ऊँचाई", "लंबाई × चौड़ाई", "πr²", "भुजा²"],
        "answer_en": "½ × base × height",
        "answer_hi": "½ × आधार × ऊँचाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The smallest bone in human body is:",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी है:",
        "options_en": ["Femur", "Stapes", "Radius", "Ulna"],
        "options_hi": ["फीमर", "स्टेप्स", "रेडियस", "अल्ना"],
        "answer_en": "Stapes",
        "answer_hi": "स्टेप्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
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
        "num": 78,
        "question_en": "The speed of light in vacuum is:",
        "question_hi": "निर्वात में प्रकाश की चाल है:",
        "options_en": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "options_hi": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
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
        "num": 80,
        "question_en": "The value of sin 30° is:",
        "question_hi": "sin 30° का मान है:",
        "options_en": ["0", "½", "1/√2", "√3/2"],
        "options_hi": ["0", "½", "1/√2", "√3/2"],
        "answer_en": "½",
        "answer_hi": "½",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "कौन सा ग्रह लाल ग्रह के नाम से जाना जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The hardest natural substance on Earth is:",
        "question_hi": "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ है:",
        "options_en": ["Gold", "Iron", "Diamond", "Platinum"],
        "options_hi": ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
        "answer_en": "Diamond",
        "answer_hi": "हीरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The number of bones in adult human body is:",
        "question_hi": "वयस्क मानव शरीर में हड्डियों की संख्या है:",
        "options_en": ["206", "300", "150", "250"],
        "options_hi": ["206", "300", "150", "250"],
        "answer_en": "206",
        "answer_hi": "206",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The gas responsible for global warming is:",
        "question_hi": "ग्लोबल वार्मिंग के लिए जिम्मेदार गैस है:",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The largest desert in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान है:",
        "options_en": ["Thar Desert", "Sahara Desert", "Gobi Desert", "Kalahari Desert"],
        "options_hi": ["थार रेगिस्तान", "सहारा रेगिस्तान", "गोबी रेगिस्तान", "कालाहारी रेगिस्तान"],
        "answer_en": "Sahara Desert",
        "answer_hi": "सहारा रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The instrument used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दबाव मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The largest mammal in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा स्तनपायी है:",
        "options_en": ["Elephant", "Blue Whale", "Giraffe", "Hippopotamus"],
        "options_hi": ["हाथी", "ब्लू व्हेल", "जिराफ", "दरियाई घोड़ा"],
        "answer_en": "Blue Whale",
        "answer_hi": "ब्लू व्हेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The chemical name of common salt is:",
        "question_hi": "सामान्य नमक का रासायनिक नाम है:",
        "options_en": ["Sodium chloride", "Sodium bicarbonate", "Calcium carbonate", "Potassium nitrate"],
        "options_hi": ["सोडियम क्लोराइड", "सोडियम बाइकार्बोनेट", "कैल्शियम कार्बोनेट", "पोटेशियम नाइट्रेट"],
        "answer_en": "Sodium chloride",
        "answer_hi": "सोडियम क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The number of zeros in one million is:",
        "question_hi": "एक मिलियन में शून्य की संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The study of earthquakes is called:",
        "question_hi": "भूकंपों का अध्ययन कहलाता है:",
        "options_en": ["Seismology", "Volcanology", "Meteorology", "Geology"],
        "options_hi": ["सिस्मोलॉजी", "ज्वालामुखी विज्ञान", "मौसम विज्ञान", "भूविज्ञान"],
        "answer_en": "Seismology",
        "answer_hi": "सिस्मोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The largest cell in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी कोशिका है:",
        "options_en": ["Nerve cell", "Red blood cell", "Ovum", "White blood cell"],
        "options_hi": ["तंत्रिका कोशिका", "लाल रक्त कोशिका", "अंडाणु", "श्वेत रक्त कोशिका"],
        "answer_en": "Ovum",
        "answer_hi": "अंडाणु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The gas used in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में प्रयुक्त गैस है:",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The smallest country in the world is:",
        "question_hi": "दुनिया का सबसे छोटा देश है:",
        "options_en": ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
        "options_hi": ["मोनाको", "वेटिकन सिटी", "सैन मैरिनो", "लिकटेंस्टीन"],
        "answer_en": "Vatican City",
        "answer_hi": "वेटिकन सिटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The metal used in making airplanes is:",
        "question_hi": "हवाई जहाज बनाने में प्रयुक्त धातु है:",
        "options_en": ["Iron", "Copper", "Aluminum", "Gold"],
        "options_hi": ["लोहा", "तांबा", "एल्युमिनियम", "सोना"],
        "answer_en": "Aluminum",
        "answer_hi": "एल्युमिनियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The number of planets in our solar system is:",
        "question_hi": "हमारे सौर मंडल में ग्रहों की संख्या है:",
        "options_en": ["7", "8", "9", "10"],
        "options_hi": ["7", "8", "9", "10"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The study of birds is called:",
        "question_hi": "पक्षियों का अध्ययन कहलाता है:",
        "options_en": ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
        "options_hi": ["ऑर्निथोलॉजी", "कीटविज्ञान", "हेर्पेटोलॉजी", "मत्स्य विज्ञान"],
        "answer_en": "Ornithology",
        "answer_hi": "ऑर्निथोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The largest island in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा द्वीप है:",
        "options_en": ["Greenland", "Australia", "New Guinea", "Borneo"],
        "options_hi": ["ग्रीनलैंड", "ऑस्ट्रेलिया", "न्यू गिनी", "बोर्नियो"],
        "answer_en": "Greenland",
        "answer_hi": "ग्रीनलैंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The instrument used to measure electric current is:",
        "question_hi": "विद्युत धारा मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
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
        "num": 100,
        "question_en": "The chemical symbol for sodium is:",
        "question_hi": "सोडियम का रासायनिक प्रतीक है:",
        "options_en": ["So", "Sd", "Na", "Nm"],
        "options_hi": ["So", "Sd", "Na", "Nm"],
        "answer_en": "Na",
        "answer_hi": "Na",
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