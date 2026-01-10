const questions = [
  {
    num: 1,
    question_en: "Which vitamin is known as anti-sterility vitamin?",
    question_hi: "किस विटामिन को एंटी-स्टेरिलिटी विटामिन कहा जाता है?",
    options_en: ["Vitamin A", "Vitamin E", "Vitamin K", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन E", "विटामिन K", "विटामिन D"],
    answer_en: "Vitamin E",
    answer_hi: "विटामिन E",
    attempted: false,
    selected: ""
  },
  {
    num: 2,
    question_en: "Which Indian state has the highest literacy rate?",
    question_hi: "भारत में सबसे अधिक साक्षरता दर किस राज्य की है?",
    options_en: ["Kerala", "Tamil Nadu", "Goa", "Mizoram"],
    options_hi: ["केरल", "तमिलनाडु", "गोवा", "मिजोरम"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 3,
    question_en: "Who was the first Indian woman President?",
    question_hi: "भारत की पहली महिला राष्ट्रपति कौन थीं?",
    options_en: ["Pratibha Patil", "Indira Gandhi", "Sarojini Naidu", "Sonia Gandhi"],
    options_hi: ["प्रतिभा पाटिल", "इंदिरा गांधी", "सरोजिनी नायडू", "सोनिया गांधी"],
    answer_en: "Pratibha Patil",
    answer_hi: "प्रतिभा पाटिल",
    attempted: false,
    selected: ""
  },
  {
    num: 4,
    question_en: "Which blood group is called universal recipient?",
    question_hi: "सार्वभौमिक ग्राही किस रक्त समूह को कहा जाता है?",
    options_en: ["A", "B", "AB+", "O-"],
    options_hi: ["A", "B", "AB+", "O-"],
    answer_en: "AB+",
    answer_hi: "AB+",
    attempted: false,
    selected: ""
  },
  {
    num: 5,
    question_en: "Which Indian freedom fighter founded Ghadar Party?",
    question_hi: "ग़दर पार्टी की स्थापना किसने की?",
    options_en: ["Lala Hardayal", "Bhagat Singh", "Subhash Bose", "Rajguru"],
    options_hi: ["लाला हरदयाल", "भगत सिंह", "सुभाष बोस", "राजगुरु"],
    answer_en: "Lala Hardayal",
    answer_hi: "लाला हरदयाल",
    attempted: false,
    selected: ""
  },
  {
    num: 6,
    question_en: "Which gas is released during photosynthesis?",
    question_hi: "प्रकाश संश्लेषण के दौरान कौन सी गैस निकलती है?",
    options_en: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
    options_hi: ["ऑक्सीजन", "कार्बन डाइऑक्साइड", "नाइट्रोजन", "हाइड्रोजन"],
    answer_en: "Oxygen",
    answer_hi: "ऑक्सीजन",
    attempted: false,
    selected: ""
  },
  {
    num: 7,
    question_en: "Who introduced the Doctrine of Lapse?",
    question_hi: "डॉक्ट्रिन ऑफ लैप्स किसने लागू की?",
    options_en: ["Lord Dalhousie", "Lord Wellesley", "Lord Curzon", "Lord Hastings"],
    options_hi: ["लॉर्ड डलहौजी", "लॉर्ड वेलेजली", "लॉर्ड कर्जन", "लॉर्ड हेस्टिंग्स"],
    answer_en: "Lord Dalhousie",
    answer_hi: "लॉर्ड डलहौजी",
    attempted: false,
    selected: ""
  },
  {
    num: 8,
    question_en: "Which instrument is used to measure humidity?",
    question_hi: "आर्द्रता मापने के लिए किस यंत्र का प्रयोग होता है?",
    options_en: ["Barometer", "Hygrometer", "Thermometer", "Anemometer"],
    options_hi: ["बैरोमीटर", "हाइग्रोमीटर", "थर्मामीटर", "एनीमोमीटर"],
    answer_en: "Hygrometer",
    answer_hi: "हाइग्रोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 9,
    question_en: "Which is the largest gland in human body?",
    question_hi: "मानव शरीर की सबसे बड़ी ग्रंथि कौन सी है?",
    options_en: ["Pancreas", "Liver", "Thyroid", "Adrenal"],
    options_hi: ["अग्न्याशय", "यकृत", "थायरॉयड", "एड्रीनल"],
    answer_en: "Liver",
    answer_hi: "यकृत",
    attempted: false,
    selected: ""
  },
  {
    num: 10,
    question_en: "Which Indian city is known as the City of Lakes?",
    question_hi: "झीलों का शहर किसे कहा जाता है?",
    options_en: ["Udaipur", "Bhopal", "Nainital", "Srinagar"],
    options_hi: ["उदयपुर", "भोपाल", "नैनीताल", "श्रीनगर"],
    answer_en: "Udaipur",
    answer_hi: "उदयपुर",
    attempted: false,
    selected: ""
  },

  {
    num: 11,
    question_en: "Which metal is used in galvanization?",
    question_hi: "गल्वनाइजेशन में किस धातु का उपयोग होता है?",
    options_en: ["Copper", "Zinc", "Aluminium", "Iron"],
    options_hi: ["तांबा", "जस्ता", "एल्युमिनियम", "लोहा"],
    answer_en: "Zinc",
    answer_hi: "जस्ता",
    attempted: false,
    selected: ""
  },
  {
    num: 12,
    question_en: "Who was the first Indian Chief of Army Staff?",
    question_hi: "भारत के पहले भारतीय सेना प्रमुख कौन थे?",
    options_en: ["K. M. Cariappa", "Sam Manekshaw", "Bipin Rawat", "K. S. Thimayya"],
    options_hi: ["के. एम. करियप्पा", "सैम मानेकशॉ", "बिपिन रावत", "के. एस. थिमैया"],
    answer_en: "K. M. Cariappa",
    answer_hi: "के. एम. करियप्पा",
    attempted: false,
    selected: ""
  },
  {
    num: 13,
    question_en: "Which Indian state is the largest by area?",
    question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
    options_en: ["Rajasthan", "Madhya Pradesh", "Maharashtra", "Uttar Pradesh"],
    options_hi: ["राजस्थान", "मध्य प्रदेश", "महाराष्ट्र", "उत्तर प्रदेश"],
    answer_en: "Rajasthan",
    answer_hi: "राजस्थान",
    attempted: false,
    selected: ""
  },
  {
    num: 14,
    question_en: "Which organelle is known as powerhouse of the cell?",
    question_hi: "कोशिका का पावरहाउस किसे कहा जाता है?",
    options_en: ["Ribosome", "Nucleus", "Mitochondria", "Golgi body"],
    options_hi: ["राइबोसोम", "न्यूक्लियस", "माइटोकॉन्ड्रिया", "गोल्जी बॉडी"],
    answer_en: "Mitochondria",
    answer_hi: "माइटोकॉन्ड्रिया",
    attempted: false,
    selected: ""
  },
  {
    num: 15,
    question_en: "Which movement started in 1942?",
    question_hi: "1942 में कौन सा आंदोलन शुरू हुआ?",
    options_en: ["Non Cooperation", "Civil Disobedience", "Quit India", "Swadeshi"],
    options_hi: ["असहयोग", "सविनय अवज्ञा", "भारत छोड़ो", "स्वदेशी"],
    answer_en: "Quit India",
    answer_hi: "भारत छोड़ो",
    attempted: false,
    selected: ""
  },

  {
    num: 16,
    question_en: "Which vitamin is soluble in water?",
    question_hi: "कौन सा विटामिन पानी में घुलनशील है?",
    options_en: ["Vitamin A", "Vitamin D", "Vitamin E", "Vitamin C"],
    options_hi: ["विटामिन A", "विटामिन D", "विटामिन E", "विटामिन C"],
    answer_en: "Vitamin C",
    answer_hi: "विटामिन C",
    attempted: false,
    selected: ""
  },
  {
    num: 17,
    question_en: "Which Indian river is called Vridha Ganga?",
    question_hi: "वृद्ध गंगा किस नदी को कहा जाता है?",
    options_en: ["Godavari", "Kaveri", "Krishna", "Tapi"],
    options_hi: ["गोदावरी", "कावेरी", "कृष्णा", "ताप्ती"],
    answer_en: "Godavari",
    answer_hi: "गोदावरी",
    attempted: false,
    selected: ""
  },
  {
    num: 18,
    question_en: "Who wrote Vande Mataram?",
    question_hi: "वंदे मातरम् किसने लिखा?",
    options_en: ["Rabindranath Tagore", "Bankim Chandra Chatterjee", "Iqbal", "Bharatendu"],
    options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र चट्टोपाध्याय", "इकबाल", "भारतेंदु"],
    answer_en: "Bankim Chandra Chatterjee",
    answer_hi: "बंकिम चंद्र चट्टोपाध्याय",
    attempted: false,
    selected: ""
  },
  {
    num: 19,
    question_en: "Which disease is caused by mosquito?",
    question_hi: "मच्छर से कौन सा रोग फैलता है?",
    options_en: ["Cholera", "Malaria", "Tuberculosis", "Typhoid"],
    options_hi: ["हैजा", "मलेरिया", "क्षय रोग", "टाइफाइड"],
    answer_en: "Malaria",
    answer_hi: "मलेरिया",
    attempted: false,
    selected: ""
  },
  {
    num: 20,
    question_en: "Which Indian state has the longest coastline?",
    question_hi: "भारत का सबसे लंबा समुद्र तट किस राज्य का है?",
    options_en: ["Maharashtra", "Tamil Nadu", "Andhra Pradesh", "Gujarat"],
    options_hi: ["महाराष्ट्र", "तमिलनाडु", "आंध्र प्रदेश", "गुजरात"],
    answer_en: "Gujarat",
    answer_hi: "गुजरात",
    attempted: false,
    selected: ""
  },
    {
    num: 21,
    question_en: "Which acid is present in lemon?",
    question_hi: "नींबू में कौन सा अम्ल पाया जाता है?",
    options_en: ["Acetic acid", "Citric acid", "Lactic acid", "Oxalic acid"],
    options_hi: ["एसिटिक अम्ल", "सिट्रिक अम्ल", "लैक्टिक अम्ल", "ऑक्सैलिक अम्ल"],
    answer_en: "Citric acid",
    answer_hi: "सिट्रिक अम्ल",
    attempted: false,
    selected: ""
  },
  {
    num: 22,
    question_en: "Who was the first Indian Governor-General of independent India?",
    question_hi: "स्वतंत्र भारत के पहले भारतीय गवर्नर जनरल कौन थे?",
    options_en: ["C. Rajagopalachari", "Dr. Rajendra Prasad", "Jawaharlal Nehru", "Lord Mountbatten"],
    options_hi: ["सी. राजगोपालाचारी", "डॉ. राजेंद्र प्रसाद", "जवाहरलाल नेहरू", "लॉर्ड माउंटबेटन"],
    answer_en: "C. Rajagopalachari",
    answer_hi: "सी. राजगोपालाचारी",
    attempted: false,
    selected: ""
  },
  {
    num: 23,
    question_en: "Which planet is closest to the Sun?",
    question_hi: "सूर्य के सबसे निकट कौन सा ग्रह है?",
    options_en: ["Venus", "Earth", "Mercury", "Mars"],
    options_hi: ["शुक्र", "पृथ्वी", "बुध", "मंगल"],
    answer_en: "Mercury",
    answer_hi: "बुध",
    attempted: false,
    selected: ""
  },
  {
    num: 24,
    question_en: "Which Indian state is known as the Spice Garden of India?",
    question_hi: "भारत का मसाला उद्यान किस राज्य को कहा जाता है?",
    options_en: ["Kerala", "Karnataka", "Tamil Nadu", "Assam"],
    options_hi: ["केरल", "कर्नाटक", "तमिलनाडु", "असम"],
    answer_en: "Kerala",
    answer_hi: "केरल",
    attempted: false,
    selected: ""
  },
  {
    num: 25,
    question_en: "Which vitamin deficiency causes night blindness?",
    question_hi: "रतौंधी किस विटामिन की कमी से होती है?",
    options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin A",
    answer_hi: "विटामिन A",
    attempted: false,
    selected: ""
  },
  {
    num: 26,
    question_en: "Who wrote the book 'Discovery of India'?",
    question_hi: "'डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी?",
    options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhash Chandra Bose", "B. R. Ambedkar"],
    options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "बी. आर. अंबेडकर"],
    answer_en: "Jawaharlal Nehru",
    answer_hi: "जवाहरलाल नेहरू",
    attempted: false,
    selected: ""
  },
  {
    num: 27,
    question_en: "Which metal is used to make electric wires?",
    question_hi: "बिजली के तार बनाने में किस धातु का प्रयोग होता है?",
    options_en: ["Iron", "Aluminium", "Copper", "Zinc"],
    options_hi: ["लोहा", "एल्युमिनियम", "तांबा", "जस्ता"],
    answer_en: "Copper",
    answer_hi: "तांबा",
    attempted: false,
    selected: ""
  },
  {
    num: 28,
    question_en: "Which movement is associated with Dandi March?",
    question_hi: "डांडी मार्च किस आंदोलन से संबंधित है?",
    options_en: ["Non-Cooperation", "Civil Disobedience", "Quit India", "Swadeshi"],
    options_hi: ["असहयोग", "सविनय अवज्ञा", "भारत छोड़ो", "स्वदेशी"],
    answer_en: "Civil Disobedience",
    answer_hi: "सविनय अवज्ञा",
    attempted: false,
    selected: ""
  },
  {
    num: 29,
    question_en: "Which part of the Constitution is known as Magna Carta of India?",
    question_hi: "भारतीय संविधान का मैग्ना कार्टा किसे कहा जाता है?",
    options_en: ["Preamble", "Fundamental Rights", "Directive Principles", "Schedules"],
    options_hi: ["प्रस्तावना", "मौलिक अधिकार", "नीति निदेशक तत्व", "अनुसूचियां"],
    answer_en: "Fundamental Rights",
    answer_hi: "मौलिक अधिकार",
    attempted: false,
    selected: ""
  },
  {
    num: 30,
    question_en: "Which Indian scientist won the Nobel Prize in Physics?",
    question_hi: "भौतिकी में नोबेल पुरस्कार पाने वाले भारतीय वैज्ञानिक कौन थे?",
    options_en: ["C. V. Raman", "Homi Bhabha", "A. P. J. Abdul Kalam", "Vikram Sarabhai"],
    options_hi: ["सी. वी. रमन", "होमी भाभा", "ए. पी. जे. अब्दुल कलाम", "विक्रम साराभाई"],
    answer_en: "C. V. Raman",
    answer_hi: "सी. वी. रमन",
    attempted: false,
    selected: ""
  },
  {
    num: 31,
    question_en: "Which gas is mainly responsible for acid rain?",
    question_hi: "अम्लीय वर्षा के लिए मुख्य रूप से कौन सी गैस जिम्मेदार है?",
    options_en: ["Oxygen", "Sulphur Dioxide", "Nitrogen", "Carbon Monoxide"],
    options_hi: ["ऑक्सीजन", "सल्फर डाइऑक्साइड", "नाइट्रोजन", "कार्बन मोनोऑक्साइड"],
    answer_en: "Sulphur Dioxide",
    answer_hi: "सल्फर डाइऑक्साइड",
    attempted: false,
    selected: ""
  },
  {
    num: 32,
    question_en: "Which Indian state has the highest population density?",
    question_hi: "भारत में सबसे अधिक जनसंख्या घनत्व किस राज्य का है?",
    options_en: ["Bihar", "West Bengal", "Uttar Pradesh", "Kerala"],
    options_hi: ["बिहार", "पश्चिम बंगाल", "उत्तर प्रदेश", "केरल"],
    answer_en: "Bihar",
    answer_hi: "बिहार",
    attempted: false,
    selected: ""
  },
  {
    num: 33,
    question_en: "Who was the first Indian to go to space?",
    question_hi: "अंतरिक्ष में जाने वाले पहले भारतीय कौन थे?",
    options_en: ["Rakesh Sharma", "Kalpana Chawla", "Sunita Williams", "Vikram Sarabhai"],
    options_hi: ["राकेश शर्मा", "कल्पना चावला", "सुनीता विलियम्स", "विक्रम साराभाई"],
    answer_en: "Rakesh Sharma",
    answer_hi: "राकेश शर्मा",
    attempted: false,
    selected: ""
  },
  {
    num: 34,
    question_en: "Which soil is best for cotton cultivation?",
    question_hi: "कपास की खेती के लिए कौन सी मिट्टी उपयुक्त है?",
    options_en: ["Alluvial soil", "Red soil", "Black soil", "Laterite soil"],
    options_hi: ["जलोढ़ मिट्टी", "लाल मिट्टी", "काली मिट्टी", "लेटराइट मिट्टी"],
    answer_en: "Black soil",
    answer_hi: "काली मिट्टी",
    attempted: false,
    selected: ""
  },
  {
    num: 35,
    question_en: "Which amendment reduced the voting age to 18 years?",
    question_hi: "मतदान की आयु 18 वर्ष करने वाला कौन सा संशोधन है?",
    options_en: ["61st", "42nd", "44th", "73rd"],
    options_hi: ["61वां", "42वां", "44वां", "73वां"],
    answer_en: "61st",
    answer_hi: "61वां",
    attempted: false,
    selected: ""
  },
  {
    num: 36,
    question_en: "Which part of the plant absorbs water?",
    question_hi: "पौधे का कौन सा भाग जल अवशोषित करता है?",
    options_en: ["Stem", "Leaf", "Root", "Flower"],
    options_hi: ["तना", "पत्ता", "जड़", "फूल"],
    answer_en: "Root",
    answer_hi: "जड़",
    attempted: false,
    selected: ""
  },
  {
    num: 37,
    question_en: "Who is known as the Iron Man of India?",
    question_hi: "भारत का लौह पुरुष किसे कहा जाता है?",
    options_en: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Sardar Patel", "Lal Bahadur Shastri"],
    options_hi: ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार पटेल", "लाल बहादुर शास्त्री"],
    answer_en: "Sardar Patel",
    answer_hi: "सरदार पटेल",
    attempted: false,
    selected: ""
  },
  {
    num: 38,
    question_en: "Which instrument measures atmospheric pressure?",
    question_hi: "वायुमंडलीय दाब मापने वाला यंत्र कौन सा है?",
    options_en: ["Thermometer", "Barometer", "Hygrometer", "Anemometer"],
    options_hi: ["थर्मामीटर", "बैरोमीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
    answer_en: "Barometer",
    answer_hi: "बैरोमीटर",
    attempted: false,
    selected: ""
  },
  {
    num: 39,
    question_en: "Which Indian state produces the most tea?",
    question_hi: "भारत में सबसे अधिक चाय उत्पादन किस राज्य में होता है?",
    options_en: ["Assam", "Kerala", "West Bengal", "Tamil Nadu"],
    options_hi: ["असम", "केरल", "पश्चिम बंगाल", "तमिलनाडु"],
    answer_en: "Assam",
    answer_hi: "असम",
    attempted: false,
    selected: ""
  },
  {
    num: 40,
    question_en: "Which article deals with Right to Life?",
    question_hi: "जीवन के अधिकार से कौन सा अनुच्छेद संबंधित है?",
    options_en: ["Article 14", "Article 19", "Article 21", "Article 32"],
    options_hi: ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"],
    answer_en: "Article 21",
    answer_hi: "अनुच्छेद 21",
    attempted: false,
    selected: ""
  },
  {
    num: 41,
    question_en: "Which vitamin is produced by intestinal bacteria?",
    question_hi: "आंतों के बैक्टीरिया द्वारा कौन सा विटामिन बनाया जाता है?",
    options_en: ["Vitamin K", "Vitamin A", "Vitamin C", "Vitamin D"],
    options_hi: ["विटामिन K", "विटामिन A", "विटामिन C", "विटामिन D"],
    answer_en: "Vitamin K",
    answer_hi: "विटामिन K",
    attempted: false,
    selected: ""
  },
  {
    num: 42,
    question_en: "Which Indian city is known as the Manchester of India?",
    question_hi: "भारत का मैनचेस्टर किस शहर को कहा जाता है?",
    options_en: ["Mumbai", "Ahmedabad", "Kanpur", "Surat"],
    options_hi: ["मुंबई", "अहमदाबाद", "कानपुर", "सूरत"],
    answer_en: "Ahmedabad",
    answer_hi: "अहमदाबाद",
    attempted: false,
    selected: ""
  },
  {
    num: 43,
    question_en: "Who presides over the Lok Sabha?",
    question_hi: "लोकसभा की अध्यक्षता कौन करता है?",
    options_en: ["President", "Vice President", "Speaker", "Prime Minister"],
    options_hi: ["राष्ट्रपति", "उपराष्ट्रपति", "स्पीकर", "प्रधानमंत्री"],
    answer_en: "Speaker",
    answer_hi: "स्पीकर",
    attempted: false,
    selected: ""
  },
  {
    num: 44,
    question_en: "Which gas is known as marsh gas?",
    question_hi: "मार्श गैस किसे कहा जाता है?",
    options_en: ["Methane", "Ethane", "Propane", "Butane"],
    options_hi: ["मीथेन", "एथेन", "प्रोपेन", "ब्यूटेन"],
    answer_en: "Methane",
    answer_hi: "मीथेन",
    attempted: false,
    selected: ""
  },
  {
    num: 45,
    question_en: "Which Indian state is the largest producer of coffee?",
    question_hi: "भारत में कॉफी का सबसे बड़ा उत्पादक राज्य कौन सा है?",
    options_en: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    options_hi: ["केरल", "तमिलनाडु", "कर्नाटक", "आंध्र प्रदेश"],
    answer_en: "Karnataka",
    answer_hi: "कर्नाटक",
    attempted: false,
    selected: ""
  },
  {
    num: 46,
    question_en: "Who gave the slogan 'Jai Jawan Jai Kisan'?",
    question_hi: "'जय जवान जय किसान' का नारा किसने दिया?",
    options_en: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Subhash Bose"],
    options_hi: ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "सुभाष बोस"],
    answer_en: "Lal Bahadur Shastri",
    answer_hi: "लाल बहादुर शास्त्री",
    attempted: false,
    selected: ""
  },
  {
    num: 47,
    question_en: "Which is the longest mountain range in the world?",
    question_hi: "विश्व की सबसे लंबी पर्वत श्रृंखला कौन सी है?",
    options_en: ["Himalayas", "Andes", "Rockies", "Alps"],
    options_hi: ["हिमालय", "एंडीज़", "रॉकीज़", "आल्प्स"],
    answer_en: "Andes",
    answer_hi: "एंडीज़",
    attempted: false,
    selected: ""
  },
  {
    num: 48,
    question_en: "Which Indian state has the largest forest area?",
    question_hi: "भारत में सबसे अधिक वन क्षेत्र किस राज्य का है?",
    options_en: ["Madhya Pradesh", "Arunachal Pradesh", "Chhattisgarh", "Odisha"],
    options_hi: ["मध्य प्रदेश", "अरुणाचल प्रदेश", "छत्तीसगढ़", "ओडिशा"],
    answer_en: "Madhya Pradesh",
    answer_hi: "मध्य प्रदेश",
    attempted: false,
    selected: ""
  },
  {
    num: 49,
    question_en: "Which part of the eye controls the amount of light entering?",
    question_hi: "आंख का कौन सा भाग प्रकाश की मात्रा नियंत्रित करता है?",
    options_en: ["Retina", "Cornea", "Iris", "Lens"],
    options_hi: ["रेटिना", "कॉर्निया", "आइरिस", "लेंस"],
    answer_en: "Iris",
    answer_hi: "आइरिस",
    attempted: false,
    selected: ""
  },
  {
    num: 50,
    question_en: "Which Indian satellite was the first?",
    question_hi: "भारत का पहला उपग्रह कौन सा था?",
    options_en: ["INSAT-1A", "Aryabhata", "Rohini", "Bhaskara"],
    options_hi: ["इंसैट-1A", "आर्यभट्ट", "रोहिणी", "भास्कर"],
    answer_en: "Aryabhata",
    answer_hi: "आर्यभट्ट",
    attempted: false,
    selected: ""
  }
]


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