const questions = [
  {
    "num": 1,
    "question_en": "What is the difference between 'early binding' and 'late binding' in C?",
    "question_hi": "C में 'early binding' और 'late binding' में क्या अंतर है?",
    "options_en": ["Early: compile-time, Late: runtime (function pointers)", "Both same", "Early: runtime, Late: compile-time", "No binding in C"],
    "options_hi": ["Early: compile-time, Late: runtime (function pointers)", "दोनों समान", "Early: runtime, Late: compile-time", "C में कोई binding नहीं"],
    "answer_en": "Early: compile-time, Late: runtime (function pointers)",
    "answer_hi": "Early: compile-time, Late: runtime (function pointers)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'function cloning' in compiler optimization?",
    "question_hi": "compiler optimization में 'function cloning' क्या होता है?",
    "options_en": ["Creates specialized copies for different call sites", "Removes functions", "Combines functions", "No cloning"],
    "options_hi": ["different call sites के लिए specialized copies create करता है", "functions remove करता है", "functions combine करता है", "कोई cloning नहीं"],
    "answer_en": "Creates specialized copies for different call sites",
    "answer_hi": "different call sites के लिए specialized copies create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'link-time dead code elimination'?",
    "question_hi": "'link-time dead code elimination' क्या होती है?",
    "options_en": ["Removes unused code across object files during linking", "Only compile-time", "No elimination", "Manual elimination"],
    "options_hi": ["linking के दौरान object files के across unused code remove करती है", "केवल compile-time", "कोई elimination नहीं", "manual elimination"],
    "answer_en": "Removes unused code across object files during linking",
    "answer_hi": "linking के दौरान object files के across unused code remove करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'interpositioning' in dynamic linking?",
    "question_hi": "dynamic linking में 'interpositioning' क्या होता है?",
    "options_en": ["Replacing library functions with custom versions", "No replacement", "Only static linking", "Compiler feature"],
    "options_hi": ["library functions को custom versions से replace करना", "कोई replacement नहीं", "केवल static linking", "compiler feature"],
    "answer_en": "Replacing library functions with custom versions",
    "answer_hi": "library functions को custom versions से replace करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'PLT (Procedure Linkage Table)'?",
    "question_hi": "'PLT (Procedure Linkage Table)' क्या होती है?",
    "options_en": ["Used for lazy binding in dynamic linking", "Static table", "No PLT", "Compiler table"],
    "options_hi": ["dynamic linking में lazy binding के लिए उपयोग", "static table", "कोई PLT नहीं", "compiler table"],
    "answer_en": "Used for lazy binding in dynamic linking",
    "answer_hi": "dynamic linking में lazy binding के लिए उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'GOT (Global Offset Table)'?",
    "question_hi": "'GOT (Global Offset Table)' क्या होती है?",
    "options_hi": ["dynamic linking में global variables और functions के addresses store करती है", "static table", "कोई GOT नहीं", "compiler table"],
    "answer_en": "Stores addresses of global variables/functions in dynamic linking",
    "answer_hi": "dynamic linking में global variables और functions के addresses store करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'position independent code (PIC)'?",
    "question_hi": "'position independent code (PIC)' क्या होता है?",
    "options_en": ["Code that can execute at any memory address", "Fixed address", "No PIC", "Compiler option"],
    "options_hi": ["वह code जो किसी भी memory address पर execute हो सकता है", "fixed address", "कोई PIC नहीं", "compiler option"],
    "answer_en": "Code that can execute at any memory address",
    "answer_hi": "वह code जो किसी भी memory address पर execute हो सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'PIC vs PIE' difference?",
    "question_hi": "'PIC vs PIE' में क्या अंतर है?",
    "options_en": ["PIC: shared libraries, PIE: executables", "Same thing", "PIC: executables, PIE: libraries", "No difference"],
    "options_hi": ["PIC: shared libraries, PIE: executables", "एक ही चीज़", "PIC: executables, PIE: libraries", "कोई अंतर नहीं"],
    "answer_en": "PIC: shared libraries, PIE: executables",
    "answer_hi": "PIC: shared libraries, PIE: executables",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'relocation' in linking?",
    "question_hi": "linking में 'relocation' क्या होता है?",
    "options_en": ["Adjusting addresses in object code", "No adjustment", "Compile-time only", "Runtime only"],
    "options_hi": ["object code में addresses adjust करना", "कोई adjustment नहीं", "केवल compile-time", "केवल runtime"],
    "answer_en": "Adjusting addresses in object code",
    "answer_hi": "object code में addresses adjust करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'R_X86_64_PC32 relocation'?",
    "question_hi": "'R_X86_64_PC32 relocation' क्या होती है?",
    "options_en": ["PC-relative 32-bit relocation in x86-64", "Absolute relocation", "No such relocation", "ARM only"],
    "options_hi": ["x86-64 में PC-relative 32-bit relocation", "absolute relocation", "ऐसी कोई relocation नहीं", "केवल ARM"],
    "answer_en": "PC-relative 32-bit relocation in x86-64",
    "answer_hi": "x86-64 में PC-relative 32-bit relocation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'weak symbol' resolution?",
    "question_hi": "'weak symbol' resolution क्या होती है?",
    "options_en": ["Weak symbol overridden by strong symbol", "Always weak", "No resolution", "Error"],
    "options_hi": ["weak symbol strong symbol द्वारा override हो जाता है", "हमेशा weak", "कोई resolution नहीं", "error"],
    "answer_en": "Weak symbol overridden by strong symbol",
    "answer_hi": "weak symbol strong symbol द्वारा override हो जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'COMDAT section'?",
    "question_hi": "'COMDAT section' क्या होती है?",
    "options_en": ["Section for duplicate elimination during linking", "No elimination", "Compile-time only", "Runtime"],
    "options_hi": ["linking के दौरान duplicate elimination के लिए section", "कोई elimination नहीं", "केवल compile-time", "runtime"],
    "answer_en": "Section for duplicate elimination during linking",
    "answer_hi": "linking के दौरान duplicate elimination के लिए section",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'linker script' purpose?",
    "question_hi": "'linker script' का purpose क्या होता है?",
    "options_en": ["Controls memory layout and section placement", "No control", "Compile-time only", "Simple linking"],
    "options_hi": ["memory layout और section placement control करता है", "कोई control नहीं", "केवल compile-time", "simple linking"],
    "answer_en": "Controls memory layout and section placement",
    "answer_hi": "memory layout और section placement control करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'symbol visibility' in ELF?",
    "question_hi": "ELF में 'symbol visibility' क्या होती है?",
    "options_en": ["STV_DEFAULT, STV_INTERNAL, STV_HIDDEN, STV_PROTECTED", "Only default", "No visibility", "All visible"],
    "options_hi": ["STV_DEFAULT, STV_INTERNAL, STV_HIDDEN, STV_PROTECTED", "केवल default", "कोई visibility नहीं", "सभी visible"],
    "answer_en": "STV_DEFAULT, STV_INTERNAL, STV_HIDDEN, STV_PROTECTED",
    "answer_hi": "STV_DEFAULT, STV_INTERNAL, STV_HIDDEN, STV_PROTECTED",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'DF_BIND_NOW flag' in dynamic linking?",
    "question_hi": "dynamic linking में 'DF_BIND_NOW flag' क्या होता है?",
    "options_en": ["Immediate binding instead of lazy", "Always lazy", "No binding", "Compile-time"],
    "options_hi": ["lazy के बजाय immediate binding", "हमेशा lazy", "कोई binding नहीं", "compile-time"],
    "answer_en": "Immediate binding instead of lazy",
    "answer_hi": "lazy के बजाय immediate binding",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'prelinking' optimization?",
    "question_hi": "'prelinking' optimization क्या होती है?",
    "options_en": ["Precomputes relocations to speed up startup", "No prelinking", "Slows startup", "Runtime only"],
    "options_hi": ["startup speed up करने के लिए relocations precompute करती है", "कोई prelinking नहीं", "startup slow करती है", "केवल runtime"],
    "answer_en": "Precomputes relocations to speed up startup",
    "answer_hi": "startup speed up करने के लिए relocations precompute करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'incremental linking'?",
    "question_hi": "'incremental linking' क्या होती है?",
    "options_en": ["Fast linking by reusing previous link results", "Full linking", "No incremental", "Compile-time"],
    "options_hi": ["previous link results reuse करके fast linking", "full linking", "कोई incremental नहीं", "compile-time"],
    "answer_en": "Fast linking by reusing previous link results",
    "answer_hi": "previous link results reuse करके fast linking",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'linker relaxation'?",
    "question_hi": "'linker relaxation' क्या होती है?",
    "options_en": ["Optimizes long branches to short ones", "No optimization", "Makes branches longer", "Compile-time"],
    "options_hi": ["long branches को short ones में optimize करती है", "कोई optimization नहीं", "branches longer बनाती है", "compile-time"],
    "answer_en": "Optimizes long branches to short ones",
    "answer_hi": "long branches को short ones में optimize करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'gold linker' vs 'bfd linker'?",
    "question_hi": "'gold linker' vs 'bfd linker' में क्या अंतर है?",
    "options_en": ["Gold: faster, BFD: more features", "Same", "Gold: slower", "BFD: faster"],
    "options_hi": ["Gold: faster, BFD: more features", "समान", "Gold: slower", "BFD: faster"],
    "answer_en": "Gold: faster, BFD: more features",
    "answer_hi": "Gold: faster, BFD: more features",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'lld linker' advantage?",
    "question_hi": "'lld linker' का advantage क्या होता है?",
    "options_en": ["LLVM-based, fast, supports LTO well", "Slow", "No LTO", "GCC only"],
    "options_hi": ["LLVM-based, fast, LTO अच्छी तरह support करता है", "slow", "कोई LTO नहीं", "केवल GCC"],
    "answer_en": "LLVM-based, fast, supports LTO well",
    "answer_hi": "LLVM-based, fast, LTO अच्छी तरह support करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'mold linker'?",
    "question_hi": "'mold linker' क्या होता है?",
    "options_en": ["Modern fast linker written in C++", "Old linker", "Slow linker", "Deprecated"],
    "options_hi": ["C++ में लिखा modern fast linker", "old linker", "slow linker", "deprecated"],
    "answer_en": "Modern fast linker written in C++",
    "answer_hi": "C++ में लिखा modern fast linker",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'section garbage collection'?",
    "question_hi": "'section garbage collection' क्या होती है?",
    "options_en": ["Removes unused sections during linking", "No removal", "Adds sections", "Compile-time"],
    "options_hi": ["linking के दौरान unused sections remove करती है", "कोई removal नहीं", "sections add करती है", "compile-time"],
    "answer_en": "Removes unused sections during linking",
    "answer_hi": "linking के दौरान unused sections remove करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'identical code folding'?",
    "question_hi": "'identical code folding' क्या होती है?",
    "options_en": ["Merges identical functions across modules", "No merging", "Creates duplicates", "Compile-time"],
    "options_hi": ["modules के across identical functions merge करती है", "कोई merging नहीं", "duplicates create करती है", "compile-time"],
    "answer_en": "Merges identical functions across modules",
    "answer_hi": "modules के across identical functions merge करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'link-time code generation' in MSVC?",
    "question_hi": "MSVC में 'link-time code generation' क्या होती है?",
    "options_en": ["/LTCG for whole-program optimization", "No LTCG", "Only GCC", "Runtime"],
    "options_hi": ["whole-program optimization के लिए /LTCG", "कोई LTCG नहीं", "केवल GCC", "runtime"],
    "answer_en": "/LTCG for whole-program optimization",
    "answer_hi": "whole-program optimization के लिए /LTCG",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'inlining across DLL boundaries'?",
    "question_hi": "DLL boundaries के across 'inlining' क्या होती है?",
    "options_en": ["Possible with LTO/whole-program optimization", "Never possible", "Always possible", "Manual"],
    "options_hi": ["LTO/whole-program optimization के साथ possible", "कभी possible नहीं", "हमेशा possible", "manual"],
    "answer_en": "Possible with LTO/whole-program optimization",
    "answer_hi": "LTO/whole-program optimization के साथ possible",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'address space layout randomization (ASLR)'?",
    "question_hi": "'address space layout randomization (ASLR)' क्या होती है?",
    "options_en": ["Randomizes memory addresses for security", "Fixed addresses", "No ASLR", "Compile-time"],
    "options_hi": ["security के लिए memory addresses randomize करती है", "fixed addresses", "कोई ASLR नहीं", "compile-time"],
    "answer_en": "Randomizes memory addresses for security",
    "answer_hi": "security के लिए memory addresses randomize करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'stack protector' implementation?",
    "question_hi": "'stack protector' implementation क्या होती है?",
    "options_en": ["Inserts canary values to detect overflow", "No canary", "Heap protection", "Manual"],
    "options_hi": ["overflow detect करने के लिए canary values insert करती है", "कोई canary नहीं", "heap protection", "manual"],
    "answer_en": "Inserts canary values to detect overflow",
    "answer_hi": "overflow detect करने के लिए canary values insert करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'RELRO (Relocation Read-Only)'?",
    "question_hi": "'RELRO (Relocation Read-Only)' क्या होता है?",
    "options_en": ["Makes relocation data read-only after binding", "Always writable", "No RELRO", "Compile-time"],
    "options_hi": ["binding के बाद relocation data को read-only बनाता है", "हमेशा writable", "कोई RELRO नहीं", "compile-time"],
    "answer_en": "Makes relocation data read-only after binding",
    "answer_hi": "binding के बाद relocation data को read-only बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'full RELRO' vs 'partial RELRO'?",
    "question_hi": "'full RELRO' vs 'partial RELRO' में क्या अंतर है?",
    "options_en": ["Full: all relocations read-only, Partial: GOT read-only", "Same", "Reverse", "No difference"],
    "options_hi": ["Full: सभी relocations read-only, Partial: GOT read-only", "समान", "reverse", "कोई अंतर नहीं"],
    "answer_en": "Full: all relocations read-only, Partial: GOT read-only",
    "answer_hi": "Full: सभी relocations read-only, Partial: GOT read-only",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'FORTIFY_SOURCE'?",
    "question_hi": "'FORTIFY_SOURCE' क्या होता है?",
    "options_en": ["Compiler/linker protection for buffer overflows", "No protection", "Runtime only", "Deprecated"],
    "options_hi": ["buffer overflows के लिए compiler/linker protection", "कोई protection नहीं", "केवल runtime", "deprecated"],
    "answer_en": "Compiler/linker protection for buffer overflows",
    "answer_hi": "buffer overflows के लिए compiler/linker protection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'control flow integrity (CFI)' implementation?",
    "question_hi": "'control flow integrity (CFI)' implementation क्या होती है?",
    "options_en": ["-fcf-protection for return address protection", "No CFI", "Only hardware", "Manual"],
    "options_hi": ["return address protection के लिए -fcf-protection", "कोई CFI नहीं", "केवल hardware", "manual"],
    "answer_en": "-fcf-protection for return address protection",
    "answer_hi": "return address protection के लिए -fcf-protection",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'shadow call stack'?",
    "question_hi": "'shadow call stack' क्या होता है?",
    "options_en": ["Secondary stack for return addresses", "No shadow", "Main stack", "Heap"],
    "options_hi": ["return addresses के लिए secondary stack", "कोई shadow नहीं", "main stack", "heap"],
    "answer_en": "Secondary stack for return addresses",
    "answer_hi": "return addresses के लिए secondary stack",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'safe stack' implementation?",
    "question_hi": "'safe stack' implementation क्या होती है?",
    "options_en": ["Separates safe/unsafe stack variables", "Single stack", "No safe stack", "Manual"],
    "options_hi": ["safe/unsafe stack variables separate करती है", "single stack", "कोई safe stack नहीं", "manual"],
    "answer_en": "Separates safe/unsafe stack variables",
    "answer_hi": "safe/unsafe stack variables separate करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'pointer authentication'?",
    "question_hi": "'pointer authentication' क्या होती है?",
    "options_en": ["ARMv8.3 feature for pointer integrity", "x86 only", "No authentication", "Software only"],
    "options_hi": ["pointer integrity के लिए ARMv8.3 feature", "केवल x86", "कोई authentication नहीं", "केवल software"],
    "answer_en": "ARMv8.3 feature for pointer integrity",
    "answer_hi": "pointer integrity के लिए ARMv8.3 feature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'memory tagging'?",
    "question_hi": "'memory tagging' क्या होती है?",
    "options_en": ["ARM MTE, SPARC ADI for memory safety", "No tagging", "x86 only", "Software"],
    "options_hi": ["memory safety के लिए ARM MTE, SPARC ADI", "कोई tagging नहीं", "केवल x86", "software"],
    "answer_en": "ARM MTE, SPARC ADI for memory safety",
    "answer_hi": "memory safety के लिए ARM MTE, SPARC ADI",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'speculative execution barriers'?",
    "question_hi": "'speculative execution barriers' क्या होते हैं?",
    "options_en": ["lfence, mfence, sfence instructions", "No barriers", "Only software", "Compiler only"],
    "options_hi": ["lfence, mfence, sfence instructions", "कोई barriers नहीं", "केवल software", "केवल compiler"],
    "answer_en": "lfence, mfence, sfence instructions",
    "answer_hi": "lfence, mfence, sfence instructions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'retpoline' mitigation?",
    "question_hi": "'retpoline' mitigation क्या होती है?",
    "options_en": ["Spectre v2 mitigation using return trampolines", "No mitigation", "Only hardware", "Deprecated"],
    "options_hi": ["return trampolines का उपयोग करके Spectre v2 mitigation", "कोई mitigation नहीं", "केवल hardware", "deprecated"],
    "answer_en": "Spectre v2 mitigation using return trampolines",
    "answer_hi": "return trampolines का उपयोग करके Spectre v2 mitigation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'CET (Control-flow Enforcement Technology)'?",
    "question_hi": "'CET (Control-flow Enforcement Technology)' क्या होती है?",
    "options_en": ["Intel hardware CFI features", "AMD only", "Software only", "No CET"],
    "options_hi": ["Intel hardware CFI features", "केवल AMD", "केवल software", "कोई CET नहीं"],
    "answer_en": "Intel hardware CFI features",
    "answer_hi": "Intel hardware CFI features",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'IBT (Indirect Branch Tracking)'?",
    "question_hi": "'IBT (Indirect Branch Tracking)' क्या होती है?",
    "options_en": ["CET component for indirect call protection", "Direct calls", "No IBT", "Software"],
    "options_hi": ["indirect call protection के लिए CET component", "direct calls", "कोई IBT नहीं", "software"],
    "answer_en": "CET component for indirect call protection",
    "answer_hi": "indirect call protection के लिए CET component",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'SHSTK (Shadow Stack)'?",
    "question_hi": "'SHSTK (Shadow Stack)' क्या होती है?",
    "options_en": ["CET component for return address protection", "No shadow", "Main stack", "Heap"],
    "options_hi": ["return address protection के लिए CET component", "कोई shadow नहीं", "main stack", "heap"],
    "answer_en": "CET component for return address protection",
    "answer_hi": "return address protection के लिए CET component",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'memory protection keys'?",
    "question_hi": "'memory protection keys' क्या होते हैं?",
    "options_en": ["MPK/PKU for fast memory protection changes", "No keys", "Slow changes", "Software"],
    "options_hi": ["fast memory protection changes के लिए MPK/PKU", "कोई keys नहीं", "slow changes", "software"],
    "answer_en": "MPK/PKU for fast memory protection changes",
    "answer_hi": "fast memory protection changes के लिए MPK/PKU",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'execute-only memory'?",
    "question_hi": "'execute-only memory' क्या होती है?",
    "options_en": ["Memory that can execute but not read/write", "Read/write/execute", "No execute", "Read-only"],
    "options_hi": ["वह memory जो execute कर सकती है लेकिन read/write नहीं", "read/write/execute", "कोई execute नहीं", "read-only"],
    "answer_en": "Memory that can execute but not read/write",
    "answer_hi": "वह memory जो execute कर सकती है लेकिन read/write नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'W^X (Write XOR Execute)'?",
    "question_hi": "'W^X (Write XOR Execute)' क्या होता है?",
    "options_en": ["Memory cannot be writable and executable simultaneously", "Can be both", "No protection", "Hardware only"],
    "options_hi": ["memory simultaneously writable और executable नहीं हो सकती", "दोनों हो सकती है", "कोई protection नहीं", "केवल hardware"],
    "answer_en": "Memory cannot be writable and executable simultaneously",
    "answer_hi": "memory simultaneously writable और executable नहीं हो सकती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'code signing' requirement?",
    "question_hi": "'code signing' requirement क्या होती है?",
    "options_en": ["Digital signature for code authenticity", "No signing", "Optional", "Compiler"],
    "options_hi": ["code authenticity के लिए digital signature", "कोई signing नहीं", "optional", "compiler"],
    "answer_en": "Digital signature for code authenticity",
    "answer_hi": "code authenticity के लिए digital signature",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'authenticode'?",
    "question_hi": "'authenticode' क्या होता है?",
    "options_en": ["Microsoft code signing technology", "Linux only", "No signing", "Deprecated"],
    "options_hi": ["Microsoft code signing technology", "केवल Linux", "कोई signing नहीं", "deprecated"],
    "answer_en": "Microsoft code signing technology",
    "answer_hi": "Microsoft code signing technology",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'deterministic builds'?",
    "question_hi": "'deterministic builds' क्या होते हैं?",
    "options_en": ["Builds that produce identical output every time", "Random", "Non-deterministic", "Runtime"],
    "options_hi": ["वह builds जो हर बार identical output produce करते हैं", "random", "non-deterministic", "runtime"],
    "answer_en": "Builds that produce identical output every time",
    "answer_hi": "वह builds जो हर बार identical output produce करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'build ID'?",
    "question_hi": "'build ID' क्या होता है?",
    "options_en": ["Unique identifier embedded in binary", "No ID", "Random", "Compiler version"],
    "options_hi": ["binary में embedded unique identifier", "कोई ID नहीं", "random", "compiler version"],
    "answer_en": "Unique identifier embedded in binary",
    "answer_hi": "binary में embedded unique identifier",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'debug information compression'?",
    "question_hi": "'debug information compression' क्या होती है?",
    "options_en": ["Compresses debug sections to reduce size", "No compression", "Increases size", "No debug info"],
    "options_hi": ["size reduce करने के लिए debug sections compress करती है", "कोई compression नहीं", "size increase करती है", "कोई debug info नहीं"],
    "answer_en": "Compresses debug sections to reduce size",
    "answer_hi": "size reduce करने के लिए debug sections compress करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'split debug info'?",
    "question_hi": "'split debug info' क्या होती है?",
    "options_en": ["Debug info in separate file (.debug)", "In executable", "No debug", "Compressed"],
    "options_hi": ["separate file (.debug) में debug info", "executable में", "कोई debug नहीं", "compressed"],
    "answer_en": "Debug info in separate file (.debug)",
    "answer_hi": "separate file (.debug) में debug info",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'dwarf debug format' versions?",
    "question_hi": "'dwarf debug format' versions क्या होते हैं?",
    "options_en": ["DWARF 2, 3, 4, 5 (latest)", "Only DWARF 2", "No versions", "Stable"],
    "options_hi": ["DWARF 2, 3, 4, 5 (latest)", "केवल DWARF 2", "कोई versions नहीं", "stable"],
    "answer_en": "DWARF 2, 3, 4, 5 (latest)",
    "answer_hi": "DWARF 2, 3, 4, 5 (latest)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'CTF (Compact Type Format)'?",
    "question_hi": "'CTF (Compact Type Format)' क्या होता है?",
    "options_en": ["Compact debug info format used in Solaris/FreeBSD", "Linux only", "No CTF", "Deprecated"],
    "options_hi": ["Solaris/FreeBSD में उपयोग compact debug info format", "केवल Linux", "कोई CTF नहीं", "deprecated"],
    "answer_en": "Compact debug info format used in Solaris/FreeBSD",
    "answer_hi": "Solaris/FreeBSD में उपयोग compact debug info format",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'BTF (BPF Type Format)'?",
    "question_hi": "'BTF (BPF Type Format)' क्या होता है?",
    "options_en": ["Debug info for BPF in Linux", "Windows only", "No BTF", "Deprecated"],
    "options_hi": ["Linux में BPF के लिए debug info", "केवल Windows", "कोई BTF नहीं", "deprecated"],
    "answer_en": "Debug info for BPF in Linux",
    "answer_hi": "Linux में BPF के लिए debug info",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'linker map file'?",
    "question_hi": "'linker map file' क्या होती है?",
    "options_en": ["Text file showing memory layout and symbols", "Binary file", "No map", "Source file"],
    "options_hi": ["memory layout और symbols दिखाने वाली text file", "binary file", "कोई map नहीं", "source file"],
    "answer_en": "Text file showing memory layout and symbols",
    "answer_hi": "memory layout और symbols दिखाने वाली text file",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'nm tool' output?",
    "question_hi": "'nm tool' output क्या होता है?",
    "options_en": ["Lists symbols from object files", "No output", "Binary data", "Source code"],
    "options_hi": ["object files से symbols list करता है", "कोई output नहीं", "binary data", "source code"],
    "answer_en": "Lists symbols from object files",
    "answer_hi": "object files से symbols list करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'objdump tool'?",
    "question_hi": "'objdump tool' क्या होता है?",
    "options_en": ["Disassembler and object file analyzer", "Compiler", "Linker", "Debugger"],
    "options_hi": ["disassembler और object file analyzer", "compiler", "linker", "debugger"],
    "answer_en": "Disassembler and object file analyzer",
    "answer_hi": "disassembler और object file analyzer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'readelf tool'?",
    "question_hi": "'readelf tool' क्या होता है?",
    "options_en": ["ELF file analyzer", "PE file", "Mach-O", "COFF"],
    "options_hi": ["ELF file analyzer", "PE file", "Mach-O", "COFF"],
    "answer_en": "ELF file analyzer",
    "answer_hi": "ELF file analyzer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'strip tool'?",
    "question_hi": "'strip tool' क्या होता है?",
    "options_en": ["Removes debug/symbol information", "Adds symbols", "No effect", "Compresses"],
    "options_hi": ["debug/symbol information remove करता है", "symbols add करता है", "कोई effect नहीं", "compresses"],
    "answer_en": "Removes debug/symbol information",
    "answer_hi": "debug/symbol information remove करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'size tool' output?",
    "question_hi": "'size tool' output क्या होता है?",
    "options_en": ["Shows section sizes of object/executable", "No output", "Symbol sizes", "Line count"],
    "options_hi": ["object/executable के section sizes दिखाता है", "कोई output नहीं", "symbol sizes", "line count"],
    "answer_en": "Shows section sizes of object/executable",
    "answer_hi": "object/executable के section sizes दिखाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'strings tool'?",
    "question_hi": "'strings tool' क्या होता है?",
    "options_en": ["Extracts printable strings from binary", "Binary data", "No strings", "Compiles"],
    "options_hi": ["binary से printable strings extract करता है", "binary data", "कोई strings नहीं", "compiles"],
    "answer_en": "Extracts printable strings from binary",
    "answer_hi": "binary से printable strings extract करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'file tool' output?",
    "question_hi": "'file tool' output क्या होता है?",
    "options_en": ["Identifies file type (ELF, PE, etc.)", "No identification", "Content", "Size"],
    "options_hi": ["file type identify करता है (ELF, PE, आदि)", "कोई identification नहीं", "content", "size"],
    "answer_en": "Identifies file type (ELF, PE, etc.)",
    "answer_hi": "file type identify करता है (ELF, PE, आदि)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'ldd tool'?",
    "question_hi": "'ldd tool' क्या होता है?",
    "options_en": ["Lists dynamic dependencies of executable", "Static deps", "No deps", "Builds"],
    "options_hi": ["executable के dynamic dependencies list करता है", "static deps", "कोई deps नहीं", "builds"],
    "answer_en": "Lists dynamic dependencies of executable",
    "answer_hi": "executable के dynamic dependencies list करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'patchelf tool'?",
    "question_hi": "'patchelf tool' क्या होता है?",
    "options_en": ["Modifies ELF headers/rpaths", "Creates ELF", "No modification", "Compiles"],
    "options_hi": ["ELF headers/rpaths modify करता है", "ELF create करता है", "कोई modification नहीं", "compiles"],
    "answer_en": "Modifies ELF headers/rpaths",
    "answer_hi": "ELF headers/rpaths modify करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'chrpath tool'?",
    "question_hi": "'chrpath tool' क्या होता है?",
    "options_en": ["Changes RPATH/RUNPATH in ELF files", "No change", "Creates paths", "Removes ELF"],
    "options_hi": ["ELF files में RPATH/RUNPATH change करता है", "कोई change नहीं", "paths create करता है", "ELF remove करता है"],
    "answer_en": "Changes RPATH/RUNPATH in ELF files",
    "answer_hi": "ELF files में RPATH/RUNPATH change करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'RPATH vs RUNPATH'?",
    "question_hi": "'RPATH vs RUNPATH' में क्या अंतर है?",
    "options_en": ["RPATH: affects transitive deps, RUNPATH: only immediate", "Same", "Reverse", "No difference"],
    "options_hi": ["RPATH: transitive deps affect करता है, RUNPATH: केवल immediate", "समान", "reverse", "कोई अंतर नहीं"],
    "answer_en": "RPATH: affects transitive deps, RUNPATH: only immediate",
    "answer_hi": "RPATH: transitive deps affect करता है, RUNPATH: केवल immediate",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is '$ORIGIN' in rpath?",
    "question_hi": "rpath में '$ORIGIN' क्या होता है?",
    "options_en": ["Expands to directory of executable", "Literal string", "No expansion", "Compiler dir"],
    "options_hi": ["executable के directory में expand होता है", "literal string", "कोई expansion नहीं", "compiler dir"],
    "answer_en": "Expands to directory of executable",
    "answer_hi": "executable के directory में expand होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'soname'?",
    "question_hi": "'soname' क्या होता है?",
    "options_en": ["Shared object name embedded in .so file", "No soname", "Executable name", "Compiler name"],
    "options_hi": [".so file में embedded shared object name", "कोई soname नहीं", "executable name", "compiler name"],
    "answer_en": "Shared object name embedded in .so file",
    "answer_hi": ".so file में embedded shared object name",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'version script' for linking?",
    "question_hi": "linking के लिए 'version script' क्या होता है?",
    "options_en": ["Controls symbol versioning in shared libraries", "No versioning", "Source script", "Compiler script"],
    "options_hi": ["shared libraries में symbol versioning control करता है", "कोई versioning नहीं", "source script", "compiler script"],
    "answer_en": "Controls symbol versioning in shared libraries",
    "answer_hi": "shared libraries में symbol versioning control करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'symbol versioning'?",
    "question_hi": "'symbol versioning' क्या होती है?",
    "options_en": ["Multiple versions of same symbol in library", "Single version", "No versioning", "Compiler feature"],
    "options_hi": ["library में same symbol के multiple versions", "single version", "कोई versioning नहीं", "compiler feature"],
    "answer_en": "Multiple versions of same symbol in library",
    "answer_hi": "library में same symbol के multiple versions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'GLIBC_2.2.5' etc.?",
    "question_hi": "'GLIBC_2.2.5' आदि क्या होते हैं?",
    "options_en": ["Symbol version tags in glibc", "Compiler versions", "No meaning", "Random"],
    "options_hi": ["glibc में symbol version tags", "compiler versions", "कोई meaning नहीं", "random"],
    "answer_en": "Symbol version tags in glibc",
    "answer_hi": "glibc में symbol version tags",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'compatibility symbol'?",
    "question_hi": "'compatibility symbol' क्या होता है?",
    "options_en": ["Old symbol version for backward compatibility", "New only", "No compatibility", "Error"],
    "options_hi": ["backward compatibility के लिए old symbol version", "केवल new", "कोई compatibility नहीं", "error"],
    "answer_en": "Old symbol version for backward compatibility",
    "answer_hi": "backward compatibility के लिए old symbol version",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'default version symbol'?",
    "question_hi": "'default version symbol' क्या होता है?",
    "options_en": ["Symbol used when no specific version requested", "No default", "Always specific", "Random"],
    "options_hi": ["वह symbol जब कोई specific version request नहीं की गई", "कोई default नहीं", "हमेशा specific", "random"],
    "answer_en": "Symbol used when no specific version requested",
    "answer_hi": "वह symbol जब कोई specific version request नहीं की गई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'linker plugin' for LTO?",
    "question_hi": "LTO के लिए 'linker plugin' क्या होता है?",
    "options_en": ["Communicates between compiler and linker for LTO", "No plugin", "Standalone", "Compiler only"],
    "options_hi": ["LTO के लिए compiler और linker के बीच communicate करता है", "कोई plugin नहीं", "standalone", "केवल compiler"],
    "answer_en": "Communicates between compiler and linker for LTO",
    "answer_hi": "LTO के लिए compiler और linker के बीच communicate करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'IR (Intermediate Representation) in LTO'?",
    "question_hi": "LTO में 'IR (Intermediate Representation)' क्या होती है?",
    "options_en": ["Compiler internal representation stored in .o files", "Machine code", "Source code", "Assembly"],
    "options_hi": [".o files में stored compiler internal representation", "machine code", "source code", "assembly"],
    "answer_en": "Compiler internal representation stored in .o files",
    "answer_hi": ".o files में stored compiler internal representation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'GIMPLE' in GCC?",
    "question_hi": "GCC में 'GIMPLE' क्या होती है?",
    "options_en": ["GCC's intermediate representation", "Machine code", "Source", "Assembly"],
    "options_hi": ["GCC की intermediate representation", "machine code", "source", "assembly"],
    "answer_en": "GCC's intermediate representation",
    "answer_hi": "GCC की intermediate representation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'LLVM IR'?",
    "question_hi": "'LLVM IR' क्या होती है?",
    "options_en": ["LLVM's intermediate representation", "GCC only", "No IR", "Machine code"],
    "options_hi": ["LLVM की intermediate representation", "केवल GCC", "कोई IR नहीं", "machine code"],
    "answer_en": "LLVM's intermediate representation",
    "answer_hi": "LLVM की intermediate representation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'bitcode' in LLVM?",
    "question_hi": "LLVM में 'bitcode' क्या होती है?",
    "options_en": ["Binary form of LLVM IR", "Text IR", "Machine code", "Source"],
    "options_hi": ["LLVM IR का binary form", "text IR", "machine code", "source"],
    "answer_en": "Binary form of LLVM IR",
    "answer_hi": "LLVM IR का binary form",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is '.bc file'?",
    "question_hi": "'.bc file' क्या होती है?",
    "options_en": ["LLVM bitcode file", "Object file", "Source file", "Assembly"],
    "options_hi": ["LLVM bitcode file", "object file", "source file", "assembly"],
    "answer_en": "LLVM bitcode file",
    "answer_hi": "LLVM bitcode file",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is '.ll file'?",
    "question_hi": "'.ll file' क्या होती है?",
    "options_en": ["LLVM IR text file", "Bitcode", "Object", "Source"],
    "options_hi": ["LLVM IR text file", "bitcode", "object", "source"],
    "answer_en": "LLVM IR text file",
    "answer_hi": "LLVM IR text file",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'opt tool' in LLVM?",
    "question_hi": "LLVM में 'opt tool' क्या होता है?",
    "options_en": ["LLVM optimizer for IR", "Linker", "Compiler", "Assembler"],
    "options_hi": ["IR के लिए LLVM optimizer", "linker", "compiler", "assembler"],
    "answer_en": "LLVM optimizer for IR",
    "answer_hi": "IR के लिए LLVM optimizer",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'llc tool' in LLVM?",
    "question_hi": "LLVM में 'llc tool' क्या होता है?",
    "options_en": ["LLVM static compiler (IR to assembly)", "Linker", "Optimizer", "Disassembler"],
    "options_hi": ["LLVM static compiler (IR से assembly)", "linker", "optimizer", "disassembler"],
    "answer_en": "LLVM static compiler (IR to assembly)",
    "answer_hi": "LLVM static compiler (IR से assembly)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'lli tool' in LLVM?",
    "question_hi": "LLVM में 'lli tool' क्या होता है?",
    "options_en": ["LLVM IR interpreter/JIT", "Compiler", "Linker", "Assembler"],
    "options_hi": ["LLVM IR interpreter/JIT", "compiler", "linker", "assembler"],
    "answer_en": "LLVM IR interpreter/JIT",
    "answer_hi": "LLVM IR interpreter/JIT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'MC layer' in LLVM?",
    "question_hi": "LLVM में 'MC layer' क्या होता है?",
    "options_en": ["Machine Code layer (assembly/object code)", "IR layer", "Source", "Linker"],
    "options_hi": ["Machine Code layer (assembly/object code)", "IR layer", "source", "linker"],
    "answer_en": "Machine Code layer (assembly/object code)",
    "answer_hi": "Machine Code layer (assembly/object code)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'JIT compilation' in LLVM?",
    "question_hi": "LLVM में 'JIT compilation' क्या होती है?",
    "options_en": ["Just-In-Time compilation using MCJIT/ORC", "AOT only", "No JIT", "Interpreter"],
    "options_hi": ["MCJIT/ORC का उपयोग करके Just-In-Time compilation", "केवल AOT", "कोई JIT नहीं", "interpreter"],
    "answer_en": "Just-In-Time compilation using MCJIT/ORC",
    "answer_hi": "MCJIT/ORC का उपयोग करके Just-In-Time compilation",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'ORC JIT'?",
    "question_hi": "'ORC JIT' क्या होता है?",
    "options_en": ["On-Request Compilation JIT in LLVM", "Old JIT", "No JIT", "MCJIT only"],
    "options_hi": ["LLVM में On-Request Compilation JIT", "old JIT", "कोई JIT नहीं", "केवल MCJIT"],
    "answer_en": "On-Request Compilation JIT in LLVM",
    "answer_hi": "LLVM में On-Request Compilation JIT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'MCJIT'?",
    "question_hi": "'MCJIT' क्या होता है?",
    "options_en": ["Machine Code JIT in LLVM", "IR JIT", "No JIT", "Deprecated"],
    "options_hi": ["LLVM में Machine Code JIT", "IR JIT", "कोई JIT नहीं", "deprecated"],
    "answer_en": "Machine Code JIT in LLVM",
    "answer_hi": "LLVM में Machine Code JIT",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'libclang'?",
    "question_hi": "'libclang' क्या होता है?",
    "options_en": ["C interface to Clang for tools", "Compiler", "Linker", "Debugger"],
    "options_hi": ["tools के लिए Clang का C interface", "compiler", "linker", "debugger"],
    "answer_en": "C interface to Clang for tools",
    "answer_hi": "tools के लिए Clang का C interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'libTooling'?",
    "question_hi": "'libTooling' क्या होता है?",
    "options_en": ["C++ API for Clang tools", "C API", "No API", "Deprecated"],
    "options_hi": ["Clang tools के लिए C++ API", "C API", "कोई API नहीं", "deprecated"],
    "answer_en": "C++ API for Clang tools",
    "answer_hi": "Clang tools के लिए C++ API",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'clang-format'?",
    "question_hi": "'clang-format' क्या होता है?",
    "options_en": ["Code formatting tool", "Compiler", "Linker", "Debugger"],
    "options_hi": ["code formatting tool", "compiler", "linker", "debugger"],
    "answer_en": "Code formatting tool",
    "answer_hi": "code formatting tool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'clang-tidy'?",
    "question_hi": "'clang-tidy' क्या होता है?",
    "options_en": ["Static analysis and linting tool", "Compiler", "Linker", "Formatter"],
    "options_hi": ["static analysis और linting tool", "compiler", "linker", "formatter"],
    "answer_en": "Static analysis and linting tool",
    "answer_hi": "static analysis और linting tool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'scan-build'?",
    "question_hi": "'scan-build' क्या होता है?",
    "options_en": ["Static analyzer wrapper for build process", "Compiler", "Linker", "Debugger"],
    "options_hi": ["build process के लिए static analyzer wrapper", "compiler", "linker", "debugger"],
    "answer_en": "Static analyzer wrapper for build process",
    "answer_hi": "build process के लिए static analyzer wrapper",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'include-what-you-use'?",
    "question_hi": "'include-what-you-use' क्या होता है?",
    "options_en": ["Tool to optimize #includes", "Compiler", "Linker", "Debugger"],
    "options_hi": ["#includes optimize करने का tool", "compiler", "linker", "debugger"],
    "answer_en": "Tool to optimize #includes",
    "answer_hi": "#includes optimize करने का tool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'cscope'?",
    "question_hi": "'cscope' क्या होता है?",
    "options_en": ["Code browsing tool", "Compiler", "Linker", "Debugger"],
    "options_hi": ["code browsing tool", "compiler", "linker", "debugger"],
    "answer_en": "Code browsing tool",
    "answer_hi": "code browsing tool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'ctags'?",
    "question_hi": "'ctags' क्या होता है?",
    "options_en": ["Tag generator for code navigation", "Compiler", "Linker", "Debugger"],
    "options_hi": ["code navigation के लिए tag generator", "compiler", "linker", "debugger"],
    "answer_en": "Tag generator for code navigation",
    "answer_hi": "code navigation के लिए tag generator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'GDB Python API'?",
    "question_hi": "'GDB Python API' क्या होता है?",
    "options_en": ["Python scripting interface to GDB", "C API", "No API", "Deprecated"],
    "options_hi": ["GDB का Python scripting interface", "C API", "कोई API नहीं", "deprecated"],
    "answer_en": "Python scripting interface to GDB",
    "answer_hi": "GDB का Python scripting interface",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'reverse debugging'?",
    "question_hi": "'reverse debugging' क्या होती है?",
    "options_en": ["Debug backward in time (record/replay)", "Forward only", "No debugging", "Simple"],
    "options_hi": ["time में backward debug करना (record/replay)", "केवल forward", "कोई debugging नहीं", "simple"],
    "answer_en": "Debug backward in time (record/replay)",
    "answer_hi": "time में backward debug करना (record/replay)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'RR (Record and Replay)'?",
    "question_hi": "'RR (Record and Replay)' क्या होता है?",
    "options_en": ["Linux reverse debugging tool", "Windows only", "No such tool", "Compiler"],
    "options_hi": ["Linux reverse debugging tool", "केवल Windows", "ऐसा कोई tool नहीं", "compiler"],
    "answer_en": "Linux reverse debugging tool",
    "answer_hi": "Linux reverse debugging tool",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'UndoDB'?",
    "question_hi": "'UndoDB' क्या होता है?",
    "options_en": ["Commercial reverse debugger", "Free tool", "Compiler", "Linker"],
    "options_hi": ["commercial reverse debugger", "free tool", "compiler", "linker"],
    "answer_en": "Commercial reverse debugger",
    "answer_hi": "commercial reverse debugger",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'time-travel debugging'?",
    "question_hi": "'time-travel debugging' क्या होती है?",
    "options_en": ["Debugging with ability to go forward/backward in time", "Forward only", "No debugging", "Simple"],
    "options_hi": ["time में forward/backward जाने की ability के साथ debugging", "केवल forward", "कोई debugging नहीं", "simple"],
    "answer_en": "Debugging with ability to go forward/backward in time",
    "answer_hi": "time में forward/backward जाने की ability के साथ debugging",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'post-mortem debugging'?",
    "question_hi": "'post-mortem debugging' क्या होती है?",
    "options_en": ["Debugging after crash (core dumps)", "Live debugging", "No debugging", "Preventive"],
    "options_hi": ["crash के बाद debugging (core dumps)", "live debugging", "कोई debugging नहीं", "preventive"],
    "answer_en": "Debugging after crash (core dumps)",
    "answer_hi": "crash के बाद debugging (core dumps)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'live debugging'?",
    "question_hi": "'live debugging' क्या होती है?",
    "options_en": ["Debugging running process", "After crash", "No debugging", "Static analysis"],
    "options_hi": ["running process की debugging", "crash के बाद", "कोई debugging नहीं", "static analysis"],
    "answer_en": "Debugging running process",
    "answer_hi": "running process की debugging",
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