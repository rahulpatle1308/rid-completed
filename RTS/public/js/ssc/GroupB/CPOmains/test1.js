const questions = [  
{
  num: 1,
  question_en: "What is the capital of India?",
  question_hi: "भारत की राजधानी क्या है?",
  options_en: ["Mumbai", "New Delhi", "Kolkata", "Chennai"],
  options_hi: ["मुंबई", "नई दिल्ली", "कोलकाता", "चेन्नई"],
  answer_en: "New Delhi",
  answer_hi: "नई दिल्ली",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is the chemical symbol for water?",
  question_hi: "पानी का रासायनिक सूत्र क्या है?",
  options_en: ["H2O", "CO2", "NaCl", "O2"],
  options_hi: ["H2O", "CO2", "NaCl", "O2"],
  answer_en: "H2O",
  answer_hi: "H2O",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Who is known as the Father of the Indian Constitution?",
  question_hi: "भारतीय संविधान के जनक कौन हैं?",
  options_en: ["Mahatma Gandhi", "B. R. Ambedkar", "Jawaharlal Nehru", "Rajendra Prasad"],
  options_hi: ["महात्मा गांधी", "बी. आर. अंबेडकर", "जवाहरलाल नेहरू", "राजेंद्र प्रसाद"],
  answer_en: "B. R. Ambedkar",
  answer_hi: "बी. आर. अंबेडकर",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is 25 × 4?",
  question_hi: "25 × 4 कितना होता है?",
  options_en: ["50", "75", "100", "125"],
  options_hi: ["50", "75", "100", "125"],
  answer_en: "100",
  answer_hi: "100",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which gas is essential for respiration?",
  question_hi: "श्वसन के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is the square root of 144?",
  question_hi: "144 का वर्गमूल क्या है?",
  options_en: ["10", "11", "12", "13"],
  options_hi: ["10", "11", "12", "13"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Which river is the longest in India?",
  question_hi: "भारत की सबसे लंबी नदी कौन सी है?",
  options_en: ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
  options_hi: ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
  answer_en: "Ganga",
  answer_hi: "गंगा",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "If A = 1, then Z = ?",
  question_hi: "यदि A = 1 हो, तो Z = ?",
  options_en: ["24", "25", "26", "27"],
  options_hi: ["24", "25", "26", "27"],
  answer_en: "26",
  answer_hi: "26",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Who invented the telephone?",
  question_hi: "टेलीफोन का आविष्कार किसने किया?",
  options_en: ["Edison", "Newton", "Alexander Graham Bell", "Tesla"],
  options_hi: ["एडिसन", "न्यूटन", "अलेक्जेंडर ग्राहम बेल", "टेस्ला"],
  answer_en: "Alexander Graham Bell",
  answer_hi: "अलेक्जेंडर ग्राहम बेल",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "What is 15% of 200?",
  question_hi: "200 का 15% कितना है?",
  options_en: ["20", "25", "30", "40"],
  options_hi: ["20", "25", "30", "40"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Which planet is known as the Red Planet?",
  question_hi: "लाल ग्रह कौन सा है?",
  options_en: ["Earth", "Mars", "Venus", "Jupiter"],
  options_hi: ["पृथ्वी", "मंगल", "शुक्र", "बृहस्पति"],
  answer_en: "Mars",
  answer_hi: "मंगल",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "What is the SI unit of force?",
  question_hi: "बल की SI इकाई क्या है?",
  options_en: ["Joule", "Newton", "Watt", "Pascal"],
  options_hi: ["जूल", "न्यूटन", "वाट", "पास्कल"],
  answer_en: "Newton",
  answer_hi: "न्यूटन",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Who was the first President of India?",
  question_hi: "भारत के पहले राष्ट्रपति कौन थे?",
  options_en: ["Rajendra Prasad", "Nehru", "Gandhi", "Radhakrishnan"],
  options_hi: ["राजेंद्र प्रसाद", "नेहरू", "गांधी", "राधाकृष्णन"],
  answer_en: "Rajendra Prasad",
  answer_hi: "राजेंद्र प्रसाद",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "What is the value of π (approx)?",
  question_hi: "π का लगभग मान क्या है?",
  options_en: ["3.14", "2.14", "4.14", "1.14"],
  options_hi: ["3.14", "2.14", "4.14", "1.14"],
  answer_en: "3.14",
  answer_hi: "3.14",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कौन सी धातु कमरे के तापमान पर द्रव होती है?",
  options_en: ["Iron", "Mercury", "Copper", "Silver"],
  options_hi: ["लोहा", "पारा", "तांबा", "चांदी"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "How many states are there in India?",
  question_hi: "भारत में कितने राज्य हैं?",
  options_en: ["27", "28", "29", "30"],
  options_hi: ["27", "28", "29", "30"],
  answer_en: "28",
  answer_hi: "28",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is 9²?",
  question_hi: "9 का वर्ग कितना है?",
  options_en: ["18", "72", "81", "90"],
  options_hi: ["18", "72", "81", "90"],
  answer_en: "81",
  answer_hi: "81",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Who wrote the Ramayana?",
  question_hi: "रामायण किसने लिखी?",
  options_en: ["Valmiki", "Tulsidas", "Ved Vyas", "Kalidas"],
  options_hi: ["वाल्मीकि", "तुलसीदास", "वेदव्यास", "कालिदास"],
  answer_en: "Valmiki",
  answer_hi: "वाल्मीकि",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What comes next: 2, 4, 8, 16, ?",
  question_hi: "श्रृंखला पूरी करें: 2, 4, 8, 16, ?",
  options_en: ["18", "24", "32", "36"],
  options_hi: ["18", "24", "32", "36"],
  answer_en: "32",
  answer_hi: "32",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Which vitamin is produced by sunlight?",
  question_hi: "सूर्य प्रकाश से कौन सा विटामिन बनता है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},

// ---------- 21 to 50 ----------

{
  num: 21,
  question_en: "What is the full form of ATM?",
  question_hi: "ATM का पूरा नाम क्या है?",
  options_en: ["Automatic Teller Machine", "Any Time Money", "Auto Transfer Machine", "All Time Money"],
  options_hi: ["ऑटोमैटिक टेलर मशीन", "एनी टाइम मनी", "ऑटो ट्रांसफर मशीन", "ऑल टाइम मनी"],
  answer_en: "Automatic Teller Machine",
  answer_hi: "ऑटोमैटिक टेलर मशीन",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is the boiling point of water?",
  question_hi: "पानी का क्वथनांक कितना है?",
  options_en: ["90°C", "100°C", "110°C", "120°C"],
  options_hi: ["90°C", "100°C", "110°C", "120°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Who is the current President of India?",
  question_hi: "भारत के वर्तमान राष्ट्रपति कौन हैं?",
  options_en: ["Ram Nath Kovind", "Pranab Mukherjee", "Droupadi Murmu", "Narendra Modi"],
  options_hi: ["रामनाथ कोविंद", "प्रणब मुखर्जी", "द्रौपदी मुर्मू", "नरेंद्र मोदी"],
  answer_en: "Droupadi Murmu",
  answer_hi: "द्रौपदी मुर्मू",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "What is the smallest prime number?",
  question_hi: "सबसे छोटी अभाज्य संख्या कौन सी है?",
  options_en: ["0", "1", "2", "3"],
  options_hi: ["0", "1", "2", "3"],
  answer_en: "2",
  answer_hi: "2",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which ocean is the largest?",
  question_hi: "सबसे बड़ा महासागर कौन सा है?",
  options_en: ["Indian", "Atlantic", "Pacific", "Arctic"],
  options_hi: ["हिंद", "अटलांटिक", "प्रशांत", "आर्कटिक"],
  answer_en: "Pacific",
  answer_hi: "प्रशांत",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "What is 7 × 8?",
  question_hi: "7 × 8 कितना होता है?",
  options_en: ["54", "56", "58", "60"],
  options_hi: ["54", "56", "58", "60"],
  answer_en: "56",
  answer_hi: "56",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which instrument measures temperature?",
  question_hi: "तापमान मापने का यंत्र कौन सा है?",
  options_en: ["Barometer", "Thermometer", "Hygrometer", "Anemometer"],
  options_hi: ["बैरोमीटर", "थर्मामीटर", "हाइग्रोमीटर", "एनीमोमीटर"],
  answer_en: "Thermometer",
  answer_hi: "थर्मामीटर",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "How many months are there in a year?",
  question_hi: "एक वर्ष में कितने महीने होते हैं?",
  options_en: ["10", "11", "12", "13"],
  options_hi: ["10", "11", "12", "13"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the national animal of India?",
  question_hi: "भारत का राष्ट्रीय पशु कौन है?",
  options_en: ["Lion", "Elephant", "Tiger", "Leopard"],
  options_hi: ["शेर", "हाथी", "बाघ", "तेंदुआ"],
  answer_en: "Tiger",
  answer_hi: "बाघ",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "What is 100 ÷ 4?",
  question_hi: "100 ÷ 4 कितना होता है?",
  options_en: ["20", "25", "30", "40"],
  options_hi: ["20", "25", "30", "40"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Which continent is the largest?",
  question_hi: "सबसे बड़ा महाद्वीप कौन सा है?",
  options_en: ["Africa", "Europe", "Asia", "Australia"],
  options_hi: ["अफ्रीका", "यूरोप", "एशिया", "ऑस्ट्रेलिया"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "What is the full form of CPU?",
  question_hi: "CPU का पूरा नाम क्या है?",
  options_en: ["Central Processing Unit", "Control Processing Unit", "Central Program Unit", "Core Processing Unit"],
  options_hi: ["सेंट्रल प्रोसेसिंग यूनिट", "कंट्रोल प्रोसेसिंग यूनिट", "सेंट्रल प्रोग्राम यूनिट", "कोर प्रोसेसिंग यूनिट"],
  answer_en: "Central Processing Unit",
  answer_hi: "सेंट्रल प्रोसेसिंग यूनिट",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "What is the currency of Japan?",
  question_hi: "जापान की मुद्रा क्या है?",
  options_en: ["Yuan", "Won", "Yen", "Dollar"],
  options_hi: ["युआन", "वोन", "येन", "डॉलर"],
  answer_en: "Yen",
  answer_hi: "येन",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is 5³?",
  question_hi: "5 का घन कितना है?",
  options_en: ["25", "75", "125", "150"],
  options_hi: ["25", "75", "125", "150"],
  answer_en: "125",
  answer_hi: "125",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Which organ pumps blood?",
  question_hi: "कौन सा अंग रक्त पंप करता है?",
  options_en: ["Lungs", "Brain", "Heart", "Kidney"],
  options_hi: ["फेफड़े", "मस्तिष्क", "हृदय", "गुर्दा"],
  answer_en: "Heart",
  answer_hi: "हृदय",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which day is celebrated as World Environment Day?",
  question_hi: "विश्व पर्यावरण दिवस कब मनाया जाता है?",
  options_en: ["5 June", "15 August", "2 October", "26 January"],
  options_hi: ["5 जून", "15 अगस्त", "2 अक्टूबर", "26 जनवरी"],
  answer_en: "5 June",
  answer_hi: "5 जून",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the opposite of 'Success'?",
  question_hi: "'Success' का विलोम क्या है?",
  options_en: ["Win", "Failure", "Profit", "Gain"],
  options_hi: ["जीत", "असफलता", "लाभ", "फायदा"],
  answer_en: "Failure",
  answer_hi: "असफलता",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Which gas is known as laughing gas?",
  question_hi: "हंसाने वाली गैस कौन सी है?",
  options_en: ["Oxygen", "Nitrous Oxide", "Hydrogen", "Carbon Monoxide"],
  options_hi: ["ऑक्सीजन", "नाइट्रस ऑक्साइड", "हाइड्रोजन", "कार्बन मोनोऑक्साइड"],
  answer_en: "Nitrous Oxide",
  answer_hi: "नाइट्रस ऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "What is 60% of 50?",
  question_hi: "50 का 60% कितना है?",
  options_en: ["25", "30", "35", "40"],
  options_hi: ["25", "30", "35", "40"],
  answer_en: "30",
  answer_hi: "30",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Which direction does the sun rise?",
  question_hi: "सूर्य किस दिशा से उगता है?",
  options_en: ["West", "North", "East", "South"],
  options_hi: ["पश्चिम", "उत्तर", "पूर्व", "दक्षिण"],
  answer_en: "East",
  answer_hi: "पूर्व",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "What is the national flower of India?",
  question_hi: "भारत का राष्ट्रीय फूल कौन सा है?",
  options_en: ["Rose", "Lotus", "Lily", "Sunflower"],
  options_hi: ["गुलाब", "कमल", "लिली", "सूरजमुखी"],
  answer_en: "Lotus",
  answer_hi: "कमल",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "How many letters are there in the English alphabet?",
  question_hi: "अंग्रेज़ी वर्णमाला में कितने अक्षर होते हैं?",
  options_en: ["24", "25", "26", "27"],
  options_hi: ["24", "25", "26", "27"],
  answer_en: "26",
  answer_hi: "26",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which country is known as the Land of Rising Sun?",
  question_hi: "उगते सूर्य की भूमि किसे कहा जाता है?",
  options_en: ["China", "Japan", "Korea", "Thailand"],
  options_hi: ["चीन", "जापान", "कोरिया", "थाईलैंड"],
  answer_en: "Japan",
  answer_hi: "जापान",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "What is the full form of PDF?",
  question_hi: "PDF का पूरा नाम क्या है?",
  options_en: ["Portable Document Format", "Public Data File", "Printed Document File", "Personal Data Format"],
  options_hi: ["पोर्टेबल डॉक्यूमेंट फॉर्मेट", "पब्लिक डेटा फाइल", "प्रिंटेड डॉक्यूमेंट फाइल", "पर्सनल डेटा फॉर्मेट"],
  answer_en: "Portable Document Format",
  answer_hi: "पोर्टेबल डॉक्यूमेंट फॉर्मेट",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Which blood group is universal donor?",
  question_hi: "सार्वभौमिक रक्तदाता कौन सा है?",
  options_en: ["A", "B", "AB", "O negative"],
  options_hi: ["A", "B", "AB", "O निगेटिव"],
  answer_en: "O negative",
  answer_hi: "O निगेटिव",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "What is the largest mammal?",
  question_hi: "सबसे बड़ा स्तनधारी कौन सा है?",
  options_en: ["Elephant", "Blue Whale", "Giraffe", "Rhino"],
  options_hi: ["हाथी", "नीली व्हेल", "जिराफ", "गैंडा"],
  answer_en: "Blue Whale",
  answer_hi: "नीली व्हेल",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "What is 12 × 12?",
  question_hi: "12 × 12 कितना होता है?",
  options_en: ["124", "132", "144", "156"],
  options_hi: ["124", "132", "144", "156"],
  answer_en: "144",
  answer_hi: "144",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Which festival is known as the Festival of Lights?",
  question_hi: "रोशनी का त्योहार किसे कहा जाता है?",
  options_en: ["Holi", "Diwali", "Eid", "Christmas"],
  options_hi: ["होली", "दीवाली", "ईद", "क्रिसमस"],
  answer_en: "Diwali",
  answer_hi: "दीवाली",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "What is the national bird of India?",
  question_hi: "भारत का राष्ट्रीय पक्षी कौन है?",
  options_en: ["Parrot", "Peacock", "Crow", "Eagle"],
  options_hi: ["तोता", "मोर", "कौआ", "गरुड़"],
  answer_en: "Peacock",
  answer_hi: "मोर",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Which device is used to measure blood pressure?",
  question_hi: "रक्तचाप मापने का यंत्र कौन सा है?",
  options_en: ["Thermometer", "Sphygmomanometer", "ECG", "Barometer"],
  options_hi: ["थर्मामीटर", "स्फिग्मोमैनोमीटर", "ईसीजी", "बैरोमीटर"],
  answer_en: "Sphygmomanometer",
  answer_hi: "स्फिग्मोमैनोमीटर",
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