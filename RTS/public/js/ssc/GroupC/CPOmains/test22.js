const questions = [
  {
    "num":1,
    "question_en": "Which of the following is a 'Varn' in Hindi grammar?",
    "question_hi": "निम्नलिखित में से कौन सा हिंदी व्याकरण में 'वर्ण' है?",
    "options_en": ["Word", "Letter", "Sentence", "Paragraph"],
    "options_hi": ["शब्द", "अक्षर", "वाक्य", "अनुच्छेद"],
    "answer_en": "Letter",
    "answer_hi": "अक्षर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "What is the total number of 'Swara' (vowels) in Hindi?",
    "question_hi": "हिंदी में 'स्वर' की कुल संख्या कितनी है?",
    "options_en": ["11", "13", "15", "17"],
    "options_hi": ["11", "13", "15", "17"],
    "answer_en": "11",
    "answer_hi": "11",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "Which of the following is a 'Sanyukt Vyanjan' (compound consonant)?",
    "question_hi": "निम्नलिखित में से कौन सा 'संयुक्त व्यंजन' है?",
    "options_en": ["क", "क्ष", "म", "य"],
    "options_hi": ["क", "क्ष", "म", "य"],
    "answer_en": "क्ष",
    "answer_hi": "क्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "What is the term for words that sound similar but have different meanings?",
    "question_hi": "समान ध्वनि वाले लेकिन अलग-अलग अर्थ वाले शब्दों के लिए क्या शब्द है?",
    "options_en": ["Paryayvachi", "Vilom", "Shabd yugm", "Anukaran shabd"],
    "options_hi": ["पर्यायवाची", "विलोम", "शब्द युग्म", "अनुकरण शब्द"],
    "answer_en": "Shabd yugm",
    "answer_hi": "शब्द युग्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "Which of the following is a 'Kriya Visheshan' (adverb)?",
    "question_hi": "निम्नलिखित में से कौन सा 'क्रिया विशेषण' है?",
    "options_en": ["जल्दी", "सुन्दर", "बुद्धिमान", "ऊँचा"],
    "options_hi": ["जल्दी", "सुन्दर", "बुद्धिमान", "ऊँचा"],
    "answer_en": "जल्दी",
    "answer_hi": "जल्दी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "What is the term for words that have opposite meanings?",
    "question_hi": "विपरीत अर्थ वाले शब्दों के लिए क्या शब्द है?",
    "options_en": ["Paryayvachi", "Vilom", "Samarthak", "Tatsam"],
    "options_hi": ["पर्यायवाची", "विलोम", "समर्थक", "तत्सम"],
    "answer_en": "Vilom",
    "answer_hi": "विलोम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "Which of the following is an example of 'Rudhi Shabd' (idiom)?",
    "question_hi": "निम्नलिखित में से कौन सा 'रूढ़ शब्द' का उदाहरण है?",
    "options_en": ["पानी पीना", "आगे बढ़ना", "अपना हाथ जगन्नाथ", "किताब पढ़ना"],
    "options_hi": ["पानी पीना", "आगे बढ़ना", "अपना हाथ जगन्नाथ", "किताब पढ़ना"],
    "answer_en": "अपना हाथ जगन्नाथ",
    "answer_hi": "अपना हाथ जगन्नाथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "What is the term for words borrowed from Sanskrit?",
    "question_hi": "संस्कृत से उधार लिए गए शब्दों के लिए क्या शब्द है?",
    "options_en": ["Tatsam", "Tadbhav", "Deshaj", "Videshi"],
    "options_hi": ["तत्सम", "तद्भव", "देशज", "विदेशी"],
    "answer_en": "Tatsam",
    "answer_hi": "तत्सम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Which of the following is a 'Sarvanam' (pronoun)?",
    "question_hi": "निम्नलिखित में से कौन सा 'सर्वनाम' है?",
    "options_en": ["वह", "खुश", "तेज", "नीला"],
    "options_hi": ["वह", "खुश", "तेज", "नीला"],
    "answer_en": "वह",
    "answer_hi": "वह",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "What is the term for the study of sentence structure?",
    "question_hi": "वाक्य संरचना के अध्ययन के लिए क्या शब्द है?",
    "options_en": ["Varn viched", "Shabd rachna", "Vakya rachna", "Alankar"],
    "options_hi": ["वर्ण विच्छेद", "शब्द रचना", "वाक्य रचना", "अलंकार"],
    "answer_en": "Vakya rachna",
    "answer_hi": "वाक्य रचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "Which of the following is an example of 'Upasarg' (prefix)?",
    "question_hi": "निम्नलिखित में से कौन सा 'उपसर्ग' का उदाहरण है?",
    "options_en": ["प्रति", "करना", "सुन्दर", "जल्दी"],
    "options_hi": ["प्रति", "करना", "सुन्दर", "जल्दी"],
    "answer_en": "प्रति",
    "answer_hi": "प्रति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "What is the term for the smallest meaningful unit of language?",
    "question_hi": "भाषा की सबसे छोटी सार्थक इकाई के लिए क्या शब्द है?",
    "options_en": ["Varn", "Shabd", "Vakya", "Morpheme"],
    "options_hi": ["वर्ण", "शब्द", "वाक्य", "रूपिम"],
    "answer_en": "Morpheme",
    "answer_hi": "रूपिम",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "Which of the following is a 'Samas' (compound word)?",
    "question_hi": "निम्नलिखित में से कौन सा 'समास' है?",
    "options_en": ["राजपुत्र", "सुन्दर लड़की", "तेज दौड़ना", "मीठा पानी"],
    "options_hi": ["राजपुत्र", "सुन्दर लड़की", "तेज दौड़ना", "मीठा पानी"],
    "answer_en": "राजपुत्र",
    "answer_hi": "राजपुत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "What is the term for words that imitate sounds?",
    "question_hi": "ध्वनि की नकल करने वाले शब्दों के लिए क्या शब्द है?",
    "options_en": ["Anukaran shabd", "Tatsam shabd", "Tadbhav shabd", "Rudhi shabd"],
    "options_hi": ["अनुकरण शब्द", "तत्सम शब्द", "तद्भव शब्द", "रूढ़ शब्द"],
    "answer_en": "Anukaran shabd",
    "answer_hi": "अनुकरण शब्द",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "Which of the following is an example of 'Visheshan' (adjective)?",
    "question_hi": "निम्नलिखित में से कौन सा 'विशेषण' का उदाहरण है?",
    "options_en": ["लम्बा", "चलना", "वह", "और"],
    "options_hi": ["लम्बा", "चलना", "वह", "और"],
    "answer_en": "लम्बा",
    "answer_hi": "लम्बा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "What is the term for the joining of two or more words to form a new word?",
    "question_hi": "दो या दो से अधिक शब्दों को जोड़कर नया शब्द बनाने के लिए क्या शब्द है?",
    "options_en": ["Samas", "Sandhi", "Upsarg", "Pratyay"],
    "options_hi": ["समास", "सन्धि", "उपसर्ग", "प्रत्यय"],
    "answer_en": "Samas",
    "answer_hi": "समास",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "Which of the following is a 'Karak' (case) in Hindi grammar?",
    "question_hi": "निम्नलिखित में से कौन सा हिंदी व्याकरण में 'कारक' है?",
    "options_en": ["कर्ता", "क्रिया", "विशेषण", "क्रिया विशेषण"],
    "options_hi": ["कर्ता", "क्रिया", "विशेषण", "क्रिया विशेषण"],
    "answer_en": "कर्ता",
    "answer_hi": "कर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "What is the term for the change in the form of a word to express grammatical categories?",
    "question_hi": "व्याकरणिक श्रेणियों को व्यक्त करने के लिए शब्द के रूप में परिवर्तन के लिए क्या शब्द है?",
    "options_en": ["Roopantar", "Sandhi", "Samas", "Vichar"],
    "options_hi": ["रूपांतर", "सन्धि", "समास", "विचार"],
    "answer_en": "Roopantar",
    "answer_hi": "रूपांतर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "Which of the following is an example of 'Pratyay' (suffix)?",
    "question_hi": "निम्नलिखित में से कौन सा 'प्रत्यय' का उदाहरण है?",
    "options_en": ["ता", "प्र", "सु", "अति"],
    "options_hi": ["ता", "प्र", "सु", "अति"],
    "answer_en": "ता",
    "answer_hi": "ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "What is the term for words that have similar meanings?",
    "question_hi": "समान अर्थ वाले शब्दों के लिए क्या शब्द है?",
    "options_en": ["Paryayvachi", "Vilom", "Shabd yugm", "Anukaran"],
    "options_hi": ["पर्यायवाची", "विलोम", "शब्द युग्म", "अनुकरण"],
    "answer_en": "Paryayvachi",
    "answer_hi": "पर्यायवाची",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "Which of the following is a 'Ling' (gender) in Hindi grammar?",
    "question_hi": "निम्नलिखित में से कौन सा हिंदी व्याकरण में 'लिंग' है?",
    "options_en": ["पुल्लिंग", "वचन", "कारक", "काल"],
    "options_hi": ["पुल्लिंग", "वचन", "कारक", "काल"],
    "answer_en": "पुल्लिंग",
    "answer_hi": "पुल्लिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "What is the term for the number of a noun or pronoun?",
    "question_hi": "संज्ञा या सर्वनाम की संख्या के लिए क्या शब्द है?",
    "options_en": ["Ling", "Vachan", "Karak", "Kriya"],
    "options_hi": ["लिंग", "वचन", "कारक", "क्रिया"],
    "answer_en": "Vachan",
    "answer_hi": "वचन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "Which of the following is an example of 'Sandhi' (junction)?",
    "question_hi": "निम्नलिखित में से कौन सा 'सन्धि' का उदाहरण है?",
    "options_en": ["देवालय", "सु + उक्ति = सूक्ति", "राजपुत्र", "पाठशाला"],
    "options_hi": ["देवालय", "सु + उक्ति = सूक्ति", "राजपुत्र", "पाठशाला"],
    "answer_en": "सु + उक्ति = सूक्ति",
    "answer_hi": "सु + उक्ति = सूक्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "What is the term for the time of action expressed by a verb?",
    "question_hi": "क्रिया द्वारा व्यक्त की गई क्रिया के समय के लिए क्या शब्द है?",
    "options_en": ["Karak", "Kriya", "Kaal", "Vachan"],
    "options_hi": ["कारक", "क्रिया", "काल", "वचन"],
    "answer_en": "Kaal",
    "answer_hi": "काल",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "Which of the following is a 'Vachya' (voice) in Hindi grammar?",
    "question_hi": "निम्नलिखित में से कौन सा हिंदी व्याकरण में 'वाच्य' है?",
    "options_en": ["कर्तृवाच्य", "भूतकाल", "एकवचन", "स्त्रीलिंग"],
    "options_hi": ["कर्तृवाच्य", "भूतकाल", "एकवचन", "स्त्रीलिंग"],
    "answer_en": "कर्तृवाच्य",
    "answer_hi": "कर्तृवाच्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "What is the term for the process of word formation?",
    "question_hi": "शब्द निर्माण की प्रक्रिया के लिए क्या शब्द है?",
    "options_en": ["Shabd nirman", "Varn viched", "Vakya rachna", "Shabd rachna"],
    "options_hi": ["शब्द निर्माण", "वर्ण विच्छेद", "वाक्य रचना", "शब्द रचना"],
    "answer_en": "Shabd rachna",
    "answer_hi": "शब्द रचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "Which of the following is an example of 'Alankar' (figure of speech)?",
    "question_hi": "निम्नलिखित में से कौन सा 'अलंकार' का उदाहरण है?",
    "options_en": ["उपमा", "क्रिया", "संज्ञा", "सर्वनाम"],
    "options_hi": ["उपमा", "क्रिया", "संज्ञा", "सर्वनाम"],
    "answer_en": "उपमा",
    "answer_hi": "उपमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "What is the term for the base form of a verb?",
    "question_hi": "क्रिया के मूल रूप के लिए क्या शब्द है?",
    "options_en": ["Dhatu", "Pratyay", "Upsarg", "Vibhakti"],
    "options_hi": ["धातु", "प्रत्यय", "उपसर्ग", "विभक्ति"],
    "answer_en": "Dhatu",
    "answer_hi": "धातु",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "Which of the following is a 'Vibhakti' (case ending)?",
    "question_hi": "निम्नलिखित में से कौन सा 'विभक्ति' है?",
    "options_en": ["ने", "और", "पर", "भी"],
    "options_hi": ["ने", "और", "पर", "भी"],
    "answer_en": "ने",
    "answer_hi": "ने",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "What is the term for the study of word meanings?",
    "question_hi": "शब्दार्थों के अध्ययन के लिए क्या शब्द है?",
    "options_en": ["Shabdarth vigyan", "Vyakaran", "Alankar shastra", "Chhand shastra"],
    "options_hi": ["शब्दार्थ विज्ञान", "व्याकरण", "अलंकार शास्त्र", "छन्द शास्त्र"],
    "answer_en": "Shabdarth vigyan",
    "answer_hi": "शब्दार्थ विज्ञान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "Which of the following is an example of 'Ras' (aesthetic sentiment) in Hindi literature?",
    "question_hi": "निम्नलिखित में से कौन सा हिंदी साहित्य में 'रस' का उदाहरण है?",
    "options_en": ["शृंगार रस", "उपमा", "अनुप्रास", "यमक"],
    "options_hi": ["शृंगार रस", "उपमा", "अनुप्रास", "यमक"],
    "answer_en": "शृंगार रस",
    "answer_hi": "शृंगार रस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "What is the term for the repetition of consonant sounds?",
    "question_hi": "व्यंजन ध्वनियों की पुनरावृत्ति के लिए क्या शब्द है?",
    "options_en": ["Anupras", "Yamak", "Upma", "Rupak"],
    "options_hi": ["अनुप्रास", "यमक", "उपमा", "रूपक"],
    "answer_en": "Anupras",
    "answer_hi": "अनुप्रास",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "Which of the following is a 'Chhand' (metre) in Hindi poetry?",
    "question_hi": "निम्नलिखित में से कौन सा हिंदी कविता में 'छन्द' है?",
    "options_en": ["दोहा", "उपमा", "रूपक", "अतिशयोक्ति"],
    "options_hi": ["दोहा", "उपमा", "रूपक", "अतिशयोक्ति"],
    "answer_en": "दोहा",
    "answer_hi": "दोहा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "What is the term for exaggeration used for emphasis?",
    "question_hi": "जोर देने के लिए प्रयुक्त अतिशयोक्ति के लिए क्या शब्द है?",
    "options_en": ["Atishayokti", "Anupras", "Upma", "Yamak"],
    "options_hi": ["अतिशयोक्ति", "अनुप्रास", "उपमा", "यमक"],
    "answer_en": "Atishayokti",
    "answer_hi": "अतिशयोक्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "Which of the following is an example of 'Yamak' (homonym)?",
    "question_hi": "निम्नलिखित में से कौन सा 'यमक' का उदाहरण है?",
    "options_en": ["काल करे सो आज कर", "जहाँ न पहुँचे रवि, वहाँ पहुँचे कवि", "मेरी भव बाधा हरो", "कनक कनक ते सौ गुनी"],
    "options_hi": ["काल करे सो आज कर", "जहाँ न पहुँचे रवि, वहाँ पहुँचे कवि", "मेरी भव बाधा हरो", "कनक कनक ते सौ गुनी"],
    "answer_en": "कनक कनक ते सौ गुनी",
    "answer_hi": "कनक कनक ते सौ गुनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "What is the term for implied comparison?",
    "question_hi": "अन्योक्तिपूर्ण तुलना के लिए क्या शब्द है?",
    "options_en": ["Upma", "Rupak", "Ullekh", "Drishtant"],
    "options_hi": ["उपमा", "रूपक", "उल्लेख", "दृष्टान्त"],
    "answer_en": "Rupak",
    "answer_hi": "रूपक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "Which of the following is a 'Muhavra' (idiom)?",
    "question_hi": "निम्नलिखित में से कौन सा 'मुहावरा' है?",
    "options_en": ["आँखों का तारा", "सुन्दर लड़की", "तेज दौड़ना", "मीठा बोलना"],
    "options_hi": ["आँखों का तारा", "सुन्दर लड़की", "तेज दौड़ना", "मीठा बोलना"],
    "answer_en": "आँखों का तारा",
    "answer_hi": "आँखों का तारा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "What is the term for a short story with a moral lesson?",
    "question_hi": "नैतिक शिक्षा वाली छोटी कहानी के लिए क्या शब्द है?",
    "options_en": ["Kahani", "Upkatha", "Katha", "Niti katha"],
    "options_hi": ["कहानी", "उपकथा", "कथा", "नीति कथा"],
    "answer_en": "Niti katha",
    "answer_hi": "नीति कथा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "Which of the following is a 'Lokokti' (proverb)?",
    "question_hi": "निम्नलिखित में से कौन सा 'लोकोक्ति' है?",
    "options_en": ["अब पछताए होत क्या जब चिड़िया चुग गई खेत", "सुन्दर फूल", "तेज हवा", "ऊँचा पहाड़"],
    "options_hi": ["अब पछताए होत क्या जब चिड़िया चुग गई खेत", "सुन्दर फूल", "तेज हवा", "ऊँचा पहाड़"],
    "answer_en": "अब पछताए होत क्या जब चिड़िया चुग गई खेत",
    "answer_hi": "अब पछताए होत क्या जब चिड़िया चुग गई खेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "What is the term for a poem of four lines?",
    "question_hi": "चार पंक्तियों की कविता के लिए क्या शब्द है?",
    "options_en": ["Doha", "Chaupai", "Soratha", "Chhand"],
    "options_hi": ["दोहा", "चौपाई", "सोरठा", "छन्द"],
    "answer_en": "Chaupai",
    "answer_hi": "चौपाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "Which of the following is an example of 'Anupras Alankar' (alliteration)?",
    "question_hi": "निम्नलिखित में से कौन सा 'अनुप्रास अलंकार' का उदाहरण है?",
    "options_en": ["कहत कबीर सुनो भाई साधो", "चारु चन्द्र की चंचल किरणें", "मधुर मधुर मेरे दीपक जल", "जय जय जय जननी भारत"],
    "options_hi": ["कहत कबीर सुनो भाई साधो", "चारु चन्द्र की चंचल किरणें", "मधुर मधुर मेरे दीपक जल", "जय जय जय जननी भारत"],
    "answer_en": "चारु चन्द्र की चंचल किरणें",
    "answer_hi": "चारु चन्द्र की चंचल किरणें",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "What is the term for direct comparison using 'like' or 'as'?",
    "question_hi": "'जैसे' या 'समान' का उपयोग करके सीधी तुलना के लिए क्या शब्द है?",
    "options_en": ["Upma", "Rupak", "Uttpreksha", "Atishayokti"],
    "options_hi": ["उपमा", "रूपक", "उत्प्रेक्षा", "अतिशयोक्ति"],
    "answer_en": "Upma",
    "answer_hi": "उपमा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "Which of the following is a 'Kavya' (poetic work)?",
    "question_hi": "निम्नलिखित में से कौन सा 'काव्य' है?",
    "options_en": ["रामचरितमानस", "गोदान", "निर्मला", "कफन"],
    "options_hi": ["रामचरितमानस", "गोदान", "निर्मला", "कफन"],
    "answer_en": "रामचरितमानस",
    "answer_hi": "रामचरितमानस",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "What is the term for the introductory part of a poem?",
    "question_hi": "कविता के प्रारंभिक भाग के लिए क्या शब्द है?",
    "options_en": ["Mangalacharan", "Uttarardh", "Kendrabhag", "Antim"],
    "options_hi": ["मंगलाचरण", "उत्तरार्ध", "केंद्रभाग", "अंतिम"],
    "answer_en": "Mangalacharan",
    "answer_hi": "मंगलाचरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Which of the following is an example of 'Shlesh Alankar' (pun)?",
    "question_hi": "निम्नलिखित में से कौन सा 'श्लेष अलंकार' का उदाहरण है?",
    "options_en": ["रघुपति राघव राजा राम", "सजन सजन री सजनीया", "कनक कनक ते सौ गुनी", "मोहि लागत श्याम प्यारा"],
    "options_hi": ["रघुपति राघव राजा राम", "सजन सजन री सजनीया", "कनक कनक ते सौ गुनी", "मोहि लागत श्याम प्यारा"],
    "answer_en": "कनक कनक ते सौ गुनी",
    "answer_hi": "कनक कनक ते सौ गुनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "What is the term for a poem praising a deity?",
    "question_hi": "देवता की प्रशंसा करने वाली कविता के लिए क्या शब्द है?",
    "options_en": ["Stuti", "Vandana", "Prarthana", "Aarati"],
    "options_hi": ["स्तुति", "वंदना", "प्रार्थना", "आरती"],
    "answer_en": "Stuti",
    "answer_hi": "स्तुति",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "Which of the following is a 'Gadya' (prose) work?",
    "question_hi": "निम्नलिखित में से कौन सा 'गद्य' कार्य है?",
    "options_en": ["गोदान", "रामचरितमानस", "सूरसागर", "विनय पत्रिका"],
    "options_hi": ["गोदान", "रामचरितमानस", "सूरसागर", "विनय पत्रिका"],
    "answer_en": "गोदान",
    "answer_hi": "गोदान",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "What is the term for a poetic meter of 16 syllables?",
    "question_hi": "16 अक्षरों के काव्य छंद के लिए क्या शब्द है?",
    "options_en": ["Doha", "Chaupai", "Soratha", "Chhappay"],
    "options_hi": ["दोहा", "चौपाई", "सोरठा", "छप्पय"],
    "answer_en": "Chhappay",
    "answer_hi": "छप्पय",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "Which of the following is an example of 'Uttpreksha Alankar' (hyperbole)?",
    "question_hi": "निम्नलिखित में से कौन सा 'उत्प्रेक्षा अलंकार' का उदाहरण है?",
    "options_en": ["सुखिया सब संसार है", "कहत कबीर सुनो भाई साधो", "राम नाम रस पीजै", "बिन राम सब सून"],
    "options_hi": ["सुखिया सब संसार है", "कहत कबीर सुनो भाई साधो", "राम नाम रस पीजै", "बिन राम सब सून"],
    "answer_en": "सुखिया सब संसार है",
    "answer_hi": "सुखिया सब संसार है",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "What is the term for the concluding part of a literary work?",
    "question_hi": "साहित्यिक कृति के समापन भाग के लिए क्या शब्द है?",
    "options_en": ["Upasanhar", "Prastavna", "Katha sara", "Nishkarsh"],
    "options_hi": ["उपसंहार", "प्रस्तावना", "कथा सार", "निष्कर्ष"],
    "answer_en": "Upasanhar",
    "answer_hi": "उपसंहार",
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