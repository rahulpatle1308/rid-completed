const questions = [
  {
  num: 1,
  question_en: "Which of the following is a fundamental right under the Indian Constitution?",
  question_hi: "भारतीय संविधान के तहत निम्नलिखित में से कौन सा मौलिक अधिकार है?",
  options_en: ["Right to Property", "Right to Education", "Right to Business", "Right to Travel Abroad"],
  options_hi: ["संपत्ति का अधिकार", "शिक्षा का अधिकार", "व्यवसाय का अधिकार", "विदेश यात्रा का अधिकार"],
  answer_en: "Right to Education",
  answer_hi: "शिक्षा का अधिकार",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Who was the first Prime Minister of India?",
  question_hi: "भारत के प्रथम प्रधानमंत्री कौन थे?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Rajendra Prasad"],
  options_hi: ["महात्मा गाँधी", "जवाहरलाल नेहरू", "सरदार पटेल", "राजेंद्र प्रसाद"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the chemical symbol for Gold?",
  question_hi: "सोने का रासायनिक प्रतीक क्या है?",
  options_en: ["Go", "Gd", "Au", "Ag"],
  options_hi: ["Go", "Gd", "Au", "Ag"],
  answer_en: "Au",
  answer_hi: "Au",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "The 'Gateway of India' is located in which city?",
  question_hi: "'गेटवे ऑफ इंडिया' किस शहर में स्थित है?",
  options_en: ["Delhi", "Kolkata", "Mumbai", "Chennai"],
  options_hi: ["दिल्ली", "कोलकाता", "मुंबई", "चेन्नई"],
  answer_en: "Mumbai",
  answer_hi: "मुंबई",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which planet is known as the Red Planet?",
  question_hi: "लाल ग्रह के नाम से कौन सा ग्रह जाना जाता है?",
  options_en: ["Venus", "Mars", "Jupiter", "Saturn"],
  options_hi: ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the full form of 'URL'?",
  question_hi: "'URL' का पूर्ण रूप क्या है?",
  options_en: ["Uniform Resource Locator", "Universal Reference Link", "Uniform Reference Link", "Universal Resource Locator"],
  options_hi: ["यूनिफॉर्म रिसोर्स लोकेटर", "यूनिवर्सल रेफरेंस लिंक", "यूनिफॉर्म रेफरेंस लिंक", "यूनिवर्सल रिसोर्स लोकेटर"],
  answer_en: "Uniform Resource Locator",
  answer_hi: "यूनिफॉर्म रिसोर्स लोकेटर",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who wrote the Indian National Anthem?",
  question_hi: "भारतीय राष्ट्रगान किसने लिखा?",
  options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Shivaji Rao"],
  options_hi: ["बंकिम चंद्र चटर्जी", "रबीन्द्रनाथ टैगोर", "सरोजिनी नायडू", "शिवाजी राव"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रबीन्द्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which gas is most abundant in Earth's atmosphere?",
  question_hi: "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में पाई जाती है?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Nitrogen",
  answer_hi: "नाइट्रोजन",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "In which year did India gain independence?",
  question_hi: "भारत ने किस वर्ष स्वतंत्रता प्राप्त की?",
  options_en: ["1945", "1947", "1950", "1935"],
  options_hi: ["1945", "1947", "1950", "1935"],
  answer_en: "1947",
  answer_hi: "1947",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "What is the capital of Uttar Pradesh?",
  question_hi: "उत्तर प्रदेश की राजधानी क्या है?",
  options_en: ["Kanpur", "Lucknow", "Varanasi", "Allahabad"],
  options_hi: ["कानपुर", "लखनऊ", "वाराणसी", "इलाहाबाद"],
  answer_en: "Lucknow",
  answer_hi: "लखनऊ",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Which of the following is not a primary color of light?",
  question_hi: "निम्नलिखित में से कौन प्रकाश का प्राथमिक रंग नहीं है?",
  options_en: ["Red", "Green", "Blue", "Yellow"],
  options_hi: ["लाल", "हरा", "नीला", "पीला"],
  answer_en: "Yellow",
  answer_hi: "पीला",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "The 'Mahabharata' was written by:",
  question_hi: "'महाभारत' किसके द्वारा लिखा गया था?",
  options_en: ["Valmiki", "Ved Vyas", "Tulsidas", "Kalidas"],
  options_hi: ["वाल्मीकि", "वेद व्यास", "तुलसीदास", "कालिदास"],
  answer_en: "Ved Vyas",
  answer_hi: "वेद व्यास",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the chemical formula of water?",
  question_hi: "पानी का रासायनिक सूत्र क्या है?",
  options_en: ["H2O2", "CO2", "H2O", "NaCl"],
  options_hi: ["H2O2", "CO2", "H2O", "NaCl"],
  answer_en: "H2O",
  answer_hi: "H2O",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which organ purifies blood in human body?",
  question_hi: "मानव शरीर में कौन सा अंग रक्त को शुद्ध करता है?",
  options_en: ["Heart", "Lungs", "Kidneys", "Liver"],
  options_hi: ["दिल", "फेफड़े", "गुर्दे", "यकृत"],
  answer_en: "Kidneys",
  answer_hi: "गुर्दे",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Who discovered penicillin?",
  question_hi: "पेनिसिलिन की खोज किसने की?",
  options_en: ["Alexander Fleming", "Louis Pasteur", "Robert Koch", "Marie Curie"],
  options_hi: ["अलेक्जेंडर फ्लेमिंग", "लुई पाश्चर", "रॉबर्ट कोच", "मैरी क्यूरी"],
  answer_en: "Alexander Fleming",
  answer_hi: "अलेक्जेंडर फ्लेमिंग",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "How many players are there in a cricket team?",
  question_hi: "क्रिकेट टीम में कितने खिलाड़ी होते हैं?",
  options_en: ["9", "10", "11", "12"],
  options_hi: ["9", "10", "11", "12"],
  answer_en: "11",
  answer_hi: "11",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which is the longest river in India?",
  question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Ganga", "Yamuna", "Brahmaputra", "Godavari"],
  options_hi: ["गंगा", "यमुना", "ब्रह्मपुत्र", "गोदावरी"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is the currency of Japan?",
  question_hi: "जापान की मुद्रा क्या है?",
  options_en: ["Yuan", "Won", "Yen", "Ringgit"],
  options_hi: ["युआन", "वॉन", "येन", "रिंगित"],
  answer_en: "Yen",
  answer_hi: "येन",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Vitamin C is also known as:",
  question_hi: "विटामिन सी को किस नाम से भी जाना जाता है?",
  options_en: ["Ascorbic Acid", "Folic Acid", "Niacin", "Riboflavin"],
  options_hi: ["एस्कॉर्बिक एसिड", "फोलिक एसिड", "नियासिन", "राइबोफ्लेविन"],
  answer_en: "Ascorbic Acid",
  answer_hi: "एस्कॉर्बिक एसिड",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which gas is filled in electric bulbs?",
  question_hi: "बिजली के बल्ब में कौन सी गैस भरी जाती है?",
  options_en: ["Oxygen", "Hydrogen", "Nitrogen", "Argon"],
  options_hi: ["ऑक्सीजन", "हाइड्रोजन", "नाइट्रोजन", "आर्गन"],
  answer_en: "Argon",
  answer_hi: "आर्गन",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who is known as the 'Father of the Indian Constitution'?",
  question_hi: "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
  options_hi: ["महात्मा गाँधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
  answer_en: "B.R. Ambedkar",
  answer_hi: "बी.आर. अंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which planet is known as the 'Morning Star'?",
  question_hi: "किस ग्रह को 'सुबह का तारा' कहा जाता है?",
  options_en: ["Mars", "Venus", "Mercury", "Jupiter"],
  options_hi: ["मंगल", "शुक्र", "बुध", "बृहस्पति"],
  answer_en: "Venus",
  answer_hi: "शुक्र",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "The Red Fort is located in which city?",
  question_hi: "लाल किला किस शहर में स्थित है?",
  options_en: ["Agra", "Delhi", "Jaipur", "Mumbai"],
  options_hi: ["आगरा", "दिल्ली", "जयपुर", "मुंबई"],
  answer_en: "Delhi",
  answer_hi: "दिल्ली",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is the SI unit of force?",
  question_hi: "बल की SI इकाई क्या है?",
  options_en: ["Joule", "Newton", "Pascal", "Watt"],
  options_hi: ["जूल", "न्यूटन", "पास्कल", "वाट"],
  answer_en: "Newton",
  answer_hi: "न्यूटन",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सी धातु कमरे के तापमान पर तरल होती है?",
  options_en: ["Iron", "Mercury", "Gold", "Silver"],
  options_hi: ["लोहा", "पारा", "सोना", "चाँदी"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Who was the first woman Prime Minister of India?",
  question_hi: "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
  options_en: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sarojini Naidu"],
  options_hi: ["सोनिया गाँधी", "इंदिरा गाँधी", "प्रतिभा पाटिल", "सरोजिनी नायडू"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गाँधी",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which is the smallest state of India by area?",
  question_hi: "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
  options_en: ["Goa", "Sikkim", "Tripura", "Nagaland"],
  options_hi: ["गोवा", "सिक्किम", "त्रिपुरा", "नागालैंड"],
  answer_en: "Goa",
  answer_hi: "गोवा",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is the full form of 'RAM'?",
  question_hi: "'RAM' का पूर्ण रूप क्या है?",
  options_en: ["Random Access Memory", "Read Only Memory", "Random Active Memory", "Rapid Access Memory"],
  options_hi: ["रैंडम एक्सेस मेमोरी", "रीड ओनली मेमोरी", "रैंडम एक्टिव मेमोरी", "रैपिड एक्सेस मेमोरी"],
  answer_en: "Random Access Memory",
  answer_hi: "रैंडम एक्सेस मेमोरी",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which festival is known as the 'Festival of Lights'?",
  question_hi: "किस त्योहार को 'रोशनी का त्योहार' कहा जाता है?",
  options_en: ["Holi", "Diwali", "Dussehra", "Eid"],
  options_hi: ["होली", "दिवाली", "दशहरा", "ईद"],
  answer_en: "Diwali",
  answer_hi: "दिवाली",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Thomas Edison", "Alexander Graham Bell", "Nikola Tesla", "Guglielmo Marconi"],
  options_hi: ["थॉमस एडिसन", "अलेक्जेंडर ग्राहम बेल", "निकोला टेस्ला", "गुलिएल्मो मार्कोनी"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which gas do plants absorb during photosynthesis?",
  question_hi: "पौधे प्रकाश संश्लेषण के दौरान कौन सी गैस अवशोषित करते हैं?",
  options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "The Taj Mahal was built by which Mughal emperor?",
  question_hi: "ताजमहल किस मुगल सम्राट ने बनवाया था?",
  options_en: ["Akbar", "Shah Jahan", "Aurangzeb", "Jahangir"],
  options_hi: ["अकबर", "शाहजहाँ", "औरंगजेब", "जहाँगीर"],
  answer_en: "Shah Jahan",
  answer_hi: "शाहजहाँ",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the normal human body temperature in Celsius?",
  question_hi: "सामान्य मानव शरीर का तापमान सेल्सियस में कितना होता है?",
  options_en: ["36.5°C", "37°C", "37.5°C", "38°C"],
  options_hi: ["36.5°C", "37°C", "37.5°C", "38°C"],
  answer_en: "37°C",
  answer_hi: "37°C",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which is the largest ocean in the world?",
  question_hi: "विश्व का सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
  options_hi: ["अटलांटिक महासागर", "हिंद महासागर", "आर्कटिक महासागर", "प्रशांत महासागर"],
  answer_en: "Pacific Ocean",
  answer_hi: "प्रशांत महासागर",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is the chemical symbol for Iron?",
  question_hi: "आयरन का रासायनिक प्रतीक क्या है?",
  options_en: ["Ir", "Fe", "In", "Au"],
  options_hi: ["Ir", "Fe", "In", "Au"],
  answer_en: "Fe",
  answer_hi: "Fe",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "How many bones are there in the adult human body?",
  question_hi: "वयस्क मानव शरीर में कितनी हड्डियाँ होती हैं?",
  options_en: ["206", "210", "215", "200"],
  options_hi: ["206", "210", "215", "200"],
  answer_en: "206",
  answer_hi: "206",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which is the national animal of India?",
  question_hi: "भारत का राष्ट्रीय पशु कौन सा है?",
  options_en: ["Lion", "Elephant", "Tiger", "Peacock"],
  options_hi: ["शेर", "हाथी", "बाघ", "मोर"],
  answer_en: "Tiger",
  answer_hi: "बाघ",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "What is the capital of Madhya Pradesh?",
  question_hi: "मध्य प्रदेश की राजधानी क्या है?",
  options_en: ["Indore", "Bhopal", "Jabalpur", "Gwalior"],
  options_hi: ["इंदौर", "भोपाल", "जबलपुर", "ग्वालियर"],
  answer_en: "Bhopal",
  answer_hi: "भोपाल",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Who wrote 'Ramayana'?",
  question_hi: "'रामायण' किसने लिखी?",
  options_en: ["Ved Vyas", "Valmiki", "Tulsidas", "Kalidas"],
  options_hi: ["वेद व्यास", "वाल्मीकि", "तुलसीदास", "कालिदास"],
  answer_en: "Valmiki",
  answer_hi: "वाल्मीकि",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which vitamin is produced when human body is exposed to sunlight?",
  question_hi: "मानव शरीर जब सूर्य के प्रकाश के संपर्क में आता है तो कौन सा विटामिन उत्पन्न होता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन ए", "विटामिन बी", "विटामिन सी", "विटामिन डी"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन डी",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the full form of 'HTTP'?",
  question_hi: "'HTTP' का पूर्ण रूप क्या है?",
  options_en: ["Hyper Text Transfer Protocol", "Hyper Transfer Text Protocol", "High Text Transfer Protocol", "Hyper Text Transmission Protocol"],
  options_hi: ["हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपर ट्रांसफर टेक्स्ट प्रोटोकॉल", "हाई टेक्स्ट ट्रांसफर प्रोटोकॉल", "हाइपर टेक्स्ट ट्रांसमिशन प्रोटोकॉल"],
  answer_en: "Hyper Text Transfer Protocol",
  answer_hi: "हाइपर टेक्स्ट ट्रांसफर प्रोटोकॉल",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which is the highest mountain peak in India?",
  question_hi: "भारत की सबसे ऊँची पर्वत चोटी कौन सी है?",
  options_en: ["Mount Everest", "K2", "Kanchenjunga", "Nanda Devi"],
  options_hi: ["माउंट एवरेस्ट", "K2", "कंचनजंघा", "नंदा देवी"],
  answer_en: "K2",
  answer_hi: "K2",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "The largest planet in our solar system is:",
  question_hi: "हमारे सौर मंडल का सबसे बड़ा ग्रह है:",
  options_en: ["Earth", "Saturn", "Jupiter", "Neptune"],
  options_hi: ["पृथ्वी", "शनि", "बृहस्पति", "नेपच्यून"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which state is known as the 'Spice Garden of India'?",
  question_hi: "किस राज्य को 'भारत का मसाला बागान' कहा जाता है?",
  options_en: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
  options_hi: ["केरल", "कर्नाटक", "तमिलनाडु", "आंध्र प्रदेश"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Who is the current President of India (as of 2024)?",
  question_hi: "भारत के वर्तमान राष्ट्रपति (2024 तक) कौन हैं?",
  options_en: ["Ram Nath Kovind", "Pranab Mukherjee", "Droupadi Murmu", "APJ Abdul Kalam"],
  options_hi: ["राम नाथ कोविंद", "प्रणब मुखर्जी", "द्रौपदी मुर्मू", "एपीजे अब्दुल कलाम"],
  answer_en: "Droupadi Murmu",
  answer_hi: "द्रौपदी मुर्मू",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which river is also known as the 'Sorrow of Bengal'?",
  question_hi: "किस नदी को 'बंगाल का शोक' भी कहा जाता है?",
  options_en: ["Ganga", "Brahmaputra", "Damodar", "Mahanadi"],
  options_hi: ["गंगा", "ब्रह्मपुत्र", "दामोदर", "महानदी"],
  answer_en: "Damodar",
  answer_hi: "दामोदर",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the boiling point of water at sea level?",
  question_hi: "समुद्र तल पर पानी का क्वथनांक क्या है?",
  options_en: ["90°C", "95°C", "100°C", "105°C"],
  options_hi: ["90°C", "95°C", "100°C", "105°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which is the smallest continent in the world?",
  question_hi: "दुनिया का सबसे छोटा महाद्वीप कौन सा है?",
  options_en: ["Europe", "Australia", "Antarctica", "South America"],
  options_hi: ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the chemical symbol for Sodium?",
  question_hi: "सोडियम का रासायनिक प्रतीक क्या है?",
  options_en: ["So", "Na", "Sd", "Sm"],
  options_hi: ["So", "Na", "Sd", "Sm"],
  answer_en: "Na",
  answer_hi: "Na",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Who invented the computer?",
  question_hi: "कंप्यूटर का आविष्कार किसने किया?",
  options_en: ["Charles Babbage", "Alan Turing", "Bill Gates", "Steve Jobs"],
  options_hi: ["चार्ल्स बैबेज", "एलन ट्यूरिंग", "बिल गेट्स", "स्टीव जॉब्स"],
  answer_en: "Charles Babbage",
  answer_hi: "चार्ल्स बैबेज",
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