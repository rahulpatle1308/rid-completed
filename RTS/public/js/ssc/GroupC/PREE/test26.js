const questions = [
  {
  num:1,
  question_en: "Which African country approved a deal for Russia’s first naval base on its soil in 2025?",
  question_hi: "2025 में किस अफ़्रीकी देश ने रूस के पहले समुद्री अड्डे की मंज़ूरी दी?",
  options_en: ["Sudan","Egypt","Kenya","Nigeria"],
  options_hi: ["सूडान","मिस्र","केन्या","नाइजीरिया"],
  answer_en: "Sudan",
  answer_hi: "सूडान",
  attempted: false,
  selected: ""
},
{
  num:2,
  question_en: "India has been re‑elected to the UN General Assembly for which term?",
  question_hi: "भारत को किस अवधि के लिए संयुक्त राष्ट्र महासभा में फिर चुना गया?",
  options_en: ["2025–29","2024–28","2026–30","2023–27"],
  options_hi: ["2025–29","2024–28","2026–30","2023–27"],
  answer_en: "2025–29",
  answer_hi: "2025–29",
  attempted: false,
  selected: ""
},
{
  num:3,
  question_en: "Which Indian Navy advanced stealth frigate was delivered under Project 17A?",
  question_hi: "प्रोजेक्ट 17A के तहत कौन‑सी उन्नत Stealth फ्रिगेट भारतीय नौसेना को सौंपी गई?",
  options_en: ["INS Taragiri","INS Shivalik","INS Vikrant","INS Kalvari"],
  options_hi: ["आईएनएस तारागिरि","आईएनएस शिवालिक","आईएनएस विक्रांत","आईएनएस कालवरी"],
  answer_en: "INS Taragiri",
  answer_hi: "आईएनएस तारागिरि",
  attempted: false,
  selected: ""
},
{
  num:4,
  question_en: "Which high‑speed system did India test for fighter aircraft escape systems in 2025?",
  question_hi: "2025 में लड़ाकू विमानों के escape सिस्टम के लिए भारत ने कौन‑सी high‑speed प्रणाली का परीक्षण किया?",
  options_en: ["Rocket sled","Hypersonic glide","Laser system","Drone parachute"],
  options_hi: ["रॉकेट स्लेड","हाइपरसोनिक ग्लाइड","लेजर सिस्टम","ड्रोन पैराशूट"],
  answer_en: "Rocket sled",
  answer_hi: "रॉकेट स्लेड",
  attempted: false,
  selected: ""
},
{
  num:5,
  question_en: "Which strategic agreement did India sign with the Philippines in 2025?",
  question_hi: "2025 में भारत ने फिलीपींस के साथ किस प्रकार की समझौता रणनीति पर दस्तख़त किए?",
  options_en: ["Strategic Partnership","Free Trade Agreement"," defence pact","space collaboration"],
  options_hi: ["रणनीतिक भागीदारी","मुक्त व्यापार समझौता","रक्षा संधि","अंतरिक्ष सहयोग"],
  answer_en: "Strategic Partnership",
  answer_hi: "रणनीतिक भागीदारी",
  attempted: false,
  selected: ""
},
{
  num:6,
  question_en: "Which major metro project did PM Modi inaugurate in 2025?",
  question_hi: "2025 में पीएम मोदी ने किस बड़े मेट्रो प्रोजेक्ट का उद्घाटन किया?",
  options_en: ["Bengaluru Yellow Line","Mumbai Metro Line 3","Delhi Metro Phase 4","Chennai Metro Expansion"],
  options_hi: ["बेंगलुरु येलो लाइन","मुंबई मेट्रो लाइन 3","दिल्ली मेट्रो फेज 4","चेन्नई मेट्रो विस्तार"],
  answer_en: "Bengaluru Yellow Line",
  answer_hi: "बेंगलुरु येलो लाइन",
  attempted: false,
  selected: ""
},
{
  num:7,
  question_en: "Which express train was flagged off by PM Modi covering 881 km between Ajni and Pune?",
  question_hi: "अजनी और पुणे के बीच 881 किमी को कवर करने वाली कौन‑सी ऐक्सप्रेस ट्रेन पीएम मोदी ने झंडी दिखाकर रवाना की?",
  options_en: ["Vande Bharat Express","Rajdhani Express","Shatabdi Express","Duronto Express"],
  options_hi: ["वंदे भारत एक्सप्रेस","राजधानी एक्सप्रेस","शताब्दी एक्सप्रेस","दुरोंतो एक्सप्रेस"],
  answer_en: "Vande Bharat Express",
  answer_hi: "वंदे भारत एक्सप्रेस",
  attempted: false,
  selected: ""
},
{
  num:8,
  question_en: "Which organization’s data showed revenues of the top 100 global arms suppliers reached $700 billion in 2024?",
  question_hi: "किस संगठन के आंकड़ों के अनुसार 2024 में शीर्ष 100 वैश्विक हथियार आपूर्तिकर्ताओं की आय $700 बिलियन तक पहुंची?",
  options_en: ["SIPRI","UNDP","IMF","World Bank"],
  options_hi: ["एसआईपीआरआई","यूएनडीपी","आईएमएफ","विश्व बैंक"],
  answer_en: "SIPRI",
  answer_hi: "एसआईपीआरआई",
  attempted: false,
  selected: ""
},
{
  num:9,
  question_en: "Indian Navy Day is celebrated on which date every year?",
  question_hi: "भारतीय नौसेना दिवस हर साल किस तारीख को मनाया जाता है?",
  options_en: ["4 December","15 August","26 January","2 October"],
  options_hi: ["4 दिसंबर","15 अगस्त","26 जनवरी","2 अक्टूबर"],
  answer_en: "4 December",
  answer_hi: "4 दिसंबर",
  attempted: false,
  selected: ""
},
{
  num:10,
  question_en: "Sudan allowed Russia to do what in Africa in 2025?",
  question_hi: "2025 में सूडान ने अफ़्रीका में रूस को क्या करने की अनुमति दी?",
  options_en: ["Establish naval base","Open embassy","Start airline","Oil drilling"],
  options_hi: ["समुद्री अड्डा स्थापित करना","दूतावास खोलना","एयरलाइन शुरू करना","तेल ड्रिलिंग"],
  answer_en: "Establish naval base",
  answer_hi: "समुद्री अड्डा स्थापित करना",
  attempted: false,
  selected: ""
},

{
  num:11,
  question_en: "India plans to procure more drones of which type after Operation Sindoor?",
  question_hi: "ऑपरेशन सिंदूर के बाद भारत किस प्रकार के ड्रोन अधिक खरीदने की योजना बना रहा है?",
  options_en: ["Heron MK II","Predator","Reaper","Bayraktar"],
  options_hi: ["हेरोन MK II","प्रिडेटर","रीपर","बायराकटर"],
  answer_en: "Heron MK II",
  answer_hi: "हेरोन MK II",
  attempted: false,
  selected: ""
},
{
  num:12,
  question_en: "Which Indian mission was successfully tested by the Indian Army on December 1, 2025?",
  question_hi: "1 दिसंबर 2025 को किस मिशन का सफल परीक्षण भारतीय सेना ने किया?",
  options_en: ["BrahMos supersonic missile","Agni P","Pralay","Shaurya"],
  options_hi: ["ब्रह्मोस सुपरसोनिक मिसाइल","अग्नि पी","प्रलय","शूर्य"],
  answer_en: "BrahMos supersonic missile",
  answer_hi: "ब्रह्मोस सुपरसोनिक मिसाइल",
  attempted: false,
  selected: ""
},
{
  num:13,
  question_en: "Which country’s metro entered Guinness World Records for longest driverless network?",
  question_hi: "किस देश की मेट्रो ने सबसे लंबा ड्राइवरलेस नेटवर्क के लिए गिनीज वर्ल्ड रिकॉर्ड दर्ज करवाया?",
  options_en: ["Saudi Arabia","UAE","China","USA"],
  options_hi: ["सऊदी अरब","यूएई","चीन","अमेरिका"],
  answer_en: "Saudi Arabia",
  answer_hi: "सऊदी अरब",
  attempted: false,
  selected: ""
},
{
  num:14,
  question_en: "Riyadh Metro set a world record at how many km?",
  question_hi: "रियाद मेट्रो ने कितने किलोमीटर पर विश्व रिकॉर्ड बनाया?",  
  options_en: ["176 km","150 km","200 km","120 km"],
  options_hi: ["176 किमी","150 किमी","200 किमी","120 किमी"],
  answer_en: "176 km",
  answer_hi: "176 किमी",
  attempted: false,
  selected: ""
},
{
  num:15,
  question_en: "India was re‑elected to UNGA for the term 2025–29. UNGA stands for?",
  question_hi: "भारत 2025–29 के लिए UNGA में फिर चुना गया। UNGA का पूरा नाम क्या है?",
  options_en: ["United Nations General Assembly","United Nations Governance Agency","Universal Nations Group Assembly","Union Nations Global Alliance"],
  options_hi: ["संयुक्त राष्ट्र महासभा","संयुक्त राष्ट्र शासन एजेंसी","वैश्विक राष्ट्र समूह सभा","संयुक्त राष्ट्र वैश्विक गठबन्धन"],
  answer_en: "United Nations General Assembly",
  answer_hi: "संयुक्त राष्ट्र महासभा",
  attempted: false,
  selected: ""
},
{
  num:16,
  question_en: "Which Indian Rail service project was inaugurated by PM in 2025?",
  question_hi: "2025 में पीएम द्वारा कौन‑सा भारतीय रेलवे सेवा परियोजना उद्घाटित किया गया?",  
  options_en: ["Metro Yellow Line","Vande Bharat Express","High Speed Rail","Heritage Train"],
  options_hi: ["मेट्रो येलो लाइन","वंदे भारत एक्सप्रेस","हाई स्पीड रेल","हेरिटेज ट्रेन"],
  answer_en: "Metro Yellow Line",
  answer_hi: "मेट्रो येलो लाइन",
  attempted: false,
  selected: ""
},
{
  num:17,
  question_en: "Which global institute reported arms‑sales revenues reaching $700 billion in 2024?",
  question_hi: "किस वैश्विक संस्था ने 2024 में हथियार बिक्री राजस्व $700 बिलियन बताया?",  
  options_en: ["SIPRI","UNICEF","WHO","IMF"],
  options_hi: ["एसआईपीआरआई","यूनिसेफ","डब्ल्यूएचओ","आईएमएफ"],
  answer_en: "SIPRI",
  answer_hi: "एसआईपीआरआई",
  attempted: false,
  selected: ""
},
{
  num:18,
  question_en: "Which day marks progression for the Indian Navy in 1971 war?",
  question_hi: "1971 के युद्ध में भारतीय नौसेना की प्रमुख भूमिका को कौन‑सा दिन चिह्नित करता है?",  
  options_en: ["Indian Navy Day","Republic Day","Independence Day","Army Day"],
  options_hi: ["भारतीय नौसेना दिवस","गणतंत्र दिवस","स्वतंत्रता दिवस","सेना दिवस"],
  answer_en: "Indian Navy Day",
  answer_hi: "भारतीय नौसेना दिवस",
  attempted: false,
  selected: ""
},
{
  num:19,
  question_en: "Which express train ran between Nagpur and Pune covering 881 km?",
  question_hi: "कौन‑सी एक्सप्रेस ट्रेन नागपुर और पुणे के बीच 881 किमी चली?",  
  options_en: ["Vande Bharat Express","Rajdhani Express","Shatabdi Express","Duronto Express"],
  options_hi: ["वंदे भारत एक्सप्रेस","राजधानी एक्सप्रेस","शताब्दी एक्सप्रेस","दुरोंतो एक्सप्रेस"],
  answer_en: "Vande Bharat Express",
  answer_hi: "वंदे भारत एक्सप्रेस",
  attempted: false,
  selected: ""
},
{
  num:20,
  question_en: "Which Indian state launched the 'One District One Product' scheme in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने 'एक जिला एक उत्पाद' योजना शुरू की?",
  options_en: ["Tamil Nadu","Madhya Pradesh","Uttar Pradesh","Rajasthan"],
  options_hi: ["तमिलनाडु","मध्य प्रदेश","उत्तर प्रदेश","राजस्थान"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},
{
  num:21,
  question_en: "Which Indian player won the 2025 World Badminton Championship?",
  question_hi: "2025 में किस भारतीय खिलाड़ी ने वर्ल्ड बैडमिंटन चैंपियनशिप जीती?",
  options_en: ["PV Sindhu","Lakshya Sen","Kidambi Srikanth","B Sai Praneeth"],
  options_hi: ["पीवी सिंधु","लक्ष्य सेन","किदाम्बी श्रीकांत","बी साई प्रणीत"],
  answer_en: "Lakshya Sen",
  answer_hi: "लक्ष्य सेन",
  attempted: false,
  selected: ""
},
{
  num:22,
  question_en: "Which Indian university was ranked in top 200 QS World University Rankings 2025?",
  question_hi: "2025 के QS वर्ल्ड यूनिवर्सिटी रैंकिंग में कौन‑सी भारतीय यूनिवर्सिटी शीर्ष 200 में आई?",
  options_en: ["IIT Bombay","IISc Bangalore","Delhi University","IIT Delhi"],
  options_hi: ["आईआईटी बॉम्बे","आईआईएससी बेंगलुरु","दिल्ली विश्वविद्यालय","आईआईटी दिल्ली"],
  answer_en: "IISc Bangalore",
  answer_hi: "आईआईएससी बेंगलुरु",
  attempted: false,
  selected: ""
},
{
  num:23,
  question_en: "Which country hosted the G20 Summit 2025?",
  question_hi: "2025 का G20 शिखर सम्मेलन किस देश में हुआ?",
  options_en: ["India","Brazil","Japan","Germany"],
  options_hi: ["भारत","ब्राज़ील","जापान","जर्मनी"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:24,
  question_en: "Who became the first Indian woman fighter pilot to command a squadron in 2025?",
  question_hi: "2025 में पहली भारतीय महिला फाइटर पायलट ने किस स्क्वाड्रन का नेतृत्व किया?",
  options_en: ["Avani Chaturvedi","Bhavna Kapur","Mohana Singh","Ghazala Khan"],
  options_hi: ["अवनी चतुर्वेदी","भावना कपूर","मोहन सिंह","ग़ज़ाला खान"],
  answer_en: "Avani Chaturvedi",
  answer_hi: "अवनी चतुर्वेदी",
  attempted: false,
  selected: ""
},
{
  num:25,
  question_en: "Which country topped the Global Firepower Index 2025?",
  question_hi: "2025 में ग्लोबल फायरपावर इंडेक्स में कौन‑सा देश शीर्ष पर है?",
  options_en: ["USA","China","Russia","India"],
  options_hi: ["अमेरिका","चीन","रूस","भारत"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num:26,
  question_en: "Which Indian state became the first to achieve 100% vaccination for children in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने बच्चों के लिए 100% टीकाकरण हासिल किया?",
  options_en: ["Kerala","Himachal Pradesh","Tamil Nadu","Punjab"],
  options_hi: ["केरल","हिमाचल प्रदेश","तमिलनाडु","पंजाब"],
  answer_en: "Himachal Pradesh",
  answer_hi: "हिमाचल प्रदेश",
  attempted: false,
  selected: ""
},
{
  num:27,
  question_en: "Which Indian missile was successfully test-fired for anti-ship capability in 2025?",
  question_hi: "2025 में किस भारतीय मिसाइल को एंटी-शिप क्षमता के लिए सफलतापूर्वक टेस्ट किया गया?",
  options_en: ["BrahMos","Agni P","Pralay","Shaurya"],
  options_hi: ["ब्रह्मोस","अग्नि पी","प्रलय","शौर्य"],
  answer_en: "BrahMos",
  answer_hi: "ब्रह्मोस",
  attempted: false,
  selected: ""
},
{
  num:28,
  question_en: "Which Indian athlete won gold in 2025 Asian Athletics Championships?",
  question_hi: "2025 एशियाई एथलेटिक्स चैम्पियनशिप में किस भारतीय एथलीट ने स्वर्ण पदक जीता?",
  options_en: ["Neeraj Chopra","Abhishek Verma","Dutee Chand","Hima Das"],
  options_hi: ["नीरज चोपड़ा","अभिषेक वर्मा","दुती चंद","हिमा दास"],
  answer_en: "Neeraj Chopra",
  answer_hi: "नीरज चोपड़ा",
  attempted: false,
  selected: ""
},
{
  num:29,
  question_en: "Which Indian state launched 'Digital Agriculture Mission' in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने 'डिजिटल एग्रीकल्चर मिशन' शुरू किया?",
  options_en: ["Punjab","Maharashtra","Uttar Pradesh","Karnataka"],
  options_hi: ["पंजाब","महाराष्ट्र","उत्तर प्रदेश","कर्नाटक"],
  answer_en: "Punjab",
  answer_hi: "पंजाब",
  attempted: false,
  selected: ""
},
{
  num:30,
  question_en: "Which Indian app became top 10 globally for downloads in 2025?",
  question_hi: "2025 में कौन‑सा भारतीय ऐप डाउनलोड के लिए वैश्विक शीर्ष 10 में आया?",
  options_en: ["Paytm","BharatPe","UPI Apps","PhonePe"],
  options_hi: ["पेटीएम","भारतपे","यूपीआई ऐप्स","फोनपे"],
  answer_en: "PhonePe",
  answer_hi: "फोनपे",
  attempted: false,
  selected: ""
},
{
  num:31,
  question_en: "Which Indian state became first to implement 'Green Energy Policy' fully in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने 'ग्रीन एनर्जी पॉलिसी' को पूरी तरह लागू किया?",
  options_en: ["Gujarat","Rajasthan","Madhya Pradesh","Karnataka"],
  options_hi: ["गुजरात","राजस्थान","मध्य प्रदेश","कर्नाटक"],
  answer_en: "Gujarat",
  answer_hi: "गुजरात",
  attempted: false,
  selected: ""
},
{
  num:32,
  question_en: "Which Indian institution ranked in top 50 of THE Impact Rankings 2025?",
  question_hi: "2025 के THE इंपैक्ट रैंकिंग में कौन‑सा भारतीय संस्थान शीर्ष 50 में आया?",
  options_en: ["IIT Madras","IIT Delhi","IISc Bangalore","AIIMS Delhi"],
  options_hi: ["आईआईटी मद्रास","आईआईटी दिल्ली","आईआईएससी बेंगलुरु","एम्स दिल्ली"],
  answer_en: "IIT Madras",
  answer_hi: "आईआईटी मद्रास",
  attempted: false,
  selected: ""
},
{
  num:33,
  question_en: "Which Indian bank launched 'Digital Wealth Management' service in 2025?",
  question_hi: "2025 में किस भारतीय बैंक ने 'डिजिटल वेल्थ मैनेजमेंट' सेवा शुरू की?",
  options_en: ["SBI","HDFC Bank","ICICI Bank","Axis Bank"],
  options_hi: ["एसबीआई","एचडीएफसी बैंक","आईसीआईसीआई बैंक","एक्सिस बैंक"],
  answer_en: "ICICI Bank",
  answer_hi: "आईसीआईसीआई बैंक",
  attempted: false,
  selected: ""
},
{
  num:34,
  question_en: "Which country hosted the 2025 Women’s Hockey World Cup?",
  question_hi: "2025 में महिला हॉकी विश्व कप की मेज़बानी किस देश ने की?",
  options_en: ["Netherlands","India","Germany","Australia"],
  options_hi: ["नीदरलैंड","भारत","जर्मनी","ऑस्ट्रेलिया"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num:35,
  question_en: "Which Indian festival was included in UNESCO Intangible Heritage list 2025?",
  question_hi: "2025 में कौन‑सा भारतीय उत्सव यूनेस्को अमूर्त धरोहर सूची में शामिल हुआ?",
  options_en: ["Durga Puja","Diwali","Holi","Onam"],
  options_hi: ["दुर्गा पूजा","दिवाली","होली","ओणम"],
  answer_en: "Durga Puja",
  answer_hi: "दुर्गा पूजा",
  attempted: false,
  selected: ""
},
{
  num:36,
  question_en: "Which country won the 2025 Thomas Cup in badminton?",
  question_hi: "2025 में बैडमिंटन थॉमस कप किस देश ने जीता?",
  options_en: ["Japan","India","Denmark","China"],
  options_hi: ["जापान","भारत","डेनमार्क","चीन"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num:37,
  question_en: "Which Indian state launched 'Smart Village Mission' in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने 'स्मार्ट विलेज मिशन' शुरू किया?",
  options_en: ["Rajasthan","Gujarat","Uttar Pradesh","Madhya Pradesh"],
  options_hi: ["राजस्थान","गुजरात","उत्तर प्रदेश","मध्य प्रदेश"],
  answer_en: "Rajasthan",
  answer_hi: "राजस्थान",
  attempted: false,
  selected: ""
},
{
  num:38,
  question_en: "Which Indian city hosted the 2025 National Games?",
  question_hi: "2025 में राष्ट्रीय खेलों की मेज़बानी किस भारतीय शहर ने की?",
  options_en: ["Bhopal","Kolkata","Ahmedabad","Chennai"],
  options_hi: ["भोपाल","कोलकाता","अहमदाबाद","चेन्नई"],
  answer_en: "Bhopal",
  answer_hi: "भोपाल",
  attempted: false,
  selected: ""
},
{
  num:39,
  question_en: "Which Indian space mission aims at Mars sample return in 2025?",
  question_hi: "2025 में कौन‑सा भारतीय अंतरिक्ष मिशन मंगल ग्रह का नमूना लौटाने पर केंद्रित है?",
  options_en: ["Mangalyaan-2","Chandrayaan-3","Aditya-L1","Gaganyaan"],
  options_hi: ["मंगलयान-2","चंद्रयान-3","आदित्य-L1","गगनयान"],
  answer_en: "Mangalyaan-2",
  answer_hi: "मंगलयान-2",
  attempted: false,
  selected: ""
},
{
  num:40,
  question_en: "Which Indian river project was inaugurated in 2025 to improve irrigation?",
  question_hi: "2025 में सिंचाई सुधार के लिए किस भारतीय नदी परियोजना का उद्घाटन किया गया?",
  options_en: ["Ken-Betwa Link Project","Polavaram Project","Sardar Sarovar Project","Narmada Project"],
  options_hi: ["कैन-बेतवा लिंक प्रोजेक्ट","पोलावरम प्रोजेक्ट","सरदार सरोवर प्रोजेक्ट","नर्मदा प्रोजेक्ट"],
  answer_en: "Ken-Betwa Link Project",
  answer_hi: "कैन-बेतवा लिंक प्रोजेक्ट",
  attempted: false,
  selected: ""
},
{
  num:41,
  question_en: "Which Indian state launched 'Women Safety App' in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने 'महिला सुरक्षा ऐप' लॉन्च किया?",
  options_en: ["Maharashtra","Uttar Pradesh","Kerala","Gujarat"],
  options_hi: ["महाराष्ट्र","उत्तर प्रदेश","केरल","गुजरात"],
  answer_en: "Uttar Pradesh",
  answer_hi: "उत्तर प्रदेश",
  attempted: false,
  selected: ""
},
{
  num:42,
  question_en: "Which Indian institute ranked in top 100 of QS Asia University Rankings 2025?",
  question_hi: "2025 के QS एशिया यूनिवर्सिटी रैंकिंग में कौन‑सा भारतीय संस्थान शीर्ष 100 में आया?",
  options_en: ["IIT Bombay","IIT Delhi","IISc Bangalore","IIT Kharagpur"],
  options_hi: ["आईआईटी बॉम्बे","आईआईटी दिल्ली","आईआईएससी बेंगलुरु","आईआईटी खड़गपुर"],
  answer_en: "IIT Bombay",
  answer_hi: "आईआईटी बॉम्बे",
  attempted: false,
  selected: ""
},
{
  num:43,
  question_en: "Which Indian award recognized innovations in renewable energy 2025?",
  question_hi: "2025 में नवीकरणीय ऊर्जा में नवाचारों को किस भारतीय पुरस्कार ने मान्यता दी?",
  options_en: ["National Energy Award","PM Energy Innovation Award","Vigyan Ratna","GreenTech Award"],
  options_hi: ["राष्ट्रीय ऊर्जा पुरस्कार","प्रधानमंत्री ऊर्जा नवाचार पुरस्कार","विज्ञान रत्न","ग्रीनटेक पुरस्कार"],
  answer_en: "PM Energy Innovation Award",
  answer_hi: "प्रधानमंत्री ऊर्जा नवाचार पुरस्कार",
  attempted: false,
  selected: ""
},
{
  num:44,
  question_en: "Which country won the 2025 ICC Women’s T20 World Cup?",
  question_hi: "2025 में ICC महिला T20 विश्व कप किस देश ने जीता?",
  options_en: ["Australia","India","England","South Africa"],
  options_hi: ["ऑस्ट्रेलिया","भारत","इंग्लैंड","दक्षिण अफ़्रीका"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num:45,
  question_en: "Which Indian PM inaugurated new AI Research Centre in 2025?",
  question_hi: "2025 में किस भारतीय प्रधानमंत्री ने नया AI अनुसंधान केंद्र उद्घाटित किया?",
  options_en: ["Narendra Modi","Rajnath Singh","Manmohan Singh","Piyush Goyal"],
  options_hi: ["नरेंद्र मोदी","राजनाथ सिंह","मनमोहन सिंह","पियूष गोयल"],
  answer_en: "Narendra Modi",
  answer_hi: "नरेंद्र मोदी",
  attempted: false,
  selected: ""
},
{
  num:46,
  question_en: "Which Indian state achieved 100% electrification of villages in 2025?",
  question_hi: "2025 में किस भारतीय राज्य ने गांवों में 100% विद्युतीकरण हासिल किया?",
  options_en: ["Himachal Pradesh","Kerala","Gujarat","Rajasthan"],
  options_hi: ["हिमाचल प्रदेश","केरल","गुजरात","राजस्थान"],
  answer_en: "Himachal Pradesh",
  answer_hi: "हिमाचल प्रदेश",
  attempted: false,
  selected: ""
},
{
  num:47,
  question_en: "Which Indian company became top 10 in global AI patent filings 2025?",
  question_hi: "2025 में कौन‑सी भारतीय कंपनी वैश्विक AI पेटेंट फाइलिंग में शीर्ष 10 में आई?",
  options_en: ["TCS","Infosys","Wipro","HCL"],
  options_hi: ["टीसीएस","इन्फोसिस","विप्रो","एचसीएल"],
  answer_en: "TCS",
  answer_hi: "टीसीएस",
  attempted: false,
  selected: ""
},
{
  num:48,
  question_en: "Which Indian city hosted the 2025 International Yoga Festival?",
  question_hi: "2025 में अंतर्राष्ट्रीय योग महोत्सव की मेज़बानी किस भारतीय शहर ने की?",
  options_en: ["Rishikesh","Pune","Bangalore","Delhi"],
  options_hi: ["ऋषिकेश","पुणे","बेंगलुरु","दिल्ली"],
  answer_en: "Rishikesh",
  answer_hi: "ऋषिकेश",
  attempted: false,
  selected: ""
},
{
  num:49,
  question_en: "Which Indian railway project became India’s first solar-powered station in 2025?",
  question_hi: "2025 में कौन‑सा भारतीय रेलवे प्रोजेक्ट भारत का पहला सौर-ऊर्जा संचालित स्टेशन बना?",
  options_en: ["Ajni Station","Nagpur Station","Bhopal Station","Mumbai Station"],
  options_hi: ["अजनी स्टेशन","नागपुर स्टेशन","भोपाल स्टेशन","मुंबई स्टेशन"],
  answer_en: "Ajni Station",
  answer_hi: "अजनी स्टेशन",
  attempted: false,
  selected: ""
},
{
  num:50,
  question_en: "Which Indian Ministry launched 'Drone Policy 2025' to promote startups?",
  question_hi: "स्टार्टअप को बढ़ावा देने के लिए किस भारतीय मंत्रालय ने 'ड्रोन पॉलिसी 2025' शुरू की?",
  options_en: ["Ministry of Civil Aviation","Ministry of Defence","Ministry of Electronics","Ministry of Science & Technology"],
  options_hi: ["नागरिक उड्डयन मंत्रालय","रक्षा मंत्रालय","इलेक्ट्रॉनिक्स मंत्रालय","विज्ञान एवं प्रौद्योगिकी मंत्रालय"],
  answer_en: "Ministry of Civil Aviation",
  answer_hi: "नागरिक उड्डयन मंत्रालय",
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