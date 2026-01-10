const questions = [
 {
  "num":1,
  question_en: "What is the currency of Japan?",
  question_hi: "जापान की मुद्रा क्या है?",
  options_en: ["Yen", "Won", "Yuan", "Dollar"],
  options_hi: ["येन", "वॉन", "युआन", "डॉलर"],
  answer_en: "Yen",
  answer_hi: "येन",
  attempted: false,
  selected: ""
},
{
  "num":2,
  question_en: "Which institution is known as the 'Lender of Last Resort' in India?",
  question_hi: "भारत में 'अंतिम ऋणदाता' के रूप में किस संस्था को जाना जाता है?",
  options_en: ["SBI", "RBI", "NABARD", "World Bank"],
  options_hi: ["एसबीआई", "आरबीआई", "नाबार्ड", "विश्व बैंक"],
  answer_en: "RBI",
  answer_hi: "आरबीआई",
  attempted: false,
  selected: ""
},
{
  "num":3,
  question_en: "What does GDP stand for?",
  question_hi: "GDP का क्या अर्थ है?",
  options_en: ["Gross Domestic Product", "Gross Development Product", "General Domestic Product", "General Development Product"],
  options_hi: ["सकल घरेलू उत्पाद", "सकल विकास उत्पाद", "सामान्य घरेलू उत्पाद", "सामान्य विकास उत्पाद"],
  answer_en: "Gross Domestic Product",
  answer_hi: "सकल घरेलू उत्पाद",
  attempted: false,
  selected: ""
},
{
  "num":4,
  question_en: "Which is the largest stock exchange in India?",
  question_hi: "भारत का सबसे बड़ा स्टॉक एक्सचेंज कौन सा है?",
  options_en: ["NSE", "BSE", "MCX", "USE"],
  options_hi: ["एनएसई", "बीएसई", "एमसीएक्स", "यूएसई"],
  answer_en: "NSE",
  answer_hi: "एनएसई",
  attempted: false,
  selected: ""
},
{
  "num":5,
  question_en: "What is the currency of the United Kingdom?",
  question_hi: "यूनाइटेड किंगडम की मुद्रा क्या है?",
  options_en: ["Euro", "Dollar", "Pound", "Frank"],
  options_hi: ["यूरो", "डॉलर", "पाउंड", "फ्रैंक"],
  answer_en: "Pound",
  answer_hi: "पाउंड",
  attempted: false,
  selected: ""
},
{
  "num":6,
  question_en: "Which act established the Reserve Bank of India?",
  question_hi: "भारतीय रिजर्व बैंक की स्थापना किस अधिनियम द्वारा हुई?",
  options_en: ["RBI Act, 1934", "RBI Act, 1935", "Banking Regulation Act, 1949", "Companies Act, 1956"],
  options_hi: ["आरबीआई अधिनियम, 1934", "आरबीआई अधिनियम, 1935", "बैंकिंग विनियमन अधिनियम, 1949", "कंपनी अधिनियम, 1956"],
  answer_en: "RBI Act, 1934",
  answer_hi: "आरबीआई अधिनियम, 1934",
  attempted: false,
  selected: ""
},
{
  "num":7,
  question_en: "What does GST stand for?",
  question_hi: "GST का क्या अर्थ है?",
  options_en: ["Goods and Services Tax", "General Sales Tax", "Government Service Tax", "General Service Tax"],
  options_hi: ["वस्तु और सेवा कर", "सामान्य बिक्री कर", "सरकारी सेवा कर", "सामान्य सेवा कर"],
  answer_en: "Goods and Services Tax",
  answer_hi: "वस्तु और सेवा कर",
  attempted: false,
  selected: ""
},
{
  "num":8,
  question_en: "Which bank is known as the 'Banker's Bank' in India?",
  question_hi: "भारत में 'बैंकरों का बैंक' के रूप में किस बैंक को जाना जाता है?",
  options_en: ["SBI", "PNB", "RBI", "HDFC Bank"],
  options_hi: ["एसबीआई", "पीएनबी", "आरबीआई", "एचडीएफसी बैंक"],
  answer_en: "RBI",
  answer_hi: "आरबीआई",
  attempted: false,
  selected: ""
},
{
  "num":9,
  question_en: "What is the currency of China?",
  question_hi: "चीन की मुद्रा क्या है?",
  options_en: ["Yen", "Yuan", "Won", "Ringgit"],
  options_hi: ["येन", "युआन", "वॉन", "रिंगिट"],
  answer_en: "Yuan",
  answer_hi: "युआन",
  attempted: false,
  selected: ""
},
{
  "num":10,
  question_en: "Which is the largest public sector bank in India?",
  question_hi: "भारत का सबसे बड़ा सार्वजनिक क्षेत्र का बैंक कौन सा है?",
  options_en: ["PNB", "SBI", "Bank of Baroda", "Canara Bank"],
  options_hi: ["पीएनबी", "एसबीआई", "बैंक ऑफ बड़ौदा", "केनरा बैंक"],
  answer_en: "SBI",
  answer_hi: "एसबीआई",
  attempted: false,
  selected: ""
},
{
  "num":11,
  question_en: "What does NPA stand for in banking?",
  question_hi: "बैंकिंग में NPA का क्या अर्थ है?",
  options_en: ["Non-Performing Asset", "Non-Payment Account", "Non-Productive Asset", "Non-Profit Account"],
  options_hi: ["नॉन-परफॉर्मिंग एसेट", "नॉन-पेमेंट अकाउंट", "नॉन-प्रोडक्टिव एसेट", "नॉन-प्रॉफिट अकाउंट"],
  answer_en: "Non-Performing Asset",
  answer_hi: "नॉन-परफॉर्मिंग एसेट",
  attempted: false,
  selected: ""
},
{
  "num":12,
  question_en: "Which is the regulatory body for insurance companies in India?",
  question_hi: "भारत में बीमा कंपनियों के लिए नियामक निकाय कौन सा है?",
  options_en: ["RBI", "SEBI", "IRDAI", "PFRDA"],
  options_hi: ["आरबीआई", "सेबी", "आईआरडीएआई", "पीएफआरडीए"],
  answer_en: "IRDAI",
  answer_hi: "आईआरडीएआई",
  attempted: false,
  selected: ""
},
{
  "num":13,
  question_en: "What is the currency of Russia?",
  question_hi: "रूस की मुद्रा क्या है?",
  options_en: ["Ruble", "Rupiah", "Real", "Rand"],
  options_hi: ["रूबल", "रुपियाह", "रियल", "रैंड"],
  answer_en: "Ruble",
  answer_hi: "रूबल",
  attempted: false,
  selected: ""
},
{
  "num":14,
  question_en: "Which committee recommended the introduction of GST in India?",
  question_hi: "भारत में जीएसटी लागू करने की सिफारिश किस समिति ने की?",
  options_en: ["Kelkar Committee", "Rangarajan Committee", "Chelliah Committee", "Shome Committee"],
  options_hi: ["केलकर समिति", "रंगराजन समिति", "चेल्लैया समिति", "शोम समिति"],
  answer_en: "Kelkar Committee",
  answer_hi: "केलकर समिति",
  attempted: false,
  selected: ""
},
{
  "num":15,
  question_en: "What does SEBI stand for?",
  question_hi: "सेबी का क्या अर्थ है?",
  options_en: ["Securities and Exchange Board of India", "Stock Exchange Board of India", "Securities Exchange Board of India", "Stock and Exchange Board of India"],
  options_hi: ["भारतीय प्रतिभूति और विनिमय बोर्ड", "भारतीय स्टॉक एक्सचेंज बोर्ड", "भारतीय प्रतिभूति विनिमय बोर्ड", "भारतीय स्टॉक और विनिमय बोर्ड"],
  answer_en: "Securities and Exchange Board of India",
  answer_hi: "भारतीय प्रतिभूति और विनिमय बोर्ड",
  attempted: false,
  selected: ""
},
{
  "num":16,
  question_en: "Which is the currency of Pakistan?",
  question_hi: "पाकिस्तान की मुद्रा क्या है?",
  options_en: ["Rupee", "Taka", "Rupiah", "Rial"],
  options_hi: ["रुपया", "टका", "रुपियाह", "रियाल"],
  answer_en: "Rupee",
  answer_hi: "रुपया",
  attempted: false,
  selected: ""
},
{
  "num":17,
  question_en: "What is the full form of IMF?",
  question_hi: "आईएमएफ का पूरा नाम क्या है?",
  options_en: ["International Monetary Fund", "International Money Fund", "Indian Monetary Fund", "International Market Fund"],
  options_hi: ["अंतर्राष्ट्रीय मुद्रा कोष", "अंतर्राष्ट्रीय मनी फंड", "भारतीय मुद्रा कोष", "अंतर्राष्ट्रीय बाजार कोष"],
  answer_en: "International Monetary Fund",
  answer_hi: "अंतर्राष्ट्रीय मुद्रा कोष",
  attempted: false,
  selected: ""
},
{
  "num":18,
  question_en: "Which city is known as the 'Financial Capital of India'?",
  question_hi: "किस शहर को 'भारत की वित्तीय राजधानी' के रूप में जाना जाता है?",
  options_en: ["Delhi", "Mumbai", "Kolkata", "Chennai"],
  options_hi: ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
  answer_en: "Mumbai",
  answer_hi: "मुंबई",
  attempted: false,
  selected: ""
},
{
  "num":19,
  question_en: "What is the currency of Bangladesh?",
  question_hi: "बांग्लादेश की मुद्रा क्या है?",
  options_en: ["Rupee", "Taka", "Kyat", "Rupiah"],
  options_hi: ["रुपया", "टका", "क्यात", "रुपियाह"],
  answer_en: "Taka",
  answer_hi: "टका",
  attempted: false,
  selected: ""
},
{
  "num":20,
  question_en: "Which is the first Indian bank to introduce ATM?",
  question_hi: "एटीएम शुरू करने वाला पहला भारतीय बैंक कौन सा है?",
  options_en: ["SBI", "HSBC", "Citibank", "ICICI Bank"],
  options_hi: ["एसबीआई", "एचएसबीसी", "सिटीबैंक", "आईसीआईसीआई बैंक"],
  answer_en: "HSBC",
  answer_hi: "एचएसबीसी",
  attempted: false,
  selected: ""
},
{
  "num":21,
  question_en: "What does CRR stand for in banking?",
  question_hi: "बैंकिंग में सीआरआर का क्या अर्थ है?",
  options_en: ["Cash Reserve Ratio", "Credit Reserve Ratio", "Cash Return Ratio", "Credit Return Ratio"],
  options_hi: ["नकद आरक्षित अनुपात", "क्रेडिट आरक्षित अनुपात", "नकद रिटर्न अनुपात", "क्रेडिट रिटर्न अनुपात"],
  answer_en: "Cash Reserve Ratio",
  answer_hi: "नकद आरक्षित अनुपात",
  attempted: false,
  selected: ""
},
{
  "num":22,
  question_en: "Which is the currency of Sri Lanka?",
  question_hi: "श्रीलंका की मुद्रा क्या है?",
  options_en: ["Rupee", "Rupiah", "Rufiyaa", "Ringgit"],
  options_hi: ["रुपया", "रुपियाह", "रुफिया", "रिंगिट"],
  answer_en: "Rupee",
  answer_hi: "रुपया",
  attempted: false,
  selected: ""
},
{
  "num":23,
  question_en: "What is the full form of NABARD?",
  question_hi: "नाबार्ड का पूरा नाम क्या है?",
  options_en: ["National Bank for Agriculture and Rural Development", "National Agricultural Bank and Rural Development", "National Agriculture Bank for Rural Development", "National Bank for Agricultural and Regional Development"],
  options_hi: ["राष्ट्रीय कृषि और ग्रामीण विकास बैंक", "राष्ट्रीय कृषि बैंक और ग्रामीण विकास", "राष्ट्रीय कृषि बैंक फॉर रूरल डेवलपमेंट", "राष्ट्रीय बैंक फॉर एग्रीकल्चरल एंड रीजनल डेवलपमेंट"],
  answer_en: "National Bank for Agriculture and Rural Development",
  answer_hi: "राष्ट्रीय कृषि और ग्रामीण विकास बैंक",
  attempted: false,
  selected: ""
},
{
  "num":24,
  question_en: "Which country uses 'Euro' as its currency?",
  question_hi: "कौन सा देश 'यूरो' को अपनी मुद्रा के रूप में उपयोग करता है?",
  options_en: ["United Kingdom", "Germany", "Switzerland", "Norway"],
  options_hi: ["यूनाइटेड किंगडम", "जर्मनी", "स्विट्जरलैंड", "नॉर्वे"],
  answer_en: "Germany",
  answer_hi: "जर्मनी",
  attempted: false,
  selected: ""
},
{
  "num":25,
  question_en: "What does SLR stand for in banking?",
  question_hi: "बैंकिंग में एसएलआर का क्या अर्थ है?",
  options_en: ["Statutory Liquidity Ratio", "Standard Liquidity Ratio", "Statutory Loan Ratio", "Standard Loan Ratio"],
  options_hi: ["वैधानिक तरलता अनुपात", "मानक तरलता अनुपात", "वैधानिक ऋण अनुपात", "मानक ऋण अनुपात"],
  answer_en: "Statutory Liquidity Ratio",
  answer_hi: "वैधानिक तरलता अनुपात",
  attempted: false,
  selected: ""
},
{
  "num":26,
  question_en: "Which is the currency of Nepal?",
  question_hi: "नेपाल की मुद्रा क्या है?",
  options_en: ["Rupee", "Taka", "Ngultrum", "Kyat"],
  options_hi: ["रुपया", "टका", "गुलट्रम", "क्यात"],
  answer_en: "Rupee",
  answer_hi: "रुपया",
  attempted: false,
  selected: ""
},
{
  "num":27,
  question_en: "What is the full form of WTO?",
  question_hi: "डब्ल्यूटीओ का पूरा नाम क्या है?",
  options_en: ["World Trade Organization", "World Tourism Organization", "World Transport Organization", "World Technology Organization"],
  options_hi: ["विश्व व्यापार संगठन", "विश्व पर्यटन संगठन", "विश्व परिवहन संगठन", "विश्व प्रौद्योगिकी संगठन"],
  answer_en: "World Trade Organization",
  answer_hi: "विश्व व्यापार संगठन",
  attempted: false,
  selected: ""
},
{
  "num":28,
  question_en: "Which country uses 'Dollar' as its currency?",
  question_hi: "कौन सा देश 'डॉलर' को अपनी मुद्रा के रूप में उपयोग करता है?",
  options_en: ["United States", "United Kingdom", "Japan", "China"],
  options_hi: ["संयुक्त राज्य अमेरिका", "यूनाइटेड किंगडम", "जापान", "चीन"],
  answer_en: "United States",
  answer_hi: "संयुक्त राज्य अमेरिका",
  attempted: false,
  selected: ""
},
{
  "num":29,
  question_en: "What does MSME stand for?",
  question_hi: "एमएसएमई का क्या अर्थ है?",
  options_en: ["Micro, Small and Medium Enterprises", "Medium, Small and Micro Enterprises", "Micro and Small Manufacturing Enterprises", "Medium Scale Manufacturing Enterprises"],
  options_hi: ["सूक्ष्म, लघु और मध्यम उद्यम", "मध्यम, लघु और सूक्ष्म उद्यम", "सूक्ष्म और लघु विनिर्माण उद्यम", "मध्यम पैमाने के विनिर्माण उद्यम"],
  answer_en: "Micro, Small and Medium Enterprises",
  answer_hi: "सूक्ष्म, लघु और मध्यम उद्यम",
  attempted: false,
  selected: ""
},
{
  "num":30,
  question_en: "Which is the currency of Bhutan?",
  question_hi: "भूटान की मुद्रा क्या है?",
  options_en: ["Ngultrum", "Rupee", "Taka", "Kyat"],
  options_hi: ["गुलट्रम", "रुपया", "टका", "क्यात"],
  answer_en: "Ngultrum",
  answer_hi: "गुलट्रम",
  attempted: false,
  selected: ""
},
{
  "num":31,
  question_en: "What is the full form of NPCI?",
  question_hi: "एनपीसीआई का पूरा नाम क्या है?",
  options_en: ["National Payments Corporation of India", "National Payment Council of India", "National Processing Corporation of India", "National Payment Corporation International"],
  options_hi: ["राष्ट्रीय भुगतान निगम भारत", "राष्ट्रीय भुगतान परिषद भारत", "राष्ट्रीय प्रसंस्करण निगम भारत", "राष्ट्रीय भुगतान निगम अंतर्राष्ट्रीय"],
  answer_en: "National Payments Corporation of India",
  answer_hi: "राष्ट्रीय भुगतान निगम भारत",
  attempted: false,
  selected: ""
},
{
  "num":32,
  question_en: "Which country uses 'Yen' as its currency?",
  question_hi: "कौन सा देश 'येन' को अपनी मुद्रा के रूप में उपयोग करता है?",
  options_en: ["China", "Japan", "South Korea", "Thailand"],
  options_hi: ["चीन", "जापान", "दक्षिण कोरिया", "थाईलैंड"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  "num":33,
  question_en: "What does FDI stand for?",
  question_hi: "एफडीआई का क्या अर्थ है?",
  options_en: ["Foreign Direct Investment", "Foreign Domestic Investment", "Financial Direct Investment", "Financial Domestic Investment"],
  options_hi: ["प्रत्यक्ष विदेशी निवेश", "विदेशी घरेलू निवेश", "वित्तीय प्रत्यक्ष निवेश", "वित्तीय घरेलू निवेश"],
  answer_en: "Foreign Direct Investment",
  answer_hi: "प्रत्यक्ष विदेशी निवेश",
  attempted: false,
  selected: ""
},
{
  "num":34,
  question_en: "Which is the currency of Afghanistan?",
  question_hi: "अफगानिस्तान की मुद्रा क्या है?",
  options_en: ["Afghani", "Rial", "Dinar", "Dirham"],
  options_hi: ["अफगानी", "रियाल", "दीनार", "दिरहम"],
  answer_en: "Afghani",
  answer_hi: "अफगानी",
  attempted: false,
  selected: ""
},
{
  "num":35,
  question_en: "What is the full form of UPI?",
  question_hi: "यूपीआई का पूरा नाम क्या है?",
  options_en: ["Unified Payments Interface", "United Payments Interface", "Unified Payment Interface", "United Payment Interface"],
  options_hi: ["एकीकृत भुगतान इंटरफेस", "यूनाइटेड भुगतान इंटरफेस", "एकीकृत भुगतान इंटरफ़ेस", "यूनाइटेड भुगतान इंटरफ़ेस"],
  answer_en: "Unified Payments Interface",
  answer_hi: "एकीकृत भुगतान इंटरफेस",
  attempted: false,
  selected: ""
},
{
  "num":36,
  question_en: "Which country uses 'Ruble' as its currency?",
  question_hi: "कौन सा देश 'रूबल' को अपनी मुद्रा के रूप में उपयोग करता है?",
  options_en: ["Russia", "Ukraine", "Poland", "Czech Republic"],
  options_hi: ["रूस", "यूक्रेन", "पोलैंड", "चेक गणराज्य"],
  answer_en: "Russia",
  answer_hi: "रूस",
  attempted: false,
  selected: ""
},
{
  "num":37,
  question_en: "What does NREGA stand for?",
  question_hi: "नरेगा का क्या अर्थ है?",
  options_en: ["National Rural Employment Guarantee Act", "National Rural Employment Guarantee Authority", "National Regional Employment Guarantee Act", "National Rural Employment Generation Act"],
  options_hi: ["राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम", "राष्ट्रीय ग्रामीण रोजगार गारंटी प्राधिकरण", "राष्ट्रीय क्षेत्रीय रोजगार गारंटी अधिनियम", "राष्ट्रीय ग्रामीण रोजगार उत्पादन अधिनियम"],
  answer_en: "National Rural Employment Guarantee Act",
  answer_hi: "राष्ट्रीय ग्रामीण रोजगार गारंटी अधिनियम",
  attempted: false,
  selected: ""
},
{
  "num":38,
  question_en: "Which is the currency of Saudi Arabia?",
  question_hi: "सऊदी अरब की मुद्रा क्या है?",
  options_en: ["Riyal", "Dinar", "Dirham", "Rial"],
  options_hi: ["रियाल", "दीनार", "दिरहम", "रियाल"],
  answer_en: "Riyal",
  answer_hi: "रियाल",
  attempted: false,
  selected: ""
},
{
  "num":39,
  question_en: "What is the full form of CAG?",
  question_hi: "सीएजी का पूरा नाम क्या है?",
  options_en: ["Comptroller and Auditor General", "Controller and Auditor General", "Comptroller and Accountant General", "Controller and Accountant General"],
  options_hi: ["नियंत्रक एवं महालेखापरीक्षक", "नियंत्रक और महालेखापरीक्षक", "नियंत्रक एवं महालेखाकार", "नियंत्रक और महालेखाकार"],
  answer_en: "Comptroller and Auditor General",
  answer_hi: "नियंत्रक एवं महालेखापरीक्षक",
  attempted: false,
  selected: ""
},
{
  "num":40,
  question_en: "Which country uses 'Peso' as its currency?",
  question_hi: "कौन सा देश 'पेसो' को अपनी मुद्रा के रूप में उपयोग करता है?",
  options_en: ["Mexico", "Brazil", "Argentina", "Chile"],
  options_hi: ["मेक्सिको", "ब्राज़ील", "अर्जेंटीना", "चिली"],
  answer_en: "Mexico",
  answer_hi: "मेक्सिको",
  attempted: false,
  selected: ""
},
{
  "num":41,
  question_en: "What does PPP stand for in economics?",
  question_hi: "अर्थशास्त्र में पीपीपी का क्या अर्थ है?",
  options_en: ["Purchasing Power Parity", "Public Private Partnership", "Price Purchase Parity", "Production Power Parity"],
  options_hi: ["क्रय शक्ति समता", "सार्वजनिक निजी भागीदारी", "मूल्य क्रय समता", "उत्पादन शक्ति समता"],
  answer_en: "Purchasing Power Parity",
  answer_hi: "क्रय शक्ति समता",
  attempted: false,
  selected: ""
},
{
  "num":42,
  question_en: "Which is the currency of United Arab Emirates?",
  question_hi: "संयुक्त अरब अमीरात की मुद्रा क्या है?",
  options_en: ["Dirham", "Dinar", "Riyal", "Rial"],
  options_hi: ["दिरहम", "दीनार", "रियाल", "रियाल"],
  answer_en: "Dirham",
  answer_hi: "दिरहम",
  attempted: false,
  selected: ""
},
{
  "num":43,
  question_en: "What is the full form of NITI Aayog?",
  question_hi: "नीति आयोग का पूरा नाम क्या है?",
  options_en: ["National Institution for Transforming India", "National Institute for Transforming India", "National Institution for Technology in India", "National Institute for Technology in India"],
  options_hi: ["राष्ट्रीय भारत परिवर्तन संस्थान", "राष्ट्रीय भारत परिवर्तन संस्थान", "राष्ट्रीय भारत में प्रौद्योगिकी संस्थान", "राष्ट्रीय भारत में प्रौद्योगिकी संस्थान"],
  answer_en: "National Institution for Transforming India",
  answer_hi: "राष्ट्रीय भारत परिवर्तन संस्थान",
  attempted: false,
  selected: ""
},
{
  "num":44,
  question_en: "Which country uses 'Won' as its currency?",
  question_hi: "कौन सा देश 'वॉन' को अपनी मुद्रा के रूप में उपयोग करता है?",
  options_en: ["South Korea", "North Korea", "Japan", "China"],
  options_hi: ["दक्षिण कोरिया", "उत्तर कोरिया", "जापान", "चीन"],
  answer_en: "South Korea",
  answer_hi: "दक्षिण कोरिया",
  attempted: false,
  selected: ""
},
{
  "num":45,
  question_en: "What does FII stand for?",
  question_hi: "एफआईआई का क्या अर्थ है?",
  options_en: ["Foreign Institutional Investor", "Foreign International Investor", "Financial Institutional Investor", "Financial International Investor"],
  options_hi: ["विदेशी संस्थागत निवेशक", "विदेशी अंतर्राष्ट्रीय निवेशक", "वित्तीय संस्थागत निवेशक", "वित्तीय अंतर्राष्ट्रीय निवेशक"],
  answer_en: "Foreign Institutional Investor",
  answer_hi: "विदेशी संस्थागत निवेशक",
  attempted: false,
  selected: ""
},
{
  "num":46,
  question_en: "Which is the currency of Iran?",
  question_hi: "ईरान की मुद्रा क्या है?",
  options_en: ["Rial", "Dinar", "Dirham", "Riyal"],
  options_hi: ["रियाल", "दीनार", "दिरहम", "रियाल"],
  answer_en: "Rial",
  answer_hi: "रियाल",
  attempted: false,
  selected: ""
},
{
  "num":47,
  question_en: "What is the full form of FRBM Act?",
  question_hi: "एफआरबीएम अधिनियम का पूरा नाम क्या है?",
  options_en: ["Fiscal Responsibility and Budget Management", "Financial Responsibility and Budget Management", "Fiscal Regulation and Budget Management", "Financial Regulation and Budget Management"],
  options_hi: ["राजकोषीय उत्तरदायित्व और बजट प्रबंधन", "वित्तीय उत्तरदायित्व और बजट प्रबंधन", "राजकोषीय विनियमन और बजट प्रबंधन", "वित्तीय विनियमन और बजट प्रबंधन"],
  answer_en: "Fiscal Responsibility and Budget Management",
  answer_hi: "राजकोषीय उत्तरदायित्व और बजट प्रबंधन",
  attempted: false,
  selected: ""
},
{
  "num":48,
  question_en: "Which country uses 'Franc' as its currency?",
  question_hi: "कौन सा देश 'फ्रैंक' को अपनी मुद्रा के रूप में उपयोग करता है?",
  options_en: ["Switzerland", "France", "Germany", "Belgium"],
  options_hi: ["स्विट्जरलैंड", "फ्रांस", "जर्मनी", "बेल्जियम"],
  answer_en: "Switzerland",
  answer_hi: "स्विट्जरलैंड",
  attempted: false,
  selected: ""
},
{
  "num":49,
  question_en: "What does LIC stand for?",
  question_hi: "एलआईसी का क्या अर्थ है?",
  options_en: ["Life Insurance Corporation", "Life Investment Corporation", "Life Insurance Company", "Life Investment Company"],
  options_hi: ["जीवन बीमा निगम", "जीवन निवेश निगम", "जीवन बीमा कंपनी", "जीवन निवेश कंपनी"],
  answer_en: "Life Insurance Corporation",
  answer_hi: "जीवन बीमा निगम",
  attempted: false,
  selected: ""
},
{
  "num":50,
  question_en: "Which is the currency of Turkey?",
  question_hi: "तुर्की की मुद्रा क्या है?",
  options_en: ["Lira", "Pound", "Euro", "Krona"],
  options_hi: ["लिरा", "पाउंड", "यूरो", "क्रोना"],
  answer_en: "Lira",
  answer_hi: "लिरा",
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