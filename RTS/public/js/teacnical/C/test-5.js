const questions =[
    {
        "num": 1,
        "question_en": "What is the minimum number of functions a C program must have?",
        "question_hi": "C प्रोग्राम में कम से कम कितने फंक्शन होने चाहिए?",
        "options_en": ["0", "1", "2", "3"],
        "options_hi": ["0", "1", "2", "3"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which character is used to terminate every statement in C?",
        "question_hi": "C में हर स्टेटमेंट को टर्मिनेट करने के लिए किस कैरेक्टर का उपयोग किया जाता है?",
        "options_en": [".", ";", ":", ","],
        "options_hi": [".", ";", ":", ","],
        "answer_en": ";",
        "answer_hi": ";",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What type of language is C?",
        "question_hi": "C किस प्रकार की भाषा है?",
        "options_en": ["Interpreted", "Compiled", "Both", "Neither"],
        "options_hi": ["इंटरप्रेटेड", "कंपाइल्ड", "दोनों", "कोई नहीं"],
        "answer_en": "Compiled",
        "answer_hi": "कंपाइल्ड",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "What is the correct way to write a single-line comment?",
        "question_hi": "सिंगल-लाइन कमेंट लिखने का सही तरीका क्या है?",
        "options_en": ["// comment", "/* comment */", "# comment", "-- comment"],
        "options_hi": ["// कमेंट", "/* कमेंट */", "# कमेंट", "-- कमेंट"],
        "answer_en": "// comment",
        "answer_hi": "// कमेंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "Which of these is NOT a valid C keyword?",
        "question_hi": "इनमें से कौन सा वैलिड C कीवर्ड नहीं है?",
        "options_en": ["integer", "int", "float", "char"],
        "options_hi": ["integer", "int", "float", "char"],
        "answer_en": "integer",
        "answer_hi": "integer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "What is the default value of an uninitialized local variable?",
        "question_hi": "अनइनिशियलाइज्ड लोकल वेरिएबल की डिफॉल्ट वैल्यू क्या है?",
        "options_en": ["0", "NULL", "Garbage", "1"],
        "options_hi": ["0", "NULL", "गार्बेज", "1"],
        "answer_en": "Garbage",
        "answer_hi": "गार्बेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "Which format specifier is used for double data type?",
        "question_hi": "डबल डेटा टाइप के लिए किस फॉर्मेट स्पेसिफायर का उपयोग किया जाता है?",
        "options_en": ["%lf", "%f", "%d", "%lf"],
        "options_hi": ["%lf", "%f", "%d", "%lf"],
        "answer_en": "%lf",
        "answer_hi": "%lf",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What does the 'void' keyword indicate when used as return type?",
        "question_hi": "रिटर्न टाइप के रूप में 'void' कीवर्ड क्या इंडिकेट करता है?",
        "options_en": ["Function returns nothing", "Function returns integer", "Function returns any type", "Function returns void"],
        "options_hi": ["फंक्शन कुछ नहीं रिटर्न करता", "फंक्शन इंटीजर रिटर्न करता है", "फंक्शन कोई भी टाइप रिटर्न करता है", "फंक्शन void रिटर्न करता है"],
        "answer_en": "Function returns nothing",
        "answer_hi": "फंक्शन कुछ नहीं रिटर्न करता",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "What is the correct syntax for declaring a pointer?",
        "question_hi": "पॉइंटर डिक्लेयर करने का सही सिंटैक्स क्या है?",
        "options_en": ["int *p;", "int p*;", "pointer int p;", "*int p;"],
        "options_hi": ["int *p;", "int p*;", "pointer int p;", "*int p;"],
        "answer_en": "int *p;",
        "answer_hi": "int *p;",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "Which operator is used to get the address of a variable?",
        "question_hi": "वेरिएबल का एड्रेस प्राप्त करने के लिए किस ऑपरेटर का उपयोग किया जाता है?",
        "options_en": ["&", "*", "->", "."],
        "options_hi": ["&", "*", "->", "."],
        "answer_en": "&",
        "answer_hi": "&",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "What is the output of: printf('%d', sizeof('A'));",
        "question_hi": "printf('%d', sizeof('A')); का आउटपुट क्या है?",
        "options_en": ["1", "2", "4", "8"],
        "options_hi": ["1", "2", "4", "8"],
        "answer_en": "4",
        "answer_hi": "4",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is a string in C?",
        "question_hi": "C में स्ट्रिंग क्या है?",
        "options_en": ["Array of characters", "Single character", "Array of integers", "Pointer to character"],
        "options_hi": ["कैरेक्टर्स की एरे", "सिंगल कैरेक्टर", "इंटीजर्स की एरे", "कैरेक्टर का पॉइंटर"],
        "answer_en": "Array of characters",
        "answer_hi": "कैरेक्टर्स की एरे",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "How is a string terminated in C?",
        "question_hi": "C में स्ट्रिंग कैसे टर्मिनेट होती है?",
        "options_en": ["With NULL character", "With newline", "With space", "With comma"],
        "options_hi": ["NULL कैरेक्टर से", "न्यूलाइन से", "स्पेस से", "कॉमा से"],
        "answer_en": "With NULL character",
        "answer_hi": "NULL कैरेक्टर से",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What is the NULL character?",
        "question_hi": "NULL कैरेक्टर क्या है?",
        "options_en": ["'\\0'", "'\\n'", "'0'", "0"],
        "options_hi": ["'\\0'", "'\\n'", "'0'", "0"],
        "answer_en": "'\\0'",
        "answer_hi": "'\\0'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the purpose of 'return' statement?",
        "question_hi": "'return' स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Return value from function", "Exit program", "Stop loop", "Skip iteration"],
        "options_hi": ["फंक्शन से वैल्यू रिटर्न करना", "प्रोग्राम से बाहर निकलना", "लूप रोकना", "इटरेशन स्किप करना"],
        "answer_en": "Return value from function",
        "answer_hi": "फंक्शन से वैल्यू रिटर्न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "Which function is used to find length of a string?",
        "question_hi": "स्ट्रिंग की लंबाई ज्ञात करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["strlen()", "strlength()", "len()", "length()"],
        "options_hi": ["strlen()", "strlength()", "len()", "length()"],
        "answer_en": "strlen()",
        "answer_hi": "strlen()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What does 'strcpy()' function do?",
        "question_hi": "'strcpy()' फंक्शन क्या करता है?",
        "options_en": ["Copies string", "Compares strings", "Concatenates strings", "Finds string length"],
        "options_hi": ["स्ट्रिंग कॉपी करता है", "स्ट्रिंग्स की तुलना करता है", "स्ट्रिंग्स जोड़ता है", "स्ट्रिंग की लंबाई ढूंढता है"],
        "answer_en": "Copies string",
        "answer_hi": "स्ट्रिंग कॉपी करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the purpose of 'strcat()' function?",
        "question_hi": "'strcat()' फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Concatenates two strings", "Compares two strings", "Copies string", "Searches string"],
        "options_hi": ["दो स्ट्रिंग्स जोड़ता है", "दो स्ट्रिंग्स की तुलना करता है", "स्ट्रिंग कॉपी करता है", "स्ट्रिंग खोजता है"],
        "answer_en": "Concatenates two strings",
        "answer_hi": "दो स्ट्रिंग्स जोड़ता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What does 'strcmp()' return if strings are equal?",
        "question_hi": "अगर स्ट्रिंग्स बराबर हैं तो 'strcmp()' क्या रिटर्न करता है?",
        "options_en": ["0", "1", "-1", "Length of string"],
        "options_hi": ["0", "1", "-1", "स्ट्रिंग की लंबाई"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "Which header file is needed for string functions?",
        "question_hi": "स्ट्रिंग फंक्शन्स के लिए किस हेडर फाइल की जरूरत होती है?",
        "options_en": ["string.h", "strings.h", "str.h", "stdio.h"],
        "options_hi": ["string.h", "strings.h", "str.h", "stdio.h"],
        "answer_en": "string.h",
        "answer_hi": "string.h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is an array?",
        "question_hi": "एरे क्या है?",
        "options_en": ["Collection of same type elements", "Collection of different type elements", "Single variable", "Function"],
        "options_hi": ["समान टाइप के एलिमेंट्स का कलेक्शन", "अलग टाइप के एलिमेंट्स का कलेक्शन", "सिंगल वेरिएबल", "फंक्शन"],
        "answer_en": "Collection of same type elements",
        "answer_hi": "समान टाइप के एलिमेंट्स का कलेक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the index of first element in array?",
        "question_hi": "एरे में पहले एलिमेंट का इंडेक्स क्या है?",
        "options_en": ["0", "1", "-1", "Depends on declaration"],
        "options_hi": ["0", "1", "-1", "डिक्लेरेशन पर निर्भर"],
        "answer_en": "0",
        "answer_hi": "0",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "How to declare an array of 10 integers?",
        "question_hi": "10 इंटीजर्स की एरे कैसे डिक्लेयर करें?",
        "options_en": ["int arr[10];", "array int[10];", "int[10] arr;", "arr int[10];"],
        "options_hi": ["int arr[10];", "array int[10];", "int[10] arr;", "arr int[10];"],
        "answer_en": "int arr[10];",
        "answer_hi": "int arr[10];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is a 2D array?",
        "question_hi": "2D एरे क्या है?",
        "options_en": ["Array of arrays", "Two arrays", "Matrix", "Both a and c"],
        "options_hi": ["एरे की एरे", "दो एरे", "मैट्रिक्स", "दोनों a और c"],
        "answer_en": "Both a and c",
        "answer_hi": "दोनों a और c",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "How to declare a 3x3 integer matrix?",
        "question_hi": "3x3 इंटीजर मैट्रिक्स कैसे डिक्लेयर करें?",
        "options_en": ["int mat[3][3];", "int[3][3] mat;", "matrix int[3][3];", "int mat(3,3);"],
        "options_hi": ["int mat[3][3];", "int[3][3] mat;", "matrix int[3][3];", "int mat(3,3);"],
        "answer_en": "int mat[3][3];",
        "answer_hi": "int mat[3][3];",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is a function prototype?",
        "question_hi": "फंक्शन प्रोटोटाइप क्या है?",
        "options_en": ["Declaration of function", "Definition of function", "Call to function", "Pointer to function"],
        "options_hi": ["फंक्शन की डिक्लेरेशन", "फंक्शन की डेफिनिशन", "फंक्शन को कॉल", "फंक्शन का पॉइंटर"],
        "answer_en": "Declaration of function",
        "answer_hi": "फंक्शन की डिक्लेरेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What are function parameters?",
        "question_hi": "फंक्शन पैरामीटर्स क्या हैं?",
        "options_en": ["Input values to function", "Output values from function", "Local variables", "Global variables"],
        "options_hi": ["फंक्शन में इनपुट वैल्यूज", "फंक्शन से आउटपुट वैल्यूज", "लोकल वेरिएबल्स", "ग्लोबल वेरिएबल्स"],
        "answer_en": "Input values to function",
        "answer_hi": "फंक्शन में इनपुट वैल्यूज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is function definition?",
        "question_hi": "फंक्शन डेफिनिशन क्या है?",
        "options_en": ["Actual implementation of function", "Declaration of function", "Call to function", "Pointer to function"],
        "options_hi": ["फंक्शन का एक्चुअल इम्प्लीमेंटेशन", "फंक्शन की डिक्लेरेशन", "फंक्शन को कॉल", "फंक्शन का पॉइंटर"],
        "answer_en": "Actual implementation of function",
        "answer_hi": "फंक्शन का एक्चुअल इम्प्लीमेंटेशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is function call?",
        "question_hi": "फंक्शन कॉल क्या है?",
        "options_en": ["Executing a function", "Declaring function", "Defining function", "Prototyping function"],
        "options_hi": ["फंक्शन को एक्जीक्यूट करना", "फंक्शन डिक्लेयर करना", "फंक्शन डिफाइन करना", "फंक्शन प्रोटोटाइप बनाना"],
        "answer_en": "Executing a function",
        "answer_hi": "फंक्शन को एक्जीक्यूट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is recursion?",
        "question_hi": "रिकर्शन क्या है?",
        "options_en": ["Function calling itself", "Looping construct", "Conditional statement", "Pointer operation"],
        "options_hi": ["फंक्शन का खुद को कॉल करना", "लूपिंग कंस्ट्रक्ट", "कंडीशनल स्टेटमेंट", "पॉइंटर ऑपरेशन"],
        "answer_en": "Function calling itself",
        "answer_hi": "फंक्शन का खुद को कॉल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is a base case in recursion?",
        "question_hi": "रिकर्शन में बेस केस क्या है?",
        "options_en": ["Condition to stop recursion", "First recursive call", "Last recursive call", "Middle of recursion"],
        "options_hi": ["रिकर्शन रोकने की कंडीशन", "पहला रिकर्सिव कॉल", "आखिरी रिकर्सिव कॉल", "रिकर्शन का मध्य"],
        "answer_en": "Condition to stop recursion",
        "answer_hi": "रिकर्शन रोकने की कंडीशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is the main advantage of recursion?",
        "question_hi": "रिकर्शन का मुख्य फायदा क्या है?",
        "options_en": ["Elegant solution for some problems", "Faster execution", "Less memory", "Easier to debug"],
        "options_hi": ["कुछ प्रॉब्लम्स के लिए एलिगेंट सॉल्यूशन", "फास्टर एक्जीक्यूशन", "कम मेमोरी", "डीबग करने में आसान"],
        "answer_en": "Elegant solution for some problems",
        "answer_hi": "कुछ प्रॉब्लम्स के लिए एलिगेंट सॉल्यूशन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is a pointer?",
        "question_hi": "पॉइंटर क्या है?",
        "options_en": ["Variable that stores address", "Variable that stores value", "Function", "Array"],
        "options_hi": ["एड्रेस स्टोर करने वाला वेरिएबल", "वैल्यू स्टोर करने वाला वेरिएबल", "फंक्शन", "एरे"],
        "answer_en": "Variable that stores address",
        "answer_hi": "एड्रेस स्टोर करने वाला वेरिएबल",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is the size of pointer in 32-bit system?",
        "question_hi": "32-बिट सिस्टम में पॉइंटर का साइज क्या है?",
        "options_en": ["4 bytes", "8 bytes", "2 bytes", "Depends on data type"],
        "options_hi": ["4 बाइट्स", "8 बाइट्स", "2 बाइट्स", "डेटा टाइप पर निर्भर"],
        "answer_en": "4 bytes",
        "answer_hi": "4 बाइट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is pointer arithmetic?",
        "question_hi": "पॉइंटर अरिथमेटिक क्या है?",
        "options_en": ["Arithmetic operations on pointers", "Arithmetic using pointers", "Pointers in arithmetic", "All of the above"],
        "options_hi": ["पॉइंटर्स पर अरिथमेटिक ऑपरेशन्स", "पॉइंटर्स का उपयोग कर अरिथमेटिक", "अरिथमेटिक में पॉइंटर्स", "उपरोक्त सभी"],
        "answer_en": "Arithmetic operations on pointers",
        "answer_hi": "पॉइंटर्स पर अरिथमेटिक ऑपरेशन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What happens when you increment a pointer?",
        "question_hi": "पॉइंटर को इंक्रीमेंट करने पर क्या होता है?",
        "options_en": ["Points to next element", "Value increases by 1", "Becomes NULL", "Error occurs"],
        "options_hi": ["अगले एलिमेंट को पॉइंट करता है", "वैल्यू 1 से बढ़ती है", "NULL हो जाता है", "एरर आता है"],
        "answer_en": "Points to next element",
        "answer_hi": "अगले एलिमेंट को पॉइंट करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is a NULL pointer?",
        "question_hi": "NULL पॉइंटर क्या है?",
        "options_en": ["Pointer pointing to nothing", "Pointer with value 0", "Uninitialized pointer", "Both a and b"],
        "options_hi": ["कुछ भी पॉइंट न करने वाला पॉइंटर", "वैल्यू 0 वाला पॉइंटर", "अनइनिशियलाइज्ड पॉइंटर", "दोनों a और b"],
        "answer_en": "Both a and b",
        "answer_hi": "दोनों a और b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is a void pointer?",
        "question_hi": "void पॉइंटर क्या है?",
        "options_en": ["Pointer to any data type", "Pointer to void", "Empty pointer", "Invalid pointer"],
        "options_hi": ["किसी भी डेटा टाइप का पॉइंटर", "void का पॉइंटर", "खाली पॉइंटर", "इनवैलिड पॉइंटर"],
        "answer_en": "Pointer to any data type",
        "answer_hi": "किसी भी डेटा टाइप का पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is a function pointer?",
        "question_hi": "फंक्शन पॉइंटर क्या है?",
        "options_en": ["Pointer that points to function", "Pointer returned by function", "Pointer as function parameter", "All of the above"],
        "options_hi": ["फंक्शन को पॉइंट करने वाला पॉइंटर", "फंक्शन द्वारा रिटर्न किया गया पॉइंटर", "फंक्शन पैरामीटर के रूप में पॉइंटर", "उपरोक्त सभी"],
        "answer_en": "Pointer that points to function",
        "answer_hi": "फंक्शन को पॉइंट करने वाला पॉइंटर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is dynamic memory allocation?",
        "question_hi": "डायनामिक मेमोरी अलॉकेशन क्या है?",
        "options_en": ["Allocating memory at runtime", "Allocating memory at compile time", "Static memory allocation", "Automatic memory allocation"],
        "options_hi": ["रनटाइम में मेमोरी अलॉकेट करना", "कंपाइल टाइम में मेमोरी अलॉकेट करना", "स्टेटिक मेमोरी अलॉकेशन", "ऑटोमेटिक मेमोरी अलॉकेशन"],
        "answer_en": "Allocating memory at runtime",
        "answer_hi": "रनटाइम में मेमोरी अलॉकेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "Which function allocates memory dynamically?",
        "question_hi": "कौन सा फंक्शन डायनामिकली मेमोरी अलॉकेट करता है?",
        "options_en": ["malloc()", "calloc()", "realloc()", "All of the above"],
        "options_hi": ["malloc()", "calloc()", "realloc()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What does malloc() return if memory allocation fails?",
        "question_hi": "अगर मेमोरी अलॉकेशन फेल हो जाए तो malloc() क्या रिटर्न करता है?",
        "options_en": ["NULL", "0", "-1", "Garbage value"],
        "options_hi": ["NULL", "0", "-1", "गार्बेज वैल्यू"],
        "answer_en": "NULL",
        "answer_hi": "NULL",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is the difference between malloc() and calloc()?",
        "question_hi": "malloc() और calloc() में क्या अंतर है?",
        "options_en": ["calloc() initializes to zero", "malloc() is faster", "calloc() takes two arguments", "Both a and c"],
        "options_hi": ["calloc() जीरो से इनिशियलाइज करता है", "malloc() फास्टर है", "calloc() दो आर्गुमेंट्स लेता है", "दोनों a और c"],
        "answer_en": "Both a and c",
        "answer_hi": "दोनों a और c",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "Which function is used to free dynamically allocated memory?",
        "question_hi": "डायनामिकली अलॉकेटेड मेमोरी को फ्री करने के लिए किस फंक्शन का उपयोग किया जाता है?",
        "options_en": ["free()", "delete", "remove()", "dealloc()"],
        "options_hi": ["free()", "delete", "remove()", "dealloc()"],
        "answer_en": "free()",
        "answer_hi": "free()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is a memory leak?",
        "question_hi": "मेमोरी लीक क्या है?",
        "options_en": ["Not freeing allocated memory", "Allocating too much memory", "Using uninitialized memory", "Accessing freed memory"],
        "options_hi": ["अलॉकेटेड मेमोरी को फ्री न करना", "बहुत ज्यादा मेमोरी अलॉकेट करना", "अनइनिशियलाइज्ड मेमोरी का उपयोग", "फ्री की गई मेमोरी एक्सेस करना"],
        "answer_en": "Not freeing allocated memory",
        "answer_hi": "अलॉकेटेड मेमोरी को फ्री न करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is a structure in C?",
        "question_hi": "C में स्ट्रक्चर क्या है?",
        "options_en": ["User-defined data type", "Built-in data type", "Function", "Array"],
        "options_hi": ["यूजर-डिफाइंड डेटा टाइप", "बिल्ट-इन डेटा टाइप", "फंक्शन", "एरे"],
        "answer_en": "User-defined data type",
        "answer_hi": "यूजर-डिफाइंड डेटा टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is a structure in C?",
        "question_hi": "C में स्ट्रक्चर क्या है?",
        "options_en": ["User-defined data type", "Built-in data type", "Function", "Array"],
        "options_hi": ["यूजर-डिफाइंड डेटा टाइप", "बिल्ट-इन डेटा टाइप", "फंक्शन", "एरे"],
        "answer_en": "User-defined data type",
        "answer_hi": "यूजर-डिफाइंड डेटा टाइप",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "How to access structure members?",
        "question_hi": "स्ट्रक्चर मेंबर्स को कैसे एक्सेस करें?",
        "options_en": ["Using dot operator", "Using arrow operator", "Both a and b", "Using * operator"],
        "options_hi": ["डॉट ऑपरेटर का उपयोग कर", "एरो ऑपरेटर का उपयोग कर", "दोनों a और b", "* ऑपरेटर का उपयोग कर"],
        "answer_en": "Both a and b",
        "answer_hi": "दोनों a और b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is a union?",
        "question_hi": "यूनियन क्या है?",
        "options_en": ["Shares memory between members", "Separate memory for members", "Collection of structures", "Array of structures"],
        "options_hi": ["मेंबर्स के बीच मेमोरी शेयर करता है", "मेंबर्स के लिए अलग मेमोरी", "स्ट्रक्चर्स का कलेक्शन", "स्ट्रक्चर्स की एरे"],
        "answer_en": "Shares memory between members",
        "answer_hi": "मेंबर्स के बीच मेमोरी शेयर करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is the main difference between structure and union?",
        "question_hi": "स्ट्रक्चर और यूनियन में मुख्य अंतर क्या है?",
        "options_en": ["Memory usage", "Number of members", "Type of members", "Access method"],
        "options_hi": ["मेमोरी यूसेज", "मेंबर्स की संख्या", "मेंबर्स का टाइप", "एक्सेस मेथड"],
        "answer_en": "Memory usage",
        "answer_hi": "मेमोरी यूसेज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is enum?",
        "question_hi": "enum क्या है?",
        "options_en": ["Named integer constants", "Floating point constants", "String constants", "Character constants"],
        "options_hi": ["नामित इंटीजर कॉन्स्टेंट्स", "फ्लोटिंग पॉइंट कॉन्स्टेंट्स", "स्ट्रिंग कॉन्स्टेंट्स", "कैरेक्टर कॉन्स्टेंट्स"],
        "answer_en": "Named integer constants",
        "answer_hi": "नामित इंटीजर कॉन्स्टेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 51,
        "question_en": "What is a file in C?",
        "question_hi": "C में फाइल क्या है?",
        "options_en": ["Collection of related data", "Hardware device", "Software program", "Operating system"],
        "options_hi": ["संबंधित डेटा का संग्रह", "हार्डवेयर डिवाइस", "सॉफ्टवेयर प्रोग्राम", "ऑपरेटिंग सिस्टम"],
        "answer_en": "Collection of related data",
        "answer_hi": "संबंधित डेटा का संग्रह",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 52,
        "question_en": "Which function opens a file?",
        "question_hi": "कौन सा फंक्शन फाइल ओपन करता है?",
        "options_en": ["fopen()", "open()", "fileopen()", "openfile()"],
        "options_hi": ["fopen()", "open()", "fileopen()", "openfile()"],
        "answer_en": "fopen()",
        "answer_hi": "fopen()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 53,
        "question_en": "What mode opens file for reading?",
        "question_hi": "फाइल को पढ़ने के लिए कौन सा मोड ओपन करता है?",
        "options_en": ["r", "w", "a", "rb"],
        "options_hi": ["r", "w", "a", "rb"],
        "answer_en": "r",
        "answer_hi": "r",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 54,
        "question_en": "What mode opens file for writing?",
        "question_hi": "फाइल को लिखने के लिए कौन सा मोड ओपन करता है?",
        "options_en": ["w", "r", "a", "rb"],
        "options_hi": ["w", "r", "a", "rb"],
        "answer_en": "w",
        "answer_hi": "w",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 55,
        "question_en": "Which function closes a file?",
        "question_hi": "कौन सा फंक्शन फाइल क्लोज करता है?",
        "options_en": ["fclose()", "close()", "fileclose()", "closefile()"],
        "options_hi": ["fclose()", "close()", "fileclose()", "closefile()"],
        "answer_en": "fclose()",
        "answer_hi": "fclose()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 56,
        "question_en": "Which function reads from file?",
        "question_hi": "कौन सा फंक्शन फाइल से पढ़ता है?",
        "options_en": ["fread()", "read()", "getc()", "All of the above"],
        "options_hi": ["fread()", "read()", "getc()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 57,
        "question_en": "Which function writes to file?",
        "question_hi": "कौन सा फंक्शन फाइल में लिखता है?",
        "options_en": ["fwrite()", "write()", "putc()", "All of the above"],
        "options_hi": ["fwrite()", "write()", "putc()", "उपरोक्त सभी"],
        "answer_en": "All of the above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 58,
        "question_en": "What is the purpose of fseek()?",
        "question_hi": "fseek() का उद्देश्य क्या है?",
        "options_en": ["Move file pointer", "Seek file size", "Find file", "Close file"],
        "options_hi": ["फाइल पॉइंटर मूव करना", "फाइल साइज ढूंढना", "फाइल ढूंढना", "फाइल बंद करना"],
        "answer_en": "Move file pointer",
        "answer_hi": "फाइल पॉइंटर मूव करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 59,
        "question_en": "What does feof() check?",
        "question_hi": "feof() क्या चेक करता है?",
        "options_en": ["End of file", "Beginning of file", "File error", "File size"],
        "options_hi": ["फाइल का अंत", "फाइल की शुरुआत", "फाइल एरर", "फाइल साइज"],
        "answer_en": "End of file",
        "answer_hi": "फाइल का अंत",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 60,
        "question_en": "What is a preprocessor directive?",
        "question_hi": "प्रीप्रोसेसर डायरेक्टिव क्या है?",
        "options_en": ["Instructions to compiler", "Instructions to CPU", "Instructions to OS", "Instructions to user"],
        "options_hi": ["कंपाइलर के लिए निर्देश", "CPU के लिए निर्देश", "OS के लिए निर्देश", "यूजर के लिए निर्देश"],
        "answer_en": "Instructions to compiler",
        "answer_hi": "कंपाइलर के लिए निर्देश",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 61,
        "question_en": "Which symbol starts preprocessor directives?",
        "question_hi": "प्रीप्रोसेसर डायरेक्टिव किस सिंबल से शुरू होते हैं?",
        "options_en": ["#", "@", "$", "%"],
        "options_hi": ["#", "@", "$", "%"],
        "answer_en": "#",
        "answer_hi": "#",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 62,
        "question_en": "What does #include do?",
        "question_hi": "#include क्या करता है?",
        "options_en": ["Includes header file", "Defines macro", "Conditional compilation", "Error handling"],
        "options_hi": ["हेडर फाइल इनक्लूड करता है", "मैक्रो डिफाइन करता है", "कंडीशनल कंपाइलेशन", "एरर हैंडलिंग"],
        "answer_en": "Includes header file",
        "answer_hi": "हेडर फाइल इनक्लूड करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 63,
        "question_en": "What does #define do?",
        "question_hi": "#define क्या करता है?",
        "options_en": ["Defines macro", "Includes file", "Conditional compilation", "Undefines macro"],
        "options_hi": ["मैक्रो डिफाइन करता है", "फाइल इनक्लूड करता है", "कंडीशनल कंपाइलेशन", "मैक्रो अनडिफाइन करता है"],
        "answer_en": "Defines macro",
        "answer_hi": "मैक्रो डिफाइन करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 64,
        "question_en": "What is a macro?",
        "question_hi": "मैक्रो क्या है?",
        "options_en": ["Symbolic name for code fragment", "Function", "Variable", "Constant"],
        "options_hi": ["कोड फ्रैगमेंट के लिए सिंबोलिक नाम", "फंक्शन", "वेरिएबल", "कॉन्स्टेंट"],
        "answer_en": "Symbolic name for code fragment",
        "answer_hi": "कोड फ्रैगमेंट के लिए सिंबोलिक नाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 65,
        "question_en": "What is conditional compilation?",
        "question_hi": "कंडीशनल कंपाइलेशन क्या है?",
        "options_en": ["Compiling code based on conditions", "Conditional statements", "Loop conditions", "Function conditions"],
        "options_hi": ["कंडीशंस के आधार पर कोड कंपाइल करना", "कंडीशनल स्टेटमेंट्स", "लूप कंडीशंस", "फंक्शन कंडीशंस"],
        "answer_en": "Compiling code based on conditions",
        "answer_hi": "कंडीशंस के आधार पर कोड कंपाइल करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 66,
        "question_en": "Which directive is used for conditional compilation?",
        "question_hi": "कंडीशनल कंपाइलेशन के लिए किस डायरेक्टिव का उपयोग किया जाता है?",
        "options_en": ["#ifdef", "#include", "#define", "#pragma"],
        "options_hi": ["#ifdef", "#include", "#define", "#pragma"],
        "answer_en": "#ifdef",
        "answer_hi": "#ifdef",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 67,
        "question_en": "What does #ifdef check?",
        "question_hi": "#ifdef क्या चेक करता है?",
        "options_en": ["If macro is defined", "If file exists", "If condition is true", "If variable exists"],
        "options_hi": ["क्या मैक्रो डिफाइंड है", "क्या फाइल एक्सिस्ट करती है", "क्या कंडीशन ट्रू है", "क्या वेरिएबल एक्सिस्ट करता है"],
        "answer_en": "If macro is defined",
        "answer_hi": "क्या मैक्रो डिफाइंड है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 68,
        "question_en": "What is #pragma used for?",
        "question_hi": "#pragma किस लिए उपयोग किया जाता है?",
        "options_en": ["Implementation-specific features", "Including files", "Defining macros", "Conditional compilation"],
        "options_hi": ["इम्प्लीमेंटेशन-स्पेसिफिक फीचर्स", "फाइल्स इनक्लूड करना", "मैक्रोस डिफाइन करना", "कंडीशनल कंपाइलेशन"],
        "answer_en": "Implementation-specific features",
        "answer_hi": "इम्प्लीमेंटेशन-स्पेसिफिक फीचर्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 69,
        "question_en": "What is #error used for?",
        "question_hi": "#error किस लिए उपयोग किया जाता है?",
        "options_en": ["Generate compile-time error", "Handle runtime error", "Ignore errors", "Log errors"],
        "options_hi": ["कंपाइल-टाइम एरर जेनरेट करना", "रनटाइम एरर हैंडल करना", "एरर्स इग्नोर करना", "एरर्स लॉग करना"],
        "answer_en": "Generate compile-time error",
        "answer_hi": "कंपाइल-टाइम एरर जेनरेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 70,
        "question_en": "What is command line argument?",
        "question_hi": "कमांड लाइन आर्गुमेंट क्या है?",
        "options_en": ["Arguments passed to program", "Arguments in function", "Command arguments", "All of the above"],
        "options_hi": ["प्रोग्राम में पास किए गए आर्गुमेंट्स", "फंक्शन में आर्गुमेंट्स", "कमांड आर्गुमेंट्स", "उपरोक्त सभी"],
        "answer_en": "Arguments passed to program",
        "answer_hi": "प्रोग्राम में पास किए गए आर्गुमेंट्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 71,
        "question_en": "What is argc?",
        "question_hi": "argc क्या है?",
        "options_en": ["Argument count", "Argument character", "Argument constant", "Argument container"],
        "options_hi": ["आर्गुमेंट काउंट", "आर्गुमेंट कैरेक्टर", "आर्गुमेंट कॉन्स्टेंट", "आर्गुमेंट कंटेनर"],
        "answer_en": "Argument count",
        "answer_hi": "आर्गुमेंट काउंट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 72,
        "question_en": "What is argv?",
        "question_hi": "argv क्या है?",
        "options_en": ["Argument vector", "Argument value", "Argument variable", "Argument void"],
        "options_hi": ["आर्गुमेंट वेक्टर", "आर्गुमेंट वैल्यू", "आर्गुमेंट वेरिएबल", "आर्गुमेंट void"],
        "answer_en": "Argument vector",
        "answer_hi": "आर्गुमेंट वेक्टर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 73,
        "question_en": "What is the minimum value of argc?",
        "question_hi": "argc की न्यूनतम वैल्यू क्या है?",
        "options_en": ["1", "0", "-1", "2"],
        "options_hi": ["1", "0", "-1", "2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 74,
        "question_en": "What does argv[0] contain?",
        "question_hi": "argv[0] में क्या होता है?",
        "options_en": ["Program name", "First argument", "Last argument", "Argument count"],
        "options_hi": ["प्रोग्राम नाम", "पहला आर्गुमेंट", "आखिरी आर्गुमेंट", "आर्गुमेंट काउंट"],
        "answer_en": "Program name",
        "answer_hi": "प्रोग्राम नाम",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 75,
        "question_en": "What is typedef?",
        "question_hi": "typedef क्या है?",
        "options_en": ["Create new type name", "Define new variable", "Type checking", "Type conversion"],
        "options_hi": ["नया टाइप नाम बनाना", "नया वेरिएबल डिफाइन करना", "टाइप चेकिंग", "टाइप कन्वर्जन"],
        "answer_en": "Create new type name",
        "answer_hi": "नया टाइप नाम बनाना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 76,
        "question_en": "What is the purpose of const keyword?",
        "question_hi": "const कीवर्ड का उद्देश्य क्या है?",
        "options_en": ["Make variable read-only", "Make variable constant", "Both a and b", "Make variable global"],
        "options_hi": ["वेरिएबल को रीड-ओनली बनाना", "वेरिएबल को कॉन्स्टेंट बनाना", "दोनों a और b", "वेरिएबल को ग्लोबल बनाना"],
        "answer_en": "Both a and b",
        "answer_hi": "दोनों a और b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 77,
        "question_en": "What is volatile keyword?",
        "question_hi": "volatile कीवर्ड क्या है?",
        "options_en": ["Variable may change unexpectedly", "Variable is constant", "Variable is important", "Variable is temporary"],
        "options_hi": ["वेरिएबल अनएक्सपेक्टेडली चेंज हो सकता है", "वेरिएबल कॉन्स्टेंट है", "वेरिएबल इम्पोर्टेन्ट है", "वेरिएबल टेंपरेरी है"],
        "answer_en": "Variable may change unexpectedly",
        "answer_hi": "वेरिएबल अनएक्सपेक्टेडली चेंज हो सकता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 78,
        "question_en": "What is bit field?",
        "question_hi": "बिट फील्ड क्या है?",
        "options_en": ["Structure member with specified bits", "Bit array", "Bit pointer", "Bit variable"],
        "options_hi": ["निर्दिष्ट बिट्स वाला स्ट्रक्चर मेंबर", "बिट एरे", "बिट पॉइंटर", "बिट वेरिएबल"],
        "answer_en": "Structure member with specified bits",
        "answer_hi": "निर्दिष्ट बिट्स वाला स्ट्रक्चर मेंबर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 79,
        "question_en": "What is the purpose of bit fields?",
        "question_hi": "बिट फील्ड्स का उद्देश्य क्या है?",
        "options_en": ["Save memory", "Increase speed", "Improve readability", "All of the above"],
        "options_hi": ["मेमोरी सेव करना", "स्पीड बढ़ाना", "रीडेबिलिटी इम्प्रूव करना", "उपरोक्त सभी"],
        "answer_en": "Save memory",
        "answer_hi": "मेमोरी सेव करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 80,
        "question_en": "What is a library function?",
        "question_hi": "लाइब्रेरी फंक्शन क्या है?",
        "options_en": ["Predefined function", "User-defined function", "System function", "All of the above"],
        "options_hi": ["प्रीडिफाइंड फंक्शन", "यूजर-डिफाइंड फंक्शन", "सिस्टम फंक्शन", "उपरोक्त सभी"],
        "answer_en": "Predefined function",
        "answer_hi": "प्रीडिफाइंड फंक्शन",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 81,
        "question_en": "What is the purpose of stdlib.h?",
        "question_hi": "stdlib.h का उद्देश्य क्या है?",
        "options_en": ["General utilities", "Standard I/O", "Mathematics", "String operations"],
        "options_hi": ["जनरल यूटिलिटीज", "स्टैण्डर्ड I/O", "मैथमेटिक्स", "स्ट्रिंग ऑपरेशंस"],
        "answer_en": "General utilities",
        "answer_hi": "जनरल यूटिलिटीज",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 82,
        "question_en": "What function converts string to integer?",
        "question_hi": "कौन सा फंक्शन स्ट्रिंग को इंटीजर में कन्वर्ट करता है?",
        "options_en": ["atoi()", "itoa()", "atof()", "ftoa()"],
        "options_hi": ["atoi()", "itoa()", "atof()", "ftoa()"],
        "answer_en": "atoi()",
        "answer_hi": "atoi()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 83,
        "question_en": "What function converts string to float?",
        "question_hi": "कौन सा फंक्शन स्ट्रिंग को फ्लोट में कन्वर्ट करता है?",
        "options_en": ["atof()", "atoi()", "ftoa()", "itoa()"],
        "options_hi": ["atof()", "atoi()", "ftoa()", "itoa()"],
        "answer_en": "atof()",
        "answer_hi": "atof()",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 84,
        "question_en": "What is exit() function used for?",
        "question_hi": "exit() फंक्शन किस लिए उपयोग किया जाता है?",
        "options_en": ["Terminate program", "Exit loop", "Exit function", "Exit file"],
        "options_hi": ["प्रोग्राम टर्मिनेट करना", "लूप से बाहर निकलना", "फंक्शन से बाहर निकलना", "फाइल से बाहर निकलना"],
        "answer_en": "Terminate program",
        "answer_hi": "प्रोग्राम टर्मिनेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 85,
        "question_en": "What does rand() function do?",
        "question_hi": "rand() फंक्शन क्या करता है?",
        "options_en": ["Generate random number", "Round number", "Randomize array", "Random seed"],
        "options_hi": ["रैंडम नंबर जेनरेट करना", "नंबर राउंड करना", "एरे रैंडमाइज करना", "रैंडम सीड"],
        "answer_en": "Generate random number",
        "answer_hi": "रैंडम नंबर जेनरेट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 86,
        "question_en": "What is the purpose of srand()?",
        "question_hi": "srand() का उद्देश्य क्या है?",
        "options_en": ["Seed random number generator", "Generate random number", "Sort random numbers", "Store random numbers"],
        "options_hi": ["रैंडम नंबर जेनरेटर को सीड देना", "रैंडम नंबर जेनरेट करना", "रैंडम नंबर्स सॉर्ट करना", "रैंडम नंबर्स स्टोर करना"],
        "answer_en": "Seed random number generator",
        "answer_hi": "रैंडम नंबर जेनरेटर को सीड देना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 87,
        "question_en": "What is the purpose of time() function?",
        "question_hi": "time() फंक्शन का उद्देश्य क्या है?",
        "options_en": ["Get current time", "Set time", "Measure time", "Convert time"],
        "options_hi": ["करंट टाइम प्राप्त करना", "टाइम सेट करना", "टाइम मापना", "टाइम कन्वर्ट करना"],
        "answer_en": "Get current time",
        "answer_hi": "करंट टाइम प्राप्त करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 88,
        "question_en": "What header file is needed for time()?",
        "question_hi": "time() के लिए किस हेडर फाइल की जरूरत होती है?",
        "options_en": ["time.h", "stdlib.h", "stdio.h", "ctime.h"],
        "options_hi": ["time.h", "stdlib.h", "stdio.h", "ctime.h"],
        "answer_en": "time.h",
        "answer_hi": "time.h",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 89,
        "question_en": "What is the purpose of ctype.h?",
        "question_hi": "ctype.h का उद्देश्य क्या है?",
        "options_en": ["Character testing", "Character conversion", "Both a and b", "Character display"],
        "options_hi": ["कैरेक्टर टेस्टिंग", "कैरेक्टर कन्वर्जन", "दोनों a और b", "कैरेक्टर डिस्प्ले"],
        "answer_en": "Both a and b",
        "answer_hi": "दोनों a और b",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 90,
        "question_en": "What does isalpha() check?",
        "question_hi": "isalpha() क्या चेक करता है?",
        "options_en": ["If character is alphabet", "If character is digit", "If character is space", "If character is punctuation"],
        "options_hi": ["क्या कैरेक्टर अल्फाबेट है", "क्या कैरेक्टर डिजिट है", "क्या कैरेक्टर स्पेस है", "क्या कैरेक्टर पंक्चुएशन है"],
        "answer_en": "If character is alphabet",
        "answer_hi": "क्या कैरेक्टर अल्फाबेट है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 91,
        "question_en": "What does isdigit() check?",
        "question_hi": "isdigit() क्या चेक करता है?",
        "options_en": ["If character is digit", "If character is alphabet", "If character is space", "If character is punctuation"],
        "options_hi": ["क्या कैरेक्टर डिजिट है", "क्या कैरेक्टर अल्फाबेट है", "क्या कैरेक्टर स्पेस है", "क्या कैरेक्टर पंक्चुएशन है"],
        "answer_en": "If character is digit",
        "answer_hi": "क्या कैरेक्टर डिजिट है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 92,
        "question_en": "What does toupper() do?",
        "question_hi": "toupper() क्या करता है?",
        "options_en": ["Convert to uppercase", "Convert to lowercase", "Test uppercase", "Test lowercase"],
        "options_hi": ["अपरकेस में कन्वर्ट करना", "लोअरकेस में कन्वर्ट करना", "अपरकेस टेस्ट करना", "लोअरकेस टेस्ट करना"],
        "answer_en": "Convert to uppercase",
        "answer_hi": "अपरकेस में कन्वर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 93,
        "question_en": "What does tolower() do?",
        "question_hi": "tolower() क्या करता है?",
        "options_en": ["Convert to lowercase", "Convert to uppercase", "Test lowercase", "Test uppercase"],
        "options_hi": ["लोअरकेस में कन्वर्ट करना", "अपरकेस में कन्वर्ट करना", "लोअरकेस टेस्ट करना", "अपरकेस टेस्ट करना"],
        "answer_en": "Convert to lowercase",
        "answer_hi": "लोअरकेस में कन्वर्ट करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 94,
        "question_en": "What is the purpose of math.h?",
        "question_hi": "math.h का उद्देश्य क्या है?",
        "options_en": ["Mathematical functions", "Memory allocation", "String operations", "File operations"],
        "options_hi": ["मैथमेटिकल फंक्शन्स", "मेमोरी अलॉकेशन", "स्ट्रिंग ऑपरेशंस", "फाइल ऑपरेशंस"],
        "answer_en": "Mathematical functions",
        "answer_hi": "मैथमेटिकल फंक्शन्स",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 95,
        "question_en": "What does sqrt() function do?",
        "question_hi": "sqrt() फंक्शन क्या करता है?",
        "options_en": ["Square root", "Square", "Power", "Logarithm"],
        "options_hi": ["स्क्वायर रूट", "स्क्वायर", "पावर", "लोगारिथम"],
        "answer_en": "Square root",
        "answer_hi": "स्क्वायर रूट",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 96,
        "question_en": "What does pow() function do?",
        "question_hi": "pow() फंक्शन क्या करता है?",
        "options_en": ["Power", "Square root", "Absolute value", "Exponential"],
        "options_hi": ["पावर", "स्क्वायर रूट", "एब्सोल्यूट वैल्यू", "एक्सपोनेंशियल"],
        "answer_en": "Power",
        "answer_hi": "पावर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 97,
        "question_en": "What does abs() function do?",
        "question_hi": "abs() फंक्शन क्या करता है?",
        "options_en": ["Absolute value", "Square root", "Power", "Logarithm"],
        "options_hi": ["एब्सोल्यूट वैल्यू", "स्क्वायर रूट", "पावर", "लोगारिथम"],
        "answer_en": "Absolute value",
        "answer_hi": "एब्सोल्यूट वैल्यू",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 98,
        "question_en": "What does ceil() function do?",
        "question_hi": "ceil() फंक्शन क्या करता है?",
        "options_en": ["Round up", "Round down", "Round to nearest", "Truncate"],
        "options_hi": ["ऊपर राउंड करना", "नीचे राउंड करना", "निकटतम राउंड करना", "ट्रंकेट करना"],
        "answer_en": "Round up",
        "answer_hi": "ऊपर राउंड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 99,
        "question_en": "What does floor() function do?",
        "question_hi": "floor() फंक्शन क्या करता है?",
        "options_en": ["Round down", "Round up", "Round to nearest", "Truncate"],
        "options_hi": ["नीचे राउंड करना", "ऊपर राउंड करना", "निकटतम राउंड करना", "ट्रंकेट करना"],
        "answer_en": "Round down",
        "answer_hi": "नीचे राउंड करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 100,
        "question_en": "What is the purpose of conio.h?",
        "question_hi": "conio.h का उद्देश्य क्या है?",
        "options_en": ["Console I/O", "File I/O", "String operations", "Memory operations"],
        "options_hi": ["कंसोल I/O", "फाइल I/O", "स्ट्रिंग ऑपरेशंस", "मेमोरी ऑपरेशंस"],
        "answer_en": "Console I/O",
        "answer_hi": "कंसोल I/O",
        "attempted": false,
        "selected": ""
    }
];
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