const questions=[
  {
    "num": 1,
    "question_en": "What symbol is used to start preprocessor directives in C?",
    "question_hi": "C में प्रीप्रोसेसर डायरेक्टिव्स शुरू करने के लिए किस सिंबल का उपयोग होता है?",
    "options_en": ["#", "//", "/*", "@"],
    "options_hi": ["#", "//", "/*", "@"],
    "answer_en": "#",
    "answer_hi": "#",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which is the correct way to write a simple C program?",
    "question_hi": "सरल C प्रोग्राम लिखने का सही तरीका कौन सा है?",
    "options_en": [
      "#include<stdio.h>\nint main() {\n    return 0;\n}",
      "main() { }",
      "program { }",
      "start { }"
    ],
    "options_hi": [
      "#include<stdio.h>\nint main() {\n    return 0;\n}",
      "main() { }",
      "program { }",
      "start { }"
    ],
    "answer_en": "#include<stdio.h>\nint main() {\n    return 0;\n}",
    "answer_hi": "#include<stdio.h>\nint main() {\n    return 0;\n}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'main' function represent in a C program?",
    "question_hi": "C प्रोग्राम में 'main' फंक्शन क्या दर्शाता है?",
    "options_en": ["Starting point of execution", "End point", "Middle point", "Optional point"],
    "options_hi": ["एग्जीक्यूशन का स्टार्टिंग पॉइंट", "एंड पॉइंट", "मिडिल पॉइंट", "ऑप्शनल पॉइंट"],
    "answer_en": "Starting point of execution",
    "answer_hi": "एग्जीक्यूशन का स्टार्टिंग पॉइंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which of these is NOT a valid C keyword?",
    "question_hi": "इनमें से कौन सा वैध C कीवर्ड नहीं है?",
    "options_en": ["function", "int", "char", "float"],
    "options_hi": ["function", "int", "char", "float"],
    "answer_en": "function",
    "answer_hi": "function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of return 0; in main()?",
    "question_hi": "main() में return 0; का उद्देश्य क्या है?",
    "options_en": ["Indicates successful termination", "Returns error", "Prints 0", "Stops program"],
    "options_hi": ["सफल समाप्ति दर्शाता है", "एरर रिटर्न करता है", "0 प्रिंट करता है", "प्रोग्राम रोकता है"],
    "answer_en": "Indicates successful termination",
    "answer_hi": "सफल समाप्ति दर्शाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How many values can a function return at a time in C?",
    "question_hi": "C में एक फंक्शन एक समय में कितनी वैल्यू रिटर्न कर सकता है?",
    "options_en": ["Only one", "Two", "Three", "Any number"],
    "options_hi": ["केवल एक", "दो", "तीन", "कोई भी संख्या"],
    "answer_en": "Only one",
    "answer_hi": "केवल एक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which data type is used to store whole numbers?",
    "question_hi": "पूर्ण संख्याएँ स्टोर करने के लिए किस डेटा टाइप का उपयोग होता है?",
    "options_en": ["int", "float", "char", "double"],
    "options_hi": ["int", "float", "char", "double"],
    "answer_en": "int",
    "answer_hi": "int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which data type is used to store decimal numbers?",
    "question_hi": "दशमलव संख्याएँ स्टोर करने के लिए किस डेटा टाइप का उपयोग होता है?",
    "options_en": ["float", "int", "char", "void"],
    "options_hi": ["float", "int", "char", "void"],
    "answer_en": "float",
    "answer_hi": "float",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which data type is used to store single characters?",
    "question_hi": "सिंगल कैरेक्टर स्टोर करने के लिए किस डेटा टाइप का उपयोग होता है?",
    "options_en": ["char", "int", "float", "string"],
    "options_hi": ["char", "int", "float", "string"],
    "answer_en": "char",
    "answer_hi": "char",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the size of 'int' data type in typical 32-bit systems?",
    "question_hi": "टिपिकल 32-बिट सिस्टम में 'int' डेटा टाइप का साइज कितना होता है?",
    "options_en": ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
    "options_hi": ["4 बाइट", "2 बाइट", "8 बाइट", "1 बाइट"],
    "answer_en": "4 bytes",
    "answer_hi": "4 बाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the size of 'char' data type?",
    "question_hi": "'char' डेटा टाइप का साइज कितना होता है?",
    "options_en": ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    "options_hi": ["1 बाइट", "2 बाइट", "4 बाइट", "8 बाइट"],
    "answer_en": "1 byte",
    "answer_hi": "1 बाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the size of 'float' data type?",
    "question_hi": "'float' डेटा टाइप का साइज कितना होता है?",
    "options_en": ["4 bytes", "2 bytes", "8 bytes", "1 byte"],
    "options_hi": ["4 बाइट", "2 बाइट", "8 बाइट", "1 बाइट"],
    "answer_en": "4 bytes",
    "answer_hi": "4 बाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the size of 'double' data type?",
    "question_hi": "'double' डेटा टाइप का साइज कितना होता है?",
    "options_en": ["8 bytes", "4 bytes", "2 bytes", "1 byte"],
    "options_hi": ["8 बाइट", "4 बाइट", "2 बाइट", "1 बाइट"],
    "answer_en": "8 bytes",
    "answer_hi": "8 बाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which format specifier is used for integers?",
    "question_hi": "इंटीजर्स के लिए कौन सा फॉर्मेट स्पेसिफायर उपयोग होता है?",
    "options_en": ["%d", "%f", "%c", "%s"],
    "options_hi": ["%d", "%f", "%c", "%s"],
    "answer_en": "%d",
    "answer_hi": "%d",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which format specifier is used for floating-point numbers?",
    "question_hi": "फ्लोटिंग-पॉइंट नंबर्स के लिए कौन सा फॉर्मेट स्पेसिफायर उपयोग होता है?",
    "options_en": ["%f", "%d", "%c", "%s"],
    "options_hi": ["%f", "%d", "%c", "%s"],
    "answer_en": "%f",
    "answer_hi": "%f",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which format specifier is used for characters?",
    "question_hi": "कैरेक्टर्स के लिए कौन सा फॉर्मेट स्पेसिफायर उपयोग होता है?",
    "options_en": ["%c", "%d", "%f", "%s"],
    "options_hi": ["%c", "%d", "%f", "%s"],
    "answer_en": "%c",
    "answer_hi": "%c",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which format specifier is used for strings?",
    "question_hi": "स्ट्रिंग्स के लिए कौन सा फॉर्मेट स्पेसिफायर उपयोग होता है?",
    "options_en": ["%s", "%d", "%f", "%c"],
    "options_hi": ["%s", "%d", "%f", "%c"],
    "answer_en": "%s",
    "answer_hi": "%s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the printf() function do?",
    "question_hi": "printf() फंक्शन क्या करता है?",
    "options_en": ["Prints output to console", "Reads input", "Calculates", "Stores data"],
    "options_hi": ["कंसोल पर आउटपुट प्रिंट करता है", "इनपुट पढ़ता है", "कैलकुलेट करता है", "डेटा स्टोर करता है"],
    "answer_en": "Prints output to console",
    "answer_hi": "कंसोल पर आउटपुट प्रिंट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What does the scanf() function do?",
    "question_hi": "scanf() फंक्शन क्या करता है?",
    "options_en": ["Reads input from console", "Prints output", "Calculates", "Stores data"],
    "options_hi": ["कंसोल से इनपुट पढ़ता है", "आउटपुट प्रिंट करता है", "कैलकुलेट करता है", "डेटा स्टोर करता है"],
    "answer_en": "Reads input from console",
    "answer_hi": "कंसोल से इनपुट पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the correct syntax for declaring an integer variable?",
    "question_hi": "इंटीजर वेरिएबल डिक्लेयर करने का सही सिंटैक्स क्या है?",
    "options_en": ["int x;", "integer x;", "x int;", "var x;"],
    "options_hi": ["int x;", "integer x;", "x int;", "var x;"],
    "answer_en": "int x;",
    "answer_hi": "int x;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the correct syntax for declaring and initializing an integer?",
    "question_hi": "इंटीजर डिक्लेयर और इनिशियलाइज़ करने का सही सिंटैक्स क्या है?",
    "options_en": ["int x = 10;", "int 10 = x;", "x = 10 int;", "10 = int x;"],
    "options_hi": ["int x = 10;", "int 10 = x;", "x = 10 int;", "10 = int x;"],
    "answer_en": "int x = 10;",
    "answer_hi": "int x = 10;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "Which operator is used for addition?",
    "question_hi": "जोड़ के लिए किस ऑपरेटर का उपयोग होता है?",
    "options_en": ["+", "-", "*", "/"],
    "options_hi": ["+", "-", "*", "/"],
    "answer_en": "+",
    "answer_hi": "+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which operator is used for subtraction?",
    "question_hi": "घटाव के लिए किस ऑपरेटर का उपयोग होता है?",
    "options_en": ["-", "+", "*", "/"],
    "options_hi": ["-", "+", "*", "/"],
    "answer_en": "-",
    "answer_hi": "-",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Which operator is used for multiplication?",
    "question_hi": "गुणा के लिए किस ऑपरेटर का उपयोग होता है?",
    "options_en": ["*", "+", "-", "/"],
    "options_hi": ["*", "+", "-", "/"],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which operator is used for division?",
    "question_hi": "भाग के लिए किस ऑपरेटर का उपयोग होता है?",
    "options_en": ["/", "+", "-", "*"],
    "options_hi": ["/", "+", "-", "*"],
    "answer_en": "/",
    "answer_hi": "/",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which operator is used for modulus (remainder)?",
    "question_hi": "मॉड्यूलस (शेष) के लिए किस ऑपरेटर का उपयोग होता है?",
    "options_en": ["%", "/", "*", "+"],
    "options_hi": ["%", "/", "*", "+"],
    "answer_en": "%",
    "answer_hi": "%",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the result of 10 % 3?",
    "question_hi": "10 % 3 का परिणाम क्या है?",
    "options_en": ["1", "3", "0", "10"],
    "options_hi": ["1", "3", "0", "10"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the increment operator?",
    "question_hi": "इंक्रीमेंट ऑपरेटर क्या है?",
    "options_en": ["++", "--", "+=", "-="],
    "options_hi": ["++", "--", "+=", "-="],
    "answer_en": "++",
    "answer_hi": "++",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the decrement operator?",
    "question_hi": "डिक्रीमेंट ऑपरेटर क्या है?",
    "options_en": ["--", "++", "-=", "+="],
    "options_hi": ["--", "++", "-=", "+="],
    "answer_en": "--",
    "answer_hi": "--",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does x++ mean?",
    "question_hi": "x++ का क्या अर्थ है?",
    "options_en": ["Increment x after using its value", "Increment x before using", "Decrement x", "Multiply x"],
    "options_hi": ["वैल्यू उपयोग करने के बाद x बढ़ाएं", "उपयोग से पहले x बढ़ाएं", "x घटाएं", "x गुणा करें"],
    "answer_en": "Increment x after using its value",
    "answer_hi": "वैल्यू उपयोग करने के बाद x बढ़ाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does ++x mean?",
    "question_hi": "++x का क्या अर्थ है?",
    "options_en": ["Increment x before using its value", "Increment x after using", "Decrement x", "Divide x"],
    "options_hi": ["वैल्यू उपयोग करने से पहले x बढ़ाएं", "उपयोग के बाद x बढ़ाएं", "x घटाएं", "x भाग करें"],
    "answer_en": "Increment x before using its value",
    "answer_hi": "वैल्यू उपयोग करने से पहले x बढ़ाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the assignment operator?",
    "question_hi": "असाइनमेंट ऑपरेटर क्या है?",
    "options_en": ["=", "==", "!=", ">="],
    "options_hi": ["=", "==", "!=", ">="],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the equality operator?",
    "question_hi": "इक्वलिटी ऑपरेटर क्या है?",
    "options_en": ["==", "=", "!=", ">="],
    "options_hi": ["==", "=", "!=", ">="],
    "answer_en": "==",
    "answer_hi": "==",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the not equal operator?",
    "question_hi": "नॉट इक्वल ऑपरेटर क्या है?",
    "options_en": ["!=", "==", "=", ">="],
    "options_hi": ["!=", "==", "=", ">="],
    "answer_en": "!=",
    "answer_hi": "!=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the greater than operator?",
    "question_hi": "ग्रेटर दैन ऑपरेटर क्या है?",
    "options_en": [">", "<", ">=", "<="],
    "options_hi": [">", "<", ">=", "<="],
    "answer_en": ">",
    "answer_hi": ">",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the less than operator?",
    "question_hi": "लेस दैन ऑपरेटर क्या है?",
    "options_en": ["<", ">", "<=", ">="],
    "options_hi": ["<", ">", "<=", ">="],
    "answer_en": "<",
    "answer_hi": "<",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the logical AND operator?",
    "question_hi": "लॉजिकल AND ऑपरेटर क्या है?",
    "options_en": ["&&", "||", "!", "&"],
    "options_hi": ["&&", "||", "!", "&"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the logical OR operator?",
    "question_hi": "लॉजिकल OR ऑपरेटर क्या है?",
    "options_en": ["||", "&&", "!", "|"],
    "options_hi": ["||", "&&", "!", "|"],
    "answer_en": "||",
    "answer_hi": "||",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the logical NOT operator?",
    "question_hi": "लॉजिकल NOT ऑपरेटर क्या है?",
    "options_en": ["!", "&&", "||", "~"],
    "options_hi": ["!", "&&", "||", "~"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the ternary operator?",
    "question_hi": "टर्नरी ऑपरेटर क्या है?",
    "options_en": ["? :", "?:", "??", ": ?"],
    "options_hi": ["? :", "?:", "??", ": ?"],
    "answer_en": "? :",
    "answer_hi": "? :",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the syntax of ternary operator?",
    "question_hi": "टर्नरी ऑपरेटर का सिंटैक्स क्या है?",
    "options_en": ["condition ? expr1 : expr2", "expr1 ? expr2 : condition", "? condition : expr", "expr : condition ?"],
    "options_hi": ["condition ? expr1 : expr2", "expr1 ? expr2 : condition", "? condition : expr", "expr : condition ?"],
    "answer_en": "condition ? expr1 : expr2",
    "answer_hi": "condition ? expr1 : expr2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does sizeof() operator do?",
    "question_hi": "sizeof() ऑपरेटर क्या करता है?",
    "options_en": ["Returns size in bytes", "Returns value", "Returns address", "Returns type"],
    "options_hi": ["बाइट में साइज रिटर्न करता है", "वैल्यू रिटर्न करता है", "एड्रेस रिटर्न करता है", "टाइप रिटर्न करता है"],
    "answer_en": "Returns size in bytes",
    "answer_hi": "बाइट में साइज रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What will sizeof(int) return on 32-bit system?",
    "question_hi": "32-बिट सिस्टम पर sizeof(int) क्या रिटर्न करेगा?",
    "options_en": ["4", "2", "8", "1"],
    "options_hi": ["4", "2", "8", "1"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is an if statement?",
    "question_hi": "if स्टेटमेंट क्या है?",
    "options_en": ["Conditional execution", "Loop", "Function", "Variable"],
    "options_hi": ["कंडिशनल एक्जीक्यूशन", "लूप", "फंक्शन", "वेरिएबल"],
    "answer_en": "Conditional execution",
    "answer_hi": "कंडिशनल एक्जीक्यूशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the syntax of if statement?",
    "question_hi": "if स्टेटमेंट का सिंटैक्स क्या है?",
    "options_en": ["if(condition) { }", "if condition { }", "if {condition}", "if [] {}"],
    "options_hi": ["if(condition) { }", "if condition { }", "if {condition}", "if [] {}"],
    "answer_en": "if(condition) { }",
    "answer_hi": "if(condition) { }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is an if-else statement?",
    "question_hi": "if-else स्टेटमेंट क्या है?",
    "options_en": ["Two-way decision", "One-way", "Loop", "Function"],
    "options_hi": ["दो-तरफा निर्णय", "एक-तरफा", "लूप", "फंक्शन"],
    "answer_en": "Two-way decision",
    "answer_hi": "दो-तरफा निर्णय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the syntax of if-else?",
    "question_hi": "if-else का सिंटैक्स क्या है?",
    "options_en": ["if(condition) { } else { }", "if { } else { }", "if() else()", "if-else {}"],
    "options_hi": ["if(condition) { } else { }", "if { } else { }", "if() else()", "if-else {}"],
    "answer_en": "if(condition) { } else { }",
    "answer_hi": "if(condition) { } else { }",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is a nested if?",
    "question_hi": "नेस्टेड if क्या है?",
    "options_en": ["if inside another if", "Only one if", "No if", "if after else"],
    "options_hi": ["एक if के अंदर दूसरा if", "केवल एक if", "कोई if नहीं", "else के बाद if"],
    "answer_en": "if inside another if",
    "answer_hi": "एक if के अंदर दूसरा if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is switch statement?",
    "question_hi": "switch स्टेटमेंट क्या है?",
    "options_en": ["Multi-way decision", "Two-way", "Loop", "Function"],
    "options_hi": ["मल्टी-वे निर्णय", "दो-तरफा", "लूप", "फंक्शन"],
    "answer_en": "Multi-way decision",
    "answer_hi": "मल्टी-वे निर्णय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What statement ends each case in switch?",
    "question_hi": "switch में प्रत्येक case को कौन सा स्टेटमेंट समाप्त करता है?",
    "options_en": ["break", "continue", "return", "exit"],
    "options_hi": ["break", "continue", "return", "exit"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is a loop?",
    "question_hi": "लूप क्या है?",
    "options_en": ["Repeats code", "Condition", "Variable", "Function"],
    "options_hi": ["कोड दोहराता है", "कंडीशन", "वेरिएबल", "फंक्शन"],
    "answer_en": "Repeats code",
    "answer_hi": "कोड दोहराता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is for loop?",
    "question_hi": "for लूप क्या है?",
    "options_en": ["Counter-controlled loop", "Condition-controlled", "Infinite", "No loop"],
    "options_hi": ["काउंटर-कंट्रोल्ड लूप", "कंडीशन-कंट्रोल्ड", "अनंत", "कोई लूप नहीं"],
    "answer_en": "Counter-controlled loop",
    "answer_hi": "काउंटर-कंट्रोल्ड लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is while loop?",
    "question_hi": "while लूप क्या है?",
    "options_en": ["Condition-controlled loop", "Counter-controlled", "Infinite", "No loop"],
    "options_hi": ["कंडीशन-कंट्रोल्ड लूप", "काउंटर-कंट्रोल्ड", "अनंत", "कोई लूप नहीं"],
    "answer_en": "Condition-controlled loop",
    "answer_hi": "कंडीशन-कंट्रोल्ड लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is do-while loop?",
    "question_hi": "do-while लूप क्या है?",
    "options_en": ["Loop that runs at least once", "May not run", "Infinite", "No loop"],
    "options_hi": ["लूप जो कम से कम एक बार चलता है", "नहीं चल सकता", "अनंत", "कोई लूप नहीं"],
    "answer_en": "Loop that runs at least once",
    "answer_hi": "लूप जो कम से कम एक बार चलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does break statement do in loop?",
    "question_hi": "लूप में break स्टेटमेंट क्या करता है?",
    "options_en": ["Exits loop immediately", "Skips iteration", "Continues", "Starts loop"],
    "options_hi": ["तुरंत लूप से बाहर निकलता है", "इटरेशन स्किप करता है", "जारी रखता है", "लूप शुरू करता है"],
    "answer_en": "Exits loop immediately",
    "answer_hi": "तुरंत लूप से बाहर निकलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does continue statement do in loop?",
    "question_hi": "लूप में continue स्टेटमेंट क्या करता है?",
    "options_en": ["Skips current iteration", "Exits loop", "Starts new loop", "Stops program"],
    "options_hi": ["वर्तमान इटरेशन स्किप करता है", "लूप से बाहर निकलता है", "नया लूप शुरू करता है", "प्रोग्राम रोकता है"],
    "answer_en": "Skips current iteration",
    "answer_hi": "वर्तमान इटरेशन स्किप करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is an infinite loop?",
    "question_hi": "अनंत लूप क्या है?",
    "options_en": ["Loop that never ends", "Short loop", "One-time loop", "No loop"],
    "options_hi": ["लूप जो कभी समाप्त नहीं होता", "छोटा लूप", "एक बार का लूप", "कोई लूप नहीं"],
    "answer_en": "Loop that never ends",
    "answer_hi": "लूप जो कभी समाप्त नहीं होता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is a function?",
    "question_hi": "फ़ंक्शन क्या है?",
    "options_en": ["Block of reusable code", "Variable", "Loop", "Condition"],
    "options_hi": ["पुन: प्रयोज्य कोड का ब्लॉक", "वेरिएबल", "लूप", "कंडीशन"],
    "answer_en": "Block of reusable code",
    "answer_hi": "पुन: प्रयोज्य कोड का ब्लॉक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is function declaration?",
    "question_hi": "फ़ंक्शन डिक्लेरेशन क्या है?",
    "options_en": ["Tells compiler about function", "Defines function", "Calls function", "Ends function"],
    "options_hi": ["कम्पाइलर को फ़ंक्शन के बारे में बताता है", "फ़ंक्शन को परिभाषित करता है", "फ़ंक्शन को कॉल करता है", "फ़ंक्शन समाप्त करता है"],
    "answer_en": "Tells compiler about function",
    "answer_hi": "कम्पाइलर को फ़ंक्शन के बारे में बताता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is function definition?",
    "question_hi": "फ़ंक्शन डेफिनिशन क्या है?",
    "options_en": ["Actual implementation of function", "Declaration", "Call", "End"],
    "options_hi": ["फ़ंक्शन का वास्तविक कार्यान्वयन", "डिक्लेरेशन", "कॉल", "समाप्ति"],
    "answer_en": "Actual implementation of function",
    "answer_hi": "फ़ंक्शन का वास्तविक कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is function call?",
    "question_hi": "फ़ंक्शन कॉल क्या है?",
    "options_en": ["Executes the function", "Declares function", "Defines function", "Ends function"],
    "options_hi": ["फ़ंक्शन को एक्जीक्यूट करता है", "फ़ंक्शन डिक्लेयर करता है", "फ़ंक्शन को परिभाषित करता है", "फ़ंक्शन समाप्त करता है"],
    "answer_en": "Executes the function",
    "answer_hi": "फ़ंक्शन को एक्जीक्यूट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What are function parameters?",
    "question_hi": "फ़ंक्शन पैरामीटर्स क्या हैं?",
    "options_en": ["Input values to function", "Output values", "Local variables", "Global variables"],
    "options_hi": ["फ़ंक्शन में इनपुट वैल्यूज", "आउटपुट वैल्यूज", "लोकल वेरिएबल्स", "ग्लोबल वेरिएबल्स"],
    "answer_en": "Input values to function",
    "answer_hi": "फ़ंक्शन में इनपुट वैल्यूज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is return type of function?",
    "question_hi": "फ़ंक्शन का रिटर्न टाइप क्या है?",
    "options_en": ["Type of value function returns", "Input type", "Parameter type", "Variable type"],
    "options_hi": ["फ़ंक्शन जिस टाइप की वैल्यू रिटर्न करता है", "इनपुट टाइप", "पैरामीटर टाइप", "वेरिएबल टाइप"],
    "answer_en": "Type of value function returns",
    "answer_hi": "फ़ंक्शन जिस टाइप की वैल्यू रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is void return type?",
    "question_hi": "void रिटर्न टाइप क्या है?",
    "options_en": ["Function returns nothing", "Returns integer", "Returns float", "Returns char"],
    "options_hi": ["फ़ंक्शन कुछ नहीं रिटर्न करता", "इंटीजर रिटर्न करता है", "फ्लोट रिटर्न करता है", "चार रिटर्न करता है"],
    "answer_en": "Function returns nothing",
    "answer_hi": "फ़ंक्शन कुछ नहीं रिटर्न करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is array?",
    "question_hi": "ऐरे क्या है?",
    "options_en": ["Collection of similar elements", "Single variable", "Function", "Loop"],
    "options_hi": ["समान एलिमेंट्स का कलेक्शन", "सिंगल वेरिएबल", "फ़ंक्शन", "लूप"],
    "answer_en": "Collection of similar elements",
    "answer_hi": "समान एलिमेंट्स का कलेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "How to declare an integer array of size 5?",
    "question_hi": "साइज 5 के इंटीजर ऐरे को कैसे डिक्लेयर करें?",
    "options_en": ["int arr[5];", "array arr[5];", "int arr(5);", "arr[5] int;"],
    "options_hi": ["int arr[5];", "array arr[5];", "int arr(5);", "arr[5] int;"],
    "answer_en": "int arr[5];",
    "answer_hi": "int arr[5];",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is array index?",
    "question_hi": "ऐरे इंडेक्स क्या है?",
    "options_en": ["Position of element in array", "Value of element", "Size of array", "Type of array"],
    "options_hi": ["ऐरे में एलिमेंट की पोजीशन", "एलिमेंट की वैल्यू", "ऐरे का साइज", "ऐरे का टाइप"],
    "answer_en": "Position of element in array",
    "answer_hi": "ऐरे में एलिमेंट की पोजीशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is the first index of array in C?",
    "question_hi": "C में ऐरे का पहला इंडेक्स क्या है?",
    "options_en": ["0", "1", "-1", "2"],
    "options_hi": ["0", "1", "-1", "2"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is string in C?",
    "question_hi": "C में स्ट्रिंग क्या है?",
    "options_en": ["Array of characters", "Single character", "Integer array", "Float array"],
    "options_hi": ["कैरेक्टर्स का ऐरे", "सिंगल कैरेक्टर", "इंटीजर ऐरे", "फ्लोट ऐरे"],
    "answer_en": "Array of characters",
    "answer_hi": "कैरेक्टर्स का ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "How is string terminated in C?",
    "question_hi": "C में स्ट्रिंग कैसे समाप्त होती है?",
    "options_en": ["Null character \\0", "New line", "Space", "Tab"],
    "options_hi": ["नल कैरेक्टर \\0", "नई लाइन", "स्पेस", "टैब"],
    "answer_en": "Null character \\0",
    "answer_hi": "नल कैरेक्टर \\0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is pointer?",
    "question_hi": "पॉइंटर क्या है?",
    "options_en": ["Variable that stores address", "Variable that stores value", "Function", "Array"],
    "options_hi": ["वेरिएबल जो एड्रेस स्टोर करता है", "वेरिएबल जो वैल्यू स्टोर करता है", "फ़ंक्शन", "ऐरे"],
    "answer_en": "Variable that stores address",
    "answer_hi": "वेरिएबल जो एड्रेस स्टोर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which operator is used to get address of variable?",
    "question_hi": "वेरिएबल का एड्रेस प्राप्त करने के लिए किस ऑपरेटर का उपयोग होता है?",
    "options_en": ["&", "*", "->", "."],
    "options_hi": ["&", "*", "->", "."],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which operator is used to access value at address?",
    "question_hi": "एड्रेस पर वैल्यू एक्सेस करने के लिए किस ऑपरेटर का उपयोग होता है?",
    "options_en": ["*", "&", "->", "."],
    "options_hi": ["*", "&", "->", "."],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is NULL pointer?",
    "question_hi": "NULL पॉइंटर क्या है?",
    "options_en": ["Pointer that points to nothing", "Pointer to integer", "Pointer to char", "Invalid pointer"],
    "options_hi": ["पॉइंटर जो किसी चीज की ओर इशारा नहीं करता", "इंटीजर का पॉइंटर", "चार का पॉइंटर", "अमान्य पॉइंटर"],
    "answer_en": "Pointer that points to nothing",
    "answer_hi": "पॉइंटर जो किसी चीज की ओर इशारा नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is structure?",
    "question_hi": "स्ट्रक्चर क्या है?",
    "options_en": ["User-defined data type", "Built-in type", "Function", "Array"],
    "options_hi": ["यूजर-डिफाइंड डेटा टाइप", "बिल्ट-इन टाइप", "फ़ंक्शन", "ऐरे"],
    "answer_en": "User-defined data type",
    "answer_hi": "यूजर-डिफाइंड डेटा टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What keyword is used to define structure?",
    "question_hi": "स्ट्रक्चर को परिभाषित करने के लिए किस कीवर्ड का उपयोग होता है?",
    "options_en": ["struct", "structure", "typedef", "union"],
    "options_hi": ["struct", "structure", "typedef", "union"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is union?",
    "question_hi": "यूनियन क्या है?",
    "options_en": ["Shares memory between members", "Separate memory", "Array type", "Function"],
    "options_hi": ["मेम्बर्स के बीच मेमोरी शेयर करता है", "अलग मेमोरी", "ऐरे टाइप", "फ़ंक्शन"],
    "answer_en": "Shares memory between members",
    "answer_hi": "मेम्बर्स के बीच मेमोरी शेयर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is file handling?",
    "question_hi": "फाइल हैंडलिंग क्या है?",
    "options_en": ["Reading/writing files", "Only reading", "Only writing", "Deleting files"],
    "options_hi": ["फाइलें पढ़ना/लिखना", "केवल पढ़ना", "केवल लिखना", "फाइलें डिलीट करना"],
    "answer_en": "Reading/writing files",
    "answer_hi": "फाइलें पढ़ना/लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is FILE pointer?",
    "question_hi": "FILE पॉइंटर क्या है?",
    "options_en": ["Pointer to file stream", "Pointer to integer", "Pointer to char", "Array pointer"],
    "options_hi": ["फाइल स्ट्रीम का पॉइंटर", "इंटीजर का पॉइंटर", "चार का पॉइंटर", "ऐरे पॉइंटर"],
    "answer_en": "Pointer to file stream",
    "answer_hi": "फाइल स्ट्रीम का पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is comment?",
    "question_hi": "कमेंट क्या है?",
    "options_en": ["Non-executable explanation", "Executable code", "Variable", "Function"],
    "options_hi": ["नॉन-एक्जीक्यूटेबल व्याख्या", "एक्जीक्यूटेबल कोड", "वेरिएबल", "फ़ंक्शन"],
    "answer_en": "Non-executable explanation",
    "answer_hi": "नॉन-एक्जीक्यूटेबल व्याख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is single-line comment syntax?",
    "question_hi": "सिंगल-लाइन कमेंट सिंटैक्स क्या है?",
    "options_en": ["// comment", "/* comment */", "# comment", "-- comment"],
    "options_hi": ["// कमेंट", "/* कमेंट */", "# कमेंट", "-- कमेंट"],
    "answer_en": "// comment",
    "answer_hi": "// कमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is multi-line comment syntax?",
    "question_hi": "मल्टी-लाइन कमेंट सिंटैक्स क्या है?",
    "options_en": ["/* comment */", "// comment", "# comment", "-- comment"],
    "options_hi": ["/* कमेंट */", "// कमेंट", "# कमेंट", "-- कमेंट"],
    "answer_en": "/* comment */",
    "answer_hi": "/* कमेंट */",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is preprocessor directive?",
    "question_hi": "प्रीप्रोसेसर डायरेक्टिव क्या है?",
    "options_en": ["Processed before compilation", "After compilation", "During execution", "At the end"],
    "options_hi": ["कम्पाइलेशन से पहले प्रोसेस होता है", "कम्पाइलेशन के बाद", "एक्जीक्यूशन के दौरान", "अंत में"],
    "answer_en": "Processed before compilation",
    "answer_hi": "कम्पाइलेशन से पहले प्रोसेस होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does #include do?",
    "question_hi": "#include क्या करता है?",
    "options_en": ["Includes header file", "Excludes file", "Compiles file", "Executes file"],
    "options_hi": ["हेडर फाइल इंक्लूड करता है", "फाइल एक्सक्लूड करता है", "फाइल कम्पाइल करता है", "फाइल एक्जीक्यूट करता है"],
    "answer_en": "Includes header file",
    "answer_hi": "हेडर फाइल इंक्लूड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What does #define do?",
    "question_hi": "#define क्या करता है?",
    "options_en": ["Defines macro or constant", "Includes file", "Compiles code", "Executes code"],
    "options_hi": ["मैक्रो या कॉन्स्टेंट डिफाइन करता है", "फाइल इंक्लूड करता है", "कोड कम्पाइल करता है", "कोड एक्जीक्यूट करता है"],
    "answer_en": "Defines macro or constant",
    "answer_hi": "मैक्रो या कॉन्स्टेंट डिफाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is constant?",
    "question_hi": "कॉन्स्टेंट क्या है?",
    "options_en": ["Value that cannot change", "Variable value", "Function", "Array"],
    "options_hi": ["वैल्यू जो बदल नहीं सकती", "वेरिएबल वैल्यू", "फ़ंक्शन", "ऐरे"],
    "answer_en": "Value that cannot change",
    "answer_hi": "वैल्यू जो बदल नहीं सकती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "How to define constant using #define?",
    "question_hi": "#define का उपयोग करके कॉन्स्टेंट कैसे डिफाइन करें?",
    "options_en": ["#define PI 3.14", "const PI 3.14", "PI = 3.14", "define PI 3.14"],
    "options_hi": ["#define PI 3.14", "const PI 3.14", "PI = 3.14", "define PI 3.14"],
    "answer_en": "#define PI 3.14",
    "answer_hi": "#define PI 3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is local variable?",
    "question_hi": "लोकल वेरिएबल क्या है?",
    "options_en": ["Variable inside function/block", "Variable outside all functions", "Global variable", "Constant"],
    "options_hi": ["फ़ंक्शन/ब्लॉक के अंदर वेरिएबल", "सभी फ़ंक्शन्स के बाहर वेरिएबल", "ग्लोबल वेरिएबल", "कॉन्स्टेंट"],
    "answer_en": "Variable inside function/block",
    "answer_hi": "फ़ंक्शन/ब्लॉक के अंदर वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is global variable?",
    "question_hi": "ग्लोबल वेरिएबल क्या है?",
    "options_en": ["Variable outside all functions", "Variable inside function", "Constant", "Array"],
    "options_hi": ["सभी फ़ंक्शन्स के बाहर वेरिएबल", "फ़ंक्शन के अंदर वेरिएबल", "कॉन्स्टेंट", "ऐरे"],
    "answer_en": "Variable outside all functions",
    "answer_hi": "सभी फ़ंक्शन्स के बाहर वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is scope of variable?",
    "question_hi": "वेरिएबल का स्कोप क्या है?",
    "options_en": ["Region where variable is accessible", "Value of variable", "Type of variable", "Size of variable"],
    "options_hi": ["वह क्षेत्र जहाँ वेरिएबल एक्सेसिबल है", "वेरिएबल की वैल्यू", "वेरिएबल का टाइप", "वेरिएबल का साइज"],
    "answer_en": "Region where variable is accessible",
    "answer_hi": "वह क्षेत्र जहाँ वेरिएबल एक्सेसिबल है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is static variable?",
    "question_hi": "स्टैटिक वेरिएबल क्या है?",
    "options_en": ["Retains value between function calls", "Changes every call", "Global only", "Local only"],
    "options_hi": ["फ़ंक्शन कॉल्स के बीच वैल्यू रिटेन करता है", "हर कॉल में बदलता है", "केवल ग्लोबल", "केवल लोकल"],
    "answer_en": "Retains value between function calls",
    "answer_hi": "फ़ंक्शन कॉल्स के बीच वैल्यू रिटेन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is recursion?",
    "question_hi": "रिकर्शन क्या है?",
    "options_en": ["Function calling itself", "Looping", "Condition", "Array processing"],
    "options_hi": ["फ़ंक्शन का स्वयं को कॉल करना", "लूपिंग", "कंडीशन", "ऐरे प्रोसेसिंग"],
    "answer_en": "Function calling itself",
    "answer_hi": "फ़ंक्शन का स्वयं को कॉल करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is base case in recursion?",
    "question_hi": "रिकर्शन में बेस केस क्या है?",
    "options_en": ["Condition to stop recursion", "Start of recursion", "Middle point", "Function call"],
    "options_hi": ["रिकर्शन रोकने की कंडीशन", "रिकर्शन की शुरुआत", "मध्य बिंदु", "फ़ंक्शन कॉल"],
    "answer_en": "Condition to stop recursion",
    "answer_hi": "रिकर्शन रोकने की कंडीशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is header file?",
    "question_hi": "हेडर फाइल क्या है?",
    "options_en": ["Contains declarations", "Contains full code", "Executable file", "Data file"],
    "options_hi": ["डिक्लेरेशन्स रखता है", "पूरा कोड रखता है", "एक्जीक्यूटेबल फाइल", "डेटा फाइल"],
    "answer_en": "Contains declarations",
    "answer_hi": "डिक्लेरेशन्स रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is stdio.h?",
    "question_hi": "stdio.h क्या है?",
    "options_en": ["Standard input/output header", "Math header", "String header", "Time header"],
    "options_hi": ["स्टैंडर्ड इनपुट/आउटपुट हेडर", "मैथ हेडर", "स्ट्रिंग हेडर", "टाइम हेडर"],
    "answer_en": "Standard input/output header",
    "answer_hi": "स्टैंडर्ड इनपुट/आउटपुट हेडर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is math.h?",
    "question_hi": "math.h क्या है?",
    "options_en": ["Math functions header", "Input/output header", "String header", "Time header"],
    "options_hi": ["मैथ फ़ंक्शन्स हेडर", "इनपुट/आउटपुट हेडर", "स्ट्रिंग हेडर", "टाइम हेडर"],
    "answer_en": "Math functions header",
    "answer_hi": "मैथ फ़ंक्शन्स हेडर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is compilation?",
    "question_hi": "कम्पाइलेशन क्या है?",
    "options_en": ["Converting source code to machine code", "Executing program", "Writing code", "Debugging"],
    "options_hi": ["सोर्स कोड को मशीन कोड में बदलना", "प्रोग्राम एक्जीक्यूट करना", "कोड लिखना", "डीबगिंग"],
    "answer_en": "Converting source code to machine code",
    "answer_hi": "सोर्स कोड को मशीन कोड में बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is compiler?",
    "question_hi": "कम्पाइलर क्या है?",
    "options_en": ["Program that compiles code", "Executes code", "Writes code", "Debugs code"],
    "options_hi": ["प्रोग्राम जो कोड कम्पाइल करता है", "कोड एक्जीक्यूट करता है", "कोड लिखता है", "कोड डीबग करता है"],
    "answer_en": "Program that compiles code",
    "answer_hi": "प्रोग्राम जो कोड कम्पाइल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is execution?",
    "question_hi": "एक्जीक्यूशन क्या है?",
    "options_en": ["Running the program", "Compiling program", "Writing program", "Debugging program"],
    "options_hi": ["प्रोग्राम चलाना", "प्रोग्राम कम्पाइल करना", "प्रोग्राम लिखना", "प्रोग्राम डीबग करना"],
    "answer_en": "Running the program",
    "answer_hi": "प्रोग्राम चलाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the basic structure of C program?",
    "question_hi": "C प्रोग्राम की बेसिक स्ट्रक्चर क्या है?",
    "options_en": [
      "Preprocessor directives, main function, code",
      "Only main function",
      "Only preprocessor",
      "Only comments"
    ],
    "options_hi": [
      "प्रीप्रोसेसर डायरेक्टिव्स, मुख्य फ़ंक्शन, कोड",
      "केवल मुख्य फ़ंक्शन",
      "केवल प्रीप्रोसेसर",
      "केवल कमेंट्स"
    ],
    "answer_en": "Preprocessor directives, main function, code",
    "answer_hi": "प्रीप्रोसेसर डायरेक्टिव्स, मुख्य फ़ंक्शन, कोड",
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