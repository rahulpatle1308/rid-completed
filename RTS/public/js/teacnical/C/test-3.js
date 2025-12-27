const questions = [
  {
    "num": 1,
    "question_en": "C language was developed at?",
    "question_hi": "C भाषा कहाँ विकसित की गई थी?",
    "options_en": ["AT&T Bell Labs", "Microsoft", "IBM", "Intel"],
    "options_hi": ["AT&T बेल लैब्स", "माइक्रोसॉफ्ट", "IBM", "इंटेल"],
    "answer_en": "AT&T Bell Labs",
    "answer_hi": "AT&T बेल लैब्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "C is a ______ language.",
    "question_hi": "C एक ______ भाषा है।",
    "options_en": ["Procedural", "Object-Oriented", "Functional", "Logical"],
    "options_hi": ["प्रोसीजरल", "ऑब्जेक्ट-ओरिएंटेड", "फंक्शनल", "लॉजिकल"],
    "answer_en": "Procedural",
    "answer_hi": "प्रोसीजरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Who developed C language?",
    "question_hi": "C भाषा किसने विकसित की?",
    "options_en": ["Dennis Ritchie", "Bjarne Stroustrup", "James Gosling", "Ken Thompson"],
    "options_hi": ["डेनिस रिची", "ब्जार्ने स्ट्रॉस्ट्रुप", "जेम्स गोसलिंग", "केन थॉम्पसन"],
    "answer_en": "Dennis Ritchie",
    "answer_hi": "डेनिस रिची",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Year when C was developed?",
    "question_hi": "C किस वर्ष विकसित की गई?",
    "options_en": ["1972", "1969", "1985", "1990"],
    "options_hi": ["1972", "1969", "1985", "1990"],
    "answer_en": "1972",
    "answer_hi": "1972",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which is the correct extension for C program files?",
    "question_hi": "C प्रोग्राम फ़ाइलों के लिए सही एक्सटेंशन कौन सा है?",
    "options_en": [".c", ".cpp", ".java", ".py"],
    "options_hi": [".c", ".cpp", ".java", ".py"],
    "answer_en": ".c",
    "answer_hi": ".c",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the entry point of a C program?",
    "question_hi": "C प्रोग्राम का एंट्री प्वाइंट क्या है?",
    "options_en": ["main() function", "start()", "begin()", "run()"],
    "options_hi": ["main() फंक्शन", "start()", "begin()", "run()"],
    "answer_en": "main() function",
    "answer_hi": "main() फंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Every statement in C ends with?",
    "question_hi": "C में हर स्टेटमेंट किससे समाप्त होता है?",
    "options_en": ["Semicolon (;)", "Colon (:)", "Period (.)", "Comma (,)"],
    "options_hi": ["सेमीकॉलन (;)", "कोलन (:)", "पीरियड (.)", "कॉमा (,)"],
    "answer_en": "Semicolon (;)",
    "answer_hi": "सेमीकॉलन (;)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which is used for single line comments in C?",
    "question_hi": "C में सिंगल लाइन कमेंट्स के लिए क्या उपयोग होता है?",
    "options_en": ["//", "/* */", "#", "--"],
    "options_hi": ["//", "/* */", "#", "--"],
    "answer_en": "//",
    "answer_hi": "//",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which is used for multi-line comments?",
    "question_hi": "मल्टी-लाइन कमेंट्स के लिए क्या उपयोग होता है?",
    "options_en": ["/* */", "//", "#", "<!-- -->"],
    "options_hi": ["/* */", "//", "#", "<!-- -->"],
    "answer_en": "/* */",
    "answer_hi": "/* */",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Total keywords in standard C?",
    "question_hi": "स्टैंडर्ड C में कुल कितने कीवर्ड हैं?",
    "options_en": ["32", "40", "50", "64"],
    "options_hi": ["32", "40", "50", "64"],
    "answer_en": "32",
    "answer_hi": "32",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is NOT a valid C data type?",
    "question_hi": "कौन सा वैध C डेटा टाइप नहीं है?",
    "options_en": ["string", "int", "float", "char"],
    "options_hi": ["string", "int", "float", "char"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which data type stores whole numbers?",
    "question_hi": "कौन सा डेटा टाइप पूर्ण संख्याएँ स्टोर करता है?",
    "options_en": ["int", "float", "char", "double"],
    "options_hi": ["int", "float", "char", "double"],
    "answer_en": "int",
    "answer_hi": "int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which data type stores decimal numbers?",
    "question_hi": "कौन सा डेटा टाइप दशमलव संख्याएँ स्टोर करता है?",
    "options_en": ["float", "int", "char", "long"],
    "options_hi": ["float", "int", "char", "long"],
    "answer_en": "float",
    "answer_hi": "float",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Which data type stores single character?",
    "question_hi": "कौन सा डेटा टाइप सिंगल कैरेक्टर स्टोर करता है?",
    "options_en": ["char", "int", "float", "double"],
    "options_hi": ["char", "int", "float", "double"],
    "answer_en": "char",
    "answer_hi": "char",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which format specifier is used for int?",
    "question_hi": "int के लिए कौन सा फॉर्मेट स्पेसिफायर उपयोग होता है?",
    "options_en": ["%d", "%c", "%f", "%s"],
    "options_hi": ["%d", "%c", "%f", "%s"],
    "answer_en": "%d",
    "answer_hi": "%d",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which format specifier is used for float?",
    "question_hi": "float के लिए कौन सा फॉर्मेट स्पेसिफायर उपयोग होता है?",
    "options_en": ["%f", "%d", "%c", "%s"],
    "options_hi": ["%f", "%d", "%c", "%s"],
    "answer_en": "%f",
    "answer_hi": "%f",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which format specifier is used for char?",
    "question_hi": "char के लिए कौन सा फॉर्मेट स्पेसिफायर उपयोग होता है?",
    "options_en": ["%c", "%d", "%f", "%s"],
    "options_hi": ["%c", "%d", "%f", "%s"],
    "answer_en": "%c",
    "answer_hi": "%c",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which format specifier is used for string?",
    "question_hi": "स्ट्रिंग के लिए कौन सा फॉर्मेट स्पेसिफायर उपयोग होता है?",
    "options_en": ["%s", "%d", "%c", "%f"],
    "options_hi": ["%s", "%d", "%c", "%f"],
    "answer_en": "%s",
    "answer_hi": "%s",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the output of: printf(\"Hello\");",
    "question_hi": "printf(\"Hello\"); का आउटपुट क्या है?",
    "options_en": ["Hello", "Error", "Nothing", "Hello;"],
    "options_hi": ["Hello", "त्रुटि", "कुछ नहीं", "Hello;"],
    "answer_en": "Hello",
    "answer_hi": "Hello",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Which function reads input from user?",
    "question_hi": "कौन सा फंक्शन यूजर से इनपुट पढ़ता है?",
    "options_en": ["scanf()", "printf()", "getch()", "input()"],
    "options_hi": ["scanf()", "printf()", "getch()", "input()"],
    "answer_en": "scanf()",
    "answer_hi": "scanf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What does #include do?",
    "question_hi": "#include क्या करता है?",
    "options_en": ["Includes header file", "Defines variable", "Prints output", "Calculates"],
    "options_hi": ["हेडर फाइल इंक्लूड करता है", "वेरिएबल डिफाइन करता है", "आउटपुट प्रिंट करता है", "कैलकुलेट करता है"],
    "answer_en": "Includes header file",
    "answer_hi": "हेडर फाइल इंक्लूड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "#include <stdio.h> is called?",
    "question_hi": "#include <stdio.h> को क्या कहा जाता है?",
    "options_en": ["Preprocessor directive", "Function", "Variable", "Statement"],
    "options_hi": ["प्रीप्रोसेसर डायरेक्टिव", "फंक्शन", "वेरिएबल", "स्टेटमेंट"],
    "answer_en": "Preprocessor directive",
    "answer_hi": "प्रीप्रोसेसर डायरेक्टिव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the size of int in bytes (typically)?",
    "question_hi": "int का साइज बाइट्स में (आमतौर पर) कितना होता है?",
    "options_en": ["4", "2", "1", "8"],
    "options_hi": ["4", "2", "1", "8"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the size of char in bytes?",
    "question_hi": "char का साइज बाइट्स में कितना होता है?",
    "options_en": ["1", "2", "4", "8"],
    "options_hi": ["1", "2", "4", "8"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the size of float in bytes?",
    "question_hi": "float का साइज बाइट्स में कितना होता है?",
    "options_en": ["4", "2", "8", "1"],
    "options_hi": ["4", "2", "8", "1"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the size of double in bytes?",
    "question_hi": "double का साइज बाइट्स में कितना होता है?",
    "options_en": ["8", "4", "2", "1"],
    "options_hi": ["8", "4", "2", "1"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which is the correct way to declare an integer variable?",
    "question_hi": "इंटीजर वेरिएबल डिक्लेयर करने का सही तरीका कौन सा है?",
    "options_en": ["int x;", "integer x;", "x int;", "var x;"],
    "options_hi": ["int x;", "integer x;", "x int;", "var x;"],
    "answer_en": "int x;",
    "answer_hi": "int x;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Which is the correct way to declare and initialize int?",
    "question_hi": "int को डिक्लेयर और इनिशियलाइज़ करने का सही तरीका कौन सा है?",
    "options_en": ["int x = 10;", "x = 10 int;", "int 10 = x;", "integer x = 10;"],
    "options_hi": ["int x = 10;", "x = 10 int;", "int 10 = x;", "integer x = 10;"],
    "answer_en": "int x = 10;",
    "answer_hi": "int x = 10;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is a variable?",
    "question_hi": "वेरिएबल क्या है?",
    "options_en": ["Named memory location", "Function", "Keyword", "Operator"],
    "options_hi": ["नेम्ड मेमोरी लोकेशन", "फंक्शन", "कीवर्ड", "ऑपरेटर"],
    "answer_en": "Named memory location",
    "answer_hi": "नेम्ड मेमोरी लोकेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is a constant?",
    "question_hi": "कॉन्स्टेंट क्या है?",
    "options_en": ["Value that cannot be changed", "Variable", "Function", "Loop"],
    "options_hi": ["वैल्यू जिसे बदला नहीं जा सकता", "वेरिएबल", "फंक्शन", "लूप"],
    "answer_en": "Value that cannot be changed",
    "answer_hi": "वैल्यू जिसे बदला नहीं जा सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "How to declare a constant in C?",
    "question_hi": "C में कॉन्स्टेंट कैसे डिक्लेयर करते हैं?",
    "options_en": ["const int x = 5;", "constant int x = 5;", "int const x = 5;", "Both a and c"],
    "options_hi": ["const int x = 5;", "constant int x = 5;", "int const x = 5;", "a और c दोनों"],
    "answer_en": "Both a and c",
    "answer_hi": "a और c दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is an operator?",
    "question_hi": "ऑपरेटर क्या है?",
    "options_en": ["Symbol that performs operation", "Variable", "Function", "Keyword"],
    "options_hi": ["सिंबल जो ऑपरेशन करता है", "वेरिएबल", "फंक्शन", "कीवर्ड"],
    "answer_en": "Symbol that performs operation",
    "answer_hi": "सिंबल जो ऑपरेशन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which is an arithmetic operator?",
    "question_hi": "कौन सा अरिथमेटिक ऑपरेटर है?",
    "options_en": ["+", "=", "==", "&&"],
    "options_hi": ["+", "=", "==", "&&"],
    "answer_en": "+",
    "answer_hi": "+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which is a relational operator?",
    "question_hi": "कौन सा रिलेशनल ऑपरेटर है?",
    "options_en": [">", "+", "=", "&"],
    "options_hi": [">", "+", "=", "&"],
    "answer_en": ">",
    "answer_hi": ">",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which is an assignment operator?",
    "question_hi": "कौन सा असाइनमेंट ऑपरेटर है?",
    "options_en": ["=", "==", "!=", ">"],
    "options_hi": ["=", "==", "!=", ">"],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "Which is a logical operator?",
    "question_hi": "कौन सा लॉजिकल ऑपरेटर है?",
    "options_en": ["&&", "=", "+", ">"],
    "options_hi": ["&&", "=", "+", ">"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does == operator do?",
    "question_hi": "== ऑपरेटर क्या करता है?",
    "options_en": ["Checks equality", "Assigns value", "Adds", "Compares greater"],
    "options_hi": ["समानता जांचता है", "वैल्यू असाइन करता है", "जोड़ता है", "बड़ा तुलना करता है"],
    "answer_en": "Checks equality",
    "answer_hi": "समानता जांचता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does != operator do?",
    "question_hi": "!= ऑपरेटर क्या करता है?",
    "options_en": ["Checks not equal", "Checks equal", "Assigns", "Adds"],
    "options_hi": ["असमानता जांचता है", "समानता जांचता है", "असाइन करता है", "जोड़ता है"],
    "answer_en": "Checks not equal",
    "answer_hi": "असमानता जांचता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the result of 5 + 3?",
    "question_hi": "5 + 3 का रिजल्ट क्या है?",
    "options_en": ["8", "53", "2", "15"],
    "options_hi": ["8", "53", "2", "15"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the result of 10 - 4?",
    "question_hi": "10 - 4 का रिजल्ट क्या है?",
    "options_en": ["6", "14", "-6", "40"],
    "options_hi": ["6", "14", "-6", "40"],
    "answer_en": "6",
    "answer_hi": "6",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the result of 6 * 7?",
    "question_hi": "6 * 7 का रिजल्ट क्या है?",
    "options_en": ["42", "13", "67", "1"],
    "options_hi": ["42", "13", "67", "1"],
    "answer_en": "42",
    "answer_hi": "42",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the result of 15 / 3?",
    "question_hi": "15 / 3 का रिजल्ट क्या है?",
    "options_en": ["5", "45", "12", "0"],
    "options_hi": ["5", "45", "12", "0"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the result of 10 % 3?",
    "question_hi": "10 % 3 का रिजल्ट क्या है?",
    "options_en": ["1", "3", "0", "10"],
    "options_hi": ["1", "3", "0", "10"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does % operator do?",
    "question_hi": "% ऑपरेटर क्या करता है?",
    "options_en": ["Gives remainder", "Gives quotient", "Divides", "Multiplies"],
    "options_hi": ["शेष देता है", "भागफल देता है", "भाग देता है", "गुणा करता है"],
    "answer_en": "Gives remainder",
    "answer_hi": "शेष देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which operator increases value by 1?",
    "question_hi": "कौन सा ऑपरेटर वैल्यू 1 से बढ़ाता है?",
    "options_en": ["++", "--", "+", "="],
    "options_hi": ["++", "--", "+", "="],
    "answer_en": "++",
    "answer_hi": "++",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "Which operator decreases value by 1?",
    "question_hi": "कौन सा ऑपरेटर वैल्यू 1 से घटाता है?",
    "options_en": ["--", "++", "-", "="],
    "options_hi": ["--", "++", "-", "="],
    "answer_en": "--",
    "answer_hi": "--",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is x++ called?",
    "question_hi": "x++ को क्या कहा जाता है?",
    "options_en": ["Post-increment", "Pre-increment", "Decrement", "Addition"],
    "options_hi": ["पोस्ट-इंक्रीमेंट", "प्री-इंक्रीमेंट", "डिक्रीमेंट", "एडिशन"],
    "answer_en": "Post-increment",
    "answer_hi": "पोस्ट-इंक्रीमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is ++x called?",
    "question_hi": "++x को क्या कहा जाता है?",
    "options_en": ["Pre-increment", "Post-increment", "Decrement", "Subtraction"],
    "options_hi": ["प्री-इंक्रीमेंट", "पोस्ट-इंक्रीमेंट", "डिक्रीमेंट", "सबट्रैक्शन"],
    "answer_en": "Pre-increment",
    "answer_hi": "प्री-इंक्रीमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is a control statement?",
    "question_hi": "कंट्रोल स्टेटमेंट क्या है?",
    "options_en": ["Controls program flow", "Declares variable", "Prints output", "Calculates"],
    "options_hi": ["प्रोग्राम फ्लो कंट्रोल करता है", "वेरिएबल डिक्लेयर करता है", "आउटपुट प्रिंट करता है", "कैलकुलेट करता है"],
    "answer_en": "Controls program flow",
    "answer_hi": "प्रोग्राम फ्लो कंट्रोल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Which is a decision making statement?",
    "question_hi": "कौन सा डिसीजन मेकिंग स्टेटमेंट है?",
    "options_en": ["if", "for", "while", "do"],
    "options_hi": ["if", "for", "while", "do"],
    "answer_en": "if",
    "answer_hi": "if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Syntax of if statement?",
    "question_hi": "if स्टेटमेंट का सिंटैक्स?",
    "options_en": ["if(condition) {}", "if condition {}", "if {condition}", "if [] {}"],
    "options_hi": ["if(condition) {}", "if condition {}", "if {condition}", "if [] {}"],
    "answer_en": "if(condition) {}",
    "answer_hi": "if(condition) {}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does if-else do?",
    "question_hi": "if-else क्या करता है?",
    "options_en": ["Executes code based on condition", "Loops", "Declares variable", "Prints"],
    "options_hi": ["कंडीशन के आधार पर कोड एक्जीक्यूट करता है", "लूप करता है", "वेरिएबल डिक्लेयर करता है", "प्रिंट करता है"],
    "answer_en": "Executes code based on condition",
    "answer_hi": "कंडीशन के आधार पर कोड एक्जीक्यूट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Which is used for multiple conditions?",
    "question_hi": "मल्टीपल कंडीशन्स के लिए क्या उपयोग होता है?",
    "options_en": ["else if", "if", "else", "then"],
    "options_hi": ["else if", "if", "else", "then"],
    "answer_en": "else if",
    "answer_hi": "else if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is switch used for?",
    "question_hi": "switch किसके लिए उपयोग होता है?",
    "options_en": ["Multiple choices", "Single condition", "Looping", "Input"],
    "options_hi": ["मल्टीपल चॉइस", "सिंगल कंडीशन", "लूपिंग", "इनपुट"],
    "answer_en": "Multiple choices",
    "answer_hi": "मल्टीपल चॉइस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Which statement ends a case in switch?",
    "question_hi": "switch में case को कौन सा स्टेटमेंट खत्म करता है?",
    "options_en": ["break", "continue", "return", "exit"],
    "options_hi": ["break", "continue", "return", "exit"],
    "answer_en": "break",
    "answer_hi": "break",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
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
    "num": 57,
    "question_en": "Which is a loop in C?",
    "question_hi": "C में कौन सा लूप है?",
    "options_en": ["for", "if", "switch", "else"],
    "options_hi": ["for", "if", "switch", "else"],
    "answer_en": "for",
    "answer_hi": "for",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "How many times for loop runs: for(i=1;i<=5;i++)?",
    "question_hi": "for(i=1;i<=5;i++) लूप कितनी बार चलेगा?",
    "options_en": ["5", "4", "6", "1"],
    "options_hi": ["5", "4", "6", "1"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What does while loop do?",
    "question_hi": "while लूप क्या करता है?",
    "options_en": ["Repeats while condition true", "Repeats fixed times", "Chooses", "Decides"],
    "options_hi": ["कंडीशन सच रहने तक दोहराता है", "फिक्स्ड टाइम्स दोहराता है", "चुनता है", "निर्णय लेता है"],
    "answer_en": "Repeats while condition true",
    "answer_hi": "कंडीशन सच रहने तक दोहराता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Which loop checks condition at end?",
    "question_hi": "कौन सा लूप अंत में कंडीशन चेक करता है?",
    "options_en": ["do-while", "for", "while", "if"],
    "options_hi": ["do-while", "for", "while", "if"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which loop always runs at least once?",
    "question_hi": "कौन सा लूप कम से कम एक बार जरूर चलता है?",
    "options_en": ["do-while", "while", "for", "if"],
    "options_hi": ["do-while", "while", "for", "if"],
    "answer_en": "do-while",
    "answer_hi": "do-while",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does break do in loop?",
    "question_hi": "लूप में break क्या करता है?",
    "options_en": ["Exits loop", "Skips iteration", "Continues", "Starts loop"],
    "options_hi": ["लूप से बाहर निकलता है", "इटरेशन छोड़ता है", "जारी रखता है", "लूप शुरू करता है"],
    "answer_en": "Exits loop",
    "answer_hi": "लूप से बाहर निकलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What does continue do in loop?",
    "question_hi": "लूप में continue क्या करता है?",
    "options_en": ["Skips current iteration", "Exits loop", "Starts loop", "Ends program"],
    "options_hi": ["करंट इटरेशन छोड़ता है", "लूप से बाहर निकलता है", "लूप शुरू करता है", "प्रोग्राम खत्म करता है"],
    "answer_en": "Skips current iteration",
    "answer_hi": "करंट इटरेशन छोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is an array?",
    "question_hi": "एरे क्या है?",
    "options_en": ["Collection of same type elements", "Single variable", "Function", "Loop"],
    "options_hi": ["समान टाइप के एलिमेंट्स का कलेक्शन", "सिंगल वेरिएबल", "फंक्शन", "लूप"],
    "answer_en": "Collection of same type elements",
    "answer_hi": "समान टाइप के एलिमेंट्स का कलेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "How to declare int array of size 5?",
    "question_hi": "साइज 5 का int एरे कैसे डिक्लेयर करें?",
    "options_en": ["int arr[5];", "array arr[5];", "int arr(5);", "arr[5] int;"],
    "options_hi": ["int arr[5];", "array arr[5];", "int arr(5);", "arr[5] int;"],
    "answer_en": "int arr[5];",
    "answer_hi": "int arr[5];",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is index of first element in array?",
    "question_hi": "एरे में पहले एलिमेंट का इंडेक्स क्या है?",
    "options_en": ["0", "1", "2", "-1"],
    "options_hi": ["0", "1", "2", "-1"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "How to access 3rd element of array arr?",
    "question_hi": "एरे arr के तीसरे एलिमेंट तक कैसे पहुंचें?",
    "options_en": ["arr[2]", "arr[3]", "arr(2)", "arr.3"],
    "options_hi": ["arr[2]", "arr[3]", "arr(2)", "arr.3"],
    "answer_en": "arr[2]",
    "answer_hi": "arr[2]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is a string in C?",
    "question_hi": "C में स्ट्रिंग क्या है?",
    "options_en": ["Array of characters", "Single char", "Integer", "Float"],
    "options_hi": ["कैरेक्टर्स की एरे", "सिंगल char", "इंटीजर", "फ्लोट"],
    "answer_en": "Array of characters",
    "answer_hi": "कैरेक्टर्स की एरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "How to declare a string?",
    "question_hi": "स्ट्रिंग कैसे डिक्लेयर करें?",
    "options_en": ["char str[10];", "string str;", "str char[10];", "char str = \"hello\";"],
    "options_hi": ["char str[10];", "string str;", "str char[10];", "char str = \"hello\";"],
    "answer_en": "char str[10];",
    "answer_hi": "char str[10];",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "Which character marks end of string?",
    "question_hi": "कौन सा कैरेक्टर स्ट्रिंग के अंत को मार्क करता है?",
    "options_en": ["\\0", "\\n", "\\t", "\\r"],
    "options_hi": ["\\0", "\\n", "\\t", "\\r"],
    "answer_en": "\\0",
    "answer_hi": "\\0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is a function?",
    "question_hi": "फंक्शन क्या है?",
    "options_en": ["Block of reusable code", "Variable", "Loop", "Condition"],
    "options_hi": ["रीयूजेबल कोड का ब्लॉक", "वेरिएबल", "लूप", "कंडीशन"],
    "answer_en": "Block of reusable code",
    "answer_hi": "रीयूजेबल कोड का ब्लॉक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is function declaration?",
    "question_hi": "फंक्शन डिक्लेरेशन क्या है?",
    "options_en": ["Tells compiler about function", "Defines function", "Calls function", "Ends function"],
    "options_hi": ["कंपाइलर को फंक्शन के बारे में बताता है", "फंक्शन डिफाइन करता है", "फंक्शन कॉल करता है", "फंक्शन खत्म करता है"],
    "answer_en": "Tells compiler about function",
    "answer_hi": "कंपाइलर को फंक्शन के बारे में बताता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is function definition?",
    "question_hi": "फंक्शन डेफिनिशन क्या है?",
    "options_en": ["Contains actual code of function", "Declaration", "Call", "Header"],
    "options_hi": ["फंक्शन का एक्चुअल कोड रखता है", "डिक्लेरेशन", "कॉल", "हेडर"],
    "answer_en": "Contains actual code of function",
    "answer_hi": "फंक्शन का एक्चुअल कोड रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is function call?",
    "question_hi": "फंक्शन कॉल क्या है?",
    "options_en": ["Executes function", "Declares function", "Defines function", "Ends function"],
    "options_hi": ["फंक्शन एक्जीक्यूट करता है", "फंक्शन डिक्लेयर करता है", "फंक्शन डिफाइन करता है", "फंक्शन खत्म करता है"],
    "answer_en": "Executes function",
    "answer_hi": "फंक्शन एक्जीक्यूट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is return type of function that returns nothing?",
    "question_hi": "उस फंक्शन का रिटर्न टाइप क्या है जो कुछ भी रिटर्न नहीं करता?",
    "options_en": ["void", "int", "float", "char"],
    "options_hi": ["void", "int", "float", "char"],
    "answer_en": "void",
    "answer_hi": "void",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is a parameter?",
    "question_hi": "पैरामीटर क्या है?",
    "options_en": ["Variable in function definition", "Value passed", "Return value", "Function name"],
    "options_hi": ["फंक्शन डेफिनिशन में वेरिएबल", "पास की गई वैल्यू", "रिटर्न वैल्यू", "फंक्शन नाम"],
    "answer_en": "Variable in function definition",
    "answer_hi": "फंक्शन डेफिनिशन में वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is an argument?",
    "question_hi": "आर्ग्युमेंट क्या है?",
    "options_en": ["Value passed to function", "Variable in function", "Return value", "Function type"],
    "options_hi": ["फंक्शन में पास की गई वैल्यू", "फंक्शन में वेरिएबल", "रिटर्न वैल्यू", "फंक्शन टाइप"],
    "answer_en": "Value passed to function",
    "answer_hi": "फंक्शन में पास की गई वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is recursion?",
    "question_hi": "रिकर्सन क्या है?",
    "options_en": ["Function calling itself", "Loop", "Condition", "Array"],
    "options_hi": ["फंक्शन का खुद को कॉल करना", "लूप", "कंडीशन", "एरे"],
    "answer_en": "Function calling itself",
    "answer_hi": "फंक्शन का खुद को कॉल करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is a pointer?",
    "question_hi": "पॉइंटर क्या है?",
    "options_en": ["Variable storing address", "Variable storing value", "Function", "Array"],
    "options_hi": ["एड्रेस स्टोर करने वाला वेरिएबल", "वैल्यू स्टोर करने वाला वेरिएबल", "फंक्शन", "एरे"],
    "answer_en": "Variable storing address",
    "answer_hi": "एड्रेस स्टोर करने वाला वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "Which operator gets address of variable?",
    "question_hi": "कौन सा ऑपरेटर वेरिएबल का एड्रेस प्राप्त करता है?",
    "options_en": ["&", "*", "->", "."],
    "options_hi": ["&", "*", "->", "."],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "Which operator accesses value at address?",
    "question_hi": "कौन सा ऑपरेटर एड्रेस पर वैल्यू एक्सेस करता है?",
    "options_en": ["*", "&", "->", "."],
    "options_hi": ["*", "&", "->", "."],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "How to declare int pointer?",
    "question_hi": "int पॉइंटर कैसे डिक्लेयर करें?",
    "options_en": ["int *p;", "pointer p;", "int p*;", "p int*;"],
    "options_hi": ["int *p;", "pointer p;", "int p*;", "p int*;"],
    "answer_en": "int *p;",
    "answer_hi": "int *p;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is NULL pointer?",
    "question_hi": "NULL पॉइंटर क्या है?",
    "options_en": ["Pointer pointing to nothing", "Zero", "Garbage", "Invalid address"],
    "options_hi": ["किसी भी चीज़ की ओर इशारा न करने वाला पॉइंटर", "शून्य", "गार्बेज", "अमान्य एड्रेस"],
    "answer_en": "Pointer pointing to nothing",
    "answer_hi": "किसी भी चीज़ की ओर इशारा न करने वाला पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is structure in C?",
    "question_hi": "C में स्ट्रक्चर क्या है?",
    "options_en": ["User-defined data type", "Predefined type", "Function", "Loop"],
    "options_hi": ["यूजर-डिफाइंड डेटा टाइप", "प्रीडिफाइंड टाइप", "फंक्शन", "लूप"],
    "answer_en": "User-defined data type",
    "answer_hi": "यूजर-डिफाइंड डेटा टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Keyword to define structure?",
    "question_hi": "स्ट्रक्चर डिफाइन करने के लिए कीवर्ड?",
    "options_en": ["struct", "structure", "class", "typedef"],
    "options_hi": ["struct", "structure", "class", "typedef"],
    "answer_en": "struct",
    "answer_hi": "struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which operator accesses structure member?",
    "question_hi": "कौन सा ऑपरेटर स्ट्रक्चर मेंबर एक्सेस करता है?",
    "options_en": [".", "->", "*", "&"],
    "options_hi": [".", "->", "*", "&"],
    "answer_en": ".",
    "answer_hi": ".",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is file in C?",
    "question_hi": "C में फाइल क्या है?",
    "options_en": ["Collection of data on disk", "Variable", "Array", "Function"],
    "options_hi": ["डिस्क पर डेटा का कलेक्शन", "वेरिएबल", "एरे", "फंक्शन"],
    "answer_en": "Collection of data on disk",
    "answer_hi": "डिस्क पर डेटा का कलेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Function to open file?",
    "question_hi": "फाइल ओपन करने के लिए फंक्शन?",
    "options_en": ["fopen()", "open()", "fileopen()", "readfile()"],
    "options_hi": ["fopen()", "open()", "fileopen()", "readfile()"],
    "answer_en": "fopen()",
    "answer_hi": "fopen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "Function to close file?",
    "question_hi": "फाइल क्लोज करने के लिए फंक्शन?",
    "options_en": ["fclose()", "close()", "fileclose()", "endfile()"],
    "options_hi": ["fclose()", "close()", "fileclose()", "endfile()"],
    "answer_en": "fclose()",
    "answer_hi": "fclose()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "Mode to open file for reading?",
    "question_hi": "रीडिंग के लिए फाइल ओपन करने का मोड?",
    "options_en": ["r", "w", "a", "x"],
    "options_hi": ["r", "w", "a", "x"],
    "answer_en": "r",
    "answer_hi": "r",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Mode to open file for writing?",
    "question_hi": "राइटिंग के लिए फाइल ओपन करने का मोड?",
    "options_en": ["w", "r", "a", "r+"],
    "options_hi": ["w", "r", "a", "r+"],
    "answer_en": "w",
    "answer_hi": "w",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is compiler?",
    "question_hi": "कंपाइलर क्या है?",
    "options_en": ["Converts source code to machine code", "Executes program", "Edits code", "Debugs"],
    "options_hi": ["सोर्स कोड को मशीन कोड में बदलता है", "प्रोग्राम एक्जीक्यूट करता है", "कोड एडिट करता है", "डीबग करता है"],
    "answer_en": "Converts source code to machine code",
    "answer_hi": "सोर्स कोड को मशीन कोड में बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is IDE?",
    "question_hi": "IDE क्या है?",
    "options_en": ["Integrated Development Environment", "Compiler", "Editor", "Debugger"],
    "options_hi": ["इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "कंपाइलर", "एडिटर", "डीबगर"],
    "answer_en": "Integrated Development Environment",
    "answer_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "Example of C IDE?",
    "question_hi": "C IDE का उदाहरण?",
    "options_en": ["Code::Blocks", "Chrome", "Word", "Excel"],
    "options_hi": ["Code::Blocks", "Chrome", "Word", "Excel"],
    "answer_en": "Code::Blocks",
    "answer_hi": "Code::Blocks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is debugging?",
    "question_hi": "डीबगिंग क्या है?",
    "options_en": ["Finding and fixing errors", "Writing code", "Compiling", "Running"],
    "options_hi": ["एरर्स ढूंढना और ठीक करना", "कोड लिखना", "कंपाइल करना", "रन करना"],
    "answer_en": "Finding and fixing errors",
    "answer_hi": "एरर्स ढूंढना और ठीक करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is syntax error?",
    "question_hi": "सिंटैक्स एरर क्या है?",
    "options_en": ["Error in code grammar", "Logical mistake", "Runtime error", "No error"],
    "options_hi": ["कोड ग्रामर में एरर", "लॉजिकल गलती", "रनटाइम एरर", "कोई एरर नहीं"],
    "answer_en": "Error in code grammar",
    "answer_hi": "कोड ग्रामर में एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is logical error?",
    "question_hi": "लॉजिकल एरर क्या है?",
    "options_en": ["Program runs but gives wrong output", "Won't compile", "Crashes", "No output"],
    "options_hi": ["प्रोग्राम चलता है लेकिन गलत आउटपुट देता है", "कंपाइल नहीं होगा", "क्रैश होता है", "कोई आउटपुट नहीं"],
    "answer_en": "Program runs but gives wrong output",
    "answer_hi": "प्रोग्राम चलता है लेकिन गलत आउटपुट देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is runtime error?",
    "question_hi": "रनटाइम एरर क्या है?",
    "options_en": ["Error during program execution", "Compile error", "Logical error", "Syntax error"],
    "options_hi": ["प्रोग्राम एक्जीक्यूशन के दौरान एरर", "कंपाइल एरर", "लॉजिकल एरर", "सिंटैक्स एरर"],
    "answer_en": "Error during program execution",
    "answer_hi": "प्रोग्राम एक्जीक्यूशन के दौरान एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is a bug?",
    "question_hi": "बग क्या है?",
    "options_en": ["Error in program", "Feature", "Output", "Input"],
    "options_hi": ["प्रोग्राम में एरर", "फीचर", "आउटपुट", "इनपुट"],
    "answer_en": "Error in program",
    "answer_hi": "प्रोग्राम में एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the first step in programming?",
    "question_hi": "प्रोग्रामिंग में पहला स्टेप क्या है?",
    "options_en": ["Understand the problem", "Write code", "Compile", "Debug"],
    "options_hi": ["प्रॉब्लम को समझना", "कोड लिखना", "कंपाइल करना", "डीबग करना"],
    "answer_en": "Understand the problem",
    "answer_hi": "प्रॉब्लम को समझना",
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