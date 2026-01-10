const questions= [
    {
        "num": 1,
        "question_en": "Which concept allows a function to operate with different data types?",
        "question_hi": "कौन सी अवधारणा एक फ़ंक्शन को विभिन्न डेटा प्रकारों के साथ काम करने की अनुमति देती है?",
        "options_en": ["Function Overloading", "Templates", "Inheritance", "Polymorphism"],
        "options_hi": ["फ़ंक्शन ओवरलोडिंग", "टेम्पलेट्स", "इनहेरिटेंस", "पॉलीमॉर्फिज्म"],
        "answer_en": "Templates",
        "answer_hi": "टेम्पलेट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the purpose of the 'volatile' keyword?",
        "question_hi": "'volatile' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To indicate that a variable may change unexpectedly", "To make a variable constant", "To improve optimization", "To store in register"],
        "options_hi": ["यह दर्शाने के लिए कि एक चर अप्रत्याशित रूप से बदल सकता है", "किसी चर को स्थिर बनाने के लिए", "ऑप्टिमाइज़ेशन सुधारने के लिए", "रजिस्टर में संग्रहीत करने के लिए"],
        "answer_en": "To indicate that a variable may change unexpectedly",
        "answer_hi": "यह दर्शाने के लिए कि एक चर अप्रत्याशित रूप से बदल सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which container provides 'last-in, first-out' (LIFO) behavior?",
        "question_hi": "कौन सा कंटेनर 'लास्ट-इन, फर्स्ट-आउट' (LIFO) व्यवहार प्रदान करता है?",
        "options_en": ["std::queue", "std::stack", "std::deque", "std::vector"],
        "options_hi": ["std::queue", "std::stack", "std::deque", "std::vector"],
        "answer_en": "std::stack",
        "answer_hi": "std::stack",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the role of a 'copy constructor'?",
        "question_hi": "'कॉपी कंस्ट्रक्टर' की क्या भूमिका है?",
        "options_en": ["Initializes an object using another object of the same class", "Copies pointers only", "Moves resources", "Creates a shallow copy"],
        "options_hi": ["एक ही क्लास के किसी अन्य ऑब्जेक्ट का उपयोग करके एक ऑब्जेक्ट को इनिशियलाइज़ करता है", "केवल पॉइंटर्स की कॉपी बनाता है", "संसाधनों को ले जाता है", "एक उथली कॉपी बनाता है"],
        "answer_en": "Initializes an object using another object of the same class",
        "answer_hi": "एक ही क्लास के किसी अन्य ऑब्जेक्ट का उपयोग करके एक ऑब्जेक्ट को इनिशियलाइज़ करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What does 'namespace' prevent in C++?",
        "question_hi": "C++ में 'namespace' क्या रोकता है?",
        "options_en": ["Name collisions", "Memory leaks", "Type errors", "Syntax errors"],
        "options_hi": ["नाम टकराव", "मेमोरी लीक", "प्रकार त्रुटियाँ", "सिंटैक्स त्रुटियाँ"],
        "answer_en": "Name collisions",
        "answer_hi": "नाम टकराव",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which smart pointer allows shared ownership?",
        "question_hi": "कौन सा स्मार्ट पॉइंटर साझा स्वामित्व की अनुमति देता है?",
        "options_en": ["std::unique_ptr", "std::shared_ptr", "std::weak_ptr", "std::auto_ptr"],
        "options_hi": ["std::unique_ptr", "std::shared_ptr", "std::weak_ptr", "std::auto_ptr"],
        "answer_en": "std::shared_ptr",
        "answer_hi": "std::shared_ptr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is 'operator overloading'?",
        "question_hi": "'ऑपरेटर ओवरलोडिंग' क्या है?",
        "options_en": ["Defining new meaning for existing operators", "Creating new operators", "Deleting operators", "Increasing operator precedence"],
        "options_hi": ["मौजूदा ऑपरेटरों के लिए नया अर्थ परिभाषित करना", "नए ऑपरेटर बनाना", "ऑपरेटरों को हटाना", "ऑपरेटर प्रीसीडेंस बढ़ाना"],
        "answer_en": "Defining new meaning for existing operators",
        "answer_hi": "मौजूदा ऑपरेटरों के लिए नया अर्थ परिभाषित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which function is used to throw exceptions manually?",
        "question_hi": "एक्सेप्शन्स को मैन्युअली फेंकने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["throw", "catch", "try", "raise"],
        "options_hi": ["throw", "catch", "try", "raise"],
        "answer_en": "throw",
        "answer_hi": "throw",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is 'std::pair' used for?",
        "question_hi": "'std::pair' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To store two heterogeneous objects together", "For arrays", "For linked lists", "To store similar types"],
        "options_hi": ["दो विषम ऑब्जेक्ट्स को एक साथ संग्रहीत करने के लिए", "एरे के लिए", "लिंक्ड लिस्ट के लिए", "समान प्रकारों को संग्रहीत करने के लिए"],
        "answer_en": "To store two heterogeneous objects together",
        "answer_hi": "दो विषम ऑब्जेक्ट्स को एक साथ संग्रहीत करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the default visibility mode in inheritance?",
        "question_hi": "इनहेरिटेंस में डिफ़ॉल्ट दृश्यता मोड क्या है?",
        "options_en": ["private", "public", "protected", "depends on compiler"],
        "options_hi": ["private", "public", "protected", "कंपाइलर पर निर्भर करता है"],
        "answer_en": "private",
        "answer_hi": "private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which STL algorithm is used for sorting?",
        "question_hi": "सॉर्टिंग के लिए किस STL एल्गोरिदम का उपयोग किया जाता है?",
        "options_en": ["std::sort", "std::find", "std::binary_search", "std::partition"],
        "options_hi": ["std::sort", "std::find", "std::binary_search", "std::partition"],
        "answer_en": "std::sort",
        "answer_hi": "std::sort",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is 'dynamic_cast' used for?",
        "question_hi": "'dynamic_cast' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Safe downcasting in polymorphism", "Casting away constness", "Static type conversion", "Integer to pointer cast"],
        "options_hi": ["पॉलीमॉर्फिज्म में सुरक्षित डाउनकास्टिंग", "constness हटाने के लिए", "स्टेटिक टाइप कनवर्जन", "इंटीजर से पॉइंटर कास्ट"],
        "answer_en": "Safe downcasting in polymorphism",
        "answer_hi": "पॉलीमॉर्फिज्म में सुरक्षित डाउनकास्टिंग",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is a 'lambda expression'?",
        "question_hi": "'लैम्ब्डा एक्सप्रेशन' क्या है?",
        "options_en": ["Anonymous function object", "Named function", "Macro", "Function template"],
        "options_hi": ["अनाम फ़ंक्शन ऑब्जेक्ट", "नामित फ़ंक्शन", "मैक्रो", "फ़ंक्शन टेम्पलेट"],
        "answer_en": "Anonymous function object",
        "answer_hi": "अनाम फ़ंक्शन ऑब्जेक्ट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does 'CRTP' stand for?",
        "question_hi": "'CRTP' का पूरा नाम क्या है?",
        "options_en": ["Curiously Recurring Template Pattern", "Class Recurring Type Pattern", "Constant Recurring Template Parameter", "Compile-time Recursive Template Pattern"],
        "options_hi": ["Curiously Recurring Template Pattern", "Class Recurring Type Pattern", "Constant Recurring Template Parameter", "Compile-time Recursive Template Pattern"],
        "answer_en": "Curiously Recurring Template Pattern",
        "answer_hi": "Curiously Recurring Template Pattern",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'std::enable_if'?",
        "question_hi": "'std::enable_if' का उद्देश्य क्या है?",
        "options_en": ["For SFINAE and conditional template compilation", "To enable runtime checks", "To enable exceptions", "To enable RTTI"],
        "options_hi": ["SFINAE और सशर्त टेम्पलेट संकलन के लिए", "रनटाइम जांच सक्षम करने के लिए", "एक्सेप्शन्स सक्षम करने के लिए", "RTTI सक्षम करने के लिए"],
        "answer_en": "For SFINAE and conditional template compilation",
        "answer_hi": "SFINAE और सशर्त टेम्पलेट संकलन के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which container uses a hash table internally?",
        "question_hi": "कौन सा कंटेनर आंतरिक रूप से हैश टेबल का उपयोग करता है?",
        "options_en": ["std::map", "std::unordered_map", "std::set", "std::multimap"],
        "options_hi": ["std::map", "std::unordered_map", "std::set", "std::multimap"],
        "answer_en": "std::unordered_map",
        "answer_hi": "std::unordered_map",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is 'typeid' operator used for?",
        "question_hi": "'typeid' ऑपरेटर का उपयोग किस लिए किया जाता है?",
        "options_en": ["To get the type information of an expression", "To cast types", "To compare values", "To allocate memory"],
        "options_hi": ["किसी एक्सप्रेशन की प्रकार जानकारी प्राप्त करने के लिए", "प्रकार कास्ट करने के लिए", "मूल्यों की तुलना करने के लिए", "मेमोरी आवंटित करने के लिए"],
        "answer_en": "To get the type information of an expression",
        "answer_hi": "किसी एक्सप्रेशन की प्रकार जानकारी प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which keyword is used to define an alias for a type?",
        "question_hi": "किसी प्रकार के लिए उपनाम परिभाषित करने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["typedef", "using", "Both 1 and 2", "define"],
        "options_hi": ["typedef", "using", "1 और 2 दोनों", "define"],
        "answer_en": "Both 1 and 2",
        "answer_hi": "1 और 2 दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the output of: 'int x = 5; int y = x++ + ++x; cout << y;'",
        "question_hi": "'int x = 5; int y = x++ + ++x; cout << y;' का आउटपुट क्या है?",
        "options_en": ["12", "11", "13", "Undefined behavior"],
        "options_hi": ["12", "11", "13", "अपरिभाषित व्यवहार"],
        "answer_en": "Undefined behavior",
        "answer_hi": "अपरिभाषित व्यवहार",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the purpose of 'std::initializer_list'?",
        "question_hi": "'std::initializer_list' का उद्देश्य क्या है?",
        "options_en": ["To initialize objects with a list of values", "To create lists", "To allocate memory", "For exception handling"],
        "options_hi": ["मूल्यों की सूची के साथ ऑब्जेक्ट्स को इनिशियलाइज़ करने के लिए", "सूचियाँ बनाने के लिए", "मेमोरी आवंटित करने के लिए", "एक्सेप्शन हैंडलिंग के लिए"],
        "answer_en": "To initialize objects with a list of values",
        "answer_hi": "मूल्यों की सूची के साथ ऑब्जेक्ट्स को इनिशियलाइज़ करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which of the following is a valid C++ comment?",
        "question_hi": "निम्नलिखित में से कौन सी एक वैध C++ टिप्पणी है?",
        "options_en": ["// Single line comment", "/* Multi-line comment */", "# Comment", "Both 1 and 2"],
        "options_hi": ["// एकल पंक्ति टिप्पणी", "/* बहु-पंक्ति टिप्पणी */", "# टिप्पणी", "1 और 2 दोनों"],
        "answer_en": "Both 1 and 2",
        "answer_hi": "1 और 2 दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What does the 'register' keyword suggest to the compiler?",
        "question_hi": "'register' कीवर्ड कंपाइलर को क्या सुझाव देता है?",
        "options_en": ["To store the variable in a CPU register if possible", "To make variable global", "To prevent optimization", "To make variable volatile"],
        "options_hi": ["यदि संभव हो तो वेरिएबल को CPU रजिस्टर में संग्रहीत करने के लिए", "वेरिएबल को ग्लोबल बनाने के लिए", "ऑप्टिमाइज़ेशन रोकने के लिए", "वेरिएबल को volatile बनाने के लिए"],
        "answer_en": "To store the variable in a CPU register if possible",
        "answer_hi": "यदि संभव हो तो वेरिएबल को CPU रजिस्टर में संग्रहीत करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which header file is required for 'std::cout'?",
        "question_hi": "'std::cout' के लिए किस हेडर फ़ाइल की आवश्यकता होती है?",
        "options_en": ["<iostream>", "<ostream>", "<istream>", "<stdio.h>"],
        "options_hi": ["<iostream>", "<ostream>", "<istream>", "<stdio.h>"],
        "answer_en": "<iostream>",
        "answer_hi": "<iostream>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is 'placement new' used for?",
        "question_hi": "'प्लेसमेंट न्यू' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To construct an object at a pre-allocated memory location", "To allocate memory", "To replace new operator", "For dynamic arrays"],
        "options_hi": ["पूर्व-आवंटित मेमोरी लोकेशन पर एक ऑब्जेक्ट का निर्माण करने के लिए", "मेमोरी आवंटित करने के लिए", "new ऑपरेटर को प्रतिस्थापित करने के लिए", "डायनामिक एरे के लिए"],
        "answer_en": "To construct an object at a pre-allocated memory location",
        "answer_hi": "पूर्व-आवंटित मेमोरी लोकेशन पर एक ऑब्जेक्ट का निर्माण करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which of these is NOT a fundamental data type in C++?",
        "question_hi": "निम्नलिखित में से कौन सा C++ में एक मौलिक डेटा प्रकार नहीं है?",
        "options_en": ["int", "float", "string", "double"],
        "options_hi": ["int", "float", "string", "double"],
        "answer_en": "string",
        "answer_hi": "string",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the purpose of the 'std::ref' wrapper?",
        "question_hi": "'std::ref' रैपर का उद्देश्य क्या है?",
        "options_en": ["To pass references to functions that take parameters by value", "To create references", "To dereference pointers", "For reference counting"],
        "options_hi": ["उन फ़ंक्शंस को संदर्भ पास करने के लिए जो पैरामीटर्स को मान से लेते हैं", "संदर्भ बनाने के लिए", "पॉइंटर्स को डीरेफरेंस करने के लिए", "संदर्भ गणना के लिए"],
        "answer_en": "To pass references to functions that take parameters by value",
        "answer_hi": "उन फ़ंक्शंस को संदर्भ पास करने के लिए जो पैरामीटर्स को मान से लेते हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which of the following is a valid way to create a thread?",
        "question_hi": "निम्नलिखित में से कौन सा थ्रेड बनाने का वैध तरीका है?",
        "options_en": ["std::thread t(func);", "std::thread t(&Class::func, &obj);", "std::thread t([](){ });", "All of the above"],
        "options_hi": ["std::thread t(func);", "std::thread t(&Class::func, &obj);", "std::thread t([](){ });", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is 'std::tuple' used for?",
        "question_hi": "'std::tuple' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To store a fixed-size collection of heterogeneous values", "For arrays", "For homogeneous collections", "To store key-value pairs"],
        "options_hi": ["विषम मूल्यों का एक निश्चित आकार संग्रह संग्रहीत करने के लिए", "एरे के लिए", "समरूप संग्रह के लिए", "कुंजी-मूल्य जोड़े संग्रहीत करने के लिए"],
        "answer_en": "To store a fixed-size collection of heterogeneous values",
        "answer_hi": "विषम मूल्यों का एक निश्चित आकार संग्रह संग्रहीत करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is the purpose of 'std::launder'?",
        "question_hi": "'std::launder' का उद्देश्य क्या है?",
        "options_en": ["To handle pointer optimization issues in placement new", "To clean memory", "To delete objects", "For garbage collection"],
        "options_hi": ["प्लेसमेंट new में पॉइंटर ऑप्टिमाइज़ेशन मुद्दों को संभालने के लिए", "मेमोरी साफ़ करने के लिए", "ऑब्जेक्ट्स हटाने के लिए", "गार्बेज कलेक्शन के लिए"],
        "answer_en": "To handle pointer optimization issues in placement new",
        "answer_hi": "प्लेसमेंट new में पॉइंटर ऑप्टिमाइज़ेशन मुद्दों को संभालने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which of these is a valid literal suffix for double?",
        "question_hi": "निम्नलिखित में से कौन सा डबल के लिए एक वैध लिटरल सफ़िक्स है?",
        "options_en": ["3.14", "3.14f", "3.14l", "3.14d"],
        "options_hi": ["3.14", "3.14f", "3.14l", "3.14d"],
        "answer_en": "3.14",
        "answer_hi": "3.14",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is 'std::any' used for?",
        "question_hi": "'std::any' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To hold any type of value", "For type-safe unions", "To store integers", "For dynamic typing"],
        "options_hi": ["किसी भी प्रकार का मूल्य रखने के लिए", "टाइप-सेफ़ यूनियन के लिए", "इंटिजर संग्रहीत करने के लिए", "डायनामिक टाइपिंग के लिए"],
        "answer_en": "To hold any type of value",
        "answer_hi": "किसी भी प्रकार का मूल्य रखने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the difference between 'class' and 'typename' in template parameters?",
        "question_hi": "टेम्पलेट पैरामीटर्स में 'class' और 'typename' में क्या अंतर है?",
        "options_en": ["No difference, they are interchangeable", "'class' only for classes", "'typename' only for built-in types", "They are completely different"],
        "options_hi": ["कोई अंतर नहीं, वे परस्पर विनिमेय हैं", "'class' केवल क्लासेस के लिए", "'typename' केवल बिल्ट-इन प्रकारों के लिए", "वे पूरी तरह से अलग हैं"],
        "answer_en": "No difference, they are interchangeable",
        "answer_hi": "कोई अंतर नहीं, वे परस्पर विनिमेय हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which function is used to terminate a program abnormally?",
        "question_hi": "प्रोग्राम को असामान्य रूप से समाप्त करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["std::terminate()", "exit()", "abort()", "All of the above"],
        "options_hi": ["std::terminate()", "exit()", "abort()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is 'std::invoke' used for?",
        "question_hi": "'std::invoke' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To invoke any callable object with given arguments", "To call member functions", "For function pointers", "All of the above"],
        "options_hi": ["दिए गए आर्ग्युमेंट्स के साथ किसी भी कॉल करने योग्य ऑब्जेक्ट को इनवोक करने के लिए", "मेंबर फ़ंक्शंस को कॉल करने के लिए", "फ़ंक्शन पॉइंटर्स के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the purpose of the 'alignas' specifier?",
        "question_hi": "'alignas' स्पेसिफायर का उद्देश्य क्या है?",
        "options_en": ["To specify alignment requirement for a type or object", "To align text", "For memory allocation", "To align pointers"],
        "options_hi": ["किसी प्रकार या ऑब्जेक्ट के लिए संरेखण आवश्यकता निर्दिष्ट करने के लिए", "टेक्स्ट संरेखित करने के लिए", "मेमोरी आवंटन के लिए", "पॉइंटर्स संरेखित करने के लिए"],
        "answer_en": "To specify alignment requirement for a type or object",
        "answer_hi": "किसी प्रकार या ऑब्जेक्ट के लिए संरेखण आवश्यकता निर्दिष्ट करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "Which of the following is a valid C++ identifier?",
        "question_hi": "निम्नलिखित में से कौन सा एक वैध C++ पहचानकर्ता है?",
        "options_en": ["_identifier", "123identifier", "identifier-name", "identifier name"],
        "options_hi": ["_identifier", "123identifier", "identifier-name", "identifier name"],
        "answer_en": "_identifier",
        "answer_hi": "_identifier",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is 'std::byte' used for?",
        "question_hi": "'std::byte' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To represent raw memory", "For byte operations", "As an alternative to char", "All of the above"],
        "options_hi": ["कच्ची मेमोरी का प्रतिनिधित्व करने के लिए", "बाइट ऑपरेशन के लिए", "char के विकल्प के रूप में", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the purpose of 'std::is_same'?",
        "question_hi": "'std::is_same' का उद्देश्य क्या है?",
        "options_en": ["To check if two types are the same at compile-time", "To compare values", "To check runtime type", "For type casting"],
        "options_hi": ["कंपाइल-टाइम पर जाँचने के लिए कि क्या दो प्रकार समान हैं", "मूल्यों की तुलना करने के लिए", "रनटाइम प्रकार जाँचने के लिए", "टाइप कास्टिंग के लिए"],
        "answer_en": "To check if two types are the same at compile-time",
        "answer_hi": "कंपाइल-टाइम पर जाँचने के लिए कि क्या दो प्रकार समान हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which of the following can be thrown as an exception?",
        "question_hi": "निम्नलिखित में से किसे एक अपवाद के रूप में फेंका जा सकता है?",
        "options_en": ["int", "std::string", "User-defined class objects", "All of the above"],
        "options_hi": ["int", "std::string", "उपयोगकर्ता-परिभाषित क्लास ऑब्जेक्ट्स", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the use of 'std::bind'?",
        "question_hi": "'std::bind' का उपयोग क्या है?",
        "options_en": ["To bind arguments to function parameters", "To create function objects", "For partial function application", "All of the above"],
        "options_hi": ["फ़ंक्शन पैरामीटर्स को आर्ग्युमेंट्स बाइंड करने के लिए", "फ़ंक्शन ऑब्जेक्ट्स बनाने के लिए", "आंशिक फ़ंक्शन एप्लिकेशन के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the role of the '->' operator?",
        "question_hi": "'->' ऑपरेटर की क्या भूमिका है?",
        "options_en": ["To access members via pointer", "To dereference", "For pointer arithmetic", "To create pointers"],
        "options_hi": ["पॉइंटर के माध्यम से मेंबर्स तक पहुंचने के लिए", "डीरेफरेंस करने के लिए", "पॉइंटर अंकगणित के लिए", "पॉइंटर्स बनाने के लिए"],
        "answer_en": "To access members via pointer",
        "answer_hi": "पॉइंटर के माध्यम से मेंबर्स तक पहुंचने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is 'std::scoped_lock' used for?",
        "question_hi": "'std::scoped_lock' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To lock multiple mutexes safely", "For scoped variables", "For memory locking", "To lock single mutex"],
        "options_hi": ["कई म्यूटेक्स को सुरक्षित रूप से लॉक करने के लिए", "स्कोप्ड वेरिएबल्स के लिए", "मेमोरी लॉकिंग के लिए", "एकल म्यूटेक्स लॉक करने के लिए"],
        "answer_en": "To lock multiple mutexes safely",
        "answer_hi": "कई म्यूटेक्स को सुरक्षित रूप से लॉक करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which of these is a valid way to create a shared_ptr?",
        "question_hi": "निम्नलिखित में से कौन सा shared_ptr बनाने का वैध तरीका है?",
        "options_en": ["std::shared_ptr<int> p(new int(5));", "auto p = std::make_shared<int>(5);", "std::shared_ptr<int> p = std::make_shared<int>(5);", "All of the above"],
        "options_hi": ["std::shared_ptr<int> p(new int(5));", "auto p = std::make_shared<int>(5);", "std::shared_ptr<int> p = std::make_shared<int>(5);", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is the purpose of 'std::to_string'?",
        "question_hi": "'std::to_string' का उद्देश्य क्या है?",
        "options_en": ["To convert numeric values to std::string", "To convert strings to numbers", "For string concatenation", "To format strings"],
        "options_hi": ["संख्यात्मक मानों को std::string में बदलने के लिए", "स्ट्रिंग्स को संख्याओं में बदलने के लिए", "स्ट्रिंग संयोजन के लिए", "स्ट्रिंग्स फ़ॉर्मेट करने के लिए"],
        "answer_en": "To convert numeric values to std::string",
        "answer_hi": "संख्यात्मक मानों को std::string में बदलने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What does 'std::remove_reference' do?",
        "question_hi": "'std::remove_reference' क्या करता है?",
        "options_en": ["Removes reference from a type at compile-time", "Deletes references", "Removes references at runtime", "For pointer dereferencing"],
        "options_hi": ["कंपाइल-टाइम पर किसी प्रकार से संदर्भ हटाता है", "संदर्भ हटाता है", "रनटाइम पर संदर्भ हटाता है", "पॉइंटर डीरेफरेंसिंग के लिए"],
        "answer_en": "Removes reference from a type at compile-time",
        "answer_hi": "कंपाइल-टाइम पर किसी प्रकार से संदर्भ हटाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is 'std::chrono' used for?",
        "question_hi": "'std::chrono' का उपयोग किस लिए किया जाता है?",
        "options_en": ["Time utilities", "For sleep functions", "To measure time intervals", "All of the above"],
        "options_hi": ["समय उपयोगिताएँ", "स्लीप फ़ंक्शन के लिए", "समय अंतराल मापने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which of the following is a valid lambda capture?",
        "question_hi": "निम्नलिखित में से कौन सा एक वैध लैम्ब्डा कैप्चर है?",
        "options_en": ["[&] - capture by reference", "[=] - capture by value", "[this] - capture this pointer", "All of the above"],
        "options_hi": ["[&] - संदर्भ द्वारा कैप्चर", "[=] - मान द्वारा कैप्चर", "[this] - this पॉइंटर कैप्चर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of 'std::uncaught_exceptions'?",
        "question_hi": "'std::uncaught_exceptions' का उद्देश्य क्या है?",
        "options_en": ["To get number of uncaught exceptions", "To catch all exceptions", "To throw exceptions", "For exception safety"],
        "options_hi": ["अनकॉट एक्सेप्शन्स की संख्या प्राप्त करने के लिए", "सभी एक्सेप्शन्स को पकड़ने के लिए", "एक्सेप्शन्स फेंकने के लिए", "एक्सेप्शन सुरक्षा के लिए"],
        "answer_en": "To get number of uncaught exceptions",
        "answer_hi": "अनकॉट एक्सेप्शन्स की संख्या प्राप्त करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is 'atomic_noexcept' in C++?",
        "question_hi": "C++ में 'atomic_noexcept' क्या है?",
        "options_en": ["Atomic operation specifier", "Noexcept atomic", "Exception specification", "All of above"],
        "options_hi": ["atomic operation specifier", "noexcept atomic", "exception specification", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "Which of these is a valid C++11 feature?",
        "question_hi": "निम्नलिखित में से कौन सी एक वैध C++11 विशेषता है?",
        "options_en": ["auto type deduction", "Range-based for loops", "nullptr", "All of the above"],
        "options_hi": ["ऑटो टाइप डिडक्शन", "रेंज-आधारित for लूप्स", "nullptr", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
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