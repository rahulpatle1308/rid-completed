const questions = [
  {
    "num": 1,
    "question_en": "What is 'pointer subtraction' result type?",
    "question_hi": "'pointer subtraction' का result type क्या होता है?",
    "options_en": ["ptrdiff_t", "int", "size_t", "long"],
    "options_hi": ["ptrdiff_t", "int", "size_t", "long"],
    "answer_en": "ptrdiff_t",
    "answer_hi": "ptrdiff_t",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'restrict qualifier' optimization example?",
    "question_hi": "'restrict qualifier' optimization का example क्या है?",
    "options_en": ["void copy(int *restrict dst, const int *restrict src, size_t n)", "No optimization", "Regular pointers", "All pointers"],
    "options_hi": ["void copy(int *restrict dst, const int *restrict src, size_t n)", "कोई optimization नहीं", "regular pointers", "सभी pointers"],
    "answer_en": "void copy(int *restrict dst, const int *restrict src, size_t n)",
    "answer_hi": "void copy(int *restrict dst, const int *restrict src, size_t n)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'max_align_t' in C11?",
    "question_hi": "C11 में 'max_align_t' क्या होता है?",
    "options_en": ["Type with maximal alignment requirement", "Maximum size type", "Alignment function", "Not in C11"],
    "options_hi": ["maximal alignment requirement वाला type", "maximum size type", "alignment function", "C11 में नहीं"],
    "answer_en": "Type with maximal alignment requirement",
    "answer_hi": "maximal alignment requirement वाला type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'realloc with NULL pointer' behavior?",
    "question_hi": "'NULL pointer के साथ realloc' का behavior क्या होता है?",
    "options_en": ["Acts like malloc", "Returns NULL", "Undefined", "Error"],
    "options_hi": ["malloc की तरह काम करता है", "NULL return करता है", "undefined", "error"],
    "answer_en": "Acts like malloc",
    "answer_hi": "malloc की तरह काम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'ffs() function' purpose?",
    "question_hi": "'ffs() function' का purpose क्या होता है?",
    "options_en": ["Find first set bit (returns 1-based index)", "Find file size", "Fast string search", "Float to string"],
    "options_hi": ["पहला set bit ढूंढना (1-based index return करता है)", "file size ढूंढना", "fast string search", "float से string"],
    "answer_en": "Find first set bit (returns 1-based index)",
    "answer_hi": "पहला set bit ढूंढना (1-based index return करता है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'clz() function' in GCC?",
    "question_hi": "GCC में 'clz() function' क्या होता है?",
    "options_en": ["Count leading zeros", "Clear zeros", "Count lines", "Clock size"],
    "options_hi": ["leading zeros count करना", "zeros clear करना", "lines count करना", "clock size"],
    "answer_en": "Count leading zeros",
    "answer_hi": "leading zeros count करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'builtin_expect()' for branch prediction?",
    "question_hi": "branch prediction के लिए 'builtin_expect()' क्या होता है?",
    "options_en": ["__builtin_expect(expr, value) hints likelihood", "No hint", "Runtime check", "Compile error"],
    "options_hi": ["__builtin_expect(expr, value) likelihood hint करता है", "कोई hint नहीं", "runtime check", "compile error"],
    "answer_en": "__builtin_expect(expr, value) hints likelihood",
    "answer_hi": "__builtin_expect(expr, value) likelihood hint करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'non-temporal memory access'?",
    "question_hi": "'non-temporal memory access' क्या होता है?",
    "options_en": ["Access without caching (e.g., streaming stores)", "Cached access", "Slow access", "Invalid access"],
    "options_hi": ["बिना caching के access (जैसे streaming stores)", "cached access", "slow access", "invalid access"],
    "answer_en": "Access without caching (e.g., streaming stores)",
    "answer_hi": "बिना caching के access (जैसे streaming stores)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'prefetch intrinsic' usage?",
    "question_hi": "'prefetch intrinsic' का usage क्या होता है?",
    "options_en": ["__builtin_prefetch() for data prefetching", "No prefetch", "Manual prefetch", "Hardware only"],
    "options_hi": ["data prefetching के लिए __builtin_prefetch()", "कोई prefetch नहीं", "manual prefetch", "केवल hardware"],
    "answer_en": "__builtin_prefetch() for data prefetching",
    "answer_hi": "data prefetching के लिए __builtin_prefetch()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'type-generic math' in C99?",
    "question_hi": "C99 में 'type-generic math' क्या होता है?",
    "options_en": ["tgmath.h provides generic macros for math functions", "No generic math", "Only double", "Template math"],
    "options_hi": ["tgmath.h math functions के लिए generic macros provide करता है", "कोई generic math नहीं", "केवल double", "template math"],
    "answer_en": "tgmath.h provides generic macros for math functions",
    "answer_hi": "tgmath.h math functions के लिए generic macros provide करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'fenv.h for floating-point environment'?",
    "question_hi": "floating-point environment के लिए 'fenv.h' क्या होता है?",
    "options_en": ["Controls rounding modes, exceptions", "Only constants", "No control", "Deprecated"],
    "options_hi": ["rounding modes, exceptions control करता है", "केवल constants", "कोई control नहीं", "deprecated"],
    "answer_en": "Controls rounding modes, exceptions",
    "answer_hi": "rounding modes, exceptions control करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'signaling NaN vs quiet NaN'?",
    "question_hi": "'signaling NaN vs quiet NaN' क्या होता है?",
    "options_en": ["sNaN raises exception, qNaN doesn't", "Both same", "No NaN", "Hardware specific"],
    "options_hi": ["sNaN exception raise करता है, qNaN नहीं", "दोनों समान", "कोई NaN नहीं", "hardware specific"],
    "answer_en": "sNaN raises exception, qNaN doesn't",
    "answer_hi": "sNaN exception raise करता है, qNaN नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'float contraction' optimization?",
    "question_hi": "'float contraction' optimization क्या होती है?",
    "options_en": ["fused multiply-add (FMA) operation", "No contraction", "Integer only", "Disabled by default"],
    "options_hi": ["fused multiply-add (FMA) operation", "कोई contraction नहीं", "केवल integer", "default से disabled"],
    "answer_en": "fused multiply-add (FMA) operation",
    "answer_hi": "fused multiply-add (FMA) operation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'pragma STDC FP_CONTRACT'?",
    "question_hi": "'pragma STDC FP_CONTRACT' क्या होता है?",
    "options_en": ["Controls floating-point contraction", "No pragma", "Integer only", "Memory contraction"],
    "options_hi": ["floating-point contraction control करता है", "कोई pragma नहीं", "केवल integer", "memory contraction"],
    "answer_en": "Controls floating-point contraction",
    "answer_hi": "floating-point contraction control करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'complex conjugate' in C99?",
    "question_hi": "C99 में 'complex conjugate' क्या होता है?",
    "options_en": ["conj() function in complex.h", "No conjugate", "Manual calculation", "Only C++"],
    "options_hi": ["complex.h में conj() function", "कोई conjugate नहीं", "manual calculation", "केवल C++"],
    "answer_en": "conj() function in complex.h",
    "answer_hi": "complex.h में conj() function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'imaginary type' in C99?",
    "question_hi": "C99 में 'imaginary type' क्या होता है?",
    "options_en": ["_Imaginary for pure imaginary numbers", "Only complex", "No imaginary", "Deprecated"],
    "options_hi": ["pure imaginary numbers के लिए _Imaginary", "केवल complex", "कोई imaginary नहीं", "deprecated"],
    "answer_en": "_Imaginary for pure imaginary numbers",
    "answer_hi": "pure imaginary numbers के लिए _Imaginary",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'atomic_flag_test_and_set_explicit'?",
    "question_hi": "'atomic_flag_test_and_set_explicit' क्या होता है?",
    "options_en": ["Atomic operation with memory order", "No memory order", "Non-atomic", "Deprecated"],
    "options_hi": ["memory order के साथ atomic operation", "कोई memory order नहीं", "non-atomic", "deprecated"],
    "answer_en": "Atomic operation with memory order",
    "answer_hi": "memory order के साथ atomic operation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'kill_dependency optimization'?",
    "question_hi": "'kill_dependency optimization' क्या होती है?",
    "options_en": ["Breaks dependency chain for compiler optimization", "Creates dependency", "No effect", "Runtime only"],
    "options_hi": ["compiler optimization के लिए dependency chain break करती है", "dependency create करती है", "कोई effect नहीं", "केवल runtime"],
    "answer_en": "Breaks dependency chain for compiler optimization",
    "answer_hi": "compiler optimization के लिए dependency chain break करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'memory_order_consume usage'?",
    "question_hi": "'memory_order_consume usage' क्या होता है?",
    "options_en": ["For data-dependent loads (rarely used)", "Commonly used", "No longer used", "Deprecated"],
    "options_hi": ["data-dependent loads के लिए (rarely used)", "commonly used", "no longer used", "deprecated"],
    "answer_en": "For data-dependent loads (rarely used)",
    "answer_hi": "data-dependent loads के लिए (rarely used)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'threads.h in C11'?",
    "question_hi": "C11 में 'threads.h' क्या होता है?",
    "options_en": ["Thread support library (optional)", "Required", "No threads", "Deprecated"],
    "options_hi": ["thread support library (optional)", "required", "कोई threads नहीं", "deprecated"],
    "answer_en": "Thread support library (optional)",
    "answer_hi": "thread support library (optional)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'call_once() in C11'?",
    "question_hi": "C11 में 'call_once()' क्या होता है?",
    "options_en": ["Ensures function called exactly once", "Multiple calls", "No guarantee", "Deprecated"],
    "options_hi": ["function को exactly once call करने की guarantee देता है", "multiple calls", "कोई guarantee नहीं", "deprecated"],
    "answer_en": "Ensures function called exactly once",
    "answer_hi": "function को exactly once call करने की guarantee देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'mtx_t mutex type'?",
    "question_hi": "'mtx_t mutex type' क्या होता है?",
    "options_en": ["C11 mutex type from threads.h", "POSIX mutex", "Windows mutex", "No mutex"],
    "options_hi": ["threads.h से C11 mutex type", "POSIX mutex", "Windows mutex", "कोई mutex नहीं"],
    "answer_en": "C11 mutex type from threads.h",
    "answer_hi": "threads.h से C11 mutex type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'cnd_t condition variable'?",
    "question_hi": "'cnd_t condition variable' क्या होता है?",
    "options_en": ["C11 condition variable type", "POSIX cond", "Windows event", "No condition"],
    "options_hi": ["C11 condition variable type", "POSIX cond", "Windows event", "कोई condition नहीं"],
    "answer_en": "C11 condition variable type",
    "answer_hi": "C11 condition variable type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'tss_t thread-specific storage'?",
    "question_hi": "'tss_t thread-specific storage' क्या होता है?",
    "options_en": ["C11 thread-local storage key", "POSIX TLS", "Windows TLS", "No TLS"],
    "options_hi": ["C11 thread-local storage key", "POSIX TLS", "Windows TLS", "कोई TLS नहीं"],
    "answer_en": "C11 thread-local storage key",
    "answer_hi": "C11 thread-local storage key",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'thrd_create return values'?",
    "question_hi": "'thrd_create return values' क्या होते हैं?",
    "options_en": ["thrd_success, thrd_nomem, thrd_error", "Only success", "Only error", "No return"],
    "options_hi": ["thrd_success, thrd_nomem, thrd_error", "केवल success", "केवल error", "कोई return नहीं"],
    "answer_en": "thrd_success, thrd_nomem, thrd_error",
    "answer_hi": "thrd_success, thrd_nomem, thrd_error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'timespec_get() in C11'?",
    "question_hi": "C11 में 'timespec_get()' क्या होता है?",
    "options_en": ["High-resolution time", "Low-resolution", "Deprecated", "No time"],
    "options_hi": ["high-resolution time", "low-resolution", "deprecated", "कोई time नहीं"],
    "answer_en": "High-resolution time",
    "answer_hi": "high-resolution time",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'aligned_alloc alignment requirement'?",
    "question_hi": "'aligned_alloc alignment requirement' क्या होती है?",
    "options_en": ["Alignment must be power of two", "Any alignment", "Only 16-byte", "Implementation defined"],
    "options_hi": ["alignment power of two होना चाहिए", "कोई भी alignment", "केवल 16-byte", "implementation defined"],
    "answer_en": "Alignment must be power of two",
    "answer_hi": "alignment power of two होना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'max_align_t usage'?",
    "question_hi": "'max_align_t usage' क्या होता है?",
    "options_en": ["For portable maximal alignment", "No usage", "Only malloc", "Deprecated"],
    "options_hi": ["portable maximal alignment के लिए", "कोई usage नहीं", "केवल malloc", "deprecated"],
    "answer_en": "For portable maximal alignment",
    "answer_hi": "portable maximal alignment के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'static_assert in array size'?",
    "question_hi": "'array size में static_assert' क्या होता है?",
    "options_en": ["Static_assert(sizeof(arr) == N, \"size mismatch\")", "Runtime assert", "No assert", "Invalid"],
    "options_hi": ["Static_assert(sizeof(arr) == N, \"size mismatch\")", "runtime assert", "कोई assert नहीं", "invalid"],
    "answer_en": "Static_assert(sizeof(arr) == N, \"size mismatch\")",
    "answer_hi": "Static_assert(sizeof(arr) == N, \"size mismatch\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'noreturn function attribute'?",
    "question_hi": "'noreturn function attribute' क्या होता है?",
    "options_en": ["[[noreturn]] in C23, __attribute__((noreturn)) in GCC", "Only GCC", "Only C23", "No noreturn"],
    "options_hi": ["C23 में [[noreturn]], GCC में __attribute__((noreturn))", "केवल GCC", "केवल C23", "कोई noreturn नहीं"],
    "answer_en": "[[noreturn]] in C23, __attribute__((noreturn)) in GCC",
    "answer_hi": "C23 में [[noreturn]], GCC में __attribute__((noreturn))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'maybe_unused attribute'?",
    "question_hi": "'maybe_unused attribute' क्या होता है?",
    "options_en": ["[[maybe_unused]] in C23", "Only GCC", "No such attribute", "Deprecated"],
    "options_hi": ["C23 में [[maybe_unused]]", "केवल GCC", "ऐसा कोई attribute नहीं", "deprecated"],
    "answer_en": "[[maybe_unused]] in C23",
    "answer_hi": "C23 में [[maybe_unused]]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'nodiscard attribute'?",
    "question_hi": "'nodiscard attribute' क्या होता है?",
    "options_en": ["[[nodiscard]] in C23 warns if return value ignored", "No warning", "Only C++", "Deprecated"],
    "options_hi": ["C23 में [[nodiscard]] warn करता है यदि return value ignored है", "कोई warning नहीं", "केवल C++", "deprecated"],
    "answer_en": "[[nodiscard]] in C23 warns if return value ignored",
    "answer_hi": "C23 में [[nodiscard]] warn करता है यदि return value ignored है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'fallthrough attribute'?",
    "question_hi": "'fallthrough attribute' क्या होता है?",
    "options_en": ["[[fallthrough]] in C23 for intentional fallthrough", "No fallthrough", "Only GCC", "Deprecated"],
    "options_hi": ["C23 में intentional fallthrough के लिए [[fallthrough]]", "कोई fallthrough नहीं", "केवल GCC", "deprecated"],
    "answer_en": "[[fallthrough]] in C23 for intentional fallthrough",
    "answer_hi": "C23 में intentional fallthrough के लिए [[fallthrough]]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'deprecated attribute in C23'?",
    "question_hi": "C23 में 'deprecated attribute' क्या होता है?",
    "options_en": ["[[deprecated]] standard attribute", "Only GCC", "No standard", "Removed"],
    "options_hi": ["[[deprecated]] standard attribute", "केवल GCC", "कोई standard नहीं", "removed"],
    "answer_en": "[[deprecated]] standard attribute",
    "answer_hi": "[[deprecated]] standard attribute",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'reproducible builds with __DATE__'?",
    "question_hi": "'__DATE__ के साथ reproducible builds' क्या होते हैं?",
    "options_en": ["-Wdate-time warns about __DATE__, __TIME__", "No warning", "Always reproducible", "No issue"],
    "options_hi": ["-Wdate-time __DATE__, __TIME__ के बारे में warn करता है", "कोई warning नहीं", "हमेशा reproducible", "कोई issue नहीं"],
    "answer_en": "-Wdate-time warns about __DATE__, __TIME__",
    "answer_hi": "-Wdate-time __DATE__, __TIME__ के बारे में warn करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'nullability attributes'?",
    "question_hi": "'nullability attributes' क्या होते हैं?",
    "options_en": ["_Nullable, _Nonnull in Clang", "Only Clang", "No nullability", "Standard C"],
    "options_hi": ["Clang में _Nullable, _Nonnull", "केवल Clang", "कोई nullability नहीं", "standard C"],
    "answer_en": "_Nullable, _Nonnull in Clang",
    "answer_hi": "Clang में _Nullable, _Nonnull",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'assume attribute in Clang'?",
    "question_hi": "Clang में 'assume attribute' क्या होता है?",
    "options_en": ["__attribute__((assume(expr))) for assumptions", "No assume", "Only GCC", "Deprecated"],
    "options_hi": ["assumptions के लिए __attribute__((assume(expr)))", "कोई assume नहीं", "केवल GCC", "deprecated"],
    "answer_en": "__attribute__((assume(expr))) for assumptions",
    "answer_hi": "assumptions के लिए __attribute__((assume(expr)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'diagnose_if attribute'?",
    "question_hi": "'diagnose_if attribute' क्या होता है?",
    "options_en": ["Clang: __attribute__((diagnose_if(cond, msg, type)))", "Only GCC", "No diagnose", "Deprecated"],
    "options_hi": ["Clang: __attribute__((diagnose_if(cond, msg, type)))", "केवल GCC", "कोई diagnose नहीं", "deprecated"],
    "answer_en": "Clang: __attribute__((diagnose_if(cond, msg, type)))",
    "answer_hi": "Clang: __attribute__((diagnose_if(cond, msg, type)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'enable_if attribute'?",
    "question_hi": "'enable_if attribute' क्या होता है?",
    "options_en": ["GCC: __attribute__((enable_if(cond, msg)))", "Only Clang", "No enable_if", "Deprecated"],
    "options_hi": ["GCC: __attribute__((enable_if(cond, msg)))", "केवल Clang", "कोई enable_if नहीं", "deprecated"],
    "answer_en": "GCC: __attribute__((enable_if(cond, msg)))",
    "answer_hi": "GCC: __attribute__((enable_if(cond, msg)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'transparent_union in System V ABI'?",
    "question_hi": "System V ABI में 'transparent_union' क्या होता है?",
    "options_en": ["Passing union as first member type", "No transparency", "All members", "Deprecated"],
    "options_hi": ["first member type के रूप में union passing", "कोई transparency नहीं", "सभी members", "deprecated"],
    "answer_en": "Passing union as first member type",
    "answer_hi": "first member type के रूप में union passing",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'ms_struct attribute'?",
    "question_hi": "'ms_struct attribute' क्या होता है?",
    "options_en": ["GCC: Microsoft compatible struct layout", "Only Windows", "No ms_struct", "Deprecated"],
    "options_hi": ["GCC: Microsoft compatible struct layout", "केवल Windows", "कोई ms_struct नहीं", "deprecated"],
    "answer_en": "GCC: Microsoft compatible struct layout",
    "answer_hi": "GCC: Microsoft compatible struct layout",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'gcc_struct attribute'?",
    "question_hi": "'gcc_struct attribute' क्या होता है?",
    "options_en": ["Default GCC struct layout", "Microsoft layout", "No gcc_struct", "Deprecated"],
    "options_hi": ["default GCC struct layout", "Microsoft layout", "कोई gcc_struct नहीं", "deprecated"],
    "answer_en": "Default GCC struct layout",
    "answer_hi": "default GCC struct layout",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'scalar_storage_order attribute'?",
    "question_hi": "'scalar_storage_order attribute' क्या होता है?",
    "options_en": ["GCC: __attribute__((scalar_storage_order(\"big-endian\")))", "Only Clang", "No such", "Deprecated"],
    "options_hi": ["GCC: __attribute__((scalar_storage_order(\"big-endian\")))", "केवल Clang", "ऐसा कोई नहीं", "deprecated"],
    "answer_en": "GCC: __attribute__((scalar_storage_order(\"big-endian\")))",
    "answer_hi": "GCC: __attribute__((scalar_storage_order(\"big-endian\")))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'vector_size with alignment'?",
    "question_hi": "'alignment के साथ vector_size' क्या होता है?",
    "options_en": ["typedef int v4si __attribute__((vector_size(16), aligned(16)))", "No alignment", "Only size", "Invalid"],
    "options_hi": ["typedef int v4si __attribute__((vector_size(16), aligned(16)))", "कोई alignment नहीं", "केवल size", "invalid"],
    "answer_en": "typedef int v4si __attribute__((vector_size(16), aligned(16)))",
    "answer_hi": "typedef int v4si __attribute__((vector_size(16), aligned(16)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'vector attribute operations'?",
    "question_hi": "'vector attribute operations' क्या होती हैं?",
    "options_en": ["+, -, *, /, unary -, ~, !", "Only +", "No operations", "Invalid"],
    "options_hi": ["+, -, *, /, unary -, ~, !", "केवल +", "कोई operations नहीं", "invalid"],
    "answer_en": "+, -, *, /, unary -, ~, !",
    "answer_hi": "+, -, *, /, unary -, ~, !",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'vector element access'?",
    "question_hi": "'vector element access' क्या होता है?",
    "options_en": ["Using array subscript v[0]", "No access", "Only through functions", "Invalid"],
    "options_hi": ["array subscript v[0] का उपयोग", "कोई access नहीं", "केवल functions के माध्यम से", "invalid"],
    "answer_en": "Using array subscript v[0]",
    "answer_hi": "array subscript v[0] का उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'vector comparison'?",
    "question_hi": "'vector comparison' क्या होता है?",
    "options_en": ["Produces vector of integers with results", "Single boolean", "No comparison", "Invalid"],
    "options_hi": ["results के साथ integers का vector produce करता है", "single boolean", "कोई comparison नहीं", "invalid"],
    "answer_en": "Produces vector of integers with results",
    "answer_hi": "results के साथ integers का vector produce करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is rename() function?",
    "question_hi": "rename() फ़ंक्शन क्या है?",
    "options_en": ["Renames file", "Renames variable", "Renames function", "Renames directory"],
    "options_hi": ["फ़ाइल का नाम बदलता है", "चर का नाम बदलता है", "फ़ंक्शन का नाम बदलता है", "निर्देशिका का नाम बदलता है"],
    "answer_en": "Renames file",
    "answer_hi": "फ़ाइल का नाम बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'vector bitwise operations'?",
    "question_hi": "'vector bitwise operations' क्या होती हैं?",
    "options_en": ["&, |, ^, ~ supported", "No bitwise", "Only &", "Invalid"],
    "options_hi": ["&, |, ^, ~ supported", "कोई bitwise नहीं", "केवल &", "invalid"],
    "answer_en": "&, |, ^, ~ supported",
    "answer_hi": "&, |, ^, ~ supported",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'vector builtins'?",
    "question_hi": "'vector builtins' क्या होते हैं?",
    "options_en": ["__builtin_shuffle, __builtin_convertvector", "No builtins", "Only shuffle", "Invalid"],
    "options_hi": ["__builtin_shuffle, __builtin_convertvector", "कोई builtins नहीं", "केवल shuffle", "invalid"],
    "answer_en": "__builtin_shuffle, __builtin_convertvector",
    "answer_hi": "__builtin_shuffle, __builtin_convertvector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'saturating arithmetic'?",
    "question_hi": "'saturating arithmetic' क्या होती है?",
    "options_en": ["__builtin_add_overflow, __builtin_sadd_overflow", "No saturation", "Only add", "Invalid"],
    "options_hi": ["__builtin_add_overflow, __builtin_sadd_overflow", "कोई saturation नहीं", "केवल add", "invalid"],
    "answer_en": "__builtin_add_overflow, __builtin_sadd_overflow",
    "answer_hi": "__builtin_add_overflow, __builtin_sadd_overflow",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'builtin_clrsb'?",
    "question_hi": "'builtin_clrsb' क्या होता है?",
    "options_en": ["Count leading redundant sign bits", "No such builtin", "Clear bits", "Invalid"],
    "options_hi": ["leading redundant sign bits count करना", "ऐसा कोई builtin नहीं", "bits clear करना", "invalid"],
    "answer_en": "Count leading redundant sign bits",
    "answer_hi": "leading redundant sign bits count करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'builtin_bswap'?",
    "question_hi": "'builtin_bswap' क्या होता है?",
    "options_en": ["Byte swap (endian conversion)", "No swap", "Bit swap", "Invalid"],
    "options_hi": ["byte swap (endian conversion)", "कोई swap नहीं", "bit swap", "invalid"],
    "answer_en": "Byte swap (endian conversion)",
    "answer_hi": "byte swap (endian conversion)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'builtin_constant_p'?",
    "question_hi": "'builtin_constant_p' क्या होता है?",
    "options_en": ["Checks if value is compile-time constant", "Runtime check", "No check", "Invalid"],
    "options_hi": ["check करता है कि value compile-time constant है या नहीं", "runtime check", "कोई check नहीं", "invalid"],
    "answer_en": "Checks if value is compile-time constant",
    "answer_hi": "check करता है कि value compile-time constant है या नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'builtin_types_compatible_p'?",
    "question_hi": "'builtin_types_compatible_p' क्या होता है?",
    "options_en": ["Checks type compatibility at compile-time", "Runtime check", "No check", "Invalid"],
    "options_hi": ["compile-time पर type compatibility check करता है", "runtime check", "कोई check नहीं", "invalid"],
    "answer_en": "Checks type compatibility at compile-time",
    "answer_hi": "compile-time पर type compatibility check करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'builtin_choose_expr'?",
    "question_hi": "'builtin_choose_expr' क्या होता है?",
    "options_en": ["Compile-time conditional expression", "Runtime if", "No conditional", "Invalid"],
    "options_hi": ["compile-time conditional expression", "runtime if", "कोई conditional नहीं", "invalid"],
    "answer_en": "Compile-time conditional expression",
    "answer_hi": "compile-time conditional expression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'builtin_unreachable'?",
    "question_hi": "'builtin_unreachable' क्या होता है?",
    "options_en": ["Marks code as unreachable for optimizer", "Runtime check", "No effect", "Invalid"],
    "options_hi": ["optimizer के लिए code को unreachable mark करता है", "runtime check", "कोई effect नहीं", "invalid"],
    "answer_en": "Marks code as unreachable for optimizer",
    "answer_hi": "optimizer के लिए code को unreachable mark करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'builtin_trap'?",
    "question_hi": "'builtin_trap' क्या होता है?",
    "options_en": ["Generates trap instruction", "No trap", "Only debug", "Invalid"],
    "options_hi": ["trap instruction generate करता है", "कोई trap नहीं", "केवल debug", "invalid"],
    "answer_en": "Generates trap instruction",
    "answer_hi": "trap instruction generate करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'builtin_debugtrap'?",
    "question_hi": "'builtin_debugtrap' क्या होता है?",
    "options_en": ["Debugger breakpoint (__builtin_debugtrap)", "No debugtrap", "Only GCC", "Invalid"],
    "options_hi": ["debugger breakpoint (__builtin_debugtrap)", "कोई debugtrap नहीं", "केवल GCC", "invalid"],
    "answer_en": "Debugger breakpoint (__builtin_debugtrap)",
    "answer_hi": "debugger breakpoint (__builtin_debugtrap)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'builtin_alloca'?",
    "question_hi": "'builtin_alloca' क्या होता है?",
    "options_en": ["Stack allocation (use with caution)", "Heap allocation", "No allocation", "Invalid"],
    "options_hi": ["stack allocation (use with caution)", "heap allocation", "कोई allocation नहीं", "invalid"],
    "answer_en": "Stack allocation (use with caution)",
    "answer_hi": "stack allocation (use with caution)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'alloca vs VLA'?",
    "question_hi": "'alloca vs VLA' क्या होता है?",
    "options_en": ["alloca is function, VLA is language feature", "Same", "No difference", "Invalid"],
    "options_hi": ["alloca function है, VLA language feature है", "समान", "कोई difference नहीं", "invalid"],
    "answer_en": "alloca is function, VLA is language feature",
    "answer_hi": "alloca function है, VLA language feature है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'alloca in loops' danger?",
    "question_hi": "'loops में alloca' का danger क्या होता है?",
    "options_en": ["Stack overflow risk", "No risk", "Heap fragmentation", "Invalid"],
    "options_hi": ["stack overflow risk", "कोई risk नहीं", "heap fragmentation", "invalid"],
    "answer_en": "Stack overflow risk",
    "answer_hi": "stack overflow risk",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'builtin_frame_address'?",
    "question_hi": "'builtin_frame_address' क्या होता है?",
    "options_en": ["Returns frame address of caller", "No frame", "Only current", "Invalid"],
    "options_hi": ["caller का frame address return करता है", "कोई frame नहीं", "केवल current", "invalid"],
    "answer_en": "Returns frame address of caller",
    "answer_hi": "caller का frame address return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'builtin_return_address'?",
    "question_hi": "'builtin_return_address' क्या होता है?",
    "options_en": ["Returns return address of caller", "No return", "Only current", "Invalid"],
    "options_hi": ["caller का return address return करता है", "कोई return नहीं", "केवल current", "invalid"],
    "answer_en": "Returns return address of caller",
    "answer_hi": "caller का return address return करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'stack protector'?",
    "question_hi": "'stack protector' क्या होता है?",
    "options_en": ["-fstack-protector for buffer overflow protection", "No protection", "Only heap", "Invalid"],
    "options_hi": ["buffer overflow protection के लिए -fstack-protector", "कोई protection नहीं", "केवल heap", "invalid"],
    "answer_en": "-fstack-protector for buffer overflow protection",
    "answer_hi": "buffer overflow protection के लिए -fstack-protector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'stack clash protection'?",
    "question_hi": "'stack clash protection' क्या होता है?",
    "options_en": ["-fstack-clash-protection against stack clash attacks", "No protection", "Only buffer", "Invalid"],
    "options_hi": ["stack clash attacks के खिलाफ -fstack-clash-protection", "कोई protection नहीं", "केवल buffer", "invalid"],
    "answer_en": "-fstack-clash-protection against stack clash attacks",
    "answer_hi": "stack clash attacks के खिलाफ -fstack-clash-protection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'control flow integrity'?",
    "question_hi": "'control flow integrity' क्या होता है?",
    "options_en": ["-fcf-protection for return address protection", "No CFI", "Only stack", "Invalid"],
    "options_hi": ["return address protection के लिए -fcf-protection", "कोई CFI नहीं", "केवल stack", "invalid"],
    "answer_en": "-fcf-protection for return address protection",
    "answer_hi": "return address protection के लिए -fcf-protection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'indirect function calls protection'?",
    "question_hi": "'indirect function calls protection' क्या होता है?",
    "options_en": ["-fcf-protection=full for indirect calls", "No protection", "Only direct", "Invalid"],
    "options_hi": ["indirect calls के लिए -fcf-protection=full", "कोई protection नहीं", "केवल direct", "invalid"],
    "answer_en": "-fcf-protection=full for indirect calls",
    "answer_hi": "indirect calls के लिए -fcf-protection=full",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'shadow stack'?",
    "question_hi": "'shadow stack' क्या होता है?",
    "options_en": ["Hardware shadow stack for return addresses", "No shadow", "Software only", "Invalid"],
    "options_hi": ["return addresses के लिए hardware shadow stack", "कोई shadow नहीं", "केवल software", "invalid"],
    "answer_en": "Hardware shadow stack for return addresses",
    "answer_hi": "return addresses के लिए hardware shadow stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'safe stack'?",
    "question_hi": "'safe stack' क्या होता है?",
    "options_en": ["Separate safe/unsafe stacks", "Single stack", "No safe stack", "Invalid"],
    "options_hi": ["separate safe/unsafe stacks", "single stack", "कोई safe stack नहीं", "invalid"],
    "answer_en": "Separate safe/unsafe stacks",
    "answer_hi": "separate safe/unsafe stacks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'address sanitizer (ASAN)'?",
    "question_hi": "'address sanitizer (ASAN)' क्या होता है?",
    "options_en": ["-fsanitize=address for memory error detection", "No sanitizer", "Only leak", "Invalid"],
    "options_hi": ["memory error detection के लिए -fsanitize=address", "कोई sanitizer नहीं", "केवल leak", "invalid"],
    "answer_en": "-fsanitize=address for memory error detection",
    "answer_hi": "memory error detection के लिए -fsanitize=address",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'undefined behavior sanitizer (UBSAN)'?",
    "question_hi": "'undefined behavior sanitizer (UBSAN)' क्या होता है?",
    "options_en": ["-fsanitize=undefined for UB detection", "No UB detection", "Only address", "Invalid"],
    "options_hi": ["UB detection के लिए -fsanitize=undefined", "कोई UB detection नहीं", "केवल address", "invalid"],
    "answer_en": "-fsanitize=undefined for UB detection",
    "answer_hi": "UB detection के लिए -fsanitize=undefined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'thread sanitizer (TSAN)'?",
    "question_hi": "'thread sanitizer (TSAN)' क्या होता है?",
    "options_en": ["-fsanitize=thread for data race detection", "No thread", "Only memory", "Invalid"],
    "options_hi": ["data race detection के लिए -fsanitize=thread", "कोई thread नहीं", "केवल memory", "invalid"],
    "answer_en": "-fsanitize=thread for data race detection",
    "answer_hi": "data race detection के लिए -fsanitize=thread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'memory sanitizer (MSAN)'?",
    "question_hi": "'memory sanitizer (MSAN)' क्या होता है?",
    "options_en": ["-fsanitize=memory for uninitialized memory", "No memory", "Only address", "Invalid"],
    "options_hi": ["uninitialized memory के लिए -fsanitize=memory", "कोई memory नहीं", "केवल address", "invalid"],
    "answer_en": "-fsanitize=memory for uninitialized memory",
    "answer_hi": "uninitialized memory के लिए -fsanitize=memory",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'leak sanitizer (LSAN)'?",
    "question_hi": "'leak sanitizer (LSAN)' क्या होता है?",
    "options_en": ["-fsanitize=leak for memory leak detection", "No leak", "Only thread", "Invalid"],
    "options_hi": ["memory leak detection के लिए -fsanitize=leak", "कोई leak नहीं", "केवल thread", "invalid"],
    "answer_en": "-fsanitize=leak for memory leak detection",
    "answer_hi": "memory leak detection के लिए -fsanitize=leak",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'sanitizer coverage'?",
    "question_hi": "'sanitizer coverage' क्या होता है?",
    "options_en": ["-fsanitize-coverage for code coverage", "No coverage", "Only sanitize", "Invalid"],
    "options_hi": ["code coverage के लिए -fsanitize-coverage", "कोई coverage नहीं", "केवल sanitize", "invalid"],
    "answer_en": "-fsanitize-coverage for code coverage",
    "answer_hi": "code coverage के लिए -fsanitize-coverage",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'profile-guided optimization (PGO)'?",
    "question_hi": "'profile-guided optimization (PGO)' क्या होता है?",
    "options_en": ["-fprofile-generate, -fprofile-use", "No PGO", "Only static", "Invalid"],
    "options_hi": ["-fprofile-generate, -fprofile-use", "कोई PGO नहीं", "केवल static", "invalid"],
    "answer_en": "-fprofile-generate, -fprofile-use",
    "answer_hi": "-fprofile-generate, -fprofile-use",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'link-time optimization (LTO)'?",
    "question_hi": "'link-time optimization (LTO)' क्या होती है?",
    "options_en": ["-flto for whole-program optimization", "No LTO", "Only compile-time", "Invalid"],
    "options_hi": ["whole-program optimization के लिए -flto", "कोई LTO नहीं", "केवल compile-time", "invalid"],
    "answer_en": "-flto for whole-program optimization",
    "answer_hi": "whole-program optimization के लिए -flto",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'thin LTO'?",
    "question_hi": "'thin LTO' क्या होती है?",
    "options_en": ["-flto=thin for faster link-time optimization", "No thin", "Only fat", "Invalid"],
    "options_hi": ["faster link-time optimization के लिए -flto=thin", "कोई thin नहीं", "केवल fat", "invalid"],
    "answer_en": "-flto=thin for faster link-time optimization",
    "answer_hi": "faster link-time optimization के लिए -flto=thin",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'fat LTO objects'?",
    "question_hi": "'fat LTO objects' क्या होते हैं?",
    "options_en": ["Contain both IR and machine code", "Only IR", "Only machine", "Invalid"],
    "options_hi": ["दोनों IR और machine code contain करते हैं", "केवल IR", "केवल machine", "invalid"],
    "answer_en": "Contain both IR and machine code",
    "answer_hi": "दोनों IR और machine code contain करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'function multiversioning'?",
    "question_hi": "'function multiversioning' क्या होती है?",
    "options_en": ["__attribute__((target_clones(...)))", "No versioning", "Only single", "Invalid"],
    "options_hi": ["__attribute__((target_clones(...)))", "कोई versioning नहीं", "केवल single", "invalid"],
    "answer_en": "__attribute__((target_clones(...)))",
    "answer_hi": "__attribute__((target_clones(...)))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'ifunc (indirect function)'?",
    "question_hi": "'ifunc (indirect function)' क्या होता है?",
    "options_en": ["Resolver function at load time", "No ifunc", "Only compile-time", "Invalid"],
    "options_hi": ["load time पर resolver function", "कोई ifunc नहीं", "केवल compile-time", "invalid"],
    "answer_en": "Resolver function at load time",
    "answer_hi": "load time पर resolver function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'hotpatch attribute'?",
    "question_hi": "'hotpatch attribute' क्या होता है?",
    "options_en": ["Microsoft: __declspec(hotpatch) for hotpatching", "GCC only", "No hotpatch", "Invalid"],
    "options_hi": ["Microsoft: hotpatching के लिए __declspec(hotpatch)", "केवल GCC", "कोई hotpatch नहीं", "invalid"],
    "answer_en": "Microsoft: __declspec(hotpatch) for hotpatching",
    "answer_hi": "Microsoft: hotpatching के लिए __declspec(hotpatch)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'guard(nocf)'?",
    "question_hi": "'guard(nocf)' क्या होता है?",
    "options_en": ["Microsoft: control flow guard suppression", "No guard", "Only GCC", "Invalid"],
    "options_hi": ["Microsoft: control flow guard suppression", "कोई guard नहीं", "केवल GCC", "invalid"],
    "answer_en": "Microsoft: control flow guard suppression",
    "answer_hi": "Microsoft: control flow guard suppression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'strict_gs_check'?",
    "question_hi": "'strict_gs_check' क्या होता है?",
    "options_en": ["Microsoft: strict stack cookie checking", "No check", "Only GCC", "Invalid"],
    "options_hi": ["Microsoft: strict stack cookie checking", "कोई check नहीं", "केवल GCC", "invalid"],
    "answer_en": "Microsoft: strict stack cookie checking",
    "answer_hi": "Microsoft: strict stack cookie checking",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'code_seg'?",
    "question_hi": "'code_seg' क्या होता है?",
    "options_en": ["Microsoft: __declspec(code_seg(\".text\"))", "GCC only", "No code_seg", "Invalid"],
    "options_hi": ["Microsoft: __declspec(code_seg(\".text\"))", "केवल GCC", "कोई code_seg नहीं", "invalid"],
    "answer_en": "Microsoft: __declspec(code_seg(\".text\"))",
    "answer_hi": "Microsoft: __declspec(code_seg(\".text\"))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'allocate'?",
    "question_hi": "'allocate' क्या होता है?",
    "options_en": ["Microsoft: __declspec(allocate(\".data\"))", "GCC only", "No allocate", "Invalid"],
    "options_hi": ["Microsoft: __declspec(allocate(\".data\"))", "केवल GCC", "कोई allocate नहीं", "invalid"],
    "answer_en": "Microsoft: __declspec(allocate(\".data\"))",
    "answer_hi": "Microsoft: __declspec(allocate(\".data\"))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'uuid'?",
    "question_hi": "'uuid' क्या होता है?",
    "options_en": ["Microsoft: __declspec(uuid(\"...\")) for COM", "GCC only", "No uuid", "Invalid"],
    "options_hi": ["Microsoft: COM के लिए __declspec(uuid(\"...\"))", "केवल GCC", "कोई uuid नहीं", "invalid"],
    "answer_en": "Microsoft: __declspec(uuid(\"...\")) for COM",
    "answer_hi": "Microsoft: COM के लिए __declspec(uuid(\"...\"))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'property'?",
    "question_hi": "'property' क्या होता है?",
    "options_en": ["Microsoft: __declspec(property(get=get_func))", "GCC only", "No property", "Invalid"],
    "options_hi": ["Microsoft: __declspec(property(get=get_func))", "केवल GCC", "कोई property नहीं", "invalid"],
    "answer_en": "Microsoft: __declspec(property(get=get_func))",
    "answer_hi": "Microsoft: __declspec(property(get=get_func))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'event_receiver'?",
    "question_hi": "'event_receiver' क्या होता है?",
    "options_en": ["Microsoft: __event_receiver for COM events", "GCC only", "No event", "Invalid"],
    "options_hi": ["Microsoft: COM events के लिए __event_receiver", "केवल GCC", "कोई event नहीं", "invalid"],
    "answer_en": "Microsoft: __event_receiver for COM events",
    "answer_hi": "Microsoft: COM events के लिए __event_receiver",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'event_source'?",
    "question_hi": "'event_source' क्या होता है?",
    "options_en": ["Microsoft: __event_source for COM events", "GCC only", "No source", "Invalid"],
    "options_hi": ["Microsoft: COM events के लिए __event_source", "केवल GCC", "कोई source नहीं", "invalid"],
    "answer_en": "Microsoft: __event_source for COM events",
    "answer_hi": "Microsoft: COM events के लिए __event_source",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'abstract'?",
    "question_hi": "'abstract' क्या होता है?",
    "options_en": ["Microsoft: __abstract for abstract classes", "GCC only", "No abstract", "Invalid"],
    "options_hi": ["Microsoft: abstract classes के लिए __abstract", "केवल GCC", "कोई abstract नहीं", "invalid"],
    "answer_en": "Microsoft: __abstract for abstract classes",
    "answer_hi": "Microsoft: abstract classes के लिए __abstract",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'sealed'?",
    "question_hi": "'sealed' क्या होता है?",
    "options_en": ["Microsoft: __sealed for non-inheritable classes", "GCC only", "No sealed", "Invalid"],
    "options_hi": ["Microsoft: non-inheritable classes के लिए __sealed", "केवल GCC", "कोई sealed नहीं", "invalid"],
    "answer_en": "Microsoft: __sealed for non-inheritable classes",
    "answer_hi": "Microsoft: non-inheritable classes के लिए __sealed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'novtable'?",
    "question_hi": "'novtable' क्या होता है?",
    "options_en": ["Microsoft: __declspec(novtable) for abstract classes", "GCC only", "No novtable", "Invalid"],
    "options_hi": ["Microsoft: abstract classes के लिए __declspec(novtable)", "केवल GCC", "कोई novtable नहीं", "invalid"],
    "answer_en": "Microsoft: __declspec(novtable) for abstract classes",
    "answer_hi": "Microsoft: abstract classes के लिए __declspec(novtable)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'align'?",
    "question_hi": "'align' क्या होता है?",
    "options_en": ["Microsoft: __declspec(align(16))", "GCC only", "No align", "Invalid"],
    "options_hi": ["Microsoft: __declspec(align(16))", "केवल GCC", "कोई align नहीं", "invalid"],
    "answer_en": "Microsoft: __declspec(align(16))",
    "answer_hi": "Microsoft: __declspec(align(16))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'process'?",
    "question_hi": "'process' क्या होता है?",
    "options_en": ["Microsoft: __declspec(process) for process-specific", "GCC only", "No process", "Invalid"],
    "options_hi": ["Microsoft: process-specific के लिए __declspec(process)", "केवल GCC", "कोई process नहीं", "invalid"],
    "answer_en": "Microsoft: __declspec(process) for process-specific",
    "answer_hi": "Microsoft: process-specific के लिए __declspec(process)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'thread'?",
    "question_hi": "'thread' क्या होता है?",
    "options_en": ["Microsoft: __declspec(thread) for thread-local", "GCC only", "No thread", "Invalid"],
    "options_hi": ["Microsoft: thread-local के लिए __declspec(thread)", "केवल GCC", "कोई thread नहीं", "invalid"],
    "answer_en": "Microsoft: __declspec(thread) for thread-local",
    "answer_hi": "Microsoft: thread-local के लिए __declspec(thread)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'naked' in Microsoft?",
    "question_hi": "Microsoft में 'naked' क्या होता है?",
    "options_en": ["__declspec(naked) no prologue/epilogue", "GCC only", "No naked", "Invalid"],
    "options_hi": ["__declspec(naked) कोई prologue/epilogue नहीं", "केवल GCC", "कोई naked नहीं", "invalid"],
    "answer_en": "__declspec(naked) no prologue/epilogue",
    "answer_hi": "__declspec(naked) कोई prologue/epilogue नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'restrict' in Microsoft?",
    "question_hi": "Microsoft में 'restrict' क्या होता है?",
    "options_en": ["__restrict keyword", "No restrict", "Only GCC", "Invalid"],
    "options_hi": ["__restrict keyword", "कोई restrict नहीं", "केवल GCC", "invalid"],
    "answer_en": "__restrict keyword",
    "answer_hi": "__restrict keyword",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'inline' in Microsoft?",
    "question_hi": "Microsoft में 'inline' क्या होता है?",
    "options_en": ["__inline keyword", "No inline", "Only GCC", "Invalid"],
    "options_hi": ["__inline keyword", "कोई inline नहीं", "केवल GCC", "invalid"],
    "answer_en": "__inline keyword",
    "answer_hi": "__inline keyword",
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