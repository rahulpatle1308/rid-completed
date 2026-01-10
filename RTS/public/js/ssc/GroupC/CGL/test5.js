const questions = [
    {
     num:1,
    "question_en": "Which schedule of the Indian Constitution deals with allocation of seats in Rajya Sabha?",
    "question_hi": "भारतीय संविधान की कौन सी अनुसूची राज्यसभा में सीटों के आवंटन से संबंधित है?",
    "options_en": ["Fourth Schedule", "Fifth Schedule", "Sixth Schedule", "Seventh Schedule"],
    "options_hi": ["चौथी अनुसूची", "पांचवीं अनुसूची", "छठी अनुसूची", "सातवीं अनुसूची"],
    "answer_en": "Fourth Schedule",
    "answer_hi": "चौथी अनुसूची",
    "attempted": false,
    "selected": ""
  },
  {
     num:2,
    "question_en": "Who was the first Indian to win a Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    "options_en": ["C.V. Raman", "Rabindranath Tagore", "Hargobind Khorana", "Amartya Sen"],
    "options_hi": ["सी. वी. रमन", "रवींद्रनाथ टैगोर", "हरगोबिंद खुराना", "अमर्त्य सेन"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
     num:3,
    "question_en": "Which acid is present in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Citric acid", "Lactic acid", "Acetic acid", "Oxalic acid"],
    "options_hi": ["साइट्रिक अम्ल", "लैक्टिक अम्ल", "एसीटिक अम्ल", "ऑक्सैलिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "साइट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
     num:4,
    "question_en": "Which Mughal emperor built the Red Fort of Delhi?",
    "question_hi": "दिल्ली के लाल किले का निर्माण किस मुगल शासक ने कराया?",
    "options_en": ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    "options_hi": ["अकबर", "जहाँगीर", "शाहजहाँ", "औरंगज़ेब"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
     num:5,
    "question_en": "What is the SI unit of electric current?",
    "question_hi": "विद्युत धारा की SI इकाई क्या है?",
    "options_en": ["Volt", "Ohm", "Ampere", "Watt"],
    "options_hi": ["वोल्ट", "ओम", "एम्पियर", "वाट"],
    "answer_en": "Ampere",
    "answer_hi": "एम्पियर",
    "attempted": false,
    "selected": ""
  },

  {
     num:6,
    "question_en": "Which Indian state is the largest producer of sugarcane?",
    "question_hi": "गन्ने का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Maharashtra", "Karnataka", "Uttar Pradesh", "Tamil Nadu"],
    "options_hi": ["महाराष्ट्र", "कर्नाटक", "उत्तर प्रदेश", "तमिलनाडु"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:7,
    "question_en": "Which organ purifies blood in the human body?",
    "question_hi": "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?",
    "options_en": ["Liver", "Heart", "Kidney", "Lungs"],
    "options_hi": ["यकृत", "हृदय", "गुर्दा", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
     num:8,
    "question_en": "Who introduced the Permanent Settlement in India?",
    "question_hi": "भारत में स्थायी बंदोबस्त किसने लागू किया?",
    "options_en": ["Lord Cornwallis", "Lord Wellesley", "Lord Hastings", "Lord Dalhousie"],
    "options_hi": ["लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेजली", "लॉर्ड हेस्टिंग्स", "लॉर्ड डलहौजी"],
    "answer_en": "Lord Cornwallis",
    "answer_hi": "लॉर्ड कॉर्नवालिस",
    "attempted": false,
    "selected": ""
  },
  {
     num:9,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "अग्निशामक यंत्रों में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
     num:10,
    "question_en": "Which country is known as the Land of the Rising Sun?",
    "question_hi": "उगते सूरज की भूमि किस देश को कहा जाता है?",
    "options_en": ["China", "Japan", "Korea", "Thailand"],
    "options_hi": ["चीन", "जापान", "कोरिया", "थाईलैंड"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },

  {
     num:11,
    "question_en": "Which vitamin helps in blood clotting?",
    "question_hi": "रक्त के थक्के जमने में कौन सा विटामिन सहायक होता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
     num:12,
    "question_en": "Which river flows through the Rift Valley?",
    "question_hi": "रिफ्ट घाटी से होकर कौन सी नदी बहती है?",
    "options_en": ["Narmada", "Ganga", "Yamuna", "Brahmaputra"],
    "options_hi": ["नर्मदा", "गंगा", "यमुना", "ब्रह्मपुत्र"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
     num:13,
    "question_en": "Who is known as the Iron Man of India?",
    "question_hi": "भारत का लौह पुरुष किसे कहा जाता है?",
    "options_en": ["Subhash Chandra Bose", "Sardar Patel", "Jawaharlal Nehru", "Bhagat Singh"],
    "options_hi": ["सुभाष चंद्र बोस", "सरदार पटेल", "जवाहरलाल नेहरू", "भगत सिंह"],
    "answer_en": "Sardar Patel",
    "answer_hi": "सरदार पटेल",
    "attempted": false,
    "selected": ""
  },
  {
     num:14,
    "question_en": "What is the chemical formula of common salt?",
    "question_hi": "साधारण नमक का रासायनिक सूत्र क्या है?",
    "options_en": ["NaCl", "KCl", "Na2CO3", "CaCl2"],
    "options_hi": ["NaCl", "KCl", "Na2CO3", "CaCl2"],
    "answer_en": "NaCl",
    "answer_hi": "NaCl",
    "attempted": false,
    "selected": ""
  },
  {
     num:15,
    "question_en": "Which Indian movement started in 1942?",
    "question_hi": "1942 में कौन सा आंदोलन शुरू हुआ?",
    "options_en": ["Non-Cooperation Movement", "Quit India Movement", "Civil Disobedience Movement", "Khilafat Movement"],
    "options_hi": ["असहयोग आंदोलन", "भारत छोड़ो आंदोलन", "सविनय अवज्ञा आंदोलन", "खिलाफत आंदोलन"],
    "answer_en": "Quit India Movement",
    "answer_hi": "भारत छोड़ो आंदोलन",
    "attempted": false,
    "selected": ""
  },

  {
     num:16,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "लाल ग्रह किसे कहा जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
     num:17,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Husain", "V.V. Giri"],
    "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "ज़ाकिर हुसैन", "वी.वी. गिरि"],
    "answer_en": "Dr. Rajendra Prasad",
    "answer_hi": "डॉ. राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
     num:18,
    "question_en": "Which metal is the best conductor of electricity?",
    "question_hi": "विद्युत का सबसे अच्छा चालक कौन सी धातु है?",
    "options_en": ["Copper", "Silver", "Aluminium", "Gold"],
    "options_hi": ["तांबा", "चांदी", "एल्युमिनियम", "सोना"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
     num:19,
    "question_en": "Which Indian state is known as the Spice Garden of India?",
    "question_hi": "भारत का मसाला उद्यान किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
     num:20,
    "question_en": "What is the pH value of pure water?",
    "question_hi": "शुद्ध पानी का pH मान क्या होता है?",
    "options_en": ["5", "6", "7", "8"],
    "options_hi": ["5", "6", "7", "8"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
    {
     num:21,
    "question_en": "Which gas is known as laughing gas?",
    "question_hi": "कौन सी गैस को हंसाने वाली गैस कहा जाता है?",
    "options_en": ["Nitrous Oxide", "Carbon Dioxide", "Oxygen", "Hydrogen"],
    "options_hi": ["नाइट्रस ऑक्साइड", "कार्बन डाइऑक्साइड", "ऑक्सीजन", "हाइड्रोजन"],
    "answer_en": "Nitrous Oxide",
    "answer_hi": "नाइट्रस ऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
     num:22,
    "question_en": "Who was the founder of the Gupta Empire?",
    "question_hi": "गुप्त साम्राज्य का संस्थापक कौन था?",
    "options_en": ["Samudragupta", "Chandragupta I", "Chandragupta II", "Skandagupta"],
    "options_hi": ["समुद्रगुप्त", "चंद्रगुप्त प्रथम", "चंद्रगुप्त द्वितीय", "स्कंदगुप्त"],
    "answer_en": "Chandragupta I",
    "answer_hi": "चंद्रगुप्त प्रथम",
    "attempted": false,
    "selected": ""
  },
  {
     num:23,
    "question_en": "Which vitamin is also known as Ascorbic acid?",
    "question_hi": "एस्कॉर्बिक अम्ल किस विटामिन को कहा जाता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
     num:24,
    "question_en": "Which Indian state shares border with the maximum number of states?",
    "question_hi": "कौन सा भारतीय राज्य सबसे अधिक राज्यों से सीमा साझा करता है?",
    "options_en": ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
    "options_hi": ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "महाराष्ट्र"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:25,
    "question_en": "What is the SI unit of frequency?",
    "question_hi": "आवृत्ति की SI इकाई क्या है?",
    "options_en": ["Hertz", "Watt", "Joule", "Newton"],
    "options_hi": ["हर्ट्ज़", "वाट", "जूल", "न्यूटन"],
    "answer_en": "Hertz",
    "answer_hi": "हर्ट्ज़",
    "attempted": false,
    "selected": ""
  },
  {
     num:26,
    "question_en": "Which Indian city is known as the Pink City?",
    "question_hi": "गुलाबी शहर किसे कहा जाता है?",
    "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
     num:27,
    "question_en": "Who discovered penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Edward Jenner"],
    "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "एडवर्ड जेनर"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
     num:28,
    "question_en": "Which river is the longest in India?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
    "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
     num:29,
    "question_en": "Which metal is used for galvanization?",
    "question_hi": "गैल्वनाइजेशन के लिए कौन सी धातु प्रयोग होती है?",
    "options_en": ["Copper", "Zinc", "Iron", "Aluminium"],
    "options_hi": ["तांबा", "जस्ता", "लोहा", "एल्युमिनियम"],
    "answer_en": "Zinc",
    "answer_hi": "जस्ता",
    "attempted": false,
    "selected": ""
  },
  {
     num:30,
    "question_en": "Who is the author of the book 'Discovery of India'?",
    "question_hi": "'डिस्कवरी ऑफ इंडिया' पुस्तक के लेखक कौन हैं?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhash Chandra Bose", "Rabindranath Tagore"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "रवींद्रनाथ टैगोर"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
     num:31,
    "question_en": "Which organ is responsible for respiration?",
    "question_hi": "श्वसन के लिए कौन सा अंग जिम्मेदार है?",
    "options_en": ["Heart", "Lungs", "Kidney", "Liver"],
    "options_hi": ["हृदय", "फेफड़े", "गुर्दा", "यकृत"],
    "answer_en": "Lungs",
    "answer_hi": "फेफड़े",
    "attempted": false,
    "selected": ""
  },
  {
     num:32,
    "question_en": "Which Indian freedom fighter is known as Netaji?",
    "question_hi": "कौन से भारतीय स्वतंत्रता सेनानी को नेताजी कहा जाता है?",
    "options_en": ["Bhagat Singh", "Subhash Chandra Bose", "Lala Lajpat Rai", "Bal Gangadhar Tilak"],
    "options_hi": ["भगत सिंह", "सुभाष चंद्र बोस", "लाला लाजपत राय", "बाल गंगाधर तिलक"],
    "answer_en": "Subhash Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },
  {
     num:33,
    "question_en": "Which gas is used in refrigerators?",
    "question_hi": "रेफ्रिजरेटर में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Ammonia", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["अमोनिया", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Ammonia",
    "answer_hi": "अमोनिया",
    "attempted": false,
    "selected": ""
  },
  {
     num:34,
    "question_en": "Which country hosted the first Olympic Games?",
    "question_hi": "पहले ओलंपिक खेलों की मेजबानी किस देश ने की?",
    "options_en": ["Italy", "Greece", "France", "USA"],
    "options_hi": ["इटली", "ग्रीस", "फ्रांस", "अमेरिका"],
    "answer_en": "Greece",
    "answer_hi": "ग्रीस",
    "attempted": false,
    "selected": ""
  },
  {
     num:35,
    "question_en": "What is the currency of Japan?",
    "question_hi": "जापान की मुद्रा क्या है?",
    "options_en": ["Yen", "Won", "Dollar", "Peso"],
    "options_hi": ["येन", "वोन", "डॉलर", "पेसो"],
    "answer_en": "Yen",
    "answer_hi": "येन",
    "attempted": false,
    "selected": ""
  },
  {
     num:36,
    "question_en": "Which layer of the Earth is the hottest?",
    "question_hi": "पृथ्वी की कौन सी परत सबसे अधिक गर्म होती है?",
    "options_en": ["Crust", "Mantle", "Outer Core", "Inner Core"],
    "options_hi": ["भूपर्पटी", "मैंटल", "बाहरी कोर", "आंतरिक कोर"],
    "answer_en": "Inner Core",
    "answer_hi": "आंतरिक कोर",
    "attempted": false,
    "selected": ""
  },
  {
     num:37,
    "question_en": "Who wrote the book 'Gitanjali'?",
    "question_hi": "'गीतांजलि' पुस्तक किसने लिखी?",
    "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Premchand"],
    "options_hi": ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "प्रेमचंद"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
     num:38,
    "question_en": "Which vitamin deficiency causes rickets?",
    "question_hi": "किस विटामिन की कमी से रिकेट्स रोग होता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
     num:39,
    "question_en": "Which Indian state is known as the Land of Five Rivers?",
    "question_hi": "पांच नदियों की भूमि किस राज्य को कहा जाता है?",
    "options_en": ["Punjab", "Haryana", "Bihar", "Rajasthan"],
    "options_hi": ["पंजाब", "हरियाणा", "बिहार", "राजस्थान"],
    "answer_en": "Punjab",
    "answer_hi": "पंजाब",
    "attempted": false,
    "selected": ""
  },
  {
     num:40,
    "question_en": "What is the chemical symbol of Iron?",
    "question_hi": "लोहे का रासायनिक प्रतीक क्या है?",
    "options_en": ["Ir", "Fe", "In", "I"],
    "options_hi": ["Ir", "Fe", "In", "I"],
    "answer_en": "Fe",
    "answer_hi": "Fe",
    "attempted": false,
    "selected": ""
  },
  {
     num:41,
    "question_en": "Which Indian dam is the longest?",
    "question_hi": "भारत का सबसे लंबा बांध कौन सा है?",
    "options_en": ["Hirakud Dam", "Bhakra Nangal Dam", "Tehri Dam", "Sardar Sarovar Dam"],
    "options_hi": ["हीराकुंड बांध", "भाखड़ा नांगल बांध", "टिहरी बांध", "सरदार सरोवर बांध"],
    "answer_en": "Hirakud Dam",
    "answer_hi": "हीराकुंड बांध",
    "attempted": false,
    "selected": ""
  },
  {
     num:42,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
    "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सुषमा स्वराज"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
     num:43,
    "question_en": "Which gas is essential for breathing?",
    "question_hi": "सांस लेने के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
     num:44,
    "question_en": "Which continent is the Sahara Desert located in?",
    "question_hi": "सहारा मरुस्थल किस महाद्वीप में स्थित है?",
    "options_en": ["Asia", "Africa", "Australia", "Europe"],
    "options_hi": ["एशिया", "अफ्रीका", "ऑस्ट्रेलिया", "यूरोप"],
    "answer_en": "Africa",
    "answer_hi": "अफ्रीका",
    "attempted": false,
    "selected": ""
  },
  {
     num:45,
    "question_en": "Which Indian state has the largest population?",
    "question_hi": "भारत में सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    "options_en": ["Maharashtra", "Uttar Pradesh", "Bihar", "West Bengal"],
    "options_hi": ["महाराष्ट्र", "उत्तर प्रदेश", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:46,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "James Watt"],
    "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोल टेस्ला", "जेम्स वाट"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
     num:47,
    "question_en": "Which river is known as the Ganga of the South?",
    "question_hi": "दक्षिण की गंगा किस नदी को कहा जाता है?",
    "options_en": ["Krishna", "Godavari", "Cauvery", "Tungabhadra"],
    "options_hi": ["कृष्णा", "गोदावरी", "कावेरी", "तुंगभद्रा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
     num:48,
    "question_en": "Which organ stores bile?",
    "question_hi": "पित्त को संग्रहित करने वाला अंग कौन सा है?",
    "options_en": ["Liver", "Gall Bladder", "Pancreas", "Stomach"],
    "options_hi": ["यकृत", "पित्ताशय", "अग्न्याशय", "आमाशय"],
    "answer_en": "Gall Bladder",
    "answer_hi": "पित्ताशय",
    "attempted": false,
    "selected": ""
  },
  {
     num:49,
    "question_en": "Which Indian satellite was the first?",
    "question_hi": "भारत का पहला उपग्रह कौन सा था?",
    "options_en": ["INSAT-1A", "Aryabhata", "Bhaskara", "Rohini"],
    "options_hi": ["इंसैट-1A", "आर्यभट्ट", "भास्कर", "रोहिणी"],
    "answer_en": "Aryabhata",
    "answer_hi": "आर्यभट्ट",
    "attempted": false,
    "selected": ""
  },
  {
     num:50,
    "question_en": "Which day is celebrated as World Environment Day?",
    "question_hi": "विश्व पर्यावरण दिवस किस दिन मनाया जाता है?",
    "options_en": ["5 June", "22 April", "16 September", "8 March"],
    "options_hi": ["5 जून", "22 अप्रैल", "16 सितंबर", "8 मार्च"],
    "answer_en": "5 June",
    "answer_hi": "5 जून",
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