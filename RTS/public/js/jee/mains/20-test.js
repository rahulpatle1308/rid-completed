const questions = [
    // Physics - Class 12 Level (1-20)
    {
        "num": 1,
        "question_en": "A charged particle moves in a magnetic field. The force experienced by it is maximum when the angle between velocity and magnetic field is:",
        "question_hi": "एक आवेशित कण चुंबकीय क्षेत्र में गति करता है। इस पर लगने वाला बल अधिकतम होता है जब वेग और चुंबकीय क्षेत्र के बीच का कोण होता है:",
        "options_en": ["0°", "45°", "90°", "180°"],
        "options_hi": ["0°", "45°", "90°", "180°"],
        "answer_en": "90°",
        "answer_hi": "90°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The SI unit of electric flux is:",
        "question_hi": "विद्युत फ्लक्स की SI इकाई है:",
        "options_en": ["Volt-meter", "Newton/Coulomb", "Weber", "Tesla"],
        "options_hi": ["वोल्ट-मीटर", "न्यूटन/कूलॉम", "वेबर", "टेस्ला"],
        "answer_en": "Volt-meter",
        "answer_hi": "वोल्ट-मीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "In a p-n junction diode, the forward bias is applied when:",
        "question_hi": "p-n जंक्शन डायोड में, फॉरवर्ड बायस लगाया जाता है जब:",
        "options_en": ["p-side is at higher potential", "n-side is at higher potential", "Both at same potential", "None of these"],
        "options_hi": ["p-साइड उच्च विभव पर हो", "n-साइड उच्च विभव पर हो", "दोनों समान विभव पर हों", "इनमें से कोई नहीं"],
        "answer_en": "p-side is at higher potential",
        "answer_hi": "p-साइड उच्च विभव पर हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The phenomenon of light used in optical fibers is:",
        "question_hi": "ऑप्टिकल फाइबर में प्रयुक्त प्रकाश की घटना है:",
        "options_en": ["Refraction", "Dispersion", "Total internal reflection", "Interference"],
        "options_hi": ["अपवर्तन", "विक्षेपण", "पूर्ण आंतरिक परावर्तन", "व्यतिकरण"],
        "answer_en": "Total internal reflection",
        "answer_hi": "पूर्ण आंतरिक परावर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The half-life of a radioactive element is 10 years. What fraction remains undecayed after 30 years?",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्ध-जीवन 10 वर्ष है। 30 वर्ष बाद कितना अंश अविघटित रहता है?",
        "options_en": ["1/2", "1/4", "1/8", "1/16"],
        "options_hi": ["1/2", "1/4", "1/8", "1/16"],
        "answer_en": "1/8",
        "answer_hi": "1/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "A transformer works on the principle of:",
        "question_hi": "ट्रांसफॉर्मर किस सिद्धांत पर कार्य करता है:",
        "options_en": ["Self induction", "Mutual induction", "Electromagnetic induction", "All of these"],
        "options_hi": ["स्व-प्रेरण", "पारस्परिक प्रेरण", "विद्युत चुम्बकीय प्रेरण", "उपरोक्त सभी"],
        "answer_en": "Mutual induction",
        "answer_hi": "पारस्परिक प्रेरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The dimensional formula of pressure is:",
        "question_hi": "दाब का विमीय सूत्र है:",
        "options_en": ["MLT⁻²", "ML⁻¹T⁻²", "ML²T⁻²", "ML⁻²T⁻²"],
        "options_hi": ["MLT⁻²", "ML⁻¹T⁻²", "ML²T⁻²", "ML⁻²T⁻²"],
        "answer_en": "ML⁻¹T⁻²",
        "answer_hi": "ML⁻¹T⁻²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In Young's double slit experiment, if the distance between slits is doubled, the fringe width becomes:",
        "question_hi": "यंग के द्वि-छिद्र प्रयोग में, यदि छिद्रों के बीच की दूरी दोगुनी कर दी जाए, तो फ्रिंज चौड़ाई हो जाती है:",
        "options_en": ["Half", "Double", "Four times", "One-fourth"],
        "options_hi": ["आधी", "दोगुनी", "चार गुनी", "एक-चौथाई"],
        "answer_en": "Half",
        "answer_hi": "आधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The energy of a photon of wavelength 5000 Å is:",
        "question_hi": "5000 Å तरंगदैर्ध्य वाले फोटॉन की ऊर्जा है:",
        "options_en": ["2.48 eV", "3.98 eV", "1.24 eV", "4.96 eV"],
        "options_hi": ["2.48 eV", "3.98 eV", "1.24 eV", "4.96 eV"],
        "answer_en": "2.48 eV",
        "answer_hi": "2.48 eV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "A body is projected with velocity u at angle θ with horizontal. The maximum height reached is:",
        "question_hi": "एक पिंड को क्षैतिज से θ कोण पर u वेग से प्रक्षेपित किया जाता है। प्राप्त अधिकतम ऊंचाई है:",
        "options_en": ["u²sin²θ/g", "u²sin²θ/2g", "u²sin2θ/g", "u²sin2θ/2g"],
        "options_hi": ["u²sin²θ/g", "u²sin²θ/2g", "u²sin2θ/g", "u²sin2θ/2g"],
        "answer_en": "u²sin²θ/2g",
        "answer_hi": "u²sin²θ/2g",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Class 12 Level (11-30)
    {
        "num": 11,
        "question_en": "Which of the following is not a colligative property?",
        "question_hi": "निम्नलिखित में से कौन सा अणुसंख्य गुणधर्म नहीं है?",
        "options_en": ["Osmotic pressure", "Lowering of vapor pressure", "Elevation in boiling point", "Viscosity"],
        "options_hi": ["परासरण दाब", "वाष्प दाब में कमी", "क्वथनांक में उन्नयन", "श्यानता"],
        "answer_en": "Viscosity",
        "answer_hi": "श्यानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The IUPAC name of CH₃-CH(CH₃)-CH₂-CHO is:",
        "question_hi": "CH₃-CH(CH₃)-CH₂-CHO का IUPAC नाम है:",
        "options_en": ["2-Methylbutanal", "3-Methylbutanal", "Isopentanal", "2-Methylpropanal"],
        "options_hi": ["2-मेथिलब्यूटेनल", "3-मेथिलब्यूटेनल", "आइसोपेंटेनल", "2-मेथिलप्रोपेनल"],
        "answer_en": "3-Methylbutanal",
        "answer_hi": "3-मेथिलब्यूटेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "In the reaction 2NO + O₂ → 2NO₂, if the rate of disappearance of O₂ is 0.02 M/s, the rate of appearance of NO₂ is:",
        "question_hi": "अभिक्रिया 2NO + O₂ → 2NO₂ में, यदि O₂ के विलुप्त होने की दर 0.02 M/s है, तो NO₂ के उत्पन्न होने की दर है:",
        "options_en": ["0.01 M/s", "0.02 M/s", "0.04 M/s", "0.08 M/s"],
        "options_hi": ["0.01 M/s", "0.02 M/s", "0.04 M/s", "0.08 M/s"],
        "answer_en": "0.04 M/s",
        "answer_hi": "0.04 M/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following elements has the highest electron affinity?",
        "question_hi": "निम्नलिखित में से किस तत्व की इलेक्ट्रॉन बंधुता सबसे अधिक है?",
        "options_en": ["Fluorine", "Chlorine", "Bromine", "Iodine"],
        "options_hi": ["फ्लोरीन", "क्लोरीन", "ब्रोमीन", "आयोडीन"],
        "answer_en": "Chlorine",
        "answer_hi": "क्लोरीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The number of unpaired electrons in Fe²⁺ (Z=26) is:",
        "question_hi": "Fe²⁺ (Z=26) में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["4", "5", "6", "3"],
        "options_hi": ["4", "5", "6", "3"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which of the following is a natural polymer?",
        "question_hi": "निम्नलिखित में से कौन एक प्राकृतिक बहुलक है?",
        "options_en": ["Nylon", "Polyethylene", "Cellulose", "PVC"],
        "options_hi": ["नायलॉन", "पॉलीइथाइलीन", "सेल्यूलोज", "PVC"],
        "answer_en": "Cellulose",
        "answer_hi": "सेल्यूलोज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The pH of 10⁻⁸ M HCl solution is:",
        "question_hi": "10⁻⁸ M HCl विलयन का pH है:",
        "options_en": ["8", "7", "6", "Between 6 and 7"],
        "options_hi": ["8", "7", "6", "6 और 7 के बीच"],
        "answer_en": "Between 6 and 7",
        "answer_hi": "6 और 7 के बीच",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "In the electrolysis of aqueous NaCl, the product at cathode is:",
        "question_hi": "जलीय NaCl के विद्युत् अपघटन में, कैथोड पर उत्पाद है:",
        "options_en": ["Cl₂", "H₂", "NaOH", "Na"],
        "options_hi": ["Cl₂", "H₂", "NaOH", "Na"],
        "answer_en": "H₂",
        "answer_hi": "H₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The compound that shows geometrical isomerism is:",
        "question_hi": "वह यौगिक जो ज्यामितीय समावयवता दर्शाता है:",
        "options_en": ["Propene", "1-Butene", "2-Butene", "Ethene"],
        "options_hi": ["प्रोपीन", "1-ब्यूटीन", "2-ब्यूटीन", "ईथीन"],
        "answer_en": "2-Butene",
        "answer_hi": "2-ब्यूटीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The coordination number in face-centered cubic structure is:",
        "question_hi": "फलक-केंद्रित घनीय संरचना में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Class 12 Level (21-40)
    {
        "num": 21,
        "question_en": "The value of ∫(x³ + 2x² + 1)dx is:",
        "question_hi": "∫(x³ + 2x² + 1)dx का मान है:",
        "options_en": ["x⁴/4 + 2x³/3 + x + C", "x⁴/4 + x³/3 + x + C", "x⁴/4 + 2x³/3 + C", "x⁴ + 2x³ + x + C"],
        "options_hi": ["x⁴/4 + 2x³/3 + x + C", "x⁴/4 + x³/3 + x + C", "x⁴/4 + 2x³/3 + C", "x⁴ + 2x³ + x + C"],
        "answer_en": "x⁴/4 + 2x³/3 + x + C",
        "answer_hi": "x⁴/4 + 2x³/3 + x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "If A and B are two independent events with P(A)=0.3 and P(B)=0.4, then P(A∩B) is:",
        "question_hi": "यदि A और B दो स्वतंत्र घटनाएँ हैं जहाँ P(A)=0.3 और P(B)=0.4, तो P(A∩B) है:",
        "options_en": ["0.12", "0.7", "0.1", "0.58"],
        "options_hi": ["0.12", "0.7", "0.1", "0.58"],
        "answer_en": "0.12",
        "answer_hi": "0.12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The derivative of sin²x with respect to x is:",
        "question_hi": "sin²x का x के सापेक्ष अवकलज है:",
        "options_en": ["2sinx", "2cosx", "sin2x", "cos2x"],
        "options_hi": ["2sinx", "2cosx", "sin2x", "cos2x"],
        "answer_en": "sin2x",
        "answer_hi": "sin2x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The number of terms in the expansion of (a+b)⁸ is:",
        "question_hi": "(a+b)⁸ के विस्तार में पदों की संख्या है:",
        "options_en": ["7", "8", "9", "10"],
        "options_hi": ["7", "8", "9", "10"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "If A = [[2,3],[1,4]] and B = [[1,2],[3,4]], then A+B is:",
        "question_hi": "यदि A = [[2,3],[1,4]] और B = [[1,2],[3,4]], तो A+B है:",
        "options_en": ["[[3,5],[4,8]]", "[[2,6],[3,8]]", "[[3,5],[3,8]]", "[[2,5],[4,8]]"],
        "options_hi": ["[[3,5],[4,8]]", "[[2,6],[3,8]]", "[[3,5],[3,8]]", "[[2,5],[4,8]]"],
        "answer_en": "[[3,5],[4,8]]",
        "answer_hi": "[[3,5],[4,8]]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
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
        "num": 27,
        "question_en": "The area of a circle of radius 7 cm is:",
        "question_hi": "7 cm त्रिज्या वाले वृत्त का क्षेत्रफल है:",
        "options_en": ["44 cm²", "154 cm²", "22 cm²", "77 cm²"],
        "options_hi": ["44 cm²", "154 cm²", "22 cm²", "77 cm²"],
        "answer_en": "154 cm²",
        "answer_hi": "154 cm²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "If tanθ = 3/4, then sinθ is:",
        "question_hi": "यदि tanθ = 3/4, तो sinθ है:",
        "options_en": ["3/5", "4/5", "5/3", "5/4"],
        "options_hi": ["3/5", "4/5", "5/3", "5/4"],
        "answer_en": "3/5",
        "answer_hi": "3/5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The solution of dy/dx = 2x is:",
        "question_hi": "dy/dx = 2x का हल है:",
        "options_en": ["y = x² + C", "y = 2x + C", "y = x²", "y = 2x"],
        "options_hi": ["y = x² + C", "y = 2x + C", "y = x²", "y = 2x"],
        "answer_en": "y = x² + C",
        "answer_hi": "y = x² + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The number of diagonals in a hexagon is:",
        "question_hi": "एक षट्भुज में विकर्णों की संख्या है:",
        "options_en": ["6", "9", "12", "15"],
        "options_hi": ["6", "9", "12", "15"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },

    // Biology - Class 12 Level (31-50)
    {
        "num": 31,
        "question_en": "Which of the following is not a part of the female reproductive system in humans?",
        "question_hi": "निम्नलिखित में से कौन मानव में मादा प्रजनन तंत्र का भाग नहीं है?",
        "options_en": ["Ovary", "Uterus", "Vas deferens", "Fallopian tube"],
        "options_hi": ["अंडाशय", "गर्भाशय", "वास डेफेरेंस", "फैलोपियन ट्यूब"],
        "answer_en": "Vas deferens",
        "answer_hi": "वास डेफेरेंस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The process of conversion of NO₂ to N₂ in nitrogen cycle is called:",
        "question_hi": "नाइट्रोजन चक्र में NO₂ के N₂ में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Denitrification",
        "answer_hi": "विनाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "DNA replication is:",
        "question_hi": "DNA प्रतिकृति है:",
        "options_en": ["Conservative", "Semi-conservative", "Dispersive", "Random"],
        "options_hi": ["संरक्षी", "अर्ध-संरक्षी", "विकीर्ण", "यादृच्छिक"],
        "answer_en": "Semi-conservative",
        "answer_hi": "अर्ध-संरक्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "Which plant hormone promotes cell division?",
        "question_hi": "कौन सा पादप हार्मोन कोशिका विभाजन को बढ़ावा देता है?",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
        "answer_en": "Cytokinin",
        "answer_hi": "साइटोकाइनिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
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
        "num": 36,
        "question_en": "The human heart has how many chambers?",
        "question_hi": "मानव हृदय में कितने कक्ष होते हैं?",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which of the following is not a greenhouse gas?",
        "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
        "options_en": ["CO₂", "CH₄", "O₂", "N₂O"],
        "options_hi": ["CO₂", "CH₄", "O₂", "N₂O"],
        "answer_en": "O₂",
        "answer_hi": "O₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The enzyme that digests proteins in stomach is:",
        "question_hi": "आमाशय में प्रोटीनों को पचाने वाला एंजाइम है:",
        "options_en": ["Pepsin", "Trypsin", "Amylase", "Lipase"],
        "options_hi": ["पेप्सिन", "ट्रिप्सिन", "एमाइलेज", "लाइपेज"],
        "answer_en": "Pepsin",
        "answer_hi": "पेप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "DNA is made of:",
        "question_hi": "DNA बना होता है:",
        "options_en": ["Nucleotides", "Amino acids", "Fatty acids", "Sugars"],
        "options_hi": ["न्यूक्लियोटाइड्स", "अमीनो अम्ल", "वसा अम्ल", "शर्कराओं"],
        "answer_en": "Nucleotides",
        "answer_hi": "न्यूक्लियोटाइड्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The process of conversion of glucose to pyruvate is called:",
        "question_hi": "ग्लूकोज के पाइरुवेट में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Glycolysis", "Krebs cycle", "Electron transport", "Fermentation"],
        "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "इलेक्ट्रॉन परिवहन", "किण्वन"],
        "answer_en": "Glycolysis",
        "answer_hi": "ग्लाइकोलाइसिस",
        "attempted": false,
        "selected": ""
    },

    // English Grammar (41-60)
    {
        "num": 41,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["He don't like apples", "He doesn't like apples", "He didn't likes apples", "He not like apples"],
        "options_hi": ["He don't like apples", "He doesn't like apples", "He didn't likes apples", "He not like apples"],
        "answer_en": "He doesn't like apples",
        "answer_hi": "He doesn't like apples",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which word is a pronoun?",
        "question_hi": "कौन सा शब्द सर्वनाम है?",
        "options_en": ["Run", "Beautiful", "She", "Quickly"],
        "options_hi": ["Run", "Beautiful", "She", "Quickly"],
        "answer_en": "She",
        "answer_hi": "She",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The antonym of 'brave' is:",
        "question_hi": "'brave' का विलोम है:",
        "options_en": ["Courageous", "Fearless", "Coward", "Bold"],
        "options_hi": ["Courageous", "Fearless", "Coward", "Bold"],
        "answer_en": "Coward",
        "answer_hi": "Coward",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Choose the correct plural form of 'child':",
        "question_hi": "'child' का सही बहुवचन रूप चुनें:",
        "options_en": ["Childs", "Children", "Childes", "Childern"],
        "options_hi": ["Childs", "Children", "Childes", "Childern"],
        "answer_en": "Children",
        "answer_hi": "Children",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which sentence is in passive voice?",
        "question_hi": "कौन सा वाक्य कर्मवाच्य में है?",
        "options_en": ["The cat chased the mouse", "The mouse was chased by the cat", "The cat is chasing the mouse", "The cat will chase the mouse"],
        "options_hi": ["The cat chased the mouse", "The mouse was chased by the cat", "The cat is chasing the mouse", "The cat will chase the mouse"],
        "answer_en": "The mouse was chased by the cat",
        "answer_hi": "The mouse was chased by the cat",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The synonym of 'happy' is:",
        "question_hi": "'happy' का समानार्थी है:",
        "options_en": ["Sad", "Joyful", "Angry", "Tired"],
        "options_hi": ["Sad", "Joyful", "Angry", "Tired"],
        "answer_en": "Joyful",
        "answer_hi": "Joyful",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which word is an adjective?",
        "question_hi": "कौन सा शब्द विशेषण है?",
        "options_en": ["Run", "Beautiful", "She", "Quickly"],
        "options_hi": ["Run", "Beautiful", "She", "Quickly"],
        "answer_en": "Beautiful",
        "answer_hi": "Beautiful",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "Choose the correct form: 'I ___ to school every day.'",
        "question_hi": "सही रूप चुनें: 'I ___ to school every day.'",
        "options_en": ["go", "goes", "went", "gone"],
        "options_hi": ["go", "goes", "went", "gone"],
        "answer_en": "go",
        "answer_hi": "go",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The past tense of 'eat' is:",
        "question_hi": "'eat' का भूतकाल है:",
        "options_en": ["Eated", "Ate", "Eaten", "Eating"],
        "options_hi": ["Eated", "Ate", "Eaten", "Eating"],
        "answer_en": "Ate",
        "answer_hi": "Ate",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which is a conjunction?",
        "question_hi": "कौन सा संयोजक है?",
        "options_en": ["And", "Run", "Beautiful", "Quickly"],
        "options_hi": ["And", "Run", "Beautiful", "Quickly"],
        "answer_en": "And",
        "answer_hi": "And",
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
        "options_en": ["चाँद", "तारा", "रात", "चंद्रमा"],
        "options_hi": ["चाँद", "तारा", "रात", "चंद्रमा"],
        "answer_en": "चाँद",
        "answer_hi": "चाँद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "कौन सा शब्द स्त्रीलिंग है?",
        "question_hi": "कौन सा शब्द स्त्रीलिंग है?",
        "options_en": ["लड़का", "किताब", "मेज", "घर"],
        "options_hi": ["लड़का", "किताब", "मेज", "घर"],
        "answer_en": "किताब",
        "answer_hi": "किताब",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "'गाय' का बहुवचन है:",
        "question_hi": "'गाय' का बहुवचन है:",
        "options_en": ["गायें", "गायों", "गाय", "गाये"],
        "options_hi": ["गायें", "गायों", "गाय", "गाये"],
        "answer_en": "गायें",
        "answer_hi": "गायें",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "कौन सा क्रिया शब्द है?",
        "question_hi": "कौन सा क्रिया शब्द है?",
        "options_en": ["सुंदर", "तेज", "पढ़ना", "लाल"],
        "options_hi": ["सुंदर", "तेज", "पढ़ना", "लाल"],
        "answer_en": "पढ़ना",
        "answer_hi": "पढ़ना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'राम पुस्तक पढ़ता है।' इस वाक्य में कर्म है:",
        "question_hi": "'राम पुस्तक पढ़ता है।' इस वाक्य में कर्म है:",
        "options_en": ["राम", "पढ़ता", "पुस्तक", "है"],
        "options_hi": ["राम", "पढ़ता", "पुस्तक", "है"],
        "answer_en": "पुस्तक",
        "answer_hi": "पुस्तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "कौन सा विशेषण शब्द है?",
        "question_hi": "कौन सा विशेषण शब्द है?",
        "options_en": ["खेलना", "सुंदर", "लड़का", "जल्दी"],
        "options_hi": ["खेलना", "सुंदर", "लड़का", "जल्दी"],
        "answer_en": "सुंदर",
        "answer_hi": "सुंदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'मोहन स्कूल जाता है।' इस वाक्य में क्रिया है:",
        "question_hi": "'मोहन स्कूल जाता है।' इस वाक्य में क्रिया है:",
        "options_en": ["मोहन", "स्कूल", "जाता", "है"],
        "options_hi": ["मोहन", "स्कूल", "जाता", "है"],
        "answer_en": "जाता",
        "answer_hi": "जाता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "कौन सा संज्ञा शब्द है?",
        "question_hi": "कौन सा संज्ञा शब्द है?",
        "options_en": ["चलना", "तेज", "लड़का", "धीरे"],
        "options_hi": ["चलना", "तेज", "लड़का", "धीरे"],
        "answer_en": "लड़का",
        "answer_hi": "लड़का",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'प्रकाश' का विलोम है:",
        "question_hi": "'प्रकाश' का विलोम है:",
        "options_en": ["उजाला", "चमक", "अंधकार", "रोशनी"],
        "options_hi": ["उजाला", "चमक", "अंधकार", "रोशनी"],
        "answer_en": "अंधकार",
        "answer_hi": "अंधकार",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (61-80)
    {
        "num": 61,
        "question_en": "Who is known as the Father of the Indian Constitution?",
        "question_hi": "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
        "answer_en": "B.R. Ambedkar",
        "answer_hi": "बी.आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Which is the longest river in India?",
        "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
        "options_en": ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
        "options_hi": ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
        "answer_en": "Ganga",
        "answer_hi": "गंगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Who was the first Prime Minister of India?",
        "question_hi": "भारत के प्रथम प्रधानमंत्री कौन थे?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Which is the national animal of India?",
        "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Lion", "Tiger", "Elephant", "Peacock"],
        "options_hi": ["शेर", "बाघ", "हाथी", "मोर"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The capital of India is:",
        "question_hi": "भारत की राजधानी है:",
        "options_en": ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        "options_hi": ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
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
        "num": 67,
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
        "num": 68,
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
        "num": 69,
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
        "num": 70,
        "question_en": "The currency of Japan is:",
        "question_hi": "जापान की मुद्रा है:",
        "options_en": ["Yuan", "Yen", "Won", "Dollar"],
        "options_hi": ["युआन", "येन", "वॉन", "डॉलर"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },

    // Computer Science (71-90)
    {
        "num": 71,
        "question_en": "What does CPU stand for?",
        "question_hi": "CPU का पूरा नाम क्या है?",
        "options_en": ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Computer Program Unit"],
        "options_hi": ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "Which of the following is an input device?",
        "question_hi": "निम्नलिखित में से कौन सा इनपुट डिवाइस है?",
        "options_en": ["Monitor", "Printer", "Keyboard", "Speaker"],
        "options_hi": ["मॉनिटर", "प्रिंटर", "कीबोर्ड", "स्पीकर"],
        "answer_en": "Keyboard",
        "answer_hi": "कीबोर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the full form of RAM?",
        "question_hi": "RAM का पूरा नाम क्या है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अवेलेबल मेमोरी", "रीड अवेलेबल मेमोरी"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "Which programming language is known as the mother of all languages?",
        "question_hi": "किस प्रोग्रामिंग भाषा को सभी भाषाओं की जननी कहा जाता है?",
        "options_en": ["C", "Java", "Python", "Assembly"],
        "options_hi": ["C", "Java", "Python", "Assembly"],
        "answer_en": "C",
        "answer_hi": "C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What does HTML stand for?",
        "question_hi": "HTML का पूरा नाम क्या है?",
        "options_en": ["Hyper Text Markup Language", "High Text Machine Language", "Hyper Tabular Markup Language", "None of these"],
        "options_hi": ["हाइपर टेक्स्ट मार्कअप लैंग्वेज", "हाई टेक्स्ट मशीन लैंग्वेज", "हाइपर टैब्युलर मार्कअप लैंग्वेज", "इनमें से कोई नहीं"],
        "answer_en": "Hyper Text Markup Language",
        "answer_hi": "हाइपर टेक्स्ट मार्कअप लैंग्वेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Which of the following is not an operating system?",
        "question_hi": "निम्नलिखित में से कौन सा ऑपरेटिंग सिस्टम नहीं है?",
        "options_en": ["Windows", "Linux", "Microsoft Word", "Android"],
        "options_hi": ["विंडोज", "लिनक्स", "माइक्रोसॉफ्ट वर्ड", "एंड्रॉयड"],
        "answer_en": "Microsoft Word",
        "answer_hi": "माइक्रोसॉफ्ट वर्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the binary equivalent of decimal 5?",
        "question_hi": "दशमलव 5 का बाइनरी समकक्ष क्या है?",
        "options_en": ["101", "110", "100", "111"],
        "options_hi": ["101", "110", "100", "111"],
        "answer_en": "101",
        "answer_hi": "101",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which company developed Java?",
        "question_hi": "जावा को किस कंपनी ने विकसित किया?",
        "options_en": ["Microsoft", "Sun Microsystems", "IBM", "Apple"],
        "options_hi": ["माइक्रोसॉफ्ट", "सन माइक्रोसिस्टम्स", "IBM", "एप्पल"],
        "answer_en": "Sun Microsystems",
        "answer_hi": "सन माइक्रोसिस्टम्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What does URL stand for?",
        "question_hi": "URL का पूरा नाम क्या है?",
        "options_en": ["Uniform Resource Locator", "Universal Resource Locator", "Uniform Resource Link", "Universal Resource Link"],
        "options_hi": ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रिसोर्स लोकेटर", "यूनिफॉर्म रिसोर्स लिंक", "यूनिवर्सल रिसोर्स लिंक"],
        "answer_en": "Uniform Resource Locator",
        "answer_hi": "यूनिफॉर्म रिसोर्स लोकेटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "Which of the following is a programming language?",
        "question_hi": "निम्नलिखित में से कौन सी प्रोग्रामिंग भाषा है?",
        "options_en": ["HTML", "CSS", "Python", "HTTP"],
        "options_hi": ["HTML", "CSS", "Python", "HTTP"],
        "answer_en": "Python",
        "answer_hi": "Python",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (81-100)
    {
        "num": 81,
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
        "num": 82,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The chemical formula of water is:",
        "question_hi": "पानी का रासायनिक सूत्र है:",
        "options_en": ["H₂O", "CO₂", "NaCl", "O₂"],
        "options_hi": ["H₂O", "CO₂", "NaCl", "O₂"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "Who discovered penicillin?",
        "question_hi": "पेनिसिलिन की खोज किसने की?",
        "options_en": ["Alexander Fleming", "Marie Curie", "Louis Pasteur", "Robert Koch"],
        "options_hi": ["अलेक्जेंडर फ्लेमिंग", "मैरी क्यूरी", "लुई पाश्चर", "रॉबर्ट कोच"],
        "answer_en": "Alexander Fleming",
        "answer_hi": "अलेक्जेंडर फ्लेमिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
        "question_en": "The process by which plants make their food is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे अपना भोजन बनाते हैं, कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Digestion", "Transpiration"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "पाचन", "वाष्पोत्सर्जन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The smallest bone in human body is located in the:",
        "question_hi": "मानव शरीर की सबसे छोटी हड्डी स्थित है:",
        "options_en": ["Ear", "Finger", "Toe", "Nose"],
        "options_hi": ["कान", "उंगली", "पैर की उंगली", "नाक"],
        "answer_en": "Ear",
        "answer_hi": "कान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Iron", "Mercury", "Copper", "Aluminum"],
        "options_hi": ["लोहा", "पारा", "तांबा", "एल्युमिनियम"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
        "question_en": "The speed of light in vacuum is approximately:",
        "question_hi": "निर्वात में प्रकाश की गति लगभग है:",
        "options_en": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10¹⁰ m/s"],
        "options_hi": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁴ m/s", "3×10¹⁰ m/s"],
        "answer_en": "3×10⁸ m/s",
        "answer_hi": "3×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The largest ocean in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा महासागर है:",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "Which blood group is known as the universal donor?",
        "question_hi": "कौन सा रक्त समूह सार्वभौमिक दाता के रूप में जाना जाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The instrument used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दाब मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
        "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "Which planet has the most moons?",
        "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
        "options_en": ["Earth", "Jupiter", "Saturn", "Mars"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
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
        "num": 96,
        "question_en": "The largest desert in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान है:",
        "options_en": ["Sahara Desert", "Gobi Desert", "Arabian Desert", "Kalahari Desert"],
        "options_hi": ["सहारा रेगिस्तान", "गोबी रेगिस्तान", "अरब रेगिस्तान", "कालाहारी रेगिस्तान"],
        "answer_en": "Sahara Desert",
        "answer_hi": "सहारा रेगिस्तान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
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
        "num": 98,
        "question_en": "The process of converting sugar into alcohol is called:",
        "question_hi": "शर्करा को अल्कोहल में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Fermentation", "Distillation", "Evaporation", "Condensation"],
        "options_hi": ["किण्वन", "आसवन", "वाष्पीकरण", "संघनन"],
        "answer_en": "Fermentation",
        "answer_hi": "किण्वन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which organ in human body produces insulin?",
        "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन उत्पन्न करता है?",
        "options_en": ["Liver", "Pancreas", "Kidney", "Stomach"],
        "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "आमाशय"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The first woman to win a Nobel Prize was:",
        "question_hi": "नोबेल पुरस्कार जीतने वाली पहली महिला थीं:",
        "options_en": ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Jane Goodall"],
        "options_hi": ["मैरी क्यूरी", "मदर टेरेसा", "रोजालिंड फ्रैंकलिन", "जेन गुडॉल"],
        "answer_en": "Marie Curie",
        "answer_hi": "मैरी क्यूरी",
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