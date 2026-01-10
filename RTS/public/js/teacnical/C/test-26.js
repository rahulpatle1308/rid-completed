const questions=[
  {
    "num": 1,
    "question_en": "What will be the output: int i = 0; printf(\"%d %d\", i, i++);",
    "question_hi": "आउटपुट क्या होगा: int i = 0; printf(\"%d %d\", i, i++);",
    "options_en": ["0 0", "1 0", "0 1", "Undefined behavior"],
    "options_hi": ["0 0", "1 0", "0 1", "अपरिभाषित व्यवहार"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'strict aliasing rule' in C?",
    "question_hi": "C में 'strict aliasing rule' क्या है?",
    "options_en": ["Rule about accessing object through incompatible pointer type", "Rule for array bounds", "Rule for function pointers", "No such rule in C"],
    "options_hi": ["असंगत पॉइंटर टाइप के माध्यम से ऑब्जेक्ट एक्सेस करने का नियम", "ऐरे बाउंड्स का नियम", "फ़ंक्शन पॉइंटर्स का नियम", "C में ऐसा कोई नियम नहीं"],
    "answer_en": "Rule about accessing object through incompatible pointer type",
    "answer_hi": "असंगत पॉइंटर टाइप के माध्यम से ऑब्जेक्ट एक्सेस करने का नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does the 'volatile' keyword ensure?",
    "question_hi": "'volatile' कीवर्ड क्या सुनिश्चित करता है?",
    "options_en": ["Variable won't be optimized away", "Variable is constant", "Variable is thread-safe", "Variable is stored in register"],
    "options_hi": ["वेरिएबल को ऑप्टिमाइज़ नहीं किया जाएगा", "वेरिएबल कॉन्स्टेंट है", "वेरिएबल थ्रेड-सुरक्षित है", "वेरिएबल रजिस्टर में स्टोर है"],
    "answer_en": "Variable won't be optimized away",
    "answer_hi": "वेरिएबल को ऑप्टिमाइज़ नहीं किया जाएगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'pointer arithmetic' valid with?",
    "question_hi": "'pointer arithmetic' किसके साथ वैध है?",
    "options_en": ["Void pointers", "Function pointers", "NULL pointers", "All pointers except void*"],
    "options_hi": ["वॉइड पॉइंटर्स", "फ़ंक्शन पॉइंटर्स", "NULL पॉइंटर्स", "void* को छोड़कर सभी पॉइंटर्स"],
    "answer_en": "All pointers except void*",
    "answer_hi": "void* को छोड़कर सभी पॉइंटर्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output: int x = 5; printf(\"%d\", x+++x);",
    "question_hi": "आउटपुट क्या है: int x = 5; printf(\"%d\", x+++x);",
    "options_en": ["10", "11", "12", "Undefined"],
    "options_hi": ["10", "11", "12", "अपरिभाषित"],
    "answer_en": "Undefined",
    "answer_hi": "अपरिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'sequence point' in C?",
    "question_hi": "C में 'sequence point' क्या है?",
    "options_en": ["Point where all side effects are complete", "Point where function starts", "Point where loop ends", "Compiler dependent"],
    "options_hi": ["वह बिंदु जहाँ सभी साइड इफेक्ट्स पूरे होते हैं", "जहाँ फ़ंक्शन शुरू होता है", "जहाँ लूप समाप्त होता है", "कंपाइलर पर निर्भर"],
    "answer_en": "Point where all side effects are complete",
    "answer_hi": "वह बिंदु जहाँ सभी साइड इफेक्ट्स पूरे होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'restrict' keyword used for?",
    "question_hi": "'restrict' कीवर्ड किसके लिए प्रयोग किया जाता है?",
    "options_en": ["To indicate no pointer aliasing", "To restrict variable scope", "To make read-only variable", "To restrict memory usage"],
    "options_hi": ["यह दर्शाने के लिए कि कोई पॉइंटर एलियासिंग नहीं है", "वेरिएबल स्कोप सीमित करने के लिए", "रीड-ओनली वेरिएबल बनाने के लिए", "मेमोरी यूज़ सीमित करने के लिए"],
    "answer_en": "To indicate no pointer aliasing",
    "answer_hi": "यह दर्शाने के लिए कि कोई पॉइंटर एलियासिंग नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'double pointer' used for?",
    "question_hi": "'डबल पॉइंटर' किसके लिए प्रयोग किया जाता है?",
    "options_en": ["To modify pointer variable inside function", "To store double values", "For double precision arithmetic", "No such concept"],
    "options_hi": ["फ़ंक्शन के अंदर पॉइंटर वेरिएबल संशोधित करने के लिए", "डबल वैल्यूज़ स्टोर करने के लिए", "डबल प्रिसिजन अंकगणित के लिए", "ऐसी कोई अवधारणा नहीं"],
    "answer_en": "To modify pointer variable inside function",
    "answer_hi": "फ़ंक्शन के अंदर पॉइंटर वेरिएबल संशोधित करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is the purpose of 'const' with pointers?",
    "question_hi": "पॉइंटर्स के साथ 'const' का उद्देश्य क्या है?",
    "options_en": ["To make pointer or data constant", "To increase speed", "To allocate memory", "To free memory"],
    "options_hi": ["पॉइंटर या डेटा को कॉन्स्टेंट बनाने के लिए", "स्पीड बढ़ाने के लिए", "मेमोरी आवंटित करने के लिए", "मेमोरी मुक्त करने के लिए"],
    "answer_en": "To make pointer or data constant",
    "answer_hi": "पॉइंटर या डेटा को कॉन्स्टेंट बनाने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'dangling pointer'?",
    "question_hi": "'डैंगलिंग पॉइंटर' क्या है?",
    "options_en": ["Pointer pointing to freed memory", "Pointer that is NULL", "Pointer to constant", "Array pointer"],
    "options_hi": ["मुक्त की गई मेमोरी की ओर इशारा करने वाला पॉइंटर", "NULL पॉइंटर", "कॉन्स्टेंट का पॉइंटर", "ऐरे पॉइंटर"],
    "answer_en": "Pointer pointing to freed memory",
    "answer_hi": "मुक्त की गई मेमोरी की ओर इशारा करने वाला पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'memory leak' in C?",
    "question_hi": "C में 'मेमोरी लीक' क्या है?",
    "options_en": ["Not freeing allocated memory", "Freeing memory twice", "Using uninitialized pointer", "Stack overflow"],
    "options_hi": ["आवंटित मेमोरी को मुक्त न करना", "मेमोरी को दो बार मुक्त करना", "अप्रारंभिक पॉइंटर का उपयोग", "स्टैक ओवरफ्लो"],
    "answer_en": "Not freeing allocated memory",
    "answer_hi": "आवंटित मेमोरी को मुक्त न करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does 'calloc' do differently than 'malloc'?",
    "question_hi": "'calloc' 'malloc' से क्या अलग करता है?",
    "options_en": ["Initializes memory to zero", "Allocates on stack", "Faster allocation", "Smaller memory"],
    "options_hi": ["मेमोरी को शून्य से आरंभ करता है", "स्टैक पर आवंटित करता है", "तेज आवंटन", "छोटी मेमोरी"],
    "answer_en": "Initializes memory to zero",
    "answer_hi": "मेमोरी को शून्य से आरंभ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'realloc' used for?",
    "question_hi": "'realloc' किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Resize allocated memory block", "Allocate new memory", "Free memory", "Check memory size"],
    "options_hi": ["आवंटित मेमोरी ब्लॉक का आकार बदलना", "नई मेमोरी आवंटित करना", "मेमोरी मुक्त करना", "मेमोरी आकार जांचना"],
    "answer_en": "Resize allocated memory block",
    "answer_hi": "आवंटित मेमोरी ब्लॉक का आकार बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'stack overflow'?",
    "question_hi": "'स्टैक ओवरफ्लो' क्या है?",
    "options_en": ["Exceeding stack memory limit", "Heap memory full", "Array out of bounds", "Pointer error"],
    "options_hi": ["स्टैक मेमोरी सीमा से अधिक", "हीप मेमोरी पूर्ण", "ऐरे सीमा से बाहर", "पॉइंटर त्रुटि"],
    "answer_en": "Exceeding stack memory limit",
    "answer_hi": "स्टैक मेमोरी सीमा से अधिक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'heap fragmentation'?",
    "question_hi": "'हीप फ़्रैग्मेंटेशन' क्या है?",
    "options_en": ["Memory broken into small non-contiguous blocks", "Stack overflow", "Memory leak", "Buffer overflow"],
    "options_hi": ["मेमोरी छोटे असंतत ब्लॉकों में टूट गई", "स्टैक ओवरफ्लो", "मेमोरी लीक", "बफर ओवरफ्लो"],
    "answer_en": "Memory broken into small non-contiguous blocks",
    "answer_hi": "मेमोरी छोटे असंतत ब्लॉकों में टूट गई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'buffer overflow'?",
    "question_hi": "'बफर ओवरफ्लो' क्या है?",
    "options_en": ["Writing beyond allocated buffer", "Reading empty buffer", "Buffer underflow", "Memory leak"],
    "options_hi": ["आवंटित बफर से परे लिखना", "खाली बफर पढ़ना", "बफर अंडरफ्लो", "मेमोरी लीक"],
    "answer_en": "Writing beyond allocated buffer",
    "answer_hi": "आवंटित बफर से परे लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'segmentation fault'?",
    "question_hi": "'सेग्मेंटेशन फॉल्ट' क्या है?",
    "options_en": ["Accessing invalid memory", "Division by zero", "Infinite loop", "Wrong output"],
    "options_hi": ["अमान्य मेमोरी एक्सेस करना", "शून्य से विभाजन", "अनंत लूप", "गलत आउटपुट"],
    "answer_en": "Accessing invalid memory",
    "answer_hi": "अमान्य मेमोरी एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'function pointer'?",
    "question_hi": "'फ़ंक्शन पॉइंटर' क्या है?",
    "options_en": ["Pointer that points to function code", "Pointer to data", "Array of functions", "Pointer to pointer"],
    "options_hi": ["फ़ंक्शन कोड की ओर इशारा करने वाला पॉइंटर", "डेटा का पॉइंटर", "फ़ंक्शन्स की ऐरे", "पॉइंटर से पॉइंटर"],
    "answer_en": "Pointer that points to function code",
    "answer_hi": "फ़ंक्शन कोड की ओर इशारा करने वाला पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'callback function'?",
    "question_hi": "'कॉलबैक फ़ंक्शन' क्या है?",
    "options_en": ["Function passed as argument to be called later", "Function that calls main", "Recursive function", "Inline function"],
    "options_hi": ["फ़ंक्शन जो तर्क के रूप में पास हो और बाद में कॉल हो", "फ़ंक्शन जो मुख्य को कॉल करे", "पुनरावर्ती फ़ंक्शन", "इनलाइन फ़ंक्शन"],
    "answer_en": "Function passed as argument to be called later",
    "answer_hi": "फ़ंक्शन जो तर्क के रूप में पास हो और बाद में कॉल हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'recursive function'?",
    "question_hi": "'पुनरावर्ती फ़ंक्शन' क्या है?",
    "options_en": ["Function that calls itself", "Function with loops", "Function with goto", "Inline function"],
    "options_hi": ["फ़ंक्शन जो खुद को कॉल करता है", "लूप वाला फ़ंक्शन", "goto वाला फ़ंक्शन", "इनलाइन फ़ंक्शन"],
    "answer_en": "Function that calls itself",
    "answer_hi": "फ़ंक्शन जो खुद को कॉल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'tail recursion'?",
    "question_hi": "'टेल रिकर्सन' क्या है?",
    "options_en": ["Recursive call is last operation", "Recursive call first", "No recursion", "Infinite recursion"],
    "options_hi": ["पुनरावर्ती कॉल अंतिम ऑपरेशन है", "पुनरावर्ती कॉल पहले", "कोई पुनरावृत्ति नहीं", "अनंत पुनरावृत्ति"],
    "answer_en": "Recursive call is last operation",
    "answer_hi": "पुनरावर्ती कॉल अंतिम ऑपरेशन है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'inline function'?",
    "question_hi": "'इनलाइन फ़ंक्शन' क्या है?",
    "options_en": ["Function expanded at compile time", "External function", "Recursive function", "Virtual function"],
    "options_hi": ["कंपाइल समय पर विस्तारित फ़ंक्शन", "बाहरी फ़ंक्शन", "पुनरावर्ती फ़ंक्शन", "वर्चुअल फ़ंक्शन"],
    "answer_en": "Function expanded at compile time",
    "answer_hi": "कंपाइल समय पर विस्तारित फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'static function'?",
    "question_hi": "'स्टैटिक फ़ंक्शन' क्या है?",
    "options_en": ["Function limited to file scope", "Function in stack", "Global function", "Recursive function"],
    "options_hi": ["फ़ाइल स्कोप तक सीमित फ़ंक्शन", "स्टैक में फ़ंक्शन", "वैश्विक फ़ंक्शन", "पुनरावर्ती फ़ंक्शन"],
    "answer_en": "Function limited to file scope",
    "answer_hi": "फ़ाइल स्कोप तक सीमित फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'extern variable'?",
    "question_hi": "'एक्सटर्न वेरिएबल' क्या है?",
    "options_en": ["Variable declared in another file", "Static variable", "Local variable", "Constant variable"],
    "options_hi": ["दूसरी फ़ाइल में घोषित वेरिएबल", "स्थैतिक वेरिएबल", "स्थानीय वेरिएबल", "स्थिर वेरिएबल"],
    "answer_en": "Variable declared in another file",
    "answer_hi": "दूसरी फ़ाइल में घोषित वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'register variable'?",
    "question_hi": "'रजिस्टर वेरिएबल' क्या है?",
    "options_en": ["Hint to store in CPU register", "Store in heap", "Global variable", "Static variable"],
    "options_hi": ["CPU रजिस्टर में संग्रहीत करने का संकेत", "हीप में संग्रहीत", "वैश्विक वेरिएबल", "स्थैतिक वेरिएबल"],
    "answer_en": "Hint to store in CPU register",
    "answer_hi": "CPU रजिस्टर में संग्रहीत करने का संकेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'bit field' in structure?",
    "question_hi": "संरचना में 'बिट फ़ील्ड' क्या है?",
    "options_en": ["Member with specified number of bits", "Pointer member", "Array member", "Function member"],
    "options_hi": ["निर्दिष्ट बिट्स वाला सदस्य", "पॉइंटर सदस्य", "ऐरे सदस्य", "फ़ंक्शन सदस्य"],
    "answer_en": "Member with specified number of bits",
    "answer_hi": "निर्दिष्ट बिट्स वाला सदस्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'union' in C?",
    "question_hi": "C में 'यूनियन' क्या है?",
    "options_en": ["All members share same memory", "Collection of different types", "Array of structures", "Function collection"],
    "options_hi": ["सभी सदस्य समान मेमोरी साझा करते हैं", "विभिन्न प्रकारों का संग्रह", "संरचनाओं की ऐरे", "फ़ंक्शन संग्रह"],
    "answer_en": "All members share same memory",
    "answer_hi": "सभी सदस्य समान मेमोरी साझा करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'pragma directive'?",
    "question_hi": "'प्रैग्मा डाइरेक्टिव' क्या है?",
    "options_en": ["Compiler-specific instruction", "Preprocessor macro", "Function definition", "Loop control"],
    "options_hi": ["कंपाइलर-विशिष्ट निर्देश", "प्रीप्रोसेसर मैक्रो", "फ़ंक्शन परिभाषा", "लूप नियंत्रण"],
    "answer_en": "Compiler-specific instruction",
    "answer_hi": "कंपाइलर-विशिष्ट निर्देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'typedef' used for?",
    "question_hi": "'typedef' किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Create alias for types", "Define new variable", "Define function", "Create macro"],
    "options_hi": ["प्रकारों के लिए उपनाम बनाना", "नया वेरिएबल परिभाषित करना", "फ़ंक्शन परिभाषित करना", "मैक्रो बनाना"],
    "answer_en": "Create alias for types",
    "answer_hi": "प्रकारों के लिए उपनाम बनाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'enum' in C?",
    "question_hi": "C में 'enum' क्या है?",
    "options_en": ["Named integer constants", "Floating point list", "String array", "Function list"],
    "options_hi": ["नामित पूर्णांक स्थिरांक", "फ़्लोटिंग पॉइंट सूची", "स्ट्रिंग ऐरे", "फ़ंक्शन सूची"],
    "answer_en": "Named integer constants",
    "answer_hi": "नामित पूर्णांक स्थिरांक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'macro' in C?",
    "question_hi": "C में 'मैक्रो' क्या है?",
    "options_en": ["Preprocessor text replacement", "Function", "Variable", "Loop"],
    "options_hi": ["प्रीप्रोसेसर टेक्स्ट प्रतिस्थापन", "फ़ंक्शन", "वेरिएबल", "लूप"],
    "answer_en": "Preprocessor text replacement",
    "answer_hi": "प्रीप्रोसेसर टेक्स्ट प्रतिस्थापन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'conditional compilation'?",
    "question_hi": "'सशर्त संकलन' क्या है?",
    "options_en": ["Compile code based on condition", "Runtime condition", "Loop condition", "Function condition"],
    "options_hi": ["स्थिति के आधार पर कोड संकलित करना", "रनटाइम स्थिति", "लूप स्थिति", "फ़ंक्शन स्थिति"],
    "answer_en": "Compile code based on condition",
    "answer_hi": "स्थिति के आधार पर कोड संकलित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'file inclusion'?",
    "question_hi": "'फ़ाइल समावेशन' क्या है?",
    "options_en": ["Insert file content using #include", "Open file at runtime", "Read file", "Write file"],
    "options_hi": ["#include का उपयोग कर फ़ाइल सामग्री डालें", "रनटाइम पर फ़ाइल खोलें", "फ़ाइल पढ़ें", "फ़ाइल लिखें"],
    "answer_en": "Insert file content using #include",
    "answer_hi": "#include का उपयोग कर फ़ाइल सामग्री डालें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'multi-threading' in C?",
    "question_hi": "C में 'मल्टी-थ्रेडिंग' क्या है?",
    "options_en": ["Multiple threads executing concurrently", "Multiple processes", "Single thread", "No threading"],
    "options_hi": ["एक साथ कई थ्रेड निष्पादित हो रही हैं", "कई प्रक्रियाएं", "एकल थ्रेड", "कोई थ्रेडिंग नहीं"],
    "answer_en": "Multiple threads executing concurrently",
    "answer_hi": "एक साथ कई थ्रेड निष्पादित हो रही हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'mutex' used for?",
    "question_hi": "'म्यूटेक्स' किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Synchronization between threads", "Memory allocation", "File locking", "Process creation"],
    "options_hi": ["थ्रेड्स के बीच समकालिकरण", "मेमोरी आवंटन", "फ़ाइल लॉकिंग", "प्रक्रिया निर्माण"],
    "answer_en": "Synchronization between threads",
    "answer_hi": "थ्रेड्स के बीच समकालिकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'deadlock'?",
    "question_hi": "'डेडलॉक' क्या है?",
    "options_en": ["Two or more threads waiting forever", "Memory leak", "Crash", "Infinite loop"],
    "options_hi": ["दो या अधिक थ्रेड्स अनिश्चित काल तक प्रतीक्षा कर रही हैं", "मेमोरी लीक", "क्रैश", "अनंत लूप"],
    "answer_en": "Two or more threads waiting forever",
    "answer_hi": "दो या अधिक थ्रेड्स अनिश्चित काल तक प्रतीक्षा कर रही हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'race condition'?",
    "question_hi": "'रेस कंडीशन' क्या है?",
    "options_en": ["Outcome depends on thread execution order", "Memory error", "Syntax error", "Logical error"],
    "options_hi": ["परिणाम थ्रेड निष्पादन क्रम पर निर्भर करता है", "मेमोरी त्रुटि", "वाक्यविन्यास त्रुटि", "तार्किक त्रुटि"],
    "answer_en": "Outcome depends on thread execution order",
    "answer_hi": "परिणाम थ्रेड निष्पादन क्रम पर निर्भर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'atomic operation'?",
    "question_hi": "'एटॉमिक ऑपरेशन' क्या है?",
    "options_en": ["Operation indivisible and uninterruptible", "Slow operation", "Floating operation", "Memory operation"],
    "options_hi": ["अविभाज्य और अबाध्य ऑपरेशन", "धीमा ऑपरेशन", "फ़्लोटिंग ऑपरेशन", "मेमोरी ऑपरेशन"],
    "answer_en": "Operation indivisible and uninterruptible",
    "answer_hi": "अविभाज्य और अबाध्य ऑपरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'signal handling' in C?",
    "question_hi": "C में 'सिग्नल हैंडलिंग' क्या है?",
    "options_en": ["Handling interrupts like Ctrl+C", "Error handling", "Memory handling", "File handling"],
    "options_hi": ["Ctrl+C जैसे इंटरप्ट्स को संभालना", "त्रुटि प्रबंधन", "मेमोरी प्रबंधन", "फ़ाइल प्रबंधन"],
    "answer_en": "Handling interrupts like Ctrl+C",
    "answer_hi": "Ctrl+C जैसे इंटरप्ट्स को संभालना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'setjmp/longjmp' used for?",
    "question_hi": "'setjmp/longjmp' किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Non-local jumps", "Local jumps", "Function calls", "Loop control"],
    "options_hi": ["गैर-स्थानीय जंप", "स्थानीय जंप", "फ़ंक्शन कॉल", "लूप नियंत्रण"],
    "answer_en": "Non-local jumps",
    "answer_hi": "गैर-स्थानीय जंप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'variadic function'?",
    "question_hi": "'वेरिएडिक फ़ंक्शन' क्या है?",
    "options_en": ["Function with variable number of arguments", "Fixed arguments function", "No arguments function", "Void function"],
    "options_hi": ["चर संख्या में तर्कों वाला फ़ंक्शन", "निश्चित तर्क फ़ंक्शन", "बिना तर्क फ़ंक्शन", "वॉइड फ़ंक्शन"],
    "answer_en": "Function with variable number of arguments",
    "answer_hi": "चर संख्या में तर्कों वाला फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'command line argument'?",
    "question_hi": "'कमांड लाइन तर्क' क्या है?",
    "options_en": ["Arguments passed to main()", "Function arguments", "Loop arguments", "Macro arguments"],
    "options_hi": ["main() को पास किए गए तर्क", "फ़ंक्शन तर्क", "लूप तर्क", "मैक्रो तर्क"],
    "answer_en": "Arguments passed to main()",
    "answer_hi": "main() को पास किए गए तर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'environment variable' in C?",
    "question_hi": "C में 'पर्यावरण चर' क्या है?",
    "options_en": ["System variables accessible via environ", "Local variables", "Static variables", "Register variables"],
    "options_hi": ["सिस्टम वेरिएबल्स जो environ के माध्यम से पहुंच योग्य हैं", "स्थानीय वेरिएबल्स", "स्थैतिक वेरिएबल्स", "रजिस्टर वेरिएबल्स"],
    "answer_en": "System variables accessible via environ",
    "answer_hi": "सिस्टम वेरिएबल्स जो environ के माध्यम से पहुंच योग्य हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'endianness'?",
    "question_hi": "'एंडियननेस' क्या है?",
    "options_en": ["Byte order in memory", "Bit order", "Memory size", "CPU speed"],
    "options_hi": ["मेमोरी में बाइट क्रम", "बिट क्रम", "मेमोरी आकार", "CPU गति"],
    "answer_en": "Byte order in memory",
    "answer_hi": "मेमोरी में बाइट क्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'little endian'?",
    "question_hi": "'लिटिल एंडियन' क्या है?",
    "options_en": ["Least significant byte first", "Most significant byte first", "Random byte order", "No byte order"],
    "options_hi": ["सबसे कम महत्वपूर्ण बाइट पहले", "सबसे महत्वपूर्ण बाइट पहले", "यादृच्छिक बाइट क्रम", "कोई बाइट क्रम नहीं"],
    "answer_en": "Least significant byte first",
    "answer_hi": "सबसे कम महत्वपूर्ण बाइट पहले",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'big endian'?",
    "question_hi": "'बिग एंडियन' क्या है?",
    "options_en": ["Most significant byte first", "Least significant byte first", "Middle byte first", "No specific order"],
    "options_hi": ["सबसे महत्वपूर्ण बाइट पहले", "सबसे कम महत्वपूर्ण बाइट पहले", "मध्य बाइट पहले", "कोई विशिष्ट क्रम नहीं"],
    "answer_en": "Most significant byte first",
    "answer_hi": "सबसे महत्वपूर्ण बाइट पहले",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'structure padding'?",
    "question_hi": "'संरचना पैडिंग' क्या है?",
    "options_en": ["Adding bytes for alignment", "Removing bytes", "Compressing structure", "Encrypting structure"],
    "options_hi": ["संरेखण के लिए बाइट्स जोड़ना", "बाइट्स हटाना", "संरचना संपीड़ित करना", "संरचना एन्क्रिप्ट करना"],
    "answer_en": "Adding bytes for alignment",
    "answer_hi": "संरेखण के लिए बाइट्स जोड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'structure packing'?",
    "question_hi": "'संरचना पैकिंग' क्या है?",
    "options_en": ["Removing padding bytes", "Adding padding", "Encrypting", "Compressing"],
    "options_hi": ["पैडिंग बाइट्स हटाना", "पैडिंग जोड़ना", "एन्क्रिप्ट करना", "संपीड़ित करना"],
    "answer_en": "Removing padding bytes",
    "answer_hi": "पैडिंग बाइट्स हटाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'offsetof' macro?",
    "question_hi": "'offsetof' मैक्रो क्या है?",
    "options_en": ["Returns byte offset of member in structure", "Returns size of structure", "Returns address of member", "Returns pointer to member"],
    "options_hi": ["संरचना में सदस्य का बाइट ऑफसेट लौटाता है", "संरचना का आकार लौटाता है", "सदस्य का पता लौटाता है", "सदस्य का पॉइंटर लौटाता है"],
    "answer_en": "Returns byte offset of member in structure",
    "answer_hi": "संरचना में सदस्य का बाइट ऑफसेट लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'container_of' macro?",
    "question_hi": "'container_of' मैक्रो क्या है?",
    "options_en": ["Get structure pointer from member pointer", "Get member pointer", "Get size", "Get offset"],
    "options_hi": ["सदस्य पॉइंटर से संरचना पॉइंटर प्राप्त करें", "सदस्य पॉइंटर प्राप्त करें", "आकार प्राप्त करें", "ऑफसेट प्राप्त करें"],
    "answer_en": "Get structure pointer from member pointer",
    "answer_hi": "सदस्य पॉइंटर से संरचना पॉइंटर प्राप्त करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'volatile' qualifier used with pointers?",
    "question_hi": "पॉइंटर्स के साथ 'volatile' क्वालीफायर किसलिए प्रयोग होता है?",
    "options_en": ["To indicate memory-mapped I/O", "To make pointer constant", "To increase speed", "To decrease size"],
    "options_hi": ["मेमोरी-मैप्ड I/O को इंगित करने के लिए", "पॉइंटर को स्थिर बनाने के लिए", "गति बढ़ाने के लिए", "आकार घटाने के लिए"],
    "answer_en": "To indicate memory-mapped I/O",
    "answer_hi": "मेमोरी-मैप्ड I/O को इंगित करने के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'far pointer' in old compilers?",
    "question_hi": "पुराने कंपाइलर्स में 'far pointer' क्या है?",
    "options_en": ["Pointer to access different memory segments", "Large pointer", "Function pointer", "NULL pointer"],
    "options_hi": ["विभिन्न मेमोरी सेगमेंट तक पहुंचने के लिए पॉइंटर", "बड़ा पॉइंटर", "फ़ंक्शन पॉइंटर", "NULL पॉइंटर"],
    "answer_en": "Pointer to access different memory segments",
    "answer_hi": "विभिन्न मेमोरी सेगमेंट तक पहुंचने के लिए पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'near pointer'?",
    "question_hi": "'near pointer' क्या है?",
    "options_en": ["Pointer within same segment", "Far pointer", "Huge pointer", "Generic pointer"],
    "options_hi": ["एक ही सेगमेंट के भीतर पॉइंटर", "far pointer", "huge pointer", "सामान्य पॉइंटर"],
    "answer_en": "Pointer within same segment",
    "answer_hi": "एक ही सेगमेंट के भीतर पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'huge pointer'?",
    "question_hi": "'huge pointer' क्या है?",
    "options_en": ["Pointer that can cross segments", "Large size pointer", "Array pointer", "Function pointer"],
    "options_hi": ["पॉइंटर जो सेगमेंट पार कर सकता है", "बड़े आकार का पॉइंटर", "ऐरे पॉइंटर", "फ़ंक्शन पॉइंटर"],
    "answer_en": "Pointer that can cross segments",
    "answer_hi": "पॉइंटर जो सेगमेंट पार कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'wild pointer'?",
    "question_hi": "'wild pointer' क्या है?",
    "options_en": ["Uninitialized pointer", "NULL pointer", "Freed pointer", "Constant pointer"],
    "options_hi": ["अप्रारंभिक पॉइंटर", "NULL पॉइंटर", "मुक्त पॉइंटर", "स्थिर पॉइंटर"],
    "answer_en": "Uninitialized pointer",
    "answer_hi": "अप्रारंभिक पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'smart pointer' in C?",
    "question_hi": "C में 'smart pointer' क्या है?",
    "options_en": ["Not native to C; C++ concept", "Automatic pointer", "Function pointer", "Array pointer"],
    "options_hi": ["C में मूल नहीं; C++ अवधारणा", "स्वचालित पॉइंटर", "फ़ंक्शन पॉइंटर", "ऐरे पॉइंटर"],
    "answer_en": "Not native to C; C++ concept",
    "answer_hi": "C में मूल नहीं; C++ अवधारणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'void pointer'?",
    "question_hi": "'void pointer' क्या है?",
    "options_en": ["Generic pointer to any type", "Pointer to void", "Empty pointer", "Invalid pointer"],
    "options_hi": ["किसी भी प्रकार का सामान्य पॉइंटर", "void का पॉइंटर", "खाली पॉइंटर", "अमान्य पॉइंटर"],
    "answer_en": "Generic pointer to any type",
    "answer_hi": "किसी भी प्रकार का सामान्य पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'function pointer array'?",
    "question_hi": "'function pointer array' क्या है?",
    "options_en": ["Array of pointers to functions", "Array of functions", "Pointer to array", "Function array"],
    "options_hi": ["फ़ंक्शन्स के पॉइंटर्स की ऐरे", "फ़ंक्शन्स की ऐरे", "ऐरे का पॉइंटर", "फ़ंक्शन ऐरे"],
    "answer_en": "Array of pointers to functions",
    "answer_hi": "फ़ंक्शन्स के पॉइंटर्स की ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'pointer to array' vs 'array of pointers'?",
    "question_hi": "'pointer to array' बनाम 'array of pointers' क्या है?",
    "options_en": ["Pointer to whole array vs array storing pointers", "Same thing", "No difference", "Compiler specific"],
    "options_hi": ["पूरी ऐरे का पॉइंटर बनाम पॉइंटर्स स्टोर करने वाली ऐरे", "एक ही चीज़", "कोई अंतर नहीं", "कंपाइलर विशिष्ट"],
    "answer_en": "Pointer to whole array vs array storing pointers",
    "answer_hi": "पूरी ऐरे का पॉइंटर बनाम पॉइंटर्स स्टोर करने वाली ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'complex number support' in C?",
    "question_hi": "C में 'complex number support' क्या है?",
    "options_en": ["_Complex keyword (C99)", "Not supported", "Only in C++", "Through libraries"],
    "options_hi": ["_Complex कीवर्ड (C99)", "समर्थित नहीं", "केवल C++ में", "लाइब्रेरीज़ के माध्यम से"],
    "answer_en": "_Complex keyword (C99)",
    "answer_hi": "_Complex कीवर्ड (C99)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'variable length array' (VLA)?",
    "question_hi": "'variable length array' (VLA) क्या है?",
    "options_en": ["Array size determined at runtime (C99)", "Fixed size array", "Dynamic array", "Linked list"],
    "options_hi": ["रनटाइम पर निर्धारित ऐरे आकार (C99)", "निश्चित आकार ऐरे", "गतिशील ऐरे", "लिंक्ड सूची"],
    "answer_en": "Array size determined at runtime (C99)",
    "answer_hi": "रनटाइम पर निर्धारित ऐरे आकार (C99)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'designated initializers'?",
    "question_hi": "'designated initializers' क्या है?",
    "options_en": ["Initialize specific array/structure members", "Initialize all members", "Default initialization", "No initialization"],
    "options_hi": ["विशिष्ट ऐरे/संरचना सदस्यों को आरंभ करें", "सभी सदस्यों को आरंभ करें", "डिफ़ॉल्ट आरंभीकरण", "कोई आरंभीकरण नहीं"],
    "answer_en": "Initialize specific array/structure members",
    "answer_hi": "विशिष्ट ऐरे/संरचना सदस्यों को आरंभ करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'compound literals'?",
    "question_hi": "'compound literals' क्या है?",
    "options_en": ["Anonymous objects with initializers", "Literals with operators", "String literals", "Numeric literals"],
    "options_hi": ["आरंभीकरण के साथ अनाम वस्तुएं", "ऑपरेटर्स के साथ लिटरल", "स्ट्रिंग लिटरल", "संख्यात्मक लिटरल"],
    "answer_en": "Anonymous objects with initializers",
    "answer_hi": "आरंभीकरण के साथ अनाम वस्तुएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'static assert' (_Static_assert)?",
    "question_hi": "'static assert' (_Static_assert) क्या है?",
    "options_en": ["Compile-time assertion", "Runtime assertion", "Debug assertion", "No such thing"],
    "options_hi": ["कंपाइल-टाइम असेर्शन", "रनटाइम असेर्शन", "डीबग असेर्शन", "ऐसी कोई चीज़ नहीं"],
    "answer_en": "Compile-time assertion",
    "answer_hi": "कंपाइल-टाइम असेर्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'type generic math' (tgmath.h)?",
    "question_hi": "'type generic math' (tgmath.h) क्या है?",
    "options_en": ["Generic type math functions", "Only float math", "Only integer math", "No math library"],
    "options_hi": ["सामान्य प्रकार गणित कार्य", "केवल फ़्लोट गणित", "केवल पूर्णांक गणित", "कोई गणित लाइब्रेरी नहीं"],
    "answer_en": "Generic type math functions",
    "answer_hi": "सामान्य प्रकार गणित कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'fenv.h' used for?",
    "question_hi": "'fenv.h' किसके लिए प्रयोग किया जाता है?",
    "options_en": ["Floating-point environment control", "File environment", "Function environment", "Memory environment"],
    "options_hi": ["फ़्लोटिंग-पॉइंट पर्यावरण नियंत्रण", "फ़ाइल पर्यावरण", "फ़ंक्शन पर्यावरण", "मेमोरी पर्यावरण"],
    "answer_en": "Floating-point environment control",
    "answer_hi": "फ़्लोटिंग-पॉइंट पर्यावरण नियंत्रण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'signal-safe functions'?",
    "question_hi": "'signal-safe functions' क्या हैं?",
    "options_en": ["Functions safe to call in signal handlers", "All functions", "No functions", "Only main()"],
    "options_hi": ["सिग्नल हैंडलर्स में कॉल करने के लिए सुरक्षित फ़ंक्शन्स", "सभी फ़ंक्शन्स", "कोई फ़ंक्शन नहीं", "केवल main()"],
    "answer_en": "Functions safe to call in signal handlers",
    "answer_hi": "सिग्नल हैंडलर्स में कॉल करने के लिए सुरक्षित फ़ंक्शन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'interpositioning'?",
    "question_hi": "'interpositioning' क्या है?",
    "options_en": ["Replacing library function with custom version", "Function overloading", "Function overriding", "No such concept"],
    "options_hi": ["लाइब्रेरी फ़ंक्शन को कस्टम संस्करण से बदलना", "फ़ंक्शन ओवरलोडिंग", "फ़ंक्शन ओवरराइडिंग", "ऐसी कोई अवधारणा नहीं"],
    "answer_en": "Replacing library function with custom version",
    "answer_hi": "लाइब्रेरी फ़ंक्शन को कस्टम संस्करण से बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'linker script'?",
    "question_hi": "'linker script' क्या है?",
    "options_en": ["Script controlling linking process", "Compiler script", "Runtime script", "Debug script"],
    "options_hi": ["लिंकिंग प्रक्रिया को नियंत्रित करने वाली स्क्रिप्ट", "कंपाइलर स्क्रिप्ट", "रनटाइम स्क्रिप्ट", "डीबग स्क्रिप्ट"],
    "answer_en": "Script controlling linking process",
    "answer_hi": "लिंकिंग प्रक्रिया को नियंत्रित करने वाली स्क्रिप्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'weak symbol'?",
    "question_hi": "'weak symbol' क्या है?",
    "options_en": ["Symbol that can be overridden", "Strong symbol", "Constant symbol", "No symbol"],
    "options_hi": ["प्रतीक जिसे ओवरराइड किया जा सकता है", "मजबूत प्रतीक", "स्थिर प्रतीक", "कोई प्रतीक नहीं"],
    "answer_en": "Symbol that can be overridden",
    "answer_hi": "प्रतीक जिसे ओवरराइड किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'tentative definition'?",
    "question_hi": "'tentative definition' क्या है?",
    "options_en": ["Declaration without initializer, may be defined later", "Final definition", "No definition", "External definition"],
    "options_hi": ["बिना आरंभीकरण के घोषणा, बाद में परिभाषित की जा सकती है", "अंतिम परिभाषा", "कोई परिभाषा नहीं", "बाहरी परिभाषा"],
    "answer_en": "Declaration without initializer, may be defined later",
    "answer_hi": "बिना आरंभीकरण के घोषणा, बाद में परिभाषित की जा सकती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'common block'?",
    "question_hi": "'common block' क्या है?",
    "options_en": ["Old Fortran-style common storage", "C block", "Memory block", "Code block"],
    "options_hi": ["पुरानी Fortran-शैली की सामान्य भंडारण", "C ब्लॉक", "मेमोरी ब्लॉक", "कोड ब्लॉक"],
    "answer_en": "Old Fortran-style common storage",
    "answer_hi": "पुरानी Fortran-शैली की सामान्य भंडारण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'alias analysis'?",
    "question_hi": "'alias analysis' क्या है?",
    "options_en": ["Compiler optimization detecting aliasing", "Runtime analysis", "Debug analysis", "No analysis"],
    "options_hi": ["कंपाइलर ऑप्टिमाइज़ेशन जो एलियासिंग का पता लगाता है", "रनटाइम विश्लेषण", "डीबग विश्लेषण", "कोई विश्लेषण नहीं"],
    "answer_en": "Compiler optimization detecting aliasing",
    "answer_hi": "कंपाइलर ऑप्टिमाइज़ेशन जो एलियासिंग का पता लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'inline assembly'?",
    "question_hi": "'inline assembly' क्या है?",
    "options_en": ["Assembly code inside C code", "External assembly", "No assembly", "Compiled assembly"],
    "options_hi": ["C कोड के अंदर असेंबली कोड", "बाहरी असेंबली", "कोई असेंबली नहीं", "संकलित असेंबली"],
    "answer_en": "Assembly code inside C code",
    "answer_hi": "C कोड के अंदर असेंबली कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'MMX/SSE intrinsics'?",
    "question_hi": "'MMX/SSE intrinsics' क्या हैं?",
    "options_en": ["Compiler built-ins for SIMD instructions", "Math functions", "String functions", "Memory functions"],
    "options_hi": ["SIMD निर्देशों के लिए कंपाइलर बिल्ट-इन्स", "गणित कार्य", "स्ट्रिंग कार्य", "मेमोरी कार्य"],
    "answer_en": "Compiler built-ins for SIMD instructions",
    "answer_hi": "SIMD निर्देशों के लिए कंपाइलर बिल्ट-इन्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'restrict and aliasing'?",
    "question_hi": "'restrict और aliasing' क्या है?",
    "options_en": ["restrict promises no aliasing for optimization", "Forces aliasing", "Prevents optimization", "No relation"],
    "options_hi": ["restrict ऑप्टिमाइज़ेशन के लिए कोई एलियासिंग न होने का वादा करता है", "एलियासिंग को मजबूर करता है", "ऑप्टिमाइज़ेशन रोकता है", "कोई संबंध नहीं"],
    "answer_en": "restrict promises no aliasing for optimization",
    "answer_hi": "restrict ऑप्टिमाइज़ेशन के लिए कोई एलियासिंग न होने का वादा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'register allocation'?",
    "question_hi": "'register allocation' क्या है?",
    "options_en": ["Compiler assigning variables to CPU registers", "Memory allocation", "Stack allocation", "Heap allocation"],
    "options_hi": ["कंपाइलर वेरिएबल्स को CPU रजिस्टरों में निर्दिष्ट करता है", "मेमोरी आवंटन", "स्टैक आवंटन", "हीप आवंटन"],
    "answer_en": "Compiler assigning variables to CPU registers",
    "answer_hi": "कंपाइलर वेरिएबल्स को CPU रजिस्टरों में निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'spilling' in register allocation?",
    "question_hi": "रजिस्टर आवंटन में 'spilling' क्या है?",
    "options_en": ["Moving variable from register to memory", "Register overflow", "Memory leak", "Stack overflow"],
    "options_hi": ["रजिस्टर से मेमोरी में वेरिएबल ले जाना", "रजिस्टर ओवरफ्लो", "मेमोरी लीक", "स्टैक ओवरफ्लो"],
    "answer_en": "Moving variable from register to memory",
    "answer_hi": "रजिस्टर से मेमोरी में वेरिएबल ले जाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'preemptive multitasking vs cooperative'?",
    "question_hi": "'preemptive multitasking बनाम cooperative' क्या है?",
    "options_en": ["OS switches threads vs threads yield", "Same thing", "No multitasking", "Only single task"],
    "options_hi": ["OS थ्रेड्स स्विच करता है बनाम थ्रेड्स यील्ड करती हैं", "एक ही चीज़", "कोई मल्टीटास्किंग नहीं", "केवल सिंगल टास्क"],
    "answer_en": "OS switches threads vs threads yield",
    "answer_hi": "OS थ्रेड्स स्विच करता है बनाम थ्रेड्स यील्ड करती हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'thread-local storage' (TLS)?",
    "question_hi": "'thread-local storage' (TLS) क्या है?",
    "options_en": ["Variables unique to each thread", "Global variables", "Shared variables", "Static variables"],
    "options_hi": ["प्रत्येक थ्रेड के लिए अद्वितीय वेरिएबल्स", "वैश्विक वेरिएबल्स", "साझा वेरिएबल्स", "स्थैतिक वेरिएबल्स"],
    "answer_en": "Variables unique to each thread",
    "answer_hi": "प्रत्येक थ्रेड के लिए अद्वितीय वेरिएबल्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'memory model' in C11?",
    "question_hi": "C11 में 'memory model' क्या है?",
    "options_en": ["Defines memory ordering for concurrency", "Memory layout", "Memory allocation", "Memory deallocation"],
    "options_hi": ["समवर्तिता के लिए मेमोरी ऑर्डरिंग को परिभाषित करता है", "मेमोरी लेआउट", "मेमोरी आवंटन", "मेमोरी डीलोकेशन"],
    "answer_en": "Defines memory ordering for concurrency",
    "answer_hi": "समवर्तिता के लिए मेमोरी ऑर्डरिंग को परिभाषित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'memory order' values?",
    "question_hi": "'memory order' मान क्या हैं?",
    "options_en": ["memory_order_relaxed, acquire, release, etc.", "Only one order", "No order", "Random order"],
    "options_hi": ["memory_order_relaxed, acquire, release, आदि।", "केवल एक क्रम", "कोई क्रम नहीं", "यादृच्छिक क्रम"],
    "answer_en": "memory_order_relaxed, acquire, release, etc.",
    "answer_hi": "memory_order_relaxed, acquire, release, आदि।",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'atomic_flag'?",
    "question_hi": "'atomic_flag' क्या है?",
    "options_en": ["Lock-free boolean flag", "Regular flag", "Memory flag", "Thread flag"],
    "options_hi": ["लॉक-मुक्त बूलियन फ्लैग", "नियमित फ्लैग", "मेमोरी फ्लैग", "थ्रेड फ्लैग"],
    "answer_en": "Lock-free boolean flag",
    "answer_hi": "लॉक-मुक्त बूलियन फ्लैग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'fence' in memory model?",
    "question_hi": "मेमोरी मॉडल में 'fence' क्या है?",
    "options_en": ["Memory barrier enforcing ordering", "Physical fence", "No fence", "Compiler fence"],
    "options_hi": ["मेमोरी बैरियर जो ऑर्डरिंग लागू करता है", "भौतिक बाड़", "कोई बाड़ नहीं", "कंपाइलर बाड़"],
    "answer_en": "Memory barrier enforcing ordering",
    "answer_hi": "मेमोरी बैरियर जो ऑर्डरिंग लागू करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'ABA problem' in lock-free programming?",
    "question_hi": "लॉक-मुक्त प्रोग्रामिंग में 'ABA problem' क्या है?",
    "options_en": ["Value changes A->B->A causing false success", "No problem", "Memory leak", "Deadlock"],
    "options_hi": ["मान A->B->A में बदल जाता है जिससे झूठी सफलता होती है", "कोई समस्या नहीं", "मेमोरी लीक", "डेडलॉक"],
    "answer_en": "Value changes A->B->A causing false success",
    "answer_hi": "मान A->B->A में बदल जाता है जिससे झूठी सफलता होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'hazard pointers'?",
    "question_hi": "'hazard pointers' क्या हैं?",
    "options_en": ["Technique for safe memory reclamation", "Dangerous pointers", "Wild pointers", "NULL pointers"],
    "options_hi": ["सुरक्षित मेमोरी पुनः दावा के लिए तकनीक", "खतरनाक पॉइंटर्स", "वाइल्ड पॉइंटर्स", "NULL पॉइंटर्स"],
    "answer_en": "Technique for safe memory reclamation",
    "answer_hi": "सुरक्षित मेमोरी पुनः दावा के लिए तकनीक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'RCU' (Read-Copy-Update)?",
    "question_hi": "'RCU' (Read-Copy-Update) क्या है?",
    "options_en": ["Synchronization mechanism for reads", "Write mechanism", "Memory allocation", "File update"],
    "options_hi": ["रीड्स के लिए समकालिकरण तंत्र", "लिखने का तंत्र", "मेमोरी आवंटन", "फ़ाइल अपडेट"],
    "answer_en": "Synchronization mechanism for reads",
    "answer_hi": "रीड्स के लिए समकालिकरण तंत्र",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'speculative execution' side channel?",
    "question_hi": "'speculative execution' साइड चैनल क्या है?",
    "options_en": ["CPU optimization leaking data (e.g., Spectre)", "No leakage", "Memory leak", "Buffer overflow"],
    "options_hi": ["CPU ऑप्टिमाइज़ेशन डेटा लीक कर रहा है (जैसे, Spectre)", "कोई रिसाव नहीं", "मेमोरी लीक", "बफर ओवरफ्लो"],
    "answer_en": "CPU optimization leaking data (e.g., Spectre)",
    "answer_hi": "CPU ऑप्टिमाइज़ेशन डेटा लीक कर रहा है (जैसे, Spectre)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'cache line' and false sharing?",
    "question_hi": "'cache line' और false sharing क्या है?",
    "options_en": ["False sharing when threads modify same cache line", "True sharing", "No sharing", "Memory sharing"],
    "options_hi": ["फ़ॉल्स शेयरिंग जब थ्रेड्स एक ही कैश लाइन संशोधित करते हैं", "ट्रू शेयरिंग", "कोई शेयरिंग नहीं", "मेमोरी शेयरिंग"],
    "answer_en": "False sharing when threads modify same cache line",
    "answer_hi": "फ़ॉल्स शेयरिंग जब थ्रेड्स एक ही कैश लाइन संशोधित करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'non-temporal stores'?",
    "question_hi": "'non-temporal stores' क्या हैं?",
    "options_en": ["Stores bypassing cache (e.g., _mm_stream)", "Cache stores", "Temporal stores", "No stores"],
    "options_hi": ["कैश को बायपास करने वाले स्टोर्स (जैसे, _mm_stream)", "कैश स्टोर्स", "टेम्पोरल स्टोर्स", "कोई स्टोर्स नहीं"],
    "answer_en": "Stores bypassing cache (e.g., _mm_stream)",
    "answer_hi": "कैश को बायपास करने वाले स्टोर्स (जैसे, _mm_stream)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'profile-guided optimization' (PGO)?",
    "question_hi": "'profile-guided optimization' (PGO) क्या है?",
    "options_en": ["Optimization using runtime profiling data", "Static optimization", "No optimization", "Manual optimization"],
    "options_hi": ["रनटाइम प्रोफाइलिंग डेटा का उपयोग कर ऑप्टिमाइज़ेशन", "स्थैतिक ऑप्टिमाइज़ेशन", "कोई ऑप्टिमाइज़ेशन नहीं", "मैन्युअल ऑप्टिमाइज़ेशन"],
    "answer_en": "Optimization using runtime profiling data",
    "answer_hi": "रनटाइम प्रोफाइलिंग डेटा का उपयोग कर ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'link-time optimization' (LTO)?",
    "question_hi": "'link-time optimization' (LTO) क्या है?",
    "options_en": ["Optimization across object files at link time", "Compile-time only", "Runtime only", "No optimization"],
    "options_hi": ["लिंक समय पर ऑब्जेक्ट फ़ाइलों में ऑप्टिमाइज़ेशन", "केवल कंपाइल-टाइम", "केवल रनटाइम", "कोई ऑप्टिमाइज़ेशन नहीं"],
    "answer_en": "Optimization across object files at link time",
    "answer_hi": "लिंक समय पर ऑब्जेक्ट फ़ाइलों में ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'dead code elimination'?",
    "question_hi": "'dead code elimination' क्या है?",
    "options_en": ["Removing unreachable code", "Adding code", "Modifying code", "Duplicating code"],
    "options_hi": ["अपहरणीय कोड हटाना", "कोड जोड़ना", "कोड संशोधित करना", "कोड डुप्लिकेट करना"],
    "answer_en": "Removing unreachable code",
    "answer_hi": "अपहरणीय कोड हटाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'constant propagation'?",
    "question_hi": "'constant propagation' क्या है?",
    "options_en": ["Replacing variables with constants", "Replacing constants with variables", "No replacement", "Memory propagation"],
    "options_hi": ["वेरिएबल्स को स्थिरांक से बदलना", "स्थिरांक को वेरिएबल्स से बदलना", "कोई प्रतिस्थापन नहीं", "मेमोरी प्रसार"],
    "answer_en": "Replacing variables with constants",
    "answer_hi": "वेरिएबल्स को स्थिरांक से बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'loop unrolling'?",
    "question_hi": "'loop unrolling' क्या है?",
    "options_en": ["Duplicate loop body to reduce overhead", "Make loop smaller", "Remove loop", "Add more loops"],
    "options_hi": ["ओवरहेड कम करने के लिए लूप बॉडी डुप्लिकेट करें", "लूप छोटा बनाएं", "लूप हटाएं", "अधिक लूप जोड़ें"],
    "answer_en": "Duplicate loop body to reduce overhead",
    "answer_hi": "ओवरहेड कम करने के लिए लूप बॉडी डुप्लिकेट करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'loop invariant code motion'?",
    "question_hi": "'loop invariant code motion' क्या है?",
    "options_en": ["Moving constant expressions outside loop", "Moving into loop", "Deleting code", "Duplicating code"],
    "options_hi": ["लूप के बाहर स्थिर व्यंजक ले जाना", "लूप में ले जाना", "कोड हटाना", "कोड डुप्लिकेट करना"],
    "answer_en": "Moving constant expressions outside loop",
    "answer_hi": "लूप के बाहर स्थिर व्यंजक ले जाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'function inlining'?",
    "question_hi": "'function inlining' क्या है?",
    "options_en": ["Replace function call with its body", "Make function external", "Remove function", "Rename function"],
    "options_hi": ["फ़ंक्शन कॉल को उसके बॉडी से बदलें", "फ़ंक्शन बाहरी बनाएं", "फ़ंक्शन हटाएं", "फ़ंक्शन का नाम बदलें"],
    "answer_en": "Replace function call with its body",
    "answer_hi": "फ़ंक्शन कॉल को उसके बॉडी से बदलें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'tail call optimization' (TCO)?",
    "question_hi": "'tail call optimization' (TCO) क्या है?",
    "options_en": ["Reuse stack frame for tail recursive calls", "No optimization", "Only for loops", "For all calls"],
    "options_hi": ["टेल रिकर्सिव कॉल्स के लिए स्टैक फ़्रेम पुनः उपयोग करें", "कोई ऑप्टिमाइज़ेशन नहीं", "केवल लूप्स के लिए", "सभी कॉल्स के लिए"],
    "answer_en": "Reuse stack frame for tail recursive calls",
    "answer_hi": "टेल रिकर्सिव कॉल्स के लिए स्टैक फ़्रेम पुनः उपयोग करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'stack protector' (canary)?",
    "question_hi": "'stack protector' (canary) क्या है?",
    "options_en": ["Detect stack buffer overflow", "Protect heap", "Prevent deadlock", "Speed up code"],
    "options_hi": ["स्टैक बफर ओवरफ्लो का पता लगाएं", "हीप की रक्षा करें", "डेडलॉक रोकें", "कोड की गति बढ़ाएं"],
    "answer_en": "Detect stack buffer overflow",
    "answer_hi": "स्टैक बफर ओवरफ्लो का पता लगाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'control flow integrity' (CFI)?",
    "question_hi": "'control flow integrity' (CFI) क्या है?",
    "options_en": ["Security mechanism to prevent code reuse attacks", "Memory protection", "Stack protection", "No protection"],
    "options_hi": ["कोड पुनः उपयोग हमलों को रोकने के लिए सुरक्षा तंत्र", "मेमोरी सुरक्षा", "स्टैक सुरक्षा", "कोई सुरक्षा नहीं"],
    "answer_en": "Security mechanism to prevent code reuse attacks",
    "answer_hi": "कोड पुनः उपयोग हमलों को रोकने के लिए सुरक्षा तंत्र",
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