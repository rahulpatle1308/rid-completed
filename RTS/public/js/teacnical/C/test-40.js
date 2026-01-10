const questions = [
  {
    "num": 1,
    "question_en": "What is 'pointer to array of function pointers returning int' syntax?",
    "question_hi": "'pointer to array of function pointers returning int' syntax क्या है?",
    "options_en": ["int (*(*foo)[5])(void)", "int (**foo[5])(void)", "int (*foo)(void)[5]", "int (*foo[5])(void)"],
    "options_hi": ["int (*(*foo)[5])(void)", "int (**foo[5])(void)", "int (*foo)(void)[5]", "int (*foo[5])(void)"],
    "answer_en": "int (*(*foo)[5])(void)",
    "answer_hi": "int (*(*foo)[5])(void)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'complex number literal' syntax in C?",
    "question_hi": "C में 'complex number literal' syntax क्या है?",
    "options_en": ["1.0 + 2.0*I", "(1.0, 2.0)", "1.0 + 2.0i", "_Complex(1.0, 2.0)"],
    "options_hi": ["1.0 + 2.0*I", "(1.0, 2.0)", "1.0 + 2.0i", "_Complex(1.0, 2.0)"],
    "answer_en": "1.0 + 2.0*I",
    "answer_hi": "1.0 + 2.0*I",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'variable length array in struct' (C99 feature)?",
    "question_hi": "'variable length array in struct' (C99 feature) क्या है?",
    "options_en": ["struct S {int n; int arr[];}; (flexible array member)", "Not allowed", "struct S {int n; int arr[n];};", "Only with malloc"],
    "options_hi": ["struct S {int n; int arr[];}; (flexible array member)", "Allowed नहीं", "struct S {int n; int arr[n];};", "केवल malloc के साथ"],
    "answer_en": "struct S {int n; int arr[];}; (flexible array member)",
    "answer_hi": "struct S {int n; int arr[];}; (flexible array member)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'compound literal with designated initializers'?",
    "question_hi": "'compound literal with designated initializers' क्या है?",
    "options_en": ["(struct point){.x=1, .y=2}", "{1, 2}", "point{1, 2}", "Not allowed"],
    "options_hi": ["(struct point){.x=1, .y=2}", "{1, 2}", "point{1, 2}", "allowed नहीं"],
    "answer_en": "(struct point){.x=1, .y=2}",
    "answer_hi": "(struct point){.x=1, .y=2}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'type generic math function' example?",
    "question_hi": "'type generic math function' का example क्या है?",
    "options_en": ["sqrt() from tgmath.h works with double/float/long double", "sin() only double", "Custom template", "No such feature"],
    "options_hi": ["tgmath.h से sqrt() double/float/long double के साथ काम करता है", "sin() केवल double", "custom template", "ऐसी कोई feature नहीं"],
    "answer_en": "sqrt() from tgmath.h works with double/float/long double",
    "answer_hi": "tgmath.h से sqrt() double/float/long double के साथ काम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'restrict keyword with multi-dimensional arrays'?",
    "question_hi": "'multi-dimensional arrays के साथ restrict keyword' क्या है?",
    "options_en": ["void matmul(int n, int restrict a[][n], int restrict b[][n])", "Cannot use restrict with arrays", "Only for 1D arrays", "restrict a[n][n]"],
    "options_hi": ["void matmul(int n, int restrict a[][n], int restrict b[][n])", "arrays के साथ restrict use नहीं कर सकते", "केवल 1D arrays के लिए", "restrict a[n][n]"],
    "answer_en": "void matmul(int n, int restrict a[][n], int restrict b[][n])",
    "answer_hi": "void matmul(int n, int restrict a[][n], int restrict b[][n])",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'static assertion without message in C11'?",
    "question_hi": "C11 में 'message के बिना static assertion' क्या है?",
    "options_en": ["_Static_assert(condition);", "static_assert(condition);", "assert(condition);", "Not allowed"],
    "options_hi": ["_Static_assert(condition);", "static_assert(condition);", "assert(condition);", "allowed नहीं"],
    "answer_en": "_Static_assert(condition);",
    "answer_hi": "_Static_assert(condition);",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'anonymous struct with union' in C11?",
    "question_hi": "C11 में 'anonymous struct with union' क्या है?",
    "options_en": ["struct { union { int x; float y; }; };", "Anonymous not allowed", "Only in C++", "struct union {int x;};"],
    "options_hi": ["struct { union { int x; float y; }; };", "anonymous allowed नहीं", "केवल C++ में", "struct union {int x;};"],
    "answer_en": "struct { union { int x; float y; }; };",
    "answer_hi": "struct { union { int x; float y; }; };",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'UTF-8 string literal prefix'?",
    "question_hi": "'UTF-8 string literal prefix' क्या है?",
    "options_en": ["u8\"text\"", "utf8\"text\"", "U\"text\"", "No prefix needed"],
    "options_hi": ["u8\"text\"", "utf8\"text\"", "U\"text\"", "कोई prefix needed नहीं"],
    "answer_en": "u8\"text\"",
    "answer_hi": "u8\"text\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'UTF-16 string literal'?",
    "question_hi": "'UTF-16 string literal' क्या है?",
    "options_en": ["u\"text\"", "U\"text\"", "L\"text\"", "utf16\"text\""],
    "options_hi": ["u\"text\"", "U\"text\"", "L\"text\"", "utf16\"text\""],
    "answer_en": "u\"text\"",
    "answer_hi": "u\"text\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'UTF-32 string literal'?",
    "question_hi": "'UTF-32 string literal' क्या है?",
    "options_en": ["U\"text\"", "u\"text\"", "L\"text\"", "utf32\"text\""],
    "options_hi": ["U\"text\"", "u\"text\"", "L\"text\"", "utf32\"text\""],
    "answer_en": "U\"text\"",
    "answer_hi": "U\"text\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'wide string literal concatenation' rule?",
    "question_hi": "'wide string literal concatenation' का rule क्या है?",
    "options_en": ["L\"wide\" \"narrow\" produces implementation-defined result", "Not allowed", "Becomes L\"wide narrow\"", "Compile error"],
    "options_hi": ["L\"wide\" \"narrow\" produces implementation-defined result", "allowed नहीं", "L\"wide narrow\" बन जाता है", "compile error"],
    "answer_en": "L\"wide\" \"narrow\" produces implementation-defined result",
    "answer_hi": "L\"wide\" \"narrow\" produces implementation-defined result",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'aligned_alloc' function for?",
    "question_hi": "'aligned_alloc' function किसके लिए है?",
    "options_en": ["Allocate aligned memory (C11)", "Like malloc but aligned", "Both A and B", "POSIX only"],
    "options_hi": ["aligned memory allocate करना (C11)", "malloc की तरह लेकिन aligned", "A और B दोनों", "केवल POSIX"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'max_align_t' usage?",
    "question_hi": "'max_align_t' का usage क्या है?",
    "options_en": ["Maximum alignment type for any scalar", "Alignment of malloc", "Both A and B", "Not standard"],
    "options_hi": ["किसी भी scalar का maximum alignment type", "malloc का alignment", "A और B दोनों", "standard नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'thread_local' storage duration?",
    "question_hi": "'thread_local' storage duration क्या है?",
    "options_en": ["Each thread has its own instance", "Like static but per thread", "Both A and B", "C++ only"],
    "options_hi": ["प्रत्येक thread की अपनी instance होती है", "static की तरह लेकिन per thread", "A और B दोनों", "केवल C++"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'quick_exit' function?",
    "question_hi": "'quick_exit' function क्या है?",
    "options_en": ["Exit without calling atexit handlers", "Fast termination", "Both A and B", "Like abort()"],
    "options_hi": ["atexit handlers को call किए बिना exit", "fast termination", "A और B दोनों", "abort() की तरह"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'at_quick_exit' function?",
    "question_hi": "'at_quick_exit' function क्या है?",
    "options_en": ["Register handler for quick_exit", "Like atexit but for quick_exit", "Both A and B", "Not standard"],
    "options_hi": ["quick_exit के लिए handler register करना", "atexit की तरह लेकिन quick_exit के लिए", "A और B दोनों", "standard नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'timespec_get' function?",
    "question_hi": "'timespec_get' function क्या है?",
    "options_en": ["Get time with nanosecond precision", "C11 time function", "Both A and B", "POSIX only"],
    "options_hi": ["nanosecond precision के साथ time get करना", "C11 time function", "A और B दोनों", "केवल POSIX"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is '_Generic' with struct types?",
    "question_hi": "struct types के साथ '_Generic' क्या है?",
    "options_en": ["_Generic(x, struct S1: 1, struct S2: 2, default: 0)", "Cannot use with struct", "Only built-in types", "Compile error"],
    "options_hi": ["_Generic(x, struct S1: 1, struct S2: 2, default: 0)", "struct के साथ use नहीं कर सकते", "केवल built-in types", "compile error"],
    "answer_en": "_Generic(x, struct S1: 1, struct S2: 2, default: 0)",
    "answer_hi": "_Generic(x, struct S1: 1, struct S2: 2, default: 0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'fenv.h' for?",
    "question_hi": "'fenv.h' किसके लिए है?",
    "options_en": ["Floating-point environment control", "Rounding modes, exceptions", "Both A and B", "Math functions"],
    "options_hi": ["floating-point environment control", "rounding modes, exceptions", "A और B दोनों", "math functions"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'fesetround' function?",
    "question_hi": "'fesetround' function क्या है?",
    "options_en": ["Set floating-point rounding mode", "FE_TONEAREST etc.", "Both A and B", "Not standard"],
    "options_hi": ["floating-point rounding mode set करना", "FE_TONEAREST आदि", "A और B दोनों", "standard नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'feclearexcept' function?",
    "question_hi": "'feclearexcept' function क्या है?",
    "options_en": ["Clear floating-point exceptions", "FE_INVALID etc.", "Both A and B", "Error clearing"],
    "options_hi": ["floating-point exceptions clear करना", "FE_INVALID आदि", "A और B दोनों", "error clearing"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'atomic_flag' type?",
    "question_hi": "'atomic_flag' type क्या है?",
    "options_en": ["Lock-free boolean flag", "atomic_flag_test_and_set", "Both A and B", "Mutex type"],
    "options_hi": ["lock-free boolean flag", "atomic_flag_test_and_set", "A और B दोनों", "mutex type"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'memory_order_consume' for?",
    "question_hi": "'memory_order_consume' किसके लिए है?",
    "options_en": ["Data-dependent loads", "Weaker than acquire", "Both A and B", "Deprecated"],
    "options_hi": ["data-dependent loads", "acquire से weaker", "A और B दोनों", "deprecated"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'atomic_signal_fence'?",
    "question_hi": "'atomic_signal_fence' क्या है?",
    "options_en": ["Fence for signal handlers", "Compiler barrier only", "Both A and B", "Like atomic_thread_fence"],
    "options_hi": ["signal handlers के लिए fence", "केवल compiler barrier", "A और B दोनों", "atomic_thread_fence की तरह"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is '_Noreturn' function specifier?",
    "question_hi": "'_Noreturn' function specifier क्या है?",
    "options_en": ["Function never returns", "Like exit(), abort()", "Both A and B", "Optimization hint"],
    "options_hi": ["function कभी return नहीं करता", "exit(), abort() की तरह", "A और B दोनों", "optimization hint"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is '_Alignas' specifier?",
    "question_hi": "'_Alignas' specifier क्या है?",
    "options_en": ["Specify alignment", "_Alignas(16) int x;", "Both A and B", "C++ only"],
    "options_hi": ["alignment specify करना", "_Alignas(16) int x;", "A और B दोनों", "केवल C++"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is '_Alignof' operator?",
    "question_hi": "'_Alignof' operator क्या है?",
    "options_en": ["Get alignment requirement", "Like sizeof but for alignment", "Both A and B", "Not standard"],
    "options_hi": ["alignment requirement get करना", "sizeof की तरह लेकिन alignment के लिए", "A और B दोनों", "standard नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'static_assert' in C23?",
    "question_hi": "C23 में 'static_assert' क्या है?",
    "options_en": ["Can omit message", "_Static_assert(cond);", "Both A and B", "Same as C11"],
    "options_hi": ["message omit कर सकते हैं", "_Static_assert(cond);", "A और B दोनों", "C11 के समान"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'nullptr' in C23?",
    "question_hi": "C23 में 'nullptr' क्या है?",
    "options_en": ["Null pointer constant", "Like C++ nullptr", "Both A and B", "Not in C"],
    "options_hi": ["null pointer constant", "C++ nullptr की तरह", "A और B दोनों", "C में नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'constexpr' in C23?",
    "question_hi": "C23 में 'constexpr' क्या है?",
    "options_en": ["Compile-time constant expressions", "Like C++ constexpr", "Both A and B", "C++ only"],
    "options_hi": ["compile-time constant expressions", "C++ constexpr की तरह", "A और B दोनों", "केवल C++"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'typeof' in C23?",
    "question_hi": "C23 में 'typeof' क्या है?",
    "options_en": ["Type deduction operator", "typeof(x) y = x;", "Both A and B", "GCC extension standardized"],
    "options_hi": ["type deduction operator", "typeof(x) y = x;", "A और B दोनों", "GCC extension standardized"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'decltype' in C23?",
    "question_hi": "C23 में 'decltype' क्या है?",
    "options_en": ["Type deduction from expression", "Like C++ decltype", "Both A and B", "Not in C"],
    "options_hi": ["expression से type deduction", "C++ decltype की तरह", "A और B दोनों", "C में नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'bit-precise integers' in C23?",
    "question_hi": "C23 में 'bit-precise integers' क्या है?",
    "options_en": ["_BitInt(N) type", "N-bit integers", "Both A and B", "Not standard"],
    "options_hi": ["_BitInt(N) type", "N-bit integers", "A और B दोनों", "standard नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'attribute syntax' in C23?",
    "question_hi": "C23 में 'attribute syntax' क्या है?",
    "options_en": ["[[attribute]] syntax", "Like C++ attributes", "Both A and B", "GCC only"],
    "options_hi": ["[[attribute]] syntax", "C++ attributes की तरह", "A और B दोनों", "केवल GCC"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'enumerator with attribute'?",
    "question_hi": "'enumerator with attribute' क्या है?",
    "options_en": ["enum E { a [[deprecated]] = 1 };", "C23 feature", "Both A and B", "Not allowed"],
    "options_hi": ["enum E { a [[deprecated]] = 1 };", "C23 feature", "A और B दोनों", "allowed नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'empty initialization' in C23?",
    "question_hi": "C23 में 'empty initialization' क्या है?",
    "options_en": ["int x = {};", "Zero-initialization syntax", "Both A and B", "C++ only"],
    "options_hi": ["int x = {};", "zero-initialization syntax", "A और B दोनों", "केवल C++"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'label at end of compound statement'?",
    "question_hi": "'compound statement के end पर label' क्या है?",
    "options_en": ["Label before } allowed in C23", "case 1: { ... } label: }", "Both A and B", "Not allowed"],
    "options_hi": ["C23 में } से पहले label allowed है", "case 1: { ... } label: }", "A और B दोनों", "allowed नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'binary integer literals' in C23?",
    "question_hi": "C23 में 'binary integer literals' क्या है?",
    "options_en": ["0b1010 syntax", "Binary constants", "Both A and B", "GCC extension"],
    "options_hi": ["0b1010 syntax", "binary constants", "A और B दोनों", "GCC extension"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'digit separators' in C23?",
    "question_hi": "C23 में 'digit separators' क्या है?",
    "options_en": ["1'000'000 syntax", "Underscore in numbers", "Both A and B", "Not standard"],
    "options_hi": ["1'000'000 syntax", "numbers में underscore", "A और B दोनों", "standard नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'char8_t' type in C23?",
    "question_hi": "C23 में 'char8_t' type क्या है?",
    "options_en": ["UTF-8 character type", "For u8 literals", "Both A and B", "C++ only"],
    "options_hi": ["UTF-8 character type", "u8 literals के लिए", "A और B दोनों", "केवल C++"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'const evaluation' in C23?",
    "question_hi": "C23 में 'const evaluation' क्या है?",
    "options_en": ["Constant expression evaluation rules", "Compile-time execution", "Both A and B", "Runtime only"],
    "options_hi": ["constant expression evaluation rules", "compile-time execution", "A और B दोनों", "केवल runtime"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'if constexpr' in C23?",
    "question_hi": "C23 में 'if constexpr' क्या है?",
    "options_en": ["Compile-time if", "Conditionally compile code", "Both A and B", "C++ only"],
    "options_hi": ["compile-time if", "conditionally compile code", "A और B दोनों", "केवल C++"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'auto type deduction' in C23?",
    "question_hi": "C23 में 'auto type deduction' क्या है?",
    "options_en": ["auto x = expr;", "Type inference", "Both A and B", "C++ only"],
    "options_hi": ["auto x = expr;", "type inference", "A और B दोनों", "केवल C++"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'template syntax' in C23?",
    "question_hi": "C23 में 'template syntax' क्या है?",
    "options_en": ["_Generic as poor man's template", "No real templates", "Both A and B", "Full templates"],
    "options_hi": ["_Generic as poor man's template", "कोई real templates नहीं", "A और B दोनों", "full templates"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'modules' in C23?",
    "question_hi": "C23 में 'modules' क्या है?",
    "options_en": ["Compilation units system", "import/export declarations", "Both A and B", "Not in C"],
    "options_hi": ["compilation units system", "import/export declarations", "A और B दोनों", "C में नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'embed' in C23?",
    "question_hi": "C23 में 'embed' क्या है?",
    "options_en": ["Embed binary data", "#embed \"file.bin\"", "Both A and B", "Preprocessor feature"],
    "options_hi": ["binary data embed करना", "#embed \"file.bin\"", "A और B दोनों", "preprocessor feature"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'static_assert' with string literal?",
    "question_hi": "string literal के साथ 'static_assert' क्या है?",
    "options_en": ["static_assert(cond, \"message\");", "Compile-time error message", "Both A and B", "Runtime assert"],
    "options_hi": ["static_assert(cond, \"message\");", "compile-time error message", "A और B दोनों", "runtime assert"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'va_copy' macro for?",
    "question_hi": "'va_copy' macro किसके लिए है?",
    "options_en": ["Copy va_list for reuse", "va_list backup", "Both A and B", "Not needed"],
    "options_hi": ["reuse के लिए va_list copy करना", "va_list backup", "A और B दोनों", "needed नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'restrict with function return'?",
    "question_hi": "'function return के साथ restrict' क्या है?",
    "options_en": ["int *restrict func();", "Returned pointer is restrict", "Both A and B", "Not allowed"],
    "options_hi": ["int *restrict func();", "returned pointer restrict है", "A और B दोनों", "allowed नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'no return address' optimization?",
    "question_hi": "'no return address' optimization क्या है?",
    "options_en": ["__attribute__((noreturn)) optimization", "Tail call optimization", "Both A and B", "No such thing"],
    "options_hi": ["__attribute__((noreturn)) optimization", "tail call optimization", "A और B दोनों", "ऐसी कोई चीज़ नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'strict aliasing exception'?",
    "question_hi": "'strict aliasing exception' क्या है?",
    "options_en": ["char* can alias anything", "Union type punning allowed", "Both A and B", "No exceptions"],
    "options_hi": ["char* कुछ भी alias कर सकता है", "union type punning allowed है", "A और B दोनों", "कोई exceptions नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'effective type' rule?",
    "question_hi": "'effective type' rule क्या है?",
    "options_en": ["Type of object for aliasing", "Can be changed by writes", "Both A and B", "Fixed type"],
    "options_hi": ["aliasing के लिए object का type", "writes से change किया जा सकता है", "A और B दोनों", "fixed type"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'trap representation' of float?",
    "question_hi": "float का 'trap representation' क्या है?",
    "options_en": ["Signaling NaN", "Invalid bit pattern", "Both A and B", "No trap floats"],
    "options_hi": ["signaling NaN", "invalid bit pattern", "A और B दोनों", "no trap floats"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'padding bits' in integer?",
    "question_hi": "integer में 'padding bits' क्या है?",
    "options_en": ["Bits not part of value", "Can be anything", "Both A and B", "No padding bits"],
    "options_hi": ["value का part नहीं होने वाले bits", "कुछ भी हो सकते हैं", "A और B दोनों", "कोई padding bits नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'sign representation'?",
    "question_hi": "'sign representation' क्या है?",
    "options_en": ["Two's complement, ones' complement, sign-magnitude", "Implementation defined", "Both A and B", "Always two's complement"],
    "options_hi": ["two's complement, ones' complement, sign-magnitude", "implementation defined", "A और B दोनों", "हमेशा two's complement"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'forward progress' guarantee?",
    "question_hi": "'forward progress' guarantee क्या है?",
    "options_en": ["Thread eventually makes progress", "Prevents live lock", "Both A and B", "No guarantee"],
    "options_hi": ["thread eventually makes progress", "live lock prevent करता है", "A और B दोनों", "कोई guarantee नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'consume ordering' guarantee?",
    "question_hi": "'consume ordering' guarantee क्या है?",
    "options_en": ["Data-dependent ordering only", "Weaker than acquire", "Both A and B", "Same as relaxed"],
    "options_hi": ["केवल data-dependent ordering", "acquire से weaker", "A और B दोनों", "relaxed के समान"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'kill_dependency' for?",
    "question_hi": "'kill_dependency' किसके लिए है?",
    "options_en": ["Break dependency chain", "Allow optimization", "Both A and B", "Create dependency"],
    "options_hi": ["dependency chain break करना", "optimization allow करना", "A और B दोनों", "dependency create करना"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'memory_order_seq_cst' fence?",
    "question_hi": "'memory_order_seq_cst' fence क्या है?",
    "options_en": ["Sequentially consistent fence", "Strongest ordering", "Both A and B", "Weak fence"],
    "options_hi": ["sequentially consistent fence", "सबसे strong ordering", "A और B दोनों", "weak fence"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'signal handler safety'?",
    "question_hi": "'signal handler safety' क्या है?",
    "options_en": ["Async-signal-safe functions only", "No malloc in handler", "Both A and B", "Any function allowed"],
    "options_hi": ["केवल async-signal-safe functions", "handler में malloc नहीं", "A और B दोनों", "कोई भी function allowed"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'volatile in signal handler'?",
    "question_hi": "'signal handler में volatile' क्या है?",
    "options_en": ["sig_atomic_t should be volatile", "Prevent optimization", "Both A and B", "Not needed"],
    "options_hi": ["sig_atomic_t volatile होना चाहिए", "optimization prevent करना", "A और B दोनों", "needed नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'setjmp variable rule'?",
    "question_hi": "'setjmp variable rule' क्या है?",
    "options_en": ["Automatic variables become invalid", "Volatile or global variables only", "Both A and B", "No restrictions"],
    "options_hi": ["automatic variables invalid हो जाते हैं", "केवल volatile या global variables", "A और B दोनों", "कोई restrictions नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'floating-point environment save'?",
    "question_hi": "'floating-point environment save' क्या है?",
    "options_en": ["fegetenv/fesetenv functions", "Save/restore FP state", "Both A and B", "Not possible"],
    "options_hi": ["fegetenv/fesetenv functions", "FP state save/restore करना", "A और B दोनों", "possible नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'pragma STDC CX_LIMITED_RANGE'?",
    "question_hi": "'pragma STDC CX_LIMITED_RANGE' क्या है?",
    "options_en": ["Allow complex multiplication optimizations", "Assumes limited range", "Both A and B", "Not standard"],
    "options_hi": ["complex multiplication optimizations allow करता है", "limited range assume करता है", "A और B दोनों", "standard नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'imaginary unit _Imaginary_I'?",
    "question_hi": "'imaginary unit _Imaginary_I' क्या है?",
    "options_en": ["Pure imaginary constant", "sqrt(-1) for imaginary types", "Both A and B", "Not in C"],
    "options_hi": ["pure imaginary constant", "imaginary types के लिए sqrt(-1)", "A और B दोनों", "C में नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'type-generic macro cimag'?",
    "question_hi": "'type-generic macro cimag' क्या है?",
    "options_en": ["Get imaginary part of complex", "Works with float/double/long double complex", "Both A and B", "Only for double"],
    "options_hi": ["complex का imaginary part get करना", "float/double/long double complex के साथ काम करता है", "A और B दोनों", "केवल double के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'bounds-checking interface error'?",
    "question_hi": "'bounds-checking interface error' क्या है?",
    "options_en": ["Constraint handler called on error", "set_constraint_handler_s", "Both A and B", "Program terminates"],
    "options_hi": ["error पर constraint handler called होता है", "set_constraint_handler_s", "A और B दोनों", "program terminate होता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'RSIZE_MAX definition'?",
    "question_hi": "'RSIZE_MAX definition' क्या है?",
    "options_en": ["Maximum size for safe functions", "(size_t)(-1) >> 1 typically", "Both A and B", "Unlimited"],
    "options_hi": ["safe functions के लिए maximum size", "आमतौर पर (size_t)(-1) >> 1", "A और B दोनों", "unlimited"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'memcpy_s function'?",
    "question_hi": "'memcpy_s function' क्या है?",
    "options_en": ["Safe version of memcpy", "Checks bounds", "Both A and B", "Same as memcpy"],
    "options_hi": ["memcpy का safe version", "bounds check करता है", "A और B दोनों", "memcpy के समान"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'scanf_s function'?",
    "question_hi": "'scanf_s function' क्या है?",
    "options_en": ["Safe version of scanf", "Requires buffer size", "Both A and B", "Windows only"],
    "options_hi": ["scanf का safe version", "buffer size require करता है", "A और B दोनों", "केवल Windows"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'no_sanitize attribute'?",
    "question_hi": "'no_sanitize attribute' क्या है?",
    "options_en": ["Disable specific sanitizers", "__attribute__((no_sanitize(...)))", "Both A and B", "Disable all checks"],
    "options_hi": ["specific sanitizers disable करना", "__attribute__((no_sanitize(...)))", "A और B दोनों", "सभी checks disable करना"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'alloc_size attribute'?",
    "question_hi": "'alloc_size attribute' क्या है?",
    "options_en": ["Indicates allocation size parameters", "__attribute__((alloc_size(1,2)))", "Both A and B", "For malloc family"],
    "options_hi": ["allocation size parameters indicate करता है", "__attribute__((alloc_size(1,2)))", "A और B दोनों", "malloc family के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'warn_unused_result attribute'?",
    "question_hi": "'warn_unused_result attribute' क्या है?",
    "options_en": ["Warn if return value ignored", "__attribute__((warn_unused_result))", "Both A and B", "For important functions"],
    "options_hi": ["return value ignore होने पर warn करता है", "__attribute__((warn_unused_result))", "A और B दोनों", "important functions के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'format attribute'?",
    "question_hi": "'format attribute' क्या है?",
    "options_en": ["Check printf/scanf format strings", "__attribute__((format(printf,1,2)))", "Both A and B", "Type safety"],
    "options_hi": ["printf/scanf format strings check करता है", "__attribute__((format(printf,1,2)))", "A और B दोनों", "type safety"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'nonnull attribute'?",
    "question_hi": "'nonnull attribute' क्या है?",
    "options_en": ["Parameters cannot be null", "__attribute__((nonnull(1,2)))", "Both A and B", "Optimization hint"],
    "options_hi": ["parameters null नहीं हो सकते", "__attribute__((nonnull(1,2)))", "A और B दोनों", "optimization hint"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'pure attribute'?",
    "question_hi": "'pure attribute' क्या है?",
    "options_en": ["Function has no side effects", "__attribute__((pure))", "Both A and B", "Can read memory"],
    "options_hi": ["function का कोई side effects नहीं है", "__attribute__((pure))", "A और B दोनों", "memory read कर सकता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'const attribute'?",
    "question_hi": "'const attribute' क्या है?",
    "options_en": ["Function depends only on parameters", "__attribute__((const))", "Both A and B", "Cannot read memory"],
    "options_hi": ["function केवल parameters पर depend करता है", "__attribute__((const))", "A और B दोनों", "memory read नहीं कर सकता"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'noreturn attribute'?",
    "question_hi": "'noreturn attribute' क्या है?",
    "options_en": ["Function never returns", "__attribute__((noreturn))", "Both A and B", "Like exit()"],
    "options_hi": ["function कभी return नहीं करता", "__attribute__((noreturn))", "A और B दोनों", "exit() की तरह"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'returns_twice attribute'?",
    "question_hi": "'returns_twice attribute' क्या है?",
    "options_en": ["Function may return multiple times", "__attribute__((returns_twice))", "Both A and B", "Like setjmp()"],
    "options_hi": ["function multiple times return कर सकता है", "__attribute__((returns_twice))", "A और B दोनों", "setjmp() की तरह"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'sentinel attribute'?",
    "question_hi": "'sentinel attribute' क्या है?",
    "options_en": ["Requires null-terminated argument list", "__attribute__((sentinel))", "Both A and B", "For variadic functions"],
    "options_hi": ["null-terminated argument list require करता है", "__attribute__((sentinel))", "A और B दोनों", "variadic functions के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'visibility attribute'?",
    "question_hi": "'visibility attribute' क्या है?",
    "options_en": ["Control symbol visibility", "__attribute__((visibility(\"hidden\")))", "Both A and B", "Shared libraries"],
    "options_hi": ["symbol visibility control करता है", "__attribute__((visibility(\"hidden\")))", "A और B दोनों", "shared libraries"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'weak attribute'?",
    "question_hi": "'weak attribute' क्या है?",
    "options_en": ["Weak symbol definition", "__attribute__((weak))", "Both A and B", "Can be overridden"],
    "options_hi": ["weak symbol definition", "__attribute__((weak))", "A और B दोनों", "override किया जा सकता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'alias attribute'?",
    "question_hi": "'alias attribute' क्या है?",
    "options_en": ["Create symbol alias", "__attribute__((alias(\"target\")))", "Both A and B", "For renaming"],
    "options_hi": ["symbol alias create करता है", "__attribute__((alias(\"target\")))", "A और B दोनों", "renaming के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'ifunc attribute'?",
    "question_hi": "'ifunc attribute' क्या है?",
    "options_en": ["Indirect function", "__attribute__((ifunc(\"resolver\")))", "Both A and B", "Runtime selection"],
    "options_hi": ["indirect function", "__attribute__((ifunc(\"resolver\")))", "A और B दोनों", "runtime selection"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'constructor attribute'?",
    "question_hi": "'constructor attribute' क्या है?",
    "options_en": ["Run function before main", "__attribute__((constructor))", "Both A and B", "Initialization"],
    "options_hi": ["main से पहले function run करता है", "__attribute__((constructor))", "A और B दोनों", "initialization"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'destructor attribute'?",
    "question_hi": "'destructor attribute' क्या है?",
    "options_en": ["Run function after main", "__attribute__((destructor))", "Both A and B", "Cleanup"],
    "options_hi": ["main के बाद function run करता है", "__attribute__((destructor))", "A और B दोनों", "cleanup"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'cleanup attribute'?",
    "question_hi": "'cleanup attribute' क्या है?",
    "options_en": ["Run function on scope exit", "__attribute__((cleanup(func)))", "Both A and B", "Automatic cleanup"],
    "options_hi": ["scope exit पर function run करता है", "__attribute__((cleanup(func)))", "A और B दोनों", "automatic cleanup"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'flatten attribute'?",
    "question_hi": "'flatten attribute' क्या है?",
    "options_en": ["Inline all calls in function", "__attribute__((flatten))", "Both A and B", "Aggressive inlining"],
    "options_hi": ["function में सभी calls inline करता है", "__attribute__((flatten))", "A और B दोनों", "aggressive inlining"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'noinline attribute'?",
    "question_hi": "'noinline attribute' क्या है?",
    "options_en": ["Prevent function inlining", "__attribute__((noinline))", "Both A and B", "Debugging"],
    "options_hi": ["function inlining prevent करता है", "__attribute__((noinline))", "A और B दोनों", "debugging"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'always_inline attribute'?",
    "question_hi": "'always_inline attribute' क्या है?",
    "options_en": ["Force function inlining", "__attribute__((always_inline))", "Both A and B", "Performance"],
    "options_hi": ["function inlining force करता है", "__attribute__((always_inline))", "A और B दोनों", "performance"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'target attribute'?",
    "question_hi": "'target attribute' क्या है?",
    "options_en": ["Target-specific optimization", "__attribute__((target(\"avx2\")))", "Both A and B", "CPU features"],
    "options_hi": ["target-specific optimization", "__attribute__((target(\"avx2\")))", "A और B दोनों", "CPU features"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'optimize attribute'?",
    "question_hi": "'optimize attribute' क्या है?",
    "options_en": ["Function-specific optimization", "__attribute__((optimize(\"O3\")))", "Both A and B", "Tune options"],
    "options_hi": ["function-specific optimization", "__attribute__((optimize(\"O3\")))", "A और B दोनों", "tune options"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'section attribute'?",
    "question_hi": "'section attribute' क्या है?",
    "options_en": ["Place in specific section", "__attribute__((section(\".data\")))", "Both A and B", "Linker control"],
    "options_hi": ["specific section में place करता है", "__attribute__((section(\".data\")))", "A और B दोनों", "linker control"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'aligned attribute'?",
    "question_hi": "'aligned attribute' क्या है?",
    "options_en": ["Force alignment", "__attribute__((aligned(16)))", "Both A and B", "Memory layout"],
    "options_hi": ["alignment force करता है", "__attribute__((aligned(16)))", "A और B दोनों", "memory layout"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'packed attribute'?",
    "question_hi": "'packed attribute' क्या है?",
    "options_en": ["Remove padding", "__attribute__((packed))", "Both A and B", "Dense layout"],
    "options_hi": ["padding remove करता है", "__attribute__((packed))", "A और B दोनों", "dense layout"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'transparent_union attribute'?",
    "question_hi": "'transparent_union attribute' क्या है?",
    "options_en": ["Union parameter passing", "__attribute__((transparent_union))", "Both A and B", "Type compatibility"],
    "options_hi": ["union parameter passing", "__attribute__((transparent_union))", "A और B दोनों", "type compatibility"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'unused attribute'?",
    "question_hi": "'unused attribute' क्या है?",
    "options_en": ["Suppress unused warnings", "__attribute__((unused))", "Both A and B", "For parameters"],
    "options_hi": ["unused warnings suppress करता है", "__attribute__((unused))", "A और B दोनों", "parameters के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'used attribute'?",
    "question_hi": "'used attribute' क्या है?",
    "options_en": ["Keep symbol despite no references", "__attribute__((used))", "Both A and B", "Prevent removal"],
    "options_hi": ["no references होने पर भी symbol keep करता है", "__attribute__((used))", "A और B दोनों", "removal prevent करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'deprecated attribute'?",
    "question_hi": "'deprecated attribute' क्या है?",
    "options_en": ["Mark as obsolete", "__attribute__((deprecated))", "Both A and B", "Generate warnings"],
    "options_hi": ["obsolete mark करता है", "__attribute__((deprecated))", "A और B दोनों", "warnings generate करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
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