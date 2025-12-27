const questions = [
    // Physics - Modern Physics & Semiconductors (1-10)
    {
        "num": 1,
        "question_en": "The photoelectric effect demonstrates:",
        "question_hi": "प्रकाश विद्युत प्रभाव प्रदर्शित करता है:",
        "options_en": ["Wave nature of light", "Particle nature of light", "Both wave and particle nature", "Electromagnetic nature"],
        "options_hi": ["प्रकाश की तरंग प्रकृति", "प्रकाश की कण प्रकृति", "तरंग और कण दोनों प्रकृति", "विद्युत चुम्बकीय प्रकृति"],
        "answer_en": "Particle nature of light",
        "answer_hi": "प्रकाश की कण प्रकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The de Broglie wavelength of an electron accelerated through 100V is approximately:",
        "question_hi": "100V से त्वरित इलेक्ट्रॉन की डी ब्रोग्ली तरंगदैर्ध्य लगभग है:",
        "options_en": ["1.23 Å", "12.3 Å", "0.123 Å", "123 Å"],
        "options_hi": ["1.23 Å", "12.3 Å", "0.123 Å", "123 Å"],
        "answer_en": "1.23 Å",
        "answer_hi": "1.23 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "In an intrinsic semiconductor at room temperature:",
        "question_hi": "कमरे के तापमान पर एक आंतरिक अर्धचालक में:",
        "options_en": ["Number of electrons = Number of holes", "Number of electrons > Number of holes", "Number of holes > Number of electrons", "No charge carriers"],
        "options_hi": ["इलेक्ट्रॉनों की संख्या = होलों की संख्या", "इलेक्ट्रॉनों की संख्या > होलों की संख्या", "होलों की संख्या > इलेक्ट्रॉनों की संख्या", "कोई आवेश वाहक नहीं"],
        "answer_en": "Number of electrons = Number of holes",
        "answer_hi": "इलेक्ट्रॉनों की संख्या = होलों की संख्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The energy gap for silicon at 300K is:",
        "question_hi": "300K पर सिलिकॉन के लिए ऊर्जा अंतराल है:",
        "options_en": ["0.72 eV", "1.1 eV", "1.43 eV", "0.36 eV"],
        "options_hi": ["0.72 eV", "1.1 eV", "1.43 eV", "0.36 eV"],
        "answer_en": "1.1 eV",
        "answer_hi": "1.1 eV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "In a p-n junction diode, the depletion region consists of:",
        "question_hi": "p-n संधि डायोड में, अवक्षय क्षेत्र में होते हैं:",
        "options_en": ["Only electrons", "Only holes", "Immobile ions", "Free charge carriers"],
        "options_hi": ["केवल इलेक्ट्रॉन", "केवल होल", "अचल आयन", "मुक्त आवेश वाहक"],
        "answer_en": "Immobile ions",
        "answer_hi": "अचल आयन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The principle of LASER involves:",
        "question_hi": "लेजर का सिद्धांत शामिल करता है:",
        "options_en": ["Stimulated absorption", "Spontaneous emission", "Stimulated emission", "Both B and C"],
        "options_hi": ["उत्तेजित अवशोषण", "सहज उत्सर्जन", "उत्तेजित उत्सर्जन", "B और C दोनों"],
        "answer_en": "Stimulated emission",
        "answer_hi": "उत्तेजित उत्सर्जन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "In a common emitter amplifier, the phase difference between input and output is:",
        "question_hi": "उभयनिष्ठ उत्सर्जक प्रवर्धक में, निवेश और निर्गत के बीच कलांतर है:",
        "options_en": ["0°", "90°", "180°", "270°"],
        "options_hi": ["0°", "90°", "180°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The Boolean expression for AND gate is:",
        "question_hi": "AND गेट के लिए बूलियन व्यंजक है:",
        "options_en": ["A + B", "A · B", "A ⊕ B", "Ā"],
        "options_hi": ["A + B", "A · B", "A ⊕ B", "Ā"],
        "answer_en": "A · B",
        "answer_hi": "A · B",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The half-life of a radioactive element is 10 days. The fraction remaining after 30 days is:",
        "question_hi": "एक रेडियोधर्मी तत्व का अर्धआयु 10 दिन है। 30 दिनों के बाद शेष भिन्न है:",
        "options_en": ["1/2", "1/4", "1/8", "1/16"],
        "options_hi": ["1/2", "1/4", "1/8", "1/16"],
        "answer_en": "1/8",
        "answer_hi": "1/8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In Bohr's model, the radius of first orbit of hydrogen atom is:",
        "question_hi": "बोहर मॉडल में, हाइड्रोजन परमाणु की प्रथम कक्षा की त्रिज्या है:",
        "options_en": ["0.53 Å", "2.12 Å", "4.77 Å", "8.46 Å"],
        "options_hi": ["0.53 Å", "2.12 Å", "4.77 Å", "8.46 Å"],
        "answer_en": "0.53 Å",
        "answer_hi": "0.53 Å",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Thermodynamics & Equilibrium (11-20)
    {
        "num": 11,
        "question_en": "For a spontaneous process at constant temperature and pressure:",
        "question_hi": "स्थिर तापमान और दबाव पर एक स्वतः प्रक्रिया के लिए:",
        "options_en": ["ΔG > 0", "ΔG < 0", "ΔG = 0", "ΔH = 0"],
        "options_hi": ["ΔG > 0", "ΔG < 0", "ΔG = 0", "ΔH = 0"],
        "answer_en": "ΔG < 0",
        "answer_hi": "ΔG < 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The equilibrium constant for N₂ + 3H₂ ⇌ 2NH₃ is K. For ½N₂ + 3/2H₂ ⇌ NH₃, it will be:",
        "question_hi": "N₂ + 3H₂ ⇌ 2NH₃ के लिए साम्य स्थिरांक K है। ½N₂ + 3/2H₂ ⇌ NH₃ के लिए, यह होगा:",
        "options_en": ["K²", "√K", "K/2", "2K"],
        "options_hi": ["K²", "√K", "K/2", "2K"],
        "answer_en": "√K",
        "answer_hi": "√K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "According to Le Chatelier's principle, for exothermic reaction N₂ + 3H₂ ⇌ 2NH₃, increase in temperature will:",
        "question_hi": "ले शातेलिये सिद्धांत के अनुसार, ऊष्माक्षेपी अभिक्रिया N₂ + 3H₂ ⇌ 2NH₃ के लिए, तापमान में वृद्धि करेगी:",
        "options_en": ["Favor forward reaction", "Favor backward reaction", "No effect", "Increase K"],
        "options_hi": ["अग्र अभिक्रिया को अनुकूल", "पश्च अभिक्रिया को अनुकूल", "कोई प्रभाव नहीं", "K बढ़ाएगी"],
        "answer_en": "Favor backward reaction",
        "answer_hi": "पश्च अभिक्रिया को अनुकूल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The pH of 0.01 M HCl solution is:",
        "question_hi": "0.01 M HCl विलयन का pH है:",
        "options_en": ["1", "2", "7", "12"],
        "options_hi": ["1", "2", "7", "12"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "For a reaction, ΔH = +ve and ΔS = +ve. The reaction is spontaneous at:",
        "question_hi": "एक अभिक्रिया के लिए, ΔH = +ve और ΔS = +ve। अभिक्रिया स्वतः है:",
        "options_en": ["Low temperature", "High temperature", "All temperatures", "No temperature"],
        "options_hi": ["निम्न तापमान", "उच्च तापमान", "सभी तापमान", "कोई तापमान नहीं"],
        "answer_en": "High temperature",
        "answer_hi": "उच्च तापमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The conjugate base of H₂PO₄⁻ is:",
        "question_hi": "H₂PO₄⁻ का संयुग्मी क्षार है:",
        "options_en": ["H₃PO₄", "HPO₄²⁻", "PO₄³⁻", "H₃O⁺"],
        "options_hi": ["H₃PO₄", "HPO₄²⁻", "PO₄³⁻", "H₃O⁺"],
        "answer_en": "HPO₄²⁻",
        "answer_hi": "HPO₄²⁻",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The solubility product of AgCl is 1.8 × 10⁻¹⁰. Its solubility in mol/L is:",
        "question_hi": "AgCl का विलेयता गुणनफल 1.8 × 10⁻¹⁰ है। mol/L में इसकी विलेयता है:",
        "options_en": ["1.8 × 10⁻¹⁰", "1.34 × 10⁻⁵", "3.6 × 10⁻¹⁰", "9.0 × 10⁻¹¹"],
        "options_hi": ["1.8 × 10⁻¹⁰", "1.34 × 10⁻⁵", "3.6 × 10⁻¹⁰", "9.0 × 10⁻¹¹"],
        "answer_en": "1.34 × 10⁻⁵",
        "answer_hi": "1.34 × 10⁻⁵",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "In a reversible process, the entropy of the universe:",
        "question_hi": "एक उत्क्रमणीय प्रक्रिया में, ब्रह्मांड की एन्ट्रॉपी:",
        "options_en": ["Increases", "Decreases", "Remains constant", "Becomes zero"],
        "options_hi": ["बढ़ती है", "घटती है", "स्थिर रहती है", "शून्य हो जाती है"],
        "answer_en": "Remains constant",
        "answer_hi": "स्थिर रहती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The standard Gibbs free energy change for a reaction is related to equilibrium constant by:",
        "question_hi": "किसी अभिक्रिया के लिए मानक गिब्स मुक्त ऊर्जा परिवर्तन साम्य स्थिरांक से संबंधित है:",
        "options_en": ["ΔG° = -RT ln K", "ΔG° = RT ln K", "ΔG° = -RT/K", "ΔG° = RT/K"],
        "options_hi": ["ΔG° = -RT ln K", "ΔG° = RT ln K", "ΔG° = -RT/K", "ΔG° = RT/K"],
        "answer_en": "ΔG° = -RT ln K",
        "answer_hi": "ΔG° = -RT ln K",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The common ion effect influences:",
        "question_hi": "सामान्य आयन प्रभाव प्रभावित करता है:",
        "options_en": ["Solubility", "pH", "Conductivity", "All of these"],
        "options_hi": ["विलेयता", "pH", "चालकता", "उपरोक्त सभी"],
        "answer_en": "All of these",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Integration & Differential Equations (21-30)
    {
        "num": 21,
        "question_en": "∫(1/x) dx equals:",
        "question_hi": "∫(1/x) dx बराबर है:",
        "options_en": ["ln|x| + C", "x + C", "1/x² + C", "ln x² + C"],
        "options_hi": ["ln|x| + C", "x + C", "1/x² + C", "ln x² + C"],
        "answer_en": "ln|x| + C",
        "answer_hi": "ln|x| + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The order of differential equation (d²y/dx²)³ + dy/dx = sin x is:",
        "question_hi": "अवकल समीकरण (d²y/dx²)³ + dy/dx = sin x की कोटि है:",
        "options_en": ["1", "2", "3", "0"],
        "options_hi": ["1", "2", "3", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "∫eˣ dx equals:",
        "question_hi": "∫eˣ dx बराबर है:",
        "options_en": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln eˣ + C"],
        "options_hi": ["eˣ + C", "xeˣ + C", "eˣ/x + C", "ln eˣ + C"],
        "answer_en": "eˣ + C",
        "answer_hi": "eˣ + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The solution of dy/dx = y with y(0) = 1 is:",
        "question_hi": "dy/dx = y का हल y(0) = 1 के साथ है:",
        "options_en": ["y = eˣ", "y = e⁻ˣ", "y = x", "y = 1"],
        "options_hi": ["y = eˣ", "y = e⁻ˣ", "y = x", "y = 1"],
        "answer_en": "y = eˣ",
        "answer_hi": "y = eˣ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "∫sin x dx equals:",
        "question_hi": "∫sin x dx बराबर है:",
        "options_en": ["cos x + C", "-cos x + C", "sin x + C", "-sin x + C"],
        "options_hi": ["cos x + C", "-cos x + C", "sin x + C", "-sin x + C"],
        "answer_en": "-cos x + C",
        "answer_hi": "-cos x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The degree of differential equation (d²y/dx²)² + (dy/dx)³ = 0 is:",
        "question_hi": "अवकल समीकरण (d²y/dx²)² + (dy/dx)³ = 0 की घात है:",
        "options_en": ["1", "2", "3", "Not defined"],
        "options_hi": ["1", "2", "3", "परिभाषित नहीं"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "∫₀¹ x² dx equals:",
        "question_hi": "∫₀¹ x² dx बराबर है:",
        "options_en": ["1/2", "1/3", "1/4", "1"],
        "options_hi": ["1/2", "1/3", "1/4", "1"],
        "answer_en": "1/3",
        "answer_hi": "1/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "The integrating factor of dy/dx + Py = Q is:",
        "question_hi": "dy/dx + Py = Q का समाकलन गुणक है:",
        "options_en": ["e∫P dx", "e∫Q dx", "e∫P dy", "e∫Q dy"],
        "options_hi": ["e∫P dx", "e∫Q dx", "e∫P dy", "e∫Q dy"],
        "answer_en": "e∫P dx",
        "answer_hi": "e∫P dx",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "∫sec²x dx equals:",
        "question_hi": "∫sec²x dx बराबर है:",
        "options_en": ["tan x + C", "sec x + C", "cot x + C", "cosec x + C"],
        "options_hi": ["tan x + C", "sec x + C", "cot x + C", "cosec x + C"],
        "answer_en": "tan x + C",
        "answer_hi": "tan x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The area bounded by y = x², x = 0, x = 2 and x-axis is:",
        "question_hi": "y = x², x = 0, x = 2 और x-अक्ष से घिरा क्षेत्रफल है:",
        "options_en": ["8/3", "4/3", "2/3", "16/3"],
        "options_hi": ["8/3", "4/3", "2/3", "16/3"],
        "answer_en": "8/3",
        "answer_hi": "8/3",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics & Evolution (31-40)
    {
        "num": 31,
        "question_en": "The phenotypic ratio in F₂ generation of monohybrid cross is:",
        "question_hi": "एकसंकर संकरण की F₂ पीढ़ी में फेनोटाइपिक अनुपात है:",
        "options_en": ["3:1", "1:2:1", "9:3:3:1", "1:1"],
        "options_hi": ["3:1", "1:2:1", "9:3:3:1", "1:1"],
        "answer_en": "3:1",
        "answer_hi": "3:1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The theory of natural selection was proposed by:",
        "question_hi": "प्राकृतिक चयन का सिद्धांत प्रस्तावित किया गया था:",
        "options_en": ["Lamarck", "Darwin", "Mendel", "de Vries"],
        "options_hi": ["लामार्क", "डार्विन", "मेंडल", "डी व्रीस"],
        "answer_en": "Darwin",
        "answer_hi": "डार्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "DNA replication is:",
        "question_hi": "DNA प्रतिकृति है:",
        "options_en": ["Conservative", "Semi-conservative", "Dispersive", "Random"],
        "options_hi": ["संरक्षी", "अर्ध-संरक्षी", "विखंडी", "यादृच्छिक"],
        "answer_en": "Semi-conservative",
        "answer_hi": "अर्ध-संरक्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The human genome contains approximately:",
        "question_hi": "मानव जीनोम में लगभग होते हैं:",
        "options_en": ["20,000-25,000 genes", "50,000-60,000 genes", "100,000 genes", "1,000,000 genes"],
        "options_hi": ["20,000-25,000 जीन", "50,000-60,000 जीन", "100,000 जीन", "1,000,000 जीन"],
        "answer_en": "20,000-25,000 genes",
        "answer_hi": "20,000-25,000 जीन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The process of mRNA synthesis from DNA is called:",
        "question_hi": "DNA से mRNA संश्लेषण की प्रक्रिया कहलाती है:",
        "options_en": ["Replication", "Transcription", "Translation", "Transduction"],
        "options_hi": ["प्रतिकृति", "प्रतिलिपिकरण", "अनुवाद", "स्थानांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलिपिकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The fossil of Archaeopteryx shows features of:",
        "question_hi": "आर्कियोप्टेरिक्स के जीवाश्म दर्शाते हैं:",
        "options_en": ["Reptiles and birds", "Reptiles and mammals", "Birds and mammals", "Amphibians and reptiles"],
        "options_hi": ["सरीसृप और पक्षी", "सरीसृप और स्तनधारी", "पक्षी और स्तनधारी", "उभयचर और सरीसृप"],
        "answer_en": "Reptiles and birds",
        "answer_hi": "सरीसृप और पक्षी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The sex determination in humans is of which type?",
        "question_hi": "मनुष्यों में लिंग निर्धारण किस प्रकार का होता है?",
        "options_en": ["XX-XY type", "ZZ-ZW type", "Haplodiploidy", "Environmental"],
        "options_hi": ["XX-XY प्रकार", "ZZ-ZW प्रकार", "अगुणित-द्विगुणित", "पर्यावरणीय"],
        "answer_en": "XX-XY type",
        "answer_hi": "XX-XY प्रकार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The process of evolution of different species in a given geographical area is called:",
        "question_hi": "किसी दिए गए भौगोलिक क्षेत्र में विभिन्न प्रजातियों के विकास की प्रक्रिया कहलाती है:",
        "options_en": ["Adaptive radiation", "Divergent evolution", "Convergent evolution", "Parallel evolution"],
        "options_hi": ["अनुकूली विकिरण", "अपसारी विकास", "अभिसारी विकास", "समानांतर विकास"],
        "answer_en": "Adaptive radiation",
        "answer_hi": "अनुकूली विकिरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The genetic code is:",
        "question_hi": "आनुवंशिक कोड है:",
        "options_en": ["Ambiguous", "Degenerate", "Overlapping", "Non-universal"],
        "options_hi": ["अस्पष्ट", "पतित", "अतिव्यापी", "असार्वभौमिक"],
        "answer_en": "Degenerate",
        "answer_hi": "पतित",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The theory of inheritance of acquired characters was proposed by:",
        "question_hi": "अर्जित लक्षणों की वंशागति का सिद्धांत प्रस्तावित किया गया था:",
        "options_en": ["Darwin", "Mendel", "Lamarck", "de Vries"],
        "options_hi": ["डार्विन", "मेंडल", "लामार्क", "डी व्रीस"],
        "answer_en": "Lamarck",
        "answer_hi": "लामार्क",
        "attempted": false,
        "selected": ""
    },

    // English - Grammar & Vocabulary (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["She don't like apples", "She doesn't like apples", "She didn't likes apples", "She not like apples"],
        "options_hi": ["She don't like apples", "She doesn't like apples", "She didn't likes apples", "She not like apples"],
        "answer_en": "She doesn't like apples",
        "answer_hi": "She doesn't like apples",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "The synonym of 'Benevolent' is:",
        "question_hi": "'Benevolent' का समानार्थी है:",
        "options_en": ["Malevolent", "Kind", "Cruel", "Selfish"],
        "options_hi": ["दुर्भावनापूर्ण", "दयालु", "क्रूर", "स्वार्थी"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
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
        "num": 44,
        "question_en": "The antonym of 'Courage' is:",
        "question_hi": "'Courage' का विलोम है:",
        "options_en": ["Bravery", "Fear", "Confidence", "Valor"],
        "options_hi": ["बहादुरी", "डर", "आत्मविश्वास", "शौर्य"],
        "answer_en": "Fear",
        "answer_hi": "डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Choose the correct passive voice: 'They built this house in 1990.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'They built this house in 1990.'",
        "options_en": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built by them in 1990", "This house has been built in 1990"],
        "options_hi": ["This house was built in 1990 by them", "This house is built in 1990 by them", "This house built by them in 1990", "This house has been built in 1990"],
        "answer_en": "This house was built in 1990 by them",
        "answer_hi": "This house was built in 1990 by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Identify the figure of speech: 'The stars danced playfully in the moonlit sky.'",
        "question_hi": "अलंकार पहचानें: 'The stars danced playfully in the moonlit sky.'",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the correct word: 'The committee ___ divided in their opinion.'",
        "question_hi": "सही शब्द चुनें: 'The committee ___ divided in their opinion.'",
        "options_en": ["is", "are", "were", "have"],
        "options_hi": ["is", "are", "were", "have"],
        "answer_en": "is",
        "answer_hi": "is",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The meaning of 'Ephemeral' is:",
        "question_hi": "'Ephemeral' का अर्थ है:",
        "options_en": ["Eternal", "Temporary", "Permanent", "Everlasting"],
        "options_hi": ["शाश्वत", "अस्थायी", "स्थायी", "चिरस्थायी"],
        "answer_en": "Temporary",
        "answer_hi": "अस्थायी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Identify the tense: 'I have been working here for five years.'",
        "question_hi": "काल पहचानें: 'I have been working here for five years.'",
        "options_en": ["Present perfect", "Present perfect continuous", "Past perfect", "Future perfect"],
        "options_hi": ["वर्तमान पूर्ण", "वर्तमान पूर्ण अपूर्ण", "भूतपूर्ण", "भविष्य पूर्ण"],
        "answer_en": "Present perfect continuous",
        "answer_hi": "वर्तमान पूर्ण अपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Choose the correctly spelled word:",
        "question_hi": "सही वर्तनी वाला शब्द चुनें:",
        "options_en": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "options_hi": ["Accommodate", "Acommodate", "Accomodate", "Acomodate"],
        "answer_en": "Accommodate",
        "answer_hi": "Accommodate",
        "attempted": false,
        "selected": ""
    },

    // Hindi - व्याकरण और साहित्य (51-60)
    {
        "num": 51,
        "question_en": "'आँसू' काव्य संग्रह के रचयिता हैं:",
        "question_hi": "'आँसू' काव्य संग्रह के रचयिता हैं:",
        "options_en": ["जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा", "हरिवंश राय बच्चन"],
        "options_hi": ["जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा", "हरिवंश राय बच्चन"],
        "answer_en": "जयशंकर प्रसाद",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "कौन सा शब्द तद्भव है?",
        "question_hi": "कौन सा शब्द तद्भव है?",
        "options_en": ["आग", "अग्नि", "वह्नि", "पावक"],
        "options_hi": ["आग", "अग्नि", "वह्नि", "पावक"],
        "answer_en": "आग",
        "answer_hi": "आग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'प्रेमचंद' का मूल नाम था:",
        "question_hi": "'प्रेमचंद' का मूल नाम था:",
        "options_en": ["धनपत राय", "नवाब राय", "मुंशी प्रेमचंद", "धनपत राय श्रीवास्तव"],
        "options_hi": ["धनपत राय", "नवाब राय", "मुंशी प्रेमचंद", "धनपत राय श्रीवास्तव"],
        "answer_en": "धनपत राय",
        "answer_hi": "धनपत राय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "कौन सा शब्द संज्ञा से बना विशेषण है?",
        "question_hi": "कौन सा शब्द संज्ञा से बना विशेषण है?",
        "options_en": ["पाठशाला", "पाठ्य", "पढ़ना", "पढ़ाई"],
        "options_hi": ["पाठशाला", "पाठ्य", "पढ़ना", "पढ़ाई"],
        "answer_en": "पाठ्य",
        "answer_hi": "पाठ्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'गोदान' उपन्यास का मुख्य पात्र है:",
        "question_hi": "'गोदान' उपन्यास का मुख्य पात्र है:",
        "options_en": ["होरी", "गोबर", "धनिया", "मातादीन"],
        "options_hi": ["होरी", "गोबर", "धनिया", "मातादीन"],
        "answer_en": "होरी",
        "answer_hi": "होरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "कौन सा वाक्य शुद्ध है?",
        "question_hi": "कौन सा वाक्य शुद्ध है?",
        "options_en": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ने है।"],
        "options_hi": ["वह पढ़ता है।", "वह पढ़ती है।", "वह पढ़ते हैं।", "वह पढ़ने है।"],
        "answer_en": "वह पढ़ता है।",
        "answer_hi": "वह पढ़ता है।",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'अंधेर नगरी' के रचयिता हैं:",
        "question_hi": "'अंधेर नगरी' के रचयिता हैं:",
        "options_en": ["भारतेन्दु हरिश्चंद्र", "जयशंकर प्रसाद", "मोहन राकेश", "हरिशंकर परसाई"],
        "options_hi": ["भारतेन्दु हरिश्चंद्र", "जयशंकर प्रसाद", "मोहन राकेश", "हरिशंकर परसाई"],
        "answer_en": "भारतेन्दु हरिश्चंद्र",
        "answer_hi": "भारतेन्दु हरिश्चंद्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "कौन सा शब्द योगरूढ़ है?",
        "question_hi": "कौन सा शब्द योगरूढ़ है?",
        "options_en": ["पंकज", "विद्यालय", "रसोईघर", "जलज"],
        "options_hi": ["पंकज", "विद्यालय", "रसोईघर", "जलज"],
        "answer_en": "पंकज",
        "answer_hi": "पंकज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'राग दरबारी' के रचयिता हैं:",
        "question_hi": "'राग दरबारी' के रचयिता हैं:",
        "options_en": ["श्रीलाल शुक्ल", "फणीश्वर नाथ रेणु", "नागार्जुन", "भीष्म साहनी"],
        "options_hi": ["श्रीलाल शुक्ल", "फणीश्वर नाथ रेणु", "नागार्जुन", "भीष्म साहनी"],
        "answer_en": "श्रीलाल शुक्ल",
        "answer_hi": "श्रीलाल शुक्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "कौन सा शब्द तत्सम है?",
        "question_hi": "कौन सा शब्द तत्सम है?",
        "options_en": ["घर", "गृह", "घरा", "गेह"],
        "options_hi": ["घर", "गृह", "घरा", "गेह"],
        "answer_en": "गृह",
        "answer_hi": "गृह",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (61-70)
    {
        "num": 61,
        "question_en": "The first Indian satellite was:",
        "question_hi": "पहला भारतीय उपग्रह था:",
        "options_en": ["Aryabhata", "Bhaskara", "Rohini", "INSAT"],
        "options_hi": ["आर्यभट्ट", "भास्कर", "रोहिणी", "इन्सैट"],
        "answer_en": "Aryabhata",
        "answer_hi": "आर्यभट्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The first nuclear reactor in India was:",
        "question_hi": "भारत में पहला नाभिकीय रिएक्टर था:",
        "options_en": ["Apsara", "CIRUS", "Dhruva", "Kamini"],
        "options_hi": ["अप्सरा", "साइरस", "ध्रुव", "कामिनी"],
        "answer_en": "Apsara",
        "answer_hi": "अप्सरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "The Indian Space Research Organisation (ISRO) was founded in:",
        "question_hi": "भारतीय अंतरिक्ष अनुसंधान संगठन (ISRO) की स्थापना हुई थी:",
        "options_en": ["1962", "1969", "1972", "1975"],
        "options_hi": ["1962", "1969", "1972", "1975"],
        "answer_en": "1969",
        "answer_hi": "1969",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The first Indian in space was:",
        "question_hi": "अंतरिक्ष में जाने वाले पहले भारतीय थे:",
        "options_en": ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Ravish Malhotra"],
        "options_hi": ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "रविश मल्होत्रा"],
        "answer_en": "Rakesh Sharma",
        "answer_hi": "राकेश शर्मा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The first Indian woman in space was:",
        "question_hi": "अंतरिक्ष में जाने वाली पहली भारतीय महिला थीं:",
        "options_en": ["Kalpana Chawla", "Sunita Williams", "Sharmila Tagore", "None of these"],
        "options_hi": ["कल्पना चावला", "सुनीता विलियम्स", "शर्मिला टैगोर", "इनमें से कोई नहीं"],
        "answer_en": "Kalpana Chawla",
        "answer_hi": "कल्पना चावला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "The Indian Missile Man is:",
        "question_hi": "भारतीय मिसाइल मैन हैं:",
        "options_en": ["Dr. A.P.J. Abdul Kalam", "Dr. Homi Bhabha", "Dr. Vikram Sarabhai", "Dr. C.V. Raman"],
        "options_hi": ["डॉ. ए.पी.जे. अब्दुल कलाम", "डॉ. होमी भाभा", "डॉ. विक्रम साराभाई", "डॉ. सी.वी. रमन"],
        "answer_en": "Dr. A.P.J. Abdul Kalam",
        "answer_hi": "डॉ. ए.पी.जे. अब्दुल कलाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "The first Indian Nobel Prize winner was:",
        "question_hi": "पहले भारतीय नोबेल पुरस्कार विजेता थे:",
        "options_en": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Hargobind Khorana"],
        "options_hi": ["रबीन्द्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "हरगोबिंद खुराना"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबीन्द्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The Indian who won Nobel Prize in Physics was:",
        "question_hi": "भौतिकी में नोबेल पुरस्कार जीतने वाले भारतीय थे:",
        "options_en": ["C.V. Raman", "S. Chandrasekhar", "Hargobind Khorana", "Both A and B"],
        "options_hi": ["सी.वी. रमन", "एस. चंद्रशेखर", "हरगोबिंद खुराना", "A और B दोनों"],
        "answer_en": "Both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "The first Indian computer was:",
        "question_hi": "पहला भारतीय कंप्यूटर था:",
        "options_en": ["Siddhartha", "PARAM", "TDC-12", "CDAC"],
        "options_hi": ["सिद्धार्थ", "परम", "TDC-12", "सीडैक"],
        "answer_en": "TDC-12",
        "answer_hi": "TDC-12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The Indian who discovered Raman Effect was:",
        "question_hi": "रमन प्रभाव की खोज करने वाले भारतीय थे:",
        "options_en": ["C.V. Raman", "J.C. Bose", "S.N. Bose", "M.N. Saha"],
        "options_hi": ["सी.वी. रमन", "जे.सी. बोस", "एस.एन. बोस", "एम.एन. साहा"],
        "answer_en": "C.V. Raman",
        "answer_hi": "सी.वी. रमन",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions - JEE Main Level (71-100)
    {
        "num": 71,
        "question_en": "The number of significant figures in 0.00200 is:",
        "question_hi": "0.00200 में सार्थक अंकों की संख्या है:",
        "options_en": ["1", "2", "3", "5"],
        "options_hi": ["1", "2", "3", "5"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The dimensional formula for impulse is:",
        "question_hi": "आवेग का विमीय सूत्र है:",
        "options_en": ["[MLT⁻²]", "[MLT⁻¹]", "[ML²T⁻²]", "[ML⁻¹T⁻²]"],
        "options_hi": ["[MLT⁻²]", "[MLT⁻¹]", "[ML²T⁻²]", "[ML⁻¹T⁻²]"],
        "answer_en": "[MLT⁻¹]",
        "answer_hi": "[MLT⁻¹]",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The IUPAC name of CH₃-CH₂-CHO is:",
        "question_hi": "CH₃-CH₂-CHO का IUPAC नाम है:",
        "options_en": ["Propanal", "Propanone", "Ethanal", "Butanal"],
        "options_hi": ["प्रोपेनल", "प्रोपेनोन", "एथेनल", "ब्यूटेनल"],
        "answer_en": "Propanal",
        "answer_hi": "प्रोपेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
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
        "num": 75,
        "question_en": "The value of ∫(sin x + cos x) dx is:",
        "question_hi": "∫(sin x + cos x) dx का मान है:",
        "options_en": ["-cos x + sin x + C", "cos x + sin x + C", "-cos x - sin x + C", "cos x - sin x + C"],
        "options_hi": ["-cos x + sin x + C", "cos x + sin x + C", "-cos x - sin x + C", "cos x - sin x + C"],
        "answer_en": "-cos x + sin x + C",
        "answer_hi": "-cos x + sin x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The derivative of sin⁻¹x is:",
        "question_hi": "sin⁻¹x का अवकलज है:",
        "options_en": ["1/√(1-x²)", "-1/√(1-x²)", "1/√(1+x²)", "-1/√(1+x²)"],
        "options_hi": ["1/√(1-x²)", "-1/√(1-x²)", "1/√(1+x²)", "-1/√(1+x²)"],
        "answer_en": "1/√(1-x²)",
        "answer_hi": "1/√(1-x²)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "In meiosis, the number of chromosomes becomes half in:",
        "question_hi": "अर्धसूत्रीविभाजन में, गुणसूत्रों की संख्या आधी हो जाती है:",
        "options_en": ["Anaphase I", "Anaphase II", "Telophase I", "Telophase II"],
        "options_hi": ["अनाफेज I", "अनाफेज II", "टीलोफेज I", "टीलोफेज II"],
        "answer_en": "Anaphase I",
        "answer_hi": "अनाफेज I",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
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
        "num": 79,
        "question_en": "The SI unit of luminous intensity is:",
        "question_hi": "ज्योति तीव्रता की SI इकाई है:",
        "options_en": ["Candela", "Lumen", "Lux", "Watt"],
        "options_hi": ["कैंडेला", "ल्यूमेन", "लक्स", "वाट"],
        "answer_en": "Candela",
        "answer_hi": "कैंडेला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The chemical used in photography is:",
        "question_hi": "फोटोग्राफी में प्रयुक्त रसायन है:",
        "options_en": ["AgBr", "AgCl", "AgI", "AgNO₃"],
        "options_hi": ["AgBr", "AgCl", "AgI", "AgNO₃"],
        "answer_en": "AgBr",
        "answer_hi": "AgBr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The value of lim(x→0) (tan x)/x is:",
        "question_hi": "lim(x→0) (tan x)/x का मान है:",
        "options_en": ["0", "1", "∞", "Does not exist"],
        "options_hi": ["0", "1", "∞", "अस्तित्व में नहीं है"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "The enzyme that digests protein is:",
        "question_hi": "प्रोटीन को पचाने वाला एंजाइम है:",
        "options_en": ["Amylase", "Lipase", "Pepsin", "Trypsin"],
        "options_hi": ["एमाइलेज", "लाइपेज", "पेप्सिन", "ट्रिप्सिन"],
        "answer_en": "Pepsin",
        "answer_hi": "पेप्सिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The magnetic quantum number determines:",
        "question_hi": "चुंबकीय क्वांटम संख्या निर्धारित करती है:",
        "options_en": ["Shape of orbital", "Orientation of orbital", "Size of orbital", "Energy of orbital"],
        "options_hi": ["कक्षक का आकार", "कक्षक का अभिविन्यास", "कक्षक का आकार", "कक्षक की ऊर्जा"],
        "answer_en": "Orientation of orbital",
        "answer_hi": "कक्षक का अभिविन्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The value of ∫dx/(1+x²) is:",
        "question_hi": "∫dx/(1+x²) का मान है:",
        "options_en": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "options_hi": ["tan⁻¹x + C", "cot⁻¹x + C", "sin⁻¹x + C", "cos⁻¹x + C"],
        "answer_en": "tan⁻¹x + C",
        "answer_hi": "tan⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The process of DNA fingerprinting was developed by:",
        "question_hi": "DNA फिंगरप्रिंटिंग की प्रक्रिया विकसित की गई थी:",
        "options_en": ["Alec Jeffreys", "James Watson", "Francis Crick", "Kary Mullis"],
        "options_hi": ["एलेक जेफ्रीस", "जेम्स वाटसन", "फ्रांसिस क्रिक", "कैरी मुलिस"],
        "answer_en": "Alec Jeffreys",
        "answer_hi": "एलेक जेफ्रीस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "The unit of coefficient of viscosity is:",
        "question_hi": "श्यानता गुणांक की इकाई है:",
        "options_en": ["Poise", "Pascal", "Newton", "Joule"],
        "options_hi": ["पॉइज", "पास्कल", "न्यूटन", "जूल"],
        "answer_en": "Poise",
        "answer_hi": "पॉइज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The catalyst used in Haber's process is:",
        "question_hi": "हैबर प्रक्रिया में प्रयुक्त उत्प्रेरक है:",
        "options_en": ["Fe", "Ni", "Pt", "V₂O₅"],
        "options_hi": ["Fe", "Ni", "Pt", "V₂O₅"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "The value of d/dx(eˣ) is:",
        "question_hi": "d/dx(eˣ) का मान है:",
        "options_en": ["eˣ", "xeˣ", "eˣ/x", "ln x"],
        "options_hi": ["eˣ", "xeˣ", "eˣ/x", "ln x"],
        "answer_en": "eˣ",
        "answer_hi": "eˣ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The hormone that regulates blood sugar level is:",
        "question_hi": "वह हार्मोन जो रक्त शर्करा स्तर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
        "options_hi": ["इंसुलिन", "एड्रेनालाईन", "थायरोक्सिन", "एस्ट्रोजन"],
        "answer_en": "Insulin",
        "answer_hi": "इंसुलिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "The number of lone pairs in XeF₄ is:",
        "question_hi": "XeF₄ में एकाकी युग्मों की संख्या है:",
        "options_en": ["0", "1", "2", "4"],
        "options_hi": ["0", "1", "2", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The value of ∫₀^π sin x dx is:",
        "question_hi": "∫₀^π sin x dx का मान है:",
        "options_en": ["0", "1", "2", "π"],
        "options_hi": ["0", "1", "2", "π"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The metal that forms amalgam with mercury is:",
        "question_hi": "वह धातु जो पारा के साथ अमलगम बनाती है:",
        "options_en": ["Iron", "Gold", "Aluminum", "Copper"],
        "options_hi": ["लोहा", "सोना", "एल्युमिनियम", "तांबा"],
        "answer_en": "Gold",
        "answer_hi": "सोना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The process of conversion of nitrate to nitrogen gas is called:",
        "question_hi": "नाइट्रेट के नाइट्रोजन गैस में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrification", "Denitrification", "Nitrogen fixation", "Ammonification"],
        "options_hi": ["नाइट्रीकरण", "विनाइट्रीकरण", "नाइट्रोजन स्थिरीकरण", "अमोनीकरण"],
        "answer_en": "Denitrification",
        "answer_hi": "विनाइट्रीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
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
        "num": 96,
        "question_en": "The enzyme that converts starch to maltose is:",
        "question_hi": "वह एंजाइम जो स्टार्च को माल्टोज में बदलता है:",
        "options_en": ["Amylase", "Maltase", "Sucrase", "Lactase"],
        "options_hi": ["एमाइलेज", "माल्टेज", "सुक्रेज", "लैक्टेज"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "The unit of Planck's constant is:",
        "question_hi": "प्लांक स्थिरांक की इकाई है:",
        "options_en": ["J s", "J/s", "J m", "J/m"],
        "options_hi": ["J s", "J/s", "J m", "J/m"],
        "answer_en": "J s",
        "answer_hi": "J s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The oxidation state of chromium in K₂Cr₂O₇ is:",
        "question_hi": "K₂Cr₂O₇ में क्रोमियम की ऑक्सीकरण अवस्था है:",
        "options_en": ["+2", "+3", "+6", "+7"],
        "options_hi": ["+2", "+3", "+6", "+7"],
        "answer_en": "+6",
        "answer_hi": "+6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The value of d/dx(ln x) is:",
        "question_hi": "d/dx(ln x) का मान है:",
        "options_en": ["1/x", "x", "eˣ", "1"],
        "options_hi": ["1/x", "x", "eˣ", "1"],
        "answer_en": "1/x",
        "answer_hi": "1/x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The site of photosynthesis in plant cells is:",
        "question_hi": "पादप कोशिकाओं में प्रकाश संश्लेषण का स्थल है:",
        "options_en": ["Mitochondria", "Chloroplast", "Ribosome", "Nucleus"],
        "options_hi": ["माइटोकॉन्ड्रिया", "हरितलवक", "राइबोसोम", "केंद्रक"],
        "answer_en": "Chloroplast",
        "answer_hi": "हरितलवक",
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