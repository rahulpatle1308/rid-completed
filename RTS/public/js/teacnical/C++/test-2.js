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
    "num": 3,
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
    "num": 4,
    "question_en": "Which header file is required for input/output in C++?",
    "question_hi": "C++ में इनपुट/आउटपुट के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["iostream", "stdio.h", "conio.h", "fstream"],
    "options_hi": ["iostream", "stdio.h", "conio.h", "fstream"],
    "answer_en": "iostream",
    "answer_hi": "iostream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator is used to access class members?",
    "question_hi": "क्लास के मेंबर एक्सेस करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": [".", "->", "::", "*"],
    "options_hi": [".", "->", "::", "*"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which keyword is used to define a constant in C++?",
    "question_hi": "C++ में कॉन्स्टेंट डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["const", "final", "define", "static"],
    "options_hi": ["const", "final", "define", "static"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which concept supports code reusability in C++?",
    "question_hi": "C++ में कोड री-यूज़ेबिलिटी किस कॉन्सेप्ट से मिलती है?",
    "options_en": ["Inheritance", "Compilation", "Linking", "Debugging"],
    "options_hi": ["Inheritance", "Compilation", "Linking", "Debugging"],
    "answer_en": "Inheritance",
    "answer_hi": "Inheritance",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which keyword is used to create an object dynamically?",
    "question_hi": "डायनामिक रूप से ऑब्जेक्ट बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which access specifier makes members private by default?",
    "question_hi": "कौन सा एक्सेस स्पेसिफायर डिफॉल्ट रूप से प्राइवेट होता है?",
    "options_en": ["class", "struct", "union", "enum"],
    "options_hi": ["class", "struct", "union", "enum"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which operator is used for scope resolution?",
    "question_hi": "स्कोप रेज़ोल्यूशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["::", ".", "->", ":"],
    "options_hi": ["::", ".", "->", ":"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which feature allows same function name with different parameters?",
    "question_hi": "एक ही नाम के अलग पैरामीटर वाले फंक्शन को क्या कहते हैं?",
    "options_en": ["Function Overloading", "Inheritance", "Overriding", "Encapsulation"],
    "options_hi": ["Function Overloading", "Inheritance", "Overriding", "Encapsulation"],
    "answer_en": "Function Overloading",
    "answer_hi": "Function Overloading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
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
    "num": 13,
    "question_en": "Which concept hides internal implementation?",
    "question_hi": "इंटरनल इम्प्लीमेंटेशन छुपाने वाला कॉन्सेप्ट कौन सा है?",
    "options_en": ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
    "options_hi": ["Encapsulation", "Inheritance", "Polymorphism", "Compilation"],
    "answer_en": "Encapsulation",
    "answer_hi": "Encapsulation",
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
    "question_en": "Which container stores elements in sequence?",
    "question_hi": "सीक्वेंस में एलिमेंट स्टोर करने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "map", "set", "unordered_map"],
    "options_hi": ["vector", "map", "set", "unordered_map"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which STL container allows duplicate values?",
    "question_hi": "डुप्लिकेट वैल्यू अलाउ करने वाला STL कंटेनर कौन सा है?",
    "options_en": ["multiset", "set", "map", "unordered_set"],
    "options_hi": ["multiset", "set", "map", "unordered_set"],
    "answer_en": "multiset",
    "answer_hi": "multiset",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword is used to stop inheritance?",
    "question_hi": "इनहेरिटेंस रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "const", "static", "sealed"],
    "options_hi": ["final", "const", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which pointer manages exclusive ownership?",
    "question_hi": "एक्सक्लूसिव ओनरशिप वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is called automatically when an object is destroyed?",
    "question_hi": "ऑब्जेक्ट नष्ट होने पर कौन सा फंक्शन अपने आप कॉल होता है?",
    "options_en": ["Destructor", "Constructor", "Delete", "Free"],
    "options_hi": ["Destructor", "Constructor", "Delete", "Free"],
    "answer_en": "Destructor",
    "answer_hi": "Destructor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which operator is used to deallocate memory?",
    "question_hi": "मेमोरी फ्री करने के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["delete", "free", "remove", "dispose"],
    "options_hi": ["delete", "free", "remove", "dispose"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which keyword is used to define templates?",
    "question_hi": "टेम्पलेट डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["template", "generic", "typename", "class"],
    "options_hi": ["template", "generic", "typename", "class"],
    "answer_en": "template",
    "answer_hi": "template",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which keyword is used instead of class in templates?",
    "question_hi": "टेम्पलेट में class की जगह कौन सा कीवर्ड उपयोग हो सकता है?",
    "options_en": ["typename", "struct", "object", "type"],
    "options_hi": ["typename", "struct", "object", "type"],
    "answer_en": "typename",
    "answer_hi": "typename",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which STL algorithm is used for sorting?",
    "question_hi": "सॉर्टिंग के लिए कौन सा STL एल्गोरिदम है?",
    "options_en": ["sort()", "order()", "arrange()", "sequence()"],
    "options_hi": ["sort()", "order()", "arrange()", "sequence()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which header is required for STL algorithms?",
    "question_hi": "STL एल्गोरिदम के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["algorithm", "vector", "map", "iterator"],
    "options_hi": ["algorithm", "vector", "map", "iterator"],
    "answer_en": "algorithm",
    "answer_hi": "algorithm",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which feature allows multiple inheritance?",
    "question_hi": "मल्टीपल इनहेरिटेंस किस फीचर से संभव है?",
    "options_en": ["C++", "Java", "Python", "C"],
    "options_hi": ["C++", "Java", "Python", "C"],
    "answer_en": "C++",
    "answer_hi": "C++",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which cast is safest in C++?",
    "question_hi": "C++ में सबसे सुरक्षित टाइप कास्ट कौन सा है?",
    "options_en": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "options_hi": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "answer_en": "dynamic_cast",
    "answer_hi": "dynamic_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword prevents modification of data?",
    "question_hi": "डेटा को बदलने से रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["const", "static", "final", "mutable"],
    "options_hi": ["const", "static", "final", "mutable"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which operator is overloaded for output?",
    "question_hi": "आउटपुट के लिए कौन सा ऑपरेटर ओवरलोड होता है?",
    "options_en": ["<<", ">>", "=", "+"],
    "options_hi": ["<<", ">>", "=", "+"],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword allows changing value in const object?",
    "question_hi": "const ऑब्जेक्ट में वैल्यू बदलने के लिए कौन सा कीवर्ड है?",
    "options_en": ["mutable", "static", "volatile", "register"],
    "options_hi": ["mutable", "static", "volatile", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which concept uses base class pointer for derived object?",
    "question_hi": "बेस क्लास पॉइंटर से डिराइव्ड ऑब्जेक्ट उपयोग करने वाला कॉन्सेप्ट कौन सा है?",
    "options_en": ["Polymorphism", "Encapsulation", "Abstraction", "Compilation"],
    "options_hi": ["Polymorphism", "Encapsulation", "Abstraction", "Compilation"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which keyword is used to throw an exception?",
    "question_hi": "एक्सेप्शन फेंकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["throw", "throws", "try", "catch"],
    "options_hi": ["throw", "throws", "try", "catch"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which block handles exceptions?",
    "question_hi": "एक्सेप्शन हैंडल करने वाला ब्लॉक कौन सा है?",
    "options_en": ["catch", "throw", "try", "finally"],
    "options_hi": ["catch", "throw", "try", "finally"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which keyword avoids exception propagation?",
    "question_hi": "एक्सेप्शन प्रोपेगेशन रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["noexcept", "throw", "try", "catch"],
    "options_hi": ["noexcept", "throw", "try", "catch"],
    "answer_en": "noexcept",
    "answer_hi": "noexcept",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which container provides fastest access?",
    "question_hi": "सबसे तेज़ एक्सेस देने वाला कंटेनर कौन सा है?",
    "options_en": ["unordered_map", "map", "set", "list"],
    "options_hi": ["unordered_map", "map", "set", "list"],
    "answer_en": "unordered_map",
    "answer_hi": "unordered_map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which C++ version introduced smart pointers?",
    "question_hi": "स्मार्ट पॉइंटर किस C++ वर्ज़न में आए?",
    "options_en": ["C++11", "C++03", "C++98", "C++14"],
    "options_hi": ["C++11", "C++03", "C++98", "C++14"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
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
    "num": 37,
    "question_en": "Which feature improves performance by avoiding copies?",
    "question_hi": "कॉपी से बचाकर परफॉर्मेंस बढ़ाने वाला फीचर कौन सा है?",
    "options_en": ["Move Semantics", "Inheritance", "Virtualization", "Inlining"],
    "options_hi": ["Move Semantics", "Inheritance", "Virtualization", "Inlining"],
    "answer_en": "Move Semantics",
    "answer_hi": "Move Semantics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword enables move constructor?",
    "question_hi": "मूव कंस्ट्रक्टर के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["&&", "&", "*", "::"],
    "options_hi": ["&&", "&", "*", "::"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which container does not allow random access?",
    "question_hi": "कौन सा कंटेनर रैंडम एक्सेस अलाउ नहीं करता?",
    "options_en": ["list", "vector", "deque", "array"],
    "options_hi": ["list", "vector", "deque", "array"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword checks type at runtime?",
    "question_hi": "रनटाइम पर टाइप चेक करने वाला कीवर्ड कौन सा है?",
    "options_en": ["typeid", "sizeof", "decltype", "auto"],
    "options_hi": ["typeid", "sizeof", "decltype", "auto"],
    "answer_en": "typeid",
    "answer_hi": "typeid",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which header is used for file handling?",
    "question_hi": "फाइल हैंडलिंग के लिए कौन सी हेडर फाइल है?",
    "options_en": ["fstream", "iostream", "stdio", "file"],
    "options_hi": ["fstream", "iostream", "stdio", "file"],
    "answer_en": "fstream",
    "answer_hi": "fstream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword deduces variable type automatically?",
    "question_hi": "ऑटोमैटिक टाइप डिड्यूस करने वाला कीवर्ड कौन सा है?",
    "options_en": ["auto", "var", "let", "type"],
    "options_hi": ["auto", "var", "let", "type"],
    "answer_en": "auto",
    "answer_hi": "auto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which C++ feature supports generic programming?",
    "question_hi": "जेनरिक प्रोग्रामिंग किस फीचर से होती है?",
    "options_en": ["Templates", "Inheritance", "Macros", "Namespaces"],
    "options_hi": ["Templates", "Inheritance", "Macros", "Namespaces"],
    "answer_en": "Templates",
    "answer_hi": "Templates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which keyword creates a namespace?",
    "question_hi": "नेमस्पेस बनाने के लिए कौन सा कीवर्ड है?",
    "options_en": ["namespace", "package", "module", "scope"],
    "options_hi": ["namespace", "package", "module", "scope"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which operator allocates memory on heap?",
    "question_hi": "हीप पर मेमोरी अलोकेट करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which concept binds data and functions together?",
    "question_hi": "डेटा और फंक्शन को एक साथ बाँधने वाला कॉन्सेप्ट कौन सा है?",
    "options_en": ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
    "options_hi": ["Encapsulation", "Abstraction", "Polymorphism", "Inheritance"],
    "answer_en": "Encapsulation",
    "answer_hi": "Encapsulation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword prevents function overriding?",
    "question_hi": "फंक्शन ओवरराइडिंग रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "virtual", "static", "const"],
    "options_hi": ["final", "virtual", "static", "const"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which operator is used for input?",
    "question_hi": "इनपुट के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": [">>", "<<", "=", "+"],
    "options_hi": [">>", "<<", "=", "+"],
    "answer_en": ">>",
    "answer_hi": ">>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword ensures thread safety for variable?",
    "question_hi": "वेरिएबल को थ्रेड-सेफ बनाने वाला कीवर्ड कौन सा है?",
    "options_en": ["atomic", "volatile", "static", "register"],
    "options_hi": ["atomic", "volatile", "static", "register"],
    "answer_en": "atomic",
    "answer_hi": "atomic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which C++ feature allows parallel execution?",
    "question_hi": "पैरलल एक्जीक्यूशन किस फीचर से संभव है?",
    "options_en": ["Multithreading", "Inheritance", "Templates", "Polymorphism"],
    "options_hi": ["Multithreading", "Inheritance", "Templates", "Polymorphism"],
    "answer_en": "Multithreading",
    "answer_hi": "Multithreading",
    "attempted": false,
    "selected": ""
  }
]

// --------------------------- GLOBAL VARS -----------------------------
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