const questions=[
  {
    "num": 1,
    "question_en": "Which keyword is used to define a constant variable in C++?",
    "question_hi": "C++ में कॉन्स्टेंट वैरिएबल डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["const", "static", "final", "constexpr"],
    "options_hi": ["const", "static", "final", "constexpr"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which symbol is used for scope resolution?",
    "question_hi": "स्कोप रेज़ोल्यूशन के लिए कौन सा चिन्ह उपयोग होता है?",
    "options_en": ["::", "->", ".", ":"],
    "options_hi": ["::", "->", ".", ":"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to inherit a class?",
    "question_hi": "क्लास इनहेरिट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": [":", "extends", "inherits", "using"],
    "options_hi": [":", "extends", "inherits", "using"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which data type is used to store true or false?",
    "question_hi": "true या false स्टोर करने के लिए कौन सा डेटा टाइप है?",
    "options_en": ["bool", "int", "char", "bit"],
    "options_hi": ["bool", "int", "char", "bit"],
    "answer_en": "bool",
    "answer_hi": "bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator increments a variable by 1?",
    "question_hi": "वैरिएबल को 1 से बढ़ाने वाला ऑपरेटर कौन सा है?",
    "options_en": ["++", "+=", "+", "--"],
    "options_hi": ["++", "+=", "+", "--"],
    "answer_en": "++",
    "answer_hi": "++",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which loop is best when number of iterations is known?",
    "question_hi": "जब इटरेशन की संख्या पहले से पता हो तो कौन सा लूप बेहतर है?",
    "options_en": ["for", "while", "do-while", "foreach"],
    "options_hi": ["for", "while", "do-while", "foreach"],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword is used to jump to a labeled statement?",
    "question_hi": "लेबल्ड स्टेटमेंट पर जाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["goto", "break", "continue", "jump"],
    "options_hi": ["goto", "break", "continue", "jump"],
    "answer_en": "goto",
    "answer_hi": "goto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which header file is required for using vectors?",
    "question_hi": "vector उपयोग करने के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["vector", "array", "list", "algorithm"],
    "options_hi": ["vector", "array", "list", "algorithm"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function returns the number of elements in a vector?",
    "question_hi": "vector में एलिमेंट्स की संख्या बताने वाला फंक्शन कौन सा है?",
    "options_en": ["size()", "length()", "count()", "capacity()"],
    "options_hi": ["size()", "length()", "count()", "capacity()"],
    "answer_en": "size()",
    "answer_hi": "size()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which function adds an element at the end of a vector?",
    "question_hi": "vector के अंत में एलिमेंट जोड़ने वाला फंक्शन कौन सा है?",
    "options_en": ["push_back()", "insert()", "add()", "emplace()"],
    "options_hi": ["push_back()", "insert()", "add()", "emplace()"],
    "answer_en": "push_back()",
    "answer_hi": "push_back()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to define an abstract class?",
    "question_hi": "एब्स्ट्रैक्ट क्लास बनाने के लिए कौन सा तरीका उपयोग होता है?",
    "options_en": ["Pure virtual function", "abstract", "interface", "virtual"],
    "options_hi": ["Pure virtual function", "abstract", "interface", "virtual"],
    "answer_en": "Pure virtual function",
    "answer_hi": "Pure virtual function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which symbol is used to declare a pure virtual function?",
    "question_hi": "प्योर वर्चुअल फंक्शन डिक्लेयर करने के लिए कौन सा चिन्ह है?",
    "options_en": ["=0", "==0", ":0", "->0"],
    "options_hi": ["=0", "==0", ":0", "->0"],
    "answer_en": "=0",
    "answer_hi": "=0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which casting is safest in C++?",
    "question_hi": "C++ में सबसे सुरक्षित कास्टिंग कौन सी है?",
    "options_en": ["dynamic_cast", "static_cast", "reinterpret_cast", "C-style cast"],
    "options_hi": ["dynamic_cast", "static_cast", "reinterpret_cast", "C-style cast"],
    "answer_en": "dynamic_cast",
    "answer_hi": "dynamic_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which operator is overloaded for output using cout?",
    "question_hi": "cout के साथ आउटपुट के लिए कौन सा ऑपरेटर ओवरलोड होता है?",
    "options_en": ["<<", ">>", "=", "->"],
    "options_hi": ["<<", ">>", "=", "->"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which operator is overloaded for input using cin?",
    "question_hi": "cin के साथ इनपुट के लिए कौन सा ऑपरेटर ओवरलोड होता है?",
    "options_en": [">>", "<<", "=", "&"],
    "options_hi": [">>", "<<", "=", "&"],
    "answer_en": ">>",
    "answer_hi": ">>",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword is used to prevent inheritance?",
    "question_hi": "इनहेरिटेंस रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["final", "sealed", "private", "delete"],
    "options_hi": ["final", "sealed", "private", "delete"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which C++ feature allows function with variable arguments?",
    "question_hi": "वैरिएबल आर्ग्यूमेंट्स वाला फंक्शन कौन सा फीचर देता है?",
    "options_en": ["Variadic templates", "Overloading", "Inheritance", "Macros"],
    "options_hi": ["Variadic templates", "Overloading", "Inheritance", "Macros"],
    "answer_en": "Variadic templates",
    "answer_hi": "Variadic templates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which header is required for smart pointers?",
    "question_hi": "स्मार्ट पॉइंटर के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["memory", "pointer", "utility", "smartptr"],
    "options_hi": ["memory", "pointer", "utility", "smartptr"],
    "answer_en": "memory",
    "answer_hi": "memory",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword is used to declare a variable without specifying type?",
    "question_hi": "टाइप बताए बिना वैरिएबल डिक्लेयर करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["auto", "var", "let", "dynamic"],
    "options_hi": ["auto", "var", "let", "dynamic"],
    "answer_en": "auto",
    "answer_hi": "auto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which operator is used for conditional expression?",
    "question_hi": "कंडीशनल एक्सप्रेशन के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["?:", "if", "switch", "::"],
    "options_hi": ["?:", "if", "switch", "::"],
    "answer_en": "?:",
    "answer_hi": "?:",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which function checks end-of-file condition?",
    "question_hi": "EOF कंडीशन चेक करने वाला फंक्शन कौन सा है?",
    "options_en": ["eof()", "end()", "is_end()", "finish()"],
    "options_hi": ["eof()", "end()", "is_end()", "finish()"],
    "answer_en": "eof()",
    "answer_hi": "eof()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which container maintains insertion order?",
    "question_hi": "इंसर्शन ऑर्डर बनाए रखने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "set", "map", "unordered_map"],
    "options_hi": ["vector", "set", "map", "unordered_map"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword enforces inline expansion?",
    "question_hi": "इनलाइन एक्सपेंशन को मजबूर करने वाला कीवर्ड कौन सा है?",
    "options_en": ["inline", "register", "constexpr", "static"],
    "options_hi": ["inline", "register", "constexpr", "static"],
    "answer_en": "inline",
    "answer_hi": "inline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which container uses hashing internally?",
    "question_hi": "अंदर से हैशिंग उपयोग करने वाला कंटेनर कौन सा है?",
    "options_en": ["unordered_set", "set", "vector", "list"],
    "options_hi": ["unordered_set", "set", "vector", "list"],
    "answer_en": "unordered_set",
    "answer_hi": "unordered_set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which C++ feature helps manage resources automatically?",
    "question_hi": "रिसोर्स ऑटोमैटिक मैनेज करने वाला C++ फीचर कौन सा है?",
    "options_en": ["RAII", "GC", "Destructor only", "Pointers"],
    "options_hi": ["RAII", "GC", "Destructor only", "Pointers"],
    "answer_en": "RAII",
    "answer_hi": "RAII",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword is used to create a thread object?",
    "question_hi": "थ्रेड ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["thread", "pthread", "process", "task"],
    "options_hi": ["thread", "pthread", "process", "task"],
    "answer_en": "thread",
    "answer_hi": "thread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which method waits for a thread to finish execution?",
    "question_hi": "थ्रेड के पूरा होने का इंतज़ार करने वाला मेथड कौन सा है?",
    "options_en": ["join()", "wait()", "stop()", "close()"],
    "options_hi": ["join()", "wait()", "stop()", "close()"],
    "answer_en": "join()",
    "answer_hi": "join()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword avoids data race in multithreading?",
    "question_hi": "मल्टीथ्रेडिंग में डेटा रेस रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["atomic", "volatile", "mutable", "register"],
    "options_hi": ["atomic", "volatile", "mutable", "register"],
    "answer_en": "atomic",
    "answer_hi": "atomic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which header is required for atomic operations?",
    "question_hi": "एटॉमिक ऑपरेशन के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["atomic", "thread", "mutex", "future"],
    "options_hi": ["atomic", "thread", "mutex", "future"],
    "answer_en": "atomic",
    "answer_hi": "atomic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which function returns a future object?",
    "question_hi": "future ऑब्जेक्ट रिटर्न करने वाला फंक्शन कौन सा है?",
    "options_en": ["async()", "promise()", "future()", "thread()"],
    "options_hi": ["async()", "promise()", "future()", "thread()"],
    "answer_en": "async()",
    "answer_hi": "async()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword specifies function should not be overridden?",
    "question_hi": "फंक्शन को ओवरराइड होने से रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "override", "delete", "static"],
    "options_hi": ["final", "override", "delete", "static"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword ensures function overrides base class method?",
    "question_hi": "बेस क्लास मेथड को ओवरराइड सुनिश्चित करने वाला कीवर्ड कौन सा है?",
    "options_en": ["override", "virtual", "final", "inline"],
    "options_hi": ["override", "virtual", "final", "inline"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which operator is used to deallocate array memory?",
    "question_hi": "एरे मेमोरी डीएलोकेट करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["delete[]", "delete", "free()", "remove"],
    "options_hi": ["delete[]", "delete", "free()", "remove"],
    "answer_en": "delete[]",
    "answer_hi": "delete[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which feature allows compile-time computation?",
    "question_hi": "कंपाइल टाइम कैलकुलेशन करने वाला फीचर कौन सा है?",
    "options_en": ["constexpr", "const", "macro", "inline"],
    "options_hi": ["constexpr", "const", "macro", "inline"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which header provides numeric limits?",
    "question_hi": "न्यूमेरिक लिमिट्स देने वाली हेडर फाइल कौन सी है?",
    "options_en": ["limits", "cmath", "climits", "numbers"],
    "options_hi": ["limits", "cmath", "climits", "numbers"],
    "answer_en": "limits",
    "answer_hi": "limits",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which container provides constant time insertion at back?",
    "question_hi": "बैक में कॉन्स्टेंट टाइम इंसर्शन देने वाला कंटेनर कौन सा है?",
    "options_en": ["deque", "vector", "list", "array"],
    "options_hi": ["deque", "vector", "list", "array"],
    "answer_en": "deque",
    "answer_hi": "deque",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword allows modification in const function?",
    "question_hi": "const फंक्शन के अंदर वैरिएबल बदलने देने वाला कीवर्ड कौन सा है?",
    "options_en": ["mutable", "static", "volatile", "register"],
    "options_hi": ["mutable", "static", "volatile", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which header is required for chrono library?",
    "question_hi": "chrono लाइब्रेरी के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["chrono", "ctime", "time", "timer"],
    "options_hi": ["chrono", "ctime", "time", "timer"],
    "answer_en": "chrono",
    "answer_hi": "chrono",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which C++ feature supports time utilities?",
    "question_hi": "टाइम यूटिलिटीज़ सपोर्ट करने वाला C++ फीचर कौन सा है?",
    "options_en": ["chrono", "thread", "future", "mutex"],
    "options_hi": ["chrono", "thread", "future", "mutex"],
    "answer_en": "chrono",
    "answer_hi": "chrono",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function converts string to integer?",
    "question_hi": "स्ट्रिंग को इंटीजर में बदलने वाला फंक्शन कौन सा है?",
    "options_en": ["stoi()", "atoi()", "to_int()", "parseInt()"],
    "options_hi": ["stoi()", "atoi()", "to_int()", "parseInt()"],
    "answer_en": "stoi()",
    "answer_hi": "stoi()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which header is required for string class?",
    "question_hi": "string क्लास के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["string", "cstring", "str", "text"],
    "options_hi": ["string", "cstring", "str", "text"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which operator is used for bitwise AND?",
    "question_hi": "बिटवाइज़ AND के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["&", "&&", "|", "^"],
    "options_hi": ["&", "&&", "|", "^"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which operator is used for bitwise OR?",
    "question_hi": "बिटवाइज़ OR के लिए कौन सा ऑपरेटर है?",
    "options_en": ["|", "||", "&", "~"],
    "options_hi": ["|", "||", "&", "~"],
    "answer_en": "|",
    "answer_hi": "|",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which operator flips all bits?",
    "question_hi": "सभी बिट्स को उल्टा करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["~", "!", "^", "<<"],
    "options_hi": ["~", "!", "^", "<<"],
    "answer_en": "~",
    "answer_hi": "~",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which operator shifts bits to the left?",
    "question_hi": "बिट्स को बाएँ शिफ्ट करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["<<", ">>", "<", ">"],
    "options_hi": ["<<", ">>", "<", ">"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which operator shifts bits to the right?",
    "question_hi": "बिट्स को दाएँ शिफ्ट करने वाला ऑपरेटर कौन सा है?",
    "options_en": [">>", "<<", "<", ">"],
    "options_hi": [">>", "<<", "<", ">"],
    "answer_en": ">>",
    "answer_hi": ">>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword is used to stop program execution immediately?",
    "question_hi": "प्रोग्राम को तुरंत रोकने के लिए कौन सा कीवर्ड/फंक्शन है?",
    "options_en": ["abort()", "exit()", "stop()", "break"],
    "options_hi": ["abort()", "exit()", "stop()", "break"],
    "answer_en": "abort()",
    "answer_hi": "abort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which C++ feature replaces macros for constants?",
    "question_hi": "कॉन्स्टेंट्स के लिए मैक्रो की जगह लेने वाला फीचर कौन सा है?",
    "options_en": ["constexpr", "enum", "static", "typedef"],
    "options_hi": ["constexpr", "enum", "static", "typedef"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which header provides mathematical functions?",
    "question_hi": "मैथेमैटिकल फंक्शन्स देने वाली हेडर फाइल कौन सी है?",
    "options_en": ["cmath", "math", "cstdlib", "numbers"],
    "options_hi": ["cmath", "math", "cstdlib", "numbers"],
    "answer_en": "cmath",
    "answer_hi": "cmath",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword ensures variable is not optimized away?",
    "question_hi": "वैरिएबल को ऑप्टिमाइज़ होने से रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["volatile", "mutable", "static", "register"],
    "options_hi": ["volatile", "mutable", "static", "register"],
    "answer_en": "volatile",
    "answer_hi": "volatile",
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