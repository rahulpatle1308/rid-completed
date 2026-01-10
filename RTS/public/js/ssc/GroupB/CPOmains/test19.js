const questions = [
  {
   "num": 1,
    "question_en": "Which of these is the largest lake in India by area?",
    "question_hi": "क्षेत्रफल के हिसाब से निम्नलिखित में से कौन सी भारत की सबसे बड़ी झील है?",
    "options_en": ["Wular Lake", "Loktak Lake", "Chilika Lake", "Sambhar Lake"],
    "options_hi": ["वुलर झील", "लोकटक झील", "चिल्का झील", "सांभर झील"],
    "answer_en": "Wular Lake",
    "answer_hi": "वुलर झील",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 2,
    "question_en": "The 'First Indian to win the Arjuna Award' was:",
    "question_hi": "अर्जुन पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Various athletes", "Milkha Singh", "P.T. Usha", "Dhyan Chand"],
    "options_hi": ["विभिन्न एथलीट", "मिल्खा सिंह", "पी.टी. उषा", "ध्यान चंद"],
    "answer_en": "Various athletes",
    "answer_hi": "विभिन्न एथलीट",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 3,
    "question_en": "Which of these is NOT a type of lake?",
    "question_hi": "निम्नलिखित में से कौन सा झील का प्रकार नहीं है?",
    "options_en": ["Freshwater", "Saltwater", "Crater", "Mountain"],
    "options_hi": ["मीठे पानी", "खारे पानी", "ज्वालामुखी", "पर्वत"],
    "answer_en": "Mountain",
    "answer_hi": "पर्वत",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 4,
    "question_en": "The 'First Indian woman to win the Arjuna Award' was:",
    "question_hi": "अर्जुन पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Stephie D'Souza", "P.T. Usha", "Shiny Abraham", "M.L. Valsamma"],
    "options_hi": ["स्टेफी डिसूज़ा", "पी.टी. उषा", "शाइनी अब्राहम", "एम.एल. वल्सम्मा"],
    "answer_en": "Stephie D'Souza",
    "answer_hi": "स्टेफी डिसूज़ा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 5,
    "question_en": "Which of these is the largest freshwater lake in India?",
    "question_hi": "निम्नलिखित में से कौन सी भारत की सबसे बड़ी मीठे पानी की झील है?",
    "options_en": ["Wular Lake", "Loktak Lake", "Dal Lake", "Nainital Lake"],
    "options_hi": ["वुलर झील", "लोकटक झील", "डल झील", "नैनीताल झील"],
    "answer_en": "Wular Lake",
    "answer_hi": "वुलर झील",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 6,
    "question_en": "The 'First Indian to win the Dronacharya Award' was:",
    "question_hi": "द्रोणाचार्य पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Various coaches", "Bhalchandra Bhaskar Bhagwat", "Om Prakash Bhardwaj", "Gurbachan Singh Randhawa"],
    "options_hi": ["विभिन्न कोच", "भालचंद्र भास्कर भागवत", "ओम प्रकाश भारद्वाज", "गुरबचन सिंह रंधावा"],
    "answer_en": "Various coaches",
    "answer_hi": "विभिन्न कोच",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 7,
    "question_en": "Which of these is NOT a type of wetland?",
    "question_hi": "निम्नलिखित में से कौन सा आर्द्रभूमि का प्रकार नहीं है?",
    "options_en": ["Marsh", "Swamp", "Bog", "Desert"],
    "options_hi": ["दलदल", "जलभराव", "पीटभूमि", "रेगिस्तान"],
    "answer_en": "Desert",
    "answer_hi": "रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 8,
    "question_en": "The 'First Indian woman to win the Dronacharya Award' was:",
    "question_hi": "द्रोणाचार्य पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Renu Kohli", "Purnima Mahato", "S. M. Arif", "Gurbachan Singh Randhawa"],
    "options_hi": ["रेनू कोहली", "पूर्णिमा महतो", "एस. एम. आरिफ", "गुरबचन सिंह रंधावा"],
    "answer_en": "Renu Kohli",
    "answer_hi": "रेनू कोहली",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 9,
    "question_en": "Which of these is the largest saltwater lake in India?",
    "question_hi": "निम्नलिखित में से कौन सी भारत की सबसे बड़ी खारे पानी की झील है?",
    "options_en": ["Chilika Lake", "Sambhar Lake", "Pulicat Lake", "Wular Lake"],
    "options_hi": ["चिल्का झील", "सांभर झील", "पुलिकट झील", "वुलर झील"],
    "answer_en": "Chilika Lake",
    "answer_hi": "चिल्का झील",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 10,
    "question_en": "The 'First Indian to win the Rajiv Gandhi Khel Ratna Award' was:",
    "question_hi": "राजीव गांधी खेल रत्न पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Viswanathan Anand", "Geet Sethi", "Karnam Malleswari", "Leander Paes"],
    "options_hi": ["विश्वनाथन आनंद", "गीत सेठी", "कर्णम मल्लेश्वरी", "लिएंडर पेस"],
    "answer_en": "Viswanathan Anand",
    "answer_hi": "विश्वनाथन आनंद",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 11,
    "question_en": "Which of these is NOT a type of river?",
    "question_hi": "निम्नलिखित में से कौन सी नदी का प्रकार नहीं है?",
    "options_en": ["Perennial", "Non-perennial", "Seasonal", "Oceanic"],
    "options_hi": ["बारहमासी", "अबारहमासी", "मौसमी", "महासागरीय"],
    "answer_en": "Oceanic",
    "answer_hi": "महासागरीय",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 12,
    "question_en": "The 'First Indian woman to win the Rajiv Gandhi Khel Ratna Award' was:",
    "question_hi": "राजीव गांधी खेल रत्न पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Karnam Malleswari", "P.T. Usha", "Mary Kom", "Saina Nehwal"],
    "options_hi": ["कर्णम मल्लेश्वरी", "पी.टी. उषा", "मैरी कॉम", "साइना नेहवाल"],
    "answer_en": "Karnam Malleswari",
    "answer_hi": "कर्णम मल्लेश्वरी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 13,
    "question_en": "Which of these is the longest river in India?",
    "question_hi": "निम्नलिखित में से कौन सी भारत की सबसे लंबी नदी है?",
    "options_en": ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
    "options_hi": ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
    "answer_en": "Ganga",
    "answer_hi": "गंगा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 14,
    "question_en": "The 'First Indian to win the Dhyan Chand Award' was:",
    "question_hi": "ध्यान चंद पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Various sportspersons", "Dhyan Chand", "Milkha Singh", "P.T. Usha"],
    "options_hi": ["विभिन्न खिलाड़ी", "ध्यान चंद", "मिल्खा सिंह", "पी.टी. उषा"],
    "answer_en": "Various sportspersons",
    "answer_hi": "विभिन्न खिलाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 15,
    "question_en": "Which of these is NOT a type of delta?",
    "question_hi": "निम्नलिखित में से कौन सा डेल्टा का प्रकार नहीं है?",
    "options_en": ["Arcuate", "Bird's foot", "Estuarine", "Mountainous"],
    "options_hi": ["वृत्ताकार", "पक्षी पैर", "मुहाना", "पर्वतीय"],
    "answer_en": "Mountainous",
    "answer_hi": "पर्वतीय",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 16,
    "question_en": "The 'First Indian woman to win the Dhyan Chand Award' was:",
    "question_hi": "ध्यान चंद पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Various women sportspersons", "Milkha Singh", "P.T. Usha", "Mary Kom"],
    "options_hi": ["विभिन्न महिला खिलाड़ी", "मिल्खा सिंह", "पी.टी. उषा", "मैरी कॉम"],
    "answer_en": "Various women sportspersons",
    "answer_hi": "विभिन्न महिला खिलाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 17,
    "question_en": "Which of these is the largest delta in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे बड़ा डेल्टा है?",
    "options_en": ["Sunderbans Delta", "Mahanadi Delta", "Krishna Delta", "Godavari Delta"],
    "options_hi": ["सुंदरबन डेल्टा", "महानदी डेल्टा", "कृष्णा डेल्टा", "गोदावरी डेल्टा"],
    "answer_en": "Sunderbans Delta",
    "answer_hi": "सुंदरबन डेल्टा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 18,
    "question_en": "The 'First Indian to win the Major Dhyan Chand Khel Ratna Award' was:",
    "question_hi": "मेजर ध्यान चंद खेल रत्न पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Neeraj Chopra", "Ravi Kumar Dahiya", "Mirabai Chanu", "Lovlina Borgohain"],
    "options_hi": ["नीरज चोपड़ा", "रवि कुमार दहिया", "मीराबाई चानू", "लवलीना बोरगोहाईं"],
    "answer_en": "Neeraj Chopra",
    "answer_hi": "नीरज चोपड़ा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 19,
    "question_en": "Which of these is NOT a type of waterfall?",
    "question_hi": "निम्नलिखित में से कौन सा झरने का प्रकार नहीं है?",
    "options_en": ["Plunge", "Horsetail", "Cataract", "Riverine"],
    "options_hi": ["प्लंज", "हॉर्सटेल", "कैटरैक्ट", "नदी"],
    "answer_en": "Riverine",
    "answer_hi": "नदी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 20,
    "question_en": "The 'First Indian woman to win the Major Dhyan Chand Khel Ratna Award' was:",
    "question_hi": "मेजर ध्यान चंद खेल रत्न पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Mirabai Chanu", "P.V. Sindhu", "Mary Kom", "Sakshi Malik"],
    "options_hi": ["मीराबाई चानू", "पी.वी. सिंधु", "मैरी कॉम", "साक्षी मलिक"],
    "answer_en": "Mirabai Chanu",
    "answer_hi": "मीराबाई चानू",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 21,
    "question_en": "Which of these is the highest waterfall in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे ऊँचा झरना है?",
    "options_en": ["Kunchikal Falls", "Barehipani Falls", "Nohkalikai Falls", "Jog Falls"],
    "options_hi": ["कुंचिकल फॉल्स", "बरेहीपानी फॉल्स", "नोहकलिकाई फॉल्स", "जोग फॉल्स"],
    "answer_en": "Kunchikal Falls",
    "answer_hi": "कुंचिकल फॉल्स",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 22,
    "question_en": "The 'First Indian to win the National Sports Award' was:",
    "question_hi": "राष्ट्रीय खेल पुरस्कार जीतने वाले पहले भारतीय थे:",
    "options_en": ["Various sportspersons", "Dhyan Chand", "Milkha Singh", "P.T. Usha"],
    "options_hi": ["विभिन्न खिलाड़ी", "ध्यान चंद", "मिल्खा सिंह", "पी.टी. उषा"],
    "answer_en": "Various sportspersons",
    "answer_hi": "विभिन्न खिलाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 23,
    "question_en": "Which of these is NOT a type of glacier?",
    "question_hi": "निम्नलिखित में से कौन सा ग्लेशियर का प्रकार नहीं है?",
    "options_en": ["Alpine", "Continental", "Tidewater", "Desert"],
    "options_hi": ["अल्पाइन", "महाद्वीपीय", "ज्वारीय", "रेगिस्तान"],
    "answer_en": "Desert",
    "answer_hi": "रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 24,
    "question_en": "The 'First Indian woman to win the National Sports Award' was:",
    "question_hi": "राष्ट्रीय खेल पुरस्कार जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Various women sportspersons", "Milkha Singh", "P.T. Usha", "Mary Kom"],
    "options_hi": ["विभिन्न महिला खिलाड़ी", "मिल्खा सिंह", "पी.टी. उषा", "मैरी कॉम"],
    "answer_en": "Various women sportspersons",
    "answer_hi": "विभिन्न महिला खिलाड़ी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 25,
    "question_en": "Which of these is the largest glacier in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे बड़ा ग्लेशियर है?",
    "options_en": ["Siachen Glacier", "Gangotri Glacier", "Zemu Glacier", "Bara Shigri Glacier"],
    "options_hi": ["सियाचिन ग्लेशियर", "गंगोत्री ग्लेशियर", "जेमु ग्लेशियर", "बड़ा शिगरी ग्लेशियर"],
    "answer_en": "Siachen Glacier",
    "answer_hi": "सियाचिन ग्लेशियर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 26,
    "question_en": "The 'First Indian to win the Olympic gold medal' was:",
    "question_hi": "ओलंपिक स्वर्ण पदक जीतने वाले पहले भारतीय थे:",
    "options_en": ["Abhinav Bindra", "Neeraj Chopra", "K.D. Jadhav", "Milkha Singh"],
    "options_hi": ["अभिनव बिंद्रा", "नीरज चोपड़ा", "के.डी. जाधव", "मिल्खा सिंह"],
    "answer_en": "Abhinav Bindra",
    "answer_hi": "अभिनव बिंद्रा",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 27,
    "question_en": "Which of these is NOT a type of mountain?",
    "question_hi": "निम्नलिखित में से कौन सा पर्वत का प्रकार नहीं है?",
    "options_en": ["Fold", "Block", "Volcanic", "Oceanic"],
    "options_hi": ["वलित", "खंड", "ज्वालामुखी", "महासागरीय"],
    "answer_en": "Oceanic",
    "answer_hi": "महासागरीय",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 28,
    "question_en": "The 'First Indian woman to win the Olympic gold medal' was:",
    "question_hi": "ओलंपिक स्वर्ण पदक जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["None", "Karnam Malleswari", "Mary Kom", "Saina Nehwal"],
    "options_hi": ["कोई नहीं", "कर्णम मल्लेश्वरी", "मैरी कॉम", "साइना नेहवाल"],
    "answer_en": "None",
    "answer_hi": "कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 29,
    "question_en": "Which of these is the highest mountain peak in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे ऊँचा पर्वत शिखर है?",
    "options_en": ["K2", "Kanchenjunga", "Nanda Devi", "Mount Everest"],
    "options_hi": ["K2", "कंचनजंघा", "नंदा देवी", "माउंट एवरेस्ट"],
    "answer_en": "K2",
    "answer_hi": "K2",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 30,
    "question_en": "The 'First Indian to win the Olympic silver medal' was:",
    "question_hi": "ओलंपिक रजत पदक जीतने वाले पहले भारतीय थे:",
    "options_en": ["Rajyavardhan Singh Rathore", "Sushil Kumar", "P.V. Sindhu", "Saina Nehwal"],
    "options_hi": ["राज्यवर्धन सिंह राठौर", "सुशील कुमार", "पी.वी. सिंधु", "साइना नेहवाल"],
    "answer_en": "Rajyavardhan Singh Rathore",
    "answer_hi": "राज्यवर्धन सिंह राठौर",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 31,
    "question_en": "Which of these is NOT a type of plateau?",
    "question_hi": "निम्नलिखित में से कौन सा पठार का प्रकार नहीं है?",
    "options_en": ["Intermontane", "Piedmont", "Continental", "Oceanic"],
    "options_hi": ["अंतरपर्वतीय", "पीडमोंट", "महाद्वीपीय", "महासागरीय"],
    "answer_en": "Oceanic",
    "answer_hi": "महासागरीय",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 32,
    "question_en": "The 'First Indian woman to win the Olympic silver medal' was:",
    "question_hi": "ओलंपिक रजत पदक जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["P.V. Sindhu", "Saina Nehwal", "Karnam Malleswari", "Mary Kom"],
    "options_hi": ["पी.वी. सिंधु", "साइना नेहवाल", "कर्णम मल्लेश्वरी", "मैरी कॉम"],
    "answer_en": "P.V. Sindhu",
    "answer_hi": "पी.वी. सिंधु",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 33,
    "question_en": "Which of these is the largest plateau in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे बड़ा पठार है?",
    "options_en": ["Deccan Plateau", "Chota Nagpur Plateau", "Malwa Plateau", "Bundelkhand Plateau"],
    "options_hi": ["दक्कन का पठार", "छोटा नागपुर पठार", "मालवा पठार", "बुंदेलखंड पठार"],
    "answer_en": "Deccan Plateau",
    "answer_hi": "दक्कन का पठार",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 34,
    "question_en": "The 'First Indian to win the Olympic bronze medal' was:",
    "question_hi": "ओलंपिक कांस्य पदक जीतने वाले पहले भारतीय थे:",
    "options_en": ["K.D. Jadhav", "Leander Paes", "Karnam Malleswari", "Sushil Kumar"],
    "options_hi": ["के.डी. जाधव", "लिएंडर पेस", "कर्णम मल्लेश्वरी", "सुशील कुमार"],
    "answer_en": "K.D. Jadhav",
    "answer_hi": "के.डी. जाधव",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 35,
    "question_en": "Which of these is NOT a type of plain?",
    "question_hi": "निम्नलिखित में से कौन सा मैदान का प्रकार नहीं है?",
    "options_en": ["Flood plain", "Coastal plain", "Desert plain", "Mountain plain"],
    "options_hi": ["बाढ़ का मैदान", "तटीय मैदान", "रेगिस्तान मैदान", "पर्वत मैदान"],
    "answer_en": "Mountain plain",
    "answer_hi": "पर्वत मैदान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 36,
    "question_en": "The 'First Indian woman to win the Olympic bronze medal' was:",
    "question_hi": "ओलंपिक कांस्य पदक जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Karnam Malleswari", "Mary Kom", "Saina Nehwal", "P.V. Sindhu"],
    "options_hi": ["कर्णम मल्लेश्वरी", "मैरी कॉम", "साइना नेहवाल", "पी.वी. सिंधु"],
    "answer_en": "Karnam Malleswari",
    "answer_hi": "कर्णम मल्लेश्वरी",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 37,
    "question_en": "Which of these is the largest plain in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे बड़ा मैदान है?",
    "options_en": ["Indo-Gangetic Plain", "Coastal Plains", "Desert Plains", "Brahmaputra Plain"],
    "options_hi": ["इंडो-गंगेटिक मैदान", "तटीय मैदान", "रेगिस्तान मैदान", "ब्रह्मपुत्र मैदान"],
    "answer_en": "Indo-Gangetic Plain",
    "answer_hi": "इंडो-गंगेटिक मैदान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 38,
    "question_en": "The 'First Indian to win the Asian Games gold medal' was:",
    "question_hi": "एशियाई खेल स्वर्ण पदक जीतने वाले पहले भारतीय थे:",
    "options_en": ["Various athletes", "Milkha Singh", "P.T. Usha", "Dhyan Chand"],
    "options_hi": ["विभिन्न एथलीट", "मिल्खा सिंह", "पी.टी. उषा", "ध्यान चंद"],
    "answer_en": "Various athletes",
    "answer_hi": "विभिन्न एथलीट",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 39,
    "question_en": "Which of these is NOT a type of island?",
    "question_hi": "निम्नलिखित में से कौन सा द्वीप का प्रकार नहीं है?",
    "options_en": ["Continental", "Oceanic", "Volcanic", "Desert"],
    "options_hi": ["महाद्वीपीय", "महासागरीय", "ज्वालामुखी", "रेगिस्तान"],
    "answer_en": "Desert",
    "answer_hi": "रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 40,
    "question_en": "The 'First Indian woman to win the Asian Games gold medal' was:",
    "question_hi": "एशियाई खेल स्वर्ण पदक जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Kamaljit Sandhu", "P.T. Usha", "Hima Das", "Dutee Chand"],
    "options_hi": ["कमलजीत संधू", "पी.टी. उषा", "हिमा दास", "दुती चंद"],
    "answer_en": "Kamaljit Sandhu",
    "answer_hi": "कमलजीत संधू",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 41,
    "question_en": "Which of these is the largest island in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे बड़ा द्वीप है?",
    "options_en": ["Andaman Island", "Nicobar Island", "Majuli Island", "Lakshadweep Island"],
    "options_hi": ["अंडमान द्वीप", "निकोबार द्वीप", "माजुली द्वीप", "लक्षद्वीप द्वीप"],
    "answer_en": "Andaman Island",
    "answer_hi": "अंडमान द्वीप",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 42,
    "question_en": "The 'First Indian to win the Commonwealth Games gold medal' was:",
    "question_hi": "राष्ट्रमंडल खेल स्वर्ण पदक जीतने वाले पहले भारतीय थे:",
    "options_en": ["Various athletes", "Milkha Singh", "P.T. Usha", "Dhyan Chand"],
    "options_hi": ["विभिन्न एथलीट", "मिल्खा सिंह", "पी.टी. उषा", "ध्यान चंद"],
    "answer_en": "Various athletes",
    "answer_hi": "विभिन्न एथलीट",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 43,
    "question_en": "Which of these is NOT a type of coast?",
    "question_hi": "निम्नलिखित में से कौन सा तट का प्रकार नहीं है?",
    "options_en": ["Emergent", "Submergent", "Ria", "Desert"],
    "options_hi": ["उभरता हुआ", "डूबता हुआ", "रिया", "रेगिस्तान"],
    "answer_en": "Desert",
    "answer_hi": "रेगिस्तान",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 44,
    "question_en": "The 'First Indian woman to win the Commonwealth Games gold medal' was:",
    "question_hi": "राष्ट्रमंडल खेल स्वर्ण पदक जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Various women athletes", "P.T. Usha", "Hima Das", "Dutee Chand"],
    "options_hi": ["विभिन्न महिला एथलीट", "पी.टी. उषा", "हिमा दास", "दुती चंद"],
    "answer_en": "Various women athletes",
    "answer_hi": "विभिन्न महिला एथलीट",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 45,
    "question_en": "Which of these is the longest coastline in India?",
    "question_hi": "निम्नलिखित में से कौन सा भारत का सबसे लंबा तटरेखा है?",
    "options_en": ["Gujarat", "Andhra Pradesh", "Tamil Nadu", "Maharashtra"],
    "options_hi": ["गुजरात", "आंध्र प्रदेश", "तमिलनाडु", "महाराष्ट्र"],
    "answer_en": "Gujarat",
    "answer_hi": "गुजरात",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 46,
    "question_en": "The 'First Indian to win the World Championship gold medal' was:",
    "question_hi": "विश्व चैंपियनशिप स्वर्ण पदक जीतने वाले पहले भारतीय थे:",
    "options_en": ["Various athletes", "Milkha Singh", "P.T. Usha", "Dhyan Chand"],
    "options_hi": ["विभिन्न एथलीट", "मिल्खा सिंह", "पी.टी. उषा", "ध्यान चंद"],
    "answer_en": "Various athletes",
    "answer_hi": "विभिन्न एथलीट",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 47,
    "question_en": "Which of these is NOT a type of climate?",
    "question_hi": "निम्नलिखित में से कौन सा जलवायु का प्रकार नहीं है?",
    "options_en": ["Tropical", "Temperate", "Polar", "Oceanic"],
    "options_hi": ["उष्णकटिबंधीय", "समशीतोष्ण", "ध्रुवीय", "महासागरीय"],
    "answer_en": "Oceanic",
    "answer_hi": "महासागरीय",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 48,
    "question_en": "The 'First Indian woman to win the World Championship gold medal' was:",
    "question_hi": "विश्व चैंपियनशिप स्वर्ण पदक जीतने वाली पहली भारतीय महिला थीं:",
    "options_en": ["Various women athletes", "P.T. Usha", "Hima Das", "Dutee Chand"],
    "options_hi": ["विभिन्न महिला एथलीट", "पी.टी. उषा", "हिमा दास", "दुती चंद"],
    "answer_en": "Various women athletes",
    "answer_hi": "विभिन्न महिला एथलीट",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 49,
    "question_en": "Which of these has the tropical rainforest climate in India?",
    "question_hi": "निम्नलिखित में से किसमें भारत में उष्णकटिबंधीय वर्षावन जलवायु है?",
    "options_en": ["Western Ghats", "Thar Desert", "Himalayas", "Deccan Plateau"],
    "options_hi": ["पश्चिमी घाट", "थार रेगिस्तान", "हिमालय", "दक्कन का पठार"],
    "answer_en": "Western Ghats",
    "answer_hi": "पश्चिमी घाट",
    "attempted": false,
    "selected": ""
  },
  {
   "num": 50,
    "question_en": "The 'First Indian to win the Grand Slam title' was:",
    "question_hi": "ग्रैंड स्लैम खिताब जीतने वाले पहले भारतीय थे:",
    "options_en": ["Ramanathan Krishnan", "Leander Paes", "Mahesh Bhupathi", "Vijay Amritraj"],
    "options_hi": ["रामनाथन कृष्णन", "लिएंडर पेस", "महेश भूपति", "विजय अमृतराज"],
    "answer_en": "Ramanathan Krishnan",
    "answer_hi": "रामनाथन कृष्णन",
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