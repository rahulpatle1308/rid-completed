const questions = [
  {
    "num": 1,
    "question_en": "Which of these is the smallest state in India by area?",
    "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
    "options_en": ["Goa", "Sikkim", "Tripura", "Nagaland"],
    "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
    "answer_en": "Goa",
    "answer_hi": "गोवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The 'Central Vigilance Commission' was established on the recommendation of:",
    "question_hi": "'केंद्रीय सतर्कता आयोग' की स्थापना किसकी सिफारिश पर हुई थी?",
    "options_en": ["K. Santhanam Committee", "Shah Commission", "Mandal Commission", "Sarkaria Commission"],
    "options_hi": ["के. संथानम समिति", "शाह आयोग", "मंडल आयोग", "सरकारिया आयोग"],
    "answer_en": "K. Santhanam Committee",
    "answer_hi": "के. संथानम समिति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which planet is known as the 'Red Planet'?",
    "question_hi": "किस ग्रह को 'लाल ग्रह' के नाम से जाना जाता है?",
    "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The 'National Anthem of India' was first sung in:",
    "question_hi": "'भारत का राष्ट्रगान' पहली बार कब गाया गया था?",
    "options_en": ["1896", "1911", "1947", "1950"],
    "options_hi": ["1896", "1911", "1947", "1950"],
    "answer_en": "1911",
    "answer_hi": "1911",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which vitamin is produced in human body when exposed to sunlight?",
    "question_hi": "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
    "options_hi": ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन के"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन डी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The 'Asiatic Society' was founded in Kolkata by:",
    "question_hi": "'एशियाटिक सोसाइटी' की स्थापना कोलकाता में किसने की थी?",
    "options_en": ["William Jones", "Warren Hastings", "Lord Wellesley", "Thomas Macaulay"],
    "options_hi": ["विलियम जोन्स", "वॉरेन हेस्टिंग्स", "लॉर्ड वेलेजली", "थॉमस मैकॉले"],
    "answer_en": "William Jones",
    "answer_hi": "विलियम जोन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which of these is NOT a part of the Parliament of India?",
    "question_hi": "निम्नलिखित में से कौन भारत की संसद का हिस्सा नहीं है?",
    "options_en": ["President", "Lok Sabha", "Rajya Sabha", "Supreme Court"],
    "options_hi": ["राष्ट्रपति", "लोकसभा", "राज्यसभा", "सर्वोच्च न्यायालय"],
    "answer_en": "Supreme Court",
    "answer_hi": "सर्वोच्च न्यायालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The 'Victoria Memorial' is located in:",
    "question_hi": "'विक्टोरिया मेमोरियल' कहाँ स्थित है?",
    "options_en": ["Mumbai", "Delhi", "Kolkata", "Chennai"],
    "options_hi": ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
    "answer_en": "Kolkata",
    "answer_hi": "कोलकाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which gas is used in electric bulbs?",
    "question_hi": "इलेक्ट्रिक बल्ब में किस गैस का उपयोग किया जाता है?",
    "options_en": ["Oxygen", "Hydrogen", "Nitrogen", "Argon"],
    "options_hi": ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "आर्गन"],
    "answer_en": "Argon",
    "answer_hi": "आर्गन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The 'Battle of Buxar' was fought in:",
    "question_hi": "'बक्सर की लड़ाई' कब लड़ी गई थी?",
    "options_en": ["1757", "1764", "1857", "1947"],
    "options_hi": ["1757", "1764", "1857", "1947"],
    "answer_en": "1764",
    "answer_hi": "1764",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which of these is a biodegradable pollutant?",
    "question_hi": "निम्नलिखित में से कौन सा जैवनिम्नीकरणीय प्रदूषक है?",
    "options_en": ["Plastic", "Glass", "Domestic Sewage", "DDT"],
    "options_hi": ["प्लास्टिक", "कांच", "घरेलू सीवेज", "डीडीटी"],
    "answer_en": "Domestic Sewage",
    "answer_hi": "घरेलू सीवेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The 'Directive Principles of State Policy' are borrowed from the Constitution of:",
    "question_hi": "'राज्य के नीति निदेशक तत्व' किस देश के संविधान से लिए गए हैं?",
    "options_en": ["USA", "UK", "Ireland", "Canada"],
    "options_hi": ["यूएसए", "यूके", "आयरलैंड", "कनाडा"],
    "answer_en": "Ireland",
    "answer_hi": "आयरलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of these is the longest day of the year in Northern Hemisphere?",
    "question_hi": "उत्तरी गोलार्ध में वर्ष का सबसे लंबा दिन कौन सा है?",
    "options_en": ["June 21", "December 22", "March 21", "September 23"],
    "options_hi": ["21 जून", "22 दिसंबर", "21 मार्च", "23 सितंबर"],
    "answer_en": "June 21",
    "answer_hi": "21 जून",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Who was the first Indian to travel in space?",
    "question_hi": "अंतरिक्ष में यात्रा करने वाले पहले भारतीय कौन थे?",
    "options_en": ["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Ravish Malhotra"],
    "options_hi": ["कल्पना चावला", "सुनीता विलियम्स", "राकेश शर्मा", "रविश मल्होत्रा"],
    "answer_en": "Rakesh Sharma",
    "answer_hi": "राकेश शर्मा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "The 'Right to Education Act' was passed in:",
    "question_hi": "'शिक्षा का अधिकार अधिनियम' कब पारित किया गया था?",
    "options_en": ["2002", "2005", "2009", "2012"],
    "options_hi": ["2002", "2005", "2009", "2012"],
    "answer_en": "2009",
    "answer_hi": "2009",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which of these metals is liquid at room temperature?",
    "question_hi": "निम्नलिखित में से कौन सी धातु कमरे के तापमान पर तरल होती है?",
    "options_en": ["Iron", "Mercury", "Copper", "Aluminium"],
    "options_hi": ["लोहा", "पारा", "तांबा", "एल्युमीनियम"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "The 'Quit India Movement' is also known as:",
    "question_hi": "'भारत छोड़ो आंदोलन' को किस नाम से भी जाना जाता है?",
    "options_en": ["August Movement", "Non-Cooperation Movement", "Civil Disobedience Movement", "Swadeshi Movement"],
    "options_hi": ["अगस्त आंदोलन", "असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "स्वदेशी आंदोलन"],
    "answer_en": "August Movement",
    "answer_hi": "अगस्त आंदोलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which of these is NOT a function of the Reserve Bank of India?",
    "question_hi": "निम्नलिखित में से कौन सा भारतीय रिजर्व बैंक का कार्य नहीं है?",
    "options_en": ["Issuing Currency", "Formulating Monetary Policy", "Preparing Union Budget", "Banker to Government"],
    "options_hi": ["मुद्रा जारी करना", "मौद्रिक नीति तैयार करना", "केंद्रीय बजट तैयार करना", "सरकार का बैंकर"],
    "answer_en": "Preparing Union Budget",
    "answer_hi": "केंद्रीय बजट तैयार करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The 'Pacific Ring of Fire' is associated with:",
    "question_hi": "'प्रशांत रिंग ऑफ फायर' किससे संबंधित है?",
    "options_en": ["Earthquakes and Volcanoes", "Cyclones", "Forest Fires", "Oil Reserves"],
    "options_hi": ["भूकंप और ज्वालामुखी", "चक्रवात", "जंगल की आग", "तेल भंडार"],
    "answer_en": "Earthquakes and Volcanoes",
    "answer_hi": "भूकंप और ज्वालामुखी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Who was the first woman Chief Minister of an Indian state?",
    "question_hi": "भारतीय राज्य की पहली महिला मुख्यमंत्री कौन थीं?",
    "options_en": ["Indira Gandhi", "Sarojini Naidu", "Sucheta Kripalani", "Mamata Banerjee"],
    "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "सुचेता कृपलानी", "ममता बनर्जी"],
    "answer_en": "Sucheta Kripalani",
    "answer_hi": "सुचेता कृपलानी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which of these is the largest desert in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा रेगिस्तान है?",
    "options_en": ["Sahara", "Gobi", "Arabian", "Kalahari"],
    "options_hi": ["सहारा", "गोबी", "अरबी", "कालाहारी"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "The 'National River of India' is:",
    "question_hi": "'भारत की राष्ट्रीय नदी' है:",
    "options_en": ["Yamuna", "Ganga", "Brahmaputra", "Godavari"],
    "options_hi": ["यमुना", "गंगा", "ब्रह्मपुत्र", "गोदावरी"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which of these is NOT a greenhouse gas?",
    "question_hi": "निम्नलिखित में से कौन सी ग्रीनहाउस गैस नहीं है?",
    "options_en": ["Carbon Dioxide", "Methane", "Oxygen", "Nitrous Oxide"],
    "options_hi": ["कार्बन डाइऑक्साइड", "मीथेन", "ऑक्सीजन", "नाइट्रस ऑक्साइड"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "The 'Indian National Congress' was founded in:",
    "question_hi": "'भारतीय राष्ट्रीय कांग्रेस' की स्थापना कब हुई थी?",
    "options_en": ["1885", "1905", "1920", "1947"],
    "options_hi": ["1885", "1905", "1920", "1947"],
    "answer_en": "1885",
    "answer_hi": "1885",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which of these is a Rabi crop?",
    "question_hi": "निम्नलिखित में से कौन सी रबी फसल है?",
    "options_en": ["Rice", "Wheat", "Cotton", "Jute"],
    "options_hi": ["चावल", "गेहूँ", "कपास", "जूट"],
    "answer_en": "Wheat",
    "answer_hi": "गेहूँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "The 'Permanent Settlement' was introduced by:",
    "question_hi": "'स्थायी बंदोबस्त' किसने शुरू किया था?",
    "options_en": ["Lord Cornwallis", "Lord Wellesley", "Lord Dalhousie", "Lord William Bentinck"],
    "options_hi": ["लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेजली", "लॉर्ड डलहौजी", "लॉर्ड विलियम बेंटिक"],
    "answer_en": "Lord Cornwallis",
    "answer_hi": "लॉर्ड कॉर्नवालिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of these is the smallest bone in human body?",
    "question_hi": "निम्नलिखित में से कौन सी मानव शरीर की सबसे छोटी हड्डी है?",
    "options_en": ["Femur", "Stapes", "Tibia", "Radius"],
    "options_hi": ["फीमर", "स्टेप्स", "टिबिया", "रेडियस"],
    "answer_en": "Stapes",
    "answer_hi": "स्टेप्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "The 'President of India' can be impeached by:",
    "question_hi": "'भारत के राष्ट्रपति' को महाभियोग द्वारा हटाया जा सकता है:",
    "options_en": ["Supreme Court", "Lok Sabha", "Parliament", "Prime Minister"],
    "options_hi": ["सर्वोच्च न्यायालय", "लोकसभा", "संसद", "प्रधानमंत्री"],
    "answer_en": "Parliament",
    "answer_hi": "संसद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which of these is the largest island in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा द्वीप है?",
    "options_en": ["Greenland", "New Guinea", "Borneo", "Madagascar"],
    "options_hi": ["ग्रीनलैंड", "न्यू गिनी", "बोर्नियो", "मेडागास्कर"],
    "answer_en": "Greenland",
    "answer_hi": "ग्रीनलैंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "The 'First War of Indian Independence' took place in:",
    "question_hi": "'भारत का प्रथम स्वतंत्रता संग्राम' कब हुआ था?",
    "options_en": ["1757", "1857", "1942", "1947"],
    "options_hi": ["1757", "1857", "1942", "1947"],
    "answer_en": "1857",
    "answer_hi": "1857",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which of these is NOT a chemical change?",
    "question_hi": "निम्नलिखित में से कौन सा रासायनिक परिवर्तन नहीं है?",
    "options_en": ["Burning of paper", "Rusting of iron", "Melting of ice", "Digestion of food"],
    "options_hi": ["कागज का जलना", "लोहे में जंग लगना", "बर्फ का पिघलना", "भोजन का पाचन"],
    "answer_en": "Melting of ice",
    "answer_hi": "बर्फ का पिघलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "The 'National Animal of India' is:",
    "question_hi": "'भारत का राष्ट्रीय पशु' है:",
    "options_en": ["Lion", "Tiger", "Elephant", "Peacock"],
    "options_hi": ["शेर", "बाघ", "हाथी", "मोर"],
    "answer_en": "Tiger",
    "answer_hi": "बाघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of these is a non-renewable source of energy?",
    "question_hi": "निम्नलिखित में से कौन सा ऊर्जा का गैर-नवीकरणीय स्रोत है?",
    "options_en": ["Solar Energy", "Wind Energy", "Coal", "Hydroelectric Power"],
    "options_hi": ["सौर ऊर्जा", "पवन ऊर्जा", "कोयला", "जलविद्युत शक्ति"],
    "answer_en": "Coal",
    "answer_hi": "कोयला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "The 'Buddha' attained enlightenment at:",
    "question_hi": "'बुद्ध' को कहाँ ज्ञान की प्राप्ति हुई थी?",
    "options_en": ["Lumbini", "Bodh Gaya", "Sarnath", "Kushinagar"],
    "options_hi": ["लुम्बिनी", "बोध गया", "सारनाथ", "कुशीनगर"],
    "answer_en": "Bodh Gaya",
    "answer_hi": "बोध गया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which of these is the largest gland in human body?",
    "question_hi": "निम्नलिखित में से कौन सा मानव शरीर की सबसे बड़ी ग्रंथि है?",
    "options_en": ["Pancreas", "Thyroid", "Liver", "Pituitary"],
    "options_hi": ["अग्न्याशय", "थायराइड", "यकृत", "पीयूष ग्रंथि"],
    "answer_en": "Liver",
    "answer_hi": "यकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "The 'Rowlatt Act' was passed in:",
    "question_hi": "'रॉलेट एक्ट' कब पारित किया गया था?",
    "options_en": ["1919", "1920", "1935", "1942"],
    "options_hi": ["1919", "1920", "1935", "1942"],
    "answer_en": "1919",
    "answer_hi": "1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which of these is the fastest land animal?",
    "question_hi": "निम्नलिखित में से कौन सा सबसे तेज भूमि जानवर है?",
    "options_en": ["Lion", "Cheetah", "Leopard", "Horse"],
    "options_hi": ["शेर", "चीता", "तेंदुआ", "घोड़ा"],
    "answer_en": "Cheetah",
    "answer_hi": "चीता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "The 'National Calendar of India' is based on:",
    "question_hi": "'भारत का राष्ट्रीय कैलेंडर' किस पर आधारित है?",
    "options_en": ["Gregorian Calendar", "Vikram Samvat", "Saka Era", "Hijri Calendar"],
    "options_hi": ["ग्रेगोरियन कैलेंडर", "विक्रम संवत", "शक युग", "हिजरी कैलेंडर"],
    "answer_en": "Saka Era",
    "answer_hi": "शक युग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which of these is NOT a Union Territory of India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का केंद्र शासित प्रदेश नहीं है?",
    "options_en": ["Chandigarh", "Puducherry", "Daman and Diu", "Sikkim"],
    "options_hi": ["चंडीगढ़", "पुदुचेरी", "दमन और दीव", "सिक्किम"],
    "answer_en": "Sikkim",
    "answer_hi": "सिक्किम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "The 'First President of India' was:",
    "question_hi": "'भारत के पहले राष्ट्रपति' थे:",
    "options_en": ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "V.V. Giri"],
    "options_hi": ["राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "वी.वी. गिरि"],
    "answer_en": "Rajendra Prasad",
    "answer_hi": "राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of these is the longest mountain range in the world?",
    "question_hi": "निम्नलिखित में से कौन सी दुनिया की सबसे लंबी पर्वत श्रृंखला है?",
    "options_en": ["Himalayas", "Andes", "Rockies", "Alps"],
    "options_hi": ["हिमालय", "एंडीज", "रॉकी", "आल्प्स"],
    "answer_en": "Andes",
    "answer_hi": "एंडीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "The 'Battle of Plassey' was fought between:",
    "question_hi": "'प्लासी की लड़ाई' किसके बीच लड़ी गई थी?",
    "options_en": ["British and French", "British and Siraj-ud-Daulah", "British and Tipu Sultan", "British and Marathas"],
    "options_hi": ["अंग्रेज और फ्रांसीसी", "अंग्रेज और सिराज-उद-दौला", "अंग्रेज और टीपू सुल्तान", "अंग्रेज और मराठे"],
    "answer_en": "British and Siraj-ud-Daulah",
    "answer_hi": "अंग्रेज और सिराज-उद-दौला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which of these is a communicable disease?",
    "question_hi": "निम्नलिखित में से कौन सी संचारी रोग है?",
    "options_en": ["Diabetes", "Cancer", "Tuberculosis", "Hypertension"],
    "options_hi": ["मधुमेह", "कैंसर", "तपेदिक", "उच्च रक्तचाप"],
    "answer_en": "Tuberculosis",
    "answer_hi": "तपेदिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "The 'First Lok Sabha' was constituted in:",
    "question_hi": "'प्रथम लोकसभा' का गठन कब हुआ था?",
    "options_en": ["1947", "1950", "1952", "1957"],
    "options_hi": ["1947", "1950", "1952", "1957"],
    "answer_en": "1952",
    "answer_hi": "1952",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which of these is the largest ocean in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा महासागर है?",
    "options_en": ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
    "options_hi": ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    "answer_en": "Pacific Ocean",
    "answer_hi": "प्रशांत महासागर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "The 'First Prime Minister of India' was:",
    "question_hi": "'भारत के पहले प्रधानमंत्री' थे:",
    "options_en": ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Rajiv Gandhi"],
    "options_hi": ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "राजीव गांधी"],
    "answer_en": "Jawaharlal Nehru",
    "answer_hi": "जवाहरलाल नेहरू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which of these is the deepest point in the oceans?",
    "question_hi": "निम्नलिखित में से कौन सा महासागरों में सबसे गहरा बिंदु है?",
    "options_en": ["Mariana Trench", "Puerto Rico Trench", "Java Trench", "Tonga Trench"],
    "options_hi": ["मरियाना ट्रेंच", "प्यूर्टो रिको ट्रेंच", "जावा ट्रेंच", "टोंगा ट्रेंच"],
    "answer_en": "Mariana Trench",
    "answer_hi": "मरियाना ट्रेंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "The 'First Chief Justice of India' was:",
    "question_hi": "'भारत के पहले मुख्य न्यायाधीश' थे:",
    "options_en": ["H.J. Kania", "M. Patanjali Sastri", "Hiralal J. Kania", "B.P. Sinha"],
    "options_hi": ["एच.जे. कानिया", "एम. पतंजलि शास्त्री", "हीरालाल जे. कानिया", "बी.पी. सिन्हा"],
    "answer_en": "H.J. Kania",
    "answer_hi": "एच.जे. कानिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which of these is the largest plateau in the world?",
    "question_hi": "निम्नलिखित में से कौन सा दुनिया का सबसे बड़ा पठार है?",
    "options_en": ["Tibetan Plateau", "Deccan Plateau", "Colorado Plateau", "Anatolian Plateau"],
    "options_hi": ["तिब्बती पठार", "दक्कन का पठार", "कोलोराडो पठार", "अनातोलियन पठार"],
    "answer_en": "Tibetan Plateau",
    "answer_hi": "तिब्बती पठार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "The 'First Speaker of Lok Sabha' was:",
    "question_hi": "'लोकसभा के पहले अध्यक्ष' थे:",
    "options_en": ["G.V. Mavalankar", "Sardar Hukam Singh", "Neelam Sanjiva Reddy", "Balram Jakhar"],
    "options_hi": ["जी.वी. मावलंकर", "सरदार हुकम सिंह", "नीलम संजीव रेड्डी", "बलराम जाखड़"],
    "answer_en": "G.V. Mavalankar",
    "answer_hi": "जी.वी. मावलंकर",
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