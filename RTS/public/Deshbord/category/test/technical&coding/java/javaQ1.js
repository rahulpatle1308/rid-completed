const questions = [
  {
        "num": 1,
        "question_en": "What is the definition of supply?",
        "question_hi": "आपूर्ति की परिभाषा क्या है?",
        "options_en": [
          "Desire to buy goods",
          "Quantity of goods a seller is willing to sell at a price",
          "Quantity of goods demanded by consumers",
          "Goods available in stock"
        ],
        "options_hi": [
          "वस्तुओं को खरीदने की इच्छा",
          "किसी मूल्य पर विक्रेता द्वारा बेची जाने वाली वस्तुओं की मात्रा",
          "उपभोक्ताओं द्वारा माँगी गई वस्तुओं की मात्रा",
          "भंडार में उपलब्ध वस्तुएँ"
        ],
        answer_en: "Quantity of goods a seller is willing to sell at a price",
        answer_hi:"किसी मूल्य पर विक्रेता द्वारा बेची जाने वाली वस्तुओं की मात्रा",
        "attempted": false,
        "selected": ""
      },
{
    "num": 2,
    "question_en": "Which of the following is a feature of supply?",
    "question_hi": "निम्नलिखित में से कौन आपूर्ति की विशेषता है?",
    "options_en": ["Depends on desire", "Depends on price", "Depends on population", "Depends on demand"],
    "options_hi": ["इच्छा पर निर्भर", "मूल्य पर निर्भर", "जनसंख्या पर निर्भर", "माँग पर निर्भर"],
    "answer_en": "Depends on price",
    "answer_hi": "मूल्य पर निर्भर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the law of supply state?",
    "question_hi": "आपूर्ति का नियम क्या कहता है?",
    "options_en": ["As price increases, quantity supplied decreases", "As price increases, quantity supplied increases", "As price decreases, quantity supplied increases", "Price has no effect on quantity supplied"],
    "options_hi": ["जैसे-जैसे मूल्य बढ़ता है, आपूर्ति की मात्रा घटती है", "जैसे-जैसे मूल्य बढ़ता है, आपूर्ति की मात्रा बढ़ती है", "जैसे-जैसे मूल्य घटता है, आपूर्ति की मात्रा बढ़ती है", "मूल्य का आपूर्ति की मात्रा पर कोई प्रभाव नहीं पड़ता"],
    "answer_en": "As price increases, quantity supplied increases",
    "answer_hi": "जैसे-जैसे मूल्य बढ़ता है, आपूर्ति की मात्रा बढ़ती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of these is a factor affecting supply?",
    "question_hi": "इनमें से कौन-सा आपूर्ति को प्रभावित करने वाला कारक है?",
    "options_en": ["Consumer taste", "Technology", "Income", "Population"],
    "options_hi": ["उपभोक्ता की पसंद", "प्रौद्योगिकी", "आय", "जनसंख्या"],
    "answer_en": "Technology",
    "answer_hi": "प्रौद्योगिकी",
    "attempted": false,
    "selected": ""
  },

  { num: 5, question: "Which keyword is used to inherit a class in Java?", options: ["inherits", "extends", "implements", "super"], answer: "extends", attempted: false, selected: "" },

  { num: 6, question: "Which class is used to take input from the user in Java?", options: ["BufferedReader", "Scanner", "InputStream", "DataReader"], answer: "Scanner", attempted: false, selected: "" },

  { num: 7, question: "Which of the following is not a valid access modifier?", options: ["public", "private", "protected", "global"], answer: "global", attempted: false, selected: "" },

  { num: 8, question: "Which operator is used for equality comparison?", options: ["=", "==", "!=", "==="], answer: "==", attempted: false, selected: "" },

  { num: 9, question: "What is used to create objects in Java?", options: ["new", "create", "make", "instance"], answer: "new", attempted: false, selected: "" },

  { num: 10, question: "Which of the following loops is entry-controlled?", options: ["do-while", "for", "while", "both b and c"], answer: "both b and c", attempted: false, selected: "" },

  { num: 11, question: "Which keyword is used to stop loop execution?", options: ["exit", "stop", "break", "return"], answer: "break", attempted: false, selected: "" },

  { num: 12, question: "Which method is used to compare two strings?", options: ["equals()", "==", "compare()", "compareTo()"], answer: "equals()", attempted: false, selected: "" },

  { num: 13, question: "Which package is automatically imported in every Java program?", options: ["java.io", "java.util", "java.lang", "java.net"], answer: "java.lang", attempted: false, selected: "" },

  { num: 14, question: "Which keyword is used to define a constant variable?", options: ["final", "static", "constant", "const"], answer: "final", attempted: false, selected: "" },

  { num: 15, question: "Which method is used to get the length of a string?", options: ["len()", "length()", "size()", "count()"], answer: "length()", attempted: false, selected: "" },

  { num: 16, question: "Which statement always executes after try and catch blocks?", options: ["end", "finally", "exit", "default"], answer: "finally", attempted: false, selected: "" },

  { num: 17, question: "Which keyword is used to handle exceptions?", options: ["error", "catch", "try", "Both try and catch"], answer: "Both try and catch", attempted: false, selected: "" },

  { num: 18, question: "Which of these is not an OOP concept?", options: ["Encapsulation", "Inheritance", "Compilation", "Polymorphism"], answer: "Compilation", attempted: false, selected: "" },

  { num: 19, question: "What is the parent class of all classes in Java?", options: ["Base", "Object", "Core", "Root"], answer: "Object", attempted: false, selected: "" },

  { num: 20, question: "Which keyword is used to inherit an interface?", options: ["extends", "implements", "inherits", "super"], answer: "implements", attempted: false, selected: "" },

  { num: 21, question: "Which method must be in every Java application?", options: ["start()", "run()", "main()", "execute()"], answer: "main()", attempted: false, selected: "" },

  { num: 22, question: "What is the size of int in Java?", options: ["2 bytes", "4 bytes", "8 bytes", "Depends on OS"], answer: "4 bytes", attempted: false, selected: "" },

  { num: 23, question: "Which of the following is used for comments in Java?", options: ["//", "#", "<!-- -->", "/* */"], answer: "//", attempted: false, selected: "" },

  { num: 24, question: "Which keyword refers to the current object?", options: ["self", "this", "super", "own"], answer: "this", attempted: false, selected: "" },

  { num: 25, question: "Which keyword calls the parent class constructor?", options: ["parent", "base", "super", "root"], answer: "super", attempted: false, selected: "" },

  { num: 26, question: "Which of these is not a valid identifier?", options: ["_value", "value1", "1value", "value_"], answer: "1value", attempted: false, selected: "" },

  { num: 27, question: "Which collection class allows duplicates?", options: ["Set", "List", "Map", "TreeSet"], answer: "List", attempted: false, selected: "" },

  { num: 28, question: "Which collection does not allow duplicates?", options: ["ArrayList", "HashSet", "LinkedList", "Vector"], answer: "HashSet", attempted: false, selected: "" },

  { num: 29, question: "Which keyword is used to make a method belong to a class rather than an object?", options: ["static", "public", "final", "constant"], answer: "static", attempted: false, selected: "" },

  { num: 30, question: "Which interface must be implemented for multithreading?", options: ["Runnable", "Threadable", "Executable", "Task"], answer: "Runnable", attempted: false, selected: "" },

  { num: 31, question: "Which method starts a thread?", options: ["start()", "run()", "execute()", "begin()"], answer: "start()", attempted: false, selected: "" },

  { num: 32, question: "Which keyword is used for synchronization?", options: ["sync", "locked", "synchronized", "threadsafe"], answer: "synchronized", attempted: false, selected: "" },

  { num: 33, question: "Which keyword prevents method overriding?", options: ["final", "private", "protected", "static"], answer: "final", attempted: false, selected: "" },

  { num: 34, question: "Which class is used for file operations in Java?", options: ["File", "FileReader", "FileWriter", "All of these"], answer: "All of these", attempted: false, selected: "" },

  { num: 35, question: "Which method reads a single character from a file?", options: ["readChar()", "read()", "getChar()", "nextChar()"], answer: "read()", attempted: false, selected: "" },

  { num: 36, question: "Which keyword is used to define an abstract class?", options: ["abstract", "virtual", "interface", "class"], answer: "abstract", attempted: false, selected: "" },

  { num: 37, question: "Which keyword defines an interface?", options: ["interface", "implements", "abstract", "protocol"], answer: "interface", attempted: false, selected: "" },

  { num: 38, question: "Which collection class is synchronized?", options: ["ArrayList", "HashMap", "Vector", "HashSet"], answer: "Vector", attempted: false, selected: "" },

  { num: 39, question: "Which of these is checked exception?", options: ["NullPointerException", "IOException", "ArithmeticException", "ArrayIndexOutOfBoundsException"], answer: "IOException", attempted: false, selected: "" },

  { num: 40, question: "What will System.exit(0) do?", options: ["Terminates JVM", "Pauses JVM", "Restarts JVM", "Throws error"], answer: "Terminates JVM", attempted: false, selected: "" },

  { num: 41, question: "Which keyword is used to define packages in Java?", options: ["package", "namespace", "include", "import"], answer: "package", attempted: false, selected: "" },

  { num: 42, question: "Which keyword is used to import packages?", options: ["import", "include", "use", "load"], answer: "import", attempted: false, selected: "" },

  { num: 43, question: "What does JVM stand for?", options: ["Java Virtual Machine", "Java Version Manager", "Java Value Machine", "Java Variable Manager"], answer: "Java Virtual Machine", attempted: false, selected: "" },

  { num: 44, question: "Which method is used to find array length?", options: ["length()", "size()", "count()", "len()"], answer: "length()", attempted: false, selected: "" },

  { num: 45, question: "Which operator is used to concatenate strings?", options: ["+", "&", ".", "concat"], answer: "+", attempted: false, selected: "" },

  { num: 46, question: "Which exception is thrown when dividing by zero?", options: ["IOException", "ArithmeticException", "NullPointerException", "RuntimeException"], answer: "ArithmeticException", attempted: false, selected: "" },

  { num: 47, question: "Which keyword is used to create an enumeration?", options: ["enum", "enumerate", "define", "type"], answer: "enum", attempted: false, selected: "" },

  { num: 48, question: "Which method is used to pause a thread?", options: ["wait()", "sleep()", "stop()", "delay()"], answer: "sleep()", attempted: false, selected: "" },

  { num: 49, question: "Which collection stores unique elements in sorted order?", options: ["HashSet", "TreeSet", "LinkedList", "ArrayList"], answer: "TreeSet", attempted: false, selected: "" },

  { num: 50, question: "Which collection maintains insertion order and no duplicates?", options: ["HashSet", "TreeSet", "LinkedHashSet", "ArrayList"], answer: "LinkedHashSet", attempted: false, selected: "" }
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