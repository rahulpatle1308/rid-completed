const questions = [
    // Physics - Rotational Motion & Gravitation (1-20)
    {
        "num": 1,
        "question_en": "The moment of inertia of a solid sphere about its diameter is:",
        "question_hi": "एक ठोस गोले का इसके व्यास के परितः जड़त्व आघूर्ण है:",
        "options_en": ["(2/5)MR²", "(2/3)MR²", "(1/2)MR²", "(3/5)MR²"],
        "options_hi": ["(2/5)MR²", "(2/3)MR²", "(1/2)MR²", "(3/5)MR²"],
        "answer_en": "(2/5)MR²",
        "answer_hi": "(2/5)MR²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Kepler's second law is based on:",
        "question_hi": "केप्लर का दूसरा नियम आधारित है:",
        "options_en": ["Conservation of energy", "Conservation of angular momentum", "Conservation of linear momentum", "Conservation of mass"],
        "options_hi": ["ऊर्जा संरक्षण", "कोणीय संवेग संरक्षण", "रैखिक संवेग संरक्षण", "द्रव्यमान संरक्षण"],
        "answer_en": "Conservation of angular momentum",
        "answer_hi": "कोणीय संवेग संरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The acceleration due to gravity at height h above earth surface is given by:",
        "question_hi": "पृथ्वी की सतह से h ऊँचाई पर गुरुत्वीय त्वरण दिया जाता है:",
        "options_en": ["g' = g(1 - 2h/R)", "g' = g(1 - h/R)", "g' = g(1 + h/R)", "g' = g(1 + 2h/R)"],
        "options_hi": ["g' = g(1 - 2h/R)", "g' = g(1 - h/R)", "g' = g(1 + h/R)", "g' = g(1 + 2h/R)"],
        "answer_en": "g' = g(1 - 2h/R)",
        "answer_hi": "g' = g(1 - 2h/R)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The torque acting on a particle is given by:",
        "question_hi": "किसी कण पर कार्यरत बल आघूर्ण दिया जाता है:",
        "options_en": ["τ = F × r", "τ = r × F", "τ = F · r", "τ = r · F"],
        "options_hi": ["τ = F × r", "τ = r × F", "τ = F · r", "τ = r · F"],
        "answer_en": "τ = r × F",
        "answer_hi": "τ = r × F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The escape velocity from earth surface is:",
        "question_hi": "पृथ्वी की सतह से पलायन वेग है:",
        "options_en": ["√(gR)", "√(2gR)", "√(gR/2)", "2√(gR)"],
        "options_hi": ["√(gR)", "√(2gR)", "√(gR/2)", "2√(gR)"],
        "answer_en": "√(2gR)",
        "answer_hi": "√(2gR)",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - d & f Block Elements (6-40)
    {
        "num": 6,
        "question_en": "Which of the following is a lanthanoid element?",
        "question_hi": "निम्नलिखित में से कौन सा एक लैन्थेनाइड तत्व है?",
        "options_en": ["Uranium", "Thorium", "Cerium", "Actinium"],
        "options_hi": ["यूरेनियम", "थोरियम", "सीरियम", "एक्टिनियम"],
        "answer_en": "Cerium",
        "answer_hi": "सीरियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The magnetic moment of Cr³⁺ ion is:",
        "question_hi": "Cr³⁺ आयन का चुंबकीय आघूर्ण है:",
        "options_en": ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
        "options_hi": ["1.73 BM", "2.83 BM", "3.87 BM", "4.90 BM"],
        "answer_en": "3.87 BM",
        "answer_hi": "3.87 BM",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which transition metal shows highest oxidation state?",
        "question_hi": "कौन सा संक्रमण धातु उच्चतम ऑक्सीकरण अवस्था दर्शाता है?",
        "options_en": ["Scandium", "Titanium", "Manganese", "Osmium"],
        "options_hi": ["स्कैंडियम", "टाइटेनियम", "मैंगनीज", "ऑस्मियम"],
        "answer_en": "Osmium",
        "answer_hi": "ऑस्मियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Lanthanoid contraction is due to:",
        "question_hi": "लैन्थेनाइड संकुचन किसके कारण होता है:",
        "options_en": ["Poor shielding of 4f electrons", "Poor shielding of 5d electrons", "High nuclear charge", "Both A and C"],
        "options_hi": ["4f इलेक्ट्रॉनों का खराब परिरक्षण", "5d इलेक्ट्रॉनों का खराब परिरक्षण", "उच्च नाभिकीय आवेश", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The color of KMnO₄ solution is due to:",
        "question_hi": "KMnO₄ विलयन का रंग किसके कारण होता है:",
        "options_en": ["d-d transition", "Charge transfer", "f-f transition", "None of these"],
        "options_hi": ["d-d संक्रमण", "आवेश स्थानांतरण", "f-f संक्रमण", "इनमें से कोई नहीं"],
        "answer_en": "Charge transfer",
        "answer_hi": "आवेश स्थानांतरण",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Binomial Theorem & Sequences (11-60)
    {
        "num": 11,
        "question_en": "The general term in expansion of (a + b)ⁿ is:",
        "question_hi": "(a + b)ⁿ के विस्तार में व्यापक पद है:",
        "options_en": ["Tᵣ = ⁿCᵣ aʳ bⁿ⁻ʳ", "Tᵣ = ⁿCᵣ aⁿ⁻ʳ bʳ", "Tᵣ = ⁿCᵣ aʳ bʳ", "Tᵣ = ⁿCᵣ aⁿ⁻ʳ bⁿ⁻ʳ"],
        "options_hi": ["Tᵣ = ⁿCᵣ aʳ bⁿ⁻ʳ", "Tᵣ = ⁿCᵣ aⁿ⁻ʳ bʳ", "Tᵣ = ⁿCᵣ aʳ bʳ", "Tᵣ = ⁿCᵣ aⁿ⁻ʳ bⁿ⁻ʳ"],
        "answer_en": "Tᵣ = ⁿCᵣ aⁿ⁻ʳ bʳ",
        "answer_hi": "Tᵣ = ⁿCᵣ aⁿ⁻ʳ bʳ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The sum of first n natural numbers is:",
        "question_hi": "प्रथम n प्राकृतिक संख्याओं का योग है:",
        "options_en": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "options_hi": ["n(n+1)/2", "n(n-1)/2", "n²", "2n"],
        "answer_en": "n(n+1)/2",
        "answer_hi": "n(n+1)/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "In an AP, if a = 2 and d = 3, then 10th term is:",
        "question_hi": "एक समांतर श्रेणी में, यदि a = 2 और d = 3, तो 10वाँ पद है:",
        "options_en": ["29", "30", "31", "32"],
        "options_hi": ["29", "30", "31", "32"],
        "answer_en": "29",
        "answer_hi": "29",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The middle term in expansion of (x + 1/x)¹⁰ is:",
        "question_hi": "(x + 1/x)¹⁰ के विस्तार में मध्य पद है:",
        "options_en": ["5th term", "6th term", "7th term", "8th term"],
        "options_hi": ["5वाँ पद", "6वाँ पद", "7वाँ पद", "8वाँ पद"],
        "answer_en": "6th term",
        "answer_hi": "6वाँ पद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The sum of infinite GP: 1 + 1/2 + 1/4 + ... is:",
        "question_hi": "अनंत गुणोत्तर श्रेणी: 1 + 1/2 + 1/4 + ... का योग है:",
        "options_en": ["1", "2", "∞", "0"],
        "options_hi": ["1", "2", "∞", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },

    // Biology - Animal Kingdom & Classification (16-80)
    {
        "num": 16,
        "question_en": "Which phylum includes animals with spiny skin?",
        "question_hi": "कौन सा संघ काँटेदार त्वचा वाले जानवरों को शामिल करता है?",
        "options_en": ["Annelida", "Arthropoda", "Echinodermata", "Mollusca"],
        "options_hi": ["एनेलिडा", "आर्थ्रोपोडा", "एकाइनोडर्मेटा", "मोलस्का"],
        "answer_en": "Echinodermata",
        "answer_hi": "एकाइनोडर्मेटा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The scientific name of human is:",
        "question_hi": "मनुष्य का वैज्ञानिक नाम है:",
        "options_en": ["Homo sapiens", "Homo erectus", "Homo habilis", "Homo neanderthalensis"],
        "options_hi": ["होमो सेपियन्स", "होमो इरेक्टस", "होमो हैबिलिस", "होमो निएंडरथलेंसिस"],
        "answer_en": "Homo sapiens",
        "answer_hi": "होमो सेपियन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which class includes animals with feathers?",
        "question_hi": "कौन सा वर्ग पंख वाले जानवरों को शामिल करता है?",
        "options_en": ["Mammalia", "Aves", "Reptilia", "Amphibia"],
        "options_hi": ["स्तनधारी", "एव्स", "सरीसृप", "उभयचर"],
        "answer_en": "Aves",
        "answer_hi": "एव्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The largest phylum in animal kingdom is:",
        "question_hi": "जंतु साम्राज्य में सबसे बड़ा संघ है:",
        "options_en": ["Chordata", "Arthropoda", "Mollusca", "Annelida"],
        "options_hi": ["कॉर्डेटा", "आर्थ्रोपोडा", "मोलस्का", "एनेलिडा"],
        "answer_en": "Arthropoda",
        "answer_hi": "आर्थ्रोपोडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Animals with notochord are called:",
        "question_hi": "नोटोकॉर्ड वाले जानवर कहलाते हैं:",
        "options_en": ["Vertebrates", "Invertebrates", "Chordates", "Non-chordates"],
        "options_hi": ["कशेरुकी", "अकशेरुकी", "कॉर्डेट", "गैर-कॉर्डेट"],
        "answer_en": "Chordates",
        "answer_hi": "कॉर्डेट",
        "attempted": false,
        "selected": ""
    },

    // English - Reading Comprehension & Writing (21-85)
    {
        "num": 21,
        "question_en": "Choose the correct meaning of 'Ubiquitous':",
        "question_hi": "'Ubiquitous' का सही अर्थ चुनें:",
        "options_en": ["Rare", "Present everywhere", "Beautiful", "Dangerous"],
        "options_hi": ["दुर्लभ", "सर्वव्यापी", "सुंदर", "खतरनाक"],
        "answer_en": "Present everywhere",
        "answer_hi": "सर्वव्यापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Identify the type of writing: 'To persuade the reader to take action'",
        "question_hi": "लेखन का प्रकार पहचानें: 'पाठक को कार्रवाई करने के लिए राजी करना'",
        "options_en": ["Narrative", "Descriptive", "Persuasive", "Expository"],
        "options_hi": ["वर्णनात्मक", "विवरणात्मक", "प्रेरक", "व्याख्यात्मक"],
        "answer_en": "Persuasive",
        "answer_hi": "प्रेरक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
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
        "num": 24,
        "question_en": "The antonym of 'Clandestine' is:",
        "question_hi": "'Clandestine' का विलोम है:",
        "options_en": ["Secret", "Open", "Dangerous", "Safe"],
        "options_hi": ["गुप्त", "खुला", "खतरनाक", "सुरक्षित"],
        "answer_en": "Open",
        "answer_hi": "खुला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Identify the figure of speech: 'The wind whispered through the trees'",
        "question_hi": "अलंकार पहचानें: 'The wind whispered through the trees'",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },

    // Hindi - निबंध और व्याकरण (26-90)
    {
        "num": 26,
        "question_en": "'विराम चिह्न' कितने प्रकार के होते हैं?",
        "question_hi": "'विराम चिह्न' कितने प्रकार के होते हैं?",
        "options_en": ["5", "7", "9", "11"],
        "options_hi": ["5", "7", "9", "11"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'मैंने एक सुंदर फूल देखा।' इस वाक्य में विशेषण है:",
        "question_hi": "'मैंने एक सुंदर फूल देखा।' इस वाक्य में विशेषण है:",
        "options_en": ["मैंने", "एक", "सुंदर", "फूल"],
        "options_hi": ["मैंने", "एक", "सुंदर", "फूल"],
        "answer_en": "सुंदर",
        "answer_hi": "सुंदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "'आत्मकथा' किस प्रकार की रचना है?",
        "question_hi": "'आत्मकथा' किस प्रकार की रचना है?",
        "options_en": ["कहानी", "निबंध", "जीवनी", "उपन्यास"],
        "options_hi": ["कहानी", "निबंध", "जीवनी", "उपन्यास"],
        "answer_en": "जीवनी",
        "answer_hi": "जीवनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'समास' के कितने भेद हैं?",
        "question_hi": "'समास' के कितने भेद हैं?",
        "options_en": ["4", "6", "8", "10"],
        "options_hi": ["4", "6", "8", "10"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "'रामायण' की रचना किस भाषा में हुई?",
        "question_hi": "'रामायण' की रचना किस भाषा में हुई?",
        "options_en": ["हिंदी", "संस्कृत", "प्राकृत", "अपभ्रंश"],
        "options_hi": ["हिंदी", "संस्कृत", "प्राकृत", "अपभ्रंश"],
        "answer_en": "संस्कृत",
        "answer_hi": "संस्कृत",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - World Geography (31-100)
    {
        "num": 31,
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
        "num": 32,
        "question_en": "The longest river in the world is:",
        "question_hi": "दुनिया की सबसे लंबी नदी है:",
        "options_en": ["Amazon", "Nile", "Yangtze", "Mississippi"],
        "options_hi": ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
        "answer_en": "Nile",
        "answer_hi": "नील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The highest mountain peak in the world is:",
        "question_hi": "दुनिया की सबसे ऊँची पर्वत चोटी है:",
        "options_en": ["K2", "Mount Everest", "Kangchenjunga", "Lhotse"],
        "options_hi": ["K2", "माउंट एवरेस्ट", "कंचनजंगा", "ल्होत्से"],
        "answer_en": "Mount Everest",
        "answer_hi": "माउंट एवरेस्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The largest desert in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान है:",
        "options_en": ["Sahara", "Gobi", "Arabian", "Kalahari"],
        "options_hi": ["सहारा", "गोबी", "अरबी", "कालाहारी"],
        "answer_en": "Sahara",
        "answer_hi": "सहारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The country with largest population is:",
        "question_hi": "सबसे अधिक जनसंख्या वाला देश है:",
        "options_en": ["India", "USA", "China", "Russia"],
        "options_hi": ["भारत", "USA", "चीन", "रूस"],
        "answer_en": "China",
        "answer_hi": "चीन",
        "attempted": false,
        "selected": ""
    },

    // Additional Physics - Fluid Mechanics (36-45)
    {
        "num": 36,
        "question_en": "Bernoulli's theorem is based on:",
        "question_hi": "बर्नौली का प्रमेय आधारित है:",
        "options_en": ["Conservation of mass", "Conservation of energy", "Conservation of momentum", "Conservation of charge"],
        "options_hi": ["द्रव्यमान संरक्षण", "ऊर्जा संरक्षण", "संवेग संरक्षण", "आवेश संरक्षण"],
        "answer_en": "Conservation of energy",
        "answer_hi": "ऊर्जा संरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The SI unit of viscosity is:",
        "question_hi": "श्यानता की SI इकाई है:",
        "options_en": ["Pascal", "Poise", "Pascal-second", "Newton"],
        "options_hi": ["पास्कल", "प्वाइज", "पास्कल-सेकंड", "न्यूटन"],
        "answer_en": "Pascal-second",
        "answer_hi": "पास्कल-सेकंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Surface tension is measured in:",
        "question_hi": "पृष्ठ तनाव मापा जाता है:",
        "options_en": ["N/m", "N/m²", "J/m", "W/m"],
        "options_hi": ["N/m", "N/m²", "J/m", "W/m"],
        "answer_en": "N/m",
        "answer_hi": "N/m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The flow of fluid in which velocity is constant is called:",
        "question_hi": "द्रव का प्रवाह जिसमें वेग स्थिर होता है, कहलाता है:",
        "options_en": ["Turbulent flow", "Laminar flow", "Streamline flow", "Both B and C"],
        "options_hi": ["अशांत प्रवाह", "स्तरीय प्रवाह", "धारा रेखीय प्रवाह", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The pressure at a point in fluid is:",
        "question_hi": "द्रव में एक बिंदु पर दाब है:",
        "options_en": ["Same in all directions", "Different in different directions", "Zero", "Infinite"],
        "options_hi": ["सभी दिशाओं में समान", "विभिन्न दिशाओं में भिन्न", "शून्य", "अनंत"],
        "answer_en": "Same in all directions",
        "answer_hi": "सभी दिशाओं में समान",
        "attempted": false,
        "selected": ""
    },

    // Additional Chemistry - p-Block Elements (41-50)
    {
        "num": 41,
        "question_en": "Which of the following is a metalloid?",
        "question_hi": "निम्नलिखित में से कौन सा एक उपधातु है?",
        "options_en": ["Silicon", "Carbon", "Nitrogen", "Oxygen"],
        "options_hi": ["सिलिकॉन", "कार्बन", "नाइट्रोजन", "ऑक्सीजन"],
        "answer_en": "Silicon",
        "answer_hi": "सिलिकॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The most electronegative element is:",
        "question_hi": "सबसे अधिक विद्युत ऋणात्मक तत्व है:",
        "options_en": ["Oxygen", "Nitrogen", "Fluorine", "Chlorine"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "फ्लोरीन", "क्लोरीन"],
        "answer_en": "Fluorine",
        "answer_hi": "फ्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The compound used in match industry is:",
        "question_hi": "माचिस उद्योग में प्रयुक्त यौगिक है:",
        "options_en": ["Red phosphorus", "White phosphorus", "Black phosphorus", "Phosphine"],
        "options_hi": ["लाल फास्फोरस", "सफेद फास्फोरस", "काला फास्फोरस", "फॉस्फीन"],
        "answer_en": "Red phosphorus",
        "answer_hi": "लाल फास्फोरस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The allotrope of carbon used in pencils is:",
        "question_hi": "कार्बन का वह अपरूप जो पेंसिल में प्रयुक्त होता है:",
        "options_en": ["Diamond", "Graphite", "Fullerene", "Charcoal"],
        "options_hi": ["हीरा", "ग्रेफाइट", "फुलरीन", "चारकोल"],
        "answer_en": "Graphite",
        "answer_hi": "ग्रेफाइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "The compound used as a drying agent is:",
        "question_hi": "सुखाने वाले एजेंट के रूप में प्रयुक्त यौगिक है:",
        "options_en": ["CaO", "CaCO₃", "CaCl₂", "Both A and C"],
        "options_hi": ["CaO", "CaCO₃", "CaCl₂", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },

    // Additional Mathematics - Limits & Continuity (46-55)
    {
        "num": 46,
        "question_en": "The value of lim(x→0) sinx/x is:",
        "question_hi": "lim(x→0) sinx/x का मान है:",
        "options_en": ["0", "1", "∞", "Undefined"],
        "options_hi": ["0", "1", "∞", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
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
        "num": 48,
        "question_en": "The value of lim(x→∞) (1 + 1/x)ˣ is:",
        "question_hi": "lim(x→∞) (1 + 1/x)ˣ का मान है:",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "e",
        "answer_hi": "e",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The function f(x) = |x| is continuous at:",
        "question_hi": "फलन f(x) = |x| संतत है:",
        "options_en": ["x = 0 only", "All real numbers", "No real numbers", "x > 0 only"],
        "options_hi": ["केवल x = 0", "सभी वास्तविक संख्याएं", "कोई वास्तविक संख्या नहीं", "केवल x > 0"],
        "answer_en": "All real numbers",
        "answer_hi": "सभी वास्तविक संख्याएं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The value of lim(x→0) (eˣ - 1)/x is:",
        "question_hi": "lim(x→0) (eˣ - 1)/x का मान है:",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },

    // Additional Biology - Cell Biology (51-60)
    {
        "num": 51,
        "question_en": "The power house of the cell is:",
        "question_hi": "कोशिका का पावरहाउस है:",
        "options_en": ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The process of cell division is called:",
        "question_hi": "कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Both A and B", "None of these"],
        "options_hi": ["माइटोसिस", "मियोसिस", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "The cell organelle involved in protein synthesis is:",
        "question_hi": "प्रोटीन संश्लेषण में शामिल कोशिकांग है:",
        "options_en": ["Mitochondria", "Ribosome", "Golgi apparatus", "Endoplasmic reticulum"],
        "options_hi": ["माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण", "अंतर्द्रव्यी जालिका"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "The fluid mosaic model describes:",
        "question_hi": "द्रव मोज़ेक मॉडल वर्णन करता है:",
        "options_en": ["Cell wall", "Cell membrane", "Nucleus", "Cytoplasm"],
        "options_hi": ["कोशिका भित्ति", "कोशिका झिल्ली", "केंद्रक", "कोशिका द्रव्य"],
        "answer_en": "Cell membrane",
        "answer_hi": "कोशिका झिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The process of engulfing food by cell is called:",
        "question_hi": "कोशिका द्वारा भोजन निगलने की प्रक्रिया कहलाती है:",
        "options_en": ["Diffusion", "Osmosis", "Phagocytosis", "Pinocytosis"],
        "options_hi": ["प्रसार", "परासरण", "भक्षणोदरता", "पिनोसाइटोसिस"],
        "answer_en": "Phagocytosis",
        "answer_hi": "भक्षणोदरता",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (56-100)
    {
        "num": 56,
        "question_en": "The SI unit of electric potential is:",
        "question_hi": "विद्युत विभव की SI इकाई है:",
        "options_en": ["Joule", "Volt", "Watt", "Ohm"],
        "options_hi": ["जूल", "वोल्ट", "वाट", "ओम"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "The compound used in photography is:",
        "question_hi": "फोटोग्राफी में प्रयुक्त यौगिक है:",
        "options_en": ["AgCl", "AgBr", "AgI", "Both A and B"],
        "options_hi": ["AgCl", "AgBr", "AgI", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The value of ∫(x³ dx) is:",
        "question_hi": "∫(x³ dx) का मान है:",
        "options_en": ["x⁴/4 + C", "3x² + C", "x⁴ + C", "4x³ + C"],
        "options_hi": ["x⁴/4 + C", "3x² + C", "x⁴ + C", "4x³ + C"],
        "answer_en": "x⁴/4 + C",
        "answer_hi": "x⁴/4 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The hormone that regulates metabolic rate is:",
        "question_hi": "वह हार्मोन जो चयापचय दर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Adrenaline", "Estrogen"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "एड्रेनालाईन", "एस्ट्रोजन"],
        "answer_en": "Thyroxine",
        "answer_hi": "थायरोक्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The device used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दबाव मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
        "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
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
        "num": 62,
        "question_en": "The value of d/dx(cosx) is:",
        "question_hi": "d/dx(cosx) का मान है:",
        "options_en": ["sinx", "-sinx", "cosx", "-cosx"],
        "options_hi": ["sinx", "-sinx", "cosx", "-cosx"],
        "answer_en": "-sinx",
        "answer_hi": "-sinx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The process of breakdown of glucose is called:",
        "question_hi": "ग्लूकोज के टूटने की प्रक्रिया कहलाती है:",
        "options_en": ["Photosynthesis", "Respiration", "Digestion", "Transpiration"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "पाचन", "वाष्पोत्सर्जन"],
        "answer_en": "Respiration",
        "answer_hi": "श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The SI unit of frequency is:",
        "question_hi": "आवृत्ति की SI इकाई है:",
        "options_en": ["Hertz", "Decibel", "Watt", "Joule"],
        "options_hi": ["हर्ट्ज", "डेसीबल", "वाट", "जूल"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The compound that shows optical isomerism is:",
        "question_hi": "वह यौगिक जो प्रकाशिक समावयवता दर्शाता है:",
        "options_en": ["Lactic acid", "Acetic acid", "Formic acid", "Oxalic acid"],
        "options_hi": ["लैक्टिक अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल", "ऑक्सैलिक अम्ल"],
        "answer_en": "Lactic acid",
        "answer_hi": "लैक्टिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The value of ∫(eˣ dx) is:",
        "question_hi": "∫(eˣ dx) का मान है:",
        "options_en": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "log|eˣ| + C"],
        "options_hi": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "log|eˣ| + C"],
        "answer_en": "eˣ + C",
        "answer_hi": "eˣ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The process of formation of sperm is called:",
        "question_hi": "शुक्राणु के निर्माण की प्रक्रिया कहलाती है:",
        "options_en": ["Oogenesis", "Spermatogenesis", "Gametogenesis", "Both B and C"],
        "options_hi": ["अंडजनन", "शुक्राणुजनन", "युग्मकजनन", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The principle behind working of transformer is:",
        "question_hi": "ट्रांसफॉर्मर के कार्य करने का सिद्धांत है:",
        "options_en": ["Self induction", "Mutual induction", "Electromagnetic induction", "Both B and C"],
        "options_hi": ["स्वप्रेरण", "पारस्परिक प्रेरण", "विद्युत चुम्बकीय प्रेरण", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The IUPAC name of CH₃CH₂CH₂OH is:",
        "question_hi": "CH₃CH₂CH₂OH का IUPAC नाम है:",
        "options_en": ["Ethanol", "Propanol", "Butanol", "Methanol"],
        "options_hi": ["एथनॉल", "प्रोपेनॉल", "ब्यूटेनॉल", "मेथनॉल"],
        "answer_en": "Propanol",
        "answer_hi": "प्रोपेनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The value of ∫(1/√x dx) is:",
        "question_hi": "∫(1/√x dx) का मान है:",
        "options_en": ["2√x + C", "√x + C", "(1/2)√x + C", "(3/2)x^(3/2) + C"],
        "options_hi": ["2√x + C", "√x + C", "(1/2)√x + C", "(3/2)x^(3/2) + C"],
        "answer_en": "2√x + C",
        "answer_hi": "2√x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The site of DNA in cell is:",
        "question_hi": "कोशिका में DNA का स्थल है:",
        "options_en": ["Nucleus", "Cytoplasm", "Ribosome", "Mitochondria"],
        "options_hi": ["केंद्रक", "कोशिका द्रव्य", "राइबोसोम", "माइटोकॉन्ड्रिया"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The force between two parallel wires is attractive when:",
        "question_hi": "दो समानांतर तारों के बीच बल आकर्षक होता है जब:",
        "options_en": ["Currents are in same direction", "Currents are in opposite direction", "Always attractive", "Always repulsive"],
        "options_hi": ["धाराएं समान दिशा में हैं", "धाराएं विपरीत दिशा में हैं", "सदैव आकर्षक", "सदैव प्रतिकर्षक"],
        "answer_en": "Currents are in same direction",
        "answer_hi": "धाराएं समान दिशा में हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The compound that gives positive test with sodium bicarbonate is:",
        "question_hi": "वह यौगिक जो सोडियम बाइकार्बोनेट के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Carboxylic acid", "Alcohol", "Aldehyde", "Ketone"],
        "options_hi": ["कार्बोक्सिलिक अम्ल", "अल्कोहल", "एल्डिहाइड", "कीटोन"],
        "answer_en": "Carboxylic acid",
        "answer_hi": "कार्बोक्सिलिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The value of ∫(tanx dx) is:",
        "question_hi": "∫(tanx dx) का मान है:",
        "options_en": ["log|secx| + C", "log|cosx| + C", "sec²x + C", "tan²x + C"],
        "options_hi": ["log|secx| + C", "log|cosx| + C", "sec²x + C", "tan²x + C"],
        "answer_en": "log|secx| + C",
        "answer_hi": "log|secx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The hormone that regulates calcium in blood is:",
        "question_hi": "वह हार्मोन जो रक्त में कैल्शियम को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Parathormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "पैराथॉर्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The unit of power is:",
        "question_hi": "शक्ति की इकाई है:",
        "options_en": ["Joule", "Watt", "Volt", "Ampere"],
        "options_hi": ["जूल", "वाट", "वोल्ट", "एम्पियर"],
        "answer_en": "Watt",
        "answer_hi": "वाट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The number of structural isomers of hexane is:",
        "question_hi": "हेक्सेन के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The value of ∫(cotx dx) is:",
        "question_hi": "∫(cotx dx) का मान है:",
        "options_en": ["log|sinx| + C", "log|cosx| + C", "log|secx| + C", "log|cosecx| + C"],
        "options_hi": ["log|sinx| + C", "log|cosx| + C", "log|secx| + C", "log|cosecx| + C"],
        "answer_en": "log|sinx| + C",
        "answer_hi": "log|sinx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The enzyme that digests fat is:",
        "question_hi": "वह एंजाइम जो वसा को पचाता है:",
        "options_en": ["Amylase", "Pepsin", "Lipase", "Trypsin"],
        "options_hi": ["एमाइलेज", "पेप्सिन", "लाइपेज", "ट्रिप्सिन"],
        "answer_en": "Lipase",
        "answer_hi": "लाइपेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The resistance of a conductor increases with:",
        "question_hi": "एक चालक का प्रतिरोध बढ़ता है:",
        "options_en": ["Increase in temperature", "Decrease in temperature", "Increase in area", "Decrease in length"],
        "options_hi": ["तापमान में वृद्धि", "तापमान में कमी", "क्षेत्रफल में वृद्धि", "लंबाई में कमी"],
        "answer_en": "Increase in temperature",
        "answer_hi": "तापमान में वृद्धि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The compound that shows functional isomerism with alcohol is:",
        "question_hi": "वह यौगिक जो अल्कोहल के साथ क्रियात्मक समावयवता दर्शाता है:",
        "options_en": ["Aldehyde", "Ketone", "Ether", "Acid"],
        "options_hi": ["एल्डिहाइड", "कीटोन", "ईथर", "अम्ल"],
        "answer_en": "Ether",
        "answer_hi": "ईथर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The value of ∫(secx dx) is:",
        "question_hi": "∫(secx dx) का मान है:",
        "options_en": ["log|secx + tanx| + C", "log|secx - tanx| + C", "tanx + C", "secx tanx + C"],
        "options_hi": ["log|secx + tanx| + C", "log|secx - tanx| + C", "tanx + C", "secx tanx + C"],
        "answer_en": "log|secx + tanx| + C",
        "answer_hi": "log|secx + tanx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The site of RNA synthesis is:",
        "question_hi": "RNA संश्लेषण का स्थल है:",
        "options_en": ["Nucleus", "Cytoplasm", "Ribosome", "Mitochondria"],
        "options_hi": ["केंद्रक", "कोशिका द्रव्य", "राइबोसोम", "माइटोकॉन्ड्रिया"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The force on a charge in electric field is maximum when:",
        "question_hi": "विद्युत क्षेत्र में आवेश पर बल अधिकतम होता है जब:",
        "options_en": ["Charge is stationary", "Charge is moving", "Field is uniform", "Field is non-uniform"],
        "options_hi": ["आवेश स्थिर है", "आवेश गतिमान है", "क्षेत्र एकसमान है", "क्षेत्र असमान है"],
        "answer_en": "Field is uniform",
        "answer_hi": "क्षेत्र एकसमान है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The compound that gives positive test with 2,4-DNP is:",
        "question_hi": "वह यौगिक जो 2,4-DNP के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Aldehyde", "Ketone", "Both A and B", "Alcohol"],
        "options_hi": ["एल्डिहाइड", "कीटोन", "A और B दोनों", "अल्कोहल"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The value of ∫(cosecx dx) is:",
        "question_hi": "∫(cosecx dx) का मान है:",
        "options_en": ["log|cosecx - cotx| + C", "log|cosecx + cotx| + C", "cotx + C", "cosecx cotx + C"],
        "options_hi": ["log|cosecx - cotx| + C", "log|cosecx + cotx| + C", "cotx + C", "cosecx cotx + C"],
        "answer_en": "log|cosecx - cotx| + C",
        "answer_hi": "log|cosecx - cotx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The hormone that stimulates ovulation is:",
        "question_hi": "वह हार्मोन जो ओव्यूलेशन को उत्तेजित करता है:",
        "options_en": ["FSH", "LH", "Estrogen", "Progesterone"],
        "options_hi": ["FSH", "LH", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
        "answer_en": "LH",
        "answer_hi": "LH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The unit of magnetic flux density is:",
        "question_hi": "चुंबकीय फ्लक्स घनत्व की इकाई है:",
        "options_en": ["Weber", "Tesla", "Henry", "Farad"],
        "options_hi": ["वेबर", "टेस्ला", "हेनरी", "फैराड"],
        "answer_en": "Tesla",
        "answer_hi": "टेस्ला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The number of π bonds in carbon dioxide is:",
        "question_hi": "कार्बन डाइऑक्साइड में π बंधों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The value of ∫(1/(x² + a²) dx) is:",
        "question_hi": "∫(1/(x² + a²) dx) का मान है:",
        "options_en": ["(1/a)tan⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "(1/a)sin⁻¹(x/a) + C", "sin⁻¹(x/a) + C"],
        "options_hi": ["(1/a)tan⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "(1/a)sin⁻¹(x/a) + C", "sin⁻¹(x/a) + C"],
        "answer_en": "(1/a)tan⁻¹(x/a) + C",
        "answer_hi": "(1/a)tan⁻¹(x/a) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The site of Krebs cycle in cell is:",
        "question_hi": "कोशिका में क्रेब्स चक्र का स्थल है:",
        "options_en": ["Cytoplasm", "Mitochondrial matrix", "Nucleus", "Ribosome"],
        "options_hi": ["कोशिका द्रव्य", "माइटोकॉन्ड्रियल मैट्रिक्स", "केंद्रक", "राइबोसोम"],
        "answer_en": "Mitochondrial matrix",
        "answer_hi": "माइटोकॉन्ड्रियल मैट्रिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The process of conversion of atmospheric nitrogen to ammonia is called:",
        "question_hi": "वायुमंडलीय नाइट्रोजन के अमोनिया में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrogen fixation",
        "answer_hi": "नाइट्रोजन स्थिरीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The magnetic field due to a straight current carrying conductor is:",
        "question_hi": "एक सीधे धारावाही चालक के कारण चुंबकीय क्षेत्र है:",
        "options_en": ["Parallel to conductor", "Perpendicular to conductor", "Circular around conductor", "Radial"],
        "options_hi": ["चालक के समानांतर", "चालक के लंबवत", "चालक के चारों ओर वृत्ताकार", "रेडियल"],
        "answer_en": "Circular around conductor",
        "answer_hi": "चालक के चारों ओर वृत्ताकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The compound that gives positive test with Lucas reagent is:",
        "question_hi": "वह यौगिक जो लुकास अभिकर्मक के साथ सकारात्मक परीक्षण देता है:",
        "options_en": ["Primary alcohol", "Secondary alcohol", "Tertiary alcohol", "All alcohols"],
        "options_hi": ["प्राथमिक अल्कोहल", "द्वितीयक अल्कोहल", "तृतीयक अल्कोहल", "सभी अल्कोहल"],
        "answer_en": "Tertiary alcohol",
        "answer_hi": "तृतीयक अल्कोहल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The value of ∫(1/(x√(x² - 1)) dx) is:",
        "question_hi": "∫(1/(x√(x² - 1)) dx) का मान है:",
        "options_en": ["sec⁻¹x + C", "cosec⁻¹x + C", "tan⁻¹x + C", "cot⁻¹x + C"],
        "options_hi": ["sec⁻¹x + C", "cosec⁻¹x + C", "tan⁻¹x + C", "cot⁻¹x + C"],
        "answer_en": "sec⁻¹x + C",
        "answer_hi": "sec⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "In human eye, the lens focuses light on:",
        "question_hi": "मानव आंख में, लेंस प्रकाश को फोकस करता है:",
        "options_en": ["Cornea", "Iris", "Retina", "Pupil"],
        "options_hi": ["कॉर्निया", "आइरिस", "रेटिना", "पुतली"],
        "answer_en": "Retina",
        "answer_hi": "रेटिना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The dimensional formula of work is:",
        "question_hi": "कार्य का विमीय सूत्र है:",
        "options_en": ["ML²T⁻²", "MLT⁻²", "ML²T⁻¹", "MLT⁻¹"],
        "options_hi": ["ML²T⁻²", "MLT⁻²", "ML²T⁻¹", "MLT⁻¹"],
        "answer_en": "ML²T⁻²",
        "answer_hi": "ML²T⁻²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "Which of the following is a disaccharide?",
        "question_hi": "निम्नलिखित में से कौन एक डाइसैकराइड है?",
        "options_en": ["Glucose", "Fructose", "Sucrose", "Starch"],
        "options_hi": ["ग्लूकोज", "फ्रक्टोज", "सुक्रोज", "स्टार्च"],
        "answer_en": "Sucrose",
        "answer_hi": "सुक्रोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The number of points where f(x) = 1/x is discontinuous is:",
        "question_hi": "बिंदुओं की संख्या जहाँ f(x) = 1/x असतत है:",
        "options_en": ["0", "1", "2", "Infinite"],
        "options_hi": ["0", "1", "2", "अनंत"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The enzyme that converts glucose to glucose-6-phosphate is:",
        "question_hi": "वह एंजाइम जो ग्लूकोज को ग्लूकोज-6-फॉस्फेट में परिवर्तित करता है:",
        "options_en": ["Hexokinase", "Phosphofructokinase", "Pyruvate kinase", "Aldolase"],
        "options_hi": ["हेक्सोकाइनेज", "फॉस्फोफ्रक्टोकाइनेज", "पाइरुवेट काइनेज", "एल्डोलेज"],
        "answer_en": "Hexokinase",
        "answer_hi": "हेक्सोकाइनेज",
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