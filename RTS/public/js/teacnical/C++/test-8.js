const questions = [
  {
    "num": 1,
    "question_en": "C++ was developed by whom?",
    "question_hi": "C++ किसके द्वारा विकसित की गई थी?",
    "options_en": ["Bjarne Stroustrup", "Dennis Ritchie", "James Gosling", "Guido van Rossum"],
    "options_hi": ["ब्यार्ने स्ट्रॉस्ट्रुप", "डेनिस रिची", "जेम्स गोसलिंग", "गुइडो वैन रोसम"],
    "answer_en": "Bjarne Stroustrup",
    "answer_hi": "ब्यार्ने स्ट्रॉस्ट्रुप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which extension is used for C++ files?",
    "question_hi": "C++ फाइल की एक्सटेंशन क्या होती है?",
    "options_en": [".cpp", ".c", ".java", ".py"],
    "options_hi": [".cpp", ".c", ".java", ".py"],
    "answer_en": ".cpp",
    "answer_hi": ".cpp",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which symbol is used to end a statement in C++?",
    "question_hi": "C++ में स्टेटमेंट को समाप्त करने के लिए कौन सा चिन्ह है?",
    "options_en": [";", ":", ".", ","],
    "options_hi": [";", ":", ".", ","],
    "answer_en": ";",
    "answer_hi": ";",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which header file is required for cout?",
    "question_hi": "cout के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["<iostream>", "<stdio.h>", "<string>", "<math.h>"],
    "options_hi": ["<iostream>", "<stdio.h>", "<string>", "<math.h>"],
    "answer_en": "<iostream>",
    "answer_hi": "<iostream>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which namespace is used with cout and cin?",
    "question_hi": "cout और cin के साथ कौन सा नेमस्पेस उपयोग होता है?",
    "options_en": ["std", "main", "system", "global"],
    "options_hi": ["std", "main", "system", "global"],
    "answer_en": "std",
    "answer_hi": "std",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 6,
    "question_en": "Which keyword is used to define a class?",
    "question_hi": "क्लास डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["class", "struct", "object", "define"],
    "options_hi": ["class", "struct", "object", "define"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which access specifier is default in class?",
    "question_hi": "क्लास में डिफ़ॉल्ट एक्सेस स्पेसिफायर कौन सा होता है?",
    "options_en": ["private", "public", "protected", "global"],
    "options_hi": ["private", "public", "protected", "global"],
    "answer_en": "private",
    "answer_hi": "private",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which access specifier is default in struct?",
    "question_hi": "struct में डिफ़ॉल्ट एक्सेस स्पेसिफायर कौन सा होता है?",
    "options_en": ["public", "private", "protected", "none"],
    "options_hi": ["public", "private", "protected", "none"],
    "answer_en": "public",
    "answer_hi": "public",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which concept allows using same function name with different parameters?",
    "question_hi": "एक ही फंक्शन नाम को अलग पैरामीटर के साथ उपयोग करने को क्या कहते हैं?",
    "options_en": ["Function Overloading", "Inheritance", "Encapsulation", "Abstraction"],
    "options_hi": ["फंक्शन ओवरलोडिंग", "इनहेरिटेंस", "एनकैप्सुलेशन", "एब्स्ट्रैक्शन"],
    "answer_en": "Function Overloading",
    "answer_hi": "फंक्शन ओवरलोडिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which concept allows one class to acquire properties of another?",
    "question_hi": "एक क्लास द्वारा दूसरी क्लास के गुण लेने को क्या कहते हैं?",
    "options_en": ["Inheritance", "Polymorphism", "Encapsulation", "Abstraction"],
    "options_hi": ["इनहेरिटेंस", "पॉलीमॉर्फिज्म", "एनकैप्सुलेशन", "एब्स्ट्रैक्शन"],
    "answer_en": "Inheritance",
    "answer_hi": "इनहेरिटेंस",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which keyword is used to inherit a class?",
    "question_hi": "क्लास को इनहेरिट करने के लिए कौन सा सिंबल उपयोग होता है?",
    "options_en": [":", "extends", "inherits", "implements"],
    "options_hi": [":", "extends", "inherits", "implements"],
    "answer_en": ":",
    "answer_hi": ":",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which concept hides data from direct access?",
    "question_hi": "डेटा को सीधे एक्सेस से छुपाने वाला कॉन्सेप्ट कौन सा है?",
    "options_en": ["Encapsulation", "Inheritance", "Compilation", "Execution"],
    "options_hi": ["एनकैप्सुलेशन", "इनहेरिटेंस", "कम्पाइलेशन", "एक्जीक्यूशन"],
    "answer_en": "Encapsulation",
    "answer_hi": "एनकैप्सुलेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword is used for dynamic memory allocation?",
    "question_hi": "डायनामिक मेमोरी अलोकेशन के लिए कौन सा कीवर्ड है?",
    "options_en": ["new", "malloc", "alloc", "create"],
    "options_hi": ["new", "malloc", "alloc", "create"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which keyword is used to free dynamic memory?",
    "question_hi": "डायनामिक मेमोरी फ्री करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which operator is used to access class members?",
    "question_hi": "क्लास के मेंबर्स एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": [".", "->", "::", "*"],
    "options_hi": [".", "->", "::", "*"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which operator is used with pointer to access members?",
    "question_hi": "पॉइंटर के साथ मेंबर एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["->", ".", "::", "&"],
    "options_hi": ["->", ".", "::", "&"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which loop executes at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार जरूर चलता है?",
    "options_en": ["do-while", "while", "for", "foreach"],
    "options_hi": ["do-while", "while", "for", "foreach"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which loop is best when number of iterations is known?",
    "question_hi": "जब इटरेशन की संख्या पता हो तो कौन सा लूप बेहतर है?",
    "options_en": ["for", "while", "do-while", "infinite"],
    "options_hi": ["for", "while", "do-while", "infinite"],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which keyword is used for exception handling?",
    "question_hi": "एक्सेप्शन हैंडलिंग के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["try", "catch", "throw", "All of these"],
    "options_hi": ["try", "catch", "throw", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which block handles exceptions?",
    "question_hi": "एक्सेप्शन को कौन सा ब्लॉक हैंडल करता है?",
    "options_en": ["catch", "try", "throw", "final"],
    "options_hi": ["catch", "try", "throw", "final"],
    "answer_en": "catch",
    "answer_hi": "catch",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which container stores elements sequentially?",
    "question_hi": "एलिमेंट्स को सीक्वेंस में स्टोर करने वाला कंटेनर कौन सा है?",
    "options_en": ["vector", "set", "map", "queue"],
    "options_hi": ["vector", "set", "map", "queue"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which container stores unique sorted values?",
    "question_hi": "यूनिक और सॉर्टेड वैल्यू स्टोर करने वाला कंटेनर कौन सा है?",
    "options_en": ["set", "vector", "list", "stack"],
    "options_hi": ["set", "vector", "list", "stack"],
    "answer_en": "set",
    "answer_hi": "set",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which container works on FIFO principle?",
    "question_hi": "FIFO सिद्धांत पर कौन सा कंटेनर काम करता है?",
    "options_en": ["queue", "stack", "vector", "set"],
    "options_hi": ["queue", "stack", "vector", "set"],
    "answer_en": "queue",
    "answer_hi": "queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which container works on LIFO principle?",
    "question_hi": "LIFO सिद्धांत पर कौन सा कंटेनर काम करता है?",
    "options_en": ["stack", "queue", "list", "map"],
    "options_hi": ["stack", "queue", "list", "map"],
    "answer_en": "stack",
    "answer_hi": "stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which header file is required for STL algorithms?",
    "question_hi": "STL एल्गोरिदम के लिए कौन सी हेडर फाइल चाहिए?",
    "options_en": ["<algorithm>", "<vector>", "<map>", "<list>"],
    "options_hi": ["<algorithm>", "<vector>", "<map>", "<list>"],
    "answer_en": "<algorithm>",
    "answer_hi": "<algorithm>",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which function is used to sort elements?",
    "question_hi": "एलिमेंट्स को सॉर्ट करने के लिए कौन सा फंक्शन है?",
    "options_en": ["sort()", "order()", "arrange()", "set()"],
    "options_hi": ["sort()", "order()", "arrange()", "set()"],
    "answer_en": "sort()",
    "answer_hi": "sort()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which operator cannot be overloaded?",
    "question_hi": "कौन सा ऑपरेटर ओवरलोड नहीं किया जा सकता?",
    "options_en": ["::", "+", "*", "[]"],
    "options_hi": ["::", "+", "*", "[]"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which keyword avoids name conflicts?",
    "question_hi": "नेम कॉन्फ्लिक्ट से बचने के लिए कौन सा कीवर्ड है?",
    "options_en": ["namespace", "using", "scope", "define"],
    "options_hi": ["namespace", "using", "scope", "define"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which operator is used for scope resolution?",
    "question_hi": "स्कोप रेज़ोल्यूशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["::", ".", "->", "*"],
    "options_hi": ["::", ".", "->", "*"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which keyword is used to prevent inheritance?",
    "question_hi": "इनहेरिटेंस को रोकने के लिए कौन सा कीवर्ड है?",
    "options_en": ["final", "const", "static", "sealed"],
    "options_hi": ["final", "const", "static", "sealed"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which C++ version introduced lambda expressions?",
    "question_hi": "लैम्ब्डा एक्सप्रेशन किस C++ वर्ज़न में आया?",
    "options_en": ["C++11", "C++98", "C++03", "C++17"],
    "options_hi": ["C++11", "C++98", "C++03", "C++17"],
    "answer_en": "C++11",
    "answer_hi": "C++11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which smart pointer provides exclusive ownership?",
    "question_hi": "एक्सक्लूसिव ओनरशिप देने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["unique_ptr", "shared_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "unique_ptr",
    "answer_hi": "unique_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
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
    "num": 34,
    "question_en": "Which smart pointer avoids circular reference?",
    "question_hi": "सर्कुलर रेफरेंस से बचाने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "options_hi": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "answer_en": "weak_ptr",
    "answer_hi": "weak_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword checks condition at compile time?",
    "question_hi": "कम्पाइल टाइम पर कंडीशन चेक करने वाला कीवर्ड कौन सा है?",
    "options_en": ["static_assert", "assert", "check", "verify"],
    "options_hi": ["static_assert", "assert", "check", "verify"],
    "answer_en": "static_assert",
    "answer_hi": "static_assert",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which comment type is multi-line?",
    "question_hi": "मल्टी लाइन कमेंट कौन सा होता है?",
    "options_en": ["/* */", "//", "#", "<!-- -->"],
    "options_hi": ["/* */", "//", "#", "<!-- -->"],
    "answer_en": "/* */",
    "answer_hi": "/* */",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which keyword includes header files?",
    "question_hi": "हेडर फाइल जोड़ने के लिए कौन सा कीवर्ड है?",
    "options_en": ["#include", "#define", "import", "using"],
    "options_hi": ["#include", "#define", "import", "using"],
    "answer_en": "#include",
    "answer_hi": "#include",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which macro defines constants?",
    "question_hi": "कॉनस्टेंट डिफाइन करने के लिए कौन सा मैक्रो है?",
    "options_en": ["#define", "#ifdef", "#pragma", "#include"],
    "options_hi": ["#define", "#ifdef", "#pragma", "#include"],
    "answer_en": "#define",
    "answer_hi": "#define",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which operator is used for output?",
    "question_hi": "आउटपुट के लिए कौन सा ऑपरेटर है?",
    "options_en": ["<<", ">>", "=", "=="],
    "options_hi": ["<<", ">>", "=", "=="],
    "answer_en": "<<",
    "answer_hi": "<<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which operator is used for input?",
    "question_hi": "इनपुट के लिए कौन सा ऑपरेटर है?",
    "options_en": ["<<", ">>", "=", "!="],
    "options_hi": ["<<", ">>", "=", "!="],
    "answer_en": ">>",
    "answer_hi": ">>",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which function is the entry point of C++ program?",
    "question_hi": "C++ प्रोग्राम का एंट्री पॉइंट कौन सा फंक्शन है?",
    "options_en": ["main()", "start()", "run()", "init()"],
    "options_hi": ["main()", "start()", "run()", "init()"],
    "answer_en": "main()",
    "answer_hi": "main()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which keyword is used to declare constant variables?",
    "question_hi": "कॉनस्टेंट वेरिएबल घोषित करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["const", "static", "final", "define"],
    "options_hi": ["const", "static", "final", "define"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which data type stores true or false?",
    "question_hi": "true या false स्टोर करने वाला डेटा टाइप कौन सा है?",
    "options_en": ["bool", "int", "char", "float"],
    "options_hi": ["bool", "int", "char", "float"],
    "answer_en": "bool",
    "answer_hi": "bool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which memory area stores local variables?",
    "question_hi": "लोकल वेरिएबल्स किस मेमोरी एरिया में स्टोर होते हैं?",
    "options_en": ["Stack", "Heap", "Data", "ROM"],
    "options_hi": ["स्टैक", "हीप", "डेटा", "ROM"],
    "answer_en": "Stack",
    "answer_hi": "स्टैक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which memory area is used for dynamic allocation?",
    "question_hi": "डायनामिक अलोकेशन किस मेमोरी एरिया में होती है?",
    "options_en": ["Heap", "Stack", "Register", "Cache"],
    "options_hi": ["हीप", "स्टैक", "रजिस्टर", "कैश"],
    "answer_en": "Heap",
    "answer_hi": "हीप",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which feature shows many forms?",
    "question_hi": "कई रूप दिखाने वाला फीचर कौन सा है?",
    "options_en": ["Polymorphism", "Encapsulation", "Inheritance", "Abstraction"],
    "options_hi": ["पॉलीमॉर्फिज्म", "एनकैप्सुलेशन", "इनहेरिटेंस", "एब्स्ट्रैक्शन"],
    "answer_en": "Polymorphism",
    "answer_hi": "पॉलीमॉर्फिज्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which feature hides implementation details?",
    "question_hi": "इम्प्लीमेंटेशन डिटेल्स छुपाने वाला फीचर कौन सा है?",
    "options_en": ["Abstraction", "Encapsulation", "Inheritance", "Compilation"],
    "options_hi": ["एब्स्ट्रैक्शन", "एनकैप्सुलेशन", "इनहेरिटेंस", "कम्पाइलेशन"],
    "answer_en": "Abstraction",
    "answer_hi": "एब्स्ट्रैक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
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
    "num": 49,
    "question_en": "Which keyword is used instead of typename in templates?",
    "question_hi": "टेम्पलेट में typename की जगह कौन सा कीवर्ड इस्तेमाल हो सकता है?",
    "options_en": ["class", "struct", "object", "var"],
    "options_hi": ["class", "struct", "object", "var"],
    "answer_en": "class",
    "answer_hi": "class",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which operator checks equality?",
    "question_hi": "इक्वैलिटी चेक करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["==", "=", "!=", "<>"],
    "options_hi": ["==", "=", "!=", "<>"],
    "answer_en": "==",
    "answer_hi": "==",
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