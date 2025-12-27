const questions = [
  {
  num: 1,
  question_en: "Who is known as the 'Father of the Indian Constitution'?",
  question_hi: "'भारतीय संविधान के पिता' के रूप में किसे जाना जाता है?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "B.R. Ambedkar", "Sardar Patel"],
  options_hi: ["महात्मा गाँधी", "जवाहरलाल नेहरू", "बी.आर. अंबेडकर", "सरदार पटेल"],
  answer_en: "B.R. Ambedkar",
  answer_hi: "बी.आर. अंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "The Indian National Congress was founded in which year?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस की स्थापना किस वर्ष हुई थी?",
  options_en: ["1885", "1905", "1920", "1947"],
  options_hi: ["1885", "1905", "1920", "1947"],
  answer_en: "1885",
  answer_hi: "1885",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the term of a Member of Rajya Sabha?",
  question_hi: "राज्यसभा सदस्य का कार्यकाल कितना होता है?",
  options_en: ["2 years", "4 years", "5 years", "6 years"],
  options_hi: ["2 वर्ष", "4 वर्ष", "5 वर्ष", "6 वर्ष"],
  answer_en: "6 years",
  answer_hi: "6 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "The 'Dandi March' was associated with which movement?",
  question_hi: "'दांडी मार्च' किस आंदोलन से जुड़ा था?",
  options_en: ["Non-Cooperation Movement", "Civil Disobedience Movement", "Quit India Movement", "Khilafat Movement"],
  options_hi: ["असहयोग आंदोलन", "सविनय अवज्ञा आंदोलन", "भारत छोड़ो आंदोलन", "खिलाफत आंदोलन"],
  answer_en: "Civil Disobedience Movement",
  answer_hi: "सविनय अवज्ञा आंदोलन",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Who was the first Governor-General of independent India?",
  question_hi: "स्वतंत्र भारत के पहले गवर्नर-जनरल कौन थे?",
  options_en: ["C. Rajagopalachari", "Lord Mountbatten", "Rajendra Prasad", "Jawaharlal Nehru"],
  options_hi: ["सी. राजगोपालाचारी", "लॉर्ड माउंटबेटन", "राजेंद्र प्रसाद", "जवाहरलाल नेहरू"],
  answer_en: "Lord Mountbatten",
  answer_hi: "लॉर्ड माउंटबेटन",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "The concept of 'Separation of Powers' was propounded by:",
  question_hi: "'शक्तियों के पृथक्करण' की अवधारणा किसके द्वारा प्रतिपादित की गई थी?",
  options_en: ["John Locke", "Rousseau", "Montesquieu", "Aristotle"],
  options_hi: ["जॉन लॉक", "रूसो", "मॉन्टेस्क्यू", "अरस्तू"],
  answer_en: "Montesquieu",
  answer_hi: "मॉन्टेस्क्यू",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Who wrote 'The Wealth of Nations'?",
  question_hi: "'द वेल्थ ऑफ नेशंस' किसने लिखी?",
  options_en: ["Karl Marx", "John Maynard Keynes", "Adam Smith", "David Ricardo"],
  options_hi: ["कार्ल मार्क्स", "जॉन मेनार्ड कीन्स", "एडम स्मिथ", "डेविड रिकार्डो"],
  answer_en: "Adam Smith",
  answer_hi: "एडम स्मिथ",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "The Battle of Plassey was fought in which year?",
  question_hi: "प्लासी का युद्ध किस वर्ष लड़ा गया था?",
  options_en: ["1757", "1764", "1775", "1789"],
  options_hi: ["1757", "1764", "1775", "1789"],
  answer_en: "1757",
  answer_hi: "1757",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is the minimum age to become the President of India?",
  question_hi: "भारत के राष्ट्रपति बनने के लिए न्यूनतम आयु कितनी होनी चाहिए?",
  options_en: ["30 years", "35 years", "40 years", "45 years"],
  options_hi: ["30 वर्ष", "35 वर्ष", "40 वर्ष", "45 वर्ष"],
  answer_en: "35 years",
  answer_hi: "35 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Who was the first woman to become Prime Minister of India?",
  question_hi: "भारत की पहली महिला प्रधानमंत्री कौन बनीं?",
  options_en: ["Sonia Gandhi", "Indira Gandhi", "Pratibha Patil", "Sarojini Naidu"],
  options_hi: ["सोनिया गाँधी", "इंदिरा गाँधी", "प्रतिभा पाटिल", "सरोजिनी नायडू"],
  answer_en: "Indira Gandhi",
  answer_hi: "इंदिरा गाँधी",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "The 'Doctrine of Lapse' was associated with which Governor-General?",
  question_hi: "'लैप्स सिद्धांत' किस गवर्नर-जनरल से जुड़ा था?",
  options_en: ["Lord Dalhousie", "Lord Wellesley", "Lord Canning", "Lord Curzon"],
  options_hi: ["लॉर्ड डलहौजी", "लॉर्ड वेलेस्ली", "लॉर्ड कैनिंग", "लॉर्ड कर्जन"],
  answer_en: "Lord Dalhousie",
  answer_hi: "लॉर्ड डलहौजी",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Who propounded the 'Theory of Surplus Value'?",
  question_hi: "'अतिरिक्त मूल्य का सिद्धांत' किसने प्रतिपादित किया?",
  options_en: ["Adam Smith", "Karl Marx", "John Keynes", "David Ricardo"],
  options_hi: ["एडम स्मिथ", "कार्ल मार्क्स", "जॉन कीन्स", "डेविड रिकार्डो"],
  answer_en: "Karl Marx",
  answer_hi: "कार्ल मार्क्स",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "The Constitution of India was adopted on:",
  question_hi: "भारत का संविधान कब अपनाया गया था?",
  options_en: ["26 January 1947", "26 November 1949", "26 January 1950", "15 August 1947"],
  options_hi: ["26 जनवरी 1947", "26 नवंबर 1949", "26 जनवरी 1950", "15 अगस्त 1947"],
  answer_en: "26 November 1949",
  answer_hi: "26 नवंबर 1949",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Who was the founder of the Mauryan Empire?",
  question_hi: "मौर्य साम्राज्य के संस्थापक कौन थे?",
  options_en: ["Ashoka", "Chandragupta Maurya", "Bindusara", "Samudragupta"],
  options_hi: ["अशोक", "चंद्रगुप्त मौर्य", "बिन्दुसार", "समुद्रगुप्त"],
  answer_en: "Chandragupta Maurya",
  answer_hi: "चंद्रगुप्त मौर्य",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is the main objective of the 'Five Year Plans' in India?",
  question_hi: "भारत में 'पंचवर्षीय योजनाओं' का मुख्य उद्देश्य क्या है?",
  options_en: ["Industrial Development", "Agricultural Development", "Economic Development", "Social Development"],
  options_hi: ["औद्योगिक विकास", "कृषि विकास", "आर्थिक विकास", "सामाजिक विकास"],
  answer_en: "Economic Development",
  answer_hi: "आर्थिक विकास",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "The 'Quit India Movement' was launched in which year?",
  question_hi: "'भारत छोड़ो आंदोलन' किस वर्ष शुरू किया गया था?",
  options_en: ["1930", "1942", "1945", "1947"],
  options_hi: ["1930", "1942", "1945", "1947"],
  answer_en: "1942",
  answer_hi: "1942",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Who appoints the Chief Election Commissioner of India?",
  question_hi: "भारत के मुख्य चुनाव आयुक्त की नियुक्ति कौन करता है?",
  options_en: ["Prime Minister", "President", "Parliament", "Supreme Court"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "संसद", "सर्वोच्च न्यायालय"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
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
  question_en: "What is 'Inflation' in economics?",
  question_hi: "अर्थशास्त्र में 'मुद्रास्फीति' क्या है?",
  options_en: ["Decrease in prices", "Increase in prices", "Stable prices", "Increase in production"],
  options_hi: ["कीमतों में कमी", "कीमतों में वृद्धि", "स्थिर कीमतें", "उत्पादन में वृद्धि"],
  answer_en: "Increase in prices",
  answer_hi: "कीमतों में वृद्धि",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Who was the first woman President of the Indian National Congress?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस की पहली महिला अध्यक्ष कौन थीं?",
  options_en: ["Sarojini Naidu", "Annie Besant", "Vijaya Lakshmi Pandit", "Indira Gandhi"],
  options_hi: ["सरोजिनी नायडू", "एनी बेसेंट", "विजय लक्ष्मी पंडित", "इंदिरा गाँधी"],
  answer_en: "Annie Besant",
  answer_hi: "एनी बेसेंट",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "The concept of 'Basic Structure' of the Constitution was propounded by:",
  question_hi: "संविधान की 'मूल संरचना' की अवधारणा किसने प्रतिपादित की?",
  options_en: ["Supreme Court", "Parliament", "President", "Prime Minister"],
  options_hi: ["सर्वोच्च न्यायालय", "संसद", "राष्ट्रपति", "प्रधानमंत्री"],
  answer_en: "Supreme Court",
  answer_hi: "सर्वोच्च न्यायालय",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Who founded the 'Mughal Empire' in India?",
  question_hi: "भारत में 'मुगल साम्राज्य' की स्थापना किसने की?",
  options_en: ["Akbar", "Babur", "Humayun", "Aurangzeb"],
  options_hi: ["अकबर", "बाबर", "हुमायूँ", "औरंगजेब"],
  answer_en: "Babur",
  answer_hi: "बाबर",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is 'GDP' in economics?",
  question_hi: "अर्थशास्त्र में 'जीडीपी' क्या है?",
  options_en: ["Gross Domestic Product", "General Development Plan", "Gross Development Product", "General Domestic Product"],
  options_hi: ["सकल घरेलू उत्पाद", "सामान्य विकास योजना", "सकल विकास उत्पाद", "सामान्य घरेलू उत्पाद"],
  answer_en: "Gross Domestic Product",
  answer_hi: "सकल घरेलू उत्पाद",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "The 'Simon Commission' came to India in which year?",
  question_hi: "'साइमन कमीशन' भारत किस वर्ष आया?",
  options_en: ["1927", "1928", "1929", "1930"],
  options_hi: ["1927", "1928", "1929", "1930"],
  answer_en: "1928",
  answer_hi: "1928",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which article of the Indian Constitution deals with 'Right to Equality'?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद 'समानता का अधिकार' से संबंधित है?",
  options_en: ["Article 14", "Article 19", "Article 21", "Article 32"],
  options_hi: ["अनुच्छेद 14", "अनुच्छेद 19", "अनुच्छेद 21", "अनुच्छेद 32"],
  answer_en: "Article 14",
  answer_hi: "अनुच्छेद 14",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Who was the first British Governor-General of India?",
  question_hi: "भारत के पहले ब्रिटिश गवर्नर-जनरल कौन थे?",
  options_en: ["Lord Cornwallis", "Lord Wellesley", "Warren Hastings", "Lord Dalhousie"],
  options_hi: ["लॉर्ड कॉर्नवालिस", "लॉर्ड वेलेस्ली", "वारेन हेस्टिंग्स", "लॉर्ड डलहौजी"],
  answer_en: "Warren Hastings",
  answer_hi: "वारेन हेस्टिंग्स",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is 'Fiscal Policy'?",
  question_hi: "'राजकोषीय नीति' क्या है?",
  options_en: ["Government's tax and spending policy", "Central Bank's interest rate policy", "Foreign exchange policy", "Industrial policy"],
  options_hi: ["सरकार की कर और खर्च नीति", "केंद्रीय बैंक की ब्याज दर नीति", "विदेशी मुद्रा नीति", "औद्योगिक नीति"],
  answer_en: "Government's tax and spending policy",
  answer_hi: "सरकार की कर और खर्च नीति",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "The 'Jallianwala Bagh Massacre' took place in which year?",
  question_hi: "'जलियांवाला बाग हत्याकांड' किस वर्ष हुआ था?",
  options_en: ["1917", "1918", "1919", "1920"],
  options_hi: ["1917", "1918", "1919", "1920"],
  answer_en: "1919",
  answer_hi: "1919",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "How many Fundamental Rights are there in the Indian Constitution?",
  question_hi: "भारतीय संविधान में कितने मौलिक अधिकार हैं?",
  options_en: ["5", "6", "7", "8"],
  options_hi: ["5", "6", "7", "8"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Who wrote 'Discovery of India'?",
  question_hi: "'डिस्कवरी ऑफ इंडिया' किसने लिखी?",
  options_en: ["Mahatma Gandhi", "Jawaharlal Nehru", "Rabindranath Tagore", "B.R. Ambedkar"],
  options_hi: ["महात्मा गाँधी", "जवाहरलाल नेहरू", "रबीन्द्रनाथ टैगोर", "बी.आर. अंबेडकर"],
  answer_en: "Jawaharlal Nehru",
  answer_hi: "जवाहरलाल नेहरू",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What is 'Monetary Policy'?",
  question_hi: "'मौद्रिक नीति' क्या है?",
  options_en: ["Government's spending policy", "Central Bank's control over money supply", "Taxation policy", "Foreign trade policy"],
  options_hi: ["सरकार की खर्च नीति", "केंद्रीय बैंक का मुद्रा आपूर्ति पर नियंत्रण", "कराधान नीति", "विदेश व्यापार नीति"],
  answer_en: "Central Bank's control over money supply",
  answer_hi: "केंद्रीय बैंक का मुद्रा आपूर्ति पर नियंत्रण",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "The 'Salt Satyagraha' was started by Mahatma Gandhi in which year?",
  question_hi: "'नमक सत्याग्रह' महात्मा गांधी द्वारा किस वर्ष शुरू किया गया था?",
  options_en: ["1928", "1929", "1930", "1931"],
  options_hi: ["1928", "1929", "1930", "1931"],
  answer_en: "1930",
  answer_hi: "1930",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Who is the head of the Union Executive in India?",
  question_hi: "भारत में केंद्रीय कार्यपालिका का प्रमुख कौन होता है?",
  options_en: ["Prime Minister", "President", "Chief Justice", "Speaker"],
  options_hi: ["प्रधानमंत्री", "राष्ट्रपति", "मुख्य न्यायाधीश", "अध्यक्ष"],
  answer_en: "President",
  answer_hi: "राष्ट्रपति",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Who built the 'Qutub Minar'?",
  question_hi: "'कुतुब मीनार' किसने बनवाया?",
  options_en: ["Qutub-ud-din Aibak", "Alauddin Khilji", "Iltutmish", "Firoz Shah Tughlaq"],
  options_hi: ["कुतुब-उद-दीन ऐबक", "अलाउद्दीन खिलजी", "इल्तुतमिश", "फिरोज शाह तुगलक"],
  answer_en: "Qutub-ud-din Aibak",
  answer_hi: "कुतुब-उद-दीन ऐबक",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is 'Balance of Payments'?",
  question_hi: "'भुगतान संतुलन' क्या है?",
  options_en: ["Balance between exports and imports", "Balance between income and expenditure", "Balance between savings and investment", "Balance between government revenue and expenditure"],
  options_hi: ["निर्यात और आयात के बीच संतुलन", "आय और व्यय के बीच संतुलन", "बचत और निवेश के बीच संतुलन", "सरकारी राजस्व और व्यय के बीच संतुलन"],
  answer_en: "Balance between exports and imports",
  answer_hi: "निर्यात और आयात के बीच संतुलन",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "The 'Government of India Act, 1935' provided for:",
  question_hi: "'भारत सरकार अधिनियम, 1935' ने किसकी व्यवस्था की?",
  options_en: ["Complete independence", "Provincial autonomy", "Partition of India", "Abolition of princely states"],
  options_hi: ["पूर्ण स्वतंत्रता", "प्रांतीय स्वायत्तता", "भारत का विभाजन", "रियासतों का उन्मूलन"],
  answer_en: "Provincial autonomy",
  answer_hi: "प्रांतीय स्वायत्तता",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Who is the author of 'Das Kapital'?",
  question_hi: "'दास कैपिटल' के लेखक कौन हैं?",
  options_en: ["Adam Smith", "Karl Marx", "Friedrich Engels", "John Keynes"],
  options_hi: ["एडम स्मिथ", "कार्ल मार्क्स", "फ्रेडरिक एंगेल्स", "जॉन कीन्स"],
  answer_en: "Karl Marx",
  answer_hi: "कार्ल मार्क्स",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "The 'Rowlatt Act' was passed in which year?",
  question_hi: "'रॉलेट एक्ट' किस वर्ष पारित किया गया था?",
  options_en: ["1917", "1918", "1919", "1920"],
  options_hi: ["1917", "1918", "1919", "1920"],
  answer_en: "1919",
  answer_hi: "1919",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is the tenure of the Lok Sabha?",
  question_hi: "लोकसभा का कार्यकाल कितना होता है?",
  options_en: ["4 years", "5 years", "6 years", "7 years"],
  options_hi: ["4 वर्ष", "5 वर्ष", "6 वर्ष", "7 वर्ष"],
  answer_en: "5 years",
  answer_hi: "5 वर्ष",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Who was the first Indian to become the President of the Indian National Congress?",
  question_hi: "भारतीय राष्ट्रीय कांग्रेस के अध्यक्ष बनने वाले पहले भारतीय कौन थे?",
  options_en: ["W.C. Banerjee", "Dadabhai Naoroji", "Surendranath Banerjee", "Gopal Krishna Gokhale"],
  options_hi: ["डब्ल्यू.सी. बनर्जी", "दादाभाई नौरोजी", "सुरेंद्रनाथ बनर्जी", "गोपाल कृष्ण गोखले"],
  answer_en: "W.C. Banerjee",
  answer_hi: "डब्ल्यू.सी. बनर्जी",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is 'Direct Tax'?",
  question_hi: "'प्रत्यक्ष कर' क्या है?",
  options_en: ["Tax collected indirectly", "Tax paid directly to government", "Tax on imported goods", "Tax on services"],
  options_hi: ["अप्रत्यक्ष रूप से वसूला गया कर", "सीधे सरकार को भुगतान किया गया कर", "आयातित वस्तुओं पर कर", "सेवाओं पर कर"],
  answer_en: "Tax paid directly to government",
  answer_hi: "सीधे सरकार को भुगतान किया गया कर",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "The 'Treaty of Versailles' was signed after which war?",
  question_hi: "'वर्साय की संधि' किस युद्ध के बाद हस्ताक्षरित हुई?",
  options_en: ["World War I", "World War II", "Napoleonic Wars", "Cold War"],
  options_hi: ["प्रथम विश्व युद्ध", "द्वितीय विश्व युद्ध", "नेपोलियन युद्ध", "शीत युद्ध"],
  answer_en: "World War I",
  answer_hi: "प्रथम विश्व युद्ध",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which article of the Indian Constitution deals with 'Emergency Provisions'?",
  question_hi: "भारतीय संविधान का कौन सा अनुच्छेद 'आपातकालीन प्रावधानों' से संबंधित है?",
  options_en: ["Article 352", "Article 356", "Article 360", "All of these"],
  options_hi: ["अनुच्छेद 352", "अनुच्छेद 356", "अनुच्छेद 360", "ये सभी"],
  answer_en: "All of these",
  answer_hi: "ये सभी",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Who propounded the 'Drain of Wealth' theory?",
  question_hi: "'धन के निष्कासन' सिद्धांत को किसने प्रतिपादित किया?",
  options_en: ["Mahatma Gandhi", "Dadabhai Naoroji", "R.C. Dutt", "B.R. Ambedkar"],
  options_hi: ["महात्मा गाँधी", "दादाभाई नौरोजी", "आर.सी. दत्त", "बी.आर. अंबेडकर"],
  answer_en: "Dadabhai Naoroji",
  answer_hi: "दादाभाई नौरोजी",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is 'Poverty Line'?",
  question_hi: "'गरीबी रेखा' क्या है?",
  options_en: ["Minimum income level", "Maximum income level", "Average income level", "Income tax limit"],
  options_hi: ["न्यूनतम आय स्तर", "अधिकतम आय स्तर", "औसत आय स्तर", "आयकर सीमा"],
  answer_en: "Minimum income level",
  answer_hi: "न्यूनतम आय स्तर",
  attempted: false,
  selected: ""
},
{
  num: 46,
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
  num: 47,
  question_en: "The 'Right to Property' is now a:",
  question_hi: "'संपत्ति का अधिकार' अब एक है:",
  options_en: ["Fundamental Right", "Legal Right", "Constitutional Right", "Directive Principle"],
  options_hi: ["मौलिक अधिकार", "कानूनी अधिकार", "संवैधानिक अधिकार", "निदेशक सिद्धांत"],
  answer_en: "Legal Right",
  answer_hi: "कानूनी अधिकार",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Who was the first Chief Justice of India?",
  question_hi: "भारत के पहले मुख्य न्यायाधीश कौन थे?",
  options_en: ["H.J. Kania", "B.P. Sinha", "Y.V. Chandrachud", "M. Hidayatullah"],
  options_hi: ["एच.जे. कनिया", "बी.पी. सिन्हा", "वाई.वी. चंद्रचूड़", "एम. हिदायतुल्लाह"],
  answer_en: "H.J. Kania",
  answer_hi: "एच.जे. कनिया",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is 'Mixed Economy'?",
  question_hi: "'मिश्रित अर्थव्यवस्था' क्या है?",
  options_en: ["Only private sector", "Only public sector", "Both private and public sectors", "No government intervention"],
  options_hi: ["केवल निजी क्षेत्र", "केवल सार्वजनिक क्षेत्र", "निजी और सार्वजनिक दोनों क्षेत्र", "कोई सरकारी हस्तक्षेप नहीं"],
  answer_en: "Both private and public sectors",
  answer_hi: "निजी और सार्वजनिक दोनों क्षेत्र",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "The 'First War of Indian Independence' took place in which year?",
  question_hi: "भारत का 'प्रथम स्वतंत्रता संग्राम' किस वर्ष हुआ था?",
  options_en: ["1857", "1858", "1859", "1860"],
  options_hi: ["1857", "1858", "1859", "1860"],
  answer_en: "1857",
  answer_hi: "1857",
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