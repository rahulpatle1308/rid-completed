const questions= [
  {
    "num": 1,
    "question_en": "Which header file is used for input and output in C++?",
    "question_hi": "C++ में इनपुट और आउटपुट के लिए कौन सा हेडर फाइल उपयोग होता है?",
    "options_en": ["<iostream>", "<stdio.h>", "<conio.h>", "<stream>"],
    "options_hi": ["<iostream>", "<stdio.h>", "<conio.h>", "<stream>"],
    "answer_en": "<iostream>",
    "answer_hi": "<iostream>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which function is the starting point of a C++ program?",
    "question_hi": "C++ प्रोग्राम का स्टार्टिंग पॉइंट कौन सा फंक्शन है?",
    "options_en": ["main()", "start()", "run()", "init()"],
    "options_hi": ["main()", "start()", "run()", "init()"],
    "answer_en": "main()",
    "answer_hi": "main()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which keyword is used to declare a constant variable?",
    "question_hi": "कॉन्स्टेंट वेरिएबल घोषित करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["const", "static", "final", "define"],
    "options_hi": ["const", "static", "final", "define"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which operator is used for scope resolution in C++?",
    "question_hi": "C++ में स्कोप रेज़ोल्यूशन के लिए कौन सा ऑपरेटर है?",
    "options_en": ["::", ".", "->", ":"],
    "options_hi": ["::", ".", "->", ":"],
    "answer_en": "::",
    "answer_hi": "::",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which OOP concept binds data and methods together?",
    "question_hi": "डेटा और मेथड्स को एक साथ बाँधने वाला OOP कॉन्सेप्ट कौन सा है?",
    "options_en": ["Encapsulation", "Inheritance", "Polymorphism", "Abstraction"],
    "options_hi": ["एनकैप्सुलेशन", "इनहेरिटेंस", "पॉलीमॉर्फिज़्म", "एब्स्ट्रैक्शन"],
    "answer_en": "Encapsulation",
    "answer_hi": "एनकैप्सुलेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which keyword is used for dynamic memory allocation?",
    "question_hi": "डायनामिक मेमोरी अलोकेशन के लिए कौन सा कीवर्ड है?",
    "options_en": ["new", "malloc", "alloc", "memory"],
    "options_hi": ["new", "malloc", "alloc", "memory"],
    "answer_en": "new",
    "answer_hi": "new",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which keyword is used to release dynamically allocated memory?",
    "question_hi": "डायनामिकली अलोकेट की गई मेमोरी को रिलीज़ करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["delete", "free", "remove", "clear"],
    "options_hi": ["delete", "free", "remove", "clear"],
    "answer_en": "delete",
    "answer_hi": "delete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which feature allows function overloading in C++?",
    "question_hi": "C++ में फंक्शन ओवरलोडिंग किस फीचर से संभव है?",
    "options_en": ["Polymorphism", "Inheritance", "Encapsulation", "Abstraction"],
    "options_hi": ["पॉलीमॉर्फिज़्म", "इनहेरिटेंस", "एनकैप्सुलेशन", "एब्स्ट्रैक्शन"],
    "answer_en": "Polymorphism",
    "answer_hi": "पॉलीमॉर्फिज़्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which container stores elements in contiguous memory?",
    "question_hi": "कौन सा कंटेनर एलिमेंट्स को कंटिग्यूस मेमोरी में स्टोर करता है?",
    "options_en": ["vector", "list", "map", "set"],
    "options_hi": ["vector", "list", "map", "set"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which container allows duplicate elements?",
    "question_hi": "कौन सा कंटेनर डुप्लिकेट एलिमेंट्स की अनुमति देता है?",
    "options_en": ["multiset", "set", "map", "array"],
    "options_hi": ["multiset", "set", "map", "array"],
    "answer_en": "multiset",
    "answer_hi": "multiset",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 11,
    "question_en": "Which header file provides STL algorithms?",
    "question_hi": "STL एल्गोरिद्म किस हेडर फाइल में होते हैं?",
    "options_en": ["<algorithm>", "<numeric>", "<iterator>", "<utility>"],
    "options_hi": ["<algorithm>", "<numeric>", "<iterator>", "<utility>"],
    "answer_en": "<algorithm>",
    "answer_hi": "<algorithm>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which keyword prevents inheritance in C++?",
    "question_hi": "C++ में इनहेरिटेंस रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["final", "private", "sealed", "stop"],
    "options_hi": ["final", "private", "sealed", "stop"],
    "answer_en": "final",
    "answer_hi": "final",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which keyword avoids implicit constructor calls?",
    "question_hi": "इम्प्लिसिट कन्स्ट्रक्टर कॉल को रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["explicit", "inline", "mutable", "volatile"],
    "options_hi": ["explicit", "inline", "mutable", "volatile"],
    "answer_en": "explicit",
    "answer_hi": "explicit",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which smart pointer supports shared ownership?",
    "question_hi": "शेयर्ड ओनरशिप कौन सा स्मार्ट पॉइंटर सपोर्ट करता है?",
    "options_en": ["shared_ptr", "unique_ptr", "weak_ptr", "auto_ptr"],
    "options_hi": ["shared_ptr", "unique_ptr", "weak_ptr", "auto_ptr"],
    "answer_en": "shared_ptr",
    "answer_hi": "shared_ptr",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which smart pointer breaks cyclic references?",
    "question_hi": "साइक्लिक रेफरेंस तोड़ने वाला स्मार्ट पॉइंटर कौन सा है?",
    "options_en": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "options_hi": ["weak_ptr", "shared_ptr", "unique_ptr", "auto_ptr"],
    "answer_en": "weak_ptr",
    "answer_hi": "weak_ptr",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 16,
    "question_en": "Which header file is used for smart pointers?",
    "question_hi": "स्मार्ट पॉइंटर्स के लिए कौन सा हेडर फाइल उपयोग होता है?",
    "options_en": ["<memory>", "<pointer>", "<smart>", "<utility>"],
    "options_hi": ["<memory>", "<pointer>", "<smart>", "<utility>"],
    "answer_en": "<memory>",
    "answer_hi": "<memory>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which keyword allows modification of a member in a const object?",
    "question_hi": "const ऑब्जेक्ट में किसी मेंबर को बदलने की अनुमति कौन सा कीवर्ड देता है?",
    "options_en": ["mutable", "volatile", "static", "register"],
    "options_hi": ["mutable", "volatile", "static", "register"],
    "answer_en": "mutable",
    "answer_hi": "mutable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which header file is used for multithreading?",
    "question_hi": "मल्टीथ्रेडिंग के लिए कौन सा हेडर फाइल उपयोग होता है?",
    "options_en": ["<thread>", "<process>", "<task>", "<parallel>"],
    "options_hi": ["<thread>", "<process>", "<task>", "<parallel>"],
    "answer_en": "<thread>",
    "answer_hi": "<thread>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which object is used to synchronize threads?",
    "question_hi": "थ्रेड्स को सिंक्रोनाइज़ करने के लिए कौन सा ऑब्जेक्ट उपयोग होता है?",
    "options_en": ["mutex", "signal", "gate", "lockstep"],
    "options_hi": ["mutex", "signal", "gate", "lockstep"],
    "answer_en": "mutex",
    "answer_hi": "mutex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which keyword guarantees no exception is thrown?",
    "question_hi": "कोई एक्सेप्शन न फेंके जाने की गारंटी देने वाला कीवर्ड कौन सा है?",
    "options_en": ["noexcept", "throw", "try", "catch"],
    "options_hi": ["noexcept", "throw", "try", "catch"],
    "answer_en": "noexcept",
    "answer_hi": "noexcept",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 21,
    "question_en": "Which operator is used to compare equality?",
    "question_hi": "इक्वैलिटी की तुलना करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["==", "=", "!=", "<"],
    "options_hi": ["==", "=", "!=", "<"],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which header file provides chrono utilities?",
    "question_hi": "क्रोनो यूटिलिटीज़ किस हेडर में मिलती हैं?",
    "options_en": ["<chrono>", "<ctime>", "<time>", "<clock>"],
    "options_hi": ["<chrono>", "<ctime>", "<time>", "<clock>"],
    "answer_en": "<chrono>",
    "answer_hi": "<chrono>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which header file supports regular expressions?",
    "question_hi": "रेगुलर एक्सप्रेशन सपोर्ट किस हेडर में है?",
    "options_en": ["<regex>", "<pattern>", "<string>", "<re>"],
    "options_hi": ["<regex>", "<pattern>", "<string>", "<re>"],
    "answer_en": "<regex>",
    "answer_hi": "<regex>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which header provides file system support?",
    "question_hi": "फाइल सिस्टम सपोर्ट किस हेडर में है?",
    "options_en": ["<filesystem>", "<files>", "<fs>", "<path>"],
    "options_hi": ["<filesystem>", "<files>", "<fs>", "<path>"],
    "answer_en": "<filesystem>",
    "answer_hi": "<filesystem>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which keyword indicates a variable can change unexpectedly?",
    "question_hi": "कौन सा कीवर्ड बताता है कि वेरिएबल अचानक बदल सकता है?",
    "options_en": ["volatile", "mutable", "atomic", "static"],
    "options_hi": ["volatile", "mutable", "atomic", "static"],
    "answer_en": "volatile",
    "answer_hi": "volatile",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 26,
    "question_en": "Which header supports atomic operations?",
    "question_hi": "एटॉमिक ऑपरेशन्स किस हेडर में होते हैं?",
    "options_en": ["<atomic>", "<mutex>", "<thread>", "<future>"],
    "options_hi": ["<atomic>", "<mutex>", "<thread>", "<future>"],
    "answer_en": "<atomic>",
    "answer_hi": "<atomic>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which container is best for priority based access?",
    "question_hi": "प्रायोरिटी बेस्ड एक्सेस के लिए कौन सा कंटेनर सबसे अच्छा है?",
    "options_en": ["priority_queue", "queue", "deque", "vector"],
    "options_hi": ["priority_queue", "queue", "deque", "vector"],
    "answer_en": "priority_queue",
    "answer_hi": "priority_queue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which header file supports assertions?",
    "question_hi": "असर्शन सपोर्ट किस हेडर फाइल में है?",
    "options_en": ["<cassert>", "<assert>", "<verify>", "<check>"],
    "options_hi": ["<cassert>", "<assert>", "<verify>", "<check>"],
    "answer_en": "<cassert>",
    "answer_hi": "<cassert>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which macro gives the function name?",
    "question_hi": "फंक्शन का नाम बताने वाला मैक्रो कौन सा है?",
    "options_en": ["__func__", "__FUNCTION__", "__NAME__", "__FN__"],
    "options_hi": ["__func__", "__FUNCTION__", "__NAME__", "__FN__"],
    "answer_en": "__func__",
    "answer_hi": "__func__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which container maintains insertion order?",
    "question_hi": "इंसर्शन ऑर्डर बनाए रखने वाला कंटेनर कौन सा है?",
    "options_en": ["list", "set", "map", "unordered_set"],
    "options_hi": ["list", "set", "map", "unordered_set"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 31,
    "question_en": "Which iterator points past the last element?",
    "question_hi": "लास्ट एलिमेंट के बाद कौन सा इटरेटर पॉइंट करता है?",
    "options_en": ["end()", "begin()", "rbegin()", "last()"],
    "options_hi": ["end()", "begin()", "rbegin()", "last()"],
    "answer_en": "end()",
    "answer_hi": "end()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which algorithm is used to sort elements?",
    "question_hi": "एलिमेंट्स को सॉर्ट करने के लिए कौन सा एल्गोरिद्म उपयोग होता है?",
    "options_en": ["std::sort", "std::order", "std::arrange", "std::rank"],
    "options_hi": ["std::sort", "std::order", "std::arrange", "std::rank"],
    "answer_en": "std::sort",
    "answer_hi": "std::sort",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which operator is used to access class members via pointer?",
    "question_hi": "पॉइंटर के जरिए क्लास मेंबर एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["->", ".", "::", "*"],
    "options_hi": ["->", ".", "::", "*"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which header file provides string streams?",
    "question_hi": "स्ट्रिंग स्ट्रीम्स किस हेडर फाइल में होती हैं?",
    "options_en": ["<sstream>", "<string>", "<iostream>", "<stream>"],
    "options_hi": ["<sstream>", "<string>", "<iostream>", "<stream>"],
    "answer_en": "<sstream>",
    "answer_hi": "<sstream>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which keyword is used for compile time assertion?",
    "question_hi": "कम्पाइल टाइम असर्शन के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["static_assert", "assert", "check", "verify"],
    "options_hi": ["static_assert", "assert", "check", "verify"],
    "answer_en": "static_assert",
    "answer_hi": "static_assert",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 36,
    "question_en": "Which header provides optional type?",
    "question_hi": "optional टाइप किस हेडर में होता है?",
    "options_en": ["<optional>", "<variant>", "<any>", "<tuple>"],
    "options_hi": ["<optional>", "<variant>", "<any>", "<tuple>"],
    "answer_en": "<optional>",
    "answer_hi": "<optional>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which type can store one of many types?",
    "question_hi": "कौन सा टाइप कई टाइप्स में से एक को स्टोर कर सकता है?",
    "options_en": ["variant", "any", "optional", "tuple"],
    "options_hi": ["variant", "any", "optional", "tuple"],
    "answer_en": "variant",
    "answer_hi": "variant",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which keyword prevents modification of object inside a method?",
    "question_hi": "मेथड के अंदर ऑब्जेक्ट को बदलने से रोकने वाला कीवर्ड कौन सा है?",
    "options_en": ["const", "static", "inline", "final"],
    "options_hi": ["const", "static", "inline", "final"],
    "answer_en": "const",
    "answer_hi": "const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which OOP concept hides implementation details?",
    "question_hi": "इम्प्लीमेंटेशन डिटेल्स छुपाने वाला OOP कॉन्सेप्ट कौन सा है?",
    "options_en": ["Abstraction", "Encapsulation", "Inheritance", "Polymorphism"],
    "options_hi": ["एब्स्ट्रैक्शन", "एनकैप्सुलेशन", "इनहेरिटेंस", "पॉलीमॉर्फिज़्म"],
    "answer_en": "Abstraction",
    "answer_hi": "एब्स्ट्रैक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Which operator negates a boolean value?",
    "question_hi": "बूलियन वैल्यू को नेगेट करने वाला ऑपरेटर कौन सा है?",
    "options_en": ["!", "~", "^", "not"],
    "options_hi": ["!", "~", "^", "not"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 41,
    "question_en": "Which container provides bidirectional iterators?",
    "question_hi": "बाइडायरेक्शनल इटरेटर कौन सा कंटेनर देता है?",
    "options_en": ["list", "vector", "array", "stack"],
    "options_hi": ["list", "vector", "array", "stack"],
    "answer_en": "list",
    "answer_hi": "list",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which function flushes output buffer?",
    "question_hi": "आउटपुट बफर फ्लश करने वाला फंक्शन कौन सा है?",
    "options_en": ["std::flush", "std::endl", "flush()", "end()"],
    "options_hi": ["std::flush", "std::endl", "flush()", "end()"],
    "answer_en": "std::flush",
    "answer_hi": "std::flush",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which header is used for file input and output?",
    "question_hi": "फाइल इनपुट और आउटपुट के लिए कौन सा हेडर है?",
    "options_en": ["<fstream>", "<file>", "<io>", "<stream>"],
    "options_hi": ["<fstream>", "<file>", "<io>", "<stream>"],
    "answer_en": "<fstream>",
    "answer_hi": "<fstream>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which operator is used to access array elements?",
    "question_hi": "ऐरे एलिमेंट्स एक्सेस करने के लिए कौन सा ऑपरेटर है?",
    "options_en": ["[]", "()", "{}", "<>"],
    "options_hi": ["[]", "()", "{}", "<>"],
    "answer_en": "[]",
    "answer_hi": "[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which container stores key-value pairs?",
    "question_hi": "की-वैल्यू पेयर्स कौन सा कंटेनर स्टोर करता है?",
    "options_en": ["map", "set", "vector", "list"],
    "options_hi": ["map", "set", "vector", "list"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },

  {
    "num": 46,
    "question_en": "Which header supports unordered containers?",
    "question_hi": "अनऑर्डर्ड कंटेनर्स किस हेडर में होते हैं?",
    "options_en": ["<unordered_map>", "<map>", "<set>", "<array>"],
    "options_hi": ["<unordered_map>", "<map>", "<set>", "<array>"],
    "answer_en": "<unordered_map>",
    "answer_hi": "<unordered_map>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which keyword is used to define a namespace?",
    "question_hi": "नेमस्पेस डिफाइन करने के लिए कौन सा कीवर्ड है?",
    "options_en": ["namespace", "using", "scope", "package"],
    "options_hi": ["namespace", "using", "scope", "package"],
    "answer_en": "namespace",
    "answer_hi": "namespace",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which feature allows code reuse?",
    "question_hi": "कोड रीयूज़ किस फीचर से संभव होता है?",
    "options_en": ["Inheritance", "Encapsulation", "Abstraction", "Polymorphism"],
    "options_hi": ["इनहेरिटेंस", "एनकैप्सुलेशन", "एब्स्ट्रैक्शन", "पॉलीमॉर्फिज़्म"],
    "answer_en": "Inheritance",
    "answer_hi": "इनहेरिटेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which keyword is used to include a header file?",
    "question_hi": "हेडर फाइल शामिल करने के लिए कौन सा कीवर्ड उपयोग होता है?",
    "options_en": ["#include", "import", "using", "require"],
    "options_hi": ["#include", "import", "using", "require"],
    "answer_en": "#include",
    "answer_hi": "#include",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which feature allows same function name with different parameters?",
    "question_hi": "एक ही फंक्शन नाम को अलग पैरामीटर्स के साथ इस्तेमाल करने की सुविधा किस फीचर से मिलती है?",
    "options_en": ["Function Overloading", "Inheritance", "Templates", "Virtual Functions"],
    "options_hi": ["फंक्शन ओवरलोडिंग", "इनहेरिटेंस", "टेम्पलेट्स", "वर्चुअल फंक्शन्स"],
    "answer_en": "Function Overloading",
    "answer_hi": "फंक्शन ओवरलोडिंग",
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