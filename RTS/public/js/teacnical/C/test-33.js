const questions = [
  {
    "num": 1,
    "question_en": "What is the value of: sizeof(struct {int a; char b; int c;}) with 4-byte alignment?",
    "question_hi": "4-byte alignment में: sizeof(struct {int a; char b; int c;}) का value क्या है?",
    "options_en": ["12 bytes", "9 bytes", "16 bytes", "Depends on compiler"],
    "options_hi": ["12 bytes", "9 bytes", "16 bytes", "compiler पर depend करता है"],
    "answer_en": "12 bytes",
    "answer_hi": "12 bytes",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does (int*)0 + 5 evaluate to?",
    "question_hi": "(int*)0 + 5 का evaluation क्या होता है?",
    "options_en": ["Address 0x14 (20 in decimal)", "Address 0x5", "Compile error", "Runtime error"],
    "options_hi": ["Address 0x14 (20 in decimal)", "Address 0x5", "compile error", "runtime error"],
    "answer_en": "Address 0x14 (20 in decimal)",
    "answer_hi": "Address 0x14 (20 in decimal)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the output: int a[] = {1,2,3}; printf(\"%d\", 0[a]);",
    "question_hi": "int a[] = {1,2,3}; printf(\"%d\", 0[a]); का output क्या है?",
    "options_en": ["1", "Compile error", "0", "Undefined"],
    "options_hi": ["1", "compile error", "0", "undefined"],
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the result of: ~0 >> 1 on 32-bit system?",
    "question_hi": "32-bit system पर: ~0 >> 1 का result क्या है?",
    "options_en": ["0x7FFFFFFF", "0xFFFFFFFF", "0", "Implementation defined"],
    "options_hi": ["0x7FFFFFFF", "0xFFFFFFFF", "0", "implementation defined"],
    "answer_en": "Implementation defined",
    "answer_hi": "implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What does #define SQR(x) x*x cause for SQR(2+3)?",
    "question_hi": "#define SQR(x) x*x का SQR(2+3) के लिए क्या result होता है?",
    "options_en": ["11 (not 25)", "25", "Compile error", "Runtime error"],
    "options_hi": ["11 (25 नहीं)", "25", "compile error", "runtime error"],
    "answer_en": "11 (not 25)",
    "answer_hi": "11 (25 नहीं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the value of: 1 << -1?",
    "question_hi": "1 << -1 का value क्या है?",
    "options_en": ["Undefined behavior", "0", "0x80000000", "Compiler error"],
    "options_hi": ["undefined behavior", "0", "0x80000000", "compiler error"],
    "answer_en": "Undefined behavior",
    "answer_hi": "undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the output: printf(\"%d\", sizeof(main));",
    "question_hi": "printf(\"%d\", sizeof(main)); का output क्या है?",
    "options_en": ["Compile error", "Size of function pointer", "1", "4"],
    "options_hi": ["compile error", "function pointer का size", "1", "4"],
    "answer_en": "Compile error",
    "answer_hi": "compile error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does char *p = \"hello\"; p[0] = 'H'; do?",
    "question_hi": "char *p = \"hello\"; p[0] = 'H'; क्या करता है?",
    "options_en": ["Undefined behavior (modifying string literal)", "Changes to \"Hello\"", "Compile error", "Runtime error"],
    "options_hi": ["undefined behavior (string literal modify करना)", "\"Hello\" में change करता है", "compile error", "runtime error"],
    "answer_en": "Undefined behavior (modifying string literal)",
    "answer_hi": "undefined behavior (string literal modify करना)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the output: int i=0; printf(\"%d %d\", i, i++);",
    "question_hi": "int i=0; printf(\"%d %d\", i, i++); का output क्या है?",
    "options_en": ["Undefined behavior", "0 0", "1 0", "0 1"],
    "options_hi": ["undefined behavior", "0 0", "1 0", "0 1"],
    "answer_en": "Undefined behavior",
    "answer_hi": "undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does void (*signal(int, void(*)(int)))(int); declare?",
    "question_hi": "void (*signal(int, void(*)(int)))(int); क्या declare करता है?",
    "options_en": ["Function returning pointer to function", "Pointer to function", "Function pointer array", "Compile error"],
    "options_hi": ["function returning pointer to function", "pointer to function", "function pointer array", "compile error"],
    "answer_en": "Function returning pointer to function",
    "answer_hi": "function returning pointer to function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the value of: 1.0/0.0?",
    "question_hi": "1.0/0.0 का value क्या है?",
    "options_en": "inf (infinity)",
    "options_hi": "inf (infinity)",
    "answer_en": "inf (infinity)",
    "answer_hi": "inf (infinity)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does #pragma pack(1) do?",
    "question_hi": "#pragma pack(1) क्या करता है?",
    "options_en": ["Removes padding in structs", "Packs to 1KB", "Aligns to 1 byte", "Both A and C"],
    "options_hi": ["structs में padding remove करता है", "1KB तक pack करता है", "1 byte align करता है", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the output: printf(\"%d\", -1 >> 1);",
    "question_hi": "printf(\"%d\", -1 >> 1); का output क्या है?",
    "options_en": ["Implementation defined", "-1", "0", "0x7FFFFFFF"],
    "options_hi": ["implementation defined", "-1", "0", "0x7FFFFFFF"],
    "answer_en": "Implementation defined",
    "answer_hi": "implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does __attribute__((packed)) do in GCC?",
    "question_hi": "GCC में __attribute__((packed)) क्या करता है?",
    "options_en": ["Removes padding from struct", "Packs data tightly", "Both A and B", "Only for arrays"],
    "options_hi": ["struct से padding remove करता है", "data tightly pack करता है", "A और B दोनों", "केवल arrays के लिए"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the value of: sizeof(1==1)?",
    "question_hi": "sizeof(1==1) का value क्या है?",
    "options_en": ["sizeof(int)", "1", "sizeof(bool) in C++", "Compile error"],
    "options_hi": ["sizeof(int)", "1", "C++ में sizeof(bool)", "compile error"],
    "answer_en": "sizeof(int)",
    "answer_hi": "sizeof(int)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does restrict keyword allow compiler to assume?",
    "question_hi": "restrict keyword compiler को क्या assume करने देता है?",
    "options_en": ["Pointer doesn't alias other pointers", "Pointer is not null", "Memory is allocated", "Pointer is constant"],
    "options_hi": ["pointer other pointers के साथ alias नहीं करता", "pointer null नहीं है", "memory allocated है", "pointer constant है"],
    "answer_en": "Pointer doesn't alias other pointers",
    "answer_hi": "pointer other pointers के साथ alias नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the output: printf(\"%d\", 3[\"hello\"]);",
    "question_hi": "printf(\"%d\", 3[\"hello\"]); का output क्या है?",
    "options_en": "108 ('l' ASCII)",
    "options_hi": "108 ('l' ASCII)",
    "answer_en": "108 ('l' ASCII)",
    "answer_hi": "108 ('l' ASCII)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does (*(void(*)())0)(); do?",
    "question_hi": "(*(void(*)())0)(); क्या करता है?",
    "options_en": ["Calls function at address 0", "Null pointer dereference", "Compile error", "Casts 0 to function pointer"],
    "options_hi": ["address 0 पर function call करता है", "null pointer dereference", "compile error", "0 को function pointer में cast करता है"],
    "answer_en": "Calls function at address 0",
    "answer_hi": "address 0 पर function call करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is the value of: 0.1 + 0.2 == 0.3?",
    "question_hi": "0.1 + 0.2 == 0.3 का value क्या है?",
    "options_en": "false (floating point precision)",
    "options_hi": "false (floating point precision)",
    "answer_en": "false (floating point precision)",
    "answer_hi": "false (floating point precision)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What does #line 100 \"file.c\" do?",
    "question_hi": "#line 100 \"file.c\" क्या करता है?",
    "options_en": ["Sets line number for compiler messages", "Changes current line", "Renames file", "Both A and B"],
    "options_hi": ["compiler messages के लिए line number set करता है", "current line change करता है", "file rename करता है", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the output: int a=5; int b = a++ + ++a; printf(\"%d\", b);",
    "question_hi": "int a=5; int b = a++ + ++a; printf(\"%d\", b); का output क्या है?",
    "options_en": ["Undefined behavior", "12", "11", "10"],
    "options_hi": ["undefined behavior", "12", "11", "10"],
    "answer_en": "Undefined behavior",
    "answer_hi": "undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does __builtin_expect do in GCC?",
    "question_hi": "GCC में __builtin_expect क्या करता है?",
    "options_en": ["Branch prediction hint", "Expects value", "Compile-time check", "Runtime assertion"],
    "options_hi": ["branch prediction hint", "value expects करता है", "compile-time check", "runtime assertion"],
    "answer_en": "Branch prediction hint",
    "answer_hi": "branch prediction hint",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the value of: sizeof('ab')?",
    "question_hi": "sizeof('ab') का value क्या है?",
    "options_en": ["4 (multi-character constant)", "2", "1", "Compile error"],
    "options_hi": ["4 (multi-character constant)", "2", "1", "compile error"],
    "answer_en": "4 (multi-character constant)",
    "answer_hi": "4 (multi-character constant)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What does volatile prevent compiler from doing?",
    "question_hi": "volatile compiler को क्या करने से prevent करता है?",
    "options_en": ["Optimizing away reads/writes", "Changing order", "Both A and B", "Register allocation"],
    "options_hi": ["reads/writes optimize away करने से", "order change करने से", "A और B दोनों", "register allocation"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the output: printf(\"%d\", -1 < 0U);",
    "question_hi": "printf(\"%d\", -1 < 0U); का output क्या है?",
    "options_en": "0 (false)",
    "options_hi": "0 (false)",
    "answer_en": "0 (false)",
    "answer_hi": "0 (false)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does #pragma once do?",
    "question_hi": "#pragma once क्या करता है?",
    "options_en": ["Prevents multiple inclusion of header", "Includes once", "Non-standard but common", "All of above"],
    "options_hi": ["header के multiple inclusion prevent करता है", "once include करता है", "non-standard लेकिन common", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is the value of: 1 << 32 on 32-bit system?",
    "question_hi": "32-bit system पर: 1 << 32 का value क्या है?",
    "options_en": ["Undefined behavior", "0", "1", "Compile error"],
    "options_hi": ["undefined behavior", "0", "1", "compile error"],
    "answer_en": "Undefined behavior",
    "answer_hi": "undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What does __attribute__((aligned(16))) do?",
    "question_hi": "__attribute__((aligned(16))) क्या करता है?",
    "options_en": ["Aligns variable to 16-byte boundary", "Allocates 16 bytes", "Pads to 16 bytes", "Sets alignment"],
    "options_hi": ["variable को 16-byte boundary पर align करता है", "16 bytes allocate करता है", "16 bytes तक pad करता है", "alignment set करता है"],
    "answer_en": "Aligns variable to 16-byte boundary",
    "answer_hi": "variable को 16-byte boundary पर align करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the output: char s[] = \"hello\"; printf(\"%d\", sizeof(s));",
    "question_hi": "char s[] = \"hello\"; printf(\"%d\", sizeof(s)); का output क्या है?",
    "options_en": ["6 (includes null terminator)", "5", "sizeof(char*)", "4"],
    "options_hi": ["6 (null terminator include करता है)", "5", "sizeof(char*)", "4"],
    "answer_en": "6 (includes null terminator)",
    "answer_hi": "6 (null terminator include करता है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does _Generic in C11 provide?",
    "question_hi": "C11 में _Generic क्या provide करता है?",
    "options_en": ["Type-generic selection", "Generic programming", "Switch on type", "All of above"],
    "options_hi": ["type-generic selection", "generic programming", "type पर switch", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is the value of: INT_MAX + 1?",
    "question_hi": "INT_MAX + 1 का value क्या है?",
    "options_en": ["Undefined behavior (signed overflow)", "INT_MIN", "0", "Compile error"],
    "options_hi": ["undefined behavior (signed overflow)", "INT_MIN", "0", "compile error"],
    "answer_en": "Undefined behavior (signed overflow)",
    "answer_hi": "undefined behavior (signed overflow)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does #include_next do in GCC?",
    "question_hi": "GCC में #include_next क्या करता है?",
    "options_en": ["Includes next file with same name in search path", "Includes next line", "Non-standard", "Both A and C"],
    "options_hi": ["search path में same name वाली next file include करता है", "next line include करता है", "non-standard", "A और C दोनों"],
    "answer_en": "Both A and C",
    "answer_hi": "A और C दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is the output: printf(\"%d\", sizeof 1);",
    "question_hi": "printf(\"%d\", sizeof 1); का output क्या है?",
    "options_en": ["sizeof(int)", "1", "4", "Compiler dependent"],
    "options_hi": ["sizeof(int)", "1", "4", "compiler dependent"],
    "answer_en": "sizeof(int)",
    "answer_hi": "sizeof(int)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does __attribute__((constructor)) do?",
    "question_hi": "__attribute__((constructor)) क्या करता है?",
    "options_en": ["Runs function before main()", "Constructor for struct", "C++ style constructor", "Object initialization"],
    "options_hi": ["main() से पहले function run करता है", "struct का constructor", "C++ style constructor", "object initialization"],
    "answer_en": "Runs function before main()",
    "answer_hi": "main() से पहले function run करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is the value of: 0xFFFFFFFF >> 1 on 32-bit?",
    "question_hi": "32-bit पर: 0xFFFFFFFF >> 1 का value क्या है?",
    "options_en": ["0x7FFFFFFF", "0xFFFFFFFF", "Implementation defined", "0"],
    "options_hi": ["0x7FFFFFFF", "0xFFFFFFFF", "implementation defined", "0"],
    "answer_en": "Implementation defined",
    "answer_hi": "implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does restrict allow in pointer arguments?",
    "question_hi": "restrict pointer arguments में क्या allow करता है?",
    "options_en": ["Assume pointers don't overlap", "No aliasing", "Better optimization", "All of above"],
    "options_hi": ["assume करता है pointers overlap नहीं करते", "no aliasing", "better optimization", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is the output: int a=1; switch(a) case 1: printf(\"1\");",
    "question_hi": "int a=1; switch(a) case 1: printf(\"1\"); का output क्या है?",
    "options_en": ["Compile error (no braces)", "Prints 1", "Nothing", "Undefined"],
    "options_hi": ["compile error (no braces)", "\"1\" print करता है", "कुछ नहीं", "undefined"],
    "answer_en": "Prints 1",
    "answer_hi": "\"1\" print करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does #warning do?",
    "question_hi": "#warning क्या करता है?",
    "options_en": ["Generates compiler warning", "Non-standard but common", "Debugging aid", "All of above"],
    "options_hi": ["compiler warning generate करता है", "non-standard लेकिन common", "debugging aid", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the value of: 1/0?",
    "question_hi": "1/0 का value क्या है?",
    "options_en": ["Undefined behavior", "inf", "Compile error", "Runtime error"],
    "options_hi": ["undefined behavior", "inf", "compile error", "runtime error"],
    "answer_en": "Undefined behavior",
    "answer_hi": "undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What does __attribute__((weak)) do?",
    "question_hi": "__attribute__((weak)) क्या करता है?",
    "options_en": ["Creates weak symbol", "Can be overridden", "Linker behavior", "All of above"],
    "options_hi": ["weak symbol create करता है", "override किया जा सकता है", "linker behavior", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is the output: printf(\"%d\", sizeof(\"\"));",
    "question_hi": "printf(\"%d\", sizeof(\"\")); का output क्या है?",
    "options_en": ["1 (null terminator)", "0", "sizeof(char*)", "Compile error"],
    "options_hi": ["1 (null terminator)", "0", "sizeof(char*)", "compile error"],
    "answer_en": "1 (null terminator)",
    "answer_hi": "1 (null terminator)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does __builtin_return_address(0) return?",
    "question_hi": "__builtin_return_address(0) क्या return करता है?",
    "options_en": ["Return address of current function", "Address of caller", "GCC extension", "All of above"],
    "options_hi": ["current function का return address", "caller का address", "GCC extension", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the value of: (int)3.14?",
    "question_hi": "(int)3.14 का value क्या है?",
    "options_en": ["3 (truncates)", "3.14", "4", "Implementation defined"],
    "options_hi": ["3 (truncates)", "3.14", "4", "implementation defined"],
    "answer_en": "3 (truncates)",
    "answer_hi": "3 (truncates)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What does __attribute__((noreturn)) mean?",
    "question_hi": "__attribute__((noreturn)) का क्या meaning है?",
    "options_en": ["Function doesn't return", "Like exit()", "Compiler optimization", "All of above"],
    "options_hi": ["function return नहीं करता", "exit() की तरह", "compiler optimization", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the output: printf(\"%d\", 0 && 1/0);",
    "question_hi": "printf(\"%d\", 0 && 1/0); का output क्या है?",
    "options_en": ["0 (short-circuit evaluation)", "Undefined", "Runtime error", "Compile error"],
    "options_hi": ["0 (short-circuit evaluation)", "undefined", "runtime error", "compile error"],
    "answer_en": "0 (short-circuit evaluation)",
    "answer_hi": "0 (short-circuit evaluation)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does __sync_fetch_and_add do?",
    "question_hi": "__sync_fetch_and_add क्या करता है?",
    "options_en": ["Atomic add operation", "GCC builtin", "Thread-safe increment", "All of above"],
    "options_hi": ["atomic add operation", "GCC builtin", "thread-safe increment", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the value of: sizeof 3.14f?",
    "question_hi": "sizeof 3.14f का value क्या है?",
    "options_en": ["sizeof(float)", "4", "8", "Compiler dependent"],
    "options_hi": ["sizeof(float)", "4", "8", "compiler dependent"],
    "answer_en": "sizeof(float)",
    "answer_hi": "sizeof(float)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What does __attribute__((cleanup)) do?",
    "question_hi": "__attribute__((cleanup)) क्या करता है?",
    "options_en": ["Calls function when variable goes out of scope", "Automatic cleanup", "GCC extension", "All of above"],
    "options_hi": ["variable के scope से बाहर जाने पर function call करता है", "automatic cleanup", "GCC extension", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the output: printf(\"%d\", -1U > 1);",
    "question_hi": "printf(\"%d\", -1U > 1); का output क्या है?",
    "options_en": "1 (true)",
    "options_hi": "1 (true)",
    "answer_en": "1 (true)",
    "answer_hi": "1 (true)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does __builtin_constant_p check?",
    "question_hi": "__builtin_constant_p क्या check करता है?",
    "options_en": ["Whether value is compile-time constant", "GCC builtin", "Optimization hint", "All of above"],
    "options_hi": ["value compile-time constant है या नहीं", "GCC builtin", "optimization hint", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is the value of: 0.0/0.0?",
    "question_hi": "0.0/0.0 का value क्या है?",
    "options_en": "NaN (not a number)",
    "options_hi": "NaN (not a number)",
    "answer_en": "NaN (not a number)",
    "answer_hi": "NaN (not a number)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does __attribute__((format)) do?",
    "question_hi": "__attribute__((format)) क्या करता है?",
    "options_en": ["Checks printf/scanf format strings", "Type checking", "GCC extension", "All of above"],
    "options_hi": ["printf/scanf format strings check करता है", "type checking", "GCC extension", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the output: printf(\"%d\", 1 << 31 >> 31);",
    "question_hi": "printf(\"%d\", 1 << 31 >> 31); का output क्या है?",
    "options_en": ["Implementation defined", "1", "0", "-1"],
    "options_hi": ["implementation defined", "1", "0", "-1"],
    "answer_en": "Implementation defined",
    "answer_hi": "implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What does __atomic_load_n do in C11?",
    "question_hi": "C11 में __atomic_load_n क्या करता है?",
    "options_en": ["Atomic load operation", "Memory ordering", "Thread-safe read", "All of above"],
    "options_hi": ["atomic load operation", "memory ordering", "thread-safe read", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the value of: sizeof L'a'?",
    "question_hi": "sizeof L'a' का value क्या है?",
    "options_en": ["sizeof(wchar_t)", "2", "4", "Compiler dependent"],
    "options_hi": ["sizeof(wchar_t)", "2", "4", "compiler dependent"],
    "answer_en": "sizeof(wchar_t)",
    "answer_hi": "sizeof(wchar_t)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What does __builtin_unreachable do?",
    "question_hi": "__builtin_unreachable क्या करता है?",
    "options_en": ["Marks code as unreachable", "Optimization hint", "GCC builtin", "All of above"],
    "options_hi": ["code को unreachable mark करता है", "optimization hint", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the output: int a[5]; printf(\"%d\", a == &a[0]);",
    "question_hi": "int a[5]; printf(\"%d\", a == &a[0]); का output क्या है?",
    "options_en": "1 (true)",
    "options_hi": "1 (true)",
    "answer_en": "1 (true)",
    "answer_hi": "1 (true)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does __attribute__((section)) do?",
    "question_hi": "__attribute__((section)) क्या करता है?",
    "options_en": ["Places variable in specific section", "Linker control", "GCC extension", "All of above"],
    "options_hi": ["variable को specific section में place करता है", "linker control", "GCC extension", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the value of: 1.0e-300 * 1.0e-300?",
    "question_hi": "1.0e-300 * 1.0e-300 का value क्या है?",
    "options_en": ["Underflow to 0", "1.0e-600", "NaN", "Implementation defined"],
    "options_hi": ["underflow to 0", "1.0e-600", "NaN", "implementation defined"],
    "answer_en": "Underflow to 0",
    "answer_hi": "underflow to 0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What does __builtin_popcount do?",
    "question_hi": "__builtin_popcount क्या करता है?",
    "options_en": ["Counts number of 1 bits", "Population count", "GCC builtin", "All of above"],
    "options_hi": ["1 bits की number count करता है", "population count", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the output: printf(\"%d\", 1 ?: 0);",
    "question_hi": "printf(\"%d\", 1 ?: 0); का output क्या है?",
    "options_en": ["GCC extension (1)", "Compile error", "0", "Conditional"],
    "options_hi": ["GCC extension (1)", "compile error", "0", "conditional"],
    "answer_en": "GCC extension (1)",
    "answer_hi": "GCC extension (1)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does __attribute__((target)) do?",
    "question_hi": "__attribute__((target)) क्या करता है?",
    "options_en": ["Sets target-specific options", "CPU features", "GCC extension", "All of above"],
    "options_hi": ["target-specific options set करता है", "CPU features", "GCC extension", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the value of: 1.0/0.0 + 1.0/0.0?",
    "question_hi": "1.0/0.0 + 1.0/0.0 का value क्या है?",
    "options_en": "inf",
    "options_hi": "inf",
    "answer_en": "inf",
    "answer_hi": "inf",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What does __builtin_prefetch do?",
    "question_hi": "__builtin_prefetch क्या करता है?",
    "options_en": ["Prefetches data into cache", "Performance optimization", "GCC builtin", "All of above"],
    "options_hi": ["data को cache में prefetch करता है", "performance optimization", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the output: printf(\"%d\", sizeof(1LL));",
    "question_hi": "printf(\"%d\", sizeof(1LL)); का output क्या है?",
    "options_en": ["sizeof(long long)", "8", "4", "Compiler dependent"],
    "options_hi": ["sizeof(long long)", "8", "4", "compiler dependent"],
    "answer_en": "sizeof(long long)",
    "answer_hi": "sizeof(long long)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What does __attribute__((vector_size)) do?",
    "question_hi": "__attribute__((vector_size)) क्या करता है?",
    "options_en": ["Creates vector type", "SIMD support", "GCC extension", "All of above"],
    "options_hi": ["vector type create करता है", "SIMD support", "GCC extension", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the value of: -1 >> 31?",
    "question_hi": "-1 >> 31 का value क्या है?",
    "options_en": ["Implementation defined", "-1", "1", "0"],
    "options_hi": ["implementation defined", "-1", "1", "0"],
    "answer_en": "Implementation defined",
    "answer_hi": "implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What does __builtin_frame_address do?",
    "question_hi": "__builtin_frame_address क्या करता है?",
    "options_en": ["Returns frame pointer", "Stack frame address", "GCC builtin", "All of above"],
    "options_hi": ["frame pointer return करता है", "stack frame address", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the output: printf(\"%d\", 1 << -1);",
    "question_hi": "printf(\"%d\", 1 << -1); का output क्या है?",
    "options_en": ["Undefined behavior", "0", "Compile error", "Runtime error"],
    "options_hi": ["undefined behavior", "0", "compile error", "runtime error"],
    "answer_en": "Undefined behavior",
    "answer_hi": "undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What does __attribute__((transparent_union)) do?",
    "question_hi": "__attribute__((transparent_union)) क्या करता है?",
    "options_en": ["Makes union transparent for function args", "GCC extension", "Type punning", "All of above"],
    "options_hi": ["function args के लिए union transparent बनाता है", "GCC extension", "type punning", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the value of: 0.0 * INFINITY?",
    "question_hi": "0.0 * INFINITY का value क्या है?",
    "options_en": "NaN",
    "options_hi": "NaN",
    "answer_en": "NaN",
    "answer_hi": "NaN",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does __builtin_ffs do?",
    "question_hi": "__builtin_ffs क्या करता है?",
    "options_en": ["Finds first set bit", "Bit manipulation", "GCC builtin", "All of above"],
    "options_hi": ["first set bit find करता है", "bit manipulation", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the output: printf(\"%d\", sizeof(enum {A,B,C}));",
    "question_hi": "printf(\"%d\", sizeof(enum {A,B,C})); का output क्या है?",
    "options_en": ["sizeof(int)", "1", "Compile error", "Implementation defined"],
    "options_hi": ["sizeof(int)", "1", "compile error", "implementation defined"],
    "answer_en": "sizeof(int)",
    "answer_hi": "sizeof(int)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What does __attribute__((may_alias)) do?",
    "question_hi": "__attribute__((may_alias)) क्या करता है?",
    "options_en": ["Allows type punning", "Disables strict aliasing", "GCC extension", "All of above"],
    "options_hi": ["type punning allow करता है", "strict aliasing disable करता है", "GCC extension", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the value of: 1 << 0?",
    "question_hi": "1 << 0 का value क्या है?",
    "options_en": "1",
    "options_hi": "1",
    "answer_en": "1",
    "answer_hi": "1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What does __builtin_clz do?",
    "question_hi": "__builtin_clz क्या करता है?",
    "options_en": ["Counts leading zeros", "Bit manipulation", "GCC builtin", "All of above"],
    "options_hi": ["leading zeros count करता है", "bit manipulation", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the output: printf(\"%d\", 5 % -2);",
    "question_hi": "printf(\"%d\", 5 % -2); का output क्या है?",
    "options_en": ["Implementation defined", "1", "-1", "Compile error"],
    "options_hi": ["implementation defined", "1", "-1", "compile error"],
    "answer_en": "Implementation defined",
    "answer_hi": "implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does __attribute__((deprecated)) do?",
    "question_hi": "__attribute__((deprecated)) क्या करता है?",
    "options_en": ["Marks function as deprecated", "Warning generation", "GCC extension", "All of above"],
    "options_hi": ["function को deprecated mark करता है", "warning generation", "GCC extension", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the value of: sizeof('\0')?",
    "question_hi": "sizeof('\0') का value क्या है?",
    "options_en": ["sizeof(int)", "1", "4", "Compiler dependent"],
    "options_hi": ["sizeof(int)", "1", "4", "compiler dependent"],
    "answer_en": "sizeof(int)",
    "answer_hi": "sizeof(int)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What does __builtin_ctz do?",
    "question_hi": "__builtin_ctz क्या करता है?",
    "options_en": ["Counts trailing zeros", "Bit manipulation", "GCC builtin", "All of above"],
    "options_hi": ["trailing zeros count करता है", "bit manipulation", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the output: printf(\"%d\", -3 % 2);",
    "question_hi": "printf(\"%d\", -3 % 2); का output क्या है?",
    "options_en": ["Implementation defined", "-1", "1", "Compile error"],
    "options_hi": ["implementation defined", "-1", "1", "compile error"],
    "answer_en": "Implementation defined",
    "answer_hi": "implementation defined",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does __attribute__((always_inline)) do?",
    "question_hi": "__attribute__((always_inline)) क्या करता है?",
    "options_en": ["Forces inlining", "GCC extension", "Performance", "All of above"],
    "options_hi": ["inlining force करता है", "GCC extension", "performance", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the value of: sizeof(3.14)?",
    "question_hi": "sizeof(3.14) का value क्या है?",
    "options_en": ["sizeof(double)", "8", "4", "Compiler dependent"],
    "options_hi": ["sizeof(double)", "8", "4", "compiler dependent"],
    "answer_en": "sizeof(double)",
    "answer_hi": "sizeof(double)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What does __builtin_parity do?",
    "question_hi": "__builtin_parity क्या करता है?",
    "options_en": ["Calculates parity (odd/even)", "Bit manipulation", "GCC builtin", "All of above"],
    "options_hi": ["parity calculate करता है (odd/even)", "bit manipulation", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the output: printf(\"%d\", 1.5);",
    "question_hi": "printf(\"%d\", 1.5); का output क्या है?",
    "options_en": ["Undefined behavior", "1", "Compile warning", "Garbage value"],
    "options_hi": ["undefined behavior", "1", "compile warning", "garbage value"],
    "answer_en": "Undefined behavior",
    "answer_hi": "undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What does __attribute__((noinline)) do?",
    "question_hi": "__attribute__((noinline)) क्या करता है?",
    "options_en": ["Prevents inlining", "GCC extension", "Debugging", "All of above"],
    "options_hi": ["inlining prevent करता है", "GCC extension", "debugging", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the value of: sizeof('AB')?",
    "question_hi": "sizeof('AB') का value क्या है?",
    "options_en": ["sizeof(int)", "2", "1", "Implementation defined"],
    "options_hi": ["sizeof(int)", "2", "1", "implementation defined"],
    "answer_en": "sizeof(int)",
    "answer_hi": "sizeof(int)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does __builtin_bswap32 do?",
    "question_hi": "__builtin_bswap32 क्या करता है?",
    "options_en": ["Byte swap 32-bit integer", "Endian conversion", "GCC builtin", "All of above"],
    "options_hi": ["32-bit integer byte swap करता है", "endian conversion", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the output: printf(\"%d\", sizeof(void));",
    "question_hi": "printf(\"%d\", sizeof(void)); का output क्या है?",
    "options_en": ["Compile error", "1", "0", "Implementation defined"],
    "options_hi": ["compile error", "1", "0", "implementation defined"],
    "answer_en": "Compile error",
    "answer_hi": "compile error",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What does __attribute__((warn_unused_result)) do?",
    "question_hi": "__attribute__((warn_unused_result)) क्या करता है?",
    "options_en": ["Warns if return value unused", "GCC extension", "Code quality", "All of above"],
    "options_hi": ["return value unused होने पर warn करता है", "GCC extension", "code quality", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the value of: 1e308 * 2?",
    "question_hi": "1e308 * 2 का value क्या है?",
    "options_en": "inf",
    "options_hi": "inf",
    "answer_en": "inf",
    "answer_hi": "inf",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What does __builtin_trap do?",
    "question_hi": "__builtin_trap क्या करता है?",
    "options_en": ["Generates trap instruction", "Program termination", "GCC builtin", "All of above"],
    "options_hi": ["trap instruction generate करता है", "program termination", "GCC builtin", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the output: printf(\"%d\", 0xFFFFFFFF);",
    "question_hi": "printf(\"%d\", 0xFFFFFFFF); का output क्या है?",
    "options_en": ["-1 (if 32-bit int)", "4294967295", "Implementation defined", "Compile warning"],
    "options_hi": ["-1 (यदि 32-bit int)", "4294967295", "implementation defined", "compile warning"],
    "answer_en": "-1 (if 32-bit int)",
    "answer_hi": "-1 (यदि 32-bit int)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does __attribute__((const)) do?",
    "question_hi": "__attribute__((const)) क्या करता है?",
    "options_en": ["Function depends only on parameters", "GCC extension", "Optimization", "All of above"],
    "options_hi": ["function केवल parameters पर depend करता है", "GCC extension", "optimization", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the value of: sizeof 1.0L?",
    "question_hi": "sizeof 1.0L का value क्या है?",
    "options_en": ["sizeof(long double)", "10", "8", "Compiler dependent"],
    "options_hi": ["sizeof(long double)", "10", "8", "compiler dependent"],
    "answer_en": "sizeof(long double)",
    "answer_hi": "sizeof(long double)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What does __builtin_assume_aligned do?",
    "question_hi": "__builtin_assume_aligned क्या करता है?",
    "options_en": ["Assumes pointer is aligned", "GCC builtin", "Optimization hint", "All of above"],
    "options_hi": ["assume करता है pointer aligned है", "GCC builtin", "optimization hint", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the output: printf(\"%d\", 1/0);",
    "question_hi": "printf(\"%d\", 1/0); का output क्या है?",
    "options_en": ["Undefined behavior", "Compile error", "Runtime error", "inf"],
    "options_hi": ["undefined behavior", "compile error", "runtime error", "inf"],
    "answer_en": "Undefined behavior",
    "answer_hi": "undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What does __attribute__((pure)) do?",
    "question_hi": "__attribute__((pure)) क्या करता है?",
    "options_en": ["Function has no side effects", "GCC extension", "Optimization", "All of above"],
    "options_hi": ["function का कोई side effects नहीं है", "GCC extension", "optimization", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the value of: -0.0?",
    "question_hi": "-0.0 का value क्या है?",
    "options_en": ["Negative zero", "0.0", "NaN", "Implementation defined"],
    "options_hi": ["negative zero", "0.0", "NaN", "implementation defined"],
    "answer_en": "Negative zero",
    "answer_hi": "negative zero",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What does __builtin_choose_expr do?",
    "question_hi": "__builtin_choose_expr क्या करता है?",
    "options_en": ["Compile-time conditional", "GCC builtin", "Type selection", "All of above"],
    "options_hi": ["compile-time conditional", "GCC builtin", "type selection", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
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