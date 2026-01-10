const questions=[
  {
    "num": 1,
    "question_en": "What is the output: int i = 3; printf(\"%d %d\", ++i, ++i);",
    "question_hi": "आउटपुट क्या है: int i = 3; printf(\"%d %d\", ++i, ++i);",
    "options_en": ["Undefined behavior", "4 5", "5 4", "4 4"],
    "options_hi": ["अपरिभाषित व्यवहार", "4 5", "5 4", "4 4"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the effect of #pragma GCC poison?",
    "question_hi": "#pragma GCC poison का प्रभाव क्या है?",
    "options_en": ["Makes identifier unusable", "Defines identifier", "Optimizes code", "Adds debugging info"],
    "options_hi": ["पहचानकर्ता को अप्रयुक्त बनाता है", "पहचानकर्ता को परिभाषित करता है", "कोड को अनुकूलित करता है", "डिबगिंग जानकारी जोड़ता है"],
    "answer_en": "Makes identifier unusable",
    "answer_hi": "पहचानकर्ता को अप्रयुक्त बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is a 'sequence point' in C?",
    "question_hi": "C में 'sequence point' क्या है?",
    "options_en": ["Point where all side effects complete", "Function call", "End of statement", "Both a and c"],
    "options_hi": ["बिंदु जहाँ सभी साइड इफेक्ट पूर्ण होते हैं", "फ़ंक्शन कॉल", "कथन का अंत", "a और c दोनों"],
    "answer_en": "Both a and c",
    "answer_hi": "a और c दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What does 'volatile' prevent?",
    "question_hi": "'volatile' क्या रोकता है?",
    "options_en": ["Compiler optimization of reads/writes", "Hardware changes", "Memory allocation", "Thread synchronization"],
    "options_hi": ["पढ़ने/लिखने का कंपाइलर ऑप्टिमाइज़ेशन", "हार्डवेयर परिवर्तन", "मेमोरी आवंटन", "थ्रेड सिंक्रनाइज़ेशन"],
    "answer_en": "Compiler optimization of reads/writes",
    "answer_hi": "पढ़ने/लिखने का कंपाइलर ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'strict aliasing rule'?",
    "question_hi": "'strict aliasing rule' क्या है?",
    "options_en": ["Objects of different types cannot alias", "Allows any aliasing", "Only for pointers", "Compiler-specific"],
    "options_hi": ["विभिन्न प्रकार की वस्तुएं एलियास नहीं कर सकतीं", "किसी भी एलियासिंग की अनुमति देता है", "केवल पॉइंटर्स के लिए", "कंपाइलर-विशिष्ट"],
    "answer_en": "Objects of different types cannot alias",
    "answer_hi": "विभिन्न प्रकार की वस्तुएं एलियास नहीं कर सकतीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'realloc' with size 0?",
    "question_hi": "size 0 के साथ 'realloc' क्या है?",
    "options_en": ["Implementation-defined (may free memory)", "Always returns NULL", "Always same pointer", "Undefined behavior"],
    "options_hi": ["कार्यान्वयन-परिभाषित (मेमोरी मुक्त कर सकता है)", "हमेशा NULL लौटाता है", "हमेशा समान पॉइंटर", "अपरिभाषित व्यवहार"],
    "answer_en": "Implementation-defined (may free memory)",
    "answer_hi": "कार्यान्वयन-परिभाषित (मेमोरी मुक्त कर सकता है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'restrict' keyword used for?",
    "question_hi": "'restrict' कीवर्ड का उपयोग किस लिए किया जाता है?",
    "options_en": ["Pointer optimization hint", "Memory restriction", "Read-only pointer", "Thread safety"],
    "options_hi": ["पॉइंटर ऑप्टिमाइज़ेशन संकेत", "मेमोरी प्रतिबंध", "केवल पढ़ने के लिए पॉइंटर", "थ्रेड सुरक्षा"],
    "answer_en": "Pointer optimization hint",
    "answer_hi": "पॉइंटर ऑप्टिमाइज़ेशन संकेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'flexible array member'?",
    "question_hi": "'flexible array member' क्या है?",
    "options_en": ["Array with unspecified size at end of struct", "Variable length array", "Dynamic array", "Pointer array"],
    "options_hi": ["संरचना के अंत में अनिर्दिष्ट आकार की सरणी", "परिवर्तनशील लंबाई सरणी", "गतिशील सरणी", "पॉइंटर सरणी"],
    "answer_en": "Array with unspecified size at end of struct",
    "answer_hi": "संरचना के अंत में अनिर्दिष्ट आकार की सरणी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'designated initializers'?",
    "question_hi": "'designated initializers' क्या है?",
    "options_en": ["Initialize specific struct/array members", "Auto initialization", "Default initialization", "Zero initialization"],
    "options_hi": ["विशिष्ट संरचना/सरणी सदस्यों को प्रारंभ करें", "स्वतः आरंभीकरण", "डिफ़ॉल्ट आरंभीकरण", "शून्य आरंभीकरण"],
    "answer_en": "Initialize specific struct/array members",
    "answer_hi": "विशिष्ट संरचना/सरणी सदस्यों को प्रारंभ करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'compound literals'?",
    "question_hi": "'compound literals' क्या है?",
    "options_en": ["Anonymous objects with initializers", "Literal constants", "String literals", "Numeric literals"],
    "options_hi": ["प्रारंभकर्ताओं के साथ अनाम वस्तुएं", "अक्षर स्थिरांक", "स्ट्रिंग लिटरल्स", "संख्यात्मक लिटरल्स"],
    "answer_en": "Anonymous objects with initializers",
    "answer_hi": "प्रारंभकर्ताओं के साथ अनाम वस्तुएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'type generic math' (<tgmath.h>)?",
    "question_hi": "'type generic math' (<tgmath.h>) क्या है?",
    "options_en": ["Macros for type-generic math functions", "Generic programming", "Template math", "No such header"],
    "options_hi": ["प्रकार-सामान्य गणित कार्यों के लिए मैक्रोज़", "सामान्य प्रोग्रामिंग", "टेम्प्लेट गणित", "ऐसा कोई हेडर नहीं"],
    "answer_en": "Macros for type-generic math functions",
    "answer_hi": "प्रकार-सामान्य गणित कार्यों के लिए मैक्रोज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'complex numbers support' in C?",
    "question_hi": "C में 'complex numbers support' क्या है?",
    "options_en": ["_Complex keyword and <complex.h>", "Only C++", "No support", "Only imaginary"],
    "options_hi": ["_Complex कीवर्ड और <complex.h>", "केवल C++", "कोई समर्थन नहीं", "केवल काल्पनिक"],
    "answer_en": "_Complex keyword and <complex.h>",
    "answer_hi": "_Complex कीवर्ड और <complex.h>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'atomic operations' in C11?",
    "question_hi": "C11 में 'atomic operations' क्या है?",
    "options_en": ["Operations on atomic types (<stdatomic.h>)", "Only mutex", "Only volatile", "No atomic"],
    "options_hi": ["परमाणु प्रकारों पर संचालन (<stdatomic.h>)", "केवल म्यूटेक्स", "केवल volatile", "कोई परमाणु नहीं"],
    "answer_en": "Operations on atomic types (<stdatomic.h>)",
    "answer_hi": "परमाणु प्रकारों पर संचालन (<stdatomic.h>)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'threads support' in C11?",
    "question_hi": "C11 में 'threads support' क्या है?",
    "options_en": ["<threads.h> for thread management", "Only pthreads", "No thread support", "Only C++"],
    "options_hi": ["थ्रेड प्रबंधन के लिए <threads.h>", "केवल pthreads", "कोई थ्रेड समर्थन नहीं", "केवल C++"],
    "answer_en": "<threads.h> for thread management",
    "answer_hi": "थ्रेड प्रबंधन के लिए <threads.h>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'bounds-checking interfaces'?",
    "question_hi": "'bounds-checking interfaces' क्या है?",
    "options_en": ["Annex K functions (gets_s, etc.)", "Array bounds checking", "Pointer validation", "No such thing"],
    "options_hi": ["अनुलग्नक K फ़ंक्शन (gets_s, आदि)", "सरणी सीमा जाँच", "पॉइंटर मान्यता", "ऐसी कोई चीज़ नहीं"],
    "answer_en": "Annex K functions (gets_s, etc.)",
    "answer_hi": "अनुलग्नक K फ़ंक्शन (gets_s, आदि)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'variable length arrays (VLA)'?",
    "question_hi": "'variable length arrays (VLA)' क्या है?",
    "options_en": ["Arrays with runtime size", "Dynamic arrays", "malloc arrays", "Fixed arrays"],
    "options_hi": ["रनटाइम आकार के साथ सरणियाँ", "गतिशील सरणियाँ", "malloc सरणियाँ", "निश्चित सरणियाँ"],
    "answer_en": "Arrays with runtime size",
    "answer_hi": "रनटाइम आकार के साथ सरणियाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'restrict-qualified parameters'?",
    "question_hi": "'restrict-qualified parameters' क्या है?",
    "options_en": ["Parameters that don't alias", "Constant parameters", "Reference parameters", "Output parameters"],
    "options_hi": ["पैरामीटर जो उपनाम नहीं रखते", "स्थिर पैरामीटर", "संदर्भ पैरामीटर", "आउटपुट पैरामीटर"],
    "answer_en": "Parameters that don't alias",
    "answer_hi": "पैरामीटर जो उपनाम नहीं रखते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'static array indices in parameters'?",
    "question_hi": "पैरामीटर में 'static array indices' क्या है?",
    "options_en": ["void f(int a[static 10])", "void f(int a[10])", "void f(int *a)", "No such syntax"],
    "options_hi": ["void f(int a[static 10])", "void f(int a[10])", "void f(int *a)", "ऐसा कोई सिंटैक्स नहीं"],
    "answer_en": "void f(int a[static 10])",
    "answer_hi": "void f(int a[static 10])",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'non-returning functions'?",
    "question_hi": "'non-returning functions' क्या है?",
    "options_en": ["Functions that don't return (_Noreturn)", "void functions", "Main function", "Recursive functions"],
    "options_hi": ["फ़ंक्शन जो वापस नहीं आते (_Noreturn)", "void फ़ंक्शन", "मुख्य फ़ंक्शन", "पुनरावर्ती फ़ंक्शन"],
    "answer_en": "Functions that don't return (_Noreturn)",
    "answer_hi": "फ़ंक्शन जो वापस नहीं आते (_Noreturn)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'alignment support' (_Alignas, _Alignof)?",
    "question_hi": "'alignment support' (_Alignas, _Alignof) क्या है?",
    "options_en": ["Control memory alignment", "Memory allocation", "Pointer alignment", "Data packing"],
    "options_hi": ["मेमोरी संरेखण नियंत्रण", "मेमोरी आवंटन", "पॉइंटर संरेखण", "डेटा पैकिंग"],
    "answer_en": "Control memory alignment",
    "answer_hi": "मेमोरी संरेखण नियंत्रण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'anonymous unions/structs'?",
    "question_hi": "'anonymous unions/structs' क्या है?",
    "options_en": ["Unions/structs without tag names", "Nested structs", "Typedef structs", "No anonymous"],
    "options_hi": ["टैग नामों के बिना यूनियन/संरचनाएँ", "नेस्टेड संरचनाएँ", "टाइपडेफ संरचनाएँ", "कोई अनाम नहीं"],
    "answer_en": "Unions/structs without tag names",
    "answer_hi": "टैग नामों के बिना यूनियन/संरचनाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'static assertions' (_Static_assert)?",
    "question_hi": "'static assertions' (_Static_assert) क्या है?",
    "options_en": ["Compile-time assertions", "Runtime assertions", "Debug assertions", "No assertions"],
    "options_hi": ["कंपाइल-टाइम असेर्शन", "रनटाइम असेर्शन", "डिबग असेर्शन", "कोई असेर्शन नहीं"],
    "answer_en": "Compile-time assertions",
    "answer_hi": "कंपाइल-टाइम असेर्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'defer' in C?",
    "question_hi": "C में 'defer' क्या है?",
    "options_en": ["Not in standard C (GCC cleanup attribute)", "Standard keyword", "Only in C++", "No such concept"],
    "options_hi": ["मानक C में नहीं (GCC cleanup विशेषता)", "मानक कीवर्ड", "केवल C++ में", "ऐसी कोई अवधारणा नहीं"],
    "answer_en": "Not in standard C (GCC cleanup attribute)",
    "answer_hi": "मानक C में नहीं (GCC cleanup विशेषता)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'transparent union' attribute?",
    "question_hi": "'transparent union' विशेषता क्या है?",
    "options_en": ["GCC attribute for union parameter passing", "Standard C", "C++ only", "No such attribute"],
    "options_hi": ["यूनियन पैरामीटर पासिंग के लिए GCC विशेषता", "मानक C", "केवल C++", "ऐसी कोई विशेषता नहीं"],
    "answer_en": "GCC attribute for union parameter passing",
    "answer_hi": "यूनियन पैरामीटर पासिंग के लिए GCC विशेषता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'packed' attribute?",
    "question_hi": "'packed' विशेषता क्या है?",
    "options_en": ["Minimize padding in structs", "Align structs", "Size structs", "No padding"],
    "options_hi": ["संरचनाओं में पैडिंग कम से कम करें", "संरचनाओं को संरेखित करें", "संरचनाओं का आकार", "कोई पैडिंग नहीं"],
    "answer_en": "Minimize padding in structs",
    "answer_hi": "संरचनाओं में पैडिंग कम से कम करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'cleanup' attribute?",
    "question_hi": "'cleanup' विशेषता क्या है?",
    "options_en": ["GCC: call function when variable goes out of scope", "Memory cleanup", "Garbage collection", "Standard C"],
    "options_hi": ["GCC: चर के स्कोप से बाहर जाने पर फ़ंक्शन कॉल करें", "मेमोरी सफाई", "कचरा संग्रह", "मानक C"],
    "answer_en": "GCC: call function when variable goes out of scope",
    "answer_hi": "GCC: चर के स्कोप से बाहर जाने पर फ़ंक्शन कॉल करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is '__attribute__((constructor))'?",
    "question_hi": "'__attribute__((constructor))' क्या है?",
    "options_en": ["Function runs before main()", "After main()", "During compilation", "No such attribute"],
    "options_hi": ["फ़ंक्शन main() से पहले चलता है", "main() के बाद", "संकलन के दौरान", "ऐसी कोई विशेषता नहीं"],
    "answer_en": "Function runs before main()",
    "answer_hi": "फ़ंक्शन main() से पहले चलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is '__attribute__((destructor))'?",
    "question_hi": "'__attribute__((destructor))' क्या है?",
    "options_en": ["Function runs after main()", "Before main()", "During exit", "No such attribute"],
    "options_hi": ["फ़ंक्शन main() के बाद चलता है", "main() से पहले", "निकास के दौरान", "ऐसी कोई विशेषता नहीं"],
    "answer_en": "Function runs after main()",
    "answer_hi": "फ़ंक्शन main() के बाद चलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'weak attribute'?",
    "question_hi": "'weak attribute' क्या है?",
    "options_en": ["Weak symbol that can be overridden", "Strong symbol", "No override", "Standard C"],
    "options_hi": ["कमजोर प्रतीक जिसे ओवरराइड किया जा सकता है", "मजबूत प्रतीक", "कोई ओवरराइड नहीं", "मानक C"],
    "answer_en": "Weak symbol that can be overridden",
    "answer_hi": "कमजोर प्रतीक जिसे ओवरराइड किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'alias attribute'?",
    "question_hi": "'alias attribute' क्या है?",
    "options_en": ["Create alias for function/variable", "Rename", "Delete", "Standard C"],
    "options_hi": ["फ़ंक्शन/वेरिएबल के लिए उपनाम बनाएं", "नाम बदलें", "हटाएं", "मानक C"],
    "answer_en": "Create alias for function/variable",
    "answer_hi": "फ़ंक्शन/वेरिएबल के लिए उपनाम बनाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'visibility attribute'?",
    "question_hi": "'visibility attribute' क्या है?",
    "options_en": ["Control symbol visibility in shared libraries", "Variable scope", "Function scope", "Standard C"],
    "options_hi": ["साझा लाइब्रेरी में प्रतीक दृश्यता नियंत्रित करें", "चर स्कोप", "फ़ंक्शन स्कोप", "मानक C"],
    "answer_en": "Control symbol visibility in shared libraries",
    "answer_hi": "साझा लाइब्रेरी में प्रतीक दृश्यता नियंत्रित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'section attribute'?",
    "question_hi": "'section attribute' क्या है?",
    "options_en": ["Place variable/function in specific section", "Memory section", "Code section", "Standard C"],
    "options_hi": ["विशिष्ट अनुभाग में चर/फ़ंक्शन रखें", "मेमोरी अनुभाग", "कोड अनुभाग", "मानक C"],
    "answer_en": "Place variable/function in specific section",
    "answer_hi": "विशिष्ट अनुभाग में चर/फ़ंक्शन रखें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'noinline attribute'?",
    "question_hi": "'noinline attribute' क्या है?",
    "options_en": ["Prevent function inlining", "Force inlining", "No optimization", "Standard C"],
    "options_hi": ["फ़ंक्शन इनलाइनिंग रोकें", "इनलाइनिंग बल दें", "कोई अनुकूलन नहीं", "मानक C"],
    "answer_en": "Prevent function inlining",
    "answer_hi": "फ़ंक्शन इनलाइनिंग रोकें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'always_inline attribute'?",
    "question_hi": "'always_inline attribute' क्या है?",
    "options_en": ["Force function inlining", "Prevent inlining", "Optional inlining", "Standard C"],
    "options_hi": ["फ़ंक्शन इनलाइनिंग बल दें", "इनलाइनिंग रोकें", "वैकल्पिक इनलाइनिंग", "मानक C"],
    "answer_en": "Force function inlining",
    "answer_hi": "फ़ंक्शन इनलाइनिंग बल दें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'hot attribute'?",
    "question_hi": "'hot attribute' क्या है?",
    "options_en": ["Function is frequently executed", "Rarely executed", "Cold function", "Standard C"],
    "options_hi": ["फ़ंक्शन बार-बार निष्पादित होता है", "शायद ही कभी निष्पादित", "कोल्ड फ़ंक्शन", "मानक C"],
    "answer_en": "Function is frequently executed",
    "answer_hi": "फ़ंक्शन बार-बार निष्पादित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'cold attribute'?",
    "question_hi": "'cold attribute' क्या है?",
    "options_en": ["Function is rarely executed", "Frequently executed", "Hot function", "Standard C"],
    "options_hi": ["फ़ंक्शन शायद ही कभी निष्पादित होता है", "बार-बार निष्पादित", "हॉट फ़ंक्शन", "मानक C"],
    "answer_en": "Function is rarely executed",
    "answer_hi": "फ़ंक्शन शायद ही कभी निष्पादित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'pure attribute'?",
    "question_hi": "'pure attribute' क्या है?",
    "options_en": ["Function has no side effects", "Has side effects", "Modifies global state", "Standard C"],
    "options_hi": ["फ़ंक्शन का कोई साइड इफेक्ट नहीं है", "साइड इफेक्ट है", "वैश्विक स्थिति संशोधित करता है", "मानक C"],
    "answer_en": "Function has no side effects",
    "answer_hi": "फ़ंक्शन का कोई साइड इफेक्ट नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'const attribute'?",
    "question_hi": "'const attribute' क्या है?",
    "options_en": ["Function depends only on parameters", "Depends on globals", "Has side effects", "Standard C"],
    "options_hi": ["फ़ंक्शन केवल पैरामीटर पर निर्भर करता है", "वैश्विक पर निर्भर करता है", "साइड इफेक्ट है", "मानक C"],
    "answer_en": "Function depends only on parameters",
    "answer_hi": "फ़ंक्शन केवल पैरामीटर पर निर्भर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'malloc attribute'?",
    "question_hi": "'malloc attribute' क्या है?",
    "options_en": ["Function returns pointer to unaliased memory", "Returns aliased memory", "No return", "Standard C"],
    "options_hi": ["फ़ंक्शन गैर-उपनामित मेमोरी का पॉइंटर लौटाता है", "उपनामित मेमोरी लौटाता है", "कोई रिटर्न नहीं", "मानक C"],
    "answer_en": "Function returns pointer to unaliased memory",
    "answer_hi": "फ़ंक्शन गैर-उपनामित मेमोरी का पॉइंटर लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'returns_nonnull attribute'?",
    "question_hi": "'returns_nonnull attribute' क्या है?",
    "options_en": ["Function never returns NULL", "May return NULL", "Always returns NULL", "Standard C"],
    "options_hi": ["फ़ंक्शन कभी NULL नहीं लौटाता", "NULL लौटा सकता है", "हमेशा NULL लौटाता है", "मानक C"],
    "answer_en": "Function never returns NULL",
    "answer_hi": "फ़ंक्शन कभी NULL नहीं लौटाता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'unused attribute'?",
    "question_hi": "'unused attribute' क्या है?",
    "options_en": ["Suppress unused warning", "Force usage", "Mark as used", "Standard C"],
    "options_hi": ["अप्रयुक्त चेतावनी दबाएं", "उपयोग बल दें", "प्रयुक्त के रूप में चिह्नित करें", "मानक C"],
    "answer_en": "Suppress unused warning",
    "answer_hi": "अप्रयुक्त चेतावनी दबाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'used attribute'?",
    "question_hi": "'used attribute' क्या है?",
    "options_en": ["Keep symbol even if unused", "Remove if unused", "Force usage", "Standard C"],
    "options_hi": ["प्रतीक को अप्रयुक्त होने पर भी रखें", "अप्रयुक्त होने पर हटाएं", "उपयोग बल दें", "मानक C"],
    "answer_en": "Keep symbol even if unused",
    "answer_hi": "प्रतीक को अप्रयुक्त होने पर भी रखें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'deprecated attribute'?",
    "question_hi": "'deprecated attribute' क्या है?",
    "options_en": ["Warn if used", "Error if used", "No warning", "Standard C"],
    "options_hi": ["उपयोग करने पर चेतावनी दें", "उपयोग करने पर त्रुटि", "कोई चेतावनी नहीं", "मानक C"],
    "answer_en": "Warn if used",
    "answer_hi": "उपयोग करने पर चेतावनी दें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is '__builtin_expect'?",
    "question_hi": "'__builtin_expect' क्या है?",
    "options_en": ["Branch prediction hint", "Loop optimization", "Function inlining", "Standard C"],
    "options_hi": ["शाखा भविष्यवाणी संकेत", "लूप अनुकूलन", "फ़ंक्शन इनलाइनिंग", "मानक C"],
    "answer_en": "Branch prediction hint",
    "answer_hi": "शाखा भविष्यवाणी संकेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is '__builtin_prefetch'?",
    "question_hi": "'__builtin_prefetch' क्या है?",
    "options_en": ["Prefetch data into cache", "Clear cache", "Flush cache", "Standard C"],
    "options_hi": ["कैश में डेटा प्रीफ़ेच करें", "कैश साफ़ करें", "कैश फ़्लश करें", "मानक C"],
    "answer_en": "Prefetch data into cache",
    "answer_hi": "कैश में डेटा प्रीफ़ेच करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is '__builtin_clz'?",
    "question_hi": "'__builtin_clz' क्या है?",
    "options_en": ["Count leading zeros", "Count trailing zeros", "Count ones", "Standard C"],
    "options_hi": ["अग्रणी शून्य गिनें", "अनुगामी शून्य गिनें", "एक गिनें", "मानक C"],
    "answer_en": "Count leading zeros",
    "answer_hi": "अग्रणी शून्य गिनें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is '__builtin_ctz'?",
    "question_hi": "'__builtin_ctz' क्या है?",
    "options_en": ["Count trailing zeros", "Count leading zeros", "Count ones", "Standard C"],
    "options_hi": ["अनुगामी शून्य गिनें", "अग्रणी शून्य गिनें", "एक गिनें", "मानक C"],
    "answer_en": "Count trailing zeros",
    "answer_hi": "अनुगामी शून्य गिनें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is '__builtin_popcount'?",
    "question_hi": "'__builtin_popcount' क्या है?",
    "options_en": ["Count number of 1 bits", "Count zeros", "Count bits", "Standard C"],
    "options_hi": ["1 बिट्स की संख्या गिनें", "शून्य गिनें", "बिट्स गिनें", "मानक C"],
    "answer_en": "Count number of 1 bits",
    "answer_hi": "1 बिट्स की संख्या गिनें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is '__builtin_parity'?",
    "question_hi": "'__builtin_parity' क्या है?",
    "options_en": ["Parity of number of 1 bits", "Even parity", "Odd parity", "Standard C"],
    "options_hi": ["1 बिट्स की संख्या की समता", "सम समता", "विषम समता", "मानक C"],
    "answer_en": "Parity of number of 1 bits",
    "answer_hi": "1 बिट्स की संख्या की समता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is '__builtin_bswap32'?",
    "question_hi": "'__builtin_bswap32' क्या है?",
    "options_en": ["Byte swap 32-bit integer", "Bit swap", "Byte reverse", "Standard C"],
    "options_hi": ["बाइट स्वैप 32-बिट पूर्णांक", "बिट स्वैप", "बाइट रिवर्स", "मानक C"],
    "answer_en": "Byte swap 32-bit integer",
    "answer_hi": "बाइट स्वैप 32-बिट पूर्णांक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'link-time optimization (LTO)'?",
    "question_hi": "'link-time optimization (LTO)' क्या है?",
    "options_en": ["Optimization across translation units", "Within unit only", "No optimization", "Standard C"],
    "options_hi": ["अनुवाद इकाइयों में अनुकूलन", "केवल इकाई के भीतर", "कोई अनुकूलन नहीं", "मानक C"],
    "answer_en": "Optimization across translation units",
    "answer_hi": "अनुवाद इकाइयों में अनुकूलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'profile-guided optimization (PGO)'?",
    "question_hi": "'profile-guided optimization (PGO)' क्या है?",
    "options_en": ["Optimization based on runtime profiles", "Static optimization", "No profiles", "Standard C"],
    "options_hi": ["रनटाइम प्रोफाइल के आधार पर अनुकूलन", "स्थैतिक अनुकूलन", "कोई प्रोफाइल नहीं", "मानक C"],
    "answer_en": "Optimization based on runtime profiles",
    "answer_hi": "रनटाइम प्रोफाइल के आधार पर अनुकूलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'dead code elimination'?",
    "question_hi": "'dead code elimination' क्या है?",
    "options_en": ["Remove unreachable code", "Remove comments", "Remove whitespace", "Standard C"],
    "options_hi": ["अपहनीय कोड हटाएं", "टिप्पणियाँ हटाएं", "रिक्त स्थान हटाएं", "मानक C"],
    "answer_en": "Remove unreachable code",
    "answer_hi": "अपहनीय कोड हटाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'common subexpression elimination'?",
    "question_hi": "'common subexpression elimination' क्या है?",
    "options_en": ["Reuse computed expressions", "Remove expressions", "Simplify expressions", "Standard C"],
    "options_hi": ["गणितीय व्यंजकों का पुन: उपयोग", "व्यंजक हटाएं", "व्यंजक सरल करें", "मानक C"],
    "answer_en": "Reuse computed expressions",
    "answer_hi": "गणितीय व्यंजकों का पुन: उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'constant propagation'?",
    "question_hi": "'constant propagation' क्या है?",
    "options_en": ["Replace variables with constants", "Make variables constant", "Remove constants", "Standard C"],
    "options_hi": ["चर को स्थिरांक से बदलें", "चर को स्थिर बनाएं", "स्थिरांक हटाएं", "मानक C"],
    "answer_en": "Replace variables with constants",
    "answer_hi": "चर को स्थिरांक से बदलें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'loop unrolling'?",
    "question_hi": "'loop unrolling' क्या है?",
    "options_en": ["Duplicate loop body to reduce overhead", "Remove loops", "Simplify loops", "Standard C"],
    "options_hi": ["ओवरहेड कम करने के लिए लूप बॉडी डुप्लिकेट करें", "लूप हटाएं", "लूप सरल करें", "मानक C"],
    "answer_en": "Duplicate loop body to reduce overhead",
    "answer_hi": "ओवरहेड कम करने के लिए लूप बॉडी डुप्लिकेट करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'function inlining'?",
    "question_hi": "'function inlining' क्या है?",
    "options_en": ["Replace call with function body", "Remove function", "Copy function", "Standard C"],
    "options_hi": ["कॉल को फ़ंक्शन बॉडी से बदलें", "फ़ंक्शन हटाएं", "फ़ंक्शन कॉपी करें", "मानक C"],
    "answer_en": "Replace call with function body",
    "answer_hi": "कॉल को फ़ंक्शन बॉडी से बदलें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'tail call optimization'?",
    "question_hi": "'tail call optimization' क्या है?",
    "options_en": ["Reuse stack frame for tail recursion", "Remove recursion", "Convert to loop", "Standard C"],
    "options_hi": ["टेल रिकर्सन के लिए स्टैक फ्रेम का पुन: उपयोग", "रिकर्सन हटाएं", "लूप में बदलें", "मानक C"],
    "answer_en": "Reuse stack frame for tail recursion",
    "answer_hi": "टेल रिकर्सन के लिए स्टैक फ्रेम का पुन: उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'stack protector'?",
    "question_hi": "'stack protector' क्या है?",
    "options_en": ["Protect against stack overflow", "Stack allocation", "Stack deallocation", "Standard C"],
    "options_hi": ["स्टैक ओवरफ्लो से बचाएं", "स्टैक आवंटन", "स्टैक डीलोकेशन", "मानक C"],
    "answer_en": "Protect against stack overflow",
    "answer_hi": "स्टैक ओवरफ्लो से बचाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'address sanitizer'?",
    "question_hi": "'address sanitizer' क्या है?",
    "options_en": ["Detect memory errors at runtime", "Compile-time checking", "Static analysis", "Standard C"],
    "options_hi": ["रनटाइम पर मेमोरी त्रुटियों का पता लगाएं", "कंपाइल-टाइम जाँच", "स्थैतिक विश्लेषण", "मानक C"],
    "answer_en": "Detect memory errors at runtime",
    "answer_hi": "रनटाइम पर मेमोरी त्रुटियों का पता लगाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'undefined behavior sanitizer'?",
    "question_hi": "'undefined behavior sanitizer' क्या है?",
    "options_en": ["Detect undefined behavior at runtime", "Compile-time detection", "Prevent UB", "Standard C"],
    "options_hi": ["रनटाइम पर अपरिभाषित व्यवहार का पता लगाएं", "कंपाइल-टाइम पता लगाना", "UB रोकें", "मानक C"],
    "answer_en": "Detect undefined behavior at runtime",
    "answer_hi": "रनटाइम पर अपरिभाषित व्यवहार का पता लगाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'thread sanitizer'?",
    "question_hi": "'thread sanitizer' क्या है?",
    "options_en": ["Detect data races", "Detect deadlocks", "Thread creation", "Standard C"],
    "options_hi": ["डेटा रेस का पता लगाएं", "डेडलॉक का पता लगाएं", "थ्रेड निर्माण", "मानक C"],
    "answer_en": "Detect data races",
    "answer_hi": "डेटा रेस का पता लगाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'memory sanitizer'?",
    "question_hi": "'memory sanitizer' क्या है?",
    "options_en": ["Detect uninitialized memory reads", "Memory leaks", "Memory corruption", "Standard C"],
    "options_hi": ["अप्रारंभिक मेमोरी रीड का पता लगाएं", "मेमोरी लीक", "मेमोरी दूषण", "मानक C"],
    "answer_en": "Detect uninitialized memory reads",
    "answer_hi": "अप्रारंभिक मेमोरी रीड का पता लगाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'leak sanitizer'?",
    "question_hi": "'leak sanitizer' क्या है?",
    "options_en": ["Detect memory leaks", "Detect corruption", "Detect races", "Standard C"],
    "options_hi": ["मेमोरी लीक का पता लगाएं", "दूषण का पता लगाएं", "रेस का पता लगाएं", "मानक C"],
    "answer_en": "Detect memory leaks",
    "answer_hi": "मेमोरी लीक का पता लगाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'fuzzing'?",
    "question_hi": "'fuzzing' क्या है?",
    "options_en": ["Automated testing with random inputs", "Manual testing", "Unit testing", "Standard C"],
    "options_hi": ["यादृच्छिक इनपुट के साथ स्वचालित परीक्षण", "मैनुअल परीक्षण", "यूनिट परीक्षण", "मानक C"],
    "answer_en": "Automated testing with random inputs",
    "answer_hi": "यादृच्छिक इनपुट के साथ स्वचालित परीक्षण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'sanitizer coverage'?",
    "question_hi": "'sanitizer coverage' क्या है?",
    "options_en": ["Code coverage instrumentation", "Test coverage", "Branch coverage", "Standard C"],
    "options_hi": ["कोड कवरेज इंस्ट्रूमेंटेशन", "परीक्षण कवरेज", "शाखा कवरेज", "मानक C"],
    "answer_en": "Code coverage instrumentation",
    "answer_hi": "कोड कवरेज इंस्ट्रूमेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'position independent code (PIC)'?",
    "question_hi": "'position independent code (PIC)' क्या है?",
    "options_en": ["Code that works at any memory address", "Fixed address code", "Relocatable code", "Standard C"],
    "options_hi": ["कोड जो किसी भी मेमोरी एड्रेस पर काम करता है", "निश्चित पता कोड", "पुन: स्थानीय कोड", "मानक C"],
    "answer_en": "Code that works at any memory address",
    "answer_hi": "कोड जो किसी भी मेमोरी एड्रेस पर काम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'position independent executable (PIE)'?",
    "question_hi": "'position independent executable (PIE)' क्या है?",
    "options_en": ["Executable using ASLR", "Fixed address executable", "Shared library", "Standard C"],
    "options_hi": ["ASLR का उपयोग करने वाला निष्पादन योग्य", "निश्चित पता निष्पादन योग्य", "साझा लाइब्रेरी", "मानक C"],
    "answer_en": "Executable using ASLR",
    "answer_hi": "ASLR का उपयोग करने वाला निष्पादन योग्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'ASLR'?",
    "question_hi": "'ASLR' क्या है?",
    "options_en": ["Address space layout randomization", "Memory allocation", "Stack protection", "Standard C"],
    "options_hi": ["पता स्थान लेआउट यादृच्छिकता", "मेमोरी आवंटन", "स्टैक सुरक्षा", "मानक C"],
    "answer_en": "Address space layout randomization",
    "answer_hi": "पता स्थान लेआउट यादृच्छिकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'stack canary'?",
    "question_hi": "'stack canary' क्या है?",
    "options_en": ["Random value to detect stack overflow", "Stack pointer", "Frame pointer", "Standard C"],
    "options_hi": ["स्टैक ओवरफ्लो का पता लगाने के लिए यादृच्छिक मान", "स्टैक पॉइंटर", "फ्रेम पॉइंटर", "मानक C"],
    "answer_en": "Random value to detect stack overflow",
    "answer_hi": "स्टैक ओवरफ्लो का पता लगाने के लिए यादृच्छिक मान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'return address protection'?",
    "question_hi": "'return address protection' क्या है?",
    "options_en": ["Protect return address from overwrite", "Protect stack", "Protect heap", "Standard C"],
    "options_hi": ["रिटर्न एड्रेस को ओवरराइट से बचाएं", "स्टैक सुरक्षित करें", "हीप सुरक्षित करें", "मानक C"],
    "answer_en": "Protect return address from overwrite",
    "answer_hi": "रिटर्न एड्रेस को ओवरराइट से बचाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'control flow integrity'?",
    "question_hi": "'control flow integrity' क्या है?",
    "options_en": ["Protect indirect calls/jumps", "Protect direct calls", "Protect returns", "Standard C"],
    "options_hi": ["अप्रत्यक्ष कॉल/जंप सुरक्षित करें", "प्रत्यक्ष कॉल सुरक्षित करें", "रिटर्न सुरक्षित करें", "मानक C"],
    "answer_en": "Protect indirect calls/jumps",
    "answer_hi": "अप्रत्यक्ष कॉल/जंप सुरक्षित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'shadow stack'?",
    "question_hi": "'shadow stack' क्या है?",
    "options_en": ["Separate stack for return addresses", "Main stack", "Heap stack", "Standard C"],
    "options_hi": ["रिटर्न एड्रेस के लिए अलग स्टैक", "मुख्य स्टैक", "हीप स्टैक", "मानक C"],
    "answer_en": "Separate stack for return addresses",
    "answer_hi": "रिटर्न एड्रेस के लिए अलग स्टैक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'safe stack'?",
    "question_hi": "'safe stack' क्या है?",
    "options_en": ["Separate safe/unsafe stacks", "Single stack", "Protected stack", "Standard C"],
    "options_hi": ["अलग सुरक्षित/असुरक्षित स्टैक", "एकल स्टैक", "संरक्षित स्टैक", "मानक C"],
    "answer_en": "Separate safe/unsafe stacks",
    "answer_hi": "अलग सुरक्षित/असुरक्षित स्टैक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'hardening'?",
    "question_hi": "'hardening' क्या है?",
    "options_en": ["Security protections in compiled code", "Optimizations", "Debugging", "Standard C"],
    "options_hi": ["संकलित कोड में सुरक्षा सुरक्षा", "अनुकूलन", "डिबगिंग", "मानक C"],
    "answer_en": "Security protections in compiled code",
    "answer_hi": "संकलित कोड में सुरक्षा सुरक्षा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'format string vulnerability'?",
    "question_hi": "'format string vulnerability' क्या है?",
    "options_en": ["Attack using printf format strings", "Buffer overflow", "Integer overflow", "Standard C"],
    "options_hi": ["printf फॉर्मेट स्ट्रिंग का उपयोग कर हमला", "बफर ओवरफ्लो", "पूर्णांक ओवरफ्लो", "मानक C"],
    "answer_en": "Attack using printf format strings",
    "answer_hi": "printf फॉर्मेट स्ट्रिंग का उपयोग कर हमला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'heap spraying'?",
    "question_hi": "'heap spraying' क्या है?",
    "options_en": ["Fill heap with attacker-controlled data", "Heap fragmentation", "Heap compression", "Standard C"],
    "options_hi": ["हमलावर-नियंत्रित डेटा से हीप भरें", "हीप विखंडन", "हीप संपीड़न", "मानक C"],
    "answer_en": "Fill heap with attacker-controlled data",
    "answer_hi": "हमलावर-नियंत्रित डेटा से हीप भरें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'ROP'?",
    "question_hi": "'ROP' क्या है?",
    "options_en": ["Return-oriented programming attack", "Stack overflow", "Heap overflow", "Standard C"],
    "options_hi": ["रिटर्न-ओरिएंटेड प्रोग्रामिंग हमला", "स्टैक ओवरफ्लो", "हीप ओवरफ्लो", "मानक C"],
    "answer_en": "Return-oriented programming attack",
    "answer_hi": "रिटर्न-ओरिएंटेड प्रोग्रामिंग हमला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'JOP'?",
    "question_hi": "'JOP' क्या है?",
    "options_en": ["Jump-oriented programming attack", "ROP variant", "Call-oriented", "Standard C"],
    "options_hi": ["जंप-ओरिएंटेड प्रोग्रामिंग हमला", "ROP प्रकार", "कॉल-ओरिएंटेड", "मानक C"],
    "answer_en": "Jump-oriented programming attack",
    "answer_hi": "जंप-ओरिएंटेड प्रोग्रामिंग हमला",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'code reuse attack'?",
    "question_hi": "'code reuse attack' क्या है?",
    "options_en": ["Reuse existing code for attack", "Inject new code", "Modify code", "Standard C"],
    "options_hi": ["हमले के लिए मौजूदा कोड का पुन: उपयोग", "नया कोड इंजेक्ट करें", "कोड संशोधित करें", "मानक C"],
    "answer_en": "Reuse existing code for attack",
    "answer_hi": "हमले के लिए मौजूदा कोड का पुन: उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'memory tagging'?",
    "question_hi": "'memory tagging' क्या है?",
    "options_en": ["Tag memory regions for safety", "Memory labels", "Memory colors", "Standard C"],
    "options_hi": ["सुरक्षा के लिए मेमोरी क्षेत्र टैग करें", "मेमोरी लेबल", "मेमोरी रंग", "मानक C"],
    "answer_en": "Tag memory regions for safety",
    "answer_hi": "सुरक्षा के लिए मेमोरी क्षेत्र टैग करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'MPX'?",
    "question_hi": "'MPX' क्या है?",
    "options_en": ["Memory Protection Extensions", "Memory allocation", "Memory protection", "Standard C"],
    "options_hi": ["मेमोरी प्रोटेक्शन एक्सटेंशन", "मेमोरी आवंटन", "मेमोरी सुरक्षा", "मानक C"],
    "answer_en": "Memory Protection Extensions",
    "answer_hi": "मेमोरी प्रोटेक्शन एक्सटेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'CET'?",
    "question_hi": "'CET' क्या है?",
    "options_en": ["Control-flow Enforcement Technology", "Stack protection", "Heap protection", "Standard C"],
    "options_hi": ["कंट्रोल-फ्लो एनफोर्समेंट टेक्नोलॉजी", "स्टैक सुरक्षा", "हीप सुरक्षा", "मानक C"],
    "answer_en": "Control-flow Enforcement Technology",
    "answer_hi": "कंट्रोल-फ्लो एनफोर्समेंट टेक्नोलॉजी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'SGX'?",
    "question_hi": "'SGX' क्या है?",
    "options_en": ["Software Guard Extensions", "Hardware encryption", "Secure enclaves", "Standard C"],
    "options_hi": ["सॉफ्टवेयर गार्ड एक्सटेंशन", "हार्डवेयर एन्क्रिप्शन", "सुरक्षित एन्क्लेव", "मानक C"],
    "answer_en": "Software Guard Extensions",
    "answer_hi": "सॉफ्टवेयर गार्ड एक्सटेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'TME'?",
    "question_hi": "'TME' क्या है?",
    "options_en": ["Total Memory Encryption", "Partial encryption", "No encryption", "Standard C"],
    "options_hi": ["टोटल मेमोरी एन्क्रिप्शन", "आंशिक एन्क्रिप्शन", "कोई एन्क्रिप्शन नहीं", "मानक C"],
    "answer_en": "Total Memory Encryption",
    "answer_hi": "टोटल मेमोरी एन्क्रिप्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'TDX'?",
    "question_hi": "'TDX' क्या है?",
    "options_en": ["Trust Domain Extensions", "Trusted execution", "Secure domains", "Standard C"],
    "options_hi": ["ट्रस्ट डोमेन एक्सटेंशन", "विश्वसनीय निष्पादन", "सुरक्षित डोमेन", "मानक C"],
    "answer_en": "Trust Domain Extensions",
    "answer_hi": "ट्रस्ट डोमेन एक्सटेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'SEV'?",
    "question_hi": "'SEV' क्या है?",
    "options_en": ["Secure Encrypted Virtualization", "Virtualization security", "VM encryption", "Standard C"],
    "options_hi": ["सिक्योर एन्क्रिप्टेड वर्चुअलाइजेशन", "वर्चुअलाइजेशन सुरक्षा", "VM एन्क्रिप्शन", "मानक C"],
    "answer_en": "Secure Encrypted Virtualization",
    "answer_hi": "सिक्योर एन्क्रिप्टेड वर्चुअलाइजेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'UEFI'?",
    "question_hi": "'UEFI' क्या है?",
    "options_en": ["Unified Extensible Firmware Interface", "BIOS replacement", "Boot firmware", "Standard C"],
    "options_hi": ["यूनिफाइड एक्सटेंसिबल फर्मवेयर इंटरफेस", "BIOS प्रतिस्थापन", "बूट फर्मवेयर", "मानक C"],
    "answer_en": "Unified Extensible Firmware Interface",
    "answer_hi": "यूनिफाइड एक्सटेंसिबल फर्मवेयर इंटरफेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'ACPI'?",
    "question_hi": "'ACPI' क्या है?",
    "options_en": ["Advanced Configuration and Power Interface", "Power management", "Hardware configuration", "Standard C"],
    "options_hi": ["एडवांस्ड कॉन्फिगरेशन और पावर इंटरफेस", "पावर प्रबंधन", "हार्डवेयर कॉन्फिगरेशन", "मानक C"],
    "answer_en": "Advanced Configuration and Power Interface",
    "answer_hi": "एडवांस्ड कॉन्फिगरेशन और पावर इंटरफेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'SMBIOS'?",
    "question_hi": "'SMBIOS' क्या है?",
    "options_en": ["System Management BIOS", "System information", "Hardware info", "Standard C"],
    "options_hi": ["सिस्टम मैनेजमेंट BIOS", "सिस्टम जानकारी", "हार्डवेयर जानकारी", "मानक C"],
    "answer_en": "System Management BIOS",
    "answer_hi": "सिस्टम मैनेजमेंट BIOS",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'device tree'?",
    "question_hi": "'device tree' क्या है?",
    "options_en": ["Hardware description for embedded systems", "Device driver", "Hardware tree", "Standard C"],
    "options_hi": ["एम्बेडेड सिस्टम के लिए हार्डवेयर विवरण", "डिवाइस ड्राइवर", "हार्डवेयर ट्री", "मानक C"],
    "answer_en": "Hardware description for embedded systems",
    "answer_hi": "एम्बेडेड सिस्टम के लिए हार्डवेयर विवरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'FDT'?",
    "question_hi": "'FDT' क्या है?",
    "options_en": ["Flattened Device Tree", "Device tree format", "Binary format", "Standard C"],
    "options_hi": ["फ्लैटनड डिवाइस ट्री", "डिवाइस ट्री प्रारूप", "बाइनरी प्रारूप", "मानक C"],
    "answer_en": "Flattened Device Tree",
    "answer_hi": "फ्लैटनड डिवाइस ट्री",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'Open Firmware'?",
    "question_hi": "'Open Firmware' क्या है?",
    "options_en": ["Firmware standard using FDT", "BIOS standard", "UEFI predecessor", "Standard C"],
    "options_hi": ["FDT का उपयोग कर फर्मवेयर मानक", "BIOS मानक", "UEFI पूर्ववर्ती", "मानक C"],
    "answer_en": "Firmware standard using FDT",
    "answer_hi": "FDT का उपयोग कर फर्मवेयर मानक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'coreboot'?",
    "question_hi": "'coreboot' क्या है?",
    "options_en": ["Open source firmware", "Proprietary firmware", "UEFI implementation", "Standard C"],
    "options_hi": ["ओपन सोर्स फर्मवेयर", "मालिकाना फर्मवेयर", "UEFI कार्यान्वयन", "मानक C"],
    "answer_en": "Open source firmware",
    "answer_hi": "ओपन सोर्स फर्मवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'U-Boot'?",
    "question_hi": "'U-Boot' क्या है?",
    "options_en": ["Universal bootloader for embedded", "PC bootloader", "UEFI bootloader", "Standard C"],
    "options_hi": ["एम्बेडेड के लिए यूनिवर्सल बूटलोडर", "PC बूटलोडर", "UEFI बूटलोडर", "मानक C"],
    "answer_en": "Universal bootloader for embedded",
    "answer_hi": "एम्बेडेड के लिए यूनिवर्सल बूटलोडर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'GRUB'?",
    "question_hi": "'GRUB' क्या है?",
    "options_en": ["Grand Unified Bootloader", "Linux bootloader", "Multiboot loader", "Standard C"],
    "options_hi": ["ग्रैंड यूनिफाइड बूटलोडर", "लिनक्स बूटलोडर", "मल्टीबूट लोडर", "मानक C"],
    "answer_en": "Grand Unified Bootloader",
    "answer_hi": "ग्रैंड यूनिफाइड बूटलोडर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'multiboot specification'?",
    "question_hi": "'multiboot specification' क्या है?",
    "options_en": ["Standard for bootloaders and kernels", "Boot protocol", "Kernel interface", "Standard C"],
    "options_hi": ["बूटलोडर और कर्नेल के लिए मानक", "बूट प्रोटोकॉल", "कर्नेल इंटरफेस", "मानक C"],
    "answer_en": "Standard for bootloaders and kernels",
    "answer_hi": "बूटलोडर और कर्नेल के लिए मानक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'EFI system partition'?",
    "question_hi": "'EFI system partition' क्या है?",
    "options_en": ["FAT32 partition for UEFI boot", "Boot partition", "System partition", "Standard C"],
    "options_hi": ["UEFI बूट के लिए FAT32 विभाजन", "बूट विभाजन", "सिस्टम विभाजन", "मानक C"],
    "answer_en": "FAT32 partition for UEFI boot",
    "answer_hi": "UEFI बूट के लिए FAT32 विभाजन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'boot sector'?",
    "question_hi": "'boot sector' क्या है?",
    "options_en": ["First sector of bootable disk", "MBR sector", "Boot code sector", "Standard C"],
    "options_hi": ["बूट करने योग्य डिस्क का पहला सेक्टर", "MBR सेक्टर", "बूट कोड सेक्टर", "मानक C"],
    "answer_en": "First sector of bootable disk",
    "answer_hi": "बूट करने योग्य डिस्क का पहला सेक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'chain loading'?",
    "question_hi": "'chain loading' क्या है?",
    "options_en": ["Bootloader loads another bootloader", "Direct boot", "Kernel loading", "Standard C"],
    "options_hi": ["बूटलोडर दूसरा बूटलोडर लोड करता है", "प्रत्यक्ष बूट", "कर्नेल लोडिंग", "मानक C"],
    "answer_en": "Bootloader loads another bootloader",
    "answer_hi": "बूटलोडर दूसरा बूटलोडर लोड करता है",
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