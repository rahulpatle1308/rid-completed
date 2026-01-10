const questions = [
 {
 "num": 1,
  question_en: "What is the atomic number of Carbon?",
  question_hi: "कार्बन की परमाणु संख्या क्या है?",
  options_en: ["4", "6", "8", "12"],
  options_hi: ["4", "6", "8", "12"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: ""
},
{
 "num": 2,
  question_en: "Which element has the chemical symbol 'O'?",
  question_hi: "किस तत्व का रासायनिक प्रतीक 'O' है?",
  options_en: ["Osmium", "Oxygen", "Oganesson", "Osmium"],
  options_hi: ["ऑस्मियम", "ऑक्सीजन", "ऑगेनेसन", "ऑस्मियम"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
 "num": 3,
  question_en: "What is the pH value of acidic solutions?",
  question_hi: "अम्लीय विलयनों का pH मान क्या होता है?",
  options_en: ["Greater than 7", "Equal to 7", "Less than 7", "Exactly 14"],
  options_hi: ["7 से अधिक", "7 के बराबर", "7 से कम", "ठीक 14"],
  answer_en: "Less than 7",
  answer_hi: "7 से कम",
  attempted: false,
  selected: ""
},
{
 "num": 4,
  question_en: "Which gas is produced when metals react with acids?",
  question_hi: "जब धातुएं अम्लों के साथ अभिक्रिया करती हैं तो कौन सी गैस उत्पन्न होती है?",
  options_en: ["Oxygen", "Hydrogen", "Carbon dioxide", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन"],
  answer_en: "Hydrogen",
  answer_hi: "हाइड्रोजन",
  attempted: false,
  selected: ""
},
{
 "num": 5,
  question_en: "What is the chemical formula of Sulfur Dioxide?",
  question_hi: "सल्फर डाइऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["SO", "SO₂", "SO₃", "H₂SO₄"],
  options_hi: ["SO", "SO₂", "SO₃", "H₂SO₄"],
  answer_en: "SO₂",
  answer_hi: "SO₂",
  attempted: false,
  selected: ""
},
{
 "num": 6,
  question_en: "Which gas turns lime water milky?",
  question_hi: "कौन सी गैस चूने के पानी को दूधिया बना देती है?",
  options_en: ["Oxygen", "Carbon dioxide", "Hydrogen", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "नाइट्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
 "num": 7,
  question_en: "What is the atomic mass of Oxygen?",
  question_hi: "ऑक्सीजन का परमाणु द्रव्यमान क्या है?",
  options_en: ["12", "14", "16", "18"],
  options_hi: ["12", "14", "16", "18"],
  answer_en: "16",
  answer_hi: "16",
  attempted: false,
  selected: ""
},
{
 "num": 8,
  question_en: "Which element is known as the 'King of Chemicals'?",
  question_hi: "किस तत्व को 'रसायनों का राजा' कहा जाता है?",
  options_en: ["Hydrogen", "Oxygen", "Sulfuric acid", "Nitric acid"],
  options_hi: ["हाइड्रोजन", "ऑक्सीजन", "सल्फ्यूरिक अम्ल", "नाइट्रिक अम्ल"],
  answer_en: "Sulfuric acid",
  answer_hi: "सल्फ्यूरिक अम्ल",
  attempted: false,
  selected: ""
},
{
 "num": 9,
  question_en: "What is the chemical formula of Nitric Acid?",
  question_hi: "नाइट्रिक अम्ल का रासायनिक सूत्र क्या है?",
  options_en: ["HNO₂", "HNO₃", "H₃NO₄", "H₂NO₃"],
  options_hi: ["HNO₂", "HNO₃", "H₃NO₄", "H₂NO₃"],
  answer_en: "HNO₃",
  answer_hi: "HNO₃",
  attempted: false,
  selected: ""
},
{
 "num": 10,
  question_en: "Which metal is present in chlorophyll?",
  question_hi: "क्लोरोफिल में कौन सी धातु उपस्थित होती है?",
  options_en: ["Iron", "Magnesium", "Calcium", "Copper"],
  options_hi: ["लोहा", "मैग्नीशियम", "कैल्शियम", "तांबा"],
  answer_en: "Magnesium",
  answer_hi: "मैग्नीशियम",
  attempted: false,
  selected: ""
},
{
 "num": 11,
  question_en: "What is the chemical formula of Calcium Carbonate?",
  question_hi: "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
  options_en: ["CaCO₂", "CaCO₃", "Ca₂CO₃", "Ca(CO₃)₂"],
  options_hi: ["CaCO₂", "CaCO₃", "Ca₂CO₃", "Ca(CO₃)₂"],
  answer_en: "CaCO₃",
  answer_hi: "CaCO₃",
  attempted: false,
  selected: ""
},
{
 "num": 12,
  question_en: "Which gas is responsible for the greenhouse effect?",
  question_hi: "ग्रीनहाउस प्रभाव के लिए कौन सी गैस उत्तरदायी है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
 "num": 13,
  question_en: "What is the chemical symbol for Potassium?",
  question_hi: "पोटैशियम का रासायनिक प्रतीक क्या है?",
  options_en: ["P", "Po", "K", "Pt"],
  options_hi: ["P", "Po", "K", "Pt"],
  answer_en: "K",
  answer_hi: "K",
  attempted: false,
  selected: ""
},
{
 "num": 14,
  question_en: "Which acid is present in our stomach?",
  question_hi: "हमारे पेट में कौन सा अम्ल उपस्थित होता है?",
  options_en: ["Acetic acid", "Citric acid", "Hydrochloric acid", "Sulfuric acid"],
  options_hi: ["एसिटिक अम्ल", "साइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल"],
  answer_en: "Hydrochloric acid",
  answer_hi: "हाइड्रोक्लोरिक अम्ल",
  attempted: false,
  selected: ""
},
{
 "num": 15,
  question_en: "What is the chemical formula of Aluminium Oxide?",
  question_hi: "अलुमिनियम ऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["AlO", "Al₂O", "AlO₂", "Al₂O₃"],
  options_hi: ["AlO", "Al₂O", "AlO₂", "Al₂O₃"],
  answer_en: "Al₂O₃",
  answer_hi: "Al₂O₃",
  attempted: false,
  selected: ""
},
{
 "num": 16,
  question_en: "Which element has the highest melting point?",
  question_hi: "किस तत्व का गलनांक सबसे अधिक होता है?",
  options_en: ["Tungsten", "Iron", "Gold", "Platinum"],
  options_hi: ["टंगस्टन", "लोहा", "सोना", "प्लैटिनम"],
  answer_en: "Tungsten",
  answer_hi: "टंगस्टन",
  attempted: false,
  selected: ""
},
{
 "num": 17,
  question_en: "What is the chemical formula of Sodium Hydroxide?",
  question_hi: "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["NaOH", "Na₂OH", "Na(OH)₂", "NaHO"],
  options_hi: ["NaOH", "Na₂OH", "Na(OH)₂", "NaHO"],
  answer_en: "NaOH",
  answer_hi: "NaOH",
  attempted: false,
  selected: ""
},
{
 "num": 18,
  question_en: "Which gas is used in photosynthesis by plants?",
  question_hi: "पौधों द्वारा प्रकाश संश्लेषण में किस गैस का उपयोग किया जाता है?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
 "num": 19,
  question_en: "What is the chemical symbol for Nitrogen?",
  question_hi: "नाइट्रोजन का रासायनिक प्रतीक क्या है?",
  options_en: ["Ni", "N", "No", "Ng"],
  options_hi: ["Ni", "N", "No", "Ng"],
  answer_en: "N",
  answer_hi: "N",
  attempted: false,
  selected: ""
},
{
 "num": 20,
  question_en: "Which metal is used in making electric wires?",
  question_hi: "विद्युत तार बनाने में किस धातु का उपयोग किया जाता है?",
  options_en: ["Aluminium", "Copper", "Silver", "Gold"],
  options_hi: ["एल्युमिनियम", "तांबा", "चांदी", "सोना"],
  answer_en: "Copper",
  answer_hi: "तांबा",
  attempted: false,
  selected: ""
},
{
 "num": 21,
  question_en: "What is the chemical formula of Calcium Hydroxide?",
  question_hi: "कैल्शियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["CaOH", "Ca(OH)₂", "Ca₂OH", "CaO₂H"],
  options_hi: ["CaOH", "Ca(OH)₂", "Ca₂OH", "CaO₂H"],
  answer_en: "Ca(OH)₂",
  answer_hi: "Ca(OH)₂",
  attempted: false,
  selected: ""
},
{
 "num": 22,
  question_en: "Which gas is most abundant in the universe?",
  question_hi: "ब्रह्मांड में कौन सी गैस सबसे अधिक मात्रा में पाई जाती है?",
  options_en: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
  answer_en: "Hydrogen",
  answer_hi: "हाइड्रोजन",
  attempted: false,
  selected: ""
},
{
 "num": 23,
  question_en: "What is the chemical symbol for Chlorine?",
  question_hi: "क्लोरीन का रासायनिक प्रतीक क्या है?",
  options_en: ["Ch", "Cl", "C", "Cr"],
  options_hi: ["Ch", "Cl", "C", "Cr"],
  answer_en: "Cl",
  answer_hi: "Cl",
  attempted: false,
  selected: ""
},
{
 "num": 24,
  question_en: "Which acid is known as 'Oil of Vitriol'?",
  question_hi: "किस अम्ल को 'ऑयल ऑफ विट्रियल' के नाम से जाना जाता है?",
  options_en: ["Nitric acid", "Hydrochloric acid", "Sulfuric acid", "Acetic acid"],
  options_hi: ["नाइट्रिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "सल्फ्यूरिक अम्ल", "एसिटिक अम्ल"],
  answer_en: "Sulfuric acid",
  answer_hi: "सल्फ्यूरिक अम्ल",
  attempted: false,
  selected: ""
},
{
 "num": 25,
  question_en: "What is the chemical formula of Magnesium Oxide?",
  question_hi: "मैग्नीशियम ऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["MgO", "Mg₂O", "MgO₂", "Mg₂O₃"],
  options_hi: ["MgO", "Mg₂O", "MgO₂", "Mg₂O₃"],
  answer_en: "MgO",
  answer_hi: "MgO",
  attempted: false,
  selected: ""
},
{
 "num": 26,
  question_en: "Which element is liquid at room temperature?",
  question_hi: "कमरे के तापमान पर कौन सा तत्व द्रव अवस्था में होता है?",
  options_en: ["Bromine", "Chlorine", "Iodine", "Fluorine"],
  options_hi: ["ब्रोमीन", "क्लोरीन", "आयोडीन", "फ्लोरीन"],
  answer_en: "Bromine",
  answer_hi: "ब्रोमीन",
  attempted: false,
  selected: ""
},
{
 "num": 27,
  question_en: "What is the chemical formula of Ferric Oxide?",
  question_hi: "फेरिक ऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["FeO", "Fe₂O₃", "Fe₃O₄", "FeO₂"],
  options_hi: ["FeO", "Fe₂O₃", "Fe₃O₄", "FeO₂"],
  answer_en: "Fe₂O₃",
  answer_hi: "Fe₂O₃",
  attempted: false,
  selected: ""
},
{
 "num": 28,
  question_en: "Which gas is used in advertising signs (neon lights)?",
  question_hi: "विज्ञापन साइनों (नीयन लाइट्स) में किस गैस का उपयोग किया जाता है?",
  options_en: ["Neon", "Argon", "Helium", "Xenon"],
  options_hi: ["नीयन", "आर्गन", "हीलियम", "जीनॉन"],
  answer_en: "Neon",
  answer_hi: "नीयन",
  attempted: false,
  selected: ""
},
{
 "num": 29,
  question_en: "What is the chemical symbol for Silicon?",
  question_hi: "सिलिकॉन का रासायनिक प्रतीक क्या है?",
  options_en: ["Si", "S", "Sl", "Sn"],
  options_hi: ["Si", "S", "Sl", "Sn"],
  answer_en: "Si",
  answer_hi: "Si",
  attempted: false,
  selected: ""
},
{
 "num": 30,
  question_en: "Which metal is used in thermometers?",
  question_hi: "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
  options_en: ["Mercury", "Sodium", "Aluminium", "Copper"],
  options_hi: ["पारा", "सोडियम", "एल्युमिनियम", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
 "num": 31,
  question_en: "What is the chemical formula of Ammonium Chloride?",
  question_hi: "अमोनियम क्लोराइड का रासायनिक सूत्र क्या है?",
  options_en: ["NH₄Cl", "NH₃Cl", "N₂H₄Cl", "NHCl"],
  options_hi: ["NH₄Cl", "NH₃Cl", "N₂H₄Cl", "NHCl"],
  answer_en: "NH₄Cl",
  answer_hi: "NH₄Cl",
  attempted: false,
  selected: ""
},
{
 "num": 32,
  question_en: "Which gas is used in refrigerators as a coolant?",
  question_hi: "रेफ्रिजरेटर में कूलेंट के रूप में किस गैस का उपयोग किया जाता है?",
  options_en: ["Ammonia", "Freon", "Carbon dioxide", "Sulfur dioxide"],
  options_hi: ["अमोनिया", "फ्रीऑन", "कार्बन डाइऑक्साइड", "सल्फर डाइऑक्साइड"],
  answer_en: "Freon",
  answer_hi: "फ्रीऑन",
  attempted: false,
  selected: ""
},
{
 "num": 33,
  question_en: "What is the chemical symbol for Barium?",
  question_hi: "बेरियम का रासायनिक प्रतीक क्या है?",
  options_en: ["Ba", "B", "Br", "Bi"],
  options_hi: ["Ba", "B", "Br", "Bi"],
  answer_en: "Ba",
  answer_hi: "Ba",
  attempted: false,
  selected: ""
},
{
 "num": 34,
  question_en: "Which acid is present in oranges and lemons?",
  question_hi: "संतरे और नींबू में कौन सा अम्ल उपस्थित होता है?",
  options_en: ["Acetic acid", "Citric acid", "Tartaric acid", "Oxalic acid"],
  options_hi: ["एसिटिक अम्ल", "साइट्रिक अम्ल", "टार्टरिक अम्ल", "ऑक्सालिक अम्ल"],
  answer_en: "Citric acid",
  answer_hi: "साइट्रिक अम्ल",
  attempted: false,
  selected: ""
},
{
 "num": 35,
  question_en: "What is the chemical formula of Potassium Permanganate?",
  question_hi: "पोटैशियम परमैंगनेट का रासायनिक सूत्र क्या है?",
  options_en: ["KMnO₄", "K₂MnO₄", "KMn₂O₄", "K(MnO₄)₂"],
  options_hi: ["KMnO₄", "K₂MnO₄", "KMn₂O₄", "K(MnO₄)₂"],
  answer_en: "KMnO₄",
  answer_hi: "KMnO₄",
  attempted: false,
  selected: ""
},
{
 "num": 36,
  question_en: "Which metal is used in aircraft making?",
  question_hi: "विमान निर्माण में किस धातु का उपयोग किया जाता है?",
  options_en: ["Aluminium", "Iron", "Copper", "Lead"],
  options_hi: ["एल्युमिनियम", "लोहा", "तांबा", "सीसा"],
  answer_en: "Aluminium",
  answer_hi: "एल्युमिनियम",
  attempted: false,
  selected: ""
},
{
 "num": 37,
  question_en: "What is the chemical formula of Sodium Chloride?",
  question_hi: "सोडियम क्लोराइड का रासायनिक सूत्र क्या है?",
  options_en: ["NaCl", "Na₂Cl", "NaCl₂", "Na₂Cl₂"],
  options_hi: ["NaCl", "Na₂Cl", "NaCl₂", "Na₂Cl₂"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: ""
},
{
 "num": 38,
  question_en: "Which gas is used by plants during respiration?",
  question_hi: "श्वसन के दौरान पौधों द्वारा किस गैस का उपयोग किया जाता है?",
  options_en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
 "num": 39,
  question_en: "What is the chemical symbol for Iodine?",
  question_hi: "आयोडीन का रासायनिक प्रतीक क्या है?",
  options_en: ["I", "Io", "In", "Id"],
  options_hi: ["I", "Io", "In", "Id"],
  answer_en: "I",
  answer_hi: "I",
  attempted: false,
  selected: ""
},
{
 "num": 40,
  question_en: "Which acid is present in tamarind?",
  question_hi: "इमली में कौन सा अम्ल उपस्थित होता है?",
  options_en: ["Citric acid", "Tartaric acid", "Oxalic acid", "Malic acid"],
  options_hi: ["साइट्रिक अम्ल", "टार्टरिक अम्ल", "ऑक्सालिक अम्ल", "मैलिक अम्ल"],
  answer_en: "Tartaric acid",
  answer_hi: "टार्टरिक अम्ल",
  attempted: false,
  selected: ""
},
{
 "num": 41,
  question_en: "What is the chemical formula of Calcium Sulfate?",
  question_hi: "कैल्शियम सल्फेट का रासायनिक सूत्र क्या है?",
  options_en: ["CaS", "CaSO₃", "CaSO₄", "Ca₂SO₄"],
  options_hi: ["CaS", "CaSO₃", "CaSO₄", "Ca₂SO₄"],
  answer_en: "CaSO₄",
  answer_hi: "CaSO₄",
  attempted: false,
  selected: ""
},
{
 "num": 42,
  question_en: "Which metal is used in making mirrors?",
  question_hi: "दर्पण बनाने में किस धातु का उपयोग किया जाता है?",
  options_en: ["Silver", "Aluminium", "Mercury", "Tin"],
  options_hi: ["चांदी", "एल्युमिनियम", "पारा", "टिन"],
  answer_en: "Silver",
  answer_hi: "चांदी",
  attempted: false,
  selected: ""
},
{
 "num": 43,
  question_en: "What is the chemical formula of Potassium Nitrate?",
  question_hi: "पोटैशियम नाइट्रेट का रासायनिक सूत्र क्या है?",
  options_en: ["KNO₂", "KNO₃", "K₂NO₃", "K(NO₃)₂"],
  options_hi: ["KNO₂", "KNO₃", "K₂NO₃", "K(NO₃)₂"],
  answer_en: "KNO₃",
  answer_hi: "KNO₃",
  attempted: false,
  selected: ""
},
{
 "num": 44,
  question_en: "Which gas is used in light bulbs?",
  question_hi: "लाइट बल्ब में किस गैस का उपयोग किया जाता है?",
  options_en: ["Oxygen", "Argon", "Hydrogen", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "आर्गन", "हाइड्रोजन", "नाइट्रोजन"],
  answer_en: "Argon",
  answer_hi: "आर्गन",
  attempted: false,
  selected: ""
},
{
 "num": 45,
  question_en: "What is the chemical symbol for Phosphorus?",
  question_hi: "फॉस्फोरस का रासायनिक प्रतीक क्या है?",
  options_en: ["P", "Ph", "Ps", "Po"],
  options_hi: ["P", "Ph", "Ps", "Po"],
  answer_en: "P",
  answer_hi: "P",
  attempted: false,
  selected: ""
},
{
 "num": 46,
  question_en: "Which acid is present in ant sting?",
  question_hi: "चींटी के डंक में कौन सा अम्ल उपस्थित होता है?",
  options_en: ["Formic acid", "Acetic acid", "Butyric acid", "Lactic acid"],
  options_hi: ["फॉर्मिक अम्ल", "एसिटिक अम्ल", "ब्यूटिरिक अम्ल", "लैक्टिक अम्ल"],
  answer_en: "Formic acid",
  answer_hi: "फॉर्मिक अम्ल",
  attempted: false,
  selected: ""
},
{
 "num": 47,
  question_en: "What is the chemical formula of Sodium Carbonate?",
  question_hi: "सोडियम कार्बोनेट का रासायनिक सूत्र क्या है?",
  options_en: ["NaCO₃", "Na₂CO₃", "Na(CO₃)₂", "Na₂(CO₃)₂"],
  options_hi: ["NaCO₃", "Na₂CO₃", "Na(CO₃)₂", "Na₂(CO₃)₂"],
  answer_en: "Na₂CO₃",
  answer_hi: "Na₂CO₃",
  attempted: false,
  selected: ""
},
{
 "num": 48,
  question_en: "Which metal is used in fireworks to give green color?",
  question_hi: "हरे रंग देने के लिए आतिशबाजी में किस धातु का उपयोग किया जाता है?",
  options_en: ["Barium", "Sodium", "Copper", "Strontium"],
  options_hi: ["बेरियम", "सोडियम", "तांबा", "स्ट्रोंशियम"],
  answer_en: "Barium",
  answer_hi: "बेरियम",
  attempted: false,
  selected: ""
},
{
 "num": 49,
  question_en: "What is the chemical formula of Zinc Oxide?",
  question_hi: "जिंक ऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["ZnO", "Zn₂O", "ZnO₂", "Zn₂O₃"],
  options_hi: ["ZnO", "Zn₂O", "ZnO₂", "Zn₂O₃"],
  answer_en: "ZnO",
  answer_hi: "ZnO",
  attempted: false,
  selected: ""
},
{
 "num": 50,
  question_en: "Which gas is produced during fermentation?",
  question_hi: "किण्वन के दौरान कौन सी गैस उत्पन्न होती है?",
  options_en: ["Oxygen", "Carbon dioxide", "Methane", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "मीथेन", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
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