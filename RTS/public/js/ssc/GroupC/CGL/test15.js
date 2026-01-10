const questions = [
{
  "num":1,
  question_en: "What is the formula for the volume of a sphere?",
  question_hi: "गोले के आयतन का सूत्र क्या है?",
  options_en: ["4/3 πr³", "πr²h", "⅓ πr²h", "2πr²"],
  options_hi: ["4/3 πr³", "πr²h", "⅓ πr²h", "2πr²"],
  answer_en: "4/3 πr³",
  answer_hi: "4/3 πr³",
  attempted: false,
  selected: ""
},
{
  "num":2,
  question_en: "What is the value of cos 90°?",
  question_hi: "cos 90° का मान क्या है?",
  options_en: ["0", "0.5", "1", "√3/2"],
  options_hi: ["0", "0.5", "1", "√3/2"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
  "num":3,
  question_en: "What is the sum of the first 5 even numbers?",
  question_hi: "पहली 5 सम संख्याओं का योग क्या है?",
  options_en: ["15", "20", "25", "30"],
  options_hi: ["15", "20", "25", "30"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  "num":4,
  question_en: "What is the value of log₁₀ 1?",
  question_hi: "log₁₀ 1 का मान क्या है?",
  options_en: ["0", "1", "10", "Not defined"],
  options_hi: ["0", "1", "10", "परिभाषित नहीं"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
  "num":5,
  question_en: "What is the formula for the diagonal of a square?",
  question_hi: "वर्ग के विकर्ण का सूत्र क्या है?",
  options_en: ["side × √2", "side × 2", "side + side", "side²"],
  options_hi: ["भुजा × √2", "भुजा × 2", "भुजा + भुजा", "भुजा²"],
  answer_en: "side × √2",
  answer_hi: "भुजा × √2",
  attempted: false,
  selected: ""
},
{
  "num":6,
  question_en: "What is the value of 2⁵?",
  question_hi: "2⁵ का मान क्या है?",
  options_en: ["16", "24", "32", "64"],
  options_hi: ["16", "24", "32", "64"],
  answer_en: "32",
  answer_hi: "32",
  attempted: false,
  selected: ""
},
{
  "num":7,
  question_en: "What is the area of a parallelogram with base 8 cm and height 3 cm?",
  question_hi: "8 सेमी आधार और 3 सेमी ऊंचाई वाले समांतर चतुर्भुज का क्षेत्रफल क्या है?",
  options_en: ["20 sq cm", "24 sq cm", "28 sq cm", "32 sq cm"],
  options_hi: ["20 वर्ग सेमी", "24 वर्ग सेमी", "28 वर्ग सेमी", "32 वर्ग सेमी"],
  answer_en: "24 sq cm",
  answer_hi: "24 वर्ग सेमी",
  attempted: false,
  selected: ""
},
{
  "num":8,
  question_en: "What is the value of sin 60°?",
  question_hi: "sin 60° का मान क्या है?",
  options_en: ["0", "0.5", "√3/2", "1"],
  options_hi: ["0", "0.5", "√3/2", "1"],
  answer_en: "√3/2",
  answer_hi: "√3/2",
  attempted: false,
  selected: ""
},
{
  "num":9,
  question_en: "What is the formula for the area of a rhombus?",
  question_hi: "समचतुर्भुज के क्षेत्रफल का सूत्र क्या है?",
  options_en: ["½ × d₁ × d₂", "base × height", "side × height", "side²"],
  options_hi: ["½ × d₁ × d₂", "आधार × ऊंचाई", "भुजा × ऊंचाई", "भुजा²"],
  answer_en: "½ × d₁ × d₂",
  answer_hi: "½ × d₁ × d₂",
  attempted: false,
  selected: ""
},
{
  "num":10,
  question_en: "What is the value of 7 × 8 + 6 ÷ 2?",
  question_hi: "7 × 8 + 6 ÷ 2 का मान क्या है?",
  options_en: ["56", "59", "62", "65"],
  options_hi: ["56", "59", "62", "65"],
  answer_en: "59",
  answer_hi: "59",
  attempted: false,
  selected: ""
},
{
  "num": 11,
  "question_en": "Who is known as the Missile Man of India?",
  "question_hi": "भारत के मिसाइल मैन के रूप में किसे जाना जाता है?",
  "options_en": ["APJ Abdul Kalam", "Vikram Sarabhai", "Homi Bhabha", "K Sivan"],
  "options_hi": ["एपीजे अब्दुल कलाम", "विक्रम साराभाई", "होमी भाभा", "के सिवन"],
  "answer_en": "APJ Abdul Kalam",
  "answer_hi": "एपीजे अब्दुल कलाम",
  "attempted": false,
  "selected": ""
},
{
  "num": 12,
  "question_en": "Which river is the longest river in India?",
  "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
  "options_en": ["Ganga", "Godavari", "Krishna", "Yamuna"],
  "options_hi": ["गंगा", "गोदावरी", "कृष्णा", "यमुना"],
  "answer_en": "Ganga",
  "answer_hi": "गंगा",
  "attempted": false,
  "selected": ""
},
{
  "num": 13,
  "question_en": "Which vitamin is also known as Ascorbic Acid?",
  "question_hi": "एस्कॉर्बिक एसिड किस विटामिन का दूसरा नाम है?",
  "options_en": ["Vitamin A", "Vitamin C", "Vitamin D", "Vitamin K"],
  "options_hi": ["विटामिन A", "विटामिन C", "विटामिन D", "विटामिन K"],
  "answer_en": "Vitamin C",
  "answer_hi": "विटामिन C",
  "attempted": false,
  "selected": ""
},
{
  "num": 14,
  "question_en": "Who built the Taj Mahal?",
  "question_hi": "ताजमहल का निर्माण किसने करवाया?",
  "options_en": ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
  "options_hi": ["अकबर", "शाहजहाँ", "औरंगज़ेब", "जहांगीर"],
  "answer_en": "Shah Jahan",
  "answer_hi": "शाहजहाँ",
  "attempted": false,
  "selected": ""
},
{
  "num": 15,
  "question_en": "Which state is known as the 'Land of Rising Sun' in India?",
  "question_hi": "भारत में किस राज्य को 'लैंड ऑफ़ राइजिंग सन' कहा जाता है?",
  "options_en": ["Assam", "Arunachal Pradesh", "Nagaland", "Sikkim"],
  "options_hi": ["असम", "अरुणाचल प्रदेश", "नागालैंड", "सिक्किम"],
  "answer_en": "Arunachal Pradesh",
  "answer_hi": "अरुणाचल प्रदेश",
  "attempted": false,
  "selected": ""
},
{
  "num": 16,
  "question_en": "Who founded the Indian National Congress (INC)?",
  "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किसने की?",
  "options_en": ["A.O. Hume", "Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Mahatma Gandhi"],
  "options_hi": ["ए.ओ. ह्यूम", "बाल गंगाधर तिलक", "गोपाल कृष्ण गोखले", "महात्मा गांधी"],
  "answer_en": "A.O. Hume",
  "answer_hi": "ए.ओ. ह्यूम",
  "attempted": false,
  "selected": ""
},
{
  "num": 17,
  "question_en": "What is the capital of Sri Lanka?",
  "question_hi": "श्रीलंका की राजधानी क्या है?",
  "options_en": ["Colombo", "Kandy", "Galle", "Anuradhapura"],
  "options_hi": ["कोलंबो", "कैंडी", "गॉल", "अनुराधापुरा"],
  "answer_en": "Colombo",
  "answer_hi": "कोलंबो",
  "attempted": false,
  "selected": ""
},
{
  "num": 18,
  "question_en": "Which planet is closest to the Sun?",
  "question_hi": "सूर्य के सबसे निकट कौन सा ग्रह है?",
  "options_en": ["Venus", "Mercury", "Mars", "Earth"],
  "options_hi": ["शुक्र", "बुध", "मंगल", "पृथ्वी"],
  "answer_en": "Mercury",
  "answer_hi": "बुध",
  "attempted": false,
  "selected": ""
},
{
  "num": 19,
  "question_en": "What is H2O commonly known as?",
  "question_hi": "H2O को सामान्यतः क्या कहा जाता है?",
  "options_en": ["Water", "Hydrogen", "Oxygen", "Salt"],
  "options_hi": ["पानी", "हाइड्रोजन", "ऑक्सीजन", "नमक"],
  "answer_en": "Water",
  "answer_hi": "पानी",
  "attempted": false,
  "selected": ""
},
{
  "num": 20,
  "question_en": "Where is India Gate located?",
  "question_hi": "इंडिया गेट कहाँ स्थित है?",
  "options_en": ["Delhi", "Mumbai", "Kolkata", "Chennai"],
  "options_hi": ["दिल्ली", "मुंबई", "कोलकाता", "चेन्नई"],
  "answer_en": "Delhi",
  "answer_hi": "दिल्ली",
  "attempted": false,
  "selected": ""
},
{
  "num": 21,
  "question_en": "What is the currency of Japan?",
  "question_hi": "जापान की मुद्रा क्या है?",
  "options_en": ["Yuan", "Won", "Yen", "Dollar"],
  "options_hi": ["युआन", "वोन", "येन", "डॉलर"],
  "answer_en": "Yen",
  "answer_hi": "येन",
  "attempted": false,
  "selected": ""
},
{
  "num": 22,
  "question_en": "Who discovered gravity?",
  "question_hi": "गुरुत्वाकर्षण की खोज किसने की?",
  "options_en": ["Albert Einstein", "Galileo", "Isaac Newton", "Bohr"],
  "options_hi": ["आइंस्टीन", "गैलीलियो", "आइज़ैक न्यूटन", "बोर"],
  "answer_en": "Isaac Newton",
  "answer_hi": "आइज़ैक न्यूटन",
  "attempted": false,
  "selected": ""
},
{
  "num": 23,
  "question_en": "Which gas is used in balloons?",
  "question_hi": "गुब्बारों में कौन सी गैस भरी जाती है?",
  "options_en": ["Helium", "Hydrogen", "Nitrogen", "Oxygen"],
  "options_hi": ["हीलियम", "हाइड्रोजन", "नाइट्रोजन", "ऑक्सीजन"],
  "answer_en": "Helium",
  "answer_hi": "हीलियम",
  "attempted": false,
  "selected": ""
},
{
  "num": 24,
  "question_en": "The national flower of India is?",
  "question_hi": "भारत का राष्ट्रीय पुष्प कौन है?",
  "options_en": ["Lily", "Rose", "Lotus", "Sunflower"],
  "options_hi": ["कुमुदिनी", "गुलाब", "कमल", "सूरजमुखी"],
  "answer_en": "Lotus",
  "answer_hi": "कमल",
  "attempted": false,
  "selected": ""
},
{
  "num": 25,
  "question_en": "Who wrote Ramayana?",
  "question_hi": "रामायण की रचना किसने की?",
  "options_en": ["Valmiki", "Ved Vyas", "Tulsidas", "Kalidas"],
  "options_hi": ["वाल्मीकि", "वेद व्यास", "तुलसीदास", "कालिदास"],
  "answer_en": "Valmiki",
  "answer_hi": "वाल्मीकि",
  "attempted": false,
  "selected": ""
},
{
  "num": 26,
  "question_en": "Which city is known as the Pink City?",
  "question_hi": "किस शहर को पिंक सिटी कहा जाता है?",
  "options_en": ["Delhi", "Jaipur", "Mumbai", "Hyderabad"],
  "options_hi": ["दिल्ली", "जयपुर", "मुंबई", "हैदराबाद"],
  "answer_en": "Jaipur",
  "answer_hi": "जयपुर",
  "attempted": false,
  "selected": ""
},
{
  "num": 27,
  "question_en": "Which organ purifies blood in the human body?",
  "question_hi": "मानव शरीर में रक्त को शुद्ध करने वाला अंग कौन सा है?",
  "options_en": ["Heart", "Liver", "Kidney", "Lungs"],
  "options_hi": ["हृदय", "यकृत", "गुर्दा", "फेफड़े"],
  "answer_en": "Kidney",
  "answer_hi": "गुर्दा",
  "attempted": false,
  "selected": ""
},
{
  "num": 28,
  "question_en": "What is the full form of ATM?",
  "question_hi": "ATM का फुल फॉर्म क्या है?",
  "options_en": ["Automatic Teller Machine", "Automatic Time Machine", "Any Time Money", "Access Teller Machine"],
  "options_hi": ["ऑटोमैटिक टेलर मशीन", "ऑटोमैटिक टाइम मशीन", "एनी टाइम मनी", "एक्सेस टेलर मशीन"],
  "answer_en": "Automatic Teller Machine",
  "answer_hi": "ऑटोमैटिक टेलर मशीन",
  "attempted": false,
  "selected": ""
},
{
  "num": 29,
  "question_en": "Which festival is known as the Festival of Lights?",
  "question_hi": "कौन सा त्योहार 'दीपों का त्यौहार' कहलाता है?",
  "options_en": ["Holi", "Diwali", "Eid", "Baisakhi"],
  "options_hi": ["होली", "दीवाली", "ईद", "बैसाखी"],
  "answer_en": "Diwali",
  "answer_hi": "दीवाली",
  "attempted": false,
  "selected": ""
},
{
  "num": 30,
  "question_en": "What is the national currency of China?",
  "question_hi": "चीन की राष्ट्रीय मुद्रा क्या है?",
  "options_en": ["Yen", "Yuan", "Baht", "Won"],
  "options_hi": ["येन", "युआन", "बात", "वोन"],
  "answer_en": "Yuan",
  "answer_hi": "युआन",
  "attempted": false,
  "selected": ""
},
{
  "num": 31,
  "question_en": "Kaziranga National Park is famous for which animal?",
  "question_hi": "काज़ीरंगा राष्ट्रीय उद्यान किस जानवर के लिए प्रसिद्ध है?",
  "options_en": ["Tiger", "One-horned Rhino", "Elephant", "Asiatic Lion"],
  "options_hi": ["बाघ", "एक-सींग वाला गैंडा", "हाथी", "एशियाई शेर"],
  "answer_en": "One-horned Rhino",
  "answer_hi": "एक-सींग वाला गैंडा",
  "attempted": false,
  "selected": ""
},
{
  "num": 32,
  "question_en": "What is the chemical formula of salt?",
  "question_hi": "नमक का रासायनिक सूत्र क्या है?",
  "options_en": ["NaCl", "H2O", "CO2", "O2"],
  "options_hi": ["NaCl", "H2O", "CO2", "O2"],
  "answer_en": "NaCl",
  "answer_hi": "NaCl",
  "attempted": false,
  "selected": ""
},
{
  "num": 33,
  "question_en": "Who was the first President of India?",
  "question_hi": "भारत के प्रथम राष्ट्रपति कौन थे?",
  "options_en": ["Rajendra Prasad", "Dr. Radhakrishnan", "Nehru", "Ambedkar"],
  "options_hi": ["राजेंद्र प्रसाद", "डॉ. राधाकृष्णन", "नेहरू", "अम्बेडकर"],
  "answer_en": "Rajendra Prasad",
  "answer_hi": "राजेंद्र प्रसाद",
  "attempted": false,
  "selected": ""
},
{
  "num": 34,
  "question_en": "Which metal is liquid at room temperature?",
  "question_hi": "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
  "options_en": ["Gold", "Silver", "Mercury", "Copper"],
  "options_hi": ["सोना", "चांदी", "पारा", "तांबा"],
  "answer_en": "Mercury",
  "answer_hi": "पारा",
  "attempted": false,
  "selected": ""
},
{
  "num": 35,
  "question_en": "Which country gifted the Statue of Liberty to the USA?",
  "question_hi": "स्टैच्यू ऑफ लिबर्टी संयुक्त राज्य अमेरिका को किस देश ने उपहार में दी?",
  "options_en": ["UK", "France", "Germany", "Canada"],
  "options_hi": ["यूके", "फ्रांस", "जर्मनी", "कनाडा"],
  "answer_en": "France",
  "answer_hi": "फ्रांस",
  "attempted": false,
  "selected": ""
},
{
  "num": 36,
  "question_en": "The currency of Bangladesh is?",
  "question_hi": "बांग्लादेश की मुद्रा क्या है?",
  "options_en": ["Rupee", "Taka", "Rial", "Dollar"],
  "options_hi": ["रुपया", "टका", "रियाल", "डॉलर"],
  "answer_en": "Taka",
  "answer_hi": "टका",
  "attempted": false,
  "selected": ""
},
{
  "num": 37,
  "question_en": "Which state is famous for Bihu festival?",
  "question_hi": "बिहू त्यौहार किस राज्य का प्रसिद्ध उत्सव है?",
  "options_en": ["Assam", "Bihar", "Odisha", "West Bengal"],
  "options_hi": ["असम", "बिहार", "ओडिशा", "पश्चिम बंगाल"],
  "answer_en": "Assam",
  "answer_hi": "असम",
  "attempted": false,
  "selected": ""
},
{
  "num": 38,
  "question_en": "What is the chemical symbol of Gold?",
  "question_hi": "सोने का रासायनिक प्रतीक क्या है?",
  "options_en": ["Au", "Ag", "Fe", "Cu"],
  "options_hi": ["Au", "Ag", "Fe", "Cu"],
  "answer_en": "Au",
  "answer_hi": "Au",
  "attempted": false,
  "selected": ""
},
{
  "num": 39,
  "question_en": "Where is the Sardar Sarovar Dam located?",
  "question_hi": "सरदार सरोवर बांध कहाँ स्थित है?",
  "options_en": ["Rajasthan", "Gujarat", "Madhya Pradesh", "Maharashtra"],
  "options_hi": ["राजस्थान", "गुजरात", "मध्य प्रदेश", "महाराष्ट्र"],
  "answer_en": "Gujarat",
  "answer_hi": "गुजरात",
  "attempted": false,
  "selected": ""
},
{
  "num": 40,
  "question_en": "Who was also called 'Punjab Kesari'?",
  "question_hi": "'पंजाब केसरी' किसे कहा जाता था?",
  "options_en": ["Lala Lajpat Rai", "Bhagat Singh", "Tilak", "Nehru"],
  "options_hi": ["लाला लाजपत राय", "भगत सिंह", "तिलक", "नेहरू"],
  "answer_en": "Lala Lajpat Rai",
  "answer_hi": "लाला लाजपत राय",
  "attempted": false,
  "selected": ""
},
{
  "num": 41,
  "question_en": "Which vitamin is known as sunshine vitamin?",
  "question_hi": "कौन सा विटामिन सनशाइन विटामिन कहलाता है?",
  "options_en": ["A", "B", "C", "D"],
  "options_hi": ["A", "B", "C", "D"],
  "answer_en": "D",
  "answer_hi": "D",
  "attempted": false,
  "selected": ""
},
{
  "num": 42,
  "question_en": "What is the study of plants called?",
  "question_hi": "पौधों के अध्ययन को क्या कहते हैं?",
  "options_en": ["Zoology", "Botany", "Ecology", "Geology"],
  "options_hi": ["जूलॉजी", "बॉटनी", "इकोलॉजी", "जियोलॉजी"],
  "answer_en": "Botany",
  "answer_hi": "बॉटनी",
  "attempted": false,
  "selected": ""
},
{
  "num": 43,
  "question_en": "Which state has the longest coastline in India?",
  "question_hi": "भारत में किस राज्य की समुद्री तटरेखा सबसे लंबी है?",
  "options_en": ["Gujarat", "Tamil Nadu", "Maharashtra", "Kerala"],
  "options_hi": ["गुजरात", "तमिलनाडु", "महाराष्ट्र", "केरल"],
  "answer_en": "Gujarat",
  "answer_hi": "गुजरात",
  "attempted": false,
  "selected": ""
},
{
  "num": 44,
  "question_en": "The first Indian to win Nobel Prize?",
  "question_hi": "भारत का पहला नोबेल पुरस्कार विजेता कौन था?",
  "options_en": ["C.V. Raman", "Mother Teresa", "Rabindranath Tagore", "Amartya Sen"],
  "options_hi": ["सी.वी. रमन", "मदर टेरेसा", "रवींद्रनाथ टैगोर", "अमर्त्य सेन"],
  "answer_en": "Rabindranath Tagore",
  "answer_hi": "रवींद्रनाथ टैगोर",
  "attempted": false,
  "selected": ""
},
{
  "num": 45,
  "question_en": "What is the national tree of India?",
  "question_hi": "भारत का राष्ट्रीय वृक्ष कौन है?",
  "options_en": ["Banyan", "Neem", "Peepal", "Mango"],
  "options_hi": ["बरगद", "नीम", "पीपल", "आम"],
  "answer_en": "Banyan",
  "answer_hi": "बरगद",
  "attempted": false,
  "selected": ""
},
{
  "num": 46,
  "question_en": "Who is the author of 'Wings of Fire'?",
  "question_hi": "'विंग्स ऑफ फायर' पुस्तक के लेखक कौन हैं?",
  "options_en": ["APJ Abdul Kalam", "Nehru", "Sarabhai", "Dr. Radhakrishnan"],
  "options_hi": ["एपीजे अब्दुल कलाम", "नेहरू", "सराभाई", "डॉ. राधाकृष्णन"],
  "answer_en": "APJ Abdul Kalam",
  "answer_hi": "एपीजे अब्दुल कलाम",
  "attempted": false,
  "selected": ""
},
{
  "num": 47,
  "question_en": "Which country hosted the 2024 Olympic Games?",
  "question_hi": "2024 ओलंपिक खेलों की मेजबानी किस देश ने की?",
  "options_en": ["China", "France", "Japan", "USA"],
  "options_hi": ["चीन", "फ्रांस", "जापान", "अमेरिका"],
  "answer_en": "France",
  "answer_hi": "फ्रांस",
  "attempted": false,
  "selected": ""
},
{
  "num": 48,
  "question_en": "Which Indian state is famous for 'Kalaripayattu'?",
  "question_hi": "'कलारीपयट्टू' किस राज्य का पारंपरिक मार्शल आर्ट है?",
  "options_en": ["Kerala", "Tamil Nadu", "Karnataka", "Punjab"],
  "options_hi": ["केरल", "तमिलनाडु", "कर्नाटक", "पंजाब"],
  "answer_en": "Kerala",
  "answer_hi": "केरल",
  "attempted": false,
  "selected": ""
},
{
  "num": 49,
  "question_en": "Which metal is used in making railway tracks?",
  "question_hi": "रेलवे ट्रैक के निर्माण में किस धातु का उपयोग किया जाता है?",
  "options_en": ["Copper", "Aluminium", "Iron", "Lead"],
  "options_hi": ["तांबा", "एल्यूमिनियम", "लोहा", "सीसा"],
  "answer_en": "Iron",
  "answer_hi": "लोहा",
  "attempted": false,
  "selected": ""
},
{
  "num": 50,
  "question_en": "Who was the first woman to go into space?",
  "question_hi": "अंतरिक्ष में जाने वाली पहली महिला कौन थी?",
  "options_en": ["Kalpana Chawla", "Valentina Tereshkova", "Sunita Williams", "Sally Ride"],
  "options_hi": ["कल्पना चावला", "वैलेन्टिना तेरेश्कोवा", "सुनीता विलियम्स", "सैली राइड"],
  "answer_en": "Valentina Tereshkova",
  "answer_hi": "वैलेन्टिना तेरेश्कोवा",
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