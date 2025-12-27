const questions = [
  {
  num: 1,
  question_en: "The 'Treaty of Seringapatam' (1792) was signed between Tipu Sultan and which British Governor-General?",
  question_hi: "'श्रीरंगपट्टनम की संधि' (1792) टीपू सुल्तान और किस ब्रिटिश गवर्नर-जनरल के बीच हस्ताक्षरित हुई थी?",
  options_en: ["Lord Cornwallis", "Lord Wellesley", "Warren Hastings", "Lord Dalhousie"],
  options_hi: ["लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेस्ली", "वारेन हेस्टिंग्स", "लॉर्ड डलहौजी"],
  answer_en: "Lord Cornwallis",
  answer_hi: "लॉर्ड कॉर्नवालिस",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "The 'Ryotwari System' was introduced by which British administrator in Madras Presidency?",
  question_hi: "'रैयतवाड़ी व्यवस्था' मद्रास प्रेसीडेंसी में किस ब्रिटिश प्रशासक द्वारा शुरू की गई थी?",
  options_en: ["Thomas Munro", "Lord Dalhousie", "Charles Metcalfe", "John Lawrence"],
  options_hi: ["थॉमस मुनरो", "लॉर्ड डलहौजी", "चार्ल्स मेटकाफ", "जॉन लॉरेंस"],
  answer_en: "Thomas Munro",
  answer_hi: "थॉमस मुनरो",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Who founded the 'Atmiya Sabha' in 1815, which later evolved into the Brahmo Samaj?",
  question_hi: "किसने 1815 में 'आत्मीय सभा' की स्थापना की, जो बाद में ब्रह्म समाज में विकसित हुई?",
  options_en: ["Raja Ram Mohan Roy", "Debendranath Tagore", "Keshab Chandra Sen", "Swami Vivekananda"],
  options_hi: ["राजा राम मोहन राय", "देवेंद्रनाथ टैगोर", "केशव चंद्र सेन", "स्वामी विवेकानंद"],
  answer_en: "Raja Ram Mohan Roy",
  answer_hi: "राजा राम मोहन राय",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "The 'Permanent Settlement' was introduced in Bengal and Bihar in which year?",
  question_hi: "'स्थायी बंदोबस्त' बंगाल और बिहार में किस वर्ष लागू किया गया था?",
  options_en: ["1773", "1793", "1813", "1833"],
  options_hi: ["1773", "1793", "1813", "1833"],
  answer_en: "1793",
  answer_hi: "1793",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Who was the Viceroy of India when the Indian National Congress was founded in 1885?",
  question_hi: "जब 1885 में भारतीय राष्ट्रीय कांग्रेस की स्थापना हुई थी, तब भारत का वायसराय कौन था?",
  options_en: ["Lord Dufferin", "Lord Ripon", "Lord Curzon", "Lord Minto"],
  options_hi: ["लॉर्ड डफरिन", "लॉर्ड रिपन", "लॉर्ड कर्जन", "लॉर्ड मिंटो"],
  answer_en: "Lord Dufferin",
  answer_hi: "लॉर्ड डफरिन",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "The 'Ilbert Bill Controversy' (1883-84) was related to:",
  question_hi: "'इल्बर्ट बिल विवाद' (1883-84) संबंधित था:",
  options_en: ["Judicial equality between Indians and Europeans", "Land revenue system", "Press freedom", "Army reforms"],
  options_hi: ["भारतीयों और यूरोपीयों के बीच न्यायिक समानता", "भू-राजस्व व्यवस्था", "प्रेस स्वतंत्रता", "सेना सुधार"],
  answer_en: "Judicial equality between Indians and Europeans",
  answer_hi: "भारतीयों और यूरोपीयों के बीच न्यायिक समानता",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who authored the book 'Poverty and Un-British Rule in India'?",
  question_hi: "'भारत में गरीबी और अब्रिटिश शासन' पुस्तक के लेखक कौन हैं?",
  options_en: ["Dadabhai Naoroji", "R.C. Dutt", "M.G. Ranade", "Gopal Krishna Gokhale"],
  options_hi: ["दादाभाई नौरोजी", "आर.सी. दत्त", "एम.जी. रानाडे", "गोपाल कृष्ण गोखले"],
  answer_en: "Dadabhai Naoroji",
  answer_hi: "दादाभाई नौरोजी",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "The 'Partition of Bengal' was annulled in which year?",
  question_hi: "'बंगाल का विभाजन' किस वर्ष रद्द किया गया था?",
  options_en: ["1905", "1911", "1919", "1935"],
  options_hi: ["1905", "1911", "1919", "1935"],
  answer_en: "1911",
  answer_hi: "1911",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Who founded the 'Gadar Party' in San Francisco in 1913?",
  question_hi: "1913 में सैन फ्रांसिस्को में 'गदर पार्टी' की स्थापना किसने की?",
  options_en: ["Lala Hardayal", "Sohan Singh Bhakna", "Kartar Singh Sarabha", "Rash Behari Bose"],
  options_hi: ["लाला हरदयाल", "सोहन सिंह भकना", "कार्तार सिंह सराभा", "रास बिहारी बोस"],
  answer_en: "Lala Hardayal",
  answer_hi: "लाला हरदयाल",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "The 'Champaran Satyagraha' (1917) was related to which crop?",
  question_hi: "'चंपारण सत्याग्रह' (1917) किस फसल से संबंधित था?",
  options_en: ["Indigo", "Cotton", "Jute", "Sugarcane"],
  options_hi: ["नील", "कपास", "जूट", "गन्ना"],
  answer_en: "Indigo",
  answer_hi: "नील",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Who was the President of the Indian National Congress when it passed the 'Purna Swaraj' resolution in 1929?",
  question_hi: "1929 में भारतीय राष्ट्रीय कांग्रेस ने 'पूर्ण स्वराज' संकल्प पारित किया था, तब इसके अध्यक्ष कौन थे?",
  options_en: ["Jawaharlal Nehru", "Subhash Chandra Bose", "Motilal Nehru", "Mahatma Gandhi"],
  options_hi: ["जवाहरलाल नेहरू", "सुभाष चंद्र बोस", "मोतीलाल नेहरू", "महात्मा गांधी"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "The 'Hindustan Socialist Republican Association' was founded by:",
  question_hi: "'हिंदुस्तान सोशलिस्ट रिपब्लिकन एसोसिएशन' की स्थापना किसके द्वारा की गई थी?",
  options_en: ["Chandrashekhar Azad", "Bhagat Singh", "Ram Prasad Bismil", "Ashfaqulla Khan"],
  options_hi: ["चंद्रशेखर आजाद", "भगत सिंह", "राम प्रसाद बिस्मिल", "अशफाक उल्ला खान"],
  answer_en: "Chandrashekhar Azad",
  answer_hi: "चंद्रशेखर आजाद",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "The 'First Round Table Conference' was held in London in which year?",
  question_hi: "'प्रथम गोलमेज सम्मेलन' लंदन में किस वर्ष आयोजित किया गया था?",
  options_en: ["1929", "1930", "1931", "1932"],
  options_hi: ["1929", "1930", "1931", "1932"],
  answer_en: "1930",
  answer_hi: "1930",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Who was the first Indian to be elected as the President of the Indian National Congress?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस के अध्यक्ष के रूप में चुने जाने वाले पहले भारतीय कौन थे?",
  options_en: ["W.C. Banerjee", "Dadabhai Naoroji", "Badruddin Tyabji", "Surendranath Banerjee"],
  options_hi: ["डब्ल्यू.सी. बनर्जी", "दादाभाई नौरोजी", "बदरुद्दीन तैयबजी", "सुरेंद्रनाथ बनर्जी"],
  answer_en: "W.C. Banerjee",
  answer_hi: "डब्ल्यू.सी. बनर्जी",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "The 'Cabinet Mission Plan' was sent to India in which year?",
  question_hi: "'कैबिनेट मिशन योजना' भारत में किस वर्ष भेजी गई थी?",
  options_en: ["1942", "1945", "1946", "1947"],
  options_hi: ["1942", "1945", "1946", "1947"],
  answer_en: "1946",
  answer_hi: "1946",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Who was the first Governor-General of independent India?",
  question_hi: "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
  options_en: ["Lord Mountbatten", "C. Rajagopalachari", "Rajendra Prasad", "Jawaharlal Nehru"],
  options_hi: ["लॉर्ड माउंटबेटन", "सी. राजगोपालाचारी", "राजेंद्र प्रसाद", "जवाहरलाल नेहरू"],
  answer_en: "Lord Mountbatten",
  answer_hi: "लॉर्ड माउंटबेटन",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "The 'Doctrine of Lapse' was introduced by:",
  question_hi: "'लैप्स सिद्धांत' किसके द्वारा प्रस्तुत किया गया था?",
  options_en: ["Lord Dalhousie", "Lord Wellesley", "Lord Hastings", "Lord Bentinck"],
  options_hi: ["लॉर्ड डलहौजी", "लॉर्ड वेलेस्ली", "लॉर्ड हेस्टिंग्स", "लॉर्ड बेंटिक"],
  answer_en: "Lord Dalhousie",
  answer_hi: "लॉर्ड डलहौजी",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "The 'Battle of Buxar' was fought in which year?",
  question_hi: "बक्सर का युद्ध किस वर्ष लड़ा गया था?",
  options_en: ["1757", "1764", "1774", "1782"],
  options_hi: ["1757", "1764", "1774", "1782"],
  answer_en: "1764",
  answer_hi: "1764",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Who was the founder of the 'Servants of India Society'?",
  question_hi: "'सर्वेंट्स ऑफ इंडिया सोसाइटी' के संस्थापक कौन थे?",
  options_en: ["Gopal Krishna Gokhale", "M.G. Ranade", "Dadabhai Naoroji", "Bal Gangadhar Tilak"],
  options_hi: ["गोपाल कृष्ण गोखले", "एम.जी. रानाडे", "दादाभाई नौरोजी", "बाल गंगाधर तिलक"],
  answer_en: "Gopal Krishna Gokhale",
  answer_hi: "गोपाल कृष्ण गोखले",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "The 'Poona Pact' (1932) was signed between Mahatma Gandhi and:",
  question_hi: "'पूना पैक्ट' (1932) महात्मा गांधी और किसके बीच हस्ताक्षरित हुआ था?",
  options_en: ["B.R. Ambedkar", "Jawaharlal Nehru", "Sardar Patel", "C. Rajagopalachari"],
  options_hi: ["बी.आर. अंबेडकर", "जवाहरलाल नेहरू", "सरदार पटेल", "सी. राजगोपालाचारी"],
  answer_en: "B.R. Ambedkar",
  answer_hi: "बी.आर. अंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "The 'First Anglo-Maratha War' ended with which treaty?",
  question_hi: "'प्रथम आंग्ल-मराठा युद्ध' किस संधि के साथ समाप्त हुआ?",
  options_en: ["Treaty of Salbai", "Treaty of Bassein", "Treaty of Purandar", "Treaty of Surat"],
  options_hi: ["सालबाई की संधि", "बेसिन की संधि", "पुरंदर की संधि", "सूरत की संधि"],
  answer_en: "Treaty of Salbai",
  answer_hi: "सालबाई की संधि",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Who was the first Indian to qualify for the Indian Civil Services?",
  question_hi: "भारतीय सिविल सेवा के लिए योग्यता प्राप्त करने वाले पहले भारतीय कौन थे?",
  options_en: ["Satyendranath Tagore", "R.C. Dutt", "Surendranath Banerjee", "Bihari Lal Gupta"],
  options_hi: ["सत्येंद्रनाथ टैगोर", "आर.सी. दत्त", "सुरेंद्रनाथ बनर्जी", "बिहारी लाल गुप्ता"],
  answer_en: "Satyendranath Tagore",
  answer_hi: "सत्येंद्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "The 'Swaraj Party' was founded by:",
  question_hi: "'स्वराज पार्टी' की स्थापना किसने की थी?",
  options_en: ["Motilal Nehru and C.R. Das", "Jawaharlal Nehru and Subhash Bose", "Mahatma Gandhi and Sardar Patel", "Bal Gangadhar Tilak and Gopal Krishna Gokhale"],
  options_hi: ["मोतीलाल नेहरू और सी.आर. दास", "जवाहरलाल नेहरू और सुभाष बोस", "महात्मा गांधी और सरदार पटेल", "बाल गंगाधर तिलक और गोपाल कृष्ण गोखले"],
  answer_en: "Motilal Nehru and C.R. Das",
  answer_hi: "मोतीलाल नेहरू और सी.आर. दास",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "The 'Battle of Plassey' was fought in which year?",
  question_hi: "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
  options_en: ["1757", "1764", "1774", "1782"],
  options_hi: ["1757", "1764", "1774", "1782"],
  answer_en: "1757",
  answer_hi: "1757",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Who was the founder of the 'Theosophical Society' in India?",
  question_hi: "भारत में 'थियोसोफिकल सोसाइटी' के संस्थापक कौन थे?",
  options_en: ["Annie Besant", "Madame Blavatsky", "Henry Steel Olcott", "Swami Dayanand Saraswati"],
  options_hi: ["एनी बेसेंट", "मैडम ब्लावात्स्की", "हेनरी स्टील ओल्कोट", "स्वामी दयानंद सरस्वती"],
  answer_en: "Annie Besant",
  answer_hi: "एनी बेसेंट",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "The 'Government of India Act, 1919' is also known as:",
  question_hi: "'भारत सरकार अधिनियम, 1919' किस नाम से भी जाना जाता है?",
  options_en: ["Montagu-Chelmsford Reforms", "Morley-Minto Reforms", "Simon Commission Act", "Indian Councils Act"],
  options_hi: ["मोंटेग्यू-चेम्सफोर्ड सुधार", "मॉर्ले-मिंटो सुधार", "साइमन कमीशन अधिनियम", "भारतीय परिषद अधिनियम"],
  answer_en: "Montagu-Chelmsford Reforms",
  answer_hi: "मोंटेग्यू-चेम्सफोर्ड सुधार",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Who was the last Mughal Emperor of India?",
  question_hi: "भारत का अंतिम मुगल सम्राट कौन था?",
  options_en: ["Bahadur Shah Zafar", "Shah Alam II", "Akbar Shah II", "Muhammad Shah"],
  options_hi: ["बहादुर शाह जफर", "शाह आलम द्वितीय", "अकबर शाह द्वितीय", "मुहम्मद शाह"],
  answer_en: "Bahadur Shah Zafar",
  answer_hi: "बहादुर शाह जफर",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "The 'Kheda Satyagraha' (1918) was led by:",
  question_hi: "'खेड़ा सत्याग्रह' (1918) का नेतृत्व किसने किया?",
  options_en: ["Mahatma Gandhi", "Sardar Patel", "Jawaharlal Nehru", "Bal Gangadhar Tilak"],
  options_hi: ["महात्मा गांधी", "सरदार पटेल", "जवाहरलाल नेहरू", "बाल गंगाधर तिलक"],
  answer_en: "Sardar Patel",
  answer_hi: "सरदार पटेल",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "The 'Battle of Wandiwash' (1760) was fought between:",
  question_hi: "वांडीवाश का युद्ध (1760) किसके बीच लड़ा गया था?",
  options_en: ["British and French", "British and Dutch", "British and Portuguese", "French and Dutch"],
  options_hi: ["ब्रिटिश और फ्रेंच", "ब्रिटिश और डच", "ब्रिटिश और पुर्तगाली", "फ्रेंच और डच"],
  answer_en: "British and French",
  answer_hi: "ब्रिटिश और फ्रेंच",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Who founded the 'Arya Samaj'?",
  question_hi: "'आर्य समाज' की स्थापना किसने की?",
  options_en: ["Swami Dayanand Saraswati", "Raja Ram Mohan Roy", "Swami Vivekananda", "Ramakrishna Paramahansa"],
  options_hi: ["स्वामी दयानंद सरस्वती", "राजा राम मोहन राय", "स्वामी विवेकानंद", "रामकृष्ण परमहंस"],
  answer_en: "Swami Dayanand Saraswati",
  answer_hi: "स्वामी दयानंद सरस्वती",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "The 'Third Battle of Panipat' was fought in which year?",
  question_hi: "पानीपत का तीसरा युद्ध किस वर्ष लड़ा गया था?",
  options_en: ["1526", "1556", "1761", "1857"],
  options_hi: ["1526", "1556", "1761", "1857"],
  answer_en: "1761",
  answer_hi: "1761",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Who was the first Indian woman President of the Indian National Congress?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस की पहली भारतीय महिला अध्यक्ष कौन थीं?",
  options_en: ["Sarojini Naidu", "Annie Besant", "Vijaya Lakshmi Pandit", "Indira Gandhi"],
  options_hi: ["सरोजिनी नायडू", "एनी बेसेंट", "विजया लक्ष्मी पंडित", "इंदिरा गाँधी"],
  answer_en: "Sarojini Naidu",
  answer_hi: "सरोजिनी नायडू",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "The 'Battle of Haldighati' was fought between:",
  question_hi: "हल्दीघाटी का युद्ध किसके बीच लड़ा गया था?",
  options_en: ["Akbar and Rana Pratap", "Babur and Rana Sanga", "Aurangzeb and Shivaji", "Sher Shah and Humayun"],
  options_hi: ["अकबर और राणा प्रताप", "बाबर और राणा सांगा", "औरंगजेब और शिवाजी", "शेर शाह और हुमायूँ"],
  answer_en: "Akbar and Rana Pratap",
  answer_hi: "अकबर और राणा प्रताप",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Who was the founder of the 'Indian Association' in 1876?",
  question_hi: "1876 में 'इंडियन एसोसिएशन' के संस्थापक कौन थे?",
  options_en: ["Surendranath Banerjee", "Anand Mohan Bose", "Dadabhai Naoroji", "W.C. Banerjee"],
  options_hi: ["सुरेंद्रनाथ बनर्जी", "आनंद मोहन बोस", "दादाभाई नौरोजी", "डब्ल्यू.सी. बनर्जी"],
  answer_en: "Surendranath Banerjee",
  answer_hi: "सुरेंद्रनाथ बनर्जी",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "The 'Moplah Rebellion' (1921) took place in which region?",
  question_hi: "'मोपला विद्रोह' (1921) किस क्षेत्र में हुआ?",
  options_en: ["Malabar (Kerala)", "Bengal", "Punjab", "Maharashtra"],
  options_hi: ["मालाबार (केरल)", "बंगाल", "पंजाब", "महाराष्ट्र"],
  answer_en: "Malabar (Kerala)",
  answer_hi: "मालाबार (केरल)",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Who was the first Governor-General of Bengal under the East India Company?",
  question_hi: "ईस्ट इंडिया कंपनी के तहत बंगाल के पहले गवर्नर-जनरल कौन थे?",
  options_en: ["Warren Hastings", "Lord Cornwallis", "Lord Wellesley", "Robert Clive"],
  options_hi: ["वारेन हेस्टिंग्स", "लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेस्ली", "रॉबर्ट क्लाइव"],
  answer_en: "Warren Hastings",
  answer_hi: "वारेन हेस्टिंग्स",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "The 'Hunter Commission' was appointed to investigate which incident?",
  question_hi: "'हंटर कमीशन' किस घटना की जांच के लिए नियुक्त किया गया था?",
  options_en: ["Jallianwala Bagh Massacre", "Chauri Chaura incident", "Kakori Conspiracy", "Alipore Bomb Case"],
  options_hi: ["जलियांवाला बाग हत्याकांड", "चौरी चौरा घटना", "काकोरी षडयंत्र", "अलीपुर बम केस"],
  answer_en: "Jallianwala Bagh Massacre",
  answer_hi: "जलियांवाला बाग हत्याकांड",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Who founded the 'Bharat Sevak Samaj' in 1905?",
  question_hi: "'भारत सेवक समाज' की स्थापना 1905 में किसने की?",
  options_en: ["Gopal Krishna Gokhale", "M.G. Ranade", "Dadabhai Naoroji", "Bal Gangadhar Tilak"],
  options_hi: ["गोपाल कृष्ण गोखले", "एम.जी. रानाडे", "दादाभाई नौरोजी", "बाल गंगाधर तिलक"],
  answer_en: "Gopal Krishna Gokhale",
  answer_hi: "गोपाल कृष्ण गोखले",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "The 'Treaty of Bassein' (1802) was signed between the British and:",
  question_hi: "'बेसिन की संधि' (1802) ब्रिटिश और किसके बीच हस्ताक्षरित हुई थी?",
  options_en: ["Baji Rao II", "Madhav Rao I", "Nana Fadnavis", "Shivaji II"],
  options_hi: ["बाजी राव द्वितीय", "माधव राव प्रथम", "नाना फडणवीस", "शिवाजी द्वितीय"],
  answer_en: "Baji Rao II",
  answer_hi: "बाजी राव द्वितीय",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Who was the founder of the 'Satya Shodhak Samaj'?",
  question_hi: "'सत्य शोधक समाज' के संस्थापक कौन थे?",
  options_en: ["Jyotirao Phule", "B.R. Ambedkar", "Periyar E.V. Ramasamy", "Narayana Guru"],
  options_hi: ["ज्योतिराव फुले", "बी.आर. अंबेडकर", "पेरियार ई.वी. रामासामी", "नारायण गुरु"],
  answer_en: "Jyotirao Phule",
  answer_hi: "ज्योतिराव फुले",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "The 'Battle of Chausa' was fought between:",
  question_hi: "चौसा का युद्ध किसके बीच लड़ा गया था?",
  options_en: ["Sher Shah Suri and Humayun", "Babur and Ibrahim Lodi", "Akbar and Hemu", "Aurangzeb and Shivaji"],
  options_hi: ["शेर शाह सूरी और हुमायूँ", "बाबर और इब्राहिम लोदी", "अकबर और हेमू", "औरंगजेब और शिवाजी"],
  answer_en: "Sher Shah Suri and Humayun",
  answer_hi: "शेर शाह सूरी और हुमायूँ",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Who was the first Indian to become a member of the British Parliament?",
  question_hi: "ब्रिटिश संसद के सदस्य बनने वाले पहले भारतीय कौन थे?",
  options_en: ["Dadabhai Naoroji", "Surendranath Banerjee", "R.C. Dutt", "Gopal Krishna Gokhale"],
  options_hi: ["दादाभाई नौरोजी", "सुरेंद्रनाथ बनर्जी", "आर.सी. दत्त", "गोपाल कृष्ण गोखले"],
  answer_en: "Dadabhai Naoroji",
  answer_hi: "दादाभाई नौरोजी",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "The 'First Anglo-Sikh War' ended with which treaty?",
  question_hi: "'प्रथम आंग्ल-सिख युद्ध' किस संधि के साथ समाप्त हुआ?",
  options_en: ["Treaty of Lahore", "Treaty of Amritsar", "Treaty of Bhairowal", "Treaty of Ferozepur"],
  options_hi: ["लाहौर की संधि", "अमृतसर की संधि", "भैरोवाल की संधि", "फिरोजपुर की संधि"],
  answer_en: "Treaty of Lahore",
  answer_hi: "लाहौर की संधि",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Who founded the 'Ramakrishna Mission'?",
  question_hi: "'रामकृष्ण मिशन' की स्थापना किसने की?",
  options_en: ["Swami Vivekananda", "Ramakrishna Paramahansa", "Swami Dayanand Saraswati", "Sri Aurobindo"],
  options_hi: ["स्वामी विवेकानंद", "रामकृष्ण परमहंस", "स्वामी दयानंद सरस्वती", "श्री अरविंद"],
  answer_en: "Swami Vivekananda",
  answer_hi: "स्वामी विवेकानंद",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "The 'Battle of Talikota' (1565) resulted in the downfall of which empire?",
  question_hi: "तालिकोटा का युद्ध (1565) के परिणामस्वरूप किस साम्राज्य का पतन हुआ?",
  options_en: ["Vijayanagara Empire", "Bahmani Sultanate", "Mughal Empire", "Delhi Sultanate"],
  options_hi: ["विजयनगर साम्राज्य", "बहमनी सल्तनत", "मुगल साम्राज्य", "दिल्ली सल्तनत"],
  answer_en: "Vijayanagara Empire",
  answer_hi: "विजयनगर साम्राज्य",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Who was the first Muslim President of the Indian National Congress?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस के पहले मुस्लिम अध्यक्ष कौन थे?",
  options_en: ["Badruddin Tyabji", "Maulana Abul Kalam Azad", "Syed Ahmed Khan", "M.A. Ansari"],
  options_hi: ["बदरुद्दीन तैयबजी", "मौलाना अबुल कलाम आज़ाद", "सैयद अहमद खान", "एम.ए. अंसारी"],
  answer_en: "Badruddin Tyabji",
  answer_hi: "बदरुद्दीन तैयबजी",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "The 'Battle of Karnal' (1739) was fought between:",
  question_hi: "करनाल का युद्ध (1739) किसके बीच लड़ा गया था?",
  options_en: ["Nadir Shah and Muhammad Shah", "Ahmad Shah Abdali and Marathas", "Babur and Ibrahim Lodi", "Akbar and Hemu"],
  options_hi: ["नादिर शाह और मुहम्मद शाह", "अहमद शाह अब्दाली और मराठे", "बाबर और इब्राहिम लोदी", "अकबर और हेमू"],
  answer_en: "Nadir Shah and Muhammad Shah",
  answer_hi: "नादिर शाह और मुहम्मद शाह",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Who founded the 'All India Muslim League' in 1906?",
  question_hi: "'अखिल भारतीय मुस्लिम लीग' की स्थापना 1906 में किसने की?",
  options_en: ["Aga Khan III", "Syed Ahmed Khan", "M.A. Jinnah", "Liaquat Ali Khan"],
  options_hi: ["आगा खान तृतीय", "सैयद अहमद खान", "एम.ए. जिन्ना", "लियाकत अली खान"],
  answer_en: "Aga Khan III",
  answer_hi: "आगा खान तृतीय",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "The 'Battle of Ghaghra' was fought between:",
  question_hi: "घाघरा का युद्ध किसके बीच लड़ा गया था?",
  options_en: ["Babur and Afghans", "Akbar and Rana Pratap", "Aurangzeb and Shivaji", "Sher Shah and Humayun"],
  options_hi: ["बाबर और अफगान", "अकबर और राणा प्रताप", "औरंगजेब और शिवाजी", "शेर शाह और हुमायूँ"],
  answer_en: "Babur and Afghans",
  answer_hi: "बाबर और अफगान",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Who was the first Indian to become the President of the International Court of Justice?",
  question_hi: "अंतर्राष्ट्रीय न्यायालय के अध्यक्ष बनने वाले पहले भारतीय कौन थे?",
  options_en: ["Nagendra Singh", "R.S. Pathak", "B.N. Rau", "P.N. Bhagwati"],
  options_hi: ["नगेंद्र सिंह", "आर.एस. पाठक", "बी.एन. राव", "पी.एन. भगवती"],
  answer_en: "Nagendra Singh",
  answer_hi: "नगेंद्र सिंह",
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