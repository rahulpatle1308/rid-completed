const questions = [
    // Physics - Electrostatics & Current Electricity (1-10)
    {
        "num": 1,
        "question_en": "Two point charges +4μC and -2μC are placed 0.1m apart. The force between them is:",
        "question_hi": "दो बिंदु आवेश +4μC और -2μC 0.1m दूरी पर रखे गए हैं। उनके बीच बल है:",
        "options_en": ["7.2 N attractive", "7.2 N repulsive", "3.6 N attractive", "3.6 N repulsive"],
        "options_hi": ["7.2 N आकर्षक", "7.2 N प्रतिकर्षक", "3.6 N आकर्षक", "3.6 N प्रतिकर्षक"],
        "answer_en": "7.2 N attractive",
        "answer_hi": "7.2 N आकर्षक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The equivalent resistance between points A and B in the given circuit is:",
        "question_hi": "दिए गए परिपथ में बिंदु A और B के बीच समतुल्य प्रतिरोध है:",
        "options_en": ["5Ω", "10Ω", "15Ω", "20Ω"],
        "options_hi": ["5Ω", "10Ω", "15Ω", "20Ω"],
        "answer_en": "10Ω",
        "answer_hi": "10Ω",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A capacitor of 10μF is charged to 100V. The energy stored in it is:",
        "question_hi": "10μF का एक संधारित्र 100V तक आवेशित किया गया है। इसमें संचित ऊर्जा है:",
        "options_en": ["0.05 J", "0.1 J", "0.5 J", "1.0 J"],
        "options_hi": ["0.05 J", "0.1 J", "0.5 J", "1.0 J"],
        "answer_en": "0.05 J",
        "answer_hi": "0.05 J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The drift velocity of electrons in a conductor depends on:",
        "question_hi": "एक चालक में इलेक्ट्रॉनों का अपवाह वेग निर्भर करता है:",
        "options_en": ["Length of conductor", "Area of cross-section", "Current flowing", "All of these"],
        "options_hi": ["चालक की लंबाई", "अनुप्रस्थ काट का क्षेत्रफल", "प्रवाहित धारा", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Kirchhoff's current law is based on conservation of:",
        "question_hi": "किरचॉफ का धारा नियम किसके संरक्षण पर आधारित है:",
        "options_en": ["Energy", "Charge", "Momentum", "Mass"],
        "options_hi": ["ऊर्जा", "आवेश", "संवेग", "द्रव्यमान"],
        "answer_en": "Charge",
        "answer_hi": "आवेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The resistivity of a wire depends on:",
        "question_hi": "एक तार की प्रतिरोधकता निर्भर करती है:",
        "options_en": ["Length", "Area", "Material", "Temperature"],
        "options_hi": ["लंबाई", "क्षेत्रफल", "पदार्थ", "तापमान"],
        "answer_en": "Material",
        "answer_hi": "पदार्थ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "In a potentiometer experiment, the balancing length for a cell is 250cm. When a resistance of 2Ω is connected, it becomes 200cm. The internal resistance is:",
        "question_hi": "विभवमापी प्रयोग में, एक सेल के लिए संतुलन लंबाई 250cm है। जब 2Ω का प्रतिरोध जोड़ा जाता है, तो यह 200cm हो जाती है। आंतरिक प्रतिरोध है:",
        "options_en": ["0.5Ω", "1.0Ω", "1.5Ω", "2.0Ω"],
        "options_hi": ["0.5Ω", "1.0Ω", "1.5Ω", "2.0Ω"],
        "answer_en": "0.5Ω",
        "answer_hi": "0.5Ω",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The SI unit of magnetic permeability is:",
        "question_hi": "चुंबकीय पारगम्यता की SI इकाई है:",
        "options_en": ["Henry/meter", "Weber/meter", "Tesla/meter", "Ampere/meter"],
        "options_hi": ["हेनरी/मीटर", "वेबर/मीटर", "टेस्ला/मीटर", "एम्पीयर/मीटर"],
        "answer_en": "Henry/meter",
        "answer_hi": "हेनरी/मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "A charged particle enters a magnetic field perpendicularly. Its path becomes:",
        "question_hi": "एक आवेशित कण चुंबकीय क्षेत्र में लंबवत प्रवेश करता है। इसका पथ हो जाता है:",
        "options_en": ["Straight line", "Parabolic", "Circular", "Elliptical"],
        "options_hi": ["सीधी रेखा", "परवलयिक", "वृत्ताकार", "दीर्घवृत्तीय"],
        "answer_en": "Circular",
        "answer_hi": "वृत्ताकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The self-inductance of a solenoid depends on:",
        "question_hi": "एक परिनालिका का स्व-प्रेरकत्व निर्भर करता है:",
        "options_en": ["Number of turns", "Area of cross-section", "Length", "All of these"],
        "options_hi": ["फेरों की संख्या", "अनुप्रस्थ काट का क्षेत्रफल", "लंबाई", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Physical Chemistry (11-20)
    {
        "num": 11,
        "question_en": "The order of reaction for which half-life is independent of initial concentration is:",
        "question_hi": "अभिक्रिया की कोटि जिसके लिए अर्ध-आयु प्रारंभिक सांद्रता से स्वतंत्र होती है:",
        "options_en": ["Zero order", "First order", "Second order", "Third order"],
        "options_hi": ["शून्य कोटि", "प्रथम कोटि", "द्वितीय कोटि", "तृतीय कोटि"],
        "answer_en": "First order",
        "answer_hi": "प्रथम कोटि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "For a spontaneous process at constant temperature and pressure:",
        "question_hi": "नियत तापमान और दाब पर सहज प्रक्रिया के लिए:",
        "options_en": ["ΔG < 0", "ΔG > 0", "ΔG = 0", "ΔG = ΔH"],
        "options_hi": ["ΔG < 0", "ΔG > 0", "ΔG = 0", "ΔG = ΔH"],
        "answer_en": "ΔG < 0",
        "answer_hi": "ΔG < 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The pH of 0.01M HCl solution is:",
        "question_hi": "0.01M HCl विलयन का pH है:",
        "options_en": ["1", "2", "7", "12"],
        "options_hi": ["1", "2", "7", "12"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "In a face-centered cubic lattice, the number of atoms per unit cell is:",
        "question_hi": "फलक-केंद्रित घनीय जालक में, प्रति एकक कोशिका में परमाणुओं की संख्या है:",
        "options_en": ["1", "2", "4", "6"],
        "options_hi": ["1", "2", "4", "6"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The van't Hoff factor for K₂SO₄ in aqueous solution is:",
        "question_hi": "जलीय विलयन में K₂SO₄ के लिए वान्ट हॉफ गुणक है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The half-life of a first-order reaction is 10 minutes. The time taken for 75% completion is:",
        "question_hi": "एक प्रथम कोटि अभिक्रिया का अर्ध-आयु 10 मिनट है। 75% पूर्णता के लिए लिया गया समय है:",
        "options_en": ["10 minutes", "20 minutes", "30 minutes", "40 minutes"],
        "options_hi": ["10 मिनट", "20 मिनट", "30 मिनट", "40 मिनट"],
        "answer_en": "20 minutes",
        "answer_hi": "20 मिनट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
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
        "num": 18,
        "question_en": "The number of moles of solute per liter of solution is called:",
        "question_hi": "विलयन के प्रति लीटर में विलेय के मोलों की संख्या कहलाती है:",
        "options_en": ["Molality", "Molarity", "Normality", "Mole fraction"],
        "options_hi": ["मोललता", "मोलरता", "तुल्यांकी", "मोल अंश"],
        "answer_en": "Molarity",
        "answer_hi": "मोलरता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "In a reversible reaction, the equilibrium constant depends on:",
        "question_hi": "एक उत्क्रमणीय अभिक्रिया में, साम्य स्थिरांक निर्भर करता है:",
        "options_en": ["Temperature", "Pressure", "Concentration", "Catalyst"],
        "options_hi": ["तापमान", "दाब", "सांद्रता", "उत्प्रेरक"],
        "answer_en": "Temperature",
        "answer_hi": "तापमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The rate constant of a reaction increases with temperature due to:",
        "question_hi": "तापमान के साथ अभिक्रिया का दर स्थिरांक बढ़ता है क्योंकि:",
        "options_en": ["Increase in collision frequency", "Increase in activation energy", "Decrease in activation energy", "Increase in number of molecules"],
        "options_hi": ["संघट्ट आवृत्ति में वृद्धि", "सक्रियण ऊर्जा में वृद्धि", "सक्रियण ऊर्जा में कमी", "अणुओं की संख्या में वृद्धि"],
        "answer_en": "Increase in collision frequency",
        "answer_hi": "संघट्ट आवृत्ति में वृद्धि",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Coordinate Geometry (21-30)
    {
        "num": 21,
        "question_en": "The distance between points (2,3) and (5,7) is:",
        "question_hi": "बिंदुओं (2,3) और (5,7) के बीच की दूरी है:",
        "options_en": ["3 units", "4 units", "5 units", "6 units"],
        "options_hi": ["3 इकाई", "4 इकाई", "5 इकाई", "6 इकाई"],
        "answer_en": "5 units",
        "answer_hi": "5 इकाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The equation of circle with center (2,-3) and radius 5 is:",
        "question_hi": "केंद्र (2,-3) और त्रिज्या 5 वाले वृत्त का समीकरण है:",
        "options_en": ["(x-2)² + (y+3)² = 25", "(x+2)² + (y-3)² = 25", "(x-2)² + (y+3)² = 5", "(x+2)² + (y-3)² = 5"],
        "options_hi": ["(x-2)² + (y+3)² = 25", "(x+2)² + (y-3)² = 25", "(x-2)² + (y+3)² = 5", "(x+2)² + (y-3)² = 5"],
        "answer_en": "(x-2)² + (y+3)² = 25",
        "answer_hi": "(x-2)² + (y+3)² = 25",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The focus of parabola y² = 16x is:",
        "question_hi": "परवलय y² = 16x का फोकस है:",
        "options_en": ["(4,0)", "(-4,0)", "(0,4)", "(0,-4)"],
        "options_hi": ["(4,0)", "(-4,0)", "(0,4)", "(0,-4)"],
        "answer_en": "(4,0)",
        "answer_hi": "(4,0)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The distance between parallel lines 3x+4y=5 and 3x+4y=10 is:",
        "question_hi": "समानांतर रेखाओं 3x+4y=5 और 3x+4y=10 के बीच की दूरी है:",
        "options_en": ["1 unit", "2 units", "3 units", "4 units"],
        "options_hi": ["1 इकाई", "2 इकाई", "3 इकाई", "4 इकाई"],
        "answer_en": "1 unit",
        "answer_hi": "1 इकाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
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
        "num": 26,
        "question_en": "The slope of line perpendicular to 2x+3y=7 is:",
        "question_hi": "रेखा 2x+3y=7 के लंबवत रेखा की प्रवणता है:",
        "options_en": ["-2/3", "2/3", "3/2", "-3/2"],
        "options_hi": ["-2/3", "2/3", "3/2", "-3/2"],
        "answer_en": "3/2",
        "answer_hi": "3/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The coordinates of point dividing the line joining (1,2) and (4,5) in ratio 2:1 internally are:",
        "question_hi": "बिंदुओं (1,2) और (4,5) को मिलाने वाली रेखा को 2:1 के अनुपात में आंतरिक रूप से विभाजित करने वाले बिंदु के निर्देशांक हैं:",
        "options_en": ["(2,3)", "(3,4)", "(4,5)", "(5,6)"],
        "options_hi": ["(2,3)", "(3,4)", "(4,5)", "(5,6)"],
        "answer_en": "(3,4)",
        "answer_hi": "(3,4)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The area of triangle with vertices (0,0), (4,0), (0,3) is:",
        "question_hi": "शीर्षों (0,0), (4,0), (0,3) वाले त्रिभुज का क्षेत्रफल है:",
        "options_en": ["6 sq units", "12 sq units", "18 sq units", "24 sq units"],
        "options_hi": ["6 वर्ग इकाई", "12 वर्ग इकाई", "18 वर्ग इकाई", "24 वर्ग इकाई"],
        "answer_en": "6 sq units",
        "answer_hi": "6 वर्ग इकाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The equation of line with slope 2 and y-intercept 3 is:",
        "question_hi": "प्रवणता 2 और y-अंत:खंड 3 वाली रेखा का समीकरण है:",
        "options_en": ["y=2x+3", "y=3x+2", "y=2x-3", "y=3x-2"],
        "options_hi": ["y=2x+3", "y=3x+2", "y=2x-3", "y=3x-2"],
        "answer_en": "y=2x+3",
        "answer_hi": "y=2x+3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The distance of point (3,4) from origin is:",
        "question_hi": "बिंदु (3,4) की मूल बिंदु से दूरी है:",
        "options_en": ["3 units", "4 units", "5 units", "7 units"],
        "options_hi": ["3 इकाई", "4 इकाई", "5 इकाई", "7 इकाई"],
        "answer_en": "5 units",
        "answer_hi": "5 इकाई",
        "attempted": false,
        "selected": ""
    },

    // Biology - Human Physiology (31-40)
    {
        "num": 31,
        "question_en": "The enzyme pepsin is active in:",
        "question_hi": "एंजाइम पेप्सिन सक्रिय होता है:",
        "options_en": ["Mouth", "Stomach", "Small intestine", "Large intestine"],
        "options_hi": ["मुंह", "आमाशय", "छोटी आंत", "बड़ी आंत"],
        "answer_en": "Stomach",
        "answer_hi": "आमाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Oxygen is transported in blood mainly by:",
        "question_hi": "रक्त में ऑक्सीजन का परिवहन मुख्य रूप से होता है:",
        "options_en": ["Plasma", "Hemoglobin", "Platelets", "White blood cells"],
        "options_hi": ["प्लाज्मा", "हीमोग्लोबिन", "प्लेटलेट्स", "श्वेत रक्त कोशिकाएं"],
        "answer_en": "Hemoglobin",
        "answer_hi": "हीमोग्लोबिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The functional unit of kidney is:",
        "question_hi": "वृक्क की कार्यात्मक इकाई है:",
        "options_en": ["Neuron", "Nephron", "Alveoli", "Villi"],
        "options_hi": ["न्यूरॉन", "नेफ्रॉन", "एल्वियोली", "विलाई"],
        "answer_en": "Nephron",
        "answer_hi": "नेफ्रॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Insulin is produced by:",
        "question_hi": "इंसुलिन उत्पन्न होता है:",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "आमाशय"],
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
        "question_en": "The hormone responsible for fight or flight response is:",
        "question_hi": "लड़ाई या उड़ान प्रतिक्रिया के लिए जिम्मेदार हार्मोन है:",
        "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
        "options_hi": ["इंसुलिन", "एड्रेनालाईन", "थायरोक्सिन", "एस्ट्रोजन"],
        "answer_en": "Adrenaline",
        "answer_hi": "एड्रेनालाईन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The site of gas exchange in lungs is:",
        "question_hi": "फेफड़ों में गैस विनिमय का स्थल है:",
        "options_en": ["Bronchi", "Bronchioles", "Alveoli", "Trachea"],
        "options_hi": ["ब्रोंकाई", "ब्रोंकिओल्स", "एल्वियोली", "ट्रेकिआ"],
        "answer_en": "Alveoli",
        "answer_hi": "एल्वियोली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "Vitamin D is synthesized in skin in presence of:",
        "question_hi": "त्वचा में विटामिन D संश्लेषित होता है की उपस्थिति में:",
        "options_en": ["Moonlight", "Sunlight", "Artificial light", "Darkness"],
        "options_hi": ["चांदनी", "सूर्यप्रकाश", "कृत्रिम प्रकाश", "अंधेरा"],
        "answer_en": "Sunlight",
        "answer_hi": "सूर्यप्रकाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
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
        "num": 40,
        "question_en": "The process of formation of blood cells is called:",
        "question_hi": "रक्त कोशिकाओं के निर्माण की प्रक्रिया कहलाती है:",
        "options_en": ["Hemolysis", "Hemopoiesis", "Hemostasis", "Hemodialysis"],
        "options_hi": ["हीमोलाइसिस", "हेमोपोइएसिस", "हेमोस्टेसिस", "हेमोडायलिसिस"],
        "answer_en": "Hemopoiesis",
        "answer_hi": "हेमोपोइएसिस",
        "attempted": false,
        "selected": ""
    },

    // English - Vocabulary & Comprehension (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct synonym of 'Benevolent':",
        "question_hi": "'Benevolent' का सही समानार्थी चुनें:",
        "options_en": ["Cruel", "Kind", "Selfish", "Greedy"],
        "options_hi": ["क्रूर", "दयालु", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Identify the correctly spelled word:",
        "question_hi": "सही वर्तनी वाला शब्द पहचानें:",
        "options_en": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "options_hi": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "answer_en": "Accommodate",
        "answer_hi": "Accommodate",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
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
        "num": 44,
        "question_en": "Fill in the blank: 'She is allergic ___ cats.'",
        "question_hi": "रिक्त स्थान भरें: 'She is allergic ___ cats.'",
        "options_en": ["to", "for", "with", "by"],
        "options_hi": ["to", "for", "with", "by"],
        "answer_en": "to",
        "answer_hi": "to",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Identify the part of speech for 'quickly':",
        "question_hi": "'quickly' के भाषण का भाग पहचानें:",
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
        "question_en": "Identify the error: 'Neither of the boys are coming to the party.'",
        "question_hi": "त्रुटि पहचानें: 'Neither of the boys are coming to the party.'",
        "options_en": ["Neither", "boys", "are", "coming"],
        "options_hi": ["Neither", "boys", "are", "coming"],
        "answer_en": "are",
        "answer_hi": "are",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Choose the correct plural form of 'criterion':",
        "question_hi": "'criterion' का सही बहुवचन रूप चुनें:",
        "options_en": ["Criterions", "Criteria", "Criterias", "Criterion"],
        "options_hi": ["Criterions", "Criteria", "Criterias", "Criterion"],
        "answer_en": "Criteria",
        "answer_hi": "Criteria",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Fill in the blank: 'If I ___ you, I would study harder.'",
        "question_hi": "रिक्त स्थान भरें: 'If I ___ you, I would study harder.'",
        "options_en": ["am", "was", "were", "is"],
        "options_hi": ["am", "was", "were", "is"],
        "answer_en": "were",
        "answer_hi": "were",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Identify the type of sentence: 'Please close the door.'",
        "question_hi": "वाक्य का प्रकार पहचानें: 'Please close the door.'",
        "options_en": ["Declarative", "Interrogative", "Imperative", "Exclamatory"],
        "options_hi": ["विधानसूचक", "प्रश्नवाचक", "आदेशसूचक", "विस्मयसूचक"],
        "answer_en": "Imperative",
        "answer_hi": "आदेशसूचक",
        "attempted": false,
        "selected": ""
    },

    // Hindi - Literature & Grammar (51-60)
    {
        "num": 51,
        "question_en": "'प्रेमचंद' का मूल नाम था:",
        "question_hi": "'प्रेमचंद' का मूल नाम था:",
        "options_en": ["धनपत राय", "मुंशी प्रेमचंद", "नवाब राय", "प्रेमचंद श्रीवास्तव"],
        "options_hi": ["धनपत राय", "मुंशी प्रेमचंद", "नवाब राय", "प्रेमचंद श्रीवास्तव"],
        "answer_en": "धनपत राय",
        "answer_hi": "धनपत राय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'गोदान' उपन्यास के लेखक हैं:",
        "question_hi": "'गोदान' उपन्यास के लेखक हैं:",
        "options_en": ["जयशंकर प्रसाद", "महादेवी वर्मा", "प्रेमचंद", "सूर्यकांत त्रिपाठी निराला"],
        "options_hi": ["जयशंकर प्रसाद", "महादेवी वर्मा", "प्रेमचंद", "सूर्यकांत त्रिपाठी निराला"],
        "answer_en": "प्रेमचंद",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "कौन सा शब्द संज्ञा है?",
        "question_hi": "कौन सा शब्द संज्ञा है?",
        "options_en": ["सुंदर", "तेज", "लड़का", "धीरे"],
        "options_hi": ["सुंदर", "तेज", "लड़का", "धीरे"],
        "answer_en": "लड़का",
        "answer_hi": "लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "'कमल' का पर्यायवाची शब्द है:",
        "question_hi": "'कमल' का पर्यायवाची शब्द है:",
        "options_en": ["पद्म", "गुलाब", "चमेली", "सूरजमुखी"],
        "options_hi": ["पद्म", "गुलाब", "चमेली", "सूरजमुखी"],
        "answer_en": "पद्म",
        "answer_hi": "पद्म",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "कौन सा शब्द क्रिया विशेषण है?",
        "question_hi": "कौन सा शब्द क्रिया विशेषण है?",
        "options_en": ["लाल", "तेज", "धीरे", "सुंदर"],
        "options_hi": ["लाल", "तेज", "धीरे", "सुंदर"],
        "answer_en": "धीरे",
        "answer_hi": "धीरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'रामायण' के रचयिता हैं:",
        "question_hi": "'रामायण' के रचयिता हैं:",
        "options_en": ["वेद व्यास", "तुलसीदास", "वाल्मीकि", "सूरदास"],
        "options_hi": ["वेद व्यास", "तुलसीदास", "वाल्मीकि", "सूरदास"],
        "answer_en": "वाल्मीकि",
        "answer_hi": "वाल्मीकि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "कौन सा शब्द स्त्रीलिंग है?",
        "question_hi": "कौन सा शब्द स्त्रीलिंग है?",
        "options_en": ["पुस्तक", "लड़का", "घर", "मेज"],
        "options_hi": ["पुस्तक", "लड़का", "घर", "मेज"],
        "answer_en": "पुस्तक",
        "answer_hi": "पुस्तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'सत्यार्थ प्रकाश' के लेखक हैं:",
        "question_hi": "'सत्यार्थ प्रकाश' के लेखक हैं:",
        "options_en": ["रवींद्रनाथ टैगोर", "स्वामी दयानंद सरस्वती", "महात्मा गांधी", "जवाहरलाल नेहरू"],
        "options_hi": ["रवींद्रनाथ टैगोर", "स्वामी दयानंद सरस्वती", "महात्मा गांधी", "जवाहरलाल नेहरू"],
        "answer_en": "स्वामी दयानंद सरस्वती",
        "answer_hi": "स्वामी दयानंद सरस्वती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "कौन सा शब्द विशेषण है?",
        "question_hi": "कौन सा शब्द विशेषण है?",
        "options_en": ["खेलना", "सुंदर", "लड़का", "जल्दी"],
        "options_hi": ["खेलना", "सुंदर", "लड़का", "जल्दी"],
        "answer_en": "सुंदर",
        "answer_hi": "सुंदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'महाभारत' के रचयिता हैं:",
        "question_hi": "'महाभारत' के रचयिता हैं:",
        "options_en": ["वाल्मीकि", "वेद व्यास", "तुलसीदास", "कालिदास"],
        "options_hi": ["वाल्मीकि", "वेद व्यास", "तुलसीदास", "कालिदास"],
        "answer_en": "वेद व्यास",
        "answer_hi": "वेद व्यास",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - India & World (61-70)
    {
        "num": 61,
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
        "num": 62,
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
        "num": 63,
        "question_en": "The chemical symbol for silver is:",
        "question_hi": "चांदी का रासायनिक प्रतीक है:",
        "options_en": ["Si", "Ag", "Au", "Fe"],
        "options_hi": ["Si", "Ag", "Au", "Fe"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The largest desert in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान है:",
        "options_en": ["Gobi Desert", "Sahara Desert", "Arabian Desert", "Kalahari Desert"],
        "options_hi": ["गोबी रेगिस्तान", "सहारा रेगिस्तान", "अरब रेगिस्तान", "कालाहारी रेगिस्तान"],
        "answer_en": "Sahara Desert",
        "answer_hi": "सहारा रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "question_en": "The currency of United Kingdom is:",
        "question_hi": "यूनाइटेड किंगडम की मुद्रा है:",
        "options_en": ["Euro", "Dollar", "Pound", "Yen"],
        "options_hi": ["यूरो", "डॉलर", "पाउंड", "येन"],
        "answer_en": "Pound",
        "answer_hi": "पाउंड",
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
        "question_en": "The dimensional formula of angular momentum is:",
        "question_hi": "कोणीय संवेग का विमीय सूत्र है:",
        "options_en": ["ML²T⁻¹", "MLT⁻¹", "ML²T⁻²", "MLT⁻²"],
        "options_hi": ["ML²T⁻¹", "MLT⁻¹", "ML²T⁻²", "MLT⁻²"],
        "answer_en": "ML²T⁻¹",
        "answer_hi": "ML²T⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The IUPAC name of CH₃-CH₂-CHO is:",
        "question_hi": "CH₃-CH₂-CHO का IUPAC नाम है:",
        "options_en": ["Propanal", "Ethanal", "Butanal", "Methanal"],
        "options_hi": ["प्रोपेनल", "एथेनल", "ब्यूटेनल", "मेथेनल"],
        "answer_en": "Propanal",
        "answer_hi": "प्रोपेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
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
        "num": 74,
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
        "num": 75,
        "question_en": "The SI unit of luminous intensity is:",
        "question_hi": "ज्योति तीव्रता की SI इकाई है:",
        "options_en": ["Lumen", "Candela", "Lux", "Watt"],
        "options_hi": ["लुमेन", "कैंडेला", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
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
        "question_en": "The derivative of cos(x) is:",
        "question_hi": "cos(x) का अवकलज है:",
        "options_en": ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"],
        "options_hi": ["sin(x)", "-sin(x)", "cos(x)", "-cos(x)"],
        "answer_en": "-sin(x)",
        "answer_hi": "-sin(x)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The site of protein synthesis in cell is:",
        "question_hi": "कोशिका में प्रोटीन संश्लेषण का स्थल है:",
        "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
        "answer_en": "Ribosome",
        "answer_hi": "राइबोसोम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The coordination number in body-centered cubic structure is:",
        "question_hi": "अंत:केंद्रित घनीय संरचना में उपसहसंयोजन संख्या है:",
        "options_en": ["6", "8", "12", "4"],
        "options_hi": ["6", "8", "12", "4"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The value of lim(x→0) (e^x - 1)/x is:",
        "question_hi": "lim(x→0) (e^x - 1)/x का मान है:",
        "options_en": ["0", "1", "e", "∞"],
        "options_hi": ["0", "1", "e", "∞"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The magnetic moment of a current loop is:",
        "question_hi": "धारा लूप का चुंबकीय आघूर्ण है:",
        "options_en": ["IA", "I²A", "I/A", "A/I"],
        "options_hi": ["IA", "I²A", "I/A", "A/I"],
        "answer_en": "IA",
        "answer_hi": "IA",
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
        "question_en": "The value of ∫(1/(1+x²)) dx is:",
        "question_hi": "∫(1/(1+x²)) dx का मान है:",
        "options_en": ["tan⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C", "log(1+x²) + C"],
        "options_hi": ["tan⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C", "log(1+x²) + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The hormone that regulates sleep-wake cycle is:",
        "question_hi": "वह हार्मोन जो नींद-जागने के चक्र को नियंत्रित करता है:",
        "options_en": ["Melatonin", "Insulin", "Thyroxine", "Adrenaline"],
        "options_hi": ["मेलाटोनिन", "इंसुलिन", "थायरोक्सिन", "एड्रेनालाईन"],
        "answer_en": "Melatonin",
        "answer_hi": "मेलाटोनिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The unit of electric charge is:",
        "question_hi": "विद्युत आवेश की इकाई है:",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पीयर", "कूलॉम", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The number of structural isomers of butane is:",
        "question_hi": "ब्यूटेन के संरचनात्मक समावयवियों की संख्या है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
        "question_en": "The process of conversion of NO₂ to N₂ is called:",
        "question_hi": "NO₂ के N₂ में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Denitrification",
        "answer_hi": "विनाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The force between two parallel current carrying conductors is:",
        "question_hi": "दो समानांतर धारावाही चालकों के बीच बल है:",
        "options_en": ["Inversely proportional to distance", "Directly proportional to distance", "Inversely proportional to square of distance", "Independent of distance"],
        "options_hi": ["दूरी के व्युत्क्रमानुपाती", "दूरी के समानुपाती", "दूरी के वर्ग के व्युत्क्रमानुपाती", "दूरी से स्वतंत्र"],
        "answer_en": "Inversely proportional to distance",
        "answer_hi": "दूरी के व्युत्क्रमानुपाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The compound that shows tautomerism is:",
        "question_hi": "वह यौगिक जो टॉटोमेरिज्म दर्शाता है:",
        "options_en": ["Acetone", "Acetaldehyde", "Both A and B", "None"],
        "options_hi": ["एसीटोन", "एसीटैल्डिहाइड", "A और B दोनों", "कोई नहीं"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
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
        "num": 98,
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
        "num": 99,
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