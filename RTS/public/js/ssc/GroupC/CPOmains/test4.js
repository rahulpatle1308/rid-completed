const questions = [
  {
    "num":1,
    "question_en": "If a - b = 5 and a² + b² = 65, then the value of ab is:",
    "question_hi": "यदि a - b = 5 और a² + b² = 65, तो ab का मान है:",
    "options_en": ["15", "20", "25", "30"],
    "options_hi": ["15", "20", "25", "30"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num":2,
    "question_en": "The value of √(6 + √(6 + √(6 + ...))) is:",
    "question_hi": "√(6 + √(6 + √(6 + ...))) का मान है:",
    "options_en": ["2", "3", "4", "6"],
    "options_hi": ["2", "3", "4", "6"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num":3,
    "question_en": "A person sold two articles for ₹1200 each. On one he gained 20% and on the other he lost 20%. His overall gain/loss percent is:",
    "question_hi": "एक व्यक्ति ने दो वस्तुएं ₹1200 प्रत्येक में बेचीं। एक पर उसे 20% लाभ हुआ और दूसरी पर 20% हानि हुई। उसका कुल लाभ/हानि प्रतिशत है:",
    "options_en": ["4% loss", "4% gain", "No gain no loss", "2% loss"],
    "options_hi": ["4% हानि", "4% लाभ", "न लाभ न हानि", "2% हानि"],
    "answer_en": "4% loss",
    "answer_hi": "4% हानि",
    "attempted": false,
    "selected": ""
  },
  {
    "num":4,
    "question_en": "The sum of three numbers is 136. If the ratio between first and second is 2:3 and that between second and third is 5:3, then the first number is:",
    "question_hi": "तीन संख्याओं का योग 136 है। यदि पहली और दूसरी संख्या के बीच अनुपात 2:3 है और दूसरी और तीसरी संख्या के बीच 5:3 है, तो पहली संख्या है:",
    "options_en": ["32", "40", "48", "56"],
    "options_hi": ["32", "40", "48", "56"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num":5,
    "question_en": "A clock shows 3:15. What is the angle between hour and minute hands?",
    "question_hi": "एक घड़ी 3:15 दिखा रही है। घंटे और मिनट की सुइयों के बीच का कोण क्या है?",
    "options_en": ["0°", "7.5°", "15°", "22.5°"],
    "options_hi": ["0°", "7.5°", "15°", "22.5°"],
    "answer_en": "7.5°",
    "answer_hi": "7.5°",
    "attempted": false,
    "selected": ""
  },
  {
    "num":6,
    "question_en": "If 5^x = 3125, then the value of 5^(x-3) is:",
    "question_hi": "यदि 5^x = 3125, तो 5^(x-3) का मान है:",
    "options_en": ["25", "125", "625", "1625"],
    "options_hi": ["25", "125", "625", "1625"],
    "answer_en": "25",
    "answer_hi": "25",
    "attempted": false,
    "selected": ""
  },
  {
    "num":7,
    "question_en": "The area of a rhombus is 240 cm² and one diagonal is 16 cm. The other diagonal is:",
    "question_hi": "एक समचतुर्भुज का क्षेत्रफल 240 वर्ग सेमी है और एक विकर्ण 16 सेमी है। दूसरा विकर्ण है:",
    "options_en": ["15 cm", "20 cm", "30 cm", "35 cm"],
    "options_hi": ["15 सेमी", "20 सेमी", "30 सेमी", "35 सेमी"],
    "answer_en": "30 cm",
    "answer_hi": "30 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":8,
    "question_en": "A mixture contains milk and water in ratio 7:3. If 10 liters of water is added, the ratio becomes 7:5. The initial quantity of milk was:",
    "question_hi": "एक मिश्रण में दूध और पानी का अनुपात 7:3 है। यदि 10 लीटर पानी मिलाया जाता है, तो अनुपात 7:5 हो जाता है। दूध की प्रारंभिक मात्रा थी:",
    "options_en": ["35 L", "42 L", "49 L", "56 L"],
    "options_hi": ["35 लीटर", "42 लीटर", "49 लीटर", "56 लीटर"],
    "answer_en": "35 L",
    "answer_hi": "35 लीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":9,
    "question_en": "Find the wrong number in series: 2, 5, 10, 17, 26, 38, 50",
    "question_hi": "श्रृंखला में गलत संख्या ज्ञात कीजिए: 2, 5, 10, 17, 26, 38, 50",
    "options_en": ["5", "17", "38", "50"],
    "options_hi": ["5", "17", "38", "50"],
    "answer_en": "38",
    "answer_hi": "38",
    "attempted": false,
    "selected": ""
  },
  {
    "num":10,
    "question_en": "If the selling price of 10 articles is equal to cost price of 11 articles, the gain percent is:",
    "question_hi": "यदि 10 वस्तुओं का विक्रय मूल्य 11 वस्तुओं के क्रय मूल्य के बराबर है, तो लाभ प्रतिशत है:",
    "options_en": ["10%", "11%", "15%", "20%"],
    "options_hi": ["10%", "11%", "15%", "20%"],
    "answer_en": "10%",
    "answer_hi": "10%",
    "attempted": false,
    "selected": ""
  },
  {
    "num":11,
    "question_en": "The value of cot 30° + cosec 30° is:",
    "question_hi": "cot 30° + cosec 30° का मान है:",
    "options_en": ["√3 + 1", "√3 + 2", "2√3", "3"],
    "options_hi": ["√3 + 1", "√3 + 2", "2√3", "3"],
    "answer_en": "2√3",
    "answer_hi": "2√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num":12,
    "question_en": "A sum of ₹8000 becomes ₹9261 in 3 years at compound interest compounded annually. The rate of interest is:",
    "question_hi": "₹8000 की राशि 3 वर्षों में वार्षिक चक्रवृद्धि ब्याज पर ₹9261 हो जाती है। ब्याज दर है:",
    "options_en": ["5%", "6%", "7%", "8%"],
    "options_hi": ["5%", "6%", "7%", "8%"],
    "answer_en": "5%",
    "answer_hi": "5%",
    "attempted": false,
    "selected": ""
  },
  {
    "num":13,
    "question_en": "If the radius of a sphere is doubled, its volume becomes:",
    "question_hi": "यदि एक गोले की त्रिज्या दोगुनी कर दी जाए, तो इसका आयतन हो जाता है:",
    "options_en": ["2 times", "4 times", "6 times", "8 times"],
    "options_hi": ["2 गुना", "4 गुना", "6 गुना", "8 गुना"],
    "answer_en": "8 times",
    "answer_hi": "8 गुना",
    "attempted": false,
    "selected": ""
  },
  {
    "num":14,
    "question_en": "A man rows to a place 48 km distant and back in 14 hours. He finds he can row 4 km with the stream in the same time as 3 km against the stream. The speed of the stream is:",
    "question_hi": "एक व्यक्ति 48 किमी दूर स्थान तक नाव खेकर जाता है और वापस आने में 14 घंटे लेता है। वह पाता है कि वह धारा की दिशा में 4 किमी उतने ही समय में खे सकता है जितने समय में धारा के विपरीत 3 किमी। धारा की गति है:",
    "options_en": ["1 km/h", "2 km/h", "3 km/h", "4 km/h"],
    "options_hi": ["1 किमी/घंटा", "2 किमी/घंटा", "3 किमी/घंटा", "4 किमी/घंटा"],
    "answer_en": "1 km/h",
    "answer_hi": "1 किमी/घंटा",
    "attempted": false,
    "selected": ""
  },
  {
    "num":15,
    "question_en": "The value of (256)^(0.16) × (256)^(0.09) is:",
    "question_hi": "(256)^(0.16) × (256)^(0.09) का मान है:",
    "options_en": ["4", "16", "64", "256"],
    "options_hi": ["4", "16", "64", "256"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num":16,
    "question_en": "A student multiplied a number by 3/5 instead of 5/3. The percentage error is:",
    "question_hi": "एक छात्र ने एक संख्या को 5/3 के बजाय 3/5 से गुणा कर दिया। प्रतिशत त्रुटि है:",
    "options_en": ["64%", "32%", "20%", "44%"],
    "options_hi": ["64%", "32%", "20%", "44%"],
    "answer_en": "64%",
    "answer_hi": "64%",
    "attempted": false,
    "selected": ""
  },
  {
    "num":17,
    "question_en": "The ratio of ages of A and B 5 years ago was 3:4. The ratio of their ages after 15 years will be 6:7. Present age of B is:",
    "question_hi": "5 वर्ष पहले A और B की आयु का अनुपात 3:4 था। 15 वर्ष बाद उनकी आयु का अनुपात 6:7 होगा। B की वर्तमान आयु है:",
    "options_en": ["25 years", "30 years", "35 years", "40 years"],
    "options_hi": ["25 वर्ष", "30 वर्ष", "35 वर्ष", "40 वर्ष"],
    "answer_en": "35 years",
    "answer_hi": "35 वर्ष",
    "attempted": false,
    "selected": ""
  },
  {
    "num":18,
    "question_en": "The product of two numbers is 4107. If their HCF is 37, then the greater number is:",
    "question_hi": "दो संख्याओं का गुणनफल 4107 है। यदि उनका महत्तम समापवर्तक 37 है, तो बड़ी संख्या है:",
    "options_en": ["111", "148", "185", "222"],
    "options_hi": ["111", "148", "185", "222"],
    "answer_en": "111",
    "answer_hi": "111",
    "attempted": false,
    "selected": ""
  },
  {
    "num":19,
    "question_en": "If 2 men or 3 women or 4 boys can do a work in 52 days, then the same work will be done by 1 man, 1 woman and 1 boy in:",
    "question_hi": "यदि 2 पुरुष या 3 महिलाएं या 4 लड़के एक काम को 52 दिनों में कर सकते हैं, तो वही काम 1 पुरुष, 1 महिला और 1 लड़का मिलकर कितने दिनों में करेंगे?",
    "options_en": ["24 days", "36 days", "48 days", "96 days"],
    "options_hi": ["24 दिन", "36 दिन", "48 दिन", "96 दिन"],
    "answer_en": "48 days",
    "answer_hi": "48 दिन",
    "attempted": false,
    "selected": ""
  },
  {
    "num":20,
    "question_en": "The average of 11 results is 50. If the average of first six results is 49 and that of last six is 52, then the sixth result is:",
    "question_hi": "11 परिणामों का औसत 50 है। यदि पहले छह परिणामों का औसत 49 है और अंतिम छह का 52 है, तो छठा परिणाम है:",
    "options_en": ["48", "50", "52", "56"],
    "options_hi": ["48", "50", "52", "56"],
    "answer_en": "56",
    "answer_hi": "56",
    "attempted": false,
    "selected": ""
  },
  {
    "num":21,
    "question_en": "If 20% of (x+y) = 25% of (x-y), then x:y = ?",
    "question_hi": "यदि (x+y) का 20% = (x-y) का 25%, तो x:y = ?",
    "options_en": ["1:9", "9:1", "2:3", "3:2"],
    "options_hi": ["1:9", "9:1", "2:3", "3:2"],
    "answer_en": "9:1",
    "answer_hi": "9:1",
    "attempted": false,
    "selected": ""
  },
  {
    "num":22,
    "question_en": "A cylindrical vessel of radius 7 cm contains water up to depth of 10 cm. A sphere is completely immersed, raising water level by 3.36 cm. The radius of sphere is:",
    "question_hi": "7 सेमी त्रिज्या वाले एक बेलनाकार बर्तन में 10 सेमी गहराई तक पानी है। एक गोला पूरी तरह डुबोया जाता है, जिससे पानी का स्तर 3.36 सेमी बढ़ जाता है। गोले की त्रिज्या है:",
    "options_en": ["3.5 cm", "4.2 cm", "5.6 cm", "7 cm"],
    "options_hi": ["3.5 सेमी", "4.2 सेमी", "5.6 सेमी", "7 सेमी"],
    "answer_en": "4.2 cm",
    "answer_hi": "4.2 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":23,
    "question_en": "The value of sin 60° cos 30° + cos 60° sin 30° is:",
    "question_hi": "sin 60° cos 30° + cos 60° sin 30° का मान है:",
    "options_en": ["0", "1", "√3/2", "1/2"],
    "options_hi": ["0", "1", "√3/2", "1/2"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num":24,
    "question_en": "The smallest number which when divided by 20, 25, 35 and 40 leaves remainder 14, 19, 29 and 34 respectively is:",
    "question_hi": "सबसे छोटी संख्या जिसे 20, 25, 35 और 40 से विभाजित करने पर क्रमशः 14, 19, 29 और 34 शेष बचते हैं, वह है:",
    "options_en": ["1394", "1404", "1414", "1424"],
    "options_hi": ["1394", "1404", "1414", "1424"],
    "answer_en": "1394",
    "answer_hi": "1394",
    "attempted": false,
    "selected": ""
  },
  {
    "num":25,
    "question_en": "A discount series of 10%, 20% and 40% is equivalent to a single discount of:",
    "question_hi": "10%, 20% और 40% की क्रमागत छूट श्रृंखला कितनी एकल छूट के बराबर है?",
    "options_en": ["50%", "56.8%", "60%", "64.8%"],
    "options_hi": ["50%", "56.8%", "60%", "64.8%"],
    "answer_en": "56.8%",
    "answer_hi": "56.8%",
    "attempted": false,
    "selected": ""
  },
  {
    "num":26,
    "question_en": "If x = √3 + √2, then the value of x + 1/x is:",
    "question_hi": "यदि x = √3 + √2, तो x + 1/x का मान है:",
    "options_en": ["2√3", "2√2", "√6", "2√6"],
    "options_hi": ["2√3", "2√2", "√6", "2√6"],
    "answer_en": "2√3",
    "answer_hi": "2√3",
    "attempted": false,
    "selected": ""
  },
  {
    "num":27,
    "question_en": "The difference between compound interest and simple interest on a sum for 2 years at 20% per annum is ₹48. The sum is:",
    "question_hi": "एक राशि पर 2 वर्षों के लिए 20% वार्षिक दर से चक्रवृद्धि ब्याज और साधारण ब्याज का अंतर ₹48 है। राशि है:",
    "options_en": ["₹600", "₹800", "₹1000", "₹1200"],
    "options_hi": ["₹600", "₹800", "₹1000", "₹1200"],
    "answer_en": "₹1200",
    "answer_hi": "₹1200",
    "attempted": false,
    "selected": ""
  },
  {
    "num":28,
    "question_en": "The length of a rectangle is increased by 25%. By what percent should its breadth be decreased to maintain same area?",
    "question_hi": "एक आयत की लंबाई 25% बढ़ा दी जाती है। समान क्षेत्रफल बनाए रखने के लिए इसकी चौड़ाई कितने प्रतिशत कम की जानी चाहिए?",
    "options_en": ["20%", "25%", "30%", "40%"],
    "options_hi": ["20%", "25%", "30%", "40%"],
    "answer_en": "20%",
    "answer_hi": "20%",
    "attempted": false,
    "selected": ""
  },
  {
    "num":29,
    "question_en": "If the sum of two numbers is 33 and their difference is 15, the smaller number is:",
    "question_hi": "यदि दो संख्याओं का योग 33 है और उनका अंतर 15 है, तो छोटी संख्या है:",
    "options_en": ["9", "12", "15", "18"],
    "options_hi": ["9", "12", "15", "18"],
    "answer_en": "9",
    "answer_hi": "9",
    "attempted": false,
    "selected": ""
  },
  {
    "num":30,
    "question_en": "A batsman scores 87 runs in his 17th innings, increasing his average by 3. His average after 17th innings is:",
    "question_hi": "एक बल्लेबाज अपनी 17वीं पारी में 87 रन बनाता है, जिससे उसका औसत 3 बढ़ जाता है। 17वीं पारी के बाद उसका औसत है:",
    "options_en": ["36", "37", "39", "42"],
    "options_hi": ["36", "37", "39", "42"],
    "answer_en": "39",
    "answer_hi": "39",
    "attempted": false,
    "selected": ""
  },
  {
    "num":31,
    "question_en": "If sin θ = 12/13, then tan θ = ?",
    "question_hi": "यदि sin θ = 12/13, तो tan θ = ?",
    "options_en": ["12/5", "5/12", "13/5", "5/13"],
    "options_hi": ["12/5", "5/12", "13/5", "5/13"],
    "answer_en": "12/5",
    "answer_hi": "12/5",
    "attempted": false,
    "selected": ""
  },
  {
    "num":32,
    "question_en": "A can finish a work in 18 days and B can do the same work in half the time taken by A. They work together for 3 days and then B left. In how many days will A finish the remaining work?",
    "question_hi": "A एक काम को 18 दिनों में पूरा कर सकता है और B उसी काम को A द्वारा लिए गए समय के आधे समय में कर सकता है। वे 3 दिनों तक एक साथ काम करते हैं और फिर B चला जाता है। A शेष काम को कितने दिनों में पूरा करेगा?",
    "options_en": ["9", "10.5", "12", "13.5"],
    "options_hi": ["9", "10.5", "12", "13.5"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num":33,
    "question_en": "The area of a square is 144 cm². Its perimeter is same as perimeter of a rectangle. If length of rectangle is 18 cm, its breadth is:",
    "question_hi": "एक वर्ग का क्षेत्रफल 144 वर्ग सेमी है। इसका परिमाप एक आयत के परिमाप के बराबर है। यदि आयत की लंबाई 18 सेमी है, तो इसकी चौड़ाई है:",
    "options_en": ["6 cm", "9 cm", "12 cm", "15 cm"],
    "options_hi": ["6 सेमी", "9 सेमी", "12 सेमी", "15 सेमी"],
    "answer_en": "6 cm",
    "answer_hi": "6 सेमी",
    "attempted": false,
    "selected": ""
  },
  {
    "num":34,
    "question_en": "The value of (0.027)^(2/3) is:",
    "question_hi": "(0.027)^(2/3) का मान है:",
    "options_en": ["0.009", "0.09", "0.9", "9"],
    "options_hi": ["0.009", "0.09", "0.9", "9"],
    "answer_en": "0.09",
    "answer_hi": "0.09",
    "attempted": false,
    "selected": ""
  },
  {
    "num":35,
    "question_en": "The ratio of incomes of A and B is 5:4 and ratio of their expenditures is 3:2. If each saves ₹1600, then A's income is:",
    "question_hi": "A और B की आय का अनुपात 5:4 है और उनके व्यय का अनुपात 3:2 है। यदि प्रत्येक ₹1600 बचाता है, तो A की आय है:",
    "options_en": ["₹4000", "₹4500", "₹5000", "₹6000"],
    "options_hi": ["₹4000", "₹4500", "₹5000", "₹6000"],
    "answer_en": "₹4000",
    "answer_hi": "₹4000",
    "attempted": false,
    "selected": ""
  },
  {
    "num":36,
    "question_en": "The sum of all interior angles of a regular polygon is 1440°. The number of sides is:",
    "question_hi": "एक समबहुभुज के सभी आंतरिक कोणों का योग 1440° है। भुजाओं की संख्या है:",
    "options_en": ["8", "9", "10", "12"],
    "options_hi": ["8", "9", "10", "12"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num":37,
    "question_en": "If a + b + c = 0, then the value of (a²/bc + b²/ca + c²/ab) is:",
    "question_hi": "यदि a + b + c = 0, तो (a²/bc + b²/ca + c²/ab) का मान है:",
    "options_en": ["0", "1", "2", "3"],
    "options_hi": ["0", "1", "2", "3"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num":38,
    "question_en": "A ladder 10 m long reaches a window 8 m above the ground. The distance of foot of ladder from wall is:",
    "question_hi": "10 मीटर लंबी एक सीढ़ी जमीन से 8 मीटर ऊपर एक खिड़की तक पहुँचती है। सीढ़ी के पाद से दीवार की दूरी है:",
    "options_en": ["4 m", "5 m", "6 m", "7 m"],
    "options_hi": ["4 मीटर", "5 मीटर", "6 मीटर", "7 मीटर"],
    "answer_en": "6 m",
    "answer_hi": "6 मीटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num":39,
    "question_en": "A man buys 2 dozen bananas at ₹16 per dozen. After selling 18 bananas at ₹1.50 each, the rate at which remaining bananas should be sold to gain 50% on whole is:",
    "question_hi": "एक आदमी 2 दर्जन केले ₹16 प्रति दर्जन की दर से खरीदता है। 18 केले ₹1.50 प्रत्येक की दर से बेचने के बाद, शेष केले किस दर पर बेचे जाने चाहिए ताकि पूरे पर 50% लाभ हो?",
    "options_en": ["₹2.00 each", "₹2.25 each", "₹2.50 each", "₹3.00 each"],
    "options_hi": ["₹2.00 प्रत्येक", "₹2.25 प्रत्येक", "₹2.50 प्रत्येक", "₹3.00 प्रत्येक"],
    "answer_en": "₹2.25 each",
    "answer_hi": "₹2.25 प्रत्येक",
    "attempted": false,
    "selected": ""
  },
  {
    "num":40,
    "question_en": "The value of log₂(log₃81) is:",
    "question_hi": "log₂(log₃81) का मान है:",
    "options_en": ["2", "3", "4", "5"],
    "options_hi": ["2", "3", "4", "5"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num":41,
    "question_en": "A certain sum amounts to ₹5832 in 2 years at 8% compound interest. The sum is:",
    "question_hi": "एक निश्चित राशि 2 वर्षों में 8% चक्रवृद्धि ब्याज पर ₹5832 हो जाती है। राशि है:",
    "options_en": ["₹4500", "₹5000", "₹5250", "₹5400"],
    "options_hi": ["₹4500", "₹5000", "₹5250", "₹5400"],
    "answer_en": "₹5000",
    "answer_hi": "₹5000",
    "attempted": false,
    "selected": ""
  },
  {
    "num":42,
    "question_en": "The least perfect square divisible by 3, 4, 5, 6 and 8 is:",
    "question_hi": "3, 4, 5, 6 और 8 से विभाज्य सबसे छोटा पूर्ण वर्ग है:",
    "options_en": ["900", "1200", "2500", "3600"],
    "options_hi": ["900", "1200", "2500", "3600"],
    "answer_en": "3600",
    "answer_hi": "3600",
    "attempted": false,
    "selected": ""
  },
  {
    "num":43,
    "question_en": "If 1³ + 2³ + 3³ + ... + n³ = 3025, then 1 + 2 + 3 + ... + n = ?",
    "question_hi": "यदि 1³ + 2³ + 3³ + ... + n³ = 3025, तो 1 + 2 + 3 + ... + n = ?",
    "options_en": ["55", "66", "77", "88"],
    "options_hi": ["55", "66", "77", "88"],
    "answer_en": "55",
    "answer_hi": "55",
    "attempted": false,
    "selected": ""
  },
  {
    "num":44,
    "question_en": "A dealer marks his goods 30% above cost price and allows 10% discount. His gain percent is:",
    "question_hi": "एक व्यापारी अपने माल को क्रय मूल्य से 30% अधिक अंकित करता है और 10% की छूट देता है। उसका लाभ प्रतिशत है:",
    "options_en": ["17%", "18%", "19%", "20%"],
    "options_hi": ["17%", "18%", "19%", "20%"],
    "answer_en": "17%",
    "answer_hi": "17%",
    "attempted": false,
    "selected": ""
  },
  {
    "num":45,
    "question_en": "Walking at 3/4 of his usual speed, a man is 2.5 hours late. His usual time would have been:",
    "question_hi": "अपनी सामान्य गति के 3/4 से चलने पर, एक व्यक्ति 2.5 घंटे देरी से पहुँचता है। उसका सामान्य समय होता:",
    "options_en": ["7.5 hours", "8 hours", "9 hours", "10 hours"],
    "options_hi": ["7.5 घंटे", "8 घंटे", "9 घंटे", "10 घंटे"],
    "answer_en": "7.5 hours",
    "answer_hi": "7.5 घंटे",
    "attempted": false,
    "selected": ""
  },
  {
    "num":46,
    "question_en": "The greatest number that divides 122 and 243 leaving remainders 2 and 3 respectively is:",
    "question_hi": "वह बड़ी से बड़ी संख्या जो 122 और 243 को विभाजित करने पर क्रमशः 2 और 3 शेष छोड़ती है, वह है:",
    "options_en": ["12", "24", "30", "36"],
    "options_hi": ["12", "24", "30", "36"],
    "answer_en": "24",
    "answer_hi": "24",
    "attempted": false,
    "selected": ""
  },
  {
    "num":47,
    "question_en": "If 2a + 3b = 17 and 2a+2 - 3b+1 = 5, then the value of a and b are:",
    "question_hi": "यदि 2a + 3b = 17 और 2a+2 - 3b+1 = 5, तो a और b के मान हैं:",
    "options_en": ["a=3, b=2", "a=2, b=3", "a=4, b=2", "a=2, b=4"],
    "options_hi": ["a=3, b=2", "a=2, b=3", "a=4, b=2", "a=2, b=4"],
    "answer_en": "a=3, b=2",
    "answer_hi": "a=3, b=2",
    "attempted": false,
    "selected": ""
  },
  {
    "num":48,
    "question_en": "The ratio of volumes of two cubes is 8:27. The ratio of their total surface areas is:",
    "question_hi": "दो घनों के आयतनों का अनुपात 8:27 है। उनके कुल पृष्ठीय क्षेत्रफलों का अनुपात है:",
    "options_en": ["2:3", "4:9", "8:27", "16:81"],
    "options_hi": ["2:3", "4:9", "8:27", "16:81"],
    "answer_en": "4:9",
    "answer_hi": "4:9",
    "attempted": false,
    "selected": ""
  },
  {
    "num":49,
    "question_en": "If 10% of A = 20% of B, then A:B = ?",
    "question_hi": "यदि A का 10% = B का 20%, तो A:B = ?",
    "options_en": ["1:2", "2:1", "5:1", "10:1"],
    "options_hi": ["1:2", "2:1", "5:1", "10:1"],
    "answer_en": "2:1",
    "answer_hi": "2:1",
    "attempted": false,
    "selected": ""
  },
  {
    "num":50,
    "question_en": "The present ages of three persons are in proportion 4:7:9. Eight years ago, the sum of their ages was 56. Their present ages are:",
    "question_hi": "तीन व्यक्तियों की वर्तमान आयु 4:7:9 के अनुपात में हैं। आठ वर्ष पहले, उनकी आयु का योग 56 था। उनकी वर्तमान आयु हैं:",
    "options_en": ["16, 28, 36", "20, 35, 45", "24, 42, 54", "28, 49, 63"],
    "options_hi": ["16, 28, 36", "20, 35, 45", "24, 42, 54", "28, 49, 63"],
    "answer_en": "20, 35, 45",
    "answer_hi": "20, 35, 45",
    "attempted": false,
    "selected": ""
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