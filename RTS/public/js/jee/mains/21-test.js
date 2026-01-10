const questions = [
    // Physics - Electromagnetic Waves & Communication (1-10)
    {
        "num": 1,
        "question_en": "The electromagnetic waves used in satellite communication are:",
        "question_hi": "उपग्रह संचार में प्रयुक्त विद्युत चुम्बकीय तरंगें हैं:",
        "options_en": ["Radio waves", "Microwaves", "Infrared waves", "Ultraviolet waves"],
        "options_hi": ["रेडियो तरंगें", "माइक्रोवेव", "अवरक्त तरंगें", "पराबैंगनी तरंगें"],
        "answer_en": "Microwaves",
        "answer_hi": "माइक्रोवेव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The displacement current in Maxwell's equations is due to:",
        "question_hi": "मैक्सवेल के समीकरणों में विस्थापन धारा किसके कारण होती है:",
        "options_en": ["Changing electric field", "Changing magnetic field", "Steady current", "Static charges"],
        "options_hi": ["परिवर्तित विद्युत क्षेत्र", "परिवर्तित चुंबकीय क्षेत्र", "स्थिर धारा", "स्थिर आवेश"],
        "answer_en": "Changing electric field",
        "answer_hi": "परिवर्तित विद्युत क्षेत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "The speed of electromagnetic waves in vacuum is given by:",
        "question_hi": "निर्वात में विद्युत चुम्बकीय तरंगों की गति दी जाती है:",
        "options_en": ["1/√(μ₀ε₀)", "√(μ₀ε₀)", "μ₀ε₀", "1/(μ₀ε₀)"],
        "options_hi": ["1/√(μ₀ε₀)", "√(μ₀ε₀)", "μ₀ε₀", "1/(μ₀ε₀)"],
        "answer_en": "1/√(μ₀ε₀)",
        "answer_hi": "1/√(μ₀ε₀)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The modulation technique used for transmitting digital signals is:",
        "question_hi": "डिजिटल सिग्नल संचारित करने के लिए प्रयुक्त मॉडुलन तकनीक है:",
        "options_en": ["AM", "FM", "PCM", "PM"],
        "options_hi": ["AM", "FM", "PCM", "PM"],
        "answer_en": "PCM",
        "answer_hi": "PCM",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "The frequency range of visible light is approximately:",
        "question_hi": "दृश्य प्रकाश की आवृत्ति सीमा लगभग है:",
        "options_en": ["4 × 10¹⁴ to 8 × 10¹⁴ Hz", "10⁸ to 10¹¹ Hz", "10¹⁵ to 10¹⁷ Hz", "10³ to 10⁵ Hz"],
        "options_hi": ["4 × 10¹⁴ से 8 × 10¹⁴ Hz", "10⁸ से 10¹¹ Hz", "10¹⁵ से 10¹⁷ Hz", "10³ से 10⁵ Hz"],
        "answer_en": "4 × 10¹⁴ to 8 × 10¹⁴ Hz",
        "answer_hi": "4 × 10¹⁴ से 8 × 10¹⁴ Hz",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "In amplitude modulation, the bandwidth required is:",
        "question_hi": "आयाम मॉडुलन में, आवश्यक बैंडविड्थ है:",
        "options_en": ["Equal to modulating frequency", "Twice the modulating frequency", "Half the modulating frequency", "Four times the modulating frequency"],
        "options_hi": ["मॉडुलन आवृत्ति के बराबर", "मॉडुलन आवृत्ति से दोगुना", "मॉडुलन आवृत्ति से आधा", "मॉडुलन आवृत्ति से चार गुना"],
        "answer_en": "Twice the modulating frequency",
        "answer_hi": "मॉडुलन आवृत्ति से दोगुना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The phenomenon used in optical fibers is:",
        "question_hi": "ऑप्टिकल फाइबर में प्रयुक्त घटना है:",
        "options_en": ["Refraction", "Dispersion", "Total internal reflection", "Interference"],
        "options_hi": ["अपवर्तन", "विक्षेपण", "पूर्ण आंतरिक परावर्तन", "व्यतिकरण"],
        "answer_en": "Total internal reflection",
        "answer_hi": "पूर्ण आंतरिक परावर्तन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The ionosphere layer of atmosphere is important for:",
        "question_hi": "वायुमंडल की आयनमंडल परत महत्वपूर्ण है:",
        "options_en": ["Radio wave propagation", "Light transmission", "Sound transmission", "Heat conduction"],
        "options_hi": ["रेडियो तरंग संचरण", "प्रकाश संचरण", "ध्वनि संचरण", "ऊष्मा चालन"],
        "answer_en": "Radio wave propagation",
        "answer_hi": "रेडियो तरंग संचरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "The range of frequencies for FM radio broadcast is:",
        "question_hi": "FM रेडियो प्रसारण के लिए आवृत्ति सीमा है:",
        "options_en": ["88-108 MHz", "530-1710 kHz", "3-30 MHz", "300-3000 MHz"],
        "options_hi": ["88-108 MHz", "530-1710 kHz", "3-30 MHz", "300-3000 MHz"],
        "answer_en": "88-108 MHz",
        "answer_hi": "88-108 MHz",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "In a p-n junction diode, the depletion region is formed due to:",
        "question_hi": "p-n संधि डायोड में, अवक्षय क्षेत्र बनता है:",
        "options_en": ["Diffusion of charges", "Drift of charges", "Both diffusion and drift", "External bias"],
        "options_hi": ["आवेशों का विसरण", "आवेशों का अपवाह", "विसरण और अपवाह दोनों", "बाह्य अभिनति"],
        "answer_en": "Diffusion of charges",
        "answer_hi": "आवेशों का विसरण",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Chemical Kinetics & Surface Chemistry (11-20)
    {
        "num": 11,
        "question_en": "The half-life of a first order reaction is:",
        "question_hi": "प्रथम कोटि अभिक्रिया का अर्ध-आयु काल है:",
        "options_en": ["Independent of initial concentration", "Directly proportional to initial concentration", "Inversely proportional to initial concentration", "Proportional to square of initial concentration"],
        "options_hi": ["प्रारंभिक सांद्रता से स्वतंत्र", "प्रारंभिक सांद्रता के समानुपाती", "प्रारंभिक सांद्रता के व्युत्क्रमानुपाती", "प्रारंभिक सांद्रता के वर्ग के समानुपाती"],
        "answer_en": "Independent of initial concentration",
        "answer_hi": "प्रारंभिक सांद्रता से स्वतंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The Arrhenius equation is given by:",
        "question_hi": "आरहेनियस समीकरण दिया जाता है:",
        "options_en": ["k = Ae^(-Ea/RT)", "k = Ae^(Ea/RT)", "k = Ae^(-RT/Ea)", "k = Ae^(RT/Ea)"],
        "options_hi": ["k = Ae^(-Ea/RT)", "k = Ae^(Ea/RT)", "k = Ae^(-RT/Ea)", "k = Ae^(RT/Ea)"],
        "answer_en": "k = Ae^(-Ea/RT)",
        "answer_hi": "k = Ae^(-Ea/RT)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "The phenomenon of adsorption increases with:",
        "question_hi": "अधिशोषण की घटना बढ़ती है:",
        "options_en": ["Increase in temperature", "Decrease in temperature", "Increase in pressure", "Both B and C"],
        "options_hi": ["तापमान में वृद्धि", "तापमान में कमी", "दाब में वृद्धि", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The catalyst used in Haber's process is:",
        "question_hi": "हैबर प्रक्रम में प्रयुक्त उत्प्रेरक है:",
        "options_en": ["Iron", "Nickel", "Platinum", "Vanadium pentoxide"],
        "options_hi": ["आयरन", "निकल", "प्लैटिनम", "वैनेडियम पेंटॉक्साइड"],
        "answer_en": "Iron",
        "answer_hi": "आयरन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The order of reaction for which half-life is inversely proportional to initial concentration is:",
        "question_hi": "अभिक्रिया की कोटि जिसके लिए अर्ध-आयु प्रारंभिक सांद्रता के व्युत्क्रमानुपाती होती है:",
        "options_en": ["Zero order", "First order", "Second order", "Third order"],
        "options_hi": ["शून्य कोटि", "प्रथम कोटि", "द्वितीय कोटि", "तृतीय कोटि"],
        "answer_en": "Second order",
        "answer_hi": "द्वितीय कोटि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "The Tyndall effect is observed in:",
        "question_hi": "टिंडल प्रभाव प्रेक्षित किया जाता है:",
        "options_en": ["True solutions", "Colloidal solutions", "Suspensions", "Both B and C"],
        "options_hi": ["वास्तविक विलयन", "कोलॉइडी विलयन", "निलंबन", "B और C दोनों"],
        "answer_en": "Both B and C",
        "answer_hi": "B और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "The rate constant of a reaction depends on:",
        "question_hi": "अभिक्रिया का दर स्थिरांक निर्भर करता है:",
        "options_en": ["Temperature", "Concentration", "Pressure", "Volume"],
        "options_hi": ["तापमान", "सांद्रता", "दाब", "आयतन"],
        "answer_en": "Temperature",
        "answer_hi": "तापमान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The process of converting a precipitate into colloidal solution is called:",
        "question_hi": "अवक्षेप को कोलॉइडी विलयन में परिवर्तित करने की प्रक्रिया कहलाती है:",
        "options_en": ["Peptization", "Coagulation", "Dialysis", "Electrophoresis"],
        "options_hi": ["पेप्टीकरण", "स्कंदन", "डायलिसिस", "इलेक्ट्रोफोरेसिस"],
        "answer_en": "Peptization",
        "answer_hi": "पेप्टीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "For a zero order reaction, the unit of rate constant is:",
        "question_hi": "शून्य कोटि अभिक्रिया के लिए, दर स्थिरांक की इकाई है:",
        "options_en": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "options_hi": ["mol L⁻¹ s⁻¹", "s⁻¹", "L mol⁻¹ s⁻¹", "L² mol⁻² s⁻¹"],
        "answer_en": "mol L⁻¹ s⁻¹",
        "answer_hi": "mol L⁻¹ s⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The catalyst used in contact process is:",
        "question_hi": "संपर्क प्रक्रम में प्रयुक्त उत्प्रेरक है:",
        "options_en": ["Fe", "Ni", "V₂O₅", "Pt"],
        "options_hi": ["Fe", "Ni", "V₂O₅", "Pt"],
        "answer_en": "V₂O₅",
        "answer_hi": "V₂O₅",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Probability & Statistics (21-30)
    {
        "num": 21,
        "question_en": "If A and B are independent events, then P(A∩B) is:",
        "question_hi": "यदि A और B स्वतंत्र घटनाएँ हैं, तो P(A∩B) है:",
        "options_en": ["P(A) + P(B)", "P(A) - P(B)", "P(A) × P(B)", "P(A)/P(B)"],
        "options_hi": ["P(A) + P(B)", "P(A) - P(B)", "P(A) × P(B)", "P(A)/P(B)"],
        "answer_en": "P(A) × P(B)",
        "answer_hi": "P(A) × P(B)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "The variance of a constant is:",
        "question_hi": "एक स्थिरांक का प्रसरण है:",
        "options_en": ["0", "1", "The constant itself", "Undefined"],
        "options_hi": ["0", "1", "स्थिरांक स्वयं", "अपरिभाषित"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "If two dice are thrown, the probability of getting a sum of 7 is:",
        "question_hi": "यदि दो पासे फेंके जाते हैं, तो योग 7 प्राप्त होने की प्रायिकता है:",
        "options_en": ["1/6", "1/12", "1/36", "5/36"],
        "options_hi": ["1/6", "1/12", "1/36", "5/36"],
        "answer_en": "1/6",
        "answer_hi": "1/6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "The mean of first n natural numbers is:",
        "question_hi": "प्रथम n प्राकृतिक संख्याओं का माध्य है:",
        "options_en": ["n/2", "(n+1)/2", "n(n+1)/2", "n²/2"],
        "options_hi": ["n/2", "(n+1)/2", "n(n+1)/2", "n²/2"],
        "answer_en": "(n+1)/2",
        "answer_hi": "(n+1)/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "If P(A) = 0.4, P(B) = 0.3 and P(A∩B) = 0.1, then P(A|B) is:",
        "question_hi": "यदि P(A) = 0.4, P(B) = 0.3 और P(A∩B) = 0.1, तो P(A|B) है:",
        "options_en": ["1/3", "2/3", "1/4", "3/4"],
        "options_hi": ["1/3", "2/3", "1/4", "3/4"],
        "answer_en": "1/3",
        "answer_hi": "1/3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "The standard deviation of data 2,4,6,8,10 is:",
        "question_hi": "आंकड़ों 2,4,6,8,10 का मानक विचलन है:",
        "options_en": ["2", "√8", "√10", "4"],
        "options_hi": ["2", "√8", "√10", "4"],
        "answer_en": "√8",
        "answer_hi": "√8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "If A and B are mutually exclusive events, then P(A∪B) is:",
        "question_hi": "यदि A और B परस्पर अपवर्जी घटनाएँ हैं, तो P(A∪B) है:",
        "options_en": ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "0"],
        "options_hi": ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "0"],
        "answer_en": "P(A) + P(B)",
        "answer_hi": "P(A) + P(B)",
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
        "question_en": "The median of data 3,1,7,5,9 is:",
        "question_hi": "आंकड़ों 3,1,7,5,9 की माध्यिका है:",
        "options_en": ["3", "5", "7", "4"],
        "options_hi": ["3", "5", "7", "4"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "If variance is 4, then standard deviation is:",
        "question_hi": "यदि प्रसरण 4 है, तो मानक विचलन है:",
        "options_en": ["2", "4", "8", "16"],
        "options_hi": ["2", "4", "8", "16"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },

    // Biology - Biotechnology & Human Welfare (31-40)
    {
        "num": 31,
        "question_en": "The enzyme used in PCR is:",
        "question_hi": "PCR में प्रयुक्त एंजाइम है:",
        "options_en": ["DNA polymerase", "RNA polymerase", "Restriction enzyme", "Ligase"],
        "options_hi": ["DNA पॉलीमरेज", "RNA पॉलीमरेज", "प्रतिबंधन एंजाइम", "लाइगेज"],
        "answer_en": "DNA polymerase",
        "answer_hi": "DNA पॉलीमरेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "The vector used in human genome project is:",
        "question_hi": "मानव जीनोम परियोजना में प्रयुक्त वेक्टर है:",
        "options_en": ["Plasmid", "BAC", "Cosmid", "YAC"],
        "options_hi": ["प्लाज्मिड", "BAC", "कोस्मिड", "YAC"],
        "answer_en": "BAC",
        "answer_hi": "BAC",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Bt cotton is resistant to:",
        "question_hi": "Bt कपास प्रतिरोधी है:",
        "options_en": ["Insects", "Bacteria", "Viruses", "Fungi"],
        "options_hi": ["कीटों", "जीवाणु", "वायरस", "कवक"],
        "answer_en": "Insects",
        "answer_hi": "कीटों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The process of making multiple copies of DNA is called:",
        "question_hi": "DNA की एकाधिक प्रतियाँ बनाने की प्रक्रिया कहलाती है:",
        "options_en": ["PCR", "Electrophoresis", "Centrifugation", "Chromatography"],
        "options_hi": ["PCR", "इलेक्ट्रोफोरेसिस", "अपकेंद्रण", "क्रोमैटोग्राफी"],
        "answer_en": "PCR",
        "answer_hi": "PCR",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "The first transgenic crop was:",
        "question_hi": "पहली ट्रांसजेनिक फसल थी:",
        "options_en": ["Tobacco", "Tomato", "Potato", "Rice"],
        "options_hi": ["तंबाकू", "टमाटर", "आलू", "चावल"],
        "answer_en": "Tobacco",
        "answer_hi": "तंबाकू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "The enzyme that cuts DNA at specific sites is:",
        "question_hi": "वह एंजाइम जो विशिष्ट स्थलों पर DNA को काटता है:",
        "options_en": ["Restriction enzyme", "Ligase", "Polymerase", "Helicase"],
        "options_hi": ["प्रतिबंधन एंजाइम", "लाइगेज", "पॉलीमरेज", "हेलीकेज"],
        "answer_en": "Restriction enzyme",
        "answer_hi": "प्रतिबंधन एंजाइम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "The process of introducing foreign DNA into host cell is called:",
        "question_hi": "पोषक कोशिका में विदेशी DNA प्रवेश कराने की प्रक्रिया कहलाती है:",
        "options_en": ["Transformation", "Transduction", "Conjugation", "Transfection"],
        "options_hi": ["रूपांतरण", "ट्रांसडक्शन", "संयुग्मन", "ट्रांसफेक्शन"],
        "answer_en": "Transformation",
        "answer_hi": "रूपांतरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "The organism used in production of insulin is:",
        "question_hi": "इंसुलिन के उत्पादन में प्रयुक्त जीव है:",
        "options_en": ["E. coli", "Yeast", "Bacillus", "Streptococcus"],
        "options_hi": ["E. coli", "यीस्ट", "बैसिलस", "स्ट्रेप्टोकोकस"],
        "answer_en": "E. coli",
        "answer_hi": "E. coli",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "The technique used for separation of DNA fragments is:",
        "question_hi": "DNA खंडों के पृथक्करण के लिए प्रयुक्त तकनीक है:",
        "options_en": ["Gel electrophoresis", "Chromatography", "Centrifugation", "Spectroscopy"],
        "options_hi": ["जेल इलेक्ट्रोफोरेसिस", "क्रोमैटोग्राफी", "अपकेंद्रण", "स्पेक्ट्रोस्कोपी"],
        "answer_en": "Gel electrophoresis",
        "answer_hi": "जेल इलेक्ट्रोफोरेसिस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "The process of RNA synthesis from DNA is called:",
        "question_hi": "DNA से RNA संश्लेषण की प्रक्रिया कहलाती है:",
        "options_en": ["Transcription", "Translation", "Replication", "Transformation"],
        "options_hi": ["प्रतिलेखन", "अनुवाद", "प्रतिकृति", "रूपांतरण"],
        "answer_en": "Transcription",
        "answer_hi": "प्रतिलेखन",
        "attempted": false,
        "selected": ""
    },

    // English - Reading Comprehension & Writing (41-50)
    {
        "num": 41,
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
        "num": 42,
        "question_en": "Identify the type of clause: 'What he said was true.'",
        "question_hi": "उपवाक्य का प्रकार पहचानें: 'What he said was true.'",
        "options_en": ["Noun clause", "Adjective clause", "Adverb clause", "Main clause"],
        "options_hi": ["संज्ञा उपवाक्य", "विशेषण उपवाक्य", "क्रिया विशेषण उपवाक्य", "मुख्य उपवाक्य"],
        "answer_en": "Noun clause",
        "answer_hi": "संज्ञा उपवाक्य",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["The team are playing well", "The team is playing well", "The team were playing well", "The team have playing well"],
        "options_hi": ["The team are playing well", "The team is playing well", "The team were playing well", "The team have playing well"],
        "answer_en": "The team is playing well",
        "answer_hi": "The team is playing well",
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
        "question_en": "Identify the figure of speech: 'The stars winked at me.'",
        "question_hi": "अलंकार पहचानें: 'The stars winked at me.'",
        "options_en": ["Simile", "Metaphor", "Personification", "Hyperbole"],
        "options_hi": ["उपमा", "रूपक", "मानवीकरण", "अतिशयोक्ति"],
        "answer_en": "Personification",
        "answer_hi": "मानवीकरण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "Choose the correct word: 'The data ___ analyzed carefully.'",
        "question_hi": "सही शब्द चुनें: 'The data ___ analyzed carefully.'",
        "options_en": ["was", "were", "are", "have"],
        "options_hi": ["was", "were", "are", "have"],
        "answer_en": "was",
        "answer_hi": "was",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
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
        "num": 48,
        "question_en": "Identify the tense: 'I have been waiting for two hours.'",
        "question_hi": "काल पहचानें: 'I have been waiting for two hours.'",
        "options_en": ["Present perfect", "Present continuous", "Present perfect continuous", "Simple present"],
        "options_hi": ["वर्तमान पूर्ण", "वर्तमान अपूर्ण", "वर्तमान पूर्ण अपूर्ण", "सामान्य वर्तमान"],
        "answer_en": "Present perfect continuous",
        "answer_hi": "वर्तमान पूर्ण अपूर्ण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Choose the correctly spelled word:",
        "question_hi": "सही वर्तनी वाला शब्द चुनें:",
        "options_en": ["Conscious", "Concious", "Conscous", "Consious"],
        "options_hi": ["Conscious", "Concious", "Conscous", "Consious"],
        "answer_en": "Conscious",
        "answer_hi": "Conscious",
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

    // Hindi - साहित्य और काव्य (51-60)
    {
        "num": 51,
        "question_en": "'गोदान' के रचयिता हैं:",
        "question_hi": "'गोदान' के रचयिता हैं:",
        "options_en": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "प्रेमचंद",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "'कामायनी' के रचयिता हैं:",
        "question_hi": "'कामायनी' के रचयिता हैं:",
        "options_en": ["जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी", "सुमित्रानंदन पंत"],
        "options_hi": ["जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी", "सुमित्रानंदन पंत"],
        "answer_en": "जयशंकर प्रसाद",
        "answer_hi": "जयशंकर प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "'रश्मिरथी' के रचयिता हैं:",
        "question_hi": "'रश्मिरथी' के रचयिता हैं:",
        "options_en": ["रामधारी सिंह दिनकर", "मैथिलीशरण गुप्त", "सूर्यकांत त्रिपाठी", "हरिवंश राय बच्चन"],
        "options_hi": ["रामधारी सिंह दिनकर", "मैथिलीशरण गुप्त", "सूर्यकांत त्रिपाठी", "हरिवंश राय बच्चन"],
        "answer_en": "रामधारी सिंह दिनकर",
        "answer_hi": "रामधारी सिंह दिनकर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "कौन सी रचना तुलसीदास की है?",
        "question_hi": "कौन सी रचना तुलसीदास की है?",
        "options_en": ["रामचरितमानस", "सूरसागर", "पद्मावत", "बिहारी सतसई"],
        "options_hi": ["रामचरितमानस", "सूरसागर", "पद्मावत", "बिहारी सतसई"],
        "answer_en": "रामचरितमानस",
        "answer_hi": "रामचरितमानस",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "'गीतांजलि' के रचयिता हैं:",
        "question_hi": "'गीतांजलि' के रचयिता हैं:",
        "options_en": ["रवींद्रनाथ टैगोर", "महादेवी वर्मा", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["रवींद्रनाथ टैगोर", "महादेवी वर्मा", "हरिवंश राय बच्चन", "सूर्यकांत त्रिपाठी"],
        "answer_en": "रवींद्रनाथ टैगोर",
        "answer_hi": "रवींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "'साकेत' के रचयिता हैं:",
        "question_hi": "'साकेत' के रचयिता हैं:",
        "options_en": ["मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "options_hi": ["मैथिलीशरण गुप्त", "जयशंकर प्रसाद", "सुमित्रानंदन पंत", "महादेवी वर्मा"],
        "answer_en": "मैथिलीशरण गुप्त",
        "answer_hi": "मैथिलीशरण गुप्त",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "'निर्मला' के रचयिता हैं:",
        "question_hi": "'निर्मला' के रचयिता हैं:",
        "options_en": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["प्रेमचंद", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "प्रेमचंद",
        "answer_hi": "प्रेमचंद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "'अश्क' किसकी रचना है?",
        "question_hi": "'अश्क' किसकी रचना है?",
        "options_en": ["उपेंद्रनाथ अश्क", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["उपेंद्रनाथ अश्क", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "उपेंद्रनाथ अश्क",
        "answer_hi": "उपेंद्रनाथ अश्क",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "'चंद्रगहना से लौटती बेर' कविता के रचयिता हैं:",
        "question_hi": "'चंद्रगहना से लौटती बेर' कविता के रचयिता हैं:",
        "options_en": ["केदारनाथ अग्रवाल", "सुमित्रानंदन पंत", "हरिवंश राय बच्चन", "महादेवी वर्मा"],
        "options_hi": ["केदारनाथ अग्रवाल", "सुमित्रानंदन पंत", "हरिवंश राय बच्चन", "महादेवी वर्मा"],
        "answer_en": "केदारनाथ अग्रवाल",
        "answer_hi": "केदारनाथ अग्रवाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "'मधुशाला' के रचयिता हैं:",
        "question_hi": "'मधुशाला' के रचयिता हैं:",
        "options_en": ["हरिवंश राय बच्चन", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "options_hi": ["हरिवंश राय बच्चन", "जयशंकर प्रसाद", "महादेवी वर्मा", "सूर्यकांत त्रिपाठी"],
        "answer_en": "हरिवंश राय बच्चन",
        "answer_hi": "हरिवंश राय बच्चन",
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
        "question_en": "The capital of Uttarakhand is:",
        "question_hi": "उत्तराखंड की राजधानी है:",
        "options_en": ["Dehradun", "Nainital", "Haridwar", "Rishikesh"],
        "options_hi": ["देहरादून", "नैनीताल", "हरिद्वार", "ऋषिकेश"],
        "answer_en": "Dehradun",
        "answer_hi": "देहरादून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "The currency of Japan is:",
        "question_hi": "जापान की मुद्रा है:",
        "options_en": ["Yen", "Won", "Yuan", "Ringgit"],
        "options_hi": ["येन", "वॉन", "युआन", "रिंगित"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
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
        "num": 66,
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
        "num": 67,
        "question_en": "The first Prime Minister of India was:",
        "question_hi": "भारत के प्रथम प्रधानमंत्री थे:",
        "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Indira Gandhi", "Rajendra Prasad"],
        "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "इंदिरा गांधी", "राजेंद्र प्रसाद"],
        "answer_en": "Jawaharlal Nehru",
        "answer_hi": "जवाहरलाल नेहरू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The largest ocean in the world is:",
        "question_hi": "विश्व का सबसे बड़ा महासागर है:",
        "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
        "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
        "answer_en": "Pacific Ocean",
        "answer_hi": "प्रशांत महासागर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
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
        "num": 70,
        "question_en": "The device used to measure atmospheric pressure is:",
        "question_hi": "वायुमंडलीय दबाव मापने के लिए प्रयुक्त उपकरण है:",
        "options_en": ["Thermometer", "Barometer", "Hygrometer", "Ammeter"],
        "options_hi": ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एमीटर"],
        "answer_en": "Barometer",
        "answer_hi": "बैरोमीटर",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (71-100)
    {
        "num": 71,
        "question_en": "The value of ∫(0 to 1) x dx is:",
        "question_hi": "∫(0 से 1) x dx का मान है:",
        "options_en": ["0", "1/2", "1", "2"],
        "options_hi": ["0", "1/2", "1", "2"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The chemical formula of ozone is:",
        "question_hi": "ओजोन का रासायनिक सूत्र है:",
        "options_en": ["O₂", "O₃", "O₄", "HO"],
        "options_hi": ["O₂", "O₃", "O₄", "HO"],
        "answer_en": "O₃",
        "answer_hi": "O₃",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "The value of sin30° is:",
        "question_hi": "sin30° का मान है:",
        "options_en": ["0", "1/2", "√3/2", "1"],
        "options_hi": ["0", "1/2", "√3/2", "1"],
        "answer_en": "1/2",
        "answer_hi": "1/2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
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
        "num": 75,
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
        "num": 76,
        "question_en": "The formula for area of circle is:",
        "question_hi": "वृत्त के क्षेत्रफल का सूत्र है:",
        "options_en": ["πr²", "2πr", "πd", "2πr²"],
        "options_hi": ["πr²", "2πr", "πd", "2πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
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
        "num": 78,
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
        "num": 79,
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
        "num": 80,
        "question_en": "The vitamin that prevents scurvy is:",
        "question_hi": "वह विटामिन जो स्कर्वी को रोकता है:",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin C",
        "answer_hi": "विटामिन C",
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
        "question_en": "The value of cos0° is:",
        "question_hi": "cos0° का मान है:",
        "options_en": ["0", "1/2", "√3/2", "1"],
        "options_hi": ["0", "1/2", "√3/2", "1"],
        "answer_en": "1",
        "answer_hi": "1",
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
        "question_en": "The value of tan0° is:",
        "question_hi": "tan0° का मान है:",
        "options_en": ["0", "1", "√3", "1/√3"],
        "options_hi": ["0", "1", "√3", "1/√3"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The vitamin that helps in night vision is:",
        "question_hi": "वह विटामिन जो रात्रि दृष्टि में मदद करता है:",
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