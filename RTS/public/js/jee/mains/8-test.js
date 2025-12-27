const questions = [
    // Physics - Modern Physics & Electronics (1-15)
    {
        "num": 1,
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
        "num": 2,
        "question_en": "In a common emitter amplifier, the phase difference between input and output voltages is:",
        "question_hi": "कॉमन एमिटर प्रवर्धक में, निवेश और निर्गत वोल्टेज के बीच कलांतर है:",
        "options_en": ["0°", "90°", "180°", "270°"],
        "options_hi": ["0°", "90°", "180°", "270°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The half-life of a radioactive substance is 20 minutes. The time taken for 75% decay is:",
        "question_hi": "एक रेडियोधर्मी पदार्थ का अर्ध-जीवन 20 मिनट है। 75% क्षय के लिए लिया गया समय है:",
        "options_en": ["40 minutes", "60 minutes", "30 minutes", "50 minutes"],
        "options_hi": ["40 मिनट", "60 मिनट", "30 मिनट", "50 मिनट"],
        "answer_en": "40 minutes",
        "answer_hi": "40 मिनट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "In a p-n junction diode, the reverse saturation current depends on:",
        "question_hi": "p-n संधि डायोड में, विपरीत संतृप्त धारा निर्भर करती है:",
        "options_en": ["Temperature only", "Applied voltage only", "Both temperature and applied voltage", "Doping concentration only"],
        "options_hi": ["केवल तापमान पर", "केवल लगाए गए वोल्टेज पर", "तापमान और लगाए गए वोल्टेज दोनों पर", "केवल डोपिंग सांद्रता पर"],
        "answer_en": "Temperature only",
        "answer_hi": "केवल तापमान पर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The de Broglie wavelength of a particle of mass m and kinetic energy K is:",
        "question_hi": "द्रव्यमान m और गतिज ऊर्जा K वाले कण की डी ब्रोगली तरंगदैर्ध्य है:",
        "options_en": ["h/√(2mK)", "h/(2mK)", "√(2mK)/h", "h²/(2mK)"],
        "options_hi": ["h/√(2mK)", "h/(2mK)", "√(2mK)/h", "h²/(2mK)"],
        "answer_en": "h/√(2mK)",
        "answer_hi": "h/√(2mK)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In a hydrogen atom, the ratio of energies of electron in first excited state to ground state is:",
        "question_hi": "हाइड्रोजन परमाणु में, प्रथम उत्तेजित अवस्था से भूमि अवस्था में इलेक्ट्रॉन की ऊर्जाओं का अनुपात है:",
        "options_en": ["1:4", "4:1", "1:2", "2:1"],
        "options_hi": ["1:4", "4:1", "1:2", "2:1"],
        "answer_en": "1:4",
        "answer_hi": "1:4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The truth table for which logic gate is shown: Input: 00->1, 01->1, 10->1, 11->0",
        "question_hi": "किस लॉजिक गेट के लिए सत्य सारणी दिखाई गई है: इनपुट: 00->1, 01->1, 10->1, 11->0",
        "options_en": ["AND", "OR", "NAND", "NOR"],
        "options_hi": ["AND", "OR", "NAND", "NOR"],
        "answer_en": "NAND",
        "answer_hi": "NAND",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "A radioactive nucleus emits one alpha and two beta particles. The resulting nucleus is:",
        "question_hi": "एक रेडियोधर्मी नाभिक एक अल्फा और दो बीटा कण उत्सर्जित करता है। परिणामी नाभिक है:",
        "options_en": ["Isotope", "Isobar", "Isotone", "Isomer"],
        "options_hi": ["समस्थानिक", "समभारिक", "समन्यूट्रॉनिक", "समावयवी"],
        "answer_en": "Isotope",
        "answer_hi": "समस्थानिक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The binding energy per nucleon is maximum for:",
        "question_hi": "प्रति न्यूक्लियॉन बंधन ऊर्जा अधिकतम है:",
        "options_en": ["Hydrogen", "Helium", "Iron", "Uranium"],
        "options_hi": ["हाइड्रोजन", "हीलियम", "आयरन", "यूरेनियम"],
        "answer_en": "Iron",
        "answer_hi": "आयरन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In photoelectric effect, the stopping potential depends on:",
        "question_hi": "प्रकाश विद्युत प्रभाव में, निरोधी विभव निर्भर करता है:",
        "options_en": ["Frequency of incident light", "Intensity of incident light", "Both frequency and intensity", "Work function only"],
        "options_hi": ["आपतित प्रकाश की आवृत्ति", "आपतित प्रकाश की तीव्रता", "आवृत्ति और तीव्रता दोनों", "केवल कार्य फलन"],
        "answer_en": "Frequency of incident light",
        "answer_hi": "आपतित प्रकाश की आवृत्ति",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Coordination Compounds & Electrochemistry (11-25)
    {
        "num": 11,
        "question_en": "The IUPAC name of K₃[Fe(CN)₆] is:",
        "question_hi": "K₃[Fe(CN)₆] का IUPAC नाम है:",
        "options_en": ["Potassium hexacyanoferrate(II)", "Potassium ferricyanide", "Potassium hexacyanoferrate(III)", "Potassium ferrocyanide"],
        "options_hi": ["पोटैशियम हेक्सासायनोफेरेट(II)", "पोटैशियम फेरिसायनाइड", "पोटैशियम हेक्सासायनोफेरेट(III)", "पोटैशियम फेरोसायनाइड"],
        "answer_en": "Potassium hexacyanoferrate(III)",
        "answer_hi": "पोटैशियम हेक्सासायनोफेरेट(III)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "In the electrolysis of aqueous CuSO₄ using copper electrodes, the reaction at anode is:",
        "question_hi": "कॉपर इलेक्ट्रोड का उपयोग करके जलीय CuSO₄ के विद्युत अपघटन में, एनोड पर अभिक्रिया है:",
        "options_en": ["2H₂O → O₂ + 4H⁺ + 4e⁻", "Cu → Cu²⁺ + 2e⁻", "2SO₄²⁻ → S₂O₈²⁻ + 2e⁻", "4OH⁻ → O₂ + 2H₂O + 4e⁻"],
        "options_hi": ["2H₂O → O₂ + 4H⁺ + 4e⁻", "Cu → Cu²⁺ + 2e⁻", "2SO₄²⁻ → S₂O₈²⁻ + 2e⁻", "4OH⁻ → O₂ + 2H₂O + 4e⁻"],
        "answer_en": "Cu → Cu²⁺ + 2e⁻",
        "answer_hi": "Cu → Cu²⁺ + 2e⁻",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The coordination number in [CoCl₂(en)₂]⁺ is:",
        "question_hi": "[CoCl₂(en)₂]⁺ में उपसहसंयोजन संख्या है:",
        "options_en": ["4", "5", "6", "7"],
        "options_hi": ["4", "5", "6", "7"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The standard electrode potential for the reaction M²⁺ + 2e⁻ → M is -2.37 V. The metal M is:",
        "question_hi": "अभिक्रिया M²⁺ + 2e⁻ → M के लिए मानक इलेक्ट्रोड विभव -2.37 V है। धातु M है:",
        "options_en": ["Zinc", "Magnesium", "Aluminum", "Calcium"],
        "options_hi": ["जिंक", "मैग्नीशियम", "एल्युमिनियम", "कैल्शियम"],
        "answer_en": "Magnesium",
        "answer_hi": "मैग्नीशियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which of the following is an outer orbital complex?",
        "question_hi": "निम्नलिखित में से कौन सा बाह्य कक्षक संकुल है?",
        "options_en": ["[Co(NH₃)₆]³⁺", "[Fe(CN)₆]⁴⁻", "[CoF₆]³⁻", "[Cr(NH₃)₆]³⁺"],
        "options_hi": ["[Co(NH₃)₆]³⁺", "[Fe(CN)₆]⁴⁻", "[CoF₆]³⁻", "[Cr(NH₃)₆]³⁺"],
        "answer_en": "[CoF₆]³⁻",
        "answer_hi": "[CoF₆]³⁻",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Probability & Statistics (26-40)
    {
        "num": 16,
        "question_en": "If A and B are two events such that P(A) = 0.4, P(B) = 0.8 and P(B|A) = 0.6, then P(A|B) is:",
        "question_hi": "यदि A और B दो घटनाएँ इस प्रकार हैं कि P(A) = 0.4, P(B) = 0.8 और P(B|A) = 0.6, तो P(A|B) है:",
        "options_en": ["0.3", "0.4", "0.5", "0.6"],
        "options_hi": ["0.3", "0.4", "0.5", "0.6"],
        "answer_en": "0.3",
        "answer_hi": "0.3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The variance of first n natural numbers is:",
        "question_hi": "प्रथम n प्राकृतिक संख्याओं का प्रसरण है:",
        "options_en": ["(n²-1)/12", "(n²+1)/12", "n(n+1)/2", "(n+1)(2n+1)/6"],
        "options_hi": ["(n²-1)/12", "(n²+1)/12", "n(n+1)/2", "(n+1)(2n+1)/6"],
        "answer_en": "(n²-1)/12",
        "answer_hi": "(n²-1)/12",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "If the mean and variance of a binomial distribution are 4 and 2 respectively, then P(X=1) is:",
        "question_hi": "यदि एक द्विपद बंटन का माध्य और प्रसरण क्रमशः 4 और 2 हैं, तो P(X=1) है:",
        "options_en": ["1/32", "1/16", "1/8", "1/4"],
        "options_hi": ["1/32", "1/16", "1/8", "1/4"],
        "answer_en": "1/32",
        "answer_hi": "1/32",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "The probability that a leap year has 53 Sundays is:",
        "question_hi": "एक लीप वर्ष में 53 रविवार होने की प्रायिकता है:",
        "options_en": ["1/7", "2/7", "3/7", "4/7"],
        "options_hi": ["1/7", "2/7", "3/7", "4/7"],
        "answer_en": "2/7",
        "answer_hi": "2/7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "If the regression coefficient of y on x is 2 and that of x on y is 0.5, then the correlation coefficient is:",
        "question_hi": "यदि y का x पर समाश्रयण गुणांक 2 है और x का y पर समाश्रयण गुणांक 0.5 है, तो सहसंबंध गुणांक है:",
        "options_en": ["0.5", "1", "√2", "2"],
        "options_hi": ["0.5", "1", "√2", "2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },

    // Biology - Genetics & Evolution (41-55)
    {
        "num": 21,
        "question_en": "In a dihybrid cross, the phenotypic ratio in F₂ generation is:",
        "question_hi": "एक संकर क्रॉस में, F₂ पीढ़ी में फेनोटाइपिक अनुपात है:",
        "options_en": ["9:3:3:1", "3:1", "1:2:1", "1:1:1:1"],
        "options_hi": ["9:3:3:1", "3:1", "1:2:1", "1:1:1:1"],
        "answer_en": "9:3:3:1",
        "answer_hi": "9:3:3:1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The theory of natural selection was proposed by:",
        "question_hi": "प्राकृतिक चयन का सिद्धांत किसने प्रस्तावित किया था:",
        "options_en": ["Lamarck", "Darwin", "Mendel", "De Vries"],
        "options_hi": ["लैमार्क", "डार्विन", "मेंडल", "डी व्रीस"],
        "answer_en": "Darwin",
        "answer_hi": "डार्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The process of formation of mRNA from DNA is called:",
        "question_hi": "DNA से mRNA के निर्माण की प्रक्रिया कहलाती है:",
        "options_en": ["Translation", "Transcription", "Replication", "Transformation"],
        "options_hi": ["अनुवाद", "प्रतिलेखन", "प्रतिकृति", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलेखन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The human genome project was completed in:",
        "question_hi": "मानव जीनोम परियोजना कब पूरी हुई थी:",
        "options_en": ["1990", "2000", "2003", "2010"],
        "options_hi": ["1990", "2000", "2003", "2010"],
        "answer_en": "2003",
        "answer_hi": "2003",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "The phenomenon of 'survival of the fittest' was described by:",
        "question_hi": "'योग्यतम की उत्तरजीविता' की घटना का वर्णन किसने किया था:",
        "options_en": ["Darwin", "Herbert Spencer", "Lamarck", "Wallace"],
        "options_hi": ["डार्विन", "हर्बर्ट स्पेंसर", "लैमार्क", "वालेस"],
        "answer_en": "Herbert Spencer",
        "answer_hi": "हर्बर्ट स्पेंसर",
        "attempted": false,
        "selected": ""
    },

    // English - Vocabulary & Comprehension (56-70)
    {
        "num": 26,
        "question_en": "Choose the correct synonym of 'Benevolent':",
        "question_hi": "'Benevolent' का सही पर्यायवाची चुनें:",
        "options_en": ["Malevolent", "Kind", "Cruel", "Selfish"],
        "options_hi": ["दुर्भावनापूर्ण", "दयालु", "क्रूर", "स्वार्थी"],
        "answer_en": "Kind",
        "answer_hi": "दयालु",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
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
        "num": 28,
        "question_en": "Choose the appropriate preposition: 'He is allergic ___ peanuts.'",
        "question_hi": "उपयुक्त संबंधसूचक अव्यय चुनें: 'He is allergic ___ peanuts.'",
        "options_en": ["to", "for", "with", "by"],
        "options_hi": ["to", "for", "with", "by"],
        "answer_en": "to",
        "answer_hi": "to",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Identify the part of speech for 'quickly' in: 'She ran quickly.'",
        "question_hi": "'She ran quickly.' में 'quickly' के भाषण का भाग पहचानें:",
        "options_en": ["Adjective", "Adverb", "Verb", "Noun"],
        "options_hi": ["विशेषण", "क्रिया विशेषण", "क्रिया", "संज्ञा"],
        "answer_en": "Adverb",
        "answer_hi": "क्रिया विशेषण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Choose the correct antonym of 'Ancient':",
        "question_hi": "'Ancient' का सही विलोम चुनें:",
        "options_en": ["Old", "Modern", "Historical", "Traditional"],
        "options_hi": ["पुराना", "आधुनिक", "ऐतिहासिक", "पारंपरिक"],
        "answer_en": "Modern",
        "answer_hi": "आधुनिक",
        "attempted": false,
        "selected": ""
    },

    // Hindi - व्याकरण और शब्दावली (71-85)
    {
        "num": 31,
        "question_en": "'सूर्य अस्त हो गया' - इस वाक्य में क्रिया का काल है:",
        "question_hi": "'सूर्य अस्त हो गया' - इस वाक्य में क्रिया का काल है:",
        "options_en": ["वर्तमान काल", "भूतकाल", "भविष्यत काल", "संदिग्ध भूत"],
        "options_hi": ["वर्तमान काल", "भूतकाल", "भविष्यत काल", "संदिग्ध भूत"],
        "answer_en": "भूतकाल",
        "answer_hi": "भूतकाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "'अंधकार' का विलोम शब्द है:",
        "question_hi": "'अंधकार' का विलोम शब्द है:",
        "options_en": ["रोशनी", "प्रकाश", "उजाला", "चमक"],
        "options_hi": ["रोशनी", "प्रकाश", "उजाला", "चमक"],
        "answer_en": "प्रकाश",
        "answer_hi": "प्रकाश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "'गुरु' का पर्यायवाची शब्द नहीं है:",
        "question_hi": "'गुरु' का पर्यायवाची शब्द नहीं है:",
        "options_en": ["शिक्षक", "अध्यापक", "अज्ञानी", "आचार्य"],
        "options_hi": ["शिक्षक", "अध्यापक", "अज्ञानी", "आचार्य"],
        "answer_en": "अज्ञानी",
        "answer_hi": "अज्ञानी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "'राम पुस्तक पढ़ता है' - इस वाक्य में कर्म है:",
        "question_hi": "'राम पुस्तक पढ़ता है' - इस वाक्य में कर्म है:",
        "options_en": ["राम", "पढ़ता", "पुस्तक", "है"],
        "options_hi": ["राम", "पढ़ता", "पुस्तक", "है"],
        "answer_en": "पुस्तक",
        "answer_hi": "पुस्तक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "'सोना' का अनेकार्थी शब्द नहीं है:",
        "question_hi": "'सोना' का अनेकार्थी शब्द नहीं है:",
        "options_en": ["स्वर्ण", "सोना धातु", "सुनहरा", "लोहा"],
        "options_hi": ["स्वर्ण", "सोना धातु", "सुनहरा", "लोहा"],
        "answer_en": "लोहा",
        "answer_hi": "लोहा",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge - Science & Technology (86-100)
    {
        "num": 36,
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
        "num": 37,
        "question_en": "The element common to all acids is:",
        "question_hi": "सभी अम्लों में सामान्य तत्व है:",
        "options_en": ["Hydrogen", "Oxygen", "Nitrogen", "Chlorine"],
        "options_hi": ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "क्लोरीन"],
        "answer_en": "Hydrogen",
        "answer_hi": "हाइड्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The device used to measure the depth of ocean is:",
        "question_hi": "समुद्र की गहराई मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Hydrometer", "Hygrometer", "Fathometer", "Altimeter"],
        "options_hi": ["हाइड्रोमीटर", "हाइग्रोमीटर", "फैदोमीटर", "अल्टीमीटर"],
        "answer_en": "Fathometer",
        "answer_hi": "फैदोमीटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The chemical name of vitamin C is:",
        "question_hi": "विटामिन C का रासायनिक नाम है:",
        "options_en": ["Ascorbic acid", "Citric acid", "Nitric acid", "Acetic acid"],
        "options_hi": ["एस्कॉर्बिक अम्ल", "सिट्रिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
        "answer_en": "Ascorbic acid",
        "answer_hi": "एस्कॉर्बिक अम्ल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The SI unit of pressure is:",
        "question_hi": "दाब की SI इकाई है:",
        "options_en": ["Pascal", "Newton", "Joule", "Watt"],
        "options_hi": ["पास्कल", "न्यूटन", "जूल", "वाट"],
        "answer_en": "Pascal",
        "answer_hi": "पास्कल",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (41-100)
    {
        "num": 41,
        "question_en": "The dimensional formula of Planck's constant is:",
        "question_hi": "प्लैंक नियतांक का विमीय सूत्र है:",
        "options_en": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "options_hi": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "answer_en": "ML²T⁻¹",
        "answer_hi": "ML²T⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "In the reaction 2NO₂ → 2NO + O₂, the order of reaction is:",
        "question_hi": "अभिक्रिया 2NO₂ → 2NO + O₂ में, अभिक्रिया की कोटि है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The value of ∫(0 to π/2) log(sinx) dx is:",
        "question_hi": "∫(0 से π/2) log(sinx) dx का मान है:",
        "options_en": ["-π/2 log2", "π/2 log2", "-π log2", "π log2"],
        "options_hi": ["-π/2 log2", "π/2 log2", "-π log2", "π log2"],
        "answer_en": "-π/2 log2",
        "answer_hi": "-π/2 log2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
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
        "num": 45,
        "question_en": "The author of 'Godan' is:",
        "question_hi": "'गोदान' के लेखक हैं:",
        "options_en": ["Premchand", "Rabindranath Tagore", "Harivansh Rai Bachchan", "Mahadevi Verma"],
        "options_hi": ["प्रेमचंद", "रबींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "महादेवी वर्मा"],
        "answer_en": "Premchand",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "The compound that gives iodoform test is:",
        "question_hi": "वह यौगिक जो आयोडोफॉर्म परीक्षण देता है:",
        "options_en": ["CH₃CH₂OH", "CH₃COOH", "CH₃OCH₃", "CH₃CHO"],
        "options_hi": ["CH₃CH₂OH", "CH₃COOH", "CH₃OCH₃", "CH₃CHO"],
        "answer_en": "CH₃CH₂OH",
        "answer_hi": "CH₃CH₂OH",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The magnetic susceptibility of a paramagnetic material is:",
        "question_hi": "एक अनुचुंबकीय पदार्थ की चुंबकीय सुग्राहिता है:",
        "options_en": ["Small and positive", "Small and negative", "Large and positive", "Large and negative"],
        "options_hi": ["छोटी और धनात्मक", "छोटी और ऋणात्मक", "बड़ी और धनात्मक", "बड़ी और ऋणात्मक"],
        "answer_en": "Small and positive",
        "answer_hi": "छोटी और धनात्मक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The value of lim(x→0) (a^x - 1)/x is:",
        "question_hi": "lim(x→0) (a^x - 1)/x का मान है:",
        "options_en": ["0", "1", "loga", "lna"],
        "options_hi": ["0", "1", "loga", "lna"],
        "answer_en": "loga",
        "answer_hi": "loga",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
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
        "num": 50,
        "question_en": "The IUPAC name of CH₃CH₂CH(CH₃)CHO is:",
        "question_hi": "CH₃CH₂CH(CH₃)CHO का IUPAC नाम है:",
        "options_en": ["2-Methylbutanal", "3-Methylbutanal", "Pentan-2-one", "Butan-2-one"],
        "options_hi": ["2-मेथिलब्यूटेनल", "3-मेथिलब्यूटेनल", "पेंटेन-2-ओन", "ब्यूटेन-2-ओन"],
        "answer_en": "2-Methylbutanal",
        "answer_hi": "2-मेथिलब्यूटेनल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "The work function of sodium is 2.3 eV. The threshold wavelength is:",
        "question_hi": "सोडियम का कार्य फलन 2.3 eV है। देहली तरंगदैर्ध्य है:",
        "options_en": ["5400 Å", "540 Å", "540 nm", "5400 nm"],
        "options_hi": ["5400 Å", "540 Å", "540 nm", "5400 nm"],
        "answer_en": "5400 Å",
        "answer_hi": "5400 Å",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
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
        "num": 53,
        "question_en": "The area bounded by y = x³, x-axis and x = 1, x = 2 is:",
        "question_hi": "y = x³, x-अक्ष और x = 1, x = 2 से घिरा क्षेत्रफल है:",
        "options_en": ["15/4", "17/4", "19/4", "21/4"],
        "options_hi": ["15/4", "17/4", "19/4", "21/4"],
        "answer_en": "15/4",
        "answer_hi": "15/4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
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
        "num": 55,
        "question_en": "Choose the correct passive voice: 'They are building a new bridge.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'They are building a new bridge.'",
        "options_en": ["A new bridge is built by them", "A new bridge was built by them", "A new bridge is being built by them", "A new bridge has been built by them"],
        "options_hi": ["A new bridge is built by them", "A new bridge was built by them", "A new bridge is being built by them", "A new bridge has been built by them"],
        "answer_en": "A new bridge is being built by them",
        "answer_hi": "A new bridge is being built by them",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'कृष्ण' का पर्यायवाची शब्द है:",
        "question_hi": "'कृष्ण' का पर्यायवाची शब्द है:",
        "options_en": ["श्याम", "गोरा", "सफेद", "पीला"],
        "options_hi": ["श्याम", "गोरा", "सफेद", "पीला"],
        "answer_en": "श्याम",
        "answer_hi": "श्याम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
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
        "num": 58,
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
        "num": 59,
        "question_en": "In the electrolysis of water, the ratio of volumes of H₂ to O₂ is:",
        "question_hi": "पानी के विद्युत अपघटन में, H₂ से O₂ के आयतनों का अनुपात है:",
        "options_en": ["1:2", "2:1", "1:1", "1:8"],
        "options_hi": ["1:2", "2:1", "1:1", "1:8"],
        "answer_en": "2:1",
        "answer_hi": "2:1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "The value of ∫(secx tanx dx) is:",
        "question_hi": "∫(secx tanx dx) का मान है:",
        "options_en": ["secx + C", "tanx + C", "log|secx| + C", "log|tanx| + C"],
        "options_hi": ["secx + C", "tanx + C", "log|secx| + C", "log|tanx| + C"],
        "answer_en": "secx + C",
        "answer_hi": "secx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "The site of photosynthesis in plant cell is:",
        "question_hi": "पादप कोशिका में प्रकाश संश्लेषण का स्थल है:",
        "options_en": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "Choose the correct antonym of 'Courage':",
        "question_hi": "'Courage' का सही विलोम चुनें:",
        "options_en": ["Bravery", "Fear", "Confidence", "Daring"],
        "options_hi": ["बहादुरी", "डर", "आत्मविश्वास", "साहस"],
        "answer_en": "Fear",
        "answer_hi": "डर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "'सत्यमेव जयते' किस उपनिषद से लिया गया है?",
        "question_hi": "'सत्यमेव जयते' किस उपनिषद से लिया गया है?",
        "options_en": ["छांदोग्य उपनिषद", "मुंडक उपनिषद", "कठोपनिषद", "ईशावास्य उपनिषद"],
        "options_hi": ["छांदोग्य उपनिषद", "मुंडक उपनिषद", "कठोपनिषद", "ईशावास्य उपनिषद"],
        "answer_en": "मुंडक उपनिषद",
        "answer_hi": "मुंडक उपनिषद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The first nuclear reactor in India was:",
        "question_hi": "भारत में पहला नाभिकीय रिएक्टर था:",
        "options_en": ["Apsara", "Cirus", "Dhruva", "Kamini"],
        "options_hi": ["अप्सरा", "साइरस", "ध्रुव", "कामिनी"],
        "answer_en": "Apsara",
        "answer_hi": "अप्सरा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "The magnetic moment of electron due to orbital motion is:",
        "question_hi": "कक्षीय गति के कारण इलेक्ट्रॉन का चुंबकीय आघूर्ण है:",
        "options_en": ["eh/4πm", "eh/2πm", "eh/4π", "eh/2π"],
        "options_hi": ["eh/4πm", "eh/2πm", "eh/4π", "eh/2π"],
        "answer_en": "eh/4πm",
        "answer_hi": "eh/4πm",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
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
        "num": 67,
        "question_en": "The value of ∫(1/(x² + a²)) dx is:",
        "question_hi": "∫(1/(x² + a²)) dx का मान है:",
        "options_en": ["(1/a)tan⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "(1/a)cot⁻¹(x/a) + C", "log|x² + a²| + C"],
        "options_hi": ["(1/a)tan⁻¹(x/a) + C", "tan⁻¹(x/a) + C", "(1/a)cot⁻¹(x/a) + C", "log|x² + a²| + C"],
        "answer_en": "(1/a)tan⁻¹(x/a) + C",
        "answer_hi": "(1/a)tan⁻¹(x/a) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The hormone that stimulates milk production is:",
        "question_hi": "वह हार्मोन जो दूध उत्पादन को उत्तेजित करता है:",
        "options_en": ["Oxytocin", "Prolactin", "Estrogen", "Progesterone"],
        "options_hi": ["ऑक्सीटोसिन", "प्रोलैक्टिन", "एस्ट्रोजन", "प्रोजेस्टेरोन"],
        "answer_en": "Prolactin",
        "answer_hi": "प्रोलैक्टिन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["Neither of the boys are coming", "Neither of the boys is coming", "Neither of the boys were coming", "Neither of the boys have come"],
        "options_hi": ["Neither of the boys are coming", "Neither of the boys is coming", "Neither of the boys were coming", "Neither of the boys have come"],
        "answer_en": "Neither of the boys is coming",
        "answer_hi": "Neither of the boys is coming",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "'अहं ब्रह्मास्मि' किस उपनिषद का महावाक्य है?",
        "question_hi": "'अहं ब्रह्मास्मि' किस उपनिषद का महावाक्य है?",
        "options_en": ["छांदोग्य उपनिषद", "बृहदारण्यक उपनिषद", "मुंडक उपनिषद", "कठोपनिषद"],
        "options_hi": ["छांदोग्य उपनिषद", "बृहदारण्यक उपनिषद", "मुंडक उपनिषद", "कठोपनिषद"],
        "answer_en": "बृहदारण्यक उपनिषद",
        "answer_hi": "बृहदारण्यक उपनिषद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "The first Indian woman to win Nobel Prize was:",
        "question_hi": "नोबेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
        "options_en": ["Indira Gandhi", "Mother Teresa", "Amartya Sen", "Sarojini Naidu"],
        "options_hi": ["इंदिरा गांधी", "मदर टेरेसा", "अमर्त्य सेन", "सरोजिनी नायडू"],
        "answer_en": "Mother Teresa",
        "answer_hi": "मदर टेरेसा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The force between two parallel current carrying wires is:",
        "question_hi": "दो समानांतर धारावाही तारों के बीच बल है:",
        "options_en": ["Inversely proportional to distance", "Directly proportional to distance", "Inversely proportional to square of distance", "Independent of distance"],
        "options_hi": ["दूरी के व्युत्क्रमानुपाती", "दूरी के समानुपाती", "दूरी के वर्ग के व्युत्क्रमानुपाती", "दूरी से स्वतंत्र"],
        "answer_en": "Inversely proportional to distance",
        "answer_hi": "दूरी के व्युत्क्रमानुपाती",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The compound that gives positive Tollen's test is:",
        "question_hi": "वह यौगिक जो सकारात्मक टोलेन परीक्षण देता है:",
        "options_en": ["Acetone", "Formaldehyde", "Acetic acid", "Ethanol"],
        "options_hi": ["एसीटोन", "फॉर्मेल्डिहाइड", "एसिटिक अम्ल", "एथनॉल"],
        "answer_en": "Formaldehyde",
        "answer_hi": "फॉर्मेल्डिहाइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The value of ∫(e^x (sinx + cosx) dx) is:",
        "question_hi": "∫(e^x (sinx + cosx) dx) का मान है:",
        "options_en": ["e^x sinx + C", "e^x cosx + C", "e^x (sinx + cosx) + C", "e^x + C"],
        "options_hi": ["e^x sinx + C", "e^x cosx + C", "e^x (sinx + cosx) + C", "e^x + C"],
        "answer_en": "e^x sinx + C",
        "answer_hi": "e^x sinx + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "The enzyme that converts starch to maltose is:",
        "question_hi": "स्टार्च को माल्टोज में परिवर्तित करने वाला एंजाइम है:",
        "options_en": ["Amylase", "Maltase", "Invertase", "Zymase"],
        "options_hi": ["एमाइलेज", "माल्टेज", "इन्वर्टेज", "जाइमेज"],
        "answer_en": "Amylase",
        "answer_hi": "एमाइलेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "Choose the correct synonym of 'Meticulous':",
        "question_hi": "'Meticulous' का सही पर्यायवाची चुनें:",
        "options_en": ["Careless", "Thorough", "Sloppy", "Hasty"],
        "options_hi": ["लापरवाह", "संपूर्ण", "असावधान", "जल्दबाज"],
        "answer_en": "Thorough",
        "answer_hi": "संपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
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
        "num": 78,
        "question_en": "The first Indian state to be formed on linguistic basis was:",
        "question_hi": "भाषाई आधार पर गठित होने वाला पहला भारतीय राज्य था:",
        "options_en": ["Tamil Nadu", "Andhra Pradesh", "Karnataka", "Kerala"],
        "options_hi": ["तमिलनाडु", "आंध्र प्रदेश", "कर्नाटक", "केरल"],
        "answer_en": "Andhra Pradesh",
        "answer_hi": "आंध्र प्रदेश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "The critical angle for glass-air interface is 42°. The refractive index of glass is:",
        "question_hi": "कांच-वायु अंतरापृष्ठ के लिए क्रांतिक कोण 42° है। कांच का अपवर्तनांक है:",
        "options_en": ["1.5", "1.6", "1.7", "1.8"],
        "options_hi": ["1.5", "1.6", "1.7", "1.8"],
        "answer_en": "1.5",
        "answer_hi": "1.5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The number of optical isomers of [Co(en)₃]³⁺ is:",
        "question_hi": "[Co(en)₃]³⁺ के प्रकाशीय समावयवियों की संख्या है:",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "The value of ∫(0 to 1) x e^x dx is:",
        "question_hi": "∫(0 से 1) x e^x dx का मान है:",
        "options_en": ["1", "2", "e", "0"],
        "options_hi": ["1", "2", "e", "0"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The hormone that regulates blood calcium level is:",
        "question_hi": "वह हार्मोन जो रक्त कैल्शियम स्तर को नियंत्रित करता है:",
        "options_en": ["Insulin", "Thyroxine", "Parathormone", "Adrenaline"],
        "options_hi": ["इंसुलिन", "थायरोक्सिन", "पैराथॉर्मोन", "एड्रेनालाईन"],
        "answer_en": "Parathormone",
        "answer_hi": "पैराथॉर्मोन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Choose the correct passive voice: 'Someone stole my purse.'",
        "question_hi": "सही कर्मवाच्य चुनें: 'Someone stole my purse.'",
        "options_en": ["My purse was stolen by someone", "My purse is stolen by someone", "My purse has been stolen by someone", "My purse had been stolen by someone"],
        "options_hi": ["My purse was stolen by someone", "My purse is stolen by someone", "My purse has been stolen by someone", "My purse had been stolen by someone"],
        "answer_en": "My purse was stolen by someone",
        "answer_hi": "My purse was stolen by someone",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "'महाभारत' के रचयिता हैं:",
        "question_hi": "'महाभारत' के रचयिता हैं:",
        "options_en": ["वाल्मीकि", "वेदव्यास", "तुलसीदास", "कालिदास"],
        "options_hi": ["वाल्मीकि", "वेदव्यास", "तुलसीदास", "कालिदास"],
        "answer_en": "वेदव्यास",
        "answer_hi": "वेदव्यास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "The first Indian to win Oscar award was:",
        "question_hi": "ऑस्कर पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["A.R. Rahman", "Bhanu Athaiya", "Satyajit Ray", "Gulzar"],
        "options_hi": ["ए.आर. रहमान", "भानु अथैया", "सत्यजित रे", "गुलज़ार"],
        "answer_en": "Bhanu Athaiya",
        "answer_hi": "भानु अथैया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
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
        "num": 87,
        "question_en": "The compound that shows metamerism is:",
        "question_hi": "वह यौगिक जो मेटामेरिज्म दर्शाता है:",
        "options_en": ["Diethyl ether", "Acetone", "Ethanol", "Acetic acid"],
        "options_hi": ["डाइएथिल ईथर", "एसीटोन", "एथनॉल", "एसिटिक अम्ल"],
        "answer_en": "Diethyl ether",
        "answer_hi": "डाइएथिल ईथर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The value of ∫(√(1 - x²) dx) is:",
        "question_hi": "∫(√(1 - x²) dx) का मान है:",
        "options_en": ["(x/2)√(1-x²) + (1/2)sin⁻¹x + C", "(x/2)√(1-x²) + sin⁻¹x + C", "x√(1-x²) + sin⁻¹x + C", "(1/2)sin⁻¹x + C"],
        "options_hi": ["(x/2)√(1-x²) + (1/2)sin⁻¹x + C", "(x/2)√(1-x²) + sin⁻¹x + C", "x√(1-x²) + sin⁻¹x + C", "(1/2)sin⁻¹x + C"],
        "answer_en": "(x/2)√(1-x²) + (1/2)sin⁻¹x + C",
        "answer_hi": "(x/2)√(1-x²) + (1/2)sin⁻¹x + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
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
        "num": 90,
        "question_en": "Choose the correct antonym of 'Generous':",
        "question_hi": "'Generous' का सही विलोम चुनें:",
        "options_en": ["Kind", "Stingy", "Charitable", "Benevolent"],
        "options_hi": ["दयालु", "कंजूस", "दानशील", "परोपकारी"],
        "answer_en": "Stingy",
        "answer_hi": "कंजूस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "'गीतांजलि' के रचयिता हैं:",
        "question_hi": "'गीतांजलि' के रचयिता हैं:",
        "options_en": ["रवींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी निराला"],
        "options_hi": ["रवींद्रनाथ टैगोर", "हरिवंश राय बच्चन", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी निराला"],
        "answer_en": "रवींद्रनाथ टैगोर",
        "answer_hi": "रवींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The first Indian woman President was:",
        "question_hi": "पहली भारतीय महिला राष्ट्रपति थीं:",
        "options_en": ["Indira Gandhi", "Pratibha Patil", "Sarojini Naidu", "Vijayalakshmi Pandit"],
        "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू", "विजयलक्ष्मी पंडित"],
        "answer_en": "Pratibha Patil",
        "answer_hi": "प्रतिभा पाटिल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "The resistance of a wire is R. If its length is doubled and area halved, new resistance is:",
        "question_hi": "एक तार का प्रतिरोध R है। यदि इसकी लंबाई दोगुनी और क्षेत्रफल आधा कर दिया जाए, नया प्रतिरोध है:",
        "options_en": ["R", "2R", "4R", "R/2"],
        "options_hi": ["R", "2R", "4R", "R/2"],
        "answer_en": "4R",
        "answer_hi": "4R",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
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
        "num": 95,
        "question_en": "The value of ∫(cos²x dx) is:",
        "question_hi": "∫(cos²x dx) का मान है:",
        "options_en": ["(x/2) + (sin2x/4) + C", "(x/2) - (sin2x/4) + C", "x + (sin2x/2) + C", "(x/2) + (sinx/2) + C"],
        "options_hi": ["(x/2) + (sin2x/4) + C", "(x/2) - (sin2x/4) + C", "x + (sin2x/2) + C", "(x/2) + (sinx/2) + C"],
        "answer_en": "(x/2) + (sin2x/4) + C",
        "answer_hi": "(x/2) + (sin2x/4) + C",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
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
        "num": 97,
        "question_en": "Choose the correct synonym of 'Ubiquitous':",
        "question_hi": "'Ubiquitous' का सही पर्यायवाची चुनें:",
        "options_en": ["Rare", "Everywhere", "Nowhere", "Unique"],
        "options_hi": ["दुर्लभ", "सर्वव्यापी", "कहीं नहीं", "अद्वितीय"],
        "answer_en": "Everywhere",
        "answer_hi": "सर्वव्यापी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "'अभिज्ञानशाकुंतलम्' के रचयिता हैं:",
        "question_hi": "'अभिज्ञानशाकुंतलम्' के रचयिता हैं:",
        "options_en": ["कालिदास", "भास", "भवभूति", "सूरदास"],
        "options_hi": ["कालिदास", "भास", "भवभूति", "सूरदास"],
        "answer_en": "कालिदास",
        "answer_hi": "कालिदास",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "The first Indian to win Nobel Prize in Physics was:",
        "question_hi": "भौतिकी में नोबेल पुरस्कार जीतने वाले पहले भारतीय थे:",
        "options_en": ["C.V. Raman", "S. Chandrasekhar", "H.J. Bhabha", "S.N. Bose"],
        "options_hi": ["सी.वी. रमन", "एस. चंद्रशेखर", "एच.जे. भाभा", "एस.एन. बोस"],
        "answer_en": "C.V. Raman",
        "answer_hi": "सी.वी. रमन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The unit of electric flux is:",
        "question_hi": "विद्युत फ्लक्स की इकाई है:",
        "options_en": ["Volt-meter", "Newton/coulomb", "Weber", "Tesla"],
        "options_hi": ["वोल्ट-मीटर", "न्यूटन/कूलम्ब", "वेबर", "टेस्ला"],
        "answer_en": "Volt-meter",
        "answer_hi": "वोल्ट-मीटर",
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