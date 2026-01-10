const questions = [
 {
num: 1,
question_en: "Who is known as the 'Father of Geometry'?",
question_hi: "'ज्यामिति का जनक' किसे कहा जाता है?",
options_en: ["Euclid", "Pythagoras", "Aristotle", "Archimedes"],
options_hi: ["यूक्लिड", "पाइथागोरस", "अरस्तू", "आर्किमिडीज"],
answer_en: "Euclid",
answer_hi: "यूक्लिड",
attempted: false,
selected: ""
},
{
num: 2,
question_en: "The 'Directive Principles of State Policy' are inspired by the constitution of which country?",
question_hi: "'राज्य के नीति निर्देशक सिद्धांत' किस देश के संविधान से प्रेरित हैं?",
options_en: ["Ireland", "USA", "UK", "Canada"],
options_hi: ["आयरलैंड", "यूएसए", "यूके", "कनाडा"],
answer_en: "Ireland",
answer_hi: "आयरलैंड",
attempted: false,
selected: ""
},
{
num: 3,
question_en: "Which of the following is the longest river in India?",
question_hi: "निम्नलिखित में से भारत की सबसे लंबी नदी कौन सी है?",
options_en: ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
options_hi: ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
answer_en: "Ganga",
answer_hi: "गंगा",
attempted: false,
selected: ""
},
{
num: 4,
question_en: "Which element has the chemical symbol 'Au'?",
question_hi: "किस तत्व का रासायनिक प्रतीक 'Au' है?",
options_en: ["Silver", "Gold", "Aluminum", "Argon"],
options_hi: ["चांदी", "सोना", "एल्युमीनियम", "आर्गन"],
answer_en: "Gold",
answer_hi: "सोना",
attempted: false,
selected: ""
},
{
num: 5,
question_en: "What is the capital of Australia?",
question_hi: "ऑस्ट्रेलिया की राजधानी क्या है?",
options_en: ["Sydney", "Melbourne", "Canberra", "Perth"],
options_hi: ["सिडनी", "मेलबोर्न", "कैनबरा", "पर्थ"],
answer_en: "Canberra",
answer_hi: "कैनबरा",
attempted: false,
selected: ""
},
{
num: 6,
question_en: "The 'Battle of Plassey' was fought in which year?",
question_hi: "'प्लासी का युद्ध' किस वर्ष लड़ा गया था?",
options_en: ["1757", "1764", "1771", "1857"],
options_hi: ["1757", "1764", "1771", "1857"],
answer_en: "1757",
answer_hi: "1757",
attempted: false,
selected: ""
},
{
num: 7,
question_en: "Who wrote the play 'Romeo and Juliet'?",
question_hi: "'रोमियो और जूलियट' नाटक किसने लिखा?",
options_en: ["Charles Dickens", "William Shakespeare", "Jane Austen", "George Orwell"],
options_hi: ["चार्ल्स डिकेंस", "विलियम शेक्सपियर", "जेन ऑस्टेन", "जॉर्ज ऑरवेल"],
answer_en: "William Shakespeare",
answer_hi: "विलियम शेक्सपियर",
attempted: false,
selected: ""
},
{
num: 8,
question_en: "Which gas is most abundant in the Earth's atmosphere?",
question_hi: "पृथ्वी के वायुमंडल में सबसे अधिक मात्रा में कौन सी गैस है?",
options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Argon"],
options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "आर्गन"],
answer_en: "Nitrogen",
answer_hi: "नाइट्रोजन",
attempted: false,
selected: ""
},
{
num: 9,
question_en: "Who is the author of the book 'The Discovery of India'?",
question_hi: "'द डिस्कवरी ऑफ इंडिया' पुस्तक के लेखक कौन हैं?",
options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "Sarojini Naidu"],
options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "रबीन्द्रनाथ टैगोर", "सरोजिनी नायडू"],
answer_en: "Jawaharlal Nehru",
answer_hi: "जवाहरलाल नेहरू",
attempted: false,
selected: ""
},
{
num: 10,
question_en: "What is the SI unit of electric current?",
question_hi: "विद्युत धारा की SI इकाई क्या है?",
options_en: ["Volt", "Watt", "Ampere", "Ohm"],
options_hi: ["वोल्ट", "वाट", "एम्पीयर", "ओम"],
answer_en: "Ampere",
answer_hi: "एम्पीयर",
attempted: false,
selected: ""
},
{
num: 11,
question_en: "The famous 'Khajuraho Temples' are located in which Indian state?",
question_hi: "प्रसिद्ध 'खजुराहो मंदिर' किस भारतीय राज्य में स्थित हैं?",
options_en: ["Uttar Pradesh", "Madhya Pradesh", "Rajasthan", "Maharashtra"],
options_hi: ["उत्तर प्रदेश", "मध्य प्रदेश", "राजस्थान", "महाराष्ट्र"],
answer_en: "Madhya Pradesh",
answer_hi: "मध्य प्रदेश",
attempted: false,
selected: ""
},
{
num: 12,
question_en: "Which planet is known as the 'Red Planet'?",
question_hi: "किस ग्रह को 'लाल ग्रह' के नाम से जाना जाता है?",
options_en: ["Mars", "Jupiter", "Venus", "Saturn"],
options_hi: ["मंगल", "बृहस्पति", "शुक्र", "शनि"],
answer_en: "Mars",
answer_hi: "मंगल",
attempted: false,
selected: ""
},
{
num: 13,
question_en: "The 'First War of Indian Independence' started in which year?",
question_hi: "'भारतीय स्वतंत्रता का प्रथम युद्ध' किस वर्ष शुरू हुआ?",
options_en: ["1857", "1885", "1905", "1942"],
options_hi: ["1857", "1885", "1905", "1942"],
answer_en: "1857",
answer_hi: "1857",
attempted: false,
selected: ""
},
{
num: 14,
question_en: "Which vitamin is produced by the human body when exposed to sunlight?",
question_hi: "सूर्य के प्रकाश के संपर्क में आने पर मानव शरीर कौन सा विटामिन उत्पन्न करता है?",
options_en: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
options_hi: ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
answer_en: "Vitamin D",
answer_hi: "विटामिन डी",
attempted: false,
selected: ""
},
{
num: 15,
question_en: "Who was the first President of India?",
question_hi: "भारत के प्रथम राष्ट्रपति कौन थे?",
options_en: ["Dr. Rajendra Prasad", "Dr. S. Radhakrishnan", "Zakir Hussain", "V.V. Giri"],
options_hi: ["डॉ. राजेंद्र प्रसाद", "डॉ. एस. राधाकृष्णन", "जाकिर हुसैन", "वी.वी. गिरी"],
answer_en: "Dr. Rajendra Prasad",
answer_hi: "डॉ. राजेंद्र प्रसाद",
attempted: false,
selected: ""
},
{
num: 16,
question_en: "Which of the following is not a primary color of light?",
question_hi: "निम्नलिखित में से प्रकाश का प्राथमिक रंग नहीं है?",
options_en: ["Red", "Green", "Blue", "Yellow"],
options_hi: ["लाल", "हरा", "नीला", "पीला"],
answer_en: "Yellow",
answer_hi: "पीला",
attempted: false,
selected: ""
},
{
num: 17,
question_en: "The 'Chilika Lake' is located in which state?",
question_hi: "'चिल्का झील' किस राज्य में स्थित है?",
options_en: ["West Bengal", "Odisha", "Andhra Pradesh", "Tamil Nadu"],
options_hi: ["पश्चिम बंगाल", "ओडिशा", "आंध्र प्रदेश", "तमिलनाडु"],
answer_en: "Odisha",
answer_hi: "ओडिशा",
attempted: false,
selected: ""
},
{
num: 18,
question_en: "What is the chemical formula of water?",
question_hi: "पानी का रासायनिक सूत्र क्या है?",
options_en: ["HO", "H2O", "H2O2", "HO2"],
options_hi: ["HO", "H2O", "H2O2", "HO2"],
answer_en: "H2O",
answer_hi: "H2O",
attempted: false,
selected: ""
},
{
num: 19,
question_en: "Who invented the telephone?",
question_hi: "टेलीफोन का आविष्कार किसने किया?",
options_en: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
options_hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "गुलिएल्मो मार्कोनी"],
answer_en: "Alexander Graham Bell",
answer_hi: "अलेक्जेंडर ग्राहम बेल",
attempted: false,
selected: ""
},
{
num: 20,
question_en: "Which Indian city is known as the 'Pink City'?",
question_hi: "भारत का कौन सा शहर 'गुलाबी शहर' के नाम से जाना जाता है?",
options_en: ["Jaipur", "Jodhpur", "Udaipur", "Bikaner"],
options_hi: ["जयपुर", "जोधपुर", "उदयपुर", "बीकानेर"],
answer_en: "Jaipur",
answer_hi: "जयपुर",
attempted: false,
selected: ""
},
{
num: 21,
question_en: "Which of the following is a scalar quantity?",
question_hi: "निम्नलिखित में से कौन सी अदिश राशि है?",
options_en: ["Force", "Velocity", "Speed", "Displacement"],
options_hi: ["बल", "वेग", "चाल", "विस्थापन"],
answer_en: "Speed",
answer_hi: "चाल",
attempted: false,
selected: ""
},
{
num: 22,
question_en: "The 'Mahabharata' was originally written in which language?",
question_hi: "'महाभारत' मूल रूप से किस भाषा में लिखी गई थी?",
options_en: ["Pali", "Prakrit", "Sanskrit", "Tamil"],
options_hi: ["पाली", "प्राकृत", "संस्कृत", "तमिल"],
answer_en: "Sanskrit",
answer_hi: "संस्कृत",
attempted: false,
selected: ""
},
{
num: 23,
question_en: "Which gas is filled in electric bulbs?",
question_hi: "इलेक्ट्रिक बल्ब में कौन सी गैस भरी जाती है?",
options_en: ["Oxygen", "Hydrogen", "Nitrogen", "Argon"],
options_hi: ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "आर्गन"],
answer_en: "Argon",
answer_hi: "आर्गन",
attempted: false,
selected: ""
},
{
num: 24,
question_en: "The 'Quit India Movement' was launched in which year?",
question_hi: "'भारत छोड़ो आंदोलन' किस वर्ष शुरू किया गया था?",
options_en: ["1940", "1942", "1945", "1947"],
options_hi: ["1940", "1942", "1945", "1947"],
answer_en: "1942",
answer_hi: "1942",
attempted: false,
selected: ""
},
{
num: 25,
question_en: "Which instrument is used to measure atmospheric pressure?",
question_hi: "वायुमंडलीय दबाव मापने के लिए किस उपकरण का उपयोग किया जाता है?",
options_en: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
answer_en: "Barometer",
answer_hi: "बैरोमीटर",
attempted: false,
selected: ""
},
{
num: 26,
question_en: "Who was the first woman Prime Minister of India?",
question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
options_en: ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
options_hi: ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी"],
answer_en: "Indira Gandhi",
answer_hi: "इंदिरा गांधी",
attempted: false,
selected: ""
},
{
num: 27,
question_en: "Which of the following is the smallest bone in the human body?",
question_hi: "निम्नलिखित में से मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
options_en: ["Femur", "Stapes", "Tibia", "Humerus"],
options_hi: ["फीमर", "स्टेपीज", "टिबिया", "ह्यूमरस"],
answer_en: "Stapes",
answer_hi: "स्टेपीज",
attempted: false,
selected: ""
},
{
num: 28,
question_en: "The 'Gateway of India' is located in which city?",
question_hi: "'गेटवे ऑफ इंडिया' किस शहर में स्थित है?",
options_en: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
options_hi: ["दिल्ली", "कोलकाता", "मुंबई", "चेन्नई"],
answer_en: "Mumbai",
answer_hi: "मुंबई",
attempted: false,
selected: ""
},
{
num: 29,
question_en: "Which acid is present in vinegar?",
question_hi: "सिरका में कौन सा अम्ल मौजूद होता है?",
options_en: ["Citric acid", "Acetic acid", "Formic acid", "Lactic acid"],
options_hi: ["सिट्रिक अम्ल", "एसिटिक अम्ल", "फॉर्मिक अम्ल", "लैक्टिक अम्ल"],
answer_en: "Acetic acid",
answer_hi: "एसिटिक अम्ल",
attempted: false,
selected: ""
},
{
num: 30,
question_en: "Who founded the Mughal Empire in India?",
question_hi: "भारत में मुगल साम्राज्य की स्थापना किसने की?",
options_en: ["Akbar", "Babur", "Humayun", "Sher Shah Suri"],
options_hi: ["अकबर", "बाबर", "हुमायूं", "शेरशाह सूरी"],
answer_en: "Babur",
answer_hi: "बाबर",
attempted: false,
selected: ""
},
{
num: 31,
question_en: "The phenomenon of 'rainbow' is caused by which of the following?",
question_hi: "'इंद्रधनुष' की घटना निम्नलिखित में से किसके कारण होती है?",
options_en: ["Reflection", "Refraction", "Dispersion of light", "All of the above"],
options_hi: ["परावर्तन", "अपवर्तन", "प्रकाश का विक्षेपण", "उपरोक्त सभी"],
answer_en: "All of the above",
answer_hi: "उपरोक्त सभी",
attempted: false,
selected: ""
},
{
num: 32,
question_en: "Which of the following is a non-metal that is liquid at room temperature?",
question_hi: "निम्नलिखित में से कौन सा अधातु है जो कमरे के तापमान पर तरल है?",
options_en: ["Mercury", "Bromine", "Sodium", "Chlorine"],
options_hi: ["पारा", "ब्रोमीन", "सोडियम", "क्लोरीन"],
answer_en: "Bromine",
answer_hi: "ब्रोमीन",
attempted: false,
selected: ""
},
{
num: 33,
question_en: "The 'Bhagavad Gita' is a part of which epic?",
question_hi: "'भगवद गीता' किस महाकाव्य का हिस्सा है?",
options_en: ["Ramayana", "Mahabharata", "Vedas", "Upanishads"],
options_hi: ["रामायण", "महाभारत", "वेद", "उपनिषद"],
answer_en: "Mahabharata",
answer_hi: "महाभारत",
attempted: false,
selected: ""
},
{
num: 34,
question_en: "Who is known as the 'Nightingale of India'?",
question_hi: "'भारत की कोकिला' के नाम से कौन जानी जाती हैं?",
options_en: ["Lata Mangeshkar", "Sarojini Naidu", "M.S. Subbulakshmi", "Indira Gandhi"],
options_hi: ["लता मंगेशकर", "सरोजिनी नायडू", "एम.एस. सुब्बुलक्ष्मी", "इंदिरा गांधी"],
answer_en: "Sarojini Naidu",
answer_hi: "सरोजिनी नायडू",
attempted: false,
selected: ""
},
{
num: 35,
question_en: "Which is the largest desert in the world?",
question_hi: "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
options_en: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
options_hi: ["सहारा रेगिस्तान", "अरब रेगिस्तान", "गोबी रेगिस्तान", "कालाहारी रेगिस्तान"],
answer_en: "Sahara Desert",
answer_hi: "सहारा रेगिस्तान",
attempted: false,
selected: ""
},
{
num: 36,
question_en: "Which organ of the human body produces insulin?",
question_hi: "मानव शरीर का कौन सा अंग इंसुलिन का उत्पादन करता है?",
options_en: ["Liver", "Pancreas", "Kidney", "Stomach"],
options_hi: ["यकृत", "अग्न्याशय", "गुर्दा", "पेट"],
answer_en: "Pancreas",
answer_hi: "अग्न्याशय",
attempted: false,
selected: ""
},
{
num: 37,
question_en: "Who was the first Indian to win a Nobel Prize?",
question_hi: "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
options_en: ["C.V. Raman", "Rabindranath Tagore", "Mother Teresa", "Har Gobind Khorana"],
options_hi: ["सी.वी. रमन", "रबीन्द्रनाथ टैगोर", "मदर टेरेसा", "हर गोबिंद खुराना"],
answer_en: "Rabindranath Tagore",
answer_hi: "रबीन्द्रनाथ टैगोर",
attempted: false,
selected: ""
},
{
num: 38,
question_en: "Which gas is released during photosynthesis?",
question_hi: "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
answer_en: "Oxygen",
answer_hi: "ऑक्सीजन",
attempted: false,
selected: ""
},
{
num: 39,
question_en: "The 'Victoria Memorial' is located in which Indian city?",
question_hi: "'विक्टोरिया मेमोरियल' किस भारतीय शहर में स्थित है?",
options_en: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
options_hi: ["मुंबई", "कोलकाता", "दिल्ली", "चेन्नई"],
answer_en: "Kolkata",
answer_hi: "कोलकाता",
attempted: false,
selected: ""
},
{
num: 40,
question_en: "Which of the following is a greenhouse gas?",
question_hi: "निम्नलिखित में से कौन सी ग्रीनहाउस गैस है?",
options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
answer_en: "Carbon Dioxide",
answer_hi: "कार्बन डाइऑक्साइड",
attempted: false,
selected: ""
},
{
num: 41,
question_en: "Who built the 'Taj Mahal'?",
question_hi: "'ताजमहल' का निर्माण किसने करवाया?",
options_en: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
options_hi: ["अकबर", "शाहजहां", "जहांगीर", "औरंगजेब"],
answer_en: "Shah Jahan",
answer_hi: "शाहजहां",
attempted: false,
selected: ""
},
{
num: 42,
question_en: "Which of the following is the hardest natural substance?",
question_hi: "निम्नलिखित में से सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
options_en: ["Gold", "Iron", "Diamond", "Platinum"],
options_hi: ["सोना", "लोहा", "हीरा", "प्लैटिनम"],
answer_en: "Diamond",
answer_hi: "हीरा",
attempted: false,
selected: ""
},
{
num: 43,
question_en: "The 'Indian National Congress' was founded in which year?",
question_hi: "'भारतीय राष्ट्रीय कांग्रेस' की स्थापना किस वर्ष हुई थी?",
options_en: ["1885", "1905", "1919", "1947"],
options_hi: ["1885", "1905", "1919", "1947"],
answer_en: "1885",
answer_hi: "1885",
attempted: false,
selected: ""
},
{
num: 44,
question_en: "Which planet has the most moons?",
question_hi: "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
options_en: ["Jupiter", "Saturn", "Uranus", "Neptune"],
options_hi: ["बृहस्पति", "शनि", "अरुण", "वरुण"],
answer_en: "Saturn",
answer_hi: "शनि",
attempted: false,
selected: ""
},
{
num: 45,
question_en: "What is the currency of Japan?",
question_hi: "जापान की मुद्रा क्या है?",
options_en: ["Yuan", "Won", "Yen", "Ringgit"],
options_hi: ["युआन", "वॉन", "येन", "रिंगित"],
answer_en: "Yen",
answer_hi: "येन",
attempted: false,
selected: ""
},
{
num: 46,
question_en: "Which gland in the human body is known as the 'master gland'?",
question_hi: "मानव शरीर में किस ग्रंथि को 'मास्टर ग्रंथि' कहा जाता है?",
options_en: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
options_hi: ["थायरॉयड", "पिट्यूटरी", "अधिवृक्क", "अग्न्याशय"],
answer_en: "Pituitary",
answer_hi: "पिट्यूटरी",
attempted: false,
selected: ""
},
{
num: 47,
question_en: "The 'Battle of Haldighati' was fought between Akbar and which Rajput ruler?",
question_hi: "'हल्दीघाटी का युद्ध' अकबर और किस राजपूत शासक के बीच लड़ा गया था?",
options_en: ["Rana Sanga", "Rana Pratap", "Rana Kumbha", "Rana Udai Singh"],
options_hi: ["राणा सांगा", "राणा प्रताप", "राणा कुंभा", "राणा उदय सिंह"],
answer_en: "Rana Pratap",
answer_hi: "राणा प्रताप",
attempted: false,
selected: ""
},
{
num: 48,
question_en: "Which of the following is not a noble gas?",
question_hi: "निम्नलिखित में से कौन सी एक उत्कृष्ट गैस नहीं है?",
options_en: ["Helium", "Neon", "Argon", "Chlorine"],
options_hi: ["हीलियम", "नीयन", "आर्गन", "क्लोरीन"],
answer_en: "Chlorine",
answer_hi: "क्लोरीन",
attempted: false,
selected: ""
},
{
num: 49,
question_en: "Who is the author of the book 'Wings of Fire'?",
question_hi: "'विंग्स ऑफ फायर' पुस्तक के लेखक कौन हैं?",
options_en: ["A.P.J. Abdul Kalam", "R.K. Narayan", "Vikram Seth", "Chetan Bhagat"],
options_hi: ["ए.पी.जे. अब्दुल कलाम", "आर.के. नारायण", "विक्रम सेठ", "चेतन भगत"],
answer_en: "A.P.J. Abdul Kalam",
answer_hi: "ए.पी.जे. अब्दुल कलाम",
attempted: false,
selected: ""
},
{
num: 50,
question_en: "Which of the following is the longest dam in India?",
question_hi: "निम्नलिखित में से भारत का सबसे लंबा बांध कौन सा है?",
options_en: ["Bhakra Nangal Dam", "Hirakud Dam", "Tehri Dam", "Sardar Sarovar Dam"],
options_hi: ["भाखड़ा नांगल बांध", "हीराकुंड बांध", "टिहरी बांध", "सरदार सरोवर बांध"],
answer_en: "Hirakud Dam",
answer_hi: "हीराकुंड बांध",
attempted: false,
selected: ""
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