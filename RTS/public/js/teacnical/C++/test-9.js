const questions = [
  {
    "num": 1,
    "question_en": "Who developed the C++ programming language?",
    "question_hi": "C++ प्रोग्रामिंग भाषा किसने विकसित की?",
    "options_en": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    "options_hi": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    "answer_en": "Bjarne Stroustrup",
    "answer_hi": "Bjarne Stroustrup",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which feature of C++ supports function overloading?",
    "question_hi": "C++ का कौन सा फीचर फंक्शन ओवरलोडिंग को सपोर्ट करता है?",
    "options_en": ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    "options_hi": ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which access specifier makes members accessible only within the class?",
    "question_hi": "कौन सा एक्सेस स्पेसिफ़ायर मेंबर्स को सिर्फ क्लास के अंदर ही एक्सेस करने देता है?",
    "options_en": ["private", "public", "protected", "internal"],
    "options_hi": ["private", "public", "protected", "internal"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to define an abstract class in C++?",
    "question_hi": "C++ में एब्स्ट्रैक्ट क्लास बनाने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["virtual", "abstract", "interface", "pure"],
    "options_hi": ["virtual", "abstract", "interface", "pure"],
    "answer_en": "virtual",
    "answer_hi": "virtual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the correct syntax of pure virtual function?",
    "question_hi": "प्योर वर्चुअल फंक्शन का सही सिंटैक्स क्या है?",
    "options_en": ["virtual void f() = 0;", "void virtual f();", "virtual f() = 0;", "abstract void f();"],
    "options_hi": ["virtual void f() = 0;", "void virtual f();", "virtual f() = 0;", "abstract void f();"],
    "answer_en": "virtual void f() = 0;",
    "answer_hi": "virtual void f() = 0;",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which memory area stores global variables?",
    "question_hi": "ग्लोबल वेरिएबल्स किस मेमोरी एरिया में स्टोर होते हैं?",
    "options_en": ["Data Segment", "Stack", "Heap", "Register"],
    "options_hi": ["Data Segment", "Stack", "Heap", "Register"],
    "answer_en": "Data Segment",
    "answer_hi": "Data Segment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword is used to prevent inheritance?",
    "question_hi": "इनहेरिटेंस रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["final", "static", "const", "sealed"],
    "options_hi": ["final", "static", "const", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which operator is overloaded for output stream?",
    "question_hi": "आउटपुट स्ट्रीम के लिए कौन सा ऑपरेटर ओवरलोड होता है?",
    "options_en": ["<<", ">>", "=", "=="],
    "options_hi": ["<<", ">>", "=", "=="],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which STL container works on LIFO principle?",
    "question_hi": "कौन सा STL कंटेनर LIFO सिद्धांत पर काम करता है?",
    "options_en": ["stack", "queue", "deque", "priority_queue"],
    "options_hi": ["stack", "queue", "deque", "priority_queue"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which STL container works on FIFO principle?",
    "question_hi": "कौन सा STL कंटेनर FIFO सिद्धांत पर काम करता है?",
    "options_en": ["queue", "stack", "set", "vector"],
    "options_hi": ["queue", "stack", "set", "vector"],
    "answer_en": "queue",
    "answer_hi": "queue",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to define a constant expression?",
    "question_hi": "कॉन्स्टेंट एक्सप्रेशन डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["constexpr", "const", "static", "define"],
    "options_hi": ["constexpr", "const", "static", "define"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which type of casting is safest in C++?",
    "question_hi": "C++ में सबसे सुरक्षित कास्टिंग कौन सी है?",
    "options_en": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "options_hi": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "answer_en": "dynamic_cast",
    "answer_hi": "dynamic_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword allows function call chaining?",
    "question_hi": "फंक्शन कॉल चेनिंग की अनुमति कौन सा कीवर्ड देता है?",
    "options_en": ["return", "this", "inline", "friend"],
    "options_hi": ["return", "this", "inline", "friend"],
    "answer_en": "this",
    "answer_hi": "this",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to declare friend function?",
    "question_hi": "फ्रेंड फंक्शन डिक्लेयर करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["friend", "this", "inline", "extern"],
    "options_hi": ["friend", "this", "inline", "extern"],
    "answer_en": "friend",
    "answer_hi": "friend",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which container maintains elements in sorted order?",
    "question_hi": "कौन सा कंटेनर एलिमेंट्स को सॉर्टेड ऑर्डर में रखता है?",
    "options_en": ["set", "vector", "list", "deque"],
    "options_hi": ["set", "vector", "list", "deque"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which STL algorithm finds an element?",
    "question_hi": "कौन सा STL एल्गोरिदम एलिमेंट ढूंढता है?",
    "options_en": ["find()", "search()", "locate()", "scan()"],
    "options_hi": ["find()", "search()", "locate()", "scan()"],
    "answer_en": "find()",
    "answer_hi": "find()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which header file supports smart pointers?",
    "question_hi": "स्मार्ट पॉइंटर के लिए कौन सी हेडर फाइल उपयोग होती है?",
    "options_en": ["memory", "pointer", "utility", "smart"],
    "options_hi": ["memory", "pointer", "utility", "smart"],
    "answer_en": "memory",
    "answer_hi": "memory",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which smart pointer ensures exclusive ownership?",
    "question_hi": "एक्सक्लूसिव ओनरशिप देने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which STL container allows duplicate keys?",
    "question_hi": "कौन सा STL कंटेनर डुप्लिकेट कीज़ अलाउ करता है?",
    "options_en": ["multimap", "map", "set", "unordered_set"],
    "options_hi": ["multimap", "map", "set", "unordered_set"],
    "answer_en": "multimap",
    "answer_hi": "multimap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which feature enables late binding?",
    "question_hi": "लेट बाइंडिंग किस फीचर से संभव होती है?",
    "options_en": ["Virtual function", "Inline function", "Template", "Constructor"],
    "options_hi": ["Virtual function", "Inline function", "Template", "Constructor"],
    "answer_en": "Virtual function",
    "answer_hi": "Virtual function",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword specifies external linkage?",
    "question_hi": "एक्सटर्नल लिंकेंज बताने के लिए कौन सा कीवर्ड है?",
    "options_en": ["extern", "static", "mutable", "register"],
    "options_hi": ["extern", "static", "mutable", "register"],
    "answer_en": "extern",
    "answer_hi": "extern",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which storage class gives block scope?",
    "question_hi": "कौन सी स्टोरेज क्लास ब्लॉक स्कोप देती है?",
    "options_en": ["auto", "static", "extern", "register"],
    "options_hi": ["auto", "static", "extern", "register"],
    "answer_en": "auto",
    "answer_hi": "auto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which keyword hints compiler to store variable in CPU register?",
    "question_hi": "कंपाइलर को वेरिएबल रजिस्टर में रखने का संकेत कौन सा कीवर्ड देता है?",
    "options_en": ["register", "volatile", "static", "mutable"],
    "options_hi": ["register", "volatile", "static", "mutable"],
    "answer_en": "register",
    "answer_hi": "register",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which keyword prevents optimization by compiler?",
    "question_hi": "कंपाइलर ऑप्टिमाइज़ेशन रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["volatile", "const", "static", "mutable"],
    "options_hi": ["volatile", "const", "static", "mutable"],
    "answer_en": "volatile",
    "answer_hi": "volatile",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which C++ feature allows multiple inheritance?",
    "question_hi": "मल्टीपल इनहेरिटेंस की अनुमति कौन सा फीचर देता है?",
    "options_en": ["Classes", "Structures", "Namespaces", "Pointers"],
    "options_hi": ["Classes", "Structures", "Namespaces", "Pointers"],
    "answer_en": "Classes",
    "answer_hi": "Classes",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which keyword resolves ambiguity in multiple inheritance?",
    "question_hi": "मल्टीपल इनहेरिटेंस में एम्बिग्यूटी हटाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["virtual", "explicit", "scope", "final"],
    "options_hi": ["virtual", "explicit", "scope", "final"],
    "answer_en": "virtual",
    "answer_hi": "virtual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which operator is used for scope resolution?",
    "question_hi": "स्कोप रेज़ोल्यूशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["::", ":", ".", "->"],
    "options_hi": ["::", ":", ".", "->"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which C++ feature supports generic programming?",
    "question_hi": "जेनेरिक प्रोग्रामिंग को कौन सा फीचर सपोर्ट करता है?",
    "options_en": ["Templates", "Macros", "Pointers", "Overloading"],
    "options_hi": ["Templates", "Macros", "Pointers", "Overloading"],
    "answer_en": "Templates",
    "answer_hi": "Templates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which operator deletes array memory?",
    "question_hi": "एरे मेमोरी डिलीट करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["delete[]", "delete", "free()", "remove"],
    "options_hi": ["delete[]", "delete", "free()", "remove"],
    "answer_en": "delete[]",
    "answer_hi": "delete[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which container provides double-ended insertion?",
    "question_hi": "डबल एंड से इंसर्शन देने वाला कंटेनर कौन सा है?",
    "options_en": ["deque", "vector", "list", "array"],
    "options_hi": ["deque", "vector", "list", "array"],
    "answer_en": "deque",
    "answer_hi": "deque",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which function flushes output buffer?",
    "question_hi": "आउटपुट बफर फ्लश करने वाला फंक्शन कौन सा है?",
    "options_en": ["flush", "endl", "clear", "sync"],
    "options_hi": ["flush", "endl", "clear", "sync"],
    "answer_en": "endl",
    "answer_hi": "endl",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword allows variable modification in const function?",
    "question_hi": "const फंक्शन में वेरिएबल बदलने की अनुमति कौन सा कीवर्ड देता है?",
    "options_en": ["mutable", "volatile", "static", "register"],
    "options_hi": ["mutable", "volatile", "static", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which C++ feature improves performance by avoiding copies?",
    "question_hi": "कॉपी से बचाकर परफॉर्मेंस बढ़ाने वाला फीचर कौन सा है?",
    "options_en": ["Move semantics", "Inlining", "Overloading", "Casting"],
    "options_hi": ["Move semantics", "Inlining", "Overloading", "Casting"],
    "answer_en": "Move semantics",
    "answer_hi": "Move semantics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which operator is used for rvalue reference?",
    "question_hi": "rvalue रेफरेंस के लिए कौन सा ऑपरेटर है?",
    "options_en": ["&&", "&", "*", "::"],
    "options_hi": ["&&", "&", "*", "::"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which container is implemented using hash table?",
    "question_hi": "हैश टेबल से इम्प्लीमेंटेड कंटेनर कौन सा है?",
    "options_en": ["unordered_map", "map", "set", "list"],
    "options_hi": ["unordered_map", "map", "set", "list"],
    "answer_en": "unordered_map",
    "answer_hi": "unordered_map",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword is used to synchronize threads?",
    "question_hi": "थ्रेड्स सिंक्रोनाइज़ करने के लिए कौन सा कॉन्सेप्ट उपयोग होता है?",
    "options_en": ["mutex", "atomic", "thread", "lock"],
    "options_hi": ["mutex", "atomic", "thread", "lock"],
    "answer_en": "mutex",
    "answer_hi": "mutex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which header file supports mutex?",
    "question_hi": "म्यूटेक्स के लिए कौन सी हेडर फाइल है?",
    "options_en": ["mutex", "thread", "future", "atomic"],
    "options_hi": ["mutex", "thread", "future", "atomic"],
    "answer_en": "mutex",
    "answer_hi": "mutex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which C++ feature enables asynchronous execution?",
    "question_hi": "असिंक्रोनस एक्जीक्यूशन कौन सा फीचर देता है?",
    "options_en": ["async", "thread", "future", "promise"],
    "options_hi": ["async", "thread", "future", "promise"],
    "answer_en": "async",
    "answer_hi": "async",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which container does not maintain order?",
    "question_hi": "कौन सा कंटेनर ऑर्डर में एलिमेंट नहीं रखता?",
    "options_en": ["unordered_set", "set", "vector", "list"],
    "options_hi": ["unordered_set", "set", "vector", "list"],
    "answer_en": "unordered_set",
    "answer_hi": "unordered_set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword prevents copying of object?",
    "question_hi": "ऑब्जेक्ट की कॉपी रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["delete", "explicit", "final", "static"],
    "options_hi": ["delete", "explicit", "final", "static"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword forces inline expansion?",
    "question_hi": "इनलाइन एक्सपेंशन के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["inline", "constexpr", "static", "auto"],
    "options_hi": ["inline", "constexpr", "static", "auto"],
    "answer_en": "inline",
    "answer_hi": "inline",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which container supports random access iterator?",
    "question_hi": "रैंडम एक्सेस इटरेटर सपोर्ट करने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "list", "forward_list", "set"],
    "options_hi": ["vector", "list", "forward_list", "set"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword specifies function cannot be overridden?",
    "question_hi": "फंक्शन को ओवरराइड होने से रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "virtual", "static", "const"],
    "options_hi": ["final", "virtual", "static", "const"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which C++ feature allows operator customization?",
    "question_hi": "ऑपरेटर कस्टमाइज़ेशन की अनुमति कौन सा फीचर देता है?",
    "options_en": ["Operator overloading", "Function overloading", "Templates", "Macros"],
    "options_hi": ["Operator overloading", "Function overloading", "Templates", "Macros"],
    "answer_en": "Operator overloading",
    "answer_hi": "Operator overloading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which operator accesses class members through pointer?",
    "question_hi": "पॉइंटर के माध्यम से क्लास मेंबर्स एक्सेस करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["->", ".", "::", "*"],
    "options_hi": ["->", ".", "::", "*"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which container supports constant time insertion at back?",
    "question_hi": "पीछे से कॉन्स्टेंट टाइम इंसर्शन देने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "set", "map", "array"],
    "options_hi": ["vector", "set", "map", "array"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which C++ feature allows code reuse?",
    "question_hi": "कोड रीयूज़ की अनुमति कौन सा फीचर देता है?",
    "options_en": ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    "options_hi": ["Inheritance", "Encapsulation", "Polymorphism", "Abstraction"],
    "answer_en": "Inheritance",
    "answer_hi": "Inheritance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
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
    "num": 49,
    "question_en": "Which operator is used to allocate array dynamically?",
    "question_hi": "डायनामिक रूप से एरे अलोकेट करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["new[]", "new", "malloc", "alloc"],
    "options_hi": ["new[]", "new", "malloc", "alloc"],
    "answer_en": "new[]",
    "answer_hi": "new[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which keyword terminates program execution immediately?",
    "question_hi": "प्रोग्राम को तुरंत समाप्त करने वाला कीवर्ड/फंक्शन कौन सा है?",
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