const questions = [
  {
    "num": 1,
    "question_en": "What does 'int (*(*foo)(void))[5];' declare?",
    "question_hi": "'int (*(*foo)(void))[5];' क्या declare करता है?",
    "options_en": ["Pointer to function returning pointer to array of 5 int", "Array of function pointers", "Function returning array pointer", "Invalid syntax"],
    "options_hi": ["Pointer to function returning pointer to array of 5 int", "Function pointers का array", "Array pointer return करने वाला function", "Invalid syntax"],
    "answer_en": "Pointer to function returning pointer to array of 5 int",
    "answer_hi": "Pointer to function returning pointer to array of 5 int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the output of: printf(\"%zu\", sizeof(struct {int x:1; int y:1;}));",
    "question_hi": "printf(\"%zu\", sizeof(struct {int x:1; int y:1;})); का output क्या है?",
    "options_en": ["Implementation defined", "4", "1", "8"],
    "options_hi": ["Implementation defined", "4", "1", "8"],
    "answer_en": "Implementation defined",
    "answer_hi": "Implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does 'const int * const * pp;' mean?",
    "question_hi": "'const int * const * pp;' का क्या meaning है?",
    "options_en": ["Pointer to const pointer to const int", "Const pointer to const pointer to int", "Double const pointer", "Invalid declaration"],
    "options_hi": ["Pointer to const pointer to const int", "Const pointer to const pointer to int", "Double const pointer", "Invalid declaration"],
    "answer_en": "Pointer to const pointer to const int",
    "answer_hi": "Pointer to const pointer to const int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'strict aliasing violation' example?",
    "question_hi": "'strict aliasing violation' का example क्या है?",
    "options_en": ["float f = 1.0; int i = *(int*)&f;", "int i = 5; float f = i;", "char* p = (char*)&i;", "No violation"],
    "options_hi": ["float f = 1.0; int i = *(int*)&f;", "int i = 5; float f = i;", "char* p = (char*)&i;", "No violation"],
    "answer_en": "float f = 1.0; int i = *(int*)&f;",
    "answer_hi": "float f = 1.0; int i = *(int*)&f;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'sequence point' in expression evaluation?",
    "question_hi": "Expression evaluation में 'sequence point' क्या है?",
    "options_en": ["Point where all side effects complete", "Semicolon", "Comma operator", "Function call"],
    "options_hi": ["Point where all side effects complete", "Semicolon", "Comma operator", "Function call"],
    "answer_en": "Point where all side effects complete",
    "answer_hi": "Point where all side effects complete",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'effective type' in C?",
    "question_hi": "C में 'effective type' क्या है?",
    "options_en": ["Type of object for aliasing purposes", "Actual type after typedef", "Most efficient type", "No such concept"],
    "options_hi": ["Type of object for aliasing purposes", "Actual type after typedef", "Most efficient type", "No such concept"],
    "answer_en": "Type of object for aliasing purposes",
    "answer_hi": "Type of object for aliasing purposes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does 'restrict' keyword guarantee?",
    "question_hi": "'restrict' keyword क्या guarantee करता है?",
    "options_en": ["Pointer is only way to access object", "Pointer is not null", "Object is in memory", "No guarantee"],
    "options_hi": ["Pointer is only way to access object", "Pointer is not null", "Object is in memory", "No guarantee"],
    "answer_en": "Pointer is only way to access object",
    "answer_hi": "Pointer is only way to access object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'trap representation'?",
    "question_hi": "'trap representation' क्या है?",
    "options_en": ["Bit pattern causing trap when accessed", "Invalid pointer", "Null pointer", "Undefined value"],
    "options_hi": ["Bit pattern causing trap when accessed", "Invalid pointer", "Null pointer", "Undefined value"],
    "answer_en": "Bit pattern causing trap when accessed",
    "answer_hi": "Bit pattern causing trap when accessed",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'memory model' in C11?",
    "question_hi": "C11 में 'memory model' क्या है?",
    "options_en": ["Formal model for concurrent memory access", "Memory layout", "Heap vs stack", "No model"],
    "options_hi": ["Formal model for concurrent memory access", "Memory layout", "Heap vs stack", "No model"],
    "answer_en": "Formal model for concurrent memory access",
    "answer_hi": "Formal model for concurrent memory access",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'forward progress guarantee'?",
    "question_hi": "'forward progress guarantee' क्या है?",
    "options_en": ["Thread will eventually make progress", "Program will terminate", "Loop will end", "No guarantee"],
    "options_hi": ["Thread will eventually make progress", "Program will terminate", "Loop will end", "No guarantee"],
    "answer_en": "Thread will eventually make progress",
    "answer_hi": "Thread will eventually make progress",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'data race'?",
    "question_hi": "'data race' क्या है?",
    "options_en": ["Concurrent access without synchronization", "Race condition", "Speed competition", "Not in C"],
    "options_hi": ["Concurrent access without synchronization", "Race condition", "Speed competition", "Not in C"],
    "answer_en": "Concurrent access without synchronization",
    "answer_hi": "Concurrent access without synchronization",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'memory_order_relaxed'?",
    "question_hi": "'memory_order_relaxed' क्या है?",
    "options_en": ["No ordering constraints", "Weakest ordering", "Only atomicity", "All of above"],
    "options_hi": ["No ordering constraints", "Weakest ordering", "Only atomicity", "All of above"],
    "answer_en": "All of above",
    "answer_hi": "All of above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'memory_order_acquire' for?",
    "question_hi": "'memory_order_acquire' किसके लिए है?",
    "options_en": ["Load operations that acquire lock", "Read-side of release-acquire", "Synchronization point", "All of above"],
    "options_hi": ["Load operations that acquire lock", "Read-side of release-acquire", "Synchronization point", "All of above"],
    "answer_en": "All of above",
    "answer_hi": "All of above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'memory_order_release' for?",
    "question_hi": "'memory_order_release' किसके लिए है?",
    "options_en": ["Store operations that release lock", "Write-side of release-acquire", "Synchronization point", "All of above"],
    "options_hi": ["Store operations that release lock", "Write-side of release-acquire", "Synchronization point", "All of above"],
    "answer_en": "All of above",
    "answer_hi": "All of above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'atomic_thread_fence'?",
    "question_hi": "'atomic_thread_fence' क्या है?",
    "options_en": ["Memory fence without atomic operation", "Standalone memory barrier", "Compiler fence", "All of above"],
    "options_hi": ["Memory fence without atomic operation", "Standalone memory barrier", "Compiler fence", "All of above"],
    "answer_en": "All of above",
    "answer_hi": "All of above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'kill_dependency' macro for?",
    "question_hi": "'kill_dependency' macro किसके लिए है?",
    "options_en": ["Break dependency chain for optimization", "End consume dependency", "Compiler hint", "All of above"],
    "options_hi": ["Break dependency chain for optimization", "End consume dependency", "Compiler hint", "All of above"],
    "answer_en": "All of above",
    "answer_hi": "All of above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'signal handler constraints'?",
    "question_hi": "'signal handler constraints' क्या है?",
    "options_en": ["Limited functions allowed in handler", "Async-signal-safe functions", "No malloc in handler", "All of above"],
    "options_hi": ["Limited functions allowed in handler", "Async-signal-safe functions", "No malloc in handler", "All of above"],
    "answer_en": "All of above",
    "answer_hi": "All of above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'volatile sig_atomic_t' for?",
    "question_hi": "'volatile sig_atomic_t' किसके लिए है?",
    "options_en": ["Signal-safe variable type", "Atomic access in handlers", "Both A and B", "Not needed"],
    "options_hi": ["Signal-safe variable type", "Atomic access in handlers", "Both A and B", "Not needed"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'setjmp/longjmp constraint'?",
    "question_hi": "'setjmp/longjmp constraint' क्या है?",
    "options_en": ["Volatile variables only", "Automatic variables problem", "Both A and B", "No constraint"],
    "options_hi": ["Volatile variables only", "Automatic variables problem", "Both A and B", "No constraint"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'floating-point environment'?",
    "question_hi": "'floating-point environment' क्या है?",
    "options_en": ["Rounding mode, exceptions", "FPU state", "Both A and B", "Not in C"],
    "options_hi": ["Rounding mode, exceptions", "FPU state", "Both A and B", "Not in C"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'fenv_t' type for?",
    "question_hi": "'fenv_t' type किसके लिए है?",
    "options_en": ["Save/restore floating environment", "FPU control", "Both A and B", "Deprecated"],
    "options_hi": ["Save/restore floating environment", "FPU control", "Both A and B", "Deprecated"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'pragma STDC FENV_ACCESS'?",
    "question_hi": "'pragma STDC FENV_ACCESS' क्या है?",
    "options_en": ["Control FP environment access", "Optimization control", "Both A and B", "Not standard"],
    "options_hi": ["Control FP environment access", "Optimization control", "Both A and B", "Not standard"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'complex type' in C?",
    "question_hi": "C में 'complex type' क्या है?",
    "options_en": ["_Complex keyword", "float _Complex etc.", "Both A and B", "C++ only"],
    "options_hi": ["_Complex keyword", "float _Complex etc.", "Both A and B", "C++ only"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'imaginary type'?",
    "question_hi": "'imaginary type' क्या है?",
    "options_en": ["_Imaginary keyword", "Pure imaginary numbers", "Optional feature", "All of above"],
    "options_hi": ["_Imaginary keyword", "Pure imaginary numbers", "Optional feature", "All of above"],
    "answer_en": "All of above",
    "answer_hi": "All of above",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'type generic math'?",
    "question_hi": "'type generic math' क्या है?",
    "options_en": ["tgmath.h macros", "Automatic type selection", "Both A and B", "Not in C"],
    "options_hi": ["tgmath.h macros", "Automatic type selection", "Both A and B", "Not in C"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'bounds-checking interfaces'?",
    "question_hi": "'bounds-checking interfaces' क्या है?",
    "options_en": ["Annex K functions", "Secure C11", "Both A and B", "Optional"],
    "options_hi": ["Annex K functions", "Secure C11", "Both A and B", "Optional"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'gets_s' function?",
    "question_hi": "'gets_s' function क्या है?",
    "options_en": ["Safe version of gets", "Bounds-checked input", "Both A and B", "Deprecated"],
    "options_hi": ["Safe version of gets", "Bounds-checked input", "Both A and B", "Deprecated"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'RSIZE_MAX' macro?",
    "question_hi": "'RSIZE_MAX' macro क्या है?",
    "options_en": ["Maximum size for safe functions", "Runtime size limit", "Both A and B", "Not defined"],
    "options_hi": ["Maximum size for safe functions", "Runtime size limit", "Both A and B", "Not defined"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'constraint handler'?",
    "question_hi": "'constraint handler' क्या है?",
    "options_en": ["Error handler for safe functions", "set_constraint_handler_s", "Both A and B", "Runtime error"],
    "options_hi": ["Error handler for safe functions", "set_constraint_handler_s", "Both A and B", "Runtime error"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'analyzer-specific attributes'?",
    "question_hi": "'analyzer-specific attributes' क्या है?",
    "options_en": ["__attribute__((nonnull))", "Static analysis hints", "Both A and B", "Compiler only"],
    "options_hi": ["__attribute__((nonnull))", "Static analysis hints", "Both A and B", "Compiler only"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'no_sanitize' attribute?",
    "question_hi": "'no_sanitize' attribute क्या है?",
    "options_en": ["Disable sanitizer checks", "__attribute__((no_sanitize(...)))", "Both A and B", "Debug only"],
    "options_hi": ["Disable sanitizer checks", "__attribute__((no_sanitize(...)))", "Both A and B", "Debug only"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'alloc_size' attribute?",
    "question_hi": "'alloc_size' attribute क्या है?",
    "options_en": ["Allocation size hint", "__attribute__((alloc_size(...)))", "Both A and B", "For malloc-like"],
    "options_hi": ["Allocation size hint", "__attribute__((alloc_size(...)))", "Both A and B", "For malloc-like"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'warn_unused_result' attribute?",
    "question_hi": "'warn_unused_result' attribute क्या है?",
    "options_en": ["Warn if return value ignored", "__attribute__((warn_unused_result))", "Both A and B", "GCC/Clang"],
    "options_hi": ["Warn if return value ignored", "__attribute__((warn_unused_result))", "Both A and B", "GCC/Clang"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'format' attribute?",
    "question_hi": "'format' attribute क्या है?",
    "options_en": ["Check printf/scanf format", "__attribute__((format(...)))", "Both A and B", "Type safety"],
    "options_hi": ["Check printf/scanf format", "__attribute__((format(...)))", "Both A and B", "Type safety"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'nonnull' attribute?",
    "question_hi": "'nonnull' attribute क्या है?",
    "options_en": ["Parameters cannot be null", "__attribute__((nonnull))", "Both A and B", "Optimization"],
    "options_hi": ["Parameters cannot be null", "__attribute__((nonnull))", "Both A and B", "Optimization"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'pure' attribute?",
    "question_hi": "'pure' attribute क्या है?",
    "options_en": ["Function has no side effects", "__attribute__((pure))", "Both A and B", "Reads memory only"],
    "options_hi": ["Function has no side effects", "__attribute__((pure))", "Both A and B", "Reads memory only"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'const' attribute?",
    "question_hi": "'const' attribute क्या है?",
    "options_en": ["Function depends only on parameters", "__attribute__((const))", "Both A and B", "No memory read"],
    "options_hi": ["Function depends only on parameters", "__attribute__((const))", "Both A and B", "No memory read"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'noreturn' attribute?",
    "question_hi": "'noreturn' attribute क्या है?",
    "options_en": ["Function never returns", "__attribute__((noreturn))", "Both A and B", "Like exit()"],
    "options_hi": ["Function never returns", "__attribute__((noreturn))", "Both A and B", "Like exit()"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'returns_twice' attribute?",
    "question_hi": "'returns_twice' attribute क्या है?",
    "options_en": ["Function may return multiple times", "__attribute__((returns_twice))", "Both A and B", "Like setjmp"],
    "options_hi": ["Function may return multiple times", "__attribute__((returns_twice))", "Both A and B", "Like setjmp"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'sentinel' attribute?",
    "question_hi": "'sentinel' attribute क्या है?",
    "options_en": ["Requires null-terminated argument list", "__attribute__((sentinel))", "Both A and B", "For varargs"],
    "options_hi": ["Requires null-terminated argument list", "__attribute__((sentinel))", "Both A and B", "For varargs"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'visibility' attribute?",
    "question_hi": "'visibility' attribute क्या है?",
    "options_en": ["Control symbol visibility", "__attribute__((visibility(...)))", "Both A and B", "Shared libraries"],
    "options_hi": ["Control symbol visibility", "__attribute__((visibility(...)))", "Both A and B", "Shared libraries"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'weak' attribute?",
    "question_hi": "'weak' attribute क्या है?",
    "options_en": ["Weak symbol definition", "__attribute__((weak))", "Both A and B", "Can be overridden"],
    "options_hi": ["Weak symbol definition", "__attribute__((weak))", "Both A and B", "Can be overridden"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'alias' attribute?",
    "question_hi": "'alias' attribute क्या है?",
    "options_en": ["Create symbol alias", "__attribute__((alias(...)))", "Both A and B", "For renaming"],
    "options_hi": ["Create symbol alias", "__attribute__((alias(...)))", "Both A and B", "For renaming"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'ifunc' attribute?",
    "question_hi": "'ifunc' attribute क्या है?",
    "options_en": ["Indirect function", "__attribute__((ifunc(...)))", "Both A and B", "Runtime resolver"],
    "options_hi": ["Indirect function", "__attribute__((ifunc(...)))", "Both A and B", "Runtime resolver"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'constructor' attribute?",
    "question_hi": "'constructor' attribute क्या है?",
    "options_en": ["Run function before main", "__attribute__((constructor))", "Both A and B", "Initialization"],
    "options_hi": ["Run function before main", "__attribute__((constructor))", "Both A and B", "Initialization"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'destructor' attribute?",
    "question_hi": "'destructor' attribute क्या है?",
    "options_en": ["Run function after main", "__attribute__((destructor))", "Both A and B", "Cleanup"],
    "options_hi": ["Run function after main", "__attribute__((destructor))", "Both A and B", "Cleanup"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'cleanup' attribute?",
    "question_hi": "'cleanup' attribute क्या है?",
    "options_en": ["Run function on scope exit", "__attribute__((cleanup(...)))", "Both A and B", "Automatic cleanup"],
    "options_hi": ["Run function on scope exit", "__attribute__((cleanup(...)))", "Both A and B", "Automatic cleanup"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'flatten' attribute?",
    "question_hi": "'flatten' attribute क्या है?",
    "options_en": ["Inline all calls in function", "__attribute__((flatten))", "Both A and B", "Aggressive inlining"],
    "options_hi": ["Inline all calls in function", "__attribute__((flatten))", "Both A and B", "Aggressive inlining"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'noinline' attribute?",
    "question_hi": "'noinline' attribute क्या है?",
    "options_en": ["Prevent function inlining", "__attribute__((noinline))", "Both A and B", "Debugging"],
    "options_hi": ["Prevent function inlining", "__attribute__((noinline))", "Both A and B", "Debugging"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'always_inline' attribute?",
    "question_hi": "'always_inline' attribute क्या है?",
    "options_en": ["Force function inlining", "__attribute__((always_inline))", "Both A and B", "Performance"],
    "options_hi": ["Force function inlining", "__attribute__((always_inline))", "Both A and B", "Performance"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'target' attribute?",
    "question_hi": "'target' attribute क्या है?",
    "options_en": ["Target-specific optimization", "__attribute__((target(...)))", "Both A and B", "CPU features"],
    "options_hi": ["Target-specific optimization", "__attribute__((target(...)))", "Both A and B", "CPU features"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'optimize' attribute?",
    "question_hi": "'optimize' attribute क्या है?",
    "options_en": ["Function-specific optimization", "__attribute__((optimize(...)))", "Both A and B", "Tune options"],
    "options_hi": ["Function-specific optimization", "__attribute__((optimize(...)))", "Both A and B", "Tune options"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'section' attribute?",
    "question_hi": "'section' attribute क्या है?",
    "options_en": ["Place in specific section", "__attribute__((section(...)))", "Both A and B", "Linker control"],
    "options_hi": ["Place in specific section", "__attribute__((section(...)))", "Both A and B", "Linker control"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'aligned' attribute?",
    "question_hi": "'aligned' attribute क्या है?",
    "options_en": ["Force alignment", "__attribute__((aligned(...)))", "Both A and B", "Memory layout"],
    "options_hi": ["Force alignment", "__attribute__((aligned(...)))", "Both A and B", "Memory layout"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'packed' attribute?",
    "question_hi": "'packed' attribute क्या है?",
    "options_en": ["Remove padding", "__attribute__((packed))", "Both A and B", "Dense layout"],
    "options_hi": ["Remove padding", "__attribute__((packed))", "Both A and B", "Dense layout"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'transparent_union' attribute?",
    "question_hi": "'transparent_union' attribute क्या है?",
    "options_en": ["Union parameter passing", "__attribute__((transparent_union))", "Both A and B", "Type compatibility"],
    "options_hi": ["Union parameter passing", "__attribute__((transparent_union))", "Both A and B", "Type compatibility"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'unused' attribute?",
    "question_hi": "'unused' attribute क्या है?",
    "options_en": ["Suppress unused warnings", "__attribute__((unused))", "Both A and B", "For parameters"],
    "options_hi": ["Suppress unused warnings", "__attribute__((unused))", "Both A and B", "For parameters"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'used' attribute?",
    "question_hi": "'used' attribute क्या है?",
    "options_en": ["Keep symbol despite no references", "__attribute__((used))", "Both A and B", "Prevent removal"],
    "options_hi": ["Keep symbol despite no references", "__attribute__((used))", "Both A and B", "Prevent removal"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'deprecated' attribute?",
    "question_hi": "'deprecated' attribute क्या है?",
    "options_en": ["Mark as obsolete", "__attribute__((deprecated))", "Both A and B", "Generate warnings"],
    "options_hi": ["Mark as obsolete", "__attribute__((deprecated))", "Both A and B", "Generate warnings"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'vector_size' attribute?",
    "question_hi": "'vector_size' attribute क्या है?",
    "options_en": ["Create vector type", "__attribute__((vector_size(...)))", "Both A and B", "SIMD programming"],
    "options_hi": ["Create vector type", "__attribute__((vector_size(...)))", "Both A and B", "SIMD programming"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'mode' attribute?",
    "question_hi": "'mode' attribute क्या है?",
    "options_en": ["Specify data mode", "__attribute__((mode(...)))", "Both A and B", "Hardware types"],
    "options_hi": ["Specify data mode", "__attribute__((mode(...)))", "Both A and B", "Hardware types"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'weakref' attribute?",
    "question_hi": "'weakref' attribute क्या है?",
    "options_en": ["Weak reference to symbol", "__attribute__((weakref(...)))", "Both A and B", "Optional linking"],
    "options_hi": ["Weak reference to symbol", "__attribute__((weakref(...)))", "Both A and B", "Optional linking"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'no_instrument_function' attribute?",
    "question_hi": "'no_instrument_function' attribute क्या है?",
    "options_en": ["Disable profiling instrumentation", "__attribute__((no_instrument_function))", "Both A and B", "For tools"],
    "options_hi": ["Disable profiling instrumentation", "__attribute__((no_instrument_function))", "Both A and B", "For tools"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'interrupt' attribute?",
    "question_hi": "'interrupt' attribute क्या है?",
    "options_en": ["Mark as interrupt handler", "__attribute__((interrupt))", "Both A and B", "Save registers"],
    "options_hi": ["Mark as interrupt handler", "__attribute__((interrupt))", "Both A and B", "Save registers"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'naked' attribute?",
    "question_hi": "'naked' attribute क्या है?",
    "options_en": ["No prologue/epilogue", "__attribute__((naked))", "Both A and B", "Assembly functions"],
    "options_hi": ["No prologue/epilogue", "__attribute__((naked))", "Both A and B", "Assembly functions"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'assume_aligned' attribute?",
    "question_hi": "'assume_aligned' attribute क्या है?",
    "options_en": ["Assume pointer alignment", "__attribute__((assume_aligned(...)))", "Both A and B", "Optimization hint"],
    "options_hi": ["Assume pointer alignment", "__attribute__((assume_aligned(...)))", "Both A and B", "Optimization hint"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'warn_if_not_aligned' attribute?",
    "question_hi": "'warn_if_not_aligned' attribute क्या है?",
    "options_en": ["Warn if pointer not aligned", "__attribute__((warn_if_not_aligned(...)))", "Both A and B", "Debugging"],
    "options_hi": ["Warn if pointer not aligned", "__attribute__((warn_if_not_aligned(...)))", "Both A and B", "Debugging"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'copy' attribute?",
    "question_hi": "'copy' attribute क्या है?",
    "options_en": ["Copy attribute from another", "__attribute__((copy(...)))", "Both A and B", "Attribute propagation"],
    "options_hi": ["Copy attribute from another", "__attribute__((copy(...)))", "Both A and B", "Attribute propagation"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'no_sanitize_address' attribute?",
    "question_hi": "'no_sanitize_address' attribute क्या है?",
    "options_en": ["Disable address sanitizer", "__attribute__((no_sanitize_address))", "Both A and B", "ASan control"],
    "options_hi": ["Disable address sanitizer", "__attribute__((no_sanitize_address))", "Both A and B", "ASan control"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'no_sanitize_thread' attribute?",
    "question_hi": "'no_sanitize_thread' attribute क्या है?",
    "options_en": ["Disable thread sanitizer", "__attribute__((no_sanitize_thread))", "Both A and B", "TSan control"],
    "options_hi": ["Disable thread sanitizer", "__attribute__((no_sanitize_thread))", "Both A and B", "TSan control"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'no_sanitize_undefined' attribute?",
    "question_hi": "'no_sanitize_undefined' attribute क्या है?",
    "options_en": ["Disable undefined behavior sanitizer", "__attribute__((no_sanitize_undefined))", "Both A and B", "UBSan control"],
    "options_hi": ["Disable undefined behavior sanitizer", "__attribute__((no_sanitize_undefined))", "Both A and B", "UBSan control"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'fallthrough' attribute?",
    "question_hi": "'fallthrough' attribute क्या है?",
    "options_en": ["Mark intentional fallthrough", "__attribute__((fallthrough))", "Both A and B", "Switch cases"],
    "options_hi": ["Mark intentional fallthrough", "__attribute__((fallthrough))", "Both A and B", "Switch cases"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'nodiscard' attribute?",
    "question_hi": "'nodiscard' attribute क्या है?",
    "options_en": ["Warn if return value ignored", "__attribute__((nodiscard))", "Both A and B", "C++ like"],
    "options_hi": ["Warn if return value ignored", "__attribute__((nodiscard))", "Both A and B", "C++ like"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'maybe_unused' attribute?",
    "question_hi": "'maybe_unused' attribute क्या है?",
    "options_en": ["Suppress unused warnings", "__attribute__((maybe_unused))", "Both A and B", "C++ like"],
    "options_hi": ["Suppress unused warnings", "__attribute__((maybe_unused))", "Both A and B", "C++ like"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'scalar_storage_order' attribute?",
    "question_hi": "'scalar_storage_order' attribute क्या है?",
    "options_en": ["Control endianness in struct", "__attribute__((scalar_storage_order(...)))", "Both A and B", "Byte order"],
    "options_hi": ["Control endianness in struct", "__attribute__((scalar_storage_order(...)))", "Both A and B", "Byte order"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'zero_call_used_regs' attribute?",
    "question_hi": "'zero_call_used_regs' attribute क्या है?",
    "options_en": ["Zero registers before return", "__attribute__((zero_call_used_regs(...)))", "Both A and B", "Security"],
    "options_hi": ["Zero registers before return", "__attribute__((zero_call_used_regs(...)))", "Both A and B", "Security"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'symver' attribute?",
    "question_hi": "'symver' attribute क्या है?",
    "options_en": ["Symbol versioning", "__attribute__((symver(...)))", "Both A and B", "Shared libraries"],
    "options_hi": ["Symbol versioning", "__attribute__((symver(...)))", "Both A and B", "Shared libraries"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'tls_model' attribute?",
    "question_hi": "'tls_model' attribute क्या है?",
    "options_en": ["Thread-local storage model", "__attribute__((tls_model(...)))", "Both A and B", "TLS optimization"],
    "options_hi": ["Thread-local storage model", "__attribute__((tls_model(...)))", "Both A and B", "TLS optimization"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'target_clones' attribute?",
    "question_hi": "'target_clones' attribute क्या है?",
    "options_en": ["Multiple cloned versions for targets", "__attribute__((target_clones(...)))", "Both A and B", "CPU dispatch"],
    "options_hi": ["Multiple cloned versions for targets", "__attribute__((target_clones(...)))", "Both A and B", "CPU dispatch"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'selectany' attribute?",
    "question_hi": "'selectany' attribute क्या है?",
    "options_en": ["COMDAT folding for duplicates", "__attribute__((selectany))", "Both A and B", "Windows compatibility"],
    "options_hi": ["COMDAT folding for duplicates", "__attribute__((selectany))", "Both A and B", "Windows compatibility"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'dllimport' attribute?",
    "question_hi": "'dllimport' attribute क्या है?",
    "options_en": ["Import from DLL", "__attribute__((dllimport))", "Both A and B", "Windows"],
    "options_hi": ["Import from DLL", "__attribute__((dllimport))", "Both A and B", "Windows"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'dllexport' attribute?",
    "question_hi": "'dllexport' attribute क्या है?",
    "options_en": ["Export to DLL", "__attribute__((dllexport))", "Both A and B", "Windows"],
    "options_hi": ["Export to DLL", "__attribute__((dllexport))", "Both A and B", "Windows"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'alloc_align' attribute?",
    "question_hi": "'alloc_align' attribute क्या है?",
    "options_en": ["Alignment parameter for allocator", "__attribute__((alloc_align(...)))", "Both A and B", "posix_memalign"],
    "options_hi": ["Alignment parameter for allocator", "__attribute__((alloc_align(...)))", "Both A and B", "posix_memalign"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'cold' attribute?",
    "question_hi": "'cold' attribute क्या है?",
    "options_en": ["Mark as cold/unlikely path", "__attribute__((cold))", "Both A and B", "Optimization"],
    "options_hi": ["Mark as cold/unlikely path", "__attribute__((cold))", "Both A and B", "Optimization"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'hot' attribute?",
    "question_hi": "'hot' attribute क्या है?",
    "options_en": ["Mark as hot/likely path", "__attribute__((hot))", "Both A and B", "Optimization"],
    "options_hi": ["Mark as hot/likely path", "__attribute__((hot))", "Both A and B", "Optimization"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'retain' attribute?",
    "question_hi": "'retain' attribute क्या है?",
    "options_en": ["Keep section in linked output", "__attribute__((retain))", "Both A and B", "Linker control"],
    "options_hi": ["Keep section in linked output", "__attribute__((retain))", "Both A and B", "Linker control"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'noipa' attribute?",
    "question_hi": "'noipa' attribute क्या है?",
    "options_en": ["Disable interprocedural optimization", "__attribute__((noipa))", "Both A and B", "Debugging"],
    "options_hi": ["Disable interprocedural optimization", "__attribute__((noipa))", "Both A and B", "Debugging"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'noicf' attribute?",
    "question_hi": "'noicf' attribute क्या है?",
    "options_en": ["Disable identical code folding", "__attribute__((noicf))", "Both A and B", "Linker optimization"],
    "options_hi": ["Disable identical code folding", "__attribute__((noicf))", "Both A and B", "Linker optimization"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'patchable_function_entry' attribute?",
    "question_hi": "'patchable_function_entry' attribute क्या है?",
    "options_en": ["Add NOPs at function entry", "__attribute__((patchable_function_entry(...)))", "Both A and B", "Dynamic patching"],
    "options_hi": ["Add NOPs at function entry", "__attribute__((patchable_function_entry(...)))", "Both A and B", "Dynamic patching"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'assume' attribute?",
    "question_hi": "'assume' attribute क्या है?",
    "options_en": ["Assume condition is true", "__attribute__((assume(...)))", "Both A and B", "Optimization hint"],
    "options_hi": ["Assume condition is true", "__attribute__((assume(...)))", "Both A and B", "Optimization hint"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'access' attribute?",
    "question_hi": "'access' attribute क्या है?",
    "options_en": ["Specify access mode to parameters", "__attribute__((access(...)))", "Both A and B", "Static analysis"],
    "options_hi": ["Specify access mode to parameters", "__attribute__((access(...)))", "Both A and B", "Static analysis"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'malloc' attribute?",
    "question_hi": "'malloc' attribute क्या है?",
    "options_en": ["Function returns fresh memory", "__attribute__((malloc))", "Both A and B", "Aliasing hint"],
    "options_hi": ["Function returns fresh memory", "__attribute__((malloc))", "Both A and B", "Aliasing hint"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'returns_nonnull' attribute?",
    "question_hi": "'returns_nonnull' attribute क्या है?",
    "options_en": ["Function returns non-null pointer", "__attribute__((returns_nonnull))", "Both A and B", "Nullability"],
    "options_hi": ["Function returns non-null pointer", "__attribute__((returns_nonnull))", "Both A and B", "Nullability"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'leaf' attribute?",
    "question_hi": "'leaf' attribute क्या है?",
    "options_en": ["Function doesn't call other functions", "__attribute__((leaf))", "Both A and B", "Optimization"],
    "options_hi": ["Function doesn't call other functions", "__attribute__((leaf))", "Both A and B", "Optimization"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is '__builtin_object_size'?",
    "question_hi": "'__builtin_object_size' क्या है?",
    "options_en": ["Compute object size at compile time", "Buffer overflow protection", "Both A and B", "GCC builtin"],
    "options_hi": ["Compute object size at compile time", "Buffer overflow protection", "Both A and B", "GCC builtin"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is '__builtin_constant_p'?",
    "question_hi": "'__builtin_constant_p' क्या है?",
    "options_en": ["Check if value is compile-time constant", "Optimization hint", "Both A and B", "GCC builtin"],
    "options_hi": ["Check if value is compile-time constant", "Optimization hint", "Both A and B", "GCC builtin"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is '__builtin_expect'?",
    "question_hi": "'__builtin_expect' क्या है?",
    "options_en": ["Branch prediction hint", "__builtin_expect(expr, value)", "Both A and B", "Performance"],
    "options_hi": ["Branch prediction hint", "__builtin_expect(expr, value)", "Both A and B", "Performance"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is '__builtin_unreachable'?",
    "question_hi": "'__builtin_unreachable' क्या है?",
    "options_en": ["Mark code as unreachable", "Optimization hint", "Both A and B", "GCC builtin"],
    "options_hi": ["Mark code as unreachable", "Optimization hint", "Both A and B", "GCC builtin"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is '__builtin_prefetch'?",
    "question_hi": "'__builtin_prefetch' क्या है?",
    "options_en": ["Prefetch data into cache", "Performance optimization", "Both A and B", "GCC builtin"],
    "options_hi": ["Prefetch data into cache", "Performance optimization", "Both A and B", "GCC builtin"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is '__builtin_va_arg_pack'?",
    "question_hi": "'__builtin_va_arg_pack' क्या है?",
    "options_en": ["Access all variadic arguments as block", "For builtin functions", "Both A and B", "GCC builtin"],
    "options_hi": ["Access all variadic arguments as block", "For builtin functions", "Both A and B", "GCC builtin"],
    "answer_en": "Both A and B",
    "answer_hi": "Both A and B",
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