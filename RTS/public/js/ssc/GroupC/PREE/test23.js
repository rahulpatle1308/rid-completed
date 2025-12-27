const questions = [
  {
  num: 1,
  question_en: "Who is known as the 'Father of Economics'?",
  question_hi: "'अर्थशास्त्र के पिता' के रूप में किसे जाना जाता है?",
  options_en: ["Adam Smith", "John Maynard Keynes", "Karl Marx", "David Ricardo"],
  options_hi: ["एडम स्मिथ", "जॉन मेनार्ड कीन्स", "कार्ल मार्क्स", "डेविड रिकार्डो"],
  answer_en: "Adam Smith",
  answer_hi: "एडम स्मिथ",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which vitamin is also known as 'Retinol'?",
  question_hi: "किस विटामिन को 'रेटिनॉल' के नाम से भी जाना जाता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन ए",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the chemical formula of Hydrogen Sulfide?",
  question_hi: "हाइड्रोजन सल्फाइड का रासायनिक सूत्र क्या है?",
  options_en: ["H2S", "HS", "H2SO4", "SO2"],
  options_hi: ["H2S", "HS", "H2SO4", "SO2"],
  answer_en: "H2S",
  answer_hi: "H2S",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Who wrote the national song 'Vande Mataram'?",
  question_hi: "राष्ट्रीय गीत 'वंदे मातरम्' किसने लिखा?",
  options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Subramania Bharati"],
  options_hi: ["बंकिम चंद्र चटर्जी", "रबीन्द्रनाथ टैगोर", "सरोजिनी नायडू", "सुब्रमण्यम भारती"],
  answer_en: "Bankim Chandra Chatterjee",
  answer_hi: "बंकिम चंद्र चटर्जी",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which planet is known as the 'Ice Giant'?",
  question_hi: "किस ग्रह को 'बर्फ विशाल' के नाम से जाना जाता है?",
  options_en: ["Uranus", "Neptune", "Saturn", "Jupiter"],
  options_hi: ["अरुण", "वरुण", "शनि", "बृहस्पति"],
  answer_en: "Uranus",
  answer_hi: "अरुण",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the SI unit of luminous flux?",
  question_hi: "ज्योति फ्लक्स की SI इकाई क्या है?",
  options_en: ["Lumen", "Candela", "Lux", "Watt"],
  options_hi: ["लुमेन", "कैंडेला", "लक्स", "वाट"],
  answer_en: "Lumen",
  answer_hi: "लुमेन",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who was the first woman to win the Nobel Prize?",
  question_hi: "नोबेल पुरस्कार जीतने वाली पहली महिला कौन थीं?",
  options_en: ["Marie Curie", "Mother Teresa", "Rosalind Franklin", "Dorothy Hodgkin"],
  options_hi: ["मैरी क्यूरी", "मदर टेरेसा", "रोजालिंड फ्रैंकलिन", "डोरोथी हॉजकिन"],
  answer_en: "Marie Curie",
  answer_hi: "मैरी क्यूरी",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which article of the Constitution deals with the Union Public Service Commission?",
  question_hi: "संविधान का कौन सा अनुच्छेद संघ लोक सेवा आयोग से संबंधित है?",
  options_en: ["Article 315", "Article 320", "Article 324", "Article 335"],
  options_hi: ["अनुच्छेद 315", "अनुच्छेद 320", "अनुच्छेद 324", "अनुच्छेद 335"],
  answer_en: "Article 315",
  answer_hi: "अनुच्छेद 315",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is the chemical symbol for Platinum?",
  question_hi: "प्लैटिनम का रासायनिक प्रतीक क्या है?",
  options_en: ["Pt", "Pl", "Pm", "Pn"],
  options_hi: ["Pt", "Pl", "Pm", "Pn"],
  answer_en: "Pt",
  answer_hi: "Pt",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which battle marked the beginning of British rule in India?",
  question_hi: "किस युद्ध ने भारत में ब्रिटिश शासन की शुरुआत को चिह्नित किया?",
  options_en: ["Battle of Plassey", "Battle of Buxar", "Battle of Panipat", "Battle of Haldighati"],
  options_hi: ["प्लासी का युद्ध", "बक्सर का युद्ध", "पानीपत का युद्ध", "हल्दीघाटी का युद्ध"],
  answer_en: "Battle of Plassey",
  answer_hi: "प्लासी का युद्ध",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "What is the study of fungi called?",
  question_hi: "कवक के अध्ययन को क्या कहा जाता है?",
  options_en: ["Mycology", "Phycology", "Bryology", "Pteridology"],
  options_hi: ["कवक विज्ञान", "शैवाल विज्ञान", "ब्रायोलॉजी", "पटरिडोलॉजी"],
  answer_en: "Mycology",
  answer_hi: "कवक विज्ञान",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Who is known as the 'Iron Man of India'?",
  question_hi: "'भारत के लौह पुरुष' के रूप में किसे जाना जाता है?",
  options_en: ["Sardar Vallabhbhai Patel", "Subhash Chandra Bose", "Lal Bahadur Shastri", "Jawaharlal Nehru"],
  options_hi: ["सरदार वल्लभभाई पटेल", "सुभाष चंद्र बोस", "लाल बहादुर शास्त्री", "जवाहरलाल नेहरू"],
  answer_en: "Sardar Vallabhbhai Patel",
  answer_hi: "सरदार वल्लभभाई पटेल",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the chemical formula of Ozone?",
  question_hi: "ओजोन का रासायनिक सूत्र क्या है?",
  options_en: ["O3", "O2", "O4", "OH"],
  options_hi: ["O3", "O2", "O4", "OH"],
  answer_en: "O3",
  answer_hi: "O3",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which river is called the 'Sorrow of China'?",
  question_hi: "किस नदी को 'चीन का शोक' कहा जाता है?",
  options_en: ["Yellow River", "Yangtze River", "Mekong River", "Ganges"],
  options_hi: ["यलो रिवर", "यांग्त्ज़ी नदी", "मेकांग नदी", "गंगा"],
  answer_en: "Yellow River",
  answer_hi: "यलो रिवर",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the value of Avogadro's number?",
  question_hi: "एवोगैड्रो संख्या का मान क्या है?",
  options_en: ["6.022 × 10²³", "6.626 × 10⁻³⁴", "3 × 10⁸", "9.8"],
  options_hi: ["6.022 × 10²³", "6.626 × 10⁻³⁴", "3 × 10⁸", "9.8"],
  answer_en: "6.022 × 10²³",
  answer_hi: "6.022 × 10²³",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Who was the first Chief Minister of Uttar Pradesh?",
  question_hi: "उत्तर प्रदेश के पहले मुख्यमंत्री कौन थे?",
  options_en: ["Govind Ballabh Pant", "Chandra Bhanu Gupta", "Sampurnanand", "Sucheta Kripalani"],
  options_hi: ["गोविंद बल्लभ पंत", "चंद्र भानु गुप्ता", "संपूर्णानंद", "सुचेता कृपलानी"],
  answer_en: "Govind Ballabh Pant",
  answer_hi: "गोविंद बल्लभ पंत",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the chemical symbol for Tungsten?",
  question_hi: "टंगस्टन का रासायनिक प्रतीक क्या है?",
  options_en: ["W", "Tu", "Tg", "Tn"],
  options_hi: ["W", "Tu", "Tg", "Tn"],
  answer_en: "W",
  answer_hi: "W",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which gas is used in making Vanaspati ghee?",
  question_hi: "वनस्पति घी बनाने में किस गैस का उपयोग किया जाता है?",
  options_en: ["Hydrogen", "Oxygen", "Nitrogen", "Helium"],
  options_hi: ["हाइड्रोजन", "ऑक्सीजन", "नाइट्रोजन", "हीलियम"],
  answer_en: "Hydrogen",
  answer_hi: "हाइड्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Who invented the computer programming language 'C'?",
  question_hi: "कंप्यूटर प्रोग्रामिंग भाषा 'C' का आविष्कार किसने किया?",
  options_en: ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Guido van Rossum"],
  options_hi: ["डेनिस रिची", "ब्जार्ने स्ट्रॉस्ट्रुप", "जेम्स गोस्लिंग", "गुइडो वैन रोसुम"],
  answer_en: "Dennis Ritchie",
  answer_hi: "डेनिस रिची",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "What is the SI unit of radioactivity?",
  question_hi: "रेडियोधर्मिता की SI इकाई क्या है?",
  options_en: ["Becquerel", "Curie", "Roentgen", "Gray"],
  options_hi: ["बेकरेल", "क्यूरी", "रॉन्टजन", "ग्रे"],
  answer_en: "Becquerel",
  answer_hi: "बेकरेल",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who founded the city of Jaipur?",
  question_hi: "जयपुर शहर की स्थापना किसने की?",
  options_en: ["Maharaja Sawai Jai Singh II", "Maharana Pratap", "Rana Kumbha", "Raja Man Singh"],
  options_hi: ["महाराजा सवाई जय सिंह द्वितीय", "महाराणा प्रताप", "राणा कुंभा", "राजा मान सिंह"],
  answer_en: "Maharaja Sawai Jai Singh II",
  answer_hi: "महाराजा सवाई जय सिंह द्वितीय",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is the chemical formula of Bauxite?",
  question_hi: "बॉक्साइट का रासायनिक सूत्र क्या है?",
  options_en: ["Al2O3.2H2O", "Fe2O3", "SiO2", "CaCO3"],
  options_hi: ["Al2O3.2H2O", "Fe2O3", "SiO2", "CaCO3"],
  answer_en: "Al2O3.2H2O",
  answer_hi: "Al2O3.2H2O",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which planet has the shortest day?",
  question_hi: "किस ग्रह का दिन सबसे छोटा होता है?",
  options_en: ["Jupiter", "Saturn", "Mars", "Venus"],
  options_hi: ["बृहस्पति", "शनि", "मंगल", "शुक्र"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Who wrote the book 'India Wins Freedom'?",
  question_hi: "'इंडिया विन्स फ्रीडम' पुस्तक किसने लिखी?",
  options_en: ["Maulana Abul Kalam Azad", "Jawaharlal Nehru", "Subhash Chandra Bose", "Mahatma Gandhi"],
  options_hi: ["मौलाना अबुल कलाम आजाद", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "महात्मा गांधी"],
  answer_en: "Maulana Abul Kalam Azad",
  answer_hi: "मौलाना अबुल कलाम आजाद",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is the chemical symbol for Radium?",
  question_hi: "रेडियम का रासायनिक प्रतीक क्या है?",
  options_en: ["Ra", "Rd", "Rm", "Rn"],
  options_hi: ["Ra", "Rd", "Rm", "Rn"],
  answer_en: "Ra",
  answer_hi: "Ra",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which is the largest desert in the world?",
  question_hi: "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
  options_en: ["Sahara", "Arabian", "Gobi", "Kalahari"],
  options_hi: ["सहारा", "अरबी", "गोबी", "कालाहारी"],
  answer_en: "Sahara",
  answer_hi: "सहारा",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Who discovered the electron?",
  question_hi: "इलेक्ट्रॉन की खोज किसने की?",
  options_en: ["J.J. Thomson", "Ernest Rutherford", "James Chadwick", "John Dalton"],
  options_hi: ["जे.जे. थॉमसन", "अर्नेस्ट रदरफोर्ड", "जेम्स चैडविक", "जॉन डाल्टन"],
  answer_en: "J.J. Thomson",
  answer_hi: "जे.जे. थॉमसन",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is the SI unit of magnetic flux density?",
  question_hi: "चुंबकीय फ्लक्स घनत्व की SI इकाई क्या है?",
  options_en: ["Tesla", "Weber", "Henry", "Gauss"],
  options_hi: ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
  answer_en: "Tesla",
  answer_hi: "टेस्ला",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Who was the first Indian to go to space?",
  question_hi: "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
  options_en: ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Ravish Malhotra"],
  options_hi: ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "रविश मल्होत्रा"],
  answer_en: "Rakesh Sharma",
  answer_hi: "राकेश शर्मा",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is the chemical formula of Quick Lime?",
  question_hi: "क्विक लाइम का रासायनिक सूत्र क्या है?",
  options_en: ["CaO", "Ca(OH)2", "CaCO3", "CaSO4"],
  options_hi: ["CaO", "Ca(OH)2", "CaCO3", "CaSO4"],
  answer_en: "CaO",
  answer_hi: "CaO",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which is the largest freshwater lake in India?",
  question_hi: "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
  options_en: ["Wular Lake", "Chilika Lake", "Loktak Lake", "Dal Lake"],
  options_hi: ["वुलर झील", "चिल्का झील", "लोकटक झील", "डल झील"],
  answer_en: "Wular Lake",
  answer_hi: "वुलर झील",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Who invented the World Wide Web (WWW)?",
  question_hi: "वर्ल्ड वाइड वेब (WWW) का आविष्कार किसने किया?",
  options_en: ["Tim Berners-Lee", "Vint Cerf", "Robert Kahn", "Marc Andreessen"],
  options_hi: ["टिम बर्नर्स-ली", "विंट सेर्फ", "रॉबर्ट काह्न", "मार्क एंड्रीसन"],
  answer_en: "Tim Berners-Lee",
  answer_hi: "टिम बर्नर्स-ली",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the chemical symbol for Iodine?",
  question_hi: "आयोडीन का रासायनिक प्रतीक क्या है?",
  options_en: ["I", "Io", "Id", "In"],
  options_hi: ["I", "Io", "Id", "In"],
  answer_en: "I",
  answer_hi: "I",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which Mughal emperor built the Red Fort in Delhi?",
  question_hi: "किस मुगल सम्राट ने दिल्ली में लाल किला बनवाया?",
  options_en: ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
  options_hi: ["शाहजहाँ", "अकबर", "औरंगजेब", "जहाँगीर"],
  answer_en: "Shah Jahan",
  answer_hi: "शाहजहाँ",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the SI unit of electric conductivity?",
  question_hi: "विद्युत चालकता की SI इकाई क्या है?",
  options_en: ["Siemens per meter", "Ohm-meter", "Mho", "Coulomb"],
  options_hi: ["सीमेंस प्रति मीटर", "ओम-मीटर", "म्हो", "कूलम्ब"],
  answer_en: "Siemens per meter",
  answer_hi: "सीमेंस प्रति मीटर",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Who was the first woman Governor of an Indian state?",
  question_hi: "भारतीय राज्य की पहली महिला राज्यपाल कौन थीं?",
  options_en: ["Sarojini Naidu", "Indira Gandhi", "Vijaya Lakshmi Pandit", "Sucheta Kripalani"],
  options_hi: ["सरोजिनी नायडू", "इंदिरा गाँधी", "विजया लक्ष्मी पंडित", "सुचेता कृपलानी"],
  answer_en: "Sarojini Naidu",
  answer_hi: "सरोजिनी नायडू",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the chemical formula of Nitrous Oxide?",
  question_hi: "नाइट्रस ऑक्साइड का रासायनिक सूत्र क्या है?",
  options_en: ["N2O", "NO", "NO2", "N2O4"],
  options_hi: ["N2O", "NO", "NO2", "N2O4"],
  answer_en: "N2O",
  answer_hi: "N2O",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which is the smallest ocean in the world?",
  question_hi: "दुनिया का सबसे छोटा महासागर कौन सा है?",
  options_en: ["Arctic Ocean", "Indian Ocean", "Southern Ocean", "Atlantic Ocean"],
  options_hi: ["आर्कटिक महासागर", "हिंद महासागर", "दक्षिणी महासागर", "अटलांटिक महासागर"],
  answer_en: "Arctic Ocean",
  answer_hi: "आर्कटिक महासागर",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Who discovered the neutron?",
  question_hi: "न्यूट्रॉन की खोज किसने की?",
  options_en: ["James Chadwick", "Ernest Rutherford", "J.J. Thomson", "Niels Bohr"],
  options_hi: ["जेम्स चैडविक", "अर्नेस्ट रदरफोर्ड", "जे.जे. थॉमसन", "नील्स बोह्र"],
  answer_en: "James Chadwick",
  answer_hi: "जेम्स चैडविक",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is the chemical symbol for Titanium?",
  question_hi: "टाइटेनियम का रासायनिक प्रतीक क्या है?",
  options_en: ["Ti", "Tn", "Tm", "Ta"],
  options_hi: ["Ti", "Tn", "Tm", "Ta"],
  answer_en: "Ti",
  answer_hi: "Ti",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which river is known as the 'Dakshin Ganga'?",
  question_hi: "किस नदी को 'दक्षिण गंगा' कहा जाता है?",
  options_en: ["Godavari", "Krishna", "Kaveri", "Mahanadi"],
  options_hi: ["गोदावरी", "कृष्णा", "कावेरी", "महानदी"],
  answer_en: "Godavari",
  answer_hi: "गोदावरी",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Who invented the steam engine?",
  question_hi: "स्टीम इंजन का आविष्कार किसने किया?",
  options_en: ["James Watt", "Thomas Savery", "Thomas Newcomen", "George Stephenson"],
  options_hi: ["जेम्स वाट", "थॉमस सेवरी", "थॉमस न्यूकॉमन", "जॉर्ज स्टीफेंसन"],
  answer_en: "James Watt",
  answer_hi: "जेम्स वाट",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the SI unit of catalytic activity?",
  question_hi: "उत्प्रेरक गतिविधि की SI इकाई क्या है?",
  options_en: ["Katal", "Mole", "Gram", "Liter"],
  options_hi: ["कैटल", "मोल", "ग्राम", "लीटर"],
  answer_en: "Katal",
  answer_hi: "कैटल",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Who was the first President of India to die in office?",
  question_hi: "कार्यालय में मरने वाले भारत के पहले राष्ट्रपति कौन थे?",
  options_en: ["Zakir Hussain", "Fakhruddin Ali Ahmed", "Neelam Sanjiva Reddy", "R. Venkataraman"],
  options_hi: ["जाकिर हुसैन", "फखरुद्दीन अली अहमद", "नीलम संजीव रेड्डी", "आर. वेंकटरमण"],
  answer_en: "Zakir Hussain",
  answer_hi: "जाकिर हुसैन",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the chemical formula of Gypsum?",
  question_hi: "जिप्सम का रासायनिक सूत्र क्या है?",
  options_en: ["CaSO4.2H2O", "CaCO3", "Ca(OH)2", "CaO"],
  options_hi: ["CaSO4.2H2O", "CaCO3", "Ca(OH)2", "CaO"],
  answer_en: "CaSO4.2H2O",
  answer_hi: "CaSO4.2H2O",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which is the longest railway platform in the world?",
  question_hi: "दुनिया का सबसे लंबा रेलवे प्लेटफॉर्म कौन सा है?",
  options_en: ["Gorakhpur Junction", "Kharagpur", "Hubballi Junction", "Chennai Beach"],
  options_hi: ["गोरखपुर जंक्शन", "खड़गपुर", "हुब्बल्ली जंक्शन", "चेन्नई बीच"],
  answer_en: "Gorakhpur Junction",
  answer_hi: "गोरखपुर जंक्शन",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Who discovered the law of gravity?",
  question_hi: "गुरुत्वाकर्षण के नियम की खोज किसने की?",
  options_en: ["Isaac Newton", "Albert Einstein", "Galileo Galilei", "Johannes Kepler"],
  options_hi: ["आइजैक न्यूटन", "अल्बर्ट आइंस्टीन", "गैलीलियो गैलिली", "जोहान्स केप्लर"],
  answer_en: "Isaac Newton",
  answer_hi: "आइजैक न्यूटन",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "What is the chemical symbol for Uranium?",
  question_hi: "यूरेनियम का रासायनिक प्रतीक क्या है?",
  options_en: ["U", "Ur", "Un", "Um"],
  options_hi: ["U", "Ur", "Un", "Um"],
  answer_en: "U",
  answer_hi: "U",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which Indian state has the longest coastline?",
  question_hi: "किस भारतीय राज्य की तटरेखा सबसे लंबी है?",
  options_en: ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Maharashtra"],
  options_hi: ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "महाराष्ट्र"],
  answer_en: "Gujarat",
  answer_hi: "गुजरात",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Alexander Graham Bell", "Thomas Edison", "Nikola Tesla", "Samuel Morse"],
  options_hi: ["अलेक्जेंडर ग्राहम बेल", "थॉमस एडिसन", "निकोला टेस्ला", "सैमुअल मोर्स"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
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