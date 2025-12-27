const questions = [
  {
    "num": 1,
    "question_en": "What will be output: printf(\"%d\", sizeof(3.14));",
    "question_hi": "आउटपुट क्या होगा: printf(\"%d\", sizeof(3.14));",
    "options_en": ["8", "4", "2", "1"],
    "options_hi": ["8", "4", "2", "1"],
    "answer_en": "8",
    "answer_hi": "8",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the difference between int* p and int *p?",
    "question_hi": "int* p और int *p में क्या अंतर है?",
    "options_en": ["No difference, both are same", "Different syntax", "int* p is wrong", "int *p is wrong"],
    "options_hi": ["कोई अंतर नहीं, दोनों समान हैं", "अलग सिंटैक्स", "int* p गलत है", "int *p गलत है"],
    "answer_en": "No difference, both are same",
    "answer_hi": "कोई अंतर नहीं, दोनों समान हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What is the value of NULL in C?",
    "question_hi": "C में NULL का मान क्या है?",
    "options_en": ["0", "1", "-1", "Undefined"],
    "options_hi": ["0", "1", "-1", "अपरिभाषित"],
    "answer_en": "0",
    "answer_hi": "0",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Can we compare two pointers using > operator?",
    "question_hi": "क्या हम दो पॉइंटर्स की तुलना > ऑपरेटर से कर सकते हैं?",
    "options_en": ["Yes, if they point to same array", "Never", "Always", "Only with =="],
    "options_hi": ["हाँ, यदि वे एक ही ऐरे की ओर इशारा करते हैं", "कभी नहीं", "हमेशा", "केवल == से"],
    "answer_en": "Yes, if they point to same array",
    "answer_hi": "हाँ, यदि वे एक ही ऐरे की ओर इशारा करते हैं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is pointer to pointer?",
    "question_hi": "पॉइंटर टू पॉइंटर क्या है?",
    "options_en": ["Pointer that stores address of another pointer", "Two pointers", "Array of pointers", "Function pointer"],
    "options_hi": ["पॉइंटर जो दूसरे पॉइंटर का पता संग्रहीत करता है", "दो पॉइंटर्स", "पॉइंटर्स की सरणी", "फ़ंक्शन पॉइंटर"],
    "answer_en": "Pointer that stores address of another pointer",
    "answer_hi": "पॉइंटर जो दूसरे पॉइंटर का पता संग्रहीत करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "How to declare pointer to integer?",
    "question_hi": "इंटीजर का पॉइंटर कैसे डिक्लेयर करें?",
    "options_en": ["int *p;", "int p*;", "pointer int p;", "int pointer p;"],
    "options_hi": ["int *p;", "int p*;", "pointer int p;", "int pointer p;"],
    "answer_en": "int *p;",
    "answer_hi": "int *p;",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "What does *p++ do?",
    "question_hi": "*p++ क्या करता है?",
    "options_en": ["Dereference p then increment p", "Increment p then dereference", "Only dereference", "Only increment"],
    "options_hi": ["p को डीरिफरेंस करता है फिर p बढ़ाता है", "p बढ़ाता है फिर डीरिफरेंस करता है", "केवल डीरिफरेंस", "केवल इंक्रीमेंट"],
    "answer_en": "Dereference p then increment p",
    "answer_hi": "p को डीरिफरेंस करता है फिर p बढ़ाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does (*p)++ do?",
    "question_hi": "(*p)++ क्या करता है?",
    "options_en": ["Increment value pointed by p", "Increment pointer p", "Both", "None"],
    "options_hi": ["p द्वारा इंगित मान बढ़ाता है", "पॉइंटर p बढ़ाता है", "दोनों", "कोई नहीं"],
    "answer_en": "Increment value pointed by p",
    "answer_hi": "p द्वारा इंगित मान बढ़ाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "What is array of pointers?",
    "question_hi": "पॉइंटर्स की सरणी क्या है?",
    "options_en": ["Array where each element is pointer", "Pointer to array", "Array of arrays", "Single pointer"],
    "options_hi": ["सरणी जहां प्रत्येक तत्व पॉइंटर है", "सरणी का पॉइंटर", "सरणियों की सरणी", "एकल पॉइंटर"],
    "answer_en": "Array where each element is pointer",
    "answer_hi": "सरणी जहां प्रत्येक तत्व पॉइंटर है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is pointer to array?",
    "question_hi": "सरणी का पॉइंटर क्या है?",
    "options_en": ["Pointer that points to entire array", "Array of pointers", "Normal pointer", "Function pointer"],
    "options_hi": ["पॉइंटर जो पूरी सरणी की ओर इशारा करता है", "पॉइंटर्स की सरणी", "सामान्य पॉइंटर", "फ़ंक्शन पॉइंटर"],
    "answer_en": "Pointer that points to entire array",
    "answer_hi": "पॉइंटर जो पूरी सरणी की ओर इशारा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What will be output: int a[3] = {1,2,3}; printf(\"%d\", a[3]);",
    "question_hi": "आउटपुट क्या होगा: int a[3] = {1,2,3}; printf(\"%d\", a[3]);",
    "options_en": ["Undefined behavior", "0", "3", "Garbage value"],
    "options_hi": ["अपरिभाषित व्यवहार", "0", "3", "कचरा मूल्य"],
    "answer_en": "Undefined behavior",
    "answer_hi": "अपरिभाषित व्यवहार",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is string concatenation?",
    "question_hi": "स्ट्रिंग कॉन्कैटनेशन क्या है?",
    "options_en": ["Joining two strings", "Comparing strings", "Copying strings", "Splitting strings"],
    "options_hi": ["दो स्ट्रिंग्स को जोड़ना", "स्ट्रिंग्स की तुलना करना", "स्ट्रिंग्स कॉपी करना", "स्ट्रिंग्स विभाजित करना"],
    "answer_en": "Joining two strings",
    "answer_hi": "दो स्ट्रिंग्स को जोड़ना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function concatenates strings?",
    "question_hi": "कौन सा फ़ंक्शन स्ट्रिंग्स को जोड़ता है?",
    "options_en": ["strcat()", "strcpy()", "strcmp()", "strlen()"],
    "options_hi": ["strcat()", "strcpy()", "strcmp()", "strlen()"],
    "answer_en": "strcat()",
    "answer_hi": "strcat()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does strcmp() return?",
    "question_hi": "strcmp() क्या लौटाता है?",
    "options_en": ["0 if equal, negative if first < second, positive if first > second", "Always 0", "Length difference", "Address difference"],
    "options_hi": ["0 यदि समान, नकारात्मक यदि पहला < दूसरा, सकारात्मक यदि पहला > दूसरा", "हमेशा 0", "लंबाई अंतर", "पता अंतर"],
    "answer_en": "0 if equal, negative if first < second, positive if first > second",
    "answer_hi": "0 यदि समान, नकारात्मक यदि पहला < दूसरा, सकारात्मक यदि पहला > दूसरा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "What is the difference between strcmp() and strncmp()?",
    "question_hi": "strcmp() और strncmp() में क्या अंतर है?",
    "options_en": ["strncmp() compares only first n characters", "Both same", "strcmp() is faster", "strncmp() compares all"],
    "options_hi": ["strncmp() केवल पहले n वर्णों की तुलना करता है", "दोनों समान", "strcmp() तेज है", "strncmp() सभी की तुलना करता है"],
    "answer_en": "strncmp() compares only first n characters",
    "answer_hi": "strncmp() केवल पहले n वर्णों की तुलना करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What does strlen() return?",
    "question_hi": "strlen() क्या लौटाता है?",
    "options_en": ["Length of string excluding null character", "Including null", "Size in bytes", "Address"],
    "options_hi": ["नल वर्ण को छोड़कर स्ट्रिंग की लंबाई", "नल सहित", "बाइट्स में आकार", "पता"],
    "answer_en": "Length of string excluding null character",
    "answer_hi": "नल वर्ण को छोड़कर स्ट्रिंग की लंबाई",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is the difference between sizeof and strlen for string?",
    "question_hi": "स्ट्रिंग के लिए sizeof और strlen में क्या अंतर है?",
    "options_en": ["sizeof includes null, strlen excludes null", "Both same", "strlen includes null", "sizeof excludes null"],
    "options_hi": ["sizeof नल शामिल करता है, strlen नल को छोड़ देता है", "दोनों समान", "strlen नल शामिल करता है", "sizeof नल को छोड़ देता है"],
    "answer_en": "sizeof includes null, strlen excludes null",
    "answer_hi": "sizeof नल शामिल करता है, strlen नल को छोड़ देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is strchr() function?",
    "question_hi": "strchr() फ़ंक्शन क्या है?",
    "options_en": ["Finds first occurrence of character in string", "Last occurrence", "Any occurrence", "No such function"],
    "options_hi": ["स्ट्रिंग में वर्ण की पहली घटना ढूंढता है", "अंतिम घटना", "कोई भी घटना", "ऐसा कोई फ़ंक्शन नहीं"],
    "answer_en": "Finds first occurrence of character in string",
    "answer_hi": "स्ट्रिंग में वर्ण की पहली घटना ढूंढता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "What is strstr() function?",
    "question_hi": "strstr() फ़ंक्शन क्या है?",
    "options_en": ["Finds substring in string", "Finds character", "Compares strings", "Copies strings"],
    "options_hi": ["स्ट्रिंग में उपस्ट्रिंग ढूंढता है", "वर्ण ढूंढता है", "स्ट्रिंग्स की तुलना करता है", "स्ट्रिंग्स कॉपी करता है"],
    "answer_en": "Finds substring in string",
    "answer_hi": "स्ट्रिंग में उपस्ट्रिंग ढूंढता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is strtok() function?",
    "question_hi": "strtok() फ़ंक्शन क्या है?",
    "options_en": ["Splits string into tokens", "Joins strings", "Copies strings", "Compares strings"],
    "options_hi": ["स्ट्रिंग को टोकन में विभाजित करता है", "स्ट्रिंग्स जोड़ता है", "स्ट्रिंग्स कॉपी करता है", "स्ट्रिंग्स की तुलना करता है"],
    "answer_en": "Splits string into tokens",
    "answer_hi": "स्ट्रिंग को टोकन में विभाजित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is atoi() function?",
    "question_hi": "atoi() फ़ंक्शन क्या है?",
    "options_en": ["Converts string to integer", "Integer to string", "Float to string", "String to float"],
    "options_hi": ["स्ट्रिंग को पूर्णांक में परिवर्तित करता है", "पूर्णांक को स्ट्रिंग में", "फ्लोट को स्ट्रिंग में", "स्ट्रिंग को फ्लोट में"],
    "answer_en": "Converts string to integer",
    "answer_hi": "स्ट्रिंग को पूर्णांक में परिवर्तित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is itoa() function?",
    "question_hi": "itoa() फ़ंक्शन क्या है?",
    "options_en": ["Converts integer to string", "String to integer", "Float to string", "Not standard C"],
    "options_hi": ["पूर्णांक को स्ट्रिंग में परिवर्तित करता है", "स्ट्रिंग को पूर्णांक में", "फ्लोट को स्ट्रिंग में", "मानक C नहीं"],
    "answer_en": "Converts integer to string",
    "answer_hi": "पूर्णांक को स्ट्रिंग में परिवर्तित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "What is atof() function?",
    "question_hi": "atof() फ़ंक्शन क्या है?",
    "options_en": ["Converts string to double", "Double to string", "Integer to string", "Float to integer"],
    "options_hi": ["स्ट्रिंग को डबल में परिवर्तित करता है", "डबल को स्ट्रिंग में", "पूर्णांक को स्ट्रिंग में", "फ्लोट को पूर्णांक में"],
    "answer_en": "Converts string to double",
    "answer_hi": "स्ट्रिंग को डबल में परिवर्तित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is sprintf() used for?",
    "question_hi": "sprintf() किस लिए प्रयोग किया जाता है?",
    "options_en": ["Formatted output to string", "To console", "To file", "To network"],
    "options_hi": ["स्ट्रिंग में स्वरूपित आउटपुट", "कंसोल पर", "फ़ाइल में", "नेटवर्क पर"],
    "answer_en": "Formatted output to string",
    "answer_hi": "स्ट्रिंग में स्वरूपित आउटपुट",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is the risk of using sprintf()?",
    "question_hi": "sprintf() का उपयोग करने का जोखिम क्या है?",
    "options_en": ["Buffer overflow", "Memory leak", "Slow performance", "No risk"],
    "options_hi": ["बफ़र ओवरफ्लो", "मेमोरी लीक", "धीमा प्रदर्शन", "कोई जोखिम नहीं"],
    "answer_en": "Buffer overflow",
    "answer_hi": "बफ़र ओवरफ्लो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is snprintf()?",
    "question_hi": "snprintf() क्या है?",
    "options_en": ["Safe version of sprintf() with size limit", "Same as sprintf", "Faster version", "Different function"],
    "options_hi": ["आकार सीमा के साथ sprintf() का सुरक्षित संस्करण", "sprintf के समान", "तेज़ संस्करण", "अलग फ़ंक्शन"],
    "answer_en": "Safe version of sprintf() with size limit",
    "answer_hi": "आकार सीमा के साथ sprintf() का सुरक्षित संस्करण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is structure tag?",
    "question_hi": "स्ट्रक्चर टैग क्या है?",
    "options_en": ["Name of structure type", "Variable name", "Member name", "Function name"],
    "options_hi": ["संरचना प्रकार का नाम", "चर नाम", "सदस्य नाम", "फ़ंक्शन नाम"],
    "answer_en": "Name of structure type",
    "answer_hi": "संरचना प्रकार का नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "How to access structure member?",
    "question_hi": "स्ट्रक्चर मेम्बर को कैसे एक्सेस करें?",
    "options_en": ["Using dot operator (.)", "Arrow operator (->)", "Both", "Colon operator"],
    "options_hi": ["डॉट ऑपरेटर (.) का उपयोग करके", "एरो ऑपरेटर (->)", "दोनों", "कोलन ऑपरेटर"],
    "answer_en": "Using dot operator (.)",
    "answer_hi": "डॉट ऑपरेटर (.) का उपयोग करके",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "When to use arrow operator (->)?",
    "question_hi": "एरो ऑपरेटर (->) कब उपयोग करें?",
    "options_en": ["With pointer to structure", "With structure variable", "With array", "Never"],
    "options_hi": ["संरचना के पॉइंटर के साथ", "संरचना चर के साथ", "सरणी के साथ", "कभी नहीं"],
    "answer_en": "With pointer to structure",
    "answer_hi": "संरचना के पॉइंटर के साथ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is nested structure?",
    "question_hi": "नेस्टेड स्ट्रक्चर क्या है?",
    "options_en": ["Structure inside another structure", "Multiple structures", "Array of structures", "Pointer to structure"],
    "options_hi": ["एक संरचना के अंदर दूसरी संरचना", "एकाधिक संरचनाएँ", "संरचनाओं की सरणी", "संरचना का पॉइंटर"],
    "answer_en": "Structure inside another structure",
    "answer_hi": "एक संरचना के अंदर दूसरी संरचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is array of structures?",
    "question_hi": "संरचनाओं की सरणी क्या है?",
    "options_en": ["Array where each element is structure", "Structure of arrays", "Single structure", "Pointer array"],
    "options_hi": ["सरणी जहां प्रत्येक तत्व संरचना है", "सरणियों की संरचना", "एकल संरचना", "पॉइंटर सरणी"],
    "answer_en": "Array where each element is structure",
    "answer_hi": "सरणी जहां प्रत्येक तत्व संरचना है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is pointer to structure?",
    "question_hi": "संरचना का पॉइंटर क्या है?",
    "options_en": ["Pointer that points to structure", "Structure containing pointer", "Array of pointers", "None"],
    "options_hi": ["पॉइंटर जो संरचना की ओर इशारा करता है", "पॉइंटर वाली संरचना", "पॉइंटर्स की सरणी", "कोई नहीं"],
    "answer_en": "Pointer that points to structure",
    "answer_hi": "पॉइंटर जो संरचना की ओर इशारा करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is self-referential structure?",
    "question_hi": "सेल्फ-रेफरेंशियल स्ट्रक्चर क्या है?",
    "options_en": ["Structure containing pointer to same type", "Structure pointing to itself", "Recursive structure", "No such thing"],
    "options_hi": ["समान प्रकार के पॉइंटर वाली संरचना", "स्वयं की ओर इशारा करने वाली संरचना", "पुनरावर्ती संरचना", "ऐसी कोई चीज़ नहीं"],
    "answer_en": "Structure containing pointer to same type",
    "answer_hi": "समान प्रकार के पॉइंटर वाली संरचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is forward declaration of structure?",
    "question_hi": "स्ट्रक्चर का फॉरवर्ड डिक्लेरेशन क्या है?",
    "options_en": ["Declaring structure before defining", "Defining first", "No declaration", "After definition"],
    "options_hi": ["परिभाषित करने से पहले संरचना घोषित करना", "पहले परिभाषित करना", "कोई घोषणा नहीं", "परिभाषा के बाद"],
    "answer_en": "Declaring structure before defining",
    "answer_hi": "परिभाषित करने से पहले संरचना घोषित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is anonymous structure?",
    "question_hi": "अनाम संरचना क्या है?",
    "options_en": ["Structure without tag name", "Structure with name", "Empty structure", "No members"],
    "options_hi": ["टैग नाम के बिना संरचना", "नाम के साथ संरचना", "खाली संरचना", "कोई सदस्य नहीं"],
    "answer_en": "Structure without tag name",
    "answer_hi": "टैग नाम के बिना संरचना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is flexible array member?",
    "question_hi": "फ्लेक्सिबल ऐरे मेम्बर क्या है?",
    "options_en": ["Array without size at end of structure", "Fixed array", "Pointer array", "No array"],
    "options_hi": ["संरचना के अंत में आकार के बिना सरणी", "निश्चित सरणी", "पॉइंटर सरणी", "कोई सरणी नहीं"],
    "answer_en": "Array without size at end of structure",
    "answer_hi": "संरचना के अंत में आकार के बिना सरणी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is union initialization?",
    "question_hi": "यूनियन इनिशियलाइज़ेशन क्या है?",
    "options_en": ["Only first member can be initialized", "All members", "No initialization", "Random member"],
    "options_hi": ["केवल पहले सदस्य को आरंभ किया जा सकता है", "सभी सदस्य", "कोई आरंभीकरण नहीं", "यादृच्छिक सदस्य"],
    "answer_en": "Only first member can be initialized",
    "answer_hi": "केवल पहले सदस्य को आरंभ किया जा सकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is enum constant value?",
    "question_hi": "enum कॉन्स्टेंट वैल्यू क्या है?",
    "options_en": ["Starts from 0, increments by 1", "Always 0", "Random", "Starts from 1"],
    "options_hi": ["0 से शुरू होता है, 1 से बढ़ता है", "हमेशा 0", "यादृच्छिक", "1 से शुरू होता है"],
    "answer_en": "Starts from 0, increments by 1",
    "answer_hi": "0 से शुरू होता है, 1 से बढ़ता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Can we assign integer to enum variable?",
    "question_hi": "क्या हम enum वेरिएबल को इंटीजर असाइन कर सकते हैं?",
    "options_en": ["Yes", "No", "Only in C++", "Only negative"],
    "options_hi": ["हाँ", "नहीं", "केवल C++ में", "केवल नकारात्मक"],
    "answer_en": "Yes",
    "answer_hi": "हाँ",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is typedef with structure?",
    "question_hi": "स्ट्रक्चर के साथ typedef क्या है?",
    "options_en": ["Creates alias for structure type", "Creates variable", "Creates function", "No use"],
    "options_hi": ["संरचना प्रकार के लिए उपनाम बनाता है", "चर बनाता है", "फ़ंक्शन बनाता है", "कोई उपयोग नहीं"],
    "answer_en": "Creates alias for structure type",
    "answer_hi": "संरचना प्रकार के लिए उपनाम बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is file descriptor?",
    "question_hi": "फ़ाइल डिस्क्रिप्टर क्या है?",
    "options_en": ["Integer representing open file", "File name", "File pointer", "File size"],
    "options_hi": ["खुली फ़ाइल का प्रतिनिधित्व करने वाला पूर्णांक", "फ़ाइल नाम", "फ़ाइल पॉइंटर", "फ़ाइल आकार"],
    "answer_en": "Integer representing open file",
    "answer_hi": "खुली फ़ाइल का प्रतिनिधित्व करने वाला पूर्णांक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is EOF?",
    "question_hi": "EOF क्या है?",
    "options_en": ["End Of File constant", "Error Of File", "End Of Function", "End Of Program"],
    "options_hi": ["फ़ाइल का अंत स्थिरांक", "फ़ाइल की त्रुटि", "फ़ंक्शन का अंत", "प्रोग्राम का अंत"],
    "answer_en": "End Of File constant",
    "answer_hi": "फ़ाइल का अंत स्थिरांक",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the value of EOF?",
    "question_hi": "EOF का मान क्या है?",
    "options_en": ["-1", "0", "1", "255"],
    "options_hi": ["-1", "0", "1", "255"],
    "answer_en": "-1",
    "answer_hi": "-1",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is fflush() function?",
    "question_hi": "fflush() फ़ंक्शन क्या है?",
    "options_en": ["Flushes output buffer", "Clears input buffer", "Closes file", "Opens file"],
    "options_hi": ["आउटपुट बफ़र फ्लश करता है", "इनपुट बफ़र साफ़ करता है", "फ़ाइल बंद करता है", "फ़ाइल खोलता है"],
    "answer_en": "Flushes output buffer",
    "answer_hi": "आउटपुट बफ़र फ्लश करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is freopen() function?",
    "question_hi": "freopen() फ़ंक्शन क्या है?",
    "options_en": ["Reassigns file stream", "Closes file", "Opens new file", "Reads file"],
    "options_hi": ["फ़ाइल स्ट्रीम पुन: असाइन करता है", "फ़ाइल बंद करता है", "नई फ़ाइल खोलता है", "फ़ाइल पढ़ता है"],
    "answer_en": "Reassigns file stream",
    "answer_hi": "फ़ाइल स्ट्रीम पुन: असाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is tmpfile() function?",
    "question_hi": "tmpfile() फ़ंक्शन क्या है?",
    "options_en": ["Creates temporary file", "Permanent file", "Directory", "Link"],
    "options_hi": ["अस्थायी फ़ाइल बनाता है", "स्थायी फ़ाइल", "निर्देशिका", "लिंक"],
    "answer_en": "Creates temporary file",
    "answer_hi": "अस्थायी फ़ाइल बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is remove() function?",
    "question_hi": "remove() फ़ंक्शन क्या है?",
    "options_en": ["Deletes file", "Removes directory", "Deletes memory", "Removes variable"],
    "options_hi": ["फ़ाइल हटाता है", "निर्देशिका हटाता है", "मेमोरी हटाता है", "चर हटाता है"],
    "answer_en": "Deletes file",
    "answer_hi": "फ़ाइल हटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is rename() function?",
    "question_hi": "rename() फ़ंक्शन क्या है?",
    "options_en": ["Renames file", "Renames variable", "Renames function", "Renames directory"],
    "options_hi": ["फ़ाइल का नाम बदलता है", "चर का नाम बदलता है", "फ़ंक्शन का नाम बदलता है", "निर्देशिका का नाम बदलता है"],
    "answer_en": "Renames file",
    "answer_hi": "फ़ाइल का नाम बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is feof() function?",
    "question_hi": "feof() फ़ंक्शन क्या है?",
    "options_en": ["Checks end-of-file indicator", "Sets EOF", "Clears EOF", "Returns EOF"],
    "options_hi": ["फ़ाइल-समाप्ति संकेतक की जाँच करता है", "EOF सेट करता है", "EOF साफ़ करता है", "EOF लौटाता है"],
    "answer_en": "Checks end-of-file indicator",
    "answer_hi": "फ़ाइल-समाप्ति संकेतक की जाँच करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is ferror() function?",
    "question_hi": "ferror() फ़ंक्शन क्या है?",
    "options_en": ["Checks error indicator", "Sets error", "Clears error", "Returns error"],
    "options_hi": ["त्रुटि संकेतक की जाँच करता है", "त्रुटि सेट करता है", "त्रुटि साफ़ करता है", "त्रुटि लौटाता है"],
    "answer_en": "Checks error indicator",
    "answer_hi": "त्रुटि संकेतक की जाँच करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 51,
    "question_en": "What is clearerr() function?",
    "question_hi": "clearerr() फ़ंक्शन क्या है?",
    "options_en": ["Clears error and EOF indicators", "Sets error", "Checks error", "Returns error"],
    "options_hi": ["त्रुटि और EOF संकेतक साफ़ करता है", "त्रुटि सेट करता है", "त्रुटि की जाँच करता है", "त्रुटि लौटाता है"],
    "answer_en": "Clears error and EOF indicators",
    "answer_hi": "त्रुटि और EOF संकेतक साफ़ करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 52,
    "question_en": "What is ungetc() function?",
    "question_hi": "ungetc() फ़ंक्शन क्या है?",
    "options_en": ["Pushes character back to input stream", "Gets character", "Puts character", "Removes character"],
    "options_hi": ["वर्ण को इनपुट स्ट्रीम में वापस धकेलता है", "वर्ण प्राप्त करता है", "वर्ण डालता है", "वर्ण हटाता है"],
    "answer_en": "Pushes character back to input stream",
    "answer_hi": "वर्ण को इनपुट स्ट्रीम में वापस धकेलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 53,
    "question_en": "What is setbuf() function?",
    "question_hi": "setbuf() फ़ंक्शन क्या है?",
    "options_en": ["Sets buffer for file stream", "Clears buffer", "Gets buffer", "Removes buffer"],
    "options_hi": ["फ़ाइल स्ट्रीम के लिए बफ़र सेट करता है", "बफ़र साफ़ करता है", "बफ़र प्राप्त करता है", "बफ़र हटाता है"],
    "answer_en": "Sets buffer for file stream",
    "answer_hi": "फ़ाइल स्ट्रीम के लिए बफ़र सेट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 54,
    "question_en": "What is the difference between text and binary mode?",
    "question_hi": "टेक्स्ट और बाइनरी मोड में क्या अंतर है?",
    "options_en": ["Text mode converts newlines, binary doesn't", "Both same", "Binary converts newlines", "No conversion"],
    "options_hi": ["टेक्स्ट मोड नई लाइनों को परिवर्तित करता है, बाइनरी नहीं", "दोनों समान", "बाइनरी नई लाइनों को परिवर्तित करता है", "कोई रूपांतरण नहीं"],
    "answer_en": "Text mode converts newlines, binary doesn't",
    "answer_hi": "टेक्स्ट मोड नई लाइनों को परिवर्तित करता है, बाइनरी नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 55,
    "question_en": "What is command substitution?",
    "question_hi": "कमांड सब्स्टीट्यूशन क्या है?",
    "options_en": ["Using system() to execute command", "Variable substitution", "Function substitution", "No such thing"],
    "options_hi": ["कमांड निष्पादित करने के लिए system() का उपयोग", "चर प्रतिस्थापन", "फ़ंक्शन प्रतिस्थापन", "ऐसी कोई चीज़ नहीं"],
    "answer_en": "Using system() to execute command",
    "answer_hi": "कमांड निष्पादित करने के लिए system() का उपयोग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 56,
    "question_en": "What is environment variable?",
    "question_hi": "एनवायरनमेंट वेरिएबल क्या है?",
    "options_en": ["System variable accessible to programs", "Local variable", "Global variable", "Constant"],
    "options_hi": ["प्रोग्रामों के लिए सुलभ सिस्टम चर", "स्थानीय चर", "वैश्विक चर", "स्थिरांक"],
    "answer_en": "System variable accessible to programs",
    "answer_hi": "प्रोग्रामों के लिए सुलभ सिस्टम चर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 57,
    "question_en": "How to get environment variable in C?",
    "question_hi": "C में एनवायरनमेंट वेरिएबल कैसे प्राप्त करें?",
    "options_en": ["getenv() function", "setenv()", "putenv()", "env()"],
    "options_hi": ["getenv() फ़ंक्शन", "setenv()", "putenv()", "env()"],
    "answer_en": "getenv() function",
    "answer_hi": "getenv() फ़ंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 58,
    "question_en": "What is variable argument macro?",
    "question_hi": "वेरिएबल आर्ग्युमेंट मैक्रो क्या है?",
    "options_en": ["Macro accepting variable number of arguments", "Fixed arguments", "No arguments", "Only one argument"],
    "options_hi": ["चर संख्या में तर्क स्वीकार करने वाला मैक्रो", "निश्चित तर्क", "कोई तर्क नहीं", "केवल एक तर्क"],
    "answer_en": "Macro accepting variable number of arguments",
    "answer_hi": "चर संख्या में तर्क स्वीकार करने वाला मैक्रो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 59,
    "question_en": "What is ## preprocessor operator?",
    "question_hi": "## प्रीप्रोसेसर ऑपरेटर क्या है?",
    "options_en": ["Token pasting operator", "Stringizing operator", "Comment operator", "Include operator"],
    "options_hi": ["टोकन पेस्टिंग ऑपरेटर", "स्ट्रिंगाइजिंग ऑपरेटर", "टिप्पणी ऑपरेटर", "शामिल करने वाला ऑपरेटर"],
    "answer_en": "Token pasting operator",
    "answer_hi": "टोकन पेस्टिंग ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 60,
    "question_en": "What is # preprocessor operator?",
    "question_hi": "# प्रीप्रोसेसर ऑपरेटर क्या है?",
    "options_en": ["Stringizing operator", "Token pasting", "Comment", "Include"],
    "options_hi": ["स्ट्रिंगाइजिंग ऑपरेटर", "टोकन पेस्टिंग", "टिप्पणी", "शामिल करना"],
    "answer_en": "Stringizing operator",
    "answer_hi": "स्ट्रिंगाइजिंग ऑपरेटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 61,
    "question_en": "What is #error directive?",
    "question_hi": "#error डायरेक्टिव क्या है?",
    "options_en": ["Generates compilation error", "Warning", "Info", "No effect"],
    "options_hi": ["संकलन त्रुटि उत्पन्न करता है", "चेतावनी", "जानकारी", "कोई प्रभाव नहीं"],
    "answer_en": "Generates compilation error",
    "answer_hi": "संकलन त्रुटि उत्पन्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 62,
    "question_en": "What is #warning directive?",
    "question_hi": "#warning डायरेक्टिव क्या है?",
    "options_en": ["Generates compilation warning", "Error", "Info", "Not in C"],
    "options_hi": ["संकलन चेतावनी उत्पन्न करता है", "त्रुटि", "जानकारी", "C में नहीं"],
    "answer_en": "Generates compilation warning",
    "answer_hi": "संकलन चेतावनी उत्पन्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 63,
    "question_en": "What is #line directive?",
    "question_hi": "#line डायरेक्टिव क्या है?",
    "options_en": ["Changes line number for compiler", "Adds line", "Deletes line", "Comments line"],
    "options_hi": ["कंपाइलर के लिए लाइन नंबर बदलता है", "लाइन जोड़ता है", "लाइन हटाता है", "लाइन टिप्पणी करता है"],
    "answer_en": "Changes line number for compiler",
    "answer_hi": "कंपाइलर के लिए लाइन नंबर बदलता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 64,
    "question_en": "What is #pragma once?",
    "question_hi": "#pragma once क्या है?",
    "options_en": ["Prevents multiple inclusion of header", "Includes once", "Error if included twice", "Not standard"],
    "options_hi": ["हेडर के कई बार शामिल होने से रोकता है", "एक बार शामिल करता है", "दो बार शामिल होने पर त्रुटि", "मानक नहीं"],
    "answer_en": "Prevents multiple inclusion of header",
    "answer_hi": "हेडर के कई बार शामिल होने से रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 65,
    "question_en": "What is conditional compilation?",
    "question_hi": "सशर्त संकलन क्या है?",
    "options_en": ["Compiling code based on conditions", "Always compile", "Never compile", "Runtime conditions"],
    "options_hi": ["शर्तों के आधार पर कोड संकलित करना", "हमेशा संकलित करें", "कभी संकलित न करें", "रनटाइम शर्तें"],
    "answer_en": "Compiling code based on conditions",
    "answer_hi": "शर्तों के आधार पर कोड संकलित करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 66,
    "question_en": "What is #ifndef directive?",
    "question_hi": "#ifndef डायरेक्टिव क्या है?",
    "options_en": ["If not defined", "If defined", "Always", "Never"],
    "options_hi": ["यदि परिभाषित नहीं है", "यदि परिभाषित है", "हमेशा", "कभी नहीं"],
    "answer_en": "If not defined",
    "answer_hi": "यदि परिभाषित नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 67,
    "question_en": "What is #undef directive?",
    "question_hi": "#undef डायरेक्टिव क्या है?",
    "options_en": ["Undefines macro", "Defines macro", "Redefines", "Checks macro"],
    "options_hi": ["मैक्रो को अनडिफाइन करता है", "मैक्रो परिभाषित करता है", "पुन: परिभाषित करता है", "मैक्रो की जाँच करता है"],
    "answer_en": "Undefines macro",
    "answer_hi": "मैक्रो को अनडिफाइन करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 68,
    "question_en": "What is function-like macro?",
    "question_hi": "फ़ंक्शन-जैसा मैक्रो क्या है?",
    "options_en": ["Macro that looks like function call", "Actual function", "Variable", "Constant"],
    "options_hi": ["मैक्रो जो फ़ंक्शन कॉल जैसा दिखता है", "वास्तविक फ़ंक्शन", "चर", "स्थिरांक"],
    "answer_en": "Macro that looks like function call",
    "answer_hi": "मैक्रो जो फ़ंक्शन कॉल जैसा दिखता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 69,
    "question_en": "What is the risk of function-like macros?",
    "question_hi": "फ़ंक्शन-जैसे मैक्रो का जोखिम क्या है?",
    "options_en": ["Multiple evaluation of arguments", "No risk", "Slow", "Memory leak"],
    "options_hi": ["तर्कों का एकाधिक मूल्यांकन", "कोई जोखिम नहीं", "धीमा", "मेमोरी लीक"],
    "answer_en": "Multiple evaluation of arguments",
    "answer_hi": "तर्कों का एकाधिक मूल्यांकन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 70,
    "question_en": "What is variadic macro?",
    "question_hi": "वेरिएडिक मैक्रो क्या है?",
    "options_en": ["Macro with variable arguments", "Fixed arguments", "No arguments", "One argument"],
    "options_hi": ["चर तर्कों वाला मैक्रो", "निश्चित तर्क", "कोई तर्क नहीं", "एक तर्क"],
    "answer_en": "Macro with variable arguments",
    "answer_hi": "चर तर्कों वाला मैक्रो",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 71,
    "question_en": "What is __FILE__ macro?",
    "question_hi": "__FILE__ मैक्रो क्या है?",
    "options_en": ["Current filename", "Line number", "Function name", "Date"],
    "options_hi": ["वर्तमान फ़ाइलनाम", "पंक्ति संख्या", "फ़ंक्शन नाम", "तिथि"],
    "answer_en": "Current filename",
    "answer_hi": "वर्तमान फ़ाइलनाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 72,
    "question_en": "What is __LINE__ macro?",
    "question_hi": "__LINE__ मैक्रो क्या है?",
    "options_en": ["Current line number", "Filename", "Function", "Date"],
    "options_hi": ["वर्तमान पंक्ति संख्या", "फ़ाइलनाम", "फ़ंक्शन", "तिथि"],
    "answer_en": "Current line number",
    "answer_hi": "वर्तमान पंक्ति संख्या",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 73,
    "question_en": "What is __DATE__ macro?",
    "question_hi": "__DATE__ मैक्रो क्या है?",
    "options_en": ["Compilation date", "Current date", "File date", "No such macro"],
    "options_hi": ["संकलन तिथि", "वर्तमान तिथि", "फ़ाइल तिथि", "ऐसा कोई मैक्रो नहीं"],
    "answer_en": "Compilation date",
    "answer_hi": "संकलन तिथि",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 74,
    "question_en": "What is __TIME__ macro?",
    "question_hi": "__TIME__ मैक्रो क्या है?",
    "options_en": ["Compilation time", "Current time", "File time", "Execution time"],
    "options_hi": ["संकलन समय", "वर्तमान समय", "फ़ाइल समय", "निष्पादन समय"],
    "answer_en": "Compilation time",
    "answer_hi": "संकलन समय",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 75,
    "question_en": "What is __func__ identifier?",
    "question_hi": "__func__ आइडेंटिफायर क्या है?",
    "options_en": ["Current function name", "Filename", "Line number", "Date"],
    "options_hi": ["वर्तमान फ़ंक्शन नाम", "फ़ाइलनाम", "पंक्ति संख्या", "तिथि"],
    "answer_en": "Current function name",
    "answer_hi": "वर्तमान फ़ंक्शन नाम",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 76,
    "question_en": "What is compound literal?",
    "question_hi": "कम्पाउंड लिटरल क्या है?",
    "options_en": ["Anonymous object creation", "Named object", "Function", "Macro"],
    "options_hi": ["अनाम वस्तु निर्माण", "नामित वस्तु", "फ़ंक्शन", "मैक्रो"],
    "answer_en": "Anonymous object creation",
    "answer_hi": "अनाम वस्तु निर्माण",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 77,
    "question_en": "What is designated initializer?",
    "question_hi": "डिज़ाइनेटेड इनिशियलाइज़र क्या है?",
    "options_en": ["Initializing specific array elements", "All elements", "No initialization", "Random"],
    "options_hi": ["विशिष्ट सरणी तत्वों को आरंभ करना", "सभी तत्व", "कोई आरंभीकरण नहीं", "यादृच्छिक"],
    "answer_en": "Initializing specific array elements",
    "answer_hi": "विशिष्ट सरणी तत्वों को आरंभ करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 78,
    "question_en": "What is restrict keyword?",
    "question_hi": "restrict कीवर्ड क्या है?",
    "options_en": ["Compiler optimization hint for pointers", "Restricts access", "Makes readonly", "No such keyword"],
    "options_hi": ["पॉइंटर्स के लिए कंपाइलर ऑप्टिमाइज़ेशन संकेत", "पहुंच प्रतिबंधित करता है", "केवल पढ़ने के लिए बनाता है", "ऐसा कोई कीवर्ड नहीं"],
    "answer_en": "Compiler optimization hint for pointers",
    "answer_hi": "पॉइंटर्स के लिए कंपाइलर ऑप्टिमाइज़ेशन संकेत",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 79,
    "question_en": "What is _Generic keyword?",
    "question_hi": "_Generic कीवर्ड क्या है?",
    "options_en": ["Type-generic selection", "Generic function", "Generic variable", "Not in C"],
    "options_hi": ["प्रकार-सामान्य चयन", "सामान्य फ़ंक्शन", "सामान्य चर", "C में नहीं"],
    "answer_en": "Type-generic selection",
    "answer_hi": "प्रकार-सामान्य चयन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 80,
    "question_en": "What is static assert?",
    "question_hi": "स्टैटिक असेर्ट क्या है?",
    "options_en": ["Compile-time assertion", "Runtime assertion", "No assertion", "Debug assertion"],
    "options_hi": ["संकलन-समय दावा", "रनटाइम दावा", "कोई दावा नहीं", "डिबग दावा"],
    "answer_en": "Compile-time assertion",
    "answer_hi": "संकलन-समय दावा",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 81,
    "question_en": "What is alignment requirement?",
    "question_hi": "अलाइनमेंट आवश्यकता क्या है?",
    "options_en": ["Memory address must be multiple of size", "No requirement", "Random address", "Any address"],
    "options_hi": ["मेमोरी पता आकार का गुणज होना चाहिए", "कोई आवश्यकता नहीं", "यादृच्छिक पता", "कोई भी पता"],
    "answer_en": "Memory address must be multiple of size",
    "answer_hi": "मेमोरी पता आकार का गुणज होना चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 82,
    "question_en": "What is _Alignas specifier?",
    "question_hi": "_Alignas स्पेसिफायर क्या है?",
    "options_en": ["Specifies alignment", "Specifies size", "Specifies type", "Not in C"],
    "options_hi": ["संरेखण निर्दिष्ट करता है", "आकार निर्दिष्ट करता है", "प्रकार निर्दिष्ट करता है", "C में नहीं"],
    "answer_en": "Specifies alignment",
    "answer_hi": "संरेखण निर्दिष्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 83,
    "question_en": "What is _Alignof operator?",
    "question_hi": "_Alignof ऑपरेटर क्या है?",
    "options_en": ["Returns alignment requirement", "Returns size", "Returns type", "Not in C"],
    "options_hi": ["संरेखण आवश्यकता लौटाता है", "आकार लौटाता है", "प्रकार लौटाता है", "C में नहीं"],
    "answer_en": "Returns alignment requirement",
    "answer_hi": "संरेखण आवश्यकता लौटाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 84,
    "question_en": "What is complex number support in C?",
    "question_hi": "C में कॉम्प्लेक्स नंबर सपोर्ट क्या है?",
    "options_en": ["_Complex keyword", "complex keyword", "No support", "Only C++"],
    "options_hi": ["_Complex कीवर्ड", "complex कीवर्ड", "कोई समर्थन नहीं", "केवल C++"],
    "answer_en": "_Complex keyword",
    "answer_hi": "_Complex कीवर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 85,
    "question_en": "What is atomic type in C?",
    "question_hi": "C में एटॉमिक टाइप क्या है?",
    "options_en": ["_Atomic keyword", "atomic keyword", "No atomic", "Only C++"],
    "options_hi": ["_Atomic कीवर्ड", "atomic कीवर्ड", "कोई एटॉमिक नहीं", "केवल C++"],
    "answer_en": "_Atomic keyword",
    "answer_hi": "_Atomic कीवर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 86,
    "question_en": "What is threads support in C?",
    "question_hi": "C में थ्रेड्स सपोर्ट क्या है?",
    "options_en": ["<threads.h> header", "<pthread.h>", "No threads", "Only C++"],
    "options_hi": ["<threads.h> हेडर", "<pthread.h>", "कोई थ्रेड्स नहीं", "केवल C++"],
    "answer_en": "<threads.h> header",
    "answer_hi": "<threads.h> हेडर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 87,
    "question_en": "What is attribute syntax?",
    "question_hi": "एट्रिब्यूट सिंटैक्स क्या है?",
    "options_en": ["__attribute__((...))", "attribute(...)", "no attribute", "Only C++"],
    "options_hi": ["__attribute__((...))", "attribute(...)", "कोई विशेषता नहीं", "केवल C++"],
    "answer_en": "__attribute__((...))",
    "answer_hi": "__attribute__((...))",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 88,
    "question_en": "What is packed attribute?",
    "question_hi": "पैक्ड एट्रिब्यूट क्या है?",
    "options_en": ["Minimizes padding", "Adds padding", "No effect", "Only for arrays"],
    "options_hi": ["पैडिंग को कम करता है", "पैडिंग जोड़ता है", "कोई प्रभाव नहीं", "केवल सरणियों के लिए"],
    "answer_en": "Minimizes padding",
    "answer_hi": "पैडिंग को कम करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 89,
    "question_en": "What is deprecated attribute?",
    "question_hi": "डिप्रीकेटेड एट्रिब्यूट क्या है?",
    "options_en": ["Marks code as obsolete", "Marks as new", "No effect", "Only for functions"],
    "options_hi": ["कोड को अप्रचलित के रूप में चिह्नित करता है", "नए के रूप में चिह्नित करता है", "कोई प्रभाव नहीं", "केवल कार्यों के लिए"],
    "answer_en": "Marks code as obsolete",
    "answer_hi": "कोड को अप्रचलित के रूप में चिह्नित करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 90,
    "question_en": "What is inline assembly?",
    "question_hi": "इनलाइन असेंबली क्या है?",
    "options_en": ["Assembly code in C program", "Only assembly", "No assembly", "Only C++"],
    "options_hi": ["C प्रोग्राम में असेंबली कोड", "केवल असेंबली", "कोई असेंबली नहीं", "केवल C++"],
    "answer_en": "Assembly code in C program",
    "answer_hi": "C प्रोग्राम में असेंबली कोड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 91,
    "question_en": "What is asm keyword?",
    "question_hi": "asm कीवर्ड क्या है?",
    "options_en": ["For inline assembly", "For assembly files", "Not in C", "Only C++"],
    "options_hi": ["इनलाइन असेंबली के लिए", "असेंबली फ़ाइलों के लिए", "C में नहीं", "केवल C++"],
    "answer_en": "For inline assembly",
    "answer_hi": "इनलाइन असेंबली के लिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 92,
    "question_en": "What is volatile with pointers?",
    "question_hi": "पॉइंटर्स के साथ volatile क्या है?",
    "options_en": ["Pointer to volatile data", "Volatile pointer", "Both", "Neither"],
    "options_hi": ["परिवर्तनशील डेटा का पॉइंटर", "परिवर्तनशील पॉइंटर", "दोनों", "न तो"],
    "answer_en": "Pointer to volatile data",
    "answer_hi": "परिवर्तनशील डेटा का पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 93,
    "question_en": "What is const with pointers?",
    "question_hi": "पॉइंटर्स के साथ const क्या है?",
    "options_en": ["Pointer to constant data", "Constant pointer", "Both", "Neither"],
    "options_hi": ["स्थिर डेटा का पॉइंटर", "स्थिर पॉइंटर", "दोनों", "न तो"],
    "answer_en": "Pointer to constant data",
    "answer_hi": "स्थिर डेटा का पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 94,
    "question_en": "What is far pointer?",
    "question_hi": "फार पॉइंटर क्या है?",
    "options_en": ["Pointer for segmented architecture", "Near pointer", "Huge pointer", "Not used now"],
    "options_hi": ["सेगमेंटेड आर्किटेक्चर के लिए पॉइंटर", "नियर पॉइंटर", "ह्यूज पॉइंटर", "अब उपयोग नहीं"],
    "answer_en": "Pointer for segmented architecture",
    "answer_hi": "सेगमेंटेड आर्किटेक्चर के लिए पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 95,
    "question_en": "What is near pointer?",
    "question_hi": "नियर पॉइंटर क्या है?",
    "options_en": ["Pointer in same segment", "Different segment", "Far pointer", "Not used"],
    "options_hi": ["एक ही सेगमेंट में पॉइंटर", "अलग सेगमेंट", "फार पॉइंटर", "उपयोग नहीं"],
    "answer_en": "Pointer in same segment",
    "answer_hi": "एक ही सेगमेंट में पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 96,
    "question_en": "What is huge pointer?",
    "question_hi": "ह्यूज पॉइंटर क्या है?",
    "options_en": ["Pointer normalized in DOS", "Not normalized", "Far pointer", "Near pointer"],
    "options_hi": ["DOS में सामान्यीकृत पॉइंटर", "सामान्यीकृत नहीं", "फार पॉइंटर", "नियर पॉइंटर"],
    "answer_en": "Pointer normalized in DOS",
    "answer_hi": "DOS में सामान्यीकृत पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 97,
    "question_en": "What is smart pointer in C?",
    "question_hi": "C में स्मार्ट पॉइंटर क्या है?",
    "options_en": ["Not available in C", "Available", "Only C++", "Both"],
    "options_hi": ["C में उपलब्ध नहीं", "उपलब्ध", "केवल C++", "दोनों"],
    "answer_en": "Not available in C",
    "answer_hi": "C में उपलब्ध नहीं",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 98,
    "question_en": "What is auto keyword in C?",
    "question_hi": "C में auto कीवर्ड क्या है?",
    "options_en": ["Default storage class", "Automatic type", "C++ auto", "Not used"],
    "options_hi": ["डिफ़ॉल्ट स्टोरेज क्लास", "स्वचालित प्रकार", "C++ auto", "उपयोग नहीं"],
    "answer_en": "Default storage class",
    "answer_hi": "डिफ़ॉल्ट स्टोरेज क्लास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 99,
    "question_en": "What is register keyword modern usage?",
    "question_hi": "रजिस्टर कीवर्ड का आधुनिक उपयोग क्या है?",
    "options_en": ["Hint to compiler, often ignored", "Always used", "Never used", "Required"],
    "options_hi": ["कंपाइलर के लिए संकेत, अक्सर अनदेखा किया जाता है", "हमेशा उपयोग किया जाता है", "कभी उपयोग नहीं किया जाता", "आवश्यक"],
    "answer_en": "Hint to compiler, often ignored",
    "answer_hi": "कंपाइलर के लिए संकेत, अक्सर अनदेखा किया जाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 100,
    "question_en": "What is the future of C programming?",
    "question_hi": "C प्रोग्रामिंग का भविष्य क्या है?",
    "options_en": ["Still widely used in systems programming", "Becoming obsolete", "Replaced by C++", "Only for legacy"],
    "options_hi": ["अभी भी सिस्टम प्रोग्रामिंग में व्यापक रूप से उपयोग किया जाता है", "अप्रचलित हो रहा है", "C++ द्वारा प्रतिस्थापित", "केवल लीगेसी के लिए"],
    "answer_en": "Still widely used in systems programming",
    "answer_hi": "अभी भी सिस्टम प्रोग्रामिंग में व्यापक रूप से उपयोग किया जाता है",
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