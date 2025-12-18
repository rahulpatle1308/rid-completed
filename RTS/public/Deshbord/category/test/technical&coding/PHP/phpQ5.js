const questions = 
  [
  { "num": 1, "question_en": "Which symbol is used to start a single-line comment in PHP?", "question_hi": "PHP में single-line टिप्पणी शुरू करने के लिए कौन-सा चिन्ह उपयोग होता है?", "options_en": ["//","/* */","##","\\\\\\"], "options_hi": ["//","/* */","##","\\\\\\"], "answer_en": "//", "answer_hi": "//", "attempted": false, "selected": "" },
  { "num": 2, "question_en": "Which function outputs text in PHP?", "question_hi": "PHP में टेक्स्ट आउटपुट करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?", "options_en": ["echo","print","write","output"], "options_hi": ["echo","print","write","output"], "answer_en": "echo", "answer_hi": "echo", "attempted": false, "selected": "" },
  { "num": 3, "question_en": "What is the correct file extension for PHP files?", "question_hi": "PHP फाइल्स के लिए सही एक्सटेंशन क्या है?", "options_en": [".php",".ph",".phtml",".html"], "options_hi": [".php",".ph",".phtml",".html"], "answer_en": ".php", "answer_hi": ".php", "attempted": false, "selected": "" },
  { "num": 4, "question_en": "Which operator concatenates strings in PHP?", "question_hi": "PHP में कौन-सा ऑपरेटर स्ट्रिंग्स को जोड़ता है?", "options_en": [".","+","&","concat()"], "options_hi": [".","+","&","concat()"], "answer_en": ".", "answer_hi": ".", "attempted": false, "selected": "" },
  { "num": 5, "question_en": "How to declare a variable in PHP?", "question_hi": "PHP में वैरिएबल कैसे घोषित करते हैं?", "options_en": ["$var = 5;","var $var = 5;","let $var = 5;","declare $var = 5;"], "options_hi": ["$var = 5;","var $var = 5;","let $var = 5;","declare $var = 5;"], "answer_en": "$var = 5;", "answer_hi": "$var = 5;", "attempted": false, "selected": "" },
  { "num": 6, "question_en": "Which function returns the length of a string?", "question_hi": "कौन-सा फ़ंक्शन स्ट्रिंग की लंबाई लौटाता है?", "options_en": ["strlen()","length()","size()","strlength()"], "options_hi": ["strlen()","length()","size()","strlength()"], "answer_en": "strlen()", "answer_hi": "strlen()", "attempted": false, "selected": "" },
  { "num": 7, "question_en": "Which superglobal holds POST data?", "question_hi": "कौन-सा superglobal POST डेटा रखता है?", "options_en": ["$_POST","$_GET","$_REQUEST","$_FORM"], "options_hi": ["$_POST","$_GET","$_REQUEST","$_FORM"], "answer_en": "$_POST", "answer_hi": "$_POST", "attempted": false, "selected": "" },
  { "num": 8, "question_en": "Which function is used to include a file?", "question_hi": "किस फ़ंक्शन से फ़ाइल include की जाती है?", "options_en": ["include()","require()","include_once()","require_once()"], "options_hi": ["include()","require()","include_once()","require_once()"], "answer_en": "include()", "answer_hi": "include()", "attempted": false, "selected": "" },
  { "num": 9, "question_en": "What does PDO stand for?", "question_hi": "PDO का पूरा नाम क्या है?", "options_en": ["PHP Data Objects","PHP Database Objects","Primary Data Object","PHP Direct Objects"], "options_hi": ["PHP Data Objects","PHP Database Objects","Primary Data Object","PHP Direct Objects"], "answer_en": "PHP Data Objects", "answer_hi": "PHP Data Objects", "attempted": false, "selected": "" },
  { "num": 10, "question_en": "Which keyword defines a function in PHP?", "question_hi": "PHP में फ़ंक्शन परिभाषित करने के लिए कौन-सा कीवर्ड उपयोग होता है?", "options_en": ["function","def","fn","func"], "options_hi": ["function","def","fn","func"], "answer_en": "function", "answer_hi": "function", "attempted": false, "selected": "" },

  { "num": 11, "question_en": "Which symbol is used for variables in PHP?", "question_hi": "PHP में वैरिएबल के लिए कौन-सा चिन्ह उपयोग होता है?", "options_en": ["$","#","@","&"], "options_hi": ["$","#","@","&"], "answer_en": "$", "answer_hi": "$", "attempted": false, "selected": "" },
  { "num": 12, "question_en": "Which statement stops script execution?", "question_hi": "कौन-सा स्टेटमेंट स्क्रिप्ट को रोकता है?", "options_en": ["exit()","stop()","break()","return"], "options_hi": ["exit()","stop()","break()","return"], "answer_en": "exit()", "answer_hi": "exit()", "attempted": false, "selected": "" },
  { "num": 13, "question_en": "Which loop is used when number of iterations is known?", "question_hi": "जब iterations की संख्या पता हो तो कौन-सा loop उपयोग होता है?", "options_en": ["for","while","do-while","foreach"], "options_hi": ["for","while","do-while","foreach"], "answer_en": "for", "answer_hi": "for", "attempted": false, "selected": "" },
  { "num": 14, "question_en": "Which array function sorts values in ascending order?", "question_hi": "कौन-सा array function ascending order में sort करता है?", "options_en": ["sort()","rsort()","asort()","ksort()"], "options_hi": ["sort()","rsort()","asort()","ksort()"], "answer_en": "sort()", "answer_hi": "sort()", "attempted": false, "selected": "" },
  { "num": 15, "question_en": "Which operator is used for comparison?", "question_hi": "Comparison के लिए कौन-सा ऑपरेटर उपयोग होता है?", "options_en": ["==","=","===","!="], "options_hi": ["==","=","===","!="], "answer_en": "==", "answer_hi": "==", "attempted": false, "selected": "" },

  { "num": 16, "question_en": "Which function counts array elements?", "question_hi": "कौन-सा फ़ंक्शन array elements की गिनती करता है?", "options_en": ["count()","size()","length()","total()"], "options_hi": ["count()","size()","length()","total()"], "answer_en": "count()", "answer_hi": "count()", "attempted": false, "selected": "" },
  { "num": 17, "question_en": "Which method is used to send data securely?", "question_hi": "डेटा सुरक्षित भेजने के लिए कौन-सा method उपयोग होता है?", "options_en": ["POST","GET","REQUEST","SEND"], "options_hi": ["POST","GET","REQUEST","SEND"], "answer_en": "POST", "answer_hi": "POST", "attempted": false, "selected": "" },
  { "num": 18, "question_en": "Which function is used to start a session?", "question_hi": "Session शुरू करने के लिए कौन-सा फ़ंक्शन उपयोग होता है?", "options_en": ["session_start()","start_session()","begin_session()","session()"], "options_hi": ["session_start()","start_session()","begin_session()","session()"], "answer_en": "session_start()", "answer_hi": "session_start()", "attempted": false, "selected": "" },
  { "num": 19, "question_en": "Which tag is used to embed PHP code?", "question_hi": "PHP कोड embed करने के लिए कौन-सा टैग उपयोग होता है?", "options_en": ["<?php ?>","<php>","<script>","<? ?>"], "options_hi": ["<?php ?>","<php>","<script>","<? ?>"], "answer_en": "<?php ?>", "answer_hi": "<?php ?>", "attempted": false, "selected": "" },
  { "num": 20, "question_en": "Which function removes whitespace from both ends?", "question_hi": "कौन-सा फ़ंक्शन दोनों सिरों से whitespace हटाता है?", "options_en": ["trim()","ltrim()","rtrim()","strip()"], "options_hi": ["trim()","ltrim()","rtrim()","strip()"], "answer_en": "trim()", "answer_hi": "trim()", "attempted": false, "selected": "" },

  { "num": 21, "question_en": "Which loop executes at least once?", "question_hi": "कौन-सा loop कम से कम एक बार चलता है?", "options_en": ["do-while","for","while","foreach"], "options_hi": ["do-while","for","while","foreach"], "answer_en": "do-while", "answer_hi": "do-while", "attempted": false, "selected": "" },
  { "num": 22, "question_en": "Which function converts string to lowercase?", "question_hi": "कौन-सा फ़ंक्शन string को lowercase में बदलता है?", "options_en": ["strtolower()","tolower()","lower()","lc()"], "options_hi": ["strtolower()","tolower()","lower()","lc()"], "answer_en": "strtolower()", "answer_hi": "strtolower()", "attempted": false, "selected": "" },
  { "num": 23, "question_en": "Which array stores key-value pairs?", "question_hi": "कौन-सा array key-value pairs store करता है?", "options_en": ["Associative","Indexed","Multidimensional","Numeric"], "options_hi": ["Associative","Indexed","Multidimensional","Numeric"], "answer_en": "Associative", "answer_hi": "Associative", "attempted": false, "selected": "" },
  { "num": 24, "question_en": "Which function checks variable type?", "question_hi": "कौन-सा फ़ंक्शन variable का type check करता है?", "options_en": ["gettype()","typeof()","vartype()","checktype()"], "options_hi": ["gettype()","typeof()","vartype()","checktype()"], "answer_en": "gettype()", "answer_hi": "gettype()", "attempted": false, "selected": "" },
  { "num": 25, "question_en": "Which operator increments value by one?", "question_hi": "कौन-सा ऑपरेटर value को 1 बढ़ाता है?", "options_en": ["++","--","+=","="], "options_hi": ["++","--","+=","="], "answer_en": "++", "answer_hi": "++", "attempted": false, "selected": "" },

  { "num": 26, "question_en": "Which function sends output to browser?", "question_hi": "कौन-सा फ़ंक्शन browser को output भेजता है?", "options_en": ["echo","print","printf","all"], "options_hi": ["echo","print","printf","all"], "answer_en": "all", "answer_hi": "all", "attempted": false, "selected": "" },
  { "num": 27, "question_en": "Which keyword is used for constants?", "question_hi": "Constants के लिए कौन-सा keyword उपयोग होता है?", "options_en": ["define","const","constant","final"], "options_hi": ["define","const","constant","final"], "answer_en": "define", "answer_hi": "define", "attempted": false, "selected": "" },
  { "num": 28, "question_en": "Which function checks if variable is set?", "question_hi": "कौन-सा फ़ंक्शन check करता है कि variable set है या नहीं?", "options_en": ["isset()","empty()","set()","check()"], "options_hi": ["isset()","empty()","set()","check()"], "answer_en": "isset()", "answer_hi": "isset()", "attempted": false, "selected": "" },
  { "num": 29, "question_en": "Which function deletes a file?", "question_hi": "कौन-सा फ़ंक्शन file delete करता है?", "options_en": ["unlink()","delete()","remove()","erase()"], "options_hi": ["unlink()","delete()","remove()","erase()"], "answer_en": "unlink()", "answer_hi": "unlink()", "attempted": false, "selected": "" },
  { "num": 30, "question_en": "Which function starts output buffering?", "question_hi": "कौन-सा फ़ंक्शन output buffering शुरू करता है?", "options_en": ["ob_start()","buffer_start()","start_buffer()","out_buffer()"], "options_hi": ["ob_start()","buffer_start()","start_buffer()","out_buffer()"], "answer_en": "ob_start()", "answer_hi": "ob_start()", "attempted": false, "selected": "" },

  { "num": 31, "question_en": "Which function ends output buffering?", "question_hi": "कौन-सा फ़ंक्शन output buffering बंद करता है?", "options_en": ["ob_end_flush()","ob_stop()","buffer_end()","end_buffer()"], "options_hi": ["ob_end_flush()","ob_stop()","buffer_end()","end_buffer()"], "answer_en": "ob_end_flush()", "answer_hi": "ob_end_flush()", "attempted": false, "selected": "" },
  { "num": 32, "question_en": "Which function encodes JSON?", "question_hi": "कौन-सा फ़ंक्शन JSON encode करता है?", "options_en": ["json_encode()","json_decode()","encode_json()","toJSON()"], "options_hi": ["json_encode()","json_decode()","encode_json()","toJSON()"], "answer_en": "json_encode()", "answer_hi": "json_encode()", "attempted": false, "selected": "" },
  { "num": 33, "question_en": "Which function decodes JSON?", "question_hi": "कौन-सा फ़ंक्शन JSON decode करता है?", "options_en": ["json_decode()","json_encode()","decode_json()","fromJSON()"], "options_hi": ["json_decode()","json_encode()","decode_json()","fromJSON()"], "answer_en": "json_decode()", "answer_hi": "json_decode()", "attempted": false, "selected": "" },
  { "num": 34, "question_en": "Which function gets current date?", "question_hi": "कौन-सा फ़ंक्शन current date देता है?", "options_en": ["date()","now()","today()","getdate()"], "options_hi": ["date()","now()","today()","getdate()"], "answer_en": "date()", "answer_hi": "date()", "attempted": false, "selected": "" },
  { "num": 35, "question_en": "Which operator is used for logical AND?", "question_hi": "Logical AND के लिए कौन-सा ऑपरेटर उपयोग होता है?", "options_en": ["&&","||","!","and"], "options_hi": ["&&","||","!","and"], "answer_en": "&&", "answer_hi": "&&", "attempted": false, "selected": "" },

  { "num": 36, "question_en": "Which function generates random number?", "question_hi": "कौन-सा फ़ंक्शन random number generate करता है?", "options_en": ["rand()","random()","mt_rand()","both a and c"], "options_hi": ["rand()","random()","mt_rand()","both a and c"], "answer_en": "both a and c", "answer_hi": "both a and c", "attempted": false, "selected": "" },
  { "num": 37, "question_en": "Which function checks empty variable?", "question_hi": "कौन-सा फ़ंक्शन empty variable check करता है?", "options_en": ["empty()","isset()","null()","check()"], "options_hi": ["empty()","isset()","null()","check()"], "answer_en": "empty()", "answer_hi": "empty()", "attempted": false, "selected": "" },
  { "num": 38, "question_en": "Which keyword exits loop?", "question_hi": "कौन-सा keyword loop से बाहर निकलता है?", "options_en": ["break","exit","stop","end"], "options_hi": ["break","exit","stop","end"], "answer_en": "break", "answer_hi": "break", "attempted": false, "selected": "" },
  { "num": 39, "question_en": "Which keyword skips current loop iteration?", "question_hi": "कौन-सा keyword current iteration skip करता है?", "options_en": ["continue","skip","pass","next"], "options_hi": ["continue","skip","pass","next"], "answer_en": "continue", "answer_hi": "continue", "attempted": false, "selected": "" },
  { "num": 40, "question_en": "Which function returns PHP version?", "question_hi": "कौन-सा फ़ंक्शन PHP version लौटाता है?", "options_en": ["phpversion()","version()","php_info()","getversion()"], "options_hi": ["phpversion()","version()","php_info()","getversion()"], "answer_en": "phpversion()", "answer_hi": "phpversion()", "attempted": false, "selected": "" },

  { "num": 41, "question_en": "Which function outputs array structure?", "question_hi": "कौन-सा फ़ंक्शन array structure दिखाता है?", "options_en": ["print_r()","echo","var_dump()","both a and c"], "options_hi": ["print_r()","echo","var_dump()","both a and c"], "answer_en": "both a and c", "answer_hi": "both a and c", "attempted": false, "selected": "" },
  { "num": 42, "question_en": "Which function stops script and prints message?", "question_hi": "कौन-सा फ़ंक्शन script रोककर message print करता है?", "options_en": ["die()","exit()","stop()","end()"], "options_hi": ["die()","exit()","stop()","end()"], "answer_en": "die()", "answer_hi": "die()", "attempted": false, "selected": "" },
  { "num": 43, "question_en": "Which function uploads files?", "question_hi": "File upload के लिए कौन-सा superglobal उपयोग होता है?", "options_en": ["$_FILES","$_POST","$_UPLOAD","$_FILE"], "options_hi": ["$_FILES","$_POST","$_UPLOAD","$_FILE"], "answer_en": "$_FILES", "answer_hi": "$_FILES", "attempted": false, "selected": "" },
  { "num": 44, "question_en": "Which function escapes HTML characters?", "question_hi": "कौन-सा फ़ंक्शन HTML characters escape करता है?", "options_en": ["htmlspecialchars()","htmlentities()","escapeHTML()","both a and b"], "options_hi": ["htmlspecialchars()","htmlentities()","escapeHTML()","both a and b"], "answer_en": "both a and b", "answer_hi": "both a and b", "attempted": false, "selected": "" },
  { "num": 45, "question_en": "Which operator checks value and type?", "question_hi": "कौन-सा ऑपरेटर value और type दोनों check करता है?", "options_en": ["===","==","!=","="], "options_hi": ["===","==","!=","="], "answer_en": "===", "answer_hi": "===", "attempted": false, "selected": "" },

  { "num": 46, "question_en": "Which function returns current timestamp?", "question_hi": "कौन-सा फ़ंक्शन current timestamp देता है?", "options_en": ["time()","now()","timestamp()","date()"], "options_hi": ["time()","now()","timestamp()","date()"], "answer_en": "time()", "answer_hi": "time()", "attempted": false, "selected": "" },
  { "num": 47, "question_en": "Which function converts array to string?", "question_hi": "कौन-सा फ़ंक्शन array को string में बदलता है?", "options_en": ["implode()","explode()","join()","both a and c"], "options_hi": ["implode()","explode()","join()","both a and c"], "answer_en": "both a and c", "answer_hi": "both a and c", "attempted": false, "selected": "" },
  { "num": 48, "question_en": "Which function converts string to array?", "question_hi": "कौन-सा फ़ंक्शन string को array में बदलता है?", "options_en": ["explode()","implode()","split()","join()"], "options_hi": ["explode()","implode()","split()","join()"], "answer_en": "explode()", "answer_hi": "explode()", "attempted": false, "selected": "" },
  { "num": 49, "question_en": "Which function checks file existence?", "question_hi": "कौन-सा फ़ंक्शन file existence check करता है?", "options_en": ["file_exists()","is_file()","checkfile()","exists()"], "options_hi": ["file_exists()","is_file()","checkfile()","exists()"], "answer_en": "file_exists()", "answer_hi": "file_exists()", "attempted": false, "selected": "" },
  { "num": 50, "question_en": "Which function gives information about PHP?", "question_hi": "कौन-सा फ़ंक्शन PHP की जानकारी देता है?", "options_en": ["phpinfo()","info()","php_data()","getinfo()"], "options_hi": ["phpinfo()","info()","php_data()","getinfo()"], "answer_en": "phpinfo()", "answer_hi": "phpinfo()", "attempted": false, "selected": "" }
]



