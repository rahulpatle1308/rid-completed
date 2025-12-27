const questions = [
  {
    "num": 1,
    "question_en": "What is 'pointer to function returning pointer to array' syntax?",
    "question_hi": "'pointer to function returning pointer to array' syntax क्या होता है?",
    "options_en": ["int (*(*func)())[N]", "int (**func())[N]", "int *(*func[N])()", "int (*func[N])()"],
    "options_hi": ["int (*(*func)())[N]", "int (**func())[N]", "int *(*func[N])()", "int (*func[N])()"],
    "answer_en": "int (*(*func)())[N]",
    "answer_hi": "int (*(*func)())[N]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'forward declaration of enum' in C?",
    "question_hi": "C में 'enum का forward declaration' क्या होता है?",
    "options_en": ["enum name; (incomplete type)", "enum name {};", "typedef enum name;", "No forward declaration for enum"],
    "options_hi": ["enum name; (incomplete type)", "enum name {};", "typedef enum name;", "enum का कोई forward declaration नहीं"],
    "answer_en": "enum name; (incomplete type)",
    "answer_hi": "enum name; (incomplete type)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'comma operator' in for loop initialization?",
    "question_hi": "for loop initialization में 'comma operator' क्या होता है?",
    "options_en": ["for(i=0,j=0; i<10; i++,j++)", "for(i=0; i<10; i++)", "for(int i=0; i<10; i++)", "Invalid syntax"],
    "options_hi": ["for(i=0,j=0; i<10; i++,j++)", "for(i=0; i<10; i++)", "for(int i=0; i<10; i++)", "invalid syntax"],
    "answer_en": "for(i=0,j=0; i<10; i++,j++)",
    "answer_hi": "for(i=0,j=0; i<10; i++,j++)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'ternary operator associativity'?",
    "question_hi": "'ternary operator की associativity' क्या होती है?",
    "options_en": ["Right-to-left", "Left-to-right", "No associativity", "Depends on operands"],
    "options_hi": ["right-to-left", "left-to-right", "कोई associativity नहीं", "operands पर depend करता है"],
    "answer_en": "Right-to-left",
    "answer_hi": "right-to-left",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'string literal modification' behavior?",
    "question_hi": "'string literal modification' का behavior क्या होता है?",
    "options_en": ["Undefined behavior (attempting to modify string literal)", "Allowed", "Compiler error", "Runtime error"],
    "options_hi": ["undefined behavior (string literal modify करने का attempt)", "allowed", "compiler error", "runtime error"],
    "answer_en": "Undefined behavior (attempting to modify string literal)",
    "answer_hi": "undefined behavior (string literal modify करने का attempt)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'array to pointer decay' exception?",
    "question_hi": "'array to pointer decay' का exception क्या होता है?",
    "options_en": ["sizeof operator, & operator", "Function arguments", "Pointer assignment", "All cases"],
    "options_hi": ["sizeof operator, & operator", "function arguments", "pointer assignment", "सभी cases"],
    "answer_en": "sizeof operator, & operator",
    "answer_hi": "sizeof operator, & operator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'const correctness' with double pointers?",
    "question_hi": "double pointers के साथ 'const correctness' क्या होती है?",
    "options_en": ["const int ** vs int * const * vs int ** const", "All same", "No const with double pointers", "Only one const allowed"],
    "options_hi": ["const int ** बनाम int * const * बनाम int ** const", "सभी समान", "double pointers के साथ const नहीं", "केवल एक const allowed"],
    "answer_en": "const int ** vs int * const * vs int ** const",
    "answer_hi": "const int ** बनाम int * const * बनाम int ** const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'flexible array member' memory allocation?",
    "question_hi": "'flexible array member' की memory allocation क्या होती है?",
    "options_en": ["malloc(sizeof(struct) + n*sizeof(type))", "malloc(sizeof(struct))", "calloc for array", "No special allocation"],
    "options_hi": ["malloc(sizeof(struct) + n*sizeof(type))", "malloc(sizeof(struct))", "array के लिए calloc", "कोई special allocation नहीं"],
    "answer_en": "malloc(sizeof(struct) + n*sizeof(type))",
    "answer_hi": "malloc(sizeof(struct) + n*sizeof(type))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'designated initializer with ranges' in GCC?",
    "question_hi": "GCC में 'designated initializer with ranges' क्या होता है?",
    "options_en": ["[0 ... 9] = value", "[0-9] = value", "[0..9] = value", "Not supported"],
    "options_hi": ["[0 ... 9] = value", "[0-9] = value", "[0..9] = value", "supported नहीं"],
    "answer_en": "[0 ... 9] = value",
    "answer_hi": "[0 ... 9] = value",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'statement expression' returning value?",
    "question_hi": "'statement expression' value return करता है?",
    "options_en": ["({ int x=5; x+1; }) returns 6", "No return", "Returns void", "Invalid syntax"],
    "options_hi": ["({ int x=5; x+1; }) 6 return करता है", "कोई return नहीं", "void return करता है", "invalid syntax"],
    "answer_en": "({ int x=5; x+1; }) returns 6",
    "answer_hi": "({ int x=5; x+1; }) 6 return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'typeof in variable declaration' usage?",
    "question_hi": "'variable declaration में typeof' का usage क्या होता है?",
    "options_en": ["typeof(*ptr) var; declares variable of same type as *ptr", "Invalid", "Only in expressions", "No typeof"],
    "options_hi": ["typeof(*ptr) var; *ptr के same type का variable declare करता है", "invalid", "केवल expressions में", "कोई typeof नहीं"],
    "answer_en": "typeof(*ptr) var; declares variable of same type as *ptr",
    "answer_hi": "typeof(*ptr) var; *ptr के same type का variable declare करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'zero-size array at start of struct'?",
    "question_hi": "'struct की start पर zero-size array' क्या होता है?",
    "options_en": ["GCC extension for variable offset", "Standard C", "Invalid", "Causes error"],
    "options_hi": ["variable offset के लिए GCC extension", "standard C", "invalid", "error cause करता है"],
    "answer_en": "GCC extension for variable offset",
    "answer_hi": "variable offset के लिए GCC extension",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'nested function accessing outer variables'?",
    "question_hi": "'nested function outer variables access करती है' क्या होता है?",
    "options_en": ["GCC extension: nested functions can access outer scope", "Not allowed", "Only static variables", "Only global variables"],
    "options_hi": ["GCC extension: nested functions outer scope access कर सकती हैं", "allowed नहीं", "केवल static variables", "केवल global variables"],
    "answer_en": "GCC extension: nested functions can access outer scope",
    "answer_hi": "GCC extension: nested functions outer scope access कर सकती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'local label in nested block'?",
    "question_hi": "'nested block में local label' क्या होता है?",
    "options_en": ["GCC: __label__ for local labels", "Standard labels", "No local labels", "Auto keyword"],
    "options_hi": ["GCC: local labels के लिए __label__", "standard labels", "कोई local labels नहीं", "auto keyword"],
    "answer_en": "GCC: __label__ for local labels",
    "answer_hi": "GCC: local labels के लिए __label__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'case label with variable' in GCC?",
    "question_hi": "GCC में 'variable के साथ case label' क्या होता है?",
    "options_en": ["case variable: allowed with constant expression", "Not allowed", "Only integer constants", "Any expression"],
    "options_hi": ["case variable: constant expression के साथ allowed", "allowed नहीं", "केवल integer constants", "कोई भी expression"],
    "answer_en": "case variable: allowed with constant expression",
    "answer_hi": "case variable: constant expression के साथ allowed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'empty structure' in GCC?",
    "question_hi": "GCC में 'empty structure' क्या होता है?",
    "options_en": ["struct empty {}; has size 0 in GCC", "Size 1", "Invalid", "Size depends"],
    "options_hi": ["struct empty {}; GCC में size 0 है", "size 1", "invalid", "size depend करता है"],
    "answer_en": "struct empty {}; has size 0 in GCC",
    "answer_hi": "struct empty {}; GCC में size 0 है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'alignment of bit-fields'?",
    "question_hi": "'bit-fields की alignment' क्या होती है?",
    "options_en": ["Implementation defined", "Always byte aligned", "Word aligned", "No alignment"],
    "options_hi": ["implementation defined", "हमेशा byte aligned", "word aligned", "कोई alignment नहीं"],
    "answer_en": "Implementation defined",
    "answer_hi": "implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'address of bit-field'?",
    "question_hi": "'bit-field का address' क्या होता है?",
    "options_en": ["Cannot take address of bit-field", "Allowed", "Only with & operator", "Special syntax"],
    "options_hi": ["bit-field का address नहीं ले सकते", "allowed", "केवल & operator के साथ", "special syntax"],
    "answer_en": "Cannot take address of bit-field",
    "answer_hi": "bit-field का address नहीं ले सकते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'bit-field of type int' sign?",
    "question_hi": "'type int के bit-field' का sign क्या होता है?",
    "options_en": ["Implementation defined", "Always signed", "Always unsigned", "Depends on compiler"],
    "options_hi": ["implementation defined", "हमेशा signed", "हमेशा unsigned", "compiler पर depend करता है"],
    "answer_en": "Implementation defined",
    "answer_hi": "implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'zero-length bit-field' purpose?",
    "question_hi": "'zero-length bit-field' का purpose क्या होता है?",
    "options_en": ["Alignment: forces next bit-field to new storage unit", "No purpose", "Error", "Padding"],
    "options_hi": ["Alignment: next bit-field को new storage unit में force करता है", "कोई purpose नहीं", "error", "padding"],
    "answer_en": "Alignment: forces next bit-field to new storage unit",
    "answer_hi": "Alignment: next bit-field को new storage unit में force करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'atomic_flag' in C11?",
    "question_hi": "C11 में 'atomic_flag' क्या होता है?",
    "options_en": ["Lock-free boolean flag, atomic_flag_test_and_set()", "Regular flag", "Mutex", "Semaphore"],
    "options_hi": ["lock-free boolean flag, atomic_flag_test_and_set()", "regular flag", "mutex", "semaphore"],
    "answer_en": "Lock-free boolean flag, atomic_flag_test_and_set()",
    "answer_hi": "lock-free boolean flag, atomic_flag_test_and_set()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'memory_order_consume'?",
    "question_hi": "'memory_order_consume' क्या होता है?",
    "options_en": ["Weaker than acquire, for data-dependent loads", "Stronger than seq_cst", "Same as relaxed", "Not used"],
    "options_hi": ["acquire से weaker, data-dependent loads के लिए", "seq_cst से stronger", "relaxed के समान", "उपयोग नहीं"],
    "answer_en": "Weaker than acquire, for data-dependent loads",
    "answer_hi": "acquire से weaker, data-dependent loads के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'kill_dependency' macro?",
    "question_hi": "'kill_dependency' macro क्या होता है?",
    "options_en": ["Breaks dependency chain for optimization", "Creates dependency", "Sets memory order", "No macro"],
    "options_hi": ["dependency chain break करने के लिए", "dependency create करता है", "memory order set करता है", "कोई macro नहीं"],
    "answer_en": "Breaks dependency chain for optimization",
    "answer_hi": "dependency chain break करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'generic association with default'?",
    "question_hi": "'default के साथ generic association' क्या होता है?",
    "options_en": ["_Generic(x, int: 1, default: 0)", "_Generic(x, int: 1)", "No default", "Invalid syntax"],
    "options_hi": ["_Generic(x, int: 1, default: 0)", "_Generic(x, int: 1)", "कोई default नहीं", "invalid syntax"],
    "answer_en": "_Generic(x, int: 1, default: 0)",
    "answer_hi": "_Generic(x, int: 1, default: 0)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'static_assert without message'?",
    "question_hi": "'message के बिना static_assert' क्या होता है?",
    "options_en": ["_Static_assert(cond); in C23", "Always needs message", "Not allowed", "Compile error"],
    "options_hi": ["C23 में _Static_assert(cond);", "हमेशा message चाहिए", "allowed नहीं", "compile error"],
    "answer_en": "_Static_assert(cond); in C23",
    "answer_hi": "C23 में _Static_assert(cond);",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'attribute deprecated with message'?",
    "question_hi": "'message के साथ attribute deprecated' क्या होता है?",
    "options_en": ["__attribute__((deprecated(\"use new_func instead\")))", "No message", "Only deprecated", "Invalid"],
    "options_hi": ["__attribute__((deprecated(\"use new_func instead\")))", "कोई message नहीं", "केवल deprecated", "invalid"],
    "answer_en": "__attribute__((deprecated(\"use new_func instead\")))",
    "answer_hi": "__attribute__((deprecated(\"use new_func instead\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'cleanup attribute with parameter'?",
    "question_hi": "'parameter के साथ cleanup attribute' क्या होता है?",
    "options_en": ["__attribute__((cleanup(cleanup_func)))", "No parameter", "Auto cleanup", "Invalid"],
    "options_hi": ["__attribute__((cleanup(cleanup_func)))", "कोई parameter नहीं", "auto cleanup", "invalid"],
    "answer_en": "__attribute__((cleanup(cleanup_func)))",
    "answer_hi": "__attribute__((cleanup(cleanup_func)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'section attribute with specific section'?",
    "question_hi": "'specific section के साथ section attribute' क्या होता है?",
    "options_en": ["__attribute__((section(\".data.mysec\")))", "Generic section", "No section name", "Invalid"],
    "options_hi": ["__attribute__((section(\".data.mysec\")))", "generic section", "कोई section name नहीं", "invalid"],
    "answer_en": "__attribute__((section(\".data.mysec\")))",
    "answer_hi": "__attribute__((section(\".data.mysec\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'aligned attribute with auto alignment'?",
    "question_hi": "'auto alignment के साथ aligned attribute' क्या होता है?",
    "options_en": ["__attribute__((aligned)) (maximum alignment)", "Must specify size", "No auto", "Invalid"],
    "options_hi": ["__attribute__((aligned)) (maximum alignment)", "size specify करना होगा", "कोई auto नहीं", "invalid"],
    "answer_en": "__attribute__((aligned)) (maximum alignment)",
    "answer_hi": "__attribute__((aligned)) (maximum alignment)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'weakref attribute'?",
    "question_hi": "'weakref attribute' क्या होता है?",
    "options_en": ["__attribute__((weakref(\"target\"))) weak reference", "Strong reference", "No weakref", "Invalid"],
    "options_hi": ["__attribute__((weakref(\"target\"))) weak reference", "strong reference", "कोई weakref नहीं", "invalid"],
    "answer_en": "__attribute__((weakref(\"target\"))) weak reference",
    "answer_hi": "__attribute__((weakref(\"target\"))) weak reference",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'pure vs const attribute difference'?",
    "question_hi": "'pure और const attribute में difference' क्या होता है?",
    "options_en": ["Pure: no side effects, may read globals; Const: only parameters", "Same", "Opposite", "No difference"],
    "options_hi": ["Pure: कोई side effects नहीं, globals read कर सकती है; Const: केवल parameters", "समान", "विपरीत", "कोई difference नहीं"],
    "answer_en": "Pure: no side effects, may read globals; Const: only parameters",
    "answer_hi": "Pure: कोई side effects नहीं, globals read कर सकती है; Const: केवल parameters",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'returns_twice function example'?",
    "question_hi": "'returns_twice function का example' क्या होता है?",
    "options_en": ["setjmp(), vfork()", "malloc(), free()", "printf(), scanf()", "No such functions"],
    "options_hi": ["setjmp(), vfork()", "malloc(), free()", "printf(), scanf()", "ऐसे कोई functions नहीं"],
    "answer_en": "setjmp(), vfork()",
    "answer_hi": "setjmp(), vfork()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'sentinel at position'?",
    "question_hi": "'position पर sentinel' क्या होता है?",
    "options_en": ["__attribute__((sentinel(1))) for position", "Always at end", "No position", "Invalid"],
    "options_hi": ["position के लिए __attribute__((sentinel(1)))", "हमेशा end पर", "कोई position नहीं", "invalid"],
    "answer_en": "__attribute__((sentinel(1))) for position",
    "answer_hi": "position के लिए __attribute__((sentinel(1)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'deprecated since version'?",
    "question_hi": "'version से deprecated' क्या होता है?",
    "options_en": ["__attribute__((deprecated(\"since version 2.0\")))", "No version", "Only version", "Invalid"],
    "options_hi": ["__attribute__((deprecated(\"since version 2.0\")))", "कोई version नहीं", "केवल version", "invalid"],
    "answer_en": "__attribute__((deprecated(\"since version 2.0\")))",
    "answer_hi": "__attribute__((deprecated(\"since version 2.0\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'unused on parameter'?",
    "question_hi": "'parameter पर unused' क्या होता है?",
    "options_en": ["void func(int x __attribute__((unused)))", "Not allowed", "Only on variables", "Invalid"],
    "options_hi": ["void func(int x __attribute__((unused)))", "allowed नहीं", "केवल variables पर", "invalid"],
    "answer_en": "void func(int x __attribute__((unused)))",
    "answer_hi": "void func(int x __attribute__((unused)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'used on static function'?",
    "question_hi": "'static function पर used' क्या होता है?",
    "options_en": ["static void func() __attribute__((used))", "Not needed", "Only extern", "Invalid"],
    "options_hi": ["static void func() __attribute__((used))", "needed नहीं", "केवल extern", "invalid"],
    "answer_en": "static void func() __attribute__((used))",
    "answer_hi": "static void func() __attribute__((used))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'aligned on typedef'?",
    "question_hi": "'typedef पर aligned' क्या होता है?",
    "options_en": ["typedef int aligned_int __attribute__((aligned(16)))", "Not allowed", "Only on variables", "Invalid"],
    "options_hi": ["typedef int aligned_int __attribute__((aligned(16)))", "allowed नहीं", "केवल variables पर", "invalid"],
    "answer_en": "typedef int aligned_int __attribute__((aligned(16)))",
    "answer_hi": "typedef int aligned_int __attribute__((aligned(16)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'packed on enum'?",
    "question_hi": "'enum पर packed' क्या होता है?",
    "options_en": ["enum __attribute__((packed)) small {A,B}", "Not needed", "Only struct", "Invalid"],
    "options_hi": ["enum __attribute__((packed)) small {A,B}", "needed नहीं", "केवल struct", "invalid"],
    "answer_en": "enum __attribute__((packed)) small {A,B}",
    "answer_hi": "enum __attribute__((packed)) small {A,B}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'transparent_union parameter passing'?",
    "question_hi": "'transparent_union parameter passing' क्या होता है?",
    "options_en": ["Pass any union member type transparently", "Only first member", "Not transparent", "Invalid"],
    "options_hi": ["किसी भी union member type को transparently pass करें", "केवल first member", "transparent नहीं", "invalid"],
    "answer_en": "Pass any union member type transparently",
    "answer_hi": "किसी भी union member type को transparently pass करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'mode attribute types'?",
    "question_hi": "'mode attribute types' क्या होते हैं?",
    "options_en": ["QI (8-bit), HI (16-bit), SI (32-bit), DI (64-bit)", "Only byte", "No modes", "Invalid"],
    "options_hi": ["QI (8-bit), HI (16-bit), SI (32-bit), DI (64-bit)", "केवल byte", "कोई modes नहीं", "invalid"],
    "answer_en": "QI (8-bit), HI (16-bit), SI (32-bit), DI (64-bit)",
    "answer_hi": "QI (8-bit), HI (16-bit), SI (32-bit), DI (64-bit)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'vector_size with operations'?",
    "question_hi": "'operations के साथ vector_size' क्या होता है?",
    "options_en": ["Supports +, -, *, / on vector types", "No operations", "Only load/store", "Invalid"],
    "options_hi": ["vector types पर +, -, *, / support करता है", "कोई operations नहीं", "केवल load/store", "invalid"],
    "answer_en": "Supports +, -, *, / on vector types",
    "answer_hi": "vector types पर +, -, *, / support करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'no_sanitize_thread'?",
    "question_hi": "'no_sanitize_thread' क्या होता है?",
    "options_en": ["__attribute__((no_sanitize_thread))", "Not a sanitizer", "For memory only", "Invalid"],
    "options_hi": ["__attribute__((no_sanitize_thread))", "कोई sanitizer नहीं", "केवल memory के लिए", "invalid"],
    "answer_en": "__attribute__((no_sanitize_thread))",
    "answer_hi": "__attribute__((no_sanitize_thread))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'no_sanitize(\"address\")'?",
    "question_hi": "'no_sanitize(\"address\")' क्या होता है?",
    "options_en": ["__attribute__((no_sanitize(\"address\")))", "Only no_sanitize_address", "Same", "Invalid"],
    "options_hi": ["__attribute__((no_sanitize(\"address\")))", "केवल no_sanitize_address", "समान", "invalid"],
    "answer_en": "__attribute__((no_sanitize(\"address\")))",
    "answer_hi": "__attribute__((no_sanitize(\"address\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'assume_aligned with offset'?",
    "question_hi": "'offset के साथ assume_aligned' क्या होता है?",
    "options_en": ["__attribute__((assume_aligned(16, 4)))", "No offset", "Only alignment", "Invalid"],
    "options_hi": ["__attribute__((assume_aligned(16, 4)))", "कोई offset नहीं", "केवल alignment", "invalid"],
    "answer_en": "__attribute__((assume_aligned(16, 4)))",
    "answer_hi": "__attribute__((assume_aligned(16, 4)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'alloc_size attribute'?",
    "question_hi": "'alloc_size attribute' क्या होता है?",
    "options_en": ["__attribute__((alloc_size(1,2))) for malloc-like functions", "Not for allocation", "Only size", "Invalid"],
    "options_hi": ["malloc-like functions के लिए __attribute__((alloc_size(1,2)))", "allocation के लिए नहीं", "केवल size", "invalid"],
    "answer_en": "__attribute__((alloc_size(1,2))) for malloc-like functions",
    "answer_hi": "malloc-like functions के लिए __attribute__((alloc_size(1,2)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'warn_if_not_aligned attribute'?",
    "question_hi": "'warn_if_not_aligned attribute' क्या होता है?",
    "options_en": ["GCC: warn if pointer not sufficiently aligned", "No warning", "Error", "Invalid"],
    "options_hi": ["GCC: warn यदि pointer sufficiently aligned नहीं है", "कोई warning नहीं", "error", "invalid"],
    "answer_en": "GCC: warn if pointer not sufficiently aligned",
    "answer_hi": "GCC: warn यदि pointer sufficiently aligned नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'target_clones attribute'?",
    "question_hi": "'target_clones attribute' क्या होता है?",
    "options_en": ["__attribute__((target_clones(\"default,avx2,avx512f\")))", "Single target", "No clones", "Invalid"],
    "options_hi": ["__attribute__((target_clones(\"default,avx2,avx512f\")))", "single target", "कोई clones नहीं", "invalid"],
    "answer_en": "__attribute__((target_clones(\"default,avx2,avx512f\")))",
    "answer_hi": "__attribute__((target_clones(\"default,avx2,avx512f\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'symver attribute'?",
    "question_hi": "'symver attribute' क्या होता है?",
    "options_en": ["__attribute__((symver(\"foo@VERS_1\"))) symbol versioning", "No versioning", "Only for shared libs", "Invalid"],
    "options_hi": ["symbol versioning के लिए __attribute__((symver(\"foo@VERS_1\")))", "कोई versioning नहीं", "केवल shared libs के लिए", "invalid"],
    "answer_en": "__attribute__((symver(\"foo@VERS_1\"))) symbol versioning",
    "answer_hi": "symbol versioning के लिए __attribute__((symver(\"foo@VERS_1\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'tls_model attribute'?",
    "question_hi": "'tls_model attribute' क्या होता है?",
    "options_en": ["__attribute__((tls_model(\"initial-exec\"))) TLS model", "No TLS", "Only global-dynamic", "Invalid"],
    "options_hi": ["TLS model के लिए __attribute__((tls_model(\"initial-exec\")))", "कोई TLS नहीं", "केवल global-dynamic", "invalid"],
    "answer_en": "__attribute__((tls_model(\"initial-exec\"))) TLS model",
    "answer_hi": "TLS model के लिए __attribute__((tls_model(\"initial-exec\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'selectany attribute'?",
    "question_hi": "'selectany attribute' क्या होता है?",
    "options_en": ["MSVC/GCC: __attribute__((selectany)) pick any duplicate", "No duplicates", "Error on duplicate", "Invalid"],
    "options_hi": ["MSVC/GCC: __attribute__((selectany)) किसी भी duplicate को pick करें", "कोई duplicates नहीं", "duplicate पर error", "invalid"],
    "answer_en": "MSVC/GCC: __attribute__((selectany)) pick any duplicate",
    "answer_hi": "MSVC/GCC: __attribute__((selectany)) किसी भी duplicate को pick करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'dllimport attribute'?",
    "question_hi": "'dllimport attribute' क्या होता है?",
    "options_en": ["__attribute__((dllimport)) for Windows DLL import", "Not for Windows", "Only export", "Invalid"],
    "options_hi": ["Windows DLL import के लिए __attribute__((dllimport))", "Windows के लिए नहीं", "केवल export", "invalid"],
    "answer_en": "__attribute__((dllimport)) for Windows DLL import",
    "answer_hi": "Windows DLL import के लिए __attribute__((dllimport))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'dllexport attribute'?",
    "question_hi": "'dllexport attribute' क्या होता है?",
    "options_en": ["__attribute__((dllexport)) for Windows DLL export", "Not for Windows", "Only import", "Invalid"],
    "options_hi": ["Windows DLL export के लिए __attribute__((dllexport))", "Windows के लिए नहीं", "केवल import", "invalid"],
    "answer_en": "__attribute__((dllexport)) for Windows DLL export",
    "answer_hi": "Windows DLL export के लिए __attribute__((dllexport))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'interrupt attribute'?",
    "question_hi": "'interrupt attribute' क्या होता है?",
    "options_en": ["__attribute__((interrupt)) for interrupt handler functions", "Not for interrupts", "Only main", "Invalid"],
    "options_hi": ["interrupt handler functions के लिए __attribute__((interrupt))", "interrupts के लिए नहीं", "केवल main", "invalid"],
    "answer_en": "__attribute__((interrupt)) for interrupt handler functions",
    "answer_hi": "interrupt handler functions के लिए __attribute__((interrupt))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'naked attribute'?",
    "question_hi": "'naked attribute' क्या होता है?",
    "options_en": ["__attribute__((naked)) no prologue/epilogue", "With prologue", "Only epilogue", "Invalid"],
    "options_hi": ["__attribute__((naked)) कोई prologue/epilogue नहीं", "prologue के साथ", "केवल epilogue", "invalid"],
    "answer_en": "__attribute__((naked)) no prologue/epilogue",
    "answer_hi": "__attribute__((naked)) कोई prologue/epilogue नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'aligned and packed together'?",
    "question_hi": "'aligned और packed together' क्या होता है?",
    "options_en": ["__attribute__((packed, aligned(4)))", "Contradictory", "Only one", "Invalid"],
    "options_hi": ["__attribute__((packed, aligned(4)))", "contradictory", "केवल एक", "invalid"],
    "answer_en": "__attribute__((packed, aligned(4)))",
    "answer_hi": "__attribute__((packed, aligned(4)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'vector_type attribute'?",
    "question_hi": "'vector_type attribute' क्या होता है?",
    "options_en": ["Clang: __attribute__((vector_type(4)))", "Only GCC", "No vector_type", "Invalid"],
    "options_hi": ["Clang: __attribute__((vector_type(4)))", "केवल GCC", "कोई vector_type नहीं", "invalid"],
    "answer_en": "Clang: __attribute__((vector_type(4)))",
    "answer_hi": "Clang: __attribute__((vector_type(4)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'ext_vector_type attribute'?",
    "question_hi": "'ext_vector_type attribute' क्या होता है?",
    "options_en": ["Clang: __attribute__((ext_vector_type(3))) for 3-element vector", "Only GCC", "No ext_vector", "Invalid"],
    "options_hi": ["Clang: 3-element vector के लिए __attribute__((ext_vector_type(3)))", "केवल GCC", "कोई ext_vector नहीं", "invalid"],
    "answer_en": "Clang: __attribute__((ext_vector_type(3))) for 3-element vector",
    "answer_hi": "Clang: 3-element vector के लिए __attribute__((ext_vector_type(3)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'neon_vector_type attribute'?",
    "question_hi": "'neon_vector_type attribute' क्या होता है?",
    "options_en": ["ARM: __attribute__((neon_vector_type))", "Only x86", "No neon", "Invalid"],
    "options_hi": ["ARM: __attribute__((neon_vector_type))", "केवल x86", "कोई neon नहीं", "invalid"],
    "answer_en": "ARM: __attribute__((neon_vector_type))",
    "answer_hi": "ARM: __attribute__((neon_vector_type))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'warn_unused variable attribute'?",
    "question_hi": "'warn_unused variable attribute' क्या होता है?",
    "options_en": ["int x __attribute__((warn_unused))", "Only functions", "No warn_unused", "Invalid"],
    "options_hi": ["int x __attribute__((warn_unused))", "केवल functions", "कोई warn_unused नहीं", "invalid"],
    "answer_en": "int x __attribute__((warn_unused))",
    "answer_hi": "int x __attribute__((warn_unused))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'cleanup with non-auto variable'?",
    "question_hi": "'non-auto variable के साथ cleanup' क्या होता है?",
    "options_en": ["Only works with auto variables", "Works with static", "Works with global", "Any variable"],
    "options_hi": ["केवल auto variables के साथ काम करता है", "static के साथ काम करता है", "global के साथ काम करता है", "कोई भी variable"],
    "answer_en": "Only works with auto variables",
    "answer_hi": "केवल auto variables के साथ काम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'section on variable and function'?",
    "question_hi": "'variable और function पर section' क्या होता है?",
    "options_en": ["Both can have section attribute", "Only function", "Only variable", "Neither"],
    "options_hi": ["दोनों section attribute रख सकते हैं", "केवल function", "केवल variable", "कोई नहीं"],
    "answer_en": "Both can have section attribute",
    "answer_hi": "दोनों section attribute रख सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'alias to weak symbol'?",
    "question_hi": "'weak symbol का alias' क्या होता है?",
    "options_en": ["Weak alias __attribute__((weak, alias(\"target\")))", "Strong alias", "No weak alias", "Invalid"],
    "options_hi": ["Weak alias __attribute__((weak, alias(\"target\")))", "strong alias", "कोई weak alias नहीं", "invalid"],
    "answer_en": "Weak alias __attribute__((weak, alias(\"target\")))",
    "answer_hi": "Weak alias __attribute__((weak, alias(\"target\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'constructor with priority'?",
    "question_hi": "'priority के साथ constructor' क्या होता है?",
    "options_en": ["__attribute__((constructor(101))) priority 101", "No priority", "Only destructor", "Invalid"],
    "options_hi": ["__attribute__((constructor(101))) priority 101", "कोई priority नहीं", "केवल destructor", "invalid"],
    "answer_en": "__attribute__((constructor(101))) priority 101",
    "answer_hi": "__attribute__((constructor(101))) priority 101",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'destructor with priority'?",
    "question_hi": "'priority के साथ destructor' क्या होता है?",
    "options_en": ["__attribute__((destructor(101))) priority 101", "No priority", "Only constructor", "Invalid"],
    "options_hi": ["__attribute__((destructor(101))) priority 101", "कोई priority नहीं", "केवल constructor", "invalid"],
    "answer_en": "__attribute__((destructor(101))) priority 101",
    "answer_hi": "__attribute__((destructor(101))) priority 101",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'visibility on class' in C++ mode?",
    "question_hi": "C++ mode में 'class पर visibility' क्या होता है?",
    "options_en": ["Applies to all class members", "Only class itself", "Not for C++", "Invalid"],
    "options_hi": ["सभी class members पर apply होता है", "केवल class itself", "C++ के लिए नहीं", "invalid"],
    "answer_en": "Applies to all class members",
    "answer_hi": "सभी class members पर apply होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'target specific optimization'?",
    "question_hi": "'target specific optimization' क्या होती है?",
    "options_en": ["__attribute__((target(\"arch=core-avx2\")))", "Generic optimization", "No target", "Invalid"],
    "options_hi": ["__attribute__((target(\"arch=core-avx2\")))", "generic optimization", "कोई target नहीं", "invalid"],
    "answer_en": "__attribute__((target(\"arch=core-avx2\")))",
    "answer_hi": "__attribute__((target(\"arch=core-avx2\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'optimize with multiple options'?",
    "question_hi": "'multiple options के साथ optimize' क्या होता है?",
    "options_en": ["__attribute__((optimize(\"O3\",\"unroll-loops\")))", "Single option", "No options", "Invalid"],
    "options_hi": ["__attribute__((optimize(\"O3\",\"unroll-loops\")))", "single option", "कोई options नहीं", "invalid"],
    "answer_en": "__attribute__((optimize(\"O3\",\"unroll-loops\")))",
    "answer_hi": "__attribute__((optimize(\"O3\",\"unroll-loops\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'flatten on recursive function'?",
    "question_hi": "'recursive function पर flatten' क्या होता है?",
    "options_en": ["May cause infinite inlining", "No effect", "Prevents recursion", "Invalid"],
    "options_hi": ["infinite inlining cause कर सकता है", "कोई effect नहीं", "recursion prevent करता है", "invalid"],
    "answer_en": "May cause infinite inlining",
    "answer_hi": "infinite inlining cause कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'noinline on small function'?",
    "question_hi": "'small function पर noinline' क्या होता है?",
    "options_en": ["Prevents inlining even if small", "Forces inlining", "No effect", "Invalid"],
    "options_hi": ["inlining prevent करता है भले ही small हो", "inlining force करता है", "कोई effect नहीं", "invalid"],
    "answer_en": "Prevents inlining even if small",
    "answer_hi": "inlining prevent करता है भले ही small हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'always_inline on large function'?",
    "question_hi": "'large function पर always_inline' क्या होता है?",
    "options_en": ["Compiler may ignore if too large", "Always inlines", "Error", "Invalid"],
    "options_hi": ["Compiler ignore कर सकता है यदि too large है", "हमेशा inlines", "error", "invalid"],
    "answer_en": "Compiler may ignore if too large",
    "answer_hi": "Compiler ignore कर सकता है यदि too large है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'pure function with I/O'?",
    "question_hi": "'I/O के साथ pure function' क्या होता है?",
    "options_en": ["Invalid: pure cannot have I/O", "Allowed", "Only reading", "Invalid"],
    "options_hi": ["Invalid: pure में I/O नहीं हो सकता", "allowed", "केवल reading", "invalid"],
    "answer_en": "Invalid: pure cannot have I/O",
    "answer_hi": "Invalid: pure में I/O नहीं हो सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'const function with global read'?",
    "question_hi": "'global read के साथ const function' क्या होता है?",
    "options_en": ["Invalid: const cannot read globals", "Allowed", "Only write", "Invalid"],
    "options_hi": ["Invalid: const globals read नहीं कर सकती", "allowed", "केवल write", "invalid"],
    "answer_en": "Invalid: const cannot read globals",
    "answer_hi": "Invalid: const globals read नहीं कर सकती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'noreturn function with return statement'?",
    "question_hi": "'return statement के साथ noreturn function' क्या होता है?",
    "options_en": ["Compiler warning/error", "Allowed", "Only void return", "Invalid"],
    "options_hi": ["Compiler warning/error", "allowed", "केवल void return", "invalid"],
    "answer_en": "Compiler warning/error",
    "answer_hi": "Compiler warning/error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'returns_twice with longjmp'?",
    "question_hi": "'longjmp के साथ returns_twice' क्या होता है?",
    "options_en": ["setjmp returns twice, longjmp doesn't", "Both return twice", "Neither", "Invalid"],
    "options_hi": ["setjmp returns twice, longjmp नहीं", "दोनों returns twice", "कोई नहीं", "invalid"],
    "answer_en": "setjmp returns twice, longjmp doesn't",
    "answer_hi": "setjmp returns twice, longjmp नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'sentinel with zero position'?",
    "question_hi": "'zero position के साथ sentinel' क्या होता है?",
    "options_en": ["__attribute__((sentinel(0))) same as default", "Invalid position", "No sentinel", "Invalid"],
    "options_hi": ["__attribute__((sentinel(0))) default के समान", "invalid position", "कोई sentinel नहीं", "invalid"],
    "answer_en": "__attribute__((sentinel(0))) same as default",
    "answer_hi": "__attribute__((sentinel(0))) default के समान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'deprecated macro'?",
    "question_hi": "'deprecated macro' क्या होता है?",
    "options_en": ["#define OLD_FUNC() __attribute__((deprecated)) old_func()", "No macro", "Only function", "Invalid"],
    "options_hi": ["#define OLD_FUNC() __attribute__((deprecated)) old_func()", "कोई macro नहीं", "केवल function", "invalid"],
    "answer_en": "#define OLD_FUNC() __attribute__((deprecated)) old_func()",
    "answer_hi": "#define OLD_FUNC() __attribute__((deprecated)) old_func()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'unused on struct member'?",
    "question_hi": "'struct member पर unused' क्या होता है?",
    "options_en": ["struct S {int x __attribute__((unused));};", "Not allowed", "Only variables", "Invalid"],
    "options_hi": ["struct S {int x __attribute__((unused));};", "allowed नहीं", "केवल variables", "invalid"],
    "answer_en": "struct S {int x __attribute__((unused));};",
    "answer_hi": "struct S {int x __attribute__((unused));};",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'used on inline function'?",
    "question_hi": "'inline function पर used' क्या होता है?",
    "options_en": ["inline void f() __attribute__((used))", "Not needed", "Only extern", "Invalid"],
    "options_hi": ["inline void f() __attribute__((used))", "needed नहीं", "केवल extern", "invalid"],
    "answer_en": "inline void f() __attribute__((used))",
    "answer_hi": "inline void f() __attribute__((used))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'aligned on array'?",
    "question_hi": "'array पर aligned' क्या होता है?",
    "options_en": ["int arr[4] __attribute__((aligned(16)));", "Not allowed", "Only elements", "Invalid"],
    "options_hi": ["int arr[4] __attribute__((aligned(16)));", "allowed नहीं", "केवल elements", "invalid"],
    "answer_en": "int arr[4] __attribute__((aligned(16)));",
    "answer_hi": "int arr[4] __attribute__((aligned(16)));",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'packed on bit-field struct'?",
    "question_hi": "'bit-field struct पर packed' क्या होता है?",
    "options_en": ["struct __attribute__((packed)) {int a:4; int b:4;};", "Not needed", "Only regular", "Invalid"],
    "options_hi": ["struct __attribute__((packed)) {int a:4; int b:4;};", "needed नहीं", "केवल regular", "invalid"],
    "answer_en": "struct __attribute__((packed)) {int a:4; int b:4;};",
    "answer_hi": "struct __attribute__((packed)) {int a:4; int b:4;};",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'transparent_union with different sizes'?",
    "question_hi": "'different sizes के साथ transparent_union' क्या होता है?",
    "options_en": ["Members can have different sizes", "Must be same", "Only pointers", "Invalid"],
    "options_hi": ["members different sizes रख सकते हैं", "same होना चाहिए", "केवल pointers", "invalid"],
    "answer_en": "Members can have different sizes",
    "answer_hi": "members different sizes रख सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'mode on float type'?",
    "question_hi": "'float type पर mode' क्या होता है?",
    "options_en": ["__attribute__((mode(SF))) single float", "Only integers", "No float mode", "Invalid"],
    "options_hi": ["__attribute__((mode(SF))) single float", "केवल integers", "कोई float mode नहीं", "invalid"],
    "answer_en": "__attribute__((mode(SF))) single float",
    "answer_hi": "__attribute__((mode(SF))) single float",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'vector_size not power of 2'?",
    "question_hi": "'power of 2 नहीं, ऐसे vector_size' क्या होता है?",
    "options_en": ["__attribute__((vector_size(12))) may not work", "Works fine", "Error", "Invalid"],
    "options_hi": ["__attribute__((vector_size(12))) काम नहीं कर सकता", "ठीक काम करता है", "error", "invalid"],
    "answer_en": "__attribute__((vector_size(12))) may not work",
    "answer_hi": "__attribute__((vector_size(12))) काम नहीं कर सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'no_sanitize_all'?",
    "question_hi": "'no_sanitize_all' क्या होता है?",
    "options_en": ["__attribute__((no_sanitize_all)) disables all sanitizers", "Not exists", "Only some", "Invalid"],
    "options_hi": ["__attribute__((no_sanitize_all)) सभी sanitizers disable करता है", "exists नहीं", "केवल कुछ", "invalid"],
    "answer_en": "__attribute__((no_sanitize_all)) disables all sanitizers",
    "answer_hi": "__attribute__((no_sanitize_all)) सभी sanitizers disable करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'assume_aligned on return type'?",
    "question_hi": "'return type पर assume_aligned' क्या होता है?",
    "options_en": ["int* f() __attribute__((assume_aligned(16)));", "Not allowed", "Only parameters", "Invalid"],
    "options_hi": ["int* f() __attribute__((assume_aligned(16)));", "allowed नहीं", "केवल parameters", "invalid"],
    "answer_en": "int* f() __attribute__((assume_aligned(16)));",
    "answer_hi": "int* f() __attribute__((assume_aligned(16)));",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'alloc_size on realloc-like'?",
    "question_hi": "'realloc-like पर alloc_size' क्या होता है?",
    "options_en": ["__attribute__((alloc_size(2))) for realloc", "Only malloc", "No realloc", "Invalid"],
    "options_hi": ["realloc के लिए __attribute__((alloc_size(2)))", "केवल malloc", "कोई realloc नहीं", "invalid"],
    "answer_en": "__attribute__((alloc_size(2))) for realloc",
    "answer_hi": "realloc के लिए __attribute__((alloc_size(2)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'warn_if_not_aligned level'?",
    "question_hi": "'warn_if_not_aligned level' क्या होता है?",
    "options_en": ["__attribute__((warn_if_not_aligned(16)))", "No level", "Only check", "Invalid"],
    "options_hi": ["__attribute__((warn_if_not_aligned(16)))", "कोई level नहीं", "केवल check", "invalid"],
    "answer_en": "__attribute__((warn_if_not_aligned(16)))",
    "answer_hi": "__attribute__((warn_if_not_aligned(16)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'target_clones with default'?",
    "question_hi": "'default के साथ target_clones' क्या होता है?",
    "options_en": ["__attribute__((target_clones(\"default,avx2\")))", "Without default", "Only avx2", "Invalid"],
    "options_hi": ["__attribute__((target_clones(\"default,avx2\")))", "default के बिना", "केवल avx2", "invalid"],
    "answer_en": "__attribute__((target_clones(\"default,avx2\")))",
    "answer_hi": "__attribute__((target_clones(\"default,avx2\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'symver with version range'?",
    "question_hi": "'version range के साथ symver' क्या होता है?",
    "options_en": ["__attribute__((symver(\"foo@@VERS_2\"))) default version", "No range", "Only @", "Invalid"],
    "options_hi": ["__attribute__((symver(\"foo@@VERS_2\"))) default version", "कोई range नहीं", "केवल @", "invalid"],
    "answer_en": "__attribute__((symver(\"foo@@VERS_2\"))) default version",
    "answer_hi": "__attribute__((symver(\"foo@@VERS_2\"))) default version",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'tls_model local-exec'?",
    "question_hi": "'tls_model local-exec' क्या होता है?",
    "options_en": ["__attribute__((tls_model(\"local-exec\")))", "Only initial-exec", "No local", "Invalid"],
    "options_hi": ["__attribute__((tls_model(\"local-exec\")))", "केवल initial-exec", "कोई local नहीं", "invalid"],
    "answer_en": "__attribute__((tls_model(\"local-exec\")))",
    "answer_hi": "__attribute__((tls_model(\"local-exec\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'selectany on const variable'?",
    "question_hi": "'const variable पर selectany' क्या होता है?",
    "options_en": ["const int x __attribute__((selectany)) = 5;", "Not allowed", "Only non-const", "Invalid"],
    "options_hi": ["const int x __attribute__((selectany)) = 5;", "allowed नहीं", "केवल non-const", "invalid"],
    "answer_en": "const int x __attribute__((selectany)) = 5;",
    "answer_hi": "const int x __attribute__((selectany)) = 5;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'dllimport on static function'?",
    "question_hi": "'static function पर dllimport' क्या होता है?",
    "options_en": ["Invalid: static cannot be dllimport", "Allowed", "Only extern", "Invalid"],
    "options_hi": ["Invalid: static dllimport नहीं हो सकता", "allowed", "केवल extern", "invalid"],
    "answer_en": "Invalid: static cannot be dllimport",
    "answer_hi": "Invalid: static dllimport नहीं हो सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'dllexport on inline function'?",
    "question_hi": "'inline function पर dllexport' क्या होता है?",
    "options_en": ["inline __attribute__((dllexport)) void f() {}", "Not allowed", "Only extern", "Invalid"],
    "options_hi": ["inline __attribute__((dllexport)) void f() {}", "allowed नहीं", "केवल extern", "invalid"],
    "answer_en": "inline __attribute__((dllexport)) void f() {}",
    "answer_hi": "inline __attribute__((dllexport)) void f() {}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'interrupt handler prologue'?",
    "question_hi": "'interrupt handler prologue' क्या होता है?",
    "options_en": ["Compiler generates register save/restore", "No prologue", "Manual only", "Invalid"],
    "options_hi": ["Compiler register save/restore generate करता है", "कोई prologue नहीं", "केवल manual", "invalid"],
    "answer_en": "Compiler generates register save/restore",
    "answer_hi": "Compiler register save/restore generate करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'naked function restrictions'?",
    "question_hi": "'naked function restrictions' क्या होती हैं?",
    "options_en": ["Cannot have return statement", "Can have return", "No restrictions", "Invalid"],
    "options_hi": ["return statement नहीं हो सकता", "return हो सकता है", "कोई restrictions नहीं", "invalid"],
    "answer_en": "Cannot have return statement",
    "answer_hi": "return statement नहीं हो सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'vector_type with operators'?",
    "question_hi": "'operators के साथ vector_type' क्या होता है?",
    "options_en": ["Supports arithmetic operators", "No operators", "Only assignment", "Invalid"],
    "options_hi": ["arithmetic operators support करता है", "कोई operators नहीं", "केवल assignment", "invalid"],
    "answer_en": "Supports arithmetic operators",
    "answer_hi": "arithmetic operators support करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'ext_vector_type swizzle'?",
    "question_hi": "'ext_vector_type swizzle' क्या होता है?",
    "options_en": ["vector.xy, vector.xyz etc. for element access", "No swizzle", "Only []", "Invalid"],
    "options_hi": ["element access के लिए vector.xy, vector.xyz आदि", "कोई swizzle नहीं", "केवल []", "invalid"],
    "answer_en": "vector.xy, vector.xyz etc. for element access",
    "answer_hi": "element access के लिए vector.xy, vector.xyz आदि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'neon_vector_type for ARM'?",
    "question_hi": "ARM के लिए 'neon_vector_type' क्या होता है?",
    "options_en": ["ARM NEON SIMD vector types", "Not for ARM", "Only x86", "Invalid"],
    "options_hi": ["ARM NEON SIMD vector types", "ARM के लिए नहीं", "केवल x86", "invalid"],
    "answer_en": "ARM NEON SIMD vector types",
    "answer_hi": "ARM NEON SIMD vector types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'warn_unused on typedef'?",
    "question_hi": "'typedef पर warn_unused' क्या होता है?",
    "options_en": ["typedef int __attribute__((warn_unused)) unused_int;", "Not allowed", "Only variables", "Invalid"],
    "options_hi": ["typedef int __attribute__((warn_unused)) unused_int;", "allowed नहीं", "केवल variables", "invalid"],
    "answer_en": "typedef int __attribute__((warn_unused)) unused_int;",
    "answer_hi": "typedef int __attribute__((warn_unused)) unused_int;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'cleanup attribute working only with auto variables'?",
    "question_hi": "'cleanup attribute केवल auto variables के साथ काम करता है' क्या होता है?",
    "options_en": ["Yes, cleanup works only with automatic (local) variables", "Works with all variables", "Works only with static", "Invalid statement"],
    "options_hi": ["हाँ, cleanup केवल automatic (local) variables के साथ काम करता है", "सभी variables के साथ काम करता है", "केवल static के साथ काम करता है", "invalid statement"],
    "answer_en": "Yes, cleanup works only with automatic (local) variables",
    "answer_hi": "हाँ, cleanup केवल automatic (local) variables के साथ काम करता है",
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