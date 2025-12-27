const questions = [
    {
        "num": 1,
        "question_en": "Who developed the C programming language?",
        "question_hi": "C प्रोग्रामिंग लैंग्वेज किसने विकसित की?",
        "options_en": ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Tim Berners-Lee"],
        "options_hi": ["डेनिस रिची", "ब्जार्ने स्ट्रॉव्स्ट्रुप", "जेम्स गोस्लिंग", "टिम बर्नर्स-ली"],
        "answer_en": "Dennis Ritchie",
        "answer_hi": "डेनिस रिची",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which year was C language developed?",
        "question_hi": "C लैंग्वेज किस साल विकसित हुई?",
        "options_en": ["1972", "1985", "1990", "1969"],
        "options_hi": ["1972", "1985", "1990", "1969"],
        "answer_en": "1972",
        "answer_hi": "1972",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "C is a ___ language.",
        "question_hi": "C एक ___ भाषा है।",
        "options_en": ["High-level", "Low-level", "Middle-level", "Machine-level"],
        "options_hi": ["हाई-लेवल", "लो-लेवल", "मिडिल-लेवल", "मशीन-लेवल"],
        "answer_en": "Middle-level",
        "answer_hi": "मिडिल-लेवल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the extension of a C program file?",
        "question_hi": "C प्रोग्राम फाइल का एक्सटेंशन क्या होता है?",
        "options_en": [".c", ".cpp", ".java", ".py"],
        "options_hi": [".c", ".cpp", ".java", ".py"],
        "answer_en": ".c",
        "answer_hi": ".c",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which is the correct syntax to include a header file?",
        "question_hi": "हेडर फाइल इनक्लूड करने का सही सिंटैक्स कौन सा है?",
        "options_en": ["#include <stdio.h>", "#include stdio.h", "#include [stdio.h]", "include <stdio.h>"],
        "options_hi": ["#include <stdio.h>", "#include stdio.h", "#include [stdio.h]", "include <stdio.h>"],
        "answer_en": "#include <stdio.h>",
        "answer_hi": "#include <stdio.h>",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the entry point of a C program?",
        "question_hi": "C प्रोग्राम का एंट्री पॉइंट क्या होता है?",
        "options_en": ["main()", "start()", "begin()", "program()"],
        "options_hi": ["main()", "start()", "begin()", "program()"],
        "answer_en": "main()",
        "answer_hi": "main()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which function is used to print output in C?",
        "question_hi": "C में आउटपुट प्रिंट करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["printf()", "scanf()", "print()", "cout<<"],
        "options_hi": ["printf()", "scanf()", "print()", "cout<<"],
        "answer_en": "printf()",
        "answer_hi": "printf()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "Which function is used to take input in C?",
        "question_hi": "C में इनपुट लेने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["scanf()", "printf()", "get()", "input()"],
        "options_hi": ["scanf()", "printf()", "get()", "input()"],
        "answer_en": "scanf()",
        "answer_hi": "scanf()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the size of 'int' data type in C (typically on 32-bit)?",
        "question_hi": "C में 'int' डेटा टाइप का साइज क्या है (आमतौर पर 32-बिट पर)?",
        "options_en": ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
        "options_hi": ["2 बाइट्स", "4 बाइट्स", "8 बाइट्स", "कंपाइलर पर निर्भर"],
        "answer_en": "4 bytes",
        "answer_hi": "4 बाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which is not a valid variable name in C?",
        "question_hi": "C में कौन सा वैलिड वेरिएबल नाम नहीं है?",
        "options_en": ["_var", "2var", "var_name", "Var"],
        "options_hi": ["_var", "2var", "var_name", "Var"],
        "answer_en": "2var",
        "answer_hi": "2var",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the default return type of a function in C?",
        "question_hi": "C में फंक्शन का डिफॉल्ट रिटर्न टाइप क्या होता है?",
        "options_en": ["int", "void", "float", "char"],
        "options_hi": ["int", "void", "float", "char"],
        "answer_en": "int",
        "answer_hi": "int",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "Which header file is required for printf() and scanf()?",
        "question_hi": "printf() और scanf() के लिए कौन सी हेडर फाइल जरूरी है?",
        "options_en": ["stdio.h", "conio.h", "stdlib.h", "math.h"],
        "options_hi": ["stdio.h", "conio.h", "stdlib.h", "math.h"],
        "answer_en": "stdio.h",
        "answer_hi": "stdio.h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "Which operator is used to access structure members?",
        "question_hi": "स्ट्रक्चर मेंबर्स को एक्सेस करने के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": [". (dot)", "-> (arrow)", ":: (scope)", "Both a and b"],
        "options_hi": [". (डॉट)", "-> (एरो)", ":: (स्कोप)", "दोनों a और b"],
        "answer_en": "Both a and b",
        "answer_hi": "दोनों a और b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does NULL represent in C?",
        "question_hi": "C में NULL क्या रिप्रेजेंट करता है?",
        "options_en": ["0", "Empty value", "Pointer with no address", "All of the above"],
        "options_hi": ["0", "खाली वैल्यू", "बिना एड्रेस वाला पॉइंटर", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "Which loop executes at least once?",
        "question_hi": "कौन सा लूप कम से कम एक बार तो एक्जीक्यूट होता ही है?",
        "options_en": ["while", "for", "do-while", "All loops"],
        "options_hi": ["while", "for", "do-while", "सभी लूप"],
        "answer_en": "do-while",
        "answer_hi": "do-while",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the output of: printf('%d', 5 + 3 * 2);",
        "question_hi": "printf('%d', 5 + 3 * 2); का आउटपुट क्या है?",
        "options_en": ["16", "11", "13", "10"],
        "options_hi": ["16", "11", "13", "10"],
        "answer_en": "11",
        "answer_hi": "11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "Which is used to come out of a loop immediately?",
        "question_hi": "लूप से तुरंत बाहर आने के लिए क्या उपयोग किया जाता है?",
        "options_en": ["break", "continue", "exit", "return"],
        "options_hi": ["break", "continue", "exit", "return"],
        "answer_en": "break",
        "answer_hi": "break",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the size of 'char' data type in C?",
        "question_hi": "C में 'char' डेटा टाइप का साइज क्या है?",
        "options_en": ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
        "options_hi": ["1 बाइट", "2 बाइट्स", "4 बाइट्स", "8 बाइट्स"],
        "answer_en": "1 byte",
        "answer_hi": "1 बाइट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "Which format specifier is used for float?",
        "question_hi": "फ्लोट के लिए कौन सा फॉर्मेट स्पेसिफायर उपयोग किया जाता है?",
        "options_en": ["%f", "%d", "%c", "%lf"],
        "options_hi": ["%f", "%d", "%c", "%lf"],
        "answer_en": "%f",
        "answer_hi": "%f",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is an array?",
        "question_hi": "एरे क्या होता है?",
        "options_en": ["Collection of similar data types", "Collection of different data types", "A function", "A pointer"],
        "options_hi": ["समान डेटा टाइप का कलेक्शन", "अलग डेटा टाइप का कलेक्शन", "एक फंक्शन", "एक पॉइंटर"],
        "answer_en": "Collection of similar data types",
        "answer_hi": "समान डेटा टाइप का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is the index of first element in an array?",
        "question_hi": "एरे में पहले एलिमेंट का इंडेक्स क्या होता है?",
        "options_en": ["0", "1", "-1", "Depends on declaration"],
        "options_hi": ["0", "1", "-1", "डिक्लेरेशन पर निर्भर"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "Which function is used to compare two strings?",
        "question_hi": "दो स्ट्रिंग्स को कंपेयर करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["strcmp()", "strcat()", "strcpy()", "strlen()"],
        "options_hi": ["strcmp()", "strcat()", "strcpy()", "strlen()"],
        "answer_en": "strcmp()",
        "answer_hi": "strcmp()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What does the '++' operator do?",
        "question_hi": "'++' ऑपरेटर क्या करता है?",
        "options_en": ["Increments by 1", "Decrements by 1", "Adds 2", "Multiplies by 2"],
        "options_hi": ["1 से बढ़ाता है", "1 से घटाता है", "2 जोड़ता है", "2 से गुणा करता है"],
        "answer_en": "Increments by 1",
        "answer_hi": "1 से बढ़ाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is a pointer?",
        "question_hi": "पॉइंटर क्या होता है?",
        "options_en": ["Variable that stores address", "Variable that stores value", "Function", "Array"],
        "options_hi": ["एड्रेस स्टोर करने वाला वेरिएबल", "वैल्यू स्टोर करने वाला वेरिएबल", "फंक्शन", "एरे"],
        "answer_en": "Variable that stores address",
        "answer_hi": "एड्रेस स्टोर करने वाला वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "Which operator is used for pointer dereferencing?",
        "question_hi": "पॉइंटर डीरिफरेंसिंग के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["*", "&", "->", "."],
        "options_hi": ["*", "&", "->", "."],
        "answer_en": "*",
        "answer_hi": "*",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is the output of: int x = 5; printf('%d', x++);",
        "question_hi": "int x = 5; printf('%d', x++); का आउटपुट क्या है?",
        "options_en": ["5", "6", "0", "Error"],
        "options_hi": ["5", "6", "0", "एरर"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "Which is used to allocate memory dynamically?",
        "question_hi": "डायनामिक मेमोरी अलॉकेट करने के लिए क्या उपयोग किया जाता है?",
        "options_en": ["malloc()", "calloc()", "Both a and b", "new"],
        "options_hi": ["malloc()", "calloc()", "दोनों a और b", "new"],
        "answer_en": "Both a and b",
        "answer_hi": "दोनों a और b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "Which function is used to free dynamically allocated memory?",
        "question_hi": "डायनामिक अलॉकेटेड मेमोरी को फ्री करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["free()", "delete", "remove()", "clear()"],
        "options_hi": ["free()", "delete", "remove()", "clear()"],
        "answer_en": "free()",
        "answer_hi": "free()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is a structure in C?",
        "question_hi": "C में स्ट्रक्चर क्या होता है?",
        "options_en": ["User-defined data type", "Built-in data type", "Function", "Loop"],
        "options_hi": ["यूजर-डिफाइंड डेटा टाइप", "बिल्ट-इन डेटा टाइप", "फंक्शन", "लूप"],
        "answer_en": "User-defined data type",
        "answer_hi": "यूजर-डिफाइंड डेटा टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is the output of: printf('%d', sizeof(int));",
        "question_hi": "printf('%d', sizeof(int)); का आउटपुट क्या है?",
        "options_en": ["2", "4", "8", "Compiler dependent"],
        "options_hi": ["2", "4", "8", "कंपाइलर पर निर्भर"],
        "answer_en": "Compiler dependent",
        "answer_hi": "कंपाइलर पर निर्भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "Which escape sequence is used for new line?",
        "question_hi": "नई लाइन के लिए कौन सा एस्केप सीक्वेंस उपयोग किया जाता है?",
        "options_en": ["\\n", "\\t", "\\b", "\\r"],
        "options_hi": ["\\n", "\\t", "\\b", "\\r"],
        "answer_en": "\\n",
        "answer_hi": "\\n",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the purpose of 'return 0;' in main()?",
        "question_hi": "main() में 'return 0;' का उद्देश्य क्या है?",
        "options_en": ["Program executed successfully", "Program failed", "Return value to OS", "Both a and c"],
        "options_hi": ["प्रोग्राम सफलतापूर्वक चला", "प्रोग्राम फेल हुआ", "OS को वैल्यू रिटर्न करना", "दोनों a और c"],
        "answer_en": "Both a and c",
        "answer_hi": "दोनों a और c",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "Which is not a valid data type in C?",
        "question_hi": "C में कौन सा वैलिड डेटा टाइप नहीं है?",
        "options_en": ["int", "float", "real", "char"],
        "options_hi": ["int", "float", "real", "char"],
        "answer_en": "real",
        "answer_hi": "real",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the output of: int a = 10, b = 20; printf('%d', a == b);",
        "question_hi": "int a = 10, b = 20; printf('%d', a == b); का आउटपुट क्या है?",
        "options_en": ["0", "1", "10", "20"],
        "options_hi": ["0", "1", "10", "20"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "Which is the correct way to declare a constant?",
        "question_hi": "कॉन्स्टेंट डिक्लेयर करने का सही तरीका कौन सा है?",
        "options_en": ["const int x = 5;", "#define x 5", "Both a and b", "constant int x = 5;"],
        "options_hi": ["const int x = 5;", "#define x 5", "दोनों a और b", "constant int x = 5;"],
        "answer_en": "Both a and b",
        "answer_hi": "दोनों a और b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What does 'void' mean in function declaration?",
        "question_hi": "फंक्शन डिक्लेरेशन में 'void' का क्या मतलब है?",
        "options_en": ["No return value", "No parameters", "Both a and b", "Empty function"],
        "options_hi": ["कोई रिटर्न वैल्यू नहीं", "कोई पैरामीटर्स नहीं", "दोनों a और b", "खाली फंक्शन"],
        "answer_en": "Both a and b",
        "answer_hi": "दोनों a और b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is recursion?",
        "question_hi": "रिकर्शन क्या है?",
        "options_en": ["Function calling itself", "Looping", "Jump statement", "Pointer operation"],
        "options_hi": ["फंक्शन का खुद को कॉल करना", "लूपिंग", "जम्प स्टेटमेंट", "पॉइंटर ऑपरेशन"],
        "answer_en": "Function calling itself",
        "answer_hi": "फंक्शन का खुद को कॉल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is the output of: printf('%c', 65);",
        "question_hi": "printf('%c', 65); का आउटपुट क्या है?",
        "options_en": ["A", "65", "Error", "None"],
        "options_hi": ["A", "65", "एरर", "कोई नहीं"],
        "answer_en": "A",
        "answer_hi": "A",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "Which is used for logical AND operation?",
        "question_hi": "लॉजिकल AND ऑपरेशन के लिए क्या उपयोग किया जाता है?",
        "options_en": ["&&", "||", "!", "&"],
        "options_hi": ["&&", "||", "!", "&"],
        "answer_en": "&&",
        "answer_hi": "&&",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is a file in C?",
        "question_hi": "C में फाइल क्या होती है?",
        "options_en": ["Collection of data", "Input device", "Output device", "Function"],
        "options_hi": ["डेटा का कलेक्शन", "इनपुट डिवाइस", "आउटपुट डिवाइस", "फंक्शन"],
        "answer_en": "Collection of data",
        "answer_hi": "डेटा का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which mode opens a file for reading?",
        "question_hi": "कौन सा मोड फाइल को रीडिंग के लिए ओपन करता है?",
        "options_en": ["r", "w", "a", "rb"],
        "options_hi": ["r", "w", "a", "rb"],
        "answer_en": "r",
        "answer_hi": "r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is the output of: int x = 10; printf('%d', x > 5 ? 1 : 0);",
        "question_hi": "int x = 10; printf('%d', x > 5 ? 1 : 0); का आउटपुट क्या है?",
        "options_en": ["1", "0", "10", "5"],
        "options_hi": ["1", "0", "10", "5"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is a preprocessor directive?",
        "question_hi": "प्रीप्रोसेसर डायरेक्टिव क्या है?",
        "options_en": ["Command for compiler", "Function", "Variable", "Loop"],
        "options_hi": ["कंपाइलर के लिए कमांड", "फंक्शन", "वेरिएबल", "लूप"],
        "answer_en": "Command for compiler",
        "answer_hi": "कंपाइलर के लिए कमांड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which is used to define a macro?",
        "question_hi": "मैक्रो डिफाइन करने के लिए क्या उपयोग किया जाता है?",
        "options_en": ["#define", "#include", "#ifdef", "#pragma"],
        "options_hi": ["#define", "#include", "#ifdef", "#pragma"],
        "answer_en": "#define",
        "answer_hi": "#define",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is the output of: printf('%d', 10 / 3);",
        "question_hi": "printf('%d', 10 / 3); का आउटपुट क्या है?",
        "options_en": ["3", "3.33", "3.0", "Error"],
        "options_hi": ["3", "3.33", "3.0", "एरर"],
        "answer_en": "3",
        "answer_hi": "3",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is typecasting?",
        "question_hi": "टाइपकास्टिंग क्या है?",
        "options_en": ["Converting one data type to another", "Creating new type", "Deleting type", "None"],
        "options_hi": ["एक डेटा टाइप को दूसरे में बदलना", "नया टाइप बनाना", "टाइप डिलीट करना", "कोई नहीं"],
        "answer_en": "Converting one data type to another",
        "answer_hi": "एक डेटा टाइप को दूसरे में बदलना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "Which is the correct way to comment in C?",
        "question_hi": "C में कमेंट करने का सही तरीका कौन सा है?",
        "options_en": ["// single line", "/* multi-line */", "Both a and b", "# comment"],
        "options_hi": ["// सिंगल लाइन", "/* मल्टी-लाइन */", "दोनों a और b", "# कमेंट"],
        "answer_en": "Both a and b",
        "answer_hi": "दोनों a और b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is a global variable?",
        "question_hi": "ग्लोबल वेरिएबल क्या होता है?",
        "options_en": ["Declared outside all functions", "Declared inside main()", "Declared in header file", "Constant"],
        "options_hi": ["सभी फंक्शन्स के बाहर डिक्लेयर", "main() के अंदर डिक्लेयर", "हेडर फाइल में डिक्लेयर", "कॉन्स्टेंट"],
        "answer_en": "Declared outside all functions",
        "answer_hi": "सभी फंक्शन्स के बाहर डिक्लेयर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the scope of a local variable?",
        "question_hi": "लोकल वेरिएबल का स्कोप क्या होता है?",
        "options_en": ["Within the function", "Whole program", "Multiple files", "None"],
        "options_hi": ["फंक्शन के अंदर", "पूरा प्रोग्राम", "मल्टीपल फाइल्स", "कोई नहीं"],
        "answer_en": "Within the function",
        "answer_hi": "फंक्शन के अंदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is the output of: printf('%d', sizeof('A'));",
        "question_hi": "printf('%d', sizeof('A')); का आउटपुट क्या है?",
        "options_en": ["1", "2", "4", "Compiler dependent"],
        "options_hi": ["1", "2", "4", "कंपाइलर पर निर्भर"],
        "answer_en": "Compiler dependent",
        "answer_hi": "कंपाइलर पर निर्भर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "Which function copies string?",
        "question_hi": "स्ट्रिंग कॉपी करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["strcpy()", "strcat()", "strcmp()", "strlen()"],
        "options_hi": ["strcpy()", "strcat()", "strcmp()", "strlen()"],
        "answer_en": "strcpy()",
        "answer_hi": "strcpy()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "What is the output of: int arr[5]; printf('%d', sizeof(arr));",
        "question_hi": "int arr[5]; printf('%d', sizeof(arr)); का आउटपुट क्या है?",
        "options_en": ["20", "5", "4", "Depends on system"],
        "options_hi": ["20", "5", "4", "सिस्टम पर निर्भर"],
        "answer_en": "20",
        "answer_hi": "20",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What is call by value?",
        "question_hi": "कॉल बाय वैल्यू क्या है?",
        "options_en": ["Copy of value passed", "Address passed", "Reference passed", "Pointer passed"],
        "options_hi": ["वैल्यू की कॉपी पास होती है", "एड्रेस पास होता है", "रिफरेंस पास होता है", "पॉइंटर पास होता है"],
        "answer_en": "Copy of value passed",
        "answer_hi": "वैल्यू की कॉपी पास होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What is call by reference?",
        "question_hi": "कॉल बाय रिफरेंस क्या है?",
        "options_en": ["Address passed", "Value passed", "Copy passed", "None"],
        "options_hi": ["एड्रेस पास होता है", "वैल्यू पास होती है", "कॉपी पास होती है", "कोई नहीं"],
        "answer_en": "Address passed",
        "answer_hi": "एड्रेस पास होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which is not a storage class?",
        "question_hi": "कौन सा स्टोरेज क्लास नहीं है?",
        "options_en": ["auto", "static", "extern", "heap"],
        "options_hi": ["auto", "static", "extern", "heap"],
        "answer_en": "heap",
        "answer_hi": "heap",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "What is the purpose of 'static' variable?",
        "question_hi": "'static' वेरिएबल का उद्देश्य क्या है?",
        "options_en": ["Retains value between function calls", "Global access", "Fast access", "None"],
        "options_hi": ["फंक्शन कॉल्स के बीच वैल्यू रिटेन करता है", "ग्लोबल एक्सेस", "फास्ट एक्सेस", "कोई नहीं"],
        "answer_en": "Retains value between function calls",
        "answer_hi": "फंक्शन कॉल्स के बीच वैल्यू रिटेन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "What is a union?",
        "question_hi": "यूनियन क्या है?",
        "options_en": ["Shares memory", "Separate memory", "Function", "Array"],
        "options_hi": ["मेमोरी शेयर करता है", "अलग मेमोरी", "फंक्शन", "एरे"],
        "answer_en": "Shares memory",
        "answer_hi": "मेमोरी शेयर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the difference between structure and union?",
        "question_hi": "स्ट्रक्चर और यूनियन में क्या अंतर है?",
        "options_en": ["Memory allocation", "Data types", "Functions", "All"],
        "options_hi": ["मेमोरी अलॉकेशन", "डेटा टाइप्स", "फंक्शन्स", "सभी"],
        "answer_en": "Memory allocation",
        "answer_hi": "मेमोरी अलॉकेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What is enum?",
        "question_hi": "enum क्या है?",
        "options_en": ["Named integer constants", "Float constants", "String constants", "Array"],
        "options_hi": ["नामित इंटीजर कॉन्स्टेंट्स", "फ्लोट कॉन्स्टेंट्स", "स्ट्रिंग कॉन्स्टेंट्स", "एरे"],
        "answer_en": "Named integer constants",
        "answer_hi": "नामित इंटीजर कॉन्स्टेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is the output of: printf('%d', 10 % 3);",
        "question_hi": "printf('%d', 10 % 3); का आउटपुट क्या है?",
        "options_en": ["1", "3", "0", "Error"],
        "options_hi": ["1", "3", "0", "एरर"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which is the bitwise AND operator?",
        "question_hi": "बिटवाइज AND ऑपरेटर कौन सा है?",
        "options_en": ["&", "&&", "|", "||"],
        "options_hi": ["&", "&&", "|", "||"],
        "answer_en": "&",
        "answer_hi": "&",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What is the output of: int x = 5; int *p = &x; printf('%d', *p);",
        "question_hi": "int x = 5; int *p = &x; printf('%d', *p); का आउटपुट क्या है?",
        "options_en": ["5", "Address of x", "0", "Error"],
        "options_hi": ["5", "x का एड्रेस", "0", "एरर"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What is a dangling pointer?",
        "question_hi": "डैंगलिंग पॉइंटर क्या है?",
        "options_en": ["Pointer to deleted memory", "Null pointer", "Wild pointer", "All"],
        "options_hi": ["डिलीट की गई मेमोरी का पॉइंटर", "नल पॉइंटर", "वाइल्ड पॉइंटर", "सभी"],
        "answer_en": "Pointer to deleted memory",
        "answer_hi": "डिलीट की गई मेमोरी का पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is a wild pointer?",
        "question_hi": "वाइल्ड पॉइंटर क्या है?",
        "options_en": ["Uninitialized pointer", "Null pointer", "Freed pointer", "Constant pointer"],
        "options_hi": ["अनइनिशियलाइज्ड पॉइंटर", "नल पॉइंटर", "फ्रीड पॉइंटर", "कॉन्स्टेंट पॉइंटर"],
        "answer_en": "Uninitialized pointer",
        "answer_hi": "अनइनिशियलाइज्ड पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is the purpose of 'const' keyword?",
        "question_hi": "'const' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Make variable read-only", "Make variable global", "Increase speed", "Reduce memory"],
        "options_hi": ["वेरिएबल को रीड-ओनली बनाना", "वेरिएबल को ग्लोबल बनाना", "स्पीड बढ़ाना", "मेमोरी कम करना"],
        "answer_en": "Make variable read-only",
        "answer_hi": "वेरिएबल को रीड-ओनली बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "What is the output of: printf('%d', ~1);",
        "question_hi": "printf('%d', ~1); का आउटपुट क्या है?",
        "options_en": ["-2", "0", "2", "1"],
        "options_hi": ["-2", "0", "2", "1"],
        "answer_en": "-2",
        "answer_hi": "-2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What is command line argument?",
        "question_hi": "कमांड लाइन आर्गुमेंट क्या है?",
        "options_en": ["Arguments passed to main()", "Function arguments", "Loop arguments", "None"],
        "options_hi": ["main() में पास किए गए आर्गुमेंट्स", "फंक्शन आर्गुमेंट्स", "लूप आर्गुमेंट्स", "कोई नहीं"],
        "answer_en": "Arguments passed to main()",
        "answer_hi": "main() में पास किए गए आर्गुमेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is argc in main(int argc, char *argv[])?",
        "question_hi": "main(int argc, char *argv[]) में argc क्या है?",
        "options_en": ["Number of arguments", "Array of arguments", "Argument value", "File name"],
        "options_hi": ["आर्गुमेंट्स की संख्या", "आर्गुमेंट्स की एरे", "आर्गुमेंट वैल्यू", "फाइल नाम"],
        "answer_en": "Number of arguments",
        "answer_hi": "आर्गुमेंट्स की संख्या",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is argv in main(int argc, char *argv[])?",
        "question_hi": "main(int argc, char *argv[]) में argv क्या है?",
        "options_en": ["Array of argument strings", "Number of arguments", "Integer argument", "File pointer"],
        "options_hi": ["आर्गुमेंट स्ट्रिंग्स की एरे", "आर्गुमेंट्स की संख्या", "इंटीजर आर्गुमेंट", "फाइल पॉइंटर"],
        "answer_en": "Array of argument strings",
        "answer_hi": "आर्गुमेंट स्ट्रिंग्स की एरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is the output of: int x = 10; int y = x++; printf('%d %d', x, y);",
        "question_hi": "int x = 10; int y = x++; printf('%d %d', x, y); का आउटपुट क्या है?",
        "options_en": ["11 10", "10 11", "11 11", "10 10"],
        "options_hi": ["11 10", "10 11", "11 11", "10 10"],
        "answer_en": "11 10",
        "answer_hi": "11 10",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is the output of: int x = 10; int y = ++x; printf('%d %d', x, y);",
        "question_hi": "int x = 10; int y = ++x; printf('%d %d', x, y); का आउटपुट क्या है?",
        "options_en": ["11 11", "10 11", "11 10", "10 10"],
        "options_hi": ["11 11", "10 11", "11 10", "10 10"],
        "answer_en": "11 11",
        "answer_hi": "11 11",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is a 2D array?",
        "question_hi": "2D एरे क्या होता है?",
        "options_en": ["Array of arrays", "Single array", "Pointer array", "Function array"],
        "options_hi": ["एरे की एरे", "सिंगल एरे", "पॉइंटर एरे", "फंक्शन एरे"],
        "answer_en": "Array of arrays",
        "answer_hi": "एरे की एरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the output of: char str[] = 'Hello'; printf('%d', strlen(str));",
        "question_hi": "char str[] = 'Hello'; printf('%d', strlen(str)); का आउटपुट क्या है?",
        "options_en": ["5", "6", "4", "Error"],
        "options_hi": ["5", "6", "4", "एरर"],
        "answer_en": "5",
        "answer_hi": "5",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What is the purpose of 'typedef'?",
        "question_hi": "'typedef' का उद्देश्य क्या है?",
        "options_en": ["Create alias for data types", "Define new variable", "Create function", "Allocate memory"],
        "options_hi": ["डेटा टाइप्स के लिए अलियास बनाना", "नया वेरिएबल डिफाइन करना", "फंक्शन बनाना", "मेमोरी अलॉकेट करना"],
        "answer_en": "Create alias for data types",
        "answer_hi": "डेटा टाइप्स के लिए अलियास बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is a function pointer?",
        "question_hi": "फंक्शन पॉइंटर क्या है?",
        "options_en": ["Pointer pointing to function", "Pointer to variable", "Array of functions", "None"],
        "options_hi": ["फंक्शन को पॉइंट करने वाला पॉइंटर", "वेरिएबल को पॉइंटर", "फंक्शन्स की एरे", "कोई नहीं"],
        "answer_en": "Pointer pointing to function",
        "answer_hi": "फंक्शन को पॉइंट करने वाला पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the output of: printf('%d', 1 << 2);",
        "question_hi": "printf('%d', 1 << 2); का आउटपुट क्या है?",
        "options_en": ["4", "1", "2", "0"],
        "options_hi": ["4", "1", "2", "0"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is the output of: printf('%d', 4 >> 1);",
        "question_hi": "printf('%d', 4 >> 1); का आउटपुट क्या है?",
        "options_en": ["2", "4", "1", "0"],
        "options_hi": ["2", "4", "1", "0"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "Which is used to open a file?",
        "question_hi": "फाइल ओपन करने के लिए क्या उपयोग किया जाता है?",
        "options_en": ["fopen()", "fclose()", "fread()", "fwrite()"],
        "options_hi": ["fopen()", "fclose()", "fread()", "fwrite()"],
        "answer_en": "fopen()",
        "answer_hi": "fopen()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "Which is used to close a file?",
        "question_hi": "फाइल क्लोज करने के लिए क्या उपयोग किया जाता है?",
        "options_en": ["fclose()", "fopen()", "exit()", "end()"],
        "options_hi": ["fclose()", "fopen()", "exit()", "end()"],
        "answer_en": "fclose()",
        "answer_hi": "fclose()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is the purpose of 'feof()' function?",
        "question_hi": "'feof()' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Check end of file", "Open file", "Read file", "Write file"],
        "options_hi": ["फाइल का अंत चेक करना", "फाइल ओपन करना", "फाइल रीड करना", "फाइल राइट करना"],
        "answer_en": "Check end of file",
        "answer_hi": "फाइल का अंत चेक करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the output of: printf('%d', sizeof(double));",
        "question_hi": "printf('%d', sizeof(double)); का आउटपुट क्या है?",
        "options_en": ["8", "4", "2", "Compiler dependent"],
        "options_hi": ["8", "4", "2", "कंपाइलर पर निर्भर"],
        "answer_en": "8",
        "answer_hi": "8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What is the output of: int x = 10, y = 20; printf('%d', x + y);",
        "question_hi": "int x = 10, y = 20; printf('%d', x + y); का आउटपुट क्या है?",
        "options_en": ["30", "1020", "Error", "10"],
        "options_hi": ["30", "1020", "एरर", "10"],
        "answer_en": "30",
        "answer_hi": "30",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What is a register variable?",
        "question_hi": "रजिस्टर वेरिएबल क्या है?",
        "options_en": ["Stored in CPU register", "Stored in RAM", "Global variable", "Static variable"],
        "options_hi": ["CPU रजिस्टर में स्टोर", "RAM में स्टोर", "ग्लोबल वेरिएबल", "स्टेटिक वेरिएबल"],
        "answer_en": "Stored in CPU register",
        "answer_hi": "CPU रजिस्टर में स्टोर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is the output of: printf('%d', !0);",
        "question_hi": "printf('%d', !0); का आउटपुट क्या है?",
        "options_en": ["1", "0", "Error", "True"],
        "options_hi": ["1", "0", "एरर", "ट्रू"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What is the output of: printf('%d', 0 && 1);",
        "question_hi": "printf('%d', 0 && 1); का आउटपुट क्या है?",
        "options_en": ["0", "1", "Error", "True"],
        "options_hi": ["0", "1", "एरर", "ट्रू"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the output of: printf('%d', 0 || 1);",
        "question_hi": "printf('%d', 0 || 1); का आउटपुट क्या है?",
        "options_en": ["1", "0", "Error", "False"],
        "options_hi": ["1", "0", "एरर", "फॉल्स"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the ternary operator?",
        "question_hi": "टर्नरी ऑपरेटर क्या है?",
        "options_en": ["? :", ":", "?", "??"],
        "options_hi": ["? :", ":", "?", "??"],
        "answer_en": "? :",
        "answer_hi": "? :",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What is the output of: int x = 10; if(x = 5) printf('Yes'); else printf('No');",
        "question_hi": "int x = 10; if(x = 5) printf('Yes'); else printf('No'); का आउटपुट क्या है?",
        "options_en": ["Yes", "No", "Error", "None"],
        "options_hi": ["हाँ", "नहीं", "एरर", "कोई नहीं"],
        "answer_en": "Yes",
        "answer_hi": "हाँ",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the output of: for(int i=0; i<3; i++) printf('%d', i);",
        "question_hi": "for(int i=0; i<3; i++) printf('%d', i); का आउटपुट क्या है?",
        "options_en": ["012", "123", "0123", "Error"],
        "options_hi": ["012", "123", "0123", "एरर"],
        "answer_en": "012",
        "answer_hi": "012",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What is the output of: int i=0; while(i<3) { printf('%d', i); i++; }",
        "question_hi": "int i=0; while(i<3) { printf('%d', i); i++; } का आउटपुट क्या है?",
        "options_en": ["012", "123", "0123", "Error"],
        "options_hi": ["012", "123", "0123", "एरर"],
        "answer_en": "012",
        "answer_hi": "012",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What is the output of: int i=0; do { printf('%d', i); i++; } while(i<3);",
        "question_hi": "int i=0; do { printf('%d', i); i++; } while(i<3); का आउटपुट क्या है?",
        "options_en": ["012", "123", "0123", "Error"],
        "options_hi": ["012", "123", "0123", "एरर"],
        "answer_en": "012",
        "answer_hi": "012",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What is the output of: switch(2) { case 1: printf('1'); break; case 2: printf('2'); break; default: printf('D'); }",
        "question_hi": "switch(2) { case 1: printf('1'); break; case 2: printf('2'); break; default: printf('D'); } का आउटपुट क्या है?",
        "options_en": ["2", "1", "D", "Error"],
        "options_hi": ["2", "1", "D", "एरर"],
        "answer_en": "2",
        "answer_hi": "2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What is the purpose of 'goto' statement?",
        "question_hi": "'goto' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Jump to label", "Loop", "Function call", "Exit"],
        "options_hi": ["लेबल पर जम्प करना", "लूप", "फंक्शन कॉल", "एग्जिट"],
        "answer_en": "Jump to label",
        "answer_hi": "लेबल पर जम्प करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the output of: printf('%d', sizeof(long));",
        "question_hi": "printf('%d', sizeof(long)); का आउटपुट क्या है?",
        "options_en": ["4 or 8", "2", "1", "16"],
        "options_hi": ["4 या 8", "2", "1", "16"],
        "answer_en": "4 or 8",
        "answer_hi": "4 या 8",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What is the output of: printf('%d', -10 >> 1);",
        "question_hi": "printf('%d', -10 >> 1); का आउटपुट क्या है?",
        "options_en": ["-5", "5", "-10", "Implementation defined"],
        "options_hi": ["-5", "5", "-10", "इम्प्लीमेंटेशन डिफाइंड"],
        "answer_en": "Implementation defined",
        "answer_hi": "इम्प्लीमेंटेशन डिफाइंड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What is the purpose of 'volatile' keyword?",
        "question_hi": "'volatile' कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Variable can change unexpectedly", "Constant variable", "Fast variable", "Global variable"],
        "options_hi": ["वेरिएबल अनपेक्षित रूप से बदल सकता है", "कॉन्स्टेंट वेरिएबल", "फास्ट वेरिएबल", "ग्लोबल वेरिएबल"],
        "answer_en": "Variable can change unexpectedly",
        "answer_hi": "वेरिएबल अनपेक्षित रूप से बदल सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What is the output of: printf('%d', 5 & 3);",
        "question_hi": "printf('%d', 5 & 3); का आउटपुट क्या है?",
        "options_en": ["1", "7", "0", "5"],
        "options_hi": ["1", "7", "0", "5"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What is the output of: printf('%d', 5 | 3);",
        "question_hi": "printf('%d', 5 | 3); का आउटपुट क्या है?",
        "options_en": ["7", "1", "6", "5"],
        "options_hi": ["7", "1", "6", "5"],
        "answer_en": "7",
        "answer_hi": "7",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What is the output of: printf('%d', 5 ^ 3);",
        "question_hi": "printf('%d', 5 ^ 3); का आउटपुट क्या है?",
        "options_en": ["6", "1", "7", "0"],
        "options_hi": ["6", "1", "7", "0"],
        "answer_en": "6",
        "answer_hi": "6",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "Which company developed C language?",
        "question_hi": "C लैंग्वेज किस कंपनी ने विकसित की?",
        "options_en": ["Bell Labs", "Microsoft", "IBM", "Apple"],
        "options_hi": ["बेल लैब्स", "माइक्रोसॉफ्ट", "IBM", "एप्पल"],
        "answer_en": "Bell Labs",
        "answer_hi": "बेल लैब्स",
        "attempted": false,
        "selected": ""
    }
];
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