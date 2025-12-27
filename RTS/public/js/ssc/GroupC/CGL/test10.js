const questions = [
  {
     num:1,
    "question_en": "Which planet is known as the Red Planet?",
    "question_hi": "लाल ग्रह के नाम से कौन सा ग्रह जाना जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
     num:2,
    "question_en": "Who wrote the Indian National Anthem?",
    "question_hi": "भारतीय राष्ट्रगान किसने लिखा?",
    "options_en": ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Chandra Bose", "Sarojini Naidu"],
    "options_hi": ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सुभाष चंद्र बोस", "सरोजिनी नायडू"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
     num:3,
    "question_en": "Which river originates from the Yamunotri glacier?",
    "question_hi": "यमुनोत्री हिमनद से कौन सी नदी निकलती है?",
    "options_en": ["Ganga", "Yamuna", "Sutlej", "Alaknanda"],
    "options_hi": ["गंगा", "यमुना", "सतलुज", "अलकनंदा"],
    "answer_en": "Yamuna",
    "answer_hi": "यमुना",
    "attempted": false,
    "selected": ""
  },
  {
     num:4,
    "question_en": "Which metal is used for galvanization?",
    "question_hi": "गल्वनाइजेशन के लिए किस धातु का प्रयोग होता है?",
    "options_en": ["Copper", "Aluminium", "Zinc", "Lead"],
    "options_hi": ["तांबा", "एल्युमिनियम", "जस्ता", "सीसा"],
    "answer_en": "Zinc",
    "answer_hi": "जस्ता",
    "attempted": false,
    "selected": ""
  },
  {
     num:5,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Dr. Rajendra Prasad", "S. Radhakrishnan", "Jawaharlal Nehru", "C. Rajagopalachari"],
    "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. राधाकृष्णन", "जवाहरलाल नेहरू", "सी. राजगोपालाचारी"],
    "answer_en": "Dr. Rajendra Prasad",
    "answer_hi": "डॉ. राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
     num:6,
    "question_en": "Which vitamin is produced in the skin by sunlight?",
    "question_hi": "सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
     num:7,
    "question_en": "Which Indian state is known as the Spice Garden of India?",
    "question_hi": "भारत का मसालों का बगीचा किस राज्य को कहा जाता है?",
    "options_en": ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    "options_hi": ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
     num:8,
    "question_en": "Who founded the Maurya Empire?",
    "question_hi": "मौर्य साम्राज्य की स्थापना किसने की?",
    "options_en": ["Ashoka", "Bindusara", "Chandragupta Maurya", "Bimbisara"],
    "options_hi": ["अशोक", "बिंदुसार", "चंद्रगुप्त मौर्य", "बिंबिसार"],
    "answer_en": "Chandragupta Maurya",
    "answer_hi": "चंद्रगुप्त मौर्य",
    "attempted": false,
    "selected": ""
  },
  {
     num:9,
    "question_en": "Which instrument is used to measure wind speed?",
    "question_hi": "हवा की गति मापने के लिए कौन सा यंत्र उपयोग होता है?",
    "options_en": ["Barometer", "Anemometer", "Thermometer", "Hygrometer"],
    "options_hi": ["बैरोमीटर", "एनीमोमीटर", "थर्मामीटर", "हाइग्रोमीटर"],
    "answer_en": "Anemometer",
    "answer_hi": "एनीमोमीटर",
    "attempted": false,
    "selected": ""
  },
  {
     num:10,
    "question_en": "Which country is known as the Land of the Rising Sun?",
    "question_hi": "उगते सूरज की भूमि किस देश को कहा जाता है?",
    "options_en": ["China", "Japan", "South Korea", "Thailand"],
    "options_hi": ["चीन", "जापान", "दक्षिण कोरिया", "थाईलैंड"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },

  {
     num:11,
    "question_en": "Which Indian river is the longest?",
    "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
    "options_en": ["Ganga", "Yamuna", "Godavari", "Krishna"],
    "options_hi": ["गंगा", "यमुना", "गोदावरी", "कृष्णा"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
     num:12,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Marconi"],
    "options_hi": ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोलस टेस्ला", "मार्कोनी"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
     num:13,
    "question_en": "Which Indian state has the highest literacy rate?",
    "question_hi": "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
    "options_en": ["Kerala", "Tamil Nadu", "Maharashtra", "Himachal Pradesh"],
    "options_hi": ["केरल", "तमिलनाडु", "महाराष्ट्र", "हिमाचल प्रदेश"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
     num:14,
    "question_en": "Which blood group is known as the universal donor?",
    "question_hi": "सार्वभौमिक दाता कौन सा रक्त समूह है?",
    "options_en": ["A", "B", "AB", "O"],
    "options_hi": ["A", "B", "AB", "O"],
    "answer_en": "O",
    "answer_hi": "O",
    "attempted": false,
    "selected": ""
  },
  {
     num:15,
    "question_en": "Which Mughal emperor built the Red Fort?",
    "question_hi": "लाल किला किस मुगल शासक ने बनवाया?",
    "options_en": ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    "options_hi": ["अकबर", "जहांगीर", "शाहजहाँ", "औरंगज़ेब"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
     num:16,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "फायर एक्सटिंग्विशर में कौन सी गैस उपयोग होती है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
     num:17,
    "question_en": "Who is known as the Father of the Indian Constitution?",
    "question_hi": "भारतीय संविधान के जनक किसे कहा जाता है?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "B. R. Ambedkar", "Rajendra Prasad"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "बी. आर. अंबेडकर", "राजेंद्र प्रसाद"],
    "answer_en": "B. R. Ambedkar",
    "answer_hi": "बी. आर. अंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
     num:18,
    "question_en": "Which Indian city is known as the Pink City?",
    "question_hi": "पिंक सिटी किस भारतीय शहर को कहा जाता है?",
    "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Ajmer"],
    "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "अजमेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
     num:19,
    "question_en": "Which acid is found in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Acetic acid", "Citric acid", "Lactic acid", "Oxalic acid"],
    "options_hi": ["एसिटिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल", "ऑक्सेलिक अम्ल"],
    "answer_en": "Citric acid",
    "answer_hi": "सिट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
     num:20,
    "question_en": "Which Indian state is the largest producer of rice?",
    "question_hi": "चावल का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["West Bengal", "Punjab", "Uttar Pradesh", "Andhra Pradesh"],
    "options_hi": ["पश्चिम बंगाल", "पंजाब", "उत्तर प्रदेश", "आंध्र प्रदेश"],
    "answer_en": "West Bengal",
    "answer_hi": "पश्चिम बंगाल",
    "attempted": false,
    "selected": ""
  },

  {
     num:21,
    "question_en": "Which planet has the maximum number of moons?",
    "question_hi": "सबसे अधिक उपग्रह किस ग्रह के हैं?",
    "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
    "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },
  {
     num:22,
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
     num:23,
    "question_en": "Which layer of the atmosphere contains ozone?",
    "question_hi": "वायुमंडल की कौन सी परत में ओजोन पाई जाती है?",
    "options_en": ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
    "options_hi": ["क्षोभमंडल", "समतापमंडल", "मध्यमंडल", "तापमंडल"],
    "answer_en": "Stratosphere",
    "answer_hi": "समतापमंडल",
    "attempted": false,
    "selected": ""
  },
  {
     num:24,
    "question_en": "Which Indian city is known as the Silicon Valley of India?",
    "question_hi": "भारत की सिलिकॉन वैली किसे कहा जाता है?",
    "options_en": ["Hyderabad", "Pune", "Bengaluru", "Chennai"],
    "options_hi": ["हैदराबाद", "पुणे", "बेंगलुरु", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
     num:25,
    "question_en": "Which vitamin helps in calcium absorption?",
    "question_hi": "कैल्शियम के अवशोषण में कौन सा विटामिन मदद करता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
     num:26,
    "question_en": "Which Indian river is also called Vridha Ganga?",
    "question_hi": "वृद्ध गंगा किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Kaveri", "Krishna", "Narmada"],
    "options_hi": ["गोदावरी", "कावेरी", "कृष्णा", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
     num:27,
    "question_en": "Who discovered penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Louis Pasteur", "Alexander Fleming", "Robert Koch", "Edward Jenner"],
    "options_hi": ["लुई पाश्चर", "अलेक्जेंडर फ्लेमिंग", "रॉबर्ट कोच", "एडवर्ड जेनर"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
     num:28,
    "question_en": "Which Indian state is known for Blue Pottery?",
    "question_hi": "ब्लू पॉटरी किस राज्य के लिए प्रसिद्ध है?",
    "options_en": ["Rajasthan", "Gujarat", "Uttar Pradesh", "Punjab"],
    "options_hi": ["राजस्थान", "गुजरात", "उत्तर प्रदेश", "पंजाब"],
    "answer_en": "Rajasthan",
    "answer_hi": "राजस्थान",
    "attempted": false,
    "selected": ""
  },
  {
     num:29,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कमरे के तापमान पर कौन सी धातु तरल होती है?",
    "options_en": ["Lead", "Mercury", "Zinc", "Tin"],
    "options_hi": ["सीसा", "पारा", "जस्ता", "टिन"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
     num:30,
    "question_en": "Which Indian freedom fighter is known as Netaji?",
    "question_hi": "नेताजी के नाम से कौन प्रसिद्ध थे?",
    "options_en": ["Bhagat Singh", "Subhash Chandra Bose", "Lala Lajpat Rai", "Chandra Shekhar Azad"],
    "options_hi": ["भगत सिंह", "सुभाष चंद्र बोस", "लाला लाजपत राय", "चंद्रशेखर आज़ाद"],
    "answer_en": "Subhash Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },

  {
     num:31,
    "question_en": "Which gas is essential for respiration?",
    "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Nitrogen", "Oxygen", "Carbon Dioxide", "Helium"],
    "options_hi": ["नाइट्रोजन", "ऑक्सीजन", "कार्बन डाइऑक्साइड", "हीलियम"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
     num:32,
    "question_en": "Which Indian city is known as the City of Joy?",
    "question_hi": "सिटी ऑफ जॉय किसे कहा जाता है?",
    "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
    "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
     num:33,
    "question_en": "Which vitamin deficiency causes night blindness?",
    "question_hi": "रतौंधी किस विटामिन की कमी से होती है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin A",
    "answer_hi": "विटामिन A",
    "attempted": false,
    "selected": ""
  },
  {
     num:34,
    "question_en": "Which Indian dam is the longest?",
    "question_hi": "भारत का सबसे लंबा बांध कौन सा है?",
    "options_en": ["Bhakra Nangal", "Hirakud", "Tehri", "Sardar Sarovar"],
    "options_hi": ["भाखड़ा नांगल", "हीराकुंड", "टिहरी", "सरदार सरोवर"],
    "answer_en": "Hirakud",
    "answer_hi": "हीराकुंड",
    "attempted": false,
    "selected": ""
  },
  {
     num:35,
    "question_en": "Which country is known as the Land of Midnight Sun?",
    "question_hi": "मध्यरात्रि सूर्य की भूमि किस देश को कहा जाता है?",
    "options_en": ["Sweden", "Norway", "Finland", "Iceland"],
    "options_hi": ["स्वीडन", "नॉर्वे", "फिनलैंड", "आइसलैंड"],
    "answer_en": "Norway",
    "answer_hi": "नॉर्वे",
    "attempted": false,
    "selected": ""
  },
  {
     num:36,
    "question_en": "Who wrote the book 'Discovery of India'?",
    "question_hi": "'डिस्कवरी ऑफ इंडिया' के लेखक कौन हैं?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "S. Radhakrishnan"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "रवींद्रनाथ टैगोर", "डॉ. राधाकृष्णन"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
     num:37,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "भारत में सबसे लंबा समुद्र तट किस राज्य का है?",
    "options_en": ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    "options_hi": ["तमिलनाडु", "आंध्र प्रदेश", "गुजरात", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
     num:38,
    "question_en": "Which acid is present in vinegar?",
    "question_hi": "सिरके में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Citric acid", "Acetic acid", "Lactic acid", "Formic acid"],
    "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_en": "Acetic acid",
    "answer_hi": "एसिटिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
     num:39,
    "question_en": "Which Indian freedom fighter is known as Lokmanya?",
    "question_hi": "लोकमान्य के नाम से कौन प्रसिद्ध थे?",
    "options_en": ["Gopal Krishna Gokhale", "Bal Gangadhar Tilak", "Lala Lajpat Rai", "Dadabhai Naoroji"],
    "options_hi": ["गोपाल कृष्ण गोखले", "बाल गंगाधर तिलक", "लाला लाजपत राय", "दादाभाई नौरोजी"],
    "answer_en": "Bal Gangadhar Tilak",
    "answer_hi": "बाल गंगाधर तिलक",
    "attempted": false,
    "selected": ""
  },
  {
     num:40,
    "question_en": "Which Indian state is famous for Sattriya dance?",
    "question_hi": "सत्रिया नृत्य किस राज्य से संबंधित है?",
    "options_en": ["Assam", "Odisha", "Manipur", "Tripura"],
    "options_hi": ["असम", "ओडिशा", "मणिपुर", "त्रिपुरा"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },

  {
     num:41,
    "question_en": "Which gas causes acid rain?",
    "question_hi": "अम्लीय वर्षा किस गैस के कारण होती है?",
    "options_en": ["Oxygen", "Sulphur Dioxide", "Nitrogen", "Carbon Monoxide"],
    "options_hi": ["ऑक्सीजन", "सल्फर डाइऑक्साइड", "नाइट्रोजन", "कार्बन मोनोऑक्साइड"],
    "answer_en": "Sulphur Dioxide",
    "answer_hi": "सल्फर डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
     num:42,
    "question_en": "Which Indian city is known as the Garden City?",
    "question_hi": "गार्डन सिटी किस भारतीय शहर को कहा जाता है?",
    "options_en": ["Mysuru", "Bengaluru", "Pune", "Dehradun"],
    "options_hi": ["मैसूर", "बेंगलुरु", "पुणे", "देहरादून"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
     num:43,
    "question_en": "Which vitamin is known as anti-hemorrhagic vitamin?",
    "question_hi": "एंटी-हैमरेजिक विटामिन किसे कहा जाता है?",
    "options_en": ["Vitamin C", "Vitamin D", "Vitamin K", "Vitamin E"],
    "options_hi": ["विटामिन C", "विटामिन D", "विटामिन K", "विटामिन E"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
     num:44,
    "question_en": "Which Indian river flows into the Arabian Sea?",
    "question_hi": "कौन सी नदी अरब सागर में गिरती है?",
    "options_en": ["Godavari", "Krishna", "Narmada", "Ganga"],
    "options_hi": ["गोदावरी", "कृष्णा", "नर्मदा", "गंगा"],
    "answer_en": "Narmada",
    "answer_hi": "नर्मदा",
    "attempted": false,
    "selected": ""
  },
  {
     num:45,
    "question_en": "Who invented the electric bulb?",
    "question_hi": "इलेक्ट्रिक बल्ब का आविष्कार किसने किया?",
    "options_en": ["Nikola Tesla", "Thomas Edison", "Alexander Bell", "James Watt"],
    "options_hi": ["निकोलस टेस्ला", "थॉमस एडिसन", "अलेक्जेंडर बेल", "जेम्स वाट"],
    "answer_en": "Thomas Edison",
    "answer_hi": "थॉमस एडिसन",
    "attempted": false,
    "selected": ""
  },
  {
     num:46,
    "question_en": "Which Indian state is the largest producer of sugarcane?",
    "question_hi": "गन्ने का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Karnataka", "Bihar"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "कर्नाटक", "बिहार"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
     num:47,
    "question_en": "Which organ purifies blood in the human body?",
    "question_hi": "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?",
    "options_en": ["Heart", "Liver", "Kidney", "Lungs"],
    "options_hi": ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },
  {
     num:48,
    "question_en": "Which Indian freedom fighter gave the slogan 'Do or Die'?",
    "question_hi": "'करो या मरो' का नारा किसने दिया?",
    "options_en": ["Subhash Chandra Bose", "Mahatma Gandhi", "Bhagat Singh", "Jawaharlal Nehru"],
    "options_hi": ["सुभाष चंद्र बोस", "महात्मा गांधी", "भगत सिंह", "जवाहरलाल नेहरू"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
     num:49,
    "question_en": "Which Indian state is famous for Bihu dance?",
    "question_hi": "बिहू नृत्य किस राज्य से संबंधित है?",
    "options_en": ["Assam", "Manipur", "Tripura", "Meghalaya"],
    "options_hi": ["असम", "मणिपुर", "त्रिपुरा", "मेघालय"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
     num:50,
    "question_en": "Which day is celebrated as World Environment Day?",
    "question_hi": "विश्व पर्यावरण दिवस कब मनाया जाता है?",
    "options_en": ["22 April", "5 June", "16 September", "1 December"],
    "options_hi": ["22 अप्रैल", "5 जून", "16 सितंबर", "1 दिसंबर"],
    "answer_en": "5 June",
    "answer_hi": "5 जून",
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