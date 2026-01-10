const questions=[
  {
    "num": 1,
    "question_en": "What is the smallest complete C program?",
    "question_hi": "सबसे छोटा पूर्ण C प्रोग्राम क्या है?",
    "options_en": ["int main(){}", "main(){}", "void main(){}", "start(){}"],
    "options_hi": ["int main(){}", "main(){}", "void main(){}", "start(){}"],
    "answer_en": "int main(){}",
    "answer_hi": "int main(){}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the compiler do?",
    "question_hi": "कंपाइलर क्या करता है?",
    "options_en": ["Checks syntax and converts to machine code", "Runs program", "Writes program", "Debugs program"],
    "options_hi": ["सिंटैक्स चेक करता है और मशीन कोड में बदलता है", "प्रोग्राम चलाता है", "प्रोग्राम लिखता है", "प्रोग्राम डीबग करता है"],
    "answer_en": "Checks syntax and converts to machine code",
    "answer_hi": "सिंटैक्स चेक करता है और मशीन कोड में बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is syntax in programming?",
    "question_hi": "प्रोग्रामिंग में सिंटैक्स क्या है?",
    "options_en": ["Rules of writing code", "Meaning of code", "Output of program", "Speed of program"],
    "options_hi": ["कोड लिखने के नियम", "कोड का अर्थ", "प्रोग्राम का आउटपुट", "प्रोग्राम की गति"],
    "answer_en": "Rules of writing code",
    "answer_hi": "कोड लिखने के नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is a syntax error?",
    "question_hi": "सिंटैक्स एरर क्या है?",
    "options_en": ["Mistake in code grammar", "Mistake in logic", "Program runs slow", "Program crashes"],
    "options_hi": ["कोड ग्रामर में गलती", "लॉजिक में गलती", "प्रोग्राम धीमा चलता है", "प्रोग्राम क्रैश होता है"],
    "answer_en": "Mistake in code grammar",
    "answer_hi": "कोड ग्रामर में गलती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Example of syntax error?",
    "question_hi": "सिंटैक्स एरर का उदाहरण?",
    "options_en": ["printf(\"Hello\"", "printf(\"Hello\");", "5 + 3", "x = 10;"],
    "options_hi": ["printf(\"Hello\"", "printf(\"Hello\");", "5 + 3", "x = 10;"],
    "answer_en": "printf(\"Hello\"",
    "answer_hi": "printf(\"Hello\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is a logical error?",
    "question_hi": "लॉजिकल एरर क्या है?",
    "options_en": ["Program works but gives wrong result", "Won't compile", "Crashes immediately", "No output"],
    "options_hi": ["प्रोग्राम काम करता है लेकिन गलत रिजल्ट देता है", "कंपाइल नहीं होगा", "तुरंत क्रैश होता है", "कोई आउटपुट नहीं"],
    "answer_en": "Program works but gives wrong result",
    "answer_hi": "प्रोग्राम काम करता है लेकिन गलत रिजल्ट देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Example of logical error?",
    "question_hi": "लॉजिकल एरर का उदाहरण?",
    "options_en": ["Using + instead of *", "Missing semicolon", "Wrong header", "Extra bracket"],
    "options_hi": ["* के बजाय + उपयोग करना", "सेमीकॉलन गायब", "गलत हेडर", "अतिरिक्त ब्रैकेट"],
    "answer_en": "Using + instead of *",
    "answer_hi": "* के बजाय + उपयोग करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is a runtime error?",
    "question_hi": "रनटाइम एरर क्या है?",
    "options_en": ["Error during program execution", "Error during compilation", "No error", "Warning"],
    "options_hi": ["प्रोग्राम एक्जीक्यूशन के दौरान एरर", "कंपाइलेशन के दौरान एरर", "कोई एरर नहीं", "वार्निंग"],
    "answer_en": "Error during program execution",
    "answer_hi": "प्रोग्राम एक्जीक्यूशन के दौरान एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Example of runtime error?",
    "question_hi": "रनटाइम एरर का उदाहरण?",
    "options_en": ["Dividing by zero", "Missing comma", "Extra space", "Wrong comment"],
    "options_hi": ["शून्य से भाग देना", "कॉमा गायब", "अतिरिक्त स्पेस", "गलत कमेंट"],
    "answer_en": "Dividing by zero",
    "answer_hi": "शून्य से भाग देना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the difference between compiler and interpreter?",
    "question_hi": "कंपाइलर और इंटरप्रेटर में क्या अंतर है?",
    "options_en": ["Compiler translates all at once, interpreter line by line", "No difference", "Interpreter is faster", "Compiler is slower"],
    "options_hi": ["कंपाइलर एक बार में सब ट्रांसलेट करता है, इंटरप्रेटर लाइन बाय लाइन", "कोई अंतर नहीं", "इंटरप्रेटर तेज है", "कंपाइलर धीमा है"],
    "answer_en": "Compiler translates all at once, interpreter line by line",
    "answer_hi": "कंपाइलर एक बार में सब ट्रांसलेट करता है, इंटरप्रेटर लाइन बाय लाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
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
    "num": 12,
    "question_en": "What is an executable file?",
    "question_hi": "एग्जीक्यूटेबल फाइल क्या है?",
    "options_en": ["File that can be run", "Source code file", "Text file", "Image file"],
    "options_hi": ["फाइल जो चलाई जा सकती है", "सोर्स कोड फाइल", "टेक्स्ट फाइल", "इमेज फाइल"],
    "answer_en": "File that can be run",
    "answer_hi": "फाइल जो चलाई जा सकती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the .exe extension?",
    "question_hi": ".exe एक्सटेंशन क्या है?",
    "options_en": ["Executable file in Windows", "Source file", "Object file", "Header file"],
    "options_hi": ["विंडोज में एग्जीक्यूटेबल फाइल", "सोर्स फाइल", "ऑब्जेक्ट फाइल", "हेडर फाइल"],
    "answer_en": "Executable file in Windows",
    "answer_hi": "विंडोज में एग्जीक्यूटेबल फाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the .out extension?",
    "question_hi": ".out एक्सटेंशन क्या है?",
    "options_en": ["Executable file in Linux", "Source file", "Object file", "Header file"],
    "options_hi": ["लिनक्स में एग्जीक्यूटेबल फाइल", "सोर्स फाइल", "ऑब्जेक्ट फाइल", "हेडर फाइल"],
    "answer_en": "Executable file in Linux",
    "answer_hi": "लिनक्स में एग्जीक्यूटेबल फाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the .obj extension?",
    "question_hi": ".obj एक्सटेंशन क्या है?",
    "options_en": ["Object file", "Executable file", "Source file", "Header file"],
    "options_hi": ["ऑब्जेक्ट फाइल", "एग्जीक्यूटेबल फाइल", "सोर्स फाइल", "हेडर फाइल"],
    "answer_en": "Object file",
    "answer_hi": "ऑब्जेक्ट फाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is an IDE?",
    "question_hi": "IDE क्या है?",
    "options_en": ["Integrated Development Environment", "Compiler", "Text editor", "Debugger"],
    "options_hi": ["इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट", "कंपाइलर", "टेक्स्ट एडिटर", "डीबगर"],
    "answer_en": "Integrated Development Environment",
    "answer_hi": "इंटीग्रेटेड डेवलपमेंट एनवायरनमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What does IDE contain?",
    "question_hi": "IDE में क्या होता है?",
    "options_en": ["Editor, compiler, debugger", "Only editor", "Only compiler", "Only debugger"],
    "options_hi": ["एडिटर, कंपाइलर, डीबगर", "केवल एडिटर", "केवल कंपाइलर", "केवल डीबगर"],
    "answer_en": "Editor, compiler, debugger",
    "answer_hi": "एडिटर, कंपाइलर, डीबगर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "Example of C IDE?",
    "question_hi": "C IDE का उदाहरण?",
    "options_en": ["Code::Blocks", "Notepad", "Chrome", "Calculator"],
    "options_hi": ["Code::Blocks", "Notepad", "Chrome", "Calculator"],
    "answer_en": "Code::Blocks",
    "answer_hi": "Code::Blocks",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is a text editor?",
    "question_hi": "टेक्स्ट एडिटर क्या है?",
    "options_en": ["Program to write code", "Program to compile", "Program to run", "Program to debug"],
    "options_hi": ["कोड लिखने का प्रोग्राम", "कंपाइल करने का प्रोग्राम", "चलाने का प्रोग्राम", "डीबग करने का प्रोग्राम"],
    "answer_en": "Program to write code",
    "answer_hi": "कोड लिखने का प्रोग्राम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "Example of text editor?",
    "question_hi": "टेक्स्ट एडिटर का उदाहरण?",
    "options_en": ["Notepad++", "Code::Blocks", "Compiler", "Debugger"],
    "options_hi": ["Notepad++", "Code::Blocks", "कंपाइलर", "डीबगर"],
    "answer_en": "Notepad++",
    "answer_hi": "Notepad++",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is the difference between IDE and text editor?",
    "question_hi": "IDE और टेक्स्ट एडिटर में क्या अंतर है?",
    "options_en": ["IDE has more tools", "No difference", "Text editor has compiler", "IDE has no editor"],
    "options_hi": ["IDE में अधिक टूल्स हैं", "कोई अंतर नहीं", "टेक्स्ट एडिटर में कंपाइलर है", "IDE में कोई एडिटर नहीं"],
    "answer_en": "IDE has more tools",
    "answer_hi": "IDE में अधिक टूल्स हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is syntax highlighting?",
    "question_hi": "सिंटैक्स हाइलाइटिंग क्या है?",
    "options_en": ["Colors different parts of code", "Makes code faster", "Compiles code", "Runs code"],
    "options_hi": ["कोड के विभिन्न भागों को रंगता है", "कोड तेज बनाता है", "कोड कंपाइल करता है", "कोड चलाता है"],
    "answer_en": "Colors different parts of code",
    "answer_hi": "कोड के विभिन्न भागों को रंगता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Why is syntax highlighting useful?",
    "question_hi": "सिंटैक्स हाइलाइटिंग उपयोगी क्यों है?",
    "options_en": ["Easier to read code", "Makes code run faster", "Reduces errors", "Compiles faster"],
    "options_hi": ["कोड पढ़ना आसान", "कोड तेज चलता है", "एरर्स कम करता है", "तेज कंपाइल होता है"],
    "answer_en": "Easier to read code",
    "answer_hi": "कोड पढ़ना आसान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is auto-completion?",
    "question_hi": "ऑटो-कंप्लीशन क्या है?",
    "options_en": ["Suggests code while typing", "Compiles automatically", "Runs automatically", "Debugs automatically"],
    "options_hi": ["टाइप करते समय कोड सजेस्ट करता है", "ऑटोमैटिक कंपाइल करता है", "ऑटोमैटिक चलाता है", "ऑटोमैटिक डीबग करता है"],
    "answer_en": "Suggests code while typing",
    "answer_hi": "टाइप करते समय कोड सजेस्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is a project in programming?",
    "question_hi": "प्रोग्रामिंग में प्रोजेक्ट क्या है?",
    "options_en": ["Collection of files for one program", "Single file", "Folder", "Compiler"],
    "options_hi": ["एक प्रोग्राम के लिए फाइलों का संग्रह", "एक फाइल", "फोल्डर", "कंपाइलर"],
    "answer_en": "Collection of files for one program",
    "answer_hi": "एक प्रोग्राम के लिए फाइलों का संग्रह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is a workspace?",
    "question_hi": "वर्कस्पेस क्या है?",
    "options_en": ["Environment containing projects", "Single file", "Compiler", "Editor"],
    "options_hi": ["प्रोजेक्ट्स रखने वाला एनवायरनमेंट", "एक फाइल", "कंपाइलर", "एडिटर"],
    "answer_en": "Environment containing projects",
    "answer_hi": "प्रोजेक्ट्स रखने वाला एनवायरनमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is compiling called in IDE?",
    "question_hi": "IDE में कंपाइलिंग को क्या कहते हैं?",
    "options_en": ["Build", "Run", "Debug", "Edit"],
    "options_hi": ["बिल्ड", "रन", "डीबग", "एडिट"],
    "answer_en": "Build",
    "answer_hi": "बिल्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the difference between Build and Run?",
    "question_hi": "बिल्ड और रन में क्या अंतर है?",
    "options_en": ["Build compiles, Run executes", "Same thing", "Build runs, Run compiles", "No difference"],
    "options_hi": ["बिल्ड कंपाइल करता है, रन एक्जीक्यूट करता है", "एक ही चीज़", "बिल्ड चलाता है, रन कंपाइल करता है", "कोई अंतर नहीं"],
    "answer_en": "Build compiles, Run executes",
    "answer_hi": "बिल्ड कंपाइल करता है, रन एक्जीक्यूट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is Rebuild?",
    "question_hi": "रीबिल्ड क्या है?",
    "options_en": ["Clean and build everything", "Build only changed files", "Run program", "Debug program"],
    "options_hi": ["सब कुछ क्लीन और बिल्ड करना", "केवल बदली फाइलें बिल्ड करना", "प्रोग्राम चलाना", "प्रोग्राम डीबग करना"],
    "answer_en": "Clean and build everything",
    "answer_hi": "सब कुछ क्लीन और बिल्ड करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is Clean?",
    "question_hi": "क्लीन क्या है?",
    "options_en": ["Delete compiled files", "Delete source files", "Run program", "Debug program"],
    "options_hi": ["कंपाइल्ड फाइलें डिलीट करना", "सोर्स फाइलें डिलीट करना", "प्रोग्राम चलाना", "प्रोग्राम डीबग करना"],
    "answer_en": "Delete compiled files",
    "answer_hi": "कंपाइल्ड फाइलें डिलीट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is debugging?",
    "question_hi": "डीबगिंग क्या है?",
    "options_en": ["Finding and fixing errors", "Writing code", "Compiling code", "Running code"],
    "options_hi": ["एरर्स ढूंढना और ठीक करना", "कोड लिखना", "कोड कंपाइल करना", "कोड चलाना"],
    "answer_en": "Finding and fixing errors",
    "answer_hi": "एरर्स ढूंढना और ठीक करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is a debugger?",
    "question_hi": "डीबगर क्या है?",
    "options_en": ["Tool for debugging", "Tool for compiling", "Tool for editing", "Tool for running"],
    "options_hi": ["डीबगिंग के लिए टूल", "कंपाइलिंग के लिए टूल", "एडिटिंग के लिए टूल", "रनिंग के लिए टूल"],
    "answer_en": "Tool for debugging",
    "answer_hi": "डीबगिंग के लिए टूल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is a breakpoint?",
    "question_hi": "ब्रेकप्वाइंट क्या है?",
    "options_en": ["Point where program pauses", "Point where program starts", "Point where program ends", "Error point"],
    "options_hi": ["वह प्वाइंट जहां प्रोग्राम पॉज़ होता है", "वह प्वाइंट जहां प्रोग्राम शुरू होता है", "वह प्वाइंट जहां प्रोग्राम खत्म होता है", "एरर प्वाइंट"],
    "answer_en": "Point where program pauses",
    "answer_hi": "वह प्वाइंट जहां प्रोग्राम पॉज़ होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is Step Over in debugging?",
    "question_hi": "डीबगिंग में स्टेप ओवर क्या है?",
    "options_en": ["Execute line without entering functions", "Enter function", "Skip all", "Stop debugging"],
    "options_hi": ["फंक्शन में एंटर किए बिना लाइन एक्जीक्यूट करना", "फंक्शन में एंटर करना", "सब स्किप करना", "डीबगिंग रोकना"],
    "answer_en": "Execute line without entering functions",
    "answer_hi": "फंक्शन में एंटर किए बिना लाइन एक्जीक्यूट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is Step Into in debugging?",
    "question_hi": "डीबगिंग में स्टेप इंटो क्या है?",
    "options_en": ["Enter function call", "Skip function", "Execute all", "Stop program"],
    "options_hi": ["फंक्शन कॉल में एंटर करना", "फंक्शन स्किप करना", "सब एक्जीक्यूट करना", "प्रोग्राम रोकना"],
    "answer_en": "Enter function call",
    "answer_hi": "फंक्शन कॉल में एंटर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is Step Out in debugging?",
    "question_hi": "डीबगिंग में स्टेप आउट क्या है?",
    "options_en": ["Exit current function", "Enter function", "Skip all", "Stop debugging"],
    "options_hi": ["करंट फंक्शन से बाहर निकलना", "फंक्शन में एंटर करना", "सब स्किप करना", "डीबगिंग रोकना"],
    "answer_en": "Exit current function",
    "answer_hi": "करंट फंक्शन से बाहर निकलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is Watch in debugging?",
    "question_hi": "डीबगिंग में वॉच क्या है?",
    "options_en": ["Monitor variable values", "Monitor breakpoints", "Monitor functions", "Monitor output"],
    "options_hi": ["वेरिएबल वैल्यूज मॉनिटर करना", "ब्रेकप्वाइंट्स मॉनिटर करना", "फंक्शन्स मॉनिटर करना", "आउटपुट मॉनिटर करना"],
    "answer_en": "Monitor variable values",
    "answer_hi": "वेरिएबल वैल्यूज मॉनिटर करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is Call Stack in debugging?",
    "question_hi": "डीबगिंग में कॉल स्टैक क्या है?",
    "options_en": ["List of function calls", "List of variables", "List of breakpoints", "List of errors"],
    "options_hi": ["फंक्शन कॉल्स की लिस्ट", "वेरिएबल्स की लिस्ट", "ब्रेकप्वाइंट्स की लिस्ट", "एरर्स की लिस्ट"],
    "answer_en": "List of function calls",
    "answer_hi": "फंक्शन कॉल्स की लिस्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is a bug?",
    "question_hi": "बग क्या है?",
    "options_en": ["Error in program", "Feature", "Output", "Input"],
    "options_hi": ["प्रोग्राम में एरर", "फीचर", "आउटपुट", "इनपुट"],
    "answer_en": "Error in program",
    "answer_hi": "प्रोग्राम में एरर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "Origin of term 'bug' in programming?",
    "question_hi": "प्रोग्रामिंग में 'बग' शब्द की उत्पत्ति?",
    "options_en": ["Literal insect found in computer", "Short for buggy", "Random name", "Acronym"],
    "options_hi": ["कंप्यूटर में मिला शाब्दिक कीड़ा", "बग्गी का शॉर्ट", "रैंडम नाम", "एक्रोनिम"],
    "answer_en": "Literal insect found in computer",
    "answer_hi": "कंप्यूटर में मिला शाब्दिक कीड़ा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
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
    "num": 42,
    "question_en": "What is unit testing?",
    "question_hi": "यूनिट टेस्टिंग क्या है?",
    "options_en": ["Testing individual parts", "Testing whole program", "No testing", "Compiling"],
    "options_hi": ["इंडिविजुअल पार्ट्स टेस्ट करना", "पूरा प्रोग्राम टेस्ट करना", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing individual parts",
    "answer_hi": "इंडिविजुअल पार्ट्स टेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is integration testing?",
    "question_hi": "इंटीग्रेशन टेस्टिंग क्या है?",
    "options_en": ["Testing combined parts", "Testing single part", "No testing", "Compiling"],
    "options_hi": ["कोंबाइन पार्ट्स टेस्ट करना", "सिंगल पार्ट टेस्ट करना", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing combined parts",
    "answer_hi": "कोंबाइन पार्ट्स टेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is system testing?",
    "question_hi": "सिस्टम टेस्टिंग क्या है?",
    "options_en": ["Testing complete system", "Testing single unit", "No testing", "Compiling"],
    "options_hi": ["कंप्लीट सिस्टम टेस्ट करना", "सिंगल यूनिट टेस्ट करना", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing complete system",
    "answer_hi": "कंप्लीट सिस्टम टेस्ट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
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
    "num": 46,
    "question_en": "What is black box testing?",
    "question_hi": "ब्लैक बॉक्स टेस्टिंग क्या है?",
    "options_en": ["Testing without knowing internal code", "Testing knowing code", "No testing", "Compiling"],
    "options_hi": ["इंटरनल कोड जाने बिना टेस्टिंग", "कोड जानकर टेस्टिंग", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing without knowing internal code",
    "answer_hi": "इंटरनल कोड जाने बिना टेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
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
    "num": 48,
    "question_en": "What is regression testing?",
    "question_hi": "रिग्रेशन टेस्टिंग क्या है?",
    "options_en": ["Testing after changes", "First time testing", "No testing", "Compiling"],
    "options_hi": ["चेंजेस के बाद टेस्टिंग", "पहली बार टेस्टिंग", "कोई टेस्टिंग नहीं", "कंपाइलिंग"],
    "answer_en": "Testing after changes",
    "answer_hi": "चेंजेस के बाद टेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
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
    "num": 50,
    "question_en": "What is version control?",
    "question_hi": "वर्जन कंट्रोल क्या है?",
    "options_en": ["Tracking changes to code", "Compiling code", "Running code", "Debugging code"],
    "options_hi": ["कोड में चेंजेस ट्रैक करना", "कोड कंपाइल करना", "कोड चलाना", "कोड डीबग करना"],
    "answer_en": "Tracking changes to code",
    "answer_hi": "कोड में चेंजेस ट्रैक करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
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
    "num": 52,
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
    "num": 53,
    "question_en": "What is a commit?",
    "question_hi": "कमिट क्या है?",
    "options_en": ["Save changes to repository", "Compile code", "Run code", "Debug code"],
    "options_hi": ["रिपॉजिटरी में चेंजेस सेव करना", "कोड कंपाइल करना", "कोड चलाना", "कोड डीबग करना"],
    "answer_en": "Save changes to repository",
    "answer_hi": "रिपॉजिटरी में चेंजेस सेव करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is branching?",
    "question_hi": "ब्रांचिंग क्या है?",
    "options_en": ["Creating separate line of development", "Compiling code", "Running code", "Debugging code"],
    "options_hi": ["डेवलपमेंट की अलग लाइन बनाना", "कोड कंपाइल करना", "कोड चलाना", "कोड डीबग करना"],
    "answer_en": "Creating separate line of development",
    "answer_hi": "डेवलपमेंट की अलग लाइन बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is merging?",
    "question_hi": "मर्जिंग क्या है?",
    "options_en": ["Combining changes from branches", "Creating branch", "Deleting branch", "Committing"],
    "options_hi": ["ब्रांचेस से चेंजेस कोंबाइन करना", "ब्रांच बनाना", "ब्रांच डिलीट करना", "कमिटिंग"],
    "answer_en": "Combining changes from branches",
    "answer_hi": "ब्रांचेस से चेंजेस कोंबाइन करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
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
    "num": 57,
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
    "num": 58,
    "question_en": "What is a readme file?",
    "question_hi": "रीडमी फाइल क्या है?",
    "options_en": ["Introductory document", "Source code", "Executable", "Header file"],
    "options_hi": ["परिचयात्मक डॉक्यूमेंट", "सोर्स कोड", "एग्जीक्यूटेबल", "हेडर फाइल"],
    "answer_en": "Introductory document",
    "answer_hi": "परिचयात्मक डॉक्यूमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
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
    "num": 60,
    "question_en": "What is an algorithm?",
    "question_hi": "एल्गोरिदम क्या है?",
    "options_en": ["Step-by-step procedure", "Source code", "Executable", "Documentation"],
    "options_hi": ["स्टेप-बाय-स्टेप प्रोसीजर", "सोर्स कोड", "एग्जीक्यूटेबल", "डॉक्यूमेंटेशन"],
    "answer_en": "Step-by-step procedure",
    "answer_hi": "स्टेप-बाय-स्टेप प्रोसीजर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
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
    "num": 62,
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
    "num": 63,
    "question_en": "What is program maintenance?",
    "question_hi": "प्रोग्राम मेंटेनेंस क्या है?",
    "options_en": ["Updating and fixing after release", "Writing initial code", "Compiling code", "Running code"],
    "options_hi": ["रिलीज के बाद अपडेट और फिक्स करना", "इनिशियल कोड लिखना", "कोड कंपाइल करना", "कोड चलाना"],
    "answer_en": "Updating and fixing after release",
    "answer_hi": "रिलीज के बाद अपडेट और फिक्स करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is software lifecycle?",
    "question_hi": "सॉफ्टवेयर लाइफसाइकिल क्या है?",
    "options_en": ["Stages from planning to maintenance", "Only coding", "Only testing", "Only running"],
    "options_hi": ["प्लानिंग से मेंटेनेंस तक के स्टेज", "केवल कोडिंग", "केवल टेस्टिंग", "केवल रनिंग"],
    "answer_en": "Stages from planning to maintenance",
    "answer_hi": "प्लानिंग से मेंटेनेंस तक के स्टेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What are the stages of software development?",
    "question_hi": "सॉफ्टवेयर डेवलपमेंट के स्टेज क्या हैं?",
    "options_en": ["Planning, Design, Coding, Testing, Maintenance", "Only coding", "Only testing", "Only running"],
    "options_hi": ["प्लानिंग, डिजाइन, कोडिंग, टेस्टिंग, मेंटेनेंस", "केवल कोडिंग", "केवल टेस्टिंग", "केवल रनिंग"],
    "answer_en": "Planning, Design, Coding, Testing, Maintenance",
    "answer_hi": "प्लानिंग, डिजाइन, कोडिंग, टेस्टिंग, मेंटेनेंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is planning stage?",
    "question_hi": "प्लानिंग स्टेज क्या है?",
    "options_en": ["Deciding what to build", "Writing code", "Testing code", "Running code"],
    "options_hi": ["तय करना क्या बनाना है", "कोड लिखना", "कोड टेस्ट करना", "कोड चलाना"],
    "answer_en": "Deciding what to build",
    "answer_hi": "तय करना क्या बनाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is design stage?",
    "question_hi": "डिजाइन स्टेज क्या है?",
    "options_en": ["Designing how to build", "Writing code", "Testing code", "Running code"],
    "options_hi": ["डिजाइन करना कैसे बनाना है", "कोड लिखना", "कोड टेस्ट करना", "कोड चलाना"],
    "answer_en": "Designing how to build",
    "answer_hi": "डिजाइन करना कैसे बनाना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is coding stage?",
    "question_hi": "कोडिंग स्टेज क्या है?",
    "options_en": ["Writing actual code", "Planning", "Designing", "Testing"],
    "options_hi": ["एक्चुअल कोड लिखना", "प्लानिंग", "डिजाइनिंग", "टेस्टिंग"],
    "answer_en": "Writing actual code",
    "answer_hi": "एक्चुअल कोड लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is testing stage?",
    "question_hi": "टेस्टिंग स्टेज क्या है?",
    "options_en": ["Checking code works correctly", "Planning", "Designing", "Coding"],
    "options_hi": ["चेक करना कोड सही काम करता है", "प्लानिंग", "डिजाइनिंग", "कोडिंग"],
    "answer_en": "Checking code works correctly",
    "answer_hi": "चेक करना कोड सही काम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is maintenance stage?",
    "question_hi": "मेंटेनेंस स्टेज क्या है?",
    "options_en": ["Fixing and updating after release", "Planning", "Designing", "Coding"],
    "options_hi": ["रिलीज के बाद फिक्स और अपडेट करना", "प्लानिंग", "डिजाइनिंग", "कोडिंग"],
    "answer_en": "Fixing and updating after release",
    "answer_hi": "रिलीज के बाद फिक्स और अपडेट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is Waterfall model?",
    "question_hi": "वॉटरफॉल मॉडल क्या है?",
    "options_en": ["Sequential development stages", "Parallel stages", "Only coding", "No stages"],
    "options_hi": ["सीक्वेंशियल डेवलपमेंट स्टेज", "पैरेलल स्टेज", "केवल कोडिंग", "कोई स्टेज नहीं"],
    "answer_en": "Sequential development stages",
    "answer_hi": "सीक्वेंशियल डेवलपमेंट स्टेज",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is Agile methodology?",
    "question_hi": "एजाइल मेथोडोलॉजी क्या है?",
    "options_en": ["Iterative and incremental development", "Sequential", "Only testing", "No methodology"],
    "options_hi": ["इटरेटिव और इंक्रीमेंटल डेवलपमेंट", "सीक्वेंशियल", "केवल टेस्टिंग", "कोई मेथोडोलॉजी नहीं"],
    "answer_en": "Iterative and incremental development",
    "answer_hi": "इटरेटिव और इंक्रीमेंटल डेवलपमेंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is a programming paradigm?",
    "question_hi": "प्रोग्रामिंग पैराडाइम क्या है?",
    "options_en": ["Style of programming", "Language", "Compiler", "Editor"],
    "options_hi": ["प्रोग्रामिंग की शैली", "भाषा", "कंपाइलर", "एडिटर"],
    "answer_en": "Style of programming",
    "answer_hi": "प्रोग्रामिंग की शैली",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is procedural programming?",
    "question_hi": "प्रोसीजरल प्रोग्रामिंग क्या है?",
    "options_en": ["Based on procedures/functions", "Based on objects", "Based on logic", "Based on events"],
    "options_hi": ["प्रोसीजर/फंक्शन पर आधारित", "ऑब्जेक्ट पर आधारित", "लॉजिक पर आधारित", "इवेंट्स पर आधारित"],
    "answer_en": "Based on procedures/functions",
    "answer_hi": "प्रोसीजर/फंक्शन पर आधारित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "Is C procedural or object-oriented?",
    "question_hi": "C प्रोसीजरल है या ऑब्जेक्ट-ओरिएंटेड?",
    "options_en": ["Procedural", "Object-oriented", "Both", "Neither"],
    "options_hi": ["प्रोसीजरल", "ऑब्जेक्ट-ओरिएंटेड", "दोनों", "कोई नहीं"],
    "answer_en": "Procedural",
    "answer_hi": "प्रोसीजरल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is structured programming?",
    "question_hi": "स्ट्रक्चर्ड प्रोग्रामिंग क्या है?",
    "options_en": ["Using control structures", "No structure", "Random code", "Only loops"],
    "options_hi": ["कंट्रोल स्ट्रक्चर्स का उपयोग", "कोई स्ट्रक्चर नहीं", "रैंडम कोड", "केवल लूप्स"],
    "answer_en": "Using control structures",
    "answer_hi": "कंट्रोल स्ट्रक्चर्स का उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What are control structures?",
    "question_hi": "कंट्रोल स्ट्रक्चर्स क्या हैं?",
    "options_en": ["Sequential, selection, repetition", "Only variables", "Only functions", "Only comments"],
    "options_hi": ["सीक्वेंशियल, सिलेक्शन, रिपीटिशन", "केवल वेरिएबल", "केवल फंक्शन", "केवल कमेंट"],
    "answer_en": "Sequential, selection, repetition",
    "answer_hi": "सीक्वेंशियल, सिलेक्शन, रिपीटिशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is sequential structure?",
    "question_hi": "सीक्वेंशियल स्ट्रक्चर क्या है?",
    "options_en": ["Code executed in order", "Code jumps", "Code repeats", "Code selects"],
    "options_hi": ["कोड ऑर्डर में एक्जीक्यूट", "कोड जम्प", "कोड रिपीट", "कोड सिलेक्ट"],
    "answer_en": "Code executed in order",
    "answer_hi": "कोड ऑर्डर में एक्जीक्यूट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is selection structure?",
    "question_hi": "सिलेक्शन स्ट्रक्चर क्या है?",
    "options_en": ["Making decisions (if, switch)", "Repeating", "Sequencing", "No structure"],
    "options_hi": ["निर्णय लेना (if, switch)", "दोहराना", "क्रम में", "कोई स्ट्रक्चर नहीं"],
    "answer_en": "Making decisions (if, switch)",
    "answer_hi": "निर्णय लेना (if, switch)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is repetition structure?",
    "question_hi": "रिपीटिशन स्ट्रक्चर क्या है?",
    "options_en": ["Looping (for, while, do-while)", "Deciding", "Sequencing", "No structure"],
    "options_hi": ["लूपिंग (for, while, do-while)", "निर्णय", "क्रम में", "कोई स्ट्रक्चर नहीं"],
    "answer_en": "Looping (for, while, do-while)",
    "answer_hi": "लूपिंग (for, while, do-while)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is top-down design?",
    "question_hi": "टॉप-डाउन डिजाइन क्या है?",
    "options_en": ["Start from main problem, break into smaller", "Start from details", "No design", "Random design"],
    "options_hi": ["मुख्य प्रॉब्लम से शुरू, छोटे में तोड़ें", "डिटेल्स से शुरू", "कोई डिजाइन नहीं", "रैंडम डिजाइन"],
    "answer_en": "Start from main problem, break into smaller",
    "answer_hi": "मुख्य प्रॉब्लम से शुरू, छोटे में तोड़ें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is bottom-up design?",
    "question_hi": "बॉटम-अप डिजाइन क्या है?",
    "options_en": ["Start from small pieces, build up", "Start from main", "No design", "Random design"],
    "options_hi": ["छोटे टुकड़ों से शुरू, ऊपर बनाएं", "मुख्य से शुरू", "कोई डिजाइन नहीं", "रैंडम डिजाइन"],
    "answer_en": "Start from small pieces, build up",
    "answer_hi": "छोटे टुकड़ों से शुरू, ऊपर बनाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is modular programming?",
    "question_hi": "मॉड्यूलर प्रोग्रामिंग क्या है?",
    "options_en": ["Dividing program into modules", "One big module", "No modules", "Random code"],
    "options_hi": ["प्रोग्राम को मॉड्यूल में बांटना", "एक बड़ा मॉड्यूल", "कोई मॉड्यूल नहीं", "रैंडम कोड"],
    "answer_en": "Dividing program into modules",
    "answer_hi": "प्रोग्राम को मॉड्यूल में बांटना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is a module?",
    "question_hi": "मॉड्यूल क्या है?",
    "options_en": ["Independent unit of code", "Whole program", "Single line", "Comment"],
    "options_hi": ["कोड की इंडिपेंडेंट यूनिट", "पूरा प्रोग्राम", "सिंगल लाइन", "कमेंट"],
    "answer_en": "Independent unit of code",
    "answer_hi": "कोड की इंडिपेंडेंट यूनिट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What are advantages of modular programming?",
    "question_hi": "मॉड्यूलर प्रोग्रामिंग के फायदे क्या हैं?",
    "options_en": ["Easier to understand, test, maintain", "Harder", "No advantages", "Only disadvantage"],
    "options_hi": ["समझने, टेस्ट करने, मेंटेन करने में आसान", "कठिन", "कोई फायदा नहीं", "केवल नुकसान"],
    "answer_en": "Easier to understand, test, maintain",
    "answer_hi": "समझने, टेस्ट करने, मेंटेन करने में आसान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is code reuse?",
    "question_hi": "कोड रीयूज क्या है?",
    "options_en": ["Using same code multiple times", "Writing new code always", "No reuse", "Copy-paste only"],
    "options_hi": ["एक ही कोड मल्टीपल बार उपयोग", "हमेशा नया कोड लिखना", "कोई रीयूज नहीं", "केवल कॉपी-पेस्ट"],
    "answer_en": "Using same code multiple times",
    "answer_hi": "एक ही कोड मल्टीपल बार उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is a library?",
    "question_hi": "लाइब्रेरी क्या है?",
    "options_en": ["Collection of reusable code", "Single function", "Single variable", "Comment"],
    "options_hi": ["रीयूजेबल कोड का संग्रह", "सिंगल फंक्शन", "सिंगल वेरिएबल", "कमेंट"],
    "answer_en": "Collection of reusable code",
    "answer_hi": "रीयूजेबल कोड का संग्रह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "Example of C library?",
    "question_hi": "C लाइब्रेरी का उदाहरण?",
    "options_en": ["stdio.h", "mylib.c", "program.c", "data.txt"],
    "options_hi": ["stdio.h", "mylib.c", "program.c", "data.txt"],
    "answer_en": "stdio.h",
    "answer_hi": "stdio.h",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is an API?",
    "question_hi": "API क्या है?",
    "options_en": ["Application Programming Interface", "Program", "Compiler", "Editor"],
    "options_hi": ["एप्लिकेशन प्रोग्रामिंग इंटरफेस", "प्रोग्राम", "कंपाइलर", "एडिटर"],
    "answer_en": "Application Programming Interface",
    "answer_hi": "एप्लिकेशन प्रोग्रामिंग इंटरफेस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is portability?",
    "question_hi": "पोर्टेबिलिटी क्या है?",
    "options_en": ["Ability to run on different systems", "Only one system", "No portability", "Hard to move"],
    "options_hi": ["अलग सिस्टम पर चलाने की क्षमता", "केवल एक सिस्टम", "कोई पोर्टेबिलिटी नहीं", "मुश्किल से मूव"],
    "answer_en": "Ability to run on different systems",
    "answer_hi": "अलग सिस्टम पर चलाने की क्षमता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "Is C portable?",
    "question_hi": "क्या C पोर्टेबल है?",
    "options_en": ["Yes, highly portable", "No", "Sometimes", "Rarely"],
    "options_hi": ["हाँ, अत्यधिक पोर्टेबल", "नहीं", "कभी-कभी", "कभी-कभार"],
    "answer_en": "Yes, highly portable",
    "answer_hi": "हाँ, अत्यधिक पोर्टेबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is efficiency?",
    "question_hi": "एफिशिएंसी क्या है?",
    "options_en": ["Using resources effectively", "Wasting resources", "Slow program", "Buggy program"],
    "options_hi": ["संसाधन प्रभावी ढंग से उपयोग", "संसाधन बर्बाद", "धीमा प्रोग्राम", "बग्गी प्रोग्राम"],
    "answer_en": "Using resources effectively",
    "answer_hi": "संसाधन प्रभावी ढंग से उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "Is C efficient?",
    "question_hi": "क्या C एफिशिएंट है?",
    "options_en": ["Yes, very efficient", "No", "Sometimes", "Rarely"],
    "options_hi": ["हाँ, बहुत एफिशिएंट", "नहीं", "कभी-कभी", "कभी-कभार"],
    "answer_en": "Yes, very efficient",
    "answer_hi": "हाँ, बहुत एफिशिएंट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is readability?",
    "question_hi": "रीडेबिलिटी क्या है?",
    "options_en": ["How easy code is to read", "How fast code runs", "How small code is", "How many features"],
    "options_hi": ["कोड पढ़ना कितना आसान", "कोड कितना तेज चलता है", "कोड कितना छोटा है", "कितने फीचर"],
    "answer_en": "How easy code is to read",
    "answer_hi": "कोड पढ़ना कितना आसान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "How to improve code readability?",
    "question_hi": "कोड रीडेबिलिटी कैसे सुधारें?",
    "options_en": ["Use meaningful names, comments, formatting", "No comments", "Bad names", "No formatting"],
    "options_hi": ["मतलबपूर्ण नाम, कमेंट, फॉर्मेटिंग उपयोग", "कोई कमेंट नहीं", "खराब नाम", "कोई फॉर्मेटिंग नहीं"],
    "answer_en": "Use meaningful names, comments, formatting",
    "answer_hi": "मतलबपूर्ण नाम, कमेंट, फॉर्मेटिंग उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is maintainability?",
    "question_hi": "मेंटेनबिलिटी क्या है?",
    "options_en": ["How easy code is to modify", "How fast code runs", "How small code is", "How to write"],
    "options_hi": ["कोड संशोधित करना कितना आसान", "कोड कितना तेज चलता है", "कोड कितना छोटा है", "कैसे लिखें"],
    "answer_en": "How easy code is to modify",
    "answer_hi": "कोड संशोधित करना कितना आसान",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is scalability?",
    "question_hi": "स्केलेबिलिटी क्या है?",
    "options_en": ["Ability to handle growth", "Small size", "Fast speed", "Many features"],
    "options_hi": ["विकास संभालने की क्षमता", "छोटा साइज", "तेज गति", "कई फीचर"],
    "answer_en": "Ability to handle growth",
    "answer_hi": "विकास संभालने की क्षमता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is robustness?",
    "question_hi": "रोबस्टनेस क्या है?",
    "options_en": ["Ability to handle errors gracefully", "Crashes easily", "Fast", "Small"],
    "options_hi": ["एरर्स को ग्रेसफुली हैंडल करने की क्षमता", "आसानी से क्रैश", "तेज", "छोटा"],
    "answer_en": "Ability to handle errors gracefully",
    "answer_hi": "एरर्स को ग्रेसफुली हैंडल करने की क्षमता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the future of C programming?",
    "question_hi": "C प्रोग्रामिंग का भविष्य क्या है?",
    "options_en": ["Still widely used in systems", "Dead", "Only for beginners", "Replaced completely"],
    "options_hi": ["अभी भी सिस्टम में व्यापक उपयोग", "मृत", "केवल शुरुआती के लिए", "पूरी तरह से बदला"],
    "answer_en": "Still widely used in systems",
    "answer_hi": "अभी भी सिस्टम में व्यापक उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "Why learn C today?",
    "question_hi": "आज C क्यों सीखें?",
    "options_en": ["Foundation for other languages, systems programming", "No reason", "Only for history", "Waste of time"],
    "options_hi": ["अन्य भाषाओं की नींव, सिस्टम प्रोग्रामिंग", "कोई कारण नहीं", "केवल इतिहास के लिए", "समय बर्बाद"],
    "answer_en": "Foundation for other languages, systems programming",
    "answer_hi": "अन्य भाषाओं की नींव, सिस्टम प्रोग्रामिंग",
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