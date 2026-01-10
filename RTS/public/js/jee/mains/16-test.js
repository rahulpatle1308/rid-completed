const questions = [
    // Physics - Thermodynamics & Kinetic Theory (1-10)
    {
        "num": 1,
        "question_en": "The first law of thermodynamics is essentially the law of:",
        "question_hi": "ऊष्मागतिकी का प्रथम नियम मूलतः है:",
        "options_en": ["Conservation of energy", "Conservation of momentum", "Conservation of mass", "Conservation of charge"],
        "options_hi": ["ऊर्जा संरक्षण", "संवेग संरक्षण", "द्रव्यमान संरक्षण", "आवेश संरक्षण"],
        "answer_en": "Conservation of energy",
        "answer_hi": "ऊर्जा संरक्षण",
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
        "question_en": "For an adiabatic process, the relation between P and V is:",
        "question_hi": "रुद्धोष्म प्रक्रम के लिए, P और V के बीच संबंध है:",
        "options_en": ["PV = constant", "PV^γ = constant", "TV^(γ-1) = constant", "P^(1-γ)T^γ = constant"],
        "options_hi": ["PV = constant", "PV^γ = constant", "TV^(γ-1) = constant", "P^(1-γ)T^γ = constant"],
        "answer_en": "PV^γ = constant",
        "answer_hi": "PV^γ = constant",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The efficiency of a Carnot engine operating between 400K and 300K is:",
        "question_hi": "400K और 300K के बीच कार्य करने वाले कार्नोट इंजन की दक्षता है:",
        "options_en": ["25%", "50%", "75%", "100%"],
        "options_hi": ["25%", "50%", "75%", "100%"],
        "answer_en": "25%",
        "answer_hi": "25%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The root mean square speed of oxygen molecules at 27°C is:",
        "question_hi": "27°C पर ऑक्सीजन अणुओं का वर्ग माध्य मूल वेग है:",
        "options_en": ["483 m/s", "400 m/s", "300 m/s", "200 m/s"],
        "options_hi": ["483 m/s", "400 m/s", "300 m/s", "200 m/s"],
        "answer_en": "483 m/s",
        "answer_hi": "483 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The work done in an isothermal expansion of ideal gas depends on:",
        "question_hi": "आदर्श गैस के समतापी प्रसार में किया गया कार्य निर्भर करता है:",
        "options_en": ["Temperature only", "Pressure only", "Volume only", "Both temperature and volume"],
        "options_hi": ["केवल तापमान", "केवल दाब", "केवल आयतन", "तापमान और आयतन दोनों"],
        "answer_en": "Both temperature and volume",
        "answer_hi": "तापमान और आयतन दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The degree of freedom for a diatomic gas at room temperature is:",
        "question_hi": "कमरे के तापमान पर द्विपरमाणुक गैस के स्वातंत्र्य कोटि हैं:",
        "options_en": ["3", "5", "6", "7"],
        "options_hi": ["3", "5", "6", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The coefficient of performance of a refrigerator is given by:",
        "question_hi": "रेफ्रिजरेटर का निष्पादन गुणांक दिया जाता है:",
        "options_en": ["Q1/W", "Q2/W", "W/Q1", "W/Q2"],
        "options_hi": ["Q1/W", "Q2/W", "W/Q1", "W/Q2"],
        "answer_en": "Q2/W",
        "answer_hi": "Q2/W",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "In a cyclic process, the change in internal energy is:",
        "question_hi": "चक्रीय प्रक्रम में, आंतरिक ऊर्जा में परिवर्तन है:",
        "options_en": ["Always positive", "Always negative", "Zero", "Depends on path"],
        "options_hi": ["सदैव धनात्मक", "सदैव ऋणात्मक", "शून्य", "पथ पर निर्भर"],
        "answer_en": "Zero",
        "answer_hi": "शून्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The specific heat capacity at constant pressure is greater than that at constant volume because:",
        "question_hi": "नियत दाब पर विशिष्ट ऊष्मा धारिता नियत आयतन से अधिक होती है क्योंकि:",
        "options_en": ["Work is done in expansion", "Internal energy increases", "Pressure remains constant", "Volume remains constant"],
        "options_hi": ["प्रसार में कार्य किया जाता है", "आंतरिक ऊर्जा बढ़ती है", "दाब स्थिर रहता है", "आयतन स्थिर रहता है"],
        "answer_en": "Work is done in expansion",
        "answer_hi": "प्रसार में कार्य किया जाता है",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Electrochemistry (11-20)
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
        "question_en": "During electrolysis of aqueous NaCl, the product at cathode is:",
        "question_hi": "जलीय NaCl के विद्युत अपघटन के दौरान, कैथोड पर उत्पाद है:",
        "options_en": ["Cl₂", "H₂", "Na", "O₂"],
        "options_hi": ["Cl₂", "H₂", "Na", "O₂"],
        "answer_en": "H₂",
        "answer_hi": "H₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The relationship between standard cell potential and equilibrium constant is:",
        "question_hi": "मानक सेल विभव और साम्य स्थिरांक के बीच संबंध है:",
        "options_en": ["E° = (RT/nF)lnK", "E° = (nF/RT)lnK", "E° = (RT/F)lnK", "E° = (F/RT)lnK"],
        "options_hi": ["E° = (RT/nF)lnK", "E° = (nF/RT)lnK", "E° = (RT/F)lnK", "E° = (F/RT)lnK"],
        "answer_en": "E° = (RT/nF)lnK",
        "answer_hi": "E° = (RT/nF)lnK",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The unit of conductivity is:",
        "question_hi": "चालकता की इकाई है:",
        "options_en": ["ohm⁻¹ cm⁻¹", "ohm cm", "volt cm", "ampere cm"],
        "options_hi": ["ohm⁻¹ cm⁻¹", "ohm cm", "volt cm", "ampere cm"],
        "answer_en": "ohm⁻¹ cm⁻¹",
        "answer_hi": "ohm⁻¹ cm⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "In a galvanic cell, the salt bridge:",
        "question_hi": "गैल्वेनिक सेल में, लवण सेतु:",
        "options_en": ["Completes the circuit", "Maintains electrical neutrality", "Both A and B", "None of these"],
        "options_hi": ["परिपथ को पूरा करता है", "विद्युत उदासीनता बनाए रखता है", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The Faraday constant represents:",
        "question_hi": "फैराडे स्थिरांक प्रतिनिधित्व करता है:",
        "options_en": ["Charge of 1 mole electrons", "Charge of 1 electron", "Mass of 1 mole electrons", "Mass of 1 electron"],
        "options_hi": ["1 मोल इलेक्ट्रॉनों का आवेश", "1 इलेक्ट्रॉन का आवेश", "1 मोल इलेक्ट्रॉनों का द्रव्यमान", "1 इलेक्ट्रॉन का द्रव्यमान"],
        "answer_en": "Charge of 1 mole electrons",
        "answer_hi": "1 मोल इलेक्ट्रॉनों का आवेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The Nernst equation is given by:",
        "question_hi": "नेर्नस्ट समीकरण दिया जाता है:",
        "options_en": ["E = E° - (RT/nF)lnQ", "E = E° + (RT/nF)lnQ", "E = E° - (nF/RT)lnQ", "E = E° + (nF/RT)lnQ"],
        "options_hi": ["E = E° - (RT/nF)lnQ", "E = E° + (RT/nF)lnQ", "E = E° - (nF/RT)lnQ", "E = E° + (nF/RT)lnQ"],
        "answer_en": "E = E° - (RT/nF)lnQ",
        "answer_hi": "E = E° - (RT/nF)lnQ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "In electrochemical series, the standard reduction potential of Li⁺/Li is:",
        "question_hi": "विद्युत रासायनिक श्रेणी में, Li⁺/Li का मानक अपचयन विभव है:",
        "options_en": ["-3.05 V", "-0.76 V", "+0.34 V", "+1.36 V"],
        "options_hi": ["-3.05 V", "-0.76 V", "+0.34 V", "+1.36 V"],
        "answer_en": "-3.05 V",
        "answer_hi": "-3.05 V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The process of coating one metal with another using electrolysis is called:",
        "question_hi": "विद्युत अपघटन का उपयोग करके एक धातु को दूसरी धातु से लेपित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Galvanization", "Electroplating", "Anodizing", "Cathodic protection"],
        "options_hi": ["जस्तीकरण", "विद्युत लेपन", "एनोडीकरण", "कैथोडिक संरक्षण"],
        "answer_en": "Electroplating",
        "answer_hi": "विद्युत लेपन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The standard EMF of a cell is calculated by:",
        "question_hi": "सेल का मानक EMF परिकलित किया जाता है:",
        "options_en": ["E°cell = E°cathode - E°anode", "E°cell = E°anode - E°cathode", "E°cell = E°cathode + E°anode", "E°cell = E°cathode × E°anode"],
        "options_hi": ["E°cell = E°cathode - E°anode", "E°cell = E°anode - E°cathode", "E°cell = E°cathode + E°anode", "E°cell = E°cathode × E°anode"],
        "answer_en": "E°cell = E°cathode - E°anode",
        "answer_hi": "E°cell = E°cathode - E°anode",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Vectors & 3D Geometry (21-30)
    {
        "num": 21,
        "question_en": "The scalar product of two perpendicular vectors is:",
        "question_hi": "दो लंबवत सदिशों का अदिश गुणनफल है:",
        "options_en": ["0", "1", "-1", "Depends on magnitude"],
        "options_hi": ["0", "1", "-1", "परिमाण पर निर्भर"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The magnitude of vector i + j + k is:",
        "question_hi": "सदिश i + j + k का परिमाण है:",
        "options_en": ["1", "√2", "√3", "3"],
        "options_hi": ["1", "√2", "√3", "3"],
        "answer_en": "√3",
        "answer_hi": "√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The direction cosines of x-axis are:",
        "question_hi": "x-अक्ष की दिक् कोसाइन हैं:",
        "options_en": ["(1,0,0)", "(0,1,0)", "(0,0,1)", "(1,1,1)"],
        "options_hi": ["(1,0,0)", "(0,1,0)", "(0,0,1)", "(1,1,1)"],
        "answer_en": "(1,0,0)",
        "answer_hi": "(1,0,0)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The distance between points (1,2,3) and (4,5,6) is:",
        "question_hi": "बिंदुओं (1,2,3) और (4,5,6) के बीच की दूरी है:",
        "options_en": ["3", "3√2", "3√3", "6"],
        "options_hi": ["3", "3√2", "3√3", "6"],
        "answer_en": "3√3",
        "answer_hi": "3√3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The vector perpendicular to both i + j and j + k is:",
        "question_hi": "i + j और j + k दोनों के लंबवत सदिश है:",
        "options_en": ["i - j + k", "i + j + k", "i - j - k", "-i + j - k"],
        "options_hi": ["i - j + k", "i + j + k", "i - j - k", "-i + j - k"],
        "answer_en": "i - j + k",
        "answer_hi": "i - j + k",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The equation of plane passing through (1,2,3) and perpendicular to i + j + k is:",
        "question_hi": "(1,2,3) से गुजरने वाले और i + j + k के लंबवत तल का समीकरण है:",
        "options_en": ["x + y + z = 6", "x + y + z = 0", "x - y - z = 0", "x + 2y + 3z = 0"],
        "options_hi": ["x + y + z = 6", "x + y + z = 0", "x - y - z = 0", "x + 2y + 3z = 0"],
        "answer_en": "x + y + z = 6",
        "answer_hi": "x + y + z = 6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The angle between vectors 2i + 3j + k and i - j + 2k is:",
        "question_hi": "सदिश 2i + 3j + k और i - j + 2k के बीच का कोण है:",
        "options_en": ["30°", "45°", "60°", "90°"],
        "options_hi": ["30°", "45°", "60°", "90°"],
        "answer_en": "60°",
        "answer_hi": "60°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The projection of vector 2i + 3j on i + j is:",
        "question_hi": "सदिश 2i + 3j का i + j पर प्रक्षेपण है:",
        "options_en": ["5/√2", "2/√2", "3/√2", "1/√2"],
        "options_hi": ["5/√2", "2/√2", "3/√2", "1/√2"],
        "answer_en": "5/√2",
        "answer_hi": "5/√2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The distance of point (1,2,3) from yz-plane is:",
        "question_hi": "yz-तल से बिंदु (1,2,3) की दूरी है:",
        "options_en": ["1", "2", "3", "6"],
        "options_hi": ["1", "2", "3", "6"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The direction ratios of line joining (1,2,3) and (4,5,6) are:",
        "question_hi": "(1,2,3) और (4,5,6) को मिलाने वाली रेखा के दिक् अनुपात हैं:",
        "options_en": ["(1,1,1)", "(3,3,3)", "(1,2,3)", "(4,5,6)"],
        "options_hi": ["(1,1,1)", "(3,3,3)", "(1,2,3)", "(4,5,6)"],
        "answer_en": "(3,3,3)",
        "answer_hi": "(3,3,3)",
        "attempted": false,
        "selected": ""
    },

    // Biology - Plant Physiology (31-40)
    {
        "num": 31,
        "question_en": "The process of water movement in plants is called:",
        "question_hi": "पौधों में जल के संचलन की प्रक्रिया कहलाती है:",
        "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Osmosis"],
        "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "परासरण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The opening and closing of stomata is regulated by:",
        "question_hi": "रंध्रों का खुलना और बंद होना नियंत्रित होता है:",
        "options_en": ["Guard cells", "Epidermal cells", "Mesophyll cells", "Xylem cells"],
        "options_hi": ["रक्षक कोशिकाओं", "बाह्यत्वचा कोशिकाओं", "पर्णमध्योतक कोशिकाओं", "जाइलम कोशिकाओं"],
        "answer_en": "Guard cells",
        "answer_hi": "रक्षक कोशिकाओं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The pigment responsible for photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण के लिए जिम्मेदार वर्णक है:",
        "options_en": ["Chlorophyll", "Carotene", "Xanthophyll", "Phycocyanin"],
        "options_hi": ["क्लोरोफिल", "कैरोटीन", "जैंथोफिल", "फाइकोसायनिन"],
        "answer_en": "Chlorophyll",
        "answer_hi": "क्लोरोफिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The process of conversion of light energy to chemical energy occurs in:",
        "question_hi": "प्रकाश ऊर्जा के रासायनिक ऊर्जा में परिवर्तन की प्रक्रिया होती है:",
        "options_en": ["Chloroplast", "Mitochondria", "Ribosome", "Nucleus"],
        "options_hi": ["क्लोरोप्लास्ट", "माइटोकॉन्ड्रिया", "राइबोसोम", "केंद्रक"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The hormone that promotes cell division in plants is:",
        "question_hi": "वह हार्मोन जो पौधों में कोशिका विभाजन को बढ़ावा देता है:",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
        "answer_en": "Cytokinin",
        "answer_hi": "साइटोकाइनिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The process of nitrogen fixation in leguminous plants is done by:",
        "question_hi": "फलीदार पौधों में नाइट्रोजन स्थिरीकरण की प्रक्रिया की जाती है:",
        "options_en": ["Rhizobium bacteria", "Nostoc algae", "Azotobacter", "Clostridium"],
        "options_hi": ["राइजोबियम जीवाणु", "नॉस्टॉक शैवाल", "एजोटोबैक्टर", "क्लोस्ट्रीडियम"],
        "answer_en": "Rhizobium bacteria",
        "answer_hi": "राइजोबियम जीवाणु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The movement of plant in response to light is called:",
        "question_hi": "प्रकाश के प्रति पौधे की गति कहलाती है:",
        "options_en": ["Phototropism", "Geotropism", "Hydrotropism", "Chemotropism"],
        "options_hi": ["प्रकाशानुवर्तन", "भू-अनुवर्तन", "जलानुवर्तन", "रसायनानुवर्तन"],
        "answer_en": "Phototropism",
        "answer_hi": "प्रकाशानुवर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The tissue responsible for transport of water in plants is:",
        "question_hi": "पौधों में जल के परिवहन के लिए जिम्मेदार ऊतक है:",
        "options_en": ["Xylem", "Phloem", "Epidermis", "Cambium"],
        "options_hi": ["जाइलम", "फ्लोएम", "बाह्यत्वचा", "कैंबियम"],
        "answer_en": "Xylem",
        "answer_hi": "जाइलम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The process of loss of water vapor from plants is called:",
        "question_hi": "पौधों से जल वाष्प के ह्रास की प्रक्रिया कहलाती है:",
        "options_en": ["Transpiration", "Evaporation", "Guttation", "Respiration"],
        "options_hi": ["वाष्पोत्सर्जन", "वाष्पीकरण", "बिंदुस्राव", "श्वसन"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The dark reaction of photosynthesis occurs in:",
        "question_hi": "प्रकाश संश्लेषण की अप्रकाशिक अभिक्रिया होती है:",
        "options_en": ["Stroma", "Grana", "Thylakoid", "Matrix"],
        "options_hi": ["स्ट्रोमा", "ग्रैना", "थाइलाकोइड", "मैट्रिक्स"],
        "answer_en": "Stroma",
        "answer_hi": "स्ट्रोमा",
        "attempted": false,
        "selected": ""
    },

    // English - Advanced Grammar & Vocabulary (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["Neither of the boys are present", "Neither of the boys is present", "Neither of the boys were present", "Neither of the boys have been present"],
        "options_hi": ["Neither of the boys are present", "Neither of the boys is present", "Neither of the boys were present", "Neither of the boys have been present"],
        "answer_en": "Neither of the boys is present",
        "answer_hi": "Neither of the boys is present",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The synonym of 'Meticulous' is:",
        "question_hi": "'Meticulous' का समानार्थी है:",
        "options_en": ["Careless", "Careful", "Hasty", "Slow"],
        "options_hi": ["लापरवाह", "सावधान", "जल्दबाज", "धीमा"],
        "answer_en": "Careful",
        "answer_hi": "सावधान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Identify the type of sentence: 'Although it was raining, we went for a walk.'",
        "question_hi": "वाक्य का प्रकार पहचानें: 'Although it was raining, we went for a walk.'",
        "options_en": ["Simple", "Compound", "Complex", "Compound-complex"],
        "options_hi": ["सरल", "संयुक्त", "मिश्र", "संयुक्त-मिश्र"],
        "answer_en": "Complex",
        "answer_hi": "मिश्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The antonym of 'Benevolent' is:",
        "question_hi": "'Benevolent' का विलोम है:",
        "options_en": ["Kind", "Malevolent", "Generous", "Philanthropic"],
        "options_hi": ["दयालु", "दुर्भावनापूर्ण", "उदार", "परोपकारी"],
        "answer_en": "Malevolent",
        "answer_hi": "दुर्भावनापूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Choose the correct word: 'The committee ___ divided in their opinion.'",
        "question_hi": "सही शब्द चुनें: 'The committee ___ divided in their opinion.'",
        "options_en": ["was", "were", "are", "have"],
        "options_hi": ["was", "were", "are", "have"],
        "answer_en": "was",
        "answer_hi": "was",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The figure of speech in 'The wind whispered through the trees' is:",
        "question_hi": "'The wind whispered through the trees' में अलंकार है:",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Identify the tense: 'I will have been working for ten hours by 5 PM.'",
        "question_hi": "काल पहचानें: 'I will have been working for ten hours by 5 PM.'",
        "options_en": ["Future perfect", "Future continuous", "Future perfect continuous", "Simple future"],
        "options_hi": ["भविष्य पूर्ण", "भविष्य अपूर्ण", "भविष्य पूर्ण अपूर्ण", "सामान्य भविष्य"],
        "answer_en": "Future perfect continuous",
        "answer_hi": "भविष्य पूर्ण अपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The correct passive voice of 'They are building a new house' is:",
        "question_hi": "'They are building a new house' का सही कर्मवाच्य है:",
        "options_en": ["A new house is being built by them", "A new house was built by them", "A new house has been built by them", "A new house is built by them"],
        "options_hi": ["A new house is being built by them", "A new house was built by them", "A new house has been built by them", "A new house is built by them"],
        "answer_en": "A new house is being built by them",
        "answer_hi": "A new house is being built by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Choose the correctly spelled word:",
        "question_hi": "सही वर्तनी वाला शब्द चुनें:",
        "options_en": ["Embarrass", "Embarass", "Embarras", "Embaras"],
        "options_hi": ["Embarrass", "Embarass", "Embarras", "Embaras"],
        "answer_en": "Embarrass",
        "answer_hi": "Embarrass",
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

    // Hindi - व्याकरण और लेखन (51-60)
    {
        "num": 51,
        "question_en": "'अनेक' शब्द का विलोम है:",
        "question_hi": "'अनेक' शब्द का विलोम है:",
        "options_en": ["बहुत", "कई", "एक", "थोड़ा"],
        "options_hi": ["बहुत", "कई", "एक", "थोड़ा"],
        "answer_en": "एक",
        "answer_hi": "एक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "कौन सा शब्द तत्सम है?",
        "question_hi": "कौन सा शब्द तत्सम है?",
        "options_en": ["आँख", "नेत्र", "अक्षि", "चक्षु"],
        "options_hi": ["आँख", "नेत्र", "अक्षि", "चक्षु"],
        "answer_en": "चक्षु",
        "answer_hi": "चक्षु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'गाय' का बहुवचन रूप है:",
        "question_hi": "'गाय' का बहुवचन रूप है:",
        "options_en": ["गायें", "गायों", "गाएं", "गाये"],
        "options_hi": ["गायें", "गायों", "गाएं", "गाये"],
        "answer_en": "गायें",
        "answer_hi": "गायें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "कौन सा वाक्य शुद्ध है?",
        "question_hi": "कौन सा वाक्य शुद्ध है?",
        "options_en": ["मैंने उसे देखा।", "मैंने उसको देखा।", "मैं उसे देखा।", "मैं उसको देखा।"],
        "options_hi": ["मैंने उसे देखा।", "मैंने उसको देखा।", "मैं उसे देखा।", "मैं उसको देखा।"],
        "answer_en": "मैंने उसे देखा।",
        "answer_hi": "मैंने उसे देखा।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'सूर्य' का पर्यायवाची शब्द है:",
        "question_hi": "'सूर्य' का पर्यायवाची शब्द है:",
        "options_en": ["चंद्रमा", "दिनकर", "तारा", "पृथ्वी"],
        "options_hi": ["चंद्रमा", "दिनकर", "तारा", "पृथ्वी"],
        "answer_en": "दिनकर",
        "answer_hi": "दिनकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "कौन सा शब्द संज्ञा है?",
        "question_hi": "कौन सा शब्द संज्ञा है?",
        "options_en": ["खेलना", "सुंदर", "किताब", "तेज"],
        "options_hi": ["खेलना", "सुंदर", "किताब", "तेज"],
        "answer_en": "किताब",
        "answer_hi": "किताब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'राम ने रोटी खाई' वाक्य में कर्म है:",
        "question_hi": "'राम ने रोटी खाई' वाक्य में कर्म है:",
        "options_en": ["राम", "ने", "रोटी", "खाई"],
        "options_hi": ["राम", "ने", "रोटी", "खाई"],
        "answer_en": "रोटी",
        "answer_hi": "रोटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "कौन सा शब्द स्त्रीलिंग है?",
        "question_hi": "कौन सा शब्द स्त्रीलिंग है?",
        "options_en": ["लड़का", "किताब", "घर", "मेज"],
        "options_hi": ["लड़का", "किताब", "घर", "मेज"],
        "answer_en": "किताब",
        "answer_hi": "किताब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'सुबह' का विलोम शब्द है:",
        "question_hi": "'सुबह' का विलोम शब्द है:",
        "options_en": ["दोपहर", "शाम", "रात", "संध्या"],
        "options_hi": ["दोपहर", "शाम", "रात", "संध्या"],
        "answer_en": "रात",
        "answer_hi": "रात",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "कौन सा वाक्य अशुद्ध है?",
        "question_hi": "कौन सा वाक्य अशुद्ध है?",
        "options_en": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ने है।"],
        "options_hi": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ने है।"],
        "answer_en": "वह पढ़ने है।",
        "answer_hi": "वह पढ़ने है।",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (61-70)
    {
        "num": 61,
        "question_en": "The device used to measure electric current is:",
        "question_hi": "विद्युत धारा मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Voltmeter", "Ammeter", "Ohmmeter", "Galvanometer"],
        "options_hi": ["वोल्टमीटर", "एमीटर", "ओममीटर", "गैल्वेनोमीटर"],
        "answer_en": "Ammeter",
        "answer_hi": "एमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The chemical name of baking soda is:",
        "question_hi": "बेकिंग सोडा का रासायनिक नाम है:",
        "options_en": ["Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide", "Sodium chloride"],
        "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
        "answer_en": "Sodium bicarbonate",
        "answer_hi": "सोडियम बाइकार्बोनेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The largest gland in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
        "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "options_hi": ["अग्न्याशय", "यकृत", "थायरॉयड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The SI unit of force is:",
        "question_hi": "बल की SI इकाई है:",
        "options_en": ["Joule", "Newton", "Watt", "Pascal"],
        "options_hi": ["जूल", "न्यूटन", "वाट", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The planet known as the Red Planet is:",
        "question_hi": "लाल ग्रह के नाम से जाना जाने वाला ग्रह है:",
        "options_en": ["Mars", "Jupiter", "Venus", "Mercury"],
        "options_hi": ["मंगल", "बृहस्पति", "शुक्र", "बुध"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
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
        "num": 67,
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
        "num": 68,
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
        "num": 69,
        "question_en": "The speed of light in vacuum is:",
        "question_hi": "निर्वात में प्रकाश की गति है:",
        "options_en": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "options_hi": ["3 × 10⁸ m/s", "3 × 10⁵ m/s", "3 × 10³ m/s", "3 × 10¹⁰ m/s"],
        "answer_en": "3 × 10⁸ m/s",
        "answer_hi": "3 × 10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The vitamin that prevents scurvy is:",
        "question_hi": "वह विटामिन जो स्कर्वी को रोकता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-100)
    {
        "num": 71,
        "question_en": "The value of ∫(0 to π/2) sinx dx is:",
        "question_hi": "∫(0 से π/2) sinx dx का मान है:",
        "options_en": ["0", "1", "2", "π/2"],
        "options_hi": ["0", "1", "2", "π/2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
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
        "num": 73,
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
        "question_en": "The vitamin that helps in night vision is:",
        "question_hi": "वह वि�टामिन जो रात्रि दृष्टि में मदद करता है:",
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