const questions = [
  {
  "num":1,
  question_en: "What is the chemical formula of table salt?",
  question_hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
  options_en: ["NaCl", "KCl", "CaCO₃", "NaOH"],
  options_hi: ["NaCl", "KCl", "CaCO₃", "NaOH"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: ""
},
{
  "num":2,
  question_en: "Which gas is released during photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के दौरान कौन सी गैस मुक्त होती है?",
  options_en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  "num":3,
  question_en: "What is the pH value of pure water?",
  question_hi: "शुद्ध जल का pH मान क्या होता है?",
  options_en: ["5", "6", "7", "8"],
  options_hi: ["5", "6", "7", "8"],
  answer_en: "7",
  answer_hi: "7",
  attempted: false,
  selected: ""
},
{
  "num":4,
  question_en: "Which vitamin is produced in human body when exposed to sunlight?",
  question_hi: "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  "num":5,
  question_en: "What is the chemical symbol for Gold?",
  question_hi: "सोने का रासायनिक प्रतीक क्या है?",
  options_en: ["Go", "Gd", "Au", "Ag"],
  options_hi: ["Go", "Gd", "Au", "Ag"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
},
{
  "num":6,
  question_en: "Which acid is present in vinegar?",
  question_hi: "सिरका में कौन सा अम्ल उपस्थित होता है?",
  options_en: ["Acetic acid", "Citric acid", "Lactic acid", "Formic acid"],
  options_hi: ["एसिटिक अम्ल", "साइट्रिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
  answer_en: "Acetic acid",
  answer_hi: "एसिटिक अम्ल",
  attempted: false,
  selected: ""
},
{
  "num":7,
  question_en: "Which organ purifies blood in human body?",
  question_hi: "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
  options_en: ["Heart", "Liver", "Kidneys", "Lungs"],
  options_hi: ["हृदय", "यकृत", "गुर्दे", "फेफड़े"],
  answer_en: "Kidneys",
  answer_hi: "गुर्दे",
  attempted: false,
  selected: ""
},
{
  "num":8,
  question_en: "What is the chemical formula of Methane?",
  question_hi: "मीथेन का रासायनिक सूत्र क्या है?",
  options_en: ["CH₄", "C₂H₆", "C₃H₈", "CO₂"],
  options_hi: ["CH₄", "C₂H₆", "C₃H₈", "CO₂"],
  answer_en: "CH₄",
  answer_hi: "CH₄",
  attempted: false,
  selected: ""
},
{
  "num":9,
  question_en: "Which gas is most abundant in Earth's atmosphere?",
  question_hi: "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में पाई जाती है?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Argon"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
  answer_en: "Nitrogen",
  answer_hi: "नाइट्रोजन",
  attempted: false,
  selected: ""
},
{
  "num":10,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सी धातु कमरे के तापमान पर द्रव अवस्था में होती है?",
  options_en: ["Sodium", "Mercury", "Iron", "Copper"],
  options_hi: ["सोडियम", "पारा", "लोहा", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  "num":11,
  question_en: "Which vitamin deficiency causes Scurvy?",
  question_hi: "किस विटामिन की कमी से स्कर्वी रोग होता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  "num":12,
  question_en: "What is the chemical formula of Baking Soda?",
  question_hi: "बेकिंग सोडा का रासायनिक सूत्र क्या है?",
  options_en: ["NaHCO₃", "Na₂CO₃", "CaCO₃", "NaOH"],
  options_hi: ["NaHCO₃", "Na₂CO₃", "CaCO₃", "NaOH"],
  answer_en: "NaHCO₃",
  answer_hi: "NaHCO₃",
  attempted: false,
  selected: ""
},
{
  "num":13,
  question_en: "Which blood group is known as universal donor?",
  question_hi: "किस रक्त समूह को सार्वत्रिक दाता के रूप में जाना जाता है?",
  options_en: ["A+", "B+", "AB+", "O-"],
  options_hi: ["A+", "B+", "AB+", "O-"],
  answer_en: "O-",
  answer_hi: "O-",
  attempted: false,
  selected: ""
},
{
  "num":14,
  question_en: "What is the chemical symbol for Iron?",
  question_hi: "लोहे का रासायनिक प्रतीक क्या है?",
  options_en: ["Ir", "Fe", "I", "In"],
  options_hi: ["Ir", "Fe", "I", "In"],
  answer_en: "Fe",
  answer_hi: "Fe",
  attempted: false,
  selected: ""
},
{
  "num":15,
  question_en: "Which part of plant conducts water and minerals from roots to leaves?",
  question_hi: "पौधे का कौन सा भाग जड़ों से पत्तियों तक पानी और खनिजों का संचालन करता है?",
  options_en: ["Phloem", "Xylem", "Cambium", "Epidermis"],
  options_hi: ["फ्लोएम", "जाइलम", "कैंबियम", "एपिडर्मिस"],
  answer_en: "Xylem",
  answer_hi: "जाइलम",
  attempted: false,
  selected: ""
},
{
  "num":16,
  question_en: "What is the chemical formula of Sulfuric Acid?",
  question_hi: "सल्फ्यूरिक अम्ल का रासायनिक सूत्र क्या है?",
  options_en: ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
  options_hi: ["H₂SO₄", "HCl", "HNO₃", "H₃PO₄"],
  answer_en: "H₂SO₄",
  answer_hi: "H₂SO₄",
  attempted: false,
  selected: ""
},
{
  "num":17,
  question_en: "Which vitamin deficiency causes Night Blindness?",
  question_hi: "किस विटामिन की कमी से रतौंधी होती है?",
  options_en: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B12", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन A",
  attempted: false,
  selected: ""
},
{
  "num":18,
  question_en: "What is the chemical formula of Ammonia?",
  question_hi: "अमोनिया का रासायनिक सूत्र क्या है?",
  options_en: ["NH₃", "NH₄", "N₂H₄", "HNO₃"],
  options_hi: ["NH₃", "NH₄", "N₂H₄", "HNO₃"],
  answer_en: "NH₃",
  answer_hi: "NH₃",
  attempted: false,
  selected: ""
},
{
  "num":19,
  question_en: "Which organ produces insulin in human body?",
  question_hi: "मानव शरीर में कौन सा अंग इंसुलिन उत्पन्न करता है?",
  options_en: ["Liver", "Pancreas", "Kidney", "Stomach"],
  options_hi: ["यकृत", "अग्न्याशय", "गुर्दा", "आमाशय"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  "num":20,
  question_en: "What is the chemical symbol for Silver?",
  question_hi: "चांदी का रासायनिक प्रतीक क्या है?",
  options_en: ["Si", "S", "Ag", "Au"],
  options_hi: ["Si", "S", "Ag", "Au"],
  answer_en: "Ag",
  answer_hi: "Ag",
  attempted: false,
  selected: ""
},
{
  "num":21,
  question_en: "Which gas is used in fire extinguishers?",
  question_hi: "आग बुझाने के यंत्रों में किस गैस का उपयोग किया जाता है?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  "num":22,
  question_en: "What is the chemical formula of Glucose?",
  question_hi: "ग्लूकोज का रासायनिक सूत्र क्या है?",
  options_en: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
  options_hi: ["C₆H₁₂O₆", "C₁₂H₂₂O₁₁", "C₂H₅OH", "CH₃COOH"],
  answer_en: "C₆H₁₂O₆",
  answer_hi: "C₆H₁₂O₆",
  attempted: false,
  selected: ""
},
{
  "num":23,
  question_en: "Which vitamin deficiency causes Beriberi?",
  question_hi: "किस विटामिन की कमी से बेरी-बेरी रोग होता है?",
  options_en: ["Vitamin B1", "Vitamin B2", "Vitamin B12", "Vitamin C"],
  options_hi: ["विटामिन B1", "विटामिन B2", "विटामिन B12", "विटामिन C"],
  answer_en: "Vitamin B1",
  answer_hi: "विटामिन B1",
  attempted: false,
  selected: ""
},
{
  "num":24,
  question_en: "What is the chemical formula of Carbon Dioxide?",
  question_hi: "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["CO", "CO₂", "C₂O", "CH₄"],
  options_hi: ["CO", "CO₂", "C₂O", "CH₄"],
  answer_en: "CO₂",
  answer_hi: "CO₂",
  attempted: false,
  selected: ""
},
{
  "num":25,
  question_en: "Which blood cells fight against infections?",
  question_hi: "कौन सी रक्त कोशिकाएं संक्रमण से लड़ती हैं?",
  options_en: ["Red Blood Cells", "White Blood Cells", "Platelets", "Plasma"],
  options_hi: ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
  answer_en: "White Blood Cells",
  answer_hi: "श्वेत रक्त कोशिकाएं",
  attempted: false,
  selected: ""
},
{
  "num":26,
  question_en: "What is the chemical formula of Common Salt?",
  question_hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
  options_en: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
  options_hi: ["NaCl", "KCl", "CaCl₂", "MgCl₂"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: ""
},
{
  "num":27,
  question_en: "Which vitamin is also known as Ascorbic Acid?",
  question_hi: "किस विटामिन को एस्कॉर्बिक अम्ल के रूप में भी जाना जाता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  "num":28,
  question_en: "What is the chemical symbol for Potassium?",
  question_hi: "पोटैशियम का रासायनिक प्रतीक क्या है?",
  options_en: ["P", "Po", "K", "Ka"],
  options_hi: ["P", "Po", "K", "Ka"],
  answer_en: "K",
  answer_hi: "K",
  attempted: false,
  selected: ""
},
{
  "num":29,
  question_en: "Which part of human brain controls balance and coordination?",
  question_hi: "मानव मस्तिष्क का कौन सा भाग संतुलन और समन्वय को नियंत्रित करता है?",
  options_en: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  options_hi: ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
  answer_en: "Cerebellum",
  answer_hi: "सेरेबेलम",
  attempted: false,
  selected: ""
},
{
  "num":30,
  question_en: "What is the chemical formula of Lime Water?",
  question_hi: "चूने के पानी का रासायनिक सूत्र क्या है?",
  options_en: ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
  options_hi: ["CaO", "Ca(OH)₂", "CaCO₃", "CaCl₂"],
  answer_en: "Ca(OH)₂",
  answer_hi: "Ca(OH)₂",
  attempted: false,
  selected: ""
},
{
  "num":31,
  question_en: "Which vitamin deficiency causes Rickets?",
  question_hi: "किस विटामिन की कमी से रिकेट्स रोग होता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  "num":32,
  question_en: "What is the chemical symbol for Sodium?",
  question_hi: "सोडियम का रासायनिक प्रतीक क्या है?",
  options_en: ["So", "Sd", "Na", "Nm"],
  options_hi: ["So", "Sd", "Na", "Nm"],
  answer_en: "Na",
  answer_hi: "Na",
  attempted: false,
  selected: ""
},
{
  "num":33,
  question_en: "Which gas is known as laughing gas?",
  question_hi: "किस गैस को हंसाने वाली गैस के रूप में जाना जाता है?",
  options_en: ["Nitrogen dioxide", "Nitrous oxide", "Carbon monoxide", "Sulfur dioxide"],
  options_hi: ["नाइट्रोजन डाइऑक्साइड", "नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "सल्फर डाइऑक्साइड"],
  answer_en: "Nitrous oxide",
  answer_hi: "नाइट्रस ऑक्साइड",
  attempted: false,
  selected: ""
},
{
  "num":34,
  question_en: "What is the chemical formula of Hydrogen Peroxide?",
  question_hi: "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["H₂O", "HO₂", "H₂O₂", "H₃O"],
  options_hi: ["H₂O", "HO₂", "H₂O₂", "H₃O"],
  answer_en: "H₂O₂",
  answer_hi: "H₂O₂",
  attempted: false,
  selected: ""
},
{
  "num":35,
  question_en: "Which vitamin is essential for blood clotting?",
  question_hi: "रक्त के थक्के बनने के लिए कौन सा विटामिन आवश्यक है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  "num":36,
  question_en: "What is the chemical symbol for Copper?",
  question_hi: "तांबे का रासायनिक प्रतीक क्या है?",
  options_en: ["Co", "Cu", "Cp", "Cr"],
  options_hi: ["Co", "Cu", "Cp", "Cr"],
  answer_en: "Cu",
  answer_hi: "Cu",
  attempted: false,
  selected: ""
},
{
  "num":37,
  question_en: "Which gas is used for artificial ripening of fruits?",
  question_hi: "फलों के कृत्रिम पकाने के लिए किस गैस का उपयोग किया जाता है?",
  options_en: ["Oxygen", "Carbon dioxide", "Ethylene", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "एथिलीन", "नाइट्रोजन"],
  answer_en: "Ethylene",
  answer_hi: "एथिलीन",
  attempted: false,
  selected: ""
},
{
  "num":38,
  question_en: "What is the chemical formula of Washing Soda?",
  question_hi: "धोने का सोडा का रासायनिक सूत्र क्या है?",
  options_en: ["NaHCO₃", "Na₂CO₃", "NaOH", "CaCO₃"],
  options_hi: ["NaHCO₃", "Na₂CO₃", "NaOH", "CaCO₃"],
  answer_en: "Na₂CO₃",
  answer_hi: "Na₂CO₃",
  attempted: false,
  selected: ""
},
{
  "num":39,
  question_en: "Which vitamin deficiency causes Pellagra?",
  question_hi: "किस विटामिन की कमी से पेलाग्रा रोग होता है?",
  options_en: ["Vitamin B3", "Vitamin B6", "Vitamin B12", "Vitamin C"],
  options_hi: ["विटामिन B3", "विटामिन B6", "विटामिन B12", "विटामिन C"],
  answer_en: "Vitamin B3",
  answer_hi: "विटामिन B3",
  attempted: false,
  selected: ""
},
{
  "num":40,
  question_en: "What is the chemical symbol for Calcium?",
  question_hi: "कैल्शियम का रासायनिक प्रतीक क्या है?",
  options_en: ["Ca", "C", "Cl", "Cm"],
  options_hi: ["Ca", "C", "Cl", "Cm"],
  answer_en: "Ca",
  answer_hi: "Ca",
  attempted: false,
  selected: ""
},
{
  "num":41,
  question_en: "Which gas is filled in balloons to make them float in air?",
  question_hi: "गुब्बारों को हवा में तैरने के लिए किस गैस से भरा जाता है?",
  options_en: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "हाइड्रोजन", "हीलियम", "नाइट्रोजन"],
  answer_en: "Helium",
  answer_hi: "हीलियम",
  attempted: false,
  selected: ""
},
{
  "num":42,
  question_en: "What is the chemical formula of Bleaching Powder?",
  question_hi: "ब्लीचिंग पाउडर का रासायनिक सूत्र क्या है?",
  options_en: ["CaOCl₂", "CaCl₂", "Ca(OH)₂", "CaCO₃"],
  options_hi: ["CaOCl₂", "CaCl₂", "Ca(OH)₂", "CaCO₃"],
  answer_en: "CaOCl₂",
  answer_hi: "CaOCl₂",
  attempted: false,
  selected: ""
},
{
  "num":43,
  question_en: "Which vitamin is also known as Thiamine?",
  question_hi: "किस विटामिन को थायमिन के रूप में भी जाना जाता है?",
  options_en: ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
  options_hi: ["विटामिन B1", "विटामिन B2", "विटामिन B6", "विटामिन B12"],
  answer_en: "Vitamin B1",
  answer_hi: "विटामिन B1",
  attempted: false,
  selected: ""
},
{
  "num":44,
  question_en: "What is the chemical symbol for Lead?",
  question_hi: "सीसे का रासायनिक प्रतीक क्या है?",
  options_en: ["Ld", "Pb", "Le", "Pl"],
  options_hi: ["Ld", "Pb", "Le", "Pl"],
  answer_en: "Pb",
  answer_hi: "Pb",
  attempted: false,
  selected: ""
},
{
  "num":45,
  question_en: "Which gas is used in refrigerators?",
  question_hi: "रेफ्रिजरेटर में किस गैस का उपयोग किया जाता है?",
  options_en: ["Ammonia", "Freon", "Carbon dioxide", "Oxygen"],
  options_hi: ["अमोनिया", "फ्रीऑन", "कार्बन डाइऑक्साइड", "ऑक्सीजन"],
  answer_en: "Freon",
  answer_hi: "फ्रीऑन",
  attempted: false,
  selected: ""
},
{
  "num":46,
  question_en: "What is the chemical formula of Quick Lime?",
  question_hi: "बिना बुझा चूना का रासायनिक सूत्र क्या है?",
  options_en: ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
  options_hi: ["CaO", "Ca(OH)₂", "CaCO₃", "CaSO₄"],
  answer_en: "CaO",
  answer_hi: "CaO",
  attempted: false,
  selected: ""
},
{
  "num":47,
  question_en: "Which vitamin is also known as Riboflavin?",
  question_hi: "किस विटामिन को राइबोफ्लेविन के रूप में भी जाना जाता है?",
  options_en: ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
  options_hi: ["विटामिन B1", "विटामिन B2", "विटामिन B6", "विटामिन B12"],
  answer_en: "Vitamin B2",
  answer_hi: "विटामिन B2",
  attempted: false,
  selected: ""
},
{
  "num":48,
  question_en: "What is the chemical symbol for Mercury?",
  question_hi: "पारे का रासायनिक प्रतीक क्या है?",
  options_en: ["Me", "Mg", "Hg", "Mr"],
  options_hi: ["Me", "Mg", "Hg", "Mr"],
  answer_en: "Hg",
  answer_hi: "Hg",
  attempted: false,
  selected: ""
},
{
  "num":49,
  question_en: "Which gas is known as Marsh Gas?",
  question_hi: "किस गैस को मार्श गैस के रूप में जाना जाता है?",
  options_en: ["Methane", "Ethane", "Propane", "Butane"],
  options_hi: ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
  answer_en: "Methane",
  answer_hi: "मीथेन",
  attempted: false,
  selected: ""
},
{
  "num":50,
  question_en: "What is the chemical formula of Plaster of Paris?",
  question_hi: "प्लास्टर ऑफ पेरिस का रासायनिक सूत्र क्या है?",
  options_en: ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "CaO"],
  options_hi: ["CaSO₄.2H₂O", "CaSO₄.½H₂O", "CaCO₃", "CaO"],
  answer_en: "CaSO₄.½H₂O",
  answer_hi: "CaSO₄.½H₂O",
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