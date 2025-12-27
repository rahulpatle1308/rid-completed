const questions = [
 {
  num:1,
  question_en: "Which country hosted the 2025 Cricket World Cup final?",
  question_hi: "2025 क्रिकेट विश्व कप फाइनल की मेज़बानी किस देश ने की?",
  options_en: ["India","Australia","England","South Africa"],
  options_hi: ["भारत","ऑस्ट्रेलिया","इंग्लैंड","दक्षिण अफ़्रीका"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:2,
  question_en: "Which Indian place was declared the 58th Tiger Reserve?",
  question_hi: "भारत का 58वां टाइगर रिज़र्व किस स्थान को घोषित किया गया?",
  options_en: ["Madhav National Park","Bandhavgarh","Ranthambore","Sundarbans"],
  options_hi: ["माधव राष्ट्रीय उद्यान","बांधवगढ़","रणथंभौर","सुंदरबन"],
  answer_en: "Madhav National Park",
  answer_hi: "माधव राष्ट्रीय उद्यान",
  attempted: false,
  selected: ""
},
{
  num:3,
  question_en: "Which country topped the Global Terrorism Index 2025?",
  question_hi: "ग्लोबल टेररिज़्म इंडेक्स 2025 में शीर्ष पर किस देश का नाम आया?",
  options_en: ["Burkina Faso","Pakistan","Syria","Iraq"],
  options_hi: ["बुर्किना फासो","पाकिस्तान","सीरिया","इराक"],
  answer_en: "Burkina Faso",
  answer_hi: "बुर्किना फासो",
  attempted: false,
  selected: ""
},
{
  num:4,
  question_en: "Which missile system did DRDO showcase in 2025?",
  question_hi: "2025 में DRDO ने किस मिसाइल प्रणाली का प्रदर्शन किया?",
  options_en: ["BM‑04","Agni‑P","BrahMos","Prithvi"],
  options_hi: ["बीएम‑04","अग्नि‑पी","ब्रह्मोस","पृथ्वी"],
  answer_en: "BM‑04",
  answer_hi: "बीएम‑04",
  attempted: false,
  selected: ""
},
{
  num:5,
  question_en: "Which summit did India host in 2023?",
  question_hi: "2023 में भारत ने कौन‑सा शिखर सम्मेलन आयोजित किया?",
  options_en: ["G20 Summit","BRICS Summit","UN Climate Summit","SAARC Summit"],
  options_hi: ["जी20 शिखर सम्मेलन","ब्रिक्स शिखर सम्मेलन","संयुक्त राष्ट्र जलवायु शिखर","सार्क शिखर"],
  answer_en: "G20 Summit",
  answer_hi: "जी20 शिखर सम्मेलन",
  attempted: false,
  selected: ""
},
{
  num:6,
  question_en: "Who won the Nobel Peace Prize 2023?",
  question_hi: "नॉबेल शांति पुरस्कार 2023 किसे दिया गया?",
  options_en: ["Narges Mohammadi","Maria Ressa","Abiy Ahmed","Denis Mukwege"],
  options_hi: ["नर्गेस मोहम्मदी","मारिया रेसा","अबिय अहमद","डेनिस मुकांगे"],
  answer_en: "Narges Mohammadi",
  answer_hi: "नर्गेस मोहम्मदी",
  attempted: false,
  selected: ""
},
{
  num:7,
  question_en: "Which country won the Davis Cup 2023?",
  question_hi: "डेविस कप 2023 किस देश ने जीता?",
  options_en: ["Italy","Australia","Spain","Russia"],
  options_hi: ["इटली","ऑस्ट्रेलिया","स्पेन","रूस"],
  answer_en: "Italy",
  answer_hi: "इटली",
  attempted: false,
  selected: ""
},
{
  num:8,
  question_en: "What is India’s rank in the Global Terrorism Index 2025?",
  question_hi: "ग्लोबल टेररिज़्म इंडेक्स 2025 में भारत की रैंक क्या है?",
  options_en: ["14th","5th","20th","8th"],
  options_hi: ["14वां","5वां","20वां","8वां"],
  answer_en: "14th",
  answer_hi: "14वां",
  attempted: false,
  selected: ""
},
{
  num:9,
  question_en: "Who was India’s flag bearer at 2024 Paris Olympics?",
  question_hi: "2024 पेरिस ओलंपिक में भारत का ध्वज वाहक कौन था?",
  options_en: ["PV Sindhu & Sharath Kamal","Mirabai Chanu","Neeraj Chopra","Ravindra Jadeja"],
  options_hi: ["पीवी सिंधु एवं शरत कमल","मीराबाई चानू","नीरज चोपड़ा","रविंद्र जडेजा"],
  answer_en: "PV Sindhu & Sharath Kamal",
  answer_hi: "पीवी सिंधु एवं शरत कमल",
  attempted: false,
  selected: ""
},
{
  num:10,
  question_en: "Which mission aims to study the Sun by India?",
  question_hi: "भारत का कौन‑सा मिशन सूर्य का अध्ययन करने के लिए है?",
  options_en: ["Aditya‑L1","Chandrayaan‑3","Mangalyaan","Gaganyaan"],
  options_hi: ["आदित्य‑L1","चंद्रयान‑3","मंगलयान","गगनयान"],
  answer_en: "Aditya‑L1",
  answer_hi: "आदित्य‑L1",
  attempted: false,
  selected: ""
},
{
  num:11,
  question_en: "Which country will host the 2026 Asian Games?",
  question_hi: "2026 एशियाई खेलों की मेज़बानी कौन करेगा?",
  options_en: ["Qatar","China","Japan","India"],
  options_hi: ["कतर","चीन","जापान","भारत"],
  answer_en: "Qatar",
  answer_hi: "कतर",
  attempted: false,
  selected: ""
},
{
  num:12,
  question_en: "Who was awarded ICC Men’s Cricketer of the Year 2023?",
  question_hi: "ICC पुरुष क्रिकेटर ऑफ द ईयर 2023 किसे मिला?",
  options_en: ["Virat Kohli","Babar Azam","Joe Root","Kane Williamson"],
  options_hi: ["विराट कोहली","बाबर आज़म","जो रूट","कैन विलियमसन"],
  answer_en: "Virat Kohli",
  answer_hi: "विराट कोहली",
  attempted: false,
  selected: ""
},
{
  num:13,
  question_en: "Which nation hosted SCO Summit 2023?",
  question_hi: "SCO शिखर सम्मेलन 2023 की मेज़बानी किस देश ने की?",
  options_en: ["India","China","Russia","Kazakhstan"],
  options_hi: ["भारत","चीन","रूस","कज़ाख़स्तान"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:14,
  question_en: "Which city hosted the COP28 Climate Summit?",
  question_hi: "COP28 जलवायु शिखर सम्मेलन किस शहर में हुआ?",
  options_en: ["Dubai","Paris","New York","London"],
  options_hi: ["दुबई","पेरिस","न्यूयॉर्क","लंदन"],
  answer_en: "Dubai",
  answer_hi: "दुबई",
  attempted: false,
  selected: ""
},
{
  num:15,
  question_en: "Which country won the FIFA Women’s World Cup 2023?",
  question_hi: "FIFA महिला विश्व कप 2023 किस देश ने जीता?",
  options_en: ["Spain","England","USA","Brazil"],
  options_hi: ["स्पेन","इंग्लैंड","अमेरिका","ब्राज़ील"],
  answer_en: "Spain",
  answer_hi: "स्पेन",
  attempted: false,
  selected: ""
},
{
  num:16,
  question_en: "Which Nobel Prize category did India win in 2024?",
  question_hi: "2024 में भारत ने कौन‑सी नोबेल पुरस्कार श्रेणी जीती?",
  options_en: ["Literature","Peace","Physics","Economics"],
  options_hi: ["साहित्य","शांति","भौतिकी","अर्थशास्त्र"],
  answer_en: "Peace",
  answer_hi: "शांति",
  attempted: false,
  selected: ""
},
{
  num:17,
  question_en: "Which country launched the Artemis moon mission?",
  question_hi: "किस देश ने आर्टेमिस चंद्र मिशन लॉन्च किया?",
  options_en: ["USA","India","China","Russia"],
  options_hi: ["अमेरिका","भारत","चीन","रूस"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num:18,
  question_en: "Which report ranks countries on happiness levels?",
  question_hi: "किस रिपोर्ट में देशों को खुशहाली के स्तर के अनुसार रैंक किया जाता है?",
  options_en: ["World Happiness Report","Human Development Index","Global Competitiveness Report","Ease of Doing Business"],
  options_hi: ["वर्ल्ड हैप्पीनेस रिपोर्ट","मानव विकास सूचकांक","वैश्विक प्रतिस्पर्धात्मकता रिपोर्ट","व्यवसाय की सरलता रिपोर्ट"],
  answer_en: "World Happiness Report",
  answer_hi: "वर्ल्ड हैप्पीनेस रिपोर्ट",
  attempted: false,
  selected: ""
},
{
  num:19,
  question_en: "Who was appointed as Chairperson of NCERT recently?",
  question_hi: "हाल ही में NCERT के अध्यक्ष के रूप में किसे नियुक्त किया गया?",
  options_en: ["Dinesh Prasad Saklani","Manish Sisodia","Anurag Tripathi","Sanyam Bhardwaj"],
  options_hi: ["दिनेश प्रसाद सकलानी","मनीष सिसोदिया","अनुराग त्रिपाठी","संयम भारद्वाज"],
  answer_en: "Dinesh Prasad Saklani",
  answer_hi: "दिनेश प्रसाद सकलानी",
  attempted: false,
  selected: ""
},
{
  num:20,
  question_en: "Which scheme provides free coaching for SC/ST students?",
  question_hi: "कौन‑सी योजना SC/ST छात्रों के लिए मुफ्त कोचिंग देती है?",
  options_en: ["Free Coaching Scheme for SC/ST","PMAY","MGNREGA","PMFBY"],
  options_hi: ["एससी/एसटी के लिए मुफ्त कोचिंग योजना","प्रधानमंत्री आवास योजना","मनरेगा","प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "Free Coaching Scheme for SC/ST",
  answer_hi: "एससी/एसटी के लिए मुफ्त कोचिंग योजना",
  attempted: false,
  selected: ""
},

{
  num:21,
  question_en: "Which operation name was used by Indian Armed Forces in 2025 disaster relief?",
  question_hi: "2025 आपदा राहत में भारतीय सशस्त्र बलों द्वारा कौन‑सा ऑपरेशन नाम इस्तेमाल हुआ?",
  options_en: ["Operation Ganga","Operation Suraksha","Operation Brahma","Operation Shakti"],
  options_hi: ["ऑपरेशन गंगा","ऑपरेशन सुरक्षा","ऑपरेशन ब्रह्म","ऑपरेशन शक्ति"],
  answer_en: "Operation Ganga",
  answer_hi: "ऑपरेशन गंगा",
  attempted: false,
  selected: ""
},
{
  num:22,
  question_en: "Which country will host the 2028 Summer Olympics?",
  question_hi: "2028 ग्रीष्मकालीन ओलंपिक की मेज़बानी कौन करेगा?",
  options_en: ["USA","France","Japan","India"],
  options_hi: ["अमेरिका","फ्रांस","जापान","भारत"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num:23,
  question_en: "Which report measures global competitiveness of nations?",
  question_hi: "कौन‑सी रिपोर्ट देशों की वैश्विक प्रतिस्पर्धात्मकता को मापती है?",
  options_en: ["Global Competitiveness Report","World Happiness Report","HDI","IMF WEO"],
  options_hi: ["वैश्विक प्रतिस्पर्धात्मकता रिपोर्ट","विश्व प्रसन्नता सूचकांक","एचडीआई","आईएमएफ वर्ल्ड इकॉनॉमिक आउटलुक"],
  answer_en: "Global Competitiveness Report",
  answer_hi: "वैश्विक प्रतिस्पर्धात्मकता रिपोर्ट",
  attempted: false,
  selected: ""
},
{
  num:24,
  question_en: "Which country’s bank was designated a domestic systemically important bank (D‑SIB)?",
  question_hi: "किस देश के बैंक को घरेलू रूप से प्रणालीगत रूप से महत्वपूर्ण बैंक (D‑SIB) के रूप में नामित किया गया?",
  options_en: ["India (ICICI Bank)","USA (JPMorgan)","UK (Barclays)","Japan (Mizuho)"],
  options_hi: ["भारत (ICICI बैंक)","अमेरिका (जेपीमॉर्गन)","यूके (बार्कलेज)","जापान (मिज़ुहो)"],
  answer_en: "India (ICICI Bank)",
  answer_hi: "भारत (ICICI बैंक)",
  attempted: false,
  selected: ""
},
{
  num:25,
  question_en: "Which joint river commission meeting took place in Kolkata in 2025?",
  question_hi: "2025 में कोलकाता में कौन‑सी संयुक्त नदी आयोग की बैठक हुई?",
  options_en: ["India‑Bangladesh Joint River Commission","India‑Nepal","India‑Bhutan","India‑China"],
  options_hi: ["भारत‑बांग्लादेश संयुक्त नदी आयोग","भारत‑नेपाल","भारत‑भूटान","भारत‑चीन"],
  answer_en: "India‑Bangladesh Joint River Commission",
  answer_hi: "भारत‑बांग्लादेश संयुक्त नदी आयोग",
  attempted: false,
  selected: ""
},
{
  num:26,
  question_en: "Which country hosted the Asian Youth Games recently?",
  question_hi: "हाल ही में एशियाई यूथ गेम्स की मेज़बानी किस देश ने की?", 
  options_en: ["Thailand","China","Japan","India"],
  options_hi: ["थाईलैंड","चीन","जापान","भारत"],
  answer_en: "Thailand",
  answer_hi: "थाईलैंड",
  attempted: false,
  selected: ""
},
{
  num:27,
  question_en: "Which organization approved the Nuclear Energy Bill in India?",
  question_hi: "भारत में परमाणु ऊर्जा विधेयक को किस संगठन ने अनुमोदित किया?", 
  options_en: ["Union Cabinet","Parliament","Supreme Court","Finance Ministry"],
  options_hi: ["केंद्रीय कैबिनेट","संसद","सुप्रीम कोर्ट","वित्त मंत्रालय"],
  answer_en: "Union Cabinet",
  answer_hi: "केंद्रीय कैबिनेट",
  attempted: false,
  selected: ""
},
{
  num:28,
  question_en: "Which national animal reserve was newly designated in 2025?",
  question_hi: "2025 में कौन‑सा राष्ट्रीय पशु रिज़र्व नया घोषित हुआ?", 
  options_en: ["Tiger Reserve","Elephant Reserve","Lion Reserve","Rhino Reserve"],
  options_hi: ["बाघ रिज़र्व","हाथी रिज़र्व","सिंह रिज़र्व","घड़ियाल रिज़र्व"],
  answer_en: "Tiger Reserve",
  answer_hi: "बाघ रिज़र्व",
  attempted: false,
  selected: ""
},
{
  num:29,
  question_en: "Which missile test was in India’s current affairs in late 2025?",
  question_hi: "2025 के अंत में भारत के करेंट अफेयर्स में किस मिसाइल का परीक्षण शामिल था?", 
  options_en: ["Minuteman‑III","Agni‑P","BrahMos","Pralay"],
  options_hi: ["मिनटमैन‑III","अग्नि‑पी","ब्रह्मोस","प्रलय"],
  answer_en: "Minuteman‑III",
  answer_hi: "मिनटमैन‑III",
  attempted: false,
  selected: ""
},
{
  num:30,
  question_en: "Which global alliance meeting took place focused on water treaty?",
  question_hi: "जल संधि पर केंद्रित वैश्विक गठबंधन बैठक किसने आयोजित की?", 
  options_en: ["UN","G20","BRICS","ASEAN"],
  options_hi: ["संयुक्त राष्ट्र","जी20","ब्रिक्स","आसियान"],
  answer_en: "UN",
  answer_hi: "संयुक्त राष्ट्र",
  attempted: false,
  selected: ""
},
{
  num:31,
  question_en: "Who was India’s flag bearer for the Asian Games 2023 opening?",
  question_hi: "एशियाई खेल 2023 उद्घाटन में भारत का ध्वजवाहक कौन था?",
  options_en: ["Neeraj Chopra","Lakshya Sen","PV Sindhu","Manpreet Singh"],
  options_hi: ["नीरज चोपड़ा","लक्ष्य सेन","पीवी सिंधु","मनप्रीत सिंह"],
  answer_en: "Neeraj Chopra",
  answer_hi: "नीरज चोपड़ा",
  attempted: false,
  selected: ""
},
{
  num:32,
  question_en: "Which index ranks countries by business ease?",
  question_hi: "व्यवसाय करने की सरलता के आधार पर देशों को रैंक करने वाला सूचकांक कौन‑सा है?",  
  options_en: ["Ease of Doing Business","HDI","WEO","GHG Index"],
  options_hi: ["व्यवसाय करने की सरलता","एचडीआई","डब्ल्यूईओ","जीएचजी सूचकांक"],
  answer_en: "Ease of Doing Business",
  answer_hi: "व्यवसाय करने की सरलता",
  attempted: false,
  selected: ""
},
{
  num:33,
  question_en: "Which global climate event did India attend in 2025?",
  question_hi: "2025 में भारत ने किस वैश्विक जलवायु आयोजन में भाग लिया?", 
  options_en: ["COP28","UNFCCC","G20 Climate Meet","BRICS Climate Forum"],
  options_hi: ["COP28","UNFCCC","जी20 जलवायु बैठक","ब्रिक्स जलवायु मंच"],
  answer_en: "COP28",
  answer_hi: "COP28",
  attempted: false,
  selected: ""
},
{
  num:34,
  question_en: "Which country launched the first lunar south pole landing mission?",
  question_hi: "किस देश ने पहला चंद्र दक्षिण ध्रुव लैंडिंग मिशन लॉन्च किया?",
  options_en: ["India","USA","China","Russia"],
  options_hi: ["भारत","अमेरिका","चीन","रूस"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:35,
  question_en: "Which scheme launched crop diversification support?",
  question_hi: "किस योजना ने फसल विविधीकरण सहायता शुरू की?", 
  options_en: ["Crop Diversification Scheme","PMFBY","PMJDY","PMAY"],
  options_hi: ["फसल विविधीकरण योजना","प्रधानमंत्री फसल बीमा योजना","प्रधानमंत्री जनधन योजना","प्रधानमंत्री आवास योजना"],
  answer_en: "Crop Diversification Scheme",
  answer_hi: "फसल विविधीकरण योजना",
  attempted: false,
  selected: ""
},
{
  num:36,
  question_en: "Who topped the UNESCO World Heritage List additions recently?",
  question_hi: "हाल ही में यूनेस्को विश्व धरोहर सूची में शीर्ष कौन था?", 
  options_en: ["India","France","Egypt","China"],
  options_hi: ["भारत","फ्रांस","मिस्र","चीन"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:37,
  question_en: "What major climate goal did COP28 focus on?",
  question_hi: "COP28 ने किस प्रमुख जलवायु लक्ष्य पर ध्यान केंद्रित किया?", 
  options_en: ["Net Zero Emissions","Deforestation","Ocean Cleanup","Green Jobs"],
  options_hi: ["नेट ज़ीरो उत्सर्जन","वन कटाई","महासागर सफाई","हरित रोजगार"],
  answer_en: "Net Zero Emissions",
  answer_hi: "नेट ज़ीरो उत्सर्जन",
  attempted: false,
  selected: ""
},
{
  num:38,
  question_en: "Which global summit discussed AI governance?",
  question_hi: "किस वैश्विक शिखर सम्मेलन में एआई शासन पर चर्चा की गई?",  
  options_en: ["G20 Summit","BRICS Summit","UNGA","WEF"],
  options_hi: ["जी20 शिखर","ब्रिक्स शिखर","संयुक्त राष्ट्र महासभा","विश्व आर्थिक मंच"],
  answer_en: "G20 Summit",
  answer_hi: "जी20 शिखर",
  attempted: false,
  selected: ""
},
{
  num:39,
  question_en: "Which report ranks nations on human development?",
  question_hi: "कौन‑सी रिपोर्ट देशों को मानव विकास के आधार पर रैंक करती है?",  
  options_en: ["Human Development Index","Ease of Doing Business","GCI","WEO"],
  options_hi: ["मानव विकास सूचकांक","व्यवसाय की सरलता","वैश्विक प्रतिस्पर्धात्मकता सूचकांक","विश्व आर्थिक आउटलुक"],
  answer_en: "Human Development Index",
  answer_hi: "मानव विकास सूचकांक",
  attempted: false,
  selected: ""
},
{
  num:40,
  question_en: "Which Indian state declared its first Ramsar site in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने अपना पहला रामसर स्थल घोषित किया?", 
  options_en: ["Chhattisgarh","Madhya Pradesh","Rajasthan","Gujarat"],
  options_hi: ["छत्तीसगढ़","मध्य प्रदेश","राजस्थान","गुजरात"],
  answer_en: "Chhattisgarh",
  answer_hi: "छत्तीसगढ़",
  attempted: false,
  selected: ""
},

{
  num:41,
  question_en: "SSC GD Current Affairs 2025: Which day is observed as World Environment Day?",
  question_hi: "विश्व पर्यावरण दिवस किस दिन मनाया जाता है?",
  options_en: ["5 June","14 November","21 March","1 May"],
  options_hi: ["5 जून","14 नवंबर","21 मार्च","1 मई"],
  answer_en: "5 June",
  answer_hi: "5 जून",
  attempted: false,
  selected: ""
},
{
  num:42,
  question_en: "Which country hosted the 2025 COP28 Presidency meeting venue?",
  question_hi: "2025 COP28 अध्यक्ष बैठक की मेज़बानी किस देश ने की?",  
  options_en: ["UAE","India","UK","USA"],
  options_hi: ["यूएई","भारत","यूके","अमेरिका"],
  answer_en: "UAE",
  answer_hi: "यूएई",
  attempted: false,
  selected: ""
},
{
  num:43,
  question_en: "Which country’s delegation led discussions at UNGA on climate in 2025?",
  question_hi: "2025 में जलवायु पर UNGA में चर्चा का नेतृत्व किस देश के प्रतिनिधिमंडल ने किया?",  
  options_en: ["India","USA","China","UK"],
  options_hi: ["भारत","अमेरिका","चीन","यूके"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:44,
  question_en: "Who was appointed Chief of Defence Staff (CDS) of India recently?",
  question_hi: "हाल ही में भारत के चीफ ऑफ डिफेंस स्टाफ (CDS) के रूप में किसे नियुक्त किया गया?",  
  options_en: ["Anil Chauhan","Bipin Rawat","K Sundarajan","Navin Kapoor"],
  options_hi: ["अनिल चौहान","बिपिन रावत","के सुंदराजन","नवीन कपूर"],
  answer_en: "Anil Chauhan",
  answer_hi: "अनिल चौहान",
  attempted: false,
  selected: ""
},
{
  num:45,
  question_en: "Which report was released by IMF in 2025 on growth outlook?",  
  question_hi: "2025 में IMF द्वारा विकास आउटलुक पर कौन‑सी रिपोर्ट जारी की गई?",  
  options_en: ["World Economic Outlook","Global Financial Stability Report","Regional Economic Report","Fiscal Monitor"],
  options_hi: ["विश्व आर्थिक आउटलुक","वैश्विक वित्तीय स्थिरता रिपोर्ट","क्षेत्रीय आर्थिक रिपोर्ट","फिस्कल मॉनिटर"],
  answer_en: "World Economic Outlook",
  answer_hi: "विश्व आर्थिक आउटलुक",
  attempted: false,
  selected: ""
},
{
  num:46,
  question_en: "Which major defence exercise took place involving India in 2025?",  
  question_hi: "2025 में भारत के शामिल होने वाला प्रमुख रक्षा अभ्यास कौन‑सा था?",  
  options_en: ["Sea Dragon 2025","Malabar","VINBAX","Yudh Abhyas"],
  options_hi: ["सी ड्रैगन 2025","मलबार","विनबैक्स","युद्ध अभ्यास"],
  answer_en: "Sea Dragon 2025",
  answer_hi: "सी ड्रैगन 2025",
  attempted: false,
  selected: ""
},
{
  num:47,
  question_en: "Which mission focuses on lunar south pole for India?",
  question_hi: "भारत का कौन‑सा मिशन चंद्र दक्षिण ध्रुव पर केंद्रित है?",  
  options_en: ["Chandrayaan‑3","Gaganyaan","Aditya‑L1","Mangalyaan"],
  options_hi: ["चंद्रयान‑3","गगनयान","आदित्य‑L1","मंगलयान"],
  answer_en: "Chandrayaan‑3",
  answer_hi: "चंद्रयान‑3",
  attempted: false,
  selected: ""
},
{
  num:48,
  question_en: "Which global index places India as the third largest AI power?",
  question_hi: "कौन‑सा वैश्विक सूचकांक भारत को तीसरे सबसे बड़े एआई पावरहाउस के रूप में रखता है?",  
  options_en: ["Global AI Vibrancy Index","WEO","HDI","GCI"],
  options_hi: ["ग्लोबल एआई वाइब्रेंसी इंडेक्स","विश्व आर्थिक आउटलुक","एचडीआई","वैश्विक प्रतिस्पर्धात्मकता सूचकांक"],
  answer_en: "Global AI Vibrancy Index",
  answer_hi: "ग्लोबल एआई वाइब्रेंसी इंडेक्स",
  attempted: false,
  selected: ""
},
{
  num:49,
  question_en: "Which environmental site in India was given Ramsar status in 2025?",  
  question_hi: "2025 में भारत में किस पर्यावरण स्थल को रामसर स्थिति दी गई?",  
  options_en: ["Kopra Reservoir","Sundarbans","Keoladeo","Wular Lake"],
  options_hi: ["कोपरा जलाशय","सुंदरबन","केओलादेव","वुलर झील"],
  answer_en: "Kopra Reservoir",
  answer_hi: "कोपरा जलाशय",
  attempted: false,
  selected: ""
},
{
  num:50,
  question_en: "Which nation ranks high in Ease of Doing Business 2025?",  
  question_hi: "2025 में व्यवसाय करने की सरलता सूचकांक में कौन‑सा देश ऊंची रैंक पर है?",  
  options_en: ["New Zealand","Singapore","India","USA"],
  options_hi: ["न्यूज़ीलैंड","सिंगापुर","भारत","अमेरिका"],
  answer_en: "Singapore",
  answer_hi: "सिंगापुर",
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