let currentQuestion = 0; 
let language = "en";
// let timeLeft = 180 * 60; // 180 minutes
let timeLeft = 60 * 60; // 60 minutes
let timerInterval;

// ----------------- Quiz Logic -----------------
function loadQuestion(index) {
    const q = questions[index];
    document.getElementById("question").textContent = `${q.num}. ${
        language === "en" ? q.question_en : q.question_hi
    }`;
    document.getElementById("questionCounter").textContent = `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");
        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
            transition: all 0.2s;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option" value="${option}" ${isSelected ? "checked" : ""} style="margin-right:8px;">
            ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

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

function submitQuiz() {
    clearInterval(timerInterval);
    let attempted = 0,
        notAttempted = 0,
        score = 0;

    questions.forEach((q) => {
        if (q.attempted) {
            attempted++;
            if (q.selected === q.answer_en || q.selected === q.answer_hi) score++;
        } else notAttempted++;
    });

    alert(
        `Quiz submitted!\nAttempted: ${attempted}\nNot Attempted: ${notAttempted}\nScore: ${score}/${questions.length}`
    );
}

function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("Time's up!");
            submitQuiz();
        } else {
            const hours = Math.floor(timeLeft / 3600);
            const minutes = Math.floor((timeLeft % 3600) / 60);
            const seconds = timeLeft % 60;
            timerElement.textContent = `Time Left: ${hours
                .toString()
                .padStart(2, "0")}:${minutes
                .toString()
                .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
            timeLeft--;
        }
    }, 1000);
}



