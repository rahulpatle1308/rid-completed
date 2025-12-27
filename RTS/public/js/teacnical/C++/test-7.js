const questions = [
  {
    "num": 1,
    "question_en": "C++ was developed as an extension of which language?",
    "question_hi": "C++ किस भाषा का एक्सटेंशन है?",
    "options_en": ["C", "Java", "Python", "Pascal"],
    "options_hi": ["C", "Java", "Python", "Pascal"],
    "answer_en": "C",
    "answer_hi": "C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which symbol is used to end a statement in C++?",
    "question_hi": "C++ में स्टेटमेंट खत्म करने के लिए कौन सा चिन्ह उपयोग होता है?",
    "options_en": [";", ":", ".", ","],
    "options_hi": [";", ":", ".", ","],
    "answer_en": ";",
    "answer_hi": ";",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which header file is required to use cout and cin?",
    "question_hi": "cout और cin उपयोग करने के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["iostream", "stdio.h", "conio.h", "fstream"],
    "options_hi": ["iostream", "stdio.h", "conio.h", "fstream"],
    "answer_en": "iostream",
    "answer_hi": "iostream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which keyword is used to declare a variable in C++?",
    "question_hi": "C++ में वेरिएबल डिक्लेयर करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["int", "var", "let", "define"],
    "options_hi": ["int", "var", "let", "define"],
    "answer_en": "int",
    "answer_hi": "int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is mandatory in every C++ program?",
    "question_hi": "हर C++ प्रोग्राम में कौन सा फंक्शन अनिवार्य होता है?",
    "options_en": ["main()", "start()", "run()", "init()"],
    "options_hi": ["main()", "start()", "run()", "init()"],
    "answer_en": "main()",
    "answer_hi": "main()",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which operator is used for input in C++?",
    "question_hi": "C++ में इनपुट के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": [">>", "<<", "=", "+"],
    "options_hi": [">>", "<<", "=", "+"],
    "answer_en": ">>",
    "answer_hi": ">>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which operator is used for output in C++?",
    "question_hi": "C++ में आउटपुट के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["<<", ">>", "=", "+"],
    "options_hi": ["<<", ">>", "=", "+"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which data type is used to store whole numbers?",
    "question_hi": "पूरे नंबर स्टोर करने के लिए कौन सा डेटा टाइप उपयोग होता है?",
    "options_en": ["int", "float", "double", "char"],
    "options_hi": ["int", "float", "double", "char"],
    "answer_en": "int",
    "answer_hi": "int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which keyword is used to define a constant?",
    "question_hi": "कॉन्स्टेंट डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["const", "static", "final", "define"],
    "options_hi": ["const", "static", "final", "define"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which loop checks condition after execution?",
    "question_hi": "कौन सा लूप एक बार चलने के बाद कंडीशन चेक करता है?",
    "options_en": ["do-while", "for", "while", "foreach"],
    "options_hi": ["do-while", "for", "while", "foreach"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which concept binds data and functions together?",
    "question_hi": "डेटा और फंक्शन को एक साथ बाँधने वाला कॉन्सेप्ट कौन सा है?",
    "options_en": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    "options_hi": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    "answer_en": "Encapsulation",
    "answer_hi": "Encapsulation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which concept allows using base class pointer for derived class object?",
    "question_hi": "बेस क्लास पॉइंटर से डिराइव्ड क्लास ऑब्जेक्ट उपयोग करने को क्या कहते हैं?",
    "options_en": ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    "options_hi": ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword is used to inherit a class?",
    "question_hi": "क्लास इनहेरिट करने के लिए कौन सा चिन्ह उपयोग होता है?",
    "options_en": [":", "::", "extends", "inherits"],
    "options_hi": [":", "::", "extends", "inherits"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to achieve runtime polymorphism?",
    "question_hi": "रनटाइम पॉलीमॉर्फ़िज़्म के लिए कौन सा कीवर्ड जरूरी है?",
    "options_en": ["virtual", "static", "inline", "const"],
    "options_hi": ["virtual", "static", "inline", "const"],
    "answer_en": "virtual",
    "answer_hi": "virtual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is called automatically when an object is created?",
    "question_hi": "ऑब्जेक्ट बनते समय कौन सा फंक्शन अपने आप कॉल होता है?",
    "options_en": ["Constructor", "Destructor", "Main", "Init"],
    "options_hi": ["Constructor", "Destructor", "Main", "Init"],
    "answer_en": "Constructor",
    "answer_hi": "Constructor",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which function is called when an object is destroyed?",
    "question_hi": "ऑब्जेक्ट नष्ट होने पर कौन सा फंक्शन कॉल होता है?",
    "options_en": ["Destructor", "Constructor", "Delete", "Free"],
    "options_hi": ["Destructor", "Constructor", "Delete", "Free"],
    "answer_en": "Destructor",
    "answer_hi": "Destructor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which operator allocates memory dynamically?",
    "question_hi": "डायनामिक मेमोरी अलोकेट करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which operator frees dynamically allocated memory?",
    "question_hi": "डायनामिक मेमोरी फ्री करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["delete", "free", "remove", "dispose"],
    "options_hi": ["delete", "free", "remove", "dispose"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which container stores elements in contiguous memory?",
    "question_hi": "कौन सा कंटेनर कंटिग्युअस मेमोरी में एलिमेंट स्टोर करता है?",
    "options_en": ["vector", "list", "map", "set"],
    "options_hi": ["vector", "list", "map", "set"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which STL container does not allow duplicate values?",
    "question_hi": "कौन सा STL कंटेनर डुप्लिकेट वैल्यू अलाउ नहीं करता?",
    "options_en": ["set", "multiset", "vector", "list"],
    "options_hi": ["set", "multiset", "vector", "list"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which STL container stores key-value pairs?",
    "question_hi": "key-value pair स्टोर करने वाला STL कंटेनर कौन सा है?",
    "options_en": ["map", "vector", "set", "list"],
    "options_hi": ["map", "vector", "set", "list"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
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
    "num": 23,
    "question_en": "Which keyword can replace class in templates?",
    "question_hi": "टेम्पलेट में class की जगह कौन सा कीवर्ड उपयोग हो सकता है?",
    "options_en": ["typename", "struct", "object", "type"],
    "options_hi": ["typename", "struct", "object", "type"],
    "answer_en": "typename",
    "answer_hi": "typename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which algorithm is used to sort elements in STL?",
    "question_hi": "STL में एलिमेंट सॉर्ट करने के लिए कौन सा एल्गोरिदम है?",
    "options_en": ["sort()", "order()", "arrange()", "sequence()"],
    "options_hi": ["sort()", "order()", "arrange()", "sequence()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which header file is required for sort()?",
    "question_hi": "sort() के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["algorithm", "vector", "map", "iterator"],
    "options_hi": ["algorithm", "vector", "map", "iterator"],
    "answer_en": "algorithm",
    "answer_hi": "algorithm",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which C++ version introduced auto keyword?",
    "question_hi": "auto कीवर्ड किस C++ वर्ज़न में आया?",
    "options_en": ["C++11", "C++03", "C++98", "C++14"],
    "options_hi": ["C++11", "C++03", "C++98", "C++14"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword is used for lambda expressions?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन में कौन सा चिन्ह उपयोग होता है?",
    "options_en": ["[]", "()", "{}", "<>"],
    "options_hi": ["[]", "()", "{}", "<>"],
    "answer_en": "[]",
    "answer_hi": "[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which feature avoids unnecessary object copies?",
    "question_hi": "अनावश्यक ऑब्जेक्ट कॉपी से बचाने वाला फीचर कौन सा है?",
    "options_en": ["Move Semantics", "Inlining", "Inheritance", "Virtualization"],
    "options_hi": ["Move Semantics", "Inlining", "Inheritance", "Virtualization"],
    "answer_en": "Move Semantics",
    "answer_hi": "Move Semantics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which operator is used for move semantics?",
    "question_hi": "मूव सेमांटिक्स के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["&&", "&", "*", "::"],
    "options_hi": ["&&", "&", "*", "::"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
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
    "num": 31,
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
    "num": 32,
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
    "num": 33,
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
    "num": 34,
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
    "num": 35,
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
    "num": 36,
    "question_en": "Which keyword deduces return type automatically?",
    "question_hi": "रिटर्न टाइप ऑटोमैटिक डिड्यूस करने वाला कीवर्ड कौन सा है?",
    "options_en": ["auto", "decltype", "typeid", "sizeof"],
    "options_hi": ["auto", "decltype", "typeid", "sizeof"],
    "answer_en": "auto",
    "answer_hi": "auto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
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
    "num": 38,
    "question_en": "Which container does not support random access?",
    "question_hi": "कौन सा कंटेनर रैंडम एक्सेस सपोर्ट नहीं करता?",
    "options_en": ["list", "vector", "deque", "array"],
    "options_hi": ["list", "vector", "deque", "array"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which header is used for file handling?",
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
    "question_en": "Which keyword creates a namespace?",
    "question_hi": "नेमस्पेस बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["namespace", "module", "package", "scope"],
    "options_hi": ["namespace", "module", "package", "scope"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which keyword prevents function overriding?",
    "question_hi": "फंक्शन ओवरराइडिंग रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "virtual", "static", "const"],
    "options_hi": ["final", "virtual", "static", "const"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which qualifier allows variable modification in const object?",
    "question_hi": "const ऑब्जेक्ट में वेरिएबल बदलने की अनुमति देने वाला क्वालिफायर कौन सा है?",
    "options_en": ["mutable", "volatile", "static", "register"],
    "options_hi": ["mutable", "volatile", "static", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which keyword ensures atomic operations?",
    "question_hi": "एटॉमिक ऑपरेशन सुनिश्चित करने वाला कीवर्ड कौन सा है?",
    "options_en": ["atomic", "volatile", "static", "register"],
    "options_hi": ["atomic", "volatile", "static", "register"],
    "answer_en": "atomic",
    "answer_hi": "atomic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which C++ feature allows concurrent execution?",
    "question_hi": "कौन सा C++ फीचर कन्करेंट एक्जीक्यूशन देता है?",
    "options_en": ["Multithreading", "Inheritance", "Templates", "Overloading"],
    "options_hi": ["Multithreading", "Inheritance", "Templates", "Overloading"],
    "answer_en": "Multithreading",
    "answer_hi": "Multithreading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which header is required for multithreading?",
    "question_hi": "मल्टीथ्रेडिंग के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["thread", "mutex", "future", "atomic"],
    "options_hi": ["thread", "mutex", "future", "atomic"],
    "answer_en": "thread",
    "answer_hi": "thread",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword locks a mutex?",
    "question_hi": "म्यूटेक्स लॉक करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["lock", "mutex", "guard", "synchronize"],
    "options_hi": ["lock", "mutex", "guard", "synchronize"],
    "answer_en": "lock",
    "answer_hi": "lock",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which class automatically manages mutex locking?",
    "question_hi": "म्यूटेक्स को ऑटोमैटिक मैनेज करने वाली क्लास कौन सी है?",
    "options_en": ["lock_guard", "unique_ptr", "shared_ptr", "thread"],
    "options_hi": ["lock_guard", "unique_ptr", "shared_ptr", "thread"],
    "answer_en": "lock_guard",
    "answer_hi": "lock_guard",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which STL container is implemented as a doubly linked list?",
    "question_hi": "डबल लिंक्ड लिस्ट के रूप में इम्प्लीमेंटेड STL कंटेनर कौन सा है?",
    "options_en": ["list", "vector", "deque", "array"],
    "options_hi": ["list", "vector", "deque", "array"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
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
    "num": 50,
    "question_en": "Which keyword is used to exit from a loop?",
    "question_hi": "लूप से बाहर निकलने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["break", "continue", "exit", "stop"],
    "options_hi": ["break", "continue", "exit", "stop"],
    "answer_en": "break",
    "answer_hi": "break",
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