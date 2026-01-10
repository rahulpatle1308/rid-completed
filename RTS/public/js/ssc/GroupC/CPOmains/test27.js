const questions = [
  
  {
    "num":1,
    "question_en": "Which element has the highest electronegativity?",
    "question_hi": "किस तत्व की विद्युत ऋणात्मकता सबसे अधिक है?",
    "options_en": ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
    "options_hi": ["फ्लोरीन", "ऑक्सीजन", "क्लोरीन", "नाइट्रोजन"],
    "answer_en": "Fluorine",
    "answer_hi": "फ्लोरीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "What is the chemical formula of laughing gas?",
    "question_hi": "हसाने वाली गैस का रासायनिक सूत्र क्या है?",
    "options_en": ["NO", "N₂O", "NO₂", "N₂O₄"],
    "options_hi": ["NO", "N₂O", "NO₂", "N₂O₄"],
    "answer_en": "N₂O",
    "answer_hi": "N₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which metal is present in chlorophyll?",
    "question_hi": "क्लोरोफिल में कौन सी धातु उपस्थित होती है?",
    "options_en": ["Magnesium", "Iron", "Calcium", "Zinc"],
    "options_hi": ["मैग्नीशियम", "आयरन", "कैल्शियम", "जिंक"],
    "answer_en": "Magnesium",
    "answer_hi": "मैग्नीशियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "What is the pH value of pure water?",
    "question_hi": "शुद्ध जल का pH मान क्या है?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which gas is used in the preparation of soda water?",
    "question_hi": "सोडा वाटर की तैयारी में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
    "answer_en": "Carbon dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "What is the common name of calcium carbonate?",
    "question_hi": "कैल्शियम कार्बोनेट का सामान्य नाम क्या है?",
    "options_en": ["Limestone", "Gypsum", "Marble", "Both A and C"],
    "options_hi": ["चूना पत्थर", "जिप्सम", "संगमरमर", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which element is liquid at room temperature?",
    "question_hi": "कौन सा तत्व कमरे के तापमान पर तरल अवस्था में होता है?",
    "options_en": ["Mercury", "Bromine", "Gallium", "All of these"],
    "options_hi": ["पारा", "ब्रोमीन", "गैलियम", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "What is the chemical name of baking powder?",
    "question_hi": "बेकिंग पाउडर का रासायनिक नाम क्या है?",
    "options_en": ["Sodium bicarbonate", "Sodium carbonate", "Calcium carbonate", "Potassium bicarbonate"],
    "options_hi": ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "पोटेशियम बाइकार्बोनेट"],
    "answer_en": "Sodium bicarbonate",
    "answer_hi": "सोडियम बाइकार्बोनेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरका में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"],
    "options_hi": ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "What is the atomic number of carbon?",
    "question_hi": "कार्बन की परमाणु संख्या क्या है?",
    "options_en": ["6", "12", "14", "16"],
    "options_hi": ["6", "12", "14", "16"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which gas is known as 'marsh gas'?",
    "question_hi": "किस गैस को 'मार्श गैस' के नाम से जाना जाता है?",
    "options_en": ["Methane", "Ethane", "Propane", "Butane"],
    "options_hi": ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
    "answer_en": "Methane",
    "answer_hi": "मीथेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "What is the chemical formula of washing soda?",
    "question_hi": "धोने का सोडा का रासायनिक सूत्र क्या है?",
    "options_en": ["Na₂CO₃·10H₂O", "NaHCO₃", "CaCO₃", "NaOH"],
    "options_hi": ["Na₂CO₃·10H₂O", "NaHCO₃", "CaCO₃", "NaOH"],
    "answer_en": "Na₂CO₃·10H₂O",
    "answer_hi": "Na₂CO₃·10H₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which element is known as the 'king of chemicals'?",
    "question_hi": "किस तत्व को 'रसायनों का राजा' कहा जाता है?",
    "options_en": ["Sulfur", "Oxygen", "Hydrogen", "Carbon"],
    "options_hi": ["सल्फर", "ऑक्सीजन", "हाइड्रोजन", "कार्बन"],
    "answer_en": "Sulfur",
    "answer_hi": "सल्फर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "What is the common name of sodium hydroxide?",
    "question_hi": "सोडियम हाइड्रॉक्साइड का सामान्य नाम क्या है?",
    "options_en": ["Caustic soda", "Baking soda", "Washing soda", "Bleaching powder"],
    "options_hi": ["कास्टिक सोडा", "बेकिंग सोडा", "धोने का सोडा", "ब्लीचिंग पाउडर"],
    "answer_en": "Caustic soda",
    "answer_hi": "कास्टिक सोडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which acid is known as 'oil of vitriol'?",
    "question_hi": "किस अम्ल को 'ऑयल ऑफ विट्रियल' के नाम से जाना जाता है?",
    "options_en": ["Sulfuric acid", "Nitric acid", "Hydrochloric acid", "Acetic acid"],
    "options_hi": ["सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
    "answer_en": "Sulfuric acid",
    "answer_hi": "सल्फ्यूरिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "What is the chemical symbol for gold?",
    "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
    "options_en": ["Au", "Ag", "Go", "Gd"],
    "options_hi": ["Au", "Ag", "Go", "Gd"],
    "answer_en": "Au",
    "answer_hi": "Au",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which gas is used in the manufacture of ammonia?",
    "question_hi": "अमोनिया के निर्माण में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Nitrogen", "Hydrogen", "Both A and B", "Oxygen"],
    "options_hi": ["नाइट्रोजन", "हाइड्रोजन", "A और B दोनों", "ऑक्सीजन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "What is the chemical formula of common salt?",
    "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
    "options_hi": ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which metal is the best conductor of electricity?",
    "question_hi": "कौन सी धातु विद्युत की सबसे अच्छी सुचालक है?",
    "options_en": ["Copper", "Silver", "Gold", "Aluminum"],
    "options_hi": ["तांबा", "चांदी", "सोना", "एल्युमिनियम"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "What is the chemical name of bleaching powder?",
    "question_hi": "ब्लीचिंग पाउडर का रासायनिक नाम क्या है?",
    "options_en": ["Calcium hypochlorite", "Calcium carbonate", "Calcium hydroxide", "Calcium oxide"],
    "options_hi": ["कैल्शियम हाइपोक्लोराइट", "कैल्शियम कार्बोनेट", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम ऑक्साइड"],
    "answer_en": "Calcium hypochlorite",
    "answer_hi": "कैल्शियम हाइपोक्लोराइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which element has the highest melting point?",
    "question_hi": "किस तत्व का गलनांक सबसे अधिक है?",
    "options_en": ["Tungsten", "Carbon", "Osmium", "Tantalum"],
    "options_hi": ["टंगस्टन", "कार्बन", "ऑस्मियम", "टैंटलम"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "What is the chemical formula of methane?",
    "question_hi": "मीथेन का रासायनिक सूत्र क्या है?",
    "options_en": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    "options_hi": ["CH₄", "C₂H₆", "C₃H₈", "C₄H₁₀"],
    "answer_en": "CH₄",
    "answer_hi": "CH₄",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which acid is present in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Citric acid", "Acetic acid", "Lactic acid", "Tartaric acid"],
    "options_hi": ["साइट्रिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "टार्टरिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "साइट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "What is the atomic mass of oxygen?",
    "question_hi": "ऑक्सीजन का परमाणु द्रव्यमान क्या है?",
    "options_en": ["12", "14", "16", "18"],
    "options_hi": ["12", "14", "16", "18"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which gas is used in fluorescent tubes?",
    "question_hi": "फ्लोरोसेंट ट्यूबों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Argon", "Neon", "Xenon", "Krypton"],
    "options_hi": ["आर्गन", "नियॉन", "जेनॉन", "क्रिप्टॉन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "What is the chemical formula of glucose?",
    "question_hi": "ग्लूकोज का रासायनिक सूत्र क्या है?",
    "options_en": ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
    "options_hi": ["C₆H₁₂O₆", "C₁₂H₂₂O₁१", "C₂H₅OH", "CH₃COOH"],
    "answer_en": "C₆H₁₂O₆",
    "answer_hi": "C₆H₁₂O₆",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which metal is used in thermometers?",
    "question_hi": "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Mercury", "Alcohol", "Gallium", "Sodium"],
    "options_hi": ["पारा", "एल्कोहल", "गैलियम", "सोडियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "What is the common name of calcium sulfate?",
    "question_hi": "कैल्शियम सल्फेट का सामान्य नाम क्या है?",
    "options_en": ["Gypsum", "Limestone", "Marble", "Chalk"],
    "options_hi": ["जिप्सम", "चूना पत्थर", "संगमरमर", "चॉक"],
    "answer_en": "Gypsum",
    "answer_hi": "जिप्सम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which acid is known as 'aqua fortis'?",
    "question_hi": "किस अम्ल को 'एक्वा फोर्टिस' के नाम से जाना जाता है?",
    "options_en": ["Nitric acid", "Sulfuric acid", "Hydrochloric acid", "Acetic acid"],
    "options_hi": ["नाइट्रिक अम्ल", "सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "एसिटिक अम्ल"],
    "answer_en": "Nitric acid",
    "answer_hi": "नाइट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "What is the chemical symbol for iron?",
    "question_hi": "लोहा का रासायनिक प्रतीक क्या है?",
    "options_en": ["Fe", "Ir", "In", "Au"],
    "options_hi": ["Fe", "Ir", "In", "Au"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which gas is known as 'dry ice'?",
    "question_hi": "किस गैस को 'ड्राई आइस' के नाम से जाना जाता है?",
    "options_en": ["Solid carbon dioxide", "Solid oxygen", "Solid nitrogen", "Solid hydrogen"],
    "options_hi": ["ठोस कार्बन डाइऑक्साइड", "ठोस ऑक्सीजन", "ठोस नाइट्रोजन", "ठोस हाइड्रोजन"],
    "answer_en": "Solid carbon dioxide",
    "answer_hi": "ठोस कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H₂O", "H₂O₂", "HO", "H₃O"],
    "options_hi": ["H₂O", "H₂O₂", "HO", "H₃O"],
    "answer_en": "H₂O",
    "answer_hi": "H₂O",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which metal is used in making electric wires?",
    "question_hi": "विद्युत तार बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Copper", "Aluminum", "Both A and B", "Iron"],
    "options_hi": ["तांबा", "एल्युमिनियम", "A और B दोनों", "लोहा"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "What is the chemical name of quicklime?",
    "question_hi": "बुझा चूना का रासायनिक नाम क्या है?",
    "options_en": ["Calcium oxide", "Calcium hydroxide", "Calcium carbonate", "Calcium sulfate"],
    "options_hi": ["कैल्शियम ऑक्साइड", "कैल्शियम हाइड्रॉक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम सल्फेट"],
    "answer_en": "Calcium oxide",
    "answer_hi": "कैल्शियम ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which element has the lowest boiling point?",
    "question_hi": "किस तत्व का क्वथनांक सबसे कम है?",
    "options_en": ["Helium", "Hydrogen", "Neon", "Oxygen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "नियॉन", "ऑक्सीजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "What is the chemical formula of ammonia?",
    "question_hi": "अमोनिया का रासायनिक सूत्र क्या है?",
    "options_en": ["NH₃", "NH₄", "NO₂", "N₂H₄"],
    "options_hi": ["NH₃", "NH₄", "NO₂", "N₂H₄"],
    "answer_en": "NH₃",
    "answer_hi": "NH₃",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which acid is present in ant sting?",
    "question_hi": "चींटी के डंक में कौन सा अम्ल उपस्थित होता है?",
    "options_en": ["Formic acid", "Acetic acid", "Citric acid", "Lactic acid"],
    "options_hi": ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल"],
    "answer_en": "Formic acid",
    "answer_hi": "फॉर्मिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "What is the atomic number of nitrogen?",
    "question_hi": "नाइट्रोजन की परमाणु संख्या क्या है?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which gas is used in advertising signs?",
    "question_hi": "विज्ञापन साइनों में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Neon", "Argon", "Helium", "Xenon"],
    "options_hi": ["नियॉन", "आर्गन", "हीलियम", "जेनॉन"],
    "answer_en": "Neon",
    "answer_hi": "नियॉन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "What is the chemical formula of ethanol?",
    "question_hi": "इथेनॉल का रासायनिक सूत्र क्या है?",
    "options_en": ["C₂H₅OH", "CH₃OH", "C₃H₇OH", "C₄H₉OH"],
    "options_hi": ["C₂H₅OH", "CH₃OH", "C₃H₇OH", "C₄H₉OH"],
    "answer_en": "C₂H₅OH",
    "answer_hi": "C₂H₅OH",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which metal is used in galvanization?",
    "question_hi": "गैल्वनीकरण में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Zinc", "Tin", "Chromium", "Nickel"],
    "options_hi": ["जिंक", "टिन", "क्रोमियम", "निकल"],
    "answer_en": "Zinc",
    "answer_hi": "जिंक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "What is the common name of sodium carbonate?",
    "question_hi": "सोडियम कार्बोनेट का सामान्य नाम क्या है?",
    "options_en": ["Washing soda", "Baking soda", "Caustic soda", "Baking powder"],
    "options_hi": ["धोने का सोडा", "बेकिंग सोडा", "कास्टिक सोडा", "बेकिंग पाउडर"],
    "answer_en": "Washing soda",
    "answer_hi": "धोने का सोडा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which acid is known as 'muriatic acid'?",
    "question_hi": "किस अम्ल को 'म्यूरिएटिक अम्ल' के नाम से जाना जाता है?",
    "options_en": ["Hydrochloric acid", "Sulfuric acid", "Nitric acid", "Acetic acid"],
    "options_hi": ["हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
    "answer_en": "Hydrochloric acid",
    "answer_hi": "हाइड्रोक्लोरिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "What is the chemical symbol for silver?",
    "question_hi": "चांदी का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ag", "Au", "Si", "Sr"],
    "options_hi": ["Ag", "Au", "Si", "Sr"],
    "answer_en": "Ag",
    "answer_hi": "Ag",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which gas is used in the manufacture of fertilizers?",
    "question_hi": "उर्वरकों के निर्माण में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Nitrogen", "Hydrogen", "Ammonia", "All of these"],
    "options_hi": ["नाइट्रोजन", "हाइड्रोजन", "अमोनिया", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "What is the chemical formula of carbon dioxide?",
    "question_hi": "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
    "options_en": ["CO", "CO₂", "C₂O", "C₂O₃"],
    "options_hi": ["CO", "CO₂", "C₂O", "C₂O₃"],
    "answer_en": "CO₂",
    "answer_hi": "CO₂",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which metal is used in making aircraft bodies?",
    "question_hi": "विमान निकाय बनाने में किस धातु का उपयोग किया जाता है?",
    "options_en": ["Aluminum", "Titanium", "Both A and B", "Steel"],
    "options_hi": ["एल्युमिनियम", "टाइटेनियम", "A और B दोनों", "स्टील"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "What is the chemical name of slaked lime?",
    "question_hi": "बुझे चूने का रासायनिक नाम क्या है?",
    "options_en": ["Calcium hydroxide", "Calcium oxide", "Calcium carbonate", "Calcium sulfate"],
    "options_hi": ["कैल्शियम हाइड्रॉक्साइड", "कैल्शियम ऑक्साइड", "कैल्शियम कार्बोनेट", "कैल्शियम सल्फेट"],
    "answer_en": "Calcium hydroxide",
    "answer_hi": "कैल्शियम हाइड्रॉक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which element has the highest density?",
    "question_hi": "किस तत्व का घनत्व सबसे अधिक है?",
    "options_en": ["Osmium", "Iridium", "Platinum", "Gold"],
    "options_hi": ["ऑस्मियम", "इरीडियम", "प्लैटिनम", "सोना"],
    "answer_en": "Osmium",
    "answer_hi": "ऑस्मियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "What is the chemical formula of sulfur dioxide?",
    "question_hi": "सल्फर डाइऑक्साइड का रासायनिक सूत्र क्या है?",
    "options_en": ["SO", "SO₂", "SO₃", "S₂O"],
    "options_hi": ["SO", "SO₂", "SO₃", "S₂O"],
    "answer_en": "SO₂",
    "answer_hi": "SO₂",
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