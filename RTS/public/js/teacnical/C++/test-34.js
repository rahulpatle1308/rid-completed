const questions= [
  {
    "num": 1,
    "question_en": "C++ is an extension of which language?",
    "question_hi": "C++ किस भाषा का एक्सटेंशन है?",
    "options_en": ["C", "Java", "Python", "Pascal"],
    "options_hi": ["C", "Java", "Python", "Pascal"],
    "answer_en": "C",
    "answer_hi": "C"
  },
  {
    "num": 2,
    "question_en": "Which symbol is used to include a header file?",
    "question_hi": "हेडर फाइल शामिल करने के लिए किस सिंबल का उपयोग होता है?",
    "options_en": ["#", "@", "$", "%"],
    "options_hi": ["#", "@", "$", "%"],
    "answer_en": "#",
    "answer_hi": "#"
  },
  {
    "num": 3,
    "question_en": "Which keyword defines a class in C++?",
    "question_hi": "C++ में क्लास डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["class", "struct", "object", "define"],
    "options_hi": ["class", "struct", "object", "define"],
    "answer_en": "class",
    "answer_hi": "class"
  },
  {
    "num": 4,
    "question_en": "Which access specifier makes members private by default?",
    "question_hi": "किसमें मेंबर्स डिफ़ॉल्ट रूप से प्राइवेट होते हैं?",
    "options_en": ["class", "struct", "union", "enum"],
    "options_hi": ["class", "struct", "union", "enum"],
    "answer_en": "class",
    "answer_hi": "class"
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to define a macro?",
    "question_hi": "मैक्रो डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["#define", "macro", "const", "typedef"],
    "options_hi": ["#define", "macro", "const", "typedef"],
    "answer_en": "#define",
    "answer_hi": "#define"
  },

  {
    "num": 6,
    "question_en": "Which operator is used to allocate memory dynamically?",
    "question_hi": "डायनामिक मेमोरी अलोकेशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new"
  },
  {
    "num": 7,
    "question_en": "Which operator is used to deallocate memory?",
    "question_hi": "मेमोरी डीलोकेट करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete"
  },
  {
    "num": 8,
    "question_en": "Which concept allows using one interface for different data types?",
    "question_hi": "विभिन्न डेटा टाइप के लिए एक इंटरफेस उपयोग करने की सुविधा कौन सी है?",
    "options_en": ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    "options_hi": ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism"
  },
  {
    "num": 9,
    "question_en": "Which keyword is used for compile-time polymorphism?",
    "question_hi": "कम्पाइल-टाइम पॉलीमॉर्फिज़्म के लिए कौन सा उपयोग होता है?",
    "options_en": ["template", "virtual", "override", "dynamic"],
    "options_hi": ["template", "virtual", "override", "dynamic"],
    "answer_en": "template",
    "answer_hi": "template"
  },
  {
    "num": 10,
    "question_en": "Which keyword is used to define a virtual function?",
    "question_hi": "वर्चुअल फंक्शन डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["virtual", "override", "final", "static"],
    "options_hi": ["virtual", "override", "final", "static"],
    "answer_en": "virtual",
    "answer_hi": "virtual"
  },

  {
    "num": 11,
    "question_en": "Which header file supports input/output streams?",
    "question_hi": "इनपुट/आउटपुट स्ट्रीम के लिए कौन सा हेडर है?",
    "options_en": ["<iostream>", "<stdio.h>", "<stream>", "<io>"],
    "options_hi": ["<iostream>", "<stdio.h>", "<stream>", "<io>"],
    "answer_en": "<iostream>",
    "answer_hi": "<iostream>"
  },
  {
    "num": 12,
    "question_en": "Which STL container does not allow duplicate values?",
    "question_hi": "कौन सा STL कंटेनर डुप्लिकेट वैल्यू की अनुमति नहीं देता?",
    "options_en": ["set", "vector", "list", "deque"],
    "options_hi": ["set", "vector", "list", "deque"],
    "answer_en": "set",
    "answer_hi": "set"
  },
  {
    "num": 13,
    "question_en": "Which container stores elements sequentially?",
    "question_hi": "एलिमेंट्स को क्रमबद्ध रूप से कौन सा कंटेनर स्टोर करता है?",
    "options_en": ["vector", "map", "set", "unordered_map"],
    "options_hi": ["vector", "map", "set", "unordered_map"],
    "answer_en": "vector",
    "answer_hi": "vector"
  },
  {
    "num": 14,
    "question_en": "Which STL container is based on hashing?",
    "question_hi": "हैशिंग पर आधारित STL कंटेनर कौन सा है?",
    "options_en": ["unordered_map", "map", "set", "list"],
    "options_hi": ["unordered_map", "map", "set", "list"],
    "answer_en": "unordered_map",
    "answer_hi": "unordered_map"
  },
  {
    "num": 15,
    "question_en": "Which loop is best when number of iterations is known?",
    "question_hi": "जब इटरेशन की संख्या पता हो तब कौन सा लूप बेहतर है?",
    "options_en": ["for", "while", "do-while", "foreach"],
    "options_hi": ["for", "while", "do-while", "foreach"],
    "answer_en": "for",
    "answer_hi": "for"
  },

  {
    "num": 16,
    "question_en": "Which loop checks condition after executing body?",
    "question_hi": "कौन सा लूप बॉडी एक्सीक्यूट करने के बाद कंडीशन चेक करता है?",
    "options_en": ["do-while", "while", "for", "if"],
    "options_hi": ["do-while", "while", "for", "if"],
    "answer_en": "do-while",
    "answer_hi": "do-while"
  },
  {
    "num": 17,
    "question_en": "Which keyword is used to handle exceptions?",
    "question_hi": "एक्सेप्शन हैंडल करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "throw", "catch", "All of these"],
    "options_hi": ["try", "throw", "catch", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी"
  },
  {
    "num": 18,
    "question_en": "Which keyword explicitly throws an exception?",
    "question_hi": "एक्सेप्शन फेंकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["throw", "try", "catch", "error"],
    "options_hi": ["throw", "try", "catch", "error"],
    "answer_en": "throw",
    "answer_hi": "throw"
  },
  {
    "num": 19,
    "question_en": "Which header is required for exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग के लिए कौन सा हेडर आवश्यक है?",
    "options_en": ["<exception>", "<error>", "<stdexcept>", "<assert>"],
    "options_hi": ["<exception>", "<error>", "<stdexcept>", "<assert>"],
    "answer_en": "<exception>",
    "answer_hi": "<exception>"
  },
  {
    "num": 20,
    "question_en": "Which keyword is used to define constant expressions?",
    "question_hi": "कॉन्स्टेंट एक्सप्रेशन डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["constexpr", "const", "define", "static"],
    "options_hi": ["constexpr", "const", "define", "static"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr"
  },

  {
    "num": 21,
    "question_en": "Which header supports smart pointers?",
    "question_hi": "स्मार्ट पॉइंटर्स के लिए कौन सा हेडर है?",
    "options_en": ["<memory>", "<pointer>", "<smart>", "<util>"],
    "options_hi": ["<memory>", "<pointer>", "<smart>", "<util>"],
    "answer_en": "<memory>",
    "answer_hi": "<memory>"
  },
  {
    "num": 22,
    "question_en": "Which smart pointer has exclusive ownership?",
    "question_hi": "एक्सक्लूसिव ओनरशिप वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr"
  },
  {
    "num": 23,
    "question_en": "Which smart pointer does not increase reference count?",
    "question_hi": "कौन सा स्मार्ट पॉइंटर रेफरेंस काउंट नहीं बढ़ाता?",
    "options_en": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "options_hi": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "answer_en": "weak_ptr",
    "answer_hi": "weak_ptr"
  },
  {
    "num": 24,
    "question_en": "Which keyword is used to infer variable type?",
    "question_hi": "वेरिएबल का टाइप अपने आप पता करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["auto", "var", "let", "type"],
    "options_hi": ["auto", "var", "let", "type"],
    "answer_en": "auto",
    "answer_hi": "auto"
  },
  {
    "num": 25,
    "question_en": "Which operator accesses class members using object?",
    "question_hi": "ऑब्जेक्ट के द्वारा क्लास मेंबर एक्सेस करने वाला ऑपरेटर कौन सा है?",
    "options_en": [".", "->", "::", "*"],
    "options_hi": [".", "->", "::", "*"],
    "answer_en": ".",
    "answer_hi": "."
  },

  {
    "num": 26,
    "question_en": "Which operator accesses class members using pointer?",
    "question_hi": "पॉइंटर के द्वारा क्लास मेंबर एक्सेस करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["->", ".", "::", "*"],
    "options_hi": ["->", ".", "::", "*"],
    "answer_en": "->",
    "answer_hi": "->"
  },
  {
    "num": 27,
    "question_en": "Which keyword is used to access global variables?",
    "question_hi": "ग्लोबल वेरिएबल एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["::", ".", "->", ":"],
    "options_hi": ["::", ".", "->", ":"],
    "answer_en": "::",
    "answer_hi": "::"
  },
  {
    "num": 28,
    "question_en": "Which keyword avoids function name conflicts?",
    "question_hi": "फंक्शन नाम कॉन्फ्लिक्ट से बचाने के लिए कौन सा उपयोग होता है?",
    "options_en": ["namespace", "scope", "module", "package"],
    "options_hi": ["namespace", "scope", "module", "package"],
    "answer_en": "namespace",
    "answer_hi": "namespace"
  },
  {
    "num": 29,
    "question_en": "Which header supports multithreading?",
    "question_hi": "मल्टीथ्रेडिंग के लिए कौन सा हेडर है?",
    "options_en": ["<thread>", "<mutex>", "<atomic>", "<future>"],
    "options_hi": ["<thread>", "<mutex>", "<atomic>", "<future>"],
    "answer_en": "<thread>",
    "answer_hi": "<thread>"
  },
  {
    "num": 30,
    "question_en": "Which synchronization primitive is used to avoid race condition?",
    "question_hi": "रेस कंडीशन से बचने के लिए कौन सा उपयोग होता है?",
    "options_en": ["mutex", "thread", "atomic", "future"],
    "options_hi": ["mutex", "thread", "atomic", "future"],
    "answer_en": "mutex",
    "answer_hi": "mutex"
  },

  {
    "num": 31,
    "question_en": "Which header supports atomic operations?",
    "question_hi": "एटॉमिक ऑपरेशन के लिए कौन सा हेडर है?",
    "options_en": ["<atomic>", "<thread>", "<mutex>", "<future>"],
    "options_hi": ["<atomic>", "<thread>", "<mutex>", "<future>"],
    "answer_en": "<atomic>",
    "answer_hi": "<atomic>"
  },
  {
    "num": 32,
    "question_en": "Which STL algorithm finds an element?",
    "question_hi": "एलिमेंट खोजने के लिए कौन सा STL एल्गोरिद्म है?",
    "options_en": ["find", "search", "count", "locate"],
    "options_hi": ["find", "search", "count", "locate"],
    "answer_en": "find",
    "answer_hi": "find"
  },
  {
    "num": 33,
    "question_en": "Which STL algorithm counts elements?",
    "question_hi": "एलिमेंट गिनने के लिए कौन सा STL एल्गोरिद्म है?",
    "options_en": ["count", "find", "sort", "copy"],
    "options_hi": ["count", "find", "sort", "copy"],
    "answer_en": "count",
    "answer_hi": "count"
  },
  {
    "num": 34,
    "question_en": "Which header supports STL algorithms?",
    "question_hi": "STL एल्गोरिद्म के लिए कौन सा हेडर है?",
    "options_en": ["<algorithm>", "<numeric>", "<iterator>", "<utility>"],
    "options_hi": ["<algorithm>", "<numeric>", "<iterator>", "<utility>"],
    "answer_en": "<algorithm>",
    "answer_hi": "<algorithm>"
  },
  {
    "num": 35,
    "question_en": "Which container allows insertion at both ends?",
    "question_hi": "दोनों सिरों से इंसर्शन की अनुमति कौन सा कंटेनर देता है?",
    "options_en": ["deque", "vector", "list", "queue"],
    "options_hi": ["deque", "vector", "list", "queue"],
    "answer_en": "deque",
    "answer_hi": "deque"
  },

  {
    "num": 36,
    "question_en": "Which container is best for frequent insertions in middle?",
    "question_hi": "बीच में बार-बार इंसर्शन के लिए कौन सा कंटेनर बेहतर है?",
    "options_en": ["list", "vector", "array", "deque"],
    "options_hi": ["list", "vector", "array", "deque"],
    "answer_en": "list",
    "answer_hi": "list"
  },
  {
    "num": 37,
    "question_en": "Which keyword allows modification in const object?",
    "question_hi": "const ऑब्जेक्ट में बदलाव की अनुमति कौन सा कीवर्ड देता है?",
    "options_en": ["mutable", "volatile", "static", "register"],
    "options_hi": ["mutable", "volatile", "static", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable"
  },
  {
    "num": 38,
    "question_en": "Which keyword prevents inheritance?",
    "question_hi": "इनहेरिटेंस रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "const", "static", "sealed"],
    "options_hi": ["final", "const", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final"
  },
  {
    "num": 39,
    "question_en": "Which header supports file handling?",
    "question_hi": "फाइल हैंडलिंग के लिए कौन सा हेडर है?",
    "options_en": ["<fstream>", "<file>", "<io>", "<stream>"],
    "options_hi": ["<fstream>", "<file>", "<io>", "<stream>"],
    "answer_en": "<fstream>",
    "answer_hi": "<fstream>"
  },
  {
    "num": 40,
    "question_en": "Which operator is used to get address of variable?",
    "question_hi": "वेरिएबल का एड्रेस पाने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["&", "*", "%", "#"],
    "options_hi": ["&", "*", "%", "#"],
    "answer_en": "&",
    "answer_hi": "&"
  },

  {
    "num": 41,
    "question_en": "Which operator dereferences a pointer?",
    "question_hi": "पॉइंटर को डीरेफरेंस करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["*", "&", "->", "."],
    "options_hi": ["*", "&", "->", "."],
    "answer_en": "*",
    "answer_hi": "*"
  },
  {
    "num": 42,
    "question_en": "Which keyword stops compiler optimization?",
    "question_hi": "कम्पाइलर ऑप्टिमाइज़ेशन रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["volatile", "mutable", "static", "register"],
    "options_hi": ["volatile", "mutable", "static", "register"],
    "answer_en": "volatile",
    "answer_hi": "volatile"
  },
  {
    "num": 43,
    "question_en": "Which macro gives current line number?",
    "question_hi": "वर्तमान लाइन नंबर बताने वाला मैक्रो कौन सा है?",
    "options_en": ["__LINE__", "__FILE__", "__DATE__", "__TIME__"],
    "options_hi": ["__LINE__", "__FILE__", "__DATE__", "__TIME__"],
    "answer_en": "__LINE__",
    "answer_hi": "__LINE__"
  },
  {
    "num": 44,
    "question_en": "Which macro gives file name?",
    "question_hi": "फाइल का नाम बताने वाला मैक्रो कौन सा है?",
    "options_en": ["__FILE__", "__LINE__", "__FUNC__", "__DATE__"],
    "options_hi": ["__FILE__", "__LINE__", "__FUNC__", "__DATE__"],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__"
  },
  {
    "num": 45,
    "question_en": "Which macro gives current function name?",
    "question_hi": "वर्तमान फंक्शन का नाम बताने वाला मैक्रो कौन सा है?",
    "options_en": ["__func__", "__FUNCTION__", "__FN__", "__METHOD__"],
    "options_hi": ["__func__", "__FUNCTION__", "__FN__", "__METHOD__"],
    "answer_en": "__func__",
    "answer_hi": "__func__"
  },

  {
    "num": 46,
    "question_en": "Which operator is used for logical AND?",
    "question_hi": "लॉजिकल AND के लिए कौन सा ऑपरेटर है?",
    "options_en": ["&&", "&", "and", "*"],
    "options_hi": ["&&", "&", "and", "*"],
    "answer_en": "&&",
    "answer_hi": "&&"
  },
  {
    "num": 47,
    "question_en": "Which operator is used for logical OR?",
    "question_hi": "लॉजिकल OR के लिए कौन सा ऑपरेटर है?",
    "options_en": ["||", "|", "or", "+"],
    "options_hi": ["||", "|", "or", "+"],
    "answer_en": "||",
    "answer_hi": "||"
  },
  {
    "num": 48,
    "question_en": "Which operator negates a boolean value?",
    "question_hi": "बूलियन वैल्यू को उल्टा करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["!", "~", "^", "not"],
    "options_hi": ["!", "~", "^", "not"],
    "answer_en": "!",
    "answer_hi": "!"
  },
  {
    "num": 49,
    "question_en": "Which OOP concept hides implementation details?",
    "question_hi": "इम्प्लीमेंटेशन डिटेल्स छुपाने वाला OOP कॉन्सेप्ट कौन सा है?",
    "options_en": ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    "options_hi": ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    "answer_en": "Abstraction",
    "answer_hi": "Abstraction"
  },
  {
    "num": 50,
    "question_en": "Which OOP concept allows code reuse?",
    "question_hi": "कोड री-यूज़ की सुविधा कौन सा OOP कॉन्सेप्ट देता है?",
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