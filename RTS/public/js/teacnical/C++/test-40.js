const questions= [
  {
    "num": 1,
    "question_en": "Who developed the C++ programming language?",
    "question_hi": "C++ प्रोग्रामिंग भाषा किसने विकसित की?",
    "options_en": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    "options_hi": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    "answer_en": "Bjarne Stroustrup",
    "answer_hi": "Bjarne Stroustrup"
  },
  {
    "num": 2,
    "question_en": "Which extension is used for C++ source files?",
    "question_hi": "C++ सोर्स फाइल के लिए कौन सा एक्सटेंशन उपयोग होता है?",
    "options_en": [".cpp", ".c", ".java", ".py"],
    "options_hi": [".cpp", ".c", ".java", ".py"],
    "answer_en": ".cpp",
    "answer_hi": ".cpp"
  },
  {
    "num": 3,
    "question_en": "Which concept is not part of OOP?",
    "question_hi": "निम्न में से कौन सा OOP का हिस्सा नहीं है?",
    "options_en": ["Compilation", "Encapsulation", "Inheritance", "Polymorphism"],
    "options_hi": ["Compilation", "Encapsulation", "Inheritance", "Polymorphism"],
    "answer_en": "Compilation",
    "answer_hi": "Compilation"
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to define a constant in C++?",
    "question_hi": "C++ में कॉन्स्टेंट डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["const", "static", "final", "define"],
    "options_hi": ["const", "static", "final", "define"],
    "answer_en": "const",
    "answer_hi": "const"
  },
  {
    "num": 5,
    "question_en": "Which operator is used to allocate memory dynamically?",
    "question_hi": "डायनामिक मेमोरी एलोकेशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new"
  },

  {
    "num": 6,
    "question_en": "Which keyword is used to inherit a class?",
    "question_hi": "क्लास इनहेरिट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["public", "extends", "inherits", "class"],
    "options_hi": ["public", "extends", "inherits", "class"],
    "answer_en": "public",
    "answer_hi": "public"
  },
  {
    "num": 7,
    "question_en": "Which feature allows same function name with different parameters?",
    "question_hi": "एक ही फंक्शन नाम को अलग पैरामीटर के साथ उपयोग करने की सुविधा क्या है?",
    "options_en": ["Function Overloading", "Overriding", "Inheritance", "Abstraction"],
    "options_hi": ["Function Overloading", "Overriding", "Inheritance", "Abstraction"],
    "answer_en": "Function Overloading",
    "answer_hi": "Function Overloading"
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to handle exceptions?",
    "question_hi": "एक्सेप्शन हैंडल करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "error", "exception", "handle"],
    "options_hi": ["try", "error", "exception", "handle"],
    "answer_en": "try",
    "answer_hi": "try"
  },
  {
    "num": 9,
    "question_en": "Which STL container does not allow duplicate values?",
    "question_hi": "कौन सा STL कंटेनर डुप्लिकेट वैल्यू की अनुमति नहीं देता?",
    "options_en": ["set", "vector", "list", "deque"],
    "options_hi": ["set", "vector", "list", "deque"],
    "answer_en": "set",
    "answer_hi": "set"
  },
  {
    "num": 10,
    "question_en": "Which header file is needed for string class?",
    "question_hi": "string क्लास के लिए कौन सा हेडर फाइल जरूरी है?",
    "options_en": ["<string>", "<cstring>", "<text>", "<str>"],
    "options_hi": ["<string>", "<cstring>", "<text>", "<str>"],
    "answer_en": "<string>",
    "answer_hi": "<string>"
  },

  {
    "num": 11,
    "question_en": "Which loop is entry controlled?",
    "question_hi": "कौन सा लूप एंट्री कंट्रोल्ड होता है?",
    "options_en": ["for", "do-while", "repeat", "foreach"],
    "options_hi": ["for", "do-while", "repeat", "foreach"],
    "answer_en": "for",
    "answer_hi": "for"
  },
  {
    "num": 12,
    "question_en": "Which operator accesses class members using object?",
    "question_hi": "ऑब्जेक्ट के माध्यम से क्लास मेंबर एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": [".", "->", "::", "*"],
    "options_hi": [".", "->", "::", "*"],
    "answer_en": ".",
    "answer_hi": "."
  },
  {
    "num": 13,
    "question_en": "Which keyword is used to stop inheritance?",
    "question_hi": "इनहेरिटेंस रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "const", "static", "sealed"],
    "options_hi": ["final", "const", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final"
  },
  {
    "num": 14,
    "question_en": "Which operator is called scope resolution operator?",
    "question_hi": "स्कोप रेज़ोल्यूशन ऑपरेटर कौन सा है?",
    "options_en": ["::", ".", "->", ":"],
    "options_hi": ["::", ".", "->", ":"],
    "answer_en": "::",
    "answer_hi": "::"
  },
  {
    "num": 15,
    "question_en": "Which container follows FIFO?",
    "question_hi": "कौन सा कंटेनर FIFO फॉलो करता है?",
    "options_en": ["queue", "stack", "vector", "set"],
    "options_hi": ["queue", "stack", "vector", "set"],
    "answer_en": "queue",
    "answer_hi": "queue"
  },

  {
    "num": 16,
    "question_en": "Which keyword is used for runtime polymorphism?",
    "question_hi": "रनटाइम पॉलीमॉर्फिज़्म के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["virtual", "inline", "static", "override"],
    "options_hi": ["virtual", "inline", "static", "override"],
    "answer_en": "virtual",
    "answer_hi": "virtual"
  },
  {
    "num": 17,
    "question_en": "Which header supports file handling?",
    "question_hi": "फाइल हैंडलिंग के लिए कौन सा हेडर है?",
    "options_en": ["<fstream>", "<file>", "<io>", "<stream>"],
    "options_hi": ["<fstream>", "<file>", "<io>", "<stream>"],
    "answer_en": "<fstream>",
    "answer_hi": "<fstream>"
  },
  {
    "num": 18,
    "question_en": "Which keyword is used to create templates?",
    "question_hi": "टेम्पलेट बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["template", "typename", "generic", "define"],
    "options_hi": ["template", "typename", "generic", "define"],
    "answer_en": "template",
    "answer_hi": "template"
  },
  {
    "num": 19,
    "question_en": "Which operator is used to compare values?",
    "question_hi": "वैल्यू की तुलना करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["==", "=", "<", ">"],
    "options_hi": ["==", "=", "<", ">"],
    "answer_en": "==",
    "answer_hi": "=="
  },
  {
    "num": 20,
    "question_en": "Which STL container stores elements in sorted order?",
    "question_hi": "एलिमेंट्स को सॉर्टेड ऑर्डर में कौन सा STL कंटेनर स्टोर करता है?",
    "options_en": ["set", "vector", "list", "deque"],
    "options_hi": ["set", "vector", "list", "deque"],
    "answer_en": "set",
    "answer_hi": "set"
  },

  {
    "num": 21,
    "question_en": "Which keyword is used for type inference?",
    "question_hi": "टाइप इनफेरेंस के लिए कौन सा कीवर्ड है?",
    "options_en": ["auto", "var", "let", "type"],
    "options_hi": ["auto", "var", "let", "type"],
    "answer_en": "auto",
    "answer_hi": "auto"
  },
  {
    "num": 22,
    "question_en": "Which header is required for vector?",
    "question_hi": "vector के लिए कौन सा हेडर जरूरी है?",
    "options_en": ["<vector>", "<list>", "<array>", "<deque>"],
    "options_hi": ["<vector>", "<list>", "<array>", "<deque>"],
    "answer_en": "<vector>",
    "answer_hi": "<vector>"
  },
  {
    "num": 23,
    "question_en": "Which operator is used to access pointer members?",
    "question_hi": "पॉइंटर मेंबर एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["->", ".", "*", "&"],
    "options_hi": ["->", ".", "*", "&"],
    "answer_en": "->",
    "answer_hi": "->"
  },
  {
    "num": 24,
    "question_en": "Which keyword ensures function does not throw exception?",
    "question_hi": "फंक्शन कोई एक्सेप्शन न फेंके यह सुनिश्चित करने वाला कीवर्ड कौन सा है?",
    "options_en": ["noexcept", "throw", "try", "catch"],
    "options_hi": ["noexcept", "throw", "try", "catch"],
    "answer_en": "noexcept",
    "answer_hi": "noexcept"
  },
  {
    "num": 25,
    "question_en": "Which header is used for smart pointers?",
    "question_hi": "स्मार्ट पॉइंटर के लिए कौन सा हेडर है?",
    "options_en": ["<memory>", "<pointer>", "<smart>", "<util>"],
    "options_hi": ["<memory>", "<pointer>", "<smart>", "<util>"],
    "answer_en": "<memory>",
    "answer_hi": "<memory>"
  },

  {
    "num": 26,
    "question_en": "Which keyword allows modification inside const object?",
    "question_hi": "const ऑब्जेक्ट के अंदर बदलाव की अनुमति कौन सा कीवर्ड देता है?",
    "options_en": ["mutable", "volatile", "static", "register"],
    "options_hi": ["mutable", "volatile", "static", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable"
  },
  {
    "num": 27,
    "question_en": "Which STL container gives O(1) average lookup?",
    "question_hi": "औसतन O(1) लुकअप कौन सा STL कंटेनर देता है?",
    "options_en": ["unordered_map", "map", "set", "vector"],
    "options_hi": ["unordered_map", "map", "set", "vector"],
    "answer_en": "unordered_map",
    "answer_hi": "unordered_map"
  },
  {
    "num": 28,
    "question_en": "Which operator is used to get address of variable?",
    "question_hi": "वेरिएबल का एड्रेस पाने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["&", "*", "%", "#"],
    "options_hi": ["&", "*", "%", "#"],
    "answer_en": "&",
    "answer_hi": "&"
  },
  {
    "num": 29,
    "question_en": "Which loop executes at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार चलता है?",
    "options_en": ["do-while", "for", "while", "foreach"],
    "options_hi": ["do-while", "for", "while", "foreach"],
    "answer_en": "do-while",
    "answer_hi": "do-while"
  },
  {
    "num": 30,
    "question_en": "Which keyword is used to exit a loop?",
    "question_hi": "लूप से बाहर निकलने के लिए कौन सा कीवर्ड है?",
    "options_en": ["break", "stop", "exit", "return"],
    "options_hi": ["break", "stop", "exit", "return"],
    "answer_en": "break",
    "answer_hi": "break"
  },

  {
    "num": 31,
    "question_en": "Which header supports multithreading?",
    "question_hi": "मल्टीथ्रेडिंग के लिए कौन सा हेडर है?",
    "options_en": ["<thread>", "<process>", "<task>", "<parallel>"],
    "options_hi": ["<thread>", "<process>", "<task>", "<parallel>"],
    "answer_en": "<thread>",
    "answer_hi": "<thread>"
  },
  {
    "num": 32,
    "question_en": "Which synchronization primitive is used with threads?",
    "question_hi": "थ्रेड के साथ कौन सा सिंक्रोनाइजेशन प्रिमिटिव उपयोग होता है?",
    "options_en": ["mutex", "lock", "gate", "signal"],
    "options_hi": ["mutex", "lock", "gate", "signal"],
    "answer_en": "mutex",
    "answer_hi": "mutex"
  },
  {
    "num": 33,
    "question_en": "Which algorithm is used to sort elements?",
    "question_hi": "एलिमेंट्स सॉर्ट करने के लिए कौन सा एल्गोरिद्म उपयोग होता है?",
    "options_en": ["sort", "order", "arrange", "sequence"],
    "options_hi": ["sort", "order", "arrange", "sequence"],
    "answer_en": "sort",
    "answer_hi": "sort"
  },
  {
    "num": 34,
    "question_en": "Which header supports assert?",
    "question_hi": "assert किस हेडर में होता है?",
    "options_en": ["<cassert>", "<assert>", "<check>", "<verify>"],
    "options_hi": ["<cassert>", "<assert>", "<check>", "<verify>"],
    "answer_en": "<cassert>",
    "answer_hi": "<cassert>"
  },
  {
    "num": 35,
    "question_en": "Which operator negates a boolean value?",
    "question_hi": "बूलियन वैल्यू को नेगेट करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["!", "~", "^", "not"],
    "options_hi": ["!", "~", "^", "not"],
    "answer_en": "!",
    "answer_hi": "!"
  },

  {
    "num": 36,
    "question_en": "Which container allows insertion at both ends?",
    "question_hi": "दोनों सिरों से इंसर्शन की अनुमति कौन सा कंटेनर देता है?",
    "options_en": ["deque", "queue", "stack", "vector"],
    "options_hi": ["deque", "queue", "stack", "vector"],
    "answer_en": "deque",
    "answer_hi": "deque"
  },
  {
    "num": 37,
    "question_en": "Which header supports regular expressions?",
    "question_hi": "रेगुलर एक्सप्रेशन के लिए कौन सा हेडर है?",
    "options_en": ["<regex>", "<pattern>", "<string>", "<re>"],
    "options_hi": ["<regex>", "<pattern>", "<string>", "<re>"],
    "answer_en": "<regex>",
    "answer_hi": "<regex>"
  },
  {
    "num": 38,
    "question_en": "Which keyword specifies constant expression?",
    "question_hi": "कॉन्स्टेंट एक्सप्रेशन बताने वाला कीवर्ड कौन सा है?",
    "options_en": ["constexpr", "const", "static", "final"],
    "options_hi": ["constexpr", "const", "static", "final"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr"
  },
  {
    "num": 39,
    "question_en": "Which header supports filesystem?",
    "question_hi": "filesystem किस हेडर में होता है?",
    "options_en": ["<filesystem>", "<file>", "<path>", "<fs>"],
    "options_hi": ["<filesystem>", "<file>", "<path>", "<fs>"],
    "answer_en": "<filesystem>",
    "answer_hi": "<filesystem>"
  },
  {
    "num": 40,
    "question_en": "Which keyword checks function overriding?",
    "question_hi": "फंक्शन ओवरराइडिंग चेक करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["override", "virtual", "final", "inline"],
    "options_hi": ["override", "virtual", "final", "inline"],
    "answer_en": "override",
    "answer_hi": "override"
  },

  {
    "num": 41,
    "question_en": "Which container stores elements contiguously?",
    "question_hi": "कंटिग्यूस मेमोरी में एलिमेंट्स कौन सा कंटेनर स्टोर करता है?",
    "options_en": ["vector", "list", "map", "set"],
    "options_hi": ["vector", "list", "map", "set"],
    "answer_en": "vector",
    "answer_hi": "vector"
  },
  {
    "num": 42,
    "question_en": "Which operator is used for array indexing?",
    "question_hi": "ऐरे इंडेक्सिंग के लिए कौन सा ऑपरेटर है?",
    "options_en": ["[]", "()", "{}", "<>"],
    "options_hi": ["[]", "()", "{}", "<>"],
    "answer_en": "[]",
    "answer_hi": "[]"
  },
  {
    "num": 43,
    "question_en": "Which keyword is used to jump to next iteration?",
    "question_hi": "अगली इटरेशन पर जाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["continue", "break", "next", "skip"],
    "options_hi": ["continue", "break", "next", "skip"],
    "answer_en": "continue",
    "answer_hi": "continue"
  },
  {
    "num": 44,
    "question_en": "Which header supports chrono library?",
    "question_hi": "chrono लाइब्रेरी किस हेडर में होती है?",
    "options_en": ["<chrono>", "<time>", "<clock>", "<ctime>"],
    "options_hi": ["<chrono>", "<time>", "<clock>", "<ctime>"],
    "answer_en": "<chrono>",
    "answer_hi": "<chrono>"
  },
  {
    "num": 45,
    "question_en": "Which macro gives current function name?",
    "question_hi": "वर्तमान फंक्शन का नाम बताने वाला मैक्रो कौन सा है?",
    "options_en": ["__func__", "__FUNCTION__", "__NAME__", "__FN__"],
    "options_hi": ["__func__", "__FUNCTION__", "__NAME__", "__FN__"],
    "answer_en": "__func__",
    "answer_hi": "__func__"
  },

  {
    "num": 46,
    "question_en": "Which keyword prevents variable optimization?",
    "question_hi": "वेरिएबल ऑप्टिमाइज़ेशन रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["volatile", "mutable", "static", "register"],
    "options_hi": ["volatile", "mutable", "static", "register"],
    "answer_en": "volatile",
    "answer_hi": "volatile"
  },
  {
    "num": 47,
    "question_en": "Which STL algorithm counts elements?",
    "question_hi": "एलिमेंट गिनने के लिए कौन सा STL एल्गोरिद्म है?",
    "options_en": ["count", "find", "search", "locate"],
    "options_hi": ["count", "find", "search", "locate"],
    "answer_en": "count",
    "answer_hi": "count"
  },
  {
    "num": 48,
    "question_en": "Which keyword is used to define namespace?",
    "question_hi": "namespace डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["namespace", "using", "scope", "package"],
    "options_hi": ["namespace", "using", "scope", "package"],
    "answer_en": "namespace",
    "answer_hi": "namespace"
  },
  {
    "num": 49,
    "question_en": "Which container allows duplicate keys?",
    "question_hi": "डुप्लिकेट कीज़ की अनुमति कौन सा कंटेनर देता है?",
    "options_en": ["multimap", "map", "set", "unordered_map"],
    "options_hi": ["multimap", "map", "set", "unordered_map"],
    "answer_en": "multimap",
    "answer_hi": "multimap"
  },
  {
    "num": 50,
    "question_en": "Which OOP concept helps in code reusability?",
    "question_hi": "कोड री-यूज़ेबिलिटी में कौन सा OOP कॉन्सेप्ट मदद करता है?",
    "options_en": ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    "options_hi": ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    "answer_en": "Inheritance",
    "answer_hi": "Inheritance"
  }
]

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