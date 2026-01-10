const questions = [
  {
  num: 1,
  question_en: "Who is known as the 'Father of the Indian Constitution'?",
  question_hi: "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी. आर. अंबेडकर", "सरदार पटेल"],
  answer_en: "B. R. Ambedkar",
  answer_hi: "बी. आर. अंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "How many articles are there in the Indian Constitution?",
  question_hi: "भारतीय संविधान में कितने अनुच्छेद हैं?",
  options_en: ["395", "444", "448", "470"],
  options_hi: ["395", "444", "448", "470"],
  answer_en: "448",
  answer_hi: "448",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Which article of the Indian Constitution deals with the President's power to grant pardons?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद राष्ट्रपति की क्षमादान शक्ति से संबंधित है?",
  options_en: ["Article 72", "Article 74", "Article 76", "Article 78"],
  options_hi: ["अनुच्छेद 72", "अनुच्छेद 74", "अनुच्छेद 76", "अनुच्छेद 78"],
  answer_en: "Article 72",
  answer_hi: "अनुच्छेद 72",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Who appoints the Chief Justice of India?",
  question_hi: "भारत के मुख्य न्यायाधीश की नियुक्ति कौन करता है?",
  options_en: ["Prime Minister", "President", "Parliament", "Supreme Court"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "संसद", "सर्वोच्च न्यायालय"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which schedule of the Indian Constitution contains the list of recognized languages?",
  question_hi: "भारतीय संविधान की कौन सी अनुसूची में मान्यता प्राप्त भाषाओं की सूची शामिल है?",
  options_en: ["7th Schedule", "8th Schedule", "9th Schedule", "10th Schedule"],
  options_hi: ["7वीं अनुसूची", "8वीं अनुसूची", "9वीं अनुसूची", "10वीं अनुसूची"],
  answer_en: "8th Schedule",
  answer_hi: "8वीं अनुसूची",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the minimum age to become the President of India?",
  question_hi: "भारत का राष्ट्रपति बनने की न्यूनतम आयु कितनी है?",
  options_en: ["30 years", "35 years", "40 years", "45 years"],
  options_hi: ["30 वर्ष", "35 वर्ष", "40 वर्ष", "45 वर्ष"],
  answer_en: "35 years",
  answer_hi: "35 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which article of the Indian Constitution deals with the Right to Equality?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद समानता के अधिकार से संबंधित है?",
  options_en: ["Article 14", "Article 19", "Article 21", "Article 32"],
  options_hi: ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"],
  answer_en: "Article 14",
  answer_hi: "अनुच्छेद 14",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Who is the head of the Union Executive in India?",
  question_hi: "भारत में संघीय कार्यपालिका का प्रमुख कौन होता है?",
  options_en: ["Prime Minister", "President", "Chief Justice", "Speaker"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "मुख्य न्यायाधीश", "अध्यक्ष"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "How many fundamental rights are guaranteed by the Indian Constitution?",
  question_hi: "भारतीय संविधान द्वारा कितने मौलिक अधिकारों की गारंटी दी गई है?",
  options_en: ["5", "6", "7", "8"],
  options_hi: ["5", "6", "7", "8"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which article of the Indian Constitution deals with the Right to Freedom of Religion?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद धर्म की स्वतंत्रता के अधिकार से संबंधित है?",
  options_en: ["Article 25", "Article 29", "Article 30", "Article 32"],
  options_hi: ["अनुच्छेद 25", "अनुच्छेद 29", "अनुच्छेद 30", "अनुच्छेद 32"],
  answer_en: "Article 25",
  answer_hi: "अनुच्छेद 25",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Who is the chairman of the Rajya Sabha?",
  question_hi: "राज्यसभा का अध्यक्ष कौन होता है?",
  options_en: ["Prime Minister", "President", "Vice President", "Speaker"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "उपराष्ट्रपति", "अध्यक्ष"],
  answer_en: "Vice President",
  answer_hi: "उपराष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which article of the Indian Constitution deals with the Fundamental Duties?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद मौलिक कर्तव्यों से संबंधित है?",
  options_en: ["Article 50", "Article 51A", "Article 52", "Article 53"],
  options_hi: ["अनुच्छेद 50", "अनुच्छेद 51A", "अनुच्छेद 52", "अनुच्छेद 53"],
  answer_en: "Article 51A",
  answer_hi: "अनुच्छेद 51A",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the term of office of a Rajya Sabha member?",
  question_hi: "राज्यसभा सदस्य का कार्यकाल कितना होता है?",
  options_en: ["4 years", "5 years", "6 years", "7 years"],
  options_hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
  answer_en: "6 years",
  answer_hi: "6 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which article of the Indian Constitution deals with the appointment of the Prime Minister?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद प्रधानमंत्री की नियुक्ति से संबंधित है?",
  options_en: ["Article 74", "Article 75", "Article 76", "Article 77"],
  options_hi: ["अनुच्छेद 74", "अनुच्छेद 75", "अनुच्छेद 76", "अनुच्छेद 77"],
  answer_en: "Article 75",
  answer_hi: "अनुच्छेद 75",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Who is the constitutional head of the state government?",
  question_hi: "राज्य सरकार का संवैधानिक प्रमुख कौन होता है?",
  options_en: ["Chief Minister", "Governor", "President", "Prime Minister"],
  options_hi: ["मुख्यमंत्री", "राज्यपाल", "राष्ट्रपति", "प्रधानमंत्री"],
  answer_en: "Governor",
  answer_hi: "राज्यपाल",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which article of the Indian Constitution deals with the Right to Constitutional Remedies?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद संवैधानिक उपचारों के अधिकार से संबंधित है?",
  options_en: ["Article 30", "Article 32", "Article 35", "Article 37"],
  options_hi: ["अनुच्छेद 30", "अनुच्छेद 32", "अनुच्छेद 35", "अनुच्छेद 37"],
  answer_en: "Article 32",
  answer_hi: "अनुच्छेद 32",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the minimum age to become a member of Lok Sabha?",
  question_hi: "लोकसभा का सदस्य बनने की न्यूनतम आयु कितनी है?",
  options_en: ["21 years", "25 years", "30 years", "35 years"],
  options_hi: ["21 वर्ष", "25 वर्ष", "30 वर्ष", "35 वर्ष"],
  answer_en: "25 years",
  answer_hi: "25 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which article of the Indian Constitution deals with the Election Commission?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद चुनाव आयोग से संबंधित है?",
  options_en: ["Article 324", "Article 325", "Article 326", "Article 327"],
  options_hi: ["अनुच्छेद 324", "अनुच्छेद 325", "अनुच्छेद 326", "अनुच्छेद 327"],
  answer_en: "Article 324",
  answer_hi: "अनुच्छेद 324",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Who is the chief executive authority of a state?",
  question_hi: "राज्य की मुख्य कार्यकारी प्राधिकारी कौन होता है?",
  options_en: ["Governor", "Chief Minister", "President", "Prime Minister"],
  options_hi: ["राज्यपाल", "मुख्यमंत्री", "राष्ट्रपति", "प्रधानमंत्री"],
  answer_en: "Chief Minister",
  answer_hi: "मुख्यमंत्री",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which article of the Indian Constitution deals with the Directive Principles of State Policy?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद राज्य के नीति निर्देशक सिद्धांतों से संबंधित है?",
  options_en: ["Article 36-51", "Article 32-35", "Article 52-78", "Article 79-122"],
  options_hi: ["अनुच्छेद 36-51", "अनुच्छेद 32-35", "अनुच्छेद 52-78", "अनुच्छेद 79-122"],
  answer_en: "Article 36-51",
  answer_hi: "अनुच्छेद 36-51",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is the term of office of the President of India?",
  question_hi: "भारत के राष्ट्रपति का कार्यकाल कितना होता है?",
  options_en: ["4 years", "5 years", "6 years", "7 years"],
  options_hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
  answer_en: "5 years",
  answer_hi: "5 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which article of the Indian Constitution deals with the Supreme Court?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद सर्वोच्च न्यायालय से संबंधित है?",
  options_en: ["Article 124", "Article 132", "Article 143", "Article 148"],
  options_hi: ["अनुच्छेद 124", "अनुच्छेद 132", "अनुच्छेद 143", "अनुच्छेद 148"],
  answer_en: "Article 124",
  answer_hi: "अनुच्छेद 124",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Who can dissolve the Lok Sabha?",
  question_hi: "लोकसभा को कौन भंग कर सकता है?",
  options_en: ["Prime Minister", "President", "Speaker", "Chief Justice"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "अध्यक्ष", "मुख्य न्यायाधीश"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which article of the Indian Constitution deals with the Emergency provisions?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद आपातकालीन प्रावधानों से संबंधित है?",
  options_en: ["Article 352", "Article 356", "Article 360", "All of these"],
  options_hi: ["अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 360", "ये सभी"],
  answer_en: "All of these",
  answer_hi: "ये सभी",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is the minimum age to become a member of Rajya Sabha?",
  question_hi: "राज्यसभा का सदस्य बनने की न्यूनतम आयु कितनी है?",
  options_en: ["25 years", "30 years", "35 years", "40 years"],
  options_hi: ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"],
  answer_en: "30 years",
  answer_hi: "30 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which article of the Indian Constitution deals with the Right to Education?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद शिक्षा के अधिकार से संबंधित है?",
  options_en: ["Article 21A", "Article 45", "Article 46", "Article 51A"],
  options_hi: ["अनुच्छेद 21A", "अनुच्छेद 45", "अनुच्छेद 46", "अनुच्छेद 51A"],
  answer_en: "Article 21A",
  answer_hi: "अनुच्छेद 21A",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Who is the ex-officio chairman of the Planning Commission (now NITI Aayog)?",
  question_hi: "योजना आयोग (अब नीति आयोग) का पदेन अध्यक्ष कौन होता है?",
  options_en: ["President", "Prime Minister", "Finance Minister", "Home Minister"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्री", "गृह मंत्री"],
  answer_en: "Prime Minister",
  answer_hi: "प्रधानमंत्री",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Which article of the Indian Constitution deals with the High Courts?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद उच्च न्यायालयों से संबंधित है?",
  options_en: ["Article 214", "Article 215", "Article 226", "Article 227"],
  options_hi: ["अनुच्छेद 214", "अनुच्छेद 215", "अनुच्छेद 226", "अनुच्छेद 227"],
  answer_en: "Article 214",
  answer_hi: "अनुच्छेद 214",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the maximum strength of the Lok Sabha?",
  question_hi: "लोकसभा की अधिकतम सदस्य संख्या कितनी है?",
  options_en: ["525", "545", "552", "565"],
  options_hi: ["525", "545", "552", "565"],
  answer_en: "552",
  answer_hi: "552",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which article of the Indian Constitution deals with the Right against Exploitation?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद शोषण के विरुद्ध अधिकार से संबंधित है?",
  options_en: ["Article 23", "Article 24", "Article 25", "Both A and B"],
  options_hi: ["अनुच्छेद 23", "अनुच्छेद 24", "अनुच्छेद 25", "A और B दोनों"],
  answer_en: "Both A and B",
  answer_hi: "A और B दोनों",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Who appoints the Governor of a state?",
  question_hi: "राज्य के राज्यपाल की नियुक्ति कौन करता है?",
  options_en: ["Chief Minister", "President", "Prime Minister", "State Legislature"],
  options_hi: ["मुख्यमंत्री", "राष्ट्रपति", "प्रधानमंत्री", "राज्य विधानमंडल"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which article of the Indian Constitution deals with the Union Public Service Commission?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद संघ लोक सेवा आयोग से संबंधित है?",
  options_en: ["Article 315", "Article 320", "Article 323", "Article 324"],
  options_hi: ["अनुच्छेद 315", "अनुच्छेद 320", "अनुच्छेद 323", "अनुच्छेद 324"],
  answer_en: "Article 315",
  answer_hi: "अनुच्छेद 315",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the maximum strength of the Rajya Sabha?",
  question_hi: "राज्यसभा की अधिकतम सदस्य संख्या कितनी है?",
  options_en: ["230", "238", "245", "250"],
  options_hi: ["230", "238", "245", "250"],
  answer_en: "250",
  answer_hi: "250",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which article of the Indian Constitution deals with the Official Language?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद राजभाषा से संबंधित है?",
  options_en: ["Article 343", "Article 344", "Article 345", "Article 346"],
  options_hi: ["अनुच्छेद 343", "अनुच्छेद 344", "अनुच्छेद 345", "अनुच्छेद 346"],
  answer_en: "Article 343",
  answer_hi: "अनुच्छेद 343",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Who is the head of the Council of Ministers?",
  question_hi: "मंत्रिपरिषद का प्रमुख कौन होता है?",
  options_en: ["President", "Prime Minister", "Home Minister", "Defence Minister"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "गृह मंत्री", "रक्षा मंत्री"],
  answer_en: "Prime Minister",
  answer_hi: "प्रधानमंत्री",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which article of the Indian Constitution deals with the Comptroller and Auditor General?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद नियंत्रक एवं महालेखापरीक्षक से संबंधित है?",
  options_en: ["Article 148", "Article 149", "Article 150", "Article 151"],
  options_hi: ["अनुच्छेद 148", "अनुच्छेद 149", "अनुच्छेद 150", "अनुच्छेद 151"],
  answer_en: "Article 148",
  answer_hi: "अनुच्छेद 148",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the term of office of a Lok Sabha member?",
  question_hi: "लोकसभा सदस्य का कार्यकाल कितना होता है?",
  options_en: ["4 years", "5 years", "6 years", "Until dissolution"],
  options_hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "भंग होने तक"],
  answer_en: "5 years",
  answer_hi: "5 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which article of the Indian Constitution deals with the Right to Freedom of Speech and Expression?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद भाषण और अभिव्यक्ति की स्वतंत्रता के अधिकार से संबंधित है?",
  options_en: ["Article 19(1)(a)", "Article 19(1)(b)", "Article 19(1)(c)", "Article 19(1)(d)"],
  options_hi: ["अनुच्छेद 19(1)(a)", "अनुच्छेद 19(1)(b)", "अनुच्छेद 19(1)(c)", "अनुच्छेद 19(1)(d)"],
  answer_en: "Article 19(1)(a)",
  answer_hi: "अनुच्छेद 19(1)(a)",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Who is the head of the Indian State?",
  question_hi: "भारतीय राज्य का प्रमुख कौन होता है?",
  options_en: ["Prime Minister", "President", "Chief Justice", "Speaker"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "मुख्य न्यायाधीश", "अध्यक्ष"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which article of the Indian Constitution deals with the Attorney General of India?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद भारत के महान्यायवादी से संबंधित है?",
  options_en: ["Article 76", "Article 77", "Article 78", "Article 79"],
  options_hi: ["अनुच्छेद 76", "अनुच्छेद 77", "अनुच्छेद 78", "अनुच्छेद 79"],
  answer_en: "Article 76",
  answer_hi: "अनुच्छेद 76",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the maximum gap allowed between two sessions of Parliament?",
  question_hi: "संसद के दो सत्रों के बीच अधिकतम कितना अंतराल अनुमति है?",
  options_en: ["3 months", "4 months", "5 months", "6 months"],
  options_hi: ["3 महीने", "4 महीने", "5 महीने", "6 महीने"],
  answer_en: "6 months",
  answer_hi: "6 महीने",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Which article of the Indian Constitution deals with the Right to Life and Personal Liberty?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद जीवन और व्यक्तिगत स्वतंत्रता के अधिकार से संबंधित है?",
  options_en: ["Article 19", "Article 20", "Article 21", "Article 22"],
  options_hi: ["अनुच्छेद 19", "अनुच्छेद 20", "अनुच्छेद 21", "अनुच्छेद 22"],
  answer_en: "Article 21",
  answer_hi: "अनुच्छेद 21",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Who presides over the joint session of Parliament?",
  question_hi: "संसद के संयुक्त सत्र की अध्यक्षता कौन करता है?",
  options_en: ["President", "Vice President", "Speaker of Lok Sabha", "Prime Minister"],
  options_hi: ["राष्ट्रपति", "उपराष्ट्रपति", "लोकसभा अध्यक्ष", "प्रधानमंत्री"],
  answer_en: "Speaker of Lok Sabha",
  answer_hi: "लोकसभा अध्यक्ष",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Which article of the Indian Constitution deals with the Vice President?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद उपराष्ट्रपति से संबंधित है?",
  options_en: ["Article 63", "Article 64", "Article 65", "Article 66"],
  options_hi: ["अनुच्छेद 63", "अनुच्छेद 64", "अनुच्छेद 65", "अनुच्छेद 66"],
  answer_en: "Article 63",
  answer_hi: "अनुच्छेद 63",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the tenure of a Supreme Court judge?",
  question_hi: "सर्वोच्च न्यायालय के न्यायाधीश का कार्यकाल कितना होता है?",
  options_en: ["Till 60 years", "Till 62 years", "Till 65 years", "For life"],
  options_hi: ["60 वर्ष तक", "62 वर्ष तक", "65 वर्ष तक", "आजीवन"],
  answer_en: "Till 65 years",
  answer_hi: "65 वर्ष तक",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which article of the Indian Constitution deals with the Protection of Interests of Minorities?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद अल्पसंख्यकों के हितों की सुरक्षा से संबंधित है?",
  options_en: ["Article 29", "Article 30", "Article 31", "Both A and B"],
  options_hi: ["अनुच्छेद 29", "अनुच्छेद 30", "अनुच्छेद 31", "A और B दोनों"],
  answer_en: "Both A and B",
  answer_hi: "A और B दोनों",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Who is the chief spokesperson of the Government of India?",
  question_hi: "भारत सरकार के मुख्य प्रवक्ता कौन होते हैं?",
  options_en: ["President", "Prime Minister", "Finance Minister", "Home Minister"],
  options_hi: ["राष्ट्रपति", "प्रधानमंत्री", "वित्त मंत्री", "गृह मंत्री"],
  answer_en: "Prime Minister",
  answer_hi: "प्रधानमंत्री",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which article of the Indian Constitution deals with the Abolition of Untouchability?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद अस्पृश्यता के उन्मूलन से संबंधित है?",
  options_en: ["Article 15", "Article 16", "Article 17", "Article 18"],
  options_hi: ["अनुच्छेद 15", "अनुच्छेद 16", "अनुच्छेद 17", "अनुच्छेद 18"],
  answer_en: "Article 17",
  answer_hi: "अनुच्छेद 17",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the quorum required to hold a meeting of Lok Sabha?",
  question_hi: "लोकसभा की बैठक आयोजित करने के लिए आवश्यक कोरम कितना है?",
  options_en: ["One-tenth", "One-sixth", "One-fifth", "One-fourth"],
  options_hi: ["एक-दसवां", "एक-छठा", "एक-पांचवां", "एक-चौथाई"],
  answer_en: "One-tenth",
  answer_hi: "एक-दसवां",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which article of the Indian Constitution deals with the Prohibition of Child Labor?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद बाल श्रम के निषेध से संबंधित है?",
  options_en: ["Article 23", "Article 24", "Article 25", "Article 26"],
  options_hi: ["अनुच्छेद 23", "अनुच्छेद 24", "अनुच्छेद 25", "अनुच्छेद 26"],
  answer_en: "Article 24",
  answer_hi: "अनुच्छेद 24",
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