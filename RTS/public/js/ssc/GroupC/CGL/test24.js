const questions = [
     {
      "num": 1,
      "question_en": "Who is known as the 'Father of the Indian Constitution'?",
      "question_hi": "'भारतीय संविधान के जनक' किसे कहा जाता है?",
      "options_en": ["Dr. B.R. Ambedkar"],
      "options_hi": ["डॉ. बी.आर. अंबेडकर"],
      "answer_en": "Dr. B.R. Ambedkar",
      "answer_hi": "डॉ. बी.आर. अंबेडकर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 2,
      "question_en": "Which river is known as the 'Sorrow of Bihar'?",
      "question_hi": "'बिहार का शोक' किस नदी को कहा जाता है?",
      "options_en": ["Kosi", "Ganga"],
      "options_hi": ["कोसी", "गंगा"],
      "answer_en": "Kosi",
      "answer_hi": "कोसी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 3,
      "question_en": "Where is the headquarters of ISRO located?",
      "question_hi": "इसरो का मुख्यालय कहाँ स्थित है?",
      "options_en": ["Bengaluru", "Chennai", "Mumbai"],
      "options_hi": ["बेंगलुरु", "चेन्नई", "मुंबई"],
      "answer_en": "Bengaluru",
      "answer_hi": "बेंगलुरु",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 4,
      "question_en": "Which state is known as the 'Land of Five Rivers'?",
      "question_hi": "'पाँच नदियों की भूमि' किस राज्य को कहा जाता है?",
      "options_en": ["Punjab", "Haryana", "Uttar Pradesh", "Rajasthan"],
      "options_hi": ["पंजाब", "हरियाणा", "उत्तर प्रदेश", "राजस्थान"],
      "answer_en": "Punjab",
      "answer_hi": "पंजाब",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 5,
      "question_en": "Who wrote the national anthem of India?",
      "question_hi": "भारत का राष्ट्रगान किसने लिखा?",
      "options_en": ["Rabindranath Tagore"],
      "options_hi": ["रवींद्रनाथ टैगोर"],
      "answer_en": "Rabindranath Tagore",
      "answer_hi": "रवींद्रनाथ टैगोर",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 6,
      "question_en": "Which is the longest river in India?",
      "question_hi": "भारत की सबसे लंबी नदी कौन सी है?",
      "options_en": ["Ganga", "Yamuna", "Godavari", "Brahmaputra"],
      "options_hi": ["गंगा", "यमुना", "गोदावरी", "ब्रह्मपुत्र"],
      "answer_en": "Ganga",
      "answer_hi": "गंगा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 7,
      "question_en": "Who was the first woman Prime Minister of India?",
      "question_hi": "भारत की पहली महिला प्रधानमंत्री कौन थीं?",
      "options_en": ["Indira Gandhi", "Sarojini Naidu", "Pratibha Patil"],
      "options_hi": ["इंदिरा गांधी", "सरोजिनी नायडू", "प्रतिभा पाटिल"],
      "answer_en": "Indira Gandhi",
      "answer_hi": "इंदिरा गांधी",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 8,
      "question_en": "Which is the smallest state in India by area?",
      "question_hi": "क्षेत्रफल के हिसाब से भारत का सबसे छोटा राज्य कौन सा है?",
      "options_en": ["Goa", "Sikkim", "Tripura"],
      "options_hi": ["गोवा", "सिक्किम", "त्रिपुरा"],
      "answer_en": "Goa",
      "answer_hi": "गोवा",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 9,
      "question_en": "Who is known as the 'Missile Man of India'?",
      "question_hi": "'भारत के मिसाइल मैन' के रूप में किसे जाना जाता है?",
      "options_en": ["Dr. A.P.J. Abdul Kalam"],
      "options_hi": ["डॉ. ए.पी.जे. अब्दुल कलाम"],
      "answer_en": "Dr. A.P.J. Abdul Kalam",
      "answer_hi": "डॉ. ए.पी.जे. अब्दुल कलाम",
      "attempted": false,
      "selected": ""
    },
    {
      "num": 10,
      "question_en": "Which city is known as the 'Pink City' of India?",
      "question_hi": "भारत के 'गुलाबी शहर' के रूप में किस शहर को जाना जाता है?",
      "options_en": ["Jaipur", "Udaipur", "Jodhpur", "Bikaner"],
      "options_hi": ["जयपुर", "उदयपुर", "जोधपुर", "बीकानेर"],
      "answer_en": "Jaipur",
      "answer_hi": "जयपुर",
      "attempted": false,
      "selected": ""
    },
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