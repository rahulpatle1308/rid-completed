const questions = [
  {
    num:1,
    "question_en": "Which Indian state is the largest by area?",
    "question_hi": "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
    "options_en": ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    num:2,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "हंसाने वाली गैस किसे कहते हैं?",
    "options_en": ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Methane"],
    "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "मीथेन"],
    "answer_en": "Nitrous Oxide",
    "answer_hi": "नाइट्रस ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:3,
    "question_en": "Who wrote the National Anthem of India?",
    "question_hi": "भारत का राष्ट्रगान किसने लिखा?",
    "options_en": ["Rabindranath Tagore", "Bankim Chandra", "Sarojini Naidu", "Subhash Bose"],
    "options_hi": ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "सरोजिनी नायडू", "सुभाष बोस"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    num:4,
    "question_en": "Which is the longest river in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
    "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    num:5,
    "question_en": "Which vitamin is called sunshine vitamin?",
    "question_hi": "सनशाइन विटामिन किसे कहते हैं?",
    "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
    "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    num:6,
    "question_en": "Which country is known as the Land of Rising Sun?",
    "question_hi": "उगते सूर्य की भूमि किस देश को कहा जाता है?",
    "options_en": ["Japan", "China", "Thailand", "Korea"],
    "options_hi": ["जापान", "चीन", "थाईलैंड", "कोरिया"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    num:7,
    "question_en": "Which instrument is used to measure blood pressure?",
    "question_hi": "रक्तचाप मापने का यंत्र कौन सा है?",
    "options_en": ["Sphygmomanometer", "Thermometer", "Barometer", "Hygrometer"],
    "options_hi": ["स्फिग्मोमैनोमीटर", "थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर"],
    "answer_en": "Sphygmomanometer",
    "answer_hi": "स्फिग्मोमैनोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    num:8,
    "question_en": "Which Indian state is known as the Spice Garden of India?",
    "question_hi": "भारत का मसाला बागान किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Assam"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "असम"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    num:9,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
    "options_en": ["Mercury", "Iron", "Gold", "Copper"],
    "options_hi": ["पारा", "लोहा", "सोना", "तांबा"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    num:10,
    "question_en": "Which is the tallest mountain in the world?",
    "question_hi": "विश्व का सबसे ऊँचा पर्वत कौन सा है?",
    "options_en": ["Mount Everest", "K2", "Kangchenjunga", "Makalu"],
    "options_hi": ["माउंट एवरेस्ट", "K2", "कंचनजंगा", "मकालू"],
    "answer_en": "Mount Everest",
    "answer_hi": "माउंट एवरेस्ट",
    "attempted": false,
    "selected": ""
  },

  {
    num:11,
    "question_en": "Which organ purifies blood in human body?",
    "question_hi": "मानव शरीर में रक्त को शुद्ध कौन करता है?",
    "options_en": ["Kidney", "Liver", "Heart", "Lungs"],
    "options_hi": ["गुर्दा", "यकृत", "हृदय", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    num:12,
    "question_en": "Which Indian river is known as Dakshin Ganga?",
    "question_hi": "दक्षिण गंगा किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Kaveri", "Narmada"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    num:13,
    "question_en": "Which gas is used to fill balloons?",
    "question_hi": "गुब्बारे में कौन सी गैस भरी जाती है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    num:14,
    "question_en": "Which day is celebrated as World Environment Day?",
    "question_hi": "विश्व पर्यावरण दिवस कब मनाया जाता है?",
    "options_en": ["5 June", "22 April", "16 October", "8 March"],
    "options_hi": ["5 जून", "22 अप्रैल", "16 अक्टूबर", "8 मार्च"],
    "answer_en": "5 June",
    "answer_hi": "5 जून",
    "attempted": false,
    "selected": ""
  },
  {
    num:15,
    "question_en": "Who is known as the Father of the Indian Constitution?",
    "question_hi": "भारतीय संविधान के जनक किसे कहा जाता है?",
    "options_en": ["Dr. B. R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad", "Gandhi"],
    "options_hi": ["डॉ. बी. आर. अंबेडकर", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "गांधी"],
    "answer_en": "Dr. B. R. Ambedkar",
    "answer_hi": "डॉ. बी. आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    num:16,
    "question_en": "Which planet has maximum moons?",
    "question_hi": "किस ग्रह के सबसे अधिक उपग्रह हैं?",
    "options_en": ["Jupiter", "Saturn", "Mars", "Earth"],
    "options_hi": ["बृहस्पति", "शनि", "मंगल", "पृथ्वी"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    num:17,
    "question_en": "Which Indian city is known as Pink City?",
    "question_hi": "गुलाबी शहर किसे कहा जाता है?",
    "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    num:18,
    "question_en": "Which vitamin helps in blood clotting?",
    "question_hi": "रक्त का थक्का जमाने में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin K", "Vitamin A", "Vitamin D", "Vitamin C"],
    "options_hi": ["विटामिन K", "विटामिन A", "विटामिन D", "विटामिन C"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    num:19,
    "question_en": "Which country has maximum population?",
    "question_hi": "सबसे अधिक जनसंख्या वाला देश कौन सा है?",
    "options_en": ["India", "China", "USA", "Russia"],
    "options_hi": ["भारत", "चीन", "अमेरिका", "रूस"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    num:20,
    "question_en": "Which is the national aquatic animal of India?",
    "question_hi": "भारत का राष्ट्रीय जलीय जीव कौन सा है?",
    "options_en": ["Ganges Dolphin", "Crocodile", "Shark", "Whale"],
    "options_hi": ["गंगा डॉल्फिन", "मगरमच्छ", "शार्क", "व्हेल"],
    "answer_en": "Ganges Dolphin",
    "answer_hi": "गंगा डॉल्फिन",
    "attempted": false,
    "selected": ""
  },

  {
    num:21,
    "question_en": "Which Indian state is known as Land of Five Rivers?",
    "question_hi": "पाँच नदियों की भूमि किस राज्य को कहा जाता है?",
    "options_en": ["Punjab", "Haryana", "Bihar", "Uttar Pradesh"],
    "options_hi": ["पंजाब", "हरियाणा", "बिहार", "उत्तर प्रदेश"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
    num:22,
    "question_en": "Which gas causes greenhouse effect?",
    "question_hi": "ग्रीनहाउस प्रभाव किस गैस से होता है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:23,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Dr. Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "Nehru"],
    "options_hi": ["डॉ. राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "नेहरू"],
    "answer_en": "Dr. Rajendra Prasad",
    "answer_hi": "डॉ. राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    num:24,
    "question_en": "Which element is essential for making steel?",
    "question_hi": "स्टील बनाने के लिए कौन सा तत्व आवश्यक है?",
    "options_en": ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon",
    "answer_hi": "कार्बन",
    "attempted": false,
    "selected": ""
  },
  {
    num:25,
    "question_en": "Which Indian state is famous for Sunderbans?",
    "question_hi": "सुंदरबन किस राज्य में स्थित है?",
    "options_en": ["West Bengal", "Odisha", "Assam", "Bihar"],
    "options_hi": ["पश्चिम बंगाल", "ओडिशा", "असम", "बिहार"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },
  {
    num:26,
    "question_en": "Which gas is used for artificial ripening of fruits?",
    "question_hi": "फलों को कृत्रिम रूप से पकाने में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Ethylene", "Methane", "Oxygen", "Nitrogen"],
    "options_hi": ["एथिलीन", "मीथेन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Ethylene",
    "answer_hi": "एथिलीन",
    "attempted": false,
    "selected": ""
  },
  {
    num:27,
    "question_en": "Which Indian city is known as the City of Lakes?",
    "question_hi": "झीलों का शहर किसे कहा जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
    "options_hi": ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    num:28,
    "question_en": "Which vitamin is water soluble?",
    "question_hi": "कौन सा विटामिन जल में घुलनशील है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    num:29,
    "question_en": "Which country hosted G20 Summit 2023?",
    "question_hi": "G20 शिखर सम्मेलन 2023 की मेजबानी किस देश ने की?",
    "options_en": ["India", "Indonesia", "Italy", "Japan"],
    "options_hi": ["भारत", "इंडोनेशिया", "इटली", "जापान"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    num:30,
    "question_en": "Which part of computer is called brain?",
    "question_hi": "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
    "options_en": ["CPU", "Monitor", "Keyboard", "Mouse"],
    "options_hi": ["CPU", "मॉनिटर", "कीबोर्ड", "माउस"],
    "answer_en": "CPU",
    "answer_hi": "CPU",
    "attempted": false,
    "selected": ""
  },

  {
    num:31,
    "question_en": "Which river flows between India and Bangladesh?",
    "question_hi": "भारत और बांग्लादेश के बीच कौन सी नदी बहती है?",
    "options_en": ["Ganga", "Brahmaputra", "Teesta", "Meghna"],
    "options_hi": ["गंगा", "ब्रह्मपुत्र", "तीस्ता", "मेघना"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    num:32,
    "question_en": "Which metal is best conductor of electricity?",
    "question_hi": "विद्युत का सबसे अच्छा चालक कौन सा है?",
    "options_en": ["Silver", "Copper", "Gold", "Aluminium"],
    "options_hi": ["चांदी", "तांबा", "सोना", "एल्युमिनियम"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    num:33,
    "question_en": "Which Indian freedom movement started in 1942?",
    "question_hi": "1942 में कौन सा आंदोलन शुरू हुआ?",
    "options_en": ["Quit India Movement", "Non Cooperation", "Civil Disobedience", "Swadeshi"],
    "options_hi": ["भारत छोड़ो आंदोलन", "असहयोग", "सविनय अवज्ञा", "स्वदेशी"],
    "answer_en": "Quit India Movement",
    "answer_hi": "भारत छोड़ो आंदोलन",
    "attempted": false,
    "selected": ""
  },
  {
    num:34,
    "question_en": "Which animal is called Ship of the Desert?",
    "question_hi": "रेगिस्तान का जहाज किसे कहा जाता है?",
    "options_en": ["Camel", "Horse", "Elephant", "Yak"],
    "options_hi": ["ऊँट", "घोड़ा", "हाथी", "याक"],
    "answer_en": "Camel",
    "answer_hi": "ऊँट",
    "attempted": false,
    "selected": ""
  },
  {
    num:35,
    "question_en": "Which Indian state produces maximum wheat?",
    "question_hi": "सबसे अधिक गेहूँ उत्पादन करने वाला राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Punjab", "Haryana", "Madhya Pradesh"],
    "options_hi": ["उत्तर प्रदेश", "पंजाब", "हरियाणा", "मध्य प्रदेश"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:36,
    "question_en": "Which gas is used in refrigerator?",
    "question_hi": "रेफ्रिजरेटर में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Freon", "Oxygen", "Nitrogen", "Helium"],
    "options_hi": ["फ्रिऑन", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
    "answer_en": "Freon",
    "answer_hi": "फ्रिऑन",
    "attempted": false,
    "selected": ""
  },
  {
    num:37,
    "question_en": "Which Indian city is known as Manchester of India?",
    "question_hi": "भारत का मैनचेस्टर किसे कहा जाता है?",
    "options_en": ["Ahmedabad", "Mumbai", "Surat", "Kanpur"],
    "options_hi": ["अहमदाबाद", "मुंबई", "सूरत", "कानपुर"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    num:38,
    "question_en": "Which vitamin prevents scurvy?",
    "question_hi": "स्कर्वी रोग से कौन सा विटामिन बचाता है?",
    "options_en": ["Vitamin C", "Vitamin D", "Vitamin A", "Vitamin B"],
    "options_hi": ["विटामिन C", "विटामिन D", "विटामिन A", "विटामिन B"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    num:39,
    "question_en": "Which organ produces insulin?",
    "question_hi": "इंसुलिन का उत्पादन कौन सा अंग करता है?",
    "options_en": ["Pancreas", "Liver", "Kidney", "Heart"],
    "options_hi": ["अग्न्याशय", "यकृत", "गुर्दा", "हृदय"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    num:40,
    "question_en": "Which is the national calendar of India?",
    "question_hi": "भारत का राष्ट्रीय पंचांग कौन सा है?",
    "options_en": ["Saka Calendar", "Gregorian", "Hijri", "Julian"],
    "options_hi": ["शक संवत", "ग्रेगोरियन", "हिजरी", "जूलियन"],
    "answer_en": "Saka Calendar",
    "answer_hi": "शक संवत",
    "attempted": false,
    "selected": ""
  },

  {
    num:41,
    "question_en": "Which Indian state has maximum population?",
    "question_hi": "सबसे अधिक जनसंख्या वाला भारतीय राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:42,
    "question_en": "Which gas is essential for combustion?",
    "question_hi": "दहन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    num:43,
    "question_en": "Which Indian port is the oldest?",
    "question_hi": "भारत का सबसे पुराना बंदरगाह कौन सा है?",
    "options_en": ["Chennai", "Mumbai", "Kolkata", "Kochi"],
    "options_hi": ["चेन्नई", "मुंबई", "कोलकाता", "कोच्चि"],
    "answer_en": "Chennai",
    "answer_hi": "चेन्नई",
    "attempted": false,
    "selected": ""
  },
  {
    num:44,
    "question_en": "Which part of plant absorbs water?",
    "question_hi": "पौधे का कौन सा भाग पानी अवशोषित करता है?",
    "options_en": ["Root", "Stem", "Leaf", "Flower"],
    "options_hi": ["जड़", "तना", "पत्ती", "फूल"],
    "answer_en": "Root",
    "answer_hi": "जड़",
    "attempted": false,
    "selected": ""
  },
  {
    num:45,
    "question_en": "Which Indian satellite was first launched?",
    "question_hi": "भारत का पहला उपग्रह कौन सा था?",
    "options_en": ["Aryabhata", "Bhaskara", "INSAT", "Rohini"],
    "options_hi": ["आर्यभट्ट", "भास्कर", "इंसैट", "रोहिणी"],
    "answer_en": "Aryabhata",
    "answer_hi": "आर्यभट्ट",
    "attempted": false,
    "selected": ""
  },
  {
    num:46,
    "question_en": "Which river is longest in the world?",
    "question_hi": "विश्व की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Nile", "Amazon", "Yangtze", "Mississippi"],
    "options_hi": ["नील", "अमेज़न", "यांग्त्ज़े", "मिसिसिपी"],
    "answer_en": "Nile",
    "answer_hi": "नील",
    "attempted": false,
    "selected": ""
  },
  {
    num:47,
    "question_en": "Which metal is used in making coins?",
    "question_hi": "सिक्के बनाने में कौन सी धातु प्रयोग होती है?",
    "options_en": ["Nickel", "Iron", "Mercury", "Lead"],
    "options_hi": ["निकेल", "लोहा", "पारा", "सीसा"],
    "answer_en": "Nickel",
    "answer_hi": "निकेल",
    "attempted": false,
    "selected": ""
  },
  {
    num:48,
    "question_en": "Which Indian state is famous for apple production?",
    "question_hi": "सेब उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Himachal Pradesh", "Uttarakhand", "Jammu & Kashmir", "Punjab"],
    "options_hi": ["हिमाचल प्रदेश", "उत्तराखंड", "जम्मू कश्मीर", "पंजाब"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:49,
    "question_en": "Which gas is called producer gas?",
    "question_hi": "प्रोड्यूसर गैस किसे कहते हैं?",
    "options_en": ["Carbon Monoxide", "Carbon Dioxide", "Hydrogen", "Methane"],
    "options_hi": ["कार्बन मोनोऑक्साइड", "कार्बन डाइऑक्साइड", "हाइड्रोजन", "मीथेन"],
    "answer_en": "Carbon Monoxide",
    "answer_hi": "कार्बन मोनोऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:50,
    "question_en": "Which Indian freedom fighter gave slogan 'Inquilab Zindabad'?",
    "question_hi": "'इंकलाब जिंदाबाद' का नारा किसने दिया?",
    "options_en": ["Bhagat Singh", "Subhash Bose", "Gandhi", "Nehru"],
    "options_hi": ["भगत सिंह", "सुभाष बोस", "गांधी", "नेहरू"],
    "answer_en": "Bhagat Singh",
    "answer_hi": "भगत सिंह",
    "attempted": false,
    "selected": ""
  }
]


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