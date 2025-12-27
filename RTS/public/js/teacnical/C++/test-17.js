const question= [
  {
    "num": 1,
    "question_en": "Which C++ keyword is used to define a compile-time constant expression?",
    "question_hi": "कंपाइल टाइम कॉन्स्टेंट एक्सप्रेशन डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["constexpr", "const", "static", "inline"],
    "options_hi": ["constexpr", "const", "static", "inline"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which operator is used to access members of a structure through a pointer?",
    "question_hi": "पॉइंटर के जरिए स्ट्रक्चर के मेंबर एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["->", ".", "*", "&"],
    "options_hi": ["->", ".", "*", "&"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to define a destructor?",
    "question_hi": "डिस्ट्रक्टर डिफाइन करने के लिए कौन सा सिंबल/तरीका उपयोग होता है?",
    "options_en": ["~ClassName", "delete", "destructor", "free"],
    "options_hi": ["~ClassName", "delete", "destructor", "free"],
    "answer_en": "~ClassName",
    "answer_hi": "~ClassName",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which header file provides std::pair?",
    "question_hi": "std::pair किस हेडर फाइल में मिलता है?",
    "options_en": ["utility", "tuple", "map", "algorithm"],
    "options_hi": ["utility", "tuple", "map", "algorithm"],
    "answer_en": "utility",
    "answer_hi": "utility",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which C++ feature allows a function to return multiple values?",
    "question_hi": "एक फंक्शन से कई वैल्यू रिटर्न करने के लिए कौन सा फीचर उपयोग होता है?",
    "options_en": ["tuple", "struct", "array", "vector"],
    "options_hi": ["tuple", "struct", "array", "vector"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which keyword prevents a function from being overridden?",
    "question_hi": "किसी फंक्शन को ओवरराइड होने से रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "override", "delete", "static"],
    "options_hi": ["final", "override", "delete", "static"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which STL container provides random access iterator?",
    "question_hi": "कौन सा STL कंटेनर रैंडम एक्सेस इटरेटर देता है?",
    "options_en": ["vector", "list", "forward_list", "set"],
    "options_hi": ["vector", "list", "forward_list", "set"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which function removes all elements from a vector?",
    "question_hi": "vector से सभी एलिमेंट हटाने वाला फंक्शन कौन सा है?",
    "options_en": ["clear()", "erase()", "remove()", "pop_back()"],
    "options_hi": ["clear()", "erase()", "remove()", "pop_back()"],
    "answer_en": "clear()",
    "answer_hi": "clear()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which header file is required for std::sort?",
    "question_hi": "std::sort के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["algorithm", "vector", "iterator", "numeric"],
    "options_hi": ["algorithm", "vector", "iterator", "numeric"],
    "answer_en": "algorithm",
    "answer_hi": "algorithm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which C++ concept ensures resource release automatically?",
    "question_hi": "रिसोर्स अपने आप रिलीज़ होने की गारंटी देने वाला C++ कॉन्सेप्ट कौन सा है?",
    "options_en": ["RAII", "Garbage Collection", "Pointers", "Heap Allocation"],
    "options_hi": ["RAII", "Garbage Collection", "Pointers", "Heap Allocation"],
    "answer_en": "RAII",
    "answer_hi": "RAII",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to check exception safety?",
    "question_hi": "एक्सेप्शन सेफ्टी बताने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["noexcept", "throw", "try", "catch"],
    "options_hi": ["noexcept", "throw", "try", "catch"],
    "answer_en": "noexcept",
    "answer_hi": "noexcept",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which container stores elements in sorted order automatically?",
    "question_hi": "कौन सा कंटेनर अपने आप एलिमेंट्स को सॉर्टेड ऑर्डर में रखता है?",
    "options_en": ["set", "vector", "deque", "unordered_set"],
    "options_hi": ["set", "vector", "deque", "unordered_set"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which operator is used to overload array indexing?",
    "question_hi": "एरे इंडेक्सिंग ओवरलोड करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["operator[]", "operator()", "operator*", "operator->"],
    "options_hi": ["operator[]", "operator()", "operator*", "operator->"],
    "answer_en": "operator[]",
    "answer_hi": "operator[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which C++ feature allows deferred execution?",
    "question_hi": "डिफर्ड एक्जीक्यूशन की सुविधा देने वाला C++ फीचर कौन सा है?",
    "options_en": ["std::future", "std::thread", "std::mutex", "std::lock_guard"],
    "options_hi": ["std::future", "std::thread", "std::mutex", "std::lock_guard"],
    "answer_en": "std::future",
    "answer_hi": "std::future",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function launches asynchronous task?",
    "question_hi": "असिंक्रोनस टास्क लॉन्च करने वाला फंक्शन कौन सा है?",
    "options_en": ["std::async", "std::launch", "std::thread", "std::promise"],
    "options_hi": ["std::async", "std::launch", "std::thread", "std::promise"],
    "answer_en": "std::async",
    "answer_hi": "std::async",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which keyword allows modification of member in const object?",
    "question_hi": "const ऑब्जेक्ट में मेंबर को बदलने की अनुमति देने वाला कीवर्ड कौन सा है?",
    "options_en": ["mutable", "static", "volatile", "register"],
    "options_hi": ["mutable", "static", "volatile", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which header provides std::optional?",
    "question_hi": "std::optional किस हेडर में मिलता है?",
    "options_en": ["optional", "variant", "any", "utility"],
    "options_hi": ["optional", "variant", "any", "utility"],
    "answer_en": "optional",
    "answer_hi": "optional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which C++ feature can store different types safely?",
    "question_hi": "सेफ तरीके से अलग-अलग टाइप स्टोर करने वाला फीचर कौन सा है?",
    "options_en": ["std::variant", "void*", "union", "reinterpret_cast"],
    "options_hi": ["std::variant", "void*", "union", "reinterpret_cast"],
    "answer_en": "std::variant",
    "answer_hi": "std::variant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which operator is used to check pointer validity?",
    "question_hi": "पॉइंटर की वैधता जांचने के लिए किससे तुलना की जाती है?",
    "options_en": ["nullptr", "NULL", "0", "void"],
    "options_hi": ["nullptr", "NULL", "0", "void"],
    "answer_en": "nullptr",
    "answer_hi": "nullptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which C++ standard introduced nullptr?",
    "question_hi": "nullptr किस C++ स्टैंडर्ड में आया?",
    "options_en": ["C++11", "C++03", "C++14", "C++17"],
    "options_hi": ["C++11", "C++03", "C++14", "C++17"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which header is required for std::unique_ptr?",
    "question_hi": "std::unique_ptr के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["memory", "pointer", "utility", "smart"],
    "options_hi": ["memory", "pointer", "utility", "smart"],
    "answer_en": "memory",
    "answer_hi": "memory",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which smart pointer allows single ownership?",
    "question_hi": "सिंगल ओनरशिप देने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function transfers ownership of unique_ptr?",
    "question_hi": "unique_ptr की ओनरशिप ट्रांसफर करने वाला फंक्शन कौन सा है?",
    "options_en": ["move()", "copy()", "swap()", "release()"],
    "options_hi": ["move()", "copy()", "swap()", "release()"],
    "answer_en": "move()",
    "answer_hi": "move()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which C++ feature enables perfect forwarding?",
    "question_hi": "परफेक्ट फॉरवर्डिंग सक्षम करने वाला फीचर कौन सा है?",
    "options_en": ["std::forward", "std::move", "auto", "decltype"],
    "options_hi": ["std::forward", "std::move", "auto", "decltype"],
    "answer_en": "std::forward",
    "answer_hi": "std::forward",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword deduces return type automatically?",
    "question_hi": "रिटर्न टाइप अपने आप डिड्यूस करने वाला कीवर्ड कौन सा है?",
    "options_en": ["auto", "decltype", "typename", "using"],
    "options_hi": ["auto", "decltype", "typename", "using"],
    "answer_en": "auto",
    "answer_hi": "auto",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which operator is used for bitwise XOR?",
    "question_hi": "बिटवाइज़ XOR के लिए कौन सा ऑपरेटर है?",
    "options_en": ["^", "|", "&", "~"],
    "options_hi": ["^", "|", "&", "~"],
    "answer_en": "^",
    "answer_hi": "^",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which header provides std::numeric_limits?",
    "question_hi": "std::numeric_limits किस हेडर में मिलता है?",
    "options_en": ["limits", "climits", "cmath", "numbers"],
    "options_hi": ["limits", "climits", "cmath", "numbers"],
    "answer_en": "limits",
    "answer_hi": "limits",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which C++ feature supports range-based loops?",
    "question_hi": "रेंज-बेस्ड लूप को सपोर्ट करने वाला C++ फीचर कौन सा है?",
    "options_en": ["range-based for", "iterator", "pointer", "algorithm"],
    "options_hi": ["range-based for", "iterator", "pointer", "algorithm"],
    "answer_en": "range-based for",
    "answer_hi": "range-based for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword is used to create an alias for a type?",
    "question_hi": "किसी टाइप का एलियास बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["using", "typedef", "alias", "define"],
    "options_hi": ["using", "typedef", "alias", "define"],
    "answer_en": "using",
    "answer_hi": "using",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which C++ feature replaces typedef with templates support?",
    "question_hi": "टेम्पलेट सपोर्ट के साथ typedef को रिप्लेस करने वाला फीचर कौन सा है?",
    "options_en": ["using", "auto", "decltype", "template"],
    "options_hi": ["using", "auto", "decltype", "template"],
    "answer_en": "using",
    "answer_hi": "using",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
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
    "num": 32,
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
    "num": 33,
    "question_en": "Which keyword is used to explicitly default a function?",
    "question_hi": "फंक्शन को एक्सप्लिसिटली डिफॉल्ट करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["= default", "= delete", "default", "explicit"],
    "options_hi": ["= default", "= delete", "default", "explicit"],
    "answer_en": "= default",
    "answer_hi": "= default",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword explicitly disables a function?",
    "question_hi": "किसी फंक्शन को पूरी तरह डिसेबल करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["= delete", "= default", "delete", "final"],
    "options_hi": ["= delete", "= default", "delete", "final"],
    "answer_en": "= delete",
    "answer_hi": "= delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which header is required for std::thread?",
    "question_hi": "std::thread के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["thread", "mutex", "future", "atomic"],
    "options_hi": ["thread", "mutex", "future", "atomic"],
    "answer_en": "thread",
    "answer_hi": "thread",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which function suspends current thread?",
    "question_hi": "करेंट थ्रेड को सस्पेंड करने वाला फंक्शन कौन सा है?",
    "options_en": ["sleep_for()", "wait()", "pause()", "hold()"],
    "options_hi": ["sleep_for()", "wait()", "pause()", "hold()"],
    "answer_en": "sleep_for()",
    "answer_hi": "sleep_for()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which C++ feature supports time duration handling?",
    "question_hi": "टाइम ड्यूरेशन हैंडल करने वाला C++ फीचर कौन सा है?",
    "options_en": ["chrono", "ctime", "timer", "clock"],
    "options_hi": ["chrono", "ctime", "timer", "clock"],
    "answer_en": "chrono",
    "answer_hi": "chrono",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which container allows duplicate keys?",
    "question_hi": "डुप्लिकेट keys अलाउ करने वाला कंटेनर कौन सा है?",
    "options_en": ["multimap", "map", "unordered_map", "set"],
    "options_hi": ["multimap", "map", "unordered_map", "set"],
    "answer_en": "multimap",
    "answer_hi": "multimap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which container allows duplicate values?",
    "question_hi": "डुप्लिकेट वैल्यू अलाउ करने वाला कंटेनर कौन सा है?",
    "options_en": ["multiset", "set", "unordered_set", "vector"],
    "options_hi": ["multiset", "set", "unordered_set", "vector"],
    "answer_en": "multiset",
    "answer_hi": "multiset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword forces variable storage in memory?",
    "question_hi": "वैरिएबल को मेमोरी में रखने के लिए मजबूर करने वाला कीवर्ड कौन सा है?",
    "options_en": ["volatile", "static", "mutable", "register"],
    "options_hi": ["volatile", "static", "mutable", "register"],
    "answer_en": "volatile",
    "answer_hi": "volatile",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which operator is used for conditional branching?",
    "question_hi": "कंडीशनल ब्रांचिंग के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["?:", "if", "switch", "::"],
    "options_hi": ["?:", "if", "switch", "::"],
    "answer_en": "?:",
    "answer_hi": "?:",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which header provides std::function?",
    "question_hi": "std::function किस हेडर में मिलता है?",
    "options_en": ["functional", "algorithm", "utility", "memory"],
    "options_hi": ["functional", "algorithm", "utility", "memory"],
    "answer_en": "functional",
    "answer_hi": "functional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which C++ feature supports callable wrappers?",
    "question_hi": "कॉलएबल रैपर सपोर्ट करने वाला C++ फीचर कौन सा है?",
    "options_en": ["std::function", "lambda", "functor", "callback"],
    "options_hi": ["std::function", "lambda", "functor", "callback"],
    "answer_en": "std::function",
    "answer_hi": "std::function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which C++ feature captures variables by value or reference?",
    "question_hi": "वैल्यू या रेफरेंस से वैरिएबल कैप्चर करने वाला फीचर कौन सा है?",
    "options_en": ["Lambda", "Functor", "Pointer", "Macro"],
    "options_hi": ["Lambda", "Functor", "Pointer", "Macro"],
    "answer_en": "Lambda",
    "answer_hi": "Lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which symbol starts lambda capture list?",
    "question_hi": "लैम्ब्डा कैप्चर लिस्ट किस चिन्ह से शुरू होती है?",
    "options_en": ["[]", "()", "{}", "<>"],
    "options_hi": ["[]", "()", "{}", "<>"],
    "answer_en": "[]",
    "answer_hi": "[]",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which container provides FIFO behavior?",
    "question_hi": "FIFO व्यवहार देने वाला कंटेनर कौन सा है?",
    "options_en": ["queue", "stack", "priority_queue", "deque"],
    "options_hi": ["queue", "stack", "priority_queue", "deque"],
    "answer_en": "queue",
    "answer_hi": "queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which container provides LIFO behavior?",
    "question_hi": "LIFO व्यवहार देने वाला कंटेनर कौन सा है?",
    "options_en": ["stack", "queue", "deque", "list"],
    "options_hi": ["stack", "queue", "deque", "list"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which header provides std::stack?",
    "question_hi": "std::stack किस हेडर में मिलता है?",
    "options_en": ["stack", "queue", "deque", "vector"],
    "options_hi": ["stack", "queue", "deque", "vector"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which container gives highest priority element first?",
    "question_hi": "सबसे उच्च प्राथमिकता वाला एलिमेंट पहले देने वाला कंटेनर कौन सा है?",
    "options_en": ["priority_queue", "queue", "stack", "deque"],
    "options_hi": ["priority_queue", "queue", "stack", "deque"],
    "answer_en": "priority_queue",
    "answer_hi": "priority_queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword tells compiler not to inline a function?",
    "question_hi": "कंपाइलर को फंक्शन इनलाइन न करने का संकेत देने वाला कीवर्ड कौन सा है?",
    "options_en": ["noinline", "inline", "volatile", "static"],
    "options_hi": ["noinline", "inline", "volatile", "static"],
    "answer_en": "noinline",
    "answer_hi": "noinline",
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