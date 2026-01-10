const questions = [
  {
  num: 1,
  question_en: "What is the chemical symbol for Gold?",
  question_hi: "सोने का रासायनिक प्रतीक क्या है?",
  options_en: ["Au", "Ag", "Go", "Gd"],
  options_hi: ["Au", "Ag", "Go", "Gd"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is the pH value of pure water?",
  question_hi: "शुद्ध जल का pH मान क्या है?",
  options_en: ["7", "5", "8", "6"],
  options_hi: ["7", "5", "8", "6"],
  answer_en: "7",
  answer_hi: "7",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which gas is known as laughing gas?",
  question_hi: "किस गैस को हंसाने वाली गैस के रूप में जाना जाता है?",
  options_en: ["Nitrous Oxide", "Carbon Monoxide", "Sulfur Dioxide", "Ammonia"],
  options_hi: ["नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "सल्फर डाइऑक्साइड", "अमोनिया"],
  answer_en: "Nitrous Oxide",
  answer_hi: "नाइट्रस ऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is the chemical formula of Methane?",
  question_hi: "मीथेन का रासायनिक सूत्र क्या है?",
  options_en: ["CH4", "C2H6", "C3H8", "CO2"],
  options_hi: ["CH4", "C2H6", "C3H8", "CO2"],
  answer_en: "CH4",
  answer_hi: "CH4",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which element has the atomic number 1?",
  question_hi: "किस तत्व का परमाणु क्रमांक 1 है?",
  options_en: ["Hydrogen", "Helium", "Lithium", "Oxygen"],
  options_hi: ["हाइड्रोजन", "हीलियम", "लिथियम", "ऑक्सीजन"],
  answer_en: "Hydrogen",
  answer_hi: "हाइड्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the chemical formula of Sodium Chloride?",
  question_hi: "सोडियम क्लोराइड का रासायनिक सूत्र क्या है?",
  options_en: ["NaCl", "Na2Cl", "NaCl2", "Na2Cl2"],
  options_hi: ["NaCl", "Na2Cl", "NaCl2", "Na2Cl2"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which acid is present in vinegar?",
  question_hi: "सिरके में कौन सा अम्ल मौजूद होता है?",
  options_en: ["Acetic Acid", "Citric Acid", "Lactic Acid", "Hydrochloric Acid"],
  options_hi: ["एसिटिक एसिड", "साइट्रिक एसिड", "लैक्टिक एसिड", "हाइड्रोक्लोरिक एसिड"],
  answer_en: "Acetic Acid",
  answer_hi: "एसिटिक एसिड",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "What is the chemical symbol for Silver?",
  question_hi: "चांदी का रासायनिक प्रतीक क्या है?",
  options_en: ["Ag", "Au", "Si", "Sr"],
  options_hi: ["Ag", "Au", "Si", "Sr"],
  answer_en: "Ag",
  answer_hi: "Ag",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which gas is used in fire extinguishers?",
  question_hi: "अग्निशामक यंत्र में किस गैस का उपयोग किया जाता है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "What is the chemical formula of Glucose?",
  question_hi: "ग्लूकोज का रासायनिक सूत्र क्या है?",
  options_en: ["C6H12O6", "C12H22O11", "CH3COOH", "C2H5OH"],
  options_hi: ["C6H12O6", "C12H22O11", "CH3COOH", "C2H5OH"],
  answer_en: "C6H12O6",
  answer_hi: "C6H12O6",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सी धातु कमरे के तापमान पर तरल होती है?",
  options_en: ["Mercury", "Iron", "Copper", "Aluminum"],
  options_hi: ["पारा", "लोहा", "तांबा", "एल्यूमीनियम"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the chemical formula of Sulfuric Acid?",
  question_hi: "सल्फ्यूरिक एसिड का रासायनिक सूत्र क्या है?",
  options_en: ["H2SO4", "H2SO3", "H2S", "SO2"],
  options_hi: ["H2SO4", "H2SO3", "H2S", "SO2"],
  answer_en: "H2SO4",
  answer_hi: "H2SO4",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which gas is most abundant in Earth's atmosphere?",
  question_hi: "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में पाई जाती है?",
  options_en: ["Nitrogen", "Oxygen", "Carbon Dioxide", "Argon"],
  options_hi: ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "आर्गन"],
  answer_en: "Nitrogen",
  answer_hi: "नाइट्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "What is the chemical symbol for Iron?",
  question_hi: "लोहे का रासायनिक प्रतीक क्या है?",
  options_en: ["Fe", "Ir", "In", "Au"],
  options_hi: ["Fe", "Ir", "In", "Au"],
  answer_en: "Fe",
  answer_hi: "Fe",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which acid is known as 'King of Chemicals'?",
  question_hi: "किस अम्ल को 'रसायनों का राजा' कहा जाता है?",
  options_en: ["Sulfuric Acid", "Hydrochloric Acid", "Nitric Acid", "Acetic Acid"],
  options_hi: ["सल्फ्यूरिक एसिड", "हाइड्रोक्लोरिक एसिड", "नाइट्रिक एसिड", "एसिटिक एसिड"],
  answer_en: "Sulfuric Acid",
  answer_hi: "सल्फ्यूरिक एसिड",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "What is the chemical formula of Ammonia?",
  question_hi: "अमोनिया का रासायनिक सूत्र क्या है?",
  options_en: ["NH3", "NH4", "N2H4", "NO2"],
  options_hi: ["NH3", "NH4", "N2H4", "NO2"],
  answer_en: "NH3",
  answer_hi: "NH3",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which gas is used in balloons to make them float?",
  question_hi: "गुब्बारों को उड़ाने के लिए किस गैस का उपयोग किया जाता है?",
  options_en: ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
  options_hi: ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
  answer_en: "Helium",
  answer_hi: "हीलियम",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is the chemical symbol for Sodium?",
  question_hi: "सोडियम का रासायनिक प्रतीक क्या है?",
  options_en: ["Na", "So", "Sd", "Sm"],
  options_hi: ["Na", "So", "Sd", "Sm"],
  answer_en: "Na",
  answer_hi: "Na",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which compound is commonly known as baking soda?",
  question_hi: "किस यौगिक को आमतौर पर बेकिंग सोडा के रूप में जाना जाता है?",
  options_en: ["Sodium Bicarbonate", "Sodium Carbonate", "Calcium Carbonate", "Potassium Bicarbonate"],
  options_hi: ["सोडियम बाइकार्बोनेट", "सोडियम कार्बोनेट", "कैल्शियम कार्बोनेट", "पोटेशियम बाइकार्बोनेट"],
  answer_en: "Sodium Bicarbonate",
  answer_hi: "सोडियम बाइकार्बोनेट",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "What is the chemical formula of Carbon Dioxide?",
  question_hi: "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["CO2", "CO", "C2O", "C2O2"],
  options_hi: ["CO2", "CO", "C2O", "C2O2"],
  answer_en: "CO2",
  answer_hi: "CO2",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Which element has the chemical symbol 'K'?",
  question_hi: "किस तत्व का रासायनिक प्रतीक 'K' है?",
  options_en: ["Potassium", "Krypton", "Kryptonite", "Kinetium"],
  options_hi: ["पोटेशियम", "क्रिप्टन", "क्रिप्टोनाइट", "किनेटियम"],
  answer_en: "Potassium",
  answer_hi: "पोटेशियम",
  attempted: false,
  selected: ""
},
{
  num: 22,
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
  num: 23,
  question_en: "Which gas is produced during photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के दौरान कौन सी गैस उत्पन्न होती है?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is the chemical symbol for Lead?",
  question_hi: "लेड का रासायनिक प्रतीक क्या है?",
  options_en: ["Pb", "Ld", "Le", "Pd"],
  options_hi: ["Pb", "Ld", "Le", "Pd"],
  answer_en: "Pb",
  answer_hi: "Pb",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which compound is known as common salt?",
  question_hi: "किस यौगिक को साधारण नमक के रूप में जाना जाता है?",
  options_en: ["Sodium Chloride", "Sodium Carbonate", "Calcium Chloride", "Potassium Chloride"],
  options_hi: ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "कैल्शियम क्लोराइड", "पोटेशियम क्लोराइड"],
  answer_en: "Sodium Chloride",
  answer_hi: "सोडियम क्लोराइड",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "What is the chemical formula of Nitric Acid?",
  question_hi: "नाइट्रिक एसिड का रासायनिक सूत्र क्या है?",
  options_en: ["HNO3", "HNO2", "H2NO3", "NO2"],
  options_hi: ["HNO3", "HNO2", "H2NO3", "NO2"],
  answer_en: "HNO3",
  answer_hi: "HNO3",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which element has the highest electronegativity?",
  question_hi: "किस तत्व की विद्युत ऋणात्मकता सबसे अधिक है?",
  options_en: ["Fluorine", "Oxygen", "Chlorine", "Nitrogen"],
  options_hi: ["फ्लोरीन", "ऑक्सीजन", "क्लोरीन", "नाइट्रोजन"],
  answer_en: "Fluorine",
  answer_hi: "फ्लोरीन",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is the chemical symbol for Copper?",
  question_hi: "कॉपर का रासायनिक प्रतीक क्या है?",
  options_en: ["Cu", "Co", "Cp", "Cr"],
  options_hi: ["Cu", "Co", "Cp", "Cr"],
  answer_en: "Cu",
  answer_hi: "Cu",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which gas is used in refrigerators for cooling?",
  question_hi: "रेफ्रिजरेटर में ठंडा करने के लिए किस गैस का उपयोग किया जाता है?",
  options_en: ["Freon", "Ammonia", "Oxygen", "Nitrogen"],
  options_hi: ["फ्रीऑन", "अमोनिया", "ऑक्सीजन", "नाइट्रोजन"],
  answer_en: "Freon",
  answer_hi: "फ्रीऑन",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is the chemical formula of Ethanol?",
  question_hi: "एथेनॉल का रासायनिक सूत्र क्या है?",
  options_en: ["C2H5OH", "CH3OH", "C3H7OH", "C4H9OH"],
  options_hi: ["C2H5OH", "CH3OH", "C3H7OH", "C4H9OH"],
  answer_en: "C2H5OH",
  answer_hi: "C2H5OH",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which metal is the best conductor of electricity?",
  question_hi: "कौन सी धातु बिजली की सबसे अच्छी संवाहक है?",
  options_en: ["Silver", "Copper", "Gold", "Aluminum"],
  options_hi: ["चांदी", "तांबा", "सोना", "एल्यूमीनियम"],
  answer_en: "Silver",
  answer_hi: "चांदी",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is the chemical symbol for Calcium?",
  question_hi: "कैल्शियम का रासायनिक प्रतीक क्या है?",
  options_en: ["Ca", "C", "Cl", "Cu"],
  options_hi: ["Ca", "C", "Cl", "Cu"],
  answer_en: "Ca",
  answer_hi: "Ca",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which compound is used in making cement?",
  question_hi: "सीमेंट बनाने में किस यौगिक का उपयोग किया जाता है?",
  options_en: ["Calcium Silicate", "Sodium Chloride", "Potassium Nitrate", "Magnesium Sulfate"],
  options_hi: ["कैल्शियम सिलिकेट", "सोडियम क्लोराइड", "पोटेशियम नाइट्रेट", "मैग्नीशियम सल्फेट"],
  answer_en: "Calcium Silicate",
  answer_hi: "कैल्शियम सिलिकेट",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is the chemical formula of Hydrogen Peroxide?",
  question_hi: "हाइड्रोजन पेरोक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["H2O2", "H2O", "HO2", "H3O"],
  options_hi: ["H2O2", "H2O", "HO2", "H3O"],
  answer_en: "H2O2",
  answer_hi: "H2O2",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which element is used in making pencil leads?",
  question_hi: "पेंसिल की लीड बनाने में किस तत्व का उपयोग किया जाता है?",
  options_en: ["Graphite (Carbon)", "Lead", "Iron", "Copper"],
  options_hi: ["ग्रेफाइट (कार्बन)", "लेड", "लोहा", "तांबा"],
  answer_en: "Graphite (Carbon)",
  answer_hi: "ग्रेफाइट (कार्बन)",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "What is the chemical symbol for Zinc?",
  question_hi: "जिंक का रासायनिक प्रतीक क्या है?",
  options_en: ["Zn", "Zi", "Z", "Zc"],
  options_hi: ["Zn", "Zi", "Z", "Zc"],
  answer_en: "Zn",
  answer_hi: "Zn",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which gas is known as 'Marsh Gas'?",
  question_hi: "किस गैस को 'मार्श गैस' के रूप में जाना जाता है?",
  options_en: ["Methane", "Ethane", "Propane", "Butane"],
  options_hi: ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
  answer_en: "Methane",
  answer_hi: "मीथेन",
  attempted: false,
  selected: ""
},
{
  num: 38,
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
  num: 39,
  question_en: "Which element has the chemical symbol 'Hg'?",
  question_hi: "किस तत्व का रासायनिक प्रतीक 'Hg' है?",
  options_en: ["Mercury", "Hydrogen", "Helium", "Magnesium"],
  options_hi: ["पारा", "हाइड्रोजन", "हीलियम", "मैग्नीशियम"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 40,
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
  num: 41,
  question_en: "Which gas is used in welding?",
  question_hi: "वेल्डिंग में किस गैस का उपयोग किया जाता है?",
  options_en: ["Acetylene", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["एसिटिलीन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Acetylene",
  answer_hi: "एसिटिलीन",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the chemical symbol for Tin?",
  question_hi: "टिन का रासायनिक प्रतीक क्या है?",
  options_en: ["Sn", "Ti", "Tn", "Sb"],
  options_hi: ["Sn", "Ti", "Tn", "Sb"],
  answer_en: "Sn",
  answer_hi: "Sn",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which compound is known as 'Blue Vitriol'?",
  question_hi: "किस यौगिक को 'नीला थोथा' के रूप में जाना जाता है?",
  options_en: ["Copper Sulfate", "Iron Sulfate", "Zinc Sulfate", "Magnesium Sulfate"],
  options_hi: ["कॉपर सल्फेट", "आयरन सल्फेट", "जिंक सल्फेट", "मैग्नीशियम सल्फेट"],
  answer_en: "Copper Sulfate",
  answer_hi: "कॉपर सल्फेट",
  attempted: false,
  selected: ""
},
{
  num: 44,
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
  num: 45,
  question_en: "Which element is the most abundant in the human body?",
  question_hi: "मानव शरीर में कौन सा तत्व सबसे अधिक मात्रा में पाया जाता है?",
  options_en: ["Oxygen", "Carbon", "Hydrogen", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन", "हाइड्रोजन", "नाइट्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is the chemical symbol for Aluminum?",
  question_hi: "एल्यूमीनियम का रासायनिक प्रतीक क्या है?",
  options_en: ["Al", "Am", "Au", "Ag"],
  options_hi: ["Al", "Am", "Au", "Ag"],
  answer_en: "Al",
  answer_hi: "Al",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which gas is used in anesthesia?",
  question_hi: "एनेस्थेसिया में किस गैस का उपयोग किया जाता है?",
  options_en: ["Nitrous Oxide", "Oxygen", "Carbon Dioxide", "Helium"],
  options_hi: ["नाइट्रस ऑक्साइड", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हीलियम"],
  answer_en: "Nitrous Oxide",
  answer_hi: "नाइट्रस ऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "What is the chemical formula of Sulfur Dioxide?",
  question_hi: "सल्फर डाइऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["SO2", "SO", "SO3", "S2O"],
  options_hi: ["SO2", "SO", "SO3", "S2O"],
  answer_en: "SO2",
  answer_hi: "SO2",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which compound is used as a fertilizer?",
  question_hi: "किस यौगिक का उपयोग उर्वरक के रूप में किया जाता है?",
  options_en: ["Urea", "Sodium Chloride", "Calcium Carbonate", "Sodium Hydroxide"],
  options_hi: ["यूरिया", "सोडियम क्लोराइड", "कैल्शियम कार्बोनेट", "सोडियम हाइड्रॉक्साइड"],
  answer_en: "Urea",
  answer_hi: "यूरिया",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the chemical symbol for Nickel?",
  question_hi: "निकल का रासायनिक प्रतीक क्या है?",
  options_en: ["Ni", "Nk", "Nl", "Ne"],
  options_hi: ["Ni", "Nk", "Nl", "Ne"],
  answer_en: "Ni",
  answer_hi: "Ni",
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