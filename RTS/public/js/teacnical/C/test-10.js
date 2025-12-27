const questions = [
  {
    "num": 1,
    "question_en": "Which keyword is used to define a constant value in C?",
    "question_hi": "C में constant value define करने के लिए किस keyword का उपयोग किया जाता है?",
    "options_en": ["const", "#define", "static", "Both const and #define"],
    "options_hi": ["const", "#define", "static", "const और #define दोनों"],
    "answer_en": "Both const and #define",
    "answer_hi": "const और #define दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the size of 'int' data type in C (typically on 32-bit system)?",
    "question_hi": "C में 'int' डेटा टाइप का size (आमतौर पर 32-bit system पर) कितना होता है?",
    "options_en": ["1 byte", "2 bytes", "4 bytes", "8 bytes"],
    "options_hi": ["1 बाइट", "2 बाइट", "4 बाइट", "8 बाइट"],
    "answer_en": "4 bytes",
    "answer_hi": "4 बाइट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which of the following is NOT a valid variable name in C?",
    "question_hi": "निम्नलिखित में से C में कौन सा variable name valid नहीं है?",
    "options_en": ["_temp", "123var", "my_var", "VarName"],
    "options_hi": ["_temp", "123var", "my_var", "VarName"],
    "answer_en": "123var",
    "answer_hi": "123var",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does the 'printf()' function return?",
    "question_hi": "'printf()' फ़ंक्शन क्या return करता है?",
    "options_en": ["The printed string", "Number of characters printed", "0 always", "1 always"],
    "options_hi": ["प्रिंट की गई string", "प्रिंट किए गए characters की संख्या", "हमेशा 0", "हमेशा 1"],
    "answer_en": "Number of characters printed",
    "answer_hi": "प्रिंट किए गए characters की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which header file is required for using malloc() and free()?",
    "question_hi": "malloc() और free() का उपयोग करने के लिए किस header file की आवश्यकता होती है?",
    "options_en": ["<stdio.h>", "<stdlib.h>", "<conio.h>", "<malloc.h>"],
    "options_hi": ["<stdio.h>", "<stdlib.h>", "<conio.h>", "<malloc.h>"],
    "answer_en": "<stdlib.h>",
    "answer_hi": "<stdlib.h>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the default value of a local variable in C?",
    "question_hi": "C में local variable का default value क्या होता है?",
    "options_en": ["0", "NULL", "Garbage value", "1"],
    "options_hi": ["0", "NULL", "गार्बेज वैल्यू", "1"],
    "answer_en": "Garbage value",
    "answer_hi": "गार्बेज वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which operator is used to access structure members?",
    "question_hi": "structure members तक पहुँचने के लिए किस operator का उपयोग किया जाता है?",
    "options_en": [". (dot)", "-> (arrow)", "Both . and ->", "::"],
    "options_hi": [". (dot)", "-> (arrow)", ". और -> दोनों", "::"],
    "answer_en": "Both . and ->",
    "answer_hi": ". और -> दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the entry point of a C program?",
    "question_hi": "C प्रोग्राम का entry point क्या होता है?",
    "options_en": ["void start()", "int begin()", "int main()", "void program()"],
    "options_hi": ["void start()", "int begin()", "int main()", "void program()"],
    "answer_en": "int main()",
    "answer_hi": "int main()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which loop executes at least once even if condition is false?",
    "question_hi": "कौन सा लूप condition false होने पर भी कम से कम एक बार जरूर execute होता है?",
    "options_en": ["for loop", "while loop", "do-while loop", "All loops"],
    "options_hi": ["for लूप", "while लूप", "do-while लूप", "सभी लूप"],
    "answer_en": "do-while loop",
    "answer_hi": "do-while लूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'break' statement do in a switch case?",
    "question_hi": "switch case में 'break' statement क्या करता है?",
    "options_en": ["Terminates program", "Exits loop", "Exits switch case", "Continues next case"],
    "options_hi": ["प्रोग्राम terminate करता है", "लूप से बाहर निकलता है", "switch case से बाहर निकलता है", "अगला case continue करता है"],
    "answer_en": "Exits switch case",
    "answer_hi": "switch case से बाहर निकलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which is the correct way to declare a pointer?",
    "question_hi": "पॉइंटर declare करने का सही तरीका कौन सा है?",
    "options_en": ["int ptr*;", "*int ptr;", "int *ptr;", "pointer int ptr;"],
    "options_hi": ["int ptr*;", "*int ptr;", "int *ptr;", "pointer int ptr;"],
    "answer_en": "int *ptr;",
    "answer_hi": "int *ptr;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the output of: sizeof('A') in C?",
    "question_hi": "C में: sizeof('A') का आउटपुट क्या होगा?",
    "options_en": ["1", "2", "4", "Depends on compiler"],
    "options_hi": ["1", "2", "4", "कंपाइलर पर निर्भर"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which is used to allocate memory dynamically for an array?",
    "question_hi": "array के लिए डायनामिक memory allocate करने के लिए किसका उपयोग होता है?",
    "options_en": ["malloc()", "calloc()", "Both malloc() and calloc()", "new"],
    "options_hi": ["malloc()", "calloc()", "malloc() और calloc() दोनों", "new"],
    "answer_en": "Both malloc() and calloc()",
    "answer_hi": "malloc() और calloc() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is a function prototype?",
    "question_hi": "function prototype क्या होता है?",
    "options_en": ["Function definition", "Function declaration", "Function call", "Function body"],
    "options_hi": ["फ़ंक्शन definition", "फ़ंक्शन declaration", "फ़ंक्शन call", "फ़ंक्शन body"],
    "answer_en": "Function declaration",
    "answer_hi": "फ़ंक्शन declaration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What does the 'continue' statement do in a loop?",
    "question_hi": "लूप में 'continue' statement क्या करता है?",
    "options_en": ["Exits loop", "Skips current iteration", "Restarts loop", "Pauses loop"],
    "options_hi": ["लूप से बाहर निकलता है", "वर्तमान iteration को skip करता है", "लूप restart करता है", "लूप pause करता है"],
    "answer_en": "Skips current iteration",
    "answer_hi": "वर्तमान iteration को skip करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "Which is NOT a storage class specifier in C?",
    "question_hi": "C में कौन सा storage class specifier नहीं है?",
    "options_en": ["auto", "register", "extern", "local"],
    "options_hi": ["auto", "register", "extern", "local"],
    "answer_en": "local",
    "answer_hi": "local",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the correct syntax for an if-else statement?",
    "question_hi": "if-else statement का सही syntax कौन सा है?",
    "options_en": ["if(condition) {} else {}", "if condition {} else {}", "if(condition) {} otherwise {}", "if[condition] {} else {}"],
    "options_hi": ["if(condition) {} else {}", "if condition {} else {}", "if(condition) {} otherwise {}", "if[condition] {} else {}"],
    "answer_en": "if(condition) {} else {}",
    "answer_hi": "if(condition) {} else {}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does NULL represent in C?",
    "question_hi": "C में NULL क्या represent करता है?",
    "options_en": ["Value 0", "Pointer that points to nothing", "Empty string", "Both value 0 and null pointer"],
    "options_hi": ["वैल्यू 0", "ऐसा पॉइंटर जो किसी चीज़ को point नहीं करता", "खाली string", "वैल्यू 0 और null pointer दोनों"],
    "answer_en": "Both value 0 and null pointer",
    "answer_hi": "वैल्यू 0 और null pointer दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which format specifier is used for float in printf?",
    "question_hi": "printf में float के लिए किस format specifier का उपयोग किया जाता है?",
    "options_en": ["%f", "%d", "%c", "%lf"],
    "options_hi": ["%f", "%d", "%c", "%lf"],
    "answer_en": "%f",
    "answer_hi": "%f",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of 'return 0;' in main()?",
    "question_hi": "main() में 'return 0;' का उद्देश्य क्या है?",
    "options_en": ["Indicates program failure", "Indicates program success", "Returns 0 to OS", "Both indicates success and returns 0 to OS"],
    "options_hi": ["प्रोग्राम failure दर्शाता है", "प्रोग्राम success दर्शाता है", "OS को 0 return करता है", "success दर्शाता है और OS को 0 return करता है दोनों"],
    "answer_en": "Both indicates success and returns 0 to OS",
    "answer_hi": "success दर्शाता है और OS को 0 return करता है दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which operator has the highest precedence in C?",
    "question_hi": "C में किस operator की precedence सबसे अधिक होती है?",
    "options_en": ["* (multiplication)", "() parentheses", "++ increment", "= assignment"],
    "options_hi": ["* (गुणा)", "() कोष्ठक", "++ इंक्रीमेंट", "= असाइनमेंट"],
    "answer_en": "() parentheses",
    "answer_hi": "() कोष्ठक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the output of: printf(\"%d\", 5 + 2 * 3);",
    "question_hi": "printf(\"%d\", 5 + 2 * 3); का आउटपुट क्या होगा?",
    "options_en": ["11", "21", "17", "15"],
    "options_hi": ["11", "21", "17", "15"],
    "answer_en": "11",
    "answer_hi": "11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which is the correct way to comment a single line in C?",
    "question_hi": "C में single line comment करने का सही तरीका कौन सा है?",
    "options_en": ["// comment", "/* comment */", "# comment", "-- comment"],
    "options_hi": ["// comment", "/* comment */", "# comment", "-- comment"],
    "answer_en": "// comment",
    "answer_hi": "// comment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the range of values for 'char' data type?",
    "question_hi": "'char' डेटा टाइप के values की range क्या होती है?",
    "options_en": ["0 to 255", "-128 to 127", "0 to 65535", "-32768 to 32767"],
    "options_hi": ["0 से 255", "-128 से 127", "0 से 65535", "-32768 से 32767"],
    "answer_en": "-128 to 127",
    "answer_hi": "-128 से 127",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What does the '&' operator do when used with variables?",
    "question_hi": "variables के साथ उपयोग किए जाने पर '&' operator क्या करता है?",
    "options_en": ["Logical AND", "Bitwise AND", "Address of variable", "Reference operator"],
    "options_hi": ["लॉजिकल AND", "बिटवाइज AND", "वेरिएबल का एड्रेस", "रेफरेंस ऑपरेटर"],
    "answer_en": "Address of variable",
    "answer_hi": "वेरिएबल का एड्रेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Which function is used to read a string from standard input?",
    "question_hi": "standard input से string read करने के लिए किस function का उपयोग किया जाता है?",
    "options_en": ["scanf()", "gets()", "fgets()", "All of these"],
    "options_hi": ["scanf()", "gets()", "fgets()", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the purpose of 'void' keyword in function declaration?",
    "question_hi": "function declaration में 'void' keyword का उद्देश्य क्या है?",
    "options_en": ["Function returns nothing", "Function takes no parameters", "Both A and B", "Function returns any type"],
    "options_hi": ["फ़ंक्शन कुछ return नहीं करता", "फ़ंक्शन कोई parameters नहीं लेता", "A और B दोनों", "फ़ंक्शन किसी भी type को return कर सकता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is an array in C?",
    "question_hi": "C में array क्या होता है?",
    "options_en": ["Collection of same data type", "Collection of different data types", "A function", "A pointer"],
    "options_hi": ["समान डेटा टाइप का collection", "अलग-अलग डेटा टाइप्स का collection", "एक function", "एक pointer"],
    "answer_en": "Collection of same data type",
    "answer_hi": "समान डेटा टाइप का collection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the index of first element in an array?",
    "question_hi": "array में पहले element का index क्या होता है?",
    "options_en": ["0", "1", "-1", "Depends on declaration"],
    "options_hi": ["0", "1", "-1", "declaration पर निर्भर"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "Which statement is used to jump out of a loop prematurely?",
    "question_hi": "लूप से समय से पहले बाहर निकलने के लिए किस statement का उपयोग किया जाता है?",
    "options_en": ["continue", "break", "goto", "Both break and goto"],
    "options_hi": ["continue", "break", "goto", "break और goto दोनों"],
    "answer_en": "Both break and goto",
    "answer_hi": "break और goto दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What does the 'static' keyword do for a local variable?",
    "question_hi": "local variable के लिए 'static' keyword क्या करता है?",
    "options_en": ["Makes it global", "Preserves value between function calls", "Makes it constant", "Allocates in heap"],
    "options_hi": ["इसे global बनाता है", "function calls के बीच value preserve करता है", "इसे constant बनाता है", "heap में allocate करता है"],
    "answer_en": "Preserves value between function calls",
    "answer_hi": "function calls के बीच value preserve करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is a pointer?",
    "question_hi": "pointer क्या होता है?",
    "options_en": ["Variable that stores address", "Variable that stores value", "Function type", "Array type"],
    "options_hi": ["एड्रेस store करने वाला variable", "वैल्यू store करने वाला variable", "function टाइप", "array टाइप"],
    "answer_en": "Variable that stores address",
    "answer_hi": "एड्रेस store करने वाला variable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output of: int x = 5; printf(\"%d\", x++);",
    "question_hi": "int x = 5; printf(\"%d\", x++); का आउटपुट क्या होगा?",
    "options_en": ["5", "6", "0", "Error"],
    "options_hi": ["5", "6", "0", "Error"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "Which header file is needed for mathematical functions like sqrt()?",
    "question_hi": "sqrt() जैसे mathematical functions के लिए किस header file की आवश्यकता होती है?",
    "options_en": ["<math.h>", "<stdio.h>", "<stdlib.h>", "<conio.h>"],
    "options_hi": ["<math.h>", "<stdio.h>", "<stdlib.h>", "<conio.h>"],
    "answer_en": "<math.h>",
    "answer_hi": "<math.h>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the ternary operator in C?",
    "question_hi": "C में ternary operator कौन सा है?",
    "options_en": ["?:", "??", "::", "!!"],
    "options_hi": ["?:", "??", "::", "!!"],
    "answer_en": "?:",
    "answer_hi": "?:",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of 'typedef' keyword?",
    "question_hi": "'typedef' keyword का उद्देश्य क्या है?",
    "options_en": ["Define new data type", "Define variable", "Define function", "Define constant"],
    "options_hi": ["नया डेटा टाइप define करना", "variable define करना", "function define करना", "constant define करना"],
    "answer_en": "Define new data type",
    "answer_hi": "नया डेटा टाइप define करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is recursion?",
    "question_hi": "recursion क्या होता है?",
    "options_en": ["Function calling itself", "Infinite loop", "Nested if", "Multiple functions"],
    "options_hi": ["function का खुद को call करना", "infinite loop", "nested if", "multiple functions"],
    "answer_en": "Function calling itself",
    "answer_hi": "function का खुद को call करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the difference between '==' and '='?",
    "question_hi": "'==' और '=' में क्या अंतर है?",
    "options_en": ["== is comparison, = is assignment", "== is assignment, = is comparison", "Both are same", "Both are logical operators"],
    "options_hi": ["== comparison है, = assignment है", "== assignment है, = comparison है", "दोनों समान हैं", "दोनों logical operators हैं"],
    "answer_en": "== is comparison, = is assignment",
    "answer_hi": "== comparison है, = assignment है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What does 'calloc()' initialize memory to?",
    "question_hi": "'calloc()' memory को किस value से initialize करता है?",
    "options_en": ["0", "1", "Garbage value", "NULL"],
    "options_hi": ["0", "1", "गार्बेज वैल्यू", "NULL"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is a structure in C?",
    "question_hi": "C में structure क्या होता है?",
    "options_en": ["User-defined data type", "Built-in data type", "Function type", "Array type"],
    "options_hi": ["यूजर-डिफाइंड डेटा टाइप", "बिल्ट-इन डेटा टाइप", "function टाइप", "array टाइप"],
    "answer_en": "User-defined data type",
    "answer_hi": "यूजर-डिफाइंड डेटा टाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which operator is used for pointer dereferencing?",
    "question_hi": "pointer dereferencing के लिए किस operator का उपयोग किया जाता है?",
    "options_en": ["&", "*", "->", "."],
    "options_hi": ["&", "*", "->", "."],
    "answer_en": "*",
    "answer_hi": "*",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the purpose of 'sizeof' operator?",
    "question_hi": "'sizeof' operator का उद्देश्य क्या है?",
    "options_en": ["Returns size in bytes", "Returns value", "Allocates memory", "Frees memory"],
    "options_hi": ["बाइट्स में size return करता है", "वैल्यू return करता है", "memory allocate करता है", "memory free करता है"],
    "answer_en": "Returns size in bytes",
    "answer_hi": "बाइट्स में size return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the output of: printf(\"Hello\\nWorld\");",
    "question_hi": "printf(\"Hello\\nWorld\"); का आउटपुट क्या होगा?",
    "options_en": ["Hello\\nWorld", "Hello World", "Hello (newline) World", "Error"],
    "options_hi": ["Hello\\nWorld", "Hello World", "Hello (नई लाइन) World", "Error"],
    "answer_en": "Hello (newline) World",
    "answer_hi": "Hello (नई लाइन) World",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "Which is the correct way to compare two strings?",
    "question_hi": "दो strings compare करने का सही तरीका कौन सा है?",
    "options_en": ["str1 == str2", "strcmp(str1, str2)", "str1.equals(str2)", "str1 === str2"],
    "options_hi": ["str1 == str2", "strcmp(str1, str2)", "str1.equals(str2)", "str1 === str2"],
    "answer_en": "strcmp(str1, str2)",
    "answer_hi": "strcmp(str1, str2)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the scope of a global variable?",
    "question_hi": "global variable का scope क्या होता है?",
    "options_en": ["Only in main()", "Only in one function", "Entire program", "Only in one file"],
    "options_hi": ["केवल main() में", "केवल एक function में", "पूरे program में", "केवल एक file में"],
    "answer_en": "Entire program",
    "answer_hi": "पूरे program में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the '++' operator do?",
    "question_hi": "'++' operator क्या करता है?",
    "options_en": ["Increments by 1", "Decrements by 1", "Multiplies by 2", "Adds 10"],
    "options_hi": ["1 से बढ़ाता है", "1 से घटाता है", "2 से गुणा करता है", "10 जोड़ता है"],
    "answer_en": "Increments by 1",
    "answer_hi": "1 से बढ़ाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which is NOT a valid loop in C?",
    "question_hi": "C में कौन सा valid loop नहीं है?",
    "options_en": ["for", "while", "do-while", "foreach"],
    "options_hi": ["for", "while", "do-while", "foreach"],
    "answer_en": "foreach",
    "answer_hi": "foreach",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the default return type of a function if not specified?",
    "question_hi": "यदि specify न किया जाए तो function का default return type क्या होता है?",
    "options_en": ["void", "int", "char", "float"],
    "options_hi": ["void", "int", "char", "float"],
    "answer_en": "int",
    "answer_hi": "int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is a function argument?",
    "question_hi": "function argument क्या होता है?",
    "options_en": ["Value passed to function", "Value returned by function", "Function name", "Function type"],
    "options_hi": ["function को pass किया गया value", "function द्वारा return किया गया value", "function का नाम", "function का टाइप"],
    "answer_en": "Value passed to function",
    "answer_hi": "function को pass किया गया value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does 'strlen()' function return?",
    "question_hi": "'strlen()' function क्या return करता है?",
    "options_en": ["Length of string", "Copy of string", "Compare strings", "Concatenate strings"],
    "options_hi": ["string की length", "string की copy", "strings compare करना", "strings concatenate करना"],
    "answer_en": "Length of string",
    "answer_hi": "string की length",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Which is the logical NOT operator?",
    "question_hi": "logical NOT operator कौन सा है?",
    "options_en": ["!", "&&", "||", "~"],
    "options_hi": ["!", "&&", "||", "~"],
    "answer_en": "!",
    "answer_hi": "!",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is the output of: 10 % 3?",
    "question_hi": "10 % 3 का आउटपुट क्या होगा?",
    "options_en": ["1", "3", "0", "10"],
    "options_hi": ["1", "3", "0", "10"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is a constant in C?",
    "question_hi": "C में constant क्या होता है?",
    "options_en": ["Value that cannot change", "Value that can change", "Variable", "Function"],
    "options_hi": ["वह value जो change नहीं हो सकती", "वह value जो change हो सकती है", "variable", "function"],
    "answer_en": "Value that cannot change",
    "answer_hi": "वह value जो change नहीं हो सकती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "Which is used to handle multiple conditions?",
    "question_hi": "multiple conditions handle करने के लिए किसका उपयोग किया जाता है?",
    "options_en": ["if-else", "switch", "Both if-else and switch", "for loop"],
    "options_hi": ["if-else", "switch", "if-else और switch दोनों", "for loop"],
    "answer_en": "Both if-else and switch",
    "answer_hi": "if-else और switch दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the purpose of 'case' in switch statement?",
    "question_hi": "switch statement में 'case' का उद्देश्य क्या है?",
    "options_en": ["Define condition", "Define default case", "Define specific value to match", "Define loop"],
    "options_hi": ["condition define करना", "default case define करना", "match करने के लिए specific value define करना", "loop define करना"],
    "answer_en": "Define specific value to match",
    "answer_hi": "match करने के लिए specific value define करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is the difference between 'i++' and '++i'?",
    "question_hi": "'i++' और '++i' में क्या अंतर है?",
    "options_en": ["Post-increment vs Pre-increment", "No difference", "Different operators", "i++ is faster"],
    "options_hi": ["post-increment बनाम pre-increment", "कोई अंतर नहीं", "अलग operators", "i++ faster है"],
    "answer_en": "Post-increment vs Pre-increment",
    "answer_hi": "post-increment बनाम pre-increment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What does 'void' return type mean?",
    "question_hi": "'void' return type का क्या अर्थ है?",
    "options_en": ["Function returns nothing", "Function returns integer", "Function returns character", "Function returns float"],
    "options_hi": ["function कुछ return नहीं करता", "function integer return करता है", "function character return करता है", "function float return करता है"],
    "answer_en": "Function returns nothing",
    "answer_hi": "function कुछ return नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "Which is the bitwise AND operator?",
    "question_hi": "bitwise AND operator कौन सा है?",
    "options_en": ["&", "&&", "|", "||"],
    "options_hi": ["&", "&&", "|", "||"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the purpose of 'default' in switch?",
    "question_hi": "switch में 'default' का उद्देश्य क्या है?",
    "options_en": ["Executes when no case matches", "First case", "Last case", "Always executes"],
    "options_hi": ["जब कोई case match नहीं होता तब execute होता है", "पहला case", "आखिरी case", "हमेशा execute होता है"],
    "answer_en": "Executes when no case matches",
    "answer_hi": "जब कोई case match नहीं होता तब execute होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is the output of: int arr[5]; printf(\"%d\", sizeof(arr)); assuming int is 4 bytes?",
    "question_hi": "int arr[5]; printf(\"%d\", sizeof(arr)); का आउटपुट क्या होगा यदि int 4 बाइट्स है?",
    "options_en": ["4", "5", "20", "40"],
    "options_hi": ["4", "5", "20", "40"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "Which function copies one string to another?",
    "question_hi": "कौन सा function एक string को दूसरी string में copy करता है?",
    "options_en": ["strcpy()", "strcat()", "strcmp()", "strlen()"],
    "options_hi": ["strcpy()", "strcat()", "strcmp()", "strlen()"],
    "answer_en": "strcpy()",
    "answer_hi": "strcpy()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is the output of: printf(\"%c\", 65);",
    "question_hi": "printf(\"%c\", 65); का आउटपुट क्या होगा?",
    "options_en": ["A", "65", "Error", "a"],
    "options_hi": ["A", "65", "Error", "a"],
    "answer_en": "A",
    "answer_hi": "A",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is a 2D array?",
    "question_hi": "2D array क्या होता है?",
    "options_en": ["Array of arrays", "Single array", "Pointer array", "Function array"],
    "options_hi": ["arrays का array", "single array", "pointer array", "function array"],
    "answer_en": "Array of arrays",
    "answer_hi": "arrays का array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "Which is the correct way to declare a function?",
    "question_hi": "function declare करने का सही तरीका कौन सा है?",
    "options_en": ["return_type function_name(parameters);", "function_name return_type(parameters);", "function_name(parameters) return_type;", "(parameters) return_type function_name;"],
    "options_hi": ["return_type function_name(parameters);", "function_name return_type(parameters);", "function_name(parameters) return_type;", "(parameters) return_type function_name;"],
    "answer_en": "return_type function_name(parameters);",
    "answer_hi": "return_type function_name(parameters);",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does 'float' data type store?",
    "question_hi": "'float' डेटा टाइप क्या store करता है?",
    "options_en": ["Decimal numbers", "Integers", "Characters", "Strings"],
    "options_hi": ["दशमलव संख्याएँ", "पूर्णांक", "कैरेक्टर्स", "स्ट्रिंग्स"],
    "answer_en": "Decimal numbers",
    "answer_hi": "दशमलव संख्याएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "Which operator has lowest precedence?",
    "question_hi": "किस operator की precedence सबसे कम होती है?",
    "options_en": ["=", "==", "+", "()"],
    "options_hi": ["=", "==", "+", "()"],
    "answer_en": "=",
    "answer_hi": "=",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is a library function?",
    "question_hi": "library function क्या होता है?",
    "options_en": ["Predefined function", "User-defined function", "Main function", "Inline function"],
    "options_hi": ["पहले से defined function", "यूजर-डिफाइंड function", "main function", "inline function"],
    "answer_en": "Predefined function",
    "answer_hi": "पहले से defined function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does 'NULL' pointer represent?",
    "question_hi": "'NULL' pointer क्या represent करता है?",
    "options_en": ["Pointer not pointing to any memory", "Pointer to zero", "Invalid pointer", "All of these"],
    "options_hi": ["कोई memory point नहीं करने वाला pointer", "zero को point करने वाला pointer", "invalid pointer", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the difference between 'malloc' and 'calloc'?",
    "question_hi": "'malloc' और 'calloc' में क्या अंतर है?",
    "options_en": ["calloc initializes to 0, malloc doesn't", "malloc initializes to 0, calloc doesn't", "No difference", "calloc is faster"],
    "options_hi": ["calloc 0 से initialize करता है, malloc नहीं", "malloc 0 से initialize करता है, calloc नहीं", "कोई अंतर नहीं", "calloc faster है"],
    "answer_en": "calloc initializes to 0, malloc doesn't",
    "answer_hi": "calloc 0 से initialize करता है, malloc नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is the output of: int x = 10; printf(\"%d\", ~x);",
    "question_hi": "int x = 10; printf(\"%d\", ~x); का आउटपुट क्या होगा?",
    "options_en": ["-11", "10", "5", "0"],
    "options_hi": ["-11", "10", "5", "0"],
    "answer_en": "-11",
    "answer_hi": "-11",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is a header file?",
    "question_hi": "header file क्या होता है?",
    "options_en": ["Contains function declarations", "Contains function definitions", "Contains main()", "Contains variables only"],
    "options_hi": ["function declarations contain करता है", "function definitions contain करता है", "main() contain करता है", "केवल variables contain करता है"],
    "answer_en": "Contains function declarations",
    "answer_hi": "function declarations contain करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "Which is the escape sequence for tab?",
    "question_hi": "tab के लिए escape sequence कौन सा है?",
    "options_en": ["\\t", "\\n", "\\a", "\\b"],
    "options_hi": ["\\t", "\\n", "\\a", "\\b"],
    "answer_en": "\\t",
    "answer_hi": "\\t",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the purpose of 'volatile' keyword?",
    "question_hi": "'volatile' keyword का उद्देश्य क्या है?",
    "options_en": ["Variable may change unexpectedly", "Variable is constant", "Variable is static", "Variable is global"],
    "options_hi": ["variable अप्रत्याशित रूप से change हो सकता है", "variable constant है", "variable static है", "variable global है"],
    "answer_en": "Variable may change unexpectedly",
    "answer_hi": "variable अप्रत्याशित रूप से change हो सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is a union in C?",
    "question_hi": "C में union क्या होता है?",
    "options_en": ["Similar to structure but shares memory", "Same as structure", "Array type", "Function type"],
    "options_hi": ["structure जैसा लेकिन memory share करता है", "structure के समान", "array टाइप", "function टाइप"],
    "answer_en": "Similar to structure but shares memory",
    "answer_hi": "structure जैसा लेकिन memory share करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does 'argv' contain in main(int argc, char *argv[])?",
    "question_hi": "main(int argc, char *argv[]) में 'argv' क्या contain करता है?",
    "options_en": ["Command line arguments", "Program name", "Both program name and arguments", "Environment variables"],
    "options_hi": ["कमांड लाइन arguments", "प्रोग्राम का नाम", "प्रोग्राम नाम और arguments दोनों", "environment variables"],
    "answer_en": "Both program name and arguments",
    "answer_hi": "प्रोग्राम नाम और arguments दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "Which function converts string to integer?",
    "question_hi": "string को integer में convert करने वाला function कौन सा है?",
    "options_en": ["atoi()", "itoa()", "atof()", "strtol()"],
    "options_hi": ["atoi()", "itoa()", "atof()", "strtol()"],
    "answer_en": "atoi()",
    "answer_hi": "atoi()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the output of: printf(\"%d\", 10 > 5);",
    "question_hi": "printf(\"%d\", 10 > 5); का आउटपुट क्या होगा?",
    "options_en": ["1", "0", "10", "5"],
    "options_hi": ["1", "0", "10", "5"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is a file pointer?",
    "question_hi": "file pointer क्या होता है?",
    "options_en": ["Pointer to FILE structure", "Pointer to file name", "Pointer to data", "Pointer to function"],
    "options_hi": ["FILE structure को point करने वाला pointer", "file name को point करने वाला pointer", "डेटा को point करने वाला pointer", "function को point करने वाला pointer"],
    "answer_en": "Pointer to FILE structure",
    "answer_hi": "FILE structure को point करने वाला pointer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What does 'feof()' function check?",
    "question_hi": "'feof()' function क्या check करता है?",
    "options_en": ["End of file", "Beginning of file", "File error", "File open"],
    "options_hi": ["file का अंत", "file की शुरुआत", "file error", "file open"],
    "answer_en": "End of file",
    "answer_hi": "file का अंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is the purpose of 'rand()' function?",
    "question_hi": "'rand()' function का उद्देश्य क्या है?",
    "options_en": ["Generate random numbers", "Generate sequence", "Round numbers", "Sort numbers"],
    "options_hi": ["random numbers generate करना", "sequence generate करना", "numbers round करना", "numbers sort करना"],
    "answer_en": "Generate random numbers",
    "answer_hi": "random numbers generate करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the purpose of 'getchar()' function?",
    "question_hi": "'getchar()' function का उद्देश्य क्या है?",
    "options_en": ["Read a character from stdin", "Read a string from stdin", "Read an integer", "Read a file"],
    "options_hi": ["stdin से एक character read करना", "stdin से एक string read करना", "एक integer read करना", "एक file read करना"],
    "answer_en": "Read a character from stdin",
    "answer_hi": "stdin से एक character read करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is a preprocessor directive?",
    "question_hi": "preprocessor directive क्या होती है?",
    "options_en": ["Instruction to compiler before compilation", "Instruction during execution", "Function call", "Variable declaration"],
    "options_hi": ["compilation से पहले compiler को instruction", "execution के दौरान instruction", "function call", "variable declaration"],
    "answer_en": "Instruction to compiler before compilation",
    "answer_hi": "compilation से पहले compiler को instruction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What does '#include' do?",
    "question_hi": "'#include' क्या करता है?",
    "options_en": ["Includes header file", "Includes source file", "Includes library", "All of these"],
    "options_hi": ["header file include करता है", "source file include करता है", "library include करता है", "ये सभी"],
    "answer_en": "Includes header file",
    "answer_hi": "header file include करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is the difference between 'int main()' and 'void main()'?",
    "question_hi": "'int main()' और 'void main()' में क्या अंतर है?",
    "options_en": ["int main() returns integer, void main() returns nothing", "No difference", "void main() is standard", "int main() is deprecated"],
    "options_hi": ["int main() integer return करता है, void main() कुछ नहीं return करता", "कोई अंतर नहीं", "void main() standard है", "int main() deprecated है"],
    "answer_en": "int main() returns integer, void main() returns nothing",
    "answer_hi": "int main() integer return करता है, void main() कुछ नहीं return करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is type casting?",
    "question_hi": "type casting क्या होता है?",
    "options_en": ["Converting one data type to another", "Creating new type", "Deleting type", "Comparing types"],
    "options_hi": ["एक डेटा टाइप को दूसरे में convert करना", "नया टाइप create करना", "टाइप delete करना", "types compare करना"],
    "answer_en": "Converting one data type to another",
    "answer_hi": "एक डेटा टाइप को दूसरे में convert करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Which function is used to open a file?",
    "question_hi": "file open करने के लिए किस function का उपयोग किया जाता है?",
    "options_en": ["fopen()", "open()", "fileopen()", "openfile()"],
    "options_hi": ["fopen()", "open()", "fileopen()", "openfile()"],
    "answer_en": "fopen()",
    "answer_hi": "fopen()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What does 'strcat()' function do?",
    "question_hi": "'strcat()' function क्या करता है?",
    "options_en": ["Concatenates two strings", "Compares two strings", "Copies string", "Finds length"],
    "options_hi": ["दो strings को जोड़ता है", "दो strings compare करता है", "string copy करता है", "length ढूंढता है"],
    "answer_en": "Concatenates two strings",
    "answer_hi": "दो strings को जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is a multi-dimensional array?",
    "question_hi": "multi-dimensional array क्या होता है?",
    "options_en": ["Array with more than one dimension", "Single array", "Array of pointers", "Array of functions"],
    "options_hi": ["एक से अधिक dimension वाला array", "single array", "pointers का array", "functions का array"],
    "answer_en": "Array with more than one dimension",
    "answer_hi": "एक से अधिक dimension वाला array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the purpose of 'enum' keyword?",
    "question_hi": "'enum' keyword का उद्देश्य क्या है?",
    "options_en": ["Define enumeration type", "Define integer", "Define float", "Define string"],
    "options_hi": ["enumeration टाइप define करना", "integer define करना", "float define करना", "string define करना"],
    "answer_en": "Define enumeration type",
    "answer_hi": "enumeration टाइप define करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is the output of: printf(\"%d\", sizeof(int*)); on 32-bit system?",
    "question_hi": "32-bit system पर printf(\"%d\", sizeof(int*)); का आउटपुट क्या होगा?",
    "options_en": ["4", "8", "2", "Depends on data type"],
    "options_hi": ["4", "8", "2", "डेटा टाइप पर निर्भर"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does 'register' storage class do?",
    "question_hi": "'register' storage class क्या करता है?",
    "options_en": ["Suggests storing variable in register", "Stores in heap", "Stores in stack", "Makes variable global"],
    "options_hi": ["variable को register में store करने का सुझाव देता है", "heap में store करता है", "stack में store करता है", "variable को global बनाता है"],
    "answer_en": "Suggests storing variable in register",
    "answer_hi": "variable को register में store करने का सुझाव देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is a dangling pointer?",
    "question_hi": "dangling pointer क्या होता है?",
    "options_en": ["Pointer pointing to freed memory", "NULL pointer", "Uninitialized pointer", "Constant pointer"],
    "options_hi": ["freed memory को point करने वाला pointer", "NULL pointer", "uninitialized pointer", "constant pointer"],
    "answer_en": "Pointer pointing to freed memory",
    "answer_hi": "freed memory को point करने वाला pointer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the purpose of 'const' keyword?",
    "question_hi": "'const' keyword का उद्देश्य क्या है?",
    "options_en": ["Make variable read-only", "Make variable writable", "Make variable static", "Make variable global"],
    "options_hi": ["variable को read-only बनाना", "variable को writable बनाना", "variable को static बनाना", "variable को global बनाना"],
    "answer_en": "Make variable read-only",
    "answer_hi": "variable को read-only बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is the difference between '++i' and 'i = i + 1'?",
    "question_hi": "'++i' और 'i = i + 1' में क्या अंतर है?",
    "options_en": ["++i is more efficient", "No difference", "i = i + 1 is faster", "++i works only for integers"],
    "options_hi": ["++i अधिक efficient है", "कोई अंतर नहीं", "i = i + 1 faster है", "++i केवल integers के लिए काम करता है"],
    "answer_en": "++i is more efficient",
    "answer_hi": "++i अधिक efficient है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What does 'fclose()' function do?",
    "question_hi": "'fclose()' function क्या करता है?",
    "options_en": ["Closes a file", "Opens a file", "Reads from file", "Writes to file"],
    "options_hi": ["file बंद करता है", "file खोलता है", "file से read करता है", "file में write करता है"],
    "answer_en": "Closes a file",
    "answer_hi": "file बंद करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is a function pointer?",
    "question_hi": "function pointer क्या होता है?",
    "options_en": ["Pointer that points to function", "Pointer to variable", "Pointer to array", "Pointer to structure"],
    "options_hi": ["function को point करने वाला pointer", "variable को point करने वाला pointer", "array को point करने वाला pointer", "structure को point करने वाला pointer"],
    "answer_en": "Pointer that points to function",
    "answer_hi": "function को point करने वाला pointer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the purpose of 'goto' statement?",
    "question_hi": "'goto' statement का उद्देश्य क्या है?",
    "options_en": ["Jump to labeled statement", "Exit loop", "Exit function", "Skip iteration"],
    "options_hi": ["labeled statement पर jump करना", "loop से exit करना", "function से exit करना", "iteration skip करना"],
    "answer_en": "Jump to labeled statement",
    "answer_hi": "labeled statement पर jump करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does 'call by value' mean?",
    "question_hi": "'call by value' का क्या अर्थ है?",
    "options_en": ["Copy of value is passed", "Address is passed", "Reference is passed", "Pointer is passed"],
    "options_hi": ["value की copy pass की जाती है", "address pass किया जाता है", "reference pass किया जाता है", "pointer pass किया जाता है"],
    "answer_en": "Copy of value is passed",
    "answer_hi": "value की copy pass की जाती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the purpose of 'srand()' function?",
    "question_hi": "'srand()' function का उद्देश्य क्या है?",
    "options_en": ["Seed random number generator", "Generate random number", "Sort random numbers", "Store random numbers"],
    "options_hi": ["random number generator को seed करना", "random number generate करना", "random numbers sort करना", "random numbers store करना"],
    "answer_en": "Seed random number generator",
    "answer_hi": "random number generator को seed करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the difference between 'memcpy()' and 'strcpy()'?",
    "question_hi": "'memcpy()' और 'strcpy()' में क्या अंतर है?",
    "options_en": ["memcpy() copies any data, strcpy() copies strings only", "No difference", "strcpy() is faster", "memcpy() is for integers only"],
    "options_hi": ["memcpy() कोई भी डेटा copy करता है, strcpy() केवल strings copy करता है", "कोई अंतर नहीं", "strcpy() faster है", "memcpy() केवल integers के लिए है"],
    "answer_en": "memcpy() copies any data, strcpy() copies strings only",
    "answer_hi": "memcpy() कोई भी डेटा copy करता है, strcpy() केवल strings copy करता है",
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