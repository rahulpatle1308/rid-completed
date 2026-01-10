const questions= [
  {
    "num": 1,
    "question_en": "Which C++ keyword is used to define an abstract class?",
    "question_hi": "C++ में एब्स्ट्रैक्ट क्लास बनाने के लिए किस कीवर्ड का उपयोग होता है?",
    "options_en": ["virtual", "abstract", "interface", "pure"],
    "options_hi": ["virtual", "abstract", "interface", "pure"],
    "answer_en": "virtual",
    "answer_hi": "virtual",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What makes a function pure virtual in C++?",
    "question_hi": "C++ में फंक्शन को प्योर वर्चुअल क्या बनाता है?",
    "options_en": ["= 0", "= null", "= default", "= delete"],
    "options_hi": ["= 0", "= null", "= default", "= delete"],
    "answer_en": "= 0",
    "answer_hi": "= 0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which access specifier is default for class members?",
    "question_hi": "क्लास में मेंबर्स का डिफ़ॉल्ट एक्सेस स्पेसिफायर क्या होता है?",
    "options_en": ["private", "public", "protected", "internal"],
    "options_hi": ["private", "public", "protected", "internal"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which access specifier is default for struct members?",
    "question_hi": "struct में मेंबर्स का डिफ़ॉल्ट एक्सेस स्पेसिफायर क्या होता है?",
    "options_en": ["public", "private", "protected", "static"],
    "options_hi": ["public", "private", "protected", "static"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which keyword prevents function overriding?",
    "question_hi": "फंक्शन ओवरराइड होने से रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "const", "sealed", "static"],
    "options_hi": ["final", "const", "sealed", "static"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which operator is used to resolve scope?",
    "question_hi": "स्कोप रिज़ॉल्यूशन के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["::", ".", "->", ":"],
    "options_hi": ["::", ".", "->", ":"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword is used to stop inheritance?",
    "question_hi": "इनहेरिटेंस रोकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["final", "static", "private", "const"],
    "options_hi": ["final", "static", "private", "const"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which operator is used for dynamic memory allocation?",
    "question_hi": "डायनामिक मेमोरी अलोकेशन के लिए कौन सा ऑपरेटर उपयोग होता है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which operator frees dynamic memory?",
    "question_hi": "डायनामिक मेमोरी फ्री करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which keyword avoids dangling pointers?",
    "question_hi": "डैंगलिंग पॉइंटर से बचने में कौन सा फीचर मदद करता है?",
    "options_en": ["smart pointers", "raw pointers", "malloc", "goto"],
    "options_hi": ["smart pointers", "raw pointers", "malloc", "goto"],
    "answer_en": "smart pointers",
    "answer_hi": "smart pointers",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
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
    "num": 12,
    "question_en": "Which smart pointer does not increase reference count?",
    "question_hi": "कौन सा स्मार्ट पॉइंटर रेफरेंस काउंट नहीं बढ़ाता?",
    "options_en": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "options_hi": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "answer_en": "weak_ptr",
    "answer_hi": "weak_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which C++ feature allows multiple functions with same name?",
    "question_hi": "एक ही नाम के कई फंक्शन बनाने की सुविधा कौन सा फीचर देता है?",
    "options_en": ["Function overloading", "Overriding", "Inheritance", "Templates"],
    "options_hi": ["Function overloading", "Overriding", "Inheritance", "Templates"],
    "answer_en": "Function overloading",
    "answer_hi": "Function overloading",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which feature allows same function behavior at runtime?",
    "question_hi": "रनटाइम पर एक जैसा बिहेवियर देने वाला फीचर कौन सा है?",
    "options_en": ["Polymorphism", "Encapsulation", "Abstraction", "Inlining"],
    "options_hi": ["Polymorphism", "Encapsulation", "Abstraction", "Inlining"],
    "answer_en": "Polymorphism",
    "answer_hi": "Polymorphism",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which keyword ensures thread-safe variable?",
    "question_hi": "थ्रेड सेफ वैरिएबल के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["atomic", "mutex", "volatile", "static"],
    "options_hi": ["atomic", "mutex", "volatile", "static"],
    "answer_en": "atomic",
    "answer_hi": "atomic",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which header is needed for std::atomic?",
    "question_hi": "std::atomic के लिए कौन सी हेडर फाइल जरूरी है?",
    "options_en": ["atomic", "thread", "mutex", "future"],
    "options_hi": ["atomic", "thread", "mutex", "future"],
    "answer_en": "atomic",
    "answer_hi": "atomic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword avoids multiple inclusion of header files?",
    "question_hi": "हेडर फाइल को बार-बार शामिल होने से रोकने वाला कौन सा है?",
    "options_en": ["#pragma once", "#define", "#ifndef", "#include"],
    "options_hi": ["#pragma once", "#define", "#ifndef", "#include"],
    "answer_en": "#pragma once",
    "answer_hi": "#pragma once",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which loop checks condition after execution?",
    "question_hi": "कौन सा लूप कंडीशन को एक्सीक्यूशन के बाद चेक करता है?",
    "options_en": ["do-while", "while", "for", "range"],
    "options_hi": ["do-while", "while", "for", "range"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword disables copy constructor?",
    "question_hi": "कॉपी कन्स्ट्रक्टर को डिसेबल करने वाला कीवर्ड कौन सा है?",
    "options_en": ["delete", "default", "private", "explicit"],
    "options_hi": ["delete", "default", "private", "explicit"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword forces constructor to avoid implicit conversion?",
    "question_hi": "इम्प्लिसिट कन्वर्ज़न रोकने वाला कन्स्ट्रक्टर कीवर्ड कौन सा है?",
    "options_en": ["explicit", "inline", "static", "const"],
    "options_hi": ["explicit", "inline", "static", "const"],
    "answer_en": "explicit",
    "answer_hi": "explicit",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which STL container allows duplicate keys?",
    "question_hi": "डुप्लिकेट कीज़ को अनुमति देने वाला STL कंटेनर कौन सा है?",
    "options_en": ["multimap", "map", "set", "unordered_set"],
    "options_hi": ["multimap", "map", "set", "unordered_set"],
    "answer_en": "multimap",
    "answer_hi": "multimap",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which container provides constant time insertion at end?",
    "question_hi": "एंड में कॉन्स्टेंट टाइम इंसर्शन देने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "list", "set", "map"],
    "options_hi": ["vector", "list", "set", "map"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which iterator is fastest?",
    "question_hi": "कौन सा इटरेटर सबसे तेज़ होता है?",
    "options_en": ["Random access", "Forward", "Bidirectional", "Input"],
    "options_hi": ["Random access", "Forward", "Bidirectional", "Input"],
    "answer_en": "Random access",
    "answer_hi": "Random access",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which STL algorithm sorts elements?",
    "question_hi": "एलिमेंट्स को सॉर्ट करने वाला STL एल्गोरिदम कौन सा है?",
    "options_en": ["sort", "order", "arrange", "sequence"],
    "options_hi": ["sort", "order", "arrange", "sequence"],
    "answer_en": "sort",
    "answer_hi": "sort",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which header is required for std::sort?",
    "question_hi": "std::sort के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["algorithm", "vector", "array", "numeric"],
    "options_hi": ["algorithm", "vector", "array", "numeric"],
    "answer_en": "algorithm",
    "answer_hi": "algorithm",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which feature allows anonymous functions?",
    "question_hi": "एनोनिमस फंक्शन की सुविधा कौन सा फीचर देता है?",
    "options_en": ["Lambda", "Macro", "Functor", "Pointer"],
    "options_hi": ["Lambda", "Macro", "Functor", "Pointer"],
    "answer_en": "Lambda",
    "answer_hi": "Lambda",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which keyword captures all variables in lambda by reference?",
    "question_hi": "लैम्ब्डा में सभी वैरिएबल को रेफरेंस से कैप्चर करने का सिंबल क्या है?",
    "options_en": ["&", "=", "*", "$"],
    "options_hi": ["&", "=", "*", "$"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which C++ feature ensures data hiding?",
    "question_hi": "डेटा हाइडिंग सुनिश्चित करने वाला फीचर कौन सा है?",
    "options_en": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    "options_hi": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    "answer_en": "Encapsulation",
    "answer_hi": "Encapsulation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which keyword declares immutable variable?",
    "question_hi": "इम्यूटेबल वैरिएबल घोषित करने वाला कीवर्ड कौन सा है?",
    "options_en": ["const", "static", "volatile", "mutable"],
    "options_hi": ["const", "static", "volatile", "mutable"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword allows modification in const object?",
    "question_hi": "const ऑब्जेक्ट में बदलाव की अनुमति देने वाला कीवर्ड कौन सा है?",
    "options_en": ["mutable", "volatile", "static", "register"],
    "options_hi": ["mutable", "volatile", "static", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which feature reduces runtime overhead?",
    "question_hi": "रनटाइम ओवरहेड कम करने वाला फीचर कौन सा है?",
    "options_en": ["Inline functions", "Virtual functions", "Inheritance", "RTTI"],
    "options_hi": ["Inline functions", "Virtual functions", "Inheritance", "RTTI"],
    "answer_en": "Inline functions",
    "answer_hi": "Inline functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which keyword checks type at runtime?",
    "question_hi": "रनटाइम पर टाइप चेक करने वाला कौन सा है?",
    "options_en": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "options_hi": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "answer_en": "dynamic_cast",
    "answer_hi": "dynamic_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which cast is most dangerous?",
    "question_hi": "कौन सा कास्ट सबसे ज्यादा खतरनाक माना जाता है?",
    "options_en": ["reinterpret_cast", "static_cast", "dynamic_cast", "const_cast"],
    "options_hi": ["reinterpret_cast", "static_cast", "dynamic_cast", "const_cast"],
    "answer_en": "reinterpret_cast",
    "answer_hi": "reinterpret_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which keyword is used to throw exception?",
    "question_hi": "एक्सेप्शन फेंकने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["throw", "catch", "try", "exception"],
    "options_hi": ["throw", "catch", "try", "exception"],
    "answer_en": "throw",
    "answer_hi": "throw",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which block handles exception?",
    "question_hi": "एक्सेप्शन को हैंडल करने वाला ब्लॉक कौन सा है?",
    "options_en": ["catch", "throw", "try", "finally"],
    "options_hi": ["catch", "throw", "try", "finally"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which keyword defines compile time constant?",
    "question_hi": "कंपाइल टाइम कॉन्स्टेंट डिफाइन करने वाला कीवर्ड कौन सा है?",
    "options_en": ["constexpr", "const", "static", "define"],
    "options_hi": ["constexpr", "const", "static", "define"],
    "answer_en": "constexpr",
    "answer_hi": "constexpr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which STL container is implemented using red-black tree?",
    "question_hi": "रेड-ब्लैक ट्री से बना STL कंटेनर कौन सा है?",
    "options_en": ["map", "vector", "deque", "array"],
    "options_hi": ["map", "vector", "deque", "array"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which container provides fastest lookup?",
    "question_hi": "सबसे तेज़ लुकअप देने वाला कंटेनर कौन सा है?",
    "options_en": ["unordered_map", "map", "vector", "list"],
    "options_hi": ["unordered_map", "map", "vector", "list"],
    "answer_en": "unordered_map",
    "answer_hi": "unordered_map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which feature supports generic programming?",
    "question_hi": "जेनरिक प्रोग्रामिंग को सपोर्ट करने वाला फीचर कौन सा है?",
    "options_en": ["Templates", "Macros", "Classes", "Namespaces"],
    "options_hi": ["Templates", "Macros", "Classes", "Namespaces"],
    "answer_en": "Templates",
    "answer_hi": "Templates",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which keyword allows variable arguments?",
    "question_hi": "वैरिएबल आर्ग्यूमेंट्स की अनुमति देने वाला फीचर कौन सा है?",
    "options_en": ["variadic templates", "ellipsis", "macro", "lambda"],
    "options_hi": ["variadic templates", "ellipsis", "macro", "lambda"],
    "answer_en": "variadic templates",
    "answer_hi": "variadic templates",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which header supports file input?",
    "question_hi": "फाइल इनपुट के लिए कौन सी हेडर फाइल उपयोग होती है?",
    "options_en": ["fstream", "iostream", "ifstream", "ostream"],
    "options_hi": ["fstream", "iostream", "ifstream", "ostream"],
    "answer_en": "fstream",
    "answer_hi": "fstream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which stream reads from file?",
    "question_hi": "फाइल से डेटा पढ़ने वाली स्ट्रीम कौन सी है?",
    "options_en": ["ifstream", "ofstream", "fstream", "istream"],
    "options_hi": ["ifstream", "ofstream", "fstream", "istream"],
    "answer_en": "ifstream",
    "answer_hi": "ifstream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which stream writes to file?",
    "question_hi": "फाइल में डेटा लिखने वाली स्ट्रीम कौन सी है?",
    "options_en": ["ofstream", "ifstream", "istream", "ostream"],
    "options_hi": ["ofstream", "ifstream", "istream", "ostream"],
    "answer_en": "ofstream",
    "answer_hi": "ofstream",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which C++ feature ensures safe cleanup?",
    "question_hi": "सुरक्षित क्लीनअप सुनिश्चित करने वाला फीचर कौन सा है?",
    "options_en": ["Destructor", "Constructor", "Operator", "Namespace"],
    "options_hi": ["Destructor", "Constructor", "Operator", "Namespace"],
    "answer_en": "Destructor",
    "answer_hi": "Destructor",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which keyword allows base class access?",
    "question_hi": "बेस क्लास को एक्सेस करने वाला कीवर्ड कौन सा है?",
    "options_en": ["protected", "private", "public", "friend"],
    "options_hi": ["protected", "private", "public", "friend"],
    "answer_en": "protected",
    "answer_hi": "protected",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which keyword gives friend access?",
    "question_hi": "फ्रेंड एक्सेस देने वाला कीवर्ड कौन सा है?",
    "options_en": ["friend", "using", "grant", "allow"],
    "options_hi": ["friend", "using", "grant", "allow"],
    "answer_en": "friend",
    "answer_hi": "friend",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which feature avoids memory leak?",
    "question_hi": "मेमोरी लीक से बचाने वाला फीचर कौन सा है?",
    "options_en": ["RAII", "GC", "Heap", "Stack"],
    "options_hi": ["RAII", "GC", "Heap", "Stack"],
    "answer_en": "RAII",
    "answer_hi": "RAII",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which container does not allow random access?",
    "question_hi": "कौन सा कंटेनर रैंडम एक्सेस की अनुमति नहीं देता?",
    "options_en": ["list", "vector", "array", "deque"],
    "options_hi": ["list", "vector", "array", "deque"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword allows object reuse?",
    "question_hi": "ऑब्जेक्ट री-यूज़ की अनुमति देने वाला फीचर कौन सा है?",
    "options_en": ["move semantics", "copy constructor", "destructor", "inheritance"],
    "options_hi": ["move semantics", "copy constructor", "destructor", "inheritance"],
    "answer_en": "move semantics",
    "answer_hi": "move semantics",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which operator supports move semantics?",
    "question_hi": "मूव सेमांटिक्स को सपोर्ट करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["&&", "&", "*", "::"],
    "options_hi": ["&&", "&", "*", "::"],
    "answer_en": "&&",
    "answer_hi": "&&",
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