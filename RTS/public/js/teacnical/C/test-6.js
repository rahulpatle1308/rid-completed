const questions =[
  {
    "num": 1,
    "question_en": "What is the size of 'int' data type in 32-bit C compiler typically?",
    "question_hi": "32-bit C कंपाइलर में 'int' डेटा टाइप का आकार आमतौर पर कितना होता है?",
    "options_en": ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
    "options_hi": ["2 बाइट्स", "4 बाइट्स", "8 बाइट्स", "कंपाइलर पर निर्भर"],
    "answer_en": "4 bytes",
    "answer_hi": "4 बाइट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which loop executes at least once in C?",
    "question_hi": "C में कौन सा लूप कम से कम एक बार जरूर चलता है?",
    "options_en": ["for", "while", "do-while", "if-else"],
    "options_hi": ["for", "while", "do-while", "if-else"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the use of 'malloc' function in C?",
    "question_hi": "C में 'malloc' फ़ंक्शन का उपयोग क्या है?",
    "options_en": ["Memory allocation", "Mathematical calculation", "Print output", "Free memory"],
    "options_hi": ["मेमोरी आवंटन", "गणितीय गणना", "आउटपुट प्रिंट करना", "मेमोरी मुक्त करना"],
    "answer_en": "Memory allocation",
    "answer_hi": "मेमोरी आवंटन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which header file is required for using printf() and scanf()?",
    "question_hi": "printf() और scanf() के उपयोग के लिए कौन सी हेडर फ़ाइल आवश्यक है?",
    "options_en": ["stdio.h", "conio.h", "stdlib.h", "math.h"],
    "options_hi": ["stdio.h", "conio.h", "stdlib.h", "math.h"],
    "answer_en": "stdio.h",
    "answer_hi": "stdio.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What will be the output: int x = 5; printf(\"%d\", x++);",
    "question_hi": "आउटपुट क्या होगा: int x = 5; printf(\"%d\", x++);",
    "options_en": ["5", "6", "0", "Error"],
    "options_hi": ["5", "6", "0", "त्रुटि"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which operator is used to access structure members?",
    "question_hi": "स्ट्रक्चर सदस्यों को एक्सेस करने के लिए किस ऑपरेटर का उपयोग होता है?",
    "options_en": [".", "->", "::", ":"],
    "options_hi": [".", "->", "::", ":"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does 'NULL' represent in C?",
    "question_hi": "C में 'NULL' क्या दर्शाता है?",
    "options_en": ["Zero", "Empty pointer", "End of string", "All of these"],
    "options_hi": ["शून्य", "खाली पॉइंटर", "स्ट्रिंग का अंत", "ये सभी"],
    "answer_en": "Empty pointer",
    "answer_hi": "खाली पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is not a valid storage class in C?",
    "question_hi": "C में कौन सा स्टोरेज क्लास वैध नहीं है?",
    "options_en": ["auto", "register", "extern", "dynamic"],
    "options_hi": ["auto", "register", "extern", "dynamic"],
    "answer_en": "dynamic",
    "answer_hi": "dynamic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the default return type of a function in C?",
    "question_hi": "C में फ़ंक्शन का डिफ़ॉल्ट रिटर्न टाइप क्या होता है?",
    "options_en": ["int", "void", "float", "char"],
    "options_hi": ["int", "void", "float", "char"],
    "answer_en": "int",
    "answer_hi": "int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which function converts string to integer in C?",
    "question_hi": "कौन सा फ़ंक्शन स्ट्रिंग को इंटीजर में बदलता है?",
    "options_en": ["atoi()", "itoa()", "strtol()", "Both a and c"],
    "options_hi": ["atoi()", "itoa()", "strtol()", "a और c दोनों"],
    "answer_en": "Both a and c",
    "answer_hi": "a और c दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the output of: printf(\"%d\", 5 + 2 * 3);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 5 + 2 * 3);",
    "options_en": ["11", "21", "16", "10"],
    "options_hi": ["11", "21", "16", "10"],
    "answer_en": "11",
    "answer_hi": "11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which is used to terminate a case in switch statement?",
    "question_hi": "switch स्टेटमेंट में case को टर्मिनेट करने के लिए क्या उपयोग होता है?",
    "options_en": ["break", "continue", "exit", "return"],
    "options_hi": ["break", "continue", "exit", "return"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is a pointer in C?",
    "question_hi": "C में पॉइंटर क्या है?",
    "options_en": ["Variable storing address", "Variable storing value", "Function", "Data type"],
    "options_hi": ["एड्रेस स्टोर करने वाला वेरिएबल", "वैल्यू स्टोर करने वाला वेरिएबल", "फ़ंक्शन", "डेटा टाइप"],
    "answer_en": "Variable storing address",
    "answer_hi": "एड्रेस स्टोर करने वाला वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which is not a valid variable name in C?",
    "question_hi": "C में कौन सा वेरिएबल नाम वैध नहीं है?",
    "options_en": ["_temp", "2var", "var_name", "VarName"],
    "options_hi": ["_temp", "2var", "var_name", "VarName"],
    "answer_en": "2var",
    "answer_hi": "2var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does '++' operator do?",
    "question_hi": "'++' ऑपरेटर क्या करता है?",
    "options_en": ["Increment by 1", "Decrement by 1", "Multiply by 2", "Divide by 2"],
    "options_hi": ["1 बढ़ाता है", "1 घटाता है", "2 से गुणा करता है", "2 से भाग देता है"],
    "answer_en": "Increment by 1",
    "answer_hi": "1 बढ़ाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the output: printf(\"%c\", 'A' + 1);",
    "question_hi": "आउटपुट क्या है: printf(\"%c\", 'A' + 1);",
    "options_en": ["B", "66", "A", "Error"],
    "options_hi": ["B", "66", "A", "त्रुटि"],
    "answer_en": "B",
    "answer_hi": "B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function reads a character from keyboard?",
    "question_hi": "कौन सा फ़ंक्शन कीबोर्ड से एक कैरेक्टर पढ़ता है?",
    "options_en": ["getchar()", "putchar()", "gets()", "scanf()"],
    "options_hi": ["getchar()", "putchar()", "gets()", "scanf()"],
    "answer_en": "getchar()",
    "answer_hi": "getchar()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the size of 'char' in C?",
    "question_hi": "C में 'char' का आकार कितना होता है?",
    "options_en": ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    "options_hi": ["1 बाइट", "2 बाइट्स", "4 बाइट्स", "8 बाइट्स"],
    "answer_en": "1 byte",
    "answer_hi": "1 बाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which is used to allocate memory for array of 10 integers?",
    "question_hi": "10 इंटीजर्स के array के लिए मेमोरी allocate करने के लिए क्या उपयोग होता है?",
    "options_en": ["malloc(10)", "malloc(10*sizeof(int))", "calloc(10)", "Both b and c"],
    "options_hi": ["malloc(10)", "malloc(10*sizeof(int))", "calloc(10)", "b और c दोनों"],
    "answer_en": "Both b and c",
    "answer_hi": "b और c दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does 'scanf()' return?",
    "question_hi": "'scanf()' क्या रिटर्न करता है?",
    "options_en": ["Number of successfully read items", "0", "1", "Address"],
    "options_hi": ["सफलता से पढ़े गए आइटम्स की संख्या", "0", "1", "एड्रेस"],
    "answer_en": "Number of successfully read items",
    "answer_hi": "सफलता से पढ़े गए आइटम्स की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is a dangling pointer?",
    "question_hi": "डैंगलिंग पॉइंटर क्या है?",
    "options_en": ["Pointer pointing to deleted memory", "Null pointer", "Wild pointer", "Both a and c"],
    "options_hi": ["डिलीट की गई मेमोरी की ओर इशारा करने वाला पॉइंटर", "नल पॉइंटर", "वाइल्ड पॉइंटर", "a और c दोनों"],
    "answer_en": "Pointer pointing to deleted memory",
    "answer_hi": "डिलीट की गई मेमोरी की ओर इशारा करने वाला पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which escape sequence is for newline?",
    "question_hi": "न्यूलाइन के लिए कौन सा एस्केप सीक्वेंस है?",
    "options_en": ["\\n", "\\t", "\\r", "\\b"],
    "options_hi": ["\\n", "\\t", "\\r", "\\b"],
    "answer_en": "\\n",
    "answer_hi": "\\n",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the output: int a=10,b=5; printf(\"%d\", a>b?a:b);",
    "question_hi": "आउटपुट क्या है: int a=10,b=5; printf(\"%d\", a>b?a:b);",
    "options_en": ["10", "5", "0", "1"],
    "options_hi": ["10", "5", "0", "1"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which is not a keyword in C?",
    "question_hi": "C में कौन सा कीवर्ड नहीं है?",
    "options_en": ["auto", "main", "register", "typedef"],
    "options_hi": ["auto", "main", "register", "typedef"],
    "answer_en": "main",
    "answer_hi": "main",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the purpose of 'free()' function?",
    "question_hi": "'free()' फ़ंक्शन का उद्देश्य क्या है?",
    "options_en": ["Deallocate memory", "Allocate memory", "Clear screen", "Exit program"],
    "options_hi": ["मेमोरी डी-एलोकेट करना", "मेमोरी एलोकेट करना", "स्क्रीन क्लियर करना", "प्रोग्राम बंद करना"],
    "answer_en": "Deallocate memory",
    "answer_hi": "मेमोरी डी-एलोकेट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the output: printf(\"%d\", sizeof('A'));",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", sizeof('A'));",
    "options_en": ["1", "2", "4", "8"],
    "options_hi": ["1", "2", "4", "8"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which header file contains 'pow()' function?",
    "question_hi": "'pow()' फ़ंक्शन किस हेडर फ़ाइल में है?",
    "options_en": ["math.h", "stdio.h", "stdlib.h", "conio.h"],
    "options_hi": ["math.h", "stdio.h", "stdlib.h", "conio.h"],
    "answer_en": "math.h",
    "answer_hi": "math.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is a static variable?",
    "question_hi": "स्टैटिक वेरिएबल क्या है?",
    "options_en": ["Retains value between function calls", "Changes every time", "Global variable", "Constant"],
    "options_hi": ["फ़ंक्शन कॉल्स के बीच वैल्यू रिटेन करता है", "हर बार बदलता है", "ग्लोबल वेरिएबल", "कॉन्स्टेंट"],
    "answer_en": "Retains value between function calls",
    "answer_hi": "फ़ंक्शन कॉल्स के बीच वैल्यू रिटेन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output: int arr[3]={1,2,3}; printf(\"%d\", arr[3]);",
    "question_hi": "आउटपुट क्या है: int arr[3]={1,2,3}; printf(\"%d\", arr[3]);",
    "options_en": ["Garbage value", "3", "0", "Error"],
    "options_hi": ["गार्बेज वैल्यू", "3", "0", "त्रुटि"],
    "answer_en": "Garbage value",
    "answer_hi": "गार्बेज वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which operator has highest precedence?",
    "question_hi": "किस ऑपरेटर की प्रीसेडेंस सबसे ज्यादा है?",
    "options_en": ["()", "++", "*", "+"],
    "options_hi": ["()", "++", "*", "+"],
    "answer_en": "()",
    "answer_hi": "()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the output: printf(\"%d\", 10 & 5);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 & 5);",
    "options_en": ["0", "15", "10", "5"],
    "options_hi": ["0", "15", "10", "5"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which is used for formatted output to a string?",
    "question_hi": "स्ट्रिंग में फॉर्मेटेड आउटपुट के लिए क्या उपयोग होता है?",
    "options_en": ["sprintf()", "printf()", "fprintf()", "scanf()"],
    "options_hi": ["sprintf()", "printf()", "fprintf()", "scanf()"],
    "answer_en": "sprintf()",
    "answer_hi": "sprintf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'argv' in main function?",
    "question_hi": "main फ़ंक्शन में 'argv' क्या है?",
    "options_en": ["Array of command line arguments", "Argument value", "Variable", "Function"],
    "options_hi": ["कमांड लाइन आर्ग्युमेंट्स की एरे", "आर्ग्युमेंट वैल्यू", "वेरिएबल", "फ़ंक्शन"],
    "answer_en": "Array of command line arguments",
    "answer_hi": "कमांड लाइन आर्ग्युमेंट्स की एरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is not a valid file opening mode?",
    "question_hi": "कौन सा वैध फ़ाइल ओपनिंग मोड नहीं है?",
    "options_en": ["r", "w", "a", "z"],
    "options_hi": ["r", "w", "a", "z"],
    "answer_en": "z",
    "answer_hi": "z",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the output: printf(\"%d\", 10 >> 1);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 >> 1);",
    "options_en": ["5", "10", "20", "0"],
    "options_hi": ["5", "10", "20", "0"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of 'typedef'?",
    "question_hi": "'typedef' का उद्देश्य क्या है?",
    "options_en": ["Create alias for data types", "Define function", "Declare variable", "Allocate memory"],
    "options_hi": ["डेटा टाइप्स के लिए एलियास बनाना", "फ़ंक्शन डिफाइन करना", "वेरिएबल डिक्लेअर करना", "मेमोरी allocate करना"],
    "answer_en": "Create alias for data types",
    "answer_hi": "डेटा टाइप्स के लिए एलियास बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is recursion?",
    "question_hi": "रिकर्सन क्या है?",
    "options_en": ["Function calling itself", "Loop", "Condition", "Pointer"],
    "options_hi": ["फ़ंक्शन का खुद को कॉल करना", "लूप", "कंडीशन", "पॉइंटर"],
    "answer_en": "Function calling itself",
    "answer_hi": "फ़ंक्शन का खुद को कॉल करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the output: int x=10; int *p=&x; printf(\"%d\", *p);",
    "question_hi": "आउटपुट क्या है: int x=10; int *p=&x; printf(\"%d\", *p);",
    "options_en": ["10", "Address of x", "0", "Error"],
    "options_hi": ["10", "x का एड्रेस", "0", "त्रुटि"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function compares two strings?",
    "question_hi": "कौन सा फ़ंक्शन दो स्ट्रिंग्स की तुलना करता है?",
    "options_en": ["strcmp()", "strcpy()", "strlen()", "strcat()"],
    "options_hi": ["strcmp()", "strcpy()", "strlen()", "strcat()"],
    "answer_en": "strcmp()",
    "answer_hi": "strcmp()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'const' used for?",
    "question_hi": "'const' का उपयोग किसके लिए होता है?",
    "options_en": ["To make variable read-only", "To allocate memory", "To free memory", "To print"],
    "options_hi": ["वेरिएबल को रीड-ओनली बनाने के लिए", "मेमोरी allocate करने के लिए", "मेमोरी फ्री करने के लिए", "प्रिंट करने के लिए"],
    "answer_en": "To make variable read-only",
    "answer_hi": "वेरिएबल को रीड-ओनली बनाने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output: printf(\"%d\", sizeof(int*));",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", sizeof(int*));",
    "options_en": ["4 or 8", "2", "1", "16"],
    "options_hi": ["4 या 8", "2", "1", "16"],
    "answer_en": "4 or 8",
    "answer_hi": "4 या 8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Which is used to skip current iteration of loop?",
    "question_hi": "लूप की करंट इटरेशन को छोड़ने के लिए क्या उपयोग होता है?",
    "options_en": ["continue", "break", "goto", "return"],
    "options_hi": ["continue", "break", "goto", "return"],
    "answer_en": "continue",
    "answer_hi": "continue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output: int a=10; printf(\"%d\", a++ + ++a);",
    "question_hi": "आउटपुट क्या है: int a=10; printf(\"%d\", a++ + ++a);",
    "options_en": ["22", "21", "20", "Undefined"],
    "options_hi": ["22", "21", "20", "अपरिभाषित"],
    "answer_en": "Undefined",
    "answer_hi": "अपरिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does 'calloc()' initialize memory to?",
    "question_hi": "'calloc()' मेमोरी को किससे इनिशियलाइज़ करता है?",
    "options_en": ["0", "1", "Garbage", "NULL"],
    "options_hi": ["0", "1", "गार्बेज", "NULL"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'volatile' keyword used for?",
    "question_hi": "'volatile' कीवर्ड का उपयोग किसके लिए होता है?",
    "options_en": ["To prevent compiler optimization", "To make variable constant", "For speed", "For memory"],
    "options_hi": ["कंपाइलर ऑप्टिमाइज़ेशन रोकने के लिए", "वेरिएबल को कॉन्स्टेंट बनाने के लिए", "स्पीड के लिए", "मेमोरी के लिए"],
    "answer_en": "To prevent compiler optimization",
    "answer_hi": "कंपाइलर ऑप्टिमाइज़ेशन रोकने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which is not a valid C comment?",
    "question_hi": "कौन सी वैध C कमेंट नहीं है?",
    "options_en": ["// comment", "/* comment */", "# comment", "/* comment"],
    "options_hi": ["// comment", "/* comment */", "# comment", "/* comment"],
    "answer_en": "# comment",
    "answer_hi": "# comment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the output: printf(\"%d\", ~5);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", ~5);",
    "options_en": ["-6", "5", "6", "10"],
    "options_hi": ["-6", "5", "6", "10"],
    "answer_en": "-6",
    "answer_hi": "-6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'union' in C?",
    "question_hi": "C में 'यूनियन' क्या है?",
    "options_en": ["Shared memory for members", "Separate memory", "Function", "Loop"],
    "options_hi": ["सदस्यों के लिए शेयर्ड मेमोरी", "अलग मेमोरी", "फ़ंक्शन", "लूप"],
    "answer_en": "Shared memory for members",
    "answer_hi": "सदस्यों के लिए शेयर्ड मेमोरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is '->' operator used for?",
    "question_hi": "'->' ऑपरेटर किसके लिए उपयोग होता है?",
    "options_en": ["Access structure via pointer", "Access array", "Bitwise operation", "Multiplication"],
    "options_hi": ["पॉइंटर के माध्यम से स्ट्रक्चर एक्सेस करना", "एरे एक्सेस करना", "बिटवाइज़ ऑपरेशन", "गुणा"],
    "answer_en": "Access structure via pointer",
    "answer_hi": "पॉइंटर के माध्यम से स्ट्रक्चर एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the output: printf(\"%d\", 10 | 5);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 | 5);",
    "options_en": ["15", "10", "5", "0"],
    "options_hi": ["15", "10", "5", "0"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which function copies string?",
    "question_hi": "कौन सा फ़ंक्शन स्ट्रिंग कॉपी करता है?",
    "options_en": ["strcpy()", "strcmp()", "strlen()", "strcat()"],
    "options_hi": ["strcpy()", "strcmp()", "strlen()", "strcat()"],
    "answer_en": "strcpy()",
    "answer_hi": "strcpy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'enum' used for?",
    "question_hi": "'enum' का उपयोग किसके लिए होता है?",
    "options_en": ["Define named integer constants", "Define function", "Allocate memory", "File handling"],
    "options_hi": ["नेम्ड इंटीजर कॉन्स्टेंट्स डिफाइन करना", "फ़ंक्शन डिफाइन करना", "मेमोरी allocate करना", "फ़ाइल हैंडलिंग"],
    "answer_en": "Define named integer constants",
    "answer_hi": "नेम्ड इंटीजर कॉन्स्टेंट्स डिफाइन करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the output: int a=5,b=10; a^=b^=a^=b; printf(\"%d %d\",a,b);",
    "question_hi": "आउटपुट क्या है: int a=5,b=10; a^=b^=a^=b; printf(\"%d %d\",a,b);",
    "options_en": ["10 5", "5 10", "0 0", "Undefined"],
    "options_hi": ["10 5", "5 10", "0 0", "अपरिभाषित"],
    "answer_en": "10 5",
    "answer_hi": "10 5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which is used for dynamic memory deallocation?",
    "question_hi": "डायनामिक मेमोरी डी-एलोकेशन के लिए क्या उपयोग होता है?",
    "options_en": ["free()", "delete", "release", "remove"],
    "options_hi": ["free()", "delete", "release", "remove"],
    "answer_en": "free()",
    "answer_hi": "free()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the output: printf(\"%d\", sizeof(float));",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", sizeof(float));",
    "options_en": ["4", "2", "8", "1"],
    "options_hi": ["4", "2", "8", "1"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'register' storage class?",
    "question_hi": "'register' स्टोरेज क्लास क्या है?",
    "options_en": ["Store variable in CPU register", "Store in heap", "Store in stack", "Global variable"],
    "options_hi": ["वेरिएबल को CPU रजिस्टर में स्टोर करना", "हीप में स्टोर करना", "स्टैक में स्टोर करना", "ग्लोबल वेरिएबल"],
    "answer_en": "Store variable in CPU register",
    "answer_hi": "वेरिएबल को CPU रजिस्टर में स्टोर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the output: printf(\"%d\", 10 && 0);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 && 0);",
    "options_en": ["0", "1", "10", "Error"],
    "options_hi": ["0", "1", "10", "त्रुटि"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'fseek()' used for?",
    "question_hi": "'fseek()' का उपयोग किसके लिए होता है?",
    "options_en": ["Move file pointer", "Read file", "Write file", "Close file"],
    "options_hi": ["फ़ाइल पॉइंटर मूव करना", "फ़ाइल पढ़ना", "फ़ाइल लिखना", "फ़ाइल बंद करना"],
    "answer_en": "Move file pointer",
    "answer_hi": "फ़ाइल पॉइंटर मूव करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the output: int a=10; printf(\"%d\", a<<2);",
    "question_hi": "आउटपुट क्या है: int a=10; printf(\"%d\", a<<2);",
    "options_en": ["40", "10", "5", "20"],
    "options_hi": ["40", "10", "5", "20"],
    "answer_en": "40",
    "answer_hi": "40",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'sizeof' operator?",
    "question_hi": "'sizeof' ऑपरेटर क्या है?",
    "options_en": ["Returns size in bytes", "Returns address", "Returns value", "Returns type"],
    "options_hi": ["बाइट्स में साइज़ रिटर्न करता है", "एड्रेस रिटर्न करता है", "वैल्यू रिटर्न करता है", "टाइप रिटर्न करता है"],
    "answer_en": "Returns size in bytes",
    "answer_hi": "बाइट्स में साइज़ रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the output: printf(\"%d\", 10 == 10);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 == 10);",
    "options_en": ["1", "0", "10", "20"],
    "options_hi": ["1", "0", "10", "20"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'call by value'?",
    "question_hi": "'कॉल बाई वैल्यू' क्या है?",
    "options_en": ["Copy of argument passed", "Address passed", "Reference passed", "Pointer passed"],
    "options_hi": ["आर्ग्युमेंट की कॉपी पास होती है", "एड्रेस पास होता है", "रिफरेंस पास होता है", "पॉइंटर पास होता है"],
    "answer_en": "Copy of argument passed",
    "answer_hi": "आर्ग्युमेंट की कॉपी पास होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the output: printf(\"%d\", 10 != 5);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 != 5);",
    "options_en": ["1", "0", "10", "5"],
    "options_hi": ["1", "0", "10", "5"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'strlen()' return?",
    "question_hi": "'strlen()' क्या रिटर्न करता है?",
    "options_en": ["Length of string", "Copy string", "Compare", "Concatenate"],
    "options_hi": ["स्ट्रिंग की लंबाई", "स्ट्रिंग कॉपी करना", "तुलना करना", "जोड़ना"],
    "answer_en": "Length of string",
    "answer_hi": "स्ट्रिंग की लंबाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the output: int a=10; int *p=&a; printf(\"%p\", p);",
    "question_hi": "आउटपुट क्या है: int a=10; int *p=&a; printf(\"%p\", p);",
    "options_en": ["Address of a", "10", "0", "Error"],
    "options_hi": ["a का एड्रेस", "10", "0", "त्रुटि"],
    "answer_en": "Address of a",
    "answer_hi": "a का एड्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'feof()' used for?",
    "question_hi": "'feof()' का उपयोग किसके लिए होता है?",
    "options_en": ["Check end of file", "Open file", "Close file", "Read file"],
    "options_hi": ["फ़ाइल के अंत की जांच करना", "फ़ाइल खोलना", "फ़ाइल बंद करना", "फ़ाइल पढ़ना"],
    "answer_en": "Check end of file",
    "answer_hi": "फ़ाइल के अंत की जांच करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the output: printf(\"%d\", 10 > 5 ? 1 : 0);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 > 5 ? 1 : 0);",
    "options_en": ["1", "0", "10", "5"],
    "options_hi": ["1", "0", "10", "5"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'getc()' used for?",
    "question_hi": "'getc()' का उपयोग किसके लिए होता है?",
    "options_en": ["Read character from file", "Write character", "Read string", "Write string"],
    "options_hi": ["फ़ाइल से कैरेक्टर पढ़ना", "कैरेक्टर लिखना", "स्ट्रिंग पढ़ना", "स्ट्रिंग लिखना"],
    "answer_en": "Read character from file",
    "answer_hi": "फ़ाइल से कैरेक्टर पढ़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the output: printf(\"%d\", sizeof(double));",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", sizeof(double));",
    "options_en": ["8", "4", "2", "1"],
    "options_hi": ["8", "4", "2", "1"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'strcat()' used for?",
    "question_hi": "'strcat()' का उपयोग किसके लिए होता है?",
    "options_en": ["Concatenate strings", "Compare strings", "Copy strings", "Length of string"],
    "options_hi": ["स्ट्रिंग्स जोड़ना", "स्ट्रिंग्स की तुलना करना", "स्ट्रिंग्स कॉपी करना", "स्ट्रिंग की लंबाई"],
    "answer_en": "Concatenate strings",
    "answer_hi": "स्ट्रिंग्स जोड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the output: int a=10,b=20,c=30; printf(\"%d\", a>b?a:b>c?b:c);",
    "question_hi": "आउटपुट क्या है: int a=10,b=20,c=30; printf(\"%d\", a>b?a:b>c?b:c);",
    "options_en": ["30", "20", "10", "0"],
    "options_hi": ["30", "20", "10", "0"],
    "answer_en": "30",
    "answer_hi": "30",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'exit()' function?",
    "question_hi": "'exit()' फ़ंक्शन क्या है?",
    "options_en": ["Terminate program", "Start program", "Pause program", "Restart program"],
    "options_hi": ["प्रोग्राम समाप्त करना", "प्रोग्राम शुरू करना", "प्रोग्राम रोकना", "प्रोग्राम रीस्टार्ट करना"],
    "answer_en": "Terminate program",
    "answer_hi": "प्रोग्राम समाप्त करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the output: printf(\"%d\", 10 % 3);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 % 3);",
    "options_en": ["1", "0", "3", "10"],
    "options_hi": ["1", "0", "3", "10"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'rand()' used for?",
    "question_hi": "'rand()' का उपयोग किसके लिए होता है?",
    "options_en": ["Generate random number", "Read array", "Write file", "Allocate memory"],
    "options_hi": ["रैंडम नंबर जनरेट करना", "एरे पढ़ना", "फ़ाइल लिखना", "मेमोरी allocate करना"],
    "answer_en": "Generate random number",
    "answer_hi": "रैंडम नंबर जनरेट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the output: printf(\"%d\", sizeof(long));",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", sizeof(long));",
    "options_en": ["4 or 8", "2", "1", "16"],
    "options_hi": ["4 या 8", "2", "1", "16"],
    "answer_en": "4 or 8",
    "answer_hi": "4 या 8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'fopen()' return on failure?",
    "question_hi": "फेल्योर पर 'fopen()' क्या रिटर्न करता है?",
    "options_en": ["NULL", "0", "1", "-1"],
    "options_hi": ["NULL", "0", "1", "-1"],
    "answer_en": "NULL",
    "answer_hi": "NULL",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the output: printf(\"%d\", 10 < 5 && 5 > 2);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 < 5 && 5 > 2);",
    "options_en": ["0", "1", "10", "5"],
    "options_hi": ["0", "1", "10", "5"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'memcpy()' used for?",
    "question_hi": "'memcpy()' का उपयोग किसके लिए होता है?",
    "options_en": ["Copy memory block", "Compare memory", "Set memory", "Allocate memory"],
    "options_hi": ["मेमोरी ब्लॉक कॉपी करना", "मेमोरी तुलना करना", "मेमोरी सेट करना", "मेमोरी allocate करना"],
    "answer_en": "Copy memory block",
    "answer_hi": "मेमोरी ब्लॉक कॉपी करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the output: int a=10; printf(\"%d\", a--);",
    "question_hi": "आउटपुट क्या है: int a=10; printf(\"%d\", a--);",
    "options_en": ["10", "9", "11", "0"],
    "options_hi": ["10", "9", "11", "0"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'putchar()' used for?",
    "question_hi": "'putchar()' का उपयोग किसके लिए होता है?",
    "options_en": ["Write character to screen", "Read character", "Write string", "Read string"],
    "options_hi": ["स्क्रीन पर कैरेक्टर लिखना", "कैरेक्टर पढ़ना", "स्ट्रिंग लिखना", "स्ट्रिंग पढ़ना"],
    "answer_en": "Write character to screen",
    "answer_hi": "स्क्रीन पर कैरेक्टर लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the output: printf(\"%d\", 10 >= 10);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 >= 10);",
    "options_en": ["1", "0", "10", "20"],
    "options_hi": ["1", "0", "10", "20"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'strstr()' used for?",
    "question_hi": "'strstr()' का उपयोग किसके लिए होता है?",
    "options_en": ["Find substring", "Copy string", "Compare string", "Concatenate string"],
    "options_hi": ["सबस्ट्रिंग ढूंढना", "स्ट्रिंग कॉपी करना", "स्ट्रिंग तुलना करना", "स्ट्रिंग जोड़ना"],
    "answer_en": "Find substring",
    "answer_hi": "सबस्ट्रिंग ढूंढना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the output: int a=5,b=2; printf(\"%f\", (float)a/b);",
    "question_hi": "आउटपुट क्या है: int a=5,b=2; printf(\"%f\", (float)a/b);",
    "options_en": ["2.500000", "2", "3", "2.5"],
    "options_hi": ["2.500000", "2", "3", "2.5"],
    "answer_en": "2.500000",
    "answer_hi": "2.500000",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'fclose()' used for?",
    "question_hi": "'fclose()' का उपयोग किसके लिए होता है?",
    "options_en": ["Close file", "Open file", "Read file", "Write file"],
    "options_hi": ["फ़ाइल बंद करना", "फ़ाइल खोलना", "फ़ाइल पढ़ना", "फ़ाइल लिखना"],
    "answer_en": "Close file",
    "answer_hi": "फ़ाइल बंद करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the output: printf(\"%d\", 10 <= 5);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 <= 5);",
    "options_en": ["0", "1", "10", "5"],
    "options_hi": ["0", "1", "10", "5"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'fprintf()' used for?",
    "question_hi": "'fprintf()' का उपयोग किसके लिए होता है?",
    "options_en": ["Write formatted output to file", "Read file", "Write to screen", "Read from keyboard"],
    "options_hi": ["फ़ाइल में फॉर्मेटेड आउटपुट लिखना", "फ़ाइल पढ़ना", "स्क्रीन पर लिखना", "कीबोर्ड से पढ़ना"],
    "answer_en": "Write formatted output to file",
    "answer_hi": "फ़ाइल में फॉर्मेटेड आउटपुट लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the output: printf(\"%d\", 10 & 6);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 & 6);",
    "options_en": ["2", "4", "6", "10"],
    "options_hi": ["2", "4", "6", "10"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'fgets()' used for?",
    "question_hi": "'fgets()' का उपयोग किसके लिए होता है?",
    "options_en": ["Read string from file", "Write string to file", "Read character", "Write character"],
    "options_hi": ["फ़ाइल से स्ट्रिंग पढ़ना", "फ़ाइल में स्ट्रिंग लिखना", "कैरेक्टर पढ़ना", "कैरेक्टर लिखना"],
    "answer_en": "Read string from file",
    "answer_hi": "फ़ाइल से स्ट्रिंग पढ़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the output: printf(\"%d\", 10 ^ 6);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 ^ 6);",
    "options_en": ["12", "4", "6", "10"],
    "options_hi": ["12", "4", "6", "10"],
    "answer_en": "12",
    "answer_hi": "12",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'ftell()' used for?",
    "question_hi": "'ftell()' का उपयोग किसके लिए होता है?",
    "options_en": ["Get current file position", "Move file pointer", "Close file", "Open file"],
    "options_hi": ["करंट फ़ाइल पोजीशन प्राप्त करना", "फ़ाइल पॉइंटर मूव करना", "फ़ाइल बंद करना", "फ़ाइल खोलना"],
    "answer_en": "Get current file position",
    "answer_hi": "करंट फ़ाइल पोजीशन प्राप्त करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the output: printf(\"%d\", 10 || 0);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 || 0);",
    "options_en": ["1", "0", "10", "5"],
    "options_hi": ["1", "0", "10", "5"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'fputs()' used for?",
    "question_hi": "'fputs()' का उपयोग किसके लिए होता है?",
    "options_en": ["Write string to file", "Read string from file", "Write character", "Read character"],
    "options_hi": ["फ़ाइल में स्ट्रिंग लिखना", "फ़ाइल से स्ट्रिंग पढ़ना", "कैरेक्टर लिखना", "कैरेक्टर पढ़ना"],
    "answer_en": "Write string to file",
    "answer_hi": "फ़ाइल में स्ट्रिंग लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the output: printf(\"%d\", 10 & 3);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 & 3);",
    "options_en": ["2", "1", "3", "10"],
    "options_hi": ["2", "1", "3", "10"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'rewind()' used for?",
    "question_hi": "'rewind()' का उपयोग किसके लिए होता है?",
    "options_en": ["Move file pointer to beginning", "Move to end", "Close file", "Open file"],
    "options_hi": ["फ़ाइल पॉइंटर को शुरुआत में ले जाना", "अंत में ले जाना", "फ़ाइल बंद करना", "फ़ाइल खोलना"],
    "answer_en": "Move file pointer to beginning",
    "answer_hi": "फ़ाइल पॉइंटर को शुरुआत में ले जाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the output: printf(\"%d\", 10 | 3);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 | 3);",
    "options_en": ["11", "13", "7", "10"],
    "options_hi": ["11", "13", "7", "10"],
    "answer_en": "11",
    "answer_hi": "11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'fflush()' used for?",
    "question_hi": "'fflush()' का उपयोग किसके लिए होता है?",
    "options_en": ["Clear output buffer", "Clear input buffer", "Clear file", "Clear memory"],
    "options_hi": ["आउटपुट बफर क्लियर करना", "इनपुट बफर क्लियर करना", "फ़ाइल क्लियर करना", "मेमोरी क्लियर करना"],
    "answer_en": "Clear output buffer",
    "answer_hi": "आउटपुट बफर क्लियर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the output: printf(\"%d\", 10 << 1);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 << 1);",
    "options_en": ["20", "10", "5", "0"],
    "options_hi": ["20", "10", "5", "0"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'fread()' used for?",
    "question_hi": "'fread()' का उपयोग किसके लिए होता है?",
    "options_en": ["Read binary data from file", "Write binary data", "Read text", "Write text"],
    "options_hi": ["फ़ाइल से बाइनरी डेटा पढ़ना", "बाइनरी डेटा लिखना", "टेक्स्ट पढ़ना", "टेक्स्ट लिखना"],
    "answer_en": "Read binary data from file",
    "answer_hi": "फ़ाइल से बाइनरी डेटा पढ़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the output: printf(\"%d\", 10 >> 2);",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", 10 >> 2);",
    "options_en": ["2", "5", "10", "20"],
    "options_hi": ["2", "5", "10", "20"],
    "answer_en": "2",
    "answer_hi": "2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'fwrite()' used for?",
    "question_hi": "'fwrite()' का उपयोग किसके लिए होता है?",
    "options_en": ["Write binary data to file", "Read binary data", "Write text", "Read text"],
    "options_hi": ["फ़ाइल में बाइनरी डेटा लिखना", "बाइनरी डेटा पढ़ना", "टेक्स्ट लिखना", "टेक्स्ट पढ़ना"],
    "answer_en": "Write binary data to file",
    "answer_hi": "फ़ाइल में बाइनरी डेटा लिखना",
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