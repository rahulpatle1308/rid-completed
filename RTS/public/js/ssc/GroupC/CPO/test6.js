const questions = [
  {
  "num":1,
  question_en: "A can do a work in 15 days and B in 20 days. They work together for 4 days. What fraction of work is left?",
  question_hi: "A एक काम 15 दिनों में और B 20 दिनों में कर सकता है। वे 4 दिन एक साथ काम करते हैं। कितना भाग काम बचा है?",
  options_en: ["1/3", "2/5", "8/15", "7/15"],
  options_hi: ["1/3", "2/5", "8/15", "7/15"],
  answer_en: "8/15",
  answer_hi: "8/15",
  attempted: false,
  selected: ""
},
{
  "num":2,
  question_en: "If 3 men or 4 women can complete a work in 60 days, how many days will 2 men and 3 women take?",
  question_hi: "यदि 3 पुरुष या 4 महिलाएं एक काम 60 दिनों में पूरा कर सकते हैं, तो 2 पुरुष और 3 महिलाएं कितने दिन लेंगे?",
  options_en: ["36 days", "40 days", "45 days", "48 days"],
  options_hi: ["36 दिन", "40 दिन", "45 दिन", "48 दिन"],
  answer_en: "36 days",
  answer_hi: "36 दिन",
  attempted: false,
  selected: ""
},
{
  "num":3,
  question_en: "A shopkeeper marks his goods 30% above cost price and gives 10% discount. Find his profit percentage.",
  question_hi: "एक दुकानदार अपने सामान को क्रय मूल्य से 30% अधिक अंकित करता है और 10% की छूट देता है। उसका लाभ प्रतिशत ज्ञात कीजिए।",
  options_en: ["17%", "18%", "19%", "20%"],
  options_hi: ["17%", "18%", "19%", "20%"],
  answer_en: "17%",
  answer_hi: "17%",
  attempted: false,
  selected: ""
},
{
  "num":4,
  question_en: "The ratio of radii of two cylinders is 2:3 and their heights are in ratio 5:4. Find ratio of their volumes.",
  question_hi: "दो बेलनों की त्रिज्याओं का अनुपात 2:3 है और उनकी ऊंचाईयों का अनुपात 5:4 है। उनके आयतनों का अनुपात ज्ञात कीजिए।",
  options_en: ["5:9", "10:27", "20:27", "5:6"],
  options_hi: ["5:9", "10:27", "20:27", "5:6"],
  answer_en: "5:9",
  answer_hi: "5:9",
  attempted: false,
  selected: ""
},
{
  "num":5,
  question_en: "Find the value of √(0.16) + √(0.0081).",
  question_hi: "√(0.16) + √(0.0081) का मान ज्ञात कीजिए।",
  options_en: ["0.49", "0.5", "0.51", "0.52"],
  options_hi: ["0.49", "0.5", "0.51", "0.52"],
  answer_en: "0.49",
  answer_hi: "0.49",
  attempted: false,
  selected: ""
},
{
  "num":6,
  question_en: "If the selling price of 10 pens equals cost price of 12 pens, find profit percentage.",
  question_hi: "यदि 10 पेनों का विक्रय मूल्य 12 पेनों के क्रय मूल्य के बराबर है, तो लाभ प्रतिशत ज्ञात कीजिए।",
  options_en: ["15%", "20%", "25%", "30%"],
  options_hi: ["15%", "20%", "25%", "30%"],
  answer_en: "20%",
  answer_hi: "20%",
  attempted: false,
  selected: ""
},
{
  "num":7,
  question_en: "A man sells two horses for ₹4000 each, gaining 20% on one and losing 20% on other. Find overall gain/loss percentage.",
  question_hi: "एक आदमी दो घोड़े ₹4000 प्रत्येक में बेचता है, एक पर 20% लाभ और दूसरे पर 20% हानि होती है। कुल लाभ/हानि प्रतिशत ज्ञात कीजिए।",
  options_en: ["4% loss", "4% gain", "No profit no loss", "2% loss"],
  options_hi: ["4% हानि", "4% लाभ", "न लाभ न हानि", "2% हानि"],
  answer_en: "4% loss",
  answer_hi: "4% हानि",
  attempted: false,
  selected: ""
},
{
  "num":8,
  question_en: "If 2x - 3y = 7 and 3x + 2y = 13, find value of x² + y².",
  question_hi: "यदि 2x - 3y = 7 और 3x + 2y = 13 है, तो x² + y² का मान ज्ञात कीजिए।",
  options_en: ["13", "17", "25", "29"],
  options_hi: ["13", "17", "25", "29"],
  answer_en: "13",
  answer_hi: "13",
  attempted: false,
  selected: ""
},
{
  "num":9,
  question_en: "Find the fourth proportional to 3, 7, and 15.",
  question_hi: "3, 7 और 15 का चौथा समानुपाती ज्ञात कीजिए।",
  options_en: ["21", "28", "35", "42"],
  options_hi: ["21", "28", "35", "42"],
  answer_en: "35",
  answer_hi: "35",
  attempted: false,
  selected: ""
},
{
  "num":10,
  question_en: "The sum of three consecutive even numbers is 102. Find the middle number.",
  question_hi: "तीन लगातार सम संख्याओं का योग 102 है। मध्य संख्या ज्ञात कीजिए।",
  options_en: ["32", "34", "36", "38"],
  options_hi: ["32", "34", "36", "38"],
  answer_en: "34",
  answer_hi: "34",
  attempted: false,
  selected: ""
},
{
  "num":11,
  question_en: "If (a+b):(b+c):(c+a) = 5:6:7, find a:b:c.",
  question_hi: "यदि (a+b):(b+c):(c+a) = 5:6:7 है, तो a:b:c ज्ञात कीजिए।",
  options_en: ["2:3:4", "3:4:5", "4:5:6", "5:6:7"],
  options_hi: ["2:3:4", "3:4:5", "4:5:6", "5:6:7"],
  answer_en: "2:3:4",
  answer_hi: "2:3:4",
  attempted: false,
  selected: ""
},
{
  "num":12,
  question_en: "A train passes a platform 200 m long in 30 sec and a pole in 10 sec. Find length of train.",
  question_hi: "एक ट्रेन 200 मीटर लंबे प्लेटफॉर्म को 30 सेकंड में और एक खंभे को 10 सेकंड में पार करती है। ट्रेन की लंबाई ज्ञात कीजिए।",
  options_en: ["100 m", "150 m", "200 m", "250 m"],
  options_hi: ["100 मीटर", "150 मीटर", "200 मीटर", "250 मीटर"],
  answer_en: "100 m",
  answer_hi: "100 मीटर",
  attempted: false,
  selected: ""
},
{
  "num":13,
  question_en: "Find the compound interest on ₹8000 for 1 year at 10% per annum compounded half-yearly.",
  question_hi: "₹8000 पर 1 वर्ष के लिए 10% प्रति वर्ष की दर से अर्धवार्षिक चक्रवृद्धि ब्याज ज्ञात कीजिए।",
  options_en: ["₹820", "₹840", "₹860", "₹880"],
  options_hi: ["₹820", "₹840", "₹860", "₹880"],
  answer_en: "₹820",
  answer_hi: "₹820",
  attempted: false,
  selected: ""
},
{
  "num":14,
  question_en: "If sinθ = 12/13, find tanθ + cotθ.",
  question_hi: "यदि sinθ = 12/13 है, तो tanθ + cotθ ज्ञात कीजिए।",
  options_en: ["13/12", "169/60", "25/12", "60/169"],
  options_hi: ["13/12", "169/60", "25/12", "60/169"],
  answer_en: "169/60",
  answer_hi: "169/60",
  attempted: false,
  selected: ""
},
{
  "num":15,
  question_en: "Find the value of (0.04)^(-1.5).",
  question_hi: "(0.04)^(-1.5) का मान ज्ञात कीजिए।",
  options_en: ["25", "125", "250", "500"],
  options_hi: ["25", "125", "250", "500"],
  answer_en: "125",
  answer_hi: "125",
  attempted: false,
  selected: ""
},
{
  "num":16,
  question_en: "The average age of 30 students is 12 years. If teacher's age is included, average becomes 13 years. Find teacher's age.",
  question_hi: "30 छात्रों की औसत आयु 12 वर्ष है। यदि शिक्षक की आयु शामिल की जाए, तो औसत 13 वर्ष हो जाता है। शिक्षक की आयु ज्ञात कीजिए।",
  options_en: ["30 years", "35 years", "40 years", "43 years"],
  options_hi: ["30 वर्ष", "35 वर्ष", "40 वर्ष", "43 वर्ष"],
  answer_en: "43 years",
  answer_hi: "43 वर्ष",
  attempted: false,
  selected: ""
},
{
  "num":17,
  question_en: "Find the area of triangle with sides 13 cm, 14 cm, and 15 cm.",
  question_hi: "13 सेमी, 14 सेमी और 15 सेमी भुजाओं वाले त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
  options_en: ["84 cm²", "91 cm²", "96 cm²", "100 cm²"],
  options_hi: ["84 सेमी²", "91 सेमी²", "96 सेमी²", "100 सेमी²"],
  answer_en: "84 cm²",
  answer_hi: "84 सेमी²",
  attempted: false,
  selected: ""
},
{
  "num":18,
  question_en: "If √(1 - sin²A) = cosA, what is the value of A if 0° ≤ A ≤ 90°?",
  question_hi: "यदि √(1 - sin²A) = cosA है, तो A का मान क्या है यदि 0° ≤ A ≤ 90°?",
  options_en: ["0° to 90°", "0° only", "90° only", "45°"],
  options_hi: ["0° से 90°", "केवल 0°", "केवल 90°", "45°"],
  answer_en: "0° to 90°",
  answer_hi: "0° से 90°",
  attempted: false,
  selected: ""
},
{
  "num":19,
  question_en: "Simplify: 1/(1+√2) + 1/(√2+√3) + 1/(√3+√4).",
  question_hi: "सरल कीजिए: 1/(1+√2) + 1/(√2+√3) + 1/(√3+√4)।",
  options_en: ["1", "√2-1", "√4-1", "2-√2"],
  options_hi: ["1", "√2-1", "√4-1", "2-√2"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  "num":20,
  question_en: "A mixture contains milk and water in ratio 5:3. If 16 liters of water is added, ratio becomes 5:7. Find initial quantity of milk.",
  question_hi: "एक मिश्रण में दूध और पानी का अनुपात 5:3 है। यदि 16 लीटर पानी मिलाया जाए, तो अनुपात 5:7 हो जाता है। दूध की प्रारंभिक मात्रा ज्ञात कीजिए।",
  options_en: ["20 L", "25 L", "30 L", "35 L"],
  options_hi: ["20 लीटर", "25 लीटर", "30 लीटर", "35 लीटर"],
  answer_en: "25 L",
  answer_hi: "25 लीटर",
  attempted: false,
  selected: ""
},
{
  "num":21,
  question_en: "Find the value of log₂16 + log₃27 - log₅25.",
  question_hi: "log₂16 + log₃27 - log₅25 का मान ज्ञात कीजिए।",
  options_en: ["3", "4", "5", "6"],
  options_hi: ["3", "4", "5", "6"],
  answer_en: "5",
  answer_hi: "5",
  attempted: false,
  selected: ""
},
{
  "num":22,
  question_en: "The angles of a quadrilateral are in ratio 1:2:3:4. Find the largest angle.",
  question_hi: "एक चतुर्भुज के कोणों का अनुपात 1:2:3:4 है। सबसे बड़ा कोण ज्ञात कीजिए।",
  options_en: ["72°", "108°", "144°", "150°"],
  options_hi: ["72°", "108°", "144°", "150°"],
  answer_en: "144°",
  answer_hi: "144°",
  attempted: false,
  selected: ""
},
{
  "num":23,
  question_en: "Find the square root of 0.00059049.",
  question_hi: "0.00059049 का वर्गमूल ज्ञात कीजिए।",
  options_en: ["0.0243", "0.027", "0.024", "0.0273"],
  options_hi: ["0.0243", "0.027", "0.024", "0.0273"],
  answer_en: "0.0243",
  answer_hi: "0.0243",
  attempted: false,
  selected: ""
},
{
  "num":24,
  question_en: "A boat goes 30 km upstream in 6 hours and same distance downstream in 4 hours. Find speed of boat in still water.",
  question_hi: "एक नाव धारा के विपरीत 30 किमी 6 घंटे में और समान दूरी धारा के साथ 4 घंटे में जाती है। शांत जल में नाव की गति ज्ञात कीजिए।",
  options_en: ["5 km/h", "6.25 km/h", "7.5 km/h", "8 km/h"],
  options_hi: ["5 किमी/घंटा", "6.25 किमी/घंटा", "7.5 किमी/घंटा", "8 किमी/घंटा"],
  answer_en: "6.25 km/h",
  answer_hi: "6.25 किमी/घंटा",
  attempted: false,
  selected: ""
},
{
  "num":25,
  question_en: "If x = 1 + √2, find the value of x³ + 1/x³.",
  question_hi: "यदि x = 1 + √2 है, तो x³ + 1/x³ का मान ज्ञात कीजिए।",
  options_en: ["14", "16", "18", "20"],
  options_hi: ["14", "16", "18", "20"],
  answer_en: "14",
  answer_hi: "14",
  attempted: false,
  selected: ""
},
{
  "num":26,
  question_en: "Find the number of zeroes at the end of 100!",
  question_hi: "100! के अंत में शून्यों की संख्या ज्ञात कीजिए।",
  options_en: ["21", "22", "23", "24"],
  options_hi: ["21", "22", "23", "24"],
  answer_en: "24",
  answer_hi: "24",
  attempted: false,
  selected: ""
},
{
  "num":27,
  question_en: "If cosθ = 0.6, find the value of 5sinθ - 3tanθ.",
  question_hi: "यदि cosθ = 0.6 है, तो 5sinθ - 3tanθ का मान ज्ञात कीजिए।",
  options_en: ["0", "1", "2", "3"],
  options_hi: ["0", "1", "2", "3"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
  "num":28,
  question_en: "A sum of money at compound interest doubles in 5 years. In how many years will it become 8 times?",
  question_hi: "चक्रवृद्धि ब्याज पर एक राशि 5 वर्षों में दोगुनी हो जाती है। कितने वर्षों में यह 8 गुना हो जाएगी?",
  options_en: ["10 years", "15 years", "20 years", "25 years"],
  options_hi: ["10 वर्ष", "15 वर्ष", "20 वर्ष", "25 वर्ष"],
  answer_en: "15 years",
  answer_hi: "15 वर्ष",
  attempted: false,
  selected: ""
},
{
  "num":29,
  question_en: "Find the area of the largest circle that can be inscribed in a square of side 14 cm.",
  question_hi: "14 सेमी भुजा वाले वर्ग में अंकित किए जा सकने वाले सबसे बड़े वृत्त का क्षेत्रफल ज्ञात कीजिए।",
  options_en: ["49π cm²", "98π cm²", "154 cm²", "196π cm²"],
  options_hi: ["49π सेमी²", "98π सेमी²", "154 सेमी²", "196π सेमी²"],
  answer_en: "49π cm²",
  answer_hi: "49π सेमी²",
  attempted: false,
  selected: ""
},
{
  "num":30,
  question_en: "If 2A = 3B = 4C, find A:B:C.",
  question_hi: "यदि 2A = 3B = 4C है, तो A:B:C ज्ञात कीजिए।",
  options_en: ["2:3:4", "6:4:3", "12:8:6", "4:3:2"],
  options_hi: ["2:3:4", "6:4:3", "12:8:6", "4:3:2"],
  answer_en: "6:4:3",
  answer_hi: "6:4:3",
  attempted: false,
  selected: ""
},
{
  "num":31,
  question_en: "Find the median of data: 12, 17, 8, 14, 13, 19, 10, 24",
  question_hi: "आंकड़ों की माध्यिका ज्ञात कीजिए: 12, 17, 8, 14, 13, 19, 10, 24",
  options_en: ["13", "13.5", "14", "14.5"],
  options_hi: ["13", "13.5", "14", "14.5"],
  answer_en: "13.5",
  answer_hi: "13.5",
  attempted: false,
  selected: ""
},
{
  "num":32,
  question_en: "If 15% of A = 20% of B = 25% of C, find A:B:C.",
  question_hi: "यदि A का 15% = B का 20% = C का 25% है, तो A:B:C ज्ञात कीजिए।",
  options_en: ["12:9:8", "20:15:12", "25:20:15", "30:25:20"],
  options_hi: ["12:9:8", "20:15:12", "25:20:15", "30:25:20"],
  answer_en: "20:15:12",
  answer_hi: "20:15:12",
  attempted: false,
  selected: ""
},
{
  "num":33,
  question_en: "A number when divided by 133 gives remainder 21. What will be remainder when same number is divided by 7?",
  question_hi: "एक संख्या को जब 133 से विभाजित किया जाता है तो शेषफल 21 आता है। उसी संख्या को 7 से विभाजित करने पर शेषफल क्या होगा?",
  options_en: ["0", "1", "2", "3"],
  options_hi: ["0", "1", "2", "3"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
  "num":34,
  question_en: "If a² + b² = 25 and ab = 12, find the value of a³ + b³.",
  question_hi: "यदि a² + b² = 25 और ab = 12 है, तो a³ + b³ का मान ज्ञात कीजिए।",
  options_en: ["91", "98", "105", "112"],
  options_hi: ["91", "98", "105", "112"],
  answer_en: "91",
  answer_hi: "91",
  attempted: false,
  selected: ""
},
{
  "num":35,
  question_en: "Find the curved surface area of a cylinder with radius 7 cm and height 10 cm.",
  question_hi: "7 सेमी त्रिज्या और 10 सेमी ऊंचाई वाले बेलन का वक्र पृष्ठीय क्षेत्रफल ज्ञात कीजिए।",
  options_en: ["220 cm²", "440 cm²", "660 cm²", "880 cm²"],
  options_hi: ["220 सेमी²", "440 सेमी²", "660 सेमी²", "880 सेमी²"],
  answer_en: "440 cm²",
  answer_hi: "440 सेमी²",
  attempted: false,
  selected: ""
},
{
  "num":36,
  question_en: "Simplify: (256)^(0.16) × (256)^(0.09)",
  question_hi: "सरल कीजिए: (256)^(0.16) × (256)^(0.09)",
  options_en: ["4", "8", "16", "32"],
  options_hi: ["4", "8", "16", "32"],
  answer_en: "4",
  answer_hi: "4",
  attempted: false,
  selected: ""
},
{
  "num":37,
  question_en: "Find the value of sin²30° + cos²60° + tan²45°.",
  question_hi: "sin²30° + cos²60° + tan²45° का मान ज्ञात कीजिए।",
  options_en: ["1", "1.25", "1.5", "2"],
  options_hi: ["1", "1.25", "1.5", "2"],
  answer_en: "1.5",
  answer_hi: "1.5",
  attempted: false,
  selected: ""
},
{
  "num":38,
  question_en: "The present ages of A and B are in ratio 5:7. After 4 years, ratio will be 3:4. Find A's present age.",
  question_hi: "A और B की वर्तमान आयु का अनुपात 5:7 है। 4 वर्ष बाद, अनुपात 3:4 हो जाएगा। A की वर्तमान आयु ज्ञात कीजिए।",
  options_en: ["10 years", "12 years", "15 years", "20 years"],
  options_hi: ["10 वर्ष", "12 वर्ष", "15 वर्ष", "20 वर्ष"],
  answer_en: "20 years",
  answer_hi: "20 वर्ष",
  attempted: false,
  selected: ""
},
{
  "num":39,
  question_en: "If 2^x = 3^y = 6^(-z), find 1/x + 1/y + 1/z.",
  question_hi: "यदि 2^x = 3^y = 6^(-z) है, तो 1/x + 1/y + 1/z ज्ञात कीजिए।",
  options_en: ["0", "1", "-1", "2"],
  options_hi: ["0", "1", "-1", "2"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
  "num":40,
  question_en: "Find the area of equilateral triangle with side 12 cm.",
  question_hi: "12 सेमी भुजा वाले समबाहु त्रिभुज का क्षेत्रफल ज्ञात कीजिए।",
  options_en: ["36√3 cm²", "48√3 cm²", "60√3 cm²", "72√3 cm²"],
  options_hi: ["36√3 सेमी²", "48√3 सेमी²", "60√3 सेमी²", "72√3 सेमी²"],
  answer_en: "36√3 cm²",
  answer_hi: "36√3 सेमी²",
  attempted: false,
  selected: ""
},
{
  "num":41,
  question_en: "A's income is 20% less than B's. By what percentage is B's income more than A's?",
  question_hi: "A की आय B से 20% कम है। B की आय A से कितने प्रतिशत अधिक है?",
  options_en: ["20%", "25%", "30%", "33.33%"],
  options_hi: ["20%", "25%", "30%", "33.33%"],
  answer_en: "25%",
  answer_hi: "25%",
  attempted: false,
  selected: ""
},
{
  "num":42,
  question_en: "Find the value of (0.2)^3 + (0.02)^3 + (0.002)^3.",
  question_hi: "(0.2)^3 + (0.02)^3 + (0.002)^3 का मान ज्ञात कीजिए।",
  options_en: ["0.008", "0.008208", "0.008888", "0.009"],
  options_hi: ["0.008", "0.008208", "0.008888", "0.009"],
  answer_en: "0.008208",
  answer_hi: "0.008208",
  attempted: false,
  selected: ""
},
{
  "num":43,
  question_en: "If the diameter of a sphere is doubled, its volume becomes how many times?",
  question_hi: "यदि एक गोले का व्यास दोगुना कर दिया जाए, तो उसका आयतन कितने गुना हो जाएगा?",
  options_en: ["2 times", "4 times", "6 times", "8 times"],
  options_hi: ["2 गुना", "4 गुना", "6 गुना", "8 गुना"],
  answer_en: "8 times",
  answer_hi: "8 गुना",
  attempted: false,
  selected: ""
},
{
  "num":44,
  question_en: "Find the sum of first 25 natural numbers.",
  question_hi: "पहली 25 प्राकृतिक संख्याओं का योग ज्ञात कीजिए।",
  options_en: ["300", "325", "350", "375"],
  options_hi: ["300", "325", "350", "375"],
  answer_en: "325",
  answer_hi: "325",
  attempted: false,
  selected: ""
},
{
  "num":45,
  question_en: "If secθ + tanθ = 3, find secθ - tanθ.",
  question_hi: "यदि secθ + tanθ = 3 है, तो secθ - tanθ ज्ञात कीजिए।",
  options_en: ["1/3", "1/2", "2/3", "3/4"],
  options_hi: ["1/3", "1/2", "2/3", "3/4"],
  answer_en: "1/3",
  answer_hi: "1/3",
  attempted: false,
  selected: ""
},
{
  "num":46,
  question_en: "A man walks 10 km North, then 6 km East, then 2 km South. How far is he from starting point?",
  question_hi: "एक आदमी 10 किमी उत्तर चलता है, फिर 6 किमी पूर्व, फिर 2 किमी दक्षिण। वह शुरुआती बिंदु से कितनी दूर है?",
  options_en: ["8 km", "10 km", "12 km", "14 km"],
  options_hi: ["8 किमी", "10 किमी", "12 किमी", "14 किमी"],
  answer_en: "10 km",
  answer_hi: "10 किमी",
  attempted: false,
  selected: ""
},
{
  "num":47,
  question_en: "Find the value of 1 - 1/(1+1/(1-1/2)).",
  question_hi: "1 - 1/(1+1/(1-1/2)) का मान ज्ञात कीजिए।",
  options_en: ["-1", "0", "1/2", "1/3"],
  options_hi: ["-1", "0", "1/2", "1/3"],
  answer_en: "1/3",
  answer_hi: "1/3",
  attempted: false,
  selected: ""
},
{
  "num":48,
  question_en: "The ratio of copper and zinc in brass is 13:7. How much zinc will be in 100 kg brass?",
  question_hi: "पीतल में तांबे और जस्ते का अनुपात 13:7 है। 100 किग्रा पीतल में कितना जस्ता होगा?",
  options_en: ["30 kg", "35 kg", "40 kg", "45 kg"],
  options_hi: ["30 किग्रा", "35 किग्रा", "40 किग्रा", "45 किग्रा"],
  answer_en: "35 kg",
  answer_hi: "35 किग्रा",
  attempted: false,
  selected: ""
},
{
  "num":49,
  question_en: "If 3x + 4y = 11 and 4x + 3y = 10, find x + y.",
  question_hi: "यदि 3x + 4y = 11 और 4x + 3y = 10 है, तो x + y ज्ञात कीजिए।",
  options_en: ["2", "3", "4", "5"],
  options_hi: ["2", "3", "4", "5"],
  answer_en: "3",
  answer_hi: "3",
  attempted: false,
  selected: ""
},
{
  "num":50,
  question_en: "Find the sum of interior angles of a regular octagon.",
  question_hi: "एक सम अष्टभुज के आंतरिक कोणों का योग ज्ञात कीजिए।",
  options_en: ["720°", "900°", "1080°", "1260°"],
  options_hi: ["720°", "900°", "1080°", "1260°"],
  answer_en: "1080°",
  answer_hi: "1080°",
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