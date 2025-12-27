const questions=[
  {
    "num": 1,
    "question_en": "What is the output: int a = 5; printf(\"%d %d %d\", a, a = a + 1, a);",
    "question_hi": "आउटपुट क्या है: int a = 5; printf(\"%d %d %d\", a, a = a + 1, a);",
    "options_en": ["Undefined behavior", "5 6 6", "5 6 5", "6 6 6"],
    "options_hi": ["अपरिभाषित व्यवहार", "5 6 6", "5 6 5", "6 6 6"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'restrict' keyword impact on loop optimization?",
    "question_hi": "'restrict' कीवर्ड का लूप ऑप्टिमाइज़ेशन पर क्या प्रभाव है?",
    "options_en": ["Enables vectorization by promising no aliasing", "Disables optimization", "No impact", "Causes slower code"],
    "options_hi": ["कोई एलियासिंग न होने का वादा करके वेक्टराइजेशन सक्षम करता है", "ऑप्टिमाइज़ेशन अक्षम करता है", "कोई प्रभाव नहीं", "धीमा कोड का कारण बनता है"],
    "answer_en": "Enables vectorization by promising no aliasing",
    "answer_hi": "कोई एलियासिंग न होने का वादा करके वेक्टराइजेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is 'strict aliasing' violation example?",
    "question_hi": "'strict aliasing' उल्लंघन उदाहरण क्या है?",
    "options_en": ["int i; float* f = (float*)&i; *f = 1.0;", "int i; int* p = &i; *p = 5;", "No violation", "char* c = (char*)&i;"],
    "options_hi": ["int i; float* f = (float*)&i; *f = 1.0;", "int i; int* p = &i; *p = 5;", "कोई उल्लंघन नहीं", "char* c = (char*)&i;"],
    "answer_en": "int i; float* f = (float*)&i; *f = 1.0;",
    "answer_hi": "int i; float* f = (float*)&i; *f = 1.0;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'type punning' using memcpy?",
    "question_hi": "memcpy का उपयोग कर 'type punning' क्या है?",
    "options_en": ["int i = 5; float f; memcpy(&f, &i, sizeof(int));", "int i = 5; float f = *(float*)&i;", "Both are valid", "Both are invalid"],
    "options_hi": ["int i = 5; float f; memcpy(&f, &i, sizeof(int));", "int i = 5; float f = *(float*)&i;", "दोनों मान्य हैं", "दोनों अमान्य हैं"],
    "answer_en": "int i = 5; float f; memcpy(&f, &i, sizeof(int));",
    "answer_hi": "int i = 5; float f; memcpy(&f, &i, sizeof(int));",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is 'sequence point' between function arguments?",
    "question_hi": "फ़ंक्शन तर्कों के बीच 'sequence point' क्या है?",
    "options_en": ["No sequence point between arguments", "Comma is sequence point", "Semicolon is sequence point", "Parenthesis is sequence point"],
    "options_hi": ["तर्कों के बीच कोई अनुक्रम बिंदु नहीं", "अल्पविराम अनुक्रम बिंदु है", "अर्धविराम अनुक्रम बिंदु है", "कोष्ठक अनुक्रम बिंदु है"],
    "answer_en": "No sequence point between arguments",
    "answer_hi": "तर्कों के बीच कोई अनुक्रम बिंदु नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'effective type' of allocated memory?",
    "question_hi": "आवंटित मेमोरी का 'effective type' क्या है?",
    "options_en": ["Type of lvalue used for store determines effective type", "Always char", "No effective type", "First read determines"],
    "options_hi": ["स्टोर के लिए उपयोग किए गए lvalue का प्रकार प्रभावी प्रकार निर्धारित करता है", "हमेशा char", "कोई प्रभावी प्रकार नहीं", "पहली रीड निर्धारित करती है"],
    "answer_en": "Type of lvalue used for store determines effective type",
    "answer_hi": "स्टोर के लिए उपयोग किए गए lvalue का प्रकार प्रभावी प्रकार निर्धारित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is 'trap representation' in floating-point?",
    "question_hi": "फ़्लोटिंग-पॉइंट में 'trap representation' क्या है?",
    "options_en": ["Signaling NaN (sNaN)", "Quiet NaN (qNaN)", "Infinity", "Zero"],
    "options_hi": ["सिग्नलिंग NaN (sNaN)", "क्वाइट NaN (qNaN)", "अनंत", "शून्य"],
    "answer_en": "Signaling NaN (sNaN)",
    "answer_hi": "सिग्नलिंग NaN (sNaN)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'contracted expression' optimization?",
    "question_hi": "'contracted expression' ऑप्टिमाइज़ेशन क्या है?",
    "options_en": ["Fused multiply-add treated as single operation", "No contraction", "Always separate operations", "Only for integers"],
    "options_hi": ["फ़्यूज़्ड गुणा-जोड़ एकल संक्रिया के रूप में माना जाता है", "कोई संकुचन नहीं", "हमेशा अलग संक्रियाएं", "केवल पूर्णांकों के लिए"],
    "answer_en": "Fused multiply-add treated as single operation",
    "answer_hi": "फ़्यूज़्ड गुणा-जोड़ एकल संक्रिया के रूप में माना जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'canonical NaN' requirement?",
    "question_hi": "'canonical NaN' आवश्यकता क्या है?",
    "options_en": ["Certain operations must return canonical NaN", "No requirement", "Any NaN allowed", "Only for comparisons"],
    "options_hi": ["कुछ संक्रियाओं को कैनोनिकल NaN लौटाना चाहिए", "कोई आवश्यकता नहीं", "कोई भी NaN अनुमत", "केवल तुलनाओं के लिए"],
    "answer_en": "Certain operations must return canonical NaN",
    "answer_hi": "कुछ संक्रियाओं को कैनोनिकल NaN लौटाना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'as-if rule' regarding floating-point?",
    "question_hi": "फ़्लोटिंग-पॉइंट के संबंध में 'as-if rule' क्या है?",
    "options_en": ["FP contractions can change results; not strictly as-if", "Strict as-if", "No optimization allowed", "Only for integers"],
    "options_hi": ["FP संकुचन परिणाम बदल सकते हैं; सख्ती से as-if नहीं", "सख्त as-if", "कोई ऑप्टिमाइज़ेशन अनुमति नहीं", "केवल पूर्णांकों के लिए"],
    "answer_en": "FP contractions can change results; not strictly as-if",
    "answer_hi": "FP संकुचन परिणाम बदल सकते हैं; सख्ती से as-if नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'float promotion' to double in variadic functions?",
    "question_hi": "वेरिएडिक फ़ंक्शन में 'float promotion' से double क्या है?",
    "options_en": ["float promoted to double when passed to ...", "No promotion", "Promoted to long double", "Remains float"],
    "options_hi": ["float को double में प्रचारित किया जाता है जब ... में पास किया जाता है", "कोई प्रचार नहीं", "long double में प्रचारित", "float बना रहता है"],
    "answer_en": "float promoted to double when passed to ...",
    "answer_hi": "float को double में प्रचारित किया जाता है जब ... में पास किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is 'integer constant expression' requirement?",
    "question_hi": "'integer constant expression' आवश्यकता क्या है?",
    "options_en": ["Evaluable at compile time, only certain operators allowed", "Any expression", "Runtime evaluation", "Only literals"],
    "options_hi": ["कंपाइल समय पर मूल्यांकन योग्य, केवल कुछ ऑपरेटर्स की अनुमति", "कोई भी एक्सप्रेशन", "रनटाइम मूल्यांकन", "केवल लिटरल"],
    "answer_en": "Evaluable at compile time, only certain operators allowed",
    "answer_hi": "कंपाइल समय पर मूल्यांकन योग्य, केवल कुछ ऑपरेटर्स की अनुमति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is 'address constant'?",
    "question_hi": "'address constant' क्या है?",
    "options_en": ["Pointer expression evaluable at compile time", "Any pointer", "Runtime address", "Only NULL"],
    "options_hi": ["पॉइंटर एक्सप्रेशन कंपाइल समय पर मूल्यांकन योग्य", "कोई भी पॉइंटर", "रनटाइम पता", "केवल NULL"],
    "answer_en": "Pointer expression evaluable at compile time",
    "answer_hi": "पॉइंटर एक्सप्रेशन कंपाइल समय पर मूल्यांकन योग्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'flexible array member' memory layout?",
    "question_hi": "'flexible array member' मेमोरी लेआउट क्या है?",
    "options_en": ["No storage for FAM in struct; allocated separately", "Storage in struct", "Zero-sized array", "Pointer instead"],
    "options_hi": ["संरचना में FAM के लिए कोई भंडारण नहीं; अलग से आवंटित", "संरचना में भंडारण", "शून्य-आकार ऐरे", "इसके बजाय पॉइंटर"],
    "answer_en": "No storage for FAM in struct; allocated separately",
    "answer_hi": "संरचना में FAM के लिए कोई भंडारण नहीं; अलग से आवंटित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is 'compound literal' storage duration?",
    "question_hi": "'compound literal' भंडारण अवधि क्या है?",
    "options_en": ["Automatic if inside function, static if file scope", "Always static", "Always automatic", "Always allocated"],
    "options_hi": ["स्वचालित यदि फ़ंक्शन के अंदर, स्थैतिक यदि फ़ाइल स्कोप", "हमेशा स्थैतिक", "हमेशा स्वचालित", "हमेशा आवंटित"],
    "answer_en": "Automatic if inside function, static if file scope",
    "answer_hi": "स्वचालित यदि फ़ंक्शन के अंदर, स्थैतिक यदि फ़ाइल स्कोप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'designated initializer' order?",
    "question_hi": "'designated initializer' क्रम क्या है?",
    "options_en": ["Designators can appear in any order", "Must be in declaration order", "Ascending order", "Descending order"],
    "options_hi": ["डिज़ाइनेटर किसी भी क्रम में दिखाई दे सकते हैं", "घोषणा क्रम में होना चाहिए", "आरोही क्रम", "अवरोही क्रम"],
    "answer_en": "Designators can appear in any order",
    "answer_hi": "डिज़ाइनेटर किसी भी क्रम में दिखाई दे सकते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'array parameter' type adjustment?",
    "question_hi": "'array parameter' प्रकार समायोजन क्या है?",
    "options_en": ["Array of T adjusted to pointer to T", "Remains array", "Becomes reference", "No adjustment"],
    "options_hi": ["T की ऐरे T के पॉइंटर में समायोजित", "ऐरे बना रहता है", "संदर्भ बन जाता है", "कोई समायोजन नहीं"],
    "answer_en": "Array of T adjusted to pointer to T",
    "answer_hi": "T की ऐरे T के पॉइंटर में समायोजित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'function parameter' incomplete array type?",
    "question_hi": "'function parameter' अपूर्ण ऐरे प्रकार क्या है?",
    "options_en": ["Can have incomplete array type (e.g., int a[])", "Must be complete", "Must have size", "Not allowed"],
    "options_hi": ["अपूर्ण ऐरे प्रकार हो सकता है (जैसे, int a[])", "पूर्ण होना चाहिए", "आकार होना चाहिए", "अनुमति नहीं"],
    "answer_en": "Can have incomplete array type (e.g., int a[])",
    "answer_hi": "अपूर्ण ऐरे प्रकार हो सकता है (जैसे, int a[])",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'compatible type' for function return?",
    "question_hi": "फ़ंक्शन रिटर्न के लिए 'compatible type' क्या है?",
    "options_en": ["Return types must be compatible", "Can be different", "No requirement", "Must be identical"],
    "options_hi": ["वापसी प्रकार संगत होने चाहिए", "भिन्न हो सकते हैं", "कोई आवश्यकता नहीं", "समान होना चाहिए"],
    "answer_en": "Return types must be compatible",
    "answer_hi": "वापसी प्रकार संगत होने चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is 'default argument promotions' in K&R functions?",
    "question_hi": "K&R फ़ंक्शन में 'default argument promotions' क्या है?",
    "options_en": ["float to double, char/short to int", "No promotions", "Only char promotion", "Only float promotion"],
    "options_hi": ["float से double, char/short से int", "कोई प्रचार नहीं", "केवल char प्रचार", "केवल float प्रचार"],
    "answer_en": "float to double, char/short to int",
    "answer_hi": "float से double, char/short से int",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'function prototype scope'?",
    "question_hi": "'function prototype scope' क्या है?",
    "options_en": ["Parameter names in prototype have scope ending at prototype", "File scope", "Block scope", "Function scope"],
    "options_hi": ["प्रोटोटाइप में पैरामीटर नामों का स्कोप प्रोटोटाइप पर समाप्त होता है", "फ़ाइल स्कोप", "ब्लॉक स्कोप", "फ़ंक्शन स्कोप"],
    "answer_en": "Parameter names in prototype have scope ending at prototype",
    "answer_hi": "प्रोटोटाइप में पैरामीटर नामों का स्कोप प्रोटोटाइप पर समाप्त होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'incomplete type' allowed contexts?",
    "question_hi": "'incomplete type' अनुमत संदर्भ क्या हैं?",
    "options_en": ["Pointer to incomplete type, sizeof not allowed", "Any context", "Only declarations", "No contexts"],
    "options_hi": ["अपूर्ण प्रकार का पॉइंटर, sizeof अनुमति नहीं", "कोई भी संदर्भ", "केवल घोषणाएं", "कोई संदर्भ नहीं"],
    "answer_en": "Pointer to incomplete type, sizeof not allowed",
    "answer_hi": "अपूर्ण प्रकार का पॉइंटर, sizeof अनुमति नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'forward declaration' of enum?",
    "question_hi": "enum की 'forward declaration' क्या है?",
    "options_en": "Not allowed in C (unlike C++)",
    "question_hi": "C में अनुमति नहीं (C++ के विपरीत)",
    "options_en": ["Not allowed in C", "Allowed", "Only with typedef", "Only in C11"],
    "options_hi": ["C में अनुमति नहीं", "अनुमति है", "केवल typedef के साथ", "केवल C11 में"],
    "answer_en": "Not allowed in C",
    "answer_hi": "C में अनुमति नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'compatible tag' for struct/union?",
    "question_hi": "संरचना/यूनियन के लिए 'compatible tag' क्या है?",
    "options_en": ["Same tag in same scope refers to same type", "Different types", "No compatibility", "Automatic compatibility"],
    "options_hi": ["समान स्कोप में समान टैग समान प्रकार को संदर्भित करता है", "भिन्न प्रकार", "कोई संगतता नहीं", "स्वचालित संगतता"],
    "answer_en": "Same tag in same scope refers to same type",
    "answer_hi": "समान स्कोप में समान टैग समान प्रकार को संदर्भित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'translation unit' composed of?",
    "question_hi": "'translation unit' किससे बना है?",
    "options_en": ["Source file after preprocessing including headers", "Object file", "Executable", "Library file"],
    "options_hi": ["हेडर सहित प्रीप्रोसेसिंग के बाद सोर्स फ़ाइल", "ऑब्जेक्ट फ़ाइल", "निष्पादन योग्य", "लाइब्रेरी फ़ाइल"],
    "answer_en": "Source file after preprocessing including headers",
    "answer_hi": "हेडर सहित प्रीप्रोसेसिंग के बाद सोर्स फ़ाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'external definition' vs 'tentative definition'?",
    "question_hi": "'external definition' बनाम 'tentative definition' क्या है?",
    "options_en": ["External: no initializer but with extern; Tentative: no initializer, no extern", "Same thing", "No difference", "Opposite"],
    "options_hi": ["बाहरी: कोई आरंभीकरण नहीं लेकिन extern के साथ; अस्थायी: कोई आरंभीकरण नहीं, कोई extern नहीं", "एक ही चीज़", "कोई अंतर नहीं", "विपरीत"],
    "answer_en": "External: no initializer but with extern; Tentative: no initializer, no extern",
    "answer_hi": "बाहरी: कोई आरंभीकरण नहीं लेकिन extern के साथ; अस्थायी: कोई आरंभीकरण नहीं, कोई extern नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'linkage of const'?",
    "question_hi": "'const' की लिंकेज क्या है?",
    "options_en": ["const at file scope has internal linkage (in C)", "External linkage", "No linkage", "Depends on initialization"],
    "options_hi": ["फ़ाइल स्कोप पर const की आंतरिक लिंकेज होती है (C में)", "बाहरी लिंकेज", "कोई लिंकेज नहीं", "आरंभीकरण पर निर्भर करता है"],
    "answer_en": "const at file scope has internal linkage (in C)",
    "answer_hi": "फ़ाइल स्कोप पर const की आंतरिक लिंकेज होती है (C में)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'static' at block scope?",
    "question_hi": "ब्लॉक स्कोप में 'static' क्या है?",
    "options_en": ["Static storage duration, but no linkage", "External linkage", "Internal linkage", "Automatic storage"],
    "options_hi": ["स्थैतिक भंडारण अवधि, लेकिन कोई लिंकेज नहीं", "बाहरी लिंकेज", "आंतरिक लिंकेज", "स्वचालित भंडारण"],
    "answer_en": "Static storage duration, but no linkage",
    "answer_hi": "स्थैतिक भंडारण अवधि, लेकिन कोई लिंकेज नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'register' variable address?",
    "question_hi": "'register' वेरिएबल पता क्या है?",
    "options_en": ["Cannot take address of register variable", "Can take address", "Depends on compiler", "Only with &"],
    "options_hi": ["रजिस्टर वेरिएबल का पता नहीं ले सकते", "पता ले सकते हैं", "कंपाइलर पर निर्भर करता है", "केवल & के साथ"],
    "answer_en": "Cannot take address of register variable",
    "answer_hi": "रजिस्टर वेरिएबल का पता नहीं ले सकते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'volatile' with signal handlers?",
    "question_hi": "सिग्नल हैंडलर के साथ 'volatile' क्या है?",
    "options_en": ["Variables accessed in signal handler should be volatile", "Not needed", "Only for globals", "Only for static"],
    "options_hi": ["सिग्नल हैंडलर में एक्सेस किए गए वेरिएबल्स volatile होने चाहिए", "आवश्यक नहीं", "केवल ग्लोबल्स के लिए", "केवल स्थैतिक के लिए"],
    "answer_en": "Variables accessed in signal handler should be volatile",
    "answer_hi": "सिग्नल हैंडलर में एक्सेस किए गए वेरिएबल्स volatile होने चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'restrict' with function parameters?",
    "question_hi": "फ़ंक्शन पैरामीटर के साथ 'restrict' क्या है?",
    "options_en": ["Promises no aliasing between restrict-qualified pointers", "No promise", "Only for arrays", "Only for same type"],
    "options_hi": ["restrict-योग्य पॉइंटर्स के बीच कोई एलियासिंग न होने का वादा करता है", "कोई वादा नहीं", "केवल ऐरे के लिए", "केवल समान प्रकार के लिए"],
    "answer_en": "Promises no aliasing between restrict-qualified pointers",
    "answer_hi": "restrict-योग्य पॉइंटर्स के बीच कोई एलियासिंग न होने का वादा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'atomic' qualification?",
    "question_hi": "'atomic' योग्यता क्या है?",
    "options_en": ["_Atomic T for atomic operations", "Only for integers", "Only for pointers", "No atomic in C"],
    "options_hi": ["परमाणु संक्रियाओं के लिए _Atomic T", "केवल पूर्णांकों के लिए", "केवल पॉइंटर्स के लिए", "C में कोई परमाणु नहीं"],
    "answer_en": "_Atomic T for atomic operations",
    "answer_hi": "परमाणु संक्रियाओं के लिए _Atomic T",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'alignment specifier'?",
    "question_hi": "'alignment specifier' क्या है?",
    "options_en": ["_Alignas(N) to specify alignment", "No alignment spec", "Only for structs", "Only for variables"],
    "options_hi": ["संरेखण निर्दिष्ट करने के लिए _Alignas(N)", "कोई संरेखण विनिर्देशक नहीं", "केवल संरचनाओं के लिए", "केवल वेरिएबल्स के लिए"],
    "answer_en": "_Alignas(N) to specify alignment",
    "answer_hi": "संरेखण निर्दिष्ट करने के लिए _Alignas(N)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'static_assert' syntax?",
    "question_hi": "'static_assert' सिंटैक्स क्या है?",
    "options_en": ["static_assert(constant-expression, string-literal)", "No string literal", "Runtime assert", "Only in C++"],
    "options_hi": ["static_assert(स्थिरांक-अभिव्यक्ति, स्ट्रिंग-लिटरल)", "कोई स्ट्रिंग लिटरल नहीं", "रनटाइम assert", "केवल C++ में"],
    "answer_en": "static_assert(constant-expression, string-literal)",
    "answer_hi": "static_assert(स्थिरांक-अभिव्यक्ति, स्ट्रिंग-लिटरल)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'noreturn' function attribute?",
    "question_hi": "'noreturn' फ़ंक्शन विशेषता क्या है?",
    "options_en": "_Noreturn indicates function does not return",
    "question_hi": "_Noreturn इंगित करता है कि फ़ंक्शन वापस नहीं आता है",
    "options_en": ["_Noreturn", "[[noreturn]]", "Both", "No noreturn in C"],
    "options_hi": ["_Noreturn", "[[noreturn]]", "दोनों", "C में कोई noreturn नहीं"],
    "answer_en": "_Noreturn",
    "answer_hi": "_Noreturn",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'generic selection'?",
    "question_hi": "'generic selection' क्या है?",
    "options_en": ["_Generic for compile-time type-based dispatch", "Runtime dispatch", "No generic", "Only for arithmetic types"],
    "options_hi": ["कंपाइल-टाइम टाइप-आधारित डिस्पैच के लिए _Generic", "रनटाइम डिस्पैच", "कोई सामान्य नहीं", "केवल अंकगणितीय प्रकारों के लिए"],
    "answer_en": "_Generic for compile-time type-based dispatch",
    "answer_hi": "कंपाइल-टाइम टाइप-आधारित डिस्पैच के लिए _Generic",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is 'complex number' literal?",
    "question_hi": "'complex number' लिटरल क्या है?",
    "options_en": ["1.0 + 2.0*I or 1.0 + 2.0i", "Only I", "Only i", "No complex literals"],
    "options_hi": ["1.0 + 2.0*I या 1.0 + 2.0i", "केवल I", "केवल i", "कोई जटिल लिटरल नहीं"],
    "answer_en": "1.0 + 2.0*I or 1.0 + 2.0i",
    "answer_hi": "1.0 + 2.0*I या 1.0 + 2.0i",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'hexadecimal floating constant'?",
    "question_hi": "'hexadecimal floating constant' क्या है?",
    "options_en": ["0x1.0p-1 (hex significand, binary exponent)", "No hex float", "Only decimal", "Only for double"],
    "options_hi": ["0x1.0p-1 (हेक्स सिग्निफिकैंड, बाइनरी एक्सपोनेंट)", "कोई हेक्स फ़्लोट नहीं", "केवल दशमलव", "केवल डबल के लिए"],
    "answer_en": "0x1.0p-1 (hex significand, binary exponent)",
    "answer_hi": "0x1.0p-1 (हेक्स सिग्निफिकैंड, बाइनरी एक्सपोनेंट)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is 'binary integer constant'?",
    "question_hi": "'binary integer constant' क्या है?",
    "options_en": ["0b1010 or 0B1010", "No binary constants", "Only octal", "Only hex"],
    "options_hi": ["0b1010 या 0B1010", "कोई बाइनरी स्थिरांक नहीं", "केवल ऑक्टल", "केवल हेक्स"],
    "answer_en": "0b1010 or 0B1010",
    "answer_hi": "0b1010 या 0B1010",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'digit separator'?",
    "question_hi": "'digit separator' क्या है?",
    "options_en": ["1'000'000 (apostrophe as separator)", "No separator", "Underscore", "Comma"],
    "options_hi": ["1'000'000 (एपॉस्ट्रॉफी विभाजक के रूप में)", "कोई विभाजक नहीं", "अंडरस्कोर", "अल्पविराम"],
    "answer_en": "1'000'000 (apostrophe as separator)",
    "answer_hi": "1'000'000 (एपॉस्ट्रॉफी विभाजक के रूप में)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is 'UTF-8 string literal'?",
    "question_hi": "'UTF-8 string literal' क्या है?",
    "options_en": ["u8\"...\" for UTF-8 encoded string", "Only L\"...\"", "No UTF-8", "Only ASCII"],
    "options_hi": ["UTF-8 एन्कोडेड स्ट्रिंग के लिए u8\"...\"", "केवल L\"...\"", "कोई UTF-8 नहीं", "केवल ASCII"],
    "answer_en": "u8\"...\" for UTF-8 encoded string",
    "answer_hi": "UTF-8 एन्कोडेड स्ट्रिंग के लिए u8\"...\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is 'wide string literal'?",
    "question_hi": "'wide string literal' क्या है?",
    "options_en": ["L\"...\" for wchar_t string", "Only u8\"...\"", "No wide strings", "Only char"],
    "options_hi": ["wchar_t स्ट्रिंग के लिए L\"...\"", "केवल u8\"...\"", "कोई वाइड स्ट्रिंग नहीं", "केवल char"],
    "answer_en": "L\"...\" for wchar_t string",
    "answer_hi": "wchar_t स्ट्रिंग के लिए L\"...\"",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'raw string literal' in C?",
    "question_hi": "C में 'raw string literal' क्या है?",
    "options_en": "Not in C standard (C++ only)",
    "question_hi": "C मानक में नहीं (केवल C++)",
    "options_en": ["Not in C", "R\"(...)\"", "Only in C23", "No raw strings"],
    "options_hi": ["C में नहीं", "R\"(...)\"", "केवल C23 में", "कोई raw स्ट्रिंग नहीं"],
    "answer_en": "Not in C",
    "answer_hi": "C में नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'universal character name' in identifier?",
    "question_hi": "पहचानकर्ता में 'universal character name' क्या है?",
    "options_en": ["\\uXXXX or \\UXXXXXXXX in identifiers", "No Unicode in identifiers", "Only in strings", "Only ASCII"],
    "options_hi": ["पहचानकर्ताओं में \\uXXXX या \\UXXXXXXXX", "पहचानकर्ताओं में कोई यूनिकोड नहीं", "केवल स्ट्रिंग्स में", "केवल ASCII"],
    "answer_en": "\\uXXXX or \\UXXXXXXXX in identifiers",
    "answer_hi": "पहचानकर्ताओं में \\uXXXX या \\UXXXXXXXX",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is 'reserved identifier' rules?",
    "question_hi": "'reserved identifier' नियम क्या हैं?",
    "options_en": ["Identifiers starting with underscore followed by uppercase or another underscore are reserved", "No reserved", "Only keywords", "Only in stdlib"],
    "options_hi": ["अंडरस्कोर से शुरू होने वाले पहचानकर्ता उसके बाद अपरकेस या दूसरा अंडरस्कोर आरक्षित हैं", "कोई आरक्षित नहीं", "केवल कीवर्ड", "केवल stdlib में"],
    "answer_en": "Identifiers starting with underscore followed by uppercase or another underscore are reserved",
    "answer_hi": "अंडरस्कोर से शुरू होने वाले पहचानकर्ता उसके बाद अपरकेस या दूसरा अंडरस्कोर आरक्षित हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'external name' length limit?",
    "question_hi": "'external name' लंबाई सीमा क्या है?",
    "options_en": ["At least 31 significant characters guaranteed", "No limit", "Only 8 characters", "Only 6 characters"],
    "options_hi": ["कम से कम 31 महत्वपूर्ण वर्ण गारंटीकृत", "कोई सीमा नहीं", "केवल 8 वर्ण", "केवल 6 वर्ण"],
    "answer_en": "At least 31 significant characters guaranteed",
    "answer_hi": "कम से कम 31 महत्वपूर्ण वर्ण गारंटीकृत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'Pragma operator' _Pragma?",
    "question_hi": "'Pragma operator' _Pragma क्या है?",
    "options_en": ["_Pragma(\"token-string\") for pragmas in macros", "Only #pragma", "No pragma operator", "Only in C++"],
    "options_hi": ["मैक्रोज़ में प्रैग्मा के लिए _Pragma(\"token-string\")", "केवल #pragma", "कोई प्रैग्मा ऑपरेटर नहीं", "केवल C++ में"],
    "answer_en": "_Pragma(\"token-string\") for pragmas in macros",
    "answer_hi": "मैक्रोज़ में प्रैग्मा के लिए _Pragma(\"token-string\")",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is 'line continuation' with backslash?",
    "question_hi": "बैकस्लैश के साथ 'line continuation' क्या है?",
    "options_en": ["Backslash-newline removed in translation phase 2", "Not removed", "Only in strings", "Only in comments"],
    "options_hi": ["बैकस्लैश-न्यूलाइन अनुवाद चरण 2 में हटाई गई", "नहीं हटाई गई", "केवल स्ट्रिंग्स में", "केवल टिप्पणियों में"],
    "answer_en": "Backslash-newline removed in translation phase 2",
    "answer_hi": "बैकस्लैश-न्यूलाइन अनुवाद चरण 2 में हटाई गई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'digraph' tokens?",
    "question_hi": "'digraph' टोकन क्या हैं?",
    "options_en": ["<%, %>, <:, :>, %:, %:%: as alternative tokens", "No digraphs", "Only trigraphs", "Only for operators"],
    "options_hi": ["<%, %>, <:, :>, %:, %:%: वैकल्पिक टोकन के रूप में", "कोई डाइग्राफ नहीं", "केवल ट्राइग्राफ", "केवल ऑपरेटर्स के लिए"],
    "answer_en": "<%, %>, <:, :>, %:, %:%: as alternative tokens",
    "answer_hi": "<%, %>, <:, :>, %:, %:%: वैकल्पिक टोकन के रूप में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is 'trigraph' replacement?",
    "question_hi": "'trigraph' प्रतिस्थापन क्या है?",
    "options_en": ["??= -> #, ??/ -> \\, etc. in translation phase 1", "No trigraphs", "Only in C89", "Removed in C23"],
    "options_hi": ["??= -> #, ??/ -> \\, आदि अनुवाद चरण 1 में", "कोई ट्राइग्राफ नहीं", "केवल C89 में", "C23 में हटाए गए"],
    "answer_en": "??= -> #, ??/ -> \\, etc. in translation phase 1",
    "answer_hi": "??= -> #, ??/ -> \\, आदि अनुवाद चरण 1 में",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'translation phase' order?",
    "question_hi": "'translation phase' क्रम क्या है?",
    "options_en": ["1. Trigraphs, 2. Line continuation, 3. Tokenization, etc.", "No phases", "Random order", "Only one phase"],
    "options_hi": ["1. ट्राइग्राफ, 2. लाइन निरंतरता, 3. टोकनाइजेशन, आदि।", "कोई चरण नहीं", "यादृच्छिक क्रम", "केवल एक चरण"],
    "answer_en": "1. Trigraphs, 2. Line continuation, 3. Tokenization, etc.",
    "answer_hi": "1. ट्राइग्राफ, 2. लाइन निरंतरता, 3. टोकनाइजेशन, आदि।",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'header file' inclusion model?",
    "question_hi": "'header file' समावेशन मॉडल क्या है?",
    "options_en": ["Textual inclusion via #include", "Binary inclusion", "No inclusion", "Only once"],
    "options_hi": ["#include के माध्यम से पाठ्य समावेशन", "बाइनरी समावेशन", "कोई समावेशन नहीं", "केवल एक बार"],
    "answer_en": "Textual inclusion via #include",
    "answer_hi": "#include के माध्यम से पाठ्य समावेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is 'conditional inclusion' #if expression?",
    "question_hi": "'conditional inclusion' #if एक्सप्रेशन क्या है?",
    "options_en": ["Integer constant expression after macro replacement", "Any expression", "Runtime expression", "Only literals"],
    "options_hi": ["मैक्रो प्रतिस्थापन के बाद पूर्णांक स्थिरांक अभिव्यक्ति", "कोई भी अभिव्यक्ति", "रनटाइम अभिव्यक्ति", "केवल लिटरल"],
    "answer_en": "Integer constant expression after macro replacement",
    "answer_hi": "मैक्रो प्रतिस्थापन के बाद पूर्णांक स्थिरांक अभिव्यक्ति",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'defined' operator?",
    "question_hi": "'defined' ऑपरेटर क्या है?",
    "options_en": ["defined(IDENTIFIER) or defined IDENTIFIER in #if", "Not an operator", "Only in #ifdef", "Runtime operator"],
    "options_hi": ["#if में defined(IDENTIFIER) या defined IDENTIFIER", "ऑपरेटर नहीं", "केवल #ifdef में", "रनटाइम ऑपरेटर"],
    "answer_en": "defined(IDENTIFIER) or defined IDENTIFIER in #if",
    "answer_hi": "#if में defined(IDENTIFIER) या defined IDENTIFIER",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is 'line control' #line directive?",
    "question_hi": "'line control' #line निर्देश क्या है?",
    "options_en": ["#line number \"filename\" sets line number for errors", "No effect", "Only for debugging", "Only in C++"],
    "options_hi": ["#line number \"filename\" त्रुटियों के लिए लाइन नंबर सेट करता है", "कोई प्रभाव नहीं", "केवल डीबगिंग के लिए", "केवल C++ में"],
    "answer_en": "#line number \"filename\" sets line number for errors",
    "answer_hi": "#line number \"filename\" त्रुटियों के लिए लाइन नंबर सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'error directive' #error?",
    "question_hi": "'error directive' #error क्या है?",
    "options_en": ["#error message causes compilation error", "Warning only", "No effect", "Runtime error"],
    "options_hi": ["#error संदेश संकलन त्रुटि का कारण बनता है", "केवल चेतावनी", "कोई प्रभाव नहीं", "रनटाइम त्रुटि"],
    "answer_en": "#error message causes compilation error",
    "answer_hi": "#error संदेश संकलन त्रुटि का कारण बनता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is 'pragma directive' implementation-defined?",
    "question_hi": "'pragma directive' कार्यान्वयन-परिभाषित क्या है?",
    "options_en": ["#pragma STDC FP_CONTRACT ON/OFF", "All pragmas standard", "No pragmas", "Only for optimization"],
    "options_hi": ["#pragma STDC FP_CONTRACT ON/OFF", "सभी प्रैग्मा मानक", "कोई प्रैग्मा नहीं", "केवल ऑप्टिमाइज़ेशन के लिए"],
    "answer_en": "#pragma STDC FP_CONTRACT ON/OFF",
    "answer_hi": "#pragma STDC FP_CONTRACT ON/OFF",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'null directive'?",
    "question_hi": "'null directive' क्या है?",
    "options_en": ["Empty # line (just #) does nothing", "Causes error", "Comment", "Not allowed"],
    "options_hi": ["खाली # लाइन (बस #) कुछ नहीं करती", "त्रुटि का कारण", "टिप्पणी", "अनुमति नहीं"],
    "answer_en": "Empty # line (just #) does nothing",
    "answer_hi": "खाली # लाइन (बस #) कुछ नहीं करती",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is 'macro redefinition' allowed?",
    "question_hi": "'macro redefinition' अनुमत क्या है?",
    "options_en": ["Redefinition allowed only if identical", "Never allowed", "Always allowed", "Only if undefined first"],
    "options_hi": ["पुनर्परिभाषा केवल तभी अनुमत है जब समान हो", "कभी अनुमति नहीं", "हमेशा अनुमति", "केवल यदि पहले अपरिभाषित"],
    "answer_en": "Redefinition allowed only if identical",
    "answer_hi": "पुनर्परिभाषा केवल तभी अनुमत है जब समान हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'function-like macro' empty arguments?",
    "question_hi": "'function-like macro' खाली तर्क क्या है?",
    "options_en": ["Allowed: F(, ) with empty arguments", "Not allowed", "Only one empty", "Syntax error"],
    "options_hi": ["अनुमत: F(, ) खाली तर्कों के साथ", "अनुमति नहीं", "केवल एक खाली", "वाक्यविन्यास त्रुटि"],
    "answer_en": "Allowed: F(, ) with empty arguments",
    "answer_hi": "अनुमत: F(, ) खाली तर्कों के साथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is 'variable arguments macro'?",
    "question_hi": "'variable arguments macro' क्या है?",
    "options_en": ["#define F(...) __VA_ARGS__", "No variable macros", "Only in C99", "Only for functions"],
    "options_hi": ["#define F(...) __VA_ARGS__", "कोई चर मैक्रो नहीं", "केवल C99 में", "केवल फ़ंक्शन के लिए"],
    "answer_en": "#define F(...) __VA_ARGS__",
    "answer_hi": "#define F(...) __VA_ARGS__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'stringizing operator' #?",
    "question_hi": "'stringizing operator' # क्या है?",
    "options_en": ["#x converts macro argument x to string literal", "Not an operator", "Only for numbers", "Runtime conversion"],
    "options_hi": ["#x मैक्रो तर्क x को स्ट्रिंग लिटरल में बदलता है", "ऑपरेटर नहीं", "केवल संख्याओं के लिए", "रनटाइम रूपांतरण"],
    "answer_en": "#x converts macro argument x to string literal",
    "answer_hi": "#x मैक्रो तर्क x को स्ट्रिंग लिटरल में बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is 'token pasting operator' ##?",
    "question_hi": "'token pasting operator' ## क्या है?",
    "options_en": ["a ## b concatenates tokens a and b", "Not an operator", "Only for identifiers", "Runtime concatenation"],
    "options_hi": ["a ## b टोकन a और b को संयोजित करता है", "ऑपरेटर नहीं", "केवल पहचानकर्ताओं के लिए", "रनटाइम संयोजन"],
    "answer_en": "a ## b concatenates tokens a and b",
    "answer_hi": "a ## b टोकन a और b को संयोजित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'macro argument prescan'?",
    "question_hi": "'macro argument prescan' क्या है?",
    "options_en": ["Arguments expanded before substitution in macro body", "No prescan", "After substitution", "Only for nested macros"],
    "options_hi": ["मैक्रो बॉडी में प्रतिस्थापन से पहले तर्कों का विस्तार किया जाता है", "कोई प्रीस्कैन नहीं", "प्रतिस्थापन के बाद", "केवल नेस्टेड मैक्रो के लिए"],
    "answer_en": "Arguments expanded before substitution in macro body",
    "answer_hi": "मैक्रो बॉडी में प्रतिस्थापन से पहले तर्कों का विस्तार किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is 'rescanning' after macro replacement?",
    "question_hi": "मैक्रो प्रतिस्थापन के बाद 'rescanning' क्या है?",
    "options_en": ["Result of replacement is rescanned for more macros", "No rescan", "Only once", "Only for function-like"],
    "options_hi": ["प्रतिस्थापन का परिणाम अधिक मैक्रो के लिए फिर से स्कैन किया जाता है", "कोई पुनः स्कैन नहीं", "केवल एक बार", "केवल फ़ंक्शन-जैसे"],
    "answer_en": "Result of replacement is rescanned for more macros",
    "answer_hi": "प्रतिस्थापन का परिणाम अधिक मैक्रो के लिए फिर से स्कैन किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'macro expansion' preventing recursion?",
    "question_hi": "'macro expansion' पुनरावृत्ति को रोकना क्या है?",
    "options_en": ["Macro name is not expanded if it's being expanded already", "Infinite recursion", "Stack overflow", "Allowed recursion"],
    "options_hi": ["मैक्रो नाम का विस्तार नहीं किया जाता है यदि यह पहले से ही विस्तारित हो रहा है", "अनंत पुनरावृत्ति", "स्टैक ओवरफ्लो", "अनुमत पुनरावृत्ति"],
    "answer_en": "Macro name is not expanded if it's being expanded already",
    "answer_hi": "मैक्रो नाम का विस्तार नहीं किया जाता है यदि यह पहले से ही विस्तारित हो रहा है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is 'predefined macro' __DATE__?",
    "question_hi": "'predefined macro' __DATE__ क्या है?",
    "options_en": ["Expands to compilation date as string", "Current date", "Runtime date", "No such macro"],
    "options_hi": ["संकलन तिथि के रूप में स्ट्रिंग में विस्तार करता है", "वर्तमान तिथि", "रनटाइम तिथि", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Expands to compilation date as string",
    "answer_hi": "संकलन तिथि के रूप में स्ट्रिंग में विस्तार करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is '__func__' predefined identifier?",
    "question_hi": "'__func__' पूर्वनिर्धारित पहचानकर्ता क्या है?",
    "options_en": ["String containing current function name", "Function pointer", "Not in C", "Only in debug"],
    "options_hi": ["वर्तमान फ़ंक्शन नाम वाली स्ट्रिंग", "फ़ंक्शन पॉइंटर", "C में नहीं", "केवल डीबग में"],
    "answer_en": "String containing current function name",
    "answer_hi": "वर्तमान फ़ंक्शन नाम वाली स्ट्रिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is 'assert' macro behavior in NDEBUG?",
    "question_hi": "NDEBUG में 'assert' मैक्रो व्यवहार क्या है?",
    "options_en": ["assert expands to nothing if NDEBUG defined", "Still active", "Runtime check", "Compile error"],
    "options_hi": ["assert कुछ नहीं में विस्तार करता है यदि NDEBUG परिभाषित है", "अभी भी सक्रिय", "रनटाइम जाँच", "कंपाइल त्रुटि"],
    "answer_en": "assert expands to nothing if NDEBUG defined",
    "answer_hi": "assert कुछ नहीं में विस्तार करता है यदि NDEBUG परिभाषित है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'offsetof' macro requirement?",
    "question_hi": "'offsetof' मैक्रो आवश्यकता क्या है?",
    "options_en": ["First argument must be structure type, second member name", "Any types", "Only POD", "Only in stddef.h"],
    "options_hi": ["पहला तर्क संरचना प्रकार होना चाहिए, दूसरा सदस्य नाम", "कोई भी प्रकार", "केवल POD", "केवल stddef.h में"],
    "answer_en": "First argument must be structure type, second member name",
    "answer_hi": "पहला तर्क संरचना प्रकार होना चाहिए, दूसरा सदस्य नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is 'va_start' requirement?",
    "question_hi": "'va_start' आवश्यकता क्या है?",
    "options_en": ["Must be called before accessing variadic arguments", "After first arg", "Optional", "Only in stdio"],
    "options_hi": ["वेरिएडिक तर्कों तक पहुंचने से पहले कॉल किया जाना चाहिए", "पहले तर्क के बाद", "वैकल्पिक", "केवल stdio में"],
    "answer_en": "Must be called before accessing variadic arguments",
    "answer_hi": "वेरिएडिक तर्कों तक पहुंचने से पहले कॉल किया जाना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'va_arg' type requirement?",
    "question_hi": "'va_arg' प्रकार आवश्यकता क्या है?",
    "options_en": ["Type must be self-promoting (int, double, pointer)", "Any type", "Only arithmetic", "Only same as passed"],
    "options_hi": ["प्रकार स्व-प्रचारित होना चाहिए (int, double, pointer)", "कोई भी प्रकार", "केवल अंकगणितीय", "केवल पास किए गए के समान"],
    "answer_en": "Type must be self-promoting (int, double, pointer)",
    "answer_hi": "प्रकार स्व-प्रचारित होना चाहिए (int, double, pointer)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is 'setjmp' return value?",
    "question_hi": "'setjmp' रिटर्न मान क्या है?",
    "options_en": ["Returns 0 first time, non-zero when longjmp returns", "Always 0", "Always 1", "Pointer"],
    "options_hi": ["पहली बार 0 लौटाता है, गैर-शून्य जब longjmp लौटता है", "हमेशा 0", "हमेशा 1", "पॉइंटर"],
    "answer_en": "Returns 0 first time, non-zero when longjmp returns",
    "answer_hi": "पहली बार 0 लौटाता है, गैर-शून्य जब longjmp लौटता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'signal handler' restrictions?",
    "question_hi": "'signal handler' प्रतिबंध क्या हैं?",
    "options_en": ["Only async-signal-safe functions allowed", "Any function", "No restrictions", "Only stdio"],
    "options_hi": ["केवल async-signal-safe फ़ंक्शन्स अनुमत", "कोई भी फ़ंक्शन", "कोई प्रतिबंध नहीं", "केवल stdio"],
    "answer_en": "Only async-signal-safe functions allowed",
    "answer_hi": "केवल async-signal-safe फ़ंक्शन्स अनुमत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is 'volatile sig_atomic_t' purpose?",
    "question_hi": "'volatile sig_atomic_t' उद्देश्य क्या है?",
    "options_en": ["Type for variables shared with signal handler", "Any type", "Only int", "No such type"],
    "options_hi": ["सिग्नल हैंडलर के साथ साझा वेरिएबल्स के लिए प्रकार", "कोई भी प्रकार", "केवल int", "ऐसा कोई प्रकार नहीं"],
    "answer_en": "Type for variables shared with signal handler",
    "answer_hi": "सिग्नल हैंडलर के साथ साझा वेरिएबल्स के लिए प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'fenv.h' floating-point environment?",
    "question_hi": "'fenv.h' फ़्लोटिंग-पॉइंट वातावरण क्या है?",
    "options_en": ["Control rounding modes, exceptions", "Only values", "No environment", "Only for double"],
    "options_hi": ["राउंडिंग मोड, अपवाद नियंत्रण", "केवल मान", "कोई वातावरण नहीं", "केवल डबल के लिए"],
    "answer_en": "Control rounding modes, exceptions",
    "answer_hi": "राउंडिंग मोड, अपवाद नियंत्रण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is 'complex.h' macro CMPLX?",
    "question_hi": "'complex.h' मैक्रो CMPLX क्या है?",
    "options_en": ["CMPLX(x, y) creates complex number from real/imag", "No such macro", "Only for double complex", "Runtime function"],
    "options_hi": ["CMPLX(x, y) वास्तविक/काल्पनिक से जटिल संख्या बनाता है", "ऐसा कोई मैक्रो नहीं", "केवल डबल कॉम्प्लेक्स के लिए", "रनटाइम फ़ंक्शन"],
    "answer_en": "CMPLX(x, y) creates complex number from real/imag",
    "answer_hi": "CMPLX(x, y) वास्तविक/काल्पनिक से जटिल संख्या बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'tgmath.h' type-generic math?",
    "question_hi": "'tgmath.h' टाइप-जेनेरिक गणित क्या है?",
    "options_en": ["Macros like sin that work for float, double, long double", "No type-generic", "Only for double", "Runtime dispatch"],
    "options_hi": ["मैक्रो जैसे sin जो float, double, long double के लिए काम करते हैं", "कोई टाइप-जेनेरिक नहीं", "केवल डबल के लिए", "रनटाइम डिस्पैच"],
    "answer_en": "Macros like sin that work for float, double, long double",
    "answer_hi": "मैक्रो जैसे sin जो float, double, long double के लिए काम करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is 'threads.h' in C11?",
    "question_hi": "C11 में 'threads.h' क्या है?",
    "options_en": ["Standard threading API (optional)", "Required", "No threading", "Only POSIX"],
    "options_hi": ["मानक थ्रेडिंग API (वैकल्पिक)", "आवश्यक", "कोई थ्रेडिंग नहीं", "केवल POSIX"],
    "answer_en": "Standard threading API (optional)",
    "answer_hi": "मानक थ्रेडिंग API (वैकल्पिक)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'stdatomic.h' memory orders?",
    "question_hi": "'stdatomic.h' मेमोरी ऑर्डर क्या हैं?",
    "options_en": ["memory_order_relaxed, acquire, release, acq_rel, seq_cst", "Only seq_cst", "No memory orders", "Only for locks"],
    "options_hi": ["memory_order_relaxed, acquire, release, acq_rel, seq_cst", "केवल seq_cst", "कोई मेमोरी ऑर्डर नहीं", "केवल लॉक के लिए"],
    "answer_en": "memory_order_relaxed, acquire, release, acq_rel, seq_cst",
    "answer_hi": "memory_order_relaxed, acquire, release, acq_rel, seq_cst",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is 'atomic_flag' guarantee?",
    "question_hi": "'atomic_flag' गारंटी क्या है?",
    "options_en": ["Lock-free boolean flag", "May be lock-based", "No guarantee", "Only for integers"],
    "options_hi": ["लॉक-मुक्त बूलियन फ्लैग", "लॉक-आधारित हो सकता है", "कोई गारंटी नहीं", "केवल पूर्णांकों के लिए"],
    "answer_en": "Lock-free boolean flag",
    "answer_hi": "लॉक-मुक्त बूलियन फ्लैग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'fence' memory order?",
    "question_hi": "'fence' मेमोरी ऑर्डर क्या है?",
    "options_en": ["atomic_thread_fence imposes ordering on all atomic ops", "Only specific", "No fence", "Only for loads"],
    "options_hi": ["atomic_thread_fence सभी परमाणु ऑप्स पर ऑर्डरिंग लगाता है", "केवल विशिष्ट", "कोई बाड़ नहीं", "केवल लोड के लिए"],
    "answer_en": "atomic_thread_fence imposes ordering on all atomic ops",
    "answer_hi": "atomic_thread_fence सभी परमाणु ऑप्स पर ऑर्डरिंग लगाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is 'kill_dependency' macro?",
    "question_hi": "'kill_dependency' मैक्रो क्या है?",
    "options_en": ["Breaks dependency chain for memory_order_consume", "No such macro", "Kills thread", "Only for release"],
    "options_hi": ["memory_order_consume के लिए निर्भरता श्रृंखला तोड़ता है", "ऐसा कोई मैक्रो नहीं", "थ्रेड को मारता है", "केवल रिलीज के लिए"],
    "answer_en": "Breaks dependency chain for memory_order_consume",
    "answer_hi": "memory_order_consume के लिए निर्भरता श्रृंखला तोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'type-generic macro' for atomic operations?",
    "question_hi": "परमाणु संक्रियाओं के लिए 'type-generic macro' क्या है?",
    "options_en": ["atomic_load, atomic_store, etc. work with any atomic type", "Only specific functions", "No generic", "Only for integers"],
    "options_hi": ["atomic_load, atomic_store, आदि किसी भी परमाणु प्रकार के साथ काम करते हैं", "केवल विशिष्ट फ़ंक्शन", "कोई सामान्य नहीं", "केवल पूर्णांकों के लिए"],
    "answer_en": "atomic_load, atomic_store, etc. work with any atomic type",
    "answer_hi": "atomic_load, atomic_store, आदि किसी भी परमाणु प्रकार के साथ काम करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is 'compare_exchange' weak vs strong?",
    "question_hi": "'compare_exchange' weak बनाम strong क्या है?",
    "options_en": ["Weak may fail spuriously, strong guaranteed to fail only if not equal", "Same", "No difference", "Only weak exists"],
    "options_hi": ["Weak प्रायः विफल हो सकता है, strong केवल तभी विफल होने की गारंटी है जब समान न हो", "समान", "कोई अंतर नहीं", "केवल weak मौजूद है"],
    "answer_en": "Weak may fail spuriously, strong guaranteed to fail only if not equal",
    "answer_hi": "Weak प्रायः विफल हो सकता है, strong केवल तभी विफल होने की गारंटी है जब समान न हो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'signal fence'?",
    "question_hi": "'signal fence' क्या है?",
    "options_en": ["atomic_signal_fence for synchronization with signal handler", "Same as thread fence", "No signal fence", "Only in kernel"],
    "options_hi": ["सिग्नल हैंडलर के साथ समकालिकरण के लिए atomic_signal_fence", "थ्रेड बाड़ के समान", "कोई सिग्नल बाड़ नहीं", "केवल कर्नेल में"],
    "answer_en": "atomic_signal_fence for synchronization with signal handler",
    "answer_hi": "सिग्नल हैंडलर के साथ समकालिकरण के लिए atomic_signal_fence",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is 'ISO/IEC 9899:2018'?",
    "question_hi": "'ISO/IEC 9899:2018' क्या है?",
    "options_en": ["C17 standard (minor revision of C11)", "C11", "C99", "C23"],
    "options_hi": ["C17 मानक (C11 का मामूली संशोधन)", "C11", "C99", "C23"],
    "answer_en": "C17 standard (minor revision of C11)",
    "answer_hi": "C17 मानक (C11 का मामूली संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'Annex K' (Bounds-checking interfaces)?",
    "question_hi": "'Annex K' (Bounds-checking interfaces) क्या है?",
    "options_en": ["Optional safe functions (e.g., scanf_s)", "Required", "No safe functions", "Only for Windows"],
    "options_hi": ["वैकल्पिक सुरक्षित फ़ंक्शन (जैसे, scanf_s)", "आवश्यक", "कोई सुरक्षित फ़ंक्शन नहीं", "केवल Windows के लिए"],
    "answer_en": "Optional safe functions (e.g., scanf_s)",
    "answer_hi": "वैकल्पिक सुरक्षित फ़ंक्शन (जैसे, scanf_s)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is 'Annex L' (Analyzability)?",
    "question_hi": "'Annex L' (Analyzability) क्या है?",
    "options_en": ["Defines subset for easier static analysis", "No annex", "Required", "Only for embedded"],
    "options_hi": ["आसान स्थैतिक विश्लेषण के लिए उपसमुच्चय को परिभाषित करता है", "कोई परिशिष्ट नहीं", "आवश्यक", "केवल एम्बेडेड के लिए"],
    "answer_en": "Defines subset for easier static analysis",
    "answer_hi": "आसान स्थैतिक विश्लेषण के लिए उपसमुच्चय को परिभाषित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'freestanding implementation' requirements?",
    "question_hi": "'freestanding implementation' आवश्यकताएँ क्या हैं?",
    "options_en": ["Only <float.h>, <iso646.h>, <limits.h>, <stdarg.h>, <stdbool.h>, <stddef.h>, <stdint.h>, <stdnoreturn.h> required", "All headers", "No headers", "Only <stdio.h>"],
    "options_hi": ["केवल <float.h>, <iso646.h>, <limits.h>, <stdarg.h>, <stdbool.h>, <stddef.h>, <stdint.h>, <stdnoreturn.h> आवश्यक", "सभी हेडर", "कोई हेडर नहीं", "केवल <stdio.h>"],
    "answer_en": "Only <float.h>, <iso646.h>, <limits.h>, <stdarg.h>, <stdbool.h>, <stddef.h>, <stdint.h>, <stdnoreturn.h> required",
    "answer_hi": "केवल <float.h>, <iso646.h>, <limits.h>, <stdarg.h>, <stdbool.h>, <stddef.h>, <stdint.h>, <stdnoreturn.h> आवश्यक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is 'locale-specific behavior' for isalpha?",
    "question_hi": "isalpha के लिए 'locale-specific behavior' क्या है?",
    "options_en": ["isalpha returns true for locale-specific alphabetic chars", "Only ASCII", "No locale effect", "Only for digits"],
    "options_hi": ["isalpha लोकेल-विशिष्ट वर्णमाला वर्णों के लिए सत्य लौटाता है", "केवल ASCII", "कोई लोकेल प्रभाव नहीं", "केवल अंकों के लिए"],
    "answer_en": "isalpha returns true for locale-specific alphabetic chars",
    "answer_hi": "isalpha लोकेल-विशिष्ट वर्णमाला वर्णों के लिए सत्य लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'multibyte character' vs 'wide character'?",
    "question_hi": "'multibyte character' बनाम 'wide character' क्या है?",
    "options_en": ["Multibyte: variable-length encoding (e.g., UTF-8); Wide: fixed-width (e.g., wchar_t)", "Same", "No difference", "Only wide"],
    "options_hi": ["मल्टीबाइट: परिवर्तनशील लंबाई एन्कोडिंग (जैसे, UTF-8); वाइड: निश्चित-चौड़ाई (जैसे, wchar_t)", "समान", "कोई अंतर नहीं", "केवल वाइड"],
    "answer_en": "Multibyte: variable-length encoding (e.g., UTF-8); Wide: fixed-width (e.g., wchar_t)",
    "answer_hi": "मल्टीबाइट: परिवर्तनशील लंबाई एन्कोडिंग (जैसे, UTF-8); वाइड: निश्चित-चौड़ाई (जैसे, wchar_t)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is 'shift states' in multibyte characters?",
    "question_hi": "मल्टीबाइट वर्ण में 'shift states' क्या है?",
    "options_en": ["Some encodings require shift sequences (e.g., ISO-2022)", "No shift states", "Only for EBCDIC", "Only UTF-8"],
    "options_hi": ["कुछ एन्कोडिंग को शिफ्ट अनुक्रम की आवश्यकता होती है (जैसे, ISO-2022)", "कोई शिफ्ट स्टेट नहीं", "केवल EBCDIC के लिए", "केवल UTF-8"],
    "answer_en": "Some encodings require shift sequences (e.g., ISO-2022)",
    "answer_hi": "कुछ एन्कोडिंग को शिफ्ट अनुक्रम की आवश्यकता होती है (जैसे, ISO-2022)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'restrict' and pointer provenance?",
    "question_hi": "'restrict' और पॉइंटर provenance क्या है?",
    "options_en": ["restrict helps with provenance-based optimization", "No help", "Hinders", "Only for arrays"],
    "options_hi": ["restrict provenance-आधारित ऑप्टिमाइज़ेशन में मदद करता है", "कोई मदद नहीं", "बाधा डालता है", "केवल ऐरे के लिए"],
    "answer_en": "restrict helps with provenance-based optimization",
    "answer_hi": "restrict provenance-आधारित ऑप्टिमाइज़ेशन में मदद करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is 'pointer arithmetic' on null pointer?",
    "question_hi": "नल पॉइंटर पर 'pointer arithmetic' क्या है?",
    "options_en": ["NULL + 0 is allowed, NULL + n (n != 0) is undefined", "Always allowed", "Never allowed", "Implementation-defined"],
    "options_hi": ["NULL + 0 अनुमत है, NULL + n (n != 0) अपरिभाषित है", "हमेशा अनुमति", "कभी अनुमति नहीं", "कार्यान्वयन-परिभाषित"],
    "answer_en": "NULL + 0 is allowed, NULL + n (n != 0) is undefined",
    "answer_hi": "NULL + 0 अनुमत है, NULL + n (n != 0) अपरिभाषित है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'object representation' vs 'value representation'?",
    "question_hi": "'object representation' बनाम 'value representation' क्या है?",
    "options_en": ["Object: all bits; Value: bits that matter (excluding padding/trap)", "Same", "No difference", "Only for structs"],
    "options_hi": ["ऑब्जेक्ट: सभी बिट्स; मान: महत्वपूर्ण बिट्स (पैडिंग/ट्रैप को छोड़कर)", "समान", "कोई अंतर नहीं", "केवल संरचनाओं के लिए"],
    "answer_en": "Object: all bits; Value: bits that matter (excluding padding/trap)",
    "answer_hi": "ऑब्जेक्ट: सभी बिट्स; मान: महत्वपूर्ण बिट्स (पैडिंग/ट्रैप को छोड़कर)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is 'effective type' of const object?",
    "question_hi": "const ऑब्जेक्ट का 'effective type' क्या है?",
    "options_en": ["const-qualified type", "Non-const type", "No effective type", "Depends on use"],
    "options_hi": ["const-योग्य प्रकार", "गैर-const प्रकार", "कोई प्रभावी प्रकार नहीं", "उपयोग पर निर्भर करता है"],
    "answer_en": "const-qualified type",
    "answer_hi": "const-योग्य प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'atomic_compare_exchange' memory order requirements?",
    "question_hi": "'atomic_compare_exchange' मेमोरी ऑर्डर आवश्यकताएँ क्या हैं?",
    "options_en": ["Failure memory order cannot be stronger than success", "Any orders", "Same order", "No requirements"],
    "options_hi": ["विफलता मेमोरी ऑर्डर सफलता से मजबूत नहीं हो सकता", "कोई भी ऑर्डर", "समान ऑर्डर", "कोई आवश्यकता नहीं"],
    "answer_en": "Failure memory order cannot be stronger than success",
    "answer_hi": "विफलता मेमोरी ऑर्डर सफलता से मजबूत नहीं हो सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is 'thread_local' storage duration?",
    "question_hi": "'thread_local' भंडारण अवधि क्या है?",
    "options_en": ["Object exists for thread lifetime", "Process lifetime", "Function lifetime", "Block lifetime"],
    "options_hi": ["ऑब्जेक्ट थ्रेड आयु के लिए मौजूद है", "प्रक्रिया आयु", "फ़ंक्शन आयु", "ब्लॉक आयु"],
    "answer_en": "Object exists for thread lifetime",
    "answer_hi": "ऑब्जेक्ट थ्रेड आयु के लिए मौजूद है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'forward progress guarantee' for threads?",
    "question_hi": "थ्रेड्स के लिए 'forward progress guarantee' क्या है?",
    "options_en": ["Thread will eventually make progress (not deadlock/livelock)", "No guarantee", "May deadlock", "Only main thread"],
    "options_hi": ["थ्रेड अंततः प्रगति करेगा (डेडलॉक/लाइवलॉक नहीं)", "कोई गारंटी नहीं", "डेडलॉक हो सकता है", "केवल मुख्य थ्रेड"],
    "answer_en": "Thread will eventually make progress (not deadlock/livelock)",
    "answer_hi": "थ्रेड अंततः प्रगति करेगा (डेडलॉक/लाइवलॉक नहीं)",
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