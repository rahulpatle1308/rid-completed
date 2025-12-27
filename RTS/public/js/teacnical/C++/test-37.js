const questions= [
  {
    "num": 1,
    "question_en": "Which operator is used for member access through pointer?",
    "question_hi": "पॉइंटर के माध्यम से मेंबर एक्सेस के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["->", ".", "::", "*"],
    "options_hi": ["->", ".", "::", "*"],
    "answer_en": "->",
    "answer_hi": "->",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What is the purpose of 'static' keyword for class members?",
    "question_hi": "क्लास मेंबर्स के लिए 'static' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Shared across all instances", "Instance specific", "Constant value", "None of these"],
    "options_hi": ["सभी इंस्टेंस में शेयर्ड", "इंस्टेंस स्पेसिफिक", "कॉन्स्टेंट वैल्यू", "इनमें से कोई नहीं"],
    "answer_en": "Shared across all instances",
    "answer_hi": "सभी इंस्टेंस में शेयर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "What does 'polymorphism' mean in C++?",
    "question_hi": "C++ में 'polymorphism' का क्या अर्थ है?",
    "options_en": ["Many forms", "Single form", "Multiple inheritance", "Template"],
    "options_hi": ["कई रूप", "एक रूप", "मल्टीपल इनहेरिटेंस", "टेम्पलेट"],
    "answer_en": "Many forms",
    "answer_hi": "कई रूप",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "Which function is automatically called when object is created?",
    "question_hi": "ऑब्जेक्ट क्रिएट होने पर कौन सा फंक्शन ऑटोमैटिकली कॉल होता है?",
    "options_en": ["Constructor", "Destructor", "Copy constructor", "Operator="],
    "options_hi": ["कंस्ट्रक्टर", "डिस्ट्रक्टर", "कॉपी कंस्ट्रक्टर", "ऑपरेटर="],
    "answer_en": "Constructor",
    "answer_hi": "कंस्ट्रक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "What is function overriding?",
    "question_hi": "फंक्शन ओवरराइडिंग क्या है?",
    "options_en": ["Redefining base class function in derived class", "Same name different parameters", "Virtual function", "All of these"],
    "options_hi": ["डेराइव्ड क्लास में बेस क्लास फंक्शन को रिडिफाइन करना", "समान नाम अलग पैरामीटर्स", "वर्चुअल फंक्शन", "ये सभी"],
    "answer_en": "Redefining base class function in derived class",
    "answer_hi": "डेराइव्ड क्लास में बेस क्लास फंक्शन को रिडिफाइन करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the size of pointer in 64-bit system?",
    "question_hi": "64-बिट सिस्टम में पॉइंटर का साइज क्या है?",
    "options_en": ["8 bytes", "4 bytes", "2 bytes", "Depends on type"],
    "options_hi": ["8 बाइट्स", "4 बाइट्स", "2 बाइट्स", "टाइप पर निर्भर"],
    "answer_en": "8 bytes",
    "answer_hi": "8 बाइट्स",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which STL container is sequence container?",
    "question_hi": "कौन सा STL कंटेनर सीक्वेंस कंटेनर है?",
    "options_en": ["vector", "map", "set", "unordered_map"],
    "options_hi": ["vector", "map", "set", "unordered_map"],
    "answer_en": "vector",
    "answer_hi": "vector",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of 'delete' keyword?",
    "question_hi": "'delete' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Deallocate dynamic memory", "Delete file", "Remove variable", "All of these"],
    "options_hi": ["डायनामिक मेमोरी डीएलोकेट करना", "फाइल डिलीट करना", "वेरिएबल रिमूव करना", "ये सभी"],
    "answer_en": "Deallocate dynamic memory",
    "answer_hi": "डायनामिक मेमोरी डीएलोकेट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which header file contains string class?",
    "question_hi": "स्ट्रिंग क्लास किस हेडर फाइल में होती है?",
    "options_en": ["string", "cstring", "string.h", "All of these"],
    "options_hi": ["string", "cstring", "string.h", "ये सभी"],
    "answer_en": "string",
    "answer_hi": "string",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is encapsulation in OOP?",
    "question_hi": "OOP में एनकैप्सुलेशन क्या है?",
    "options_en": ["Bundling data and methods", "Hiding implementation", "Both A and B", "None of these"],
    "options_hi": ["डेटा और मेथड्स बंडल करना", "इम्प्लीमेंटेशन छुपाना", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "What is the default value of local variables?",
    "question_hi": "लोकल वेरिएबल्स का डिफ़ॉल्ट वैल्यू क्या होता है?",
    "options_en": ["Garbage value", "0", "NULL", "Undefined"],
    "options_hi": ["गार्बेज वैल्यू", "0", "NULL", "अनडिफाइंड"],
    "answer_en": "Garbage value",
    "answer_hi": "गार्बेज वैल्यू",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "Which operator is used for dynamic casting?",
    "question_hi": "डायनामिक कास्टिंग के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "options_hi": ["dynamic_cast", "static_cast", "reinterpret_cast", "const_cast"],
    "answer_en": "dynamic_cast",
    "answer_hi": "dynamic_cast",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "What is a template class?",
    "question_hi": "टेम्पलेट क्लास क्या है?",
    "options_en": ["Generic class", "Abstract class", "Base class", "Derived class"],
    "options_hi": ["जेनेरिक क्लास", "एब्सट्रैक्ट क्लास", "बेस क्लास", "डेराइव्ड क्लास"],
    "answer_en": "Generic class",
    "answer_hi": "जेनेरिक क्लास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What is the use of 'break' statement?",
    "question_hi": "'break' स्टेटमेंट का उपयोग क्या है?",
    "options_en": ["Exit loop/switch", "Continue loop", "Stop program", "All of these"],
    "options_hi": ["लूप/स्विच से बाहर निकलना", "लूप जारी रखना", "प्रोग्राम रोकना", "ये सभी"],
    "answer_en": "Exit loop/switch",
    "answer_hi": "लूप/स्विच से बाहर निकलना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which container stores key-value pairs?",
    "question_hi": "कौन सा कंटेनर की-वैल्यू पेयर्स स्टोर करता है?",
    "options_en": ["map", "vector", "list", "set"],
    "options_hi": ["map", "vector", "list", "set"],
    "answer_en": "map",
    "answer_hi": "map",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of 'continue' statement?",
    "question_hi": "'continue' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Skip to next iteration", "Exit loop", "Break loop", "Stop loop"],
    "options_hi": ["अगले इटरेशन पर जाना", "लूप से बाहर निकलना", "लूप ब्रेक करना", "लूप रोकना"],
    "answer_en": "Skip to next iteration",
    "answer_hi": "अगले इटरेशन पर जाना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "What is a default constructor?",
    "question_hi": "डिफ़ॉल्ट कंस्ट्रक्टर क्या है?",
    "options_en": ["Constructor with no parameters", "Constructor with default values", "Both A and B", "None of these"],
    "options_hi": ["बिना पैरामीटर्स वाला कंस्ट्रक्टर", "डिफ़ॉल्ट वैल्यूज वाला कंस्ट्रक्टर", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Constructor with no parameters",
    "answer_hi": "बिना पैरामीटर्स वाला कंस्ट्रक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What is the purpose of 'goto' statement?",
    "question_hi": "'goto' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Jump to label", "Conditional jump", "Loop control", "All of these"],
    "options_hi": ["लेबल पर जंप करना", "कंडीशनल जंप", "लूप कंट्रोल", "ये सभी"],
    "answer_en": "Jump to label",
    "answer_hi": "लेबल पर जंप करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which operator is used for bitwise AND?",
    "question_hi": "बिटवाइज़ AND के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["&", "&&", "|", "||"],
    "options_hi": ["&", "&&", "|", "||"],
    "answer_en": "&",
    "answer_hi": "&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the use of 'sizeof' operator?",
    "question_hi": "'sizeof' ऑपरेटर का उपयोग क्या है?",
    "options_en": ["Get size in bytes", "Get type", "Get value", "All of these"],
    "options_hi": ["बाइट्स में साइज प्राप्त करना", "टाइप प्राप्त करना", "वैल्यू प्राप्त करना", "ये सभी"],
    "answer_en": "Get size in bytes",
    "answer_hi": "बाइट्स में साइज प्राप्त करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "What is a reference variable?",
    "question_hi": "रेफरेंस वेरिएबल क्या है?",
    "options_en": ["Alias for another variable", "Pointer variable", "Constant variable", "Static variable"],
    "options_hi": ["दूसरे वेरिएबल का अलियास", "पॉइंटर वेरिएबल", "कॉन्स्टेंट वेरिएबल", "स्टैटिक वेरिएबल"],
    "answer_en": "Alias for another variable",
    "answer_hi": "दूसरे वेरिएबल का अलियास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What is the purpose of 'try-catch' block?",
    "question_hi": "'try-catch' ब्लॉक का उद्देश्य क्या है?",
    "options_en": ["Exception handling", "Error handling", "Both A and B", "None of these"],
    "options_hi": ["एक्सेप्शन हैंडलिंग", "एरर हैंडलिंग", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which operator is used for logical AND?",
    "question_hi": "लॉजिकल AND के लिए कौन सा ऑपरेटर उपयोग किया जाता है?",
    "options_en": ["&&", "&", "||", "|"],
    "options_hi": ["&&", "&", "||", "|"],
    "answer_en": "&&",
    "answer_hi": "&&",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of 'throw' keyword?",
    "question_hi": "'throw' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Throw exception", "Throw error", "Both A and B", "None of these"],
    "options_hi": ["एक्सेप्शन फेंकना", "एरर फेंकना", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Throw exception",
    "answer_hi": "एक्सेप्शन फेंकना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "What is a parameterized constructor?",
    "question_hi": "पैरामीटराइज्ड कंस्ट्रक्टर क्या है?",
    "options_en": ["Constructor with parameters", "Constructor without parameters", "Default constructor", "Copy constructor"],
    "options_hi": ["पैरामीटर्स वाला कंस्ट्रक्टर", "बिना पैरामीटर्स वाला कंस्ट्रक्टर", "डिफ़ॉल्ट कंस्ट्रक्टर", "कॉपी कंस्ट्रक्टर"],
    "answer_en": "Constructor with parameters",
    "answer_hi": "पैरामीटर्स वाला कंस्ट्रक्टर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What is the use of 'else' statement?",
    "question_hi": "'else' स्टेटमेंट का उपयोग क्या है?",
    "options_en": ["Alternative condition", "Main condition", "Loop condition", "All of these"],
    "options_hi": ["अल्टरनेटिव कंडीशन", "मुख्य कंडीशन", "लूप कंडीशन", "ये सभी"],
    "answer_en": "Alternative condition",
    "answer_hi": "अल्टरनेटिव कंडीशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "What is a constant pointer?",
    "question_hi": "कॉन्स्टेंट पॉइंटर क्या है?",
    "options_en": ["Pointer that points to constant", "Constant that is pointer", "Both A and B", "None of these"],
    "options_hi": ["कॉन्स्टेंट को पॉइंट करने वाला पॉइंटर", "पॉइंटर जो कॉन्स्टेंट है", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Pointer that points to constant",
    "answer_hi": "कॉन्स्टेंट को पॉइंट करने वाला पॉइंटर",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of 'switch' statement?",
    "question_hi": "'switch' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Multi-way branching", "Single condition", "Loop control", "All of these"],
    "options_hi": ["मल्टी-वे ब्रांचिंग", "सिंगल कंडीशन", "लूप कंट्रोल", "ये सभी"],
    "answer_en": "Multi-way branching",
    "answer_hi": "मल्टी-वे ब्रांचिंग",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "What is a static function?",
    "question_hi": "स्टैटिक फंक्शन क्या है?",
    "options_en": ["Function accessible without object", "Function with static storage", "Both A and B", "None of these"],
    "options_hi": ["बिना ऑब्जेक्ट के एक्सेसिबल फंक्शन", "स्टैटिक स्टोरेज वाला फंक्शन", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Function accessible without object",
    "answer_hi": "बिना ऑब्जेक्ट के एक्सेसिबल फंक्शन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What is the use of 'case' in switch?",
    "question_hi": "स्विच में 'case' का उपयोग क्या है?",
    "options_en": ["Define possible values", "Default case", "Break case", "All of these"],
    "options_hi": ["संभावित वैल्यूज डिफाइन करना", "डिफ़ॉल्ट केस", "ब्रेक केस", "ये सभी"],
    "answer_en": "Define possible values",
    "answer_hi": "संभावित वैल्यूज डिफाइन करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "What is a destructor?",
    "question_hi": "डिस्ट्रक्टर क्या है?",
    "options_en": ["Cleans up object", "Destroys object", "Both A and B", "None of these"],
    "options_hi": ["ऑब्जेक्ट क्लीन अप करता है", "ऑब्जेक्ट डिस्ट्रॉय करता है", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of 'default' in switch?",
    "question_hi": "स्विच में 'default' का उद्देश्य क्या है?",
    "options_en": ["When no case matches", "Default case", "Both A and B", "None of these"],
    "options_hi": ["जब कोई केस मैच न करे", "डिफ़ॉल्ट केस", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "When no case matches",
    "answer_hi": "जब कोई केस मैच न करे",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "What is a base class?",
    "question_hi": "बेस क्लास क्या है?",
    "options_en": ["Class being inherited", "Derived class", "Abstract class", "Template class"],
    "options_hi": ["इनहेरिट की जाने वाली क्लास", "डेराइव्ड क्लास", "एब्सट्रैक्ट क्लास", "टेम्पलेट क्लास"],
    "answer_en": "Class being inherited",
    "answer_hi": "इनहेरिट की जाने वाली क्लास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What is the use of 'if' statement?",
    "question_hi": "'if' स्टेटमेंट का उपयोग क्या है?",
    "options_en": ["Conditional execution", "Loop control", "Function definition", "All of these"],
    "options_hi": ["कंडीशनल एक्जिक्यूशन", "लूप कंट्रोल", "फंक्शन डेफिनिशन", "ये सभी"],
    "answer_en": "Conditional execution",
    "answer_hi": "कंडीशनल एक्जिक्यूशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "What is a derived class?",
    "question_hi": "डेराइव्ड क्लास क्या है?",
    "options_en": ["Class that inherits", "Base class", "Abstract class", "Template class"],
    "options_hi": ["इनहेरिट करने वाली क्लास", "बेस क्लास", "एब्सट्रैक्ट क्लास", "टेम्पलेट क्लास"],
    "answer_en": "Class that inherits",
    "answer_hi": "इनहेरिट करने वाली क्लास",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of 'for' loop?",
    "question_hi": "'for' लूप का उद्देश्य क्या है?",
    "options_en": ["Definite iteration", "Indefinite iteration", "Conditional iteration", "All of these"],
    "options_hi": ["निश्चित इटरेशन", "अनिश्चित इटरेशन", "कंडीशनल इटरेशन", "ये सभी"],
    "answer_en": "Definite iteration",
    "answer_hi": "निश्चित इटरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "What is multiple inheritance?",
    "question_hi": "मल्टीपल इनहेरिटेंस क्या है?",
    "options_en": ["Inherit from multiple classes", "Inherit from one class", "No inheritance", "Virtual inheritance"],
    "options_hi": ["मल्टीपल क्लासेज से इनहेरिट करना", "एक क्लास से इनहेरिट करना", "कोई इनहेरिटेंस नहीं", "वर्चुअल इनहेरिटेंस"],
    "answer_en": "Inherit from multiple classes",
    "answer_hi": "मल्टीपल क्लासेज से इनहेरिट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What is the use of 'while' loop?",
    "question_hi": "'while' लूप का उपयोग क्या है?",
    "options_en": ["Conditional iteration", "Definite iteration", "Infinite iteration", "All of these"],
    "options_hi": ["कंडीशनल इटरेशन", "निश्चित इटरेशन", "अनंत इटरेशन", "ये सभी"],
    "answer_en": "Conditional iteration",
    "answer_hi": "कंडीशनल इटरेशन",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "What is virtual inheritance?",
    "question_hi": "वर्चुअल इनहेरिटेंस क्या है?",
    "options_en": ["Solve diamond problem", "Multiple inheritance", "Single inheritance", "All of these"],
    "options_hi": ["डायमंड प्रॉब्लम सॉल्व करना", "मल्टीपल इनहेरिटेंस", "सिंगल इनहेरिटेंस", "ये सभी"],
    "answer_en": "Solve diamond problem",
    "answer_hi": "डायमंड प्रॉब्लम सॉल्व करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of 'do-while' loop?",
    "question_hi": "'do-while' लूप का उद्देश्य क्या है?",
    "options_en": ["Execute at least once", "Conditional execution", "Both A and B", "None of these"],
    "options_hi": ["कम से कम एक बार एक्जिक्यूट करना", "कंडीशनल एक्जिक्यूशन", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Execute at least once",
    "answer_hi": "कम से कम एक बार एक्जिक्यूट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "What is a friend function?",
    "question_hi": "फ्रेंड फंक्शन क्या है?",
    "options_en": ["Access private members", "Non-member function", "Both A and B", "None of these"],
    "options_hi": ["प्राइवेट मेंबर्स एक्सेस करना", "नॉन-मेंबर फंक्शन", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What is operator overloading?",
    "question_hi": "ऑपरेटर ओवरलोडिंग क्या है?",
    "options_en": ["Define operator for user types", "Change operator meaning", "Both A and B", "None of these"],
    "options_hi": ["यूजर टाइप्स के लिए ऑपरेटर डिफाइन करना", "ऑपरेटर मीनिंग बदलना", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Define operator for user types",
    "answer_hi": "यूजर टाइप्स के लिए ऑपरेटर डिफाइन करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "What is the purpose of 'public' access?",
    "question_hi": "'public' एक्सेस का उद्देश्य क्या है?",
    "options_en": ["Accessible everywhere", "Accessible in class only", "Accessible in derived", "None of these"],
    "options_hi": ["हर जगह एक्सेसिबल", "केवल क्लास में एक्सेसिबल", "डेराइव्ड में एक्सेसिबल", "इनमें से कोई नहीं"],
    "answer_en": "Accessible everywhere",
    "answer_hi": "हर जगह एक्सेसिबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is a static member variable?",
    "question_hi": "स्टैटिक मेंबर वेरिएबल क्या है?",
    "options_en": ["Shared among objects", "Object specific", "Constant", "None of these"],
    "options_hi": ["ऑब्जेक्ट्स के बीच शेयर्ड", "ऑब्जेक्ट स्पेसिफिक", "कॉन्स्टेंट", "इनमें से कोई नहीं"],
    "answer_en": "Shared among objects",
    "answer_hi": "ऑब्जेक्ट्स के बीच शेयर्ड",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "What is the purpose of 'private' access?",
    "question_hi": "'private' एक्सेस का उद्देश्य क्या है?",
    "options_en": ["Accessible in class only", "Accessible everywhere", "Accessible in derived", "None of these"],
    "options_hi": ["केवल क्लास में एक्सेसिबल", "हर जगह एक्सेसिबल", "डेराइव्ड में एक्सेसिबल", "इनमें से कोई नहीं"],
    "answer_en": "Accessible in class only",
    "answer_hi": "केवल क्लास में एक्सेसिबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What is a constant member function?",
    "question_hi": "कॉन्स्टेंट मेंबर फंक्शन क्या है?",
    "options_en": ["Doesn't modify object", "Modifies object", "Static function", "Virtual function"],
    "options_hi": ["ऑब्जेक्ट मॉडिफाई नहीं करता", "ऑब्जेक्ट मॉडिफाई करता है", "स्टैटिक फंक्शन", "वर्चुअल फंक्शन"],
    "answer_en": "Doesn't modify object",
    "answer_hi": "ऑब्जेक्ट मॉडिफाई नहीं करता",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "What is the purpose of 'protected' access?",
    "question_hi": "'protected' एक्सेस का उद्देश्य क्या है?",
    "options_en": ["Accessible in derived classes", "Accessible in class only", "Accessible everywhere", "None of these"],
    "options_hi": ["डेराइव्ड क्लासेज में एक्सेसिबल", "केवल क्लास में एक्सेसिबल", "हर जगह एक्सेसिबल", "इनमें से कोई नहीं"],
    "answer_en": "Accessible in derived classes",
    "answer_hi": "डेराइव्ड क्लासेज में एक्सेसिबल",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is a virtual function?",
    "question_hi": "वर्चुअल फंक्शन क्या है?",
    "options_en": ["Can be overridden", "Runtime polymorphism", "Both A and B", "None of these"],
    "options_hi": ["ओवरराइड किया जा सकता है", "रनटाइम पॉलीमॉर्फिज्म", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "What is the purpose of 'main' function?",
    "question_hi": "'main' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Program entry point", "Start execution", "Both A and B", "None of these"],
    "options_hi": ["प्रोग्राम एंट्री पॉइंट", "एक्जिक्यूशन स्टार्ट", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What is the purpose of 'return' statement?",
    "question_hi": "'return' स्टेटमेंट का उद्देश्य क्या है?",
    "options_en": ["Return value from function", "Exit function", "Both A and B", "None of these"],
    "options_hi": ["फंक्शन से वैल्यू रिटर्न करना", "फंक्शन से बाहर निकलना", "A और B दोनों", "इनमें से कोई नहीं"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  }
]
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