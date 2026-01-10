const questions = [
 {
  num:1,
  question_en: "What does GDP stand for?",
  question_hi: "जीडीपी का पूरा नाम क्या है?",
  options_en: ["Gross Domestic Product", "Gross Development Product", "General Domestic Price", "General Development Price"],
  options_hi: ["सकल घरेलू उत्पाद", "सकल विकास उत्पाद", "सामान्य घरेलू मूल्य", "सामान्य विकास मूल्य"],
  answer_en: "Gross Domestic Product",
  answer_hi: "सकल घरेलू उत्पाद",
  attempted: false,
  selected: ""
},
{
  num:2,
  question_en: "Which of the following is NOT a factor of production?",
  question_hi: "निम्नलिखित में से कौन उत्पादन का कारक नहीं है?",
  options_en: ["Land", "Labor", "Capital", "Money"],
  options_hi: ["भूमि", "श्रम", "पूंजी", "मुद्रा"],
  answer_en: "Money",
  answer_hi: "मुद्रा",
  attempted: false,
  selected: ""
},
{
  num:3,
  question_en: "What is the main function of the Reserve Bank of India (RBI)?",
  question_hi: "भारतीय रिजर्व बैंक (RBI) का मुख्य कार्य क्या है?",
  options_en: ["Issue currency", "Control inflation", "Regulate banks", "All of the above"],
  options_hi: ["मुद्रा जारी करना", "मुद्रास्फीति को नियंत्रित करना", "बैंकों को विनियमित करना", "उपरोक्त सभी"],
  answer_en: "All of the above",
  answer_hi: "उपरोक्त सभी",
  attempted: false,
  selected: ""
},
{
  num:4,
  question_en: "What does 'Inflation' refer to?",
  question_hi: "'मुद्रास्फीति' किसे संदर्भित करती है?",
  options_en: ["Increase in general price level", "Decrease in general price level", "Increase in production", "Decrease in unemployment"],
  options_hi: ["सामान्य कीमत स्तर में वृद्धि", "सामान्य कीमत स्तर में कमी", "उत्पादन में वृद्धि", "बेरोजगारी में कमी"],
  answer_en: "Increase in general price level",
  answer_hi: "सामान्य कीमत स्तर में वृद्धि",
  attempted: false,
  selected: ""
},
{
  num:5,
  question_en: "What is 'Fiscal Policy' primarily concerned with?",
  question_hi: "'राजकोषीय नीति' मुख्य रूप से किससे संबंधित है?",
  options_en: ["Government spending and taxation", "Money supply and interest rates", "Exchange rates", "Foreign trade"],
  options_hi: ["सरकारी खर्च और कराधान", "मुद्रा आपूर्ति और ब्याज दरें", "विनिमय दरें", "विदेशी व्यापार"],
  answer_en: "Government spending and taxation",
  answer_hi: "सरकारी खर्च और कराधान",
  attempted: false,
  selected: ""
},
{
  num:6,
  question_en: "What is the 'Law of Demand'?",
  question_hi: "'मांग का नियम' क्या है?",
  options_en: ["As price increases, demand decreases", "As price decreases, demand decreases", "As price increases, demand increases", "No relationship between price and demand"],
  options_hi: ["कीमत बढ़ने पर मांग घटती है", "कीमत घटने पर मांग घटती है", "कीमत बढ़ने पर मांग बढ़ती है", "कीमत और मांग के बीच कोई संबंध नहीं"],
  answer_en: "As price increases, demand decreases",
  answer_hi: "कीमत बढ़ने पर मांग घटती है",
  attempted: false,
  selected: ""
},
{
  num:7,
  question_en: "Which of the following is a direct tax?",
  question_hi: "निम्नलिखित में से कौन सा प्रत्यक्ष कर है?",
  options_en: ["Income Tax", "Goods and Services Tax (GST)", "Customs Duty", "Excise Duty"],
  options_hi: ["आय कर", "वस्तु एवं सेवा कर (जीएसटी)", "सीमा शुल्क", "उत्पाद शुल्क"],
  answer_en: "Income Tax",
  answer_hi: "आय कर",
  attempted: false,
  selected: ""
},
{
  num:8,
  question_en: "What does 'Monetary Policy' involve?",
  question_hi: "'मौद्रिक नीति' में क्या शामिल है?",
  options_en: ["Control of money supply and interest rates", "Government spending", "Taxation", "International trade"],
  options_hi: ["मुद्रा आपूर्ति और ब्याज दरों का नियंत्रण", "सरकारी खर्च", "कराधान", "अंतरराष्ट्रीय व्यापार"],
  answer_en: "Control of money supply and interest rates",
  answer_hi: "मुद्रा आपूर्ति और ब्याज दरों का नियंत्रण",
  attempted: false,
  selected: ""
},
{
  num:9,
  question_en: "What is 'Gross National Product (GNP)'?",
  question_hi: "'सकल राष्ट्रीय उत्पाद (जीएनपी)' क्या है?",
  options_en: ["GDP + net income from abroad", "GDP - depreciation", "Total value of goods produced", "Total value of services produced"],
  options_hi: ["जीडीपी + विदेशों से शुद्ध आय", "जीडीपी - मूल्यह्रास", "उत्पादित वस्तुओं का कुल मूल्य", "उत्पादित सेवाओं का कुल मूल्य"],
  answer_en: "GDP + net income from abroad",
  answer_hi: "जीडीपी + विदेशों से शुद्ध आय",
  attempted: false,
  selected: ""
},
{
  num:10,
  question_en: "What is a 'Regressive Tax'?",
  question_hi: "'प्रतिगामी कर' क्या है?",
  options_en: ["Tax rate decreases as income increases", "Tax rate increases as income increases", "Same tax rate for all", "Tax on imported goods"],
  options_hi: ["आय बढ़ने पर कर की दर घटती है", "आय बढ़ने पर कर की दर बढ़ती है", "सभी के लिए समान कर दर", "आयातित वस्तुओं पर कर"],
  answer_en: "Tax rate decreases as income increases",
  answer_hi: "आय बढ़ने पर कर की दर घटती है",
  attempted: false,
  selected: ""
},
{
  num:11,
  question_en: "What is the 'Balance of Payments'?",
  question_hi: "'भुगतान संतुलन' क्या है?",
  options_en: ["Record of all economic transactions between a country and the rest of the world", "Difference between exports and imports", "Government's budget balance", "Trade surplus"],
  options_hi: ["किसी देश और शेष विश्व के बीच सभी आर्थिक लेनदेन का रिकॉर्ड", "निर्यात और आयात के बीच का अंतर", "सरकार का बजट संतुलन", "व्यापार अधिशेष"],
  answer_en: "Record of all economic transactions between a country and the rest of the world",
  answer_hi: "किसी देश और शेष विश्व के बीच सभी आर्थिक लेनदेन का रिकॉर्ड",
  attempted: false,
  selected: ""
},
{
  num:12,
  question_en: "What does 'Opportunity Cost' mean?",
  question_hi: "'अवसर लागत' का क्या अर्थ है?",
  options_en: ["Cost of the next best alternative foregone", "Total cost of production", "Fixed cost + variable cost", "Cost of raw materials"],
  options_hi: ["त्यागे गए अगले सर्वोत्तम विकल्प की लागत", "उत्पादन की कुल लागत", "स्थिर लागत + परिवर्तनीय लागत", "कच्चे माल की लागत"],
  answer_en: "Cost of the next best alternative foregone",
  answer_hi: "त्यागे गए अगले सर्वोत्तम विकल्प की लागत",
  attempted: false,
  selected: ""
},
{
  num:13,
  question_en: "What is 'Deflation'?",
  question_hi: "'अपस्फीति' क्या है?",
  options_en: ["Decrease in general price level", "Increase in general price level", "Stagnant prices", "Rapid price increase"],
  options_hi: ["सामान्य कीमत स्तर में कमी", "सामान्य कीमत स्तर में वृद्धि", "स्थिर कीमतें", "तेजी से मूल्य वृद्धि"],
  answer_en: "Decrease in general price level",
  answer_hi: "सामान्य कीमत स्तर में कमी",
  attempted: false,
  selected: ""
},
{
  num:14,
  question_en: "What is the 'Repo Rate'?",
  question_hi: "'रेपो दर' क्या है?",
  options_en: ["Rate at which RBI lends to commercial banks", "Rate at which RBI borrows from commercial banks", "Rate at which banks lend to customers", "Exchange rate"],
  options_hi: ["वह दर जिस पर आरबीआई वाणिज्यिक बैंकों को उधार देता है", "वह दर जिस पर आरबीआई वाणिज्यिक बैंकों से उधार लेता है", "वह दर जिस पर बैंक ग्राहकों को उधार देते हैं", "विनिमय दर"],
  answer_en: "Rate at which RBI lends to commercial banks",
  answer_hi: "वह दर जिस पर आरबीआई वाणिज्यिक बैंकों को उधार देता है",
  attempted: false,
  selected: ""
},
{
  num:15,
  question_en: "What is 'Per Capita Income'?",
  question_hi: "'प्रति व्यक्ति आय' क्या है?",
  options_en: ["National Income / Population", "Total GDP", "Personal income", "Disposable income"],
  options_hi: ["राष्ट्रीय आय / जनसंख्या", "कुल जीडीपी", "व्यक्तिगत आय", "प्रयोज्य आय"],
  answer_en: "National Income / Population",
  answer_hi: "राष्ट्रीय आय / जनसंख्या",
  attempted: false,
  selected: ""
},
{
  num:16,
  question_en: "What is a 'Budget Deficit'?",
  question_hi: "'बजट घाटा' क्या है?",
  options_en: ["Government spending exceeds revenue", "Government revenue exceeds spending", "Balanced budget", "Trade deficit"],
  options_hi: ["सरकार का खर्च राजस्व से अधिक होता है", "सरकार का राजस्व खर्च से अधिक होता है", "संतुलित बजट", "व्यापार घाटा"],
  answer_en: "Government spending exceeds revenue",
  answer_hi: "सरकार का खर्च राजस्व से अधिक होता है",
  attempted: false,
  selected: ""
},
{
  num:17,
  question_en: "What is 'Supply' in economics?",
  question_hi: "अर्थशास्त्र में 'आपूर्ति' क्या है?",
  options_en: ["Quantity of a good that producers are willing to sell at a given price", "Quantity of a good that consumers want to buy", "Total production capacity", "Stock of goods"],
  options_hi: ["किसी दी गई कीमत पर उत्पादकों द्वारा बेचने को तैयार वस्तु की मात्रा", "उपभोक्ताओं द्वारा खरीदना चाहने वाली वस्तु की मात्रा", "कुल उत्पादन क्षमता", "माल का स्टॉक"],
  answer_en: "Quantity of a good that producers are willing to sell at a given price",
  answer_hi: "किसी दी गई कीमत पर उत्पादकों द्वारा बेचने को तैयार वस्तु की मात्रा",
  attempted: false,
  selected: ""
},
{
  num:18,
  question_en: "What does 'FDI' stand for?",
  question_hi: "एफडीआई का पूरा नाम क्या है?",
  options_en: ["Foreign Direct Investment", "Foreign Domestic Investment", "Financial Direct Investment", "Fiscal Domestic Investment"],
  options_hi: ["प्रत्यक्ष विदेशी निवेश", "विदेशी घरेलू निवेश", "वित्तीय प्रत्यक्ष निवेश", "राजकोषीय घरेलू निवेश"],
  answer_en: "Foreign Direct Investment",
  answer_hi: "प्रत्यक्ष विदेशी निवेश",
  attempted: false,
  selected: ""
},
{
  num:19,
  question_en: "What is 'Disposable Income'?",
  question_hi: "'प्रयोज्य आय' क्या है?",
  options_en: ["Income after taxes", "Income before taxes", "Savings", "Investment income"],
  options_hi: ["करों के बाद की आय", "करों से पहले की आय", "बचत", "निवेश आय"],
  answer_en: "Income after taxes",
  answer_hi: "करों के बाद की आय",
  attempted: false,
  selected: ""
},
{
  num:20,
  question_en: "What is the 'Multiplier Effect' in economics?",
  question_hi: "अर्थशास्त्र में 'गुणक प्रभाव' क्या है?",
  options_en: ["Initial spending leads to increased income and consumption", "Decrease in spending reduces income", "Effect of taxation on spending", "Effect of interest rates on investment"],
  options_hi: ["प्रारंभिक खर्च से आय और खपत में वृद्धि होती है", "खर्च में कमी से आय कम होती है", "खर्च पर कराधान का प्रभाव", "निवेश पर ब्याज दरों का प्रभाव"],
  answer_en: "Initial spending leads to increased income and consumption",
  answer_hi: "प्रारंभिक खर्च से आय और खपत में वृद्धि होती है",
  attempted: false,
  selected: ""
},
{
  num:21,
  question_en: "What is 'Elasticity of Demand'?",
  question_hi: "'मांग की लोच' क्या है?",
  options_en: ["Responsiveness of quantity demanded to price changes", "Total demand for a product", "Demand for luxury goods", "Inelastic demand"],
  options_hi: ["मूल्य परिवर्तन के प्रति मांग की मात्रा की प्रतिक्रियाशीलता", "किसी उत्पाद की कुल मांग", "विलासिता की वस्तुओं की मांग", "बेलोचदार मांग"],
  answer_en: "Responsiveness of quantity demanded to price changes",
  answer_hi: "मूल्य परिवर्तन के प्रति मांग की मात्रा की प्रतिक्रियाशीलता",
  attempted: false,
  selected: ""
},
{
  num:22,
  question_en: "What is 'Monopoly'?",
  question_hi: "'एकाधिकार' क्या है?",
  options_en: ["Single seller in a market", "Many sellers", "Two sellers", "Government control"],
  options_hi: ["बाजार में एक विक्रेता", "कई विक्रेता", "दो विक्रेता", "सरकारी नियंत्रण"],
  answer_en: "Single seller in a market",
  answer_hi: "बाजार में एक विक्रेता",
  attempted: false,
  selected: ""
},
{
  num:23,
  question_en: "What is 'Human Capital'?",
  question_hi: "'मानव पूंजी' क्या है?",
  options_en: ["Skills, knowledge, and experience of individuals", "Physical machinery", "Financial assets", "Natural resources"],
  options_hi: ["व्यक्तियों के कौशल, ज्ञान और अनुभव", "भौतिक मशीनरी", "वित्तीय संपत्ति", "प्राकृतिक संसाधन"],
  answer_en: "Skills, knowledge, and experience of individuals",
  answer_hi: "व्यक्तियों के कौशल, ज्ञान और अनुभव",
  attempted: false,
  selected: ""
},
{
  num:24,
  question_en: "What does 'CPI' stand for?",
  question_hi: "सीपीआई का पूरा नाम क्या है?",
  options_en: ["Consumer Price Index", "Consumer Product Index", "Cost Price Index", "Consumer Purchase Index"],
  options_hi: ["उपभोक्ता मूल्य सूचकांक", "उपभोक्ता उत्पाद सूचकांक", "लागत मूल्य सूचकांक", "उपभोक्ता खरीद सूचकांक"],
  answer_en: "Consumer Price Index",
  answer_hi: "उपभोक्ता मूल्य सूचकांक",
  attempted: false,
  selected: ""
},
{
  num:25,
  question_en: "What is a 'Progressive Tax'?",
  question_hi: "'प्रगतिशील कर' क्या है?",
  options_en: ["Tax rate increases as income increases", "Tax rate decreases as income increases", "Flat tax rate", "Tax on consumption"],
  options_hi: ["आय बढ़ने पर कर की दर बढ़ती है", "आय बढ़ने पर कर की दर घटती है", "समान कर दर", "खपत पर कर"],
  answer_en: "Tax rate increases as income increases",
  answer_hi: "आय बढ़ने पर कर की दर बढ़ती है",
  attempted: false,
  selected: ""
},
{
  num:26,
  question_en: "What is 'National Income'?",
  question_hi: "'राष्ट्रीय आय' क्या है?",
  options_en: ["Total value of goods and services produced in a country in a year", "Government revenue", "Personal income of all citizens", "Total savings"],
  options_hi: ["एक वर्ष में एक देश में उत्पादित वस्तुओं और सेवाओं का कुल मूल्य", "सरकारी राजस्व", "सभी नागरिकों की व्यक्तिगत आय", "कुल बचत"],
  answer_en: "Total value of goods and services produced in a country in a year",
  answer_hi: "एक वर्ष में एक देश में उत्पादित वस्तुओं और सेवाओं का कुल मूल्य",
  attempted: false,
  selected: ""
},
{
  num:27,
  question_en: "What is 'Stagflation'?",
  question_hi: "'मुद्रास्फीतिजनित मंदी' क्या है?",
  options_en: ["High inflation + high unemployment + stagnant demand", "Low inflation + low unemployment", "Economic growth + low inflation", "Deflation + growth"],
  options_hi: ["उच्च मुद्रास्फीति + उच्च बेरोजगारी + स्थिर मांग", "कम मुद्रास्फीति + कम बेरोजगारी", "आर्थिक विकास + कम मुद्रास्फीति", "अपस्फीति + विकास"],
  answer_en: "High inflation + high unemployment + stagnant demand",
  answer_hi: "उच्च मुद्रास्फीति + उच्च बेरोजगारी + स्थिर मांग",
  attempted: false,
  selected: ""
},
{
  num:28,
  question_en: "What is the 'Lorenz Curve' used for?",
  question_hi: "'लोरेंज वक्र' का उपयोग किस लिए किया जाता है?",
  options_en: ["Measuring income inequality", "Measuring GDP growth", "Measuring inflation", "Measuring unemployment"],
  options_hi: ["आय असमानता मापने के लिए", "जीडीपी विकास मापने के लिए", "मुद्रास्फीति मापने के लिए", "बेरोजगारी मापने के लिए"],
  answer_en: "Measuring income inequality",
  answer_hi: "आय असमानता मापने के लिए",
  attempted: false,
  selected: ""
},
{
  num:29,
  question_en: "What does 'WTO' stand for?",
  question_hi: "डब्ल्यूटीओ का पूरा नाम क्या है?",
  options_en: ["World Trade Organization", "World Tariff Organization", "World Transport Organization", "World Tourism Organization"],
  options_hi: ["विश्व व्यापार संगठन", "विश्व टैरिफ संगठन", "विश्व परिवहन संगठन", "विश्व पर्यटन संगठन"],
  answer_en: "World Trade Organization",
  answer_hi: "विश्व व्यापार संगठन",
  attempted: false,
  selected: ""
},
{
  num:30,
  question_en: "What is 'Capital Formation'?",
  question_hi: "'पूंजी निर्माण' क्या है?",
  options_en: ["Increase in stock of capital goods", "Increase in consumer goods", "Increase in money supply", "Increase in exports"],
  options_hi: ["पूंजीगत वस्तुओं के स्टॉक में वृद्धि", "उपभोक्ता वस्तुओं में वृद्धि", "मुद्रा आपूर्ति में वृद्धि", "निर्यात में वृद्धि"],
  answer_en: "Increase in stock of capital goods",
  answer_hi: "पूंजीगत वस्तुओं के स्टॉक में वृद्धि",
  attempted: false,
  selected: ""
},
{
  num:31,
  question_en: "What is the 'Gini Coefficient'?",
  question_hi: "'गिनी गुणांक' क्या है?",
  options_en: ["Measure of income inequality", "Measure of poverty", "Measure of inflation", "Measure of GDP"],
  options_hi: ["आय असमानता का माप", "गरीबी का माप", "मुद्रास्फीति का माप", "जीडीपी का माप"],
  answer_en: "Measure of income inequality",
  answer_hi: "आय असमानता का माप",
  attempted: false,
  selected: ""
},
{
  num:32,
  question_en: "What is 'Fiscal Deficit'?",
  question_hi: "'राजकोषीय घाटा' क्या है?",
  options_en: ["Total expenditure minus total receipts excluding borrowing", "Trade deficit", "Budget surplus", "Revenue deficit"],
  options_hi: ["उधार को छोड़कर कुल व्यय माइनस कुल प्राप्तियां", "व्यापार घाटा", "बजट अधिशेष", "राजस्व घाटा"],
  answer_en: "Total expenditure minus total receipts excluding borrowing",
  answer_hi: "उधार को छोड़कर कुल व्यय माइनस कुल प्राप्तियां",
  attempted: false,
  selected: ""
},
{
  num:33,
  question_en: "What is 'Microeconomics'?",
  question_hi: "'सूक्ष्मअर्थशास्त्र' क्या है?",
  options_en: ["Study of individual economic units", "Study of whole economy", "Study of international trade", "Study of government policies"],
  options_hi: ["व्यक्तिगत आर्थिक इकाइयों का अध्ययन", "संपूर्ण अर्थव्यवस्था का अध्ययन", "अंतरराष्ट्रीय व्यापार का अध्ययन", "सरकारी नीतियों का अध्ययन"],
  answer_en: "Study of individual economic units",
  answer_hi: "व्यक्तिगत आर्थिक इकाइयों का अध्ययन",
  attempted: false,
  selected: ""
},
{
  num:34,
  question_en: "What is 'Macroeconomics'?",
  question_hi: "'व्यापक अर्थशास्त्र' क्या है?",
  options_en: ["Study of whole economy", "Study of individual firms", "Study of consumer behavior", "Study of pricing"],
  options_hi: ["संपूर्ण अर्थव्यवस्था का अध्ययन", "व्यक्तिगत फर्मों का अध्ययन", "उपभोक्ता व्यवहार का अध्ययन", "मूल्य निर्धारण का अध्ययन"],
  answer_en: "Study of whole economy",
  answer_hi: "संपूर्ण अर्थव्यवस्था का अध्ययन",
  attempted: false,
  selected: ""
},
{
  num:35,
  question_en: "What is 'Comparative Advantage'?",
  question_hi: "'तुलनात्मक लाभ' क्या है?",
  options_en: ["Ability to produce at lower opportunity cost", "Ability to produce more of everything", "Absolute advantage", "Higher productivity"],
  options_hi: ["कम अवसर लागत पर उत्पादन करने की क्षमता", "हर चीज का अधिक उत्पादन करने की क्षमता", "निरपेक्ष लाभ", "उच्च उत्पादकता"],
  answer_en: "Ability to produce at lower opportunity cost",
  answer_hi: "कम अवसर लागत पर उत्पादन करने की क्षमता",
  attempted: false,
  selected: ""
},
{
  num:36,
  question_en: "What is 'Perfect Competition'?",
  question_hi: "'पूर्ण प्रतिस्पर्धा' क्या है?",
  options_en: ["Many buyers and sellers, homogeneous products", "Single seller", "Few sellers", "Differentiated products"],
  options_hi: ["कई खरीदार और विक्रेता, सजातीय उत्पाद", "एक विक्रेता", "कुछ विक्रेता", "विभेदित उत्पाद"],
  answer_en: "Many buyers and sellers, homogeneous products",
  answer_hi: "कई खरीदार और विक्रेता, सजातीय उत्पाद",
  attempted: false,
  selected: ""
},
{
  num:37,
  question_en: "What is 'Oligopoly'?",
  question_hi: "'अल्पाधिकार' क्या है?",
  options_en: ["Market dominated by a few sellers", "Single seller", "Many sellers", "Government monopoly"],
  options_hi: ["कुछ विक्रेताओं द्वारा प्रभुत्व वाला बाजार", "एक विक्रेता", "कई विक्रेता", "सरकारी एकाधिकार"],
  answer_en: "Market dominated by a few sellers",
  answer_hi: "कुछ विक्रेताओं द्वारा प्रभुत्व वाला बाजार",
  attempted: false,
  selected: ""
},
{
  num:38,
  question_en: "What is the 'Phillips Curve'?",
  question_hi: "'फिलिप्स वक्र' क्या है?",
  options_en: ["Relationship between inflation and unemployment", "Relationship between GDP and inflation", "Relationship between interest rates and investment", "Demand curve"],
  options_hi: ["मुद्रास्फीति और बेरोजगारी के बीच संबंध", "जीडीपी और मुद्रास्फीति के बीच संबंध", "ब्याज दरों और निवेश के बीच संबंध", "मांग वक्र"],
  answer_en: "Relationship between inflation and unemployment",
  answer_hi: "मुद्रास्फीति और बेरोजगारी के बीच संबंध",
  attempted: false,
  selected: ""
},
{
  num:39,
  question_en: "What is 'Moral Hazard'?",
  question_hi: "'नैतिक जोखिम' क्या है?",
  options_en: ["Taking more risks when protected from consequences", "Ethical business practices", "Risk of default", "Market risk"],
  options_hi: ["परिणामों से सुरक्षित होने पर अधिक जोखिम लेना", "नैतिक व्यावसायिक प्रथाएं", "चूक का जोखिम", "बाजार जोखिम"],
  answer_en: "Taking more risks when protected from consequences",
  answer_hi: "परिणामों से सुरक्षित होने पर अधिक जोखिम लेना",
  attempted: false,
  selected: ""
},
{
  num:40,
  question_en: "What is 'Adverse Selection'?",
  question_hi: "'प्रतिकूल चयन' क्या है?",
  options_en: ["When one party has more information than the other", "Choosing the best option", "Selection of employees", "Market selection"],
  options_hi: ["जब एक पक्ष के पास दूसरे की तुलना में अधिक जानकारी होती है", "सर्वोत्तम विकल्प चुनना", "कर्मचारियों का चयन", "बाजार चयन"],
  answer_en: "When one party has more information than the other",
  answer_hi: "जब एक पक्ष के पास दूसरे की तुलना में अधिक जानकारी होती है",
  attempted: false,
  selected: ""
},
{
  num:41,
  question_en: "What is 'Public Goods'?",
  question_hi: "'सार्वजनिक वस्तुएं' क्या हैं?",
  options_en: ["Non-excludable and non-rivalrous", "Private goods", "Consumer goods", "Capital goods"],
  options_hi: ["अबहिष्करणीय और अप्रतिद्वंद्वी", "निजी वस्तुएं", "उपभोक्ता वस्तुएं", "पूंजीगत वस्तुएं"],
  answer_en: "Non-excludable and non-rivalrous",
  answer_hi: "अबहिष्करणीय और अप्रतिद्वंद्वी",
  attempted: false,
  selected: ""
},
{
  num:42,
  question_en: "What is 'Externalities'?",
  question_hi: "'बाह्यता' क्या है?",
  options_en: ["Cost or benefit affecting third parties", "Internal costs", "Production costs", "Fixed costs"],
  options_hi: ["तीसरे पक्ष को प्रभावित करने वाली लागत या लाभ", "आंतरिक लागत", "उत्पादन लागत", "स्थिर लागत"],
  answer_en: "Cost or benefit affecting third parties",
  answer_hi: "तीसरे पक्ष को प्रभावित करने वाली लागत या लाभ",
  attempted: false,
  selected: ""
},
{
  num:43,
  question_en: "What is 'Liquidity Trap'?",
  question_hi: "'तरलता जाल' क्या है?",
  options_en: ["When interest rates are near zero but savings still high", "High inflation", "Low money supply", "High unemployment"],
  options_hi: ["जब ब्याज दरें शून्य के करीब होती हैं लेकिन बचत अभी भी अधिक होती है", "उच्च मुद्रास्फीति", "कम मुद्रा आपूर्ति", "उच्च बेरोजगारी"],
  answer_en: "When interest rates are near zero but savings still high",
  answer_hi: "जब ब्याज दरें शून्य के करीब होती हैं लेकिन बचत अभी भी अधिक होती है",
  attempted: false,
  selected: ""
},
{
  num:44,
  question_en: "What is 'Quantitative Easing'?",
  question_hi: "'मात्रात्मक सहजता' क्या है?",
  options_en: ["Central bank buys securities to increase money supply", "Reducing interest rates", "Increasing taxes", "Government spending"],
  options_hi: ["केंद्रीय बैंक मुद्रा आपूर्ति बढ़ाने के लिए प्रतिभूतियां खरीदता है", "ब्याज दरों में कमी", "करों में वृद्धि", "सरकारी खर्च"],
  answer_en: "Central bank buys securities to increase money supply",
  answer_hi: "केंद्रीय बैंक मुद्रा आपूर्ति बढ़ाने के लिए प्रतिभूतियां खरीदता है",
  attempted: false,
  selected: ""
},
{
  num:45,
  question_en: "What is 'Hyperinflation'?",
  question_hi: "'अतिमुद्रास्फीति' क्या है?",
  options_en: ["Extremely rapid inflation", "Mild inflation", "Deflation", "Stagflation"],
  options_hi: ["अत्यंत तीव्र मुद्रास्फीति", "हल्की मुद्रास्फीति", "अपस्फीति", "मुद्रास्फीतिजनित मंदी"],
  answer_en: "Extremely rapid inflation",
  answer_hi: "अत्यंत तीव्र मुद्रास्फीति",
  attempted: false,
  selected: ""
},
{
  num:46,
  question_en: "What is the 'Trickle-Down Effect'?",
  question_hi: "'ट्रिकल-डाउन प्रभाव' क्या है?",
  options_en: ["Benefits to the rich eventually benefit the poor", "Benefits to the poor directly", "Redistribution of wealth", "Tax cuts for middle class"],
  options_hi: ["अमीरों को लाभ अंततः गरीबों को लाभ पहुंचाता है", "गरीबों को सीधे लाभ", "धन का पुनर्वितरण", "मध्यम वर्ग के लिए कर कटौती"],
  answer_en: "Benefits to the rich eventually benefit the poor",
  answer_hi: "अमीरों को लाभ अंततः गरीबों को लाभ पहुंचाता है",
  attempted: false,
  selected: ""
},
{
  num:47,
  question_en: "What is 'Cost-Push Inflation'?",
  question_hi: "'लागत प्रेरित मुद्रास्फीति' क्या है?",
  options_en: ["Inflation due to increase in production costs", "Inflation due to demand increase", "Inflation due to money supply", "Imported inflation"],
  options_hi: ["उत्पादन लागत में वृद्धि के कारण मुद्रास्फीति", "मांग में वृद्धि के कारण मुद्रास्फीति", "मुद्रा आपूर्ति के कारण मुद्रास्फीति", "आयातित मुद्रास्फीति"],
  answer_en: "Inflation due to increase in production costs",
  answer_hi: "उत्पादन लागत में वृद्धि के कारण मुद्रास्फीति",
  attempted: false,
  selected: ""
},
{
  num:48,
  question_en: "What is 'Demand-Pull Inflation'?",
  question_hi: "'मांग प्रेरित मुद्रास्फीति' क्या है?",
  options_en: ["Inflation due to demand exceeding supply", "Inflation due to cost increase", "Inflation due to taxes", "Inflation due to imports"],
  options_hi: ["आपूर्ति से अधिक मांग के कारण मुद्रास्फीति", "लागत वृद्धि के कारण मुद्रास्फीति", "करों के कारण मुद्रास्फीति", "आयात के कारण मुद्रास्फीति"],
  answer_en: "Inflation due to demand exceeding supply",
  answer_hi: "आपूर्ति से अधिक मांग के कारण मुद्रास्फीति",
  attempted: false,
  selected: ""
},
{
  num:49,
  question_en: "What is the 'Laffer Curve'?",
  question_hi: "'लाफ़र वक्र' क्या है?",
  options_en: ["Relationship between tax rates and tax revenue", "Relationship between inflation and unemployment", "Demand curve", "Supply curve"],
  options_hi: ["कर दरों और कर राजस्व के बीच संबंध", "मुद्रास्फीति और बेरोजगारी के बीच संबंध", "मांग वक्र", "आपूर्ति वक्र"],
  answer_en: "Relationship between tax rates and tax revenue",
  answer_hi: "कर दरों और कर राजस्व के बीच संबंध",
  attempted: false,
  selected: ""
},
{
  num:50,
  question_en: "What is 'SEZ'?",
  question_hi: "एसईजी का पूरा नाम क्या है?",
  options_en: ["Special Economic Zone", "Special Export Zone", "Special Employment Zone", "Special Enterprise Zone"],
  options_hi: ["विशेष आर्थिक क्षेत्र", "विशेष निर्यात क्षेत्र", "विशेष रोजगार क्षेत्र", "विशेष उद्यम क्षेत्र"],
  answer_en: "Special Economic Zone",
  answer_hi: "विशेष आर्थिक क्षेत्र",
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