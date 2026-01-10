const questions = [
  {
    "num":1,
    "question_en": "Which Indian state recently launched 'Mukhyamantri Kisan Kalyan Pradarshini Yojana'?",
    "question_hi": "किस भारतीय राज्य ने हाल ही में 'मुख्यमंत्री किसान कल्याण प्रदर्शनी योजना' शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Gujarat"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "गुजरात"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "Who was appointed as the new Chief of the National Disaster Response Force (NDRF) in 2024?",
    "question_hi": "2024 में राष्ट्रीय आपदा मोचन बल (एनडीआरएफ) के नए प्रमुख के रूप में किसे नियुक्त किया गया?",
    "options_en": ["Atul Karwal", "S.N. Pradhan", "O.P. Singh", "Not announced yet"],
    "options_hi": ["अतुल करवाल", "एस.एन. प्रधान", "ओ.पी. सिंह", "अभी घोषित नहीं हुआ"],
    "answer_en": "Atul Karwal",
    "answer_hi": "अतुल करवाल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which country recently changed its name from 'Republic of Congo' to 'Congo Republic'?",
    "question_hi": "हाल ही में किस देश ने अपना नाम 'कांगो गणराज्य' से 'कांगो रिपब्लिक' बदला?",
    "options_en": ["Republic of the Congo", "Democratic Republic of the Congo", "Congo-Brazzaville", "No official change"],
    "options_hi": ["कांगो गणराज्य", "कांगो लोकतांत्रिक गणराज्य", "कांगो-ब्राजाविल", "कोई आधिकारिक परिवर्तन नहीं"],
    "answer_en": "No official change",
    "answer_hi": "कोई आधिकारिक परिवर्तन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "Who won the 2024 Padma Vibhushan award in the field of literature?",
    "question_hi": "साहित्य के क्षेत्र में 2024 का पद्म विभूषण पुरस्कार किसने जीता?",
    "options_en": ["Multiple recipients", "Ruskin Bond", "Mahasweta Devi", "Not announced yet"],
    "options_hi": ["कई प्राप्तकर्ता", "रस्किन बॉन्ड", "महाश्वेता देवी", "अभी घोषित नहीं हुआ"],
    "answer_en": "Multiple recipients",
    "answer_hi": "कई प्राप्तकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which Indian city hosted the 'G20 Education Ministers Meeting' in 2023?",
    "question_hi": "2023 में 'जी20 शिक्षा मंत्रियों की बैठक' की मेजबानी किस भारतीय शहर ने की?",
    "options_en": ["Pune", "Chennai", "Bangalore", "Hyderabad"],
    "options_hi": ["पुणे", "चेन्नई", "बैंगलोर", "हैदराबाद"],
    "answer_en": "Pune",
    "answer_hi": "पुणे",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "Who is the current Union Minister of Textiles?",
    "question_hi": "वर्तमान केंद्रीय वस्त्र मंत्री कौन हैं?",
    "options_en": ["Piyush Goyal", "Smriti Irani", "Santosh Gangwar", "Kiran Rijiju"],
    "options_hi": ["पीयूष गोयल", "स्मृति ईरानी", "संतोष गंगवार", "किरण रिजिजू"],
    "answer_en": "Piyush Goyal",
    "answer_hi": "पीयूष गोयल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which country recently launched 'Hera' mission for asteroid defense study?",
    "question_hi": "हाल ही में क्षुद्रग्रह रक्षा अध्ययन के लिए 'हेरा' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["European Space Agency", "NASA", "JAXA", "Roscosmos"],
    "options_hi": ["यूरोपीय अंतरिक्ष एजेंसी", "नासा", "जाक्सा", "रोस्कोसमोस"],
    "answer_en": "European Space Agency",
    "answer_hi": "यूरोपीय अंतरिक्ष एजेंसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "Who won the 2024 Nobel Prize in Economics?",
    "question_hi": "2024 का अर्थशास्त्र का नोबेल पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Claudia Goldin", "Ben Bernanke", "Douglas Diamond"],
    "options_hi": ["घोषित किया जाना है", "क्लाउडिया गोल्डिन", "बेन बर्नान्के", "डगलस डायमंड"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which Indian state implemented 'Mukhyamantri Shiksha Sudhar Abhiyan'?",
    "question_hi": "'मुख्यमंत्री शिक्षा सुधार अभियान' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "Who is the current Prime Minister of Monaco?",
    "question_hi": "मोनाको के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Pierre Dartout", "Serge Telle", "Michel Roger", "Jean-Paul Proust"],
    "options_hi": ["पियरे डार्टौट", "सेर्ज टेले", "मिशेल रोजर", "जीन-पॉल प्रूस्ट"],
    "answer_en": "Pierre Dartout",
    "answer_hi": "पियरे डार्टौट",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which city will host the 2025 World Boxing Championships?",
    "question_hi": "2025 विश्व बॉक्सिंग चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Tashkent, Uzbekistan", "Belgrade, Serbia", "Not decided yet", "Cancelled"],
    "options_hi": ["ताशकंद, उज्बेकिस्तान", "बेलग्रेड, सर्बिया", "अभी तय नहीं हुआ", "रद्द"],
    "answer_en": "Tashkent, Uzbekistan",
    "answer_hi": "ताशकंद, उज्बेकिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "Who won the 2024 Arjuna Award for shooting?",
    "question_hi": "शूटिंग के लिए 2024 का अर्जुन पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Abhinav Bindra", "Gagan Narang", "Multiple shooters"],
    "options_hi": ["घोषित किया जाना है", "अभिनव बिंद्रा", "गगन नारंग", "कई शूटर"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which Indian state launched 'Mukhyamantri Yuva Swavalamban Protsahan Yojana'?",
    "question_hi": "'मुख्यमंत्री युवा स्वावलंबन प्रोत्साहन योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Gujarat", "Maharashtra", "Karnataka", "Telangana"],
    "options_hi": ["गुजरात", "महाराष्ट्र", "कर्नाटक", "तेलंगाना"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "Who is the current President of Armenia?",
    "question_hi": "आर्मेनिया के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Vahagn Khachaturyan", "Armen Sarkissian", "Serzh Sargsyan", "Robert Kocharyan"],
    "options_hi": ["वाहग्न खाचातुर्यान", "आर्मेन सरकिसियन", "सेर्ज सर्ग्सयान", "रॉबर्ट कोचेरियन"],
    "answer_en": "Vahagn Khachaturyan",
    "answer_hi": "वाहग्न खाचातुर्यान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which country recently launched 'Lunar Gateway' international space station project?",
    "question_hi": "हाल ही में 'लूनर गेटवे' अंतर्राष्ट्रीय अंतरिक्ष स्टेशन परियोजना किस देश ने लॉन्च की?",
    "options_en": ["NASA (International collaboration)", "China", "Russia", "European Space Agency"],
    "options_hi": ["नासा (अंतर्राष्ट्रीय सहयोग)", "चीन", "रूस", "यूरोपीय अंतरिक्ष एजेंसी"],
    "answer_en": "NASA (International collaboration)",
    "answer_hi": "नासा (अंतर्राष्ट्रीय सहयोग)",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "Who won the 2024 ICC Women's T20 World Cup?",
    "question_hi": "2024 आईसीसी महिला टी20 विश्व कप किसने जीता?",
    "options_en": ["Australia", "England", "India", "South Africa"],
    "options_hi": ["ऑस्ट्रेलिया", "इंग्लैंड", "भारत", "दक्षिण अफ्रीका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which Indian city is known as the 'City of Forts'?",
    "question_hi": "किस भारतीय शहर को 'किलों का शहर' कहा जाता है?",
    "options_en": ["Jaisalmer", "Jaipur", "Delhi", "Agra"],
    "options_hi": ["जैसलमेर", "जयपुर", "दिल्ली", "आगरा"],
    "answer_en": "Jaisalmer",
    "answer_hi": "जैसलमेर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "Who is the current Union Minister of Labour and Employment?",
    "question_hi": "वर्तमान केंद्रीय श्रम और रोजगार मंत्री कौन हैं?",
    "options_en": ["Bhupender Yadav", "Santosh Gangwar", "Mallikarjun Kharge", "Bandaru Dattatreya"],
    "options_hi": ["भूपेंद्र यादव", "संतोष गंगवार", "मल्लिकार्जुन खड़गे", "बंदारू दत्तात्रेय"],
    "answer_en": "Bhupender Yadav",
    "answer_hi": "भूपेंद्र यादव",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which country recently launched 'Shenzhou-18' manned space mission?",
    "question_hi": "हाल ही में 'शेनझोउ-18' मानव अंतरिक्ष मिशन किस देश ने लॉन्च किया?",
    "options_en": ["China", "USA", "Russia", "India"],
    "options_hi": ["चीन", "यूएसए", "रूस", "भारत"],
    "answer_en": "China",
    "answer_hi": "चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "Who won the 2024 French Open Mixed Doubles title?",
    "question_hi": "2024 फ्रेंच ओपन मिश्रित युगल खिताब किसने जीता?",
    "options_en": ["Miyu Kato & Tim Puetz", "Ivan Dodig & Latisha Chan", "Jean-Julien Rojer & Demi Schuurs", "Rajeev Ram & Barbora Krejcikova"],
    "options_hi": ["मियू काटो और टिम पुएत्ज़", "इवान डोडिग और लतीशा चान", "जीन-जूलियन रोजर और डेमी शूर्स", "राजीव राम और बारबोरा क्रेजीकोवा"],
    "answer_en": "Miyu Kato & Tim Puetz",
    "answer_hi": "मियू काटो और टिम पुएत्ज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Sahayata Call Center Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान सहायता कॉल सेंटर योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "Who is the current Prime Minister of Andorra?",
    "question_hi": "अंडोरा के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Xavier Espot Zamora", "Antoni Martí", "Albert Pintat", "Marc Forné Molné"],
    "options_hi": ["ज़ेवियर एस्पोट ज़ामोरा", "एंटोनी मार्टी", "अल्बर्ट पिंटाट", "मार्क फोर्ने मोलने"],
    "answer_en": "Xavier Espot Zamora",
    "answer_hi": "ज़ेवियर एस्पोट ज़ामोरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which city will host the 2026 Asian Winter Games?",
    "question_hi": "2026 एशियाई शीतकालीन खेलों की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Harbin, China", "Sapporo, Japan", "Almaty, Kazakhstan", "Not decided yet"],
    "options_hi": ["हार्बिन, चीन", "सप्पोरो, जापान", "अल्माटी, कजाखस्तान", "अभी तय नहीं हुआ"],
    "answer_en": "Harbin, China",
    "answer_hi": "हार्बिन, चीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "Who won the 2024 Sahitya Akademi Award for Urdu?",
    "question_hi": "उर्दू के लिए 2024 का साहित्य अकादमी पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Gulzar", "Javed Akhtar", "Shamsur Rahman Faruqi"],
    "options_hi": ["घोषित किया जाना है", "गुलज़ार", "जावेद अख्तर", "शम्सुर रहमान फारूकी"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which Indian state implemented 'Mukhyamantri Jan Kalyan Kendra Yojana'?",
    "question_hi": "'मुख्यमंत्री जन कल्याण केंद्र योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Jharkhand", "Chhattisgarh"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "झारखंड", "छत्तीसगढ़"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "Who is the current President of Azerbaijan?",
    "question_hi": "अजरबैजान के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Ilham Aliyev", "Heydar Aliyev", "Abulfaz Elchibey", "Ayaz Mutalibov"],
    "options_hi": ["इल्हाम अलीयेव", "हेयदर अलीयेव", "अबुलफज एलचिबे", "अयाज मुतालिबोव"],
    "answer_en": "Ilham Aliyev",
    "answer_hi": "इल्हाम अलीयेव",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which country recently launched 'Lunar IceCube' mission?",
    "question_hi": "हाल ही में 'लूनर आइसक्यूब' मिशन किस देश ने लॉन्च किया?",
    "options_en": ["NASA", "European Space Agency", "India", "China"],
    "options_hi": ["नासा", "यूरोपीय अंतरिक्ष एजेंसी", "भारत", "चीन"],
    "answer_en": "NASA",
    "answer_hi": "नासा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "Who won the 2024 US Open Mixed Doubles title?",
    "question_hi": "2024 यूएस ओपन मिश्रित युगल खिताब किसने जीता?",
    "options_en": ["Anna Danilina & Harri Heliovaara", "Gabriela Dabrowski & Max Purcell", "Desirae Krawczyk & Neal Skupski", "Storm Sanders & John Peers"],
    "options_hi": ["अन्ना दानिलिना और हैरी हेलिओवारा", "गैब्रिएला डबरोव्स्की और मैक्स पर्सेल", "डेजिरे क्रॉचिक और नील स्कुप्स्की", "स्टॉर्म सैंडर्स और जॉन पीयर्स"],
    "answer_en": "Anna Danilina & Harri Heliovaara",
    "answer_hi": "अन्ना दानिलिना और हैरी हेलिओवारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which Indian city is known as the 'City of Philosophers'?",
    "question_hi": "किस भारतीय शहर को 'दार्शनिकों का शहर' कहा जाता है?",
    "options_en": ["Varanasi", "Allahabad", "Kolkata", "Delhi"],
    "options_hi": ["वाराणसी", "इलाहाबाद", "कोलकाता", "दिल्ली"],
    "answer_en": "Varanasi",
    "answer_hi": "वाराणसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "Who is the current Union Minister of Communications?",
    "question_hi": "वर्तमान केंद्रीय संचार मंत्री कौन हैं?",
    "options_en": ["Ashwini Vaishnaw", "Ravi Shankar Prasad", "Manoj Sinha", "Dayanidhi Maran"],
    "options_hi": ["अश्विनी वैष्णव", "रविशंकर प्रसाद", "मनोज सिन्हा", "दयानिधि मारन"],
    "answer_en": "Ashwini Vaishnaw",
    "answer_hi": "अश्विनी वैष्णव",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which country recently launched 'EOS-06' Earth observation satellite?",
    "question_hi": "हाल ही में 'ईओएस-06' पृथ्वी अवलोकन उपग्रह किस देश ने लॉन्च किया?",
    "options_en": ["India", "USA", "European Union", "China"],
    "options_hi": ["भारत", "यूएसए", "यूरोपीय संघ", "चीन"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "Who won the 2024 Australian Open Women's Doubles title?",
    "question_hi": "2024 ऑस्ट्रेलियन ओपन महिला युगल खिताब किसने जीता?",
    "options_en": ["Hsieh Su-wei & Elise Mertens", "Barbora Krejcikova & Katerina Siniakova", "Coco Gauff & Jessica Pegula", "Gabriela Dabrowski & Erin Routliffe"],
    "options_hi": ["ह्सिएह सु-वेई और एलिस मर्टेंस", "बारबोरा क्रेजीकोवा और कैटरीना सिनियाकोवा", "कोको गॉफ और जेसिका पेगुला", "गैब्रिएला डबरोव्स्की और एरिन राउटलिफ"],
    "answer_en": "Hsieh Su-wei & Elise Mertens",
    "answer_hi": "ह्सिएह सु-वेई और एलिस मर्टेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Kalyan Pustakalaya Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान कल्याण पुस्तकालय योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Haryana"],
    "options_hi": ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "हरियाणा"],
    "answer_en": "Madhya Pradesh",
    "answer_hi": "मध्य प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "Who is the current Prime Minister of Liechtenstein?",
    "question_hi": "लिक्टेंश्टाइन के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Daniel Risch", "Adrian Hasler", "Klaus Tschütscher", "Otmar Hasler"],
    "options_hi": ["डैनियल रिश", "एड्रियन हासलर", "क्लाउस ट्शुत्शर", "ओटमर हासलर"],
    "answer_en": "Daniel Risch",
    "answer_hi": "डैनियल रिश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which city will host the 2027 World Swimming Championships?",
    "question_hi": "2027 विश्व तैराकी चैंपियनशिप की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Budapest, Hungary", "Fukuoka, Japan", "Doha, Qatar", "Not decided yet"],
    "options_hi": ["बुडापेस्ट, हंगरी", "फुकुओका, जापान", "दोहा, कतर", "अभी तय नहीं हुआ"],
    "answer_en": "Budapest, Hungary",
    "answer_hi": "बुडापेस्ट, हंगरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "Who won the 2024 Jnanpith Award for Tamil literature?",
    "question_hi": "तमिल साहित्य के लिए 2024 का ज्ञानपीठ पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Jayakanthan", "Sivasankari", "Kalki Krishnamurthy"],
    "options_hi": ["घोषित किया जाना है", "जयकांतन", "शिवसांकरी", "कल्कि कृष्णमूर्ति"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which Indian state implemented 'Mukhyamantri Kisan Suraksha Prakoshth Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान सुरक्षा प्रकोष्ठ योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "Who is the current President of Belarus?",
    "question_hi": "बेलारूस के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Alexander Lukashenko", "Stanislav Shushkevich", "Vyacheslav Kebich", "No change since 1994"],
    "options_hi": ["अलेक्जेंडर लुकाशेंको", "स्तानिस्लाव शुश्केविच", "व्याचेस्लाव केबिच", "1994 से कोई बदलाव नहीं"],
    "answer_en": "Alexander Lukashenko",
    "answer_hi": "अलेक्जेंडर लुकाशेंको",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which country recently launched 'BepiColombo' second Mercury mission?",
    "question_hi": "हाल ही में 'बेपीकोलंबो' दूसरा बुध मिशन किस देश ने लॉन्च किया?",
    "options_en": ["ESA-JAXA Collaboration", "NASA", "Roscosmos", "CNSA"],
    "options_hi": ["ईएसए-जाक्सा सहयोग", "नासा", "रोस्कोसमोस", "सीएनएसए"],
    "answer_en": "ESA-JAXA Collaboration",
    "answer_hi": "ईएसए-जाक्सा सहयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "Who won the 2024 French Open Men's Doubles title?",
    "question_hi": "2024 फ्रेंच ओपन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Marcelo Arevalo & Jean-Julien Rojer", "Rajeev Ram & Joe Salisbury", "Wesley Koolhof & Neal Skupski", "Ivan Dodig & Austin Krajicek"],
    "options_hi": ["मार्सेलो अरेवालो और जीन-जूलियन रोजर", "राजीव राम और जो सैलिसबरी", "वेस्ले कोलहोफ और नील स्कुप्स्की", "इवान डोडिग और ऑस्टिन क्रैजिसेक"],
    "answer_en": "Marcelo Arevalo & Jean-Julien Rojer",
    "answer_hi": "मार्सेलो अरेवालो और जीन-जूलियन रोजर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which Indian city is known as the 'City of Music'?",
    "question_hi": "किस भारतीय शहर को 'संगीत का शहर' कहा जाता है?",
    "options_en": ["Mumbai", "Chennai", "Kolkata", "Hyderabad"],
    "options_hi": ["मुंबई", "चेन्नई", "कोलकाता", "हैदराबाद"],
    "answer_en": "Chennai",
    "answer_hi": "चेन्नई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "Who is the current Union Minister of Electronics and Information Technology?",
    "question_hi": "वर्तमान केंद्रीय इलेक्ट्रॉनिक्स और सूचना प्रौद्योगिकी मंत्री कौन हैं?",
    "options_en": ["Ashwini Vaishnaw", "Ravi Shankar Prasad", "Kiran Rijiju", "Rajeev Chandrasekhar"],
    "options_hi": ["अश्विनी वैष्णव", "रविशंकर प्रसाद", "किरण रिजिजू", "राजीव चंद्रशेखर"],
    "answer_en": "Ashwini Vaishnaw",
    "answer_hi": "अश्विनी वैष्णव",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which country recently launched 'Cartosat-3' high-resolution imaging satellite?",
    "question_hi": "हाल ही में 'कार्टोसैट-3' उच्च रिज़ॉल्यूशन इमेजिंग उपग्रह किस देश ने लॉन्च किया?",
    "options_en": ["India", "USA", "Israel", "Japan"],
    "options_hi": ["भारत", "यूएसए", "इज़राइल", "जापान"],
    "answer_en": "India",
    "answer_hi": "भारत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "Who won the 2024 Wimbledon Men's Doubles title?",
    "question_hi": "2024 विंबलडन पुरुष युगल खिताब किसने जीता?",
    "options_en": ["Wesley Koolhof & Neal Skupski", "Rajeev Ram & Joe Salisbury", "Mate Pavic & Nikola Mektic", "Marcelo Arevalo & Jean-Julien Rojer"],
    "options_hi": ["वेस्ले कोलहोफ और नील स्कुप्स्की", "राजीव राम और जो सैलिसबरी", "माटे पाविक और निकोला मेक्टिक", "मार्सेलो अरेवालो और जीन-जूलियन रोजर"],
    "answer_en": "Wesley Koolhof & Neal Skupski",
    "answer_hi": "वेस्ले कोलहोफ और नील स्कुप्स्की",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which Indian state launched 'Mukhyamantri Kisan Kalyan Sanrakshan Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान कल्याण संरक्षण योजना' किस भारतीय राज्य ने शुरू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "Who is the current Prime Minister of San Marino?",
    "question_hi": "सैन मैरिनो के वर्तमान प्रधानमंत्री कौन हैं?",
    "options_en": ["Alessandro Scarano & Adele Tonnini", "Francesco Mussoni & Giacomo Simoncini", "Luigi Lonfernini & Antonella Mularoni", "Paolo Rondelli & Oscar Mina"],
    "options_hi": ["एलेस्सांद्रो स्कारानो और एडेले टोनिनी", "फ्रांसेस्को मुसोनी और जैकोमो सिमोनसिनी", "लुइगी लोंफर्निनी और एंटोनेला मुलरोनी", "पाओलो रोंडेली और ऑस्कर मीना"],
    "answer_en": "Alessandro Scarano & Adele Tonnini",
    "answer_hi": "एलेस्सांद्रो स्कारानो और एडेले टोनिनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which city will host the 2028 Summer Youth Olympics?",
    "question_hi": "2028 ग्रीष्मकालीन युवा ओलंपिक की मेजबानी कौन सा शहर करेगा?",
    "options_en": ["Dakar, Senegal", "Buenos Aires, Argentina", "Not confirmed yet", "Postponed"],
    "options_hi": ["डकार, सेनेगल", "ब्यूनस आयर्स, अर्जेंटीना", "अभी पुष्टि नहीं हुई", "स्थगित"],
    "answer_en": "Dakar, Senegal",
    "answer_hi": "डकार, सेनेगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "Who won the 2024 National Film Award for Best Lyrics?",
    "question_hi": "सर्वश्रेष्ठ गीत के लिए 2024 का राष्ट्रीय फिल्म पुरस्कार किसने जीता?",
    "options_en": ["To be announced", "Gulzar", "Javed Akhtar", "Prasoon Joshi"],
    "options_hi": ["घोषित किया जाना है", "गुलज़ार", "जावेद अख्तर", "प्रसून जोशी"],
    "answer_en": "To be announced",
    "answer_hi": "घोषित किया जाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which Indian state implemented 'Mukhyamantri Kisan Kalyan Prashasan Yojana'?",
    "question_hi": "'मुख्यमंत्री किसान कल्याण प्रशासन योजना' किस भारतीय राज्य ने लागू की?",
    "options_en": ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
    "options_hi": ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "Who is the current President of Uzbekistan?",
    "question_hi": "उज़्बेकिस्तान के वर्तमान राष्ट्रपति कौन हैं?",
    "options_en": ["Shavkat Mirziyoyev", "Islam Karimov", "Abdulla Aripov", "Sadyr Japarov"],
    "options_hi": ["शवकत मिर्ज़ियोयेव", "इस्लाम करीमोव", "अब्दुल्ला अरिपोव", "सादिर जापारोव"],
    "answer_en": "Shavkat Mirziyoyev",
    "answer_hi": "शवकत मिर्ज़ियोयेव",
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