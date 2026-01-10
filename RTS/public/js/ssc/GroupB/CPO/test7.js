const questions = [
{
"num":1,
"question_en": "In calculus, the 'Mean Value Theorem' states that for a function f continuous on [a,b] and differentiable on (a,b), there exists at least one point c in (a,b) such that:",
"question_hi": "कलन में, 'माध्य मान प्रमेय' कहती है कि एक फलन f जो [a,b] पर सतत और (a,b) पर अवकलनीय है, के लिए (a,b) में कम से कम एक बिंदु c इस प्रकार विद्यमान होता है कि:",
"options_en": ["f'(c) = (f(b) - f(a)) / (b - a)", "f(c) = (f(a) + f(b)) / 2", "f'(c) = 0", "∫ f(x) dx from a to b = f(c)(b - a)"],
"options_hi": ["f'(c) = (f(b) - f(a)) / (b - a)", "f(c) = (f(a) + f(b)) / 2", "f'(c) = 0", "∫ f(x) dx from a to b = f(c)(b - a)"],
"answer_en": "f'(c) = (f(b) - f(a)) / (b - a)",
"answer_hi": "f'(c) = (f(b) - f(a)) / (b - a)",
"attempted": false,
"selected": ""
},
{
"num":2,
"question_en": "In biochemistry, the 'central dogma' of molecular biology describes the flow of genetic information as:",
"question_hi": "जैव रसायन विज्ञान में, आणविक जीवविज्ञान का 'केंद्रीय सिद्धांत' आनुवंशिक सूचना के प्रवाह को इस प्रकार वर्णित करता है:",
"options_en": ["DNA → RNA → Protein", "RNA → DNA → Protein", "Protein → RNA → DNA", "DNA → Protein → RNA"],
"options_hi": ["डीएनए → आरएनए → प्रोटीन", "आरएनए → डीएनए → प्रोटीन", "प्रोटीन → आरएनए → डीएनए", "डीएनए → प्रोटीन → आरएनए"],
"answer_en": "DNA → RNA → Protein",
"answer_hi": "डीएनए → आरएनए → प्रोटीन",
"attempted": false,
"selected": ""
},
{
"num":3,
"question_en": "In computer graphics, the 'z-buffering' algorithm is primarily used for:",
"question_hi": "कंप्यूटर ग्राफिक्स में, 'z-बफ़रिंग' एल्गोरिदम मुख्यतः इसके लिए प्रयोग किया जाता है:",
"options_en": ["Hidden surface determination (depth ordering)", "Anti-aliasing of edges", "Texture mapping", "Color blending"],
"options_hi": ["छिपी हुई सतह निर्धारण (गहराई क्रमबद्धता)", "किनारों का एंटी-एलियासिंग", "टेक्सचर मैपिंग", "रंग सम्मिश्रण"],
"answer_en": "Hidden surface determination (depth ordering)",
"answer_hi": "छिपी हुई सतह निर्धारण (गहराई क्रमबद्धता)",
"attempted": false,
"selected": ""
},
{
"num":4,
"question_en": "In astronomy, 'Hubble's Law' states that the recessional velocity of a galaxy is proportional to its:",
"question_hi": "खगोल विज्ञान में, 'हबल का नियम' कहता है कि एक आकाशगंगा की पलायन गति इसके ______ के समानुपाती होती है।",
"options_en": ["Distance from Earth", "Mass", "Luminosity", "Size"],
"options_hi": ["पृथ्वी से दूरी के", "द्रव्यमान के", "चमकीलापन के", "आकार के"],
"answer_en": "Distance from Earth",
"answer_hi": "पृथ्वी से दूरी के",
"attempted": false,
"selected": ""
},
{
"num":5,
"question_en": "In political theory, the 'social contract' is primarily associated with which philosopher?",
"question_hi": "राजनीतिक सिद्धांत में, 'सामाजिक अनुबंध' मुख्यतः किस दार्शनिक से जुड़ा हुआ है?",
"options_en": ["Jean-Jacques Rousseau", "Karl Marx", "John Stuart Mill", "Adam Smith"],
"options_hi": ["जीन-जैक्स रूसो", "कार्ल मार्क्स", "जॉन स्टुअर्ट मिल", "एडम स्मिथ"],
"answer_en": "Jean-Jacques Rousseau",
"answer_hi": "जीन-जैक्स रूसो",
"attempted": false,
"selected": ""
},
{
"num":6,
"question_en": "In organic chemistry, 'Markovnikov's rule' predicts the outcome of:",
"question_hi": "कार्बनिक रसायन विज्ञान में, 'मार्कोवनिकोव का नियम' ______ के परिणाम की भविष्यवाणी करता है।",
"options_en": ["The addition of a protic acid to an asymmetric alkene", "The rate of an SN2 reaction", "The stability of carbocations", "The optical activity of chiral molecules"],
"options_hi": ["एक असममित एल्कीन में एक प्रोटिक अम्ल के योग का", "एक SN2 अभिक्रिया की दर का", "कार्बोधनायनों की स्थिरता का", "चिरल अणुओं की प्रकाशिक सक्रियता का"],
"answer_en": "The addition of a protic acid to an asymmetric alkene",
"answer_hi": "एक असममित एल्कीन में एक प्रोटिक अम्ल के योग का",
"attempted": false,
"selected": ""
},
{
"num":7,
"question_en": "In linguistics, a 'morpheme' is defined as:",
"question_hi": "भाषाविज्ञान में, एक 'रूपिम' को इस प्रकार परिभाषित किया जाता है:",
"options_en": ["The smallest grammatical unit that carries meaning", "A unit of sound", "A unit of writing (grapheme)", "A unit of syntactic function"],
"options_hi": ["अर्थ रखने वाली सबसे छोटी व्याकरणिक इकाई", "ध्वनि की एक इकाई", "लेखन की एक इकाई (लिप्यंश)", "वाक्यविन्यासिक कार्य की एक इकाई"],
"answer_en": "The smallest grammatical unit that carries meaning",
"answer_hi": "अर्थ रखने वाली सबसे छोटी व्याकरणिक इकाई",
"attempted": false,
"selected": ""
},
{
"num":8,
"question_en": "In the human circulatory system, the 'sinoatrial node' is responsible for:",
"question_hi": "मानव परिसंचरण तंत्र में, 'साइनोएट्रियल नोड' ______ के लिए उत्तरदायी है।",
"options_en": ["Initiating the heart's electrical impulse (natural pacemaker)", "Filtering blood in the kidneys", "Producing insulin", "Contracting the ventricles"],
"options_hi": ["हृदय की विद्युत आवेग को आरंभ करने के लिए (प्राकृतिक पेसमेकर)", "गुर्दों में रक्त को छानने के लिए", "इंसुलिन उत्पन्न करने के लिए", "निलयों को संकुचित करने के लिए"],
"answer_en": "Initiating the heart's electrical impulse (natural pacemaker)",
"answer_hi": "हृदय की विद्युत आवेग को आरंभ करने के लिए (प्राकृतिक पेसमेकर)",
"attempted": false,
"selected": ""
},
{
"num":9,
"question_en": "In logic, a 'tautology' is a statement that is:",
"question_hi": "तर्कशास्त्र में, एक 'सर्वसमिका' एक कथन है जो:",
"options_en": ["True in every possible interpretation (logically necessary)", "False in every possible interpretation", "Contingent (true in some, false in others)", "Self-contradictory"],
"options_hi": ["प्रत्येक संभावित व्याख्या में सत्य होता है (तार्किक रूप से आवश्यक)", "प्रत्येक संभावित व्याख्या में असत्य होता है", "आनुषंगिक होता है (कुछ में सत्य, कुछ में असत्य)", "स्व-विरोधी होता है"],
"answer_en": "True in every possible interpretation (logically necessary)",
"answer_hi": "प्रत्येक संभावित व्याख्या में सत्य होता है (तार्किक रूप से आवश्यक)",
"attempted": false,
"selected": ""
},
{
"num":10,
"question_en": "In macroeconomics, 'quantitative easing' is a monetary policy where a central bank:",
"question_hi": "मैक्रोइकॉनॉमिक्स में, 'मात्रात्मक सहजता' एक मौद्रिक नीति है जहां एक केंद्रीय बैंक:",
"options_en": ["Purchases government securities to increase the money supply", "Raises interest rates to curb inflation", "Devalues the national currency", "Imposes capital controls"],
"options_hi": ["मुद्रा आपूर्ति बढ़ाने के लिए सरकारी प्रतिभूतियाँ खरीदता है", "मुद्रास्फीति रोकने के लिए ब्याज दरें बढ़ाता है", "राष्ट्रीय मुद्रा का अवमूल्यन करता है", "पूंजी नियंत्रण लागू करता है"],
"answer_en": "Purchases government securities to increase the money supply",
"answer_hi": "मुद्रा आपूर्ति बढ़ाने के लिए सरकारी प्रतिभूतियाँ खरीदता है",
"attempted": false,
"selected": ""
},
{
"num":11,
"question_en": "In physics, the 'principle of superposition' for waves states that:",
"question_hi": "भौतिकी में, तरंगों के लिए 'अध्यारोपण का सिद्धांत' कहता है कि:",
"options_en": ["The net displacement at any point is the sum of the displacements of individual waves", "Waves always travel in straight lines", "The frequency of a wave is constant in a given medium", "Wave speed depends only on the medium"],
"options_hi": ["किसी भी बिंदु पर कुल विस्थापन व्यक्तिगत तरंगों के विस्थापनों का योग होता है", "तरंगें सदैव सीधी रेखाओं में यात्रा करती हैं", "एक तरंग की आवृत्ति दिए गए माध्यम में स्थिर रहती है", "तरंग गति केवल माध्यम पर निर्भर करती है"],
"answer_en": "The net displacement at any point is the sum of the displacements of individual waves",
"answer_hi": "किसी भी बिंदु पर कुल विस्थापन व्यक्तिगत तरंगों के विस्थापनों का योग होता है",
"attempted": false,
"selected": ""
},
{
"num":12,
"question_en": "In ecology, 'primary succession' occurs on:",
"question_hi": "पारिस्थितिकी में, 'प्राथमिक अनुक्रमण' ______ पर होता है।",
"options_en": ["Newly formed or exposed land surfaces lacking soil", "Areas where existing vegetation has been disturbed but soil remains", "Agricultural land after harvest", "Floodplains after seasonal flooding"],
"options_hi": ["नवनिर्मित या उजागर भूमि सतहों पर जहाँ मृदा नहीं है", "उन क्षेत्रों पर जहाँ मौजूदा वनस्पति अव्यवस्थित हो गई है लेकिन मृदा बनी हुई है", "फसल कटाई के बाद कृषि भूमि पर", "मौसमी बाढ़ के बाद बाढ़ के मैदानों पर"],
"answer_en": "Newly formed or exposed land surfaces lacking soil",
"answer_hi": "नवनिर्मित या उजागर भूमि सतहों पर जहाँ मृदा नहीं है",
"attempted": false,
"selected": ""
},
{
"num":13,
"question_en": "In computer networking, 'NAT' (Network Address Translation) is used to:",
"question_hi": "कंप्यूटर नेटवर्किंग में, 'NAT' (नेटवर्क एड्रेस ट्रांसलेशन) का प्रयोग किया जाता है:",
"options_en": ["Map multiple private IP addresses to a single public IP address", "Encrypt data packets for security", "Assign dynamic IP addresses to devices", "Filter malicious network traffic"],
"options_hi": ["एक सार्वजनिक आईपी पते पर कई निजी आईपी पतों को मैप करने के लिए", "सुरक्षा के लिए डेटा पैकेटों को एन्क्रिप्ट करने के लिए", "उपकरणों को गतिशील आईपी पते प्रदान करने के लिए", "दुर्भावनापूर्ण नेटवर्क ट्रैफ़िक को फ़िल्टर करने के लिए"],
"answer_en": "Map multiple private IP addresses to a single public IP address",
"answer_hi": "एक सार्वजनिक आईपी पते पर कई निजी आईपी पतों को मैप करने के लिए",
"attempted": false,
"selected": ""
},
{
"num":14,
"question_en": "In art, 'chiaroscuro' is a technique that involves:",
"question_hi": "कला में, 'चियारोस्कुरो' एक तकनीक है जिसमें शामिल है:",
"options_en": ["The use of strong contrasts between light and dark", "The application of pure, unmixed colors", "The distortion of forms for emotional effect", "The depiction of everyday life"],
"options_hi": ["प्रकाश और अंधकार के बीच प्रबल विषमताओं का उपयोग", "शुद्ध, अमिश्रित रंगों का अनुप्रयोग", "भावनात्मक प्रभाव के लिए रूपों का विरूपण", "दैनिक जीवन का चित्रण"],
"answer_en": "The use of strong contrasts between light and dark",
"answer_hi": "प्रकाश और अंधकार के बीच प्रबल विषमताओं का उपयोग",
"attempted": false,
"selected": ""
},
{
"num":15,
"question_en": "In probability theory, 'Bayes' theorem' describes the probability of an event based on:",
"question_hi": "प्रायिकता सिद्धांत में, 'बेयस प्रमेय' किसी घटना की प्रायिकता का वर्णन करता है ______ के आधार पर।",
"options_en": ["Prior knowledge of conditions related to the event", "The long-run frequency of the event", "The independence of multiple events", "The sample space size"],
"options_hi": ["घटना से संबंधित शर्तों के पूर्व ज्ञान के आधार पर", "घटना की दीर्घकालिक आवृत्ति के आधार पर", "एकाधिक घटनाओं की स्वतंत्रता के आधार पर", "प्रतिदर्श समष्टि के आकार के आधार पर"],
"answer_en": "Prior knowledge of conditions related to the event",
"answer_hi": "घटना से संबंधित शर्तों के पूर्व ज्ञान के आधार पर",
"attempted": false,
"selected": ""
},
{
"num":16,
"question_en": "In botany, 'transpiration' is the process of:",
"question_hi": "वनस्पति विज्ञान में, 'वाष्पोत्सर्जन' ______ की प्रक्रिया है।",
"options_en": ["Water movement through a plant and evaporation from aerial parts", "Conversion of light energy to chemical energy", "Uptake of minerals from the soil", "Growth response to light"],
"options_hi": ["एक पादप के माध्यम से जल का संचलन और वायवीय भागों से वाष्पीकरण", "प्रकाश ऊर्जा का रासायनिक ऊर्जा में रूपांतरण", "मृदा से खनिजों का अवशोषण", "प्रकाश के प्रति वृद्धि प्रतिक्रिया"],
"answer_en": "Water movement through a plant and evaporation from aerial parts",
"answer_hi": "एक पादप के माध्यम से जल का संचलन और वायवीय भागों से वाष्पीकरण",
"attempted": false,
"selected": ""
},
{
"num":17,
"question_en": "In philosophy, 'solipsism' is the view that:",
"question_hi": "दर्शन में, 'आत्मवाद' वह दृष्टिकोण है कि:",
"options_en": ["Only one's own mind is sure to exist", "The material world is the only reality", "God is the ultimate reality", "Knowledge comes from sensory experience"],
"options_hi": ["केवल अपना स्वयं का मन ही निश्चित रूप से विद्यमान है", "भौतिक संसार ही एकमात्र वास्तविकता है", "ईश्वर परम वास्तविकता है", "ज्ञान संवेदी अनुभव से आता है"],
"answer_en": "Only one's own mind is sure to exist",
"answer_hi": "केवल अपना स्वयं का मन ही निश्चित रूप से विद्यमान है",
"attempted": false,
"selected": ""
},
{
"num":18,
"question_en": "In music, 'serialism' is a compositional technique that involves:",
"question_hi": "संगीत में, 'शृंखलावाद' एक रचनात्मक तकनीक है जिसमें शामिल है:",
"options_en": ["Using a series of values (like pitches) as the basis of a composition", "Repeating a short musical phrase throughout a piece", "Improvising based on a chord progression", "Using folk melodies in classical forms"],
"options_hi": ["एक शृंखला का उपयोग (जैसे स्वरों की) एक रचना के आधार के रूप में", "एक पूरे टुकड़े में एक छोटे संगीतमय वाक्यांश को दोहराना", "एक कोर्ड प्रगति के आधार पर आशुरचना करना", "शास्त्रीय रूपों में लोक धुनों का उपयोग करना"],
"answer_en": "Using a series of values (like pitches) as the basis of a composition",
"answer_hi": "एक शृंखला का उपयोग (जैसे स्वरों की) एक रचना के आधार के रूप में",
"attempted": false,
"selected": ""
},
{
"num":19,
"question_en": "In statistics, the 'central limit theorem' states that the distribution of sample means approximates a normal distribution as:",
"question_hi": "सांख्यिकी में, 'केंद्रीय सीमा प्रमेय' कहती है कि प्रतिदर्श माध्यों का वितरण एक सामान्य वितरण का सन्निकटन करता है जब:",
"options_en": ["The sample size becomes large, regardless of the population distribution", "The population is normally distributed", "The sample is random", "The variance is known"],
"options_hi": ["प्रतिदर्श आकार बड़ा हो जाता है, चाहे जनसंख्या वितरण कुछ भी हो", "जनसंख्या सामान्य रूप से वितरित है", "प्रतिदर्श यादृच्छिक है", "प्रसरण ज्ञात है"],
"answer_en": "The sample size becomes large, regardless of the population distribution",
"answer_hi": "प्रतिदर्श आकार बड़ा हो जाता है, चाहे जनसंख्या वितरण कुछ भी हो",
"attempted": false,
"selected": ""
},
{
"num":20,
"question_en": "In human anatomy, the 'cerebellum' is primarily responsible for:",
"question_hi": "मानव शरीर रचना विज्ञान में, 'अनुमस्तिष्क' मुख्यतः ______ के लिए उत्तरदायी है।",
"options_en": ["Coordinating movement, balance, and posture", "Regulating body temperature", "Processing visual information", "Controlling conscious thought"],
"options_hi": ["गति, संतुलन और मुद्रा का समन्वय करने के लिए", "शरीर के तापमान को नियंत्रित करने के लिए", "दृश्य सूचना प्रसंस्करण के लिए", "चेतन विचार को नियंत्रित करने के लिए"],
"answer_en": "Coordinating movement, balance, and posture",
"answer_hi": "गति, संतुलन और मुद्रा का समन्वय करने के लिए",
"attempted": false,
"selected": ""
},
{
"num":21,
"question_en": "In economics, 'comparative advantage' refers to the ability to produce a good at:",
"question_hi": "अर्थशास्त्र में, 'तुलनात्मक लाभ' ______ पर एक वस्तु का उत्पादन करने की क्षमता को संदर्भित करता है।",
"options_en": ["A lower opportunity cost than another producer", "An absolute lower cost than another producer", "A higher quality than another producer", "A faster rate than another producer"],
"options_hi": ["एक अन्य उत्पादक की तुलना में कम अवसर लागत पर", "एक अन्य उत्पादक की तुलना में निरपेक्ष रूप से कम लागत पर", "एक अन्य उत्पादक की तुलना में उच्च गुणवत्ता पर", "एक अन्य उत्पादक की तुलना में तेज दर पर"],
"answer_en": "A lower opportunity cost than another producer",
"answer_hi": "एक अन्य उत्पादक की तुलना में कम अवसर लागत पर",
"attempted": false,
"selected": ""
},
{
"num":22,
"question_en": "In physics, the 'photoelectric effect' demonstrated that light has properties of:",
"question_hi": "भौतिकी में, 'प्रकाश-विद्युत प्रभाव' ने प्रदर्शित किया कि प्रकाश में ______ के गुण होते हैं।",
"options_en": ["Particles (photons)", "Waves only", "Continuous energy", "Magnetic fields"],
"options_hi": ["कण (फोटॉन)", "केवल तरंगें", "सतत ऊर्जा", "चुंबकीय क्षेत्र"],
"answer_en": "Particles (photons)",
"answer_hi": "कण (फोटॉन)",
"attempted": false,
"selected": ""
},
{
"num":23,
"question_en": "In computer science, a 'hash function' is often used to:",
"question_hi": "कंप्यूटर विज्ञान में, एक 'हैश फ़ंक्शन' का प्रयोग अक्सर किया जाता है:",
"options_en": ["Map data of arbitrary size to fixed-size values", "Sort data in ascending order", "Encrypt data for secure transmission", "Compress data to save space"],
"options_hi": ["मनमाने आकार के डेटा को निश्चित-आकार के मानों पर मैप करने के लिए", "आरोही क्रम में डेटा को क्रमबद्ध करने के लिए", "सुरक्षित संचरण के लिए डेटा को एन्क्रिप्ट करने के लिए", "स्थान बचाने के लिए डेटा को संपीड़ित करने के लिए"],
"answer_en": "Map data of arbitrary size to fixed-size values",
"answer_hi": "मनमाने आकार के डेटा को निश्चित-आकार के मानों पर मैप करने के लिए",
"attempted": false,
"selected": ""
},
{
"num":24,
"question_en": "In Greek mythology, the 'Minotaur' was a creature that was:",
"question_hi": "यूनानी पौराणिक कथाओं में, 'मिनोटौर' एक प्राणी था जो था:",
"options_en": ["Half man, half bull", "Half lion, half eagle", "Half horse, half human", "Half fish, half human"],
"options_hi": ["आधा मनुष्य, आधा बैल", "आधा सिंह, आधा गरुड़", "आधा घोड़ा, आधा मनुष्य", "आधा मछली, आधा मनुष्य"],
"answer_en": "Half man, half bull",
"answer_hi": "आधा मनुष्य, आधा बैल",
"attempted": false,
"selected": ""
},
{
"num":25,
"question_en": "In chemistry, 'Le Chatelier's principle' predicts how a system at equilibrium responds to:",
"question_hi": "रसायन विज्ञान में, 'ला शातेलिए का सिद्धांत' भविष्यवाणी करता है कि साम्यावस्था में एक प्रणाली ______ के प्रति कैसे प्रतिक्रिया करती है।",
"options_en": ["Changes in concentration, temperature, or pressure", "Changes in pH only", "The addition of a catalyst", "Changes in volume only"],
"options_hi": ["सांद्रता, तापमान या दबाव में परिवर्तन के प्रति", "केवल pH में परिवर्तन के प्रति", "एक उत्प्रेरक के जोड़ के प्रति", "केवल आयतन में परिवर्तन के प्रति"],
"answer_en": "Changes in concentration, temperature, or pressure",
"answer_hi": "सांद्रता, तापमान या दबाव में परिवर्तन के प्रति",
"attempted": false,
"selected": ""
},
{
"num":26,
"question_en": "In psychology, 'classical conditioning' was famously studied by:",
"question_hi": "मनोविज्ञान में, 'शास्त्रीय अनुबंधन' का प्रसिद्ध अध्ययन किया था:",
"options_en": ["Ivan Pavlov", "B.F. Skinner", "Sigmund Freud", "Jean Piaget"],
"options_hi": ["इवान पावलोव ने", "बी.एफ. स्किनर ने", "सिगमंड फ्रायड ने", "जीन पियाजे ने"],
"answer_en": "Ivan Pavlov",
"answer_hi": "इवान पावलोव ने",
"attempted": false,
"selected": ""
},
{
"num":27,
"question_en": "In astronomy, a 'neutron star' is the remnant of a:",
"question_hi": "खगोल विज्ञान में, एक 'न्यूट्रॉन तारा' ______ का अवशेष है।",
"options_en": ["Massive star that has undergone a supernova explosion", "Low-mass star like the Sun", "Collision of two white dwarfs", "Planetary nebula"],
"options_hi": ["एक विशाल तारे का जो एक अधिनव तारा विस्फोट से गुजरा है", "सूर्य जैसे कम द्रव्यमान वाले तारे का", "दो श्वेत वामन तारों के टकराव का", "ग्रहीय नीहारिका का"],
"answer_en": "Massive star that has undergone a supernova explosion",
"answer_hi": "एक विशाल तारे का जो एक अधिनव तारा विस्फोट से गुजरा है",
"attempted": false,
"selected": ""
},
{
"num":28,
"question_en": "In computer programming, 'recursion' is a technique where a function:",
"question_hi": "कंप्यूटर प्रोग्रामिंग में, 'पुनरावर्तन' एक तकनीक है जहाँ एक फलन:",
"options_en": ["Calls itself to solve a smaller instance of the same problem", "Iterates over a list using a loop", "Uses multiple threads for parallel execution", "Handles runtime errors"],
"options_hi": ["समान समस्या के एक छोटे उदाहरण को हल करने के लिए स्वयं को कॉल करता है", "एक लूप का उपयोग करके एक सूची पर पुनरावृत्ति करता है", "समानांतर निष्पादन के लिए एकाधिक धागों का उपयोग करता है", "रनटाइम त्रुटियों को संभालता है"],
"answer_en": "Calls itself to solve a smaller instance of the same problem",
"answer_hi": "समान समस्या के एक छोटे उदाहरण को हल करने के लिए स्वयं को कॉल करता है",
"attempted": false,
"selected": ""
},
{
"num":29,
"question_en": "In sociology, the 'glass ceiling' is a metaphor for:",
"question_hi": "समाजशास्त्र में, 'ग्लास सीलिंग' एक रूपक है:",
"options_en": ["An invisible barrier that prevents minorities and women from rising beyond a certain level", "The pressure to conform to societal norms", "The division between social classes", "The idealization of family life"],
"options_hi": ["एक अदृश्य बाधा जो अल्पसंख्यकों और महिलाओं को एक निश्चित स्तर से ऊपर उठने से रोकती है", "सामाजिक मानदंडों के अनुरूप होने के दबाव के लिए", "सामाजिक वर्गों के बीच विभाजन के लिए", "पारिवारिक जीवन के आदर्शीकरण के लिए"],
"answer_en": "An invisible barrier that prevents minorities and women from rising beyond a certain level",
"answer_hi": "एक अदृश्य बाधा जो अल्पसंख्यकों और महिलाओं को एक निश्चित स्तर से ऊपर उठने से रोकती है",
"attempted": false,
"selected": ""
},
{
"num":30,
"question_en": "In mathematics, a 'Möbius strip' is a surface that is:",
"question_hi": "गणित में, एक 'मोबियस पट्टी' एक ऐसी सतह है जो:",
"options_en": ["Non-orientable and has only one side and one edge", "A flat two-dimensional plane", "A sphere with a hole in it", "A torus (doughnut shape)"],
"options_hi": ["अअभिविन्यसनीय है और इसकी केवल एक सतह और एक किनारा है", "एक समतल द्वि-आयामी तल है", "इसमें एक छेद वाला एक गोला है", "एक टोरस (डोनट आकार)"],
"answer_en": "Non-orientable and has only one side and one edge",
"answer_hi": "अअभिविन्यसनीय है और इसकी केवल एक सतह और एक किनारा है",
"attempted": false,
"selected": ""
},
{
"num":31,
"question_en": "In geology, the 'Richter scale' is used to measure the:",
"question_hi": "भूविज्ञान में, 'रिक्टर पैमाना' मापने के लिए प्रयोग किया जाता है:",
"options_en": ["Magnitude of earthquakes", "Intensity of earthquakes (damage)", "Depth of the earthquake focus", "Speed of seismic waves"],
"options_hi": ["भूकंप के परिमाण का", "भूकंप की तीव्रता (क्षति) का", "भूकंप केंद्र की गहराई का", "सीस्मिक तरंगों की गति का"],
"answer_en": "Magnitude of earthquakes",
"answer_hi": "भूकंप के परिमाण का",
"attempted": false,
"selected": ""
},
{
"num":32,
"question_en": "In literature, 'stream of consciousness' is a narrative technique that:",
"question_hi": "साहित्य में, 'चेतना प्रवाह' एक वर्णनात्मक तकनीक है जो:",
"options_en": ["Attempts to depict the multitudinous thoughts and feelings passing through the mind", "Uses an omniscient third-person narrator", "Follows a strict chronological order", "Relies heavily on dialogue"],
"options_hi": ["मन में गुजरने वाले असंख्य विचारों और भावनाओं को चित्रित करने का प्रयास करती है", "एक सर्वज्ञ तृतीय-पुरुष वर्णनकर्ता का उपयोग करती है", "एक सख्त कालानुक्रमिक क्रम का पालन करती है", "संवाद पर अत्यधिक निर्भर करती है"],
"answer_en": "Attempts to depict the multitudinous thoughts and feelings passing through the mind",
"answer_hi": "मन में गुजरने वाले असंख्य विचारों और भावनाओं को चित्रित करने का प्रयास करती है",
"attempted": false,
"selected": ""
},
{
"num":33,
"question_en": "In finance, 'amortization' refers to the process of:",
"question_hi": "वित्त में, 'परिशोधन' ______ की प्रक्रिया को संदर्भित करता है।",
"options_en": ["Spreading out a loan into a series of fixed payments over time", "Valuing a company based on its assets", "Calculating the return on an investment", "Writing off an intangible asset's cost"],
"options_hi": ["समय के साथ एक ऋण को निश्चित भुगतानों की एक श्रृंखला में फैलाना", "किसी कंपनी का मूल्यांकन उसकी संपत्तियों के आधार पर करना", "किसी निवेश पर प्रतिलाभ की गणना करना", "किसी अमूर्त संपत्ति की लागत को लिखना"],
"answer_en": "Spreading out a loan into a series of fixed payments over time",
"answer_hi": "समय के साथ एक ऋण को निश्चित भुगतानों की एक श्रृंखला में फैलाना",
"attempted": false,
"selected": ""
},
{
"num":34,
"question_en": "In physics, 'entropy' is a measure of:",
"question_hi": "भौतिकी में, 'एन्ट्रॉपी' एक माप है:",
"options_en": ["The disorder or randomness in a system", "The total energy in a system", "The force applied per unit area", "The rate of change of velocity"],
"options_hi": ["एक प्रणाली में अव्यवस्था या यादृच्छिकता का", "एक प्रणाली में कुल ऊर्जा का", "प्रति इकाई क्षेत्रफल पर लगाए गए बल का", "वेग के परिवर्तन की दर का"],
"answer_en": "The disorder or randomness in a system",
"answer_hi": "एक प्रणाली में अव्यवस्था या यादृच्छिकता का",
"attempted": false,
"selected": ""
},
{
"num":35,
"question_en": "In mythology, 'Ragnarok' in Norse mythology refers to:",
"question_hi": "पौराणिक कथाओं में, नॉर्स पौराणिक कथाओं में 'रग्नारोक' संदर्भित करता है:",
"options_en": ["A prophesied series of events leading to the death of gods and the rebirth of the world", "The hall of slain warriors ruled by Odin", "The world tree connecting the nine realms", "The trickster god Loki"],
"options_hi": ["देवताओं की मृत्यु और विश्व के पुनर्जन्म की ओर ले जाने वाली भविष्यवाणी की गई घटनाओं की एक श्रृंखला", "ओडिन द्वारा शासित मारे गए योद्धाओं का कक्ष", "नौ लोकों को जोड़ने वाला विश्व वृक्ष", "छलिया देवता लोकी"],
"answer_en": "A prophesied series of events leading to the death of gods and the rebirth of the world",
"answer_hi": "देवताओं की मृत्यु और विश्व के पुनर्जन्म की ओर ले जाने वाली भविष्यवाणी की गई घटनाओं की एक श्रृंखला",
"attempted": false,
"selected": ""
},
{
"num":36,
"question_en": "In chemistry, an 'alkali' is a base that is:",
"question_hi": "रसायन विज्ञान में, एक 'क्षार' एक आधार है जो:",
"options_en": ["Soluble in water", "Insoluble in water", "A weak acid", "A salt"],
"options_hi": ["जल में घुलनशील होता है", "जल में अघुलनशील होता है", "एक दुर्बल अम्ल होता है", "एक लवण होता है"],
"answer_en": "Soluble in water",
"answer_hi": "जल में घुलनशील होता है",
"attempted": false,
"selected": ""
},
{
"num":37,
"question_en": "In computing, 'Moore's Law' is an observation that the number of transistors on a microchip:",
"question_hi": "कंप्यूटिंग में, 'मूर का नियम' एक अवलोकन है कि एक माइक्रोचिप पर ट्रांजिस्टरों की संख्या:",
"options_en": ["Doubles approximately every two years", "Increases linearly with time", "Is limited by the speed of light", "Depends on the software used"],
"options_hi": ["लगभग प्रत्येक दो वर्ष में दोगुनी हो जाती है", "समय के साथ रैखिक रूप से बढ़ती है", "प्रकाश की गति द्वारा सीमित है", "प्रयुक्त सॉफ्टवेयर पर निर्भर करती है"],
"answer_en": "Doubles approximately every two years",
"answer_hi": "लगभग प्रत्येक दो वर्ष में दोगुनी हो जाती है",
"attempted": false,
"selected": ""
},
{
"num":38,
"question_en": "In geography, the 'Prime Meridian' is the line of longitude defined as:",
"question_hi": "भूगोल में, 'प्रधान मध्याह्न रेखा' देशांतर की वह रेखा है जिसे परिभाषित किया गया है:",
"options_en": ["0° longitude, passing through Greenwich, England", "180° longitude, the International Date Line", "The line separating the Eastern and Western Hemispheres", "The line of 0° latitude"],
"options_hi": ["0° देशांतर, ग्रीनविच, इंग्लैंड से गुजरती हुई", "180° देशांतर, अंतर्राष्ट्रीय दिनांक रेखा", "पूर्वी और पश्चिमी गोलार्धों को अलग करने वाली रेखा", "0° अक्षांश की रेखा"],
"answer_en": "0° longitude, passing through Greenwich, England",
"answer_hi": "0° देशांतर, ग्रीनविच, इंग्लैंड से गुजरती हुई",
"attempted": false,
"selected": ""
},
{
"num":39,
"question_en": "In medicine, 'hypertension' is the medical term for:",
"question_hi": "चिकित्सा में, 'हाइपरटेंशन' ______ के लिए चिकित्सा शब्द है।",
"options_en": ["High blood pressure", "Low blood pressure", "High blood sugar", "Low blood sugar"],
"options_hi": ["उच्च रक्तचाप", "निम्न रक्तचाप", "उच्च रक्त शर्करा", "निम्न रक्त शर्करा"],
"answer_en": "High blood pressure",
"answer_hi": "उच्च रक्तचाप",
"attempted": false,
"selected": ""
},
{
"num":40,
"question_en": "In mathematics, 'P vs NP' is a major unsolved problem in computer science that asks whether:",
"question_hi": "गणित में, 'P बनाम NP' कंप्यूटर विज्ञान में एक प्रमुख अनसुलझी समस्या है जो पूछती है कि:",
"options_en": ["Every problem whose solution can be quickly verified can also be solved quickly", "Polynomial time is equivalent to exponential time", "Quantum computers can solve NP problems", "All algorithms are deterministic"],
"options_hi": ["क्या हर समस्या जिसके समाधान को शीघ्रता से सत्यापित किया जा सकता है, शीघ्रता से हल भी किया जा सकता है", "क्या बहुपदीय समय, घातांकीय समय के तुल्य है", "क्या क्वांटम कंप्यूटर NP समस्याओं को हल कर सकते हैं", "क्या सभी एल्गोरिदम नियतात्मक हैं"],
"answer_en": "Every problem whose solution can be quickly verified can also be solved quickly",
"answer_hi": "क्या हर समस्या जिसके समाधान को शीघ्रता से सत्यापित किया जा सकता है, शीघ्रता से हल भी किया जा सकता है",
"attempted": false,
"selected": ""
},
{
"num":41,
"question_en": "In biology, 'homeostasis' refers to the:",
"question_hi": "जीवविज्ञान में, 'समस्थिति' संदर्भित करती है:",
"options_en": ["Maintenance of a stable internal environment", "Process of cell division", "Evolution of species over time", "Breakdown of nutrients for energy"],
"options_hi": ["एक स्थिर आंतरिक वातावरण का अनुरक्षण", "कोशिका विभाजन की प्रक्रिया", "समय के साथ प्रजातियों का विकास", "ऊर्जा के लिए पोषक तत्वों का विघटन"],
"answer_en": "Maintenance of a stable internal environment",
"answer_hi": "एक स्थिर आंतरिक वातावरण का अनुरक्षण",
"attempted": false,
"selected": ""
},
{
"num":42,
"question_en": "In psychology, the 'Rorschach test' is a projective test that uses:",
"question_hi": "मनोविज्ञान में, 'रोर्शाख परीक्षण' एक प्रक्षेपी परीक्षण है जो ______ का उपयोग करता है।",
"options_en": ["Inkblots to assess a person's personality and emotional functioning", "Word associations to uncover unconscious thoughts", "Puzzles to measure problem-solving ability", "Questionnaires to assess mood disorders"],
"options_hi": "किसी व्यक्ति के व्यक्तित्व और भावनात्मक कार्यप्रणाली का आकलन करने के लिए स्याही धब्बों का",
"answer_en": "Inkblots to assess a person's personality and emotional functioning",
"answer_hi": "किसी व्यक्ति के व्यक्तित्व और भावनात्मक कार्यप्रणाली का आकलन करने के लिए स्याही धब्बों का",
"attempted": false,
"selected": ""
},
{
"num":43,
"question_en": "In music, the 'timbre' of a sound refers to its:",
"question_hi": "संगीत में, किसी ध्वनि का 'तान' संदर्भित करता है इसके:",
"options_en": ["Quality or color that distinguishes different types of sound production", "Loudness", "Pitch", "Duration"],
"options_hi": ["गुणवत्ता या रंग जो ध्वनि उत्पादन के विभिन्न प्रकारों में भेद करता है", "प्रबलता", "स्वर", "अवधि"],
"answer_en": "Quality or color that distinguishes different types of sound production",
"answer_hi": "गुणवत्ता या रंग जो ध्वनि उत्पादन के विभिन्न प्रकारों में भेद करता है",
"attempted": false,
"selected": ""
},
{
"num":44,
"question_en": "In economics, 'elasticity' measures the:",
"question_hi": "अर्थशास्त्र में, 'लोच' मापती है:",
"options_en": ["Responsiveness of one variable to changes in another variable", "Total output of an economy", "Rate of inflation", "Level of unemployment"],
"options_hi": ["एक चर की दूसरे चर में परिवर्तन के प्रति प्रतिसाद", "एक अर्थव्यवस्था का कुल उत्पादन", "मुद्रास्फीति की दर", "बेरोजगारी का स्तर"],
"answer_en": "Responsiveness of one variable to changes in another variable",
"answer_hi": "एक चर की दूसरे चर में परिवर्तन के प्रति प्रतिसाद",
"attempted": false,
"selected": ""
},
{
"num":45,
"question_en": "In law, 'habeas corpus' is a legal action that:",
"question_hi": "कानून में, 'बन्दी प्रत्यक्षीकरण' एक कानूनी कार्रवाई है जो:",
"options_en": ["Requires a person under arrest to be brought before a judge", "Protects against unreasonable searches", "Guarantees the right to a speedy trial", "Provides for legal representation"],
"options_hi": ["गिरफ्तार व्यक्ति को न्यायाधीश के समक्ष प्रस्तुत करने की मांग करती है", "अनुचित तलाशी के विरुद्ध सुरक्षा प्रदान करती है", "शीघ्र सुनवाई के अधिकार की गारंटी देती है", "कानूनी प्रतिनिधित्व प्रदान करती है"],
"answer_en": "Requires a person under arrest to be brought before a judge",
"answer_hi": "गिरफ्तार व्यक्ति को न्यायाधीश के समक्ष प्रस्तुत करने की मांग करती है",
"attempted": false,
"selected": ""
},
{
"num":46,
"question_en": "In physics, 'quantum entanglement' is a phenomenon where:",
"question_hi": "भौतिकी में, 'क्वांटम उलझन' एक ऐसी घटना है जहाँ:",
"options_en": ["The quantum states of two or more objects are linked, regardless of distance", "Particles are confined to discrete energy levels", "A particle exhibits both wave and particle properties", "The act of measurement affects the system"],
"options_hi": ["दो या अधिक वस्तुओं की क्वांटम अवस्थाएँ दूरी की परवाह किए बिना जुड़ी होती हैं", "कण विविक्त ऊर्जा स्तरों तक सीमित होते हैं", "एक कण तरंग और कण दोनों गुण प्रदर्शित करता है", "माप की क्रिया प्रणाली को प्रभावित करती है"],
"answer_en": "The quantum states of two or more objects are linked, regardless of distance",
"answer_hi": "दो या अधिक वस्तुओं की क्वांटम अवस्थाएँ दूरी की परवाह किए बिना जुड़ी होती हैं",
"attempted": false,
"selected": ""
},
{
"num":47,
"question_en": "In history, the 'Magna Carta' signed in 1215 is significant because it:",
"question_hi": "इतिहास में, 1215 में हस्ताक्षरित 'मैग्ना कार्टा' महत्वपूर्ण है क्योंकि यह:",
"options_en": ["Established the principle that the king was subject to the law", "Created the first parliament", "Ended the feudal system", "Declared independence from the Pope"],
"options_hi": ["यह सिद्धांत स्थापित किया कि राजा कानून के अधीन था", "पहली संसद का गठन किया", "सामंतवादी व्यवस्था को समाप्त किया", "पोप से स्वतंत्रता की घोषणा की"],
"answer_en": "Established the principle that the king was subject to the law",
"answer_hi": "यह सिद्धांत स्थापित किया कि राजा कानून के अधीन था",
"attempted": false,
"selected": ""
},
{
"num":48,
"question_en": "In computer science, 'object-oriented programming' (OOP) is characterized by:",
"question_hi": "कंप्यूटर विज्ञान में, 'ऑब्जेक्ट-ओरिएंटेड प्रोग्रामिंग' (OOP) की विशेषता है:",
"options_en": ["Concepts such as classes, objects, inheritance, and polymorphism", "Sequential execution of instructions", "Low-level manipulation of hardware", "Functional purity and immutability"],
"options_hi": ["वर्ग, वस्तु, उत्तराधिकार और बहुरूपता जैसी अवधारणाएँ", "निर्देशों का अनुक्रमिक निष्पादन", "हार्डवेयर का निम्न-स्तरीय हेरफेर", "कार्यात्मक शुद्धता और अपरिवर्तनीयता"],
"answer_en": "Concepts such as classes, objects, inheritance, and polymorphism",
"answer_hi": "वर्ग, वस्तु, उत्तराधिकार और बहुरूपता जैसी अवधारणाएँ",
"attempted": false,
"selected": ""
},
{
"num":49,
"question_en": "In biology, 'mitosis' is the process of cell division that results in:",
"question_hi": "जीवविज्ञान में, 'समसूत्री विभाजन' कोशिका विभाजन की वह प्रक्रिया है जिसके परिणामस्वरूप होता है:",
"options_en": ["Two genetically identical daughter cells", "Four genetically diverse gametes", "A single cell with twice the genetic material", "The fusion of two cells"],
"options_hi": ["दो आनुवंशिक रूप से समान पुत्री कोशिकाएँ", "चार आनुवंशिक रूप से विविध युग्मक", "दोगुने आनुवंशिक पदार्थ वाली एक कोशिका", "दो कोशिकाओं का संलयन"],
"answer_en": "Two genetically identical daughter cells",
"answer_hi": "दो आनुवंशिक रूप से समान पुत्री कोशिकाएँ",
"attempted": false,
"selected": ""
},
{
"num":50,
"question_en": "In philosophy, the 'categorical imperative' is a central concept in the moral philosophy of:",
"question_hi": "दर्शन में, 'निश्चयात्मक आदेश' ______ के नैतिक दर्शन में एक केंद्रीय अवधारणा है।",
"options_en": ["Immanuel Kant", "John Stuart Mill", "Aristotle", "Friedrich Nietzsche"],
"options_hi": ["इमैनुएल कांट", "जॉन स्टुअर्ट मिल", "अरस्तू", "फ्रेडरिक नीत्शे"],
"answer_en": "Immanuel Kant",
"answer_hi": "इमैनुएल कांट",
"attempted": false,
"selected": ""
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