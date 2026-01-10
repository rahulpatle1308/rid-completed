const questions= [
  {
    "num": 1,
    "question_en": "Which C++ keyword is used to define a constant variable?",
    "question_hi": "कांस्टेंट वैरिएबल बनाने के लिए C++ में कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["const", "static", "final", "constexpr"],
    "options_hi": ["const", "static", "final", "constexpr"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which symbol is used to end a C++ statement?",
    "question_hi": "C++ स्टेटमेंट को समाप्त करने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": [";", ":", ".", ","],
    "options_hi": [";", ":", ".", ","],
    "answer_en": ";",
    "answer_hi": ";",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which header file is required for input and output in C++?",
    "question_hi": "C++ में इनपुट और आउटपुट के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["iostream", "stdio.h", "fstream", "conio.h"],
    "options_hi": ["iostream", "stdio.h", "fstream", "conio.h"],
    "answer_en": "iostream",
    "answer_hi": "iostream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to create an object in C++?",
    "question_hi": "C++ में ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["new", "class", "object", "create"],
    "options_hi": ["new", "class", "object", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator is used to access members of a structure?",
    "question_hi": "स्ट्रक्चर के मेंबर्स को एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": [".", "->", "::", "*"],
    "options_hi": [".", "->", "::", "*"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which C++ concept supports code reusability?",
    "question_hi": "कोड रीयूज़ेबिलिटी को सपोर्ट करने वाला C++ कॉन्सेप्ट कौन सा है?",
    "options_en": ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    "options_hi": ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    "answer_en": "Inheritance",
    "answer_hi": "Inheritance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword is used to define a class in C++?",
    "question_hi": "C++ में क्लास डिफाइन करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["class", "struct", "object", "define"],
    "options_hi": ["class", "struct", "object", "define"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which type of inheritance allows multiple base classes?",
    "question_hi": "कौन सा इनहेरिटेंस एक से ज्यादा बेस क्लास की अनुमति देता है?",
    "options_en": ["Multiple inheritance", "Single inheritance", "Hybrid inheritance", "Multilevel inheritance"],
    "options_hi": ["Multiple inheritance", "Single inheritance", "Hybrid inheritance", "Multilevel inheritance"],
    "answer_en": "Multiple inheritance",
    "answer_hi": "Multiple inheritance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to allocate dynamic memory?",
    "question_hi": "डायनेमिक मेमोरी अलोकेट करने के लिए कौन सा फंक्शन उपयोग होता है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword releases allocated memory in C++?",
    "question_hi": "अलोकेट की गई मेमोरी को रिलीज़ करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which operator is used to resolve scope in C++?",
    "question_hi": "स्कोप रिज़ॉल्व करने के लिए C++ में कौन सा ऑपरेटर है?",
    "options_en": ["::", ".", "->", ":"],
    "options_hi": ["::", ".", "->", ":"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which loop checks condition at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार कंडीशन चेक करता है?",
    "options_en": ["do-while", "while", "for", "foreach"],
    "options_hi": ["do-while", "while", "for", "foreach"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which C++ feature binds data and functions together?",
    "question_hi": "डेटा और फंक्शन को एक साथ बांधने वाला फीचर कौन सा है?",
    "options_en": ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    "options_hi": ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
    "answer_en": "Encapsulation",
    "answer_hi": "Encapsulation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to inherit a class publicly?",
    "question_hi": "क्लास को पब्लिक रूप से इनहेरिट करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["public", "private", "protected", "virtual"],
    "options_hi": ["public", "private", "protected", "virtual"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which operator is used to increment a variable by one?",
    "question_hi": "वैरिएबल को 1 से बढ़ाने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["++", "+=", "+", "--"],
    "options_hi": ["++", "+=", "+", "--"],
    "answer_en": "++",
    "answer_hi": "++",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which C++ container stores elements sequentially?",
    "question_hi": "एलिमेंट्स को सीक्वेंस में स्टोर करने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "set", "map", "queue"],
    "options_hi": ["vector", "set", "map", "queue"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which header file is required for std::vector?",
    "question_hi": "std::vector के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["vector", "array", "list", "deque"],
    "options_hi": ["vector", "array", "list", "deque"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which keyword is used to stop inheritance?",
    "question_hi": "इनहेरिटेंस को रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["final", "const", "static", "sealed"],
    "options_hi": ["final", "const", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword is used to define virtual function?",
    "question_hi": "वर्चुअल फंक्शन डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["virtual", "override", "final", "static"],
    "options_hi": ["virtual", "override", "final", "static"],
    "answer_en": "virtual",
    "answer_hi": "virtual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which C++ feature supports runtime polymorphism?",
    "question_hi": "रनटाइम पॉलीमॉर्फ़िज़्म को सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["Virtual functions", "Templates", "Overloading", "Macros"],
    "options_hi": ["Virtual functions", "Templates", "Overloading", "Macros"],
    "answer_en": "Virtual functions",
    "answer_hi": "Virtual functions",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword is used to define a namespace?",
    "question_hi": "नेमस्पेस डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["namespace", "scope", "using", "package"],
    "options_hi": ["namespace", "scope", "using", "package"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword brings namespace members into scope?",
    "question_hi": "नेमस्पेस के मेंबर्स को स्कोप में लाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["using", "namespace", "include", "scope"],
    "options_hi": ["using", "namespace", "include", "scope"],
    "answer_en": "using",
    "answer_hi": "using",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which operator compares two values?",
    "question_hi": "दो वैल्यू की तुलना करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["==", "=", "!=", "<>"],
    "options_hi": ["==", "=", "!=", "<>"],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which C++ feature supports compile-time evaluation?",
    "question_hi": "कंपाइल टाइम पर वैल्यू कैलकुलेट करने वाला फीचर कौन सा है?",
    "options_en": ["constexpr", "const", "inline", "static"],
    "options_hi": ["constexpr", "const", "inline", "static"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword is used to handle exceptions?",
    "question_hi": "एक्सेप्शन हैंडल करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "throw", "catch", "All of these"],
    "options_hi": ["try", "throw", "catch", "All of these"],
    "answer_en": "All of these",
    "answer_hi": "All of these",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which C++ header supports exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग के लिए कौन सी हेडर फाइल होती है?",
    "options_en": ["exception", "error", "stdexcept", "both exception and stdexcept"],
    "options_hi": ["exception", "error", "stdexcept", "both exception and stdexcept"],
    "answer_en": "both exception and stdexcept",
    "answer_hi": "both exception and stdexcept",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which container stores key-value pairs?",
    "question_hi": "की-वैल्यू पेयर स्टोर करने वाला कंटेनर कौन सा है?",
    "options_en": ["map", "vector", "list", "deque"],
    "options_hi": ["map", "vector", "list", "deque"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which container allows duplicate keys?",
    "question_hi": "डुप्लिकेट की को अनुमति देने वाला कंटेनर कौन सा है?",
    "options_en": ["multimap", "map", "set", "unordered_map"],
    "options_hi": ["multimap", "map", "set", "unordered_map"],
    "answer_en": "multimap",
    "answer_hi": "multimap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which C++ feature avoids memory leaks?",
    "question_hi": "मेमोरी लीक से बचाने वाला C++ फीचर कौन सा है?",
    "options_en": ["Smart pointers", "Garbage collector", "Delete keyword", "Malloc"],
    "options_hi": ["Smart pointers", "Garbage collector", "Delete keyword", "Malloc"],
    "answer_en": "Smart pointers",
    "answer_hi": "Smart pointers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which smart pointer has single ownership?",
    "question_hi": "सिंगल ओनरशिप वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which smart pointer does not increase reference count?",
    "question_hi": "रेफरेंस काउंट न बढ़ाने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "options_hi": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "answer_en": "weak_ptr",
    "answer_hi": "weak_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which STL algorithm finds an element?",
    "question_hi": "एलिमेंट खोजने वाला STL एल्गोरिदम कौन सा है?",
    "options_en": ["find", "search", "locate", "match"],
    "options_hi": ["find", "search", "locate", "match"],
    "answer_en": "find",
    "answer_hi": "find",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which header file is required for std::find?",
    "question_hi": "std::find के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["algorithm", "iterator", "vector", "numeric"],
    "options_hi": ["algorithm", "iterator", "vector", "numeric"],
    "answer_en": "algorithm",
    "answer_hi": "algorithm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which C++ feature supports multithreading?",
    "question_hi": "मल्टीथ्रेडिंग सपोर्ट करने वाला C++ फीचर कौन सा है?",
    "options_en": ["std::thread", "pthread", "async", "timer"],
    "options_hi": ["std::thread", "pthread", "async", "timer"],
    "answer_en": "std::thread",
    "answer_hi": "std::thread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which header file is required for std::thread?",
    "question_hi": "std::thread के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["thread", "mutex", "future", "atomic"],
    "options_hi": ["thread", "mutex", "future", "atomic"],
    "answer_en": "thread",
    "answer_hi": "thread",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword prevents data race?",
    "question_hi": "डेटा रेस से बचाने के लिए कौन सा फीचर उपयोग होता है?",
    "options_en": ["mutex", "atomic", "volatile", "lock"],
    "options_hi": ["mutex", "atomic", "volatile", "lock"],
    "answer_en": "mutex",
    "answer_hi": "mutex",
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
    "question_en": "Which C++ feature locks mutex automatically?",
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
    "question_en": "Which library handles time in C++?",
    "question_hi": "C++ में समय को हैंडल करने वाली लाइब्रेरी कौन सी है?",
    "options_en": ["chrono", "ctime", "timer", "clock"],
    "options_hi": ["chrono", "ctime", "timer", "clock"],
    "answer_en": "chrono",
    "answer_hi": "chrono",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which function pauses a thread for duration?",
    "question_hi": "थ्रेड को कुछ समय के लिए रोकने वाला फंक्शन कौन सा है?",
    "options_en": ["sleep_for", "wait", "pause", "delay"],
    "options_hi": ["sleep_for", "wait", "pause", "delay"],
    "answer_en": "sleep_for",
    "answer_hi": "sleep_for",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword is used to define inline function?",
    "question_hi": "इनलाइन फंक्शन डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["inline", "static", "virtual", "constexpr"],
    "options_hi": ["inline", "static", "virtual", "constexpr"],
    "answer_en": "inline",
    "answer_hi": "inline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which C++ feature reduces function call overhead?",
    "question_hi": "फंक्शन कॉल ओवरहेड कम करने वाला फीचर कौन सा है?",
    "options_en": ["inline", "virtual", "template", "macro"],
    "options_hi": ["inline", "virtual", "template", "macro"],
    "answer_en": "inline",
    "answer_hi": "inline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which operator gets address of variable?",
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
    "question_en": "Which operator dereferences a pointer?",
    "question_hi": "पॉइंटर को डीरेफरेंस करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["*", "&", "->", "."],
    "options_hi": ["*", "&", "->", "."],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword defines compile-time assertion?",
    "question_hi": "कंपाइल टाइम असर्शन डिफाइन करने वाला कीवर्ड कौन सा है?",
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
    "question_en": "Which keyword is used to define type alias?",
    "question_hi": "टाइप एलियास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["using", "typedef", "alias", "define"],
    "options_hi": ["using", "typedef", "alias", "define"],
    "answer_en": "using",
    "answer_hi": "using",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which C++ feature replaces macros safely?",
    "question_hi": "मैक्रो को सेफ तरीके से रिप्लेस करने वाला फीचर कौन सा है?",
    "options_en": ["constexpr", "inline", "template", "All of these"],
    "options_hi": ["constexpr", "inline", "template", "All of these"],
    "answer_en": "All of these",
    "answer_hi": "All of these",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword prevents function overriding?",
    "question_hi": "फंक्शन ओवरराइड को रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "override", "virtual", "static"],
    "options_hi": ["final", "override", "virtual", "static"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which C++ feature manages resource lifetime automatically?",
    "question_hi": "रिसोर्स का लाइफटाइम अपने आप मैनेज करने वाला फीचर कौन सा है?",
    "options_en": ["RAII", "Garbage collection", "Heap", "Destructor"],
    "options_hi": ["RAII", "Garbage collection", "Heap", "Destructor"],
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