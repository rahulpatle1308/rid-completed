const questions = 
[
  {
    "num": 1,
    "question_en": "Which function is used to check if a variable is a boolean?",
    "question_hi": "चेक करने के लिए कि वेरिएबल बूलियन है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_bool()", "bool()", "is_boolean()", "check_bool()"],
    "options_hi": ["is_bool()", "bool()", "is_boolean()", "check_bool()"],
    "answer_en": "is_bool()",
    "answer_hi": "is_bool()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 2,
    "question_en": "What does the 'array_change_key_case()' function do?",
    "question_hi": "'array_change_key_case()' फंक्शन क्या करता है?",
    "options_en": ["Changes case of all keys in array", "Converts keys to uppercase/lowercase", "Both A and B", "Modifies key cases"],
    "options_hi": ["ऐरे में सभी कीज़ के केस बदलता है", "कीज़ को अपरकेस/लोअरकेस में कन्वर्ट करता है", "A और B दोनों", "की केस मॉडिफाई करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 3,
    "question_en": "Which function is used to get the current script's directory?",
    "question_hi": "करंट स्क्रिप्ट की डायरेक्टरी प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["dirname(__FILE__)", "__DIR__", "Both dirname(__FILE__) and __DIR__", "script_dir()"],
    "options_hi": ["dirname(__FILE__)", "__DIR__", "dirname(__FILE__) और __DIR__ दोनों", "script_dir()"],
    "answer_en": "Both dirname(__FILE__) and __DIR__",
    "answer_hi": "dirname(__FILE__) और __DIR__ दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 4,
    "question_en": "What is the purpose of the 'array_count_values()' function?",
    "question_hi": "'array_count_values()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Counts values in array", "Returns frequency of values", "Both A and B", "Counts occurrences"],
    "options_hi": ["ऐरे में वैल्यूज गिनता है", "वैल्यूज की फ्रीक्वेंसी रिटर्न करता है", "A और B दोनों", "ऑकरेंसेज गिनता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 5,
    "question_en": "Which function is used to check if a variable is a double/float?",
    "question_hi": "चेक करने के लिए कि वेरिएबल डबल/फ्लोट है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_float()", "is_double()", "Both is_float() and is_double()", "is_real()"],
    "options_hi": ["is_float()", "is_double()", "is_float() और is_double() दोनों", "is_real()"],
    "answer_en": "Both is_float() and is_double()",
    "answer_hi": "is_float() और is_double() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 6,
    "question_en": "What does the 'array_diff_assoc()' function do?",
    "question_hi": "'array_diff_assoc()' फंक्शन क्या करता है?",
    "options_en": ["Computes difference with index check", "Compares arrays with index", "Both A and B", "Finds difference with keys"],
    "options_hi": ["इंडेक्स चेक के साथ डिफरेंस कंप्यूट करता है", "इंडेक्स के साथ ऐरे compare करता है", "A और B दोनों", "कीज़ के साथ डिफरेंस find करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 7,
    "question_en": "Which function is used to get the IP address of the client?",
    "question_hi": "क्लाइंट का IP एड्रेस प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["$_SERVER['REMOTE_ADDR']", "getenv('REMOTE_ADDR')", "Both A and B", "client_ip()"],
    "options_hi": ["$_SERVER['REMOTE_ADDR']", "getenv('REMOTE_ADDR')", "A और B दोनों", "client_ip()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 8,
    "question_en": "What is the purpose of the 'array_fill_keys()' function?",
    "question_hi": "'array_fill_keys()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Fills array with value, specifying keys", "Creates array with keys and same value", "Both A and B", "Initializes array with keys"],
    "options_hi": ["वैल्यू के साथ ऐरे भरता है, कीज़ स्पेसिफाई करते हुए", "कीज़ और समान वैल्यू के साथ ऐरे बनाता है", "A और B दोनों", "कीज़ के साथ ऐरे इनिशियलाइज करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 9,
    "question_en": "Which function is used to check if a variable is an integer?",
    "question_hi": "चेक करने के लिए कि वेरिएबल इंटीजर है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_int()", "is_integer()", "Both is_int() and is_integer()", "is_long()"],
    "options_hi": ["is_int()", "is_integer()", "is_int() और is_integer() दोनों", "is_long()"],
    "answer_en": "Both is_int() and is_integer()",
    "answer_hi": "is_int() और is_integer() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 10,
    "question_en": "What does the 'array_intersect_assoc()' function do?",
    "question_hi": "'array_intersect_assoc()' फंक्शन क्या करता है?",
    "options_en": ["Computes intersection with index check", "Compares arrays with index", "Both A and B", "Finds intersection with keys"],
    "options_hi": ["इंडेक्स चेक के साथ इंटरसेक्शन कंप्यूट करता है", "इंडेक्स के साथ ऐरे compare करता है", "A और B दोनों", "कीज़ के साथ इंटरसेक्शन find करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 11,
    "question_en": "Which function is used to get the server's IP address?",
    "question_hi": "सर्वर का IP एड्रेस प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["$_SERVER['SERVER_ADDR']", "gethostbyname($_SERVER['SERVER_NAME'])", "Both A and B", "server_ip()"],
    "options_hi": ["$_SERVER['SERVER_ADDR']", "gethostbyname($_SERVER['SERVER_NAME'])", "A और B दोनों", "server_ip()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 12,
    "question_en": "What is the purpose of the 'array_key_first()' function?",
    "question_hi": "'array_key_first()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Gets first key of array", "Returns first key without affecting pointer", "Both A and B", "Gets initial key"],
    "options_hi": ["ऐरे की पहली की प्राप्त करता है", "पॉइंटर को प्रभावित किए बिना पहली की रिटर्न करता है", "A और B दोनों", "इनिशियल की प्राप्त करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 13,
    "question_en": "Which function is used to check if a variable is a long integer?",
    "question_hi": "चेक करने के लिए कि वेरिएबल लॉन्ग इंटीजर है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_long()", "is_int()", "Both is_long() and is_int()", "check_long()"],
    "options_hi": ["is_long()", "is_int()", "is_long() और is_int() दोनों", "check_long()"],
    "answer_en": "Both is_long() and is_int()",
    "answer_hi": "is_long() और is_int() दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 14,
    "question_en": "What does the 'array_key_last()' function do?",
    "question_hi": "'array_key_last()' फंक्शन क्या करता है?",
    "options_en": ["Gets last key of array", "Returns last key without affecting pointer", "Both A and B", "Gets final key"],
    "options_hi": ["ऐरे की आखिरी की प्राप्त करता है", "पॉइंटर को प्रभावित किए बिना आखिरी की रिटर्न करता है", "A और B दोनों", "फाइनल की प्राप्त करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 15,
    "question_en": "Which function is used to check if a variable is null?",
    "question_hi": "चेक करने के लिए कि वेरिएबल null है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_null()", "=== null", "Both is_null() and === null", "check_null()"],
    "options_hi": ["is_null()", "=== null", "is_null() और === null दोनों", "check_null()"],
    "answer_en": "Both is_null() and === null",
    "answer_hi": "is_null() और === null दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 16,
    "question_en": "What is the purpose of the 'array_key_exists()' function?",
    "question_hi": "'array_key_exists()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Checks if key exists in array", "Verifies array key presence", "Both A and B", "Key existence check"],
    "options_hi": ["चेक करता है कि ऐरे में की exists है", "ऐरे की उपस्थिति सत्यापित करता है", "A और B दोनों", "की एक्सिस्टेंस चेक"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 17,
    "question_en": "Which function is used to check if a variable is numeric?",
    "question_hi": "चेक करने के लिए कि वेरिएबल न्यूमेरिक है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_numeric()", "is_numeric() with type check", "Both A and B", "check_numeric()"],
    "options_hi": ["is_numeric()", "टाइप चेक के साथ is_numeric()", "A और B दोनों", "check_numeric()"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 18,
    "question_en": "What does the 'array_keys()' function return?",
    "question_hi": "'array_keys()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["Array of keys", "All keys of array", "Both A and B", "Key list"],
    "options_hi": ["कीज़ का ऐरे", "ऐरे की सभी कीज़", "A और B दोनों", "की लिस्ट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 19,
    "question_en": "Which function is used to check if a variable is an object?",
    "question_hi": "चेक करने के लिए कि वेरिएबल ऑब्जेक्ट है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_object()", "object()", "is_obj()", "check_object()"],
    "options_hi": ["is_object()", "object()", "is_obj()", "check_object()"],
    "answer_en": "is_object()",
    "answer_hi": "is_object()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 20,
    "question_en": "What is the purpose of the 'array_map()' function's null callback?",
    "question_hi": "'array_map()' फंक्शन के null कॉलबैक का उद्देश्य क्या है?",
    "options_en": ["Creates array of arrays", "Zips multiple arrays", "Both A and B", "Combines arrays"],
    "options_hi": ["ऐरे का ऐरे बनाता है", "मल्टीपल ऐरे जिप करता है", "A और B दोनों", "ऐरे कॉम्बाइन करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 21,
    "question_en": "Which function is used to check if a variable is a scalar?",
    "question_hi": "चेक करने के लिए कि वेरिएबल स्केलर है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_scalar()", "scalar()", "is_primitive()", "check_scalar()"],
    "options_hi": ["is_scalar()", "scalar()", "is_primitive()", "check_scalar()"],
    "answer_en": "is_scalar()",
    "answer_hi": "is_scalar()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 22,
    "question_en": "What does the 'array_merge_recursive()' function do?",
    "question_hi": "'array_merge_recursive()' फंक्शन क्या करता है?",
    "options_en": ["Merges arrays recursively", "Combines arrays with recursion", "Both A and B", "Deep array merge"],
    "options_hi": ["रिकर्सिवली ऐरे मर्ज करता है", "रिकर्सन के साथ ऐरे कॉम्बाइन करता है", "A और B दोनों", "डीप ऐरे मर्ज"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 23,
    "question_en": "Which function is used to check if a variable is a string?",
    "question_hi": "चेक करने के लिए कि वेरिएबल स्ट्रिंग है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["is_string()", "string()", "is_str()", "check_string()"],
    "options_hi": ["is_string()", "string()", "is_str()", "check_string()"],
    "answer_en": "is_string()",
    "answer_hi": "is_string()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 24,
    "question_en": "What is the purpose of the 'array_pad()' function's negative length?",
    "question_hi": "'array_pad()' फंक्शन की नेगेटिव लेंथ का उद्देश्य क्या है?",
    "options_en": ["Pads left side", "Adds padding to beginning", "Both A and B", "Prepends padding"],
    "options_hi": ["लेफ्ट साइड पैड करता है", "शुरुआत में पैडिंग जोड़ता है", "A और B दोनों", "पैडिंग प्रीपेंड करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 25,
    "question_en": "Which function is used to check if a function is defined?",
    "question_hi": "चेक करने के लिए कि फंक्शन डिफाइंड है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["function_exists()", "exists()", "is_function()", "check_function()"],
    "options_hi": ["function_exists()", "exists()", "is_function()", "check_function()"],
    "answer_en": "function_exists()",
    "answer_hi": "function_exists()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 26,
    "question_en": "What does the 'array_pop()' function return when array is empty?",
    "question_hi": "जब ऐरे खाली होता है तो 'array_pop()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["null", "false", "Both null and false", "empty value"],
    "options_hi": ["null", "false", "null और false दोनों", "एम्प्टी वैल्यू"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 27,
    "question_en": "Which function is used to check if a class is defined?",
    "question_hi": "चेक करने के लिए कि क्लास डिफाइंड है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["class_exists()", "exists()", "is_class()", "check_class()"],
    "options_hi": ["class_exists()", "exists()", "is_class()", "check_class()"],
    "answer_en": "class_exists()",
    "answer_hi": "class_exists()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 28,
    "question_en": "What is the purpose of the 'array_product()' function with empty array?",
    "question_hi": "खाली ऐरे के साथ 'array_product()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns 1", "Returns 0", "Returns null", "Returns false"],
    "options_hi": ["1 रिटर्न करता है", "0 रिटर्न करता है", "null रिटर्न करता है", "false रिटर्न करता है"],
    "answer_en": "Returns 1",
    "answer_hi": "1 रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 29,
    "question_en": "Which function is used to check if an interface is defined?",
    "question_hi": "चेक करने के लिए कि इंटरफेस डिफाइंड है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["interface_exists()", "exists()", "is_interface()", "check_interface()"],
    "options_hi": ["interface_exists()", "exists()", "is_interface()", "check_interface()"],
    "answer_en": "interface_exists()",
    "answer_hi": "interface_exists()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 30,
    "question_en": "What does the 'array_push()' function return?",
    "question_hi": "'array_push()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["New number of elements", "Length of array", "Both A and B", "Array count"],
    "options_hi": ["एलिमेंट्स की नई संख्या", "ऐरे की लंबाई", "A और B दोनों", "ऐरे काउंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 31,
    "question_en": "Which function is used to check if a trait is defined?",
    "question_hi": "चेक करने के लिए कि ट्रेट डिफाइंड है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["trait_exists()", "exists()", "is_trait()", "check_trait()"],
    "options_hi": ["trait_exists()", "exists()", "is_trait()", "check_trait()"],
    "answer_en": "trait_exists()",
    "answer_hi": "trait_exists()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 32,
    "question_en": "What is the purpose of the 'array_rand()' function's second parameter?",
    "question_hi": "'array_rand()' फंक्शन के सेकंड पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Number of random entries", "How many keys to pick", "Both A and B", "Random count"],
    "options_hi": ["रैंडम एंट्रीज की संख्या", "कितनी कीज़ पिक करनी हैं", "A और B दोनों", "रैंडम काउंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 33,
    "question_en": "Which function is used to check if a constant is defined?",
    "question_hi": "चेक करने के लिए कि कॉन्स्टेंट डिफाइंड है, किस फंक्शन का उपयोग होता है?",
    "options_en": ["defined()", "constant_exists()", "is_constant()", "check_constant()"],
    "options_hi": ["defined()", "constant_exists()", "is_constant()", "check_constant()"],
    "answer_en": "defined()",
    "answer_hi": "defined()",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 34,
    "question_en": "What does the 'array_reduce()' function's third parameter do?",
    "question_hi": "'array_reduce()' फंक्शन का तीसरा पैरामीटर क्या करता है?",
    "options_en": ["Initial value", "Starting value for accumulator", "Both A and B", "Reduce initial"],
    "options_hi": ["इनिशियल वैल्यू", "एक्यूमुलेटर के लिए स्टार्टिंग वैल्यू", "A और B दोनों", "रिड्यूस इनिशियल"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 35,
    "question_en": "Which function is used to get the current line number in script?",
    "question_hi": "स्क्रिप्ट में करंट लाइन नंबर प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["__LINE__", "line()", "current_line()", "get_line()"],
    "options_hi": ["__LINE__", "line()", "current_line()", "get_line()"],
    "answer_en": "__LINE__",
    "answer_hi": "__LINE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 36,
    "question_en": "What is the purpose of the 'array_replace_recursive()' function?",
    "question_hi": "'array_replace_recursive()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Replaces elements recursively", "Deep array replacement", "Both A and B", "Recursive replacement"],
    "options_hi": ["रिकर्सिवली एलिमेंट्स रिप्लेस करता है", "डीप ऐरे रिप्लेसमेंट", "A और B दोनों", "रिकर्सिव रिप्लेसमेंट"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 37,
    "question_en": "Which function is used to get the current function name?",
    "question_hi": "करंट फंक्शन नाम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["__FUNCTION__", "function()", "current_function()", "get_function()"],
    "options_hi": ["__FUNCTION__", "function()", "current_function()", "get_function()"],
    "answer_en": "__FUNCTION__",
    "answer_hi": "__FUNCTION__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 38,
    "question_en": "What does the 'array_reverse()' function's second parameter do?",
    "question_hi": "'array_reverse()' फंक्शन का दूसरा पैरामीटर क्या करता है?",
    "options_en": ["Preserve keys", "Keep key associations", "Both A and B", "Maintain keys"],
    "options_hi": ["कीज़ प्रिजर्व करता है", "की एसोसिएशन रखता है", "A और B दोनों", "कीज़ मेंटेन करता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 39,
    "question_en": "Which function is used to get the current class name?",
    "question_hi": "करंट क्लास नाम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["__CLASS__", "class()", "current_class()", "get_class()"],
    "options_hi": ["__CLASS__", "class()", "current_class()", "get_class()"],
    "answer_en": "__CLASS__",
    "answer_hi": "__CLASS__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 40,
    "question_en": "What is the purpose of the 'array_search()' function's third parameter?",
    "question_hi": "'array_search()' फंक्शन के तीसरे पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Strict comparison", "Type checking", "Both A and B", "Exact match"],
    "options_hi": ["स्ट्रिक्ट तुलना", "टाइप चेकिंग", "A और B दोनों", "एक्जैक्ट मैच"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 41,
    "question_en": "Which function is used to get the current method name?",
    "question_hi": "करंट मेथड नाम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["__METHOD__", "method()", "current_method()", "get_method()"],
    "options_hi": ["__METHOD__", "method()", "current_method()", "get_method()"],
    "answer_en": "__METHOD__",
    "answer_hi": "__METHOD__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 42,
    "question_en": "What does the 'array_shift()' function return when array is empty?",
    "question_hi": "जब ऐरे खाली होता है तो 'array_shift()' फंक्शन क्या रिटर्न करता है?",
    "options_en": ["null", "false", "Both null and false", "empty value"],
    "options_hi": ["null", "false", "null और false दोनों", "एम्प्टी वैल्यू"],
    "answer_en": "null",
    "answer_hi": "null",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 43,
    "question_en": "Which function is used to get the current namespace name?",
    "question_hi": "करंट नेमस्पेस नाम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["__NAMESPACE__", "namespace()", "current_namespace()", "get_namespace()"],
    "options_hi": ["__NAMESPACE__", "namespace()", "current_namespace()", "get_namespace()"],
    "answer_en": "__NAMESPACE__",
    "answer_hi": "__NAMESPACE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 44,
    "question_en": "What is the purpose of the 'array_slice()' function's fourth parameter?",
    "question_hi": "'array_slice()' फंक्शन के चौथे पैरामीटर का उद्देश्य क्या है?",
    "options_en": ["Preserve keys", "Maintain key associations", "Both A and B", "Keep keys"],
    "options_hi": ["कीज़ प्रिजर्व करता है", "की एसोसिएशन मेंटेन करता है", "A और B दोनों", "कीज़ रखता है"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 45,
    "question_en": "Which function is used to get the current trait name?",
    "question_hi": "करंट ट्रेट नाम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["No direct magic constant", "__TRAIT__", "trait()", "get_trait()"],
    "options_hi": ["कोई डायरेक्ट मैजिक कॉन्स्टेंट नहीं", "__TRAIT__", "trait()", "get_trait()"],
    "answer_en": "__TRAIT__",
    "answer_hi": "__TRAIT__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 46,
    "question_en": "What does the 'array_splice()' function's fourth parameter do?",
    "question_hi": "'array_splice()' फंक्शन का चौथा पैरामीटर क्या करता है?",
    "options_en": ["Replacement array", "Array to insert", "Both A and B", "Insertion array"],
    "options_hi": ["रिप्लेसमेंट ऐरे", "इन्सर्ट करने के लिए ऐरे", "A और B दोनों", "इन्सर्शन ऐरे"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 47,
    "question_en": "Which function is used to get the current file name?",
    "question_hi": "करंट फाइल नाम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["__FILE__", "file()", "current_file()", "get_file()"],
    "options_hi": ["__FILE__", "file()", "current_file()", "get_file()"],
    "answer_en": "__FILE__",
    "answer_hi": "__FILE__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 48,
    "question_en": "What is the purpose of the 'array_sum()' function with empty array?",
    "question_hi": "खाली ऐरे के साथ 'array_sum()' फंक्शन का उद्देश्य क्या है?",
    "options_en": ["Returns 0", "Returns null", "Returns false", "Returns empty"],
    "options_hi": ["0 रिटर्न करता है", "null रिटर्न करता है", "false रिटर्न करता है", "एम्प्टी रिटर्न करता है"],
    "answer_en": "Returns 0",
    "answer_hi": "0 रिटर्न करता है",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 49,
    "question_en": "Which function is used to get the current directory name?",
    "question_hi": "करंट डायरेक्टरी नाम प्राप्त करने के लिए किस फंक्शन का उपयोग होता है?",
    "options_en": ["__DIR__", "dir()", "current_dir()", "get_dir()"],
    "options_hi": ["__DIR__", "dir()", "current_dir()", "get_dir()"],
    "answer_en": "__DIR__",
    "answer_hi": "__DIR__",
    "attempted": false,
    "selected": ""
  },
  {
    "num": 50,
    "question_en": "What does the 'array_unique()' function's second parameter do?",
    "question_hi": "'array_unique()' फंक्शन का दूसरा पैरामीटर क्या करता है?",
    "options_en": ["Sorting flags", "Comparison type", "Both A and B", "Sort behavior"],
    "options_hi": ["सॉर्टिंग फ्लैग्स", "तुलना प्रकार", "A और B दोनों", "सॉर्ट बिहेवियर"],
    "answer_en": "Both A and B",
    "answer_hi": "A और B दोनों",
    "attempted": false,
    "selected": ""
  }
]


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