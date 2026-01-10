const questions=  [
  {
    "num": 1,
    "question_en": "Which C++ keyword is used to define an abstract class?",
    "question_hi": "एब्सट्रैक्ट क्लास बनाने के लिए C++ में क्या जरूरी होता है?",
    "options_en": ["Pure virtual function", "abstract", "virtual", "interface"],
    "options_hi": ["Pure virtual function", "abstract", "virtual", "interface"],
    "answer_en": "Pure virtual function",
    "answer_hi": "Pure virtual function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which operator is used to access class members using an object?",
    "question_hi": "ऑब्जेक्ट के जरिए क्लास मेंबर एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": [".", "->", "::", "*"],
    "options_hi": [".", "->", "::", "*"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is automatically called when an object is destroyed?",
    "question_hi": "ऑब्जेक्ट नष्ट होने पर कौन सा फंक्शन अपने आप कॉल होता है?",
    "options_en": ["Destructor", "Constructor", "Delete", "Free"],
    "options_hi": ["Destructor", "Constructor", "Delete", "Free"],
    "answer_en": "Destructor",
    "answer_hi": "Destructor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which C++ feature allows same function name with different parameters?",
    "question_hi": "एक ही नाम के फंक्शन को अलग-अलग पैरामीटर के साथ इस्तेमाल करने की सुविधा कौन सा फीचर देता है?",
    "options_en": ["Function overloading", "Inheritance", "Overriding", "Templates"],
    "options_hi": ["Function overloading", "Inheritance", "Overriding", "Templates"],
    "answer_en": "Function overloading",
    "answer_hi": "Function overloading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword is used to call base class constructor?",
    "question_hi": "बेस क्लास के कंस्ट्रक्टर को कॉल करने के लिए क्या उपयोग होता है?",
    "options_en": ["Initializer list", "super", "base", "this"],
    "options_hi": ["Initializer list", "super", "base", "this"],
    "answer_en": "Initializer list",
    "answer_hi": "Initializer list",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which access specifier allows access in derived classes only?",
    "question_hi": "कौन सा एक्सेस स्पेसिफायर डेराइव्ड क्लास में एक्सेस देता है?",
    "options_en": ["protected", "private", "public", "internal"],
    "options_hi": ["protected", "private", "public", "internal"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which C++ feature helps in resolving function call at runtime?",
    "question_hi": "रनटाइम पर फंक्शन कॉल रिज़ॉल्व करने वाला फीचर कौन सा है?",
    "options_en": ["Dynamic binding", "Static binding", "Inlining", "Templates"],
    "options_hi": ["Dynamic binding", "Static binding", "Inlining", "Templates"],
    "answer_en": "Dynamic binding",
    "answer_hi": "Dynamic binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which operator allocates memory on heap?",
    "question_hi": "हीप मेमोरी पर मेमोरी अलोकेट करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword prevents object copying?",
    "question_hi": "ऑब्जेक्ट की कॉपी को रोकने के लिए कौन सा तरीका उपयोग होता है?",
    "options_en": ["= delete", "private", "final", "static"],
    "options_hi": ["= delete", "private", "final", "static"],
    "answer_en": "= delete",
    "answer_hi": "= delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which container stores elements in sorted order?",
    "question_hi": "कौन सा कंटेनर एलिमेंट्स को अपने आप सॉर्टेड रखता है?",
    "options_en": ["set", "vector", "deque", "list"],
    "options_hi": ["set", "vector", "deque", "list"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which C++ feature supports generic data types?",
    "question_hi": "जेनरिक डेटा टाइप सपोर्ट करने वाला C++ फीचर कौन सा है?",
    "options_en": ["Templates", "Macros", "Namespaces", "Overloading"],
    "options_hi": ["Templates", "Macros", "Namespaces", "Overloading"],
    "answer_en": "Templates",
    "answer_hi": "Templates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which operator is used to check type at runtime?",
    "question_hi": "रनटाइम पर टाइप चेक करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["typeid", "sizeof", "decltype", "static_cast"],
    "options_hi": ["typeid", "sizeof", "decltype", "static_cast"],
    "answer_en": "typeid",
    "answer_hi": "typeid",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which header file is needed for std::map?",
    "question_hi": "std::map के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["map", "unordered_map", "set", "vector"],
    "options_hi": ["map", "unordered_map", "set", "vector"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which C++ feature avoids multiple inclusion of header files?",
    "question_hi": "हेडर फाइल को कई बार इनक्लूड होने से रोकने के लिए क्या उपयोग होता है?",
    "options_en": ["#pragma once", "#define", "#ifdef", "#include"],
    "options_hi": ["#pragma once", "#define", "#ifdef", "#include"],
    "answer_en": "#pragma once",
    "answer_hi": "#pragma once",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword allows derived class to access base class method?",
    "question_hi": "डेराइव्ड क्लास को बेस क्लास मेथड एक्सेस करने देने वाला स्पेसिफायर कौन सा है?",
    "options_en": ["protected", "private", "public", "friend"],
    "options_hi": ["protected", "private", "public", "friend"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which STL container does not allow duplicate elements?",
    "question_hi": "डुप्लिकेट एलिमेंट की अनुमति न देने वाला STL कंटेनर कौन सा है?",
    "options_en": ["set", "multiset", "vector", "list"],
    "options_hi": ["set", "multiset", "vector", "list"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword makes a variable thread-safe?",
    "question_hi": "वैरिएबल को थ्रेड-सेफ बनाने वाला फीचर कौन सा है?",
    "options_en": ["atomic", "mutex", "volatile", "register"],
    "options_hi": ["atomic", "mutex", "volatile", "register"],
    "answer_en": "atomic",
    "answer_hi": "atomic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which C++ feature supports anonymous functions?",
    "question_hi": "एनोनिमस फंक्शन सपोर्ट करने वाला C++ फीचर कौन सा है?",
    "options_en": ["Lambda", "Functor", "Macro", "Pointer"],
    "options_hi": ["Lambda", "Functor", "Macro", "Pointer"],
    "answer_en": "Lambda",
    "answer_hi": "Lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which container is used to implement priority-based access?",
    "question_hi": "प्रायोरिटी के आधार पर एक्सेस देने वाला कंटेनर कौन सा है?",
    "options_en": ["priority_queue", "queue", "stack", "deque"],
    "options_hi": ["priority_queue", "queue", "stack", "deque"],
    "answer_en": "priority_queue",
    "answer_hi": "priority_queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which operator converts one pointer type to another safely?",
    "question_hi": "सेफ तरीके से एक पॉइंटर टाइप को दूसरे में बदलने वाला ऑपरेटर कौन सा है?",
    "options_en": ["dynamic_cast", "reinterpret_cast", "const_cast", "static_cast"],
    "options_hi": ["dynamic_cast", "reinterpret_cast", "const_cast", "static_cast"],
    "answer_en": "dynamic_cast",
    "answer_hi": "dynamic_cast",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which C++ standard introduced auto keyword?",
    "question_hi": "auto कीवर्ड किस C++ स्टैंडर्ड में आया?",
    "options_en": ["C++11", "C++03", "C++14", "C++17"],
    "options_hi": ["C++11", "C++03", "C++14", "C++17"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which container provides random access iterators?",
    "question_hi": "रैंडम एक्सेस इटरेटर देने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "list", "set", "map"],
    "options_hi": ["vector", "list", "set", "map"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword stops function overriding?",
    "question_hi": "फंक्शन ओवरराइड को रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "override", "virtual", "static"],
    "options_hi": ["final", "override", "virtual", "static"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which C++ feature ensures automatic resource cleanup?",
    "question_hi": "ऑटोमैटिक रिसोर्स क्लीनअप सुनिश्चित करने वाला फीचर कौन सा है?",
    "options_en": ["RAII", "Garbage Collection", "Heap", "Pointer"],
    "options_hi": ["RAII", "Garbage Collection", "Heap", "Pointer"],
    "answer_en": "RAII",
    "answer_hi": "RAII",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which header is required for std::unique_ptr?",
    "question_hi": "std::unique_ptr के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["memory", "utility", "pointer", "smart"],
    "options_hi": ["memory", "utility", "pointer", "smart"],
    "answer_en": "memory",
    "answer_hi": "memory",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
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
    "num": 27,
    "question_en": "Which smart pointer avoids circular dependency?",
    "question_hi": "सर्कुलर डिपेंडेंसी से बचाने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "options_hi": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "answer_en": "weak_ptr",
    "answer_hi": "weak_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword specifies no exception guarantee?",
    "question_hi": "एक्सेप्शन न फेंकने की गारंटी बताने वाला कीवर्ड कौन सा है?",
    "options_en": ["noexcept", "throw", "try", "catch"],
    "options_hi": ["noexcept", "throw", "try", "catch"],
    "answer_en": "noexcept",
    "answer_hi": "noexcept",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which C++ feature supports compile-time assertions?",
    "question_hi": "कंपाइल टाइम पर कंडीशन चेक करने वाला फीचर कौन सा है?",
    "options_en": ["static_assert", "assert", "constexpr", "check"],
    "options_hi": ["static_assert", "assert", "constexpr", "check"],
    "answer_en": "static_assert",
    "answer_hi": "static_assert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which operator is used to resolve namespace scope?",
    "question_hi": "नेमस्पेस स्कोप रिज़ॉल्व करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["::", ".", "->", ":"],
    "options_hi": ["::", ".", "->", ":"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which STL algorithm sorts a container?",
    "question_hi": "कंटेनर को सॉर्ट करने वाला STL एल्गोरिदम कौन सा है?",
    "options_en": ["sort", "order", "arrange", "sequence"],
    "options_hi": ["sort", "order", "arrange", "sequence"],
    "answer_en": "sort",
    "answer_hi": "sort",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which header is required for std::sort?",
    "question_hi": "std::sort के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["algorithm", "vector", "iterator", "numeric"],
    "options_hi": ["algorithm", "vector", "iterator", "numeric"],
    "answer_en": "algorithm",
    "answer_hi": "algorithm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which container allows fast insertion at both ends?",
    "question_hi": "दोनों सिरों से तेज़ी से इंसर्ट करने वाला कंटेनर कौन सा है?",
    "options_en": ["deque", "vector", "list", "queue"],
    "options_hi": ["deque", "vector", "list", "queue"],
    "answer_en": "deque",
    "answer_hi": "deque",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which STL container follows LIFO principle?",
    "question_hi": "LIFO सिद्धांत फॉलो करने वाला STL कंटेनर कौन सा है?",
    "options_en": ["stack", "queue", "deque", "list"],
    "options_hi": ["stack", "queue", "deque", "list"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which STL container follows FIFO principle?",
    "question_hi": "FIFO सिद्धांत फॉलो करने वाला STL कंटेनर कौन सा है?",
    "options_en": ["queue", "stack", "deque", "vector"],
    "options_hi": ["queue", "stack", "deque", "vector"],
    "answer_en": "queue",
    "answer_hi": "queue",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which header provides std::thread?",
    "question_hi": "std::thread किस हेडर में मिलता है?",
    "options_en": ["thread", "mutex", "future", "atomic"],
    "options_hi": ["thread", "mutex", "future", "atomic"],
    "answer_en": "thread",
    "answer_hi": "thread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which header provides std::mutex?",
    "question_hi": "std::mutex किस हेडर में मिलता है?",
    "options_en": ["mutex", "thread", "atomic", "future"],
    "options_hi": ["mutex", "thread", "atomic", "future"],
    "answer_en": "mutex",
    "answer_hi": "mutex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which C++ feature locks a mutex automatically?",
    "question_hi": "म्यूटेक्स को ऑटोमैटिक लॉक करने वाला फीचर कौन सा है?",
    "options_en": ["lock_guard", "unique_lock", "mutex", "atomic"],
    "options_hi": ["lock_guard", "unique_lock", "mutex", "atomic"],
    "answer_en": "lock_guard",
    "answer_hi": "lock_guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which C++ feature handles time durations?",
    "question_hi": "टाइम ड्यूरेशन हैंडल करने वाला C++ फीचर कौन सा है?",
    "options_en": ["chrono", "ctime", "timer", "clock"],
    "options_hi": ["chrono", "ctime", "timer", "clock"],
    "answer_en": "chrono",
    "answer_hi": "chrono",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function pauses current thread for duration?",
    "question_hi": "करेंट थ्रेड को कुछ समय के लिए रोकने वाला फंक्शन कौन सा है?",
    "options_en": ["sleep_for", "wait", "pause", "delay"],
    "options_hi": ["sleep_for", "wait", "pause", "delay"],
    "answer_en": "sleep_for",
    "answer_hi": "sleep_for",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which C++ feature avoids name conflicts in large programs?",
    "question_hi": "बड़े प्रोग्राम में नेम कॉन्फ्लिक्ट से बचाने वाला फीचर कौन सा है?",
    "options_en": ["namespace", "class", "struct", "template"],
    "options_hi": ["namespace", "class", "struct", "template"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword is used to include standard library?",
    "question_hi": "स्टैंडर्ड लाइब्रेरी को जोड़ने के लिए कौन सा निर्देश उपयोग होता है?",
    "options_en": ["#include", "#define", "#pragma", "#import"],
    "options_hi": ["#include", "#define", "#pragma", "#import"],
    "answer_en": "#include",
    "answer_hi": "#include",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which operator is used to get address of a variable?",
    "question_hi": "वैरिएबल का एड्रेस पाने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["&", "*", "->", "::"],
    "options_hi": ["&", "*", "->", "::"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which operator is used to dereference a pointer?",
    "question_hi": "पॉइंटर को डी-रेफरेंस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["*", "&", "->", "."],
    "options_hi": ["*", "&", "->", "."],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword specifies compile-time constant variable?",
    "question_hi": "कंपाइल टाइम कांस्टेंट वैरिएबल बताने वाला कीवर्ड कौन सा है?",
    "options_en": ["constexpr", "const", "static", "inline"],
    "options_hi": ["constexpr", "const", "static", "inline"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which header provides std::array?",
    "question_hi": "std::array किस हेडर में मिलता है?",
    "options_en": ["array", "vector", "deque", "list"],
    "options_hi": ["array", "vector", "deque", "list"],
    "answer_en": "array",
    "answer_hi": "array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which container has fixed size?",
    "question_hi": "फिक्स्ड साइज़ वाला कंटेनर कौन सा है?",
    "options_en": ["std::array", "vector", "deque", "list"],
    "options_hi": ["std::array", "vector", "deque", "list"],
    "answer_en": "std::array",
    "answer_hi": "std::array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which C++ feature deduces return type automatically?",
    "question_hi": "रिटर्न टाइप अपने आप डिड्यूस करने वाला फीचर कौन सा है?",
    "options_en": ["auto", "decltype", "using", "template"],
    "options_hi": ["auto", "decltype", "using", "template"],
    "answer_en": "auto",
    "answer_hi": "auto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword is used to create type alias?",
    "question_hi": "टाइप एलियास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["using", "typedef", "alias", "define"],
    "options_hi": ["using", "typedef", "alias", "define"],
    "answer_en": "using",
    "answer_hi": "using",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which C++ feature replaces typedef with template support?",
    "question_hi": "टेम्पलेट सपोर्ट के साथ typedef को रिप्लेस करने वाला फीचर कौन सा है?",
    "options_en": ["using", "auto", "decltype", "constexpr"],
    "options_hi": ["using", "auto", "decltype", "constexpr"],
    "answer_en": "using",
    "answer_hi": "using",
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