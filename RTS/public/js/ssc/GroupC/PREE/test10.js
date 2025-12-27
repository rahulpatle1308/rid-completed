const questions = [
 {
  num: 1,
  question_en: "Deficiency of Vitamin A causes which disease?",
  question_hi: "विटामिन A की कमी से कौन-सा रोग होता है?",
  options_en: ["Night blindness", "Scurvy", "Rickets", "Beriberi"],
  options_hi: ["रतौंधी", "स्कर्वी", "रिकेट्स", "बेरी-बेरी"],
  answer_en: "Night blindness",
  answer_hi: "रतौंधी",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which nutrient is mainly responsible for body building?",
  question_hi: "शरीर निर्माण के लिए मुख्य रूप से कौन-सा पोषक तत्व जिम्मेदार है?",
  options_en: ["Protein", "Carbohydrate", "Fat", "Vitamin"],
  options_hi: ["प्रोटीन", "कार्बोहाइड्रेट", "वसा", "विटामिन"],
  answer_en: "Protein",
  answer_hi: "प्रोटीन",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Deficiency of Vitamin C causes?",
  question_hi: "विटामिन C की कमी से क्या होता है?",
  options_en: ["Scurvy", "Rickets", "Beriberi", "Goitre"],
  options_hi: ["स्कर्वी", "रिकेट्स", "बेरी-बेरी", "घेंघा"],
  answer_en: "Scurvy",
  answer_hi: "स्कर्वी",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Which mineral is essential for hemoglobin formation?",
  question_hi: "हीमोग्लोबिन निर्माण के लिए कौन-सा खनिज आवश्यक है?",
  options_en: ["Iron", "Calcium", "Iodine", "Sodium"],
  options_hi: ["लोहा", "कैल्शियम", "आयोडीन", "सोडियम"],
  answer_en: "Iron",
  answer_hi: "लोहा",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which vitamin helps in blood clotting?",
  question_hi: "रक्त के थक्के जमने में कौन-सा विटामिन सहायक है?",
  options_en: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Deficiency of iodine causes?",
  question_hi: "आयोडीन की कमी से क्या होता है?",
  options_en: ["Goitre", "Anaemia", "Scurvy", "Rickets"],
  options_hi: ["घेंघा", "एनीमिया", "स्कर्वी", "रिकेट्स"],
  answer_en: "Goitre",
  answer_hi: "घेंघा",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which vitamin is known as sunshine vitamin?",
  question_hi: "किस विटामिन को सनशाइन विटामिन कहा जाता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin B", "Vitamin C"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन B", "विटामिन C"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which nutrient provides maximum energy?",
  question_hi: "कौन-सा पोषक तत्व सबसे अधिक ऊर्जा देता है?",
  options_en: ["Fat", "Protein", "Vitamin", "Mineral"],
  options_hi: ["वसा", "प्रोटीन", "विटामिन", "खनिज"],
  answer_en: "Fat",
  answer_hi: "वसा",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which organ produces insulin?",
  question_hi: "इंसुलिन किस अंग से स्रावित होता है?",
  options_en: ["Pancreas", "Liver", "Kidney", "Heart"],
  options_hi: ["अग्न्याशय", "यकृत", "गुर्दा", "हृदय"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Deficiency of Vitamin B1 causes?",
  question_hi: "विटामिन B1 की कमी से कौन-सा रोग होता है?",
  options_en: ["Beriberi", "Scurvy", "Rickets", "Night blindness"],
  options_hi: ["बेरी-बेरी", "स्कर्वी", "रिकेट्स", "रतौंधी"],
  answer_en: "Beriberi",
  answer_hi: "बेरी-बेरी",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "Which blood cells help in immunity?",
  question_hi: "कौन-सी रक्त कोशिकाएँ प्रतिरक्षा में सहायक होती हैं?",
  options_en: ["WBC", "RBC", "Platelets", "Plasma"],
  options_hi: ["श्वेत रक्त कण", "लाल रक्त कण", "प्लेटलेट्स", "प्लाज्मा"],
  answer_en: "WBC",
  answer_hi: "श्वेत रक्त कण",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which nutrient helps in growth and repair of tissues?",
  question_hi: "ऊतकों की वृद्धि और मरम्मत में कौन-सा पोषक तत्व सहायक है?",
  options_en: ["Protein", "Fat", "Carbohydrate", "Mineral"],
  options_hi: ["प्रोटीन", "वसा", "कार्बोहाइड्रेट", "खनिज"],
  answer_en: "Protein",
  answer_hi: "प्रोटीन",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which disease is caused by lack of Vitamin D?",
  question_hi: "विटामिन D की कमी से कौन-सा रोग होता है?",
  options_en: ["Rickets", "Scurvy", "Beriberi", "Goitre"],
  options_hi: ["रिकेट्स", "स्कर्वी", "बेरी-बेरी", "घेंघा"],
  answer_en: "Rickets",
  answer_hi: "रिकेट्स",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which mineral is important for strong bones?",
  question_hi: "मजबूत हड्डियों के लिए कौन-सा खनिज आवश्यक है?",
  options_en: ["Calcium", "Iron", "Iodine", "Sodium"],
  options_hi: ["कैल्शियम", "लोहा", "आयोडीन", "सोडियम"],
  answer_en: "Calcium",
  answer_hi: "कैल्शियम",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which vitamin is essential for healthy skin?",
  question_hi: "स्वस्थ त्वचा के लिए कौन-सा विटामिन आवश्यक है?",
  options_en: ["Vitamin A", "Vitamin D", "Vitamin K", "Vitamin B12"],
  options_hi: ["विटामिन A", "विटामिन D", "विटामिन K", "विटामिन B12"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन A",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which vitamin is essential for vision?",
  question_hi: "दृष्टि के लिए कौन-सा विटामिन आवश्यक है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन A",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which nutrient is the main source of energy?",
  question_hi: "ऊर्जा का मुख्य स्रोत कौन-सा पोषक तत्व है?",
  options_en: ["Carbohydrate", "Protein", "Vitamin", "Mineral"],
  options_hi: ["कार्बोहाइड्रेट", "प्रोटीन", "विटामिन", "खनिज"],
  answer_en: "Carbohydrate",
  answer_hi: "कार्बोहाइड्रेट",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Deficiency of iron causes which disease?",
  question_hi: "लौह (आयरन) की कमी से कौन-सा रोग होता है?",
  options_en: ["Anaemia", "Goitre", "Scurvy", "Rickets"],
  options_hi: ["एनीमिया", "घेंघा", "स्कर्वी", "रिकेट्स"],
  answer_en: "Anaemia",
  answer_hi: "एनीमिया",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which organ stores bile juice?",
  question_hi: "पित्त रस का संग्रह किस अंग में होता है?",
  options_en: ["Gall bladder", "Liver", "Pancreas", "Stomach"],
  options_hi: ["पित्ताशय", "यकृत", "अग्न्याशय", "आमाशय"],
  answer_en: "Gall bladder",
  answer_hi: "पित्ताशय",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which vitamin prevents night blindness?",
  question_hi: "रतौंधी से बचाव कौन-सा विटामिन करता है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन A",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Which gas is used in respiration?",
  question_hi: "श्वसन क्रिया में कौन-सी गैस उपयोग होती है?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which vitamin helps in wound healing?",
  question_hi: "घाव भरने में कौन-सा विटामिन सहायक है?",
  options_en: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which organ controls all body activities?",
  question_hi: "शरीर की सभी क्रियाओं को नियंत्रित करने वाला अंग कौन-सा है?",
  options_en: ["Brain", "Heart", "Liver", "Kidney"],
  options_hi: ["मस्तिष्क", "हृदय", "यकृत", "गुर्दा"],
  answer_en: "Brain",
  answer_hi: "मस्तिष्क",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Deficiency of Vitamin B12 causes?",
  question_hi: "विटामिन B12 की कमी से क्या होता है?",
  options_en: ["Anaemia", "Rickets", "Scurvy", "Goitre"],
  options_hi: ["एनीमिया", "रिकेट्स", "स्कर्वी", "घेंघा"],
  answer_en: "Anaemia",
  answer_hi: "एनीमिया",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which nutrient protects body organs?",
  question_hi: "शरीर के अंगों की सुरक्षा कौन-सा पोषक तत्व करता है?",
  options_en: ["Fat", "Protein", "Carbohydrate", "Vitamin"],
  options_hi: ["वसा", "प्रोटीन", "कार्बोहाइड्रेट", "विटामिन"],
  answer_en: "Fat",
  answer_hi: "वसा",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which blood cells help in clotting?",
  question_hi: "रक्त का थक्का जमाने में कौन-सी कोशिकाएँ सहायक होती हैं?",
  options_en: ["Platelets", "RBC", "WBC", "Plasma"],
  options_hi: ["प्लेटलेट्स", "RBC", "WBC", "प्लाज्मा"],
  answer_en: "Platelets",
  answer_hi: "प्लेटलेट्स",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which mineral is needed for thyroid gland?",
  question_hi: "थायरॉयड ग्रंथि के लिए कौन-सा खनिज आवश्यक है?",
  options_en: ["Iodine", "Iron", "Calcium", "Sodium"],
  options_hi: ["आयोडीन", "लोहा", "कैल्शियम", "सोडियम"],
  answer_en: "Iodine",
  answer_hi: "आयोडीन",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which organ helps in digestion of food?",
  question_hi: "भोजन के पाचन में सहायक अंग कौन-सा है?",
  options_en: ["Stomach", "Heart", "Lungs", "Kidney"],
  options_hi: ["आमाशय", "हृदय", "फेफड़े", "गुर्दा"],
  answer_en: "Stomach",
  answer_hi: "आमाशय",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which vitamin helps in calcium absorption?",
  question_hi: "कैल्शियम के अवशोषण में कौन-सा विटामिन सहायक है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which organ is known as blood bank of the body?",
  question_hi: "शरीर का ब्लड बैंक किस अंग को कहा जाता है?",
  options_en: ["Spleen", "Liver", "Heart", "Kidney"],
  options_hi: ["तिल्ली", "यकृत", "हृदय", "गुर्दा"],
  answer_en: "Spleen",
  answer_hi: "तिल्ली",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which nutrient prevents constipation?",
  question_hi: "कब्ज से बचाव में कौन-सा पोषक तत्व सहायक है?",
  options_en: ["Fiber", "Protein", "Fat", "Vitamin"],
  options_hi: ["रेशा", "प्रोटीन", "वसा", "विटामिन"],
  answer_en: "Fiber",
  answer_hi: "रेशा",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which organ removes urea from blood?",
  question_hi: "रक्त से यूरिया निकालने वाला अंग कौन-सा है?",
  options_en: ["Kidney", "Liver", "Heart", "Lungs"],
  options_hi: ["गुर्दा", "यकृत", "हृदय", "फेफड़े"],
  answer_en: "Kidney",
  answer_hi: "गुर्दा",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which vitamin is soluble in water?",
  question_hi: "कौन-सा विटामिन पानी में घुलनशील है?",
  options_en: ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which part of blood carries oxygen?",
  question_hi: "रक्त का कौन-सा भाग ऑक्सीजन ले जाता है?",
  options_en: ["RBC", "WBC", "Platelets", "Plasma"],
  options_hi: ["RBC", "WBC", "प्लेटलेट्स", "प्लाज्मा"],
  answer_en: "RBC",
  answer_hi: "RBC",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which mineral is required for strong teeth?",
  question_hi: "मजबूत दाँतों के लिए कौन-सा खनिज आवश्यक है?",
  options_en: ["Calcium", "Iron", "Iodine", "Sodium"],
  options_hi: ["कैल्शियम", "लोहा", "आयोडीन", "सोडियम"],
  answer_en: "Calcium",
  answer_hi: "कैल्शियम",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which vitamin helps in immunity?",
  question_hi: "प्रतिरक्षा शक्ति बढ़ाने में कौन-सा विटामिन सहायक है?",
  options_en: ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin K"],
  options_hi: ["विटामिन C", "विटामिन D", "विटामिन A", "विटामिन K"],
  answer_en: "Vitamin C",
  answer_hi: "विटामिन C",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which organ pumps blood in body?",
  question_hi: "शरीर में रक्त पंप करने वाला अंग कौन-सा है?",
  options_en: ["Heart", "Liver", "Kidney", "Brain"],
  options_hi: ["हृदय", "यकृत", "गुर्दा", "मस्तिष्क"],
  answer_en: "Heart",
  answer_hi: "हृदय",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Deficiency of which vitamin causes bleeding?",
  question_hi: "किस विटामिन की कमी से रक्तस्राव होता है?",
  options_en: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin K",
  answer_hi: "विटामिन K",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which nutrient helps in body repair?",
  question_hi: "शरीर की मरम्मत में कौन-सा पोषक तत्व सहायक है?",
  options_en: ["Protein", "Fat", "Carbohydrate", "Mineral"],
  options_hi: ["प्रोटीन", "वसा", "कार्बोहाइड्रेट", "खनिज"],
  answer_en: "Protein",
  answer_hi: "प्रोटीन",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which organ helps in breathing?",
  question_hi: "श्वसन में सहायक अंग कौन-सा है?",
  options_en: ["Lungs", "Heart", "Kidney", "Liver"],
  options_hi: ["फेफड़े", "हृदय", "गुर्दा", "यकृत"],
  answer_en: "Lungs",
  answer_hi: "फेफड़े",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which vitamin is fat soluble?",
  question_hi: "कौन-सा विटामिन वसा में घुलनशील है?",
  options_en: ["Vitamin A", "Vitamin C", "Vitamin B", "Vitamin B12"],
  options_hi: ["विटामिन A", "विटामिन C", "विटामिन B", "विटामिन B12"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन A",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which mineral helps in nerve function?",
  question_hi: "तंत्रिका क्रिया में कौन-सा खनिज सहायक है?",
  options_en: ["Sodium", "Iron", "Calcium", "Iodine"],
  options_hi: ["सोडियम", "लोहा", "कैल्शियम", "आयोडीन"],
  answer_en: "Sodium",
  answer_hi: "सोडियम",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which disease is caused by lack of balanced diet?",
  question_hi: "संतुलित आहार की कमी से कौन-सा रोग होता है?",
  options_en: ["Malnutrition", "Diabetes", "Cancer", "Asthma"],
  options_hi: ["कुपोषण", "मधुमेह", "कैंसर", "दमा"],
  answer_en: "Malnutrition",
  answer_hi: "कुपोषण",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which organ secretes digestive enzymes?",
  question_hi: "पाचन एंजाइम स्रावित करने वाला अंग कौन-सा है?",
  options_en: ["Pancreas", "Heart", "Kidney", "Lungs"],
  options_hi: ["अग्न्याशय", "हृदय", "गुर्दा", "फेफड़े"],
  answer_en: "Pancreas",
  answer_hi: "अग्न्याशय",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which vitamin prevents rickets?",
  question_hi: "रिकेट्स से बचाव कौन-सा विटामिन करता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which part of plant makes food?",
  question_hi: "पौधे का कौन-सा भाग भोजन बनाता है?",
  options_en: ["Leaf", "Root", "Stem", "Flower"],
  options_hi: ["पत्ती", "जड़", "तना", "फूल"],
  answer_en: "Leaf",
  answer_hi: "पत्ती",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which gas is released during photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के दौरान कौन-सी गैस निकलती है?",
  options_en: ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which vitamin is called anti-sterility vitamin?",
  question_hi: "एंटी-स्टेरिलिटी विटामिन किसे कहा जाता है?",
  options_en: ["Vitamin E", "Vitamin A", "Vitamin D", "Vitamin K"],
  options_hi: ["विटामिन E", "विटामिन A", "विटामिन D", "विटामिन K"],
  answer_en: "Vitamin E",
  answer_hi: "विटामिन E",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which organ helps in detoxification?",
  question_hi: "विषहरण (डिटॉक्सिफिकेशन) में सहायक अंग कौन-सा है?",
  options_en: ["Liver", "Heart", "Kidney", "Lungs"],
  options_hi: ["यकृत", "हृदय", "गुर्दा", "फेफड़े"],
  answer_en: "Liver",
  answer_hi: "यकृत",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which organ purifies blood in human body?",
  question_hi: "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन-सा है?",
  options_en: ["Kidney", "Liver", "Heart", "Lungs"],
  options_hi: ["गुर्दा", "यकृत", "हृदय", "फेफड़े"],
  answer_en: "Kidney",
  answer_hi: "गुर्दा",
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