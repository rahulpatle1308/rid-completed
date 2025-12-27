const questions = [
  {
  num: 1,
  question_en: "Choose the correct synonym of 'आनंद'",
  question_hi: "'आनंद' का पर्यायवाची शब्द चुनिए।",
  options_en: ["Happiness", "Fear", "Anger", "Sadness"],
  options_hi: ["सुख", "भय", "क्रोध", "दुःख"],
  answer_en: "Happiness",
  answer_hi: "सुख",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "Choose the antonym of 'सत्य'",
  question_hi: "'सत्य' का विलोम शब्द क्या है?",
  options_en: ["Truth", "Lie", "Fact", "Reality"],
  options_hi: ["सच", "झूठ", "तथ्य", "वास्तविकता"],
  answer_en: "Lie",
  answer_hi: "झूठ",
  attempted: false,
  selected: ""
},
{
  num: 3,
  question_en: "Correct spelling of the word",
  question_hi: "शुद्ध वर्तनी चुनिए।",
  options_en: ["Kshatriya", "Chhatriya", "Kshatri", "Chhattriya"],
  options_hi: ["क्षत्रिय", "छत्रिय", "क्षत्रि", "छत्त्रिया"],
  answer_en: "Kshatriya",
  answer_hi: "क्षत्रिय",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "Meaning of idiom",
  question_hi: "'आँखों का तारा' मुहावरे का अर्थ क्या है?",
  options_en: ["Enemy", "Beloved", "Angry", "Stranger"],
  options_hi: ["प्रिय व्यक्ति", "शत्रु", "क्रोधित", "अजनबी"],
  answer_en: "Beloved",
  answer_hi: "प्रिय व्यक्ति",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Choose the correct plural form",
  question_hi: "'पुस्तक' का बहुवचन क्या है?",
  options_en: ["Pustake", "Pustakon", "Pustaki", "Pustaka"],
  options_hi: ["पुस्तके", "पुस्तकों", "पुस्तकी", "पुस्तका"],
  answer_en: "Pustakon",
  answer_hi: "पुस्तकों",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "Choose the correct gender",
  question_hi: "'राजा' का स्त्रीलिंग क्या है?",
  options_en: ["Rani", "Rajkumari", "Devi", "Nari"],
  options_hi: ["रानी", "राजकुमारी", "देवी", "नारी"],
  answer_en: "Rani",
  answer_hi: "रानी",
  attempted: false,
  selected: ""
},
{
  num: 7,
  question_en: "Choose the correct antonym",
  question_hi: "'उदय' का विलोम शब्द क्या है?",
  options_en: ["Rise", "Set", "Start", "Grow"],
  options_hi: ["उत्थान", "अस्त", "प्रारंभ", "वृद्धि"],
  answer_en: "Set",
  answer_hi: "अस्त",
  attempted: false,
  selected: ""
},
{
  num: 8,
  question_en: "Choose correct word",
  question_hi: "'जल्दी' का पर्यायवाची कौन-सा है?",
  options_en: ["Fast", "Slow", "Late", "Stop"],
  options_hi: ["शीघ्र", "धीमा", "विलंब", "रुकना"],
  answer_en: "Fast",
  answer_hi: "शीघ्र",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Correct sentence",
  question_hi: "शुद्ध वाक्य चुनिए।",
  options_en: ["Ram go school", "Ram goes school", "Ram goes to school", "Ram going school"],
  options_hi: ["राम स्कूल जाता", "राम स्कूल जाता है", "राम स्कूल जाता है।", "राम जाता स्कूल"],
  answer_en: "Ram goes to school",
  answer_hi: "राम स्कूल जाता है।",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Choose the antonym",
  question_hi: "'धनी' का विलोम शब्द क्या है?",
  options_en: ["Rich", "Poor", "Kind", "Big"],
  options_hi: ["अमीर", "गरीब", "दयालु", "बड़ा"],
  answer_en: "Poor",
  answer_hi: "गरीब",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "Choose the synonym",
  question_hi: "'वीर' का पर्यायवाची शब्द क्या है?",
  options_en: ["Brave", "Coward", "Weak", "Fear"],
  options_hi: ["बहादुर", "कायर", "कमजोर", "डर"],
  answer_en: "Brave",
  answer_hi: "बहादुर",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Choose the antonym",
  question_hi: "'सफलता' का विलोम शब्द क्या है?",
  options_en: ["Victory", "Failure", "Win", "Success"],
  options_hi: ["विजय", "असफलता", "जीत", "सफलता"],
  answer_en: "Failure",
  answer_hi: "असफलता",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "Choose correct spelling",
  question_hi: "शुद्ध वर्तनी चुनिए।",
  options_en: ["Shraddha", "Shradha", "Shardha", "Shradha"],
  options_hi: ["श्रद्धा", "श्रधा", "शरधा", "श्रधा"],
  answer_en: "Shraddha",
  answer_hi: "श्रद्धा",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Meaning of idiom",
  question_hi: "'दाँत खट्टे करना' मुहावरे का अर्थ क्या है?",
  options_en: ["Defeat", "Praise", "Help", "Ignore"],
  options_hi: ["पराजित करना", "प्रशंसा करना", "मदद करना", "अनदेखा करना"],
  answer_en: "Defeat",
  answer_hi: "पराजित करना",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "Choose the correct plural",
  question_hi: "'बालक' का बहुवचन क्या है?",
  options_en: ["Balakon", "Balake", "Balaki", "Balaka"],
  options_hi: ["बालकों", "बालके", "बालकी", "बालका"],
  answer_en: "Balakon",
  answer_hi: "बालकों",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Choose correct gender",
  question_hi: "'नायक' का स्त्रीलिंग क्या है?",
  options_en: ["Nayika", "Devi", "Rani", "Kumari"],
  options_hi: ["नायिका", "देवी", "रानी", "कुमारी"],
  answer_en: "Nayika",
  answer_hi: "नायिका",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "Choose antonym",
  question_hi: "'प्रकाश' का विलोम शब्द क्या है?",
  options_en: ["Light", "Darkness", "Sun", "Bright"],
  options_hi: ["रोशनी", "अंधकार", "सूरज", "चमक"],
  answer_en: "Darkness",
  answer_hi: "अंधकार",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Choose synonym",
  question_hi: "'क्रोध' का पर्यायवाची शब्द क्या है?",
  options_en: ["Anger", "Love", "Joy", "Peace"],
  options_hi: ["गुस्सा", "प्रेम", "आनंद", "शांति"],
  answer_en: "Anger",
  answer_hi: "गुस्सा",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "Correct sentence",
  question_hi: "शुद्ध वाक्य चुनिए।",
  options_en: ["He go home", "He goes home", "He going home", "He gone home"],
  options_hi: ["वह घर जाता", "वह घर जाता है", "वह जा रहा घर", "वह गया घर"],
  answer_en: "He goes home",
  answer_hi: "वह घर जाता है",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Choose antonym",
  question_hi: "'मित्र' का विलोम शब्द क्या है?",
  options_en: ["Friend", "Enemy", "Brother", "Relative"],
  options_hi: ["दोस्त", "शत्रु", "भाई", "संबंधी"],
  answer_en: "Enemy",
  answer_hi: "शत्रु",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Choose synonym",
  question_hi: "'धन' का पर्यायवाची शब्द क्या है?",
  options_en: ["Wealth", "Poor", "Need", "Loss"],
  options_hi: ["संपत्ति", "गरीब", "आवश्यकता", "हानि"],
  answer_en: "Wealth",
  answer_hi: "संपत्ति",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "Choose antonym",
  question_hi: "'आरंभ' का विलोम शब्द क्या है?",
  options_en: ["Start", "End", "Open", "Begin"],
  options_hi: ["प्रारंभ", "अंत", "खुला", "शुरू"],
  answer_en: "End",
  answer_hi: "अंत",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "Correct spelling",
  question_hi: "शुद्ध वर्तनी कौन-सी है?",
  options_en: ["Nirdosh", "Nirdoshh", "Nirdos", "Nirdosh"],
  options_hi: ["निर्दोष", "निर्दोश", "निर्दोस", "निर्दोष"],
  answer_en: "Nirdosh",
  answer_hi: "निर्दोष",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Meaning of idiom",
  question_hi: "'नाक में दम करना' का अर्थ क्या है?",
  options_en: ["Trouble", "Help", "Praise", "Ignore"],
  options_hi: ["परेशान करना", "मदद करना", "प्रशंसा", "अनदेखा"],
  answer_en: "Trouble",
  answer_hi: "परेशान करना",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Choose plural",
  question_hi: "'नदी' का बहुवचन क्या है?",
  options_en: ["Nadiyon", "Nadiya", "Nadi", "Nadiyon"],
  options_hi: ["नदियाँ", "नदिया", "नदी", "नदियाँ"],
  answer_en: "Nadiyon",
  answer_hi: "नदियाँ",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "Choose gender",
  question_hi: "'शेर' का स्त्रीलिंग क्या है?",
  options_en: ["Sherni", "Lioness", "Baghini", "Mata"],
  options_hi: ["शेरनी", "लायनेस", "बाघिन", "माता"],
  answer_en: "Sherni",
  answer_hi: "शेरनी",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Choose antonym",
  question_hi: "'उन्नति' का विलोम शब्द क्या है?",
  options_en: ["Progress", "Decline", "Rise", "Grow"],
  options_hi: ["प्रगति", "अवनति", "वृद्धि", "बढ़ना"],
  answer_en: "Decline",
  answer_hi: "अवनति",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Choose synonym",
  question_hi: "'बुद्धि' का पर्यायवाची शब्द क्या है?",
  options_en: ["Intelligence", "Anger", "Fear", "Sad"],
  options_hi: ["अक्ल", "क्रोध", "भय", "दुःख"],
  answer_en: "Intelligence",
  answer_hi: "अक्ल",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "Correct sentence",
  question_hi: "शुद्ध वाक्य कौन-सा है?",
  options_en: ["She cook food", "She cooks food", "She cooking food", "She cooked food now"],
  options_hi: ["वह खाना पकाती", "वह खाना पकाती है", "वह पका रही खाना", "वह अभी पकाया"],
  answer_en: "She cooks food",
  answer_hi: "वह खाना पकाती है",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Choose antonym",
  question_hi: "'स्वर्ग' का विलोम शब्द क्या है?",
  options_en: ["Heaven", "Hell", "Sky", "Cloud"],
  options_hi: ["स्वर्ग", "नरक", "आकाश", "बादल"],
  answer_en: "Hell",
  answer_hi: "नरक",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "Choose synonym",
  question_hi: "'जल' का पर्यायवाची शब्द क्या है?",
  options_en: ["Water", "Fire", "Air", "Earth"],
  options_hi: ["पानी", "आग", "हवा", "धरती"],
  answer_en: "Water",
  answer_hi: "पानी",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Choose antonym",
  question_hi: "'साहस' का विलोम शब्द क्या है?",
  options_en: ["Courage", "Fear", "Strength", "Power"],
  options_hi: ["हिम्मत", "डर", "ताकत", "शक्ति"],
  answer_en: "Fear",
  answer_hi: "डर",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Correct spelling",
  question_hi: "शुद्ध वर्तनी चुनिए।",
  options_en: ["Aashirwad", "Ashirwad", "Ashirwaad", "Aasirwad"],
  options_hi: ["आशीर्वाद", "अशीर्वाद", "आशिर्वाद", "आसिरवाद"],
  answer_en: "Aashirwad",
  answer_hi: "आशीर्वाद",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "Meaning of idiom",
  question_hi: "'हाथ पर हाथ धरे बैठना' का अर्थ क्या है?",
  options_en: ["Idle", "Work", "Run", "Fight"],
  options_hi: ["निष्क्रिय रहना", "काम करना", "दौड़ना", "लड़ना"],
  answer_en: "Idle",
  answer_hi: "निष्क्रिय रहना",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Choose plural",
  question_hi: "'लड़का' का बहुवचन क्या है?",
  options_en: ["Ladke", "Ladkon", "Ladki", "Ladka"],
  options_hi: ["लड़के", "लड़कों", "लड़की", "लड़का"],
  answer_en: "Ladke",
  answer_hi: "लड़के",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Choose gender",
  question_hi: "'गायक' का स्त्रीलिंग क्या है?",
  options_en: ["Gayika", "Singer", "Nartaki", "Kalakar"],
  options_hi: ["गायिका", "सिंगर", "नर्तकी", "कलाकार"],
  answer_en: "Gayika",
  answer_hi: "गायिका",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "Choose antonym",
  question_hi: "'लघु' का विलोम शब्द क्या है?",
  options_en: ["Small", "Large", "Tiny", "Short"],
  options_hi: ["छोटा", "विशाल", "सूक्ष्म", "कम"],
  answer_en: "Large",
  answer_hi: "विशाल",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "Choose synonym",
  question_hi: "'पृथ्वी' का पर्यायवाची शब्द क्या है?",
  options_en: ["Earth", "Sky", "Water", "Fire"],
  options_hi: ["धरती", "आकाश", "जल", "अग्नि"],
  answer_en: "Earth",
  answer_hi: "धरती",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Correct sentence",
  question_hi: "शुद्ध वाक्य चुनिए।",
  options_en: ["They is playing", "They are playing", "They playing", "They played now"],
  options_hi: ["वे खेल रहा", "वे खेल रहे हैं", "वे खेलना", "वे अभी खेले"],
  answer_en: "They are playing",
  answer_hi: "वे खेल रहे हैं",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "Choose antonym",
  question_hi: "'कठिन' का विलोम शब्द क्या है?",
  options_en: ["Hard", "Easy", "Tough", "Strong"],
  options_hi: ["मुश्किल", "सरल", "कठोर", "मजबूत"],
  answer_en: "Easy",
  answer_hi: "सरल",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Choose synonym",
  question_hi: "'तेज' का पर्यायवाची शब्द क्या है?",
  options_en: ["Fast", "Slow", "Late", "Stop"],
  options_hi: ["शीघ्र", "धीमा", "विलंब", "रुकना"],
  answer_en: "Fast",
  answer_hi: "शीघ्र",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "Choose antonym",
  question_hi: "'स्वच्छ' का विलोम शब्द क्या है?",
  options_en: ["Clean", "Dirty", "Pure", "Clear"],
  options_hi: ["साफ", "गंदा", "शुद्ध", "स्पष्ट"],
  answer_en: "Dirty",
  answer_hi: "गंदा",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Correct spelling",
  question_hi: "शुद्ध वर्तनी चुनिए।",
  options_en: ["Aavashyak", "Avashyak", "Awasya", "Awasiyak"],
  options_hi: ["आवश्यक", "अवश्यक", "अवस्य", "आवसियक"],
  answer_en: "Aavashyak",
  answer_hi: "आवश्यक",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "Meaning of idiom",
  question_hi: "'सिर पर चढ़ाना' का अर्थ क्या है?",
  options_en: ["Overlove", "Punish", "Ignore", "Beat"],
  options_hi: ["अधिक लाड़ करना", "दंड देना", "अनदेखा", "पीटना"],
  answer_en: "Overlove",
  answer_hi: "अधिक लाड़ करना",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "Choose plural",
  question_hi: "'किताब' का बहुवचन क्या है?",
  options_en: ["Kitabein", "Kitabon", "Kitabi", "Kitab"],
  options_hi: ["किताबें", "किताबों", "किताबी", "किताब"],
  answer_en: "Kitabein",
  answer_hi: "किताबें",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Choose gender",
  question_hi: "'देव' का स्त्रीलिंग क्या है?",
  options_en: ["Devi", "Devika", "Rani", "Nari"],
  options_hi: ["देवी", "देविका", "रानी", "नारी"],
  answer_en: "Devi",
  answer_hi: "देवी",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Choose antonym",
  question_hi: "'शत्रुता' का विलोम शब्द क्या है?",
  options_en: ["Enmity", "Friendship", "Fight", "Anger"],
  options_hi: ["दुश्मनी", "मित्रता", "लड़ाई", "क्रोध"],
  answer_en: "Friendship",
  answer_hi: "मित्रता",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "Choose synonym",
  question_hi: "'ज्ञान' का पर्यायवाची शब्द क्या है?",
  options_en: ["Knowledge", "Ignorance", "Fear", "Sad"],
  options_hi: ["विद्या", "अज्ञान", "भय", "दुःख"],
  answer_en: "Knowledge",
  answer_hi: "विद्या",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Correct sentence",
  question_hi: "शुद्ध वाक्य चुनिए।",
  options_en: ["I has a pen", "I have a pen", "I having pen", "I had pen now"],
  options_hi: ["मेरे पास कलम है", "मेरे पास एक कलम है", "मैं कलम है", "मैं अभी था"],
  answer_en: "I have a pen",
  answer_hi: "मेरे पास एक कलम है",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "Choose antonym",
  question_hi: "'लाभ' का विलोम शब्द क्या है?",
  options_en: ["Profit", "Loss", "Gain", "Income"],
  options_hi: ["लाभ", "हानि", "फायदा", "आय"],
  answer_en: "Loss",
  answer_hi: "हानि",
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