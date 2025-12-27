const questions=[
  {
    "num": 1,
    "question_en": "What is the output: int x = 5; printf(\"%d\", sizeof(x++));",
    "question_hi": "आउटपुट क्या है: int x = 5; printf(\"%d\", sizeof(x++));",
    "options_en": ["4 (size of int)", "5", "6", "Runtime error"],
    "options_hi": ["4 (int का आकार)", "5", "6", "रनटाइम त्रुटि"],
    "answer_en": "4 (size of int)",
    "answer_hi": "4 (int का आकार)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'restrict' keyword used for?",
    "question_hi": "'restrict' कीवर्ड का उपयोग किस लिए किया जाता है?",
    "options_en": ["To indicate no pointer aliasing", "To restrict memory access", "To make pointer constant", "For thread safety"],
    "options_hi": ["यह दर्शाने के लिए कि कोई पॉइंटर एलियासिंग नहीं है", "मेमोरी एक्सेस को प्रतिबंधित करने के लिए", "पॉइंटर को स्थिर बनाने के लिए", "थ्रेड सुरक्षा के लिए"],
    "answer_en": "To indicate no pointer aliasing",
    "answer_hi": "यह दर्शाने के लिए कि कोई पॉइंटर एलियासिंग नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'strict aliasing rule' in C?",
    "question_hi": "C में 'strict aliasing rule' क्या है?",
    "options_en": ["Different types cannot access same memory", "All types can access same memory", "Only similar types", "No such rule"],
    "options_hi": ["विभिन्न प्रकार समान मेमोरी एक्सेस नहीं कर सकते", "सभी प्रकार समान मेमोरी एक्सेस कर सकते हैं", "केवल समान प्रकार", "ऐसा कोई नियम नहीं"],
    "answer_en": "Different types cannot access same memory",
    "answer_hi": "विभिन्न प्रकार समान मेमोरी एक्सेस नहीं कर सकते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'sequence point' in C?",
    "question_hi": "C में 'sequence point' क्या है?",
    "options_en": ["Point where all side effects are complete", "Function start", "Variable declaration", "Loop start"],
    "options_hi": ["बिंदु जहाँ सभी साइड इफेक्ट पूर्ण होते हैं", "फ़ंक्शन शुरुआत", "वेरिएबल घोषणा", "लूप शुरुआत"],
    "answer_en": "Point where all side effects are complete",
    "answer_hi": "बिंदु जहाँ सभी साइड इफेक्ट पूर्ण होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'undefined behavior' example?",
    "question_hi": "'undefined behavior' उदाहरण क्या है?",
    "options_en": ["Accessing array out of bounds", "Valid array access", "Function call", "Variable assignment"],
    "options_hi": ["सरणी सीमा से बाहर पहुँचना", "वैध सरणी पहुँच", "फ़ंक्शन कॉल", "वेरिएबल असाइनमेंट"],
    "answer_en": "Accessing array out of bounds",
    "answer_hi": "सरणी सीमा से बाहर पहुँचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'implementation-defined behavior'?",
    "question_hi": "'implementation-defined behavior' क्या है?",
    "options_en": ["Behavior defined by compiler implementation", "Always same", "Undefined", "Standard defined"],
    "options_hi": ["कंपाइलर कार्यान्वयन द्वारा परिभाषित व्यवहार", "हमेशा समान", "अपरिभाषित", "मानक द्वारा परिभाषित"],
    "answer_en": "Behavior defined by compiler implementation",
    "answer_hi": "कंपाइलर कार्यान्वयन द्वारा परिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'unspecified behavior'?",
    "question_hi": "'unspecified behavior' क्या है?",
    "options_en": ["Behavior not specified by standard", "Always defined", "Compiler error", "Runtime error"],
    "options_hi": ["मानक द्वारा निर्दिष्ट नहीं व्यवहार", "हमेशा परिभाषित", "कंपाइलर त्रुटि", "रनटाइम त्रुटि"],
    "answer_en": "Behavior not specified by standard",
    "answer_hi": "मानक द्वारा निर्दिष्ट नहीं व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'locale-specific behavior'?",
    "question_hi": "'locale-specific behavior' क्या है?",
    "options_en": ["Behavior depends on locale", "Always same", "Undefined", "Compiler specific"],
    "options_hi": ["व्यवहार लोकेल पर निर्भर करता है", "हमेशा समान", "अपरिभाषित", "कंपाइलर विशिष्ट"],
    "answer_en": "Behavior depends on locale",
    "answer_hi": "व्यवहार लोकेल पर निर्भर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'effective type' in C?",
    "question_hi": "C में 'effective type' क्या है?",
    "options_en": ["Type used to access object", "Declared type", "Inferred type", "No such concept"],
    "options_hi": ["ऑब्जेक्ट एक्सेस करने के लिए उपयोग किया गया प्रकार", "घोषित प्रकार", "अनुमानित प्रकार", "ऐसी कोई अवधारणा नहीं"],
    "answer_en": "Type used to access object",
    "answer_hi": "ऑब्जेक्ट एक्सेस करने के लिए उपयोग किया गया प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'type punning'?",
    "question_hi": "'type punning' क्या है?",
    "options_en": ["Accessing object as different type", "Type casting", "Type conversion", "Type checking"],
    "options_hi": ["ऑब्जेक्ट को भिन्न प्रकार के रूप में एक्सेस करना", "टाइप कास्टिंग", "टाइप रूपांतरण", "टाइप जाँच"],
    "answer_en": "Accessing object as different type",
    "answer_hi": "ऑब्जेक्ट को भिन्न प्रकार के रूप में एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'trap representation'?",
    "question_hi": "'trap representation' क्या है?",
    "options_en": ["Bit pattern causing undefined behavior", "Valid value", "Zero", "NULL"],
    "options_hi": ["बिट पैटर्न जो अपरिभाषित व्यवहार का कारण बनता है", "मान्य मान", "शून्य", "NULL"],
    "answer_en": "Bit pattern causing undefined behavior",
    "answer_hi": "बिट पैटर्न जो अपरिभाषित व्यवहार का कारण बनता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'padding bits'?",
    "question_hi": "'padding bits' क्या हैं?",
    "options_en": ["Extra bits in storage representation", "Data bits", "Sign bits", "Parity bits"],
    "options_hi": ["भंडारण प्रतिनिधित्व में अतिरिक्त बिट्स", "डेटा बिट्स", "संकेत बिट्स", "समता बिट्स"],
    "answer_en": "Extra bits in storage representation",
    "answer_hi": "भंडारण प्रतिनिधित्व में अतिरिक्त बिट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'volatile' qualifier?",
    "question_hi": "'volatile' क्वालीफायर क्या है?",
    "options_en": ["Variable may change unexpectedly", "Constant variable", "Thread-safe variable", "Atomic variable"],
    "options_hi": ["चर अप्रत्याशित रूप से बदल सकता है", "स्थिर चर", "थ्रेड-सुरक्षित चर", "परमाणु चर"],
    "answer_en": "Variable may change unexpectedly",
    "answer_hi": "चर अप्रत्याशित रूप से बदल सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'atomic' type in C11?",
    "question_hi": "C11 में 'atomic' प्रकार क्या है?",
    "options_en": ["Type for atomic operations", "Volatile type", "Thread type", "Lock type"],
    "options_hi": ["परमाणु संचालन के लिए प्रकार", "परिवर्तनशील प्रकार", "थ्रेड प्रकार", "लॉक प्रकार"],
    "answer_en": "Type for atomic operations",
    "answer_hi": "परमाणु संचालन के लिए प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'memory_order' in C11?",
    "question_hi": "C11 में 'memory_order' क्या है?",
    "options_en": ["Memory ordering constraints for atomics", "Memory allocation order", "Memory access order", "Memory layout"],
    "options_hi": ["परमाणु के लिए मेमोरी आदेश बाधाएँ", "मेमोरी आवंटन क्रम", "मेमोरी एक्सेस क्रम", "मेमोरी लेआउट"],
    "answer_en": "Memory ordering constraints for atomics",
    "answer_hi": "परमाणु के लिए मेमोरी आदेश बाधाएँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'thread_local' storage?",
    "question_hi": "'thread_local' संग्रहण क्या है?",
    "options_en": ["Variable unique to each thread", "Shared between threads", "Global variable", "Static variable"],
    "options_hi": ["प्रत्येक थ्रेड के लिए अद्वितीय चर", "थ्रेड के बीच साझा", "वैश्विक चर", "स्थैतिक चर"],
    "answer_en": "Variable unique to each thread",
    "answer_hi": "प्रत्येक थ्रेड के लिए अद्वितीय चर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'flexible array member'?",
    "question_hi": "'flexible array member' क्या है?",
    "options_en": ["Array without specified size at end of struct", "Dynamic array", "Variable array", "Pointer array"],
    "options_hi": ["संरचना के अंत में निर्दिष्ट आकार के बिना सरणी", "गतिशील सरणी", "परिवर्तनशील सरणी", "पॉइंटर सरणी"],
    "answer_en": "Array without specified size at end of struct",
    "answer_hi": "संरचना के अंत में निर्दिष्ट आकार के बिना सरणी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'designated initializer'?",
    "question_hi": "'designated initializer' क्या है?",
    "options_en": ["Initialize specific members of struct/array", "Initialize all members", "Default initialization", "Zero initialization"],
    "options_hi": ["संरचना/सरणी के विशिष्ट सदस्यों को प्रारंभ करें", "सभी सदस्यों को प्रारंभ करें", "डिफ़ॉल्ट आरंभीकरण", "शून्य आरंभीकरण"],
    "answer_en": "Initialize specific members of struct/array",
    "answer_hi": "संरचना/सरणी के विशिष्ट सदस्यों को प्रारंभ करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'compound literal'?",
    "question_hi": "'compound literal' क्या है?",
    "options_en": ["Anonymous object with initializer", "Literal constant", "String literal", "Numeric literal"],
    "options_hi": ["प्रारंभकर्ता के साथ अनाम वस्तु", "अक्षर स्थिरांक", "स्ट्रिंग लिटरल", "संख्यात्मक लिटरल"],
    "answer_en": "Anonymous object with initializer",
    "answer_hi": "प्रारंभकर्ता के साथ अनाम वस्तु",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'variable length array' (VLA)?",
    "question_hi": "'variable length array' (VLA) क्या है?",
    "options_en": ["Array with runtime size", "Dynamic array", "malloc array", "Fixed array"],
    "options_hi": ["रनटाइम आकार के साथ सरणी", "गतिशील सरणी", "malloc सरणी", "निश्चित सरणी"],
    "answer_en": "Array with runtime size",
    "answer_hi": "रनटाइम आकार के साथ सरणी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is '_Generic' selection?",
    "question_hi": "'_Generic' चयन क्या है?",
    "options_en": ["Type-generic selection at compile time", "Runtime type selection", "Function overloading", "Template"],
    "options_hi": ["कंपाइल समय पर प्रकार-सामान्य चयन", "रनटाइम प्रकार चयन", "फ़ंक्शन ओवरलोडिंग", "टेम्प्लेट"],
    "answer_en": "Type-generic selection at compile time",
    "answer_hi": "कंपाइल समय पर प्रकार-सामान्य चयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is '_Static_assert'?",
    "question_hi": "'_Static_assert' क्या है?",
    "options_en": ["Compile-time assertion", "Runtime assertion", "Debug assertion", "No assert"],
    "options_hi": ["कंपाइल-टाइम असेर्शन", "रनटाइम असेर्शन", "डीबग असेर्शन", "कोई असेर्शन नहीं"],
    "answer_en": "Compile-time assertion",
    "answer_hi": "कंपाइल-टाइम असेर्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is '_Alignas' specifier?",
    "question_hi": "'_Alignas' स्पेसिफायर क्या है?",
    "options_en": ["Specify alignment requirement", "Specify size", "Specify type", "Specify storage"],
    "options_hi": ["संरेखण आवश्यकता निर्दिष्ट करें", "आकार निर्दिष्ट करें", "प्रकार निर्दिष्ट करें", "संग्रहण निर्दिष्ट करें"],
    "answer_en": "Specify alignment requirement",
    "answer_hi": "संरेखण आवश्यकता निर्दिष्ट करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is '_Alignof' operator?",
    "question_hi": "'_Alignof' ऑपरेटर क्या है?",
    "options_en": ["Get alignment requirement of type", "Get size", "Get address", "Get type"],
    "options_hi": ["प्रकार की संरेखण आवश्यकता प्राप्त करें", "आकार प्राप्त करें", "पता प्राप्त करें", "प्रकार प्राप्त करें"],
    "answer_en": "Get alignment requirement of type",
    "answer_hi": "प्रकार की संरेखण आवश्यकता प्राप्त करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is '_Noreturn' function specifier?",
    "question_hi": "'_Noreturn' फ़ंक्शन स्पेसिफायर क्या है?",
    "options_en": ["Function does not return", "Function always returns", "Void function", "Main function"],
    "options_hi": ["फ़ंक्शन वापस नहीं आता है", "फ़ंक्शन हमेशा लौटता है", "वॉइड फ़ंक्शन", "मुख्य फ़ंक्शन"],
    "answer_en": "Function does not return",
    "answer_hi": "फ़ंक्शन वापस नहीं आता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'complex' type in C?",
    "question_hi": "C में 'complex' प्रकार क्या है?",
    "options_en": ["Complex number type", "Complicated type", "Struct type", "Union type"],
    "options_hi": ["जटिल संख्या प्रकार", "जटिल प्रकार", "संरचना प्रकार", "यूनियन प्रकार"],
    "answer_en": "Complex number type",
    "answer_hi": "जटिल संख्या प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'imaginary' type in C?",
    "question_hi": "C में 'imaginary' प्रकार क्या है?",
    "options_en": ["Pure imaginary number type", "Real number type", "Complex type", "No such type"],
    "options_hi": ["शुद्ध काल्पनिक संख्या प्रकार", "वास्तविक संख्या प्रकार", "जटिल प्रकार", "ऐसा कोई प्रकार नहीं"],
    "answer_en": "Pure imaginary number type",
    "answer_hi": "शुद्ध काल्पनिक संख्या प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'decimal floating' type?",
    "question_hi": "'decimal floating' प्रकार क्या है?",
    "options_en": ["Decimal floating-point type", "Binary floating-point", "Integer type", "Fixed-point"],
    "options_hi": ["दशमलव फ़्लोटिंग-पॉइंट प्रकार", "बाइनरी फ़्लोटिंग-पॉइंट", "पूर्णांक प्रकार", "निश्चित-बिंदु"],
    "answer_en": "Decimal floating-point type",
    "answer_hi": "दशमलव फ़्लोटिंग-पॉइंट प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'binary integer literal'?",
    "question_hi": "'binary integer literal' क्या है?",
    "options_en": ["Integer literal in binary (0b1010)", "Hexadecimal literal", "Octal literal", "Decimal literal"],
    "options_hi": ["बाइनरी में पूर्णांक लिटरल (0b1010)", "हेक्साडेसिमल लिटरल", "ऑक्टल लिटरल", "दशमलव लिटरल"],
    "answer_en": "Integer literal in binary (0b1010)",
    "answer_hi": "बाइनरी में पूर्णांक लिटरल (0b1010)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'digit separator' in numeric literals?",
    "question_hi": "संख्यात्मक लिटरल में 'digit separator' क्या है?",
    "options_en": ["Apostrophe as separator (1'000'000)", "Underscore separator", "Comma separator", "No separator"],
    "options_hi": ["विभाजक के रूप में एपॉस्ट्रोफी (1'000'000)", "अंडरस्कोर विभाजक", "अल्पविराम विभाजक", "कोई विभाजक नहीं"],
    "answer_en": "Apostrophe as separator (1'000'000)",
    "answer_hi": "विभाजक के रूप में एपॉस्ट्रोफी (1'000'000)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'UTF-8 string literal'?",
    "question_hi": "'UTF-8 string literal' क्या है?",
    "options_en": ["u8\"string\" for UTF-8 encoding", "L\"string\"", "u\"string\"", "U\"string\""],
    "options_hi": ["UTF-8 एन्कोडिंग के लिए u8\"string\"", "L\"string\"", "u\"string\"", "U\"string\""],
    "answer_en": "u8\"string\" for UTF-8 encoding",
    "answer_hi": "UTF-8 एन्कोडिंग के लिए u8\"string\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'UTF-16 string literal'?",
    "question_hi": "'UTF-16 string literal' क्या है?",
    "options_en": ["u\"string\" for UTF-16 encoding", "u8\"string\"", "L\"string\"", "U\"string\""],
    "options_hi": ["UTF-16 एन्कोडिंग के लिए u\"string\"", "u8\"string\"", "L\"string\"", "U\"string\""],
    "answer_en": "u\"string\" for UTF-16 encoding",
    "answer_hi": "UTF-16 एन्कोडिंग के लिए u\"string\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'UTF-32 string literal'?",
    "question_hi": "'UTF-32 string literal' क्या है?",
    "options_en": ["U\"string\" for UTF-32 encoding", "u8\"string\"", "u\"string\"", "L\"string\""],
    "options_hi": ["UTF-32 एन्कोडिंग के लिए U\"string\"", "u8\"string\"", "u\"string\"", "L\"string\""],
    "answer_en": "U\"string\" for UTF-32 encoding",
    "answer_hi": "UTF-32 एन्कोडिंग के लिए U\"string\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'wide string literal'?",
    "question_hi": "'wide string literal' क्या है?",
    "options_en": ["L\"string\" for wide characters", "u8\"string\"", "u\"string\"", "U\"string\""],
    "options_hi": ["वाइड वर्णों के लिए L\"string\"", "u8\"string\"", "u\"string\"", "U\"string\""],
    "answer_en": "L\"string\" for wide characters",
    "answer_hi": "वाइड वर्णों के लिए L\"string\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'hexadecimal floating constant'?",
    "question_hi": "'hexadecimal floating constant' क्या है?",
    "options_en": ["0x1.0p-1 syntax", "0x1.0", "0x1.0e-1", "No hex float"],
    "options_hi": ["0x1.0p-1 सिंटैक्स", "0x1.0", "0x1.0e-1", "कोई हेक्स फ़्लोट नहीं"],
    "answer_en": "0x1.0p-1 syntax",
    "answer_hi": "0x1.0p-1 सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'complex literal'?",
    "question_hi": "'complex literal' क्या है?",
    "options_en": ["1.0 + 2.0*I", "1.0 + 2.0i", "Both a and b", "No complex literal"],
    "options_hi": ["1.0 + 2.0*I", "1.0 + 2.0i", "a और b दोनों", "कोई जटिल लिटरल नहीं"],
    "answer_en": "Both a and b",
    "answer_hi": "a और b दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'anonymous struct/union'?",
    "question_hi": "'anonymous struct/union' क्या है?",
    "options_en": ["Struct/union without tag name", "Typedef struct", "Named struct", "No anonymous"],
    "options_hi": ["टैग नाम के बिना संरचना/यूनियन", "टाइपडेफ संरचना", "नामित संरचना", "कोई अनाम नहीं"],
    "answer_en": "Struct/union without tag name",
    "answer_hi": "टैग नाम के बिना संरचना/यूनियन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'forward declaration'?",
    "question_hi": "'forward declaration' क्या है?",
    "options_en": ["Declaration without definition", "Function definition", "Variable definition", "Type definition"],
    "options_hi": ["परिभाषा के बिना घोषणा", "फ़ंक्शन परिभाषा", "वेरिएबल परिभाषा", "प्रकार परिभाषा"],
    "answer_en": "Declaration without definition",
    "answer_hi": "परिभाषा के बिना घोषणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'tentative definition'?",
    "question_hi": "'tentative definition' क्या है?",
    "options_en": ["External declaration without initializer", "Complete definition", "Function definition", "Type definition"],
    "options_hi": ["प्रारंभकर्ता के बिना बाहरी घोषणा", "पूर्ण परिभाषा", "फ़ंक्शन परिभाषा", "प्रकार परिभाषा"],
    "answer_en": "External declaration without initializer",
    "answer_hi": "प्रारंभकर्ता के बिना बाहरी घोषणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'common symbol'?",
    "question_hi": "'common symbol' क्या है?",
    "options_en": ["Tentative definition symbol", "Strong symbol", "Weak symbol", "No common"],
    "options_hi": ["अस्थायी परिभाषा प्रतीक", "मजबूत प्रतीक", "कमजोर प्रतीक", "कोई सामान्य नहीं"],
    "answer_en": "Tentative definition symbol",
    "answer_hi": "अस्थायी परिभाषा प्रतीक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'weak symbol'?",
    "question_hi": "'weak symbol' क्या है?",
    "options_en": ["Symbol that can be overridden", "Strong symbol", "Common symbol", "No weak"],
    "options_hi": ["प्रतीक जिसे ओवरराइड किया जा सकता है", "मजबूत प्रतीक", "सामान्य प्रतीक", "कोई कमजोर नहीं"],
    "answer_en": "Symbol that can be overridden",
    "answer_hi": "प्रतीक जिसे ओवरराइड किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'inline function'?",
    "question_hi": "'inline function' क्या है?",
    "options_en": ["Function expanded at call site", "External function", "Static function", "Macro function"],
    "options_hi": ["कॉल साइट पर विस्तारित फ़ंक्शन", "बाहरी फ़ंक्शन", "स्थैतिक फ़ंक्शन", "मैक्रो फ़ंक्शन"],
    "answer_en": "Function expanded at call site",
    "answer_hi": "कॉल साइट पर विस्तारित फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'static inline'?",
    "question_hi": "'static inline' क्या है?",
    "options_en": ["Inline with internal linkage", "Inline with external linkage", "Static only", "Inline only"],
    "options_hi": ["आंतरिक लिंकेज के साथ इनलाइन", "बाहरी लिंकेज के साथ इनलाइन", "केवल स्थैतिक", "केवल इनलाइन"],
    "answer_en": "Inline with internal linkage",
    "answer_hi": "आंतरिक लिंकेज के साथ इनलाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'external inline'?",
    "question_hi": "'external inline' क्या है?",
    "options_en": ["Inline with external linkage", "Inline with internal linkage", "External only", "Inline only"],
    "options_hi": ["बाहरी लिंकेज के साथ इनलाइन", "आंतरिक लिंकेज के साथ इनलाइन", "केवल बाहरी", "केवल इनलाइन"],
    "answer_en": "Inline with external linkage",
    "answer_hi": "बाहरी लिंकेज के साथ इनलाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'asm' keyword?",
    "question_hi": "'asm' कीवर्ड क्या है?",
    "options_en": ["For inline assembly", "For assembly files", "No such keyword", "Only in C++"],
    "options_hi": ["इनलाइन असेंबली के लिए", "असेंबली फ़ाइलों के लिए", "ऐसा कोई कीवर्ड नहीं", "केवल C++ में"],
    "answer_en": "For inline assembly",
    "answer_hi": "इनलाइन असेंबली के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is '__attribute__' in GCC?",
    "question_hi": "GCC में '__attribute__' क्या है?",
    "options_en": ["Compiler-specific attribute syntax", "Standard C attribute", "No attributes", "Only in C++"],
    "options_hi": ["कंपाइलर-विशिष्ट विशेषता सिंटैक्स", "मानक C विशेषता", "कोई विशेषता नहीं", "केवल C++ में"],
    "answer_en": "Compiler-specific attribute syntax",
    "answer_hi": "कंपाइलर-विशिष्ट विशेषता सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is '__declspec' in MSVC?",
    "question_hi": "MSVC में '__declspec' क्या है?",
    "options_en": ["Microsoft-specific attribute", "GCC attribute", "Standard attribute", "No such thing"],
    "options_hi": ["माइक्रोसॉफ्ट-विशिष्ट विशेषता", "GCC विशेषता", "मानक विशेषता", "ऐसी कोई चीज़ नहीं"],
    "answer_en": "Microsoft-specific attribute",
    "answer_hi": "माइक्रोसॉफ्ट-विशिष्ट विशेषता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is '#pragma once'?",
    "question_hi": "'#pragma once' क्या है?",
    "options_en": ["Non-standard header guard", "Standard header guard", "No pragma", "Only in C++"],
    "options_hi": ["गैर-मानक हेडर गार्ड", "मानक हेडर गार्ड", "कोई प्राग्मा नहीं", "केवल C++ में"],
    "answer_en": "Non-standard header guard",
    "answer_hi": "गैर-मानक हेडर गार्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is '#pragma pack'?",
    "question_hi": "'#pragma pack' क्या है?",
    "options_en": ["Control struct padding", "Control memory allocation", "Control alignment", "Control packing"],
    "options_hi": ["संरचना पैडिंग नियंत्रित करें", "मेमोरी आवंटन नियंत्रित करें", "संरेखण नियंत्रित करें", "पैकिंग नियंत्रित करें"],
    "answer_en": "Control struct padding",
    "answer_hi": "संरचना पैडिंग नियंत्रित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is '#pragma GCC poison'?",
    "question_hi": "'#pragma GCC poison' क्या है?",
    "options_en": ["Ban identifier usage", "Poison identifier", "Error on use", "All of above"],
    "options_hi": ["पहचानकर्ता उपयोग पर प्रतिबंध", "पहचानकर्ता को जहरीला बनाएं", "उपयोग पर त्रुटि", "उपरोक्त सभी"],
    "answer_en": "All of above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is '##' token pasting operator?",
    "question_hi": "'##' टोकन पेस्टिंग ऑपरेटर क्या है?",
    "options_en": ["Concatenates tokens in macros", "String concatenation", "Comment pasting", "No pasting"],
    "options_hi": ["मैक्रो में टोकन को जोड़ता है", "स्ट्रिंग संयोजन", "टिप्पणी पेस्टिंग", "कोई पेस्टिंग नहीं"],
    "answer_en": "Concatenates tokens in macros",
    "answer_hi": "मैक्रो में टोकन को जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is '#' stringizing operator?",
    "question_hi": "'#' स्ट्रिंगाइजिंग ऑपरेटर क्या है?",
    "options_en": ["Converts macro argument to string", "String literal", "Character literal", "No stringizing"],
    "options_hi": ["मैक्रो तर्क को स्ट्रिंग में बदलता है", "स्ट्रिंग लिटरल", "वर्ण लिटरल", "कोई स्ट्रिंगाइजिंग नहीं"],
    "answer_en": "Converts macro argument to string",
    "answer_hi": "मैक्रो तर्क को स्ट्रिंग में बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is '__VA_ARGS__'?",
    "question_hi": "'__VA_ARGS__' क्या है?",
    "options_en": ["Variadic macro arguments", "Fixed arguments", "No arguments", "Variable arguments"],
    "options_hi": ["वेरिएडिक मैक्रो तर्क", "निश्चित तर्क", "कोई तर्क नहीं", "परिवर्तनशील तर्क"],
    "answer_en": "Variadic macro arguments",
    "answer_hi": "वेरिएडिक मैक्रो तर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is '__func__'?",
    "question_hi": "'__func__' क्या है?",
    "options_en": ["Predefined function name string", "Function pointer", "Function address", "No such identifier"],
    "options_hi": ["पूर्वनिर्धारित फ़ंक्शन नाम स्ट्रिंग", "फ़ंक्शन पॉइंटर", "फ़ंक्शन पता", "ऐसा कोई पहचानकर्ता नहीं"],
    "answer_en": "Predefined function name string",
    "answer_hi": "पूर्वनिर्धारित फ़ंक्शन नाम स्ट्रिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is '__FILE__'?",
    "question_hi": "'__FILE__' क्या है?",
    "options_en": ["Current source file name", "File pointer", "File descriptor", "No such macro"],
    "options_hi": ["वर्तमान स्रोत फ़ाइल नाम", "फ़ाइल पॉइंटर", "फ़ाइल डिस्क्रिप्टर", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Current source file name",
    "answer_hi": "वर्तमान स्रोत फ़ाइल नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is '__LINE__'?",
    "question_hi": "'__LINE__' क्या है?",
    "options_en": ["Current line number", "Line pointer", "Line length", "No such macro"],
    "options_hi": ["वर्तमान लाइन संख्या", "लाइन पॉइंटर", "लाइन लंबाई", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Current line number",
    "answer_hi": "वर्तमान लाइन संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is '__DATE__'?",
    "question_hi": "'__DATE__' क्या है?",
    "options_en": ["Compilation date", "Current date", "File date", "No such macro"],
    "options_hi": ["संकलन तिथि", "वर्तमान तिथि", "फ़ाइल तिथि", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Compilation date",
    "answer_hi": "संकलन तिथि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is '__TIME__'?",
    "question_hi": "'__TIME__' क्या है?",
    "options_en": ["Compilation time", "Current time", "File time", "No such macro"],
    "options_hi": ["संकलन समय", "वर्तमान समय", "फ़ाइल समय", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Compilation time",
    "answer_hi": "संकलन समय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is '__STDC__'?",
    "question_hi": "'__STDC__' क्या है?",
    "options_en": ["Standard C compliance macro", "Compiler name", "Standard version", "No such macro"],
    "options_hi": ["मानक C अनुपालन मैक्रो", "कंपाइलर नाम", "मानक संस्करण", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Standard C compliance macro",
    "answer_hi": "मानक C अनुपालन मैक्रो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is '__STDC_VERSION__'?",
    "question_hi": "'__STDC_VERSION__' क्या है?",
    "options_en": ["C standard version", "Compiler version", "Library version", "No such macro"],
    "options_hi": ["C मानक संस्करण", "कंपाइलर संस्करण", "लाइब्रेरी संस्करण", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "C standard version",
    "answer_hi": "C मानक संस्करण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is '__STDC_HOSTED__'?",
    "question_hi": "'__STDC_HOSTED__' क्या है?",
    "options_en": ["Hosted vs freestanding implementation", "Compiler hosting", "OS hosting", "No such macro"],
    "options_hi": ["होस्टेड बनाम फ्रीस्टैंडिंग कार्यान्वयन", "कंपाइलर होस्टिंग", "OS होस्टिंग", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Hosted vs freestanding implementation",
    "answer_hi": "होस्टेड बनाम फ्रीस्टैंडिंग कार्यान्वयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is '__STDC_NO_ATOMICS__'?",
    "question_hi": "'__STDC_NO_ATOMICS__' क्या है?",
    "options_en": ["No atomic support", "Has atomic support", "No thread support", "No complex support"],
    "options_hi": ["कोई परमाणु समर्थन नहीं", "परमाणु समर्थन है", "कोई थ्रेड समर्थन नहीं", "कोई जटिल समर्थन नहीं"],
    "answer_en": "No atomic support",
    "answer_hi": "कोई परमाणु समर्थन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is '__STDC_NO_THREADS__'?",
    "question_hi": "'__STDC_NO_THREADS__' क्या है?",
    "options_en": ["No thread support", "Has thread support", "No atomic support", "No complex support"],
    "options_hi": ["कोई थ्रेड समर्थन नहीं", "थ्रेड समर्थन है", "कोई परमाणु समर्थन नहीं", "कोई जटिल समर्थन नहीं"],
    "answer_en": "No thread support",
    "answer_hi": "कोई थ्रेड समर्थन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is '__STDC_NO_VLA__'?",
    "question_hi": "'__STDC_NO_VLA__' क्या है?",
    "options_en": ["No VLA support", "Has VLA support", "No atomic support", "No thread support"],
    "options_hi": ["कोई VLA समर्थन नहीं", "VLA समर्थन है", "कोई परमाणु समर्थन नहीं", "कोई थ्रेड समर्थन नहीं"],
    "answer_en": "No VLA support",
    "answer_hi": "कोई VLA समर्थन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is '__STDC_NO_COMPLEX__'?",
    "question_hi": "'__STDC_NO_COMPLEX__' क्या है?",
    "options_en": ["No complex support", "Has complex support", "No atomic support", "No thread support"],
    "options_hi": ["कोई जटिल समर्थन नहीं", "जटिल समर्थन है", "कोई परमाणु समर्थन नहीं", "कोई थ्रेड समर्थन नहीं"],
    "answer_en": "No complex support",
    "answer_hi": "कोई जटिल समर्थन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is '__STDC_ISO_10646__'?",
    "question_hi": "'__STDC_ISO_10646__' क्या है?",
    "options_en": ["Unicode support level", "ISO standard", "Character set", "No such macro"],
    "options_hi": ["यूनिकोड समर्थन स्तर", "ISO मानक", "वर्ण सेट", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Unicode support level",
    "answer_hi": "यूनिकोड समर्थन स्तर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is '__STDC_MB_MIGHT_NEQ_WC__'?",
    "question_hi": "'__STDC_MB_MIGHT_NEQ_WC__' क्या है?",
    "options_en": ["Multibyte != wide char", "Multibyte == wide char", "No such macro", "Character equality"],
    "options_hi": ["मल्टीबाइट != वाइड चार", "मल्टीबाइट == वाइड चार", "ऐसा कोई मैक्रो नहीं", "वर्ण समानता"],
    "answer_en": "Multibyte != wide char",
    "answer_hi": "मल्टीबाइट != वाइड चार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is '__STDC_UTF_16__'?",
    "question_hi": "'__STDC_UTF_16__' क्या है?",
    "options_en": ["UTF-16 encoding used", "UTF-8 encoding", "No UTF-16", "Character encoding"],
    "options_hi": ["UTF-16 एन्कोडिंग उपयोग किया गया", "UTF-8 एन्कोडिंग", "कोई UTF-16 नहीं", "वर्ण एन्कोडिंग"],
    "answer_en": "UTF-16 encoding used",
    "answer_hi": "UTF-16 एन्कोडिंग उपयोग किया गया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is '__STDC_UTF_32__'?",
    "question_hi": "'__STDC_UTF_32__' क्या है?",
    "options_en": ["UTF-32 encoding used", "UTF-8 encoding", "No UTF-32", "Character encoding"],
    "options_hi": ["UTF-32 एन्कोडिंग उपयोग किया गया", "UTF-8 एन्कोडिंग", "कोई UTF-32 नहीं", "वर्ण एन्कोडिंग"],
    "answer_en": "UTF-32 encoding used",
    "answer_hi": "UTF-32 एन्कोडिंग उपयोग किया गया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is '__STDC_ANALYZABLE__'?",
    "question_hi": "'__STDC_ANALYZABLE__' क्या है?",
    "options_en": ["Code analyzability", "Code optimization", "Code generation", "No such macro"],
    "options_hi": ["कोड विश्लेषण योग्यता", "कोड अनुकूलन", "कोड जनरेशन", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Code analyzability",
    "answer_hi": "कोड विश्लेषण योग्यता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is '__STDC_IEC_559__'?",
    "question_hi": "'__STDC_IEC_559__' क्या है?",
    "options_en": ["IEEE 754 floating-point compliance", "IEC standard", "Floating-point format", "No such macro"],
    "options_hi": ["IEEE 754 फ़्लोटिंग-पॉइंट अनुपालन", "IEC मानक", "फ़्लोटिंग-पॉइंट प्रारूप", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "IEEE 754 floating-point compliance",
    "answer_hi": "IEEE 754 फ़्लोटिंग-पॉइंट अनुपालन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is '__STDC_IEC_559_COMPLEX__'?",
    "question_hi": "'__STDC_IEC_559_COMPLEX__' क्या है?",
    "options_en": ["Complex floating-point compliance", "Real floating-point", "No complex", "No such macro"],
    "options_hi": ["जटिल फ़्लोटिंग-पॉइंट अनुपालन", "वास्तविक फ़्लोटिंग-पॉइंट", "कोई जटिल नहीं", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Complex floating-point compliance",
    "answer_hi": "जटिल फ़्लोटिंग-पॉइंट अनुपालन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is '__STDC_LIB_EXT1__'?",
    "question_hi": "'__STDC_LIB_EXT1__' क्या है?",
    "options_en": ["Bounds-checking interfaces support", "Library extension", "No extension", "No such macro"],
    "options_hi": ["सीमा-जाँच इंटरफेस समर्थन", "लाइब्रेरी एक्सटेंशन", "कोई एक्सटेंशन नहीं", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Bounds-checking interfaces support",
    "answer_hi": "सीमा-जाँच इंटरफेस समर्थन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is '__STDC_WANT_LIB_EXT1__'?",
    "question_hi": "'__STDC_WANT_LIB_EXT1__' क्या है?",
    "options_en": ["Request bounds-checking interfaces", "Has interfaces", "No interfaces", "No such macro"],
    "options_hi": ["सीमा-जाँच इंटरफेस अनुरोध", "इंटरफेस हैं", "कोई इंटरफेस नहीं", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Request bounds-checking interfaces",
    "answer_hi": "सीमा-जाँच इंटरफेस अनुरोध",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'fenv.h'?",
    "question_hi": "'fenv.h' क्या है?",
    "options_en": ["Floating-point environment", "File environment", "Function environment", "No such header"],
    "options_hi": ["फ़्लोटिंग-पॉइंट वातावरण", "फ़ाइल वातावरण", "फ़ंक्शन वातावरण", "ऐसा कोई हेडर नहीं"],
    "answer_en": "Floating-point environment",
    "answer_hi": "फ़्लोटिंग-पॉइंट वातावरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'fexcept_t'?",
    "question_hi": "'fexcept_t' क्या है?",
    "options_en": ["Floating-point exception flags", "File exception", "Function exception", "No such type"],
    "options_hi": ["फ़्लोटिंग-पॉइंट अपवाद झंडे", "फ़ाइल अपवाद", "फ़ंक्शन अपवाद", "ऐसा कोई प्रकार नहीं"],
    "answer_en": "Floating-point exception flags",
    "answer_hi": "फ़्लोटिंग-पॉइंट अपवाद झंडे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'fenv_t'?",
    "question_hi": "'fenv_t' क्या है?",
    "options_en": ["Floating-point environment state", "File environment", "Function environment", "No such type"],
    "options_hi": ["फ़्लोटिंग-पॉइंट वातावरण स्थिति", "फ़ाइल वातावरण", "फ़ंक्शन वातावरण", "ऐसा कोई प्रकार नहीं"],
    "answer_en": "Floating-point environment state",
    "answer_hi": "फ़्लोटिंग-पॉइंट वातावरण स्थिति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'FE_DIVBYZERO'?",
    "question_hi": "'FE_DIVBYZERO' क्या है?",
    "options_en": ["Division by zero exception", "Invalid operation", "Overflow", "Underflow"],
    "options_hi": ["शून्य से विभाजन अपवाद", "अमान्य संचालन", "ओवरफ्लो", "अंडरफ्लो"],
    "answer_en": "Division by zero exception",
    "answer_hi": "शून्य से विभाजन अपवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'FE_INVALID'?",
    "question_hi": "'FE_INVALID' क्या है?",
    "options_en": ["Invalid operation exception", "Division by zero", "Overflow", "Underflow"],
    "options_hi": ["अमान्य संचालन अपवाद", "शून्य से विभाजन", "ओवरफ्लो", "अंडरफ्लो"],
    "answer_en": "Invalid operation exception",
    "answer_hi": "अमान्य संचालन अपवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'FE_OVERFLOW'?",
    "question_hi": "'FE_OVERFLOW' क्या है?",
    "options_en": ["Overflow exception", "Division by zero", "Invalid operation", "Underflow"],
    "options_hi": ["ओवरफ्लो अपवाद", "शून्य से विभाजन", "अमान्य संचालन", "अंडरफ्लो"],
    "answer_en": "Overflow exception",
    "answer_hi": "ओवरफ्लो अपवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'FE_UNDERFLOW'?",
    "question_hi": "'FE_UNDERFLOW' क्या है?",
    "options_en": ["Underflow exception", "Division by zero", "Invalid operation", "Overflow"],
    "options_hi": ["अंडरफ्लो अपवाद", "शून्य से विभाजन", "अमान्य संचालन", "ओवरफ्लो"],
    "answer_en": "Underflow exception",
    "answer_hi": "अंडरफ्लो अपवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'FE_INEXACT'?",
    "question_hi": "'FE_INEXACT' क्या है?",
    "options_en": ["Inexact result exception", "Division by zero", "Invalid operation", "Overflow"],
    "options_hi": ["अशुद्ध परिणाम अपवाद", "शून्य से विभाजन", "अमान्य संचालन", "ओवरफ्लो"],
    "answer_en": "Inexact result exception",
    "answer_hi": "अशुद्ध परिणाम अपवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'FE_ALL_EXCEPT'?",
    "question_hi": "'FE_ALL_EXCEPT' क्या है?",
    "options_en": ["All floating-point exceptions", "Some exceptions", "No exceptions", "Invalid exceptions"],
    "options_hi": ["सभी फ़्लोटिंग-पॉइंट अपवाद", "कुछ अपवाद", "कोई अपवाद नहीं", "अमान्य अपवाद"],
    "answer_en": "All floating-point exceptions",
    "answer_hi": "सभी फ़्लोटिंग-पॉइंट अपवाद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'FE_TONEAREST'?",
    "question_hi": "'FE_TONEAREST' क्या है?",
    "options_en": ["Round to nearest", "Round toward zero", "Round up", "Round down"],
    "options_hi": ["निकटतम तक गोल", "शून्य की ओर गोल", "ऊपर गोल", "नीचे गोल"],
    "answer_en": "Round to nearest",
    "answer_hi": "निकटतम तक गोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'FE_TOWARDZERO'?",
    "question_hi": "'FE_TOWARDZERO' क्या है?",
    "options_en": ["Round toward zero", "Round to nearest", "Round up", "Round down"],
    "options_hi": ["शून्य की ओर गोल", "निकटतम तक गोल", "ऊपर गोल", "नीचे गोल"],
    "answer_en": "Round toward zero",
    "answer_hi": "शून्य की ओर गोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'FE_UPWARD'?",
    "question_hi": "'FE_UPWARD' क्या है?",
    "options_en": ["Round up", "Round to nearest", "Round toward zero", "Round down"],
    "options_hi": ["ऊपर गोल", "निकटतम तक गोल", "शून्य की ओर गोल", "नीचे गोल"],
    "answer_en": "Round up",
    "answer_hi": "ऊपर गोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'FE_DOWNWARD'?",
    "question_hi": "'FE_DOWNWARD' क्या है?",
    "options_en": ["Round down", "Round to nearest", "Round toward zero", "Round up"],
    "options_hi": ["नीचे गोल", "निकटतम तक गोल", "शून्य की ओर गोल", "ऊपर गोल"],
    "answer_en": "Round down",
    "answer_hi": "नीचे गोल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'FENV_ACCESS' pragma?",
    "question_hi": "'FENV_ACCESS' प्राग्मा क्या है?",
    "options_en": ["Control floating-point environment access", "File access", "Function access", "No such pragma"],
    "options_hi": ["फ़्लोटिंग-पॉइंट वातावरण पहुंच नियंत्रित करें", "फ़ाइल पहुंच", "फ़ंक्शन पहुंच", "ऐसा कोई प्राग्मा नहीं"],
    "answer_en": "Control floating-point environment access",
    "answer_hi": "फ़्लोटिंग-पॉइंट वातावरण पहुंच नियंत्रित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'FP_CONTRACT' pragma?",
    "question_hi": "'FP_CONTRACT' प्राग्मा क्या है?",
    "options_en": ["Control fused multiply-add", "Control floating-point", "No contraction", "No such pragma"],
    "options_hi": ["फ्यूज़्ड मल्टीप्लाई-ऐड नियंत्रित करें", "फ़्लोटिंग-पॉइंट नियंत्रित करें", "कोई संकुचन नहीं", "ऐसा कोई प्राग्मा नहीं"],
    "answer_en": "Control fused multiply-add",
    "answer_hi": "फ्यूज़्ड मल्टीप्लाई-ऐड नियंत्रित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'CX_LIMITED_RANGE' pragma?",
    "question_hi": "'CX_LIMITED_RANGE' प्राग्मा क्या है?",
    "options_en": ["Control complex range reduction", "Control complex", "No range", "No such pragma"],
    "options_hi": ["जटिल रेंज कमी नियंत्रित करें", "जटिल नियंत्रित करें", "कोई रेंज नहीं", "ऐसा कोई प्राग्मा नहीं"],
    "answer_en": "Control complex range reduction",
    "answer_hi": "जटिल रेंज कमी नियंत्रित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'math_errhandling'?",
    "question_hi": "'math_errhandling' क्या है?",
    "options_en": ["Math error handling mode", "Math errors", "No error handling", "Error handling"],
    "options_hi": ["गणित त्रुटि हैंडलिंग मोड", "गणित त्रुटियाँ", "कोई त्रुटि हैंडलिंग नहीं", "त्रुटि हैंडलिंग"],
    "answer_en": "Math error handling mode",
    "answer_hi": "गणित त्रुटि हैंडलिंग मोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'MATH_ERRNO'?",
    "question_hi": "'MATH_ERRNO' क्या है?",
    "options_en": ["Math errors set errno", "Math exceptions", "No errors", "Error handling"],
    "options_hi": ["गणित त्रुटियाँ errno सेट करती हैं", "गणित अपवाद", "कोई त्रुटि नहीं", "त्रुटि हैंडलिंग"],
    "answer_en": "Math errors set errno",
    "answer_hi": "गणित त्रुटियाँ errno सेट करती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'MATH_ERREXCEPT'?",
    "question_hi": "'MATH_ERREXCEPT' क्या है?",
    "options_en": ["Math errors raise exceptions", "Set errno", "No errors", "Error handling"],
    "options_hi": ["गणित त्रुटियाँ अपवाद उठाती हैं", "errno सेट करें", "कोई त्रुटि नहीं", "त्रुटि हैंडलिंग"],
    "answer_en": "Math errors raise exceptions",
    "answer_hi": "गणित त्रुटियाँ अपवाद उठाती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'INFINITY' macro?",
    "question_hi": "'INFINITY' मैक्रो क्या है?",
    "options_en": ["Positive infinity", "Negative infinity", "Not a number", "Zero"],
    "options_hi": ["धनात्मक अनंत", "ऋणात्मक अनंत", "संख्या नहीं", "शून्य"],
    "answer_en": "Positive infinity",
    "answer_hi": "धनात्मक अनंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'NAN' macro?",
    "question_hi": "'NAN' मैक्रो क्या है?",
    "options_en": ["Not a Number", "Infinity", "Zero", "One"],
    "options_hi": ["संख्या नहीं", "अनंत", "शून्य", "एक"],
    "answer_en": "Not a Number",
    "answer_hi": "संख्या नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'HUGE_VAL'?",
    "question_hi": "'HUGE_VAL' क्या है?",
    "options_en": ["Positive infinity as double", "Negative infinity", "Not a number", "Large value"],
    "options_hi": ["डबल के रूप में धनात्मक अनंत", "ऋणात्मक अनंत", "संख्या नहीं", "बड़ा मान"],
    "answer_en": "Positive infinity as double",
    "answer_hi": "डबल के रूप में धनात्मक अनंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'HUGE_VALF'?",
    "question_hi": "'HUGE_VALF' क्या है?",
    "options_en": ["Positive infinity as float", "Negative infinity", "Not a number", "Large value"],
    "options_hi": ["फ़्लोट के रूप में धनात्मक अनंत", "ऋणात्मक अनंत", "संख्या नहीं", "बड़ा मान"],
    "answer_en": "Positive infinity as float",
    "answer_hi": "फ़्लोट के रूप में धनात्मक अनंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'HUGE_VALL'?",
    "question_hi": "'HUGE_VALL' क्या है?",
    "options_en": ["Positive infinity as long double", "Negative infinity", "Not a number", "Large value"],
    "options_hi": ["लॉन्ग डबल के रूप में धनात्मक अनंत", "ऋणात्मक अनंत", "संख्या नहीं", "बड़ा मान"],
    "answer_en": "Positive infinity as long double",
    "answer_hi": "लॉन्ग डबल के रूप में धनात्मक अनंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'FP_INFINITE'?",
    "question_hi": "'FP_INFINITE' क्या है?",
    "options_en": ["Floating-point classification: infinite", "Finite", "NaN", "Normal"],
    "options_hi": ["फ़्लोटिंग-पॉइंट वर्गीकरण: अनंत", "परिमित", "NaN", "सामान्य"],
    "answer_en": "Floating-point classification: infinite",
    "answer_hi": "फ़्लोटिंग-पॉइंट वर्गीकरण: अनंत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'FP_NAN'?",
    "question_hi": "'FP_NAN' क्या है?",
    "options_en": ["Floating-point classification: Not a Number", "Infinite", "Finite", "Normal"],
    "options_hi": ["फ़्लोटिंग-पॉइंट वर्गीकरण: संख्या नहीं", "अनंत", "परिमित", "सामान्य"],
    "answer_en": "Floating-point classification: Not a Number",
    "answer_hi": "फ़्लोटिंग-पॉइंट वर्गीकरण: संख्या नहीं",
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