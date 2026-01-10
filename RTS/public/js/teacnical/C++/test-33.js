const questions= [
  {
    "num": 1,
    "question_en": "Which C++ keyword is used to prevent object copying?",
    "question_hi": "ऑब्जेक्ट कॉपी होने से रोकने के लिए C++ में कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["delete", "explicit", "final", "private"],
    "options_hi": ["delete", "explicit", "final", "private"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which C++ feature allows passing behavior as argument?",
    "question_hi": "किस C++ फीचर से बिहेवियर को आर्ग्यूमेंट की तरह पास किया जा सकता है?",
    "options_en": ["Lambda", "Macro", "Template", "Namespace"],
    "options_hi": ["Lambda", "Macro", "Template", "Namespace"],
    "answer_en": "Lambda",
    "answer_hi": "Lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which operator is used to overload assignment?",
    "question_hi": "असाइनमेंट ओवरलोड करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["=", "==", ":=", "=>"],
    "options_hi": ["=", "==", ":=", "=>"],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which C++ feature supports deterministic destruction?",
    "question_hi": "डिटरमिनिस्टिक डिस्ट्रक्शन किस C++ फीचर से मिलता है?",
    "options_en": ["RAII", "GC", "Heap", "Reference"],
    "options_hi": ["RAII", "GC", "Heap", "Reference"],
    "answer_en": "RAII",
    "answer_hi": "RAII",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword disables implicit constructor call?",
    "question_hi": "इम्प्लिसिट कन्स्ट्रक्टर कॉल रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["explicit", "delete", "final", "inline"],
    "options_hi": ["explicit", "delete", "final", "inline"],
    "answer_en": "explicit",
    "answer_hi": "explicit",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which C++ container provides random access iterator?",
    "question_hi": "रैंडम एक्सेस इटरेटर देने वाला C++ कंटेनर कौन सा है?",
    "options_en": ["vector", "list", "forward_list", "set"],
    "options_hi": ["vector", "list", "forward_list", "set"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which STL container stores unique sorted keys?",
    "question_hi": "यूनिक और सॉर्टेड कीज़ स्टोर करने वाला STL कंटेनर कौन सा है?",
    "options_en": ["set", "map", "unordered_set", "vector"],
    "options_hi": ["set", "map", "unordered_set", "vector"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which container allows duplicate keys?",
    "question_hi": "डुप्लिकेट कीज़ की अनुमति देने वाला कंटेनर कौन सा है?",
    "options_en": ["multimap", "map", "set", "unordered_set"],
    "options_hi": ["multimap", "map", "set", "unordered_set"],
    "answer_en": "multimap",
    "answer_hi": "multimap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which C++ header is needed for std::vector?",
    "question_hi": "std::vector के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["vector", "array", "list", "deque"],
    "options_hi": ["vector", "array", "list", "deque"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which C++ feature enables zero-cost abstraction?",
    "question_hi": "जीरो-कॉस्ट एब्स्ट्रैक्शन किस फीचर से मिलता है?",
    "options_en": ["Templates", "Macros", "Inheritance", "Virtual"],
    "options_hi": ["Templates", "Macros", "Inheritance", "Virtual"],
    "answer_en": "Templates",
    "answer_hi": "Templates",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword ensures variable is initialized once?",
    "question_hi": "वैरिएबल को सिर्फ एक बार इनिशियलाइज़ करने वाला कीवर्ड कौन सा है?",
    "options_en": ["const", "constexpr", "static", "register"],
    "options_hi": ["const", "constexpr", "static", "register"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword makes function evaluable at compile time?",
    "question_hi": "किस कीवर्ड से फंक्शन कंपाइल टाइम पर इवैल्युएट हो सकता है?",
    "options_en": ["constexpr", "inline", "static", "const"],
    "options_hi": ["constexpr", "inline", "static", "const"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which C++ cast is safest for numeric conversion?",
    "question_hi": "न्यूमेरिक कन्वर्ज़न के लिए सबसे सुरक्षित कास्ट कौन सा है?",
    "options_en": ["static_cast", "reinterpret_cast", "const_cast", "dynamic_cast"],
    "options_hi": ["static_cast", "reinterpret_cast", "const_cast", "dynamic_cast"],
    "answer_en": "static_cast",
    "answer_hi": "static_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which operator checks type at runtime?",
    "question_hi": "रनटाइम पर टाइप चेक करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["typeid", "sizeof", "decltype", "alignof"],
    "options_hi": ["typeid", "sizeof", "decltype", "alignof"],
    "answer_en": "typeid",
    "answer_hi": "typeid",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword ensures exception is not thrown?",
    "question_hi": "एक्सेप्शन न फेंके जाने को सुनिश्चित करने वाला कीवर्ड कौन सा है?",
    "options_en": ["noexcept", "throw", "try", "catch"],
    "options_hi": ["noexcept", "throw", "try", "catch"],
    "answer_en": "noexcept",
    "answer_hi": "noexcept",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which STL algorithm counts matching elements?",
    "question_hi": "मैचिंग एलिमेंट गिनने वाला STL एल्गोरिदम कौन सा है?",
    "options_en": ["count", "find", "search", "equal"],
    "options_hi": ["count", "find", "search", "equal"],
    "answer_en": "count",
    "answer_hi": "count",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which algorithm reverses container elements?",
    "question_hi": "कंटेनर एलिमेंट्स को रिवर्स करने वाला एल्गोरिदम कौन सा है?",
    "options_en": ["reverse", "rotate", "sort", "swap"],
    "options_hi": ["reverse", "rotate", "sort", "swap"],
    "answer_en": "reverse",
    "answer_hi": "reverse",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which container stores elements in contiguous memory?",
    "question_hi": "कंटिग्यूस मेमोरी में एलिमेंट्स स्टोर करने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "list", "set", "map"],
    "options_hi": ["vector", "list", "set", "map"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which C++ feature allows lazy evaluation?",
    "question_hi": "लेज़ी इवैल्युएशन की सुविधा देने वाला फीचर कौन सा है?",
    "options_en": ["std::future", "std::mutex", "std::lock_guard", "std::thread"],
    "options_hi": ["std::future", "std::mutex", "std::lock_guard", "std::thread"],
    "answer_en": "std::future",
    "answer_hi": "std::future",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which header is required for std::atomic?",
    "question_hi": "std::atomic के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["atomic", "mutex", "thread", "future"],
    "options_hi": ["atomic", "mutex", "thread", "future"],
    "answer_en": "atomic",
    "answer_hi": "atomic",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which feature ensures thread-safe initialization of static variable?",
    "question_hi": "स्टैटिक वैरिएबल की थ्रेड-सेफ इनिशियलाइज़ेशन किससे होती है?",
    "options_en": ["C++11", "C++03", "Compiler flag", "Mutex"],
    "options_hi": ["C++11", "C++03", "Compiler flag", "Mutex"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which operator accesses base class member explicitly?",
    "question_hi": "बेस क्लास मेंबर को एक्सप्लिसिट एक्सेस करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["::", ".", "->", ":"],
    "options_hi": ["::", ".", "->", ":"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which C++ feature enables function chaining?",
    "question_hi": "फंक्शन चेनिंग की सुविधा किस फीचर से मिलती है?",
    "options_en": ["Return reference", "Macro", "Template", "Overload"],
    "options_hi": ["Return reference", "Macro", "Template", "Overload"],
    "answer_en": "Return reference",
    "answer_hi": "Return reference",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword enforces interface-like behavior?",
    "question_hi": "इंटरफेस जैसा व्यवहार लागू करने वाला कीवर्ड कौन सा है?",
    "options_en": ["Pure virtual", "Struct", "Final", "Using"],
    "options_hi": ["Pure virtual", "Struct", "Final", "Using"],
    "answer_en": "Pure virtual",
    "answer_hi": "Pure virtual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which operator is overloaded by iostream?",
    "question_hi": "iostream द्वारा ओवरलोड किया गया ऑपरेटर कौन सा है?",
    "options_en": ["<<", ">>", "=", "[]"],
    "options_hi": ["<<", ">>", "=", "[]"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which C++ feature supports move-only types?",
    "question_hi": "मूव-ओनली टाइप्स को सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["Move semantics", "Copy constructor", "Destructor", "Inheritance"],
    "options_hi": ["Move semantics", "Copy constructor", "Destructor", "Inheritance"],
    "answer_en": "Move semantics",
    "answer_hi": "Move semantics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which smart pointer has exclusive ownership?",
    "question_hi": "एक्सक्लूसिव ओनरशिप वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword makes class non-inheritable?",
    "question_hi": "क्लास को इनहेरिट न होने देने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "sealed", "private", "static"],
    "options_hi": ["final", "sealed", "private", "static"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which feature allows compile-time branching?",
    "question_hi": "कंपाइल टाइम ब्रांचिंग की सुविधा देने वाला फीचर कौन सा है?",
    "options_en": ["if constexpr", "switch", "if", "macro"],
    "options_hi": ["if constexpr", "switch", "if", "macro"],
    "answer_en": "if constexpr",
    "answer_hi": "if constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which header is needed for std::tuple?",
    "question_hi": "std::tuple के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["tuple", "utility", "variant", "array"],
    "options_hi": ["tuple", "utility", "variant", "array"],
    "answer_en": "tuple",
    "answer_hi": "tuple",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which feature groups multiple values?",
    "question_hi": "कई वैल्यू को एक साथ ग्रुप करने वाला फीचर कौन सा है?",
    "options_en": ["struct", "class", "union", "enum"],
    "options_hi": ["struct", "class", "union", "enum"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which C++ construct holds only one active member?",
    "question_hi": "सिर्फ एक एक्टिव मेंबर रखने वाला C++ कन्स्ट्रक्ट कौन सा है?",
    "options_en": ["union", "struct", "class", "tuple"],
    "options_hi": ["union", "struct", "class", "tuple"],
    "answer_en": "union",
    "answer_hi": "union",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword defines strongly typed enum?",
    "question_hi": "स्ट्रॉन्गली टाइप्ड एनम बनाने वाला कीवर्ड कौन सा है?",
    "options_en": ["enum class", "enum", "typedef", "using"],
    "options_hi": ["enum class", "enum", "typedef", "using"],
    "answer_en": "enum class",
    "answer_hi": "enum class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which feature supports structured bindings?",
    "question_hi": "स्ट्रक्चर्ड बाइंडिंग्स को सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["C++17", "C++11", "C++14", "C++20"],
    "options_hi": ["C++17", "C++11", "C++14", "C++20"],
    "answer_en": "C++17",
    "answer_hi": "C++17",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword allows falling through switch case?",
    "question_hi": "switch case में फॉल-थ्रू की अनुमति देने वाला कीवर्ड कौन सा है?",
    "options_en": ["[[fallthrough]]", "continue", "goto", "default"],
    "options_hi": ["[[fallthrough]]", "continue", "goto", "default"],
    "answer_en": "[[fallthrough]]",
    "answer_hi": "[[fallthrough]]",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which operator compares two objects for equality?",
    "question_hi": "दो ऑब्जेक्ट की समानता जांचने वाला ऑपरेटर कौन सा है?",
    "options_en": ["==", "=", "!=", "<"],
    "options_hi": ["==", "=", "!=", "<"],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which feature improves performance by avoiding copy?",
    "question_hi": "कॉपी से बचाकर परफॉर्मेंस बढ़ाने वाला फीचर कौन सा है?",
    "options_en": ["Move constructor", "Copy constructor", "Destructor", "Virtual"],
    "options_hi": ["Move constructor", "Copy constructor", "Destructor", "Virtual"],
    "answer_en": "Move constructor",
    "answer_hi": "Move constructor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword specifies default implementation?",
    "question_hi": "डिफ़ॉल्ट इम्प्लीमेंटेशन बताने वाला कीवर्ड कौन सा है?",
    "options_en": ["default", "delete", "explicit", "final"],
    "options_hi": ["default", "delete", "explicit", "final"],
    "answer_en": "default",
    "answer_hi": "default",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which operator is used for pointer arithmetic?",
    "question_hi": "पॉइंटर एरिथमेटिक के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["+", "-", "*", "&"],
    "options_hi": ["+", "-", "*", "&"],
    "answer_en": "+",
    "answer_hi": "+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which feature supports concurrency?",
    "question_hi": "कनकरेंसी को सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["std::thread", "std::vector", "std::array", "std::string"],
    "options_hi": ["std::thread", "std::vector", "std::array", "std::string"],
    "answer_en": "std::thread",
    "answer_hi": "std::thread",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which header is needed for std::lock_guard?",
    "question_hi": "std::lock_guard के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["mutex", "thread", "atomic", "future"],
    "options_hi": ["mutex", "thread", "atomic", "future"],
    "answer_en": "mutex",
    "answer_hi": "mutex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which C++ feature prevents data race?",
    "question_hi": "डेटा रेस को रोकने वाला C++ फीचर कौन सा है?",
    "options_en": ["mutex", "thread", "future", "promise"],
    "options_hi": ["mutex", "thread", "future", "promise"],
    "answer_en": "mutex",
    "answer_hi": "mutex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword allows compile-time assertions?",
    "question_hi": "कंपाइल टाइम एसेर्शन के लिए कौन सा कीवर्ड है?",
    "options_en": ["static_assert", "assert", "constexpr", "check"],
    "options_hi": ["static_assert", "assert", "constexpr", "check"],
    "answer_en": "static_assert",
    "answer_hi": "static_assert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which operator gets address of variable?",
    "question_hi": "वैरिएबल का एड्रेस पाने वाला ऑपरेटर कौन सा है?",
    "options_en": ["&", "*", "->", "::"],
    "options_hi": ["&", "*", "->", "::"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which feature allows function call chaining?",
    "question_hi": "फंक्शन कॉल चेनिंग किससे संभव होती है?",
    "options_en": ["Returning reference", "Lambda", "Macro", "Template"],
    "options_hi": ["Returning reference", "Lambda", "Macro", "Template"],
    "answer_en": "Returning reference",
    "answer_hi": "Returning reference",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which C++ construct automatically calls destructor?",
    "question_hi": "कौन सा C++ कन्स्ट्रक्ट अपने आप डिस्ट्रक्टर कॉल करता है?",
    "options_en": ["Scope exit", "Heap", "Pointer", "Reference"],
    "options_hi": ["Scope exit", "Heap", "Pointer", "Reference"],
    "answer_en": "Scope exit",
    "answer_hi": "Scope exit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which operator accesses member through pointer?",
    "question_hi": "पॉइंटर के जरिए मेंबर एक्सेस करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["->", ".", "::", "*"],
    "options_hi": ["->", ".", "::", "*"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which header supports std::string?",
    "question_hi": "std::string के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["string", "cstring", "sstream", "iostream"],
    "options_hi": ["string", "cstring", "sstream", "iostream"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which C++ feature supports immutability?",
    "question_hi": "इम्यूटेबिलिटी को सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["const", "static", "mutable", "volatile"],
    "options_hi": ["const", "static", "mutable", "volatile"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which operator deletes dynamically allocated array?",
    "question_hi": "डायनामिक अलोकेट की गई ऐरे को डिलीट करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["delete[]", "delete", "free", "remove"],
    "options_hi": ["delete[]", "delete", "free", "remove"],
    "answer_en": "delete[]",
    "answer_hi": "delete[]",
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