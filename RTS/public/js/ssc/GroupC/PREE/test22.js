const questions = [
  {
  num: 1,
  question_en: "Who became the Chief Justice of India in 2022?",
  question_hi: "2022 में भारत के मुख्य न्यायाधीश कौन बने?",
  options_en: ["D Y Chandrachud","U U Lalit","N V Ramana","S A Bobde"],
  options_hi: ["डी वाई चंद्रचूड़","यू यू ललित","एन वी रमना","एस ए बोबडे"],
  answer_en: "D Y Chandrachud",
  answer_hi: "डी वाई चंद्रचूड़",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which city hosted the G20 Leaders’ Summit in 2023?",
  question_hi: "2023 में G20 नेताओं के शिखर सम्मेलन की मेज़बानी किस शहर ने की?",
  options_en: ["New Delhi","Mumbai","Bengaluru","Hyderabad"],
  options_hi: ["नई दिल्ली","मुंबई","बेंगलुरु","हैदराबाद"],
  answer_en: "New Delhi",
  answer_hi: "नई दिल्ली",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Who is the current President of India (2024)?",
  question_hi: "वर्तमान भारत के राष्ट्रपति (2024) कौन हैं?",
  options_en: ["Droupadi Murmu","Ram Nath Kovind","Pranab Mukherjee","Pratibha Patil"],
  options_hi: ["द्रौपदी मुर्मू","रामनाथ कोविंद","प्रणब मुखर्जी","प्रतिभा पाटिल"],
  answer_en: "Droupadi Murmu",
  answer_hi: "द्रौपदी मुर्मू",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Which country hosted the 2022 FIFA World Cup?",
  question_hi: "2022 फीफा विश्व कप की मेज़बानी किस देश ने की?",
  options_en: ["Qatar","France","Brazil","Germany"],
  options_hi: ["कतर","फ्रांस","ब्राज़ील","जर्मनी"],
  answer_en: "Qatar",
  answer_hi: "कतर",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which scheme provides free food grains to poor under NFSA?",
  question_hi: "NFSA के तहत गरीबों को मुफ्त खाद्यान्न कौन-सी योजना देती है?",
  options_en: ["PMGKAY","PMJDY","PMAY","UJALA"],
  options_hi: ["पीएम गरीब कल्याण अन्न योजना","प्रधानमंत्री जनधन योजना","प्रधानमंत्री आवास योजना","उजाला योजना"],
  answer_en: "PMGKAY",
  answer_hi: "पीएम गरीब कल्याण अन्न योजना",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Which International event was hosted by India in 2023?",
  question_hi: "2023 में भारत ने कौन-सा अंतरराष्ट्रीय आयोजन किया?",
  options_en: ["G20 Summit","BRICS Summit","UN General Assembly","COP28"],
  options_hi: ["G20 शिखर सम्मेलन","ब्रिक्स शिखर सम्मेलन","यूएन महासभा","COP28"],
  answer_en: "G20 Summit",
  answer_hi: "G20 शिखर सम्मेलन",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who was appointed as RBI Governor in 2023?",
  question_hi: "2023 में RBI गवर्नर के रूप में किसे नियुक्त किया गया?",
  options_en: ["Shaktikanta Das","Urjit Patel","Raghuram Rajan","Viral Acharya"],
  options_hi: ["शक्तिकांत दास","उर्जित पटेल","रघुराम राजन","वायरल आचार्य"],
  answer_en: "Shaktikanta Das",
  answer_hi: "शक्तिकांत दास",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which country won the ICC Cricket World Cup 2023?",
  question_hi: "ICC क्रिकेट विश्व कप 2023 किस देश ने जीता?",
  options_en: ["Australia","India","England","New Zealand"],
  options_hi: ["ऑस्ट्रेलिया","भारत","इंग्लैंड","न्यूज़ीलैंड"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Which scheme is for financial inclusion launched in 2014?",
  question_hi: "2014 में वित्तीय समावेशन के लिए कौन-सी योजना शुरू की गई?",
  options_en: ["PMJDY","PMAY","MGNREGA","PMFBY"],
  options_hi: ["प्रधानमंत्री जनधन योजना","प्रधानमंत्री आवास योजना","मनरेगा","प्रधानमंत्री फसल बीमा योजना"],
  answer_en: "PMJDY",
  answer_hi: "प्रधानमंत्री जनधन योजना",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which country hosted the Asian Games 2022?",
  question_hi: "एशियाई खेल 2022 की मेज़बानी किस देश ने की?",
  options_en: ["China","Japan","India","South Korea"],
  options_hi: ["चीन","जापान","भारत","दक्षिण कोरिया"],
  answer_en: "China",
  answer_hi: "चीन",
  attempted: false,
  selected: ""
},

{
  num: 11,
  question_en: "Who won the Ballon d'Or 2023?",
  question_hi: "बैलन डी'ओर 2023 किसने जीता?",
  options_en: ["Lionel Messi","Erling Haaland","Cristiano Ronaldo","Kylian Mbappe"],
  options_hi: ["लियोनेल मेसी","एर्लिंग हालैंड","क्रिस्टियानो रोनाल्डो","किलियन एमबाप्पे"],
  answer_en: "Lionel Messi",
  answer_hi: "लियोनेल मेसी",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which country hosted COP28 Climate Summit?",
  question_hi: "COP28 जलवायु शिखर सम्मेलन की मेज़बानी किस देश ने की?",
  options_en: ["UAE","India","USA","UK"],
  options_hi: ["यूएई","भारत","अमेरिका","यूके"],
  answer_en: "UAE",
  answer_hi: "यूएई",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which Indian mission achieved soft landing on the moon in 2023?",
  question_hi: "किस भारतीय मिशन ने 2023 में चंद्रमा पर सॉफ्ट लैंडिंग हासिल की?",
  options_en: ["Chandrayaan-3","Chandrayaan-2","Mangalyaan","Gaganyaan"],
  options_hi: ["चंद्रयान-3","चंद्रयान-2","मंगलयान","गगनयान"],
  answer_en: "Chandrayaan-3",
  answer_hi: "चंद्रयान-3",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which nation topped the 2023 Men’s Hockey Asia Cup?",
  question_hi: "2023 पुरुष हॉकी एशिया कप में किस देश ने शीर्ष स्थान प्राप्त किया?",
  options_en: ["India","Pakistan","Japan","South Korea"],
  options_hi: ["भारत","पाकिस्तान","जापान","दक्षिण कोरिया"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which budget year introduced the term ‘Amrit Kaal’?",
  question_hi: "किस बजट वर्ष में ‘अमृत काल’ शब्द पेश किया गया?",
  options_en: ["2023–24","2022–23","2021–22","2020–21"],
  options_hi: ["2023–24","2022–23","2021–22","2020–21"],
  answer_en: "2023–24",
  answer_hi: "2023–24",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Who is the Chairperson of SEBI as of 2024?",
  question_hi: "2024 के अनुसार SEBI के अध्यक्ष कौन हैं?",
  options_en: ["Madhabi Puri Buch","Ajay Tyagi","U K Sinha","Raghuram Rajan"],
  options_hi: ["माधबी पुरी बुच","अजय त्यागी","यू के सिन्हा","रघुराम राजन"],
  answer_en: "Madhabi Puri Buch",
  answer_hi: "माधबी पुरी बुच",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which scheme aims to provide piped water connection to households?",
  question_hi: "किस योजना का लक्ष्य घरों को पाइप जल कनेक्शन देना है?",
  options_en: ["Jal Jeevan Mission","SWAYAM","UJALA","PMAY"],
  options_hi: ["जल जीवन मिशन","स्वयम","उजाला","प्रधानमंत्री आवास योजना"],
  answer_en: "Jal Jeevan Mission",
  answer_hi: "जल जीवन मिशन",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which state initiated the Ladli Behna Yojana?",
  question_hi: "लाडली बहना योजना किस राज्य ने शुरू की?", 
  options_en: ["Madhya Pradesh","Rajasthan","Uttar Pradesh","Bihar"],
  options_hi: ["मध्य प्रदेश","राजस्थान","उत्तर प्रदेश","बिहार"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Who was awarded Nobel Peace Prize 2023?",
  question_hi: "नобेल शांति पुरस्कार 2023 किसे दिया गया?",
  options_en: ["Narges Mohammadi","Maria Ressa","Dmitry Muratov","Abiy Ahmed"],
  options_hi: ["नर्गेस मोहम्मदी","मारिया रेसा","दिमित्रि मुराटोव","अबिय अहमद"],
  answer_en: "Narges Mohammadi",
  answer_hi: "नर्गेस मोहम्मदी",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which country is the Presidency of BRICS in 2024?",
  question_hi: "2024 में BRICS की अध्यक्षता किस देश के पास है?",
  options_en: ["Saudi Arabia","India","China","Russia"],
  options_hi: ["सऊदी अरब","भारत","चीन","रूस"],
  answer_en: "Saudi Arabia",
  answer_hi: "सऊदी अरब",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who is the current Chief Election Commissioner of India?",
  question_hi: "वर्तमान भारत के मुख्य चुनाव आयुक्त कौन हैं?",
  options_en: ["Rajiv Kumar","Sushil Chandra","Sunil Arora","Nasim Zaidi"],
  options_hi: ["राजीव कुमार","सुशील चंद्रा","सुनील अरोड़ा","नसीम जैदी"],
  answer_en: "Rajiv Kumar",
  answer_hi: "राजीव कुमार",
  attempted: false,
  selected: ""
},
{
  num: 22,
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
  num: 23,
  question_en: "Which nation hosted the SCO Summit in 2023?",
  question_hi: "2023 में SCO शिखर सम्मेलन की मेज़बानी किस देश ने की?",
  options_en: ["India","China","Russia","Kazakhstan"],
  options_hi: ["भारत","चीन","रूस","कजाकिस्तान"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which city hosted the COP28 Climate Summit?",
  question_hi: "COP28 जलवायु शिखर सम्मेलन किस शहर में हुआ?",
  options_en: ["Dubai","Paris","New Delhi","London"],
  options_hi: ["दुबई","पेरिस","नई दिल्ली","लंदन"],
  answer_en: "Dubai",
  answer_hi: "दुबई",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which Indian scheme focuses on urban housing?",
  question_hi: "कौन-सी भारतीय योजना शहरी आवास पर केंद्रित है?",
  options_en: ["PMAY-U","PMAY-G","MGNREGA","PMJDY"],
  options_hi: ["प्रधानमंत्री आवास योजना-शहरी","प्रधानमंत्री आवास योजना‑ग्रामीण","मनरेगा","प्रधानमंत्री जनधन योजना"],
  answer_en: "PMAY-U",
  answer_hi: "प्रधानमंत्री आवास योजना‑शहरी",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which Indian scheme aims to provide housing to urban poor?",
  question_hi: "कौन-सी भारतीय योजना शहरी गरीबों को आवास प्रदान करने का लक्ष्य रखती है?",
  options_en: ["PMAY-U","PMAY-G","MGNREGA","PMJDY"],
  options_hi: ["प्रधानमंत्री आवास योजना‑शहरी","प्रधानमंत्री आवास योजना‑ग्रामीण","मनरेगा","प्रधानमंत्री जनधन योजना"],
  answer_en: "PMAY-U",
  answer_hi: "प्रधानमंत्री आवास योजना‑शहरी",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which Indian mission aims for human spaceflight?",
  question_hi: "भारतीय मिशन जो मानव अंतरिक्ष उड़ान के उद्देश्य से है, वह कौन-सा है?",
  options_en: ["Gaganyaan","Chandrayaan-3","Mangalyaan","Aditya-L1"],
  options_hi: ["गगनयान","चंद्रयान‑3","मंगलयान","आदित्य‑L1"],
  answer_en: "Gaganyaan",
  answer_hi: "गगनयान",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which Indian city hosted the World Book Fair in 2024?",
  question_hi: "विश्व पुस्तक मेला 2024 की मेज़बानी किस शहर ने की?",
  options_en: ["New Delhi","Kolkata","Mumbai","Bengaluru"],
  options_hi: ["नई दिल्ली","कोलकाता","मुंबई","बेंगलुरु"],
  answer_en: "New Delhi",
  answer_hi: "नई दिल्ली",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which country won the ICC T20 World Cup 2024?",
  question_hi: "ICC टी20 विश्व कप 2024 किस देश ने जीता?",
  options_en: ["India","Australia","England","West Indies"],
  options_hi: ["भारत","ऑस्ट्रेलिया","इंग्लैंड","वेस्ट इंडीज"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which global index is published by United Nations?",
  question_hi: "कौन-सा वैश्विक सूचकांक संयुक्त राष्ट्र द्वारा प्रकाशित होता है?",
  options_en: ["World Happiness Report","IMF World Economic Outlook","WHO Health Report","UNESCO Atlas"],
  options_hi: ["विश्व प्रसन्नता सूचकांक","आईएमएफ विश्व आर्थिक दृष्टिकोण","डब्ल्यूएचओ स्वास्थ्य रिपोर्ट","यूनेस्को एटलस"],
  answer_en: "World Happiness Report",
  answer_hi: "विश्व प्रसन्नता सूचकांक",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which country launched the Artemis Moon Mission?",
  question_hi: "आर्टेमिस चंद्र मिशन किस देश ने लॉन्च किया?",
  options_en: ["USA","China","Russia","India"],
  options_hi: ["अमेरिका","चीन","रूस","भारत"],
  answer_en: "USA",
  answer_hi: "अमेरिका",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Who became the first Indian woman to win an Olympic medal in wrestling?",
  question_hi: "किस भारतीय महिला पहलवान ने पहली बार ओलंपिक पदक जीता?",
  options_en: ["Sakshi Malik","Vinesh Phogat","Babita Phogat","Geeta Phogat"],
  options_hi: ["साक्षी मलिक","विनीश फोगट","बबीता फोगट","गीता फोगट"],
  answer_en: "Sakshi Malik",
  answer_hi: "साक्षी मलिक",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which scheme aims to provide scholarships to girl students?",
  question_hi: "कौन-सी योजना बालिकाओं को छात्रवृत्ति देने का लक्ष्य रखती है?",
  options_en: ["Scholarship Scheme for Girls","PM Scholarship","Ujjwala","PMAY"],
  options_hi: ["बालिकाओं के लिए छात्रवृत्ति योजना","पीएम छात्रवृत्ति","उज्जला","प्रधानमंत्री आवास योजना"],
  answer_en: "Scholarship Scheme for Girls",
  answer_hi: "बालिकाओं के लिए छात्रवृत्ति योजना",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "In SSC exams, PM Kisan Samman Nidhi is a scheme for?",
  question_hi: "एसएससी परीक्षाओं में पीएम किसान सम्मान निधि योजना किसके लिए है?",
  options_en: ["Income support to farmers","Housing support","Health insurance","Skill training"],
  options_hi: ["किसानों को आय सहायता","आवास सहायता","स्वास्थ्य बीमा","कौशल प्रशिक्षण"],
  answer_en: "Income support to farmers",
  answer_hi: "किसानों को आय सहायता",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which Indian state launched the Mukhyamantri Ladli Yojana?",
  question_hi: "मुख्यमंत्री लाडली योजना किस भारतीय राज्य ने शुरू की?",
  options_en: ["Madhya Pradesh","Haryana","Rajasthan","Bihar"],
  options_hi: ["मध्य प्रदेश","हरियाणा","राजस्थान","बिहार"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which scheme is known for pension to small shopkeepers and traders?",
  question_hi: "कौन-सी योजना छोटे दुकानदारों और व्यापारियों को पेंशन के लिए जानी जाती है?",
  options_en: ["PM Shram Yogi Maandhan","PMAY","PMJDY","PMGKAY"],
  options_hi: ["प्रधानमंत्री श्रम योगी मानधन","प्रधानमंत्री आवास योजना","प्रधानमंत्री जनधन योजना","पीएम गरीब कल्याण अन्न योजना"],
  answer_en: "PM Shram Yogi Maandhan",
  answer_hi: "प्रधानमंत्री श्रम योगी मानधन",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which Indian mission studied the Sun?",
  question_hi: "किस भारतीय मिशन ने सूर्य का अध्ययन किया?",
  options_en: ["Aditya-L1","Chandrayaan-3","Mangalyaan","Gaganyaan"],
  options_hi: ["आदित्य-L1","चंद्रयान-3","मंगलयान","गगनयान"],
  answer_en: "Aditya-L1",
  answer_hi: "आदित्य-L1",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which country is the largest contributor to UN peacekeeping missions?",
  question_hi: "संयुक्त राष्ट्र शांति सेना मिशन में सबसे बड़ा योगदानकर्ता देश कौन है?",
  options_en: ["India","USA","China","UK"],
  options_hi: ["भारत","अमेरिका","चीन","यूके"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which Indian city hosted the 2023 Cricket World Cup final?",
  question_hi: "2023 क्रिकेट विश्व कप फाइनल किस भारतीय शहर में हुआ?",
  options_en: ["Ahmedabad","Mumbai","Delhi","Kolkata"],
  options_hi: ["अहमदाबाद","मुंबई","दिल्ली","कोलकाता"],
  answer_en: "Ahmedabad",
  answer_hi: "अहमदाबाद",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Who is the chairperson of the National Commission for Women in recent times?",
  question_hi: "हाल के समय में महिला आयोग (NCW) की अध्यक्ष कौन हैं?",
  options_en: ["Rekha Sharma","Sushma Swaraj","Meira Kumar","Pratibha Patil"],
  options_hi: ["रेखा शर्मा","सुषमा स्वराज","मीरा कुमार","प्रतिभा पाटिल"],
  answer_en: "Rekha Sharma",
  answer_hi: "रेखा शर्मा",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which scheme provides LPG subsidy directly into bank accounts?",
  question_hi: "एलपीजी सब्सिडी सीधे बैंक खाते में देने वाली योजना कौन-सी है?",
  options_en: ["PAHAL","PMAY","MGNREGA","UJALA"],
  options_hi: ["पहल","प्रधानमंत्री आवास योजना","मनरेगा","उज्जला"],
  answer_en: "PAHAL",
  answer_hi: "पहल",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which Indian city hosted the Smart India Hackathon?",
  question_hi: "स्मार्ट इंडिया हैकाथॉन की मेज़बानी किस शहर ने की?",
  options_en: ["Multiple Cities","Delhi","Pune","Bengaluru"],
  options_hi: ["कई शहर","दिल्ली","पुणे","बेंगलुरु"],
  answer_en: "Multiple Cities",
  answer_hi: "कई शहर",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which scheme is related to affordable air travel?",
  question_hi: "सस्ती हवाई यात्रा से संबंधित योजना कौन-सी है?",
  options_en: ["UDAN Scheme","PMAY","PMJDY","MGNREGA"],
  options_hi: ["उड़ान योजना","प्रधानमंत्री आवास योजना","प्रधानमंत्री जनधन योजना","मनरेगा"],
  answer_en: "UDAN Scheme",
  answer_hi: "उड़ान योजना",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which index measures global competitiveness?",
  question_hi: "वैश्विक प्रतिस्पर्धात्मकता को मापने वाला सूचकांक कौन-सा है?",
  options_en: ["Global Competitiveness Report","World Happiness Report","Human Development Index","Ease of Doing Business"],
  options_hi: ["वैश्विक प्रतिस्पर्धात्मकता रिपोर्ट","विश्व प्रसन्नता सूचकांक","मानव विकास सूचकांक","व्यवसाय करने की सरलता"],
  answer_en: "Global Competitiveness Report",
  answer_hi: "वैश्विक प्रतिस्पर्धात्मकता रिपोर्ट",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which scheme promotes entrepreneurship among SC/ST?",
  question_hi: "SC/ST में उद्यमिता को बढ़ावा देने वाली योजना कौन-सी है?",
  options_en: ["Stand Up India","PMJDY","PMFBY","PMAY"],
  options_hi: ["स्टैंड अप इंडिया","प्रधानमंत्री जनधन योजना","प्रधानमंत्री फसल बीमा योजना","प्रधानमंत्री आवास योजना"],
  answer_en: "Stand Up India",
  answer_hi: "स्टैंड अप इंडिया",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Who chaired the 2023 BRICS summit?",
  question_hi: "2023 BRICS शिखर सम्मेलन की अध्यक्षता किसने की?",
  options_en: ["India","China","Russia","South Africa"],
  options_hi: ["भारत","चीन","रूस","दक्षिण अफ्रीका"],
  answer_en: "India",
  answer_hi: "भारत",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which scheme is related to organic farming?",
  question_hi: "जैविक खेती से संबंधि योजना कौन-सी है?",
  options_en: ["Paramparagat Krishi Vikas Yojana","PMFBY","PMJDY","PMAY"],
  options_hi: ["परंपरागत कृषि विकास योजना","प्रधानमंत्री फसल बीमा योजना","प्रधानमंत्री जनधन योजना","प्रधानमंत्री आवास योजना"],
  answer_en: "Paramparagat Krishi Vikas Yojana",
  answer_hi: "परंपरागत कृषि विकास योजना",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which Indian region is known as Silicon Valley of India?",
  question_hi: "भारत का सिलिकॉन वैली किस क्षेत्र के रूप में जाना जाता है?",
  options_en: ["Bengaluru","Hyderabad","Mumbai","Pune"],
  options_hi: ["बेंगलुरु","हैदराबाद","मुंबई","पुणे"],
  answer_en: "Bengaluru",
  answer_hi: "बेंगलुरु",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which scheme provides LPG subsidy for poor?",
  question_hi: "गरीबों को एलपीजी सब्सिडी देने वाली योजना कौन-सी है?",
  options_en: ["Ujjwala Yojana","PMAY","PMJDY","MGNREGA"],
  options_hi: ["उज्ज्वला योजना","प्रधानमंत्री आवास योजना","प्रधानमंत्री जनधन योजना","मनरेगा"],
  answer_en: "Ujjwala Yojana",
  answer_hi: "उज्ज्वला योजना",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which Indian state launched the Ladli Behna Yojana?",
  question_hi: "लाडली बहना योजना किस भारतीय राज्य ने शुरू की?",
  options_en: ["Madhya Pradesh","Uttar Pradesh","Rajasthan","Bihar"],
  options_hi: ["मध्य प्रदेश","उत्तर प्रदेश","राजस्थान","बिहार"],
  answer_en: "Madhya Pradesh",
  answer_hi: "मध्य प्रदेश",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which scheme provides insurance for crop loss?",
  question_hi: "फसल नुकसान के लिए बीमा कौन-सी योजना देती है?",
  options_en: ["PM Fasal Bima Yojana","PMAY","PMJDY","MGNREGA"],
  options_hi: ["प्रधानमंत्री फसल बीमा योजना","प्रधानमंत्री आवास योजना","प्रधानमंत्री जनधन योजना","मनरेगा"],
  answer_en: "PM Fasal Bima Yojana",
  answer_hi: "प्रधानमंत्री फसल बीमा योजना",
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