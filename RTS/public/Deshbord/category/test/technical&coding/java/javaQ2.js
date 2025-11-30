const questions = [
  { num: 1, question: "Which data type is used to store true/false values?", options: ["int", "boolean", "char", "float"], answer: "boolean", attempted: false, selected: "" },

  { num: 2, question: "Which of the following is used to declare a variable in Java?", options: ["var", "dim", "let", "int"], answer: "int", attempted: false, selected: "" },

  { num: 3, question: "Which loop executes at least once?", options: ["for", "while", "do-while", "foreach"], answer: "do-while", attempted: false, selected: "" },

  { num: 4, question: "Which symbol is used for single-line comments?", options: ["//", "/* */", "#", "--"], answer: "//", attempted: false, selected: "" },

  { num: 5, question: "What is the default value of a boolean variable?", options: ["true", "false", "0", "null"], answer: "false", attempted: false, selected: "" },

  { num: 6, question: "Which operator is used for logical AND?", options: ["&", "&&", "||", "|"], answer: "&&", attempted: false, selected: "" },

  { num: 7, question: "Which operator is used to check inequality?", options: ["!=", "==", "=", "<>"], answer: "!=", attempted: false, selected: "" },

  { num: 8, question: "Which of these is a floating-point type?", options: ["int", "double", "char", "boolean"], answer: "double", attempted: false, selected: "" },

  { num: 9, question: "Which statement is used to exit a loop?", options: ["exit", "break", "continue", "stop"], answer: "break", attempted: false, selected: "" },

  { num: 10, question: "Which method is used to convert a string to integer?", options: ["Integer.parseInt()", "String.toInt()", "Integer.valueOf()", "int.parse()"], answer: "Integer.parseInt()", attempted: false, selected: "" },

  { num: 11, question: "Which keyword is used to create a subclass?", options: ["inherits", "extends", "super", "implements"], answer: "extends", attempted: false, selected: "" },

  { num: 12, question: "Which type of array stores elements of the same data type?", options: ["Mixed Array", "Object Array", "Primitive Array", "All of these"], answer: "Primitive Array", attempted: false, selected: "" },

  { num: 13, question: "Which of these is a character type?", options: ["int", "double", "char", "boolean"], answer: "char", attempted: false, selected: "" },

  { num: 14, question: "Which of the following is used for reading input from console?", options: ["Scanner", "BufferedReader", "InputStreamReader", "All of these"], answer: "All of these", attempted: false, selected: "" },

  { num: 15, question: "Which keyword is used to prevent inheritance?", options: ["final", "static", "abstract", "sealed"], answer: "final", attempted: false, selected: "" },

  { num: 16, question: "Which method returns the character at a specified index in a string?", options: ["charAt()", "substring()", "getChar()", "indexOf()"], answer: "charAt()", attempted: false, selected: "" },

  { num: 17, question: "Which loop is best when the number of iterations is known?", options: ["for", "while", "do-while", "foreach"], answer: "for", attempted: false, selected: "" },

  { num: 18, question: "Which keyword refers to the parent class object?", options: ["parent", "super", "this", "base"], answer: "super", attempted: false, selected: "" },

  { num: 19, question: "Which method combines two strings?", options: ["concat()", "append()", "merge()", "combine()"], answer: "concat()", attempted: false, selected: "" },

  { num: 20, question: "Which operator is used for remainder calculation?", options: ["%", "/", "*", "mod"], answer: "%", attempted: false, selected: "" },

  { num: 21, question: "Which keyword defines a method that must be implemented by subclasses?", options: ["abstract", "final", "static", "override"], answer: "abstract", attempted: false, selected: "" },

  { num: 22, question: "Which data type can store whole numbers?", options: ["int", "float", "boolean", "char"], answer: "int", attempted: false, selected: "" },

  { num: 23, question: "Which method returns the length of an array?", options: ["length", "length()", "size()", "count()"], answer: "length", attempted: false, selected: "" },

  { num: 24, question: "Which operator is used for string concatenation?", options: ["+", "&", ".", "|"], answer: "+", attempted: false, selected: "" },

  { num: 25, question: "Which exception occurs when dividing by zero?", options: ["ArithmeticException", "IOException", "NullPointerException", "ArrayIndexOutOfBoundsException"], answer: "ArithmeticException", attempted: false, selected: "" },

  { num: 26, question: "Which of the following is an example of a wrapper class?", options: ["Integer", "int", "double", "char"], answer: "Integer", attempted: false, selected: "" },

  { num: 27, question: "Which keyword is used to define a constant?", options: ["final", "static", "const", "immutable"], answer: "final", attempted: false, selected: "" },

  { num: 28, question: "Which method converts a string to uppercase?", options: ["toUpperCase()", "toUpper()", "uppercase()", "convertToUpper()"], answer: "toUpperCase()", attempted: false, selected: "" },

  { num: 29, question: "Which access modifier allows access within the same package?", options: ["default", "private", "public", "protected"], answer: "default", attempted: false, selected: "" },

  { num: 30, question: "Which keyword is used to define an interface?", options: ["interface", "abstract", "class", "implements"], answer: "interface", attempted: false, selected: "" },

  { num: 31, question: "Which method compares two strings for equality?", options: ["equals()", "==", "compare()", "compareTo()"], answer: "equals()", attempted: false, selected: "" },

  { num: 32, question: "Which keyword is used to inherit an interface?", options: ["implements", "extends", "inherits", "super"], answer: "implements", attempted: false, selected: "" },

  { num: 33, question: "Which of the following is used to declare a constant for all objects?", options: ["static final", "final", "const", "immutable"], answer: "static final", attempted: false, selected: "" },

  { num: 34, question: "Which loop is best when the number of iterations is unknown?", options: ["while", "for", "do-while", "foreach"], answer: "while", attempted: false, selected: "" },

  { num: 35, question: "Which keyword prevents a method from being overridden?", options: ["final", "static", "abstract", "sealed"], answer: "final", attempted: false, selected: "" },

  { num: 36, question: "Which class is used to handle exceptions?", options: ["Exception", "Error", "Throwable", "Runtime"], answer: "Exception", attempted: false, selected: "" },

  { num: 37, question: "Which of these is not a primitive type?", options: ["String", "int", "boolean", "char"], answer: "String", attempted: false, selected: "" },

  { num: 38, question: "Which operator is used for increment by 1?", options: ["++", "+", "--", "+="], answer: "++", attempted: false, selected: "" },

  { num: 39, question: "Which method returns a substring of a string?", options: ["substring()", "substr()", "getSubString()", "cut()"], answer: "substring()", attempted: false, selected: "" },

  { num: 40, question: "Which method converts a string to lowercase?", options: ["toLowerCase()", "toLower()", "lowercase()", "convertToLower()"], answer: "toLowerCase()", attempted: false, selected: "" },

  { num: 41, question: "Which type of variable is shared across all objects of a class?", options: ["instance variable", "local variable", "static variable", "parameter"], answer: "static variable", attempted: false, selected: "" },

  { num: 42, question: "Which keyword is used to refer to the current object?", options: ["this", "super", "self", "me"], answer: "this", attempted: false, selected: "" },

  { num: 43, question: "Which keyword is used to refer to the parent class constructor?", options: ["super", "parent", "base", "root"], answer: "super", attempted: false, selected: "" },

  { num: 44, question: "Which method of Thread class is used to pause execution?", options: ["sleep()", "wait()", "stop()", "pause()"], answer: "sleep()", attempted: false, selected: "" },

  { num: 45, question: "Which keyword is used to create an object?", options: ["new", "create", "make", "instance"], answer: "new", attempted: false, selected: "" },

  { num: 46, question: "Which operator is used for multiplication?", options: ["*", "+", "-", "%"], answer: "*", attempted: false, selected: "" },

  { num: 47, question: "Which method returns the index of a character in a string?", options: ["indexOf()", "charAt()", "search()", "find()"], answer: "indexOf()", attempted: false, selected: "" },

  { num: 48, question: "Which of these is used to terminate a program?", options: ["System.exit(0)", "stop()", "exit()", "terminate()"], answer: "System.exit(0)", attempted: false, selected: "" },

  { num: 49, question: "Which keyword is used to define a class?", options: ["class", "define", "object", "struct"], answer: "class", attempted: false, selected: "" },

  { num: 50, question: "Which operator is used for logical OR?", options: ["||", "|", "&&", "&"], answer: "||", attempted: false, selected: "" }
];

let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60; 
let timerInterval;

// ----------------- Load Question -----------------
function loadQuestion(index) {
    const q = questions[index];
    if (!q) return; // ❌ undefined error fix

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