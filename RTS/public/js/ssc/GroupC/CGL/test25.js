const questions = [
  {
    num:1,
    "question_en": "Which Indian state is known as the Spice Garden of India?",
    "question_hi": "भारत का मसाला उद्यान किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Assam"],
    "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "असम"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    num:2,
    "question_en": "Which vitamin prevents night blindness?",
    "question_hi": "रतौंधी से बचाव कौन सा विटामिन करता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
    num:3,
    "question_en": "Which Indian city is known as the Manchester of India?",
    "question_hi": "भारत का मैनचेस्टर किस शहर को कहा जाता है?",
    "options_en": ["Ahmedabad", "Mumbai", "Kanpur", "Surat"],
    "options_hi": ["अहमदाबाद", "मुंबई", "कानपुर", "सूरत"],
    "answer_en": "Ahmedabad",
    "answer_hi": "अहमदाबाद",
    "attempted": false,
    "selected": ""
  },
  {
    num:4,
    "question_en": "Which gas is filled in balloons?",
    "question_hi": "गुब्बारों में कौन सी गैस भरी जाती है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Nitrogen"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
    "attempted": false,
    "selected": ""
  },
  {
    num:5,
    "question_en": "Who is known as the Father of the Indian Constitution?",
    "question_hi": "भारतीय संविधान के जनक कौन कहलाते हैं?",
    "options_en": ["B. R. Ambedkar", "Nehru", "Rajendra Prasad", "Gandhi"],
    "options_hi": ["बी. आर. अंबेडकर", "नेहरू", "राजेंद्र प्रसाद", "गांधी"],
    "answer_en": "B. R. Ambedkar",
    "answer_hi": "बी. आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },

  {
    num:6,
    "question_en": "Which organ filters blood in the human body?",
    "question_hi": "मानव शरीर में रक्त को कौन सा अंग छानता है?",
    "options_en": ["Kidney", "Liver", "Heart", "Lungs"],
    "options_hi": ["गुर्दा", "यकृत", "हृदय", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    num:7,
    "question_en": "Which river is called the Dakshin Ganga?",
    "question_hi": "दक्षिण गंगा किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Tungabhadra"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "तुंगभद्रा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    num:8,
    "question_en": "Which metal is the best conductor of electricity?",
    "question_hi": "विद्युत का सबसे अच्छा चालक कौन सी धातु है?",
    "options_en": ["Silver", "Copper", "Gold", "Aluminium"],
    "options_hi": ["चांदी", "तांबा", "सोना", "एल्युमिनियम"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    num:9,
    "question_en": "Which movement was started by Mahatma Gandhi in 1942?",
    "question_hi": "1942 में महात्मा गांधी ने कौन सा आंदोलन शुरू किया?",
    "options_en": ["Quit India Movement", "Non-Cooperation", "Civil Disobedience", "Swadeshi"],
    "options_hi": ["भारत छोड़ो आंदोलन", "असहयोग", "सविनय अवज्ञा", "स्वदेशी"],
    "answer_en": "Quit India Movement",
    "answer_hi": "भारत छोड़ो आंदोलन",
    "attempted": false,
    "selected": ""
  },
  {
    num:10,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "लाल ग्रह किसे कहा जाता है?",
    "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },

  {
    num:11,
    "question_en": "Which Indian state has the largest population?",
    "question_hi": "भारत में सबसे अधिक जनसंख्या किस राज्य की है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:12,
    "question_en": "Which vitamin helps in blood clotting?",
    "question_hi": "रक्त का थक्का जमाने में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    num:13,
    "question_en": "Which Indian city is known as the City of Palaces?",
    "question_hi": "महलों का शहर किसे कहा जाता है?",
    "options_en": ["Mysuru", "Jaipur", "Udaipur", "Jodhpur"],
    "options_hi": ["मैसूर", "जयपुर", "उदयपुर", "जोधपुर"],
    "answer_en": "Mysuru",
    "answer_hi": "मैसूर",
    "attempted": false,
    "selected": ""
  },
  {
    num:14,
    "question_en": "Which gas is used in soda water?",
    "question_hi": "सोडा वाटर में कौन सी गैस होती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:15,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के प्रथम राष्ट्रपति कौन थे?",
    "options_en": ["Dr. Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "Nehru"],
    "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. राधाकृष्णन", "जाकिर हुसैन", "नेहरू"],
    "answer_en": "Dr. Rajendra Prasad",
    "answer_hi": "डॉ. राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },

  {
    num:16,
    "question_en": "Which organ helps in digestion?",
    "question_hi": "पाचन में कौन सा अंग सहायक है?",
    "options_en": ["Stomach", "Heart", "Lungs", "Kidney"],
    "options_hi": ["पेट", "हृदय", "फेफड़े", "गुर्दा"],
    "answer_en": "Stomach",
    "answer_hi": "पेट",
    "attempted": false,
    "selected": ""
  },
  {
    num:17,
    "question_en": "Which Indian state is famous for apples?",
    "question_hi": "सेब उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Himachal Pradesh", "Jammu & Kashmir", "Uttarakhand", "Punjab"],
    "options_hi": ["हिमाचल प्रदेश", "जम्मू कश्मीर", "उत्तराखंड", "पंजाब"],
    "answer_en": "Himachal Pradesh",
    "answer_hi": "हिमाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:18,
    "question_en": "Which instrument measures atmospheric pressure?",
    "question_hi": "वायुमंडलीय दाब मापने का यंत्र कौन सा है?",
    "options_en": ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
    "options_hi": ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    "answer_en": "Barometer",
    "answer_hi": "बैरोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    num:19,
    "question_en": "Which Indian river originates from Amarkantak?",
    "question_hi": "अमरकंटक से कौन सी नदी निकलती है?",
    "options_en": ["Narmada", "Tapti", "Mahanadi", "Godavari"],
    "options_hi": ["नर्मदा", "ताप्ती", "महानदी", "गोदावरी"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    num:20,
    "question_en": "Which planet has rings around it?",
    "question_hi": "किस ग्रह के चारों ओर छल्ले हैं?",
    "options_en": ["Saturn", "Mars", "Earth", "Venus"],
    "options_hi": ["शनि", "मंगल", "पृथ्वी", "शुक्र"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },

  {
    num:21,
    "question_en": "Which Indian state is called the Sugar Bowl of India?",
    "question_hi": "भारत का चीनी कटोरा किस राज्य को कहा जाता है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "Punjab"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पंजाब"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:22,
    "question_en": "Which vitamin deficiency causes scurvy?",
    "question_hi": "स्कर्वी किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin B"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन B"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    num:23,
    "question_en": "Which Indian city is known as the City of Temples?",
    "question_hi": "मंदिरों का शहर किसे कहा जाता है?",
    "options_en": ["Bhubaneswar", "Varanasi", "Madurai", "Haridwar"],
    "options_hi": ["भुवनेश्वर", "वाराणसी", "मदुरै", "हरिद्वार"],
    "answer_en": "Bhubaneswar",
    "answer_hi": "भुवनेश्वर",
    "attempted": false,
    "selected": ""
  },
  {
    num:24,
    "question_en": "Which gas causes greenhouse effect?",
    "question_hi": "ग्रीनहाउस प्रभाव के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:25,
    "question_en": "Who gave the slogan 'Jai Jawan Jai Kisan'?",
    "question_hi": "'जय जवान जय किसान' का नारा किसने दिया?",
    "options_en": ["Lal Bahadur Shastri", "Nehru", "Gandhi", "Patel"],
    "options_hi": ["लाल बहादुर शास्त्री", "नेहरू", "गांधी", "पटेल"],
    "answer_en": "Lal Bahadur Shastri",
    "answer_hi": "लाल बहादुर शास्त्री",
    "attempted": false,
    "selected": ""
  },

  {
    num:26,
    "question_en": "Which organ controls balance of the body?",
    "question_hi": "शरीर का संतुलन कौन नियंत्रित करता है?",
    "options_en": ["Cerebellum", "Heart", "Liver", "Lungs"],
    "options_hi": ["सेरिबेलम", "हृदय", "यकृत", "फेफड़े"],
    "answer_en": "Cerebellum",
    "answer_hi": "सेरिबेलम",
    "attempted": false,
    "selected": ""
  },
  {
    num:27,
    "question_en": "Which Indian state is famous for saffron?",
    "question_hi": "केसर के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Jammu & Kashmir", "Himachal Pradesh", "Uttarakhand", "Punjab"],
    "options_hi": ["जम्मू कश्मीर", "हिमाचल प्रदेश", "उत्तराखंड", "पंजाब"],
    "answer_en": "Jammu & Kashmir",
    "answer_hi": "जम्मू कश्मीर",
    "attempted": false,
    "selected": ""
  },
  {
    num:28,
    "question_en": "Which device converts AC to DC?",
    "question_hi": "AC को DC में बदलने वाला यंत्र कौन सा है?",
    "options_en": ["Rectifier", "Transformer", "Generator", "Motor"],
    "options_hi": ["रेक्टिफायर", "ट्रांसफॉर्मर", "जनरेटर", "मोटर"],
    "answer_en": "Rectifier",
    "answer_hi": "रेक्टिफायर",
    "attempted": false,
    "selected": ""
  },
  {
    num:29,
    "question_en": "Which Indian river is called the Old Ganga?",
    "question_hi": "पुरानी गंगा किस नदी को कहा जाता है?",
    "options_en": ["Ghaghara", "Yamuna", "Saraswati", "Son"],
    "options_hi": ["घाघरा", "यमुना", "सरस्वती", "सोन"],
    "answer_en": "Ghaghara",
    "answer_hi": "घाघरा",
    "attempted": false,
    "selected": ""
  },
  {
    num:30,
    "question_en": "Which planet is closest to the Sun?",
    "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
    "options_en": ["Mercury", "Venus", "Earth", "Mars"],
    "options_hi": ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
    "answer_en": "Mercury",
    "answer_hi": "बुध",
    "attempted": false,
    "selected": ""
  },

  {
    num:31,
    "question_en": "Which Indian state has the largest area?",
    "question_hi": "क्षेत्रफल की दृष्टि से सबसे बड़ा राज्य कौन सा है?",
    "options_en": ["Rajasthan", "Madhya Pradesh", "Maharashtra", "UP"],
    "options_hi": ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
    num:32,
    "question_en": "Which vitamin deficiency causes rickets?",
    "question_hi": "रिकेट्स किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
    "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    num:33,
    "question_en": "Which Indian city is known as the City of Seven Islands?",
    "question_hi": "सात द्वीपों का शहर किसे कहा जाता है?",
    "options_en": ["Mumbai", "Chennai", "Kolkata", "Kochi"],
    "options_hi": ["मुंबई", "चेन्नई", "कोलकाता", "कोच्चि"],
    "answer_en": "Mumbai",
    "answer_hi": "मुंबई",
    "attempted": false,
    "selected": ""
  },
  {
    num:34,
    "question_en": "Which gas is responsible for acid rain?",
    "question_hi": "अम्लीय वर्षा के लिए कौन सी गैस जिम्मेदार है?",
    "options_en": ["Sulphur Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["सल्फर डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Sulphur Dioxide",
    "answer_hi": "सल्फर डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:35,
    "question_en": "Who was known as the Nightingale of India?",
    "question_hi": "भारत की कोकिला किसे कहा जाता है?",
    "options_en": ["Sarojini Naidu", "Annie Besant", "Indira Gandhi", "Aruna Asaf Ali"],
    "options_hi": ["सरोजिनी नायडू", "एनी बेसेंट", "इंदिरा गांधी", "अरुणा आसफ अली"],
    "answer_en": "Sarojini Naidu",
    "answer_hi": "सरोजिनी नायडू",
    "attempted": false,
    "selected": ""
  },

  {
    num:36,
    "question_en": "Which part of the eye controls light entry?",
    "question_hi": "आँख में प्रकाश के प्रवेश को कौन नियंत्रित करता है?",
    "options_en": ["Iris", "Retina", "Lens", "Cornea"],
    "options_hi": ["आइरिस", "रेटिना", "लेंस", "कॉर्निया"],
    "answer_en": "Iris",
    "answer_hi": "आइरिस",
    "attempted": false,
    "selected": ""
  },
  {
    num:37,
    "question_en": "Which Indian state is famous for fish production?",
    "question_hi": "मछली उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["West Bengal", "Kerala", "Odisha", "Andhra Pradesh"],
    "options_hi": ["पश्चिम बंगाल", "केरल", "ओडिशा", "आंध्र प्रदेश"],
    "answer_en": "Andhra Pradesh",
    "answer_hi": "आंध्र प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:38,
    "question_en": "Which device measures wind speed?",
    "question_hi": "पवन की गति मापने का यंत्र कौन सा है?",
    "options_en": ["Anemometer", "Barometer", "Hygrometer", "Thermometer"],
    "options_hi": ["एनीमोमीटर", "बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर"],
    "answer_en": "Anemometer",
    "answer_hi": "एनीमोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    num:39,
    "question_en": "Which Indian river flows into the Arabian Sea?",
    "question_hi": "कौन सी नदी अरब सागर में गिरती है?",
    "options_en": ["Narmada", "Ganga", "Yamuna", "Brahmaputra"],
    "options_hi": ["नर्मदा", "गंगा", "यमुना", "ब्रह्मपुत्र"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    num:40,
    "question_en": "Which planet is known as the Morning Star?",
    "question_hi": "सुबह का तारा किस ग्रह को कहा जाता है?",
    "options_en": ["Venus", "Mars", "Mercury", "Jupiter"],
    "options_hi": ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },

  {
    num:41,
    "question_en": "Which Indian state is called the Rice Bowl of India?",
    "question_hi": "भारत का चावल का कटोरा किसे कहा जाता है?",
    "options_en": ["Andhra Pradesh", "Punjab", "West Bengal", "Odisha"],
    "options_hi": ["आंध्र प्रदेश", "पंजाब", "पश्चिम बंगाल", "ओडिशा"],
    "answer_en": "Andhra Pradesh",
    "answer_hi": "आंध्र प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:42,
    "question_en": "Which vitamin deficiency causes beriberi?",
    "question_hi": "बेरी-बेरी किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin B1", "Vitamin B12", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन B1", "विटामिन B12", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin B1",
    "answer_hi": "विटामिन B1",
    "attempted": false,
    "selected": ""
  },
  {
    num:43,
    "question_en": "Which Indian city is known as the City of Weavers?",
    "question_hi": "बुनकरों का शहर किसे कहा जाता है?",
    "options_en": ["Varanasi", "Surat", "Kanpur", "Bhagalpur"],
    "options_hi": ["वाराणसी", "सूरत", "कानपुर", "भागलपुर"],
    "answer_en": "Varanasi",
    "answer_hi": "वाराणसी",
    "attempted": false,
    "selected": ""
  },
  {
    num:44,
    "question_en": "Which gas is used in making fertilizers?",
    "question_hi": "उर्वरक बनाने में कौन सी गैस उपयोग होती है?",
    "options_en": ["Ammonia", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["अमोनिया", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Ammonia",
    "answer_hi": "अमोनिया",
    "attempted": false,
    "selected": ""
  },
  {
    num:45,
    "question_en": "Who was the first Indian woman President of INC?",
    "question_hi": "INC की पहली भारतीय महिला अध्यक्ष कौन थीं?",
    "options_en": ["Annie Besant", "Sarojini Naidu", "Indira Gandhi", "Aruna Asaf Ali"],
    "options_hi": ["एनी बेसेंट", "सरोजिनी नायडू", "इंदिरा गांधी", "अरुणा आसफ अली"],
    "answer_en": "Annie Besant",
    "answer_hi": "एनी बेसेंट",
    "attempted": false,
    "selected": ""
  },

  {
    num:46,
    "question_en": "Which part of brain controls thinking?",
    "question_hi": "मस्तिष्क का कौन सा भाग सोचने का कार्य करता है?",
    "options_en": ["Cerebrum", "Cerebellum", "Medulla", "Pons"],
    "options_hi": ["सेरिब्रम", "सेरिबेलम", "मेडुला", "पॉन्स"],
    "answer_en": "Cerebrum",
    "answer_hi": "सेरिब्रम",
    "attempted": false,
    "selected": ""
  },
  {
    num:47,
    "question_en": "Which Indian state is famous for tea gardens?",
    "question_hi": "चाय बागानों के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Assam", "Kerala", "West Bengal", "Tamil Nadu"],
    "options_hi": ["असम", "केरल", "पश्चिम बंगाल", "तमिलनाडु"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    num:48,
    "question_en": "Which instrument measures humidity?",
    "question_hi": "आर्द्रता मापने का यंत्र कौन सा है?",
    "options_en": ["Hygrometer", "Barometer", "Thermometer", "Anemometer"],
    "options_hi": ["हाइग्रोमीटर", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
    "answer_en": "Hygrometer",
    "answer_hi": "हाइग्रोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    num:49,
    "question_en": "Which Indian river is called the Lifeline of Madhya Pradesh?",
    "question_hi": "मध्य प्रदेश की जीवन रेखा किस नदी को कहा जाता है?",
    "options_en": ["Narmada", "Tapti", "Betwa", "Son"],
    "options_hi": ["नर्मदा", "ताप्ती", "बेतवा", "सोन"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
    num:50,
    "question_en": "Which planet is known as Earth's Twin?",
    "question_hi": "पृथ्वी का जुड़वां ग्रह किसे कहा जाता है?",
    "options_en": ["Venus", "Mars", "Mercury", "Jupiter"],
    "options_hi": ["शुक्र", "मंगल", "बुध", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
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