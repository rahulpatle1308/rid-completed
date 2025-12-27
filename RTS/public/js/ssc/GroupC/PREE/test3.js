const questions = [
  {
  num: 1,
  question_en: "Which gland in the human body is known as the 'master gland'?",
  question_hi: "मानव शरीर में किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
  options_en: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
  options_hi: ["थायरॉयड", "पीयूष ग्रंथि", "अधिवृक्क ग्रंथि", "अग्न्याशय"],
  answer_en: "Pituitary",
  answer_hi: "पीयूष ग्रंथि",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which instrument is used to measure atmospheric pressure?",
  question_hi: "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Hydrometer", "Barometer", "Hygrometer", "Thermometer"],
  options_hi: ["हाइड्रोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
  answer_en: "Barometer",
  answer_hi: "बैरोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the chemical name of baking soda?",
  question_hi: "बेकिंग सोडा का रासायनिक नाम क्या है?",
  options_en: ["Sodium Carbonate", "Sodium Bicarbonate", "Calcium Carbonate", "Potassium Bicarbonate"],
  options_hi: ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "कैल्शियम कार्बोनेट", "पोटेशियम बाइकार्बोनेट"],
  answer_en: "Sodium Bicarbonate",
  answer_hi: "सोडियम बाइकार्बोनेट",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Which metal is the best conductor of electricity?",
  question_hi: "कौन सी धातु बिजली की सबसे अच्छी संवाहक है?",
  options_en: ["Copper", "Silver", "Gold", "Aluminum"],
  options_hi: ["तांबा", "चाँदी", "सोना", "एल्यूमीनियम"],
  answer_en: "Silver",
  answer_hi: "चाँदी",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Who invented the television?",
  question_hi: "टेलीविजन का आविष्कार किसने किया?",
  options_en: ["Thomas Edison", "John Logie Baird", "Alexander Graham Bell", "Guglielmo Marconi"],
  options_hi: ["थॉमस एडिसन", "जॉन लॉगी बेयर्ड", "अलेक्जेंडर ग्राहम बेल", "गुलिएल्मो मार्कोनी"],
  answer_en: "John Logie Baird",
  answer_hi: "जॉन लॉगी बेयर्ड",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Which planet has the most moons in our solar system?",
  question_hi: "हमारे सौर मंडल में किस ग्रह के सबसे अधिक चंद्रमा हैं?",
  options_en: ["Jupiter", "Saturn", "Uranus", "Neptune"],
  options_hi: ["बृहस्पति", "शनि", "अरुण", "वरुण"],
  answer_en: "Saturn",
  answer_hi: "शनि",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "What is the scientific study of birds called?",
  question_hi: "पक्षियों के वैज्ञानिक अध्ययन को क्या कहा जाता है?",
  options_en: ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
  options_hi: ["पक्षीविज्ञान", "कीटविज्ञान", "सरीसृप विज्ञान", "मत्स्य विज्ञान"],
  answer_en: "Ornithology",
  answer_hi: "पक्षीविज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 8,
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
  num: 9,
  question_en: "What is the unit of electric power?",
  question_hi: "विद्युत शक्ति की इकाई क्या है?",
  options_en: ["Volt", "Ampere", "Watt", "Ohm"],
  options_hi: ["वोल्ट", "एम्पीयर", "वाट", "ओम"],
  answer_en: "Watt",
  answer_hi: "वाट",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which gas is responsible for the green color of plants?",
  question_hi: "पौधों के हरे रंग के लिए कौन सी गैस जिम्मेदार है?",
  options_en: ["Oxygen", "Carbon Dioxide", "Chlorophyll", "Nitrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "क्लोरोफिल", "नाइट्रोजन"],
  answer_en: "Chlorophyll",
  answer_hi: "क्लोरोफिल",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "What is the SI unit of frequency?",
  question_hi: "आवृत्ति की SI इकाई क्या है?",
  options_en: ["Hertz", "Decibel", "Watt", "Joule"],
  options_hi: ["हर्ट्ज", "डेसिबल", "वाट", "जूल"],
  answer_en: "Hertz",
  answer_hi: "हर्ट्ज",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which part of the human brain controls balance?",
  question_hi: "मानव मस्तिष्क का कौन सा भाग संतुलन को नियंत्रित करता है?",
  options_en: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  options_hi: ["सेरेब्रम", "सेरिबैलम", "मेडुला", "हाइपोथैलेमस"],
  answer_en: "Cerebellum",
  answer_hi: "सेरिबैलम",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the chemical symbol for Potassium?",
  question_hi: "पोटेशियम का रासायनिक प्रतीक क्या है?",
  options_en: ["P", "Pt", "K", "Ko"],
  options_hi: ["P", "Pt", "K", "Ko"],
  answer_en: "K",
  answer_hi: "K",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which is the hardest natural substance on Earth?",
  question_hi: "पृथ्वी पर सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
  options_en: ["Gold", "Iron", "Diamond", "Platinum"],
  options_hi: ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
  answer_en: "Diamond",
  answer_hi: "हीरा",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What causes the disease Malaria?",
  question_hi: "मलेरिया रोग का कारण क्या है?",
  options_en: ["Virus", "Bacteria", "Protozoa", "Fungus"],
  options_hi: ["वायरस", "बैक्टीरिया", "प्रोटोजोआ", "फंगस"],
  answer_en: "Protozoa",
  answer_hi: "प्रोटोजोआ",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which gas is used in fire extinguishers?",
  question_hi: "अग्निशामक यंत्र में किस गैस का उपयोग किया जाता है?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the speed of light in vacuum?",
  question_hi: "निर्वात में प्रकाश की गति क्या है?",
  options_en: ["3 × 10^5 m/s", "3 × 10^8 m/s", "3 × 10^10 m/s", "3 × 10^12 m/s"],
  options_hi: ["3 × 10^5 m/s", "3 × 10^8 m/s", "3 × 10^10 m/s", "3 × 10^12 m/s"],
  answer_en: "3 × 10^8 m/s",
  answer_hi: "3 × 10^8 m/s",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which vitamin is also known as 'Sunshine Vitamin'?",
  question_hi: "किस विटामिन को 'सनशाइन विटामिन' भी कहा जाता है?",
  options_en: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन डी",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the main component of biogas?",
  question_hi: "बायोगैस का मुख्य घटक क्या है?",
  options_en: ["Methane", "Ethane", "Propane", "Butane"],
  options_hi: ["मीथेन", "इथेन", "प्रोपेन", "ब्यूटेन"],
  answer_en: "Methane",
  answer_hi: "मीथेन",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which acid is found in vinegar?",
  question_hi: "सिरका में कौन सा अम्ल पाया जाता है?",
  options_en: ["Acetic Acid", "Citric Acid", "Lactic Acid", "Hydrochloric Acid"],
  options_hi: ["एसिटिक एसिड", "साइट्रिक एसिड", "लैक्टिक एसिड", "हाइड्रोक्लोरिक एसिड"],
  answer_en: "Acetic Acid",
  answer_hi: "एसिटिक एसिड",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is the study of earthquakes called?",
  question_hi: "भूकंप के अध्ययन को क्या कहा जाता है?",
  options_en: ["Seismology", "Volcanology", "Meteorology", "Geology"],
  options_hi: ["भूकंप विज्ञान", "ज्वालामुखी विज्ञान", "मौसम विज्ञान", "भूविज्ञान"],
  answer_en: "Seismology",
  answer_hi: "भूकंप विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which instrument is used to measure humidity?",
  question_hi: "आर्द्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
  options_en: ["Barometer", "Hygrometer", "Thermometer", "Anemometer"],
  options_hi: ["बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर", "एनीमोमीटर"],
  answer_en: "Hygrometer",
  answer_hi: "हाइग्रोमीटर",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is the chemical formula of methane?",
  question_hi: "मीथेन का रासायनिक सूत्र क्या है?",
  options_en: ["CH4", "C2H6", "C3H8", "C4H10"],
  options_hi: ["CH4", "C2H6", "C3H8", "C4H10"],
  answer_en: "CH4",
  answer_hi: "CH4",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which vitamin deficiency causes night blindness?",
  question_hi: "किस विटामिन की कमी से रतौंधी होती है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन ए",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is the unit of electric charge?",
  question_hi: "विद्युत आवेश की इकाई क्या है?",
  options_en: ["Volt", "Ampere", "Coulomb", "Ohm"],
  options_hi: ["वोल्ट", "एम्पीयर", "कूलम्ब", "ओम"],
  answer_en: "Coulomb",
  answer_hi: "कूलम्ब",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which metal is present in chlorophyll?",
  question_hi: "क्लोरोफिल में कौन सी धातु मौजूद होती है?",
  options_en: ["Iron", "Magnesium", "Calcium", "Zinc"],
  options_hi: ["लोहा", "मैग्नीशियम", "कैल्शियम", "जिंक"],
  answer_en: "Magnesium",
  answer_hi: "मैग्नीशियम",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is the chemical name of common salt?",
  question_hi: "साधारण नमक का रासायनिक नाम क्या है?",
  options_en: ["Sodium Chloride", "Sodium Carbonate", "Calcium Chloride", "Potassium Chloride"],
  options_hi: ["सोडियम क्लोराइड", "सोडियम कार्बोनेट", "कैल्शियम क्लोराइड", "पोटेशियम क्लोराइड"],
  answer_en: "Sodium Chloride",
  answer_hi: "सोडियम क्लोराइड",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which planet is known as the 'Evening Star'?",
  question_hi: "किस ग्रह को 'शाम का तारा' कहा जाता है?",
  options_en: ["Mars", "Venus", "Mercury", "Jupiter"],
  options_hi: ["मंगल", "शुक्र", "बुध", "बृहस्पति"],
  answer_en: "Venus",
  answer_hi: "शुक्र",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the pH value of pure water?",
  question_hi: "शुद्ध जल का pH मान क्या है?",
  options_en: ["5", "6", "7", "8"],
  options_hi: ["5", "6", "7", "8"],
  answer_en: "7",
  answer_hi: "7",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which gas is used in balloons to make them float?",
  question_hi: "गुब्बारों को उड़ाने के लिए किस गैस का उपयोग किया जाता है?",
  options_en: ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
  options_hi: ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"],
  answer_en: "Helium",
  answer_hi: "हीलियम",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What is the chemical symbol for Lead?",
  question_hi: "लेड का रासायनिक प्रतीक क्या है?",
  options_en: ["Ld", "Pb", "Le", "Pd"],
  options_hi: ["Ld", "Pb", "Le", "Pd"],
  answer_en: "Pb",
  answer_hi: "Pb",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which vitamin deficiency causes Beriberi?",
  question_hi: "किस विटामिन की कमी से बेरीबेरी रोग होता है?",
  options_en: ["Vitamin A", "Vitamin B1", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन ए", "विटामिन बी1", "विटामिन सी", "विटामिन डी"],
  answer_en: "Vitamin B1",
  answer_hi: "विटामिन बी1",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the SI unit of pressure?",
  question_hi: "दबाव की SI इकाई क्या है?",
  options_en: ["Pascal", "Newton", "Joule", "Watt"],
  options_hi: ["पास्कल", "न्यूटन", "जूल", "वाट"],
  answer_en: "Pascal",
  answer_hi: "पास्कल",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which metal is used in making electric wires?",
  question_hi: "बिजली के तार बनाने में किस धातु का उपयोग किया जाता है?",
  options_en: ["Iron", "Copper", "Aluminum", "Silver"],
  options_hi: ["लोहा", "तांबा", "एल्यूमीनियम", "चाँदी"],
  answer_en: "Copper",
  answer_hi: "तांबा",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the chemical formula of glucose?",
  question_hi: "ग्लूकोज का रासायनिक सूत्र क्या है?",
  options_en: ["C6H12O6", "C12H22O11", "C2H5OH", "CH3COOH"],
  options_hi: ["C6H12O6", "C12H22O11", "C2H5OH", "CH3COOH"],
  answer_en: "C6H12O6",
  answer_hi: "C6H12O6",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which part of the plant absorbs water and minerals from soil?",
  question_hi: "पौधे का कौन सा भाग मिट्टी से पानी और खनिज अवशोषित करता है?",
  options_en: ["Stem", "Leaves", "Roots", "Flowers"],
  options_hi: ["तना", "पत्तियाँ", "जड़ें", "फूल"],
  answer_en: "Roots",
  answer_hi: "जड़ें",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the chemical symbol for Silver?",
  question_hi: "सिल्वर का रासायनिक प्रतीक क्या है?",
  options_en: ["Si", "Ag", "Au", "Sl"],
  options_hi: ["Si", "Ag", "Au", "Sl"],
  answer_en: "Ag",
  answer_hi: "Ag",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which vitamin deficiency causes Rickets?",
  question_hi: "किस विटामिन की कमी से रिकेट्स रोग होता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन डी",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is the unit of electric resistance?",
  question_hi: "विद्युत प्रतिरोध की इकाई क्या है?",
  options_en: ["Volt", "Ampere", "Ohm", "Watt"],
  options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
  answer_en: "Ohm",
  answer_hi: "ओम",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which gas is produced during respiration?",
  question_hi: "श्वसन के दौरान कौन सी गैस उत्पन्न होती है?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the chemical name of laughing gas?",
  question_hi: "हंसाने वाली गैस का रासायनिक नाम क्या है?",
  options_en: ["Nitrous Oxide", "Nitric Oxide", "Carbon Monoxide", "Sulfur Dioxide"],
  options_hi: ["नाइट्रस ऑक्साइड", "नाइट्रिक ऑक्साइड", "कार्बन मोनोऑक्साइड", "सल्फर डाइऑक्साइड"],
  answer_en: "Nitrous Oxide",
  answer_hi: "नाइट्रस ऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which vitamin is also known as Riboflavin?",
  question_hi: "किस विटामिन को राइबोफ्लेविन भी कहा जाता है?",
  options_en: ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
  options_hi: ["विटामिन बी1", "विटामिन बी2", "विटामिन बी6", "विटामिन बी12"],
  answer_en: "Vitamin B2",
  answer_hi: "विटामिन बी2",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the chemical symbol for Calcium?",
  question_hi: "कैल्शियम का रासायनिक प्रतीक क्या है?",
  options_en: ["C", "Ca", "Cl", "Cu"],
  options_hi: ["C", "Ca", "Cl", "Cu"],
  answer_en: "Ca",
  answer_hi: "Ca",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which metal is used in thermometers?",
  question_hi: "थर्मामीटर में किस धातु का उपयोग किया जाता है?",
  options_en: ["Copper", "Iron", "Mercury", "Silver"],
  options_hi: ["तांबा", "लोहा", "पारा", "चाँदी"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the chemical formula of carbon dioxide?",
  question_hi: "कार्बन डाइऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["CO", "CO2", "C2O", "C2O2"],
  options_hi: ["CO", "CO2", "C2O", "C2O2"],
  answer_en: "CO2",
  answer_hi: "CO2",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which vitamin deficiency causes Pellagra?",
  question_hi: "किस विटामिन की कमी से पेलाग्रा रोग होता है?",
  options_en: ["Vitamin B1", "Vitamin B3", "Vitamin B6", "Vitamin B12"],
  options_hi: ["विटामिन बी1", "विटामिन बी3", "विटामिन बी6", "विटामिन बी12"],
  answer_en: "Vitamin B3",
  answer_hi: "विटामिन बी3",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the SI unit of energy?",
  question_hi: "ऊर्जा की SI इकाई क्या है?",
  options_en: ["Watt", "Joule", "Newton", "Pascal"],
  options_hi: ["वाट", "जूल", "न्यूटन", "पास्कल"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which gas is used in refrigerator for cooling?",
  question_hi: "रेफ्रिजरेटर में ठंडा करने के लिए किस गैस का उपयोग किया जाता है?",
  options_en: ["Ammonia", "Freon", "Oxygen", "Nitrogen"],
  options_hi: ["अमोनिया", "फ्रीऑन", "ऑक्सीजन", "नाइट्रोजन"],
  answer_en: "Freon",
  answer_hi: "फ्रीऑन",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the chemical symbol for Nitrogen?",
  question_hi: "नाइट्रोजन का रासायनिक प्रतीक क्या है?",
  options_en: ["Ni", "N", "Ng", "No"],
  options_hi: ["Ni", "N", "Ng", "No"],
  answer_en: "N",
  answer_hi: "N",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which vitamin is also known as Ascorbic Acid?",
  question_hi: "किस विटामिन को एस्कॉर्बिक एसिड भी कहा जाता है?",
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