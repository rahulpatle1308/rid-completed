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
    "question_en": "Which symbol is used for single-line comments in C++?",
    "question_hi": "C++ में सिंगल लाइन कमेंट के लिए कौन सा चिन्ह उपयोग होता है?",
    "options_en": ["//", "/*", "#", "<!--"],
    "options_hi": ["//", "/*", "#", "<!--"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which operator is used to access array elements?",
    "question_hi": "एरे के एलिमेंट एक्सेस करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["[]", "()", "{}", "*"],
    "options_hi": ["[]", "()", "{}", "*"],
    "answer_en": "[]",
    "answer_hi": "[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which data type is used to store decimal numbers?",
    "question_hi": "डेसिमल नंबर स्टोर करने के लिए कौन सा डेटा टाइप उपयोग होता है?",
    "options_en": ["float", "int", "char", "bool"],
    "options_hi": ["float", "int", "char", "bool"],
    "answer_en": "float",
    "answer_hi": "float",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to create an object?",
    "question_hi": "ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["new", "class", "object", "this"],
    "options_hi": ["new", "class", "object", "this"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which keyword is used to define a class?",
    "question_hi": "क्लास डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["class", "struct", "object", "define"],
    "options_hi": ["class", "struct", "object", "define"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which access specifier allows access everywhere?",
    "question_hi": "कौन सा एक्सेस स्पेसिफ़ायर हर जगह एक्सेस की अनुमति देता है?",
    "options_en": ["public", "private", "protected", "default"],
    "options_hi": ["public", "private", "protected", "default"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to create an object inside stack memory?",
    "question_hi": "स्टैक मेमोरी में ऑब्जेक्ट बनाने के लिए कौन सा तरीका उपयोग होता है?",
    "options_en": ["Constructor call", "new", "malloc", "alloc"],
    "options_hi": ["Constructor call", "new", "malloc", "alloc"],
    "answer_en": "Constructor call",
    "answer_hi": "Constructor call",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which operator compares two values?",
    "question_hi": "दो वैल्यू की तुलना करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["==", "=", "!=", "+"],
    "options_hi": ["==", "=", "!=", "+"],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which logical operator represents AND?",
    "question_hi": "AND को दर्शाने वाला लॉजिकल ऑपरेटर कौन सा है?",
    "options_en": ["&&", "||", "!", "&"],
    "options_hi": ["&&", "||", "!", "&"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which loop is guaranteed to execute at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार जरूर चलता है?",
    "options_en": ["do-while", "for", "while", "range"],
    "options_hi": ["do-while", "for", "while", "range"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword is used to exit a loop?",
    "question_hi": "लूप से बाहर निकलने के लिए कौन सा कीवर्ड है?",
    "options_en": ["break", "continue", "exit", "return"],
    "options_hi": ["break", "continue", "exit", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword skips current iteration?",
    "question_hi": "करेंट इटरेशन स्किप करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["continue", "break", "pass", "stop"],
    "options_hi": ["continue", "break", "pass", "stop"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which header file is required for input-output?",
    "question_hi": "इनपुट-आउटपुट के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["iostream", "stdio.h", "conio.h", "fstream"],
    "options_hi": ["iostream", "stdio.h", "conio.h", "fstream"],
    "answer_en": "iostream",
    "answer_hi": "iostream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword is used to access current object?",
    "question_hi": "करेंट ऑब्जेक्ट को एक्सेस करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["this", "self", "current", "object"],
    "options_hi": ["this", "self", "current", "object"],
    "answer_en": "this",
    "answer_hi": "this",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which concept hides implementation details?",
    "question_hi": "इम्प्लीमेंटेशन डिटेल्स छुपाने वाला कॉन्सेप्ट कौन सा है?",
    "options_en": ["Abstraction", "Inheritance", "Polymorphism", "Encapsulation"],
    "options_hi": ["Abstraction", "Inheritance", "Polymorphism", "Encapsulation"],
    "answer_en": "Abstraction",
    "answer_hi": "Abstraction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which concept allows one class to acquire properties of another?",
    "question_hi": "एक क्लास को दूसरी क्लास की प्रॉपर्टीज़ देने वाला कॉन्सेप्ट कौन सा है?",
    "options_en": ["Inheritance", "Abstraction", "Encapsulation", "Overloading"],
    "options_hi": ["Inheritance", "Abstraction", "Encapsulation", "Overloading"],
    "answer_en": "Inheritance",
    "answer_hi": "Inheritance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which feature allows same function name with different parameters?",
    "question_hi": "एक ही फंक्शन नाम को अलग पैरामीटर के साथ उपयोग करने को क्या कहते हैं?",
    "options_en": ["Function Overloading", "Overriding", "Inheritance", "Casting"],
    "options_hi": ["Function Overloading", "Overriding", "Inheritance", "Casting"],
    "answer_en": "Function Overloading",
    "answer_hi": "Function Overloading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword enables runtime polymorphism?",
    "question_hi": "रनटाइम पॉलीमॉर्फिज़्म के लिए कौन सा कीवर्ड जरूरी है?",
    "options_en": ["virtual", "static", "inline", "const"],
    "options_hi": ["virtual", "static", "inline", "const"],
    "answer_en": "virtual",
    "answer_hi": "virtual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function is automatically called when object is destroyed?",
    "question_hi": "ऑब्जेक्ट नष्ट होने पर कौन सा फंक्शन अपने आप कॉल होता है?",
    "options_en": ["Destructor", "Constructor", "Delete", "Free"],
    "options_hi": ["Destructor", "Constructor", "Delete", "Free"],
    "answer_en": "Destructor",
    "answer_hi": "Destructor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which operator allocates dynamic memory?",
    "question_hi": "डायनामिक मेमोरी अलोकेट करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which operator releases dynamic memory?",
    "question_hi": "डायनामिक मेमोरी रिलीज़ करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which container stores elements sequentially?",
    "question_hi": "एलिमेंट्स को सीक्वेन्शियल तरीके से स्टोर करने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "map", "set", "unordered_map"],
    "options_hi": ["vector", "map", "set", "unordered_map"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which container stores key-value pairs?",
    "question_hi": "key-value pair स्टोर करने वाला कंटेनर कौन सा है?",
    "options_en": ["map", "vector", "list", "array"],
    "options_hi": ["map", "vector", "list", "array"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which container does not allow duplicate values?",
    "question_hi": "कौन सा कंटेनर डुप्लिकेट वैल्यू अलाउ नहीं करता?",
    "options_en": ["set", "vector", "list", "deque"],
    "options_hi": ["set", "vector", "list", "deque"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword is used to create templates?",
    "question_hi": "टेम्पलेट बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["template", "generic", "typename", "class"],
    "options_hi": ["template", "generic", "typename", "class"],
    "answer_en": "template",
    "answer_hi": "template",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword can replace class in template?",
    "question_hi": "टेम्पलेट में class की जगह कौन सा कीवर्ड उपयोग हो सकता है?",
    "options_en": ["typename", "struct", "object", "type"],
    "options_hi": ["typename", "struct", "object", "type"],
    "answer_en": "typename",
    "answer_hi": "typename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which STL algorithm is used for sorting?",
    "question_hi": "सॉर्टिंग के लिए कौन सा STL एल्गोरिदम उपयोग होता है?",
    "options_en": ["sort()", "find()", "count()", "merge()"],
    "options_hi": ["sort()", "find()", "count()", "merge()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which header file is required for sort()?",
    "question_hi": "sort() के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["algorithm", "vector", "iterator", "utility"],
    "options_hi": ["algorithm", "vector", "iterator", "utility"],
    "answer_en": "algorithm",
    "answer_hi": "algorithm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which C++ version introduced lambda expressions?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन किस C++ वर्ज़न में आया?",
    "options_en": ["C++11", "C++98", "C++03", "C++17"],
    "options_hi": ["C++11", "C++98", "C++03", "C++17"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which symbol is used in lambda expression?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन में कौन सा चिन्ह उपयोग होता है?",
    "options_en": ["[]", "()", "{}", "<>"],
    "options_hi": ["[]", "()", "{}", "<>"],
    "answer_en": "[]",
    "answer_hi": "[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which smart pointer allows shared ownership?",
    "question_hi": "शेयर्ड ओनरशिप देने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["shared_ptr", "unique_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["shared_ptr", "unique_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "shared_ptr",
    "answer_hi": "shared_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which smart pointer prevents cyclic dependency?",
    "question_hi": "साइक्लिक डिपेंडेंसी रोकने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "options_hi": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "answer_en": "weak_ptr",
    "answer_hi": "weak_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword throws an exception?",
    "question_hi": "एक्सेप्शन फेंकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["throw", "try", "catch", "finally"],
    "options_hi": ["throw", "try", "catch", "finally"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which block handles exceptions?",
    "question_hi": "एक्सेप्शन हैंडल करने वाला ब्लॉक कौन सा है?",
    "options_en": ["catch", "try", "throw", "final"],
    "options_hi": ["catch", "try", "throw", "final"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword specifies no exception is thrown?",
    "question_hi": "कोई एक्सेप्शन नहीं फेंकने का संकेत देने वाला कीवर्ड कौन सा है?",
    "options_en": ["noexcept", "throw", "try", "catch"],
    "options_hi": ["noexcept", "throw", "try", "catch"],
    "answer_en": "noexcept",
    "answer_hi": "noexcept",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which container provides average O(1) lookup?",
    "question_hi": "औसतन O(1) लुकअप देने वाला कंटेनर कौन सा है?",
    "options_en": ["unordered_map", "map", "set", "list"],
    "options_hi": ["unordered_map", "map", "set", "list"],
    "answer_en": "unordered_map",
    "answer_hi": "unordered_map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword checks type at runtime?",
    "question_hi": "रनटाइम पर टाइप चेक करने वाला कीवर्ड कौन सा है?",
    "options_en": ["typeid", "decltype", "sizeof", "auto"],
    "options_hi": ["typeid", "decltype", "sizeof", "auto"],
    "answer_en": "typeid",
    "answer_hi": "typeid",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which header file is used for file handling?",
    "question_hi": "फाइल हैंडलिंग के लिए कौन सी हेडर फाइल उपयोग होती है?",
    "options_en": ["fstream", "iostream", "stdio.h", "file"],
    "options_hi": ["fstream", "iostream", "stdio.h", "file"],
    "answer_en": "fstream",
    "answer_hi": "fstream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword is used to define a namespace?",
    "question_hi": "नेमस्पेस डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["namespace", "module", "package", "scope"],
    "options_hi": ["namespace", "module", "package", "scope"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which operator returns size in bytes?",
    "question_hi": "साइज़ (बाइट्स में) बताने वाला ऑपरेटर कौन सा है?",
    "options_en": ["sizeof", "length", "size", "bytes"],
    "options_hi": ["sizeof", "length", "size", "bytes"],
    "answer_en": "sizeof",
    "answer_hi": "sizeof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which container is implemented as doubly linked list?",
    "question_hi": "डबल लिंक्ड लिस्ट के रूप में इम्प्लीमेंटेड कंटेनर कौन सा है?",
    "options_en": ["list", "vector", "deque", "array"],
    "options_hi": ["list", "vector", "deque", "array"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which C++ feature supports multithreading?",
    "question_hi": "मल्टीथ्रेडिंग को सपोर्ट करने वाला C++ फीचर कौन सा है?",
    "options_en": ["thread", "mutex", "future", "atomic"],
    "options_hi": ["thread", "mutex", "future", "atomic"],
    "answer_en": "thread",
    "answer_hi": "thread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which class manages mutex automatically?",
    "question_hi": "म्यूटेक्स को ऑटोमैटिक मैनेज करने वाली क्लास कौन सी है?",
    "options_en": ["lock_guard", "unique_ptr", "shared_ptr", "thread"],
    "options_hi": ["lock_guard", "unique_ptr", "shared_ptr", "thread"],
    "answer_en": "lock_guard",
    "answer_hi": "lock_guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword prevents object copying?",
    "question_hi": "ऑब्जेक्ट की कॉपी रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["delete", "explicit", "final", "static"],
    "options_hi": ["delete", "explicit", "final", "static"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which C++ feature allows concurrent execution?",
    "question_hi": "कन्करेंट एक्जीक्यूशन देने वाला C++ फीचर कौन सा है?",
    "options_en": ["Multithreading", "Inheritance", "Templates", "Overloading"],
    "options_hi": ["Multithreading", "Inheritance", "Templates", "Overloading"],
    "answer_en": "Multithreading",
    "answer_hi": "Multithreading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword specifies compile-time constant?",
    "question_hi": "कंपाइल टाइम कॉन्स्टेंट बताने वाला कीवर्ड कौन सा है?",
    "options_en": ["constexpr", "const", "static", "enum"],
    "options_hi": ["constexpr", "const", "static", "enum"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which operator accesses class member via pointer?",
    "question_hi": "पॉइंटर के जरिए क्लास मेंबर एक्सेस करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["->", ".", "::", "*"],
    "options_hi": ["->", ".", "::", "*"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which container allows insertion at both ends?",
    "question_hi": "दोनों सिरों से इंसर्शन अलाउ करने वाला कंटेनर कौन सा है?",
    "options_en": ["deque", "vector", "list", "array"],
    "options_hi": ["deque", "vector", "list", "array"],
    "answer_en": "deque",
    "answer_hi": "deque",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which function terminates the program immediately?",
    "question_hi": "प्रोग्राम को तुरंत समाप्त करने वाला फंक्शन कौन सा है?",
    "options_en": ["exit()", "break", "return", "stop"],
    "options_hi": ["exit()", "break", "return", "stop"],
    "answer_en": "exit()",
    "answer_hi": "exit()",
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