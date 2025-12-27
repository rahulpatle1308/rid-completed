const questions = [
  {
    "num": 1,
    "question_en": "Who was the first Mughal emperor of India?",
    "question_hi": "भारत का पहला मुगल सम्राट कौन था?",
    "options_en": ["Babur", "Akbar", "Humayun", "Sher Shah Suri"],
    "options_hi": ["बाबर", "अकबर", "हुमायूँ", "शेरशाह सूरी"],
    "answer_en": "Babur",
    "answer_hi": "बाबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "The First Battle of Panipat was fought in which year?",
    "question_hi": "पानीपत की पहली लड़ाई किस वर्ष लड़ी गई थी?",
    "options_en": ["1526", "1556", "1761", "1857"],
    "options_hi": ["1526", "1556", "1761", "1857"],
    "answer_en": "1526",
    "answer_hi": "1526",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who founded the Maurya Empire?",
    "question_hi": "मौर्य साम्राज्य की स्थापना किसने की?",
    "options_en": ["Chandragupta Maurya", "Ashoka", "Bindusara", "Chanakya"],
    "options_hi": ["चंद्रगुप्त मौर्य", "अशोक", "बिंदुसार", "चाणक्य"],
    "answer_en": "Chandragupta Maurya",
    "answer_hi": "चंद्रगुप्त मौर्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "The Indus Valley Civilization is also known as:",
    "question_hi": "सिंधु घाटी सभ्यता को किस नाम से भी जाना जाता है?",
    "options_en": ["Vedic Civilization", "Harappan Civilization", "Aryan Civilization", "Dravidian Civilization"],
    "options_hi": ["वैदिक सभ्यता", "हड़प्पा सभ्यता", "आर्य सभ्यता", "द्रविड़ सभ्यता"],
    "answer_en": "Harappan Civilization",
    "answer_hi": "हड़प्पा सभ्यता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Who was the founder of the Gupta Empire?",
    "question_hi": "गुप्त साम्राज्य के संस्थापक कौन थे?",
    "options_en": ["Chandragupta I", "Samudragupta", "Chandragupta II", "Skandagupta"],
    "options_hi": ["चंद्रगुप्त प्रथम", "समुद्रगुप्त", "चंद्रगुप्त द्वितीय", "स्कंदगुप्त"],
    "answer_en": "Chandragupta I",
    "answer_hi": "चंद्रगुप्त प्रथम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "The Revolt of 1857 started from which city?",
    "question_hi": "1857 का विद्रोह किस शहर से शुरू हुआ?",
    "options_en": ["Delhi", "Meerut", "Kanpur", "Lucknow"],
    "options_hi": ["दिल्ली", "मेरठ", "कानपुर", "लखनऊ"],
    "answer_en": "Meerut",
    "answer_hi": "मेरठ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Who was the first Governor-General of Bengal?",
    "question_hi": "बंगाल के पहले गवर्नर-जनरल कौन थे?",
    "options_en": ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord William Bentinck"],
    "options_hi": ["वॉरेन हेस्टिंग्स", "लॉर्ड कॉर्नवॉलिस", "लॉर्ड वेलेस्ली", "लॉर्ड विलियम बेंटिक"],
    "answer_en": "Warren Hastings",
    "answer_hi": "वॉरेन हेस्टिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "The ancient university of Nalanda was located in which present-day state?",
    "question_hi": "प्राचीन नालंदा विश्वविद्यालय किस वर्तमान राज्य में स्थित था?",
    "options_en": ["Bihar", "Uttar Pradesh", "Madhya Pradesh", "West Bengal"],
    "options_hi": ["बिहार", "उत्तर प्रदेश", "मध्य प्रदेश", "पश्चिम बंगाल"],
    "answer_en": "Bihar",
    "answer_hi": "बिहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Who built the Qutub Minar?",
    "question_hi": "कुतुब मीनार का निर्माण किसने करवाया?",
    "options_en": ["Qutb-ud-din Aibak", "Iltutmish", "Alauddin Khilji", "Firoz Shah Tughlaq"],
    "options_hi": ["कुतुबुद्दीन ऐबक", "इल्तुतमिश", "अलाउद्दीन खिलजी", "फिरोज शाह तुगलक"],
    "answer_en": "Qutb-ud-din Aibak",
    "answer_hi": "कुतुबुद्दीन ऐबक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "The 'Doctrine of Lapse' was introduced by:",
    "question_hi": "'हड़प नीति' किसके द्वारा लागू की गई थी?",
    "options_en": ["Lord Dalhousie", "Lord Canning", "Lord Curzon", "Lord Ripon"],
    "options_hi": ["लॉर्ड डलहौजी", "लॉर्ड कैनिंग", "लॉर्ड कर्जन", "लॉर्ड रिपन"],
    "answer_en": "Lord Dalhousie",
    "answer_hi": "लॉर्ड डलहौजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Who was the last Viceroy of India?",
    "question_hi": "भारत के अंतिम वायसराय कौन थे?",
    "options_en": ["Lord Mountbatten", "Lord Wavell", "Lord Linlithgow", "Lord Irwin"],
    "options_hi": ["लॉर्ड माउंटबेटन", "लॉर्ड वेवेल", "लॉर्ड लिनलिथगो", "लॉर्ड इरविन"],
    "answer_en": "Lord Mountbatten",
    "answer_hi": "लॉर्ड माउंटबेटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "The Battle of Plassey was fought in which year?",
    "question_hi": "प्लासी की लड़ाई किस वर्ष लड़ी गई थी?",
    "options_en": ["1757", "1764", "1775", "1857"],
    "options_hi": ["1757", "1764", "1775", "1857"],
    "answer_en": "1757",
    "answer_hi": "1757",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Who was known as the 'Iron Man of India'?",
    "question_hi": "'भारत के लौह पुरुष' के रूप में किसे जाना जाता था?",
    "options_en": ["Sardar Vallabhbhai Patel", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
    "options_hi": ["सरदार वल्लभभाई पटेल", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
    "answer_en": "Sardar Vallabhbhai Patel",
    "answer_hi": "सरदार वल्लभभाई पटेल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "The Indian National Congress was founded in which year?",
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई?",
    "options_en": ["1885", "1905", "1919", "1947"],
    "options_hi": ["1885", "1905", "1919", "1947"],
    "answer_en": "1885",
    "answer_hi": "1885",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Who was the first Indian woman to become President of the Indian National Congress?",
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस की अध्यक्ष बनने वाली पहली भारतीय महिला कौन थीं?",
    "options_en": ["Sarojini Naidu", "Annie Besant", "Vijayalakshmi Pandit", "Indira Gandhi"],
    "options_hi": ["सरोजिनी नायडू", "एनी बेसेंट", "विजयलक्ष्मी पंडित", "इंदिरा गांधी"],
    "answer_en": "Annie Besant",
    "answer_hi": "एनी बेसेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "The ancient text 'Arthashastra' was written by:",
    "question_hi": "प्राचीन ग्रंथ 'अर्थशास्त्र' किसके द्वारा लिखा गया था?",
    "options_en": ["Chanakya", "Panini", "Kalidas", "Ved Vyas"],
    "options_hi": ["चाणक्य", "पाणिनि", "कालिदास", "वेद व्यास"],
    "answer_en": "Chanakya",
    "answer_hi": "चाणक्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Who was the founder of the Sikh religion?",
    "question_hi": "सिख धर्म के संस्थापक कौन थे?",
    "options_en": ["Guru Nanak", "Guru Gobind Singh", "Guru Tegh Bahadur", "Guru Arjan Dev"],
    "options_hi": ["गुरु नानक", "गुरु गोबिंद सिंह", "गुरु तेग बहादुर", "गुरु अर्जन देव"],
    "answer_en": "Guru Nanak",
    "answer_hi": "गुरु नानक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "The 'Salt March' or 'Dandi March' was led by:",
    "question_hi": "'नमक मार्च' या 'दांडी मार्च' का नेतृत्व किसने किया?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Subhas Chandra Bose", "Sardar Patel"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "सरदार पटेल"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "The Battle of Haldighati was fought between:",
    "question_hi": "हल्दीघाटी का युद्ध किसके बीच लड़ा गया था?",
    "options_en": ["Akbar and Rana Pratap", "Babur and Ibrahim Lodi", "Sher Shah and Humayun", "Shivaji and Aurangzeb"],
    "options_hi": ["अकबर और राणा प्रताप", "बाबर और इब्राहिम लोदी", "शेरशाह और हुमायूँ", "शिवाजी और औरंगजेब"],
    "answer_en": "Akbar and Rana Pratap",
    "answer_hi": "अकबर और राणा प्रताप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Who built the Red Fort in Delhi?",
    "question_hi": "दिल्ली में लाल किला किसने बनवाया?",
    "options_en": ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
    "options_hi": ["शाहजहाँ", "अकबर", "औरंगजेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "The 'Jallianwala Bagh Massacre' occurred in which year?",
    "question_hi": "'जलियांवाला बाग हत्याकांड' किस वर्ष हुआ?",
    "options_en": ["1919", "1920", "1930", "1942"],
    "options_hi": ["1919", "1920", "1930", "1942"],
    "answer_en": "1919",
    "answer_hi": "1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Who was the first woman to rule the Delhi Sultanate?",
    "question_hi": "दिल्ली सल्तनत पर शासन करने वाली पहली महिला कौन थी?",
    "options_en": ["Razia Sultana", "Nur Jahan", "Mumtaz Mahal", "Chand Bibi"],
    "options_hi": ["रजिया सुल्तान", "नूरजहाँ", "मुमताज महल", "चाँद बीबी"],
    "answer_en": "Razia Sultana",
    "answer_hi": "रजिया सुल्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "The 'Quit India Movement' was launched in which year?",
    "question_hi": "'भारत छोड़ो आंदोलन' किस वर्ष शुरू किया गया था?",
    "options_en": ["1942", "1930", "1920", "1947"],
    "options_hi": ["1942", "1930", "1920", "1947"],
    "answer_en": "1942",
    "answer_hi": "1942",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Who was the founder of the Maratha Empire?",
    "question_hi": "मराठा साम्राज्य के संस्थापक कौन थे?",
    "options_en": ["Shivaji", "Sambhaji", "Balaji Vishwanath", "Bajirao I"],
    "options_hi": ["शिवाजी", "संभाजी", "बालाजी विश्वनाथ", "बाजीराव प्रथम"],
    "answer_en": "Shivaji",
    "answer_hi": "शिवाजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "The 'Simon Commission' came to India in which year?",
    "question_hi": "'साइमन कमीशन' भारत किस वर्ष आया?",
    "options_en": ["1928", "1930", "1935", "1942"],
    "options_hi": ["1928", "1930", "1935", "1942"],
    "answer_en": "1928",
    "answer_hi": "1928",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Who was the first Sultan of Delhi?",
    "question_hi": "दिल्ली का पहला सुल्तान कौन था?",
    "options_en": ["Qutb-ud-din Aibak", "Iltutmish", "Balban", "Alauddin Khilji"],
    "options_hi": ["कुतुबुद्दीन ऐबक", "इल्तुतमिश", "बलबन", "अलाउद्दीन खिलजी"],
    "answer_en": "Qutb-ud-din Aibak",
    "answer_hi": "कुतुबुद्दीन ऐबक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "The ancient city of Pataliputra is located in present-day:",
    "question_hi": "प्राचीन शहर पाटलिपुत्र वर्तमान में कहाँ स्थित है?",
    "options_en": ["Patna", "Delhi", "Allahabad", "Varanasi"],
    "options_hi": ["पटना", "दिल्ली", "इलाहाबाद", "वाराणसी"],
    "answer_en": "Patna",
    "answer_hi": "पटना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Who wrote the book 'India Wins Freedom'?",
    "question_hi": "'इंडिया विंस फ्रीडम' पुस्तक किसने लिखी?",
    "options_en": ["Maulana Abul Kalam Azad", "Jawaharlal Nehru", "Subhas Chandra Bose", "Bhagat Singh"],
    "options_hi": ["मौलाना अबुल कलाम आज़ाद", "जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "भगत सिंह"],
    "answer_en": "Maulana Abul Kalam Azad",
    "answer_hi": "मौलाना अबुल कलाम आज़ाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "The 'Chauri Chaura incident' occurred during which movement?",
    "question_hi": "'चौरी चौरा घटना' किस आंदोलन के दौरान हुई?",
    "options_en": ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Swadeshi Movement"],
    "options_hi": ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "स्वदेशी आंदोलन"],
    "answer_en": "Non-Cooperation Movement",
    "answer_hi": "असहयोग आंदोलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Who was the last Hindu ruler of Delhi?",
    "question_hi": "दिल्ली का अंतिम हिंदू शासक कौन था?",
    "options_en": ["Prithviraj Chauhan", "Hemu", "Rana Sanga", "Vikramaditya"],
    "options_hi": ["पृथ्वीराज चौहान", "हेमू", "राणा सांगा", "विक्रमादित्य"],
    "answer_en": "Prithviraj Chauhan",
    "answer_hi": "पृथ्वीराज चौहान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "The 'Permanent Settlement' was introduced in Bengal by:",
    "question_hi": "'स्थायी बंदोबस्त' बंगाल में किसके द्वारा लागू किया गया था?",
    "options_en": ["Lord Cornwallis", "Lord Wellesley", "Lord Hastings", "Lord Dalhousie"],
    "options_hi": ["लॉर्ड कॉर्नवॉलिस", "लॉर्ड वेलेस्ली", "लॉर्ड हेस्टिंग्स", "लॉर्ड डलहौजी"],
    "answer_en": "Lord Cornwallis",
    "answer_hi": "लॉर्ड कॉर्नवॉलिस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Who founded the city of Jaipur?",
    "question_hi": "जयपुर शहर की स्थापना किसने की?",
    "options_en": ["Maharaja Sawai Jai Singh II", "Maharaja Man Singh I", "Maharaja Pratap Singh", "Maharaja Ram Singh II"],
    "options_hi": ["महाराजा सवाई जय सिंह द्वितीय", "महाराजा मान सिंह प्रथम", "महाराजा प्रताप सिंह", "महाराजा राम सिंह द्वितीय"],
    "answer_en": "Maharaja Sawai Jai Singh II",
    "answer_hi": "महाराजा सवाई जय सिंह द्वितीय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "The 'Rowlatt Act' was passed in which year?",
    "question_hi": "'रॉलेट एक्ट' किस वर्ष पारित किया गया था?",
    "options_en": ["1919", "1920", "1930", "1942"],
    "options_hi": ["1919", "1920", "1930", "1942"],
    "answer_en": "1919",
    "answer_hi": "1919",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Who was the first Indian to win the Nobel Prize?",
    "question_hi": "नोबेल पुरस्कार जीतने वाले पहले भारतीय कौन थे?",
    "options_en": ["Rabindranath Tagore", "C.V. Raman", "Mother Teresa", "Har Gobind Khorana"],
    "options_hi": ["रबींद्रनाथ टैगोर", "सी.वी. रमन", "मदर टेरेसा", "हर गोबिंद खुराना"],
    "answer_en": "Rabindranath Tagore",
    "answer_hi": "रबींद्रनाथ टैगोर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "The 'Battle of Buxar' was fought in which year?",
    "question_hi": "बक्सर का युद्ध किस वर्ष लड़ा गया था?",
    "options_en": ["1764", "1757", "1775", "1857"],
    "options_hi": ["1764", "1757", "1775", "1857"],
    "answer_en": "1764",
    "answer_hi": "1764",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Who built the Buland Darwaza?",
    "question_hi": "बुलंद दरवाजा किसने बनवाया?",
    "options_en": ["Akbar", "Shah Jahan", "Aurangzeb", "Sher Shah Suri"],
    "options_hi": ["अकबर", "शाहजहाँ", "औरंगजेब", "शेरशाह सूरी"],
    "answer_en": "Akbar",
    "answer_hi": "अकबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "The 'Partition of Bengal' took place in which year?",
    "question_hi": "बंगाल का विभाजन किस वर्ष हुआ?",
    "options_en": ["1905", "1911", "1947", "1971"],
    "options_hi": ["1905", "1911", "1947", "1971"],
    "answer_en": "1905",
    "answer_hi": "1905",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Who was the first Muslim woman to rule Delhi?",
    "question_hi": "दिल्ली पर शासन करने वाली पहली मुस्लिम महिला कौन थी?",
    "options_en": ["Razia Sultana", "Nur Jahan", "Mumtaz Mahal", "Chand Bibi"],
    "options_hi": ["रजिया सुल्तान", "नूरजहाँ", "मुमताज महल", "चाँद बीबी"],
    "answer_en": "Razia Sultana",
    "answer_hi": "रजिया सुल्तान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "The 'Kalinga War' was fought by which emperor?",
    "question_hi": "कलिंग युद्ध किस सम्राट द्वारा लड़ा गया था?",
    "options_en": ["Ashoka", "Chandragupta Maurya", "Samudragupta", "Harsha"],
    "options_hi": ["अशोक", "चंद्रगुप्त मौर्य", "समुद्रगुप्त", "हर्ष"],
    "answer_en": "Ashoka",
    "answer_hi": "अशोक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Who founded the city of Hyderabad?",
    "question_hi": "हैदराबाद शहर की स्थापना किसने की?",
    "options_en": ["Muhammad Quli Qutb Shah", "Asaf Jah I", "Ibrahim Qutb Shah", "Qutb Shahi"],
    "options_hi": ["मुहम्मद कुली कुतुब शाह", "आसफ जाह प्रथम", "इब्राहिम कुतुब शाह", "कुतुब शाही"],
    "answer_en": "Muhammad Quli Qutb Shah",
    "answer_hi": "मुहम्मद कुली कुतुब शाह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "The 'Treaty of Seringapatam' was signed between Tipu Sultan and:",
    "question_hi": "श्रीरंगपट्टनम की संधि टीपू सुल्तान और किसके बीच हुई?",
    "options_en": ["British East India Company", "French", "Portuguese", "Dutch"],
    "options_hi": ["ब्रिटिश ईस्ट इंडिया कंपनी", "फ्रांसीसी", "पुर्तगाली", "डच"],
    "answer_en": "British East India Company",
    "answer_hi": "ब्रिटिश ईस्ट इंडिया कंपनी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Who was the founder of the Vijayanagara Empire?",
    "question_hi": "विजयनगर साम्राज्य के संस्थापक कौन थे?",
    "options_en": ["Harihara I and Bukka Raya I", "Krishnadevaraya", "Devaraya I", "Sadasiva Raya"],
    "options_hi": ["हरिहर प्रथम और बुक्क राय प्रथम", "कृष्णदेवराय", "देवराय प्रथम", "सदाशिव राय"],
    "answer_en": "Harihara I and Bukka Raya I",
    "answer_hi": "हरिहर प्रथम और बुक्क राय प्रथम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "The 'Satyagraha' movement was started by:",
    "question_hi": "'सत्याग्रह' आंदोलन किसने शुरू किया?",
    "options_en": ["Mahatma Gandhi", "Jawaharlal Nehru", "Bal Gangadhar Tilak", "Subhas Chandra Bose"],
    "options_hi": ["महात्मा गांधी", "जवाहरलाल नेहरू", "बाल गंगाधर तिलक", "सुभाष चंद्र बोस"],
    "answer_en": "Mahatma Gandhi",
    "answer_hi": "महात्मा गांधी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Who built the Jama Masjid in Delhi?",
    "question_hi": "दिल्ली में जामा मस्जिद किसने बनवाई?",
    "options_en": ["Shah Jahan", "Akbar", "Aurangzeb", "Jahangir"],
    "options_hi": ["शाहजहाँ", "अकबर", "औरंगजेब", "जहाँगीर"],
    "answer_en": "Shah Jahan",
    "answer_hi": "शाहजहाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "The 'Mughal Empire' was founded in India by:",
    "question_hi": "'मुगल साम्राज्य' की स्थापना भारत में किसने की?",
    "options_en": ["Babur", "Akbar", "Humayun", "Sher Shah Suri"],
    "options_hi": ["बाबर", "अकबर", "हुमायूँ", "शेरशाह सूरी"],
    "answer_en": "Babur",
    "answer_hi": "बाबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Who was the first British Governor-General of India?",
    "question_hi": "भारत के पहले ब्रिटिश गवर्नर-जनरल कौन थे?",
    "options_en": ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Lord William Bentinck"],
    "options_hi": ["वॉरेन हेस्टिंग्स", "लॉर्ड कॉर्नवॉलिस", "लॉर्ड वेलेस्ली", "लॉर्ड विलियम बेंटिक"],
    "answer_en": "Warren Hastings",
    "answer_hi": "वॉरेन हेस्टिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "The 'Battle of Talikota' was fought in which year?",
    "question_hi": "तालिकोटा का युद्ध किस वर्ष लड़ा गया था?",
    "options_en": ["1565", "1526", "1556", "1605"],
    "options_hi": ["1565", "1526", "1556", "1605"],
    "answer_en": "1565",
    "answer_hi": "1565",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Who was the first President of the Indian National Congress?",
    "question_hi": "भारतीय राष्ट्रीय कांग्रेस के पहले अध्यक्ष कौन थे?",
    "options_en": ["W.C. Bonnerjee", "Dadabhai Naoroji", "A.O. Hume", "Badruddin Tyabji"],
    "options_hi": ["डब्ल्यू.सी. बनर्जी", "दादाभाई नौरोजी", "ए.ओ. ह्यूम", "बदरुद्दीन तैयबजी"],
    "answer_en": "W.C. Bonnerjee",
    "answer_hi": "डब्ल्यू.सी. बनर्जी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "The 'Khilafat Movement' was started in India to support:",
    "question_hi": "'खिलाफत आंदोलन' भारत में किसका समर्थन करने के लिए शुरू किया गया था?",
    "options_en": ["Ottoman Caliphate", "Indian Muslims", "Hindu-Muslim unity", "British government"],
    "options_hi": ["ऑटोमन खिलाफत", "भारतीय मुसलमान", "हिंदू-मुस्लिम एकता", "ब्रिटिश सरकार"],
    "answer_en": "Ottoman Caliphate",
    "answer_hi": "ऑटोमन खिलाफत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Who was the last Mughal emperor of India?",
    "question_hi": "भारत का अंतिम मुगल सम्राट कौन था?",
    "options_en": ["Bahadur Shah Zafar", "Aurangzeb", "Shah Alam II", "Akbar II"],
    "options_hi": ["बहादुर शाह ज़फर", "औरंगजेब", "शाह आलम द्वितीय", "अकबर द्वितीय"],
    "answer_en": "Bahadur Shah Zafar",
    "answer_hi": "बहादुर शाह ज़फर",
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