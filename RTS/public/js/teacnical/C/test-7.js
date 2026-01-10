const questions = [
  {
    "num": 1,
    "question_en": "What is the purpose of curly braces {} in C?",
    "question_hi": "C में curly braces {} का उद्देश्य क्या है?",
    "options_en": ["Define block of code", "Define comments", "Define variables", "Define functions only"],
    "options_hi": ["कोड ब्लॉक डिफाइन करना", "कमेंट्स डिफाइन करना", "वेरिएबल्स डिफाइन करना", "केवल फंक्शन्स डिफाइन करना"],
    "answer_en": "Define block of code",
    "answer_hi": "कोड ब्लॉक डिफाइन करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is a preprocessor directive?",
    "question_hi": "प्रीप्रोसेसर डायरेक्टिव क्या है?",
    "options_en": ["Instruction to compiler before compilation", "Function", "Variable", "Loop"],
    "options_hi": ["कंपाइलेशन से पहले कंपाइलर को निर्देश", "फंक्शन", "वेरिएबल", "लूप"],
    "answer_en": "Instruction to compiler before compilation",
    "answer_hi": "कंपाइलेशन से पहले कंपाइलर को निर्देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does #define do?",
    "question_hi": "#define क्या करता है?",
    "options_en": ["Defines macro", "Includes file", "Declares variable", "Defines function"],
    "options_hi": ["मैक्रो डिफाइन करता है", "फाइल इंक्लूड करता है", "वेरिएबल डिक्लेयर करता है", "फंक्शन डिफाइन करता है"],
    "answer_en": "Defines macro",
    "answer_hi": "मैक्रो डिफाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is a macro in C?",
    "question_hi": "C में मैक्रो क्या है?",
    "options_en": ["Piece of code replaced by value", "Function", "Variable", "Loop"],
    "options_hi": ["कोड का टुकड़ा जो वैल्यू से रिप्लेस होता है", "फंक्शन", "वेरिएबल", "लूप"],
    "answer_en": "Piece of code replaced by value",
    "answer_hi": "कोड का टुकड़ा जो वैल्यू से रिप्लेस होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "How to define a macro for PI value?",
    "question_hi": "PI वैल्यू के लिए मैक्रो कैसे डिफाइन करें?",
    "options_en": ["#define PI 3.14", "#define PI = 3.14", "#PI 3.14", "macro PI 3.14"],
    "options_hi": ["#define PI 3.14", "#define PI = 3.14", "#PI 3.14", "macro PI 3.14"],
    "answer_en": "#define PI 3.14",
    "answer_hi": "#define PI 3.14",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is #ifdef used for?",
    "question_hi": "#ifdef किसके लिए उपयोग होता है?",
    "options_en": ["Conditional compilation", "Including files", "Defining macros", "Declaring variables"],
    "options_hi": ["कंडिशनल कंपाइलेशन", "फाइल्स इंक्लूड करना", "मैक्रोस डिफाइन करना", "वेरिएबल्स डिक्लेयर करना"],
    "answer_en": "Conditional compilation",
    "answer_hi": "कंडिशनल कंपाइलेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is #endif used for?",
    "question_hi": "#endif किसके लिए उपयोग होता है?",
    "options_en": ["Ends conditional compilation", "Ends program", "Ends function", "Ends loop"],
    "options_hi": ["कंडिशनल कंपाइलेशन खत्म करता है", "प्रोग्राम खत्म करता है", "फंक्शन खत्म करता है", "लूप खत्म करता है"],
    "answer_en": "Ends conditional compilation",
    "answer_hi": "कंडिशनल कंपाइलेशन खत्म करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of #pragma?",
    "question_hi": "#pragma का उद्देश्य क्या है?",
    "options_en": ["Compiler-specific instructions", "Defining macros", "Including files", "Conditional compilation"],
    "options_hi": ["कंपाइलर-स्पेसिफिक इंस्ट्रक्शंस", "मैक्रोस डिफाइन करना", "फाइल्स इंक्लूड करना", "कंडिशनल कंपाइलेशन"],
    "answer_en": "Compiler-specific instructions",
    "answer_hi": "कंपाइलर-स्पेसिफिक इंस्ट्रक्शंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is a translation unit in C?",
    "question_hi": "C में ट्रांसलेशन यूनिट क्या है?",
    "options_en": ["Source file after preprocessing", "Object file", "Executable", "Header file"],
    "options_hi": ["प्रीप्रोसेसिंग के बाद सोर्स फाइल", "ऑब्जेक्ट फाइल", "एग्जीक्यूटेबल", "हेडर फाइल"],
    "answer_en": "Source file after preprocessing",
    "answer_hi": "प्रीप्रोसेसिंग के बाद सोर्स फाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What are the phases of compilation in C?",
    "question_hi": "C में कंपाइलेशन के फेज क्या हैं?",
    "options_en": ["Preprocessing, Compilation, Assembly, Linking", "Editing, Saving, Running", "Typing, Compiling", "Writing, Reading"],
    "options_hi": ["प्रीप्रोसेसिंग, कंपाइलेशन, असेंबली, लिंकिंग", "एडिटिंग, सेविंग, रनिंग", "टाइपिंग, कंपाइलिंग", "राइटिंग, रीडिंग"],
    "answer_en": "Preprocessing, Compilation, Assembly, Linking",
    "answer_hi": "प्रीप्रोसेसिंग, कंपाइलेशन, असेंबली, लिंकिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What happens during preprocessing phase?",
    "question_hi": "प्रीप्रोसेसिंग फेज के दौरान क्या होता है?",
    "options_en": ["Header files included, macros expanded", "Machine code generated", "Object file created", "Linking done"],
    "options_hi": ["हेडर फाइल्स इंक्लूड, मैक्रोस एक्सपेंड", "मशीन कोड जनरेट", "ऑब्जेक्ट फाइल क्रिएट", "लिंकिंग डन"],
    "answer_en": "Header files included, macros expanded",
    "answer_hi": "हेडर फाइल्स इंक्लूड, मैक्रोस एक्सपेंड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What happens during compilation phase?",
    "question_hi": "कंपाइलेशन फेज के दौरान क्या होता है?",
    "options_en": ["Source code converted to assembly code", "Macros expanded", "Object files linked", "Executable created"],
    "options_hi": ["सोर्स कोड असेंबली कोड में कन्वर्ट", "मैक्रोस एक्सपेंड", "ऑब्जेक्ट फाइल्स लिंक्ड", "एग्जीक्यूटेबल क्रिएट"],
    "answer_en": "Source code converted to assembly code",
    "answer_hi": "सोर्स कोड असेंबली कोड में कन्वर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is an object file?",
    "question_hi": "ऑब्जेक्ट फाइल क्या है?",
    "options_en": ["Machine code with unresolved references", "Source code", "Executable", "Header file"],
    "options_hi": ["अनरेजॉल्व्ड रेफरेंस के साथ मशीन कोड", "सोर्स कोड", "एग्जीक्यूटेबल", "हेडर फाइल"],
    "answer_en": "Machine code with unresolved references",
    "answer_hi": "अनरेजॉल्व्ड रेफरेंस के साथ मशीन कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What happens during linking phase?",
    "question_hi": "लिंकिंग फेज के दौरान क्या होता है?",
    "options_en": ["Object files combined to create executable", "Source code compiled", "Macros expanded", "Header files included"],
    "options_hi": ["ऑब्जेक्ट फाइल्स कोंबाइन कर एग्जीक्यूटेबल बनाया", "सोर्स कोड कंपाइल", "मैक्रोस एक्सपेंड", "हेडर फाइल्स इंक्लूड"],
    "answer_en": "Object files combined to create executable",
    "answer_hi": "ऑब्जेक्ट फाइल्स कोंबाइन कर एग्जीक्यूटेबल बनाया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is an executable file?",
    "question_hi": "एग्जीक्यूटेबल फाइल क्या है?",
    "options_en": ["Program that can be run", "Source code", "Object file", "Header file"],
    "options_hi": ["प्रोग्राम जो रन किया जा सकता है", "सोर्स कोड", "ऑब्जेक्ट फाइल", "हेडर फाइल"],
    "answer_en": "Program that can be run",
    "answer_hi": "प्रोग्राम जो रन किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is .obj file extension used for?",
    "question_hi": ".obj फाइल एक्सटेंशन किसके लिए उपयोग होता है?",
    "options_en": ["Object files", "Source files", "Executable files", "Header files"],
    "options_hi": ["ऑब्जेक्ट फाइल्स", "सोर्स फाइल्स", "एग्जीक्यूटेबल फाइल्स", "हेडर फाइल्स"],
    "answer_en": "Object files",
    "answer_hi": "ऑब्जेक्ट फाइल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is .exe file extension used for?",
    "question_hi": ".exe फाइल एक्सटेंशन किसके लिए उपयोग होता है?",
    "options_en": ["Executable files", "Object files", "Source files", "Header files"],
    "options_hi": ["एग्जीक्यूटेबल फाइल्स", "ऑब्जेक्ट फाइल्स", "सोर्स फाइल्स", "हेडर फाइल्स"],
    "answer_en": "Executable files",
    "answer_hi": "एग्जीक्यूटेबल फाइल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is a compiler?",
    "question_hi": "कंपाइलर क्या है?",
    "options_en": ["Program that converts source code to machine code", "Program that runs code", "Program that edits code", "Program that debugs code"],
    "options_hi": ["प्रोग्राम जो सोर्स कोड को मशीन कोड में बदलता है", "प्रोग्राम जो कोड रन करता है", "प्रोग्राम जो कोड एडिट करता है", "प्रोग्राम जो कोड डीबग करता है"],
    "answer_en": "Program that converts source code to machine code",
    "answer_hi": "प्रोग्राम जो सोर्स कोड को मशीन कोड में बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is an interpreter?",
    "question_hi": "इंटरप्रेटर क्या है?",
    "options_en": ["Executes code line by line", "Compiles entire program", "Edits code", "Debugs code"],
    "options_hi": ["कोड लाइन बाय लाइन एक्जीक्यूट करता है", "पूरा प्रोग्राम कंपाइल करता है", "कोड एडिट करता है", "कोड डीबग करता है"],
    "answer_en": "Executes code line by line",
    "answer_hi": "कोड लाइन बाय लाइन एक्जीक्यूट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Is C compiled or interpreted?",
    "question_hi": "C कंपाइल्ड है या इंटरप्रेटेड?",
    "options_en": ["Compiled", "Interpreted", "Both", "Neither"],
    "options_hi": ["कंपाइल्ड", "इंटरप्रेटेड", "दोनों", "कोई नहीं"],
    "answer_en": "Compiled",
    "answer_hi": "कंपाइल्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is a linker?",
    "question_hi": "लिंकर क्या है?",
    "options_en": ["Combines object files into executable", "Compiles source code", "Edits code", "Runs program"],
    "options_hi": ["ऑब्जेक्ट फाइल्स को एग्जीक्यूटेबल में कोंबाइन करता है", "सोर्स कोड कंपाइल करता है", "कोड एडिट करता है", "प्रोग्राम रन करता है"],
    "answer_en": "Combines object files into executable",
    "answer_hi": "ऑब्जेक्ट फाइल्स को एग्जीक्यूटेबल में कोंबाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is a loader?",
    "question_hi": "लोडर क्या है?",
    "options_en": ["Loads executable into memory", "Compiles program", "Links object files", "Edits code"],
    "options_hi": ["एग्जीक्यूटेबल को मेमोरी में लोड करता है", "प्रोग्राम कंपाइल करता है", "ऑब्जेक्ट फाइल्स लिंक करता है", "कोड एडिट करता है"],
    "answer_en": "Loads executable into memory",
    "answer_hi": "एग्जीक्यूटेबल को मेमोरी में लोड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is the difference between compiler and interpreter?",
    "question_hi": "कंपाइलर और इंटरप्रेटर में क्या अंतर है?",
    "options_en": ["Compiler translates entire program, interpreter line by line", "No difference", "Interpreter faster", "Compiler slower"],
    "options_hi": ["कंपाइलर पूरा प्रोग्राम ट्रांसलेट करता है, इंटरप्रेटर लाइन बाय लाइन", "कोई अंतर नहीं", "इंटरप्रेटर तेज", "कंपाइलर धीमा"],
    "answer_en": "Compiler translates entire program, interpreter line by line",
    "answer_hi": "कंपाइलर पूरा प्रोग्राम ट्रांसलेट करता है, इंटरप्रेटर लाइन बाय लाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is a cross-compiler?",
    "question_hi": "क्रॉस-कंपाइलर क्या है?",
    "options_en": ["Compiler that runs on one system but produces code for another", "Compiler for same system", "Interpreter", "Linker"],
    "options_hi": ["कंपाइलर जो एक सिस्टम पर रन करता है लेकिन दूसरे के लिए कोड प्रोड्यूस करता है", "समान सिस्टम के लिए कंपाइलर", "इंटरप्रेटर", "लिंकर"],
    "answer_en": "Compiler that runs on one system but produces code for another",
    "answer_hi": "कंपाइलर जो एक सिस्टम पर रन करता है लेकिन दूसरे के लिए कोड प्रोड्यूस करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is an integrated development environment (IDE)?",
    "question_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट (IDE) क्या है?",
    "options_en": ["Software with editor, compiler, debugger etc.", "Only compiler", "Only editor", "Only debugger"],
    "options_hi": ["सॉफ्टवेयर जिसमें एडिटर, कंपाइलर, डीबगर आदि होते हैं", "केवल कंपाइलर", "केवल एडिटर", "केवल डीबगर"],
    "answer_en": "Software with editor, compiler, debugger etc.",
    "answer_hi": "सॉफ्टवेयर जिसमें एडिटर, कंपाइलर, डीबगर आदि होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "Examples of C IDEs?",
    "question_hi": "C IDE के उदाहरण?",
    "options_en": ["Code::Blocks, Dev-C++, Turbo C", "Chrome, Firefox", "Word, Excel", "Windows, Linux"],
    "options_hi": ["Code::Blocks, Dev-C++, Turbo C", "Chrome, Firefox", "Word, Excel", "Windows, Linux"],
    "answer_en": "Code::Blocks, Dev-C++, Turbo C",
    "answer_hi": "Code::Blocks, Dev-C++, Turbo C",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is a text editor for programming?",
    "question_hi": "प्रोग्रामिंग के लिए टेक्स्ट एडिटर क्या है?",
    "options_en": ["Program for writing code", "Program for compiling", "Program for running", "Program for debugging"],
    "options_hi": ["कोड लिखने के लिए प्रोग्राम", "कंपाइल करने के लिए प्रोग्राम", "रन करने के लिए प्रोग्राम", "डीबग करने के लिए प्रोग्राम"],
    "answer_en": "Program for writing code",
    "answer_hi": "कोड लिखने के लिए प्रोग्राम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "Examples of text editors for C?",
    "question_hi": "C के लिए टेक्स्ट एडिटर्स के उदाहरण?",
    "options_en": ["Notepad++, Sublime Text, VS Code", "Word, Excel", "Chrome, Firefox", "Calculator, Paint"],
    "options_hi": ["Notepad++, Sublime Text, VS Code", "Word, Excel", "Chrome, Firefox", "Calculator, Paint"],
    "answer_en": "Notepad++, Sublime Text, VS Code",
    "answer_hi": "Notepad++, Sublime Text, VS Code",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is the difference between IDE and text editor?",
    "question_hi": "IDE और टेक्स्ट एडिटर में क्या अंतर है?",
    "options_en": ["IDE has more features like compiler, debugger", "No difference", "Text editor has compiler", "IDE has no compiler"],
    "options_hi": ["IDE में अधिक फीचर्स होते हैं जैसे कंपाइलर, डीबगर", "कोई अंतर नहीं", "टेक्स्ट एडिटर में कंपाइलर होता है", "IDE में कंपाइलर नहीं होता"],
    "answer_en": "IDE has more features like compiler, debugger",
    "answer_hi": "IDE में अधिक फीचर्स होते हैं जैसे कंपाइलर, डीबगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is syntax highlighting?",
    "question_hi": "सिंटैक्स हाइलाइटिंग क्या है?",
    "options_en": ["Coloring different parts of code", "Compiling code", "Running code", "Debugging code"],
    "options_hi": ["कोड के विभिन्न भागों को रंगना", "कोड कंपाइल करना", "कोड रन करना", "कोड डीबग करना"],
    "answer_en": "Coloring different parts of code",
    "answer_hi": "कोड के विभिन्न भागों को रंगना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is auto-completion in programming editors?",
    "question_hi": "प्रोग्रामिंग एडिटर्स में ऑटो-कंप्लीशन क्या है?",
    "options_en": ["Suggesting code while typing", "Compiling automatically", "Running automatically", "Debugging automatically"],
    "options_hi": ["टाइप करते समय कोड सजेस्ट करना", "ऑटोमैटिक कंपाइल करना", "ऑटोमैटिक रन करना", "ऑटोमैटिक डीबग करना"],
    "answer_en": "Suggesting code while typing",
    "answer_hi": "टाइप करते समय कोड सजेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is a project in programming?",
    "question_hi": "प्रोग्रामिंग में प्रोजेक्ट क्या है?",
    "options_en": ["Collection of files for a program", "Single file", "Compiler", "Debugger"],
    "options_hi": ["प्रोग्राम के लिए फाइल्स का कलेक्शन", "सिंगल फाइल", "कंपाइलर", "डीबगर"],
    "answer_en": "Collection of files for a program",
    "answer_hi": "प्रोग्राम के लिए फाइल्स का कलेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is a workspace in IDE?",
    "question_hi": "IDE में वर्कस्पेस क्या है?",
    "options_en": ["Environment containing projects", "Single file", "Compiler", "Debugger"],
    "options_hi": ["प्रोजेक्ट्स रखने वाला एनवायरनमेंट", "सिंगल फाइल", "कंपाइलर", "डीबगर"],
    "answer_en": "Environment containing projects",
    "answer_hi": "प्रोजेक्ट्स रखने वाला एनवायरनमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is a build in programming?",
    "question_hi": "प्रोग्रामिंग में बिल्ड क्या है?",
    "options_en": ["Process of compiling and linking", "Writing code", "Running program", "Debugging"],
    "options_hi": ["कंपाइलिंग और लिंकिंग की प्रक्रिया", "कोड लिखना", "प्रोग्राम रन करना", "डीबगिंग"],
    "answer_en": "Process of compiling and linking",
    "answer_hi": "कंपाइलिंग और लिंकिंग की प्रक्रिया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is a rebuild?",
    "question_hi": "रीबिल्ड क्या है?",
    "options_en": ["Clean and build everything", "Build only changed files", "Run program", "Debug program"],
    "options_hi": ["सब कुछ क्लीन और बिल्ड करना", "केवल चेंज्ड फाइल्स बिल्ड करना", "प्रोग्राम रन करना", "प्रोग्राम डीबग करना"],
    "answer_en": "Clean and build everything",
    "answer_hi": "सब कुछ क्लीन और बिल्ड करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is a clean build?",
    "question_hi": "क्लीन बिल्ड क्या है?",
    "options_en": ["Delete old files and build fresh", "Build incrementally", "Run program", "Debug program"],
    "options_hi": ["पुरानी फाइल्स डिलीट और नया बिल्ड", "इंक्रीमेंटली बिल्ड", "प्रोग्राम रन करना", "प्रोग्राम डीबग करना"],
    "answer_en": "Delete old files and build fresh",
    "answer_hi": "पुरानी फाइल्स डिलीट और नया बिल्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is incremental build?",
    "question_hi": "इंक्रीमेंटल बिल्ड क्या है?",
    "options_en": ["Build only changed files", "Build everything", "Clean build", "No build"],
    "options_hi": ["केवल चेंज्ड फाइल्स बिल्ड करना", "सब कुछ बिल्ड करना", "क्लीन बिल्ड", "कोई बिल्ड नहीं"],
    "answer_en": "Build only changed files",
    "answer_hi": "केवल चेंज्ड फाइल्स बिल्ड करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is make utility?",
    "question_hi": "मेक यूटिलिटी क्या है?",
    "options_en": ["Automates build process", "Compiles only", "Links only", "Runs program"],
    "options_hi": ["बिल्ड प्रोसेस ऑटोमेट करता है", "केवल कंपाइल करता है", "केवल लिंक करता है", "प्रोग्राम रन करता है"],
    "answer_en": "Automates build process",
    "answer_hi": "बिल्ड प्रोसेस ऑटोमेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is a makefile?",
    "question_hi": "मेकफाइल क्या है?",
    "options_en": ["File containing build instructions", "Source file", "Header file", "Object file"],
    "options_hi": ["बिल्ड इंस्ट्रक्शंस रखने वाली फाइल", "सोर्स फाइल", "हेडर फाइल", "ऑब्जेक्ट फाइल"],
    "answer_en": "File containing build instructions",
    "answer_hi": "बिल्ड इंस्ट्रक्शंस रखने वाली फाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is debugging?",
    "question_hi": "डीबगिंग क्या है?",
    "options_en": ["Finding and fixing errors", "Writing code", "Compiling code", "Running code"],
    "options_hi": ["एरर्स ढूंढना और ठीक करना", "कोड लिखना", "कोड कंपाइल करना", "कोड रन करना"],
    "answer_en": "Finding and fixing errors",
    "answer_hi": "एरर्स ढूंढना और ठीक करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is a debugger?",
    "question_hi": "डीबगर क्या है?",
    "options_en": ["Tool for debugging", "Compiler", "Linker", "Editor"],
    "options_hi": ["डीबगिंग के लिए टूल", "कंपाइलर", "लिंकर", "एडिटर"],
    "answer_en": "Tool for debugging",
    "answer_hi": "डीबगिंग के लिए टूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is a breakpoint?",
    "question_hi": "ब्रेकप्वाइंट क्या है?",
    "options_en": ["Point where program pauses during debugging", "Error in code", "End of program", "Start of program"],
    "options_hi": ["वह प्वाइंट जहां डीबगिंग के दौरान प्रोग्राम पॉज़ होता है", "कोड में एरर", "प्रोग्राम का अंत", "प्रोग्राम की शुरुआत"],
    "answer_en": "Point where program pauses during debugging",
    "answer_hi": "वह प्वाइंट जहां डीबगिंग के दौरान प्रोग्राम पॉज़ होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is step into in debugging?",
    "question_hi": "डीबगिंग में स्टेप इंटो क्या है?",
    "options_en": ["Go inside function call", "Skip function call", "Continue to next breakpoint", "Stop debugging"],
    "options_hi": ["फंक्शन कॉल के अंदर जाना", "फंक्शन कॉल स्किप करना", "अगले ब्रेकप्वाइंट पर जाना", "डीबगिंग रोकना"],
    "answer_en": "Go inside function call",
    "answer_hi": "फंक्शन कॉल के अंदर जाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is step over in debugging?",
    "question_hi": "डीबगिंग में स्टेप ओवर क्या है?",
    "options_en": ["Execute function without going inside", "Go inside function", "Stop debugging", "Continue execution"],
    "options_hi": ["फंक्शन को अंदर गए बिना एक्जीक्यूट करना", "फंक्शन के अंदर जाना", "डीबगिंग रोकना", "एक्जीक्यूशन जारी रखना"],
    "answer_en": "Execute function without going inside",
    "answer_hi": "फंक्शन को अंदर गए बिना एक्जीक्यूट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is step out in debugging?",
    "question_hi": "डीबगिंग में स्टेप आउट क्या है?",
    "options_en": ["Exit current function and return to caller", "Enter function", "Stop debugging", "Continue to end"],
    "options_hi": ["करंट फंक्शन से बाहर निकलना और कॉलर पर रिटर्न", "फंक्शन में एंटर", "डीबगिंग रोकना", "अंत तक जारी रखना"],
    "answer_en": "Exit current function and return to caller",
    "answer_hi": "करंट फंक्शन से बाहर निकलना और कॉलर पर रिटर्न",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is watch in debugging?",
    "question_hi": "डीबगिंग में वॉच क्या है?",
    "options_en": ["Monitor variable values", "Breakpoint", "Step command", "Run command"],
    "options_hi": ["वेरिएबल वैल्यूज मॉनिटर करना", "ब्रेकप्वाइंट", "स्टेप कमांड", "रन कमांड"],
    "answer_en": "Monitor variable values",
    "answer_hi": "वेरिएबल वैल्यूज मॉनिटर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is call stack in debugging?",
    "question_hi": "डीबगिंग में कॉल स्टैक क्या है?",
    "options_en": ["List of function calls", "Variables list", "Breakpoints list", "Watch list"],
    "options_hi": ["फंक्शन कॉल्स की लिस्ट", "वेरिएबल्स लिस्ट", "ब्रेकप्वाइंट्स लिस्ट", "वॉच लिस्ट"],
    "answer_en": "List of function calls",
    "answer_hi": "फंक्शन कॉल्स की लिस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is a bug?",
    "question_hi": "बग क्या है?",
    "options_en": ["Error or flaw in program", "Feature", "Output", "Input"],
    "options_hi": ["प्रोग्राम में एरर या फ्लॉ", "फीचर", "आउटपुट", "इनपुट"],
    "answer_en": "Error or flaw in program",
    "answer_hi": "प्रोग्राम में एरर या फ्लॉ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the origin of term 'bug' in programming?",
    "question_hi": "प्रोग्रामिंग में 'बग' शब्द की उत्पत्ति क्या है?",
    "options_en": ["Literal insect found in computer", "Short for buggy", "Random name", "Acronym"],
    "options_hi": ["कंप्यूटर में मिला शाब्दिक कीड़ा", "बग्गी का शॉर्ट", "रैंडम नाम", "एक्रोनिम"],
    "answer_en": "Literal insect found in computer",
    "answer_hi": "कंप्यूटर में मिला शाब्दिक कीड़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is a syntax error?",
    "question_hi": "सिंटैक्स एरर क्या है?",
    "options_en": ["Violation of language rules", "Logical mistake", "Runtime error", "No error"],
    "options_hi": ["भाषा नियमों का उल्लंघन", "लॉजिकल गलती", "रनटाइम एरर", "कोई एरर नहीं"],
    "answer_en": "Violation of language rules",
    "answer_hi": "भाषा नियमों का उल्लंघन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "Example of syntax error?",
    "question_hi": "सिंटैक्स एरर का उदाहरण?",
    "options_en": ["Missing semicolon", "Wrong output", "Infinite loop", "Program crash"],
    "options_hi": ["सेमीकॉलन गायब", "गलत आउटपुट", "इनफिनाइट लूप", "प्रोग्राम क्रैश"],
    "answer_en": "Missing semicolon",
    "answer_hi": "सेमीकॉलन गायब",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is a logical error?",
    "question_hi": "लॉजिकल एरर क्या है?",
    "options_en": ["Program runs but produces wrong result", "Won't compile", "Crashes", "No output"],
    "options_hi": ["प्रोग्राम चलता है लेकिन गलत रिजल्ट देता है", "कंपाइल नहीं होगा", "क्रैश होता है", "कोई आउटपुट नहीं"],
    "answer_en": "Program runs but produces wrong result",
    "answer_hi": "प्रोग्राम चलता है लेकिन गलत रिजल्ट देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "Example of logical error?",
    "question_hi": "लॉजिकल एरर का उदाहरण?",
    "options_en": ["Using + instead of *", "Missing semicolon", "Wrong header", "No main function"],
    "options_hi": ["* के बजाय + का उपयोग", "सेमीकॉलन गायब", "गलत हेडर", "कोई मेन फंक्शन नहीं"],
    "answer_en": "Using + instead of *",
    "answer_hi": "* के बजाय + का उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is a runtime error?",
    "question_hi": "रनटाइम एरर क्या है?",
    "options_en": ["Error during program execution", "Compile-time error", "Logical error", "Syntax error"],
    "options_hi": ["प्रोग्राम एक्जीक्यूशन के दौरान एरर", "कंपाइल-टाइम एरर", "लॉजिकल एरर", "सिंटैक्स एरर"],
    "answer_en": "Error during program execution",
    "answer_hi": "प्रोग्राम एक्जीक्यूशन के दौरान एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "Example of runtime error?",
    "question_hi": "रनटाइम एरर का उदाहरण?",
    "options_en": ["Division by zero", "Missing semicolon", "Wrong variable name", "No header file"],
    "options_hi": ["शून्य से भाग", "सेमीकॉलन गायब", "गलत वेरिएबल नाम", "कोई हेडर फाइल नहीं"],
    "answer_en": "Division by zero",
    "answer_hi": "शून्य से भाग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is a segmentation fault?",
    "question_hi": "सेगमेंटेशन फॉल्ट क्या है?",
    "options_en": ["Accessing invalid memory", "Syntax error", "Logical error", "Compile error"],
    "options_hi": ["अमान्य मेमोरी एक्सेस करना", "सिंटैक्स एरर", "लॉजिकल एरर", "कंपाइल एरर"],
    "answer_en": "Accessing invalid memory",
    "answer_hi": "अमान्य मेमोरी एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is a compiler error?",
    "question_hi": "कंपाइलर एरर क्या है?",
    "options_en": ["Error detected during compilation", "Runtime error", "Logical error", "No error"],
    "options_hi": ["कंपाइलेशन के दौरान पता चला एरर", "रनटाइम एरर", "लॉजिकल एरर", "कोई एरर नहीं"],
    "answer_en": "Error detected during compilation",
    "answer_hi": "कंपाइलेशन के दौरान पता चला एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is a warning?",
    "question_hi": "वार्निंग क्या है?",
    "options_en": ["Potential problem but compilation continues", "Error that stops compilation", "Runtime error", "Logical error"],
    "options_hi": ["संभावित समस्या लेकिन कंपाइलेशन जारी", "एरर जो कंपाइलेशन रोकता है", "रनटाइम एरर", "लॉजिकल एरर"],
    "answer_en": "Potential problem but compilation continues",
    "answer_hi": "संभावित समस्या लेकिन कंपाइलेशन जारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "Difference between error and warning?",
    "question_hi": "एरर और वार्निंग में क्या अंतर है?",
    "options_en": ["Error stops compilation, warning doesn't", "Warning stops compilation", "Both same", "No difference"],
    "options_hi": ["एरर कंपाइलेशन रोकता है, वार्निंग नहीं", "वार्निंग कंपाइलेशन रोकता है", "दोनों समान", "कोई अंतर नहीं"],
    "answer_en": "Error stops compilation, warning doesn't",
    "answer_hi": "एरर कंपाइलेशन रोकता है, वार्निंग नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is an assertion?",
    "question_hi": "असर्शन क्या है?",
    "options_en": ["Check that should always be true", "Variable", "Function", "Loop"],
    "options_hi": ["चेक जो हमेशा सच होना चाहिए", "वेरिएबल", "फंक्शन", "लूप"],
    "answer_en": "Check that should always be true",
    "answer_hi": "चेक जो हमेशा सच होना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is assert() function?",
    "question_hi": "assert() फंक्शन क्या है?",
    "options_en": ["Tests assertion and aborts if false", "Prints output", "Reads input", "Calculates"],
    "options_hi": ["असर्शन टेस्ट करता है और गलत होने पर एबॉर्ट", "आउटपुट प्रिंट करता है", "इनपुट पढ़ता है", "कैलकुलेट करता है"],
    "answer_en": "Tests assertion and aborts if false",
    "answer_hi": "असर्शन टेस्ट करता है और गलत होने पर एबॉर्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "Header file for assert()?",
    "question_hi": "assert() के लिए हेडर फाइल?",
    "options_en": ["assert.h", "stdio.h", "stdlib.h", "math.h"],
    "options_hi": ["assert.h", "stdio.h", "stdlib.h", "math.h"],
    "answer_en": "assert.h",
    "answer_hi": "assert.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is defensive programming?",
    "question_hi": "डिफेंसिव प्रोग्रामिंग क्या है?",
    "options_en": ["Writing code to handle errors", "Writing fast code", "Writing short code", "Writing complex code"],
    "options_hi": ["एरर्स हैंडल करने के लिए कोड लिखना", "तेज कोड लिखना", "छोटा कोड लिखना", "कॉम्प्लेक्स कोड लिखना"],
    "answer_en": "Writing code to handle errors",
    "answer_hi": "एरर्स हैंडल करने के लिए कोड लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is error handling?",
    "question_hi": "एरर हैंडलिंग क्या है?",
    "options_en": ["Dealing with errors gracefully", "Ignoring errors", "Causing errors", "No errors"],
    "options_hi": ["एरर्स को ग्रेसफुली डील करना", "एरर्स इग्नोर करना", "एरर्स कॉज करना", "कोई एरर नहीं"],
    "answer_en": "Dealing with errors gracefully",
    "answer_hi": "एरर्स को ग्रेसफुली डील करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is code review?",
    "question_hi": "कोड रिव्यू क्या है?",
    "options_en": ["Examining code by others", "Compiling code", "Running code", "Debugging code"],
    "options_hi": ["दूसरों द्वारा कोड की जांच", "कोड कंपाइल करना", "कोड रन करना", "कोड डीबग करना"],
    "answer_en": "Examining code by others",
    "answer_hi": "दूसरों द्वारा कोड की जांच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is testing?",
    "question_hi": "टेस्टिंग क्या है?",
    "options_en": ["Checking if program works correctly", "Writing code", "Compiling code", "Debugging code"],
    "options_hi": ["चेक करना कि प्रोग्राम सही काम करता है", "कोड लिखना", "कोड कंपाइल करना", "कोड डीबग करना"],
    "answer_en": "Checking if program works correctly",
    "answer_hi": "चेक करना कि प्रोग्राम सही काम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is unit testing?",
    "question_hi": "यूनिट टेस्टिंग क्या है?",
    "options_en": ["Testing individual units/functions", "Testing whole program", "No testing", "Compiling"],
    "options_hi": ["इंडिविजुअल यूनिट/फंक्शन टेस्ट करना", "पूरा प्रोग्राम टेस्ट करना", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing individual units/functions",
    "answer_hi": "इंडिविजुअल यूनिट/फंक्शन टेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is integration testing?",
    "question_hi": "इंटीग्रेशन टेस्टिंग क्या है?",
    "options_en": ["Testing combined units", "Testing single unit", "No testing", "Compiling"],
    "options_hi": ["कोंबाइन यूनिट्स टेस्ट करना", "सिंगल यूनिट टेस्ट करना", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing combined units",
    "answer_hi": "कोंबाइन यूनिट्स टेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is system testing?",
    "question_hi": "सिस्टम टेस्टिंग क्या है?",
    "options_en": ["Testing complete system", "Testing single unit", "Testing combined units", "No testing"],
    "options_hi": ["कंप्लीट सिस्टम टेस्ट करना", "सिंगल यूनिट टेस्ट करना", "कोंबाइन यूनिट्स टेस्ट करना", "कोई टेस्टिंग नहीं"],
    "answer_en": "Testing complete system",
    "answer_hi": "कंप्लीट सिस्टम टेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is regression testing?",
    "question_hi": "रिग्रेशन टेस्टिंग क्या है?",
    "options_en": ["Testing after changes to ensure nothing broken", "First time testing", "No testing", "Compiling"],
    "options_hi": ["चेंजेस के बाद टेस्ट करना कि कुछ टूटा नहीं", "पहली बार टेस्टिंग", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing after changes to ensure nothing broken",
    "answer_hi": "चेंजेस के बाद टेस्ट करना कि कुछ टूटा नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is a test case?",
    "question_hi": "टेस्ट केस क्या है?",
    "options_en": ["Specific input and expected output", "Random input", "No input", "Only output"],
    "options_hi": ["स्पेसिफिक इनपुट और एक्सपेक्टेड आउटपुट", "रैंडम इनपुट", "कोई इनपुट नहीं", "केवल आउटपुट"],
    "answer_en": "Specific input and expected output",
    "answer_hi": "स्पेसिफिक इनपुट और एक्सपेक्टेड आउटपुट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is a test suite?",
    "question_hi": "टेस्ट सुइट क्या है?",
    "options_en": ["Collection of test cases", "Single test case", "No tests", "Compiler"],
    "options_hi": ["टेस्ट केस का कलेक्शन", "सिंगल टेस्ट केस", "कोई टेस्ट नहीं", "कंपाइलर"],
    "answer_en": "Collection of test cases",
    "answer_hi": "टेस्ट केस का कलेक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is black box testing?",
    "question_hi": "ब्लैक बॉक्स टेस्टिंग क्या है?",
    "options_en": ["Testing without knowing internal code", "Testing knowing internal code", "No testing", "Compiling"],
    "options_hi": ["इंटरनल कोड जाने बिना टेस्टिंग", "इंटरनल कोड जानकर टेस्टिंग", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing without knowing internal code",
    "answer_hi": "इंटरनल कोड जाने बिना टेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is white box testing?",
    "question_hi": "व्हाइट बॉक्स टेस्टिंग क्या है?",
    "options_en": ["Testing knowing internal code", "Testing without knowing code", "No testing", "Compiling"],
    "options_hi": ["इंटरनल कोड जानकर टेस्टिंग", "कोड जाने बिना टेस्टिंग", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing knowing internal code",
    "answer_hi": "इंटरनल कोड जानकर टेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is boundary testing?",
    "question_hi": "बाउंडरी टेस्टिंग क्या है?",
    "options_en": ["Testing at edges of input ranges", "Testing middle values", "No testing", "Random testing"],
    "options_hi": ["इनपुट रेंज के एज पर टेस्टिंग", "मिडल वैल्यूज टेस्टिंग", "कोई टेस्टिंग नहीं", "रैंडम टेस्टिंग"],
    "answer_en": "Testing at edges of input ranges",
    "answer_hi": "इनपुट रेंज के एज पर टेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is stress testing?",
    "question_hi": "स्ट्रेस टेस्टिंग क्या है?",
    "options_en": ["Testing with extreme loads", "Normal testing", "No testing", "Compiling"],
    "options_hi": ["एक्सट्रीम लोड के साथ टेस्टिंग", "नॉर्मल टेस्टिंग", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing with extreme loads",
    "answer_hi": "एक्सट्रीम लोड के साथ टेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is usability testing?",
    "question_hi": "यूजेबिलिटी टेस्टिंग क्या है?",
    "options_en": ["Testing user-friendliness", "Testing functionality", "Testing speed", "Testing memory"],
    "options_hi": ["यूजर-फ्रेंडलीनेस टेस्ट करना", "फंक्शनैलिटी टेस्ट करना", "स्पीड टेस्ट करना", "मेमोरी टेस्ट करना"],
    "answer_en": "Testing user-friendliness",
    "answer_hi": "यूजर-फ्रेंडलीनेस टेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is performance testing?",
    "question_hi": "परफॉर्मेंस टेस्टिंग क्या है?",
    "options_en": ["Testing speed and efficiency", "Testing functionality", "Testing usability", "Testing security"],
    "options_hi": ["स्पीड और एफिशिएंसी टेस्ट करना", "फंक्शनैलिटी टेस्ट करना", "यूजेबिलिटी टेस्ट करना", "सिक्योरिटी टेस्ट करना"],
    "answer_en": "Testing speed and efficiency",
    "answer_hi": "स्पीड और एफिशिएंसी टेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is security testing?",
    "question_hi": "सिक्योरिटी टेस्टिंग क्या है?",
    "options_en": ["Testing vulnerabilities", "Testing speed", "Testing functionality", "Testing usability"],
    "options_hi": ["वल्नरेबिलिटीज टेस्ट करना", "स्पीड टेस्ट करना", "फंक्शनैलिटी टेस्ट करना", "यूजेबिलिटी टेस्ट करना"],
    "answer_en": "Testing vulnerabilities",
    "answer_hi": "वल्नरेबिलिटीज टेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is acceptance testing?",
    "question_hi": "एक्सेप्टेंस टेस्टिंग क्या है?",
    "options_en": ["Testing by end users", "Testing by developers", "No testing", "Compiling"],
    "options_hi": ["एंड यूजर्स द्वारा टेस्टिंग", "डेवलपर्स द्वारा टेस्टिंग", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing by end users",
    "answer_hi": "एंड यूजर्स द्वारा टेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is alpha testing?",
    "question_hi": "अल्फा टेस्टिंग क्या है?",
    "options_en": ["Testing by internal team", "Testing by customers", "No testing", "Compiling"],
    "options_hi": ["इंटरनल टीम द्वारा टेस्टिंग", "कस्टमर्स द्वारा टेस्टिंग", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing by internal team",
    "answer_hi": "इंटरनल टीम द्वारा टेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is beta testing?",
    "question_hi": "बीटा टेस्टिंग क्या है?",
    "options_en": ["Testing by select customers", "Testing by developers", "No testing", "Compiling"],
    "options_hi": ["सेलेक्ट कस्टमर्स द्वारा टेस्टिंग", "डेवलपर्स द्वारा टेस्टिंग", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing by select customers",
    "answer_hi": "सेलेक्ट कस्टमर्स द्वारा टेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is a bug report?",
    "question_hi": "बग रिपोर्ट क्या है?",
    "options_en": ["Document describing a bug", "Program output", "Test case", "Source code"],
    "options_hi": ["बग डिस्क्राइब करने वाला डॉक्यूमेंट", "प्रोग्राम आउटपुट", "टेस्ट केस", "सोर्स कोड"],
    "answer_en": "Document describing a bug",
    "answer_hi": "बग डिस्क्राइब करने वाला डॉक्यूमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is a bug tracker?",
    "question_hi": "बग ट्रैकर क्या है?",
    "options_en": ["System to track bugs", "Compiler", "Debugger", "Editor"],
    "options_hi": ["बग्स ट्रैक करने की सिस्टम", "कंपाइलर", "डीबगर", "एडिटर"],
    "answer_en": "System to track bugs",
    "answer_hi": "बग्स ट्रैक करने की सिस्टम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is version control?",
    "question_hi": "वर्जन कंट्रोल क्या है?",
    "options_en": ["Tracking changes to code", "Compiling code", "Running code", "Debugging code"],
    "options_hi": ["कोड में चेंजेस ट्रैक करना", "कोड कंपाइल करना", "कोड रन करना", "कोड डीबग करना"],
    "answer_en": "Tracking changes to code",
    "answer_hi": "कोड में चेंजेस ट्रैक करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "Example of version control system?",
    "question_hi": "वर्जन कंट्रोल सिस्टम का उदाहरण?",
    "options_en": ["Git", "Compiler", "Debugger", "Editor"],
    "options_hi": ["Git", "कंपाइलर", "डीबगर", "एडिटर"],
    "answer_en": "Git",
    "answer_hi": "Git",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is a repository?",
    "question_hi": "रिपॉजिटरी क्या है?",
    "options_en": ["Storage for code and history", "Compiler", "Debugger", "Editor"],
    "options_hi": ["कोड और हिस्ट्री के लिए स्टोरेज", "कंपाइलर", "डीबगर", "एडिटर"],
    "answer_en": "Storage for code and history",
    "answer_hi": "कोड और हिस्ट्री के लिए स्टोरेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is a commit?",
    "question_hi": "कमिट क्या है?",
    "options_en": ["Save changes to repository", "Compile code", "Run code", "Debug code"],
    "options_hi": ["रिपॉजिटरी में चेंजेस सेव", "कोड कंपाइल", "कोड रन", "कोड डीबग"],
    "answer_en": "Save changes to repository",
    "answer_hi": "रिपॉजिटरी में चेंजेस सेव",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is branching in version control?",
    "question_hi": "वर्जन कंट्रोल में ब्रांचिंग क्या है?",
    "options_en": ["Creating separate line of development", "Compiling code", "Running code", "Debugging code"],
    "options_hi": ["डेवलपमेंट की अलग लाइन क्रिएट करना", "कोड कंपाइल करना", "कोड रन करना", "कोड डीबग करना"],
    "answer_en": "Creating separate line of development",
    "answer_hi": "डेवलपमेंट की अलग लाइन क्रिएट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is merging in version control?",
    "question_hi": "वर्जन कंट्रोल में मर्जिंग क्या है?",
    "options_en": ["Combining changes from different branches", "Creating branch", "Deleting branch", "Committing code"],
    "options_hi": ["अलग ब्रांचेस से चेंजेस कोंबाइन करना", "ब्रांच क्रिएट करना", "ब्रांच डिलीट करना", "कोड कमिट करना"],
    "answer_en": "Combining changes from different branches",
    "answer_hi": "अलग ब्रांचेस से चेंजेस कोंबाइन करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is a conflict in version control?",
    "question_hi": "वर्जन कंट्रोल में कॉनफ्लिक्ट क्या है?",
    "options_en": ["Same code changed differently in branches", "No changes", "Same changes", "Different files"],
    "options_hi": ["समान कोड ब्रांचेस में अलग तरीके से चेंज", "कोई चेंज नहीं", "समान चेंजेस", "अलग फाइल्स"],
    "answer_en": "Same code changed differently in branches",
    "answer_hi": "समान कोड ब्रांचेस में अलग तरीके से चेंज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is software documentation?",
    "question_hi": "सॉफ्टवेयर डॉक्यूमेंटेशन क्या है?",
    "options_en": ["Written information about software", "Source code", "Executable", "Object file"],
    "options_hi": ["सॉफ्टवेयर के बारे में लिखित जानकारी", "सोर्स कोड", "एग्जीक्यूटेबल", "ऑब्जेक्ट फाइल"],
    "answer_en": "Written information about software",
    "answer_hi": "सॉफ्टवेयर के बारे में लिखित जानकारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is inline documentation?",
    "question_hi": "इनलाइन डॉक्यूमेंटेशन क्या है?",
    "options_en": ["Comments within code", "Separate document", "User manual", "Readme file"],
    "options_hi": ["कोड के अंदर कमेंट्स", "अलग डॉक्यूमेंट", "यूजर मैनुअल", "रीडमी फाइल"],
    "answer_en": "Comments within code",
    "answer_hi": "कोड के अंदर कमेंट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is a readme file?",
    "question_hi": "रीडमी फाइल क्या है?",
    "options_en": ["Introductory document for software", "Source code", "Executable", "Header file"],
    "options_hi": ["सॉफ्टवेयर के लिए परिचयात्मक डॉक्यूमेंट", "सोर्स कोड", "एग्जीक्यूटेबल", "हेडर फाइल"],
    "answer_en": "Introductory document for software",
    "answer_hi": "सॉफ्टवेयर के लिए परिचयात्मक डॉक्यूमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is a user manual?",
    "question_hi": "यूजर मैनुअल क्या है?",
    "options_en": ["Guide for end users", "Source code", "Developer guide", "Readme file"],
    "options_hi": ["एंड यूजर्स के लिए गाइड", "सोर्स कोड", "डेवलपर गाइड", "रीडमी फाइल"],
    "answer_en": "Guide for end users",
    "answer_hi": "एंड यूजर्स के लिए गाइड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is a technical specification?",
    "question_hi": "टेक्निकल स्पेसिफिकेशन क्या है?",
    "options_en": ["Detailed description of software requirements", "User manual", "Readme file", "Source code"],
    "options_hi": ["सॉफ्टवेयर रिक्वायरमेंट्स का डिटेल्ड डिस्क्रिप्शन", "यूजर मैनुअल", "रीडमी फाइल", "सोर्स कोड"],
    "answer_en": "Detailed description of software requirements",
    "answer_hi": "सॉफ्टवेयर रिक्वायरमेंट्स का डिटेल्ड डिस्क्रिप्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is an algorithm?",
    "question_hi": "एल्गोरिदम क्या है?",
    "options_en": ["Step-by-step procedure to solve problem", "Source code", "Executable", "Documentation"],
    "options_hi": ["प्रॉब्लम सॉल्व करने के लिए स्टेप-बाय-स्टेप प्रोसीजर", "सोर्स कोड", "एग्जीक्यूटेबल", "डॉक्यूमेंटेशन"],
    "answer_en": "Step-by-step procedure to solve problem",
    "answer_hi": "प्रॉब्लम सॉल्व करने के लिए स्टेप-बाय-स्टेप प्रोसीजर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is a flowchart?",
    "question_hi": "फ्लोचार्ट क्या है?",
    "options_en": ["Visual representation of algorithm", "Source code", "Executable", "Documentation"],
    "options_hi": ["एल्गोरिदम का विजुअल रिप्रजेंटेशन", "सोर्स कोड", "एग्जीक्यूटेबल", "डॉक्यूमेंटेशन"],
    "answer_en": "Visual representation of algorithm",
    "answer_hi": "एल्गोरिदम का विजुअल रिप्रजेंटेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is pseudocode?",
    "question_hi": "स्यूडोकोड क्या है?",
    "options_en": ["Informal description of algorithm", "Actual code", "Executable", "Flowchart"],
    "options_hi": ["एल्गोरिदम का इनफॉर्मल डिस्क्रिप्शन", "एक्चुअल कोड", "एग्जीक्यूटेबल", "फ्लोचार्ट"],
    "answer_en": "Informal description of algorithm",
    "answer_hi": "एल्गोरिदम का इनफॉर्मल डिस्क्रिप्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is program maintenance?",
    "question_hi": "प्रोग्राम मेंटेनेंस क्या है?",
    "options_en": ["Updating and fixing program after release", "Writing initial code", "Compiling code", "Running code"],
    "options_hi": ["रिलीज के बाद प्रोग्राम अपडेट और फिक्स करना", "इनिशियल कोड लिखना", "कोड कंपाइल करना", "कोड रन करना"],
    "answer_en": "Updating and fixing program after release",
    "answer_hi": "रिलीज के बाद प्रोग्राम अपडेट और फिक्स करना",
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