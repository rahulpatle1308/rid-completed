const questions = [
  {
  num: 1,
  question_en: "Which is the largest planet in our solar system?",
  question_hi: "हमारे सौरमंडल का सबसे बड़ा ग्रह कौन सा है?",
  options_en: ["Earth", "Jupiter", "Saturn", "Neptune"],
  options_hi: ["पृथ्वी", "बृहस्पति", "शनि", "नेप्च्यून"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which is the longest river in the world?",
  question_hi: "दुनिया की सबसे लंबी नदी कौन सी है?",
  options_en: ["Amazon", "Nile", "Yangtze", "Mississippi"],
  options_hi: ["अमेज़न", "नील", "यांग्त्ज़ी", "मिसिसिपी"],
  answer_en: "Nile",
  answer_hi: "नील",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the capital of Australia?",
  question_hi: "ऑस्ट्रेलिया की राजधानी क्या है?",
  options_en: ["Sydney", "Melbourne", "Canberra", "Perth"],
  options_hi: ["सिडनी", "मेलबोर्न", "कैनबरा", "पर्थ"],
  answer_en: "Canberra",
  answer_hi: "कैनबरा",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Which is the largest ocean in the world?",
  question_hi: "दुनिया का सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  options_hi: ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
  answer_en: "Pacific Ocean",
  answer_hi: "प्रशांत महासागर",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which country is known as the 'Land of the Rising Sun'?",
  question_hi: "किस देश को 'उगते सूरज की भूमि' के नाम से जाना जाता है?",
  options_en: ["China", "Japan", "South Korea", "Thailand"],
  options_hi: ["चीन", "जापान", "दक्षिण कोरिया", "थाईलैंड"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Which is the smallest continent by area?",
  question_hi: "क्षेत्रफल के हिसाब से सबसे छोटा महाद्वीप कौन सा है?",
  options_en: ["Europe", "Australia", "Antarctica", "South America"],
  options_hi: ["यूरोप", "ऑस्ट्रेलिया", "अंटार्कटिका", "दक्षिण अमेरिका"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "What is the capital of Brazil?",
  question_hi: "ब्राजील की राजधानी क्या है?",
  options_en: ["Rio de Janeiro", "São Paulo", "Brasília", "Salvador"],
  options_hi: ["रियो डी जनेरियो", "साओ पाउलो", "ब्रासीलिया", "साल्वाडोर"],
  answer_en: "Brasília",
  answer_hi: "ब्रासीलिया",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which is the highest mountain in the world?",
  question_hi: "दुनिया की सबसे ऊंची पर्वत चोटी कौन सी है?",
  options_en: ["K2", "Kangchenjunga", "Mount Everest", "Lhotse"],
  options_hi: ["K2", "कंचनजंघा", "माउंट एवरेस्ट", "ल्होत्से"],
  answer_en: "Mount Everest",
  answer_hi: "माउंट एवरेस्ट",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is the capital of Canada?",
  question_hi: "कनाडा की राजधानी क्या है?",
  options_en: ["Toronto", "Vancouver", "Ottawa", "Montreal"],
  options_hi: ["टोरंटो", "वैंकूवर", "ओटावा", "मॉन्ट्रियल"],
  answer_en: "Ottawa",
  answer_hi: "ओटावा",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which desert is the largest in the world?",
  question_hi: "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
  options_en: ["Sahara Desert", "Arabian Desert", "Gobi Desert", "Kalahari Desert"],
  options_hi: ["सहारा रेगिस्तान", "अरब रेगिस्तान", "गोबी रेगिस्तान", "कालाहारी रेगिस्तान"],
  answer_en: "Sahara Desert",
  answer_hi: "सहारा रेगिस्तान",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Which country has the longest coastline in the world?",
  question_hi: "दुनिया में सबसे लंबी तटरेखा किस देश की है?",
  options_en: ["United States", "Canada", "Russia", "Australia"],
  options_hi: ["संयुक्त राज्य अमेरिका", "कनाडा", "रूस", "ऑस्ट्रेलिया"],
  answer_en: "Canada",
  answer_hi: "कनाडा",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the capital of Egypt?",
  question_hi: "मिस्र की राजधानी क्या है?",
  options_en: ["Alexandria", "Cairo", "Giza", "Luxor"],
  options_hi: ["अलेक्जेंड्रिया", "काहिरा", "गीज़ा", "लक्सर"],
  answer_en: "Cairo",
  answer_hi: "काहिरा",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Which is the largest lake in the world?",
  question_hi: "दुनिया की सबसे बड़ी झील कौन सी है?",
  options_en: ["Lake Superior", "Caspian Sea", "Lake Victoria", "Lake Baikal"],
  options_hi: ["लेक सुपीरियर", "कैस्पियन सागर", "लेक विक्टोरिया", "लेक बैकाल"],
  answer_en: "Caspian Sea",
  answer_hi: "कैस्पियन सागर",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which country is known as the 'Land of Thousand Lakes'?",
  question_hi: "किस देश को 'हजार झीलों की भूमि' के नाम से जाना जाता है?",
  options_en: ["Sweden", "Finland", "Norway", "Canada"],
  options_hi: ["स्वीडन", "फिनलैंड", "नॉर्वे", "कनाडा"],
  answer_en: "Finland",
  answer_hi: "फिनलैंड",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the capital of France?",
  question_hi: "फ्रांस की राजधानी क्या है?",
  options_en: ["Lyon", "Marseille", "Paris", "Nice"],
  options_hi: ["ल्यों", "मार्सिले", "पेरिस", "नाइस"],
  answer_en: "Paris",
  answer_hi: "पेरिस",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which is the smallest country in the world by area?",
  question_hi: "क्षेत्रफल के हिसाब से दुनिया का सबसे छोटा देश कौन सा है?",
  options_en: ["Monaco", "Vatican City", "San Marino", "Liechtenstein"],
  options_hi: ["मोनाको", "वेटिकन सिटी", "सैन मैरिनो", "लिचेंस्टीन"],
  answer_en: "Vatican City",
  answer_hi: "वेटिकन सिटी",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which river is known as the 'Sorrow of China'?",
  question_hi: "किस नदी को 'चीन का दु:ख' कहा जाता है?",
  options_en: ["Yangtze", "Yellow River", "Mekong", "Pearl River"],
  options_hi: ["यांग्त्ज़ी", "पीली नदी", "मेकांग", "पर्ल रिवर"],
  answer_en: "Yellow River",
  answer_hi: "पीली नदी",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "What is the capital of Germany?",
  question_hi: "जर्मनी की राजधानी क्या है?",
  options_en: ["Berlin", "Munich", "Hamburg", "Frankfurt"],
  options_hi: ["बर्लिन", "म्यूनिख", "हैम्बर्ग", "फ्रैंकफर्ट"],
  answer_en: "Berlin",
  answer_hi: "बर्लिन",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which is the largest island in the world?",
  question_hi: "दुनिया का सबसे बड़ा द्वीप कौन सा है?",
  options_en: ["Greenland", "New Guinea", "Borneo", "Madagascar"],
  options_hi: ["ग्रीनलैंड", "न्यू गिनी", "बोर्नियो", "मेडागास्कर"],
  answer_en: "Greenland",
  answer_hi: "ग्रीनलैंड",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which country is known as the 'Land of the Midnight Sun'?",
  question_hi: "किस देश को 'मध्यरात्रि सूर्य की भूमि' के नाम से जाना जाता है?",
  options_en: ["Sweden", "Norway", "Iceland", "Finland"],
  options_hi: ["स्वीडन", "नॉर्वे", "आइसलैंड", "फिनलैंड"],
  answer_en: "Norway",
  answer_hi: "नॉर्वे",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is the capital of Italy?",
  question_hi: "इटली की राजधानी क्या है?",
  options_en: ["Rome", "Milan", "Venice", "Florence"],
  options_hi: ["रोम", "मिलान", "वेनिस", "फ्लोरेंस"],
  answer_en: "Rome",
  answer_hi: "रोम",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which is the longest mountain range in the world?",
  question_hi: "दुनिया की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
  options_en: ["Andes", "Rocky Mountains", "Himalayas", "Alps"],
  options_hi: ["एंडीज", "रॉकी पर्वत", "हिमालय", "आल्प्स"],
  answer_en: "Andes",
  answer_hi: "एंडीज",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which country is known as the 'Pearl of the Indian Ocean'?",
  question_hi: "किस देश को 'हिंद महासागर का मोती' कहा जाता है?",
  options_en: ["Maldives", "Sri Lanka", "Mauritius", "Seychelles"],
  options_hi: ["मालदीव", "श्रीलंका", "मॉरीशस", "सेशेल्स"],
  answer_en: "Sri Lanka",
  answer_hi: "श्रीलंका",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is the capital of Japan?",
  question_hi: "जापान की राजधानी क्या है?",
  options_en: ["Tokyo", "Osaka", "Kyoto", "Yokohama"],
  options_hi: ["टोक्यो", "ओसाका", "क्योटो", "योकोहामा"],
  answer_en: "Tokyo",
  answer_hi: "टोक्यो",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which is the largest delta in the world?",
  question_hi: "दुनिया का सबसे बड़ा डेल्टा कौन सा है?",
  options_en: ["Ganges-Brahmaputra Delta", "Mississippi Delta", "Nile Delta", "Mekong Delta"],
  options_hi: ["गंगा-ब्रह्मपुत्र डेल्टा", "मिसिसिपी डेल्टा", "नील डेल्टा", "मेकांग डेल्टा"],
  answer_en: "Ganges-Brahmaputra Delta",
  answer_hi: "गंगा-ब्रह्मपुत्र डेल्टा",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which country is known as the 'Land of White Elephants'?",
  question_hi: "किस देश को 'सफेद हाथियों की भूमि' कहा जाता है?",
  options_en: ["Thailand", "Myanmar", "Laos", "Cambodia"],
  options_hi: ["थाईलैंड", "म्यांमार", "लाओस", "कंबोडिया"],
  answer_en: "Thailand",
  answer_hi: "थाईलैंड",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is the capital of Russia?",
  question_hi: "रूस की राजधानी क्या है?",
  options_en: ["St. Petersburg", "Moscow", "Novosibirsk", "Kazan"],
  options_hi: ["सेंट पीटर्सबर्ग", "मास्को", "नोवोसिबिर्स्क", "कज़ान"],
  answer_en: "Moscow",
  answer_hi: "मास्को",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which is the deepest ocean in the world?",
  question_hi: "दुनिया का सबसे गहरा महासागर कौन सा है?",
  options_en: ["Atlantic Ocean", "Indian Ocean", "Pacific Ocean", "Arctic Ocean"],
  options_hi: ["अटलांटिक महासागर", "हिंद महासागर", "प्रशांत महासागर", "आर्कटिक महासागर"],
  answer_en: "Pacific Ocean",
  answer_hi: "प्रशांत महासागर",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Which country is known as the 'Land of the Golden Fleece'?",
  question_hi: "किस देश को 'गोल्डन फ्लीस की भूमि' कहा जाता है?",
  options_en: ["New Zealand", "Australia", "South Africa", "Argentina"],
  options_hi: ["न्यूज़ीलैंड", "ऑस्ट्रेलिया", "दक्षिण अफ्रीका", "अर्जेंटीना"],
  answer_en: "Australia",
  answer_hi: "ऑस्ट्रेलिया",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is the capital of South Africa?",
  question_hi: "दक्षिण अफ्रीका की राजधानी क्या है?",
  options_en: ["Cape Town", "Pretoria", "Johannesburg", "All of these"],
  options_hi: ["केप टाउन", "प्रिटोरिया", "जोहान्सबर्ग", "ये सभी"],
  answer_en: "All of these",
  answer_hi: "ये सभी",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which is the largest freshwater lake in the world?",
  question_hi: "दुनिया की सबसे बड़ी मीठे पानी की झील कौन सी है?",
  options_en: ["Lake Superior", "Lake Victoria", "Lake Baikal", "Lake Michigan"],
  options_hi: ["लेक सुपीरियर", "लेक विक्टोरिया", "लेक बैकाल", "लेक मिशिगन"],
  answer_en: "Lake Superior",
  answer_hi: "लेक सुपीरियर",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which country is known as the 'Land of Cakes'?",
  question_hi: "किस देश को 'केक की भूमि' कहा जाता है?",
  options_en: ["Scotland", "Switzerland", "Austria", "Denmark"],
  options_hi: ["स्कॉटलैंड", "स्विट्जरलैंड", "ऑस्ट्रिया", "डेनमार्क"],
  answer_en: "Scotland",
  answer_hi: "स्कॉटलैंड",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the capital of Spain?",
  question_hi: "स्पेन की राजधानी क्या है?",
  options_en: ["Barcelona", "Madrid", "Seville", "Valencia"],
  options_hi: ["बार्सिलोना", "मैड्रिड", "सेविल", "वैलेंसिया"],
  answer_en: "Madrid",
  answer_hi: "मैड्रिड",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which is the largest desert in Asia?",
  question_hi: "एशिया का सबसे बड़ा रेगिस्तान कौन सा है?",
  options_en: ["Thar Desert", "Gobi Desert", "Arabian Desert", "Karakum Desert"],
  options_hi: ["थार रेगिस्तान", "गोबी रेगिस्तान", "अरब रेगिस्तान", "कराकुम रेगिस्तान"],
  answer_en: "Gobi Desert",
  answer_hi: "गोबी रेगिस्तान",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which country is known as the 'Land of Thunder Dragon'?",
  question_hi: "किस देश को 'थंडर ड्रैगन की भूमि' कहा जाता है?",
  options_en: ["Bhutan", "Nepal", "Tibet", "Myanmar"],
  options_hi: ["भूटान", "नेपाल", "तिब्बत", "म्यांमार"],
  answer_en: "Bhutan",
  answer_hi: "भूटान",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "What is the capital of United Kingdom?",
  question_hi: "यूनाइटेड किंगडम की राजधानी क्या है?",
  options_en: ["London", "Manchester", "Edinburgh", "Birmingham"],
  options_hi: ["लंदन", "मैनचेस्टर", "एडिनबर्ग", "बर्मिंघम"],
  answer_en: "London",
  answer_hi: "लंदन",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Which is the highest waterfall in the world?",
  question_hi: "दुनिया का सबसे ऊंचा जलप्रपात कौन सा है?",
  options_en: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Iguazu Falls"],
  options_hi: ["नायाग्रा फॉल्स", "विक्टोरिया फॉल्स", "एंजल फॉल्स", "इग्वाज़ू फॉल्स"],
  answer_en: "Angel Falls",
  answer_hi: "एंजल फॉल्स",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which country is known as the 'Land of Maple Leaf'?",
  question_hi: "किस देश को 'मेपल लीफ की भूमि' कहा जाता है?",
  options_en: ["United States", "Canada", "Japan", "New Zealand"],
  options_hi: ["संयुक्त राज्य अमेरिका", "कनाडा", "जापान", "न्यूज़ीलैंड"],
  answer_en: "Canada",
  answer_hi: "कनाडा",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is the capital of United States of America?",
  question_hi: "संयुक्त राज्य अमेरिका की राजधानी क्या है?",
  options_en: ["New York", "Washington D.C.", "Los Angeles", "Chicago"],
  options_hi: ["न्यूयॉर्क", "वॉशिंगटन डी.सी.", "लॉस एंजिल्स", "शिकागो"],
  answer_en: "Washington D.C.",
  answer_hi: "वॉशिंगटन डी.सी.",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which is the largest country in the world by area?",
  question_hi: "क्षेत्रफल के हिसाब से दुनिया का सबसे बड़ा देश कौन सा है?",
  options_en: ["Canada", "China", "Russia", "United States"],
  options_hi: ["कनाडा", "चीन", "रूस", "संयुक्त राज्य अमेरिका"],
  answer_en: "Russia",
  answer_hi: "रूस",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Which country is known as the 'Land of the Long White Cloud'?",
  question_hi: "किस देश को 'लॉन्ग व्हाइट क्लाउड की भूमि' कहा जाता है?",
  options_en: ["Australia", "New Zealand", "Iceland", "Switzerland"],
  options_hi: ["ऑस्ट्रेलिया", "न्यूज़ीलैंड", "आइसलैंड", "स्विट्जरलैंड"],
  answer_en: "New Zealand",
  answer_hi: "न्यूज़ीलैंड",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the capital of China?",
  question_hi: "चीन की राजधानी क्या है?",
  options_en: ["Shanghai", "Beijing", "Guangzhou", "Shenzhen"],
  options_hi: ["शंघाई", "बीजिंग", "गुआंगज़ौ", "शेन्ज़ेन"],
  answer_en: "Beijing",
  answer_hi: "बीजिंग",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which is the largest coral reef system in the world?",
  question_hi: "दुनिया की सबसे बड़ी कोरल रीफ प्रणाली कौन सी है?",
  options_en: ["Great Barrier Reef", "Belize Barrier Reef", "New Caledonia Barrier Reef", "Andros Barrier Reef"],
  options_hi: ["ग्रेट बैरियर रीफ", "बेलीज बैरियर रीफ", "न्यू कैलेडोनिया बैरियर रीफ", "एंड्रोस बैरियर रीफ"],
  answer_en: "Great Barrier Reef",
  answer_hi: "ग्रेट बैरियर रीफ",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which country is known as the 'Land of the Midnight Sun'?",
  question_hi: "किस देश को 'मध्यरात्रि सूर्य की भूमि' कहा जाता है?",
  options_en: ["Sweden", "Finland", "Norway", "All of these"],
  options_hi: ["स्वीडन", "फिनलैंड", "नॉर्वे", "ये सभी"],
  answer_en: "All of these",
  answer_hi: "ये सभी",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the capital of India?",
  question_hi: "भारत की राजधानी क्या है?",
  options_en: ["Mumbai", "Delhi", "Kolkata", "Chennai"],
  options_hi: ["मुंबई", "दिल्ली", "कोलकाता", "चेन्नई"],
  answer_en: "Delhi",
  answer_hi: "दिल्ली",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which is the largest country in South America by area?",
  question_hi: "क्षेत्रफल के हिसाब से दक्षिण अमेरिका का सबसे बड़ा देश कौन सा है?",
  options_en: ["Argentina", "Brazil", "Peru", "Colombia"],
  options_hi: ["अर्जेंटीना", "ब्राजील", "पेरू", "कोलंबिया"],
  answer_en: "Brazil",
  answer_hi: "ब्राजील",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which country is known as the 'Land of Fire and Ice'?",
  question_hi: "किस देश को 'आग और बर्फ की भूमि' कहा जाता है?",
  options_en: ["Greenland", "Iceland", "Norway", "Sweden"],
  options_hi: ["ग्रीनलैंड", "आइसलैंड", "नॉर्वे", "स्वीडन"],
  answer_en: "Iceland",
  answer_hi: "आइसलैंड",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "What is the capital of Pakistan?",
  question_hi: "पाकिस्तान की राजधानी क्या है?",
  options_en: ["Karachi", "Lahore", "Islamabad", "Rawalpindi"],
  options_hi: ["कराची", "लाहौर", "इस्लामाबाद", "रावलपिंडी"],
  answer_en: "Islamabad",
  answer_hi: "इस्लामाबाद",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which is the largest gulf in the world?",
  question_hi: "दुनिया की सबसे बड़ी खाड़ी कौन सी है?",
  options_en: ["Gulf of Mexico", "Gulf of Guinea", "Persian Gulf", "Gulf of Alaska"],
  options_hi: ["मेक्सिको की खाड़ी", "गिनी की खाड़ी", "फारस की खाड़ी", "अलास्का की खाड़ी"],
  answer_en: "Gulf of Mexico",
  answer_hi: "मेक्सिको की खाड़ी",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which country is known as the 'Land of the Golden Pagoda'?",
  question_hi: "किस देश को 'गोल्डन पैगोडा की भूमि' कहा जाता है?",
  options_en: ["Thailand", "Myanmar", "Cambodia", "Laos"],
  options_hi: ["थाईलैंड", "म्यांमार", "कंबोडिया", "लाओस"],
  answer_en: "Myanmar",
  answer_hi: "म्यांमार",
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