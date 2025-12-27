const questions = [
  {
  num: 1,
  question_en: "Who was the first Indian woman to become President of the Indian National Congress?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस की अध्यक्ष बनने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Sarojini Naidu", "Annie Besant", "Indira Gandhi", "Vijaya Lakshmi Pandit"],
  options_hi: ["सरोजिनी नायडू", "एनी बेसेंट", "इंदिरा गांधी", "विजया लक्ष्मी पंडित"],
  answer_en: "Annie Besant",
  answer_hi: "एनी बेसेंट",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "In which year did the Jallianwala Bagh massacre take place?",
  question_hi: "जलियांवाला बाग हत्याकांड किस वर्ष हुआ था?",
  options_en: ["1917", "1918", "1919", "1920"],
  options_hi: ["1917", "1918", "1919", "1920"],
  answer_en: "1919",
  answer_hi: "1919",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Who was the founder of the Gupta Empire?",
  question_hi: "गुप्त साम्राज्य के संस्थापक कौन थे?",
  options_en: ["Chandragupta I", "Samudragupta", "Chandragupta II", "Skandagupta"],
  options_hi: ["चंद्रगुप्त प्रथम", "समुद्रगुप्त", "चंद्रगुप्त द्वितीय", "स्कंदगुप्त"],
  answer_en: "Chandragupta I",
  answer_hi: "चंद्रगुप्त प्रथम",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Which Mughal emperor built the Red Fort in Delhi?",
  question_hi: "किस मुगल सम्राट ने दिल्ली में लाल किला बनवाया?",
  options_en: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
  options_hi: ["अकबर", "जहांगीर", "शाहजहाँ", "औरंगजेब"],
  answer_en: "Shah Jahan",
  answer_hi: "शाहजहाँ",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Who was the first Governor-General of independent India?",
  question_hi: "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
  options_en: ["Lord Mountbatten", "C. Rajagopalachari", "Lord Wavell", "Jawaharlal Nehru"],
  options_hi: ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "लॉर्ड वेवेल", "जवाहरलाल नेहरू"],
  answer_en: "Lord Mountbatten",
  answer_hi: "लॉर्ड माउंटबेटन",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "The famous ancient university of Nalanda was located in which present-day state?",
  question_hi: "प्रसिद्ध प्राचीन विश्वविद्यालय नालंदा वर्तमान किस राज्य में स्थित था?",
  options_en: ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "West Bengal"],
  options_hi: ["बिहार", "उत्तर प्रदेश", "मध्य प्रदेश", "पश्चिम बंगाल"],
  answer_en: "Bihar",
  answer_hi: "बिहार",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who wrote the book 'Poverty and Un-British Rule in India'?",
  question_hi: "'पॉवर्टी एंड अन-ब्रिटिश रूल इन इंडिया' पुस्तक किसने लिखी?",
  options_en: ["Dadabhai Naoroji", "R. C. Dutt", "M. G. Ranade", "Gopal Krishna Gokhale"],
  options_hi: ["दादाभाई नौरोजी", "आर. सी. दत्त", "एम. जी. रानाडे", "गोपाल कृष्ण गोखले"],
  answer_en: "Dadabhai Naoroji",
  answer_hi: "दादाभाई नौरोजी",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Which dynasty built the famous Khajuraho temples?",
  question_hi: "प्रसिद्ध खजुराहो मंदिरों का निर्माण किस वंश ने करवाया?",
  options_en: ["Chola", "Chandela", "Pallava", "Rashtrakuta"],
  options_hi: ["चोल", "चंदेल", "पल्लव", "राष्ट्रकूट"],
  answer_en: "Chandela",
  answer_hi: "चंदेल",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Who was the first Indian to win the Nobel Prize in Literature?",
  question_hi: "साहित्य में नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
  options_en: ["Rabindranath Tagore", "C. V. Raman", "Mother Teresa", "Amartya Sen"],
  options_hi: ["रबीन्द्रनाथ टैगोर", "सी. वी. रमन", "मदर टेरेसा", "अमर्त्य सेन"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रबीन्द्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "The Battle of Plassey was fought in which year?",
  question_hi: "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
  options_en: ["1757", "1764", "1772", "1780"],
  options_hi: ["1757", "1764", "1772", "1780"],
  answer_en: "1757",
  answer_hi: "1757",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Who founded the city of Jaipur?",
  question_hi: "जयपुर शहर की स्थापना किसने की?",
  options_en: ["Raja Man Singh", "Sawai Jai Singh II", "Raja Bharmal", "Maharaja Ram Singh"],
  options_hi: ["राजा मान सिंह", "सवाई जय सिंह द्वितीय", "राजा भारमल", "महाराजा राम सिंह"],
  answer_en: "Sawai Jai Singh II",
  answer_hi: "सवाई जय सिंह द्वितीय",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "The Indus Valley Civilization site of Lothal is located in which present-day state?",
  question_hi: "सिंधु घाटी सभ्यता का स्थल लोथल वर्तमान किस राज्य में स्थित है?",
  options_en: ["Punjab", "Gujarat", "Rajasthan", "Haryana"],
  options_hi: ["पंजाब", "गुजरात", "राजस्थान", "हरियाणा"],
  answer_en: "Gujarat",
  answer_hi: "गुजरात",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Who was known as the 'Grand Old Man of India'?",
  question_hi: "'भारत के महान बुजुर्ग' के रूप में किसे जाना जाता था?",
  options_en: ["Dadabhai Naoroji", "Mahatma Gandhi", "Gopal Krishna Gokhale", "Bal Gangadhar Tilak"],
  options_hi: ["दादाभाई नौरोजी", "महात्मा गांधी", "गोपाल कृष्ण गोखले", "बाल गंगाधर तिलक"],
  answer_en: "Dadabhai Naoroji",
  answer_hi: "दादाभाई नौरोजी",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Which ancient Indian text is also known as the 'Fifth Veda'?",
  question_hi: "किस प्राचीन भारतीय ग्रंथ को 'पांचवां वेद' भी कहा जाता है?",
  options_en: ["Mahabharata", "Ramayana", "Bhagavad Gita", "Natya Shastra"],
  options_hi: ["महाभारत", "रामायण", "भगवद् गीता", "नाट्य शास्त्र"],
  answer_en: "Natya Shastra",
  answer_hi: "नाट्य शास्त्र",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Who was the first Muslim President of the Indian National Congress?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस के पहले मुस्लिम अध्यक्ष कौन थे?",
  options_en: ["Badruddin Tyabji", "Syed Ahmed Khan", "Maulana Azad", "Muhammad Ali Jinnah"],
  options_hi: ["बदरुद्दीन तैयबजी", "सर सैयद अहमद खान", "मौलाना आजाद", "मुहम्मद अली जिन्ना"],
  answer_en: "Badruddin Tyabji",
  answer_hi: "बदरुद्दीन तैयबजी",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "The famous Sun Temple of Konark was built by which dynasty?",
  question_hi: "प्रसिद्ध कोणार्क सूर्य मंदिर का निर्माण किस वंश ने करवाया?",
  options_en: ["Ganga", "Eastern Ganga", "Suryavanshi", "Chola"],
  options_hi: ["गंग", "पूर्वी गंग", "सूर्यवंशी", "चोल"],
  answer_en: "Eastern Ganga",
  answer_hi: "पूर्वी गंग",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Who was the last Mughal Emperor of India?",
  question_hi: "भारत का अंतिम मुगल सम्राट कौन था?",
  options_en: ["Bahadur Shah Zafar", "Aurangzeb", "Shah Alam II", "Akbar II"],
  options_hi: ["बहादुर शाह जफर", "औरंगजेब", "शाह आलम द्वितीय", "अकबर द्वितीय"],
  answer_en: "Bahadur Shah Zafar",
  answer_hi: "बहादुर शाह जफर",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "The ancient port city of Sopara was located in which present-day state?",
  question_hi: "प्राचीन बंदरगाह शहर सोपारा वर्तमान किस राज्य में स्थित था?",
  options_en: ["Gujarat", "Maharashtra", "Kerala", "Tamil Nadu"],
  options_hi: ["गुजरात", "महाराष्ट्र", "केरल", "तमिलनाडु"],
  answer_en: "Maharashtra",
  answer_hi: "महाराष्ट्र",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Who started the newspaper 'Kesari'?",
  question_hi: "'केसरी' समाचार पत्र किसने शुरू किया?",
  options_en: ["Bal Gangadhar Tilak", "Gopal Krishna Gokhale", "Mahatma Gandhi", "Lala Lajpat Rai"],
  options_hi: ["बाल गंगाधर तिलक", "गोपाल कृष्ण गोखले", "महात्मा गांधी", "लाला लाजपत राय"],
  answer_en: "Bal Gangadhar Tilak",
  answer_hi: "बाल गंगाधर तिलक",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "The famous Iron Pillar of Delhi belongs to which period?",
  question_hi: "दिल्ली का प्रसिद्ध लौह स्तंभ किस काल से संबंधित है?",
  options_en: ["Maurya", "Gupta", "Kushan", "Mughal"],
  options_hi: ["मौर्य", "गुप्त", "कुषाण", "मुगल"],
  answer_en: "Gupta",
  answer_hi: "गुप्त",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Who was the first Indian woman to become a Union Cabinet Minister?",
  question_hi: "केंद्रीय कैबिनेट मंत्री बनने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Indira Gandhi", "Vijaya Lakshmi Pandit", "Rajkumari Amrit Kaur", "Sarojini Naidu"],
  options_hi: ["इंदिरा गांधी", "विजया लक्ष्मी पंडित", "राजकुमारी अमृत कौर", "सरोजिनी नायडू"],
  answer_en: "Rajkumari Amrit Kaur",
  answer_hi: "राजकुमारी अमृत कौर",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "The ancient university of Vikramshila was founded by which ruler?",
  question_hi: "प्राचीन विश्वविद्यालय विक्रमशिला की स्थापना किस शासक ने की?",
  options_en: ["Harsha", "Dharmapala", "Devapala", "Gopala"],
  options_hi: ["हर्ष", "धर्मपाल", "देवपाल", "गोपाल"],
  answer_en: "Dharmapala",
  answer_hi: "धर्मपाल",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Who founded the Servants of India Society?",
  question_hi: "सर्वेंट्स ऑफ इंडिया सोसाइटी की स्थापना किसने की?",
  options_en: ["Gopal Krishna Gokhale", "Mahatma Gandhi", "Dadabhai Naoroji", "Bal Gangadhar Tilak"],
  options_hi: ["गोपाल कृष्ण गोखले", "महात्मा गांधी", "दादाभाई नौरोजी", "बाल गंगाधर तिलक"],
  answer_en: "Gopal Krishna Gokhale",
  answer_hi: "गोपाल कृष्ण गोखले",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "The famous Ajanta caves are located in which state?",
  question_hi: "प्रसिद्ध अजंता गुफाएं किस राज्य में स्थित हैं?",
  options_en: ["Madhya Pradesh", "Maharashtra", "Gujarat", "Rajasthan"],
  options_hi: ["मध्य प्रदेश", "महाराष्ट्र", "गुजरात", "राजस्थान"],
  answer_en: "Maharashtra",
  answer_hi: "महाराष्ट्र",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Who was the first Indian to become a member of the British Parliament?",
  question_hi: "ब्रिटिश संसद का सदस्य बनने वाले पहले भारतीय कौन थे?",
  options_en: ["Dadabhai Naoroji", "Surendranath Banerjee", "W. C. Bonnerjee", "R. C. Dutt"],
  options_hi: ["दादाभाई नौरोजी", "सुरेंद्रनाथ बनर्जी", "डब्ल्यू. सी. बोनर्जी", "आर. सी. दत्त"],
  answer_en: "Dadabhai Naoroji",
  answer_hi: "दादाभाई नौरोजी",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "The famous Brihadeeswara Temple in Thanjavur was built by which Chola king?",
  question_hi: "तंजावुर में प्रसिद्ध बृहदीश्वर मंदिर का निर्माण किस चोल राजा ने करवाया?",
  options_en: ["Rajaraja Chola I", "Rajendra Chola I", "Kulottunga I", "Vikrama Chola"],
  options_hi: ["राजराज चोल प्रथम", "राजेंद्र चोल प्रथम", "कुलोत्तुंग प्रथम", "विक्रम चोल"],
  answer_en: "Rajaraja Chola I",
  answer_hi: "राजराज चोल प्रथम",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Who started the 'Home Rule Movement' in India?",
  question_hi: "भारत में 'होम रूल आंदोलन' किसने शुरू किया?",
  options_en: ["Bal Gangadhar Tilak", "Annie Besant", "Mahatma Gandhi", "Gopal Krishna Gokhale"],
  options_hi: ["बाल गंगाधर तिलक", "एनी बेसेंट", "महात्मा गांधी", "गोपाल कृष्ण गोखले"],
  answer_en: "Annie Besant",
  answer_hi: "एनी बेसेंट",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "The ancient city of Pataliputra is located in which present-day city?",
  question_hi: "प्राचीन शहर पाटलिपुत्र वर्तमान किस शहर में स्थित है?",
  options_en: ["Delhi", "Patna", "Varanasi", "Allahabad"],
  options_hi: ["दिल्ली", "पटना", "वाराणसी", "इलाहाबाद"],
  answer_en: "Patna",
  answer_hi: "पटना",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Who was the first Indian woman to win the Miss World title?",
  question_hi: "मिस वर्ल्ड का खिताब जीतने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Aishwarya Rai", "Sushmita Sen", "Priyanka Chopra", "Reita Faria"],
  options_hi: ["ऐश्वर्या राय", "सुष्मिता सेन", "प्रियंका चोपड़ा", "रीता फारिया"],
  answer_en: "Reita Faria",
  answer_hi: "रीता फारिया",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "The famous Kailasa temple at Ellora was built by which dynasty?",
  question_hi: "एलोरा में प्रसिद्ध कैलाश मंदिर का निर्माण किस वंश ने करवाया?",
  options_en: ["Rashtrakuta", "Chalukya", "Pallava", "Chola"],
  options_hi: ["राष्ट्रकूट", "चालुक्य", "पल्लव", "चोल"],
  answer_en: "Rashtrakuta",
  answer_hi: "राष्ट्रकूट",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Who was the first Indian to receive the Magsaysay Award?",
  question_hi: "मैग्सेसे पुरस्कार प्राप्त करने वाले पहले भारतीय कौन थे?",
  options_en: ["Vinoba Bhave", "Mother Teresa", "C. V. Raman", "Jawaharlal Nehru"],
  options_hi: ["विनोबा भावे", "मदर टेरेसा", "सी. वी. रमन", "जवाहरलाल नेहरू"],
  answer_en: "Vinoba Bhave",
  answer_hi: "विनोबा भावे",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "The ancient city of Taxila is located in which present-day country?",
  question_hi: "प्राचीन शहर तक्षशिला वर्तमान किस देश में स्थित है?",
  options_en: ["India", "Pakistan", "Afghanistan", "Bangladesh"],
  options_hi: ["भारत", "पाकिस्तान", "अफगानिस्तान", "बांग्लादेश"],
  answer_en: "Pakistan",
  answer_hi: "पाकिस्तान",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Who founded the 'Arya Samaj'?",
  question_hi: "'आर्य समाज' की स्थापना किसने की?",
  options_en: ["Raja Ram Mohan Roy", "Swami Vivekananda", "Dayanand Saraswati", "Ramakrishna Paramhansa"],
  options_hi: ["राजा राम मोहन राय", "स्वामी विवेकानंद", "दयानंद सरस्वती", "रामकृष्ण परमहंस"],
  answer_en: "Dayanand Saraswati",
  answer_hi: "दयानंद सरस्वती",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "The famous Sanchi Stupa was built by which emperor?",
  question_hi: "प्रसिद्ध सांची स्तूप का निर्माण किस सम्राट ने करवाया?",
  options_en: ["Ashoka", "Kanishka", "Harsha", "Chandragupta Maurya"],
  options_hi: ["अशोक", "कनिष्क", "हर्ष", "चंद्रगुप्त मौर्य"],
  answer_en: "Ashoka",
  answer_hi: "अशोक",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Who was the first Indian woman to win an Olympic medal?",
  question_hi: "ओलंपिक पदक जीतने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["P. T. Usha", "Karnam Malleswari", "Mary Kom", "Saina Nehwal"],
  options_hi: ["पी. टी. उषा", "कर्णम मल्लेश्वरी", "मैरी कॉम", "साइना नेहवाल"],
  answer_en: "Karnam Malleswari",
  answer_hi: "कर्णम मल्लेश्वरी",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "The ancient city of Hampi was the capital of which empire?",
  question_hi: "प्राचीन शहर हम्पी किस साम्राज्य की राजधानी थी?",
  options_en: ["Vijayanagara", "Chola", "Pallava", "Maurya"],
  options_hi: ["विजयनगर", "चोल", "पल्लव", "मौर्य"],
  answer_en: "Vijayanagara",
  answer_hi: "विजयनगर",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Who was the first Indian to win the Nobel Prize in Physics?",
  question_hi: "भौतिकी में नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
  options_en: ["C. V. Raman", "Hargobind Khorana", "S. Chandrasekhar", "Venkatraman Ramakrishnan"],
  options_hi: ["सी. वी. रमन", "हरगोबिंद खुराना", "एस. चंद्रशेखर", "वेंकटरमण रामकृष्णन"],
  answer_en: "C. V. Raman",
  answer_hi: "सी. वी. रमन",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "The famous Qutub Minar was completed by which ruler?",
  question_hi: "प्रसिद्ध कुतुब मीनार का निर्माण किस शासक ने पूरा करवाया?",
  options_en: ["Qutub-ud-din Aibak", "Iltutmish", "Alauddin Khilji", "Firoz Shah Tughlaq"],
  options_hi: ["कुतुब-उद-दीन ऐबक", "इल्तुतमिश", "अलाउद्दीन खिलजी", "फिरोज शाह तुगलक"],
  answer_en: "Iltutmish",
  answer_hi: "इल्तुतमिश",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Who was the first Indian woman to become the Chief Minister of a state?",
  question_hi: "राज्य की मुख्यमंत्री बनने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Indira Gandhi", "Sucheta Kripalani", "Mamata Banerjee", "Jayalalithaa"],
  options_hi: ["इंदिरा गांधी", "सुचेता कृपलानी", "ममता बनर्जी", "जयललिता"],
  answer_en: "Sucheta Kripalani",
  answer_hi: "सुचेता कृपलानी",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "The ancient city of Mohenjo-daro is located in which present-day country?",
  question_hi: "प्राचीन शहर मोहनजो-दारो वर्तमान किस देश में स्थित है?",
  options_en: ["India", "Pakistan", "Bangladesh", "Afghanistan"],
  options_hi: ["भारत", "पाकिस्तान", "बांग्लादेश", "अफगानिस्तान"],
  answer_en: "Pakistan",
  answer_hi: "पाकिस्तान",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Who was the first Indian woman to win the Booker Prize?",
  question_hi: "बुकर पुरस्कार जीतने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Arundhati Roy", "Kiran Desai", "Anita Desai", "Jhumpa Lahiri"],
  options_hi: ["अरुंधति रॉय", "किरण देसाई", "अनिता देसाई", "झुम्पा लाहिड़ी"],
  answer_en: "Arundhati Roy",
  answer_hi: "अरुंधति रॉय",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "The famous Gol Gumbaz is located in which city?",
  question_hi: "प्रसिद्ध गोल गुम्बज किस शहर में स्थित है?",
  options_en: ["Delhi", "Agra", "Bijapur", "Hyderabad"],
  options_hi: ["दिल्ली", "आगरा", "बीजापुर", "हैदराबाद"],
  answer_en: "Bijapur",
  answer_hi: "बीजापुर",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Who was the first Indian woman to become a pilot?",
  question_hi: "पायलट बनने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Prem Mathur", "Sarla Thakral", "Kalpana Chawla", "Harita Kaur Deol"],
  options_hi: ["प्रेम माथुर", "सरला ठकराल", "कल्पना चावला", "हरिता कौर देओल"],
  answer_en: "Sarla Thakral",
  answer_hi: "सरला ठकराल",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "The ancient city of Ujjain was the capital of which kingdom?",
  question_hi: "प्राचीन शहर उज्जैन किस राज्य की राजधानी थी?",
  options_en: ["Magadha", "Avanti", "Kosala", "Vatsa"],
  options_hi: ["मगध", "अवंति", "कोसल", "वत्स"],
  answer_en: "Avanti",
  answer_hi: "अवंति",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Who was the first Indian woman to win the Bharat Ratna?",
  question_hi: "भारत रत्न जीतने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Indira Gandhi", "Mother Teresa", "M. S. Subbulakshmi", "Lata Mangeshkar"],
  options_hi: ["इंदिरा गांधी", "मदर टेरेसा", "एम. एस. सुब्बुलक्ष्मी", "लता मंगेशकर"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गांधी",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "The famous Charminar was built by which ruler?",
  question_hi: "प्रसिद्ध चारमीनार का निर्माण किस शासक ने करवाया?",
  options_en: ["Ibrahim Quli Qutb Shah", "Muhammad Quli Qutb Shah", "Abdullah Qutb Shah", "Abul Hasan Qutb Shah"],
  options_hi: ["इब्राहिम कुली कुतुब शाह", "मुहम्मद कुली कुतुब शाह", "अब्दुल्ला कुतुब शाह", "अबुल हसन कुतुब शाह"],
  answer_en: "Muhammad Quli Qutb Shah",
  answer_hi: "मुहम्मद कुली कुतुब शाह",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Who was the first Indian woman to become a judge of the Supreme Court?",
  question_hi: "सर्वोच्च न्यायालय की न्यायाधीश बनने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Ruma Pal", "Gita Mittal", "Fathima Beevi", "Indu Malhotra"],
  options_hi: ["रूमा पाल", "गीता मित्तल", "फातिमा बीवी", "इंदु मल्होत्रा"],
  answer_en: "Fathima Beevi",
  answer_hi: "फातिमा बीवी",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "The ancient city of Kannauj was the capital of which empire?",
  question_hi: "प्राचीन शहर कन्नौज किस साम्राज्य की राजधानी थी?",
  options_en: ["Harsha's Empire", "Gupta Empire", "Maurya Empire", "Mughal Empire"],
  options_hi: ["हर्ष का साम्राज्य", "गुप्त साम्राज्य", "मौर्य साम्राज्य", "मुगल साम्राज्य"],
  answer_en: "Harsha's Empire",
  answer_hi: "हर्ष का साम्राज्य",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Who was the first Indian woman to win the Arjuna Award?",
  question_hi: "अर्जुन पुरस्कार जीतने वाली पहली भारतीय महिला कौन थीं?",
  options_en: ["Stephie D'Souza", "Anjali Bhagwat", "P. T. Usha", "Karnam Malleswari"],
  options_hi: ["स्टेफी डिसूजा", "अंजलि भागवत", "पी. टी. उषा", "कर्णम मल्लेश्वरी"],
  answer_en: "Stephie D'Souza",
  answer_hi: "स्टेफी डिसूजा",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "The famous Buland Darwaza was built by which Mughal emperor?",
  question_hi: "प्रसिद्ध बुलंद दरवाजा का निर्माण किस मुगल सम्राट ने करवाया?",
  options_en: ["Akbar", "Jahangir", "Shah Jahan", "Aurangzeb"],
  options_hi: ["अकबर", "जहांगीर", "शाहजहाँ", "औरंगजेब"],
  answer_en: "Akbar",
  answer_hi: "अकबर",
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