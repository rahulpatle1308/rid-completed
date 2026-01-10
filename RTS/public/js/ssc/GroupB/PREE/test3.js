const questions = [
    {
    "num": 1,
    "question_en": "What is the chemical symbol for Gold?",
    "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ag", "Au", "Pb", "Fe"],
    "options_hi": ["Ag", "Au", "Pb", "Fe"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which organelle is known as the 'powerhouse of the cell'?",
    "question_hi": "किस कोशिकांग को 'कोशिका का पावरहाउस' कहा जाता है?",
    "options_en": ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
    "options_hi": ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
    "answer_en": "Mitochondria",
    "answer_hi": "माइटोकॉन्ड्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the pH value of pure water?",
    "question_hi": "शुद्ध जल का pH मान क्या होता है?",
    "options_en": ["5", "7", "8", "14"],
    "options_hi": ["5", "7", "8", "14"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The process of conversion of glucose into pyruvate is called:",
    "question_hi": "ग्लूकोज के पाइरुवेट में रूपांतरण की प्रक्रिया कहलाती है:",
    "options_en": ["Glycolysis", "Krebs cycle", "Photosynthesis", "Respiration"],
    "options_hi": ["ग्लाइकोलाइसिस", "क्रेब्स चक्र", "प्रकाश संश्लेषण", "श्वसन"],
    "answer_en": "Glycolysis",
    "answer_hi": "ग्लाइकोलाइसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which gas is released during photosynthesis?",
    "question_hi": "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
    "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the atomic number of Carbon?",
    "question_hi": "कार्बन की परमाणु संख्या क्या है?",
    "options_en": ["4", "6", "12", "14"],
    "options_hi": ["4", "6", "12", "14"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which part of the human brain controls balance and coordination?",
    "question_hi": "मानव मस्तिष्क का कौन सा भाग संतुलन और समन्वय को नियंत्रित करता है?",
    "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
    "options_hi": ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
    "answer_en": "Cerebellum",
    "answer_hi": "सेरेबेलम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the common name of NaOH?",
    "question_hi": "NaOH का सामान्य नाम क्या है?",
    "options_en": ["Baking soda", "Washing soda", "Caustic soda", "Bleaching powder"],
    "options_hi": ["बेकिंग सोडा", "धावन सोडा", "कास्टिक सोडा", "ब्लीचिंग पाउडर"],
    "answer_en": "Caustic soda",
    "answer_hi": "कास्टिक सोडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Red blood cells are produced in:",
    "question_hi": "लाल रक्त कोशिकाओं का उत्पादन कहाँ होता है?",
    "options_en": ["Liver", "Spleen", "Bone marrow", "Kidneys"],
    "options_hi": ["यकृत", "तिल्ली", "बोन मैरो (अस्थि मज्जा)", "गुर्दे"],
    "answer_en": "Bone marrow",
    "answer_hi": "बोन मैरो (अस्थि मज्जा)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which element is liquid at room temperature?",
    "question_hi": "कौन सा तत्व कमरे के तापमान पर तरल होता है?",
    "options_en": ["Mercury", "Bromine", "Both A and B", "None of these"],
    "options_hi": ["पारा", "ब्रोमीन", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "The process of breakdown of food in the cell with the release of energy is called:",
    "question_hi": "कोशिका में ऊर्जा मुक्त करते हुए भोजन के टूटने की प्रक्रिया कहलाती है:",
    "options_en": ["Digestion", "Respiration", "Excretion", "Circulation"],
    "options_hi": ["पाचन", "श्वसन", "उत्सर्जन", "परिसंचरण"],
    "answer_en": "Respiration",
    "answer_hi": "श्वसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the chemical formula of Methane?",
    "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
    "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    "answer_en": "CH₄",
    "answer_hi": "CH₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which vitamin is produced in the human body when exposed to sunlight?",
    "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the SI unit of amount of substance?",
    "question_hi": "पदार्थ की मात्रा की SI इकाई क्या है?",
    "options_en": ["Mole", "Gram", "Kilogram", "Liter"],
    "options_hi": ["मोल", "ग्राम", "किलोग्राम", "लीटर"],
    "answer_en": "Mole",
    "answer_hi": "मोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "The largest gland in the human body is:",
    "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
    "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
    "options_hi": ["अग्न्याशय", "यकृत", "थायरॉयड", "पिट्यूटरी"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which gas is known as 'Laughing Gas'?",
    "question_hi": "किस गैस को 'हंसाने वाली गैस' कहा जाता है?",
    "options_en": ["Nitrous oxide", "Carbon monoxide", "Sulfur dioxide", "Ammonia"],
    "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "सल्फर डाइऑक्साइड", "अमोनिया"],
    "answer_en": "Nitrous oxide",
    "answer_hi": "नाइट्रस ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Blood is a type of:",
    "question_hi": "रक्त एक प्रकार का है:",
    "options_en": ["Epithelial tissue", "Connective tissue", "Muscular tissue", "Nervous tissue"],
    "options_hi": ["उपकला ऊतक", "संयोजी ऊतक", "पेशी ऊतक", "तंत्रिका ऊतक"],
    "answer_en": "Connective tissue",
    "answer_hi": "संयोजी ऊतक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which metal is present in chlorophyll?",
    "question_hi": "क्लोरोफिल में कौन सी धातु उपस्थित होती है?",
    "options_en": ["Iron", "Magnesium", "Copper", "Zinc"],
    "options_hi": ["लोहा", "मैग्नीशियम", "तांबा", "जिंक"],
    "answer_en": "Magnesium",
    "answer_hi": "मैग्नीशियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The smallest bone in the human body is found in the:",
    "question_hi": "मानव शरीर की सबसे छोटी हड्डी कहाँ पाई जाती है?",
    "options_en": ["Finger", "Ear", "Toe", "Nose"],
    "options_hi": ["उंगली", "कान", "पैर की अंगुली", "नाक"],
    "answer_en": "Ear",
    "answer_hi": "कान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the chemical formula of Common Salt?",
    "question_hi": "सामान्य नमक का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "CaCO₃", "Na₂CO₃"],
    "options_hi": ["NaCl", "KCl", "CaCO₃", "Na₂CO₃"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which part of the flower develops into fruit?",
    "question_hi": "फूल का कौन सा भाग फल में विकसित होता है?",
    "options_en": ["Ovary", "Stamen", "Petal", "Sepal"],
    "options_hi": ["अंडाशय", "पुंकेसर", "पंखुड़ी", "बाह्यदल"],
    "answer_en": "Ovary",
    "answer_hi": "अंडाशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"],
    "options_hi": ["एसिटिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The process of cell division in somatic cells is called:",
    "question_hi": "दैहिक कोशिकाओं में कोशिका विभाजन की प्रक्रिया कहलाती है:",
    "options_en": ["Mitosis", "Meiosis", "Binary fission", "Budding"],
    "options_hi": ["माइटोसिस", "मियोसिस", "द्विखंडन", "कलिका विधि"],
    "answer_en": "Mitosis",
    "answer_hi": "माइटोसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "आग बुझाने के यंत्रों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The study of fossils is called:",
    "question_hi": "जीवाश्मों का अध्ययन कहलाता है:",
    "options_en": ["Paleontology", "Archeology", "Geology", "Ecology"],
    "options_hi": ["जीवाश्म विज्ञान", "पुरातत्व विज्ञान", "भूविज्ञान", "पारिस्थितिकी"],
    "answer_en": "Paleontology",
    "answer_hi": "जीवाश्म विज्ञान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the chemical symbol for Potassium?",
    "question_hi": "पोटेशियम का रासायनिक प्रतीक क्या है?",
    "options_en": ["P", "Po", "K", "Ka"],
    "options_hi": ["P", "Po", "K", "Ka"],
    "answer_en": "K",
    "answer_hi": "K",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which blood group is known as the universal donor?",
    "question_hi": "किस रक्त समूह को सार्वत्रिक दाता के रूप में जाना जाता है?",
    "options_en": ["A", "B", "AB", "O"],
    "options_hi": ["A", "B", "AB", "O"],
    "answer_en": "O",
    "answer_hi": "O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which of the following is a noble gas?",
    "question_hi": "निम्नलिखित में से कौन सी एक उत्कृष्ट गैस है?",
    "options_en": ["Oxygen", "Nitrogen", "Argon", "Chlorine"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "आर्गन", "क्लोरीन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The hormone insulin is produced by:",
    "question_hi": "हार्मोन इंसुलिन का उत्पादन किसके द्वारा होता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Thyroid"],
    "options_hi": ["यकृत", "अग्न्याशय", "गुर्दा", "थायरॉयड"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which element has the highest electronegativity?",
    "question_hi": "किस तत्व की विद्युत ऋणात्मकता सबसे अधिक होती है?",
    "options_en": ["Fluorine", "Chlorine", "Oxygen", "Nitrogen"],
    "options_hi": ["फ्लोरीन", "क्लोरीन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Fluorine",
    "answer_hi": "फ्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The process of conversion of nitrogen compounds into free nitrogen is called:",
    "question_hi": "नाइट्रोजन यौगिकों के मुक्त नाइट्रोजन में रूपांतरण की प्रक्रिया कहलाती है:",
    "options_en": ["Nitrogen fixation", "Ammonification", "Denitrification", "Nitrification"],
    "options_hi": ["नाइट्रोजन स्थिरीकरण", "अमोनीकरण", "विनाइट्रीकरण", "नाइट्रीकरण"],
    "answer_en": "Denitrification",
    "answer_hi": "विनाइट्रीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the chemical formula of Ozone?",
    "question_hi": "ओजोन का रासायनिक सूत्र क्या है?",
    "options_en": ["O₂", "O₃", "O₄", "HO₂"],
    "options_hi": ["O₂", "O₃", "O₄", "HO₂"],
    "answer_en": "O₃",
    "answer_hi": "O₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which part of the human eye controls the amount of light entering?",
    "question_hi": "मानव आंख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
    "options_en": ["Cornea", "Iris", "Retina", "Lens"],
    "options_hi": ["कॉर्निया", "आइरिस", "रेटिना", "लेंस"],
    "answer_en": "Iris",
    "answer_hi": "आइरिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which metal is used in thermometers?",
    "question_hi": "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Mercury", "Silver", "Aluminum", "Copper"],
    "options_hi": ["पारा", "चांदी", "एल्यूमीनियम", "तांबा"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The smallest unit of life is:",
    "question_hi": "जीवन की सबसे छोटी इकाई है:",
    "options_en": ["Cell", "Tissue", "Organ", "Molecule"],
    "options_hi": ["कोशिका", "ऊतक", "अंग", "अणु"],
    "answer_en": "Cell",
    "answer_hi": "कोशिका",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the chemical name of Baking Soda?",
    "question_hi": "बेकिंग सोडा का रासायनिक नाम क्या है?",
    "options_en": ["Sodium bicarbonate", "Sodium carbonate", "Sodium hydroxide", "Sodium chloride"],
    "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड", "सोडियम क्लोराइड"],
    "answer_en": "Sodium bicarbonate",
    "answer_hi": "सोडियम बाइकार्बोनेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which blood vessel carries oxygenated blood from the lungs to the heart?",
    "question_hi": "कौन सी रक्त वाहिका फेफड़ों से हृदय तक ऑक्सीजन युक्त रक्त ले जाती है?",
    "options_en": ["Pulmonary artery", "Pulmonary vein", "Aorta", "Vena cava"],
    "options_hi": ["फुफ्फुसीय धमनी", "फुफ्फुसीय शिरा", "महाधमनी", "महाशिरा"],
    "answer_en": "Pulmonary vein",
    "answer_hi": "फुफ्फुसीय शिरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which gas is responsible for the greenhouse effect?",
    "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "The process of conversion of water vapor into water is called:",
    "question_hi": "जल वाष्प के जल में रूपांतरण की प्रक्रिया कहलाती है:",
    "options_en": ["Evaporation", "Condensation", "Sublimation", "Precipitation"],
    "options_hi": ["वाष्पीकरण", "संघनन", "उर्ध्वपातन", "वर्षण"],
    "answer_en": "Condensation",
    "answer_hi": "संघनन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the chemical symbol for Iron?",
    "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ir", "Fe", "Au", "Ag"],
    "options_hi": ["Ir", "Fe", "Au", "Ag"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which part of the plant absorbs water and minerals from the soil?",
    "question_hi": "पौधे का कौन सा भाग मिट्टी से पानी और खनिजों को अवशोषित करता है?",
    "options_en": ["Stem", "Leaves", "Roots", "Flowers"],
    "options_hi": ["तना", "पत्तियाँ", "जड़ें", "फूल"],
    "answer_en": "Roots",
    "answer_hi": "जड़ें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the chemical formula of Sulfuric Acid?",
    "question_hi": "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
    "options_en": ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"],
    "options_hi": ["H₂SO₄", "HCl", "HNO₃", "CH₃COOH"],
    "answer_en": "H₂SO₄",
    "answer_hi": "H₂SO₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "The largest artery in the human body is:",
    "question_hi": "मानव शरीर की सबसे बड़ी धमनी है:",
    "options_en": ["Pulmonary artery", "Aorta", "Coronary artery", "Carotid artery"],
    "options_hi": ["फुफ्फुसीय धमनी", "महाधमनी", "कोरोनरी धमनी", "कैरोटिड धमनी"],
    "answer_en": "Aorta",
    "answer_hi": "महाधमनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which of the following is an alkali metal?",
    "question_hi": "निम्नलिखित में से कौन सी एक क्षारीय धातु है?",
    "options_en": ["Calcium", "Sodium", "Aluminum", "Copper"],
    "options_hi": ["कैल्शियम", "सोडियम", "एल्यूमीनियम", "तांबा"],
    "answer_en": "Sodium",
    "answer_hi": "सोडियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The process of producing energy in the mitochondria is called:",
    "question_hi": "माइटोकॉन्ड्रिया में ऊर्जा उत्पादन की प्रक्रिया कहलाती है:",
    "options_en": ["Photosynthesis", "Respiration", "Digestion", "Fermentation"],
    "options_hi": ["प्रकाश संश्लेषण", "श्वसन", "पाचन", "किण्वन"],
    "answer_en": "Respiration",
    "answer_hi": "श्वसन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the chemical symbol for Silver?",
    "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
    "options_en": ["Si", "Ag", "Au", "S"],
    "options_hi": ["Si", "Ag", "Au", "S"],
    "answer_en": "Ag",
    "answer_hi": "Ag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which vitamin deficiency causes Scurvy?",
    "question_hi": "किस विटामिन की कमी से स्कर्वी रोग होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which acid is present in our stomach?",
    "question_hi": "हमारे पेट में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
    "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    "answer_en": "Hydrochloric acid",
    "answer_hi": "हाइड्रोक्लोरिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "The process of cell division that produces gametes is called:",
    "question_hi": "कोशिका विभाजन की वह प्रक्रिया जो युग्मक उत्पन्न करती है, कहलाती है:",
    "options_en": ["Mitosis", "Meiosis", "Binary fission", "Fragmentation"],
    "options_hi": ["माइटोसिस", "मियोसिस", "द्विखंडन", "खंडन"],
    "answer_en": "Meiosis",
    "answer_hi": "मियोसिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the chemical formula of Glucose?",
    "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
    "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₄"],
    "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₄"],
    "answer_en": "C₆H₁₂O₆",
    "answer_hi": "C₆H₁₂O₆",
    "attempted": false,
    "selected": ""
  }
];
// --------------------------- GLOBAL VARS -----------------------------
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