////////////////////////////////////////////////////////////////////////////////////////////

// submit 
function jumpToQuestion(index) {
            currentQuestion = index;
            loadQuestion(index);
        }

        function submitQuiz() {
            let confirmation = confirm("Are you sure you want to submit the test?");
            
            if (!confirmation) {
                return; // अगर यूज़र 'Cancel' करता है तो आगे नहीं बढ़ेंगे
            }

            let attempted = 0;
            let notAttempted = 0;
            let score = 0;
            const results = [];

            questions.forEach(q => {
                if (q.attempted) {
                    attempted++;
                    if (q.selected === q.answer) {
                        score++;
                    }
                } else {
                    notAttempted++;
                }
                results.push({ question: q.question, selected: q.selected || "Not Answered", correct: q.answer });
            });

            localStorage.setItem("attempted", attempted);
            localStorage.setItem("notAttempted", notAttempted);
            localStorage.setItem("score", score);
            localStorage.setItem("results", JSON.stringify(results));

            // रिजल्ट देखने से पहले एक और कन्फर्मेशन ले सकते हैं
            let viewResult = confirm("Test submitted successfully! Do you want to view your result?");
            if (viewResult) {
                window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
            }
        }
        window.onload = () => {
            loadQuestion(currentQuestion);
        };


function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";
    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";
        nav.innerHTML += `<div class='circle' style='background-color:${color}' onclick='loadQuestion(${i})'>${i + 1}</div>`;
    });
}

