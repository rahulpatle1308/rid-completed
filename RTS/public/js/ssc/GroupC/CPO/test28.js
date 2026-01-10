const questions = [
  {
  num: 1,
  question_en: "What is the normal human blood sugar level (fasting)?",
  question_hi: "सामान्य मानव रक्त शर्करा स्तर (उपवास) क्या होता है?",
  options_en: ["70-100 mg/dL", "100-125 mg/dL", "126-140 mg/dL", "140-160 mg/dL"],
  options_hi: ["70-100 mg/dL", "100-125 mg/dL", "126-140 mg/dL", "140-160 mg/dL"],
  answer_en: "70-100 mg/dL",
  answer_hi: "70-100 mg/dL",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which part of the human brain is responsible for vision?",
  question_hi: "मानव मस्तिष्क का कौन सा भाग दृष्टि के लिए जिम्मेदार है?",
  options_en: ["Occipital lobe", "Temporal lobe", "Frontal lobe", "Parietal lobe"],
  options_hi: ["ओसीपीटल लोब", "टेम्पोरल लोब", "फ्रंटल लोब", "पैरिटल लोब"],
  answer_en: "Occipital lobe",
  answer_hi: "ओसीपीटल लोब",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the scientific name of the modern human?",
  question_hi: "आधुनिक मानव का वैज्ञानिक नाम क्या है?",
  options_en: ["Homo sapiens", "Homo erectus", "Homo habilis", "Homo neanderthalensis"],
  options_hi: ["होमो सेपियन्स", "होमो इरेक्टस", "होमो हैबिलिस", "होमो निएंडरथलेंसिस"],
  answer_en: "Homo sapiens",
  answer_hi: "होमो सेपियन्स",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Which hormone regulates blood calcium levels?",
  question_hi: "कौन सा हार्मोन रक्त कैल्शियम स्तर को नियंत्रित करता है?",
  options_en: ["Insulin", "Parathyroid hormone", "Thyroxine", "Adrenaline"],
  options_hi: ["इंसुलिन", "पैराथाइरॉइड हार्मोन", "थायरोक्सिन", "एड्रेनालाईन"],
  answer_en: "Parathyroid hormone",
  answer_hi: "पैराथाइरॉइड हार्मोन",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "What is the lifespan of human red blood cells?",
  question_hi: "मानव लाल रक्त कोशिकाओं का जीवनकाल कितना होता है?",
  options_en: ["30 days", "60 days", "90 days", "120 days"],
  options_hi: ["30 दिन", "60 दिन", "90 दिन", "120 दिन"],
  answer_en: "120 days",
  answer_hi: "120 दिन",
  attempted: false,
  selected: ""
},
{
  num: 6,
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
  num: 7,
  question_en: "What is the total number of teeth in an adult human?",
  question_hi: "वयस्क मानव में दांतों की कुल संख्या कितनी होती है?",
  options_en: ["28", "30", "32", "34"],
  options_hi: ["28", "30", "32", "34"],
  answer_en: "32",
  answer_hi: "32",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which gland is known as the 'master gland'?",
  question_hi: "किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
  options_en: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
  options_hi: ["थायराइड", "पिट्यूटरी", "अधिवृक्क", "अग्न्याशय"],
  answer_en: "Pituitary",
  answer_hi: "पिट्यूटरी",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is the process of formation of blood cells called?",
  question_hi: "रक्त कोशिकाओं के निर्माण की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Hemolysis", "Hemopoiesis", "Hemostasis", "Hematuria"],
  options_hi: ["हीमोलिसिस", "हेमोपोएसिस", "हेमोस्टेसिस", "हेमेचुरिया"],
  answer_en: "Hemopoiesis",
  answer_hi: "हेमोपोएसिस",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which part of the eye contains photoreceptor cells?",
  question_hi: "आंख का कौन सा भाग फोटोरिसेप्टर कोशिकाओं को रखता है?",
  options_en: ["Cornea", "Iris", "Retina", "Lens"],
  options_hi: ["कॉर्निया", "आइरिस", "रेटिना", "लेंस"],
  answer_en: "Retina",
  answer_hi: "रेटिना",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "What is the functional unit of the kidney?",
  question_hi: "किडनी की कार्यात्मक इकाई क्या है?",
  options_en: ["Neuron", "Nephron", "Alveoli", "Hepatocyte"],
  options_hi: ["न्यूरॉन", "नेफ्रॉन", "एल्विओली", "हेपेटोसाइट"],
  answer_en: "Nephron",
  answer_hi: "नेफ्रॉन",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which vitamin is essential for proper blood coagulation?",
  question_hi: "उचित रक्त जमावट के लिए कौन सा विटामिन आवश्यक है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन के"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन के",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the normal human hemoglobin level for males?",
  question_hi: "पुरुषों के लिए सामान्य मानव हीमोग्लोबिन स्तर क्या है?",
  options_en: ["10-12 g/dL", "12-14 g/dL", "14-16 g/dL", "16-18 g/dL"],
  options_hi: ["10-12 g/dL", "12-14 g/dL", "14-16 g/dL", "16-18 g/dL"],
  answer_en: "14-16 g/dL",
  answer_hi: "14-16 g/dL",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which part of the plant is modified into a carrot?",
  question_hi: "पौधे का कौन सा भाग गाजर में रूपांतरित होता है?",
  options_en: ["Stem", "Root", "Leaf", "Flower"],
  options_hi: ["तना", "जड़", "पत्ती", "फूल"],
  answer_en: "Root",
  answer_hi: "जड़",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the process of exchange of gases in plants called?",
  question_hi: "पौधों में गैसों के आदान-प्रदान की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Photosynthesis", "Respiration", "Transpiration", "Guttation"],
  options_hi: ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "बूंदाबांदी"],
  answer_en: "Respiration",
  answer_hi: "श्वसन",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which blood vessels carry blood away from the heart?",
  question_hi: "कौन सी रक्त वाहिकाएं हृदय से रक्त ले जाती हैं?",
  options_en: ["Veins", "Arteries", "Capillaries", "Venules"],
  options_hi: ["शिराएं", "धमनियां", "केशिकाएं", "वेन्यूल्स"],
  answer_en: "Arteries",
  answer_hi: "धमनियां",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the study of fossils called?",
  question_hi: "जीवाश्मों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Paleontology", "Archaeology", "Geology", "Anthropology"],
  options_hi: ["जीवाश्म विज्ञान", "पुरातत्व विज्ञान", "भूविज्ञान", "मानव विज्ञान"],
  answer_en: "Paleontology",
  answer_hi: "जीवाश्म विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which organ produces bile juice?",
  question_hi: "कौन सा अंग पित्त रस उत्पन्न करता है?",
  options_en: ["Pancreas", "Liver", "Gallbladder", "Stomach"],
  options_hi: ["अग्न्याशय", "यकृत", "पित्ताशय", "आमाशय"],
  answer_en: "Liver",
  answer_hi: "यकृत",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is the chemical formula of chlorophyll?",
  question_hi: "क्लोरोफिल का रासायनिक सूत्र क्या है?",
  options_en: ["C55H72O5N4Mg", "C55H70O6N4Mg", "C55H68O8N4Mg", "C55H66O10N4Mg"],
  options_hi: ["C55H72O5N4Mg", "C55H70O6N4Mg", "C55H68O8N4Mg", "C55H66O10N4Mg"],
  answer_en: "C55H72O5N4Mg",
  answer_hi: "C55H72O5N4Mg",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which part of the human ear is responsible for maintaining balance?",
  question_hi: "मानव कान का कौन सा भाग संतुलन बनाए रखने के लिए जिम्मेदार है?",
  options_en: ["Cochlea", "Eardrum", "Eustachian tube", "Semicircular canals"],
  options_hi: ["कोक्लीया", "कान का पर्दा", "यूस्टेशियन ट्यूब", "अर्धवृत्ताकार नलिकाएं"],
  answer_en: "Semicircular canals",
  answer_hi: "अर्धवृत्ताकार नलिकाएं",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is the process of cell eating called?",
  question_hi: "कोशिका द्वारा भोजन खाने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Pinocytosis", "Phagocytosis", "Exocytosis", "Endocytosis"],
  options_hi: ["पिनोसाइटोसिस", "फैगोसाइटोसिस", "एक्सोसाइटोसिस", "एंडोसाइटोसिस"],
  answer_en: "Phagocytosis",
  answer_hi: "फैगोसाइटोसिस",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which hormone is known as the 'stress hormone'?",
  question_hi: "किस हार्मोन को 'तनाव हार्मोन' के रूप में जाना जाता है?",
  options_en: ["Insulin", "Adrenaline", "Thyroxine", "Estrogen"],
  options_hi: ["इंसुलिन", "एड्रेनालाईन", "थायरोक्सिन", "एस्ट्रोजन"],
  answer_en: "Adrenaline",
  answer_hi: "एड्रेनालाईन",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is the largest artery in the human body?",
  question_hi: "मानव शरीर की सबसे बड़ी धमनी कौन सी है?",
  options_en: ["Pulmonary artery", "Aorta", "Carotid artery", "Femoral artery"],
  options_hi: ["फुफ्फुसीय धमनी", "महाधमनी", "कैरोटिड धमनी", "फीमोरल धमनी"],
  answer_en: "Aorta",
  answer_hi: "महाधमनी",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which plant hormone promotes cell division?",
  question_hi: "कौन सा पादप हार्मोन कोशिका विभाजन को बढ़ावा देता है?",
  options_en: ["Auxin", "Gibberellin", "Cytokinin", "Abscisic acid"],
  options_hi: ["ऑक्सिन", "जिबरेलिन", "साइटोकिनिन", "एब्सिसिक अम्ल"],
  answer_en: "Cytokinin",
  answer_hi: "साइटोकिनिन",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is the process of water loss from plant leaves called?",
  question_hi: "पौधों की पत्तियों से पानी की हानि की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Photosynthesis", "Respiration", "Transpiration", "Guttation"],
  options_hi: ["प्रकाश संश्लेषण", "श्वसन", "वाष्पोत्सर्जन", "बूंदाबांदी"],
  answer_en: "Transpiration",
  answer_hi: "वाष्पोत्सर्जन",
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
  question_en: "What is the normal human platelet count?",
  question_hi: "सामान्य मानव प्लेटलेट गणना क्या है?",
  options_en: ["10,000-50,000/μL", "50,000-1,00,000/μL", "1,50,000-4,00,000/μL", "5,00,000-10,00,000/μL"],
  options_hi: ["10,000-50,000/μL", "50,000-1,00,000/μL", "1,50,000-4,00,000/μL", "5,00,000-10,00,000/μL"],
  answer_en: "1,50,000-4,00,000/μL",
  answer_hi: "1,50,000-4,00,000/μL",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which enzyme converts starch into sugar?",
  question_hi: "कौन सा एंजाइम स्टार्च को शर्करा में परिवर्तित करता है?",
  options_en: ["Pepsin", "Amylase", "Lipase", "Trypsin"],
  options_hi: ["पेप्सिन", "एमाइलेज", "लाइपेज", "ट्रिप्सिन"],
  answer_en: "Amylase",
  answer_hi: "एमाइलेज",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the process of conversion of light energy into chemical energy called?",
  question_hi: "प्रकाश ऊर्जा को रासायनिक ऊर्जा में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Respiration", "Photosynthesis", "Transpiration", "Fermentation"],
  options_hi: ["श्वसन", "प्रकाश संश्लेषण", "वाष्पोत्सर्जन", "किण्वन"],
  answer_en: "Photosynthesis",
  answer_hi: "प्रकाश संश्लेषण",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which vitamin deficiency causes pernicious anemia?",
  question_hi: "किस विटामिन की कमी से पर्निशियस एनीमिया होता है?",
  options_en: ["Vitamin B12", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन बी12", "विटामिन सी", "विटामिन डी", "विटामिन के"],
  answer_en: "Vitamin B12",
  answer_hi: "विटामिन बी12",
  attempted: false,
  selected: ""
},
{
  num: 31,
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
  num: 32,
  question_en: "Which part of the human brain controls hunger and thirst?",
  question_hi: "मानव मस्तिष्क का कौन सा भाग भूख और प्यास को नियंत्रित करता है?",
  options_en: ["Cerebrum", "Cerebellum", "Hypothalamus", "Medulla"],
  options_hi: ["सेरेब्रम", "सेरेबेलम", "हाइपोथैलेमस", "मेडुला"],
  answer_en: "Hypothalamus",
  answer_hi: "हाइपोथैलेमस",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the process of formation of gametes called?",
  question_hi: "युग्मकों के निर्माण की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Mitosis", "Meiosis", "Fission", "Budding"],
  options_hi: ["सूत्री विभाजन", "अर्धसूत्री विभाजन", "द्विखंडन", "कलिकायन"],
  answer_en: "Meiosis",
  answer_hi: "अर्धसूत्री विभाजन",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which hormone is produced by the pineal gland?",
  question_hi: "पीनियल ग्रंथि द्वारा कौन सा हार्मोन उत्पन्न किया जाता है?",
  options_en: ["Melatonin", "Serotonin", "Dopamine", "Adrenaline"],
  options_hi: ["मेलाटोनिन", "सेरोटोनिन", "डोपामाइन", "एड्रेनालाईन"],
  answer_en: "Melatonin",
  answer_hi: "मेलाटोनिन",
  attempted: false,
  selected: ""
},
{
  num: 35,
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
  num: 36,
  question_en: "Which part of the plant is modified into an onion?",
  question_hi: "पौधे का कौन सा भाग प्याज में रूपांतरित होता है?",
  options_en: ["Stem", "Root", "Leaf", "Bulb"],
  options_hi: ["तना", "जड़", "पत्ती", "कंद"],
  answer_en: "Bulb",
  answer_hi: "कंद",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the process of conversion of glucose into energy without oxygen called?",
  question_hi: "ऑक्सीजन के बिना ग्लूकोज को ऊर्जा में परिवर्तित करने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Aerobic respiration", "Anaerobic respiration", "Photosynthesis", "Fermentation"],
  options_hi: ["ऑक्सी श्वसन", "अनॉक्सी श्वसन", "प्रकाश संश्लेषण", "किण्वन"],
  answer_en: "Anaerobic respiration",
  answer_hi: "अनॉक्सी श्वसन",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which vitamin is also known as riboflavin?",
  question_hi: "किस विटामिन को राइबोफ्लेविन के रूप में भी जाना जाता है?",
  options_en: ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
  options_hi: ["विटामिन बी1", "विटामिन बी2", "विटामिन बी6", "विटामिन बी12"],
  answer_en: "Vitamin B2",
  answer_hi: "विटामिन बी2",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is the process of cell drinking called?",
  question_hi: "कोशिका द्वारा पीने की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Phagocytosis", "Pinocytosis", "Exocytosis", "Endocytosis"],
  options_hi: ["फैगोसाइटोसिस", "पिनोसाइटोसिस", "एक्सोसाइटोसिस", "एंडोसाइटोसिस"],
  answer_en: "Pinocytosis",
  answer_hi: "पिनोसाइटोसिस",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which part of the human eye controls the size of the pupil?",
  question_hi: "मानव आंख का कौन सा भाग पुतली के आकार को नियंत्रित करता है?",
  options_en: ["Cornea", "Iris", "Retina", "Lens"],
  options_hi: ["कॉर्निया", "आइरिस", "रेटिना", "लेंस"],
  answer_en: "Iris",
  answer_hi: "आइरिस",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the study of the structure of organisms called?",
  question_hi: "जीवों की संरचना के अध्ययन को क्या कहा जाता है?",
  options_en: ["Physiology", "Anatomy", "Pathology", "Histology"],
  options_hi: ["शरीर क्रिया विज्ञान", "शरीर रचना विज्ञान", "रोगविज्ञान", "ऊतक विज्ञान"],
  answer_en: "Anatomy",
  answer_hi: "शरीर रचना विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which hormone regulates the menstrual cycle in females?",
  question_hi: "महिलाओं में मासिक धर्म चक्र को कौन सा हार्मोन नियंत्रित करता है?",
  options_en: ["Estrogen and progesterone", "Testosterone", "Thyroxine", "Insulin"],
  options_hi: ["एस्ट्रोजन और प्रोजेस्टेरोन", "टेस्टोस्टेरोन", "थायरोक्सिन", "इंसुलिन"],
  answer_en: "Estrogen and progesterone",
  answer_hi: "एस्ट्रोजन और प्रोजेस्टेरोन",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the process of formation of urine called?",
  question_hi: "मूत्र के निर्माण की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Filtration", "Reabsorption", "Secretion", "All of these"],
  options_hi: ["छानना", "पुन: अवशोषण", "स्राव", "ये सभी"],
  answer_en: "All of these",
  answer_hi: "ये सभी",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which part of the plant conducts food from leaves to other parts?",
  question_hi: "पौधे का कौन सा भाग पत्तियों से अन्य भागों तक भोजन का संचालन करता है?",
  options_en: ["Xylem", "Phloem", "Cambium", "Epidermis"],
  options_hi: ["जाइलम", "फ्लोएम", "कैंबियम", "एपिडर्मिस"],
  answer_en: "Phloem",
  answer_hi: "फ्लोएम",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the study of the functioning of living organisms called?",
  question_hi: "जीवित जीवों के कार्यों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Anatomy", "Physiology", "Pathology", "Histology"],
  options_hi: ["शरीर रचना विज्ञान", "शरीर क्रिया विज्ञान", "रोगविज्ञान", "ऊतक विज्ञान"],
  answer_en: "Physiology",
  answer_hi: "शरीर क्रिया विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which vitamin is synthesized by bacteria in the human intestine?",
  question_hi: "मानव आंत में बैक्टीरिया द्वारा कौन सा विटामिन संश्लेषित किया जाता है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन के"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन के",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the process of cell division in somatic cells called?",
  question_hi: "दैहिक कोशिकाओं में कोशिका विभाजन की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Mitosis", "Meiosis", "Fission", "Budding"],
  options_hi: ["सूत्री विभाजन", "अर्धसूत्री विभाजन", "द्विखंडन", "कलिकायन"],
  answer_en: "Mitosis",
  answer_hi: "सूत्री विभाजन",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which part of the human brain controls voluntary movements?",
  question_hi: "मानव मस्तिष्क का कौन सा भाग ऐच्छिक गतिविधियों को नियंत्रित करता है?",
  options_en: ["Cerebrum", "Cerebellum", "Medulla", "Hypothalamus"],
  options_hi: ["सेरेब्रम", "सेरेबेलम", "मेडुला", "हाइपोथैलेमस"],
  answer_en: "Cerebrum",
  answer_hi: "सेरेब्रम",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the study of reptiles and amphibians called?",
  question_hi: "सरीसृपों और उभयचरों के अध्ययन को क्या कहा जाता है?",
  options_en: ["Ornithology", "Entomology", "Herpetology", "Ichthyology"],
  options_hi: ["पक्षीविज्ञान", "कीटविज्ञान", "सरीसृप विज्ञान", "मत्स्य विज्ञान"],
  answer_en: "Herpetology",
  answer_hi: "सरीसृप विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which plant hormone is responsible for fruit ripening?",
  question_hi: "फल पकने के लिए कौन सा पादप हार्मोन जिम्मेदार है?",
  options_en: ["Auxin", "Gibberellin", "Ethylene", "Abscisic acid"],
  options_hi: ["ऑक्सिन", "जिबरेलिन", "एथिलीन", "एब्सिसिक अम्ल"],
  answer_en: "Ethylene",
  answer_hi: "एथिलीन",
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