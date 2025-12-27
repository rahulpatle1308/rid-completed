const questions = [
  {
num: 1,
question_en: "If x/2 + x/3 + x/4 = 26, what is the value of x?",
question_hi: "यदि x/2 + x/3 + x/4 = 26 है, तो x का मान क्या है?",
options_en: ["12", "18", "24", "30"],
options_hi: ["12", "18", "24", "30"],
answer_en: "24",
answer_hi: "24",
attempted: false,
selected: ""
},
{
num: 2,
question_en: "A number increased by 20% becomes 180. What is the number?",
question_hi: "एक संख्या में 20% वृद्धि करने पर 180 प्राप्त होता है। संख्या क्या है?",
options_en: ["140", "150", "160", "170"],
options_hi: ["140", "150", "160", "170"],
answer_en: "150",
answer_hi: "150",
attempted: false,
selected: ""
},
{
num: 3,
question_en: "If 2^(x+3) = 64, find x.",
question_hi: "यदि 2^(x+3) = 64 है, तो x ज्ञात कीजिए।",
options_en: ["2", "3", "4", "5"],
options_hi: ["2", "3", "4", "5"],
answer_en: "3",
answer_hi: "3",
attempted: false,
selected: ""
},
{
num: 4,
question_en: "HCF of two numbers is 12 and LCM is 360. One number is 72. Find the other.",
question_hi: "दो संख्याओं का महत्तम समापवर्तक 12 और लघुत्तम समापवर्त्य 360 है। एक संख्या 72 है। दूसरी संख्या ज्ञात कीजिए।",
options_en: ["48", "60", "84", "96"],
options_hi: ["48", "60", "84", "96"],
answer_en: "60",
answer_hi: "60",
attempted: false,
selected: ""
},
{
num: 5,
question_en: "Find simple interest on ₹5000 at 8% per annum for 3 years.",
question_hi: "₹5000 पर 8% प्रति वर्ष की दर से 3 वर्षों का साधारण ब्याज ज्ञात कीजिए।",
options_en: ["₹1000", "₹1200", "₹1400", "₹1600"],
options_hi: ["₹1000", "₹1200", "₹1400", "₹1600"],
answer_en: "₹1200",
answer_hi: "₹1200",
attempted: false,
selected: ""
},
{
num: 6,
question_en: "Cost price of 20 articles = Selling price of 15 articles. Find profit percentage.",
question_hi: "20 वस्तुओं का क्रय मूल्य = 15 वस्तुओं का विक्रय मूल्य। लाभ प्रतिशत ज्ञात कीजिए।",
options_en: ["25%", "30%", "33.33%", "40%"],
options_hi: ["25%", "30%", "33.33%", "40%"],
answer_en: "33.33%",
answer_hi: "33.33%",
attempted: false,
selected: ""
},
{
num: 7,
question_en: "A 150 m long train passes a pole in 5 seconds. Find its speed in km/h.",
question_hi: "150 मीटर लंबी ट्रेन एक खंभे को 5 सेकंड में पार करती है। इसकी गति किमी/घंटा में ज्ञात कीजिए।",
options_en: ["90 km/h", "100 km/h", "108 km/h", "120 km/h"],
options_hi: ["90 किमी/घंटा", "100 किमी/घंटा", "108 किमी/घंटा", "120 किमी/घंटा"],
answer_en: "108 km/h",
answer_hi: "108 किमी/घंटा",
attempted: false,
selected: ""
},
{
num: 8,
question_en: "If a/b = 3/4 and b/c = 5/6, find a/c.",
question_hi: "यदि a/b = 3/4 और b/c = 5/6 है, तो a/c ज्ञात कीजिए।",
options_en: ["5/8", "3/5", "9/10", "15/24"],
options_hi: ["5/8", "3/5", "9/10", "15/24"],
answer_en: "5/8",
answer_hi: "5/8",
attempted: false,
selected: ""
},
{
num: 9,
question_en: "A sum doubles in 10 years at simple interest. Find the rate of interest per annum.",
question_hi: "एक राशि साधारण ब्याज पर 10 वर्षों में दोगुनी हो जाती है। ब्याज की वार्षिक दर ज्ञात कीजिए।",
options_en: ["8%", "10%", "12%", "15%"],
options_hi: ["8%", "10%", "12%", "15%"],
answer_en: "10%",
answer_hi: "10%",
attempted: false,
selected: ""
},
{
num: 10,
question_en: "Average of 5 numbers is 18. If one number is excluded, average becomes 16. Find excluded number.",
question_hi: "5 संख्याओं का औसत 18 है। यदि एक संख्या निकाल दी जाए, तो औसत 16 हो जाता है। निकाली गई संख्या ज्ञात कीजिए।",
options_en: ["20", "24", "26", "28"],
options_hi: ["20", "24", "26", "28"],
answer_en: "26",
answer_hi: "26",
attempted: false,
selected: ""
},
{
num: 11,
question_en: "If sinθ = 3/5, find cosθ.",
question_hi: "यदि sinθ = 3/5 है, तो cosθ ज्ञात कीजिए।",
options_en: ["4/5", "3/4", "5/4", "2/5"],
options_hi: ["4/5", "3/4", "5/4", "2/5"],
answer_en: "4/5",
answer_hi: "4/5",
attempted: false,
selected: ""
},
{
num: 12,
question_en: "In a right triangle, base = 6 cm, hypotenuse = 10 cm. Find the height.",
question_hi: "एक समकोण त्रिभुज में, आधार = 6 सेमी, कर्ण = 10 सेमी। ऊँचाई ज्ञात कीजिए।",
options_en: ["6 cm", "8 cm", "10 cm", "12 cm"],
options_hi: ["6 सेमी", "8 सेमी", "10 सेमी", "12 सेमी"],
answer_en: "8 cm",
answer_hi: "8 सेमी",
attempted: false,
selected: ""
},
{
num: 13,
question_en: "Find area of a circle whose circumference is 44 cm.",
question_hi: "उस वृत्त का क्षेत्रफल ज्ञात कीजिए जिसकी परिधि 44 सेमी है।",
options_en: ["154 cm²", "160 cm²", "168 cm²", "176 cm²"],
options_hi: ["154 सेमी²", "160 सेमी²", "168 सेमी²", "176 सेमी²"],
answer_en: "154 cm²",
answer_hi: "154 सेमी²",
attempted: false,
selected: ""
},
{
num: 14,
question_en: "If x + 1/x = 5, find x² + 1/x².",
question_hi: "यदि x + 1/x = 5 है, तो x² + 1/x² ज्ञात कीजिए।",
options_en: ["21", "23", "25", "27"],
options_hi: ["21", "23", "25", "27"],
answer_en: "23",
answer_hi: "23",
attempted: false,
selected: ""
},
{
num: 15,
question_en: "Solve: (2x-1)/3 = (x+4)/2.",
question_hi: "हल कीजिए: (2x-1)/3 = (x+4)/2।",
options_en: ["10", "12", "14", "16"],
options_hi: ["10", "12", "14", "16"],
answer_en: "14",
answer_hi: "14",
attempted: false,
selected: ""
},
{
num: 16,
question_en: "A man buys a watch for ₹800 and sells for ₹1000. Find profit percentage.",
question_hi: "एक आदमी ₹800 में घड़ी खरीदता है और ₹1000 में बेचता है। लाभ प्रतिशत ज्ञात कीजिए।",
options_en: ["20%", "25%", "30%", "35%"],
options_hi: ["20%", "25%", "30%", "35%"],
answer_en: "25%",
answer_hi: "25%",
attempted: false,
selected: ""
},
{
num: 17,
question_en: "If 15% of a number is 45, find the number.",
question_hi: "यदि किसी संख्या का 15%, 45 है, तो संख्या ज्ञात कीजिए।",
options_en: ["250", "300", "350", "400"],
options_hi: ["250", "300", "350", "400"],
answer_en: "300",
answer_hi: "300",
attempted: false,
selected: ""
},
{
num: 18,
question_en: "Two numbers are in ratio 5:8. Their sum is 104. Find larger number.",
question_hi: "दो संख्याओं का अनुपात 5:8 है। उनका योग 104 है। बड़ी संख्या ज्ञात कीजिए।",
options_en: ["40", "56", "64", "72"],
options_hi: ["40", "56", "64", "72"],
answer_en: "64",
answer_hi: "64",
attempted: false,
selected: ""
},
{
num: 19,
question_en: "Find third proportion to 9 and 12.",
question_hi: "9 और 12 का तीसरा अनुपाती ज्ञात कीजिए।",
options_en: ["15", "16", "18", "20"],
options_hi: ["15", "16", "18", "20"],
answer_en: "16",
answer_hi: "16",
attempted: false,
selected: ""
},
{
num: 20,
question_en: "Find volume of a cube whose surface area is 150 cm².",
question_hi: "उस घन का आयतन ज्ञात कीजिए जिसका पृष्ठीय क्षेत्रफल 150 सेमी² है।",
options_en: ["100 cm³", "125 cm³", "150 cm³", "216 cm³"],
options_hi: ["100 सेमी³", "125 सेमी³", "150 सेमी³", "216 सेमी³"],
answer_en: "125 cm³",
answer_hi: "125 सेमी³",
attempted: false,
selected: ""
},
{
num: 21,
question_en: "If 5^(x-1) = 125, find x.",
question_hi: "यदि 5^(x-1) = 125 है, तो x ज्ञात कीजिए।",
options_en: ["2", "3", "4", "5"],
options_hi: ["2", "3", "4", "5"],
answer_en: "4",
answer_hi: "4",
attempted: false,
selected: ""
},
{
num: 22,
question_en: "Difference between SI and CI for 2 years at 10% per annum on a sum is ₹50. Find the sum.",
question_hi: "एक राशि पर 10% प्रति वर्ष की दर से 2 वर्षों के साधारण ब्याज और चक्रवृद्धि ब्याज का अंतर ₹50 है। राशि ज्ञात कीजिए।",
options_en: ["₹4000", "₹5000", "₹6000", "₹7000"],
options_hi: ["₹4000", "₹5000", "₹6000", "₹7000"],
answer_en: "₹5000",
answer_hi: "₹5000",
attempted: false,
selected: ""
},
{
num: 23,
question_en: "Find remainder when x³ - 3x² + 5x - 7 is divided by x-2.",
question_hi: "जब x³ - 3x² + 5x - 7 को x-2 से विभाजित किया जाता है, तो शेषफल ज्ञात कीजिए।",
options_en: ["-1", "0", "1", "2"],
options_hi: ["-1", "0", "1", "2"],
answer_en: "1",
answer_hi: "1",
attempted: false,
selected: ""
},
{
num: 24,
question_en: "A person travels at 60 km/h and returns at 40 km/h. Find average speed for whole journey.",
question_hi: "एक व्यक्ति 60 किमी/घंटा की गति से जाता है और 40 किमी/घंटा की गति से वापस आता है। पूरी यात्रा की औसत गति ज्ञात कीजिए।",
options_en: ["45 km/h", "48 km/h", "50 km/h", "52 km/h"],
options_hi: ["45 किमी/घंटा", "48 किमी/घंटा", "50 किमी/घंटा", "52 किमी/घंटा"],
answer_en: "48 km/h",
answer_hi: "48 किमी/घंटा",
attempted: false,
selected: ""
},
{
num: 25,
question_en: "If √(1 + 25/144) = 1 + x/12, find x.",
question_hi: "यदि √(1 + 25/144) = 1 + x/12 है, तो x ज्ञात कीजिए।",
options_en: ["1", "3", "5", "7"],
options_hi: ["1", "3", "5", "7"],
answer_en: "5",
answer_hi: "5",
attempted: false,
selected: ""
},
{
num: 26,
question_en: "Diagonal of a square is 10√2 cm. Find its area.",
question_hi: "एक वर्ग का विकर्ण 10√2 सेमी है। इसका क्षेत्रफल ज्ञात कीजिए।",
options_en: ["50 cm²", "100 cm²", "150 cm²", "200 cm²"],
options_hi: ["50 सेमी²", "100 सेमी²", "150 सेमी²", "200 सेमी²"],
answer_en: "100 cm²",
answer_hi: "100 सेमी²",
attempted: false,
selected: ""
},
{
num: 27,
question_en: "A student scores 30% and fails by 15 marks. Another scores 40% and gets 35 marks more than passing marks. Find total marks.",
question_hi: "एक छात्र 30% अंक प्राप्त करता है और 15 अंकों से फेल होता है। दूसरा 40% अंक प्राप्त करता है और पासिंग मार्क से 35 अंक अधिक पाता है। कुल अंक ज्ञात कीजिए।",
options_en: ["300", "400", "500", "600"],
options_hi: ["300", "400", "500", "600"],
answer_en: "500",
answer_hi: "500",
attempted: false,
selected: ""
},
{
num: 28,
question_en: "If compound ratio of 2:3 and 5:4 is x:12, find x.",
question_hi: "यदि 2:3 और 5:4 का मिश्रित अनुपात x:12 है, तो x ज्ञात कीजिए।",
options_en: ["5", "8", "10", "12"],
options_hi: ["5", "8", "10", "12"],
answer_en: "10",
answer_hi: "10",
attempted: false,
selected: ""
},
{
num: 29,
question_en: "A sum becomes ₹8800 in 4 years and ₹10400 in 7 years at SI. Find principal.",
question_hi: "एक राशि साधारण ब्याज पर 4 वर्षों में ₹8800 और 7 वर्षों में ₹10400 हो जाती है। मूलधन ज्ञात कीजिए।",
options_en: ["₹6000", "₹6400", "₹6800", "₹7200"],
options_hi: ["₹6000", "₹6400", "₹6800", "₹7200"],
answer_en: "₹6800",
answer_hi: "₹6800",
attempted: false,
selected: ""
},
{
num: 30,
question_en: "If tanθ = 5/12, find sinθ + cosθ.",
question_hi: "यदि tanθ = 5/12 है, तो sinθ + cosθ ज्ञात कीजिए।",
options_en: ["17/13", "13/17", "12/13", "15/17"],
options_hi: ["17/13", "13/17", "12/13", "15/17"],
answer_en: "17/13",
answer_hi: "17/13",
attempted: false,
selected: ""
},
{
num: 31,
question_en: "Find least number which when divided by 12,15,20 leaves remainder 5 each time.",
question_hi: "वह छोटी से छोटी संख्या ज्ञात कीजिए जिसे 12,15,20 से विभाजित करने पर प्रत्येक बार 5 शेष बचे।",
options_en: ["60", "65", "125", "185"],
options_hi: ["60", "65", "125", "185"],
answer_en: "65",
answer_hi: "65",
attempted: false,
selected: ""
},
{
num: 32,
question_en: "If a+b=10 and a-b=4, find ab.",
question_hi: "यदि a+b=10 और a-b=4 है, तो ab ज्ञात कीजिए।",
options_en: ["15", "20", "21", "24"],
options_hi: ["15", "20", "21", "24"],
answer_en: "21",
answer_hi: "21",
attempted: false,
selected: ""
},
{
num: 33,
question_en: "Find cost of fencing a rectangular field 80m×60m at ₹12 per meter.",
question_hi: "80 मीटर × 60 मीटर के आयताकार मैदान की ₹12 प्रति मीटर की दर से बाड़ लगाने की लागत ज्ञात कीजिए।",
options_en: ["₹3200", "₹3360", "₹3500", "₹3600"],
options_hi: ["₹3200", "₹3360", "₹3500", "₹3600"],
answer_en: "₹3360",
answer_hi: "₹3360",
attempted: false,
selected: ""
},
{
num: 34,
question_en: "Simplify: (0.6³ + 0.4³)/(0.6² - 0.24 + 0.4²).",
question_hi: "सरल कीजिए: (0.6³ + 0.4³)/(0.6² - 0.24 + 0.4²)।",
options_en: ["0.2", "0.4", "1", "1.2"],
options_hi: ["0.2", "0.4", "1", "1.2"],
answer_en: "1",
answer_hi: "1",
attempted: false,
selected: ""
},
{
num: 35,
question_en: "Radii of two circles are 7 cm and 14 cm. Find ratio of their areas.",
question_hi: "दो वृत्तों की त्रिज्याएँ 7 सेमी और 14 सेमी हैं। उनके क्षेत्रफलों का अनुपात ज्ञात कीजिए।",
options_en: ["1:2", "1:3", "1:4", "2:3"],
options_hi: ["1:2", "1:3", "1:4", "2:3"],
answer_en: "1:4",
answer_hi: "1:4",
attempted: false,
selected: ""
},
{
num: 36,
question_en: "In how many years will ₹8000 become ₹9261 at 5% p.a. compound interest?",
question_hi: "₹8000, 5% प्रति वर्ष चक्रवृद्धि ब्याज पर कितने वर्षों में ₹9261 हो जाएगा?",
options_en: ["2 years", "3 years", "4 years", "5 years"],
options_hi: ["2 वर्ष", "3 वर्ष", "4 वर्ष", "5 वर्ष"],
answer_en: "3 years",
answer_hi: "3 वर्ष",
attempted: false,
selected: ""
},
{
num: 37,
question_en: "If 2^x = 8^(y+1) and 9^y = 3^(x-9), find x+y.",
question_hi: "यदि 2^x = 8^(y+1) और 9^y = 3^(x-9) है, तो x+y ज्ञात कीजिए।",
options_en: ["12", "15", "18", "21"],
options_hi: ["12", "15", "18", "21"],
answer_en: "18",
answer_hi: "18",
attempted: false,
selected: ""
},
{
num: 38,
question_en: "A pipe fills tank in 6 hours, another empties in 8 hours. Both opened together, find time to fill tank.",
question_hi: "एक पाइप टैंक को 6 घंटे में भरता है, दूसरा 8 घंटे में खाली करता है। दोनों एक साथ खोले जाते हैं, टैंक भरने का समय ज्ञात कीजिए।",
options_en: ["12 hours", "18 hours", "24 hours", "30 hours"],
options_hi: ["12 घंटे", "18 घंटे", "24 घंटे", "30 घंटे"],
answer_en: "24 hours",
answer_hi: "24 घंटे",
attempted: false,
selected: ""
},
{
num: 39,
question_en: "Average of 12 numbers is 20. If each number is increased by 2, new average?",
question_hi: "12 संख्याओं का औसत 20 है। यदि प्रत्येक संख्या में 2 की वृद्धि कर दी जाए, तो नया औसत?",
options_en: ["20", "21", "22", "24"],
options_hi: ["20", "21", "22", "24"],
answer_en: "22",
answer_hi: "22",
attempted: false,
selected: ""
},
{
num: 40,
question_en: "Perimeter of a semicircle of radius 7 cm is:",
question_hi: "7 सेमी त्रिज्या के अर्धवृत्त का परिमाप है:",
options_en: ["22 cm", "36 cm", "44 cm", "50 cm"],
options_hi: ["22 सेमी", "36 सेमी", "44 सेमी", "50 सेमी"],
answer_en: "36 cm",
answer_hi: "36 सेमी",
attempted: false,
selected: ""
},
{
num: 41,
question_en: "A discount of 20% is given on marked price. Selling price is ₹1600. Find marked price.",
question_hi: "अंकित मूल्य पर 20% की छूट दी जाती है। विक्रय मूल्य ₹1600 है। अंकित मूल्य ज्ञात कीजिए।",
options_en: ["₹1800", "₹2000", "₹2200", "₹2400"],
options_hi: ["₹1800", "₹2000", "₹2200", "₹2400"],
answer_en: "₹2000",
answer_hi: "₹2000",
attempted: false,
selected: ""
},
{
num: 42,
question_en: "If x = √3 + √2, find x² + 1/x².",
question_hi: "यदि x = √3 + √2 है, तो x² + 1/x² ज्ञात कीजिए।",
options_en: ["8", "10", "12", "14"],
options_hi: ["8", "10", "12", "14"],
answer_en: "10",
answer_hi: "10",
attempted: false,
selected: ""
},
{
num: 43,
question_en: "A's salary is 25% less than B's. By what percent is B's salary more than A's?",
question_hi: "A का वेतन B से 25% कम है। B का वेतन A से कितने प्रतिशत अधिक है?",
options_en: ["25%", "30%", "33.33%", "40%"],
options_hi: ["25%", "30%", "33.33%", "40%"],
answer_en: "33.33%",
answer_hi: "33.33%",
attempted: false,
selected: ""
},
{
num: 44,
question_en: "If x/y = 3/2, find (3x+2y)/(3x-2y).",
question_hi: "यदि x/y = 3/2 है, तो (3x+2y)/(3x-2y) ज्ञात कीजिए।",
options_en: ["13/5", "5/13", "7/5", "5/7"],
options_hi: ["13/5", "5/13", "7/5", "5/7"],
answer_en: "13/5",
answer_hi: "13/5",
attempted: false,
selected: ""
},
{
num: 45,
question_en: "Find unit digit of 7¹²⁵.",
question_hi: "7¹²⁵ का इकाई अंक ज्ञात कीजिए।",
options_en: ["1", "3", "7", "9"],
options_hi: ["1", "3", "7", "9"],
answer_en: "7",
answer_hi: "7",
attempted: false,
selected: ""
},
{
num: 46,
question_en: "In ΔABC, ∠B = 90°, AB = 5 cm, BC = 12 cm. Find AC.",
question_hi: "ΔABC में, ∠B = 90°, AB = 5 सेमी, BC = 12 सेमी। AC ज्ञात कीजिए।",
options_en: ["13 cm", "14 cm", "15 cm", "17 cm"],
options_hi: ["13 सेमी", "14 सेमी", "15 सेमी", "17 सेमी"],
answer_en: "13 cm",
answer_hi: "13 सेमी",
attempted: false,
selected: ""
},
{
num: 47,
question_en: "Two trains of lengths 150 m and 200 m move towards each other at 54 km/h and 72 km/h. Find time to cross each other.",
question_hi: "150 मीटर और 200 मीटर लंबी दो ट्रेनें 54 किमी/घंटा और 72 किमी/घंटा की गति से एक-दूसरे की ओर चल रही हैं। एक-दूसरे को पार करने का समय ज्ञात कीजिए।",
options_en: ["6 sec", "8 sec", "10 sec", "12 sec"],
options_hi: ["6 सेकंड", "8 सेकंड", "10 सेकंड", "12 सेकंड"],
answer_en: "10 sec",
answer_hi: "10 सेकंड",
attempted: false,
selected: ""
},
{
num: 48,
question_en: "If a/2 = b/3 = c/4, find (a+b+c)/c.",
question_hi: "यदि a/2 = b/3 = c/4 है, तो (a+b+c)/c ज्ञात कीजिए।",
options_en: ["2", "2.25", "2.5", "9/4"],
options_hi: ["2", "2.25", "2.5", "9/4"],
answer_en: "9/4",
answer_hi: "9/4",
attempted: false,
selected: ""
},
{
num: 49,
question_en: "Area of a rhombus with diagonals 10 cm and 12 cm is:",
question_hi: "10 सेमी और 12 सेमी विकर्ण वाले समचतुर्भुज का क्षेत्रफल है:",
options_en: ["60 cm²", "72 cm²", "120 cm²", "240 cm²"],
options_hi: ["60 सेमी²", "72 सेमी²", "120 सेमी²", "240 सेमी²"],
answer_en: "60 cm²",
answer_hi: "60 सेमी²",
attempted: false,
selected: ""
},
{
num: 50,
question_en: "Product of two numbers is 2160 and HCF is 12. Find LCM.",
question_hi: "दो संख्याओं का गुणनफल 2160 है और महत्तम समापवर्तक 12 है। लघुत्तम समापवर्त्य ज्ञात कीजिए।",
options_en: ["120", "150", "180", "200"],
options_hi: ["120", "150", "180", "200"],
answer_en: "180",
answer_hi: "180",
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