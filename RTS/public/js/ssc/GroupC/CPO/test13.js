const questions = [
  {
  "num":1,
  question_en: "Who was the first President of India?",
  question_hi: "भारत के प्रथम राष्ट्रपति कौन थे?",
  options_en: ["Rajendra Prasad", "S. Radhakrishnan", "Zakir Hussain", "V. V. Giri"],
  options_hi: ["राजेंद्र प्रसाद", "एस. राधाकृष्णन", "जाकिर हुसैन", "वी. वी. गिरि"],
  answer_en: "Rajendra Prasad",
  answer_hi: "राजेंद्र प्रसाद",
  attempted: false,
  selected: ""
},
{
  "num":2,
  question_en: "Which is the longest river in India?",
  question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Ganga", "Godavari", "Yamuna", "Brahmaputra"],
  options_hi: ["गंगा", "गोदावरी", "यमुना", "ब्रह्मपुत्र"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  "num":3,
  question_en: "Who was the first Prime Minister of India?",
  question_hi: "भारत के प्रथम प्रधानमंत्री कौन थे?",
  options_en: ["Jawaharlal Nehru", "Lal Bahadur Shastri", "Indira Gandhi", "Morarji Desai"],
  options_hi: ["जवाहरलाल नेहरू", "लाल बहादुर शास्त्री", "इंदिरा गांधी", "मोरारजी देसाई"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  "num":4,
  question_en: "Which is the largest state in India by area?",
  question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा राज्य कौन सा है?",
  options_en: ["Uttar Pradesh", "Maharashtra", "Rajasthan", "Madhya Pradesh"],
  options_hi: ["उत्तर प्रदेश", "महाराष्ट्र", "राजस्थान", "मध्य प्रदेश"],
  answer_en: "Rajasthan",
  answer_hi: "राजस्थान",
  attempted: false,
  selected: ""
},
{
  "num":5,
  question_en: "Who wrote the Indian National Anthem?",
  question_hi: "भारतीय राष्ट्रगान किसने लिखा?",
  options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Muhammad Iqbal", "Subhash Chandra Bose"],
  options_hi: ["बंकिम चंद्र चटर्जी", "रबीन्द्रनाथ टैगोर", "मुहम्मद इकबाल", "सुभाष चंद्र बोस"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रबीन्द्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  "num":6,
  question_en: "Which is the smallest state in India by area?",
  question_hi: "क्षेत्रफल के अनुसार भारत का सबसे छोटा राज्य कौन सा है?",
  options_en: ["Goa", "Sikkim", "Tripura", "Mizoram"],
  options_hi: ["गोवा", "सिक्किम", "त्रिपुरा", "मिजोरम"],
  answer_en: "Goa",
  answer_hi: "गोवा",
  attempted: false,
  selected: ""
},
{
  "num":7,
  question_en: "Who was known as the 'Father of Indian Constitution'?",
  question_hi: "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी. आर. अंबेडकर", "सरदार पटेल"],
  answer_en: "B. R. Ambedkar",
  answer_hi: "बी. आर. अंबेडकर",
  attempted: false,
  selected: ""
},
{
  "num":8,
  question_en: "Which is the highest mountain peak in India?",
  question_hi: "भारत की सबसे ऊंची पर्वत चोटी कौन सी है?",
  options_en: ["Mount Everest", "Kanchenjunga", "Nanda Devi", "K2"],
  options_hi: ["माउंट एवरेस्ट", "कंचनजंघा", "नंदा देवी", "K2"],
  answer_en: "Kanchenjunga",
  answer_hi: "कंचनजंघा",
  attempted: false,
  selected: ""
},
{
  "num":9,
  question_en: "Who was the first woman Prime Minister of India?",
  question_hi: "भारत की प्रथम महिला प्रधानमंत्री कौन थीं?",
  options_en: ["Sarojini Naidu", "Indira Gandhi", "Pratibha Patil", "Sonia Gandhi"],
  options_hi: ["सरोजिनी नायडू", "इंदिरा गांधी", "प्रतिभा पाटिल", "सोनिया गांधी"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गांधी",
  attempted: false,
  selected: ""
},
{
  "num":10,
  question_en: "Which is the largest lake in India?",
  question_hi: "भारत की सबसे बड़ी झील कौन सी है?",
  options_en: ["Dal Lake", "Wular Lake", "Chilika Lake", "Sambhar Lake"],
  options_hi: ["डल झील", "वुलर झील", "चिल्का झील", "सांभर झील"],
  answer_en: "Wular Lake",
  answer_hi: "वुलर झील",
  attempted: false,
  selected: ""
},
{
  "num":11,
  question_en: "Who founded the Mughal Empire in India?",
  question_hi: "भारत में मुगल साम्राज्य की स्थापना किसने की?",
  options_en: ["Akbar", "Babur", "Humayun", "Aurangzeb"],
  options_hi: ["अकबर", "बाबर", "हुमायूं", "औरंगजेब"],
  answer_en: "Babur",
  answer_hi: "बाबर",
  attempted: false,
  selected: ""
},
{
  "num":12,
  question_en: "Which is the largest river island in India?",
  question_hi: "भारत का सबसे बड़ा नदी द्वीप कौन सा है?",
  options_en: ["Majuli", "Srirangam", "Diu", "Andaman"],
  options_hi: ["माजुली", "श्रीरंगम", "दीव", "अंडमान"],
  answer_en: "Majuli",
  answer_hi: "माजुली",
  attempted: false,
  selected: ""
},
{
  "num":13,
  question_en: "Who was the last Viceroy of British India?",
  question_hi: "ब्रिटिश भारत के अंतिम वायसराय कौन थे?",
  options_en: ["Lord Mountbatten", "Lord Wavell", "Lord Linlithgow", "Lord Irwin"],
  options_hi: ["लॉर्ड माउंटबेटन", "लॉर्ड वेवेल", "लॉर्ड लिनलिथगो", "लॉर्ड इरविन"],
  answer_en: "Lord Mountbatten",
  answer_hi: "लॉर्ड माउंटबेटन",
  attempted: false,
  selected: ""
},
{
  "num":14,
  question_en: "Which is the largest desert in India?",
  question_hi: "भारत का सबसे बड़ा रेगिस्तान कौन सा है?",
  options_en: ["Thar Desert", "Rann of Kutch", "Ladakh Desert", "Cold Desert"],
  options_hi: ["थार रेगिस्तान", "कच्छ का रण", "लद्दाख रेगिस्तान", "शीत रेगिस्तान"],
  answer_en: "Thar Desert",
  answer_hi: "थार रेगिस्तान",
  attempted: false,
  selected: ""
},
{
  "num":15,
  question_en: "Who led the Dandi March?",
  question_hi: "दांडी मार्च का नेतृत्व किसने किया?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Sardar Patel", "Subhash Chandra Bose"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "सरदार पटेल", "सुभाष चंद्र बोस"],
  answer_en: "Mahatma Gandhi",
  answer_hi: "महात्मा गांधी",
  attempted: false,
  selected: ""
},
{
  "num":16,
  question_en: "Which is the southernmost point of Indian mainland?",
  question_hi: "भारतीय मुख्यभूमि का दक्षिणतम बिंदु कौन सा है?",
  options_en: ["Kanyakumari", "Rameswaram", "Indira Point", "Chennai"],
  options_hi: ["कन्याकुमारी", "रामेश्वरम", "इंदिरा पॉइंट", "चेन्नई"],
  answer_en: "Kanyakumari",
  answer_hi: "कन्याकुमारी",
  attempted: false,
  selected: ""
},
{
  "num":17,
  question_en: "Who was the first woman President of India?",
  question_hi: "भारत की प्रथम महिला राष्ट्रपति कौन थीं?",
  options_en: ["Indira Gandhi", "Pratibha Patil", "Sarojini Naidu", "Meira Kumar"],
  options_hi: ["इंदिरा गांधी", "प्रतिभा पाटिल", "सरोजिनी नायडू", "मीरा कुमार"],
  answer_en: "Pratibha Patil",
  answer_hi: "प्रतिभा पाटिल",
  attempted: false,
  selected: ""
},
{
  "num":18,
  question_en: "Which is the largest waterfall in India?",
  question_hi: "भारत का सबसे बड़ा जलप्रपात कौन सा है?",
  options_en: ["Jog Falls", "Athirappilly Falls", "Dudhsagar Falls", "Chitrakote Falls"],
  options_hi: ["जोग जलप्रपात", "अथिराप्पिली जलप्रपात", "दूधसागर जलप्रपात", "चित्रकूट जलप्रपात"],
  answer_en: "Jog Falls",
  answer_hi: "जोग जलप्रपात",
  attempted: false,
  selected: ""
},
{
  "num":19,
  question_en: "Who was known as the 'Iron Man of India'?",
  question_hi: "'भारत के लौह पुरुष' के रूप में किसे जाना जाता है?",
  options_en: ["Jawaharlal Nehru", "B. R. Ambedkar", "Sardar Patel", "Subhash Chandra Bose"],
  options_hi: ["जवाहरलाल नेहरू", "बी. आर. अंबेडकर", "सरदार पटेल", "सुभाष चंद्र बोस"],
  answer_en: "Sardar Patel",
  answer_hi: "सरदार पटेल",
  attempted: false,
  selected: ""
},
{
  "num":20,
  question_en: "Which is the longest national highway in India?",
  question_hi: "भारत का सबसे लंबा राष्ट्रीय राजमार्ग कौन सा है?",
  options_en: ["NH 44", "NH 27", "NH 48", "NH 6"],
  options_hi: ["एनएच 44", "एनएच 27", "एनएच 48", "एनएच 6"],
  answer_en: "NH 44",
  answer_hi: "एनएच 44",
  attempted: false,
  selected: ""
},
{
  "num":21,
  question_en: "Who wrote the book 'Discovery of India'?",
  question_hi: "'डिस्कवरी ऑफ इंडिया' पुस्तक किसने लिखी?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "B. R. Ambedkar", "Rabindranath Tagore"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "बी. आर. अंबेडकर", "रबीन्द्रनाथ टैगोर"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  "num":22,
  question_en: "Which is the largest delta in India?",
  question_hi: "भारत का सबसे बड़ा डेल्टा कौन सा है?",
  options_en: ["Ganga-Brahmaputra Delta", "Godavari Delta", "Krishna Delta", "Mahanadi Delta"],
  options_hi: ["गंगा-ब्रह्मपुत्र डेल्टा", "गोदावरी डेल्टा", "कृष्णा डेल्टा", "महानदी डेल्टा"],
  answer_en: "Ganga-Brahmaputra Delta",
  answer_hi: "गंगा-ब्रह्मपुत्र डेल्टा",
  attempted: false,
  selected: ""
},
{
  "num":23,
  question_en: "Who was the first Indian to win Nobel Prize?",
  question_hi: "नोबेल पुरस्कार जीतने वाले प्रथम भारतीय कौन थे?",
  options_en: ["Rabindranath Tagore", "C. V. Raman", "Mother Teresa", "Hargobind Khorana"],
  options_hi: ["रबीन्द्रनाथ टैगोर", "सी. वी. रमन", "मदर टेरेसा", "हरगोबिंद खुराना"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रबीन्द्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  "num":24,
  question_en: "Which is the largest port in India?",
  question_hi: "भारत का सबसे बड़ा बंदरगाह कौन सा है?",
  options_en: ["Mumbai Port", "Kandla Port", "Chennai Port", "Visakhapatnam Port"],
  options_hi: ["मुंबई बंदरगाह", "कांडला बंदरगाह", "चेन्नई बंदरगाह", "विशाखापत्तनम बंदरगाह"],
  answer_en: "Mumbai Port",
  answer_hi: "मुंबई बंदरगाह",
  attempted: false,
  selected: ""
},
{
  "num":25,
  question_en: "Who built the Taj Mahal?",
  question_hi: "ताजमहल किसने बनवाया?",
  options_en: ["Akbar", "Shah Jahan", "Jahangir", "Aurangzeb"],
  options_hi: ["अकबर", "शाहजहाँ", "जहांगीर", "औरंगजेब"],
  answer_en: "Shah Jahan",
  answer_hi: "शाहजहाँ",
  attempted: false,
  selected: ""
},
{
  "num":26,
  question_en: "Which is the largest wildlife sanctuary in India?",
  question_hi: "भारत का सबसे बड़ा वन्यजीव अभयारण्य कौन सा है?",
  options_en: ["Kaziranga", "Jim Corbett", "Ranthambore", "Gir Forest"],
  options_hi: ["काजीरंगा", "जिम कॉर्बेट", "रणथंभौर", "गिर वन"],
  answer_en: "Kaziranga",
  answer_hi: "काजीरंगा",
  attempted: false,
  selected: ""
},
{
  "num":27,
  question_en: "Who founded the Indian National Congress?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस की स्थापना किसने की?",
  options_en: ["Mahatma Gandhi", "A. O. Hume", "Jawaharlal Nehru", "Bal Gangadhar Tilak"],
  options_hi: ["महात्मा गांधी", "ए. ओ. ह्यूम", "जवाहरलाल नेहरू", "बाल गंगाधर तिलक"],
  answer_en: "A. O. Hume",
  answer_hi: "ए. ओ. ह्यूम",
  attempted: false,
  selected: ""
},
{
  "num":28,
  question_en: "Which is the largest freshwater lake in India?",
  question_hi: "भारत की सबसे बड़ी मीठे पानी की झील कौन सी है?",
  options_en: ["Wular Lake", "Dal Lake", "Loktak Lake", "Chilika Lake"],
  options_hi: ["वुलर झील", "डल झील", "लोकटक झील", "चिल्का झील"],
  answer_en: "Wular Lake",
  answer_hi: "वुलर झील",
  attempted: false,
  selected: ""
},
{
  "num":29,
  question_en: "Who was the first Indian woman to win Miss World?",
  question_hi: "मिस वर्ल्ड जीतने वाली प्रथम भारतीय महिला कौन थीं?",
  options_en: ["Aishwarya Rai", "Sushmita Sen", "Priyanka Chopra", "Reita Faria"],
  options_hi: ["ऐश्वर्या राय", "सुष्मिता सेन", "प्रियंका चोपड़ा", "रीता फारिया"],
  answer_en: "Reita Faria",
  answer_hi: "रीता फारिया",
  attempted: false,
  selected: ""
},
{
  "num":30,
  question_en: "Which is the largest cave in India?",
  question_hi: "भारत की सबसे बड़ी गुफा कौन सी है?",
  options_en: ["Ajanta Caves", "Ellora Caves", "Amarnath Cave", "Borra Caves"],
  options_hi: ["अजंता गुफाएं", "एलोरा गुफाएं", "अमरनाथ गुफा", "बोर्रा गुफाएं"],
  answer_en: "Borra Caves",
  answer_hi: "बोर्रा गुफाएं",
  attempted: false,
  selected: ""
},
{
  "num":31,
  question_en: "Who was the first Indian to go to space?",
  question_hi: "अंतरिक्ष में जाने वाले प्रथम भारतीय कौन थे?",
  options_en: ["Kalpana Chawla", "Sunita Williams", "Rakesh Sharma", "Vikram Sarabhai"],
  options_hi: ["कल्पना चावला", "सुनीता विलियम्स", "राकेश शर्मा", "विक्रम साराभाई"],
  answer_en: "Rakesh Sharma",
  answer_hi: "राकेश शर्मा",
  attempted: false,
  selected: ""
},
{
  "num":32,
  question_en: "Which is the largest glacier in India?",
  question_hi: "भारत का सबसे बड़ा ग्लेशियर कौन सा है?",
  options_en: ["Gangotri Glacier", "Siachen Glacier", "Zemu Glacier", "Bara Shigri Glacier"],
  options_hi: ["गंगोत्री ग्लेशियर", "सियाचिन ग्लेशियर", "जेमू ग्लेशियर", "बड़ा शिगरी ग्लेशियर"],
  answer_en: "Siachen Glacier",
  answer_hi: "सियाचिन ग्लेशियर",
  attempted: false,
  selected: ""
},
{
  "num":33,
  question_en: "Who wrote the National Song 'Vande Mataram'?",
  question_hi: "राष्ट्रगीत 'वंदे मातरम' किसने लिखा?",
  options_en: ["Bankim Chandra Chatterjee", "Rabindranath Tagore", "Sarojini Naidu", "Mahatma Gandhi"],
  options_hi: ["बंकिम चंद्र चटर्जी", "रबीन्द्रनाथ टैगोर", "सरोजिनी नायडू", "महात्मा गांधी"],
  answer_en: "Bankim Chandra Chatterjee",
  answer_hi: "बंकिम चंद्र चटर्जी",
  attempted: false,
  selected: ""
},
{
  "num":34,
  question_en: "Which is the largest plateau in India?",
  question_hi: "भारत का सबसे बड़ा पठार कौन सा है?",
  options_en: ["Malwa Plateau", "Deccan Plateau", "Chota Nagpur Plateau", "Meghalaya Plateau"],
  options_hi: ["मालवा पठार", "दक्कन पठार", "छोटा नागपुर पठार", "मेघालय पठार"],
  answer_en: "Deccan Plateau",
  answer_hi: "दक्कन पठार",
  attempted: false,
  selected: ""
},
{
  "num":35,
  question_en: "Who was the first Indian to win an Olympic gold medal?",
  question_hi: "ओलंपिक स्वर्ण पदक जीतने वाले प्रथम भारतीय कौन थे?",
  options_en: ["Milkha Singh", "P. T. Usha", "Abhinav Bindra", "K. D. Jadhav"],
  options_hi: ["मिल्खा सिंह", "पी. टी. उषा", "अभिनव बिंद्रा", "के. डी. जाधव"],
  answer_en: "Abhinav Bindra",
  answer_hi: "अभिनव बिंद्रा",
  attempted: false,
  selected: ""
},
{
  "num":36,
  question_en: "Which is the largest district in India by area?",
  question_hi: "क्षेत्रफल के अनुसार भारत का सबसे बड़ा जिला कौन सा है?",
  options_en: ["Leh", "Kutch", "Jaisalmer", "Barmer"],
  options_hi: ["लेह", "कच्छ", "जैसलमेर", "बाड़मेर"],
  answer_en: "Kutch",
  answer_hi: "कच्छ",
  attempted: false,
  selected: ""
},
{
  "num":37,
  question_en: "Who was the first Chief Justice of India?",
  question_hi: "भारत के प्रथम मुख्य न्यायाधीश कौन थे?",
  options_en: ["H. J. Kania", "M. P. Sastri", "B. K. Mukherjea", "S. R. Das"],
  options_hi: ["एच. जे. कनिया", "एम. पी. शास्त्री", "बी. के. मुखर्जी", "एस. आर. दास"],
  answer_en: "H. J. Kania",
  answer_hi: "एच. जे. कनिया",
  attempted: false,
  selected: ""
},
{
  "num":38,
  question_en: "Which is the largest mangrove forest in India?",
  question_hi: "भारत का सबसे बड़ा मैंग्रोव वन कौन सा है?",
  options_en: ["Sunderbans", "Bhitarkanika", "Pichavaram", "Godavari Mangroves"],
  options_hi: ["सुंदरबन", "भितरकनिका", "पिचावरम", "गोदावरी मैंग्रोव"],
  answer_en: "Sunderbans",
  answer_hi: "सुंदरबन",
  attempted: false,
  selected: ""
},
{
  "num":39,
  question_en: "Who was the first Indian woman to climb Mount Everest?",
  question_hi: "माउंट एवरेस्ट पर चढ़ने वाली प्रथम भारतीय महिला कौन थीं?",
  options_en: ["Bachendri Pal", "Santosh Yadav", "Arunima Sinha", "Premlata Agarwal"],
  options_hi: ["बछेंद्री पाल", "संतोष यादव", "अरुणिमा सिन्हा", "प्रेमलता अग्रवाल"],
  answer_en: "Bachendri Pal",
  answer_hi: "बछेंद्री पाल",
  attempted: false,
  selected: ""
},
{
  "num":40,
  question_en: "Which is the largest mosque in India?",
  question_hi: "भारत की सबसे बड़ी मस्जिद कौन सी है?",
  options_en: ["Jama Masjid, Delhi", "Taj-ul-Masajid, Bhopal", "Mecca Masjid, Hyderabad", "Jama Masjid, Mumbai"],
  options_hi: ["जामा मस्जिद, दिल्ली", "ताज-उल-मसाजिद, भोपाल", "मक्का मस्जिद, हैदराबाद", "जामा मस्जिद, मुंबई"],
  answer_en: "Taj-ul-Masajid, Bhopal",
  answer_hi: "ताज-उल-मसाजिद, भोपाल",
  attempted: false,
  selected: ""
},
{
  "num":41,
  question_en: "Who designed the Indian National Flag?",
  question_hi: "भारतीय राष्ट्रीय ध्वज को किसने डिजाइन किया?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Pingali Venkayya", "S. Radhakrishnan"],
  options_hi: ["महात्मा गांधी", "जवाहरलाल नेहरू", "पिंगली वेंकय्या", "एस. राधाकृष्णन"],
  answer_en: "Pingali Venkayya",
  answer_hi: "पिंगली वेंकय्या",
  attempted: false,
  selected: ""
},
{
  "num":42,
  question_en: "Which is the largest temple in India?",
  question_hi: "भारत का सबसे बड़ा मंदिर कौन सा है?",
  options_en: ["Akshardham Temple", "Brihadeeswara Temple", "Srirangam Temple", "Meenakshi Temple"],
  options_hi: ["अक्षरधाम मंदिर", "बृहदीश्वर मंदिर", "श्रीरंगम मंदिर", "मीनाक्षी मंदिर"],
  answer_en: "Srirangam Temple",
  answer_hi: "श्रीरंगम मंदिर",
  attempted: false,
  selected: ""
},
{
  "num":43,
  question_en: "Who was the first Indian to receive Bharat Ratna?",
  question_hi: "भारत रत्न प्राप्त करने वाले प्रथम भारतीय कौन थे?",
  options_en: ["C. Rajagopalachari", "Sarvepalli Radhakrishnan", "C. V. Raman", "Jawaharlal Nehru"],
  options_hi: ["सी. राजगोपालाचारी", "सर्वपल्ली राधाकृष्णन", "सी. वी. रमन", "जवाहरलाल नेहरू"],
  answer_en: "C. Rajagopalachari",
  answer_hi: "सी. राजगोपालाचारी",
  attempted: false,
  selected: ""
},
{
  "num":44,
  question_en: "Which is the largest railway station in India?",
  question_hi: "भारत का सबसे बड़ा रेलवे स्टेशन कौन सा है?",
  options_en: ["Howrah Junction", "New Delhi Railway Station", "Chhatrapati Shivaji Terminus", "Sealdah Station"],
  options_hi: ["हावड़ा जंक्शन", "नई दिल्ली रेलवे स्टेशन", "छत्रपति शिवाजी टर्मिनस", "शियालदह स्टेशन"],
  answer_en: "Howrah Junction",
  answer_hi: "हावड़ा जंक्शन",
  attempted: false,
  selected: ""
},
{
  "num":45,
  question_en: "Who was the first Indian woman to win a medal in Olympics?",
  question_hi: "ओलंपिक में पदक जीतने वाली प्रथम भारतीय महिला कौन थीं?",
  options_en: ["P. T. Usha", "Karnam Malleswari", "Mary Kom", "Saina Nehwal"],
  options_hi: ["पी. टी. उषा", "कर्णम मल्लेश्वरी", "मैरी कॉम", "साइना नेहवाल"],
  answer_en: "Karnam Malleswari",
  answer_hi: "कर्णम मल्लेश्वरी",
  attempted: false,
  selected: ""
},
{
  "num":46,
  question_en: "Which is the largest dam in India?",
  question_hi: "भारत का सबसे बड़ा बांध कौन सा है?",
  options_en: ["Bhakra Nangal Dam", "Hirakud Dam", "Tehri Dam", "Sardar Sarovar Dam"],
  options_hi: ["भाखड़ा नंगल बांध", "हीराकुंड बांध", "टिहरी बांध", "सरदार सरोवर बांध"],
  answer_en: "Tehri Dam",
  answer_hi: "टिहरी बांध",
  attempted: false,
  selected: ""
},
{
  "num":47,
  question_en: "Who was the first Indian woman to become UN General Assembly President?",
  question_hi: "संयुक्त राष्ट्र महासभा की अध्यक्ष बनने वाली प्रथम भारतीय महिला कौन थीं?",
  options_en: ["Vijaya Lakshmi Pandit", "Indira Gandhi", "Sarojini Naidu", "Mother Teresa"],
  options_hi: ["विजयलक्ष्मी पंडित", "इंदिरा गांधी", "सरोजिनी नायडू", "मदर टेरेसा"],
  answer_en: "Vijaya Lakshmi Pandit",
  answer_hi: "विजयलक्ष्मी पंडित",
  attempted: false,
  selected: ""
},
{
  "num":48,
  question_en: "Which is the largest airport in India?",
  question_hi: "भारत का सबसे बड़ा हवाई अड्डा कौन सा है?",
  options_en: ["Indira Gandhi International Airport", "Chhatrapati Shivaji Airport", "Kempegowda Airport", "Rajiv Gandhi Airport"],
  options_hi: ["इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा", "छत्रपति शिवाजी हवाई अड्डा", "केंपेगौड़ा हवाई अड्डा", "राजीव गांधी हवाई अड्डा"],
  answer_en: "Indira Gandhi International Airport",
  answer_hi: "इंदिरा गांधी अंतर्राष्ट्रीय हवाई अड्डा",
  attempted: false,
  selected: ""
},
{
  "num":49,
  question_en: "Who was the first Indian to win a Grammy Award?",
  question_hi: "ग्रैमी अवार्ड जीतने वाले प्रथम भारतीय कौन थे?",
  options_en: ["A. R. Rahman", "Zakir Hussain", "Ravi Shankar", "Lata Mangeshkar"],
  options_hi: ["ए. आर. रहमान", "जाकिर हुसैन", "रवि शंकर", "लता मंगेशकर"],
  answer_en: "Ravi Shankar",
  answer_hi: "रवि शंकर",
  attempted: false,
  selected: ""
},
{
  "num":50,
  question_en: "Which is the largest university in India by enrollment?",
  question_hi: "नामांकन के अनुसार भारत का सबसे बड़ा विश्वविद्यालय कौन सा है?",
  options_en: ["University of Delhi", "University of Mumbai", "Indira Gandhi National Open University", "University of Calcutta"],
  options_hi: ["दिल्ली विश्वविद्यालय", "मुंबई विश्वविद्यालय", "इंदिरा गांधी राष्ट्रीय मुक्त विश्वविद्यालय", "कलकत्ता विश्वविद्यालय"],
  answer_en: "Indira Gandhi National Open University",
  answer_hi: "इंदिरा गांधी राष्ट्रीय मुक्त विश्वविद्यालय",
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