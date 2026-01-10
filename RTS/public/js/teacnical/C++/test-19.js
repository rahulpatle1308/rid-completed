const questions= [
  {
    "num": 1,
    "question_en": "Which C++ keyword is used to specify a constant pointer?",
    "question_hi": "कांस्टेंट पॉइंटर बताने के लिए C++ में कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["const", "static", "constexpr", "mutable"],
    "options_hi": ["const", "static", "constexpr", "mutable"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which operator gives the size of a data type in bytes?",
    "question_hi": "डेटा टाइप का साइज बाइट्स में देने वाला ऑपरेटर कौन सा है?",
    "options_en": ["sizeof", "length", "size", "bytes"],
    "options_hi": ["sizeof", "length", "size", "bytes"],
    "answer_en": "sizeof",
    "answer_hi": "sizeof",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which C++ feature allows function overloading?",
    "question_hi": "फंक्शन ओवरलोडिंग की सुविधा कौन सा C++ फीचर देता है?",
    "options_en": ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    "options_hi": ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to inherit a class?",
    "question_hi": "क्लास को इनहेरिट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["public", "extends", "inherits", "implements"],
    "options_hi": ["public", "extends", "inherits", "implements"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which access specifier makes members accessible only inside the class?",
    "question_hi": "कौन सा एक्सेस स्पेसिफायर मेंबर को सिर्फ क्लास के अंदर ही एक्सेस करने देता है?",
    "options_en": ["private", "protected", "public", "internal"],
    "options_hi": ["private", "protected", "public", "internal"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which C++ concept binds data and functions together?",
    "question_hi": "डेटा और फंक्शन को एक साथ बांधने वाला C++ कॉन्सेप्ट कौन सा है?",
    "options_en": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    "options_hi": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    "answer_en": "Encapsulation",
    "answer_hi": "Encapsulation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword is used to create an object dynamically?",
    "question_hi": "डायनामिकली ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["new", "malloc", "create", "alloc"],
    "options_hi": ["new", "malloc", "create", "alloc"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to free dynamically allocated memory?",
    "question_hi": "डायनामिक मेमोरी को फ्री करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which C++ feature supports runtime polymorphism?",
    "question_hi": "रनटाइम पॉलीमॉर्फिज्म को सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["virtual function", "inline function", "template", "macro"],
    "options_hi": ["virtual function", "inline function", "template", "macro"],
    "answer_en": "virtual function",
    "answer_hi": "virtual function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword is used to override a virtual function?",
    "question_hi": "वर्चुअल फंक्शन को ओवरराइड बताने के लिए कौन सा कीवर्ड है?",
    "options_en": ["override", "virtual", "final", "static"],
    "options_hi": ["override", "virtual", "final", "static"],
    "answer_en": "override",
    "answer_hi": "override",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which C++ concept hides implementation details?",
    "question_hi": "इम्प्लीमेंटेशन डिटेल छुपाने वाला C++ कॉन्सेप्ट कौन सा है?",
    "options_en": ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    "options_hi": ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    "answer_en": "Abstraction",
    "answer_hi": "Abstraction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword is used to declare a pure virtual function?",
    "question_hi": "प्योर वर्चुअल फंक्शन डिक्लेयर करने के लिए क्या लिखा जाता है?",
    "options_en": ["= 0", "= default", "= delete", "virtual"],
    "options_hi": ["= 0", "= default", "= delete", "virtual"],
    "answer_en": "= 0",
    "answer_hi": "= 0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which container stores elements in contiguous memory?",
    "question_hi": "कौन सा कंटेनर कंटिग्युअस मेमोरी में एलिमेंट स्टोर करता है?",
    "options_en": ["vector", "list", "set", "map"],
    "options_hi": ["vector", "list", "set", "map"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which STL container uses key-value pairs?",
    "question_hi": "कौन सा STL कंटेनर key-value पेयर में डेटा रखता है?",
    "options_en": ["map", "vector", "list", "queue"],
    "options_hi": ["map", "vector", "list", "queue"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which C++ keyword prevents inheritance?",
    "question_hi": "इनहेरिटेंस को रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["final", "sealed", "private", "static"],
    "options_hi": ["final", "sealed", "private", "static"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which C++ feature allows generic programming?",
    "question_hi": "जेनरिक प्रोग्रामिंग की सुविधा कौन सा C++ फीचर देता है?",
    "options_en": ["Templates", "Macros", "Namespaces", "Overloading"],
    "options_hi": ["Templates", "Macros", "Namespaces", "Overloading"],
    "answer_en": "Templates",
    "answer_hi": "Templates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword is used to define a namespace?",
    "question_hi": "नेमस्पेस डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["namespace", "scope", "package", "module"],
    "options_hi": ["namespace", "scope", "package", "module"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which operator resolves scope in C++?",
    "question_hi": "C++ में स्कोप रिज़ॉल्यूशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["::", ".", "->", ":"],
    "options_hi": ["::", ".", "->", ":"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which header file is required for input-output operations?",
    "question_hi": "इनपुट-आउटपुट ऑपरेशन के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["iostream", "stdio", "fstream", "iomanip"],
    "options_hi": ["iostream", "stdio", "fstream", "iomanip"],
    "answer_en": "iostream",
    "answer_hi": "iostream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which stream object is used for output?",
    "question_hi": "आउटपुट के लिए कौन सा स्ट्रीम ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["cout", "cin", "cerr", "clog"],
    "options_hi": ["cout", "cin", "cerr", "clog"],
    "answer_en": "cout",
    "answer_hi": "cout",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword is used for exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "error", "catching", "handle"],
    "options_hi": ["try", "error", "catching", "handle"],
    "answer_en": "try",
    "answer_hi": "try",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword handles an exception?",
    "question_hi": "एक्सेप्शन को हैंडल करने वाला कीवर्ड कौन सा है?",
    "options_en": ["catch", "throw", "try", "handle"],
    "options_hi": ["catch", "throw", "try", "handle"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword generates an exception?",
    "question_hi": "एक्सेप्शन जनरेट करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["throw", "try", "catch", "error"],
    "options_hi": ["throw", "try", "catch", "error"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
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
    "num": 25,
    "question_en": "Which container does not allow duplicate keys?",
    "question_hi": "डुप्लिकेट keys की अनुमति न देने वाला कंटेनर कौन सा है?",
    "options_en": ["map", "multimap", "unordered_multimap", "vector"],
    "options_hi": ["map", "multimap", "unordered_multimap", "vector"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which STL algorithm finds an element?",
    "question_hi": "एलिमेंट खोजने के लिए कौन सा STL एल्गोरिदम है?",
    "options_en": ["find", "search", "locate", "lookup"],
    "options_hi": ["find", "search", "locate", "lookup"],
    "answer_en": "find",
    "answer_hi": "find",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which header is needed for std::find?",
    "question_hi": "std::find के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["algorithm", "vector", "iterator", "utility"],
    "options_hi": ["algorithm", "vector", "iterator", "utility"],
    "answer_en": "algorithm",
    "answer_hi": "algorithm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which C++ feature supports multiple inheritance?",
    "question_hi": "मल्टीपल इनहेरिटेंस को सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["Classes", "Structures", "Functions", "Namespaces"],
    "options_hi": ["Classes", "Structures", "Functions", "Namespaces"],
    "answer_en": "Classes",
    "answer_hi": "Classes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword specifies compile-time evaluation?",
    "question_hi": "कंपाइल टाइम इवैल्यूएशन बताने वाला कीवर्ड कौन सा है?",
    "options_en": ["constexpr", "const", "static", "inline"],
    "options_hi": ["constexpr", "const", "static", "inline"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword allows a variable to be changed in const function?",
    "question_hi": "const फंक्शन में वैरिएबल बदलने की अनुमति कौन सा कीवर्ड देता है?",
    "options_en": ["mutable", "volatile", "static", "register"],
    "options_hi": ["mutable", "volatile", "static", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which C++ feature enables code reuse?",
    "question_hi": "कोड री-यूज़ की सुविधा कौन सा C++ फीचर देता है?",
    "options_en": ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    "options_hi": ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    "answer_en": "Inheritance",
    "answer_hi": "Inheritance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword is used to define a constant variable?",
    "question_hi": "कांस्टेंट वैरिएबल डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["const", "constexpr", "static", "final"],
    "options_hi": ["const", "constexpr", "static", "final"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which operator is used for dynamic casting?",
    "question_hi": "डायनामिक कास्टिंग के लिए कौन सा ऑपरेटर है?",
    "options_en": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "options_hi": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "answer_en": "dynamic_cast",
    "answer_hi": "dynamic_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which cast is checked at runtime?",
    "question_hi": "रनटाइम पर चेक होने वाला कास्ट कौन सा है?",
    "options_en": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "options_hi": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "answer_en": "dynamic_cast",
    "answer_hi": "dynamic_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword is used to define inline functions?",
    "question_hi": "इनलाइन फंक्शन डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["inline", "static", "virtual", "constexpr"],
    "options_hi": ["inline", "static", "virtual", "constexpr"],
    "answer_en": "inline",
    "answer_hi": "inline",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
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
    "num": 37,
    "question_en": "Which keyword is used to prevent copying of objects?",
    "question_hi": "ऑब्जेक्ट की कॉपी रोकने के लिए कौन सा तरीका उपयोग होता है?",
    "options_en": ["= delete", "private", "final", "static"],
    "options_hi": ["= delete", "private", "final", "static"],
    "answer_en": "= delete",
    "answer_hi": "= delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which STL container follows LIFO?",
    "question_hi": "LIFO नियम फॉलो करने वाला STL कंटेनर कौन सा है?",
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
    "question_hi": "FIFO नियम फॉलो करने वाला STL कंटेनर कौन सा है?",
    "options_en": ["queue", "stack", "deque", "list"],
    "options_hi": ["queue", "stack", "deque", "list"],
    "answer_en": "queue",
    "answer_hi": "queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which C++ feature allows anonymous functions?",
    "question_hi": "एनोनिमस फंक्शन की सुविधा कौन सा C++ फीचर देता है?",
    "options_en": ["Lambda", "Functor", "Macro", "Template"],
    "options_hi": ["Lambda", "Functor", "Macro", "Template"],
    "answer_en": "Lambda",
    "answer_hi": "Lambda",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which symbol starts a lambda expression?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन किस चिन्ह से शुरू होता है?",
    "options_en": ["[]", "()", "{}", "<>"],
    "options_hi": ["[]", "()", "{}", "<>"],
    "answer_en": "[]",
    "answer_hi": "[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword is used for multithreading support?",
    "question_hi": "मल्टीथ्रेडिंग सपोर्ट के लिए कौन सा कीवर्ड/फीचर है?",
    "options_en": ["thread", "mutex", "atomic", "future"],
    "options_hi": ["thread", "mutex", "atomic", "future"],
    "answer_en": "thread",
    "answer_hi": "thread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
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
    "num": 44,
    "question_en": "Which C++ feature ensures thread safety of variables?",
    "question_hi": "वैरिएबल की थ्रेड सेफ्टी सुनिश्चित करने वाला फीचर कौन सा है?",
    "options_en": ["atomic", "mutex", "lock_guard", "thread"],
    "options_hi": ["atomic", "mutex", "lock_guard", "thread"],
    "answer_en": "atomic",
    "answer_hi": "atomic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which C++ standard introduced lambda expressions?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन किस C++ स्टैंडर्ड में आया?",
    "options_en": ["C++11", "C++03", "C++14", "C++17"],
    "options_hi": ["C++11", "C++03", "C++14", "C++17"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword tells compiler not to throw exceptions?",
    "question_hi": "कंपाइलर को एक्सेप्शन न फेंकने का संकेत देने वाला कीवर्ड कौन सा है?",
    "options_en": ["noexcept", "throw", "try", "catch"],
    "options_hi": ["noexcept", "throw", "try", "catch"],
    "answer_en": "noexcept",
    "answer_hi": "noexcept",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
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
    "num": 48,
    "question_en": "Which C++ feature can hold multiple types safely?",
    "question_hi": "कई टाइप सेफ तरीके से रखने वाला फीचर कौन सा है?",
    "options_en": ["variant", "union", "void*", "reinterpret_cast"],
    "options_hi": ["variant", "union", "void*", "reinterpret_cast"],
    "answer_en": "variant",
    "answer_hi": "variant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which C++ container gives highest priority element first?",
    "question_hi": "सबसे अधिक प्रायोरिटी वाला एलिमेंट पहले देने वाला कंटेनर कौन सा है?",
    "options_en": ["priority_queue", "queue", "stack", "deque"],
    "options_hi": ["priority_queue", "queue", "stack", "deque"],
    "answer_en": "priority_queue",
    "answer_hi": "priority_queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword defines compile-time assertion?",
    "question_hi": "कंपाइल टाइम पर कंडीशन चेक करने वाला कीवर्ड कौन सा है?",
    "options_en": ["static_assert", "assert", "constexpr", "check"],
    "options_hi": ["static_assert", "assert", "constexpr", "check"],
    "answer_en": "static_assert",
    "answer_hi": "static_assert",
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