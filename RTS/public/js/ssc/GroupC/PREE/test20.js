const questions = [
 {
  num: 1,
  question_en: "Which scheme was launched to provide free LPG connections to poor women?",
  question_hi: "गरीब महिलाओं को मुफ्त एलपीजी कनेक्शन देने के लिए कौन-सी योजना शुरू की गई?",
  options_en: ["Ujjwala Yojana", "Ayushman Bharat", "PM Awas Yojana", "PMJDY"],
  options_hi: ["उज्ज्वला योजना", "आयुष्मान भारत", "प्रधानमंत्री आवास योजना", "प्रधानमंत्री जनधन योजना"],
  answer_en: "Ujjwala Yojana",
  answer_hi: "उज्ज्वला योजना",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Pradhan Mantri Jan Dhan Yojana is related to which sector?",
  question_hi: "प्रधानमंत्री जनधन योजना किस क्षेत्र से संबंधित है?",
  options_en: ["Banking", "Health", "Housing", "Education"],
  options_hi: ["बैंकिंग", "स्वास्थ्य", "आवास", "शिक्षा"],
  answer_en: "Banking",
  answer_hi: "बैंकिंग",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which scheme provides health insurance cover of ₹5 lakh?",
  question_hi: "कौन-सी योजना ₹5 लाख का स्वास्थ्य बीमा कवर प्रदान करती है?",
  options_en: ["Ayushman Bharat", "PMJJBY", "PMSBY", "UJALA"],
  options_hi: ["आयुष्मान भारत", "प्रधानमंत्री जीवन ज्योति बीमा योजना", "प्रधानमंत्री सुरक्षा बीमा योजना", "उजाला योजना"],
  answer_en: "Ayushman Bharat",
  answer_hi: "आयुष्मान भारत",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "PM Awas Yojana is related to?",
  question_hi: "प्रधानमंत्री आवास योजना किससे संबंधित है?",
  options_en: ["Housing", "Health", "Education", "Employment"],
  options_hi: ["आवास", "स्वास्थ्य", "शिक्षा", "रोजगार"],
  answer_en: "Housing",
  answer_hi: "आवास",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which scheme aims at financial inclusion?",
  question_hi: "कौन-सी योजना वित्तीय समावेशन से संबंधित है?",
  options_en: ["PMJDY", "PMFBY", "PMAY", "PMGKAY"],
  options_hi: ["प्रधानमंत्री जनधन योजना", "प्रधानमंत्री फसल बीमा योजना", "प्रधानमंत्री आवास योजना", "प्रधानमंत्री गरीब कल्याण अन्न योजना"],
  answer_en: "PMJDY",
  answer_hi: "प्रधानमंत्री जनधन योजना",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Pradhan Mantri Fasal Bima Yojana is for?",
  question_hi: "प्रधानमंत्री फसल बीमा योजना किसके लिए है?",
  options_en: ["Farmers", "Students", "Women", "Workers"],
  options_hi: ["किसान", "छात्र", "महिलाएँ", "मजदूर"],
  answer_en: "Farmers",
  answer_hi: "किसान",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which scheme is related to accident insurance?",
  question_hi: "कौन-सी योजना दुर्घटना बीमा से संबंधित है?",
  options_en: ["PMSBY", "PMJJBY", "Ayushman Bharat", "PMAY"],
  options_hi: ["प्रधानमंत्री सुरक्षा बीमा योजना", "प्रधानमंत्री जीवन ज्योति बीमा योजना", "आयुष्मान भारत", "प्रधानमंत्री आवास योजना"],
  answer_en: "PMSBY",
  answer_hi: "प्रधानमंत्री सुरक्षा बीमा योजना",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "PMJJBY provides insurance against?",
  question_hi: "प्रधानमंत्री जीवन ज्योति बीमा योजना किसके खिलाफ बीमा देती है?",
  options_en: ["Death", "Accident", "Crop loss", "Health"],
  options_hi: ["मृत्यु", "दुर्घटना", "फसल नुकसान", "स्वास्थ्य"],
  answer_en: "Death",
  answer_hi: "मृत्यु",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which scheme provides free food grains to the poor?",
  question_hi: "गरीबों को मुफ्त खाद्यान्न देने वाली योजना कौन-सी है?",
  options_en: ["PMGKAY", "PMFBY", "PMAY", "UJALA"],
  options_hi: ["प्रधानमंत्री गरीब कल्याण अन्न योजना", "प्रधानमंत्री फसल बीमा योजना", "प्रधानमंत्री आवास योजना", "उजाला योजना"],
  answer_en: "PMGKAY",
  answer_hi: "प्रधानमंत्री गरीब कल्याण अन्न योजना",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "UJALA scheme is related to?",
  question_hi: "उजाला योजना किससे संबंधित है?",
  options_en: ["LED bulbs", "Health", "Education", "Housing"],
  options_hi: ["एलईडी बल्ब", "स्वास्थ्य", "शिक्षा", "आवास"],
  answer_en: "LED bulbs",
  answer_hi: "एलईडी बल्ब",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "Which scheme promotes cleanliness?",
  question_hi: "स्वच्छता को बढ़ावा देने वाली योजना कौन-सी है?",
  options_en: ["Swachh Bharat Mission", "Skill India", "Digital India", "Startup India"],
  options_hi: ["स्वच्छ भारत मिशन", "स्किल इंडिया", "डिजिटल इंडिया", "स्टार्टअप इंडिया"],
  answer_en: "Swachh Bharat Mission",
  answer_hi: "स्वच्छ भारत मिशन",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Skill India scheme focuses on?",
  question_hi: "स्किल इंडिया योजना किस पर केंद्रित है?",
  options_en: ["Skill development", "Health", "Housing", "Agriculture"],
  options_hi: ["कौशल विकास", "स्वास्थ्य", "आवास", "कृषि"],
  answer_en: "Skill development",
  answer_hi: "कौशल विकास",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Digital India scheme aims to?",
  question_hi: "डिजिटल इंडिया योजना का उद्देश्य क्या है?",
  options_en: ["Digital empowerment", "Housing", "Insurance", "Food security"],
  options_hi: ["डिजिटल सशक्तिकरण", "आवास", "बीमा", "खाद्य सुरक्षा"],
  answer_en: "Digital empowerment",
  answer_hi: "डिजिटल सशक्तिकरण",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Startup India scheme supports?",
  question_hi: "स्टार्टअप इंडिया योजना किसे समर्थन देती है?",
  options_en: ["Entrepreneurs", "Farmers", "Teachers", "Doctors"],
  options_hi: ["उद्यमी", "किसान", "शिक्षक", "डॉक्टर"],
  answer_en: "Entrepreneurs",
  answer_hi: "उद्यमी",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Make in India scheme is related to?",
  question_hi: "मेक इन इंडिया योजना किससे संबंधित है?",
  options_en: ["Manufacturing", "Health", "Education", "Agriculture"],
  options_hi: ["निर्माण", "स्वास्थ्य", "शिक्षा", "कृषि"],
  answer_en: "Manufacturing",
  answer_hi: "निर्माण",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "PM Kisan Samman Nidhi Yojana provides financial assistance to?",
  question_hi: "प्रधानमंत्री किसान सम्मान निधि योजना किसे आर्थिक सहायता देती है?",
  options_en: ["Farmers", "Students", "Workers", "Women"],
  options_hi: ["किसान", "छात्र", "मजदूर", "महिलाएँ"],
  answer_en: "Farmers",
  answer_hi: "किसान",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which scheme is related to pension for unorganized workers?",
  question_hi: "असंगठित श्रमिकों के लिए पेंशन से संबंधित योजना कौन-सी है?",
  options_en: ["PM Shram Yogi Maandhan", "PMJDY", "PMAY", "PMFBY"],
  options_hi: ["प्रधानमंत्री श्रम योगी मानधन", "प्रधानमंत्री जनधन योजना", "प्रधानमंत्री आवास योजना", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "PM Shram Yogi Maandhan",
  answer_hi: "प्रधानमंत्री श्रम योगी मानधन",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which scheme is launched for street vendors?",
  question_hi: "रेहड़ी-पटरी वालों के लिए कौन-सी योजना शुरू की गई?",
  options_en: ["PM SVANidhi", "PMAY", "PMJDY", "UJALA"],
  options_hi: ["प्रधानमंत्री स्वनिधि", "प्रधानमंत्री आवास योजना", "प्रधानमंत्री जनधन योजना", "उजाला योजना"],
  answer_en: "PM SVANidhi",
  answer_hi: "प्रधानमंत्री स्वनिधि",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which scheme aims to provide tap water to every household?",
  question_hi: "हर घर नल से जल उपलब्ध कराने वाली योजना कौन-सी है?",
  options_en: ["Jal Jeevan Mission", "Swachh Bharat Mission", "AMRUT", "Namami Gange"],
  options_hi: ["जल जीवन मिशन", "स्वच्छ भारत मिशन", "अमृत योजना", "नमामि गंगे"],
  answer_en: "Jal Jeevan Mission",
  answer_hi: "जल जीवन मिशन",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Namami Gange programme is related to?",
  question_hi: "नमामि गंगे कार्यक्रम किससे संबंधित है?",
  options_en: ["River cleaning", "Health", "Education", "Housing"],
  options_hi: ["नदी सफाई", "स्वास्थ्य", "शिक्षा", "आवास"],
  answer_en: "River cleaning",
  answer_hi: "नदी सफाई",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Which scheme promotes girls education?",
  question_hi: "बालिकाओं की शिक्षा को बढ़ावा देने वाली योजना कौन-सी है?",
  options_en: ["Beti Bachao Beti Padhao", "PMAY", "UJALA", "Skill India"],
  options_hi: ["बेटी बचाओ बेटी पढ़ाओ", "प्रधानमंत्री आवास योजना", "उजाला योजना", "स्किल इंडिया"],
  answer_en: "Beti Bachao Beti Padhao",
  answer_hi: "बेटी बचाओ बेटी पढ़ाओ",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which scheme aims to provide employment in rural areas?",
  question_hi: "ग्रामीण क्षेत्रों में रोजगार देने वाली योजना कौन-सी है?",
  options_en: ["MGNREGA", "PMFBY", "PMJDY", "PMAY"],
  options_hi: ["मनरेगा", "प्रधानमंत्री फसल बीमा योजना", "प्रधानमंत्री जनधन योजना", "प्रधानमंत्री आवास योजना"],
  answer_en: "MGNREGA",
  answer_hi: "मनरेगा",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which scheme is related to affordable medicines?",
  question_hi: "सस्ती दवाइयों से संबंधित योजना कौन-सी है?",
  options_en: ["Jan Aushadhi Yojana", "Ayushman Bharat", "PMAY", "UJALA"],
  options_hi: ["जन औषधि योजना", "आयुष्मान भारत", "प्रधानमंत्री आवास योजना", "उजाला योजना"],
  answer_en: "Jan Aushadhi Yojana",
  answer_hi: "जन औषधि योजना",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which scheme supports renewable energy?",
  question_hi: "नवीकरणीय ऊर्जा को बढ़ावा देने वाली योजना कौन-सी है?",
  options_en: ["National Solar Mission", "PMFBY", "PMJDY", "PMAY"],
  options_hi: ["राष्ट्रीय सौर मिशन", "प्रधानमंत्री फसल बीमा योजना", "प्रधानमंत्री जनधन योजना", "प्रधानमंत्री आवास योजना"],
  answer_en: "National Solar Mission",
  answer_hi: "राष्ट्रीय सौर मिशन",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which scheme is related to urban development?",
  question_hi: "शहरी विकास से संबंधित योजना कौन-सी है?",
  options_en: ["AMRUT", "MGNREGA", "PMFBY", "PM Kisan"],
  options_hi: ["अमृत योजना", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना", "प्रधानमंत्री किसान सम्मान निधि"],
  answer_en: "AMRUT",
  answer_hi: "अमृत योजना",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which scheme aims to promote digital payments?",
  question_hi: "डिजिटल भुगतान को बढ़ावा देने वाली योजना कौन-सी है?",
  options_en: ["Digital India", "PMAY", "MGNREGA", "PMFBY"],
  options_hi: ["डिजिटल इंडिया", "प्रधानमंत्री आवास योजना", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "Digital India",
  answer_hi: "डिजिटल इंडिया",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which scheme provides free health check-ups to senior citizens?",
  question_hi: "वरिष्ठ नागरिकों को मुफ्त स्वास्थ्य जांच प्रदान करने वाली योजना कौन-सी है?",
  options_en: ["Rashtriya Vayoshri Yojana", "Ayushman Bharat", "PMAY", "PMJDY"],
  options_hi: ["राष्ट्रीय वयोश्री योजना", "आयुष्मान भारत", "प्रधानमंत्री आवास योजना", "प्रधानमंत्री जनधन योजना"],
  answer_en: "Rashtriya Vayoshri Yojana",
  answer_hi: "राष्ट्रीय वयोश्री योजना",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which scheme is related to skill training for youth?",
  question_hi: "युवाओं के लिए कौशल प्रशिक्षण से संबंधित योजना कौन-सी है?",
  options_en: ["PMKVY", "PMAY", "MGNREGA", "PMFBY"],
  options_hi: ["प्रधानमंत्री कौशल विकास योजना", "प्रधानमंत्री आवास योजना", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "PMKVY",
  answer_hi: "प्रधानमंत्री कौशल विकास योजना",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which scheme is aimed at women empowerment through self-help groups?",
  question_hi: "स्वयं सहायता समूहों के माध्यम से महिला सशक्तिकरण की योजना कौन-सी है?",
  options_en: ["DAY-NRLM", "PMAY", "PMFBY", "PMJDY"],
  options_hi: ["दीनदयाल अंत्योदय राष्ट्रीय ग्रामीण आजीविका मिशन", "प्रधानमंत्री आवास योजना", "प्रधानमंत्री फसल बीमा योजना", "प्रधानमंत्री जनधन योजना"],
  answer_en: "DAY-NRLM",
  answer_hi: "दीनदयाल अंत्योदय राष्ट्रीय ग्रामीण आजीविका मिशन",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which scheme aims to improve nutrition among children and mothers?",
  question_hi: "बच्चों और माताओं में पोषण सुधार के लिए कौन-सी योजना है?",
  options_en: ["POSHAN Abhiyaan", "PMAY", "MGNREGA", "PMFBY"],
  options_hi: ["पोषण अभियान", "प्रधानमंत्री आवास योजना", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "POSHAN Abhiyaan",
  answer_hi: "पोषण अभियान",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which scheme provides free gas connections to rural households?",
  question_hi: "ग्रामीण परिवारों को मुफ्त गैस कनेक्शन देने वाली योजना कौन-सी है?",
  options_en: ["Ujjwala Yojana", "PMAY", "PMFBY", "MGNREGA"],
  options_hi: ["उज्ज्वला योजना", "प्रधानमंत्री आवास योजना", "प्रधानमंत्री फसल बीमा योजना", "मनरेगा"],
  answer_en: "Ujjwala Yojana",
  answer_hi: "उज्ज्वला योजना",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which scheme aims to provide affordable housing in urban areas?",
  question_hi: "शहरी क्षेत्रों में किफायती आवास प्रदान करने वाली योजना कौन-सी है?",
  options_en: ["PMAY-U", "PMAY-G", "MGNREGA", "PMFBY"],
  options_hi: ["प्रधानमंत्री आवास योजना-शहरी", "प्रधानमंत्री आवास योजना-ग्रामीण", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "PMAY-U",
  answer_hi: "प्रधानमंत्री आवास योजना-शहरी",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which scheme provides life insurance at low premium?",
  question_hi: "कम प्रीमियम पर जीवन बीमा देने वाली योजना कौन-सी है?",
  options_en: ["PMJJBY", "PMSBY", "PMJDY", "Ayushman Bharat"],
  options_hi: ["प्रधानमंत्री जीवन ज्योति बीमा योजना", "प्रधानमंत्री सुरक्षा बीमा योजना", "प्रधानमंत्री जनधन योजना", "आयुष्मान भारत"],
  answer_en: "PMJJBY",
  answer_hi: "प्रधानमंत्री जीवन ज्योति बीमा योजना",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which scheme focuses on rural sanitation?",
  question_hi: "ग्रामीण स्वच्छता पर केंद्रित योजना कौन-सी है?",
  options_en: ["Swachh Bharat Mission (Gramin)", "AMRUT", "Smart Cities", "PMAY"],
  options_hi: ["स्वच्छ भारत मिशन (ग्रामीण)", "अमृत", "स्मार्ट सिटी", "प्रधानमंत्री आवास योजना"],
  answer_en: "Swachh Bharat Mission (Gramin)",
  answer_hi: "स्वच्छ भारत मिशन (ग्रामीण)",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which scheme promotes entrepreneurship among women?",
  question_hi: "महिलाओं में उद्यमिता को बढ़ावा देने वाली योजना कौन-सी है?",
  options_en: ["Stand Up India", "Startup India", "Skill India", "PMFBY"],
  options_hi: ["स्टैंड अप इंडिया", "स्टार्टअप इंडिया", "स्किल इंडिया", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "Stand Up India",
  answer_hi: "स्टैंड अप इंडिया",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which scheme aims to develop 100 smart cities?",
  question_hi: "100 स्मार्ट शहरों के विकास से संबंधित योजना कौन-सी है?",
  options_en: ["Smart Cities Mission", "AMRUT", "PMAY", "MGNREGA"],
  options_hi: ["स्मार्ट सिटी मिशन", "अमृत", "प्रधानमंत्री आवास योजना", "मनरेगा"],
  answer_en: "Smart Cities Mission",
  answer_hi: "स्मार्ट सिटी मिशन",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which scheme is related to education of minorities?",
  question_hi: "अल्पसंख्यकों की शिक्षा से संबंधित योजना कौन-सी है?",
  options_en: ["Nai Roshni", "PMAY", "MGNREGA", "PMFBY"],
  options_hi: ["नई रोशनी", "प्रधानमंत्री आवास योजना", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "Nai Roshni",
  answer_hi: "नई रोशनी",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which scheme aims at financial support for MSMEs?",
  question_hi: "MSME को वित्तीय सहायता देने वाली योजना कौन-सी है?",
  options_en: ["MUDRA Yojana", "PMAY", "MGNREGA", "PMFBY"],
  options_hi: ["मुद्रा योजना", "प्रधानमंत्री आवास योजना", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "MUDRA Yojana",
  answer_hi: "मुद्रा योजना",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which scheme provides free coaching to SC/ST students?",
  question_hi: "SC/ST छात्रों को मुफ्त कोचिंग देने वाली योजना कौन-सी है?",
  options_en: ["Free Coaching Scheme for SC/ST", "PMAY", "MGNREGA", "PMFBY"],
  options_hi: ["SC/ST के लिए मुफ्त कोचिंग योजना", "प्रधानमंत्री आवास योजना", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "Free Coaching Scheme for SC/ST",
  answer_hi: "SC/ST के लिए मुफ्त कोचिंग योजना",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which scheme is related to affordable air travel?",
  question_hi: "सस्ती हवाई यात्रा से संबंधित योजना कौन-सी है?",
  options_en: ["UDAN Scheme", "AMRUT", "Smart Cities", "PMAY"],
  options_hi: ["उड़ान योजना", "अमृत", "स्मार्ट सिटी", "प्रधानमंत्री आवास योजना"],
  answer_en: "UDAN Scheme",
  answer_hi: "उड़ान योजना",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which scheme aims to provide housing to rural poor?",
  question_hi: "ग्रामीण गरीबों को आवास देने की योजना कौन-सी है?",
  options_en: ["PMAY-G", "PMAY-U", "MGNREGA", "PMFBY"],
  options_hi: ["प्रधानमंत्री आवास योजना-ग्रामीण", "प्रधानमंत्री आवास योजना-शहरी", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "PMAY-G",
  answer_hi: "प्रधानमंत्री आवास योजना-ग्रामीण",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which scheme focuses on water conservation?",
  question_hi: "जल संरक्षण पर केंद्रित योजना कौन-सी है?",
  options_en: ["Atal Bhujal Yojana", "Namami Gange", "AMRUT", "PMAY"],
  options_hi: ["अटल भूजल योजना", "नमामि गंगे", "अमृत", "प्रधानमंत्री आवास योजना"],
  answer_en: "Atal Bhujal Yojana",
  answer_hi: "अटल भूजल योजना",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which scheme is related to soil health?",
  question_hi: "मृदा स्वास्थ्य से संबंधित योजना कौन-सी है?",
  options_en: ["Soil Health Card Scheme", "PMFBY", "PMJDY", "PMAY"],
  options_hi: ["मृदा स्वास्थ्य कार्ड योजना", "प्रधानमंत्री फसल बीमा योजना", "प्रधानमंत्री जनधन योजना", "प्रधानमंत्री आवास योजना"],
  answer_en: "Soil Health Card Scheme",
  answer_hi: "मृदा स्वास्थ्य कार्ड योजना",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which scheme provides LPG subsidy directly to bank accounts?",
  question_hi: "एलपीजी सब्सिडी सीधे बैंक खाते में देने वाली योजना कौन-सी है?",
  options_en: ["PAHAL", "UJALA", "PMAY", "PMFBY"],
  options_hi: ["पहल", "उजाला", "प्रधानमंत्री आवास योजना", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "PAHAL",
  answer_hi: "पहल",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which scheme supports organic farming?",
  question_hi: "जैविक खेती को बढ़ावा देने वाली योजना कौन-सी है?",
  options_en: ["Paramparagat Krishi Vikas Yojana", "PMFBY", "PMJDY", "PMAY"],
  options_hi: ["परंपरागत कृषि विकास योजना", "प्रधानमंत्री फसल बीमा योजना", "प्रधानमंत्री जनधन योजना", "प्रधानमंत्री आवास योजना"],
  answer_en: "Paramparagat Krishi Vikas Yojana",
  answer_hi: "परंपरागत कृषि विकास योजना",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which scheme aims to improve rural roads?",
  question_hi: "ग्रामीण सड़कों में सुधार से संबंधित योजना कौन-सी है?",
  options_en: ["PMGSY", "PMAY", "MGNREGA", "AMRUT"],
  options_hi: ["प्रधानमंत्री ग्राम सड़क योजना", "प्रधानमंत्री आवास योजना", "मनरेगा", "अमृत"],
  answer_en: "PMGSY",
  answer_hi: "प्रधानमंत्री ग्राम सड़क योजना",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which scheme provides free electricity connections to poor households?",
  question_hi: "गरीब परिवारों को मुफ्त बिजली कनेक्शन देने वाली योजना कौन-सी है?",
  options_en: ["Saubhagya Yojana", "UJALA", "PMAY", "PMFBY"],
  options_hi: ["सौभाग्य योजना", "उजाला", "प्रधानमंत्री आवास योजना", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "Saubhagya Yojana",
  answer_hi: "सौभाग्य योजना",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which scheme is related to food security?",
  question_hi: "खाद्य सुरक्षा से संबंधित योजना कौन-सी है?",
  options_en: ["National Food Security Act", "PMAY", "MGNREGA", "PMFBY"],
  options_hi: ["राष्ट्रीय खाद्य सुरक्षा अधिनियम", "प्रधानमंत्री आवास योजना", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "National Food Security Act",
  answer_hi: "राष्ट्रीय खाद्य सुरक्षा अधिनियम",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which scheme is aimed at development of coastal areas?",
  question_hi: "तटीय क्षेत्रों के विकास से संबंधित योजना कौन-सी है?",
  options_en: ["Sagarmala Programme", "AMRUT", "PMAY", "MGNREGA"],
  options_hi: ["सागरमाला कार्यक्रम", "अमृत", "प्रधानमंत्री आवास योजना", "मनरेगा"],
  answer_en: "Sagarmala Programme",
  answer_hi: "सागरमाला कार्यक्रम",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which scheme aims to provide social security to workers?",
  question_hi: "श्रमिकों को सामाजिक सुरक्षा प्रदान करने की योजना कौन-सी है?",
  options_en: ["Atal Pension Yojana", "PMAY", "MGNREGA", "PMFBY"],
  options_hi: ["अटल पेंशन योजना", "प्रधानमंत्री आवास योजना", "मनरेगा", "प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "Atal Pension Yojana",
  answer_hi: "अटल पेंशन योजना",
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