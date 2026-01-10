const questions =[
  {
    "num": 1,
    "question_en": "Which symbol is used to include header files in C?",
    "question_hi": "C में हेडर फाइल्स इन्क्लूड करने के लिए किस सिंबल का उपयोग होता है?",
    "options_en": ["#include", "#define", "#ifdef", "#pragma"],
    "options_hi": ["#include", "#define", "#ifdef", "#pragma"],
    "answer_en": "#include",
    "answer_hi": "#include",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the correct syntax for main function in C?",
    "question_hi": "C में main फंक्शन का सही सिंटैक्स क्या है?",
    "options_en": ["int main()", "main()", "void main()", "function main()"],
    "options_hi": ["int main()", "main()", "void main()", "function main()"],
    "answer_en": "int main()",
    "answer_hi": "int main()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'return 0;' statement do in main function?",
    "question_hi": "main फंक्शन में 'return 0;' स्टेटमेंट क्या करता है?",
    "options_en": ["Indicates successful execution", "Returns error", "Ends program", "Prints 0"],
    "options_hi": ["सफल एक्जीक्यूशन दर्शाता है", "एरर रिटर्न करता है", "प्रोग्राम खत्म करता है", "0 प्रिंट करता है"],
    "answer_en": "Indicates successful execution",
    "answer_hi": "सफल एक्जीक्यूशन दर्शाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which is the smallest individual unit in a C program?",
    "question_hi": "C प्रोग्राम में सबसे छोटी इकाई कौन सी है?",
    "options_en": ["Token", "Function", "Variable", "Statement"],
    "options_hi": ["टोकन", "फंक्शन", "वेरिएबल", "स्टेटमेंट"],
    "answer_en": "Token",
    "answer_hi": "टोकन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is a token in C?",
    "question_hi": "C में टोकन क्या है?",
    "options_en": ["Basic building block", "Function", "Header file", "Comment"],
    "options_hi": ["बेसिक बिल्डिंग ब्लॉक", "फंक्शन", "हेडर फाइल", "कमेंट"],
    "answer_en": "Basic building block",
    "answer_hi": "बेसिक बिल्डिंग ब्लॉक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "Which of these is NOT a type of token in C?",
    "question_hi": "यह में से कौन C में टोकन का प्रकार नहीं है?",
    "options_en": ["Program", "Keyword", "Identifier", "Operator"],
    "options_hi": ["प्रोग्राम", "कीवर्ड", "आइडेंटिफायर", "ऑपरेटर"],
    "answer_en": "Program",
    "answer_hi": "प्रोग्राम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What are keywords in C?",
    "question_hi": "C में कीवर्ड क्या हैं?",
    "options_en": ["Reserved words with special meaning", "Variable names", "Function names", "Comments"],
    "options_hi": ["विशेष अर्थ वाले रिजर्व्ड शब्द", "वेरिएबल नाम", "फंक्शन नाम", "कमेंट्स"],
    "answer_en": "Reserved words with special meaning",
    "answer_hi": "विशेष अर्थ वाले रिजर्व्ड शब्द",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "Which of these is a C keyword?",
    "question_hi": "इनमें से कौन C कीवर्ड है?",
    "options_en": ["if", "main", "printf", "scanf"],
    "options_hi": ["if", "main", "printf", "scanf"],
    "answer_en": "if",
    "answer_hi": "if",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What are identifiers in C?",
    "question_hi": "C में आइडेंटिफायर क्या हैं?",
    "options_en": ["Names given to program elements", "Keywords", "Operators", "Comments"],
    "options_hi": ["प्रोग्राम एलिमेंट्स के दिए गए नाम", "कीवर्ड", "ऑपरेटर", "कमेंट्स"],
    "answer_en": "Names given to program elements",
    "answer_hi": "प्रोग्राम एलिमेंट्स के दिए गए नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "Which is a valid identifier name?",
    "question_hi": "कौन सा वैध आइडेंटिफायर नाम है?",
    "options_en": ["student_name", "123student", "student-name", "float"],
    "options_hi": ["student_name", "123student", "student-name", "float"],
    "answer_en": "student_name",
    "answer_hi": "student_name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is a literal in C?",
    "question_hi": "C में लिटरल क्या है?",
    "options_en": ["Constant value used directly", "Variable", "Function", "Operator"],
    "options_hi": ["सीधे उपयोग की गई कॉन्स्टेंट वैल्यू", "वेरिएबल", "फंक्शन", "ऑपरेटर"],
    "answer_en": "Constant value used directly",
    "answer_hi": "सीधे उपयोग की गई कॉन्स्टेंट वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Example of integer literal?",
    "question_hi": "इंटीजर लिटरल का उदाहरण?",
    "options_en": ["100", "'A'", "\"hello\"", "3.14"],
    "options_hi": ["100", "'A'", "\"hello\"", "3.14"],
    "answer_en": "100",
    "answer_hi": "100",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Example of character literal?",
    "question_hi": "कैरेक्टर लिटरल का उदाहरण?",
    "options_en": ["'A'", "100", "\"hello\"", "3.14"],
    "options_hi": ["'A'", "100", "\"hello\"", "3.14"],
    "answer_en": "'A'",
    "answer_hi": "'A'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "Example of string literal?",
    "question_hi": "स्ट्रिंग लिटरल का उदाहरण?",
    "options_en": ["\"hello\"", "'A'", "100", "3.14"],
    "options_hi": ["\"hello\"", "'A'", "100", "3.14"],
    "answer_en": "\"hello\"",
    "answer_hi": "\"hello\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is a punctuator in C?",
    "question_hi": "C में पंक्चुएटर क्या है?",
    "options_en": ["Symbols used for syntax", "Keywords", "Variables", "Functions"],
    "options_hi": ["सिंटैक्स के लिए उपयोग किए गए सिंबल", "कीवर्ड", "वेरिएबल", "फंक्शन"],
    "answer_en": "Symbols used for syntax",
    "answer_hi": "सिंटैक्स के लिए उपयोग किए गए सिंबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Example of punctuator?",
    "question_hi": "पंक्चुएटर का उदाहरण?",
    "options_en": [";", "if", "int", "printf"],
    "options_hi": [";", "if", "int", "printf"],
    "answer_en": ";",
    "answer_hi": ";",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is a statement in C?",
    "question_hi": "C में स्टेटमेंट क्या है?",
    "options_en": ["Instruction to perform action", "Comment", "Header file", "Variable"],
    "options_hi": ["एक्शन करने का निर्देश", "कमेंट", "हेडर फाइल", "वेरिएबल"],
    "answer_en": "Instruction to perform action",
    "answer_hi": "एक्शन करने का निर्देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Which is an example of expression statement?",
    "question_hi": "एक्सप्रेशन स्टेटमेंट का उदाहरण कौन सा है?",
    "options_en": ["x = 5;", "if(x>5)", "#include", "/* comment */"],
    "options_hi": ["x = 5;", "if(x>5)", "#include", "/* comment */"],
    "answer_en": "x = 5;",
    "answer_hi": "x = 5;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is a compound statement?",
    "question_hi": "कंपाउंड स्टेटमेंट क्या है?",
    "options_en": ["Group of statements in braces", "Single statement", "Comment", "Expression"],
    "options_hi": ["ब्रैसेस में स्टेटमेंट्स का समूह", "सिंगल स्टेटमेंट", "कमेंट", "एक्सप्रेशन"],
    "answer_en": "Group of statements in braces",
    "answer_hi": "ब्रैसेस में स्टेटमेंट्स का समूह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is a block in C?",
    "question_hi": "C में ब्लॉक क्या है?",
    "options_en": ["Group of statements enclosed in { }", "Single line", "Comment", "Header"],
    "options_hi": ["{ } में संलग्न स्टेटमेंट्स का समूह", "सिंगल लाइन", "कमेंट", "हेडर"],
    "answer_en": "Group of statements enclosed in { }",
    "answer_hi": "{ } में संलग्न स्टेटमेंट्स का समूह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is a function prototype?",
    "question_hi": "फंक्शन प्रोटोटाइप क्या है?",
    "options_en": ["Declaration of function", "Definition of function", "Call to function", "Header file"],
    "options_hi": ["फंक्शन की घोषणा", "फंक्शन की परिभाषा", "फंक्शन को कॉल", "हेडर फाइल"],
    "answer_en": "Declaration of function",
    "answer_hi": "फंक्शन की घोषणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does a function prototype contain?",
    "question_hi": "फंक्शन प्रोटोटाइप में क्या होता है?",
    "options_en": ["Return type, name, parameters", "Function body", "Local variables", "Comments"],
    "options_hi": ["रिटर्न टाइप, नाम, पैरामीटर्स", "फंक्शन बॉडी", "लोकल वेरिएबल", "कमेंट्स"],
    "answer_en": "Return type, name, parameters",
    "answer_hi": "रिटर्न टाइप, नाम, पैरामीटर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is a library function?",
    "question_hi": "लाइब्रेरी फंक्शन क्या है?",
    "options_en": ["Predefined function in C", "User-defined function", "Variable", "Operator"],
    "options_hi": ["C में प्रीडिफाइंड फंक्शन", "यूजर-डिफाइंड फंक्शन", "वेरिएबल", "ऑपरेटर"],
    "answer_en": "Predefined function in C",
    "answer_hi": "C में प्रीडिफाइंड फंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "Example of library function?",
    "question_hi": "लाइब्रेरी फंक्शन का उदाहरण?",
    "options_en": ["printf()", "main()", "myfunc()", "calculate()"],
    "options_hi": ["printf()", "main()", "myfunc()", "calculate()"],
    "answer_en": "printf()",
    "answer_hi": "printf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is a user-defined function?",
    "question_hi": "यूजर-डिफाइंड फंक्शन क्या है?",
    "options_en": ["Function created by programmer", "Library function", "Predefined function", "Operator"],
    "options_hi": ["प्रोग्रामर द्वारा बनाया गया फंक्शन", "लाइब्रेरी फंक्शन", "प्रीडिफाइंड फंक्शन", "ऑपरेटर"],
    "answer_en": "Function created by programmer",
    "answer_hi": "प्रोग्रामर द्वारा बनाया गया फंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is scope of a variable?",
    "question_hi": "वेरिएबल का स्कोप क्या है?",
    "options_en": ["Region where variable can be accessed", "Value of variable", "Type of variable", "Name of variable"],
    "options_hi": ["क्षेत्र जहां वेरिएबल एक्सेस किया जा सकता है", "वेरिएबल की वैल्यू", "वेरिएबल का टाइप", "वेरिएबल का नाम"],
    "answer_en": "Region where variable can be accessed",
    "answer_hi": "क्षेत्र जहां वेरिएबल एक्सेस किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is local variable?",
    "question_hi": "लोकल वेरिएबल क्या है?",
    "options_en": ["Variable declared inside function", "Variable declared outside all functions", "Constant", "Global variable"],
    "options_hi": ["फंक्शन के अंदर डिक्लेयर वेरिएबल", "सभी फंक्शन्स के बाहर डिक्लेयर वेरिएबल", "कॉन्स्टेंट", "ग्लोबल वेरिएबल"],
    "answer_en": "Variable declared inside function",
    "answer_hi": "फंक्शन के अंदर डिक्लेयर वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is global variable?",
    "question_hi": "ग्लोबल वेरिएबल क्या है?",
    "options_en": ["Variable declared outside all functions", "Variable inside function", "Constant", "Local variable"],
    "options_hi": ["सभी फंक्शन्स के बाहर डिक्लेयर वेरिएबल", "फंक्शन के अंदर वेरिएबल", "कॉन्स्टेंट", "लोकल वेरिएबल"],
    "answer_en": "Variable declared outside all functions",
    "answer_hi": "सभी फंक्शन्स के बाहर डिक्लेयर वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is lifetime of a variable?",
    "question_hi": "वेरिएबल का लाइफटाइम क्या है?",
    "options_en": ["Duration variable exists in memory", "Scope of variable", "Value of variable", "Type of variable"],
    "options_hi": ["समय जब तक वेरिएबल मेमोरी में रहता है", "वेरिएबल का स्कोप", "वेरिएबल की वैल्यू", "वेरिएबल का टाइप"],
    "answer_en": "Duration variable exists in memory",
    "answer_hi": "समय जब तक वेरिएबल मेमोरी में रहता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is type conversion?",
    "question_hi": "टाइप कन्वर्जन क्या है?",
    "options_en": ["Converting one data type to another", "Changing variable name", "Changing value", "Declaring variable"],
    "options_hi": ["एक डेटा टाइप को दूसरे में बदलना", "वेरिएबल नाम बदलना", "वैल्यू बदलना", "वेरिएबल डिक्लेयर करना"],
    "answer_en": "Converting one data type to another",
    "answer_hi": "एक डेटा टाइप को दूसरे में बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is implicit type conversion?",
    "question_hi": "इम्प्लिसिट टाइप कन्वर्जन क्या है?",
    "options_en": ["Automatic conversion by compiler", "Manual conversion", "No conversion", "Error"],
    "options_hi": ["कंपाइलर द्वारा ऑटोमैटिक कन्वर्जन", "मैनुअल कन्वर्जन", "कोई कन्वर्जन नहीं", "एरर"],
    "answer_en": "Automatic conversion by compiler",
    "answer_hi": "कंपाइलर द्वारा ऑटोमैटिक कन्वर्जन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is explicit type conversion?",
    "question_hi": "एक्सप्लिसिट टाइप कन्वर्जन क्या है?",
    "options_en": ["Manual conversion using cast operator", "Automatic conversion", "No conversion", "Compiler error"],
    "options_hi": ["कास्ट ऑपरेटर का उपयोग कर मैनुअल कन्वर्जन", "ऑटोमैटिक कन्वर्जन", "कोई कन्वर्जन नहीं", "कंपाइलर एरर"],
    "answer_en": "Manual conversion using cast operator",
    "answer_hi": "कास्ट ऑपरेटर का उपयोग कर मैनुअल कन्वर्जन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is type casting?",
    "question_hi": "टाइप कास्टिंग क्या है?",
    "options_en": ["Explicit type conversion", "Implicit conversion", "Variable declaration", "Function call"],
    "options_hi": ["एक्सप्लिसिट टाइप कन्वर्जन", "इम्प्लिसिट कन्वर्जन", "वेरिएबल डिक्लेरेशन", "फंक्शन कॉल"],
    "answer_en": "Explicit type conversion",
    "answer_hi": "एक्सप्लिसिट टाइप कन्वर्जन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Syntax for type casting?",
    "question_hi": "टाइप कास्टिंग का सिंटैक्स?",
    "options_en": ["(type) expression", "type expression", "expression type", "cast type expression"],
    "options_hi": ["(type) expression", "type expression", "expression type", "cast type expression"],
    "answer_en": "(type) expression",
    "answer_hi": "(type) expression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is typecasting float to int?",
    "question_hi": "float को int में टाइपकास्ट करना क्या है?",
    "options_en": ["(int) 3.14", "int(3.14)", "3.14 int", "float to int 3.14"],
    "options_hi": ["(int) 3.14", "int(3.14)", "3.14 int", "float to int 3.14"],
    "answer_en": "(int) 3.14",
    "answer_hi": "(int) 3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is operator precedence?",
    "question_hi": "ऑपरेटर प्रीसीडेंस क्या है?",
    "options_en": ["Order of evaluation of operators", "Value of operator", "Type of operator", "Name of operator"],
    "options_hi": ["ऑपरेटर्स के मूल्यांकन का क्रम", "ऑपरेटर की वैल्यू", "ऑपरेटर का टाइप", "ऑपरेटर का नाम"],
    "answer_en": "Order of evaluation of operators",
    "answer_hi": "ऑपरेटर्स के मूल्यांकन का क्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is operator associativity?",
    "question_hi": "ऑपरेटर असोसिएटिविटी क्या है?",
    "options_en": ["Direction of evaluation when precedence is same", "Precedence", "Value", "Type"],
    "options_hi": ["मूल्यांकन की दिशा जब प्रीसीडेंस समान हो", "प्रीसीडेंस", "वैल्यू", "टाइप"],
    "answer_en": "Direction of evaluation when precedence is same",
    "answer_hi": "मूल्यांकन की दिशा जब प्रीसीडेंस समान हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the result of 5 + 3 * 2?",
    "question_hi": "5 + 3 * 2 का रिजल्ट क्या है?",
    "options_en": ["11", "16", "13", "10"],
    "options_hi": ["11", "16", "13", "10"],
    "answer_en": "11",
    "answer_hi": "11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the result of (5 + 3) * 2?",
    "question_hi": "(5 + 3) * 2 का रिजल्ट क्या है?",
    "options_en": ["16", "11", "13", "10"],
    "options_hi": ["16", "11", "13", "10"],
    "answer_en": "16",
    "answer_hi": "16",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which has higher precedence: * or +?",
    "question_hi": "किसकी प्रीसीडेंस अधिक है: * या +?",
    "options_en": ["*", "+", "Same", "Depends"],
    "options_hi": ["*", "+", "समान", "निर्भर करता है"],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is short-circuit evaluation?",
    "question_hi": "शॉर्ट-सर्किट एवेलुएशन क्या है?",
    "options_en": ["Stops evaluation when result is known", "Evaluates all", "Error", "No evaluation"],
    "options_hi": ["मूल्यांकन रोक देता है जब रिजल्ट पता चल जाता है", "सभी का मूल्यांकन करता है", "एरर", "कोई मूल्यांकन नहीं"],
    "answer_en": "Stops evaluation when result is known",
    "answer_hi": "मूल्यांकन रोक देता है जब रिजल्ट पता चल जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is a ternary operator?",
    "question_hi": "टर्नरी ऑपरेटर क्या है?",
    "options_en": ["Conditional operator ? :", "Arithmetic operator", "Relational operator", "Logical operator"],
    "options_hi": ["कंडिशनल ऑपरेटर ? :", "अरिथमेटिक ऑपरेटर", "रिलेशनल ऑपरेटर", "लॉजिकल ऑपरेटर"],
    "answer_en": "Conditional operator ? :",
    "answer_hi": "कंडिशनल ऑपरेटर ? :",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "Syntax of ternary operator?",
    "question_hi": "टर्नरी ऑपरेटर का सिंटैक्स?",
    "options_en": ["condition ? expr1 : expr2", "expr1 ? expr2 : condition", "? condition : expr", "expr : condition ?"],
    "options_hi": ["condition ? expr1 : expr2", "expr1 ? expr2 : condition", "? condition : expr", "expr : condition ?"],
    "answer_en": "condition ? expr1 : expr2",
    "answer_hi": "condition ? expr1 : expr2",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is comma operator?",
    "question_hi": "कॉमा ऑपरेटर क्या है?",
    "options_en": [", used to separate expressions", "Separate statements", "Separate variables", "Separate functions"],
    "options_hi": [", एक्सप्रेशन्स अलग करने के लिए", "स्टेटमेंट्स अलग करने के लिए", "वेरिएबल्स अलग करने के लिए", "फंक्शन्स अलग करने के लिए"],
    "answer_en": ", used to separate expressions",
    "answer_hi": ", एक्सप्रेशन्स अलग करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is sizeof operator?",
    "question_hi": "sizeof ऑपरेटर क्या है?",
    "options_en": ["Returns size in bytes", "Returns value", "Returns address", "Returns type"],
    "options_hi": ["बाइट्स में साइज रिटर्न करता है", "वैल्यू रिटर्न करता है", "एड्रेस रिटर्न करता है", "टाइप रिटर्न करता है"],
    "answer_en": "Returns size in bytes",
    "answer_hi": "बाइट्स में साइज रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does sizeof(int) return?",
    "question_hi": "sizeof(int) क्या रिटर्न करता है?",
    "options_en": ["4 (typically)", "2", "8", "1"],
    "options_hi": ["4 (आमतौर पर)", "2", "8", "1"],
    "answer_en": "4 (typically)",
    "answer_hi": "4 (आमतौर पर)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is an lvalue?",
    "question_hi": "lvalue क्या है?",
    "options_en": ["Expression that refers to memory location", "Constant value", "Function", "Operator"],
    "options_hi": ["एक्सप्रेशन जो मेमोरी लोकेशन को रेफर करता है", "कॉन्स्टेंट वैल्यू", "फंक्शन", "ऑपरेटर"],
    "answer_en": "Expression that refers to memory location",
    "answer_hi": "एक्सप्रेशन जो मेमोरी लोकेशन को रेफर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is an rvalue?",
    "question_hi": "rvalue क्या है?",
    "options_en": ["Value stored in memory", "Memory location", "Variable name", "Function name"],
    "options_hi": ["मेमोरी में स्टोर वैल्यू", "मेमोरी लोकेशन", "वेरिएबल नाम", "फंक्शन नाम"],
    "answer_en": "Value stored in memory",
    "answer_hi": "मेमोरी में स्टोर वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "Which can be on left side of = operator?",
    "question_hi": "= ऑपरेटर के बाईं ओर क्या हो सकता है?",
    "options_en": ["lvalue", "rvalue", "Constant", "Literal"],
    "options_hi": ["lvalue", "rvalue", "कॉन्स्टेंट", "लिटरल"],
    "answer_en": "lvalue",
    "answer_hi": "lvalue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is an expression?",
    "question_hi": "एक्सप्रेशन क्या है?",
    "options_en": ["Combination of operands and operators", "Single variable", "Constant", "Statement"],
    "options_hi": ["ऑपरेंड और ऑपरेटर्स का संयोजन", "सिंगल वेरिएबल", "कॉन्स्टेंट", "स्टेटमेंट"],
    "answer_en": "Combination of operands and operators",
    "answer_hi": "ऑपरेंड और ऑपरेटर्स का संयोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "Example of arithmetic expression?",
    "question_hi": "अरिथमेटिक एक्सप्रेशन का उदाहरण?",
    "options_en": ["a + b", "a > b", "a && b", "a = b"],
    "options_hi": ["a + b", "a > b", "a && b", "a = b"],
    "answer_en": "a + b",
    "answer_hi": "a + b",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Example of relational expression?",
    "question_hi": "रिलेशनल एक्सप्रेशन का उदाहरण?",
    "options_en": ["a > b", "a + b", "a && b", "a = b"],
    "options_hi": ["a > b", "a + b", "a && b", "a = b"],
    "answer_en": "a > b",
    "answer_hi": "a > b",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "Example of logical expression?",
    "question_hi": "लॉजिकल एक्सप्रेशन का उदाहरण?",
    "options_en": ["a && b", "a + b", "a > b", "a = b"],
    "options_hi": ["a && b", "a + b", "a > b", "a = b"],
    "answer_en": "a && b",
    "answer_hi": "a && b",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is a conditional expression?",
    "question_hi": "कंडिशनल एक्सप्रेशन क्या है?",
    "options_en": ["Uses ternary operator", "Arithmetic", "Relational", "Logical"],
    "options_hi": ["टर्नरी ऑपरेटर का उपयोग करता है", "अरिथमेटिक", "रिलेशनल", "लॉजिकल"],
    "answer_en": "Uses ternary operator",
    "answer_hi": "टर्नरी ऑपरेटर का उपयोग करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is a compound expression?",
    "question_hi": "कंपाउंड एक्सप्रेशन क्या है?",
    "options_en": ["Combination of multiple expressions", "Single expression", "Constant", "Variable"],
    "options_hi": ["मल्टीपल एक्सप्रेशन्स का संयोजन", "सिंगल एक्सप्रेशन", "कॉन्स्टेंट", "वेरिएबल"],
    "answer_en": "Combination of multiple expressions",
    "answer_hi": "मल्टीपल एक्सप्रेशन्स का संयोजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is an infinite loop?",
    "question_hi": "इनफिनाइट लूप क्या है?",
    "options_en": ["Loop that never ends", "Loop that runs once", "Loop with condition", "No loop"],
    "options_hi": ["लूप जो कभी खत्म नहीं होता", "लूप जो एक बार चलता है", "कंडीशन वाला लूप", "कोई लूप नहीं"],
    "answer_en": "Loop that never ends",
    "answer_hi": "लूप जो कभी खत्म नहीं होता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "How to create infinite loop with for?",
    "question_hi": "for के साथ इनफिनाइट लूप कैसे बनाएं?",
    "options_en": ["for(;;)", "for(1)", "for(true)", "for(0)"],
    "options_hi": ["for(;;)", "for(1)", "for(true)", "for(0)"],
    "answer_en": "for(;;)",
    "answer_hi": "for(;;)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "How to create infinite loop with while?",
    "question_hi": "while के साथ इनफिनाइट लूप कैसे बनाएं?",
    "options_en": ["while(1)", "while(true)", "while()", "Both a and b"],
    "options_hi": ["while(1)", "while(true)", "while()", "a और b दोनों"],
    "answer_en": "Both a and b",
    "answer_hi": "a और b दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is a nested loop?",
    "question_hi": "नेस्टेड लूप क्या है?",
    "options_en": ["Loop inside another loop", "Single loop", "Infinite loop", "No loop"],
    "options_hi": ["एक लूप के अंदर दूसरा लूप", "सिंगल लूप", "इनफिनाइट लूप", "कोई लूप नहीं"],
    "answer_en": "Loop inside another loop",
    "answer_hi": "एक लूप के अंदर दूसरा लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is jump statement?",
    "question_hi": "जम्प स्टेटमेंट क्या है?",
    "options_en": ["Transfers control to another part", "Condition", "Loop", "Expression"],
    "options_hi": ["कंट्रोल दूसरे हिस्से में ट्रांसफर करता है", "कंडीशन", "लूप", "एक्सप्रेशन"],
    "answer_en": "Transfers control to another part",
    "answer_hi": "कंट्रोल दूसरे हिस्से में ट्रांसफर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "Examples of jump statements?",
    "question_hi": "जम्प स्टेटमेंट्स के उदाहरण?",
    "options_en": ["break, continue, goto", "if, else", "for, while", "int, float"],
    "options_hi": ["break, continue, goto", "if, else", "for, while", "int, float"],
    "answer_en": "break, continue, goto",
    "answer_hi": "break, continue, goto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What does goto do?",
    "question_hi": "goto क्या करता है?",
    "options_en": ["Jumps to labeled statement", "Breaks loop", "Continues loop", "Returns value"],
    "options_hi": ["लेबल्ड स्टेटमेंट पर जम्प करता है", "लूप ब्रेक करता है", "लूप कंटिन्यू करता है", "वैल्यू रिटर्न करता है"],
    "answer_en": "Jumps to labeled statement",
    "answer_hi": "लेबल्ड स्टेटमेंट पर जम्प करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is a label in C?",
    "question_hi": "C में लेबल क्या है?",
    "options_en": ["Identifier followed by colon", "Variable", "Function", "Comment"],
    "options_hi": ["कोलन के बाद आइडेंटिफायर", "वेरिएबल", "फंक्शन", "कमेंट"],
    "answer_en": "Identifier followed by colon",
    "answer_hi": "कोलन के बाद आइडेंटिफायर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is exit() function?",
    "question_hi": "exit() फंक्शन क्या है?",
    "options_en": ["Terminates program immediately", "Returns from function", "Breaks loop", "Continues loop"],
    "options_hi": ["तुरंत प्रोग्राम टर्मिनेट करता है", "फंक्शन से रिटर्न करता है", "लूप ब्रेक करता है", "लूप कंटिन्यू करता है"],
    "answer_en": "Terminates program immediately",
    "answer_hi": "तुरंत प्रोग्राम टर्मिनेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What header file for exit()?",
    "question_hi": "exit() के लिए कौन सी हेडर फाइल?",
    "options_en": ["stdlib.h", "stdio.h", "math.h", "conio.h"],
    "options_hi": ["stdlib.h", "stdio.h", "math.h", "conio.h"],
    "answer_en": "stdlib.h",
    "answer_hi": "stdlib.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is return statement?",
    "question_hi": "return स्टेटमेंट क्या है?",
    "options_en": ["Returns value from function", "Breaks loop", "Continues loop", "Terminates program"],
    "options_hi": ["फंक्शन से वैल्यू रिटर्न करता है", "लूप ब्रेक करता है", "लूप कंटिन्यू करता है", "प्रोग्राम टर्मिनेट करता है"],
    "answer_en": "Returns value from function",
    "answer_hi": "फंक्शन से वैल्यू रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Can a function have multiple return statements?",
    "question_hi": "क्या एक फंक्शन में मल्टीपल return स्टेटमेंट्स हो सकते हैं?",
    "options_en": ["Yes", "No", "Only 2", "Only 3"],
    "options_hi": ["हां", "नहीं", "केवल 2", "केवल 3"],
    "answer_en": "Yes",
    "answer_hi": "हां",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is function overloading?",
    "question_hi": "फंक्शन ओवरलोडिंग क्या है?",
    "options_en": ["Not supported in C", "Multiple functions with same name", "Single function", "Library function"],
    "options_hi": ["C में सपोर्ट नहीं", "समान नाम के मल्टीपल फंक्शन्स", "सिंगल फंक्शन", "लाइब्रेरी फंक्शन"],
    "answer_en": "Not supported in C",
    "answer_hi": "C में सपोर्ट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is default argument?",
    "question_hi": "डिफॉल्ट आर्ग्युमेंट क्या है?",
    "options_en": ["Not supported in C", "Default value for parameter", "Required argument", "No argument"],
    "options_hi": ["C में सपोर्ट नहीं", "पैरामीटर के लिए डिफॉल्ट वैल्यू", "आवश्यक आर्ग्युमेंट", "कोई आर्ग्युमेंट नहीं"],
    "answer_en": "Not supported in C",
    "answer_hi": "C में सपोर्ट नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is function pointer?",
    "question_hi": "फंक्शन पॉइंटर क्या है?",
    "options_en": ["Pointer that points to function", "Pointer to variable", "Function", "Variable"],
    "options_hi": ["पॉइंटर जो फंक्शन की ओर इशारा करता है", "वेरिएबल का पॉइंटर", "फंक्शन", "वेरिएबल"],
    "answer_en": "Pointer that points to function",
    "answer_hi": "पॉइंटर जो फंक्शन की ओर इशारा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is callback function?",
    "question_hi": "कॉलबैक फंक्शन क्या है?",
    "options_en": ["Function passed as argument", "Main function", "Library function", "Recursive function"],
    "options_hi": ["फंक्शन जो आर्ग्युमेंट के रूप में पास होता है", "मेन फंक्शन", "लाइब्रेरी फंक्शन", "रिकर्सिव फंक्शन"],
    "answer_en": "Function passed as argument",
    "answer_hi": "फंक्शन जो आर्ग्युमेंट के रूप में पास होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is inline function?",
    "question_hi": "इनलाइन फंक्शन क्या है?",
    "options_en": ["Not in standard C (C++ feature)", "Normal function", "Library function", "Recursive function"],
    "options_hi": ["स्टैंडर्ड C में नहीं (C++ फीचर)", "नॉर्मल फंक्शन", "लाइब्रेरी फंक्शन", "रिकर्सिव फंक्शन"],
    "answer_en": "Not in standard C (C++ feature)",
    "answer_hi": "स्टैंडर्ड C में नहीं (C++ फीचर)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is variable length argument?",
    "question_hi": "वेरिएबल लेंथ आर्ग्युमेंट क्या है?",
    "options_en": ["Variable number of arguments", "Fixed arguments", "No arguments", "Default arguments"],
    "options_hi": ["आर्ग्युमेंट्स की वेरिएबल संख्या", "फिक्स्ड आर्ग्युमेंट्स", "कोई आर्ग्युमेंट नहीं", "डिफॉल्ट आर्ग्युमेंट्स"],
    "answer_en": "Variable number of arguments",
    "answer_hi": "आर्ग्युमेंट्स की वेरिएबल संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "Which function uses variable arguments?",
    "question_hi": "कौन सा फंक्शन वेरिएबल आर्ग्युमेंट्स का उपयोग करता है?",
    "options_en": ["printf()", "main()", "sqrt()", "strlen()"],
    "options_hi": ["printf()", "main()", "sqrt()", "strlen()"],
    "answer_en": "printf()",
    "answer_hi": "printf()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is va_list?",
    "question_hi": "va_list क्या है?",
    "options_en": ["Type for variable arguments", "Variable", "Function", "Operator"],
    "options_hi": ["वेरिएबल आर्ग्युमेंट्स के लिए टाइप", "वेरिएबल", "फंक्शन", "ऑपरेटर"],
    "answer_en": "Type for variable arguments",
    "answer_hi": "वेरिएबल आर्ग्युमेंट्स के लिए टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Header file for variable arguments?",
    "question_hi": "वेरिएबल आर्ग्युमेंट्स के लिए हेडर फाइल?",
    "options_en": ["stdarg.h", "stdio.h", "stdlib.h", "varargs.h"],
    "options_hi": ["stdarg.h", "stdio.h", "stdlib.h", "varargs.h"],
    "answer_en": "stdarg.h",
    "answer_hi": "stdarg.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is command line argument?",
    "question_hi": "कमांड लाइन आर्ग्युमेंट क्या है?",
    "options_en": ["Arguments passed to program from command line", "Function arguments", "Variable arguments", "No arguments"],
    "options_hi": ["कमांड लाइन से प्रोग्राम को पास किए गए आर्ग्युमेंट्स", "फंक्शन आर्ग्युमेंट्स", "वेरिएबल आर्ग्युमेंट्स", "कोई आर्ग्युमेंट नहीं"],
    "answer_en": "Arguments passed to program from command line",
    "answer_hi": "कमांड लाइन से प्रोग्राम को पास किए गए आर्ग्युमेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "Parameters of main() for command line arguments?",
    "question_hi": "कमांड लाइन आर्ग्युमेंट्स के लिए main() के पैरामीटर्स?",
    "options_en": ["int argc, char *argv[]", "void", "int only", "char only"],
    "options_hi": ["int argc, char *argv[]", "void", "int केवल", "char केवल"],
    "answer_en": "int argc, char *argv[]",
    "answer_hi": "int argc, char *argv[]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does argc represent?",
    "question_hi": "argc क्या प्रतिनिधित्व करता है?",
    "options_en": ["Argument count", "Argument values", "Argument type", "Argument size"],
    "options_hi": ["आर्ग्युमेंट काउंट", "आर्ग्युमेंट वैल्यूज", "आर्ग्युमेंट टाइप", "आर्ग्युमेंट साइज"],
    "answer_en": "Argument count",
    "answer_hi": "आर्ग्युमेंट काउंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What does argv represent?",
    "question_hi": "argv क्या प्रतिनिधित्व करता है?",
    "options_en": ["Array of argument strings", "Argument count", "Return value", "Function name"],
    "options_hi": ["आर्ग्युमेंट स्ट्रिंग्स की एरे", "आर्ग्युमेंट काउंट", "रिटर्न वैल्यू", "फंक्शन नाम"],
    "answer_en": "Array of argument strings",
    "answer_hi": "आर्ग्युमेंट स्ट्रिंग्स की एरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is argv[0]?",
    "question_hi": "argv[0] क्या है?",
    "options_en": ["Program name", "First argument", "Argument count", "Last argument"],
    "options_hi": ["प्रोग्राम नाम", "पहला आर्ग्युमेंट", "आर्ग्युमेंट काउंट", "आखिरी आर्ग्युमेंट"],
    "answer_en": "Program name",
    "answer_hi": "प्रोग्राम नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is array indexing?",
    "question_hi": "एरे इंडेक्सिंग क्या है?",
    "options_en": ["Accessing array elements using index", "Declaring array", "Initializing array", "Creating array"],
    "options_hi": ["इंडेक्स का उपयोग कर एरे एलिमेंट्स एक्सेस करना", "एरे डिक्लेयर करना", "एरे इनिशियलाइज़ करना", "एरे बनाना"],
    "answer_en": "Accessing array elements using index",
    "answer_hi": "इंडेक्स का उपयोग कर एरे एलिमेंट्स एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is array initialization?",
    "question_hi": "एरे इनिशियलाइज़ेशन क्या है?",
    "options_en": ["Assigning initial values to array", "Declaring array", "Accessing array", "Printing array"],
    "options_hi": ["एरे को प्रारंभिक मान देना", "एरे डिक्लेयर करना", "एरे एक्सेस करना", "एरे प्रिंट करना"],
    "answer_en": "Assigning initial values to array",
    "answer_hi": "एरे को प्रारंभिक मान देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "How to initialize all array elements to 0?",
    "question_hi": "सभी एरे एलिमेंट्स को 0 से कैसे इनिशियलाइज़ करें?",
    "options_en": ["int arr[5] = {0};", "int arr[5] = 0;", "arr[5] = {0};", "arr = 0;"],
    "options_hi": ["int arr[5] = {0};", "int arr[5] = 0;", "arr[5] = {0};", "arr = 0;"],
    "answer_en": "int arr[5] = {0};",
    "answer_hi": "int arr[5] = {0};",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is multidimensional array?",
    "question_hi": "मल्टीडायमेंशनल एरे क्या है?",
    "options_en": ["Array with more than one dimension", "1D array", "Single variable", "Function"],
    "options_hi": ["एक से अधिक डायमेंशन वाली एरे", "1D एरे", "सिंगल वेरिएबल", "फंक्शन"],
    "answer_en": "Array with more than one dimension",
    "answer_hi": "एक से अधिक डायमेंशन वाली एरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "Example of 2D array declaration?",
    "question_hi": "2D एरे डिक्लेरेशन का उदाहरण?",
    "options_en": ["int arr[3][4];", "int arr[3,4];", "int arr(3,4);", "2d arr[3][4];"],
    "options_hi": ["int arr[3][4];", "int arr[3,4];", "int arr(3,4);", "2d arr[3][4];"],
    "answer_en": "int arr[3][4];",
    "answer_hi": "int arr[3][4];",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is array bound checking?",
    "question_hi": "एरे बाउंड चेकिंग क्या है?",
    "options_en": ["Not done by C compiler", "Checking if index is within bounds", "Initializing array", "Declaring array"],
    "options_hi": ["C कंपाइलर द्वारा नहीं किया जाता", "चेक करना कि इंडेक्स बाउंड्स के अंदर है", "एरे इनिशियलाइज़ करना", "एरे डिक्लेयर करना"],
    "answer_en": "Not done by C compiler",
    "answer_hi": "C कंपाइलर द्वारा नहीं किया जाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is array out of bounds?",
    "question_hi": "एरे आउट ऑफ बाउंड्स क्या है?",
    "options_en": ["Accessing beyond array size", "Within array", "Initializing", "Declaring"],
    "options_hi": ["एरे साइज से बाहर एक्सेस करना", "एरे के अंदर", "इनिशियलाइज़ करना", "डिक्लेयर करना"],
    "answer_en": "Accessing beyond array size",
    "answer_hi": "एरे साइज से बाहर एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is string literal?",
    "question_hi": "स्ट्रिंग लिटरल क्या है?",
    "options_en": ["Sequence of characters in double quotes", "Single character", "Number", "Array"],
    "options_hi": ["डबल कोट्स में कैरेक्टर्स का सीक्वेंस", "सिंगल कैरेक्टर", "नंबर", "एरे"],
    "answer_en": "Sequence of characters in double quotes",
    "answer_hi": "डबल कोट्स में कैरेक्टर्स का सीक्वेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is character array?",
    "question_hi": "कैरेक्टर एरे क्या है?",
    "options_en": ["Array of characters", "Array of integers", "Array of floats", "Single character"],
    "options_hi": ["कैरेक्टर्स की एरे", "इंटीजर्स की एरे", "फ्लोट्स की एरे", "सिंगल कैरेक्टर"],
    "answer_en": "Array of characters",
    "answer_hi": "कैरेक्टर्स की एरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is the difference between 'A' and \"A\"?",
    "question_hi": "'A' और \"A\" में क्या अंतर है?",
    "options_en": ["'A' is character, \"A\" is string", "Both are same", "Both are characters", "Both are strings"],
    "options_hi": ["'A' कैरेक्टर है, \"A\" स्ट्रिंग है", "दोनों समान हैं", "दोनों कैरेक्टर हैं", "दोनों स्ट्रिंग हैं"],
    "answer_en": "'A' is character, \"A\" is string",
    "answer_hi": "'A' कैरेक्टर है, \"A\" स्ट्रिंग है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is gets() function?",
    "question_hi": "gets() फंक्शन क्या है?",
    "options_en": ["Reads string from stdin (unsafe)", "Reads character", "Writes string", "Reads integer"],
    "options_hi": ["stdin से स्ट्रिंग पढ़ता है (असुरक्षित)", "कैरेक्टर पढ़ता है", "स्ट्रिंग लिखता है", "इंटीजर पढ़ता है"],
    "answer_en": "Reads string from stdin (unsafe)",
    "answer_hi": "stdin से स्ट्रिंग पढ़ता है (असुरक्षित)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "Why is gets() dangerous?",
    "question_hi": "gets() खतरनाक क्यों है?",
    "options_en": ["Can cause buffer overflow", "Too slow", "Doesn't work", "Too fast"],
    "options_hi": ["बफर ओवरफ्लो कर सकता है", "बहुत धीमा", "काम नहीं करता", "बहुत तेज"],
    "answer_en": "Can cause buffer overflow",
    "answer_hi": "बफर ओवरफ्लो कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is fgets()?",
    "question_hi": "fgets() क्या है?",
    "options_en": ["Safe alternative to gets()", "Same as gets()", "For files only", "For integers"],
    "options_hi": ["gets() का सुरक्षित विकल्प", "gets() के समान", "केवल फाइल्स के लिए", "इंटीजर्स के लिए"],
    "answer_en": "Safe alternative to gets()",
    "answer_hi": "gets() का सुरक्षित विकल्प",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is puts() function?",
    "question_hi": "puts() फंक्शन क्या है?",
    "options_en": ["Writes string to stdout", "Reads string", "Writes character", "Reads character"],
    "options_hi": ["stdout पर स्ट्रिंग लिखता है", "स्ट्रिंग पढ़ता है", "कैरेक्टर लिखता है", "कैरेक्टर पढ़ता है"],
    "answer_en": "Writes string to stdout",
    "answer_hi": "stdout पर स्ट्रिंग लिखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "Difference between puts() and printf()?",
    "question_hi": "puts() और printf() में क्या अंतर है?",
    "options_en": ["puts() adds newline automatically", "printf() adds newline", "No difference", "Both same"],
    "options_hi": ["puts() ऑटोमैटिक न्यूलाइन जोड़ता है", "printf() न्यूलाइन जोड़ता है", "कोई अंतर नहीं", "दोनों समान"],
    "answer_en": "puts() adds newline automatically",
    "answer_hi": "puts() ऑटोमैटिक न्यूलाइन जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is string.h header file?",
    "question_hi": "string.h हेडर फाइल क्या है?",
    "options_en": ["Contains string manipulation functions", "Contains math functions", "Contains I/O functions", "Contains memory functions"],
    "options_hi": ["स्ट्रिंग मैनीपुलेशन फंक्शन्स रखता है", "मैथ फंक्शन्स रखता है", "I/O फंक्शन्स रखता है", "मेमोरी फंक्शन्स रखता है"],
    "answer_en": "Contains string manipulation functions",
    "answer_hi": "स्ट्रिंग मैनीपुलेशन फंक्शन्स रखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is strlen()?",
    "question_hi": "strlen() क्या है?",
    "options_en": ["Returns length of string", "Copies string", "Compares strings", "Concatenates strings"],
    "options_hi": ["स्ट्रिंग की लंबाई रिटर्न करता है", "स्ट्रिंग कॉपी करता है", "स्ट्रिंग्स की तुलना करता है", "स्ट्रिंग्स जोड़ता है"],
    "answer_en": "Returns length of string",
    "answer_hi": "स्ट्रिंग की लंबाई रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is strcpy()?",
    "question_hi": "strcpy() क्या है?",
    "options_en": ["Copies string", "Compares string", "Finds length", "Concatenates"],
    "options_hi": ["स्ट्रिंग कॉपी करता है", "स्ट्रिंग की तुलना करता है", "लंबाई ढूंढता है", "जोड़ता है"],
    "answer_en": "Copies string",
    "answer_hi": "स्ट्रिंग कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is strcmp()?",
    "question_hi": "strcmp() क्या है?",
    "options_en": ["Compares two strings", "Copies string", "Finds length", "Concatenates"],
    "options_hi": ["दो स्ट्रिंग्स की तुलना करता है", "स्ट्रिंग कॉपी करता है", "लंबाई ढूंढता है", "जोड़ता है"],
    "answer_en": "Compares two strings",
    "answer_hi": "दो स्ट्रिंग्स की तुलना करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is strcat()?",
    "question_hi": "strcat() क्या है?",
    "options_en": ["Concatenates two strings", "Compares strings", "Copies string", "Finds length"],
    "options_hi": ["दो स्ट्रिंग्स जोड़ता है", "स्ट्रिंग्स की तुलना करता है", "स्ट्रिंग कॉपी करता है", "लंबाई ढूंढता है"],
    "answer_en": "Concatenates two strings",
    "answer_hi": "दो स्ट्रिंग्स जोड़ता है",
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