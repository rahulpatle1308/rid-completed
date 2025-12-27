const questions = [
  {
    "num": 1,
    "question_en": "Which C++ keyword is used to declare a constant member function?",
    "question_hi": "C++ में कॉन्स्टेंट मेंबर फंक्शन घोषित करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["const", "static", "inline", "virtual"],
    "options_hi": ["const", "static", "inline", "virtual"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which operator is used to access class members through object?",
    "question_hi": "ऑब्जेक्ट के जरिए क्लास मेंबर्स एक्सेस करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": [".", "->", "::", "*"],
    "options_hi": [".", "->", "::", "*"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which C++ feature allows compile-time polymorphism?",
    "question_hi": "कंपाइल टाइम पॉलीमॉर्फ़िज़्म देने वाला C++ फीचर कौन सा है?",
    "options_en": ["Function overloading", "Virtual functions", "Inheritance", "RTTI"],
    "options_hi": ["Function overloading", "Virtual functions", "Inheritance", "RTTI"],
    "answer_en": "Function overloading",
    "answer_hi": "Function overloading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to define inline functions?",
    "question_hi": "इनलाइन फंक्शन डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["inline", "static", "register", "constexpr"],
    "options_hi": ["inline", "static", "register", "constexpr"],
    "answer_en": "inline",
    "answer_hi": "inline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword allows variable to change inside const function?",
    "question_hi": "const फंक्शन के अंदर वैरिएबल बदलने की अनुमति देने वाला कीवर्ड कौन सा है?",
    "options_en": ["mutable", "volatile", "static", "register"],
    "options_hi": ["mutable", "volatile", "static", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which C++ container maintains insertion order?",
    "question_hi": "इंसर्शन ऑर्डर बनाए रखने वाला C++ कंटेनर कौन सा है?",
    "options_en": ["vector", "set", "map", "unordered_set"],
    "options_hi": ["vector", "set", "map", "unordered_set"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword is used to specify base class constructor call?",
    "question_hi": "बेस क्लास कन्स्ट्रक्टर कॉल करने के लिए कौन सा उपयोग होता है?",
    "options_en": ["initializer list", "super", "base", "this"],
    "options_hi": ["initializer list", "super", "base", "this"],
    "answer_en": "initializer list",
    "answer_hi": "initializer list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which operator is overloaded in std::cout?",
    "question_hi": "std::cout में कौन सा ऑपरेटर ओवरलोड होता है?",
    "options_en": ["<<", ">>", "=", "[]"],
    "options_hi": ["<<", ">>", "=", "[]"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which header file is required for std::map?",
    "question_hi": "std::map के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["map", "unordered_map", "set", "vector"],
    "options_hi": ["map", "unordered_map", "set", "vector"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which C++ keyword prevents implicit copy?",
    "question_hi": "इम्प्लिसिट कॉपी को रोकने वाला C++ कीवर्ड कौन सा है?",
    "options_en": ["delete", "explicit", "default", "final"],
    "options_hi": ["delete", "explicit", "default", "final"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which operator is used to allocate array dynamically?",
    "question_hi": "डायनामिक रूप से ऐरे अलोकेट करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["new[]", "new", "malloc", "alloc"],
    "options_hi": ["new[]", "new", "malloc", "alloc"],
    "answer_en": "new[]",
    "answer_hi": "new[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which function releases memory allocated by new[]?",
    "question_hi": "new[] से अलोकेट की गई मेमोरी को रिलीज़ करने वाला कौन सा है?",
    "options_en": ["delete[]", "delete", "free", "remove"],
    "options_hi": ["delete[]", "delete", "free", "remove"],
    "answer_en": "delete[]",
    "answer_hi": "delete[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword ensures variable is not optimized?",
    "question_hi": "वैरिएबल को ऑप्टिमाइज़ होने से रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["volatile", "mutable", "register", "static"],
    "options_hi": ["volatile", "mutable", "register", "static"],
    "answer_en": "volatile",
    "answer_hi": "volatile",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which STL container provides constant time average lookup?",
    "question_hi": "औसतन कॉन्स्टेंट टाइम लुकअप देने वाला STL कंटेनर कौन सा है?",
    "options_en": ["unordered_map", "map", "vector", "list"],
    "options_hi": ["unordered_map", "map", "vector", "list"],
    "answer_en": "unordered_map",
    "answer_hi": "unordered_map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which C++ feature allows deferred execution?",
    "question_hi": "डिफर्ड एक्ज़ीक्यूशन की सुविधा देने वाला फीचर कौन सा है?",
    "options_en": ["std::async", "std::thread", "std::mutex", "std::future"],
    "options_hi": ["std::async", "std::thread", "std::mutex", "std::future"],
    "answer_en": "std::async",
    "answer_hi": "std::async",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which header is required for std::future?",
    "question_hi": "std::future के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["future", "thread", "mutex", "atomic"],
    "options_hi": ["future", "thread", "mutex", "atomic"],
    "answer_en": "future",
    "answer_hi": "future",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword allows accessing private members?",
    "question_hi": "प्राइवेट मेंबर्स को एक्सेस करने की अनुमति देने वाला कीवर्ड कौन सा है?",
    "options_en": ["friend", "using", "public", "protected"],
    "options_hi": ["friend", "using", "public", "protected"],
    "answer_en": "friend",
    "answer_hi": "friend",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which C++ container does not support iterators?",
    "question_hi": "कौन सा C++ कंटेनर इटरेटर सपोर्ट नहीं करता?",
    "options_en": ["stack", "vector", "list", "deque"],
    "options_hi": ["stack", "vector", "list", "deque"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which C++ keyword defines type-safe enumeration?",
    "question_hi": "टाइप-सेफ एनमरेशन डिफाइन करने वाला C++ कीवर्ड कौन सा है?",
    "options_en": ["enum class", "enum", "struct", "typedef"],
    "options_hi": ["enum class", "enum", "struct", "typedef"],
    "answer_en": "enum class",
    "answer_hi": "enum class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which operator is used to get size of data type?",
    "question_hi": "डेटा टाइप का साइज पाने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["sizeof", "length", "size", "count"],
    "options_hi": ["sizeof", "length", "size", "count"],
    "answer_en": "sizeof",
    "answer_hi": "sizeof",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword specifies function cannot be overridden?",
    "question_hi": "फंक्शन को ओवरराइड न होने देने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "static", "virtual", "sealed"],
    "options_hi": ["final", "static", "virtual", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which C++ feature binds function call at runtime?",
    "question_hi": "रनटाइम पर फंक्शन कॉल को बाँधने वाला फीचर कौन सा है?",
    "options_en": ["Virtual function", "Inline function", "Template", "Overload"],
    "options_hi": ["Virtual function", "Inline function", "Template", "Overload"],
    "answer_en": "Virtual function",
    "answer_hi": "Virtual function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which header supports std::chrono?",
    "question_hi": "std::chrono के लिए कौन सी हेडर फाइल उपयोग होती है?",
    "options_en": ["chrono", "ctime", "time", "timer"],
    "options_hi": ["chrono", "ctime", "time", "timer"],
    "answer_en": "chrono",
    "answer_hi": "chrono",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which STL algorithm removes consecutive duplicates?",
    "question_hi": "लगातार डुप्लिकेट हटाने वाला STL एल्गोरिदम कौन सा है?",
    "options_en": ["unique", "remove", "erase", "distinct"],
    "options_hi": ["unique", "remove", "erase", "distinct"],
    "answer_en": "unique",
    "answer_hi": "unique",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which C++ feature allows code reuse?",
    "question_hi": "कोड री-यूज़ की सुविधा देने वाला फीचर कौन सा है?",
    "options_en": ["Inheritance", "Encapsulation", "Abstraction", "Inlining"],
    "options_hi": ["Inheritance", "Encapsulation", "Abstraction", "Inlining"],
    "answer_en": "Inheritance",
    "answer_hi": "Inheritance",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which header is required for std::stack?",
    "question_hi": "std::stack के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["stack", "queue", "deque", "vector"],
    "options_hi": ["stack", "queue", "deque", "vector"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which operator is used for pointer dereferencing?",
    "question_hi": "पॉइंटर डीरेफरेंस करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["*", "&", "->", "::"],
    "options_hi": ["*", "&", "->", "::"],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword creates namespace alias?",
    "question_hi": "नेमस्पेस एलियास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["namespace", "using", "typedef", "alias"],
    "options_hi": ["namespace", "using", "typedef", "alias"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which feature avoids deep copy overhead?",
    "question_hi": "डीप कॉपी ओवरहेड से बचाने वाला फीचर कौन सा है?",
    "options_en": ["Move semantics", "Copy constructor", "Destructor", "Virtual"],
    "options_hi": ["Move semantics", "Copy constructor", "Destructor", "Virtual"],
    "answer_en": "Move semantics",
    "answer_hi": "Move semantics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword disables move constructor?",
    "question_hi": "मूव कन्स्ट्रक्टर को डिसेबल करने वाला कीवर्ड कौन सा है?",
    "options_en": ["delete", "default", "explicit", "final"],
    "options_hi": ["delete", "default", "explicit", "final"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which C++ feature ensures exception safety?",
    "question_hi": "एक्सेप्शन सेफ्टी सुनिश्चित करने वाला फीचर कौन सा है?",
    "options_en": ["RAII", "GC", "Heap", "Pointer"],
    "options_hi": ["RAII", "GC", "Heap", "Pointer"],
    "answer_en": "RAII",
    "answer_hi": "RAII",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword checks constant expression at compile time?",
    "question_hi": "कंपाइल टाइम पर कॉन्स्टेंट एक्सप्रेशन चेक करने वाला कीवर्ड कौन सा है?",
    "options_en": ["static_assert", "assert", "constexpr", "const"],
    "options_hi": ["static_assert", "assert", "constexpr", "const"],
    "answer_en": "static_assert",
    "answer_hi": "static_assert",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which operator is used to call destructor explicitly?",
    "question_hi": "डिस्ट्रक्टर को एक्सप्लिसिट कॉल करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["~", "delete", "free", "::"],
    "options_hi": ["~", "delete", "free", "::"],
    "answer_en": "~",
    "answer_hi": "~",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which header supports std::pair?",
    "question_hi": "std::pair के लिए कौन सी हेडर फाइल उपयोग होती है?",
    "options_en": ["utility", "tuple", "map", "algorithm"],
    "options_hi": ["utility", "tuple", "map", "algorithm"],
    "answer_en": "utility",
    "answer_hi": "utility",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which STL container is implemented as heap?",
    "question_hi": "हीप के रूप में इम्प्लीमेंट किया गया STL कंटेनर कौन सा है?",
    "options_en": ["priority_queue", "queue", "stack", "deque"],
    "options_hi": ["priority_queue", "queue", "stack", "deque"],
    "answer_en": "priority_queue",
    "answer_hi": "priority_queue",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword allows rethrowing exception?",
    "question_hi": "एक्सेप्शन को दोबारा फेंकने के लिए कौन सा उपयोग होता है?",
    "options_en": ["throw", "catch", "retry", "raise"],
    "options_hi": ["throw", "catch", "retry", "raise"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
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
    "num": 38,
    "question_en": "Which keyword allows fallthrough in switch?",
    "question_hi": "switch में फॉलथ्रू की अनुमति देने वाला कीवर्ड कौन सा है?",
    "options_en": ["[[fallthrough]]", "continue", "default", "goto"],
    "options_hi": ["[[fallthrough]]", "continue", "default", "goto"],
    "answer_en": "[[fallthrough]]",
    "answer_hi": "[[fallthrough]]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which feature improves type deduction?",
    "question_hi": "टाइप डिडक्शन को बेहतर बनाने वाला फीचर कौन सा है?",
    "options_en": ["auto", "typedef", "using", "decltype"],
    "options_hi": ["auto", "typedef", "using", "decltype"],
    "answer_en": "auto",
    "answer_hi": "auto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword deduces expression type?",
    "question_hi": "एक्सप्रेशन का टाइप डिड्यूस करने वाला कीवर्ड कौन सा है?",
    "options_en": ["decltype", "auto", "typeof", "typeid"],
    "options_hi": ["decltype", "auto", "typeof", "typeid"],
    "answer_en": "decltype",
    "answer_hi": "decltype",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which operator compares pointer addresses?",
    "question_hi": "पॉइंटर एड्रेस की तुलना करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["==", "=", "*", "&"],
    "options_hi": ["==", "=", "*", "&"],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which header supports std::optional?",
    "question_hi": "std::optional के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["optional", "variant", "any", "utility"],
    "options_hi": ["optional", "variant", "any", "utility"],
    "answer_en": "optional",
    "answer_hi": "optional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which C++ feature stores one of many types?",
    "question_hi": "कई टाइप में से एक स्टोर करने वाला C++ फीचर कौन सा है?",
    "options_en": ["variant", "any", "tuple", "optional"],
    "options_hi": ["variant", "any", "tuple", "optional"],
    "answer_en": "variant",
    "answer_hi": "variant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which feature stores value of any type?",
    "question_hi": "किसी भी टाइप का वैल्यू स्टोर करने वाला फीचर कौन सा है?",
    "options_en": ["any", "variant", "tuple", "optional"],
    "options_hi": ["any", "variant", "tuple", "optional"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which header supports std::any?",
    "question_hi": "std::any के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["any", "variant", "optional", "utility"],
    "options_hi": ["any", "variant", "optional", "utility"],
    "answer_en": "any",
    "answer_hi": "any",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which feature enables range-based for loop?",
    "question_hi": "रेंज-बेस्ड for लूप को सक्षम करने वाला फीचर कौन सा है?",
    "options_en": ["begin/end", "iterator", "pointer", "array"],
    "options_hi": ["begin/end", "iterator", "pointer", "array"],
    "answer_en": "begin/end",
    "answer_hi": "begin/end",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which operator is used in range-based for?",
    "question_hi": "रेंज-बेस्ड for में कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": [":", "::", "->", "="],
    "options_hi": [":", "::", "->", "="],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which keyword allows compile-time branching?",
    "question_hi": "कंपाइल टाइम ब्रांचिंग की अनुमति देने वाला कीवर्ड कौन सा है?",
    "options_en": ["if constexpr", "if", "switch", "constexpr"],
    "options_hi": ["if constexpr", "if", "switch", "constexpr"],
    "answer_en": "if constexpr",
    "answer_hi": "if constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which feature enables type introspection?",
    "question_hi": "टाइप इंट्रोस्पेक्शन सक्षम करने वाला फीचर कौन सा है?",
    "options_en": ["RTTI", "Templates", "Macros", "Overloading"],
    "options_hi": ["RTTI", "Templates", "Macros", "Overloading"],
    "answer_en": "RTTI",
    "answer_hi": "RTTI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which operator retrieves runtime type information?",
    "question_hi": "रनटाइम टाइप इनफॉर्मेशन पाने वाला ऑपरेटर कौन सा है?",
    "options_en": ["typeid", "sizeof", "decltype", "typeof"],
    "options_hi": ["typeid", "sizeof", "decltype", "typeof"],
    "answer_en": "typeid",
    "answer_hi": "typeid",
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