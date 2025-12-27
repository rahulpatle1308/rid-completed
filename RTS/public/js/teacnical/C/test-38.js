const questions= [
  {
    "num": 1,
    "question_en": "What is the output of: #include<stdio.h> int main() { int i = 0; printf(\"%d %d\", i, i++); return 0; }",
    "question_hi": "आउटपुट क्या है: #include<stdio.h> int main() { int i = 0; printf(\"%d %d\", i, i++); return 0; }",
    "options_en": ["Undefined behavior", "0 0", "0 1", "1 0"],
    "options_hi": ["अपरिभाषित व्यवहार", "0 0", "0 1", "1 0"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is 'strict aliasing rule' violation in this code: int x = 10; float *p = (float*)&x; *p = 20.0;",
    "question_hi": "इस कोड में 'strict aliasing rule' उल्लंघन क्या है: int x = 10; float *p = (float*)&x; *p = 20.0;",
    "options_en": ["Accessing int object through float* pointer", "No violation", "Only if x is const", "Only in C++"],
    "options_hi": ["int ऑब्जेक्ट को float* पॉइंटर के माध्यम से एक्सेस करना", "कोई उल्लंघन नहीं", "केवल यदि x const है", "केवल C++ में"],
    "answer_en": "Accessing int object through float* pointer",
    "answer_hi": "int ऑब्जेक्ट को float* पॉइंटर के माध्यम से एक्सेस करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does 'restrict' keyword guarantee to compiler?",
    "question_hi": "'restrict' कीवर्ड कंपाइलर को क्या गारंटी देता है?",
    "options_en": ["Pointers don't alias - enables aggressive optimization", "Memory safety", "Thread safety", "No guarantee"],
    "options_hi": ["पॉइंटर्स एलियास नहीं करते - आक्रामक ऑप्टिमाइज़ेशन सक्षम करता है", "मेमोरी सुरक्षा", "थ्रेड सुरक्षा", "कोई गारंटी नहीं"],
    "answer_en": "Pointers don't alias - enables aggressive optimization",
    "answer_hi": "पॉइंटर्स एलियास नहीं करते - आक्रामक ऑप्टिमाइज़ेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is 'effective type' in C11 strict aliasing rules?",
    "question_hi": "C11 strict aliasing नियमों में 'effective type' क्या है?",
    "options_en": ["The type of an object as determined by its last store operation", "Declared type", "Always char", "No effective type"],
    "options_hi": ["ऑब्जेक्ट का प्रकार जैसा कि उसकी अंतिम स्टोर संक्रिया द्वारा निर्धारित किया गया है", "घोषित प्रकार", "हमेशा char", "कोई प्रभावी प्रकार नहीं"],
    "answer_en": "The type of an object as determined by its last store operation",
    "answer_hi": "ऑब्जेक्ट का प्रकार जैसा कि उसकी अंतिम स्टोर संक्रिया द्वारा निर्धारित किया गया है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is the result of: int i = 5; int j = (++i) + (++i); printf(\"%d\", j);",
    "question_hi": "परिणाम क्या है: int i = 5; int j = (++i) + (++i); printf(\"%d\", j);",
    "options_en": ["Undefined behavior", "13", "14", "12"],
    "options_hi": ["अपरिभाषित व्यवहार", "13", "14", "12"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is 'trap representation' for signed integers?",
    "question_hi": "साइन्ड इंटीजर्स के लिए 'trap representation' क्या है?",
    "options_en": ["Bit pattern that causes undefined behavior when read", "Zero", "Maximum value", "Minimum value"],
    "options_hi": ["बिट पैटर्न जो पढ़ने पर अपरिभाषित व्यवहार का कारण बनता है", "शून्य", "अधिकतम मान", "न्यूनतम मान"],
    "answer_en": "Bit pattern that causes undefined behavior when read",
    "answer_hi": "बिट पैटर्न जो पढ़ने पर अपरिभाषित व्यवहार का कारण बनता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is the purpose of 'volatile' in signal handlers?",
    "question_hi": "सिग्नल हैंडलर्स में 'volatile' का उद्देश्य क्या है?",
    "options_en": ["Prevent compiler from caching variable values across signal handler calls", "Make variable constant", "Increase speed", "Reduce memory usage"],
    "options_hi": ["सिग्नल हैंडलर कॉल में वेरिएबल मानों को कैश करने से कंपाइलर को रोकना", "वेरिएबल को कॉन्स्टेंट बनाना", "गति बढ़ाना", "मेमोरी उपयोग कम करना"],
    "answer_en": "Prevent compiler from caching variable values across signal handler calls",
    "answer_hi": "सिग्नल हैंडलर कॉल में वेरिएबल मानों को कैश करने से कंपाइलर को रोकना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is 'as-if rule' in compiler optimization?",
    "question_hi": "कंपाइलर ऑप्टिमाइज़ेशन में 'as-if rule' क्या है?",
    "options_en": ["Compiler can reorder/optimize as long as observable behavior is same", "No optimization allowed", "Only arithmetic optimization", "Only loop optimization"],
    "options_hi": ["कंपाइलर पुनःक्रम/ऑप्टिमाइज़ कर सकता है जब तक कि अवलोकनीय व्यवहार समान है", "कोई ऑप्टिमाइज़ेशन अनुमति नहीं", "केवल अंकगणितीय ऑप्टिमाइज़ेशन", "केवल लूप ऑप्टिमाइज़ेशन"],
    "answer_en": "Compiler can reorder/optimize as long as observable behavior is same",
    "answer_hi": "कंपाइलर पुनःक्रम/ऑप्टिमाइज़ कर सकता है जब तक कि अवलोकनीय व्यवहार समान है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is 'indeterminate value' for uninitialized static variables?",
    "question_hi": "अप्रारंभिक स्टैटिक वेरिएबल्स के लिए 'indeterminate value' क्या है?",
    "options_en": ["Zero (initialized by default)", "Garbage value", "Trap representation", "Implementation-defined"],
    "options_hi": ["शून्य (डिफ़ॉल्ट रूप से आरंभिक)", "कचरा मान", "ट्रैप प्रतिनिधित्व", "कार्यान्वयन-परिभाषित"],
    "answer_en": "Zero (initialized by default)",
    "answer_hi": "शून्य (डिफ़ॉल्ट रूप से आरंभिक)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is 'signaling NaN' vs 'quiet NaN' in floating point?",
    "question_hi": "फ़्लोटिंग पॉइंट में 'signaling NaN' बनाम 'quiet NaN' क्या है?",
    "options_en": ["sNaN raises exception, qNaN propagates silently", "Both raise exceptions", "Neither raises exception", "Only qNaN raises exception"],
    "options_hi": ["sNaN अपवाद उठाता है, qNaN चुपचाप प्रचारित होता है", "दोनों अपवाद उठाते हैं", "कोई भी अपवाद नहीं उठाता", "केवल qNaN अपवाद उठाता है"],
    "answer_en": "sNaN raises exception, qNaN propagates silently",
    "answer_hi": "sNaN अपवाद उठाता है, qNaN चुपचाप प्रचारित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is 'type punning' using union allowed in C?",
    "question_hi": "C में यूनियन का उपयोग कर 'type punning' अनुमत है?",
    "options_en": ["Implementation-defined behavior", "Always defined", "Always undefined", "Only in C99"],
    "options_hi": ["कार्यान्वयन-परिभाषित व्यवहार", "हमेशा परिभाषित", "हमेशा अपरिभाषित", "केवल C99 में"],
    "answer_en": "Implementation-defined behavior",
    "answer_hi": "कार्यान्वयन-परिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the output of: int a = 1; int b = a++ + a++; printf(\"%d\", b);",
    "question_hi": "आउटपुट क्या है: int a = 1; int b = a++ + a++; printf(\"%d\", b);",
    "options_en": ["Undefined behavior", "3", "4", "2"],
    "options_hi": ["अपरिभाषित व्यवहार", "3", "4", "2"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What does 'const volatile' mean?",
    "question_hi": "'const volatile' का क्या अर्थ है?",
    "options_en": ["Variable cannot be modified by program but can change externally", "Constant and cannot change", "Volatile but constant", "Redundant"],
    "options_hi": ["वेरिएबल प्रोग्राम द्वारा संशोधित नहीं किया जा सकता लेकिन बाहरी रूप से बदल सकता है", "स्थिर और परिवर्तित नहीं हो सकता", "volatile लेकिन constant", "अतिरेक"],
    "answer_en": "Variable cannot be modified by program but can change externally",
    "answer_hi": "वेरिएबल प्रोग्राम द्वारा संशोधित नहीं किया जा सकता लेकिन बाहरी रूप से बदल सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is 'strict aliasing' exception for char pointers?",
    "question_hi": "char पॉइंटर्स के लिए 'strict aliasing' अपवाद क्या है?",
    "options_en": ["char* can alias any type", "Cannot alias", "Only signed char", "Only unsigned char"],
    "options_hi": ["char* किसी भी प्रकार का एलियास कर सकता है", "एलियास नहीं कर सकता", "केवल signed char", "केवल unsigned char"],
    "answer_en": "char* can alias any type",
    "answer_hi": "char* किसी भी प्रकार का एलियास कर सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the result of: float f = 0.1; if (f == 0.1) printf(\"Equal\"); else printf(\"Not equal\");",
    "question_hi": "परिणाम क्या है: float f = 0.1; if (f == 0.1) printf(\"Equal\"); else printf(\"Not equal\");",
    "options_en": ["Not equal (due to precision differences)", "Equal", "Compile error", "Runtime error"],
    "options_hi": ["बराबर नहीं (सटीकता अंतर के कारण)", "बराबर", "कंपाइल त्रुटि", "रनटाइम त्रुटि"],
    "answer_en": "Not equal (due to precision differences)",
    "answer_hi": "बराबर नहीं (सटीकता अंतर के कारण)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is 'sequence point' in expression evaluation?",
    "question_hi": "एक्सप्रेशन मूल्यांकन में 'sequence point' क्या है?",
    "options_en": ["Point where all side effects are complete before proceeding", "No such concept", "Only in loops", "Only in function calls"],
    "options_hi": ["बिंदु जहाँ आगे बढ़ने से पहले सभी साइड इफेक्ट्स पूरे होते हैं", "ऐसी कोई अवधारणा नहीं", "केवल लूप में", "केवल फ़ंक्शन कॉल में"],
    "answer_en": "Point where all side effects are complete before proceeding",
    "answer_hi": "बिंदु जहाँ आगे बढ़ने से पहले सभी साइड इफेक्ट्स पूरे होते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is 'restrict' keyword usage in function parameters?",
    "question_hi": "फ़ंक्शन पैरामीटर्स में 'restrict' कीवर्ड उपयोग क्या है?",
    "options_en": ["Promises pointers don't alias, enabling optimization", "Restricts pointer modification", "Makes pointer constant", "No special meaning"],
    "options_hi": ["वादा करता है कि पॉइंटर्स एलियास नहीं करते, ऑप्टिमाइज़ेशन सक्षम करता है", "पॉइंटर संशोधन को प्रतिबंधित करता है", "पॉइंटर को कॉन्स्टेंट बनाता है", "कोई विशेष अर्थ नहीं"],
    "answer_en": "Promises pointers don't alias, enabling optimization",
    "answer_hi": "वादा करता है कि पॉइंटर्स एलियास नहीं करते, ऑप्टिमाइज़ेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is 'type generic math' in tgmath.h?",
    "question_hi": "tgmath.h में 'type generic math' क्या है?",
    "options_en": ["Macros that work with float, double, long double automatically", "Only double math", "No such feature", "Only C99"],
    "options_hi": ["मैक्रो जो स्वचालित रूप से float, double, long double के साथ काम करते हैं", "केवल डबल गणित", "ऐसी कोई सुविधा नहीं", "केवल C99"],
    "answer_en": "Macros that work with float, double, long double automatically",
    "answer_hi": "मैक्रो जो स्वचालित रूप से float, double, long double के साथ काम करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is 'flexible array member' in structure?",
    "question_hi": "स्ट्रक्चर में 'flexible array member' क्या है?",
    "options_en": ["Array without size as last member, allocated separately", "Fixed size array", "Pointer to array", "No such feature"],
    "options_hi": ["अंतिम सदस्य के रूप में बिना आकार की ऐरे, अलग से आवंटित", "निश्चित आकार ऐरे", "ऐरे का पॉइंटर", "ऐसी कोई सुविधा नहीं"],
    "answer_en": "Array without size as last member, allocated separately",
    "answer_hi": "अंतिम सदस्य के रूप में बिना आकार की ऐरे, अलग से आवंटित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the output of: printf(\"%zu\", sizeof(main()));",
    "question_hi": "आउटपुट क्या है: printf(\"%zu\", sizeof(main()));",
    "options_en": ["Compile error (sizeof on function)", "Size of int", "Size of pointer", "Undefined"],
    "options_hi": ["कंपाइल त्रुटि (फ़ंक्शन पर sizeof)", "int का आकार", "पॉइंटर का आकार", "अपरिभाषित"],
    "answer_en": "Compile error (sizeof on function)",
    "answer_hi": "कंपाइल त्रुटि (फ़ंक्शन पर sizeof)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is 'dead store elimination' optimization?",
    "question_hi": "'dead store elimination' ऑप्टिमाइज़ेशन क्या है?",
    "options_en": ["Removing stores to variables never read later", "Eliminating dead code", "Removing unused variables", "All of these"],
    "options_hi": ["बाद में कभी न पढ़े जाने वाले वेरिएबल्स को स्टोर हटाना", "डेड कोड को हटाना", "अनुपयोगी वेरिएबल्स हटाना", "ये सभी"],
    "answer_en": "Removing stores to variables never read later",
    "answer_hi": "बाद में कभी न पढ़े जाने वाले वेरिएबल्स को स्टोर हटाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is 'common subexpression elimination' optimization?",
    "question_hi": "'common subexpression elimination' ऑप्टिमाइज़ेशन क्या है?",
    "options_en": ["Reusing computed value of identical subexpressions", "Removing common code", "Eliminating loops", "None of these"],
    "options_hi": ["समान उपव्यंजकों के परिकलित मान का पुनः उपयोग", "सामान्य कोड हटाना", "लूप हटाना", "इनमें से कोई नहीं"],
    "answer_en": "Reusing computed value of identical subexpressions",
    "answer_hi": "समान उपव्यंजकों के परिकलित मान का पुनः उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is 'loop invariant code motion'?",
    "question_hi": "'loop invariant code motion' क्या है?",
    "options_en": ["Moving constant expressions outside loop", "Moving loops", "Eliminating loops", "Unrolling loops"],
    "options_hi": ["लूप के बाहर स्थिर व्यंजक ले जाना", "लूप ले जाना", "लूप हटाना", "लूप अनरोल करना"],
    "answer_en": "Moving constant expressions outside loop",
    "answer_hi": "लूप के बाहर स्थिर व्यंजक ले जाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is 'tail call optimization' (TCO)?",
    "question_hi": "'tail call optimization' (TCO) क्या है?",
    "options_en": ["Reusing stack frame for tail recursive calls", "Eliminating tail recursion", "Unrolling tail recursion", "None of these"],
    "options_hi": ["टेल रिकर्सिव कॉल्स के लिए स्टैक फ्रेम पुनः उपयोग", "टेल रिकर्सन हटाना", "टेल रिकर्सन अनरोल करना", "इनमें से कोई नहीं"],
    "answer_en": "Reusing stack frame for tail recursive calls",
    "answer_hi": "टेल रिकर्सिव कॉल्स के लिए स्टैक फ्रेम पुनः उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is 'pointer provenance' concept?",
    "question_hi": "'pointer provenance' अवधारणा क्या है?",
    "options_en": ["Information about pointer origin for optimization", "Pointer type", "Pointer value", "Pointer size"],
    "options_hi": ["ऑप्टिमाइज़ेशन के लिए पॉइंटर उत्पत्ति के बारे में जानकारी", "पॉइंटर प्रकार", "पॉइंटर मान", "पॉइंटर आकार"],
    "answer_en": "Information about pointer origin for optimization",
    "answer_hi": "ऑप्टिमाइज़ेशन के लिए पॉइंटर उत्पत्ति के बारे में जानकारी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is 'strict overflow' compiler flag?",
    "question_hi": "'strict overflow' कंपाइलर फ्लैग क्या है?",
    "options_en": ["Assumes no signed overflow for optimization", "Checks for overflow", "Allows overflow", "None of these"],
    "options_hi": ["ऑप्टिमाइज़ेशन के लिए कोई साइन्ड ओवरफ्लो नहीं मानता", "ओवरफ्लो जाँचता है", "ओवरफ्लो की अनुमति देता है", "इनमें से कोई नहीं"],
    "answer_en": "Assumes no signed overflow for optimization",
    "answer_hi": "ऑप्टिमाइज़ेशन के लिए कोई साइन्ड ओवरफ्लो नहीं मानता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is 'profile-guided optimization' (PGO)?",
    "question_hi": "'profile-guided optimization' (PGO) क्या है?",
    "options_en": ["Uses runtime profile data for optimization", "Static optimization", "No profiling", "Only for debugging"],
    "options_hi": ["ऑप्टिमाइज़ेशन के लिए रनटाइम प्रोफाइल डेटा का उपयोग करता है", "स्थैतिक ऑप्टिमाइज़ेशन", "कोई प्रोफाइलिंग नहीं", "केवल डीबगिंग के लिए"],
    "answer_en": "Uses runtime profile data for optimization",
    "answer_hi": "ऑप्टिमाइज़ेशन के लिए रनटाइम प्रोफाइल डेटा का उपयोग करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is 'link-time optimization' (LTO)?",
    "question_hi": "'link-time optimization' (LTO) क्या है?",
    "options_en": ["Optimization across object files during linking", "Only within files", "No cross-file optimization", "Only for libraries"],
    "options_hi": ["लिंकिंग के दौरान ऑब्जेक्ट फ़ाइलों में ऑप्टिमाइज़ेशन", "केवल फ़ाइलों के भीतर", "कोई क्रॉस-फ़ाइल ऑप्टिमाइज़ेशन नहीं", "केवल लाइब्रेरी के लिए"],
    "answer_en": "Optimization across object files during linking",
    "answer_hi": "लिंकिंग के दौरान ऑब्जेक्ट फ़ाइलों में ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is 'interprocedural optimization' (IPO)?",
    "question_hi": "'interprocedural optimization' (IPO) क्या है?",
    "options_en": ["Optimization across function boundaries", "Only within function", "No cross-function", "Only for small functions"],
    "options_hi": ["फ़ंक्शन सीमाओं में ऑप्टिमाइज़ेशन", "केवल फ़ंक्शन के भीतर", "कोई क्रॉस-फ़ंक्शन नहीं", "केवल छोटे फ़ंक्शन के लिए"],
    "answer_en": "Optimization across function boundaries",
    "answer_hi": "फ़ंक्शन सीमाओं में ऑप्टिमाइज़ेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is 'vectorization' optimization?",
    "question_hi": "'vectorization' ऑप्टिमाइज़ेशन क्या है?",
    "options_en": ["Using SIMD instructions for parallel operations", "Only scalar operations", "No parallelism", "Only for floats"],
    "options_hi": ["समानांतर संक्रियाओं के लिए SIMD निर्देशों का उपयोग", "केवल अदिश संक्रियाएं", "कोई समानता नहीं", "केवल फ़्लोट्स के लिए"],
    "answer_en": "Using SIMD instructions for parallel operations",
    "answer_hi": "समानांतर संक्रियाओं के लिए SIMD निर्देशों का उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is 'speculative execution' at compiler level?",
    "question_hi": "कंपाइलर स्तर पर 'speculative execution' क्या है?",
    "options_en": ["Execute instructions before knowing if needed", "Always execute", "Never speculate", "Only for branches"],
    "options_hi": ["आवश्यकता जानने से पहले निर्देश निष्पादित करें", "हमेशा निष्पादित करें", "कभी अटकल नहीं", "केवल शाखाओं के लिए"],
    "answer_en": "Execute instructions before knowing if needed",
    "answer_hi": "आवश्यकता जानने से पहले निर्देश निष्पादित करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is 'function cloning' optimization?",
    "question_hi": "'function cloning' ऑप्टिमाइज़ेशन क्या है?",
    "options_en": ["Create specialized version for specific arguments", "Duplicate function", "Remove function", "Rename function"],
    "options_hi": ["विशिष्ट तर्कों के लिए विशिष्ट संस्करण बनाएं", "फ़ंक्शन डुप्लिकेट करें", "फ़ंक्शन हटाएं", "फ़ंक्शन का नाम बदलें"],
    "answer_en": "Create specialized version for specific arguments",
    "answer_hi": "विशिष्ट तर्कों के लिए विशिष्ट संस्करण बनाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is 'global value numbering' (GVN)?",
    "question_hi": "'global value numbering' (GVN) क्या है?",
    "options_en": ["Assign unique numbers to equivalent expressions globally", "Local numbering", "No numbering", "Random numbering"],
    "options_hi": ["समकक्ष व्यंजकों को विश्व स्तर पर अद्वितीय संख्या निर्दिष्ट करें", "स्थानीय नंबरिंग", "कोई नंबरिंग नहीं", "यादृच्छिक नंबरिंग"],
    "answer_en": "Assign unique numbers to equivalent expressions globally",
    "answer_hi": "समकक्ष व्यंजकों को विश्व स्तर पर अद्वितीय संख्या निर्दिष्ट करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is 'scalar replacement of aggregates'?",
    "question_hi": "'scalar replacement of aggregates' क्या है?",
    "options_en": ["Replace struct/array with individual scalars", "No replacement", "Only for arrays", "Only for structs"],
    "options_hi": ["संरचना/ऐरे को व्यक्तिगत अदिश से बदलें", "कोई प्रतिस्थापन नहीं", "केवल ऐरे के लिए", "केवल संरचनाओं के लिए"],
    "answer_en": "Replace struct/array with individual scalars",
    "answer_hi": "संरचना/ऐरे को व्यक्तिगत अदिश से बदलें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is 'induction variable elimination'?",
    "question_hi": "'induction variable elimination' क्या है?",
    "options_en": ["Replace loop induction variable with simpler computation", "No elimination", "Only for constants", "Random replacement"],
    "options_hi": ["लूप प्रेरण चर को सरल गणना से बदलें", "कोई उन्मूलन नहीं", "केवल स्थिरांक के लिए", "यादृच्छिक प्रतिस्थापन"],
    "answer_en": "Replace loop induction variable with simpler computation",
    "answer_hi": "लूप प्रेरण चर को सरल गणना से बदलें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is 'loop versioning' optimization?",
    "question_hi": "'loop versioning' ऑप्टिमाइज़ेशन क्या है?",
    "options_en": ["Create multiple versions for different runtime conditions", "Single version", "No versioning", "Only for bounds"],
    "options_hi": ["विभिन्न रनटाइम स्थितियों के लिए कई संस्करण बनाएं", "एकल संस्करण", "कोई संस्करण नहीं", "केवल सीमाओं के लिए"],
    "answer_en": "Create multiple versions for different runtime conditions",
    "answer_hi": "विभिन्न रनटाइम स्थितियों के लिए कई संस्करण बनाएं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What does 'strict aliasing' allow compiler to assume about pointer types?",
    "question_hi": "'strict aliasing' कंपाइलर को पॉइंटर प्रकारों के बारे में क्या मानने की अनुमति देता है?",
    "options_en": ["Pointers of different types don't point to same memory", "Pointers always alias", "Only char* aliasing", "No assumptions"],
    "options_hi": ["विभिन्न प्रकार के पॉइंटर्स एक ही मेमोरी की ओर इशारा नहीं करते", "पॉइंटर्स हमेशा एलियास करते हैं", "केवल char* एलियासिंग", "कोई धारणा नहीं"],
    "answer_en": "Pointers of different types don't point to same memory",
    "answer_hi": "विभिन्न प्रकार के पॉइंटर्स एक ही मेमोरी की ओर इशारा नहीं करते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is 'restrict' keyword impact on compiler optimization?",
    "question_hi": "कंपाइलर ऑप्टिमाइज़ेशन पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables aggressive optimization by promising no pointer aliasing", "No impact", "Slows down code", "Only memory safety"],
    "options_hi": ["कोई पॉइंटर एलियासिंग नहीं का वादा करके आक्रामक ऑप्टिमाइज़ेशन सक्षम करता है", "कोई प्रभाव नहीं", "कोड धीमा करता है", "केवल मेमोरी सुरक्षा"],
    "answer_en": "Enables aggressive optimization by promising no pointer aliasing",
    "answer_hi": "कोई पॉइंटर एलियासिंग नहीं का वादा करके आक्रामक ऑप्टिमाइज़ेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is the result of: int i = 1; int arr[] = {i++, i++, i++};",
    "question_hi": "परिणाम क्या है: int i = 1; int arr[] = {i++, i++, i++};",
    "options_en": ["Undefined behavior (order of evaluation unspecified)", "{1, 2, 3}", "{3, 2, 1}", "Compile error"],
    "options_hi": ["अपरिभाषित व्यवहार (मूल्यांकन का क्रम अनिर्दिष्ट)", "{1, 2, 3}", "{3, 2, 1}", "कंपाइल त्रुटि"],
    "answer_en": "Undefined behavior (order of evaluation unspecified)",
    "answer_hi": "अपरिभाषित व्यवहार (मूल्यांकन का क्रम अनिर्दिष्ट)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is 'effective type' rule for dynamically allocated memory?",
    "question_hi": "डायनामिक रूप से आवंटित मेमोरी के लिए 'effective type' नियम क्या है?",
    "options_en": ["Type becomes the type of the first write to that memory", "Always char", "Remains indeterminate", "No effective type"],
    "options_hi": ["प्रकार उस मेमोरी के पहले लेखन का प्रकार बन जाता है", "हमेशा char", "अनिर्धारित रहता है", "कोई प्रभावी प्रकार नहीं"],
    "answer_en": "Type becomes the type of the first write to that memory",
    "answer_hi": "प्रकार उस मेमोरी के पहले लेखन का प्रकार बन जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What does 'strict aliasing' rule say about type punning via union?",
    "question_hi": "'strict aliasing' नियम यूनियन के माध्यम से टाइप पनिंग के बारे में क्या कहता है?",
    "options_en": ["Allowed but implementation-defined", "Always undefined", "Always well-defined", "Only in C++"],
    "options_hi": ["अनुमत लेकिन कार्यान्वयन-परिभाषित", "हमेशा अपरिभाषित", "हमेशा अच्छी तरह से परिभाषित", "केवल C++ में"],
    "answer_en": "Allowed but implementation-defined",
    "answer_hi": "अनुमत लेकिन कार्यान्वयन-परिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is the result of: int x = 1; x = x++ + ++x;",
    "question_hi": "परिणाम क्या है: int x = 1; x = x++ + ++x;",
    "options_en": ["Undefined behavior (multiple unsequenced modifications)", "4", "5", "3"],
    "options_hi": ["अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)", "4", "5", "3"],
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is 'restrict' keyword scope within a block?",
    "question_hi": "ब्लॉक के भीतर 'restrict' कीवर्ड स्कोप क्या है?",
    "options_en": ["Applies only within block where declared", "Global scope", "File scope", "Function scope"],
    "options_hi": ["केवल उस ब्लॉक में लागू होता है जहां घोषित किया गया है", "वैश्विक क्षेत्र", "फ़ाइल क्षेत्र", "फ़ंक्शन क्षेत्र"],
    "answer_en": "Applies only within block where declared",
    "answer_hi": "केवल उस ब्लॉक में लागू होता है जहां घोषित किया गया है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is 'trap representation' for floating-point types?",
    "question_hi": "फ़्लोटिंग-पॉइंट प्रकारों के लिए 'trap representation' क्या है?",
    "options_en": ["Signaling NaN (sNaN)", "Quiet NaN (qNaN)", "Infinity", "Zero"],
    "options_hi": ["सिग्नलिंग NaN (sNaN)", "क्वाएट NaN (qNaN)", "अनंत", "शून्य"],
    "answer_en": "Signaling NaN (sNaN)",
    "answer_hi": "सिग्नलिंग NaN (sNaN)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the result of: float f = 1.0/0.0; printf(\"%f\", f);",
    "question_hi": "परिणाम क्या है: float f = 1.0/0.0; printf(\"%f\", f);",
    "options_en": "inf (infinity)",
    "options_hi": "inf (अनंत)",
    "answer_en": "inf (infinity)",
    "answer_hi": "inf (अनंत)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is 'strict aliasing' rule for accessing struct members via different pointer types?",
    "question_hi": "विभिन्न पॉइंटर प्रकारों के माध्यम से संरचना सदस्यों को एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Accessing via char* is allowed, otherwise undefined", "Always allowed", "Never allowed", "Only via int*"],
    "options_hi": ["char* के माध्यम से एक्सेस करने की अनुमति है, अन्यथा अपरिभाषित", "हमेशा अनुमति है", "कभी अनुमति नहीं", "केवल int* के माध्यम से"],
    "answer_en": "Accessing via char* is allowed, otherwise undefined",
    "answer_hi": "char* के माध्यम से एक्सेस करने की अनुमति है, अन्यथा अपरिभाषित",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is 'restrict' keyword usage with multi-dimensional arrays?",
    "question_hi": "बहु-आयामी सरणियों के साथ 'restrict' कीवर्ड उपयोग क्या है?",
    "options_en": ["Promises rows don't overlap", "No special meaning", "Only for 1D arrays", "Prevents all aliasing"],
    "options_hi": ["वादा करता है कि पंक्तियाँ ओवरलैप नहीं करतीं", "कोई विशेष अर्थ नहीं", "केवल 1D सरणियों के लिए", "सभी एलियासिंग रोकता है"],
    "answer_en": "Promises rows don't overlap",
    "answer_hi": "वादा करता है कि पंक्तियाँ ओवरलैप नहीं करतीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the result of: int i = 0; printf(\"%d %d\", i++, i++);",
    "question_hi": "परिणाम क्या है: int i = 0; printf(\"%d %d\", i++, i++);",
    "options_en": ["Undefined behavior (order of evaluation unspecified)", "0 1", "1 0", "0 0"],
    "options_hi": ["अपरिभाषित व्यवहार (मूल्यांकन का क्रम अनिर्दिष्ट)", "0 1", "1 0", "0 0"],
    "answer_en": "Undefined behavior (order of evaluation unspecified)",
    "answer_hi": "अपरिभाषित व्यवहार (मूल्यांकन का क्रम अनिर्दिष्ट)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is 'strict aliasing' rule for accessing same memory via signed/unsigned versions of same type?",
    "question_hi": "एक ही प्रकार के साइन्ड/अनसाइन्ड संस्करणों के माध्यम से एक ही मेमोरी एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed (same type category)", "Not allowed", "Only signed allowed", "Only unsigned allowed"],
    "options_hi": ["अनुमत (एक ही प्रकार श्रेणी)", "अनुमति नहीं है", "केवल साइन्ड अनुमत", "केवल अनसाइन्ड अनुमत"],
    "answer_en": "Allowed (same type category)",
    "answer_hi": "अनुमत (एक ही प्रकार श्रेणी)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the result of: int a = 1; int b = a++ + a++ + a++;",
    "question_hi": "परिणाम क्या है: int a = 1; int b = a++ + a++ + a++;",
    "options_en": ["Undefined behavior (multiple unsequenced modifications)", "6", "3", "4"],
    "options_hi": ["अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)", "6", "3", "4"],
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is 'restrict' keyword impact on function inlining?",
    "question_hi": "फ़ंक्शन इनलाइनिंग पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables more aggressive inlining due to no aliasing guarantee", "Prevents inlining", "No impact", "Only affects recursion"],
    "options_hi": ["कोई एलियासिंग गारंटी नहीं होने के कारण अधिक आक्रामक इनलाइनिंग सक्षम करता है", "इनलाइनिंग रोकता है", "कोई प्रभाव नहीं", "केवल पुनरावृत्ति को प्रभावित करता है"],
    "answer_en": "Enables more aggressive inlining due to no aliasing guarantee",
    "answer_hi": "कोई एलियासिंग गारंटी नहीं होने के कारण अधिक आक्रामक इनलाइनिंग सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is 'strict aliasing' rule for accessing via void* pointer?",
    "question_hi": "void* पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Not allowed (void* has no type)", "Allowed", "Only if cast properly", "Implementation-defined"],
    "options_hi": ["अनुमति नहीं (void* का कोई प्रकार नहीं है)", "अनुमति है", "केवल यदि ठीक से कास्ट किया गया है", "कार्यान्वयन-परिभाषित"],
    "answer_en": "Not allowed (void* has no type)",
    "answer_hi": "अनुमति नहीं (void* का कोई प्रकार नहीं है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is the result of: int x = 5; int y = (x=3) + x;",
    "question_hi": "परिणाम क्या है: int x = 5; int y = (x=3) + x;",
    "options_en": ["Undefined behavior (unsequenced read and write)", "6", "8", "10"],
    "options_hi": ["अपरिभाषित व्यवहार (अनुक्रमित पठन और लेखन)", "6", "8", "10"],
    "answer_en": "Undefined behavior (unsequenced read and write)",
    "answer_hi": "अपरिभाषित व्यवहार (अनुक्रमित पठन और लेखन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is 'restrict' keyword in C99 standard?",
    "question_hi": "C99 मानक में 'restrict' कीवर्ड क्या है?",
    "options_en": ["A qualifier for pointers to promise no aliasing", "Not part of C99", "Only for arrays", "Only for functions"],
    "options_hi": ["कोई एलियासिंग नहीं का वादा करने के लिए पॉइंटर्स के लिए एक योग्यकर्ता", "C99 का हिस्सा नहीं", "केवल सरणियों के लिए", "केवल कार्यों के लिए"],
    "answer_en": "A qualifier for pointers to promise no aliasing",
    "answer_hi": "कोई एलियासिंग नहीं का वादा करने के लिए पॉइंटर्स के लिए एक योग्यकर्ता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is the result of: int i = 0; int j = i + i++;",
    "question_hi": "परिणाम क्या है: int i = 0; int j = i + i++;",
    "options_en": "Undefined behavior (unsequenced read and modification)",
    "options_hi": "अपरिभाषित व्यवहार (अनुक्रमित पठन और संशोधन)",
    "answer_en": "Undefined behavior (unsequenced read and modification)",
    "answer_hi": "अपरिभाषित व्यवहार (अनुक्रमित पठन और संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is 'strict aliasing' rule for accessing memory via pointer to aggregate type?",
    "question_hi": "एग्रीगेट प्रकार के पॉइंटर के माध्यम से मेमोरी एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed if accessing via struct pointer to same struct type", "Not allowed", "Only via union", "Implementation-defined"],
    "options_hi": ["अनुमत यदि एक ही संरचना प्रकार के लिए संरचना पॉइंटर के माध्यम से एक्सेस किया जाता है", "अनुमति नहीं", "केवल यूनियन के माध्यम से", "कार्यान्वयन-परिभाषित"],
    "answer_en": "Allowed if accessing via struct pointer to same struct type",
    "answer_hi": "अनुमत यदि एक ही संरचना प्रकार के लिए संरचना पॉइंटर के माध्यम से एक्सेस किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is the result of: int a = 1; a = a++ + 1;",
    "question_hi": "परिणाम क्या है: int a = 1; a = a++ + 1;",
    "options_en": "Undefined behavior (unsequenced read and modification)",
    "options_hi": "अपरिभाषित व्यवहार (अनुक्रमित पठन और संशोधन)",
    "answer_en": "Undefined behavior (unsequenced read and modification)",
    "answer_hi": "अपरिभाषित व्यवहार (अनुक्रमित पठन और संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is 'restrict' keyword impact on loop optimization?",
    "question_hi": "लूप ऑप्टिमाइज़ेशन पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables vectorization and parallelization", "Prevents optimization", "No impact", "Only for small loops"],
    "options_hi": ["वेक्टराइजेशन और समानांतरीकरण सक्षम करता है", "ऑप्टिमाइज़ेशन रोकता है", "कोई प्रभाव नहीं", "केवल छोटे लूप के लिए"],
    "answer_en": "Enables vectorization and parallelization",
    "answer_hi": "वेक्टराइजेशन और समानांतरीकरण सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is the result of: int i = 5; i = i++ * ++i;",
    "question_hi": "परिणाम क्या है: int i = 5; i = i++ * ++i;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is 'strict aliasing' rule for accessing via pointer to character type?",
    "question_hi": "वर्ण प्रकार के पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Always allowed (char* can alias any type)", "Not allowed", "Only signed char", "Only unsigned char"],
    "options_hi": ["हमेशा अनुमत (char* किसी भी प्रकार का एलियास कर सकता है)", "अनुमति नहीं", "केवल signed char", "केवल unsigned char"],
    "answer_en": "Always allowed (char* can alias any type)",
    "answer_hi": "हमेशा अनुमत (char* किसी भी प्रकार का एलियास कर सकता है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is the result of: int a = 2; a = a + a++;",
    "question_hi": "परिणाम क्या है: int a = 2; a = a + a++;",
    "options_en": "Undefined behavior (unsequenced read and modification)",
    "options_hi": "अपरिभाषित व्यवहार (अनुक्रमित पठन और संशोधन)",
    "answer_en": "Undefined behavior (unsequenced read and modification)",
    "answer_hi": "अपरिभाषित व्यवहार (अनुक्रमित पठन और संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is 'restrict' keyword usage with function returning pointer?",
    "question_hi": "पॉइंटर लौटाने वाले फ़ंक्शन के साथ 'restrict' कीवर्ड उपयोग क्या है?",
    "options_en": ["Can be applied to return type to promise no aliasing", "Not allowed", "Only for parameters", "Only for void functions"],
    "options_hi": ["कोई एलियासिंग नहीं का वादा करने के लिए रिटर्न प्रकार पर लागू किया जा सकता है", "अनुमति नहीं", "केवल पैरामीटर के लिए", "केवल void फ़ंक्शन के लिए"],
    "answer_en": "Can be applied to return type to promise no aliasing",
    "answer_hi": "कोई एलियासिंग नहीं का वादा करने के लिए रिटर्न प्रकार पर लागू किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is the result of: int i = 1; i = ++i + 1;",
    "question_hi": "परिणाम क्या है: int i = 1; i = ++i + 1;",
    "options_en": "Undefined behavior (unsequenced read and modification)",
    "options_hi": "अपरिभाषित व्यवहार (अनुक्रमित पठन और संशोधन)",
    "answer_en": "Undefined behavior (unsequenced read and modification)",
    "answer_hi": "अपरिभाषित व्यवहार (अनुक्रमित पठन और संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is 'strict aliasing' rule for accessing via pointer to compatible type?",
    "question_hi": "संगत प्रकार के पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed (types are compatible)", "Not allowed", "Only with const", "Implementation-defined"],
    "options_hi": ["अनुमत (प्रकार संगत हैं)", "अनुमति नहीं", "केवल const के साथ", "कार्यान्वयन-परिभाषित"],
    "answer_en": "Allowed (types are compatible)",
    "answer_hi": "अनुमत (प्रकार संगत हैं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is the result of: int a = 1; a = a++ + ++a + a++;",
    "question_hi": "परिणाम क्या है: int a = 1; a = a++ + ++a + a++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is 'restrict' keyword in pointer arithmetic?",
    "question_hi": "पॉइंटर अंकगणित में 'restrict' कीवर्ड क्या है?",
    "options_en": ["Promises pointers derived from restrict pointer don't alias", "No impact", "Only for array access", "Prevents pointer arithmetic"],
    "options_hi": ["वादा करता है कि restrict पॉइंटर से प्राप्त पॉइंटर्स एलियास नहीं करते", "कोई प्रभाव नहीं", "केवल ऐरे एक्सेस के लिए", "पॉइंटर अंकगणित रोकता है"],
    "answer_en": "Promises pointers derived from restrict pointer don't alias",
    "answer_hi": "वादा करता है कि restrict पॉइंटर से प्राप्त पॉइंटर्स एलियास नहीं करते",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is the result of: int i = 0; i = i++ + ++i + i++;",
    "question_hi": "परिणाम क्या है: int i = 0; i = i++ + ++i + i++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is 'strict aliasing' rule for accessing via pointer to differently qualified version of same type?",
    "question_hi": "एक ही प्रकार के विभिन्न योग्य संस्करण के पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed (differently qualified versions of same type)", "Not allowed", "Only const qualified", "Only volatile qualified"],
    "options_hi": ["अनुमत (एक ही प्रकार के विभिन्न योग्य संस्करण)", "अनुमति नहीं", "केवल const योग्य", "केवल volatile योग्य"],
    "answer_en": "Allowed (differently qualified versions of same type)",
    "answer_hi": "अनुमत (एक ही प्रकार के विभिन्न योग्य संस्करण)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the result of: int x = 5; x = ++x + x++;",
    "question_hi": "परिणाम क्या है: int x = 5; x = ++x + x++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is 'restrict' keyword impact on dead store elimination?",
    "question_hi": "डेड स्टोर एलिमिनेशन पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables more aggressive dead store elimination", "Prevents elimination", "No impact", "Only for global variables"],
    "options_hi": ["अधिक आक्रामक डेड स्टोर एलिमिनेशन सक्षम करता है", "एलिमिनेशन रोकता है", "कोई प्रभाव नहीं", "केवल वैश्विक चर के लिए"],
    "answer_en": "Enables more aggressive dead store elimination",
    "answer_hi": "अधिक आक्रामक डेड स्टोर एलिमिनेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is the result of: int a = 2; a = a++ + a++ + a++;",
    "question_hi": "परिणाम क्या है: int a = 2; a = a++ + a++ + a++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is 'strict aliasing' rule for accessing memory via pointer to union containing the type?",
    "question_hi": "प्रकार युक्त यूनियन के पॉइंटर के माध्यम से मेमोरी एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed (union contains the type)", "Not allowed", "Only if union is first member", "Implementation-defined"],
    "options_hi": ["अनुमत (यूनियन में प्रकार शामिल है)", "अनुमति नहीं", "केवल यदि यूनियन पहला सदस्य है", "कार्यान्वयन-परिभाषित"],
    "answer_en": "Allowed (union contains the type)",
    "answer_hi": "अनुमत (यूनियन में प्रकार शामिल है)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is the result of: int i = 3; i = i++ * i++ * i++;",
    "question_hi": "परिणाम क्या है: int i = 3; i = i++ * i++ * i++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is 'restrict' keyword in nested functions?",
    "question_hi": "नेस्टेड फ़ंक्शन में 'restrict' कीवर्ड क्या है?",
    "options_en": ["Not allowed (C doesn't have nested functions)", "Allowed", "Only in GCC extension", "Only for static functions"],
    "options_hi": ["अनुमति नहीं (C में नेस्टेड फ़ंक्शन नहीं हैं)", "अनुमति है", "केवल GCC एक्सटेंशन में", "केवल static फ़ंक्शन के लिए"],
    "answer_en": "Not allowed (C doesn't have nested functions)",
    "answer_hi": "अनुमति नहीं (C में नेस्टेड फ़ंक्शन नहीं हैं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is the result of: int x = 1; x = x++ + x++ + x++ + x++;",
    "question_hi": "परिणाम क्या है: int x = 1; x = x++ + x++ + x++ + x++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is 'strict aliasing' rule for accessing via pointer to a type that is an aggregate or union containing the type?",
    "question_hi": "एक प्रकार के पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है जो एक एग्रीगेट या यूनियन है जिसमें प्रकार शामिल है?",
    "options_en": ["Allowed", "Not allowed", "Only for unions", "Only for structs"],
    "options_hi": ["अनुमत", "अनुमति नहीं", "केवल यूनियन के लिए", "केवल संरचनाओं के लिए"],
    "answer_en": "Allowed",
    "answer_hi": "अनुमत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is the result of: int a = 4; a = a++ + ++a + a++ + ++a;",
    "question_hi": "परिणाम क्या है: int a = 4; a = a++ + ++a + a++ + ++a;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is 'restrict' keyword impact on common subexpression elimination?",
    "question_hi": "कॉमन सबएक्सप्रेशन एलिमिनेशन पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables more aggressive elimination due to no aliasing", "Prevents elimination", "No impact", "Only for arithmetic expressions"],
    "options_hi": ["कोई एलियासिंग नहीं के कारण अधिक आक्रामक उन्मूलन सक्षम करता है", "एलिमिनेशन रोकता है", "कोई प्रभाव नहीं", "केवल अंकगणितीय अभिव्यक्ति के लिए"],
    "answer_en": "Enables more aggressive elimination due to no aliasing",
    "answer_hi": "कोई एलियासिंग नहीं के कारण अधिक आक्रामक उन्मूलन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is the result of: int i = 2; i = ++i + i++ + ++i + i++;",
    "question_hi": "परिणाम क्या है: int i = 2; i = ++i + i++ + ++i + i++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is 'strict aliasing' rule for accessing via pointer to a character type that is signed/unsigned char?",
    "question_hi": "साइन्ड/अनसाइन्ड चार प्रकार के वर्ण प्रकार के पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed (all character types can alias)", "Not allowed", "Only signed char", "Only unsigned char"],
    "options_hi": ["अनुमत (सभी वर्ण प्रकार एलियास कर सकते हैं)", "अनुमति नहीं", "केवल signed char", "केवल unsigned char"],
    "answer_en": "Allowed (all character types can alias)",
    "answer_hi": "अनुमत (सभी वर्ण प्रकार एलियास कर सकते हैं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is the result of: int x = 3; x = x++ * ++x * x++ * ++x;",
    "question_hi": "परिणाम क्या है: int x = 3; x = x++ * ++x * x++ * ++x;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is 'restrict' keyword impact on loop-invariant code motion?",
    "question_hi": "लूप-इनवेरिएंट कोड मोशन पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables more code motion due to no aliasing", "Prevents motion", "No impact", "Only for small loops"],
    "options_hi": ["कोई एलियासिंग नहीं के कारण अधिक कोड मोशन सक्षम करता है", "मोशन रोकता है", "कोई प्रभाव नहीं", "केवल छोटे लूप के लिए"],
    "answer_en": "Enables more code motion due to no aliasing",
    "answer_hi": "कोई एलियासिंग नहीं के कारण अधिक कोड मोशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is the result of: int a = 5; a = a++ + ++a + a++ + ++a + a++;",
    "question_hi": "परिणाम क्या है: int a = 5; a = a++ + ++a + a++ + ++a + a++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is 'strict aliasing' rule for accessing via pointer to a qualified version of a character type?",
    "question_hi": "वर्ण प्रकार के योग्य संस्करण के पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed (qualified character types can alias)", "Not allowed", "Only const qualified", "Only volatile qualified"],
    "options_hi": ["अनुमत (योग्य वर्ण प्रकार एलियास कर सकते हैं)", "अनुमति नहीं", "केवल const योग्य", "केवल volatile योग्य"],
    "answer_en": "Allowed (qualified character types can alias)",
    "answer_hi": "अनुमत (योग्य वर्ण प्रकार एलियास कर सकते हैं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is the result of: int i = 6; i = ++i + i++ + ++i + i++ + ++i;",
    "question_hi": "परिणाम क्या है: int i = 6; i = ++i + i++ + ++i + i++ + ++i;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is 'restrict' keyword impact on instruction scheduling?",
    "question_hi": "निर्देश शेड्यूलिंग पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables more aggressive scheduling due to no aliasing", "Prevents scheduling", "No impact", "Only for floating-point"],
    "options_hi": ["कोई एलियासिंग नहीं के कारण अधिक आक्रामक शेड्यूलिंग सक्षम करता है", "शेड्यूलिंग रोकता है", "कोई प्रभाव नहीं", "केवल फ़्लोटिंग-पॉइंट के लिए"],
    "answer_en": "Enables more aggressive scheduling due to no aliasing",
    "answer_hi": "कोई एलियासिंग नहीं के कारण अधिक आक्रामक शेड्यूलिंग सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is the result of: int x = 7; x = x++ * ++x * x++ * ++x * x++;",
    "question_hi": "परिणाम क्या है: int x = 7; x = x++ * ++x * x++ * ++x * x++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is 'strict aliasing' rule for accessing via pointer to a type that is a signed/unsigned version of a character type?",
    "question_hi": "वर्ण प्रकार के साइन्ड/अनसाइन्ड संस्करण के पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed (signed/unsigned character types can alias)", "Not allowed", "Only signed", "Only unsigned"],
    "options_hi": ["अनुमत (साइन्ड/अनसाइन्ड वर्ण प्रकार एलियास कर सकते हैं)", "अनुमति नहीं", "केवल साइन्ड", "केवल अनसाइन्ड"],
    "answer_en": "Allowed (signed/unsigned character types can alias)",
    "answer_hi": "अनुमत (साइन्ड/अनसाइन्ड वर्ण प्रकार एलियास कर सकते हैं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is the result of: int a = 8; a = ++a + a++ + ++a + a++ + ++a + a++;",
    "question_hi": "परिणाम क्या है: int a = 8; a = ++a + a++ + ++a + a++ + ++a + a++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is 'restrict' keyword impact on register allocation?",
    "question_hi": "रजिस्टर आवंटन पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables better register allocation due to no aliasing", "Prevents allocation", "No impact", "Only for integer registers"],
    "options_hi": ["कोई एलियासिंग नहीं के कारण बेहतर रजिस्टर आवंटन सक्षम करता है", "आवंटन रोकता है", "कोई प्रभाव नहीं", "केवल पूर्णांक रजिस्टर के लिए"],
    "answer_en": "Enables better register allocation due to no aliasing",
    "answer_hi": "कोई एलियासिंग नहीं के कारण बेहतर रजिस्टर आवंटन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is the result of: int i = 9; i = i++ * ++i * i++ * ++i * i++ * ++i;",
    "question_hi": "परिणाम क्या है: int i = 9; i = i++ * ++i * i++ * ++i * i++ * ++i;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is 'strict aliasing' rule for accessing via pointer to a type that is a similarly qualified character type?",
    "question_hi": "समान रूप से योग्य वर्ण प्रकार के पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed (similarly qualified character types can alias)", "Not allowed", "Only const", "Only volatile"],
    "options_hi": ["अनुमत (समान रूप से योग्य वर्ण प्रकार एलियास कर सकते हैं)", "अनुमति नहीं", "केवल const", "केवल volatile"],
    "answer_en": "Allowed (similarly qualified character types can alias)",
    "answer_hi": "अनुमत (समान रूप से योग्य वर्ण प्रकार एलियास कर सकते हैं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is the result of: int x = 10; x = ++x + x++ + ++x + x++ + ++x + x++ + ++x;",
    "question_hi": "परिणाम क्या है: int x = 10; x = ++x + x++ + ++x + x++ + ++x + x++ + ++x;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is 'restrict' keyword impact on constant propagation?",
    "question_hi": "कॉन्स्टेंट प्रोपेगेशन पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables more constant propagation due to no aliasing", "Prevents propagation", "No impact", "Only for global constants"],
    "options_hi": ["कोई एलियासिंग नहीं के कारण अधिक कॉन्स्टेंट प्रोपेगेशन सक्षम करता है", "प्रोपेगेशन रोकता है", "कोई प्रभाव नहीं", "केवल वैश्विक स्थिरांक के लिए"],
    "answer_en": "Enables more constant propagation due to no aliasing",
    "answer_hi": "कोई एलियासिंग नहीं के कारण अधिक कॉन्स्टेंट प्रोपेगेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is the result of: int a = 11; a = a++ * ++a * a++ * ++a * a++ * ++a * a++;",
    "question_hi": "परिणाम क्या है: int a = 11; a = a++ * ++a * a++ * ++a * a++ * ++a * a++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is 'strict aliasing' rule for accessing via pointer to a type that is a character type with different signedness?",
    "question_hi": "विभिन्न साइन्डनेस वाले वर्ण प्रकार के पॉइंटर के माध्यम से एक्सेस करने के लिए 'strict aliasing' नियम क्या है?",
    "options_en": ["Allowed (character types with different signedness can alias)", "Not allowed", "Only if same signedness", "Implementation-defined"],
    "options_hi": ["अनुमत (विभिन्न साइन्डनेस वाले वर्ण प्रकार एलियास कर सकते हैं)", "अनुमति नहीं", "केवल यदि समान साइन्डनेस", "कार्यान्वयन-परिभाषित"],
    "answer_en": "Allowed (character types with different signedness can alias)",
    "answer_hi": "अनुमत (विभिन्न साइन्डनेस वाले वर्ण प्रकार एलियास कर सकते हैं)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is the result of: int i = 12; i = ++i + i++ + ++i + i++ + ++i + i++ + ++i + i++;",
    "question_hi": "परिणाम क्या है: int i = 12; i = ++i + i++ + ++i + i++ + ++i + i++ + ++i + i++;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is 'restrict' keyword impact on auto-vectorization?",
    "question_hi": "ऑटो-वेक्टराइजेशन पर 'restrict' कीवर्ड का क्या प्रभाव है?",
    "options_en": ["Enables auto-vectorization by guaranteeing no aliasing", "Prevents vectorization", "No impact", "Only for small arrays"],
    "options_hi": ["कोई एलियासिंग नहीं की गारंटी देकर ऑटो-वेक्टराइजेशन सक्षम करता है", "वेक्टराइजेशन रोकता है", "कोई प्रभाव नहीं", "केवल छोटी सरणियों के लिए"],
    "answer_en": "Enables auto-vectorization by guaranteeing no aliasing",
    "answer_hi": "कोई एलियासिंग नहीं की गारंटी देकर ऑटो-वेक्टराइजेशन सक्षम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is the result of: int x = 13; x = x++ * ++x * x++ * ++x * x++ * ++x * x++ * ++x;",
    "question_hi": "परिणाम क्या है: int x = 13; x = x++ * ++x * x++ * ++x * x++ * ++x * x++ * ++x;",
    "options_en": "Undefined behavior (multiple unsequenced modifications)",
    "options_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "answer_en": "Undefined behavior (multiple unsequenced modifications)",
    "answer_hi": "अपरिभाषित व्यवहार (कई अनुक्रमित संशोधन)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is 'strict aliasing' rule summary for C programmers?",
    "question_hi": "C प्रोग्रामर्स के लिए 'strict aliasing' नियम सारांश क्या है?",
    "options_en": ["Access objects only through their declared type or char*", "Any pointer can alias any type", "Only struct pointers matter", "No restrictions"],
    "options_hi": ["ऑब्जेक्ट्स को केवल उनके घोषित प्रकार या char* के माध्यम से एक्सेस करें", "कोई भी पॉइंटर किसी भी प्रकार का एलियास कर सकता है", "केवल संरचना पॉइंटर्स मायने रखते हैं", "कोई प्रतिबंध नहीं"],
    "answer_en": "Access objects only through their declared type or char*",
    "answer_hi": "ऑब्जेक्ट्स को केवल उनके घोषित प्रकार या char* के माध्यम से एक्सेस करें",
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