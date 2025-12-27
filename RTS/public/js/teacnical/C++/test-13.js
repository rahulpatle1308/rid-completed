const questions=[
  {
    "num": 1,
    "question_en": "Which file extension is used for C++ source files?",
    "question_hi": "C++ सोर्स फाइल के लिए कौन सा एक्सटेंशन उपयोग होता है?",
    "options_en": [".cpp", ".c", ".java", ".py"],
    "options_hi": [".cpp", ".c", ".java", ".py"],
    "answer_en": ".cpp",
    "answer_hi": ".cpp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which keyword is used to define a class?",
    "question_hi": "क्लास डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["class", "struct", "object", "define"],
    "options_hi": ["class", "struct", "object", "define"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which access specifier makes members accessible everywhere?",
    "question_hi": "कौन सा एक्सेस स्पेसिफायर हर जगह से एक्सेस देता है?",
    "options_en": ["public", "private", "protected", "static"],
    "options_hi": ["public", "private", "protected", "static"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which access specifier restricts access within the class only?",
    "question_hi": "कौन सा एक्सेस स्पेसिफायर केवल क्लास के अंदर एक्सेस देता है?",
    "options_en": ["private", "public", "protected", "global"],
    "options_hi": ["private", "public", "protected", "global"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to inherit a class?",
    "question_hi": "क्लास इनहेरिट करने के लिए कौन सा कीवर्ड है?",
    "options_en": [":", "extends", "inherits", "using"],
    "options_hi": [":", "extends", "inherits", "using"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which concept supports multiple forms of a function?",
    "question_hi": "एक फंक्शन के कई रूप होने को क्या कहते हैं?",
    "options_en": ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    "options_hi": ["पॉलीमॉर्फिज्म", "इनहेरिटेंस", "एनकैप्सुलेशन", "एब्स्ट्रैक्शन"],
    "answer_en": "Polymorphism",
    "answer_hi": "पॉलीमॉर्फिज्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which polymorphism occurs at compile time?",
    "question_hi": "कम्पाइल टाइम पर कौन सा पॉलीमॉर्फिज्म होता है?",
    "options_en": ["Static", "Dynamic", "Runtime", "Late"],
    "options_hi": ["स्टैटिक", "डायनामिक", "रनटाइम", "लेट"],
    "answer_en": "Static",
    "answer_hi": "स्टैटिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to define a destructor?",
    "question_hi": "डिस्ट्रक्टर डिफाइन करने के लिए कौन सा चिन्ह होता है?",
    "options_en": ["~", "!", "#", "$"],
    "options_hi": ["~", "!", "#", "$"],
    "answer_en": "~",
    "answer_hi": "~",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is automatically called when object is created?",
    "question_hi": "ऑब्जेक्ट बनते ही कौन सा फंक्शन अपने आप कॉल होता है?",
    "options_en": ["Constructor", "Destructor", "Main", "Init"],
    "options_hi": ["कन्स्ट्रक्टर", "डिस्ट्रक्टर", "मेन", "इनिट"],
    "answer_en": "Constructor",
    "answer_hi": "कन्स्ट्रक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword avoids name conflicts?",
    "question_hi": "नेम कॉन्फ्लिक्ट से बचने के लिए कौन सा फीचर है?",
    "options_en": ["namespace", "scope", "class", "header"],
    "options_hi": ["नेमस्पेस", "स्कोप", "क्लास", "हेडर"],
    "answer_en": "namespace",
    "answer_hi": "नेमस्पेस",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which operator is used to allocate memory dynamically?",
    "question_hi": "डायनामिक मेमोरी अलोकेशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which operator releases dynamically allocated memory?",
    "question_hi": "डायनामिक अलोकेटेड मेमोरी रिलीज करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword makes a variable unchangeable?",
    "question_hi": "वेरिएबल को न बदलने योग्य कौन सा कीवर्ड बनाता है?",
    "options_en": ["const", "static", "final", "fixed"],
    "options_hi": ["const", "static", "final", "fixed"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which loop is best when iterations are known?",
    "question_hi": "जब इटरेशन पहले से पता हो तब कौन सा लूप सही है?",
    "options_en": ["for", "while", "do-while", "switch"],
    "options_hi": ["for", "while", "do-while", "switch"],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which loop executes at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार जरूर चलता है?",
    "options_en": ["do-while", "for", "while", "if"],
    "options_hi": ["do-while", "for", "while", "if"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which operator is used for address of a variable?",
    "question_hi": "वेरिएबल का एड्रेस पाने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["&", "*", "->", "%"],
    "options_hi": ["&", "*", "->", "%"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which operator is used to dereference a pointer?",
    "question_hi": "पॉइंटर को डिरेफरेंस करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["*", "&", "::", "->"],
    "options_hi": ["*", "&", "::", "->"],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which STL container works on FIFO principle?",
    "question_hi": "FIFO सिद्धांत पर काम करने वाला STL कंटेनर कौन सा है?",
    "options_en": ["queue", "stack", "vector", "set"],
    "options_hi": ["queue", "stack", "vector", "set"],
    "answer_en": "queue",
    "answer_hi": "queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which STL container works on LIFO principle?",
    "question_hi": "LIFO सिद्धांत पर काम करने वाला कंटेनर कौन सा है?",
    "options_en": ["stack", "queue", "list", "map"],
    "options_hi": ["stack", "queue", "list", "map"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which header file is required for STL containers?",
    "question_hi": "STL कंटेनर्स के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["<vector>", "<stl>", "<container>", "<library>"],
    "options_hi": ["<vector>", "<stl>", "<container>", "<library>"],
    "answer_en": "<vector>",
    "answer_hi": "<vector>",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword allows a function to be overridden?",
    "question_hi": "फंक्शन को ओवरराइड करने के लिए कौन सा कीवर्ड होता है?",
    "options_en": ["virtual", "override", "dynamic", "final"],
    "options_hi": ["virtual", "override", "dynamic", "final"],
    "answer_en": "virtual",
    "answer_hi": "virtual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword stops overriding?",
    "question_hi": "ओवरराइडिंग रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "const", "static", "sealed"],
    "options_hi": ["final", "const", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword is used for exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "check", "error", "handle"],
    "options_hi": ["try", "check", "error", "handle"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which block executes after exception is caught?",
    "question_hi": "एक्सेप्शन पकड़ने के बाद कौन सा ब्लॉक चलता है?",
    "options_en": ["catch", "throw", "try", "final"],
    "options_hi": ["catch", "throw", "try", "final"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword generates exception?",
    "question_hi": "एक्सेप्शन पैदा करने वाला कीवर्ड कौन सा है?",
    "options_en": ["throw", "throws", "error", "raise"],
    "options_hi": ["throw", "throws", "error", "raise"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which feature supports generic code?",
    "question_hi": "जेनेरिक कोड सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["Templates", "Macros", "Classes", "Functions"],
    "options_hi": ["टेम्पलेट्स", "मैक्रोज़", "क्लासेस", "फंक्शन्स"],
    "answer_en": "Templates",
    "answer_hi": "टेम्पलेट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword defines template parameter?",
    "question_hi": "टेम्पलेट पैरामीटर डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["typename", "template", "class", "type"],
    "options_hi": ["typename", "template", "class", "type"],
    "answer_en": "typename",
    "answer_hi": "typename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which pointer allows only one owner?",
    "question_hi": "सिर्फ एक ओनर की अनुमति देने वाला पॉइंटर कौन सा है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which pointer observes shared pointer without ownership?",
    "question_hi": "शेयर्ड पॉइंटर को बिना ओनरशिप देखने वाला पॉइंटर कौन सा है?",
    "options_en": ["weak_ptr", "shared_ptr", "unique_ptr", "raw pointer"],
    "options_hi": ["weak_ptr", "shared_ptr", "unique_ptr", "raw pointer"],
    "answer_en": "weak_ptr",
    "answer_hi": "weak_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword allows automatic type deduction?",
    "question_hi": "ऑटोमैटिक टाइप डिडक्शन के लिए कौन सा कीवर्ड है?",
    "options_en": ["auto", "var", "let", "type"],
    "options_hi": ["auto", "var", "let", "type"],
    "answer_en": "auto",
    "answer_hi": "auto",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which C++ standard introduced lambda expressions?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन किस C++ वर्ज़न में आए?",
    "options_en": ["C++11", "C++98", "C++03", "C++17"],
    "options_hi": ["C++11", "C++98", "C++03", "C++17"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which symbol is used in lambda expression?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन में कौन सा चिन्ह होता है?",
    "options_en": ["[]", "{}", "()", "<>"],
    "options_hi": ["[]", "{}", "()", "<>"],
    "answer_en": "[]",
    "answer_hi": "[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword prevents copying of object?",
    "question_hi": "ऑब्जेक्ट कॉपी रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["delete", "remove", "disable", "final"],
    "options_hi": ["delete", "remove", "disable", "final"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword forces inline expansion?",
    "question_hi": "इनलाइन एक्सपैंशन को मजबूर करने वाला कीवर्ड कौन सा है?",
    "options_en": ["inline", "register", "static", "auto"],
    "options_hi": ["inline", "register", "static", "auto"],
    "answer_en": "inline",
    "answer_hi": "inline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which operator resolves scope?",
    "question_hi": "स्कोप रेज़ोल्व करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["::", ".", "->", "*"],
    "options_hi": ["::", ".", "->", "*"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which container keeps elements sorted automatically?",
    "question_hi": "कौन सा कंटेनर एलिमेंट्स को अपने आप सॉर्ट रखता है?",
    "options_en": ["set", "vector", "list", "deque"],
    "options_hi": ["set", "vector", "list", "deque"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which container allows key-value pairs with duplicates?",
    "question_hi": "डुप्लिकेट की-वैल्यू की अनुमति देने वाला कंटेनर कौन सा है?",
    "options_en": ["multimap", "map", "unordered_map", "pair"],
    "options_hi": ["multimap", "map", "unordered_map", "pair"],
    "answer_en": "multimap",
    "answer_hi": "multimap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which container provides fastest random access?",
    "question_hi": "सबसे तेज़ रैंडम एक्सेस कौन सा कंटेनर देता है?",
    "options_en": ["vector", "list", "queue", "stack"],
    "options_hi": ["vector", "list", "queue", "stack"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which keyword is used for global variable sharing?",
    "question_hi": "ग्लोबल वेरिएबल शेयर करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["extern", "static", "global", "public"],
    "options_hi": ["extern", "static", "global", "public"],
    "answer_en": "extern",
    "answer_hi": "extern",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which header file supports file output?",
    "question_hi": "फाइल आउटपुट के लिए कौन सी हेडर फाइल है?",
    "options_en": ["<ofstream>", "<fstream>", "<iostream>", "<stdio.h>"],
    "options_hi": ["<ofstream>", "<fstream>", "<iostream>", "<stdio.h>"],
    "answer_en": "<fstream>",
    "answer_hi": "<fstream>",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which function terminates a program immediately?",
    "question_hi": "प्रोग्राम को तुरंत खत्म करने वाला फंक्शन कौन सा है?",
    "options_en": ["exit()", "stop()", "end()", "terminate()"],
    "options_hi": ["exit()", "stop()", "end()", "terminate()"],
    "answer_en": "exit()",
    "answer_hi": "exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which operator performs logical NOT?",
    "question_hi": "लॉजिकल NOT ऑपरेटर कौन सा है?",
    "options_en": ["!", "~", "^", "not"],
    "options_hi": ["!", "~", "^", "not"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which operator performs bitwise AND?",
    "question_hi": "बिटवाइज़ AND ऑपरेटर कौन सा है?",
    "options_en": ["&", "&&", "|", "^"],
    "options_hi": ["&", "&&", "|", "^"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which operator shifts bits left?",
    "question_hi": "बिट्स को लेफ्ट शिफ्ट करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["<<", ">>", "<", ">"],
    "options_hi": ["<<", ">>", "<", ">"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which operator shifts bits right?",
    "question_hi": "बिट्स को राइट शिफ्ट करने वाला ऑपरेटर कौन सा है?",
    "options_en": [">>", "<<", ">", "<"],
    "options_hi": [">>", "<<", ">", "<"],
    "answer_en": ">>",
    "answer_hi": ">>",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword is used to include header files?",
    "question_hi": "हेडर फाइल शामिल करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["#include", "import", "using", "require"],
    "options_hi": ["#include", "import", "using", "require"],
    "answer_en": "#include",
    "answer_hi": "#include",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which macro prints current line number?",
    "question_hi": "करेंट लाइन नंबर प्रिंट करने वाला मैक्रो कौन सा है?",
    "options_en": ["__LINE__", "__FILE__", "__DATE__", "__TIME__"],
    "options_hi": ["__LINE__", "__FILE__", "__DATE__", "__TIME__"],
    "answer_en": "__LINE__",
    "answer_hi": "__LINE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which macro prints current file name?",
    "question_hi": "करेंट फाइल नाम प्रिंट करने वाला मैक्रो कौन सा है?",
    "options_en": ["__FILE__", "__LINE__", "__DATE__", "__TIME__"],
    "options_hi": ["__FILE__", "__LINE__", "__DATE__", "__TIME__"],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which macro prints compilation date?",
    "question_hi": "कम्पाइल होने की तारीख बताने वाला मैक्रो कौन सा है?",
    "options_en": ["__DATE__", "__TIME__", "__FILE__", "__LINE__"],
    "options_hi": ["__DATE__", "__TIME__", "__FILE__", "__LINE__"],
    "answer_en": "__DATE__",
    "answer_hi": "__DATE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which macro prints compilation time?",
    "question_hi": "कम्पाइल होने का समय बताने वाला मैक्रो कौन सा है?",
    "options_en": ["__TIME__", "__DATE__", "__FILE__", "__LINE__"],
    "options_hi": ["__TIME__", "__DATE__", "__FILE__", "__LINE__"],
    "answer_en": "__TIME__",
    "answer_hi": "__TIME__",
    "attempted": false,
    "selected": ""
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