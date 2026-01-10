const questions = [
    // Physics - Optics & Waves (1-15)
    {
        "num": 1,
        "question_en": "In a Young's double slit experiment, if the distance between slits is doubled, the fringe width:",
        "question_hi": "यंग के द्वि-छिद्र प्रयोग में, यदि छिद्रों के बीच की दूरी दोगुनी कर दी जाए, तो फ्रिंज चौड़ाई:",
        "options_en": ["Becomes half", "Becomes double", "Becomes four times", "Remains same"],
        "options_hi": ["आधी हो जाती है", "दोगुनी हो जाती है", "चार गुनी हो जाती है", "समान रहती है"],
        "answer_en": "Becomes half",
        "answer_hi": "आधी हो जाती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The phenomenon of total internal reflection occurs when light travels from:",
        "question_hi": "पूर्ण आंतरिक परावर्तन की घटना तब होती है जब प्रकाश यात्रा करता है:",
        "options_en": ["Rarer to denser medium", "Denser to rarer medium", "One denser medium to another", "One rarer medium to another"],
        "options_hi": ["विरल से सघन माध्यम", "सघन से विरल माध्यम", "एक सघन माध्यम से दूसरे में", "एक विरल माध्यम से दूसरे में"],
        "answer_en": "Denser to rarer medium",
        "answer_hi": "सघन से विरल माध्यम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The resolving power of a telescope increases with:",
        "question_hi": "दूरबीन की विभेदन क्षमता बढ़ती है:",
        "options_en": ["Increase in wavelength", "Decrease in wavelength", "Increase in aperture", "Both B and C"],
        "options_hi": ["तरंगदैर्ध्य में वृद्धि", "तरंगदैर्ध्य में कमी", "द्वारक में वृद्धि", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In a concave mirror, if the object is placed at focus, the image is formed at:",
        "question_hi": "अवतल दर्पण में, यदि वस्तु फोकस पर रखी जाती है, तो प्रतिबिंब बनता है:",
        "options_en": ["Focus", "Center of curvature", "Infinity", "Pole"],
        "options_hi": ["फोकस", "वक्रता केंद्र", "अनंत", "ध्रुव"],
        "answer_en": "Infinity",
        "answer_hi": "अनंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The phenomenon due to which stars appear twinkling is:",
        "question_hi": "वह घटना जिसके कारण तारे टिमटिमाते दिखाई देते हैं:",
        "options_en": ["Reflection", "Refraction", "Atmospheric refraction", "Dispersion"],
        "options_hi": ["परावर्तन", "अपवर्तन", "वायुमंडलीय अपवर्तन", "विक्षेपण"],
        "answer_en": "Atmospheric refraction",
        "answer_hi": "वायुमंडलीय अपवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In a prism, the angle of deviation is minimum when:",
        "question_hi": "प्रिज्म में, विचलन कोण न्यूनतम होता है जब:",
        "options_en": ["Angle of incidence = angle of emergence", "Angle of incidence = 0", "Angle of emergence = 0", "Prism angle is minimum"],
        "options_hi": ["आपतन कोण = निर्गमन कोण", "आपतन कोण = 0", "निर्गमन कोण = 0", "प्रिज्म कोण न्यूनतम है"],
        "answer_en": "Angle of incidence = angle of emergence",
        "answer_hi": "आपतन कोण = निर्गमन कोण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The power of a lens is +2D. Its focal length is:",
        "question_hi": "एक लेंस की क्षमता +2D है। इसकी फोकस दूरी है:",
        "options_en": ["+50 cm", "+100 cm", "+200 cm", "+500 cm"],
        "options_hi": ["+50 cm", "+100 cm", "+200 cm", "+500 cm"],
        "answer_en": "+50 cm",
        "answer_hi": "+50 cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In wave motion, the phase difference between two particles at distance λ/2 apart is:",
        "question_hi": "तरंग गति में, λ/2 दूरी पर स्थित दो कणों के बीच कलांतर है:",
        "options_en": ["0", "π/2", "π", "2π"],
        "options_hi": ["0", "π/2", "π", "2π"],
        "answer_en": "π",
        "answer_hi": "π",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The phenomenon of beats is due to:",
        "question_hi": "विस्पंदों की घटना किसके कारण होती है:",
        "options_en": ["Reflection", "Refraction", "Interference", "Diffraction"],
        "options_hi": ["परावर्तन", "अपवर्तन", "व्यतिकरण", "विवर्तन"],
        "answer_en": "Interference",
        "answer_hi": "व्यतिकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Doppler effect in sound is used to measure:",
        "question_hi": "ध्वनि में डॉप्लर प्रभाव का उपयोग मापने के लिए किया जाता है:",
        "options_en": ["Speed of sound", "Speed of source", "Speed of listener", "All of these"],
        "options_hi": ["ध्वनि की गति", "स्रोत की गति", "श्रोता की गति", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Electrochemistry & Thermodynamics (11-25)
    {
        "num": 11,
        "question_en": "In a galvanic cell, the electrode where oxidation occurs is called:",
        "question_hi": "गैल्वेनिक सेल में, वह इलेक्ट्रोड जहाँ ऑक्सीकरण होता है, कहलाता है:",
        "options_en": ["Cathode", "Anode", "Salt bridge", "Electrolyte"],
        "options_hi": ["कैथोड", "एनोड", "लवण सेतु", "विद्युतअपघट्य"],
        "answer_en": "Anode",
        "answer_hi": "एनोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
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
        "num": 13,
        "question_en": "For a spontaneous process, the change in Gibbs free energy (ΔG) is:",
        "question_hi": "स्वतःप्रवर्ती प्रक्रिया के लिए, गिब्स मुक्त ऊर्जा में परिवर्तन (ΔG) है:",
        "options_en": ["Positive", "Negative", "Zero", "Infinite"],
        "options_hi": ["धनात्मक", "ऋणात्मक", "शून्य", "अनंत"],
        "answer_en": "Negative",
        "answer_hi": "ऋणात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The Nernst equation is used to calculate:",
        "question_hi": "नेर्नस्ट समीकरण का उपयोग गणना के लिए किया जाता है:",
        "options_en": ["Cell potential", "Electrode potential", "Both A and B", "None of these"],
        "options_hi": ["सेल विभव", "इलेक्ट्रोड विभव", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The unit of specific conductance is:",
        "question_hi": "विशिष्ट चालकता की इकाई है:",
        "options_en": ["ohm⁻¹ cm⁻¹", "ohm cm", "ohm⁻¹ cm", "ohm cm⁻¹"],
        "options_hi": ["ohm⁻¹ cm⁻¹", "ohm cm", "ohm⁻¹ cm", "ohm cm⁻¹"],
        "answer_en": "ohm⁻¹ cm⁻¹",
        "answer_hi": "ohm⁻¹ cm⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "In an endothermic reaction, the enthalpy change (ΔH) is:",
        "question_hi": "एक ऊष्माशोषी अभिक्रिया में, एन्थैल्पी परिवर्तन (ΔH) है:",
        "options_en": ["Positive", "Negative", "Zero", "Cannot be determined"],
        "options_hi": ["धनात्मक", "ऋणात्मक", "शून्य", "निर्धारित नहीं किया जा सकता"],
        "answer_en": "Positive",
        "answer_hi": "धनात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The third law of thermodynamics deals with:",
        "question_hi": "ऊष्मागतिकी का तीसरा नियम संबंधित है:",
        "options_en": ["Conservation of energy", "Entropy", "Absolute zero", "Heat engines"],
        "options_hi": ["ऊर्जा संरक्षण", "एन्ट्रॉपी", "निरपेक्ष शून्य", "ऊष्मा इंजन"],
        "answer_en": "Absolute zero",
        "answer_hi": "निरपेक्ष शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The efficiency of a Carnot engine depends on:",
        "question_hi": "कार्नोट इंजन की दक्षता निर्भर करती है:",
        "options_en": ["Working substance", "Temperatures of source and sink", "Both A and B", "None of these"],
        "options_hi": ["कार्यकारी पदार्थ", "स्रोत और सिंक के तापमान", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Temperatures of source and sink",
        "answer_hi": "स्रोत और सिंक के तापमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The pH of a solution is 4. Its [H⁺] concentration is:",
        "question_hi": "एक विलयन का pH 4 है। इसकी [H⁺] सांद्रता है:",
        "options_en": ["10⁻⁴ M", "10⁴ M", "4 M", "0.0001 M"],
        "options_hi": ["10⁻⁴ M", "10⁴ M", "4 M", "0.0001 M"],
        "answer_en": "10⁻⁴ M",
        "answer_hi": "10⁻⁴ M",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The buffer solution maintains pH by:",
        "question_hi": "बफर विलयन pH को बनाए रखता है:",
        "options_en": ["Absorbing H⁺ ions", "Releasing H⁺ ions", "Both A and B", "None of these"],
        "options_hi": ["H⁺ आयनों को अवशोषित करके", "H⁺ आयनों को मुक्त करके", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Probability & Statistics (21-35)
    {
        "num": 21,
        "question_en": "If A and B are independent events, then P(A∩B) is:",
        "question_hi": "यदि A और B स्वतंत्र घटनाएँ हैं, तो P(A∩B) है:",
        "options_en": ["P(A) + P(B)", "P(A) - P(B)", "P(A) × P(B)", "P(A) / P(B)"],
        "options_hi": ["P(A) + P(B)", "P(A) - P(B)", "P(A) × P(B)", "P(A) / P(B)"],
        "answer_en": "P(A) × P(B)",
        "answer_hi": "P(A) × P(B)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The variance of a constant is:",
        "question_hi": "एक अचर का प्रसरण है:",
        "options_en": ["0", "1", "The constant itself", "Cannot be determined"],
        "options_hi": ["0", "1", "अचर स्वयं", "निर्धारित नहीं किया जा सकता"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "If mean of a distribution is 10 and variance is 4, then coefficient of variation is:",
        "question_hi": "यदि एक बंटन का माध्य 10 और प्रसरण 4 है, तो परिवर्तनशीलता गुणांक है:",
        "options_en": ["20%", "25%", "40%", "50%"],
        "options_hi": ["20%", "25%", "40%", "50%"],
        "answer_en": "20%",
        "answer_hi": "20%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The probability of getting a prime number when a die is thrown is:",
        "question_hi": "एक पासा फेंकने पर एक अभाज्य संख्या प्राप्त होने की प्रायिकता है:",
        "options_en": ["1/2", "1/3", "1/4", "2/3"],
        "options_hi": ["1/2", "1/3", "1/4", "2/3"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "If P(A) = 0.4, P(B) = 0.3 and P(A∩B) = 0.1, then P(A∪B) is:",
        "question_hi": "यदि P(A) = 0.4, P(B) = 0.3 और P(A∩B) = 0.1, तो P(A∪B) है:",
        "options_en": ["0.6", "0.7", "0.8", "0.9"],
        "options_hi": ["0.6", "0.7", "0.8", "0.9"],
        "answer_en": "0.6",
        "answer_hi": "0.6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The mode of the data: 2, 3, 5, 3, 4, 3, 2, 3 is:",
        "question_hi": "आँकड़ों: 2, 3, 5, 3, 4, 3, 2, 3 का बहुलक है:",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "If standard deviation of a data is 4, then its variance is:",
        "question_hi": "यदि आँकड़ों का मानक विचलन 4 है, तो इसका प्रसरण है:",
        "options_en": ["2", "4", "8", "16"],
        "options_hi": ["2", "4", "8", "16"],
        "answer_en": "16",
        "answer_hi": "16",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The probability of sure event is:",
        "question_hi": "निश्चित घटना की प्रायिकता है:",
        "options_en": ["0", "0.5", "1", "Undefined"],
        "options_hi": ["0", "0.5", "1", "अपरिभाषित"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "If two dice are thrown, the probability of getting sum 7 is:",
        "question_hi": "यदि दो पासे फेंके जाते हैं, तो योग 7 प्राप्त होने की प्रायिकता है:",
        "options_en": ["1/6", "1/12", "1/18", "1/36"],
        "options_hi": ["1/6", "1/12", "1/18", "1/36"],
        "answer_en": "1/6",
        "answer_hi": "1/6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The median of first 10 natural numbers is:",
        "question_hi": "प्रथम 10 प्राकृतिक संख्याओं की माध्यिका है:",
        "options_en": ["5", "5.5", "6", "6.5"],
        "options_hi": ["5", "5.5", "6", "6.5"],
        "answer_en": "5.5",
        "answer_hi": "5.5",
        "attempted": false,
        "selected": ""
    },

    // Biology - Human Physiology (31-45)
    {
        "num": 31,
        "question_en": "The enzyme pepsin is active in:",
        "question_hi": "एंजाइम पेप्सिन सक्रिय है:",
        "options_en": ["Mouth", "Stomach", "Small intestine", "Large intestine"],
        "options_hi": ["मुख", "आमाशय", "छोटी आंत", "बड़ी आंत"],
        "answer_en": "Stomach",
        "answer_hi": "आमाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The oxygen carrying pigment in blood is:",
        "question_hi": "रक्त में ऑक्सीजन वहन करने वाला वर्णक है:",
        "options_en": ["Haemoglobin", "Myoglobin", "Cytochrome", "Chlorophyll"],
        "options_hi": ["हीमोग्लोबिन", "मायोग्लोबिन", "साइटोक्रोम", "क्लोरोफिल"],
        "answer_en": "Haemoglobin",
        "answer_hi": "हीमोग्लोबिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The functional unit of kidney is:",
        "question_hi": "वृक्क की क्रियात्मक इकाई है:",
        "options_en": ["Neuron", "Nephron", "Alveoli", "Villi"],
        "options_hi": ["तंत्रिका कोशिका", "नेफ्रॉन", "वायुकोश", "अंकुर"],
        "answer_en": "Nephron",
        "answer_hi": "नेफ्रॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The hormone insulin is secreted by:",
        "question_hi": "हार्मोन इंसुलिन स्रावित होता है:",
        "options_en": ["Pancreas", "Liver", "Kidney", "Thyroid"],
        "options_hi": ["अग्न्याशय", "यकृत", "वृक्क", "थायराइड"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The largest artery in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी धमनी है:",
        "options_en": ["Aorta", "Pulmonary artery", "Coronary artery", "Carotid artery"],
        "options_hi": ["महाधमनी", "फुफ्फुसीय धमनी", "कोरोनरी धमनी", "कैरोटिड धमनी"],
        "answer_en": "Aorta",
        "answer_hi": "महाधमनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The vitamin synthesized in skin by sunlight is:",
        "question_hi": "सूर्य के प्रकाश द्वारा त्वचा में संश्लेषित विटामिन है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The number of chromosomes in human gametes is:",
        "question_hi": "मानव युग्मकों में गुणसूत्रों की संख्या है:",
        "options_en": ["23", "46", "48", "50"],
        "options_hi": ["23", "46", "48", "50"],
        "answer_en": "23",
        "answer_hi": "23",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The process of formation of urine involves:",
        "question_hi": "मूत्र के निर्माण की प्रक्रिया शामिल करती है:",
        "options_en": ["Filtration", "Reabsorption", "Secretion", "All of these"],
        "options_hi": ["निस्यंदन", "पुनःअवशोषण", "स्राव", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The part of brain responsible for maintaining balance is:",
        "question_hi": "मस्तिष्क का वह भाग जो संतुलन बनाए रखने के लिए जिम्मेदार है:",
        "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
        "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
        "answer_en": "Cerebellum",
        "answer_hi": "सेरेबेलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The gas exchanged during respiration in humans is:",
        "question_hi": "मानव में श्वसन के दौरान विनिमयित गैस है:",
        "options_en": ["Oxygen and carbon dioxide", "Oxygen and nitrogen", "Carbon dioxide and nitrogen", "Hydrogen and oxygen"],
        "options_hi": ["ऑक्सीजन और कार्बन डाइऑक्साइड", "ऑक्सीजन और नाइट्रोजन", "कार्बन डाइऑक्साइड और नाइट्रोजन", "हाइड्रोजन और ऑक्सीजन"],
        "answer_en": "Oxygen and carbon dioxide",
        "answer_hi": "ऑक्सीजन और कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },

    // English - Vocabulary & Comprehension (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct synonym of 'Benevolent':",
        "question_hi": "'Benevolent' का सही पर्यायवाची चुनें:",
        "options_en": ["Kind", "Cruel", "Selfish", "Greedy"],
        "options_hi": ["दयालु", "क्रूर", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Choose the correct antonym of 'Ancient':",
        "question_hi": "'Ancient' का सही विलोम चुनें:",
        "options_en": ["Old", "Modern", "Historical", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Identify the correctly spelled word:",
        "question_hi": "सही वर्तनी वाला शब्द पहचानें:",
        "options_en": ["Accommodation", "Acommodation", "Accomodation", "Acomodation"],
        "options_hi": ["Accommodation", "Acommodation", "Accomodation", "Acomodation"],
        "answer_en": "Accommodation",
        "answer_hi": "Accommodation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Choose the correct meaning of 'Philanthropist':",
        "question_hi": "'Philanthropist' का सही अर्थ चुनें:",
        "options_en": ["One who hates mankind", "One who loves mankind", "One who fears mankind", "One who ignores mankind"],
        "options_hi": ["जो मानवजाति से घृणा करता है", "जो मानवजाति से प्रेम करता है", "जो मानवजाति से डरता है", "जो मानवजाति को अनदेखा करता है"],
        "answer_en": "One who loves mankind",
        "answer_hi": "जो मानवजाति से प्रेम करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Identify the part of speech for 'Quickly':",
        "question_hi": "'Quickly' के भाषण का भाग पहचानें:",
        "options_en": ["Noun", "Verb", "Adjective", "Adverb"],
        "options_hi": ["संज्ञा", "क्रिया", "विशेषण", "क्रिया विशेषण"],
        "answer_en": "Adverb",
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },

    // Hindi - Vocabulary & Grammar (46-55)
    {
        "num": 46,
        "question_en": "'जल्दबाजी' का सही विलोम शब्द है:",
        "question_hi": "'जल्दबाजी' का सही विलोम शब्द है:",
        "options_en": ["धीमापन", "सावधानी", "विलंब", "शांति"],
        "options_hi": ["धीमापन", "सावधानी", "विलंब", "शांति"],
        "answer_en": "विलंब",
        "answer_hi": "विलंब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "'सूर्य + उदय' का सही संधि रूप है:",
        "question_hi": "'सूर्य + उदय' का सही संधि रूप है:",
        "options_en": ["सूर्योदय", "सूर्युदय", "सूर्यउदय", "सूर्यउदय"],
        "options_hi": ["सूर्योदय", "सूर्युदय", "सूर्यउदय", "सूर्यउदय"],
        "answer_en": "सूर्योदय",
        "answer_hi": "सूर्योदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "'वह पुस्तक पढ़ रहा है' वाक्य में क्रिया का प्रकार है:",
        "question_hi": "'वह पुस्तक पढ़ रहा है' वाक्य में क्रिया का प्रकार है:",
        "options_en": ["सकर्मक", "अकर्मक", "प्रेरणार्थक", "पूर्वकालिक"],
        "options_hi": ["सकर्मक", "अकर्मक", "प्रेरणार्थक", "पूर्वकालिक"],
        "answer_en": "सकर्मक",
        "answer_hi": "सकर्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "'अंधकार' का सही पर्यायवाची शब्द है:",
        "question_hi": "'अंधकार' का सही पर्यायवाची शब्द है:",
        "options_en": ["प्रकाश", "तिमिर", "दीपक", "चाँद"],
        "options_hi": ["प्रकाश", "तिमिर", "दीपक", "चाँद"],
        "answer_en": "तिमिर",
        "answer_hi": "तिमिर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "'मैं स्कूल जाता हूँ' वाक्य में काल है:",
        "question_hi": "'मैं स्कूल जाता हूँ' वाक्य में काल है:",
        "options_en": ["वर्तमान", "भूत", "भविष्य", "संदिग्ध"],
        "options_hi": ["वर्तमान", "भूत", "भविष्य", "संदिग्ध"],
        "answer_en": "वर्तमान",
        "answer_hi": "वर्तमान",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - India & World (51-65)
    {
        "num": 51,
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
        "num": 52,
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
        "num": 53,
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
        "num": 54,
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
        "num": 55,
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
        "num": 56,
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
        "num": 57,
        "question_en": "The first computer programmer was:",
        "question_hi": "पहली कंप्यूटर प्रोग्रामर थीं:",
        "options_en": ["Ada Lovelace", "Charles Babbage", "Alan Turing", "Bill Gates"],
        "options_hi": ["एडा लवलेस", "चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स"],
        "answer_en": "Ada Lovelace",
        "answer_hi": "एडा लवलेस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
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
        "num": 59,
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
        "num": 60,
        "question_en": "The first Indian to win Nobel Prize was:",
        "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Hargobind Khorana"],
        "options_hi": ["सी.वी. रमन", "रबींद्रनाथ टैगोर", "मदर टेरेसा", "हरगोबिंद खुराना"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (66-85)
    {
        "num": 61,
        "question_en": "The dimensional formula of force is:",
        "question_hi": "बल का विमीय सूत्र है:",
        "options_en": ["MLT⁻²", "MLT⁻¹", "ML²T⁻²", "ML²T⁻¹"],
        "options_hi": ["MLT⁻²", "MLT⁻¹", "ML²T⁻²", "ML²T⁻¹"],
        "answer_en": "MLT⁻²",
        "answer_hi": "MLT⁻²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
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
        "num": 63,
        "question_en": "The value of ∫(0 to π/2) cosx dx is:",
        "question_hi": "∫(0 से π/2) cosx dx का मान है:",
        "options_en": ["0", "1", "-1", "π/2"],
        "options_hi": ["0", "1", "-1", "π/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
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
        "num": 65,
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
        "num": 66,
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
        "num": 67,
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
        "num": 68,
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
        "num": 69,
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
        "num": 70,
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
        "num": 71,
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
        "num": 72,
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
        "num": 73,
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
        "num": 74,
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
        "num": 75,
        "question_en": "The value of ∫(a^x dx) is:",
        "question_hi": "∫(a^x dx) का मान है:",
        "options_en": ["a^x + C", "a^x/loga + C", "xa^x + C", "a^x/x + C"],
        "options_hi": ["a^x + C", "a^x/loga + C", "xa^x + C", "a^x/x + C"],
        "answer_en": "a^x/loga + C",
        "answer_hi": "a^x/loga + C",
        "attempted": false,
        "selected": ""
    },

    // Final Questions (76-100)
    {
        "num": 76,
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
        "num": 77,
        "question_en": "The process of cell division is called:",
        "question_hi": "कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Both", "None"],
        "options_hi": ["माइटोसिस", "मियोसिस", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The chemical formula of water is:",
        "question_hi": "पानी का रासायनिक सूत्र है:",
        "options_en": ["H2O", "HO2", "H2O2", "H3O"],
        "options_hi": ["H2O", "HO2", "H2O2", "H3O"],
        "answer_en": "H2O",
        "answer_hi": "H2O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
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
        "num": 80,
        "question_en": "The speed of light is approximately:",
        "question_hi": "प्रकाश की गति लगभग है:",
        "options_en": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10¹⁰ m/s"],
        "options_hi": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10¹⁰ m/s"],
        "answer_en": "3×10⁸ m/s",
        "answer_hi": "3×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
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
        "num": 82,
        "question_en": "The largest state in India by area is:",
        "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य है:",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which is the smallest prime number?",
        "question_hi": "सबसे छोटी अभाज्य संख्या कौन सी है?",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The human body has how many bones?",
        "question_hi": "मानव शरीर में कितनी हड्डियाँ होती हैं?",
        "options_en": ["206", "300", "150", "250"],
        "options_hi": ["206", "300", "150", "250"],
        "answer_en": "206",
        "answer_hi": "206",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which is the national animal of India?",
        "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Lion", "Elephant", "Tiger", "Peacock"],
        "options_hi": ["शेर", "हाथी", "बाघ", "मोर"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The value of π is approximately:",
        "question_hi": "π का मान लगभग है:",
        "options_en": ["3.14", "3.41", "22/7", "Both A and C"],
        "options_hi": ["3.14", "3.41", "22/7", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
        "question_en": "The largest mammal in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा स्तनपायी है:",
        "options_en": ["Elephant", "Giraffe", "Blue Whale", "Polar Bear"],
        "options_hi": ["हाथी", "जिराफ", "ब्लू व्हेल", "ध्रुवीय भालू"],
        "answer_en": "Blue Whale",
        "answer_hi": "ब्लू व्हेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Iron", "Mercury", "Gold", "Silver"],
        "options_hi": ["लोहा", "पारा", "सोना", "चांदी"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The study of plants is called:",
        "question_hi": "पौधों के अध्ययन को कहा जाता है:",
        "options_en": ["Zoology", "Botany", "Biology", "Ecology"],
        "options_hi": ["जूलॉजी", "बॉटनी", "बायोलॉजी", "इकोलॉजी"],
        "answer_en": "Botany",
        "answer_hi": "बॉटनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which is the hardest substance in human body?",
        "question_hi": "मानव शरीर में सबसे कठोर पदार्थ कौन सा है?",
        "options_en": ["Bone", "Tooth enamel", "Nail", "Hair"],
        "options_hi": ["हड्डी", "दंत तामचीनी", "नाखून", "बाल"],
        "answer_en": "Tooth enamel",
        "answer_hi": "दंत तामचीनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The number of players in a cricket team is:",
        "question_hi": "क्रिकेट टीम में खिलाड़ियों की संख्या होती है:",
        "options_en": ["9", "10", "11", "12"],
        "options_hi": ["9", "10", "11", "12"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The SI unit of temperature is:",
        "question_hi": "तापमान की SI इकाई है:",
        "options_en": ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
        "options_hi": ["सेल्सियस", "फारेनहाइट", "केल्विन", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which is the largest internal organ in human body?",
        "question_hi": "मानव शरीर का सबसे बड़ा आंतरिक अंग कौन सा है?",
        "options_en": ["Heart", "Liver", "Lungs", "Brain"],
        "options_hi": ["हृदय", "यकृत", "फेफड़े", "मस्तिष्क"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
        "question_en": "Which vitamin is produced in human body by sunlight?",
        "question_hi": "सूर्य के प्रकाश से मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The number of sides in a hexagon is:",
        "question_hi": "षट्भुज में भुजाओं की संख्या होती है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which is the national flower of India?",
        "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
        "options_en": ["Rose", "Lotus", "Sunflower", "Marigold"],
        "options_hi": ["गुलाब", "कमल", "सूरजमुखी", "गेंदा"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The chemical symbol for iron is:",
        "question_hi": "लोहे का रासायनिक प्रतीक है:",
        "options_en": ["Ir", "Fe", "In", "Au"],
        "options_hi": ["Ir", "Fe", "In", "Au"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
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