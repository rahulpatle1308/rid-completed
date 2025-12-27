const questions = [
{
  num: 1,
  question_en: "The 'Arrow's Impossibility Theorem' deals with:",
  question_hi: "'एरो की असंभवता प्रमेय' संबंधित है:",
  options_en: ["Social choice theory", "Game theory", "General equilibrium", "Welfare economics"],
  options_hi: ["सामाजिक चयन सिद्धांत", "खेल सिद्धांत", "सामान्य संतुलन", "कल्याण अर्थशास्त्र"],
  answer_en: "Social choice theory",
  answer_hi: "सामाजिक चयन सिद्धांत",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "The 'Baumol-Tobin Model' explains:",
  question_hi: "'बाउमोल-टोबिन मॉडल' समझाता है:",
  options_en: ["Money demand and transaction costs", "Inventory management", "Portfolio selection", "Consumption behavior"],
  options_hi: ["मुद्रा मांग और लेनदेन लागत", "सूची प्रबंधन", "पोर्टफोलियो चयन", "उपभोग व्यवहार"],
  answer_en: "Money demand and transaction costs",
  answer_hi: "मुद्रा मांग और लेनदेन लागत",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "The 'Diamond-Dybvig Model' is about:",
  question_hi: "'डायमंड-डायबविग मॉडल' संबंधित है:",
  options_en: ["Bank runs and financial crises", "Economic growth", "International trade", "Labor markets"],
  options_hi: ["बैंक रन और वित्तीय संकट", "आर्थिक विकास", "अंतरराष्ट्रीय व्यापार", "श्रम बाजार"],
  answer_en: "Bank runs and financial crises",
  answer_hi: "बैंक रन और वित्तीय संकट",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "The 'Edgeworth Box' is used to analyze:",
  question_hi: "'एजवर्थ बॉक्स' का उपयोग किया जाता है विश्लेषण के लिए:",
  options_en: ["Exchange and allocation efficiency", "Production possibilities", "Market equilibrium", "Consumer behavior"],
  options_hi: ["विनिमय और आवंटन दक्षता", "उत्पादन संभावनाएं", "बाजार संतुलन", "उपभोक्ता व्यवहार"],
  answer_en: "Exchange and allocation efficiency",
  answer_hi: "विनिमय और आवंटन दक्षता",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "The 'Feldstein-Horioka Puzzle' refers to:",
  question_hi: "'फेल्डस्टीन-होरिओका पहेली' संदर्भित करता है:",
  options_en: ["High correlation between savings and investment in open economies", "Low capital mobility", "Exchange rate volatility", "Trade imbalances"],
  options_hi: ["खुली अर्थव्यवस्थाओं में बचत और निवेश के बीच उच्च सहसंबंध", "कम पूंजी गतिशीलता", "विनिमय दर अस्थिरता", "व्यापार असंतुलन"],
  answer_en: "High correlation between savings and investment in open economies",
  answer_hi: "खुली अर्थव्यवस्थाओं में बचत और निवेश के बीच उच्च सहसंबंध",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "The 'Gibrat's Law' states that:",
  question_hi: "'जिब्राट का नियम' कहता है कि:",
  options_en: ["Firm growth is independent of size", "Prices follow random walk", "Income distribution is log-normal", "All markets clear"],
  options_hi: ["फर्म का विकास आकार से स्वतंत्र होता है", "कीमतें यादृच्छिक चलन का अनुसरण करती हैं", "आय वितरण लॉग-सामान्य होता है", "सभी बाजार साफ होते हैं"],
  answer_en: "Firm growth is independent of size",
  answer_hi: "फर्म का विकास आकार से स्वतंत्र होता है",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "The 'Hotelling's Rule' in resource economics states:",
  question_hi: "संसाधन अर्थशास्त्र में 'होटेलिंग का नियम' कहता है:",
  options_en: ["Price of exhaustible resource rises at interest rate", "Optimal extraction rate", "Renewable resource management", "Resource depletion patterns"],
  options_hi: ["समाप्त होने वाले संसाधन की कीमत ब्याज दर पर बढ़ती है", "इष्टतम निष्कर्षण दर", "नवीकरणीय संसाधन प्रबंधन", "संसाधन क्षय पैटर्न"],
  answer_en: "Price of exhaustible resource rises at interest rate",
  answer_hi: "समाप्त होने वाले संसाधन की कीमत ब्याज दर पर बढ़ती है",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "The 'Invisible Hand' concept is associated with:",
  question_hi: "'अदृश्य हाथ' की अवधारणा संबंधित है:",
  options_en: ["Adam Smith", "John Maynard Keynes", "Karl Marx", "David Ricardo"],
  options_hi: ["एडम स्मिथ", "जॉन मेनार्ड कीन्स", "कार्ल मार्क्स", "डेविड रिकार्डो"],
  answer_en: "Adam Smith",
  answer_hi: "एडम स्मिथ",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "The 'Juglar Cycle' refers to business cycles of approximately:",
  question_hi: "'जुगलर चक्र' संदर्भित करता है व्यापार चक्र लगभग:",
  options_en: ["7-11 years", "3-5 years", "15-25 years", "40-60 years"],
  options_hi: ["7-11 वर्ष", "3-5 वर्ष", "15-25 वर्ष", "40-60 वर्ष"],
  answer_en: "7-11 years",
  answer_hi: "7-11 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "The 'Kalecki's Profit Equation' shows that profits depend on:",
  question_hi: "'कालेकी का लाभ समीकरण' दिखाता है कि लाभ निर्भर करता है:",
  options_en: ["Investment and capitalist consumption", "Wages and productivity", "Government spending", "Exports"],
  options_hi: ["निवेश और पूंजीवादी उपभोग", "मजदूरी और उत्पादकता", "सरकारी खर्च", "निर्यात"],
  answer_en: "Investment and capitalist consumption",
  answer_hi: "निवेश और पूंजीवादी उपभोग",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "The 'Lucas Critique' argues that:",
  question_hi: "'लुकास आलोचना' तर्क देती है कि:",
  options_en: ["Econometric models fail when policies change", "Markets are always efficient", "Government intervention is harmful", "Rational expectations matter"],
  options_hi: ["जब नीतियां बदलती हैं तो अर्थमितीय मॉडल विफल हो जाते हैं", "बाजार हमेशा कुशल होते हैं", "सरकारी हस्तक्षेप हानिकारक है", "तर्कसंगत अपेक्षाएं मायने रखती हैं"],
  answer_en: "Econometric models fail when policies change",
  answer_hi: "जब नीतियां बदलती हैं तो अर्थमितीय मॉडल विफल हो जाते हैं",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "The 'Marshall-Lerner Condition' states that devaluation improves trade balance if:",
  question_hi: "'मार्शल-लर्नर शर्त' कहती है कि अवमूल्यन व्यापार संतुलन में सुधार करता है यदि:",
  options_en: ["Sum of import and export elasticities > 1", "Exchange rate is flexible", "Interest rates are stable", "Inflation is controlled"],
  options_hi: ["आयात और निर्यात लोच का योग > 1", "विनिमय दर लचीली है", "ब्याज दरें स्थिर हैं", "मुद्रास्फीति नियंत्रित है"],
  answer_en: "Sum of import and export elasticities > 1",
  answer_hi: "आयात और निर्यात लोच का योग > 1",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "The 'Nash Bargaining Solution' is used in:",
  question_hi: "'नैश सौदेबाजी समाधान' का उपयोग किया जाता है:",
  options_en: ["Game theory and cooperative bargaining", "Labor negotiations", "International treaties", "All of the above"],
  options_hi: ["खेल सिद्धांत और सहकारी सौदेबाजी", "श्रम वार्ता", "अंतरराष्ट्रीय संधियाँ", "उपरोक्त सभी"],
  answer_en: "All of the above",
  answer_hi: "उपरोक्त सभी",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "The 'Offer Curve' in international trade represents:",
  question_hi: "अंतरराष्ट्रीय व्यापार में 'ऑफर कर्व' प्रतिनिधित्व करता है:",
  options_en: ["Trading possibilities of a country", "Production possibilities", "Consumption patterns", "Exchange rate movements"],
  options_hi: ["देश की व्यापार संभावनाएं", "उत्पादन संभावनाएं", "उपभोग पैटर्न", "विनिमय दर आंदोलन"],
  answer_en: "Trading possibilities of a country",
  answer_hi: "देश की व्यापार संभावनाएं",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "The 'Pigouvian Tax' is designed to:",
  question_hi: "'पिगोवियन टैक्स' डिजाइन किया गया है:",
  options_en: ["Correct negative externalities", "Raise government revenue", "Redistribute income", "Control inflation"],
  options_hi: ["नकारात्मक बाह्यताओं को सुधारने के लिए", "सरकारी राजस्व बढ़ाने के लिए", "आय पुनर्वितरण के लिए", "मुद्रास्फीति नियंत्रण के लिए"],
  answer_en: "Correct negative externalities",
  answer_hi: "नकारात्मक बाह्यताओं को सुधारने के लिए",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "The 'Ramsey Rule' in optimal taxation suggests that:",
  question_hi: "इष्टतम कराधान में 'रैमसे नियम' सुझाव देता है कि:",
  options_en: ["Tax rates should be inversely related to demand elasticity", "Tax all goods equally", "Tax only luxuries", "No taxation is optimal"],
  options_hi: ["कर दरें मांग लोच से विपरीत रूप से संबंधित होनी चाहिए", "सभी वस्तुओं पर समान रूप से कर लगाएं", "केवल विलासिता की वस्तुओं पर कर लगाएं", "कोई कराधान इष्टतम नहीं है"],
  answer_en: "Tax rates should be inversely related to demand elasticity",
  answer_hi: "कर दरें मांग लोच से विपरीत रूप से संबंधित होनी चाहिए",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "The 'Samuelson Condition' for optimal public goods provision requires:",
  question_hi: "इष्टतम सार्वजनिक वस्तु प्रावधान के लिए 'सैमुएलसन शर्त' आवश्यक है:",
  options_en: ["Sum of marginal rates of substitution equals marginal rate of transformation", "Marginal cost equals price", "Supply equals demand", "Zero economic profit"],
  options_hi: ["प्रतिस्थापन की सीमांत दरों का योग परिवर्तन की सीमांत दर के बराबर होता है", "सीमांत लागत मूल्य के बराबर होती है", "आपूर्ति मांग के बराबर होती है", "शून्य आर्थिक लाभ"],
  answer_en: "Sum of marginal rates of substitution equals marginal rate of transformation",
  answer_hi: "प्रतिस्थापन की सीमांत दरों का योग परिवर्तन की सीमांत दर के बराबर होता है",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "The 'Tinbergen Rule' in economic policy states that:",
  question_hi: "आर्थिक नीति में 'टिनबर्जन नियम' कहता है कि:",
  options_en: ["Number of policy instruments must equal number of policy targets", "Policy should be simple", "Markets should be free", "Government should intervene minimally"],
  options_hi: ["नीति साधनों की संख्या नीति लक्ष्यों की संख्या के बराबर होनी चाहिए", "नीति सरल होनी चाहिए", "बाजार मुक्त होने चाहिए", "सरकार को न्यूनतम हस्तक्षेप करना चाहिए"],
  answer_en: "Number of policy instruments must equal number of policy targets",
  answer_hi: "नीति साधनों की संख्या नीति लक्ष्यों की संख्या के बराबर होनी चाहिए",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "The 'Uzawa-Lucas Model' emphasizes the role of:",
  question_hi: "'उज़ावा-लुकास मॉडल' इसकी भूमिका पर जोर देता है:",
  options_en: ["Human capital in economic growth", "Physical capital", "Natural resources", "Technology transfer"],
  options_hi: ["आर्थिक विकास में मानव पूंजी", "भौतिक पूंजी", "प्राकृतिक संसाधन", "प्रौद्योगिकी हस्तांतरण"],
  answer_en: "Human capital in economic growth",
  answer_hi: "आर्थिक विकास में मानव पूंजी",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "The 'Veblen Goods' are characterized by:",
  question_hi: "'वेबलेन वस्तुएं' विशेषता हैं:",
  options_en: ["Positive price-demand relationship", "Negative price-demand relationship", "Zero income elasticity", "Perfect substitutes"],
  options_hi: ["सकारात्मक मूल्य-मांग संबंध", "नकारात्मक मूल्य-मांग संबंध", "शून्य आय लोच", "पूर्ण विकल्प"],
  answer_en: "Positive price-demand relationship",
  answer_hi: "सकारात्मक मूल्य-मांग संबंध",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "The 'Walras' Law' states that:",
  question_hi: "'वालरस का नियम' कहता है कि:",
  options_en: ["Sum of excess demands equals zero", "Markets always clear", "Prices adjust to equilibrium", "Supply creates demand"],
  options_hi: ["अतिरिक्त मांगों का योग शून्य के बराबर होता है", "बाजार हमेशा साफ होते हैं", "कीमतें संतुलन में समायोजित होती हैं", "आपूर्ति मांग पैदा करती है"],
  answer_en: "Sum of excess demands equals zero",
  answer_hi: "अतिरिक्त मांगों का योग शून्य के बराबर होता है",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "The 'Zellner's Seemingly Unrelated Regressions' is used for:",
  question_hi: "'जेलनर के प्रतीत होने वाले असंबंधित प्रतिगमन' का उपयोग किया जाता है:",
  options_en: ["Estimating equations with correlated errors", "Time series analysis", "Panel data", "Cross-sectional data"],
  options_hi: ["सहसंबद्ध त्रुटियों वाले समीकरणों का अनुमान लगाना", "समय श्रृंखला विश्लेषण", "पैनल डेटा", "क्रॉस-सेक्शनल डेटा"],
  answer_en: "Estimating equations with correlated errors",
  answer_hi: "सहसंबद्ध त्रुटियों वाले समीकरणों का अनुमान लगाना",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "The 'Akerlof's Market for Lemons' paper illustrates:",
  question_hi: "'अकर्लोफ का मार्केट फॉर लेमन्स' पेपर दिखाता है:",
  options_en: ["Adverse selection in markets with asymmetric information", "Moral hazard", "Principal-agent problems", "All of the above"],
  options_hi: ["असममित जानकारी वाले बाजारों में प्रतिकूल चयन", "नैतिक खतरा", "प्रिंसिपल-एजेंट समस्याएं", "उपरोक्त सभी"],
  answer_en: "Adverse selection in markets with asymmetric information",
  answer_hi: "असममित जानकारी वाले बाजारों में प्रतिकूल चयन",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "The 'Bretton Woods System' was based on:",
  question_hi: "'ब्रेटन वुड्स प्रणाली' आधारित थी:",
  options_en: ["Fixed exchange rates with gold convertibility", "Floating exchange rates", "Gold standard", "Bimetallism"],
  options_hi: ["सोने की परिवर्तनीयता के साथ निश्चित विनिमय दरें", "चल विनिमय दरें", "सोने का मानक", "द्विधातु मानक"],
  answer_en: "Fixed exchange rates with gold convertibility",
  answer_hi: "सोने की परिवर्तनीयता के साथ निश्चित विनिमय दरें",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "The 'Calvo Pricing' model explains:",
  question_hi: "'काल्वो प्राइसिंग' मॉडल समझाता है:",
  options_en: ["Sticky prices in New Keynesian economics", "Flexible prices", "Market clearing", "Perfect competition"],
  options_hi: ["नव कीन्सियन अर्थशास्त्र में चिपचिपी कीमतें", "लचीली कीमतें", "बाजार सफाई", "पूर्ण प्रतिस्पर्धा"],
  answer_en: "Sticky prices in New Keynesian economics",
  answer_hi: "नव कीन्सियन अर्थशास्त्र में चिपचिपी कीमतें",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "The 'Dornbusch Overshooting Model' explains:",
  question_hi: "'डोर्नबुश ओवरशूटिंग मॉडल' समझाता है:",
  options_en: ["Exchange rate volatility exceeding fundamentals", "Interest rate parity", "Purchasing power parity", "Trade balance adjustments"],
  options_hi: ["मूलभूत सिद्धांतों से अधिक विनिमय दर अस्थिरता", "ब्याज दर समता", "क्रय शक्ति समता", "व्यापार संतुलन समायोजन"],
  answer_en: "Exchange rate volatility exceeding fundamentals",
  answer_hi: "मूलभूत सिद्धांतों से अधिक विनिमय दर अस्थिरता",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "The 'Engel Curve' shows the relationship between:",
  question_hi: "'एंगेल कर्व' दिखाता है संबंध:",
  options_en: ["Income and quantity demanded of a good", "Price and quantity", "Substitutes and complements", "Production and cost"],
  options_hi: ["आय और किसी वस्तु की मांगी गई मात्रा", "कीमत और मात्रा", "विकल्प और पूरक", "उत्पादन और लागत"],
  answer_en: "Income and quantity demanded of a good",
  answer_hi: "आय और किसी वस्तु की मांगी गई मात्रा",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "The 'Friedman's k-percent rule' suggests that:",
  question_hi: "'फ्रीडमैन का k-प्रतिशत नियम' सुझाव देता है:",
  options_en: ["Money supply should grow at constant rate", "Interest rates should be fixed", "Government should balance budget", "Taxes should be proportional"],
  options_hi: ["मुद्रा आपूर्ति स्थिर दर पर बढ़नी चाहिए", "ब्याज दरें निश्चित होनी चाहिए", "सरकार को बजट संतुलित करना चाहिए", "कर आनुपातिक होने चाहिए"],
  answer_en: "Money supply should grow at constant rate",
  answer_hi: "मुद्रा आपूर्ति स्थिर दर पर बढ़नी चाहिए",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "The 'Gresham's Law' states that:",
  question_hi: "'ग्रेशम का नियम' कहता है कि:",
  options_en: ["Bad money drives out good money", "Supply creates demand", "Prices follow money supply", "Interest rates affect investment"],
  options_hi: ["खराब पैसा अच्छे पैसे को बाहर निकाल देता है", "आपूर्ति मांग पैदा करती है", "कीमतें मुद्रा आपूर्ति का अनुसरण करती हैं", "ब्याज दरें निवेश को प्रभावित करती हैं"],
  answer_en: "Bad money drives out good money",
  answer_hi: "खराब पैसा अच्छे पैसे को बाहर निकाल देता है",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "The 'Hume's Price-Specie Flow Mechanism' explains:",
  question_hi: "'ह्यूम की प्राइस-स्पीशी फ्लो मैकेनिज्म' समझाता है:",
  options_en: ["Automatic adjustment of trade imbalances under gold standard", "Inflation dynamics", "Exchange rate determination", "Capital flows"],
  options_hi: ["सोने के मानक के तहत व्यापार असंतुलन का स्वचालित समायोजन", "मुद्रास्फीति गतिशीलता", "विनिमय दर निर्धारण", "पूंजी प्रवाह"],
  answer_en: "Automatic adjustment of trade imbalances under gold standard",
  answer_hi: "सोने के मानक के तहत व्यापार असंतुलन का स्वचालित समायोजन",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "The 'Isard's Location Theory' is about:",
  question_hi: "'इजार्ड का स्थान सिद्धांत' संबंधित है:",
  options_en: ["Spatial economics and industrial location", "Urban economics", "Regional development", "All of the above"],
  options_hi: ["स्थानिक अर्थशास्त्र और औद्योगिक स्थान", "शहरी अर्थशास्त्र", "क्षेत्रीय विकास", "उपरोक्त सभी"],
  answer_en: "All of the above",
  answer_hi: "उपरोक्त सभी",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "The 'Jevons Paradox' states that:",
  question_hi: "'जेवोंस विरोधाभास' कहता है कि:",
  options_en: ["Increased efficiency leads to increased consumption", "Technology reduces employment", "Markets are inefficient", "Growth causes inequality"],
  options_hi: ["बढ़ी हुई दक्षता बढ़े हुए उपभोग की ओर ले जाती है", "प्रौद्योगिकी रोजगार कम करती है", "बाजार अकुशल हैं", "विकास असमानता का कारण बनता है"],
  answer_en: "Increased efficiency leads to increased consumption",
  answer_hi: "बढ़ी हुई दक्षता बढ़े हुए उपभोग की ओर ले जाती है",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "The 'Kitchin Cycle' has a period of about:",
  question_hi: "'किचिन चक्र' की अवधि लगभग है:",
  options_en: ["3-5 years", "7-11 years", "15-25 years", "40-60 years"],
  options_hi: ["3-5 वर्ष", "7-11 वर्ष", "15-25 वर्ष", "40-60 वर्ष"],
  answer_en: "3-5 years",
  answer_hi: "3-5 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "The 'Leontief Paradox' refers to:",
  question_hi: "'लियोन्टीफ विरोधाभास' संदर्भित करता है:",
  options_en: ["US exporting labor-intensive goods despite capital abundance", "Trade imbalances", "Factor price equalization failure", "Gains from trade controversy"],
  options_hi: ["पूंजी प्रचुरता के बावजूद अमेरिका श्रम-गहन वस्तुओं का निर्यात कर रहा है", "व्यापार असंतुलन", "कारक मूल्य समीकरण विफलता", "व्यापार विवाद से लाभ"],
  answer_en: "US exporting labor-intensive goods despite capital abundance",
  answer_hi: "पूंजी प्रचुरता के बावजूद अमेरिका श्रम-गहन वस्तुओं का निर्यात कर रहा है",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "The 'Myrdal's Principle of Circular Cumulative Causation' explains:",
  question_hi: "'मिर्डल का परिपत्र संचयी कारण सिद्धांत' समझाता है:",
  options_en: ["Regional inequalities and path dependence", "Economic growth", "Trade patterns", "Income distribution"],
  options_hi: ["क्षेत्रीय असमानताएं और पथ निर्भरता", "आर्थिक विकास", "व्यापार पैटर्न", "आय वितरण"],
  answer_en: "Regional inequalities and path dependence",
  answer_hi: "क्षेत्रीय असमानताएं और पथ निर्भरता",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "The 'Nurkse's Balanced Growth Theory' advocates:",
  question_hi: "'नर्कसे का संतुलित विकास सिद्धांत' वकालत करता है:",
  options_en: ["Simultaneous investment in multiple sectors", "Focus on one leading sector", "Export-led growth", "Import substitution"],
  options_hi: ["कई क्षेत्रों में एक साथ निवेश", "एक प्रमुख क्षेत्र पर ध्यान केंद्रित करना", "निर्यात-नेतृत्व वाली विकास", "आयात प्रतिस्थापन"],
  answer_en: "Simultaneous investment in multiple sectors",
  answer_hi: "कई क्षेत्रों में एक साथ निवेश",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "The 'Ohlin's Interregional and International Trade' extended:",
  question_hi: "'ओहलिन का अंतरक्षेत्रीय और अंतर्राष्ट्रीय व्यापार' विस्तारित किया:",
  options_en: ["Heckscher-Ohlin model", "Ricardo's theory", "Adam Smith's views", "Mercantilist ideas"],
  options_hi: ["हेक्शर-ओहलिन मॉडल", "रिकार्डो का सिद्धांत", "एडम स्मिथ के विचार", "व्यापारवादी विचार"],
  answer_en: "Heckscher-Ohlin model",
  answer_hi: "हेक्शर-ओहलिन मॉडल",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "The 'Pasinetti's Theorem' in growth theory shows:",
  question_hi: "विकास सिद्धांत में 'पासिनेट्टी का प्रमेय' दिखाता है:",
  options_en: ["Workers' savings rate affects long-run growth", "Capitalists dominate growth", "Technology is exogenous", "Population growth matters most"],
  options_hi: ["श्रमिकों की बचत दर दीर्घकालिक विकास को प्रभावित करती है", "पूंजीपति विकास पर हावी होते हैं", "प्रौद्योगिकी बाहरी है", "जनसंख्या वृद्धि सबसे अधिक मायने रखती है"],
  answer_en: "Workers' savings rate affects long-run growth",
  answer_hi: "श्रमिकों की बचत दर दीर्घकालिक विकास को प्रभावित करती है",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "The 'Quesnay's Tableau Économique' was an early:",
  question_hi: "'क्वेसने का टेबल्यू इकोनॉमिक' एक प्रारंभिक था:",
  options_en: ["Input-output model of circular flow", "Supply-demand model", "Growth model", "Trade model"],
  options_hi: ["परिपत्र प्रवाह का इनपुट-आउटपुट मॉडल", "आपूर्ति-मांग मॉडल", "विकास मॉडल", "व्यापार मॉडल"],
  answer_en: "Input-output model of circular flow",
  answer_hi: "परिपत्र प्रवाह का इनपुट-आउटपुट मॉडल",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "The 'Rostow's Take-off Stage' requires:",
  question_hi: "'रोस्टो का टेक-ऑफ स्टेज' आवश्यक है:",
  options_en: ["Rapid industrialization and investment", "Agricultural revolution", "Political stability", "Foreign aid"],
  options_hi: ["तेजी से औद्योगिकीकरण और निवेश", "कृषि क्रांति", "राजनीतिक स्थिरता", "विदेशी सहायता"],
  answer_en: "Rapid industrialization and investment",
  answer_hi: "तेजी से औद्योगिकीकरण और निवेश",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "The 'Sraffa's Production of Commodities by Means of Commodities' criticized:",
  question_hi: "'स्राफा का प्रोडक्शन ऑफ कमोडिटीज बाय मीन्स ऑफ कमोडिटीज' ने आलोचना की:",
  options_en: ["Neoclassical capital theory", "Marxist theory", "Keynesian economics", "Monetarism"],
  options_hi: ["नवशास्त्रीय पूंजी सिद्धांत", "मार्क्सवादी सिद्धांत", "कीन्सियन अर्थशास्त्र", "मुद्रावाद"],
  answer_en: "Neoclassical capital theory",
  answer_hi: "नवशास्त्रीय पूंजी सिद्धांत",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "The 'Thünen's Rings' model explains:",
  question_hi: "'थ्यूनन के रिंग्स' मॉडल समझाता है:",
  options_en: ["Agricultural land use patterns", "Industrial location", "Urban rent", "Transport costs"],
  options_hi: ["कृषि भूमि उपयोग पैटर्न", "औद्योगिक स्थान", "शहरी किराया", "परिवहन लागत"],
  answer_en: "Agricultural land use patterns",
  answer_hi: "कृषि भूमि उपयोग पैटर्न",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "The 'U-shaped Cost Curve' is characteristic of:",
  question_hi: "'U-आकार की लागत वक्र' विशेषता है:",
  options_en: ["Short-run average total cost", "Long-run average cost", "Marginal cost", "Fixed cost"],
  options_hi: ["अल्पकालिक औसत कुल लागत", "दीर्घकालिक औसत लागत", "सीमांत लागत", "निश्चित लागत"],
  answer_en: "Short-run average total cost",
  answer_hi: "अल्पकालिक औसत कुल लागत",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "The 'Verdoorn Coefficient' measures:",
  question_hi: "'वेर्डूर्न गुणांक' मापता है:",
  options_en: ["Relationship between output growth and productivity growth", "Capital-output ratio", "Labor productivity", "Technical progress"],
  options_hi: ["उत्पादन विकास और उत्पादकता विकास के बीच संबंध", "पूंजी-उत्पादन अनुपात", "श्रम उत्पादकता", "तकनीकी प्रगति"],
  answer_en: "Relationship between output growth and productivity growth",
  answer_hi: "उत्पादन विकास और उत्पादकता विकास के बीच संबंध",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "The 'Wicksell's Cumulative Process' explains:",
  question_hi: "'विक्सेल का संचयी प्रक्रिया' समझाता है:",
  options_en: ["Inflation through divergence of natural and market rates", "Business cycles", "Economic growth", "Income distribution"],
  options_hi: ["प्राकृतिक और बाजार दरों के विचलन के माध्यम से मुद्रास्फीति", "व्यापार चक्र", "आर्थिक विकास", "आय वितरण"],
  answer_en: "Inflation through divergence of natural and market rates",
  answer_hi: "प्राकृतिक और बाजार दरों के विचलन के माध्यम से मुद्रास्फीति",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "The 'X-inefficiency' concept was introduced by:",
  question_hi: "'X-अक्षमता' अवधारणा पेश की गई थी:",
  options_en: ["Harvey Leibenstein", "Joseph Stiglitz", "Amartya Sen", "Paul Krugman"],
  options_hi: ["हार्वे लीबेनस्टीन", "जोसेफ स्टिग्लिट्ज", "अमर्त्य सेन", "पॉल क्रुगमैन"],
  answer_en: "Harvey Leibenstein",
  answer_hi: "हार्वे लीबेनस्टीन",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "The 'Young's Theorem' in production theory states:",
  question_hi: "उत्पादन सिद्धांत में 'यंग का प्रमेय' कहता है:",
  options_en: ["Symmetry of cross partial derivatives", "Diminishing marginal returns", "Returns to scale", "Cost minimization"],
  options_hi: ["क्रॉस आंशिक व्युत्पन्न की समरूपता", "ह्रासमान सीमांत प्रतिफल", "पैमाने के प्रतिफल", "लागत न्यूनीकरण"],
  answer_en: "Symmetry of cross partial derivatives",
  answer_hi: "क्रॉस आंशिक व्युत्पन्न की समरूपता",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "The 'Zellner's Bayesian Method of Moments' is used in:",
  question_hi: "'जेलनर का बायेसियन मेथड ऑफ मोमेंट्स' का उपयोग किया जाता है:",
  options_en: ["Econometric estimation", "Statistical inference", "Forecasting", "All of the above"],
  options_hi: ["अर्थमितीय अनुमान", "सांख्यिकीय अनुमान", "पूर्वानुमान", "उपरोक्त सभी"],
  answer_en: "All of the above",
  answer_hi: "उपरोक्त सभी",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "The 'Accelerator Principle' in investment theory states that:",
  question_hi: "निवेश सिद्धांत में 'त्वरक सिद्धांत' कहता है कि:",
  options_en: ["Investment depends on change in output", "Investment depends on interest rates", "Investment is autonomous", "Investment equals savings"],
  options_hi: ["निवेश उत्पादन में परिवर्तन पर निर्भर करता है", "निवेश ब्याज दरों पर निर्भर करता है", "निवेश स्वायत्त है", "निवेश बचत के बराबर है"],
  answer_en: "Investment depends on change in output",
  answer_hi: "निवेश उत्पादन में परिवर्तन पर निर्भर करता है",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "The 'Bancor' was proposed by Keynes as:",
  question_hi: "'बैंकर' कीन्स द्वारा प्रस्तावित किया गया था:",
  options_en: ["An international reserve currency", "A national currency", "A gold substitute", "A trade credit system"],
  options_hi: ["एक अंतरराष्ट्रीय रिजर्व मुद्रा", "एक राष्ट्रीय मुद्रा", "एक सोना विकल्प", "एक व्यापार ऋण प्रणाली"],
  answer_en: "An international reserve currency",
  answer_hi: "एक अंतरराष्ट्रीय रिजर्व मुद्रा",
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