const questions = [
    // Physics - Modern Physics (1-10)
    {
        "num": 1,
        "question_en": "The photoelectric effect demonstrates the:",
        "question_hi": "प्रकाश विद्युत प्रभाव प्रदर्शित करता है:",
        "options_en": ["Wave nature of light", "Particle nature of light", "Dual nature of light", "None of these"],
        "options_hi": ["प्रकाश की तरंग प्रकृति", "प्रकाश की कण प्रकृति", "प्रकाश की द्वैत प्रकृति", "इनमें से कोई नहीं"],
        "answer_en": "Particle nature of light",
        "answer_hi": "प्रकाश की कण प्रकृति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The de Broglie wavelength of an electron accelerated through V volts is:",
        "question_hi": "V वोल्ट से त्वरित इलेक्ट्रॉन की डी ब्रोगली तरंगदैर्ध्य है:",
        "options_en": ["λ = h/√(2meV)", "λ = h/√(meV)", "λ = h/(2meV)", "λ = √(h/2meV)"],
        "options_hi": ["λ = h/√(2meV)", "λ = h/√(meV)", "λ = h/(2meV)", "λ = √(h/2meV)"],
        "answer_en": "λ = h/√(2meV)",
        "answer_hi": "λ = h/√(2meV)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "In Bohr's model of hydrogen atom, the radius of first orbit is:",
        "question_hi": "हाइड्रोजन परमाणु के बोहर मॉडल में, प्रथम कक्षा की त्रिज्या है:",
        "options_en": ["0.529 Å", "1.058 Å", "2.116 Å", "4.232 Å"],
        "options_hi": ["0.529 Å", "1.058 Å", "2.116 Å", "4.232 Å"],
        "answer_en": "0.529 Å",
        "answer_hi": "0.529 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The half-life of a radioactive substance is 10 days. The mean life is:",
        "question_hi": "एक रेडियोधर्मी पदार्थ का अर्ध-जीवन 10 दिन है। माध्य जीवन है:",
        "options_en": ["14.43 days", "6.93 days", "3.46 days", "20 days"],
        "options_hi": ["14.43 दिन", "6.93 दिन", "3.46 दिन", "20 दिन"],
        "answer_en": "14.43 days",
        "answer_hi": "14.43 दिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A p-n junction diode conducts when it is:",
        "question_hi": "एक p-n संधि डायोड चालन करता है जब यह:",
        "options_en": ["Forward biased", "Reverse biased", "Unbiased", "Always"],
        "options_hi": ["अग्र अभिनत", "पश्च अभिनत", "अनभिनत", "सदैव"],
        "answer_en": "Forward biased",
        "answer_hi": "अग्र अभिनत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "The energy gap in semiconductor is about:",
        "question_hi": "अर्धचालक में ऊर्जा अंतराल लगभग है:",
        "options_en": ["0.1-0.3 eV", "0.5-1.2 eV", "1.5-3.0 eV", "5-10 eV"],
        "options_hi": ["0.1-0.3 eV", "0.5-1.2 eV", "1.5-3.0 eV", "5-10 eV"],
        "answer_en": "0.5-1.2 eV",
        "answer_hi": "0.5-1.2 eV",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "In a transistor, the relation between α and β is:",
        "question_hi": "ट्रांजिस्टर में, α और β के बीच संबंध है:",
        "options_en": ["β = α/(1-α)", "α = β/(1+β)", "β = α/(1+α)", "α = β/(1-β)"],
        "options_hi": ["β = α/(1-α)", "α = β/(1+β)", "β = α/(1+α)", "α = β/(1-β)"],
        "answer_en": "β = α/(1-α)",
        "answer_hi": "β = α/(1-α)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The logic gate that gives high output only when all inputs are high is:",
        "question_hi": "वह लॉजिक गेट जो उच्च आउटपुट केवल तब देता है जब सभी इनपुट उच्च हों:",
        "options_en": ["AND gate", "OR gate", "NOT gate", "NAND gate"],
        "options_hi": ["AND गेट", "OR गेट", "NOT गेट", "NAND गेट"],
        "answer_en": "AND gate",
        "answer_hi": "AND गेट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The mass defect in nuclear binding energy is:",
        "question_hi": "नाभिकीय बंधन ऊर्जा में द्रव्यमान क्षति है:",
        "options_en": ["Δm = Zmp + (A-Z)mn - M", "Δm = M - Zmp - (A-Z)mn", "Δm = Zmp + Nmn", "Δm = A(mp + mn)"],
        "options_hi": ["Δm = Zmp + (A-Z)mn - M", "Δm = M - Zmp - (A-Z)mn", "Δm = Zmp + Nmn", "Δm = A(mp + mn)"],
        "answer_en": "Δm = Zmp + (A-Z)mn - M",
        "answer_hi": "Δm = Zmp + (A-Z)mn - M",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In LASER, the process that produces coherent light is:",
        "question_hi": "लेजर में, वह प्रक्रिया जो कॉहेरेंट प्रकाश उत्पन्न करती है:",
        "options_en": ["Spontaneous emission", "Stimulated emission", "Absorption", "Scattering"],
        "options_hi": ["स्वतः उत्सर्जन", "उद्दीप्त उत्सर्जन", "अवशोषण", "प्रकीर्णन"],
        "answer_en": "Stimulated emission",
        "answer_hi": "उद्दीप्त उत्सर्जन",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Physical Chemistry (11-20)
    {
        "num": 11,
        "question_en": "The unit of rate constant for first order reaction is:",
        "question_hi": "प्रथम कोटि अभिक्रिया के लिए दर स्थिरांक की इकाई है:",
        "options_en": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "options_hi": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "answer_en": "s⁻¹",
        "answer_hi": "s⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "For a spontaneous process, the change in Gibbs free energy is:",
        "question_hi": "स्वतःप्रवर्तित प्रक्रिया के लिए, गिब्स मुक्त ऊर्जा में परिवर्तन है:",
        "options_en": ["ΔG > 0", "ΔG < 0", "ΔG = 0", "ΔG = ΔH"],
        "options_hi": ["ΔG > 0", "ΔG < 0", "ΔG = 0", "ΔG = ΔH"],
        "answer_en": "ΔG < 0",
        "answer_hi": "ΔG < 0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
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
        "num": 14,
        "question_en": "The equilibrium constant Kp and Kc are related by:",
        "question_hi": "साम्य स्थिरांक Kp और Kc संबंधित हैं:",
        "options_en": ["Kp = Kc(RT)^Δn", "Kp = Kc/(RT)^Δn", "Kp = Kc", "Kp = Kc + RT"],
        "options_hi": ["Kp = Kc(RT)^Δn", "Kp = Kc/(RT)^Δn", "Kp = Kc", "Kp = Kc + RT"],
        "answer_en": "Kp = Kc(RT)^Δn",
        "answer_hi": "Kp = Kc(RT)^Δn",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The number of moles in 44g of CO₂ is:",
        "question_hi": "44g CO₂ में मोलों की संख्या है:",
        "options_en": ["0.5", "1", "2", "3"],
        "options_hi": ["0.5", "1", "2", "3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
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
        "num": 17,
        "question_en": "The electrode where oxidation occurs is called:",
        "question_hi": "वह इलेक्ट्रोड जहाँ ऑक्सीकरण होता है, कहलाता है:",
        "options_en": ["Cathode", "Anode", "Salt bridge", "Electrolyte"],
        "options_hi": ["कैथोड", "एनोड", "लवण सेतु", "विद्युत अपघट्य"],
        "answer_en": "Anode",
        "answer_hi": "एनोड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The colligative property depends on:",
        "question_hi": "अणुसंख्य गुणधर्म निर्भर करता है:",
        "options_en": ["Nature of solute", "Number of solute particles", "Nature of solvent", "Temperature only"],
        "options_hi": ["विलेय की प्रकृति", "विलेय कणों की संख्या", "विलायक की प्रकृति", "केवल तापमान"],
        "answer_en": "Number of solute particles",
        "answer_hi": "विलेय कणों की संख्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The crystal system of NaCl is:",
        "question_hi": "NaCl की क्रिस्टल प्रणाली है:",
        "options_en": ["Cubic", "Tetragonal", "Hexagonal", "Monoclinic"],
        "options_hi": ["घनीय", "द्विसमलंबाक्ष", "षट्कोणीय", "एकनताक्ष"],
        "answer_en": "Cubic",
        "answer_hi": "घनीय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The IUPAC name of K₄[Fe(CN)₆] is:",
        "question_hi": "K₄[Fe(CN)₆] का IUPAC नाम है:",
        "options_en": ["Potassium ferrocyanide", "Potassium hexacyanoferrate(II)", "Potassium ferricyanide", "Potassium hexacyanoferrate(III)"],
        "options_hi": ["पोटैशियम फेरोसायनाइड", "पोटैशियम हेक्सासायनोफेरेट(II)", "पोटैशियम फेरिसायनाइड", "पोटैशियम हेक्सासायनोफेरेट(III)"],
        "answer_en": "Potassium hexacyanoferrate(II)",
        "answer_hi": "पोटैशियम हेक्सासायनोफेरेट(II)",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Algebra (21-30)
    {
        "num": 21,
        "question_en": "The roots of quadratic equation x² - 5x + 6 = 0 are:",
        "question_hi": "द्विघात समीकरण x² - 5x + 6 = 0 के मूल हैं:",
        "options_en": ["2,3", "1,6", "-2,-3", "-1,-6"],
        "options_hi": ["2,3", "1,6", "-2,-3", "-1,-6"],
        "answer_en": "2,3",
        "answer_hi": "2,3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The value of i⁴ is:",
        "question_hi": "i⁴ का मान है:",
        "options_en": ["i", "-i", "1", "-1"],
        "options_hi": ["i", "-i", "1", "-1"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
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
        "num": 24,
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
        "num": 25,
        "question_en": "If A = {1,2,3} and B = {2,3,4}, then A∩B is:",
        "question_hi": "यदि A = {1,2,3} और B = {2,3,4}, तो A∩B है:",
        "options_en": ["{1,2,3,4}", "{2,3}", "{1,4}", "{ }"],
        "options_hi": ["{1,2,3,4}", "{2,3}", "{1,4}", "{ }"],
        "answer_en": "{2,3}",
        "answer_hi": "{2,3}",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The value of log₁₀100 is:",
        "question_hi": "log₁₀100 का मान है:",
        "options_en": ["1", "2", "10", "0"],
        "options_hi": ["1", "2", "10", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "The number of diagonals in a hexagon is:",
        "question_hi": "एक षट्भुज में विकर्णों की संख्या है:",
        "options_en": ["6", "9", "12", "15"],
        "options_hi": ["6", "9", "12", "15"],
        "answer_en": "9",
        "answer_hi": "9",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "If sinθ = 3/5, then cosθ is:",
        "question_hi": "यदि sinθ = 3/5, तो cosθ है:",
        "options_en": ["4/5", "3/4", "5/4", "2/5"],
        "options_hi": ["4/5", "3/4", "5/4", "2/5"],
        "answer_en": "4/5",
        "answer_hi": "4/5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "The period of sin(x) is:",
        "question_hi": "sin(x) का आवर्तकाल है:",
        "options_en": ["π", "2π", "π/2", "4π"],
        "options_hi": ["π", "2π", "π/2", "4π"],
        "answer_en": "2π",
        "answer_hi": "2π",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "The distance between points (1,2) and (4,6) is:",
        "question_hi": "बिंदुओं (1,2) और (4,6) के बीच की दूरी है:",
        "options_en": ["3", "4", "5", "6"],
        "options_hi": ["3", "4", "5", "6"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },

    // Biology - Human Physiology (31-40)
    {
        "num": 31,
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
        "num": 32,
        "question_en": "The enzyme present in saliva is:",
        "question_hi": "लार में उपस्थित एंजाइम है:",
        "options_en": ["Pepsin", "Amylase", "Trypsin", "Lipase"],
        "options_hi": ["पेप्सिन", "एमाइलेज", "ट्रिप्सिन", "लाइपेज"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The blood vessel carrying oxygenated blood is:",
        "question_hi": "ऑक्सीजनयुक्त रक्त ले जाने वाला रक्त वाहिका है:",
        "options_en": ["Pulmonary artery", "Pulmonary vein", "Superior vena cava", "Inferior vena cava"],
        "options_hi": ["फुफ्फुसीय धमनी", "फुफ्फुसीय शिरा", "अधिक वेना कावा", "निम्न वेना कावा"],
        "answer_en": "Pulmonary vein",
        "answer_hi": "फुफ्फुसीय शिरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The functional unit of kidney is:",
        "question_hi": "वृक्क की क्रियात्मक इकाई है:",
        "options_en": ["Neuron", "Nephron", "Alveoli", "Villi"],
        "options_hi": ["न्यूरॉन", "नेफ्रॉन", "वायुकोश", "विलाई"],
        "answer_en": "Nephron",
        "answer_hi": "नेफ्रॉन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The hormone insulin is secreted by:",
        "question_hi": "हार्मोन इंसुलिन स्रावित होता है:",
        "options_en": ["Pancreas", "Liver", "Kidney", "Thyroid"],
        "options_hi": ["अग्न्याशय", "यकृत", "वृक्क", "थायरॉयड"],
        "answer_en": "Pancreas",
        "answer_hi": "अग्न्याशय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The number of chromosomes in human somatic cells is:",
        "question_hi": "मानव दैहिक कोशिकाओं में गुणसूत्रों की संख्या है:",
        "options_en": ["23", "46", "48", "22"],
        "options_hi": ["23", "46", "48", "22"],
        "answer_en": "46",
        "answer_hi": "46",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The process of breakdown of glucose in cells is called:",
        "question_hi": "कोशिकाओं में ग्लूकोज के विघटन की प्रक्रिया कहलाती है:",
        "options_en": ["Photosynthesis", "Respiration", "Transpiration", "Digestion"],
        "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "पाचन"],
        "answer_en": "Respiration",
        "answer_hi": "श्वसन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The vitamin responsible for blood clotting is:",
        "question_hi": "रक्त के थक्के जमने के लिए जिम्मेदार विटामिन है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
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
        "question_en": "The male reproductive part in plants is:",
        "question_hi": "पौधों में नर जनन भाग है:",
        "options_en": ["Pistil", "Stamen", "Ovary", "Stigma"],
        "options_hi": ["पिस्टिल", "स्तमक", "अंडाशय", "वर्तिकाग्र"],
        "answer_en": "Stamen",
        "answer_hi": "स्तमक",
        "attempted": false,
        "selected": ""
    },

    // English - Vocabulary & Grammar (41-50)
    {
        "num": 41,
        "question_en": "Choose the correct antonym of 'Ancient':",
        "question_hi": "'Ancient' का सही विलोम चुनें:",
        "options_en": ["Old", "Modern", "Historic", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Which sentence is in future perfect tense?",
        "question_hi": "कौन सा वाक्य भविष्य पूर्ण काल में है?",
        "options_en": ["I will go", "I will have gone", "I have gone", "I had gone"],
        "options_hi": ["I will go", "I will have gone", "I have gone", "I had gone"],
        "answer_en": "I will have gone",
        "answer_hi": "I will have gone",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The synonym of 'Benevolent' is:",
        "question_hi": "'Benevolent' का समानार्थी है:",
        "options_en": ["Cruel", "Kind", "Selfish", "Greedy"],
        "options_hi": ["क्रूर", "दयालु", "स्वार्थी", "लालची"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Choose the correct word: 'The ___ of the movie was unexpected.'",
        "question_hi": "सही शब्द चुनें: 'The ___ of the movie was unexpected.'",
        "options_en": ["climax", "climate", "climatic", "climb"],
        "options_hi": ["climax", "climate", "climatic", "climb"],
        "answer_en": "climax",
        "answer_hi": "climax",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which is a collective noun?",
        "question_hi": "कौन सा समूहवाचक संज्ञा है?",
        "options_en": ["Team", "Player", "Ball", "Game"],
        "options_hi": ["टीम", "खिलाड़ी", "गेंद", "खेल"],
        "answer_en": "Team",
        "answer_hi": "टीम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The correct passive voice of 'They built the house' is:",
        "question_hi": "'They built the house' का सही कर्मवाच्य है:",
        "options_en": ["The house was built by them", "The house is built by them", "The house built by them", "The house has built by them"],
        "options_hi": ["The house was built by them", "The house is built by them", "The house built by them", "The house has built by them"],
        "answer_en": "The house was built by them",
        "answer_hi": "The house was built by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Choose the correct preposition: 'She is allergic ___ cats.'",
        "question_hi": "सही पूर्वसर्ग चुनें: 'She is allergic ___ cats.'",
        "options_en": ["to", "for", "with", "by"],
        "options_hi": ["to", "for", "with", "by"],
        "answer_en": "to",
        "answer_hi": "to",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The plural of 'Analysis' is:",
        "question_hi": "'Analysis' का बहुवचन है:",
        "options_en": ["Analysises", "Analyses", "Analysises", "Analys"],
        "options_hi": ["Analysises", "Analyses", "Analysises", "Analys"],
        "answer_en": "Analyses",
        "answer_hi": "Analyses",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which word is an adverb?",
        "question_hi": "कौन सा शब्द क्रिया विशेषण है?",
        "options_en": ["Quick", "Quickly", "Quickness", "Quicken"],
        "options_hi": ["Quick", "Quickly", "Quickness", "Quicken"],
        "answer_en": "Quickly",
        "answer_hi": "Quickly",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "The correct indirect speech of: 'He said, \"I am tired\"' is:",
        "question_hi": "'He said, \"I am tired\"' का सही अप्रत्यक्ष कथन है:",
        "options_en": ["He said that he is tired", "He said that he was tired", "He said that I am tired", "He said that I was tired"],
        "options_hi": ["He said that he is tired", "He said that he was tired", "He said that I am tired", "He said that I was tired"],
        "answer_en": "He said that he was tired",
        "answer_hi": "He said that he was tired",
        "attempted": false,
        "selected": ""
    },

    // Hindi - व्याकरण और साहित्य (51-60)
    {
        "num": 51,
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
        "num": 52,
        "question_en": "कौन सा शब्द यौगिक है?",
        "question_hi": "कौन सा शब्द यौगिक है?",
        "options_en": ["पाठशाला", "विद्यालय", "विद्या", "अध्ययन"],
        "options_hi": ["पाठशाला", "विद्यालय", "विद्या", "अध्ययन"],
        "answer_en": "पाठशाला",
        "answer_hi": "पाठशाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'रामायण' के रचयिता हैं:",
        "question_hi": "'रामायण' के रचयिता हैं:",
        "options_en": ["वाल्मीकि", "वेदव्यास", "तुलसीदास", "कालिदास"],
        "options_hi": ["वाल्मीकि", "वेदव्यास", "तुलसीदास", "कालिदास"],
        "answer_en": "वाल्मीकि",
        "answer_hi": "वाल्मीकि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "कौन सा शब्द तत्सम है?",
        "question_hi": "कौन सा शब्द तत्सम है?",
        "options_en": ["आग", "अग्नि", "आंच", "लपट"],
        "options_hi": ["आग", "अग्नि", "आंच", "लपट"],
        "answer_en": "अग्नि",
        "answer_hi": "अग्नि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'प्रेम' का विलोम शब्द है:",
        "question_hi": "'प्रेम' का विलोम शब्द है:",
        "options_en": ["स्नेह", "द्वेष", "मोह", "क्रोध"],
        "options_hi": ["स्नेह", "द्वेष", "मोह", "क्रोध"],
        "answer_en": "द्वेष",
        "answer_hi": "द्वेष",
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
        "question_en": "'गीतांजलि' के रचयिता हैं:",
        "question_hi": "'गीतांजलि' के रचयिता हैं:",
        "options_en": ["महादेवी वर्मा", "रवींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["महादेवी वर्मा", "रवींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी"],
        "answer_en": "रवींद्रनाथ टैगोर",
        "answer_hi": "रवींद्रनाथ टैगोर",
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
        "question_en": "'आंसू' का बहुवचन है:",
        "question_hi": "'आंसू' का बहुवचन है:",
        "options_en": ["आंसू", "आंसुओं", "आंसूएं", "आंसूव"],
        "options_hi": ["आंसू", "आंसुओं", "आंसूएं", "आंसूव"],
        "answer_en": "आंसू",
        "answer_hi": "आंसू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "कौन सा रस श्रृंगार रस का भेद है?",
        "question_hi": "कौन सा रस श्रृंगार रस का भेद है?",
        "options_en": ["वीर रस", "संयोग श्रृंगार", "करुण रस", "भयानक रस"],
        "options_hi": ["वीर रस", "संयोग श्रृंगार", "करुण रस", "भयानक रस"],
        "answer_en": "संयोग श्रृंगार",
        "answer_hi": "संयोग श्रृंगार",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (61-70)
    {
        "num": 61,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The chemical symbol for silver is:",
        "question_hi": "चांदी का रासायनिक प्रतीक है:",
        "options_en": ["Si", "Ag", "Au", "S"],
        "options_hi": ["Si", "Ag", "Au", "S"],
        "answer_en": "Ag",
        "answer_hi": "Ag",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "कौन सा ग्रह लाल ग्रह के नाम से जाना जाता है?",
        "options_en": ["Mars", "Jupiter", "Venus", "Mercury"],
        "options_hi": ["मंगल", "बृहस्पति", "शुक्र", "बुध"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The device used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दबाव मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Thermometer", "Barometer", "Hygrometer", "Ammeter"],
        "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
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
        "num": 67,
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
        "num": 68,
        "question_en": "The largest bone in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी हड्डी है:",
        "options_en": ["Femur", "Humerus", "Tibia", "Fibula"],
        "options_hi": ["फीमर", "ह्यूमरस", "टिबिया", "फिबुला"],
        "answer_en": "Femur",
        "answer_hi": "फीमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
        "question_en": "The chemical formula of methane is:",
        "question_hi": "मीथेन का रासायनिक सूत्र है:",
        "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
        "answer_en": "CH₄",
        "answer_hi": "CH₄",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-100)
    {
        "num": 71,
        "question_en": "The value of gravitational constant G is:",
        "question_hi": "गुरुत्वाकर्षण स्थिरांक G का मान है:",
        "options_en": ["6.67 × 10⁻¹¹ Nm²/kg²", "9.8 m/s²", "3 × 10⁸ m/s", "1.6 × 10⁻¹⁹ C"],
        "options_hi": ["6.67 × 10⁻¹¹ Nm²/kg²", "9.8 m/s²", "3 × 10⁸ m/s", "1.6 × 10⁻¹⁹ C"],
        "answer_en": "6.67 × 10⁻¹¹ Nm²/kg²",
        "answer_hi": "6.67 × 10⁻¹¹ Nm²/kg²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The pH of pure water at 25°C is:",
        "question_hi": "25°C पर शुद्ध जल का pH है:",
        "options_en": ["0", "7", "14", "1"],
        "options_hi": ["0", "7", "14", "1"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The derivative of e^x is:",
        "question_hi": "e^x का अवकलज है:",
        "options_en": ["e^x", "xe^x", "e^x/x", "0"],
        "options_hi": ["e^x", "xe^x", "e^x/x", "0"],
        "answer_en": "e^x",
        "answer_hi": "e^x",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The process of cell division in reproductive cells is called:",
        "question_hi": "जनन कोशिकाओं में कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
        "options_hi": ["समसूत्रीविभाजन", "अर्धसूत्रीविभाजन", "द्विखंडन", "मुकुलन"],
        "answer_en": "Meiosis",
        "answer_hi": "अर्धसूत्रीविभाजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
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
        "num": 76,
        "question_en": "The formula for area of triangle is:",
        "question_hi": "त्रिभुज के क्षेत्रफल का सूत्र है:",
        "options_en": ["½ × base × height", "base × height", "½ × base²", "πr²"],
        "options_hi": ["½ × आधार × ऊंचाई", "आधार × ऊंचाई", "½ × आधार²", "πr²"],
        "answer_en": "½ × base × height",
        "answer_hi": "½ × आधार × ऊंचाई",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "The speed of sound in air at 0°C is approximately:",
        "question_hi": "0°C पर वायु में ध्वनि की गति लगभग है:",
        "options_en": ["330 m/s", "343 m/s", "300 m/s", "380 m/s"],
        "options_hi": ["330 m/s", "343 m/s", "300 m/s", "380 m/s"],
        "answer_en": "330 m/s",
        "answer_hi": "330 m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The chemical used in photography is:",
        "question_hi": "फोटोग्राफी में प्रयुक्त रसायन है:",
        "options_en": ["Silver bromide", "Sodium chloride", "Calcium carbonate", "Potassium nitrate"],
        "options_hi": ["सिल्वर ब्रोमाइड", "सोडियम क्लोराइड", "कैल्शियम कार्बोनेट", "पोटैशियम नाइट्रेट"],
        "answer_en": "Silver bromide",
        "answer_hi": "सिल्वर ब्रोमाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
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
        "num": 80,
        "question_en": "The vitamin deficiency that causes night blindness is:",
        "question_hi": "वह विटामिन की कमी जो रतौंधी का कारण बनती है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin A",
        "answer_hi": "विटामिन A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The unit of electric charge is:",
        "question_hi": "विद्युत आवेश की इकाई है:",
        "options_en": ["Volt", "Ampere", "Coulomb", "Ohm"],
        "options_hi": ["वोल्ट", "एम्पियर", "कूलॉम", "ओम"],
        "answer_en": "Coulomb",
        "answer_hi": "कूलॉम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
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
        "num": 83,
        "question_en": "The value of ∫x dx is:",
        "question_hi": "∫x dx का मान है:",
        "options_en": ["x²/2 + C", "x² + C", "1 + C", "2x + C"],
        "options_hi": ["x²/2 + C", "x² + C", "1 + C", "2x + C"],
        "answer_en": "x²/2 + C",
        "answer_hi": "x²/2 + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
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
        "num": 85,
        "question_en": "The atomic mass of carbon is:",
        "question_hi": "कार्बन का परमाणु द्रव्यमान है:",
        "options_en": ["12", "14", "16", "18"],
        "options_hi": ["12", "14", "16", "18"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The formula for circumference of circle is:",
        "question_hi": "वृत्त की परिधि का सूत्र है:",
        "options_en": ["2πr", "πr²", "πd", "Both A and C"],
        "options_hi": ["2πr", "πr²", "πd", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
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
        "num": 88,
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
        "num": 89,
        "question_en": "The value of (a-b)² is:",
        "question_hi": "(a-b)² का मान है:",
        "options_en": ["a² + b²", "a² - 2ab + b²", "a² + 2ab + b²", "a² - b²"],
        "options_hi": ["a² + b²", "a² - 2ab + b²", "a² + 2ab + b²", "a² - b²"],
        "answer_en": "a² - 2ab + b²",
        "answer_hi": "a² - 2ab + b²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The vitamin synthesized by human body when exposed to sunlight is:",
        "question_hi": "वह विटामिन जो मानव शरीर द्वारा सूर्य के प्रकाश के संपर्क में आने पर संश्लेषित होता है:",
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
        "num": 93,
        "question_en": "The value of ∫dx is:",
        "question_hi": "∫dx का मान है:",
        "options_en": ["x + C", "1 + C", "0", "x²/2 + C"],
        "options_hi": ["x + C", "1 + C", "0", "x²/2 + C"],
        "answer_en": "x + C",
        "answer_hi": "x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The process of conversion of nitrogen to ammonia is called:",
        "question_hi": "नाइट्रोजन के अमोनिया में परिवर्तन की प्रक्रिया कहलाती है:",
        "options_en": ["Nitrogen fixation", "Nitrification", "Denitrification", "Ammonification"],
        "options_hi": ["नाइट्रोजन स्थिरीकरण", "नाइट्रीकरण", "विनाइट्रीकरण", "अमोनीकरण"],
        "answer_en": "Nitrogen fixation",
        "answer_hi": "नाइट्रोजन स्थिरीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "The atomic number of hydrogen is:",
        "question_hi": "हाइड्रोजन की परमाणु संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The formula for volume of sphere is:",
        "question_hi": "गोले के आयतन का सूत्र है:",
        "options_en": ["4/3 πr³", "πr²h", "4πr²", "2πr"],
        "options_hi": ["4/3 πr³", "πr²h", "4πr²", "2πr"],
        "answer_en": "4/3 πr³",
        "answer_hi": "4/3 πr³",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
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
        "num": 98,
        "question_en": "The chemical formula of common sugar is:",
        "question_hi": "साधारण चीनी का रासायनिक सूत्र है:",
        "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "CH₄", "CO₂"],
        "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "CH₄", "CO₂"],
        "answer_en": "C₁₂H₂₂O₁₁",
        "answer_hi": "C₁₂H₂₂O₁₁",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
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
        "num": 100,
        "question_en": "The vitamin that helps in blood clotting is:",
        "question_hi": "वह विटामिन जो रक्त के थक्के जमने में मदद करता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन K"],
        "answer_en": "Vitamin K",
        "answer_hi": "विटामिन K",
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