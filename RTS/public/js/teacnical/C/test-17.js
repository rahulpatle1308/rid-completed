const questions = [
  {
    "num": 1,
    "question_en": "What is the difference between 'char str[]' and 'char *str'?",
    "question_hi": "'char str[]' और 'char *str' में क्या अंतर है?",
    "options_en": ["Array vs pointer, memory allocation difference", "No difference", "Syntax difference only", "Same for all purposes"],
    "options_hi": ["Array बनाम pointer, memory allocation का अंतर", "कोई अंतर नहीं", "केवल syntax का अंतर", "सभी purposes के लिए समान"],
    "answer_en": "Array vs pointer, memory allocation difference",
    "answer_hi": "Array बनाम pointer, memory allocation का अंतर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'strict aliasing rule' violation?",
    "question_hi": "'strict aliasing rule' violation क्या होती है?",
    "options_en": ["Accessing same memory through pointers of incompatible types", "Using same variable name", "Pointer arithmetic", "Memory allocation"],
    "options_hi": ["incompatible types के pointers के माध्यम से same memory access करना", "same variable name का उपयोग", "pointer arithmetic", "memory allocation"],
    "answer_en": "Accessing same memory through pointers of incompatible types",
    "answer_hi": "incompatible types के pointers के माध्यम से same memory access करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'pointer to const' vs 'const pointer'?",
    "question_hi": "'pointer to const' और 'const pointer' में क्या अंतर है?",
    "options_en": ["const int* vs int* const", "Same thing", "Both are constant pointers", "Both point to constants"],
    "options_hi": ["const int* बनाम int* const", "एक ही चीज़", "दोनों constant pointers हैं", "दोनों constants की ओर point करते हैं"],
    "answer_en": "const int* vs int* const",
    "answer_hi": "const int* बनाम int* const",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'sequence point' and undefined behavior?",
    "question_hi": "'sequence point' और undefined behavior क्या होता है?",
    "options_en": ["Between sequence points, order of side effects undefined", "Always defined", "Compiler defined", "Runtime defined"],
    "options_hi": ["sequence points के बीच, side effects का order undefined होता है", "हमेशा defined", "compiler defined", "runtime defined"],
    "answer_en": "Between sequence points, order of side effects undefined",
    "answer_hi": "sequence points के बीच, side effects का order undefined होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'restrict' qualifier optimization?",
    "question_hi": "'restrict' qualifier optimization क्या होती है?",
    "options_en": ["Compiler assumes no aliasing for better optimization", "Restricts pointer movement", "Makes pointer constant", "Prevents pointer arithmetic"],
    "options_hi": ["Compiler better optimization के लिए कोई aliasing नहीं मानता", "pointer movement restrict करता है", "pointer constant बनाता है", "pointer arithmetic prevent करता है"],
    "answer_en": "Compiler assumes no aliasing for better optimization",
    "answer_hi": "Compiler better optimization के लिए कोई aliasing नहीं मानता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'structure packing' with #pragma pack?",
    "question_hi": "#pragma pack के साथ 'structure packing' क्या होती है?",
    "options_en": ["Controls alignment of structure members", "Compresses structure", "Encrypts structure", "Optimizes structure access"],
    "options_hi": ["structure members की alignment control करती है", "structure compress करती है", "structure encrypt करती है", "structure access optimize करती है"],
    "answer_en": "Controls alignment of structure members",
    "answer_hi": "structure members की alignment control करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'weak attribute'?",
    "question_hi": "'weak attribute' क्या होता है?",
    "options_en": ["__attribute__((weak)) creates weak symbol", "Standard C", "C++ only", "Strong symbol"],
    "options_hi": ["__attribute__((weak)) weak symbol create करता है", "standard C", "केवल C++", "strong symbol"],
    "answer_en": "__attribute__((weak)) creates weak symbol",
    "answer_hi": "__attribute__((weak)) weak symbol create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'type punning' using union?",
    "question_hi": "union का उपयोग करके 'type punning' क्या होता है?",
    "options_en": ["Accessing same memory as different type through union", "Type conversion", "Type casting", "Type checking"],
    "options_hi": ["union के माध्यम से same memory को different type के रूप में access करना", "type conversion", "type casting", "type checking"],
    "answer_en": "Accessing same memory as different type through union",
    "answer_hi": "union के माध्यम से same memory को different type के रूप में access करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'dynamic 2D array' implementation?",
    "question_hi": "'dynamic 2D array' implementation क्या होती है?",
    "options_en": ["Pointer to pointer with malloc for rows and columns", "Static 2D array", "Single malloc", "Array of arrays"],
    "options_hi": ["rows और columns के लिए malloc के साथ pointer to pointer", "static 2D array", "single malloc", "arrays का array"],
    "answer_en": "Pointer to pointer with malloc for rows and columns",
    "answer_hi": "rows और columns के लिए malloc के साथ pointer to pointer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'function returning pointer to array'?",
    "question_hi": "'function returning pointer to array' क्या होता है?",
    "options_en": ["int (*func())[N] - function returning pointer to array of N ints", "int *func() - function returning pointer to int", "int func()[] - invalid", "Array returning function"],
    "options_hi": ["int (*func())[N] - N ints के array का pointer return करने वाला function", "int *func() - int का pointer return करने वाला function", "int func()[] - invalid", "array return करने वाला function"],
    "answer_en": "int (*func())[N] - function returning pointer to array of N ints",
    "answer_hi": "int (*func())[N] - N ints के array का pointer return करने वाला function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'zero-length array' hack in C?",
    "question_hi": "C में 'zero-length array' hack क्या होता है?",
    "options_en": ["Flexible array member in structures for dynamic sizing", "Invalid array", "Array of size 0", "Pointer array"],
    "options_hi": ["structures में dynamic sizing के लिए flexible array member", "invalid array", "size 0 का array", "pointer array"],
    "answer_en": "Flexible array member in structures for dynamic sizing",
    "answer_hi": "structures में dynamic sizing के लिए flexible array member",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'double pointer' (int **) used for?",
    "question_hi": "'double pointer' (int **) का उपयोग किस लिए होता है?",
    "options_en": ["Dynamic 2D arrays, modifying pointer in function", "Single value", "Constant pointer", "Array pointer"],
    "options_hi": ["Dynamic 2D arrays, function में pointer modify करने के लिए", "single value", "constant pointer", "array pointer"],
    "answer_en": "Dynamic 2D arrays, modifying pointer in function",
    "answer_hi": "Dynamic 2D arrays, function में pointer modify करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'callback function' mechanism?",
    "question_hi": "'callback function' mechanism क्या होता है?",
    "options_en": ["Function pointer passed as argument for later call", "Recursive function", "Inline function", "Static function"],
    "options_hi": ["बाद में call के लिए argument के रूप में passed function pointer", "recursive function", "inline function", "static function"],
    "answer_en": "Function pointer passed as argument for later call",
    "answer_hi": "बाद में call के लिए argument के रूप में passed function pointer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'atomic operations' in C11?",
    "question_hi": "C11 में 'atomic operations' क्या होते हैं?",
    "options_en": ["_Atomic type and operations for thread safety", "Basic operations", "Mathematical operations", "String operations"],
    "options_hi": ["thread safety के लिए _Atomic type और operations", "basic operations", "mathematical operations", "string operations"],
    "answer_en": "_Atomic type and operations for thread safety",
    "answer_hi": "thread safety के लिए _Atomic type और operations",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'designated initializer' for structures?",
    "question_hi": "structures के लिए 'designated initializer' क्या होता है?",
    "options_en": [".member = value syntax for initializing specific members", "Sequential initialization", "Zero initialization", "Default initialization"],
    "options_hi": ["specific members initialize करने के लिए .member = value syntax", "sequential initialization", "zero initialization", "default initialization"],
    "answer_en": ".member = value syntax for initializing specific members",
    "answer_hi": "specific members initialize करने के लिए .member = value syntax",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'variadic function' implementation?",
    "question_hi": "'variadic function' implementation क्या होती है?",
    "options_en": ["Function with variable arguments using stdarg.h macros", "Fixed argument function", "Recursive function", "Inline function"],
    "options_hi": ["stdarg.h macros का उपयोग करके variable arguments वाला function", "fixed argument function", "recursive function", "inline function"],
    "answer_en": "Function with variable arguments using stdarg.h macros",
    "answer_hi": "stdarg.h macros का उपयोग करके variable arguments वाला function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'inline assembly' in C?",
    "question_hi": "C में 'inline assembly' क्या होता है?",
    "options_en": ["asm() for embedding assembly code in C", "C code only", "External assembly", "No assembly in C"],
    "options_hi": ["C में assembly code embed करने के लिए asm()", "केवल C code", "external assembly", "C में कोई assembly नहीं"],
    "answer_en": "asm() for embedding assembly code in C",
    "answer_hi": "C में assembly code embed करने के लिए asm()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'bit manipulation' techniques?",
    "question_hi": "'bit manipulation' techniques क्या होती हैं?",
    "options_en": ["Using bitwise operators for flags, masks, etc.", "Arithmetic operations", "Logical operations", "String operations"],
    "options_hi": ["flags, masks आदि के लिए bitwise operators का उपयोग", "arithmetic operations", "logical operations", "string operations"],
    "answer_en": "Using bitwise operators for flags, masks, etc.",
    "answer_hi": "flags, masks आदि के लिए bitwise operators का उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'memory alignment' requirement?",
    "question_hi": "'memory alignment' requirement क्या होती है?",
    "options_en": ["Data must be stored at addresses divisible by their size", "Any address works", "Only for arrays", "Only for structures"],
    "options_hi": ["डेटा को उनके size से divisible addresses पर store किया जाना चाहिए", "कोई भी address काम करता है", "केवल arrays के लिए", "केवल structures के लिए"],
    "answer_en": "Data must be stored at addresses divisible by their size",
    "answer_hi": "डेटा को उनके size से divisible addresses पर store किया जाना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'pointer to function' vs 'function returning pointer'?",
    "question_hi": "'pointer to function' और 'function returning pointer' में क्या अंतर है?",
    "options_en": ["int (*fptr)() vs int* func()", "Same thing", "Both are function pointers", "Both return pointers"],
    "options_hi": ["int (*fptr)() बनाम int* func()", "एक ही चीज़", "दोनों function pointers हैं", "दोनों pointers return करते हैं"],
    "answer_en": "int (*fptr)() vs int* func()",
    "answer_hi": "int (*fptr)() बनाम int* func()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'string interning' optimization?",
    "question_hi": "'string interning' optimization क्या होती है?",
    "options_en": ["Compiler merging identical string literals to save space", "String concatenation", "String splitting", "String copying"],
    "options_hi": ["Compiler space save करने के लिए identical string literals merge करता है", "string concatenation", "string splitting", "string copying"],
    "answer_en": "Compiler merging identical string literals to save space",
    "answer_hi": "Compiler space save करने के लिए identical string literals merge करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'heap fragmentation' issue?",
    "question_hi": "'heap fragmentation' issue क्या होती है?",
    "options_en": ["Free memory becomes fragmented causing allocation failures", "Heap corruption", "Stack overflow", "Memory leak"],
    "options_hi": ["free memory fragmented हो जाती है जिससे allocation failures होती हैं", "heap corruption", "stack overflow", "memory leak"],
    "answer_en": "Free memory becomes fragmented causing allocation failures",
    "answer_hi": "free memory fragmented हो जाती है जिससे allocation failures होती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'circular buffer' implementation?",
    "question_hi": "'circular buffer' implementation क्या होती है?",
    "options_en": ["Buffer where end wraps to beginning using modulo arithmetic", "Linear buffer", "Stack buffer", "Queue buffer"],
    "options_hi": ["modulo arithmetic का उपयोग करके वह buffer जहाँ end beginning से wrap होता है", "linear buffer", "stack buffer", "queue buffer"],
    "answer_en": "Buffer where end wraps to beginning using modulo arithmetic",
    "answer_hi": "modulo arithmetic का उपयोग करके वह buffer जहाँ end beginning से wrap होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'function pointer array' usage?",
    "question_hi": "'function pointer array' का उपयोग क्या होता है?",
    "options_en": ["Jump table, state machines, callbacks", "Normal array", "Pointer array", "Data array"],
    "options_hi": ["jump table, state machines, callbacks", "normal array", "pointer array", "data array"],
    "answer_en": "Jump table, state machines, callbacks",
    "answer_hi": "jump table, state machines, callbacks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'static assertion' _Static_assert?",
    "question_hi": "'static assertion' _Static_assert क्या होती है?",
    "options_en": ["Compile-time assertion checking constant expressions", "Runtime assertion", "Debug assertion", "Dynamic check"],
    "options_hi": ["constant expressions check करने वाली compile-time assertion", "runtime assertion", "debug assertion", "dynamic check"],
    "answer_en": "Compile-time assertion checking constant expressions",
    "answer_hi": "constant expressions check करने वाली compile-time assertion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'thread-local storage' _Thread_local?",
    "question_hi": "'thread-local storage' _Thread_local क्या होती है?",
    "options_en": ["Variable with separate instance per thread", "Global variable", "Static variable", "Local variable"],
    "options_hi": ["प्रति thread separate instance वाला variable", "global variable", "static variable", "local variable"],
    "answer_en": "Variable with separate instance per thread",
    "answer_hi": "प्रति thread separate instance वाला variable",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'complex number' support _Complex?",
    "question_hi": "'complex number' support _Complex क्या होती है?",
    "options_en": ["C99 support for complex numbers with real and imaginary parts", "No complex support", "Only real numbers", "Only integers"],
    "options_hi": ["real और imaginary parts के साथ complex numbers के लिए C99 support", "कोई complex support नहीं", "केवल real numbers", "केवल integers"],
    "answer_en": "C99 support for complex numbers with real and imaginary parts",
    "answer_hi": "real और imaginary parts के साथ complex numbers के लिए C99 support",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'generic selection' _Generic?",
    "question_hi": "'generic selection' _Generic क्या होती है?",
    "options_en": ["C11 feature for type-based dispatch at compile time", "Runtime type checking", "Function overloading", "Template"],
    "options_hi": ["compile time पर type-based dispatch के लिए C11 feature", "runtime type checking", "function overloading", "template"],
    "answer_en": "C11 feature for type-based dispatch at compile time",
    "answer_hi": "compile time पर type-based dispatch के लिए C11 feature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'memory ordering' in atomics?",
    "question_hi": "atomics में 'memory ordering' क्या होती है?",
    "options_en": ["memory_order_seq_cst, memory_order_relaxed, etc.", "No ordering", "Compiler ordering", "Runtime ordering"],
    "options_hi": ["memory_order_seq_cst, memory_order_relaxed, आदि", "कोई ordering नहीं", "compiler ordering", "runtime ordering"],
    "answer_en": "memory_order_seq_cst, memory_order_relaxed, etc.",
    "answer_hi": "memory_order_seq_cst, memory_order_relaxed, आदि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'flexible array member' in C99?",
    "question_hi": "C99 में 'flexible array member' क्या होता है?",
    "options_en": ["Array as last struct member without specified size", "Fixed array", "Pointer array", "Dynamic array"],
    "options_hi": ["unspecified size वाला array जो struct का last member है", "fixed array", "pointer array", "dynamic array"],
    "answer_en": "Array as last struct member without specified size",
    "answer_hi": "unspecified size वाला array जो struct का last member है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'compound literal' usage?",
    "question_hi": "'compound literal' का उपयोग क्या होता है?",
    "options_en": ["(type){initializers} for creating unnamed objects", "Named objects", "Variables", "Constants"],
    "options_hi": ["unnamed objects create करने के लिए (type){initializers}", "named objects", "variables", "constants"],
    "answer_en": "(type){initializers} for creating unnamed objects",
    "answer_hi": "unnamed objects create करने के लिए (type){initializers}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'aligned_alloc' in C11?",
    "question_hi": "C11 में 'aligned_alloc' क्या होता है?",
    "options_en": ["Allocates memory with specific alignment", "Normal malloc", "calloc", "realloc"],
    "options_hi": ["specific alignment के साथ memory allocate करता है", "normal malloc", "calloc", "realloc"],
    "answer_en": "Allocates memory with specific alignment",
    "answer_hi": "specific alignment के साथ memory allocate करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'no-return function' _Noreturn?",
    "question_hi": "'no-return function' _Noreturn क्या होती है?",
    "options_en": ["Function that never returns (exit(), abort())", "Void function", "Int function", "Recursive function"],
    "options_hi": ["वह function जो कभी return नहीं करता (exit(), abort())", "void function", "int function", "recursive function"],
    "answer_en": "Function that never returns (exit(), abort())",
    "answer_hi": "वह function जो कभी return नहीं करता (exit(), abort())",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'static array index' in parameters?",
    "question_hi": "parameters में 'static array index' क्या होता है?",
    "options_en": ["void func(int arr[static 10]) ensures at least 10 elements", "Normal array", "Dynamic array", "Pointer"],
    "options_hi": ["void func(int arr[static 10]) कम से कम 10 elements ensure करता है", "normal array", "dynamic array", "pointer"],
    "answer_en": "void func(int arr[static 10]) ensures at least 10 elements",
    "answer_hi": "void func(int arr[static 10]) कम से कम 10 elements ensure करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'variable length array' (VLA) limitation?",
    "question_hi": "'variable length array' (VLA) की limitation क्या होती है?",
    "options_en": ["Cannot have static storage duration, optional in C11", "No limitations", "Cannot be in structures", "Cannot have pointers"],
    "options_hi": ["static storage duration नहीं हो सकती, C11 में optional", "कोई limitations नहीं", "structures में नहीं हो सकती", "pointers नहीं हो सकते"],
    "answer_en": "Cannot have static storage duration, optional in C11",
    "answer_hi": "static storage duration नहीं हो सकती, C11 में optional",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'designated initializer for arrays'?",
    "question_hi": "arrays के लिए 'designated initializer' क्या होता है?",
    "options_en": ["[index] = value syntax to initialize specific elements", "Sequential initialization", "All zeros", "Default values"],
    "options_hi": ["specific elements initialize करने के लिए [index] = value syntax", "sequential initialization", "सभी zeros", "default values"],
    "answer_en": "[index] = value syntax to initialize specific elements",
    "answer_hi": "specific elements initialize करने के लिए [index] = value syntax",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'pointer to incomplete type'?",
    "question_hi": "'pointer to incomplete type' क्या होता है?",
    "options_en": ["Pointer to struct that's only declared, not defined", "Complete type pointer", "Void pointer", "Null pointer"],
    "options_hi": ["केवल declared, defined नहीं, ऐसे struct का pointer", "complete type pointer", "void pointer", "null pointer"],
    "answer_en": "Pointer to struct that's only declared, not defined",
    "answer_hi": "केवल declared, defined नहीं, ऐसे struct का pointer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'translation unit' concept?",
    "question_hi": "'translation unit' concept क्या होता है?",
    "options_en": ["Source file after preprocessing, compiled separately", "Object file", "Executable", "Library"],
    "options_hi": ["preprocessing के बाद का source file, अलग से compiled", "object file", "executable", "library"],
    "answer_en": "Source file after preprocessing, compiled separately",
    "answer_hi": "preprocessing के बाद का source file, अलग से compiled",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'tentative definition' rule?",
    "question_hi": "'tentative definition' rule क्या होती है?",
    "options_en": ["External declaration without initializer, can have multiple", "Definition", "Declaration with initializer", "Function definition"],
    "options_hi": ["बिना initializer के external declaration, multiple हो सकते हैं", "definition", "initializer के साथ declaration", "function definition"],
    "answer_en": "External declaration without initializer, can have multiple",
    "answer_hi": "बिना initializer के external declaration, multiple हो सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'compatible type' requirement?",
    "question_hi": "'compatible type' requirement क्या होती है?",
    "options_en": ["Types must be compatible for multiple declarations", "Any types", "Same types only", "Different types"],
    "options_hi": ["multiple declarations के लिए types compatible होने चाहिए", "कोई भी types", "केवल same types", "different types"],
    "answer_en": "Types must be compatible for multiple declarations",
    "answer_hi": "multiple declarations के लिए types compatible होने चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'linkage' types?",
    "question_hi": "'linkage' types क्या होते हैं?",
    "options_en": ["External, internal, no linkage", "Only external", "Only internal", "No linkage only"],
    "options_hi": ["external, internal, no linkage", "केवल external", "केवल internal", "केवल no linkage"],
    "answer_en": "External, internal, no linkage",
    "answer_hi": "external, internal, no linkage",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'storage duration' types?",
    "question_hi": "'storage duration' types क्या होते हैं?",
    "options_en": ["Static, automatic, allocated, thread", "Only static", "Only automatic", "Only allocated"],
    "options_hi": ["static, automatic, allocated, thread", "केवल static", "केवल automatic", "केवल allocated"],
    "answer_en": "Static, automatic, allocated, thread",
    "answer_hi": "static, automatic, allocated, thread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'effective type' rule?",
    "question_hi": "'effective type' rule क्या होती है?",
    "options_en": ["Type used for accessing object determines effective type", "Declared type", "Actual type", "Pointer type"],
    "options_hi": ["object access करने के लिए उपयोग किया गया type effective type determine करता है", "declared type", "actual type", "pointer type"],
    "answer_en": "Type used for accessing object determines effective type",
    "answer_hi": "object access करने के लिए उपयोग किया गया type effective type determine करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'as-if rule'?",
    "question_hi": "'as-if rule' क्या होती है?",
    "options_en": ["Compiler can optimize if observable behavior same", "No optimization", "Full optimization", "Limited optimization"],
    "options_hi": ["Compiler optimize कर सकता है यदि observable behavior same है", "कोई optimization नहीं", "full optimization", "limited optimization"],
    "answer_en": "Compiler can optimize if observable behavior same",
    "answer_hi": "Compiler optimize कर सकता है यदि observable behavior same है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'integer promotions' rule?",
    "question_hi": "'integer promotions' rule क्या होती है?",
    "options_en": ["char, short promoted to int in expressions", "No promotion", "Promoted to long", "Promoted to float"],
    "options_hi": ["expressions में char, short का int में promotion", "कोई promotion नहीं", "long में promotion", "float में promotion"],
    "answer_en": "char, short promoted to int in expressions",
    "answer_hi": "expressions में char, short का int में promotion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'usual arithmetic conversions'?",
    "question_hi": "'usual arithmetic conversions' क्या होती हैं?",
    "options_en": ["Standard conversions applied before arithmetic operations", "No conversions", "Manual conversions", "Runtime conversions"],
    "options_hi": ["arithmetic operations से पहले applied standard conversions", "कोई conversions नहीं", "manual conversions", "runtime conversions"],
    "answer_en": "Standard conversions applied before arithmetic operations",
    "answer_hi": "arithmetic operations से पहले applied standard conversions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'precedence vs associativity' example?",
    "question_hi": "'precedence vs associativity' का example क्या है?",
    "options_en": ["* has higher precedence than +, left-to-right associativity", "Same precedence", "Right-to-left", "No associativity"],
    "options_hi": ["* की + से higher precedence है, left-to-right associativity", "same precedence", "right-to-left", "कोई associativity नहीं"],
    "answer_en": "* has higher precedence than +, left-to-right associativity",
    "answer_hi": "* की + से higher precedence है, left-to-right associativity",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'trigraph sequences'?",
    "question_hi": "'trigraph sequences' क्या होती हैं?",
    "options_en": ["??=, ??(, etc. for special characters in limited char sets", "Not used now", "Binary sequences", "Hex sequences"],
    "options_hi": ["limited char sets में special characters के लिए ??=, ??(, आदि", "अब उपयोग नहीं", "binary sequences", "hex sequences"],
    "answer_en": "??=, ??(, etc. for special characters in limited char sets",
    "answer_hi": "limited char sets में special characters के लिए ??=, ??(, आदि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'digraph tokens'?",
    "question_hi": "'digraph tokens' क्या होते हैं?",
    "options_en": ["<%, %>, <:, :> etc. as alternative tokens", "Trigraphs", "Same as trigraphs", "Not in C"],
    "options_hi": ["alternative tokens के रूप में <%, %>, <:, :> आदि", "trigraphs", "trigraphs के समान", "C में नहीं"],
    "answer_en": "<%, %>, <:, :> etc. as alternative tokens",
    "answer_hi": "alternative tokens के रूप में <%, %>, <:, :> आदि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'universal character names'?",
    "question_hi": "'universal character names' क्या होते हैं?",
    "options_en": ["\\uXXXX and \\UXXXXXXXX for Unicode characters", "ASCII only", "Extended ASCII", "No Unicode"],
    "options_hi": ["Unicode characters के लिए \\uXXXX और \\UXXXXXXXX", "केवल ASCII", "extended ASCII", "कोई Unicode नहीं"],
    "answer_en": "\\uXXXX and \\UXXXXXXXX for Unicode characters",
    "answer_hi": "Unicode characters के लिए \\uXXXX और \\UXXXXXXXX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'complex macro with arguments' pitfall?",
    "question_hi": "'complex macro with arguments' की pitfall क्या होती है?",
    "options_en": ["Arguments not evaluated, multiple evaluation problems", "No problems", "Simple expansion", "Safe always"],
    "options_hi": ["arguments evaluated नहीं होते, multiple evaluation problems", "कोई problems नहीं", "simple expansion", "हमेशा safe"],
    "answer_en": "Arguments not evaluated, multiple evaluation problems",
    "answer_hi": "arguments evaluated नहीं होते, multiple evaluation problems",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'do-while(0) macro wrapper' purpose?",
    "question_hi": "'do-while(0) macro wrapper' का purpose क्या होता है?",
    "options_en": ["Makes macro behave like single statement", "Loop macro", "Conditional macro", "Function macro"],
    "options_hi": ["macro को single statement की तरह behave कराता है", "loop macro", "conditional macro", "function macro"],
    "answer_en": "Makes macro behave like single statement",
    "answer_hi": "macro को single statement की तरह behave कराता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'stringizing operator #' usage?",
    "question_hi": "'stringizing operator #' का usage क्या होता है?",
    "options_en": ["Converts macro parameter to string literal", "Concatenation", "Comment", "Line break"],
    "options_hi": ["macro parameter को string literal में convert करता है", "concatenation", "comment", "line break"],
    "answer_en": "Converts macro parameter to string literal",
    "answer_hi": "macro parameter को string literal में convert करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'token pasting operator ##' usage?",
    "question_hi": "'token pasting operator ##' का usage क्या होता है?",
    "options_en": ["Concatenates tokens in macro expansion", "String concatenation", "Comment", "Space"],
    "options_hi": ["macro expansion में tokens concatenate करता है", "string concatenation", "comment", "space"],
    "answer_en": "Concatenates tokens in macro expansion",
    "answer_hi": "macro expansion में tokens concatenate करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'predefined macro names'?",
    "question_hi": "'predefined macro names' क्या होते हैं?",
    "options_en": ["__FILE__, __LINE__, __DATE__, __TIME__", "No predefined", "Only __LINE__", "Only __FILE__"],
    "options_hi": ["__FILE__, __LINE__, __DATE__, __TIME__", "कोई predefined नहीं", "केवल __LINE__", "केवल __FILE__"],
    "answer_en": "__FILE__, __LINE__, __DATE__, __TIME__",
    "answer_hi": "__FILE__, __LINE__, __DATE__, __TIME__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'pragma operator _Pragma'?",
    "question_hi": "'pragma operator _Pragma' क्या होता है?",
    "options_en": ["C99 operator for pragmas in macros", "Preprocessor directive", "Compiler directive", "Linker directive"],
    "options_hi": ["macros में pragmas के लिए C99 operator", "preprocessor directive", "compiler directive", "linker directive"],
    "answer_en": "C99 operator for pragmas in macros",
    "answer_hi": "macros में pragmas के लिए C99 operator",
    "attempted": false,
    "selected": ""
  },
 { 
    "num": 57,
    "question_en": "What is 'noreturn attribute'?",
    "question_hi": "'noreturn attribute' क्या होता है?",
    "options_en": ["__attribute__((noreturn)) function does not return", "Standard C", "C++ only", "Always returns"],
    "options_hi": ["__attribute__((noreturn)) function return नहीं करती", "standard C", "केवल C++", "हमेशा return करती है"],
    "answer_en": "__attribute__((noreturn)) function does not return",
    "answer_hi": "__attribute__((noreturn)) function return नहीं करती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'container_of macro'?",
    "question_hi": "'container_of macro' क्या होता है?",
    "options_en": ["Linux kernel macro to get container from member pointer", "Standard C", "C++ only", "Not used"],
    "options_hi": ["Linux kernel macro जो member pointer से container प्राप्त करता है", "standard C", "केवल C++", "उपयोग नहीं"],
    "answer_en": "Linux kernel macro to get container from member pointer",
    "answer_hi": "Linux kernel macro जो member pointer से container प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'X-Macro technique'?",
    "question_hi": "'X-Macro technique' क्या होती है?",
    "options_en": ["Macro that defines list, expanded multiple ways", "Single macro", "Function", "Template"],
    "options_hi": ["वह macro जो list define करता है, multiple ways में expand होता है", "single macro", "function", "template"],
    "answer_en": "Macro that defines list, expanded multiple ways",
    "answer_hi": "वह macro जो list define करता है, multiple ways में expand होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'binary constant extension'?",
    "question_hi": "'binary constant extension' क्या होती है?",
    "options_en": ["GCC extension: 0b1010 for binary literals", "Standard C", "Hex only", "Octal only"],
    "options_hi": ["GCC extension: binary literals के लिए 0b1010", "standard C", "केवल hex", "केवल octal"],
    "answer_en": "GCC extension: 0b1010 for binary literals",
    "answer_hi": "GCC extension: binary literals के लिए 0b1010",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'statement expression' extension?",
    "question_hi": "'statement expression' extension क्या होती है?",
    "options_en": ["GCC: ({ statement; expression; }) returns value", "Standard C", "C++ only", "Not valid"],
    "options_hi": ["GCC: ({ statement; expression; }) value return करता है", "standard C", "केवल C++", "valid नहीं"],
    "answer_en": "GCC: ({ statement; expression; }) returns value",
    "answer_hi": "GCC: ({ statement; expression; }) value return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'typeof operator' extension?",
    "question_hi": "'typeof operator' extension क्या होती है?",
    "options_en": ["GCC: typeof(x) gets type of expression", "Standard C", "C++ only", "Not available"],
    "options_hi": ["GCC: typeof(x) expression का type प्राप्त करता है", "standard C", "केवल C++", "उपलब्ध नहीं"],
    "answer_en": "GCC: typeof(x) gets type of expression",
    "answer_hi": "GCC: typeof(x) expression का type प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'attributes' in GCC?",
    "question_hi": "GCC में 'attributes' क्या होते हैं?",
    "options_en": ["__attribute__((packed, aligned, etc.))", "Standard C", "C++ only", "No attributes"],
    "options_hi": ["__attribute__((packed, aligned, आदि))", "standard C", "केवल C++", "कोई attributes नहीं"],
    "answer_en": "__attribute__((packed, aligned, etc.))",
    "answer_hi": "__attribute__((packed, aligned, आदि))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'vector extensions'?",
    "question_hi": "'vector extensions' क्या होती हैं?",
    "options_en": ["GCC: vector types for SIMD operations", "Standard C", "Arrays", "Pointers"],
    "options_hi": ["GCC: SIMD operations के लिए vector types", "standard C", "arrays", "pointers"],
    "answer_en": "GCC: vector types for SIMD operations",
    "answer_hi": "GCC: SIMD operations के लिए vector types",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'nested functions' extension?",
    "question_hi": "'nested functions' extension क्या होती है?",
    "options_en": ["GCC: functions inside other functions", "Standard C", "C++ only", "Not allowed"],
    "options_hi": ["GCC: अन्य functions के अंदर functions", "standard C", "केवल C++", "allowed नहीं"],
    "answer_en": "GCC: functions inside other functions",
    "answer_hi": "GCC: अन्य functions के अंदर functions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'case ranges' extension?",
    "question_hi": "'case ranges' extension क्या होती है?",
    "options_en": ["GCC: case 1 ... 5: for range of values", "Standard C", "C++ only", "Not valid"],
    "options_hi": ["GCC: values की range के लिए case 1 ... 5:", "standard C", "केवल C++", "valid नहीं"],
    "answer_en": "GCC: case 1 ... 5: for range of values",
    "answer_hi": "GCC: values की range के लिए case 1 ... 5:",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'typeof in switch'?",
    "question_hi": "'typeof in switch' क्या होता है?",
    "options_en": ["Switch on type using GCC extensions", "Standard C", "C++ only", "Not possible"],
    "options_hi": ["GCC extensions का उपयोग करके type पर switch", "standard C", "केवल C++", "possible नहीं"],
    "answer_en": "Switch on type using GCC extensions",
    "answer_hi": "GCC extensions का उपयोग करके type पर switch",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'builtin functions'?",
    "question_hi": "'builtin functions' क्या होती हैं?",
    "options_en": ["GCC: __builtin_popcount, __builtin_expect, etc.", "Standard C", "Library functions", "User functions"],
    "options_hi": ["GCC: __builtin_popcount, __builtin_expect, आदि", "standard C", "library functions", "user functions"],
    "answer_en": "GCC: __builtin_popcount, __builtin_expect, etc.",
    "answer_hi": "GCC: __builtin_popcount, __builtin_expect, आदि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'linker sections attribute'?",
    "question_hi": "'linker sections attribute' क्या होता है?",
    "options_en": ["__attribute__((section(\".mysection\")))", "Standard C", "C++ only", "No such attribute"],
    "options_hi": ["__attribute__((section(\".mysection\")))", "standard C", "केवल C++", "ऐसा कोई attribute नहीं"],
    "answer_en": "__attribute__((section(\".mysection\")))",
    "answer_hi": "__attribute__((section(\".mysection\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'cleanup attribute'?",
    "question_hi": "'cleanup attribute' क्या होता है?",
    "options_en": ["__attribute__((cleanup(func))) calls func when variable goes out of scope", "Standard C", "C++ only", "No cleanup"],
    "options_hi": ["__attribute__((cleanup(func))) variable के scope से बाहर जाते समय func call करता है", "standard C", "केवल C++", "कोई cleanup नहीं"],
    "answer_en": "__attribute__((cleanup(func))) calls func when variable goes out of scope",
    "answer_hi": "__attribute__((cleanup(func))) variable के scope से बाहर जाते समय func call करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'malloc attribute'?",
    "question_hi": "'malloc attribute' क्या होता है?",
    "options_en": ["__attribute__((malloc)) indicates function returns unaliased pointer", "Standard C", "C++ only", "No such attribute"],
    "options_hi": ["__attribute__((malloc)) indicate करता है कि function unaliased pointer return करता है", "standard C", "केवल C++", "ऐसा कोई attribute नहीं"],
    "answer_en": "__attribute__((malloc)) indicates function returns unaliased pointer",
    "answer_hi": "__attribute__((malloc)) indicate करता है कि function unaliased pointer return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'format attribute'?",
    "question_hi": "'format attribute' क्या होता है?",
    "options_en": ["__attribute__((format(printf, m, n))) for format string checking", "Standard C", "C++ only", "No checking"],
    "options_hi": ["format string checking के लिए __attribute__((format(printf, m, n)))", "standard C", "केवल C++", "कोई checking नहीं"],
    "answer_en": "__attribute__((format(printf, m, n))) for format string checking",
    "answer_hi": "format string checking के लिए __attribute__((format(printf, m, n)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'nonnull attribute'?",
    "question_hi": "'nonnull attribute' क्या होता है?",
    "options_en": ["__attribute__((nonnull)) indicates parameters cannot be NULL", "Standard C", "C++ only", "No such attribute"],
    "options_hi": ["__attribute__((nonnull)) indicate करता है कि parameters NULL नहीं हो सकते", "standard C", "केवल C++", "ऐसा कोई attribute नहीं"],
    "answer_en": "__attribute__((nonnull)) indicates parameters cannot be NULL",
    "answer_hi": "__attribute__((nonnull)) indicate करता है कि parameters NULL नहीं हो सकते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'warn_unused_result attribute'?",
    "question_hi": "'warn_unused_result attribute' क्या होता है?",
    "options_en": ["__attribute__((warn_unused_result)) warns if return value ignored", "Standard C", "C++ only", "No warning"],
    "options_hi": ["__attribute__((warn_unused_result)) warn करता है यदि return value ignored है", "standard C", "केवल C++", "कोई warning नहीं"],
    "answer_en": "__attribute__((warn_unused_result)) warns if return value ignored",
    "answer_hi": "__attribute__((warn_unused_result)) warn करता है यदि return value ignored है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'hot/cold attribute'?",
    "question_hi": "'hot/cold attribute' क्या होता है?",
    "options_en": ["__attribute__((hot)) for frequently executed code, cold for rare", "Standard C", "C++ only", "No optimization"],
    "options_hi": ["frequently executed code के लिए __attribute__((hot)), rare के लिए cold", "standard C", "केवल C++", "कोई optimization नहीं"],
    "answer_en": "__attribute__((hot)) for frequently executed code, cold for rare",
    "answer_hi": "frequently executed code के लिए __attribute__((hot)), rare के लिए cold",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'alias attribute'?",
    "question_hi": "'alias attribute' क्या होता है?",
    "options_en": ["__attribute__((alias(\"target\"))) creates symbol alias", "Standard C", "C++ only", "No aliasing"],
    "options_hi": ["__attribute__((alias(\"target\"))) symbol alias create करता है", "standard C", "केवल C++", "कोई aliasing नहीं"],
    "answer_en": "__attribute__((alias(\"target\"))) creates symbol alias",
    "answer_hi": "__attribute__((alias(\"target\"))) symbol alias create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'weak attribute'?",
    "question_hi": "'weak attribute' क्या होता है?",
    "options_en": ["__attribute__((weak)) creates weak symbol", "Standard C", "C++ only", "Strong symbol"],
    "options_hi": ["__attribute__((weak)) weak symbol create करता है", "standard C", "केवल C++", "strong symbol"],
    "answer_en": "__attribute__((weak)) creates weak symbol",
    "answer_hi": "__attribute__((weak)) weak symbol create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'constructor/destructor attribute'?",
    "question_hi": "'constructor/destructor attribute' क्या होता है?",
    "options_en": ["__attribute__((constructor)) called before main, destructor after", "Standard C", "C++ only", "No such"],
    "options_hi": ["__attribute__((constructor)) main से पहले call होता है, destructor बाद में", "standard C", "केवल C++", "ऐसा कोई नहीं"],
    "answer_en": "__attribute__((constructor)) called before main, destructor after",
    "answer_hi": "__attribute__((constructor)) main से पहले call होता है, destructor बाद में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'visibility attribute'?",
    "question_hi": "'visibility attribute' क्या होता है?",
    "options_en": ["__attribute__((visibility(\"default/hidden\"))) controls symbol visibility", "Standard C", "C++ only", "Always visible"],
    "options_hi": ["__attribute__((visibility(\"default/hidden\"))) symbol visibility control करता है", "standard C", "केवल C++", "हमेशा visible"],
    "answer_en": "__attribute__((visibility(\"default/hidden\"))) controls symbol visibility",
    "answer_hi": "__attribute__((visibility(\"default/hidden\"))) symbol visibility control करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'target attribute'?",
    "question_hi": "'target attribute' क्या होता है?",
    "options_en": ["__attribute__((target(\"arch=...\"))) for architecture-specific code", "Standard C", "C++ only", "No target"],
    "options_hi": ["architecture-specific code के लिए __attribute__((target(\"arch=...\")))", "standard C", "केवल C++", "कोई target नहीं"],
    "answer_en": "__attribute__((target(\"arch=...\"))) for architecture-specific code",
    "answer_hi": "architecture-specific code के लिए __attribute__((target(\"arch=...\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'optimize attribute'?",
    "question_hi": "'optimize attribute' क्या होता है?",
    "options_en": ["__attribute__((optimize(\"O3\"))) sets optimization level for function", "Standard C", "C++ only", "Global only"],
    "options_hi": ["function के लिए optimization level set करने के लिए __attribute__((optimize(\"O3\")))", "standard C", "केवल C++", "केवल global"],
    "answer_en": "__attribute__((optimize(\"O3\"))) sets optimization level for function",
    "answer_hi": "function के लिए optimization level set करने के लिए __attribute__((optimize(\"O3\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'flatten attribute'?",
    "question_hi": "'flatten attribute' क्या होता है?",
    "options_en": ["__attribute__((flatten)) inlines all calls inside function", "Standard C", "C++ only", "No inlining"],
    "options_hi": ["__attribute__((flatten)) function के अंदर सभी calls inline करता है", "standard C", "केवल C++", "कोई inlining नहीं"],
    "answer_en": "__attribute__((flatten)) inlines all calls inside function",
    "answer_hi": "__attribute__((flatten)) function के अंदर सभी calls inline करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'noinline attribute'?",
    "question_hi": "'noinline attribute' क्या होता है?",
    "options_en": ["__attribute__((noinline)) prevents function inlining", "Standard C", "C++ only", "Always inline"],
    "options_hi": ["__attribute__((noinline)) function inlining prevent करता है", "standard C", "केवल C++", "हमेशा inline"],
    "answer_en": "__attribute__((noinline)) prevents function inlining",
    "answer_hi": "__attribute__((noinline)) function inlining prevent करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'always_inline attribute'?",
    "question_hi": "'always_inline attribute' क्या होता है?",
    "options_en": ["__attribute__((always_inline)) forces inlining", "Standard C", "C++ only", "No inlining"],
    "options_hi": ["__attribute__((always_inline)) inlining force करता है", "standard C", "केवल C++", "कोई inlining नहीं"],
    "answer_en": "__attribute__((always_inline)) forces inlining",
    "answer_hi": "__attribute__((always_inline)) inlining force करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'pure attribute'?",
    "question_hi": "'pure attribute' क्या होता है?",
    "options_en": ["__attribute__((pure)) function has no side effects", "Standard C", "C++ only", "Has side effects"],
    "options_hi": ["__attribute__((pure)) function का कोई side effects नहीं है", "standard C", "केवल C++", "side effects हैं"],
    "answer_en": "__attribute__((pure)) function has no side effects",
    "answer_hi": "__attribute__((pure)) function का कोई side effects नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'const attribute'?",
    "question_hi": "'const attribute' क्या होता है?",
    "options_en": ["__attribute__((const)) function depends only on parameters", "Standard C", "C++ only", "Depends on globals"],
    "options_hi": ["__attribute__((const)) function केवल parameters पर depend करती है", "standard C", "केवल C++", "globals पर depend करती है"],
    "answer_en": "__attribute__((const)) function depends only on parameters",
    "answer_hi": "__attribute__((const)) function केवल parameters पर depend करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'noreturn attribute'?",
    "question_hi": "'noreturn attribute' क्या होता है?",
    "options_en": ["__attribute__((noreturn)) function does not return", "Standard C", "C++ only", "Always returns"],
    "options_hi": ["__attribute__((noreturn)) function return नहीं करती", "standard C", "केवल C++", "हमेशा return करती है"],
    "answer_en": "__attribute__((noreturn)) function does not return",
    "answer_hi": "__attribute__((noreturn)) function return नहीं करती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'returns_twice attribute'?",
    "question_hi": "'returns_twice attribute' क्या होता है?",
    "options_en": ["__attribute__((returns_twice)) for functions like setjmp", "Standard C", "C++ only", "No such"],
    "options_hi": ["setjmp जैसे functions के लिए __attribute__((returns_twice))", "standard C", "केवल C++", "ऐसा कोई नहीं"],
    "answer_en": "__attribute__((returns_twice)) for functions like setjmp",
    "answer_hi": "setjmp जैसे functions के लिए __attribute__((returns_twice))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'sentinel attribute'?",
    "question_hi": "'sentinel attribute' क्या होता है?",
    "options_en": ["__attribute__((sentinel)) ensures NULL terminated varargs", "Standard C", "C++ only", "No checking"],
    "options_hi": ["__attribute__((sentinel)) NULL terminated varargs ensure करता है", "standard C", "केवल C++", "कोई checking नहीं"],
    "answer_en": "__attribute__((sentinel)) ensures NULL terminated varargs",
    "answer_hi": "__attribute__((sentinel)) NULL terminated varargs ensure करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'deprecated attribute'?",
    "question_hi": "'deprecated attribute' क्या होता है?",
    "options_en": ["__attribute__((deprecated)) marks deprecated features", "Standard C", "C++ only", "No deprecation"],
    "options_hi": ["__attribute__((deprecated)) deprecated features mark करता है", "standard C", "केवल C++", "कोई deprecation नहीं"],
    "answer_en": "__attribute__((deprecated)) marks deprecated features",
    "answer_hi": "__attribute__((deprecated)) deprecated features mark करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'unused attribute'?",
    "question_hi": "'unused attribute' क्या होता है?",
    "options_en": ["__attribute__((unused)) suppresses unused variable warnings", "Standard C", "C++ only", "No suppression"],
    "options_hi": ["__attribute__((unused)) unused variable warnings suppress करता है", "standard C", "केवल C++", "कोई suppression नहीं"],
    "answer_en": "__attribute__((unused)) suppresses unused variable warnings",
    "answer_hi": "__attribute__((unused)) unused variable warnings suppress करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'used attribute'?",
    "question_hi": "'used attribute' क्या होता है?",
    "options_en": ["__attribute__((used)) keeps symbol even if unused", "Standard C", "C++ only", "Removed if unused"],
    "options_hi": ["__attribute__((used)) symbol को keep करता है भले ही unused हो", "standard C", "केवल C++", "unused होने पर removed"],
    "answer_en": "__attribute__((used)) keeps symbol even if unused",
    "answer_hi": "__attribute__((used)) symbol को keep करता है भले ही unused हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'aligned attribute'?",
    "question_hi": "'aligned attribute' क्या होता है?",
    "options_en": ["__attribute__((aligned(16))) sets alignment", "Standard C", "C++ only", "No alignment"],
    "options_hi": ["__attribute__((aligned(16))) alignment set करता है", "standard C", "केवल C++", "कोई alignment नहीं"],
    "answer_en": "__attribute__((aligned(16))) sets alignment",
    "answer_hi": "__attribute__((aligned(16))) alignment set करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'packed attribute'?",
    "question_hi": "'packed attribute' क्या होता है?",
    "options_en": ["__attribute__((packed)) removes padding from struct", "Standard C", "C++ only", "Adds padding"],
    "options_hi": ["__attribute__((packed)) struct से padding remove करता है", "standard C", "केवल C++", "padding add करता है"],
    "answer_en": "__attribute__((packed)) removes padding from struct",
    "answer_hi": "__attribute__((packed)) struct से padding remove करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'transparent_union attribute'?",
    "question_hi": "'transparent_union attribute' क्या होता है?",
    "options_en": ["__attribute__((transparent_union)) for union parameter passing", "Standard C", "C++ only", "No such"],
    "options_hi": ["union parameter passing के लिए __attribute__((transparent_union))", "standard C", "केवल C++", "ऐसा कोई नहीं"],
    "answer_en": "__attribute__((transparent_union)) for union parameter passing",
    "answer_hi": "union parameter passing के लिए __attribute__((transparent_union))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'mode attribute'?",
    "question_hi": "'mode attribute' क्या होता है?",
    "options_en": ["__attribute__((mode(QI/HI/SI/DI))) sets integer mode", "Standard C", "C++ only", "No mode"],
    "options_hi": ["integer mode set करने के लिए __attribute__((mode(QI/HI/SI/DI)))", "standard C", "केवल C++", "कोई mode नहीं"],
    "answer_en": "__attribute__((mode(QI/HI/SI/DI))) sets integer mode",
    "answer_hi": "integer mode set करने के लिए __attribute__((mode(QI/HI/SI/DI)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'vector_size attribute'?",
    "question_hi": "'vector_size attribute' क्या होता है?",
    "options_en": ["__attribute__((vector_size(16))) creates vector type", "Standard C", "C++ only", "No vectors"],
    "options_hi": ["vector type create करने के लिए __attribute__((vector_size(16)))", "standard C", "केवल C++", "कोई vectors नहीं"],
    "answer_en": "__attribute__((vector_size(16))) creates vector type",
    "answer_hi": "vector type create करने के लिए __attribute__((vector_size(16)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'no_sanitize_address attribute'?",
    "question_hi": "'no_sanitize_address attribute' क्या होता है?",
    "options_en": ["__attribute__((no_sanitize_address)) disables address sanitizer", "Standard C", "C++ only", "No sanitizer"],
    "options_hi": ["address sanitizer disable करने के लिए __attribute__((no_sanitize_address))", "standard C", "केवल C++", "कोई sanitizer नहीं"],
    "answer_en": "__attribute__((no_sanitize_address)) disables address sanitizer",
    "answer_hi": "address sanitizer disable करने के लिए __attribute__((no_sanitize_address))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'no_sanitize_undefined attribute'?",
    "question_hi": "'no_sanitize_undefined attribute' क्या होता है?",
    "options_en": ["__attribute__((no_sanitize_undefined)) disables undefined behavior sanitizer", "Standard C", "C++ only", "No sanitizer"],
    "options_hi": ["undefined behavior sanitizer disable करने के लिए __attribute__((no_sanitize_undefined))", "standard C", "केवल C++", "कोई sanitizer नहीं"],
    "answer_en": "__attribute__((no_sanitize_undefined)) disables undefined behavior sanitizer",
    "answer_hi": "undefined behavior sanitizer disable करने के लिए __attribute__((no_sanitize_undefined))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'assume_aligned attribute'?",
    "question_hi": "'assume_aligned attribute' क्या होता है?",
    "options_en": ["__attribute__((assume_aligned(alignment))) hints pointer alignment", "Standard C", "C++ only", "No hints"],
    "options_hi": ["pointer alignment hint करने के लिए __attribute__((assume_aligned(alignment)))", "standard C", "केवल C++", "कोई hints नहीं"],
    "answer_en": "__attribute__((assume_aligned(alignment))) hints pointer alignment",
    "answer_hi": "pointer alignment hint करने के लिए __attribute__((assume_aligned(alignment)))",
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