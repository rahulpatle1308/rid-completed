const questions = [
 {
 num:1,
question_en: "Which Indian state is known as the 'Spice Garden of India'?",
question_hi: "किस भारतीय राज्य को 'भारत का मसाला बागान' कहा जाता है?",
options_en: ["Kerala", "Karnataka", "Tamil Nadu", "Goa"],
options_hi: ["केरल", "कर्नाटक", "तमिलनाडु", "गोवा"],
answer_en: "Kerala",
answer_hi: "केरल",
attempted: false,
selected: ""
},
{
 num:2,
question_en: "Who was the first Indian to win an individual gold medal at the Olympics?",
question_hi: "ओलंपिक में व्यक्तिगत स्वर्ण पदक जीतने वाले पहले भारतीय कौन थे?",
options_en: ["Abhinav Bindra", "Neeraj Chopra", "K.D. Jadhav", "P.V. Sindhu"],
options_hi: ["अभिनव बिंद्रा", "नीरज चोपड़ा", "के.डी. जाधव", "पी.वी. सिंधु"],
answer_en: "Abhinav Bindra",
answer_hi: "अभिनव बिंद्रा",
attempted: false,
selected: ""
},
{
 num:3,
question_en: "What is the scientific name of the Indian Peacock?",
question_hi: "भारतीय मोर का वैज्ञानिक नाम क्या है?",
options_en: ["Pavo cristatus", "Gallus gallus", "Columba livia", "Corvus splendens"],
options_hi: ["पावो क्रिस्टेटस", "गैलस गैलस", "कोलंबा लिविया", "कोरवस स्प्लेंडेंस"],
answer_en: "Pavo cristatus",
answer_hi: "पावो क्रिस्टेटस",
attempted: false,
selected: ""
},
{
 num:4,
question_en: "Which Mughal emperor built the 'Buland Darwaza'?",
question_hi: "किस मुगल बादशाह ने 'बुलंद दरवाजा' बनवाया?",
options_en: ["Babur", "Humayun", "Akbar", "Jahangir"],
options_hi: ["बाबर", "हुमायूं", "अकबर", "जहांगीर"],
answer_en: "Akbar",
answer_hi: "अकबर",
attempted: false,
selected: ""
},
{
 num:5,
question_en: "Which gland in the human body regulates the body's metabolism?",
question_hi: "मानव शरीर में कौन सी ग्रंथि शरीर के चयापचय को नियंत्रित करती है?",
options_en: ["Thyroid", "Pituitary", "Adrenal", "Pancreas"],
options_hi: ["थायरॉयड", "पिट्यूटरी", "अधिवृक्क", "अग्न्याशय"],
answer_en: "Thyroid",
answer_hi: "थायरॉयड",
attempted: false,
selected: ""
},
{
 num:6,
question_en: "The 'Battle of Talikota' (1565) resulted in the downfall of which empire?",
question_hi: "'तालीकोटा का युद्ध' (1565) के परिणामस्वरूप किस साम्राज्य का पतन हुआ?",
options_en: ["Vijayanagara Empire", "Mughal Empire", "Maratha Empire", "Delhi Sultanate"],
options_hi: ["विजयनगर साम्राज्य", "मुगल साम्राज्य", "मराठा साम्राज्य", "दिल्ली सल्तनत"],
answer_en: "Vijayanagara Empire",
answer_hi: "विजयनगर साम्राज्य",
attempted: false,
selected: ""
},
{
 num:7,
question_en: "Which of the following metals is liquid at room temperature?",
question_hi: "निम्नलिखित में से कौन सी धातु कमरे के तापमान पर तरल होती है?",
options_en: ["Iron", "Mercury", "Copper", "Aluminum"],
options_hi: ["लोहा", "पारा", "तांबा", "एल्यूमीनियम"],
answer_en: "Mercury",
answer_hi: "पारा",
attempted: false,
selected: ""
},
{
 num:8,
question_en: "Who wrote the famous novel 'Malgudi Days'?",
question_hi: "प्रसिद्ध उपन्यास 'मालगुडी डेज' किसने लिखा?",
options_en: ["R.K. Narayan", "Mulk Raj Anand", "Raja Rao", "Khushwant Singh"],
options_hi: ["आर.के. नारायण", "मुल्क राज आनंद", "राजा राव", "खुशवंत सिंह"],
answer_en: "R.K. Narayan",
answer_hi: "आर.के. नारायण",
attempted: false,
selected: ""
},
{
 num:9,
question_en: "Which is the largest gland in the human body?",
question_hi: "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
options_en: ["Liver", "Pancreas", "Thyroid", "Pituitary"],
options_hi: ["यकृत", "अग्न्याशय", "थायरॉयड", "पिट्यूटरी"],
answer_en: "Liver",
answer_hi: "यकृत",
attempted: false,
selected: ""
},
{
 num:10,
question_en: "The 'Mysore Palace' is located in which state?",
question_hi: "'मैसूर पैलेस' किस राज्य में स्थित है?",
options_en: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
options_hi: ["तमिलनाडु", "केरल", "कर्नाटक", "आंध्र प्रदेश"],
answer_en: "Karnataka",
answer_hi: "कर्नाटक",
attempted: false,
selected: ""
},
{
 num:11,
question_en: "What is the chemical formula of methane?",
question_hi: "मीथेन का रासायनिक सूत्र क्या है?",
options_en: ["CH4", "C2H6", "C3H8", "CO2"],
options_hi: ["CH4", "C2H6", "C3H8", "CO2"],
answer_en: "CH4",
answer_hi: "CH4",
attempted: false,
selected: ""
},
{
 num:12,
question_en: "Who was the founder of the 'Maurya Dynasty'?",
question_hi: "'मौर्य वंश' के संस्थापक कौन थे?",
options_en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Dasharatha Maurya"],
options_hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिंदुसार", "दशरथ मौर्य"],
answer_en: "Chandragupta Maurya",
answer_hi: "चंद्रगुप्त मौर्य",
attempted: false,
selected: ""
},
{
 num:13,
question_en: "Which of the following is a 'Kharif' crop?",
question_hi: "निम्नलिखित में से कौन सी 'खरीफ' फसल है?",
options_en: ["Wheat", "Rice", "Barley", "Mustard"],
options_hi: ["गेहूं", "धान", "जौ", "सरसों"],
answer_en: "Rice",
answer_hi: "धान",
attempted: false,
selected: ""
},
{
 num:14,
question_en: "The 'Kashmir Valley' is located between which two mountain ranges?",
question_hi: "'कश्मीर घाटी' किन दो पर्वत श्रृंखलाओं के बीच स्थित है?",
options_en: ["Himalayas and Karakoram", "Himalayas and Pir Panjal", "Pir Panjal and Zanskar", "Karakoram and Zanskar"],
options_hi: ["हिमालय और काराकोरम", "हिमालय और पीर पंजाल", "पीर पंजाल और जांस्कर", "काराकोरम और जांस्कर"],
answer_en: "Himalayas and Pir Panjal",
answer_hi: "हिमालय और पीर पंजाल",
attempted: false,
selected: ""
},
{
 num:15,
question_en: "Who discovered the 'Electron'?",
question_hi: "'इलेक्ट्रॉन' की खोज किसने की?",
options_en: ["J.J. Thomson", "Ernest Rutherford", "James Chadwick", "John Dalton"],
options_hi: ["जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड", "जेम्स चैडविक", "जॉन डाल्टन"],
answer_en: "J.J. Thomson",
answer_hi: "जे.जे. थॉमसन",
attempted: false,
selected: ""
},
{
 num:16,
question_en: "Which Indian state has the highest literacy rate?",
question_hi: "किस भारतीय राज्य की साक्षरता दर सबसे अधिक है?",
options_en: ["Kerala", "Mizoram", "Goa", "Delhi"],
options_hi: ["केरल", "मिजोरम", "गोवा", "दिल्ली"],
answer_en: "Kerala",
answer_hi: "केरल",
attempted: false,
selected: ""
},
{
 num:17,
question_en: "What is the name of India's first satellite?",
question_hi: "भारत के पहले उपग्रह का नाम क्या है?",
options_en: ["Aryabhata", "Bhaskara", "Rohini", "INSAT-1A"],
options_hi: ["आर्यभट्ट", "भास्कर", "रोहिणी", "इंसैट-1ए"],
answer_en: "Aryabhata",
answer_hi: "आर्यभट्ट",
attempted: false,
selected: ""
},
{
 num:18,
question_en: "Who painted the famous mural 'Bharat Mata'?",
question_hi: "प्रसिद्ध भित्तिचित्र 'भारत माता' किसने चित्रित किया?",
options_en: ["Raja Ravi Varma", "Abanindranath Tagore", "Nandalal Bose", "M.F. Husain"],
options_hi: ["राजा रवि वर्मा", "अबनिंद्रनाथ टैगोर", "नंदलाल बोस", "एम.एफ. हुसैन"],
answer_en: "Abanindranath Tagore",
answer_hi: "अबनिंद्रनाथ टैगोर",
attempted: false,
selected: ""
},
{
 num:19,
question_en: "Which is the largest freshwater lake in India?",
question_hi: "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
options_en: ["Wular Lake", "Chilika Lake", "Dal Lake", "Loktak Lake"],
options_hi: ["वुलर झील", "चिल्का झील", "डल झील", "लोकटक झील"],
answer_en: "Wular Lake",
answer_hi: "वुलर झील",
attempted: false,
selected: ""
},
{
 num:20,
question_en: "Who was the first Chief Justice of India?",
question_hi: "भारत के पहले मुख्य न्यायाधीश कौन थे?",
options_en: ["Harilal J. Kania", "M. Patanjali Sastri", "S. R. Das", "Bhuvaneshwar Prasad Sinha"],
options_hi: ["हरिलाल जे. कनिया", "एम. पतंजलि शास्त्री", "एस. आर. दास", "भुवनेश्वर प्रसाद सिन्हा"],
answer_en: "Harilal J. Kania",
answer_hi: "हरिलाल जे. कनिया",
attempted: false,
selected: ""
},
{
 num:21,
question_en: "Which of the following is a 'Rabi' crop?",
question_hi: "निम्नलिखित में से कौन सी 'रबी' फसल है?",
options_en: ["Cotton", "Sugarcane", "Wheat", "Maize"],
options_hi: ["कपास", "गन्ना", "गेहूं", "मक्का"],
answer_en: "Wheat",
answer_hi: "गेहूं",
attempted: false,
selected: ""
},
{
 num:22,
question_en: "The 'Drainage Basin' of the river Ganga is called what?",
question_hi: "गंगा नदी के 'अपवाह बेसिन' को क्या कहा जाता है?",
options_en: ["Indo-Gangetic Plain", "Ganga Basin", "Gangetic Plain", "All of the above"],
options_hi: ["सिंधु-गंगा का मैदान", "गंगा बेसिन", "गंगा का मैदान", "उपरोक्त सभी"],
answer_en: "All of the above",
answer_hi: "उपरोक्त सभी",
attempted: false,
selected: ""
},
{
 num:23,
question_en: "Who was the first woman to climb Mount Everest?",
question_hi: "माउंट एवरेस्ट पर चढ़ने वाली पहली महिला कौन थीं?",
options_en: ["Junko Tabei", "Santosh Yadav", "Bachendri Pal", "Premlata Agarwal"],
options_hi: ["जुनको ताबेई", "संतोष यादव", "बछेंद्री पाल", "प्रेमलता अग्रवाल"],
answer_en: "Junko Tabei",
answer_hi: "जुनको ताबेई",
attempted: false,
selected: ""
},
{
 num:24,
question_en: "Which acid is secreted in the human stomach?",
question_hi: "मानव पेट में कौन सा अम्ल स्रावित होता है?",
options_en: ["Sulfuric Acid", "Hydrochloric Acid", "Nitric Acid", "Acetic Acid"],
options_hi: ["सल्फ्यूरिक अम्ल", "हाइड्रोक्लोरिक अम्ल", "नाइट्रिक अम्ल", "एसिटिक अम्ल"],
answer_en: "Hydrochloric Acid",
answer_hi: "हाइड्रोक्लोरिक अम्ल",
attempted: false,
selected: ""
},
{
 num:25,
question_en: "The 'Bihu' festival is primarily celebrated in which Indian state?",
question_hi: "'बिहू' त्योहार मुख्य रूप से किस भारतीय राज्य में मनाया जाता है?",
options_en: ["Assam", "Manipur", "Nagaland", "Tripura"],
options_hi: ["असम", "मणिपुर", "नागालैंड", "त्रिपुरा"],
answer_en: "Assam",
answer_hi: "असम",
attempted: false,
selected: ""
},
{
 num:26,
question_en: "What is the currency of South Korea?",
question_hi: "दक्षिण कोरिया की मुद्रा क्या है?",
options_en: ["Yuan", "Won", "Yen", "Ringgit"],
options_hi: ["युआन", "वॉन", "येन", "रिंगित"],
answer_en: "Won",
answer_hi: "वॉन",
attempted: false,
selected: ""
},
{
 num:27,
question_en: "Who composed the Indian National Anthem 'Jana Gana Mana'?",
question_hi: "भारत के राष्ट्रगान 'जन गण मन' के रचयिता कौन हैं?",
options_en: ["Bankim Chandra Chattopadhyay", "Rabindranath Tagore", "Muhammad Iqbal", "Sarojini Naidu"],
options_hi: ["बंकिम चंद्र चट्टोपाध्याय", "रबीन्द्रनाथ टैगोर", "मुहम्मद इकबाल", "सरोजिनी नायडू"],
answer_en: "Rabindranath Tagore",
answer_hi: "रबीन्द्रनाथ टैगोर",
attempted: false,
selected: ""
},
{
 num:28,
question_en: "Which of the following is a natural polymer?",
question_hi: "निम्नलिखित में से कौन सा एक प्राकृतिक बहुलक है?",
options_en: ["Polythene", "Nylon", "Cellulose", "PVC"],
options_hi: ["पॉलीथीन", "नायलॉन", "सेल्युलोज", "पीवीसी"],
answer_en: "Cellulose",
answer_hi: "सेल्युलोज",
attempted: false,
selected: ""
},
{
 num:29,
question_en: "Who is known as the 'Missile Man of India'?",
question_hi: "'भारत के मिसाइल मैन' के नाम से कौन जाने जाते हैं?",
options_en: ["Homi J. Bhabha", "Vikram Sarabhai", "A.P.J. Abdul Kalam", "C.V. Raman"],
options_hi: ["होमी जे. भाभा", "विक्रम साराभाई", "ए.पी.जे. अब्दुल कलाम", "सी.वी. रमन"],
answer_en: "A.P.J. Abdul Kalam",
answer_hi: "ए.पी.जे. अब्दुल कलाम",
attempted: false,
selected: ""
},
{
 num:30,
question_en: "Which river is known as the 'Dakshin Ganga'?",
question_hi: "किस नदी को 'दक्षिण गंगा' कहा जाता है?",
options_en: ["Godavari", "Krishna", "Kaveri", "Mahanadi"],
options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
answer_en: "Godavari",
answer_hi: "गोदावरी",
attempted: false,
selected: ""
},
{
 num:31,
question_en: "Which Indian city is known as the 'Manchester of India'?",
question_hi: "भारत के किस शहर को 'भारत का मैनचेस्टर' कहा जाता है?",
options_en: ["Mumbai", "Ahmedabad", "Surat", "Coimbatore"],
options_hi: ["मुंबई", "अहमदाबाद", "सूरत", "कोयंबटूर"],
answer_en: "Ahmedabad",
answer_hi: "अहमदाबाद",
attempted: false,
selected: ""
},
{
 num:32,
question_en: "Which vitamin is essential for blood clotting?",
question_hi: "रक्त के जमाव के लिए कौन सा विटामिन आवश्यक है?",
options_en: ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
options_hi: ["विटामिन ए", "विटामिन सी", "विटामिन डी", "विटामिन के"],
answer_en: "Vitamin K",
answer_hi: "विटामिन के",
attempted: false,
selected: ""
},
{
 num:33,
question_en: "Who was the first Indian to win the Booker Prize?",
question_hi: "बुकर पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
options_en: ["Arundhati Roy", "Salman Rushdie", "Kiran Desai", "V.S. Naipaul"],
options_hi: ["अरुंधति रॉय", "सलमान रुश्दी", "किरण देसाई", "वी.एस. नायपॉल"],
answer_en: "Arundhati Roy",
answer_hi: "अरुंधति रॉय",
attempted: false,
selected: ""
},
{
 num:34,
question_en: "What is the chemical formula of ozone?",
question_hi: "ओजोन का रासायनिक सूत्र क्या है?",
options_en: ["O2", "O3", "O4", "H2O"],
options_hi: ["O2", "O3", "O4", "H2O"],
answer_en: "O3",
answer_hi: "O3",
attempted: false,
selected: ""
},
{
 num:35,
question_en: "Which Chola king built the Brihadeeswara Temple in Thanjavur?",
question_hi: "किस चोल राजा ने तंजावुर में बृहदीश्वर मंदिर बनवाया?",
options_en: ["Rajaraja I", "Rajendra I", "Kulottunga I", "Vijayalaya"],
options_hi: ["राजराजा प्रथम", "राजेंद्र प्रथम", "कुलोत्तुंग प्रथम", "विजयालय"],
answer_en: "Rajaraja I",
answer_hi: "राजराजा प्रथम",
attempted: false,
selected: ""
},
{
 num:36,
question_en: "Which is the smallest country in the world by area?",
question_hi: "क्षेत्रफल की दृष्टि से दुनिया का सबसे छोटा देश कौन सा है?",
options_en: ["Monaco", "Nauru", "Vatican City", "San Marino"],
options_hi: ["मोनाको", "नाउरु", "वेटिकन सिटी", "सैन मैरिनो"],
answer_en: "Vatican City",
answer_hi: "वेटिकन सिटी",
attempted: false,
selected: ""
},
{
 num:37,
question_en: "Who was the first Indian woman to win an Asian Games gold medal?",
question_hi: "एशियाई खेलों में स्वर्ण पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
options_en: ["Kamaljit Sandhu", "P.T. Usha", "Milkha Singh", "Anju Bobby George"],
options_hi: ["कमलजीत संधू", "पी.टी. उषा", "मिल्खा सिंह", "अंजू बॉबी जॉर्ज"],
answer_en: "Kamaljit Sandhu",
answer_hi: "कमलजीत संधू",
attempted: false,
selected: ""
},
{
 num:38,
question_en: "Which gas is used in the preparation of soda water?",
question_hi: "सोडा वॉटर तैयार करने में किस गैस का उपयोग किया जाता है?",
options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
answer_en: "Carbon Dioxide",
answer_hi: "कार्बन डाइऑक्साइड",
attempted: false,
selected: ""
},
{
 num:39,
question_en: "The 'Sun Temple' of Konark is dedicated to which deity?",
question_hi: "कोणार्क का 'सूर्य मंदिर' किस देवता को समर्पित है?",
options_en: ["Lord Shiva", "Lord Vishnu", "Sun God", "Lord Brahma"],
options_hi: ["भगवान शिव", "भगवान विष्णु", "सूर्य देव", "भगवान ब्रह्मा"],
answer_en: "Sun God",
answer_hi: "सूर्य देव",
attempted: false,
selected: ""
},
{
 num:40,
question_en: "What is the SI unit of pressure?",
question_hi: "दबाव की SI इकाई क्या है?",
options_en: ["Pascal", "Newton", "Joule", "Watt"],
options_hi: ["पास्कल", "न्यूटन", "जूल", "वाट"],
answer_en: "Pascal",
answer_hi: "पास्कल",
attempted: false,
selected: ""
},
{
 num:41,
question_en: "Who was the first Indian to swim across the English Channel?",
question_hi: "इंग्लिश चैनल तैरकर पार करने वाले पहले भारतीय कौन थे?",
options_en: ["Mihir Sen", "Arati Saha", "Bula Choudhury", "Virdhawal Khade"],
options_hi: ["मिहिर सेन", "अरती साहा", "बुला चौधरी", "विरधावल खाड़े"],
answer_en: "Mihir Sen",
answer_hi: "मिहिर सेन",
attempted: false,
selected: ""
},
{
 num:42,
question_en: "Which of the following is a greenhouse gas that is also a component of biogas?",
question_hi: "निम्नलिखित में से कौन सी ग्रीनहाउस गैस बायोगैस का भी एक घटक है?",
options_en: ["Methane", "Ethane", "Propane", "Butane"],
options_hi: ["मीथेन", "ईथेन", "प्रोपेन", "ब्यूटेन"],
answer_en: "Methane",
answer_hi: "मीथेन",
attempted: false,
selected: ""
},
{
 num:43,
question_en: "The 'Chandra Shekhar Azad' memorial is located at which place?",
question_hi: "'चंद्रशेखर आजाद' स्मारक किस स्थान पर स्थित है?",
options_en: ["Allahabad", "Lucknow", "Varanasi", "Kanpur"],
options_hi: ["इलाहाबाद", "लखनऊ", "वाराणसी", "कानपुर"],
answer_en: "Allahabad",
answer_hi: "इलाहाबाद",
attempted: false,
selected: ""
},
{
 num:44,
question_en: "Which vitamin deficiency causes 'Beri-Beri'?",
question_hi: "किस विटामिन की कमी से 'बेरी-बेरी' रोग होता है?",
options_en: ["Vitamin B1", "Vitamin B2", "Vitamin B6", "Vitamin B12"],
options_hi: ["विटामिन बी1", "विटामिन बी2", "विटामिन बी6", "विटामिन बी12"],
answer_en: "Vitamin B1",
answer_hi: "विटामिन बी1",
attempted: false,
selected: ""
},
{
 num:45,
question_en: "Who was the first woman to become the Speaker of Lok Sabha?",
question_hi: "लोकसभा की अध्यक्ष बनने वाली पहली महिला कौन थीं?",
options_en: ["Meira Kumar", "Sumitra Mahajan", "Sushma Swaraj", "Indira Gandhi"],
options_hi: ["मीरा कुमार", "सुमित्रा महाजन", "सुषमा स्वराज", "इंदिरा गांधी"],
answer_en: "Meira Kumar",
answer_hi: "मीरा कुमार",
attempted: false,
selected: ""
},
{
 num:46,
question_en: "Which planet has the most prominent rings?",
question_hi: "किस ग्रह के सबसे प्रमुख वलय हैं?",
options_en: ["Jupiter", "Saturn", "Uranus", "Neptune"],
options_hi: ["बृहस्पति", "शनि", "अरुण", "वरुण"],
answer_en: "Saturn",
answer_hi: "शनि",
attempted: false,
selected: ""
},
{
 num:47,
question_en: "The 'Kandariya Mahadeva Temple' is located in which temple complex?",
question_hi: "'कंदरिया महादेव मंदिर' किस मंदिर परिसर में स्थित है?",
options_en: ["Khajuraho", "Konark", "Belur", "Hampi"],
options_hi: ["खजुराहो", "कोणार्क", "बेलूर", "हंपी"],
answer_en: "Khajuraho",
answer_hi: "खजुराहो",
attempted: false,
selected: ""
},
{
 num:48,
question_en: "Which Indian state is the largest producer of coffee?",
question_hi: "कॉफी का सबसे बड़ा उत्पादक भारतीय राज्य कौन सा है?",
options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
answer_en: "Karnataka",
answer_hi: "कर्नाटक",
attempted: false,
selected: ""
},
{
 num:49,
question_en: "What is the chemical name of 'Plaster of Paris'?",
question_hi: "'प्लास्टर ऑफ पेरिस' का रासायनिक नाम क्या है?",
options_en: ["Calcium Sulfate", "Calcium Sulfate Hemihydrate", "Calcium Carbonate", "Calcium Oxide"],
options_hi: ["कैल्शियम सल्फेट", "कैल्शियम सल्फेट हेमीहाइड्रेट", "कैल्शियम कार्बोनेट", "कैल्शियम ऑक्साइड"],
answer_en: "Calcium Sulfate Hemihydrate",
answer_hi: "कैल्शियम सल्फेट हेमीहाइड्रेट",
attempted: false,
selected: ""
},
{
 num:50,
question_en: "Who is the author of the book 'The Argumentative Indian'?",
question_hi: "'द आर्ग्यूमेंटेटिव इंडियन' पुस्तक के लेखक कौन हैं?",
options_en: ["Amartya Sen", "Shashi Tharoor", "Ramachandra Guha", "Pankaj Mishra"],
options_hi: ["अमर्त्य सेन", "शशि थरूर", "रामचंद्र गुहा", "पंकज मिश्र"],
answer_en: "Amartya Sen",
answer_hi: "अमर्त्य सेन",
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