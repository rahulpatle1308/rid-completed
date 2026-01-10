const questions= [
  {
    "num": 1,
    "question_en": "Which keyword is used to declare a reference variable in C++?",
    "question_hi": "C++ में रेफरेंस वैरिएबल डिक्लेयर करने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": ["&", "*", "ref", "@"],
    "options_hi": ["&", "*", "ref", "@"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which function is the entry point of a C++ program?",
    "question_hi": "C++ प्रोग्राम का एंट्री पॉइंट कौन सा फंक्शन होता है?",
    "options_en": ["main()", "start()", "init()", "run()"],
    "options_hi": ["main()", "start()", "init()", "run()"],
    "answer_en": "main()",
    "answer_hi": "main()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to define a constant pointer?",
    "question_hi": "कांस्टेंट पॉइंटर को डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["const", "static", "constexpr", "final"],
    "options_hi": ["const", "static", "constexpr", "final"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which type of memory is allocated using new keyword?",
    "question_hi": "new कीवर्ड से कौन सी मेमोरी अलोकेट होती है?",
    "options_en": ["Heap", "Stack", "Static", "Register"],
    "options_hi": ["Heap", "Stack", "Static", "Register"],
    "answer_en": "Heap",
    "answer_hi": "Heap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator is overloaded for stream output?",
    "question_hi": "स्ट्रीम आउटपुट के लिए कौन सा ऑपरेटर ओवरलोड होता है?",
    "options_en": ["<<", ">>", "=", "[]"],
    "options_hi": ["<<", ">>", "=", "[]"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which keyword is used to define a virtual destructor?",
    "question_hi": "वर्चुअल डिस्ट्रक्टर डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["virtual", "override", "final", "static"],
    "options_hi": ["virtual", "override", "final", "static"],
    "answer_en": "virtual",
    "answer_hi": "virtual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which container stores elements in contiguous memory?",
    "question_hi": "कौन सा कंटेनर एलिमेंट्स को कंटिग्यूस मेमोरी में स्टोर करता है?",
    "options_en": ["vector", "list", "map", "set"],
    "options_hi": ["vector", "list", "map", "set"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which C++ cast removes const qualifier?",
    "question_hi": "कौन सा C++ कास्ट const क्वालिफायर हटाता है?",
    "options_en": ["const_cast", "static_cast", "dynamic_cast", "reinterpret_cast"],
    "options_hi": ["const_cast", "static_cast", "dynamic_cast", "reinterpret_cast"],
    "answer_en": "const_cast",
    "answer_hi": "const_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword forces function to be evaluated at compile time?",
    "question_hi": "फंक्शन को कंपाइल टाइम पर इवैल्यूएट करने वाला कीवर्ड कौन सा है?",
    "options_en": ["constexpr", "inline", "static", "const"],
    "options_hi": ["constexpr", "inline", "static", "const"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which STL container uses hashing internally?",
    "question_hi": "अंदर से हैशिंग का उपयोग करने वाला STL कंटेनर कौन सा है?",
    "options_en": ["unordered_map", "map", "set", "vector"],
    "options_hi": ["unordered_map", "map", "set", "vector"],
    "answer_en": "unordered_map",
    "answer_hi": "unordered_map",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which operator is used to access members via pointer?",
    "question_hi": "पॉइंटर के जरिए मेंबर्स एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["->", ".", "*", "::"],
    "options_hi": ["->", ".", "*", "::"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword prevents a class from being inherited?",
    "question_hi": "क्लास को इनहेरिट होने से रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "const", "sealed", "static"],
    "options_hi": ["final", "const", "sealed", "static"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function deallocates memory allocated by new[]?",
    "question_hi": "new[] से अलोकेट की गई मेमोरी को कौन सा कीवर्ड डिलीट करता है?",
    "options_en": ["delete[]", "delete", "free()", "remove()"],
    "options_hi": ["delete[]", "delete", "free()", "remove()"],
    "answer_en": "delete[]",
    "answer_hi": "delete[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which header file is required for std::string?",
    "question_hi": "std::string के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["string", "cstring", "iostream", "sstream"],
    "options_hi": ["string", "cstring", "iostream", "sstream"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which C++ feature supports function objects?",
    "question_hi": "फंक्शन ऑब्जेक्ट को सपोर्ट करने वाला C++ फीचर कौन सा है?",
    "options_en": ["Functor", "Lambda", "Macro", "Pointer"],
    "options_hi": ["Functor", "Lambda", "Macro", "Pointer"],
    "answer_en": "Functor",
    "answer_hi": "Functor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which container provides bidirectional iterators?",
    "question_hi": "बाय-डायरेक्शनल इटरेटर देने वाला कंटेनर कौन सा है?",
    "options_en": ["list", "vector", "array", "queue"],
    "options_hi": ["list", "vector", "array", "queue"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which header file is required for std::list?",
    "question_hi": "std::list के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["list", "vector", "deque", "queue"],
    "options_hi": ["list", "vector", "deque", "queue"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which C++ feature enables late binding?",
    "question_hi": "लेट बाइंडिंग को सक्षम करने वाला C++ फीचर कौन सा है?",
    "options_en": ["Virtual functions", "Templates", "Overloading", "Inlining"],
    "options_hi": ["Virtual functions", "Templates", "Overloading", "Inlining"],
    "answer_en": "Virtual functions",
    "answer_hi": "Virtual functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword specifies a method overrides a virtual function?",
    "question_hi": "वर्चुअल फंक्शन को ओवरराइड करने को दर्शाने वाला कीवर्ड कौन सा है?",
    "options_en": ["override", "virtual", "final", "static"],
    "options_hi": ["override", "virtual", "final", "static"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which header provides std::unique_ptr?",
    "question_hi": "std::unique_ptr किस हेडर में मिलता है?",
    "options_en": ["memory", "utility", "pointer", "smart"],
    "options_hi": ["memory", "utility", "pointer", "smart"],
    "answer_en": "memory",
    "answer_hi": "memory",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
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
    "num": 22,
    "question_en": "Which smart pointer breaks circular dependency?",
    "question_hi": "सर्कुलर डिपेंडेंसी तोड़ने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "options_hi": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "answer_en": "weak_ptr",
    "answer_hi": "weak_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which algorithm counts elements satisfying a condition?",
    "question_hi": "कंडीशन के अनुसार एलिमेंट गिनने वाला एल्गोरिदम कौन सा है?",
    "options_en": ["count_if", "find", "search", "equal"],
    "options_hi": ["count_if", "find", "search", "equal"],
    "answer_en": "count_if",
    "answer_hi": "count_if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which header is required for std::count_if?",
    "question_hi": "std::count_if के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["algorithm", "numeric", "iterator", "functional"],
    "options_hi": ["algorithm", "numeric", "iterator", "functional"],
    "answer_en": "algorithm",
    "answer_hi": "algorithm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which C++ feature manages resource automatically?",
    "question_hi": "रिसोर्स को अपने आप मैनेज करने वाला फीचर कौन सा है?",
    "options_en": ["RAII", "GC", "Heap", "Malloc"],
    "options_hi": ["RAII", "GC", "Heap", "Malloc"],
    "answer_en": "RAII",
    "answer_hi": "RAII",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which header file supports std::thread?",
    "question_hi": "std::thread किस हेडर में मिलता है?",
    "options_en": ["thread", "mutex", "future", "atomic"],
    "options_hi": ["thread", "mutex", "future", "atomic"],
    "answer_en": "thread",
    "answer_hi": "thread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which C++ class provides mutual exclusion?",
    "question_hi": "म्यूचुअल एक्सक्लूज़न देने वाली C++ क्लास कौन सी है?",
    "options_en": ["mutex", "atomic", "lock_guard", "thread"],
    "options_hi": ["mutex", "atomic", "lock_guard", "thread"],
    "answer_en": "mutex",
    "answer_hi": "mutex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which class automatically locks and unlocks mutex?",
    "question_hi": "म्यूटेक्स को ऑटोमैटिक लॉक/अनलॉक करने वाली क्लास कौन सी है?",
    "options_en": ["lock_guard", "mutex", "unique_lock", "atomic"],
    "options_hi": ["lock_guard", "mutex", "unique_lock", "atomic"],
    "answer_en": "lock_guard",
    "answer_hi": "lock_guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which library handles time duration in C++?",
    "question_hi": "C++ में टाइम ड्यूरेशन को हैंडल करने वाली लाइब्रेरी कौन सी है?",
    "options_en": ["chrono", "ctime", "timer", "clock"],
    "options_hi": ["chrono", "ctime", "timer", "clock"],
    "answer_en": "chrono",
    "answer_hi": "chrono",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which function pauses current thread?",
    "question_hi": "करेंट थ्रेड को रोकने वाला फंक्शन कौन सा है?",
    "options_en": ["sleep_for", "pause", "wait", "delay"],
    "options_hi": ["sleep_for", "pause", "wait", "delay"],
    "answer_en": "sleep_for",
    "answer_hi": "sleep_for",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword allows function to be called without object?",
    "question_hi": "ऑब्जेक्ट के बिना फंक्शन कॉल करने वाला कीवर्ड कौन सा है?",
    "options_en": ["static", "inline", "virtual", "const"],
    "options_hi": ["static", "inline", "virtual", "const"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which operator compares not equal?",
    "question_hi": "नॉट इक्वल तुलना करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["!=", "==", "<>", "="],
    "options_hi": ["!=", "==", "<>", "="],
    "answer_en": "!=",
    "answer_hi": "!=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which C++ feature avoids name conflicts?",
    "question_hi": "नेम कॉन्फ्लिक्ट से बचाने वाला C++ फीचर कौन सा है?",
    "options_en": ["namespace", "class", "struct", "template"],
    "options_hi": ["namespace", "class", "struct", "template"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword imports namespace members?",
    "question_hi": "नेमस्पेस मेंबर्स को इम्पोर्ट करने वाला कीवर्ड कौन सा है?",
    "options_en": ["using", "namespace", "include", "import"],
    "options_hi": ["using", "namespace", "include", "import"],
    "answer_en": "using",
    "answer_hi": "using",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword indicates no exception thrown?",
    "question_hi": "कोई एक्सेप्शन न फेंकने का संकेत देने वाला कीवर्ड कौन सा है?",
    "options_en": ["noexcept", "throw", "try", "catch"],
    "options_hi": ["noexcept", "throw", "try", "catch"],
    "answer_en": "noexcept",
    "answer_hi": "noexcept",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword defines type alias with templates support?",
    "question_hi": "टेम्पलेट सपोर्ट के साथ टाइप एलियास डिफाइन करने वाला कीवर्ड कौन सा है?",
    "options_en": ["using", "typedef", "alias", "define"],
    "options_hi": ["using", "typedef", "alias", "define"],
    "answer_en": "using",
    "answer_hi": "using",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which container allows fast insertion at front?",
    "question_hi": "फ्रंट से तेज़ी से इंसर्ट करने वाला कंटेनर कौन सा है?",
    "options_en": ["deque", "vector", "list", "stack"],
    "options_hi": ["deque", "vector", "list", "stack"],
    "answer_en": "deque",
    "answer_hi": "deque",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which STL container follows LIFO?",
    "question_hi": "LIFO सिद्धांत फॉलो करने वाला कंटेनर कौन सा है?",
    "options_en": ["stack", "queue", "deque", "vector"],
    "options_hi": ["stack", "queue", "deque", "vector"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which STL container follows FIFO?",
    "question_hi": "FIFO सिद्धांत फॉलो करने वाला कंटेनर कौन सा है?",
    "options_en": ["queue", "stack", "deque", "vector"],
    "options_hi": ["queue", "stack", "deque", "vector"],
    "answer_en": "queue",
    "answer_hi": "queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which container stores unique sorted elements?",
    "question_hi": "यूनिक और सॉर्टेड एलिमेंट स्टोर करने वाला कंटेनर कौन सा है?",
    "options_en": ["set", "vector", "list", "deque"],
    "options_hi": ["set", "vector", "list", "deque"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword is used to include header files?",
    "question_hi": "हेडर फाइल शामिल करने के लिए कौन सा डायरेक्टिव है?",
    "options_en": ["#include", "#define", "#pragma", "#import"],
    "options_hi": ["#include", "#define", "#pragma", "#import"],
    "answer_en": "#include",
    "answer_hi": "#include",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which C++ feature supports operator overloading?",
    "question_hi": "ऑपरेटर ओवरलोडिंग को सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["Polymorphism", "Encapsulation", "Abstraction", "Inheritance"],
    "options_hi": ["Polymorphism", "Encapsulation", "Abstraction", "Inheritance"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which operator allocates memory for object?",
    "question_hi": "ऑब्जेक्ट के लिए मेमोरी अलोकेट करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword frees memory allocated by new?",
    "question_hi": "new से अलोकेट की गई मेमोरी को फ्री करने वाला कीवर्ड कौन सा है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword specifies compile time check?",
    "question_hi": "कंपाइल टाइम चेक बताने वाला कीवर्ड कौन सा है?",
    "options_en": ["static_assert", "assert", "check", "verify"],
    "options_hi": ["static_assert", "assert", "check", "verify"],
    "answer_en": "static_assert",
    "answer_hi": "static_assert",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which container has fixed size at compile time?",
    "question_hi": "कंपाइल टाइम पर फिक्स्ड साइज वाला कंटेनर कौन सा है?",
    "options_en": ["std::array", "vector", "deque", "list"],
    "options_hi": ["std::array", "vector", "deque", "list"],
    "answer_en": "std::array",
    "answer_hi": "std::array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which header is required for std::array?",
    "question_hi": "std::array के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["array", "vector", "deque", "list"],
    "options_hi": ["array", "vector", "deque", "list"],
    "answer_en": "array",
    "answer_hi": "array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which feature replaces macros safely in C++?",
    "question_hi": "मैक्रो को सुरक्षित रूप से रिप्लेस करने वाला फीचर कौन सा है?",
    "options_en": ["constexpr", "inline", "templates", "All of these"],
    "options_hi": ["constexpr", "inline", "templates", "All of these"],
    "answer_en": "All of these",
    "answer_hi": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword makes variable shared across objects?",
    "question_hi": "वैरिएबल को सभी ऑब्जेक्ट में शेयर करने वाला कीवर्ड कौन सा है?",
    "options_en": ["static", "const", "mutable", "extern"],
    "options_hi": ["static", "const", "mutable", "extern"],
    "answer_en": "static",
    "answer_hi": "static",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which C++ principle binds resource lifetime with object lifetime?",
    "question_hi": "रिसोर्स लाइफटाइम को ऑब्जेक्ट लाइफटाइम से जोड़ने वाला सिद्धांत कौन सा है?",
    "options_en": ["RAII", "GC", "OOP", "Heap allocation"],
    "options_hi": ["RAII", "GC", "OOP", "Heap allocation"],
    "answer_en": "RAII",
    "answer_hi": "RAII",
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