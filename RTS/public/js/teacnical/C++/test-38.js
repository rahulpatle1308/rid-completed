const questions= [
    {
        "num": 1,
        "question_en": "Which of the following is used to create a new type in C++?",
        "question_hi": "निम्नलिखित में से किसका उपयोग C++ में एक नए प्रकार को बनाने के लिए किया जाता है?",
        "options_en": ["typedef", "using", "struct", "All of the above"],
        "options_hi": ["typedef", "using", "struct", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the purpose of the 'constexpr' keyword in C++?",
        "question_hi": "C++ में 'constexpr' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To declare constant expressions", "To declare runtime constants", "To define macros", "To declare mutable variables"],
        "options_hi": ["constant expressions घोषित करने के लिए", "runtime constants घोषित करने के लिए", "macros को परिभाषित करने के लिए", "mutable variables घोषित करने के लिए"],
        "answer_en": "To declare constant expressions",
        "answer_hi": "constant expressions घोषित करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which operator is used for dynamic memory allocation in C++?",
        "question_hi": "C++ में dynamic memory allocation के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["malloc()", "new", "calloc()", "alloc"],
        "options_hi": ["malloc()", "new", "calloc()", "alloc"],
        "answer_en": "new",
        "answer_hi": "new",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What does RAII stand for in C++?",
        "question_hi": "C++ में RAII का पूरा नाम क्या है?",
        "options_en": ["Resource Allocation Is Initialization", "Runtime Allocation and Initialization", "Resource Acquisition Is Initialization", "Runtime Acquisition and Initialization"],
        "options_hi": ["Resource Allocation Is Initialization", "Runtime Allocation and Initialization", "Resource Acquisition Is Initialization", "Runtime Acquisition and Initialization"],
        "answer_en": "Resource Acquisition Is Initialization",
        "answer_hi": "Resource Acquisition Is Initialization",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which C++ standard first introduced lambda expressions?",
        "question_hi": "किस C++ मानक में पहली बार lambda expressions शामिल किए गए?",
        "options_en": ["C++98", "C++11", "C++14", "C++17"],
        "options_hi": ["C++98", "C++11", "C++14", "C++17"],
        "answer_en": "C++11",
        "answer_hi": "C++11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the correct way to declare a pure virtual function in C++?",
        "question_hi": "C++ में एक pure virtual function घोषित करने का सही तरीका क्या है?",
        "options_en": ["virtual void func() = 0;", "void virtual func() = 0;", "void func() pure;", "pure virtual void func();"],
        "options_hi": ["virtual void func() = 0;", "void virtual func() = 0;", "void func() pure;", "pure virtual void func();"],
        "answer_en": "virtual void func() = 0;",
        "answer_hi": "virtual void func() = 0;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which header file is used for std::unique_ptr?",
        "question_hi": "std::unique_ptr के लिए किस हेडर फाइल का उपयोग किया जाता है?",
        "options_en": ["<memory>", "<smart_ptr>", "<pointer>", "<utility>"],
        "options_hi": ["<memory>", "<smart_ptr>", "<pointer>", "<utility>"],
        "answer_en": "<memory>",
        "answer_hi": "<memory>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the use of the 'override' specifier?",
        "question_hi": "'override' स्पेसिफायर का उपयोग क्या है?",
        "options_en": ["To indicate a function is overriding a base class virtual function", "To override the compiler optimizations", "To overload a function", "To hide a base class function"],
        "options_hi": ["यह इंगित करने के लिए कि एक फ़ंक्शन base class के virtual function को ओवरराइड कर रहा है", "कंपाइलर ऑप्टिमाइजेशन को ओवरराइड करने के लिए", "एक फ़ंक्शन को ओवरलोड करने के लिए", "एक base class फ़ंक्शन को छिपाने के लिए"],
        "answer_en": "To indicate a function is overriding a base class virtual function",
        "answer_hi": "यह इंगित करने के लिए कि एक फ़ंक्शन base class के virtual function को ओवरराइड कर रहा है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which of the following is a C++20 feature?",
        "question_hi": "निम्नलिखित में से कौन सी C++20 विशेषता है?",
        "options_en": ["Modules", "Ranges", "Coroutines", "All of the above"],
        "options_hi": ["Modules", "Ranges", "Coroutines", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What does the 'noexcept' operator do?",
        "question_hi": "'noexcept' ऑपरेटर क्या करता है?",
        "options_en": ["Checks if an expression can throw an exception", "Prevents all exceptions", "Terminates the program on exception", "Catches all exceptions"],
        "options_hi": ["जाँचता है कि क्या एक एक्सप्रेशन exception फेंक सकता है", "सभी exceptions को रोकता है", "exception पर प्रोग्राम को समाप्त करता है", "सभी exceptions को पकड़ता है"],
        "answer_en": "Checks if an expression can throw an exception",
        "answer_hi": "जाँचता है कि क्या एक एक्सप्रेशन exception फेंक सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is a 'move constructor' used for?",
        "question_hi": "'move constructor' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To move resources from one object to another", "To copy objects", "To create temporary objects", "To delete objects"],
        "options_hi": ["संसाधनों को एक ऑब्जेक्ट से दूसरे में ले जाने के लिए", "ऑब्जेक्ट्स की कॉपी बनाने के लिए", "अस्थायी ऑब्जेक्ट बनाने के लिए", "ऑब्जेक्ट्स को हटाने के लिए"],
        "answer_en": "To move resources from one object to another",
        "answer_hi": "संसाधनों को एक ऑब्जेक्ट से दूसरे में ले जाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which of the following is NOT a type of inheritance in C++?",
        "question_hi": "निम्नलिखित में से कौन सा C++ में inheritance का प्रकार नहीं है?",
        "options_en": ["Multilevel", "Hybrid", "Circular", "Hierarchical"],
        "options_hi": ["Multilevel", "Hybrid", "Circular", "Hierarchical"],
        "answer_en": "Circular",
        "answer_hi": "Circular",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the output of: 'std::cout << sizeof(char);'?",
        "question_hi": "'std::cout << sizeof(char);' का आउटपुट क्या है?",
        "options_en": ["1", "2", "4", "Depends on platform"],
        "options_hi": ["1", "2", "4", "प्लेटफ़ॉर्म पर निर्भर करता है"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is a 'friend function' in C++?",
        "question_hi": "C++ में 'friend function' क्या है?",
        "options_en": ["A function that can access private and protected members of a class", "A function that is always inline", "A virtual function", "A static function"],
        "options_hi": ["एक फ़ंक्शन जो किसी क्लास के private और protected members तक पहुंच सकता है", "एक फ़ंक्शन जो हमेशा इनलाइन होता है", "एक virtual function", "एक static function"],
        "answer_en": "A function that can access private and protected members of a class",
        "answer_hi": "एक फ़ंक्शन जो किसी क्लास के private और protected members तक पहुंच सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which STL container provides fast insertion and deletion at both ends?",
        "question_hi": "कौन सा STL कंटेनर दोनों सिरों पर तेज़ insertion और deletion प्रदान करता है?",
        "options_en": ["std::vector", "std::deque", "std::list", "std::array"],
        "options_hi": ["std::vector", "std::deque", "std::list", "std::array"],
        "answer_en": "std::deque",
        "answer_hi": "std::deque",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the purpose of the 'typename' keyword in template code?",
        "question_hi": "टेम्पलेट कोड में 'typename' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To specify that a dependent name is a type", "To create a new type", "To define a template parameter", "To replace 'class' in templates"],
        "options_hi": ["यह निर्दिष्ट करने के लिए कि एक dependent name एक प्रकार है", "एक नया प्रकार बनाने के लिए", "एक टेम्पलेट पैरामीटर को परिभाषित करने के लिए", "टेम्पलेट्स में 'class' को प्रतिस्थापित करने के लिए"],
        "answer_en": "To specify that a dependent name is a type",
        "answer_hi": "यह निर्दिष्ट करने के लिए कि एक dependent name एक प्रकार है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does STL stand for?",
        "question_hi": "STL का पूरा नाम क्या है?",
        "options_en": ["Standard Template Library", "Simple Template Library", "System Template Library", "Standard Type Library"],
        "options_hi": ["Standard Template Library", "Simple Template Library", "System Template Library", "Standard Type Library"],
        "answer_en": "Standard Template Library",
        "answer_hi": "Standard Template Library",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "Which of these is a valid way to declare a constant pointer to an integer?",
        "question_hi": "निम्नलिखित में से कौन सा एक integer के लिए constant pointer घोषित करने का वैध तरीका है?",
        "options_en": ["int* const ptr;", "const int* ptr;", "int const *ptr;", "Both 1 and 2"],
        "options_hi": ["int* const ptr;", "const int* ptr;", "int const *ptr;", "1 और 2 दोनों"],
        "answer_en": "int* const ptr;",
        "answer_hi": "int* const ptr;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is the entry point of a C++ program?",
        "question_hi": "C++ प्रोग्राम का entry point क्या है?",
        "options_en": ["main()", "start()", "init()", "run()"],
        "options_hi": ["main()", "start()", "init()", "run()"],
        "answer_en": "main()",
        "answer_hi": "main()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which operator cannot be overloaded in C++?",
        "question_hi": "C++ में कौन सा ऑपरेटर ओवरलोड नहीं किया जा सकता?",
        "options_en": [". (dot)", "+", "*", "[]"],
        "options_hi": [". (dot)", "+", "*", "[]"],
        "answer_en": ". (dot)",
        "answer_hi": ". (dot)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is a 'template' in C++?",
        "question_hi": "C++ में 'template' क्या है?",
        "options_en": ["A blueprint for creating generic functions or classes", "A type of macro", "A preprocessor directive", "A base class"],
        "options_hi": ["generic functions या classes बनाने के लिए एक ब्लूप्रिंट", "एक प्रकार का मैक्रो", "एक प्रीप्रोसेसर डायरेक्टिव", "एक base class"],
        "answer_en": "A blueprint for creating generic functions or classes",
        "answer_hi": "generic functions या classes बनाने के लिए एक ब्लूप्रिंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the use of 'std::forward'?",
        "question_hi": "'std::forward' का उपयोग क्या है?",
        "options_en": ["To forward arguments preserving their value category", "To move an object", "To copy an object", "To cast to a derived class"],
        "options_hi": ["उनके value category को संरक्षित करते हुए arguments को आगे भेजने के लिए", "किसी ऑब्जेक्ट को move करने के लिए", "किसी ऑब्जेक्ट की कॉपी बनाने के लिए", "किसी derived class में कास्ट करने के लिए"],
        "answer_en": "To forward arguments preserving their value category",
        "answer_hi": "उनके value category को संरक्षित करते हुए arguments को आगे भेजने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which of the following is a sequence container?",
        "question_hi": "निम्नलिखित में से कौन सा एक sequence container है?",
        "options_en": ["std::set", "std::map", "std::vector", "std::unordered_map"],
        "options_hi": ["std::set", "std::map", "std::vector", "std::unordered_map"],
        "answer_en": "std::vector",
        "answer_hi": "std::vector",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is the purpose of the 'explicit' keyword for constructors?",
        "question_hi": "कंस्ट्रक्टर्स के लिए 'explicit' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["To prevent implicit conversions", "To make the constructor public", "To allow multiple constructors", "To define a copy constructor"],
        "options_hi": ["implicit conversions को रोकने के लिए", "कंस्ट्रक्टर को public बनाने के लिए", "कई कंस्ट्रक्टर्स की अनुमति देने के लिए", "एक copy constructor को परिभाषित करने के लिए"],
        "answer_en": "To prevent implicit conversions",
        "answer_hi": "implicit conversions को रोकने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is 'std::async' used for?",
        "question_hi": "'std::async' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To run a function asynchronously", "To synchronize threads", "To allocate memory", "To handle exceptions"],
        "options_hi": ["किसी फ़ंक्शन को अतुल्यकालिक रूप से चलाने के लिए", "थ्रेड्स को सिंक्रोनाइज़ करने के लिए", "मेमोरी आवंटित करने के लिए", "exceptions को हैंडल करने के लिए"],
        "answer_en": "To run a function asynchronously",
        "answer_hi": "किसी फ़ंक्शन को अतुल्यकालिक रूप से चलाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the difference between 'struct' and 'class' in C++?",
        "question_hi": "C++ में 'struct' और 'class' के बीच क्या अंतर है?",
        "options_en": ["Default access specifier (public vs private)", "Memory layout", "Inheritance rules", "There is no difference"],
        "options_hi": ["डिफ़ॉल्ट access specifier (public vs private)", "मेमोरी लेआउट", "इनहेरिटेंस नियम", "कोई अंतर नहीं है"],
        "answer_en": "Default access specifier (public vs private)",
        "answer_hi": "डिफ़ॉल्ट access specifier (public vs private)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which keyword is used to handle exceptions in C++?",
        "question_hi": "C++ में exceptions को संभालने के लिए किस कीवर्ड का उपयोग किया जाता है?",
        "options_en": ["try-catch", "throw-catch", "error-handle", "exception-handle"],
        "options_hi": ["try-catch", "throw-catch", "error-handle", "exception-handle"],
        "answer_en": "try-catch",
        "answer_hi": "try-catch",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is 'RTTI' in C++?",
        "question_hi": "C++ में 'RTTI' क्या है?",
        "options_en": ["Runtime Type Information", "Real Time Type Identification", "Runtime Template Information", "Real Time Template Identification"],
        "options_hi": ["Runtime Type Information", "Real Time Type Identification", "Runtime Template Information", "Real Time Template Identification"],
        "answer_en": "Runtime Type Information",
        "answer_hi": "Runtime Type Information",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What does 'std::move' do?",
        "question_hi": "'std::move' क्या करता है?",
        "options_en": ["Casts an object to an rvalue reference", "Moves the object in memory", "Copies the object", "Deletes the object"],
        "options_hi": ["किसी ऑब्जेक्ट को rvalue reference में कास्ट करता है", "ऑब्जेक्ट को मेमोरी में ले जाता है", "ऑब्जेक्ट की कॉपी बनाता है", "ऑब्जेक्ट को हटाता है"],
        "answer_en": "Casts an object to an rvalue reference",
        "answer_hi": "किसी ऑब्जेक्ट को rvalue reference में कास्ट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "Which of the following is an associative container?",
        "question_hi": "निम्नलिखित में से कौन सा एक associative container है?",
        "options_en": ["std::list", "std::deque", "std::set", "std::vector"],
        "options_hi": ["std::list", "std::deque", "std::set", "std::vector"],
        "answer_en": "std::set",
        "answer_hi": "std::set",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is a 'virtual destructor' used for?",
        "question_hi": "'virtual destructor' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To ensure proper cleanup of derived class objects when deleted via a base class pointer", "To make the class abstract", "To increase performance", "To prevent object deletion"],
        "options_hi": ["यह सुनिश्चित करने के लिए कि base class पॉइंटर के माध्यम से हटाए जाने पर derived class objects का उचित सफाया हो", "क्लास को abstract बनाने के लिए", "प्रदर्शन बढ़ाने के लिए", "ऑब्जेक्ट डिलीशन को रोकने के लिए"],
        "answer_en": "To ensure proper cleanup of derived class objects when deleted via a base class pointer",
        "answer_hi": "यह सुनिश्चित करने के लिए कि base class पॉइंटर के माध्यम से हटाए जाने पर derived class objects का उचित सफाया हो",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the 'this' pointer?",
        "question_hi": "'this' पॉइंटर क्या है?",
        "options_en": ["A pointer to the current object instance", "A pointer to the base class", "A pointer to the derived class", "A static pointer"],
        "options_hi": ["वर्तमान ऑब्जेक्ट इंस्टेंस का पॉइंटर", "base class का पॉइंटर", "derived class का पॉइंटर", "एक static pointer"],
        "answer_en": "A pointer to the current object instance",
        "answer_hi": "वर्तमान ऑब्जेक्ट इंस्टेंस का पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which function is called when an object goes out of scope?",
        "question_hi": "कौन सा फ़ंक्शन कॉल किया जाता है जब कोई ऑब्जेक्ट स्कोप से बाहर जाता है?",
        "options_en": ["Destructor", "Constructor", "Copy constructor", "Move constructor"],
        "options_hi": ["Destructor", "Constructor", "Copy constructor", "Move constructor"],
        "answer_en": "Destructor",
        "answer_hi": "Destructor",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is 'std::variant'?",
        "question_hi": "'std::variant' क्या है?",
        "options_en": ["A type-safe union", "A smart pointer", "A container for multiple types", "Both 1 and 3"],
        "options_hi": ["एक type-safe union", "एक smart pointer", "कई प्रकारों के लिए एक कंटेनर", "1 और 3 दोनों"],
        "answer_en": "Both 1 and 3",
        "answer_hi": "1 और 3 दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is the role of the 'static' keyword inside a class?",
        "question_hi": "किसी क्लास के अंदर 'static' कीवर्ड की क्या भूमिका है?",
        "options_en": ["To create class-level members (shared among all instances)", "To make members constant", "To prevent inheritance", "To define a virtual function"],
        "options_hi": ["class-level members बनाने के लिए (सभी instances के बीच साझा)", "members को constant बनाने के लिए", "इनहेरिटेंस को रोकने के लिए", "एक virtual function को परिभाषित करने के लिए"],
        "answer_en": "To create class-level members (shared among all instances)",
        "answer_hi": "class-level members बनाने के लिए (सभी instances के बीच साझा)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is 'const_cast' used for?",
        "question_hi": "'const_cast' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To add or remove const qualifier", "To cast between base and derived classes", "To cast between pointers", "To cast away volatility"],
        "options_hi": ["const qualifier को जोड़ने या हटाने के लिए", "base और derived classes के बीच कास्ट करने के लिए", "पॉइंटर्स के बीच कास्ट करने के लिए", "volatility को दूर करने के लिए"],
        "answer_en": "To add or remove const qualifier",
        "answer_hi": "const qualifier को जोड़ने या हटाने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which of the following is a C++17 feature?",
        "question_hi": "निम्नलिखित में से कौन सी C++17 विशेषता है?",
        "options_en": ["Structured Bindings", "if constexpr", "Inline variables", "All of the above"],
        "options_hi": ["Structured Bindings", "if constexpr", "Inline variables", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What does 'SFINAE' stand for?",
        "question_hi": "'SFINAE' का पूरा नाम क्या है?",
        "options_en": ["Substitution Failure Is Not An Error", "Syntax Failure Is Not An Error", "Substitution Fault Is Not An Exception", "Standard Failure Is Not An Error"],
        "options_hi": ["Substitution Failure Is Not An Error", "Syntax Failure Is Not An Error", "Substitution Fault Is Not An Exception", "Standard Failure Is Not An Error"],
        "answer_en": "Substitution Failure Is Not An Error",
        "answer_hi": "Substitution Failure Is Not An Error",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is 'std::optional' used for?",
        "question_hi": "'std::optional' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To represent nullable types", "For optional function parameters", "To make variables optional", "All of the above"],
        "options_hi": ["nullable types का प्रतिनिधित्व करने के लिए", "वैकल्पिक फ़ंक्शन पैरामीटर के लिए", "वेरिएबल्स को वैकल्पिक बनाने के लिए", "उपरोक्त सभी"],
        "answer_en": "To represent nullable types",
        "answer_hi": "nullable types का प्रतिनिधित्व करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is the difference between '++i' and 'i++'?",
        "question_hi": "'++i' और 'i++' के बीच क्या अंतर है?",
        "options_en": ["Pre-increment vs Post-increment", "Performance", "Return value", "All of the above"],
        "options_hi": ["Pre-increment vs Post-increment", "प्रदर्शन", "वापसी मूल्य", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which header is for file input/output in C++?",
        "question_hi": "C++ में file input/output के लिए कौन सा हेडर है?",
        "options_en": ["<fstream>", "<iostream>", "<filestream>", "<file>"],
        "options_hi": ["<fstream>", "<iostream>", "<filestream>", "<file>"],
        "answer_en": "<fstream>",
        "answer_hi": "<fstream>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is 'polymorphism' in C++?",
        "question_hi": "C++ में 'polymorphism' क्या है?",
        "options_en": ["The ability to call derived class functions via base class pointers/references", "Having multiple functions with same name", "Using templates", "All of the above"],
        "options_hi": ["base class pointers/references के माध्यम से derived class functions को कॉल करने की क्षमता", "एक ही नाम के कई फ़ंक्शन होना", "टेम्पलेट्स का उपयोग करना", "उपरोक्त सभी"],
        "answer_en": "The ability to call derived class functions via base class pointers/references",
        "answer_hi": "base class pointers/references के माध्यम से derived class functions को कॉल करने की क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What does 'ODR' stand for?",
        "question_hi": "'ODR' का पूरा नाम क्या है?",
        "options_en": ["One Definition Rule", "Object Definition Rule", "Overload Definition Rule", "Operation Definition Rule"],
        "options_hi": ["One Definition Rule", "Object Definition Rule", "Overload Definition Rule", "Operation Definition Rule"],
        "answer_en": "One Definition Rule",
        "answer_hi": "One Definition Rule",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is 'std::function' used for?",
        "question_hi": "'std::function' का उपयोग किस लिए किया जाता है?",
        "options_en": ["To store any callable object (function, lambda, etc.)", "To define a function", "To create function pointers", "To overload functions"],
        "options_hi": ["किसी भी callable object (function, lambda, etc.) को संग्रहीत करने के लिए", "एक फ़ंक्शन को परिभाषित करने के लिए", "फ़ंक्शन पॉइंटर्स बनाने के लिए", "फ़ंक्शन को ओवरलोड करने के लिए"],
        "answer_en": "To store any callable object (function, lambda, etc.)",
        "answer_hi": "किसी भी callable object (function, lambda, etc.) को संग्रहीत करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which of the following is a valid range-based for loop?",
        "question_hi": "निम्नलिखित में से कौन सा एक वैध range-based for लूप है?",
        "options_en": ["for (auto& x : container)", "for (x : container)", "for (auto x in container)", "for (x in container)"],
        "options_hi": ["for (auto& x : container)", "for (x : container)", "for (auto x in container)", "for (x in container)"],
        "answer_en": "for (auto& x : container)",
        "answer_hi": "for (auto& x : container)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the 'mutable' keyword used for?",
        "question_hi": "'mutable' कीवर्ड का उपयोग किस लिए किया जाता है?",
        "options_en": ["To allow modification of a member in a const object", "To make a variable mutable", "To change function parameters", "To prevent const correctness"],
        "options_hi": ["किसी const ऑब्जेक्ट में एक member के संशोधन की अनुमति देने के लिए", "किसी वेरिएबल को mutable बनाने के लिए", "फ़ंक्शन पैरामीटर बदलने के लिए", "const correctness को रोकने के लिए"],
        "answer_en": "To allow modification of a member in a const object",
        "answer_hi": "किसी const ऑब्जेक्ट में एक member के संशोधन की अनुमति देने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is a 'deleted function' in C++?",
        "question_hi": "C++ में 'deleted function' क्या है?",
        "options_en": ["A function that is explicitly disallowed using '= delete'", "A function that is not defined", "A virtual function", "A function that throws an exception"],
        "options_hi": ["एक फ़ंक्शन जिसे स्पष्ट रूप से '= delete' का उपयोग करके अस्वीकार किया गया है", "एक फ़ंक्शन जिसे परिभाषित नहीं किया गया है", "एक virtual function", "एक फ़ंक्शन जो exception फेंकता है"],
        "answer_en": "A function that is explicitly disallowed using '= delete'",
        "answer_hi": "एक फ़ंक्शन जिसे स्पष्ट रूप से '= delete' का उपयोग करके अस्वीकार किया गया है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is the purpose of 'std::thread'?",
        "question_hi": "'std::thread' का उद्देश्य क्या है?",
        "options_en": ["To create and manage threads", "To synchronize threads", "To lock mutexes", "To handle thread exceptions"],
        "options_hi": ["थ्रेड्स बनाने और प्रबंधित करने के लिए", "थ्रेड्स को सिंक्रोनाइज़ करने के लिए", "म्यूटेक्स को लॉक करने के लिए", "थ्रेड exceptions को हैंडल करने के लिए"],
        "answer_en": "To create and manage threads",
        "answer_hi": "थ्रेड्स बनाने और प्रबंधित करने के लिए",
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
        "question_en": "Which of these is a C++14 feature?",
        "question_hi": "इनमें से कौन सी C++14 विशेषता है?",
        "options_en": ["Generic Lambdas", "Binary Literals", "Return type deduction for normal functions", "All of the above"],
        "options_hi": ["Generic Lambdas", "Binary Literals", "सामान्य फ़ंक्शंस के लिए रिटर्न टाइप डिडक्शन", "उपरोक्त सभी"],
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