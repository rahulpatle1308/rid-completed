const questions = [
  {
    "num": 1,
    "question_en": "What is the output of: int i=5; printf(\"%d %d %d\", i++, i++, i++);",
    "question_hi": "int i=5; printf(\"%d %d %d\", i++, i++, i++); का output क्या है?",
    "options_en": ["Undefined behavior", "5 6 7", "7 6 5", "5 5 5"],
    "options_hi": ["Undefined behavior", "5 6 7", "7 6 5", "5 5 5"],
    "answer_en": "Undefined behavior",
    "answer_hi": "Undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does sizeof('a') return in C?",
    "question_hi": "C में sizeof('a') क्या return करता है?",
    "options_en": ["4 (in C) or 1 (in C++)", "Always 1", "2", "Depends on compiler"],
    "options_hi": ["4 (C में) या 1 (C++ में)", "हमेशा 1", "2", "compiler पर depend करता है"],
    "answer_en": "4 (in C) or 1 (in C++)",
    "answer_hi": "4 (C में) या 1 (C++ में)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is sequence point in C?",
    "question_hi": "C में sequence point क्या होता है?",
    "options_en": ["Point where all side effects are completed", "Point where program starts", "Debug point", "No such concept"],
    "options_hi": ["वह point जहाँ सभी side effects complete होते हैं", "program start का point", "debug point", "ऐसी कोई concept नहीं"],
    "answer_en": "Point where all side effects are completed",
    "answer_hi": "वह point जहाँ सभी side effects complete होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is strict aliasing rule violation?",
    "question_hi": "strict aliasing rule violation क्या होता है?",
    "options_en": ["Accessing object through incompatible pointer type", "Using same variable name", "Type casting", "Always allowed"],
    "options_hi": ["incompatible pointer type के through object access करना", "same variable name use करना", "type casting", "हमेशा allowed"],
    "answer_en": "Accessing object through incompatible pointer type",
    "answer_hi": "incompatible pointer type के through object access करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is restrict keyword purpose?",
    "question_hi": "restrict keyword का purpose क्या है?",
    "options_en": ["Compiler optimization hint for pointer aliasing", "Restrict memory access", "Make pointer constant", "No purpose"],
    "options_hi": ["pointer aliasing के लिए compiler optimization hint", "memory access restrict करना", "pointer constant बनाना", "कोई purpose नहीं"],
    "answer_en": "Compiler optimization hint for pointer aliasing",
    "answer_hi": "pointer aliasing के लिए compiler optimization hint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is memory alignment requirement for double?",
    "question_hi": "double के लिए memory alignment requirement क्या है?",
    "options_en": ["8-byte alignment on most systems", "4-byte alignment", "No alignment", "Compiler dependent"],
    "options_hi": ["अधिकतर systems पर 8-byte alignment", "4-byte alignment", "कोई alignment नहीं", "compiler dependent"],
    "answer_en": "8-byte alignment on most systems",
    "answer_hi": "अधिकतर systems पर 8-byte alignment",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is variable length array limitation in C?",
    "question_hi": "C में variable length array की limitation क्या है?",
    "options_en": ["Cannot have static storage duration", "Cannot be initialized", "Both A and B", "No limitations"],
    "options_hi": ["static storage duration नहीं हो सकता", "initialize नहीं किया जा सकता", "A और B दोनों", "कोई limitations नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is compound literal in C99?",
    "question_hi": "C99 में compound literal क्या होता है?",
    "options_en": ["(int[]){1,2,3} creates anonymous array", "Literal with compound type", "No such feature", "Complex literal"],
    "options_hi": ["(int[]){1,2,3} anonymous array create करता है", "compound type वाला literal", "ऐसी कोई feature नहीं", "complex literal"],
    "answer_en": "(int[]){1,2,3} creates anonymous array",
    "answer_hi": "(int[]){1,2,3} anonymous array create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is designated initializer for arrays?",
    "question_hi": "arrays के लिए designated initializer क्या होता है?",
    "options_en": ["int arr[10] = {[5]=100};", "Must initialize all elements", "Only for structs", "Not in C"],
    "options_hi": ["int arr[10] = {[5]=100};", "सभी elements initialize करने होंगे", "केवल structs के लिए", "C में नहीं है"],
    "answer_en": "int arr[10] = {[5]=100};",
    "answer_hi": "int arr[10] = {[5]=100};",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is complex number support in C?",
    "question_hi": "C में complex number support क्या है?",
    "options_en": ["_Complex keyword and <complex.h>", "No support", "Only C++", "Through libraries"],
    "options_hi": ["_Complex keyword और <complex.h>", "कोई support नहीं", "केवल C++", "libraries के through"],
    "answer_en": "_Complex keyword and <complex.h>",
    "answer_hi": "_Complex keyword और <complex.h>",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is type generic math in C?",
    "question_hi": "C में type generic math क्या होता है?",
    "options_en": ["tgmath.h provides type-generic macros", "No such feature", "Auto type conversion", "Template math"],
    "options_hi": ["tgmath.h type-generic macros provide करता है", "ऐसी कोई feature नहीं", "auto type conversion", "template math"],
    "answer_en": "tgmath.h provides type-generic macros",
    "answer_hi": "tgmath.h type-generic macros provide करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is static array index in parameter?",
    "question_hi": "parameter में static array index क्या होता है?",
    "options_en": ["void func(int arr[static 10]) ensures at least 10 elements", "Makes array static", "No meaning", "Compiler error"],
    "options_hi": ["void func(int arr[static 10]) कम से कम 10 elements ensure करता है", "array static बनाता है", "कोई meaning नहीं", "compiler error"],
    "answer_en": "void func(int arr[static 10]) ensures at least 10 elements",
    "answer_hi": "void func(int arr[static 10]) कम से कम 10 elements ensure करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is anonymous struct/union in C11?",
    "question_hi": "C11 में anonymous struct/union क्या होता है?",
    "options_en": ["struct {int x;}; without tag name", "Not allowed", "Only in C++", "Invalid syntax"],
    "options_hi": ["struct {int x;}; बिना tag name के", "allowed नहीं", "केवल C++ में", "invalid syntax"],
    "answer_en": "struct {int x;}; without tag name",
    "answer_hi": "struct {int x;}; बिना tag name के",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is alignment specifier _Alignas?",
    "question_hi": "_Alignas alignment specifier क्या होता है?",
    "options_en": ["_Alignas(16) int x; for 16-byte alignment", "Old syntax", "Only for struct", "Not in C"],
    "options_hi": ["_Alignas(16) int x; 16-byte alignment के लिए", "old syntax", "केवल struct के लिए", "C में नहीं है"],
    "answer_en": "_Alignas(16) int x; for 16-byte alignment",
    "answer_hi": "_Alignas(16) int x; 16-byte alignment के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is _Noreturn function specifier?",
    "question_hi": "_Noreturn function specifier क्या होता है?",
    "options_en": ["Indicates function doesn't return to caller", "Infinite loop", "Void return", "No such specifier"],
    "options_hi": ["indicate करता है function caller को return नहीं करता", "infinite loop", "void return", "ऐसा कोई specifier नहीं"],
    "answer_en": "Indicates function doesn't return to caller",
    "answer_hi": "indicate करता है function caller को return नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is _Thread_local storage duration?",
    "question_hi": "_Thread_local storage duration क्या होता है?",
    "options_en": ["Thread-local storage, each thread has its own copy", "Global to all threads", "Same as static", "No thread support"],
    "options_hi": ["thread-local storage, प्रत्येक thread की अपनी copy होती है", "सभी threads के लिए global", "static के समान", "कोई thread support नहीं"],
    "answer_en": "Thread-local storage, each thread has its own copy",
    "answer_hi": "thread-local storage, प्रत्येक thread की अपनी copy होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is _Generic keyword usage?",
    "question_hi": "_Generic keyword का usage क्या होता है?",
    "options_en": ["Type-generic selection: _Generic(x, int: 1, default: 0)", "Generic programming", "Template like feature", "No such keyword"],
    "options_hi": ["type-generic selection: _Generic(x, int: 1, default: 0)", "generic programming", "template जैसी feature", "ऐसा कोई keyword नहीं"],
    "answer_en": "Type-generic selection: _Generic(x, int: 1, default: 0)",
    "answer_hi": "type-generic selection: _Generic(x, int: 1, default: 0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is static_assert in C11?",
    "question_hi": "C11 में static_assert क्या होता है?",
    "options_en": ["Compile-time assertion: static_assert(sizeof(int)==4)", "Runtime assert", "Debug assert", "No such feature"],
    "options_hi": ["compile-time assertion: static_assert(sizeof(int)==4)", "runtime assert", "debug assert", "ऐसी कोई feature नहीं"],
    "answer_en": "Compile-time assertion: static_assert(sizeof(int)==4)",
    "answer_hi": "compile-time assertion: static_assert(sizeof(int)==4)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is max_align_t in stddef.h?",
    "question_hi": "stddef.h में max_align_t क्या होता है?",
    "options_en": ["Type with maximal alignment requirement", "Maximum alignment value", "Not standard", "Alignment macro"],
    "options_hi": ["maximal alignment requirement वाला type", "maximum alignment value", "standard नहीं", "alignment macro"],
    "answer_en": "Type with maximal alignment requirement",
    "answer_hi": "maximal alignment requirement वाला type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is atomic_flag_test_and_set_explicit?",
    "question_hi": "atomic_flag_test_and_set_explicit क्या होता है?",
    "options_en": ["Atomic operation with memory order parameter", "Simple test and set", "No such function", "Thread function"],
    "options_hi": ["memory order parameter के साथ atomic operation", "simple test and set", "ऐसा कोई function नहीं", "thread function"],
    "answer_en": "Atomic operation with memory order parameter",
    "answer_hi": "memory order parameter के साथ atomic operation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is memory_order_seq_cst?",
    "question_hi": "memory_order_seq_cst क्या होता है?",
    "options_en": ["Sequentially consistent memory ordering (strongest)", "Relaxed ordering", "Only for reads", "No ordering"],
    "options_hi": ["sequentially consistent memory ordering (सबसे strong)", "relaxed ordering", "केवल reads के लिए", "कोई ordering नहीं"],
    "answer_en": "Sequentially consistent memory ordering (strongest)",
    "answer_hi": "sequentially consistent memory ordering (सबसे strong)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is feclearexcept function?",
    "question_hi": "feclearexcept function क्या होता है?",
    "options_en": ["Clear floating-point exceptions", "Set exceptions", "Check exceptions", "No such function"],
    "options_hi": ["floating-point exceptions clear करता है", "exceptions set करता है", "exceptions check करता है", "ऐसा कोई function नहीं"],
    "answer_en": "Clear floating-point exceptions",
    "answer_hi": "floating-point exceptions clear करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is fenv_t type for?",
    "question_hi": "fenv_t type किसके लिए होता है?",
    "options_en": ["Represents floating-point environment", "Float environment", "Not standard", "Math environment"],
    "options_hi": ["floating-point environment represent करता है", "float environment", "standard नहीं", "math environment"],
    "answer_en": "Represents floating-point environment",
    "answer_hi": "floating-point environment represent करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is _Pragma operator?",
    "question_hi": "_Pragma operator क्या होता है?",
    "options_en": ["Standard alternative to #pragma: _Pragma(\"pack(1)\")", "Same as #pragma", "No such operator", "Preprocessor only"],
    "options_hi": ["#pragma का standard alternative: _Pragma(\"pack(1)\")", "#pragma के समान", "ऐसा कोई operator नहीं", "केवल preprocessor"],
    "answer_en": "Standard alternative to #pragma: _Pragma(\"pack(1)\")",
    "answer_hi": "#pragma का standard alternative: _Pragma(\"pack(1)\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is __func__ predefined identifier?",
    "question_hi": "__func__ predefined identifier क्या होता है?",
    "options_en": ["String containing current function name", "Function pointer", "Current line number", "No such identifier"],
    "options_hi": ["current function name वाला string", "function pointer", "current line number", "ऐसा कोई identifier नहीं"],
    "answer_en": "String containing current function name",
    "answer_hi": "current function name वाला string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is va_copy macro for?",
    "question_hi": "va_copy macro किसके लिए होता है?",
    "options_en": ["Copy va_list for reuse", "Initialize va_list", "Clear va_list", "No such macro"],
    "options_hi": ["reuse के लिए va_list copy करना", "va_list initialize करना", "va_list clear करना", "ऐसा कोई macro नहीं"],
    "answer_en": "Copy va_list for reuse",
    "answer_hi": "reuse के लिए va_list copy करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is set_constraint_handler_s?",
    "question_hi": "set_constraint_handler_s क्या होता है?",
    "options_en": ["Set handler for bounds-checking functions", "Error handler", "Signal handler", "No such function"],
    "options_hi": ["bounds-checking functions के लिए handler set करना", "error handler", "signal handler", "ऐसा कोई function नहीं"],
    "answer_en": "Set handler for bounds-checking functions",
    "answer_hi": "bounds-checking functions के लिए handler set करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is RSIZE_MAX macro?",
    "question_hi": "RSIZE_MAX macro क्या होता है?",
    "options_en": ["Maximum size for bounds-checking functions", "Maximum array size", "Random size", "No such macro"],
    "options_hi": ["bounds-checking functions के लिए maximum size", "maximum array size", "random size", "ऐसा कोई macro नहीं"],
    "answer_en": "Maximum size for bounds-checking functions",
    "answer_hi": "bounds-checking functions के लिए maximum size",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is fmax and fmin function?",
    "question_hi": "fmax और fmin function क्या होता है?",
    "options_en": ["Return maximum/minimum of two floating values", "Find array max/min", "No such functions", "Integer functions"],
    "options_hi": ["दो floating values में से maximum/minimum return करता है", "array का max/min find करना", "ऐसे कोई functions नहीं", "integer functions"],
    "answer_en": "Return maximum/minimum of two floating values",
    "answer_hi": "दो floating values में से maximum/minimum return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is nextafter function?",
    "question_hi": "nextafter function क्या होता है?",
    "options_en": ["Returns next representable floating value", "Next in array", "No such function", "Integer function"],
    "options_hi": ["next representable floating value return करता है", "array में next", "ऐसा कोई function नहीं", "integer function"],
    "answer_en": "Returns next representable floating value",
    "answer_hi": "next representable floating value return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is copysign function?",
    "question_hi": "copysign function क्या होता है?",
    "options_en": ["Copies sign from one float to another", "Copy sign bit", "No such function", "Integer sign copy"],
    "options_hi": ["एक float से दूसरे में sign copy करता है", "sign bit copy करना", "ऐसा कोई function नहीं", "integer sign copy"],
    "answer_en": "Copies sign from one float to another",
    "answer_hi": "एक float से दूसरे में sign copy करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is islessgreater macro?",
    "question_hi": "islessgreater macro क्या होता है?",
    "options_en": ["Checks if x<y or x>y (not unordered)", "Checks less or greater", "No such macro", "Comparison macro"],
    "options_hi": ["check करता है कि x<y या x>y (unordered नहीं)", "less या greater check करना", "ऐसा कोई macro नहीं", "comparison macro"],
    "answer_en": "Checks if x<y or x>y (not unordered)",
    "answer_hi": "check करता है कि x<y या x>y (unordered नहीं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is fpclassify macro?",
    "question_hi": "fpclassify macro क्या होता है?",
    "options_en": ["Classifies floating-point value (NaN, infinite, etc.)", "Float classification", "No such macro", "Type classification"],
    "options_hi": ["floating-point value classify करता है (NaN, infinite, आदि)", "float classification", "ऐसा कोई macro नहीं", "type classification"],
    "answer_en": "Classifies floating-point value (NaN, infinite, etc.)",
    "answer_hi": "floating-point value classify करता है (NaN, infinite, आदि)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is fma function?",
    "question_hi": "fma function क्या होता है?",
    "options_en": ["Fused multiply-add: (x*y)+z with single rounding", "Multiply and add", "No such function", "Fast math"],
    "options_hi": ["fused multiply-add: (x*y)+z single rounding के साथ", "multiply और add", "ऐसा कोई function नहीं", "fast math"],
    "answer_en": "Fused multiply-add: (x*y)+z with single rounding",
    "answer_hi": "fused multiply-add: (x*y)+z single rounding के साथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is remquo function?",
    "question_hi": "remquo function क्या होता है?",
    "options_en": ["Remainder and quotient of floating division", "Remainder only", "No such function", "Integer remainder"],
    "options_hi": ["floating division का remainder और quotient", "केवल remainder", "ऐसा कोई function नहीं", "integer remainder"],
    "answer_en": "Remainder and quotient of floating division",
    "answer_hi": "floating division का remainder और quotient",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is scalbn function?",
    "question_hi": "scalbn function क्या होता है?",
    "options_en": ["x * (FLT_RADIX^n) efficiently", "Scale by n", "No such function", "Integer scaling"],
    "options_hi": ["x * (FLT_RADIX^n) efficiently", "n से scale करना", "ऐसा कोई function नहीं", "integer scaling"],
    "answer_en": "x * (FLT_RADIX^n) efficiently",
    "answer_hi": "x * (FLT_RADIX^n) efficiently",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is ilogb function?",
    "question_hi": "ilogb function क्या होता है?",
    "options_en": ["Extracts exponent as integer", "Integer logarithm", "No such function", "Log base 10"],
    "options_hi": ["exponent को integer के रूप में extract करता है", "integer logarithm", "ऐसा कोई function नहीं", "log base 10"],
    "answer_en": "Extracts exponent as integer",
    "answer_hi": "exponent को integer के रूप में extract करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is logb function?",
    "question_hi": "logb function क्या होता है?",
    "options_en": ["Returns exponent as floating value", "Floating logarithm", "No such function", "Log base 2"],
    "options_hi": ["exponent को floating value के रूप में return करता है", "floating logarithm", "ऐसा कोई function नहीं", "log base 2"],
    "answer_en": "Returns exponent as floating value",
    "answer_hi": "exponent को floating value के रूप में return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is nan function?",
    "question_hi": "nan function क्या होता है?",
    "options_en": ["Returns quiet NaN with payload", "Returns NaN", "No such function", "Not a number"],
    "options_hi": ["payload के साथ quiet NaN return करता है", "NaN return करता है", "ऐसा कोई function नहीं", "not a number"],
    "answer_en": "Returns quiet NaN with payload",
    "answer_hi": "payload के साथ quiet NaN return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is nexttoward function?",
    "question_hi": "nexttoward function क्या होता है?",
    "options_en": ["Next representable value toward long double", "Toward target", "No such function", "Next value"],
    "options_hi": ["long double की ओर next representable value", "target की ओर", "ऐसा कोई function नहीं", "next value"],
    "answer_en": "Next representable value toward long double",
    "answer_hi": "long double की ओर next representable value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is strtof, strtold functions?",
    "question_hi": "strtof, strtold functions क्या होते हैं?",
    "options_en": ["String to float/long double conversion", "String to double", "No such functions", "String conversion"],
    "options_hi": ["string से float/long double conversion", "string से double", "ऐसे कोई functions नहीं", "string conversion"],
    "answer_en": "String to float/long double conversion",
    "answer_hi": "string से float/long double conversion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is strtok_r function?",
    "question_hi": "strtok_r function क्या होता है?",
    "options_en": ["Reentrant version of strtok with saveptr", "Thread-safe strtok", "No such function", "String token"],
    "options_hi": ["saveptr के साथ strtok का reentrant version", "thread-safe strtok", "ऐसा कोई function नहीं", "string token"],
    "answer_en": "Reentrant version of strtok with saveptr",
    "answer_hi": "saveptr के साथ strtok का reentrant version",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is strerror_r function?",
    "question_hi": "strerror_r function क्या होता है?",
    "options_en": ["Thread-safe error string function", "Error string", "No such function", "Error reporting"],
    "options_hi": ["thread-safe error string function", "error string", "ऐसा कोई function नहीं", "error reporting"],
    "answer_en": "Thread-safe error string function",
    "answer_hi": "thread-safe error string function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is gmtime_r function?",
    "question_hi": "gmtime_r function क्या होता है?",
    "options_en": ["Reentrant version of gmtime", "GMT time", "No such function", "Time function"],
    "options_hi": ["gmtime का reentrant version", "GMT time", "ऐसा कोई function नहीं", "time function"],
    "answer_en": "Reentrant version of gmtime",
    "answer_hi": "gmtime का reentrant version",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is clock_gettime function?",
    "question_hi": "clock_gettime function क्या होता है?",
    "options_en": ["High-resolution time (POSIX)", "Clock time", "No such function", "Get time"],
    "options_hi": ["high-resolution time (POSIX)", "clock time", "ऐसा कोई function नहीं", "time get करना"],
    "answer_en": "High-resolution time (POSIX)",
    "answer_hi": "high-resolution time (POSIX)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is timespec struct?",
    "question_hi": "timespec struct क्या होता है?",
    "options_en": ["struct with tv_sec and tv_nsec for nanosecond time", "Time structure", "No such struct", "Second structure"],
    "options_hi": ["nanosecond time के लिए tv_sec और tv_nsec वाला struct", "time structure", "ऐसा कोई struct नहीं", "second structure"],
    "answer_en": "struct with tv_sec and tv_nsec for nanosecond time",
    "answer_hi": "nanosecond time के लिए tv_sec और tv_nsec वाला struct",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is pthread_once function?",
    "question_hi": "pthread_once function क्या होता है?",
    "options_en": ["Ensures initialization happens only once in threads", "Thread once", "No such function", "One-time init"],
    "options_hi": ["ensure करता है initialization केवल एक बार threads में हो", "thread once", "ऐसा कोई function नहीं", "one-time init"],
    "answer_en": "Ensures initialization happens only once in threads",
    "answer_hi": "ensure करता है initialization केवल एक बार threads में हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is pthread_condattr_setclock?",
    "question_hi": "pthread_condattr_setclock क्या होता है?",
    "options_en": ["Sets clock for condition variable timeout", "Condition clock", "No such function", "Clock setting"],
    "options_hi": ["condition variable timeout के लिए clock set करता है", "condition clock", "ऐसा कोई function नहीं", "clock setting"],
    "answer_en": "Sets clock for condition variable timeout",
    "answer_hi": "condition variable timeout के लिए clock set करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is PTHREAD_MUTEX_ERRORCHECK?",
    "question_hi": "PTHREAD_MUTEX_ERRORCHECK क्या होता है?",
    "options_en": ["Mutex type that detects deadlock errors", "Error check mutex", "No such type", "Mutex type"],
    "options_hi": ["deadlock errors detect करने वाला mutex type", "error check mutex", "ऐसा कोई type नहीं", "mutex type"],
    "answer_en": "Mutex type that detects deadlock errors",
    "answer_hi": "deadlock errors detect करने वाला mutex type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is pthread_barrier_wait?",
    "question_hi": "pthread_barrier_wait क्या होता है?",
    "options_en": ["Synchronizes threads at barrier point", "Barrier wait", "No such function", "Thread barrier"],
    "options_hi": ["threads को barrier point पर synchronize करता है", "barrier wait", "ऐसा कोई function नहीं", "thread barrier"],
    "answer_en": "Synchronizes threads at barrier point",
    "answer_hi": "threads को barrier point पर synchronize करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is pthread_spin_lock?",
    "question_hi": "pthread_spin_lock क्या होता है?",
    "options_en": ["Spinlock for short critical sections", "Spin lock", "No such function", "Busy wait lock"],
    "options_hi": ["short critical sections के लिए spinlock", "spin lock", "ऐसा कोई function नहीं", "busy wait lock"],
    "answer_en": "Spinlock for short critical sections",
    "answer_hi": "short critical sections के लिए spinlock",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is pthread_attr_setstack?",
    "question_hi": "pthread_attr_setstack क्या होता है?",
    "options_en": ["Sets custom stack for thread", "Stack setting", "No such function", "Thread stack"],
    "options_hi": ["thread के लिए custom stack set करता है", "stack setting", "ऐसा कोई function नहीं", "thread stack"],
    "answer_en": "Sets custom stack for thread",
    "answer_hi": "thread के लिए custom stack set करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is pthread_cancel?",
    "question_hi": "pthread_cancel क्या होता है?",
    "options_en": ["Requests thread cancellation", "Thread cancel", "No such function", "Cancel thread"],
    "options_hi": ["thread cancellation request करता है", "thread cancel", "ऐसा कोई function नहीं", "thread cancel"],
    "answer_en": "Requests thread cancellation",
    "answer_hi": "thread cancellation request करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is pthread_cleanup_push?",
    "question_hi": "pthread_cleanup_push क्या होता है?",
    "options_en": ["Pushes cleanup handler for thread cancellation", "Cleanup push", "No such function", "Thread cleanup"],
    "options_hi": ["thread cancellation के लिए cleanup handler push करता है", "cleanup push", "ऐसा कोई function नहीं", "thread cleanup"],
    "answer_en": "Pushes cleanup handler for thread cancellation",
    "answer_hi": "thread cancellation के लिए cleanup handler push करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is sched_get_priority_max?",
    "question_hi": "sched_get_priority_max क्या होता है?",
    "options_en": ["Gets maximum priority for scheduling policy", "Max priority", "No such function", "Priority get"],
    "options_hi": ["scheduling policy के लिए maximum priority get करता है", "max priority", "ऐसा कोई function नहीं", "priority get"],
    "answer_en": "Gets maximum priority for scheduling policy",
    "answer_hi": "scheduling policy के लिए maximum priority get करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is CPU_ZERO macro?",
    "question_hi": "CPU_ZERO macro क्या होता है?",
    "options_en": ["Clears CPU set (cpu_set_t)", "CPU clear", "No such macro", "CPU set zero"],
    "options_hi": ["CPU set clear करता है (cpu_set_t)", "CPU clear", "ऐसा कोई macro नहीं", "CPU set zero"],
    "answer_en": "Clears CPU set (cpu_set_t)",
    "answer_hi": "CPU set clear करता है (cpu_set_t)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is pthread_setaffinity_np?",
    "question_hi": "pthread_setaffinity_np क्या होता है?",
    "options_en": ["Sets CPU affinity for thread (non-portable)", "CPU affinity", "No such function", "Thread affinity"],
    "options_hi": ["thread के लिए CPU affinity set करता है (non-portable)", "CPU affinity", "ऐसा कोई function नहीं", "thread affinity"],
    "answer_en": "Sets CPU affinity for thread (non-portable)",
    "answer_hi": "thread के लिए CPU affinity set करता है (non-portable)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is mlockall function?",
    "question_hi": "mlockall function क्या होता है?",
    "options_en": ["Locks all process memory in RAM", "Lock memory", "No such function", "Memory lock"],
    "options_hi": ["process memory को RAM में lock करता है", "memory lock", "ऐसा कोई function नहीं", "memory lock"],
    "answer_en": "Locks all process memory in RAM",
    "answer_hi": "process memory को RAM में lock करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is posix_memalign?",
    "question_hi": "posix_memalign क्या होता है?",
    "options_en": ["Allocates aligned memory (POSIX)", "Aligned allocation", "No such function", "Memory align"],
    "options_hi": ["aligned memory allocate करता है (POSIX)", "aligned allocation", "ऐसा कोई function नहीं", "memory align"],
    "answer_en": "Allocates aligned memory (POSIX)",
    "answer_hi": "aligned memory allocate करता है (POSIX)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is memfd_create?",
    "question_hi": "memfd_create क्या होता है?",
    "options_en": ["Creates anonymous file in memory (Linux)", "Memory file", "No such function", "File in memory"],
    "options_hi": ["memory में anonymous file create करता है (Linux)", "memory file", "ऐसा कोई function नहीं", "memory में file"],
    "answer_en": "Creates anonymous file in memory (Linux)",
    "answer_hi": "memory में anonymous file create करता है (Linux)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is eventfd?",
    "question_hi": "eventfd क्या होता है?",
    "options_en": ["Creates file descriptor for event notification", "Event FD", "No such function", "Notification FD"],
    "options_hi": ["event notification के लिए file descriptor create करता है", "event FD", "ऐसा कोई function नहीं", "notification FD"],
    "answer_en": "Creates file descriptor for event notification",
    "answer_hi": "event notification के लिए file descriptor create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is timerfd_create?",
    "question_hi": "timerfd_create क्या होता है?",
    "options_en": ["Creates timer as file descriptor (Linux)", "Timer FD", "No such function", "Timer descriptor"],
    "options_hi": ["file descriptor के रूप में timer create करता है (Linux)", "timer FD", "ऐसा कोई function नहीं", "timer descriptor"],
    "answer_en": "Creates timer as file descriptor (Linux)",
    "answer_hi": "file descriptor के रूप में timer create करता है (Linux)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is signalfd?",
    "question_hi": "signalfd क्या होता है?",
    "options_en": ["Creates file descriptor for signal handling", "Signal FD", "No such function", "Signal descriptor"],
    "options_hi": ["signal handling के लिए file descriptor create करता है", "signal FD", "ऐसा कोई function नहीं", "signal descriptor"],
    "answer_en": "Creates file descriptor for signal handling",
    "answer_hi": "signal handling के लिए file descriptor create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is inotify_init?",
    "question_hi": "inotify_init क्या होता है?",
    "options_en": ["Initializes inotify for file system events", "Inotify init", "No such function", "File monitoring"],
    "options_hi": ["file system events के लिए inotify initialize करता है", "inotify init", "ऐसा कोई function नहीं", "file monitoring"],
    "answer_en": "Initializes inotify for file system events",
    "answer_hi": "file system events के लिए inotify initialize करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is epoll_create1?",
    "question_hi": "epoll_create1 क्या होता है?",
    "options_en": ["Creates epoll instance with flags (Linux)", "Epoll create", "No such function", "Event poll"],
    "options_hi": ["flags के साथ epoll instance create करता है (Linux)", "epoll create", "ऐसा कोई function नहीं", "event poll"],
    "answer_en": "Creates epoll instance with flags (Linux)",
    "answer_hi": "flags के साथ epoll instance create करता है (Linux)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is O_CLOEXEC flag?",
    "question_hi": "O_CLOEXEC flag क्या होता है?",
    "options_en": ["Close-on-exec flag for file descriptors", "Close exec", "No such flag", "Exec flag"],
    "options_hi": ["file descriptors के लिए close-on-exec flag", "close exec", "ऐसा कोई flag नहीं", "exec flag"],
    "answer_en": "Close-on-exec flag for file descriptors",
    "answer_hi": "file descriptors के लिए close-on-exec flag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is MAP_ANONYMOUS flag?",
    "question_hi": "MAP_ANONYMOUS flag क्या होता है?",
    "options_en": ["mmap flag for anonymous memory mapping", "Anonymous map", "No such flag", "Memory map"],
    "options_hi": ["anonymous memory mapping के लिए mmap flag", "anonymous map", "ऐसा कोई flag नहीं", "memory map"],
    "answer_en": "mmap flag for anonymous memory mapping",
    "answer_hi": "anonymous memory mapping के लिए mmap flag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is MAP_POPULATE flag?",
    "question_hi": "MAP_POPULATE flag क्या होता है?",
    "options_en": ["mmap flag to pre-populate page tables", "Populate map", "No such flag", "Page populate"],
    "options_hi": ["page tables pre-populate करने के लिए mmap flag", "populate map", "ऐसा कोई flag नहीं", "page populate"],
    "answer_en": "mmap flag to pre-populate page tables",
    "answer_hi": "page tables pre-populate करने के लिए mmap flag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is MCL_FUTURE flag?",
    "question_hi": "MCL_FUTURE flag क्या होता है?",
    "options_en": ["mlockall flag for future memory allocations", "Future lock", "No such flag", "Memory lock flag"],
    "options_hi": ["future memory allocations के लिए mlockall flag", "future lock", "ऐसा कोई flag नहीं", "memory lock flag"],
    "answer_en": "mlockall flag for future memory allocations",
    "answer_hi": "future memory allocations के लिए mlockall flag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is PROT_EXEC flag?",
    "question_hi": "PROT_EXEC flag क्या होता है?",
    "options_en": ["mprotect flag for executable memory", "Executable protect", "No such flag", "Execute flag"],
    "options_hi": ["executable memory के लिए mprotect flag", "executable protect", "ऐसा कोई flag नहीं", "execute flag"],
    "answer_en": "mprotect flag for executable memory",
    "answer_hi": "executable memory के लिए mprotect flag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is MADV_DONTNEED advice?",
    "question_hi": "MADV_DONTNEED advice क्या होता है?",
    "options_en": ["madvise to free memory (Linux)", "Don't need", "No such advice", "Memory advice"],
    "options_hi": ["memory free करने के लिए madvise (Linux)", "don't need", "ऐसी कोई advice नहीं", "memory advice"],
    "answer_en": "madvise to free memory (Linux)",
    "answer_hi": "memory free करने के लिए madvise (Linux)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is MADV_SEQUENTIAL advice?",
    "question_hi": "MADV_SEQUENTIAL advice क्या होता है?",
    "options_en": ["madvise for sequential memory access", "Sequential access", "No such advice", "Access pattern"],
    "options_hi": ["sequential memory access के लिए madvise", "sequential access", "ऐसी कोई advice नहीं", "access pattern"],
    "answer_en": "madvise for sequential memory access",
    "answer_hi": "sequential memory access के लिए madvise",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is MS_SYNC flag?",
    "question_hi": "MS_SYNC flag क्या होता है?",
    "options_en": ["msync flag for synchronous sync", "Sync flag", "No such flag", "Memory sync"],
    "options_hi": ["synchronous sync के लिए msync flag", "sync flag", "ऐसा कोई flag नहीं", "memory sync"],
    "answer_en": "msync flag for synchronous sync",
    "answer_hi": "synchronous sync के लिए msync flag",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is O_DIRECT flag?",
    "question_hi": "O_DIRECT flag क्या होता है?",
    "options_en": ["Direct I/O bypassing page cache", "Direct IO", "No such flag", "Bypass cache"],
    "options_hi": ["page cache bypass करते हुए direct I/O", "direct IO", "ऐसा कोई flag नहीं", "cache bypass"],
    "answer_en": "Direct I/O bypassing page cache",
    "answer_hi": "page cache bypass करते हुए direct I/O",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is O_NOATIME flag?",
    "question_hi": "O_NOATIME flag क्या होता है?",
    "options_en": ["Don't update access time on read", "No atime", "No such flag", "Access time"],
    "options_hi": ["read पर access time update न करें", "no atime", "ऐसा कोई flag नहीं", "access time"],
    "answer_en": "Don't update access time on read",
    "answer_hi": "read पर access time update न करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is SEEK_DATA position?",
    "question_hi": "SEEK_DATA position क्या होता है?",
    "options_en": ["lseek to next data hole (Linux)", "Seek data", "No such position", "Data hole"],
    "options_hi": ["next data hole पर lseek (Linux)", "seek data", "ऐसी कोई position नहीं", "data hole"],
    "answer_en": "lseek to next data hole (Linux)",
    "answer_hi": "next data hole पर lseek (Linux)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is fallocate function?",
    "question_hi": "fallocate function क्या होता है?",
    "options_en": ["Pre-allocates file space efficiently (Linux)", "Allocate space", "No such function", "File allocate"],
    "options_hi": ["file space efficiently pre-allocate करता है (Linux)", "space allocate", "ऐसा कोई function नहीं", "file allocate"],
    "answer_en": "Pre-allocates file space efficiently (Linux)",
    "answer_hi": "file space efficiently pre-allocate करता है (Linux)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is sync_file_range?",
    "question_hi": "sync_file_range क्या होता है?",
    "options_en": ["Sync specific file range to disk", "Sync range", "No such function", "File sync"],
    "options_hi": ["specific file range को disk पर sync करता है", "sync range", "ऐसा कोई function नहीं", "file sync"],
    "answer_en": "Sync specific file range to disk",
    "answer_hi": "specific file range को disk पर sync करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is copy_file_range?",
    "question_hi": "copy_file_range क्या होता है?",
    "options_en": ["Efficient file range copy (Linux)", "Copy range", "No such function", "File copy"],
    "options_hi": ["efficient file range copy (Linux)", "copy range", "ऐसा कोई function नहीं", "file copy"],
    "answer_en": "Efficient file range copy (Linux)",
    "answer_hi": "efficient file range copy (Linux)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is splice function?",
    "question_hi": "splice function क्या होता है?",
    "options_en": ["Zero-copy data transfer between file descriptors", "Splice data", "No such function", "Data transfer"],
    "options_hi": ["file descriptors के बीच zero-copy data transfer", "splice data", "ऐसा कोई function नहीं", "data transfer"],
    "answer_en": "Zero-copy data transfer between file descriptors",
    "answer_hi": "file descriptors के बीच zero-copy data transfer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is vmsplice function?",
    "question_hi": "vmsplice function क्या होता है?",
    "options_en": ["Splice user memory to pipe", "VM splice", "No such function", "Memory to pipe"],
    "options_hi": ["user memory को pipe में splice करता है", "VM splice", "ऐसा कोई function नहीं", "memory से pipe"],
    "answer_en": "Splice user memory to pipe",
    "answer_hi": "user memory को pipe में splice करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is tee function?",
    "question_hi": "tee function क्या होता है?",
    "options_en": ["Copy data between pipes without consuming", "Tee pipe", "No such function", "Pipe copy"],
    "options_hi": ["data को pipes के बीच consume किए बिना copy करता है", "tee pipe", "ऐसा कोई function नहीं", "pipe copy"],
    "answer_en": "Copy data between pipes without consuming",
    "answer_hi": "data को pipes के बीच consume किए बिना copy करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is getrandom system call?",
    "question_hi": "getrandom system call क्या होता है?",
    "options_en": ["Gets random bytes from kernel (Linux)", "Get random", "No such call", "Random bytes"],
    "options_hi": ["kernel से random bytes get करता है (Linux)", "get random", "ऐसी कोई call नहीं", "random bytes"],
    "answer_en": "Gets random bytes from kernel (Linux)",
    "answer_hi": "kernel से random bytes get करता है (Linux)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is memrchr function?",
    "question_hi": "memrchr function क्या होता है?",
    "options_en": ["Reverse search for character in memory", "Reverse memchr", "No such function", "Memory reverse"],
    "options_hi": ["memory में character की reverse search", "reverse memchr", "ऐसा कोई function नहीं", "memory reverse"],
    "answer_en": "Reverse search for character in memory",
    "answer_hi": "memory में character की reverse search",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is strfry function?",
    "question_hi": "strfry function क्या होता है?",
    "options_en": ["Randomizes string (GNU extension)", "String fry", "No such function", "Random string"],
    "options_hi": ["string randomize करता है (GNU extension)", "string fry", "ऐसा कोई function नहीं", "random string"],
    "answer_en": "Randomizes string (GNU extension)",
    "answer_hi": "string randomize करता है (GNU extension)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is memmem function?",
    "question_hi": "memmem function क्या होता है?",
    "options_en": ["Finds substring in memory (GNU)", "Memory mem", "No such function", "Substring find"],
    "options_hi": ["memory में substring find करता है (GNU)", "memory mem", "ऐसा कोई function नहीं", "substring find"],
    "answer_en": "Finds substring in memory (GNU)",
    "answer_hi": "memory में substring find करता है (GNU)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is strsep function?",
    "question_hi": "strsep function क्या होता है?",
    "options_en": ["String tokenizer that handles empty fields", "String separator", "No such function", "Tokenize"],
    "options_hi": ["empty fields handle करने वाला string tokenizer", "string separator", "ऐसा कोई function नहीं", "tokenize"],
    "answer_en": "String tokenizer that handles empty fields",
    "answer_hi": "empty fields handle करने वाला string tokenizer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is basename_r dirname_r?",
    "question_hi": "basename_r dirname_r क्या होते हैं?",
    "options_en": ["Reentrant versions of basename/dirname", "Reentrant path", "No such functions", "Path functions"],
    "options_hi": ["basename/dirname के reentrant versions", "reentrant path", "ऐसे कोई functions नहीं", "path functions"],
    "answer_en": "Reentrant versions of basename/dirname",
    "answer_hi": "basename/dirname के reentrant versions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is qsort_r function?",
    "question_hi": "qsort_r function क्या होता है?",
    "options_en": ["Reentrant qsort with context parameter", "Reentrant qsort", "No such function", "Sort with context"],
    "options_hi": ["context parameter के साथ reentrant qsort", "reentrant qsort", "ऐसा कोई function नहीं", "context के साथ sort"],
    "answer_en": "Reentrant qsort with context parameter",
    "answer_hi": "context parameter के साथ reentrant qsort",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is heapsort mergesort?",
    "question_hi": "heapsort mergesort क्या होते हैं?",
    "options_en": ["Alternative sorting functions (BSD)", "Heap and merge sort", "No such functions", "Sort algorithms"],
    "options_hi": ["alternative sorting functions (BSD)", "heap और merge sort", "ऐसे कोई functions नहीं", "sort algorithms"],
    "answer_en": "Alternative sorting functions (BSD)",
    "answer_hi": "alternative sorting functions (BSD)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is lfind lsearch?",
    "question_hi": "lfind lsearch क्या होते हैं?",
    "options_en": ["Linear search in array", "Linear find/search", "No such functions", "Array search"],
    "options_hi": ["array में linear search", "linear find/search", "ऐसे कोई functions नहीं", "array search"],
    "answer_en": "Linear search in array",
    "answer_hi": "array में linear search",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is tdelete tfind twalk?",
    "question_hi": "tdelete tfind twalk क्या होते हैं?",
    "options_en": ["Binary tree manipulation functions", "Tree functions", "No such functions", "Binary tree"],
    "options_hi": ["binary tree manipulation functions", "tree functions", "ऐसे कोई functions नहीं", "binary tree"],
    "answer_en": "Binary tree manipulation functions",
    "answer_hi": "binary tree manipulation functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is hcreate hsearch hdestroy?",
    "question_hi": "hcreate hsearch hdestroy क्या होते हैं?",
    "options_en": ["Hash table functions", "Hash functions", "No such functions", "Hash table"],
    "options_hi": ["hash table functions", "hash functions", "ऐसे कोई functions नहीं", "hash table"],
    "answer_en": "Hash table functions",
    "answer_hi": "hash table functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is insque remque?",
    "question_hi": "insque remque क्या होते हैं?",
    "options_en": ["Insert/remove from queue (SysV)", "Queue insert/remove", "No such functions", "Queue operations"],
    "options_hi": ["queue से insert/remove (SysV)", "queue insert/remove", "ऐसे कोई functions नहीं", "queue operations"],
    "answer_en": "Insert/remove from queue (SysV)",
    "answer_hi": "queue से insert/remove (SysV)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is crypt crypt_r?",
    "question_hi": "crypt crypt_r क्या होते हैं?",
    "options_en": ["Password encryption functions", "Crypt functions", "No such functions", "Password hash"],
    "options_hi": ["password encryption functions", "crypt functions", "ऐसे कोई functions नहीं", "password hash"],
    "answer_en": "Password encryption functions",
    "answer_hi": "password encryption functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is getpass function?",
    "question_hi": "getpass function क्या होता है?",
    "options_en": ["Gets password without echo (obsolete)", "Get password", "No such function", "Password input"],
    "options_hi": ["password को echo के बिना get करता है (obsolete)", "get password", "ऐसा कोई function नहीं", "password input"],
    "answer_en": "Gets password without echo (obsolete)",
    "answer_hi": "password को echo के बिना get करता है (obsolete)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is ftw nftw functions?",
    "question_hi": "ftw nftw functions क्या होते हैं?",
    "options_en": ["File tree walk functions", "Tree walk", "No such functions", "Directory walk"],
    "options_hi": ["file tree walk functions", "tree walk", "ऐसे कोई functions नहीं", "directory walk"],
    "answer_en": "File tree walk functions",
    "answer_hi": "file tree walk functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is glob function?",
    "question_hi": "glob function क्या होता है?",
    "options_en": ["Filename pattern matching expansion", "Glob pattern", "No such function", "Pattern match"],
    "options_hi": ["filename pattern matching expansion", "glob pattern", "ऐसा कोई function नहीं", "pattern match"],
    "answer_en": "Filename pattern matching expansion",
    "answer_hi": "filename pattern matching expansion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is wordexp function?",
    "question_hi": "wordexp function क्या होता है?",
    "options_en": ["Word expansion like shell", "Word expand", "No such function", "Shell expansion"],
    "options_hi": ["shell की तरह word expansion", "word expand", "ऐसा कोई function नहीं", "shell expansion"],
    "answer_en": "Word expansion like shell",
    "answer_hi": "shell की तरह word expansion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is fnmatch function?",
    "question_hi": "fnmatch function क्या होता है?",
    "options_en": ["Filename pattern matching", "File name match", "No such function", "Pattern matching"],
    "options_hi": ["filename pattern matching", "file name match", "ऐसा कोई function नहीं", "pattern matching"],
    "answer_en": "Filename pattern matching",
    "answer_hi": "filename pattern matching",
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