const questions = [
    {
    "num":1,
    question_en: "Which vitamin is produced in the human body by sunlight?",
    question_hi: "सूर्य के प्रकाश से मानव शरीर में कौन सा विटामिन बनता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin D",
    answer_hi: "विटामिन D",
    attempted: false,
    selected: ""
  },
  {
    "num":2,
    question_en: "Who wrote the Indian National Anthem?",
    question_hi: "भारतीय राष्ट्रगान किसने लिखा?",
    options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Subhash Chandra Bose", "Mahatma Gandhi"],
    options_hi: ["बंकिम चंद्र चट्टोपाध्याय", "रवींद्रनाथ टैगोर", "सुभाष चंद्र बोस", "महात्मा गांधी"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    "num":3,
    question_en: "Which river is known as the Ganga of the South?",
    question_hi: "दक्षिण की गंगा किस नदी को कहा जाता है?",
    options_en: ["Godavari", "Krishna", "Cauvery", "Narmada"],
    options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "नर्मदा"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
  {
    "num":4,
    question_en: "What is the boiling point of water?",
    question_hi: "पानी का क्वथनांक कितना होता है?",
    options_en: ["90°C", "95°C", "100°C", "110°C"],
    options_hi: ["90°C", "95°C", "100°C", "110°C"],
    answer_en: "100°C",
    answer_hi: "100°C",
    attempted: false,
    selected: ""
  },
  {
    "num":5,
    question_en: "Which Mughal emperor built the Taj Mahal?",
    question_hi: "ताजमहल का निर्माण किस मुगल शासक ने करवाया?",
    options_en: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
    options_hi: ["अकबर", "जहाँगीर", "शाहजहाँ", "औरंगज़ेब"],
    answer_en: "Shah Jahan",
    answer_hi: "शाहजहाँ",
    attempted: false,
    selected: ""
  },
  {
    "num":6,
    question_en: "Which instrument is used to measure blood pressure?",
    question_hi: "रक्तचाप मापने के लिए किस यंत्र का प्रयोग किया जाता है?",
    options_en: ["Thermometer", "Barometer", "Sphygmomanometer", "Hygrometer"],
    options_hi: ["थर्मामीटर", "बैरोमीटर", "स्फिग्मोमैनोमीटर", "हाइग्रोमीटर"],
    answer_en: "Sphygmomanometer",
    answer_hi: "स्फिग्मोमैनोमीटर",
    attempted: false,
    selected: ""
  },
  {
    "num":7,
    question_en: "Which is the smallest prime number?",
    question_hi: "सबसे छोटी अभाज्य संख्या कौन सी है?",
    options_en: ["0", "1", "2", "3"],
    options_hi: ["0", "1", "2", "3"],
    answer_en: "2",
    answer_hi: "2",
    attempted: false,
    selected: ""
  },
  {
    "num":8,
    question_en: "Which state is the largest producer of wheat in India?",
    question_hi: "भारत में गेहूं का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["Punjab", "Haryana", "Uttar Pradesh", "Madhya Pradesh"],
    options_hi: ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "मध्य प्रदेश"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    "num":9,
    question_en: "Which metal is liquid at room temperature?",
    question_hi: "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
    options_en: ["Iron", "Mercury", "Aluminium", "Copper"],
    options_hi: ["लोहा", "पारा", "एल्युमिनियम", "तांबा"],
    answer_en: "Mercury",
    answer_hi: "पारा",
    attempted: false,
    selected: ""
  },
  {
    "num":10,
    question_en: "Who was the first Prime Minister of India?",
    question_hi: "भारत के पहले प्रधानमंत्री कौन थे?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
  },

  {
    "num":11,
    question_en: "Which gas is used in fire extinguishers?",
    question_hi: "अग्निशामक यंत्रों में कौन सी गैस प्रयोग होती है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    "num":12,
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
    "num":13,
    question_en: "What is the currency of Japan?",
    question_hi: "जापान की मुद्रा क्या है?",
    options_en: ["Won", "Yen", "Dollar", "Peso"],
    options_hi: ["वॉन", "येन", "डॉलर", "पेसो"],
    answer_en: "Yen",
    answer_hi: "येन",
    attempted: false,
    selected: ""
  },
  {
    "num":14,
    question_en: "Which Indian state has the longest coastline?",
    question_hi: "भारत का सबसे लंबा समुद्र तट किस राज्य का है?",
    options_en: ["Tamil Nadu", "Andhra Pradesh", "Gujarat", "Maharashtra"],
    options_hi: ["तमिलनाडु", "आंध्र प्रदेश", "गुजरात", "महाराष्ट्र"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
  {
    "num":15,
    question_en: "Which blood group is known as universal donor?",
    question_hi: "सार्वभौमिक दाता किस रक्त समूह को कहा जाता है?",
    options_en: ["A", "B", "AB", "O-"],
    options_hi: ["A", "B", "AB", "O-"],
    answer_en: "O-",
    answer_hi: "O-",
    attempted: false,
    selected: ""
  },
  {
    "num":16,
    question_en: "Who invented the telephone?",
    question_hi: "टेलीफोन का आविष्कार किसने किया?",
    options_en: ["Alexander Graham Bell", "Edison", "Newton", "Einstein"],
    options_hi: ["अलेक्जेंडर ग्राहम बेल", "एडिसन", "न्यूटन", "आइंस्टीन"],
    answer_en: "Alexander Graham Bell",
    answer_hi: "अलेक्जेंडर ग्राहम बेल",
    attempted: false,
    selected: ""
  },
  {
    "num":17,
    question_en: "Which organ controls the human body?",
    question_hi: "मानव शरीर को नियंत्रित करने वाला अंग कौन सा है?",
    options_en: ["Heart", "Liver", "Brain", "Kidney"],
    options_hi: ["हृदय", "यकृत", "मस्तिष्क", "गुर्दा"],
    answer_en: "Brain",
    answer_hi: "मस्तिष्क",
    attempted: false,
    selected: ""
  },
  {
    "num":18,
    question_en: "Which Indian city is known as the Pink City?",
    question_hi: "गुलाबी शहर किसे कहा जाता है?",
    options_en: ["Udaipur", "Jaipur", "Jodhpur", "Ajmer"],
    options_hi: ["उदयपुर", "जयपुर", "जोधपुर", "अजमेर"],
    answer_en: "Jaipur",
    answer_hi: "जयपुर",
    attempted: false,
    selected: ""
  },
  {
    "num":19,
    question_en: "What is the SI unit of force?",
    question_hi: "बल की SI इकाई क्या है?",
    options_en: ["Joule", "Newton", "Watt", "Pascal"],
    options_hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
    answer_en: "Newton",
    answer_hi: "न्यूटन",
    attempted: false,
    selected: ""
  },
  {
    "num":20,
    question_en: "Which festival is known as the festival of lights?",
    question_hi: "प्रकाश का पर्व किसे कहा जाता है?",
    options_en: ["Holi", "Eid", "Diwali", "Christmas"],
    options_hi: ["होली", "ईद", "दीपावली", "क्रिसमस"],
    answer_en: "Diwali",
    answer_hi: "दीपावली",
    attempted: false,
    selected: ""
  },
    {
    "num":21,
    question_en: "Which metal is the best conductor of electricity?",
    question_hi: "विद्युत का सबसे अच्छा चालक कौन सी धातु है?",
    options_en: ["Copper", "Silver", "Aluminium", "Gold"],
    options_hi: ["तांबा", "चांदी", "एल्युमिनियम", "सोना"],
    answer_en: "Silver",
    answer_hi: "चांदी",
    attempted: false,
    selected: ""
  },
  {
    "num":22,
    question_en: "Who founded the Maurya Dynasty?",
    question_hi: "मौर्य वंश की स्थापना किसने की?",
    options_en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Bimbisara"],
    options_hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "बिंबिसार"],
    answer_en: "Chandragupta Maurya",
    answer_hi: "चंद्रगुप्त मौर्य",
    attempted: false,
    selected: ""
  },
  {
    "num":23,
    question_en: "Which vitamin helps in blood clotting?",
    question_hi: "रक्त का थक्का जमाने में कौन सा विटामिन सहायक है?",
    options_en: ["Vitamin A", "Vitamin C", "Vitamin K", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन C", "विटामिन K", "विटामिन D"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
  },
  {
    "num":24,
    question_en: "Which country gifted the Statue of Liberty to the USA?",
    question_hi: "स्टैच्यू ऑफ लिबर्टी अमेरिका को किस देश ने भेंट की थी?",
    options_en: ["France", "UK", "Germany", "Canada"],
    options_hi: ["फ्रांस", "यूके", "जर्मनी", "कनाडा"],
    answer_en: "France",
    answer_hi: "फ्रांस",
    attempted: false,
    selected: ""
  },
  {
    "num":25,
    question_en: "What is the hardest natural substance?",
    question_hi: "सबसे कठोर प्राकृतिक पदार्थ कौन सा है?",
    options_en: ["Iron", "Gold", "Diamond", "Granite"],
    options_hi: ["लोहा", "सोना", "हीरा", "ग्रेनाइट"],
    answer_en: "Diamond",
    answer_hi: "हीरा",
    attempted: false,
    selected: ""
  },
  {
    "num":26,
    question_en: "Which Indian river flows through Rift Valley?",
    question_hi: "भारत की कौन सी नदी भ्रंश घाटी से होकर बहती है?",
    options_en: ["Ganga", "Yamuna", "Narmada", "Brahmaputra"],
    options_hi: ["गंगा", "यमुना", "नर्मदा", "ब्रह्मपुत्र"],
    answer_en: "Narmada",
    answer_hi: "नर्मदा",
    attempted: false,
    selected: ""
  },
  {
    "num":27,
    question_en: "Who was the first woman Prime Minister of India?",
    question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
    options_en: ["Indira Gandhi", "Pratibha Patil", "Sarojini Naidu", "Sonia Gandhi"],
    options_hi: ["इंदिरा गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू", "सोनिया गांधी"],
    answer_en: "Indira Gandhi",
    answer_hi: "इंदिरा गांधी",
    attempted: false,
    selected: ""
  },
  {
    "num":28,
    question_en: "Which gas is filled in electric bulbs?",
    question_hi: "इलेक्ट्रिक बल्ब में कौन सी गैस भरी जाती है?",
    options_en: ["Nitrogen", "Oxygen", "Hydrogen", "Carbon Dioxide"],
    options_hi: ["नाइट्रोजन", "ऑक्सीजन", "हाइड्रोजन", "कार्बन डाइऑक्साइड"],
    answer_en: "Nitrogen",
    answer_hi: "नाइट्रोजन",
    attempted: false,
    selected: ""
  },
  {
    "num":29,
    question_en: "Which is the smallest bone in the human body?",
    question_hi: "मानव शरीर की सबसे छोटी हड्डी कौन सी है?",
    options_en: ["Stapes", "Femur", "Ulna", "Radius"],
    options_hi: ["स्टेपीज", "फीमर", "अल्ना", "रेडियस"],
    answer_en: "Stapes",
    answer_hi: "स्टेपीज",
    attempted: false,
    selected: ""
  },
  {
    "num":30,
    question_en: "Which article of the Indian Constitution deals with Right to Equality?",
    question_hi: "भारतीय संविधान का कौन सा अनुच्छेद समानता के अधिकार से संबंधित है?",
    options_en: ["Article 14", "Article 19", "Article 21", "Article 32"],
    options_hi: ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"],
    answer_en: "Article 14",
    answer_hi: "अनुच्छेद 14",
    attempted: false,
    selected: ""
  },
  {
    "num":31,
    question_en: "Which is the largest ocean in the world?",
    question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
    options_en: ["Indian Ocean", "Atlantic Ocean", "Pacific Ocean", "Arctic Ocean"],
    options_hi: ["हिंद महासागर", "अटलांटिक महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
    answer_en: "Pacific Ocean",
    answer_hi: "प्रशांत महासागर",
    attempted: false,
    selected: ""
  },
  {
    "num":32,
    question_en: "Who invented the computer?",
    question_hi: "कंप्यूटर का आविष्कार किसने किया?",
    options_en: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
    options_hi: ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "स्टीव जॉब्स"],
    answer_en: "Charles Babbage",
    answer_hi: "चार्ल्स बैबेज",
    attempted: false,
    selected: ""
  },
  {
    "num":33,
    question_en: "Which Indian state is known as the Land of Rising Sun?",
    question_hi: "भारत में उगते सूर्य की भूमि किस राज्य को कहा जाता है?",
    options_en: ["Assam", "Arunachal Pradesh", "Sikkim", "Nagaland"],
    options_hi: ["असम", "अरुणाचल प्रदेश", "सिक्किम", "नागालैंड"],
    answer_en: "Arunachal Pradesh",
    answer_hi: "अरुणाचल प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    "num":34,
    question_en: "What is the SI unit of electric current?",
    question_hi: "विद्युत धारा की SI इकाई क्या है?",
    options_en: ["Volt", "Ampere", "Ohm", "Watt"],
    options_hi: ["वोल्ट", "एम्पियर", "ओम", "वाट"],
    answer_en: "Ampere",
    answer_hi: "एम्पियर",
    attempted: false,
    selected: ""
  },
  {
    "num":35,
    question_en: "Which Mughal emperor was known as Zinda Pir?",
    question_hi: "जिंदा पीर के नाम से किस मुगल शासक को जाना जाता था?",
    options_en: ["Akbar", "Aurangzeb", "Jahangir", "Babur"],
    options_hi: ["अकबर", "औरंगजेब", "जहाँगीर", "बाबर"],
    answer_en: "Aurangzeb",
    answer_hi: "औरंगजेब",
    attempted: false,
    selected: ""
  },
  {
    "num":36,
    question_en: "Which gas causes global warming?",
    question_hi: "वैश्विक तापन के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
    options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Helium"],
    options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हीलियम"],
    answer_en: "Carbon Dioxide",
    answer_hi: "कार्बन डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    "num":37,
    question_en: "Who was the first Governor-General of India?",
    question_hi: "भारत के पहले गवर्नर जनरल कौन थे?",
    options_en: ["Lord Mountbatten", "Lord Canning", "Warren Hastings", "Lord Dalhousie"],
    options_hi: ["लॉर्ड माउंटबेटन", "लॉर्ड कैनिंग", "वॉरेन हेस्टिंग्स", "लॉर्ड डलहौजी"],
    answer_en: "Warren Hastings",
    answer_hi: "वॉरेन हेस्टिंग्स",
    attempted: false,
    selected: ""
  },
  {
    "num":38,
    question_en: "Which is the longest river in India?",
    question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
    options_en: ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
    options_hi: ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
    answer_en: "Ganga",
    answer_hi: "गंगा",
    attempted: false,
    selected: ""
  },
  {
    "num":39,
    question_en: "What is the full form of CPU?",
    question_hi: "CPU का पूरा नाम क्या है?",
    options_en: ["Central Processing Unit", "Computer Processing Unit", "Central Program Unit", "Control Processing Unit"],
    options_hi: ["सेंट्रल प्रोसेसिंग यूनिट", "कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंट्रोल प्रोसेसिंग यूनिट"],
    answer_en: "Central Processing Unit",
    answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
    attempted: false,
    selected: ""
  },
  {
    "num":40,
    question_en: "Which Indian freedom fighter is known as Netaji?",
    question_hi: "नेताजी के नाम से कौन से स्वतंत्रता सेनानी जाने जाते हैं?",
    options_en: ["Bhagat Singh", "Subhash Chandra Bose", "Lala Lajpat Rai", "Chandrashekhar Azad"],
    options_hi: ["भगत सिंह", "सुभाष चंद्र बोस", "लाला लाजपत राय", "चंद्रशेखर आज़ाद"],
    answer_en: "Subhash Chandra Bose",
    answer_hi: "सुभाष चंद्र बोस",
    attempted: false,
    selected: ""
  },
  {
    "num":41,
    question_en: "Which element is essential for making steel?",
    question_hi: "स्टील बनाने के लिए कौन सा तत्व आवश्यक है?",
    options_en: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"],
    options_hi: ["कार्बन", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Carbon",
    answer_hi: "कार्बन",
    attempted: false,
    selected: ""
  },
  {
    "num":42,
    question_en: "Which state has the largest population in India?",
    question_hi: "भारत में सबसे अधिक जनसंख्या वाला राज्य कौन सा है?",
    options_en: ["Maharashtra", "Bihar", "Uttar Pradesh", "West Bengal"],
    options_hi: ["महाराष्ट्र", "बिहार", "उत्तर प्रदेश", "पश्चिम बंगाल"],
    answer_en: "Uttar Pradesh",
    answer_hi: "उत्तर प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    "num":43,
    question_en: "Which device is used to measure earthquakes?",
    question_hi: "भूकंप मापने के लिए किस यंत्र का उपयोग किया जाता है?",
    options_en: ["Thermometer", "Seismograph", "Barometer", "Hygrometer"],
    options_hi: ["थर्मामीटर", "सीस्मोग्राफ", "बैरोमीटर", "हाइग्रोमीटर"],
    answer_en: "Seismograph",
    answer_hi: "सीस्मोग्राफ",
    attempted: false,
    selected: ""
  },
  {
    "num":44,
    question_en: "Which Indian city is known as the Silicon Valley of India?",
    question_hi: "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?",
    options_en: ["Hyderabad", "Pune", "Chennai", "Bengaluru"],
    options_hi: ["हैदराबाद", "पुणे", "चेन्नई", "बेंगलुरु"],
    answer_en: "Bengaluru",
    answer_hi: "बेंगलुरु",
    attempted: false,
    selected: ""
  },
  {
    "num":45,
    question_en: "Which vitamin deficiency causes scurvy?",
    question_hi: "स्कर्वी रोग किस विटामिन की कमी से होता है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin C",
    answer_hi: "विटामिन C",
    attempted: false,
    selected: ""
  },
  {
    "num":46,
    question_en: "Who was the first Indian to win a Nobel Prize?",
    question_hi: "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    options_en: ["C. V. Raman", "Rabindranath Tagore", "Mother Teresa", "Hargobind Khorana"],
    options_hi: ["सी. वी. रमन", "रवींद्रनाथ टैगोर", "मदर टेरेसा", "हरगोविंद खुराना"],
    answer_en: "Rabindranath Tagore",
    answer_hi: "रवींद्रनाथ टैगोर",
    attempted: false,
    selected: ""
  },
  {
    "num":47,
    question_en: "Which gas is also known as laughing gas?",
    question_hi: "हंसाने वाली गैस किसे कहा जाता है?",
    options_en: ["Nitrous Oxide", "Carbon Monoxide", "Oxygen", "Hydrogen"],
    options_hi: ["नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "ऑक्सीजन", "हाइड्रोजन"],
    answer_en: "Nitrous Oxide",
    answer_hi: "नाइट्रस ऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    "num":48,
    question_en: "Which Indian state shares border with maximum countries?",
    question_hi: "भारत का कौन सा राज्य सबसे अधिक देशों से सीमा साझा करता है?",
    options_en: ["Assam", "West Bengal", "Arunachal Pradesh", "Sikkim"],
    options_hi: ["असम", "पश्चिम बंगाल", "अरुणाचल प्रदेश", "सिक्किम"],
    answer_en: "Arunachal Pradesh",
    answer_hi: "अरुणाचल प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    "num":49,
    question_en: "What is the chemical symbol of Gold?",
    question_hi: "सोने का रासायनिक प्रतीक क्या है?",
    options_en: ["Ag", "Au", "Gd", "Go"],
    options_hi: ["Ag", "Au", "Gd", "Go"],
    answer_en: "Au",
    answer_hi: "Au",
    attempted: false,
    selected: ""
  },
  {
    "num":50,
    question_en: "Which part of the plant conducts photosynthesis?",
    question_hi: "पौधे का कौन सा भाग प्रकाश संश्लेषण करता है?",
    options_en: ["Root", "Stem", "Leaf", "Flower"],
    options_hi: ["जड़", "तना", "पत्ता", "फूल"],
    answer_en: "Leaf",
    answer_hi: "पत्ता",
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