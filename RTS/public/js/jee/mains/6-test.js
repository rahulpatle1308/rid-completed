const questions = [
    // Physics - Class 12 Level (1-20)
    {
        "num": 1,
        "question_en": "A particle of mass m is projected with velocity v at an angle θ with horizontal. What is the horizontal range?",
        "question_hi": "m द्रव्यमान का एक कण क्षैतिज से θ कोण पर v वेग से प्रक्षेपित किया जाता है। क्षैतिज परास क्या है?",
        "options_en": ["v²sin2θ/g", "v²sinθ/g", "2v²sinθ/g", "v²cos2θ/g"],
        "options_hi": ["v²sin2θ/g", "v²sinθ/g", "2v²sinθ/g", "v²cos2θ/g"],
        "answer_en": "v²sin2θ/g",
        "answer_hi": "v²sin2θ/g",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "The dimensional formula of Planck's constant is:",
        "question_hi": "प्लैंक नियतांक का विमीय सूत्र है:",
        "options_en": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "options_hi": ["ML²T⁻¹", "MLT⁻²", "ML²T⁻²", "MLT⁻¹"],
        "answer_en": "ML²T⁻¹",
        "answer_hi": "ML²T⁻¹",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "A body of mass 2kg is moving with velocity 10m/s. Its kinetic energy is:",
        "question_hi": "2kg द्रव्यमान का एक पिंड 10m/s वेग से गतिमान है। इसकी गतिज ऊर्जा है:",
        "options_en": ["50J", "100J", "150J", "200J"],
        "options_hi": ["50J", "100J", "150J", "200J"],
        "answer_en": "100J",
        "answer_hi": "100J",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "The unit of electric potential is:",
        "question_hi": "विद्युत विभव की इकाई है:",
        "options_en": ["Joule", "Volt", "Ohm", "Ampere"],
        "options_hi": ["जूल", "वोल्ट", "ओम", "एम्पियर"],
        "answer_en": "Volt",
        "answer_hi": "वोल्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "A convex lens has focal length 20cm. Its power is:",
        "question_hi": "एक उत्तल लेंस की फोकस दूरी 20cm है। इसकी क्षमता है:",
        "options_en": ["+5D", "-5D", "+0.2D", "-0.2D"],
        "options_hi": ["+5D", "-5D", "+0.2D", "-0.2D"],
        "answer_en": "+5D",
        "answer_hi": "+5D",
        "attempted": false,
        "selected": ""
    },

    // Chemistry - Class 12 Level (6-15)
    {
        "num": 6,
        "question_en": "Which of the following is an alkali metal?",
        "question_hi": "निम्नलिखित में से कौन एक क्षार धातु है?",
        "options_en": ["Sodium", "Calcium", "Aluminium", "Iron"],
        "options_hi": ["सोडियम", "कैल्शियम", "एल्युमीनियम", "आयरन"],
        "answer_en": "Sodium",
        "answer_hi": "सोडियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "The pH of pure water at 25°C is:",
        "question_hi": "25°C पर शुद्ध जल का pH है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "The molecular formula of benzene is:",
        "question_hi": "बेंजीन का आणविक सूत्र है:",
        "options_en": ["C6H6", "C6H12", "C6H10", "C6H14"],
        "options_hi": ["C6H6", "C6H12", "C6H10", "C6H14"],
        "answer_en": "C6H6",
        "answer_hi": "C6H6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which gas is used in balloons?",
        "question_hi": "गुब्बारों में कौन सी गैस प्रयोग की जाती है?",
        "options_en": ["Hydrogen", "Helium", "Oxygen", "Nitrogen"],
        "options_hi": ["हाइड्रोजन", "हीलियम", "ऑक्सीजन", "नाइट्रोजन"],
        "answer_en": "Helium",
        "answer_hi": "हीलियम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "The atomic number of carbon is:",
        "question_hi": "कार्बन की परमाणु संख्या है:",
        "options_en": ["4", "6", "8", "12"],
        "options_hi": ["4", "6", "8", "12"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },

    // Mathematics - Class 10 Level (11-20)
    {
        "num": 11,
        "question_en": "The value of sin²θ + cos²θ is:",
        "question_hi": "sin²θ + cos²θ का मान है:",
        "options_en": ["0", "1", "2", "sin2θ"],
        "options_hi": ["0", "1", "2", "sin2θ"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "The area of a circle with radius r is:",
        "question_hi": "त्रिज्या r वाले वृत्त का क्षेत्रफल है:",
        "options_en": ["πr", "2πr", "πr²", "2πr²"],
        "options_hi": ["πr", "2πr", "πr²", "2πr²"],
        "answer_en": "πr²",
        "answer_hi": "πr²",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "If 2x + 3 = 7, then x equals:",
        "question_hi": "यदि 2x + 3 = 7, तो x बराबर है:",
        "options_en": ["1", "2", "3", "4"],
        "options_hi": ["1", "2", "3", "4"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "The sum of angles in a triangle is:",
        "question_hi": "त्रिभुज में कोणों का योग है:",
        "options_en": ["90°", "180°", "270°", "360°"],
        "options_hi": ["90°", "180°", "270°", "360°"],
        "answer_en": "180°",
        "answer_hi": "180°",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "The value of √144 is:",
        "question_hi": "√144 का मान है:",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "12",
        "answer_hi": "12",
        "attempted": false,
        "selected": ""
    },

    // Biology - Class 12 Level (16-25)
    {
        "num": 16,
        "question_en": "The basic unit of life is:",
        "question_hi": "जीवन की मूल इकाई है:",
        "options_en": ["Cell", "Tissue", "Organ", "Organism"],
        "options_hi": ["कोशिका", "ऊतक", "अंग", "जीव"],
        "answer_en": "Cell",
        "answer_hi": "कोशिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Photosynthesis occurs in:",
        "question_hi": "प्रकाश संश्लेषण होता है:",
        "options_en": ["Mitochondria", "Chloroplast", "Nucleus", "Ribosome"],
        "options_hi": ["माइटोकॉन्ड्रिया", "क्लोरोप्लास्ट", "केंद्रक", "राइबोसोम"],
        "answer_en": "Chloroplast",
        "answer_hi": "क्लोरोप्लास्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "The human heart has how many chambers?",
        "question_hi": "मानव हृदय में कितने कक्ष होते हैं?",
        "options_en": ["2", "3", "4", "5"],
        "options_hi": ["2", "3", "4", "5"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "DNA is found in:",
        "question_hi": "DNA पाया जाता है:",
        "options_en": ["Nucleus", "Cytoplasm", "Cell membrane", "All of these"],
        "options_hi": ["केंद्रक", "कोशिका द्रव्य", "कोशिका झिल्ली", "उपरोक्त सभी"],
        "answer_en": "Nucleus",
        "answer_hi": "केंद्रक",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "The process of cell division is called:",
        "question_hi": "कोशिका विभाजन की प्रक्रिया कहलाती है:",
        "options_en": ["Mitosis", "Meiosis", "Both", "None"],
        "options_hi": ["माइटोसिस", "मियोसिस", "दोनों", "कोई नहीं"],
        "answer_en": "Both",
        "answer_hi": "दोनों",
        "attempted": false,
        "selected": ""
    },

    // English Grammar (21-30)
    {
        "num": 21,
        "question_en": "Choose the correct sentence:",
        "question_hi": "सही वाक्य चुनें:",
        "options_en": ["He go to school", "He goes to school", "He going to school", "He gone to school"],
        "options_hi": ["He go to school", "He goes to school", "He going to school", "He gone to school"],
        "answer_en": "He goes to school",
        "answer_hi": "He goes to school",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which is a noun?",
        "question_hi": "कौन सा संज्ञा है?",
        "options_en": ["Run", "Beautiful", "School", "Quickly"],
        "options_hi": ["Run", "Beautiful", "School", "Quickly"],
        "answer_en": "School",
        "answer_hi": "School",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "The past tense of 'go' is:",
        "question_hi": "'go' का भूतकाल है:",
        "options_en": ["Goed", "Went", "Gone", "Going"],
        "options_hi": ["Goed", "Went", "Gone", "Going"],
        "answer_en": "Went",
        "answer_hi": "Went",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "Choose the correct plural form:",
        "question_hi": "सही बहुवचन रूप चुनें:",
        "options_en": ["Childs", "Children", "Childes", "Childern"],
        "options_hi": ["Childs", "Children", "Childes", "Childern"],
        "answer_en": "Children",
        "answer_hi": "Children",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which word is an adjective?",
        "question_hi": "कौन सा शब्द विशेषण है?",
        "options_en": ["Happiness", "Happy", "Happily", "Happen"],
        "options_hi": ["Happiness", "Happy", "Happily", "Happen"],
        "answer_en": "Happy",
        "answer_hi": "Happy",
        "attempted": false,
        "selected": ""
    },

    // Hindi Grammar (26-35)
    {
        "num": 26,
        "question_en": "'विद्यालय' का पर्यायवाची शब्द है:",
        "question_hi": "'विद्यालय' का पर्यायवाची शब्द है:",
        "options_en": ["पाठशाला", "अस्पताल", "कार्यालय", "प्रयोगशाला"],
        "options_hi": ["पाठशाला", "अस्पताल", "कार्यालय", "प्रयोगशाला"],
        "answer_en": "पाठशाला",
        "answer_hi": "पाठशाला",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "'राम पुस्तक पढ़ता है' में क्रिया है:",
        "question_hi": "'राम पुस्तक पढ़ता है' में क्रिया है:",
        "options_en": ["राम", "पुस्तक", "पढ़ता", "है"],
        "options_hi": ["राम", "पुस्तक", "पढ़ता", "है"],
        "answer_en": "पढ़ता",
        "answer_hi": "पढ़ता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "हिंदी वर्णमाला में स्वरों की संख्या है:",
        "question_hi": "हिंदी वर्णमाला में स्वरों की संख्या है:",
        "options_en": ["10", "11", "12", "13"],
        "options_hi": ["10", "11", "12", "13"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "'सुन्दर' का विलोम शब्द है:",
        "question_hi": "'सुन्दर' का विलोम शब्द है:",
        "options_en": ["असुन्दर", "कुरूप", "बदसूरत", "अच्छा"],
        "options_hi": ["असुन्दर", "कुरूप", "बदसूरत", "अच्छा"],
        "answer_en": "कुरूप",
        "answer_hi": "कुरूप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "हिंदी में कारकों की संख्या है:",
        "question_hi": "हिंदी में कारकों की संख्या है:",
        "options_en": ["6", "7", "8", "9"],
        "options_hi": ["6", "7", "8", "9"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },

    // General Knowledge (31-40)
    {
        "num": 31,
        "question_en": "The capital of India is:",
        "question_hi": "भारत की राजधानी है:",
        "options_en": ["Mumbai", "Kolkata", "New Delhi", "Chennai"],
        "options_hi": ["मुंबई", "कोलकाता", "नई दिल्ली", "चेन्नई"],
        "answer_en": "New Delhi",
        "answer_hi": "नई दिल्ली",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "Who is known as the Father of the Nation in India?",
        "question_hi": "भारत में राष्ट्रपिता के रूप में किसे जाना जाता है?",
        "options_en": ["Jawaharlal Nehru", "Mahatma Gandhi", "Bhagat Singh", "Sardar Patel"],
        "options_hi": ["जवाहरलाल नेहरू", "महात्मा गांधी", "भगत सिंह", "सरदार पटेल"],
        "answer_en": "Mahatma Gandhi",
        "answer_hi": "महात्मा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "The largest planet in our solar system is:",
        "question_hi": "हमारे सौर मंडल का सबसे बड़ा ग्रह है:",
        "options_en": ["Earth", "Jupiter", "Saturn", "Mars"],
        "options_hi": ["पृथ्वी", "बृहस्पति", "शनि", "मंगल"],
        "answer_en": "Jupiter",
        "answer_hi": "बृहस्पति",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "The chemical symbol for gold is:",
        "question_hi": "सोने का रासायनिक प्रतीक है:",
        "options_en": ["Ag", "Au", "Fe", "Cu"],
        "options_hi": ["Ag", "Au", "Fe", "Cu"],
        "answer_en": "Au",
        "answer_hi": "Au",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "How many continents are there on Earth?",
        "question_hi": "पृथ्वी पर कितने महाद्वीप हैं?",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },

    // Computer Science (36-45)
    {
        "num": 36,
        "question_en": "What does CPU stand for?",
        "question_hi": "CPU का पूरा नाम क्या है?",
        "options_en": ["Computer Processing Unit", "Central Processing Unit", "Central Program Unit", "Computer Program Unit"],
        "options_hi": ["कंप्यूटर प्रोसेसिंग यूनिट", "सेंट्रल प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कंप्यूटर प्रोग्राम यूनिट"],
        "answer_en": "Central Processing Unit",
        "answer_hi": "सेंट्रल प्रोसेसिंग यूनिट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which of these is a programming language?",
        "question_hi": "इनमें से कौन एक प्रोग्रामिंग भाषा है?",
        "options_en": ["HTML", "CSS", "Python", "XML"],
        "options_hi": ["HTML", "CSS", "Python", "XML"],
        "answer_en": "Python",
        "answer_hi": "Python",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "1 byte equals how many bits?",
        "question_hi": "1 बाइट कितने बिट्स के बराबर होता है?",
        "options_en": ["4", "8", "16", "32"],
        "options_hi": ["4", "8", "16", "32"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is the full form of RAM?",
        "question_hi": "RAM का पूरा नाम क्या है?",
        "options_en": ["Random Access Memory", "Read Access Memory", "Random Available Memory", "Read Available Memory"],
        "options_hi": ["रैंडम एक्सेस मेमोरी", "रीड एक्सेस मेमोरी", "रैंडम अवेलेबल मेमोरी", "रीड अवेलेबल मेमोरी"],
        "answer_en": "Random Access Memory",
        "answer_hi": "रैंडम एक्सेस मेमोरी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "Which company developed Windows?",
        "question_hi": "विंडोज किस कंपनी ने विकसित किया?",
        "options_en": ["Apple", "Microsoft", "Google", "IBM"],
        "options_hi": ["एप्पल", "माइक्रोसॉफ्ट", "गूगल", "IBM"],
        "answer_en": "Microsoft",
        "answer_hi": "माइक्रोसॉफ्ट",
        "attempted": false,
        "selected": ""
    },

    // Geography (41-50)
    {
        "num": 41,
        "question_en": "The longest river in the world is:",
        "question_hi": "दुनिया की सबसे लंबी नदी है:",
        "options_en": ["Amazon", "Nile", "Ganga", "Yangtze"],
        "options_hi": ["अमेज़न", "नील", "गंगा", "यांग्त्ज़ी"],
        "answer_en": "Nile",
        "answer_hi": "नील",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "Mount Everest is located in:",
        "question_hi": "माउंट एवरेस्ट स्थित है:",
        "options_en": ["India", "China", "Nepal", "Bhutan"],
        "options_hi": ["भारत", "चीन", "नेपाल", "भूटान"],
        "answer_en": "Nepal",
        "answer_hi": "नेपाल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "The largest ocean in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा महासागर है:",
        "options_en": ["Atlantic", "Indian", "Pacific", "Arctic"],
        "options_hi": ["अटलांटिक", "हिंद", "प्रशांत", "आर्कटिक"],
        "answer_en": "Pacific",
        "answer_hi": "प्रशांत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "The Tropic of Cancer passes through which country?",
        "question_hi": "कर्क रेखा किस देश से गुजरती है?",
        "options_en": ["USA", "India", "Australia", "Brazil"],
        "options_hi": ["USA", "भारत", "ऑस्ट्रेलिया", "ब्राज़ील"],
        "answer_en": "India",
        "answer_hi": "भारत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which is the largest desert in the world?",
        "question_hi": "दुनिया का सबसे बड़ा रेगिस्तान कौन सा है?",
        "options_en": ["Sahara", "Gobi", "Thar", "Kalahari"],
        "options_hi": ["सहारा", "गोबी", "थार", "कालाहारी"],
        "answer_en": "Sahara",
        "answer_hi": "सहारा",
        "attempted": false,
        "selected": ""
    },

    // History (46-55)
    {
        "num": 46,
        "question_en": "When did India get independence?",
        "question_hi": "भारत को कब आजादी मिली?",
        "options_en": ["1945", "1947", "1950", "1952"],
        "options_hi": ["1945", "1947", "1950", "1952"],
        "answer_en": "1947",
        "answer_hi": "1947",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "The first President of India was:",
        "question_hi": "भारत के प्रथम राष्ट्रपति थे:",
        "options_en": ["Jawaharlal Nehru", "Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain"],
        "options_hi": ["जवाहरलाल नेहरू", "राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन"],
        "answer_en": "Rajendra Prasad",
        "answer_hi": "राजेंद्र प्रसाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "The Mughal Empire was founded by:",
        "question_hi": "मुगल साम्राज्य की स्थापना किसने की?",
        "options_en": ["Akbar", "Babur", "Humayun", "Aurangzeb"],
        "options_hi": ["अकबर", "बाबर", "हुमायूँ", "औरंगजेब"],
        "answer_en": "Babur",
        "answer_hi": "बाबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "The first battle of Panipat was fought in:",
        "question_hi": "पानीपत की पहली लड़ाई कब लड़ी गई?",
        "options_en": ["1526", "1556", "1761", "1857"],
        "options_hi": ["1526", "1556", "1761", "1857"],
        "answer_en": "1526",
        "answer_hi": "1526",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Who built the Taj Mahal?",
        "question_hi": "ताजमहल किसने बनवाया?",
        "options_en": ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
        "options_hi": ["अकबर", "शाहजहाँ", "जहाँगीर", "औरंगजेब"],
        "answer_en": "Shah Jahan",
        "answer_hi": "शाहजहाँ",
        "attempted": false,
        "selected": ""
    },

    // Economics (51-60)
    {
        "num": 51,
        "question_en": "What is the currency of Japan?",
        "question_hi": "जापान की मुद्रा क्या है?",
        "options_en": ["Yuan", "Yen", "Won", "Dollar"],
        "options_hi": ["युआन", "येन", "वॉन", "डॉलर"],
        "answer_en": "Yen",
        "answer_hi": "येन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "The Reserve Bank of India was established in:",
        "question_hi": "भारतीय रिजर्व बैंक की स्थापना हुई:",
        "options_en": ["1930", "1935", "1947", "1950"],
        "options_hi": ["1930", "1935", "1947", "1950"],
        "answer_en": "1935",
        "answer_hi": "1935",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "GDP stands for:",
        "question_hi": "GDP का पूरा नाम है:",
        "options_en": ["Gross Domestic Product", "Gross Development Product", "General Domestic Product", "General Development Product"],
        "options_hi": ["सकल घरेलू उत्पाद", "सकल विकास उत्पाद", "सामान्य घरेलू उत्पाद", "सामान्य विकास उत्पाद"],
        "answer_en": "Gross Domestic Product",
        "answer_hi": "सकल घरेलू उत्पाद",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "Which is not a direct tax?",
        "question_hi": "कौन सा प्रत्यक्ष कर नहीं है?",
        "options_en": ["Income Tax", "Wealth Tax", "GST", "Corporate Tax"],
        "options_hi": ["आयकर", "संपत्ति कर", "जीएसटी", "कॉर्पोरेट टैक्स"],
        "answer_en": "GST",
        "answer_hi": "जीएसटी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "The first Indian bank was:",
        "question_hi": "पहला भारतीय बैंक था:",
        "options_en": ["SBI", "PNB", "Bank of Hindustan", "Allahabad Bank"],
        "options_hi": ["SBI", "PNB", "बैंक ऑफ हिंदुस्तान", "अलाहाबाद बैंक"],
        "answer_en": "Bank of Hindustan",
        "answer_hi": "बैंक ऑफ हिंदुस्तान",
        "attempted": false,
        "selected": ""
    },

    // Political Science (56-65)
    {
        "num": 56,
        "question_en": "The Indian Constitution was adopted on:",
        "question_hi": "भारतीय संविधान अपनाया गया:",
        "options_en": ["26 January 1950", "26 November 1949", "15 August 1947", "26 January 1949"],
        "options_hi": ["26 जनवरी 1950", "26 नवंबर 1949", "15 अगस्त 1947", "26 जनवरी 1949"],
        "answer_en": "26 November 1949",
        "answer_hi": "26 नवंबर 1949",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "How many members are in Lok Sabha?",
        "question_hi": "लोकसभा में कितने सदस्य होते हैं?",
        "options_en": ["543", "545", "550", "552"],
        "options_hi": ["543", "545", "550", "552"],
        "answer_en": "543",
        "answer_hi": "543",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "The President of India is elected by:",
        "question_hi": "भारत के राष्ट्रपति का चुनाव किया जाता है:",
        "options_en": ["Direct election", "Parliament", "Electoral College", "State Assemblies"],
        "options_hi": ["प्रत्यक्ष चुनाव", "संसद", "निर्वाचक मंडल", "राज्य विधानसभाएं"],
        "answer_en": "Electoral College",
        "answer_hi": "निर्वाचक मंडल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "The fundamental rights are contained in:",
        "question_hi": "मौलिक अधिकार निहित हैं:",
        "options_en": ["Part I", "Part II", "Part III", "Part IV"],
        "options_hi": ["भाग I", "भाग II", "भाग III", "भाग IV"],
        "answer_en": "Part III",
        "answer_hi": "भाग III",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "Who is the head of the Union Government?",
        "question_hi": "केंद्र सरकार का प्रमुख कौन है?",
        "options_en": ["President", "Prime Minister", "Vice President", "Speaker"],
        "options_hi": ["राष्ट्रपति", "प्रधानमंत्री", "उपराष्ट्रपति", "अध्यक्ष"],
        "answer_en": "Prime Minister",
        "answer_hi": "प्रधानमंत्री",
        "attempted": false,
        "selected": ""
    },

    // Environmental Science (61-70)
    {
        "num": 61,
        "question_en": "Which gas is responsible for global warming?",
        "question_hi": "कौन सी गैस ग्लोबल वार्मिंग के लिए जिम्मेदार है?",
        "options_en": ["Oxygen", "Nitrogen", "Carbon dioxide", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
        "answer_en": "Carbon dioxide",
        "answer_hi": "कार्बन डाइऑक्साइड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "The World Environment Day is celebrated on:",
        "question_hi": "विश्व पर्यावरण दिवस मनाया जाता है:",
        "options_en": ["5 June", "5 July", "22 April", "22 March"],
        "options_hi": ["5 जून", "5 जुलाई", "22 अप्रैल", "22 मार्च"],
        "answer_en": "5 June",
        "answer_hi": "5 जून",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "Which of these is a renewable resource?",
        "question_hi": "इनमें से कौन एक नवीकरणीय संसाधन है?",
        "options_en": ["Coal", "Petroleum", "Solar energy", "Natural gas"],
        "options_hi": ["कोयला", "पेट्रोलियम", "सौर ऊर्जा", "प्राकृतिक गैस"],
        "answer_en": "Solar energy",
        "answer_hi": "सौर ऊर्जा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "Chipko movement was related to:",
        "question_hi": "चिपको आंदोलन संबंधित था:",
        "options_en": ["Water conservation", "Forest conservation", "Wildlife protection", "Air pollution"],
        "options_hi": ["जल संरक्षण", "वन संरक्षण", "वन्यजीव संरक्षण", "वायु प्रदूषण"],
        "answer_en": "Forest conservation",
        "answer_hi": "वन संरक्षण",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "Ozone layer protects us from:",
        "question_hi": "ओजोन परत हमें बचाती है:",
        "options_en": ["UV rays", "Infrared rays", "Visible light", "X-rays"],
        "options_hi": ["यूवी किरणों", "अवरक्त किरणों", "दृश्य प्रकाश", "एक्स-किरणों"],
        "answer_en": "UV rays",
        "answer_hi": "यूवी किरणों",
        "attempted": false,
        "selected": ""
    },

    // Mixed Advanced Questions (66-100)
    {
        "num": 66,
        "question_en": "The chemical formula of water is:",
        "question_hi": "पानी का रासायनिक सूत्र है:",
        "options_en": ["H2O", "HO2", "H2O2", "H3O"],
        "options_hi": ["H2O", "HO2", "H2O2", "H3O"],
        "answer_en": "H2O",
        "answer_hi": "H2O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "Which planet is known as the Red Planet?",
        "question_hi": "कौन सा ग्रह लाल ग्रह के नाम से जाना जाता है?",
        "options_en": ["Venus", "Mars", "Jupiter", "Saturn"],
        "options_hi": ["शुक्र", "मंगल", "बृहस्पति", "शनि"],
        "answer_en": "Mars",
        "answer_hi": "मंगल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "The speed of light is approximately:",
        "question_hi": "प्रकाश की गति लगभग है:",
        "options_en": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10¹⁰ m/s"],
        "options_hi": ["3×10⁸ m/s", "3×10⁶ m/s", "3×10⁵ m/s", "3×10¹⁰ m/s"],
        "answer_en": "3×10⁸ m/s",
        "answer_hi": "3×10⁸ m/s",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "Who wrote the Indian National Anthem?",
        "question_hi": "भारत के राष्ट्रगान के रचयिता कौन हैं?",
        "options_en": ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Sarojini Naidu", "Mahatma Gandhi"],
        "options_hi": ["रबींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "सरोजिनी नायडू", "महात्मा गांधी"],
        "answer_en": "Rabindranath Tagore",
        "answer_hi": "रबींद्रनाथ टैगोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "The largest state in India by area is:",
        "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे बड़ा राज्य है:",
        "options_en": ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
        "options_hi": ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
        "answer_en": "Rajasthan",
        "answer_hi": "राजस्थान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "Which is the smallest prime number?",
        "question_hi": "सबसे छोटी अभाज्य संख्या कौन सी है?",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "The human body has how many bones?",
        "question_hi": "मानव शरीर में कितनी हड्डियाँ होती हैं?",
        "options_en": ["206", "300", "150", "250"],
        "options_hi": ["206", "300", "150", "250"],
        "answer_en": "206",
        "answer_hi": "206",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "Which is the national animal of India?",
        "question_hi": "भारत का राष्ट्रीय पशु कौन सा है?",
        "options_en": ["Lion", "Elephant", "Tiger", "Peacock"],
        "options_hi": ["शेर", "हाथी", "बाघ", "मोर"],
        "answer_en": "Tiger",
        "answer_hi": "बाघ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "The value of π is approximately:",
        "question_hi": "π का मान लगभग है:",
        "options_en": ["3.14", "3.41", "22/7", "Both A and C"],
        "options_hi": ["3.14", "3.41", "22/7", "A और C दोनों"],
        "answer_en": "Both A and C",
        "answer_hi": "A और C दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "Which organ pumps blood in human body?",
        "question_hi": "मानव शरीर में कौन सा अंग रक्त पंप करता है?",
        "options_en": ["Lungs", "Heart", "Liver", "Kidney"],
        "options_hi": ["फेफड़े", "हृदय", "यकृत", "गुर्दा"],
        "answer_en": "Heart",
        "answer_hi": "हृदय",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "The largest mammal in the world is:",
        "question_hi": "दुनिया का सबसे बड़ा स्तनपायी है:",
        "options_en": ["Elephant", "Giraffe", "Blue Whale", "Polar Bear"],
        "options_hi": ["हाथी", "जिराफ", "ब्लू व्हेल", "ध्रुवीय भालू"],
        "answer_en": "Blue Whale",
        "answer_hi": "ब्लू व्हेल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "Which metal is liquid at room temperature?",
        "question_hi": "कौन सी धातु कमरे के तापमान पर तरल होती है?",
        "options_en": ["Iron", "Mercury", "Gold", "Silver"],
        "options_hi": ["लोहा", "पारा", "सोना", "चांदी"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "The study of plants is called:",
        "question_hi": "पौधों के अध्ययन को कहा जाता है:",
        "options_en": ["Zoology", "Botany", "Biology", "Ecology"],
        "options_hi": ["जूलॉजी", "बॉटनी", "बायोलॉजी", "इकोलॉजी"],
        "answer_en": "Botany",
        "answer_hi": "बॉटनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which is the hardest substance in human body?",
        "question_hi": "मानव शरीर में सबसे कठोर पदार्थ कौन सा है?",
        "options_en": ["Bone", "Tooth enamel", "Nail", "Hair"],
        "options_hi": ["हड्डी", "दंत तामचीनी", "नाखून", "बाल"],
        "answer_en": "Tooth enamel",
        "answer_hi": "दंत तामचीनी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "The number of players in a cricket team is:",
        "question_hi": "क्रिकेट टीम में खिलाड़ियों की संख्या होती है:",
        "options_en": ["9", "10", "11", "12"],
        "options_hi": ["9", "10", "11", "12"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "Which gas is most abundant in Earth's atmosphere?",
        "question_hi": "पृथ्वी के वायुमंडल में कौन सी गैस सबसे अधिक मात्रा में है?",
        "options_en": ["Oxygen", "Carbon dioxide", "Nitrogen", "Hydrogen"],
        "options_hi": ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
        "answer_en": "Nitrogen",
        "answer_hi": "नाइट्रोजन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "The SI unit of temperature is:",
        "question_hi": "तापमान की SI इकाई है:",
        "options_en": ["Celsius", "Fahrenheit", "Kelvin", "Rankine"],
        "options_hi": ["सेल्सियस", "फारेनहाइट", "केल्विन", "रैंकिन"],
        "answer_en": "Kelvin",
        "answer_hi": "केल्विन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "Which is the largest internal organ in human body?",
        "question_hi": "मानव शरीर का सबसे बड़ा आंतरिक अंग कौन सा है?",
        "options_en": ["Heart", "Liver", "Lungs", "Brain"],
        "options_hi": ["हृदय", "यकृत", "फेफड़े", "मस्तिष्क"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "The first woman Prime Minister of India was:",
        "question_hi": "भारत की पहली महिला प्रधानमंत्री थीं:",
        "options_en": ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
        "options_hi": ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी"],
        "answer_en": "Indira Gandhi",
        "answer_hi": "इंदिरा गांधी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "Which vitamin is produced in human body by sunlight?",
        "question_hi": "सूर्य के प्रकाश से मानव शरीर में कौन सा विटामिन उत्पन्न होता है?",
        "options_en": ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
        "options_hi": ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
        "answer_en": "Vitamin D",
        "answer_hi": "विटामिन D",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "The number of sides in a hexagon is:",
        "question_hi": "षट्भुज में भुजाओं की संख्या होती है:",
        "options_en": ["5", "6", "7", "8"],
        "options_hi": ["5", "6", "7", "8"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "Which is the national flower of India?",
        "question_hi": "भारत का राष्ट्रीय फूल कौन सा है?",
        "options_en": ["Rose", "Lotus", "Sunflower", "Marigold"],
        "options_hi": ["गुलाब", "कमल", "सूरजमुखी", "गेंदा"],
        "answer_en": "Lotus",
        "answer_hi": "कमल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "The chemical symbol for iron is:",
        "question_hi": "लोहे का रासायनिक प्रतीक है:",
        "options_en": ["Ir", "Fe", "In", "Au"],
        "options_hi": ["Ir", "Fe", "In", "Au"],
        "answer_en": "Fe",
        "answer_hi": "Fe",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "Which planet has the most moons?",
        "question_hi": "किस ग्रह के सबसे अधिक चंद्रमा हैं?",
        "options_en": ["Jupiter", "Saturn", "Uranus", "Neptune"],
        "options_hi": ["बृहस्पति", "शनि", "अरुण", "वरुण"],
        "answer_en": "Saturn",
        "answer_hi": "शनि",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "The largest cell in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी कोशिका है:",
        "options_en": ["Nerve cell", "Egg cell", "Muscle cell", "Bone cell"],
        "options_hi": ["तंत्रिका कोशिका", "अंड कोशिका", "मांसपेशी कोशिका", "हड्डी कोशिका"],
        "answer_en": "Egg cell",
        "answer_hi": "अंड कोशिका",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "Which is the smallest continent?",
        "question_hi": "सबसे छोटा महाद्वीप कौन सा है?",
        "options_en": ["Australia", "Europe", "Antarctica", "South America"],
        "options_hi": ["ऑस्ट्रेलिया", "यूरोप", "अंटार्कटिका", "दक्षिण अमेरिका"],
        "answer_en": "Australia",
        "answer_hi": "ऑस्ट्रेलिया",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "The study of earthquakes is called:",
        "question_hi": "भूकंपों के अध्ययन को कहा जाता है:",
        "options_en": ["Seismology", "Volcanology", "Meteorology", "Geology"],
        "options_hi": ["सिस्मोलॉजी", "ज्वालामुखी विज्ञान", "मौसम विज्ञान", "भूविज्ञान"],
        "answer_en": "Seismology",
        "answer_hi": "सिस्मोलॉजी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "Which blood group is universal donor?",
        "question_hi": "कौन सा रक्त समूह सार्वभौमिक दाता है?",
        "options_en": ["A", "B", "AB", "O"],
        "options_hi": ["A", "B", "AB", "O"],
        "answer_en": "O",
        "answer_hi": "O",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "The largest gland in human body is:",
        "question_hi": "मानव शरीर की सबसे बड़ी ग्रंथि है:",
        "options_en": ["Pancreas", "Liver", "Thyroid", "Pituitary"],
        "options_hi": ["अग्न्याशय", "यकृत", "थायराइड", "पिट्यूटरी"],
        "answer_en": "Liver",
        "answer_hi": "यकृत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "Which is the longest bone in human body?",
        "question_hi": "मानव शरीर की सबसे लंबी हड्डी कौन सी है?",
        "options_en": ["Femur", "Tibia", "Fibula", "Humerus"],
        "options_hi": ["फीमर", "टिबिया", "फिबुला", "ह्यूमरस"],
        "answer_en": "Femur",
        "answer_hi": "फीमर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "The number of chromosomes in human cell is:",
        "question_hi": "मानव कोशिका में गुणसूत्रों की संख्या है:",
        "options_en": ["23", "46", "48", "50"],
        "options_hi": ["23", "46", "48", "50"],
        "answer_en": "46",
        "answer_hi": "46",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "Which metal is used in thermometers?",
        "question_hi": "थर्मामीटर में कौन सी धातु प्रयोग की जाती है?",
        "options_en": ["Iron", "Copper", "Mercury", "Silver"],
        "options_hi": ["लोहा", "तांबा", "पारा", "चांदी"],
        "answer_en": "Mercury",
        "answer_hi": "पारा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "The fastest land animal is:",
        "question_hi": "सबसे तेज भूमि जानवर है:",
        "options_en": ["Lion", "Cheetah", "Tiger", "Horse"],
        "options_hi": ["शेर", "चीता", "बाघ", "घोड़ा"],
        "answer_en": "Cheetah",
        "answer_hi": "चीता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "Which is the largest moon in solar system?",
        "question_hi": "सौर मंडल का सबसे बड़ा चंद्रमा कौन सा है?",
        "options_en": ["Moon", "Ganymede", "Titan", "Europa"],
        "options_hi": ["चंद्रमा", "गेनीमेड", "टाइटन", "यूरोपा"],
        "answer_en": "Ganymede",
        "answer_hi": "गेनीमेड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "The study of coins is called:",
        "question_hi": "सिक्कों के अध्ययन को कहा जाता है:",
        "options_en": ["Archaeology", "Numismatics", "Epigraphy", "Paleontology"],
        "options_hi": ["पुरातत्व", "मुद्राशास्त्र", "शिलालेख विज्ञान", "जीवाश्म विज्ञान"],
        "answer_en": "Numismatics",
        "answer_hi": "मुद्राशास्त्र",
        "attempted": false,
        "selected": ""
    }
];
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