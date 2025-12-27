const questions = [
  {
    "num": 1,
    "question_en": "What is the output of: printf(\"%d\", sizeof('A'));",
    "question_hi": "printf(\"%d\", sizeof('A')); का आउटपुट क्या होगा?",
    "options_en": ["1", "2", "4", "Depends on compiler"],
    "options_hi": ["1", "2", "4", "कंपाइलर पर निर्भर"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "Which operator has the highest precedence in C?",
    "question_hi": "C में किस operator की precedence सबसे अधिक होती है?",
    "options_en": ["++ (postfix)", "() parentheses", "* multiplication", "= assignment"],
    "options_hi": ["++ (postfix)", "() कोष्ठक", "* गुणा", "= असाइनमेंट"],
    "answer_en": "() parentheses",
    "answer_hi": "() कोष्ठक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'volatile' keyword indicate?",
    "question_hi": "'volatile' keyword क्या indicate करता है?",
    "options_en": ["Variable may change unexpectedly", "Variable is constant", "Variable is optimized", "Variable is static"],
    "options_hi": ["variable अप्रत्याशित रूप से change हो सकता है", "variable constant है", "variable optimized है", "variable static है"],
    "answer_en": "Variable may change unexpectedly",
    "answer_hi": "variable अप्रत्याशित रूप से change हो सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the range of 'unsigned char' data type?",
    "question_hi": "'unsigned char' डेटा टाइप की range क्या होती है?",
    "options_en": ["0 to 255", "-128 to 127", "0 to 65535", "-32768 to 32767"],
    "options_hi": ["0 से 255", "-128 से 127", "0 से 65535", "-32768 से 32767"],
    "answer_en": "0 to 255",
    "answer_hi": "0 से 255",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the purpose of 'strtok()' function?",
    "question_hi": "'strtok()' function का उद्देश्य क्या है?",
    "options_en": ["Tokenize a string", "Concatenate strings", "Compare strings", "Copy string"],
    "options_hi": ["string को tokenize करना", "strings concatenate करना", "strings compare करना", "string copy करना"],
    "answer_en": "Tokenize a string",
    "answer_hi": "string को tokenize करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is a 'segmentation fault' in C?",
    "question_hi": "C में 'segmentation fault' क्या होता है?",
    "options_en": ["Accessing invalid memory", "Division by zero", "Infinite loop", "Stack overflow"],
    "options_hi": ["invalid memory access करना", "शून्य से भाग देना", "infinite loop", "stack overflow"],
    "answer_en": "Accessing invalid memory",
    "answer_hi": "invalid memory access करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does 'call by reference' mean?",
    "question_hi": "'call by reference' का क्या अर्थ है?",
    "options_en": ["Passing address of variable", "Passing copy of variable", "Passing value", "Passing constant"],
    "options_hi": ["variable का address pass करना", "variable की copy pass करना", "value pass करना", "constant pass करना"],
    "answer_en": "Passing address of variable",
    "answer_hi": "variable का address pass करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the output of: int x = 5; printf(\"%d\", x++ + ++x);",
    "question_hi": "int x = 5; printf(\"%d\", x++ + ++x); का आउटपुट क्या होगा?",
    "options_en": ["11", "12", "13", "Undefined behavior"],
    "options_hi": ["11", "12", "13", "undefined behavior"],
    "answer_en": "Undefined behavior",
    "answer_hi": "undefined behavior",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is a 'memory leak' in C?",
    "question_hi": "C में 'memory leak' क्या होता है?",
    "options_en": ["Not freeing allocated memory", "Accessing freed memory", "Stack overflow", "Heap corruption"],
    "options_hi": ["allocated memory free न करना", "freed memory access करना", "stack overflow", "heap corruption"],
    "answer_en": "Not freeing allocated memory",
    "answer_hi": "allocated memory free न करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does 'typedef' do in C?",
    "question_hi": "C में 'typedef' क्या करता है?",
    "options_en": ["Creates alias for data type", "Defines new variable", "Declares function", "Creates macro"],
    "options_hi": ["डेटा टाइप के लिए alias create करता है", "नया variable define करता है", "function declare करता है", "macro create करता है"],
    "answer_en": "Creates alias for data type",
    "answer_hi": "डेटा टाइप के लिए alias create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the purpose of 'realloc()' function?",
    "question_hi": "'realloc()' function का उद्देश्य क्या है?",
    "options_en": ["Resize allocated memory block", "Allocate new memory", "Free memory", "Initialize memory"],
    "options_hi": ["allocated memory block का size बदलना", "नई memory allocate करना", "memory free करना", "memory initialize करना"],
    "answer_en": "Resize allocated memory block",
    "answer_hi": "allocated memory block का size बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is a 'bit field' in structure?",
    "question_hi": "structure में 'bit field' क्या होता है?",
    "options_en": ["Member that occupies specific number of bits", "Pointer member", "Array member", "Function member"],
    "options_hi": ["वह member जो specific number of bits occupy करता है", "pointer member", "array member", "function member"],
    "answer_en": "Member that occupies specific number of bits",
    "answer_hi": "वह member जो specific number of bits occupy करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the output of: printf(\"%d\", ~0);",
    "question_hi": "printf(\"%d\", ~0); का आउटपुट क्या होगा?",
    "options_en": ["-1", "0", "1", "255"],
    "options_hi": ["-1", "0", "1", "255"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does '#pragma' directive do?",
    "question_hi": "'#pragma' directive क्या करती है?",
    "options_en": ["Implementation-specific compiler instruction", "Include header file", "Define macro", "Conditional compilation"],
    "options_hi": ["implementation-specific compiler instruction", "header file include करना", "macro define करना", "conditional compilation"],
    "answer_en": "Implementation-specific compiler instruction",
    "answer_hi": "implementation-specific compiler instruction",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'strict aliasing' rule in C?",
    "question_hi": "C में 'strict aliasing' rule क्या है?",
    "options_en": ["Pointer of one type cannot alias pointer of different type", "All pointers can alias", "Only char pointers can alias", "No such rule"],
    "options_hi": ["एक टाइप का pointer दूसरे टाइप के pointer को alias नहीं कर सकता", "सभी pointers alias कर सकते हैं", "केवल char pointers alias कर सकते हैं", "ऐसा कोई rule नहीं है"],
    "answer_en": "Pointer of one type cannot alias pointer of different type",
    "answer_hi": "एक टाइप का pointer दूसरे टाइप के pointer को alias नहीं कर सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the output of: printf(\"%d\", 7 & 4);",
    "question_hi": "printf(\"%d\", 7 & 4); का आउटपुट क्या होगा?",
    "options_en": ["4", "3", "7", "0"],
    "options_hi": ["4", "3", "7", "0"],
    "answer_en": "4",
    "answer_hi": "4",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'inline' function in C?",
    "question_hi": "C में 'inline' function क्या होता है?",
    "options_en": ["Function expanded at call site", "Recursive function", "Static function", "External function"],
    "options_hi": ["call site पर expand होने वाला function", "recursive function", "static function", "external function"],
    "answer_en": "Function expanded at call site",
    "answer_hi": "call site पर expand होने वाला function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does 'restrict' keyword do?",
    "question_hi": "'restrict' keyword क्या करता है?",
    "options_en": ["Indicates pointer is only way to access object", "Makes pointer constant", "Makes pointer volatile", "Restricts pointer arithmetic"],
    "options_hi": ["इंगित करता है कि pointer object access करने का एकमात्र तरीका है", "pointer को constant बनाता है", "pointer को volatile बनाता है", "pointer arithmetic restrict करता है"],
    "answer_en": "Indicates pointer is only way to access object",
    "answer_hi": "इंगित करता है कि pointer object access करने का एकमात्र तरीका है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'endianness' in memory?",
    "question_hi": "memory में 'endianness' क्या होती है?",
    "options_en": ["Byte ordering in memory", "Memory alignment", "Memory segmentation", "Memory paging"],
    "options_hi": ["memory में bytes का ordering", "memory alignment", "memory segmentation", "memory paging"],
    "answer_en": "Byte ordering in memory",
    "answer_hi": "memory में bytes का ordering",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the output of: printf(\"%d\", 5 << 2);",
    "question_hi": "printf(\"%d\", 5 << 2); का आउटपुट क्या होगा?",
    "options_en": ["20", "10", "7", "25"],
    "options_hi": ["20", "10", "7", "25"],
    "answer_en": "20",
    "answer_hi": "20",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is a 'function pointer array'?",
    "question_hi": "'function pointer array' क्या होता है?",
    "options_en": ["Array of pointers to functions", "Pointer to array of functions", "Array of functions", "Pointer to function"],
    "options_hi": ["functions के pointers का array", "functions के array का pointer", "functions का array", "function का pointer"],
    "answer_en": "Array of pointers to functions",
    "answer_hi": "functions के pointers का array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does 'fseek()' function do?",
    "question_hi": "'fseek()' function क्या करता है?",
    "options_en": ["Moves file position indicator", "Checks end of file", "Reads from file", "Writes to file"],
    "options_hi": ["file position indicator move करता है", "file का end check करता है", "file से read करता है", "file में write करता है"],
    "answer_en": "Moves file position indicator",
    "answer_hi": "file position indicator move करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'variable length array' (VLA) in C99?",
    "question_hi": "C99 में 'variable length array' (VLA) क्या होता है?",
    "options_en": ["Array with size determined at runtime", "Array with fixed size", "Dynamic array", "Pointer array"],
    "options_hi": ["runtime पर size determine होने वाला array", "fixed size वाला array", "dynamic array", "pointer array"],
    "answer_en": "Array with size determined at runtime",
    "answer_hi": "runtime पर size determine होने वाला array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of 'offsetof' macro?",
    "question_hi": "'offsetof' macro का उद्देश्य क्या है?",
    "options_en": ["Get byte offset of member in structure", "Get size of structure", "Get address of member", "Get pointer to member"],
    "options_hi": ["structure में member का byte offset प्राप्त करना", "structure का size प्राप्त करना", "member का address प्राप्त करना", "member का pointer प्राप्त करना"],
    "answer_en": "Get byte offset of member in structure",
    "answer_hi": "structure में member का byte offset प्राप्त करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'command line argument' in main()?",
    "question_hi": "main() में 'command line argument' क्या होता है?",
    "options_en": ["Arguments passed when program is executed", "Function arguments", "Global variables", "Environment variables"],
    "options_hi": ["program execute होते समय pass किए गए arguments", "function arguments", "global variables", "environment variables"],
    "answer_en": "Arguments passed when program is executed",
    "answer_hi": "program execute होते समय pass किए गए arguments",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does 'ftell()' function return?",
    "question_hi": "'ftell()' function क्या return करता है?",
    "options_en": ["Current file position", "File size", "File descriptor", "File pointer"],
    "options_hi": ["current file position", "file size", "file descriptor", "file pointer"],
    "answer_en": "Current file position",
    "answer_hi": "current file position",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'structure padding'?",
    "question_hi": "'structure padding' क्या होता है?",
    "options_en": ["Extra bytes added for alignment", "Removing bytes from structure", "Compressing structure", "Encrypting structure"],
    "options_hi": ["alignment के लिए extra bytes add करना", "structure से bytes remove करना", "structure compress करना", "structure encrypt करना"],
    "answer_en": "Extra bytes added for alignment",
    "answer_hi": "alignment के लिए extra bytes add करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the output of: printf(\"%d\", 10 | 5);",
    "question_hi": "printf(\"%d\", 10 | 5); का आउटपुट क्या होगा?",
    "options_en": ["15", "10", "5", "0"],
    "options_hi": ["15", "10", "5", "0"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'linker' in C compilation process?",
    "question_hi": "C compilation process में 'linker' क्या होता है?",
    "options_en": ["Combines object files into executable", "Compiles source code", "Preprocesses code", "Optimizes code"],
    "options_hi": ["object files को executable में combine करता है", "source code compile करता है", "code preprocess करता है", "code optimize करता है"],
    "answer_en": "Combines object files into executable",
    "answer_hi": "object files को executable में combine करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does 'assert()' macro do?",
    "question_hi": "'assert()' macro क्या करता है?",
    "options_en": ["Tests assertion and aborts if false", "Prints debug message", "Checks memory allocation", "Validates input"],
    "options_hi": ["assertion test करता है और false होने पर abort करता है", "debug message print करता है", "memory allocation check करता है", "input validate करता है"],
    "answer_en": "Tests assertion and aborts if false",
    "answer_hi": "assertion test करता है और false होने पर abort करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'compound literal' in C99?",
    "question_hi": "C99 में 'compound literal' क्या होता है?",
    "options_en": ["Unnamed object created in expression", "Named constant", "Variable declaration", "Function literal"],
    "options_hi": ["expression में create किया गया unnamed object", "named constant", "variable declaration", "function literal"],
    "answer_en": "Unnamed object created in expression",
    "answer_hi": "expression में create किया गया unnamed object",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What does 'setjmp()' and 'longjmp()' do?",
    "question_hi": "'setjmp()' और 'longjmp()' क्या करते हैं?",
    "options_en": ["Non-local jumps in program", "Memory allocation", "File operations", "Signal handling"],
    "options_hi": ["program में non-local jumps", "memory allocation", "file operations", "signal handling"],
    "answer_en": "Non-local jumps in program",
    "answer_hi": "program में non-local jumps",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'strict prototyping' in function declaration?",
    "question_hi": "function declaration में 'strict prototyping' क्या होता है?",
    "options_en": ["Function with specified parameter types", "Function without parameters", "Function with void parameters", "Function prototype"],
    "options_hi": ["specified parameter types वाला function", "बिना parameters वाला function", "void parameters वाला function", "function prototype"],
    "answer_en": "Function with specified parameter types",
    "answer_hi": "specified parameter types वाला function",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the output of: printf(\"%d\", 10 ^ 5);",
    "question_hi": "printf(\"%d\", 10 ^ 5); का आउटपुट क्या होगा?",
    "options_en": ["15", "10", "5", "0"],
    "options_hi": ["15", "10", "5", "0"],
    "answer_en": "15",
    "answer_hi": "15",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'designated initializer' in C99?",
    "question_hi": "C99 में 'designated initializer' क्या होता है?",
    "options_en": ["Initializing specific array elements or structure members", "Initializing all elements", "Default initialization", "Zero initialization"],
    "options_hi": ["specific array elements या structure members initialize करना", "सभी elements initialize करना", "default initialization", "zero initialization"],
    "answer_en": "Initializing specific array elements or structure members",
    "answer_hi": "specific array elements या structure members initialize करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What does 'va_start', 'va_arg', 'va_end' macros do?",
    "question_hi": "'va_start', 'va_arg', 'va_end' macros क्या करते हैं?",
    "options_en": ["Handle variable arguments in functions", "Handle fixed arguments", "Handle pointers", "Handle arrays"],
    "options_hi": ["functions में variable arguments handle करना", "fixed arguments handle करना", "pointers handle करना", "arrays handle करना"],
    "answer_en": "Handle variable arguments in functions",
    "answer_hi": "functions में variable arguments handle करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'type punning' in C?",
    "question_hi": "C में 'type punning' क्या होता है?",
    "options_en": ["Accessing object as different type using pointer", "Type conversion", "Type casting", "Type checking"],
    "options_hi": ["pointer का उपयोग करके object को different type के रूप में access करना", "type conversion", "type casting", "type checking"],
    "answer_en": "Accessing object as different type using pointer",
    "answer_hi": "pointer का उपयोग करके object को different type के रूप में access करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'memory alignment'?",
    "question_hi": "'memory alignment' क्या होता है?",
    "options_en": ["Data stored at addresses divisible by their size", "Random memory allocation", "Sequential memory allocation", "Heap allocation"],
    "options_hi": ["डेटा को उनके size से divisible addresses पर store करना", "random memory allocation", "sequential memory allocation", "heap allocation"],
    "answer_en": "Data stored at addresses divisible by their size",
    "answer_hi": "डेटा को उनके size से divisible addresses पर store करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the output of: printf(\"%d\", 10 >> 1);",
    "question_hi": "printf(\"%d\", 10 >> 1); का आउटपुट क्या होगा?",
    "options_en": ["5", "10", "20", "1"],
    "options_hi": ["5", "10", "20", "1"],
    "answer_en": "5",
    "answer_hi": "5",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'flexible array member' in C99?",
    "question_hi": "C99 में 'flexible array member' क्या होता है?",
    "options_en": ["Array without specified size as last member of structure", "Dynamic array", "Variable length array", "Pointer array"],
    "options_hi": ["structure के last member के रूप में unspecified size वाला array", "dynamic array", "variable length array", "pointer array"],
    "answer_en": "Array without specified size as last member of structure",
    "answer_hi": "structure के last member के रूप में unspecified size वाला array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does 'fread()' function return?",
    "question_hi": "'fread()' function क्या return करता है?",
    "options_en": ["Number of items successfully read", "File pointer", "File size", "Error code"],
    "options_hi": ["successfully read किए गए items की संख्या", "file pointer", "file size", "error code"],
    "answer_en": "Number of items successfully read",
    "answer_hi": "successfully read किए गए items की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'integer promotion' in C?",
    "question_hi": "C में 'integer promotion' क्या होता है?",
    "options_en": ["Small integer types promoted to int in expressions", "int promoted to long", "float promoted to double", "char promoted to int"],
    "options_hi": ["expressions में small integer types का int में promotion", "int का long में promotion", "float का double में promotion", "char का int में promotion"],
    "answer_en": "Small integer types promoted to int in expressions",
    "answer_hi": "expressions में small integer types का int में promotion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'dead code elimination'?",
    "question_hi": "'dead code elimination' क्या होती है?",
    "options_en": ["Compiler optimization removing unreachable code", "Removing comments", "Removing unused variables", "Code obfuscation"],
    "options_hi": ["compiler optimization जो unreachable code remove करती है", "comments remove करना", "unused variables remove करना", "code obfuscation"],
    "answer_en": "Compiler optimization removing unreachable code",
    "answer_hi": "compiler optimization जो unreachable code remove करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'pointer to array' vs 'array of pointers'?",
    "question_hi": "'pointer to array' और 'array of pointers' में क्या अंतर है?",
    "options_en": ["Pointer to whole array vs array of individual pointers", "Same thing", "Different syntax", "Memory allocation difference"],
    "options_hi": ["पूरे array का pointer बनाम individual pointers का array", "एक ही चीज़", "अलग syntax", "memory allocation का अंतर"],
    "answer_en": "Pointer to whole array vs array of individual pointers",
    "answer_hi": "पूरे array का pointer बनाम individual pointers का array",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What does 'fprintf()' function do?",
    "question_hi": "'fprintf()' function क्या करता है?",
    "options_en": ["Formatted output to file", "Formatted input from file", "Formatted output to stdout", "Formatted input from stdin"],
    "options_hi": ["file में formatted output", "file से formatted input", "stdout में formatted output", "stdin से formatted input"],
    "answer_en": "Formatted output to file",
    "answer_hi": "file में formatted output",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'aliasing' in pointers?",
    "question_hi": "pointers में 'aliasing' क्या होता है?",
    "options_en": ["Multiple pointers referring to same memory", "Pointers to different memory", "Null pointers", "Dangling pointers"],
    "options_hi": ["एक ही memory को refer करने वाले multiple pointers", "अलग memory के pointers", "null pointers", "dangling pointers"],
    "answer_en": "Multiple pointers referring to same memory",
    "answer_hi": "एक ही memory को refer करने वाले multiple pointers",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'constant expression' in C?",
    "question_hi": "C में 'constant expression' क्या होता है?",
    "options_en": ["Expression that can be evaluated at compile time", "Expression with variables", "Runtime expression", "Function call"],
    "options_hi": ["compile time पर evaluate किया जा सकने वाला expression", "variables वाला expression", "runtime expression", "function call"],
    "answer_en": "Expression that can be evaluated at compile time",
    "answer_hi": "compile time पर evaluate किया जा सकने वाला expression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'forward declaration'?",
    "question_hi": "'forward declaration' क्या होती है?",
    "options_en": ["Declaring identifier before its definition", "Function definition", "Variable definition", "Complete declaration"],
    "options_hi": ["identifier को उसकी definition से पहले declare करना", "function definition", "variable definition", "complete declaration"],
    "answer_en": "Declaring identifier before its definition",
    "answer_hi": "identifier को उसकी definition से पहले declare करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What does 'remove()' function do?",
    "question_hi": "'remove()' function क्या करता है?",
    "options_en": ["Deletes a file", "Renames a file", "Copies a file", "Moves a file"],
    "options_hi": ["file delete करता है", "file rename करता है", "file copy करता है", "file move करता है"],
    "answer_en": "Deletes a file",
    "answer_hi": "file delete करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'static assertion' in C11?",
    "question_hi": "C11 में 'static assertion' क्या होता है?",
    "options_en": ["Compile-time assertion using _Static_assert", "Runtime assertion", "Debug assertion", "Dynamic assertion"],
    "options_hi": ["_Static_assert का उपयोग करके compile-time assertion", "runtime assertion", "debug assertion", "dynamic assertion"],
    "answer_en": "Compile-time assertion using _Static_assert",
    "answer_hi": "_Static_assert का उपयोग करके compile-time assertion",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'pointer arithmetic' with void pointers?",
    "question_hi": "void pointers के साथ 'pointer arithmetic' क्या होती है?",
    "options_en": ["Not allowed in standard C", "Allowed with size 1", "Same as char pointers", "Compiler dependent"],
    "options_hi": ["standard C में allowed नहीं है", "size 1 के साथ allowed है", "char pointers के समान", "compiler dependent"],
    "answer_en": "Not allowed in standard C",
    "answer_hi": "standard C में allowed नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What does 'tmpfile()' function do?",
    "question_hi": "'tmpfile()' function क्या करता है?",
    "options_en": ["Creates temporary file", "Opens existing file", "Creates directory", "Deletes temporary file"],
    "options_hi": ["temporary file create करता है", "existing file open करता है", "directory create करता है", "temporary file delete करता है"],
    "answer_en": "Creates temporary file",
    "answer_hi": "temporary file create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'trigraph' in C?",
    "question_hi": "C में 'trigraph' क्या होता है?",
    "options_en": ["Three-character sequences for special characters", "Three pointers", "Three-dimensional array", "Ternary operator"],
    "options_hi": ["special characters के लिए three-character sequences", "तीन pointers", "three-dimensional array", "ternary operator"],
    "answer_en": "Three-character sequences for special characters",
    "answer_hi": "special characters के लिए three-character sequences",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'type qualifier' in C?",
    "question_hi": "C में 'type qualifier' क्या होता है?",
    "options_en": ["const, volatile, restrict", "int, char, float", "static, extern, register", "auto, typedef, sizeof"],
    "options_hi": ["const, volatile, restrict", "int, char, float", "static, extern, register", "auto, typedef, sizeof"],
    "answer_en": "const, volatile, restrict",
    "answer_hi": "const, volatile, restrict",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What does 'rename()' function do?",
    "question_hi": "'rename()' function क्या करता है?",
    "options_en": ["Changes name of a file", "Copies file", "Moves file", "Deletes file"],
    "options_hi": ["file का नाम change करता है", "file copy करता है", "file move करता है", "file delete करता है"],
    "answer_en": "Changes name of a file",
    "answer_hi": "file का नाम change करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'sequence point' in C?",
    "question_hi": "C में 'sequence point' क्या होता है?",
    "options_en": ["Point where all side effects are complete", "Point in program flow", "Debug point", "Breakpoint"],
    "options_hi": ["वह point जहाँ सभी side effects complete होते हैं", "program flow में point", "debug point", "breakpoint"],
    "answer_en": "Point where all side effects are complete",
    "answer_hi": "वह point जहाँ सभी side effects complete होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'complex number support' in C99?",
    "question_hi": "C99 में 'complex number support' क्या होता है?",
    "options_en": ["_Complex keyword for complex numbers", "Imaginary numbers", "Real numbers only", "No complex support"],
    "options_hi": ["complex numbers के लिए _Complex keyword", "imaginary numbers", "केवल real numbers", "कोई complex support नहीं"],
    "answer_en": "_Complex keyword for complex numbers",
    "answer_hi": "complex numbers के लिए _Complex keyword",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What does 'fflush()' function do?",
    "question_hi": "'fflush()' function क्या करता है?",
    "options_en": ["Flushes output buffer to file", "Clears input buffer", "Closes file", "Opens file"],
    "options_hi": ["output buffer को file में flush करता है", "input buffer clear करता है", "file close करता है", "file open करता है"],
    "answer_en": "Flushes output buffer to file",
    "answer_hi": "output buffer को file में flush करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'string literal pooling'?",
    "question_hi": "'string literal pooling' क्या होती है?",
    "options_en": ["Compiler optimization merging identical string literals", "String concatenation", "String splitting", "String comparison"],
    "options_hi": ["compiler optimization जो identical string literals को merge करती है", "string concatenation", "string splitting", "string comparison"],
    "answer_en": "Compiler optimization merging identical string literals",
    "answer_hi": "compiler optimization जो identical string literals को merge करती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'preprocessor concatenation operator ##'?",
    "question_hi": "'preprocessor concatenation operator ##' क्या होता है?",
    "options_en": ["Token pasting operator", "Stringizing operator", "Comment operator", "Line continuation"],
    "options_hi": ["token pasting operator", "stringizing operator", "comment operator", "line continuation"],
    "answer_en": "Token pasting operator",
    "answer_hi": "token pasting operator",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'linkage' in C?",
    "question_hi": "C में 'linkage' क्या होती है?",
    "options_en": ["How identifiers are linked across translation units", "Function linking", "Pointer linking", "Array linking"],
    "options_hi": ["identifiers translation units में कैसे link होते हैं", "function linking", "pointer linking", "array linking"],
    "answer_en": "How identifiers are linked across translation units",
    "answer_hi": "identifiers translation units में कैसे link होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What does 'perror()' function do?",
    "question_hi": "'perror()' function क्या करता है?",
    "options_en": ["Prints error message corresponding to errno", "Checks for errors", "Clears errors", "Sets error number"],
    "options_hi": ["errno के corresponding error message print करता है", "errors check करता है", "errors clear करता है", "error number set करता है"],
    "answer_en": "Prints error message corresponding to errno",
    "answer_hi": "errno के corresponding error message print करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'translation unit' in C?",
    "question_hi": "C में 'translation unit' क्या होता है?",
    "options_en": ["Source file after preprocessing", "Object file", "Executable file", "Header file"],
    "options_hi": ["preprocessing के बाद का source file", "object file", "executable file", "header file"],
    "answer_en": "Source file after preprocessing",
    "answer_hi": "preprocessing के बाद का source file",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'boolean type' in C99?",
    "question_hi": "C99 में 'boolean type' क्या होता है?",
    "options_en": ["_Bool type for boolean values", "int type for boolean", "char type for boolean", "No boolean type"],
    "options_hi": ["boolean values के लिए _Bool type", "boolean के लिए int type", "boolean के लिए char type", "कोई boolean type नहीं"],
    "answer_en": "_Bool type for boolean values",
    "answer_hi": "boolean values के लिए _Bool type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What does 'clearerr()' function do?",
    "question_hi": "'clearerr()' function क्या करता है?",
    "options_en": ["Clears error indicators for stream", "Sets error indicators", "Checks errors", "Reports errors"],
    "options_hi": ["stream के लिए error indicators clear करता है", "error indicators set करता है", "errors check करता है", "errors report करता है"],
    "answer_en": "Clears error indicators for stream",
    "answer_hi": "stream के लिए error indicators clear करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'usual arithmetic conversions'?",
    "question_hi": "'usual arithmetic conversions' क्या होती हैं?",
    "options_en": ["Automatic type conversions in expressions", "Manual type casting", "Compiler warnings", "Runtime conversions"],
    "options_hi": ["expressions में automatic type conversions", "manual type casting", "compiler warnings", "runtime conversions"],
    "answer_en": "Automatic type conversions in expressions",
    "answer_hi": "expressions में automatic type conversions",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'stringizing operator #'?",
    "question_hi": "'stringizing operator #' क्या होता है?",
    "options_en": ["Converts macro parameter to string literal", "Concatenates strings", "Creates character", "Comments code"],
    "options_hi": ["macro parameter को string literal में convert करता है", "strings concatenate करता है", "character create करता है", "code comment करता है"],
    "answer_en": "Converts macro parameter to string literal",
    "answer_hi": "macro parameter को string literal में convert करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'stack frame' or 'activation record'?",
    "question_hi": "'stack frame' या 'activation record' क्या होता है?",
    "options_en": ["Memory block for function call containing local variables", "Heap memory", "Global memory", "Static memory"],
    "options_hi": ["function call के लिए local variables contain करने वाला memory block", "heap memory", "global memory", "static memory"],
    "answer_en": "Memory block for function call containing local variables",
    "answer_hi": "function call के लिए local variables contain करने वाला memory block",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What does 'fgetpos()' function do?",
    "question_hi": "'fgetpos()' function क्या करता है?",
    "options_en": ["Gets current file position", "Sets file position", "Checks end of file", "Gets file size"],
    "options_hi": ["current file position प्राप्त करता है", "file position set करता है", "file का end check करता है", "file size प्राप्त करता है"],
    "answer_en": "Gets current file position",
    "answer_hi": "current file position प्राप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'tentative definition' in C?",
    "question_hi": "C में 'tentative definition' क्या होती है?",
    "options_en": ["External variable declaration without initializer", "Function declaration", "Variable definition with initializer", "Pointer declaration"],
    "options_hi": ["बिना initializer के external variable declaration", "function declaration", "initializer के साथ variable definition", "pointer declaration"],
    "answer_en": "External variable declaration without initializer",
    "answer_hi": "बिना initializer के external variable declaration",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'function specifier' in C?",
    "question_hi": "C में 'function specifier' क्या होता है?",
    "options_en": ["inline, _Noreturn", "static, extern", "const, volatile", "auto, register"],
    "options_hi": ["inline, _Noreturn", "static, extern", "const, volatile", "auto, register"],
    "answer_en": "inline, _Noreturn",
    "answer_hi": "inline, _Noreturn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What does 'setvbuf()' function do?",
    "question_hi": "'setvbuf()' function क्या करता है?",
    "options_en": ["Sets buffering mode for stream", "Clears buffer", "Allocates buffer", "Frees buffer"],
    "options_hi": ["stream के लिए buffering mode set करता है", "buffer clear करता है", "buffer allocate करता है", "buffer free करता है"],
    "answer_en": "Sets buffering mode for stream",
    "answer_hi": "stream के लिए buffering mode set करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'object-like macro' vs 'function-like macro'?",
    "question_hi": "'object-like macro' और 'function-like macro' में क्या अंतर है?",
    "options_en": ["Simple replacement vs macro with parameters", "Same thing", "Different syntax", "Memory usage difference"],
    "options_hi": ["simple replacement बनाम parameters वाला macro", "एक ही चीज़", "अलग syntax", "memory usage का अंतर"],
    "answer_en": "Simple replacement vs macro with parameters",
    "answer_hi": "simple replacement बनाम parameters वाला macro",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'as-if rule' in C standard?",
    "question_hi": "C standard में 'as-if rule' क्या होती है?",
    "options_en": ["Compiler can optimize as long as observable behavior is same", "No optimization allowed", "Strict optimization required", "Runtime optimization"],
    "options_hi": ["compiler optimize कर सकता है जब तक observable behavior same है", "कोई optimization allowed नहीं", "strict optimization required है", "runtime optimization"],
    "answer_en": "Compiler can optimize as long as observable behavior is same",
    "answer_hi": "compiler optimize कर सकता है जब तक observable behavior same है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What does 'ungetc()' function do?",
    "question_hi": "'ungetc()' function क्या करता है?",
    "options_en": ["Pushes character back to input stream", "Gets character from stream", "Puts character to stream", "Checks character"],
    "options_hi": ["character को input stream में वापस push करता है", "stream से character प्राप्त करता है", "stream में character डालता है", "character check करता है"],
    "answer_en": "Pushes character back to input stream",
    "answer_hi": "character को input stream में वापस push करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'compatible type' in C?",
    "question_hi": "C में 'compatible type' क्या होता है?",
    "options_en": ["Types that can be used interchangeably in declarations", "Same types", "Different types", "Pointer types"],
    "options_hi": ["वे types जो declarations में interchangeably use किए जा सकते हैं", "एक ही types", "अलग types", "pointer types"],
    "answer_en": "Types that can be used interchangeably in declarations",
    "answer_hi": "वे types जो declarations में interchangeably use किए जा सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'effective type' in C?",
    "question_hi": "C में 'effective type' क्या होता है?",
    "options_en": ["Type of object for alias analysis", "Declared type", "Actual type", "Pointer type"],
    "options_hi": ["alias analysis के लिए object का type", "declared type", "actual type", "pointer type"],
    "answer_en": "Type of object for alias analysis",
    "answer_hi": "alias analysis के लिए object का type",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What does 'feof()' actually check?",
    "question_hi": "'feof()' वास्तव में क्या check करता है?",
    "options_en": ["Checks end-of-file indicator, not actual EOF", "Checks actual EOF", "Checks file size", "Checks file position"],
    "options_hi": ["end-of-file indicator check करता है, actual EOF नहीं", "actual EOF check करता है", "file size check करता है", "file position check करता है"],
    "answer_en": "Checks end-of-file indicator, not actual EOF",
    "answer_hi": "end-of-file indicator check करता है, actual EOF नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'universal character name' in C?",
    "question_hi": "C में 'universal character name' क्या होता है?",
    "options_en": ["\\uXXXX or \\UXXXXXXXX for Unicode characters", "ASCII characters", "Extended characters", "Special characters"],
    "options_hi": ["Unicode characters के लिए \\uXXXX या \\UXXXXXXXX", "ASCII characters", "extended characters", "special characters"],
    "answer_en": "\\uXXXX or \\UXXXXXXXX for Unicode characters",
    "answer_hi": "Unicode characters के लिए \\uXXXX या \\UXXXXXXXX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'storage duration' in C?",
    "question_hi": "C में 'storage duration' क्या होती है?",
    "options_en": ["Lifetime of object: static, automatic, allocated, thread", "Memory location", "Memory size", "Memory type"],
    "options_hi": ["object का lifetime: static, automatic, allocated, thread", "memory location", "memory size", "memory type"],
    "answer_en": "Lifetime of object: static, automatic, allocated, thread",
    "answer_hi": "object का lifetime: static, automatic, allocated, thread",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'designated initializers for arrays' in C99?",
    "question_hi": "C99 में 'arrays के लिए designated initializers' क्या होते हैं?",
    "options_en": ["[index] = value syntax for array initialization", "Sequential initialization", "Zero initialization", "Default initialization"],
    "options_hi": ["array initialization के लिए [index] = value syntax", "sequential initialization", "zero initialization", "default initialization"],
    "answer_en": "[index] = value syntax for array initialization",
    "answer_hi": "array initialization के लिए [index] = value syntax",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What does 'fwide()' function do?",
    "question_hi": "'fwide()' function क्या करता है?",
    "options_en": ["Sets or gets stream orientation", "Sets file width", "Gets file size", "Sets buffer size"],
    "options_hi": ["stream orientation set या get करता है", "file width set करता है", "file size get करता है", "buffer size set करता है"],
    "answer_en": "Sets or gets stream orientation",
    "answer_hi": "stream orientation set या get करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'variably-modified type' in C99?",
    "question_hi": "C99 में 'variably-modified type' क्या होता है?",
    "options_en": ["Type depending on runtime value (like VLA)", "Fixed type", "Constant type", "Static type"],
    "options_hi": ["runtime value पर depend करने वाला type (जैसे VLA)", "fixed type", "constant type", "static type"],
    "answer_en": "Type depending on runtime value (like VLA)",
    "answer_hi": "runtime value पर depend करने वाला type (जैसे VLA)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'function declarator'?",
    "question_hi": "'function declarator' क्या होता है?",
    "options_en": ["Part of declaration specifying function parameters", "Function name", "Return type", "Function body"],
    "options_hi": ["declaration का वह part जो function parameters specify करता है", "function name", "return type", "function body"],
    "answer_en": "Part of declaration specifying function parameters",
    "answer_hi": "declaration का वह part जो function parameters specify करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What does 'fputs()' function do?",
    "question_hi": "'fputs()' function क्या करता है?",
    "options_en": ["Writes string to stream", "Reads string from stream", "Copies string", "Compares strings"],
    "options_hi": ["stream में string write करता है", "stream से string read करता है", "string copy करता है", "strings compare करता है"],
    "answer_en": "Writes string to stream",
    "answer_hi": "stream में string write करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'integer constant expression'?",
    "question_hi": "'integer constant expression' क्या होती है?",
    "options_en": ["Expression with integer constants evaluated at compile time", "Runtime integer expression", "Float expression", "Variable expression"],
    "options_hi": ["compile time पर evaluate होने वाला integer constants वाला expression", "runtime integer expression", "float expression", "variable expression"],
    "answer_en": "Expression with integer constants evaluated at compile time",
    "answer_hi": "compile time पर evaluate होने वाला integer constants वाला expression",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'precedence vs associativity'?",
    "question_hi": "'precedence' और 'associativity' में क्या अंतर है?",
    "options_en": ["Precedence: which operator first, Associativity: left-to-right or right-to-left", "Same thing", "Different concepts", "Memory concepts"],
    "options_hi": ["Precedence: कौन सा operator पहले, Associativity: left-to-right या right-to-left", "एक ही चीज़", "अलग concepts", "memory concepts"],
    "answer_en": "Precedence: which operator first, Associativity: left-to-right or right-to-left",
    "answer_hi": "Precedence: कौन सा operator पहले, Associativity: left-to-right या right-to-left",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What does 'mktemp()' function do?",
    "question_hi": "'mktemp()' function क्या करता है?",
    "options_en": ["Creates unique temporary filename", "Creates temporary file", "Deletes temporary file", "Renames temporary file"],
    "options_hi": ["unique temporary filename create करता है", "temporary file create करता है", "temporary file delete करता है", "temporary file rename करता है"],
    "answer_en": "Creates unique temporary filename",
    "answer_hi": "unique temporary filename create करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'incomplete type' in C?",
    "question_hi": "C में 'incomplete type' क्या होता है?",
    "options_en": ["Type whose size is unknown (void, forward declared struct)", "Complete type", "Pointer type", "Array type"],
    "options_hi": ["वह type जिसका size unknown है (void, forward declared struct)", "complete type", "pointer type", "array type"],
    "answer_en": "Type whose size is unknown (void, forward declared struct)",
    "answer_hi": "वह type जिसका size unknown है (void, forward declared struct)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'thread storage duration' in C11?",
    "question_hi": "C11 में 'thread storage duration' क्या होती है?",
    "options_en": ["_Thread_local for thread-local storage", "Static storage", "Automatic storage", "Dynamic storage"],
    "options_hi": ["thread-local storage के लिए _Thread_local", "static storage", "automatic storage", "dynamic storage"],
    "answer_en": "_Thread_local for thread-local storage",
    "answer_hi": "thread-local storage के लिए _Thread_local",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What does 'fgetws()' function do?",
    "question_hi": "'fgetws()' function क्या करता है?",
    "options_en": ["Reads wide string from stream", "Reads narrow string", "Writes wide string", "Compares wide strings"],
    "options_hi": ["stream से wide string read करता है", "narrow string read करता है", "wide string write करता है", "wide strings compare करता है"],
    "answer_en": "Reads wide string from stream",
    "answer_hi": "stream से wide string read करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'generic selection' in C11?",
    "question_hi": "C11 में 'generic selection' क्या होती है?",
    "options_en": ["_Generic for type-based dispatch", "Switch statement", "If-else chain", "Function overloading"],
    "options_hi": ["type-based dispatch के लिए _Generic", "switch statement", "if-else chain", "function overloading"],
    "answer_en": "_Generic for type-based dispatch",
    "answer_hi": "type-based dispatch के लिए _Generic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'standard integer types' in C?",
    "question_hi": "C में 'standard integer types' क्या होते हैं?",
    "options_en": ["int8_t, int16_t, int32_t, int64_t from stdint.h", "int, long, short", "char, int, float", "Only int"],
    "options_hi": ["stdint.h से int8_t, int16_t, int32_t, int64_t", "int, long, short", "char, int, float", "केवल int"],
    "answer_en": "int8_t, int16_t, int32_t, int64_t from stdint.h",
    "answer_hi": "stdint.h से int8_t, int16_t, int32_t, int64_t",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What does 'fputwc()' function do?",
    "question_hi": "'fputwc()' function क्या करता है?",
    "options_en": ["Writes wide character to stream", "Reads wide character", "Writes narrow character", "Reads narrow character"],
    "options_hi": ["stream में wide character write करता है", "wide character read करता है", "narrow character write करता है", "narrow character read करता है"],
    "answer_en": "Writes wide character to stream",
    "answer_hi": "stream में wide character write करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'alignment specifier' in C11?",
    "question_hi": "C11 में 'alignment specifier' क्या होता है?",
    "options_en": ["_Alignas for specifying alignment", "_Alignof for getting alignment", "Both A and B", "No alignment specifier"],
    "options_hi": ["alignment specify करने के लिए _Alignas", "alignment प्राप्त करने के लिए _Alignof", "A और B दोनों", "कोई alignment specifier नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'null pointer constant'?",
    "question_hi": "'null pointer constant' क्या होती है?",
    "options_en": ["Integer constant 0 or (void*)0", "NULL macro", "Zero pointer", "All of these"],
    "options_hi": ["integer constant 0 या (void*)0", "NULL macro", "zero pointer", "ये सभी"],
    "answer_en": "All of these",
    "answer_hi": "ये सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What does 'fsetpos()' function do?",
    "question_hi": "'fsetpos()' function क्या करता है?",
    "options_en": ["Sets file position using fpos_t", "Gets file position", "Checks EOF", "Sets buffer"],
    "options_hi": ["fpos_t का उपयोग करके file position set करता है", "file position get करता है", "EOF check करता है", "buffer set करता है"],
    "answer_en": "Sets file position using fpos_t",
    "answer_hi": "fpos_t का उपयोग करके file position set करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'static array index' in C99?",
    "question_hi": "C99 में 'static array index' क्या होता है?",
    "options_en": ["Array parameter with static size in function declaration", "Dynamic array", "Variable length array", "Pointer array"],
    "options_hi": ["function declaration में static size वाला array parameter", "dynamic array", "variable length array", "pointer array"],
    "answer_en": "Array parameter with static size in function declaration",
    "answer_hi": "function declaration में static size वाला array parameter",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'no-return function' in C11?",
    "question_hi": "C11 में 'no-return function' क्या होता है?",
    "options_en": ["_Noreturn function that doesn't return to caller", "Void function", "Int function", "Recursive function"],
    "options_hi": ["_Noreturn function जो caller को return नहीं करती", "void function", "int function", "recursive function"],
    "answer_en": "_Noreturn function that doesn't return to caller",
    "answer_hi": "_Noreturn function जो caller को return नहीं करती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'complex macro with do-while(0)' pattern?",
    "question_hi": "'complex macro with do-while(0)' pattern क्या होता है?",
    "options_en": ["Macro wrapped in do-while(0) to behave like statement", "Simple macro", "Function macro", "Object-like macro"],
    "options_hi": ["statement की तरह behave करने के लिए do-while(0) में wrapped macro", "simple macro", "function macro", "object-like macro"],
    "answer_en": "Macro wrapped in do-while(0) to behave like statement",
    "answer_hi": "statement की तरह behave करने के लिए do-while(0) में wrapped macro",
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