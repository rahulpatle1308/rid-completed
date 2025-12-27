const questions=[
  {
    "num": 1,
    "question_en": "What is the difference between ++i and i++?",
    "question_hi": "++i और i++ में क्या अंतर है?",
    "options_en": [
      "++i is pre-increment, i++ is post-increment",
      "++i is post-increment, i++ is pre-increment",
      "Both are same",
      "++i adds 2, i++ adds 1"
    ],
    "options_hi": [
      "++i प्री-इन्क्रीमेंट है, i++ पोस्ट-इन्क्रीमेंट है",
      "++i पोस्ट-इन्क्रीमेंट है, i++ प्री-इन्क्रीमेंट है",
      "दोनों समान हैं",
      "++i 2 जोड़ता है, i++ 1 जोड़ता है"
    ],
    "answer_en": "++i is pre-increment, i++ is post-increment",
    "answer_hi": "++i प्री-इन्क्रीमेंट है, i++ पोस्ट-इन्क्रीमेंट है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What will be output: int i=5; printf(\"%d\", i++ + ++i);",
    "question_hi": "आउटपुट क्या होगा: int i=5; printf(\"%d\", i++ + ++i);",
    "options_en": ["12", "11", "10", "Undefined behavior"],
    "options_hi": ["12", "11", "10", "अपरिभाषित व्यवहार"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the value of sizeof('A') in C?",
    "question_hi": "C में sizeof('A') का मान क्या है?",
    "options_en": ["4 (int size)", "1 (char size)", "2", "Depends on compiler"],
    "options_hi": ["4 (int का आकार)", "1 (char का आकार)", "2", "कम्पाइलर पर निर्भर"],
    "answer_en": "4 (int size)",
    "answer_hi": "4 (int का आकार)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is short-circuit evaluation in logical operators?",
    "question_hi": "लॉजिकल ऑपरेटर्स में शॉर्ट-सर्किट एवेलुएशन क्या है?",
    "options_en": [
      "Stops evaluation when result is known",
      "Always evaluates both operands",
      "Uses circuit for calculation",
      "Only for arithmetic operators"
    ],
    "options_hi": [
      "परिणाम ज्ञात होने पर मूल्यांकन रोक देता है",
      "हमेशा दोनों ओपरेंड्स का मूल्यांकन करता है",
      "गणना के लिए सर्किट का उपयोग करता है",
      "केवल अंकगणितीय ऑपरेटर्स के लिए"
    ],
    "answer_en": "Stops evaluation when result is known",
    "answer_hi": "परिणाम ज्ञात होने पर मूल्यांकन रोक देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is type casting in C?",
    "question_hi": "C में टाइप कास्टिंग क्या है?",
    "options_en": [
      "Converting one data type to another",
      "Creating new types",
      "Deleting types",
      "Only for integers"
    ],
    "options_hi": [
      "एक डेटा प्रकार को दूसरे में बदलना",
      "नए प्रकार बनाना",
      "प्रकार हटाना",
      "केवल पूर्णांकों के लिए"
    ],
    "answer_en": "Converting one data type to another",
    "answer_hi": "एक डेटा प्रकार को दूसरे में बदलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is implicit type conversion?",
    "question_hi": "इम्प्लिसिट टाइप कन्वर्जन क्या है?",
    "options_en": [
      "Automatic conversion by compiler",
      "Manual conversion by programmer",
      "No conversion",
      "Only explicit conversion"
    ],
    "options_hi": [
      "कम्पाइलर द्वारा स्वचालित रूपांतरण",
      "प्रोग्रामर द्वारा मैनुअल रूपांतरण",
      "कोई रूपांतरण नहीं",
      "केवल एक्सप्लिसिट कन्वर्जन"
    ],
    "answer_en": "Automatic conversion by compiler",
    "answer_hi": "कम्पाइलर द्वारा स्वचालित रूपांतरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What is explicit type conversion?",
    "question_hi": "एक्सप्लिसिट टाइप कन्वर्जन क्या है?",
    "options_en": [
      "Manual conversion using cast operator",
      "Automatic conversion",
      "No conversion needed",
      "Compiler does it"
    ],
    "options_hi": [
      "कास्ट ऑपरेटर का उपयोग करके मैनुअल रूपांतरण",
      "स्वचालित रूपांतरण",
      "कोई रूपांतरण आवश्यक नहीं",
      "कम्पाइलर इसे करता है"
    ],
    "answer_en": "Manual conversion using cast operator",
    "answer_hi": "कास्ट ऑपरेटर का उपयोग करके मैनुअल रूपांतरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is dangling pointer?",
    "question_hi": "डैंगलिंग पॉइंटर क्या है?",
    "options_en": [
      "Pointer pointing to freed memory",
      "NULL pointer",
      "Uninitialized pointer",
      "Constant pointer"
    ],
    "options_hi": [
      "फ्री की गई मेमोरी की ओर इशारा करने वाला पॉइंटर",
      "NULL पॉइंटर",
      "अनइनिशियलाइज्ड पॉइंटर",
      "कॉन्स्टेंट पॉइंटर"
    ],
    "answer_en": "Pointer pointing to freed memory",
    "answer_hi": "फ्री की गई मेमोरी की ओर इशारा करने वाला पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is wild pointer?",
    "question_hi": "वाइल्ड पॉइंटर क्या है?",
    "options_en": [
      "Uninitialized pointer",
      "NULL pointer",
      "Freed memory pointer",
      "Constant pointer"
    ],
    "options_hi": [
      "अनइनिशियलाइज्ड पॉइंटर",
      "NULL पॉइंटर",
      "फ्री मेमोरी पॉइंटर",
      "कॉन्स्टेंट पॉइंटर"
    ],
    "answer_en": "Uninitialized pointer",
    "answer_hi": "अनइनिशियलाइज्ड पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is memory leak?",
    "question_hi": "मेमोरी लीक क्या है?",
    "options_en": [
      "Memory allocated but not freed",
      "Memory freed properly",
      "No memory allocated",
      "Memory initialized"
    ],
    "options_hi": [
      "मेमोरी आवंटित लेकिन मुक्त नहीं की गई",
      "मेमोरी ठीक से मुक्त की गई",
      "कोई मेमोरी आवंटित नहीं",
      "मेमोरी आरंभिक"
    ],
    "answer_en": "Memory allocated but not freed",
    "answer_hi": "मेमोरी आवंटित लेकिन मुक्त नहीं की गई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the difference between malloc() and calloc()?",
    "question_hi": "malloc() और calloc() में क्या अंतर है?",
    "options_en": [
      "malloc() allocates uninitialized, calloc() allocates initialized to 0",
      "Both are same",
      "malloc() initializes to 0, calloc() doesn't",
      "calloc() is faster"
    ],
    "options_hi": [
      "malloc() अनइनिशियलाइज्ड आवंटित करता है, calloc() 0 से इनिशियलाइज्ड आवंटित करता है",
      "दोनों समान हैं",
      "malloc() 0 से इनिशियलाइज करता है, calloc() नहीं",
      "calloc() तेज है"
    ],
    "answer_en": "malloc() allocates uninitialized, calloc() allocates initialized to 0",
    "answer_hi": "malloc() अनइनिशियलाइज्ड आवंटित करता है, calloc() 0 से इनिशियलाइज्ड आवंटित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What does realloc() function do?",
    "question_hi": "realloc() फ़ंक्शन क्या करता है?",
    "options_en": [
      "Resizes previously allocated memory",
      "Allocates new memory",
      "Frees memory",
      "Initializes memory"
    ],
    "options_hi": [
      "पहले आवंटित मेमोरी का आकार बदलता है",
      "नई मेमोरी आवंटित करता है",
      "मेमोरी मुक्त करता है",
      "मेमोरी आरंभ करता है"
    ],
    "answer_en": "Resizes previously allocated memory",
    "answer_hi": "पहले आवंटित मेमोरी का आकार बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is the difference between array and pointer?",
    "question_hi": "ऐरे और पॉइंटर में क्या अंतर है?",
    "options_en": [
      "Array name is constant pointer, pointer is variable",
      "Both are same",
      "Array is variable, pointer is constant",
      "No difference"
    ],
    "options_hi": [
      "ऐरे का नाम कॉन्स्टेंट पॉइंटर है, पॉइंटर वेरिएबल है",
      "दोनों समान हैं",
      "ऐरे वेरिएबल है, पॉइंटर कॉन्स्टेंट है",
      "कोई अंतर नहीं"
    ],
    "answer_en": "Array name is constant pointer, pointer is variable",
    "answer_hi": "ऐरे का नाम कॉन्स्टेंट पॉइंटर है, पॉइंटर वेरिएबल है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is pointer arithmetic?",
    "question_hi": "पॉइंटर अर्थमैटिक क्या है?",
    "options_en": [
      "Performing arithmetic operations on pointers",
      "Only addition on pointers",
      "Only subtraction",
      "No arithmetic on pointers"
    ],
    "options_hi": [
      "पॉइंटर्स पर अंकगणितीय संचालन करना",
      "केवल पॉइंटर्स पर जोड़",
      "केवल घटाव",
      "पॉइंटर्स पर कोई अंकगणित नहीं"
    ],
    "answer_en": "Performing arithmetic operations on pointers",
    "answer_hi": "पॉइंटर्स पर अंकगणितीय संचालन करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What will p+1 mean if p is int pointer?",
    "question_hi": "p+1 का क्या अर्थ होगा यदि p इंट पॉइंटर है?",
    "options_en": [
      "Points to next integer (4 bytes ahead)",
      "Points to next byte",
      "Points to same location",
      "Invalid operation"
    ],
    "options_hi": [
      "अगले पूर्णांक की ओर इशारा करता है (4 बाइट आगे)",
      "अगले बाइट की ओर इशारा करता है",
      "उसी स्थान की ओर इशारा करता है",
      "अमान्य ऑपरेशन"
    ],
    "answer_en": "Points to next integer (4 bytes ahead)",
    "answer_hi": "अगले पूर्णांक की ओर इशारा करता है (4 बाइट आगे)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is function pointer?",
    "question_hi": "फ़ंक्शन पॉइंटर क्या है?",
    "options_en": [
      "Pointer that points to function",
      "Pointer in function",
      "Function returning pointer",
      "Pointer to data"
    ],
    "options_hi": [
      "पॉइंटर जो फ़ंक्शन की ओर इशारा करता है",
      "फ़ंक्शन में पॉइंटर",
      "पॉइंटर लौटाने वाला फ़ंक्शन",
      "डेटा का पॉइंटर"
    ],
    "answer_en": "Pointer that points to function",
    "answer_hi": "पॉइंटर जो फ़ंक्शन की ओर इशारा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is callback function?",
    "question_hi": "कॉलबैक फ़ंक्शन क्या है?",
    "options_en": [
      "Function passed as argument to another function",
      "Function that calls main",
      "Recursive function",
      "Inline function"
    ],
    "options_hi": [
      "फ़ंक्शन जो दूसरे फ़ंक्शन को तर्क के रूप में पास किया जाता है",
      "फ़ंक्शन जो मुख्य को कॉल करता है",
      "पुनरावर्ती फ़ंक्शन",
      "इनलाइन फ़ंक्शन"
    ],
    "answer_en": "Function passed as argument to another function",
    "answer_hi": "फ़ंक्शन जो दूसरे फ़ंक्शन को तर्क के रूप में पास किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is recursion vs iteration?",
    "question_hi": "रिकर्शन बनाम इटरेशन क्या है?",
    "options_en": [
      "Recursion uses function calls, iteration uses loops",
      "Both are same",
      "Iteration uses function calls",
      "Recursion is faster"
    ],
    "options_hi": [
      "रिकर्शन फ़ंक्शन कॉल्स का उपयोग करता है, इटरेशन लूप्स का उपयोग करता है",
      "दोनों समान हैं",
      "इटरेशन फ़ंक्शन कॉल्स का उपयोग करता है",
      "रिकर्शन तेज है"
    ],
    "answer_en": "Recursion uses function calls, iteration uses loops",
    "answer_hi": "रिकर्शन फ़ंक्शन कॉल्स का उपयोग करता है, इटरेशन लूप्स का उपयोग करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is tail recursion?",
    "question_hi": "टेल रिकर्शन क्या है?",
    "options_en": [
      "Recursive call is last operation in function",
      "First operation is recursive call",
      "Middle operation is recursive call",
      "No recursive call"
    ],
    "options_hi": [
      "पुनरावर्ती कॉल फ़ंक्शन में अंतिम ऑपरेशन है",
      "पहला ऑपरेशन पुनरावर्ती कॉल है",
      "मध्य ऑपरेशन पुनरावर्ती कॉल है",
      "कोई पुनरावर्ती कॉल नहीं"
    ],
    "answer_en": "Recursive call is last operation in function",
    "answer_hi": "पुनरावर्ती कॉल फ़ंक्शन में अंतिम ऑपरेशन है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is inline function?",
    "question_hi": "इनलाइन फ़ंक्शन क्या है?",
    "options_en": [
      "Function expanded at call site to avoid overhead",
      "Function called normally",
      "Recursive function",
      "Large function"
    ],
    "options_hi": [
      "ओवरहेड से बचने के लिए कॉल साइट पर विस्तारित फ़ंक्शन",
      "सामान्य रूप से कॉल किया गया फ़ंक्शन",
      "पुनरावर्ती फ़ंक्शन",
      "बड़ा फ़ंक्शन"
    ],
    "answer_en": "Function expanded at call site to avoid overhead",
    "answer_hi": "ओवरहेड से बचने के लिए कॉल साइट पर विस्तारित फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is static function?",
    "question_hi": "स्टैटिक फ़ंक्शन क्या है?",
    "options_en": [
      "Function accessible only within same file",
      "Function accessible everywhere",
      "Function that doesn't move",
      "Recursive function"
    ],
    "options_hi": [
      "फ़ंक्शन केवल एक ही फ़ाइल के भीतर पहुंच योग्य",
      "फ़ंक्शन हर जगह पहुंच योग्य",
      "फ़ंक्शन जो हिलता नहीं है",
      "पुनरावर्ती फ़ंक्शन"
    ],
    "answer_en": "Function accessible only within same file",
    "answer_hi": "फ़ंक्शन केवल एक ही फ़ाइल के भीतर पहुंच योग्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is extern variable?",
    "question_hi": "एक्सटर्न वेरिएबल क्या है?",
    "options_en": [
      "Variable declared in another file",
      "Local variable",
      "Static variable",
      "Constant variable"
    ],
    "options_hi": [
      "दूसरी फ़ाइल में घोषित वेरिएबल",
      "स्थानीय वेरिएबल",
      "स्थिर वेरिएबल",
      "स्थिरांक वेरिएबल"
    ],
    "answer_en": "Variable declared in another file",
    "answer_hi": "दूसरी फ़ाइल में घोषित वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is register variable?",
    "question_hi": "रजिस्टर वेरिएबल क्या है?",
    "options_en": [
      "Variable stored in CPU register for fast access",
      "Variable in memory",
      "Global variable",
      "Static variable"
    ],
    "options_hi": [
      "तेज़ पहुंच के लिए CPU रजिस्टर में संग्रहीत वेरिएबल",
      "मेमोरी में वेरिएबल",
      "वैश्विक वेरिएबल",
      "स्थिर वेरिएबल"
    ],
    "answer_en": "Variable stored in CPU register for fast access",
    "answer_hi": "तेज़ पहुंच के लिए CPU रजिस्टर में संग्रहीत वेरिएबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is volatile variable?",
    "question_hi": "वोलेटाइल वेरिएबल क्या है?",
    "options_en": [
      "Variable that can change unexpectedly",
      "Constant variable",
      "Static variable",
      "Local variable"
    ],
    "options_hi": [
      "वेरिएबल जो अप्रत्याशित रूप से बदल सकता है",
      "स्थिरांक वेरिएबल",
      "स्थिर वेरिएबल",
      "स्थानीय वेरिएबल"
    ],
    "answer_en": "Variable that can change unexpectedly",
    "answer_hi": "वेरिएबल जो अप्रत्याशित रूप से बदल सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is const pointer?",
    "question_hi": "कॉन्स्ट पॉइंटर क्या है?",
    "options_en": [
      "Pointer whose value cannot change",
      "Pointer to constant data",
      "Both pointer and data constant",
      "Normal pointer"
    ],
    "options_hi": [
      "पॉइंटर जिसका मूल्य नहीं बदल सकता",
      "स्थिर डेटा का पॉइंटर",
      "पॉइंटर और डेटा दोनों स्थिर",
      "सामान्य पॉइंटर"
    ],
    "answer_en": "Pointer whose value cannot change",
    "answer_hi": "पॉइंटर जिसका मूल्य नहीं बदल सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is pointer to constant?",
    "question_hi": "कॉन्स्टेंट का पॉइंटर क्या है?",
    "options_en": [
      "Pointer that cannot modify pointed data",
      "Constant pointer",
      "Both constant",
      "Normal pointer"
    ],
    "options_hi": [
      "पॉइंटर जो इंगित डेटा संशोधित नहीं कर सकता",
      "स्थिर पॉइंटर",
      "दोनों स्थिर",
      "सामान्य पॉइंटर"
    ],
    "answer_en": "Pointer that cannot modify pointed data",
    "answer_hi": "पॉइंटर जो इंगित डेटा संशोधित नहीं कर सकता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is command line arguments?",
    "question_hi": "कमांड लाइन आर्ग्युमेंट्स क्या हैं?",
    "options_en": [
      "Arguments passed to main() from command line",
      "Arguments to functions",
      "Local variables",
      "Global variables"
    ],
    "options_hi": [
      "कमांड लाइन से main() को पास किए गए तर्क",
      "फ़ंक्शंस के तर्क",
      "स्थानीय चर",
      "वैश्विक चर"
    ],
    "answer_en": "Arguments passed to main() from command line",
    "answer_hi": "कमांड लाइन से main() को पास किए गए तर्क",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is argc in main(int argc, char *argv[])?",
    "question_hi": "main(int argc, char *argv[]) में argc क्या है?",
    "options_en": [
      "Number of command line arguments",
      "Array of arguments",
      "First argument",
      "Return value"
    ],
    "options_hi": [
      "कमांड लाइन तर्कों की संख्या",
      "तर्कों की सरणी",
      "पहला तर्क",
      "वापसी मूल्य"
    ],
    "answer_en": "Number of command line arguments",
    "answer_hi": "कमांड लाइन तर्कों की संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is argv in main(int argc, char *argv[])?",
    "question_hi": "main(int argc, char *argv[]) में argv क्या है?",
    "options_en": [
      "Array of strings containing arguments",
      "Number of arguments",
      "First argument",
      "Last argument"
    ],
    "options_hi": [
      "तर्कों वाले तारों की सरणी",
      "तर्कों की संख्या",
      "पहला तर्क",
      "अंतिम तर्क"
    ],
    "answer_en": "Array of strings containing arguments",
    "answer_hi": "तर्कों वाले तारों की सरणी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is variable length array (VLA)?",
    "question_hi": "वेरिएबल लेंथ ऐरे (VLA) क्या है?",
    "options_en": [
      "Array whose size is determined at runtime",
      "Fixed size array",
      "Dynamic array",
      "Pointer array"
    ],
    "options_hi": [
      "ऐरे जिसका आकार रनटाइम पर निर्धारित होता है",
      "निश्चित आकार का ऐरे",
      "गतिशील ऐरे",
      "पॉइंटर ऐरे"
    ],
    "answer_en": "Array whose size is determined at runtime",
    "answer_hi": "ऐरे जिसका आकार रनटाइम पर निर्धारित होता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is multidimensional array?",
    "question_hi": "मल्टीडायमेंशनल ऐरे क्या है?",
    "options_en": [
      "Array with more than one dimension",
      "Single dimension array",
      "Dynamic array",
      "Pointer array"
    ],
    "options_hi": [
      "एक से अधिक आयाम वाला ऐरे",
      "एक आयामी ऐरे",
      "गतिशील ऐरे",
      "पॉइंटर ऐरे"
    ],
    "answer_en": "Array with more than one dimension",
    "answer_hi": "एक से अधिक आयाम वाला ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is jagged array?",
    "question_hi": "जैग्ड ऐरे क्या है?",
    "options_en": [
      "Array of arrays with different sizes",
      "2D array with equal rows",
      "3D array",
      "Single array"
    ],
    "options_hi": [
      "विभिन्न आकारों वाले ऐरे का ऐरे",
      "समान पंक्तियों वाला 2D ऐरे",
      "3D ऐरे",
      "एकल ऐरे"
    ],
    "answer_en": "Array of arrays with different sizes",
    "answer_hi": "विभिन्न आकारों वाले ऐरे का ऐरे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is string literal?",
    "question_hi": "स्ट्रिंग लिटरल क्या है?",
    "options_en": [
      "Sequence of characters in double quotes",
      "Single character",
      "Array of characters",
      "Pointer to char"
    ],
    "options_hi": [
      "दोहरे उद्धरण में वर्णों का अनुक्रम",
      "एकल वर्ण",
      "वर्णों की सरणी",
      "चार का पॉइंटर"
    ],
    "answer_en": "Sequence of characters in double quotes",
    "answer_hi": "दोहरे उद्धरण में वर्णों का अनुक्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is difference between strcpy() and strncpy()?",
    "question_hi": "strcpy() और strncpy() में क्या अंतर है?",
    "options_en": [
      "strncpy() copies specified number of characters",
      "Both are same",
      "strcpy() is safer",
      "strncpy() doesn't copy"
    ],
    "options_hi": [
      "strncpy() निर्दिष्ट संख्या में वर्ण कॉपी करता है",
      "दोनों समान हैं",
      "strcpy() अधिक सुरक्षित है",
      "strncpy() कॉपी नहीं करता"
    ],
    "answer_en": "strncpy() copies specified number of characters",
    "answer_hi": "strncpy() निर्दिष्ट संख्या में वर्ण कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is buffer overflow?",
    "question_hi": "बफ़र ओवरफ्लो क्या है?",
    "options_en": [
      "Writing beyond allocated memory",
      "Reading beyond memory",
      "Proper memory usage",
      "Memory allocation"
    ],
    "options_hi": [
      "आवंटित मेमोरी से परे लिखना",
      "मेमोरी से परे पढ़ना",
      "उचित मेमोरी उपयोग",
      "मेमोरी आवंटन"
    ],
    "answer_en": "Writing beyond allocated memory",
    "answer_hi": "आवंटित मेमोरी से परे लिखना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is structure padding?",
    "question_hi": "स्ट्रक्चर पैडिंग क्या है?",
    "options_en": [
      "Adding extra bytes for alignment",
      "Removing bytes",
      "Compacting structure",
      "No padding"
    ],
    "options_hi": [
      "संरेखण के लिए अतिरिक्त बाइट जोड़ना",
      "बाइट हटाना",
      "संरचना को संकुचित करना",
      "कोई पैडिंग नहीं"
    ],
    "answer_en": "Adding extra bytes for alignment",
    "answer_hi": "संरेखण के लिए अतिरिक्त बाइट जोड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is structure packing?",
    "question_hi": "स्ट्रक्चर पैकिंग क्या है?",
    "options_en": [
      "Removing padding bytes",
      "Adding padding",
      "Both same",
      "No effect"
    ],
    "options_hi": [
      "पैडिंग बाइट हटाना",
      "पैडिंग जोड़ना",
      "दोनों समान",
      "कोई प्रभाव नहीं"
    ],
    "answer_en": "Removing padding bytes",
    "answer_hi": "पैडिंग बाइट हटाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is bit field?",
    "question_hi": "बिट फील्ड क्या है?",
    "options_en": [
      "Structure member with specified bit width",
      "Normal structure member",
      "Array member",
      "Pointer member"
    ],
    "options_hi": [
      "निर्दिष्ट बिट चौड़ाई वाला संरचना सदस्य",
      "सामान्य संरचना सदस्य",
      "सरणी सदस्य",
      "पॉइंटर सदस्य"
    ],
    "answer_en": "Structure member with specified bit width",
    "answer_hi": "निर्दिष्ट बिट चौड़ाई वाला संरचना सदस्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is typedef?",
    "question_hi": "typedef क्या है?",
    "options_en": [
      "Creates alias for data types",
      "Defines new type",
      "Declares variable",
      "Defines function"
    ],
    "options_hi": [
      "डेटा प्रकारों के लिए उपनाम बनाता है",
      "नया प्रकार परिभाषित करता है",
      "चर घोषित करता है",
      "फ़ंक्शन परिभाषित करता है"
    ],
    "answer_en": "Creates alias for data types",
    "answer_hi": "डेटा प्रकारों के लिए उपनाम बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is enum?",
    "question_hi": "enum क्या है?",
    "options_en": [
      "User-defined type for named integer constants",
      "Floating point type",
      "Character type",
      "Array type"
    ],
    "options_hi": [
      "नामित पूर्णांक स्थिरांकों के लिए उपयोगकर्ता-परिभाषित प्रकार",
      "फ्लोटिंग पॉइंट प्रकार",
      "वर्ण प्रकार",
      "सरणी प्रकार"
    ],
    "answer_en": "User-defined type for named integer constants",
    "answer_hi": "नामित पूर्णांक स्थिरांकों के लिए उपयोगकर्ता-परिभाषित प्रकार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is union vs structure?",
    "question_hi": "यूनियन बनाम स्ट्रक्चर क्या है?",
    "options_en": [
      "Union shares memory, structure has separate memory",
      "Both same",
      "Structure shares memory",
      "Union has more memory"
    ],
    "options_hi": [
      "यूनियन मेमोरी साझा करता है, संरचना में अलग मेमोरी होती है",
      "दोनों समान",
      "संरचना मेमोरी साझा करती है",
      "यूनियन में अधिक मेमोरी होती है"
    ],
    "answer_en": "Union shares memory, structure has separate memory",
    "answer_hi": "यूनियन मेमोरी साझा करता है, संरचना में अलग मेमोरी होती है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is file opening modes?",
    "question_hi": "फ़ाइल खोलने के मोड क्या हैं?",
    "options_en": [
      "r, w, a, r+, w+, a+",
      "read, write, append",
      "open, close",
      "input, output"
    ],
    "options_hi": [
      "r, w, a, r+, w+, a+",
      "पढ़ें, लिखें, जोड़ें",
      "खोलें, बंद करें",
      "इनपुट, आउटपुट"
    ],
    "answer_en": "r, w, a, r+, w+, a+",
    "answer_hi": "r, w, a, r+, w+, a+",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is text vs binary file?",
    "question_hi": "टेक्स्ट बनाम बाइनरी फ़ाइल क्या है?",
    "options_en": [
      "Text stores characters, binary stores raw bytes",
      "Both same",
      "Binary stores only text",
      "Text stores binary"
    ],
    "options_hi": [
      "टेक्स्ट वर्ण संग्रहीत करता है, बाइनरी कच्चे बाइट संग्रहीत करता है",
      "दोनों समान",
      "बाइनरी केवल टेक्स्ट संग्रहीत करता है",
      "टेक्स्ट बाइनरी संग्रहीत करता है"
    ],
    "answer_en": "Text stores characters, binary stores raw bytes",
    "answer_hi": "टेक्स्ट वर्ण संग्रहीत करता है, बाइनरी कच्चे बाइट संग्रहीत करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is fseek() function?",
    "question_hi": "fseek() फ़ंक्शन क्या है?",
    "options_en": [
      "Moves file pointer to specific position",
      "Reads from file",
      "Writes to file",
      "Closes file"
    ],
    "options_hi": [
      "फ़ाइल पॉइंटर को विशिष्ट स्थिति में ले जाता है",
      "फ़ाइल से पढ़ता है",
      "फ़ाइल में लिखता है",
      "फ़ाइल बंद करता है"
    ],
    "answer_en": "Moves file pointer to specific position",
    "answer_hi": "फ़ाइल पॉइंटर को विशिष्ट स्थिति में ले जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is ftell() function?",
    "question_hi": "ftell() फ़ंक्शन क्या है?",
    "options_en": [
      "Returns current file pointer position",
      "Moves pointer",
      "Reads data",
      "Writes data"
    ],
    "options_hi": [
      "वर्तमान फ़ाइल पॉइंटर स्थिति लौटाता है",
      "पॉइंटर ले जाता है",
      "डेटा पढ़ता है",
      "डेटा लिखता है"
    ],
    "answer_en": "Returns current file pointer position",
    "answer_hi": "वर्तमान फ़ाइल पॉइंटर स्थिति लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is macro?",
    "question_hi": "मैक्रो क्या है?",
    "options_en": [
      "Preprocessor symbol replaced before compilation",
      "Function",
      "Variable",
      "Constant"
    ],
    "options_hi": [
      "कम्पाइलेशन से पहले प्रतिस्थापित प्रीप्रोसेसर प्रतीक",
      "फ़ंक्शन",
      "चर",
      "स्थिरांक"
    ],
    "answer_en": "Preprocessor symbol replaced before compilation",
    "answer_hi": "कम्पाइलेशन से पहले प्रतिस्थापित प्रीप्रोसेसर प्रतीक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is #ifdef directive?",
    "question_hi": "#ifdef डायरेक्टिव क्या है?",
    "options_en": [
      "Conditional compilation if macro is defined",
      "Define macro",
      "Undefine macro",
      "Include file"
    ],
    "options_hi": [
      "सशर्त संकलन यदि मैक्रो परिभाषित है",
      "मैक्रो परिभाषित करें",
      "मैक्रो अनडिफाइन करें",
      "फ़ाइल शामिल करें"
    ],
    "answer_en": "Conditional compilation if macro is defined",
    "answer_hi": "सशर्त संकलन यदि मैक्रो परिभाषित है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is #pragma directive?",
    "question_hi": "#pragma डायरेक्टिव क्या है?",
    "options_en": [
      "Compiler-specific directive",
      "Define macro",
      "Include file",
      "Conditional compilation"
    ],
    "options_hi": [
      "कंपाइलर-विशिष्ट निर्देश",
      "मैक्रो परिभाषित करें",
      "फ़ाइल शामिल करें",
      "सशर्त संकलन"
    ],
    "answer_en": "Compiler-specific directive",
    "answer_hi": "कंपाइलर-विशिष्ट निर्देश",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is error handling in C?",
    "question_hi": "C में एरर हैंडलिंग क्या है?",
    "options_en": [
      "Using errno and perror()",
      "try-catch blocks",
      "Exceptions",
      "No error handling"
    ],
    "options_hi": [
      "errno और perror() का उपयोग करना",
      "try-catch ब्लॉक",
      "अपवाद",
      "कोई त्रुटि प्रबंधन नहीं"
    ],
    "answer_en": "Using errno and perror()",
    "answer_hi": "errno और perror() का उपयोग करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is assert() macro?",
    "question_hi": "assert() मैक्रो क्या है?",
    "options_en": [
      "Checks condition and aborts if false",
      "Prints error",
      "Continues execution",
      "Returns value"
    ],
    "options_hi": [
      "स्थिति की जांच करता है और गलत होने पर समाप्त करता है",
      "त्रुटि प्रिंट करता है",
      "निष्पादन जारी रखता है",
      "मान लौटाता है"
    ],
    "answer_en": "Checks condition and aborts if false",
    "answer_hi": "स्थिति की जांच करता है और गलत होने पर समाप्त करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is setjmp() and longjmp()?",
    "question_hi": "setjmp() और longjmp() क्या हैं?",
    "options_en": [
      "Non-local jumps for error handling",
      "Local jumps",
      "Function calls",
      "Loop control"
    ],
    "options_hi": [
      "त्रुटि प्रबंधन के लिए गैर-स्थानीय कूद",
      "स्थानीय कूद",
      "फ़ंक्शन कॉल",
      "लूप नियंत्रण"
    ],
    "answer_en": "Non-local jumps for error handling",
    "answer_hi": "त्रुटि प्रबंधन के लिए गैर-स्थानीय कूद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is signal handling?",
    "question_hi": "सिग्नल हैंडलिंग क्या है?",
    "options_en": [
      "Handling interrupts like SIGINT",
      "Function signals",
      "Variable signals",
      "No signal handling"
    ],
    "options_hi": [
      "SIGINT जैसे इंटरप्ट्स को संभालना",
      "फ़ंक्शन संकेत",
      "चर संकेत",
      "कोई संकेत प्रबंधन नहीं"
    ],
    "answer_en": "Handling interrupts like SIGINT",
    "answer_hi": "SIGINT जैसे इंटरप्ट्स को संभालना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is variable arguments (...) in function?",
    "question_hi": "फ़ंक्शन में वेरिएबल आर्ग्युमेंट्स (...) क्या हैं?",
    "options_en": [
      "Function with variable number of arguments",
      "Fixed arguments",
      "No arguments",
      "Constant arguments"
    ],
    "options_hi": [
      "चर संख्या में तर्कों वाला फ़ंक्शन",
      "निश्चित तर्क",
      "कोई तर्क नहीं",
      "स्थिर तर्क"
    ],
    "answer_en": "Function with variable number of arguments",
    "answer_hi": "चर संख्या में तर्कों वाला फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is va_list, va_start, va_arg, va_end?",
    "question_hi": "va_list, va_start, va_arg, va_end क्या हैं?",
    "options_en": [
      "Macros for variable arguments",
      "Normal functions",
      "Variables",
      "Data types"
    ],
    "options_hi": [
      "चर तर्कों के लिए मैक्रो",
      "सामान्य कार्य",
      "चर",
      "डेटा प्रकार"
    ],
    "answer_en": "Macros for variable arguments",
    "answer_hi": "चर तर्कों के लिए मैक्रो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is qsort() function?",
    "question_hi": "qsort() फ़ंक्शन क्या है?",
    "options_en": [
      "Standard library quick sort function",
      "Quick search",
      "Memory allocation",
      "File operation"
    ],
    "options_hi": [
      "मानक पुस्तकालय क्विक सॉर्ट फ़ंक्शन",
      "त्वरित खोज",
      "मेमोरी आवंटन",
      "फ़ाइल ऑपरेशन"
    ],
    "answer_en": "Standard library quick sort function",
    "answer_hi": "मानक पुस्तकालय क्विक सॉर्ट फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is bsearch() function?",
    "question_hi": "bsearch() फ़ंक्शन क्या है?",
    "options_en": [
      "Binary search function",
      "Linear search",
      "Sort function",
      "Memory search"
    ],
    "options_hi": [
      "बाइनरी सर्च फ़ंक्शन",
      "रैखिक खोज",
      "क्रमबद्ध फ़ंक्शन",
      "मेमोरी खोज"
    ],
    "answer_en": "Binary search function",
    "answer_hi": "बाइनरी सर्च फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "What is time.h header used for?",
    "question_hi": "time.h हेडर किस लिए प्रयोग किया जाता है?",
    "options_en": [
      "Date and time functions",
      "Mathematical functions",
      "String functions",
      "Input/output"
    ],
    "options_hi": [
      "तिथि और समय कार्य",
      "गणितीय कार्य",
      "स्ट्रिंग फ़ंक्शंस",
      "इनपुट/आउटपुट"
    ],
    "answer_en": "Date and time functions",
    "answer_hi": "तिथि और समय कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is clock() function?",
    "question_hi": "clock() फ़ंक्शन क्या है?",
    "options_en": [
      "Returns processor time used",
      "Current time",
      "Date",
      "Timer"
    ],
    "options_hi": [
      "प्रयुक्त प्रोसेसर समय लौटाता है",
      "वर्तमान समय",
      "तिथि",
      "टाइमर"
    ],
    "answer_en": "Returns processor time used",
    "answer_hi": "प्रयुक्त प्रोसेसर समय लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is rand() and srand()?",
    "question_hi": "rand() और srand() क्या हैं?",
    "options_en": [
      "Random number generation functions",
      "Sorting functions",
      "Memory functions",
      "File functions"
    ],
    "options_hi": [
      "यादृच्छिक संख्या उत्पन्न करने वाले कार्य",
      "क्रमबद्ध करने वाले कार्य",
      "मेमोरी कार्य",
      "फ़ाइल कार्य"
    ],
    "answer_en": "Random number generation functions",
    "answer_hi": "यादृच्छिक संख्या उत्पन्न करने वाले कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is exit() vs return?",
    "question_hi": "exit() बनाम return क्या है?",
    "options_en": [
      "exit() terminates program, return exits function",
      "Both same",
      "return terminates program",
      "exit() returns value"
    ],
    "options_hi": [
      "exit() प्रोग्राम समाप्त करता है, return फ़ंक्शन से बाहर निकलता है",
      "दोनों समान",
      "return प्रोग्राम समाप्त करता है",
      "exit() मान लौटाता है"
    ],
    "answer_en": "exit() terminates program, return exits function",
    "answer_hi": "exit() प्रोग्राम समाप्त करता है, return फ़ंक्शन से बाहर निकलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is atexit() function?",
    "question_hi": "atexit() फ़ंक्शन क्या है?",
    "options_en": [
      "Registers function to be called at program exit",
      "Exits immediately",
      "Starts program",
      "Pauses program"
    ],
    "options_hi": [
      "प्रोग्राम से बाहर निकलने पर कॉल किए जाने वाले फ़ंक्शन को पंजीकृत करता है",
      "तुरंत बाहर निकलता है",
      "प्रोग्राम शुरू करता है",
      "प्रोग्राम रोकता है"
    ],
    "answer_en": "Registers function to be called at program exit",
    "answer_hi": "प्रोग्राम से बाहर निकलने पर कॉल किए जाने वाले फ़ंक्शन को पंजीकृत करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is system() function?",
    "question_hi": "system() फ़ंक्शन क्या है?",
    "options_en": [
      "Executes operating system command",
      "System call",
      "Memory allocation",
      "File operation"
    ],
    "options_hi": [
      "ऑपरेटिंग सिस्टम कमांड निष्पादित करता है",
      "सिस्टम कॉल",
      "मेमोरी आवंटन",
      "फ़ाइल ऑपरेशन"
    ],
    "answer_en": "Executes operating system command",
    "answer_hi": "ऑपरेटिंग सिस्टम कमांड निष्पादित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is getchar() vs scanf(\"%c\")?",
    "question_hi": "getchar() बनाम scanf(\"%c\") क्या है?",
    "options_en": [
      "getchar() reads single character, scanf reads with format",
      "Both same",
      "scanf is faster",
      "getchar reads string"
    ],
    "options_hi": [
      "getchar() एकल वर्ण पढ़ता है, scanf फ़ॉर्मेट के साथ पढ़ता है",
      "दोनों समान",
      "scanf तेज है",
      "getchar स्ट्रिंग पढ़ता है"
    ],
    "answer_en": "getchar() reads single character, scanf reads with format",
    "answer_hi": "getchar() एकल वर्ण पढ़ता है, scanf फ़ॉर्मेट के साथ पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is putchar() vs printf(\"%c\")?",
    "question_hi": "putchar() बनाम printf(\"%c\") क्या है?",
    "options_en": [
      "putchar() outputs single character, printf with format",
      "Both same",
      "printf is for characters only",
      "putchar for strings"
    ],
    "options_hi": [
      "putchar() एकल वर्ण आउटपुट करता है, printf फ़ॉर्मेट के साथ",
      "दोनों समान",
      "printf केवल वर्णों के लिए है",
      "putchar स्ट्रिंग्स के लिए"
    ],
    "answer_en": "putchar() outputs single character, printf with format",
    "answer_hi": "putchar() एकल वर्ण आउटपुट करता है, printf फ़ॉर्मेट के साथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is gets() vs fgets()?",
    "question_hi": "gets() बनाम fgets() क्या है?",
    "options_en": [
      "fgets() is safer, gets() is dangerous",
      "Both same",
      "gets() is safer",
      "No difference"
    ],
    "options_hi": [
      "fgets() अधिक सुरक्षित है, gets() खतरनाक है",
      "दोनों समान",
      "gets() अधिक सुरक्षित है",
      "कोई अंतर नहीं"
    ],
    "answer_en": "fgets() is safer, gets() is dangerous",
    "answer_hi": "fgets() अधिक सुरक्षित है, gets() खतरनाक है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is puts() vs printf(\"%s\")?",
    "question_hi": "puts() बनाम printf(\"%s\") क्या है?",
    "options_en": [
      "puts() adds newline automatically",
      "Both same",
      "printf adds newline",
      "puts doesn't output"
    ],
    "options_hi": [
      "puts() स्वचालित रूप से नई लाइन जोड़ता है",
      "दोनों समान",
      "printf नई लाइन जोड़ता है",
      "puts आउटपुट नहीं करता"
    ],
    "answer_en": "puts() adds newline automatically",
    "answer_hi": "puts() स्वचालित रूप से नई लाइन जोड़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is sprintf() function?",
    "question_hi": "sprintf() फ़ंक्शन क्या है?",
    "options_en": [
      "Writes formatted output to string",
      "To console",
      "To file",
      "To memory"
    ],
    "options_hi": [
      "स्ट्रिंग में स्वरूपित आउटपुट लिखता है",
      "कंसोल पर",
      "फ़ाइल में",
      "मेमोरी में"
    ],
    "answer_en": "Writes formatted output to string",
    "answer_hi": "स्ट्रिंग में स्वरूपित आउटपुट लिखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is sscanf() function?",
    "question_hi": "sscanf() फ़ंक्शन क्या है?",
    "options_en": [
      "Reads formatted input from string",
      "From console",
      "From file",
      "From memory"
    ],
    "options_hi": [
      "स्ट्रिंग से स्वरूपित इनपुट पढ़ता है",
      "कंसोल से",
      "फ़ाइल से",
      "मेमोरी से"
    ],
    "answer_en": "Reads formatted input from string",
    "answer_hi": "स्ट्रिंग से स्वरूपित इनपुट पढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is memcpy() vs strcpy()?",
    "question_hi": "memcpy() बनाम strcpy() क्या है?",
    "options_en": [
      "memcpy() copies raw memory, strcpy() copies strings",
      "Both same",
      "strcpy() faster",
      "memcpy() for strings only"
    ],
    "options_hi": [
      "memcpy() कच्ची मेमोरी कॉपी करता है, strcpy() स्ट्रिंग्स कॉपी करता है",
      "दोनों समान",
      "strcpy() तेज",
      "memcpy() केवल स्ट्रिंग्स के लिए"
    ],
    "answer_en": "memcpy() copies raw memory, strcpy() copies strings",
    "answer_hi": "memcpy() कच्ची मेमोरी कॉपी करता है, strcpy() स्ट्रिंग्स कॉपी करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is memset() function?",
    "question_hi": "memset() फ़ंक्शन क्या है?",
    "options_en": [
      "Fills memory with constant byte",
      "Clears memory",
      "Allocates memory",
      "Frees memory"
    ],
    "options_hi": [
      "मेमोरी को स्थिर बाइट से भरता है",
      "मेमोरी साफ करता है",
      "मेमोरी आवंटित करता है",
      "मेमोरी मुक्त करता है"
    ],
    "answer_en": "Fills memory with constant byte",
    "answer_hi": "मेमोरी को स्थिर बाइट से भरता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is memcmp() function?",
    "question_hi": "memcmp() फ़ंक्शन क्या है?",
    "options_en": [
      "Compares two memory blocks",
      "Compares strings",
      "Allocates memory",
      "Copies memory"
    ],
    "options_hi": [
      "दो मेमोरी ब्लॉक की तुलना करता है",
      "स्ट्रिंग्स की तुलना करता है",
      "मेमोरी आवंटित करता है",
      "मेमोरी कॉपी करता है"
    ],
    "answer_en": "Compares two memory blocks",
    "answer_hi": "दो मेमोरी ब्लॉक की तुलना करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is dynamic memory allocation?",
    "question_hi": "डायनामिक मेमोरी अलोकेशन क्या है?",
    "options_en": [
      "Allocating memory at runtime",
      "At compile time",
      "Static allocation",
      "No allocation"
    ],
    "options_hi": [
      "रनटाइम पर मेमोरी आवंटित करना",
      "कम्पाइल टाइम पर",
      "स्थैतिक आवंटन",
      "कोई आवंटन नहीं"
    ],
    "answer_en": "Allocating memory at runtime",
    "answer_hi": "रनटाइम पर मेमोरी आवंटित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is stack vs heap memory?",
    "question_hi": "स्टैक बनाम हीप मेमोरी क्या है?",
    "options_en": [
      "Stack for local variables, heap for dynamic allocation",
      "Both same",
      "Heap for local variables",
      "Stack for dynamic"
    ],
    "options_hi": [
      "स्थानीय चर के लिए स्टैक, गतिशील आवंटन के लिए हीप",
      "दोनों समान",
      "स्थानीय चर के लिए हीप",
      "गतिशील के लिए स्टैक"
    ],
    "answer_en": "Stack for local variables, heap for dynamic allocation",
    "answer_hi": "स्थानीय चर के लिए स्टैक, गतिशील आवंटन के लिए हीप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is stack overflow?",
    "question_hi": "स्टैक ओवरफ्लो क्या है?",
    "options_en": [
      "Stack memory exhausted",
      "Heap memory full",
      "No memory",
      "Memory leak"
    ],
    "options_hi": [
      "स्टैक मेमोरी समाप्त",
      "हीप मेमोरी भरा हुआ",
      "कोई मेमोरी नहीं",
      "मेमोरी लीक"
    ],
    "answer_en": "Stack memory exhausted",
    "answer_hi": "स्टैक मेमोरी समाप्त",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is segmentation fault?",
    "question_hi": "सेगमेंटेशन फॉल्ट क्या है?",
    "options_en": [
      "Accessing invalid memory location",
      "Valid access",
      "File error",
      "Compiler error"
    ],
    "options_hi": [
      "अमान्य मेमोरी स्थान तक पहुंचना",
      "मान्य पहुंच",
      "फ़ाइल त्रुटि",
      "कंपाइलर त्रुटि"
    ],
    "answer_en": "Accessing invalid memory location",
    "answer_hi": "अमान्य मेमोरी स्थान तक पहुंचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is bus error?",
    "question_hi": "बस एरर क्या है?",
    "options_en": [
      "Accessing misaligned memory",
      "Valid access",
      "File error",
      "Network error"
    ],
    "options_hi": [
      "गलत संरेखित मेमोरी तक पहुंचना",
      "मान्य पहुंच",
      "फ़ाइल त्रुटि",
      "नेटवर्क त्रुटि"
    ],
    "answer_en": "Accessing misaligned memory",
    "answer_hi": "गलत संरेखित मेमोरी तक पहुंचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is core dumped?",
    "question_hi": "कोर डम्प्ड क्या है?",
    "options_en": [
      "Memory image saved after crash",
      "Normal exit",
      "File saved",
      "Data saved"
    ],
    "options_hi": [
      "क्रैश के बाद मेमोरी इमेज सहेजी गई",
      "सामान्य निकास",
      "फ़ाइल सहेजी गई",
      "डेटा सहेजा गया"
    ],
    "answer_en": "Memory image saved after crash",
    "answer_hi": "क्रैश के बाद मेमोरी इमेज सहेजी गई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is little endian vs big endian?",
    "question_hi": "लिटिल एंडियन बनाम बिग एंडियन क्या है?",
    "options_en": [
      "Byte order in memory",
      "Bit order",
      "File order",
      "Network order"
    ],
    "options_hi": [
      "मेमोरी में बाइट क्रम",
      "बिट क्रम",
      "फ़ाइल क्रम",
      "नेटवर्क क्रम"
    ],
    "answer_en": "Byte order in memory",
    "answer_hi": "मेमोरी में बाइट क्रम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is compilation process steps?",
    "question_hi": "कम्पाइलेशन प्रक्रिया के चरण क्या हैं?",
    "options_en": [
      "Preprocessing, compilation, assembly, linking",
      "Only compilation",
      "Linking first",
      "Assembly first"
    ],
    "options_hi": [
      "प्रीप्रोसेसिंग, संकलन, असेंबली, लिंकिंग",
      "केवल संकलन",
      "पहले लिंकिंग",
      "पहले असेंबली"
    ],
    "answer_en": "Preprocessing, compilation, assembly, linking",
    "answer_hi": "प्रीप्रोसेसिंग, संकलन, असेंबली, लिंकिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is object file?",
    "question_hi": "ऑब्जेक्ट फ़ाइल क्या है?",
    "options_en": [
      "Machine code with unresolved references",
      "Source code",
      "Executable",
      "Header file"
    ],
    "options_hi": [
      "अनरेज़ॉल्व्ड रेफरेंस के साथ मशीन कोड",
      "स्रोत कोड",
      "निष्पादन योग्य",
      "हेडर फ़ाइल"
    ],
    "answer_en": "Machine code with unresolved references",
    "answer_hi": "अनरेज़ॉल्व्ड रेफरेंस के साथ मशीन कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is executable file?",
    "question_hi": "एक्जीक्यूटेबल फ़ाइल क्या है?",
    "options_en": [
      "Linked machine code ready to run",
      "Object file",
      "Source file",
      "Header file"
    ],
    "options_hi": [
      "चलाने के लिए तैयार लिंक किया गया मशीन कोड",
      "ऑब्जेक्ट फ़ाइल",
      "स्रोत फ़ाइल",
      "हेडर फ़ाइल"
    ],
    "answer_en": "Linked machine code ready to run",
    "answer_hi": "चलाने के लिए तैयार लिंक किया गया मशीन कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is linking?",
    "question_hi": "लिंकिंग क्या है?",
    "options_en": [
      "Combining object files into executable",
      "Compiling source",
      "Preprocessing",
      "Assembling"
    ],
    "options_hi": [
      "ऑब्जेक्ट फ़ाइलों को निष्पादन योग्य में संयोजित करना",
      "स्रोत संकलित करना",
      "पूर्वप्रक्रमण",
      "असेंबलिंग"
    ],
    "answer_en": "Combining object files into executable",
    "answer_hi": "ऑब्जेक्ट फ़ाइलों को निष्पादन योग्य में संयोजित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is static linking?",
    "question_hi": "स्टैटिक लिंकिंग क्या है?",
    "options_en": [
      "Library code included in executable",
      "Linked at runtime",
      "No linking",
      "Dynamic linking"
    ],
    "options_hi": [
      "निष्पादन योग्य में शामिल पुस्तकालय कोड",
      "रनटाइम पर लिंक किया गया",
      "कोई लिंकिंग नहीं",
      "डायनेमिक लिंकिंग"
    ],
    "answer_en": "Library code included in executable",
    "answer_hi": "निष्पादन योग्य में शामिल पुस्तकालय कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is dynamic linking?",
    "question_hi": "डायनेमिक लिंकिंग क्या है?",
    "options_en": [
      "Library linked at runtime",
      "At compile time",
      "No library",
      "Static linking"
    ],
    "options_hi": [
      "रनटाइम पर लिंक किया गया पुस्तकालय",
      "कम्पाइल टाइम पर",
      "कोई पुस्तकालय नहीं",
      "स्थैतिक लिंकिंग"
    ],
    "answer_en": "Library linked at runtime",
    "answer_hi": "रनटाइम पर लिंक किया गया पुस्तकालय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is Makefile?",
    "question_hi": "मेकफ़ाइल क्या है?",
    "options_en": [
      "File containing build instructions",
      "Source file",
      "Header file",
      "Object file"
    ],
    "options_hi": [
      "बिल्ड निर्देश वाली फ़ाइल",
      "स्रोत फ़ाइल",
      "हेडर फ़ाइल",
      "ऑब्जेक्ट फ़ाइल"
    ],
    "answer_en": "File containing build instructions",
    "answer_hi": "बिल्ड निर्देश वाली फ़ाइल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is debugger?",
    "question_hi": "डिबगर क्या है?",
    "options_en": [
      "Tool for finding and fixing bugs",
      "Compiler",
      "Linker",
      "Editor"
    ],
    "options_hi": [
      "बग ढूंढने और ठीक करने के लिए उपकरण",
      "कंपाइलर",
      "लिंकर",
      "संपादक"
    ],
    "answer_en": "Tool for finding and fixing bugs",
    "answer_hi": "बग ढूंढने और ठीक करने के लिए उपकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is profiler?",
    "question_hi": "प्रोफाइलर क्या है?",
    "options_en": [
      "Tool for performance analysis",
      "Debugger",
      "Compiler",
      "Linker"
    ],
    "options_hi": [
      "प्रदर्शन विश्लेषण के लिए उपकरण",
      "डिबगर",
      "कंपाइलर",
      "लिंकर"
    ],
    "answer_en": "Tool for performance analysis",
    "answer_hi": "प्रदर्शन विश्लेषण के लिए उपकरण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is optimization in compilation?",
    "question_hi": "कम्पाइलेशन में ऑप्टिमाइज़ेशन क्या है?",
    "options_en": [
      "Improving code efficiency",
      "Making code longer",
      "Adding bugs",
      "Removing features"
    ],
    "options_hi": [
      "कोड दक्षता में सुधार",
      "कोड लंबा बनाना",
      "बग जोड़ना",
      "सुविधाएँ हटाना"
    ],
    "answer_en": "Improving code efficiency",
    "answer_hi": "कोड दक्षता में सुधार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is -O flag in gcc?",
    "question_hi": "gcc में -O फ्लैग क्या है?",
    "options_en": [
      "Optimization level flag",
      "Output flag",
      "Input flag",
      "Debug flag"
    ],
    "options_hi": [
      "ऑप्टिमाइज़ेशन स्तर फ्लैग",
      "आउटपुट फ्लैग",
      "इनपुट फ्लैग",
      "डिबग फ्लैग"
    ],
    "answer_en": "Optimization level flag",
    "answer_hi": "ऑप्टिमाइज़ेशन स्तर फ्लैग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is -g flag in gcc?",
    "question_hi": "gcc में -g फ्लैग क्या है?",
    "options_en": [
      "Include debug information",
      "Optimize code",
      "Link libraries",
      "Compile only"
    ],
    "options_hi": [
      "डिबग जानकारी शामिल करें",
      "कोड ऑप्टिमाइज़ करें",
      "लाइब्रेरी लिंक करें",
      "केवल संकलित करें"
    ],
    "answer_en": "Include debug information",
    "answer_hi": "डिबग जानकारी शामिल करें",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is stdlib.h header?",
    "question_hi": "stdlib.h हेडर क्या है?",
    "options_en": [
      "Standard library functions header",
      "Math header",
      "String header",
      "IO header"
    ],
    "options_hi": [
      "मानक पुस्तकालय कार्य हेडर",
      "गणित हेडर",
      "स्ट्रिंग हेडर",
      "आईओ हेडर"
    ],
    "answer_en": "Standard library functions header",
    "answer_hi": "मानक पुस्तकालय कार्य हेडर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is string.h header?",
    "question_hi": "string.h हेडर क्या है?",
    "options_en": [
      "String manipulation functions",
      "Math functions",
      "IO functions",
      "Memory functions"
    ],
    "options_hi": [
      "स्ट्रिंग मैनिपुलेशन फ़ंक्शंस",
      "गणितीय कार्य",
      "आईओ कार्य",
      "मेमोरी कार्य"
    ],
    "answer_en": "String manipulation functions",
    "answer_hi": "स्ट्रिंग मैनिपुलेशन फ़ंक्शंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is ctype.h header?",
    "question_hi": "ctype.h हेडर क्या है?",
    "options_en": [
      "Character classification functions",
      "String functions",
      "Math functions",
      "IO functions"
    ],
    "options_hi": [
      "वर्ण वर्गीकरण कार्य",
      "स्ट्रिंग फ़ंक्शंस",
      "गणितीय कार्य",
      "आईओ कार्य"
    ],
    "answer_en": "Character classification functions",
    "answer_hi": "वर्ण वर्गीकरण कार्य",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is stdarg.h header?",
    "question_hi": "stdarg.h हेडर क्या है?",
    "options_en": [
      "Variable arguments handling",
      "Standard arguments",
      "String arguments",
      "Math arguments"
    ],
    "options_hi": [
      "चर तर्क हैंडलिंग",
      "मानक तर्क",
      "स्ट्रिंग तर्क",
      "गणित तर्क"
    ],
    "answer_en": "Variable arguments handling",
    "answer_hi": "चर तर्क हैंडलिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is setjmp.h header?",
    "question_hi": "setjmp.h हेडर क्या है?",
    "options_en": [
      "Non-local jumps",
      "Local jumps",
      "String jumps",
      "Math jumps"
    ],
    "options_hi": [
      "गैर-स्थानीय कूद",
      "स्थानीय कूद",
      "स्ट्रिंग कूद",
      "गणित कूद"
    ],
    "answer_en": "Non-local jumps",
    "answer_hi": "गैर-स्थानीय कूद",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is signal.h header?",
    "question_hi": "signal.h हेडर क्या है?",
    "options_en": [
      "Signal handling functions",
      "String functions",
      "Math functions",
      "IO functions"
    ],
    "options_hi": [
      "सिग्नल हैंडलिंग फ़ंक्शंस",
      "स्ट्रिंग फ़ंक्शंस",
      "गणितीय कार्य",
      "आईओ कार्य"
    ],
    "answer_en": "Signal handling functions",
    "answer_hi": "सिग्नल हैंडलिंग फ़ंक्शंस",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is time.h header functions?",
    "question_hi": "time.h हेडर फ़ंक्शंस क्या हैं?",
    "options_en": [
      "time(), ctime(), difftime() etc.",
      "malloc(), free()",
      "printf(), scanf()",
      "strcpy(), strlen()"
    ],
    "options_hi": [
      "time(), ctime(), difftime() आदि।",
      "malloc(), free()",
      "printf(), scanf()",
      "strcpy(), strlen()"
    ],
    "answer_en": "time(), ctime(), difftime() etc.",
    "answer_hi": "time(), ctime(), difftime() आदि।",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is C standard library?",
    "question_hi": "C स्टैंडर्ड लाइब्रेरी क्या है?",
    "options_en": [
      "Collection of built-in functions",
      "User functions",
      "OS functions",
      "Hardware functions"
    ],
    "options_hi": [
      "अंतर्निहित कार्यों का संग्रह",
      "उपयोगकर्ता कार्य",
      "ओएस कार्य",
      "हार्डवेयर कार्य"
    ],
    "answer_en": "Collection of built-in functions",
    "answer_hi": "अंतर्निहित कार्यों का संग्रह",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is ANSI C standard?",
    "question_hi": "ANSI C स्टैंडर्ड क्या है?",
    "options_en": [
      "First standardized version of C",
      "Latest version",
      "Compiler name",
      "Library name"
    ],
    "options_hi": [
      "C का पहला मानकीकृत संस्करण",
      "नवीनतम संस्करण",
      "कंपाइलर नाम",
      "पुस्तकालय नाम"
    ],
    "answer_en": "First standardized version of C",
    "answer_hi": "C का पहला मानकीकृत संस्करण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is C99 standard feature?",
    "question_hi": "C99 स्टैंडर्ड फीचर क्या है?",
    "options_en": [
      "Inline functions, variable length arrays",
      "Only basic features",
      "No new features",
      "Only C++ features"
    ],
    "options_hi": [
      "इनलाइन फ़ंक्शंस, वेरिएबल लेंथ ऐरे",
      "केवल बुनियादी सुविधाएँ",
      "कोई नई सुविधा नहीं",
      "केवल C++ सुविधाएँ"
    ],
    "answer_en": "Inline functions, variable length arrays",
    "answer_hi": "इनलाइन फ़ंक्शंस, वेरिएबल लेंथ ऐरे",
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