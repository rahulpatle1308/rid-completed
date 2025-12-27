const questions = [
    // Physics - Class 12 Level (1-20)
    {
        "num": 1,
        "question_en": "Two point charges +4μC and -9μC are placed 1m apart in air. The position where electric field is zero is:",
        "question_hi": "+4μC और -9μC के दो बिंदु आवेश वायु में 1m दूरी पर रखे गए हैं। वह स्थिति जहाँ विद्युत क्षेत्र शून्य है:",
        "options_en": ["0.4m from +4μC", "0.4m from -9μC", "0.6m from +4μC", "0.6m from -9μC"],
        "options_hi": ["+4μC से 0.4m", "-9μC से 0.4m", "+4μC से 0.6m", "-9μC से 0.6m"],
        "answer_en": "0.4m from +4μC",
        "answer_hi": "+4μC से 0.4m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "A proton and an electron are placed in uniform electric field. The ratio of their accelerations is:",
        "question_hi": "एक प्रोटॉन और एक इलेक्ट्रॉन को एकसमान विद्युत क्षेत्र में रखा गया है। उनके त्वरणों का अनुपात है:",
        "options_en": ["1:1", "mp:me", "me:mp", "1:1836"],
        "options_hi": ["1:1", "mp:me", "me:mp", "1:1836"],
        "answer_en": "me:mp",
        "answer_hi": "me:mp",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The magnetic field at the center of circular coil of radius R carrying current I is:",
        "question_hi": "R त्रिज्या की वृत्ताकार कुंडली जिसमें धारा I प्रवाहित हो रही है, के केंद्र पर चुंबकीय क्षेत्र है:",
        "options_en": ["μ₀I/2R", "μ₀I/2πR", "μ₀I/R", "2μ₀I/R"],
        "options_hi": ["μ₀I/2R", "μ₀I/2πR", "μ₀I/R", "2μ₀I/R"],
        "answer_en": "μ₀I/2R",
        "answer_hi": "μ₀I/2R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "A ray of light passes from glass (μ=1.5) to water (μ=1.33). The critical angle is:",
        "question_hi": "कांच (μ=1.5) से पानी (μ=1.33) में प्रकाश की एक किरण गुजरती है। क्रांतिक कोण है:",
        "options_en": ["48.75°", "41.81°", "62.73°", "90°"],
        "options_hi": ["48.75°", "41.81°", "62.73°", "90°"],
        "answer_en": "62.73°",
        "answer_hi": "62.73°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The de Broglie wavelength of electron in first Bohr orbit is:",
        "question_hi": "प्रथम बोहर कक्षा में इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य है:",
        "options_en": ["Equal to circumference", "Half of circumference", "Twice the circumference", "One-fourth of circumference"],
        "options_hi": ["परिधि के बराबर", "परिधि की आधी", "परिधि से दोगुनी", "परिधि की एक-चौथाई"],
        "answer_en": "Equal to circumference",
        "answer_hi": "परिधि के बराबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "A transistor amplifier has voltage gain 50. If input voltage is 20mV, output voltage is:",
        "question_hi": "एक ट्रांजिस्टर प्रवर्धक का वोल्टेज लाभ 50 है। यदि निवेश वोल्टेज 20mV है, निर्गत वोल्टेज है:",
        "options_en": ["100mV", "500mV", "1V", "2.5V"],
        "options_hi": ["100mV", "500mV", "1V", "2.5V"],
        "answer_en": "1V",
        "answer_hi": "1V",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The energy stored in capacitor of capacitance C charged to potential V is:",
        "question_hi": "C धारिता के संधारित्र में संचित ऊर्जा जो V विभव तक आवेशित है:",
        "options_en": ["½CV²", "CV²", "½QV", "Both A and C"],
        "options_hi": ["½CV²", "CV²", "½QV", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "In AC circuit containing only capacitor, the phase difference between voltage and current is:",
        "question_hi": "केवल संधारित्र युक्त AC परिपथ में, वोल्टेज और धारा के बीच कलांतर है:",
        "options_en": ["0°", "45°", "90°", "180°"],
        "options_hi": ["0°", "45°", "90°", "180°"],
        "answer_en": "90°",
        "answer_hi": "90°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "A body is projected with velocity 20m/s at 60° to horizontal. Its range is:",
        "question_hi": "एक पिंड को क्षैतिज से 60° पर 20m/s वेग से प्रक्षेपित किया जाता है। इसकी परास है:",
        "options_en": ["20√3 m", "40 m", "20 m", "35 m"],
        "options_hi": ["20√3 m", "40 m", "20 m", "35 m"],
        "answer_en": "20√3 m",
        "answer_hi": "20√3 m",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The moment of inertia of solid sphere about its diameter is:",
        "question_hi": "ठोस गोले का इसके व्यास के परितः जड़त्व आघूर्ण है:",
        "options_en": ["2/5 MR²", "2/3 MR²", "1/2 MR²", "MR²"],
        "options_hi": ["2/5 MR²", "2/3 MR²", "1/2 MR²", "MR²"],
        "answer_en": "2/5 MR²",
        "answer_hi": "2/5 MR²",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Class 12 Level (11-30)
    {
        "num": 11,
        "question_en": "Which of the following is strongest oxidizing agent?",
        "question_hi": "निम्नलिखित में से कौन सबसे प्रबल ऑक्सीकारक है?",
        "options_en": ["F₂", "Cl₂", "Br₂", "I₂"],
        "options_hi": ["F₂", "Cl₂", "Br₂", "I₂"],
        "answer_en": "F₂",
        "answer_hi": "F₂",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "In Freundlich adsorption isotherm, the value of 1/n is:",
        "question_hi": "फ्रायंडलिक अधिशोषण समतापी में, 1/n का मान है:",
        "options_en": ["0 to 1", "1 to ∞", "0 to ∞", "Always 1"],
        "options_hi": ["0 से 1", "1 से ∞", "0 से ∞", "सदैव 1"],
        "answer_en": "0 to 1",
        "answer_hi": "0 से 1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The IUPAC name of [Co(NH₃)₅Cl]Cl₂ is:",
        "question_hi": "[Co(NH₃)₅Cl]Cl₂ का IUPAC नाम है:",
        "options_en": ["Pentaamminechlorocobalt(III) chloride", "Pentaamminecobalt(III) chloride", "Pentaamminechlorocobalt(II) chloride", "Chloropentaamminecobalt(III) chloride"],
        "options_hi": ["पेंटाएमीनक्लोरोकोबाल्ट(III) क्लोराइड", "पेंटाएमीनकोबाल्ट(III) क्लोराइड", "पेंटाएमीनक्लोरोकोबाल्ट(II) क्लोराइड", "क्लोरोपेंटाएमीनकोबाल्ट(III) क्लोराइड"],
        "answer_en": "Pentaamminechlorocobalt(III) chloride",
        "answer_hi": "पेंटाएमीनक्लोरोकोबाल्ट(III) क्लोराइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "Which of the following is not a colligative property?",
        "question_hi": "निम्नलिखित में से कौन सा अणुसंख्य गुणधर्म नहीं है?",
        "options_en": ["Osmotic pressure", "Lowering of vapour pressure", "Elevation in boiling point", "Viscosity"],
        "options_hi": ["परासरण दाब", "वाष्प दाब में अवनमन", "क्वथनांक में उन्नयन", "श्यानता"],
        "answer_en": "Viscosity",
        "answer_hi": "श्यानता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The number of unpaired electrons in Fe²⁺ is:",
        "question_hi": "Fe²⁺ में अयुग्मित इलेक्ट्रॉनों की संख्या है:",
        "options_en": ["2", "4", "5", "6"],
        "options_hi": ["2", "4", "5", "6"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "In Cannizzaro reaction, the intermediate formed is:",
        "question_hi": "कैनिज़ारो अभिक्रिया में, बनने वाला मध्यवर्ती है:",
        "options_en": ["Carbocation", "Carbanion", "Free radical", "Hydride ion"],
        "options_hi": ["कार्बोकैटायन", "कार्बेनायन", "मुक्त मूलक", "हाइड्राइड आयन"],
        "answer_en": "Hydride ion",
        "answer_hi": "हाइड्राइड आयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The catalyst used in Rosenmund reduction is:",
        "question_hi": "रोसेनमुंड अपचयन में प्रयुक्त उत्प्रेरक है:",
        "options_en": ["Pd/BaSO₄", "Ni", "Pt", "Cu"],
        "options_hi": ["Pd/BaSO₄", "Ni", "Pt", "Cu"],
        "answer_en": "Pd/BaSO₄",
        "answer_hi": "Pd/BaSO₄",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which of the following is an example of condensation polymer?",
        "question_hi": "निम्नलिखित में से कौन संघनन बहुलक का उदाहरण है?",
        "options_en": ["Polythene", "PVC", "Nylon-6,6", "Teflon"],
        "options_hi": ["पॉलिथीन", "PVC", "नायलॉन-6,6", "टेफ्लॉन"],
        "answer_en": "Nylon-6,6",
        "answer_hi": "नायलॉन-6,6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The number of sigma bonds in benzene is:",
        "question_hi": "बेंजीन में सिग्मा बंधों की संख्या है:",
        "options_en": ["6", "12", "18", "24"],
        "options_hi": ["6", "12", "18", "24"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The product formed when phenol reacts with bromine water is:",
        "question_hi": "फीनॉल के ब्रोमीन जल के साथ अभिक्रिया करने पर बनने वाला उत्पाद है:",
        "options_en": ["2,4,6-tribromophenol", "o-bromophenol", "p-bromophenol", "Benzene"],
        "options_hi": ["2,4,6-ट्राइब्रोमोफीनॉल", "o-ब्रोमोफीनॉल", "p-ब्रोमोफीनॉल", "बेंजीन"],
        "answer_en": "2,4,6-tribromophenol",
        "answer_hi": "2,4,6-ट्राइब्रोमोफीनॉल",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Class 12 Level (21-40)
    {
        "num": 21,
        "question_en": "The angle between lines x = 2 and x = 5 is:",
        "question_hi": "रेखाओं x = 2 और x = 5 के बीच का कोण है:",
        "options_en": ["0°", "45°", "90°", "180°"],
        "options_hi": ["0°", "45°", "90°", "180°"],
        "answer_en": "0°",
        "answer_hi": "0°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The value of ∫(π/2 to π) sinx dx is:",
        "question_hi": "∫(π/2 से π) sinx dx का मान है:",
        "options_en": ["0", "1", "-1", "2"],
        "options_hi": ["0", "1", "-1", "2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "If A and B are independent events with P(A)=0.3, P(B)=0.4, then P(A∩B) is:",
        "question_hi": "यदि A और B स्वतंत्र घटनाएँ हैं जहाँ P(A)=0.3, P(B)=0.4, तो P(A∩B) है:",
        "options_en": ["0.12", "0.7", "0.1", "0.58"],
        "options_hi": ["0.12", "0.7", "0.1", "0.58"],
        "answer_en": "0.12",
        "answer_hi": "0.12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The distance between parallel lines 3x+4y=5 and 3x+4y=10 is:",
        "question_hi": "समांतर रेखाओं 3x+4y=5 और 3x+4y=10 के बीच की दूरी है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The derivative of sin⁻¹(2x√(1-x²)) with respect to sin⁻¹x is:",
        "question_hi": "sin⁻¹(2x√(1-x²)) का sin⁻¹x के सापेक्ष अवकलज है:",
        "options_en": ["1", "2", "x", "√(1-x²)"],
        "options_hi": ["1", "2", "x", "√(1-x²)"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The area of ellipse x²/a² + y²/b² = 1 is:",
        "question_hi": "दीर्घवृत्त x²/a² + y²/b² = 1 का क्षेत्रफल है:",
        "options_en": ["πab", "2πab", "π(a²+b²)", "π(a+b)"],
        "options_hi": ["πab", "2πab", "π(a²+b²)", "π(a+b)"],
        "answer_en": "πab",
        "answer_hi": "πab",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "If y = x^x, then dy/dx is:",
        "question_hi": "यदि y = x^x, तो dy/dx है:",
        "options_en": ["x^x(1+logx)", "x^xlogx", "x^(x-1)", "x^x"],
        "options_hi": ["x^x(1+logx)", "x^xlogx", "x^(x-1)", "x^x"],
        "answer_en": "x^x(1+logx)",
        "answer_hi": "x^x(1+logx)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The value of ∫(0 to 1) x(1-x)^n dx is:",
        "question_hi": "∫(0 से 1) x(1-x)^n dx का मान है:",
        "options_en": ["1/(n+1)(n+2)", "n/(n+1)(n+2)", "1/n(n+1)", "n/(n+1)"],
        "options_hi": ["1/(n+1)(n+2)", "n/(n+1)(n+2)", "1/n(n+1)", "n/(n+1)"],
        "answer_en": "1/(n+1)(n+2)",
        "answer_hi": "1/(n+1)(n+2)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The number of terms in expansion of (1+x)^n is:",
        "question_hi": "(1+x)^n के विस्तार में पदों की संख्या है:",
        "options_en": ["n", "n+1", "n-1", "2^n"],
        "options_hi": ["n", "n+1", "n-1", "2^n"],
        "answer_en": "n+1",
        "answer_hi": "n+1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The angle between vectors a=i+j and b=i-j is:",
        "question_hi": "सदिश a=i+j और b=i-j के बीच का कोण है:",
        "options_en": ["0°", "45°", "90°", "180°"],
        "options_hi": ["0°", "45°", "90°", "180°"],
        "answer_en": "90°",
        "answer_hi": "90°",
        "attempted": false,
        "selected": ""
    },

    // Biology - Class 12 Level (31-50)
    {
        "num": 31,
        "question_en": "Which part of flower develops into fruit?",
        "question_hi": "फूल का कौन सा भाग फल में विकसित होता है?",
        "options_en": ["Ovary", "Stigma", "Style", "Ovule"],
        "options_hi": ["अंडाशय", "वर्तिकाग्र", "वर्तिका", "बीजांड"],
        "answer_en": "Ovary",
        "answer_hi": "अंडाशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The process of conversion of NO₃⁻ to N₂ is called:",
        "question_hi": "NO₃⁻ के N₂ में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Denitrification",
        "answer_hi": "विनाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which hormone is called stress hormone?",
        "question_hi": "किस हार्मोन को तनाव हार्मोन कहा जाता है?",
        "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
        "options_hi": ["इंसुलिन", "एड्रेनालाईन", "थायरोक्सिन", "एस्ट्रोजन"],
        "answer_en": "Adrenaline",
        "answer_hi": "एड्रेनालाईन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The site of fertilization in human female is:",
        "question_hi": "मानव मादा में निषेचन का स्थल है:",
        "options_en": ["Uterus", "Ovary", "Fallopian tube", "Vagina"],
        "options_hi": ["गर्भाशय", "अंडाशय", "अंडवाहिनी नली", "योनि"],
        "answer_en": "Fallopian tube",
        "answer_hi": "अंडवाहिनी नली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which of the following is a genetic disorder?",
        "question_hi": "निम्नलिखित में से कौन सा आनुवंशिक विकार है?",
        "options_en": ["Malaria", "Typhoid", "Hemophilia", "Cholera"],
        "options_hi": ["मलेरिया", "टाइफाइड", "हीमोफिलिया", "हैजा"],
        "answer_en": "Hemophilia",
        "answer_hi": "हीमोफिलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The process of DNA replication is:",
        "question_hi": "DNA प्रतिकृति की प्रक्रिया है:",
        "options_en": ["Conservative", "Semi-conservative", "Dispersive", "Random"],
        "options_hi": ["संरक्षी", "अर्ध-संरक्षी", "विखंडी", "यादृच्छिक"],
        "answer_en": "Semi-conservative",
        "answer_hi": "अर्ध-संरक्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which plant hormone promotes cell elongation?",
        "question_hi": "कौन सा पादप हार्मोन कोशिका दीर्घीकरण को बढ़ावा देता है?",
        "options_en": ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
        "options_hi": ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
        "answer_en": "Auxin",
        "answer_hi": "ऑक्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The functional unit of kidney is:",
        "question_hi": "वृक्क की क्रियात्मक इकाई है:",
        "options_en": ["Neuron", "Nephron", "Alveoli", "Villi"],
        "options_hi": ["न्यूरॉन", "नेफ्रॉन", "वायुकोश", "अंकुर"],
        "answer_en": "Nephron",
        "answer_hi": "नेफ्रॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
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
        "num": 40,
        "question_en": "The enzyme that digests starch is:",
        "question_hi": "स्टार्च को पचाने वाला एंजाइम है:",
        "options_en": ["Pepsin", "Amylase", "Lipase", "Trypsin"],
        "options_hi": ["पेप्सिन", "एमाइलेज", "लाइपेज", "ट्रिप्सिन"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },

    // English Grammar (41-60)
    {
        "num": 41,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["He don't like coffee", "He doesn't likes coffee", "He doesn't like coffee", "He don't likes coffee"],
        "options_hi": ["He don't like coffee", "He doesn't likes coffee", "He doesn't like coffee", "He don't likes coffee"],
        "answer_en": "He doesn't like coffee",
        "answer_hi": "He doesn't like coffee",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which is the correct passive form: 'They built this house in 1990'?",
        "question_hi": "सही कर्मवाच्य रूप कौन सा है: 'They built this house in 1990'?",
        "options_en": ["This house was built in 1990", "This house is built in 1990", "This house built in 1990", "This house has built in 1990"],
        "options_hi": ["This house was built in 1990", "This house is built in 1990", "This house built in 1990", "This house has built in 1990"],
        "answer_en": "This house was built in 1990",
        "answer_hi": "This house was built in 1990",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Choose the correct article: ___ Ganga is ___ sacred river.",
        "question_hi": "सही उपपद चुनें: ___ गंगा ___ पवित्र नदी है।",
        "options_en": ["The, a", "A, the", "The, the", "No article, a"],
        "options_hi": ["The, a", "A, the", "The, the", "No article, a"],
        "answer_en": "The, a",
        "answer_hi": "The, a",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Identify the adverb: 'She sings beautifully.'",
        "question_hi": "क्रिया विशेषण पहचानें: 'She sings beautifully.'",
        "options_en": ["She", "sings", "beautifully", "None"],
        "options_hi": ["She", "sings", "beautifully", "कोई नहीं"],
        "answer_en": "beautifully",
        "answer_hi": "beautifully",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Choose the correct preposition: 'He is good ___ mathematics.'",
        "question_hi": "सही संबंधसूचक अव्यय चुनें: 'He is good ___ mathematics.'",
        "options_en": ["at", "in", "on", "for"],
        "options_hi": ["at", "in", "on", "for"],
        "answer_en": "at",
        "answer_hi": "at",
        "attempted": false,
        "selected": ""
    },

    // Hindi Grammar (46-65)
    {
        "num": 46,
        "question_en": "'वह पढ़ रहा है' - यह कौन सा काल है?",
        "question_hi": "'वह पढ़ रहा है' - यह कौन सा काल है?",
        "options_en": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "संदिग्ध भूत"],
        "options_hi": ["भूतकाल", "वर्तमान काल", "भविष्यत काल", "संदिग्ध भूत"],
        "answer_en": "वर्तमान काल",
        "answer_hi": "वर्तमान काल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "'राम ने रावण को मारा' - इस वाक्य में कर्म है:",
        "question_hi": "'राम ने रावण को मारा' - इस वाक्य में कर्म है:",
        "options_en": ["राम", "रावण", "मारा", "ने"],
        "options_hi": ["राम", "रावण", "मारा", "ने"],
        "answer_en": "रावण",
        "answer_hi": "रावण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "'सुनहरा' शब्द का पर्यायवाची है:",
        "question_hi": "'सुनहरा' शब्द का पर्यायवाची है:",
        "options_en": ["काला", "स्वर्णिम", "लाल", "नीला"],
        "options_hi": ["काला", "स्वर्णिम", "लाल", "नीला"],
        "answer_en": "स्वर्णिम",
        "answer_hi": "स्वर्णिम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "'अंधा' का विलोम शब्द है:",
        "question_hi": "'अंधा' का विलोम शब्द है:",
        "options_en": ["बहरा", "गूंगा", "आँखोंवाला", "देखनेवाला"],
        "options_hi": ["बहरा", "गूंगा", "आँखोंवाला", "देखनेवाला"],
        "answer_en": "देखनेवाला",
        "answer_hi": "देखनेवाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "'मैं स्कूल जाता हूँ' - इस वाक्य में क्रिया है:",
        "question_hi": "'मैं स्कूल जाता हूँ' - इस वाक्य में क्रिया है:",
        "options_en": ["मैं", "स्कूल", "जाता", "हूँ"],
        "options_hi": ["मैं", "स्कूल", "जाता", "हूँ"],
        "answer_en": "जाता",
        "answer_hi": "जाता",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (51-70)
    {
        "num": 51,
        "question_en": "Who is known as the Father of Indian Constitution?",
        "question_hi": "भारतीय संविधान के जनक के रूप में किसे जाना जाता है?",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
        "answer_en": "B.R. Ambedkar",
        "answer_hi": "बी.आर. अंबेडकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारतीय राष्ट्रगान किसने लिखा?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चटर्जी", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which is the largest state in India by area?",
        "question_hi": "क्षेत्रफल की दृष्टि से भारत का सबसे बड़ा राज्य कौन सा है?",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The chemical formula of water is:",
        "question_hi": "पानी का रासायनिक सूत्र है:",
        "options_en": ["H₂O", "HO₂", "H₂O₂", "HO"],
        "options_hi": ["H₂O", "HO₂", "H₂O₂", "HO"],
        "answer_en": "H₂O",
        "answer_hi": "H₂O",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (56-100)
    {
        "num": 56,
        "question_en": "The SI unit of electric current is:",
        "question_hi": "विद्युत धारा की SI इकाई है:",
        "options_en": ["Volt", "Ampere", "Ohm", "Watt"],
        "options_hi": ["वोल्ट", "एम्पियर", "ओम", "वाट"],
        "answer_en": "Ampere",
        "answer_hi": "एम्पियर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which gas is responsible for global warming?",
        "question_hi": "कौन सी गैस ग्लोबल वार्मिंग के लिए जिम्मेदार है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The process by which plants make food is called:",
        "question_hi": "वह प्रक्रिया जिसके द्वारा पौधे भोजन बनाते हैं, कहलाती है:",
        "options_en": ["Respiration", "Photosynthesis", "Transpiration", "Digestion"],
        "options_hi": ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Photosynthesis",
        "answer_hi": "प्रकाश संश्लेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "Which planet is known as Red Planet?",
        "question_hi": "किस ग्रह को लाल ग्रह के नाम से जाना जाता है?",
        "options_en": ["Mars", "Venus", "Jupiter", "Mercury"],
        "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "बुध"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
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
        "num": 61,
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
        "num": 62,
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
        "num": 63,
        "question_en": "The chemical symbol of gold is:",
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
        "question_en": "The speed of light in vacuum is:",
        "question_hi": "निर्वात में प्रकाश की गति है:",
        "options_en": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10¹⁰ m/s"],
        "options_hi": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10¹⁰ m/s"],
        "answer_en": "3×10⁸ m/s",
        "answer_hi": "3×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The pH of pure water is:",
        "question_hi": "शुद्ध जल का pH है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which cell organelle is called power house of cell?",
        "question_hi": "किस कोशिका अंगक को कोशिका का पावर हाउस कहा जाता है?",
        "options_en": ["Nucleus", "Mitochondria", "Chloroplast", "Ribosome"],
        "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "राइबोसोम"],
        "answer_en": "Mitochondria",
        "answer_hi": "माइटोकॉन्ड्रिया",
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
        "question_en": "The first woman Prime Minister of India was:",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री थीं:",
        "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
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
        "num": 71,
        "question_en": "The number of continents on Earth is:",
        "question_hi": "पृथ्वी पर महाद्वीपों की संख्या है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The chemical formula of common salt is:",
        "question_hi": "सामान्य नमक का रासायनिक सूत्र है:",
        "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
        "answer_en": "NaCl",
        "answer_hi": "NaCl",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
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
        "num": 74,
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
        "num": 75,
        "question_en": "The largest planet in solar system is:",
        "question_hi": "सौर मंडल का सबसे बड़ा ग्रह है:",
        "options_en": ["Earth", "Jupiter", "Saturn", "Neptune"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "नेपच्यून"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
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
        "num": 77,
        "question_en": "The gas used in photosynthesis is:",
        "question_hi": "प्रकाश संश्लेषण में प्रयुक्त गैस है:",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The largest desert in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान है:",
        "options_en": ["Sahara", "Gobi", "Thar", "Kalahari"],
        "options_hi": ["सहारा", "गोबी", "थार", "कालाहारी"],
        "answer_en": "Sahara",
        "answer_hi": "सहारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
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
        "num": 80,
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
        "num": 81,
        "question_en": "The unit of frequency is:",
        "question_hi": "आवृत्ति की इकाई है:",
        "options_en": ["Hertz", "Watt", "Joule", "Newton"],
        "options_hi": ["हर्ट्ज", "वाट", "जूल", "न्यूटन"],
        "answer_en": "Hertz",
        "answer_hi": "हर्ट्ज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The largest moon in solar system is:",
        "question_hi": "सौर मंडल का सबसे बड़ा चंद्रमा है:",
        "options_en": ["Moon", "Titan", "Ganymede", "Europa"],
        "options_hi": ["चंद्रमा", "टाइटन", "गेनीमेड", "यूरोपा"],
        "answer_en": "Ganymede",
        "answer_hi": "गेनीमेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "The study of birds is called:",
        "question_hi": "पक्षियों का अध्ययन कहलाता है:",
        "options_en": ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
        "options_hi": ["ऑर्निथोलॉजी", "कीटविज्ञान", "सरीसृप विज्ञान", "मत्स्य विज्ञान"],
        "answer_en": "Ornithology",
        "answer_hi": "ऑर्निथोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The largest mammal in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा स्तनपायी है:",
        "options_en": ["Elephant", "Giraffe", "Blue Whale", "Hippopotamus"],
        "options_hi": ["हाथी", "जिराफ", "ब्लू व्हेल", "दरियाई घोड़ा"],
        "answer_en": "Blue Whale",
        "answer_hi": "ब्लू व्हेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
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
        "num": 86,
        "question_en": "The largest cell in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी कोशिका है:",
        "options_en": ["Nerve cell", "Red blood cell", "Ovum", "Muscle cell"],
        "options_hi": ["तंत्रिका कोशिका", "लाल रक्त कोशिका", "अंडा", "मांसपेशी कोशिका"],
        "answer_en": "Ovum",
        "answer_hi": "अंडा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The SI unit of force is:",
        "question_hi": "बल की SI इकाई है:",
        "options_en": ["Joule", "Watt", "Newton", "Pascal"],
        "options_hi": ["जूल", "वाट", "न्यूटन", "पास्कल"],
        "answer_en": "Newton",
        "answer_hi": "न्यूटन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The largest volcano in solar system is:",
        "question_hi": "सौर मंडल का सबसे बड़ा ज्वालामुखी है:",
        "options_en": ["Mount Everest", "Mauna Loa", "Olympus Mons", "Krakatoa"],
        "options_hi": ["माउंट एवरेस्ट", "मौना लोआ", "ओलंपस मॉन्स", "क्राकातोआ"],
        "answer_en": "Olympus Mons",
        "answer_hi": "ओलंपस मॉन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The study of fossils is called:",
        "question_hi": "जीवाश्मों का अध्ययन कहलाता है:",
        "options_en": ["Paleontology", "Archaeology", "Geology", "Anthropology"],
        "options_hi": ["पुरातत्व", "पुरातत्व विज्ञान", "भूविज्ञान", "मानव विज्ञान"],
        "answer_en": "Paleontology",
        "answer_hi": "पुरातत्व",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
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
        "num": 91,
        "question_en": "The instrument used to measure humidity is:",
        "question_hi": "आर्द्रता मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
        "options_hi": ["हाइग्रोमीटर", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
        "answer_en": "Hygrometer",
        "answer_hi": "हाइग्रोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
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
        "num": 93,
        "question_en": "The study of viruses is called:",
        "question_hi": "वायरस का अध्ययन कहलाता है:",
        "options_en": ["Virology", "Bacteriology", "Mycology", "Parasitology"],
        "options_hi": ["वायरोलॉजी", "बैक्टीरियोलॉजी", "कवक विज्ञान", "परजीवी विज्ञान"],
        "answer_en": "Virology",
        "answer_hi": "वायरोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The largest bone in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी हड्डी है:",
        "options_en": ["Femur", "Tibia", "Humerus", "Pelvis"],
        "options_hi": ["फीमर", "टिबिया", "ह्यूमरस", "श्रोणि"],
        "answer_en": "Femur",
        "answer_hi": "फीमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The instrument used to measure earthquake intensity is:",
        "question_hi": "भूकंप की तीव्रता मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Seismograph", "Richter scale", "Barometer", "Hygrometer"],
        "options_hi": ["सिस्मोग्राफ", "रिक्टर पैमाना", "बैरोमीटर", "हाइग्रोमीटर"],
        "answer_en": "Seismograph",
        "answer_hi": "सिस्मोग्राफ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The largest waterfall in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा झरना है:",
        "options_en": ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
        "options_hi": ["नियाग्रा फॉल्स", "विक्टोरिया फॉल्स", "एंजेल फॉल्स", "इगाजू फॉल्स"],
        "answer_en": "Angel Falls",
        "answer_hi": "एंजेल फॉल्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The study of blood is called:",
        "question_hi": "रक्त का अध्ययन कहलाता है:",
        "options_en": ["Hematology", "Cardiology", "Neurology", "Dermatology"],
        "options_hi": ["हेमेटोलॉजी", "कार्डियोलॉजी", "न्यूरोलॉजी", "डर्मेटोलॉजी"],
        "answer_en": "Hematology",
        "answer_hi": "हेमेटोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The largest muscle in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी मांसपेशी है:",
        "options_en": ["Biceps", "Triceps", "Gluteus maximus", "Quadriceps"],
        "options_hi": ["बाइसेप्स", "ट्राइसेप्स", "ग्लूटस मैक्सिमस", "क्वाड्रिसेप्स"],
        "answer_en": "Gluteus maximus",
        "answer_hi": "ग्लूटस मैक्सिमस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The instrument used to measure wind speed is:",
        "question_hi": "हवा की गति मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Anemometer", "Barometer", "Hygrometer", "Thermometer"],
        "options_hi": ["एनीमोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
        "answer_en": "Anemometer",
        "answer_hi": "एनीमोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The largest lake in the world is:",
        "question_hi": "दुनिया की सबसे बड़ी झील है:",
        "options_en": ["Caspian Sea", "Lake Superior", "Lake Victoria", "Lake Baikal"],
        "options_hi": ["कैस्पियन सागर", "लेक सुपीरियर", "लेक विक्टोरिया", "लेक बैकाल"],
        "answer_en": "Caspian Sea",
        "answer_hi": "कैस्पियन सागर",
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