// ----------------- Camera & Movement Logic -----------------
let videoStream;
let movementCount = 0;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px"; // ✅ Left side
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.zIndex = "9999";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.border = "3px solid red";
    container.style.boxShadow = "0 0 10px rgba(0,0,0,0.3)";
    container.style.cursor = "grab";
    container.style.minWidth = "80px";
    container.style.minHeight = "80px";
    container.style.maxWidth = "250px";
    container.style.maxHeight = "250px";
    container.style.background = "#000";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.setAttribute("autoplay", true);
    video.setAttribute("playsinline", true);
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    // ✅ Resize handle
    const resizeHandle = document.createElement("div");
    resizeHandle.style.position = "absolute";
    resizeHandle.style.bottom = "2px";
    resizeHandle.style.right = "2px";
    resizeHandle.style.width = "15px";
    resizeHandle.style.height = "15px";
    resizeHandle.style.background = "rgba(255,255,255,0.7)";
    resizeHandle.style.borderRadius = "4px";
    resizeHandle.style.cursor = "se-resize";
    container.appendChild(resizeHandle);

    // ✅ Drag logic
    let isDragging = false;
    let offsetX, offsetY;

    container.addEventListener("mousedown", (e) => {
        if (e.target === resizeHandle) return;
        isDragging = true;
        offsetX = e.clientX - container.offsetLeft;
        offsetY = e.clientY - container.offsetTop;
        container.style.cursor = "grabbing";
    });

    document.addEventListener("mousemove", (e) => {
        if (!isDragging) return;
        let x = e.clientX - offsetX;
        let y = e.clientY - offsetY;
        x = Math.max(0, Math.min(window.innerWidth - container.offsetWidth, x));
        y = Math.max(0, Math.min(window.innerHeight - container.offsetHeight, y));
        container.style.left = `${x}px`;
        container.style.top = `${y}px`;
    });

    document.addEventListener("mouseup", () => {
        isDragging = false;
        container.style.cursor = "grab";
    });

    // ✅ Resize logic
    let isResizing = false;
    let startWidth, startHeight, startX, startY;

    resizeHandle.addEventListener("mousedown", (e) => {
        e.stopPropagation();
        isResizing = true;
        startWidth = container.offsetWidth;
        startHeight = container.offsetHeight;
        startX = e.clientX;
        startY = e.clientY;
    });

    document.addEventListener("mousemove", (e) => {
        if (!isResizing) return;
        const dx = e.clientX - startX;
        const dy = e.clientY - startY;
        const newSize = Math.max(80, Math.min(250, Math.max(startWidth + dx, startHeight + dy)));
        container.style.width = `${newSize}px`;
        container.style.height = `${newSize}px`;
    });

    document.addEventListener("mouseup", () => {
        isResizing = false;
    });

    // ✅ Camera stream
    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
            detectMovement(video);
        })
        .catch(err => {
            console.error("Camera error:", err);
            alert("Camera not accessible!");
        });
}

function detectMovement(video) {
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = 160;
    canvas.height = 160;
    let lastImageData = null;

    setInterval(() => {
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);

        if (lastImageData) {
            let diff = 0;
            for (let i = 0; i < imageData.data.length; i += 4) {
                diff += Math.abs(imageData.data[i] - lastImageData.data[i]);
            }

            if (diff > 1000000) {
                movementCount++;
                if (movementCount === 1) {
                    alert("⚠️ Alert 1: Face is not move");
                } else if (movementCount === 2) {
                    alert("⚠️ Alert 2: Head is not move");
                } else if (movementCount === 3) {
                    alert("⚠️ Alert 3: Test series is restarting...");
                    restartTest();
                }
            }
        }
        lastImageData = imageData;
    }, 2000);
}

function restartTest() {
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }
    const camContainer = document.getElementById("camera-container");
    if (camContainer) camContainer.remove();

    movementCount = 0;
    currentQuestion = 0;
    timeLeft = 180 * 60;

    questions.forEach(q => {
        q.attempted = false;
        q.selected = null;
    });

    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
}

// ----------------- Page Load -----------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera(); // ✅ Camera starts with test
};


///////////////////////////////////////