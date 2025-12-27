const questions = [
    // Physics - Thermodynamics & Kinetic Theory (1-10)
    {
        "num": 1,
        "question_en": "The first law of thermodynamics is essentially the law of conservation of:",
        "question_hi": "ऊष्मागतिकी का प्रथम नियम मूलतः किसके संरक्षण का नियम है:",
        "options_en": ["Mass", "Energy", "Momentum", "Charge"],
        "options_hi": ["द्रव्यमान", "ऊर्जा", "संवेग", "आवेश"],
        "answer_en": "Energy",
        "answer_hi": "ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The efficiency of a Carnot engine operating between 400K and 300K is:",
        "question_hi": "400K और 300K के बीच कार्यरत कार्नोट इंजन की दक्षता है:",
        "options_en": ["25%", "50%", "75%", "100%"],
        "options_hi": ["25%", "50%", "75%", "100%"],
        "answer_en": "25%",
        "answer_hi": "25%",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The root mean square speed of oxygen molecules at 27°C is:",
        "question_hi": "27°C पर ऑक्सीजन अणुओं का वर्ग माध्य मूल वेग है:",
        "options_en": ["200 m/s", "400 m/s", "483 m/s", "600 m/s"],
        "options_hi": ["200 m/s", "400 m/s", "483 m/s", "600 m/s"],
        "answer_en": "483 m/s",
        "answer_hi": "483 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In an adiabatic process:",
        "question_hi": "रुद्धोष्म प्रक्रम में:",
        "options_en": ["Temperature remains constant", "Pressure remains constant", "No heat exchange occurs", "Volume remains constant"],
        "options_hi": ["तापमान स्थिर रहता है", "दाब स्थिर रहता है", "कोई ऊष्मा विनिमय नहीं होता", "आयतन स्थिर रहता है"],
        "answer_en": "No heat exchange occurs",
        "answer_hi": "कोई ऊष्मा विनिमय नहीं होता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The specific heat capacity of a gas at constant volume is:",
        "question_hi": "स्थिर आयतन पर गैस की विशिष्ट ऊष्मा धारिता है:",
        "options_en": ["Greater than at constant pressure", "Less than at constant pressure", "Equal to that at constant pressure", "Zero"],
        "options_hi": ["स्थिर दाब से अधिक", "स्थिर दाब से कम", "स्थिर दाब के बराबर", "शून्य"],
        "answer_en": "Less than at constant pressure",
        "answer_hi": "स्थिर दाब से कम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The mean free path of gas molecules increases when:",
        "question_hi": "गैस अणुओं का माध्य मुक्त पथ बढ़ता है जब:",
        "options_en": ["Temperature increases", "Pressure increases", "Density increases", "Molecular size increases"],
        "options_hi": ["तापमान बढ़ता है", "दाब बढ़ता है", "घनत्व बढ़ता है", "आणविक आकार बढ़ता है"],
        "answer_en": "Temperature increases",
        "answer_hi": "तापमान बढ़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The work done in an isothermal expansion of ideal gas depends on:",
        "question_hi": "आदर्श गैस के समतापी प्रसार में किया गया कार्य निर्भर करता है:",
        "options_en": ["Initial temperature only", "Final temperature only", "Initial and final volumes", "Pressure only"],
        "options_hi": ["केवल प्रारंभिक तापमान", "केवल अंतिम तापमान", "प्रारंभिक और अंतिम आयतन", "केवल दाब"],
        "answer_en": "Initial and final volumes",
        "answer_hi": "प्रारंभिक और अंतिम आयतन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
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
        "num": 9,
        "question_en": "In a cyclic process, the net work done is equal to:",
        "question_hi": "चक्रीय प्रक्रम में, कुल किया गया कार्य बराबर होता है:",
        "options_en": ["Zero", "Net heat absorbed", "Change in internal energy", "Change in entropy"],
        "options_hi": ["शून्य", "अवशोषित कुल ऊष्मा", "आंतरिक ऊर्जा में परिवर्तन", "एन्ट्रॉपी में परिवर्तन"],
        "answer_en": "Net heat absorbed",
        "answer_hi": "अवशोषित कुल ऊष्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The coefficient of performance of a refrigerator is:",
        "question_hi": "रेफ्रिजरेटर का निष्पादन गुणांक है:",
        "options_en": ["Always less than 1", "Always greater than 1", "Equal to 1", "Zero"],
        "options_hi": ["सदैव 1 से कम", "सदैव 1 से अधिक", "1 के बराबर", "शून्य"],
        "answer_en": "Always greater than 1",
        "answer_hi": "सदैव 1 से अधिक",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Electrochemistry (11-20)
    {
        "num": 11,
        "question_en": "The standard electrode potential of hydrogen electrode is:",
        "question_hi": "हाइड्रोजन इलेक्ट्रोड का मानक इलेक्ट्रोड विभव है:",
        "options_en": ["0.00 V", "1.00 V", "-1.00 V", "2.00 V"],
        "options_hi": ["0.00 V", "1.00 V", "-1.00 V", "2.00 V"],
        "answer_en": "0.00 V",
        "answer_hi": "0.00 V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "In electrolysis of water, the product at anode is:",
        "question_hi": "जल के विद्युत् अपघटन में, एनोड पर उत्पाद है:",
        "options_en": ["Hydrogen", "Oxygen", "Water vapor", "Hydrogen peroxide"],
        "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "जल वाष्प", "हाइड्रोजन पेरोक्साइड"],
        "answer_en": "Oxygen",
        "answer_hi": "ऑक्सीजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The unit of specific conductance is:",
        "question_hi": "विशिष्ट चालकता की इकाई है:",
        "options_en": ["Ohm cm", "Ohm⁻¹ cm⁻¹", "Ohm cm⁻¹", "Ohm⁻¹ cm"],
        "options_hi": ["ओम cm", "ओम⁻¹ cm⁻¹", "ओम cm⁻¹", "ओम⁻¹ cm"],
        "answer_en": "Ohm⁻¹ cm⁻¹",
        "answer_hi": "ओम⁻¹ cm⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "During charging of lead storage battery:",
        "question_hi": "लेड संचायक बैटरी के आवेशन के दौरान:",
        "options_en": ["PbSO₄ is converted to Pb", "PbSO₄ is converted to PbO₂", "Both A and B", "None of these"],
        "options_hi": ["PbSO₄, Pb में परिवर्तित होता है", "PbSO₄, PbO₂ में परिवर्तित होता है", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The relationship between standard cell potential and equilibrium constant is given by:",
        "question_hi": "मानक सेल विभव और साम्य स्थिरांक के बीच संबंध दिया जाता है:",
        "options_en": ["Nernst equation", "Faraday's law", "Kohlrausch law", "van't Hoff equation"],
        "options_hi": ["नर्न्स्ट समीकरण", "फैराडे का नियम", "कोलराऊश का नियम", "वान्ट हॉफ समीकरण"],
        "answer_en": "Nernst equation",
        "answer_hi": "नर्न्स्ट समीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The number of Faradays required to deposit 1 mole of aluminium from AlCl₃ is:",
        "question_hi": "AlCl₃ से 1 मोल एल्युमिनियम जमा करने के लिए आवश्यक फैराडे की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "In a galvanic cell, the electrode where oxidation occurs is called:",
        "question_hi": "गैल्वेनिक सेल में, वह इलेक्ट्रोड जहाँ ऑक्सीकरण होता है, कहलाता है:",
        "options_en": ["Cathode", "Anode", "Salt bridge", "Electrolyte"],
        "options_hi": ["कैथोड", "एनोड", "लवण सेतु", "विद्युत् अपघट्य"],
        "answer_en": "Anode",
        "answer_hi": "एनोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The specific conductivity of a solution _______ with dilution.",
        "question_hi": "एक विलयन की विशिष्ट चालकता तनुकरण के साथ _______ होती है।",
        "options_en": ["Increases", "Decreases", "Remains constant", "First increases then decreases"],
        "options_hi": ["बढ़ती है", "घटती है", "स्थिर रहती है", "पहले बढ़ती है फिर घटती है"],
        "answer_en": "Decreases",
        "answer_hi": "घटती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The standard reduction potential of Zn²⁺/Zn is -0.76V. This means:",
        "question_hi": "Zn²⁺/Zn का मानक अपचयन विभव -0.76V है। इसका अर्थ है:",
        "options_en": ["Zn is stronger reducing agent than H₂", "Zn is weaker reducing agent than H₂", "Zn cannot reduce H⁺", "Zn is oxidizing agent"],
        "options_hi": ["Zn, H₂ से प्रबलतर अपचायक है", "Zn, H₂ से दुर्बलतर अपचायक है", "Zn, H⁺ को अपचयित नहीं कर सकता", "Zn ऑक्सीकारक है"],
        "answer_en": "Zn is stronger reducing agent than H₂",
        "answer_hi": "Zn, H₂ से प्रबलतर अपचायक है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "In corrosion of iron, the reaction at anode is:",
        "question_hi": "लोहे के संक्षारण में, एनोड पर अभिक्रिया है:",
        "options_en": ["Fe → Fe²⁺ + 2e⁻", "O₂ + 2H₂O + 4e⁻ → 4OH⁻", "2H⁺ + 2e⁻ → H₂", "Fe³⁺ + e⁻ → Fe²⁺"],
        "options_hi": ["Fe → Fe²⁺ + 2e⁻", "O₂ + 2H₂O + 4e⁻ → 4OH⁻", "2H⁺ + 2e⁻ → H₂", "Fe³⁺ + e⁻ → Fe²⁺"],
        "answer_en": "Fe → Fe²⁺ + 2e⁻",
        "answer_hi": "Fe → Fe²⁺ + 2e⁻",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Trigonometry (21-30)
    {
        "num": 21,
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
        "num": 22,
        "question_en": "The period of the function y = sinx is:",
        "question_hi": "फलन y = sinx का आवर्तकाल है:",
        "options_en": ["π", "2π", "π/2", "4π"],
        "options_hi": ["π", "2π", "π/2", "4π"],
        "answer_en": "2π",
        "answer_hi": "2π",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The value of tan(45°) is:",
        "question_hi": "tan(45°) का मान है:",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "If sinθ = 3/5, then cosθ is:",
        "question_hi": "यदि sinθ = 3/5, तो cosθ है:",
        "options_en": ["4/5", "3/4", "5/4", "4/3"],
        "options_hi": ["4/5", "3/4", "5/4", "4/3"],
        "answer_en": "4/5",
        "answer_hi": "4/5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The maximum value of 3sinθ + 4cosθ is:",
        "question_hi": "3sinθ + 4cosθ का अधिकतम मान है:",
        "options_en": ["3", "4", "5", "7"],
        "options_hi": ["3", "4", "5", "7"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The value of sin(180° - θ) is:",
        "question_hi": "sin(180° - θ) का मान है:",
        "options_en": ["sinθ", "-sinθ", "cosθ", "-cosθ"],
        "options_hi": ["sinθ", "-sinθ", "cosθ", "-cosθ"],
        "answer_en": "sinθ",
        "answer_hi": "sinθ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "If tanθ = 1, then θ is:",
        "question_hi": "यदि tanθ = 1, तो θ है:",
        "options_en": ["30°", "45°", "60°", "90°"],
        "options_hi": ["30°", "45°", "60°", "90°"],
        "answer_en": "45°",
        "answer_hi": "45°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The range of sinθ is:",
        "question_hi": "sinθ का परिसर है:",
        "options_en": ["[0,1]", "[-1,1]", "[0,∞)", "(-∞,∞)"],
        "options_hi": ["[0,1]", "[-1,1]", "[0,∞)", "(-∞,∞)"],
        "answer_en": "[-1,1]",
        "answer_hi": "[-1,1]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The value of cosec²θ - cot²θ is:",
        "question_hi": "cosec²θ - cot²θ का मान है:",
        "options_en": ["0", "1", "2", "sin²θ"],
        "options_hi": ["0", "1", "2", "sin²θ"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "If sinθ = cosθ, then θ is:",
        "question_hi": "यदि sinθ = cosθ, तो θ है:",
        "options_en": ["30°", "45°", "60°", "90°"],
        "options_hi": ["30°", "45°", "60°", "90°"],
        "answer_en": "45°",
        "answer_hi": "45°",
        "attempted": false,
        "selected": ""
    },

    // Biology - Plant Physiology (31-40)
    {
        "num": 31,
        "question_en": "The process of water movement through plant is called:",
        "question_hi": "पौधे के माध्यम से जल के संचलन की प्रक्रिया कहलाती है:",
        "options_en": ["Transpiration", "Photosynthesis", "Respiration", "Translocation"],
        "options_hi": ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "स्थानांतरण"],
        "answer_en": "Transpiration",
        "answer_hi": "वाष्पोत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The opening and closing of stomata is regulated by:",
        "question_hi": "रंध्रों के खुलने और बंद होने का नियमन किया जाता है:",
        "options_en": ["Guard cells", "Epidermal cells", "Mesophyll cells", "Xylem cells"],
        "options_hi": ["रक्षक कोशिकाओं", "बाह्यत्वचीय कोशिकाओं", "मध्योतक कोशिकाओं", "जाइलम कोशिकाओं"],
        "answer_en": "Guard cells",
        "answer_hi": "रक्षक कोशिकाओं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The pigment responsible for photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण के लिए उत्तरदायी वर्णक है:",
        "options_en": ["Chlorophyll", "Hemoglobin", "Melanin", "Carotene"],
        "options_hi": ["क्लोरोफिल", "हीमोग्लोबिन", "मेलेनिन", "कैरोटीन"],
        "answer_en": "Chlorophyll",
        "answer_hi": "क्लोरोफिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The process of conversion of light energy to chemical energy occurs in:",
        "question_hi": "प्रकाश ऊर्जा के रासायनिक ऊर्जा में परिवर्तन की प्रक्रिया होती है:",
        "options_en": ["Light reaction", "Dark reaction", "Both A and B", "None of these"],
        "options_hi": ["प्रकाश अभिक्रिया", "अप्रकाशी अभिक्रिया", "A और B दोनों", "इनमें से कोई नहीं"],
        "answer_en": "Light reaction",
        "answer_hi": "प्रकाश अभिक्रिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The plant hormone that promotes cell elongation is:",
        "question_hi": "वह पादप हार्मोन जो कोशिका दीर्घीकरण को बढ़ावा देता है:",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
        "answer_en": "Auxin",
        "answer_hi": "ऑक्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The phenomenon of loss of water in liquid form from plants is called:",
        "question_hi": "पौधों से द्रव रूप में जल के ह्रास की घटना कहलाती है:",
        "options_en": ["Transpiration", "Guttation", "Evaporation", "Condensation"],
        "options_hi": ["वाष्पोत्सर्जन", "बिंदुस्राव", "वाष्पीकरण", "संघनन"],
        "answer_en": "Guttation",
        "answer_hi": "बिंदुस्राव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The mineral essential for chlorophyll formation is:",
        "question_hi": "क्लोरोफिल निर्माण के लिए आवश्यक खनिज है:",
        "options_en": ["Iron", "Magnesium", "Calcium", "Potassium"],
        "options_hi": ["लोहा", "मैग्नीशियम", "कैल्शियम", "पोटैशियम"],
        "answer_en": "Magnesium",
        "answer_hi": "मैग्नीशियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The process of conversion of starch to sugar is called:",
        "question_hi": "स्टार्च के शर्करा में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Hydrolysis", "Photosynthesis", "Respiration", "Transpiration"],
        "options_hi": ["जलअपघटन", "प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन"],
        "answer_en": "Hydrolysis",
        "answer_hi": "जलअपघटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The tissue responsible for transport of food in plants is:",
        "question_hi": "पौधों में भोजन के परिवहन के लिए उत्तरदायी ऊतक है:",
        "options_en": ["Xylem", "Phloem", "Epidermis", "Cambium"],
        "options_hi": ["जाइलम", "फ्लोएम", "बाह्यत्वचा", "कैम्बियम"],
        "answer_en": "Phloem",
        "answer_hi": "फ्लोएम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The phenomenon of bending of plant towards light is called:",
        "question_hi": "प्रकाश की ओर पौधे के मुड़ने की घटना कहलाती है:",
        "options_en": ["Geotropism", "Phototropism", "Hydrotropism", "Chemotropism"],
        "options_hi": ["भू-अनुवर्तन", "प्रकाश-अनुवर्तन", "जल-अनुवर्तन", "रसायन-अनुवर्तन"],
        "answer_en": "Phototropism",
        "answer_hi": "प्रकाश-अनुवर्तन",
        "attempted": false,
        "selected": ""
    },

    // English - Reading Comprehension & Vocabulary (41-50)
    {
        "num": 41,
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
        "num": 42,
        "question_en": "Identify the correct spelling:",
        "question_hi": "सही वर्तनी पहचानें:",
        "options_en": ["Necessary", "Neccessary", "Necesary", "Necesarry"],
        "options_hi": ["Necessary", "Neccessary", "Necesary", "Necesarry"],
        "answer_en": "Necessary",
        "answer_hi": "Necessary",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Choose the antonym of 'Ancient':",
        "question_hi": "'Ancient' का विलोम चुनें:",
        "options_en": ["Old", "Modern", "Historical", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Fill in the blank: 'She is capable ___ solving complex problems.'",
        "question_hi": "रिक्त स्थान भरें: 'She is capable ___ solving complex problems.'",
        "options_en": ["of", "for", "with", "by"],
        "options_hi": ["of", "for", "with", "by"],
        "answer_en": "of",
        "answer_hi": "of",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Identify the part of speech for 'Beautifully':",
        "question_hi": "'Beautifully' के भाषण का भाग पहचानें:",
        "options_en": ["Noun", "Verb", "Adjective", "Adverb"],
        "options_hi": ["संज्ञा", "क्रिया", "विशेषण", "क्रिया विशेषण"],
        "answer_en": "Adverb",
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Choose the correct meaning of 'Ephemeral':",
        "question_hi": "'Ephemeral' का सही अर्थ चुनें:",
        "options_en": ["Permanent", "Temporary", "Eternal", "Lasting"],
        "options_hi": ["स्थायी", "अस्थायी", "शाश्वत", "टिकाऊ"],
        "answer_en": "Temporary",
        "answer_hi": "अस्थायी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Identify the error: 'The team are playing well.'",
        "question_hi": "त्रुटि पहचानें: 'The team are playing well.'",
        "options_en": ["The", "team", "are", "playing"],
        "options_hi": ["The", "team", "are", "playing"],
        "answer_en": "are",
        "answer_hi": "are",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Choose the correct plural form of 'Analysis':",
        "question_hi": "'Analysis' का सही बहुवचन रूप चुनें:",
        "options_en": ["Analysises", "Analyses", "Analysises", "Analysis"],
        "options_hi": ["Analysises", "Analyses", "Analysises", "Analysis"],
        "answer_en": "Analyses",
        "answer_hi": "Analyses",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Fill in the blank: 'If I ___ enough money, I would buy a car.'",
        "question_hi": "रिक्त स्थान भरें: 'If I ___ enough money, I would buy a car.'",
        "options_en": ["have", "had", "will have", "would have"],
        "options_hi": ["have", "had", "will have", "would have"],
        "answer_en": "had",
        "answer_hi": "had",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Identify the type of sentence: 'What a beautiful day!'",
        "question_hi": "वाक्य का प्रकार पहचानें: 'What a beautiful day!'",
        "options_en": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
        "options_hi": ["विधानसूचक", "प्रश्नवाचक", "आदेशसूचक", "विस्मयसूचक"],
        "answer_en": "Exclamatory",
        "answer_hi": "विस्मयसूचक",
        "attempted": false,
        "selected": ""
    },

    // Hindi - Advanced Grammar & Literature (51-60)
    {
        "num": 51,
        "question_en": "'गबन' उपन्यास के लेखक हैं:",
        "question_hi": "'गबन' उपन्यास के लेखक हैं:",
        "options_en": ["प्रेमचंद", "जयशंकर प्रसाद", "मुंशी प्रेमचंद", "अज्ञेय"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "मुंशी प्रेमचंद", "अज्ञेय"],
        "answer_en": "प्रेमचंद",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'अशुद्ध वाक्य पहचानें:'",
        "question_hi": "'अशुद्ध वाक्य पहचानें:'",
        "options_en": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ रहा है।"],
        "options_hi": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ रहा है।"],
        "answer_en": "वह पढ़ते हैं।",
        "answer_hi": "वह पढ़ते हैं।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'गलत वर्तनी वाला शब्द है:'",
        "question_hi": "'गलत वर्तनी वाला शब्द है:'",
        "options_en": ["व्याकरण", "व्यवहार", "व्यवस्थापन", "व्यवस्था"],
        "options_hi": ["व्याकरण", "व्यवहार", "व्यवस्थापन", "व्यवस्था"],
        "answer_en": "व्यवस्थापन",
        "answer_hi": "व्यवस्थापन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "'निम्नलिखित में से कौन सा शब्द तद्भव है?'",
        "question_hi": "'निम्नलिखित में से कौन सा शब्द तद्भव है?'",
        "options_en": ["अग्नि", "आग", "वायु", "जल"],
        "options_hi": ["अग्नि", "आग", "वायु", "जल"],
        "answer_en": "आग",
        "answer_hi": "आग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'राम ने रावण को मारा।' इस वाक्य में 'रावण' क्या है?'",
        "question_hi": "'राम ने रावण को मारा।' इस वाक्य में 'रावण' क्या है?'",
        "options_en": ["कर्ता", "कर्म", "करण", "अपादान"],
        "options_hi": ["कर्ता", "कर्म", "करण", "अपादान"],
        "answer_en": "कर्म",
        "answer_hi": "कर्म",
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

    // General Knowledge - Current Affairs & Geography (61-70)
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
        "num": 64,
        "question_en": "The largest desert in India is:",
        "question_hi": "भारत का सबसे बड़ा रेगिस्तान है:",
        "options_en": ["Thar Desert", "Sahara Desert", "Gobi Desert", "Kalahari Desert"],
        "options_hi": ["थार रेगिस्तान", "सहारा रेगिस्तान", "गोबी रेगिस्तान", "कालाहारी रेगिस्तान"],
        "answer_en": "Thar Desert",
        "answer_hi": "थार रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The capital of Japan is:",
        "question_hi": "जापान की राजधानी है:",
        "options_en": ["Tokyo", "Osaka", "Kyoto", "Seoul"],
        "options_hi": ["टोक्यो", "ओसाका", "क्योटो", "सियोल"],
        "answer_en": "Tokyo",
        "answer_hi": "टोक्यो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The first woman Prime Minister of India was:",
        "question_hi": "भारत की प्रथम महिला प्रधानमंत्री थीं:",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
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
        "num": 68,
        "question_en": "The currency of China is:",
        "question_hi": "चीन की मुद्रा है:",
        "options_en": ["Yuan", "Yen", "Won", "Dollar"],
        "options_hi": ["युआन", "येन", "वॉन", "डॉलर"],
        "answer_en": "Yuan",
        "answer_hi": "युआन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
        "question_en": "The first Indian to win Nobel Prize was:",
        "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Hargobind Khorana"],
        "options_hi": ["सी.वी. रमन", "रबींद्रनाथ टैगोर", "मदर टेरेसा", "हरगोबिंद खुराना"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-90)
    {
        "num": 71,
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
        "num": 72,
        "question_en": "The IUPAC name of CH₃CH₂OH is:",
        "question_hi": "CH₃CH₂OH का IUPAC नाम है:",
        "options_en": ["Methanol", "Ethanol", "Propanol", "Butanol"],
        "options_hi": ["मेथनॉल", "एथनॉल", "प्रोपेनॉल", "ब्यूटेनॉल"],
        "answer_en": "Ethanol",
        "answer_hi": "एथनॉल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of ∫(x² dx) is:",
        "question_hi": "∫(x² dx) का मान है:",
        "options_en": ["x³/3 + C", "x²/2 + C", "x³ + C", "2x + C"],
        "options_hi": ["x³/3 + C", "x²/2 + C", "x³ + C", "2x + C"],
        "answer_en": "x³/3 + C",
        "answer_hi": "x³/3 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The enzyme that digests protein in stomach is:",
        "question_hi": "आमाशय में प्रोटीन को पचाने वाला एंजाइम है:",
        "options_en": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
        "options_hi": ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेज"],
        "answer_en": "Pepsin",
        "answer_hi": "पेप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The SI unit of electric current is:",
        "question_hi": "विद्युत धारा की SI इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पीयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The compound that gives positive iodoform test is:",
        "question_hi": "वह यौगिक जो सकारात्मक आयोडोफॉर्म परीक्षण देता है:",
        "options_en": ["CH₃CH₂OH", "CH₃COOH", "C₆H₅OH", "CH₃OCH₃"],
        "options_hi": ["CH₃CH₂OH", "CH₃COOH", "C₆H₅OH", "CH₃OCH₃"],
        "answer_en": "CH₃CH₂OH",
        "answer_hi": "CH₃CH₂OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The derivative of e^x is:",
        "question_hi": "e^x का अवकलज है:",
        "options_en": ["e^x", "xe^x", "e^x/x", "log x"],
        "options_hi": ["e^x", "xe^x", "e^x/x", "log x"],
        "answer_en": "e^x",
        "answer_hi": "e^x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
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
        "num": 80,
        "question_en": "The value of lim(x→0) sinx/x is:",
        "question_hi": "lim(x→0) sinx/x का मान है:",
        "options_en": ["0", "1", "∞", "-1"],
        "options_hi": ["0", "1", "∞", "-1"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The magnetic field inside a solenoid is:",
        "question_hi": "परिनालिका के अंदर चुंबकीय क्षेत्र है:",
        "options_en": ["Uniform", "Non-uniform", "Zero", "Radial"],
        "options_hi": ["एकसमान", "असमान", "शून्य", "रेडियल"],
        "answer_en": "Uniform",
        "answer_hi": "एकसमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "The value of ∫(1/x dx) is:",
        "question_hi": "∫(1/x dx) का मान है:",
        "options_en": ["ln|x| + C", "x + C", "1/x² + C", "ln x² + C"],
        "options_hi": ["ln|x| + C", "x + C", "1/x² + C", "ln x² + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "question_en": "The process of conversion of glucose to pyruvate is called:",
        "question_hi": "ग्लूकोज के पाइरुवेट में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Glycolysis", "Krebs cycle", "Electron transport", "Fermentation"],
        "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन", "किण्वन"],
        "answer_en": "Glycolysis",
        "answer_hi": "ग्लाइकोलाइसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 92,
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
        "num": 93,
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
        "num": 94,
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
        "num": 95,
        "question_en": "The force on a charged particle in magnetic field is maximum when angle between v and B is:",
        "question_hi": "चुंबकीय क्षेत्र में आवेशित कण पर बल अधिकतम होता है जब v और B के बीच कोण है:",
        "options_en": ["0°", "45°", "90°", "180°"],
        "options_hi": ["0°", "45°", "90°", "180°"],
        "answer_en": "90°",
        "answer_hi": "90°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The compound that gives positive Tollens test is:",
        "question_hi": "वह यौगिक जो सकारात्मक टोलेन परीक्षण देता है:",
        "options_en": ["Acetone", "Formaldehyde", "Acetic acid", "Ethanol"],
        "options_hi": ["एसीटोन", "फॉर्मेल्डिहाइड", "एसिटिक अम्ल", "एथनॉल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
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
        "num": 98,
        "question_en": "The hormone that regulates growth in plants is:",
        "question_hi": "वह हार्मोन जो पौधों में वृद्धि को नियंत्रित करता है:",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "All of these"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
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
        "num": 100,
        "question_en": "The number of π bonds in acetylene is:",
        "question_hi": "एसिटिलीन में π बंधों की संख्या है:",
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