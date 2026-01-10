const questions = [
  {
  num: 1,
  question_en: "What is the chemical symbol for Oxygen?",
  question_hi: "ऑक्सीजन का रासायनिक प्रतीक क्या है?",
  options_en: ["Ox", "O", "Og", "Oy"],
  options_hi: ["Ox", "O", "Og", "Oy"],
  answer_en: "O",
  answer_hi: "O",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which cell organelle is called the 'powerhouse of the cell'?",
  question_hi: "किस कोशिका अंगक को 'कोशिका का पावरहाउस' कहा जाता है?",
  options_en: ["Nucleus", "Mitochondria", "Ribosome", "Golgi apparatus"],
  options_hi: ["केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम", "गॉल्जी उपकरण"],
  answer_en: "Mitochondria",
  answer_hi: "माइटोकॉन्ड्रिया",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the chemical formula of Sulfuric Acid?",
  question_hi: "सल्फ्यूरिक एसिड का रासायनिक सूत्र क्या है?",
  options_en: ["H2SO3", "H2SO4", "H2S", "SO2"],
  options_hi: ["H2SO3", "H2SO4", "H2S", "SO2"],
  answer_en: "H2SO4",
  answer_hi: "H2SO4",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Which part of the human brain controls breathing and heart rate?",
  question_hi: "मानव मस्तिष्क का कौन सा भाग श्वास और हृदय गति को नियंत्रित करता है?",
  options_en: ["Cerebrum", "Cerebellum", "Medulla oblongata", "Hypothalamus"],
  options_hi: ["सेरेब्रम", "सेरिबैलम", "मेडुला ओब्लोंगाटा", "हाइपोथैलेमस"],
  answer_en: "Medulla oblongata",
  answer_hi: "मेडुला ओब्लोंगाटा",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "What is the pH value of a neutral solution?",
  question_hi: "उदासीन विलयन का pH मान क्या है?",
  options_en: ["0", "7", "14", "10"],
  options_hi: ["0", "7", "14", "10"],
  answer_en: "7",
  answer_hi: "7",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Which gas is released during photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
  options_en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "What is the chemical symbol for Carbon?",
  question_hi: "कार्बन का रासायनिक प्रतीक क्या है?",
  options_en: ["Ca", "C", "Co", "Cr"],
  options_hi: ["Ca", "C", "Co", "Cr"],
  answer_en: "C",
  answer_hi: "C",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which blood cells are responsible for carrying oxygen?",
  question_hi: "कौन सी रक्त कोशिकाएं ऑक्सीजन ले जाने के लिए जिम्मेदार हैं?",
  options_en: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
  options_hi: ["श्वेत रक्त कोशिकाएं", "लाल रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
  answer_en: "Red blood cells",
  answer_hi: "लाल रक्त कोशिकाएं",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is the chemical formula of Ammonia?",
  question_hi: "अमोनिया का रासायनिक सूत्र क्या है?",
  options_en: ["NH2", "NH3", "N2H4", "NH4"],
  options_hi: ["NH2", "NH3", "N2H4", "NH4"],
  answer_en: "NH3",
  answer_hi: "NH3",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which vitamin is essential for blood clotting?",
  question_hi: "रक्त के थक्के जमने के लिए कौन सा विटामिन आवश्यक है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
  options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन के"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन के",
  attempted: false,
  selected: ""
},
{
  num: 11,
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
  num: 12,
  question_en: "Which plant hormone promotes cell division?",
  question_hi: "कौन सा पादप हार्मोन कोशिका विभाजन को बढ़ावा देता है?",
  options_en: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
  options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकाइनिन", "एब्सिसिक अम्ल"],
  answer_en: "Cytokinin",
  answer_hi: "साइटोकाइनिन",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the chemical formula of Nitric Acid?",
  question_hi: "नाइट्रिक एसिड का रासायनिक सूत्र क्या है?",
  options_en: ["HNO2", "HNO3", "H2NO3", "NO2"],
  options_hi: ["HNO2", "HNO3", "H2NO3", "NO2"],
  answer_en: "HNO3",
  answer_hi: "HNO3",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which part of the eye controls the amount of light entering?",
  question_hi: "आँख का कौन सा भाग प्रवेश करने वाले प्रकाश की मात्रा को नियंत्रित करता है?",
  options_en: ["Retina", "Cornea", "Iris", "Lens"],
  options_hi: ["रेटिना", "कॉर्निया", "आइरिस", "लेंस"],
  answer_en: "Iris",
  answer_hi: "आइरिस",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the chemical symbol for Phosphorus?",
  question_hi: "फॉस्फोरस का रासायनिक प्रतीक क्या है?",
  options_en: ["Ph", "P", "Ps", "Po"],
  options_hi: ["Ph", "P", "Ps", "Po"],
  answer_en: "P",
  answer_hi: "P",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which blood type is known as the universal donor?",
  question_hi: "किस रक्त समूह को सार्वभौमिक दाता के रूप में जाना जाता है?",
  options_en: ["A", "B", "AB", "O"],
  options_hi: ["A", "B", "AB", "O"],
  answer_en: "O",
  answer_hi: "O",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the chemical formula of Hydrochloric Acid?",
  question_hi: "हाइड्रोक्लोरिक एसिड का रासायनिक सूत्र क्या है?",
  options_en: ["HCl", "H2Cl", "HClO", "HClO3"],
  options_hi: ["HCl", "H2Cl", "HClO", "HClO3"],
  answer_en: "HCl",
  answer_hi: "HCl",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which is the largest gland in the human body?",
  question_hi: "मानव शरीर में सबसे बड़ी ग्रंथि कौन सी है?",
  options_en: ["Pancreas", "Liver", "Thyroid", "Pituitary"],
  options_hi: ["अग्न्याशय", "यकृत", "थायरॉयड", "पीयूष ग्रंथि"],
  answer_en: "Liver",
  answer_hi: "यकृत",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the chemical symbol for Chlorine?",
  question_hi: "क्लोरीन का रासायनिक प्रतीक क्या है?",
  options_en: ["Ch", "Cl", "Cr", "Co"],
  options_hi: ["Ch", "Cl", "Cr", "Co"],
  answer_en: "Cl",
  answer_hi: "Cl",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which part of the plant performs photosynthesis?",
  question_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
  options_en: ["Root", "Stem", "Leaf", "Flower"],
  options_hi: ["जड़", "तना", "पत्ती", "फूल"],
  answer_en: "Leaf",
  answer_hi: "पत्ती",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is the chemical formula of Carbon Dioxide?",
  question_hi: "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["CO", "CO2", "C2O", "C2O2"],
  options_hi: ["CO", "CO2", "C2O", "C2O2"],
  answer_en: "CO2",
  answer_hi: "CO2",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which chamber of the heart receives oxygenated blood from lungs?",
  question_hi: "हृदय का कौन सा कक्ष फेफड़ों से ऑक्सीजन युक्त रक्त प्राप्त करता है?",
  options_en: ["Right atrium", "Right ventricle", "Left atrium", "Left ventricle"],
  options_hi: ["दायां आलिंद", "दायां निलय", "बायां आलिंद", "बायां निलय"],
  answer_en: "Left atrium",
  answer_hi: "बायां आलिंद",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is the chemical symbol for Sulfur?",
  question_hi: "सल्फर का रासायनिक प्रतीक क्या है?",
  options_en: ["Su", "S", "Sl", "Sr"],
  options_hi: ["Su", "S", "Sl", "Sr"],
  answer_en: "S",
  answer_hi: "S",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which enzyme is present in saliva and helps in digestion of carbohydrates?",
  question_hi: "लार में कौन सा एंजाइम मौजूद होता है और कार्बोहाइड्रेट के पाचन में मदद करता है?",
  options_en: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
  options_hi: ["पेप्सिन", "एमाइलेज", "लाइपेज", "ट्रिप्सिन"],
  answer_en: "Amylase",
  answer_hi: "एमाइलेज",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is the chemical formula of Methane?",
  question_hi: "मीथेन का रासायनिक सूत्र क्या है?",
  options_en: ["CH4", "C2H6", "C3H8", "C4H10"],
  options_hi: ["CH4", "C2H6", "C3H8", "C4H10"],
  answer_en: "CH4",
  answer_hi: "CH4",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which part of the cell contains genetic material?",
  question_hi: "कोशिका का कौन सा भाग आनुवंशिक सामग्री रखता है?",
  options_en: ["Cytoplasm", "Nucleus", "Mitochondria", "Ribosome"],
  options_hi: ["कोशिकाद्रव्य", "केंद्रक", "माइटोकॉन्ड्रिया", "राइबोसोम"],
  answer_en: "Nucleus",
  answer_hi: "केंद्रक",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is the chemical symbol for Fluorine?",
  question_hi: "फ्लोरीन का रासायनिक प्रतीक क्या है?",
  options_en: ["Fl", "F", "Fr", "Fe"],
  options_hi: ["Fl", "F", "Fr", "Fe"],
  answer_en: "F",
  answer_hi: "F",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which gas is used by plants during respiration?",
  question_hi: "पौधे श्वसन के दौरान किस गैस का उपयोग करते हैं?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the chemical formula of Ethanol?",
  question_hi: "एथेनॉल का रासायनिक सूत्र क्या है?",
  options_en: ["CH3OH", "C2H5OH", "C3H7OH", "C4H9OH"],
  options_hi: ["CH3OH", "C2H5OH", "C3H7OH", "C4H9OH"],
  answer_en: "C2H5OH",
  answer_hi: "C2H5OH",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which vitamin deficiency causes scurvy?",
  question_hi: "किस विटामिन की कमी से स्कर्वी रोग होता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन सी",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What is the chemical symbol for Helium?",
  question_hi: "हीलियम का रासायनिक प्रतीक क्या है?",
  options_en: ["He", "H", "Hl", "Ha"],
  options_hi: ["He", "H", "Hl", "Ha"],
  answer_en: "He",
  answer_hi: "He",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which organ in the human body produces insulin?",
  question_hi: "मानव शरीर में कौन सा अंग इंसुलिन का उत्पादन करता है?",
  options_en: ["Liver", "Pancreas", "Kidney", "Stomach"],
  options_hi: ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the chemical formula of Hydrogen Peroxide?",
  question_hi: "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["H2O", "HO2", "H2O2", "H3O"],
  options_hi: ["H2O", "HO2", "H2O2", "H3O"],
  answer_en: "H2O2",
  answer_hi: "H2O2",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which part of the human ear is responsible for maintaining balance?",
  question_hi: "मानव कान का कौन सा भाग संतुलन बनाए रखने के लिए जिम्मेदार है?",
  options_en: ["Eardrum", "Cochlea", "Semicircular canals", "Auditory nerve"],
  options_hi: ["कान का परदा", "कोक्लीया", "अर्धवृत्ताकार नलिकाएं", "श्रवण तंत्रिका"],
  answer_en: "Semicircular canals",
  answer_hi: "अर्धवृत्ताकार नलिकाएं",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the chemical symbol for Argon?",
  question_hi: "आर्गन का रासायनिक प्रतीक क्या है?",
  options_en: ["A", "Ar", "Ag", "An"],
  options_hi: ["A", "Ar", "Ag", "An"],
  answer_en: "Ar",
  answer_hi: "Ar",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which mineral is essential for formation of hemoglobin?",
  question_hi: "हीमोग्लोबिन के निर्माण के लिए कौन सा खनिज आवश्यक है?",
  options_en: ["Calcium", "Iron", "Potassium", "Sodium"],
  options_hi: ["कैल्शियम", "आयरन", "पोटेशियम", "सोडियम"],
  answer_en: "Iron",
  answer_hi: "आयरन",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the chemical formula of Sodium Hydroxide?",
  question_hi: "सोडियम हाइड्रॉक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["NaOH", "Na2OH", "Na(OH)2", "NaH"],
  options_hi: ["NaOH", "Na2OH", "Na(OH)2", "NaH"],
  answer_en: "NaOH",
  answer_hi: "NaOH",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which system in the human body produces hormones?",
  question_hi: "मानव शरीर में कौन सी प्रणाली हार्मोन का उत्पादन करती है?",
  options_en: ["Digestive system", "Endocrine system", "Nervous system", "Respiratory system"],
  options_hi: ["पाचन तंत्र", "अंतःस्रावी तंत्र", "तंत्रिका तंत्र", "श्वसन तंत्र"],
  answer_en: "Endocrine system",
  answer_hi: "अंतःस्रावी तंत्र",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is the chemical symbol for Potassium?",
  question_hi: "पोटेशियम का रासायनिक प्रतीक क्या है?",
  options_en: ["P", "Po", "K", "Ka"],
  options_hi: ["P", "Po", "K", "Ka"],
  answer_en: "K",
  answer_hi: "K",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which vitamin is produced by the human body when exposed to sunlight?",
  question_hi: "मानव शरीर सूर्य के प्रकाश के संपर्क में आने पर कौन सा विटामिन उत्पन्न करता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन डी",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the chemical formula of Calcium Carbonate?",
  question_hi: "कैल्शियम कार्बोनेट का रासायनिक सूत्र क्या है?",
  options_en: ["CaCO3", "Ca2CO3", "Ca(CO3)2", "CaC2"],
  options_hi: ["CaCO3", "Ca2CO3", "Ca(CO3)2", "CaC2"],
  answer_en: "CaCO3",
  answer_hi: "CaCO3",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which organelle is responsible for protein synthesis?",
  question_hi: "प्रोटीन संश्लेषण के लिए कौन सा अंगक जिम्मेदार है?",
  options_en: ["Mitochondria", "Golgi apparatus", "Ribosome", "Endoplasmic reticulum"],
  options_hi: ["माइटोकॉन्ड्रिया", "गॉल्जी उपकरण", "राइबोसोम", "अंतर्द्रव्यी जालिका"],
  answer_en: "Ribosome",
  answer_hi: "राइबोसोम",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the chemical symbol for Zinc?",
  question_hi: "जिंक का रासायनिक प्रतीक क्या है?",
  options_en: ["Zi", "Zn", "Z", "Zc"],
  options_hi: ["Zi", "Zn", "Z", "Zc"],
  answer_en: "Zn",
  answer_hi: "Zn",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which blood cells are responsible for fighting infections?",
  question_hi: "संक्रमण से लड़ने के लिए कौन सी रक्त कोशिकाएं जिम्मेदार हैं?",
  options_en: ["Red blood cells", "White blood cells", "Platelets", "Plasma"],
  options_hi: ["लाल रक्त कोशिकाएं", "श्वेत रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
  answer_en: "White blood cells",
  answer_hi: "श्वेत रक्त कोशिकाएं",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the chemical formula of Potassium Permanganate?",
  question_hi: "पोटेशियम परमैंगनेट का रासायनिक सूत्र क्या है?",
  options_en: ["KMnO4", "K2MnO4", "KMnO3", "K2MnO3"],
  options_hi: ["KMnO4", "K2MnO4", "KMnO3", "K2MnO3"],
  answer_en: "KMnO4",
  answer_hi: "KMnO4",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which part of the digestive system absorbs water?",
  question_hi: "पाचन तंत्र का कौन सा भाग पानी अवशोषित करता है?",
  options_en: ["Stomach", "Small intestine", "Large intestine", "Liver"],
  options_hi: ["पेट", "छोटी आंत", "बड़ी आंत", "यकृत"],
  answer_en: "Large intestine",
  answer_hi: "बड़ी आंत",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the chemical symbol for Copper?",
  question_hi: "कॉपर का रासायनिक प्रतीक क्या है?",
  options_en: ["Co", "Cu", "Cp", "Cr"],
  options_hi: ["Co", "Cu", "Cp", "Cr"],
  answer_en: "Cu",
  answer_hi: "Cu",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which gas is known as laughing gas?",
  question_hi: "किस गैस को हंसाने वाली गैस के रूप में जाना जाता है?",
  options_en: ["Nitrogen", "Nitrous oxide", "Carbon monoxide", "Sulfur dioxide"],
  options_hi: ["नाइट्रोजन", "नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "सल्फर डाइऑक्साइड"],
  answer_en: "Nitrous oxide",
  answer_hi: "नाइट्रस ऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the chemical formula of Glucose?",
  question_hi: "ग्लूकोज का रासायनिक सूत्र क्या है?",
  options_en: ["C6H12O6", "C12H22O11", "C2H5OH", "CH3COOH"],
  options_hi: ["C6H12O6", "C12H22O11", "C2H5OH", "CH3COOH"],
  answer_en: "C6H12O6",
  answer_hi: "C6H12O6",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which vitamin is also known as Ascorbic Acid?",
  question_hi: "किस विटामिन को एस्कॉर्बिक एसिड के नाम से भी जाना जाता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन सी",
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