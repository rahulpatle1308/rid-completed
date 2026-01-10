const questions = [
    {
        "num": 1,
        "question_en": "Which of the following is a valid way to declare a constant in C++?",
        "question_hi": "निम्नलिखित में से C++ में constant घोषित करने का वैध तरीका कौन सा है?",
        "options_en": ["const int x = 5;", "#define x 5", "both A and B", "constant int x = 5;"],
        "options_hi": ["const int x = 5;", "#define x 5", "A और B दोनों", "constant int x = 5;"],
        "answer_en": "both A and B",
        "answer_hi": "A और B दोनों",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "What is the size of 'int' data type in C++ on a 32-bit system?",
        "question_hi": "32-बिट सिस्टम पर C++ में 'int' डेटा टाइप का आकार क्या है?",
        "options_en": ["4 bytes", "2 bytes", "8 bytes", "Depends on compiler"],
        "options_hi": ["4 बाइट्स", "2 बाइट्स", "8 बाइट्स", "कंपाइलर पर निर्भर करता है"],
        "answer_en": "4 bytes",
        "answer_hi": "4 बाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "Which operator is used for dynamic memory allocation in C++?",
        "question_hi": "C++ में dynamic memory allocation के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["new", "malloc", "alloc", "create"],
        "options_hi": ["new", "malloc", "alloc", "create"],
        "answer_en": "new",
        "answer_hi": "new",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the output of: cout << 5/2; in C++?",
        "question_hi": "C++ में: cout << 5/2; का आउटपुट क्या है?",
        "options_en": ["2", "2.5", "2.0", "2.50"],
        "options_hi": ["2", "2.5", "2.0", "2.50"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which header file is required for input/output operations in C++?",
        "question_hi": "C++ में इनपुट/आउटपुट ऑपरेशन्स के लिए कौन सा हेडर फाइल आवश्यक है?",
        "options_en": ["<iostream>", "<stdio.h>", "<inputoutput>", "<stream>"],
        "options_hi": ["<iostream>", "<stdio.h>", "<inputoutput>", "<stream>"],
        "answer_en": "<iostream>",
        "answer_hi": "<iostream>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the purpose of 'namespace std' in C++?",
        "question_hi": "C++ में 'namespace std' का उद्देश्य क्या है?",
        "options_en": ["To avoid naming conflicts", "To define standard functions", "To include libraries", "To declare variables"],
        "options_hi": ["नाम संघर्ष से बचने के लिए", "मानक फ़ंक्शन परिभाषित करने के लिए", "लाइब्रेरी शामिल करने के लिए", "वेरिएबल घोषित करने के लिए"],
        "answer_en": "To avoid naming conflicts",
        "answer_hi": "नाम संघर्ष से बचने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which data type is used to store single character in C++?",
        "question_hi": "C++ में single character संग्रहीत करने के लिए किस डेटा टाइप का उपयोग किया जाता है?",
        "options_en": ["char", "string", "character", "chr"],
        "options_hi": ["char", "string", "character", "chr"],
        "answer_en": "char",
        "answer_hi": "char",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the default value of local variables in C++?",
        "question_hi": "C++ में local variables का default मान क्या है?",
        "options_en": ["Garbage value", "0", "null", "undefined"],
        "options_hi": ["कचरा मान", "0", "null", "अपरिभाषित"],
        "answer_en": "Garbage value",
        "answer_hi": "कचरा मान",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which loop is used when number of iterations is known?",
        "question_hi": "जब iterations की संख्या ज्ञात हो तो किस loop का उपयोग किया जाता है?",
        "options_en": ["for loop", "while loop", "do-while loop", "All of above"],
        "options_hi": ["for loop", "while loop", "do-while loop", "उपरोक्त सभी"],
        "answer_en": "for loop",
        "answer_hi": "for loop",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the purpose of 'break' statement in C++?",
        "question_hi": "C++ में 'break' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["To exit loop or switch", "To skip current iteration", "To stop program", "To pause execution"],
        "options_hi": ["loop या switch से बाहर निकलने के लिए", "वर्तमान iteration छोड़ने के लिए", "प्रोग्राम रोकने के लिए", "निष्पादन रोकने के लिए"],
        "answer_en": "To exit loop or switch",
        "answer_hi": "loop या switch से बाहर निकलने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which function is used to read a string with spaces in C++?",
        "question_hi": "C++ में spaces के साथ string पढ़ने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
        "options_en": ["getline()", "cin >>", "scanf()", "read()"],
        "options_hi": ["getline()", "cin >>", "scanf()", "read()"],
        "answer_en": "getline()",
        "answer_hi": "getline()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the return type of main() function in C++?",
        "question_hi": "C++ में main() फ़ंक्शन का return type क्या है?",
        "options_en": ["int", "void", "float", "char"],
        "options_hi": ["int", "void", "float", "char"],
        "answer_en": "int",
        "answer_hi": "int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which of the following is a reference variable in C++?",
        "question_hi": "निम्नलिखित में से C++ में reference variable कौन सा है?",
        "options_en": ["int &x = y;", "int *x = &y;", "int x = &y;", "reference int x = y;"],
        "options_hi": ["int &x = y;", "int *x = &y;", "int x = &y;", "reference int x = y;"],
        "answer_en": "int &x = y;",
        "answer_hi": "int &x = y;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is function overloading in C++?",
        "question_hi": "C++ में function overloading क्या है?",
        "options_en": ["Multiple functions with same name but different parameters", "Functions that are too long", "Recursive functions", "Virtual functions"],
        "options_hi": ["समान नाम लेकिन अलग-अलग parameters वाले कई functions", "बहुत लंबे functions", "recursive functions", "virtual functions"],
        "answer_en": "Multiple functions with same name but different parameters",
        "answer_hi": "समान नाम लेकिन अलग-अलग parameters वाले कई functions",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which keyword is used to define a class in C++?",
        "question_hi": "C++ में class परिभाषित करने के लिए किस keyword का उपयोग किया जाता है?",
        "options_en": ["class", "struct", "object", "template"],
        "options_hi": ["class", "struct", "object", "template"],
        "answer_en": "class",
        "answer_hi": "class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is an abstract class in C++?",
        "question_hi": "C++ में abstract class क्या है?",
        "options_en": ["Class with at least one pure virtual function", "Empty class", "Base class", "Derived class"],
        "options_hi": ["कम से कम एक pure virtual function वाला class", "खाली class", "base class", "derived class"],
        "answer_en": "Class with at least one pure virtual function",
        "answer_hi": "कम से कम एक pure virtual function वाला class",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which access specifier allows members to be accessed from anywhere?",
        "question_hi": "कौन सा access specifier members को कहीं से भी access करने की अनुमति देता है?",
        "options_en": ["public", "private", "protected", "global"],
        "options_hi": ["public", "private", "protected", "global"],
        "answer_en": "public",
        "answer_hi": "public",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is constructor in C++?",
        "question_hi": "C++ में constructor क्या है?",
        "options_en": ["Special member function for object initialization", "Function that destroys objects", "Static function", "Virtual function"],
        "options_hi": ["object initialization के लिए special member function", "objects को नष्ट करने वाला function", "static function", "virtual function"],
        "answer_en": "Special member function for object initialization",
        "answer_hi": "object initialization के लिए special member function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which operator is used for scope resolution in C++?",
        "question_hi": "C++ में scope resolution के लिए किस operator का उपयोग किया जाता है?",
        "options_en": ["::", ".", "->", ":"],
        "options_hi": ["::", ".", "->", ":"],
        "answer_en": "::",
        "answer_hi": "::",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is polymorphism in C++?",
        "question_hi": "C++ में polymorphism क्या है?",
        "options_en": ["Ability to take multiple forms", "Data hiding", "Inheritance", "Encapsulation"],
        "options_hi": ["कई रूप लेने की क्षमता", "डेटा छुपाना", "inheritance", "encapsulation"],
        "answer_en": "Ability to take multiple forms",
        "answer_hi": "कई रूप लेने की क्षमता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "Which of the following is a compile-time polymorphism?",
        "question_hi": "निम्नलिखित में से compile-time polymorphism कौन सा है?",
        "options_en": ["Function overloading", "Virtual functions", "Runtime binding", "Dynamic casting"],
        "options_hi": ["function overloading", "virtual functions", "runtime binding", "dynamic casting"],
        "answer_en": "Function overloading",
        "answer_hi": "function overloading",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of 'virtual' keyword in C++?",
        "question_hi": "C++ में 'virtual' keyword का उद्देश्य क्या है?",
        "options_en": ["To enable runtime polymorphism", "To make function constant", "To declare static function", "To create abstract class"],
        "options_hi": ["runtime polymorphism सक्षम करने के लिए", "function को constant बनाने के लिए", "static function घोषित करने के लिए", "abstract class बनाने के लिए"],
        "answer_en": "To enable runtime polymorphism",
        "answer_hi": "runtime polymorphism सक्षम करने के लिए",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "Which inheritance type supports multiple inheritance in C++?",
        "question_hi": "कौन सा inheritance type C++ में multiple inheritance का समर्थन करता है?",
        "options_en": ["All inheritance types", "Single inheritance", "Multiple inheritance", "Multilevel inheritance"],
        "options_hi": ["सभी inheritance types", "single inheritance", "multiple inheritance", "multilevel inheritance"],
        "answer_en": "Multiple inheritance",
        "answer_hi": "multiple inheritance",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is exception handling in C++?",
        "question_hi": "C++ में exception handling क्या है?",
        "options_en": ["Mechanism to handle runtime errors", "Compile-time error checking", "Memory management", "File handling"],
        "options_hi": ["runtime errors संभालने का तंत्र", "compile-time error जाँच", "मेमोरी प्रबंधन", "फ़ाइल हैंडलिंग"],
        "answer_en": "Mechanism to handle runtime errors",
        "answer_hi": "runtime errors संभालने का तंत्र",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which keyword is used to throw an exception in C++?",
        "question_hi": "C++ में exception throw करने के लिए किस keyword का उपयोग किया जाता है?",
        "options_en": ["throw", "throws", "exception", "catch"],
        "options_hi": ["throw", "throws", "exception", "catch"],
        "answer_en": "throw",
        "answer_hi": "throw",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is STL in C++?",
        "question_hi": "C++ में STL क्या है?",
        "options_en": ["Standard Template Library", "Standard Type Library", "System Template Library", "Structured Template Library"],
        "options_hi": ["Standard Template Library", "Standard Type Library", "System Template Library", "Structured Template Library"],
        "answer_en": "Standard Template Library",
        "answer_hi": "Standard Template Library",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which container provides dynamic array functionality in C++ STL?",
        "question_hi": "C++ STL में कौन सा container dynamic array functionality प्रदान करता है?",
        "options_en": ["vector", "array", "list", "deque"],
        "options_hi": ["vector", "array", "list", "deque"],
        "answer_en": "vector",
        "answer_hi": "vector",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the purpose of 'auto' keyword in C++11?",
        "question_hi": "C++11 में 'auto' keyword का उद्देश्य क्या है?",
        "options_en": ["Automatic type deduction", "Automatic memory management", "Auto increment", "Automatic variable"],
        "options_hi": ["स्वचालित type deduction", "स्वचालित मेमोरी प्रबंधन", "auto increment", "automatic variable"],
        "answer_en": "Automatic type deduction",
        "answer_hi": "स्वचालित type deduction",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "Which of the following is a smart pointer in C++?",
        "question_hi": "निम्नलिखित में से C++ में smart pointer कौन सा है?",
        "options_en": ["unique_ptr", "raw pointer", "void pointer", "null pointer"],
        "options_hi": ["unique_ptr", "raw pointer", "void pointer", "null pointer"],
        "answer_en": "unique_ptr",
        "answer_hi": "unique_ptr",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is lambda expression in C++?",
        "question_hi": "C++ में lambda expression क्या है?",
        "options_en": ["Anonymous function", "Named function", "Function pointer", "Method"],
        "options_hi": ["anonymous function", "named function", "function pointer", "method"],
        "answer_en": "Anonymous function",
        "answer_hi": "anonymous function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which header file is required for file operations in C++?",
        "question_hi": "C++ में file operations के लिए कौन सा header file आवश्यक है?",
        "options_en": ["<fstream>", "<iostream>", "<file>", "<stream>"],
        "options_hi": ["<fstream>", "<iostream>", "<file>", "<stream>"],
        "answer_en": "<fstream>",
        "answer_hi": "<fstream>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the difference between struct and class in C++?",
        "question_hi": "C++ में struct और class में क्या अंतर है?",
        "options_en": ["Default access: struct-public, class-private", "No difference", "struct has inheritance", "class is smaller"],
        "options_hi": ["default access: struct-public, class-private", "कोई अंतर नहीं", "struct में inheritance है", "class छोटा है"],
        "answer_en": "Default access: struct-public, class-private",
        "answer_hi": "default access: struct-public, class-private",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which operator cannot be overloaded in C++?",
        "question_hi": "C++ में कौन सा operator overload नहीं किया जा सकता?",
        "options_en": [":: (scope resolution)", "+", "-", "*"],
        "options_hi": [":: (scope resolution)", "+", "-", "*"],
        "answer_en": ":: (scope resolution)",
        "answer_hi": ":: (scope resolution)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is a friend function in C++?",
        "question_hi": "C++ में friend function क्या है?",
        "options_en": ["Function that can access private members of class", "Function inside class", "Static function", "Virtual function"],
        "options_hi": ["class के private members तक पहुंच सकने वाला function", "class के अंदर function", "static function", "virtual function"],
        "answer_en": "Function that can access private members of class",
        "answer_hi": "class के private members तक पहुंच सकने वाला function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which storage class has local scope but lifetime throughout program?",
        "question_hi": "किस storage class का local scope है लेकिन lifetime पूरे प्रोग्राम में है?",
        "options_en": ["static", "auto", "register", "extern"],
        "options_hi": ["static", "auto", "register", "extern"],
        "answer_en": "static",
        "answer_hi": "static",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is the purpose of 'const' keyword in function parameters?",
        "question_hi": "function parameters में 'const' keyword का उद्देश्य क्या है?",
        "options_en": ["To prevent modification of parameter", "To make parameter constant", "To optimize code", "All of above"],
        "options_hi": ["parameter के संशोधन को रोकने के लिए", "parameter को constant बनाने के लिए", "कोड optimize करने के लिए", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "Which of the following is true about inline functions?",
        "question_hi": "inline functions के बारे में निम्नलिखित में से कौन सा सत्य है?",
        "options_en": ["Compiler replaces function call with code", "Always executed faster", "Can be recursive", "Must be defined in header"],
        "options_hi": ["कंपाइलर function call को code से बदल देता है", "हमेशा तेजी से निष्पादित होता है", "recursive हो सकता है", "header में परिभाषित होना चाहिए"],
        "answer_en": "Compiler replaces function call with code",
        "answer_hi": "कंपाइलर function call को code से बदल देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the size of empty class in C++?",
        "question_hi": "C++ में खाली class का size क्या है?",
        "options_en": ["1 byte", "0 bytes", "4 bytes", "Depends on compiler"],
        "options_hi": ["1 बाइट", "0 बाइट", "4 बाइट", "कंपाइलर पर निर्भर करता है"],
        "answer_en": "1 byte",
        "answer_hi": "1 बाइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which member function is called automatically when object is destroyed?",
        "question_hi": "object destroy होने पर कौन सा member function स्वचालित रूप से called होता है?",
        "options_en": ["Destructor", "Constructor", "Finalizer", "Deallocator"],
        "options_hi": ["destructor", "constructor", "finalizer", "deallocator"],
        "answer_en": "Destructor",
        "answer_hi": "destructor",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is copy constructor in C++?",
        "question_hi": "C++ में copy constructor क्या है?",
        "options_en": ["Constructor that initializes object from another object", "Constructor that copies files", "Constructor for arrays", "Default constructor"],
        "options_hi": ["दूसरे object से object initialize करने वाला constructor", "फाइलें copy करने वाला constructor", "arrays के लिए constructor", "default constructor"],
        "answer_en": "Constructor that initializes object from another object",
        "answer_hi": "दूसरे object से object initialize करने वाला constructor",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which of the following is a deep copy?",
        "question_hi": "निम्नलिखित में से deep copy कौन सा है?",
        "options_en": ["Creates new memory for pointers", "Copies pointer addresses only", "Shallow copy", "Reference copy"],
        "options_hi": ["pointers के लिए नई memory बनाता है", "केवल pointer addresses copy करता है", "shallow copy", "reference copy"],
        "answer_en": "Creates new memory for pointers",
        "answer_hi": "pointers के लिए नई memory बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the purpose of 'this' pointer in C++?",
        "question_hi": "C++ में 'this' pointer का उद्देश्य क्या है?",
        "options_en": ["Points to current object instance", "Points to base class", "Points to derived class", "Points to static member"],
        "options_hi": ["वर्तमान object instance की ओर इशारा करता है", "base class की ओर इशारा करता है", "derived class की ओर इशारा करता है", "static member की ओर इशारा करता है"],
        "answer_en": "Points to current object instance",
        "answer_hi": "वर्तमान object instance की ओर इशारा करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "Which type of inheritance is shown: class B : public A {}?",
        "question_hi": "किस प्रकार का inheritance दिखाया गया है: class B : public A {}?",
        "options_en": ["Single inheritance", "Multiple inheritance", "Multilevel inheritance", "Hierarchical inheritance"],
        "options_hi": ["single inheritance", "multiple inheritance", "multilevel inheritance", "hierarchical inheritance"],
        "answer_en": "Single inheritance",
        "answer_hi": "single inheritance",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is function template in C++?",
        "question_hi": "C++ में function template क्या है?",
        "options_en": ["Generic function that works with different data types", "Function that templates other functions", "Predefined function", "Library function"],
        "options_hi": ["विभिन्न डेटा types के साथ काम करने वाला generic function", "अन्य functions को template करने वाला function", "predefined function", "library function"],
        "answer_en": "Generic function that works with different data types",
        "answer_hi": "विभिन्न डेटा types के साथ काम करने वाला generic function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "Which STL algorithm is used for sorting?",
        "question_hi": "sorting के लिए किस STL algorithm का उपयोग किया जाता है?",
        "options_en": ["sort()", "order()", "arrange()", "sequence()"],
        "options_hi": ["sort()", "order()", "arrange()", "sequence()"],
        "answer_en": "sort()",
        "answer_hi": "sort()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is the purpose of 'mutable' keyword in C++?",
        "question_hi": "C++ में 'mutable' keyword का उद्देश्य क्या है?",
        "options_en": ["Allows modification of data member in const function", "Makes variable constant", "Prevents modification", "Optimizes memory"],
        "options_hi": ["const function में data member के संशोधन की अनुमति देता है", "variable को constant बनाता है", "संशोधन रोकता है", "memory optimize करता है"],
        "answer_en": "Allows modification of data member in const function",
        "answer_hi": "const function में data member के संशोधन की अनुमति देता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which of the following is NOT a type of constructor?",
        "question_hi": "निम्नलिखित में से कौन सा constructor का प्रकार नहीं है?",
        "options_en": ["Static constructor", "Default constructor", "Parameterized constructor", "Copy constructor"],
        "options_hi": ["static constructor", "default constructor", "parameterized constructor", "copy constructor"],
        "answer_en": "Static constructor",
        "answer_hi": "static constructor",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What does RTTI stand for in C++?",
        "question_hi": "C++ में RTTI का क्या अर्थ है?",
        "options_en": ["Run-Time Type Information", "Runtime Type Identification", "Real-Time Type Information", "Run-Time Template Information"],
        "options_hi": ["Run-Time Type Information", "Runtime Type Identification", "Real-Time Type Information", "Run-Time Template Information"],
        "answer_en": "Run-Time Type Information",
        "answer_hi": "Run-Time Type Information",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "Which operator is used for type casting in C++?",
        "question_hi": "C++ में type casting के लिए किस operator का उपयोग किया जाता है?",
        "options_en": ["static_cast", "dynamic_cast", "const_cast", "All of above"],
        "options_hi": ["static_cast", "dynamic_cast", "const_cast", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the purpose of 'volatile' keyword in C++?",
        "question_hi": "C++ में 'volatile' keyword का उद्देश्य क्या है?",
        "options_en": ["Prevents compiler optimization on variable", "Makes variable fast", "Slows down variable access", "Makes variable constant"],
        "options_hi": ["variable पर compiler optimization रोकता है", "variable को तेज बनाता है", "variable access को धीमा करता है", "variable को constant बनाता है"],
        "answer_en": "Prevents compiler optimization on variable",
        "answer_hi": "variable पर compiler optimization रोकता है",
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