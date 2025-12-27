const questions=[
  {
    "num": 1,
    "question_en": "What is the output: printf(\"%d\", sizeof(main()));",
    "question_hi": "आउटपुट क्या है: printf(\"%d\", sizeof(main()));",
    "options_en": ["Compile error", "Size of int", "Size of pointer", "Undefined"],
    "options_hi": ["कंपाइल त्रुटि", "int का आकार", "पॉइंटर का आकार", "अपरिभाषित"],
    "answer_en": "Compile error",
    "answer_hi": "कंपाइल त्रुटि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'side effect' in C standard?",
    "question_hi": "C मानक में 'side effect' क्या है?",
    "options_en": ["Change in state of execution environment", "Output only", "Input only", "No effect"],
    "options_hi": ["निष्पादन वातावरण की स्थिति में परिवर्तन", "केवल आउटपुट", "केवल इनपुट", "कोई प्रभाव नहीं"],
    "answer_en": "Change in state of execution environment",
    "answer_hi": "निष्पादन वातावरण की स्थिति में परिवर्तन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'value computation'?",
    "question_hi": "'value computation' क्या है?",
    "options_en": ["Calculation of value from operands", "Memory allocation", "Function call", "Loop execution"],
    "options_hi": ["ऑपरेंड से मान की गणना", "मेमोरी आवंटन", "फ़ंक्शन कॉल", "लूप निष्पादन"],
    "answer_en": "Calculation of value from operands",
    "answer_hi": "ऑपरेंड से मान की गणना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does 'indeterminate value' mean?",
    "question_hi": "'indeterminate value' का क्या अर्थ है?",
    "options_en": ["Uninitialized object value (could be trap)", "Zero value", "Null value", "Valid value"],
    "options_hi": ["अप्रारंभिक ऑब्जेक्ट मान (ट्रैप हो सकता है)", "शून्य मान", "नल मान", "मान्य मान"],
    "answer_en": "Uninitialized object value (could be trap)",
    "answer_hi": "अप्रारंभिक ऑब्जेक्ट मान (ट्रैप हो सकता है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'locale-specific behavior'?",
    "question_hi": "'locale-specific behavior' क्या है?",
    "options_en": ["Behavior depending on locale (e.g., character encoding)", "Always same", "Compiler specific", "OS specific"],
    "options_hi": ["लोकेल पर निर्भर व्यवहार (जैसे, वर्ण एन्कोडिंग)", "हमेशा समान", "कंपाइलर विशिष्ट", "OS विशिष्ट"],
    "answer_en": "Behavior depending on locale (e.g., character encoding)",
    "answer_hi": "लोकेल पर निर्भर व्यवहार (जैसे, वर्ण एन्कोडिंग)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'forward reference'?",
    "question_hi": "'forward reference' क्या है?",
    "options_en": ["Referring to identifier before its declaration", "After declaration", "No reference", "External reference"],
    "options_hi": ["घोषणा से पहले पहचानकर्ता का संदर्भ", "घोषणा के बाद", "कोई संदर्भ नहीं", "बाहरी संदर्भ"],
    "answer_en": "Referring to identifier before its declaration",
    "answer_hi": "घोषणा से पहले पहचानकर्ता का संदर्भ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'compatible type declaration'?",
    "question_hi": "'compatible type declaration' क्या है?",
    "options_en": ["Multiple declarations referring to same type", "Different types", "Conflicting types", "No declarations"],
    "options_hi": ["एक ही प्रकार को संदर्भित करने वाली कई घोषणाएं", "भिन्न प्रकार", "विरोधाभासी प्रकार", "कोई घोषणा नहीं"],
    "answer_en": "Multiple declarations referring to same type",
    "answer_hi": "एक ही प्रकार को संदर्भित करने वाली कई घोषणाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'array type derivation'?",
    "question_hi": "'array type derivation' क्या है?",
    "options_en": ["Creating array type from element type", "From pointer", "From function", "No derivation"],
    "options_hi": ["तत्व प्रकार से ऐरे प्रकार बनाना", "पॉइंटर से", "फ़ंक्शन से", "कोई व्युत्पत्ति नहीं"],
    "answer_en": "Creating array type from element type",
    "answer_hi": "तत्व प्रकार से ऐरे प्रकार बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'function type derivation'?",
    "question_hi": "'function type derivation' क्या है?",
    "options_en": ["Creating function type from return and parameter types", "From array", "From pointer", "No derivation"],
    "options_hi": ["वापसी और पैरामीटर प्रकारों से फ़ंक्शन प्रकार बनाना", "ऐरे से", "पॉइंटर से", "कोई व्युत्पत्ति नहीं"],
    "answer_en": "Creating function type from return and parameter types",
    "answer_hi": "वापसी और पैरामीटर प्रकारों से फ़ंक्शन प्रकार बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'atomic type qualification'?",
    "question_hi": "'atomic type qualification' क्या है?",
    "options_en": ["_Atomic qualifier for atomic operations", "const qualifier", "volatile qualifier", "No atomic"],
    "options_hi": ["परमाणु संक्रियाओं के लिए _Atomic क्वालीफायर", "const क्वालीफायर", "volatile क्वालीफायर", "कोई परमाणु नहीं"],
    "answer_en": "_Atomic qualifier for atomic operations",
    "answer_hi": "परमाणु संक्रियाओं के लिए _Atomic क्वालीफायर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'type name' syntax?",
    "question_hi": "'type name' सिंटैक्स क्या है?",
    "options_en": ["Used in cast: (type-name) expression", "Only in declarations", "No type name", "Only for primitives"],
    "options_hi": ["कास्ट में प्रयुक्त: (type-name) expression", "केवल घोषणाओं में", "कोई प्रकार नाम नहीं", "केवल आदिम के लिए"],
    "answer_en": "Used in cast: (type-name) expression",
    "answer_hi": "कास्ट में प्रयुक्त: (type-name) expression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'abstract declarator'?",
    "question_hi": "'abstract declarator' क्या है?",
    "options_en": ["Declarator without identifier (e.g., in sizeof)", "With identifier", "No declarator", "Only in functions"],
    "options_hi": ["पहचानकर्ता के बिना डिक्लेरेटर (जैसे, sizeof में)", "पहचानकर्ता के साथ", "कोई डिक्लेरेटर नहीं", "केवल फ़ंक्शन में"],
    "answer_en": "Declarator without identifier (e.g., in sizeof)",
    "answer_hi": "पहचानकर्ता के बिना डिक्लेरेटर (जैसे, sizeof में)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'typedef name' scope?",
    "question_hi": "'typedef name' स्कोप क्या है?",
    "options_en": ["Same as other identifiers (block, file, etc.)", "Always global", "Always local", "No scope"],
    "options_hi": ["अन्य पहचानकर्ताओं के समान (ब्लॉक, फ़ाइल, आदि)", "हमेशा वैश्विक", "हमेशा स्थानीय", "कोई स्कोप नहीं"],
    "answer_en": "Same as other identifiers (block, file, etc.)",
    "answer_hi": "अन्य पहचानकर्ताओं के समान (ब्लॉक, फ़ाइल, आदि)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'incomplete array type'?",
    "question_hi": "'incomplete array type' क्या है?",
    "options_en": ["Array with unspecified size (e.g., extern int a[])", "Complete array", "Pointer", "No array"],
    "options_hi": ["अनिर्दिष्ट आकार की ऐरे (जैसे, extern int a[])", "पूर्ण ऐरे", "पॉइंटर", "कोई ऐरे नहीं"],
    "answer_en": "Array with unspecified size (e.g., extern int a[])",
    "answer_hi": "अनिर्दिष्ट आकार की ऐरे (जैसे, extern int a[])",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'variable length array type' scope?",
    "question_hi": "'variable length array type' स्कोप क्या है?",
    "options_en": ["Block scope only", "File scope", "Function scope", "Any scope"],
    "options_hi": ["केवल ब्लॉक स्कोप", "फ़ाइल स्कोप", "फ़ंक्शन स्कोप", "कोई भी स्कोप"],
    "answer_en": "Block scope only",
    "answer_hi": "केवल ब्लॉक स्कोप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'object type' vs 'function type'?",
    "question_hi": "'object type' बनाम 'function type' क्या है?",
    "options_en": ["Object: region of data; Function: encapsulates code", "Same", "No difference", "Only objects exist"],
    "options_hi": ["ऑब्जेक्ट: डेटा का क्षेत्र; फ़ंक्शन: कोड समाहित करता है", "समान", "कोई अंतर नहीं", "केवल ऑब्जेक्ट मौजूद हैं"],
    "answer_en": "Object: region of data; Function: encapsulates code",
    "answer_hi": "ऑब्जेक्ट: डेटा का क्षेत्र; फ़ंक्शन: कोड समाहित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'character type'?",
    "question_hi": "'character type' क्या है?",
    "options_en": ["char, signed char, unsigned char", "Only char", "wchar_t", "All integer types"],
    "options_hi": ["char, signed char, unsigned char", "केवल char", "wchar_t", "सभी पूर्णांक प्रकार"],
    "answer_en": "char, signed char, unsigned char",
    "answer_hi": "char, signed char, unsigned char",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'extended integer type'?",
    "question_hi": "'extended integer type' क्या है?",
    "options_en": ["Implementation-defined integer types (e.g., __int128)", "Standard int only", "No extended", "Only char"],
    "options_hi": ["कार्यान्वयन-परिभाषित पूर्णांक प्रकार (जैसे, __int128)", "केवल मानक int", "कोई विस्तारित नहीं", "केवल char"],
    "answer_en": "Implementation-defined integer types (e.g., __int128)",
    "answer_hi": "कार्यान्वयन-परिभाषित पूर्णांक प्रकार (जैसे, __int128)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'real floating type'?",
    "question_hi": "'real floating type' क्या है?",
    "options_en": ["float, double, long double", "Only float", "Complex types", "Decimal types"],
    "options_hi": ["float, double, long double", "केवल float", "जटिल प्रकार", "दशमलव प्रकार"],
    "answer_en": "float, double, long double",
    "answer_hi": "float, double, long double",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'complex type'?",
    "question_hi": "'complex type' क्या है?",
    "options_en": ["float _Complex, double _Complex, long double _Complex", "Only float", "No complex", "Only C++"],
    "options_hi": ["float _Complex, double _Complex, long double _Complex", "केवल float", "कोई जटिल नहीं", "केवल C++"],
    "answer_en": "float _Complex, double _Complex, long double _Complex",
    "answer_hi": "float _Complex, double _Complex, long double _Complex",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'derived declarator types'?",
    "question_hi": "'derived declarator types' क्या हैं?",
    "options_en": ["Array, function, pointer types", "Basic types only", "No derived", "Only structures"],
    "options_hi": ["ऐरे, फ़ंक्शन, पॉइंटर प्रकार", "केवल मूल प्रकार", "कोई व्युत्पन्न नहीं", "केवल संरचनाएं"],
    "answer_en": "Array, function, pointer types",
    "answer_hi": "ऐरे, फ़ंक्शन, पॉइंटर प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'array of unknown size'?",
    "question_hi": "'array of unknown size' क्या है?",
    "options_en": ["Incomplete array type (e.g., int a[])", "Complete array", "VLA", "Pointer"],
    "options_hi": ["अपूर्ण ऐरे प्रकार (जैसे, int a[])", "पूर्ण ऐरे", "VLA", "पॉइंटर"],
    "answer_en": "Incomplete array type (e.g., int a[])",
    "answer_hi": "अपूर्ण ऐरे प्रकार (जैसे, int a[])",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'compatible composite type'?",
    "question_hi": "'compatible composite type' क्या है?",
    "options_en": ["Type compatible with each component type", "Incompatible", "No composite", "Only for arrays"],
    "options_hi": ["प्रत्येक घटक प्रकार के साथ संगत प्रकार", "असंगत", "कोई सम्मिश्र नहीं", "केवल ऐरे के लिए"],
    "answer_en": "Type compatible with each component type",
    "answer_hi": "प्रत्येक घटक प्रकार के साथ संगत प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'qualified type'?",
    "question_hi": "'qualified type' क्या है?",
    "options_en": ["Type with const, volatile, restrict, _Atomic", "Only const", "Only volatile", "No qualifiers"],
    "options_hi": ["const, volatile, restrict, _Atomic के साथ प्रकार", "केवल const", "केवल volatile", "कोई क्वालीफायर नहीं"],
    "answer_en": "Type with const, volatile, restrict, _Atomic",
    "answer_hi": "const, volatile, restrict, _Atomic के साथ प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'null pointer constant'?",
    "question_hi": "'null pointer constant' क्या है?",
    "options_en": ["Integer constant 0 or (void*)0", "Only 0", "Only NULL", "No null"],
    "options_hi": ["पूर्णांक स्थिरांक 0 या (void*)0", "केवल 0", "केवल NULL", "कोई नल नहीं"],
    "answer_en": "Integer constant 0 or (void*)0",
    "answer_hi": "पूर्णांक स्थिरांक 0 या (void*)0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'string literal' type?",
    "question_hi": "'string literal' प्रकार क्या है?",
    "options_en": ["Array of char (or wchar_t) with static storage", "Pointer", "Constant pointer", "No type"],
    "options_hi": ["स्थैतिक भंडारण के साथ char (या wchar_t) की ऐरे", "पॉइंटर", "स्थिर पॉइंटर", "कोई प्रकार नहीं"],
    "answer_en": "Array of char (or wchar_t) with static storage",
    "answer_hi": "स्थैतिक भंडारण के साथ char (या wchar_t) की ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'compound literal' type?",
    "question_hi": "'compound literal' प्रकार क्या है?",
    "options_en": ["Type specified in parentheses", "Always int", "Always array", "No type"],
    "options_hi": ["कोष्ठक में निर्दिष्ट प्रकार", "हमेशा int", "हमेशा ऐरे", "कोई प्रकार नहीं"],
    "answer_en": "Type specified in parentheses",
    "answer_hi": "कोष्ठक में निर्दिष्ट प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'lvalue'?",
    "question_hi": "'lvalue' क्या है?",
    "options_en": ["Expression referring to object (may have address)", "Only variable", "Only constant", "No object"],
    "options_hi": ["ऑब्जेक्ट को संदर्भित करने वाला एक्सप्रेशन (पता हो सकता है)", "केवल वेरिएबल", "केवल स्थिरांक", "कोई ऑब्जेक्ट नहीं"],
    "answer_en": "Expression referring to object (may have address)",
    "answer_hi": "ऑब्जेक्ट को संदर्भित करने वाला एक्सप्रेशन (पता हो सकता है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'modifiable lvalue'?",
    "question_hi": "'modifiable lvalue' क्या है?",
    "options_en": ["Lvalue not const-qualified and not array", "Any lvalue", "Only variable", "No modification"],
    "options_hi": ["const-योग्य नहीं और ऐरे नहीं वाला lvalue", "कोई भी lvalue", "केवल वेरिएबल", "कोई संशोधन नहीं"],
    "answer_en": "Lvalue not const-qualified and not array",
    "answer_hi": "const-योग्य नहीं और ऐरे नहीं वाला lvalue",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'incomplete type' restriction?",
    "question_hi": "'incomplete type' प्रतिबंध क्या है?",
    "options_en": ["Cannot apply sizeof, must be completed before use", "No restrictions", "Can use anywhere", "Only in declarations"],
    "options_hi": ["sizeof लागू नहीं कर सकते, उपयोग से पहले पूरा होना चाहिए", "कोई प्रतिबंध नहीं", "कहीं भी उपयोग कर सकते हैं", "केवल घोषणाओं में"],
    "answer_en": "Cannot apply sizeof, must be completed before use",
    "answer_hi": "sizeof लागू नहीं कर सकते, उपयोग से पहले पूरा होना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'compatible type' rule for functions?",
    "question_hi": "फ़ंक्शन के लिए 'compatible type' नियम क्या है?",
    "options_en": ["Same return and parameter types (considering qualifiers)", "Different return", "Different parameters", "No compatibility"],
    "options_hi": ["समान वापसी और पैरामीटर प्रकार (क्वालीफायर मानते हुए)", "भिन्न वापसी", "भिन्न पैरामीटर", "कोई संगतता नहीं"],
    "answer_en": "Same return and parameter types (considering qualifiers)",
    "answer_hi": "समान वापसी और पैरामीटर प्रकार (क्वालीफायर मानते हुए)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'type compatibility' for arrays?",
    "question_hi": "ऐरे के लिए 'type compatibility' क्या है?",
    "options_en": ["Same element type and compatible size (if specified)", "Different element", "No compatibility", "Always compatible"],
    "options_hi": ["समान तत्व प्रकार और संगत आकार (यदि निर्दिष्ट)", "भिन्न तत्व", "कोई संगतता नहीं", "हमेशा संगत"],
    "answer_en": "Same element type and compatible size (if specified)",
    "answer_hi": "समान तत्व प्रकार और संगत आकार (यदि निर्दिष्ट)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'compatible pointer types'?",
    "question_hi": "'compatible pointer types' क्या हैं?",
    "options_en": ["Pointers to compatible types, with same qualifiers", "Any pointers", "Only same base", "No compatibility"],
    "options_hi": ["संगत प्रकारों के पॉइंटर्स, समान क्वालीफायर के साथ", "कोई भी पॉइंटर्स", "केवल समान आधार", "कोई संगतता नहीं"],
    "answer_en": "Pointers to compatible types, with same qualifiers",
    "answer_hi": "संगत प्रकारों के पॉइंटर्स, समान क्वालीफायर के साथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'pointer to void' compatibility?",
    "question_hi": "'pointer to void' संगतता क्या है?",
    "options_en": ["void* compatible with any object pointer type", "Only char*", "No compatibility", "Only with itself"],
    "options_hi": ["void* किसी भी ऑब्जेक्ट पॉइंटर प्रकार के साथ संगत", "केवल char*", "कोई संगतता नहीं", "केवल स्वयं के साथ"],
    "answer_en": "void* compatible with any object pointer type",
    "answer_hi": "void* किसी भी ऑब्जेक्ट पॉइंटर प्रकार के साथ संगत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'integer conversion rank'?",
    "question_hi": "'integer conversion rank' क्या है?",
    "options_en": ["Hierarchy for integer promotions (char < short < int < long < long long)", "No rank", "All equal", "Only for signed"],
    "options_hi": ["पूर्णांक प्रचार के लिए पदानुक्रम (char < short < int < long < long long)", "कोई रैंक नहीं", "सभी समान", "केवल हस्ताक्षरित के लिए"],
    "answer_en": "Hierarchy for integer promotions (char < short < int < long < long long)",
    "answer_hi": "पूर्णांक प्रचार के लिए पदानुक्रम (char < short < int < long < long long)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'usual arithmetic conversions' for complex?",
    "question_hi": "जटिल के लिए 'usual arithmetic conversions' क्या हैं?",
    "options_en": ["Convert to common complex type", "Only real", "No conversion", "Error"],
    "options_hi": ["सामान्य जटिल प्रकार में परिवर्तित करें", "केवल वास्तविक", "कोई रूपांतरण नहीं", "त्रुटि"],
    "answer_en": "Convert to common complex type",
    "answer_hi": "सामान्य जटिल प्रकार में परिवर्तित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'cast operator' semantics?",
    "question_hi": "'cast operator' अर्थ विज्ञान क्या है?",
    "options_en": ["Explicit type conversion", "Implicit conversion", "No conversion", "Only for pointers"],
    "options_hi": ["स्पष्ट प्रकार रूपांतरण", "अंतर्निहित रूपांतरण", "कोई रूपांतरण नहीं", "केवल पॉइंटर्स के लिए"],
    "answer_en": "Explicit type conversion",
    "answer_hi": "स्पष्ट प्रकार रूपांतरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'multiplicative operators'?",
    "question_hi": "'multiplicative operators' क्या हैं?",
    "options_en": ["*, /, %", "Only *", "Only /", "Only %"],
    "options_hi": ["*, /, %", "केवल *", "केवल /", "केवल %"],
    "answer_en": "*, /, %",
    "answer_hi": "*, /, %",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'additive operators' for pointers?",
    "question_hi": "पॉइंटर्स के लिए 'additive operators' क्या हैं?",
    "options_en": ["Pointer ± integer, pointer - pointer", "Only +", "Only -", "No pointer arithmetic"],
    "options_hi": ["पॉइंटर ± पूर्णांक, पॉइंटर - पॉइंटर", "केवल +", "केवल -", "कोई पॉइंटर अंकगणित नहीं"],
    "answer_en": "Pointer ± integer, pointer - pointer",
    "answer_hi": "पॉइंटर ± पूर्णांक, पॉइंटर - पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'bitwise shift operators' behavior?",
    "question_hi": "'bitwise shift operators' व्यवहार क्या है?",
    "options_en": ["Left: fill 0; Right: implementation-defined for signed", "Always fill 0", "Always sign extend", "No shift"],
    "options_hi": ["बाएं: 0 भरें; दाएं: हस्ताक्षरित के लिए कार्यान्वयन-परिभाषित", "हमेशा 0 भरें", "हमेशा चिन्ह विस्तार", "कोई शिफ्ट नहीं"],
    "answer_en": "Left: fill 0; Right: implementation-defined for signed",
    "answer_hi": "बाएं: 0 भरें; दाएं: हस्ताक्षरित के लिए कार्यान्वयन-परिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'relational operators' for pointers?",
    "question_hi": "पॉइंटर्स के लिए 'relational operators' क्या हैं?",
    "options_en": ["Compare addresses within same array/object", "Any pointers", "No pointer compare", "Only equality"],
    "options_hi": ["एक ही ऐरे/ऑब्जेक्ट के भीतर पते तुलना करें", "कोई भी पॉइंटर्स", "कोई पॉइंटर तुलना नहीं", "केवल समानता"],
    "answer_en": "Compare addresses within same array/object",
    "answer_hi": "एक ही ऐरे/ऑब्जेक्ट के भीतर पते तुलना करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'equality operators' for pointers?",
    "question_hi": "पॉइंटर्स के लिए 'equality operators' क्या हैं?",
    "options_en": ["Can compare any pointers (==, !=)", "Only same type", "No comparison", "Only relational"],
    "options_hi": ["किसी भी पॉइंटर की तुलना कर सकते हैं (==, !=)", "केवल समान प्रकार", "कोई तुलना नहीं", "केवल रिलेशनल"],
    "answer_en": "Can compare any pointers (==, !=)",
    "answer_hi": "किसी भी पॉइंटर की तुलना कर सकते हैं (==, !=)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'bitwise AND operator'?",
    "question_hi": "'bitwise AND operator' क्या है?",
    "options_en": ["& (both integer and bitwise operation)", "Only logical", "Only arithmetic", "No such operator"],
    "options_hi": ["& (पूर्णांक और बिटवाइज़ दोनों संक्रिया)", "केवल तार्किक", "केवल अंकगणितीय", "ऐसा कोई ऑपरेटर नहीं"],
    "answer_en": "& (both integer and bitwise operation)",
    "answer_hi": "& (पूर्णांक और बिटवाइज़ दोनों संक्रिया)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'logical AND operator' short-circuit?",
    "question_hi": "'logical AND operator' शॉर्ट-सर्किट क्या है?",
    "options_en": ["&& evaluates right only if left is true", "Always both", "Never right", "Only left"],
    "options_hi": ["&& दाएं का मूल्यांकन केवल तभी करता है जब बायां सत्य है", "हमेशा दोनों", "कभी दाएं नहीं", "केवल बायां"],
    "answer_en": "&& evaluates right only if left is true",
    "answer_hi": "&& दाएं का मूल्यांकन केवल तभी करता है जब बायां सत्य है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'conditional operator' evaluation?",
    "question_hi": "'conditional operator' मूल्यांकन क्या है?",
    "options_en": ["Evaluate first, then only one of second/third", "Evaluate all", "Evaluate none", "Random evaluation"],
    "options_hi": ["पहले का मूल्यांकन करें, फिर केवल दूसरे/तीसरे में से एक", "सभी का मूल्यांकन करें", "किसी का मूल्यांकन न करें", "यादृच्छिक मूल्यांकन"],
    "answer_en": "Evaluate first, then only one of second/third",
    "answer_hi": "पहले का मूल्यांकन करें, फिर केवल दूसरे/तीसरे में से एक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'assignment operator' requirement?",
    "question_hi": "'assignment operator' आवश्यकता क्या है?",
    "options_en": ["Left operand must be modifiable lvalue", "Any lvalue", "Any expression", "Only variable"],
    "options_hi": ["बायां ऑपरेंड संशोधन योग्य lvalue होना चाहिए", "कोई भी lvalue", "कोई भी एक्सप्रेशन", "केवल वेरिएबल"],
    "answer_en": "Left operand must be modifiable lvalue",
    "answer_hi": "बायां ऑपरेंड संशोधन योग्य lvalue होना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'compound assignment' semantics?",
    "question_hi": "'compound assignment' अर्थ विज्ञान क्या है?",
    "options_en": ["E1 op= E2 equivalent to E1 = E1 op E2 (with E1 evaluated once)", "E1 evaluated twice", "No equivalence", "Different semantics"],
    "options_hi": ["E1 op= E2, E1 = E1 op E2 के बराबर (E1 एक बार मूल्यांकन के साथ)", "E1 दो बार मूल्यांकन", "कोई समानता नहीं", "भिन्न अर्थ विज्ञान"],
    "answer_en": "E1 op= E2 equivalent to E1 = E1 op E2 (with E1 evaluated once)",
    "answer_hi": "E1 op= E2, E1 = E1 op E2 के बराबर (E1 एक बार मूल्यांकन के साथ)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'sequence point' examples?",
    "question_hi": "'sequence point' उदाहरण क्या हैं?",
    "options_en": ["End of full expression, &&, ||, ?:, comma operator, function call", "No sequence points", "Only end of program", "Only function start"],
    "options_hi": ["पूर्ण एक्सप्रेशन का अंत, &&, ||, ?:, अल्पविराम ऑपरेटर, फ़ंक्शन कॉल", "कोई अनुक्रम बिंदु नहीं", "केवल प्रोग्राम का अंत", "केवल फ़ंक्शन शुरुआत"],
    "answer_en": "End of full expression, &&, ||, ?:, comma operator, function call",
    "answer_hi": "पूर्ण एक्सप्रेशन का अंत, &&, ||, ?:, अल्पविराम ऑपरेटर, फ़ंक्शन कॉल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'constraint' in C standard?",
    "question_hi": "C मानक में 'constraint' क्या है?",
    "options_en": ["Rule that must be followed (diagnostic required if violated)", "Optional rule", "Guideline", "No constraints"],
    "options_hi": ["नियम जिसका पालन किया जाना चाहिए (उल्लंघन पर नैदानिक आवश्यक)", "वैकल्पिक नियम", "दिशानिर्देश", "कोई बाध्यता नहीं"],
    "answer_en": "Rule that must be followed (diagnostic required if violated)",
    "answer_hi": "नियम जिसका पालन किया जाना चाहिए (उल्लंघन पर नैदानिक आवश्यक)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'runtime-constraint'?",
    "question_hi": "'runtime-constraint' क्या है?",
    "options_en": ["Constraint checked at runtime (e.g., bounds)", "Compile-time only", "No runtime check", "Only for I/O"],
    "options_hi": ["रनटाइम पर जाँची गई बाध्यता (जैसे, सीमाएँ)", "केवल कंपाइल-टाइम", "कोई रनटाइम जाँच नहीं", "केवल I/O के लिए"],
    "answer_en": "Constraint checked at runtime (e.g., bounds)",
    "answer_hi": "रनटाइम पर जाँची गई बाध्यता (जैसे, सीमाएँ)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'diagnostic message'?",
    "question_hi": "'diagnostic message' क्या है?",
    "options_en": ["Compiler warning/error message", "Runtime error", "No message", "Only error"],
    "options_hi": ["कंपाइलर चेतावनी/त्रुटि संदेश", "रनटाइम त्रुटि", "कोई संदेश नहीं", "केवल त्रुटि"],
    "answer_en": "Compiler warning/error message",
    "answer_hi": "कंपाइलर चेतावनी/त्रुटि संदेश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'translation limit'?",
    "question_hi": "'translation limit' क्या है?",
    "options_en": ["Minimum requirements compiler must support (e.g., 127 nesting levels)", "No limits", "Maximum possible", "Only for arrays"],
    "options_hi": ["न्यूनतम आवश्यकताएँ कंपाइलर को समर्थन करनी चाहिए (जैसे, 127 नेस्टिंग स्तर)", "कोई सीमा नहीं", "अधिकतम संभव", "केवल ऐरे के लिए"],
    "answer_en": "Minimum requirements compiler must support (e.g., 127 nesting levels)",
    "answer_hi": "न्यूनतम आवश्यकताएँ कंपाइलर को समर्थन करनी चाहिए (जैसे, 127 नेस्टिंग स्तर)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'environment' in C standard?",
    "question_hi": "C मानक में 'environment' क्या है?",
    "options_en": ["External system (OS, hardware) where program runs", "Only compiler", "Only CPU", "No environment"],
    "options_hi": ["बाहरी सिस्टम (OS, हार्डवेयर) जहाँ प्रोग्राम चलता है", "केवल कंपाइलर", "केवल CPU", "कोई वातावरण नहीं"],
    "answer_en": "External system (OS, hardware) where program runs",
    "answer_hi": "बाहरी सिस्टम (OS, हार्डवेयर) जहाँ प्रोग्राम चलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'freestanding environment'?",
    "question_hi": "'freestanding environment' क्या है?",
    "options_en": ["No OS (embedded, kernel); minimal library", "Full OS", "Only standard library", "No environment"],
    "options_hi": ["कोई OS नहीं (एम्बेडेड, कर्नेल); न्यूनतम लाइब्रेरी", "पूर्ण OS", "केवल मानक लाइब्रेरी", "कोई वातावरण नहीं"],
    "answer_en": "No OS (embedded, kernel); minimal library",
    "answer_hi": "कोई OS नहीं (एम्बेडेड, कर्नेल); न्यूनतम लाइब्रेरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'hosted environment'?",
    "question_hi": "'hosted environment' क्या है?",
    "options_en": ["Full OS with standard library", "No OS", "Minimal library", "Embedded only"],
    "options_hi": ["मानक लाइब्रेरी के साथ पूर्ण OS", "कोई OS नहीं", "न्यूनतम लाइब्रेरी", "केवल एम्बेडेड"],
    "answer_en": "Full OS with standard library",
    "answer_hi": "मानक लाइब्रेरी के साथ पूर्ण OS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'undefined behavior' example?",
    "question_hi": "'undefined behavior' उदाहरण क्या है?",
    "options_en": ["Signed integer overflow, null pointer dereference", "All behavior defined", "Only implementation-defined", "No UB"],
    "answer_en": "Signed integer overflow, null pointer dereference",
    "answer_hi": "हस्ताक्षरित पूर्णांक ओवरफ्लो, नल पॉइंटर डेरिफरेन्स",
    "options_en": ["Signed integer overflow, null pointer dereference", "Division by zero", "Out-of-bounds array access", "All of these"],
    "options_hi": ["हस्ताक्षरित पूर्णांक ओवरफ्लो, नल पॉइंटर डेरिफरेन्स", "शून्य से विभाजन", "सीमा से बाहर ऐरे एक्सेस", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'implementation-defined behavior'?",
    "question_hi": "'implementation-defined behavior' क्या है?",
    "options_en": ["Behavior documented by implementation (e.g., size of int)", "Undefined", "Unspecified", "Always same"],
    "options_hi": ["कार्यान्वयन द्वारा दस्तावेजित व्यवहार (जैसे, int का आकार)", "अपरिभाषित", "अनिर्दिष्ट", "हमेशा समान"],
    "answer_en": "Behavior documented by implementation (e.g., size of int)",
    "answer_hi": "कार्यान्वयन द्वारा दस्तावेजित व्यवहार (जैसे, int का आकार)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'unspecified behavior'?",
    "question_hi": "'unspecified behavior' क्या है?",
    "options_en": ["Behavior where standard gives multiple possibilities, no requirement", "Must be documented", "Always same", "Undefined"],
    "options_hi": ["व्यवहार जहाँ मानक कई संभावनाएं देता है, कोई आवश्यकता नहीं", "दस्तावेजित होना चाहिए", "हमेशा समान", "अपरिभाषित"],
    "answer_en": "Behavior where standard gives multiple possibilities, no requirement",
    "answer_hi": "व्यवहार जहाँ मानक कई संभावनाएं देता है, कोई आवश्यकता नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'locale-specific behavior' example?",
    "question_hi": "'locale-specific behavior' उदाहरण क्या है?",
    "options_en": ["Character classification (isalpha), decimal point", "Always ASCII", "No locale", "Only for dates"],
    "options_hi": ["वर्ण वर्गीकरण (isalpha), दशमलव बिंदु", "हमेशा ASCII", "कोई लोकेल नहीं", "केवल तिथियों के लिए"],
    "answer_en": "Character classification (isalpha), decimal point",
    "answer_hi": "वर्ण वर्गीकरण (isalpha), दशमलव बिंदु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'forward progress' guarantee?",
    "question_hi": "'forward progress' गारंटी क्या है?",
    "options_en": ["Thread will eventually make progress", "May deadlock", "No guarantee", "Only for main thread"],
    "options_hi": ["थ्रेड अंततः प्रगति करेगा", "डेडलॉक हो सकता है", "कोई गारंटी नहीं", "केवल मुख्य थ्रेड के लिए"],
    "answer_en": "Thread will eventually make progress",
    "answer_hi": "थ्रेड अंततः प्रगति करेगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'data race' definition?",
    "question_hi": "'data race' परिभाषा क्या है?",
    "options_en": ["Two threads accessing same memory, one is write, no synchronization", "Any access", "Only reads", "No threads"],
    "options_hi": ["दो थ्रेड्स एक ही मेमोरी एक्सेस कर रही हैं, एक लिख रही है, कोई समकालिकरण नहीं", "कोई भी एक्सेस", "केवल पढ़ता है", "कोई थ्रेड नहीं"],
    "answer_en": "Two threads accessing same memory, one is write, no synchronization",
    "answer_hi": "दो थ्रेड्स एक ही मेमोरी एक्सेस कर रही हैं, एक लिख रही है, कोई समकालिकरण नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'memory location'?",
    "question_hi": "'memory location' क्या है?",
    "options_en": ["Scalar or adjacent bit-fields", "Any byte", "Only variables", "Only arrays"],
    "options_hi": ["स्केलर या आसन्न बिट-फ़ील्ड्स", "कोई भी बाइट", "केवल वेरिएबल्स", "केवल ऐरे"],
    "answer_en": "Scalar or adjacent bit-fields",
    "answer_hi": "स्केलर या आसन्न बिट-फ़ील्ड्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'evaluation order' of function arguments?",
    "question_hi": "फ़ंक्शन तर्कों का 'evaluation order' क्या है?",
    "options_en": ["Unspecified", "Left to right", "Right to left", "Always same"],
    "options_hi": ["अनिर्दिष्ट", "बाएं से दाएं", "दाएं से बाएं", "हमेशा समान"],
    "answer_en": "Unspecified",
    "answer_hi": "अनिर्दिष्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'value computation' vs 'side effect' ordering?",
    "question_hi": "'value computation' बनाम 'side effect' क्रम क्या है?",
    "options_en": ["Value computations before side effects of same expression", "No ordering", "Side effects first", "Random"],
    "options_hi": ["समान अभिव्यक्ति के साइड इफेक्ट्स से पहले मान गणना", "कोई क्रम नहीं", "साइड इफेक्ट्स पहले", "यादृच्छिक"],
    "answer_en": "Value computations before side effects of same expression",
    "answer_hi": "समान अभिव्यक्ति के साइड इफेक्ट्स से पहले मान गणना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'asynchronous signal' safety?",
    "question_hi": "'asynchronous signal' सुरक्षा क्या है?",
    "options_en": ["Only async-signal-safe functions can be called in signal handler", "Any function", "No functions", "Only main"],
    "options_hi": ["केवल async-signal-safe फ़ंक्शन्स सिग्नल हैंडलर में कॉल किए जा सकते हैं", "कोई भी फ़ंक्शन", "कोई फ़ंक्शन नहीं", "केवल main"],
    "answer_en": "Only async-signal-safe functions can be called in signal handler",
    "answer_hi": "केवल async-signal-safe फ़ंक्शन्स सिग्नल हैंडलर में कॉल किए जा सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'interrupt' vs 'signal'?",
    "question_hi": "'interrupt' बनाम 'signal' क्या है?",
    "options_en": ["Interrupt: hardware; Signal: software abstraction", "Same", "No difference", "Only signals exist"],
    "options_hi": ["इंटरप्ट: हार्डवेयर; सिग्नल: सॉफ़्टवेयर अमूर्त", "समान", "कोई अंतर नहीं", "केवल सिग्नल मौजूद हैं"],
    "answer_en": "Interrupt: hardware; Signal: software abstraction",
    "answer_hi": "इंटरप्ट: हार्डवेयर; सिग्नल: सॉफ़्टवेयर अमूर्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'volatile' and signal handlers?",
    "question_hi": "'volatile' और सिग्नल हैंडलर क्या है?",
    "options_en": ["Variables shared with signal handler should be volatile sig_atomic_t", "Any type", "No volatile needed", "Only atomic"],
    "options_hi": ["सिग्नल हैंडलर के साथ साझा वेरिएबल्स volatile sig_atomic_t होने चाहिए", "कोई भी प्रकार", "volatile की आवश्यकता नहीं", "केवल परमाणु"],
    "answer_en": "Variables shared with signal handler should be volatile sig_atomic_t",
    "answer_hi": "सिग्नल हैंडलर के साथ साझा वेरिएबल्स volatile sig_atomic_t होने चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'setjmp' variable rule?",
    "question_hi": "'setjmp' वेरिएबल नियम क्या है?",
    "options_en": ["Local variables changed between setjmp and longjmp may have indeterminate values", "Always preserved", "Always reset", "No effect"],
    "options_hi": ["स्थानीय वेरिएबल्स जो setjmp और longjmp के बीच बदले गए हैं, अनिश्चित मान हो सकते हैं", "हमेशा संरक्षित", "हमेशा रीसेट", "कोई प्रभाव नहीं"],
    "answer_en": "Local variables changed between setjmp and longjmp may have indeterminate values",
    "answer_hi": "स्थानीय वेरिएबल्स जो setjmp और longjmp के बीच बदले गए हैं, अनिश्चित मान हो सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'real floating type'?",
    "question_hi": "'real floating type' क्या है?",
    "options_en": ["float, double, long double", "Only float", "Complex types", "Decimal types"],
    "options_hi": ["float, double, long double", "केवल float", "जटिल प्रकार", "दशमलव प्रकार"],
    "answer_en": "float, double, long double",
    "answer_hi": "float, double, long double",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'Pragma operator'?",
    "question_hi": "'Pragma operator' क्या है?",
    "options_en": ["_Pragma(\"token-string\") for pragmas in macros", "Only #pragma", "No pragma operator", "Only in C++"],
    "options_hi": ["मैक्रोज़ में प्रैग्मा के लिए _Pragma(\"token-string\")", "केवल #pragma", "कोई प्रैग्मा ऑपरेटर नहीं", "केवल C++ में"],
    "answer_en": "_Pragma(\"token-string\") for pragmas in macros",
    "answer_hi": "मैक्रोज़ में प्रैग्मा के लिए _Pragma(\"token-string\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'relational operators' for pointers?",
    "question_hi": "पॉइंटर्स के लिए 'relational operators' क्या हैं?",
    "options_en": ["Compare addresses within same array/object", "Any pointers", "No pointer compare", "Only equality"],
    "options_hi": ["एक ही ऐरे/ऑब्जेक्ट के भीतर पते तुलना करें", "कोई भी पॉइंटर्स", "कोई पॉइंटर तुलना नहीं", "केवल समानता"],
    "answer_en": "Compare addresses within same array/object",
    "answer_hi": "एक ही ऐरे/ऑब्जेक्ट के भीतर पते तुलना करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'digraph'?",
    "question_hi": "'digraph' क्या है?",
    "options_en": ["<%, %>, <:, :>, %:, %:%: as alternative tokens", "No digraphs", "Only trigraphs", "Only for operators"],
    "options_hi": ["<%, %>, <:, :>, %:, %:%: वैकल्पिक टोकन के रूप में", "कोई डाइग्राफ नहीं", "केवल ट्राइग्राफ", "केवल ऑपरेटर्स के लिए"],
    "answer_en": "<%, %>, <:, :>, %:, %:%: as alternative tokens",
    "answer_hi": "<%, %>, <:, :>, %:, %:%: वैकल्पिक टोकन के रूप में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'trigraph'?",
    "question_hi": "'trigraph' क्या है?",
    "options_en": ["??=, ??/, etc. for missing characters on old keyboards", "No trigraphs", "Only digraphs", "Removed in C23"],
    "options_hi": ["??=, ??/, आदि पुराने कीबोर्ड पर लापता वर्णों के लिए", "कोई ट्राइग्राफ नहीं", "केवल डाइग्राफ", "C23 में हटाए गए"],
    "answer_en": "??=, ??/, etc. for missing characters on old keyboards",
    "answer_hi": "??=, ??/, आदि पुराने कीबोर्ड पर लापता वर्णों के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'universal character name'?",
    "question_hi": "'universal character name' क्या है?",
    "options_en": ["\\uXXXX or \\UXXXXXXXX for Unicode in identifiers", "No Unicode", "Only in strings", "Only ASCII"],
    "options_hi": ["पहचानकर्ताओं में यूनिकोड के लिए \\uXXXX या \\UXXXXXXXX", "कोई यूनिकोड नहीं", "केवल स्ट्रिंग्स में", "केवल ASCII"],
    "answer_en": "\\uXXXX or \\UXXXXXXXX for Unicode in identifiers",
    "answer_hi": "पहचानकर्ताओं में यूनिकोड के लिए \\uXXXX या \\UXXXXXXXX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'reserved identifier'?",
    "question_hi": "'reserved identifier' क्या है?",
    "options_en": ["Identifier starting with underscore or in reserved namespaces", "Any identifier", "No reserved", "Only keywords"],
    "options_hi": ["अंडरस्कोर से शुरू होने वाला पहचानकर्ता या आरक्षित नामस्थान में", "कोई भी पहचानकर्ता", "कोई आरक्षित नहीं", "केवल कीवर्ड"],
    "answer_en": "Identifier starting with underscore or in reserved namespaces",
    "answer_hi": "अंडरस्कोर से शुरू होने वाला पहचानकर्ता या आरक्षित नामस्थान में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'external name' limitation?",
    "question_hi": "'external name' सीमा क्या है?",
    "options_en": ["May be limited to 6 case-insensitive characters (old standard)", "No limit", "Only 8 characters", "Unlimited"],
    "options_hi": ["6 केस-असंवेदनशील वर्णों तक सीमित हो सकता है (पुराना मानक)", "कोई सीमा नहीं", "केवल 8 वर्ण", "असीमित"],
    "answer_en": "May be limited to 6 case-insensitive characters (old standard)",
    "answer_hi": "6 केस-असंवेदनशील वर्णों तक सीमित हो सकता है (पुराना मानक)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'effective type' rule for allocated memory?",
    "question_hi": "आवंटित मेमोरी के लिए 'effective type' नियम क्या है?",
    "options_en": ["Type of lvalue used to store into dynamically allocated memory", "No effective type", "Always char", "First write determines"],
    "options_hi": ["गतिशील रूप से आवंटित मेमोरी में संग्रहीत करने के लिए उपयोग किए गए lvalue का प्रकार", "कोई प्रभावी प्रकार नहीं", "हमेशा char", "पहली लिखावत निर्धारित करती है"],
    "answer_en": "Type of lvalue used to store into dynamically allocated memory",
    "answer_hi": "गतिशील रूप से आवंटित मेमोरी में संग्रहीत करने के लिए उपयोग किए गए lvalue का प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'strict aliasing' exception for char*?",
    "question_hi": "char* के लिए 'strict aliasing' अपवाद क्या है?",
    "options_en": ["char* can alias any type", "Cannot alias", "Only signed char", "No exception"],
    "options_hi": ["char* किसी भी प्रकार का एलियास कर सकता है", "एलियास नहीं कर सकता", "केवल signed char", "कोई अपवाद नहीं"],
    "answer_en": "char* can alias any type",
    "answer_hi": "char* किसी भी प्रकार का एलियास कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'type punning' using memcpy?",
    "question_hi": "memcpy का उपयोग कर 'type punning' क्या है?",
    "options_en": ["Copy bytes - defined behavior", "Undefined", "Only for same type", "No memcpy"],
    "options_hi": ["बाइट्स कॉपी करें - परिभाषित व्यवहार", "अपरिभाषित", "केवल समान प्रकार के लिए", "कोई memcpy नहीं"],
    "answer_en": "Copy bytes - defined behavior",
    "answer_hi": "बाइट्स कॉपी करें - परिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'pointer provenance'?",
    "question_hi": "'pointer provenance' क्या है?",
    "options_en": ["Information about origin of pointer for optimization", "No provenance", "Only for arrays", "Only in C++"],
    "options_hi": ["ऑप्टिमाइज़ेशन के लिए पॉइंटर की उत्पत्ति के बारे में जानकारी", "कोई उत्पत्ति नहीं", "केवल ऐरे के लिए", "केवल C++ में"],
    "answer_en": "Information about origin of pointer for optimization",
    "answer_hi": "ऑप्टिमाइज़ेशन के लिए पॉइंटर की उत्पत्ति के बारे में जानकारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'object representation'?",
    "question_hi": "'object representation' क्या है?",
    "options_en": ["Bytes representing object in memory", "Only value", "No representation", "Only for structs"],
    "options_hi": ["मेमोरी में ऑब्जेक्ट का प्रतिनिधित्व करने वाले बाइट्स", "केवल मान", "कोई प्रतिनिधित्व नहीं", "केवल संरचनाओं के लिए"],
    "answer_en": "Bytes representing object in memory",
    "answer_hi": "मेमोरी में ऑब्जेक्ट का प्रतिनिधित्व करने वाले बाइट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'value representation'?",
    "question_hi": "'value representation' क्या है?",
    "options_en": ["Bits holding value (excluding padding)", "All bits", "No value bits", "Only for integers"],
    "options_hi": ["मान रखने वाले बिट्स (पैडिंग को छोड़कर)", "सभी बिट्स", "कोई मान बिट नहीं", "केवल पूर्णांकों के लिए"],
    "answer_en": "Bits holding value (excluding padding)",
    "answer_hi": "मान रखने वाले बिट्स (पैडिंग को छोड़कर)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'effective type' of const object?",
    "question_hi": "const ऑब्जेक्ट का 'effective type' क्या है?",
    "options_en": ["const-qualified type", "Non-const", "No effective type", "Always char"],
    "options_hi": ["const-योग्य प्रकार", "गैर-const", "कोई प्रभावी प्रकार नहीं", "हमेशा char"],
    "answer_en": "const-qualified type",
    "answer_hi": "const-योग्य प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'atomic_compare_exchange'?",
    "question_hi": "'atomic_compare_exchange' क्या है?",
    "options_en": ["Atomic compare-and-swap operation", "No such operation", "Only load", "Only store"],
    "options_hi": ["परमाणु तुलना-और-स्वैप संक्रिया", "ऐसी कोई संक्रिया नहीं", "केवल लोड", "केवल स्टोर"],
    "answer_en": "Atomic compare-and-swap operation",
    "answer_hi": "परमाणु तुलना-और-स्वैप संक्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'memory_order_consume'?",
    "question_hi": "'memory_order_consume' क्या है?",
    "options_en": ["Memory ordering for data dependencies (rarely used)", "Same as acquire", "No ordering", "Only for stores"],
    "options_hi": ["डेटा निर्भरताओं के लिए मेमोरी ऑर्डरिंग (शायद ही कभी उपयोग)", "acquire के समान", "कोई ऑर्डरिंग नहीं", "केवल स्टोर्स के लिए"],
    "answer_en": "Memory ordering for data dependencies (rarely used)",
    "answer_hi": "डेटा निर्भरताओं के लिए मेमोरी ऑर्डरिंग (शायद ही कभी उपयोग)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'fence' vs 'atomic operation with ordering'?",
    "question_hi": "'fence' बनाम 'atomic operation with ordering' क्या है?",
    "options_en": ["Fence orders all operations; atomic operation orders specific accesses", "Same", "No difference", "Only fences"],
    "options_hi": ["बाड़ सभी संक्रियाओं को क्रम देती है; परमाणु संक्रिया विशिष्ट एक्सेस को क्रम देती है", "समान", "कोई अंतर नहीं", "केवल बाड़"],
    "answer_en": "Fence orders all operations; atomic operation orders specific accesses",
    "answer_hi": "बाड़ सभी संक्रियाओं को क्रम देती है; परमाणु संक्रिया विशिष्ट एक्सेस को क्रम देती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'I/O stream buffering'?",
    "question_hi": "'I/O stream buffering' क्या है?",
    "options_en": ["Data buffered before write/read; fflush forces write", "No buffering", "Always immediate", "Only for files"],
    "options_hi": ["लिखने/पढ़ने से पहले डेटा बफर किया गया; fflush लिखावट बल देता है", "कोई बफरिंग नहीं", "हमेशा तत्काल", "केवल फ़ाइलों के लिए"],
    "answer_en": "Data buffered before write/read; fflush forces write",
    "answer_hi": "लिखने/पढ़ने से पहले डेटा बफर किया गया; fflush लिखावट बल देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'text stream' vs 'binary stream'?",
    "question_hi": "'text stream' बनाम 'binary stream' क्या है?",
    "options_en": ["Text: newline translation; Binary: raw bytes", "Same", "No difference", "Only text"],
    "options_hi": ["टेक्स्ट: न्यूलाइन अनुवाद; बाइनरी: कच्चे बाइट्स", "समान", "कोई अंतर नहीं", "केवल टेक्स्ट"],
    "answer_en": "Text: newline translation; Binary: raw bytes",
    "answer_hi": "टेक्स्ट: न्यूलाइन अनुवाद; बाइनरी: कच्चे बाइट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'file positioning error'?",
    "question_hi": "'file positioning error' क्या है?",
    "options_en": ["fseek/ftell fail (e.g., on non-seekable streams)", "Always work", "No positioning", "Only for binary"],
    "options_hi": ["fseek/ftell विफल (जैसे, गैर-सीक करने योग्य स्ट्रीम पर)", "हमेशा काम करता है", "कोई पोजिशनिंग नहीं", "केवल बाइनरी के लिए"],
    "answer_en": "fseek/ftell fail (e.g., on non-seekable streams)",
    "answer_hi": "fseek/ftell विफल (जैसे, गैर-सीक करने योग्य स्ट्रीम पर)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'wide-oriented' vs 'byte-oriented' stream?",
    "question_hi": "'wide-oriented' बनाम 'byte-oriented' स्ट्रीम क्या है?",
    "options_en": ["Wide: wchar_t functions; Byte: char functions; set by first I/O operation", "Same", "No orientation", "Always byte"],
    "options_hi": ["वाइड: wchar_t फ़ंक्शन्स; बाइट: char फ़ंक्शन्स; पहली I/O संक्रिया द्वारा निर्धारित", "समान", "कोई अभिविन्यास नहीं", "हमेशा बाइट"],
    "answer_en": "Wide: wchar_t functions; Byte: char functions; set by first I/O operation",
    "answer_hi": "वाइड: wchar_t फ़ंक्शन्स; बाइट: char फ़ंक्शन्स; पहली I/O संक्रिया द्वारा निर्धारित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'restrict' and function parameters?",
    "question_hi": "'restrict' और फ़ंक्शन पैरामीटर क्या है?",
    "options_en": ["restrict on pointer parameter promises no aliasing with other restrict pointers", "No promise", "Only for arrays", "No effect"],
    "options_hi": ["पॉइंटर पैरामीटर पर restrict अन्य restrict पॉइंटर्स के साथ कोई एलियासिंग न होने का वादा करता है", "कोई वादा नहीं", "केवल ऐरे के लिए", "कोई प्रभाव नहीं"],
    "answer_en": "restrict on pointer parameter promises no aliasing with other restrict pointers",
    "answer_hi": "पॉइंटर पैरामीटर पर restrict अन्य restrict पॉइंटर्स के साथ कोई एलियासिंग न होने का वादा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'variable length array' in function parameters?",
    "question_hi": "फ़ंक्शन पैरामीटर में 'variable length array' क्या है?",
    "options_en": ["int a[n] where n is another parameter", "Not allowed", "Only in main", "Only for pointers"],
    "options_hi": ["int a[n] जहाँ n एक अन्य पैरामीटर है", "अनुमति नहीं", "केवल main में", "केवल पॉइंटर्स के लिए"],
    "answer_en": "int a[n] where n is another parameter",
    "answer_hi": "int a[n] जहाँ n एक अन्य पैरामीटर है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'array parameter adjustment'?",
    "question_hi": "'array parameter adjustment' क्या है?",
    "options_en": ["Array parameter becomes pointer to element", "Remains array", "No adjustment", "Only for 1D arrays"],
    "options_hi": ["ऐरे पैरामीटर तत्व के पॉइंटर बन जाता है", "ऐरे बना रहता है", "कोई समायोजन नहीं", "केवल 1D ऐरे के लिए"],
    "answer_en": "Array parameter becomes pointer to element",
    "answer_hi": "ऐरे पैरामीटर तत्व के पॉइंटर बन जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'function designator' conversion in call?",
    "question_hi": "कॉल में 'function designator' रूपांतरण क्या है?",
    "options_en": ["Function designator converted to pointer to function", "No conversion", "Only for arrays", "Only for variables"],
    "options_hi": ["फ़ंक्शन डिज़ाइनेटर फ़ंक्शन के पॉइंटर में परिवर्तित", "कोई रूपांतरण नहीं", "केवल ऐरे के लिए", "केवल वेरिएबल्स के लिए"],
    "answer_en": "Function designator converted to pointer to function",
    "answer_hi": "फ़ंक्शन डिज़ाइनेटर फ़ंक्शन के पॉइंटर में परिवर्तित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'return statement' with expression in void function?",
    "question_hi": "void फ़ंक्शन में एक्सप्रेशन के साथ 'return statement' क्या है?",
    "options_en": ["Not allowed (C) / allowed (C++)", "Always allowed", "Never allowed", "Only for main"],
    "options_hi": ["अनुमति नहीं (C) / अनुमति (C++)", "हमेशा अनुमति", "कभी अनुमति नहीं", "केवल main के लिए"],
    "answer_en": "Not allowed (C) / allowed (C++)",
    "answer_hi": "अनुमति नहीं (C) / अनुमति (C++)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'implicit declaration' before C99?",
    "question_hi": "C99 से पहले 'implicit declaration' क्या है?",
    "options_en": ["Function implicitly declared as returning int if not declared", "Not allowed", "Always error", "Only for builtins"],
    "options_hi": ["फ़ंक्शन अंतर्निहित रूप से int लौटाने के रूप में घोषित यदि घोषित नहीं", "अनुमति नहीं", "हमेशा त्रुटि", "केवल बिल्टिन के लिए"],
    "answer_en": "Function implicitly declared as returning int if not declared",
    "answer_hi": "फ़ंक्शन अंतर्निहित रूप से int लौटाने के रूप में घोषित यदि घोषित नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'compatible declarations' across translation units?",
    "question_hi": "अनुवाद इकाइयों में 'compatible declarations' क्या है?",
    "options_en": ["Must be compatible (same type) for external linkage", "Can be different", "No requirement", "Only for variables"],
    "options_hi": ["बाहरी लिंकेज के लिए संगत होना चाहिए (समान प्रकार)", "भिन्न हो सकता है", "कोई आवश्यकता नहीं", "केवल वेरिएबल्स के लिए"],
    "answer_en": "Must be compatible (same type) for external linkage",
    "answer_hi": "बाहरी लिंकेज के लिए संगत होना चाहिए (समान प्रकार)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'tentative definition' resolution?",
    "question_hi": "'tentative definition' संकल्प क्या है?",
    "options_en": ["Multiple tentative definitions in same TU resolve to single definition", "Error", "Multiple objects", "No resolution"],
    "options_hi": ["एक ही TU में कई अस्थायी परिभाषाएं एकल परिभाषा में हल होती हैं", "त्रुटि", "कई वस्तुएं", "कोई संकल्प नहीं"],
    "answer_en": "Multiple tentative definitions in same TU resolve to single definition",
    "answer_hi": "एक ही TU में कई अस्थायी परिभाषाएं एकल परिभाषा में हल होती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'external definition'?",
    "question_hi": "'external definition' क्या है?",
    "options_en": ["Definition that also serves as declaration for other TUs", "Only declaration", "No external", "Only for functions"],
    "options_hi": ["परिभाषा जो अन्य TUs के लिए घोषणा के रूप में भी कार्य करती है", "केवल घोषणा", "कोई बाहरी नहीं", "केवल फ़ंक्शन के लिए"],
    "answer_en": "Definition that also serves as declaration for other TUs",
    "answer_hi": "परिभाषा जो अन्य TUs के लिए घोषणा के रूप में भी कार्य करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'translation unit' completion?",
    "question_hi": "'translation unit' पूर्णता क्या है?",
    "options_en": ["All declarations resolved, no missing definitions for used entities", "Can be incomplete", "No completion", "Only at link time"],
    "options_hi": ["सभी घोषणाएं हल, उपयोग किए गए इकाई के लिए कोई लापता परिभाषा नहीं", "अपूर्ण हो सकता है", "कोई पूर्णता नहीं", "केवल लिंक समय पर"],
    "answer_en": "All declarations resolved, no missing definitions for used entities",
    "answer_hi": "सभी घोषणाएं हल, उपयोग किए गए इकाई के लिए कोई लापता परिभाषा नहीं",
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