const questions = [
{
  num: 1,
  question_en: "Who is the current President of India?",
  question_hi: "वर्तमान भारत के राष्ट्रपति कौन हैं?",
  options_en: ["Droupadi Murmu", "Ram Nath Kovind", "Narendra Modi", "Amit Shah"],
  options_hi: ["द्रौपदी मुर्मू", "रामनाथ कोविंद", "नरेंद्र मोदी", "अमित शाह"],
  answer_en: "Droupadi Murmu",
  answer_hi: "द्रौपदी मुर्मू",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which country hosted the G20 Summit 2023?",
  question_hi: "G20 शिखर सम्मेलन 2023 की मेज़बानी किस देश ने की?",
  options_en: ["India", "USA", "Japan", "France"],
  options_hi: ["भारत", "अमेरिका", "जापान", "फ्रांस"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which scheme provides free food grains to poor families?",
  question_hi: "गरीब परिवारों को मुफ्त अनाज देने की योजना कौन-सी है?",
  options_en: ["PM Garib Kalyan Anna Yojana", "PM Awas Yojana", "Ayushman Bharat", "Ujjwala Yojana"],
  options_hi: ["पीएम गरीब कल्याण अन्न योजना", "पीएम आवास योजना", "आयुष्मान भारत", "उज्ज्वला योजना"],
  answer_en: "PM Garib Kalyan Anna Yojana",
  answer_hi: "पीएम गरीब कल्याण अन्न योजना",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Who presented the Union Budget 2024?",
  question_hi: "केंद्रीय बजट 2024 किसने प्रस्तुत किया?",
  options_en: ["Nirmala Sitharaman", "Piyush Goyal", "Rajnath Singh", "Amit Shah"],
  options_hi: ["निर्मला सीतारमण", "पीयूष गोयल", "राजनाथ सिंह", "अमित शाह"],
  answer_en: "Nirmala Sitharaman",
  answer_hi: "निर्मला सीतारमण",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Who is the current Chief Justice of India (2024)?",
  question_hi: "वर्तमान भारत के मुख्य न्यायाधीश (2024) कौन हैं?",
  options_en: ["DY Chandrachud", "UU Lalit", "NV Ramana", "Ranjan Gogoi"],
  options_hi: ["डी वाई चंद्रचूड़", "यू यू ललित", "एन वी रमना", "रंजन गोगोई"],
  answer_en: "DY Chandrachud",
  answer_hi: "डी वाई चंद्रचूड़",
  attempted: false,
  selected: ""
},

{
  num: 6,
  question_en: "Which country launched the mission 'Chandrayaan-3'?",
  question_hi: "चंद्रयान-3 मिशन किस देश ने लॉन्च किया?",
  options_en: ["India", "China", "USA", "Russia"],
  options_hi: ["भारत", "चीन", "अमेरिका", "रूस"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which Indian city hosted the ICC Cricket World Cup 2023 final?",
  question_hi: "ICC क्रिकेट विश्व कप 2023 का फाइनल किस शहर में हुआ?",
  options_en: ["Ahmedabad", "Mumbai", "Delhi", "Kolkata"],
  options_hi: ["अहमदाबाद", "मुंबई", "दिल्ली", "कोलकाता"],
  answer_en: "Ahmedabad",
  answer_hi: "अहमदाबाद",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Who won the ICC Cricket World Cup 2023?",
  question_hi: "ICC क्रिकेट विश्व कप 2023 किसने जीता?",
  options_en: ["Australia", "India", "England", "New Zealand"],
  options_hi: ["ऑस्ट्रेलिया", "भारत", "इंग्लैंड", "न्यूजीलैंड"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which scheme is related to free LPG connections?",
  question_hi: "मुफ्त LPG कनेक्शन किस योजना से संबंधित है?",
  options_en: ["Ujjwala Yojana", "Ayushman Bharat", "PM Kisan", "Saubhagya Yojana"],
  options_hi: ["उज्ज्वला योजना", "आयुष्मान भारत", "पीएम किसान", "सौभाग्य योजना"],
  answer_en: "Ujjwala Yojana",
  answer_hi: "उज्ज्वला योजना",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Who is the current Prime Minister of the United Kingdom?",
  question_hi: "वर्तमान यूनाइटेड किंगडम के प्रधानमंत्री कौन हैं?",
  options_en: ["Rishi Sunak", "Boris Johnson", "Keir Starmer", "Theresa May"],
  options_hi: ["ऋषि सुनक", "बोरिस जॉनसन", "कीर स्टारमर", "थेरेसा मे"],
  answer_en: "Rishi Sunak",
  answer_hi: "ऋषि सुनक",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "Which scheme provides ₹6000 annually to farmers?",
  question_hi: "किस योजना के तहत किसानों को ₹6000 सालाना मिलते हैं?",
  options_en: ["PM Kisan Samman Nidhi", "PM Fasal Bima", "MGNREGA", "PM Awas Yojana"],
  options_hi: ["पीएम किसान सम्मान निधि", "पीएम फसल बीमा", "मनरेगा", "पीएम आवास योजना"],
  answer_en: "PM Kisan Samman Nidhi",
  answer_hi: "पीएम किसान सम्मान निधि",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which country became the newest member of BRICS in 2024?",
  question_hi: "2024 में BRICS का नया सदस्य कौन-सा देश बना?",
  options_en: ["Saudi Arabia", "Japan", "Germany", "Canada"],
  options_hi: ["सऊदी अरब", "जापान", "जर्मनी", "कनाडा"],
  answer_en: "Saudi Arabia",
  answer_hi: "सऊदी अरब",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Who is the current Chairman of ISRO?",
  question_hi: "वर्तमान ISRO के अध्यक्ष कौन हैं?",
  options_en: ["S Somanath", "K Sivan", "A S Kiran Kumar", "G Madhavan Nair"],
  options_hi: ["एस सोमनाथ", "के सिवन", "ए एस किरण कुमार", "जी माधवन नायर"],
  answer_en: "S Somanath",
  answer_hi: "एस सोमनाथ",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which Indian state launched the 'Ladli Behna Yojana'?",
  question_hi: "लाड़ली बहना योजना किस राज्य ने शुरू की?",
  options_en: ["Madhya Pradesh", "Uttar Pradesh", "Rajasthan", "Bihar"],
  options_hi: ["मध्य प्रदेश", "उत्तर प्रदेश", "राजस्थान", "बिहार"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Who won the Men's Singles title at Australian Open 2024?",
  question_hi: "ऑस्ट्रेलियन ओपन 2024 पुरुष एकल खिताब किसने जीता?",
  options_en: ["Jannik Sinner", "Novak Djokovic", "Carlos Alcaraz", "Rafael Nadal"],
  options_hi: ["जानिक सिनर", "नोवाक जोकोविच", "कार्लोस अल्काराज़", "राफेल नडाल"],
  answer_en: "Jannik Sinner",
  answer_hi: "जानिक सिनर",
  attempted: false,
  selected: ""
},

{
  num: 16,
  question_en: "Which ministry launched the 'PM Vishwakarma Yojana'?",
  question_hi: "पीएम विश्वकर्मा योजना किस मंत्रालय ने शुरू की?",
  options_en: ["Ministry of MSME", "Finance Ministry", "Labour Ministry", "Rural Development"],
  options_hi: ["एमएसएमई मंत्रालय", "वित्त मंत्रालय", "श्रम मंत्रालय", "ग्रामीण विकास"],
  answer_en: "Ministry of MSME",
  answer_hi: "एमएसएमई मंत्रालय",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Who is the current Vice-President of India?",
  question_hi: "वर्तमान भारत के उपराष्ट्रपति कौन हैं?",
  options_en: ["Jagdeep Dhankhar", "Venkaiah Naidu", "Amit Shah", "Om Birla"],
  options_hi: ["जगदीप धनखड़", "वेंकैया नायडू", "अमित शाह", "ओम बिरला"],
  answer_en: "Jagdeep Dhankhar",
  answer_hi: "जगदीप धनखड़",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which country won the AFC Asian Cup 2023?",
  question_hi: "AFC एशियन कप 2023 किस देश ने जीता?",
  options_en: ["Qatar", "Japan", "South Korea", "Iran"],
  options_hi: ["कतर", "जापान", "दक्षिण कोरिया", "ईरान"],
  answer_en: "Qatar",
  answer_hi: "कतर",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which scheme is related to health insurance of ₹5 lakh?",
  question_hi: "₹5 लाख स्वास्थ्य बीमा किस योजना से जुड़ा है?",
  options_en: ["Ayushman Bharat", "PM Jan Dhan", "PM Suraksha Bima", "Atal Pension"],
  options_hi: ["आयुष्मान भारत", "पीएम जन धन", "पीएम सुरक्षा बीमा", "अटल पेंशन"],
  answer_en: "Ayushman Bharat",
  answer_hi: "आयुष्मान भारत",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Who is the current CEO of NITI Aayog?",
  question_hi: "नीति आयोग के वर्तमान CEO कौन हैं?",
  options_en: ["B V R Subrahmanyam", "Amitabh Kant", "Ramesh Chand", "Arvind Panagariya"],
  options_hi: ["बी वी आर सुब्रह्मण्यम", "अमिताभ कांत", "रमेश चंद", "अरविंद पनगढ़िया"],
  answer_en: "B V R Subrahmanyam",
  answer_hi: "बी वी आर सुब्रह्मण्यम",
  attempted: false,
  selected: ""
},

{
  num: 21,
  question_en: "Which country launched the 'Artemis Mission'?",
  question_hi: "आर्टेमिस मिशन किस देश ने लॉन्च किया?",
  options_en: ["USA", "India", "China", "Russia"],
  options_hi: ["अमेरिका", "भारत", "चीन", "रूस"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Who is the current Chief Election Commissioner of India?",
  question_hi: "भारत के वर्तमान मुख्य चुनाव आयुक्त कौन हैं?",
  options_en: ["Rajiv Kumar", "Sunil Arora", "Sushil Chandra", "Nasim Zaidi"],
  options_hi: ["राजीव कुमार", "सुनील अरोड़ा", "सुशील चंद्रा", "नसीम जैदी"],
  answer_en: "Rajiv Kumar",
  answer_hi: "राजीव कुमार",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which Indian athlete won gold in Men's Javelin at World Championships 2023?",
  question_hi: "विश्व चैंपियनशिप 2023 में पुरुष भाला फेंक में स्वर्ण किसने जीता?",
  options_en: ["Neeraj Chopra", "Arshad Nadeem", "Jakub Vadlejch", "Anderson Peters"],
  options_hi: ["नीरज चोपड़ा", "अरशद नदीम", "जैकब वाडलेज", "एंडरसन पीटर्स"],
  answer_en: "Neeraj Chopra",
  answer_hi: "नीरज चोपड़ा",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which budget focuses on 'Amrit Kaal' vision?",
  question_hi: "'अमृत काल' दृष्टि पर कौन-सा बजट केंद्रित है?",
  options_en: ["Union Budget 2023-24", "Budget 2020-21", "Budget 2019-20", "Budget 2015-16"],
  options_hi: ["केंद्रीय बजट 2023-24", "बजट 2020-21", "बजट 2019-20", "बजट 2015-16"],
  answer_en: "Union Budget 2023-24",
  answer_hi: "केंद्रीय बजट 2023-24",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Who became the first Indian woman to win Olympic medal in Badminton?",
  question_hi: "बैडमिंटन में ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन हैं?",
  options_en: ["PV Sindhu", "Saina Nehwal", "Ashwini Ponnappa", "Jwala Gutta"],
  options_hi: ["पी वी सिंधु", "साइना नेहवाल", "अश्विनी पोनप्पा", "ज्वाला गुट्टा"],
  answer_en: "Saina Nehwal",
  answer_hi: "साइना नेहवाल",
  attempted: false,
  selected: ""
},

{
  num: 26,
  question_en: "Which international organization releases the World Economic Outlook report?",
  question_hi: "विश्व आर्थिक परिदृश्य रिपोर्ट कौन-सा संगठन जारी करता है?",
  options_en: ["IMF", "World Bank", "WHO", "UNESCO"],
  options_hi: ["आईएमएफ", "विश्व बैंक", "डब्ल्यूएचओ", "यूनेस्को"],
  answer_en: "IMF",
  answer_hi: "आईएमएफ",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Who is the current Defence Minister of India?",
  question_hi: "वर्तमान भारत के रक्षा मंत्री कौन हैं?",
  options_en: ["Rajnath Singh", "Amit Shah", "Nitin Gadkari", "Piyush Goyal"],
  options_hi: ["राजनाथ सिंह", "अमित शाह", "नितिन गडकरी", "पीयूष गोयल"],
  answer_en: "Rajnath Singh",
  answer_hi: "राजनाथ सिंह",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which country will host the Summer Olympics 2028?",
  question_hi: "ग्रीष्मकालीन ओलंपिक 2028 की मेज़बानी कौन-सा देश करेगा?",
  options_en: ["USA", "France", "Japan", "Australia"],
  options_hi: ["अमेरिका", "फ्रांस", "जापान", "ऑस्ट्रेलिया"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which scheme aims to provide tap water to every household?",
  question_hi: "हर घर नल से जल देने का लक्ष्य किस योजना का है?",
  options_en: ["Jal Jeevan Mission", "Swachh Bharat Mission", "AMRUT", "Namami Gange"],
  options_hi: ["जल जीवन मिशन", "स्वच्छ भारत मिशन", "अमृत", "नमामि गंगे"],
  answer_en: "Jal Jeevan Mission",
  answer_hi: "जल जीवन मिशन",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Who is the current Speaker of Lok Sabha?",
  question_hi: "वर्तमान लोकसभा अध्यक्ष कौन हैं?",
  options_en: ["Om Birla", "Sumitra Mahajan", "Meira Kumar", "Ananth Kumar"],
  options_hi: ["ओम बिरला", "सुमित्रा महाजन", "मीरा कुमार", "अनंत कुमार"],
  answer_en: "Om Birla",
  answer_hi: "ओम बिरला",
  attempted: false,
  selected: ""
},

{
  num: 31,
  question_en: "Which Indian city became the first to have a river cruise service?",
  question_hi: "नदी क्रूज़ सेवा शुरू करने वाला पहला भारतीय शहर कौन-सा है?",
  options_en: ["Varanasi", "Patna", "Kolkata", "Guwahati"],
  options_hi: ["वाराणसी", "पटना", "कोलकाता", "गुवाहाटी"],
  answer_en: "Varanasi",
  answer_hi: "वाराणसी",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Who won the Women's Singles title at French Open 2023?",
  question_hi: "फ्रेंच ओपन 2023 महिला एकल खिताब किसने जीता?",
  options_en: ["Iga Swiatek", "Aryna Sabalenka", "Coco Gauff", "Elena Rybakina"],
  options_hi: ["इगा स्वियाटेक", "एरिना सबालेंका", "कोको गॉफ", "एलेना रिबाकिना"],
  answer_en: "Iga Swiatek",
  answer_hi: "इगा स्वियाटेक",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which scheme is related to digital payments?",
  question_hi: "डिजिटल भुगतान से संबंधित योजना कौन-सी है?",
  options_en: ["BHIM UPI", "PM Kisan", "PM Awas", "PMGKAY"],
  options_hi: ["भीम यूपीआई", "पीएम किसान", "पीएम आवास", "पीएमजीकेएवाई"],
  answer_en: "BHIM UPI",
  answer_hi: "भीम यूपीआई",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Who is the current Finance Secretary of India?",
  question_hi: "भारत के वर्तमान वित्त सचिव कौन हैं?",
  options_en: ["T V Somanathan", "Ajay Seth", "Subhash Chandra Garg", "Arvind Mayaram"],
  options_hi: ["टी वी सोमनाथन", "अजय सेठ", "सुभाष चंद्र गर्ग", "अरविंद मायाराम"],
  answer_en: "T V Somanathan",
  answer_hi: "टी वी सोमनाथन",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which country won the FIFA Women's World Cup 2023?",
  question_hi: "FIFA महिला विश्व कप 2023 किस देश ने जीता?",
  options_en: ["Spain", "England", "USA", "Brazil"],
  options_hi: ["स्पेन", "इंग्लैंड", "अमेरिका", "ब्राज़ील"],
  answer_en: "Spain",
  answer_hi: "स्पेन",
  attempted: false,
  selected: ""
},

{
  num: 36,
  question_en: "Which ministry launched the 'Startup India' initiative?",
  question_hi: "स्टार्टअप इंडिया पहल किस मंत्रालय ने शुरू की?",
  options_en: ["Commerce and Industry", "Finance", "Skill Development", "IT Ministry"],
  options_hi: ["वाणिज्य और उद्योग", "वित्त", "कौशल विकास", "आईटी मंत्रालय"],
  answer_en: "Commerce and Industry",
  answer_hi: "वाणिज्य और उद्योग",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Who is the current UN Secretary-General?",
  question_hi: "वर्तमान संयुक्त राष्ट्र महासचिव कौन हैं?",
  options_en: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan", "Boutros Boutros-Ghali"],
  options_hi: ["एंटोनियो गुटेरेस", "बान की मून", "कोफी अन्नान", "बूत्रोस बूत्रोस-घाली"],
  answer_en: "Antonio Guterres",
  answer_hi: "एंटोनियो गुटेरेस",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which Indian scheme focuses on cleanliness?",
  question_hi: "स्वच्छता पर केंद्रित भारतीय योजना कौन-सी है?",
  options_en: ["Swachh Bharat Mission", "Jal Jeevan Mission", "AMRUT", "Ujjwala"],
  options_hi: ["स्वच्छ भारत मिशन", "जल जीवन मिशन", "अमृत", "उज्ज्वला"],
  answer_en: "Swachh Bharat Mission",
  answer_hi: "स्वच्छ भारत मिशन",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Who won the Ballon d'Or 2023?",
  question_hi: "बैलन डी'ओर 2023 किसने जीता?",
  options_en: ["Lionel Messi", "Erling Haaland", "Cristiano Ronaldo", "Mbappe"],
  options_hi: ["लियोनेल मेसी", "एर्लिंग हालैंड", "क्रिस्टियानो रोनाल्डो", "एम्बाप्पे"],
  answer_en: "Lionel Messi",
  answer_hi: "लियोनेल मेसी",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which scheme provides insurance cover of ₹2 lakh?",
  question_hi: "₹2 लाख बीमा कवर किस योजना में मिलता है?",
  options_en: ["PM Jeevan Jyoti Bima Yojana", "PM Kisan", "Atal Pension", "Ayushman Bharat"],
  options_hi: ["पीएम जीवन ज्योति बीमा योजना", "पीएम किसान", "अटल पेंशन", "आयुष्मान भारत"],
  answer_en: "PM Jeevan Jyoti Bima Yojana",
  answer_hi: "पीएम जीवन ज्योति बीमा योजना",
  attempted: false,
  selected: ""
},

{
  num: 41,
  question_en: "Which country hosted COP28 Climate Summit?",
  question_hi: "COP28 जलवायु शिखर सम्मेलन की मेज़बानी किस देश ने की?",
  options_en: ["UAE", "India", "UK", "USA"],
  options_hi: ["संयुक्त अरब अमीरात", "भारत", "यूके", "अमेरिका"],
  answer_en: "UAE",
  answer_hi: "संयुक्त अरब अमीरात",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Who is the current Education Minister of India?",
  question_hi: "वर्तमान भारत के शिक्षा मंत्री कौन हैं?",
  options_en: ["Dharmendra Pradhan", "Smriti Irani", "Anurag Thakur", "Rajeev Chandrasekhar"],
  options_hi: ["धर्मेंद्र प्रधान", "स्मृति ईरानी", "अनुराग ठाकुर", "राजीव चंद्रशेखर"],
  answer_en: "Dharmendra Pradhan",
  answer_hi: "धर्मेंद्र प्रधान",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which Indian player won the ICC Men's Cricketer of the Year 2023?",
  question_hi: "ICC पुरुष क्रिकेटर ऑफ द ईयर 2023 किस भारतीय खिलाड़ी को मिला?",
  options_en: ["Virat Kohli", "Rohit Sharma", "Shubman Gill", "Jasprit Bumrah"],
  options_hi: ["विराट कोहली", "रोहित शर्मा", "शुभमन गिल", "जसप्रीत बुमराह"],
  answer_en: "Virat Kohli",
  answer_hi: "विराट कोहली",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which scheme is related to pension for elderly people?",
  question_hi: "वृद्धों की पेंशन से संबंधित योजना कौन-सी है?",
  options_en: ["Atal Pension Yojana", "PM Kisan", "Ujjwala Yojana", "PMFBY"],
  options_hi: ["अटल पेंशन योजना", "पीएम किसान", "उज्ज्वला योजना", "पीएमएफबीवाई"],
  answer_en: "Atal Pension Yojana",
  answer_hi: "अटल पेंशन योजना",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Who is the current RBI Governor?",
  question_hi: "वर्तमान RBI गवर्नर कौन हैं?",
  options_en: ["Shaktikanta Das", "Raghuram Rajan", "Urjit Patel", "Viral Acharya"],
  options_hi: ["शक्तिकांत दास", "रघुराम राजन", "उर्जित पटेल", "वायरल आचार्य"],
  answer_en: "Shaktikanta Das",
  answer_hi: "शक्तिकांत दास",
  attempted: false,
  selected: ""
},

{
  num: 46,
  question_en: "Which Indian city hosted the Global Investors Summit 2023?",
  question_hi: "ग्लोबल इन्वेस्टर्स समिट 2023 किस शहर में हुई?",
  options_en: ["Bhopal", "Lucknow", "Gandhinagar", "Chennai"],
  options_hi: ["भोपाल", "लखनऊ", "गांधीनगर", "चेन्नई"],
  answer_en: "Bhopal",
  answer_hi: "भोपाल",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Who won the Women's World Boxing Championship 2023 gold for India?",
  question_hi: "महिला विश्व मुक्केबाज़ी चैंपियनशिप 2023 में भारत के लिए स्वर्ण किसने जीता?",
  options_en: ["Nikhat Zareen", "Mary Kom", "Lovlina Borgohain", "Simranjit Kaur"],
  options_hi: ["निखत ज़रीन", "मैरी कॉम", "लवलीना बोरगोहेन", "सिमरनजीत कौर"],
  answer_en: "Nikhat Zareen",
  answer_hi: "निखत ज़रीन",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which scheme focuses on skill development?",
  question_hi: "कौशल विकास पर केंद्रित योजना कौन-सी है?",
  options_en: ["PM Kaushal Vikas Yojana", "PM Awas Yojana", "PM Kisan", "Ujjwala Yojana"],
  options_hi: ["पीएम कौशल विकास योजना", "पीएम आवास योजना", "पीएम किसान", "उज्ज्वला योजना"],
  answer_en: "PM Kaushal Vikas Yojana",
  answer_hi: "पीएम कौशल विकास योजना",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Who is the current Home Minister of India?",
  question_hi: "वर्तमान भारत के गृह मंत्री कौन हैं?",
  options_en: ["Amit Shah", "Rajnath Singh", "Nitin Gadkari", "Piyush Goyal"],
  options_hi: ["अमित शाह", "राजनाथ सिंह", "नितिन गडकरी", "पीयूष गोयल"],
  answer_en: "Amit Shah",
  answer_hi: "अमित शाह",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which country won the Thomas Cup 2022?",
  question_hi: "थॉमस कप 2022 किस देश ने जीता?",
  options_en: ["India", "China", "Indonesia", "Japan"],
  options_hi: ["भारत", "चीन", "इंडोनेशिया", "जापान"],
  answer_en: "India",
  answer_hi: "भारत",
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