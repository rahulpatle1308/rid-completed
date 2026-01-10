const questions = [
  {
    num:1,
    "question_en": "Which Indian state is known as the Land of Rising Sun?",
    "question_hi": "उदयमान सूर्य की भूमि किस राज्य को कहा जाता है?",
    "options_en": ["Arunachal Pradesh", "Assam", "Nagaland", "Manipur"],
    "options_hi": ["अरुणाचल प्रदेश", "असम", "नागालैंड", "मणिपुर"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    num:2,
    "question_en": "Which vitamin is also known as Ascorbic Acid?",
    "question_hi": "एस्कॉर्बिक एसिड किस विटामिन को कहा जाता है?",
    "options_en": ["Vitamin C", "Vitamin A", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन C", "विटामिन A", "विटामिन D", "विटामिन K"],
    "answer_en": "Vitamin C",
    "answer_hi": "विटामिन C",
    "attempted": false,
    "selected": ""
  },
  {
    num:3,
    "question_en": "Which Indian city is known as the Pink City?",
    "question_hi": "पिंक सिटी किस शहर को कहा जाता है?",
    "options_en": ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
    "options_hi": ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    num:4,
    "question_en": "Which gas is essential for burning?",
    "question_hi": "दहन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    num:5,
    "question_en": "Who wrote the book 'Discovery of India'?",
    "question_hi": "'डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Tagore", "Subhash Bose"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "टैगोर", "सुभाष बोस"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },

  {
    num:6,
    "question_en": "Which organ produces bile?",
    "question_hi": "पित्त का निर्माण कौन सा अंग करता है?",
    "options_en": ["Liver", "Pancreas", "Stomach", "Kidney"],
    "options_hi": ["यकृत", "अग्न्याशय", "पेट", "गुर्दा"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    num:7,
    "question_en": "Which Indian state is famous for silk?",
    "question_hi": "रेशम के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Karnataka", "Assam", "Tamil Nadu", "West Bengal"],
    "options_hi": ["कर्नाटक", "असम", "तमिलनाडु", "पश्चिम बंगाल"],
    "answer_en": "Karnataka",
    "answer_hi": "कर्नाटक",
    "attempted": false,
    "selected": ""
  },
  {
    num:8,
    "question_en": "Which instrument measures earthquakes?",
    "question_hi": "भूकंप मापने का यंत्र कौन सा है?",
    "options_en": ["Seismograph", "Barometer", "Anemometer", "Hygrometer"],
    "options_hi": ["सीस्मोग्राफ", "बैरोमीटर", "एनीमोमीटर", "हाइग्रोमीटर"],
    "answer_en": "Seismograph",
    "answer_hi": "सीस्मोग्राफ",
    "attempted": false,
    "selected": ""
  },
  {
    num:9,
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
    num:10,
    "question_en": "Which planet has the maximum moons?",
    "question_hi": "किस ग्रह के सबसे अधिक उपग्रह हैं?",
    "options_en": ["Saturn", "Jupiter", "Mars", "Uranus"],
    "options_hi": ["शनि", "बृहस्पति", "मंगल", "यूरेनस"],
    "answer_en": "Saturn",
    "answer_hi": "शनि",
    "attempted": false,
    "selected": ""
  },

  {
    num:11,
    "question_en": "Which Indian state is known as the Coal Capital?",
    "question_hi": "कोयला राजधानी किसे कहा जाता है?",
    "options_en": ["Jharkhand", "Odisha", "Chhattisgarh", "Bihar"],
    "options_hi": ["झारखंड", "ओडिशा", "छत्तीसगढ़", "बिहार"],
    "answer_en": "Jharkhand",
    "answer_hi": "झारखंड",
    "attempted": false,
    "selected": ""
  },
  {
    num:12,
    "question_en": "Which vitamin deficiency causes anemia?",
    "question_hi": "एनीमिया किस विटामिन की कमी से होता है?",
    "options_en": ["Vitamin B12", "Vitamin A", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन B12", "विटामिन A", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin B12",
    "answer_hi": "विटामिन B12",
    "attempted": false,
    "selected": ""
  },
  {
    num:13,
    "question_en": "Which Indian city is called the City of Lakes?",
    "question_hi": "झीलों का शहर किसे कहा जाता है?",
    "options_en": ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
    "options_hi": ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
    "answer_en": "Udaipur",
    "answer_hi": "उदयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    num:14,
    "question_en": "Which gas is used in refrigerators?",
    "question_hi": "रेफ्रिजरेटर में कौन सी गैस उपयोग होती है?",
    "options_en": ["Freon", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["फ्रियोन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Freon",
    "answer_hi": "फ्रियोन",
    "attempted": false,
    "selected": ""
  },
  {
    num:15,
    "question_en": "Who founded the Maurya Empire?",
    "question_hi": "मौर्य साम्राज्य की स्थापना किसने की?",
    "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Harsha"],
    "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "हर्ष"],
    "answer_en": "Chandragupta Maurya",
    "answer_hi": "चंद्रगुप्त मौर्य",
    "attempted": false,
    "selected": ""
  },

  {
    num:16,
    "question_en": "Which organ controls breathing?",
    "question_hi": "श्वसन को कौन नियंत्रित करता है?",
    "options_en": ["Medulla", "Cerebrum", "Cerebellum", "Pons"],
    "options_hi": ["मेडुला", "सेरिब्रम", "सेरिबेलम", "पॉन्स"],
    "answer_en": "Medulla",
    "answer_hi": "मेडुला",
    "attempted": false,
    "selected": ""
  },
  {
    num:17,
    "question_en": "Which Indian state is famous for rubber production?",
    "question_hi": "रबर उत्पादन के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Kerala", "Tripura", "Assam", "Tamil Nadu"],
    "options_hi": ["केरल", "त्रिपुरा", "असम", "तमिलनाडु"],
    "answer_en": "Kerala",
    "answer_hi": "केरल",
    "attempted": false,
    "selected": ""
  },
  {
    num:18,
    "question_en": "Which instrument measures electric current?",
    "question_hi": "विद्युत धारा मापने का यंत्र कौन सा है?",
    "options_en": ["Ammeter", "Voltmeter", "Ohmmeter", "Galvanometer"],
    "options_hi": ["एमीटर", "वोल्टमीटर", "ओह्मीटर", "गैल्वेनोमीटर"],
    "answer_en": "Ammeter",
    "answer_hi": "एमीटर",
    "attempted": false,
    "selected": ""
  },
  {
    num:19,
    "question_en": "Which river flows through Paris?",
    "question_hi": "पेरिस से होकर कौन सी नदी बहती है?",
    "options_en": ["Seine", "Danube", "Rhine", "Thames"],
    "options_hi": ["सीन", "डैन्यूब", "राइन", "थेम्स"],
    "answer_en": "Seine",
    "answer_hi": "सीन",
    "attempted": false,
    "selected": ""
  },
  {
    num:20,
    "question_en": "Which planet is known as the Blue Planet?",
    "question_hi": "नीला ग्रह किसे कहा जाता है?",
    "options_en": ["Earth", "Neptune", "Uranus", "Venus"],
    "options_hi": ["पृथ्वी", "नेपच्यून", "यूरेनस", "शुक्र"],
    "answer_en": "Earth",
    "answer_hi": "पृथ्वी",
    "attempted": false,
    "selected": ""
  },
  {
    num:21,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कमरे के तापमान पर कौन सी धातु द्रव होती है?",
    "options_en": ["Mercury", "Iron", "Aluminium", "Copper"],
    "options_hi": ["पारा", "लोहा", "एल्यूमिनियम", "तांबा"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    num:22,
    "question_en": "Who is known as the Father of the Indian Constitution?",
    "question_hi": "भारतीय संविधान के जनक किसे कहा जाता है?",
    "options_en": ["Dr. B.R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad", "Sardar Patel"],
    "options_hi": ["डॉ. बी.आर. आंबेडकर", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "सरदार पटेल"],
    "answer_en": "Dr. B.R. Ambedkar",
    "answer_hi": "डॉ. बी.आर. आंबेडकर",
    "attempted": false,
    "selected": ""
  },
  {
    num:23,
    "question_en": "Which part of the plant conducts photosynthesis?",
    "question_hi": "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    "options_en": ["Leaf", "Root", "Stem", "Flower"],
    "options_hi": ["पत्ती", "जड़", "तना", "फूल"],
    "answer_en": "Leaf",
    "answer_hi": "पत्ती",
    "attempted": false,
    "selected": ""
  },
  {
    num:24,
    "question_en": "Which country gifted the Statue of Liberty to the USA?",
    "question_hi": "स्टैच्यू ऑफ लिबर्टी अमेरिका को किस देश ने भेंट की?",
    "options_en": ["France", "Britain", "Germany", "Canada"],
    "options_hi": ["फ्रांस", "ब्रिटेन", "जर्मनी", "कनाडा"],
    "answer_en": "France",
    "answer_hi": "फ्रांस",
    "attempted": false,
    "selected": ""
  },
  {
    num:25,
    "question_en": "Which vitamin helps in blood clotting?",
    "question_hi": "रक्त के थक्के जमने में कौन सा विटामिन सहायक है?",
    "options_en": ["Vitamin K", "Vitamin C", "Vitamin D", "Vitamin A"],
    "options_hi": ["विटामिन K", "विटामिन C", "विटामिन D", "विटामिन A"],
    "answer_en": "Vitamin K",
    "answer_hi": "विटामिन K",
    "attempted": false,
    "selected": ""
  },
  {
    num:26,
    "question_en": "Which Indian river is also called Dakshin Ganga?",
    "question_hi": "दक्षिण गंगा किस नदी को कहा जाता है?",
    "options_en": ["Godavari", "Krishna", "Cauvery", "Narmada"],
    "options_hi": ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    "answer_en": "Godavari",
    "answer_hi": "गोदावरी",
    "attempted": false,
    "selected": ""
  },
  {
    num:27,
    "question_en": "Which gas is filled in electric bulbs?",
    "question_hi": "विद्युत बल्ब में कौन सी गैस भरी जाती है?",
    "options_en": ["Argon", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["आर्गन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    num:28,
    "question_en": "Who was the first woman Prime Minister of India?",
    "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    "options_en": ["Indira Gandhi", "Pratibha Patil", "Sarojini Naidu", "Sonia Gandhi"],
    "options_hi": ["इंदिरा गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू", "सोनिया गांधी"],
    "answer_en": "Indira Gandhi",
    "answer_hi": "इंदिरा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    num:29,
    "question_en": "Which soil is best for cotton cultivation?",
    "question_hi": "कपास की खेती के लिए कौन सी मिट्टी सर्वोत्तम है?",
    "options_en": ["Black Soil", "Red Soil", "Alluvial Soil", "Laterite Soil"],
    "options_hi": ["काली मिट्टी", "लाल मिट्टी", "जलोढ़ मिट्टी", "लेटराइट मिट्टी"],
    "answer_en": "Black Soil",
    "answer_hi": "काली मिट्टी",
    "attempted": false,
    "selected": ""
  },
  {
    num:30,
    "question_en": "Which organ purifies blood in the human body?",
    "question_hi": "मानव शरीर में रक्त को शुद्ध कौन करता है?",
    "options_en": ["Kidney", "Heart", "Liver", "Lungs"],
    "options_hi": ["गुर्दा", "हृदय", "यकृत", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "गुर्दा",
    "attempted": false,
    "selected": ""
  },

  {
    num:31,
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
    num:32,
    "question_en": "Which Indian state has the longest coastline?",
    "question_hi": "भारत में सबसे लंबा तटरेखा किस राज्य की है?",
    "options_en": ["Gujarat", "Tamil Nadu", "Andhra Pradesh", "Odisha"],
    "options_hi": ["गुजरात", "तमिलनाडु", "आंध्र प्रदेश", "ओडिशा"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
    num:33,
    "question_en": "Which acid is found in lemon?",
    "question_hi": "नींबू में कौन सा अम्ल पाया जाता है?",
    "options_en": ["Citric Acid", "Acetic Acid", "Lactic Acid", "Formic Acid"],
    "options_hi": ["सिट्रिक अम्ल", "एसिटिक अम्ल", "लैक्टिक अम्ल", "फॉर्मिक अम्ल"],
    "answer_en": "Citric Acid",
    "answer_hi": "सिट्रिक अम्ल",
    "attempted": false,
    "selected": ""
  },
  {
    num:34,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Dr. Rajendra Prasad", "Jawaharlal Nehru", "Dr. S. Radhakrishnan", "C. Rajagopalachari"],
    "options_hi": ["डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "डॉ. सर्वपल्ली राधाकृष्णन", "सी. राजगोपालाचारी"],
    "answer_en": "Dr. Rajendra Prasad",
    "answer_hi": "डॉ. राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    num:35,
    "question_en": "Which gas is used in fire extinguishers?",
    "question_hi": "अग्निशामक यंत्रों में कौन सी गैस प्रयोग होती है?",
    "options_en": ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
    "options_hi": ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    num:36,
    "question_en": "Which mountain range separates India from Tibet?",
    "question_hi": "भारत को तिब्बत से कौन सी पर्वत श्रृंखला अलग करती है?",
    "options_en": ["Himalayas", "Aravalli", "Vindhya", "Satpura"],
    "options_hi": ["हिमालय", "अरावली", "विंध्य", "सतपुड़ा"],
    "answer_en": "Himalayas",
    "answer_hi": "हिमालय",
    "attempted": false,
    "selected": ""
  },
  {
    num:37,
    "question_en": "Which vitamin is produced in the skin by sunlight?",
    "question_hi": "सूर्य के प्रकाश से त्वचा में कौन सा विटामिन बनता है?",
    "options_en": ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin K"],
    "options_hi": ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन K"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    num:38,
    "question_en": "Which Indian festival is known as the festival of lights?",
    "question_hi": "रोशनी का त्योहार किसे कहा जाता है?",
    "options_en": ["Diwali", "Holi", "Eid", "Christmas"],
    "options_hi": ["दीवाली", "होली", "ईद", "क्रिसमस"],
    "answer_en": "Diwali",
    "answer_hi": "दीवाली",
    "attempted": false,
    "selected": ""
  },
  {
    num:39,
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
    num:40,
    "question_en": "Which continent is known as the Dark Continent?",
    "question_hi": "किस महाद्वीप को अंधकार महाद्वीप कहा जाता है?",
    "options_en": ["Africa", "Asia", "Europe", "Australia"],
    "options_hi": ["अफ्रीका", "एशिया", "यूरोप", "ऑस्ट्रेलिया"],
    "answer_en": "Africa",
    "answer_hi": "अफ्रीका",
    "attempted": false,
    "selected": ""
  },

  {
    num:41,
    "question_en": "Which Indian state is famous for tea gardens?",
    "question_hi": "चाय बागानों के लिए कौन सा राज्य प्रसिद्ध है?",
    "options_en": ["Assam", "Kerala", "Himachal Pradesh", "Sikkim"],
    "options_hi": ["असम", "केरल", "हिमाचल प्रदेश", "सिक्किम"],
    "answer_en": "Assam",
    "answer_hi": "असम",
    "attempted": false,
    "selected": ""
  },
  {
    num:42,
    "question_en": "Which blood group is known as universal donor?",
    "question_hi": "सार्वभौमिक दाता किस रक्त समूह को कहा जाता है?",
    "options_en": ["O Negative", "AB Positive", "A Positive", "B Negative"],
    "options_hi": ["O नेगेटिव", "AB पॉजिटिव", "A पॉजिटिव", "B नेगेटिव"],
    "answer_en": "O Negative",
    "answer_hi": "O नेगेटिव",
    "attempted": false,
    "selected": ""
  },
  {
    num:43,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Alexander Graham Bell", "Thomas Edison", "Newton", "Tesla"],
    "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "न्यूटन", "टेस्ला"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    num:44,
    "question_en": "Which Indian ocean lies to the south of India?",
    "question_hi": "भारत के दक्षिण में कौन सा महासागर स्थित है?",
    "options_en": ["Indian Ocean", "Pacific Ocean", "Atlantic Ocean", "Arctic Ocean"],
    "options_hi": ["हिंद महासागर", "प्रशांत महासागर", "अटलांटिक महासागर", "आर्कटिक महासागर"],
    "answer_en": "Indian Ocean",
    "answer_hi": "हिंद महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    num:45,
    "question_en": "Which metal is the best conductor of electricity?",
    "question_hi": "विद्युत का सबसे अच्छा चालक कौन सी धातु है?",
    "options_en": ["Silver", "Copper", "Gold", "Aluminium"],
    "options_hi": ["चांदी", "तांबा", "सोना", "एल्यूमिनियम"],
    "answer_en": "Silver",
    "answer_hi": "चांदी",
    "attempted": false,
    "selected": ""
  },
  {
    num:46,
    "question_en": "Which Mughal emperor built the Taj Mahal?",
    "question_hi": "ताजमहल का निर्माण किस मुगल सम्राट ने करवाया?",
    "options_en": ["Shah Jahan", "Akbar", "Babur", "Aurangzeb"],
    "options_hi": ["शाहजहाँ", "अकबर", "बाबर", "औरंगज़ेब"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    num:47,
    "question_en": "Which part of the brain controls balance?",
    "question_hi": "मस्तिष्क का कौन सा भाग संतुलन नियंत्रित करता है?",
    "options_en": ["Cerebellum", "Cerebrum", "Medulla", "Pons"],
    "options_hi": ["सेरिबेलम", "सेरिब्रम", "मेडुला", "पॉन्स"],
    "answer_en": "Cerebellum",
    "answer_hi": "सेरिबेलम",
    "attempted": false,
    "selected": ""
  },
  {
    num:48,
    "question_en": "Which Indian city is known as the Silicon Valley of India?",
    "question_hi": "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?",
    "options_en": ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
    "options_hi": ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
    "answer_en": "Bengaluru",
    "answer_hi": "बेंगलुरु",
    "attempted": false,
    "selected": ""
  },
  {
    num:49,
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
    num:50,
    "question_en": "Which Indian freedom fighter is known as Netaji?",
    "question_hi": "नेताजी किस स्वतंत्रता सेनानी को कहा जाता है?",
    "options_en": ["Subhas Chandra Bose", "Bhagat Singh", "Lala Lajpat Rai", "Chandrashekhar Azad"],
    "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "लाला लाजपत राय", "चंद्रशेखर आज़ाद"],
    "answer_en": "Subhas Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
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