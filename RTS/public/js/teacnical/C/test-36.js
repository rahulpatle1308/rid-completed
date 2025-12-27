const questions=[
  {
    "num": 1,
    "question_en": "What is 'data race' definition in C11?",
    "question_hi": "C11 में 'data race' परिभाषा क्या है?",
    "options_en": ["Two threads accessing same memory, one is write, no synchronization", "Any access", "Only reads", "No threads"],
    "options_hi": ["दो थ्रेड्स एक ही मेमोरी एक्सेस कर रही हैं, एक लिख रही है, कोई समकालिकरण नहीं", "कोई भी एक्सेस", "केवल पढ़ता है", "कोई थ्रेड नहीं"],
    "answer_en": "Two threads accessing same memory, one is write, no synchronization",
    "answer_hi": "दो थ्रेड्स एक ही मेमोरी एक्सेस कर रही हैं, एक लिख रही है, कोई समकालिकरण नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'strict aliasing' violation in this code: int i = 0; double* d = (double*)&i; *d = 3.14;",
    "question_hi": "इस कोड में 'strict aliasing' उल्लंघन क्या है: int i = 0; double* d = (double*)&i; *d = 3.14;",
    "options_en": ["Accessing int as double violates strict aliasing", "No violation", "Only if i is volatile", "Only in C++"],
    "options_hi": ["int को double के रूप में एक्सेस करना strict aliasing का उल्लंघन करता है", "कोई उल्लंघन नहीं", "केवल यदि i volatile है", "केवल C++ में"],
    "answer_en": "Accessing int as double violates strict aliasing",
    "answer_hi": "int को double के रूप में एक्सेस करना strict aliasing का उल्लंघन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'restrict' keyword effect on compiler optimization?",
    "question_en": "'restrict' कीवर्ड का कंपाइलर ऑप्टिमाइज़ेशन पर क्या प्रभाव है?",
    "options_en": ["Allows aggressive optimization by promising no pointer aliasing", "Prevents optimization", "No effect", "Causes slower code"],
    "options_hi": ["कोई पॉइंटर एलियासिंग न होने का वादा करके आक्रामक ऑप्टिमाइज़ेशन की अनुमति देता है", "ऑप्टिमाइज़ेशन रोकता है", "कोई प्रभाव नहीं", "धीमा कोड का कारण बनता है"],
    "answer_en": "Allows aggressive optimization by promising no pointer aliasing",
    "answer_hi": "कोई पॉइंटर एलियासिंग न होने का वादा करके आक्रामक ऑप्टिमाइज़ेशन की अनुमति देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the correct way to do type punning in C99?",
    "question_hi": "C99 में टाइप पनिंग करने का सही तरीका क्या है?",
    "options_en": ["Using memcpy or union with careful reading", "Using pointer casts", "Using reinterpret_cast", "Not possible"],
    "options_hi": ["memcpy या यूनियन का सावधानीपूर्वक पढ़ने के साथ उपयोग", "पॉइंटर कास्ट का उपयोग", "reinterpret_cast का उपयोग", "संभव नहीं"],
    "answer_en": "Using memcpy or union with careful reading",
    "answer_hi": "memcpy या यूनियन का सावधानीपूर्वक पढ़ने के साथ उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the output: int i = 5; printf(\"%d %d %d\", i, i = i + 1, i);",
    "question_hi": "आउटपुट क्या है: int i = 5; printf(\"%d %d %d\", i, i = i + 1, i);",
    "options_en": ["Undefined behavior due to unsequenced modifications", "5 6 6", "5 6 5", "6 6 6"],
    "options_hi": ["अनुक्रमित न होने वाले संशोधनों के कारण अपरिभाषित व्यवहार", "5 6 6", "5 6 5", "6 6 6"],
    "answer_en": "Undefined behavior due to unsequenced modifications",
    "answer_hi": "अनुक्रमित न होने वाले संशोधनों के कारण अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'effective type' of memory allocated by malloc?",
    "question_hi": "malloc द्वारा आवंटित मेमोरी का 'effective type' क्या है?",
    "options_en": ["Determined by first write operation to that memory", "Always char", "No effective type", "Determined at allocation"],
    "options_hi": ["उस मेमोरी में पहली लिखावत संक्रिया द्वारा निर्धारित", "हमेशा char", "कोई प्रभावी प्रकार नहीं", "आवंटन पर निर्धारित"],
    "answer_en": "Determined by first write operation to that memory",
    "answer_hi": "उस मेमोरी में पहली लिखावत संक्रिया द्वारा निर्धारित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'trap representation' for floating-point types?",
    "question_hi": "फ़्लोटिंग-पॉइंट प्रकारों के लिए 'trap representation' क्या है?",
    "options_en": ["Signaling NaN (sNaN)", "Quiet NaN", "Infinity", "Denormalized numbers"],
    "options_hi": ["सिग्नलिंग NaN (sNaN)", "क्वाइट NaN", "अनंत", "डीनॉर्मलाइज़्ड नंबर्स"],
    "answer_en": "Signaling NaN (sNaN)",
    "answer_hi": "सिग्नलिंग NaN (sNaN)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of 'volatile' in embedded systems?",
    "question_hi": "एम्बेडेड सिस्टम में 'volatile' का उद्देश्य क्या है?",
    "options_en": ["Prevents compiler from optimizing away reads/writes to memory-mapped I/O", "Makes variables constant", "Increases speed", "Reduces memory usage"],
    "options_hi": ["मेमोरी-मैप्ड I/O के लिए रीड/राइट को ऑप्टिमाइज़ करने से कंपाइलर को रोकता है", "वेरिएबल्स को कॉन्स्टेंट बनाता है", "गति बढ़ाता है", "मेमोरी उपयोग कम करता है"],
    "answer_en": "Prevents compiler from optimizing away reads/writes to memory-mapped I/O",
    "answer_hi": "मेमोरी-मैप्ड I/O के लिए रीड/राइट को ऑप्टिमाइज़ करने से कंपाइलर को रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'strictly conforming program' in C standard?",
    "question_hi": "C मानक में 'strictly conforming program' क्या है?",
    "options_en": ["Program that uses only standard features and no extensions", "Program with extensions", "Non-portable program", "Compiler-specific program"],
    "options_hi": ["वह प्रोग्राम जो केवल मानक सुविधाओं का उपयोग करता है और कोई एक्सटेंशन नहीं", "एक्सटेंशन वाला प्रोग्राम", "असंवहनीय प्रोग्राम", "कंपाइलर-विशिष्ट प्रोग्राम"],
    "answer_en": "Program that uses only standard features and no extensions",
    "answer_hi": "वह प्रोग्राम जो केवल मानक सुविधाओं का उपयोग करता है और कोई एक्सटेंशन नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'as-if rule' in compiler optimization?",
    "question_hi": "कंपाइलर ऑप्टिमाइज़ेशन में 'as-if rule' क्या है?",
    "options_en": ["Compiler can optimize as long as observable behavior is same", "No optimization allowed", "Only for arithmetic operations", "Only for loops"],
    "options_hi": ["कंपाइलर ऑप्टिमाइज़ कर सकता है जब तक कि अवलोकनीय व्यवहार समान है", "कोई ऑप्टिमाइज़ेशन अनुमति नहीं", "केवल अंकगणितीय संक्रियाओं के लिए", "केवल लूप के लिए"],
    "answer_en": "Compiler can optimize as long as observable behavior is same",
    "answer_hi": "कंपाइलर ऑप्टिमाइज़ कर सकता है जब तक कि अवलोकनीय व्यवहार समान है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'indeterminate value' in uninitialized automatic variables?",
    "question_hi": "अप्रारंभिक स्वचालित वेरिएबल्स में 'indeterminate value' क्या है?",
    "options_en": ["Value could be anything, including trap representation", "Always zero", "Always garbage", "Implementation-defined"],
    "options_hi": ["मान कुछ भी हो सकता है, ट्रैप प्रतिनिधित्व सहित", "हमेशा शून्य", "हमेशा कचरा", "कार्यान्वयन-परिभाषित"],
    "answer_en": "Value could be anything, including trap representation",
    "answer_hi": "मान कुछ भी हो सकता है, ट्रैप प्रतिनिधित्व सहित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'padding bits' in integer representation?",
    "question_hi": "पूर्णांक प्रतिनिधित्व में 'padding bits' क्या हैं?",
    "options_en": ["Extra bits not part of value representation", "Sign bits", "Value bits", "Parity bits"],
    "options_hi": ["अतिरिक्त बिट्स जो मान प्रतिनिधित्व का हिस्सा नहीं हैं", "चिन्ह बिट्स", "मान बिट्स", "समता बिट्स"],
    "answer_en": "Extra bits not part of value representation",
    "answer_hi": "अतिरिक्त बिट्स जो मान प्रतिनिधित्व का हिस्सा नहीं हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'signaling NaN' vs 'quiet NaN' behavior?",
    "question_hi": "'signaling NaN' बनाम 'quiet NaN' व्यवहार क्या है?",
    "options_en": ["sNaN raises floating-point exception, qNaN propagates silently", "Both raise exceptions", "Neither raises exceptions", "Only qNaN raises exception"],
    "options_hi": ["sNaN फ़्लोटिंग-पॉइंट अपवाद उठाता है, qNaN चुपचाप प्रचारित होता है", "दोनों अपवाद उठाते हैं", "कोई भी अपवाद नहीं उठाता", "केवल qNaN अपवाद उठाता है"],
    "answer_en": "sNaN raises floating-point exception, qNaN propagates silently",
    "answer_hi": "sNaN फ़्लोटिंग-पॉइंट अपवाद उठाता है, qNaN चुपचाप प्रचारित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'floating-point environment' control?",
    "question_hi": "'floating-point environment' नियंत्रण क्या है?",
    "options_en": ["Rounding modes, exceptions, etc. via fenv.h", "Only values", "No control", "Only for double precision"],
    "options_hi": ["fenv.h के माध्यम से राउंडिंग मोड, अपवाद, आदि।", "केवल मान", "कोई नियंत्रण नहीं", "केवल डबल प्रिसिजन के लिए"],
    "answer_en": "Rounding modes, exceptions, etc. via fenv.h",
    "answer_hi": "fenv.h के माध्यम से राउंडिंग मोड, अपवाद, आदि।",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'contracted expression' (FMA) optimization?",
    "question_hi": "'contracted expression' (FMA) ऑप्टिमाइज़ेशन क्या है?",
    "options_en": ["Fused multiply-add as single operation with one rounding", "Separate multiply and add", "No optimization", "Only for integers"],
    "options_hi": ["एक राउंडिंग के साथ एकल संक्रिया के रूप में फ़्यूज़्ड गुणा-जोड़", "अलग गुणा और जोड़", "कोई ऑप्टिमाइज़ेशन नहीं", "केवल पूर्णांकों के लिए"],
    "answer_en": "Fused multiply-add as single operation with one rounding",
    "answer_hi": "एक राउंडिंग के साथ एकल संक्रिया के रूप में फ़्यूज़्ड गुणा-जोड़",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'complex infinity' representation?",
    "question_hi": "'complex infinity' प्रतिनिधित्व क्या है?",
    "options_en": ["Complex number with infinite real or imaginary part", "Real infinity only", "No complex infinity", "Only for double complex"],
    "options_hi": ["अनंत वास्तविक या काल्पनिक भाग वाली जटिल संख्या", "केवल वास्तविक अनंत", "कोई जटिल अनंत नहीं", "केवल डबल कॉम्प्लेक्स के लिए"],
    "answer_en": "Complex number with infinite real or imaginary part",
    "answer_hi": "अनंत वास्तविक या काल्पनिक भाग वाली जटिल संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'canonical NaN' requirement in IEEE 754?",
    "question_hi": "IEEE 754 में 'canonical NaN' आवश्यकता क्या है?",
    "options_en": ["Certain operations must return specific bit pattern NaN", "No requirement", "Any NaN allowed", "Only for comparisons"],
    "options_hi": ["कुछ संक्रियाओं को विशिष्ट बिट पैटर्न NaN लौटाना चाहिए", "कोई आवश्यकता नहीं", "कोई भी NaN अनुमत", "केवल तुलनाओं के लिए"],
    "answer_en": "Certain operations must return specific bit pattern NaN",
    "answer_hi": "कुछ संक्रियाओं को विशिष्ट बिट पैटर्न NaN लौटाना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'type punning' via union defined behavior?",
    "question_hi": "यूनियन के माध्यम से 'type punning' परिभाषित व्यवहार क्या है?",
    "options_en": ["Implementation-defined, not strictly portable", "Always defined", "Always undefined", "Only in C++"],
    "options_hi": ["कार्यान्वयन-परिभाषित, सख्ती से पोर्टेबल नहीं", "हमेशा परिभाषित", "हमेशा अपरिभाषित", "केवल C++ में"],
    "answer_en": "Implementation-defined, not strictly portable",
    "answer_hi": "कार्यान्वयन-परिभाषित, सख्ती से पोर्टेबल नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'effective type' rule for strict aliasing?",
    "question_hi": "सख्त एलियासिंग के लिए 'effective type' नियम क्या है?",
    "options_en": ["Type used to access object must match its effective type", "No restriction", "Only for pointers", "Only for arrays"],
    "options_hi": ["ऑब्जेक्ट एक्सेस करने के लिए उपयोग किया गया प्रकार उसके प्रभावी प्रकार से मेल खाना चाहिए", "कोई प्रतिबंध नहीं", "केवल पॉइंटर्स के लिए", "केवल ऐरे के लिए"],
    "answer_en": "Type used to access object must match its effective type",
    "answer_hi": "ऑब्जेक्ट एक्सेस करने के लिए उपयोग किया गया प्रकार उसके प्रभावी प्रकार से मेल खाना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'allocated storage' lifetime?",
    "question_hi": "'allocated storage' आयु क्या है?",
    "options_en": ["From malloc/calloc/realloc to free", "Whole program", "Function scope", "Block scope"],
    "options_hi": ["malloc/calloc/realloc से free तक", "संपूर्ण प्रोग्राम", "फ़ंक्शन स्कोप", "ब्लॉक स्कोप"],
    "answer_en": "From malloc/calloc/realloc to free",
    "answer_hi": "malloc/calloc/realloc से free तक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'object lifetime' vs 'storage duration'?",
    "question_hi": "'object lifetime' बनाम 'storage duration' क्या है?",
    "options_en": ["Lifetime: when object exists; Storage duration: when memory exists", "Same thing", "No difference", "Only for automatic variables"],
    "options_hi": ["आयु: जब ऑब्जेक्ट मौजूद होता है; भंडारण अवधि: जब मेमोरी मौजूद होती है", "एक ही चीज़", "कोई अंतर नहीं", "केवल स्वचालित वेरिएबल्स के लिए"],
    "answer_en": "Lifetime: when object exists; Storage duration: when memory exists",
    "answer_hi": "आयु: जब ऑब्जेक्ट मौजूद होता है; भंडारण अवधि: जब मेमोरी मौजूद होती है",
    "attempted": false,
    "selected": ""
  },
 {
    "num": 22,
    "question_en": "What is 'digraph' alternative tokens?",
    "question_hi": "'digraph' वैकल्पिक टोकन क्या हैं?",
    "options_en": ["<%, %>, <:, :>, %:, %:%:", "No digraphs", "Only trigraphs", "Only for operators"],
    "options_hi": ["<%, %>, <:, :>, %:, %:%:", "कोई डाइग्राफ नहीं", "केवल ट्राइग्राफ", "केवल ऑपरेटर्स के लिए"],
    "answer_en": "<%, %>, <:, :>, %:, %:%:",
    "answer_hi": "<%, %>, <:, :>, %:, %:%:",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'compatible type' for function declarations?",
    "question_hi": "फ़ंक्शन घोषणाओं के लिए 'compatible type' क्या है?",
    "options_en": ["Same return type and compatible parameter types", "Different return type", "No compatibility needed", "Only parameter types matter"],
    "options_hi": ["समान वापसी प्रकार और संगत पैरामीटर प्रकार", "भिन्न वापसी प्रकार", "कोई संगतता आवश्यक नहीं", "केवल पैरामीटर प्रकार मायने रखते हैं"],
    "answer_en": "Same return type and compatible parameter types",
    "answer_hi": "समान वापसी प्रकार और संगत पैरामीटर प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'composite type' from compatible types?",
    "question_hi": "संगत प्रकारों से 'composite type' क्या है?",
    "options_en": ["Type derived from two compatible types in same scope", "New type", "First type", "Second type"],
    "options_hi": ["एक ही स्कोप में दो संगत प्रकारों से व्युत्पन्न प्रकार", "नया प्रकार", "पहला प्रकार", "दूसरा प्रकार"],
    "answer_en": "Type derived from two compatible types in same scope",
    "answer_hi": "एक ही स्कोप में दो संगत प्रकारों से व्युत्पन्न प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'incomplete type' example?",
    "question_hi": "'incomplete type' उदाहरण क्या है?",
    "options_en": ["void, struct S; (forward declaration), array of unknown size", "int", "Complete struct", "Pointer to complete type"],
    "options_hi": ["void, struct S; (फॉरवर्ड डिक्लेरेशन), अज्ञात आकार की ऐरे", "int", "पूर्ण संरचना", "पूर्ण प्रकार का पॉइंटर"],
    "answer_en": "void, struct S; (forward declaration), array of unknown size",
    "answer_hi": "void, struct S; (फॉरवर्ड डिक्लेरेशन), अज्ञात आकार की ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'flexible array member' memory allocation?",
    "question_hi": "'flexible array member' मेमोरी आवंटन क्या है?",
    "options_en": ["Allocate extra memory after struct for array elements", "Allocate within struct", "No extra memory", "Use pointer instead"],
    "options_hi": ["ऐरे तत्वों के लिए संरचना के बाद अतिरिक्त मेमोरी आवंटित करें", "संरचना के भीतर आवंटित करें", "कोई अतिरिक्त मेमोरी नहीं", "इसके बजाय पॉइंटर का उपयोग करें"],
    "answer_en": "Allocate extra memory after struct for array elements",
    "answer_hi": "ऐरे तत्वों के लिए संरचना के बाद अतिरिक्त मेमोरी आवंटित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'designated initializer' for array elements?",
    "question_hi": "ऐरे तत्वों के लिए 'designated initializer' क्या है?",
    "options_en": ["[index] = value syntax", "{value, value}", "No designated for arrays", "Only for structs"],
    "options_hi": ["[index] = value सिंटैक्स", "{value, value}", "ऐरे के लिए कोई डिज़ाइनेटेड नहीं", "केवल संरचनाओं के लिए"],
    "answer_en": "[index] = value syntax",
    "answer_hi": "[index] = value सिंटैक्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'compound literal' storage duration in block scope?",
    "question_hi": "ब्लॉक स्कोप में 'compound literal' भंडारण अवधि क्या है?",
    "options_en": ["Automatic storage duration", "Static", "Dynamic", "No storage"],
    "options_hi": ["स्वचालित भंडारण अवधि", "स्थैतिक", "गतिशील", "कोई भंडारण नहीं"],
    "answer_en": "Automatic storage duration",
    "answer_hi": "स्वचालित भंडारण अवधि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'const compound literal' syntax?",
    "question_hi": "'const compound literal' सिंटैक्स क्या है?",
    "options_en": ["(const int[]){1, 2, 3}", "(int[]){1, 2, 3}", "No const allowed", "Only for strings"],
    "options_hi": ["(const int[]){1, 2, 3}", "(int[]){1, 2, 3}", "कोई const अनुमति नहीं", "केवल स्ट्रिंग्स के लिए"],
    "answer_en": "(const int[]){1, 2, 3}",
    "answer_hi": "(const int[]){1, 2, 3}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'function designator' type?",
    "question_hi": "'function designator' प्रकार क्या है?",
    "options_en": ["Expression with function type", "Function name only", "Function pointer", "Function call"],
    "options_hi": ["फ़ंक्शन प्रकार वाला एक्सप्रेशन", "केवल फ़ंक्शन नाम", "फ़ंक्शन पॉइंटर", "फ़ंक्शन कॉल"],
    "answer_en": "Expression with function type",
    "answer_hi": "फ़ंक्शन प्रकार वाला एक्सप्रेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'lvalue conversion' (lvalue to rvalue)?",
    "question_hi": "'lvalue conversion' (lvalue से rvalue) क्या है?",
    "options_en": ["Automatic conversion when lvalue used in value context", "No conversion", "Manual cast needed", "Only for arrays"],
    "options_hi": ["स्वचालित रूपांतरण जब lvalue का उपयोग मान संदर्भ में किया जाता है", "कोई रूपांतरण नहीं", "मैनुअल कास्ट आवश्यक", "केवल ऐरे के लिए"],
    "answer_en": "Automatic conversion when lvalue used in value context",
    "answer_hi": "स्वचालित रूपांतरण जब lvalue का उपयोग मान संदर्भ में किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'array decay' exception?",
    "question_hi": "'array decay' अपवाद क्या है?",
    "options_en": ["sizeof, &, and _Alignof don't cause array decay", "Always decay", "No exceptions", "Only for 1D arrays"],
    "options_hi": ["sizeof, &, और _Alignof array decay का कारण नहीं बनते", "हमेशा क्षय", "कोई अपवाद नहीं", "केवल 1D ऐरे के लिए"],
    "answer_en": "sizeof, &, and _Alignof don't cause array decay",
    "answer_hi": "sizeof, &, और _Alignof array decay का कारण नहीं बनते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
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
    "num": 34,
    "question_en": "What is 'usual arithmetic conversions' order?",
    "question_hi": "'usual arithmetic conversions' क्रम क्या है?",
    "options_en": ["Integer promotion, then balance to common type", "No order", "Balance first", "Only for floats"],
    "options_hi": ["पूर्णांक प्रचार, फिर सामान्य प्रकार में संतुलन", "कोई क्रम नहीं", "पहले संतुलन", "केवल फ़्लोट्स के लिए"],
    "answer_en": "Integer promotion, then balance to common type",
    "answer_hi": "पूर्णांक प्रचार, फिर सामान्य प्रकार में संतुलन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'integer promotion' rule?",
    "question_hi": "'integer promotion' नियम क्या है?",
    "options_en": ["char, short, bit-field promoted to int if all values fit", "Always to long", "No promotion", "Only for unsigned"],
    "options_hi": ["char, short, bit-field को int में प्रचारित किया जाता है यदि सभी मान फिट होते हैं", "हमेशा long में", "कोई प्रचार नहीं", "केवल अहस्ताक्षरित के लिए"],
    "answer_en": "char, short, bit-field promoted to int if all values fit",
    "answer_hi": "char, short, bit-field को int में प्रचारित किया जाता है यदि सभी मान फिट होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'default argument promotions' in variadic functions?",
    "question_hi": "वेरिएडिक फ़ंक्शन में 'default argument promotions' क्या है?",
    "options_en": ["float to double, integer promotions applied", "No promotions", "Only float promotion", "Only integer promotion"],
    "options_hi": ["float से double, पूर्णांक प्रचार लागू", "कोई प्रचार नहीं", "केवल float प्रचार", "केवल पूर्णांक प्रचार"],
    "answer_en": "float to double, integer promotions applied",
    "answer_hi": "float से double, पूर्णांक प्रचार लागू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'comma operator' evaluation order?",
    "question_hi": "'comma operator' मूल्यांकन क्रम क्या है?",
    "options_en": ["Left operand evaluated, result discarded, right operand evaluated", "Right first", "No order", "Both simultaneously"],
    "options_hi": ["बाएं ऑपरेंड का मूल्यांकन, परिणाम छोड़ा गया, दाएं ऑपरेंड का मूल्यांकन", "दाएं पहले", "कोई क्रम नहीं", "दोनों एक साथ"],
    "answer_en": "Left operand evaluated, result discarded, right operand evaluated",
    "answer_hi": "बाएं ऑपरेंड का मूल्यांकन, परिणाम छोड़ा गया, दाएं ऑपरेंड का मूल्यांकन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'conditional operator' type determination?",
    "question_hi": "'conditional operator' प्रकार निर्धारण क्या है?",
    "options_en": ["Common type of second and third operands", "Type of first", "Always int", "Always pointer"],
    "options_hi": ["दूसरे और तीसरे ऑपरेंड का सामान्य प्रकार", "पहले का प्रकार", "हमेशा int", "हमेशा पॉइंटर"],
    "answer_en": "Common type of second and third operands",
    "answer_hi": "दूसरे और तीसरे ऑपरेंड का सामान्य प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'sizeof' on VLA behavior?",
    "question_hi": "VLA पर 'sizeof' व्यवहार क्या है?",
    "options_en": ["Evaluated at runtime, not compile time", "Compile time", "Zero", "Error"],
    "options_hi": ["रनटाइम पर मूल्यांकन, कंपाइल समय पर नहीं", "कंपाइल समय", "शून्य", "त्रुटि"],
    "answer_en": "Evaluated at runtime, not compile time",
    "answer_hi": "रनटाइम पर मूल्यांकन, कंपाइल समय पर नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'alignof' operator result?",
    "question_hi": "'alignof' ऑपरेटर परिणाम क्या है?",
    "options_en": ["Alignment requirement of type in bytes", "Size of type", "Address of type", "No such operator"],
    "options_hi": ["बाइट्स में प्रकार की संरेखण आवश्यकता", "प्रकार का आकार", "प्रकार का पता", "ऐसा कोई ऑपरेटर नहीं"],
    "answer_en": "Alignment requirement of type in bytes",
    "answer_hi": "बाइट्स में प्रकार की संरेखण आवश्यकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is '_Alignas' specifier usage?",
    "question_hi": "'_Alignas' स्पेसिफायर उपयोग क्या है?",
    "options_en": ["Specify alignment for object declaration", "Specify size", "Specify type", "No such specifier"],
    "options_hi": ["ऑब्जेक्ट घोषणा के लिए संरेखण निर्दिष्ट करें", "आकार निर्दिष्ट करें", "प्रकार निर्दिष्ट करें", "ऐसा कोई स्पेसिफायर नहीं"],
    "answer_en": "Specify alignment for object declaration",
    "answer_hi": "ऑब्जेक्ट घोषणा के लिए संरेखण निर्दिष्ट करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is '_Generic' selection purpose?",
    "question_hi": "'_Generic' चयन उद्देश्य क्या है?",
    "options_en": ["Compile-time type-based dispatch", "Runtime type checking", "Function overloading", "No such feature"],
    "options_hi": ["कंपाइल-टाइम टाइप-आधारित डिस्पैच", "रनटाइम टाइप चेकिंग", "फ़ंक्शन ओवरलोडिंग", "ऐसी कोई सुविधा नहीं"],
    "answer_en": "Compile-time type-based dispatch",
    "answer_hi": "कंपाइल-टाइम टाइप-आधारित डिस्पैच",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'static_assert' compile-time check?",
    "question_hi": "'static_assert' कंपाइल-टाइम चेक क्या है?",
    "options_en": ["Compile-time assertion with message", "Runtime assert", "Debug assert", "No assert"],
    "options_hi": ["संदेश के साथ कंपाइल-टाइम असेर्शन", "रनटाइम assert", "डीबग assert", "कोई assert नहीं"],
    "answer_en": "Compile-time assertion with message",
    "answer_hi": "संदेश के साथ कंपाइल-टाइम असेर्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'noreturn' function attribute effect?",
    "question_hi": "'noreturn' फ़ंक्शन विशेषता प्रभाव क्या है?",
    "options_en": ["Function does not return to caller", "Always returns", "Returns void", "No such attribute"],
    "options_hi": ["फ़ंक्शन कॉलर को वापस नहीं आता", "हमेशा लौटता है", "void लौटाता है", "ऐसी कोई विशेषता नहीं"],
    "answer_en": "Function does not return to caller",
    "answer_hi": "फ़ंक्शन कॉलर को वापस नहीं आता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'carries_dependency' attribute for?",
    "question_hi": "'carries_dependency' विशेषता किसके लिए है?",
    "options_en": ["Optimization hint for memory_order_consume", "No such attribute", "For dependencies", "For optimization"],
    "options_hi": ["memory_order_consume के लिए ऑप्टिमाइज़ेशन संकेत", "ऐसी कोई विशेषता नहीं", "निर्भरताओं के लिए", "ऑप्टिमाइज़ेशन के लिए"],
    "answer_en": "Optimization hint for memory_order_consume",
    "answer_hi": "memory_order_consume के लिए ऑप्टिमाइज़ेशन संकेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'decimal floating types' in C?",
    "question_hi": "C में 'decimal floating types' क्या हैं?",
    "options_en": ["_Decimal32, _Decimal64, _Decimal128", "float, double", "No decimal types", "Only binary"],
    "options_hi": ["_Decimal32, _Decimal64, _Decimal128", "float, double", "कोई दशमलव प्रकार नहीं", "केवल बाइनरी"],
    "answer_en": "_Decimal32, _Decimal64, _Decimal128",
    "answer_hi": "_Decimal32, _Decimal64, _Decimal128",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'binary integer constants' syntax?",
    "question_hi": "'binary integer constants' सिंटैक्स क्या है?",
    "options_en": ["0b1010 or 0B1010", "No binary constants", "Only hex", "Only octal"],
    "options_hi": ["0b1010 या 0B1010", "कोई बाइनरी स्थिरांक नहीं", "केवल हेक्स", "केवल ऑक्टल"],
    "answer_en": "0b1010 or 0B1010",
    "answer_hi": "0b1010 या 0B1010",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'digit separators' in numeric literals?",
    "question_hi": "संख्यात्मक लिटरल में 'digit separators' क्या हैं?",
    "options_en": ["1'000'000 (apostrophe as separator)", "No separators", "Only comma", "Only underscore"],
    "options_hi": ["1'000'000 (एपॉस्ट्रॉफी विभाजक के रूप में)", "कोई विभाजक नहीं", "केवल अल्पविराम", "केवल अंडरस्कोर"],
    "answer_en": "1'000'000 (apostrophe as separator)",
    "answer_hi": "1'000'000 (एपॉस्ट्रॉफी विभाजक के रूप में)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'UTF-8/16/32 string literals' prefix?",
    "question_hi": "'UTF-8/16/32 string literals' उपसर्ग क्या है?",
    "options_en": ["u8\"...\", u\"...\", U\"...\"", "Only ASCII", "No Unicode", "Only UTF-8"],
    "options_hi": ["u8\"...\", u\"...\", U\"...\"", "केवल ASCII", "कोई यूनिकोड नहीं", "केवल UTF-8"],
    "answer_en": "u8\"...\", u\"...\", U\"...\"",
    "answer_hi": "u8\"...\", u\"...\", U\"...\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'wide character constants' syntax?",
    "question_hi": "'wide character constants' सिंटैक्स क्या है?",
    "options_en": ["L'x', u'x', U'x'", "Only 'x'", "No wide constants", "Only ASCII"],
    "options_hi": ["L'x', u'x', U'x'", "केवल 'x'", "कोई वाइड स्थिरांक नहीं", "केवल ASCII"],
    "answer_en": "L'x', u'x', U'x'",
    "answer_hi": "L'x', u'x', U'x'",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'raw string literals' availability in C?",
    "question_hi": "C में 'raw string literals' उपलब्धता क्या है?",
    "options_en": "Not in C standard (C++ only)",
    "question_hi": "C मानक में नहीं (केवल C++)",
    "options_en": ["R\"(...)\" (C++ only)", "Standard in C", "No raw strings", "Only for files"],
    "options_hi": ["R\"(...)\" (केवल C++)", "C में मानक", "कोई raw स्ट्रिंग्स नहीं", "केवल फ़ाइलों के लिए"],
    "answer_en": "R\"(...)\" (C++ only)",
    "answer_hi": "R\"(...)\" (केवल C++)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'complex literal suffix'?",
    "question_hi": "'complex literal suffix' क्या है?",
    "options_en": ["1.0i or I for imaginary part", "No suffix", "Only j", "Only for real"],
    "options_hi": ["1.0i या I काल्पनिक भाग के लिए", "कोई प्रत्यय नहीं", "केवल j", "केवल वास्तविक के लिए"],
    "answer_en": "1.0i or I for imaginary part",
    "answer_hi": "1.0i या I काल्पनिक भाग के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'hexadecimal floating constant' syntax?",
    "question_hi": "'hexadecimal floating constant' सिंटैक्स क्या है?",
    "options_en": ["0x1.0p-1 (hex significand, binary exponent)", "No hex float", "Only decimal", "Only binary"],
    "options_hi": ["0x1.0p-1 (हेक्स सिग्निफिकैंड, बाइनरी एक्सपोनेंट)", "कोई हेक्स फ़्लोट नहीं", "केवल दशमलव", "केवल बाइनरी"],
    "answer_en": "0x1.0p-1 (hex significand, binary exponent)",
    "answer_hi": "0x1.0p-1 (हेक्स सिग्निफिकैंड, बाइनरी एक्सपोनेंट)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'compound literal with designator' syntax?",
    "question_hi": "'compound literal with designator' सिंटैक्स क्या है?",
    "options_en": ["(struct point){.x=1, .y=2}", "No designators", "Only for arrays", "Only in initializers"],
    "options_hi": ["(struct point){.x=1, .y=2}", "कोई डिज़ाइनेटर नहीं", "केवल ऐरे के लिए", "केवल आरंभीकरण में"],
    "answer_en": "(struct point){.x=1, .y=2}",
    "answer_hi": "(struct point){.x=1, .y=2}",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'anonymous struct/union' feature?",
    "question_hi": "'anonymous struct/union' सुविधा क्या है?",
    "options_en": ["Struct/union without tag, members in enclosing scope", "With tag", "No anonymous", "Only in C++"],
    "options_hi": ["टैग के बिना संरचना/यूनियन, सदस्य संलग्न स्कोप में", "टैग के साथ", "कोई अनाम नहीं", "केवल C++ में"],
    "answer_en": "Struct/union without tag, members in enclosing scope",
    "answer_hi": "टैग के बिना संरचना/यूनियन, सदस्य संलग्न स्कोप में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'translation unit' definition?",
    "question_hi": "'translation unit' परिभाषा क्या है?",
    "options_en": ["Source file after preprocessing", "Object file", "Executable", "Library"],
    "options_hi": ["प्रीप्रोसेसिंग के बाद सोर्स फ़ाइल", "ऑब्जेक्ट फ़ाइल", "निष्पादन योग्य", "लाइब्रेरी"],
    "answer_en": "Source file after preprocessing",
    "answer_hi": "प्रीप्रोसेसिंग के बाद सोर्स फ़ाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'linkage' types?",
    "question_hi": "'linkage' प्रकार क्या हैं?",
    "options_en": ["External, internal, none", "Only external", "Only internal", "No linkage"],
    "options_hi": ["बाहरी, आंतरिक, कोई नहीं", "केवल बाहरी", "केवल आंतरिक", "कोई लिंकेज नहीं"],
    "answer_en": "External, internal, none",
    "answer_hi": "बाहरी, आंतरिक, कोई नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'external linkage' meaning?",
    "question_hi": "'external linkage' अर्थ क्या है?",
    "options_en": ["Identifier accessible across translation units", "Only within file", "No access", "Only within function"],
    "options_hi": ["अनुवाद इकाइयों में पहुंच योग्य पहचानकर्ता", "केवल फ़ाइल के भीतर", "कोई पहुंच नहीं", "केवल फ़ंक्शन के भीतर"],
    "answer_en": "Identifier accessible across translation units",
    "answer_hi": "अनुवाद इकाइयों में पहुंच योग्य पहचानकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'internal linkage' meaning?",
    "question_hi": "'internal linkage' अर्थ क्या है?",
    "options_en": ["Identifier accessible only within translation unit", "Across units", "No access", "Global"],
    "options_hi": ["केवल अनुवाद इकाई के भीतर पहुंच योग्य पहचानकर्ता", "इकाइयों में", "कोई पहुंच नहीं", "वैश्विक"],
    "answer_en": "Identifier accessible only within translation unit",
    "answer_hi": "केवल अनुवाद इकाई के भीतर पहुंच योग्य पहचानकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'no linkage' meaning?",
    "question_hi": "'no linkage' अर्थ क्या है?",
    "options_en": ["Identifier accessible only in its scope", "Across scopes", "Global", "File scope"],
    "options_hi": ["केवल अपने स्कोप में पहुंच योग्य पहचानकर्ता", "स्कोप में", "वैश्विक", "फ़ाइल स्कोप"],
    "answer_en": "Identifier accessible only in its scope",
    "answer_hi": "केवल अपने स्कोप में पहुंच योग्य पहचानकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'scope' definition?",
    "question_hi": "'scope' परिभाषा क्या है?",
    "options_en": ["Region where identifier is visible", "Memory area", "Function body", "File only"],
    "options_hi": ["क्षेत्र जहाँ पहचानकर्ता दिखाई देता है", "मेमोरी क्षेत्र", "फ़ंक्शन बॉडी", "केवल फ़ाइल"],
    "answer_en": "Region where identifier is visible",
    "answer_hi": "क्षेत्र जहाँ पहचानकर्ता दिखाई देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'file scope' meaning?",
    "question_hi": "'file scope' अर्थ क्या है?",
    "options_en": ["Outside any block or parameter list", "Inside block", "Inside function", "Only global"],
    "options_hi": ["किसी भी ब्लॉक या पैरामीटर सूची के बाहर", "ब्लॉक के अंदर", "फ़ंक्शन के अंदर", "केवल वैश्विक"],
    "answer_en": "Outside any block or parameter list",
    "answer_hi": "किसी भी ब्लॉक या पैरामीटर सूची के बाहर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'block scope' meaning?",
    "question_hi": "'block scope' अर्थ क्या है?",
    "options_en": ["Inside a block (compound statement)", "File scope", "Function prototype", "No scope"],
    "options_hi": ["ब्लॉक के अंदर (यौगिक कथन)", "फ़ाइल स्कोप", "फ़ंक्शन प्रोटोटाइप", "कोई स्कोप नहीं"],
    "answer_en": "Inside a block (compound statement)",
    "answer_hi": "ब्लॉक के अंदर (यौगिक कथन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'function prototype scope' meaning?",
    "question_hi": "'function prototype scope' अर्थ क्या है?",
    "options_en": ["Within function prototype parameter list", "Function body", "File scope", "Block scope"],
    "options_hi": ["फ़ंक्शन प्रोटोटाइप पैरामीटर सूची के भीतर", "फ़ंक्शन बॉडी", "फ़ाइल स्कोप", "ब्लॉक स्कोप"],
    "answer_en": "Within function prototype parameter list",
    "answer_hi": "फ़ंक्शन प्रोटोटाइप पैरामीटर सूची के भीतर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'function scope' meaning?",
    "question_hi": "'function scope' अर्थ क्या है?",
    "options_en": ["Only for labels", "For all identifiers", "For variables", "For types"],
    "options_hi": ["केवल लेबल के लिए", "सभी पहचानकर्ताओं के लिए", "वेरिएबल्स के लिए", "प्रकारों के लिए"],
    "answer_en": "Only for labels",
    "answer_hi": "केवल लेबल के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'undefined behavior' example with pointers?",
    "question_hi": "पॉइंटर्स के साथ 'undefined behavior' उदाहरण क्या है?",
    "options_en": ["Dereferencing null pointer", "Allocating memory", "Freeing memory", "Pointer arithmetic"],
    "options_hi": ["नल पॉइंटर डेरिफरेंसिंग", "मेमोरी आवंटित करना", "मेमोरी मुक्त करना", "पॉइंटर अंकगणित"],
    "answer_en": "Dereferencing null pointer",
    "answer_hi": "नल पॉइंटर डेरिफरेंसिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'implementation-defined behavior' example?",
    "question_hi": "'implementation-defined behavior' उदाहरण क्या है?",
    "options_en": ["Size of int (could be 16, 32, or 64 bits)", "Always 32 bits", "Always 16 bits", "Standardized"],
    "options_hi": ["int का आकार (16, 32, या 64 बिट्स हो सकता है)", "हमेशा 32 बिट्स", "हमेशा 16 बिट्स", "मानकीकृत"],
    "answer_en": "Size of int (could be 16, 32, or 64 bits)",
    "answer_hi": "int का आकार (16, 32, या 64 बिट्स हो सकता है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'unspecified behavior' example?",
    "question_hi": "'unspecified behavior' उदाहरण क्या है?",
    "options_en": ["Order of evaluation of function arguments", "Always left-to-right", "Always right-to-left", "Standardized order"],
    "options_hi": ["फ़ंक्शन तर्कों का मूल्यांकन क्रम", "हमेशा बाएं-से-दाएं", "हमेशा दाएं-से-बाएं", "मानकीकृत क्रम"],
    "answer_en": "Order of evaluation of function arguments",
    "answer_hi": "फ़ंक्शन तर्कों का मूल्यांकन क्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'locale-specific behavior' example?",
    "question_hi": "'locale-specific behavior' उदाहरण क्या है?",
    "options_en": ["Character classification (isalpha) depends on locale", "Always ASCII", "No locale effect", "Only for digits"],
    "options_hi": ["वर्ण वर्गीकरण (isalpha) लोकेल पर निर्भर करता है", "हमेशा ASCII", "कोई लोकेल प्रभाव नहीं", "केवल अंकों के लिए"],
    "answer_en": "Character classification (isalpha) depends on locale",
    "answer_hi": "वर्ण वर्गीकरण (isalpha) लोकेल पर निर्भर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'forward progress' guarantee in multithreading?",
    "question_hi": "मल्टीथ्रेडिंग में 'forward progress' गारंटी क्या है?",
    "options_en": ["Thread will eventually make progress", "May deadlock", "No guarantee", "Only for main thread"],
    "options_hi": ["थ्रेड अंततः प्रगति करेगा", "डेडलॉक हो सकता है", "कोई गारंटी नहीं", "केवल मुख्य थ्रेड के लिए"],
    "answer_en": "Thread will eventually make progress",
    "answer_hi": "थ्रेड अंततः प्रगति करेगा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the output: int x = 1; int y = (x = 2) + (x = 3); printf(\"%d\", y);",
    "question_hi": "आउटपुट क्या है: int x = 1; int y = (x = 2) + (x = 3); printf(\"%d\", y);",
    "options_en": ["Undefined behavior", "5", "6", "4"],
    "options_hi": ["अपरिभाषित व्यवहार", "5", "6", "4"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'memory location' in C11 memory model?",
    "question_hi": "C11 मेमोरी मॉडल में 'memory location' क्या है?",
    "options_en": ["Scalar or adjacent bit-fields", "Any byte", "Only variables", "Only arrays"],
    "options_hi": ["स्केलर या आसन्न बिट-फ़ील्ड्स", "कोई भी बाइट", "केवल वेरिएबल्स", "केवल ऐरे"],
    "answer_en": "Scalar or adjacent bit-fields",
    "answer_hi": "स्केलर या आसन्न बिट-फ़ील्ड्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'evaluation order' of subexpressions?",
    "question_hi": "उपव्यंजकों का 'evaluation order' क्या है?",
    "options_en": ["Unspecified except for sequence points", "Always left-to-right", "Always right-to-left", "Standardized"],
    "options_hi": ["अनुक्रम बिंदुओं को छोड़कर अनिर्दिष्ट", "हमेशा बाएं-से-दाएं", "हमेशा दाएं-से-बाएं", "मानकीकृत"],
    "answer_en": "Unspecified except for sequence points",
    "answer_hi": "अनुक्रम बिंदुओं को छोड़कर अनिर्दिष्ट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'value computation' vs 'side effect' ordering rule?",
    "question_hi": "'value computation' बनाम 'side effect' ऑर्डरिंग नियम क्या है?",
    "options_en": ["Value computations sequenced before side effects of same expression", "No ordering", "Side effects first", "Random"],
    "options_hi": ["समान अभिव्यक्ति के साइड इफेक्ट्स से पहले अनुक्रमित मान गणना", "कोई क्रम नहीं", "साइड इफेक्ट्स पहले", "यादृच्छिक"],
    "answer_en": "Value computations sequenced before side effects of same expression",
    "answer_hi": "समान अभिव्यक्ति के साइड इफेक्ट्स से पहले अनुक्रमित मान गणना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'asynchronous signal' safety requirement?",
    "question_hi": "'asynchronous signal' सुरक्षा आवश्यकता क्या है?",
    "options_en": ["Only async-signal-safe functions can be called in signal handler", "Any function", "No functions", "Only main"],
    "options_hi": ["केवल async-signal-safe फ़ंक्शन्स सिग्नल हैंडलर में कॉल किए जा सकते हैं", "कोई भी फ़ंक्शन", "कोई फ़ंक्शन नहीं", "केवल main"],
    "answer_en": "Only async-signal-safe functions can be called in signal handler",
    "answer_hi": "केवल async-signal-safe फ़ंक्शन्स सिग्नल हैंडलर में कॉल किए जा सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'interrupt' vs 'signal' difference?",
    "question_hi": "'interrupt' बनाम 'signal' अंतर क्या है?",
    "options_en": ["Interrupt: hardware; Signal: software abstraction", "Same", "No difference", "Only signals exist"],
    "options_hi": ["इंटरप्ट: हार्डवेयर; सिग्नल: सॉफ़्टवेयर अमूर्त", "समान", "कोई अंतर नहीं", "केवल सिग्नल मौजूद हैं"],
    "answer_en": "Interrupt: hardware; Signal: software abstraction",
    "answer_hi": "इंटरप्ट: हार्डवेयर; सिग्नल: सॉफ़्टवेयर अमूर्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'volatile' requirement for signal handlers?",
    "question_hi": "सिग्नल हैंडलर के लिए 'volatile' आवश्यकता क्या है?",
    "options_en": ["Variables shared with signal handler should be volatile sig_atomic_t", "Any type", "No volatile needed", "Only atomic"],
    "options_hi": ["सिग्नल हैंडलर के साथ साझा वेरिएबल्स volatile sig_atomic_t होने चाहिए", "कोई भी प्रकार", "volatile की आवश्यकता नहीं", "केवल परमाणु"],
    "answer_en": "Variables shared with signal handler should be volatile sig_atomic_t",
    "answer_hi": "सिग्नल हैंडलर के साथ साझा वेरिएबल्स volatile sig_atomic_t होने चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'setjmp' variable value rule?",
    "question_hi": "'setjmp' वेरिएबल मान नियम क्या है?",
    "options_en": ["Local variables changed between setjmp and longjmp may have indeterminate values", "Always preserved", "Always reset", "No effect"],
    "options_hi": ["स्थानीय वेरिएबल्स जो setjmp और longjmp के बीच बदले गए हैं, अनिश्चित मान हो सकते हैं", "हमेशा संरक्षित", "हमेशा रीसेट", "कोई प्रभाव नहीं"],
    "answer_en": "Local variables changed between setjmp and longjmp may have indeterminate values",
    "answer_hi": "स्थानीय वेरिएबल्स जो setjmp और longjmp के बीच बदले गए हैं, अनिश्चित मान हो सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'variable arguments macro' __VA_ARGS__?",
    "question_hi": "'variable arguments macro' __VA_ARGS__ क्या है?",
    "options_en": ["Expands to all trailing arguments in variadic macro", "No such macro", "Only in functions", "Only ..."],
    "options_hi": ["वेरिएडिक मैक्रो में सभी अनुगामी तर्कों में विस्तार करता है", "ऐसा कोई मैक्रो नहीं", "केवल फ़ंक्शन में", "केवल ..."],
    "answer_en": "Expands to all trailing arguments in variadic macro",
    "answer_hi": "वेरिएडिक मैक्रो में सभी अनुगामी तर्कों में विस्तार करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'Pragma operator' _Pragma usage?",
    "question_hi": "'Pragma operator' _Pragma उपयोग क्या है?",
    "options_en": ["_Pragma(\"token-string\") for pragmas in macros", "Only #pragma", "No pragma operator", "Only in C++"],
    "options_hi": ["मैक्रोज़ में प्रैग्मा के लिए _Pragma(\"token-string\")", "केवल #pragma", "कोई प्रैग्मा ऑपरेटर नहीं", "केवल C++ में"],
    "answer_en": "_Pragma(\"token-string\") for pragmas in macros",
    "answer_hi": "मैक्रोज़ में प्रैग्मा के लिए _Pragma(\"token-string\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'line splicing' with backslash-newline?",
    "question_hi": "बैकस्लैश-न्यूलाइन के साथ 'line splicing' क्या है?",
    "options_en": "Backslash-newline removed in preprocessing",
    "question_hi": "बैकस्लैश-न्यूलाइन प्रीप्रोसेसिंग में हटाई गई",
    "options_en": ["Backslash-newline removed", "No splicing", "Only in strings", "Only in comments"],
    "options_hi": ["बैकस्लैश-न्यूलाइन हटाई गई", "कोई स्प्लाइसिंग नहीं", "केवल स्ट्रिंग्स में", "केवल टिप्पणियों में"],
    "answer_en": "Backslash-newline removed",
    "answer_hi": "बैकस्लैश-न्यूलाइन हटाई गई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'digraph' alternative tokens?",
    "question_hi": "'digraph' वैकल्पिक टोकन क्या हैं?",
    "options_en": ["<%, %>, <:, :>, %:, %:%:", "No digraphs", "Only trigraphs", "Only for operators"],
    "options_hi": ["<%, %>, <:, :>, %:, %:%:", "कोई डाइग्राफ नहीं", "केवल ट्राइग्राफ", "केवल ऑपरेटर्स के लिए"],
    "answer_en": "<%, %>, <:, :>, %:, %:%:",
    "answer_hi": "<%, %>, <:, :>, %:, %:%:",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'trigraph' sequence examples?",
    "question_hi": "'trigraph' अनुक्रम उदाहरण क्या हैं?",
    "options_en": ["??= -> #, ??/ -> \\, ??' -> ^, etc.", "No trigraphs", "Only digraphs", "Removed in C23"],
    "options_hi": ["??= -> #, ??/ -> \\, ??' -> ^, आदि।", "कोई ट्राइग्राफ नहीं", "केवल डाइग्राफ", "C23 में हटाए गए"],
    "answer_en": "??= -> #, ??/ -> \\, ??' -> ^, etc.",
    "answer_hi": "??= -> #, ??/ -> \\, ??' -> ^, आदि।",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'universal character name' syntax?",
    "question_hi": "'universal character name' सिंटैक्स क्या है?",
    "options_en": ["\\uXXXX or \\UXXXXXXXX for Unicode", "No Unicode", "Only in strings", "Only ASCII"],
    "options_hi": ["यूनिकोड के लिए \\uXXXX या \\UXXXXXXXX", "कोई यूनिकोड नहीं", "केवल स्ट्रिंग्स में", "केवल ASCII"],
    "answer_en": "\\uXXXX or \\UXXXXXXXX for Unicode",
    "answer_hi": "यूनिकोड के लिए \\uXXXX या \\UXXXXXXXX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'reserved identifier' rule?",
    "question_hi": "'reserved identifier' नियम क्या है?",
    "options_en": ["Identifiers starting with underscore are reserved", "No reserved", "Only keywords", "Only in stdlib"],
    "options_hi": ["अंडरस्कोर से शुरू होने वाले पहचानकर्ता आरक्षित हैं", "कोई आरक्षित नहीं", "केवल कीवर्ड", "केवल stdlib में"],
    "answer_en": "Identifiers starting with underscore are reserved",
    "answer_hi": "अंडरस्कोर से शुरू होने वाले पहचानकर्ता आरक्षित हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'external name' length guarantee?",
    "question_hi": "'external name' लंबाई गारंटी क्या है?",
    "options_en": ["At least 31 significant characters", "No limit", "Only 8 characters", "Only 6 characters"],
    "options_hi": ["कम से कम 31 महत्वपूर्ण वर्ण", "कोई सीमा नहीं", "केवल 8 वर्ण", "केवल 6 वर्ण"],
    "answer_en": "At least 31 significant characters",
    "answer_hi": "कम से कम 31 महत्वपूर्ण वर्ण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'effective type' rule for malloc'd memory?",
    "question_hi": "malloc'd मेमोरी के लिए 'effective type' नियम क्या है?",
    "options_en": ["Type of lvalue used for store becomes effective type", "No effective type", "Always char", "First write determines"],
    "options_hi": ["स्टोर के लिए उपयोग किए गए lvalue का प्रकार प्रभावी प्रकार बन जाता है", "कोई प्रभावी प्रकार नहीं", "हमेशा char", "पहली लिखावत निर्धारित करती है"],
    "answer_en": "Type of lvalue used for store becomes effective type",
    "answer_hi": "स्टोर के लिए उपयोग किए गए lvalue का प्रकार प्रभावी प्रकार बन जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'strict aliasing' exception for char*?",
    "question_hi": "char* के लिए 'strict aliasing' अपवाद क्या है?",
    "options_en": ["char* can alias any type", "Cannot alias", "Only signed char", "No exception"],
    "options_hi": ["char* किसी भी प्रकार का एलियास कर सकता है", "एलियास नहीं कर सकता", "केवल signed char", "कोई अपवाद नहीं"],
    "answer_en": "char* can alias any type",
    "answer_hi": "char* किसी भी प्रकार का एलियास कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'type punning' using memcpy defined behavior?",
    "question_hi": "memcpy का उपयोग कर 'type punning' परिभाषित व्यवहार क्या है?",
    "options_en": ["Copying bytes via memcpy is defined behavior", "Undefined", "Only for same type", "No memcpy"],
    "options_hi": ["memcpy के माध्यम से बाइट्स कॉपी करना परिभाषित व्यवहार है", "अपरिभाषित", "केवल समान प्रकार के लिए", "कोई memcpy नहीं"],
    "answer_en": "Copying bytes via memcpy is defined behavior",
    "answer_hi": "memcpy के माध्यम से बाइट्स कॉपी करना परिभाषित व्यवहार है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'pointer provenance' concept?",
    "question_hi": "'pointer provenance' अवधारणा क्या है?",
    "options_en": ["Information about pointer origin for optimization", "No provenance", "Only for arrays", "Only in C++"],
    "options_hi": ["ऑप्टिमाइज़ेशन के लिए पॉइंटर उत्पत्ति के बारे में जानकारी", "कोई उत्पत्ति नहीं", "केवल ऐरे के लिए", "केवल C++ में"],
    "answer_en": "Information about pointer origin for optimization",
    "answer_hi": "ऑप्टिमाइज़ेशन के लिए पॉइंटर उत्पत्ति के बारे में जानकारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'object representation' vs 'value representation' difference?",
    "question_hi": "'object representation' बनाम 'value representation' अंतर क्या है?",
    "options_en": ["Object: all bits; Value: bits holding value (exclude padding)", "Same", "No difference", "Only for structs"],
    "options_hi": ["ऑब्जेक्ट: सभी बिट्स; मान: मान रखने वाले बिट्स (पैडिंग बाहर)", "समान", "कोई अंतर नहीं", "केवल संरचनाओं के लिए"],
    "answer_en": "Object: all bits; Value: bits holding value (exclude padding)",
    "answer_hi": "ऑब्जेक्ट: सभी बिट्स; मान: मान रखने वाले बिट्स (पैडिंग बाहर)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'effective type' of const object?",
    "question_hi": "const ऑब्जेक्ट का 'effective type' क्या है?",
    "options_en": ["const-qualified type", "Non-const", "No effective type", "Always char"],
    "options_hi": ["const-योग्य प्रकार", "गैर-const", "कोई प्रभावी प्रकार नहीं", "हमेशा char"],
    "answer_en": "const-qualified type",
    "answer_hi": "const-योग्य प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'atomic_compare_exchange' operation?",
    "question_hi": "'atomic_compare_exchange' संक्रिया क्या है?",
    "options_en": ["Atomic compare-and-swap", "No such operation", "Only load", "Only store"],
    "options_hi": ["परमाणु तुलना-और-स्वैप", "ऐसी कोई संक्रिया नहीं", "केवल लोड", "केवल स्टोर"],
    "answer_en": "Atomic compare-and-swap",
    "answer_hi": "परमाणु तुलना-और-स्वैप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'memory_order_consume' purpose?",
    "question_hi": "'memory_order_consume' उद्देश्य क्या है?",
    "options_en": ["For data dependencies (rarely used)", "Same as acquire", "No ordering", "Only for stores"],
    "options_hi": ["डेटा निर्भरताओं के लिए (शायद ही कभी उपयोग)", "acquire के समान", "कोई ऑर्डरिंग नहीं", "केवल स्टोर्स के लिए"],
    "answer_en": "For data dependencies (rarely used)",
    "answer_hi": "डेटा निर्भरताओं के लिए (शायद ही कभी उपयोग)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'fence' vs 'atomic operation with ordering' difference?",
    "question_hi": "'fence' बनाम 'atomic operation with ordering' अंतर क्या है?",
    "options_en": ["Fence orders all operations; atomic operation orders specific accesses", "Same", "No difference", "Only fences"],
    "options_hi": ["बाड़ सभी संक्रियाओं को क्रम देती है; परमाणु संक्रिया विशिष्ट एक्सेस को क्रम देती है", "समान", "कोई अंतर नहीं", "केवल बाड़"],
    "answer_en": "Fence orders all operations; atomic operation orders specific accesses",
    "answer_hi": "बाड़ सभी संक्रियाओं को क्रम देती है; परमाणु संक्रिया विशिष्ट एक्सेस को क्रम देती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'I/O stream buffering' behavior?",
    "question_hi": "'I/O stream buffering' व्यवहार क्या है?",
    "options_en": ["Data buffered before write/read; fflush forces write", "No buffering", "Always immediate", "Only for files"],
    "options_hi": ["लिखने/पढ़ने से पहले डेटा बफर किया गया; fflush लिखावट बल देता है", "कोई बफरिंग नहीं", "हमेशा तत्काल", "केवल फ़ाइलों के लिए"],
    "answer_en": "Data buffered before write/read; fflush forces write",
    "answer_hi": "लिखने/पढ़ने से पहले डेटा बफर किया गया; fflush लिखावट बल देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'text stream' vs 'binary stream' difference?",
    "question_hi": "'text stream' बनाम 'binary stream' अंतर क्या है?",
    "options_en": ["Text: newline translation; Binary: raw bytes", "Same", "No difference", "Only text"],
    "options_hi": ["टेक्स्ट: न्यूलाइन अनुवाद; बाइनरी: कच्चे बाइट्स", "समान", "कोई अंतर नहीं", "केवल टेक्स्ट"],
    "answer_en": "Text: newline translation; Binary: raw bytes",
    "answer_hi": "टेक्स्ट: न्यूलाइन अनुवाद; बाइनरी: कच्चे बाइट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'file positioning error' condition?",
    "question_hi": "'file positioning error' स्थिति क्या है?",
    "options_en": ["fseek/ftell fail on non-seekable streams", "Always work", "No positioning", "Only for binary"],
    "options_hi": ["गैर-सीक करने योग्य स्ट्रीम पर fseek/ftell विफल", "हमेशा काम करता है", "कोई पोजिशनिंग नहीं", "केवल बाइनरी के लिए"],
    "answer_en": "fseek/ftell fail on non-seekable streams",
    "answer_hi": "गैर-सीक करने योग्य स्ट्रीम पर fseek/ftell विफल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'wide-oriented' vs 'byte-oriented' stream?",
    "question_hi": "'wide-oriented' बनाम 'byte-oriented' स्ट्रीम क्या है?",
    "options_en": ["Wide: wchar_t functions; Byte: char functions; set by first I/O", "Same", "No orientation", "Always byte"],
    "options_hi": ["वाइड: wchar_t फ़ंक्शन्स; बाइट: char फ़ंक्शन्स; पहली I/O द्वारा निर्धारित", "समान", "कोई अभिविन्यास नहीं", "हमेशा बाइट"],
    "answer_en": "Wide: wchar_t functions; Byte: char functions; set by first I/O",
    "answer_hi": "वाइड: wchar_t फ़ंक्शन्स; बाइट: char फ़ंक्शन्स; पहली I/O द्वारा निर्धारित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'restrict' with function parameters optimization?",
    "question_hi": "फ़ंक्शन पैरामीटर ऑप्टिमाइज़ेशन के साथ 'restrict' क्या है?",
    "options_en": ["Allows optimization by promising no aliasing between restrict pointers", "No optimization", "Only for arrays", "No effect"],
    "options_hi": ["restrict पॉइंटर्स के बीच कोई एलियासिंग न होने का वादा करके ऑप्टिमाइज़ेशन की अनुमति देता है", "कोई ऑप्टिमाइज़ेशन नहीं", "केवल ऐरे के लिए", "कोई प्रभाव नहीं"],
    "answer_en": "Allows optimization by promising no aliasing between restrict pointers",
    "answer_hi": "restrict पॉइंटर्स के बीच कोई एलियासिंग न होने का वादा करके ऑप्टिमाइज़ेशन की अनुमति देता है",
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