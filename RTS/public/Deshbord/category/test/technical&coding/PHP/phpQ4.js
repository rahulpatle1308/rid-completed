const questions =[
  {
    "num": 1,
    "question_en": "Which function is used to convert a string to an array by splitting on newlines?",
    "question_hi": "न्यूलाइन्स पर स्प्लिट करके स्ट्रिंग को ऐरे में कन्वर्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["explode(PHP_EOL, $string)", "str_split($string)", "split('\n', $string)", "preg_split('/\r\n|\r|\n/', $string)"],
    "options_hi": ["explode(PHP_EOL, $string)", "str_split($string)", "split('\n', $string)", "preg_split('/\r\n|\r|\n/', $string)"],
    "answer_en": "explode(PHP_EOL, $string)",
    "answer_hi": "explode(PHP_EOL, $string)",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'array_filter()' function do without a callback?",
    "question_hi": "कॉलबैक के बिना 'array_filter()' फंक्शन क्या करता है?",
    "options_en": ["Removes all falsey values from array", "Filters even numbers", "Removes empty strings only", "Does nothing"],
    "options_hi": ["ऐरे से सभी फॉल्सी वैल्यूज रिमूव करता है", "ईवन नंबर्स फिल्टर करता है", "सिर्फ एम्प्टी स्ट्रिंग्स रिमूव करता है", "कुछ नहीं करता"],
    "answer_en": "Removes all falsey values from array",
    "answer_hi": "ऐरे से सभी फॉल्सी वैल्यूज रिमूव करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which magic method is called when accessing undefined or inaccessible properties?",
    "question_hi": "अनडिफाइंड या इनएक्सेसिबल प्रॉपर्टीज एक्सेस करने पर कौन-सी मैजिक मेथड कॉल होती है?",
    "options_en": ["__get()", "__set()", "__call()", "__isset()"],
    "options_hi": ["__get()", "__set()", "__call()", "__isset()"],
    "answer_en": "__get()",
    "answer_hi": "__get()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'array_reduce()' function?",
    "question_hi": "'array_reduce()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Reduces array to single value using callback", "Reduces array size", "Removes duplicate values", "Filters array elements"],
    "options_hi": ["कॉलबैक का उपयोग करके ऐरे को सिंगल वैल्यू में रिड्यूस करता है", "ऐरे साइज रिड्यूस करता है", "डुप्लीकेट वैल्यूज रिमूव करता है", "ऐरे एलिमेंट्स फिल्टर करता है"],
    "answer_en": "Reduces array to single value using callback",
    "answer_hi": "कॉलबैक का उपयोग करके ऐरे को सिंगल वैल्यू में रिड्यूस करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function converts a string to a floating-point number?",
    "question_hi": "स्ट्रिंग को फ्लोटिंग-पॉइंट नंबर में कन्वर्ट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["floatval()", "strval()", "intval()", "doubleval()"],
    "options_hi": ["floatval()", "strval()", "intval()", "doubleval()"],
    "answer_en": "floatval()",
    "answer_hi": "floatval()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'array_map()' function return?",
    "question_hi": "'array_map()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["New array with callback applied to each element", "Modified original array", "Single value", "Boolean result"],
    "options_hi": ["नया ऐरे जिसमें प्रत्येक एलिमेंट पर कॉलबैक अप्लाई किया गया है", "मॉडिफाइड ओरिजिनल ऐरे", "सिंगल वैल्यू", "बूलियन रिजल्ट"],
    "answer_en": "New array with callback applied to each element",
    "answer_hi": "नया ऐरे जिसमें प्रत्येक एलिमेंट पर कॉलबैक अप्लाई किया गया है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to get all HTTP headers sent by server?",
    "question_hi": "सर्वर द्वारा भेजे गए सभी HTTP हेडर्स प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["getallheaders()", "headers_list()", "apache_request_headers()", "All of the above"],
    "options_hi": ["getallheaders()", "headers_list()", "apache_request_headers()", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'array_walk()' function?",
    "question_hi": "'array_walk()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Applies user function to each array element", "Walks through array recursively", "Creates array iterator", "Filters array elements"],
    "options_hi": ["प्रत्येक ऐरे एलिमेंट पर यूजर फंक्शन अप्लाई करता है", "ऐरे के through recursively वॉक करता है", "ऐरे इटरेटर बनाता है", "ऐरे एलिमेंट्स फिल्टर करता है"],
    "answer_en": "Applies user function to each array element",
    "answer_hi": "प्रत्येक ऐरे एलिमेंट पर यूजर फंक्शन अप्लाई करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function returns the integer value of a variable?",
    "question_hi": "वेरिएबल की इंटीजर वैल्यू कौन-सा फंक्शन रिटर्न करता है?",
    "options_en": ["intval()", "(int)", "Both intval() and (int)", "integer()"],
    "options_hi": ["intval()", "(int)", "intval() और (int) दोनों", "integer()"],
    "answer_en": "Both intval() and (int)",
    "answer_hi": "intval() और (int) दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'array_column()' function do?",
    "question_hi": "'array_column()' फंक्शन क्या करता है?",
    "options_en": ["Returns values from single column of input array", "Creates column in array", "Adds column to array", "Extracts column names"],
    "options_hi": ["इनपुट ऐरे के सिंगल कॉलम से वैल्यूज रिटर्न करता है", "ऐरे में कॉलम बनाता है", "ऐरे में कॉलम ऐड करता है", "कॉलम नेम्स extract करता है"],
    "answer_en": "Returns values from single column of input array",
    "answer_hi": "इनपुट ऐरे के सिंगल कॉलम से वैल्यूज रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function is used to calculate the SHA-1 hash of a string?",
    "question_hi": "स्ट्रिंग का SHA-1 हैश कैलकुलेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["sha1()", "hash('sha1', $string)", "Both sha1() and hash()", "crypt()"],
    "options_hi": ["sha1()", "hash('sha1', $string)", "sha1() और hash() दोनों", "crypt()"],
    "answer_en": "Both sha1() and hash()",
    "answer_hi": "sha1() और hash() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'array_chunk()' function?",
    "question_hi": "'array_chunk()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Splits array into chunks", "Divides array into equal parts", "Creates chunks of specified size", "All of the above"],
    "options_hi": ["ऐरे को चंक्स में स्प्लिट करता है", "ऐरे को बराबर पार्ट्स में डिवाइड करता है", "स्पेसिफाइड साइज के चंक्स बनाता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to check if a string ends with a given substring?",
    "question_hi": "चेक करने के लिए कि स्ट्रिंग दी गई सबस्ट्रिंग से एंड होती है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["str_ends_with()", "substr_compare()", "Both str_ends_with() and substr_compare()", "ends_with()"],
    "options_hi": ["str_ends_with()", "substr_compare()", "str_ends_with() और substr_compare() दोनों", "ends_with()"],
    "answer_en": "Both str_ends_with() and substr_compare()",
    "answer_hi": "str_ends_with() और substr_compare() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'array_fill()' function do?",
    "question_hi": "'array_fill()' फंक्शन क्या करता है?",
    "options_en": ["Fills array with values", "Creates array with specified number of elements", "Both A and B", "Replaces array values"],
    "options_hi": ["ऐरे को वैल्यूज से भरता है", "स्पेसिफाइड नंबर ऑफ एलिमेंट्स के साथ ऐरे बनाता है", "A और B दोनों", "ऐरे वैल्यूज रिप्लेस करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function returns the next element in an array?",
    "question_hi": "ऐरे में अगला एलिमेंट कौन-सा फंक्शन रिटर्न करता है?",
    "options_en": ["next()", "current()", "prev()", "each()"],
    "options_hi": ["next()", "current()", "prev()", "each()"],
    "answer_en": "next()",
    "answer_hi": "next()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'array_flip()' function?",
    "question_hi": "'array_flip()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Exchanges keys with their values", "Reverses array order", "Flips array vertically", "Rotates array"],
    "options_hi": ["कीज़ को उनकी वैल्यूज के साथ एक्सचेंज करता है", "ऐरे ऑर्डर रिवर्स करता है", "ऐरे को वर्टिकली फ्लिप करता है", "ऐरे रोटेट करता है"],
    "answer_en": "Exchanges keys with their values",
    "answer_hi": "कीज़ को उनकी वैल्यूज के साथ एक्सचेंज करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function is used to create an array of a range of elements?",
    "question_hi": "एलिमेंट्स की रेंज का ऐरे बनाने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["range()", "array_range()", "create_range()", "seq()"],
    "options_hi": ["range()", "array_range()", "create_range()", "seq()"],
    "answer_en": "range()",
    "answer_hi": "range()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'array_pad()' function do?",
    "question_hi": "'array_pad()' फंक्शन क्या करता है?",
    "options_en": ["Pads array to specified length with value", "Adds padding to array edges", "Extends array size", "Fills empty array positions"],
    "options_hi": ["ऐरे को वैल्यू के साथ स्पेसिफाइड लेंथ तक पैड करता है", "ऐरे एजेस में पैडिंग ऐड करता है", "ऐरे साइज एक्सटेंड करता है", "एम्प्टी ऐरे पोजीशन फिल करता है"],
    "answer_en": "Pads array to specified length with value",
    "answer_hi": "ऐरे को वैल्यू के साथ स्पेसिफाइड लेंथ तक पैड करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to check if a string contains only alphabetic characters?",
    "question_hi": "चेक करने के लिए कि स्ट्रिंग में सिर्फ अल्फाबेटिक करैक्टर्स हैं, किस फंक्शन का उपयोग होता है?",
    "options_en": ["ctype_alpha()", "is_alpha()", "alpha_check()", "str_is_alpha()"],
    "options_hi": ["ctype_alpha()", "is_alpha()", "alpha_check()", "str_is_alpha()"],
    "answer_en": "ctype_alpha()",
    "answer_hi": "ctype_alpha()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'array_rand()' function?",
    "question_hi": "'array_rand()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Picks random key(s) from array", "Shuffles array randomly", "Returns random value", "Selects random element"],
    "options_hi": ["ऐरे से रैंडम की(ज़) पिक करता है", "ऐरे को रैंडमली शफल करता है", "रैंडम वैल्यू रिटर्न करता है", "रैंडम एलिमेंट सेलेक्ट करता है"],
    "answer_en": "Picks random key(s) from array",
    "answer_hi": "ऐरे से रैंडम की(ज़) पिक करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to calculate the Levenshtein distance between two strings?",
    "question_hi": "दो स्ट्रिंग्स के बीच लेवेनश्टीन डिस्टेंस कैलकुलेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["levenshtein()", "str_distance()", "similar_text()", "str_diff()"],
    "options_hi": ["levenshtein()", "str_distance()", "similar_text()", "str_diff()"],
    "answer_en": "levenshtein()",
    "answer_hi": "levenshtein()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the 'array_replace()' function do?",
    "question_hi": "'array_replace()' फंक्शन क्या करता है?",
    "options_en": ["Replaces elements from passed arrays", "Merges arrays with replacement", "Both A and B", "Swaps array elements"],
    "options_hi": ["पास किए गए ऐरे से एलिमेंट्स रिप्लेस करता है", "रिप्लेसमेंट के साथ ऐरे मर्ज करता है", "A और B दोनों", "ऐरे एलिमेंट्स स्वैप करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used to get the ASCII value of the first character of a string?",
    "question_hi": "स्ट्रिंग के पहले करैक्टर की ASCII वैल्यू प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["ord()", "chr()", "ascii()", "first_char()"],
    "options_hi": ["ord()", "chr()", "ascii()", "first_char()"],
    "answer_en": "ord()",
    "answer_hi": "ord()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'array_sum()' function?",
    "question_hi": "'array_sum()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Calculates sum of values in array", "Adds all array elements", "Returns total of numeric array", "All of the above"],
    "options_hi": ["ऐरे में वैल्यूज का योग कैलकुलेट करता है", "सभी ऐरे एलिमेंट्स ऐड करता है", "न्यूमेरिक ऐरे का टोटल रिटर्न करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to calculate the similarity between two strings?",
    "question_hi": "दो स्ट्रिंग्स के बीच सिमिलैरिटी कैलकुलेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["similar_text()", "str_similar()", "compare_strings()", "strcmp()"],
    "options_hi": ["similar_text()", "str_similar()", "compare_strings()", "strcmp()"],
    "answer_en": "similar_text()",
    "answer_hi": "similar_text()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the 'array_udiff()' function do?",
    "question_hi": "'array_udiff()' फंक्शन क्या करता है?",
    "options_en": ["Computes difference using callback function", "Compares arrays with user function", "Returns difference based on callback", "All of the above"],
    "options_hi": ["कॉलबैक फंक्शन का उपयोग करके डिफरेंस कंप्यूट करता है", "यूजर फंक्शन के साथ ऐरे compare करता है", "कॉलबैक के आधार पर डिफरेंस रिटर्न करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to check if a variable is a resource?",
    "question_hi": "चेक करने के लिए कि वेरिएबल रिसोर्स है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_resource()", "resource()", "is_res()", "check_resource()"],
    "options_hi": ["is_resource()", "resource()", "is_res()", "check_resource()"],
    "answer_en": "is_resource()",
    "answer_hi": "is_resource()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'array_uintersect()' function?",
    "question_hi": "'array_uintersect()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Computes intersection using callback", "Finds common elements with user function", "Both A and B", "Merges arrays with callback"],
    "options_hi": ["कॉलबैक का उपयोग करके इंटरसेक्शन कंप्यूट करता है", "यूजर फंक्शन के साथ कॉमन एलिमेंट्स find करता है", "A और B दोनों", "कॉलबैक के साथ ऐरे मर्ज करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to get the last occurrence of a substring in a string?",
    "question_hi": "स्ट्रिंग में सबस्ट्रिंग की लास्ट occurrence प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["strrpos()", "strripos()", "Both strrpos() and strripos()", "lastpos()"],
    "options_hi": ["strrpos()", "strripos()", "strrpos() और strripos() दोनों", "lastpos()"],
    "answer_en": "Both strrpos() and strripos()",
    "answer_hi": "strrpos() और strripos() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the 'array_walk_recursive()' function do?",
    "question_hi": "'array_walk_recursive()' फंक्शन क्या करता है?",
    "options_en": ["Applies user function recursively to array", "Walks through nested arrays", "Both A and B", "Processes multi-dimensional arrays"],
    "options_hi": ["यूजर फंक्शन को recursively ऐरे पर अप्लाई करता है", "नेस्टेड ऐरे के through वॉक करता है", "A और B दोनों", "मल्टी-डायमेंशनल ऐरे प्रोसेस करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to parse a CSV string into an array?",
    "question_hi": "CSV स्ट्रिंग को ऐरे में पार्स करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["str_getcsv()", "csv_to_array()", "parse_csv()", "explode(',', $csv)"],
    "options_hi": ["str_getcsv()", "csv_to_array()", "parse_csv()", "explode(',', $csv)"],
    "answer_en": "str_getcsv()",
    "answer_hi": "str_getcsv()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'array_product()' function?",
    "question_hi": "'array_product()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Calculates product of values in array", "Multiplies all array elements", "Returns product of numeric array", "All of the above"],
    "options_hi": ["ऐरे में वैल्यूज का प्रोडक्ट कैलकुलेट करता है", "सभी ऐरे एलिमेंट्स मल्टीप्लाई करता है", "न्यूमेरिक ऐरे का प्रोडक्ट रिटर्न करता है", "उपरोक्त सभी"],
    "answer_en": "All of the above",
    "answer_hi": "उपरोक्त सभी",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to get the current element in an array?",
    "question_hi": "ऐरे में करंट एलिमेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["current()", "pos()", "Both current() and pos()", "element()"],
    "options_hi": ["current()", "pos()", "current() और pos() दोनों", "element()"],
    "answer_en": "Both current() and pos()",
    "answer_hi": "current() और pos() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'array_multisort()' function do?",
    "question_hi": "'array_multisort()' फंक्शन क्या करता है?",
    "options_en": ["Sorts multiple arrays at once", "Sorts multi-dimensional array", "Both A and B", "Sorts array by multiple columns"],
    "options_hi": ["एक साथ मल्टीपल ऐरे सॉर्ट करता है", "मल्टी-डायमेंशनल ऐरे सॉर्ट करता है", "A और B दोनों", "मल्टीपल कॉलम द्वारा ऐरे सॉर्ट करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used to split a string by a regular expression?",
    "question_hi": "रेगुलर एक्सप्रेशन द्वारा स्ट्रिंग स्प्लिट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["preg_split()", "split()", "ereg_split()", "Both preg_split() and split()"],
    "options_hi": ["preg_split()", "split()", "ereg_split()", "preg_split() और split() दोनों"],
    "answer_en": "Both preg_split() and split()",
    "answer_hi": "preg_split() और split() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'array_intersect_key()' function?",
    "question_hi": "'array_intersect_key()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Computes intersection using keys", "Finds common keys between arrays", "Both A and B", "Compares array keys only"],
    "options_hi": ["कीज़ का उपयोग करके इंटरसेक्शन कंप्यूट करता है", "ऐरे के बीच कॉमन कीज़ find करता है", "A और B दोनों", "सिर्फ ऐरे कीज़ compare करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to check if a string contains only digits?",
    "question_hi": "चेक करने के लिए कि स्ट्रिंग में सिर्फ डिजिट्स हैं, किस फंक्शन का उपयोग होता है?",
    "options_en": ["ctype_digit()", "is_numeric()", "Both ctype_digit() and is_numeric()", "is_digit()"],
    "options_hi": ["ctype_digit()", "is_numeric()", "ctype_digit() और is_numeric() दोनों", "is_digit()"],
    "answer_en": "ctype_digit()",
    "answer_hi": "ctype_digit()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'array_diff_key()' function do?",
    "question_hi": "'array_diff_key()' फंक्शन क्या करता है?",
    "options_en": ["Computes difference using keys", "Finds keys in first array not in others", "Both A and B", "Compares keys only"],
    "options_hi": ["कीज़ का उपयोग करके डिफरेंस कंप्यूट करता है", "पहले ऐरे में ऐसी कीज़ find करता है जो दूसरे में नहीं हैं", "A और B दोनों", "सिर्फ कीज़ compare करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to calculate the natural logarithm of a number?",
    "question_hi": "नंबर का नेचुरल लॉगरिदम कैलकुलेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["log()", "log10()", "ln()", "natural_log()"],
    "options_hi": ["log()", "log10()", "ln()", "natural_log()"],
    "answer_en": "log()",
    "answer_hi": "log()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'array_intersect_ukey()' function?",
    "question_hi": "'array_intersect_ukey()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Computes intersection with callback on keys", "Compares keys using user function", "Both A and B", "Finds intersection with key callback"],
    "options_hi": ["कीज़ पर कॉलबैक के साथ इंटरसेक्शन कंप्यूट करता है", "यूजर फंक्शन का उपयोग करके कीज़ compare करता है", "A और B दोनों", "की कॉलबैक के साथ इंटरसेक्शन find करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to get the previous element in an array?",
    "question_hi": "ऐरे में पिछला एलिमेंट प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["prev()", "previous()", "back()", "last()"],
    "options_hi": ["prev()", "previous()", "back()", "last()"],
    "answer_en": "prev()",
    "answer_hi": "prev()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'array_udiff_uassoc()' function do?",
    "question_hi": "'array_udiff_uassoc()' फंक्शन क्या करता है?",
    "options_en": ["Computes difference with callbacks for data and index", "Compares arrays with two user functions", "Both A and B", "Advanced array difference"],
    "options_hi": ["डेटा और इंडेक्स के लिए कॉलबैक्स के साथ डिफरेंस कंप्यूट करता है", "दो यूजर फंक्शन के साथ ऐरे compare करता है", "A और B दोनों", "एडवांस्ड ऐरे डिफरेंस"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to check if a string contains only alphanumeric characters?",
    "question_hi": "चेक करने के लिए कि स्ट्रिंग में सिर्फ अल्फान्यूमेरिक करैक्टर्स हैं, किस फंक्शन का उपयोग होता है?",
    "options_en": ["ctype_alnum()", "is_alnum()", "alnum_check()", "str_is_alnum()"],
    "options_hi": ["ctype_alnum()", "is_alnum()", "alnum_check()", "str_is_alnum()"],
    "answer_en": "ctype_alnum()",
    "answer_hi": "ctype_alnum()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'array_uintersect_uassoc()' function?",
    "question_hi": "'array_uintersect_uassoc()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Computes intersection with callbacks for data and index", "Compares arrays with two user functions", "Both A and B", "Advanced array intersection"],
    "options_hi": ["डेटा और इंडेक्स के लिए कॉलबैक्स के साथ इंटरसेक्शन कंप्यूट करता है", "दो यूजर फंक्शन के साथ ऐरे compare करता है", "A और B दोनों", "एडवांस्ड ऐरे इंटरसेक्शन"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used to calculate the base-10 logarithm of a number?",
    "question_hi": "नंबर का बेस-10 लॉगरिदम कैलकुलेट करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["log10()", "log()", "log(10)", "base10_log()"],
    "options_hi": ["log10()", "log()", "log(10)", "base10_log()"],
    "answer_en": "log10()",
    "answer_hi": "log10()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'array_diff_ukey()' function do?",
    "question_hi": "'array_diff_ukey()' फंक्शन क्या करता है?",
    "options_en": ["Computes difference with callback on keys", "Compares keys using user function", "Both A and B", "Finds difference with key callback"],
    "options_hi": ["कीज़ पर कॉलबैक के साथ डिफरेंस कंप्यूट करता है", "यूजर फंक्शन का उपयोग करके कीज़ compare करता है", "A और B दोनों", "की कॉलबैक के साथ डिफरेंस find करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to check if a string contains only printable characters?",
    "question_hi": "चेक करने के लिए कि स्ट्रिंग में सिर्फ प्रिंटेबल करैक्टर्स हैं, किस फंक्शन का उपयोग होता है?",
    "options_en": ["ctype_print()", "is_printable()", "print_check()", "str_is_print()"],
    "options_hi": ["ctype_print()", "is_printable()", "print_check()", "str_is_print()"],
    "answer_en": "ctype_print()",
    "answer_hi": "ctype_print()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'array_intersect_uassoc()' function?",
    "question_hi": "'array_intersect_uassoc()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Computes intersection with callback on index", "Compares indices using user function", "Both A and B", "Finds intersection with index callback"],
    "options_hi": ["इंडेक्स पर कॉलबैक के साथ इंटरसेक्शन कंप्यूट करता है", "यूजर फंक्शन का उपयोग करके इंडिसेज compare करता है", "A और B दोनों", "इंडेक्स कॉलबैक के साथ इंटरसेक्शन find करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used to check if a string contains only lowercase letters?",
    "question_hi": "चेक करने के लिए कि स्ट्रिंग में सिर्फ लोअरकेस लेटर्स हैं, किस फंक्शन का उपयोग होता है?",
    "options_en": ["ctype_lower()", "is_lower()", "lower_check()", "str_is_lower()"],
    "options_hi": ["ctype_lower()", "is_lower()", "lower_check()", "str_is_lower()"],
    "answer_en": "ctype_lower()",
    "answer_hi": "ctype_lower()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'array_diff_uassoc()' function do?",
    "question_hi": "'array_diff_uassoc()' फंक्शन क्या करता है?",
    "options_en": ["Computes difference with callback on index", "Compares indices using user function", "Both A and B", "Finds difference with index callback"],
    "options_hi": ["इंडेक्स पर कॉलबैक के साथ डिफरेंस कंप्यूट करता है", "यूजर फंक्शन का उपयोग करके इंडिसेज compare करता है", "A और B दोनों", "इंडेक्स कॉलबैक के साथ डिफरेंस find करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
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