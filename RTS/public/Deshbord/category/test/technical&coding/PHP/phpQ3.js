const questions = [
 
  {
    "num": 1,
    "question_en": "Which function is used to calculate the MD5 hash of a string?",
    "question_hi": "स्ट्रिंग का MD5 हैश कैलकुलेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["md5()", "hash()", "crypt()", "sha1()"],
    "options_hi": ["md5()", "hash()", "crypt()", "sha1()"],
    "answer_en": "md5()",
    "answer_hi": "md5()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'global' keyword do in PHP?",
    "question_hi": "PHP में 'global' कीवर्ड क्या करता है?",
    "options_en": ["Makes a global variable accessible inside a function", "Creates a new global variable", "Deletes a global variable", "Converts local variable to global"],
    "options_hi": ["फंक्शन के अंदर ग्लोबल वेरिएबल को एक्सेसिबल बनाता है", "नया ग्लोबल वेरिएबल बनाता है", "ग्लोबल वेरिएबल डिलीट करता है", "लोकल वेरिएबल को ग्लोबल में कन्वर्ट करता है"],
    "answer_en": "Makes a global variable accessible inside a function",
    "answer_hi": "फंक्शन के अंदर ग्लोबल वेरिएबल को एक्सेसिबल बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which operator is used for exponentiation in PHP?",
    "question_hi": "PHP में एक्सपोनेन्शिएशन के लिए कौन-सा ऑपरेटर उपयोग होता है?",
    "options_en": ["**", "^", "pow()", "exp()"],
    "options_hi": ["**", "^", "pow()", "exp()"],
    "answer_en": "**",
    "answer_hi": "**",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'static' keyword in class methods?",
    "question_hi": "क्लास मेथड्स में 'static' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Allows method to be called without creating an instance", "Makes method faster", "Prevents method overriding", "Creates a constant method"],
    "options_hi": ["इंस्टेंस क्रिएट किए बिना मेथड को कॉल करने की अनुमति देता है", "मेथड को तेज बनाता है", "मेथड ओवरराइडिंग रोकता है", "कॉन्स्टेंट मेथड बनाता है"],
    "answer_en": "Allows method to be called without creating an instance",
    "answer_hi": "इंस्टेंस क्रिएट किए बिना मेथड को कॉल करने की अनुमति देता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to remove duplicate values from an array?",
    "question_hi": "ऐरे से डुप्लीकेट वैल्यूज रिमूव करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["array_unique()", "array_distinct()", "remove_duplicates()", "unique()"],
    "options_hi": ["array_unique()", "array_distinct()", "remove_duplicates()", "unique()"],
    "answer_en": "array_unique()",
    "answer_hi": "array_unique()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What is the correct way to create a constructor in PHP?",
    "question_hi": "PHP में कंस्ट्रक्टर बनाने का सही तरीका क्या है?",
    "options_en": ["function __construct()", "function constructor()", "function __constructor()", "function init()"],
    "options_hi": ["function __construct()", "function constructor()", "function __constructor()", "function init()"],
    "answer_en": "function __construct()",
    "answer_hi": "function __construct()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function converts a string to an integer in PHP?",
    "question_hi": "PHP में स्ट्रिंग को इंटीजर में कन्वर्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["intval()", "strval()", "integer()", "to_int()"],
    "options_hi": ["intval()", "strval()", "integer()", "to_int()"],
    "answer_en": "intval()",
    "answer_hi": "intval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What does the 'final' keyword do when applied to a method?",
    "question_hi": "मेथड पर 'final' कीवर्ड लगाने से क्या होता है?",
    "options_en": ["Prevents method from being overridden", "Makes method static", "Forces method implementation", "Prevents method from being called"],
    "options_hi": ["मेथड को ओवरराइड होने से रोकता है", "मेथड को स्टैटिक बनाता है", "मेथड इम्प्लीमेंटेशन को फोर्स करता है", "मेथड को कॉल होने से रोकता है"],
    "answer_en": "Prevents method from being overridden",
    "answer_hi": "मेथड को ओवरराइड होने से रोकता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to find the difference between two arrays?",
    "question_hi": "दो ऐरे के बीच डिफरेंस find करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["array_diff()", "array_compare()", "array_subtract()", "diff_array()"],
    "options_hi": ["array_diff()", "array_compare()", "array_subtract()", "diff_array()"],
    "answer_en": "array_diff()",
    "answer_hi": "array_diff()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What is the purpose of the 'abstract' keyword in method declaration?",
    "question_hi": "मेथड डिक्लेरेशन में 'abstract' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Declares method without implementation", "Makes method private", "Forces method to be static", "Prevents method inheritance"],
    "options_hi": ["इम्प्लीमेंटेशन के बिना मेथड डिक्लेयर करता है", "मेथड को प्राइवेट बनाता है", "मेथड को स्टैटिक बनाने के लिए फोर्स करता है", "मेथड इनहेरिटेंस रोकता है"],
    "answer_en": "Declares method without implementation",
    "answer_hi": "इम्प्लीमेंटेशन के बिना मेथड डिक्लेयर करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function returns the keys of an array?",
    "question_hi": "ऐरे की keys कौन-सा फंक्शन रिटर्न करता है?",
    "options_en": ["array_keys()", "keys()", "get_keys()", "array_key()"],
    "options_hi": ["array_keys()", "keys()", "get_keys()", "array_key()"],
    "answer_en": "array_keys()",
    "answer_hi": "array_keys()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'interface' keyword in PHP?",
    "question_hi": "PHP में 'interface' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Defines a contract that classes must implement", "Creates an abstract class", "Defines a trait", "Creates a blueprint for objects"],
    "options_hi": ["एक कॉन्ट्रैक्ट डिफाइन करता है जिसे क्लासेज इम्प्लीमेंट करनी चाहिए", "एब्स्ट्रैक्ट क्लास बनाता है", "ट्रेट डिफाइन करता है", "ऑब्जेक्ट्स के लिए ब्लूप्रिंट बनाता है"],
    "answer_en": "Defines a contract that classes must implement",
    "answer_hi": "एक कॉन्ट्रैक्ट डिफाइन करता है जिसे क्लासेज इम्प्लीमेंट करनी चाहिए",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to encode data in JSON format?",
    "question_hi": "JSON फॉर्मेट में डेटा एन्कोड करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["json_encode()", "json_decode()", "encode_json()", "to_json()"],
    "options_hi": ["json_encode()", "json_decode()", "encode_json()", "to_json()"],
    "answer_en": "json_encode()",
    "answer_hi": "json_encode()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'instanceof' operator return?",
    "question_hi": "'instanceof' ऑपरेटर क्या रिटर्न करता है?",
    "options_en": ["Boolean (true/false)", "Object instance", "Class name", "Parent class"],
    "options_hi": ["बूलियन (true/false)", "ऑब्जेक्ट इंस्टेंस", "क्लास नाम", "पैरेंट क्लास"],
    "answer_en": "Boolean (true/false)",
    "answer_hi": "बूलियन (true/false)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to shuffle the elements of an array randomly?",
    "question_hi": "ऐरे के एलिमेंट्स को रैंडमली शफल करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["shuffle()", "array_shuffle()", "randomize()", "array_random()"],
    "options_hi": ["shuffle()", "array_shuffle()", "randomize()", "array_random()"],
    "answer_en": "shuffle()",
    "answer_hi": "shuffle()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'trait' keyword in PHP?",
    "question_hi": "PHP में 'trait' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Enables horizontal code reuse", "Defines an interface", "Creates an abstract class", "Defines a namespace"],
    "options_hi": ["हॉरिजॉन्टल कोड रियूज एनेबल करता है", "इंटरफेस डिफाइन करता है", "एब्स्ट्रैक्ट क्लास बनाता है", "नेमस्पेस डिफाइन करता है"],
    "answer_en": "Enables horizontal code reuse",
    "answer_hi": "हॉरिजॉन्टल कोड रियूज एनेबल करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function returns the current script's execution time?",
    "question_hi": "करंट स्क्रिप्ट का एक्सिक्यूशन टाइम कौन-सा फंक्शन रिटर्न करता है?",
    "options_en": ["microtime()", "time()", "execution_time()", "script_time()"],
    "options_hi": ["microtime()", "time()", "execution_time()", "script_time()"],
    "answer_en": "microtime()",
    "answer_hi": "microtime()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'namespace' keyword do in PHP?",
    "question_hi": "PHP में 'namespace' कीवर्ड क्या करता है?",
    "options_en": ["Organizes code into logical groups", "Creates a class", "Defines a function library", "Imports external code"],
    "options_hi": ["कोड को लॉजिकल ग्रुप्स में ऑर्गनाइज करता है", "क्लास बनाता है", "फंक्शन लाइब्रेरी डिफाइन करता है", "एक्सटर्नल कोड इम्पोर्ट करता है"],
    "answer_en": "Organizes code into logical groups",
    "answer_hi": "कोड को लॉजिकल ग्रुप्स में ऑर्गनाइज करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to find the intersection of two arrays?",
    "question_hi": "दो ऐरे का इंटरसेक्शन find करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["array_intersect()", "array_intersection()", "intersect()", "common_elements()"],
    "options_hi": ["array_intersect()", "array_intersection()", "intersect()", "common_elements()"],
    "answer_en": "array_intersect()",
    "answer_hi": "array_intersect()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'clone' keyword in PHP?",
    "question_hi": "PHP में 'clone' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Creates a copy of an object", "Duplicates a class", "Copies an array", "Clones a function"],
    "options_hi": ["ऑब्जेक्ट की कॉपी बनाता है", "क्लास डुप्लिकेट करता है", "ऐरे कॉपी करता है", "फंक्शन क्लोन करता है"],
    "answer_en": "Creates a copy of an object",
    "answer_hi": "ऑब्जेक्ट की कॉपी बनाता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to format a number with grouped thousands?",
    "question_hi": "ग्रुप्ड थाउजेंड्स के साथ नंबर फॉर्मेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["number_format()", "format_number()", "money_format()", "decimal_format()"],
    "options_hi": ["number_format()", "format_number()", "money_format()", "decimal_format()"],
    "answer_en": "number_format()",
    "answer_hi": "number_format()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the 'yield' keyword do in PHP?",
    "question_hi": "PHP में 'yield' कीवर्ड क्या करता है?",
    "options_en": ["Creates a generator function", "Returns a value from function", "Pauses function execution", "All of the above"],
    "options_hi": ["जनरेटर फंक्शन बनाता है", "फंक्शन से वैल्यू रिटर्न करता है", "फंक्शन एक्सिक्यूशन पॉज करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used to get the size of a file?",
    "question_hi": "फाइल का साइज प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["filesize()", "file_size()", "size()", "get_filesize()"],
    "options_hi": ["filesize()", "file_size()", "size()", "get_filesize()"],
    "answer_en": "filesize()",
    "answer_hi": "filesize()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'declare(strict_types=1)' directive?",
    "question_hi": "'declare(strict_types=1)' डायरेक्टिव का उद्देश्य क्या है?",
    "options_en": ["Enables strict type checking", "Disables type juggling", "Requires explicit type declarations", "All of the above"],
    "options_hi": ["स्ट्रिक्ट टाइप चेकिंग एनेबल करता है", "टाइप जगलिंग डिसेबल करता है", "एक्सप्लिसिट टाइप डिक्लेरेशन रिक्वायर करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to extract a slice of an array?",
    "question_hi": "ऐरे का स्लाइस extract करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["array_slice()", "slice()", "extract_array()", "array_cut()"],
    "options_hi": ["array_slice()", "slice()", "extract_array()", "array_cut()"],
    "answer_en": "array_slice()",
    "answer_hi": "array_slice()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the '...' splat operator do in function arguments?",
    "question_hi": "फंक्शन आर्ग्युमेंट्स में '...' स्प्लैट ऑपरेटर क्या करता है?",
    "options_en": ["Accepts variable number of arguments", "Unpacks arrays into arguments", "Both A and B", "Creates an array from arguments"],
    "options_hi": ["वेरिएबल नंबर ऑफ आर्ग्युमेंट्स एक्सेप्ट करता है", "आर्ग्युमेंट्स में ऐरे अनपैक करता है", "A और B दोनों", "आर्ग्युमेंट्स से ऐरे बनाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to find the maximum value in an array?",
    "question_hi": "ऐरे में मैक्सिमम वैल्यू find करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["max()", "array_max()", "maximum()", "greatest()"],
    "options_hi": ["max()", "array_max()", "maximum()", "greatest()"],
    "answer_en": "max()",
    "answer_hi": "max()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'use' keyword in anonymous functions?",
    "question_hi": "अनॉनिमस फंक्शन्स में 'use' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Inherit variables from parent scope", "Import namespaces", "Use traits", "Include files"],
    "options_hi": ["पैरेंट स्कोप से वेरिएबल्स इनहेरिट करना", "नेमस्पेस इम्पोर्ट करना", "ट्रेट्स यूज करना", "फाइल्स इन्क्लूड करना"],
    "answer_en": "Inherit variables from parent scope",
    "answer_hi": "पैरेंट स्कोप से वेरिएबल्स इनहेरिट करना",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to replace text within a string?",
    "question_hi": "स्ट्रिंग के अंदर टेक्स्ट रिप्लेस करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["str_replace()", "replace()", "string_replace()", "substr_replace()"],
    "options_hi": ["str_replace()", "replace()", "string_replace()", "substr_replace()"],
    "answer_en": "str_replace()",
    "answer_hi": "str_replace()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the '??=' null coalescing assignment operator do?",
    "question_hi": "'??=' null coalescing assignment ऑपरेटर क्या करता है?",
    "options_en": ["Assigns value only if variable is null or doesn't exist", "Always assigns value", "Checks if value exists", "Compares two values"],
    "options_hi": ["वैल्यू असाइन करता है केवल अगर वेरिएबल null है या exists नहीं है", "हमेशा वैल्यू असाइन करता है", "चेक करता है कि वैल्यू exists है", "दो वैल्यूज compare करता है"],
    "answer_en": "Assigns value only if variable is null or doesn't exist",
    "answer_hi": "वैल्यू असाइन करता है केवल अगर वेरिएबल null है या exists नहीं है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to check if a string contains another string?",
    "question_hi": "चेक करने के लिए कि स्ट्रिंग में दूसरी स्ट्रिंग है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["str_contains()", "strpos()", "strstr()", "All of the above"],
    "options_hi": ["str_contains()", "strpos()", "strstr()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the '__toString()' magic method?",
    "question_hi": "'__toString()' मैजिक मेथड का उद्देश्य क्या है?",
    "options_en": ["Defines string representation of object", "Converts object to string", "Both A and B", "Creates string from array"],
    "options_hi": ["ऑब्जेक्ट की स्ट्रिंग रिप्रेजेंटेशन डिफाइन करता है", "ऑब्जेक्ट को स्ट्रिंग में कन्वर्ट करता है", "A और B दोनों", "ऐरे से स्ट्रिंग बनाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to get the first element of an array?",
    "question_hi": "ऐरे का पहला एलिमेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["reset()", "array_shift()", "first()", "Both A and B"],
    "options_hi": ["reset()", "array_shift()", "first()", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'match' expression do in PHP 8.0+?",
    "question_hi": "PHP 8.0+ में 'match' एक्सप्रेशन क्या करता है?",
    "options_en": ["Similar to switch but returns value", "Matches patterns", "Compares values strictly", "All of the above"],
    "options_hi": ["स्विच के समान लेकिन वैल्यू रिटर्न करता है", "पैटर्न्स मैच करता है", "वैल्यूज स्ट्रिक्टली compare करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used to get the class name of an object?",
    "question_hi": "ऑब्जेक्ट का क्लास नाम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["get_class()", "class_name()", "object_class()", "type()"],
    "options_hi": ["get_class()", "class_name()", "object_class()", "type()"],
    "answer_en": "get_class()",
    "answer_hi": "get_class()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'enum' keyword in PHP 8.1+?",
    "question_hi": "PHP 8.1+ में 'enum' कीवर्ड का उद्देश्य क्या है?",
    "options_en": ["Defines enumeration types", "Creates constants", "Both A and B", "Creates arrays"],
    "options_hi": ["एनुमरेशन टाइप्स डिफाइन करता है", "कॉन्स्टेंट्स बनाता है", "A और B दोनों", "ऐरे बनाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to check if a method exists in a class?",
    "question_hi": "चेक करने के लिए कि क्लास में मेथड exists है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["method_exists()", "function_exists()", "class_method_exists()", "has_method()"],
    "options_hi": ["method_exists()", "function_exists()", "class_method_exists()", "has_method()"],
    "answer_en": "method_exists()",
    "answer_hi": "method_exists()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'readonly' keyword do in PHP 8.1+?",
    "question_hi": "PHP 8.1+ में 'readonly' कीवर्ड क्या करता है?",
    "options_en": ["Creates read-only properties", "Prevents property modification", "Both A and B", "Makes properties constant"],
    "options_hi": ["रीड-ओनली प्रॉपर्टीज बनाता है", "प्रॉपर्टी मॉडिफिकेशन रोकता है", "A और B दोनों", "प्रॉपर्टीज को कॉन्स्टेंट बनाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to get all defined functions?",
    "question_hi": "सभी डिफाइंड फंक्शन्स प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["get_defined_functions()", "function_list()", "all_functions()", "defined_functions()"],
    "options_hi": ["get_defined_functions()", "function_list()", "all_functions()", "defined_functions()"],
    "answer_en": "get_defined_functions()",
    "answer_hi": "get_defined_functions()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'mixed' type declaration in PHP 8.0+?",
    "question_hi": "PHP 8.0+ में 'mixed' टाइप डिक्लेरेशन का उद्देश्य क्या है?",
    "options_en": ["Accepts any type of value", "Combines multiple types", "Creates union types", "Represents unknown type"],
    "options_hi": ["किसी भी टाइप की वैल्यू एक्सेप्ट करता है", "मल्टीपल टाइप्स कॉम्बाइन करता है", "यूनियन टाइप्स बनाता है", "अननोन टाइप रिप्रेजेंट करता है"],
    "answer_en": "Accepts any type of value",
    "answer_hi": "किसी भी टाइप की वैल्यू एक्सेप्ट करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to check if a variable is iterable?",
    "question_hi": "चेक करने के लिए कि वेरिएबल इटरेबल है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_iterable()", "iterable()", "can_iterate()", "is_loopable()"],
    "options_hi": ["is_iterable()", "iterable()", "can_iterate()", "is_loopable()"],
    "answer_en": "is_iterable()",
    "answer_hi": "is_iterable()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'never' return type do in PHP 8.1+?",
    "question_hi": "PHP 8.1+ में 'never' रिटर्न टाइप क्या करता है?",
    "options_en": ["Indicates function never returns", "Function always throws exception or exits", "Both A and B", "Prevents function from having return statement"],
    "options_hi": ["इंडिकेट करता है कि फंक्शन कभी रिटर्न नहीं करता", "फंक्शन हमेशा एक्सेप्शन थ्रो करता है या एक्जिट करता है", "A और B दोनों", "फंक्शन में रिटर्न स्टेटमेंट होने से रोकता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to check if a variable is callable?",
    "question_hi": "चेक करने के लिए कि वेरिएबल कॉलेबल है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_callable()", "callable()", "can_call()", "is_function()"],
    "options_hi": ["is_callable()", "callable()", "can_call()", "is_function()"],
    "answer_en": "is_callable()",
    "answer_hi": "is_callable()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'attributes' in PHP 8.0+?",
    "question_hi": "PHP 8.0+ में 'attributes' का उद्देश्य क्या है?",
    "options_en": ["Add metadata to code declarations", "Replace docblock annotations", "Both A and B", "Create custom annotations"],
    "options_hi": ["कोड डिक्लेरेशन में मेटाडेटा एड करना", "डॉकब्लॉक एनोटेशन रिप्लेस करना", "A और B दोनों", "कस्टम एनोटेशन बनाना"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used to serialize an object?",
    "question_hi": "ऑब्जेक्ट सीरियलाइज करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["serialize()", "json_encode()", "encode()", "pack()"],
    "options_hi": ["serialize()", "json_encode()", "encode()", "pack()"],
    "answer_en": "serialize()",
    "answer_hi": "serialize()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'weakmap' class do in PHP 8.0+?",
    "question_hi": "PHP 8.0+ में 'weakmap' क्लास क्या करता है?",
    "options_en": ["Creates map that doesn't prevent garbage collection", "Stores weak references", "Both A and B", "Creates lightweight arrays"],
    "options_hi": ["मैप बनाता है जो गार्बेज कलेक्शन को रोकता नहीं है", "वीक रेफरेंस स्टोर करता है", "A और B दोनों", "लाइटवेट ऐरे बनाता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to get the parent class of a class?",
    "question_hi": "क्लास का पैरेंट क्लास प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["get_parent_class()", "parent_class()", "class_parent()", "super_class()"],
    "options_hi": ["get_parent_class()", "parent_class()", "class_parent()", "super_class()"],
    "answer_en": "get_parent_class()",
    "answer_hi": "get_parent_class()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'match' expression's 'default' arm?",
    "question_hi": "'match' एक्सप्रेशन के 'default' आर्म का उद्देश्य क्या है?",
    "options_en": ["Handles unmatched cases", "Acts as else clause", "Both A and B", "Sets default value"],
    "options_hi": ["अनमैच्ड केसेज हैंडल करता है", "else क्लॉज की तरह काम करता है", "A और B दोनों", "डिफॉल्ट वैल्यू सेट करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used to check if a property exists in an object?",
    "question_hi": "चेक करने के लिए कि ऑब्जेक्ट में प्रॉपर्टी exists है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["property_exists()", "isset()", "has_property()", "Both A and B"],
    "options_hi": ["property_exists()", "isset()", "has_property()", "A और B दोनों"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'str_starts_with()' function do in PHP 8.0+?",
    "question_hi": "PHP 8.0+ में 'str_starts_with()' फंक्शन क्या करता है?",
    "options_en": ["Checks if string starts with given substring", "Returns position of substring", "Extracts beginning of string", "Compares string beginnings"],
    "options_hi": ["चेक करता है कि स्ट्रिंग दी गई सबस्ट्रिंग से शुरू होती है", "सबस्ट्रिंग की position रिटर्न करता है", "स्ट्रिंग की beginning extract करता है", "स्ट्रिंग beginnings compare करता है"],
    "answer_en": "Checks if string starts with given substring",
    "answer_hi": "चेक करता है कि स्ट्रिंग दी गई सबस्ट्रिंग से शुरू होती है",
    "attempted": false,
    "selected": ""
  }

];


// --------------------------- GLOBAL VARS -----------------------------
let currentQuestion = 0;
let language = "en";
let timeLeft = 60 * 60;   // 60 minutes timer
let timerInterval;

// --------------------------- LOAD QUESTION ----------------------------
function loadQuestion(index) {
    const q = questions[index];

    document.getElementById("question").textContent =
        `${q.num}. ${language === "en" ? q.question_en : q.question_hi}`;

    document.getElementById("questionCounter").textContent =
        `Question ${index + 1} of ${questions.length}`;

    const optionsElement = document.getElementById("options");
    optionsElement.innerHTML = "";

    const options = language === "en" ? q.options_en : q.options_hi;

    options.forEach((option) => {
        const isSelected = q.selected === option;
        const optionDiv = document.createElement("div");

        optionDiv.className = "option-box";
        optionDiv.style = `
            border: 2px solid ${isSelected ? "#007bff" : "#ccc"};
            background-color: ${isSelected ? "#e7f1ff" : "white"};
            padding: 10px;
            border-radius: 8px;
            margin: 6px 0;
            cursor: pointer;
        `;

        optionDiv.innerHTML = `
            <input type="radio" name="option"
            value="${option}" ${isSelected ? "checked" : ""} /> ${option}
        `;

        optionDiv.addEventListener("click", () => {
            markAttempted(index, option);
            loadQuestion(index);
        });

        optionsElement.appendChild(optionDiv);
    });

    updateNavigation();
}

// --------------------------- MARK ATTEMPT ----------------------------
function markAttempted(index, selectedAnswer) {
    questions[index].attempted = true;
    questions[index].selected = selectedAnswer;
    updateNavigation();
}

// --------------------------- NEXT / PREV -----------------------------
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

// --------------------------- LANGUAGE CHANGE -------------------------
function changeLanguage() {
    language = document.getElementById("languageSelect").value;
    loadQuestion(currentQuestion);
}

// --------------------------- TIMER -------------------------------
function startTimer() {
    const timerElement = document.getElementById("timer");
    clearInterval(timerInterval);

    timerInterval = setInterval(() => {
        if (timeLeft <= 0) {
            clearInterval(timerInterval);
            alert("⏳ Time Over!");
            submitQuiz();
            return;
        }

        const h = Math.floor(timeLeft / 3600);
        const m = Math.floor((timeLeft % 3600) / 60);
        const s = timeLeft % 60;

        timerElement.textContent =
            `Time Left: ${h.toString().padStart(2, "0")}:${m
                .toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;

        timeLeft--;
    }, 1000);
}

// --------------------------- SUBMIT QUIZ ---------------------
function submitQuiz() {
    let confirmation = confirm("Are you sure you want to submit the test?");
    if (!confirmation) return;

    clearInterval(timerInterval);

    // Calculate time spent
    const totalTimeSpent = (60 * 60) - timeLeft;
    const mins = Math.floor(totalTimeSpent / 60);
    const secs = totalTimeSpent % 60;

    // Save to localStorage
    localStorage.setItem("timeTaken", `${mins} min ${secs} sec`);

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

    // Save result data
    localStorage.setItem("attempted", attempted);
    localStorage.setItem("notAttempted", notAttempted);
    localStorage.setItem("score", score);
    localStorage.setItem("results", JSON.stringify(results));

    // Stop camera stream if active
    if (videoStream) {
        videoStream.getTracks().forEach(track => track.stop());
    }

    // Redirect
    window.location.href = "/RTS/public/Deshbord/category/test/submit-test.html";
}

// --------------------------- NAVIGATION ------------------------------
function updateNavigation() {
    const nav = document.getElementById("circleContainer");
    nav.innerHTML = "";

    questions.forEach((q, i) => {
        let color = "gray";
        if (i === currentQuestion) color = "blue";
        else if (q.attempted) color = "green";

        const circle = document.createElement("div");
        circle.className = "circle";
        circle.style.background = color;
        circle.textContent = i + 1;
        circle.onclick = () => jumpToQuestion(i);
        nav.appendChild(circle);
    });
}

function jumpToQuestion(i) {
    currentQuestion = i;
    loadQuestion(i);
}

// --------------------------- CAMERA ----------------------
let videoStream;

function startCamera() {
    const container = document.createElement("div");
    container.id = "camera-container";
    container.style.position = "fixed";
    container.style.top = "10px";
    container.style.left = "10px";
    container.style.width = "130px";
    container.style.height = "130px";
    container.style.borderRadius = "50%";
    container.style.overflow = "hidden";
    container.style.background = "#000";
    container.style.border = "3px solid red";
    container.style.zIndex = "9999";
    document.body.appendChild(container);

    const video = document.createElement("video");
    video.autoplay = true;
    video.playsInline = true;
    video.style.width = "100%";
    video.style.height = "100%";
    video.style.objectFit = "cover";
    container.appendChild(video);

    navigator.mediaDevices.getUserMedia({ video: true })
        .then(stream => {
            video.srcObject = stream;
            videoStream = stream;
        })
        .catch(() => alert("Camera not accessible!"));
}

// --------------------------- PAGE LOAD --------------------------
window.onload = function () {
    loadQuestion(currentQuestion);
    startTimer();
    startCamera();
};