const questions = [
    {
        "num": 1,
        "question_en": "What is the output type of sizeof() operator in C++?",
        "question_hi": "C++ में sizeof() ऑपरेटर का आउटपुट टाइप क्या है?",
        "options_en": ["size_t", "int", "long", "unsigned int"],
        "options_hi": ["size_t", "int", "long", "unsigned int"],
        "answer_en": "size_t",
        "answer_hi": "size_t",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 2,
        "question_en": "Which of these is a valid character literal in C++?",
        "question_hi": "निम्नलिखित में से कौन सा C++ में valid character literal है?",
        "options_en": ["'A'", "'AB'", "\"A\"", "A"],
        "options_hi": ["'A'", "'AB'", "\"A\"", "A"],
        "answer_en": "'A'",
        "answer_hi": "'A'",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 3,
        "question_en": "What is the range of values for unsigned char in C++?",
        "question_hi": "C++ में unsigned char के मानों की रेंज क्या है?",
        "options_en": ["0 to 255", "-128 to 127", "0 to 65535", "0 to 127"],
        "options_hi": ["0 से 255", "-128 से 127", "0 से 65535", "0 से 127"],
        "answer_en": "0 to 255",
        "answer_hi": "0 से 255",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 4,
        "question_en": "Which operator has the highest precedence in C++?",
        "question_hi": "C++ में किस ऑपरेटर की प्राथमिकता सबसे अधिक है?",
        "options_en": ["Scope resolution (::)", "Postfix ++", "Unary +", "Multiplication *"],
        "options_hi": ["Scope resolution (::)", "Postfix ++", "Unary +", "गुणा *"],
        "answer_en": "Scope resolution (::)",
        "answer_hi": "Scope resolution (::)",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 5,
        "question_en": "What is the value of 7 % -3 in C++?",
        "question_hi": "C++ में 7 % -3 का मान क्या है?",
        "options_en": ["1", "-1", "2", "-2"],
        "options_hi": ["1", "-1", "2", "-2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 6,
        "question_en": "Which of these is a valid floating-point literal?",
        "question_hi": "निम्नलिखित में से कौन सा valid floating-point literal है?",
        "options_en": ["3.14f", "3.14F", "3.14", "All of above"],
        "options_hi": ["3.14f", "3.14F", "3.14", "उपरोक्त सभी"],
        "answer_en": "All of above",
        "answer_hi": "उपरोक्त सभी",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 7,
        "question_en": "What is short-circuit evaluation in logical operators?",
        "question_hi": "logical operators में short-circuit evaluation क्या है?",
        "options_en": ["Evaluation stops as soon as result is known", "All operands are always evaluated", "Only first operand is evaluated", "No evaluation happens"],
        "options_hi": ["परिणाम ज्ञात होते ही मूल्यांकन बंद हो जाता है", "सभी operands हमेशा मूल्यांकित होते हैं", "केवल पहला operand मूल्यांकित होता है", "कोई मूल्यांकन नहीं होता"],
        "answer_en": "Evaluation stops as soon as result is known",
        "answer_hi": "परिणाम ज्ञात होते ही मूल्यांकन बंद हो जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 8,
        "question_en": "What is the result of ~5 in C++ (assuming 8-bit integer)?",
        "question_hi": "C++ में ~5 का परिणाम क्या है (8-बिट पूर्णांक मानते हुए)?",
        "options_en": ["250", "-6", "10", "2"],
        "options_hi": ["250", "-6", "10", "2"],
        "answer_en": "250",
        "answer_hi": "250",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 9,
        "question_en": "Which of these is NOT a valid variable name in C++?",
        "question_hi": "निम्नलिखित में से C++ में valid variable name कौन सा नहीं है?",
        "options_en": ["_variable", "123variable", "variable_name", "Variable123"],
        "options_hi": ["_variable", "123variable", "variable_name", "Variable123"],
        "answer_en": "123variable",
        "answer_hi": "123variable",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 10,
        "question_en": "What is the value of sizeof('A') in C++?",
        "question_hi": "C++ में sizeof('A') का मान क्या है?",
        "options_en": ["1", "4", "Depends on compiler", "2"],
        "options_hi": ["1", "4", "कंपाइलर पर निर्भर करता है", "2"],
        "answer_en": "1",
        "answer_hi": "1",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 11,
        "question_en": "Which of these is a compound assignment operator?",
        "question_hi": "निम्नलिखित में से compound assignment operator कौन सा है?",
        "options_en": ["+=", "++", "=", "=="],
        "options_hi": ["+=", "++", "=", "=="],
        "answer_en": "+=",
        "answer_hi": "+=",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 12,
        "question_en": "What is the default case in switch statement if not specified?",
        "question_hi": "switch स्टेटमेंट में default case निर्दिष्ट न होने पर क्या होता है?",
        "options_en": ["No action, continues after switch", "Error", "First case executes", "Last case executes"],
        "options_hi": ["कोई कार्रवाई नहीं, switch के बाद जारी रहता है", "त्रुटि", "पहला case निष्पादित होता है", "अंतिम case निष्पादित होता है"],
        "answer_en": "No action, continues after switch",
        "answer_hi": "कोई कार्रवाई नहीं, switch के बाद जारी रहता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 13,
        "question_en": "What is the ternary conditional operator's syntax?",
        "question_hi": "ternary conditional operator का syntax क्या है?",
        "options_en": ["condition ? expr1 : expr2", "condition : expr1 ? expr2", "if condition then expr1 else expr2", "condition ?? expr1 : expr2"],
        "options_hi": ["condition ? expr1 : expr2", "condition : expr1 ? expr2", "if condition then expr1 else expr2", "condition ?? expr1 : expr2"],
        "answer_en": "condition ? expr1 : expr2",
        "answer_hi": "condition ? expr1 : expr2",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 14,
        "question_en": "What does the comma operator do?",
        "question_hi": "comma operator क्या करता है?",
        "options_en": ["Evaluates multiple expressions, returns last one", "Separates function parameters", "Creates arrays", "Joins strings"],
        "options_hi": ["कई expressions मूल्यांकित करता है, अंतिम वापस करता है", "function parameters अलग करता है", "arrays बनाता है", "strings जोड़ता है"],
        "answer_en": "Evaluates multiple expressions, returns last one",
        "answer_hi": "कई expressions मूल्यांकित करता है, अंतिम वापस करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 15,
        "question_en": "What is the scope of a variable declared inside a for loop?",
        "question_hi": "for loop के अंदर घोषित variable का scope क्या है?",
        "options_en": ["Inside the loop only", "Whole function", "Global", "Until next loop"],
        "options_hi": ["केवल loop के अंदर", "पूरा function", "ग्लोबल", "अगले loop तक"],
        "answer_en": "Inside the loop only",
        "answer_hi": "केवल loop के अंदर",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 16,
        "question_en": "What is the purpose of goto statement?",
        "question_hi": "goto स्टेटमेंट का उद्देश्य क्या है?",
        "options_en": ["Transfer control to labeled statement", "Go to next iteration", "Exit program", "Call function"],
        "options_hi": ["labeled statement पर नियंत्रण स्थानांतरित करना", "अगले iteration पर जाना", "प्रोग्राम बंद करना", "function call करना"],
        "answer_en": "Transfer control to labeled statement",
        "answer_hi": "labeled statement पर नियंत्रण स्थानांतरित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 17,
        "question_en": "What is a labeled statement in C++?",
        "question_hi": "C++ में labeled statement क्या है?",
        "options_en": ["Statement with identifier followed by colon", "Comment", "Function declaration", "Class definition"],
        "options_hi": ["कोलन के बाद identifier वाला statement", "comment", "function declaration", "class definition"],
        "answer_en": "Statement with identifier followed by colon",
        "answer_hi": "कोलन के बाद identifier वाला statement",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 18,
        "question_en": "What is the difference between break and continue in loops?",
        "question_hi": "loops में break और continue में क्या अंतर है?",
        "options_en": ["break exits loop, continue skips to next iteration", "continue exits loop, break skips iteration", "Both same", "No difference"],
        "options_hi": ["break loop से बाहर निकलता है, continue अगले iteration पर जाता है", "continue loop से बाहर निकलता है, break iteration छोड़ता है", "दोनों समान", "कोई अंतर नहीं"],
        "answer_en": "break exits loop, continue skips to next iteration",
        "answer_hi": "break loop से बाहर निकलता है, continue अगले iteration पर जाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 19,
        "question_en": "What is an infinite loop?",
        "question_hi": "infinite loop क्या है?",
        "options_en": ["Loop that never terminates", "Loop with many iterations", "Recursive loop", "Nested loop"],
        "options_hi": ["कभी समाप्त न होने वाला loop", "कई iterations वाला loop", "recursive loop", "nested loop"],
        "answer_en": "Loop that never terminates",
        "answer_hi": "कभी समाप्त न होने वाला loop",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 20,
        "question_en": "What is the difference between while and do-while loops?",
        "question_hi": "while और do-while loops में क्या अंतर है?",
        "options_en": ["do-while executes at least once", "while executes at least once", "No difference", "do-while is faster"],
        "options_hi": ["do-while कम से कम एक बार निष्पादित होता है", "while कम से कम एक बार निष्पादित होता है", "कोई अंतर नहीं", "do-while तेज है"],
        "answer_en": "do-while executes at least once",
        "answer_hi": "do-while कम से कम एक बार निष्पादित होता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 21,
        "question_en": "What is a nested loop?",
        "question_hi": "nested loop क्या है?",
        "options_en": ["Loop inside another loop", "Loop with multiple conditions", "Recursive loop", "Infinite loop"],
        "options_hi": ["दूसरे loop के अंदर loop", "कई conditions वाला loop", "recursive loop", "infinite loop"],
        "answer_en": "Loop inside another loop",
        "answer_hi": "दूसरे loop के अंदर loop",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 22,
        "question_en": "What is the purpose of a function prototype?",
        "question_hi": "function prototype का उद्देश्य क्या है?",
        "options_en": ["Declare function before definition", "Define function", "Call function", "Store function"],
        "options_hi": ["परिभाषा से पहले function घोषित करना", "function परिभाषित करना", "function call करना", "function store करना"],
        "answer_en": "Declare function before definition",
        "answer_hi": "परिभाषा से पहले function घोषित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 23,
        "question_en": "What is function signature?",
        "question_hi": "function signature क्या है?",
        "options_en": ["Function name and parameter types", "Return type only", "Function body", "Function documentation"],
        "options_hi": ["function name और parameter types", "केवल return type", "function body", "function documentation"],
        "answer_en": "Function name and parameter types",
        "answer_hi": "function name और parameter types",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 24,
        "question_en": "What is recursion in functions?",
        "question_hi": "functions में recursion क्या है?",
        "options_en": ["Function calling itself", "Function calling other function", "Loop in function", "Multiple returns"],
        "options_hi": ["function स्वयं को call करता है", "function दूसरे function को call करता है", "function में loop", "कई returns"],
        "answer_en": "Function calling itself",
        "answer_hi": "function स्वयं को call करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 25,
        "question_en": "What is base case in recursion?",
        "question_hi": "recursion में base case क्या है?",
        "options_en": ["Condition that stops recursion", "First recursive call", "Last recursive call", "Recursive step"],
        "options_hi": ["recursion रोकने वाली condition", "पहला recursive call", "अंतिम recursive call", "recursive step"],
        "answer_en": "Condition that stops recursion",
        "answer_hi": "recursion रोकने वाली condition",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 26,
        "question_en": "What is function overloading resolution?",
        "question_hi": "function overloading resolution क्या है?",
        "options_en": ["Compiler selects appropriate overloaded function", "Runtime selection", "User selection", "Random selection"],
        "options_hi": ["कंपाइलर उपयुक्त overloaded function चुनता है", "runtime selection", "user selection", "random selection"],
        "answer_en": "Compiler selects appropriate overloaded function",
        "answer_hi": "कंपाइलर उपयुक्त overloaded function चुनता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 27,
        "question_en": "What is default argument in function?",
        "question_hi": "function में default argument क्या है?",
        "options_en": ["Argument with default value if not provided", "Required argument", "Optional argument without default", "Variable argument"],
        "options_hi": ["प्रदान न किए जाने पर default value वाला argument", "आवश्यक argument", "default के बिना वैकल्पिक argument", "variable argument"],
        "answer_en": "Argument with default value if not provided",
        "answer_hi": "प्रदान न किए जाने पर default value वाला argument",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 28,
        "question_en": "What is the order of evaluation for function arguments?",
        "question_hi": "function arguments के मूल्यांकन का क्रम क्या है?",
        "options_en": ["Unspecified/implementation defined", "Left to right", "Right to left", "Random"],
        "options_hi": ["अनिर्दिष्ट/implementation defined", "बाएं से दाएं", "दाएं से बाएं", "यादृच्छिक"],
        "answer_en": "Unspecified/implementation defined",
        "answer_hi": "अनिर्दिष्ट/implementation defined",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 29,
        "question_en": "What is a function pointer?",
        "question_hi": "function pointer क्या है?",
        "options_en": ["Pointer that points to function", "Pointer returned by function", "Pointer as function argument", "Pointer in function"],
        "options_hi": ["function की ओर इशारा करने वाला pointer", "function द्वारा लौटाया गया pointer", "function argument के रूप में pointer", "function में pointer"],
        "answer_en": "Pointer that points to function",
        "answer_hi": "function की ओर इशारा करने वाला pointer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 30,
        "question_en": "What is callback function?",
        "question_hi": "callback function क्या है?",
        "options_en": ["Function passed as argument to be called later", "Function that calls back", "Recursive function", "Inline function"],
        "options_hi": ["बाद में call किए जाने के लिए argument के रूप में पारित function", "वापस call करने वाला function", "recursive function", "inline function"],
        "answer_en": "Function passed as argument to be called later",
        "answer_hi": "बाद में call किए जाने के लिए argument के रूप में पारित function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 31,
        "question_en": "What is the difference between pass by value and pass by reference?",
        "question_hi": "pass by value और pass by reference में क्या अंतर है?",
        "options_en": ["Value copies argument, reference aliases argument", "Reference copies argument", "Both same", "No difference"],
        "options_hi": ["value argument की copy बनाता है, reference argument का alias बनाता है", "reference argument की copy बनाता है", "दोनों समान", "कोई अंतर नहीं"],
        "answer_en": "Value copies argument, reference aliases argument",
        "answer_hi": "value argument की copy बनाता है, reference argument का alias बनाता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 32,
        "question_en": "What is return value optimization (RVO)?",
        "question_hi": "return value optimization (RVO) क्या है?",
        "options_en": ["Compiler optimization to eliminate temporary objects", "Optimizing return statements", "Fast return", "Value return"],
        "options_hi": ["अस्थायी objects को खत्म करने के लिए compiler optimization", "return statements optimize करना", "तेज return", "मान return"],
        "answer_en": "Compiler optimization to eliminate temporary objects",
        "answer_hi": "अस्थायी objects को खत्म करने के लिए compiler optimization",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 33,
        "question_en": "What is tail recursion?",
        "question_hi": "tail recursion क्या है?",
        "options_en": ["Recursive call is last operation in function", "First operation is recursive call", "Middle operation is recursive call", "No recursive calls"],
        "options_hi": ["function में अंतिम operation recursive call है", "पहला operation recursive call है", "मध्य operation recursive call है", "कोई recursive calls नहीं"],
        "answer_en": "Recursive call is last operation in function",
        "answer_hi": "function में अंतिम operation recursive call है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 34,
        "question_en": "What is variadic function?",
        "question_hi": "variadic function क्या है?",
        "options_en": ["Function with variable number of arguments", "Function with no arguments", "Function with fixed arguments", "Variable function"],
        "options_hi": ["variable number of arguments वाला function", "कोई arguments नहीं वाला function", "fixed arguments वाला function", "variable function"],
        "answer_en": "Function with variable number of arguments",
        "answer_hi": "variable number of arguments वाला function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 35,
        "question_en": "What is function object (functor)?",
        "question_hi": "function object (functor) क्या है?",
        "options_en": ["Object that can be called like function", "Function returning object", "Object in function", "Function creating object"],
        "options_hi": ["function की तरह call किया जा सकने वाला object", "object return करने वाला function", "function में object", "object बनाने वाला function"],
        "answer_en": "Object that can be called like function",
        "answer_hi": "function की तरह call किया जा सकने वाला object",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 36,
        "question_en": "What is function template specialization?",
        "question_hi": "function template specialization क्या है?",
        "options_en": ["Custom implementation for specific type", "General template", "Template declaration", "Template parameter"],
        "options_hi": ["विशिष्ट type के लिए custom implementation", "general template", "template declaration", "template parameter"],
        "answer_en": "Custom implementation for specific type",
        "answer_hi": "विशिष्ट type के लिए custom implementation",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 37,
        "question_en": "What is the difference between macro and inline function?",
        "question_hi": "macro और inline function में क्या अंतर है?",
        "options_en": ["Macro is text substitution, inline is function", "Both same", "Inline is text substitution", "No difference"],
        "options_hi": ["macro text substitution है, inline function है", "दोनों समान", "inline text substitution है", "कोई अंतर नहीं"],
        "answer_en": "Macro is text substitution, inline is function",
        "answer_hi": "macro text substitution है, inline function है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 38,
        "question_en": "What is name mangling in C++?",
        "question_hi": "C++ में name mangling क्या है?",
        "options_en": ["Compiler encodes function name with type information", "Function name changing", "Random name generation", "Name shortening"],
        "options_hi": ["कंपाइलर type information के साथ function name encode करता है", "function name बदलना", "random name generation", "name shortening"],
        "answer_en": "Compiler encodes function name with type information",
        "answer_hi": "कंपाइलर type information के साथ function name encode करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 39,
        "question_en": "What is function try block?",
        "question_hi": "function try block क्या है?",
        "options_en": ["try block covering entire function body", "try block inside function", "Function that tries", "Trying function"],
        "options_hi": ["पूरे function body को कवर करने वाला try block", "function के अंदर try block", "try करने वाला function", "trying function"],
        "answer_en": "try block covering entire function body",
        "answer_hi": "पूरे function body को कवर करने वाला try block",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 40,
        "question_en": "What is noexcept specification?",
        "question_hi": "noexcept specification क्या है?",
        "options_en": ["Specifies function won't throw exceptions", "Specifies function will throw", "No exception handling", "Exception specification"],
        "options_hi": ["निर्दिष्ट करता है कि function exceptions नहीं throw करेगा", "निर्दिष्ट करता है कि function throw करेगा", "कोई exception handling नहीं", "exception specification"],
        "answer_en": "Specifies function won't throw exceptions",
        "answer_hi": "निर्दिष्ट करता है कि function exceptions नहीं throw करेगा",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is the purpose of std::function?",
        "question_hi": "std::function का उद्देश्य क्या है?",
        "options_en": ["General-purpose polymorphic function wrapper", "Function declaration", "Function definition", "Function pointer"],
        "options_hi": ["general-purpose polymorphic function wrapper", "function declaration", "function definition", "function pointer"],
        "answer_en": "General-purpose polymorphic function wrapper",
        "answer_hi": "general-purpose polymorphic function wrapper",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 41,
        "question_en": "What is lambda capture in C++?",
        "question_hi": "C++ में lambda capture क्या है?",
        "options_en": ["Specifies which variables are accessible in lambda", "Capturing return value", "Capturing exceptions", "Capturing function"],
        "options_hi": ["निर्दिष्ट करता है कि lambda में कौन से variables सुलभ हैं", "return value capture करना", "exceptions capture करना", "function capture करना"],
        "answer_en": "Specifies which variables are accessible in lambda",
        "answer_hi": "निर्दिष्ट करता है कि lambda में कौन से variables सुलभ हैं",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 42,
        "question_en": "What is forwarding reference?",
        "question_hi": "forwarding reference क्या है?",
        "options_en": ["T&& that preserves value category", "Reference that forwards", "Forward declaration", "Reference forward"],
        "options_hi": ["T&& जो value category संरक्षित करता है", "forward करने वाला reference", "forward declaration", "reference forward"],
        "answer_en": "T&& that preserves value category",
        "answer_hi": "T&& जो value category संरक्षित करता है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 43,
        "question_en": "What is perfect forwarding?",
        "question_hi": "perfect forwarding क्या है?",
        "options_en": ["Preserving argument's value category when passing", "Forwarding perfectly", "Complete forwarding", "Forwarding all"],
        "options_hi": ["pass करते समय argument की value category संरक्षित करना", "पूरी तरह से forwarding", "पूर्ण forwarding", "सभी forwarding"],
        "answer_en": "Preserving argument's value category when passing",
        "answer_hi": "pass करते समय argument की value category संरक्षित करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 44,
        "question_en": "What is constexpr function?",
        "question_hi": "constexpr function क्या है?",
        "options_en": ["Function that can be evaluated at compile time", "Constant function", "Function returning const", "Expression function"],
        "options_hi": ["compile time पर मूल्यांकित किया जा सकने वाला function", "constant function", "const return करने वाला function", "expression function"],
        "answer_en": "Function that can be evaluated at compile time",
        "answer_hi": "compile time पर मूल्यांकित किया जा सकने वाला function",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 45,
        "question_en": "What is function pointer to member function?",
        "question_hi": "member function का function pointer क्या है?",
        "options_en": ["Pointer to class member function", "Pointer to function", "Member pointer", "Class pointer"],
        "options_hi": ["class member function का pointer", "function का pointer", "member pointer", "class pointer"],
        "answer_en": "Pointer to class member function",
        "answer_hi": "class member function का pointer",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 46,
        "question_en": "What is pointer to function vs pointer to member function?",
        "question_hi": "function के pointer और member function के pointer में क्या अंतर है?",
        "options_en": ["Member function pointer needs object", "Both same", "No difference", "Member pointer is smaller"],
        "options_hi": ["member function pointer को object की आवश्यकता होती है", "दोनों समान", "कोई अंतर नहीं", "member pointer छोटा है"],
        "answer_en": "Member function pointer needs object",
        "answer_hi": "member function pointer को object की आवश्यकता होती है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 47,
        "question_en": "What is the purpose of std::bind?",
        "question_hi": "std::bind का उद्देश्य क्या है?",
        "options_en": ["Bind arguments to function to create new callable", "Bind variables", "Bind objects", "Bind functions"],
        "options_hi": ["नया callable बनाने के लिए function से arguments bind करना", "variables bind करना", "objects bind करना", "functions bind करना"],
        "answer_en": "Bind arguments to function to create new callable",
        "answer_hi": "नया callable बनाने के लिए function से arguments bind करना",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 48,
        "question_en": "What is function template partial specialization?",
        "question_hi": "function template partial specialization क्या है?",
        "options_en": ["Not allowed for function templates", "Allowed for some types", "Complete specialization", "No specialization"],
        "options_hi": ["function templates के लिए अनुमति नहीं है", "कुछ types के लिए अनुमति है", "complete specialization", "कोई specialization नहीं"],
        "answer_en": "Not allowed for function templates",
        "answer_hi": "function templates के लिए अनुमति नहीं है",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 49,
        "question_en": "What is SFINAE (Substitution Failure Is Not An Error)?",
        "question_hi": "SFINAE (Substitution Failure Is Not An Error) क्या है?",
        "options_en": ["Template mechanism to remove candidates from overload set", "Error handling", "Exception mechanism", "Substitution error"],
        "options_hi": ["overload set से candidates हटाने के लिए template mechanism", "error handling", "exception mechanism", "substitution error"],
        "answer_en": "Template mechanism to remove candidates from overload set",
        "answer_hi": "overload set से candidates हटाने के लिए template mechanism",
        "attempted": false,
        "selected": ""
    },
    {
        "num": 50,
        "question_en": "What is fold expression in C++17?",
        "question_hi": "C++17 में fold expression क्या है?",
        "options_en": ["Compile-time reduction of parameter pack", "Folding code", "Expression folding", "Parameter folding"],
        "options_hi": ["parameter pack का compile-time reduction", "code folding", "expression folding", "parameter folding"],
        "answer_en": "Compile-time reduction of parameter pack",
        "answer_hi": "parameter pack का compile-time reduction",
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