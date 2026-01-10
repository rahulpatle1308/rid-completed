const questions = [
{
  num: 1,
  question_en: "Who is the President of India?",
  question_hi: "भारत के राष्ट्रपति कौन हैं?",
  options_en: ["Droupadi Murmu", "Ram Nath Kovind", "Narendra Modi", "Amit Shah"],
  options_hi: ["द्रौपदी मुर्मू", "राम नाथ कोविंद", "नरेंद्र मोदी", "अमित शाह"],
  answer_en: "Droupadi Murmu",
  answer_hi: "द्रौपदी मुर्मू",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Who is the Prime Minister of India?",
  question_hi: "भारत के प्रधानमंत्री कौन हैं?",
  options_en: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Nitin Gadkari"],
  options_hi: ["नरेंद्र मोदी", "राहुल गांधी", "अमित शाह", "नितिन गडकरी"],
  answer_en: "Narendra Modi",
  answer_hi: "नरेंद्र मोदी",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which country hosted the G20 Summit 2023?",
  question_hi: "G20 शिखर सम्मेलन 2023 की मेज़बानी किस देश ने की?",
  options_en: ["India", "USA", "China", "Japan"],
  options_hi: ["भारत", "अमेरिका", "चीन", "जापान"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Who is the current Secretary-General of the United Nations?",
  question_hi: "संयुक्त राष्ट्र के वर्तमान महासचिव कौन हैं?",
  options_en: ["Antonio Guterres", "Ban Ki-moon", "Kofi Annan", "Joe Biden"],
  options_hi: ["एंटोनियो गुटेरेस", "बान की मून", "कोफी अन्नान", "जो बाइडन"],
  answer_en: "Antonio Guterres",
  answer_hi: "एंटोनियो गुटेरेस",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which scheme provides free ration to the poor in India?",
  question_hi: "भारत में गरीबों को मुफ्त राशन देने की योजना कौन-सी है?",
  options_en: ["PM Garib Kalyan Anna Yojana", "Ayushman Bharat", "PM Awas Yojana", "Ujjwala Yojana"],
  options_hi: ["पीएम गरीब कल्याण अन्न योजना", "आयुष्मान भारत", "पीएम आवास योजना", "उज्ज्वला योजना"],
  answer_en: "PM Garib Kalyan Anna Yojana",
  answer_hi: "पीएम गरीब कल्याण अन्न योजना",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Which scheme provides health insurance up to 5 lakh?",
  question_hi: "5 लाख तक स्वास्थ्य बीमा देने वाली योजना कौन-सी है?",
  options_en: ["Ayushman Bharat", "Ujjwala Yojana", "PM Awas Yojana", "Jan Dhan Yojana"],
  options_hi: ["आयुष्मान भारत", "उज्ज्वला योजना", "पीएम आवास योजना", "जन धन योजना"],
  answer_en: "Ayushman Bharat",
  answer_hi: "आयुष्मान भारत",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who presents the Union Budget in India?",
  question_hi: "भारत में केंद्रीय बजट कौन प्रस्तुत करता है?",
  options_en: ["Finance Minister", "Prime Minister", "President", "RBI Governor"],
  options_hi: ["वित्त मंत्री", "प्रधानमंत्री", "राष्ट्रपति", "RBI गवर्नर"],
  answer_en: "Finance Minister",
  answer_hi: "वित्त मंत्री",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which ministry launches the PM Awas Yojana?",
  question_hi: "पीएम आवास योजना किस मंत्रालय द्वारा चलाई जाती है?",
  options_en: ["Ministry of Housing", "Ministry of Health", "Ministry of Finance", "Ministry of Education"],
  options_hi: ["आवास मंत्रालय", "स्वास्थ्य मंत्रालय", "वित्त मंत्रालय", "शिक्षा मंत्रालय"],
  answer_en: "Ministry of Housing",
  answer_hi: "आवास मंत्रालय",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Who is the Chief of Defence Staff (CDS) of India?",
  question_hi: "भारत के चीफ ऑफ डिफेंस स्टाफ (CDS) कौन हैं?",
  options_en: ["Anil Chauhan", "Bipin Rawat", "Manoj Pande", "Rakesh Sharma"],
  options_hi: ["अनिल चौहान", "बिपिन रावत", "मनोज पांडे", "राकेश शर्मा"],
  answer_en: "Anil Chauhan",
  answer_hi: "अनिल चौहान",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which country won the ICC Cricket World Cup 2023?",
  question_hi: "ICC क्रिकेट विश्व कप 2023 किस देश ने जीता?",
  options_en: ["Australia", "India", "England", "New Zealand"],
  options_hi: ["ऑस्ट्रेलिया", "भारत", "इंग्लैंड", "न्यूज़ीलैंड"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "Who is the Governor of RBI?",
  question_hi: "भारतीय रिज़र्व बैंक के गवर्नर कौन हैं?",
  options_en: ["Shaktikanta Das", "Urjit Patel", "Raghuram Rajan", "Duvvuri Subbarao"],
  options_hi: ["शक्तिकांत दास", "उर्जित पटेल", "रघुराम राजन", "दुव्वुरी सुब्बाराव"],
  answer_en: "Shaktikanta Das",
  answer_hi: "शक्तिकांत दास",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which scheme is related to clean cooking gas?",
  question_hi: "स्वच्छ रसोई गैस से संबंधित योजना कौन-सी है?",
  options_en: ["Ujjwala Yojana", "Ayushman Bharat", "PM Awas Yojana", "Jan Dhan Yojana"],
  options_hi: ["उज्ज्वला योजना", "आयुष्मान भारत", "पीएम आवास योजना", "जन धन योजना"],
  answer_en: "Ujjwala Yojana",
  answer_hi: "उज्ज्वला योजना",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Who won the FIFA World Cup 2022?",
  question_hi: "FIFA विश्व कप 2022 किसने जीता?",
  options_en: ["Argentina", "France", "Brazil", "Germany"],
  options_hi: ["अर्जेंटीना", "फ्रांस", "ब्राज़ील", "जर्मनी"],
  answer_en: "Argentina",
  answer_hi: "अर्जेंटीना",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which Indian city hosted the Cricket World Cup final 2023?",
  question_hi: "क्रिकेट विश्व कप 2023 का फाइनल किस भारतीय शहर में हुआ?",
  options_en: ["Ahmedabad", "Mumbai", "Delhi", "Chennai"],
  options_hi: ["अहमदाबाद", "मुंबई", "दिल्ली", "चेन्नई"],
  answer_en: "Ahmedabad",
  answer_hi: "अहमदाबाद",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Who is the current Vice President of India?",
  question_hi: "भारत के वर्तमान उपराष्ट्रपति कौन हैं?",
  options_en: ["Jagdeep Dhankhar", "Venkaiah Naidu", "Amit Shah", "Om Birla"],
  options_hi: ["जगदीप धनखड़", "वेंकैया नायडू", "अमित शाह", "ओम बिरला"],
  answer_en: "Jagdeep Dhankhar",
  answer_hi: "जगदीप धनखड़",
  attempted: false,
  selected: ""
},

{
  num: 16,
  question_en: "Which scheme is related to financial inclusion?",
  question_hi: "वित्तीय समावेशन से संबंधित योजना कौन-सी है?",
  options_en: ["Jan Dhan Yojana", "Ujjwala Yojana", "Ayushman Bharat", "PM Awas Yojana"],
  options_hi: ["जन धन योजना", "उज्ज्वला योजना", "आयुष्मान भारत", "पीएम आवास योजना"],
  answer_en: "Jan Dhan Yojana",
  answer_hi: "जन धन योजना",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Who is the Speaker of Lok Sabha?",
  question_hi: "लोकसभा के अध्यक्ष कौन हैं?",
  options_en: ["Om Birla", "Jagdeep Dhankhar", "Narendra Modi", "Amit Shah"],
  options_hi: ["ओम बिरला", "जगदीप धनखड़", "नरेंद्र मोदी", "अमित शाह"],
  answer_en: "Om Birla",
  answer_hi: "ओम बिरला",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which country launched Chandrayaan-3?",
  question_hi: "चंद्रयान-3 किस देश ने लॉन्च किया?",
  options_en: ["India", "USA", "Russia", "China"],
  options_hi: ["भारत", "अमेरिका", "रूस", "चीन"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Who is the Chairman of ISRO?",
  question_hi: "ISRO के अध्यक्ष कौन हैं?",
  options_en: ["S. Somanath", "K. Sivan", "A. S. Kiran Kumar", "Vikram Sarabhai"],
  options_hi: ["एस. सोमनाथ", "के. सिवन", "ए. एस. किरण कुमार", "विक्रम साराभाई"],
  answer_en: "S. Somanath",
  answer_hi: "एस. सोमनाथ",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which sport is associated with Wimbledon?",
  question_hi: "विंबलडन किस खेल से संबंधित है?",
  options_en: ["Tennis", "Cricket", "Football", "Hockey"],
  options_hi: ["टेनिस", "क्रिकेट", "फुटबॉल", "हॉकी"],
  answer_en: "Tennis",
  answer_hi: "टेनिस",
  attempted: false,
  selected: ""
},

{
  num: 21,
  question_en: "Who won the Nobel Peace Prize 2023?",
  question_hi: "नोबेल शांति पुरस्कार 2023 किसे मिला?",
  options_en: ["Narges Mohammadi", "UNICEF", "WHO", "Greta Thunberg"],
  options_hi: ["नरगिस मोहम्मदी", "यूनिसेफ", "WHO", "ग्रेटा थनबर्ग"],
  answer_en: "Narges Mohammadi",
  answer_hi: "नरगिस मोहम्मदी",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which Indian scheme focuses on digital payments?",
  question_hi: "डिजिटल भुगतान पर केंद्रित भारतीय योजना कौन-सी है?",
  options_en: ["UPI", "MGNREGA", "PM Awas", "Ujjwala"],
  options_hi: ["UPI", "मनरेगा", "पीएम आवास", "उज्ज्वला"],
  answer_en: "UPI",
  answer_hi: "UPI",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Who is the Chief Minister of Uttar Pradesh?",
  question_hi: "उत्तर प्रदेश के मुख्यमंत्री कौन हैं?",
  options_en: ["Yogi Adityanath", "Akhilesh Yadav", "Mayawati", "Raj Nath Singh"],
  options_hi: ["योगी आदित्यनाथ", "अखिलेश यादव", "मायावती", "राजनाथ सिंह"],
  answer_en: "Yogi Adityanath",
  answer_hi: "योगी आदित्यनाथ",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which country hosted the Asian Games 2022?",
  question_hi: "एशियाई खेल 2022 की मेज़बानी किस देश ने की?",
  options_en: ["China", "Japan", "India", "South Korea"],
  options_hi: ["चीन", "जापान", "भारत", "दक्षिण कोरिया"],
  answer_en: "China",
  answer_hi: "चीन",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Who is the Indian External Affairs Minister?",
  question_hi: "भारत के विदेश मंत्री कौन हैं?",
  options_en: ["S. Jaishankar", "Amit Shah", "Rajnath Singh", "Nirmala Sitharaman"],
  options_hi: ["एस. जयशंकर", "अमित शाह", "राजनाथ सिंह", "निर्मला सीतारमण"],
  answer_en: "S. Jaishankar",
  answer_hi: "एस. जयशंकर",
  attempted: false,
  selected: ""
},

{
  num: 26,
  question_en: "Which trophy is related to cricket?",
  question_hi: "कौन-सी ट्रॉफी क्रिकेट से संबंधित है?",
  options_en: ["ICC World Cup", "Thomas Cup", "Durand Cup", "Santosh Trophy"],
  options_hi: ["ICC विश्व कप", "थॉमस कप", "डूरंड कप", "संतोष ट्रॉफी"],
  answer_en: "ICC World Cup",
  answer_hi: "ICC विश्व कप",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Who is the Defence Minister of India?",
  question_hi: "भारत के रक्षा मंत्री कौन हैं?",
  options_en: ["Rajnath Singh", "Amit Shah", "Nitin Gadkari", "S. Jaishankar"],
  options_hi: ["राजनाथ सिंह", "अमित शाह", "नितिन गडकरी", "एस. जयशंकर"],
  answer_en: "Rajnath Singh",
  answer_hi: "राजनाथ सिंह",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which Indian mission studied the Sun?",
  question_hi: "सूर्य का अध्ययन करने वाला भारतीय मिशन कौन-सा है?",
  options_en: ["Aditya-L1", "Chandrayaan-2", "Mangalyaan", "Gaganyaan"],
  options_hi: ["आदित्य-L1", "चंद्रयान-2", "मंगलयान", "गगनयान"],
  answer_en: "Aditya-L1",
  answer_hi: "आदित्य-L1",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which sport is related to Thomas Cup?",
  question_hi: "थॉमस कप किस खेल से संबंधित है?",
  options_en: ["Badminton", "Hockey", "Cricket", "Football"],
  options_hi: ["बैडमिंटन", "हॉकी", "क्रिकेट", "फुटबॉल"],
  answer_en: "Badminton",
  answer_hi: "बैडमिंटन",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Who is the Chief Justice of India?",
  question_hi: "भारत के मुख्य न्यायाधीश कौन हैं?",
  options_en: ["D. Y. Chandrachud", "N. V. Ramana", "Ranjan Gogoi", "U. U. Lalit"],
  options_hi: ["डी. वाई. चंद्रचूड़", "एन. वी. रमना", "रंजन गोगोई", "यू. यू. ललित"],
  answer_en: "D. Y. Chandrachud",
  answer_hi: "डी. वाई. चंद्रचूड़",
  attempted: false,
  selected: ""
},

{
  num: 31,
  question_en: "Which scheme focuses on women's empowerment?",
  question_hi: "महिला सशक्तिकरण पर केंद्रित योजना कौन-सी है?",
  options_en: ["Beti Bachao Beti Padhao", "PM Awas Yojana", "MGNREGA", "Jan Dhan"],
  options_hi: ["बेटी बचाओ बेटी पढ़ाओ", "पीएम आवास योजना", "मनरेगा", "जन धन"],
  answer_en: "Beti Bachao Beti Padhao",
  answer_hi: "बेटी बचाओ बेटी पढ़ाओ",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which country is the largest economy in the world?",
  question_hi: "विश्व की सबसे बड़ी अर्थव्यवस्था कौन-सी है?",
  options_en: ["USA", "China", "India", "Japan"],
  options_hi: ["अमेरिका", "चीन", "भारत", "जापान"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Who won the Ballon d'Or 2023?",
  question_hi: "बैलन डी'ऑर 2023 किसने जीता?",
  options_en: ["Lionel Messi", "Cristiano Ronaldo", "Mbappe", "Neymar"],
  options_hi: ["लियोनेल मेसी", "क्रिस्टियानो रोनाल्डो", "एम्बाप्पे", "नेमार"],
  answer_en: "Lionel Messi",
  answer_hi: "लियोनेल मेसी",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which ministry handles education in India?",
  question_hi: "भारत में शिक्षा का कार्य किस मंत्रालय के अंतर्गत आता है?",
  options_en: ["Ministry of Education", "Ministry of Home", "Ministry of Finance", "Ministry of Defence"],
  options_hi: ["शिक्षा मंत्रालय", "गृह मंत्रालय", "वित्त मंत्रालय", "रक्षा मंत्रालय"],
  answer_en: "Ministry of Education",
  answer_hi: "शिक्षा मंत्रालय",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which Indian athlete won Olympic gold medal in javelin?",
  question_hi: "भाला फेंक में ओलंपिक स्वर्ण पदक जीतने वाले भारतीय खिलाड़ी कौन हैं?",
  options_en: ["Neeraj Chopra", "Milkha Singh", "P. T. Usha", "Abhinav Bindra"],
  options_hi: ["नीरज चोपड़ा", "मिल्खा सिंह", "पी. टी. उषा", "अभिनव बिंद्रा"],
  answer_en: "Neeraj Chopra",
  answer_hi: "नीरज चोपड़ा",
  attempted: false,
  selected: ""
},

{
  num: 36,
  question_en: "Which scheme guarantees employment in rural areas?",
  question_hi: "ग्रामीण क्षेत्रों में रोजगार की गारंटी देने वाली योजना कौन-सी है?",
  options_en: ["MGNREGA", "PM Awas Yojana", "Ujjwala Yojana", "Ayushman Bharat"],
  options_hi: ["मनरेगा", "पीएम आवास योजना", "उज्ज्वला योजना", "आयुष्मान भारत"],
  answer_en: "MGNREGA",
  answer_hi: "मनरेगा",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which country is the headquarters of WHO?",
  question_hi: "WHO का मुख्यालय किस देश में है?",
  options_en: ["Switzerland", "USA", "France", "UK"],
  options_hi: ["स्विट्ज़रलैंड", "अमेरिका", "फ्रांस", "यूके"],
  answer_en: "Switzerland",
  answer_hi: "स्विट्ज़रलैंड",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Who is the Home Minister of India?",
  question_hi: "भारत के गृह मंत्री कौन हैं?",
  options_en: ["Amit Shah", "Rajnath Singh", "Nitin Gadkari", "S. Jaishankar"],
  options_hi: ["अमित शाह", "राजनाथ सिंह", "नितिन गडकरी", "एस. जयशंकर"],
  answer_en: "Amit Shah",
  answer_hi: "अमित शाह",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which sport is associated with Davis Cup?",
  question_hi: "डेविस कप किस खेल से संबंधित है?",
  options_en: ["Tennis", "Cricket", "Badminton", "Football"],
  options_hi: ["टेनिस", "क्रिकेट", "बैडमिंटन", "फुटबॉल"],
  answer_en: "Tennis",
  answer_hi: "टेनिस",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which Indian scheme is related to sanitation?",
  question_hi: "स्वच्छता से संबंधित भारतीय योजना कौन-सी है?",
  options_en: ["Swachh Bharat Mission", "PM Awas Yojana", "Jan Dhan Yojana", "Ayushman Bharat"],
  options_hi: ["स्वच्छ भारत मिशन", "पीएम आवास योजना", "जन धन योजना", "आयुष्मान भारत"],
  answer_en: "Swachh Bharat Mission",
  answer_hi: "स्वच्छ भारत मिशन",
  attempted: false,
  selected: ""
},

{
  num: 41,
  question_en: "Who is the CEO of NITI Aayog?",
  question_hi: "नीति आयोग के CEO कौन हैं?",
  options_en: ["B. V. R. Subrahmanyam", "Amitabh Kant", "Arvind Panagariya", "Raghuram Rajan"],
  options_hi: ["बी. वी. आर. सुब्रह्मण्यम", "अमिताभ कांत", "अरविंद पनगढ़िया", "रघुराम राजन"],
  answer_en: "B. V. R. Subrahmanyam",
  answer_hi: "बी. वी. आर. सुब्रह्मण्यम",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which international organization deals with children?",
  question_hi: "बच्चों से संबंधित अंतरराष्ट्रीय संगठन कौन-सा है?",
  options_en: ["UNICEF", "WHO", "IMF", "World Bank"],
  options_hi: ["यूनिसेफ", "WHO", "IMF", "विश्व बैंक"],
  answer_en: "UNICEF",
  answer_hi: "यूनिसेफ",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which Indian mission aims for human space flight?",
  question_hi: "मानव अंतरिक्ष उड़ान से संबंधित भारतीय मिशन कौन-सा है?",
  options_en: ["Gaganyaan", "Chandrayaan", "Mangalyaan", "Aditya-L1"],
  options_hi: ["गगनयान", "चंद्रयान", "मंगलयान", "आदित्य-L1"],
  answer_en: "Gaganyaan",
  answer_hi: "गगनयान",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which country is known as Land of Rising Sun?",
  question_hi: "उगते सूरज की भूमि किस देश को कहा जाता है?",
  options_en: ["Japan", "China", "South Korea", "Thailand"],
  options_hi: ["जापान", "चीन", "दक्षिण कोरिया", "थाईलैंड"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Who is the Indian Finance Minister?",
  question_hi: "भारत की वित्त मंत्री कौन हैं?",
  options_en: ["Nirmala Sitharaman", "Amit Shah", "S. Jaishankar", "Smriti Irani"],
  options_hi: ["निर्मला सीतारमण", "अमित शाह", "एस. जयशंकर", "स्मृति ईरानी"],
  answer_en: "Nirmala Sitharaman",
  answer_hi: "निर्मला सीतारमण",
  attempted: false,
  selected: ""
},

{
  num: 46,
  question_en: "Which Indian city is known as Silicon Valley of India?",
  question_hi: "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?",
  options_en: ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
  options_hi: ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
  answer_en: "Bengaluru",
  answer_hi: "बेंगलुरु",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which scheme provides LPG connections to women?",
  question_hi: "महिलाओं को LPG कनेक्शन देने वाली योजना कौन-सी है?",
  options_en: ["Ujjwala Yojana", "Jan Dhan Yojana", "PM Awas Yojana", "Ayushman Bharat"],
  options_hi: ["उज्ज्वला योजना", "जन धन योजना", "पीएम आवास योजना", "आयुष्मान भारत"],
  answer_en: "Ujjwala Yojana",
  answer_hi: "उज्ज्वला योजना",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which country is the permanent member of UNSC?",
  question_hi: "संयुक्त राष्ट्र सुरक्षा परिषद का स्थायी सदस्य कौन-सा देश है?",
  options_en: ["USA", "India", "Germany", "Japan"],
  options_hi: ["अमेरिका", "भारत", "जर्मनी", "जापान"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which sport is associated with Santosh Trophy?",
  question_hi: "संतोष ट्रॉफी किस खेल से संबंधित है?",
  options_en: ["Football", "Cricket", "Hockey", "Badminton"],
  options_hi: ["फुटबॉल", "क्रिकेट", "हॉकी", "बैडमिंटन"],
  answer_en: "Football",
  answer_hi: "फुटबॉल",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which international day is celebrated on 5 June?",
  question_hi: "5 जून को कौन-सा अंतरराष्ट्रीय दिवस मनाया जाता है?",
  options_en: ["World Environment Day", "World Health Day", "International Yoga Day", "Human Rights Day"],
  options_hi: ["विश्व पर्यावरण दिवस", "विश्व स्वास्थ्य दिवस", "अंतरराष्ट्रीय योग दिवस", "मानव अधिकार दिवस"],
  answer_en: "World Environment Day",
  answer_hi: "विश्व पर्यावरण दिवस",
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