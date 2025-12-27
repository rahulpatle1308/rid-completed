const questions = [
{
  num:1,
  question_en: "Who is the current Chief of Defence Staff (CDS) of India?",
  question_hi: "वर्तमान भारत के चीफ ऑफ डिफेंस स्टाफ (CDS) कौन हैं?",
  options_en: ["Anil Chauhan", "Bipin Rawat", "MM Naravane", "R Karambir Singh"],
  options_hi: ["अनिल चौहान", "बिपिन रावत", "एम एम नरवणे", "आर करमबीर सिंह"],
  answer_en: "Anil Chauhan",
  answer_hi: "अनिल चौहान",
  attempted: false,
  selected: ""
},
{
  num:2,
  question_en: "Which country assumed the presidency of G20 in 2024?",
  question_hi: "2024 में G20 की अध्यक्षता किस देश ने संभाली?",
  options_en: ["Brazil", "India", "South Africa", "Italy"],
  options_hi: ["ब्राज़ील", "भारत", "दक्षिण अफ्रीका", "इटली"],
  answer_en: "Brazil",
  answer_hi: "ब्राज़ील",
  attempted: false,
  selected: ""
},
{
  num:3,
  question_en: "Which scheme is related to rooftop solar power?",
  question_hi: "रूफटॉप सोलर ऊर्जा से संबंधित योजना कौन-सी है?",
  options_en: ["PM Surya Ghar Yojana", "Saubhagya Yojana", "UDAY Scheme", "AMRUT"],
  options_hi: ["पीएम सूर्य घर योजना", "सौभाग्य योजना", "उदय योजना", "अमृत"],
  answer_en: "PM Surya Ghar Yojana",
  answer_hi: "पीएम सूर्य घर योजना",
  attempted: false,
  selected: ""
},
{
  num:4,
  question_en: "Who won the ICC Women's Cricketer of the Year 2023?",
  question_hi: "ICC महिला क्रिकेटर ऑफ द ईयर 2023 किसने जीता?",
  options_en: ["Smriti Mandhana", "Amelia Kerr", "Beth Mooney", "Ellyse Perry"],
  options_hi: ["स्मृति मंधाना", "अमेलिया केर", "बेथ मूनी", "एलिस पेरी"],
  answer_en: "Amelia Kerr",
  answer_hi: "अमेलिया केर",
  attempted: false,
  selected: ""
},
{
  num:5,
  question_en: "Who is the current Cabinet Secretary of India?",
  question_hi: "वर्तमान भारत के कैबिनेट सचिव कौन हैं?",
  options_en: ["Rajiv Gauba", "Ajay Seth", "PK Mishra", "T V Somanathan"],
  options_hi: ["राजीव गौबा", "अजय सेठ", "पी के मिश्रा", "टी वी सोमनाथन"],
  answer_en: "Rajiv Gauba",
  answer_hi: "राजीव गौबा",
  attempted: false,
  selected: ""
},

{
  num:6,
  question_en: "Which Indian state hosted the National Games 2023?",
  question_hi: "राष्ट्रीय खेल 2023 की मेज़बानी किस राज्य ने की?",
  options_en: ["Goa", "Gujarat", "Kerala", "Odisha"],
  options_hi: ["गोवा", "गुजरात", "केरल", "ओडिशा"],
  answer_en: "Goa",
  answer_hi: "गोवा",
  attempted: false,
  selected: ""
},
{
  num:7,
  question_en: "Which organization releases the Global Hunger Index?",
  question_hi: "ग्लोबल हंगर इंडेक्स कौन जारी करता है?",
  options_en: ["Concern Worldwide", "WHO", "IMF", "UNICEF"],
  options_hi: ["कंसर्न वर्ल्डवाइड", "डब्ल्यूएचओ", "आईएमएफ", "यूनिसेफ"],
  answer_en: "Concern Worldwide",
  answer_hi: "कंसर्न वर्ल्डवाइड",
  attempted: false,
  selected: ""
},
{
  num:8,
  question_en: "Who is the current Chairperson of CBSE?",
  question_hi: "वर्तमान CBSE की अध्यक्ष कौन हैं?",
  options_en: ["Nidhi Chhibber", "Anurag Tripathi", "Vineet Joshi", "Sanyam Bhardwaj"],
  options_hi: ["निधि छिब्बर", "अनुराग त्रिपाठी", "विनीत जोशी", "संयम भारद्वाज"],
  answer_en: "Nidhi Chhibber",
  answer_hi: "निधि छिब्बर",
  attempted: false,
  selected: ""
},
{
  num:9,
  question_en: "Which country won the Hockey World Cup 2023 (Men)?",
  question_hi: "हॉकी विश्व कप 2023 (पुरुष) किस देश ने जीता?",
  options_en: ["Germany", "Netherlands", "Belgium", "India"],
  options_hi: ["जर्मनी", "नीदरलैंड", "बेल्जियम", "भारत"],
  answer_en: "Germany",
  answer_hi: "जर्मनी",
  attempted: false,
  selected: ""
},
{
  num:10,
  question_en: "Which scheme is related to financial inclusion?",
  question_hi: "वित्तीय समावेशन से संबंधित योजना कौन-सी है?",
  options_en: ["PM Jan Dhan Yojana", "PM Kisan", "Ujjwala Yojana", "PMFBY"],
  options_hi: ["पीएम जन धन योजना", "पीएम किसान", "उज्ज्वला योजना", "पीएमएफबीवाई"],
  answer_en: "PM Jan Dhan Yojana",
  answer_hi: "पीएम जन धन योजना",
  attempted: false,
  selected: ""
},

{
  num:11,
  question_en: "Who is the current Chief Minister of Uttar Pradesh?",
  question_hi: "वर्तमान उत्तर प्रदेश के मुख्यमंत्री कौन हैं?",
  options_en: ["Yogi Adityanath", "Akhilesh Yadav", "Mayawati", "Keshav Prasad Maurya"],
  options_hi: ["योगी आदित्यनाथ", "अखिलेश यादव", "मायावती", "केशव प्रसाद मौर्य"],
  answer_en: "Yogi Adityanath",
  answer_hi: "योगी आदित्यनाथ",
  attempted: false,
  selected: ""
},
{
  num:12,
  question_en: "Which Indian airport was named after Veer Savarkar?",
  question_hi: "वीर सावरकर के नाम पर किस हवाई अड्डे का नाम रखा गया?",
  options_en: ["Port Blair Airport", "Pune Airport", "Nagpur Airport", "Indore Airport"],
  options_hi: ["पोर्ट ब्लेयर एयरपोर्ट", "पुणे एयरपोर्ट", "नागपुर एयरपोर्ट", "इंदौर एयरपोर्ट"],
  answer_en: "Port Blair Airport",
  answer_hi: "पोर्ट ब्लेयर एयरपोर्ट",
  attempted: false,
  selected: ""
},
{
  num:13,
  question_en: "Which country will host the FIFA Men's World Cup 2026?",
  question_hi: "FIFA पुरुष विश्व कप 2026 की मेज़बानी कौन करेगा?",
  options_en: ["USA, Canada & Mexico", "Qatar", "Brazil", "England"],
  options_hi: ["अमेरिका, कनाडा और मेक्सिको", "कतर", "ब्राज़ील", "इंग्लैंड"],
  answer_en: "USA, Canada & Mexico",
  answer_hi: "अमेरिका, कनाडा और मेक्सिको",
  attempted: false,
  selected: ""
},
{
  num:14,
  question_en: "Which scheme provides employment for 100 days?",
  question_hi: "100 दिन का रोज़गार किस योजना के तहत मिलता है?",
  options_en: ["MGNREGA", "PM Kisan", "PMJDY", "DAY-NRLM"],
  options_hi: ["मनरेगा", "पीएम किसान", "पीएमजेडीवाई", "डीएवाई-एनआरएलएम"],
  answer_en: "MGNREGA",
  answer_hi: "मनरेगा",
  attempted: false,
  selected: ""
},
{
  num:15,
  question_en: "Who is the current Chief Minister of Bihar?",
  question_hi: "वर्तमान बिहार के मुख्यमंत्री कौन हैं?",
  options_en: ["Nitish Kumar", "Tejashwi Yadav", "Jitan Ram Manjhi", "Sushil Modi"],
  options_hi: ["नीतीश कुमार", "तेजस्वी यादव", "जीतन राम मांझी", "सुशील मोदी"],
  answer_en: "Nitish Kumar",
  answer_hi: "नीतीश कुमार",
  attempted: false,
  selected: ""
},

{
  num:16,
  question_en: "Which country launched the 'Red Sea Guardian' operation?",
  question_hi: "'रेड सी गार्डियन' अभियान किस देश ने शुरू किया?",
  options_en: ["USA", "UK", "Israel", "France"],
  options_hi: ["अमेरिका", "यूके", "इज़राइल", "फ्रांस"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num:17,
  question_en: "Which Indian player won the Laureus World Comeback of the Year Award?",
  question_hi: "लॉरियस वर्ल्ड कमबैक ऑफ द ईयर अवॉर्ड किस भारतीय खिलाड़ी को मिला?",
  options_en: ["Rishabh Pant", "Neeraj Chopra", "PV Sindhu", "Rohit Sharma"],
  options_hi: ["ऋषभ पंत", "नीरज चोपड़ा", "पी वी सिंधु", "रोहित शर्मा"],
  answer_en: "Rishabh Pant",
  answer_hi: "ऋषभ पंत",
  attempted: false,
  selected: ""
},
{
  num:18,
  question_en: "Which scheme is related to women self-help groups?",
  question_hi: "महिला स्वयं सहायता समूहों से संबंधित योजना कौन-सी है?",
  options_en: ["DAY-NRLM", "PMFBY", "PMJDY", "PM Awas"],
  options_hi: ["डीएवाई-एनआरएलएम", "पीएमएफबीवाई", "पीएमजेडीवाई", "पीएम आवास"],
  answer_en: "DAY-NRLM",
  answer_hi: "डीएवाई-एनआरएलएम",
  attempted: false,
  selected: ""
},
{
  num:19,
  question_en: "Who is the current Chief Justice of Delhi High Court?",
  question_hi: "दिल्ली उच्च न्यायालय के वर्तमान मुख्य न्यायाधीश कौन हैं?",
  options_en: ["Manmohan", "DN Patel", "Rajiv Shakdher", "Gita Mittal"],
  options_hi: ["मनमोहन", "डी एन पटेल", "राजीव शकधर", "गीता मित्तल"],
  answer_en: "Manmohan",
  answer_hi: "मनमोहन",
  attempted: false,
  selected: ""
},
{
  num:20,
  question_en: "Which country won the Davis Cup 2023?",
  question_hi: "डेविस कप 2023 किस देश ने जीता?",
  options_en: ["Italy", "Australia", "Spain", "Canada"],
  options_hi: ["इटली", "ऑस्ट्रेलिया", "स्पेन", "कनाडा"],
  answer_en: "Italy",
  answer_hi: "इटली",
  attempted: false,
  selected: ""
},

{
  num:21,
  question_en: "Which Indian city hosted the Urban 20 Summit?",
  question_hi: "अर्बन 20 शिखर सम्मेलन किस भारतीय शहर में हुआ?",
  options_en: ["Ahmedabad", "Jaipur", "Bengaluru", "Pune"],
  options_hi: ["अहमदाबाद", "जयपुर", "बेंगलुरु", "पुणे"],
  answer_en: "Ahmedabad",
  answer_hi: "अहमदाबाद",
  attempted: false,
  selected: ""
},
{
  num:22,
  question_en: "Which scheme aims to make India self-reliant?",
  question_hi: "भारत को आत्मनिर्भर बनाने की पहल कौन-सी है?",
  options_en: ["Atmanirbhar Bharat", "Make in India", "Digital India", "Startup India"],
  options_hi: ["आत्मनिर्भर भारत", "मेक इन इंडिया", "डिजिटल इंडिया", "स्टार्टअप इंडिया"],
  answer_en: "Atmanirbhar Bharat",
  answer_hi: "आत्मनिर्भर भारत",
  attempted: false,
  selected: ""
},
{
  num:23,
  question_en: "Who is the current Chairperson of SEBI?",
  question_hi: "सेबी की वर्तमान अध्यक्ष कौन हैं?",
  options_en: ["Madhabi Puri Buch", "Ajay Tyagi", "UK Sinha", "Ashok Chawla"],
  options_hi: ["माधबी पुरी बुच", "अजय त्यागी", "यू के सिन्हा", "अशोक चावला"],
  answer_en: "Madhabi Puri Buch",
  answer_hi: "माधबी पुरी बुच",
  attempted: false,
  selected: ""
},
{
  num:24,
  question_en: "Which Indian woman cricketer won ICC Women's ODI Cricketer of the Year 2023?",
  question_hi: "ICC महिला ODI क्रिकेटर ऑफ द ईयर 2023 किस भारतीय खिलाड़ी को मिला?",
  options_en: ["Smriti Mandhana", "Harmanpreet Kaur", "Jemimah Rodrigues", "Shafali Verma"],
  options_hi: ["स्मृति मंधाना", "हरमनप्रीत कौर", "जेमिमा रोड्रिग्स", "शेफाली वर्मा"],
  answer_en: "Smriti Mandhana",
  answer_hi: "स्मृति मंधाना",
  attempted: false,
  selected: ""
},
{
  num:25,
  question_en: "Which scheme provides scholarships to minority students?",
  question_hi: "अल्पसंख्यक छात्रों को छात्रवृत्ति देने वाली योजना कौन-सी है?",
  options_en: ["PM Scholarship Scheme", "NMMS", "KVPY", "INSPIRE"],
  options_hi: ["पीएम छात्रवृत्ति योजना", "एनएमएमएस", "केवीपीवाई", "इंस्पायर"],
  answer_en: "PM Scholarship Scheme",
  answer_hi: "पीएम छात्रवृत्ति योजना",
  attempted: false,
  selected: ""
},

{
  num:26,
  question_en: "Which country will host the Asian Games 2030?",
  question_hi: "एशियाई खेल 2030 की मेज़बानी कौन करेगा?",
  options_en: ["Qatar", "China", "India", "Japan"],
  options_hi: ["कतर", "चीन", "भारत", "जापान"],
  answer_en: "Qatar",
  answer_hi: "कतर",
  attempted: false,
  selected: ""
},
{
  num:27,
  question_en: "Who is the current Director of CBI?",
  question_hi: "वर्तमान CBI निदेशक कौन हैं?",
  options_en: ["Praveen Sood", "Rishi Kumar Shukla", "Alok Verma", "Subodh Kumar Jaiswal"],
  options_hi: ["प्रवीण सूद", "ऋषि कुमार शुक्ला", "आलोक वर्मा", "सुबोध कुमार जायसवाल"],
  answer_en: "Praveen Sood",
  answer_hi: "प्रवीण सूद",
  attempted: false,
  selected: ""
},
{
  num:28,
  question_en: "Which scheme is related to urban housing?",
  question_hi: "शहरी आवास से संबंधित योजना कौन-सी है?",
  options_en: ["PM Awas Yojana (Urban)", "AMRUT", "DAY-NULM", "Swachh Bharat"],
  options_hi: ["पीएम आवास योजना (शहरी)", "अमृत", "डीएवाई-एनयूएलएम", "स्वच्छ भारत"],
  answer_en: "PM Awas Yojana (Urban)",
  answer_hi: "पीएम आवास योजना (शहरी)",
  attempted: false,
  selected: ""
},
{
  num:29,
  question_en: "Which Indian city hosted the Women's Premier League 2023 final?",
  question_hi: "महिला प्रीमियर लीग 2023 का फाइनल किस शहर में हुआ?",
  options_en: ["Mumbai", "Delhi", "Chennai", "Ahmedabad"],
  options_hi: ["मुंबई", "दिल्ली", "चेन्नई", "अहमदाबाद"],
  answer_en: "Mumbai",
  answer_hi: "मुंबई",
  attempted: false,
  selected: ""
},
{
  num:30,
  question_en: "Who is the current Chief Minister of Rajasthan?",
  question_hi: "वर्तमान राजस्थान के मुख्यमंत्री कौन हैं?",
  options_en: ["Bhajan Lal Sharma", "Ashok Gehlot", "Vasundhara Raje", "Sachin Pilot"],
  options_hi: ["भजन लाल शर्मा", "अशोक गहलोत", "वसुंधरा राजे", "सचिन पायलट"],
  answer_en: "Bhajan Lal Sharma",
  answer_hi: "भजन लाल शर्मा",
  attempted: false,
  selected: ""
},

{
  num:31,
  question_en: "Which organization publishes the World Happiness Report?",
  question_hi: "वर्ल्ड हैप्पीनेस रिपोर्ट कौन जारी करता है?",
  options_en: ["UN SDSN", "IMF", "World Bank", "WHO"],
  options_hi: ["यूएन एसडीएसएन", "आईएमएफ", "विश्व बैंक", "डब्ल्यूएचओ"],
  answer_en: "UN SDSN",
  answer_hi: "यूएन एसडीएसएन",
  attempted: false,
  selected: ""
},
{
  num:32,
  question_en: "Which Indian scheme supports startups financially?",
  question_hi: "स्टार्टअप्स को वित्तीय सहायता देने वाली योजना कौन-सी है?",
  options_en: ["Startup India Seed Fund", "MUDRA", "Stand Up India", "PMEGP"],
  options_hi: ["स्टार्टअप इंडिया सीड फंड", "मुद्रा", "स्टैंड अप इंडिया", "पीएमईजीपी"],
  answer_en: "Startup India Seed Fund",
  answer_hi: "स्टार्टअप इंडिया सीड फंड",
  attempted: false,
  selected: ""
},
{
  num:33,
  question_en: "Who is the current Chief Minister of Madhya Pradesh?",
  question_hi: "वर्तमान मध्य प्रदेश के मुख्यमंत्री कौन हैं?",
  options_en: ["Mohan Yadav", "Shivraj Singh Chouhan", "Kamal Nath", "Narottam Mishra"],
  options_hi: ["मोहन यादव", "शिवराज सिंह चौहान", "कमलनाथ", "नरोत्तम मिश्रा"],
  answer_en: "Mohan Yadav",
  answer_hi: "मोहन यादव",
  attempted: false,
  selected: ""
},
{
  num:34,
  question_en: "Which country won the Men's Kabaddi World Cup 2023?",
  question_hi: "कबड्डी विश्व कप 2023 (पुरुष) किस देश ने जीता?",
  options_en: ["India", "Iran", "Pakistan", "South Korea"],
  options_hi: ["भारत", "ईरान", "पाकिस्तान", "दक्षिण कोरिया"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:35,
  question_en: "Which scheme is related to street vendors?",
  question_hi: "स्ट्रीट वेंडर्स से संबंधित योजना कौन-सी है?",
  options_en: ["PM SVANidhi", "PMJDY", "MUDRA", "DAY-NULM"],
  options_hi: ["पीएम स्वनिधि", "पीएमजेडीवाई", "मुद्रा", "डीएवाई-एनयूएलएम"],
  answer_en: "PM SVANidhi",
  answer_hi: "पीएम स्वनिधि",
  attempted: false,
  selected: ""
},

{
  num:36,
  question_en: "Which country hosted the SCO Summit 2023?",
  question_hi: "SCO शिखर सम्मेलन 2023 की मेज़बानी किसने की?",
  options_en: ["India", "China", "Russia", "Kazakhstan"],
  options_hi: ["भारत", "चीन", "रूस", "कजाकिस्तान"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:37,
  question_en: "Who is the current Chief Minister of Maharashtra?",
  question_hi: "वर्तमान महाराष्ट्र के मुख्यमंत्री कौन हैं?",
  options_en: ["Eknath Shinde", "Uddhav Thackeray", "Devendra Fadnavis", "Ajit Pawar"],
  options_hi: ["एकनाथ शिंदे", "उद्धव ठाकरे", "देवेंद्र फडणवीस", "अजित पवार"],
  answer_en: "Eknath Shinde",
  answer_hi: "एकनाथ शिंदे",
  attempted: false,
  selected: ""
},
{
  num:38,
  question_en: "Which scheme focuses on rural digital literacy?",
  question_hi: "ग्रामीण डिजिटल साक्षरता पर केंद्रित योजना कौन-सी है?",
  options_en: ["PMGDISHA", "Digital India", "BharatNet", "CSC"],
  options_hi: ["पीएमजीडीआईएसएचए", "डिजिटल इंडिया", "भारतनेट", "सीएससी"],
  answer_en: "PMGDISHA",
  answer_hi: "पीएमजीडीआईएसएचए",
  attempted: false,
  selected: ""
},
{
  num:39,
  question_en: "Which Indian player won the World Rapid Chess Championship 2023?",
  question_hi: "विश्व रैपिड शतरंज चैंपियनशिप 2023 किस भारतीय खिलाड़ी ने जीती?",
  options_en: ["Viswanathan Anand", "R Praggnanandhaa", "D Gukesh", "Vidit Gujrathi"],
  options_hi: ["विश्वनाथन आनंद", "आर प्रज्ञानानंद", "डी गुकेश", "विदित गुजराती"],
  answer_en: "Viswanathan Anand",
  answer_hi: "विश्वनाथन आनंद",
  attempted: false,
  selected: ""
},
{
  num:40,
  question_en: "Who is the current Chairperson of UIDAI?",
  question_hi: "UIDAI के वर्तमान अध्यक्ष कौन हैं?",
  options_en: ["Amit Agrawal", "Ram Sewak Sharma", "Nilkanth Mishra", "RS Sharma"],
  options_hi: ["अमित अग्रवाल", "राम सेवक शर्मा", "नीलकंठ मिश्रा", "आर एस शर्मा"],
  answer_en: "Amit Agrawal",
  answer_hi: "अमित अग्रवाल",
  attempted: false,
  selected: ""
},

{
  num:41,
  question_en: "Which scheme provides collateral-free loans to women?",
  question_hi: "महिलाओं को बिना गारंटी ऋण देने वाली योजना कौन-सी है?",
  options_en: ["Stand Up India", "PMJDY", "SVANidhi", "NRLM"],
  options_hi: ["स्टैंड अप इंडिया", "पीएमजेडीवाई", "स्वनिधि", "एनआरएलएम"],
  answer_en: "Stand Up India",
  answer_hi: "स्टैंड अप इंडिया",
  attempted: false,
  selected: ""
},
{
  num:42,
  question_en: "Which country won the Men's Volleyball Asian Championship 2023?",
  question_hi: "पुरुष वॉलीबॉल एशियन चैंपियनशिप 2023 किस देश ने जीती?",
  options_en: ["Qatar", "Japan", "Iran", "China"],
  options_hi: ["कतर", "जापान", "ईरान", "चीन"],
  answer_en: "Qatar",
  answer_hi: "कतर",
  attempted: false,
  selected: ""
},
{
  num:43,
  question_en: "Who is the current Chief Minister of West Bengal?",
  question_hi: "वर्तमान पश्चिम बंगाल की मुख्यमंत्री कौन हैं?",
  options_en: ["Mamata Banerjee", "Suvendu Adhikari", "Abhishek Banerjee", "Jyotipriya Mallick"],
  options_hi: ["ममता बनर्जी", "सुवेंदु अधिकारी", "अभिषेक बनर्जी", "ज्योतिप्रिय मलिक"],
  answer_en: "Mamata Banerjee",
  answer_hi: "ममता बनर्जी",
  attempted: false,
  selected: ""
},
{
  num:44,
  question_en: "Which scheme is related to crop insurance?",
  question_hi: "फसल बीमा से संबंधित योजना कौन-सी है?",
  options_en: ["PM Fasal Bima Yojana", "PM Kisan", "MGNREGA", "PMFBY"],
  options_hi: ["पीएम फसल बीमा योजना", "पीएम किसान", "मनरेगा", "पीएमएफबीवाई"],
  answer_en: "PM Fasal Bima Yojana",
  answer_hi: "पीएम फसल बीमा योजना",
  attempted: false,
  selected: ""
},
{
  num:45,
  question_en: "Which Indian city hosted the Smart Cities Expo 2023?",
  question_hi: "स्मार्ट सिटीज़ एक्सपो 2023 किस शहर में हुआ?",
  options_en: ["Indore", "Surat", "Pune", "Bhopal"],
  options_hi: ["इंदौर", "सूरत", "पुणे", "भोपाल"],
  answer_en: "Indore",
  answer_hi: "इंदौर",
  attempted: false,
  selected: ""
},

{
  num:46,
  question_en: "Who is the current Chief Minister of Telangana?",
  question_hi: "वर्तमान तेलंगाना के मुख्यमंत्री कौन हैं?",
  options_en: ["Revanth Reddy", "KCR", "KT Rama Rao", "Harish Rao"],
  options_hi: ["रेवंत रेड्डी", "केसीआर", "के टी रामाराव", "हरीश राव"],
  answer_en: "Revanth Reddy",
  answer_hi: "रेवंत रेड्डी",
  attempted: false,
  selected: ""
},
{
  num:47,
  question_en: "Which scheme is related to school education reforms?",
  question_hi: "स्कूल शिक्षा सुधार से संबंधित योजना कौन-सी है?",
  options_en: ["Samagra Shiksha", "Mid Day Meal", "NEP 2020", "PM POSHAN"],
  options_hi: ["समग्र शिक्षा", "मिड डे मील", "एनईपी 2020", "पीएम पोषण"],
  answer_en: "Samagra Shiksha",
  answer_hi: "समग्र शिक्षा",
  attempted: false,
  selected: ""
},
{
  num:48,
  question_en: "Which Indian player won the Asian Games 2023 gold in Men's 10m Air Rifle?",
  question_hi: "एशियाई खेल 2023 में पुरुष 10 मी एयर राइफल स्वर्ण किसने जीता?",
  options_en: ["Divyansh Singh Panwar", "Abhinav Bindra", "Rudrankksh Patil", "Saurabh Chaudhary"],
  options_hi: ["दिव्यांश सिंह पंवार", "अभिनव बिंद्रा", "रुद्रांक्श पाटिल", "सौरभ चौधरी"],
  answer_en: "Rudrankksh Patil",
  answer_hi: "रुद्रांक्श पाटिल",
  attempted: false,
  selected: ""
},
{
  num:49,
  question_en: "Who is the current Chairperson of NCERT?",
  question_hi: "NCERT के वर्तमान अध्यक्ष कौन हैं?",
  options_en: ["Dinesh Prasad Saklani", "Manish Sisodia", "Anurag Tripathi", "Sanyam Bhardwaj"],
  options_hi: ["दिनेश प्रसाद सकलानी", "मनीष सिसोदिया", "अनुराग त्रिपाठी", "संयम भारद्वाज"],
  answer_en: "Dinesh Prasad Saklani",
  answer_hi: "दिनेश प्रसाद सकलानी",
  attempted: false,
  selected: ""
},
{
  num:50,
  question_en: "Which country won the Men's Asian Hockey Champions Trophy 2023?",
  question_hi: "पुरुष एशियन हॉकी चैंपियंस ट्रॉफी 2023 किस देश ने जीती?",
  options_en: ["India", "Pakistan", "Japan", "South Korea"],
  options_hi: ["भारत", "पाकिस्तान", "जापान", "दक्षिण कोरिया"],
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