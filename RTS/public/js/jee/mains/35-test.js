const questions = [
    // Physics - Optics & Waves (1-10)
    {
        "num": 1,
        "question_en": "The phenomenon of splitting of white light into its constituent colors is called:",
        "question_hi": "सफेद प्रकाश का उसके घटक रंगों में विभाजन की घटना कहलाती है:",
        "options_en": ["Reflection", "Refraction", "Dispersion", "Interference"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विक्षेपण", "व्यतिकरण"],
        "answer_en": "Dispersion",
        "answer_hi": "विक्षेपण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "In Young's double slit experiment, if the distance between slits is halved, the fringe width becomes:",
        "question_hi": "यंग के द्वि-छिद्र प्रयोग में, यदि छिद्रों के बीच की दूरी आधी कर दी जाए, तो फ्रिंज चौड़ाई हो जाती है:",
        "options_en": ["Half", "Double", "Four times", "Same"],
        "options_hi": ["आधी", "दोगुनी", "चार गुनी", "समान"],
        "answer_en": "Double",
        "answer_hi": "दोगुनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
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
        "num": 4,
        "question_en": "A convex lens of focal length 20cm forms a real image at 40cm from the lens. The object distance is:",
        "question_hi": "20cm फोकस दूरी का उत्तल लेंस लेंस से 40cm पर वास्तविक प्रतिबिंब बनाता है। वस्तु दूरी है:",
        "options_en": ["20cm", "30cm", "40cm", "60cm"],
        "options_hi": ["20cm", "30cm", "40cm", "60cm"],
        "answer_en": "40cm",
        "answer_hi": "40cm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The speed of light in vacuum is 3×10⁸ m/s. In a medium of refractive index 1.5, its speed is:",
        "question_hi": "निर्वात में प्रकाश की गति 3×10⁸ m/s है। 1.5 अपवर्तनांक के माध्यम में, इसकी गति है:",
        "options_en": ["1.5×10⁸ m/s", "2×10⁸ m/s", "3×10⁸ m/s", "4.5×10⁸ m/s"],
        "options_hi": ["1.5×10⁸ m/s", "2×10⁸ m/s", "3×10⁸ m/s", "4.5×10⁸ m/s"],
        "answer_en": "2×10⁸ m/s",
        "answer_hi": "2×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In a stationary wave, the distance between two consecutive nodes is:",
        "question_hi": "स्थिर तरंग में, दो क्रमागत निस्पंदों के बीच की दूरी है:",
        "options_en": ["λ/2", "λ/4", "λ", "2λ"],
        "options_hi": ["λ/2", "λ/4", "λ", "2λ"],
        "answer_en": "λ/2",
        "answer_hi": "λ/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The phenomenon of bending of waves around obstacles is called:",
        "question_hi": "बाधाओं के चारों ओर तरंगों के मुड़ने की घटना कहलाती है:",
        "options_en": ["Reflection", "Refraction", "Diffraction", "Interference"],
        "options_hi": ["परावर्तन", "अपवर्तन", "विवर्तन", "व्यतिकरण"],
        "answer_en": "Diffraction",
        "answer_hi": "विवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "A sound wave has frequency 1000 Hz and wavelength 0.33m. The speed of sound is:",
        "question_hi": "एक ध्वनि तरंग की आवृत्ति 1000 Hz और तरंगदैर्ध्य 0.33m है। ध्वनि की गति है:",
        "options_en": ["330 m/s", "660 m/s", "990 m/s", "1320 m/s"],
        "options_hi": ["330 m/s", "660 m/s", "990 m/s", "1320 m/s"],
        "answer_en": "330 m/s",
        "answer_hi": "330 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The power of a lens is +2D. Its focal length is:",
        "question_hi": "एक लेंस की क्षमता +2D है। इसकी फोकस दूरी है:",
        "options_en": ["+0.5m", "+2m", "-0.5m", "-2m"],
        "options_hi": ["+0.5m", "+2m", "-0.5m", "-2m"],
        "answer_en": "+0.5m",
        "answer_hi": "+0.5m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In Doppler effect, the apparent frequency increases when:",
        "question_hi": "डॉप्लर प्रभाव में, आभासी आवृत्ति बढ़ती है जब:",
        "options_en": ["Source moves towards observer", "Source moves away from observer", "Observer moves away from source", "Both move away from each other"],
        "options_hi": ["स्रोत प्रेक्षक की ओर गति करता है", "स्रोत प्रेक्षक से दूर गति करता है", "प्रेक्षक स्रोत से दूर गति करता है", "दोनों एक दूसरे से दूर गति करते हैं"],
        "answer_en": "Source moves towards observer",
        "answer_hi": "स्रोत प्रेक्षक की ओर गति करता है",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Inorganic Chemistry (11-20)
    {
        "num": 11,
        "question_en": "Which of the following is not a transition element?",
        "question_hi": "निम्नलिखित में से कौन संक्रमण तत्व नहीं है?",
        "options_en": ["Copper", "Zinc", "Iron", "Chromium"],
        "options_hi": ["तांबा", "जस्ता", "लोहा", "क्रोमियम"],
        "answer_en": "Zinc",
        "answer_hi": "जस्ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The lanthanide contraction is due to:",
        "question_hi": "लैन्थेनाइड संकुचन का कारण है:",
        "options_en": ["Poor shielding by 4f electrons", "Poor shielding by 5f electrons", "Large size of f-orbitals", "High nuclear charge"],
        "options_hi": ["4f इलेक्ट्रॉनों द्वारा खराब परिरक्षण", "5f इलेक्ट्रॉनों द्वारा खराब परिरक्षण", "f-कक्षकों का बड़ा आकार", "उच्च नाभिकीय आवेश"],
        "answer_en": "Poor shielding by 4f electrons",
        "answer_hi": "4f इलेक्ट्रॉनों द्वारा खराब परिरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which of the following is an amphoteric oxide?",
        "question_hi": "निम्नलिखित में से कौन उभयधर्मी ऑक्साइड है?",
        "options_en": ["Na₂O", "MgO", "Al₂O₃", "SO₂"],
        "options_hi": ["Na₂O", "MgO", "Al₂O₃", "SO₂"],
        "answer_en": "Al₂O₃",
        "answer_hi": "Al₂O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The oxidation state of chromium in K₂Cr₂O₇ is:",
        "question_hi": "K₂Cr₂O₇ में क्रोमियम की ऑक्सीकरण अवस्था है:",
        "options_en": ["+3", "+5", "+6", "+7"],
        "options_hi": ["+3", "+5", "+6", "+7"],
        "answer_en": "+6",
        "answer_hi": "+6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which of the following is not an ore of aluminium?",
        "question_hi": "निम्नलिखित में से कौन एल्युमिनियम का अयस्क नहीं है?",
        "options_en": ["Bauxite", "Cryolite", "Corundum", "Galena"],
        "options_hi": ["बॉक्साइट", "क्रायोलाइट", "कुरुन्दुम", "गैलेना"],
        "answer_en": "Galena",
        "answer_hi": "गैलेना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
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
        "num": 17,
        "question_en": "Which of the following is a noble gas?",
        "question_hi": "निम्नलिखित में से कौन अक्रिय गैस है?",
        "options_en": ["Nitrogen", "Oxygen", "Argon", "Chlorine"],
        "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "आर्गन", "क्लोरीन"],
        "answer_en": "Argon",
        "answer_hi": "आर्गन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The coordination number in NaCl crystal is:",
        "question_hi": "NaCl क्रिस्टल में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which of the following shows maximum paramagnetism?",
        "question_hi": "निम्नलिखित में से कौन अधिकतम अनुचुंबकत्व दर्शाता है?",
        "options_en": ["Cr³⁺", "Fe²⁺", "Cu²⁺", "Zn²⁺"],
        "options_hi": ["Cr³⁺", "Fe²⁺", "Cu²⁺", "Zn²⁺"],
        "answer_en": "Fe²⁺",
        "answer_hi": "Fe²⁺",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The compound used in Wilson's cloud chamber is:",
        "question_hi": "विल्सन के क्लाउड चैम्बर में प्रयुक्त यौगिक है:",
        "options_en": ["Alcohol", "Ether", "Water", "Ammonia"],
        "options_hi": ["अल्कोहल", "ईथर", "जल", "अमोनिया"],
        "answer_en": "Alcohol",
        "answer_hi": "अल्कोहल",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Algebra (21-30)
    {
        "num": 21,
        "question_en": "The roots of the equation x² - 5x + 6 = 0 are:",
        "question_hi": "समीकरण x² - 5x + 6 = 0 के मूल हैं:",
        "options_en": ["2,3", "1,6", "-2,-3", "-1,-6"],
        "options_hi": ["2,3", "1,6", "-2,-3", "-1,-6"],
        "answer_en": "2,3",
        "answer_hi": "2,3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
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
        "num": 23,
        "question_en": "If A = {1,2,3} and B = {2,3,4}, then A∩B is:",
        "question_hi": "यदि A = {1,2,3} और B = {2,3,4}, तो A∩B है:",
        "options_en": ["{1,2}", "{2,3}", "{3,4}", "{1,4}"],
        "options_hi": ["{1,2}", "{2,3}", "{3,4}", "{1,4}"],
        "answer_en": "{2,3}",
        "answer_hi": "{2,3}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The value of log₁₀100 is:",
        "question_hi": "log₁₀100 का मान है:",
        "options_en": ["1", "2", "10", "100"],
        "options_hi": ["1", "2", "10", "100"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The number of terms in the expansion of (a+b)ⁿ is:",
        "question_hi": "(a+b)ⁿ के विस्तार में पदों की संख्या है:",
        "options_en": ["n", "n+1", "n-1", "2n"],
        "options_hi": ["n", "n+1", "n-1", "2n"],
        "answer_en": "n+1",
        "answer_hi": "n+1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "If a, b, c are in AP, then:",
        "question_hi": "यदि a, b, c समांतर श्रेणी में हैं, तो:",
        "options_en": ["2b = a + c", "b² = ac", "2/b = 1/a + 1/c", "b = (a+c)/2"],
        "options_hi": ["2b = a + c", "b² = ac", "2/b = 1/a + 1/c", "b = (a+c)/2"],
        "answer_en": "2b = a + c",
        "answer_hi": "2b = a + c",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The solution of 2x + 3 = 7 is:",
        "question_hi": "2x + 3 = 7 का हल है:",
        "options_en": ["x = 1", "x = 2", "x = 3", "x = 4"],
        "options_hi": ["x = 1", "x = 2", "x = 3", "x = 4"],
        "answer_en": "x = 2",
        "answer_hi": "x = 2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The value of i² is:",
        "question_hi": "i² का मान है:",
        "options_en": ["1", "-1", "i", "-i"],
        "options_hi": ["1", "-1", "i", "-i"],
        "answer_en": "-1",
        "answer_hi": "-1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The number of diagonals in a pentagon is:",
        "question_hi": "एक पंचभुज में विकर्णों की संख्या है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The probability of getting a head in single toss of a fair coin is:",
        "question_hi": "एक निष्पक्ष सिक्के के एक उछाल में हेड आने की प्रायिकता है:",
        "options_en": ["0", "1/4", "1/2", "1"],
        "options_hi": ["0", "1/4", "1/2", "1"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },

    // Biology - Ecology & Environment (31-40)
    {
        "num": 31,
        "question_en": "The ultimate source of energy for all ecosystems is:",
        "question_hi": "सभी पारिस्थितिकी तंत्रों के लिए ऊर्जा का अंतिम स्रोत है:",
        "options_en": ["Plants", "Sun", "Water", "Soil"],
        "options_hi": ["पौधे", "सूर्य", "जल", "मिट्टी"],
        "answer_en": "Sun",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The process of nitrogen fixation is carried out by:",
        "question_hi": "नाइट्रोजन स्थिरीकरण की प्रक्रिया संपन्न की जाती है:",
        "options_en": ["Plants", "Animals", "Bacteria", "Fungi"],
        "options_hi": ["पौधे", "जानवर", "जीवाणु", "कवक"],
        "answer_en": "Bacteria",
        "answer_hi": "जीवाणु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The greenhouse gas with maximum global warming potential is:",
        "question_hi": "अधिकतम ग्लोबल वार्मिंग क्षमता वाली ग्रीनहाउस गैस है:",
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
        "question_en": "The phenomenon of increase in concentration of pollutants at successive trophic levels is called:",
        "question_hi": "क्रमिक पोषी स्तरों पर प्रदूषकों की सांद्रता में वृद्धि की घटना कहलाती है:",
        "options_en": ["Eutrophication", "Biomagnification", "Bioaccumulation", "Pollution"],
        "options_hi": ["यूट्रोफिकेशन", "बायोमैग्निफिकेशन", "बायोएक्यूमुलेशन", "प्रदूषण"],
        "answer_en": "Biomagnification",
        "answer_hi": "बायोमैग्निफिकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The Montreal Protocol is related to:",
        "question_hi": "मॉन्ट्रियल प्रोटोकॉल संबंधित है:",
        "options_en": ["Climate change", "Ozone depletion", "Biodiversity", "Desertification"],
        "options_hi": ["जलवायु परिवर्तन", "ओजोन क्षरण", "जैव विविधता", "मरुस्थलीकरण"],
        "answer_en": "Ozone depletion",
        "answer_hi": "ओजोन क्षरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The most abundant gas in atmosphere is:",
        "question_hi": "वायुमंडल में सबसे अधिक मात्रा में गैस है:",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Argon"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The Chipko movement was started to protect:",
        "question_hi": "चिपको आंदोलन शुरू किया गया था:",
        "options_en": ["Wildlife", "Forests", "Water", "Soil"],
        "options_hi": ["वन्यजीव", "वन", "जल", "मिट्टी"],
        "answer_en": "Forests",
        "answer_hi": "वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The term 'biodiversity' refers to:",
        "question_hi": "शब्द 'जैव विविधता' संदर्भित करता है:",
        "options_en": ["Variety of plants", "Variety of animals", "Variety of ecosystems", "All of these"],
        "options_hi": ["पौधों की विविधता", "जानवरों की विविधता", "पारिस्थितिकी तंत्र की विविधता", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The process of water cycle is driven by:",
        "question_hi": "जल चक्र की प्रक्रिया संचालित होती है:",
        "options_en": ["Wind", "Sun", "Moon", "Gravity"],
        "options_hi": ["हवा", "सूर्य", "चंद्रमा", "गुरुत्वाकर्षण"],
        "answer_en": "Sun",
        "answer_hi": "सूर्य",
        "attempted": false,
        "selected": ""
    },

    // English - Advanced Grammar (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct passive voice: 'They are building a new bridge.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'They are building a new bridge.'",
        "options_en": ["A new bridge is built by them", "A new bridge is being built by them", "A new bridge was built by them", "A new bridge has been built by them"],
        "options_hi": ["A new bridge is built by them", "A new bridge is being built by them", "A new bridge was built by them", "A new bridge has been built by them"],
        "answer_en": "A new bridge is being built by them",
        "answer_hi": "A new bridge is being built by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Identify the type of clause: 'I know that he is honest.'",
        "question_hi": "उपवाक्य का प्रकार पहचानें: 'I know that he is honest.'",
        "options_en": ["Adjective clause", "Adverb clause", "Noun clause", "Relative clause"],
        "options_hi": ["विशेषण उपवाक्य", "क्रिया विशेषण उपवाक्य", "संज्ञा उपवाक्य", "संबंधसूचक उपवाक्य"],
        "answer_en": "Noun clause",
        "answer_hi": "संज्ञा उपवाक्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Choose the correct indirect speech: 'He said, \"I am tired.\"'",
        "question_hi": "सही अप्रत्यक्ष कथन चुनें: 'He said, \"I am tired.\"'",
        "options_en": ["He said that he is tired", "He said that he was tired", "He said that I am tired", "He said that I was tired"],
        "options_hi": ["He said that he is tired", "He said that he was tired", "He said that I am tired", "He said that I was tired"],
        "answer_en": "He said that he was tired",
        "answer_hi": "He said that he was tired",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Identify the figure of speech: 'The stars danced in the sky.'",
        "question_hi": "अलंकार पहचानें: 'The stars danced in the sky.'",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Choose the correct question tag: 'Let's go, ___?'",
        "question_hi": "सही प्रश्न टैग चुनें: 'Let's go, ___?'",
        "options_en": ["shall we", "will we", "should we", "can we"],
        "options_hi": ["shall we", "will we", "should we", "can we"],
        "answer_en": "shall we",
        "answer_hi": "shall we",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Identify the type of phrase: 'Running fast, he won the race.'",
        "question_hi": "पदबंध का प्रकार पहचानें: 'Running fast, he won the race.'",
        "options_en": ["Noun phrase", "Verb phrase", "Adjective phrase", "Adverb phrase"],
        "options_hi": ["संज्ञा पदबंध", "क्रिया पदबंध", "विशेषण पदबंध", "क्रिया विशेषण पदबंध"],
        "answer_en": "Adverb phrase",
        "answer_hi": "क्रिया विशेषण पदबंध",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the correct degree: 'This is the ___ book I have ever read.'",
        "question_hi": "सही डिग्री चुनें: 'This is the ___ book I have ever read.'",
        "options_en": ["good", "better", "best", "well"],
        "options_hi": ["good", "better", "best", "well"],
        "answer_en": "best",
        "answer_hi": "best",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Identify the mood: 'If I were you, I would study harder.'",
        "question_hi": "मूड पहचानें: 'If I were you, I would study harder.'",
        "options_en": ["Indicative", "Imperative", "Subjunctive", "Conditional"],
        "options_hi": ["विधानसूचक", "आदेशसूचक", "संभावनासूचक", "शर्तसूचक"],
        "answer_en": "Subjunctive",
        "answer_hi": "संभावनासूचक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Choose the correct conjunction: 'He is poor ___ he is honest.'",
        "question_hi": "सही संयोजक चुनें: 'He is poor ___ he is honest.'",
        "options_en": ["and", "but", "or", "so"],
        "options_hi": ["and", "but", "or", "so"],
        "answer_en": "but",
        "answer_hi": "but",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Identify the voice: 'The cake was eaten by the children.'",
        "question_hi": "वाच्य पहचानें: 'The cake was eaten by the children.'",
        "options_en": ["Active voice", "Passive voice", "Middle voice", "Reflexive voice"],
        "options_hi": ["कर्तृवाच्य", "कर्मवाच्य", "मध्यवाच्य", "निजवाच्य"],
        "answer_en": "Passive voice",
        "answer_hi": "कर्मवाच्य",
        "attempted": false,
        "selected": ""
    },

    // Hindi - Advanced Grammar & Literature (51-60)
    {
        "num": 51,
        "question_en": "'कामायनी' के रचयिता हैं:",
        "question_hi": "'कामायनी' के रचयिता हैं:",
        "options_en": ["जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी निराला", "महादेवी वर्मा", "सुमित्रानंदन पंत"],
        "options_hi": ["जयशंकर प्रसाद", "सूर्यकांत त्रिपाठी निराला", "महादेवी वर्मा", "सुमित्रानंदन पंत"],
        "answer_en": "जयशंकर प्रसाद",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'अशुद्ध शब्द पहचानें:'",
        "question_hi": "'अशुद्ध शब्द पहचानें:'",
        "options_en": ["व्याकरण", "व्यवहार", "व्यवस्थापन", "व्यवस्था"],
        "options_hi": ["व्याकरण", "व्यवहार", "व्यवस्थापन", "व्यवस्था"],
        "answer_en": "व्यवस्थापन",
        "answer_hi": "व्यवस्थापन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'गलत वर्तनी वाला शब्द है:'",
        "question_hi": "'गलत वर्तनी वाला शब्द है:'",
        "options_en": ["अनुशासन", "अनुशासन", "अनुसाशन", "अनुशासन"],
        "options_hi": ["अनुशासन", "अनुशासन", "अनुसाशन", "अनुशासन"],
        "answer_en": "अनुसाशन",
        "answer_hi": "अनुसाशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "'निम्नलिखित में से कौन सा शब्द तत्सम है?'",
        "question_hi": "'निम्नलिखित में से कौन सा शब्द तत्सम है?'",
        "options_en": ["आग", "अग्नि", "आंच", "लपट"],
        "options_hi": ["आग", "अग्नि", "आंच", "लपट"],
        "answer_en": "अग्नि",
        "answer_hi": "अग्नि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'मैंने उसे पुस्तक दी।' इस वाक्य में 'उसे' क्या है?'",
        "question_hi": "'मैंने उसे पुस्तक दी।' इस वाक्य में 'उसे' क्या है?'",
        "options_en": ["कर्ता", "कर्म", "संप्रदान", "अपादान"],
        "options_hi": ["कर्ता", "कर्म", "संप्रदान", "अपादान"],
        "answer_en": "संप्रदान",
        "answer_hi": "संप्रदान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'निम्नलिखित में से कौन सा समास विग्रह सही है?'",
        "question_hi": "'निम्नलिखित में से कौन सा समास विग्रह सही है?'",
        "options_en": ["रसोईघर = रसोई का घर", "चौराहा = चार राहों का समाहार", "पीताम्बर = पीला है अम्बर जिसका", "यथाशक्ति = शक्ति के अनुसार"],
        "options_hi": ["रसोईघर = रसोई का घर", "चौराहा = चार राहों का समाहार", "पीताम्बर = पीला है अम्बर जिसका", "यथाशक्ति = शक्ति के अनुसार"],
        "answer_en": "यथाशक्ति = शक्ति के अनुसार",
        "answer_hi": "यथाशक्ति = शक्ति के अनुसार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'निम्नलिखित में से कौन सा अशुद्ध वाक्य है?'",
        "question_hi": "'निम्नलिखित में से कौन सा अशुद्ध वाक्य है?'",
        "options_en": ["वह पढ़ता है", "वह पढ़ती है", "वह पढ़ते है", "वह पढ़ रहा है"],
        "options_hi": ["वह पढ़ता है", "वह पढ़ती है", "वह पढ़ते है", "वह पढ़ रहा है"],
        "answer_en": "वह पढ़ते है",
        "answer_hi": "वह पढ़ते है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'निम्नलिखित में से कौन सा शब्द यौगिक क्रिया का उदाहरण है?'",
        "question_hi": "'निम्नलिखित में से कौन सा शब्द यौगिक क्रिया का उदाहरण है?'",
        "options_en": ["पढ़ना", "पढ़ लेना", "पढ़ता", "पढ़ाया"],
        "options_hi": ["पढ़ना", "पढ़ लेना", "पढ़ता", "पढ़ाया"],
        "answer_en": "पढ़ लेना",
        "answer_hi": "पढ़ लेना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'निम्नलिखित में से कौन सा शब्द संधि का उदाहरण नहीं है?'",
        "question_hi": "'निम्नलिखित में से कौन सा शब्द संधि का उदाहरण नहीं है?'",
        "options_en": ["विद्यालय", "परोपकार", "सदैव", "मनोहर"],
        "options_hi": ["विद्यालय", "परोपकार", "सदैव", "मनोहर"],
        "answer_en": "मनोहर",
        "answer_hi": "मनोहर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'निम्नलिखित में से कौन सा रस का उदाहरण है?'",
        "question_hi": "'निम्नलिखित में से कौन सा रस का उदाहरण है?'",
        "options_en": ["श्रृंगार रस", "वीर रस", "करुण रस", "उपरोक्त सभी"],
        "options_hi": ["श्रृंगार रस", "वीर रस", "करुण रस", "उपरोक्त सभी"],
        "answer_en": "उपरोक्त सभी",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (61-70)
    {
        "num": 61,
        "question_en": "The first Indian satellite was launched in:",
        "question_hi": "पहला भारतीय उपग्रह लॉन्च किया गया था:",
        "options_en": ["1972", "1975", "1980", "1985"],
        "options_hi": ["1972", "1975", "1980", "1985"],
        "answer_en": "1975",
        "answer_hi": "1975",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The inventor of telephone was:",
        "question_hi": "टेलीफोन के आविष्कारक थे:",
        "options_en": ["Thomas Edison", "Alexander Graham Bell", "Guglielmo Marconi", "James Watt"],
        "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "गुग्लिल्मो मार्कोनी", "जेम्स वाट"],
        "answer_en": "Alexander Graham Bell",
        "answer_hi": "अलेक्जेंडर ग्राहम बेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The chemical used in making artificial rain is:",
        "question_hi": "कृत्रिम वर्षा बनाने में प्रयुक्त रसायन है:",
        "options_en": ["Silver iodide", "Potassium iodide", "Sodium chloride", "Calcium carbonate"],
        "options_hi": ["सिल्वर आयोडाइड", "पोटैशियम आयोडाइड", "सोडियम क्लोराइड", "कैल्शियम कार्बोनेट"],
        "answer_en": "Silver iodide",
        "answer_hi": "सिल्वर आयोडाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The device used to measure earthquake intensity is:",
        "question_hi": "भूकंप की तीव्रता मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Seismograph", "Barometer", "Hygrometer", "Anemometer"],
        "options_hi": ["सिस्मोग्राफ", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Seismograph",
        "answer_hi": "सिस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The first computer virus was created in:",
        "question_hi": "पहला कंप्यूटर वायरस बनाया गया था:",
        "options_en": ["1970", "1980", "1990", "2000"],
        "options_hi": ["1970", "1980", "1990", "2000"],
        "answer_en": "1980",
        "answer_hi": "1980",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The founder of Microsoft is:",
        "question_hi": "माइक्रोसॉफ्ट के संस्थापक हैं:",
        "options_en": ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Larry Page"],
        "options_hi": ["स्टीव जॉब्स", "बिल गेट्स", "मार्क जुकरबर्ग", "लैरी पेज"],
        "answer_en": "Bill Gates",
        "answer_hi": "बिल गेट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The gas used in advertising signs is:",
        "question_hi": "विज्ञापन साइनों में प्रयुक्त गैस है:",
        "options_en": ["Helium", "Neon", "Argon", "Xenon"],
        "options_hi": ["हीलियम", "नियॉन", "आर्गन", "जीनॉन"],
        "answer_en": "Neon",
        "answer_hi": "नियॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The study of coins is called:",
        "question_hi": "सिक्कों का अध्ययन कहलाता है:",
        "options_en": ["Numismatics", "Philately", "Archaeology", "Epigraphy"],
        "options_hi": ["न्यूमिस्मेटिक्स", "फिलेटली", "पुरातत्व", "एपिग्राफी"],
        "answer_en": "Numismatics",
        "answer_hi": "न्यूमिस्मेटिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The first nuclear reactor in India was established at:",
        "question_hi": "भारत में पहला नाभिकीय रिएक्टर स्थापित किया गया था:",
        "options_en": ["Trombay", "Kalpakkam", "Narora", "Tarapur"],
        "options_hi": ["ट्रॉम्बे", "कलपक्कम", "नरोरा", "तारापुर"],
        "answer_en": "Trombay",
        "answer_hi": "ट्रॉम्बे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The inventor of penicillin was:",
        "question_hi": "पेनिसिलिन के आविष्कारक थे:",
        "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Joseph Lister"],
        "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "जोसेफ लिस्टर"],
        "answer_en": "Alexander Fleming",
        "answer_hi": "अलेक्जेंडर फ्लेमिंग",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-90)
    {
        "num": 71,
        "question_en": "The dimensional formula of Planck's constant is:",
        "question_hi": "प्लैंक स्थिरांक का विमीय सूत्र है:",
        "options_en": ["ML²T⁻¹", "MLT⁻¹", "ML²T⁻²", "MLT⁻²"],
        "options_hi": ["ML²T⁻¹", "MLT⁻¹", "ML²T⁻²", "MLT⁻²"],
        "answer_en": "ML²T⁻¹",
        "answer_hi": "ML²T⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The IUPAC name of CH₃COCH₃ is:",
        "question_hi": "CH₃COCH₃ का IUPAC नाम है:",
        "options_en": ["Acetone", "Propanone", "Dimethyl ketone", "All of these"],
        "options_hi": ["एसीटोन", "प्रोपेनोन", "डाइमेथिल कीटोन", "उपरोक्त सभी"],
        "answer_en": "Propanone",
        "answer_hi": "प्रोपेनोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of ∫(1/(x lnx)) dx is:",
        "question_hi": "∫(1/(x lnx)) dx का मान है:",
        "options_en": ["ln(lnx) + C", "lnx + C", "1/(lnx) + C", "x lnx + C"],
        "options_hi": ["ln(lnx) + C", "lnx + C", "1/(lnx) + C", "x lnx + C"],
        "answer_en": "ln(lnx) + C",
        "answer_hi": "ln(lnx) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
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
        "num": 75,
        "question_en": "The SI unit of electric conductance is:",
        "question_hi": "विद्युत चालकता की SI इकाई है:",
        "options_en": ["Ohm", "Siemens", "Mho", "Both B and C"],
        "options_hi": ["ओम", "सीमेंस", "महो", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
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
        "num": 77,
        "question_en": "The derivative of sec(x) is:",
        "question_hi": "sec(x) का अवकलज है:",
        "options_en": ["sec(x)tan(x)", "-sec(x)tan(x)", "cosec(x)cot(x)", "-cosec(x)cot(x)"],
        "options_hi": ["sec(x)tan(x)", "-sec(x)tan(x)", "cosec(x)cot(x)", "-cosec(x)cot(x)"],
        "answer_en": "sec(x)tan(x)",
        "answer_hi": "sec(x)tan(x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The site of Calvin cycle in chloroplast is:",
        "question_hi": "क्लोरोप्लास्ट में केल्विन चक्र का स्थल है:",
        "options_en": ["Grana", "Stroma", "Thylakoid", "Lamella"],
        "options_hi": ["ग्रैना", "स्ट्रोमा", "थाइलाकोइड", "लेमेला"],
        "answer_en": "Stroma",
        "answer_hi": "स्ट्रोमा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The coordination number in hexagonal close packing is:",
        "question_hi": "षट्कोणीय निविड संकुलन में उपसहसंयोजन संख्या है:",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The value of lim(x→0) (1-cosx)/x is:",
        "question_hi": "lim(x→0) (1-cosx)/x का मान है:",
        "options_en": ["0", "1", "∞", "1/2"],
        "options_hi": ["0", "1", "∞", "1/2"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The magnetic field at the center of circular coil carrying current I is:",
        "question_hi": "धारा I वाहक वृत्ताकार कुंडली के केंद्र पर चुंबकीय क्षेत्र है:",
        "options_en": ["μ₀I/2r", "μ₀I/2πr", "μ₀I/r", "μ₀I/πr"],
        "options_hi": ["μ₀I/2r", "μ₀I/2πr", "μ₀I/r", "μ₀I/πr"],
        "answer_en": "μ₀I/2r",
        "answer_hi": "μ₀I/2r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The number of optical isomers of lactic acid is:",
        "question_hi": "लैक्टिक अम्ल के प्रकाशीय समावयवियों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The value of ∫(e^x sinx dx) is:",
        "question_hi": "∫(e^x sinx dx) का मान है:",
        "options_en": ["(e^x/2)(sinx - cosx) + C", "(e^x/2)(sinx + cosx) + C", "e^x(sinx - cosx) + C", "e^x(sinx + cosx) + C"],
        "options_hi": ["(e^x/2)(sinx - cosx) + C", "(e^x/2)(sinx + cosx) + C", "e^x(sinx - cosx) + C", "e^x(sinx + cosx) + C"],
        "answer_en": "(e^x/2)(sinx - cosx) + C",
        "answer_hi": "(e^x/2)(sinx - cosx) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The hormone that regulates calcium metabolism is:",
        "question_hi": "वह हार्मोन जो कैल्शियम चयापचय को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Parathormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "पैराथॉर्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The unit of magnetic susceptibility is:",
        "question_hi": "चुंबकीय सुग्राहिता की इकाई है:",
        "options_en": ["No unit", "Tesla", "Weber", "Henry"],
        "options_hi": ["कोई इकाई नहीं", "टेस्ला", "वेबर", "हेनरी"],
        "answer_en": "No unit",
        "answer_hi": "कोई इकाई नहीं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The number of structural isomers of C₄H₁₀ is:",
        "question_hi": "C₄H₁₀ के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The value of ∫(1/√(1-x²)) dx is:",
        "question_hi": "∫(1/√(1-x²)) dx का मान है:",
        "options_en": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "sec⁻¹x + C"],
        "options_hi": ["sin⁻¹x + C", "cos⁻¹x + C", "tan⁻¹x + C", "sec⁻¹x + C"],
        "answer_en": "sin⁻¹x + C",
        "answer_hi": "sin⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The process of conversion of ammonia to nitrite is called:",
        "question_hi": "अमोनिया के नाइट्राइट में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrification",
        "answer_hi": "नाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The force between two charges is F. If the distance is halved, the new force is:",
        "question_hi": "दो आवेशों के बीच बल F है। यदि दूरी आधी कर दी जाए, तो नया बल है:",
        "options_en": ["F/2", "F/4", "2F", "4F"],
        "options_hi": ["F/2", "F/4", "2F", "4F"],
        "answer_en": "4F",
        "answer_hi": "4F",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The compound that shows geometrical isomerism is:",
        "question_hi": "वह यौगिक जो ज्यामितीय समावयवता दर्शाता है:",
        "options_en": ["Propene", "1-Butene", "2-Butene", "Ethene"],
        "options_hi": ["प्रोपीन", "1-ब्यूटीन", "2-ब्यूटीन", "ईथीन"],
        "answer_en": "2-Butene",
        "answer_hi": "2-ब्यूटीन",
        "attempted": false,
        "selected": ""
    },

    // Final Mixed Set (91-100)
    {
        "num": 91,
        "question_en": "The dimensional formula of torque is:",
        "question_hi": "बल आघूर्ण का विमीय सूत्र है:",
        "options_en": ["ML²T⁻²", "MLT⁻²", "ML²T⁻¹", "MLT⁻¹"],
        "options_hi": ["ML²T⁻²", "MLT⁻²", "ML²T⁻¹", "MLT⁻¹"],
        "answer_en": "ML²T⁻²",
        "answer_hi": "ML²T⁻²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which of the following is a non-reducing sugar?",
        "question_hi": "निम्नलिखित में से कौन एक अन-अपचायक शर्करा है?",
        "options_en": ["Glucose", "Fructose", "Sucrose", "Maltose"],
        "options_hi": ["ग्लूकोज", "फ्रक्टोज", "सुक्रोज", "माल्टोज"],
        "answer_en": "Sucrose",
        "answer_hi": "सुक्रोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The value of ∫(tanx dx) is:",
        "question_hi": "∫(tanx dx) का मान है:",
        "options_en": ["ln|secx| + C", "ln|cosx| + C", "ln|sinx| + C", "ln|cosecx| + C"],
        "options_hi": ["ln|secx| + C", "ln|cosx| + C", "ln|sinx| + C", "ln|cosecx| + C"],
        "answer_en": "ln|secx| + C",
        "answer_hi": "ln|secx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The site of Krebs cycle in mitochondria is:",
        "question_hi": "माइटोकॉन्ड्रिया में क्रेब्स चक्र का स्थल है:",
        "options_en": ["Matrix", "Cristae", "Outer membrane", "Inner membrane"],
        "options_hi": ["मैट्रिक्स", "क्रिस्टी", "बाहरी झिल्ली", "आंतरिक झिल्ली"],
        "answer_en": "Matrix",
        "answer_hi": "मैट्रिक्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The work done in moving a charge in magnetic field is:",
        "question_hi": "चुंबकीय क्षेत्र में आवेश को ले जाने में किया गया कार्य है:",
        "options_en": ["Always zero", "Always positive", "Always negative", "Depends on path"],
        "options_hi": ["सदैव शून्य", "सदैव धनात्मक", "सदैव ऋणात्मक", "पथ पर निर्भर"],
        "answer_en": "Always zero",
        "answer_hi": "सदैव शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The compound that gives positive Benedict's test is:",
        "question_hi": "वह यौगिक जो सकारात्मक बेनेडिक्ट परीक्षण देता है:",
        "options_en": ["Formaldehyde", "Acetone", "Acetic acid", "Ethanol"],
        "options_hi": ["फॉर्मेल्डिहाइड", "एसीटोन", "एसिटिक अम्ल", "एथनॉल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The value of ∫(cotx dx) is:",
        "question_hi": "∫(cotx dx) का मान है:",
        "options_en": ["ln|sinx| + C", "ln|cosx| + C", "ln|secx| + C", "ln|cosecx| + C"],
        "options_hi": ["ln|sinx| + C", "ln|cosx| + C", "ln|secx| + C", "ln|cosecx| + C"],
        "answer_en": "ln|sinx| + C",
        "answer_hi": "ln|sinx| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The hormone that regulates water balance in body is:",
        "question_hi": "वह हार्मोन जो शरीर में जल संतुलन को नियंत्रित करता है:",
        "options_en": ["Insulin", "ADH", "Thyroxine", "Adrenaline"],
        "options_hi": ["इंसुलिन", "ADH", "थायरोक्सिन", "एड्रेनालाईन"],
        "answer_en": "ADH",
        "answer_hi": "ADH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The unit of electric flux is:",
        "question_hi": "विद्युत फ्लक्स की इकाई है:",
        "options_en": ["Volt-meter", "Tesla", "Weber", "Henry"],
        "options_hi": ["वोल्ट-मीटर", "टेस्ला", "वेबर", "हेनरी"],
        "answer_en": "Volt-meter",
        "answer_hi": "वोल्ट-मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The number of π bonds in CO₂ is:",
        "question_hi": "CO₂ में π बंधों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
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