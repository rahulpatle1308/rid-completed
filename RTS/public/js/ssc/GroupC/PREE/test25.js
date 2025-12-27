const questions = [
  {
  num: 1,
  question_en: "What is the study of tissues called?",
  question_hi: "ऊतकों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Histology", "Cytology", "Pathology", "Ecology"],
  options_hi: ["ऊतक विज्ञान", "कोशिका विज्ञान", "रोग विज्ञान", "पारिस्थितिकी"],
  answer_en: "Histology",
  answer_hi: "ऊतक विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which enzyme digests proteins in the stomach?",
  question_hi: "पेट में प्रोटीन को कौन सा एंजाइम पचाता है?",
  options_en: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
  options_hi: ["पेप्सिन", "एमाइलेज", "लाइपेज", "ट्रिप्सिन"],
  answer_en: "Pepsin",
  answer_hi: "पेप्सिन",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which part of the human eye controls the size of the pupil?",
  question_hi: "मानव आंख का कौन सा भाग पुतली के आकार को नियंत्रित करता है?",
  options_en: ["Iris", "Retina", "Cornea", "Lens"],
  options_hi: ["आइरिस", "रेटिना", "कॉर्निया", "लेंस"],
  answer_en: "Iris",
  answer_hi: "आइरिस",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is the powerhouse of the cell called?",
  question_hi: "कोशिका के पावरहाउस को क्या कहा जाता है?",
  options_en: ["Mitochondria", "Nucleus", "Ribosome", "Golgi apparatus"],
  options_hi: ["माइटोकॉन्ड्रिया", "न्यूक्लियस", "राइबोसोम", "गोल्जी उपकरण"],
  answer_en: "Mitochondria",
  answer_hi: "माइटोकॉन्ड्रिया",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which vitamin is essential for blood clotting?",
  question_hi: "रक्त के थक्के जमने के लिए कौन सा विटामिन आवश्यक है?",
  options_en: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the process of cell division called?",
  question_hi: "कोशिका विभाजन की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Mitosis", "Meiosis", "Both", "None"],
  options_hi: ["माइटोसिस", "मियोसिस", "दोनों", "कोई नहीं"],
  answer_en: "Both",
  answer_hi: "दोनों",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which gland in the human body produces insulin?",
  question_hi: "मानव शरीर में कौन सी ग्रंथि इंसुलिन उत्पन्न करती है?",
  options_en: ["Pancreas", "Liver", "Thyroid", "Pituitary"],
  options_hi: ["अग्न्याशय", "यकृत", "थायरॉयड", "पीयूष ग्रंथि"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "What is the smallest bone in the human body?",
  question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
  options_en: ["Stapes", "Femur", "Tibia", "Radius"],
  options_hi: ["स्टेप्स", "फीमर", "टिबिया", "रेडियस"],
  answer_en: "Stapes",
  answer_hi: "स्टेप्स",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which blood group is known as the universal donor?",
  question_hi: "किस रक्त समूह को सार्वभौमिक दाता के रूप में जाना जाता है?",
  options_en: ["O-", "O+", "AB+", "A-"],
  options_hi: ["O-", "O+", "AB+", "A-"],
  answer_en: "O-",
  answer_hi: "O-",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "What is the normal human body temperature in Fahrenheit?",
  question_hi: "मानव शरीर का सामान्य तापमान फारेनहाइट में कितना होता है?",
  options_en: ["98.6°F", "100.4°F", "96.8°F", "102.2°F"],
  options_hi: ["98.6°F", "100.4°F", "96.8°F", "102.2°F"],
  answer_en: "98.6°F",
  answer_hi: "98.6°F",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Which part of the brain controls balance and coordination?",
  question_hi: "मस्तिष्क का कौन सा भाग संतुलन और समन्वय को नियंत्रित करता है?",
  options_en: ["Cerebellum", "Cerebrum", "Medulla", "Hypothalamus"],
  options_hi: ["सेरिबैलम", "सेरेब्रम", "मेडुला", "हाइपोथैलेमस"],
  answer_en: "Cerebellum",
  answer_hi: "सेरिबैलम",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the scientific name of humans?",
  question_hi: "मनुष्य का वैज्ञानिक नाम क्या है?",
  options_en: ["Homo sapiens", "Homo erectus", "Homo habilis", "Pan troglodytes"],
  options_hi: ["होमो सेपियन्स", "होमो इरेक्टस", "होमो हैबिलिस", "पैन ट्रोग्लोडाइट्स"],
  answer_en: "Homo sapiens",
  answer_hi: "होमो सेपियन्स",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which gas do plants release during photosynthesis?",
  question_hi: "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस छोड़ते हैं?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "What is the largest organ in the human body?",
  question_hi: "मानव शरीर का सबसे बड़ा अंग कौन सा है?",
  options_en: ["Skin", "Liver", "Lungs", "Heart"],
  options_hi: ["त्वचा", "यकृत", "फेफड़े", "दिल"],
  answer_en: "Skin",
  answer_hi: "त्वचा",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which vitamin is produced by the human body when exposed to sunlight?",
  question_hi: "मानव शरीर सूर्य के प्रकाश के संपर्क में आने पर कौन सा विटामिन उत्पन्न करता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "What is the process of breaking down food into simpler substances called?",
  question_hi: "भोजन को सरल पदार्थों में तोड़ने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Digestion", "Absorption", "Assimilation", "Excretion"],
  options_hi: ["पाचन", "अवशोषण", "आत्मसात्करण", "उत्सर्जन"],
  answer_en: "Digestion",
  answer_hi: "पाचन",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which part of the plant conducts water and minerals from roots to leaves?",
  question_hi: "पौधे का कौन सा भाग जड़ों से पत्तियों तक पानी और खनिजों का संचालन करता है?",
  options_en: ["Xylem", "Phloem", "Cambium", "Epidermis"],
  options_hi: ["जाइलम", "फ्लोएम", "कैम्बियम", "एपिडर्मिस"],
  answer_en: "Xylem",
  answer_hi: "जाइलम",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is the unit of heredity?",
  question_hi: "आनुवंशिकता की इकाई क्या है?",
  options_en: ["Gene", "Chromosome", "DNA", "RNA"],
  options_hi: ["जीन", "गुणसूत्र", "डीएनए", "आरएनए"],
  answer_en: "Gene",
  answer_hi: "जीन",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which blood cells are responsible for fighting infections?",
  question_hi: "संक्रमण से लड़ने के लिए कौन सी रक्त कोशिकाएं जिम्मेदार हैं?",
  options_en: ["White blood cells", "Red blood cells", "Platelets", "Plasma"],
  options_hi: ["श्वेत रक्त कोशिकाएं", "लाल रक्त कोशिकाएं", "प्लेटलेट्स", "प्लाज्मा"],
  answer_en: "White blood cells",
  answer_hi: "श्वेत रक्त कोशिकाएं",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "What is the process of conversion of light energy into chemical energy by plants called?",
  question_hi: "पौधों द्वारा प्रकाश ऊर्जा को रासायनिक ऊर्जा में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Photosynthesis", "Respiration", "Transpiration", "Fermentation"],
  options_hi: ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "किण्वन"],
  answer_en: "Photosynthesis",
  answer_hi: "प्रकाश संश्लेषण",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Which organelle is responsible for protein synthesis?",
  question_hi: "प्रोटीन संश्लेषण के लिए कौन सा अंगक जिम्मेदार है?",
  options_en: ["Ribosome", "Mitochondria", "Golgi apparatus", "Endoplasmic reticulum"],
  options_hi: ["राइबोसोम", "माइटोकॉन्ड्रिया", "गोल्जी उपकरण", "अंतर्द्रव्यी जालिका"],
  answer_en: "Ribosome",
  answer_hi: "राइबोसोम",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is the chemical formula of chlorophyll?",
  question_hi: "क्लोरोफिल का रासायनिक सूत्र क्या है?",
  options_en: ["C55H72MgN4O5", "C6H12O6", "H2O", "CO2"],
  options_hi: ["C55H72MgN4O5", "C6H12O6", "H2O", "CO2"],
  answer_en: "C55H72MgN4O5",
  answer_hi: "C55H72MgN4O5",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which part of the human digestive system absorbs water?",
  question_hi: "मानव पाचन तंत्र का कौन सा भाग पानी अवशोषित करता है?",
  options_en: ["Large intestine", "Small intestine", "Stomach", "Esophagus"],
  options_hi: ["बड़ी आंत", "छोटी आंत", "पेट", "ग्रासनली"],
  answer_en: "Large intestine",
  answer_hi: "बड़ी आंत",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is the study of birds called?",
  question_hi: "पक्षियों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
  options_hi: ["पक्षीविज्ञान", "कीटविज्ञान", "सरीसृप विज्ञान", "मत्स्य विज्ञान"],
  answer_en: "Ornithology",
  answer_hi: "पक्षीविज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which vitamin deficiency causes beriberi?",
  question_hi: "किस विटामिन की कमी से बेरीबेरी रोग होता है?",
  options_en: ["Vitamin B1", "Vitamin C", "Vitamin D", "Vitamin A"],
  options_hi: ["विटामिन B1", "विटामिन C", "विटामिन D", "विटामिन A"],
  answer_en: "Vitamin B1",
  answer_hi: "विटामिन B1",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "What is the process of cell eating called?",
  question_hi: "कोशिका द्वारा भोजन ग्रहण करने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Phagocytosis", "Pinocytosis", "Diffusion", "Osmosis"],
  options_hi: ["भक्षणाणुता", "पिनोसाइटोसिस", "प्रसार", "परासरण"],
  answer_en: "Phagocytosis",
  answer_hi: "भक्षणाणुता",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which hormone regulates blood sugar levels?",
  question_hi: "कौन सा हार्मोन रक्त शर्करा के स्तर को नियंत्रित करता है?",
  options_en: ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
  options_hi: ["इंसुलिन", "एड्रेनालाईन", "थायरोक्सिन", "एस्ट्रोजन"],
  answer_en: "Insulin",
  answer_hi: "इंसुलिन",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is the longest bone in the human body?",
  question_hi: "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
  options_en: ["Femur", "Tibia", "Fibula", "Humerus"],
  options_hi: ["फीमर", "टिबिया", "फिबुला", "ह्यूमरस"],
  answer_en: "Femur",
  answer_hi: "फीमर",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which part of the flower develops into a fruit?",
  question_hi: "फूल का कौन सा भाग फल में विकसित होता है?",
  options_en: ["Ovary", "Petal", "Stamen", "Sepal"],
  options_hi: ["अंडाशय", "पंखुड़ी", "पुंकेसर", "बाह्यदल"],
  answer_en: "Ovary",
  answer_hi: "अंडाशय",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is the normal pH of human blood?",
  question_hi: "मानव रक्त का सामान्य pH क्या है?",
  options_en: ["7.35-7.45", "6.8-7.0", "8.0-8.5", "5.5-6.5"],
  options_hi: ["7.35-7.45", "6.8-7.0", "8.0-8.5", "5.5-6.5"],
  answer_en: "7.35-7.45",
  answer_hi: "7.35-7.45",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which enzyme is present in saliva and helps in digestion?",
  question_hi: "लार में कौन सा एंजाइम मौजूद होता है और पाचन में मदद करता है?",
  options_en: ["Salivary amylase", "Pepsin", "Trypsin", "Lipase"],
  options_hi: ["लार एमाइलेज", "पेप्सिन", "ट्रिप्सिन", "लाइपेज"],
  answer_en: "Salivary amylase",
  answer_hi: "लार एमाइलेज",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is the study of fossils called?",
  question_hi: "जीवाश्मों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Paleontology", "Archaeology", "Geology", "Anthropology"],
  options_hi: ["जीवाश्म विज्ञान", "पुरातत्व", "भूविज्ञान", "मानव विज्ञान"],
  answer_en: "Paleontology",
  answer_hi: "जीवाश्म विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which gas do humans exhale during respiration?",
  question_hi: "श्वसन के दौरान मनुष्य कौन सी गैस छोड़ते हैं?",
  options_en: ["Carbon dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is the process of shedding old skin in reptiles called?",
  question_hi: "सरीसृपों में पुरानी त्वचा को उतारने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Molting", "Hibernation", "Metamorphosis", "Migration"],
  options_hi: ["मोल्टिंग", "शीतनिद्रा", "कायापलट", "प्रवास"],
  answer_en: "Molting",
  answer_hi: "मोल्टिंग",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which part of the human ear is responsible for maintaining balance?",
  question_hi: "मानव कान का कौन सा भाग संतुलन बनाए रखने के लिए जिम्मेदार है?",
  options_en: ["Semicircular canals", "Cochlea", "Eardrum", "Auditory nerve"],
  options_hi: ["अर्धवृत्ताकार नलिकाएं", "कोक्लीया", "कान का परदा", "श्रवण तंत्रिका"],
  answer_en: "Semicircular canals",
  answer_hi: "अर्धवृत्ताकार नलिकाएं",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "What is the storage form of carbohydrates in plants?",
  question_hi: "पौधों में कार्बोहाइड्रेट का भंडारण रूप क्या है?",
  options_en: ["Starch", "Glycogen", "Cellulose", "Glucose"],
  options_hi: ["स्टार्च", "ग्लाइकोजन", "सेल्यूलोज", "ग्लूकोज"],
  answer_en: "Starch",
  answer_hi: "स्टार्च",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which vitamin deficiency causes scurvy?",
  question_hi: "किस विटामिन की कमी से स्कर्वी रोग होता है?",
  options_en: ["Vitamin C", "Vitamin D", "Vitamin B12", "Vitamin K"],
  options_hi: ["विटामिन C", "विटामिन D", "विटामिन B12", "विटामिन K"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "What is the process of conversion of glucose into alcohol called?",
  question_hi: "ग्लूकोज को अल्कोहल में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Fermentation", "Respiration", "Photosynthesis", "Digestion"],
  options_hi: ["किण्वन", "श्वसन", "प्रकाश संश्लेषण", "पाचन"],
  answer_en: "Fermentation",
  answer_hi: "किण्वन",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which hormone is known as the 'stress hormone'?",
  question_hi: "किस हार्मोन को 'तनाव हार्मोन' के रूप में जाना जाता है?",
  options_en: ["Cortisol", "Insulin", "Thyroxine", "Estrogen"],
  options_hi: ["कोर्टिसोल", "इंसुलिन", "थायरोक्सिन", "एस्ट्रोजन"],
  answer_en: "Cortisol",
  answer_hi: "कोर्टिसोल",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is the study of insects called?",
  question_hi: "कीटों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Entomology", "Ornithology", "Herpetology", "Ichthyology"],
  options_hi: ["कीटविज्ञान", "पक्षीविज्ञान", "सरीसृप विज्ञान", "मत्स्य विज्ञान"],
  answer_en: "Entomology",
  answer_hi: "कीटविज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which part of the human brain controls breathing and heart rate?",
  question_hi: "मानव मस्तिष्क का कौन सा भाग श्वास और हृदय गति को नियंत्रित करता है?",
  options_en: ["Medulla oblongata", "Cerebrum", "Cerebellum", "Hypothalamus"],
  options_hi: ["मेडुला ओब्लोंगाटा", "सेरेब्रम", "सेरिबैलम", "हाइपोथैलेमस"],
  answer_en: "Medulla oblongata",
  answer_hi: "मेडुला ओब्लोंगाटा",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the process of water movement through a plant called?",
  question_hi: "पौधे के माध्यम से जल के संचलन की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Transpiration", "Photosynthesis", "Respiration", "Germination"],
  options_hi: ["वाष्पोत्सर्जन", "प्रकाश संश्लेषण", "श्वसन", "अंकुरण"],
  answer_en: "Transpiration",
  answer_hi: "वाष्पोत्सर्जन",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which mineral is essential for the formation of hemoglobin?",
  question_hi: "हीमोग्लोबिन के निर्माण के लिए कौन सा खनिज आवश्यक है?",
  options_en: ["Iron", "Calcium", "Potassium", "Sodium"],
  options_hi: ["आयरन", "कैल्शियम", "पोटेशियम", "सोडियम"],
  answer_en: "Iron",
  answer_hi: "आयरन",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "What is the study of animal behavior called?",
  question_hi: "पशु व्यवहार के अध्ययन को क्या कहा जाता है?",
  options_en: ["Ethology", "Ecology", "Zoology", "Physiology"],
  options_hi: ["पशु व्यवहार विज्ञान", "पारिस्थितिकी", "प्राणी विज्ञान", "शरीर क्रिया विज्ञान"],
  answer_en: "Ethology",
  answer_hi: "पशु व्यवहार विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which part of the plant carries out photosynthesis?",
  question_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
  options_en: ["Leaves", "Roots", "Stem", "Flowers"],
  options_hi: ["पत्तियां", "जड़ें", "तना", "फूल"],
  answer_en: "Leaves",
  answer_hi: "पत्तियां",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is the process of formation of gametes called?",
  question_hi: "युग्मकों के निर्माण की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Gametogenesis", "Spermatogenesis", "Oogenesis", "Meiosis"],
  options_hi: ["युग्मकजनन", "शुक्राणुजनन", "अंडजनन", "अर्धसूत्री विभाजन"],
  answer_en: "Gametogenesis",
  answer_hi: "युग्मकजनन",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which vitamin deficiency causes rickets?",
  question_hi: "किस विटामिन की कमी से रिकेट्स रोग होता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "What is the study of cells called?",
  question_hi: "कोशिकाओं के अध्ययन को क्या कहा जाता है?",
  options_en: ["Cytology", "Histology", "Pathology", "Embryology"],
  options_hi: ["कोशिका विज्ञान", "ऊतक विज्ञान", "रोग विज्ञान", "भ्रूण विज्ञान"],
  answer_en: "Cytology",
  answer_hi: "कोशिका विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which part of the human respiratory system contains vocal cords?",
  question_hi: "मानव श्वसन तंत्र का कौन सा भाग स्वर तंत्रिकाएं रखता है?",
  options_en: ["Larynx", "Trachea", "Bronchi", "Pharynx"],
  options_hi: ["कंठ", "श्वासनली", "श्वासनलिकाएं", "ग्रसनी"],
  answer_en: "Larynx",
  answer_hi: "कंठ",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the process of conversion of ammonia to urea called?",
  question_hi: "अमोनिया को यूरिया में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Ornithine cycle", "Krebs cycle", "Calvin cycle", "Nitrogen cycle"],
  options_hi: ["ओर्निथिन चक्र", "क्रेब्स चक्र", "केल्विन चक्र", "नाइट्रोजन चक्र"],
  answer_en: "Ornithine cycle",
  answer_hi: "ओर्निथिन चक्र",
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