const questions = 
  [
  {
    num: 1,
    question_en: "Which blood cells help in fighting infections?",
    question_hi: "संक्रमण से लड़ने में कौन सी रक्त कोशिकाएं सहायक होती हैं?",
    options_en: ["RBC", "WBC", "Platelets", "Plasma"],
    options_hi: ["आरबीसी", "डब्ल्यूबीसी", "प्लेटलेट्स", "प्लाज्मा"],
    answer_en: "WBC",
    answer_hi: "डब्ल्यूबीसी",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Who was the first woman Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    options_en: ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil", "Sushma Swaraj"],
    options_hi: ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल", "सुषमा स्वराज"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Which river is known as the Ganga of the South?",
    question_hi: "दक्षिण की गंगा किस नदी को कहा जाता है?",
    options_en: ["Godavari", "Krishna", "Kaveri", "Tungabhadra"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "तुंगभद्रा"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "What is the chemical symbol of Iron?",
    question_hi: "लोहे का रासायनिक संकेत क्या है?",
    options_en: ["Ir", "Fe", "In", "I"],
    options_hi: ["Ir", "Fe", "In", "I"],
    answer_en: "Fe",
    answer_hi: "Fe",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which Indian state is famous for Kathakali dance?",
    question_hi: "कथकली नृत्य किस राज्य से संबंधित है?",
    options_en: ["Tamil Nadu", "Kerala", "Odisha", "Karnataka"],
    options_hi: ["तमिलनाडु", "केरल", "ओडिशा", "कर्नाटक"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which gas is released during respiration?",
    question_hi: "श्वसन के दौरान कौन सी गैस निकलती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Who was the founder of the Sikh religion?",
    question_hi: "सिख धर्म के संस्थापक कौन थे?",
    options_en: ["Guru Nanak Dev Ji", "Guru Gobind Singh Ji", "Guru Tegh Bahadur Ji", "Guru Arjan Dev Ji"],
    options_hi: ["गुरु नानक देव जी", "गुरु गोबिंद सिंह जी", "गुरु तेग बहादुर जी", "गुरु अर्जन देव जी"],
    answer_en: "Guru Nanak Dev Ji",
    answer_hi: "गुरु नानक देव जी",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which instrument is used to measure wind speed?",
    question_hi: "पवन की गति मापने के लिए कौन सा यंत्र प्रयोग होता है?",
    options_en: ["Barometer", "Anemometer", "Thermometer", "Hygrometer"],
    options_hi: ["बैरोमीटर", "एनीमोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
    answer_en: "Anemometer",
    answer_hi: "एनीमोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which Indian city is known as the City of Lakes?",
    question_hi: "झीलों की नगरी किस भारतीय शहर को कहा जाता है?",
    options_en: ["Jaipur", "Udaipur", "Bhopal", "Nainital"],
    options_hi: ["जयपुर", "उदयपुर", "भोपाल", "नैनीताल"],
    answer_en: "Udaipur",
    answer_hi: "उदयपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which vitamin deficiency causes scurvy?",
    question_hi: "स्कर्वी किस विटामिन की कमी से होती है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin C",
    answer_hi: "विटामिन C",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which planet has the maximum number of moons?",
    question_hi: "सबसे अधिक चंद्रमा किस ग्रह के हैं?",
    options_en: ["Earth", "Mars", "Jupiter", "Saturn"],
    options_hi: ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"],
    answer_en: "Saturn",
    answer_hi: "शनि",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Who composed the song 'Vande Mataram'?",
    question_hi: "'वंदे मातरम्' की रचना किसने की?",
    options_en: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Subhash Bose", "Sarojini Naidu"],
    options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सुभाष बोस", "सरोजिनी नायडू"],
    answer_en: "Bankim Chandra Chatterjee",
    answer_hi: "बंकिम चंद्र चट्टोपाध्याय",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which metal is used in making coins?",
    question_hi: "सिक्के बनाने में मुख्य रूप से किस धातु का प्रयोग होता है?",
    options_en: ["Gold", "Silver", "Copper", "Plastic"],
    options_hi: ["सोना", "चांदी", "तांबा", "प्लास्टिक"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which Indian state is known for Sattriya dance?",
    question_hi: "सत्रिया नृत्य किस राज्य से संबंधित है?",
    options_en: ["Assam", "Odisha", "Manipur", "Tripura"],
    options_hi: ["असम", "ओडिशा", "मणिपुर", "त्रिपुरा"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "What is the national tree of India?",
    question_hi: "भारत का राष्ट्रीय वृक्ष कौन सा है?",
    options_en: ["Peepal", "Banyan", "Neem", "Mango"],
    options_hi: ["पीपल", "बरगद", "नीम", "आम"],
    answer_en: "Banyan",
    answer_hi: "बरगद",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which part of the brain controls balance?",
    question_hi: "मस्तिष्क का कौन सा भाग संतुलन नियंत्रित करता है?",
    options_en: ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
    options_hi: ["सेरिब्रम", "सेरिबेलम", "मेडुला", "पॉन्स"],
    answer_en: "Cerebellum",
    answer_hi: "सेरिबेलम",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which Indian state produces the most rice?",
    question_hi: "भारत में सबसे अधिक चावल उत्पादन किस राज्य में होता है?",
    options_en: ["Punjab", "Uttar Pradesh", "West Bengal", "Andhra Pradesh"],
    options_hi: ["पंजाब", "उत्तर प्रदेश", "पश्चिम बंगाल", "आंध्र प्रदेश"],
    answer_en: "West Bengal",
    answer_hi: "पश्चिम बंगाल",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Which gas is known as laughing gas?",
    question_hi: "हंसाने वाली गैस किसे कहा जाता है?",
    options_en: ["Nitrogen", "Nitrous Oxide", "Carbon Monoxide", "Oxygen"],
    options_hi: ["नाइट्रोजन", "नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "ऑक्सीजन"],
    answer_en: "Nitrous Oxide",
    answer_hi: "नाइट्रस ऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Who was the last Mughal Emperor of India?",
    question_hi: "भारत का अंतिम मुगल सम्राट कौन था?",
    options_en: ["Bahadur Shah Zafar", "Akbar", "Aurangzeb", "Shah Jahan"],
    options_hi: ["बहादुर शाह ज़फर", "अकबर", "औरंगजेब", "शाहजहाँ"],
    answer_en: "Bahadur Shah Zafar",
    answer_hi: "बहादुर शाह ज़फर",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which organ helps in pumping blood?",
    question_hi: "रक्त को पंप करने वाला अंग कौन सा है?",
    options_en: ["Brain", "Liver", "Heart", "Lungs"],
    options_hi: ["मस्तिष्क", "यकृत", "हृदय", "फेफड़े"],
    answer_en: "Heart",
    answer_hi: "हृदय",
    attempted: false,
    selected: ""
  },

  {
    num: 21,
    question_en: "Which country hosted the first Olympic Games?",
    question_hi: "पहले ओलंपिक खेलों की मेजबानी किस देश ने की?",
    options_en: ["Italy", "France", "Greece", "USA"],
    options_hi: ["इटली", "फ्रांस", "ग्रीस", "अमेरिका"],
    answer_en: "Greece",
    answer_hi: "ग्रीस",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Which Indian freedom movement started in 1930?",
    question_hi: "1930 में कौन सा स्वतंत्रता आंदोलन शुरू हुआ?",
    options_en: ["Non-Cooperation", "Civil Disobedience", "Quit India", "Swadeshi"],
    options_hi: ["असहयोग", "सविनय अवज्ञा", "भारत छोड़ो", "स्वदेशी"],
    answer_en: "Civil Disobedience",
    answer_hi: "सविनय अवज्ञा",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which part of the eye is responsible for vision?",
    question_hi: "दृष्टि के लिए आंख का कौन सा भाग जिम्मेदार है?",
    options_en: ["Lens", "Iris", "Retina", "Cornea"],
    options_hi: ["लेंस", "आइरिस", "रेटिना", "कॉर्निया"],
    answer_en: "Retina",
    answer_hi: "रेटिना",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which Indian state is known as the Land of Rising Sun?",
    question_hi: "भारत में उगते सूर्य की भूमि किस राज्य को कहा जाता है?",
    options_en: ["Assam", "Arunachal Pradesh", "Nagaland", "Manipur"],
    options_hi: ["असम", "अरुणाचल प्रदेश", "नागालैंड", "मणिपुर"],
    answer_en: "Arunachal Pradesh",
    answer_hi: "अरुणाचल प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which vitamin helps in calcium absorption?",
    question_hi: "कैल्शियम के अवशोषण में कौन सा विटामिन सहायक है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },

  {
    num: 26,
    question_en: "Which Indian city is known as the City of Dreams?",
    question_hi: "सपनों की नगरी किस भारतीय शहर को कहा जाता है?",
    options_en: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    options_hi: ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    answer_en: "Mumbai",
    answer_hi: "मुंबई",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which metal expands most on heating?",
    question_hi: "गर्म करने पर कौन सी धातु सबसे अधिक फैलती है?",
    options_en: ["Iron", "Copper", "Aluminium", "Zinc"],
    options_hi: ["लोहा", "तांबा", "एल्युमिनियम", "जस्ता"],
    answer_en: "Aluminium",
    answer_hi: "एल्युमिनियम",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which Indian dam is the longest?",
    question_hi: "भारत का सबसे लंबा बांध कौन सा है?",
    options_en: ["Bhakra Nangal", "Hirakud", "Tehri", "Sardar Sarovar"],
    options_hi: ["भाखड़ा नांगल", "हीराकुड", "टिहरी", "सरदार सरोवर"],
    answer_en: "Hirakud",
    answer_hi: "हीराकुड",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which gas is used for food preservation?",
    question_hi: "भोजन संरक्षण के लिए कौन सी गैस प्रयोग होती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Who was the first Indian Nobel Prize winner?",
    question_hi: "नोबेल पुरस्कार पाने वाले पहले भारतीय कौन थे?",
    options_en: ["C. V. Raman", "Rabindranath Tagore", "Amartya Sen", "Mother Teresa"],
    options_hi: ["सी. वी. रमन", "रवींद्रनाथ टैगोर", "अमर्त्य सेन", "मदर टेरेसा"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },

  {
    num: 31,
    question_en: "Which Indian river originates from Amarkantak?",
    question_hi: "अमरकंटक से निकलने वाली नदी कौन सी है?",
    options_en: ["Narmada", "Mahanadi", "Godavari", "Tapti"],
    options_hi: ["नर्मदा", "महानदी", "गोदावरी", "ताप्ती"],
    answer_en: "Narmada",
    answer_hi: "नर्मदा",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which disease is caused by mosquito?",
    question_hi: "मच्छर से कौन सी बीमारी फैलती है?",
    options_en: ["Tuberculosis", "Malaria", "Typhoid", "Cholera"],
    options_hi: ["क्षय रोग", "मलेरिया", "टाइफाइड", "हैजा"],
    answer_en: "Malaria",
    answer_hi: "मलेरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Which Indian state has the highest number of districts?",
    question_hi: "भारत में सबसे अधिक जिले किस राज्य में हैं?",
    options_en: ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Maharashtra"],
    options_hi: ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "महाराष्ट्र"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which device measures earthquakes?",
    question_hi: "भूकंप मापने वाला यंत्र कौन सा है?",
    options_en: ["Barometer", "Richter Scale", "Seismograph", "Thermometer"],
    options_hi: ["बैरोमीटर", "रिक्टर स्केल", "सीस्मोग्राफ", "थर्मामीटर"],
    answer_en: "Seismograph",
    answer_hi: "सीस्मोग्राफ",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which Indian state is famous for apple production?",
    question_hi: "सेब उत्पादन के लिए प्रसिद्ध राज्य कौन सा है?",
    options_en: ["Uttarakhand", "Himachal Pradesh", "Jammu & Kashmir", "All of these"],
    options_hi: ["उत्तराखंड", "हिमाचल प्रदेश", "जम्मू-कश्मीर", "ये सभी"],
    answer_en: "All of these",
    answer_hi: "ये सभी",
    attempted: false,
    selected: ""
  },

  {
    num: 36,
    question_en: "Which layer of the atmosphere protects us from UV rays?",
    question_hi: "वायुमंडल की कौन सी परत UV किरणों से रक्षा करती है?",
    options_en: ["Troposphere", "Stratosphere", "Ozone layer", "Mesosphere"],
    options_hi: ["क्षोभमंडल", "समताप मंडल", "ओजोन परत", "मध्य मंडल"],
    answer_en: "Ozone layer",
    answer_hi: "ओजोन परत",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Which Indian city is known as the Blue City?",
    question_hi: "ब्लू सिटी किस भारतीय शहर को कहा जाता है?",
    options_en: ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
    options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
    answer_en: "Jodhpur",
    answer_hi: "जोधपुर",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which vitamin is essential for healthy teeth?",
    question_hi: "स्वस्थ दांतों के लिए कौन सा विटामिन आवश्यक है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन E"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Who built the Red Fort?",
    question_hi: "लाल किले का निर्माण किसने करवाया?",
    options_en: ["Akbar", "Shah Jahan", "Aurangzeb", "Babur"],
    options_hi: ["अकबर", "शाहजहाँ", "औरंगजेब", "बाबर"],
    answer_en: "Shah Jahan",
    answer_hi: "शाहजहाँ",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which gas is used in welding?",
    question_hi: "वेल्डिंग में कौन सी गैस प्रयोग होती है?",
    options_en: ["Oxygen", "Hydrogen", "Acetylene", "Nitrogen"],
    options_hi: ["ऑक्सीजन", "हाइड्रोजन", "एसीटिलीन", "नाइट्रोजन"],
    answer_en: "Acetylene",
    answer_hi: "एसीटिलीन",
    attempted: false,
    selected: ""
  },

  {
    num: 41,
    question_en: "Which Indian state has the largest area?",
    question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Madhya Pradesh", "Rajasthan", "Maharashtra", "Uttar Pradesh"],
    options_hi: ["मध्य प्रदेश", "राजस्थान", "महाराष्ट्र", "उत्तर प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which vitamin is known as anti-sterility vitamin?",
    question_hi: "एंटी-स्टेरिलिटी विटामिन किसे कहा जाता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin E"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन E"],
    answer_en: "Vitamin E",
    answer_hi: "विटामिन E",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Which Indian movement was led by Mahatma Gandhi?",
    question_hi: "महात्मा गांधी के नेतृत्व में कौन सा आंदोलन हुआ?",
    options_en: ["Civil Disobedience", "Non-Cooperation", "Quit India", "All of these"],
    options_hi: ["सविनय अवज्ञा", "असहयोग", "भारत छोड़ो", "ये सभी"],
    answer_en: "All of these",
    answer_hi: "ये सभी",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which organ stores bile juice?",
    question_hi: "पित्त रस को कौन सा अंग संग्रह करता है?",
    options_en: ["Liver", "Gall Bladder", "Pancreas", "Stomach"],
    options_hi: ["यकृत", "पित्ताशय", "अग्न्याशय", "आमाशय"],
    answer_en: "Gall Bladder",
    answer_hi: "पित्ताशय",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which Indian state is known as the Sugar Bowl of India?",
    question_hi: "भारत का चीनी कटोरा किस राज्य को कहा जाता है?",
    options_en: ["Uttar Pradesh", "Bihar", "Maharashtra", "Tamil Nadu"],
    options_hi: ["उत्तर प्रदेश", "बिहार", "महाराष्ट्र", "तमिलनाडु"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },

  {
    num: 46,
    question_en: "Which gas is used to make soda water?",
    question_hi: "सोडा वाटर बनाने में कौन सी गैस प्रयोग होती है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Helium"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हीलियम"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Who was the first Indian woman Governor?",
    question_hi: "भारत की पहली महिला राज्यपाल कौन थीं?",
    options_en: ["Sarojini Naidu", "Vijaya Lakshmi Pandit", "Pratibha Patil", "Indira Gandhi"],
    options_hi: ["सरोजिनी नायडू", "विजया लक्ष्मी पंडित", "प्रतिभा पाटिल", "इंदिरा गांधी"],
    answer_en: "Sarojini Naidu",
    answer_hi: "सरोजिनी नायडू",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which Indian river is also called Dakshin Ganga?",
    question_hi: "दक्षिण गंगा किस नदी को कहा जाता है?",
    options_en: ["Krishna", "Godavari", "Kaveri", "Pennar"],
    options_hi: ["कृष्णा", "गोदावरी", "कावेरी", "पेन्नार"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which Indian city is known as the Garden City?",
    question_hi: "गार्डन सिटी किस भारतीय शहर को कहा जाता है?",
    options_en: ["Pune", "Bengaluru", "Chandigarh", "Mysuru"],
    options_hi: ["पुणे", "बेंगलुरु", "चंडीगढ़", "मैसूर"],
    answer_en: "Bengaluru",
    answer_hi: "बेंगलुरु",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which part of the Constitution deals with Directive Principles?",
    question_hi: "नीति निदेशक तत्व संविधान के किस भाग में हैं?",
    options_en: ["Part III", "Part IV", "Part V", "Part VI"],
    options_hi: ["भाग III", "भाग IV", "भाग V", "भाग VI"],
    answer_en: "Part IV",
    answer_hi: "भाग IV",
    attempted: false,
    selected: ""
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