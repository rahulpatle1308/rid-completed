const questions = [
  {
   num:1,
  question_en: "What is the value of π (pi) correct to two decimal places?",
  question_hi: "π (पाई) का मान दो दशमलव स्थानों तक सही क्या है?",
  options_en: ["3.14", "3.16", "3.12", "3.18"],
  options_hi: ["3.14", "3.16", "3.12", "3.18"],
  answer_en: "3.14",
  answer_hi: "3.14",
  attempted: false,
  selected: ""
},
{
   num:2,
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
   num:3,
  question_en: "What is the area of a triangle with base 10 cm and height 5 cm?",
  question_hi: "10 सेमी आधार और 5 सेमी ऊंचाई वाले त्रिभुज का क्षेत्रफल क्या है?",
  options_en: ["25 sq cm", "30 sq cm", "35 sq cm", "40 sq cm"],
  options_hi: ["25 वर्ग सेमी", "30 वर्ग सेमी", "35 वर्ग सेमी", "40 वर्ग सेमी"],
  answer_en: "25 sq cm",
  answer_hi: "25 वर्ग सेमी",
  attempted: false,
  selected: ""
},
{
   num:4,
  question_en: "What is the value of (a + b)²?",
  question_hi: "(a + b)² का मान क्या है?",
  options_en: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² - b²"],
  options_hi: ["a² + b²", "a² + 2ab + b²", "a² - 2ab + b²", "a² - b²"],
  answer_en: "a² + 2ab + b²",
  answer_hi: "a² + 2ab + b²",
  attempted: false,
  selected: ""
},
{
   num:5,
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
   num:6,
  question_en: "What is the value of 2³?",
  question_hi: "2³ का मान क्या है?",
  options_en: ["4", "6", "8", "10"],
  options_hi: ["4", "6", "8", "10"],
  answer_en: "8",
  answer_hi: "8",
  attempted: false,
  selected: ""
},
{
   num:7,
  question_en: "What is the formula for the circumference of a circle?",
  question_hi: "वृत्त की परिधि का सूत्र क्या है?",
  options_en: ["πr", "2πr", "πr²", "2πd"],
  options_hi: ["πr", "2πr", "πr²", "2πd"],
  answer_en: "2πr",
  answer_hi: "2πr",
  attempted: false,
  selected: ""
},
{
   num:8,
  question_en: "What is the next prime number after 7?",
  question_hi: "7 के बाद अगली अभाज्य संख्या क्या है?",
  options_en: ["9", "10", "11", "13"],
  options_hi: ["9", "10", "11", "13"],
  answer_en: "11",
  answer_hi: "11",
  attempted: false,
  selected: ""
},
{
   num:9,
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
   num:20,
  question_en: "What is the formula for the area of a rectangle?",
  question_hi: "आयत के क्षेत्रफल का सूत्र क्या है?",
  options_en: ["l × b", "l + b", "2(l + b)", "l² + b²"],
  options_hi: ["लंबाई × चौड़ाई", "लंबाई + चौड़ाई", "2(लंबाई + चौड़ाई)", "लंबाई² + चौड़ाई²"],
  answer_en: "l × b",
  answer_hi: "लंबाई × चौड़ाई",
  attempted: false,
  selected: ""
},
{
   num:21,
  question_en: "What is the value of 5! (5 factorial)?",
  question_hi: "5! (5 फैक्टोरियल) का मान क्या है?",
  options_en: ["60", "100", "120", "150"],
  options_hi: ["60", "100", "120", "150"],
  answer_en: "120",
  answer_hi: "120",
  attempted: false,
  selected: ""
},
{
   num:22,
  question_en: "What is the sum of the first 10 natural numbers?",
  question_hi: "पहली 10 प्राकृतिक संख्याओं का योग क्या है?",
  options_en: ["45", "50", "55", "60"],
  options_hi: ["45", "50", "55", "60"],
  answer_en: "55",
  answer_hi: "55",
  attempted: false,
  selected: ""
},
{
   num:23,
  question_en: "What is the value of log₁₀ 100?",
  question_hi: "log₁₀ 100 का मान क्या है?",
  options_en: ["1", "2", "10", "100"],
  options_hi: ["1", "2", "10", "100"],
  answer_en: "2",
  answer_hi: "2",
  attempted: false,
  selected: ""
},
{
   num:24,
  question_en: "What is the formula for the volume of a cylinder?",
  question_hi: "बेलन के आयतन का सूत्र क्या है?",
  options_en: ["πr²h", "2πrh", "πr²h/3", "4/3 πr³"],
  options_hi: ["πr²h", "2πrh", "πr²h/3", "4/3 πr³"],
  answer_en: "πr²h",
  answer_hi: "πr²h",
  attempted: false,
  selected: ""
},
{
   num:25,
  question_en: "What is the value of tan 45°?",
  question_hi: "tan 45° का मान क्या है?",
  options_en: ["0", "1", "√3", "1/√3"],
  options_hi: ["0", "1", "√3", "1/√3"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
   num:26,
  question_en: "What is the HCF (Highest Common Factor) of 12 and 18?",
  question_hi: "12 और 18 का महत्तम समापवर्तक (HCF) क्या है?",
  options_en: ["2", "3", "6", "12"],
  options_hi: ["2", "3", "6", "12"],
  answer_en: "6",
  answer_hi: "6",
  attempted: false,
  selected: ""
},
{
   num:27,
  question_en: "What is the formula for simple interest?",
  question_hi: "साधारण ब्याज का सूत्र क्या है?",
  options_en: ["PRT/100", "P(1 + R/100)ᵀ", "P + (PRT)", "P/(1 + RT)"],
  options_hi: ["मूलधन × दर × समय / 100", "मूलधन (1 + दर/100)ᵀ", "मूलधन + (मूलधन × दर × समय)", "मूलधन/(1 + दर × समय)"],
  answer_en: "PRT/100",
  answer_hi: "मूलधन × दर × समय / 100",
  attempted: false,
  selected: ""
},
{
   num:28,
  question_en: "What is the value of cos 0°?",
  question_hi: "cos 0° का मान क्या है?",
  options_en: ["0", "0.5", "1", "√3/2"],
  options_hi: ["0", "0.5", "1", "√3/2"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
   num:29,
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
   num:30,
  question_en: "What is the value of (a - b)²?",
  question_hi: "(a - b)² का मान क्या है?",
  options_en: ["a² + b²", "a² - 2ab + b²", "a² - b²", "a² + 2ab + b²"],
  options_hi: ["a² + b²", "a² - 2ab + b²", "a² - b²", "a² + 2ab + b²"],
  answer_en: "a² - 2ab + b²",
  answer_hi: "a² - 2ab + b²",
  attempted: false,
  selected: ""
},
{
   num:31,
  question_en: "What is the sum of angles in a quadrilateral?",
  question_hi: "चतुर्भुज में कोणों का योग कितना होता है?",
  options_en: ["180°", "270°", "360°", "450°"],
  options_hi: ["180°", "270°", "360°", "450°"],
  answer_en: "360°",
  answer_hi: "360°",
  attempted: false,
  selected: ""
},
{
   num:32,
  question_en: "What is the value of √2 correct to two decimal places?",
  question_hi: "√2 का मान दो दशमलव स्थानों तक सही क्या है?",
  options_en: ["1.41", "1.42", "1.44", "1.45"],
  options_hi: ["1.41", "1.42", "1.44", "1.45"],
  answer_en: "1.41",
  answer_hi: "1.41",
  attempted: false,
  selected: ""
},
{
   num:33,
  question_en: "What is the formula for the area of a circle?",
  question_hi: "वृत्त के क्षेत्रफल का सूत्र क्या है?",
  options_en: ["πr", "2πr", "πr²", "πd"],
  options_hi: ["πr", "2πr", "πr²", "πd"],
  answer_en: "πr²",
  answer_hi: "πr²",
  attempted: false,
  selected: ""
},
{
   num:34,
  question_en: "What is the value of 0! (0 factorial)?",
  question_hi: "0! (0 फैक्टोरियल) का मान क्या है?",
  options_en: ["0", "1", "Not defined", "10"],
  options_hi: ["0", "1", "परिभाषित नहीं", "10"],
  answer_en: "1",
  answer_hi: "1",
  attempted: false,
  selected: ""
},
{
   num:35,
  question_en: "What is the LCM (Least Common Multiple) of 4 and 6?",
  question_hi: "4 और 6 का लघुत्तम समापवर्त्य (LCM) क्या है?",
  options_en: ["6", "12", "18", "24"],
  options_hi: ["6", "12", "18", "24"],
  answer_en: "12",
  answer_hi: "12",
  attempted: false,
  selected: ""
},
{
   num:36,
  question_en: "What is the formula for the area of a trapezium?",
  question_hi: "समलम्ब चतुर्भुज के क्षेत्रफल का सूत्र क्या है?",
  options_en: ["½ × (sum of parallel sides) × height", "base × height", "½ × base × height", "side²"],
  options_hi: ["½ × (समानांतर भुजाओं का योग) × ऊंचाई", "आधार × ऊंचाई", "½ × आधार × ऊंचाई", "भुजा²"],
  answer_en: "½ × (sum of parallel sides) × height",
  answer_hi: "½ × (समानांतर भुजाओं का योग) × ऊंचाई",
  attempted: false,
  selected: ""
},
{
   num:37,
  question_en: "What is the value of sin 30°?",
  question_hi: "sin 30° का मान क्या है?",
  options_en: ["0", "0.5", "1", "√3/2"],
  options_hi: ["0", "0.5", "1", "√3/2"],
  answer_en: "0.5",
  answer_hi: "0.5",
  attempted: false,
  selected: ""
},
{
   num:38,
  question_en: "What is the value of 3² + 4²?",
  question_hi: "3² + 4² का मान क्या है?",
  options_en: ["5", "7", "25", "49"],
  options_hi: ["5", "7", "25", "49"],
  answer_en: "25",
  answer_hi: "25",
  attempted: false,
  selected: ""
},
{
   num:39,
  question_en: "What is the formula for the volume of a cone?",
  question_hi: "शंकु के आयतन का सूत्र क्या है?",
  options_en: ["πr²h", "⅓ πr²h", "πrl", "2πr²"],
  options_hi: ["πr²h", "⅓ πr²h", "πrl", "2πr²"],
  answer_en: "⅓ πr²h",
  answer_hi: "⅓ πr²h",
  attempted: false,
  selected: ""
},
{
   num:40,
  question_en: "What is the value of cos 60°?",
  question_hi: "cos 60° का मान क्या है?",
  options_en: ["0", "0.5", "1", "√3/2"],
  options_hi: ["0", "0.5", "1", "√3/2"],
  answer_en: "0.5",
  answer_hi: "0.5",
  attempted: false,
  selected: ""
},
{
   num:41,
  question_en: "What is the sum of the interior angles of a pentagon?",
  question_hi: "पंचभुज (पेंटागन) के आंतरिक कोणों का योग कितना होता है?",
  options_en: ["360°", "540°", "720°", "900°"],
  options_hi: ["360°", "540°", "720°", "900°"],
  answer_en: "540°",
  answer_hi: "540°",
  attempted: false,
  selected: ""
},
{
   num:42,
  question_en: "What is the value of 10² - 5²?",
  question_hi: "10² - 5² का मान क्या है?",
  options_en: ["25", "50", "75", "100"],
  options_hi: ["25", "50", "75", "100"],
  answer_en: "75",
  answer_hi: "75",
  attempted: false,
  selected: ""
},
{
   num:43,
  question_en: "What is the formula for the perimeter of a rectangle?",
  question_hi: "आयत के परिमाप का सूत्र क्या है?",
  options_en: ["l + b", "2(l + b)", "l × b", "l² + b²"],
  options_hi: ["लंबाई + चौड़ाई", "2(लंबाई + चौड़ाई)", "लंबाई × चौड़ाई", "लंबाई² + चौड़ाई²"],
  answer_en: "2(l + b)",
  answer_hi: "2(लंबाई + चौड़ाई)",
  attempted: false,
  selected: ""
},
{
   num:44,
  question_en: "What is the value of tan 90°?",
  question_hi: "tan 90° का मान क्या है?",
  options_en: ["0", "1", "Not defined", "Infinity"],
  options_hi: ["0", "1", "परिभाषित नहीं", "अनंत"],
  answer_en: "Not defined",
  answer_hi: "परिभाषित नहीं",
  attempted: false,
  selected: ""
},
{
   num:45,
  question_en: "What is the square of 15?",
  question_hi: "15 का वर्ग क्या है?",
  options_en: ["150", "225", "250", "275"],
  options_hi: ["150", "225", "250", "275"],
  answer_en: "225",
  answer_hi: "225",
  attempted: false,
  selected: ""
},
{
   num:46,
  question_en: "What is the formula for compound interest?",
  question_hi: "चक्रवृद्धि ब्याज का सूत्र क्या है?",
  options_en: ["P(1 + R/100)ᵀ", "PRT/100", "P + (PRT)", "P/(1 + R)ᵀ"],
  options_hi: ["P(1 + R/100)ᵀ", "PRT/100", "P + (PRT)", "P/(1 + R)ᵀ"],
  answer_en: "P(1 + R/100)ᵀ",
  answer_hi: "P(1 + R/100)ᵀ",
  attempted: false,
  selected: ""
},
{
   num:47,
  question_en: "What is the value of sin 0°?",
  question_hi: "sin 0° का मान क्या है?",
  options_en: ["0", "0.5", "1", "√3/2"],
  options_hi: ["0", "0.5", "1", "√3/2"],
  answer_en: "0",
  answer_hi: "0",
  attempted: false,
  selected: ""
},
{
   num:48,
  question_en: "What is the area of a square with side 7 cm?",
  question_hi: "7 सेमी भुजा वाले वर्ग का क्षेत्रफल क्या है?",
  options_en: ["28 sq cm", "49 sq cm", "56 sq cm", "64 sq cm"],
  options_hi: ["28 वर्ग सेमी", "49 वर्ग सेमी", "56 वर्ग सेमी", "64 वर्ग सेमी"],
  answer_en: "49 sq cm",
  answer_hi: "49 वर्ग सेमी",
  attempted: false,
  selected: ""
},
{
   num:49,
  question_en: "What is the value of (a + b)(a - b)?",
  question_hi: "(a + b)(a - b) का मान क्या है?",
  options_en: ["a² + b²", "a² - b²", "a² + 2ab + b²", "a² - 2ab + b²"],
  options_hi: ["a² + b²", "a² - b²", "a² + 2ab + b²", "a² - 2ab + b²"],
  answer_en: "a² - b²",
  answer_hi: "a² - b²",
  attempted: false,
  selected: ""
},
{
   num:50,
  question_en: "What is the value of √169?",
  question_hi: "√169 का मान क्या है?",
  options_en: ["11", "12", "13", "14"],
  options_hi: ["11", "12", "13", "14"],
  answer_en: "13",
  answer_hi: "13",
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