const questions = [
  {
    "num": 1,
    "question_en": "Who developed C++?",
    "question_hi": "C++ किसने डेवलप की?",
    "options_en": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    "options_hi": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    "answer_en": "Bjarne Stroustrup",
    "answer_hi": "Bjarne Stroustrup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "C++ is an extension of which language?",
    "question_hi": "C++ किस भाषा का एक्सटेंशन है?",
    "options_en": ["C", "Java", "Python", "Pascal"],
    "options_hi": ["C", "Java", "Python", "Pascal"],
    "answer_en": "C",
    "answer_hi": "C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which file extension is used for C++ programs?",
    "question_hi": "C++ प्रोग्राम के लिए कौन सा एक्सटेंशन होता है?",
    "options_en": [".cpp", ".c", ".java", ".py"],
    "options_hi": [".cpp", ".c", ".java", ".py"],
    "answer_en": ".cpp",
    "answer_hi": ".cpp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which header file is used for input/output?",
    "question_hi": "इनपुट/आउटपुट के लिए कौन सी हेडर फाइल उपयोग होती है?",
    "options_en": ["<iostream>", "<stdio.h>", "<math.h>", "<string.h>"],
    "options_hi": ["<iostream>", "<stdio.h>", "<math.h>", "<string.h>"],
    "answer_en": "<iostream>",
    "answer_hi": "<iostream>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which symbol ends a statement in C++?",
    "question_hi": "C++ में स्टेटमेंट खत्म करने के लिए कौन सा चिन्ह है?",
    "options_en": [";", ":", ".", ","],
    "options_hi": [";", ":", ".", ","],
    "answer_en": ";",
    "answer_hi": ";",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which function is the entry point of a C++ program?",
    "question_hi": "C++ प्रोग्राम का एंट्री पॉइंट कौन सा फंक्शन है?",
    "options_en": ["main()", "start()", "run()", "init()"],
    "options_hi": ["main()", "start()", "run()", "init()"],
    "answer_en": "main()",
    "answer_hi": "main()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
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
    "num": 8,
    "question_en": "Which operator is used for output?",
    "question_hi": "आउटपुट के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["<<", ">>", "=", "=="],
    "options_hi": ["<<", ">>", "=", "=="],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which operator is used for input?",
    "question_hi": "इनपुट के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["<<", ">>", "=", "!="],
    "options_hi": ["<<", ">>", "=", "!="],
    "answer_en": ">>",
    "answer_hi": ">>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which loop executes at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार जरूर चलता है?",
    "options_en": ["do-while", "while", "for", "foreach"],
    "options_hi": ["do-while", "while", "for", "foreach"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to declare constant?",
    "question_hi": "कॉनस्टेंट डिक्लेयर करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["const", "static", "final", "define"],
    "options_hi": ["const", "static", "final", "define"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which concept supports function overloading?",
    "question_hi": "फंक्शन ओवरलोडिंग किस कॉन्सेप्ट से होती है?",
    "options_en": ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    "options_hi": ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which access specifier is default in class?",
    "question_hi": "क्लास में डिफॉल्ट एक्सेस स्पेसिफायर कौन सा है?",
    "options_en": ["private", "public", "protected", "static"],
    "options_hi": ["private", "public", "protected", "static"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used for inheritance?",
    "question_hi": "इनहेरिटेंस के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": [":", "extends", "inherits", "implements"],
    "options_hi": [":", "extends", "inherits", "implements"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is called when object is created?",
    "question_hi": "ऑब्जेक्ट बनने पर कौन सा फंक्शन कॉल होता है?",
    "options_en": ["Constructor", "Destructor", "Virtual", "Main"],
    "options_hi": ["Constructor", "Destructor", "Virtual", "Main"],
    "answer_en": "Constructor",
    "answer_hi": "Constructor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which function is called when object is destroyed?",
    "question_hi": "ऑब्जेक्ट खत्म होने पर कौन सा फंक्शन कॉल होता है?",
    "options_en": ["Destructor", "Constructor", "Delete", "Free"],
    "options_hi": ["Destructor", "Constructor", "Delete", "Free"],
    "answer_en": "Destructor",
    "answer_hi": "Destructor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which operator is used to access class members?",
    "question_hi": "क्लास मेंबर एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": [".", "->", "::", "*"],
    "options_hi": [".", "->", "::", "*"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which memory allocation occurs at runtime?",
    "question_hi": "रनटाइम पर कौन सा मेमोरी अलोकेशन होता है?",
    "options_en": ["Dynamic", "Static", "Global", "Compile-time"],
    "options_hi": ["Dynamic", "Static", "Global", "Compile-time"],
    "answer_en": "Dynamic",
    "answer_hi": "Dynamic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword allocates memory dynamically?",
    "question_hi": "डायनामिक मेमोरी अलोकेशन के लिए कौन सा कीवर्ड है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword frees allocated memory?",
    "question_hi": "अलोकेट की गई मेमोरी फ्री करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which feature supports runtime polymorphism?",
    "question_hi": "रनटाइम पॉलीमॉर्फिज्म किससे होता है?",
    "options_en": ["Virtual function", "Inline function", "Constructor", "Macro"],
    "options_hi": ["Virtual function", "Inline function", "Constructor", "Macro"],
    "answer_en": "Virtual function",
    "answer_hi": "Virtual function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which operator cannot be overloaded?",
    "question_hi": "कौन सा ऑपरेटर ओवरलोड नहीं किया जा सकता?",
    "options_en": ["::", "+", "[]", "*"],
    "options_hi": ["::", "+", "[]", "*"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which STL container stores unique elements?",
    "question_hi": "कौन सा STL कंटेनर यूनिक एलिमेंट स्टोर करता है?",
    "options_en": ["set", "vector", "list", "array"],
    "options_hi": ["set", "vector", "list", "array"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which STL container works on FIFO?",
    "question_hi": "FIFO पर काम करने वाला कंटेनर कौन सा है?",
    "options_en": ["queue", "stack", "vector", "map"],
    "options_hi": ["queue", "stack", "vector", "map"],
    "answer_en": "queue",
    "answer_hi": "queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which STL container works on LIFO?",
    "question_hi": "LIFO पर काम करने वाला कंटेनर कौन सा है?",
    "options_en": ["stack", "queue", "list", "set"],
    "options_hi": ["stack", "queue", "list", "set"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword is used for exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "catch", "throw", "All of these"],
    "options_hi": ["try", "catch", "throw", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword avoids name conflicts?",
    "question_hi": "नेम कन्फ्लिक्ट से बचने के लिए कौन सा कीवर्ड है?",
    "options_en": ["namespace", "using", "scope", "define"],
    "options_hi": ["namespace", "using", "scope", "define"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which operator is used with namespace?",
    "question_hi": "नेमस्पेस के साथ कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["::", ".", "->", "*"],
    "options_hi": ["::", ".", "->", "*"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which pointer stores address of another pointer?",
    "question_hi": "कौन सा पॉइंटर दूसरे पॉइंटर का एड्रेस रखता है?",
    "options_en": ["Double pointer", "Null pointer", "Void pointer", "Wild pointer"],
    "options_hi": ["डबल पॉइंटर", "नल पॉइंटर", "वॉइड पॉइंटर", "वाइल्ड पॉइंटर"],
    "answer_en": "Double pointer",
    "answer_hi": "डबल पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which pointer has no valid address?",
    "question_hi": "किस पॉइंटर के पास कोई वैध एड्रेस नहीं होता?",
    "options_en": ["Null pointer", "Void pointer", "Wild pointer", "Smart pointer"],
    "options_hi": ["नल पॉइंटर", "वॉइड पॉइंटर", "वाइल्ड पॉइंटर", "स्मार्ट पॉइंटर"],
    "answer_en": "Null pointer",
    "answer_hi": "नल पॉइंटर",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which container stores key-value pairs?",
    "question_hi": "कौन सा कंटेनर key-value पेयर स्टोर करता है?",
    "options_en": ["map", "vector", "list", "stack"],
    "options_hi": ["map", "vector", "list", "stack"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which function sorts STL containers?",
    "question_hi": "STL कंटेनर को सॉर्ट करने के लिए कौन सा फंक्शन है?",
    "options_en": ["sort()", "order()", "arrange()", "sequence()"],
    "options_hi": ["sort()", "order()", "arrange()", "sequence()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which header is required for sort()?",
    "question_hi": "sort() के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["<algorithm>", "<vector>", "<iostream>", "<map>"],
    "options_hi": ["<algorithm>", "<vector>", "<iostream>", "<map>"],
    "answer_en": "<algorithm>",
    "answer_hi": "<algorithm>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which C++ version introduced lambda?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन किस C++ वर्ज़न में आया?",
    "options_en": ["C++11", "C++98", "C++03", "C++17"],
    "options_hi": ["C++11", "C++98", "C++03", "C++17"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword checks condition at compile time?",
    "question_hi": "कम्पाइल टाइम पर कंडीशन चेक करने के लिए क्या उपयोग होता है?",
    "options_en": ["static_assert", "assert", "check", "verify"],
    "options_hi": ["static_assert", "assert", "check", "verify"],
    "answer_en": "static_assert",
    "answer_hi": "static_assert",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword is used to prevent inheritance?",
    "question_hi": "इनहेरिटेंस रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "const", "static", "sealed"],
    "options_hi": ["final", "const", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which smart pointer provides shared ownership?",
    "question_hi": "कौन सा स्मार्ट पॉइंटर शेयर्ड ओनरशिप देता है?",
    "options_en": ["shared_ptr", "unique_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["shared_ptr", "unique_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "shared_ptr",
    "answer_hi": "shared_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which smart pointer provides exclusive ownership?",
    "question_hi": "कौन सा स्मार्ट पॉइंटर एक्सक्लूसिव ओनरशिप देता है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which concept hides implementation details?",
    "question_hi": "इम्प्लीमेंटेशन डिटेल्स छुपाने वाला कॉन्सेप्ट कौन सा है?",
    "options_en": ["Abstraction", "Inheritance", "Compilation", "Linking"],
    "options_hi": ["Abstraction", "Inheritance", "Compilation", "Linking"],
    "answer_en": "Abstraction",
    "answer_hi": "Abstraction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which concept binds data and methods together?",
    "question_hi": "डेटा और मेथड को एक साथ बाँधने वाला कॉन्सेप्ट कौन सा है?",
    "options_en": ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
    "options_hi": ["Encapsulation", "Polymorphism", "Inheritance", "Abstraction"],
    "answer_en": "Encapsulation",
    "answer_hi": "Encapsulation",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword is used to create object dynamically?",
    "question_hi": "डायनामिक रूप से ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["new", "class", "object", "malloc"],
    "options_hi": ["new", "class", "object", "malloc"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which loop is best when iterations are known?",
    "question_hi": "जब इटरेशन पहले से पता हो तो कौन सा लूप सही है?",
    "options_en": ["for", "while", "do-while", "foreach"],
    "options_hi": ["for", "while", "do-while", "foreach"],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which loop checks condition before execution?",
    "question_hi": "कौन सा लूप पहले कंडीशन चेक करता है?",
    "options_en": ["while", "do-while", "for", "range"],
    "options_hi": ["while", "do-while", "for", "range"],
    "answer_en": "while",
    "answer_hi": "while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which container allows duplicate elements?",
    "question_hi": "कौन सा कंटेनर डुप्लिकेट एलिमेंट्स की अनुमति देता है?",
    "options_en": ["vector", "set", "map", "unordered_set"],
    "options_hi": ["vector", "set", "map", "unordered_set"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword is used to include a file?",
    "question_hi": "फाइल शामिल करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["#include", "#define", "import", "using"],
    "options_hi": ["#include", "#define", "import", "using"],
    "answer_en": "#include",
    "answer_hi": "#include",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which operator is used for scope resolution?",
    "question_hi": "स्कोप रेज़ोल्यूशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["::", ".", "->", "*"],
    "options_hi": ["::", ".", "->", "*"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which type of inheritance uses more than one base class?",
    "question_hi": "एक से ज्यादा बेस क्लास वाला इनहेरिटेंस कौन सा है?",
    "options_en": ["Multiple", "Single", "Multilevel", "Hierarchical"],
    "options_hi": ["Multiple", "Single", "Multilevel", "Hierarchical"],
    "answer_en": "Multiple",
    "answer_hi": "Multiple",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword is used for pure virtual function?",
    "question_hi": "प्योर वर्चुअल फंक्शन के लिए क्या उपयोग होता है?",
    "options_en": ["=0", "virtual", "override", "abstract"],
    "options_hi": ["=0", "virtual", "override", "abstract"],
    "answer_en": "=0",
    "answer_hi": "=0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which C++ feature supports code reuse?",
    "question_hi": "कोड रीयूज़ किस फीचर से होती है?",
    "options_en": ["Inheritance", "Compilation", "Linking", "Execution"],
    "options_hi": ["Inheritance", "Compilation", "Linking", "Execution"],
    "answer_en": "Inheritance",
    "answer_hi": "Inheritance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which symbol is used for single-line comments?",
    "question_hi": "सिंगल लाइन कमेंट के लिए कौन सा सिंबल है?",
    "options_en": ["//", "/* */", "#", "--"],
    "options_hi": ["//", "/* */", "#", "--"],
    "answer_en": "//",
    "answer_hi": "//",
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