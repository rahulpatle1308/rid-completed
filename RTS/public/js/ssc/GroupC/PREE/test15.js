const questions = [
 {
  num: 1,
  question_en: "Who is the head of the Government of India?",
  question_hi: "भारत सरकार का प्रमुख कौन होता है?",
  options_en: ["President", "Prime Minister", "Chief Justice", "Speaker of Lok Sabha"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "लोकसभा अध्यक्ष"],
  answer_en: "Prime Minister",
  answer_hi: "प्रधानमंत्री",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Which article of the Indian Constitution deals with the Fundamental Duties?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद मौलिक कर्तव्यों से संबंधित है?",
  options_en: ["Article 40", "Article 50", "Article 51A", "Article 61"],
  options_hi: ["अनुच्छेद 40", "अनुच्छेद 50", "अनुच्छेद 51A", "अनुच्छेद 61"],
  answer_en: "Article 51A",
  answer_hi: "अनुच्छेद 51A",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the minimum age to become a member of Rajya Sabha?",
  question_hi: "राज्यसभा का सदस्य बनने के लिए न्यूनतम आयु कितनी होनी चाहिए?",
  options_en: ["25 years", "30 years", "35 years", "40 years"],
  options_hi: ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"],
  answer_en: "30 years",
  answer_hi: "30 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Which article of the Constitution provides for the establishment of Supreme Court?",
  question_hi: "संविधान का कौन सा अनुच्छेद सर्वोच्च न्यायालय की स्थापना का प्रावधान करता है?",
  options_en: ["Article 124", "Article 143", "Article 226", "Article 32"],
  options_hi: ["अनुच्छेद 124", "अनुच्छेद 143", "अनुच्छेद 226", "अनुच्छेद 32"],
  answer_en: "Article 124",
  answer_hi: "अनुच्छेद 124",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Who presides over the joint sitting of both Houses of Parliament?",
  question_hi: "संसद के दोनों सदनों की संयुक्त बैठक की अध्यक्षता कौन करता है?",
  options_en: ["President", "Prime Minister", "Speaker of Lok Sabha", "Vice President"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "लोकसभा अध्यक्ष", "उपराष्ट्रपति"],
  answer_en: "Speaker of Lok Sabha",
  answer_hi: "लोकसभा अध्यक्ष",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Which schedule of the Constitution contains the list of recognized languages?",
  question_hi: "संविधान की कौन सी अनुसूची में मान्यता प्राप्त भाषाओं की सूची है?",
  options_en: ["6th Schedule", "7th Schedule", "8th Schedule", "9th Schedule"],
  options_hi: ["6वीं अनुसूची", "7वीं अनुसूची", "8वीं अनुसूची", "9वीं अनुसूची"],
  answer_en: "8th Schedule",
  answer_hi: "8वीं अनुसूची",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "The concept of 'Judicial Review' in India is borrowed from which country?",
  question_hi: "भारत में 'न्यायिक समीक्षा' की अवधारणा किस देश से ली गई है?",
  options_en: ["USA", "UK", "Canada", "Australia"],
  options_hi: ["यूएसए", "यूके", "कनाडा", "ऑस्ट्रेलिया"],
  answer_en: "USA",
  answer_hi: "यूएसए",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which constitutional amendment introduced the Anti-Defection Law?",
  question_hi: "किस संविधान संशोधन ने दल-बदल विरोधी कानून पेश किया?",
  options_en: ["42nd Amendment", "52nd Amendment", "61st Amendment", "73rd Amendment"],
  options_hi: ["42वां संशोधन", "52वां संशोधन", "61वां संशोधन", "73वां संशोधन"],
  answer_en: "52nd Amendment",
  answer_hi: "52वां संशोधन",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Who appoints the Chief Justice of India?",
  question_hi: "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
  options_en: ["President", "Prime Minister", "Law Minister", "Supreme Court Collegium"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "कानून मंत्री", "सर्वोच्च न्यायालय का कॉलेजियम"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which article deals with the Right to Constitutional Remedies?",
  question_hi: "कौन सा अनुच्छेद संवैधानिक उपचारों के अधिकार से संबंधित है?",
  options_en: ["Article 32", "Article 226", "Article 136", "Article 142"],
  options_hi: ["अनुच्छेद 32", "अनुच्छेद 226", "अनुच्छेद 136", "अनुच्छेद 142"],
  answer_en: "Article 32",
  answer_hi: "अनुच्छेद 32",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "What is the term of office of the Vice President of India?",
  question_hi: "भारत के उपराष्ट्रपति का कार्यकाल कितना होता है?",
  options_en: ["4 years", "5 years", "6 years", "7 years"],
  options_hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
  answer_en: "5 years",
  answer_hi: "5 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which constitutional body is responsible for conducting elections in India?",
  question_hi: "भारत में चुनाव कराने के लिए कौन सा संवैधानिक निकाय जिम्मेदार है?",
  options_en: ["Election Commission", "UPSC", "Finance Commission", "Planning Commission"],
  options_hi: ["चुनाव आयोग", "यूपीएससी", "वित्त आयोग", "योजना आयोग"],
  answer_en: "Election Commission",
  answer_hi: "चुनाव आयोग",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "The 'National Emergency' under Article 352 can be declared on which grounds?",
  question_hi: "अनुच्छेद 352 के तहत 'राष्ट्रीय आपातकाल' किस आधार पर घोषित किया जा सकता है?",
  options_en: ["War, external aggression or armed rebellion", "Financial crisis", "Constitutional breakdown", "Natural calamity"],
  options_hi: ["युद्ध, बाहरी आक्रमण या सशस्त्र विद्रोह", "वित्तीय संकट", "संवैधानिक विघटन", "प्राकृतिक आपदा"],
  answer_en: "War, external aggression or armed rebellion",
  answer_hi: "युद्ध, बाहरी आक्रमण या सशस्त्र विद्रोह",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Who can remove the Governor of a state?",
  question_hi: "राज्य के राज्यपाल को कौन हटा सकता है?",
  options_en: ["President", "Prime Minister", "Chief Minister", "State Legislature"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "मुख्यमंत्री", "राज्य विधानमंडल"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which article provides for the establishment of Finance Commission?",
  question_hi: "कौन सा अनुच्छेद वित्त आयोग की स्थापना का प्रावधान करता है?",
  options_en: ["Article 280", "Article 360", "Article 262", "Article 243"],
  options_hi: ["अनुच्छेद 280", "अनुच्छेद 360", "अनुच्छेद 262", "अनुच्छेद 243"],
  answer_en: "Article 280",
  answer_hi: "अनुच्छेद 280",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "What is the maximum gap allowed between two sessions of Parliament?",
  question_hi: "संसद के दो सत्रों के बीच अधिकतम कितना अंतराल अनुमत है?",
  options_en: ["3 months", "6 months", "9 months", "12 months"],
  options_hi: ["3 महीने", "6 महीने", "9 महीने", "12 महीने"],
  answer_en: "6 months",
  answer_hi: "6 महीने",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Which writ is issued by a court to inquire into the legality of a person's detention?",
  question_hi: "किसी व्यक्ति की नजरबंदी की वैधता की जांच के लिए न्यायालय द्वारा कौन सा रिट जारी किया जाता है?",
  options_en: ["Habeas Corpus", "Mandamus", "Certiorari", "Quo Warranto"],
  options_hi: ["बंदी प्रत्यक्षीकरण", "परमादेश", "उत्प्रेषण", "अधिकार पृच्छा"],
  answer_en: "Habeas Corpus",
  answer_hi: "बंदी प्रत्यक्षीकरण",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Who is the ex-officio Chairman of Rajya Sabha?",
  question_hi: "राज्यसभा का पदेन अध्यक्ष कौन होता है?",
  options_en: ["President", "Vice President", "Prime Minister", "Speaker"],
  options_hi: ["राष्ट्रपति", "उपराष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष"],
  answer_en: "Vice President",
  answer_hi: "उपराष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Which constitutional amendment reduced the voting age from 21 to 18 years?",
  question_hi: "किस संविधान संशोधन ने मतदान की आयु 21 से घटाकर 18 वर्ष कर दी?",
  options_en: ["61st Amendment", "42nd Amendment", "73rd Amendment", "86th Amendment"],
  options_hi: ["61वां संशोधन", "42वां संशोधन", "73वां संशोधन", "86वां संशोधन"],
  answer_en: "61st Amendment",
  answer_hi: "61वां संशोधन",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which article deals with the impeachment of the President?",
  question_hi: "राष्ट्रपति के महाभियोग से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 61", "Article 74", "Article 352", "Article 356"],
  options_hi: ["अनुच्छेद 61", "अनुच्छेद 74", "अनुच्छेद 352", "अनुच्छेद 356"],
  answer_en: "Article 61",
  answer_hi: "अनुच्छेद 61",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "The 'Doctrine of Basic Structure' was propounded by the Supreme Court in which case?",
  question_hi: "'मूल संरचना सिद्धांत' सर्वोच्च न्यायालय ने किस मामले में प्रतिपादित किया था?",
  options_en: ["Kesavananda Bharati case", "Golak Nath case", "Maneka Gandhi case", "Minerva Mills case"],
  options_hi: ["केसवानंद भारती मामला", "गोलक नाथ मामला", "मेनका गांधी मामला", "मिनर्वा मिल्स मामला"],
  answer_en: "Kesavananda Bharati case",
  answer_hi: "केसवानंद भारती मामला",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Who administers the oath of office to the President of India?",
  question_hi: "भारत के राष्ट्रपति को पद की शपथ कौन दिलाता है?",
  options_en: ["Chief Justice of India", "Vice President", "Prime Minister", "Speaker of Lok Sabha"],
  options_hi: ["भारत के मुख्य न्यायाधीश", "उपराष्ट्रपति", "प्रधानमंत्री", "लोकसभा अध्यक्ष"],
  answer_en: "Chief Justice of India",
  answer_hi: "भारत के मुख्य न्यायाधीश",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Which article provides for the establishment of High Courts?",
  question_hi: "कौन सा अनुच्छेद उच्च न्यायालयों की स्थापना का प्रावधान करता है?",
  options_en: ["Article 214", "Article 226", "Article 231", "Article 241"],
  options_hi: ["अनुच्छेद 214", "अनुच्छेद 226", "अनुच्छेद 231", "अनुच्छेद 241"],
  answer_en: "Article 214",
  answer_hi: "अनुच्छेद 214",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "The 'Money Bill' can be introduced only in:",
  question_hi: "'धन विधेयक' केवल कहां पेश किया जा सकता है?",
  options_en: ["Lok Sabha", "Rajya Sabha", "Either House", "Joint Session"],
  options_hi: ["लोकसभा", "राज्यसभा", "किसी भी सदन में", "संयुक्त सत्र"],
  answer_en: "Lok Sabha",
  answer_hi: "लोकसभा",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which constitutional amendment introduced the Panchayati Raj system?",
  question_hi: "किस संविधान संशोधन ने पंचायती राज व्यवस्था शुरू की?",
  options_en: ["73rd Amendment", "74th Amendment", "42nd Amendment", "61st Amendment"],
  options_hi: ["73वां संशोधन", "74वां संशोधन", "42वां संशोधन", "61वां संशोधन"],
  answer_en: "73rd Amendment",
  answer_hi: "73वां संशोधन",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Who is the guardian of the Fundamental Rights in India?",
  question_hi: "भारत में मौलिक अधिकारों का संरक्षक कौन है?",
  options_en: ["President", "Supreme Court", "Parliament", "Prime Minister"],
  options_hi: ["राष्ट्रपति", "सर्वोच्च न्यायालय", "संसद", "प्रधानमंत्री"],
  answer_en: "Supreme Court",
  answer_hi: "सर्वोच्च न्यायालय",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which article deals with the Directive Principles of State Policy?",
  question_hi: "कौन सा अनुच्छेद राज्य के नीति निर्देशक सिद्धांतों से संबंधित है?",
  options_en: ["Articles 36-51", "Articles 14-35", "Articles 52-78", "Articles 79-122"],
  options_hi: ["अनुच्छेद 36-51", "अनुच्छेद 14-35", "अनुच्छेद 52-78", "अनुच्छेद 79-122"],
  answer_en: "Articles 36-51",
  answer_hi: "अनुच्छेद 36-51",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "The 'President's Rule' in a state is imposed under which article?",
  question_hi: "राज्य में 'राष्ट्रपति शासन' किस अनुच्छेद के तहत लगाया जाता है?",
  options_en: ["Article 352", "Article 356", "Article 360", "Article 370"],
  options_hi: ["अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 360", "अनुच्छेद 370"],
  answer_en: "Article 356",
  answer_hi: "अनुच्छेद 356",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Who has the power to pardon a death sentence?",
  question_hi: "मृत्युदंड को माफ करने की शक्ति किसके पास है?",
  options_en: ["President", "Prime Minister", "Chief Justice", "Governor"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "मुख्य न्यायाधीश", "राज्यपाल"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which constitutional body advises the President on matters related to the appointment of judges?",
  question_hi: "कौन सा संवैधानिक निकाय न्यायाधीशों की नियुक्ति से संबंधित मामलों पर राष्ट्रपति को सलाह देता है?",
  options_en: ["Supreme Court Collegium", "Law Commission", "Ministry of Law", "Parliamentary Committee"],
  options_hi: ["सर्वोच्च न्यायालय कॉलेजियम", "विधि आयोग", "कानून मंत्रालय", "संसदीय समिति"],
  answer_en: "Supreme Court Collegium",
  answer_hi: "सर्वोच्च न्यायालय कॉलेजियम",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "The concept of 'Single Citizenship' in India is borrowed from which country?",
  question_hi: "भारत में 'एकल नागरिकता' की अवधारणा किस देश से ली गई है?",
  options_en: ["UK", "USA", "Canada", "Australia"],
  options_hi: ["यूके", "यूएसए", "कनाडा", "ऑस्ट्रेलिया"],
  answer_en: "UK",
  answer_hi: "यूके",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which article deals with the abolition of untouchability?",
  question_hi: "कौन सा अनुच्छेद अस्पृश्यता के उन्मूलन से संबंधित है?",
  options_en: ["Article 15", "Article 16", "Article 17", "Article 18"],
  options_hi: ["अनुच्छेद 15", "अनुच्छेद 16", "अनुच्छेद 17", "अनुच्छेद 18"],
  answer_en: "Article 17",
  answer_hi: "अनुच्छेद 17",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Who is the head of the Council of Ministers in a state?",
  question_hi: "राज्य में मंत्रिपरिषद का प्रमुख कौन होता है?",
  options_en: ["Governor", "Chief Minister", "Speaker", "Chief Justice of High Court"],
  options_hi: ["राज्यपाल", "मुख्यमंत्री", "अध्यक्ष", "उच्च न्यायालय के मुख्य न्यायाधीश"],
  answer_en: "Chief Minister",
  answer_hi: "मुख्यमंत्री",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which schedule contains the provisions for administration of tribal areas?",
  question_hi: "कौन सी अनुसूची जनजातीय क्षेत्रों के प्रशासन के प्रावधानों को शामिल करती है?",
  options_en: ["5th Schedule", "6th Schedule", "7th Schedule", "8th Schedule"],
  options_hi: ["5वीं अनुसूची", "6वीं अनुसूची", "7वीं अनुसूची", "8वीं अनुसूची"],
  answer_en: "6th Schedule",
  answer_hi: "6वीं अनुसूची",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "The 'Right to Education' was added to Fundamental Rights by which constitutional amendment?",
  question_hi: "'शिक्षा का अधिकार' किस संविधान संशोधन द्वारा मौलिक अधिकारों में जोड़ा गया था?",
  options_en: ["86th Amendment", "93rd Amendment", "44th Amendment", "52nd Amendment"],
  options_hi: ["86वां संशोधन", "93वां संशोधन", "44वां संशोधन", "52वां संशोधन"],
  answer_en: "86th Amendment",
  answer_hi: "86वां संशोधन",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which article provides for the establishment of the Attorney General of India?",
  question_hi: "कौन सा अनुच्छेद भारत के महान्यायवादी की स्थापना का प्रावधान करता है?",
  options_en: ["Article 76", "Article 143", "Article 148", "Article 165"],
  options_hi: ["अनुच्छेद 76", "अनुच्छेद 143", "अनुच्छेद 148", "अनुच्छेद 165"],
  answer_en: "Article 76",
  answer_hi: "अनुच्छेद 76",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "The 'Zero Hour' in Parliament starts at:",
  question_hi: "संसद में 'शून्य काल' किस समय शुरू होता है?",
  options_en: ["9:00 AM", "12:00 Noon", "2:00 PM", "4:00 PM"],
  options_hi: ["सुबह 9:00 बजे", "दोपहर 12:00 बजे", "दोपहर 2:00 बजे", "शाम 4:00 बजे"],
  answer_en: "12:00 Noon",
  answer_hi: "दोपहर 12:00 बजे",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which constitutional body is responsible for auditing government accounts?",
  question_hi: "सरकारी खातों के लेखा परीक्षण के लिए कौन सा संवैधानिक निकाय जिम्मेदार है?",
  options_en: ["Comptroller and Auditor General", "Finance Commission", "Reserve Bank of India", "Central Vigilance Commission"],
  options_hi: ["नियंत्रक और महालेखा परीक्षक", "वित्त आयोग", "भारतीय रिजर्व बैंक", "केंद्रीय सतर्कता आयोग"],
  answer_en: "Comptroller and Auditor General",
  answer_hi: "नियंत्रक और महालेखा परीक्षक",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "The 'National Human Rights Commission' was established under which act?",
  question_hi: "'राष्ट्रीय मानवाधिकार आयोग' किस अधिनियम के तहत स्थापित किया गया था?",
  options_en: ["Protection of Human Rights Act, 1993", "Human Rights Commission Act, 1991", "National Human Rights Act, 1995", "Human Rights Protection Act, 1990"],
  options_hi: ["मानवाधिकार संरक्षण अधिनियम, 1993", "मानवाधिकार आयोग अधिनियम, 1991", "राष्ट्रीय मानवाधिकार अधिनियम, 1995", "मानवाधिकार संरक्षण अधिनियम, 1990"],
  answer_en: "Protection of Human Rights Act, 1993",
  answer_hi: "मानवाधिकार संरक्षण अधिनियम, 1993",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which article deals with the right to form associations or unions?",
  question_hi: "संगठन या संघ बनाने के अधिकार से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 19(1)(c)", "Article 21", "Article 25", "Article 29"],
  options_hi: ["अनुच्छेद 19(1)(c)", "अनुच्छेद 21", "अनुच्छेद 25", "अनुच्छेद 29"],
  answer_en: "Article 19(1)(c)",
  answer_hi: "अनुच्छेद 19(1)(c)",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "The 'Council of States' is another name for:",
  question_hi: "'राज्यों की परिषद' का दूसरा नाम है:",
  options_en: ["Rajya Sabha", "Lok Sabha", "State Legislative Council", "Planning Commission"],
  options_hi: ["राज्यसभा", "लोकसभा", "राज्य विधान परिषद", "योजना आयोग"],
  answer_en: "Rajya Sabha",
  answer_hi: "राज्यसभा",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which article provides for the establishment of the National Commission for SCs and STs?",
  question_hi: "कौन सा अनुच्छेद एससी और एसटी के लिए राष्ट्रीय आयोग की स्थापना का प्रावधान करता है?",
  options_en: ["Article 338", "Article 340", "Article 342", "Article 344"],
  options_hi: ["अनुच्छेद 338", "अनुच्छेद 340", "अनुच्छेद 342", "अनुच्छेद 344"],
  answer_en: "Article 338",
  answer_hi: "अनुच्छेद 338",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Who has the power to summon and prorogue the sessions of Parliament?",
  question_hi: "संसद के सत्रों को आहूत करने और स्थगित करने की शक्ति किसके पास है?",
  options_en: ["President", "Prime Minister", "Speaker", "Vice President"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "अध्यक्ष", "उपराष्ट्रपति"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "The 'Right to Information Act' was passed in which year?",
  question_hi: "'सूचना का अधिकार अधिनियम' किस वर्ष पारित किया गया था?",
  options_en: ["2002", "2005", "2007", "2010"],
  options_hi: ["2002", "2005", "2007", "2010"],
  answer_en: "2005",
  answer_hi: "2005",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which article deals with the protection of interests of minorities?",
  question_hi: "अल्पसंख्यकों के हितों के संरक्षण से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 29", "Article 30", "Both Article 29 and 30", "Article 31"],
  options_hi: ["अनुच्छेद 29", "अनुच्छेद 30", "अनुच्छेद 29 और 30 दोनों", "अनुच्छेद 31"],
  answer_en: "Both Article 29 and 30",
  answer_hi: "अनुच्छेद 29 और 30 दोनों",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "The 'Lokpal and Lokayuktas Act' was passed in which year?",
  question_hi: "'लोकपाल और लोकायुक्त अधिनियम' किस वर्ष पारित किया गया था?",
  options_en: ["2011", "2013", "2015", "2017"],
  options_hi: ["2011", "2013", "2015", "2017"],
  answer_en: "2013",
  answer_hi: "2013",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which article deals with the appointment of the Prime Minister?",
  question_hi: "प्रधानमंत्री की नियुक्ति से कौन सा अनुच्छेद संबंधित है?",
  options_en: ["Article 74", "Article 75", "Article 76", "Article 77"],
  options_hi: ["अनुच्छेद 74", "अनुच्छेद 75", "अनुच्छेद 76", "अनुच्छेद 77"],
  answer_en: "Article 75",
  answer_hi: "अनुच्छेद 75",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "The 'National Green Tribunal' was established under which act?",
  question_hi: "'राष्ट्रीय हरित अधिकरण' किस अधिनियम के तहत स्थापित किया गया था?",
  options_en: ["National Green Tribunal Act, 2010", "Environmental Protection Act, 1986", "Water Act, 1974", "Air Act, 1981"],
  options_hi: ["राष्ट्रीय हरित अधिकरण अधिनियम, 2010", "पर्यावरण संरक्षण अधिनियम, 1986", "जल अधिनियम, 1974", "वायु अधिनियम, 1981"],
  answer_en: "National Green Tribunal Act, 2010",
  answer_hi: "राष्ट्रीय हरित अधिकरण अधिनियम, 2010",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which article provides for the establishment of the Inter-State Council?",
  question_hi: "कौन सा अनुच्छेद अंतर-राज्यीय परिषद की स्थापना का प्रावधान करता है?",
  options_en: ["Article 263", "Article 280", "Article 352", "Article 356"],
  options_hi: ["अनुच्छेद 263", "अनुच्छेद 280", "अनुच्छेद 352", "अनुच्छेद 356"],
  answer_en: "Article 263",
  answer_hi: "अनुच्छेद 263",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "The 'National Commission for Women' was established in which year?",
  question_hi: "'राष्ट्रीय महिला आयोग' किस वर्ष स्थापित किया गया था?",
  options_en: ["1990", "1992", "1995", "1997"],
  options_hi: ["1990", "1992", "1995", "1997"],
  answer_en: "1992",
  answer_hi: "1992",
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