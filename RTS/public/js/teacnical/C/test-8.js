const questions = [
  {
    "num": 1,
    "question_en": "What does the 'volatile' keyword indicate in C?",
    "question_hi": "C में 'volatile' कीवर्ड क्या इंडिकेट करता है?",
    "options_en": ["Variable may change unexpectedly", "Variable is constant", "Variable is fast", "Variable is large"],
    "options_hi": ["वेरिएबल अप्रत्याशित रूप से बदल सकता है", "वेरिएबल कॉन्स्टेंट है", "वेरिएबल फास्ट है", "वेरिएबल बड़ा है"],
    "answer_en": "Variable may change unexpectedly",
    "answer_hi": "वेरिएबल अप्रत्याशित रूप से बदल सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Where is 'volatile' commonly used?",
    "question_hi": "'volatile' आमतौर पर कहाँ उपयोग होता है?",
    "options_en": ["Hardware registers, interrupt service routines", "Regular variables", "Constants", "Functions"],
    "options_hi": ["हार्डवेयर रजिस्टर्स, इंटरप्ट सर्विस रूटीन्स", "रेगुलर वेरिएबल्स", "कॉन्स्टेंट्स", "फंक्शन्स"],
    "answer_en": "Hardware registers, interrupt service routines",
    "answer_hi": "हार्डवेयर रजिस्टर्स, इंटरप्ट सर्विस रूटीन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the 'restrict' keyword in C?",
    "question_hi": "C में 'restrict' कीवर्ड क्या है?",
    "options_en": ["Pointer optimization hint", "Variable type", "Function type", "Loop type"],
    "options_hi": ["पॉइंटर ऑप्टिमाइजेशन हिंट", "वेरिएबल टाइप", "फंक्शन टाइप", "लूप टाइप"],
    "answer_en": "Pointer optimization hint",
    "answer_hi": "पॉइंटर ऑप्टिमाइजेशन हिंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does 'restrict' promise to compiler?",
    "question_hi": "'restrict' कंपाइलर को क्या प्रॉमिस करता है?",
    "options_en": ["Pointer is only way to access object", "Pointer is null", "Pointer is constant", "Pointer is volatile"],
    "options_hi": ["पॉइंटर ऑब्जेक्ट एक्सेस करने का एकमात्र तरीका है", "पॉइंटर नल है", "पॉइंटर कॉन्स्टेंट है", "पॉइंटर वोलेटाइल है"],
    "answer_en": "Pointer is only way to access object",
    "answer_hi": "पॉइंटर ऑब्जेक्ट एक्सेस करने का एकमात्र तरीका है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the '_Bool' data type in C?",
    "question_hi": "C में '_Bool' डेटा टाइप क्या है?",
    "options_en": ["Boolean type (true/false)", "Integer type", "Float type", "Character type"],
    "options_hi": ["बूलियन टाइप (सही/गलत)", "इंटीजर टाइप", "फ्लोट टाइप", "कैरेक्टर टाइप"],
    "answer_en": "Boolean type (true/false)",
    "answer_hi": "बूलियन टाइप (सही/गलत)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What values can '_Bool' hold?",
    "question_hi": "'_Bool' कौन सी वैल्यूज होल्ड कर सकता है?",
    "options_en": ["0 or 1", "0 to 255", "-128 to 127", "Any integer"],
    "options_hi": ["0 या 1", "0 से 255", "-128 से 127", "कोई भी इंटीजर"],
    "answer_en": "0 or 1",
    "answer_hi": "0 या 1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'stdbool.h' header for?",
    "question_hi": "'stdbool.h' हेडर किसके लिए है?",
    "options_en": ["Provides bool, true, false macros", "Standard I/O", "Math functions", "Memory allocation"],
    "options_hi": ["bool, true, false मैक्रोस प्रोवाइड करता है", "स्टैंडर्ड I/O", "मैथ फंक्शन्स", "मेमोरी एलोकेशन"],
    "answer_en": "Provides bool, true, false macros",
    "answer_hi": "bool, true, false मैक्रोस प्रोवाइड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does 'bool' represent when using stdbool.h?",
    "question_hi": "stdbool.h का उपयोग करते समय 'bool' क्या रिप्रेजेंट करता है?",
    "options_en": ["Alias for _Bool", "New data type", "Integer", "Float"],
    "options_hi": ["_Bool के लिए एलियास", "नया डेटा टाइप", "इंटीजर", "फ्लोट"],
    "answer_en": "Alias for _Bool",
    "answer_hi": "_Bool के लिए एलियास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is a complex number in C?",
    "question_hi": "C में कॉम्प्लेक्स नंबर क्या है?",
    "options_en": ["Number with real and imaginary parts", "Only real part", "Only imaginary part", "Integer"],
    "options_hi": ["रियल और इमैजिनरी पार्ट्स वाला नंबर", "केवल रियल पार्ट", "केवल इमैजिनरी पार्ट", "इंटीजर"],
    "answer_en": "Number with real and imaginary parts",
    "answer_hi": "रियल और इमैजिनरी पार्ट्स वाला नंबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which header file for complex numbers?",
    "question_hi": "कॉम्प्लेक्स नंबर्स के लिए कौन सी हेडर फाइल?",
    "options_en": ["complex.h", "math.h", "stdio.h", "stdlib.h"],
    "options_hi": ["complex.h", "math.h", "stdio.h", "stdlib.h"],
    "answer_en": "complex.h",
    "answer_hi": "complex.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'float _Complex'?",
    "question_hi": "'float _Complex' क्या है?",
    "options_en": ["Complex number with float components", "Float only", "Complex integer", "Double complex"],
    "options_hi": ["फ्लोट कंपोनेंट्स वाला कॉम्प्लेक्स नंबर", "केवल फ्लोट", "कॉम्प्लेक्स इंटीजर", "डबल कॉम्प्लेक्स"],
    "answer_en": "Complex number with float components",
    "answer_hi": "फ्लोट कंपोनेंट्स वाला कॉम्प्लेक्स नंबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'double _Complex'?",
    "question_hi": "'double _Complex' क्या है?",
    "options_en": ["Complex number with double components", "Float complex", "Integer complex", "Long complex"],
    "options_hi": ["डबल कंपोनेंट्स वाला कॉम्प्लेक्स नंबर", "फ्लोट कॉम्प्लेक्स", "इंटीजर कॉम्प्लेक्स", "लॉन्ग कॉम्प्लेक्स"],
    "answer_en": "Complex number with double components",
    "answer_hi": "डबल कंपोनेंट्स वाला कॉम्प्लेक्स नंबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'long double _Complex'?",
    "question_hi": "'long double _Complex' क्या है?",
    "options_en": ["Complex number with long double components", "Float complex", "Double complex", "Integer complex"],
    "options_hi": ["लॉन्ग डबल कंपोनेंट्स वाला कॉम्प्लेक्स नंबर", "फ्लोट कॉम्प्लेक्स", "डबल कॉम्प्लेक्स", "इंटीजर कॉम्प्लेक्स"],
    "answer_en": "Complex number with long double components",
    "answer_hi": "लॉन्ग डबल कंपोनेंट्स वाला कॉम्प्लेक्स नंबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'imaginary' type in C?",
    "question_hi": "C में 'imaginary' टाइप क्या है?",
    "options_en": ["Pure imaginary number", "Real number", "Complex number", "Integer"],
    "options_hi": ["प्योर इमैजिनरी नंबर", "रियल नंबर", "कॉम्प्लेक्स नंबर", "इंटीजर"],
    "answer_en": "Pure imaginary number",
    "answer_hi": "प्योर इमैजिनरी नंबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'I' macro in complex.h?",
    "question_hi": "complex.h में 'I' मैक्रो क्या है?",
    "options_en": ["Imaginary unit (sqrt(-1))", "Integer", "Index", "Input"],
    "options_hi": ["इमैजिनरी यूनिट (sqrt(-1))", "इंटीजर", "इंडेक्स", "इनपुट"],
    "answer_en": "Imaginary unit (sqrt(-1))",
    "answer_hi": "इमैजिनरी यूनिट (sqrt(-1))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is flexible array member in C?",
    "question_hi": "C में फ्लेक्सिबल एरे मेंबर क्या है?",
    "options_en": ["Array without specified size at end of struct", "Fixed size array", "Dynamic array", "Pointer array"],
    "options_hi": ["स्ट्रक्चर के अंत में अनस्पेसिफाइड साइज वाली एरे", "फिक्स्ड साइज एरे", "डायनामिक एरे", "पॉइंटर एरे"],
    "answer_en": "Array without specified size at end of struct",
    "answer_hi": "स्ट्रक्चर के अंत में अनस्पेसिफाइड साइज वाली एरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "How to declare flexible array member?",
    "question_hi": "फ्लेक्सिबल एरे मेंबर कैसे डिक्लेयर करें?",
    "options_en": ["int arr[]; at end of struct", "int arr[0];", "int *arr;", "Both a and b"],
    "options_hi": ["स्ट्रक्चर के अंत में int arr[];", "int arr[0];", "int *arr;", "a और b दोनों"],
    "answer_en": "int arr[]; at end of struct",
    "answer_hi": "स्ट्रक्चर के अंत में int arr[];",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Where must flexible array member be placed?",
    "question_hi": "फ्लेक्सिबल एरे मेंबर कहाँ प्लेस होना चाहिए?",
    "options_en": ["Last member of structure", "First member", "Middle", "Anywhere"],
    "options_hi": ["स्ट्रक्चर का आखिरी मेंबर", "पहला मेंबर", "मध्य", "कहीं भी"],
    "answer_en": "Last member of structure",
    "answer_hi": "स्ट्रक्चर का आखिरी मेंबर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is designated initializer in C?",
    "question_hi": "C में डिज़ाइनेटेड इनिशियलाइज़र क्या है?",
    "options_en": ["Initializing specific array elements", "Initializing all elements", "No initialization", "Default initialization"],
    "options_hi": ["स्पेसिफिक एरे एलिमेंट्स इनिशियलाइज़ करना", "सभी एलिमेंट्स इनिशियलाइज़ करना", "कोई इनिशियलाइज़ेशन नहीं", "डिफ़ॉल्ट इनिशियलाइज़ेशन"],
    "answer_en": "Initializing specific array elements",
    "answer_hi": "स्पेसिफिक एरे एलिमेंट्स इनिशियलाइज़ करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Syntax for designated initializer for array?",
    "question_hi": "एरे के लिए डिज़ाइनेटेड इनिशियलाइज़र का सिंटैक्स?",
    "options_en": ["[index] = value", "index = value", "value @ index", "index : value"],
    "options_hi": ["[index] = value", "index = value", "value @ index", "index : value"],
    "answer_en": "[index] = value",
    "answer_hi": "[index] = value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Example: int arr[5] = {[2] = 10, [4] = 20};",
    "question_hi": "उदाहरण: int arr[5] = {[2] = 10, [4] = 20};",
    "options_en": ["arr[2]=10, arr[4]=20, others 0", "All elements 0", "Error", "arr[0]=10"],
    "options_hi": ["arr[2]=10, arr[4]=20, बाकी 0", "सभी एलिमेंट्स 0", "एरर", "arr[0]=10"],
    "answer_en": "arr[2]=10, arr[4]=20, others 0",
    "answer_hi": "arr[2]=10, arr[4]=20, बाकी 0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is compound literal in C?",
    "question_hi": "C में कंपाउंड लिटरल क्या है?",
    "options_en": ["Unnamed object created in expression", "Named object", "Variable", "Function"],
    "options_hi": ["एक्सप्रेशन में क्रिएट अननेम्ड ऑब्जेक्ट", "नेम्ड ऑब्जेक्ट", "वेरिएबल", "फंक्शन"],
    "answer_en": "Unnamed object created in expression",
    "answer_hi": "एक्सप्रेशन में क्रिएट अननेम्ड ऑब्जेक्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Syntax for compound literal?",
    "question_hi": "कंपाउंड लिटरल का सिंटैक्स?",
    "options_en": ["(type){initializers}", "type{initializers}", "{initializers}type", "type(initializers)"],
    "options_hi": ["(type){initializers}", "type{initializers}", "{initializers}type", "type(initializers)"],
    "answer_en": "(type){initializers}",
    "answer_hi": "(type){initializers}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Example: int *p = (int[]){1, 2, 3};",
    "question_hi": "उदाहरण: int *p = (int[]){1, 2, 3};",
    "options_en": ["p points to anonymous array {1,2,3}", "Error", "p is integer", "p is array"],
    "options_hi": ["p अननोन एरे {1,2,3} की ओर इशारा करता है", "एरर", "p इंटीजर है", "p एरे है"],
    "answer_en": "p points to anonymous array {1,2,3}",
    "answer_hi": "p अननोन एरे {1,2,3} की ओर इशारा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is variable length array (VLA) in C?",
    "question_hi": "C में वेरिएबल लेंथ एरे (VLA) क्या है?",
    "options_en": ["Array with size determined at runtime", "Fixed size array", "Dynamic array with malloc", "Pointer array"],
    "options_hi": ["रनटाइम पर डिटरमाइंड साइज वाली एरे", "फिक्स्ड साइज एरे", "malloc वाली डायनामिक एरे", "पॉइंटर एरे"],
    "answer_en": "Array with size determined at runtime",
    "answer_hi": "रनटाइम पर डिटरमाइंड साइज वाली एरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "How to declare VLA?",
    "question_hi": "VLA कैसे डिक्लेयर करें?",
    "options_en": ["int arr[n]; where n is variable", "int arr[10];", "int *arr = malloc(n);", "int arr[];"],
    "options_hi": ["int arr[n]; जहाँ n वेरिएबल है", "int arr[10];", "int *arr = malloc(n);", "int arr[];"],
    "answer_en": "int arr[n]; where n is variable",
    "answer_hi": "int arr[n]; जहाँ n वेरिएबल है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Can VLA be global?",
    "question_hi": "क्या VLA ग्लोबल हो सकता है?",
    "options_en": ["No", "Yes", "Sometimes", "Only in functions"],
    "options_hi": ["नहीं", "हाँ", "कभी-कभी", "केवल फंक्शन्स में"],
    "answer_en": "No",
    "answer_hi": "नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Can VLA be static?",
    "question_hi": "क्या VLA स्टैटिक हो सकता है?",
    "options_en": ["No", "Yes", "Sometimes", "Only in main"],
    "options_hi": ["नहीं", "हाँ", "कभी-कभी", "केवल main में"],
    "answer_en": "No",
    "answer_hi": "नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'typeof' operator in C?",
    "question_hi": "C में 'typeof' ऑपरेटर क्या है?",
    "options_en": ["Gets type of expression (GCC extension)", "Standard C operator", "Gets value", "Gets size"],
    "options_hi": ["एक्सप्रेशन का टाइप प्राप्त करता है (GCC एक्सटेंशन)", "स्टैंडर्ड C ऑपरेटर", "वैल्यू प्राप्त करता है", "साइज प्राप्त करता है"],
    "answer_en": "Gets type of expression (GCC extension)",
    "answer_hi": "एक्सप्रेशन का टाइप प्राप्त करता है (GCC एक्सटेंशन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Is 'typeof' standard C?",
    "question_hi": "क्या 'typeof' स्टैंडर्ड C है?",
    "options_en": ["No, GCC extension", "Yes, C89", "Yes, C99", "Yes, C11"],
    "options_hi": ["नहीं, GCC एक्सटेंशन", "हाँ, C89", "हाँ, C99", "हाँ, C11"],
    "answer_en": "No, GCC extension",
    "answer_hi": "नहीं, GCC एक्सटेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'inline' function specifier in C?",
    "question_hi": "C में 'inline' फंक्शन स्पेसिफायर क्या है?",
    "options_en": ["Suggestion to compiler to inline function", "Function must be inlined", "External function", "Static function"],
    "options_hi": ["कंपाइलर को फंक्शन इनलाइन करने का सजेशन", "फंक्शन इनलाइन होना चाहिए", "एक्सटर्नल फंक्शन", "स्टैटिक फंक्शन"],
    "answer_en": "Suggestion to compiler to inline function",
    "answer_hi": "कंपाइलर को फंक्शन इनलाइन करने का सजेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "Which C standard introduced 'inline'?",
    "question_hi": "किस C स्टैंडर्ड ने 'inline' इंट्रोड्यूस किया?",
    "options_en": ["C99", "C89", "C11", "C17"],
    "options_hi": ["C99", "C89", "C11", "C17"],
    "answer_en": "C99",
    "answer_hi": "C99",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is '_Noreturn' function specifier?",
    "question_hi": "'_Noreturn' फंक्शन स्पेसिफायर क्या है?",
    "options_en": ["Function does not return to caller", "Function returns value", "Function is recursive", "Function is inline"],
    "options_hi": ["फंक्शन कॉलर पर रिटर्न नहीं करता", "फंक्शन वैल्यू रिटर्न करता है", "फंक्शन रिकर्सिव है", "फंक्शन इनलाइन है"],
    "answer_en": "Function does not return to caller",
    "answer_hi": "फंक्शन कॉलर पर रिटर्न नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Example of _Noreturn function?",
    "question_hi": "_Noreturn फंक्शन का उदाहरण?",
    "options_en": ["exit()", "printf()", "scanf()", "main()"],
    "options_hi": ["exit()", "printf()", "scanf()", "main()"],
    "answer_en": "exit()",
    "answer_hi": "exit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'static_assert' in C?",
    "question_hi": "C में 'static_assert' क्या है?",
    "options_en": ["Compile-time assertion", "Runtime assertion", "Function", "Variable"],
    "options_hi": ["कंपाइल-टाइम असर्शन", "रनटाइम असर्शन", "फंक्शन", "वेरिएबल"],
    "answer_en": "Compile-time assertion",
    "answer_hi": "कंपाइल-टाइम असर्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which C standard introduced static_assert?",
    "question_hi": "किस C स्टैंडर्ड ने static_assert इंट्रोड्यूस किया?",
    "options_en": ["C11", "C99", "C89", "C17"],
    "options_hi": ["C11", "C99", "C89", "C17"],
    "answer_en": "C11",
    "answer_hi": "C11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Syntax for static_assert?",
    "question_hi": "static_assert का सिंटैक्स?",
    "options_en": ["static_assert(constant_expression, message)", "assert(expression)", "static assert", "compile_assert"],
    "options_hi": ["static_assert(constant_expression, message)", "assert(expression)", "static assert", "compile_assert"],
    "answer_en": "static_assert(constant_expression, message)",
    "answer_hi": "static_assert(constant_expression, message)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "Example: static_assert(sizeof(int)==4, \"int must be 4 bytes\");",
    "question_hi": "उदाहरण: static_assert(sizeof(int)==4, \"int must be 4 bytes\");",
    "options_en": ["Compile fails if int not 4 bytes", "Runtime error", "Warning", "No effect"],
    "options_hi": ["कंपाइल फेल अगर int 4 बाइट्स नहीं", "रनटाइम एरर", "वार्निंग", "कोई प्रभाव नहीं"],
    "answer_en": "Compile fails if int not 4 bytes",
    "answer_hi": "कंपाइल फेल अगर int 4 बाइट्स नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is '_Generic' in C?",
    "question_hi": "C में '_Generic' क्या है?",
    "options_en": ["Type-generic selection (C11)", "Generic function", "Generic variable", "Generic type"],
    "options_hi": ["टाइप-जेनेरिक सिलेक्शन (C11)", "जेनेरिक फंक्शन", "जेनेरिक वेरिएबल", "जेनेरिक टाइप"],
    "answer_en": "Type-generic selection (C11)",
    "answer_hi": "टाइप-जेनेरिक सिलेक्शन (C11)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does _Generic provide?",
    "question_hi": "_Generic क्या प्रोवाइड करता है?",
    "options_en": ["Switch-like selection based on type", "Value selection", "Function selection", "Variable selection"],
    "options_hi": ["टाइप के आधार पर स्विच-जैसा सिलेक्शन", "वैल्यू सिलेक्शन", "फंक्शन सिलेक्शन", "वेरिएबल सिलेक्शन"],
    "answer_en": "Switch-like selection based on type",
    "answer_hi": "टाइप के आधार पर स्विच-जैसा सिलेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is alignment in C?",
    "question_hi": "C में अलाइनमेंट क्या है?",
    "options_en": ["Memory address requirement for data type", "Data size", "Data value", "Data type"],
    "options_hi": ["डेटा टाइप के लिए मेमोरी एड्रेस रिक्वायरमेंट", "डेटा साइज", "डेटा वैल्यू", "डेटा टाइप"],
    "answer_en": "Memory address requirement for data type",
    "answer_hi": "डेटा टाइप के लिए मेमोरी एड्रेस रिक्वायरमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is '_Alignas' specifier?",
    "question_hi": "'_Alignas' स्पेसिफायर क्या है?",
    "options_en": ["Specifies alignment requirement", "Specifies size", "Specifies type", "Specifies value"],
    "options_hi": ["अलाइनमेंट रिक्वायरमेंट स्पेसिफाई करता है", "साइज स्पेसिफाई करता है", "टाइप स्पेसिफाई करता है", "वैल्यू स्पेसिफाई करता है"],
    "answer_en": "Specifies alignment requirement",
    "answer_hi": "अलाइनमेंट रिक्वायरमेंट स्पेसिफाई करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is '_Alignof' operator?",
    "question_hi": "'_Alignof' ऑपरेटर क्या है?",
    "options_en": ["Gets alignment requirement of type", "Gets size", "Gets value", "Gets address"],
    "options_hi": ["टाइप की अलाइनमेंट रिक्वायरमेंट प्राप्त करता है", "साइज प्राप्त करता है", "वैल्यू प्राप्त करता है", "एड्रेस प्राप्त करता है"],
    "answer_en": "Gets alignment requirement of type",
    "answer_hi": "टाइप की अलाइनमेंट रिक्वायरमेंट प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which C standard introduced alignment features?",
    "question_hi": "किस C स्टैंडर्ड ने अलाइनमेंट फीचर्स इंट्रोड्यूस किए?",
    "options_en": ["C11", "C99", "C89", "C17"],
    "options_hi": ["C11", "C99", "C89", "C17"],
    "answer_en": "C11",
    "answer_hi": "C11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'max_align_t' type?",
    "question_hi": "'max_align_t' टाइप क्या है?",
    "options_en": ["Type with maximum alignment", "Minimum alignment", "Average alignment", "No alignment"],
    "options_hi": ["मैक्सिमम अलाइनमेंट वाला टाइप", "मिनिमम अलाइनमेंट", "औसत अलाइनमेंट", "कोई अलाइनमेंट नहीं"],
    "answer_en": "Type with maximum alignment",
    "answer_hi": "मैक्सिमम अलाइनमेंट वाला टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'aligned_alloc' function?",
    "question_hi": "'aligned_alloc' फंक्शन क्या है?",
    "options_en": ["Allocates aligned memory", "Allocates normal memory", "Frees memory", "Reallocates memory"],
    "options_hi": ["अलाइन्ड मेमोरी एलोकेट करता है", "नॉर्मल मेमोरी एलोकेट करता है", "मेमोरी फ्री करता है", "मेमोरी रीएलोकेट करता है"],
    "answer_en": "Allocates aligned memory",
    "answer_hi": "अलाइन्ड मेमोरी एलोकेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'thread_local' storage specifier?",
    "question_hi": "'thread_local' स्टोरेज स्पेसिफायर क्या है?",
    "options_en": ["Variable unique to each thread", "Shared variable", "Global variable", "Static variable"],
    "options_hi": ["प्रत्येक थ्रेड के लिए यूनिक वेरिएबल", "शेयर्ड वेरिएबल", "ग्लोबल वेरिएबल", "स्टैटिक वेरिएबल"],
    "answer_en": "Variable unique to each thread",
    "answer_hi": "प्रत्येक थ्रेड के लिए यूनिक वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which C standard introduced thread_local?",
    "question_hi": "किस C स्टैंडर्ड ने thread_local इंट्रोड्यूस किया?",
    "options_en": ["C11", "C99", "C89", "C17"],
    "options_hi": ["C11", "C99", "C89", "C17"],
    "answer_en": "C11",
    "answer_hi": "C11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'atomic' type qualifier?",
    "question_hi": "'atomic' टाइप क्वालीफायर क्या है?",
    "options_en": ["Atomic operations on variable", "Normal operations", "Slow operations", "Fast operations"],
    "options_hi": ["वेरिएबल पर एटॉमिक ऑपरेशन्स", "नॉर्मल ऑपरेशन्स", "स्लो ऑपरेशन्स", "फास्ट ऑपरेशन्स"],
    "answer_en": "Atomic operations on variable",
    "answer_hi": "वेरिएबल पर एटॉमिक ऑपरेशन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which header for atomic operations?",
    "question_hi": "एटॉमिक ऑपरेशन्स के लिए कौन सी हेडर?",
    "options_en": ["stdatomic.h", "stdio.h", "stdlib.h", "threads.h"],
    "options_hi": ["stdatomic.h", "stdio.h", "stdlib.h", "threads.h"],
    "answer_en": "stdatomic.h",
    "answer_hi": "stdatomic.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'memory order' in atomics?",
    "question_hi": "एटॉमिक्स में 'मेमोरी ऑर्डर' क्या है?",
    "options_en": ["Ordering constraints for atomic operations", "Memory size", "Memory address", "Memory type"],
    "options_hi": ["एटॉमिक ऑपरेशन्स के लिए ऑर्डरिंग कंस्ट्रेंट्स", "मेमोरी साइज", "मेमोरी एड्रेस", "मेमोरी टाइप"],
    "answer_en": "Ordering constraints for atomic operations",
    "answer_hi": "एटॉमिक ऑपरेशन्स के लिए ऑर्डरिंग कंस्ट्रेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'fences' in atomic operations?",
    "question_hi": "एटॉमिक ऑपरेशन्स में 'फेंस' क्या है?",
    "options_en": ["Memory barriers", "Memory allocation", "Memory free", "Memory copy"],
    "options_hi": ["मेमोरी बैरियर्स", "मेमोरी एलोकेशन", "मेमोरी फ्री", "मेमोरी कॉपी"],
    "answer_en": "Memory barriers",
    "answer_hi": "मेमोरी बैरियर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'signal handler' in C?",
    "question_hi": "C में 'सिग्नल हैंडलर' क्या है?",
    "options_en": ["Function called when signal occurs", "Regular function", "Main function", "Library function"],
    "options_hi": ["फंक्शन जो सिग्नल होने पर कॉल होता है", "रेगुलर फंक्शन", "मेन फंक्शन", "लाइब्रेरी फंक्शन"],
    "answer_en": "Function called when signal occurs",
    "answer_hi": "फंक्शन जो सिग्नल होने पर कॉल होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which header for signal handling?",
    "question_hi": "सिग्नल हैंडलिंग के लिए कौन सी हेडर?",
    "options_en": ["signal.h", "stdio.h", "stdlib.h", "setjmp.h"],
    "options_hi": ["signal.h", "stdio.h", "stdlib.h", "setjmp.h"],
    "answer_en": "signal.h",
    "answer_hi": "signal.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'signal' function?",
    "question_hi": "'signal' फंक्शन क्या है?",
    "options_en": ["Sets signal handler", "Sends signal", "Ignores signal", "Blocks signal"],
    "options_hi": ["सिग्नल हैंडलर सेट करता है", "सिग्नल भेजता है", "सिग्नल इग्नोर करता है", "सिग्नल ब्लॉक करता है"],
    "answer_en": "Sets signal handler",
    "answer_hi": "सिग्नल हैंडलर सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'raise' function?",
    "question_hi": "'raise' फंक्शन क्या है?",
    "options_en": ["Sends signal to program", "Sets handler", "Ignores signal", "Blocks signal"],
    "options_hi": ["प्रोग्राम को सिग्नल भेजता है", "हैंडलर सेट करता है", "सिग्नल इग्नोर करता है", "सिग्नल ब्लॉक करता है"],
    "answer_en": "Sends signal to program",
    "answer_hi": "प्रोग्राम को सिग्नल भेजता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'SIGINT' signal?",
    "question_hi": "'SIGINT' सिग्नल क्या है?",
    "options_en": ["Interrupt (Ctrl+C)", "Terminate", "Segmentation fault", "Floating point exception"],
    "options_hi": ["इंटरप्ट (Ctrl+C)", "टर्मिनेट", "सेगमेंटेशन फॉल्ट", "फ्लोटिंग पॉइंट एक्सेप्शन"],
    "answer_en": "Interrupt (Ctrl+C)",
    "answer_hi": "इंटरप्ट (Ctrl+C)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'SIGSEGV' signal?",
    "question_hi": "'SIGSEGV' सिग्नल क्या है?",
    "options_en": ["Segmentation violation", "Interrupt", "Terminate", "Alarm"],
    "options_hi": ["सेगमेंटेशन वायलेशन", "इंटरप्ट", "टर्मिनेट", "अलार्म"],
    "answer_en": "Segmentation violation",
    "answer_hi": "सेगमेंटेशन वायलेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'setjmp' and 'longjmp'?",
    "question_hi": "'setjmp' और 'longjmp' क्या हैं?",
    "options_en": ["Non-local jumps", "Local jumps", "Function calls", "Loops"],
    "options_hi": ["नॉन-लोकल जम्प्स", "लोकल जम्प्स", "फंक्शन कॉल्स", "लूप्स"],
    "answer_en": "Non-local jumps",
    "answer_hi": "नॉन-लोकल जम्प्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which header for setjmp/longjmp?",
    "question_hi": "setjmp/longjmp के लिए कौन सी हेडर?",
    "options_en": ["setjmp.h", "stdio.h", "stdlib.h", "signal.h"],
    "options_hi": ["setjmp.h", "stdio.h", "stdlib.h", "signal.h"],
    "answer_en": "setjmp.h",
    "answer_hi": "setjmp.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'jmp_buf' type?",
    "question_hi": "'jmp_buf' टाइप क्या है?",
    "options_en": ["Buffer for saving environment", "Jump buffer", "File buffer", "Memory buffer"],
    "options_hi": ["एनवायरनमेंट सेव करने के लिए बफर", "जम्प बफर", "फाइल बफर", "मेमोरी बफर"],
    "answer_en": "Buffer for saving environment",
    "answer_hi": "एनवायरनमेंट सेव करने के लिए बफर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does 'setjmp' return?",
    "question_hi": "'setjmp' क्या रिटर्न करता है?",
    "options_en": ["0 when called directly, non-zero when returned via longjmp", "Always 0", "Always 1", "Address"],
    "options_hi": ["0 जब डायरेक्ट कॉल, नॉन-जीरो जब longjmp से रिटर्न", "हमेशा 0", "हमेशा 1", "एड्रेस"],
    "answer_en": "0 when called directly, non-zero when returned via longjmp",
    "answer_hi": "0 जब डायरेक्ट कॉल, नॉन-जीरो जब longjmp से रिटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'va_start' macro?",
    "question_hi": "'va_start' मैक्रो क्या है?",
    "options_en": ["Starts processing variable arguments", "Ends processing", "Gets next argument", "Copies arguments"],
    "options_hi": ["वेरिएबल आर्ग्युमेंट्स प्रोसेसिंग शुरू करता है", "प्रोसेसिंग खत्म करता है", "अगला आर्ग्युमेंट प्राप्त करता है", "आर्ग्युमेंट्स कॉपी करता है"],
    "answer_en": "Starts processing variable arguments",
    "answer_hi": "वेरिएबल आर्ग्युमेंट्स प्रोसेसिंग शुरू करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'va_arg' macro?",
    "question_hi": "'va_arg' मैक्रो क्या है?",
    "options_en": ["Gets next argument", "Starts processing", "Ends processing", "Copies arguments"],
    "options_hi": ["अगला आर्ग्युमेंट प्राप्त करता है", "प्रोसेसिंग शुरू करता है", "प्रोसेसिंग खत्म करता है", "आर्ग्युमेंट्स कॉपी करता है"],
    "answer_en": "Gets next argument",
    "answer_hi": "अगला आर्ग्युमेंट प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'va_end' macro?",
    "question_hi": "'va_end' मैक्रो क्या है?",
    "options_en": ["Ends processing variable arguments", "Starts processing", "Gets next argument", "Copies arguments"],
    "options_hi": ["वेरिएबल आर्ग्युमेंट्स प्रोसेसिंग खत्म करता है", "प्रोसेसिंग शुरू करता है", "अगला आर्ग्युमेंट प्राप्त करता है", "आर्ग्युमेंट्स कॉपी करता है"],
    "answer_en": "Ends processing variable arguments",
    "answer_hi": "वेरिएबल आर्ग्युमेंट्स प्रोसेसिंग खत्म करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'va_copy' macro?",
    "question_hi": "'va_copy' मैक्रो क्या है?",
    "options_en": ["Copies va_list", "Starts processing", "Ends processing", "Gets argument"],
    "options_hi": ["va_list कॉपी करता है", "प्रोसेसिंग शुरू करता है", "प्रोसेसिंग खत्म करता है", "आर्ग्युमेंट प्राप्त करता है"],
    "answer_en": "Copies va_list",
    "answer_hi": "va_list कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'offsetof' macro?",
    "question_hi": "'offsetof' मैक्रो क्या है?",
    "options_en": ["Offset of member in structure", "Size of structure", "Address of structure", "Value of member"],
    "options_hi": ["स्ट्रक्चर में मेंबर का ऑफसेट", "स्ट्रक्चर का साइज", "स्ट्रक्चर का एड्रेस", "मेंबर की वैल्यू"],
    "answer_en": "Offset of member in structure",
    "answer_hi": "स्ट्रक्चर में मेंबर का ऑफसेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "Which header for offsetof?",
    "question_hi": "offsetof के लिए कौन सी हेडर?",
    "options_en": ["stddef.h", "stdio.h", "stdlib.h", "stdarg.h"],
    "options_hi": ["stddef.h", "stdio.h", "stdlib.h", "stdarg.h"],
    "answer_en": "stddef.h",
    "answer_hi": "stddef.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'container_of' macro?",
    "question_hi": "'container_of' मैक्रो क्या है?",
    "options_en": ["Gets structure from member pointer (Linux kernel)", "Gets member from structure", "Gets size", "Gets offset"],
    "options_hi": ["मेंबर पॉइंटर से स्ट्रक्चर प्राप्त करता है (लिनक्स कर्नेल)", "स्ट्रक्चर से मेंबर प्राप्त करता है", "साइज प्राप्त करता है", "ऑफसेट प्राप्त करता है"],
    "answer_en": "Gets structure from member pointer (Linux kernel)",
    "answer_hi": "मेंबर पॉइंटर से स्ट्रक्चर प्राप्त करता है (लिनक्स कर्नेल)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Is 'container_of' standard C?",
    "question_hi": "क्या 'container_of' स्टैंडर्ड C है?",
    "options_en": ["No, Linux kernel macro", "Yes, C89", "Yes, C99", "Yes, C11"],
    "options_hi": ["नहीं, लिनक्स कर्नेल मैक्रो", "हाँ, C89", "हाँ, C99", "हाँ, C11"],
    "answer_en": "No, Linux kernel macro",
    "answer_hi": "नहीं, लिनक्स कर्नेल मैक्रो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'attribute' in GCC?",
    "question_hi": "GCC में 'एट्रिब्यूट' क्या है?",
    "options_en": ["Compiler-specific extensions", "Standard C", "Variable", "Function"],
    "options_hi": ["कंपाइलर-स्पेसिफिक एक्सटेंशन्स", "स्टैंडर्ड C", "वेरिएबल", "फंक्शन"],
    "answer_en": "Compiler-specific extensions",
    "answer_hi": "कंपाइलर-स्पेसिफिक एक्सटेंशन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is '__attribute__((packed))'?",
    "question_hi": "'__attribute__((packed))' क्या है?",
    "options_en": ["Packs structure without padding", "Adds padding", "Aligns structure", "Pads structure"],
    "options_hi": ["पैडिंग के बिना स्ट्रक्चर पैक करता है", "पैडिंग जोड़ता है", "स्ट्रक्चर अलाइन करता है", "स्ट्रक्चर पैड करता है"],
    "answer_en": "Packs structure without padding",
    "answer_hi": "पैडिंग के बिना स्ट्रक्चर पैक करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is '__attribute__((aligned(n)))'?",
    "question_hi": "'__attribute__((aligned(n)))' क्या है?",
    "options_en": ["Aligns variable to n-byte boundary", "Packs variable", "Pads variable", "Sizes variable"],
    "options_hi": ["वेरिएबल को n-बाइट बाउंड्री पर अलाइन करता है", "वेरिएबल पैक करता है", "वेरिएबल पैड करता है", "वेरिएबल साइज करता है"],
    "answer_en": "Aligns variable to n-byte boundary",
    "answer_hi": "वेरिएबल को n-बाइट बाउंड्री पर अलाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is '__attribute__((noreturn))'?",
    "question_hi": "'__attribute__((noreturn))' क्या है?",
    "options_en": ["Function does not return", "Function returns", "Function is inline", "Function is static"],
    "options_hi": ["फंक्शन रिटर्न नहीं करता", "फंक्शन रिटर्न करता है", "फंक्शन इनलाइन है", "फंक्शन स्टैटिक है"],
    "answer_en": "Function does not return",
    "answer_hi": "फंक्शन रिटर्न नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is '__attribute__((deprecated))'?",
    "question_hi": "'__attribute__((deprecated))' क्या है?",
    "options_en": ["Warns if deprecated feature used", "No warning", "Error", "No effect"],
    "options_hi": ["वार्न करता है अगर डिप्रीकेटेड फीचर उपयोग", "कोई वार्निंग नहीं", "एरर", "कोई प्रभाव नहीं"],
    "answer_en": "Warns if deprecated feature used",
    "answer_hi": "वार्न करता है अगर डिप्रीकेटेड फीचर उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'pragma pack' in MSVC?",
    "question_hi": "MSVC में 'pragma pack' क्या है?",
    "options_en": ["Controls structure packing", "Controls alignment", "Controls optimization", "Controls warning"],
    "options_hi": ["स्ट्रक्चर पैकिंग कंट्रोल करता है", "अलाइनमेंट कंट्रोल करता है", "ऑप्टिमाइजेशन कंट्रोल करता है", "वार्निंग कंट्रोल करता है"],
    "answer_en": "Controls structure packing",
    "answer_hi": "स्ट्रक्चर पैकिंग कंट्रोल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'strict aliasing rule' in C?",
    "question_hi": "C में 'स्ट्रिक्ट एलायसिंग रूल' क्या है?",
    "options_en": ["Different types cannot alias same memory", "Can alias", "No rule", "Sometimes"],
    "options_hi": ["अलग टाइप्स समान मेमोरी एलायस नहीं कर सकते", "एलायस कर सकते हैं", "कोई रूल नहीं", "कभी-कभी"],
    "answer_en": "Different types cannot alias same memory",
    "answer_hi": "अलग टाइप्स समान मेमोरी एलायस नहीं कर सकते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What breaks strict aliasing?",
    "question_hi": "क्या स्ट्रिक्ट एलायसिंग तोड़ता है?",
    "options_en": ["Type punning through pointers", "Same type access", "Character type access", "memcpy"],
    "options_hi": ["पॉइंटर्स के माध्यम से टाइप पनिंग", "समान टाइप एक्सेस", "कैरेक्टर टाइप एक्सेस", "memcpy"],
    "answer_en": "Type punning through pointers",
    "answer_hi": "पॉइंटर्स के माध्यम से टाइप पनिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'type punning'?",
    "question_hi": "'टाइप पनिंग' क्या है?",
    "options_en": ["Accessing object as different type", "Same type access", "Type conversion", "Type casting"],
    "options_hi": ["ऑब्जेक्ट को अलग टाइप के रूप में एक्सेस करना", "समान टाइप एक्सेस", "टाइप कन्वर्जन", "टाइप कास्टिंग"],
    "answer_en": "Accessing object as different type",
    "answer_hi": "ऑब्जेक्ट को अलग टाइप के रूप में एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Safe way for type punning in C?",
    "question_hi": "C में टाइप पनिंग का सुरक्षित तरीका?",
    "options_en": ["Use memcpy or union (C99)", "Pointer casting", "Direct access", "No way"],
    "options_hi": ["memcpy या यूनियन उपयोग करें (C99)", "पॉइंटर कास्टिंग", "डायरेक्ट एक्सेस", "कोई तरीका नहीं"],
    "answer_en": "Use memcpy or union (C99)",
    "answer_hi": "memcpy या यूनियन उपयोग करें (C99)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'sequence point' in C?",
    "question_hi": "C में 'सीक्वेंस प्वाइंट' क्या है?",
    "options_en": ["Point where all side effects complete", "No point", "Random point", "Function start"],
    "options_hi": ["वह प्वाइंट जहां सभी साइड इफेक्ट्स कंप्लीट होते हैं", "कोई प्वाइंट नहीं", "रैंडम प्वाइंट", "फंक्शन स्टार्ट"],
    "answer_en": "Point where all side effects complete",
    "answer_hi": "वह प्वाइंट जहां सभी साइड इफेक्ट्स कंप्लीट होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "Example of sequence point?",
    "question_hi": "सीक्वेंस प्वाइंट का उदाहरण?",
    "options_en": ["End of full expression (;)", "Middle of expression", "No expression", "Variable declaration"],
    "options_hi": ["फुल एक्सप्रेशन का अंत (;)", "एक्सप्रेशन का मध्य", "कोई एक्सप्रेशन नहीं", "वेरिएबल डिक्लेरेशन"],
    "answer_en": "End of full expression (;)",
    "answer_hi": "फुल एक्सप्रेशन का अंत (;)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'undefined behavior' in C?",
    "question_hi": "C में 'अनडिफाइंड बिहेवियर' क्या है?",
    "options_en": ["Behavior not defined by standard", "Defined behavior", "Implementation-defined", "Unspecified"],
    "options_hi": ["स्टैंडर्ड द्वारा डिफाइन नहीं किया गया बिहेवियर", "डिफाइन्ड बिहेवियर", "इम्प्लीमेंटेशन-डिफाइन्ड", "अनस्पेसिफाइड"],
    "answer_en": "Behavior not defined by standard",
    "answer_hi": "स्टैंडर्ड द्वारा डिफाइन नहीं किया गया बिहेवियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "Example of undefined behavior?",
    "question_hi": "अनडिफाइंड बिहेवियर का उदाहरण?",
    "options_en": ["Accessing array out of bounds", "Accessing within bounds", "Printing", "Reading input"],
    "options_hi": ["एरे बाउंड्स से बाहर एक्सेस करना", "बाउंड्स के अंदर एक्सेस करना", "प्रिंटिंग", "इनपुट रीडिंग"],
    "answer_en": "Accessing array out of bounds",
    "answer_hi": "एरे बाउंड्स से बाहर एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'implementation-defined behavior'?",
    "question_hi": "'इम्प्लीमेंटेशन-डिफाइन्ड बिहेवियर' क्या है?",
    "options_en": ["Behavior defined by implementation", "Undefined", "Unspecified", "Always same"],
    "options_hi": ["इम्प्लीमेंटेशन द्वारा डिफाइन्ड बिहेवियर", "अनडिफाइंड", "अनस्पेसिफाइड", "हमेशा समान"],
    "answer_en": "Behavior defined by implementation",
    "answer_hi": "इम्प्लीमेंटेशन द्वारा डिफाइन्ड बिहेवियर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Example of implementation-defined behavior?",
    "question_hi": "इम्प्लीमेंटेशन-डिफाइन्ड बिहेवियर का उदाहरण?",
    "options_en": ["Size of int", "Result of 5+3", "Printing Hello", "Reading input"],
    "options_hi": ["int का साइज", "5+3 का रिजल्ट", "Hello प्रिंटिंग", "इनपुट रीडिंग"],
    "answer_en": "Size of int",
    "answer_hi": "int का साइज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'unspecified behavior'?",
    "question_hi": "'अनस्पेसिफाइड बिहेवियर' क्या है?",
    "options_en": ["Behavior where standard provides multiple possibilities", "Undefined", "Implementation-defined", "Always same"],
    "options_hi": ["बिहेवियर जहां स्टैंडर्ड मल्टीपल पॉसिबिलिटीज प्रोवाइड करता है", "अनडिफाइंड", "इम्प्लीमेंटेशन-डिफाइन्ड", "हमेशा समान"],
    "answer_en": "Behavior where standard provides multiple possibilities",
    "answer_hi": "बिहेवियर जहां स्टैंडर्ड मल्टीपल पॉसिबिलिटीज प्रोवाइड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Example of unspecified behavior?",
    "question_hi": "अनस्पेसिफाइड बिहेवियर का उदाहरण?",
    "options_en": ["Order of evaluation of function arguments", "Result of 2+2", "Printing", "Variable declaration"],
    "options_hi": ["फंक्शन आर्ग्युमेंट्स के मूल्यांकन का क्रम", "2+2 का रिजल्ट", "प्रिंटिंग", "वेरिएबल डिक्लेरेशन"],
    "answer_en": "Order of evaluation of function arguments",
    "answer_hi": "फंक्शन आर्ग्युमेंट्स के मूल्यांकन का क्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'locale' in C?",
    "question_hi": "C में 'लोकेल' क्या है?",
    "options_en": ["Cultural and language settings", "Memory location", "Variable", "Function"],
    "options_hi": ["सांस्कृतिक और भाषा सेटिंग्स", "मेमोरी लोकेशन", "वेरिएबल", "फंक्शन"],
    "answer_en": "Cultural and language settings",
    "answer_hi": "सांस्कृतिक और भाषा सेटिंग्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Which header for locale?",
    "question_hi": "लोकेल के लिए कौन सी हेडर?",
    "options_en": ["locale.h", "stdio.h", "stdlib.h", "string.h"],
    "options_hi": ["locale.h", "stdio.h", "stdlib.h", "string.h"],
    "answer_en": "locale.h",
    "answer_hi": "locale.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'setlocale' function?",
    "question_hi": "'setlocale' फंक्शन क्या है?",
    "options_en": ["Sets locale", "Gets locale", "Prints locale", "Reads locale"],
    "options_hi": ["लोकेल सेट करता है", "लोकेल प्राप्त करता है", "लोकेल प्रिंट करता है", "लोकेल रीड करता है"],
    "answer_en": "Sets locale",
    "answer_hi": "लोकेल सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'LC_ALL' constant?",
    "question_hi": "'LC_ALL' कॉन्स्टेंट क्या है?",
    "options_en": ["All locale categories", "Numeric only", "Time only", "Currency only"],
    "options_hi": ["सभी लोकेल कैटेगरीज", "केवल न्यूमेरिक", "केवल टाइम", "केवल करेंसी"],
    "answer_en": "All locale categories",
    "answer_hi": "सभी लोकेल कैटेगरीज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'localeconv' function?",
    "question_hi": "'localeconv' फंक्शन क्या है?",
    "options_en": ["Gets locale formatting rules", "Sets locale", "Prints locale", "Reads locale"],
    "options_hi": ["लोकेल फॉर्मेटिंग रूल्स प्राप्त करता है", "लोकेल सेट करता है", "लोकेल प्रिंट करता है", "लोकेल रीड करता है"],
    "answer_en": "Gets locale formatting rules",
    "answer_hi": "लोकेल फॉर्मेटिंग रूल्स प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'fwide' function?",
    "question_hi": "'fwide' फंक्शन क्या है?",
    "options_en": ["Determines stream orientation", "Sets stream", "Gets stream", "Closes stream"],
    "options_hi": ["स्ट्रीम ओरिएंटेशन डिटरमाइन करता है", "स्ट्रीम सेट करता है", "स्ट्रीम प्राप्त करता है", "स्ट्रीम क्लोज करता है"],
    "answer_en": "Determines stream orientation",
    "answer_hi": "स्ट्रीम ओरिएंटेशन डिटरमाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'mbstate_t' type?",
    "question_hi": "'mbstate_t' टाइप क्या है?",
    "options_en": ["Multibyte conversion state", "Single byte state", "No state", "Stream state"],
    "options_hi": ["मल्टीबाइट कन्वर्जन स्टेट", "सिंगल बाइट स्टेट", "कोई स्टेट नहीं", "स्ट्रीम स्टेट"],
    "answer_en": "Multibyte conversion state",
    "answer_hi": "मल्टीबाइट कन्वर्जन स्टेट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'mbrtowc' function?",
    "question_hi": "'mbrtowc' फंक्शन क्या है?",
    "options_en": ["Converts multibyte to wide character", "Converts wide to multibyte", "No conversion", "Character copy"],
    "options_hi": ["मल्टीबाइट को वाइड कैरेक्टर में कन्वर्ट करता है", "वाइड को मल्टीबाइट में कन्वर्ट करता है", "कोई कन्वर्जन नहीं", "कैरेक्टर कॉपी"],
    "answer_en": "Converts multibyte to wide character",
    "answer_hi": "मल्टीबाइट को वाइड कैरेक्टर में कन्वर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'wcrtomb' function?",
    "question_hi": "'wcrtomb' फंक्शन क्या है?",
    "options_en": ["Converts wide character to multibyte", "Converts multibyte to wide", "No conversion", "Character copy"],
    "options_hi": ["वाइड कैरेक्टर को मल्टीबाइट में कन्वर्ट करता है", "मल्टीबाइट को वाइड में कन्वर्ट करता है", "कोई कन्वर्जन नहीं", "कैरेक्टर कॉपी"],
    "answer_en": "Converts wide character to multibyte",
    "answer_hi": "वाइड कैरेक्टर को मल्टीबाइट में कन्वर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'btowc' function?",
    "question_hi": "'btowc' फंक्शन क्या है?",
    "options_en": ["Converts single byte to wide character", "Converts wide to byte", "No conversion", "Character copy"],
    "options_hi": ["सिंगल बाइट को वाइड कैरेक्टर में कन्वर्ट करता है", "वाइड को बाइट में कन्वर्ट करता है", "कोई कन्वर्जन नहीं", "कैरेक्टर कॉपी"],
    "answer_en": "Converts single byte to wide character",
    "answer_hi": "सिंगल बाइट को वाइड कैरेक्टर में कन्वर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'wctob' function?",
    "question_hi": "'wctob' फंक्शन क्या है?",
    "options_en": ["Converts wide character to single byte", "Converts byte to wide", "No conversion", "Character copy"],
    "options_hi": ["वाइड कैरेक्टर को सिंगल बाइट में कन्वर्ट करता है", "बाइट को वाइड में कन्वर्ट करता है", "कोई कन्वर्जन नहीं", "कैरेक्टर कॉपी"],
    "answer_en": "Converts wide character to single byte",
    "answer_hi": "वाइड कैरेक्टर को सिंगल बाइट में कन्वर्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'fgetwc' function?",
    "question_hi": "'fgetwc' फंक्शन क्या है?",
    "options_en": ["Reads wide character from file", "Reads byte", "Writes wide character", "Writes byte"],
    "options_hi": ["फाइल से वाइड कैरेक्टर पढ़ता है", "बाइट पढ़ता है", "वाइड कैरेक्टर लिखता है", "बाइट लिखता है"],
    "answer_en": "Reads wide character from file",
    "answer_hi": "फाइल से वाइड कैरेक्टर पढ़ता है",
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