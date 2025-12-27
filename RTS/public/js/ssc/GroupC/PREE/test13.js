const questions = [
{
  num:1,
  question_en: "Who is the Chief Election Commissioner of India?",
  question_hi: "भारत के मुख्य चुनाव आयुक्त कौन हैं?",
  options_en: ["Rajiv Kumar", "Sunil Arora", "Sushil Chandra", "Anup Chandra Pandey"],
  options_hi: ["राजीव कुमार", "सुनील अरोड़ा", "सुशील चंद्रा", "अनूप चंद्र पांडे"],
  answer_en: "Rajiv Kumar",
  answer_hi: "राजीव कुमार",
  attempted: false,
  selected: ""
},
{
  num:2,
  question_en: "Which country assumed G20 presidency after India?",
  question_hi: "भारत के बाद G20 की अध्यक्षता किस देश ने संभाली?",
  options_en: ["Brazil", "USA", "South Africa", "Japan"],
  options_hi: ["ब्राज़ील", "अमेरिका", "दक्षिण अफ्रीका", "जापान"],
  answer_en: "Brazil",
  answer_hi: "ब्राज़ील",
  attempted: false,
  selected: ""
},
{
  num:3,
  question_en: "Which scheme aims to provide tap water to every household?",
  question_hi: "हर घर नल से जल पहुंचाने की योजना कौन-सी है?",
  options_en: ["Jal Jeevan Mission", "Swachh Bharat Mission", "AMRUT", "Namami Gange"],
  options_hi: ["जल जीवन मिशन", "स्वच्छ भारत मिशन", "अमृत", "नमामि गंगे"],
  answer_en: "Jal Jeevan Mission",
  answer_hi: "जल जीवन मिशन",
  attempted: false,
  selected: ""
},
{
  num:4,
  question_en: "Who is the Chairman of SEBI?",
  question_hi: "SEBI के अध्यक्ष कौन हैं?",
  options_en: ["Madhabi Puri Buch", "Ajay Tyagi", "U. K. Sinha", "Raghuram Rajan"],
  options_hi: ["माधबी पुरी बुच", "अजय त्यागी", "यू. के. सिन्हा", "रघुराम राजन"],
  answer_en: "Madhabi Puri Buch",
  answer_hi: "माधबी पुरी बुच",
  attempted: false,
  selected: ""
},
{
  num:5,
  question_en: "Which Indian state launched the Ladli Behna Yojana?",
  question_hi: "लाड़ली बहना योजना किस राज्य ने शुरू की?",
  options_en: ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Bihar"],
  options_hi: ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "बिहार"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},

{
  num:6,
  question_en: "Who won the Women's Premier League 2023?",
  question_hi: "महिला प्रीमियर लीग 2023 किसने जीती?",
  options_en: ["Mumbai Indians", "Delhi Capitals", "UP Warriorz", "RCB"],
  options_hi: ["मुंबई इंडियंस", "दिल्ली कैपिटल्स", "यूपी वॉरियर्स", "RCB"],
  answer_en: "Mumbai Indians",
  answer_hi: "मुंबई इंडियंस",
  attempted: false,
  selected: ""
},
{
  num:7,
  question_en: "Which ministry launched Mission LiFE?",
  question_hi: "मिशन LiFE किस मंत्रालय द्वारा शुरू किया गया?",
  options_en: ["Ministry of Environment", "Ministry of Finance", "Ministry of Power", "Ministry of Education"],
  options_hi: ["पर्यावरण मंत्रालय", "वित्त मंत्रालय", "ऊर्जा मंत्रालय", "शिक्षा मंत्रालय"],
  answer_en: "Ministry of Environment",
  answer_hi: "पर्यावरण मंत्रालय",
  attempted: false,
  selected: ""
},
{
  num:8,
  question_en: "Who is the current CEO of UIDAI?",
  question_hi: "UIDAI के वर्तमान CEO कौन हैं?",
  options_en: ["Amit Agrawal", "Ajay Bhushan Pandey", "Arvind Kumar Sharma", "Ashok Lavasa"],
  options_hi: ["अमित अग्रवाल", "अजय भूषण पांडे", "अरविंद कुमार शर्मा", "अशोक लवासा"],
  answer_en: "Amit Agrawal",
  answer_hi: "अमित अग्रवाल",
  attempted: false,
  selected: ""
},
{
  num:9,
  question_en: "Which Indian city hosted the G20 Leaders Summit?",
  question_hi: "G20 लीडर्स समिट की मेज़बानी किस भारतीय शहर ने की?",
  options_en: ["New Delhi", "Mumbai", "Bengaluru", "Hyderabad"],
  options_hi: ["नई दिल्ली", "मुंबई", "बेंगलुरु", "हैदराबाद"],
  answer_en: "New Delhi",
  answer_hi: "नई दिल्ली",
  attempted: false,
  selected: ""
},
{
  num:10,
  question_en: "Which country won the Asian Cup Football 2023?",
  question_hi: "एशियन कप फुटबॉल 2023 किस देश ने जीता?",
  options_en: ["Qatar", "Japan", "South Korea", "Iran"],
  options_hi: ["क़तर", "जापान", "दक्षिण कोरिया", "ईरान"],
  answer_en: "Qatar",
  answer_hi: "क़तर",
  attempted: false,
  selected: ""
},

{
  num:11,
  question_en: "Which Indian scheme focuses on startup ecosystem?",
  question_hi: "स्टार्टअप इकोसिस्टम से संबंधित भारतीय योजना कौन-सी है?",
  options_en: ["Startup India", "Make in India", "Skill India", "Digital India"],
  options_hi: ["स्टार्टअप इंडिया", "मेक इन इंडिया", "स्किल इंडिया", "डिजिटल इंडिया"],
  answer_en: "Startup India",
  answer_hi: "स्टार्टअप इंडिया",
  attempted: false,
  selected: ""
},
{
  num:12,
  question_en: "Who is the Chief Minister of Madhya Pradesh?",
  question_hi: "मध्य प्रदेश के मुख्यमंत्री कौन हैं?",
  options_en: ["Mohan Yadav", "Shivraj Singh Chouhan", "Kamal Nath", "Digvijay Singh"],
  options_hi: ["मोहन यादव", "शिवराज सिंह चौहान", "कमलनाथ", "दिग्विजय सिंह"],
  answer_en: "Mohan Yadav",
  answer_hi: "मोहन यादव",
  attempted: false,
  selected: ""
},
{
  num:13,
  question_en: "Which country launched the Artemis Moon Mission?",
  question_hi: "आर्टेमिस चंद्र मिशन किस देश ने लॉन्च किया?",
  options_en: ["USA", "China", "Russia", "India"],
  options_hi: ["अमेरिका", "चीन", "रूस", "भारत"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num:14,
  question_en: "Which Indian state topped the Ease of Living Index?",
  question_hi: "ईज़ ऑफ लिविंग इंडेक्स में कौन-सा राज्य शीर्ष पर रहा?",
  options_en: ["Karnataka", "Maharashtra", "Gujarat", "Tamil Nadu"],
  options_hi: ["कर्नाटक", "महाराष्ट्र", "गुजरात", "तमिलनाडु"],
  answer_en: "Karnataka",
  answer_hi: "कर्नाटक",
  attempted: false,
  selected: ""
},
{
  num:15,
  question_en: "Who won the Australian Open 2024 Men's Singles?",
  question_hi: "ऑस्ट्रेलियन ओपन 2024 पुरुष एकल किसने जीता?",
  options_en: ["Jannik Sinner", "Novak Djokovic", "Carlos Alcaraz", "Rafael Nadal"],
  options_hi: ["जानिक सिनर", "नोवाक जोकोविच", "कार्लोस अल्काराज़", "राफेल नडाल"],
  answer_en: "Jannik Sinner",
  answer_hi: "जानिक सिनर",
  attempted: false,
  selected: ""
},

{
  num:16,
  question_en: "Which Indian mission aims to clean river Ganga?",
  question_hi: "गंगा नदी की सफाई से संबंधित मिशन कौन-सा है?",
  options_en: ["Namami Gange", "Jal Jeevan Mission", "AMRUT", "Swachh Bharat"],
  options_hi: ["नमामि गंगे", "जल जीवन मिशन", "अमृत", "स्वच्छ भारत"],
  answer_en: "Namami Gange",
  answer_hi: "नमामि गंगे",
  attempted: false,
  selected: ""
},
{
  num:17,
  question_en: "Who is the current Cabinet Secretary of India?",
  question_hi: "भारत के वर्तमान कैबिनेट सचिव कौन हैं?",
  options_en: ["Rajiv Gauba", "T. V. Somanathan", "Ajay Seth", "Anil Kumar"],
  options_hi: ["राजीव गौबा", "टी. वी. सोमनाथन", "अजय सेठ", "अनिल कुमार"],
  answer_en: "Rajiv Gauba",
  answer_hi: "राजीव गौबा",
  attempted: false,
  selected: ""
},
{
  num:18,
  question_en: "Which country will host the Olympics 2028?",
  question_hi: "ओलंपिक 2028 की मेज़बानी कौन-सा देश करेगा?",
  options_en: ["USA", "France", "Japan", "Australia"],
  options_hi: ["अमेरिका", "फ्रांस", "जापान", "ऑस्ट्रेलिया"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num:19,
  question_en: "Which Indian city hosted the Smart India Hackathon?",
  question_hi: "स्मार्ट इंडिया हैकाथॉन की मेज़बानी किस शहर ने की?",
  options_en: ["Multiple Cities", "Delhi", "Bengaluru", "Pune"],
  options_hi: ["कई शहर", "दिल्ली", "बेंगलुरु", "पुणे"],
  answer_en: "Multiple Cities",
  answer_hi: "कई शहर",
  attempted: false,
  selected: ""
},
{
  num:20,
  question_en: "Which sport is related to Uber Cup?",
  question_hi: "उबर कप किस खेल से संबंधित है?",
  options_en: ["Badminton", "Tennis", "Cricket", "Hockey"],
  options_hi: ["बैडमिंटन", "टेनिस", "क्रिकेट", "हॉकी"],
  answer_en: "Badminton",
  answer_hi: "बैडमिंटन",
  attempted: false,
  selected: ""
},

{
  num:21,
  question_en: "Which Indian scheme promotes skill development?",
  question_hi: "कौशल विकास को बढ़ावा देने वाली योजना कौन-सी है?",
  options_en: ["Skill India", "Make in India", "Startup India", "Digital India"],
  options_hi: ["स्किल इंडिया", "मेक इन इंडिया", "स्टार्टअप इंडिया", "डिजिटल इंडिया"],
  answer_en: "Skill India",
  answer_hi: "स्किल इंडिया",
  attempted: false,
  selected: ""
},
{
  num:22,
  question_en: "Who is the Director General of WHO?",
  question_hi: "WHO के महानिदेशक कौन हैं?",
  options_en: ["Tedros Adhanom", "Antonio Guterres", "Kristalina Georgieva", "Ban Ki-moon"],
  options_hi: ["टेड्रोस अधानोम", "एंटोनियो गुटेरेस", "क्रिस्टालिना जॉर्जीवा", "बान की मून"],
  answer_en: "Tedros Adhanom",
  answer_hi: "टेड्रोस अधानोम",
  attempted: false,
  selected: ""
},
{
  num:23,
  question_en: "Which Indian state launched Mukhyamantri Ladli Yojana?",
  question_hi: "मुख्यमंत्री लाड़ली योजना किस राज्य में शुरू हुई?",
  options_en: ["Madhya Pradesh", "Haryana", "Rajasthan", "Bihar"],
  options_hi: ["मध्य प्रदेश", "हरियाणा", "राजस्थान", "बिहार"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},
{
  num:24,
  question_en: "Which country became the newest BRICS member in 2024?",
  question_hi: "2024 में BRICS का नया सदस्य कौन-सा देश बना?",
  options_en: ["Saudi Arabia", "Argentina", "Mexico", "Turkey"],
  options_hi: ["सऊदी अरब", "अर्जेंटीना", "मेक्सिको", "तुर्की"],
  answer_en: "Saudi Arabia",
  answer_hi: "सऊदी अरब",
  attempted: false,
  selected: ""
},
{
  num:25,
  question_en: "Who won the Men's Hockey Asia Cup 2022?",
  question_hi: "पुरुष हॉकी एशिया कप 2022 किसने जीता?",
  options_en: ["India", "Pakistan", "Japan", "South Korea"],
  options_hi: ["भारत", "पाकिस्तान", "जापान", "दक्षिण कोरिया"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},

{
  num:26,
  question_en: "Which Indian scheme supports farmers with income aid?",
  question_hi: "किसानों को आय सहायता देने वाली योजना कौन-सी है?",
  options_en: ["PM-KISAN", "PMFBY", "Soil Health Card", "e-NAM"],
  options_hi: ["पीएम-किसान", "पीएमएफबीवाई", "मृदा स्वास्थ्य कार्ड", "ई-नाम"],
  answer_en: "PM-KISAN",
  answer_hi: "पीएम-किसान",
  attempted: false,
  selected: ""
},
{
  num:27,
  question_en: "Who is the Chief Minister of Rajasthan?",
  question_hi: "राजस्थान के मुख्यमंत्री कौन हैं?",
  options_en: ["Bhajan Lal Sharma", "Ashok Gehlot", "Sachin Pilot", "Vasundhara Raje"],
  options_hi: ["भजन लाल शर्मा", "अशोक गहलोत", "सचिन पायलट", "वसुंधरा राजे"],
  answer_en: "Bhajan Lal Sharma",
  answer_hi: "भजन लाल शर्मा",
  attempted: false,
  selected: ""
},
{
  num:28,
  question_en: "Which country will host the Cricket World Cup 2027?",
  question_hi: "क्रिकेट विश्व कप 2027 की मेज़बानी कौन करेगा?",
  options_en: ["South Africa", "India", "England", "Australia"],
  options_hi: ["दक्षिण अफ्रीका", "भारत", "इंग्लैंड", "ऑस्ट्रेलिया"],
  answer_en: "South Africa",
  answer_hi: "दक्षिण अफ्रीका",
  attempted: false,
  selected: ""
},
{
  num:29,
  question_en: "Which Indian organization launches PSLV rockets?",
  question_hi: "PSLV रॉकेट कौन-सा भारतीय संगठन लॉन्च करता है?",
  options_en: ["ISRO", "DRDO", "HAL", "BARC"],
  options_hi: ["ISRO", "DRDO", "HAL", "BARC"],
  answer_en: "ISRO",
  answer_hi: "ISRO",
  attempted: false,
  selected: ""
},
{
  num:30,
  question_en: "Which sport is associated with Hopman Cup?",
  question_hi: "हॉपमैन कप किस खेल से संबंधित है?",
  options_en: ["Tennis", "Badminton", "Cricket", "Hockey"],
  options_hi: ["टेनिस", "बैडमिंटन", "क्रिकेट", "हॉकी"],
  answer_en: "Tennis",
  answer_hi: "टेनिस",
  attempted: false,
  selected: ""
},

{
  num:31,
  question_en: "Which Indian scheme aims at rural housing?",
  question_hi: "ग्रामीण आवास से संबंधित योजना कौन-सी है?",
  options_en: ["PM Awas Yojana (Gramin)", "AMRUT", "Smart Cities", "Swachh Bharat"],
  options_hi: ["पीएम आवास योजना (ग्रामीण)", "अमृत", "स्मार्ट सिटी", "स्वच्छ भारत"],
  answer_en: "PM Awas Yojana (Gramin)",
  answer_hi: "पीएम आवास योजना (ग्रामीण)",
  attempted: false,
  selected: ""
},
{
  num:32,
  question_en: "Who is the President of Russia?",
  question_hi: "रूस के राष्ट्रपति कौन हैं?",
  options_en: ["Vladimir Putin", "Dmitry Medvedev", "Alexei Navalny", "Sergey Lavrov"],
  options_hi: ["व्लादिमीर पुतिन", "दिमित्री मेदवेदेव", "एलेक्सी नवलनी", "सर्गेई लावरोव"],
  answer_en: "Vladimir Putin",
  answer_hi: "व्लादिमीर पुतिन",
  attempted: false,
  selected: ""
},
{
  num:33,
  question_en: "Which Indian mission is related to human spaceflight?",
  question_hi: "मानव अंतरिक्ष उड़ान से संबंधित भारतीय मिशन कौन-सा है?",
  options_en: ["Gaganyaan", "Aditya-L1", "Mangalyaan", "Chandrayaan-1"],
  options_hi: ["गगनयान", "आदित्य-L1", "मंगलयान", "चंद्रयान-1"],
  answer_en: "Gaganyaan",
  answer_hi: "गगनयान",
  attempted: false,
  selected: ""
},
{
  num:34,
  question_en: "Which country hosted COP28 Climate Summit?",
  question_hi: "COP28 जलवायु सम्मेलन की मेज़बानी किस देश ने की?",
  options_en: ["UAE", "India", "UK", "France"],
  options_hi: ["UAE", "भारत", "यूके", "फ्रांस"],
  answer_en: "UAE",
  answer_hi: "UAE",
  attempted: false,
  selected: ""
},
{
  num:35,
  question_en: "Who won the Women's Asian Hockey Champions Trophy 2023?",
  question_hi: "महिला एशियन हॉकी चैंपियंस ट्रॉफी 2023 किसने जीती?",
  options_en: ["India", "China", "Japan", "South Korea"],
  options_hi: ["भारत", "चीन", "जापान", "दक्षिण कोरिया"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},

{
  num:36,
  question_en: "Which Indian scheme is related to urban development?",
  question_hi: "शहरी विकास से संबंधित योजना कौन-सी है?",
  options_en: ["Smart Cities Mission", "PM-KISAN", "Ujjwala", "PMFBY"],
  options_hi: ["स्मार्ट सिटी मिशन", "पीएम-किसान", "उज्ज्वला", "पीएमएफबीवाई"],
  answer_en: "Smart Cities Mission",
  answer_hi: "स्मार्ट सिटी मिशन",
  attempted: false,
  selected: ""
},
{
  num:37,
  question_en: "Who is the Prime Minister of UK?",
  question_hi: "यूनाइटेड किंगडम के प्रधानमंत्री कौन हैं?",
  options_en: ["Rishi Sunak", "Boris Johnson", "Theresa May", "Keir Starmer"],
  options_hi: ["ऋषि सुनक", "बोरिस जॉनसन", "थेरेसा मे", "कीयर स्टारमर"],
  answer_en: "Rishi Sunak",
  answer_hi: "ऋषि सुनक",
  attempted: false,
  selected: ""
},
{
  num:38,
  question_en: "Which Indian state topped medal tally in National Games 2023?",
  question_hi: "नेशनल गेम्स 2023 में कौन-सा राज्य पदक तालिका में शीर्ष पर रहा?",
  options_en: ["Services", "Maharashtra", "Haryana", "Gujarat"],
  options_hi: ["सर्विसेज", "महाराष्ट्र", "हरियाणा", "गुजरात"],
  answer_en: "Services",
  answer_hi: "सर्विसेज",
  attempted: false,
  selected: ""
},
{
  num:39,
  question_en: "Which sportsperson is known as Flying Sikh?",
  question_hi: "फ्लाइंग सिख के नाम से कौन प्रसिद्ध हैं?",
  options_en: ["Milkha Singh", "Neeraj Chopra", "P. T. Usha", "Abhinav Bindra"],
  options_hi: ["मिल्खा सिंह", "नीरज चोपड़ा", "पी. टी. उषा", "अभिनव बिंद्रा"],
  answer_en: "Milkha Singh",
  answer_hi: "मिल्खा सिंह",
  attempted: false,
  selected: ""
},
{
  num:40,
  question_en: "Which Indian city hosted World Book Fair 2024?",
  question_hi: "विश्व पुस्तक मेला 2024 की मेज़बानी किस शहर ने की?",
  options_en: ["New Delhi", "Kolkata", "Mumbai", "Chennai"],
  options_hi: ["नई दिल्ली", "कोलकाता", "मुंबई", "चेन्नई"],
  answer_en: "New Delhi",
  answer_hi: "नई दिल्ली",
  attempted: false,
  selected: ""
},

{
  num:41,
  question_en: "Which scheme is related to crop insurance?",
  question_hi: "फसल बीमा से संबंधित योजना कौन-सी है?",
  options_en: ["PMFBY", "PM-KISAN", "Soil Health Card", "e-NAM"],
  options_hi: ["पीएमएफबीवाई", "पीएम-किसान", "मृदा स्वास्थ्य कार्ड", "ई-नाम"],
  answer_en: "PMFBY",
  answer_hi: "पीएमएफबीवाई",
  attempted: false,
  selected: ""
},
{
  num:42,
  question_en: "Who is the President of France?",
  question_hi: "फ्रांस के राष्ट्रपति कौन हैं?",
  options_en: ["Emmanuel Macron", "Nicolas Sarkozy", "Francois Hollande", "Jacques Chirac"],
  options_hi: ["इमैनुएल मैक्रों", "निकोलस सरकोज़ी", "फ्रांस्वा ओलांद", "जैक्स शिराक"],
  answer_en: "Emmanuel Macron",
  answer_hi: "इमैनुएल मैक्रों",
  attempted: false,
  selected: ""
},
{
  num:43,
  question_en: "Which Indian scheme supports digital literacy?",
  question_hi: "डिजिटल साक्षरता को बढ़ावा देने वाली योजना कौन-सी है?",
  options_en: ["PMGDISHA", "Startup India", "Skill India", "Make in India"],
  options_hi: ["पीएमजीडीशा", "स्टार्टअप इंडिया", "स्किल इंडिया", "मेक इन इंडिया"],
  answer_en: "PMGDISHA",
  answer_hi: "पीएमजीडीशा",
  attempted: false,
  selected: ""
},
{
  num:44,
  question_en: "Which country won the ICC T20 World Cup 2024?",
  question_hi: "ICC T20 विश्व कप 2024 किस देश ने जीता?",
  options_en: ["India", "Australia", "England", "West Indies"],
  options_hi: ["भारत", "ऑस्ट्रेलिया", "इंग्लैंड", "वेस्ट इंडीज"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:45,
  question_en: "Which Indian state launched Mukhyamantri Bal Ashirwad Yojana?",
  question_hi: "मुख्यमंत्री बाल आशीर्वाद योजना किस राज्य ने शुरू की?",
  options_en: ["Madhya Pradesh", "Chhattisgarh", "Jharkhand", "Odisha"],
  options_hi: ["मध्य प्रदेश", "छत्तीसगढ़", "झारखंड", "ओडिशा"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},

{
  num:46,
  question_en: "Which Indian scheme is related to renewable energy?",
  question_hi: "नवीकरणीय ऊर्जा से संबंधित योजना कौन-सी है?",
  options_en: ["National Solar Mission", "Ujjwala", "PM Awas", "AMRUT"],
  options_hi: ["राष्ट्रीय सौर मिशन", "उज्ज्वला", "पीएम आवास", "अमृत"],
  answer_en: "National Solar Mission",
  answer_hi: "राष्ट्रीय सौर मिशन",
  attempted: false,
  selected: ""
},
{
  num:47,
  question_en: "Who is the President of China?",
  question_hi: "चीन के राष्ट्रपति कौन हैं?",
  options_en: ["Xi Jinping", "Hu Jintao", "Li Keqiang", "Deng Xiaoping"],
  options_hi: ["शी जिनपिंग", "हू जिंताओ", "ली केकियांग", "देंग शियाओपिंग"],
  answer_en: "Xi Jinping",
  answer_hi: "शी जिनपिंग",
  attempted: false,
  selected: ""
},
{
  num:48,
  question_en: "Which Indian sportsperson won the Laureus Award 2024?",
  question_hi: "लॉरियस अवॉर्ड 2024 जीतने वाले भारतीय खिलाड़ी कौन हैं?",
  options_en: ["Neeraj Chopra", "PV Sindhu", "Rohit Sharma", "Virat Kohli"],
  options_hi: ["नीरज चोपड़ा", "पी. वी. सिंधु", "रोहित शर्मा", "विराट कोहली"],
  answer_en: "Neeraj Chopra",
  answer_hi: "नीरज चोपड़ा",
  attempted: false,
  selected: ""
},
{
  num:49,
  question_en: "Which Indian city hosted International Yoga Day main event 2024?",
  question_hi: "अंतरराष्ट्रीय योग दिवस 2024 का मुख्य कार्यक्रम किस शहर में हुआ?",
  options_en: ["Srinagar", "Varanasi", "New Delhi", "Rishikesh"],
  options_hi: ["श्रीनगर", "वाराणसी", "नई दिल्ली", "ऋषिकेश"],
  answer_en: "Srinagar",
  answer_hi: "श्रीनगर",
  attempted: false,
  selected: ""
},
{
  num:50,
  question_en: "Which international organization releases World Happiness Report?",
  question_hi: "वर्ल्ड हैप्पीनेस रिपोर्ट कौन-सा संगठन जारी करता है?",
  options_en: ["UN", "WHO", "IMF", "World Bank"],
  options_hi: ["संयुक्त राष्ट्र", "WHO", "IMF", "विश्व बैंक"],
  answer_en: "UN",
  answer_hi: "संयुक्त राष्ट्र",
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