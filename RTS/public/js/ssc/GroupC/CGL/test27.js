const questions = [
  {
    "num": 1,
    "question_en": "Which of these is the largest river island in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा नदी द्वीप है?",
    "options_en": ["Majuli", "Manhattan", "Marajó", "Bananal"],
    "options_hi": ["माजुली", "मैनहटन", "मरजो", "बनानल"],
    "answer_en": "Majuli",
    "answer_hi": "माजुली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The 'First Indian to win the Ramon Magsaysay Award' was:",
    "question_hi": "रमन मैग्सेसे पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Vinoba Bhave", "Mother Teresa", "C. Rajagopalachari", "Jayaprakash Narayan"],
    "options_hi": ["विनोबा भावे", "मदर टेरेसा", "सी. राजगोपालाचारी", "जयप्रकाश नारायण"],
    "answer_en": "Vinoba Bhave",
    "answer_hi": "विनोबा भावे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of these is NOT a part of the human digestive system?",
    "question_hi": "निम्नलिखित में से कौन सा मानव पाचन तंत्र का हिस्सा नहीं है?",
    "options_en": ["Stomach", "Liver", "Kidney", "Small Intestine"],
    "options_hi": ["पेट", "यकृत", "गुर्दा", "छोटी आंत"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The 'First woman to win the Nobel Prize in Physics' was:",
    "question_hi": "भौतिकी में नोबेल पुरस्कार जीतने वाली पहली महिला थीं:",
    "options_en": ["Marie Curie", "Maria Goeppert-Mayer", "Donna Strickland", "Andrea Ghez"],
    "options_hi": ["मैरी क्यूरी", "मारिया गोएपर्ट-मेयर", "डोना स्ट्रिकलैंड", "एंड्रिया गेज़"],
    "answer_en": "Marie Curie",
    "answer_hi": "मैरी क्यूरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which of these is the capital of South Africa?",
    "question_hi": "निम्नलिखित में से कौन सा दक्षिण अफ्रीका की राजधानी है?",
    "options_en": ["Cape Town", "Pretoria", "Johannesburg", "Durban"],
    "options_hi": ["केप टाउन", "प्रिटोरिया", "जोहान्सबर्ग", "डरबन"],
    "answer_en": "Pretoria",
    "answer_hi": "प्रिटोरिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The 'First Indian to win the Miss World title' was:",
    "question_hi": "मिस वर्ल्ड खिताब जीतने वाली पहली भारतीय थीं:",
    "options_en": ["Aishwarya Rai", "Sushmita Sen", "Priyanka Chopra", "Reita Faria"],
    "options_hi": ["ऐश्वर्या राय", "सुष्मिता सेन", "प्रियंका चोपड़ा", "रीटा फारिया"],
    "answer_en": "Reita Faria",
    "answer_hi": "रीटा फारिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of these is NOT a type of volcano?",
    "question_hi": "निम्नलिखित में से कौन सा ज्वालामुखी का प्रकार नहीं है?",
    "options_en": ["Active", "Dormant", "Extinct", "Static"],
    "options_hi": ["सक्रिय", "सुषुप्त", "विलुप्त", "स्थिर"],
    "answer_en": "Static",
    "answer_hi": "स्थिर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The 'First Indian woman to win the Miss Universe title' was:",
    "question_hi": "मिस यूनिवर्स खिताब जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Sushmita Sen", "Lara Dutta", "Harnaaz Sandhu", "Aishwarya Rai"],
    "options_hi": ["सुष्मिता सेन", "लारा दत्ता", "हरनाज़ संधू", "ऐश्वर्या राय"],
    "answer_en": "Sushmita Sen",
    "answer_hi": "सुष्मिता सेन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which of these is the largest coral reef system in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया की सबसे बड़ी कोरल रीफ प्रणाली है?",
    "options_en": ["Great Barrier Reef", "Mesoamerican Barrier Reef", "Florida Reef", "Andros Barrier Reef"],
    "options_hi": ["ग्रेट बैरियर रीफ", "मेसोअमेरिकन बैरियर रीफ", "फ्लोरिडा रीफ", "एंड्रोस बैरियर रीफ"],
    "answer_en": "Great Barrier Reef",
    "answer_hi": "ग्रेट बैरियर रीफ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The 'First Indian to win the Grammy Award' was:",
    "question_hi": "ग्रैमी पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Ravi Shankar", "Zakir Hussain", "A.R. Rahman", "Vikku Vinayakram"],
    "options_hi": ["रवि शंकर", "जाकिर हुसैन", "ए.आर. रहमान", "विक्कु विनायकरम"],
    "answer_en": "Ravi Shankar",
    "answer_hi": "रवि शंकर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of these is NOT a type of government?",
    "question_hi": "निम्नलिखित में से कौन सा सरकार का प्रकार नहीं है?",
    "options_en": ["Democracy", "Monarchy", "Dictatorship", "Autocracy"],
    "options_hi": ["लोकतंत्र", "राजतंत्र", "तानाशाही", "एकतंत्र"],
    "answer_en": "Autocracy",
    "answer_hi": "एकतंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The 'First Indian woman to win the Padma Shri award' was:",
    "question_hi": "पद्म श्री पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["M.S. Subbulakshmi", "Lata Mangeshkar", "Sarojini Naidu", "Amrita Pritam"],
    "options_hi": ["एम.एस. सुब्बुलक्ष्मी", "लता मंगेशकर", "सरोजिनी नायडू", "अमृता प्रीतम"],
    "answer_en": "M.S. Subbulakshmi",
    "answer_hi": "एम.एस. सुब्बुलक्ष्मी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of these is the largest delta in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा डेल्टा है?",
    "options_en": ["Ganges-Brahmaputra Delta", "Mississippi Delta", "Nile Delta", "Amazon Delta"],
    "options_hi": ["गंगा-ब्रह्मपुत्र डेल्टा", "मिसिसिपी डेल्टा", "नाइल डेल्टा", "अमेज़न डेल्टा"],
    "answer_en": "Ganges-Brahmaputra Delta",
    "answer_hi": "गंगा-ब्रह्मपुत्र डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The 'First Indian to win the Oscar Award' was:",
    "question_hi": "ऑस्कर पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Bhanu Athaiya", "Satyajit Ray", "A.R. Rahman", "Gulzar"],
    "options_hi": ["भानु अथैया", "सत्यजित रे", "ए.आर. रहमान", "गुलज़ार"],
    "answer_en": "Bhanu Athaiya",
    "answer_hi": "भानु अथैया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which of these is NOT a type of chemical bond?",
    "question_hi": "निम्नलिखित में से कौन सा रासायनिक बंधन का प्रकार नहीं है?",
    "options_en": ["Ionic", "Covalent", "Metallic", "Nuclear"],
    "options_hi": ["आयनिक", "सहसंयोजक", "धात्विक", "नाभिकीय"],
    "answer_en": "Nuclear",
    "answer_hi": "नाभिकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The 'First Indian woman to win the Sahitya Akademi Award' was:",
    "question_hi": "साहित्य अकादमी पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Amrita Pritam", "Mahadevi Verma", "Ashapurna Devi", "Sarojini Naidu"],
    "options_hi": ["अमृता प्रीतम", "महादेवी वर्मा", "आशापूर्णा देवी", "सरोजिनी नायडू"],
    "answer_en": "Amrita Pritam",
    "answer_hi": "अमृता प्रीतम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which of these is the largest waterfall in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा झरना है?",
    "options_en": ["Angel Falls", "Victoria Falls", "Niagara Falls", "Iguazu Falls"],
    "options_hi": ["एंजल फॉल्स", "विक्टोरिया फॉल्स", "नियाग्रा फॉल्स", "इग्वाज़ू फॉल्स"],
    "answer_en": "Angel Falls",
    "answer_hi": "एंजल फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The 'First Indian woman to win the Arjuna Award' was:",
    "question_hi": "अर्जुन पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Stephie D'Souza", "P.T. Usha", "Shiny Abraham", "M.L. Valsamma"],
    "options_hi": ["स्टेफी डिसूज़ा", "पी.टी. उषा", "शाइनी अब्राहम", "एम.एल. वल्सम्मा"],
    "answer_en": "Stephie D'Souza",
    "answer_hi": "स्टेफी डिसूज़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which of these is NOT a type of computer memory?",
    "question_hi": "निम्नलिखित में से कौन सा कंप्यूटर मेमोरी का प्रकार नहीं है?",
    "options_en": ["RAM", "ROM", "CPU", "Cache"],
    "options_hi": ["रैम", "रोम", "सीपीयू", "कैश"],
    "answer_en": "CPU",
    "answer_hi": "सीपीयू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "The 'First Indian woman to win the Dronacharya Award' was:",
    "question_hi": "द्रोणाचार्य पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Renu Kohli", "Purnima Mahato", "S. M. Arif", "Gurbachan Singh Randhawa"],
    "options_hi": ["रेनू कोहली", "पूर्णिमा महतो", "एस. एम. आरिफ", "गुरबचन सिंह रंधावा"],
    "answer_en": "Renu Kohli",
    "answer_hi": "रेनू कोहली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of these is the largest bay in the world?",
    "question_hi": "निम्नलिखित में से कौन सी दुनिया की सबसे बड़ी खाड़ी है?",
    "options_en": ["Bay of Bengal", "Hudson Bay", "Bay of Biscay", "Gulf of Mexico"],
    "options_hi": ["बंगाल की खाड़ी", "हडसन की खाड़ी", "बिस्के की खाड़ी", "मेक्सिको की खाड़ी"],
    "answer_en": "Bay of Bengal",
    "answer_hi": "बंगाल की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The 'First Indian woman to win the Pulitzer Prize' was:",
    "question_hi": "पुलित्जर पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Jhumpa Lahiri", "Arundhati Roy", "Kiran Desai", "Chitra Banerjee Divakaruni"],
    "options_hi": ["झुम्पा लाहिड़ी", "अरुंधति रॉय", "किरण देसाई", "चित्रा बनर्जी दिवाकरुणी"],
    "answer_en": "Jhumpa Lahiri",
    "answer_hi": "झुम्पा लाहिड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of these is NOT a type of lens?",
    "question_hi": "निम्नलिखित में से कौन सा लेंस का प्रकार नहीं है?",
    "options_en": ["Convex", "Concave", "Plano", "Circular"],
    "options_hi": ["उत्तल", "अवतल", "समतल", "वृत्ताकार"],
    "answer_en": "Circular",
    "answer_hi": "वृत्ताकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The 'First Indian woman to win the Man Booker Prize' was:",
    "question_hi": "मैन बुकर पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Arundhati Roy", "Kiran Desai", "Jhumpa Lahiri", "Salman Rushdie"],
    "options_hi": ["अरुंधति रॉय", "किरण देसाई", "झुम्पा लाहिड़ी", "सलमान रश्दी"],
    "answer_en": "Arundhati Roy",
    "answer_hi": "अरुंधति रॉय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of these is the largest glacier in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा ग्लेशियर है?",
    "options_en": ["Lambert Glacier", "Siachen Glacier", "Fedchenko Glacier", "Biafo Glacier"],
    "options_hi": ["लैम्बर्ट ग्लेशियर", "सियाचिन ग्लेशियर", "फेडचेंको ग्लेशियर", "बियाफो ग्लेशियर"],
    "answer_en": "Lambert Glacier",
    "answer_hi": "लैम्बर्ट ग्लेशियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The 'First Indian woman to win the National Film Award for Best Actress' was:",
    "question_hi": "राष्ट्रीय फिल्म पुरस्कार (सर्वश्रेष्ठ अभिनेत्री) जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Nargis", "Meena Kumari", "Shabana Azmi", "Smita Patil"],
    "options_hi": ["नरगिस", "मीना कुमारी", "शबाना आज़मी", "स्मिता पाटिल"],
    "answer_en": "Nargis",
    "answer_hi": "नरगिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of these is NOT a type of acid?",
    "question_hi": "निम्नलिखित में से कौन सा अम्ल का प्रकार नहीं है?",
    "options_en": ["Hydrochloric", "Sulfuric", "Nitric", "Alkaline"],
    "options_hi": ["हाइड्रोक्लोरिक", "सल्फ्यूरिक", "नाइट्रिक", "क्षारीय"],
    "answer_en": "Alkaline",
    "answer_hi": "क्षारीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The 'First Indian woman to win the Bharat Ratna award' was:",
    "question_hi": "भारत रत्न पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Indira Gandhi", "Mother Teresa", "Lata Mangeshkar", "M.S. Subbulakshmi"],
    "options_hi": ["इंदिरा गांधी", "मदर टेरेसा", "लता मंगेशकर", "एम.एस. सुब्बुलक्ष्मी"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which of these is the largest saltwater lake in India?",
    "question_hi": "निम्नलिखित में से कौन सी भारत की सबसे बड़ी खारे पानी की झील है?",
    "options_en": ["Chilika Lake", "Sambhar Lake", "Pulicat Lake", "Wular Lake"],
    "options_hi": ["चिल्का झील", "सांभर झील", "पुलिकट झील", "वुलर झील"],
    "answer_en": "Chilika Lake",
    "answer_hi": "चिल्का झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The 'First Indian woman to win the Ramon Magsaysay Award' was:",
    "question_hi": "रमन मैग्सेसे पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mother Teresa", "Kiran Bedi", "Aruna Roy", "Mahasweta Devi"],
    "options_hi": ["मदर टेरेसा", "किरण बेदी", "अरुणा रॉय", "महाश्वेता देवी"],
    "answer_en": "Mother Teresa",
    "answer_hi": "मदर टेरेसा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which of these is NOT a type of radiation?",
    "question_hi": "निम्नलिखित में से कौन सा विकिरण का प्रकार नहीं है?",
    "options_en": ["Alpha", "Beta", "Gamma", "Delta"],
    "options_hi": ["अल्फा", "बीटा", "गामा", "डेल्टा"],
    "answer_en": "Delta",
    "answer_hi": "डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The 'First Indian woman to win the Jnanpith Award' was:",
    "question_hi": "ज्ञानपीठ पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Ashapurna Devi", "Amrita Pritam", "Mahadevi Verma", "Sarojini Naidu"],
    "options_hi": ["आशापूर्णा देवी", "अमृता प्रीतम", "महादेवी वर्मा", "सरोजिनी नायडू"],
    "answer_en": "Ashapurna Devi",
    "answer_hi": "आशापूर्णा देवी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of these is the largest freshwater lake in India?",
    "question_hi": "निम्नलिखित में से कौन सी भारत की सबसे बड़ी मीठे पानी की झील है?",
    "options_en": ["Wular Lake", "Loktak Lake", "Dal Lake", "Nainital Lake"],
    "options_hi": ["वुलर झील", "लोकटक झील", "डल झील", "नैनीताल झील"],
    "answer_en": "Wular Lake",
    "answer_hi": "वुलर झील",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The 'First Indian woman to win the Olympic medal' was:",
    "question_hi": "ओलंपिक पदक जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Karnam Malleswari", "P.T. Usha", "Mary Kom", "Saina Nehwal"],
    "options_hi": ["कर्णम मल्लेश्वरी", "पी.टी. उषा", "मैरी कॉम", "साइना नेहवाल"],
    "answer_en": "Karnam Malleswari",
    "answer_hi": "कर्णम मल्लेश्वरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of these is NOT a type of force?",
    "question_hi": "निम्नलिखित में से कौन सा बल का प्रकार नहीं है?",
    "options_en": ["Gravitational", "Electromagnetic", "Nuclear", "Chemical"],
    "options_hi": ["गुरुत्वाकर्षण", "विद्युत चुम्बकीय", "नाभिकीय", "रासायनिक"],
    "answer_en": "Chemical",
    "answer_hi": "रासायनिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The 'First Indian woman to win the Grammy Award' was:",
    "question_hi": "ग्रैमी पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["M.S. Subbulakshmi", "Lata Mangeshkar", "Asha Bhosle", "Shreya Ghoshal"],
    "options_hi": ["एम.एस. सुब्बुलक्ष्मी", "लता मंगेशकर", "आशा भोसले", "श्रेया घोषाल"],
    "answer_en": "M.S. Subbulakshmi",
    "answer_hi": "एम.एस. सुब्बुलक्ष्मी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which of these is the largest peninsula in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा प्रायद्वीप है?",
    "options_en": ["Arabian Peninsula", "Indian Peninsula", "Korean Peninsula", "Balkan Peninsula"],
    "options_hi": ["अरब प्रायद्वीप", "भारतीय प्रायद्वीप", "कोरियाई प्रायद्वीप", "बाल्कन प्रायद्वीप"],
    "answer_en": "Arabian Peninsula",
    "answer_hi": "अरब प्रायद्वीप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The 'First Indian woman to win the Oscar Award' was:",
    "question_hi": "ऑस्कर पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Bhanu Athaiya", "A.R. Rahman", "Gulzar", "Resul Pookutty"],
    "options_hi": ["भानु अथैया", "ए.आर. रहमान", "गुलज़ार", "रेसुल पुकुट्टी"],
    "answer_en": "Bhanu Athaiya",
    "answer_hi": "भानु अथैया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of these is NOT a type of tissue?",
    "question_hi": "निम्नलिखित में से कौन सा ऊतक का प्रकार नहीं है?",
    "options_en": ["Epithelial", "Connective", "Muscular", "Cellular"],
    "options_hi": ["उपकला", "संयोजी", "पेशी", "कोशिकीय"],
    "answer_en": "Cellular",
    "answer_hi": "कोशिकीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The 'First Indian woman to win the Miss Earth title' was:",
    "question_hi": "मिस अर्थ खिताब जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Nicole Faria", "Lara Dutta", "Priyanka Chopra", "Dia Mirza"],
    "options_hi": ["निकोल फारिया", "लारा दत्ता", "प्रियंका चोपड़ा", "दिया मिर्जा"],
    "answer_en": "Nicole Faria",
    "answer_hi": "निकोल फारिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of these is the largest gulf in the world?",
    "question_hi": "निम्नलिखित में से कौन सी दुनिया की सबसे बड़ी खाड़ी है?",
    "options_en": ["Gulf of Mexico", "Persian Gulf", "Gulf of Aden", "Gulf of Guinea"],
    "options_hi": ["मेक्सिको की खाड़ी", "फारस की खाड़ी", "एडन की खाड़ी", "गिनी की खाड़ी"],
    "answer_en": "Gulf of Mexico",
    "answer_hi": "मेक्सिको की खाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The 'First Indian woman to win the Miss International title' was:",
    "question_hi": "मिस इंटरनेशनल खिताब जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Pooja Batra", "Lara Dutta", "Priyanka Chopra", "Neha Dhupia"],
    "options_hi": ["पूजा बत्रा", "लारा दत्ता", "प्रियंका चोपड़ा", "नेहा धूपिया"],
    "answer_en": "Pooja Batra",
    "answer_hi": "पूजा बत्रा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of these is NOT a type of mineral?",
    "question_hi": "निम्नलिखित में से कौन सा खनिज का प्रकार नहीं है?",
    "options_en": ["Quartz", "Feldspar", "Mica", "Granite"],
    "options_hi": ["क्वार्ट्ज", "फेल्डस्पार", "अभ्रक", "ग्रेनाइट"],
    "answer_en": "Granite",
    "answer_hi": "ग्रेनाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The 'First Indian woman to win the Miss Asia Pacific title' was:",
    "question_hi": "मिस एशिया पैसिफिक खिताब जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Dia Mirza", "Lara Dutta", "Priyanka Chopra", "Sushmita Sen"],
    "options_hi": ["दिया मिर्जा", "लारा दत्ता", "प्रियंका चोपड़ा", "सुष्मिता सेन"],
    "answer_en": "Dia Mirza",
    "answer_hi": "दिया मिर्जा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which of these is the largest strait in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा जलडमरूमध्य है?",
    "options_en": ["Strait of Malacca", "Strait of Hormuz", "Bering Strait", "Gibraltar Strait"],
    "options_hi": ["मलक्का जलडमरूमध्य", "होर्मुज जलडमरूमध्य", "बेरिंग जलडमरूमध्य", "जिब्राल्टर जलडमरूमध्य"],
    "answer_en": "Strait of Malacca",
    "answer_hi": "मलक्का जलडमरूमध्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The 'First Indian woman to win the Miss Tourism title' was:",
    "question_hi": "मिस टूरिज्म खिताब जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Tina Munim", "Dia Mirza", "Lara Dutta", "Priyanka Chopra"],
    "options_hi": ["टीना मुनीम", "दिया मिर्जा", "लारा दत्ता", "प्रियंका चोपड़ा"],
    "answer_en": "Tina Munim",
    "answer_hi": "टीना मुनीम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which of these is NOT a type of cloud computing?",
    "question_hi": "निम्नलिखित में से कौन सा क्लाउड कंप्यूटिंग का प्रकार नहीं है?",
    "options_en": ["IaaS", "PaaS", "SaaS", "DaaS"],
    "options_hi": ["IaaS", "PaaS", "SaaS", "DaaS"],
    "answer_en": "DaaS",
    "answer_hi": "DaaS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The 'First Indian woman to win the Miss Grand International title' was:",
    "question_hi": "मिस ग्रैंड इंटरनेशनल खिताब जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Vartika Singh", "Lara Dutta", "Priyanka Chopra", "Sushmita Sen"],
    "options_hi": ["वर्तिका सिंह", "लारा दत्ता", "प्रियंका चोपड़ा", "सुष्मिता सेन"],
    "answer_en": "Vartika Singh",
    "answer_hi": "वर्तिका सिंह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of these is the largest archipelago in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा द्वीपसमूह है?",
    "options_en": ["Indonesia", "Philippines", "Japan", "Malaysia"],
    "options_hi": ["इंडोनेशिया", "फिलीपींस", "जापान", "मलेशिया"],
    "answer_en": "Indonesia",
    "answer_hi": "इंडोनेशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The 'First Indian woman to win the Miss Supranational title' was:",
    "question_hi": "मिस सुप्रानेशनल खिताब जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Srinidhi Shetty", "Lara Dutta", "Priyanka Chopra", "Sushmita Sen"],
    "options_hi": ["श्रीनिधि शेट्टी", "लारा दत्ता", "प्रियंका चोपड़ा", "सुष्मिता सेन"],
    "answer_en": "Srinidhi Shetty",
    "answer_hi": "श्रीनिधि शेट्टी",
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