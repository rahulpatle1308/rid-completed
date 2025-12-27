const questions = [
  {
  num: 1,
  question_en: "What is the value of π (pi) up to two decimal places?",
  question_hi: "π (पाई) का दो दशमलव स्थानों तक मान क्या है?",
  options_en: ["3.14", "3.16", "3.18", "3.12"],
  options_hi: ["3.14", "3.16", "3.18", "3.12"],
  answer_en: "3.14",
  answer_hi: "3.14",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "The SI unit of work is:",
  question_hi: "कार्य की SI इकाई है:",
  options_en: ["Newton", "Joule", "Watt", "Pascal"],
  options_hi: ["न्यूटन", "जूल", "वाट", "पास्कल"],
  answer_en: "Joule",
  answer_hi: "जूल",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "What is the sum of angles in a triangle?",
  question_hi: "त्रिभुज में कोणों का योग कितना होता है?",
  options_en: ["90°", "180°", "270°", "360°"],
  options_hi: ["90°", "180°", "270°", "360°"],
  answer_en: "180°",
  answer_hi: "180°",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Which law states that every action has an equal and opposite reaction?",
  question_hi: "कौन सा नियम कहता है कि प्रत्येक क्रिया की बराबर और विपरीत प्रतिक्रिया होती है?",
  options_en: ["Newton's First Law", "Newton's Second Law", "Newton's Third Law", "Newton's Law of Gravitation"],
  options_hi: ["न्यूटन का पहला नियम", "न्यूटन का दूसरा नियम", "न्यूटन का तीसरा नियम", "न्यूटन का गुरुत्वाकर्षण नियम"],
  answer_en: "Newton's Third Law",
  answer_hi: "न्यूटन का तीसरा नियम",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "What is the square root of 144?",
  question_hi: "144 का वर्गमूल क्या है?",
  options_en: ["10", "12", "14", "16"],
  options_hi: ["10", "12", "14", "16"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "The unit of electric current is:",
  question_hi: "विद्युत धारा की इकाई है:",
  options_en: ["Volt", "Ampere", "Ohm", "Watt"],
  options_hi: ["वोल्ट", "एम्पीयर", "ओम", "वाट"],
  answer_en: "Ampere",
  answer_hi: "एम्पीयर",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "What is the formula for the area of a rectangle?",
  question_hi: "आयत के क्षेत्रफल का सूत्र क्या है?",
  options_en: ["length × width", "½ × base × height", "πr²", "side × side"],
  options_hi: ["लंबाई × चौड़ाई", "½ × आधार × ऊँचाई", "πr²", "भुजा × भुजा"],
  answer_en: "length × width",
  answer_hi: "लंबाई × चौड़ाई",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "What is the acceleration due to gravity on Earth?",
  question_hi: "पृथ्वी पर गुरुत्वाकर्षण के कारण त्वरण कितना है?",
  options_en: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.0 m/s²"],
  options_hi: ["9.8 m/s²", "10 m/s²", "8.9 m/s²", "9.0 m/s²"],
  answer_en: "9.8 m/s²",
  answer_hi: "9.8 m/s²",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "What is 15% of 200?",
  question_hi: "200 का 15% कितना है?",
  options_en: ["20", "30", "40", "50"],
  options_hi: ["20", "30", "40", "50"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which lens is used to correct myopia (short-sightedness)?",
  question_hi: "मायोपिया (निकटदृष्टि) को ठीक करने के लिए किस लेंस का उपयोग किया जाता है?",
  options_en: ["Convex lens", "Concave lens", "Bifocal lens", "Cylindrical lens"],
  options_hi: ["उत्तल लेंस", "अवतल लेंस", "द्विफोकसी लेंस", "बेलनाकार लेंस"],
  answer_en: "Concave lens",
  answer_hi: "अवतल लेंस",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "What is the value of 5² + 3²?",
  question_hi: "5² + 3² का मान क्या है?",
  options_en: ["25", "34", "36", "40"],
  options_hi: ["25", "34", "36", "40"],
  answer_en: "34",
  answer_hi: "34",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "The unit of force is:",
  question_hi: "बल की इकाई है:",
  options_en: ["Joule", "Newton", "Watt", "Pascal"],
  options_hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
  answer_en: "Newton",
  answer_hi: "न्यूटन",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the perimeter of a square with side 5 cm?",
  question_hi: "5 सेमी भुजा वाले वर्ग का परिमाप क्या है?",
  options_en: ["10 cm", "15 cm", "20 cm", "25 cm"],
  options_hi: ["10 सेमी", "15 सेमी", "20 सेमी", "25 सेमी"],
  answer_en: "20 cm",
  answer_hi: "20 सेमी",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "What is the SI unit of power?",
  question_hi: "शक्ति की SI इकाई क्या है?",
  options_en: ["Joule", "Newton", "Watt", "Volt"],
  options_hi: ["जूल", "न्यूटन", "वाट", "वोल्ट"],
  answer_en: "Watt",
  answer_hi: "वाट",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is 3/4 as a percentage?",
  question_hi: "3/4 प्रतिशत के रूप में क्या है?",
  options_en: ["25%", "50%", "75%", "100%"],
  options_hi: ["25%", "50%", "75%", "100%"],
  answer_en: "75%",
  answer_hi: "75%",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "What is the speed of sound in air at room temperature?",
  question_hi: "कमरे के तापमान पर हवा में ध्वनि की गति कितनी है?",
  options_en: ["330 m/s", "340 m/s", "350 m/s", "360 m/s"],
  options_hi: ["330 m/s", "340 m/s", "350 m/s", "360 m/s"],
  answer_en: "340 m/s",
  answer_hi: "340 m/s",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the area of a circle with radius 7 cm? (π = 22/7)",
  question_hi: "7 सेमी त्रिज्या वाले वृत्त का क्षेत्रफल क्या है? (π = 22/7)",
  options_en: ["44 cm²", "88 cm²", "154 cm²", "308 cm²"],
  options_hi: ["44 सेमी²", "88 सेमी²", "154 सेमी²", "308 सेमी²"],
  answer_en: "154 cm²",
  answer_hi: "154 सेमी²",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which type of mirror is used in vehicles as rear-view mirror?",
  question_hi: "वाहनों में रियर-व्यू मिरर के रूप में किस प्रकार के दर्पण का उपयोग किया जाता है?",
  options_en: ["Plane mirror", "Concave mirror", "Convex mirror", "Spherical mirror"],
  options_hi: ["समतल दर्पण", "अवतल दर्पण", "उत्तल दर्पण", "गोलीय दर्पण"],
  answer_en: "Convex mirror",
  answer_hi: "उत्तल दर्पण",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Solve: 25 × 4 ÷ 2",
  question_hi: "हल करें: 25 × 4 ÷ 2",
  options_en: ["25", "50", "75", "100"],
  options_hi: ["25", "50", "75", "100"],
  answer_en: "50",
  answer_hi: "50",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "What is the unit of frequency?",
  question_hi: "आवृत्ति की इकाई क्या है?",
  options_en: ["Hertz", "Decibel", "Watt", "Ohm"],
  options_hi: ["हर्ट्ज", "डेसिबल", "वाट", "ओम"],
  answer_en: "Hertz",
  answer_hi: "हर्ट्ज",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "What is the LCM of 12 and 18?",
  question_hi: "12 और 18 का लघुत्तम समापवर्त्य (LCM) क्या है?",
  options_en: ["24", "36", "48", "72"],
  options_hi: ["24", "36", "48", "72"],
  answer_en: "36",
  answer_hi: "36",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Which law states that pressure is inversely proportional to volume at constant temperature?",
  question_hi: "कौन सा नियम कहता है कि स्थिर तापमान पर दबाव आयतन के व्युत्क्रमानुपाती होता है?",
  options_en: ["Charles's Law", "Boyle's Law", "Gay-Lussac's Law", "Avogadro's Law"],
  options_hi: ["चार्ल्स का नियम", "बॉयल का नियम", "गे-लुसाक का नियम", "एवोगैड्रो का नियम"],
  answer_en: "Boyle's Law",
  answer_hi: "बॉयल का नियम",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is the HCF of 24 and 36?",
  question_hi: "24 और 36 का महत्तम समापवर्तक (HCF) क्या है?",
  options_en: ["6", "8", "12", "18"],
  options_hi: ["6", "8", "12", "18"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is the SI unit of temperature?",
  question_hi: "तापमान की SI इकाई क्या है?",
  options_en: ["Fahrenheit", "Celsius", "Kelvin", "Rankine"],
  options_hi: ["फारेनहाइट", "सेल्सियस", "केल्विन", "रैंकिन"],
  answer_en: "Kelvin",
  answer_hi: "केल्विन",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "What is the value of 0.25 × 100?",
  question_hi: "0.25 × 100 का मान क्या है?",
  options_en: ["25", "2.5", "250", "0.025"],
  options_hi: ["25", "2.5", "250", "0.025"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Which color of light has the longest wavelength?",
  question_hi: "किस रंग के प्रकाश की तरंगदैर्ध्य सबसे लंबी होती है?",
  options_en: ["Red", "Green", "Blue", "Violet"],
  options_hi: ["लाल", "हरा", "नीला", "बैंगनी"],
  answer_en: "Red",
  answer_hi: "लाल",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "What is the value of 7! (7 factorial)?",
  question_hi: "7! (7 फैक्टोरियल) का मान क्या है?",
  options_en: ["5040", "720", "40320", "120"],
  options_hi: ["5040", "720", "40320", "120"],
  answer_en: "5040",
  answer_hi: "5040",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "What is the SI unit of electric charge?",
  question_hi: "विद्युत आवेश की SI इकाई क्या है?",
  options_en: ["Ampere", "Coulomb", "Volt", "Ohm"],
  options_hi: ["एम्पीयर", "कूलम्ब", "वोल्ट", "ओम"],
  answer_en: "Coulomb",
  answer_hi: "कूलम्ब",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the area of a triangle with base 10 cm and height 5 cm?",
  question_hi: "10 सेमी आधार और 5 सेमी ऊँचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
  options_en: ["15 cm²", "25 cm²", "30 cm²", "50 cm²"],
  options_hi: ["15 सेमी²", "25 सेमी²", "30 सेमी²", "50 सेमी²"],
  answer_en: "25 cm²",
  answer_hi: "25 सेमी²",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is the phenomenon of splitting of white light into its constituent colors called?",
  question_hi: "सफेद प्रकाश के उसके घटक रंगों में विभाजन की घटना को क्या कहा जाता है?",
  options_en: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
  options_hi: ["परावर्तन", "अपवर्तन", "विक्षेपण", "विवर्तन"],
  answer_en: "Dispersion",
  answer_hi: "विक्षेपण",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Simplify: 3(x + 4) - 2(x - 1)",
  question_hi: "सरल करें: 3(x + 4) - 2(x - 1)",
  options_en: ["x + 14", "x + 10", "5x + 14", "5x + 10"],
  options_hi: ["x + 14", "x + 10", "5x + 14", "5x + 10"],
  answer_en: "x + 14",
  answer_hi: "x + 14",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is the SI unit of pressure?",
  question_hi: "दबाव की SI इकाई क्या है?",
  options_en: ["Newton", "Pascal", "Joule", "Watt"],
  options_hi: ["न्यूटन", "पास्कल", "जूल", "वाट"],
  answer_en: "Pascal",
  answer_hi: "पास्कल",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the volume of a cube with side 3 cm?",
  question_hi: "3 सेमी भुजा वाले घन का आयतन क्या है?",
  options_en: ["9 cm³", "18 cm³", "27 cm³", "36 cm³"],
  options_hi: ["9 सेमी³", "18 सेमी³", "27 सेमी³", "36 सेमी³"],
  answer_en: "27 cm³",
  answer_hi: "27 सेमी³",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Which law states that current is directly proportional to voltage?",
  question_hi: "कौन सा नियम कहता है कि धारा वोल्टेज के सीधे आनुपातिक होती है?",
  options_en: ["Faraday's Law", "Ohm's Law", "Coulomb's Law", "Kirchhoff's Law"],
  options_hi: ["फैराडे का नियम", "ओम का नियम", "कूलम्ब का नियम", "किरचॉफ का नियम"],
  answer_en: "Ohm's Law",
  answer_hi: "ओम का नियम",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "What is 20% of 150?",
  question_hi: "150 का 20% कितना है?",
  options_en: ["20", "25", "30", "35"],
  options_hi: ["20", "25", "30", "35"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "What is the SI unit of electric potential?",
  question_hi: "विद्युत विभव की SI इकाई क्या है?",
  options_en: ["Ampere", "Volt", "Ohm", "Watt"],
  options_hi: ["एम्पीयर", "वोल्ट", "ओम", "वाट"],
  answer_en: "Volt",
  answer_hi: "वोल्ट",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the circumference of a circle with diameter 14 cm? (π = 22/7)",
  question_hi: "14 सेमी व्यास वाले वृत्त की परिधि क्या है? (π = 22/7)",
  options_en: ["22 cm", "44 cm", "66 cm", "88 cm"],
  options_hi: ["22 सेमी", "44 सेमी", "66 सेमी", "88 सेमी"],
  answer_en: "44 cm",
  answer_hi: "44 सेमी",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "What is the process of heat transfer through direct contact called?",
  question_hi: "सीधे संपर्क के माध्यम से ऊष्मा स्थानांतरण की प्रक्रिया को क्या कहा जाता है?",
  options_en: ["Conduction", "Convection", "Radiation", "Insulation"],
  options_hi: ["चालन", "संवहन", "विकिरण", "अवरोधन"],
  answer_en: "Conduction",
  answer_hi: "चालन",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is the value of 2³ + 3²?",
  question_hi: "2³ + 3² का मान क्या है?",
  options_en: ["13", "15", "17", "19"],
  options_hi: ["13", "15", "17", "19"],
  answer_en: "17",
  answer_hi: "17",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is the SI unit of luminous intensity?",
  question_hi: "ज्योति तीव्रता की SI इकाई क्या है?",
  options_en: ["Lumen", "Candela", "Lux", "Watt"],
  options_hi: ["लुमेन", "कैंडेला", "लक्स", "वाट"],
  answer_en: "Candela",
  answer_hi: "कैंडेला",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the sum of first 10 natural numbers?",
  question_hi: "पहली 10 प्राकृतिक संख्याओं का योग क्या है?",
  options_en: ["45", "50", "55", "60"],
  options_hi: ["45", "50", "55", "60"],
  answer_en: "55",
  answer_hi: "55",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is the phenomenon of bouncing back of light from a surface called?",
  question_hi: "सतह से प्रकाश के वापस उछलने की घटना को क्या कहा जाता है?",
  options_en: ["Reflection", "Refraction", "Dispersion", "Diffraction"],
  options_hi: ["परावर्तन", "अपवर्तन", "विक्षेपण", "विवर्तन"],
  answer_en: "Reflection",
  answer_hi: "परावर्तन",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "What is the average of first 5 prime numbers?",
  question_hi: "पहली 5 अभाज्य संख्याओं का औसत क्या है?",
  options_en: ["5", "5.6", "6", "6.2"],
  options_hi: ["5", "5.6", "6", "6.2"],
  answer_en: "5.6",
  answer_hi: "5.6",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "What is the SI unit of magnetic flux?",
  question_hi: "चुंबकीय फ्लक्स की SI इकाई क्या है?",
  options_en: ["Tesla", "Weber", "Henry", "Gauss"],
  options_hi: ["टेस्ला", "वेबर", "हेनरी", "गॉस"],
  answer_en: "Weber",
  answer_hi: "वेबर",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is the value of 0.75 as a fraction?",
  question_hi: "0.75 भिन्न के रूप में क्या है?",
  options_en: ["1/2", "2/3", "3/4", "4/5"],
  options_hi: ["1/2", "2/3", "3/4", "4/5"],
  answer_en: "3/4",
  answer_hi: "3/4",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is the formula for calculating speed?",
  question_hi: "गति की गणना के लिए सूत्र क्या है?",
  options_en: ["Distance × Time", "Distance ÷ Time", "Time ÷ Distance", "Mass × Velocity"],
  options_hi: ["दूरी × समय", "दूरी ÷ समय", "समय ÷ दूरी", "द्रव्यमान × वेग"],
  answer_en: "Distance ÷ Time",
  answer_hi: "दूरी ÷ समय",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is the value of log₁₀100?",
  question_hi: "log₁₀100 का मान क्या है?",
  options_en: ["1", "2", "10", "100"],
  options_hi: ["1", "2", "10", "100"],
  answer_en: "2",
  answer_hi: "2",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which type of lens is thicker at the center than at the edges?",
  question_hi: "किस प्रकार का लेंस किनारों की तुलना में केंद्र में मोटा होता है?",
  options_en: ["Concave lens", "Convex lens", "Plano-convex lens", "Biconcave lens"],
  options_hi: ["अवतल लेंस", "उत्तल लेंस", "समतलोत्तल लेंस", "द्विअवतल लेंस"],
  answer_en: "Convex lens",
  answer_hi: "उत्तल लेंस",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the value of sin 90°?",
  question_hi: "sin 90° का मान क्या है?",
  options_en: ["0", "0.5", "1", "√3/2"],
  options_hi: ["0", "0.5", "1", "√3/2"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is the SI unit of capacitance?",
  question_hi: "धारिता की SI इकाई क्या है?",
  options_en: ["Ohm", "Farad", "Henry", "Siemens"],
  options_hi: ["ओम", "फैरड", "हेनरी", "सीमेंस"],
  answer_en: "Farad",
  answer_hi: "फैरड",
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