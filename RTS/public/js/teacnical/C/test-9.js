const questions = [
  {
    "num": 1,
    "question_en": "In C, can the `main()` function have a return type of `void`?",
    "question_hi": "C में, क्या `main()` फ़ंक्शन का रिटर्न टाइप `void` हो सकता है?",
    "options_en": ["Yes, always", "No, never", "Allowed only in some compilers", "Only if the program gives no output"],
    "options_hi": ["हाँ, हमेशा", "नहीं, कभी नहीं", "केवल कुछ कम्पाइलर्स में अनुमति है", "केवल तभी जब प्रोग्राम कोई आउटपुट न दे"],
    "answer_en": "Allowed only in some compilers",
    "answer_hi": "केवल कुछ कम्पाइलर्स में अनुमति है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "In which header file are `printf` and `scanf` functions defined in C?",
    "question_hi": "C में `printf` और `scanf` फ़ंक्शन किस हेडर फ़ाइल में परिभाषित हैं?",
    "options_en": ["stdlib.h", "conio.h", "stdio.h", "math.h"],
    "options_hi": ["stdlib.h", "conio.h", "stdio.h", "math.h"],
    "answer_en": "stdio.h",
    "answer_hi": "stdio.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What will be the value of `x` after the assignment `int x = 5.7;`?",
    "question_hi": "`int x = 5.7;` असाइनमेंट के बाद `x` का मान क्या होगा?",
    "options_en": ["5.7", "6", "5", "Error"],
    "options_hi": ["5.7", "6", "5", "Error"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the size of `int` data type in a 32-bit C compiler?",
    "question_hi": "32-bit C कम्पाइलर में `int` डेटा टाइप का आकार क्या है?",
    "options_en": ["2 bytes", "4 bytes", "8 bytes", "Depends on compiler"],
    "options_hi": ["2 बाइट्स", "4 बाइट्स", "8 बाइट्स", "कम्पाइलर पर निर्भर करता है"],
    "answer_en": "4 bytes",
    "answer_hi": "4 बाइट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which operator is used to access the address of a variable in C?",
    "question_hi": "C में किसी वेरिएबल के एड्रेस तक पहुँचने के लिए किस ऑपरेटर का उपयोग किया जाता है?",
    "options_en": ["*", "&", "#", "@"],
    "options_hi": ["*", "&", "#", "@"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the output of `printf(\"%d\", 5 + 2 * 3);`?",
    "question_hi": "`printf(\"%d\", 5 + 2 * 3);` का आउटपुट क्या है?",
    "options_en": ["11", "21", "16", "Syntax error"],
    "options_hi": ["11", "21", "16", "सिंटेक्स एरर"],
    "answer_en": "11",
    "answer_hi": "11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which loop is guaranteed to execute at least once in C?",
    "question_hi": "C में कौन सा लूप कम से कम एक बार निश्चित रूप से एक्सीक्यूट होगा?",
    "options_en": ["for loop", "while loop", "do-while loop", "All loops"],
    "options_hi": ["for लूप", "while लूप", "do-while लूप", "सभी लूप"],
    "answer_en": "do-while loop",
    "answer_hi": "do-while लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which of the following is not a valid storage class in C?",
    "question_hi": "निम्नलिखित में से कौन सा C में वैध स्टोरेज क्लास नहीं है?",
    "options_en": ["auto", "static", "extern", "global"],
    "options_hi": ["auto", "static", "extern", "global"],
    "answer_en": "global",
    "answer_hi": "global",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What does the `break` statement do in a switch case?",
    "question_hi": "switch case में `break` स्टेटमेंट क्या करता है?",
    "options_en": ["Terminates the program", "Exits the switch statement", "Continues to next case", "Restarts the switch"],
    "options_hi": ["प्रोग्राम टर्मिनेट करता है", "switch स्टेटमेंट से बाहर निकलता है", "अगले case पर जाता है", "switch को रीस्टार्ट करता है"],
    "answer_en": "Exits the switch statement",
    "answer_hi": "switch स्टेटमेंट से बाहर निकलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which function is used to allocate memory dynamically in C?",
    "question_hi": "C में डायनामिक मेमोरी आवंटित करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    "options_en": ["malloc()", "calloc()", "realloc()", "All of the above"],
    "options_hi": ["malloc()", "calloc()", "realloc()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the default return type of a function in C if not specified?",
    "question_hi": "यदि निर्दिष्ट नहीं किया गया हो तो C में फ़ंक्शन का डिफ़ॉल्ट रिटर्न टाइप क्या है?",
    "options_en": ["void", "int", "float", "char"],
    "options_hi": ["void", "int", "float", "char"],
    "answer_en": "int",
    "answer_hi": "int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the correct way to declare a pointer to an integer in C?",
    "question_hi": "C में एक इंटीजर के पॉइंटर को डिक्लेयर करने का सही तरीका क्या है?",
    "options_en": ["int ptr;", "int *ptr;", "*int ptr;", "pointer int ptr;"],
    "options_hi": ["int ptr;", "int *ptr;", "*int ptr;", "pointer int ptr;"],
    "answer_en": "int *ptr;",
    "answer_hi": "int *ptr;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which of the following is not a valid C keyword?",
    "question_hi": "निम्नलिखित में से कौन सा वैध C कीवर्ड नहीं है?",
    "options_en": ["switch", "static", "string", "typedef"],
    "options_hi": ["switch", "static", "string", "typedef"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the output of `printf(\"%c\", 65);`?",
    "question_hi": "`printf(\"%c\", 65);` का आउटपुट क्या है?",
    "options_en": ["65", "A", "a", "Error"],
    "options_hi": ["65", "A", "a", "Error"],
    "answer_en": "A",
    "answer_hi": "A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the value of `sizeof(char)` in C?",
    "question_hi": "C में `sizeof(char)` का मान क्या है?",
    "options_en": ["1 byte", "2 bytes", "4 bytes", "Depends on compiler"],
    "options_hi": ["1 बाइट", "2 बाइट्स", "4 बाइट्स", "कम्पाइलर पर निर्भर करता है"],
    "answer_en": "1 byte",
    "answer_hi": "1 बाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which escape sequence represents a newline in C?",
    "question_hi": "C में न्यूलाइन को कौन सा एस्केप सीक्वेंस रिप्रेजेंट करता है?",
    "options_en": ["\\n", "\\t", "\\r", "\\b"],
    "options_hi": ["\\n", "\\t", "\\r", "\\b"],
    "answer_en": "\\n",
    "answer_hi": "\\n",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the maximum value an `unsigned char` can hold?",
    "question_hi": "एक `unsigned char` अधिकतम कितना मान रख सकता है?",
    "options_en": ["127", "255", "256", "128"],
    "options_hi": ["127", "255", "256", "128"],
    "answer_en": "255",
    "answer_hi": "255",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which operator has the highest precedence in C?",
    "question_hi": "C में किस ऑपरेटर की प्रीसीडेंस सबसे अधिक है?",
    "options_en": ["+", "*", "()", "="],
    "options_hi": ["+", "*", "()", "="],
    "answer_en": "()",
    "answer_hi": "()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the purpose of `#include` directive?",
    "question_hi": "`#include` डायरेक्टिव का उद्देश्य क्या है?",
    "options_en": ["To include another program", "To include header files", "To include functions", "To include comments"],
    "options_hi": ["दूसरा प्रोग्राम इंक्लूड करने के लिए", "हेडर फ़ाइलें इंक्लूड करने के लिए", "फ़ंक्शन्स इंक्लूड करने के लिए", "कमेंट्स इंक्लूड करने के लिए"],
    "answer_en": "To include header files",
    "answer_hi": "हेडर फ़ाइलें इंक्लूड करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does `NULL` represent in C?",
    "question_hi": "C में `NULL` क्या रिप्रेजेंट करता है?",
    "options_en": ["Zero", "Empty string", "Null pointer", "End of file"],
    "options_hi": ["जीरो", "खाली स्ट्रिंग", "नल पॉइंटर", "फ़ाइल का अंत"],
    "answer_en": "Null pointer",
    "answer_hi": "नल पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to read a string from standard input in C?",
    "question_hi": "C में स्टैंडर्ड इनपुट से स्ट्रिंग पढ़ने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    "options_en": ["scanf()", "gets()", "fgets()", "All of these"],
    "options_hi": ["scanf()", "gets()", "fgets()", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the output of `printf(\"%d\", sizeof(3.14));` on a 64-bit system?",
    "question_hi": "64-bit सिस्टम पर `printf(\"%d\", sizeof(3.14));` का आउटपुट क्या है?",
    "options_en": ["4", "8", "16", "Compiler dependent"],
    "options_hi": ["4", "8", "16", "कम्पाइलर पर निर्भर"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the default value of a static variable in C?",
    "question_hi": "C में स्टैटिक वेरिएबल का डिफ़ॉल्ट मान क्या है?",
    "options_en": ["0", "1", "Garbage value", "NULL"],
    "options_hi": ["0", "1", "गार्बेज वैल्यू", "NULL"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which of the following is not a valid C data type?",
    "question_hi": "निम्नलिखित में से कौन सा वैध C डेटा टाइप नहीं है?",
    "options_en": ["int", "real", "float", "double"],
    "options_hi": ["int", "real", "float", "double"],
    "answer_en": "real",
    "answer_hi": "real",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the correct way to compare two strings in C?",
    "question_hi": "C में दो स्ट्रिंग्स की तुलना करने का सही तरीका क्या है?",
    "options_en": ["str1 == str2", "strcmp(str1, str2)", "str1.equals(str2)", "str1 === str2"],
    "options_hi": ["str1 == str2", "strcmp(str1, str2)", "str1.equals(str2)", "str1 === str2"],
    "answer_en": "strcmp(str1, str2)",
    "answer_hi": "strcmp(str1, str2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the range of values for `signed int` in 32-bit C?",
    "question_hi": "32-bit C में `signed int` के मानों की रेंज क्या है?",
    "options_en": ["0 to 65535", "-128 to 127", "-32768 to 32767", "-2147483648 to 2147483647"],
    "options_hi": ["0 से 65535", "-128 से 127", "-32768 से 32767", "-2147483648 से 2147483647"],
    "answer_en": "-2147483648 to 2147483647",
    "answer_hi": "-2147483648 से 2147483647",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which of the following is not a valid format specifier in C?",
    "question_hi": "निम्नलिखित में से कौन सा C में वैध फॉर्मेट स्पेसिफायर नहीं है?",
    "options_en": ["%d", "%f", "%s", "%e"],
    "options_hi": ["%d", "%f", "%s", "%e"],
    "answer_en": "None, all are valid",
    "answer_hi": "कोई नहीं, सभी वैध हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of `typedef` in C?",
    "question_hi": "C में `typedef` का उद्देश्य क्या है?",
    "options_en": ["To define new data types", "To define new variables", "To define new functions", "To define new operators"],
    "options_hi": ["नए डेटा टाइप्स डिफाइन करने के लिए", "नए वेरिएबल्स डिफाइन करने के लिए", "नए फंक्शन्स डिफाइन करने के लिए", "नए ऑपरेटर्स डिफाइन करने के लिए"],
    "answer_en": "To define new data types",
    "answer_hi": "नए डेटा टाइप्स डिफाइन करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output of `printf(\"%d\", 10 / 3);`?",
    "question_hi": "`printf(\"%d\", 10 / 3);` का आउटपुट क्या है?",
    "options_en": ["3", "3.333", "3.0", "4"],
    "options_hi": ["3", "3.333", "3.0", "4"],
    "answer_en": "3",
    "answer_hi": "3",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which header file is required for using `sqrt()` function?",
    "question_hi": "`sqrt()` फ़ंक्शन का उपयोग करने के लिए किस हेडर फ़ाइल की आवश्यकता होती है?",
    "options_en": ["math.h", "stdlib.h", "stdio.h", "ctype.h"],
    "options_hi": ["math.h", "stdlib.h", "stdio.h", "ctype.h"],
    "answer_en": "math.h",
    "answer_hi": "math.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the purpose of `continue` statement in a loop?",
    "question_hi": "लूप में `continue` स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["To exit the loop", "To skip current iteration", "To restart the loop", "To break the loop"],
    "options_hi": ["लूप से बाहर निकलने के लिए", "वर्तमान इटरेशन को स्किप करने के लिए", "लूप को रीस्टार्ट करने के लिए", "लूप को ब्रेक करने के लिए"],
    "answer_en": "To skip current iteration",
    "answer_hi": "वर्तमान इटरेशन को स्किप करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the value of `sizeof(int*)` on a 64-bit system?",
    "question_hi": "64-bit सिस्टम पर `sizeof(int*)` का मान क्या है?",
    "options_en": ["4", "8", "16", "2"],
    "options_hi": ["4", "8", "16", "2"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which of the following is true about C arrays?",
    "question_hi": "C एरेज़ के बारे में निम्नलिखित में से कौन सा सत्य है?",
    "options_en": ["Array size can be changed at runtime", "Array index starts from 1", "Array elements are stored contiguously", "All of the above"],
    "options_hi": ["रनटाइम में एरे साइज़ बदला जा सकता है", "एरे इंडेक्स 1 से शुरू होता है", "एरे एलिमेंट्स कॉन्टिग्यूअसली स्टोर होते हैं", "उपरोक्त सभी"],
    "answer_en": "Array elements are stored contiguously",
    "answer_hi": "एरे एलिमेंट्स कॉन्टिग्यूअसली स्टोर होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the output of `printf(\"%d\", 'A' + 1);`?",
    "question_hi": "`printf(\"%d\", 'A' + 1);` का आउटपुट क्या है?",
    "options_en": ["A", "66", "B", "65"],
    "options_hi": ["A", "66", "B", "65"],
    "answer_en": "66",
    "answer_hi": "66",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which operator is used for logical AND in C?",
    "question_hi": "C में लॉजिकल AND के लिए किस ऑपरेटर का उपयोग किया जाता है?",
    "options_en": ["&", "&&", "AND", "|"],
    "options_hi": ["&", "&&", "AND", "|"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of `getchar()` function?",
    "question_hi": "`getchar()` फ़ंक्शन का उद्देश्य क्या है?",
    "options_en": ["To read a character", "To read a string", "To read an integer", "To read a float"],
    "options_hi": ["एक कैरेक्टर पढ़ने के लिए", "एक स्ट्रिंग पढ़ने के लिए", "एक इंटीजर पढ़ने के लिए", "एक फ्लोट पढ़ने के लिए"],
    "answer_en": "To read a character",
    "answer_hi": "एक कैरेक्टर पढ़ने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does `++x` mean in C?",
    "question_hi": "C में `++x` का क्या अर्थ है?",
    "options_en": ["Increment x after use", "Increment x before use", "Add 2 to x", "Multiply x by 2"],
    "options_hi": ["यूज़ के बाद x इंक्रीमेंट करें", "यूज़ से पहले x इंक्रीमेंट करें", "x में 2 जोड़ें", "x को 2 से गुणा करें"],
    "answer_en": "Increment x before use",
    "answer_hi": "यूज़ से पहले x इंक्रीमेंट करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Which function is used to free dynamically allocated memory?",
    "question_hi": "डायनामिकली आवंटित मेमोरी को फ्री करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    "options_en": ["free()", "delete()", "remove()", "clear()"],
    "options_hi": ["free()", "delete()", "remove()", "clear()"],
    "answer_en": "free()",
    "answer_hi": "free()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the correct way to declare a constant integer in C?",
    "question_hi": "C में एक कॉन्स्टेंट इंटीजर डिक्लेयर करने का सही तरीका क्या है?",
    "options_en": ["constant int x = 5;", "const int x = 5;", "#define x 5", "Both b and c"],
    "options_hi": ["constant int x = 5;", "const int x = 5;", "#define x 5", "b और c दोनों"],
    "answer_en": "Both b and c",
    "answer_hi": "b और c दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the output of `printf(\"%d\", !5);`?",
    "question_hi": "`printf(\"%d\", !5);` का आउटपुट क्या है?",
    "options_en": ["5", "1", "0", "Error"],
    "options_hi": ["5", "1", "0", "Error"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which of the following is a valid function declaration?",
    "question_hi": "निम्नलिखित में से कौन सा वैध फ़ंक्शन डिक्लेरेशन है?",
    "options_en": ["int func();", "func() int;", "int func;", "function int func();"],
    "options_hi": ["int func();", "func() int;", "int func;", "function int func();"],
    "answer_en": "int func();",
    "answer_hi": "int func();",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the purpose of `switch` statement?",
    "question_hi": "`switch` स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["To create loops", "To make decisions among multiple choices", "To declare variables", "To include files"],
    "options_hi": ["लूप बनाने के लिए", "मल्टीपल चॉइस में निर्णय लेने के लिए", "वेरिएबल्स डिक्लेयर करने के लिए", "फ़ाइलें इंक्लूड करने के लिए"],
    "answer_en": "To make decisions among multiple choices",
    "answer_hi": "मल्टीपल चॉइस में निर्णय लेने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the value of `sizeof('A')` in C?",
    "question_hi": "C में `sizeof('A')` का मान क्या है?",
    "options_en": ["1", "2", "4", "8"],
    "options_hi": ["1", "2", "4", "8"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which header file is needed for using `strlen()` function?",
    "question_hi": "`strlen()` फ़ंक्शन का उपयोग करने के लिए किस हेडर फ़ाइल की आवश्यकता होती है?",
    "options_en": ["string.h", "stdio.h", "stdlib.h", "ctype.h"],
    "options_hi": ["string.h", "stdio.h", "stdlib.h", "ctype.h"],
    "answer_en": "string.h",
    "answer_hi": "string.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does `%p` format specifier represent?",
    "question_hi": "`%p` फॉर्मेट स्पेसिफायर क्या रिप्रेजेंट करता है?",
    "options_en": ["Pointer address", "Percentage", "Precision", "Padding"],
    "options_hi": ["पॉइंटर एड्रेस", "प्रतिशत", "प्रिसिजन", "पैडिंग"],
    "answer_en": "Pointer address",
    "answer_hi": "पॉइंटर एड्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is the output of `printf(\"%.2f\", 5.0 / 2);`?",
    "question_hi": "`printf(\"%.2f\", 5.0 / 2);` का आउटपुट क्या है?",
    "options_en": ["2", "2.5", "2.50", "2.500"],
    "options_hi": ["2", "2.5", "2.50", "2.500"],
    "answer_en": "2.50",
    "answer_hi": "2.50",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which of the following is not a valid C operator?",
    "question_hi": "निम्नलिखित में से कौन सा वैध C ऑपरेटर नहीं है?",
    "options_en": ["%", "**", "&", "|"],
    "options_hi": ["%", "**", "&", "|"],
    "answer_en": "**",
    "answer_hi": "**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of `register` storage class?",
    "question_hi": "`register` स्टोरेज क्लास का उद्देश्य क्या है?",
    "options_en": ["To store variables in register for faster access", "To register variables", "To create global variables", "To make variables static"],
    "options_hi": ["तेज़ एक्सेस के लिए वेरिएबल्स को रजिस्टर में स्टोर करना", "वेरिएबल्स को रजिस्टर करना", "ग्लोबल वेरिएबल्स बनाने के लिए", "वेरिएबल्स को स्टैटिक बनाने के लिए"],
    "answer_en": "To store variables in register for faster access",
    "answer_hi": "तेज़ एक्सेस के लिए वेरिएबल्स को रजिस्टर में स्टोर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output of `printf(\"%d\", 7 % 3);`?",
    "question_hi": "`printf(\"%d\", 7 % 3);` का आउटपुट क्या है?",
    "options_en": ["2.33", "2", "1", "3"],
    "options_hi": ["2.33", "2", "1", "3"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which of the following is true about `scanf()`?",
    "question_hi": "`scanf()` के बारे में निम्नलिखित में से कौन सा सत्य है?",
    "options_en": ["It can read multiple values", "It requires address of variables", "It returns number of successfully read items", "All of the above"],
    "options_hi": ["यह मल्टीपल वैल्यूज पढ़ सकता है", "इसे वेरिएबल्स के एड्रेस की आवश्यकता होती है", "यह सफलतापूर्वक पढ़े गए आइटम्स की संख्या रिटर्न करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is the maximum number of dimensions an array can have in C?",
    "question_hi": "C में एक एरे के अधिकतम कितने डाइमेंशन हो सकते हैं?",
    "options_en": ["2", "3", "Unlimited", "Compilers specify limits"],
    "options_hi": ["2", "3", "असीमित", "कम्पाइलर्स लिमिट्स निर्दिष्ट करते हैं"],
    "answer_en": "Compilers specify limits",
    "answer_hi": "कम्पाइलर्स लिमिट्स निर्दिष्ट करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does `strcpy()` function do?",
    "question_hi": "`strcpy()` फ़ंक्शन क्या करता है?",
    "options_en": ["Compares two strings", "Copies one string to another", "Concatenates two strings", "Finds string length"],
    "options_hi": ["दो स्ट्रिंग्स की तुलना करता है", "एक स्ट्रिंग को दूसरी में कॉपी करता है", "दो स्ट्रिंग्स को जोड़ता है", "स्ट्रिंग लेंथ ढूँढता है"],
    "answer_en": "Copies one string to another",
    "answer_hi": "एक स्ट्रिंग को दूसरी में कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the output of `printf(\"%d\", sizeof(float));`?",
    "question_hi": "`printf(\"%d\", sizeof(float));` का आउटपुट क्या है?",
    "options_en": ["2", "4", "8", "Compiler dependent"],
    "options_hi": ["2", "4", "8", "कम्पाइलर पर निर्भर"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which of the following is not a valid C control structure?",
    "question_hi": "निम्नलिखित में से कौन सा वैध C कंट्रोल स्ट्रक्चर नहीं है?",
    "options_en": ["if-else", "switch", "do-while", "repeat-until"],
    "options_hi": ["if-else", "switch", "do-while", "repeat-until"],
    "answer_en": "repeat-until",
    "answer_hi": "repeat-until",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the purpose of `volatile` keyword in C?",
    "question_hi": "C में `volatile` कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["To make variable constant", "To indicate variable may change unexpectedly", "To increase variable speed", "To decrease variable size"],
    "options_hi": ["वेरिएबल को कॉन्स्टेंट बनाने के लिए", "इंगित करने के लिए कि वेरिएबल अनपेक्षित रूप से बदल सकता है", "वेरिएबल स्पीड बढ़ाने के लिए", "वेरिएबल साइज़ कम करने के लिए"],
    "answer_en": "To indicate variable may change unexpectedly",
    "answer_hi": "इंगित करने के लिए कि वेरिएबल अनपेक्षित रूप से बदल सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the output of `printf(\"%d\", 10 > 5 ? 1 : 0);`?",
    "question_hi": "`printf(\"%d\", 10 > 5 ? 1 : 0);` का आउटपुट क्या है?",
    "options_en": ["10", "5", "1", "0"],
    "options_hi": ["10", "5", "1", "0"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "Which header file is needed for `rand()` function?",
    "question_hi": "`rand()` फ़ंक्शन के लिए किस हेडर फ़ाइल की आवश्यकता होती है?",
    "options_en": ["stdlib.h", "stdio.h", "math.h", "time.h"],
    "options_hi": ["stdlib.h", "stdio.h", "math.h", "time.h"],
    "answer_en": "stdlib.h",
    "answer_hi": "stdlib.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is the purpose of `#define` directive?",
    "question_hi": "`#define` डायरेक्टिव का उद्देश्य क्या है?",
    "options_en": ["To define variables", "To define macros", "To define functions", "To define arrays"],
    "options_hi": ["वेरिएबल्स डिफाइन करने के लिए", "मैक्रोज़ डिफाइन करने के लिए", "फंक्शन्स डिफाइन करने के लिए", "एरेज़ डिफाइन करने के लिए"],
    "answer_en": "To define macros",
    "answer_hi": "मैक्रोज़ डिफाइन करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does `feof()` function check?",
    "question_hi": "`feof()` फ़ंक्शन क्या चेक करता है?",
    "options_en": ["End of file", "Beginning of file", "File error", "File size"],
    "options_hi": ["फ़ाइल का अंत", "फ़ाइल की शुरुआत", "फ़ाइल एरर", "फ़ाइल साइज़"],
    "answer_en": "End of file",
    "answer_hi": "फ़ाइल का अंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is the output of `printf(\"%d\", sizeof(long double));` on most systems?",
    "question_hi": "अधिकांश सिस्टम्स पर `printf(\"%d\", sizeof(long double));` का आउटपुट क्या है?",
    "options_en": ["8", "10", "12", "16"],
    "options_hi": ["8", "10", "12", "16"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which operator has the lowest precedence?",
    "question_hi": "किस ऑपरेटर की प्रीसीडेंस सबसे कम है?",
    "options_en": ["+", "*", "=", "()"],
    "options_hi": ["+", "*", "=", "()"],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is the purpose of `goto` statement?",
    "question_hi": "`goto` स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["To jump to another function", "To jump to a labeled statement", "To exit program", "To create loops"],
    "options_hi": ["दूसरे फंक्शन में जंप करने के लिए", "लेबल्ड स्टेटमेंट में जंप करने के लिए", "प्रोग्राम से बाहर निकलने के लिए", "लूप बनाने के लिए"],
    "answer_en": "To jump to a labeled statement",
    "answer_hi": "लेबल्ड स्टेटमेंट में जंप करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the output of `printf(\"%d\", ~0);` on a 32-bit system?",
    "question_hi": "32-bit सिस्टम पर `printf(\"%d\", ~0);` का आउटपुट क्या है?",
    "options_en": ["0", "-1", "1", "4294967295"],
    "options_hi": ["0", "-1", "1", "4294967295"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which of the following is a valid comment in C?",
    "question_hi": "निम्नलिखित में से कौन सा C में वैध कमेंट है?",
    "options_en": ["// Comment", "/* Comment */", "Both a and b", "None of the above"],
    "options_hi": ["// कमेंट", "/* कमेंट */", "a और b दोनों", "उपरोक्त में से कोई नहीं"],
    "answer_en": "Both a and b",
    "answer_hi": "a और b दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the purpose of `#ifdef` directive?",
    "question_hi": "`#ifdef` डायरेक्टिव का उद्देश्य क्या है?",
    "options_en": ["To include files", "To define macros", "To check if macro is defined", "To create functions"],
    "options_hi": ["फ़ाइलें इंक्लूड करने के लिए", "मैक्रोज़ डिफाइन करने के लिए", "चेक करने के लिए कि क्या मैक्रो डिफाइन है", "फंक्शन्स बनाने के लिए"],
    "answer_en": "To check if macro is defined",
    "answer_hi": "चेक करने के लिए कि क्या मैक्रो डिफाइन है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is the output of `printf(\"%d\", 5 & 3);`?",
    "question_hi": "`printf(\"%d\", 5 & 3);` का आउटपुट क्या है?",
    "options_en": ["7", "1", "6", "8"],
    "options_hi": ["7", "1", "6", "8"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "Which function is used to write a character to file?",
    "question_hi": "फ़ाइल में एक कैरेक्टर लिखने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    "options_en": ["fputc()", "fputs()", "fprintf()", "All of these"],
    "options_hi": ["fputc()", "fputs()", "fprintf()", "उपरोक्त सभी"],
    "answer_en": "fputc()",
    "answer_hi": "fputc()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is the output of `printf(\"%d\", sizeof(void));`?",
    "question_hi": "`printf(\"%d\", sizeof(void));` का आउटपुट क्या है?",
    "options_en": ["0", "1", "Compile error", "Undefined"],
    "options_hi": ["0", "1", "कम्पाइल एरर", "अपरिभाषित"],
    "answer_en": "Compile error",
    "answer_hi": "कम्पाइल एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "Which of the following is not a valid file opening mode?",
    "question_hi": "निम्नलिखित में से कौन सा वैध फ़ाइल ओपनिंग मोड नहीं है?",
    "options_en": ["r", "w", "a", "x"],
    "options_hi": ["r", "w", "a", "x"],
    "answer_en": "x",
    "answer_hi": "x",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the output of `printf(\"%d\", 5 | 3);`?",
    "question_hi": "`printf(\"%d\", 5 | 3);` का आउटपुट क्या है?",
    "options_en": ["7", "1", "6", "8"],
    "options_hi": ["7", "1", "6", "8"],
    "answer_en": "7",
    "answer_hi": "7",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "Which function is used to find the square root?",
    "question_hi": "स्क्वायर रूट ढूँढने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    "options_en": ["sqrt()", "pow()", "exp()", "log()"],
    "options_hi": ["sqrt()", "pow()", "exp()", "log()"],
    "answer_en": "sqrt()",
    "answer_hi": "sqrt()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is the output of `printf(\"%d\", sizeof(short));`?",
    "question_hi": "`printf(\"%d\", sizeof(short));` का आउटपुट क्या है?",
    "options_en": ["2", "4", "1", "Depends on compiler"],
    "options_hi": ["2", "4", "1", "कम्पाइलर पर निर्भर करता है"],
    "answer_en": "Depends on compiler",
    "answer_hi": "कम्पाइलर पर निर्भर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What does `fgets()` function do?",
    "question_hi": "`fgets()` फ़ंक्शन क्या करता है?",
    "options_en": ["Reads string from file", "Reads string from keyboard", "Reads formatted input", "Reads character"],
    "options_hi": ["फ़ाइल से स्ट्रिंग पढ़ता है", "कीबोर्ड से स्ट्रिंग पढ़ता है", "फॉर्मेटेड इनपुट पढ़ता है", "कैरेक्टर पढ़ता है"],
    "answer_en": "Reads string from file",
    "answer_hi": "फ़ाइल से स्ट्रिंग पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is the output of `printf(\"%d\", 5 << 1);`?",
    "question_hi": "`printf(\"%d\", 5 << 1);` का आउटपुट क्या है?",
    "options_en": ["5", "10", "6", "20"],
    "options_hi": ["5", "10", "6", "20"],
    "answer_en": "10",
    "answer_hi": "10",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Which function converts string to integer?",
    "question_hi": "स्ट्रिंग को इंटीजर में बदलने वाला फ़ंक्शन कौन सा है?",
    "options_en": ["atoi()", "itoa()", "atof()", "strtol()"],
    "options_hi": ["atoi()", "itoa()", "atof()", "strtol()"],
    "answer_en": "atoi()",
    "answer_hi": "atoi()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is the output of `printf(\"%d\", sizeof(unsigned int));` on 32-bit?",
    "question_hi": "32-bit पर `printf(\"%d\", sizeof(unsigned int));` का आउटपुट क्या है?",
    "options_en": ["2", "4", "8", "16"],
    "options_hi": ["2", "4", "8", "16"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What does `calloc()` initialize memory to?",
    "question_hi": "`calloc()` मेमोरी को किसमें इनिशियलाइज़ करता है?",
    "options_en": ["Garbage value", "NULL", "Zero", "One"],
    "options_hi": ["गार्बेज वैल्यू", "NULL", "जीरो", "वन"],
    "answer_en": "Zero",
    "answer_hi": "जीरो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is the output of `printf(\"%d\", 10 >> 1);`?",
    "question_hi": "`printf(\"%d\", 10 >> 1);` का आउटपुट क्या है?",
    "options_en": ["5", "10", "20", "1"],
    "options_hi": ["5", "10", "20", "1"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "Which function is used to close a file?",
    "question_hi": "फ़ाइल को क्लोज करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    "options_en": ["fclose()", "close()", "endfile()", "shutdown()"],
    "options_hi": ["fclose()", "close()", "endfile()", "shutdown()"],
    "answer_en": "fclose()",
    "answer_hi": "fclose()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the output of `printf(\"%d\", 5 ^ 3);`?",
    "question_hi": "`printf(\"%d\", 5 ^ 3);` का आउटपुट क्या है?",
    "options_en": ["6", "7", "1", "8"],
    "options_hi": ["6", "7", "1", "8"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which function checks if a character is a digit?",
    "question_hi": "कौन सा फ़ंक्शन चेक करता है कि कैरेक्टर डिजिट है या नहीं?",
    "options_en": ["isdigit()", "isalpha()", "isalnum()", "isspace()"],
    "options_hi": ["isdigit()", "isalpha()", "isalnum()", "isspace()"],
    "answer_en": "isdigit()",
    "answer_hi": "isdigit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is the output of `printf(\"%d\", sizeof(double));`?",
    "question_hi": "`printf(\"%d\", sizeof(double));` का आउटपुट क्या है?",
    "options_en": ["4", "8", "16", "32"],
    "options_hi": ["4", "8", "16", "32"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What does `strcat()` function do?",
    "question_hi": "`strcat()` फ़ंक्शन क्या करता है?",
    "options_en": ["Compares strings", "Copies strings", "Concatenates strings", "Finds length"],
    "options_hi": ["स्ट्रिंग्स की तुलना करता है", "स्ट्रिंग्स को कॉपी करता है", "स्ट्रिंग्स को जोड़ता है", "लंबाई ढूँढता है"],
    "answer_en": "Concatenates strings",
    "answer_hi": "स्ट्रिंग्स को जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the output of `printf(\"%d\", sizeof(long long));`?",
    "question_hi": "`printf(\"%d\", sizeof(long long));` का आउटपुट क्या है?",
    "options_en": ["4", "8", "2", "Depends on compiler"],
    "options_hi": ["4", "8", "2", "कम्पाइलर पर निर्भर"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Which function returns the current time?",
    "question_hi": "कौन सा फ़ंक्शन वर्तमान समय रिटर्न करता है?",
    "options_en": ["time()", "clock()", "gettime()", "current_time()"],
    "options_hi": ["time()", "clock()", "gettime()", "current_time()"],
    "answer_en": "time()",
    "answer_hi": "time()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is the output of `printf(\"%d\", 10 == 10);`?",
    "question_hi": "`printf(\"%d\", 10 == 10);` का आउटपुट क्या है?",
    "options_en": ["0", "1", "10", "Error"],
    "options_hi": ["0", "1", "10", "Error"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "Which function is used to open a file?",
    "question_hi": "फ़ाइल ओपन करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    "options_en": ["fopen()", "open()", "fileopen()", "openfile()"],
    "options_hi": ["fopen()", "open()", "fileopen()", "openfile()"],
    "answer_en": "fopen()",
    "answer_hi": "fopen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is the output of `printf(\"%d\", sizeof(wchar_t));`?",
    "question_hi": "`printf(\"%d\", sizeof(wchar_t));` का आउटपुट क्या है?",
    "options_en": ["1", "2", "4", "Compiler dependent"],
    "options_hi": ["1", "2", "4", "कम्पाइलर पर निर्भर"],
    "answer_en": "Compiler dependent",
    "answer_hi": "कम्पाइलर पर निर्भर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What does `fflush()` function do?",
    "question_hi": "`fflush()` फ़ंक्शन क्या करता है?",
    "options_en": ["Flushes file buffer", "Fills buffer", "Closes file", "Opens file"],
    "options_hi": ["फ़ाइल बफ़र फ्लश करता है", "बफ़र भरता है", "फ़ाइल क्लोज करता है", "फ़ाइल ओपन करता है"],
    "answer_en": "Flushes file buffer",
    "answer_hi": "फ़ाइल बफ़र फ्लश करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is the output of `printf(\"%d\", 10 != 5);`?",
    "question_hi": "`printf(\"%d\", 10 != 5);` का आउटपुट क्या है?",
    "options_en": ["0", "1", "10", "5"],
    "options_hi": ["0", "1", "10", "5"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Which function converts character to uppercase?",
    "question_hi": "कैरेक्टर को अपरकेस में बदलने वाला फ़ंक्शन कौन सा है?",
    "options_en": ["toupper()", "tolower()", "upper()", "uppercase()"],
    "options_hi": ["toupper()", "tolower()", "upper()", "uppercase()"],
    "answer_en": "toupper()",
    "answer_hi": "toupper()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is the output of `printf(\"%d\", sizeof(signed char));`?",
    "question_hi": "`printf(\"%d\", sizeof(signed char));` का आउटपुट क्या है?",
    "options_en": ["1", "2", "4", "8"],
    "options_hi": ["1", "2", "4", "8"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What does `perror()` function do?",
    "question_hi": "`perror()` फ़ंक्शन क्या करता है?",
    "options_en": ["Prints error message", "Checks for errors", "Prevents errors", "Handles errors"],
    "options_hi": ["एरर मैसेज प्रिंट करता है", "एरर्स चेक करता है", "एरर्स रोकता है", "एरर्स हैंडल करता है"],
    "answer_en": "Prints error message",
    "answer_hi": "एरर मैसेज प्रिंट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is the output of `printf(\"%d\", 10 >= 10);`?",
    "question_hi": "`printf(\"%d\", 10 >= 10);` का आउटपुट क्या है?",
    "options_en": ["0", "1", "10", "Error"],
    "options_hi": ["0", "1", "10", "Error"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Which function is used to move file pointer?",
    "question_hi": "फ़ाइल पॉइंटर मूव करने के लिए किस फ़ंक्शन का उपयोग किया जाता है?",
    "options_en": ["fseek()", "ftell()", "rewind()", "All of these"],
    "options_hi": ["fseek()", "ftell()", "rewind()", "उपरोक्त सभी"],
    "answer_en": "fseek()",
    "answer_hi": "fseek()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is the output of `printf(\"%d\", sizeof(5 + 2.0));`?",
    "question_hi": "`printf(\"%d\", sizeof(5 + 2.0));` का आउटपुट क्या है?",
    "options_en": ["4", "8", "12", "16"],
    "options_hi": ["4", "8", "12", "16"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What does `setjmp()` function do?",
    "question_hi": "`setjmp()` फ़ंक्शन क्या करता है?",
    "options_en": ["Sets jump location", "Sets buffer", "Saves environment", "Jumps to location"],
    "options_hi": ["जंप लोकेशन सेट करता है", "बफ़र सेट करता है", "एनवायरनमेंट सेव करता है", "लोकेशन पर जंप करता है"],
    "answer_en": "Saves environment",
    "answer_hi": "एनवायरनमेंट सेव करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is the output of `printf(\"%d\", 10 <= 5);`?",
    "question_hi": "`printf(\"%d\", 10 <= 5);` का आउटपुट क्या है?",
    "options_en": ["0", "1", "10", "5"],
    "options_hi": ["0", "1", "10", "5"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "Which function returns absolute value?",
    "question_hi": "एब्सोल्यूट वैल्यू रिटर्न करने वाला फ़ंक्शन कौन सा है?",
    "options_en": ["abs()", "fabs()", "labs()", "All of these"],
    "options_hi": ["abs()", "fabs()", "labs()", "उपरोक्त सभी"],
    "answer_en": "All of these",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the output of `printf(\"%d\", sizeof(struct empty {}));`?",
    "question_hi": "`printf(\"%d\", sizeof(struct empty {}));` का आउटपुट क्या है?",
    "options_en": ["0", "1", "Compile error", "Implementation defined"],
    "options_hi": ["0", "1", "कम्पाइल एरर", "इम्प्लीमेंटेशन डिफाइंड"],
    "answer_en": "Implementation defined",
    "answer_hi": "इम्प्लीमेंटेशन डिफाइंड",
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