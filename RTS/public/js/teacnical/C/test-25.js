const questions=[
  {
    "num": 1,
    "question_en": "What is the purpose of 'restrict' keyword in function parameters?",
    "question_hi": "फ़ंक्शन पैरामीटर्स में 'restrict' कीवर्ड का उद्देश्य क्या है?",
    "options_en": [
      "Indicates pointers don't alias, enabling optimizations",
      "Restricts pointer access",
      "Makes pointers read-only",
      "No purpose"
    ],
    "options_hi": [
      "इंगित करता है कि पॉइंटर्स एलियास नहीं करते, ऑप्टिमाइज़ेशन सक्षम करता है",
      "पॉइंटर एक्सेस प्रतिबंधित करता है",
      "पॉइंटर्स को रीड-ओनली बनाता है",
      "कोई उद्देश्य नहीं"
    ],
    "answer_en": "Indicates pointers don't alias, enabling optimizations",
    "answer_hi": "इंगित करता है कि पॉइंटर्स एलियास नहीं करते, ऑप्टिमाइज़ेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the difference between 'memmove' and 'memcpy'?",
    "question_hi": "'memmove' और 'memcpy' में क्या अंतर है?",
    "options_en": [
      "memmove handles overlapping regions, memcpy doesn't",
      "memcpy handles overlapping, memmove doesn't",
      "Both handle overlapping",
      "Neither handles overlapping"
    ],
    "options_hi": [
      "memmove ओवरलैपिंग रीजन्स को हैंडल करता है, memcpy नहीं",
      "memcpy ओवरलैपिंग हैंडल करता है, memmove नहीं",
      "दोनों ओवरलैपिंग हैंडल करते हैं",
      "कोई भी ओवरलैपिंग नहीं हैंडल करता"
    ],
    "answer_en": "memmove handles overlapping regions, memcpy doesn't",
    "answer_hi": "memmove ओवरलैपिंग रीजन्स को हैंडल करता है, memcpy नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'errno' variable and how is it used?",
    "question_hi": "'errno' वेरिएबल क्या है और इसका उपयोग कैसे किया जाता है?",
    "options_en": [
      "Global variable set by library functions on error",
      "Local error variable",
      "Compile-time error",
      "Runtime optimization"
    ],
    "options_hi": [
      "ग्लोबल वेरिएबल जो लाइब्रेरी फ़ंक्शन द्वारा एरर पर सेट किया जाता है",
      "लोकल एरर वेरिएबल",
      "कम्पाइल-टाइम एरर",
      "रनटाइम ऑप्टिमाइज़ेशन"
    ],
    "answer_en": "Global variable set by library functions on error",
    "answer_hi": "ग्लोबल वेरिएबल जो लाइब्रेरी फ़ंक्शन द्वारा एरर पर सेट किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of 'volatile' with signal handlers?",
    "question_hi": "सिग्नल हैंडलर्स के साथ 'volatile' का उद्देश्य क्या है?",
    "options_en": [
      "Prevents compiler from optimizing variables accessed in signal handlers",
      "Makes variables faster",
      "Makes variables slower",
      "No purpose"
    ],
    "options_hi": [
      "सिग्नल हैंडलर्स में एक्सेस किए गए वेरिएबल्स के कंपाइलर ऑप्टिमाइज़ेशन को रोकता है",
      "वेरिएबल्स को तेज बनाता है",
      "वेरिएबल्स को धीमा बनाता है",
      "कोई उद्देश्य नहीं"
    ],
    "answer_en": "Prevents compiler from optimizing variables accessed in signal handlers",
    "answer_hi": "सिग्नल हैंडलर्स में एक्सेस किए गए वेरिएबल्स के कंपाइलर ऑप्टिमाइज़ेशन को रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'sig_atomic_t' data type?",
    "question_hi": "'sig_atomic_t' डेटा टाइप क्या है?",
    "options_en": [
      "Integer type that can be accessed atomically from signal handlers",
      "Floating point type",
      "Character type",
      "No such type"
    ],
    "options_hi": [
      "इंटीजर टाइप जो सिग्नल हैंडलर्स से एटॉमिकली एक्सेस किया जा सकता है",
      "फ्लोटिंग पॉइंट टाइप",
      "कैरेक्टर टाइप",
      "ऐसा कोई टाइप नहीं"
    ],
    "answer_en": "Integer type that can be accessed atomically from signal handlers",
    "answer_hi": "इंटीजर टाइप जो सिग्नल हैंडलर्स से एटॉमिकली एक्सेस किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the difference between 'strdup' and 'strndup'?",
    "question_hi": "'strdup' और 'strndup' में क्या अंतर है?",
    "options_en": [
      "strndup copies up to n characters, strdup copies entire string",
      "strdup copies up to n, strndup copies all",
      "Both same",
      "Neither exists"
    ],
    "options_hi": [
      "strndup n कैरेक्टर्स तक कॉपी करता है, strdup पूरी स्ट्रिंग कॉपी करता है",
      "strdup n तक कॉपी करता है, strndup सभी कॉपी करता है",
      "दोनों समान",
      "कोई भी मौजूद नहीं"
    ],
    "answer_en": "strndup copies up to n characters, strdup copies entire string",
    "answer_hi": "strndup n कैरेक्टर्स तक कॉपी करता है, strdup पूरी स्ट्रिंग कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'alloca' function and why is it dangerous?",
    "question_hi": "'alloca' फ़ंक्शन क्या है और यह खतरनाक क्यों है?",
    "options_en": [
      "Allocates memory on stack, can cause stack overflow",
      "Allocates on heap, causes memory leak",
      "Same as malloc",
      "Not dangerous"
    ],
    "options_hi": [
      "स्टैक पर मेमोरी आवंटित करता है, स्टैक ओवरफ्लो का कारण बन सकता है",
      "हीप पर आवंटित करता है, मेमोरी लीक का कारण बनता है",
      "malloc के समान",
      "खतरनाक नहीं"
    ],
    "answer_en": "Allocates memory on stack, can cause stack overflow",
    "answer_hi": "स्टैक पर मेमोरी आवंटित करता है, स्टैक ओवरफ्लो का कारण बन सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'offsetof' macro and how is it used?",
    "question_hi": "'offsetof' मैक्रो क्या है और इसका उपयोग कैसे किया जाता है?",
    "options_en": [
      "Returns byte offset of member within structure",
      "Returns pointer offset",
      "Returns array offset",
      "No such macro"
    ],
    "options_hi": [
      "संरचना के भीतर सदस्य का बाइट ऑफसेट लौटाता है",
      "पॉइंटर ऑफसेट लौटाता है",
      "ऐरे ऑफसेट लौटाता है",
      "ऐसा कोई मैक्रो नहीं"
    ],
    "answer_en": "Returns byte offset of member within structure",
    "answer_hi": "संरचना के भीतर सदस्य का बाइट ऑफसेट लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'container_of' macro pattern?",
    "question_hi": "'container_of' मैक्रो पैटर्न क्या है?",
    "options_en": [
      "Gets structure pointer from member pointer",
      "Gets member from structure",
      "Creates container",
      "No such pattern"
    ],
    "options_hi": [
      "सदस्य पॉइंटर से संरचना पॉइंटर प्राप्त करता है",
      "संरचना से सदस्य प्राप्त करता है",
      "कंटेनर बनाता है",
      "ऐसा कोई पैटर्न नहीं"
    ],
    "answer_en": "Gets structure pointer from member pointer",
    "answer_hi": "सदस्य पॉइंटर से संरचना पॉइंटर प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'flexible array member' syntax?",
    "question_hi": "'फ्लेक्सिबल ऐरे मेम्बर' सिंटैक्स क्या है?",
    "options_en": [
      "int data[]; at end of structure",
      "int data[0];",
      "int *data;",
      "Both int data[]; and int data[0];"
    ],
    "options_hi": [
      "int data[]; संरचना के अंत में",
      "int data[0];",
      "int *data;",
      "दोनों int data[]; और int data[0];"
    ],
    "answer_en": "Both int data[]; and int data[0];",
    "answer_hi": "दोनों int data[]; और int data[0];",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the purpose of '##' token concatenation operator?",
    "question_hi": "'##' टोकन कंकैटिनेशन ऑपरेटर का उद्देश्य क्या है?",
    "options_en": [
      "Concatenates two tokens during macro expansion",
      "Concatenates strings",
      "Concatenates files",
      "No purpose"
    ],
    "options_hi": [
      "मैक्रो एक्सपेंशन के दौरान दो टोकन को जोड़ता है",
      "स्ट्रिंग्स को जोड़ता है",
      "फाइलों को जोड़ता है",
      "कोई उद्देश्य नहीं"
    ],
    "answer_en": "Concatenates two tokens during macro expansion",
    "answer_hi": "मैक्रो एक्सपेंशन के दौरान दो टोकन को जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'stringizing' operator '#'?",
    "question_hi": "'स्ट्रिंगाइजिंग' ऑपरेटर '#' क्या है?",
    "options_en": [
      "Converts macro parameter to string literal",
      "Converts string to parameter",
      "Creates hash",
      "No such operator"
    ],
    "options_hi": [
      "मैक्रो पैरामीटर को स्ट्रिंग लिटरल में बदलता है",
      "स्ट्रिंग को पैरामीटर में बदलता है",
      "हैश बनाता है",
      "ऐसा कोई ऑपरेटर नहीं"
    ],
    "answer_en": "Converts macro parameter to string literal",
    "answer_hi": "मैक्रो पैरामीटर को स्ट्रिंग लिटरल में बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'variable-length macro' syntax?",
    "question_hi": "'वेरिएबल-लेंथ मैक्रो' सिंटैक्स क्या है?",
    "options_en": [
      "#define MACRO(...) or #define MACRO(args...)",
      "#define MACRO()",
      "#define MACRO(arg1)",
      "No such syntax"
    ],
    "options_hi": [
      "#define MACRO(...) या #define MACRO(args...)",
      "#define MACRO()",
      "#define MACRO(arg1)",
      "ऐसा कोई सिंटैक्स नहीं"
    ],
    "answer_en": "#define MACRO(...) or #define MACRO(args...)",
    "answer_hi": "#define MACRO(...) या #define MACRO(args...)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is '__VA_ARGS__' in macros?",
    "question_hi": "मैक्रो में '__VA_ARGS__' क्या है?",
    "options_en": [
      "Represents variable arguments in macro",
      "Represents fixed arguments",
      "Variable array",
      "No such identifier"
    ],
    "options_hi": [
      "मैक्रो में वेरिएबल आर्ग्युमेंट्स का प्रतिनिधित्व करता है",
      "फिक्स्ड आर्ग्युमेंट्स का प्रतिनिधित्व करता है",
      "वेरिएबल ऐरे",
      "ऐसा कोई आइडेंटिफायर नहीं"
    ],
    "answer_en": "Represents variable arguments in macro",
    "answer_hi": "मैक्रो में वेरिएबल आर्ग्युमेंट्स का प्रतिनिधित्व करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the purpose of 'do {...} while(0)' in macros?",
    "question_hi": "मैक्रो में 'do {...} while(0)' का उद्देश्य क्या है?",
    "options_en": [
      "Creates compound statement that works like single statement",
      "Creates infinite loop",
      "Creates single iteration loop",
      "No purpose"
    ],
    "options_hi": [
      "कंपाउंड स्टेटमेंट बनाता है जो सिंगल स्टेटमेंट की तरह काम करता है",
      "इनफाइनाइट लूप बनाता है",
      "सिंगल इटरेशन लूप बनाता है",
      "कोई उद्देश्य नहीं"
    ],
    "answer_en": "Creates compound statement that works like single statement",
    "answer_hi": "कंपाउंड स्टेटमेंट बनाता है जो सिंगल स्टेटमेंट की तरह काम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'X-macro' technique?",
    "question_hi": "'X-मैक्रो' तकनीक क्या है?",
    "options_en": [
      "Uses macro that expands to multiple definitions",
      "X-rated macro",
      "Extra macro",
      "No such technique"
    ],
    "options_hi": [
      "मैक्रो का उपयोग करता है जो कई परिभाषाओं में विस्तारित होता है",
      "X-रेटेड मैक्रो",
      "एक्स्ट्रा मैक्रो",
      "ऐसी कोई तकनीक नहीं"
    ],
    "answer_en": "Uses macro that expands to multiple definitions",
    "answer_hi": "मैक्रो का उपयोग करता है जो कई परिभाषाओं में विस्तारित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'compound literal' syntax?",
    "question_hi": "'कम्पाउंड लिटरल' सिंटैक्स क्या है?",
    "options_en": [
      "(type){initializers}",
      "type{initializers}",
      "(type)initializers",
      "No such syntax"
    ],
    "options_hi": [
      "(type){initializers}",
      "type{initializers}",
      "(type)initializers",
      "ऐसा कोई सिंटैक्स नहीं"
    ],
    "answer_en": "(type){initializers}",
    "answer_hi": "(type){initializers}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'designated initializer' syntax for arrays?",
    "question_hi": "ऐरे के लिए 'डिज़ाइनेटेड इनिशियलाइज़र' सिंटैक्स क्या है?",
    "options_en": [
      "[index] = value",
      "{index = value}",
      "(index) = value",
      "No such syntax"
    ],
    "options_hi": [
      "[index] = value",
      "{index = value}",
      "(index) = value",
      "ऐसा कोई सिंटैक्स नहीं"
    ],
    "answer_en": "[index] = value",
    "answer_hi": "[index] = value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'designated initializer' syntax for structures?",
    "question_hi": "स्ट्रक्चर के लिए 'डिज़ाइनेटेड इनिशियलाइज़र' सिंटैक्स क्या है?",
    "options_en": [
      ".member = value",
      "member: value",
      "member = value",
      "All of above"
    ],
    "options_hi": [
      ".member = value",
      "member: value",
      "member = value",
      "उपरोक्त सभी"
    ],
    "answer_en": ".member = value",
    "answer_hi": ".member = value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is '_Generic' selection syntax?",
    "question_hi": "'_Generic' सिलेक्शन सिंटैक्स क्या है?",
    "options_en": [
      "_Generic(expr, type1: expr1, type2: expr2, default: expr_def)",
      "Generic(expr, type1: expr1)",
      "_Generic expr: type",
      "No such syntax"
    ],
    "options_hi": [
      "_Generic(expr, type1: expr1, type2: expr2, default: expr_def)",
      "Generic(expr, type1: expr1)",
      "_Generic expr: type",
      "ऐसा कोई सिंटैक्स नहीं"
    ],
    "answer_en": "_Generic(expr, type1: expr1, type2: expr2, default: expr_def)",
    "answer_hi": "_Generic(expr, type1: expr1, type2: expr2, default: expr_def)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'static_assert' syntax?",
    "question_hi": "'static_assert' सिंटैक्स क्या है?",
    "options_en": [
      "static_assert(condition, \"message\")",
      "assert(condition)",
      "static assert condition",
      "No such syntax"
    ],
    "options_hi": [
      "static_assert(condition, \"message\")",
      "assert(condition)",
      "static assert condition",
      "ऐसा कोई सिंटैक्स नहीं"
    ],
    "answer_en": "static_assert(condition, \"message\")",
    "answer_hi": "static_assert(condition, \"message\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is '_Alignas' specifier syntax?",
    "question_hi": "'_Alignas' स्पेसिफायर सिंटैक्स क्या है?",
    "options_en": [
      "_Alignas(alignment)",
      "alignas alignment",
      "_Alignas alignment",
      "No such syntax"
    ],
    "options_hi": [
      "_Alignas(alignment)",
      "alignas alignment",
      "_Alignas alignment",
      "ऐसा कोई सिंटैक्स नहीं"
    ],
    "answer_en": "_Alignas(alignment)",
    "answer_hi": "_Alignas(alignment)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is '_Alignof' operator syntax?",
    "question_hi": "'_Alignof' ऑपरेटर सिंटैक्स क्या है?",
    "options_en": [
      "_Alignof(type)",
      "alignof type",
      "_Alignof type",
      "No such syntax"
    ],
    "options_hi": [
      "_Alignof(type)",
      "alignof type",
      "_Alignof type",
      "ऐसा कोई सिंटैक्स नहीं"
    ],
    "answer_en": "_Alignof(type)",
    "answer_hi": "_Alignof(type)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is '_Noreturn' function specifier?",
    "question_hi": "'_Noreturn' फ़ंक्शन स्पेसिफायर क्या है?",
    "options_en": [
      "Indicates function doesn't return to caller",
      "Indicates function always returns",
      "Indicates recursive function",
      "No such specifier"
    ],
    "options_hi": [
      "इंगित करता है कि फ़ंक्शन कॉलर को वापस नहीं आता",
      "इंगित करता है कि फ़ंक्शन हमेशा लौटता है",
      "पुनरावर्ती फ़ंक्शन इंगित करता है",
      "ऐसा कोई स्पेसिफायर नहीं"
    ],
    "answer_en": "Indicates function doesn't return to caller",
    "answer_hi": "इंगित करता है कि फ़ंक्शन कॉलर को वापस नहीं आता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is '_Thread_local' storage specifier?",
    "question_hi": "'_Thread_local' स्टोरेज स्पेसिफायर क्या है?",
    "options_en": [
      "Variable with thread storage duration",
      "Variable with static duration",
      "Variable with automatic duration",
      "No such specifier"
    ],
    "options_hi": [
      "थ्रेड स्टोरेज अवधि वाला चर",
      "स्थैतिक अवधि वाला चर",
      "स्वचालित अवधि वाला चर",
      "ऐसा कोई स्पेसिफायर नहीं"
    ],
    "answer_en": "Variable with thread storage duration",
    "answer_hi": "थ्रेड स्टोरेज अवधि वाला चर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the purpose of 'const' with function parameters?",
    "question_hi": "फ़ंक्शन पैरामीटर्स के साथ 'const' का उद्देश्य क्या है?",
    "options_en": [
      "Indicates function won't modify the parameter",
      "Makes parameter constant",
      "Improves performance",
      "No purpose"
    ],
    "options_hi": [
      "इंगित करता है कि फ़ंक्शन पैरामीटर संशोधित नहीं करेगा",
      "पैरामीटर को स्थिर बनाता है",
      "प्रदर्शन में सुधार करता है",
      "कोई उद्देश्य नहीं"
    ],
    "answer_en": "Indicates function won't modify the parameter",
    "answer_hi": "इंगित करता है कि फ़ंक्शन पैरामीटर संशोधित नहीं करेगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'pointer to const' vs 'const pointer'?",
    "question_hi": "'पॉइंटर टू कॉन्स्ट' बनाम 'कॉन्स्ट पॉइंटर' क्या है?",
    "options_en": [
      "const int* vs int* const",
      "int const* vs const int*",
      "Both same",
      "No difference"
    ],
    "options_hi": [
      "const int* बनाम int* const",
      "int const* बनाम const int*",
      "दोनों समान",
      "कोई अंतर नहीं"
    ],
    "answer_en": "const int* vs int* const",
    "answer_hi": "const int* बनाम int* const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'restrict' with array parameters?",
    "question_hi": "ऐरे पैरामीटर्स के साथ 'restrict' क्या है?",
    "options_en": [
      "Indicates arrays don't overlap",
      "Indicates arrays overlap",
      "Restricts array size",
      "No effect"
    ],
    "options_hi": [
      "इंगित करता है कि ऐरे ओवरलैप नहीं करते",
      "इंगित करता है कि ऐरे ओवरलैप करते हैं",
      "ऐरे आकार को प्रतिबंधित करता है",
      "कोई प्रभाव नहीं"
    ],
    "answer_en": "Indicates arrays don't overlap",
    "answer_hi": "इंगित करता है कि ऐरे ओवरलैप नहीं करते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'inline' function definition in header?",
    "question_hi": "हेडर में 'inline' फ़ंक्शन डेफिनिशन क्या है?",
    "options_en": [
      "static inline function definition",
      "extern inline",
      "inline only",
      "No inline in header"
    ],
    "options_hi": [
      "static inline फ़ंक्शन डेफिनिशन",
      "extern inline",
      "inline only",
      "हेडर में कोई inline नहीं"
    ],
    "answer_en": "static inline function definition",
    "answer_hi": "static inline फ़ंक्शन डेफिनिशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'extern inline'?",
    "question_hi": "'extern inline' क्या है?",
    "options_en": [
      "External definition for inline function",
      "Internal definition",
      "No definition",
      "Not valid"
    ],
    "options_hi": [
      "inline फ़ंक्शन के लिए एक्सटर्नल डेफिनिशन",
      "इंटरनल डेफिनिशन",
      "कोई परिभाषा नहीं",
      "मान्य नहीं"
    ],
    "answer_en": "External definition for inline function",
    "answer_hi": "inline फ़ंक्शन के लिए एक्सटर्नल डेफिनिशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'static inline'?",
    "question_hi": "'static inline' क्या है?",
    "options_en": [
      "Inline function with internal linkage",
      "Inline with external linkage",
      "No linkage",
      "Not valid"
    ],
    "options_hi": [
      "आंतरिक लिंकेज वाला इनलाइन फ़ंक्शन",
      "बाहरी लिंकेज के साथ इनलाइन",
      "कोई लिंकेज नहीं",
      "मान्य नहीं"
    ],
    "answer_en": "Inline function with internal linkage",
    "answer_hi": "आंतरिक लिंकेज वाला इनलाइन फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'register' variable optimization hint?",
    "question_hi": "'register' वेरिएबल ऑप्टिमाइज़ेशन हिंट क्या है?",
    "options_en": [
      "Suggests storing variable in register",
      "Forces register storage",
      "Prevents register storage",
      "No hint"
    ],
    "options_hi": [
      "वेरिएबल को रजिस्टर में स्टोर करने का सुझाव देता है",
      "रजिस्टर स्टोरेज फोर्स करता है",
      "रजिस्टर स्टोरेज रोकता है",
      "कोई संकेत नहीं"
    ],
    "answer_en": "Suggests storing variable in register",
    "answer_hi": "वेरिएबल को रजिस्टर में स्टोर करने का सुझाव देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'volatile' with hardware access?",
    "question_hi": "हार्डवेयर एक्सेस के साथ 'volatile' क्या है?",
    "options_en": [
      "Prevents compiler from optimizing hardware register access",
      "Optimizes hardware access",
      "Slows hardware access",
      "No effect"
    ],
    "options_hi": [
      "हार्डवेयर रजिस्टर एक्सेस के कंपाइलर ऑप्टिमाइज़ेशन को रोकता है",
      "हार्डवेयर एक्सेस को ऑप्टिमाइज़ करता है",
      "हार्डवेयर एक्सेस को धीमा करता है",
      "कोई प्रभाव नहीं"
    ],
    "answer_en": "Prevents compiler from optimizing hardware register access",
    "answer_hi": "हार्डवेयर रजिस्टर एक्सेस के कंपाइलर ऑप्टिमाइज़ेशन को रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'sigsetjmp' and 'siglongjmp'?",
    "question_hi": "'sigsetjmp' और 'siglongjmp' क्या हैं?",
    "options_en": [
      "Non-local jumps with signal mask saving",
      "Local jumps",
      "Signal jumps only",
      "No such functions"
    ],
    "options_hi": [
      "सिग्नल मास्क सेविंग के साथ गैर-स्थानीय कूद",
      "स्थानीय कूद",
      "केवल सिग्नल कूद",
      "ऐसे कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Non-local jumps with signal mask saving",
    "answer_hi": "सिग्नल मास्क सेविंग के साथ गैर-स्थानीय कूद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'pthread_once' function?",
    "question_hi": "'pthread_once' फ़ंक्शन क्या है?",
    "options_en": [
      "Ensures function is called only once across threads",
      "Calls function once per thread",
      "Calls function multiple times",
      "No such function"
    ],
    "options_hi": [
      "सुनिश्चित करता है कि फ़ंक्शन केवल एक बार थ्रेड्स में कॉल किया जाता है",
      "प्रति थ्रेड फ़ंक्शन एक बार कॉल करता है",
      "फ़ंक्शन को कई बार कॉल करता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Ensures function is called only once across threads",
    "answer_hi": "सुनिश्चित करता है कि फ़ंक्शन केवल एक बार थ्रेड्स में कॉल किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'pthread_cleanup_push' and 'pthread_cleanup_pop'?",
    "question_hi": "'pthread_cleanup_push' और 'pthread_cleanup_pop' क्या हैं?",
    "options_en": [
      "Push/pop cleanup handlers for thread cancellation",
      "Push/pop stack",
      "Push/pop memory",
      "No such functions"
    ],
    "options_hi": [
      "थ्रेड कैंसिलेशन के लिए क्लीनअप हैंडलर पुश/पॉप करें",
      "स्टैक पुश/पॉप",
      "मेमोरी पुश/पॉप",
      "ऐसे कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Push/pop cleanup handlers for thread cancellation",
    "answer_hi": "थ्रेड कैंसिलेशन के लिए क्लीनअप हैंडलर पुश/पॉप करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'mmap' function for memory mapping?",
    "question_hi": "मेमोरी मैपिंग के लिए 'mmap' फ़ंक्शन क्या है?",
    "options_en": [
      "Maps files/devices into memory",
      "Allocates heap memory",
      "Allocates stack memory",
      "No such function"
    ],
    "options_hi": [
      "फाइलों/डिवाइस को मेमोरी में मैप करता है",
      "हीप मेमोरी आवंटित करता है",
      "स्टैक मेमोरी आवंटित करता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Maps files/devices into memory",
    "answer_hi": "फाइलों/डिवाइस को मेमोरी में मैप करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'munmap' function?",
    "question_hi": "'munmap' फ़ंक्शन क्या है?",
    "options_en": [
      "Unmaps memory mapped by mmap",
      "Maps memory",
      "Allocates memory",
      "No such function"
    ],
    "options_hi": [
      "mmap द्वारा मैप की गई मेमोरी को अनमैप करता है",
      "मेमोरी मैप करता है",
      "मेमोरी आवंटित करता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Unmaps memory mapped by mmap",
    "answer_hi": "mmap द्वारा मैप की गई मेमोरी को अनमैप करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'mprotect' function?",
    "question_hi": "'mprotect' फ़ंक्शन क्या है?",
    "options_en": [
      "Changes protection of memory region",
      "Protects file",
      "Protects thread",
      "No such function"
    ],
    "options_hi": [
      "मेमोरी रीजन की सुरक्षा बदलता है",
      "फ़ाइल की सुरक्षा करता है",
      "थ्रेड की सुरक्षा करता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Changes protection of memory region",
    "answer_hi": "मेमोरी रीजन की सुरक्षा बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'msync' function?",
    "question_hi": "'msync' फ़ंक्शन क्या है?",
    "options_en": [
      "Synchronizes memory map with file",
      "Synchronizes threads",
      "Synchronizes processes",
      "No such function"
    ],
    "options_hi": [
      "मेमोरी मैप को फ़ाइल के साथ सिंक्रनाइज़ करता है",
      "थ्रेड्स को सिंक्रनाइज़ करता है",
      "प्रक्रियाओं को सिंक्रनाइज़ करता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Synchronizes memory map with file",
    "answer_hi": "मेमोरी मैप को फ़ाइल के साथ सिंक्रनाइज़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'shm_open' for shared memory?",
    "question_hi": "शेयर्ड मेमोरी के लिए 'shm_open' क्या है?",
    "options_en": [
      "Creates/opens shared memory object",
      "Opens file",
      "Opens socket",
      "No such function"
    ],
    "options_hi": [
      "शेयर्ड मेमोरी ऑब्जेक्ट बनाता/खोलता है",
      "फ़ाइल खोलता है",
      "सॉकेट खोलता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Creates/opens shared memory object",
    "answer_hi": "शेयर्ड मेमोरी ऑब्जेक्ट बनाता/खोलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'ftruncate' for shared memory?",
    "question_hi": "शेयर्ड मेमोरी के लिए 'ftruncate' क्या है?",
    "options_en": [
      "Sets size of shared memory object",
      "Truncates file",
      "Truncates string",
      "No such function"
    ],
    "options_hi": [
      "शेयर्ड मेमोरी ऑब्जेक्ट का आकार सेट करता है",
      "फ़ाइल ट्रंकेट करता है",
      "स्ट्रिंग ट्रंकेट करता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Sets size of shared memory object",
    "answer_hi": "शेयर्ड मेमोरी ऑब्जेक्ट का आकार सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'sem_open' for named semaphores?",
    "question_hi": "नेम्ड सेमाफोर्स के लिए 'sem_open' क्या है?",
    "options_en": [
      "Creates/opens named semaphore",
      "Opens unnamed semaphore",
      "Opens file",
      "No such function"
    ],
    "options_hi": [
      "नेम्ड सेमाफोर बनाता/खोलता है",
      "अननेम्ड सेमाफोर खोलता है",
      "फ़ाइल खोलता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Creates/opens named semaphore",
    "answer_hi": "नेम्ड सेमाफोर बनाता/खोलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'mkfifo' for named pipes?",
    "question_hi": "नेम्ड पाइप्स के लिए 'mkfifo' क्या है?",
    "options_en": [
      "Creates named pipe (FIFO)",
      "Creates unnamed pipe",
      "Creates file",
      "No such function"
    ],
    "options_hi": [
      "नेम्ड पाइप (FIFO) बनाता है",
      "अननेम्ड पाइप बनाता है",
      "फ़ाइल बनाता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Creates named pipe (FIFO)",
    "answer_hi": "नेम्ड पाइप (FIFO) बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'fcntl' function for file control?",
    "question_hi": "फ़ाइल कंट्रोल के लिए 'fcntl' फ़ंक्शन क्या है?",
    "options_en": [
      "Performs various file control operations",
      "Only file creation",
      "Only file deletion",
      "No such function"
    ],
    "options_hi": [
      "विभिन्न फ़ाइल नियंत्रण संचालन करता है",
      "केवल फ़ाइल निर्माण",
      "केवल फ़ाइल विलोपन",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Performs various file control operations",
    "answer_hi": "विभिन्न फ़ाइल नियंत्रण संचालन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'ioctl' for device control?",
    "question_hi": "डिवाइस कंट्रोल के लिए 'ioctl' क्या है?",
    "options_en": [
      "Device-specific input/output control",
      "File control",
      "Memory control",
      "No such function"
    ],
    "options_hi": [
      "डिवाइस-विशिष्ट इनपुट/आउटपुट नियंत्रण",
      "फ़ाइल नियंत्रण",
      "मेमोरी नियंत्रण",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Device-specific input/output control",
    "answer_hi": "डिवाइस-विशिष्ट इनपुट/आउटपुट नियंत्रण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'select' for I/O multiplexing?",
    "question_hi": "I/O मल्टीप्लेक्सिंग के लिए 'select' क्या है?",
    "options_en": [
      "Monitors multiple file descriptors",
      "Selects files",
      "Selects devices",
      "No such function"
    ],
    "options_hi": [
      "एकाधिक फ़ाइल विवरणकों की निगरानी करता है",
      "फ़ाइलें चुनता है",
      "उपकरण चुनता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Monitors multiple file descriptors",
    "answer_hi": "एकाधिक फ़ाइल विवरणकों की निगरानी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'poll' for I/O multiplexing?",
    "question_hi": "I/O मल्टीप्लेक्सिंग के लिए 'poll' क्या है?",
    "options_en": [
      "Alternative to select for monitoring file descriptors",
      "Polls users",
      "Polls network",
      "No such function"
    ],
    "options_hi": [
      "फ़ाइल विवरणकों की निगरानी के लिए select का विकल्प",
      "उपयोगकर्ताओं का सर्वेक्षण करता है",
      "नेटवर्क का सर्वेक्षण करता है",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Alternative to select for monitoring file descriptors",
    "answer_hi": "फ़ाइल विवरणकों की निगरानी के लिए select का विकल्प",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'epoll' for scalable I/O?",
    "question_hi": "स्केलेबल I/O के लिए 'epoll' क्या है?",
    "options_en": [
      "Linux-specific scalable I/O event notification",
      "Windows-specific",
      "macOS-specific",
      "No such function"
    ],
    "options_hi": [
      "Linux-विशिष्ट स्केलेबल I/O इवेंट नोटिफिकेशन",
      "Windows-विशिष्ट",
      "macOS-विशिष्ट",
      "ऐसा कोई फ़ंक्शन नहीं"
    ],
    "answer_en": "Linux-specific scalable I/O event notification",
    "answer_hi": "Linux-विशिष्ट स्केलेबल I/O इवेंट नोटिफिकेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'kqueue' for event notification?",
    "question_hi": "इवेंट नोटिफिकेशन के लिए 'kqueue' क्या है?",
    "options_en": [
      "BSD-specific event notification mechanism",
      "Linux-specific",
      "Windows-specific",
      "No such mechanism"
    ],
    "options_hi": [
      "BSD-विशिष्ट इवेंट नोटिफिकेशन मैकेनिज्म",
      "Linux-विशिष्ट",
      "Windows-विशिष्ट",
      "ऐसा कोई तंत्र नहीं"
    ],
    "answer_en": "BSD-specific event notification mechanism",
    "answer_hi": "BSD-विशिष्ट इवेंट नोटिफिकेशन मैकेनिज्म",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is the purpose of '__attribute__((cleanup))' in GCC?",
    "question_hi": "GCC में '__attribute__((cleanup))' का उद्देश्य क्या है?",
    "options_en": [
      "Calls function when variable goes out of scope",
      "Cleans up memory",
      "Cleans up files",
      "No such attribute"
    ],
    "options_hi": [
      "वेरिएबल के स्कोप से बाहर जाने पर फ़ंक्शन को कॉल करता है",
      "मेमोरी साफ़ करता है",
      "फ़ाइलें साफ़ करता है",
      "ऐसा कोई विशेषता नहीं"
    ],
    "answer_en": "Calls function when variable goes out of scope",
    "answer_hi": "वेरिएबल के स्कोप से बाहर जाने पर फ़ंक्शन को कॉल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is '__builtin_return_address' used for?",
    "question_hi": "'__builtin_return_address' का उपयोग किस लिए किया जाता है?",
    "options_en": [
      "Gets return address of current or calling function",
      "Gets current address",
      "Sets return address",
      "No such builtin"
    ],
    "options_hi": [
      "वर्तमान या कॉलिंग फ़ंक्शन का रिटर्न एड्रेस प्राप्त करता है",
      "वर्तमान पता प्राप्त करता है",
      "रिटर्न एड्रेस सेट करता है",
      "ऐसा कोई बिल्टिन नहीं"
    ],
    "answer_en": "Gets return address of current or calling function",
    "answer_hi": "वर्तमान या कॉलिंग फ़ंक्शन का रिटर्न एड्रेस प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is '__builtin_frame_address' used for?",
    "question_hi": "'__builtin_frame_address' का उपयोग किस लिए किया जाता है?",
    "options_en": [
      "Gets frame address of current or calling function",
      "Gets current frame",
      "Sets frame address",
      "No such builtin"
    ],
    "options_hi": [
      "वर्तमान या कॉलिंग फ़ंक्शन का फ्रेम एड्रेस प्राप्त करता है",
      "वर्तमान फ्रेम प्राप्त करता है",
      "फ्रेम एड्रेस सेट करता है",
      "ऐसा कोई बिल्टिन नहीं"
    ],
    "answer_en": "Gets frame address of current or calling function",
    "answer_hi": "वर्तमान या कॉलिंग फ़ंक्शन का फ्रेम एड्रेस प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'CFLAGS' environment variable used for?",
    "question_hi": "'CFLAGS' एनवायरनमेंट वेरिएबल का उपयोग किस लिए किया जाता है?",
    "options_en": [
      "Compiler flags for C programs",
      "Linker flags",
      "Debug flags",
      "No such variable"
    ],
    "options_hi": [
      "C प्रोग्राम के लिए कंपाइलर फ्लैग",
      "लिंकर फ्लैग",
      "डिबग फ्लैग",
      "ऐसा कोई चर नहीं"
    ],
    "answer_en": "Compiler flags for C programs",
    "answer_hi": "C प्रोग्राम के लिए कंपाइलर फ्लैग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'LDFLAGS' environment variable used for?",
    "question_hi": "'LDFLAGS' एनवायरनमेंट वेरिएबल का उपयोग किस लिए किया जाता है?",
    "options_en": [
      "Linker flags for programs",
      "Compiler flags",
      "Loader flags",
      "No such variable"
    ],
    "options_hi": [
      "प्रोग्राम के लिए लिंकर फ्लैग",
      "कंपाइलर फ्लैग",
      "लोडर फ्लैग",
      "ऐसा कोई चर नहीं"
    ],
    "answer_en": "Linker flags for programs",
    "answer_hi": "प्रोग्राम के लिए लिंकर फ्लैग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'pkg-config' tool used for?",
    "question_hi": "'pkg-config' टूल का उपयोग किस लिए किया जाता है?",
    "options_en": [
      "Gets compiler/linker flags for libraries",
      "Configures packages",
      "Installs packages",
      "No such tool"
    ],
    "options_hi": [
      "लाइब्रेरी के लिए कंपाइलर/लिंकर फ्लैग प्राप्त करता है",
      "पैकेज कॉन्फ़िगर करता है",
      "पैकेज इंस्टॉल करता है",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Gets compiler/linker flags for libraries",
    "answer_hi": "लाइब्रेरी के लिए कंपाइलर/लिंकर फ्लैग प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'autoconf' tool used for?",
    "question_hi": "'autoconf' टूल का उपयोग किस लिए किया जाता है?",
    "options_en": [
      "Generates configure scripts",
      "Configures automatically",
      "Compiles automatically",
      "No such tool"
    ],
    "options_hi": [
      "कॉन्फ़िगर स्क्रिप्ट जनरेट करता है",
      "स्वचालित रूप से कॉन्फ़िगर करता है",
      "स्वचालित रूप से संकलित करता है",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Generates configure scripts",
    "answer_hi": "कॉन्फ़िगर स्क्रिप्ट जनरेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'automake' tool used for?",
    "question_hi": "'automake' टूल का उपयोग किस लिए किया जाता है?",
    "options_en": [
      "Generates Makefile.in from Makefile.am",
      "Makes automatically",
      "Compiles automatically",
      "No such tool"
    ],
    "options_hi": [
      "Makefile.am से Makefile.in जनरेट करता है",
      "स्वचालित रूप से बनाता है",
      "स्वचालित रूप से संकलित करता है",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Generates Makefile.in from Makefile.am",
    "answer_hi": "Makefile.am से Makefile.in जनरेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'libtool' used for?",
    "question_hi": "'libtool' का उपयोग किस लिए किया जाता है?",
    "options_en": [
      "Creates portable shared libraries",
      "Tools for libraries",
      "Library configuration",
      "No such tool"
    ],
    "options_hi": [
      "पोर्टेबल शेयर्ड लाइब्रेरी बनाता है",
      "लाइब्रेरी के लिए टूल",
      "लाइब्रेरी कॉन्फ़िगरेशन",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Creates portable shared libraries",
    "answer_hi": "पोर्टेबल शेयर्ड लाइब्रेरी बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'CMake' build system?",
    "question_hi": "'CMake' बिल्ड सिस्टम क्या है?",
    "options_en": [
      "Cross-platform build system generator",
      "C maker",
      "Compiler maker",
      "No such system"
    ],
    "options_hi": [
      "क्रॉस-प्लेटफॉर्म बिल्ड सिस्टम जनरेटर",
      "C मेकर",
      "कंपाइलर मेकर",
      "ऐसी कोई प्रणाली नहीं"
    ],
    "answer_en": "Cross-platform build system generator",
    "answer_hi": "क्रॉस-प्लेटफॉर्म बिल्ड सिस्टम जनरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'Meson' build system?",
    "question_hi": "'Meson' बिल्ड सिस्टम क्या है?",
    "options_en": [
      "Modern build system faster than CMake",
      "Ancient build system",
      "Make alternative",
      "No such system"
    ],
    "options_hi": [
      "CMake से तेज़ आधुनिक बिल्ड सिस्टम",
      "प्राचीन बिल्ड सिस्टम",
      "Make विकल्प",
      "ऐसी कोई प्रणाली नहीं"
    ],
    "answer_en": "Modern build system faster than CMake",
    "answer_hi": "CMake से तेज़ आधुनिक बिल्ड सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'Bazel' build system?",
    "question_hi": "'Bazel' बिल्ड सिस्टम क्या है?",
    "options_en": [
      "Google's build and test tool",
      "Facebook's tool",
      "Microsoft's tool",
      "No such system"
    ],
    "options_hi": [
      "गूगल का बिल्ड और टेस्ट टूल",
      "फेसबुक का टूल",
      "माइक्रोसॉफ्ट का टूल",
      "ऐसी कोई प्रणाली नहीं"
    ],
    "answer_en": "Google's build and test tool",
    "answer_hi": "गूगल का बिल्ड और टेस्ट टूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'Ninja' build system?",
    "question_hi": "'Ninja' बिल्ड सिस्टम क्या है?",
    "options_en": [
      "Small build system focused on speed",
      "Large build system",
      "GUI build system",
      "No such system"
    ],
    "options_hi": [
      "गति पर केंद्रित छोटा बिल्ड सिस्टम",
      "बड़ा बिल्ड सिस्टम",
      "GUI बिल्ड सिस्टम",
      "ऐसी कोई प्रणाली नहीं"
    ],
    "answer_en": "Small build system focused on speed",
    "answer_hi": "गति पर केंद्रित छोटा बिल्ड सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'ccache' compiler cache?",
    "question_hi": "'ccache' कंपाइलर कैश क्या है?",
    "options_en": [
      "Caches compilation to speed up recompilation",
      "Clears cache",
      "Creates cache",
      "No such tool"
    ],
    "options_hi": [
      "पुनः संकलन को गति देने के लिए संकलन कैश करता है",
      "कैश साफ़ करता है",
      "कैश बनाता है",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Caches compilation to speed up recompilation",
    "answer_hi": "पुनः संकलन को गति देने के लिए संकलन कैश करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'distcc' distributed compiler?",
    "question_hi": "'distcc' डिस्ट्रीब्यूटेड कंपाइलर क्या है?",
    "options_en": [
      "Distributes compilation across network",
      "Distributes code",
      "Distributes files",
      "No such tool"
    ],
    "options_hi": [
      "नेटवर्क पर संकलन वितरित करता है",
      "कोड वितरित करता है",
      "फ़ाइलें वितरित करता है",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Distributes compilation across network",
    "answer_hi": "नेटवर्क पर संकलन वितरित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'icecc' Icecream distributed compiler?",
    "question_hi": "'icecc' आइसक्रीम डिस्ट्रीब्यूटेड कंपाइलर क्या है?",
    "options_en": [
      "Another distributed compilation system",
      "Ice compiler",
      "Cream compiler",
      "No such tool"
    ],
    "options_hi": [
      "एक अन्य वितरित संकलन प्रणाली",
      "आइस कंपाइलर",
      "क्रीम कंपाइलर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Another distributed compilation system",
    "answer_hi": "एक अन्य वितरित संकलन प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'clang-tidy' tool?",
    "question_hi": "'clang-tidy' टूल क्या है?",
    "options_en": [
      "Clang-based C++ linter and fixer",
      "C linter only",
      "Code tidier",
      "No such tool"
    ],
    "options_hi": [
      "Clang-आधारित C++ लिंटर और फिक्सर",
      "केवल C लिंटर",
      "कोड टिडियर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Clang-based C++ linter and fixer",
    "answer_hi": "Clang-आधारित C++ लिंटर और फिक्सर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'clang-format' tool?",
    "question_hi": "'clang-format' टूल क्या है?",
    "options_en": [
      "Automatically formats C/C++ code",
      "Compiles code",
      "Debugs code",
      "No such tool"
    ],
    "options_hi": [
      "स्वचालित रूप से C/C++ कोड फॉर्मेट करता है",
      "कोड संकलित करता है",
      "कोड डीबग करता है",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Automatically formats C/C++ code",
    "answer_hi": "स्वचालित रूप से C/C++ कोड फॉर्मेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'include-what-you-use' tool?",
    "question_hi": "'include-what-you-use' टूल क्या है?",
    "options_en": [
      "Analyzes includes in C/C++ source files",
      "Includes everything",
      "Removes includes",
      "No such tool"
    ],
    "options_hi": [
      "C/C++ स्रोत फ़ाइलों में इनक्लूड का विश्लेषण करता है",
      "सब कुछ शामिल करता है",
      "इनक्लूड हटाता है",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Analyzes includes in C/C++ source files",
    "answer_hi": "C/C++ स्रोत फ़ाइलों में इनक्लूड का विश्लेषण करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'cscope' code browsing tool?",
    "question_hi": "'cscope' कोड ब्राउज़िंग टूल क्या है?",
    "options_en": [
      "Interactive C source code browser",
      "C scope tool",
      "Code scoper",
      "No such tool"
    ],
    "options_hi": [
      "इंटरएक्टिव C स्रोत कोड ब्राउज़र",
      "C स्कोप टूल",
      "कोड स्कोपर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Interactive C source code browser",
    "answer_hi": "इंटरएक्टिव C स्रोत कोड ब्राउज़र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'ctags' tag generator?",
    "question_hi": "'ctags' टैग जनरेटर क्या है?",
    "options_en": [
      "Generates tag file for source code navigation",
      "Creates tags",
      "Compiles tags",
      "No such tool"
    ],
    "options_hi": [
      "स्रोत कोड नेविगेशन के लिए टैग फ़ाइल जनरेट करता है",
      "टैग बनाता है",
      "टैग संकलित करता है",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Generates tag file for source code navigation",
    "answer_hi": "स्रोत कोड नेविगेशन के लिए टैग फ़ाइल जनरेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'global' source code tagging system?",
    "question_hi": "'global' सोर्स कोड टैगिंग सिस्टम क्या है?",
    "options_en": [
      "Source code tagging system like ctags",
      "Global variable tool",
      "Global search",
      "No such system"
    ],
    "options_hi": [
      "ctags जैसा स्रोत कोड टैगिंग सिस्टम",
      "ग्लोबल वेरिएबल टूल",
      "ग्लोबल सर्च",
      "ऐसी कोई प्रणाली नहीं"
    ],
    "answer_en": "Source code tagging system like ctags",
    "answer_hi": "ctags जैसा स्रोत कोड टैगिंग सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'doxygen' documentation generator?",
    "question_hi": "'doxygen' डॉक्युमेंटेशन जनरेटर क्या है?",
    "options_en": [
      "Generates documentation from annotated source",
      "Generates oxygen",
      "Generates docs only",
      "No such tool"
    ],
    "options_hi": [
      "एनोटेटेड सोर्स से डॉक्युमेंटेशन जनरेट करता है",
      "ऑक्सीजन उत्पन्न करता है",
      "केवल दस्तावेज़ उत्पन्न करता है",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Generates documentation from annotated source",
    "answer_hi": "एनोटेटेड सोर्स से डॉक्युमेंटेशन जनरेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'graphviz' for documentation?",
    "question_hi": "डॉक्युमेंटेशन के लिए 'graphviz' क्या है?",
    "options_en": [
      "Graph visualization software used by doxygen",
      "Documentation tool",
      "Graph tool only",
      "No such tool"
    ],
    "options_hi": [
      "doxygen द्वारा उपयोग किया जाने वाला ग्राफ विज़ुअलाइज़ेशन सॉफ्टवेयर",
      "दस्तावेज़ीकरण उपकरण",
      "केवल ग्राफ टूल",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Graph visualization software used by doxygen",
    "answer_hi": "doxygen द्वारा उपयोग किया जाने वाला ग्राफ विज़ुअलाइज़ेशन सॉफ्टवेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'plantuml' for documentation?",
    "question_hi": "डॉक्युमेंटेशन के लिए 'plantuml' क्या है?",
    "options_en": [
      "Creates UML diagrams from text",
      "Plants UML",
      "Documentation only",
      "No such tool"
    ],
    "options_hi": [
      "टेक्स्ट से UML डायग्राम बनाता है",
      "UML प्लांट करता है",
      "केवल दस्तावेज़ीकरण",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Creates UML diagrams from text",
    "answer_hi": "टेक्स्ट से UML डायग्राम बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'sphinx' documentation generator?",
    "question_hi": "'sphinx' डॉक्युमेंटेशन जनरेटर क्या है?",
    "options_en": [
      "Python documentation generator that can document C",
      "C documentation only",
      "Documentation miner",
      "No such tool"
    ],
    "options_hi": [
      "पायथन डॉक्युमेंटेशन जनरेटर जो C को डॉक्युमेंट कर सकता है",
      "केवल C दस्तावेज़ीकरण",
      "दस्तावेज़ीकरण खनिक",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Python documentation generator that can document C",
    "answer_hi": "पायथन डॉक्युमेंटेशन जनरेटर जो C को डॉक्युमेंट कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'breathe' Sphinx extension?",
    "question_hi": "'breathe' Sphinx एक्सटेंशन क्या है?",
    "options_en": [
      "Connects doxygen to sphinx",
      "Breathing tool",
      "Documentation breather",
      "No such extension"
    ],
    "options_hi": [
      "doxygen को sphinx से जोड़ता है",
      "ब्रीदिंग टूल",
      "दस्तावेज़ीकरण ब्रीदर",
      "ऐसा कोई एक्सटेंशन नहीं"
    ],
    "answer_en": "Connects doxygen to sphinx",
    "answer_hi": "doxygen को sphinx से जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'exhale' Sphinx extension?",
    "question_hi": "'exhale' Sphinx एक्सटेंशन क्या है?",
    "options_en": [
      "Another doxygen to sphinx bridge",
      "Exhalation tool",
      "Documentation exhaler",
      "No such extension"
    ],
    "options_hi": [
      "doxygen से sphinx का एक और ब्रिज",
      "एक्सहेलेशन टूल",
      "दस्तावेज़ीकरण एक्सहेलर",
      "ऐसा कोई एक्सटेंशन नहीं"
    ],
    "answer_en": "Another doxygen to sphinx bridge",
    "answer_hi": "doxygen से sphinx का एक और ब्रिज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'c2rust' translator?",
    "question_hi": "'c2rust' ट्रांसलेटर क्या है?",
    "options_en": [
      "Translates C code to Rust",
      "C to Rust compiler",
      "C and Rust mixer",
      "No such tool"
    ],
    "options_hi": [
      "C कोड को Rust में अनुवादित करता है",
      "C से Rust कंपाइलर",
      "C और Rust मिक्सर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Translates C code to Rust",
    "answer_hi": "C कोड को Rust में अनुवादित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'c2go' translator?",
    "question_hi": "'c2go' ट्रांसलेटर क्या है?",
    "options_en": [
      "Translates C to Go",
      "C to Go compiler",
      "C and Go mixer",
      "No such tool"
    ],
    "options_hi": [
      "C को Go में अनुवादित करता है",
      "C से Go कंपाइलर",
      "C और Go मिक्सर",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Translates C to Go",
    "answer_hi": "C को Go में अनुवादित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'emscripten' compiler?",
    "question_hi": "'emscripten' कंपाइलर क्या है?",
    "options_en": [
      "Compiles C/C++ to WebAssembly/JavaScript",
      "Compiles to emscript",
      "Script compiler",
      "No such compiler"
    ],
    "options_hi": [
      "C/C++ को WebAssembly/JavaScript में संकलित करता है",
      "emscript में संकलित करता है",
      "स्क्रिप्ट कंपाइलर",
      "ऐसा कोई कंपाइलर नहीं"
    ],
    "answer_en": "Compiles C/C++ to WebAssembly/JavaScript",
    "answer_hi": "C/C++ को WebAssembly/JavaScript में संकलित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'wasm' WebAssembly?",
    "question_hi": "'wasm' WebAssembly क्या है?",
    "options_en": [
      "Binary instruction format for stack-based VM",
      "Web assembly",
      "Web compiler",
      "No such format"
    ],
    "options_hi": [
      "स्टैक-आधारित VM के लिए बाइनरी निर्देश प्रारूप",
      "वेब असेंबली",
      "वेब कंपाइलर",
      "ऐसा कोई प्रारूप नहीं"
    ],
    "answer_en": "Binary instruction format for stack-based VM",
    "answer_hi": "स्टैक-आधारित VM के लिए बाइनरी निर्देश प्रारूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'tinycc' compiler?",
    "question_hi": "'tinycc' कंपाइलर क्या है?",
    "options_en": [
      "Tiny C Compiler, small and fast",
      "Tiny compiler",
      "C tiny compiler",
      "No such compiler"
    ],
    "options_hi": [
      "टाइनी C कंपाइलर, छोटा और तेज़",
      "छोटा कंपाइलर",
      "C टाइनी कंपाइलर",
      "ऐसा कोई कंपाइलर नहीं"
    ],
    "answer_en": "Tiny C Compiler, small and fast",
    "answer_hi": "टाइनी C कंपाइलर, छोटा और तेज़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'pcc' Portable C Compiler?",
    "question_hi": "'pcc' पोर्टेबल C कंपाइलर क्या है?",
    "options_en": [
      "Historical C compiler, predecessor to GCC",
      "Portable compiler",
      "C portable compiler",
      "No such compiler"
    ],
    "options_hi": [
      "ऐतिहासिक C कंपाइलर, GCC का पूर्ववर्ती",
      "पोर्टेबल कंपाइलर",
      "C पोर्टेबल कंपाइलर",
      "ऐसा कोई कंपाइलर नहीं"
    ],
    "answer_en": "Historical C compiler, predecessor to GCC",
    "answer_hi": "ऐतिहासिक C कंपाइलर, GCC का पूर्ववर्ती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'sdcc' Small Device C Compiler?",
    "question_hi": "'sdcc' स्मॉल डिवाइस C कंपाइलर क्या है?",
    "options_en": [
      "C compiler for microcontrollers",
      "Small compiler",
      "Device compiler",
      "No such compiler"
    ],
    "options_hi": [
      "माइक्रोकंट्रोलर के लिए C कंपाइलर",
      "छोटा कंपाइलर",
      "डिवाइस कंपाइलर",
      "ऐसा कोई कंपाइलर नहीं"
    ],
    "answer_en": "C compiler for microcontrollers",
    "answer_hi": "माइक्रोकंट्रोलर के लिए C कंपाइलर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'mingw-w64' compiler?",
    "question_hi": "'mingw-w64' कंपाइलर क्या है?",
    "options_en": [
      "GCC for Windows producing native Windows programs",
      "Windows compiler",
      "64-bit compiler",
      "No such compiler"
    ],
    "options_hi": [
      "Windows के लिए GCC जो नेटिव Windows प्रोग्राम बनाता है",
      "विंडोज कंपाइलर",
      "64-बिट कंपाइलर",
      "ऐसा कोई कंपाइलर नहीं"
    ],
    "answer_en": "GCC for Windows producing native Windows programs",
    "answer_hi": "Windows के लिए GCC जो नेटिव Windows प्रोग्राम बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'cygwin' environment?",
    "question_hi": "'cygwin' एनवायरनमेंट क्या है?",
    "options_en": [
      "POSIX compatibility layer for Windows",
      "Windows environment",
      "Cygnet environment",
      "No such environment"
    ],
    "options_hi": [
      "Windows के लिए POSIX कंपैटिबिलिटी लेयर",
      "विंडोज वातावरण",
      "Cygnet वातावरण",
      "ऐसा कोई वातावरण नहीं"
    ],
    "answer_en": "POSIX compatibility layer for Windows",
    "answer_hi": "Windows के लिए POSIX कंपैटिबिलिटी लेयर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'msys2' environment?",
    "question_hi": "'msys2' एनवायरनमेंट क्या है?",
    "options_en": [
      "Software distribution and building platform for Windows",
      "Windows system",
      "MS system",
      "No such environment"
    ],
    "options_hi": [
      "Windows के लिए सॉफ्टवेयर वितरण और निर्माण मंच",
      "विंडोज सिस्टम",
      "MS सिस्टम",
      "ऐसा कोई वातावरण नहीं"
    ],
    "answer_en": "Software distribution and building platform for Windows",
    "answer_hi": "Windows के लिए सॉफ्टवेयर वितरण और निर्माण मंच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'wsl' Windows Subsystem for Linux?",
    "question_hi": "'wsl' विंडोज सबसिस्टम फॉर लिनक्स क्या है?",
    "options_en": [
      "Runs Linux binaries natively on Windows",
      "Windows Linux",
      "Windows subsystem",
      "No such system"
    ],
    "options_hi": [
      "Windows पर लिनक्स बाइनरी को नेटिवली चलाता है",
      "विंडोज लिनक्स",
      "विंडोज सबसिस्टम",
      "ऐसी कोई प्रणाली नहीं"
    ],
    "answer_en": "Runs Linux binaries natively on Windows",
    "answer_hi": "Windows पर लिनक्स बाइनरी को नेटिवली चलाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'docker' for C development?",
    "question_hi": "C डेवलपमेंट के लिए 'docker' क्या है?",
    "options_en": [
      "Containerization for reproducible builds",
      "Development tool",
      "C development only",
      "No such tool"
    ],
    "options_hi": [
      "पुन: प्रयोज्य बिल्ड के लिए कंटेनरीकरण",
      "डेवलपमेंट टूल",
      "केवल C डेवलपमेंट",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Containerization for reproducible builds",
    "answer_hi": "पुन: प्रयोज्य बिल्ड के लिए कंटेनरीकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'vagrant' for development environments?",
    "question_hi": "डेवलपमेंट एनवायरनमेंट के लिए 'vagrant' क्या है?",
    "options_en": [
      "Tool for building and managing virtual environments",
      "Development manager",
      "Environment builder",
      "No such tool"
    ],
    "options_hi": [
      "वर्चुअल एनवायरनमेंट बनाने और प्रबंधित करने का टूल",
      "डेवलपमेंट मैनेजर",
      "वातावरण निर्माता",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Tool for building and managing virtual environments",
    "answer_hi": "वर्चुअल एनवायरनमेंट बनाने और प्रबंधित करने का टूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'ansible' for C project deployment?",
    "question_hi": "C प्रोजेक्ट डिप्लॉयमेंट के लिए 'ansible' क्या है?",
    "options_en": [
      "Configuration management and deployment tool",
      "Answer tool",
      "Deployment only",
      "No such tool"
    ],
    "options_hi": [
      "कॉन्फ़िगरेशन मैनेजमेंट और डिप्लॉयमेंट टूल",
      "उत्तर उपकरण",
      "केवल तैनाती",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Configuration management and deployment tool",
    "answer_hi": "कॉन्फ़िगरेशन मैनेजमेंट और डिप्लॉयमेंट टूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'git' for C projects?",
    "question_hi": "C प्रोजेक्ट के लिए 'git' क्या है?",
    "options_en": [
      "Distributed version control system",
      "Get it tool",
      "Version control only",
      "No such tool"
    ],
    "options_hi": [
      "वितरित संस्करण नियंत्रण प्रणाली",
      "गेट इट टूल",
      "केवल संस्करण नियंत्रण",
      "ऐसा कोई टूल नहीं"
    ],
    "answer_en": "Distributed version control system",
    "answer_hi": "वितरित संस्करण नियंत्रण प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'subversion' svn for C projects?",
    "question_hi": "C प्रोजेक्ट के लिए 'subversion' svn क्या है?",
    "options_en": [
      "Centralized version control system",
      "Sub version",
      "Version control",
      "No such system"
    ],
    "options_hi": [
      "केंद्रीकृत संस्करण नियंत्रण प्रणाली",
      "सब वर्जन",
      "संस्करण नियंत्रण",
      "ऐसी कोई प्रणाली नहीं"
    ],
    "answer_en": "Centralized version control system",
    "answer_hi": "केंद्रीकृत संस्करण नियंत्रण प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'mercurial' hg for C projects?",
    "question_hi": "C प्रोजेक्ट के लिए 'mercurial' hg क्या है?",
    "options_en": [
      "Another distributed version control system",
      "Mercury tool",
      "Version control",
      "No such system"
    ],
    "options_hi": [
      "एक अन्य वितरित संस्करण नियंत्रण प्रणाली",
      "मरक्यूरी टूल",
      "संस्करण नियंत्रण",
      "ऐसी कोई प्रणाली नहीं"
    ],
    "answer_en": "Another distributed version control system",
    "answer_hi": "एक अन्य वितरित संस्करण नियंत्रण प्रणाली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'fossil' SCM for C projects?",
    "question_hi": "C प्रोजेक्ट के लिए 'fossil' SCM क्या है?",
    "options_en": [
      "SCM with bug tracking and wiki",
      "Fossil tool",
      "Version control",
      "No such system"
    ],
    "options_hi": [
      "बग ट्रैकिंग और विकी के साथ SCM",
      "फॉसिल टूल",
      "संस्करण नियंत्रण",
      "ऐसी कोई प्रणाली नहीं"
    ],
    "answer_en": "SCM with bug tracking and wiki",
    "answer_hi": "बग ट्रैकिंग और विकी के साथ SCM",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'github' for C projects?",
    "question_hi": "C प्रोजेक्ट के लिए 'github' क्या है?",
    "options_en": [
      "Git hosting service with collaboration features",
      "Git hub",
      "Code hosting",
      "No such service"
    ],
    "options_hi": [
      "सहयोग सुविधाओं के साथ Git होस्टिंग सेवा",
      "Git हब",
      "कोड होस्टिंग",
      "ऐसी कोई सेवा नहीं"
    ],
    "answer_en": "Git hosting service with collaboration features",
    "answer_hi": "सहयोग सुविधाओं के साथ Git होस्टिंग सेवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'gitlab' for C projects?",
    "question_hi": "C प्रोजेक्ट के लिए 'gitlab' क्या है?",
    "options_en": [
      "Git repository manager with CI/CD",
      "Git lab",
      "Code lab",
      "No such service"
    ],
    "options_hi": [
      "CI/CD के साथ Git रिपॉजिटरी मैनेजर",
      "Git लैब",
      "कोड लैब",
      "ऐसी कोई सेवा नहीं"
    ],
    "answer_en": "Git repository manager with CI/CD",
    "answer_hi": "CI/CD के साथ Git रिपॉजिटरी मैनेजर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'bitbucket' for C projects?",
    "question_hi": "C प्रोजेक्ट के लिए 'bitbucket' क्या है?",
    "options_en": [
      "Git and Mercurial hosting service",
      "Bit bucket",
      "Code bucket",
      "No such service"
    ],
    "options_hi": [
      "Git और Mercurial होस्टिंग सेवा",
      "बिट बकेट",
      "कोड बकेट",
      "ऐसी कोई सेवा नहीं"
    ],
    "answer_en": "Git and Mercurial hosting service",
    "answer_hi": "Git और Mercurial होस्टिंग सेवा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the future trend in C programming tools?",
    "question_hi": "C प्रोग्रामिंग टूल्स में भविष्य का ट्रेंड क्या है?",
    "options_en": [
      "Better tooling, static analyzers, and integration with modern ecosystems",
      "No changes",
      "Only compiler improvements",
      "C will be replaced"
    ],
    "options_hi": [
      "बेहतर टूलिंग, स्टैटिक एनालाइज़र, और आधुनिक इकोसिस्टम के साथ एकीकरण",
      "कोई बदलाव नहीं",
      "केवल कंपाइलर सुधार",
      "C को प्रतिस्थापित किया जाएगा"
    ],
    "answer_en": "Better tooling, static analyzers, and integration with modern ecosystems",
    "answer_hi": "बेहतर टूलिंग, स्टैटिक एनालाइज़र, और आधुनिक इकोसिस्टम के साथ एकीकरण",
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