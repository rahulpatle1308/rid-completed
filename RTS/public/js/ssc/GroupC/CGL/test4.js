const questions = [
  {
 num:1,
question_en: "Which Indian state has the longest coastline?",
question_hi: "किस भारतीय राज्य की तटरेखा सबसे लंबी है?",
options_en: ["Maharashtra", "Gujarat", "Tamil Nadu", "Andhra Pradesh"],
options_hi: ["महाराष्ट्र", "गुजरात", "तमिलनाडु", "आंध्र प्रदेश"],
answer_en: "Gujarat",
answer_hi: "गुजरात",
attempted: false,
selected: ""
},
{
 num:2,
question_en: "Who is known as the 'Iron Man of India'?",
question_hi: "'भारत के लौह पुरुष' के नाम से कौन जाने जाते हैं?",
options_en: ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhash Chandra Bose", "Bhagat Singh"],
options_hi: ["सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
answer_en: "Sardar Vallabhbhai Patel",
answer_hi: "सरदार वल्लभभाई पटेल",
attempted: false,
selected: ""
},
{
 num:3,
question_en: "Which gas is known as 'laughing gas'?",
question_hi: "किस गैस को 'हंसाने वाली गैस' के नाम से जाना जाता है?",
options_en: ["Nitrous Oxide", "Carbon Monoxide", "Sulfur Dioxide", "Ammonia"],
options_hi: ["नाइट्रस ऑक्साइड", "कार्बन मोनोऑक्साइड", "सल्फर डाइऑक्साइड", "अमोनिया"],
answer_en: "Nitrous Oxide",
answer_hi: "नाइट्रस ऑक्साइड",
attempted: false,
selected: ""
},
{
 num:4,
question_en: "The 'Kalinga War' was fought by which Mauryan emperor?",
question_hi: "'कलिंग युद्ध' किस मौर्य सम्राट द्वारा लड़ा गया था?",
options_en: ["Chandragupta Maurya", "Ashoka", "Bindusara", "Samprati"],
options_hi: ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "सम्प्रति"],
answer_en: "Ashoka",
answer_hi: "अशोक",
attempted: false,
selected: ""
},
{
 num:5,
question_en: "Which of the following is not a primary color in pigment?",
question_hi: "निम्नलिखित में से पिगमेंट (रंगद्रव्य) में प्राथमिक रंग नहीं है?",
options_en: ["Red", "Yellow", "Blue", "Green"],
options_hi: ["लाल", "पीला", "नीला", "हरा"],
answer_en: "Green",
answer_hi: "हरा",
attempted: false,
selected: ""
},
{
 num:6,
question_en: "Which river is also known as the 'Sorrow of Bengal'?",
question_hi: "किस नदी को 'बंगाल का शोक' भी कहा जाता है?",
options_en: ["Ganga", "Brahmaputra", "Damodar", "Hooghly"],
options_hi: ["गंगा", "ब्रह्मपुत्र", "दामोदर", "हुगली"],
answer_en: "Damodar",
answer_hi: "दामोदर",
attempted: false,
selected: ""
},
{
 num:7,
question_en: "Who was the first Indian woman to win an Olympic medal?",
question_hi: "ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
options_en: ["P.T. Usha", "Karnam Malleswari", "Mary Kom", "Saina Nehwal"],
options_hi: ["पी.टी. उषा", "कर्णम मल्लेश्वरी", "मैरी कॉम", "साइना नेहवाल"],
answer_en: "Karnam Malleswari",
answer_hi: "कर्णम मल्लेश्वरी",
attempted: false,
selected: ""
},
{
 num:8,
question_en: "Which organ is affected by the disease 'Cirrhosis'?",
question_hi: "किस अंग को 'सिरोसिस' रोग प्रभावित करता है?",
options_en: ["Heart", "Liver", "Kidney", "Lungs"],
options_hi: ["हृदय", "यकृत (लीवर)", "गुर्दा", "फेफड़े"],
answer_en: "Liver",
answer_hi: "यकृत (लीवर)",
attempted: false,
selected: ""
},
{
 num:9,
question_en: "The 'Vijayanagara Empire' was founded by whom?",
question_hi: "'विजयनगर साम्राज्य' की स्थापना किसने की?",
options_en: ["Krishnadevaraya", "Harihara I and Bukka Raya I", "Devaraya I", "Sadasiva Raya"],
options_hi: ["कृष्णदेव राय", "हरिहर प्रथम और बुक्का राय प्रथम", "देव राय प्रथम", "सदाशिव राय"],
answer_en: "Harihara I and Bukka Raya I",
answer_hi: "हरिहर प्रथम और बुक्का राय प्रथम",
attempted: false,
selected: ""
},
{
 num:10,
question_en: "What is the SI unit of force?",
question_hi: "बल की SI इकाई क्या है?",
options_en: ["Joule", "Pascal", "Newton", "Watt"],
options_hi: ["जूल", "पास्कल", "न्यूटन", "वाट"],
answer_en: "Newton",
answer_hi: "न्यूटन",
attempted: false,
selected: ""
},
{
 num:11,
question_en: "Which Indian city is known as the 'City of Joy'?",
question_hi: "भारत के किस शहर को 'सिटी ऑफ जॉय' (आनंद का शहर) कहा जाता है?",
options_en: ["Mumbai", "Kolkata", "Delhi", "Chennai"],
options_hi: ["मुंबई", "कोलकाता", "दिल्ली", "चेन्नई"],
answer_en: "Kolkata",
answer_hi: "कोलकाता",
attempted: false,
selected: ""
},
{
 num:12,
question_en: "Which vitamin deficiency causes 'Scurvy'?",
question_hi: "किस विटामिन की कमी से 'स्कर्वी' रोग होता है?",
options_en: ["Vitamin A", "Vitamin B12", "Vitamin C", "Vitamin D"],
options_hi: ["विटामिन ए", "विटामिन बी12", "विटामिन सी", "विटामिन डी"],
answer_en: "Vitamin C",
answer_hi: "विटामिन सी",
attempted: false,
selected: ""
},
{
 num:13,
question_en: "Who was the first Indian to go to space?",
question_hi: "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
options_en: ["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Ravish Malhotra"],
options_hi: ["कल्पना चावला", "सुनीता विलियम्स", "राकेश शर्मा", "रविश मल्होत्रा"],
answer_en: "Rakesh Sharma",
answer_hi: "राकेश शर्मा",
attempted: false,
selected: ""
},
{
 num:14,
question_en: "Which of the following is a conductor of electricity?",
question_hi: "निम्नलिखित में से कौन विद्युत का सुचालक है?",
options_en: ["Rubber", "Wood", "Copper", "Plastic"],
options_hi: ["रबर", "लकड़ी", "तांबा", "प्लास्टिक"],
answer_en: "Copper",
answer_hi: "तांबा",
attempted: false,
selected: ""
},
{
 num:15,
question_en: "The 'Battle of Panipat' in 1526 was fought between Babur and which ruler?",
question_hi: "1526 में 'पानीपत का युद्ध' बाबर और किस शासक के बीच लड़ा गया था?",
options_en: ["Ibrahim Lodi", "Rana Sanga", "Sher Shah Suri", "Humayun"],
options_hi: ["इब्राहिम लोदी", "राणा सांगा", "शेरशाह सूरी", "हुमायूं"],
answer_en: "Ibrahim Lodi",
answer_hi: "इब्राहिम लोदी",
attempted: false,
selected: ""
},
{
 num:16,
question_en: "What is the chemical symbol for sodium?",
question_hi: "सोडियम का रासायनिक प्रतीक क्या है?",
options_en: ["So", "Sd", "Na", "K"],
options_hi: ["So", "Sd", "Na", "K"],
answer_en: "Na",
answer_hi: "Na",
attempted: false,
selected: ""
},
{
 num:17,
question_en: "The 'Kumbh Mela' is held at which of the following places?",
question_hi: "'कुंभ मेला' निम्नलिखित में से किस स्थान पर आयोजित किया जाता है?",
options_en: ["Only Prayagraj", "Haridwar, Prayagraj, Nashik, Ujjain", "Only Varanasi", "Only Haridwar"],
options_hi: ["केवल प्रयागराज", "हरिद्वार, प्रयागराज, नासिक, उज्जैन", "केवल वाराणसी", "केवल हरिद्वार"],
answer_en: "Haridwar, Prayagraj, Nashik, Ujjain",
answer_hi: "हरिद्वार, प्रयागराज, नासिक, उज्जैन",
attempted: false,
selected: ""
},
{
 num:18,
question_en: "Which Indian cricketer is known as the 'God of Cricket'?",
question_hi: "किस भारतीय क्रिकेटर को 'क्रिकेट के भगवान' के नाम से जाना जाता है?",
options_en: ["Sachin Tendulkar", "Virat Kohli", "MS Dhoni", "Kapil Dev"],
options_hi: ["सचिन तेंदुलकर", "विराट कोहली", "एमएस धोनी", "कपिल देव"],
answer_en: "Sachin Tendulkar",
answer_hi: "सचिन तेंदुलकर",
attempted: false,
selected: ""
},
{
 num:19,
question_en: "Which planet is closest to the Sun?",
question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
options_en: ["Mercury", "Venus", "Earth", "Mars"],
options_hi: ["बुध", "शुक्र", "पृथ्वी", "मंगल"],
answer_en: "Mercury",
answer_hi: "बुध",
attempted: false,
selected: ""
},
{
 num:20,
question_en: "Who wrote the national song of India 'Vande Mataram'?",
question_hi: "भारत के राष्ट्रीय गीत 'वंदे मातरम्' के लेखक कौन हैं?",
options_en: ["Rabindranath Tagore", "Bankim Chandra Chattopadhyay", "Sarojini Naidu", "Muhammad Iqbal"],
options_hi: ["रबीन्द्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "मुहम्मद इकबाल"],
answer_en: "Bankim Chandra Chattopadhyay",
answer_hi: "बंकिम चंद्र चट्टोपाध्याय",
attempted: false,
selected: ""
},
{
 num:21,
question_en: "Which of the following is a metamorphic rock?",
question_hi: "निम्नलिखित में से कौन सी रूपांतरित चट्टान है?",
options_en: ["Granite", "Basalt", "Marble", "Sandstone"],
options_hi: ["ग्रेनाइट", "बेसाल्ट", "संगमरमर", "बलुआ पत्थर"],
answer_en: "Marble",
answer_hi: "संगमरमर",
attempted: false,
selected: ""
},
{
 num:22,
question_en: "The 'Dandi March' was led by Mahatma Gandhi in protest against which law?",
question_hi: "महात्मा गांधी द्वारा नेतृत्व किया गया 'दांडी मार्च' किस कानून के विरोध में था?",
options_en: ["Rowlatt Act", "Salt Tax", "Charter Act", "Government of India Act"],
options_hi: ["रॉलेट एक्ट", "नमक कर", "चार्टर एक्ट", "भारत सरकार अधिनियम"],
answer_en: "Salt Tax",
answer_hi: "नमक कर",
attempted: false,
selected: ""
},
{
 num:23,
question_en: "Which part of the human brain is responsible for balance and coordination?",
question_hi: "मानव मस्तिष्क का कौन सा भाग संतुलन और समन्वय के लिए जिम्मेदार है?",
options_en: ["Cerebrum", "Cerebellum", "Medulla Oblongata", "Hypothalamus"],
options_hi: ["सेरेब्रम", "सेरिबैलम", "मेडुला ओब्लोंगेटा", "हाइपोथैलेमस"],
answer_en: "Cerebellum",
answer_hi: "सेरिबैलम",
attempted: false,
selected: ""
},
{
 num:24,
question_en: "The 'Jallianwala Bagh Massacre' took place in which city?",
question_hi: "'जलियांवाला बाग हत्याकांड' किस शहर में हुआ था?",
options_en: ["Amritsar", "Lahore", "Delhi", "Kolkata"],
options_hi: ["अमृतसर", "लाहौर", "दिल्ली", "कोलकाता"],
answer_en: "Amritsar",
answer_hi: "अमृतसर",
attempted: false,
selected: ""
},
{
 num:25,
question_en: "Which gas is used in the manufacture of fertilizers like urea?",
question_hi: "यूरिया जैसे उर्वरकों के निर्माण में किस गैस का उपयोग किया जाता है?",
options_en: ["Oxygen", "Hydrogen", "Nitrogen", "Carbon Dioxide"],
options_hi: ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड"],
answer_en: "Nitrogen",
answer_hi: "नाइट्रोजन",
attempted: false,
selected: ""
},
{
 num:26,
question_en: "The 'Ajanta Caves' are famous for what?",
question_hi: "'अजंता गुफाएं' किस लिए प्रसिद्ध हैं?",
options_en: ["Sculptures", "Paintings", "Both Paintings and Sculptures", "Inscriptions"],
options_hi: ["मूर्तियां", "चित्रकारी", "चित्रकारी और मूर्तियां दोनों", "शिलालेख"],
answer_en: "Both Paintings and Sculptures",
answer_hi: "चित्रकारी और मूर्तियां दोनों",
attempted: false,
selected: ""
},
{
 num:27,
question_en: "Which instrument is used to measure the intensity of an earthquake?",
question_hi: "भूकंप की तीव्रता मापने के लिए किस उपकरण का उपयोग किया जाता है?",
options_en: ["Seismograph", "Richter Scale", "Both Seismograph and Richter Scale", "Barometer"],
options_hi: ["सिस्मोग्राफ", "रिक्टर पैमाना", "सिस्मोग्राफ और रिक्टर पैमाना दोनों", "बैरोमीटर"],
answer_en: "Both Seismograph and Richter Scale",
answer_hi: "सिस्मोग्राफ और रिक्टर पैमाना दोनों",
attempted: false,
selected: ""
},
{
 num:28,
question_en: "Who is the author of the book 'The God of Small Things'?",
question_hi: "'द गॉड ऑफ स्मॉल थिंग्स' पुस्तक की लेखिका कौन हैं?",
options_en: ["Arundhati Roy", "Jhumpa Lahiri", "Anita Desai", "Shashi Tharoor"],
options_hi: ["अरुंधति रॉय", "झुम्पा लाहिड़ी", "अनिता देसाई", "शशि थरूर"],
answer_en: "Arundhati Roy",
answer_hi: "अरुंधति रॉय",
attempted: false,
selected: ""
},
{
 num:29,
question_en: "Which river forms the 'Dhuandhar Falls'?",
question_hi: "'धुआंधार जलप्रपात' किस नदी पर बनता है?",
options_en: ["Narmada", "Kaveri", "Godavari", "Krishna"],
options_hi: ["नर्मदा", "कावेरी", "गोदावरी", "कृष्णा"],
answer_en: "Narmada",
answer_hi: "नर्मदा",
attempted: false,
selected: ""
},
{
 num:30,
question_en: "Which vitamin is also known as 'ascorbic acid'?",
question_hi: "किस विटामिन को 'एस्कॉर्बिक अम्ल' भी कहा जाता है?",
options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin K"],
options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन के"],
answer_en: "Vitamin C",
answer_hi: "विटामिन सी",
attempted: false,
selected: ""
},
{
 num:31,
question_en: "Who built the 'Red Fort' in Delhi?",
question_hi: "दिल्ली में 'लाल किला' किसने बनवाया?",
options_en: ["Akbar", "Shah Jahan", "Aurangzeb", "Humayun"],
options_hi: ["अकबर", "शाहजहां", "औरंगजेब", "हुमायूं"],
answer_en: "Shah Jahan",
answer_hi: "शाहजहां",
attempted: false,
selected: ""
},
{
 num:32,
question_en: "Which of the following is a water-borne disease?",
question_hi: "निम्नलिखित में से कौन सा जलजनित रोग है?",
options_en: ["Malaria", "Cholera", "Dengue", "Tuberculosis"],
options_hi: ["मलेरिया", "हैजा", "डेंगू", "तपेदिक"],
answer_en: "Cholera",
answer_hi: "हैजा",
attempted: false,
selected: ""
},
{
 num:33,
question_en: "The 'Battle of Buxar' was fought in which year?",
question_hi: "'बक्सर का युद्ध' किस वर्ष लड़ा गया था?",
options_en: ["1757", "1764", "1771", "1857"],
options_hi: ["1757", "1764", "1771", "1857"],
answer_en: "1764",
answer_hi: "1764",
attempted: false,
selected: ""
},
{
 num:34,
question_en: "What is the chemical formula of common salt?",
question_hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
options_en: ["NaCl", "KCl", "CaCO3", "NaHCO3"],
options_hi: ["NaCl", "KCl", "CaCO3", "NaHCO3"],
answer_en: "NaCl",
answer_hi: "NaCl",
attempted: false,
selected: ""
},
{
 num:35,
question_en: "Which Indian state is the largest producer of tea?",
question_hi: "चाय का सबसे बड़ा उत्पादक भारतीय राज्य कौन सा है?",
options_en: ["Kerala", "Karnataka", "Assam", "Tamil Nadu"],
options_hi: ["केरल", "कर्नाटक", "असम", "तमिलनाडु"],
answer_en: "Assam",
answer_hi: "असम",
attempted: false,
selected: ""
},
{
 num:36,
question_en: "Who discovered the 'Law of Gravitation'?",
question_hi: "'गुरुत्वाकर्षण का नियम' किसने खोजा?",
options_en: ["Albert Einstein", "Isaac Newton", "Galileo Galilei", "Archimedes"],
options_hi: ["अल्बर्ट आइंस्टीन", "आइजैक न्यूटन", "गैलीलियो गैलीली", "आर्किमिडीज"],
answer_en: "Isaac Newton",
answer_hi: "आइजैक न्यूटन",
attempted: false,
selected: ""
},
{
 num:37,
question_en: "Which Indian monument is also known as the 'Symbol of Love'?",
question_hi: "किस भारतीय स्मारक को 'प्रेम का प्रतीक' भी कहा जाता है?",
options_en: ["Taj Mahal", "Qutub Minar", "India Gate", "Charminar"],
options_hi: ["ताजमहल", "कुतुब मीनार", "इंडिया गेट", "चारमीनार"],
answer_en: "Taj Mahal",
answer_hi: "ताजमहल",
attempted: false,
selected: ""
},
{
 num:38,
question_en: "Which metal is present in the core of the Earth?",
question_hi: "पृथ्वी के क्रोड में कौन सी धातु मौजूद है?",
options_en: ["Nickel", "Iron", "Both Nickel and Iron", "Copper"],
options_hi: ["निकल", "लोहा", "निकल और लोहा दोनों", "तांबा"],
answer_en: "Both Nickel and Iron",
answer_hi: "निकल और लोहा दोनों",
attempted: false,
selected: ""
},
{
 num:39,
question_en: "Who was the first Governor-General of independent India?",
question_hi: "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
options_en: ["C. Rajagopalachari", "Lord Mountbatten", "Jawaharlal Nehru", "Rajendra Prasad"],
options_hi: ["सी. राजगोपालाचारी", "लॉर्ड माउंटबेटन", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
answer_en: "Lord Mountbatten",
answer_hi: "लॉर्ड माउंटबेटन",
attempted: false,
selected: ""
},
{
 num:40,
question_en: "Which of the following is not a function of the kidney?",
question_hi: "निम्नलिखित में से कौन सा गुर्दे का कार्य नहीं है?",
options_en: ["Filtration of blood", "Regulation of blood pressure", "Production of urine", "Production of bile"],
options_hi: ["रक्त का छानना", "रक्तचाप का नियमन", "मूत्र का उत्पादन", "पित्त का उत्पादन"],
answer_en: "Production of bile",
answer_hi: "पित्त का उत्पादन",
attempted: false,
selected: ""
},
{
 num:41,
question_en: "The 'Sanchi Stupa' is located in which Indian state?",
question_hi: "'सांची स्तूप' किस भारतीय राज्य में स्थित है?",
options_en: ["Uttar Pradesh", "Bihar", "Madhya Pradesh", "Rajasthan"],
options_hi: ["उत्तर प्रदेश", "बिहार", "मध्य प्रदेश", "राजस्थान"],
answer_en: "Madhya Pradesh",
answer_hi: "मध्य प्रदेश",
attempted: false,
selected: ""
},
{
 num:42,
question_en: "Which gas is used in fire extinguishers?",
question_hi: "अग्निशामक यंत्रों में किस गैस का उपयोग किया जाता है?",
options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
answer_en: "Carbon Dioxide",
answer_hi: "कार्बन डाइऑक्साइड",
attempted: false,
selected: ""
},
{
 num:43,
question_en: "Who founded the 'Mughal School of Painting'?",
question_hi: "'मुगल चित्रकला शैली' की नींव किसने रखी?",
options_en: ["Akbar", "Humayun", "Jahangir", "Shah Jahan"],
options_hi: ["अकबर", "हुमायूं", "जहांगीर", "शाहजहां"],
answer_en: "Humayun",
answer_hi: "हुमायूं",
attempted: false,
selected: ""
},
{
 num:44,
question_en: "Which is the deepest ocean in the world?",
question_hi: "दुनिया का सबसे गहरा महासागर कौन सा है?",
options_en: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
options_hi: ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
answer_en: "Pacific Ocean",
answer_hi: "प्रशांत महासागर",
attempted: false,
selected: ""
},
{
 num:45,
question_en: "What is the chemical name of baking soda?",
question_hi: "बेकिंग सोडा का रासायनिक नाम क्या है?",
options_en: ["Sodium Carbonate", "Sodium Bicarbonate", "Calcium Carbonate", "Sodium Chloride"],
options_hi: ["सोडियम कार्बोनेट", "सोडियम बाइकार्बोनेट", "कैल्शियम कार्बोनेट", "सोडियम क्लोराइड"],
answer_en: "Sodium Bicarbonate",
answer_hi: "सोडियम बाइकार्बोनेट",
attempted: false,
selected: ""
},
{
 num:46,
question_en: "Who was the first female ruler of the Delhi Sultanate?",
question_hi: "दिल्ली सल्तनत की पहली महिला शासक कौन थीं?",
options_en: ["Razia Sultan", "Nur Jahan", "Mumtaz Mahal", "Chand Bibi"],
options_hi: ["रजिया सुल्तान", "नूरजहां", "मुमताज महल", "चांद बीबी"],
answer_en: "Razia Sultan",
answer_hi: "रजिया सुल्तान",
attempted: false,
selected: ""
},
{
 num:47,
question_en: "Which planet is known as the 'Morning Star'?",
question_hi: "किस ग्रह को 'सुबह का तारा' कहा जाता है?",
options_en: ["Mercury", "Venus", "Mars", "Jupiter"],
options_hi: ["बुध", "शुक्र", "मंगल", "बृहस्पति"],
answer_en: "Venus",
answer_hi: "शुक्र",
attempted: false,
selected: ""
},
{
 num:48,
question_en: "The 'Kailasa Temple' at Ellora was built by which dynasty?",
question_hi: "एलोरा का 'कैलाश मंदिर' किस वंश ने बनवाया था?",
options_en: ["Rashtrakuta", "Chalukya", "Pallava", "Chola"],
options_hi: ["राष्ट्रकूट", "चालुक्य", "पल्लव", "चोल"],
answer_en: "Rashtrakuta",
answer_hi: "राष्ट्रकूट",
attempted: false,
selected: ""
},
{
 num:49,
question_en: "Which of the following is a communicable disease?",
question_hi: "निम्नलिखित में से कौन सा संचारी रोग है?",
options_en: ["Diabetes", "Cancer", "Malaria", "Hypertension"],
options_hi: ["मधुमेह", "कैंसर", "मलेरिया", "उच्च रक्तचाप"],
answer_en: "Malaria",
answer_hi: "मलेरिया",
attempted: false,
selected: ""
},
{
 num:50,
question_en: "Who invented the 'Computer'?",
question_hi: "'कंप्यूटर' का आविष्कार किसने किया?",
options_en: ["Charles Babbage", "Alan Turing", "John von Neumann", "Steve Jobs"],
options_hi: ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "जॉन वॉन न्यूमैन", "स्टीव जॉब्स"],
answer_en: "Charles Babbage",
answer_hi: "चार्ल्स बैबेज",
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