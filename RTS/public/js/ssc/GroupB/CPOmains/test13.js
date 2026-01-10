const questions = [
  {
  num: 1,
  question_en: "What is 15 + 25?",
  question_hi: "15 + 25 कितना होता है?",
  options_en: ["40", "35", "45", "50"],
  options_hi: ["40", "35", "45", "50"],
  answer_en: "40",
  answer_hi: "40",
  attempted: false,
  selected: ""
},
{
  num: 2,
  question_en: "What is the chemical symbol of water?",
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
  question_en: "Who is the Prime Minister of India?",
  question_hi: "भारत के प्रधानमंत्री कौन हैं?",
  options_en: ["Narendra Modi", "Rahul Gandhi", "Amit Shah", "Yogi Adityanath"],
  options_hi: ["नरेंद्र मोदी", "राहुल गांधी", "अमित शाह", "योगी आदित्यनाथ"],
  answer_en: "Narendra Modi",
  answer_hi: "नरेंद्र मोदी",
  attempted: false,
  selected: ""
},
{
  num: 4,
  question_en: "What is the square of 12?",
  question_hi: "12 का वर्ग कितना है?",
  options_en: ["144", "124", "132", "156"],
  options_hi: ["144", "124", "132", "156"],
  answer_en: "144",
  answer_hi: "144",
  attempted: false,
  selected: ""
},
{
  num: 5,
  question_en: "Which is the largest planet?",
  question_hi: "सबसे बड़ा ग्रह कौन सा है?",
  options_en: ["Jupiter", "Earth", "Mars", "Saturn"],
  options_hi: ["बृहस्पति", "पृथ्वी", "मंगल", "शनि"],
  answer_en: "Jupiter",
  answer_hi: "बृहस्पति",
  attempted: false,
  selected: ""
},
{
  num: 6,
  question_en: "What is 48 ÷ 6?",
  question_hi: "48 ÷ 6 कितना होता है?",
  options_en: ["8", "6", "7", "9"],
  options_hi: ["8", "6", "7", "9"],
  answer_en: "8",
  answer_hi: "8",
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
  question_en: "What is the cube of 4?",
  question_hi: "4 का घन कितना है?",
  options_en: ["64", "16", "32", "48"],
  options_hi: ["64", "16", "32", "48"],
  answer_en: "64",
  answer_hi: "64",
  attempted: false,
  selected: ""
},
{
  num: 9,
  question_en: "Who wrote the Indian National Anthem?",
  question_hi: "भारत का राष्ट्रगान किसने लिखा?",
  options_en: ["Rabindranath Tagore", "Bankim Chandra", "Subhash Bose", "Gandhi"],
  options_hi: ["रवींद्रनाथ टैगोर", "बंकिम चंद्र", "सुभाष बोस", "गांधी"],
  answer_en: "Rabindranath Tagore",
  answer_hi: "रवींद्रनाथ टैगोर",
  attempted: false,
  selected: ""
},
{
  num: 10,
  question_en: "Which gas is used for breathing?",
  question_hi: "सांस लेने के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Oxygen", "Nitrogen", "Carbon Dioxide", "Hydrogen"],
  options_hi: ["ऑक्सीजन", "नाइट्रोजन", "कार्बन डाइऑक्साइड", "हाइड्रोजन"],
  answer_en: "Oxygen",
  answer_hi: "ऑक्सीजन",
  attempted: false,
  selected: ""
},
{
  num: 11,
  question_en: "What is 17 × 3?",
  question_hi: "17 × 3 कितना होता है?",
  options_en: ["51", "47", "54", "49"],
  options_hi: ["51", "47", "54", "49"],
  answer_en: "51",
  answer_hi: "51",
  attempted: false,
  selected: ""
},
{
  num: 12,
  question_en: "Which state is known as the Spice Garden of India?",
  question_hi: "भारत का मसाला बागान किस राज्य को कहा जाता है?",
  options_en: ["Kerala", "Assam", "Tamil Nadu", "Karnataka"],
  options_hi: ["केरल", "असम", "तमिलनाडु", "कर्नाटक"],
  answer_en: "Kerala",
  answer_hi: "केरल",
  attempted: false,
  selected: ""
},
{
  num: 13,
  question_en: "What is the SI unit of mass?",
  question_hi: "द्रव्यमान की SI इकाई क्या है?",
  options_en: ["Kilogram", "Gram", "Tonne", "Quintal"],
  options_hi: ["किलोग्राम", "ग्राम", "टन", "क्विंटल"],
  answer_en: "Kilogram",
  answer_hi: "किलोग्राम",
  attempted: false,
  selected: ""
},
{
  num: 14,
  question_en: "Who invented the electric bulb?",
  question_hi: "विद्युत बल्ब का आविष्कार किसने किया?",
  options_en: ["Thomas Edison", "Newton", "Tesla", "Einstein"],
  options_hi: ["थॉमस एडिसन", "न्यूटन", "टेस्ला", "आइंस्टीन"],
  answer_en: "Thomas Edison",
  answer_hi: "थॉमस एडिसन",
  attempted: false,
  selected: ""
},
{
  num: 15,
  question_en: "What is 60% of 150?",
  question_hi: "150 का 60% कितना है?",
  options_en: ["90", "80", "100", "85"],
  options_hi: ["90", "80", "100", "85"],
  answer_en: "90",
  answer_hi: "90",
  attempted: false,
  selected: ""
},
{
  num: 16,
  question_en: "Which organ helps in breathing?",
  question_hi: "श्वसन में कौन सा अंग सहायक है?",
  options_en: ["Lungs", "Heart", "Kidney", "Liver"],
  options_hi: ["फेफड़े", "हृदय", "गुर्दा", "यकृत"],
  answer_en: "Lungs",
  answer_hi: "फेफड़े",
  attempted: false,
  selected: ""
},
{
  num: 17,
  question_en: "What is the capital of Gujarat?",
  question_hi: "गुजरात की राजधानी क्या है?",
  options_en: ["Gandhinagar", "Ahmedabad", "Surat", "Vadodara"],
  options_hi: ["गांधीनगर", "अहमदाबाद", "सूरत", "वडोदरा"],
  answer_en: "Gandhinagar",
  answer_hi: "गांधीनगर",
  attempted: false,
  selected: ""
},
{
  num: 18,
  question_en: "Which vitamin is essential for eyesight?",
  question_hi: "आँखों के लिए कौन सा विटामिन आवश्यक है?",
  options_en: ["Vitamin A", "Vitamin B", "Vitamin C", "Vitamin D"],
  options_hi: ["विटामिन A", "विटामिन B", "विटामिन C", "विटामिन D"],
  answer_en: "Vitamin A",
  answer_hi: "विटामिन A",
  attempted: false,
  selected: ""
},
{
  num: 19,
  question_en: "What is 100 ÷ 4?",
  question_hi: "100 ÷ 4 कितना होता है?",
  options_en: ["25", "20", "30", "40"],
  options_hi: ["25", "20", "30", "40"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},
{
  num: 20,
  question_en: "Who was the first Governor-General of India?",
  question_hi: "भारत के पहले गवर्नर जनरल कौन थे?",
  options_en: ["Warren Hastings", "Lord Mountbatten", "Dalhousie", "Bentinck"],
  options_hi: ["वॉरेन हेस्टिंग्स", "लॉर्ड माउंटबेटन", "डलहौजी", "बेंटिंक"],
  answer_en: "Warren Hastings",
  answer_hi: "वॉरेन हेस्टिंग्स",
  attempted: false,
  selected: ""
},
{
  num: 21,
  question_en: "Which metal is liquid at room temperature?",
  question_hi: "कमरे के तापमान पर तरल धातु कौन सी है?",
  options_en: ["Mercury", "Iron", "Aluminium", "Copper"],
  options_hi: ["पारा", "लोहा", "एल्युमिनियम", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 22,
  question_en: "What is the national tree of India?",
  question_hi: "भारत का राष्ट्रीय वृक्ष कौन सा है?",
  options_en: ["Banyan", "Neem", "Peepal", "Mango"],
  options_hi: ["बरगद", "नीम", "पीपल", "आम"],
  answer_en: "Banyan",
  answer_hi: "बरगद",
  attempted: false,
  selected: ""
},
{
  num: 23,
  question_en: "What is 9 × 7?",
  question_hi: "9 × 7 कितना होता है?",
  options_en: ["63", "56", "72", "49"],
  options_hi: ["63", "56", "72", "49"],
  answer_en: "63",
  answer_hi: "63",
  attempted: false,
  selected: ""
},
{
  num: 24,
  question_en: "Which continent has the largest population?",
  question_hi: "सबसे अधिक जनसंख्या वाला महाद्वीप कौन सा है?",
  options_en: ["Asia", "Africa", "Europe", "Australia"],
  options_hi: ["एशिया", "अफ्रीका", "यूरोप", "ऑस्ट्रेलिया"],
  answer_en: "Asia",
  answer_hi: "एशिया",
  attempted: false,
  selected: ""
},
{
  num: 25,
  question_en: "Which part of computer is called the brain?",
  question_hi: "कंप्यूटर का मस्तिष्क किसे कहा जाता है?",
  options_en: ["CPU", "Monitor", "Keyboard", "Mouse"],
  options_hi: ["CPU", "मॉनिटर", "कीबोर्ड", "माउस"],
  answer_en: "CPU",
  answer_hi: "CPU",
  attempted: false,
  selected: ""
},
{
  num: 26,
  question_en: "What is 75% of 80?",
  question_hi: "80 का 75% कितना है?",
  options_en: ["60", "50", "70", "65"],
  options_hi: ["60", "50", "70", "65"],
  answer_en: "60",
  answer_hi: "60",
  attempted: false,
  selected: ""
},
{
  num: 27,
  question_en: "Which gas is essential for photosynthesis?",
  question_hi: "प्रकाश संश्लेषण के लिए कौन सी गैस आवश्यक है?",
  options_en: ["Carbon Dioxide", "Oxygen", "Nitrogen", "Hydrogen"],
  options_hi: ["कार्बन डाइऑक्साइड", "ऑक्सीजन", "नाइट्रोजन", "हाइड्रोजन"],
  answer_en: "Carbon Dioxide",
  answer_hi: "कार्बन डाइऑक्साइड",
  attempted: false,
  selected: ""
},
{
  num: 28,
  question_en: "Who was the first Indian woman IPS officer?",
  question_hi: "भारत की पहली महिला IPS अधिकारी कौन थीं?",
  options_en: ["Kiran Bedi", "Indira Gandhi", "Kalpana Chawla", "Bachendri Pal"],
  options_hi: ["किरण बेदी", "इंदिरा गांधी", "कल्पना चावला", "बछेंद्री पाल"],
  answer_en: "Kiran Bedi",
  answer_hi: "किरण बेदी",
  attempted: false,
  selected: ""
},
{
  num: 29,
  question_en: "What is the boiling point of water?",
  question_hi: "पानी का क्वथनांक क्या है?",
  options_en: ["100°C", "90°C", "80°C", "120°C"],
  options_hi: ["100°C", "90°C", "80°C", "120°C"],
  answer_en: "100°C",
  answer_hi: "100°C",
  attempted: false,
  selected: ""
},
{
  num: 30,
  question_en: "Which planet is known as the Earth's twin?",
  question_hi: "पृथ्वी का जुड़वां ग्रह कौन सा है?",
  options_en: ["Venus", "Mars", "Jupiter", "Mercury"],
  options_hi: ["शुक्र", "मंगल", "बृहस्पति", "बुध"],
  answer_en: "Venus",
  answer_hi: "शुक्र",
  attempted: false,
  selected: ""
},
{
  num: 31,
  question_en: "What is 5² + 3²?",
  question_hi: "5² + 3² कितना है?",
  options_en: ["34", "28", "30", "40"],
  options_hi: ["34", "28", "30", "40"],
  answer_en: "34",
  answer_hi: "34",
  attempted: false,
  selected: ""
},
{
  num: 32,
  question_en: "Which Indian city is called the Silicon Valley of India?",
  question_hi: "भारत की सिलिकॉन वैली किस शहर को कहा जाता है?",
  options_en: ["Bengaluru", "Hyderabad", "Pune", "Chennai"],
  options_hi: ["बेंगलुरु", "हैदराबाद", "पुणे", "चेन्नई"],
  answer_en: "Bengaluru",
  answer_hi: "बेंगलुरु",
  attempted: false,
  selected: ""
},
{
  num: 33,
  question_en: "Which blood cells help in clotting?",
  question_hi: "रक्त का थक्का जमाने में कौन सी कोशिकाएं सहायक हैं?",
  options_en: ["Platelets", "RBC", "WBC", "Plasma"],
  options_hi: ["प्लेटलेट्स", "RBC", "WBC", "प्लाज्मा"],
  answer_en: "Platelets",
  answer_hi: "प्लेटलेट्स",
  attempted: false,
  selected: ""
},
{
  num: 34,
  question_en: "What is 144 ÷ 12?",
  question_hi: "144 ÷ 12 कितना होता है?",
  options_en: ["12", "10", "14", "16"],
  options_hi: ["12", "10", "14", "16"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
  num: 35,
  question_en: "Who wrote Ramcharitmanas?",
  question_hi: "रामचरितमानस किसने लिखी?",
  options_en: ["Tulsidas", "Valmiki", "Ved Vyasa", "Kabir"],
  options_hi: ["तुलसीदास", "वाल्मीकि", "वेदव्यास", "कबीर"],
  answer_en: "Tulsidas",
  answer_hi: "तुलसीदास",
  attempted: false,
  selected: ""
},
{
  num: 36,
  question_en: "Which instrument measures earthquakes?",
  question_hi: "भूकंप मापने का यंत्र कौन सा है?",
  options_en: ["Seismograph", "Barometer", "Thermometer", "Anemometer"],
  options_hi: ["सीस्मोग्राफ", "बैरोमीटर", "थर्मामीटर", "एनीमोमीटर"],
  answer_en: "Seismograph",
  answer_hi: "सीस्मोग्राफ",
  attempted: false,
  selected: ""
},
{
  num: 37,
  question_en: "What is the capital of Himachal Pradesh?",
  question_hi: "हिमाचल प्रदेश की राजधानी क्या है?",
  options_en: ["Shimla", "Manali", "Kullu", "Dharamshala"],
  options_hi: ["शिमला", "मनाली", "कुल्लू", "धर्मशाला"],
  answer_en: "Shimla",
  answer_hi: "शिमला",
  attempted: false,
  selected: ""
},
{
  num: 38,
  question_en: "What is 18 × 4?",
  question_hi: "18 × 4 कितना होता है?",
  options_en: ["72", "64", "68", "76"],
  options_hi: ["72", "64", "68", "76"],
  answer_en: "72",
  answer_hi: "72",
  attempted: false,
  selected: ""
},
{
  num: 39,
  question_en: "Which animal is called the King of the Jungle?",
  question_hi: "जंगल का राजा किसे कहा जाता है?",
  options_en: ["Lion", "Tiger", "Elephant", "Leopard"],
  options_hi: ["शेर", "बाघ", "हाथी", "तेंदुआ"],
  answer_en: "Lion",
  answer_hi: "शेर",
  attempted: false,
  selected: ""
},
{
  num: 40,
  question_en: "What is the chemical formula of common salt?",
  question_hi: "साधारण नमक का रासायनिक सूत्र क्या है?",
  options_en: ["NaCl", "KCl", "HCl", "Na2CO3"],
  options_hi: ["NaCl", "KCl", "HCl", "Na2CO3"],
  answer_en: "NaCl",
  answer_hi: "NaCl",
  attempted: false,
  selected: ""
},
{
  num: 41,
  question_en: "Who is known as the Flying Sikh?",
  question_hi: "फ्लाइंग सिख किसे कहा जाता है?",
  options_en: ["Milkha Singh", "Neeraj Chopra", "Kapil Dev", "PT Usha"],
  options_hi: ["मिल्खा सिंह", "नीरज चोपड़ा", "कपिल देव", "पीटी उषा"],
  answer_en: "Milkha Singh",
  answer_hi: "मिल्खा सिंह",
  attempted: false,
  selected: ""
},
{
  num: 42,
  question_en: "What is 10% of 500?",
  question_hi: "500 का 10% कितना है?",
  options_en: ["50", "25", "40", "60"],
  options_hi: ["50", "25", "40", "60"],
  answer_en: "50",
  answer_hi: "50",
  attempted: false,
  selected: ""
},
{
  num: 43,
  question_en: "Which organ purifies blood?",
  question_hi: "रक्त को शुद्ध करने वाला अंग कौन सा है?",
  options_en: ["Kidney", "Heart", "Liver", "Lungs"],
  options_hi: ["गुर्दा", "हृदय", "यकृत", "फेफड़े"],
  answer_en: "Kidney",
  answer_hi: "गुर्दा",
  attempted: false,
  selected: ""
},
{
  num: 44,
  question_en: "What is the capital of Rajasthan?",
  question_hi: "राजस्थान की राजधानी क्या है?",
  options_en: ["Jaipur", "Udaipur", "Jodhpur", "Ajmer"],
  options_hi: ["जयपुर", "उदयपुर", "जोधपुर", "अजमेर"],
  answer_en: "Jaipur",
  answer_hi: "जयपुर",
  attempted: false,
  selected: ""
},
{
  num: 45,
  question_en: "What is 9 × 8?",
  question_hi: "9 × 8 कितना होता है?",
  options_en: ["72", "64", "81", "69"],
  options_hi: ["72", "64", "81", "69"],
  answer_en: "72",
  answer_hi: "72",
  attempted: false,
  selected: ""
},
{
  num: 46,
  question_en: "Which vitamin is obtained from sunlight?",
  question_hi: "सूर्य के प्रकाश से कौन सा विटामिन मिलता है?",
  options_en: ["Vitamin D", "Vitamin A", "Vitamin C", "Vitamin B"],
  options_hi: ["विटामिन D", "विटामिन A", "विटामिन C", "विटामिन B"],
  answer_en: "Vitamin D",
  answer_hi: "विटामिन D",
  attempted: false,
  selected: ""
},
{
  num: 47,
  question_en: "Which metal is liquid?",
  question_hi: "कौन सी धातु तरल होती है?",
  options_en: ["Mercury", "Iron", "Gold", "Copper"],
  options_hi: ["पारा", "लोहा", "सोना", "तांबा"],
  answer_en: "Mercury",
  answer_hi: "पारा",
  attempted: false,
  selected: ""
},
{
  num: 48,
  question_en: "What is the SI unit of force?",
  question_hi: "बल की SI इकाई क्या है?",
  options_en: ["Newton", "Joule", "Watt", "Pascal"],
  options_hi: ["न्यूटन", "जूल", "वाट", "पास्कल"],
  answer_en: "Newton",
  answer_hi: "न्यूटन",
  attempted: false,
  selected: ""
},
{
  num: 49,
  question_en: "Which animal is the national animal of India?",
  question_hi: "भारत का राष्ट्रीय पशु कौन है?",
  options_en: ["Tiger", "Lion", "Elephant", "Leopard"],
  options_hi: ["बाघ", "शेर", "हाथी", "तेंदुआ"],
  answer_en: "Tiger",
  answer_hi: "बाघ",
  attempted: false,
  selected: ""
},
{
  num: 50,
  question_en: "What is 100 − 45?",
  question_hi: "100 − 45 कितना होता है?",
  options_en: ["55", "45", "65", "50"],
  options_hi: ["55", "45", "65", "50"],
  answer_en: "55",
  answer_hi: "55",
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