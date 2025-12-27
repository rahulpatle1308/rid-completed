const questions = [
  {
    "num": 1,
    "question_en": "Who is the author of 'Gitanjali'?",
    "question_hi": "'गीतांजलि' के लेखक कौन हैं?",
    "options_en": ["Rabindranath Tagore", "Kavi Pradeep", "Harivansh Rai Bachchan", "Bankim Chandra Chatterjee"],
    "options_hi": ["रवींद्रनाथ ठाकुर", "कवि प्रदीप", "हरिवंश राय बच्चन", "बंकिम चंद्र चट्टोपाध्याय"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रवींद्रनाथ ठाकुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the capital of Australia?",
    "question_hi": "ऑस्ट्रेलिया की राजधानी क्या है?",
    "options_en": ["Sydney", "Canberra", "Melbourne", "Perth"],
    "options_hi": ["सिडनी", "कैनबरा", "मेलबर्न", "पर्थ"],
    "answer_en": "Canberra",
    "answer_hi": "कैनबरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which is the largest planet in the Solar System?",
    "question_hi": "सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
    "options_en": ["Earth", "Mars", "Jupiter", "Saturn"],
    "options_hi": ["पृथ्वी", "मंगल", "बृहस्पति", "शनि"],
    "answer_en": "Jupiter",
    "answer_hi": "बृहस्पति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which gas is essential for respiration?",
    "question_hi": "श्वसन के लिए कौन सी गैस आवश्यक है?",
    "options_en": ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
    "answer_en": "Oxygen",
    "answer_hi": "ऑक्सीजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Who was the first President of India?",
    "question_hi": "भारत के पहले राष्ट्रपति कौन थे?",
    "options_en": ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Jawaharlal Nehru", "Zakir Husain"],
    "options_hi": ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "जवाहरलाल नेहरू", "जाकिर हुसैन"],
    "answer_en": "Dr. Rajendra Prasad",
    "answer_hi": "डॉ. राजेंद्र प्रसाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which is the smallest prime number?",
    "question_hi": "सबसे छोटा अभाज्य संख्या कौन सा है?",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which is known as the 'Red Planet'?",
    "question_hi": "कौन सा ग्रह 'लाल ग्रह' के नाम से जाना जाता है?",
    "options_en": ["Mars", "Venus", "Jupiter", "Saturn"],
    "options_hi": ["मंगल", "शुक्र", "बृहस्पति", "शनि"],
    "answer_en": "Mars",
    "answer_hi": "मंगल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is the largest continent by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे बड़ा महाद्वीप कौन सा है?",
    "options_en": ["Africa", "Asia", "Europe", "America"],
    "options_hi": ["अफ्रीका", "एशिया", "यूरोप", "अमेरिका"],
    "answer_en": "Asia",
    "answer_hi": "एशिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which metal is liquid at room temperature?",
    "question_hi": "कौन सा धातु कमरे के तापमान पर द्रव होती है?",
    "options_en": ["Mercury", "Iron", "Aluminium", "Lead"],
    "options_hi": ["पारा", "लोहा", "एल्यूमिनियम", "सीसा"],
    "answer_en": "Mercury",
    "answer_hi": "पारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
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
    "num": 11,
    "question_en": "Which organ in human body produces insulin?",
    "question_hi": "मानव शरीर में कौन सा अंग इंसुलिन बनाता है?",
    "options_en": ["Liver", "Pancreas", "Kidney", "Heart"],
    "options_hi": ["जिगर", "अग्न्याशय", "किडनी", "हृदय"],
    "answer_en": "Pancreas",
    "answer_hi": "अग्न्याशय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Who discovered penicillin?",
    "question_hi": "पेनिसिलिन की खोज किसने की?",
    "options_en": ["Alexander Fleming", "Louis Pasteur", "Marie Curie", "Isaac Newton"],
    "options_hi": ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "मैरी क्यूरी", "आइजैक न्यूटन"],
    "answer_en": "Alexander Fleming",
    "answer_hi": "अलेक्जेंडर फ्लेमिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the chemical formula of water?",
    "question_hi": "पानी का रासायनिक सूत्र क्या है?",
    "options_en": ["H2O", "CO2", "O2", "NaCl"],
    "options_hi": ["H2O", "CO2", "O2", "NaCl"],
    "answer_en": "H2O",
    "answer_hi": "H2O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which country hosted the 2020 Summer Olympics?",
    "question_hi": "2020 ग्रीष्मकालीन ओलंपिक की मेज़बानी किस देश ने की?",
    "options_en": ["China", "Japan", "Brazil", "USA"],
    "options_hi": ["चीन", "जापान", "ब्राज़ील", "अमेरिका"],
    "answer_en": "Japan",
    "answer_hi": "जापान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Who is known as the 'Father of the Nation' in India?",
    "question_hi": "भारत में 'राष्ट्रपिता' के नाम से किसे जाना जाता है?",
    "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Subhas Chandra Bose", "Sardar Patel"],
    "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "सुभाष चंद्र बोस", "सरदार पटेल"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is the fastest land animal?",
    "question_hi": "सबसे तेज़ स्थलीय जानवर कौन सा है?",
    "options_en": ["Lion", "Tiger", "Cheetah", "Leopard"],
    "options_hi": ["सिंह", "बाघ", "चीताह", "तेंदुआ"],
    "answer_en": "Cheetah",
    "answer_hi": "चीताह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which vitamin is produced in the skin when exposed to sunlight?",
    "question_hi": "सूर्य के प्रकाश में त्वचा के द्वारा कौन सा विटामिन बनता है?",
    "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which Indian state is known as 'Land of Rising Sun'?",
    "question_hi": "कौन सा भारतीय राज्य 'सूर्योदय की भूमि' के नाम से जाना जाता है?",
    "options_en": ["Sikkim", "Arunachal Pradesh", "Assam", "Nagaland"],
    "options_hi": ["सिक्किम", "अरुणाचल प्रदेश", "असम", "नागालैंड"],
    "answer_en": "Arunachal Pradesh",
    "answer_hi": "अरुणाचल प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which planet is called the 'Evening Star'?",
    "question_hi": "'संध्या तारा' किस ग्रह को कहा जाता है?",
    "options_en": ["Venus", "Mars", "Mercury", "Jupiter"],
    "options_hi": ["शुक्र", "मंगल", "पारा", "बृहस्पति"],
    "answer_en": "Venus",
    "answer_hi": "शुक्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Who wrote 'Ramcharitmanas'?",
    "question_hi": "'रामचरितमानस' किसने लिखा?",
    "options_en": ["Tulsidas", "Valmiki", "Kabir", "Surdas"],
    "options_hi": ["तुलसीदास", "वाल्मीकि", "कबीर", "सूरदास"],
    "answer_en": "Tulsidas",
    "answer_hi": "तुलसीदास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which is the largest ocean in the world?",
    "question_hi": "विश्व का सबसे बड़ा महासागर कौन सा है?",
    "options_en": ["Atlantic", "Indian", "Pacific", "Arctic"],
    "options_hi": ["अटलांटिक", "भारतीय", "प्रशांत", "आर्कटिक"],
    "answer_en": "Pacific",
    "answer_hi": "प्रशांत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which organ purifies blood in human body?",
    "question_hi": "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
    "options_en": ["Liver", "Kidney", "Heart", "Lungs"],
    "options_hi": ["जिगर", "किडनी", "हृदय", "फेफड़े"],
    "answer_en": "Kidney",
    "answer_hi": "किडनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which element has atomic number 1?",
    "question_hi": "किस तत्व का परमाणु क्रमांक 1 है?",
    "options_en": ["Helium", "Hydrogen", "Oxygen", "Carbon"],
    "options_hi": ["हीलियम", "हाइड्रोजन", "ऑक्सीजन", "कार्बन"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which city is known as 'Pink City' of India?",
    "question_hi": "भारत का 'पिंक सिटी' कौन सा है?",
    "options_en": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
    "options_hi": ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
    "answer_en": "Jaipur",
    "answer_hi": "जयपुर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which gas do plants absorb during photosynthesis?",
    "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस अवशोषित करते हैं?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which is the national flower of India?",
    "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
    "options_en": ["Lotus", "Rose", "Sunflower", "Marigold"],
    "options_hi": ["कमल", "गुलाब", "सूरजमुखी", "गेंदा"],
    "answer_en": "Lotus",
    "answer_hi": "कमल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Who invented the telephone?",
    "question_hi": "टेलीफोन का आविष्कार किसने किया?",
    "options_en": ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Guglielmo Marconi"],
    "options_hi": ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "गुग्लिएल्मो मार्कोनी"],
    "answer_en": "Alexander Graham Bell",
    "answer_hi": "अलेक्जेंडर ग्राहम बेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which planet is known as 'Blue Planet'?",
    "question_hi": "'ब्लू प्लैनेट' किस ग्रह को कहा जाता है?",
    "options_en": ["Earth", "Neptune", "Uranus", "Saturn"],
    "options_hi": ["पृथ्वी", "वरुण", "यूरेनस", "शनि"],
    "answer_en": "Earth",
    "answer_hi": "पृथ्वी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which is the currency of Japan?",
    "question_hi": "जापान की मुद्रा क्या है?",
    "options_en": ["Yen", "Dollar", "Rupee", "Euro"],
    "options_hi": ["येन", "डॉलर", "रुपया", "यूरो"],
    "answer_en": "Yen",
    "answer_hi": "येन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which scientist proposed the theory of relativity?",
    "question_hi": "सापेक्षता का सिद्धांत किस वैज्ञानिक ने प्रस्तावित किया?",
    "options_en": ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Niels Bohr"],
    "options_hi": ["आइज़ैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो गैलीली", "नील्स बोह्र"],
    "answer_en": "Albert Einstein",
    "answer_hi": "अल्बर्ट आइंस्टीन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which gas do plants absorb during photosynthesis?",
    "question_hi": "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस अवशोषित करते हैं?",
    "options_en": ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    "answer_en": "Carbon Dioxide",
    "answer_hi": "कार्बन डाइऑक्साइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is the smallest continent by area?",
    "question_hi": "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
    "options_en": ["Europe", "Australia", "Antarctica", "South America"],
    "options_hi": ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"],
    "answer_en": "Australia",
    "answer_hi": "ऑस्ट्रेलिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which is the heaviest naturally occurring element?",
    "question_hi": "प्राकृतिक रूप से मौजूद सबसे भारी तत्व कौन सा है?",
    "options_en": ["Uranium", "Plutonium", "Osmium", "Lead"],
    "options_hi": ["यूरेनियम", "प्लूटोनियम", "ओस्मियम", "सीसा"],
    "answer_en": "Uranium",
    "answer_hi": "यूरेनियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which Indian freedom fighter gave the slogan 'Jai Hind'?",
    "question_hi": "किस भारतीय स्वतंत्रता सेनानी ने नारा 'जय हिंद' दिया?",
    "options_en": ["Subhas Chandra Bose", "Bhagat Singh", "Mahatma Gandhi", "Jawaharlal Nehru"],
    "options_hi": ["सुभाष चंद्र बोस", "भगत सिंह", "महात्मा गांधी", "जवाहरलाल नेहरू"],
    "answer_en": "Subhas Chandra Bose",
    "answer_hi": "सुभाष चंद्र बोस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which is the largest desert in the world?",
    "question_hi": "विश्व का सबसे बड़ा रेगिस्तान कौन सा है?",
    "options_en": ["Sahara", "Gobi", "Kalahari", "Thar"],
    "options_hi": ["सहारा", "गोबी", "कलाहारी", "थार"],
    "answer_en": "Sahara",
    "answer_hi": "सहारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which vitamin is called as 'Sunshine Vitamin'?",
    "question_hi": "'सनशाइन विटामिन' किसे कहते हैं?",
    "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin E"],
    "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन E"],
    "answer_en": "Vitamin D",
    "answer_hi": "विटामिन D",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which is the largest gland in human body?",
    "question_hi": "मानव शरीर में सबसे बड़ी ग्रंथि कौन सी है?",
    "options_en": ["Pancreas", "Liver", "Thyroid", "Kidney"],
    "options_hi": ["अग्न्याशय", "जिगर", "थायरॉइड", "किडनी"],
    "answer_en": "Liver",
    "answer_hi": "जिगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which is the national animal of India?",
    "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
    "options_en": ["Tiger", "Lion", "Elephant", "Peacock"],
    "options_hi": ["बाघ", "सिंह", "हाथी", "मोर"],
    "answer_en": "Tiger",
    "answer_hi": "बाघ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which country is known as 'Land of the Midnight Sun'?",
    "question_hi": "'मिडनाइट सन की भूमि' के नाम से कौन सा देश जाना जाता है?",
    "options_en": ["Norway", "Sweden", "Finland", "Iceland"],
    "options_hi": ["नॉर्वे", "स्वीडन", "फिनलैंड", "आइसलैंड"],
    "answer_en": "Norway",
    "answer_hi": "नॉर्वे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which is the first element in the periodic table?",
    "question_hi": "आवर्त सारणी में पहला तत्व कौन सा है?",
    "options_en": ["Hydrogen", "Helium", "Lithium", "Beryllium"],
    "options_hi": ["हाइड्रोजन", "हीलियम", "लिथियम", "बेरीलियम"],
    "answer_en": "Hydrogen",
    "answer_hi": "हाइड्रोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Who is known as 'Missile Man of India'?",
    "question_hi": "भारत के 'मिसाइल मैन' के नाम से किसे जाना जाता है?",
    "options_en": ["A.P.J. Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "C.V. Raman"],
    "options_hi": ["ए.पी.जे. अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "सी.वी. रामन"],
    "answer_en": "A.P.J. Abdul Kalam",
    "answer_hi": "ए.पी.जे. अब्दुल कलाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which is the national fruit of India?",
    "question_hi": "भारत का राष्ट्रीय फल कौन सा है?",
    "options_en": ["Mango", "Banana", "Apple", "Orange"],
    "options_hi": ["आम", "केला", "सेब", "संतरा"],
    "answer_en": "Mango",
    "answer_hi": "आम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which is the first Indian satellite?",
    "question_hi": "भारत का पहला उपग्रह कौन सा था?",
    "options_en": ["INSAT-1A", "Aryabhata", "Rohini", "Chandrayaan-1"],
    "options_hi": ["इंसैट-1ए", "आर्यभट्ट", "रोहिणी", "चंद्रयान-1"],
    "answer_en": "Aryabhata",
    "answer_hi": "आर्यभट्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is the highest civilian award in India?",
    "question_hi": "भारत का सर्वोच्च नागरिक सम्मान कौन सा है?",
    "options_en": ["Padma Shri", "Bharat Ratna", "Padma Bhushan", "Padma Vibhushan"],
    "options_hi": ["पद्म श्री", "भारत रत्न", "पद्म भूषण", "पद्म विभूषण"],
    "answer_en": "Bharat Ratna",
    "answer_hi": "भारत रत्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which is the national tree of India?",
    "question_hi": "भारत का राष्ट्रीय वृक्ष कौन सा है?",
    "options_en": ["Neem", "Banyan", "Peepal", "Mango"],
    "options_hi": ["नीम", "बरगद", "पीपल", "आम"],
    "answer_en": "Banyan",
    "answer_hi": "बरगद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which river is called 'Sorrow of Bihar'?",
    "question_hi": "'बिहार का दुःख' किस नदी को कहा जाता है?",
    "options_en": ["Ganga", "Kosi", "Yamuna", "Son"],
    "options_hi": ["गंगा", "कोसी", "यमुना", "सोन"],
    "answer_en": "Kosi",
    "answer_hi": "कोसी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which is the fastest bird?",
    "question_hi": "सबसे तेज़ पक्षी कौन सा है?",
    "options_en": ["Eagle", "Peregrine Falcon", "Ostrich", "Sparrow"],
    "options_hi": ["गरुड़", "पैरेग्रिन फाल्कन", "शुतुरमुर्ग", "गौरैया"],
    "answer_en": "Peregrine Falcon",
    "answer_hi": "पैरेग्रिन फाल्कन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which Indian state has the largest population?",
    "question_hi": "भारत का सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    "options_en": ["Uttar Pradesh", "Maharashtra", "Bihar", "West Bengal"],
    "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "बिहार", "पश्चिम बंगाल"],
    "answer_en": "Uttar Pradesh",
    "answer_hi": "उत्तर प्रदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which is the largest moon of Saturn?",
    "question_hi": "शनि का सबसे बड़ा चंद्रमा कौन सा है?",
    "options_en": ["Titan", "Ganymede", "Europa", "Callisto"],
    "options_hi": ["टाइटन", "गनीमेड", "यूरोपा", "कैलिस्टो"],
    "answer_en": "Titan",
    "answer_hi": "टाइटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which gas is used in balloons to make them float?",
    "question_hi": "गुब्बारे में उन्हें उड़ाने के लिए कौन सी गैस उपयोग होती है?",
    "options_en": ["Oxygen", "Helium", "Hydrogen", "Nitrogen"],
    "options_hi": ["ऑक्सीजन", "हीलियम", "हाइड्रोजन", "नाइट्रोजन"],
    "answer_en": "Helium",
    "answer_hi": "हीलियम",
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