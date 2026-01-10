const questions=[
  {
    "num": 1,
    "question_en": "What is the output: int a = 1, b = 2, c = 3; printf(\"%d\", a+++b+++c);",
    "question_hi": "आउटपुट क्या है: int a = 1, b = 2, c = 3; printf(\"%d\", a+++b+++c);",
    "options_en": ["6", "7", "8", "Undefined behavior"],
    "options_hi": ["6", "7", "8", "अपरिभाषित व्यवहार"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'as-if rule' in C?",
    "question_hi": "C में 'as-if rule' क्या है?",
    "options_en": ["Compiler can optimize if observable behavior same", "No optimization allowed", "Only for arithmetic", "For I/O only"],
    "options_hi": ["कंपाइलर ऑप्टिमाइज़ कर सकता है यदि अवलोकनीय व्यवहार समान है", "कोई ऑप्टिमाइज़ेशन अनुमति नहीं", "केवल अंकगणित के लिए", "केवल I/O के लिए"],
    "answer_en": "Compiler can optimize if observable behavior same",
    "answer_hi": "कंपाइलर ऑप्टिमाइज़ कर सकता है यदि अवलोकनीय व्यवहार समान है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'strictly conforming program'?",
    "question_hi": "'strictly conforming program' क्या है?",
    "options_en": ["Uses only standard features, no extensions", "Uses extensions", "Non-portable", "Compiler-specific"],
    "options_hi": ["केवल मानक सुविधाओं का उपयोग करता है, कोई एक्सटेंशन नहीं", "एक्सटेंशन का उपयोग करता है", "असंवहनीय", "कंपाइलर-विशिष्ट"],
    "answer_en": "Uses only standard features, no extensions",
    "answer_hi": "केवल मानक सुविधाओं का उपयोग करता है, कोई एक्सटेंशन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'trap representation'?",
    "question_hi": "'trap representation' क्या है?",
    "options_en": ["Bit pattern causing undefined behavior if read", "Valid value", "Zero value", "Max value"],
    "options_hi": ["बिट पैटर्न जो पढ़ने पर अपरिभाषित व्यवहार का कारण बनता है", "मान्य मान", "शून्य मान", "अधिकतम मान"],
    "answer_en": "Bit pattern causing undefined behavior if read",
    "answer_hi": "बिट पैटर्न जो पढ़ने पर अपरिभाषित व्यवहार का कारण बनता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'padding bits'?",
    "question_hi": "'padding bits' क्या हैं?",
    "options_en": ["Extra bits in integer representation", "Sign bits", "Value bits", "Parity bits"],
    "options_hi": ["पूर्णांक प्रतिनिधित्व में अतिरिक्त बिट्स", "चिन्ह बिट्स", "मान बिट्स", "समता बिट्स"],
    "answer_en": "Extra bits in integer representation",
    "answer_hi": "पूर्णांक प्रतिनिधित्व में अतिरिक्त बिट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'signaling NaN' vs 'quiet NaN'?",
    "question_hi": "'signaling NaN' बनाम 'quiet NaN' क्या है?",
    "options_en": ["sNaN raises exception, qNaN propagates", "Both same", "No difference", "C doesn't have NaN"],
    "options_hi": ["sNaN अपवाद उठाता है, qNaN प्रचारित करता है", "दोनों समान", "कोई अंतर नहीं", "C में NaN नहीं है"],
    "answer_en": "sNaN raises exception, qNaN propagates",
    "answer_hi": "sNaN अपवाद उठाता है, qNaN प्रचारित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'floating-point environment'?",
    "question_hi": "'floating-point environment' क्या है?",
    "options_en": ["Rounding modes, exceptions, etc.", "Only values", "Only operations", "Memory for floats"],
    "options_hi": ["राउंडिंग मोड, अपवाद, आदि।", "केवल मान", "केवल संक्रियाएं", "फ़्लोट्स के लिए मेमोरी"],
    "answer_en": "Rounding modes, exceptions, etc.",
    "answer_hi": "राउंडिंग मोड, अपवाद, आदि।",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'contracted expression'?",
    "question_hi": "'contracted expression' क्या है?",
    "options_en": ["Fused multiply-add (FMA) as single operation", "Simplified expression", "Compressed expression", "No such thing"],
    "options_hi": ["फ़्यूज़्ड गुणा-जोड़ (FMA) एकल संक्रिया के रूप में", "सरलीकृत व्यंजक", "संपीड़ित व्यंजक", "ऐसी कोई चीज़ नहीं"],
    "answer_en": "Fused multiply-add (FMA) as single operation",
    "answer_hi": "फ़्यूज़्ड गुणा-जोड़ (FMA) एकल संक्रिया के रूप में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'complex infinity'?",
    "question_hi": "'complex infinity' क्या है?",
    "options_en": ["Complex number with infinite real/imaginary part", "Real infinity", "No infinity", "Only imaginary"],
    "options_hi": ["जटिल संख्या जिसमें अनंत वास्तविक/काल्पनिक भाग है", "वास्तविक अनंत", "कोई अनंत नहीं", "केवल काल्पनिक"],
    "answer_en": "Complex number with infinite real/imaginary part",
    "answer_hi": "जटिल संख्या जिसमें अनंत वास्तविक/काल्पनिक भाग है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'canonical NaN'?",
    "question_hi": "'canonical NaN' क्या है?",
    "options_hi": ["NaN का विशिष्ट बिट प्रतिनिधित्व", "कोई NaN नहीं", "सभी NaN समान", "केवल sNaN"],
    "options_en": ["Specific bit representation of NaN", "No NaN", "All NaNs same", "Only sNaN"],
    "answer_en": "Specific bit representation of NaN",
    "answer_hi": "NaN का विशिष्ट बिट प्रतिनिधित्व",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'type punning' via union?",
    "question_hi": "यूनियन के माध्यम से 'type punning' क्या है?",
    "options_en": ["Accessing same memory as different type", "Type casting", "Type conversion", "Type checking"],
    "options_hi": ["समान मेमोरी को भिन्न प्रकार के रूप में एक्सेस करना", "टाइप कास्टिंग", "टाइप रूपांतरण", "टाइप जाँच"],
    "answer_en": "Accessing same memory as different type",
    "answer_hi": "समान मेमोरी को भिन्न प्रकार के रूप में एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Is type punning via union defined in C?",
    "question_hi": "क्या यूनियन के माध्यम से टाइप पनिंग C में परिभाषित है?",
    "options_en": ["Implementation-defined", "Always defined", "Always undefined", "Only in C++"],
    "options_hi": ["कार्यान्वयन-परिभाषित", "हमेशा परिभाषित", "हमेशा अपरिभाषित", "केवल C++ में"],
    "answer_en": "Implementation-defined",
    "answer_hi": "कार्यान्वयन-परिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'effective type'?",
    "question_hi": "'effective type' क्या है?",
    "options_en": ["Type used to access object in strict aliasing", "Declared type", "Inferred type", "No such concept"],
    "options_hi": ["सख्त एलियासिंग में ऑब्जेक्ट एक्सेस करने के लिए उपयोग किया गया प्रकार", "घोषित प्रकार", "अनुमानित प्रकार", "ऐसी कोई अवधारणा नहीं"],
    "answer_en": "Type used to access object in strict aliasing",
    "answer_hi": "सख्त एलियासिंग में ऑब्जेक्ट एक्सेस करने के लिए उपयोग किया गया प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'allocated storage'?",
    "question_hi": "'allocated storage' क्या है?",
    "options_en": ["Memory from malloc/calloc/realloc", "Stack memory", "Register", "ROM"],
    "options_hi": ["malloc/calloc/realloc से मेमोरी", "स्टैक मेमोरी", "रजिस्टर", "ROM"],
    "answer_en": "Memory from malloc/calloc/realloc",
    "answer_hi": "malloc/calloc/realloc से मेमोरी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'object lifetime'?",
    "question_hi": "'object lifetime' क्या है?",
    "options_en": ["Time between allocation and deallocation", "Program runtime", "Compile time", "No lifetime"],
    "options_hi": ["आवंटन और डीलोकेशन के बीच का समय", "प्रोग्राम रनटाइम", "कंपाइल समय", "कोई आयु नहीं"],
    "answer_en": "Time between allocation and deallocation",
    "answer_hi": "आवंटन और डीलोकेशन के बीच का समय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'storage duration'?",
    "question_hi": "'storage duration' क्या है?",
    "options_en": ["Static, automatic, allocated, thread_local", "Only static", "Only automatic", "Only dynamic"],
    "options_hi": ["स्थैतिक, स्वचालित, आवंटित, thread_local", "केवल स्थैतिक", "केवल स्वचालित", "केवल गतिशील"],
    "answer_en": "Static, automatic, allocated, thread_local",
    "answer_hi": "स्थैतिक, स्वचालित, आवंटित, thread_local",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'thread storage duration'?",
    "question_hi": "'thread storage duration' क्या है?",
    "options_en": ["Object exists for thread lifetime", "Process lifetime", "Function lifetime", "Block lifetime"],
    "options_hi": ["ऑब्जेक्ट थ्रेड आयु के लिए मौजूद है", "प्रक्रिया आयु", "फ़ंक्शन आयु", "ब्लॉक आयु"],
    "answer_en": "Object exists for thread lifetime",
    "answer_hi": "ऑब्जेक्ट थ्रेड आयु के लिए मौजूद है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'compatible type'?",
    "question_hi": "'compatible type' क्या है?",
    "options_en": ["Types that can be used interchangeably", "Different types", "Same name", "No compatibility"],
    "options_hi": ["प्रकार जिनका परस्पर उपयोग किया जा सकता है", "भिन्न प्रकार", "समान नाम", "कोई संगतता नहीं"],
    "answer_en": "Types that can be used interchangeably",
    "answer_hi": "प्रकार जिनका परस्पर उपयोग किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'composite type'?",
    "question_hi": "'composite type' क्या है?",
    "options_en": ["Type derived from compatible types", "New type", "Basic type", "No such type"],
    "options_hi": ["संगत प्रकारों से व्युत्पन्न प्रकार", "नया प्रकार", "मूल प्रकार", "ऐसा कोई प्रकार नहीं"],
    "answer_en": "Type derived from compatible types",
    "answer_hi": "संगत प्रकारों से व्युत्पन्न प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'incomplete type'?",
    "question_hi": "'incomplete type' क्या है?",
    "options_en": ["Type whose size is unknown (e.g., void, forward declared struct)", "Complete type", "Any type", "No type"],
    "options_hi": ["प्रकार जिसका आकार अज्ञात है (जैसे, void, forward declared struct)", "पूर्ण प्रकार", "कोई भी प्रकार", "कोई प्रकार नहीं"],
    "answer_en": "Type whose size is unknown (e.g., void, forward declared struct)",
    "answer_hi": "प्रकार जिसका आकार अज्ञात है (जैसे, void, forward declared struct)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'flexible array member' size?",
    "question_hi": "'flexible array member' का आकार क्या है?",
    "options_en": ["Incomplete at struct definition", "Fixed size", "Zero", "One"],
    "options_hi": ["संरचना परिभाषा पर अपूर्ण", "निश्चित आकार", "शून्य", "एक"],
    "answer_en": "Incomplete at struct definition",
    "answer_hi": "संरचना परिभाषा पर अपूर्ण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'designated initializer for arrays'?",
    "question_hi": "ऐरे के लिए 'designated initializer' क्या है?",
    "options_en": ["[index] = value syntax", "{value1, value2}", "No such thing", "Only for struct"],
    "options_hi": ["[index] = value सिंटैक्स", "{value1, value2}", "ऐसी कोई चीज़ नहीं", "केवल संरचना के लिए"],
    "answer_en": "[index] = value syntax",
    "answer_hi": "[index] = value सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'compound literal lifetime'?",
    "question_hi": "'compound literal lifetime' क्या है?",
    "options_en": ["Automatic if inside function, static if file scope", "Always static", "Always automatic", "Always dynamic"],
    "options_hi": ["स्वचालित यदि फ़ंक्शन के अंदर, स्थैतिक यदि फ़ाइल स्कोप", "हमेशा स्थैतिक", "हमेशा स्वचालित", "हमेशा गतिशील"],
    "answer_en": "Automatic if inside function, static if file scope",
    "answer_hi": "स्वचालित यदि फ़ंक्शन के अंदर, स्थैतिक यदि फ़ाइल स्कोप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'const compound literal'?",
    "question_hi": "'const compound literal' क्या है?",
    "options_en": ["(const int[]){1,2,3}", "(int[]){1,2,3}", "No const", "Only for strings"],
    "options_hi": ["(const int[]){1,2,3}", "(int[]){1,2,3}", "कोई const नहीं", "केवल स्ट्रिंग्स के लिए"],
    "answer_en": "(const int[]){1,2,3}",
    "answer_hi": "(const int[]){1,2,3}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'function designator'?",
    "question_hi": "'function designator' क्या है?",
    "options_en": ["Expression that has function type", "Function name", "Function pointer", "Function call"],
    "options_hi": ["एक्सप्रेशन जिसमें फ़ंक्शन प्रकार है", "फ़ंक्शन नाम", "फ़ंक्शन पॉइंटर", "फ़ंक्शन कॉल"],
    "answer_en": "Expression that has function type",
    "answer_hi": "एक्सप्रेशन जिसमें फ़ंक्शन प्रकार है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'lvalue conversion'?",
    "question_hi": "'lvalue conversion' क्या है?",
    "options_en": ["Converting lvalue to value (rvalue)", "Converting rvalue to lvalue", "No conversion", "Type conversion"],
    "options_hi": ["lvalue को मान (rvalue) में बदलना", "rvalue को lvalue में बदलना", "कोई रूपांतरण नहीं", "टाइप रूपांतरण"],
    "answer_en": "Converting lvalue to value (rvalue)",
    "answer_hi": "lvalue को मान (rvalue) में बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'array decay'?",
    "question_hi": "'array decay' क्या है?",
    "options_en": ["Array converts to pointer to first element", "Pointer to array", "Array to value", "No decay"],
    "options_hi": ["ऐरे पहले तत्व के पॉइंटर में परिवर्तित हो जाती है", "ऐरे का पॉइंटर", "ऐरे से मान", "कोई क्षय नहीं"],
    "answer_en": "Array converts to pointer to first element",
    "answer_hi": "ऐरे पहले तत्व के पॉइंटर में परिवर्तित हो जाती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'function to pointer conversion'?",
    "question_hi": "'function to pointer conversion' क्या है?",
    "options_en": ["Function designator becomes pointer to function", "No conversion", "Only for calls", "Only for arrays"],
    "options_hi": ["फ़ंक्शन डिज़ाइनेटर फ़ंक्शन के पॉइंटर बन जाता है", "कोई रूपांतरण नहीं", "केवल कॉल के लिए", "केवल ऐरे के लिए"],
    "answer_en": "Function designator becomes pointer to function",
    "answer_hi": "फ़ंक्शन डिज़ाइनेटर फ़ंक्शन के पॉइंटर बन जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'usual arithmetic conversions'?",
    "question_hi": "'usual arithmetic conversions' क्या हैं?",
    "options_en": ["Promotions to common type for operators", "No conversions", "Only for floats", "Only for integers"],
    "options_hi": ["ऑपरेटर्स के लिए सामान्य प्रकार में प्रचार", "कोई रूपांतरण नहीं", "केवल फ़्लोट्स के लिए", "केवल पूर्णांकों के लिए"],
    "answer_en": "Promotions to common type for operators",
    "answer_hi": "ऑपरेटर्स के लिए सामान्य प्रकार में प्रचार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'integer promotion'?",
    "question_hi": "'integer promotion' क्या है?",
    "options_en": ["Small integer types promoted to int", "int to long", "long to long long", "No promotion"],
    "options_hi": ["छोटे पूर्णांक प्रकार int में प्रचारित", "int से long", "long से long long", "कोई प्रचार नहीं"],
    "answer_en": "Small integer types promoted to int",
    "answer_hi": "छोटे पूर्णांक प्रकार int में प्रचारित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'default argument promotions'?",
    "question_hi": "'default argument promotions' क्या हैं?",
    "options_en": ["In variadic functions: float to double, integer promotions", "No promotions", "Only for fixed args", "Only for arrays"],
    "options_hi": ["वेरिएडिक फ़ंक्शन्स में: float से double, पूर्णांक प्रचार", "कोई प्रचार नहीं", "केवल निश्चित args के लिए", "केवल ऐरे के लिए"],
    "answer_en": "In variadic functions: float to double, integer promotions",
    "answer_hi": "वेरिएडिक फ़ंक्शन्स में: float से double, पूर्णांक प्रचार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'comma operator'?",
    "question_hi": "'comma operator' क्या है?",
    "options_en": ["Evaluates left, discards, evaluates right", "Separates arguments", "Only in for loops", "No such operator"],
    "options_hi": ["बाएं का मूल्यांकन करता है, छोड़ देता है, दाएं का मूल्यांकन करता है", "तर्कों को अलग करता है", "केवल for लूप में", "ऐसा कोई ऑपरेटर नहीं"],
    "answer_en": "Evaluates left, discards, evaluates right",
    "answer_hi": "बाएं का मूल्यांकन करता है, छोड़ देता है, दाएं का मूल्यांकन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'conditional operator' type?",
    "question_hi": "'conditional operator' प्रकार क्या है?",
    "options_en": ["Common type of second and third operands", "Type of first", "Always int", "Always pointer"],
    "options_hi": ["दूसरे और तीसरे ऑपरेंड का सामान्य प्रकार", "पहले का प्रकार", "हमेशा int", "हमेशा पॉइंटर"],
    "answer_en": "Common type of second and third operands",
    "answer_hi": "दूसरे और तीसरे ऑपरेंड का सामान्य प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'sizeof' on VLA?",
    "question_hi": "VLA पर 'sizeof' क्या है?",
    "options_en": ["Evaluated at runtime", "Compile time", "Zero", "Error"],
    "options_hi": ["रनटाइम पर मूल्यांकन", "कंपाइल समय", "शून्य", "त्रुटि"],
    "answer_en": "Evaluated at runtime",
    "answer_hi": "रनटाइम पर मूल्यांकन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'alignof' operator?",
    "question_hi": "'alignof' ऑपरेटर क्या है?",
    "options_en": ["Returns alignment requirement of type", "Returns size", "Returns address", "No such operator"],
    "options_hi": ["प्रकार की संरेखण आवश्यकता लौटाता है", "आकार लौटाता है", "पता लौटाता है", "ऐसा कोई ऑपरेटर नहीं"],
    "answer_en": "Returns alignment requirement of type",
    "answer_hi": "प्रकार की संरेखण आवश्यकता लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is '_Alignas' specifier?",
    "question_hi": "'_Alignas' स्पेसिफायर क्या है?",
    "options_en": ["Specifies alignment for object", "Specifies size", "Specifies type", "No such specifier"],
    "options_hi": ["ऑब्जेक्ट के लिए संरेखण निर्दिष्ट करता है", "आकार निर्दिष्ट करता है", "प्रकार निर्दिष्ट करता है", "ऐसा कोई स्पेसिफायर नहीं"],
    "answer_en": "Specifies alignment for object",
    "answer_hi": "ऑब्जेक्ट के लिए संरेखण निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is '_Generic' selection?",
    "question_hi": "'_Generic' चयन क्या है?",
    "options_en": ["Compile-time type-based dispatch", "Runtime dispatch", "Function overloading", "No such thing"],
    "options_hi": ["कंपाइल-टाइम प्रकार-आधारित डिस्पैच", "रनटाइम डिस्पैच", "फ़ंक्शन ओवरलोडिंग", "ऐसी कोई चीज़ नहीं"],
    "answer_en": "Compile-time type-based dispatch",
    "answer_hi": "कंपाइल-टाइम प्रकार-आधारित डिस्पैच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'static_assert'?",
    "question_hi": "'static_assert' क्या है?",
    "options_en": ["Compile-time assertion with message", "Runtime assert", "Debug assert", "No assert"],
    "options_hi": ["संदेश के साथ कंपाइल-टाइम असेर्शन", "रनटाइम assert", "डीबग assert", "कोई assert नहीं"],
    "answer_en": "Compile-time assertion with message",
    "answer_hi": "संदेश के साथ कंपाइल-टाइम असेर्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'noreturn' attribute?",
    "question_hi": "'noreturn' विशेषता क्या है?",
    "options_en": ["Function does not return", "Always returns", "Returns void", "No such attribute"],
    "options_hi": ["फ़ंक्शन वापस नहीं आता है", "हमेशा लौटता है", "void लौटाता है", "ऐसी कोई विशेषता नहीं"],
    "answer_en": "Function does not return",
    "answer_hi": "फ़ंक्शन वापस नहीं आता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'carries_dependency' attribute?",
    "question_hi": "'carries_dependency' विशेषता क्या है?",
    "options_en": ["For memory order consistency", "For dependencies", "No such attribute", "For optimization"],
    "options_hi": ["मेमोरी ऑर्डर स्थिरता के लिए", "निर्भरताओं के लिए", "ऐसी कोई विशेषता नहीं", "ऑप्टिमाइज़ेशन के लिए"],
    "answer_en": "For memory order consistency",
    "answer_hi": "मेमोरी ऑर्डर स्थिरता के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'decimal floating types'?",
    "question_hi": "'decimal floating types' क्या हैं?",
    "options_en": ["_Decimal32, _Decimal64, _Decimal128", "float, double", "No decimal", "Only binary"],
    "options_hi": ["_Decimal32, _Decimal64, _Decimal128", "float, double", "कोई दशमलव नहीं", "केवल बाइनरी"],
    "answer_en": "_Decimal32, _Decimal64, _Decimal128",
    "answer_hi": "_Decimal32, _Decimal64, _Decimal128",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'binary integer constants'?",
    "question_hi": "'binary integer constants' क्या हैं?",
    "options_en": ["0b1010 or 0B1010 syntax", "No binary", "Only hex", "Only octal"],
    "options_hi": ["0b1010 या 0B1010 सिंटैक्स", "कोई बाइनरी नहीं", "केवल हेक्स", "केवल ऑक्टल"],
    "answer_en": "0b1010 or 0B1010 syntax",
    "answer_hi": "0b1010 या 0B1010 सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'digit separators'?",
    "question_hi": "'digit separators' क्या हैं?",
    "options_en": ["1'000'000 syntax", "No separators", "Only comma", "Only underscore"],
    "options_hi": ["1'000'000 सिंटैक्स", "कोई विभाजक नहीं", "केवल अल्पविराम", "केवल अंडरस्कोर"],
    "answer_en": "1'000'000 syntax",
    "answer_hi": "1'000'000 सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'UTF-8/16/32 string literals'?",
    "question_hi": "'UTF-8/16/32 string literals' क्या हैं?",
    "options_en": ["u8\"...\", u\"...\", U\"...\"", "Only ASCII", "No Unicode", "Only UTF-8"],
    "options_hi": ["u8\"...\", u\"...\", U\"...\"", "केवल ASCII", "कोई यूनिकोड नहीं", "केवल UTF-8"],
    "answer_en": "u8\"...\", u\"...\", U\"...\"",
    "answer_hi": "u8\"...\", u\"...\", U\"...\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'wide character constants'?",
    "question_hi": "'wide character constants' क्या हैं?",
    "options_en": ["L'x', u'x', U'x'", "Only 'x'", "No wide", "Only ASCII"],
    "options_hi": ["L'x', u'x', U'x'", "केवल 'x'", "कोई wide नहीं", "केवल ASCII"],
    "answer_en": "L'x', u'x', U'x'",
    "answer_hi": "L'x', u'x', U'x'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'raw string literals'?",
    "question_hi": "'raw string literals' क्या हैं?",
    "options_en": "Not in C standard (C++ only)",
    "question_hi": "C मानक में नहीं (केवल C++)",
    "options_en": ["R\"(...)\" (C++ only)", "Standard in C", "No raw strings", "Only for files"],
    "options_hi": ["R\"(...)\" (केवल C++)", "C में मानक", "कोई raw strings नहीं", "केवल फ़ाइलों के लिए"],
    "answer_en": "R\"(...)\" (C++ only)",
    "answer_hi": "R\"(...)\" (केवल C++)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'complex literal suffix'?",
    "question_hi": "'complex literal suffix' क्या है?",
    "options_en": ["1.0i or I for imaginary", "No suffix", "Only j", "Only for real"],
    "options_hi": ["1.0i या I काल्पनिक के लिए", "कोई प्रत्यय नहीं", "केवल j", "केवल वास्तविक के लिए"],
    "answer_en": "1.0i or I for imaginary",
    "answer_hi": "1.0i या I काल्पनिक के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'hexadecimal floating constant'?",
    "question_hi": "'hexadecimal floating constant' क्या है?",
    "options_en": ["0x1.0p-1 syntax", "No hex float", "Only decimal", "Only binary"],
    "options_hi": ["0x1.0p-1 सिंटैक्स", "कोई हेक्स फ़्लोट नहीं", "केवल दशमलव", "केवल बाइनरी"],
    "answer_en": "0x1.0p-1 syntax",
    "answer_hi": "0x1.0p-1 सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'compound literal with designator'?",
    "question_hi": "'compound literal with designator' क्या है?",
    "options_en": ["(struct point){.x=1, .y=2}", "No designators", "Only for arrays", "Only in initializers"],
    "options_hi": ["(struct point){.x=1, .y=2}", "कोई डिज़ाइनेटर नहीं", "केवल ऐरे के लिए", "केवल आरंभीकरण में"],
    "answer_en": "(struct point){.x=1, .y=2}",
    "answer_hi": "(struct point){.x=1, .y=2}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'anonymous struct/union'?",
    "question_hi": "'anonymous struct/union' क्या है?",
    "options_en": ["Struct/union without tag, members in enclosing scope", "With tag", "No anonymous", "Only in C++"],
    "options_hi": ["टैग के बिना संरचना/यूनियन, सदस्य संलग्न स्कोप में", "टैग के साथ", "कोई अनाम नहीं", "केवल C++ में"],
    "answer_en": "Struct/union without tag, members in enclosing scope",
    "answer_hi": "टैग के बिना संरचना/यूनियन, सदस्य संलग्न स्कोप में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'translation unit'?",
    "question_hi": "'translation unit' क्या है?",
    "options_en": ["Source file after preprocessing", "Object file", "Executable", "Library"],
    "options_hi": ["प्रीप्रोसेसिंग के बाद सोर्स फ़ाइल", "ऑब्जेक्ट फ़ाइल", "निष्पादन योग्य", "लाइब्रेरी"],
    "answer_en": "Source file after preprocessing",
    "answer_hi": "प्रीप्रोसेसिंग के बाद सोर्स फ़ाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'linkage'?",
    "question_hi": "'linkage' क्या है?",
    "options_en": ["External, internal, none", "Only external", "Only internal", "No linkage"],
    "options_hi": ["बाहरी, आंतरिक, कोई नहीं", "केवल बाहरी", "केवल आंतरिक", "कोई लिंकेज नहीं"],
    "answer_en": "External, internal, none",
    "answer_hi": "बाहरी, आंतरिक, कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'external linkage'?",
    "question_hi": "'external linkage' क्या है?",
    "options_en": ["Identifier accessible across translation units", "Only within file", "No access", "Only within function"],
    "options_hi": ["अनुवाद इकाइयों में पहुंच योग्य पहचानकर्ता", "केवल फ़ाइल के भीतर", "कोई पहुंच नहीं", "केवल फ़ंक्शन के भीतर"],
    "answer_en": "Identifier accessible across translation units",
    "answer_hi": "अनुवाद इकाइयों में पहुंच योग्य पहचानकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'internal linkage'?",
    "question_hi": "'internal linkage' क्या है?",
    "options_en": ["Identifier accessible only within translation unit", "Across units", "No access", "Global"],
    "options_hi": ["केवल अनुवाद इकाई के भीतर पहुंच योग्य पहचानकर्ता", "इकाइयों में", "कोई पहुंच नहीं", "वैश्विक"],
    "answer_en": "Identifier accessible only within translation unit",
    "answer_hi": "केवल अनुवाद इकाई के भीतर पहुंच योग्य पहचानकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'no linkage'?",
    "question_hi": "'no linkage' क्या है?",
    "options_en": ["Identifier accessible only in its scope", "Across scopes", "Global", "File scope"],
    "options_hi": ["केवल अपने स्कोप में पहुंच योग्य पहचानकर्ता", "स्कोप में", "वैश्विक", "फ़ाइल स्कोप"],
    "answer_en": "Identifier accessible only in its scope",
    "answer_hi": "केवल अपने स्कोप में पहुंच योग्य पहचानकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'scope'?",
    "question_hi": "'scope' क्या है?",
    "options_en": ["Region where identifier is visible", "Memory area", "Function body", "File only"],
    "options_hi": ["क्षेत्र जहाँ पहचानकर्ता दिखाई देता है", "मेमोरी क्षेत्र", "फ़ंक्शन बॉडी", "केवल फ़ाइल"],
    "answer_en": "Region where identifier is visible",
    "answer_hi": "क्षेत्र जहाँ पहचानकर्ता दिखाई देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'file scope'?",
    "question_hi": "'file scope' क्या है?",
    "options_en": ["Outside any block or parameter list", "Inside block", "Inside function", "Only global"],
    "options_hi": ["किसी भी ब्लॉक या पैरामीटर सूची के बाहर", "ब्लॉक के अंदर", "फ़ंक्शन के अंदर", "केवल वैश्विक"],
    "answer_en": "Outside any block or parameter list",
    "answer_hi": "किसी भी ब्लॉक या पैरामीटर सूची के बाहर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'block scope'?",
    "question_hi": "'block scope' क्या है?",
    "options_en": ["Inside a block (compound statement)", "File scope", "Function prototype", "No scope"],
    "options_hi": ["ब्लॉक के अंदर (यौगिक कथन)", "फ़ाइल स्कोप", "फ़ंक्शन प्रोटोटाइप", "कोई स्कोप नहीं"],
    "answer_en": "Inside a block (compound statement)",
    "answer_hi": "ब्लॉक के अंदर (यौगिक कथन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'function prototype scope'?",
    "question_hi": "'function prototype scope' क्या है?",
    "options_en": ["Within function prototype parameter list", "Function body", "File scope", "Block scope"],
    "options_hi": ["फ़ंक्शन प्रोटोटाइप पैरामीटर सूची के भीतर", "फ़ंक्शन बॉडी", "फ़ाइल स्कोप", "ब्लॉक स्कोप"],
    "answer_en": "Within function prototype parameter list",
    "answer_hi": "फ़ंक्शन प्रोटोटाइप पैरामीटर सूची के भीतर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'function scope'?",
    "question_hi": "'function scope' क्या है?",
    "options_en": ["Only for labels", "For all identifiers", "For variables", "For types"],
    "options_hi": ["केवल लेबल के लिए", "सभी पहचानकर्ताओं के लिए", "वेरिएबल्स के लिए", "प्रकारों के लिए"],
    "answer_en": "Only for labels",
    "answer_hi": "केवल लेबल के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'forward declaration' of a function?",
    "question_hi": "फ़ंक्शन का 'forward declaration' क्या है?",
    "options_en": ["Function prototype without body", "Function definition", "Function call", "Function pointer"],
    "options_hi": ["बॉडी के बिना फ़ंक्शन प्रोटोटाइप", "फ़ंक्शन परिभाषा", "फ़ंक्शन कॉल", "फ़ंक्शन पॉइंटर"],
    "answer_en": "Function prototype without body",
    "answer_hi": "बॉडी के बिना फ़ंक्शन प्रोटोटाइप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'tentative definition'?",
    "question_hi": "'tentative definition' क्या है?",
    "options_en": ["External variable declaration without initializer", "Variable definition", "Variable initialization", "Variable declaration with extern"],
    "options_hi": ["इनिशियलाइज़र के बिना बाहरी वेरिएबल घोषणा", "वेरिएबल परिभाषा", "वेरिएबल आरंभीकरण", "extern के साथ वेरिएबल घोषणा"],
    "answer_en": "External variable declaration without initializer",
    "answer_hi": "इनिशियलाइज़र के बिना बाहरी वेरिएबल घोषणा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'common symbol'?",
    "question_hi": "'common symbol' क्या है?",
    "options_en": ["Tentative definition in Unix linkers", "Strong symbol", "Weak symbol", "No such symbol"],
    "options_hi": ["यूनिक्स लिंकर्स में अस्थायी परिभाषा", "मजबूत प्रतीक", "कमजोर प्रतीक", "ऐसा कोई प्रतीक नहीं"],
    "answer_en": "Tentative definition in Unix linkers",
    "answer_hi": "यूनिक्स लिंकर्स में अस्थायी परिभाषा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'weak symbol'?",
    "question_hi": "'weak symbol' क्या है?",
    "options_en": ["Can be overridden by strong symbol", "Cannot be overridden", "Always overrides", "No linking"],
    "options_hi": ["मजबूत प्रतीक द्वारा ओवरराइड किया जा सकता है", "ओवरराइड नहीं किया जा सकता", "हमेशा ओवरराइड करता है", "कोई लिंकिंग नहीं"],
    "answer_en": "Can be overridden by strong symbol",
    "answer_hi": "मजबूत प्रतीक द्वारा ओवरराइड किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'inline definition'?",
    "question_hi": "'inline definition' क्या है?",
    "options_en": ["Inline function with external linkage", "Static inline", "Macro", "No inline"],
    "options_hi": ["बाहरी लिंकेज के साथ इनलाइन फ़ंक्शन", "स्थैतिक इनलाइन", "मैक्रो", "कोई इनलाइन नहीं"],
    "answer_en": "Inline function with external linkage",
    "answer_hi": "बाहरी लिंकेज के साथ इनलाइन फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'static inline'?",
    "question_hi": "'static inline' क्या है?",
    "options_en": ["Inline function with internal linkage", "External linkage", "No linkage", "Weak linkage"],
    "options_hi": ["आंतरिक लिंकेज के साथ इनलाइन फ़ंक्शन", "बाहरी लिंकेज", "कोई लिंकेज नहीं", "कमजोर लिंकेज"],
    "answer_en": "Inline function with internal linkage",
    "answer_hi": "आंतरिक लिंकेज के साथ इनलाइन फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'restrict qualifier'?",
    "question_hi": "'restrict qualifier' क्या है?",
    "options_en": ["Pointer with exclusive access to object", "Constant pointer", "Volatile pointer", "No aliasing"],
    "options_hi": ["ऑब्जेक्ट तक अनन्य पहुंच के साथ पॉइंटर", "स्थिर पॉइंटर", "परिवर्तनशील पॉइंटर", "कोई उपनाम नहीं"],
    "answer_en": "Pointer with exclusive access to object",
    "answer_hi": "ऑब्जेक्ट तक अनन्य पहुंच के साथ पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'volatile qualifier'?",
    "question_hi": "'volatile qualifier' क्या है?",
    "options_en": ["Object may change outside program control", "Constant object", "Atomic object", "Register object"],
    "options_hi": ["ऑब्जेक्ट प्रोग्राम नियंत्रण से बाहर बदल सकता है", "स्थिर ऑब्जेक्ट", "परमाणु ऑब्जेक्ट", "रजिस्टर ऑब्जेक्ट"],
    "answer_en": "Object may change outside program control",
    "answer_hi": "ऑब्जेक्ट प्रोग्राम नियंत्रण से बाहर बदल सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is '_Atomic qualifier'?",
    "question_hi": "'_Atomic qualifier' क्या है?",
    "options_en": ["For atomic operations", "For volatile", "For restrict", "For const"],
    "options_hi": ["परमाणु संचालन के लिए", "volatile के लिए", "restrict के लिए", "const के लिए"],
    "answer_en": "For atomic operations",
    "answer_hi": "परमाणु संचालन के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'thread_local storage'?",
    "question_hi": "'thread_local storage' क्या है?",
    "options_en": ["Each thread has its own instance", "Shared between threads", "Global only", "Static only"],
    "options_hi": ["प्रत्येक थ्रेड का अपना उदाहरण है", "थ्रेड्स के बीच साझा", "केवल वैश्विक", "केवल स्थैतिक"],
    "answer_en": "Each thread has its own instance",
    "answer_hi": "प्रत्येक थ्रेड का अपना उदाहरण है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'register storage class'?",
    "question_hi": "'register storage class' क्या है?",
    "options_en": ["Hint to store in register (mostly ignored now)", "Must be in register", "Cannot be in register", "No such class"],
    "options_hi": ["रजिस्टर में संग्रहीत करने का संकेत (अब ज्यादातर अनदेखा किया गया)", "रजिस्टर में होना चाहिए", "रजिस्टर में नहीं हो सकता", "ऐसी कोई कक्षा नहीं"],
    "answer_en": "Hint to store in register (mostly ignored now)",
    "answer_hi": "रजिस्टर में संग्रहीत करने का संकेत (अब ज्यादातर अनदेखा किया गया)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'asm keyword'?",
    "question_hi": "'asm keyword' क्या है?",
    "options_en": ["For inline assembly (implementation-defined)", "Standard assembly", "No assembly", "Only in C++"],
    "options_hi": ["इनलाइन असेंबली के लिए (कार्यान्वयन-परिभाषित)", "मानक असेंबली", "कोई असेंबली नहीं", "केवल C++ में"],
    "answer_en": "For inline assembly (implementation-defined)",
    "answer_hi": "इनलाइन असेंबली के लिए (कार्यान्वयन-परिभाषित)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'implicit declaration of function'?",
    "question_hi": "'implicit declaration of function' क्या है?",
    "options_en": ["Removed in C99; previously assumed int func()", "Allowed in C11", "Always allowed", "Only for printf"],
    "options_hi": ["C99 में हटा दिया गया; पहले int func() माना जाता था", "C11 में अनुमति है", "हमेशा अनुमति है", "केवल printf के लिए"],
    "answer_en": "Removed in C99; previously assumed int func()",
    "answer_hi": "C99 में हटा दिया गया; पहले int func() माना जाता था",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'complex type' representation?",
    "question_hi": "'complex type' प्रतिनिधित्व क्या है?",
    "options_en": ["Array of two reals [real, imag]", "Single value", "Struct", "Pointer"],
    "options_hi": ["दो वास्तविकों की सरणी [वास्तविक, काल्पनिक]", "एकल मान", "संरचना", "पॉइंटर"],
    "answer_en": "Array of two reals [real, imag]",
    "answer_hi": "दो वास्तविकों की सरणी [वास्तविक, काल्पनिक]",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'pointer to volatile' vs 'volatile pointer'?",
    "question_hi": "'pointer to volatile' बनाम 'volatile pointer' क्या है?",
    "options_en": ["volatile int* vs int* volatile", "Same", "No difference", "No volatile pointer"],
    "options_hi": ["volatile int* बनाम int* volatile", "समान", "कोई अंतर नहीं", "कोई volatile pointer नहीं"],
    "answer_en": "volatile int* vs int* volatile",
    "answer_hi": "volatile int* बनाम int* volatile",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'syntax disambiguation'?",
    "question_hi": "'syntax disambiguation' क्या है?",
    "options_en": ["Maximal munch rule in tokenization", "No ambiguity", "Parser only", "Lexer only"],
    "options_hi": ["टोकनाइजेशन में अधिकतम मंच नियम", "कोई अस्पष्टता नहीं", "केवल पार्सर", "केवल लेक्सर"],
    "answer_en": "Maximal munch rule in tokenization",
    "answer_hi": "टोकनाइजेशन में अधिकतम मंच नियम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'trigraph sequences'?",
    "question_hi": "'trigraph sequences' क्या हैं?",
    "options_en": ["??= for # etc. (removed in C23)", "Still in C23", "Only in C++", "Never existed"],
    "options_hi": ["??= # आदि के लिए (C23 में हटा दिया गया)", "अभी भी C23 में", "केवल C++ में", "कभी अस्तित्व में नहीं था"],
    "answer_en": "??= for # etc. (removed in C23)",
    "answer_hi": "??= # आदि के लिए (C23 में हटा दिया गया)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'digraphs'?",
    "question_hi": "'digraphs' क्या हैं?",
    "options_en": ["<: for [, :> for ] etc.", "Same as trigraphs", "Removed", "Only in C++"],
    "options_hi": ["<: [ के लिए, :> ] आदि के लिए", "ट्राइग्राफ के समान", "हटा दिया गया", "केवल C++ में"],
    "answer_en": "<: for [, :> for ] etc.",
    "answer_hi": "<: [ के लिए, :> ] आदि के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'universal character names'?",
    "question_hi": "'universal character names' क्या हैं?",
    "options_en": ["\\uXXXX and \\UXXXXXXXX for Unicode", "Only ASCII", "No Unicode", "Only in strings"],
    "options_hi": ["यूनिकोड के लिए \\uXXXX और \\UXXXXXXXX", "केवल ASCII", "कोई यूनिकोड नहीं", "केवल स्ट्रिंग्स में"],
    "answer_en": "\\uXXXX and \\UXXXXXXXX for Unicode",
    "answer_hi": "यूनिकोड के लिए \\uXXXX और \\UXXXXXXXX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'line splicing'?",
    "question_hi": "'line splicing' क्या है?",
    "options_en": ["Backslash newline removed in phase 2", "No splicing", "Only in strings", "Only in comments"],
    "options_hi": ["बैकस्लैश न्यूलाइन चरण 2 में हटा दिया गया", "कोई स्प्लाइसिंग नहीं", "केवल स्ट्रिंग्स में", "केवल टिप्पणियों में"],
    "answer_en": "Backslash newline removed in phase 2",
    "answer_hi": "बैकस्लैश न्यूलाइन चरण 2 में हटा दिया गया",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'string literal concatenation'?",
    "question_hi": "'string literal concatenation' क्या है?",
    "options_en": ["Adjacent string literals concatenated", "Not concatenated", "Only with +", "Only in arrays"],
    "options_hi": ["आसन्न स्ट्रिंग लिटरल्स संयुक्त", "संयुक्त नहीं", "केवल + के साथ", "केवल ऐरे में"],
    "answer_en": "Adjacent string literals concatenated",
    "answer_hi": "आसन्न स्ट्रिंग लिटरल्स संयुक्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'pasting with ## operator'?",
    "question_hi": "'## ऑपरेटर के साथ पेस्टिंग' क्या है?",
    "options_en": ["Token pasting in macros", "String concatenation", "Comment pasting", "No pasting"],
    "options_hi": ["मैक्रोज़ में टोकन पेस्टिंग", "स्ट्रिंग संयोजन", "टिप्पणी पेस्टिंग", "कोई पेस्टिंग नहीं"],
    "answer_en": "Token pasting in macros",
    "answer_hi": "मैक्रोज़ में टोकन पेस्टिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'stringizing with # operator'?",
    "question_hi": "'# ऑपरेटर के साथ स्ट्रिंगाइजिंग' क्या है?",
    "options_en": ["Convert macro argument to string literal", "Convert to number", "Convert to char", "No stringizing"],
    "options_hi": ["मैक्रो तर्क को स्ट्रिंग लिटरल में बदलें", "संख्या में बदलें", "वर्ण में बदलें", "कोई स्ट्रिंगाइजिंग नहीं"],
    "answer_en": "Convert macro argument to string literal",
    "answer_hi": "मैक्रो तर्क को स्ट्रिंग लिटरल में बदलें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is '_Pragma operator'?",
    "question_hi": "'_Pragma operator' क्या है?",
    "options_en": ["Pragma directive within macro", "External pragma", "No pragma", "Only in preprocessor"],
    "options_hi": ["मैक्रो के भीतर प्राग्मा निर्देश", "बाहरी प्राग्मा", "कोई प्राग्मा नहीं", "केवल प्रीप्रोसेसर में"],
    "answer_en": "Pragma directive within macro",
    "answer_hi": "मैक्रो के भीतर प्राग्मा निर्देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is '__func__ identifier'?",
    "question_hi": "'__func__ identifier' क्या है?",
    "options_en": ["Predefined string with function name", "Function pointer", "Function address", "No such identifier"],
    "options_hi": ["फ़ंक्शन नाम के साथ पूर्वनिर्धारित स्ट्रिंग", "फ़ंक्शन पॉइंटर", "फ़ंक्शन पता", "ऐसा कोई पहचानकर्ता नहीं"],
    "answer_en": "Predefined string with function name",
    "answer_hi": "फ़ंक्शन नाम के साथ पूर्वनिर्धारित स्ट्रिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is '__VA_ARGS__'?",
    "question_hi": "'__VA_ARGS__' क्या है?",
    "options_en": ["Expands to variadic macro arguments", "Fixed arguments", "No arguments", "Only in functions"],
    "options_hi": ["वेरिएडिक मैक्रो तर्कों का विस्तार करता है", "निश्चित तर्क", "कोई तर्क नहीं", "केवल फ़ंक्शन में"],
    "answer_en": "Expands to variadic macro arguments",
    "answer_hi": "वेरिएडिक मैक्रो तर्कों का विस्तार करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'empty macro arguments'?",
    "question_hi": "'empty macro arguments' क्या हैं?",
    "options_en": ["Allowed since C99", "Not allowed", "Only in C++", "Only for variadic"],
    "options_hi": ["C99 से अनुमति है", "अनुमति नहीं है", "केवल C++ में", "केवल वेरिएडिक के लिए"],
    "answer_en": "Allowed since C99",
    "answer_hi": "C99 से अनुमति है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is '__STDC_VERSION__ value for C23?",
    "question_hi": "C23 के लिए '__STDC_VERSION__ मान क्या है?",
    "options_en": ["202311L", "201112L", "199901L", "199409L"],
    "options_hi": ["202311L", "201112L", "199901L", "199409L"],
    "answer_en": "202311L",
    "answer_hi": "202311L",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'null pointer constant'?",
    "question_hi": "'null pointer constant' क्या है?",
    "options_en": ["Integer 0 or (void*)0", "Only NULL", "Only 0", "Only (void*)0"],
    "options_hi": ["पूर्णांक 0 या (void*)0", "केवल NULL", "केवल 0", "केवल (void*)0"],
    "answer_en": "Integer 0 or (void*)0",
    "answer_hi": "पूर्णांक 0 या (void*)0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'null directive'?",
    "question_hi": "'null directive' क्या है?",
    "options_en": ["Empty # line", "No directive", "#pragma", "#define"],
    "options_hi": ["खाली # लाइन", "कोई निर्देश नहीं", "#pragma", "#define"],
    "answer_en": "Empty # line",
    "answer_hi": "खाली # लाइन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is '#include_next'?",
    "question_hi": "'#include_next' क्या है?",
    "options_en": ["GCC extension to include next file", "Standard C", "Not allowed", "Only in C++"],
    "options_hi": ["अगली फ़ाइल शामिल करने के लिए GCC एक्सटेंशन", "मानक C", "अनुमति नहीं है", "केवल C++ में"],
    "answer_en": "GCC extension to include next file",
    "answer_hi": "अगली फ़ाइल शामिल करने के लिए GCC एक्सटेंशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'effective type of allocated memory'?",
    "question_hi": "'allocated memory का effective type' क्या है?",
    "options_en": ["Type of first write access", "Always void*", "No type", "Implementation-defined"],
    "options_hi": ["पहली लिखित पहुंच का प्रकार", "हमेशा void*", "कोई प्रकार नहीं", "कार्यान्वयन-परिभाषित"],
    "answer_en": "Type of first write access",
    "answer_hi": "पहली लिखित पहुंच का प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'clock_t arithmetic'?",
    "question_hi": "'clock_t arithmetic' क्या है?",
    "options_en": ["Implementation-defined; can be integer or real", "Always integer", "Always real", "No arithmetic"],
    "options_hi": ["कार्यान्वयन-परिभाषित; पूर्णांक या वास्तविक हो सकता है", "हमेशा पूर्णांक", "हमेशा वास्तविक", "कोई अंकगणित नहीं"],
    "answer_en": "Implementation-defined; can be integer or real",
    "answer_hi": "कार्यान्वयन-परिभाषित; पूर्णांक या वास्तविक हो सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'va_copy'?",
    "question_hi": "'va_copy' क्या है?",
    "options_en": ["Copy va_list to another", "Move va_list", "Delete va_list", "No copy"],
    "options_hi": ["va_list को दूसरे में कॉपी करें", "va_list को स्थानांतरित करें", "va_list को हटाएं", "कोई कॉपी नहीं"],
    "answer_en": "Copy va_list to another",
    "answer_hi": "va_list को दूसरे में कॉपी करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'fenv_access pragma'?",
    "question_hi": "'fenv_access pragma' क्या है?",
    "options_en": ["Allows access to floating-point environment", "Denies access", "No such pragma", "Only for exceptions"],
    "options_hi": ["फ़्लोटिंग-पॉइंट वातावरण तक पहुंच की अनुमति देता है", "पहुंच से इनकार करता है", "ऐसा कोई प्राग्मा नहीं", "केवल अपवादों के लिए"],
    "answer_en": "Allows access to floating-point environment",
    "answer_hi": "फ़्लोटिंग-पॉइंट वातावरण तक पहुंच की अनुमति देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'CX_LIMITED_RANGE pragma'?",
    "question_hi": "'CX_LIMITED_RANGE pragma' क्या है?",
    "options_en": ["Allow simplified complex multiplication", "No optimization", "Only for real", "No such pragma"],
    "options_hi": ["सरलीकृत जटिल गुणन की अनुमति दें", "कोई ऑप्टिमाइज़ेशन नहीं", "केवल वास्तविक के लिए", "ऐसा कोई प्राग्मा नहीं"],
    "answer_en": "Allow simplified complex multiplication",
    "answer_hi": "सरलीकृत जटिल गुणन की अनुमति दें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'FP_CONTRACT pragma'?",
    "question_hi": "'FP_CONTRACT pragma' क्या है?",
    "options_en": ["Allow fused multiply-add", "Disallow FMA", "Only for division", "No such pragma"],
    "options_hi": ["फ़्यूज़्ड गुणा-जोड़ की अनुमति दें", "FMA अस्वीकार करें", "केवल विभाजन के लिए", "ऐसा कोई प्राग्मा नहीं"],
    "answer_en": "Allow fused multiply-add",
    "answer_hi": "फ़्यूज़्ड गुणा-जोड़ की अनुमति दें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'FENV_ACCESS pragma' status?",
    "question_hi": "'FENV_ACCESS pragma' स्थिति क्या है?",
    "options_en": ["Off by default", "On by default", "Always on", "Always off"],
    "options_hi": ["डिफ़ॉल्ट रूप से बंद", "डिफ़ॉल्ट रूप से चालू", "हमेशा चालू", "हमेशा बंद"],
    "answer_en": "Off by default",
    "answer_hi": "डिफ़ॉल्ट रूप से बंद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'locale-dependent behavior' of isalpha?",
    "question_hi": "isalpha का 'locale-dependent behavior' क्या है?",
    "options_en": ["Depends on LC_CTYPE locale", "Always ASCII", "Always Unicode", "No locale"],
    "options_hi": ["LC_CTYPE लोकेल पर निर्भर करता है", "हमेशा ASCII", "हमेशा यूनिकोड", "कोई लोकेल नहीं"],
    "answer_en": "Depends on LC_CTYPE locale",
    "answer_hi": "LC_CTYPE लोकेल पर निर्भर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'multibyte character encoding'?",
    "question_hi": "'multibyte character encoding' क्या है?",
    "options_en": ["Encoding where char may be multiple bytes (e.g., UTF-8)", "Single byte only", "Only wide chars", "No multibyte"],
    "options_hi": ["एन्कोडिंग जहां char एकाधिक बाइट्स हो सकता है (जैसे, UTF-8)", "केवल एकल बाइट", "केवल वाइड वर्ण", "कोई मल्टीबाइट नहीं"],
    "answer_en": "Encoding where char may be multiple bytes (e.g., UTF-8)",
    "answer_hi": "एन्कोडिंग जहां char एकाधिक बाइट्स हो सकता है (जैसे, UTF-8)",
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